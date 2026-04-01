# Databricks notebook source
# MAGIC %md
# MAGIC # HSS Data — Design Content Generator
# MAGIC Generates synthetic donor, queue, and dashboard data modeled on real Databricks table schemas.
# MAGIC
# MAGIC **Source tables referenced:**
# MAGIC - `padella_prod.development_gold.vw_patient_information` (donor demographics)
# MAGIC - `padella_prod.development_bronze.enriched_epic_data_stream` (wealth/philanthropy)
# MAGIC - `padella_prod.caboodle_silver.patientdim` (clinical patient record)
# MAGIC - `padella_prod.caboodle_silver.encounterfact` (visit timeline)
# MAGIC - `padella_prod.caboodle_silver.providerdim` (providers)
# MAGIC - `padella_prod.caboodle_silver.departmentdim` (departments/service lines)
# MAGIC - `padella_prod.salesforce_silver` (fundraising CRM)

# COMMAND ----------

# MAGIC %md
# MAGIC ## 1. Verify Table Access
# MAGIC Confirm we can read the real table schemas before generating synthetic data.

# COMMAND ----------

from pyspark.sql import functions as F
import json
from datetime import date, timedelta
import random

# Verify table access — read schemas only, no patient data
tables_to_check = [
    "padella_prod.development_gold.vw_patient_information",
    "padella_prod.development_bronze.enriched_epic_data_stream",
    "padella_prod.caboodle_silver.patientdim",
    "padella_prod.caboodle_silver.encounterfact",
    "padella_prod.caboodle_silver.providerdim",
    "padella_prod.caboodle_silver.departmentdim",
]

table_schemas = {}
for t in tables_to_check:
    try:
        df = spark.table(t)
        table_schemas[t] = [f.name for f in df.schema.fields]
        print(f"✅ {t}: {len(df.schema.fields)} columns")
    except Exception as e:
        print(f"❌ {t}: {e}")

# COMMAND ----------

# MAGIC %md
# MAGIC ## 2. Sample Real Metadata (No PHI)
# MAGIC Pull non-identifying reference data: service lines, specialties, department names.

# COMMAND ----------

# Get real service lines / specialties / departments (non-PHI reference data)
try:
    service_lines = (
        spark.table("padella_prod.caboodle_silver.providerdim")
        .select("PrimarySpecialty")
        .where(F.col("PrimarySpecialty").isNotNull())
        .distinct()
        .limit(20)
        .toPandas()["PrimarySpecialty"]
        .tolist()
    )
    print(f"Service lines sampled: {service_lines[:10]}")
except Exception:
    service_lines = [
        "Hip & Knee", "Spine", "Sports Medicine", "Rheumatology",
        "Hand & Upper Extremity", "Foot & Ankle", "Orthopedic Surgery",
        "Pain Management", "Rehabilitation", "Radiology"
    ]
    print(f"Using fallback service lines: {service_lines[:5]}")

try:
    departments = (
        spark.table("padella_prod.caboodle_silver.departmentdim")
        .select("Name")
        .where(F.col("Name").isNotNull())
        .distinct()
        .limit(20)
        .toPandas()["Name"]
        .tolist()
    )
    print(f"Departments sampled: {departments[:10]}")
except Exception:
    departments = ["Orthopedic Surgery", "Physical Therapy", "Radiology", "Pain Clinic"]
    print(f"Using fallback departments: {departments}")

# Get wealth data field distributions (aggregate stats only, no individual records)
try:
    wealth_stats = (
        spark.table("padella_prod.development_bronze.enriched_epic_data_stream")
        .select("Investable_Assets_Range")
        .where(F.col("Investable_Assets_Range").isNotNull())
        .groupBy("Investable_Assets_Range")
        .count()
        .orderBy(F.desc("count"))
        .limit(10)
        .toPandas()
    )
    asset_ranges = wealth_stats["Investable_Assets_Range"].tolist()
    print(f"Asset ranges: {asset_ranges[:5]}")
except Exception:
    asset_ranges = ["$1M-$2.5M", "$2.5M-$5M", "$5M-$10M", "$10M-$25M", "$25M+"]
    print(f"Using fallback asset ranges: {asset_ranges}")

