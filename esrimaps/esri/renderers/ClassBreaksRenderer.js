// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/renderers/ClassBreaksRenderer","dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/has ../kernel ../lang ../symbols/jsonUtils ./Renderer ../support/expressionUtils".split(" "),function(n,h,k,r,t,p,l,u,v){n=n(u,{declaredClass:"esri.renderer.ClassBreaksRenderer",constructor:function(a,b,d){this.breaks=[];this._symbols={};this.infos=[];this.isMaxInclusive=!0;if(a&&!a.declaredClass){var c=a;b=d&&d.geometryType;this.attributeField=c.field;this.setValueExpression(c.valueExpression);this.valueExpressionTitle=
c.valueExpressionTitle;this.legendOptions=c.legendOptions;this.defaultSymbol=(a=c.defaultSymbol)&&(a.declaredClass?a:l.fromJson(a,d));this.backgroundFillSymbol=(a=c.backgroundFillSymbol)&&(a.declaredClass?a:l.fromJson(a,b?{geometryType:"esriGeometryPolygon"}:null));this._copy(["defaultLabel","classificationMethod:rest","normalizationType:rest","normalizationField","normalizationTotal"],c,this);var e=c.minValue;(a=c.classBreakInfos)&&a[0]&&p.isDefined(a[0].classMaxValue)&&h.forEach(a,function(f){var g=
f.classMaxValue;f.minValue=e;e=f.maxValue=g},this);"esriGeometryPolygon"===b&&(this.hasVisualVariables("sizeInfo",!1)||l.isPointSymbol(l.getFirstSupportedSymbol(h.map(a,function(f){return f.symbol}))))&&(d={geometryType:"esriGeometryPoint"});h.forEach(a,function(f){this._addBreakInfo(f,d)},this)}else this.defaultSymbol=a,this.attributeField=b},addBreak:function(a,b,d){a=k.isObject(a)?a:{minValue:a,maxValue:b,symbol:d};this._addBreakInfo(a)},removeBreak:function(a,b){var d=this.breaks,c,e=d.length,
f=this._symbols;for(c=0;c<e;c++){var g=d[c];if(g[0]==a&&g[1]==b){d.splice(c,1);delete f[a+"-"+b];this.infos.splice(c,1);break}}},clearBreaks:function(){this.breaks=[];this._symbols={};this.infos=[]},getBreakIndex:function(a){var b=this.attributeField,d=a.attributes,c=this.breaks,e=c.length,f=this.isMaxInclusive;if(this.valueExpression)a=this._getDataValue(a,this._cbInfo,null,this._cache.cbInfo);else if(k.isFunction(b))a=b(a);else if(a=parseFloat(d[b]),b=this.normalizationType,b){var g=parseFloat(this.normalizationTotal);
d=parseFloat(d[this.normalizationField]);if("log"===b)a=Math.log(a)*Math.LOG10E;else if("percent-of-total"===b&&!isNaN(g))a=a/g*100;else if("field"===b){if(isNaN(a)||isNaN(d))return-1;a/=d}}if(null!=a&&!isNaN(a)&&"number"===typeof a)for(d=0;d<e;d++)if(b=c[d],b[0]<=a&&(f?a<=b[1]:a<b[1]))return d;return-1},getBreakInfo:function(a){a=this.getBreakIndex(a);return-1!==a?this.infos[a]:null},getSymbol:function(a){return(a=this.breaks[this.getBreakIndex(a)])?this._symbols[a[0]+"-"+a[1]]:this.defaultSymbol},
setMaxInclusive:function(a){this.isMaxInclusive=a},setValueExpression:function(a){this.valueExpression=a;this._cbInfo={valueExpression:a};this._cache.cbInfo=this._createCache(this._cbInfo)},getFieldsUsedInExpressions:function(a){var b=this.inherited(arguments);this.valueExpression&&(b=b.concat(v.extractFieldNames(this.valueExpression,a)));b.sort();return h.filter(b,function(d,c){return 0===c||b[c-1]!==d})},isContinuousRenderer:function(){var a=!1;if(this.infos&&1===this.infos.length){var b=this.attributeField,
d=this.normalizationField,c=this.valueExpression;a=this.getVisualVariablesForType("colorInfo",!1)||[];var e=this.getVisualVariablesForType("sizeInfo",!1)||[],f=this.getVisualVariablesForType("opacityInfo",!1)||[];a=a.concat(e).concat(f);a=h.some(a,function(g){return(g.field===b||g.valueExpression===c)&&g.normalizationField==d})}return a},_normalizationTypeEnums:[["field","esriNormalizeByField"],["log","esriNormalizeByLog"],["percent-of-total","esriNormalizeByPercentOfTotal"]],_classificationMethodEnums:[["natural-breaks",
"esriClassifyNaturalBreaks"],["equal-interval","esriClassifyEqualInterval"],["quantile","esriClassifyQuantile"],["standard-deviation","esriClassifyStandardDeviation"],["geometrical-interval","esriClassifyGeometricalInterval"],["defined-interval","esriClassifyDefinedInterval"]],_copy:function(a,b,d){h.forEach(a,function(c){var e=c.split(":");if(1<e.length){c=e[0];var f=this["_"+c+"Enums"];if("rest"===e[1]){var g="1";var q="0"}else"sdk"===e[1]&&(g="0",q="1")}e=b[c];if(void 0!==e&&(d[c]=e,f&&g)){var m,
w=f.length;for(m=0;m<w;m++)if(f[m][g]===e){d[c]=f[m][q];break}}},this)},_addBreakInfo:function(a,b){var d=a.minValue,c=a.maxValue;this.breaks.push([d,c]);this.infos.push(a);var e=a.symbol;e&&!e.declaredClass&&(a.symbol=l.fromJson(e,b));this._symbols[d+"-"+c]=a.symbol},toJson:function(){var a=this.infos||[],b=p.fixJson,d=a[0]&&a[0].minValue,c=this.backgroundFillSymbol;a=k.mixin(this.inherited(arguments),{type:"classBreaks",field:this.attributeField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,
legendOptions:k.clone(this.legendOptions),defaultSymbol:this.defaultSymbol&&this.defaultSymbol.toJson(),backgroundFillSymbol:c&&c.toJson(),minValue:-Infinity===d?-Number.MAX_VALUE:d,classBreakInfos:h.map(a,function(e){e=k.mixin({},e);e.symbol=e.symbol&&e.symbol.toJson();e.classMaxValue=Infinity===e.maxValue?Number.MAX_VALUE:e.maxValue;delete e.minValue;delete e.maxValue;return b(e)})});this._copy(["defaultLabel","classificationMethod:sdk","normalizationType:sdk","normalizationField","normalizationTotal"],
this,a);a.hasOwnProperty("normalizationType")&&!a.normalizationType&&delete a.normalizationType;a.hasOwnProperty("classificationMethod")&&!a.classificationMethod&&delete a.classificationMethod;return b(a)}});r("extend-esri")&&k.setObject("renderer.ClassBreaksRenderer",n,t);return n});