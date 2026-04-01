import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{D as s}from"./DataStat-CRrFSFv2.js";import"./index-yBjzXJbu.js";const b={title:"Core/DataStat",component:s,argTypes:{size:{control:"select",options:["sm","md","lg"]}}},a={args:{value:"12,847",label:"Total Records",trend:{value:12.5,direction:"up"}}},r={render:()=>e.jsxs("div",{style:{display:"flex",gap:32},children:[e.jsx(s,{size:"sm",value:"847",label:"Small",trend:{value:5,direction:"up"}}),e.jsx(s,{size:"md",value:"12,847",label:"Medium",trend:{value:3.2,direction:"down"}}),e.jsx(s,{size:"lg",value:"1.2M",label:"Large",trend:{value:0,direction:"flat"}})]})},t={args:{value:"98.6%",label:"Accuracy"}};var l,o,n;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    value: '12,847',
    label: 'Total Records',
    trend: {
      value: 12.5,
      direction: 'up'
    }
  }
}`,...(n=(o=a.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var d,i,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 32
  }}>
      <DataStat size="sm" value="847" label="Small" trend={{
      value: 5,
      direction: 'up'
    }} />
      <DataStat size="md" value="12,847" label="Medium" trend={{
      value: 3.2,
      direction: 'down'
    }} />
      <DataStat size="lg" value="1.2M" label="Large" trend={{
      value: 0,
      direction: 'flat'
    }} />
    </div>
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var u,m,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    value: '98.6%',
    label: 'Accuracy'
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const x=["Default","Sizes","WithoutTrend"];export{a as Default,r as Sizes,t as WithoutTrend,x as __namedExportsOrder,b as default};
