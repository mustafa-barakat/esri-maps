// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/builder/columnBarLine/_StatsBuilder",["dojo/_base/declare","../../../../supportClasses/conditionalStyling/ConditionalStyleUtil","../../../../sections/dynamicSettings/supportClasses/FilterUtil","../../ChartTypes","../utils/ChartDataUtil"],function(y,z,A,v,m){return y(null,{_visualProperties:null,_seriesItems:null,_viewModel:null,_currentFeatureIndex:null,_isMultiFeatureChart:null,_excludedSeriesHash:null,_comparisonFeatureAttributes:null,
_chartType:null,_isSecondaryPlot:!1,_oppositeDirections:!1,_totalStats:null,_seriesValues:null,_seriesStats:null,constructor:function(a){this._visualProperties=a.visualProperties;this._seriesItems=a.seriesItems;this._viewModel=a.viewModel;this._currentFeatureIndex=a.currentFeatureIndex;this._isMultiFeatureChart=a.isMultiFeatureChart;this._excludedSeriesHash=a.excludedSeriesHash||{};this._comparisonFeatureAttributes=a.comparisonFeatureAttributes;this._chartType=a.chartType;this._isSecondaryPlot=a.isSecondaryPlot;
this._oppositeDirections=a.oppositeDirections;this._calcValuesForAllSeries();this._calcInSeriesStats();this._visualProperties.isStacked&&this._calcInStackStats();this._calcTotalStats();this._calcConditionalStylingData()},getStatisticsForSeriesAt:function(a){return this._seriesStats[a]},getTotalStats:function(){return this._totalStats},_calcValuesForAllSeries:function(){var a=this._visualProperties,d=this._seriesItems,g=this._viewModel,f=this._currentFeatureIndex,c=this._isMultiFeatureChart,b=this._comparisonFeatureAttributes,
e=this._chartType,h=1<d.length&&a.renderColumnBarsInOppositeDirections;this._seriesValues=this._seriesItems.map(function(k,n){var q=2===d.length&&(h||this._oppositeDirections&&this._isSecondaryPlot)?m.CHART_DATA_SMOOTH:null,w=a.filter&&a.filter.ranges&&A.getRangeStatistics(a.filter.ranges),x=a.conditionalStyling&&z.getStatistics(a.conditionalStyling);if(w||x)q=m.getChartData({filterRangesStats:w,conditionalStats:x,numPoints:d[0].points.length,chartData:q,visualProperties:a});return k.points.map(function(p,
r){if(p.hidden)return{value:void 0};var t=c?v.isLineLike(e)?n:r:f,u=m.getPointValue({point:p,index:r,seriesIndex:n,maxValue:!1,chartType:e,visualProperties:a,viewModel:g,currentFeatureIndex:t,chartData:q,isComparisonSeries:k.isComparisonSeries,comparisonFeatureAttribute:b&&b[0]}),l=g.getBenchmarkController&&g.getBenchmarkController();return v.isBenchmarkSupported(e,c)&&l&&0<=l.getAreaIndex()&&l.getAreaIndex()!==f?(l=l.getAreaIndex(),p=m.getPointValue({point:p,index:r,seriesIndex:n,maxValue:!1,chartType:e,
visualProperties:a,viewModel:g,currentFeatureIndex:l,chartData:q,isComparisonSeries:!1}),{value:u-p,isBenchmarked:!0,ownValue:u,featureIndex:t}):{value:u,featureIndex:t}})},this)},_calcInSeriesStats:function(){this._seriesStats=this._seriesItems.map(function(a,d){var g=this._excludedSeriesHash[a.label],f=0,c=0,b=1E6,e=-1E6,h=0;g||a.points.forEach(function(k,n){k.hidden||(h++,k=this._getValueAt(d,n),f+=k,c+=Math.abs(k),b=Math.min(b,k),e=Math.max(e,k))},this);return{isExcluded:g,values:this._seriesValues[d],
sumInSeries:f,absSumInSeries:c,minInSeries:b,maxInSeries:e,avgInSeries:f/h}},this)},_calcInStackStats:function(){this._seriesItems[0].points.forEach(function(a,d){var g=0,f=[],c=[];this._seriesItems.forEach(function(b,e){this._excludedSeriesHash[b.label]||a.hidden||(b=this._getValueAt(e,d),f[e]=b,g+=Math.abs(b))},this);this._seriesItems.forEach(function(b,e){if(!this._excludedSeriesHash[b.label]&&!a.hidden){b=this._seriesStats[e];b.stackValues=b.stackValues||[];b.stackValues[d]=f;b.weightsInStack=
b.weightsInStack||[];var h=this._getValueAt(e,d);h=b.weightsInStack[d]=h/g;b.stackValuesAsWeighedPercents=b.stackValuesAsWeighedPercents||[];b.stackValuesAsWeighedPercents[d]=c;c[e]=100*h}},this)},this)},_calcTotalStats:function(){var a=this._totalStats={minYValue:Infinity,maxYValue:-Infinity,stackedValues:this._visualProperties.isStacked?[]:null,crossSeriesStats:null};this._seriesItems.forEach(function(d,g){if(!this._excludedSeriesHash[d.label]){var f=this._seriesStats[g];d.points.forEach(function(c,
b){c.hidden||(c=this._getValueAt(g,b),c=this._visualProperties.showValuesAsWeightInStack?100*f.weightsInStack[b]:this._visualProperties.yAxis.showValuesAsWeightsInSeries?c/f.absSumInSeries*100:c,a.stackedValues?(a.stackedValues[b]=a.stackedValues[b]||0,b=a.stackedValues[b]+=c,a.minYValue=Math.min(b,a.minYValue),a.maxYValue=this._visualProperties.showValuesAsWeightInStack?100:Math.max(b,a.maxYValue)):(a.minYValue=Math.min(c,a.minYValue),a.maxYValue=Math.max(c,a.maxYValue)))},this)}},this);a.crossSeriesStats=
this._isMultiFeatureChart&&this._collectCrossSeriesStats()},_collectCrossSeriesStats:function(){return this._seriesStats[0].values.map(function(a,d){var g=0,f=0,c=1E6,b=-1E6;this._seriesStats.forEach(function(e){e=e.values[d].value||0;g+=e;f+=Math.abs(e);c=Math.min(c,e);b=Math.max(b,e)});return{sum:g,absSum:f,min:c,max:b,avg:g/this._seriesStats.length}},this)},_calcConditionalStylingData:function(){if(this._visualProperties.conditionalStyling){var a=[];this._seriesItems.map(function(f,c){f=this._seriesStats[c];
!f.isExcluded&&(a=a.concat(f.values))},this);var d=m.getConditionalStylesForStatsPointValues(a,this._visualProperties),g=0;this._seriesItems.map(function(f,c){var b=this._seriesStats[c];b.isExcluded||(b.conditional={styles:[],stats:d.stats},b.values.forEach(function(e,h){b.conditional.styles[h]=d.styles[g++]}))},this)}},_getValueAt:function(a,d){return(d=(a=this._seriesValues[a])&&a[d])&&d.value||0}})});