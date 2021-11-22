// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/LayerDrawingOptions","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has ../kernel ../lang ../renderers/jsonUtils ./LabelClass".split(" "),function(b,d,e,f,g,h,k,l){b=b(null,{declaredClass:"esri.layers.LayerDrawingOptions",constructor:function(a){if(a&&(d.mixin(this,a),a.renderer&&(this.renderer=k.fromJson(a.renderer)),a.labelingInfo&&0<a.labelingInfo.length)){this.labelingInfo=[];var c;e.forEach(a.labelingInfo,function(m){c=new l(m);this.labelingInfo.push(c)},this)}},
toJson:function(){var a={renderer:this.renderer&&this.renderer.toJson(),transparency:this.transparency,scaleSymbols:this.scaleSymbols,showLabels:this.showLabels};this.labelingInfo&&0<this.labelingInfo.length&&(a.labelingInfo=[],e.forEach(this.labelingInfo,function(c){a.labelingInfo.push(c.toJson())}));return h.fixJson(a)}});f("extend-esri")&&d.setObject("layers.LayerDrawingOptions",b,g);return b});