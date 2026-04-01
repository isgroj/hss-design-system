import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{C as c}from"./Card-Cm3MEkj3.js";import{D as u}from"./DataStat-CRrFSFv2.js";import"./index-yBjzXJbu.js";const m="_row_1ga5c_1",p="_card_1ga5c_7",n={row:m,card:p};function d({metrics:o,size:i="md"}){return r.jsx("div",{className:n.row,children:o.map(e=>r.jsx(c,{padding:"md",className:n.card,children:r.jsx(u,{value:e.value,label:e.label,trend:e.trend,size:i})},e.label))})}d.__docgenInfo={description:"",methods:[],displayName:"MetricCardRow",props:{metrics:{required:!0,tsType:{name:"Array",elements:[{name:"Metric"}],raw:"Metric[]"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};const w={title:"Patterns/MetricCardRow",component:d,parameters:{layout:"padded"}},a={args:{metrics:[{label:"Total Records",value:"12,847",trend:{value:12.5,direction:"up"}},{label:"Active Users",value:"3,291",trend:{value:4.2,direction:"up"}},{label:"Error Rate",value:"0.3%",trend:{value:1.1,direction:"down"}},{label:"Avg Latency",value:"142ms",trend:{value:0,direction:"flat"}}]}};var t,l,s;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    metrics: [{
      label: 'Total Records',
      value: '12,847',
      trend: {
        value: 12.5,
        direction: 'up'
      }
    }, {
      label: 'Active Users',
      value: '3,291',
      trend: {
        value: 4.2,
        direction: 'up'
      }
    }, {
      label: 'Error Rate',
      value: '0.3%',
      trend: {
        value: 1.1,
        direction: 'down'
      }
    }, {
      label: 'Avg Latency',
      value: '142ms',
      trend: {
        value: 0,
        direction: 'flat'
      }
    }]
  }
}`,...(s=(l=a.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const _=["Default"];export{a as Default,_ as __namedExportsOrder,w as default};
