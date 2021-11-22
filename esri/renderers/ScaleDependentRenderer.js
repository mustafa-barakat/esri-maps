// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/renderers/ScaleDependentRenderer","dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/has ../kernel ../lang ./Renderer".split(" "),function(f,p,m,q,r,n,t){f=f(t,{declaredClass:"esri.renderer.ScaleDependentRenderer",constructor:function(a){this.setRendererInfos(a&&a.rendererInfos||[])},setRendererInfos:function(a){this.rendererInfos=a;this._setRangeType();return this},getSymbol:function(a){var b=this.getRendererInfo(a);return b&&b.renderer&&b.renderer.getSymbol(a)},getRendererInfo:function(a){a=
a.getLayer().getMap();return"zoom"===this.rangeType?this.getRendererInfoByZoom(a.getZoom()):this.getRendererInfoByScale(a.getScale())},getRendererInfoByZoom:function(a){var b=this.rendererInfos,c,d=0;do{var e=b[d];a>=e.minZoom&&a<=e.maxZoom&&(c=e);d++}while(!c&&d<b.length);return c},getRendererInfoByScale:function(a){var b=this.rendererInfos,c,d=0;do{var e=b[d];var g=e.minScale;var h=e.maxScale;var k=!g;var l=!h;!k&&a<=g&&(k=!0);!l&&a>=h&&(l=!0);k&&l&&(c=e);d++}while(!c&&d<b.length);return c},addRendererInfo:function(a){var b=
0,c=this.rendererInfos,d=a.hasOwnProperty("minZoom")?"minZoom":"minScale",e=c.length;do{var g=c[b];if(e===b||a[d]<g[d]){c.splice(b,0,a);this._setRangeType();var h=!0}b++}while(!h&&b<e);return this},_setRangeType:function(){var a=this.rendererInfos;if(a=a&&a[0])this.rangeType=a.hasOwnProperty("minZoom")?"zoom":a.hasOwnProperty("minScale")?"scale":""},toJson:function(){if("zoom"===this.rangeType)return null;var a=this.rendererInfos||[],b=a[0]&&a[0].minScale;a=m.mixin(this.inherited(arguments),{type:"scaleDependent",
minScale:0<b?b:0,rendererInfos:p.map(a,function(c){return n.fixJson({maxScale:0<c.maxScale?c.maxScale:0,renderer:c.renderer&&c.renderer.toJson()})})});return n.fixJson(a)}});q("extend-esri")&&m.setObject("renderer.ScaleDependentRenderer",f,r);return f});