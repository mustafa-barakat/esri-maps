// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/builder/columnBarLine/_ComparisonUtil",["dojo/_base/lang","../../ChartTypes","../ChartPlots","../../ChartFilterUtil"],function(l,k,n,m){return{getComparisonPlotName:function(a,d){return d&&d.chartType===k.LINE&&!k.isLineLike(a)?n.SECONDARY:null},isComparisonInPrimaryPlot:function(a,d){return!this.getComparisonPlotName(a,d)},getEffectiveNumberOfSeries:function(a,d,g,h,b){function c(){return b?a.filter(function(f){return!b[f.label]}).length:
a.length}return this.canShowComparison(g,a,h)?h?c():this.isComparisonInPrimaryPlot(d,g)?2*c():c():c()},canShowComparison:function(a,d,g){return a&&(g||1===d.length||2===d.length)},updateSeriesItemsForComparisonInfo:function(a){if(this.canShowComparison(a.comparisonInfo,a.seriesItems,a.isMultiFeatureChart))if(a.isMultiFeatureChart)if(k.isLineLike(a.chartType)){var d=a.seriesItems.slice(),g=m.getFirstSeriesItem(a.seriesItems)||a.seriesItems[0];a.comparisonFeatureAttributes.forEach(function(b){var c=
b.StdGeographyName,f={isComparisonSeries:!0,label:c,points:g.points.map(function(e){return{label:e.label,fieldInfo:e.fieldInfo,value:{value:b[e.fieldInfo.name]||0},isComparisonPoint:!0,comparisonFeatureAttribute:b,areaName:c,originalSeriesName:e.originalSeriesName}})};d.push(f)});a.seriesItemsWithComparison=d}else{var h=a.seriesItems.map(function(b){b=l.mixin({},b);b.points=b.points.slice();return b});a.comparisonFeatureAttributes.forEach(function(b){h.forEach(function(c){var f=m.getFirstSeriesPoint(c)||
c.points[0],e=b.StdGeographyName;c.points.push({label:e,color:f.color,fieldInfo:f.fieldInfo,value:{value:b[f.fieldInfo.name]||0},isComparisonPoint:!0,comparisonFeatureAttribute:b,areaName:e,originalSeriesName:f.originalSeriesName})})});a.seriesItems=h;delete a.comparisonInfo}else d=[],a.seriesItems.forEach(function(b,c){d.push(b);var f=a.comparisonFeatureAttributes[0].StdGeographyName;if(k.isLineLike(a.chartType))if(c===a.seriesItems.length-1)c={isComparisonSeries:!0,label:f,points:b.points.map(function(e){return l.mixin({},
e)})};else return;else c={isComparisonSeries:!0,label:f+(1<a.seriesItems.length?" ("+b.label+")":""),points:b.points.map(function(e){return l.mixin({},e)})};c.points.forEach(function(e){e.isComparisonPoint=!0;e.comparisonFeatureAttribute=a.comparisonFeatureAttributes[0];e.areaName=f;e.originalSeriesName=b.label});d.push(c)}),a.seriesItemsWithComparison=d}}});