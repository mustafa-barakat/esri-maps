// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/builder/round/_GaugeChartSeriesCalculator","../../ThemeCalculator ../../ChartTypes ../../ChartJsonUtil ../../ChartLineStyles ../../../../supportClasses/conditionalStyling/ConditionalStyleUtil ../../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder ../utils/ChartDataUtil ../utils/TooltipInfoBuilder esri/dijit/geoenrichment/utils/ColorUtil".split(" "),function(I,w,J,x,y,K,z,L,A){var M={calcLineStyle:function(d,g){return{color:A.getColorWithAlpha(g.outlineColor||
d,g.outlineOpacity),width:g.outlineThickness,style:x.toGFXValue(g.outlineStyle||x.SOLID)}}};return{calcSeries:function(d){var g=d.seriesItems,h=d.chartType,B=d.themeSettings,C=d.viewModel,b=d.visualProperties,D=d.currentFeatureIndex,E=[],m=g[0],F={name:"data",data:[]},k=[],n=0,G=0,p=1E6,q=-1E6,e=m.points.slice();1===e.length&&e.push(J.getGaugeOthersPoint());if(w.isConditionalStylingSupported(h)&&b.conditionalStyling){var H=y.getStatistics(b.conditionalStyling);var N=H&&z.getChartData({conditionalStats:H,
numPoints:e.length})}var O=K.isFieldInfoInPercentState(e[0].fieldInfo);e.forEach(function(a,c){1!==c?a=z.getPointValue({point:a,index:0,seriesIndex:0,maxValue:!1,chartType:h,visualProperties:b,viewModel:C,currentFeatureIndex:D,chartData:N}):(a=k[0],a=b.gaugeRangeMax?Math.max(0,b.gaugeRangeMax-a):O?Math.max(0,100-a):0);a=(k[c]=a)||0;n+=a;G+=Math.abs(a);p=Math.min(p,a);q=Math.max(q,a)});0===k[1]&&(e.length=1);var P=n/e.length,Q=0>b.gaugeRangeMin||0>k[0];e.forEach(function(a,c){var l=1===c,r=k[c],t=
r||0;if(w.isConditionalStylingSupported(h)&&b.conditionalStyling){var f=(f=y.getConditionalStyle(t,b.conditionalStyling))&&f.backgroundColor;l&&!b.gaugeConditionalStylingOthers&&(f=void 0)}f=f||I.calcColorForPoint({point:a,seriesItem:m,pointIndex:c,isOthersPoint:l,seriesIndex:0,numSeries:g.length,chartType:h,themeSettings:B});var u=M.calcLineStyle(f,b);f=1>b.fillOpacity?A.getColorWithAlpha(f,b.fillOpacity):f;var v=t;l||b.gaugeRangeMin&&(v=Math.max(0,v-b.gaugeRangeMin));c={originalValue:r,x:1,y:Math.max(1E-4,
v),isUnavailableData:isNaN(r),valueProp:"y",unsortedIndex:c,name:a.label,point:a,fill:f,fieldInfo:e[0].fieldInfo,seriesIndex:0,isOthersPoint:l,stroke:{color:u.color,width:u.width,style:u.style}};a=L.getTooltipInfo({yValue:t,pointLabel:a.label,seriesLabel:null,minInSeriesValue:p,maxInSeriesValue:q,sumInSeriesValue:n,absSumInSeriesValue:G,avgInSeriesValue:P,visualProperties:b,chartType:h,conditionalStyling:b.conditionalStyling,fieldInfo:e[0].fieldInfo,decimals:a.value&&a.value.decimals,hasNegativeValues:Q,
fill:c.fill,stroke:0<c.stroke.width?c.stroke.color:void 0,chartContainer:d.chartContainer,viewModel:C,theme:d.theme,themeSettings:B,dataDrillingPanelInfo:d.dataDrillingPanelInfo,pointName:a.label,seriesName:m.label,areaName:null,featureIndex:D,isComparisonPoint:!1,comparisonFeatureAttribute:null});c.tooltip=a;F.data.push(c)});E.push(F);return E}}});