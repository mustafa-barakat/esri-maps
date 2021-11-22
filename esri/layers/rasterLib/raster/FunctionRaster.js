// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/raster/FunctionRaster","require dojo/_base/declare dojo/_base/lang dojo/_base/Deferred dojo/_base/array dojo/_base/config dojo/_base/json dojo/sniff ../DeferredList2 dojo/when ../../../kernel ../../../Evented ../../../request ../../../deferredUtils ../../../geometry/Extent ../../../geometry/Point ../../../SpatialReference ../../../deferredUtils ../../../urlUtils ../../rasterFormats/rasterCodec ./RasterInfo ./BasicRaster ../../rasterLib/function/rasterFunctionHelper".split(" "),
function(l,r,m,n,y,z,A,t,p,B,u,C,D,v,E,F,G,H,I,J,K,w,q){l=r([w],{declaredClass:"esri.layers.rasterLib.raster.FunctionRaster",rasterFunction:null,sourceType:"Function",constructor:function(a){a&&a.rasterFx&&this._init(a.rasterFx,a.rasterFxArgs)},open:function(){var a=this.getMemberRasters().map(function(c){return c.open()});this.identifiers=this.getMemberRasters().map(function(c){return c._rasterId});var b=new n;(new p(a,null,null,!0)).then(function(c){c.some(function(e){return!e[0]})?b.reject(c):
(this.rasterFunction.bind(),this.rasterInfo=this.rasterFunction.rasterInfo,this.dataType=this.rasterInfo.keyProperties&&this.rasterInfo.keyProperties.DataType||"Generic",this.tileInfo=c[0][1].tileInfo,b.resolve(this))}.bind(this));return b.promise},getProjectedFullExtent:function(a){var b=new n;this.getMemberRasters()[0].getProjectedFullExtent(a).then(m.hitch(this,function(c){this.projectedFullExtent=c;b.resolve(c)}));return b.promise},setProcessingContext:function(a){var b=a;a.layer&&(a=a.layer,
b={id:a.id,rawRasterInfo:a.raster.rasterInfo,glSetting:a._glSetting,xformSetting:a.tileManager&&a.tileManager.xformSetting,useWebGL:a.useWebGL,resampling:a.tileMode&&a.tileManager&&a.tileManager.xformSetting.requireProjection&&!a._hasTilingEffects&&"Thematic"!==a.raster.dataType?1:0,tileMode:a.tileMode});this.rasterFunction.setProcessingContext(b);this._layerOptions=b},alterDefinition:function(a){if(a=a||this.rasterFunction)1===this.memberRasters.length&&!a._bindComplete&&(this.rasterFunction=q.create(a,
{raster:this.memberRasters[0]}))&&(this.rasterFunction.bind(),this.rasterInfo=this.rasterFunction.rasterInfo,this.dataType=this.rasterInfo.keyProperties&&this.rasterInfo.keyProperties.DataType||"Generic",this.rasterFunction.setProcessingContext(this._layerOptions)),this._rasterHandler&&this._rasterHandler._connected&&this.rasterFunction&&this._rasterHandler.setRasterFunction({layerId:this._layerOptions.id,data:this.rasterFunction.toJson(!0)})},setFetchParameters:function(a,b){var c=this.getMemberRasters();
c&&1===c.length&&c[0].setFetchParameters(a,b)},getMemberRasters:function(){this.memberRasters||(this.memberRasters=[],this._getMemberRasters(this.rasterFunction.functionArguments,this.memberRasters));return this.memberRasters},read:function(a){var b=new n(v._dfdCanceller);if(a.src){var c=this.rasterFunction.read(a);b.resolve(c);return b.promise}var e=this.getMemberRasters().map(function(f){return f.read(a)});e=new p(e);var g,d,h=this.identifiers;b._pendingDfd=e;e.then(m.hitch(this,function(f){if(g=
f.some(function(k){return k[0]}))d={},f.forEach(function(k,x){d[h[x]]=k[0]?k[1]:null});c=d?this.rasterFunction.read({extent:a.extent,src:d}):null;c.srcData=d;b.resolve(c)}));return b},_init:function(a,b){if(this.rasterFunction=q.create(a,b))this.rasterFunction._bindComplete=!0;else throw"Cannot initialize a function raster without a raster function";},_getMemberRasters:function(a,b){var c=Object.keys(a),e,g,d;for(e=0;e<c.length;e++)if(d=a[c[e]]){var h=d instanceof Array?d:[d];for(g=0;g<h.length;g++)(d=
h[g])&&("function"===typeof d||"object"===typeof d)&&d.read&&(d.functionArguments?this._getMemberRasters(d.functionArguments,b):d.sourceType&&"Function"!==d.sourceType&&(d._identifier=d._getRasterIdentifier(),b.some(function(f){return f._identifier===d._identifier})||b.push(d)))}return b}});t("extend-esri")&&m.setObject("layers.rasterLib.raster.FunctionRaster",l,u);return l});