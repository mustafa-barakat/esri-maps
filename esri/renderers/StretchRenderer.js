// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/renderers/StretchRenderer","dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/has ../kernel ../lang ../layers/RasterFunction ./colorRampUtils".split(" "),function(f,p,g,m,n,h,k,l){var c={TYPE_NONE:"none",TYPE_STANDARDDEVIATION:"standardDeviation",TYPE_HISTOGRAMEQUALIZATION:"histogramEqualization",TYPE_MINMAX:"minMax",TYPE_PERCENTCLIP:"percentClip",TYPE_SIGMOID:"sigmoid"};f=f(null,{declaredClass:"esri.renderer.StretchRenderer",constructor:function(a){a=a||{};this.stretchType=c.TYPE_NONE;
this.dra=!0;this.statistics=[];this.gamma=[];this.computeGamma=this.useGamma=!1;this.sigmoidStrengthLevel=this.numberOfStandardDeviations=this.minPercent=this.maxPercent=this.min=this.max=null;g.mixin(this,a);this.colorRamp=l.fromJson(a.colorRamp)},toJson:function(){var a={type:"rasterStretch",stretchType:this.stretchType,colorRamp:this.colorRamp&&this.colorRamp.toJson(),min:this.min,max:this.max,numberOfStandardDeviations:this.numberOfStandardDeviations,statistics:g.clone(this.statistics),dra:this.dra,
minPercent:this.minPercent,maxPercent:this.maxPercent,useGamma:this.useGamma,gamma:g.clone(this.gamma),computeGamma:this.computeGamma,sigmoidStrengthLevel:this.sigmoidStrengthLevel};return h.fixJson(a)},toRenderingRule:function(a){a=a||{};var b=new k;b.functionName="Stretch";var d=this._convertStretchTypeEnumToIndex(this.stretchType),e={StretchType:d,Statistics:this.statistics,DRA:this.dra,UseGamma:this.useGamma,Gamma:this.gamma,ComputeGamma:this.computeGamma};h.isDefined(this.min)&&(e.Min=this.min);
h.isDefined(this.min)&&(e.Max=this.max);3===d?(e.NumberOfStandardDeviations=this.numberOfStandardDeviations,b.outputPixelType="U8"):6===d?(e.MinPercent=parseFloat(this.minPercent),e.MaxPercent=parseFloat(this.maxPercent),b.outputPixelType="U8"):5===d?b.outputPixelType="U8":9===d&&(e.SigmoidStrengthLevel=this.sigmoidStrengthLevel);b.functionArguments=e;b.variableName="Raster";return this.colorRamp?(d=new k,d.functionArguments=a.convertToColormap?{Colormap:l.convertColorRampToColormap(this.colorRamp,
256)}:{colorRamp:this.colorRamp.toJson()},d.variableName="Raster",d.functionName="Colormap",d.functionArguments.Raster=b,d):b},_convertStretchTypeEnumToIndex:function(a){var b=0;a===c.TYPE_STANDARDDEVIATION?b=3:a===c.TYPE_HISTOGRAMEQUALIZATION?b=4:a===c.TYPE_MINMAX?b=5:a===c.TYPE_PERCENTCLIP?b=6:a===c.TYPE_SIGMOID&&(b=9);return b},_convertStretchTypeIndexToEnum:function(a){var b=c.TYPE_NONE;3===a?b=c.TYPE_STANDARDDEVIATION:4===a?b=c.TYPE_HISTOGRAMEQUALIZATION:5===a?b=c.TYPE_MINMAX:6===a?b=c.TYPE_PERCENTCLIP:
9===a&&(b=c.TYPE_SIGMOID);return b}});g.mixin(f,c);m("extend-esri")&&g.setObject("renderer.StretchRenderer",f,n);return f});