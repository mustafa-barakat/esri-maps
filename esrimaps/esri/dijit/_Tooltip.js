// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/_Tooltip",["dijit/Tooltip","dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/dom"],function(k,d,l,f,m){return l(null,{declaredClass:"esri.dijit._Tooltip",_tooltips:null,constructor:function(){this._tooltips=[]},startup:function(){this.inherited(arguments);this._started||d.forEach(this._tooltips,function(a){a.startup()})},destroy:function(){this.inherited(arguments);d.forEach(this._tooltips,function(a){a.destroy()});this._tooltips=null},createTooltips:function(a){d.forEach(a,
function(b){this.createTooltip(b.node,b.label)},this)},createTooltip:function(a,b){if(a=this._getConnectId(a))b="object"===typeof b?f.mixin({},b,{connectId:a}):{connectId:a,label:b},b=new k(b),this._started&&b.startup(),this._tooltips.push(b)},_getConnectId:function(a){var b;if(a){if(f.isArray(a)){var c=[];d.forEach(a,function(g){(b=this._getNode(g))&&c.push(b)});if(0===c.length)return}else if(c=this._getNode(a),!c)return;return c}},_getNode:function(a){return m.byId(a.domNode||a)},findTooltip:function(a){var b=
this._getNode(a),c;if(a){a=this._tooltips;var g=a.length;for(var h=0;h<g;h++){var e=a[h];if(c=f.isArray(e.connectId)?-1<d.indexOf(e.connectId,b):e.connectId===b)return e}}}})});