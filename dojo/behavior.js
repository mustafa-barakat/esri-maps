/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/behavior","./_base/kernel ./_base/lang ./_base/array ./_base/connect ./query ./domReady".split(" "),function(g,f,p,h,q,r){g.deprecated("dojo.behavior","Use dojo/on with event delegation (on.selector())");g.behavior=new function(){function m(b,a){b[a]||(b[a]=[]);return b[a]}function k(b,a,c){var e={},d;for(d in b)"undefined"==typeof e[d]&&(c?c.call(a,b[d],d):a(b[d],d))}var t=0;this._behaviors={};this.add=function(b){k(b,this,function(a,c){c=m(this._behaviors,c);"number"!=typeof c.id&&
(c.id=t++);var e=[];c.push(e);if(f.isString(a)||f.isFunction(a))a={found:a};k(a,function(d,l){m(e,l).push(d)})})};var u=function(b,a,c){f.isString(a)?"found"==c?h.publish(a,[b]):h.connect(b,c,function(){h.publish(a,arguments)}):f.isFunction(a)&&("found"==c?a(b):h.connect(b,c,a))};this.apply=function(){k(this._behaviors,function(b,a){q(a).forEach(function(c){var e=0,d="_dj_behavior_"+b.id;if("number"==typeof c[d]&&(e=c[d],e==b.length))return;for(var l;l=b[e];e++)k(l,function(n,v){f.isArray(n)&&p.forEach(n,
function(w){u(c,w,v)})});c[d]=b.length})})}};r(function(){g.behavior.apply()});return g.behavior});