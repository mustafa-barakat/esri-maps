//>>built
define("dojox/lang/functional/fold",["dojo/_base/lang","dojo/_base/array","dojo/_base/kernel","./lambda"],function(k,m,h,g){var l={};k.mixin(g,{foldl:function(a,b,c,d){"string"==typeof a&&(a=a.split(""));d=d||h.global;b=g.lambda(b);var e;if(k.isArray(a)){var f=0;for(e=a.length;f<e;c=b.call(d,c,a[f],f,a),++f);}else if("function"==typeof a.hasNext&&"function"==typeof a.next)for(f=0;a.hasNext();c=b.call(d,c,a.next(),f++,a));else for(f in a)f in l||(c=b.call(d,c,a[f],f,a));return c},foldl1:function(a,
b,c){"string"==typeof a&&(a=a.split(""));c=c||h.global;b=g.lambda(b);var d;if(k.isArray(a)){var e=a[0];var f=1;for(d=a.length;f<d;e=b.call(c,e,a[f],f,a),++f);}else if("function"==typeof a.hasNext&&"function"==typeof a.next){if(a.hasNext())for(e=a.next(),f=1;a.hasNext();e=b.call(c,e,a.next(),f++,a));}else for(f in d=!0,a)f in l||(d?(e=a[f],d=!1):e=b.call(c,e,a[f],f,a));return e},foldr:function(a,b,c,d){"string"==typeof a&&(a=a.split(""));d=d||h.global;b=g.lambda(b);for(var e=a.length;0<e;--e,c=b.call(d,
c,a[e],e,a));return c},foldr1:function(a,b,c){"string"==typeof a&&(a=a.split(""));c=c||h.global;b=g.lambda(b);var d=a.length,e=a[d-1];for(--d;0<d;--d,e=b.call(c,e,a[d],d,a));return e},reduce:function(a,b,c){return 3>arguments.length?g.foldl1(a,b):g.foldl(a,b,c)},reduceRight:function(a,b,c){return 3>arguments.length?g.foldr1(a,b):g.foldr(a,b,c)},unfold:function(a,b,c,d,e){e=e||h.global;b=g.lambda(b);c=g.lambda(c);a=g.lambda(a);for(var f=[];!a.call(e,d);f.push(b.call(e,d)),d=c.call(e,d));return f}})});