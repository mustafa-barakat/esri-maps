/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/NodeList-fx",["./query","./_base/lang","./aspect","./_base/fx","./fx"],function(f,k,m,g,d){f=f.NodeList;k.extend(f,{_anim:function(a,h,b){b=b||{};var e=d.combine(this.map(function(c){c={node:c};k.mixin(c,b);return a[h](c)}));return b.auto?e.play()&&this:e},wipeIn:function(a){return this._anim(d,"wipeIn",a)},wipeOut:function(a){return this._anim(d,"wipeOut",a)},slideTo:function(a){return this._anim(d,"slideTo",a)},fadeIn:function(a){return this._anim(g,"fadeIn",a)},fadeOut:function(a){return this._anim(g,
"fadeOut",a)},animateProperty:function(a){return this._anim(g,"animateProperty",a)},anim:function(a,h,b,e,c){var l=d.combine(this.map(function(n){return g.animateProperty({node:n,properties:a,duration:h||350,easing:b})}));e&&m.after(l,"onEnd",e,!0);return l.play(c||0)}});return f});