import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{C as d}from"./Card-Cm3MEkj3.js";import"./index-yBjzXJbu.js";const w={title:"Core/Card",component:d,argTypes:{elevated:{control:"boolean"},padding:{control:"select",options:["none","sm","md","lg"]}}},a={args:{children:"Card content goes here. This is a basic surface container.",padding:"md"}},r={args:{children:"Elevated card with shadow.",elevated:!0,padding:"md"}},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[e.jsx(d,{padding:"sm",style:{width:200},children:"Small padding"}),e.jsx(d,{padding:"md",style:{width:200},children:"Medium padding"}),e.jsx(d,{padding:"lg",style:{width:200},children:"Large padding"}),e.jsx(d,{elevated:!0,padding:"md",style:{width:200},children:"Elevated"})]})};var t,n,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: 'Card content goes here. This is a basic surface container.',
    padding: 'md'
  }
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var l,o,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Elevated card with shadow.',
    elevated: true,
    padding: 'md'
  }
}`,...(p=(o=r.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var c,m,g;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
  }}>
      <Card padding="sm" style={{
      width: 200
    }}>Small padding</Card>
      <Card padding="md" style={{
      width: 200
    }}>Medium padding</Card>
      <Card padding="lg" style={{
      width: 200
    }}>Large padding</Card>
      <Card elevated padding="md" style={{
      width: 200
    }}>Elevated</Card>
    </div>
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const C=["Default","Elevated","Variants"];export{a as Default,r as Elevated,s as Variants,C as __namedExportsOrder,w as default};
