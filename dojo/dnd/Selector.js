/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/dnd/Selector","../_base/array ../_base/declare ../_base/kernel ../_base/lang ../dom ../dom-construct ../mouse ../_base/NodeList ../on ../touch ./common ./Container".split(" "),function(p,q,r,l,h,t,u,v,m,n,f,w){var k=q("dojo.dnd.Selector",w,{constructor:function(b,a){a||(a={});this.singular=a.singular;this.autoSync=a.autoSync;this.selection={};this.anchor=null;this.simpleSelection=!1;this.events.push(m(this.node,n.press,l.hitch(this,"onMouseDown")),m(this.node,n.release,l.hitch(this,"onMouseUp")))},
singular:!1,getSelectedNodes:function(){var b=new v,a=f._empty,c;for(c in this.selection)c in a||b.push(h.byId(c));return b},selectNone:function(){return this._removeSelection()._removeAnchor()},selectAll:function(){this.forInItems(function(b,a){this._addItemClass(h.byId(a),"Selected");this.selection[a]=1},this);return this._removeAnchor()},deleteSelectedNodes:function(){var b=f._empty,a;for(a in this.selection)if(!(a in b)){var c=h.byId(a);this.delItem(a);t.destroy(c)}this.anchor=null;this.selection=
{};return this},forInSelectedItems:function(b,a){a=a||r.global;var c=this.selection,d=f._empty,g;for(g in c)g in d||b.call(a,this.getItem(g),g,this)},sync:function(){k.superclass.sync.call(this);this.anchor&&!this.getItem(this.anchor.id)&&(this.anchor=null);var b=[],a=f._empty,c;for(c in this.selection)c in a||this.getItem(c)||b.push(c);p.forEach(b,function(d){delete this.selection[d]},this);return this},insertNodes:function(b,a,c,d){var g=this._normalizedCreator;this._normalizedCreator=function(e,
x){e=g.call(this,e,x);b?(this.anchor?this.anchor!=e.node&&(this._removeItemClass(e.node,"Anchor"),this._addItemClass(e.node,"Selected")):(this.anchor=e.node,this._removeItemClass(e.node,"Selected"),this._addItemClass(this.anchor,"Anchor")),this.selection[e.node.id]=1):(this._removeItemClass(e.node,"Selected"),this._removeItemClass(e.node,"Anchor"));return e};k.superclass.insertNodes.call(this,a,c,d);this._normalizedCreator=g;return this},destroy:function(){k.superclass.destroy.call(this);this.selection=
this.anchor=null},onMouseDown:function(b){this.autoSync&&this.sync();if(this.current)if(!this.singular&&!f.getCopyKeyState(b)&&!b.shiftKey&&this.current.id in this.selection)this.simpleSelection=!0,u.isLeft(b)&&(b.stopPropagation(),b.preventDefault());else{if(!this.singular&&b.shiftKey){f.getCopyKeyState(b)||this._removeSelection();var a=this.getAllNodes();if(a.length&&(this.anchor||(this.anchor=a[0],this._addItemClass(this.anchor,"Anchor")),this.selection[this.anchor.id]=1,this.anchor!=this.current)){for(var c=
0,d;c<a.length&&(d=a[c],d!=this.anchor&&d!=this.current);++c);for(++c;c<a.length;++c){d=a[c];if(d==this.anchor||d==this.current)break;this._addItemClass(d,"Selected");this.selection[d.id]=1}this._addItemClass(this.current,"Selected");this.selection[this.current.id]=1}}else this.singular?this.anchor==this.current?f.getCopyKeyState(b)&&this.selectNone():(this.selectNone(),this.anchor=this.current,this._addItemClass(this.anchor,"Anchor"),this.selection[this.current.id]=1):f.getCopyKeyState(b)?this.anchor==
this.current?(delete this.selection[this.anchor.id],this._removeAnchor()):this.current.id in this.selection?(this._removeItemClass(this.current,"Selected"),delete this.selection[this.current.id]):(this.anchor&&(this._removeItemClass(this.anchor,"Anchor"),this._addItemClass(this.anchor,"Selected")),this.anchor=this.current,this._addItemClass(this.current,"Anchor"),this.selection[this.current.id]=1):this.current.id in this.selection||(this.selectNone(),this.anchor=this.current,this._addItemClass(this.current,
"Anchor"),this.selection[this.current.id]=1);b.stopPropagation();b.preventDefault()}},onMouseUp:function(){this.simpleSelection&&(this.simpleSelection=!1,this.selectNone(),this.current&&(this.anchor=this.current,this._addItemClass(this.anchor,"Anchor"),this.selection[this.current.id]=1))},onMouseMove:function(){this.simpleSelection=!1},onOverEvent:function(){this.onmousemoveEvent=m(this.node,n.move,l.hitch(this,"onMouseMove"))},onOutEvent:function(){this.onmousemoveEvent&&(this.onmousemoveEvent.remove(),
delete this.onmousemoveEvent)},_removeSelection:function(){var b=f._empty,a;for(a in this.selection)if(!(a in b)){var c=h.byId(a);c&&this._removeItemClass(c,"Selected")}this.selection={};return this},_removeAnchor:function(){this.anchor&&(this._removeItemClass(this.anchor,"Anchor"),this.anchor=null);return this}});return k});