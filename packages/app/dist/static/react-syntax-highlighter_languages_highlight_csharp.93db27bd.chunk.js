(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7879],{29984:l=>{function d(e){const g=["bool","byte","char","decimal","delegate","double","dynamic","enum","float","int","long","nint","nuint","object","sbyte","short","string","ulong","uint","ushort"],O=["public","private","protected","static","internal","protected","abstract","async","extern","override","unsafe","virtual","new","sealed","partial"],N=["default","false","null","true"],T=["abstract","as","base","break","case","class","const","continue","do","else","event","explicit","extern","finally","fixed","for","foreach","goto","if","implicit","in","interface","internal","is","lock","namespace","new","operator","out","override","params","private","protected","public","readonly","record","ref","return","sealed","sizeof","stackalloc","static","struct","switch","this","throw","try","typeof","unchecked","unsafe","using","virtual","void","volatile","while"],b=["add","alias","and","ascending","async","await","by","descending","equals","from","get","global","group","init","into","join","let","nameof","not","notnull","on","or","orderby","partial","remove","select","set","unmanaged","value|0","var","when","where","with","yield"],n={keyword:T.concat(b),built_in:g,literal:N},a=e.inherit(e.TITLE_MODE,{begin:"[a-zA-Z](\\.?\\w)*"}),i={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},t={className:"string",begin:'@"',end:'"',contains:[{begin:'""'}]},M=e.inherit(t,{illegal:/\n/}),r={className:"subst",begin:/\{/,end:/\}/,keywords:n},c=e.inherit(r,{illegal:/\n/}),s={className:"string",begin:/\$"/,end:'"',illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},e.BACKSLASH_ESCAPE,c]},o={className:"string",begin:/\$@"/,end:'"',contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},r]},u=e.inherit(o,{illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},c]});r.contains=[o,s,t,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,e.C_BLOCK_COMMENT_MODE],c.contains=[u,s,M,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,e.inherit(e.C_BLOCK_COMMENT_MODE,{illegal:/\n/})];const _={variants:[o,s,t,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},E={begin:"<",end:">",contains:[{beginKeywords:"in out"},a]},I=e.IDENT_RE+"(<"+e.IDENT_RE+"(\\s*,\\s*"+e.IDENT_RE+")*>)?(\\[\\])?",C={begin:"@"+e.IDENT_RE,relevance:0};return{name:"C#",aliases:["cs","c#"],keywords:n,illegal:/::/,contains:[e.COMMENT("///","$",{returnBegin:!0,contains:[{className:"doctag",variants:[{begin:"///",relevance:0},{begin:"<!--|-->"},{begin:"</?",end:">"}]}]}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"meta",begin:"#",end:"$",keywords:{"meta-keyword":"if else elif endif define undef warning error line region endregion pragma checksum"}},_,i,{beginKeywords:"class interface",relevance:0,end:/[{;=]/,illegal:/[^\s:,]/,contains:[{beginKeywords:"where class"},a,E,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{beginKeywords:"namespace",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[a,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{beginKeywords:"record",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[a,E,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"meta",begin:"^\\s*\\[",excludeBegin:!0,end:"\\]",excludeEnd:!0,contains:[{className:"meta-string",begin:/"/,end:/"/}]},{beginKeywords:"new return throw await else",relevance:0},{className:"function",begin:"("+I+"\\s+)+"+e.IDENT_RE+"\\s*(<.+>\\s*)?\\(",returnBegin:!0,end:/\s*[{;=]/,excludeEnd:!0,keywords:n,contains:[{beginKeywords:O.join(" "),relevance:0},{begin:e.IDENT_RE+"\\s*(<.+>\\s*)?\\(",returnBegin:!0,contains:[e.TITLE_MODE,E],relevance:0},{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,relevance:0,contains:[_,i,e.C_BLOCK_COMMENT_MODE]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},C]}}l.exports=d}}]);})();

//# sourceMappingURL=react-syntax-highlighter_languages_highlight_csharp.93db27bd.chunk.js.map