"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[257],{52638:(M,C,t)=>{t.r(C),t.d(C,{TechDocsCustomHome:()=>G});var e=t(14041),h=t(73466),S=t(58837),f=t(92651),T=t(75757),r=t(20356),y=t(45495),A=t(11638),p=t(5124),n=t(22968),D=t(40703),P=t(59469),x=t(48653),B=t(57369);const R=a=>{const{entities:l}=a,d=(0,A.Sf)(y.b),m=(0,p.u)(p.p);return l?e.createElement(n.s3,{"data-testid":"docs-explore"},l!=null&&l.length?l.map((s,i)=>{var u,c;return e.createElement(D.A,{key:i},e.createElement(B.A,null,e.createElement(n.f1,{title:(u=s.metadata.title)!=null?u:s.metadata.name})),e.createElement(x.A,null,s.metadata.description),e.createElement(P.A,null,e.createElement(n.Su,{to:d({namespace:(0,r.t)((c=s.metadata.namespace)!=null?c:"default",m),kind:(0,r.t)(s.kind,m),name:(0,r.t)(s.metadata.name,m)}),color:"primary","data-testid":"read_docs"},"Read Docs")))}):null):null};var H=t(45250),I=t(17520);const U={DocsTable:r.D,DocsCardGrid:R},F=({config:a,entities:l,index:d})=>{const s=(0,S.A)({panelContainer:{marginBottom:"2rem",...a.panelCSS?a.panelCSS:{}}})(),{loading:i,isOwnedEntity:u}=(0,f.mM)(),c=U[a.panelType],E=l.filter(o=>a.filterPredicate==="ownedByUser"?i?!1:u(o):typeof a.filterPredicate=="function"&&a.filterPredicate(o));return e.createElement(e.Fragment,null,e.createElement(n.dv,{title:a.title,description:a.description},d===0?e.createElement(n.Yl,null,"Discover documentation in your ecosystem."):null),e.createElement("div",{className:s.panelContainer},e.createElement(c,{"data-testid":"techdocs-custom-panel",entities:E})))},G=a=>{const{tabsConfig:l}=a,[d,m]=(0,e.useState)(0),s=(0,p.u)(f.vp),{value:i,loading:u,error:c}=(0,h.A)(async()=>(await s.getEntities({filter:{"metadata.annotations.backstage.io/techdocs-ref":T.cr},fields:["apiVersion","kind","metadata","relations","spec.owner","spec.type"]})).items.filter(v=>{var g;return!!((g=v.metadata.annotations)!=null&&g["backstage.io/techdocs-ref"])})),E=l[d];return u?e.createElement(r.T,null,e.createElement(n.UC,null,e.createElement(n.ke,null))):c?e.createElement(r.T,null,e.createElement(n.UC,null,e.createElement(n.Bp,{severity:"error",title:"Could not load available documentation."},e.createElement(n.z7,{language:"text",text:c.toString()})))):e.createElement(r.T,null,e.createElement(n.of,{selectedIndex:d,onChange:o=>m(o),tabs:l.map(({label:o},v)=>({id:v.toString(),label:o}))}),e.createElement(n.UC,{"data-testid":"techdocs-content"},E.panels.map((o,v)=>e.createElement(F,{key:v,config:o,entities:i||[],index:v}))))}}}]);})();

//# sourceMappingURL=257.4b809b2d.chunk.js.map