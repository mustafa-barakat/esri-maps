/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/dnd/move","../_base/declare ../dom-geometry ../dom-style ./common ./Mover ./Moveable".split(" "),function(g,h,n,k,m,p){k=g("dojo.dnd.move.constrainedMoveable",p,{constraints:function(){},within:!1,constructor:function(e,a){a||(a={});this.constraints=a.constraints;this.within=a.within},onFirstMove:function(e){var a=this.constraintBox=this.constraints.call(this,e);a.r=a.l+a.w;a.b=a.t+a.h;this.within&&(e=h.getMarginSize(e.node),a.r-=e.w,a.b-=e.h)},onMove:function(e,a){var c=this.constraintBox,
f=e.node.style;this.onMoving(e,a);a.l=a.l<c.l?c.l:c.r<a.l?c.r:a.l;a.t=a.t<c.t?c.t:c.b<a.t?c.b:a.t;f.left=a.l+"px";f.top=a.t+"px";this.onMoved(e,a)}});m=g("dojo.dnd.move.boxConstrainedMoveable",k,{box:{},constructor:function(e,a){var c=a&&a.box;this.constraints=function(){return c}}});g=g("dojo.dnd.move.parentConstrainedMoveable",k,{area:"content",constructor:function(e,a){var c=a&&a.area;this.constraints=function(){var f=this.node.parentNode,l=n.getComputedStyle(f),b=h.getMarginBox(f,l);if("margin"==
c)return b;var d=h.getMarginExtents(f,l);b.l+=d.l;b.t+=d.t;b.w-=d.w;b.h-=d.h;if("border"==c)return b;d=h.getBorderExtents(f,l);b.l+=d.l;b.t+=d.t;b.w-=d.w;b.h-=d.h;if("padding"==c)return b;d=h.getPadExtents(f,l);b.l+=d.l;b.t+=d.t;b.w-=d.w;b.h-=d.h;return b}}});return{constrainedMoveable:k,boxConstrainedMoveable:m,parentConstrainedMoveable:g}});