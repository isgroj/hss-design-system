import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as y}from"./index-BioFo8Zg.js";import"./index-yBjzXJbu.js";const A="_alert_1nvv1_1",j="_icon_1nvv1_12",T="_content_1nvv1_24",D="_dismiss_1nvv1_29",N="_success_1nvv1_43",S="_error_1nvv1_52",P="_warning_1nvv1_61",V="_info_1nvv1_70",r={alert:A,icon:j,content:T,dismiss:D,success:N,error:S,warning:P,info:V},q={success:"✓",error:"✕",warning:"⚠",info:"ℹ"};function s({variant:t="info",dismissible:g=!1,className:_,children:h,...w}){const[x,b]=y.useState(!1);return x?null:e.jsxs("div",{role:"alert",className:`${r.alert} ${r[t]} ${_||""}`,...w,children:[e.jsx("span",{className:r.icon,children:q[t]}),e.jsx("div",{className:r.content,children:h}),g&&e.jsx("button",{className:r.dismiss,onClick:()=>b(!0),"aria-label":"Dismiss",children:"\\u2715"})]})}s.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{variant:{required:!1,tsType:{name:"union",raw:"'success' | 'error' | 'warning' | 'info'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},dismissible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]};const C={title:"Core/Alert",component:s,argTypes:{variant:{control:"select",options:["success","error","warning","info"]},dismissible:{control:"boolean"}}},n={args:{children:"This is an informational alert message.",variant:"info"}},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:400},children:[e.jsx(s,{variant:"success",children:"Operation completed successfully."}),e.jsx(s,{variant:"error",children:"Something went wrong. Please try again."}),e.jsx(s,{variant:"warning",children:"Please review before proceeding."}),e.jsx(s,{variant:"info",children:"New updates are available."})]})},i={args:{children:"This alert can be dismissed.",variant:"info",dismissible:!0}};var o,l,c;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'This is an informational alert message.',
    variant: 'info'
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,m,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    width: 400
  }}>
      <Alert variant="success">Operation completed successfully.</Alert>
      <Alert variant="error">Something went wrong. Please try again.</Alert>
      <Alert variant="warning">Please review before proceeding.</Alert>
      <Alert variant="info">New updates are available.</Alert>
    </div>
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,v,f;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'This alert can be dismissed.',
    variant: 'info',
    dismissible: true
  }
}`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const R=["Default","Variants","Dismissible"];export{n as Default,i as Dismissible,a as Variants,R as __namedExportsOrder,C as default};
