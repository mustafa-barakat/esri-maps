// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/LOD",["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../lang"],function(a,b,c,d,e){a=a(null,{declaredClass:"esri.layers.LOD",constructor:function(f){b.mixin(this,f)},toJson:function(){return e.fixJson({level:this.level,levelValue:this.levelValue,resolution:this.resolution,scale:this.scale})}});c("extend-esri")&&b.setObject("layers.LOD",a,d);return a});