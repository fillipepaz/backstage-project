(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[927],{94704:m=>{const u="[A-Za-z$_][0-9A-Za-z$_]*",p=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],C=["true","false","null","undefined","NaN","Infinity"],D=["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer","BigInt64Array","BigUint64Array","BigInt"],w=["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],v=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],L=["arguments","this","super","console","window","document","localStorage","module","global"],x=[].concat(v,L,D,w);function B(e){return e?typeof e=="string"?e:e.source:null}function _(e){return E("(?=",e,")")}function E(...e){return e.map(n=>B(n)).join("")}function U(e){const T=(a,{after:o})=>{const g="</"+a[0].slice(1);return a.input.indexOf(g,o)!==-1},n=u,N={begin:"<>",end:"</>"},r={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(a,o)=>{const g=a[0].length+a.index,d=a.input[g];if(d==="<"){o.ignoreMatch();return}d===">"&&(T(a,{after:g})||o.ignoreMatch())}},t={$pattern:u,keyword:p,literal:C,built_in:x},S="[0-9](_?[0-9])*",i=`\\.(${S})`,A="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",f={className:"number",variants:[{begin:`(\\b(${A})((${i})|\\.)?|(${i}))[eE][+-]?(${S})\\b`},{begin:`\\b(${A})\\b((${i})\\b|\\.)?|(${i})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},s={className:"subst",begin:"\\$\\{",end:"\\}",keywords:t,contains:[]},R={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,s],subLanguage:"xml"}},I={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,s],subLanguage:"css"}},y={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,s]},b={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},M=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,R,I,y,f,e.REGEXP_MODE];s.contains=M.concat({begin:/\{/,end:/\}/,keywords:t,contains:["self"].concat(M)});const O=[].concat(b,s.contains),l=O.concat([{begin:/\(/,end:/\)/,keywords:t,contains:["self"].concat(O)}]),c={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:t,contains:l};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:t,exports:{PARAMS_CONTAINS:l},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,R,I,y,b,f,{begin:E(/[{,\n]\s*/,_(E(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,n+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:n+_("\\s*:"),relevance:0}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[b,e.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:t,contains:l}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:N.begin,end:N.end},{begin:r.begin,"on:begin":r.isTrulyOpeningTag,end:r.end}],subLanguage:"xml",contains:[{begin:r.begin,end:r.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:t,contains:["self",e.inherit(e.TITLE_MODE,{begin:n}),c],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,contains:[c,e.inherit(e.TITLE_MODE,{begin:n})]},{variants:[{begin:"\\."+n},{begin:"\\$"+n}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:n}),"self",c]},{begin:"(get|set)\\s+(?="+n+"\\()",end:/\{/,keywords:"get set",contains:[e.inherit(e.TITLE_MODE,{begin:n}),{begin:/\(\)/},c]},{begin:/\$[(.]/}]}}m.exports=U}}]);})();

//# sourceMappingURL=react-syntax-highlighter_languages_highlight_javascript.4864bcab.chunk.js.map