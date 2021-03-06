//>>built
define("dojox/encoding/digests/MD5",["./_base"],function(g){function q(e,a){return e<<a|e>>>32-a}function h(e,a,c,b,d,f){return g.addWords(q(g.addWords(g.addWords(a,e),g.addWords(b,f)),d),c)}function k(e,a,c,b,d,f,n){return h(a&c|~a&b,e,a,d,f,n)}function l(e,a,c,b,d,f,n){return h(a&b|c&~b,e,a,d,f,n)}function m(e,a,c,b,d,f,n){return h(c^(a|~b),e,a,d,f,n)}function p(e,a){e[a>>5]|=128<<a%32;e[(a+64>>>9<<4)+14]=a;a=1732584193;for(var c=-271733879,b=-1732584194,d=271733878,f=0;f<e.length;f+=16){var n=
a,r=c,t=b,u=d;a=k(a,c,b,d,e[f+0],7,-680876936);d=k(d,a,c,b,e[f+1],12,-389564586);b=k(b,d,a,c,e[f+2],17,606105819);c=k(c,b,d,a,e[f+3],22,-1044525330);a=k(a,c,b,d,e[f+4],7,-176418897);d=k(d,a,c,b,e[f+5],12,1200080426);b=k(b,d,a,c,e[f+6],17,-1473231341);c=k(c,b,d,a,e[f+7],22,-45705983);a=k(a,c,b,d,e[f+8],7,1770035416);d=k(d,a,c,b,e[f+9],12,-1958414417);b=k(b,d,a,c,e[f+10],17,-42063);c=k(c,b,d,a,e[f+11],22,-1990404162);a=k(a,c,b,d,e[f+12],7,1804603682);d=k(d,a,c,b,e[f+13],12,-40341101);b=k(b,d,a,c,e[f+
14],17,-1502002290);c=k(c,b,d,a,e[f+15],22,1236535329);a=l(a,c,b,d,e[f+1],5,-165796510);d=l(d,a,c,b,e[f+6],9,-1069501632);b=l(b,d,a,c,e[f+11],14,643717713);c=l(c,b,d,a,e[f+0],20,-373897302);a=l(a,c,b,d,e[f+5],5,-701558691);d=l(d,a,c,b,e[f+10],9,38016083);b=l(b,d,a,c,e[f+15],14,-660478335);c=l(c,b,d,a,e[f+4],20,-405537848);a=l(a,c,b,d,e[f+9],5,568446438);d=l(d,a,c,b,e[f+14],9,-1019803690);b=l(b,d,a,c,e[f+3],14,-187363961);c=l(c,b,d,a,e[f+8],20,1163531501);a=l(a,c,b,d,e[f+13],5,-1444681467);d=l(d,a,
c,b,e[f+2],9,-51403784);b=l(b,d,a,c,e[f+7],14,1735328473);c=l(c,b,d,a,e[f+12],20,-1926607734);a=h(c^b^d,a,c,e[f+5],4,-378558);d=h(a^c^b,d,a,e[f+8],11,-2022574463);b=h(d^a^c,b,d,e[f+11],16,1839030562);c=h(b^d^a,c,b,e[f+14],23,-35309556);a=h(c^b^d,a,c,e[f+1],4,-1530992060);d=h(a^c^b,d,a,e[f+4],11,1272893353);b=h(d^a^c,b,d,e[f+7],16,-155497632);c=h(b^d^a,c,b,e[f+10],23,-1094730640);a=h(c^b^d,a,c,e[f+13],4,681279174);d=h(a^c^b,d,a,e[f+0],11,-358537222);b=h(d^a^c,b,d,e[f+3],16,-722521979);c=h(b^d^a,c,
b,e[f+6],23,76029189);a=h(c^b^d,a,c,e[f+9],4,-640364487);d=h(a^c^b,d,a,e[f+12],11,-421815835);b=h(d^a^c,b,d,e[f+15],16,530742520);c=h(b^d^a,c,b,e[f+2],23,-995338651);a=m(a,c,b,d,e[f+0],6,-198630844);d=m(d,a,c,b,e[f+7],10,1126891415);b=m(b,d,a,c,e[f+14],15,-1416354905);c=m(c,b,d,a,e[f+5],21,-57434055);a=m(a,c,b,d,e[f+12],6,1700485571);d=m(d,a,c,b,e[f+3],10,-1894986606);b=m(b,d,a,c,e[f+10],15,-1051523);c=m(c,b,d,a,e[f+1],21,-2054922799);a=m(a,c,b,d,e[f+8],6,1873313359);d=m(d,a,c,b,e[f+15],10,-30611744);
b=m(b,d,a,c,e[f+6],15,-1560198380);c=m(c,b,d,a,e[f+13],21,1309151649);a=m(a,c,b,d,e[f+4],6,-145523070);d=m(d,a,c,b,e[f+11],10,-1120210379);b=m(b,d,a,c,e[f+2],15,718787259);c=m(c,b,d,a,e[f+9],21,-343485551);a=g.addWords(a,n);c=g.addWords(c,r);b=g.addWords(b,t);d=g.addWords(d,u)}return[a,c,b,d]}g.MD5=function(e,a){a=a||g.outputTypes.Base64;e=p(g.stringToWord(e),8*e.length);switch(a){case g.outputTypes.Raw:return e;case g.outputTypes.Hex:return g.wordToHex(e);case g.outputTypes.String:return g.wordToString(e);
default:return g.wordToBase64(e)}};g.MD5._hmac=function(e,a,c){c=c||g.outputTypes.Base64;var b=g.stringToWord(a);16<b.length&&(b=p(b,8*a.length));var d=[];a=[];for(var f=0;16>f;f++)d[f]=b[f]^909522486,a[f]=b[f]^1549556828;e=p(d.concat(g.stringToWord(e)),512+8*e.length);e=p(a.concat(e),640);switch(c){case g.outputTypes.Raw:return e;case g.outputTypes.Hex:return g.wordToHex(e);case g.outputTypes.String:return g.wordToString(e);default:return g.wordToBase64(e)}};return g.MD5});