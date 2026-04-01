import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./index-BioFo8Zg.js";import{B as r}from"./Button-Cww3Ml5p.js";import"./index-yBjzXJbu.js";const x="_overlay_17wwh_1",v="_modal_17wwh_12",j="_sm_17wwh_22",k="_md_17wwh_23",O="_lg_17wwh_24",b="_header_17wwh_26",B="_title_17wwh_33",M="_close_17wwh_40",T="_body_17wwh_54",N="_footer_17wwh_63",n={overlay:x,modal:v,sm:j,md:k,lg:O,header:b,title:B,close:M,body:T,footer:N};function d({open:t,onClose:o,title:s,children:y,footer:u,size:_="md"}){return c.useEffect(()=>{if(t){const a=C=>{C.key==="Escape"&&o()};return document.addEventListener("keydown",a),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",a),document.body.style.overflow=""}}},[t,o]),t?e.jsx("div",{className:n.overlay,onClick:o,children:e.jsxs("div",{className:`${n.modal} ${n[_]}`,onClick:a=>a.stopPropagation(),role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:[e.jsxs("div",{className:n.header,children:[e.jsx("h2",{id:"modal-title",className:n.title,children:s}),e.jsx("button",{className:n.close,onClick:o,"aria-label":"Close",children:"✕"})]}),e.jsx("div",{className:n.body,children:y}),u&&e.jsx("div",{className:n.footer,children:u})]})}):null}d.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};const A={title:"Patterns/Modal",component:d,argTypes:{size:{control:"select",options:["sm","md","lg"]}}},l={render:t=>{const[o,s]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>s(!0),children:"Open Modal"}),e.jsx(d,{...t,open:o,onClose:()=>s(!1),title:"Confirm Action",footer:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"secondary",onClick:()=>s(!1),children:"Cancel"}),e.jsx(r,{onClick:()=>s(!1),children:"Confirm"})]}),children:e.jsx("p",{children:"Are you sure you want to proceed? This action will update the workbook configuration."})})]})}},i={render:()=>{const[t,o]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>o(!0),children:"Open Large Modal"}),e.jsxs(d,{open:t,onClose:()=>o(!1),title:"Dataset Configuration",size:"lg",footer:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"ghost",onClick:()=>o(!1),children:"Cancel"}),e.jsx(r,{onClick:()=>o(!1),children:"Save Changes"})]}),children:[e.jsx("p",{children:"Configure your dataset settings here. This modal can hold complex forms and content that requires more horizontal space."}),e.jsx("p",{style:{marginTop:16},children:"Additional configuration options would appear below with form fields, toggles, and dropdowns."})]})]})}};var p,m,f;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal {...args} open={open} onClose={() => setOpen(false)} title="Confirm Action" footer={<>
              <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => setOpen(false)}>Confirm</Button>
            </>}>
          <p>Are you sure you want to proceed? This action will update the workbook configuration.</p>
        </Modal>
      </>;
  }
}`,...(f=(m=l.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var h,g,w;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Large Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Dataset Configuration" size="lg" footer={<>
              <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => setOpen(false)}>Save Changes</Button>
            </>}>
          <p>Configure your dataset settings here. This modal can hold complex forms and content that requires more horizontal space.</p>
          <p style={{
          marginTop: 16
        }}>Additional configuration options would appear below with form fields, toggles, and dropdowns.</p>
        </Modal>
      </>;
  }
}`,...(w=(g=i.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const L=["Default","LargeModal"];export{l as Default,i as LargeModal,L as __namedExportsOrder,A as default};