# COMMAND ----------

# MAGIC %md
# MAGIC ## 3. Generate Synthetic Data
# MAGIC Create realistic fake donor records matching the design's content structure.

# COMMAND ----------

random.seed(42)

# Synthetic donor names (completely fabricated)
DONOR_NAMES = [
    {"first": "Sarah", "last": "Thompson", "household": "Thompson", "household_size": 3},
    {"first": "Emily", "last": "Davis", "household": "Davis", "household_size": 2},
    {"first": "Margaret", "last": "Chen", "household": "Chen-Williams", "household_size": 4},
    {"first": "Robert", "last": "Anderson", "household": "Anderson", "household_size": 2},
    {"first": "James", "last": "Wilson", "household": "Wilson", "household_size": 3},
    {"first": "Patricia", "last": "Martinez", "household": "Martinez-Lopez", "household_size": 5},
    {"first": "David", "last": "Kim", "household": "Kim", "household_size": 2},
]

# Synthetic providers
PROVIDERS = [
    {"name": "Dr. Rebecca Martinez", "specialty": "Hip & Knee"},
    {"name": "Dr. James Liu", "specialty": "Sports Medicine"},
    {"name": "Dr. Andrew Park", "specialty": "Spine"},
    {"name": "Dr. Sarah Chen", "specialty": "Rheumatology"},
    {"name": "Dr. Michael Torres", "specialty": "Hand & Upper Extremity"},
]

# Synthetic gift officers
GIFT_OFFICERS = [
    {"name": "John Doe", "portfolio_size": 22, "response_days": 1.8, "conversion": 0.42, "pipeline": 450000},
    {"name": "Jane Smith", "portfolio_size": 18, "response_days": 2.1, "conversion": 0.38, "pipeline": 320000},
    {"name": "Tom Nguyen", "portfolio_size": 12, "response_days": 3.2, "conversion": 0.28, "pipeline": 180000},
    {"name": "Lisa Park", "portfolio_size": 20, "response_days": 2.0, "conversion": 0.35, "pipeline": 290000},
]

STATUSES = ["In Review", "Assigned", "New Prospect", "Contacted", "Cultivation"]
SEGMENTS = ["High Net Worth", "Major Donor", "Planned Giving", "Annual Fund", "Grateful Patient"]
URGENCY_LEVELS = ["red", "red", "blue", "blue", "green", "green", "green"]
VISIT_TYPES = ["Follow-up visit", "Pre-surgical consultation", "Initial evaluation", "Annual check-up", "Post-operative follow-up"]

FLAGS_POOL = [
    "Foundation Board", "Philanthropic Giver", "Top Donor",
    "Money in Motion", "AMB", "Grateful Patient", "Board Member"
]

# COMMAND ----------

def generate_visits(donor_idx, today):
    """Generate synthetic clinical visit timeline."""
    num_visits = random.randint(2, 6)
    visits = []
    base_date = today - timedelta(days=random.randint(5, 30))

    for i in range(num_visits):
        visit_date = base_date - timedelta(days=i * random.randint(45, 120))
        provider = random.choice(PROVIDERS)
        visit_type = VISIT_TYPES[min(i, len(VISIT_TYPES) - 1)]
        visits.append({
            "date": visit_date.strftime("%b %d"),
            "year": str(visit_date.year),
            "service_line": provider["specialty"],
            "provider": provider["name"],
            "type": visit_type,
            "velocity": f"{num_visits} visits in {(today - visits[0]['date_obj'] if i > 0 else timedelta(days=180)).days // 30} months" if i == 0 else None,
            "date_obj": visit_date,
        })

    # Clean up date_obj (not JSON serializable)
    for v in visits:
        del v["date_obj"]
        if v["velocity"] is None:
            del v["velocity"]

    return visits


def generate_score_breakdown():
    """Generate composite score with sub-scores."""
    wealth = random.randint(80, 99)
    recency = random.randint(75, 98)
    frequency = random.randint(70, 95)
    prior_giving = random.randint(60, 99)
    household = random.randint(65, 98)
    composite = round((wealth * 0.25 + recency * 0.20 + frequency * 0.15 + prior_giving * 0.25 + household * 0.15))
    return {
        "composite": composite,
        "wealth_capacity": wealth,
        "visit_recency": recency,
        "visit_frequency": frequency,
        "prior_giving": prior_giving,
        "household_activity": household,
    }


