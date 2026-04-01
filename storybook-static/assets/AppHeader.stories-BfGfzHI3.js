import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{B as _}from"./Button-Cww3Ml5p.js";import"./index-yBjzXJbu.js";const f="_header_8lrnb_1",g="_left_8lrnb_12",h="_logoMark_8lrnb_18",k="_title_8lrnb_25",x="_nav_8lrnb_32",y="_navItem_8lrnb_38",N="_navActive_8lrnb_51",S="_actions_8lrnb_56",e={header:f,left:g,logoMark:h,title:k,nav:x,navItem:y,navActive:N,actions:S};function u({logo:v,title:b="HSS Data",navItems:n=[],actions:l}){return a.jsxs("header",{className:e.header,children:[a.jsxs("div",{className:e.left,children:[v||a.jsx("div",{className:e.logoMark}),a.jsx("span",{className:e.title,children:b})]}),n.length>0&&a.jsx("nav",{className:e.nav,children:n.map(t=>a.jsx("a",{href:t.href||"#",className:`${e.navItem} ${t.active?e.navActive:""}`,children:t.label},t.label))}),l&&a.jsx("div",{className:e.actions,children:l})]})}u.__docgenInfo={description:"",methods:[],displayName:"AppHeader",props:{logo:{required:!1,tsType:{name:"ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'HSS Data'",computed:!1}},navItems:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; href?: string; active?: boolean }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}},{key:"active",value:{name:"boolean",required:!1}}]}}],raw:"{ label: string; href?: string; active?: boolean }[]"},description:"",defaultValue:{value:"[]",computed:!1}},actions:{required:!1,tsType:{name:"ReactNode"},description:""}}};const q={title:"Patterns/AppHeader",component:u,parameters:{layout:"fullscreen"}},r={args:{navItems:[{label:"Dashboard",active:!0},{label:"Workbooks"},{label:"Reports"},{label:"Settings"}],actions:a.jsx(_,{size:"sm",children:"New Workbook"})}},s={args:{title:"HSS Data"}};var o,i,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    navItems: [{
      label: 'Dashboard',
      active: true
    }, {
      label: 'Workbooks'
    }, {
      label: 'Reports'
    }, {
      label: 'Settings'
    }],
    actions: <Button size="sm">New Workbook</Button>
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,m,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'HSS Data'
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const H=["Default","Minimal"];export{r as Default,s as Minimal,H as __namedExportsOrder,q as default};
