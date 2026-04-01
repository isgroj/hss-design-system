import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{I as o}from"./Input-BAdWMxaJ.js";import"./index-yBjzXJbu.js";import"./index-BioFo8Zg.js";const z={title:"Core/Input",component:o,argTypes:{inputSize:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"}}},r={args:{placeholder:"Enter text...",label:"Label"}},a={args:{placeholder:"Enter email",label:"Email",error:"Invalid email address",type:"email"}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:300},children:[e.jsx(o,{inputSize:"sm",placeholder:"Small",label:"Small"}),e.jsx(o,{inputSize:"md",placeholder:"Medium",label:"Medium"}),e.jsx(o,{inputSize:"lg",placeholder:"Large",label:"Large"})]})},s={args:{placeholder:"Disabled",label:"Disabled",disabled:!0}};var t,i,d;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...',
    label: 'Label'
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var n,p,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter email',
    label: 'Email',
    error: 'Invalid email address',
    type: 'email'
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,u,b;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    width: 300
  }}>
      <Input inputSize="sm" placeholder="Small" label="Small" />
      <Input inputSize="md" placeholder="Medium" label="Medium" />
      <Input inputSize="lg" placeholder="Large" label="Large" />
    </div>
}`,...(b=(u=l.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var g,h,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled',
    label: 'Disabled',
    disabled: true
  }
}`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const I=["Default","WithError","Sizes","Disabled"];export{r as Default,s as Disabled,l as Sizes,a as WithError,I as __namedExportsOrder,z as default};