def generate_wealth_profile():
    """Generate wealth & philanthropy data matching enriched_epic_data_stream schema."""
    net_worth_ranges = ["$1M–$2.5M", "$2.5M–$5M", "$5M–$10M", "$10M–$25M", "$25M–$50M", "$50M+"]
    return {
        "net_worth": random.choice(net_worth_ranges),
        "investable_assets": random.choice(asset_ranges) if asset_ranges else "$5M–$10M",
        "philanthropic_giver": random.choice([True, True, True, False]),
        "top_philanthropic_donor": random.choice([True, False, False, False]),
        "foundation_association": random.choice([True, False]),
        "foundation_officer_trustee": random.choice([True, False, False]),
        "nonprofit_board_member": random.choice([True, False]),
        "political_donor": random.choice([True, False, False]),
        "boat_owner": random.choice([True, False, False, False]),
        "luxury_car_owner": random.choice([True, False]),
        "plane_owner": random.choice([True, False, False, False, False]),
        "match_confidence": random.choice(["High", "Medium", "High", "High"]),
        "money_in_motion": random.choice([True, False, False]),
        "windfall_trigger": random.choice([None, None, "Recent Mortgage", "Recent Mover"]),
        "recent_death_in_family": False,
        "recently_divorced": False,
    }


today = date(2026, 3, 31)

# COMMAND ----------

# MAGIC %md
# MAGIC ## 4. Assemble Full Design Content Payload

# COMMAND ----------

# Build donor records
donors = []
for i, d in enumerate(DONOR_NAMES):
    score = generate_score_breakdown()
    wealth = generate_wealth_profile()
    days_in_queue = [3, 5, 7, 2, 10, 4, 1][i]
    generosity_days = random.randint(5, 30)

    donor = {
        "id": f"P-{i+1:03d}",
        "name": f"{d['first']} {d['last']}",
        "first_name": d["first"],
        "last_name": d["last"],
        "score": score,
        "segment": SEGMENTS[i % len(SEGMENTS)],
        "status": STATUSES[i % len(STATUSES)],
        "urgency": URGENCY_LEVELS[i],
        "days_in_queue": days_in_queue,
        "generosity_window": {
            "days_remaining": generosity_days,
            "close_date": (today + timedelta(days=generosity_days)).strftime("%b %d, %Y"),
        },
        "household": {
            "name": d["household"],
            "size": d["household_size"],
        },
        "confidence": f"{random.randint(85, 99)}%",
        "blackout_dates": f"Apr {random.randint(1,5)}–{random.randint(6,10)}" if random.random() > 0.5 else None,
        "gift_officer": random.choice(GIFT_OFFICERS)["name"],
        "service_line": random.choice(PROVIDERS)["specialty"],
        "wealth": wealth,
        "flags": random.sample(FLAGS_POOL, k=random.randint(1, 3)),
        "visits": generate_visits(i, today),
        "ambassador_services": random.choice([True, False]),
    }
    donors.append(donor)

# Build queue view (sorted by urgency)
queue = sorted(donors, key=lambda d: {"red": 0, "blue": 1, "green": 2}[d["urgency"]])

# Build dashboard
total_pipeline = sum(o["pipeline"] for o in GIFT_OFFICERS)
dashboard = {
    "title": "Gift Officer Performance",
    "metrics": {
        "active_officers": len(GIFT_OFFICERS),
        "avg_portfolio_size": round(sum(o["portfolio_size"] for o in GIFT_OFFICERS) / len(GIFT_OFFICERS)),
        "avg_response_time": f"{round(sum(o['response_days'] for o in GIFT_OFFICERS) / len(GIFT_OFFICERS), 1)} days",
        "team_conversion_rate": f"{round(sum(o['conversion'] for o in GIFT_OFFICERS) / len(GIFT_OFFICERS) * 100)}%",
        "total_pipeline_value": f"${total_pipeline / 1_000_000:.1f}M",
    },
    "officers": GIFT_OFFICERS,
    "alerts": [
        "2 unassigned prospects in queue >5 days — Tom Nguyen has available capacity",
        "Margaret Chen score increased +8 this week (wealth re-screening complete)",
    ],
}

