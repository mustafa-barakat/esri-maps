//>>built
define("dojox/mvc/sync",["dojo/_base/lang","dojo/_base/config","dojo/_base/array","dojo/has"],function(e,w,A,k){function x(a,d,b,c,g,h,m,r,l,t){if(!(b(l,r)||"*"==g&&0>A.indexOf(c.get("properties")||[m],m)||"*"==g&&m in(t||{}))){b="*"==g?m:g;if(k("mvc-bindings-log-api"))var n=C(c,b,h,m);try{l=a?a(l,d):l}catch(u){k("mvc-bindings-log-api")&&console.log("Copy from"+n.join(" to ")+" was not done as an error is thrown in the converter.");return}k("mvc-bindings-log-api")&&console.log(n.reverse().join(" is being copied from: ")+
" (Value: "+l+" from "+r+")");e.isFunction(c.set)?c.set(b,l):c[b]=l}}var v=e.getObject("dojox.mvc",!0);k.add("mvc-bindings-log-api",(w.mvc||{}).debugBindings);var C=k("mvc-bindings-log-api")?function(a,d,b,c){return[[b.canConvertToLoggable||!b.declaredClass?b:b.declaredClass,c].join(":"),[a.canConvertToLoggable||!a.declaredClass?a:a.declaredClass,d].join(":")]}:"";w={from:1,to:2,both:3};var D=function(a,d,b,c,g){var h=(g||{}).converter;if(h){var m={source:a,target:b};var r=h.format&&e.hitch(m,h.format);
var l=h.parse&&e.hitch(m,h.parse)}var t=[],n=[],u=e.mixin({},a.constraints,b.constraints);h=(g||{}).bindDirection||v.both;var y=(g||{}).equals||D.equals;if(k("mvc-bindings-log-api"))var z=C(a,d,b,c);if("*"==c){if("*"!=d)throw Error("Unmatched wildcard is specified between source and target.");g=b.get("properties");if(!g){g=[];for(var p in b)b.hasOwnProperty(p)&&"_watchCallbacks"!=p&&g.push(p)}n=b.get("excludes")}else g=[d];h&v.from&&(e.isFunction(a.set)&&e.isFunction(a.watch)?t.push(a.watch.apply(a,
("*"!=d?[d]:[]).concat([function(f,q,B){x(r,u,y,b,c,a,f,q,B,n)}]))):k("mvc-bindings-log-api")&&console.log(z.reverse().join(" is not a stateful property. Its change is not reflected to ")+"."),A.forEach(g,function(f){if("*"!=c||!(f in(n||{}))){var q=e.isFunction(a.get)?a.get(f):a[f];x(r,u,y,b,"*"==c?f:c,a,f,void 0,q)}}));h&v.to&&(h&v.from||A.forEach(g,function(f){if("*"!=c||!(f in(n||{}))){var q=e.isFunction(b.get)?b.get(c):b[c];x(l,u,y,a,f,b,"*"==c?f:c,void 0,q)}}),e.isFunction(b.set)&&e.isFunction(b.watch)?
t.push(b.watch.apply(b,("*"!=c?[c]:[]).concat([function(f,q,B){x(l,u,y,a,d,b,f,q,B,n)}]))):k("mvc-bindings-log-api")&&console.log(z.join(" is not a stateful property. Its change is not reflected to ")+"."));k("mvc-bindings-log-api")&&console.log(z.join(" is bound to: "));p={};p.unwatch=p.remove=function(){for(var f=null;f=t.pop();)f.unwatch();k("mvc-bindings-log-api")&&console.log(z.join(" is unbound from: "))};return p};e.mixin(v,w);return e.setObject("dojox.mvc.sync",e.mixin(D,{equals:function(a,
d){return a===d||"number"==typeof a&&isNaN(a)&&"number"==typeof d&&isNaN(d)||e.isFunction((a||{}).getTime)&&e.isFunction((d||{}).getTime)&&a.getTime()==d.getTime()||(e.isFunction((a||{}).equals)?a.equals(d):e.isFunction((d||{}).equals)?d.equals(a):!1)}},w))});