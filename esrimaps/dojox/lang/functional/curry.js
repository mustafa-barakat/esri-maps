//>>built
define("dojox/lang/functional/curry",["dojo/_base/lang","./lambda"],function(p,f){var k=Array.prototype,l=function(a){return function(){var b=a.args.concat(k.slice.call(arguments,0));return arguments.length+a.args.length<a.arity?l({func:a.func,arity:a.arity,args:b}):a.func.apply(this,b)}};p.mixin(f,{curry:function(a,b){a=f.lambda(a);b="number"==typeof b?b:a.length;return l({func:a,arity:b,args:[]})},arg:{},partial:function(a){var b=arguments,e=b.length,c=Array(e-1),d=[],g=1;for(a=f.lambda(a);g<e;++g){var m=
b[g];c[g-1]=m;m===f.arg&&d.push(g-1)}return function(){for(var n=k.slice.call(c,0),h=0,q=d.length;h<q;++h)n[d[h]]=arguments[h];return a.apply(this,n)}},mixer:function(a,b){a=f.lambda(a);return function(){for(var e=Array(b.length),c=0,d=b.length;c<d;++c)e[c]=arguments[b[c]];return a.apply(this,e)}},flip:function(a){a=f.lambda(a);return function(){for(var b=arguments,e=b.length-1,c=Array(e+1),d=0;d<=e;++d)c[e-d]=b[d];return a.apply(this,c)}}})});