// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/builder/columnBarLine/_LineChartSeriesCalculator","dojo/_base/lang ../../ThemeCalculator ../../ChartTypes ../../ChartLineStyles ../../ChartLineMarkers ../../AxisUtil ../utils/TooltipInfoBuilder ../ChartPlots esri/dijit/geoenrichment/utils/ColorUtil ./_AxisBuilder ./_PointLabelUtil ./_StatsBuilder".split(" "),function(R,K,M,I,y,S,T,U,z,V,L,W){var X={calcLineStyle:function(a,w,f,e){var b=e.comparisonInfo,A=e.themeSettings,c=e.visualProperties,
p=a.lineThickness||c.lineThickness||1,h=1,B=1,F=1;c.fillLineArea?(h="number"===typeof c.lineOpacity?c.lineOpacity:c.lineAreaOpacity,B=c.lineAreaOpacity):"number"===typeof c.lineOpacity&&(h=c.lineOpacity);f=K.calcColorForPoint({point:null,seriesItem:a,pointIndex:0,seriesIndex:w,numSeries:f.length,chartType:M.LINE,themeSettings:A,isComparisonSeries:a.isComparisonSeries,comparisonInfo:b,isMultiFeature:e.isMultiFeatureChart});1>h&&f&&(f=z.toColor(f),f.a=h);A=a.lineStyle||I.SOLID;var g=a.lineMarkerSize,
u=z.toColor(a.fillColor||f);u.a=B;var x=z.toColor(a.lineMarkerColor||f);x.a=h;F="number"===typeof c.lineMarkersFillOpacity?c.lineMarkersFillOpacity:B;c=z.toColor(a.lineMarkerFillColor||u);c.a=F;if(a.isComparisonSeries&&b){b.lineThickness&&(p=b.lineThickness);b.lineStyle&&(A=b.lineStyle);b.lineMarkerSize&&(g=b.lineMarkerSize);if(b.lineMarker){var C=y.getMarkerPath(b.lineMarker);var q=y.getMarkerPath(b.lineMarker,g)}else C=K.getComparisonSymbol(),q=K.getComparisonSymbol(g);b.lineMarkerColor&&(x=z.toColor(b.lineMarkerColor),
x.a=h);b.lineMarkerFillColor&&(c=z.toColor(b.lineMarkerFillColor),c.a=B)}else e.viewModel.isGraphicStyle()&&(C=a.lineMarker&&y.getMarkerPath(a.lineMarker)||y.getMarkerPathAt(w),q=a.lineMarker&&y.getMarkerPath(a.lineMarker,g)||y.getMarkerPathAt(w,g));return{lineColor:f,width:p,style:I.toGFXValue(A),marker:q,unscaledMarker:C,markerColor:x,markerFillColor:c,fillColor:u}}};return{calcSeriesLine:function(a){var w=a.chart,f=a.chartType,e=a.visualProperties,b=a.seriesItems,A=1===b.length,c=a.seriesItemsWithComparison||
b,p=a.isSecondaryPlot,h=a.reverseXY||f===M.VERTICAL_LINE,B=a.comparisonInfo,F=a.themeSettings,g=a.viewModel,u=[],x=new W({visualProperties:e,seriesItems:c,viewModel:g,currentFeatureIndex:a.currentFeatureIndex,isMultiFeatureChart:a.isMultiFeatureChart,comparisonFeatureAttributes:a.comparisonFeatureAttributes,chartType:f,isSecondaryPlot:p,oppositeDirections:a.oppositeDirections,excludedSeriesHash:a.excludedSeriesHash}),C=a.primaryPlotStat&&a.primaryPlotStat.pointIndexToTooltipsHash||{},q=x.getTotalStats();
c.forEach(function(k,r){if(k.points.length){var t=X.calcLineStyle(k,r,c,a),D={name:k.label,data:[],isComparisonSeries:k.isComparisonSeries,params:{plot:p?U.SECONDARY:void 0,fill:e.fillLineArea?t.fillColor:"transparent",stroke:{color:t.lineColor,width:t.width,style:t.style},marker:t.marker,unscaledMarker:t.unscaledMarker,markerStroke:{color:t.markerColor,width:t.width,style:I.toGFXValue(I.SOLID)},markerFill:e.fillLineMarkers?t.markerFillColor:"transparent",outline:!1}},l=x.getStatisticsForSeriesAt(r);
k.points.forEach(function(d,v){function N(){return p&&a.oppositeDirections?1===r?a.reverseOrder?1:-1:a.reverseOrder?-1:1:1}function O(){return p&&!a.oppositeDirections&&2===a.primarySeries.length?0===r?-.15:.15:0}if(!d.hidden){var E=l.values[v],J=E.value,G=J||0,H=v+1;p||L.updatePointIndexToLabelMap(w,H,r,d,g);var n=a.isMultiFeatureChart&&q.crossSeriesStats[v],m={originalValue:J,isUnavailableData:isNaN(J),unsortedIndex:v,originalIndex:d.originalIndex||v,name:L.getPointLabel(d,g),valuesSumsInSeries:l.absSumInSeries,
seriesItem:k,seriesIndex:r,point:d,isBenchmarked:E.isBenchmarked,unbenchmarkedValue:E.ownValue};h?(m.x=G*N(),m.y=H+O(),m.valueProp="x"):(m.x=H+O(),m.y=G*N(),m.valueProp="y");e.showValuesAsWeightInStack?m[h?"x":"y"]=l.weightsInStack?100*l.weightsInStack[v]:0:e.yAxis.showValuesAsWeightsInSeries&&(m[h?"x":"y"]/=l.absSumInSeries/100);G=L.getPointLabel(c[0].points[v]||d,g);d=T.getTooltipInfo({yValue:J,pointLabel:G,seriesLabel:k.label,minInSeriesValue:l.minInSeries,maxInSeriesValue:l.maxInSeries,sumInSeriesValue:l.sumInSeries,
absSumInSeriesValue:l.absSumInSeries,avgInSeriesValue:l.avgInSeries,weightInStack:l.weightsInStack&&l.weightsInStack[v],minInAreasValue:n&&n.min,maxInAreasValue:n&&n.max,sumInAreasValue:n&&n.sum,absSumInAreasValue:n&&n.absSum,avgInAreasValue:n&&n.avg,visualProperties:e,chartType:f,isMultiFeature:a.isMultiFeatureChart,conditionalStyling:null,fieldInfo:d.fieldInfo,isThisAreaSpecific:B&&!a.isMultiFeatureChart?!k.isComparisonSeries:void 0,isThisAreaSingleSeries:A,decimals:d.value&&d.value.decimals,fill:D.params.markerFill,
stroke:D.params.markerStroke.color,marker:D.params.unscaledMarker||D.params.marker,isBenchmarked:E.isBenchmarked,unbenchmarkedValue:E.ownValue,chartContainer:a.chartContainer,viewModel:g,theme:a.theme,themeSettings:F,dataDrillingPanelInfo:a.dataDrillingPanelInfo,pointName:G,seriesName:d.originalSeriesName||k.label,areaName:d.areaName,featureIndex:E.featureIndex,isComparisonPoint:d.isComparisonPoint,comparisonFeatureAttribute:d.comparisonFeatureAttribute});var P=C[H]=C[H]||[];P.push(d);d.getGroup=
function(){return P};m.tooltip=d;D.data.push(m)}});u.push(D)}},this);if(p){if(a.primaryPlotStat&&(a.primaryPlotStat.minYValue=Math.min(q.minYValue,a.primaryPlotStat.minYValue),a.primaryPlotStat.maxYValue=Math.max(q.maxYValue,a.primaryPlotStat.maxYValue),b=S.getPrettifyYAxisParameters(a.primaryPlotStat.minYValue,a.primaryPlotStat.maxYValue,{baseLineValue:e.yAxis.baseLineValue,renderColumnBarsInOppositeDirections:a.oppositeDirections,previewBelowZero:!g.dynamicReportInfo,nonZeroInclusive:e.yAxis.nonZeroInclusive}),
R.mixin(w.axes.y.opt,{majorTickStep:b.majorTickStep,minorTickStep:b.minorTickStep,min:b.min,max:b.max})),1===a.primarySeries.length){var Y=h?"y":"x",Q=[];a.primarySeries[0].data.forEach(function(k){var r=u[0].data[k.unsortedIndex];r[Y]=k.x;Q.push(r)});u[0].data=Q}}else V.prettifyYAxis(q.minYValue,q.maxYValue,w,e,f,F,g);return u}}});