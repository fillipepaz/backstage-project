"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6017],{16017:(H,S,n)=>{n.r(S),n.d(S,{ApiExplorerIndexPage:()=>K,DefaultApiExplorerPage:()=>L});var i=n(14041),v=n(18690),r=n(22968),h=n(5124),C=n(11638),m=n(96472),p=n(92651),G=n(33861),b=n(17899),B=n(99993);const D=[m.C.columns.createTitleColumn({hidden:!0}),m.C.columns.createNameColumn({defaultKind:"API"}),m.C.columns.createSystemColumn(),m.C.columns.createOwnerColumn(),m.C.columns.createSpecTypeColumn(),m.C.columns.createSpecLifecycleColumn(),m.C.columns.createMetadataDescriptionColumn(),m.C.columns.createTagsColumn()],L=I=>{var R;const{initiallySelectedFilter:w="all",columns:t,actions:z}=I,d=`${(R=(0,h.u)(h.p).getOptionalString("organization.name"))!=null?R:"Backstage"} API Explorer`,F=(0,C.Sf)(G.b),{allowed:M}=(0,b.JT)({permission:B.C4});return i.createElement(r.dT,{themeId:"apis",title:"APIs",subtitle:d,pageTitleOverride:"APIs"},i.createElement(r.UC,null,i.createElement(r.dv,{title:""},M&&i.createElement(r.ly,{title:"Register Existing API",to:F==null?void 0:F()}),i.createElement(r.Yl,null,"All your APIs")),i.createElement(p.B9,null,i.createElement(p.GI,null,i.createElement(p.GI.Filters,null,i.createElement(p.mb,{initialFilter:"api",hidden:!0}),i.createElement(p.QD,null),i.createElement(p.y2,{initialFilter:w}),i.createElement(p.t3,null),i.createElement(p.WI,null),i.createElement(p.mo,null)),i.createElement(p.GI.Content,null,i.createElement(m.C,{columns:t||D,actions:z}))))))},K=I=>(0,v.P1)()||i.createElement(L,{...I})},96472:(H,S,n)=>{n.d(S,{C:()=>j});var i=n(29835),v=n(22968),r=n(92651),h=n(2069),C=n(72501),m=n(58837),p=n(7031);const b={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"};var B=n(75625),D=n(39330),L=n(80109),K=n(15303),I=n(45250),R=n(65398),w=n.n(R),t=n(14041),z=n(67720),W=n(75173);const d=Object.freeze({createNameColumn(e){function l(o){var a;return((a=o.metadata)==null?void 0:a.title)||(0,r.SE)(o,{defaultKind:e==null?void 0:e.defaultKind})}return{title:"Name",field:"resolved.entityRef",highlight:!0,customSort({entity:o},{entity:a}){return l(o).localeCompare(l(a))},render:({entity:o})=>t.createElement(r.zI,{entityRef:o,defaultKind:(e==null?void 0:e.defaultKind)||"Component"})}},createSystemColumn(){return{title:"System",field:"resolved.partOfSystemRelationTitle",render:({resolved:e})=>t.createElement(r.iI,{entityRefs:e.partOfSystemRelations,defaultKind:"system"})}},createOwnerColumn(){return{title:"Owner",field:"resolved.ownedByRelationsTitle",render:({resolved:e})=>t.createElement(r.iI,{entityRefs:e.ownedByRelations,defaultKind:"group"})}},createSpecTargetsColumn(){return{title:"Targets",field:"entity.spec.targets",customFilterAndSearch:(e,l)=>{var o,a,s,c,u,f,T,O,N,x;let A=[];return(a=(o=l.entity)==null?void 0:o.spec)!=null&&a.targets&&Array.isArray((c=(s=l.entity)==null?void 0:s.spec)==null?void 0:c.targets)?A=(f=(u=l.entity)==null?void 0:u.spec)==null?void 0:f.targets:(O=(T=l.entity)==null?void 0:T.spec)!=null&&O.target&&(A=[(x=(N=l.entity)==null?void 0:N.spec)==null?void 0:x.target]),A.join(", ").toLocaleUpperCase("en-US").includes(e.toLocaleUpperCase("en-US"))},render:({entity:e})=>{var l,o;return t.createElement(t.Fragment,null,(((l=e==null?void 0:e.spec)==null?void 0:l.targets)||((o=e==null?void 0:e.spec)==null?void 0:o.target))&&t.createElement(v.Mm,{text:(e.spec.targets||[e.spec.target]).join(", "),placement:"bottom-start"}))}}},createSpecTypeColumn(e={hidden:!1}){return{title:"Type",field:"entity.spec.type",hidden:e.hidden,width:"auto"}},createSpecLifecycleColumn(){return{title:"Lifecycle",field:"entity.spec.lifecycle"}},createMetadataDescriptionColumn(){return{title:"Description",field:"entity.metadata.description",render:({entity:e})=>t.createElement(v.Mm,{text:e.metadata.description,placement:"bottom-start"}),width:"auto"}},createTagsColumn(){return{title:"Tags",field:"entity.metadata.tags",cellStyle:{padding:"0px 16px 0px 20px"},render:({entity:e})=>t.createElement(t.Fragment,null,e.metadata.tags&&e.metadata.tags.map(l=>t.createElement(z.A,{key:l,label:l,size:"small",variant:"outlined",style:{marginBottom:"0px"}}))),width:"auto"}},createTitleColumn(e){return{title:"Title",field:"entity.metadata.title",hidden:e==null?void 0:e.hidden,searchable:!0}},createLabelColumn(e,l){function o(a,s){var c;const u=(c=s.metadata)==null?void 0:c.labels;return u&&u[a]||""}return{title:(l==null?void 0:l.title)||"Label",field:"entity.metadata.labels",cellStyle:{padding:"0px 16px 0px 20px"},customSort({entity:a},{entity:s}){return o(e,a).localeCompare(o(e,s))},render:({entity:a})=>{var s;const c=(s=a.metadata)==null?void 0:s.labels,u=c&&c[e]||(l==null?void 0:l.defaultValue);return t.createElement(t.Fragment,null,u&&t.createElement(z.A,{key:u,label:u,size:"small",variant:"outlined"}))},width:"auto"}},createNamespaceColumn(){return{title:"Namespace",field:"entity.metadata.namespace",width:"auto"}}}),F=(0,m.A)(e=>({root:{paddingTop:e.spacing(1.25),paddingLeft:e.spacing(2.5),paddingBottom:e.spacing(.75),display:"flex",justifyContent:"space-between"},text:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}),{name:"BackstageTableToolbar"});function M(e){const l=F();return t.createElement(W.A,{className:l.root},t.createElement(C.A,{variant:"h5",className:l.text},e.title),t.createElement(r.lD,null))}function te(e){const{columns:l,data:o,next:a,prev:s,title:c,isLoading:u,options:f}=e;return t.createElement(v.XI,{title:u?"":c,columns:l,data:o,options:{...f,paginationPosition:"both",pageSizeOptions:[],showFirstLastPageButtons:!1,pageSize:Number.MAX_SAFE_INTEGER,emptyRowsWhenPaging:!1},onPageChange:T=>{T>0?a==null||a():s==null||s()},components:{Toolbar:M},page:s?1:0,totalCount:a?Number.MAX_VALUE:Number.MAX_SAFE_INTEGER,localization:{pagination:{labelDisplayedRows:""}}})}const X=({filters:e,entities:l})=>{var o;const a=e.type===void 0;return[d.createTitleColumn({hidden:!0}),d.createNameColumn({defaultKind:(o=e.kind)==null?void 0:o.value}),...s(),d.createMetadataDescriptionColumn(),d.createTagsColumn()];function s(){var c;const u=[d.createSystemColumn(),d.createOwnerColumn(),d.createSpecTypeColumn({hidden:!a}),d.createSpecLifecycleColumn()];switch((c=e.kind)==null?void 0:c.value){case"user":return[];case"domain":case"system":return[d.createOwnerColumn()];case"group":case"template":return[d.createSpecTypeColumn({hidden:!a})];case"location":return[d.createSpecTypeColumn({hidden:!a}),d.createSpecTargetsColumn()];default:return l.every(f=>f.metadata.namespace==="default")?u:[...u,d.createNamespaceColumn()]}}},ne=(0,p.A)({root:{color:"#f3ba37"}})(L.A),le=(e,l)=>{const o=a=>a.metadata.title||(0,r.SE)(a,{defaultKind:"Component"});return o(e).localeCompare(o(l))},j=e=>{var l,o,a,s;const{columns:c=X,tableOptions:u,subtitle:f,emptyContent:T}=e,{isStarredEntity:O,toggleStarredEntity:N}=(0,r.IT)(),x=(0,r.nK)(),{loading:A,error:Y,entities:$,filters:V,pageInfo:U,totalItems:ae}=x,oe=!!U,J=(0,t.useMemo)(()=>typeof c=="function"?c(x):c,[c,x]);if(Y)return t.createElement("div",null,t.createElement(v.Bp,{severity:"error",title:"Could not fetch catalog entities."},t.createElement(v.z7,{language:"text",text:Y.toString()})));const ie=[({entity:y})=>{var E;const g=(E=y.metadata.annotations)==null?void 0:E[i._P],P="View";return{icon:()=>t.createElement(t.Fragment,null,t.createElement(C.A,{style:b},P),t.createElement(D.A,{fontSize:"small"})),tooltip:P,disabled:!g,onClick:()=>{g&&window.open(g,"_blank")}}},({entity:y})=>{var E;const g=(E=y.metadata.annotations)==null?void 0:E[i.P],P="Edit";return{icon:()=>t.createElement(t.Fragment,null,t.createElement(C.A,{style:b},P),t.createElement(B.A,{fontSize:"small"})),tooltip:P,disabled:!g,onClick:()=>{g&&window.open(g,"_blank")}}},({entity:y})=>{const E=O(y),g=E?"Remove from favorites":"Add to favorites";return{cellStyle:{paddingLeft:"1em"},icon:()=>t.createElement(t.Fragment,null,t.createElement(C.A,{style:b},g),E?t.createElement(ne,null):t.createElement(K.A,null)),tooltip:g,onClick:()=>N(y)}}],re=((l=V.kind)==null?void 0:l.value)||"",se=((o=V.type)==null?void 0:o.value)||"",Z=[(0,I.capitalize)((s=(a=V.user)==null?void 0:a.value)!=null?s:"all"),se,w()(re)].filter(y=>y).join(" "),ce=`${Z} (${ae})`,k=e.actions||ie,q={actionsColumnIndex:-1,loadingType:"linear",showEmptyDataSourceMessage:!A,padding:"dense",...u};if(oe)return t.createElement(te,{columns:J,emptyContent:T,isLoading:A,title:Z,actions:k,subtitle:f,options:q,data:$.map(Q),next:U.next,prev:U.prev});const _=$.sort(le).map(Q),ee=20,de=_.length>ee;return t.createElement(v.XI,{isLoading:A,columns:J,options:{paging:de,pageSize:ee,pageSizeOptions:[20,50,100],...q},title:ce,data:_,actions:k,subtitle:f,emptyContent:T})};j.columns=d,j.defaultColumnsFunc=X;function Q(e){const l=(0,h.g)(e,i.jn,{kind:"system"}),o=(0,h.g)(e,i.vv);return{entity:e,resolved:{name:(0,r.SE)(e,{defaultKind:"Component"}),entityRef:(0,i.U2)(e),ownedByRelationsTitle:o.map(a=>(0,r.SE)(a,{defaultKind:"group"})).join(", "),ownedByRelations:o,partOfSystemRelationTitle:l.map(a=>(0,r.SE)(a,{defaultKind:"system"})).join(", "),partOfSystemRelations:l}}}},39330:(H,S,n)=>{var i,v=n(4293),r=n(78920);i={value:!0},S.A=void 0;var h=r(n(14041)),C=v(n(74044)),m=(0,C.default)(h.createElement("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"OpenInNew");S.A=m}}]);})();

//# sourceMappingURL=6017.09520216.chunk.js.map