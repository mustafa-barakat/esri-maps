//>>built
define("dojox/lang/functional/tailrec",["dojo","dijit","dojox","dojo/require!dojox/lang/functional/lambda,dojox/lang/functional/util"],function(g,r,p){g.provide("dojox.lang.functional.tailrec");g.require("dojox.lang.functional.lambda");g.require("dojox.lang.functional.util");(function(){var b=p.lang.functional,h=b.inlineLambda;b.tailrec=function(a,c,d){var l={},e={},f=function(q){l[q]=1};if("string"==typeof a)a=h(a,"_x",f);else{var m=b.lambda(a);a="_c.apply(this, _x)";e["_c\x3d_t.c"]=1}if("string"==
typeof c)c=h(c,"_x",f);else{var k=b.lambda(c);c="_t.t.apply(this, _x)"}if("string"==typeof d)d=h(d,"_x",f);else{var n=b.lambda(d);d="_b.apply(this, _x)";e["_b\x3d_t.b"]=1}f=b.keys(l);e=b.keys(e);a=new Function([],"var _x\x3darguments,_t\x3d_x.callee,_c\x3d_t.c,_b\x3d_t.b".concat(f.length?","+f.join(","):"",e.length?",_t\x3d_x.callee,"+e.join(","):k?",_t\x3d_x.callee":"",";for(;!",a,";_x\x3d",d,");return ",c));m&&(a.c=m);k&&(a.t=k);n&&(a.b=n);return a}})()});