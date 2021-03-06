/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/aspect",[],function(){function q(g,e,k,m){var f=g[e],h="around"==e;if(h){var b=k(function(){return f.advice(this,arguments)});var d={remove:function(){b&&(b=g=k=null)},advice:function(c,a){return b?b.apply(c,a):f.advice(c,a)}}}else d={remove:function(){if(d.advice){var c=d.previous,a=d.next;a||c?(c?c.next=a:g[e]=a,a&&(a.previous=c)):delete g[e];g=k=d.advice=null}},id:g.nextId++,advice:k,receiveArguments:m};if(f&&!h)if("after"==e){for(;f.next&&(f=f.next););f.next=d;d.previous=f}else"before"==
e&&(g[e]=d,d.next=f,f.previous=d);else g[e]=d;return d}function n(g){return function(e,k,m,f){var h=e[k],b;h&&h.target==e||(e[k]=b=function(){for(var d=b.nextId,c=arguments,a=b.before;a;)a.advice&&(c=a.advice.apply(this,c)||c),a=a.next;if(b.around)var l=b.around.advice(this,c);for(a=b.after;a&&a.id<d;){if(a.advice)if(a.receiveArguments){var p=a.advice.apply(this,c);l=p===r?l:p}else l=a.advice.call(this,l,c);a=a.next}return l},h&&(b.around={advice:function(d,c){return h.apply(d,c)}}),b.target=e,b.nextId=
b.nextId||0);e=q(b||h,g,m,f);m=null;return e}}var r,t=n("after"),u=n("before"),v=n("around");return{before:u,around:v,after:t}});