import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{C as h}from"./Chip-CXsOcoTd.js";import{I as v}from"./Input-BAdWMxaJ.js";import"./index-yBjzXJbu.js";import"./index-BioFo8Zg.js";const g="_bar_1usxa_1",y="_search_1usxa_11",_="_filters_1usxa_16",l={bar:g,search:y,filters:_};function d({filters:n=[],onFilterClick:t,showSearch:b=!0,searchPlaceholder:f="Search..."}){return e.jsxs("div",{className:l.bar,children:[b&&e.jsx("div",{className:l.search,children:e.jsx(v,{inputSize:"sm",placeholder:f,type:"search"})}),n.length>0&&e.jsx("div",{className:l.filters,children:n.map(a=>e.jsx(h,{variant:"filter",active:a.active,onClick:()=>t==null?void 0:t(a.label),children:a.label},a.label))})]})}d.__docgenInfo={description:"",methods:[],displayName:"FilterBar",props:{filters:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; active?: boolean }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"active",value:{name:"boolean",required:!1}}]}}],raw:"{ label: string; active?: boolean }[]"},description:"",defaultValue:{value:"[]",computed:!1}},onFilterClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(label: string) => void",signature:{arguments:[{type:{name:"string"},name:"label"}],return:{name:"void"}}},description:""},showSearch:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search...'",computed:!1}}}};const q={title:"Patterns/FilterBar",component:d,parameters:{layout:"fullscreen"}},r={args:{filters:[{label:"All",active:!0},{label:"Active"},{label:"Archived"},{label:"Drafts"}],showSearch:!0}},s={args:{filters:[{label:"Revenue",active:!0},{label:"Users"},{label:"Retention"}],showSearch:!1}};var i,o,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    filters: [{
      label: 'All',
      active: true
    }, {
      label: 'Active'
    }, {
      label: 'Archived'
    }, {
      label: 'Drafts'
    }],
    showSearch: true
  }
}`,...(c=(o=r.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var u,p,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    filters: [{
      label: 'Revenue',
      active: true
    }, {
      label: 'Users'
    }, {
      label: 'Retention'
    }],
    showSearch: false
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const R=["Default","FiltersOnly"];export{r as Default,s as FiltersOnly,R as __namedExportsOrder,q as default};
