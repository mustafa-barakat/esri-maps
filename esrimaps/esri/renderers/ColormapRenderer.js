// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/renderers/ColormapRenderer","dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/has ../kernel ../lang ../symbols/jsonUtils ./Renderer ./arcadeUtils".split(" "),function(c,h,f,k,l,m,p,n,q){c=c(n,{declaredClass:"esri.renderer.ColormapRenderer",constructor:function(b){this.colormapInfos=b&&b.colormapInfos},toJson:function(){var b=m.fixJson;var e={type:"rasterColormap",colormapInfos:h.map(this.colormapInfos||[],function(a,g){var d={};a.color&&null!==a.color&&3<=a.color.length&&(d.color=
a.color,d.value=a.value||g,d.label=(a.label||g)+"");return b(d)})};e=f.mixin(this.inherited(arguments),e);return b(e)}});k("extend-esri")&&f.setObject("renderer.ColormapRenderer",c,l);return c});