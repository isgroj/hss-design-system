import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{B as u}from"./Badge-hgnbtDHH.js";import"./index-yBjzXJbu.js";const p="_wrapper_eij2l_1",h="_table_eij2l_8",y="_th_eij2l_15",g="_sortIcon_eij2l_29",_="_tr_eij2l_38",v="_td_eij2l_45",r={wrapper:p,table:h,th:y,sortIcon:g,tr:_,td:v};function l({columns:a,data:d}){return e.jsx("div",{className:r.wrapper,children:e.jsxs("table",{className:r.table,children:[e.jsx("thead",{children:e.jsx("tr",{children:a.map(t=>e.jsxs("th",{className:r.th,children:[t.header,t.sortable&&e.jsx("span",{className:r.sortIcon,children:"↕"})]},t.key))})}),e.jsx("tbody",{children:d.map((t,m)=>e.jsx("tr",{className:r.tr,children:a.map(s=>e.jsx("td",{className:r.td,children:s.render?s.render(t[s.key],t):String(t[s.key]??"")},s.key))},m))})]})})}l.__docgenInfo={description:"",methods:[],displayName:"DataTable",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"Column",elements:[{name:"T"}],raw:"Column<T>"}],raw:"Column<T>[]"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: 'asc' | 'desc') => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:"'asc' | 'desc'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"}]},name:"direction"}],return:{name:"void"}}},description:""}}};const f={title:"Patterns/DataTable",component:l,parameters:{layout:"padded"}},b=[{name:"Patient Demographics",status:"Active",records:45200,lastUpdated:"2 hours ago"},{name:"Claims History",status:"Active",records:128400,lastUpdated:"1 hour ago"},{name:"Provider Network",status:"Syncing",records:8920,lastUpdated:"15 min ago"},{name:"Lab Results Archive",status:"Archived",records:892100,lastUpdated:"3 days ago"},{name:"Rx Transactions",status:"Active",records:234500,lastUpdated:"30 min ago"}],n={args:{columns:[{key:"name",header:"Dataset",sortable:!0},{key:"status",header:"Status",render:a=>{const d=a==="Active"?"success":a==="Syncing"?"info":"default";return e.jsx(u,{variant:d,size:"sm",children:String(a)})}},{key:"records",header:"Records",sortable:!0,render:a=>Number(a).toLocaleString()},{key:"lastUpdated",header:"Last Updated",sortable:!0}],data:b}};var o,i,c;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: 'name',
      header: 'Dataset',
      sortable: true
    }, {
      key: 'status',
      header: 'Status',
      render: value => {
        const variant = value === 'Active' ? 'success' : value === 'Syncing' ? 'info' : 'default';
        return <Badge variant={variant} size="sm">{String(value)}</Badge>;
      }
    }, {
      key: 'records',
      header: 'Records',
      sortable: true,
      render: value => Number(value).toLocaleString()
    }, {
      key: 'lastUpdated',
      header: 'Last Updated',
      sortable: true
    }],
    data: sampleData
  }
}`,...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const S=["Default"];export{n as Default,S as __namedExportsOrder,f as default};
