// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/function/HillshadeFunction","dojo/_base/declare dojo/_base/lang ./RasterFunctionX ../../../renderers/colorRampGenerator ../../../WKIDUnitConversion ../../PixelBlock ./pixelShaders ./RasterFunctionWebGLMixin ./surfaceUtils ./rasterUtils".split(" "),function(z,A,B,r,y,I,C,D,E,F){return z([B,D],{declaredClass:"esri.layers.rasterLib.function.HillshadeFunction",functionName:"Hillshade",supportWebGL:!0,support2D:!0,renderTexture:!0,constructor:function(a){this.functionArguments=
this.mixinIgnoreCase({hillshadeType:0,altitude:45,azimuth:315,zFactor:1,slopeType:1,psPower:.664,psFactor:.024,colorRamp:null,raster:null},a);this._azimuths=[315,270,225,360,180,0];this._altitudes=[60,60,60,60,60,90];this._weights=[3,5,3,2,1,4];var b=this._weights.reduce(function(d,h){return d+h});this._weights=this._weights.map(function(d){return d/b})},bind:function(a){a=this.getSourceRasterInfo(a);if(!a.raster)return Error("The raster input to hillshade function is invalid.");a.raster.statistics&&
(this.srcStatistics=a.raster.statistics);this.rasterInfo=A.mixin(a.raster,{bandCount:1,pixelType:this._calculatePixelType(this.pixelType,"U8"),statistics:[{min:0,max:255}],histograms:null});this.rasterInfo.keyProperties=this.rasterInfo.keyProperties||{};this.rasterInfo.keyProperties.DataType="Generic";this._initializeColormap();return!0},read2D:function(a){this._performance.start();a=a.raster;a=E.hillshade(a,{altitude:this.functionArguments.altitude,azimuth:this.functionArguments.azimuth,zFactor:this.functionArguments.zFactor,
psPower:this.functionArguments.psPower,psFactor:this.functionArguments.psFactor,hillshadeType:this.functionArguments.hillshadeType,slopeType:this.functionArguments.slopeType,isGCS:a.extent.spatialReference.wkid&&null==y[a.extent.spatialReference.wkid]});this._addPerformanceMetric(this._performance.elapsed());return a},readGL:function(a){this._performance.start();this._initializeProgram({fragment:C.hillshade,fragmentName:"Hillshade"});this.functionArguments.colorRamp&&this._indexedColormap&&!this._clrTexture&&
(this._clrTexture=this._setupColormapTexture(this._indexedColormap));var b=this._setupTextureData(a.raster),d=this.bindFrameBuffer(),h=this.gl,t=h.drawingBufferWidth;h=h.drawingBufferHeight;var c=b.extent,u=(c.xmax-c.xmin)/t,v=(c.ymax-c.ymin)/h,l=this.functionArguments.altitude,m=this.functionArguments.azimuth,k=this.functionArguments.zFactor;1===this.functionArguments.hillshadeType&&(k*=2);var n=k/(8*u),q=k/(8*v);.001<k&&c.spatialReference.wkid&&null==y[c.spatialReference.wkid]&&(n/=111E3,q/=111E3);
var f=this.functionArguments.psPower,g=this.functionArguments.psFactor;3===this.functionArguments.slopeType&&((n=c.spatialReference.wkid&&null==y[c.spatialReference.wkid])?(n=111E3*u,q=111E3*v,n=(k+Math.pow(n,f)*g)/(8*n),q=(k+Math.pow(q,f)*g)/(8*q)):(n=(k+Math.pow(u,f)*g)/(8*u),q=(k+Math.pow(v,f)*g)/(8*v)));var e=(90-l)*Math.PI/180;l=Math.cos(e);var w=(360-m+90)*Math.PI/180;m=Math.sin(e)*Math.cos(w);e=Math.sin(e)*Math.sin(w);f=Array(6);g=Array(6);c=Array(6);var G=this._weights,p;if(1===this.functionArguments.hillshadeType){var H=
this._azimuths.length;for(p=0;p<H;p++)l=this._altitudes[p],m=this._azimuths[p],e=(90-l)*Math.PI/180,l=Math.cos(e),w=(360-m+90)*Math.PI/180,m=Math.sin(e)*Math.cos(w),e=Math.sin(e)*Math.sin(w),f[p]=l,g[p]=m,c[p]=e}else f[0]=l,g[0]=m,c[0]=e;f=f.map(function(x){return parseFloat(x)});g=g.map(function(x){return parseFloat(x)});c=c.map(function(x){return parseFloat(x)});this._setUniforms({u_cellSize:[u,v],u_zfactor:k,u_xFactor:n,u_yFactor:q,u_sinZcosA:m,u_sinZsinA:e,u_cosZ:l,u_sinZcosAs:g,u_sinZsinAs:c,
u_cosZs:f,u_weights:G,u_hillshadeType:this.functionArguments.hillshadeType,u_resolution:a&&a.raster&&a.raster.pixelBlock?[1/a.raster.pixelBlock.width,1/a.raster.pixelBlock.height]:[1/t,1/h],u_scaled:!this.renderTexture,u_applyColorramp:this._clrTexture?!0:!1,u_minValue:this.srcStatistics[0].min,u_maxValue:this.srcStatistics[0].max,u_indexedColormapOffset:this._indexedColormapOffset||0,u_indexedColormapMaxIndex:this._indexedColormap?this._indexedColormap.length/4-1:0});this._clrTexture&&this._bindTexture(this._clrTexture,
"u_image1");this._bindTexture(b.texture,"u_image");this._drawGL();this._addPerformanceMetric(this._performance.elapsed());return{extent:b.extent,texture:d.texture}},_initializeColormap:function(){this._indexedColormapOffset=0;var a=this._indexedColormap,b=this.functionArguments.colorRamp;this.functionArguments.colormap?(this._alphaSpecified=(b=F.buildIndexedColormap(this.functionArguments.colormap))&&b.alphaSpecified,this._indexedColormap=b&&b.indexedColormap,this._indexedColormapOffset=b&&b.offset):
b?(this._indexedColormap="multipart"===b.type?this.invert?r.createMultiPartColorRamp(this._invertColorRamp(b)):r.createMultiPartColorRamp(b):this.invert?r.createAlgorithmicColorRamp(this._invertColorRamp(b)):r.createAlgorithmicColorRamp(b),b.fromColor&&b.toColor&&"000"===b.fromColor.slice(0,3).join("")&&"255255255"===b.toColor.slice(0,3).join("")&&(this._clrTexture=this._indexedColormap=null)):this.functionArguments.colormapName?"random"===this.functionArguments.colormapName.toLowerCase()&&(this._indexedColormap=
r.createRandomColorRamp()):this._clrTexture=this._indexedColormap=null;if(a&&this._indexedColormap){b=!0;for(var d=0;d<a.length;d++)if(a[d]!==this._indexedColormap[d]){b=!1;break}b||(this._clrTexture=null)}},_setupColormapTexture:function(a){var b=this._createTexture(),d=this.gl,h=a.length/4,t=new Float32Array(a.length),c;for(c=0;c<a.length;c++)t[c]=a[c]/255;d.getExtension("OES_texture_float");d.texImage2D(d.TEXTURE_2D,0,d.RGBA,h,1,0,d.RGBA,d.FLOAT,t);return b}})});