# Full payload
design_content = {
    "generated_at": today.isoformat(),
    "source": "Databricks — padella_prod (synthetic)",
    "donors": donors,
    "queue": [
        {
            "name": d["name"],
            "urgency": d["urgency"],
            "segment": d["segment"],
            "status": d["status"],
            "days": d["days_in_queue"],
            "service_line": d["service_line"],
            "gift_officer": d["gift_officer"],
            "net_worth": d["wealth"]["net_worth"],
            "flags": d["flags"],
        }
        for d in queue
    ],
    "dashboard": dashboard,
    "data_lineage": {
        "donor_demographics": "padella_prod.development_gold.vw_patient_information",
        "wealth_philanthropy": "padella_prod.development_bronze.enriched_epic_data_stream",
        "clinical_visits": "padella_prod.caboodle_silver.encounterfact (HIPAA-safe: service line + provider only)",
        "patient_record": "padella_prod.caboodle_silver.patientdim",
        "providers": "padella_prod.caboodle_silver.providerdim",
        "departments": "padella_prod.caboodle_silver.departmentdim",
        "fundraising_crm": "padella_prod.salesforce_silver (contacts, opportunities)",
    },
}

print(json.dumps(design_content, indent=2, default=str))

# COMMAND ----------

# MAGIC %md
# MAGIC ## 5. Save to DBFS for Downstream Use

# COMMAND ----------

# Output the JSON payload as notebook result for downstream consumption
# (DBFS write requires elevated permissions — use notebook output instead)
import base64
content_json = json.dumps(design_content, indent=2, default=str)
print(f"✅ Generated {len(donors)} donor records, {len(GIFT_OFFICERS)} officers")
print(f"   JSON payload size: {len(content_json):,} bytes")
print(f"\nTo use: copy JSON from cell 4 output above, or query this notebook via Jobs API")

# Set notebook exit value for programmatic access
dbutils.notebook.exit(content_json)

# COMMAND ----------

# MAGIC %md
# MAGIC ## 6. Content Mapping — Figma Node → Data Field
# MAGIC Reference for updating Figma text nodes with data from this notebook.

# COMMAND ----------

figma_mapping = {
    "Donor Detail — Sarah Thompson": {
        "49:52 (Sarah Thompson)": "donors[0].name",
        "49:53 (Score: 94)": "donors[0].score.composite",
        "49:54 (P-001)": "donors[0].id",
        "49:55 (Generosity Window)": "donors[0].generosity_window.days_remaining",
        "49:56 (Close date)": "donors[0].generosity_window.close_date",
        "49:63 (Assigned)": "donors[0].status",
        "49:64 (Segment)": "donors[0].segment → high-capacity high-recency",
        "49:65 (Household)": "donors[0].household.name + size",
        "49:66 (Confidence)": "donors[0].confidence",
        "49:67 (Blackout)": "donors[0].blackout_dates",
        "49:95-111 (Visit rows)": "donors[0].visits[]",
        "49:115-141 (Score breakdown)": "donors[0].score.*",
    },
    "Donor Queue": {
        "49:412 (Title)": "queue.length + ' donors requiring action'",
        "49:442-448 (Rows 1-7)": "queue[] — name, urgency, segment, status, days, service_line, gift_officer, net_worth, flags",
    },
    "Gift Officer Dashboard": {
        "49:542 (Active Officers)": "dashboard.metrics.active_officers",
        "49:544 (Avg Portfolio)": "dashboard.metrics.avg_portfolio_size",
        "49:546 (Avg Response)": "dashboard.metrics.avg_response_time",
        "49:548 (Conversion)": "dashboard.metrics.team_conversion_rate",
        "49:550 (Pipeline)": "dashboard.metrics.total_pipeline_value",
        "49:626 (Alert)": "dashboard.alerts[0]",
    },
}

for screen, mappings in figma_mapping.items():
    print(f"\n{'='*60}")
    print(f"  {screen}")
    print(f"{'='*60}")
    for node, field in mappings.items():
        print(f"  {node}")
        print(f"    → {field}")
