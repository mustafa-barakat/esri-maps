/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/dnd/Mover","../_base/array ../_base/declare ../_base/lang ../sniff ../_base/window ../dom ../dom-geometry ../dom-style ../Evented ../on ../touch ./common ./autoscroll".split(" "),function(p,q,g,l,r,t,h,u,v,e,k,w,m){return q("dojo.dnd.Mover",[v],{constructor:function(a,b,f){function c(d){d.preventDefault();d.stopPropagation()}this.node=t.byId(a);this.marginBox={l:b.pageX,t:b.pageY};this.mouseButton=b.button;b=this.host=f;a=a.ownerDocument;this.events=[e(a,k.move,g.hitch(this,"onFirstMove")),
e(a,k.move,g.hitch(this,"onMouseMove")),e(a,k.release,g.hitch(this,"onMouseUp")),e(a,"dragstart",c),e(a.body,"selectstart",c)];m.autoScrollStart(a);if(b&&b.onMoveStart)b.onMoveStart(this)},onMouseMove:function(a){m.autoScroll(a);var b=this.marginBox;this.host.onMove(this,{l:b.l+a.pageX,t:b.t+a.pageY},a);a.preventDefault();a.stopPropagation()},onMouseUp:function(a){(l("webkit")&&l("mac")&&2==this.mouseButton?0==a.button:this.mouseButton==a.button)&&this.destroy();a.preventDefault();a.stopPropagation()},
onFirstMove:function(a){var b=this.node.style,f=this.host;switch(b.position){case "relative":case "absolute":var c=Math.round(parseFloat(b.left))||0;b=Math.round(parseFloat(b.top))||0;break;default:b.position="absolute";b=h.getMarginBox(this.node);c=r.doc.body;var d=u.getComputedStyle(c),n=h.getMarginBox(c,d);d=h.getContentBox(c,d);c=b.l-(d.l-n.l);b=b.t-(d.t-n.t)}this.marginBox.l=c-this.marginBox.l;this.marginBox.t=b-this.marginBox.t;if(f&&f.onFirstMove)f.onFirstMove(this,a);this.events.shift().remove()},
destroy:function(){p.forEach(this.events,function(b){b.remove()});var a=this.host;if(a&&a.onMoveStop)a.onMoveStop(this);this.events=this.node=this.host=null}})});