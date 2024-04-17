"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8186,6393],{66393:(f,d,n)=>{n.r(d),n.d(d,{C:()=>s,c:()=>c});var p=n(16784),e=Object.defineProperty,_=(a,l)=>e(a,"name",{value:l,configurable:!0});function o(a,l){for(var t=0;t<l.length;t++){const r=l[t];if(typeof r!="string"&&!Array.isArray(r)){for(const u in r)if(u!=="default"&&!(u in a)){const b=Object.getOwnPropertyDescriptor(r,u);b&&Object.defineProperty(a,u,b.get?b:{enumerable:!0,get:()=>r[u]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}_(o,"_mergeNamespaces");var i=(0,p.r)();const s=(0,p.g)(i),c=o({__proto__:null,default:s},[i])},11511:(f,d,n)=>{n.d(d,{i:()=>_});var p=Object.defineProperty,e=(o,i)=>p(o,"name",{value:i,configurable:!0});function _(o,i){var s,c;const{levels:a,indentLevel:l}=o;return((!a||a.length===0?l:a.at(-1)-(!((s=this.electricInput)===null||s===void 0)&&s.test(i)?1:0))||0)*(((c=this.config)===null||c===void 0?void 0:c.indentUnit)||0)}e(_,"indent")},88186:(f,d,n)=>{n.r(d);var p=n(66393),e=n(66889),_=n(11511),o=n(16784),i=Object.defineProperty,s=(t,r)=>i(t,"name",{value:r,configurable:!0});p.C.defineMode("graphql-variables",t=>{const r=(0,e.r5)({eatWhitespace:u=>u.eatSpace(),lexRules:c,parseRules:a,editorConfig:{tabSize:t.tabSize}});return{config:t,startState:r.startState,token:r.token,indent:_.i,electricInput:/^\s*[}\]]/,fold:"brace",closeBrackets:{pairs:'[]{}""',explode:"[]{}"}}});const c={Punctuation:/^\[|]|\{|\}|:|,/,Number:/^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,String:/^"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?/,Keyword:/^true|false|null/},a={Document:[(0,e.p)("{"),(0,e.p_)("Variable",(0,e.m7)((0,e.p)(","))),(0,e.p)("}")],Variable:[l("variable"),(0,e.p)(":"),"Value"],Value(t){switch(t.kind){case"Number":return"NumberValue";case"String":return"StringValue";case"Punctuation":switch(t.value){case"[":return"ListValue";case"{":return"ObjectValue"}return null;case"Keyword":switch(t.value){case"true":case"false":return"BooleanValue";case"null":return"NullValue"}return null}},NumberValue:[(0,e.t)("Number","number")],StringValue:[(0,e.t)("String","string")],BooleanValue:[(0,e.t)("Keyword","builtin")],NullValue:[(0,e.t)("Keyword","keyword")],ListValue:[(0,e.p)("["),(0,e.p_)("Value",(0,e.m7)((0,e.p)(","))),(0,e.p)("]")],ObjectValue:[(0,e.p)("{"),(0,e.p_)("ObjectField",(0,e.m7)((0,e.p)(","))),(0,e.p)("}")],ObjectField:[l("attribute"),(0,e.p)(":"),"Value"]};function l(t){return{style:t,match:r=>r.kind==="String",update(r,u){r.name=u.value.slice(1,-1)}}}s(l,"namedKey")}}]);})();

//# sourceMappingURL=8186.d921b0ae.chunk.js.map