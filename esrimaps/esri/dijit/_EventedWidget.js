// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/_EventedWidget","dojo/_base/declare dojo/_base/lang dojo/aspect dojo/on ../Evented dijit/_WidgetBase".split(" "),function(h,k,q,l,m,n){return h([n,m],{_onMap:function(b){var a=this.constructor._onMap;a&&a.FINAL||(delete this.constructor._onMap,a=this.registerConnectEvents(),a.FINAL=!0);b=b.toLowerCase();if(a[b])var d=this[a[b].method];else b=this._onCamelCase(b),this[b]&&(d=b);return d},on:function(b,a){var d=this._onMap(b),e=b.replace(/\-/g,""),c="on"+e in this.domNode;return d||
!c?this.inherited(arguments):this.own(l(this.domNode,e,a))[0]},emit:function(b,a,d){var e,c=b.toLowerCase(),f=this.constructor._onMap||this.registerConnectEvents();var p=this[this._onMap(c)];a=a||{};a.target||(a.target=this);if(p&&f&&f[c]){this._onObj2Arr(function(){e=Array.prototype.slice.call(arguments)},f[c].argKeys)(a);var g=k.mixin({},arguments);g[2]=e;g[0]=f[c].name.replace(/^on/,"")}return this.inherited(g||arguments)}})});