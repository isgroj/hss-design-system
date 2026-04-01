import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{C as r}from"./Chip-CXsOcoTd.js";import"./index-yBjzXJbu.js";const m={title:"Core/Chip",component:r,argTypes:{variant:{control:"select",options:["filter","status"]},active:{control:"boolean"},removable:{control:"boolean"}}},a={args:{children:"Filter chip"}},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(r,{variant:"filter",children:"Inactive"}),e.jsx(r,{variant:"filter",active:!0,children:"Active"}),e.jsx(r,{variant:"filter",removable:!0,children:"Removable"}),e.jsx(r,{variant:"status",children:"Status"})]})};var i,s,o;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'Filter chip'
  }
}`,...(o=(s=a.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var n,l,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap'
  }}>
      <Chip variant="filter">Inactive</Chip>
      <Chip variant="filter" active>Active</Chip>
      <Chip variant="filter" removable>Removable</Chip>
      <Chip variant="status">Status</Chip>
    </div>
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const h=["Default","Variants"];export{a as Default,t as Variants,h as __namedExportsOrder,m as default};
