"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[878],{90878:(me,O,o)=>{o.r(O),o.d(O,{GroupProfileCard:()=>_e,MembersListCard:()=>He,MyGroupsSidebarItem:()=>Nt.k8,OwnershipCard:()=>xt,UserProfileCard:()=>at});var d=o(29835),N=o(2069),R=o(92651),b=o(77125),P=o(42899),X=o(73643),j=o(72501),ee=o(58837),pe=o(99703),Y=o(89575),oe=o(39850),t=o(14041),re=o(9546),ge=o(7031),T=o(83705),$e=o(90689),Pe=o(45065);function Se(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.boundaryCount,r=e===void 0?1:e,n=a.componentName,i=n===void 0?"usePagination":n,s=a.count,l=s===void 0?1:s,m=a.defaultPage,u=m===void 0?1:m,c=a.disabled,g=c===void 0?!1:c,p=a.hideNextButton,M=p===void 0?!1:p,h=a.hidePrevButton,v=h===void 0?!1:h,L=a.onChange,E=a.page,f=a.showFirstButton,C=f===void 0?!1:f,A=a.showLastButton,B=A===void 0?!1:A,z=a.siblingCount,G=z===void 0?1:z,H=(0,oe.A)(a,["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"]),x=(0,Pe.A)({controlled:E,default:u,name:i,state:"page"}),U=(0,$e.A)(x,2),S=U[0],_=U[1],w=function(F,D){E||_(D),L&&L(F,D)},I=function(F,D){var Pt=D-F+1;return Array.from({length:Pt},function(Rt,St){return F+St})},Q=I(1,Math.min(r,l)),k=I(Math.max(l-r+1,r+1),l),ne=Math.max(Math.min(S-G,l-r-G*2-1),r+2),Ne=Math.min(Math.max(S+G,r+G*2+2),k[0]-2),Lt=[].concat((0,T.A)(C?["first"]:[]),(0,T.A)(v?[]:["previous"]),(0,T.A)(Q),(0,T.A)(ne>r+2?["start-ellipsis"]:r+1<l-r?[r+1]:[]),(0,T.A)(I(ne,Ne)),(0,T.A)(Ne<l-r-1?["end-ellipsis"]:l-r>r?[l-r]:[]),(0,T.A)(k),(0,T.A)(M?[]:["next"]),(0,T.A)(B?["last"]:[])),Le=function(F){switch(F){case"first":return 1;case"previous":return S-1;case"next":return S+1;case"last":return l;default:return null}},$t=Lt.map(function($){return typeof $=="number"?{onClick:function(D){w(D,$)},type:"page",page:$,selected:$===S,disabled:g,"aria-current":$===S?"true":void 0}:{onClick:function(D){w(D,Le($))},type:$,page:Le($),selected:!1,disabled:g||$.indexOf("ellipsis")===-1&&($==="next"||$==="last"?S>=l:S<=1)}});return(0,Y.A)({items:$t},H)}var W=o(268),Re=o(54917),Me=o(97740),te=o(38483);const ve=(0,te.A)(t.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),fe=(0,te.A)(t.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),ye=(0,te.A)(t.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),he=(0,te.A)(t.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");var le=o(11192),Be=function(e){return{root:(0,Y.A)({},e.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:e.palette.text.primary}),page:{transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&$focusVisible":{backgroundColor:e.palette.action.focus},"&$selected":{backgroundColor:e.palette.action.selected,"&:hover, &$focusVisible":{backgroundColor:(0,W.X4)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:1,color:e.palette.action.disabled,backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:e.palette.action.disabledOpacity}},sizeSmall:{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px","& $icon":{fontSize:e.typography.pxToRem(18)}},sizeLarge:{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:e.typography.pxToRem(15),"& $icon":{fontSize:e.typography.pxToRem(22)}},textPrimary:{"&$selected":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}},"&$disabled":{color:e.palette.action.disabled}}},textSecondary:{"&$selected":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}},"&$disabled":{color:e.palette.action.disabled}}},outlined:{border:"1px solid ".concat(e.palette.type==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$selected":{"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}}},outlinedPrimary:{"&$selected":{color:e.palette.primary.main,border:"1px solid ".concat((0,W.X4)(e.palette.primary.main,.5)),backgroundColor:(0,W.X4)(e.palette.primary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:(0,W.X4)(e.palette.primary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},outlinedSecondary:{"&$selected":{color:e.palette.secondary.main,border:"1px solid ".concat((0,W.X4)(e.palette.secondary.main,.5)),backgroundColor:(0,W.X4)(e.palette.secondary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:(0,W.X4)(e.palette.secondary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},rounded:{borderRadius:e.shape.borderRadius},ellipsis:{height:"auto","&$disabled":{opacity:e.palette.action.disabledOpacity}},focusVisible:{},disabled:{},selected:{},icon:{fontSize:e.typography.pxToRem(20),margin:"0 -8px"}}},Ge=t.forwardRef(function(e,r){var n=e.classes,i=e.className,s=e.color,l=s===void 0?"standard":s,m=e.component,u=e.disabled,c=u===void 0?!1:u,g=e.page,p=e.selected,M=p===void 0?!1:p,h=e.shape,v=h===void 0?"round":h,L=e.size,E=L===void 0?"medium":L,f=e.type,C=f===void 0?"page":f,A=e.variant,B=A===void 0?"text":A,z=(0,oe.A)(e,["classes","className","color","component","disabled","page","selected","shape","size","type","variant"]),G=(0,Re.A)(),H=G.direction==="rtl"?{previous:he,next:ye,last:ve,first:fe}:{previous:ye,next:he,first:ve,last:fe},x=H[C];return C==="start-ellipsis"||C==="end-ellipsis"?t.createElement("div",{ref:r,className:(0,re.default)(n.root,n.ellipsis,c&&n.disabled,E!=="medium"&&n["size".concat((0,le.A)(E))])},"\u2026"):t.createElement(Me.A,(0,Y.A)({ref:r,component:m,disabled:c,focusVisibleClassName:n.focusVisible,className:(0,re.default)(n.root,n.page,n[B],n[v],i,l!=="standard"&&n["".concat(B).concat((0,le.A)(l))],c&&n.disabled,M&&n.selected,E!=="medium"&&n["size".concat((0,le.A)(E))])},z),C==="page"&&g,x?t.createElement(x,{className:n.icon}):null)});const Ie=(0,ge.A)(Be,{name:"MuiPaginationItem"})(Ge);var Te={root:{},ul:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}};function ze(a,e,r){return a==="page"?"".concat(r?"":"Go to ","page ").concat(e):"Go to ".concat(a," page")}var Ue=t.forwardRef(function(e,r){var n=e.boundaryCount,i=e.classes,s=e.className,l=e.color,m=l===void 0?"standard":l,u=e.count,c=e.defaultPage,g=e.disabled,p=e.getItemAriaLabel,M=p===void 0?ze:p,h=e.hideNextButton,v=e.hidePrevButton,L=e.onChange,E=e.page,f=e.renderItem,C=f===void 0?function(k){return t.createElement(Ie,k)}:f,A=e.shape,B=A===void 0?"round":A,z=e.showFirstButton,G=e.showLastButton,H=e.siblingCount,x=e.size,U=x===void 0?"medium":x,S=e.variant,_=S===void 0?"text":S,w=(0,oe.A)(e,["boundaryCount","classes","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"]),I=Se((0,Y.A)({},e,{componentName:"Pagination"})),Q=I.items;return t.createElement("nav",(0,Y.A)({"aria-label":"pagination navigation",className:(0,re.default)(i.root,s),ref:r},w),t.createElement("ul",{className:i.ul},Q.map(function(k,ne){return t.createElement("li",{key:ne},C((0,Y.A)({},k,{color:m,"aria-label":M(k.type,k.page,k.selected),shape:B,size:U,variant:_})))})))});const ke=(0,ge.A)(Te,{name:"MuiPagination"})(Ue);var ie=o(73466),y=o(22968),q=o(5124);const Oe=async(a,e)=>(a.length===0?{items:[]}:await e.getEntities({filter:{kind:"User","relations.memberof":a.map(n=>(0,d.U2)({kind:"group",namespace:n.namespace.toLocaleLowerCase("en-US"),name:n.name.toLocaleLowerCase("en-US")}))}})).items,we=async(a,e)=>{var r;const n=new Map,s=[{kind:a.kind,namespace:(r=a.metadata.namespace)!=null?r:d.oQ,name:a.metadata.name}],l=[];for(;s.length>0;){const m=s.shift(),u=await e.getEntityByRef(m);n.set((0,d.U2)(m),!0);const c=(0,N.g)(u,d.Kx,{kind:"Group"}).filter(g=>!n.has((0,d.U2)(g)));c.forEach(g=>n.set((0,d.U2)(g),!0)),s.push(...c),l.push(...c)}return l},Fe=async(a,e)=>Oe(await we(a,e),e),De=a=>{const e=new Map;return a.filter(r=>{const n=(0,d.U2)(r),i=e.has(n);return e.set(n,!0),!i})},We=(0,ee.A)(a=>(0,pe.A)({card:{border:`1px solid ${a.palette.divider}`,boxShadow:a.shadows[2],borderRadius:"4px",overflow:"visible",position:"relative",margin:a.spacing(4,1,1),flex:"1",minWidth:"0px"},avatar:{position:"absolute",top:"-2rem"}}),{name:"MembersListCardComponent"}),Ve=a=>{var e;const r=We(),{metadata:{name:n,description:i},spec:{profile:s}}=a.member,l=(e=s==null?void 0:s.displayName)!=null?e:n;return t.createElement(b.A,{className:r.card},t.createElement(b.A,{display:"flex",flexDirection:"column",m:3,alignItems:"center",justifyContent:"center"},t.createElement(y.eu,{displayName:l,picture:s==null?void 0:s.picture,classes:r}),t.createElement(b.A,{pt:2,sx:{width:"100%"},textAlign:"center"},t.createElement(j.A,{variant:"h6"},t.createElement(R.zI,{"data-testid":"user-link",entityRef:a.member,title:l})),(s==null?void 0:s.email)&&t.createElement(y.N_,{to:`mailto:${s.email}`},t.createElement(y.Mm,{text:s.email})),i&&t.createElement(j.A,{variant:"subtitle2"},i))))},Ke=(0,ee.A)(a=>({root:{height:"100%"},cardContent:{overflow:"auto"},memberList:{display:"grid",gap:a.spacing(1.5),gridTemplateColumns:`repeat(auto-fit, minmax(auto, ${a.spacing(34)}px))`}})),He=a=>{var e;const{memberDisplayTitle:r="Members",pageSize:n=50,showAggregateMembersToggle:i,relationsType:s="direct"}=a,l=Ke(),{entity:m}=(0,N.u)(),{metadata:{name:u,namespace:c},spec:{profile:g}}=m,p=(0,q.u)(R.vp),M=(e=g==null?void 0:g.displayName)!=null?e:u,h=c||d.oQ,[v,L]=t.useState(1),E=(I,Q)=>{L(Q)},[f,C]=(0,t.useState)(s==="aggregated"),{loading:A,value:B}=(0,ie.A)(async()=>f?await Fe(m,p):[],[p,m,f]),{loading:z,error:G,value:H}=(0,ie.A)(async()=>(await p.getEntities({filter:{kind:"User","relations.memberof":[(0,d.U2)({kind:"group",namespace:h.toLocaleLowerCase("en-US"),name:u.toLocaleLowerCase("en-US")})]}})).items,[p,m]),x=De([...H!=null?H:[],...B&&f?B:[]].sort((I,Q)=>(0,d.U2)(I).localeCompare((0,d.U2)(Q))));if(z)return t.createElement(y.ke,null);if(G)return t.createElement(y._1,{error:G});const U=Math.ceil(((x==null?void 0:x.length)||0)/n),S=U<2?"":`, page ${v} of ${U}`,_=t.createElement(ke,{count:U,page:v,onChange:E,showFirstButton:!0,showLastButton:!0});let w;return x&&x.length>0?w=t.createElement(b.A,{className:l.memberList},x.slice(n*(v-1),n*v).map(I=>t.createElement(Ve,{member:I,key:(0,d.U2)(I)}))):w=t.createElement(b.A,{p:2},t.createElement(j.A,null,"This group has no ",r.toLocaleLowerCase(),".")),t.createElement(P.A,{item:!0,className:l.root},t.createElement(y.nO,{title:`${r} (${(x==null?void 0:x.length)||0}${S})`,subheader:`of ${M}`,...U<=1?{}:{actions:_},className:l.root,cardClassName:l.cardContent},i&&t.createElement(t.Fragment,null,"Direct Members",t.createElement(X.A,{color:"primary",checked:f,onChange:()=>{C(!f)},inputProps:{"aria-label":"Users Type Switch"}}),"Aggregated Members"),f&&A?t.createElement(y.ke,null):w))};var ae=o(29365),se=o(58007),V=o(8109),J=o(46423),K=o(5951),Z=o(71677),Qe=o(86486),Ee=o(74219),Xe=o(74011),ce=o(75625),Ae=o(85121),de=o(47966),be=o(11638),ue=o(23127),je=o(37197);const Ye=({href:a,Icon:e,text:r})=>t.createElement(V.A,{key:a},t.createElement(J.A,null,e?t.createElement(e,null):t.createElement(ue.A,null)),t.createElement(K.A,null,t.createElement(y.N_,{to:a},r))),Ce=({links:a})=>{const e=(0,be.nm)(),r=n=>{var i;return n&&(i=e.getSystemIcon(n))!=null?i:ue.A};return a===void 0?null:t.createElement(t.Fragment,null,t.createElement(je.A,null),a.map(n=>t.createElement(Ye,{key:n.url,href:n.url,text:n.title,Icon:r(n.icon)})))};var Je=o(90749),Ze=o(99993);const qe=a=>t.createElement(b.A,{display:"flex",alignItems:"center"},t.createElement(de.A,{fontSize:"inherit"}),t.createElement(b.A,{ml:1},a.title)),_e=a=>{var e,r,n;const i=(0,q.u)(R.vp),s=(0,q.u)(q.l),{entity:l}=(0,N.u)(),{allowed:m}=(0,Je.Az)(Ze.tS),u=(0,t.useCallback)(async()=>{await i.refreshEntity((0,d.U2)(l)),s.post({message:"Refresh scheduled",severity:"info",display:"transient"})},[i,s,l]);if(!l)return t.createElement(Ee.A,{severity:"error"},"Group not found");const{metadata:{name:c,description:g,title:p,annotations:M,links:h},spec:{profile:v}}=l,L=(0,N.g)(l,d.Kx,{kind:"Group"}),E=(0,N.g)(l,d.Qz,{kind:"group"}),f=M==null?void 0:M[d.Eo],C=(f==null?void 0:f.startsWith("url:"))||(f==null?void 0:f.startsWith("file:")),A=(e=l.metadata.annotations)==null?void 0:e[d.P],B=(n=(r=v==null?void 0:v.displayName)!=null?r:p)!=null?n:c,z=v!=null&&v.email?`mailto:${v.email}`:"#",G=A?t.createElement(ae.A,{"aria-label":"Edit",title:"Edit Metadata",component:y.N_,to:A},t.createElement(ce.A,null)):t.createElement(ae.A,{"aria-label":"Edit",disabled:!0,title:"Edit Metadata"},t.createElement(ce.A,null));return t.createElement(y.nO,{title:t.createElement(qe,{title:B}),subheader:g,variant:a.variant,action:t.createElement(t.Fragment,null,C&&m&&t.createElement(ae.A,{"aria-label":"Refresh",title:"Schedule entity refresh",onClick:u},t.createElement(Xe.A,null)),G)},t.createElement(P.A,{container:!0,spacing:3},t.createElement(P.A,{item:!0,xs:12,sm:2,xl:1},t.createElement(y.eu,{displayName:B,picture:v==null?void 0:v.picture})),t.createElement(P.A,{item:!0,md:10,xl:11},t.createElement(se.A,null,(v==null?void 0:v.email)&&t.createElement(V.A,null,t.createElement(J.A,null,t.createElement(Z.Ay,{title:"Email"},t.createElement(Ae.A,null))),t.createElement(K.A,{primary:t.createElement(y.N_,{to:z},v.email),secondary:"Email"})),t.createElement(V.A,null,t.createElement(J.A,null,t.createElement(Z.Ay,{title:"Parent Group"},t.createElement(Qe.A,null))),t.createElement(K.A,{primary:E.length?t.createElement(R.iI,{entityRefs:E,defaultKind:"Group"}):"N/A",secondary:"Parent Group"})),t.createElement(V.A,null,t.createElement(J.A,null,t.createElement(Z.Ay,{title:"Child Groups"},t.createElement(de.A,null))),t.createElement(K.A,{primary:L.length?t.createElement(R.iI,{entityRefs:L,defaultKind:"Group"}):"N/A",secondary:"Child Groups"})),(a==null?void 0:a.showLinks)&&t.createElement(Ce,{links:h})))))};var et=o(48108);const tt=a=>a.title?t.createElement(b.A,{display:"flex",alignItems:"center"},t.createElement(et.A,{fontSize:"inherit"}),t.createElement(b.A,{ml:1},a.title)):null,at=a=>{var e,r;const{entity:n}=(0,N.u)();if(!n)return t.createElement(Ee.A,{severity:"error"},"User not found");const i=(e=n.metadata.annotations)==null?void 0:e[d.P],{metadata:{name:s,description:l,links:m},spec:{profile:u}}=n,c=(r=u==null?void 0:u.displayName)!=null?r:s,g=u!=null&&u.email?`mailto:${u.email}`:void 0,p=(0,N.g)(n,d.u0,{kind:"Group"});return t.createElement(y.nO,{title:t.createElement(tt,{title:c}),subheader:l,variant:a.variant,action:t.createElement(t.Fragment,null,i&&t.createElement(ae.A,{"aria-label":"Edit",title:"Edit Metadata",component:y.N_,to:i},t.createElement(ce.A,null)))},t.createElement(P.A,{container:!0,spacing:3,alignItems:"flex-start"},t.createElement(P.A,{item:!0,xs:12,sm:2,xl:1},t.createElement(y.eu,{displayName:c,picture:u==null?void 0:u.picture})),t.createElement(P.A,{item:!0,md:10,xl:11},t.createElement(se.A,null,(u==null?void 0:u.email)&&t.createElement(V.A,null,t.createElement(J.A,null,t.createElement(Z.Ay,{title:"Email"},t.createElement(Ae.A,null))),t.createElement(K.A,null,t.createElement(y.N_,{to:g!=null?g:""},u.email))),t.createElement(V.A,null,t.createElement(J.A,null,t.createElement(Z.Ay,{title:"Member of"},t.createElement(de.A,null))),t.createElement(K.A,null,t.createElement(R.iI,{entityRefs:p,defaultKind:"Group"}))),(a==null?void 0:a.showLinks)&&t.createElement(Ce,{links:m})))))};var nt=o(65569),ot=o(65398),rt=o.n(ot),lt=o(12670),it=o(50308),st=o.n(it),ct=o(45810),dt=o.n(ct),ut=o(45250);const mt=st()(10),pt=(a,e)=>{const{kind:r,type:n}=e,i=a.map(l=>(0,R.SE)((0,d.KU)(l),{defaultKind:"group"})),s={kind:r.toLocaleLowerCase("en-US"),type:n,owners:i,user:"all"};return dt().stringify({filters:s},{arrayFormat:"repeat"})},gt=a=>[...(0,N.g)(a,d.u0,{kind:"Group"}).map(({kind:n,namespace:i,name:s})=>(0,d.U2)({kind:n,namespace:i,name:s})),(0,d.U2)(a)],vt=a=>a!==void 0,xe=async(a,e,r=[])=>{const n=(0,N.g)(a,d.Kx,{kind:"Group"}),i=n.length>0,s=(0,d.U2)(a);if(i){const l=n.map(p=>(0,d.U2)(p)),c=(await e.getEntitiesByRefs({fields:["kind","metadata.namespace","metadata.name","relations"],entityRefs:l})).items.filter(vt).filter(p=>!r.includes((0,d.U2)(p))),g=(await Promise.all(c.map(p=>mt(()=>xe(p,e,[...r,s]))))).flatMap(p=>p);return(0,ut.uniq)([...g,s])}return[s]},ft=async(a,e,r)=>{const n=a.kind==="Group",i=e==="aggregated",s=a.kind==="User";return i&&n?xe(a,r):i&&s?gt(a):[(0,d.U2)(a)]},yt=(a,e,r)=>r.getEntities({filter:[{kind:e,"relations.ownedBy":a}],fields:["kind","metadata.name","metadata.namespace","spec.type","relations"]});function ht(a,e,r,n=6){const i=(0,q.u)(R.vp),s=r!=null?r:["Component","API","System"],{loading:l,error:m,value:u}=(0,ie.A)(async()=>{const c=await ft(a,e,i);return(await yt(c,s,i)).items.reduce((h,v)=>{var L,E;const f=h.find(C=>{var A;return C.kind===v.kind&&C.type===((A=v.spec)==null?void 0:A.type)});return f?f.count+=1:h.push({kind:v.kind,type:(E=(L=v.spec)==null?void 0:L.type)==null?void 0:E.toString(),count:1}),h},[]).sort((h,v)=>v.count-h.count).slice(0,n).map(h=>({counter:h.count,type:h.type,kind:h.kind,queryParams:pt(c,h)}))},[i,a,e]);return{componentsWithCounters:u,loading:l,error:m}}const Et=(0,ee.A)(a=>(0,pe.A)({card:{border:`1px solid ${a.palette.divider}`,boxShadow:a.shadows[2],borderRadius:"4px",padding:a.spacing(2),transition:`${a.transitions.duration.standard}ms`,"&:hover":{boxShadow:a.shadows[4]},height:"100%"},bold:{fontWeight:a.typography.fontWeightBold},smallFont:{fontSize:a.typography.body2.fontSize},entityTypeBox:{background:e=>a.getPageTheme({themeId:e.type}).backgroundImage,color:e=>a.getPageTheme({themeId:e.type}).fontColor}})),At=({counter:a,type:e,kind:r,url:n})=>{const i=Et({type:e!=null?e:r}),s=e!=null?e:r,l=s.length>10;return t.createElement(y.N_,{to:n,variant:"body2"},t.createElement(b.A,{className:`${i.card} ${i.entityTypeBox}`,display:"flex",flexDirection:"column",alignItems:"center"},t.createElement(j.A,{className:i.bold,variant:"h6"},a),t.createElement(b.A,{sx:{width:"100%",textAlign:"center"}},t.createElement(j.A,{className:`${i.bold} ${l&&i.smallFont}`,variant:"h6"},t.createElement(y.Mm,{text:rt()(s.toLocaleUpperCase("en-US"),a)}))),e&&t.createElement(j.A,{variant:"subtitle1"},r)))},bt=({className:a,entity:e,relationsType:r,entityFilterKind:n,entityLimit:i=6})=>{const s=(0,be.Sf)(lt.c),{componentsWithCounters:l,loading:m,error:u}=ht(e,r,n,i);return m?t.createElement(y.ke,null):u?t.createElement(y._1,{error:u}):t.createElement(P.A,{container:!0,className:a},l==null?void 0:l.map(c=>{var g;return t.createElement(P.A,{item:!0,xs:6,md:6,lg:4,key:(g=c.type)!=null?g:c.kind},t.createElement(At,{counter:c.counter,kind:c.kind,type:c.type,url:`${s()}/?${c.queryParams}`}))}))},Ct=(0,ee.A)(a=>({card:{maxHeight:"100%"},cardContent:{display:"flex",flexDirection:"column",overflow:"hidden"},list:{[a.breakpoints.down("xs")]:{padding:"0 0 12px"}},listItemText:{[a.breakpoints.down("xs")]:{paddingRight:0,paddingLeft:0}},listItemSecondaryAction:{[a.breakpoints.down("xs")]:{width:"100%",top:"auto",right:"auto",position:"relative",transform:"unset"}},grid:{overflowY:"auto",marginTop:0}})),xt=a=>{const{variant:e,entityFilterKind:r,hideRelationsToggle:n,relationsType:i,entityLimit:s=6}=a,l=n===void 0?!1:n,m=Ct(),{entity:u}=(0,N.u)(),c=u.kind==="User"?"aggregated":"direct",[g,p]=(0,t.useState)(i!=null?i:c);return(0,t.useEffect)(()=>{i||p(c)},[p,c,i]),t.createElement(y.nO,{title:"Ownership",variant:e,className:m.card,cardClassName:m.cardContent},!l&&t.createElement(se.A,{dense:!0},t.createElement(V.A,{className:m.list},t.createElement(K.A,{className:m.listItemText}),t.createElement(nt.A,{className:m.listItemSecondaryAction},"Direct Relations",t.createElement(Z.Ay,{placement:"top",arrow:!0,title:`${g==="direct"?"Direct":"Aggregated"} Relations`},t.createElement(X.A,{color:"primary",checked:g!=="direct",onChange:()=>{p(g==="direct"?"aggregated":"direct")},name:"pin",inputProps:{"aria-label":"Ownership Type Switch"}})),"Aggregated Relations"))),t.createElement(bt,{className:m.grid,entity:u,entityLimit:s,relationsType:g,entityFilterKind:r}))};var Nt=o(78190)},86486:(me,O,o)=>{var d,N=o(4293),R=o(78920);d={value:!0},O.A=void 0;var b=R(o(14041)),P=N(o(74044)),X=(0,P.default)(b.createElement("path",{d:"M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z"}),"AccountTree");O.A=X},74011:(me,O,o)=>{var d,N=o(4293),R=o(78920);d={value:!0},O.A=void 0;var b=R(o(14041)),P=N(o(74044)),X=(0,P.default)(b.createElement("path",{d:"M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"}),"Cached");O.A=X}}]);})();

//# sourceMappingURL=878.c7f3c45a.chunk.js.map