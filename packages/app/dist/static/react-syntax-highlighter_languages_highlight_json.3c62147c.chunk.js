(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3736],{70365:c=>{function E(n){const t={literal:"true false null"},a=[n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE],e=[n.QUOTE_STRING_MODE,n.C_NUMBER_MODE],i={end:",",endsWithParent:!0,excludeEnd:!0,contains:e,keywords:t},o={begin:/\{/,end:/\}/,contains:[{className:"attr",begin:/"/,end:/"/,contains:[n.BACKSLASH_ESCAPE],illegal:"\\n"},n.inherit(i,{begin:/:/})].concat(a),illegal:"\\S"},s={begin:"\\[",end:"\\]",contains:[n.inherit(i)],illegal:"\\S"};return e.push(o,s),a.forEach(function(l){e.push(l)}),{name:"JSON",contains:e,keywords:t,illegal:"\\S"}}c.exports=E}}]);})();

//# sourceMappingURL=react-syntax-highlighter_languages_highlight_json.3c62147c.chunk.js.map