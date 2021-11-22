/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/string",["./_base/kernel","./_base/lang"],function(l,g){var m=/[&<>'"\/]/g,n={"\x26":"\x26amp;","\x3c":"\x26lt;","\x3e":"\x26gt;",'"':"\x26quot;","'":"\x26#x27;","/":"\x26#x2F;"},d={};g.setObject("dojo.string",d);d.escape=function(a){return a?a.replace(m,function(b){return n[b]}):""};d.rep=function(a,b){if(0>=b||!a)return"";for(var c=[];;){b&1&&c.push(a);if(!(b>>=1))break;a+=a}return c.join("")};d.pad=function(a,b,c,e){c||(c="0");a=String(a);b=d.rep(c,Math.ceil((b-a.length)/c.length));
return e?a+b:b+a};d.substitute=function(a,b,c,e){e=e||l.global;c=c?g.hitch(e,c):function(f){return f};return a.replace(/\$\{([^\s:\}]*)(?::([^\s:\}]+))?\}/g,function(f,h,k){if(""==h)return"$";f=g.getObject(h,!1,b);k&&(f=g.getObject(k,!1,e).call(e,f,h));k=c(f,h);if("undefined"===typeof k)throw Error('string.substitute could not find key "'+h+'" in template');return k.toString()})};d.trim=String.prototype.trim?g.trim:function(a){a=a.replace(/^\s+/,"");for(var b=a.length-1;0<=b;b--)if(/\S/.test(a.charAt(b))){a=
a.substring(0,b+1);break}return a};return d});