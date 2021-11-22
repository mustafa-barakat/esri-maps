// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/function/CompositeBandFunction","dojo/_base/declare dojo/_base/lang ./RasterFunctionX ../../PixelBlock ./pixelShaders ./RasterFunctionWebGLMixin".split(" "),function(h,k,l,p,m,n){return h([l,n],{declaredClass:"esri.layers.rasterLib.function.CompositeBandFunction",functionName:"CompositeBand",supportWebGL:!0,support2D:!0,constructor:function(a){this.functionArguments=this.mixinIgnoreCase({rasters:null},a)},bind:function(a){a=this.getSourceRasterInfo(a);if(!a.rasters)return Error("The rasters input to composite band function is invalid.");
var e=[],b=[],d=a.rasters.length,c;if(a.rasters[0].statistics)for(c=0;c<d;c++)e.push(a.rasters[c].statistics[0]);if(a.rasters[0].histograms)for(c=0;c<d;c++)b.push(a.rasters[c].histograms[0]);this.rasterInfo=k.mixin(a.rasters[0],{bandCount:d,pixelType:this._calculatePixelType(this.pixelType,a.rasters[0].pixelType),statistics:e,histograms:b});return!0},read2D:function(a){a=a.rasters;if(null!=a&&0!==a.length){var e=this._clonePixelData(a[0]),b=e.pixelBlock,d=[],c=[];for(f=0;f<a.length;f++)d.push(a[f].pixelBlock.pixels[0]),
c.push(a[f].pixelBlock.statistics[0]);b.pixels=d;b.stackedStatistics=c;b.planes=a.length;var f;c=b.width*b.height;for(f=0;f<a.length;f++)if(b=a[f].pixelBlock.mask,g&&b)for(d=0;d<c;d++)g[d]&=b[d];else var g=g||b;e.maks=g;return e}},readGL:function(a){this._performance.start();this._initializeProgram({fragment:m.compositeBand,fragmentName:"CompositeBand"});var e=a.rasters;if(null!=e&&0!==e.length){e=e.length;var b,d=this.bindFrameBuffer();for(b=0;b<e;b++){var c=this._setupTextureData(a.rasters[b],{notOriginal:0<
b});var f=0<b?b.toString():"";this._bindTexture(c.texture,"u_image"+f)}this._setUniforms({u_rasterCount:e});this._drawGL();this._addPerformanceMetric(this._performance.elapsed());return{extent:c.extent,texture:d.texture}}}})});