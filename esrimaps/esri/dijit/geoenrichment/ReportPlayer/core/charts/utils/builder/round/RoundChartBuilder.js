// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/builder/round/RoundChartBuilder","dojo/_base/declare dojo/_base/lang ../../ChartTypes ../../ChartDataLabelsTypes ../../plots/Pie ../../plots/Donut ../../plots/Gauge ../../plots/Ring ../../plots/_TouchPlotEvents ../ChartPlots ./_RoundChartSeriesCalculator ./_GaugeChartSeriesCalculator ../utils/ChartDataLabelBuilder".split(" "),function(g,h,c,e,k,l,m,n,p,q,r,t,u){return{configureChart:function(a){a.chart.addPlot(q.PRIMARY,this._createPlot(a.visualProperties,
a.themeSettings,a.viewModel,a.chartType))},_createPlot:function(a,d,v,f){d=e.hasLabel(a.dataLabels);var w=e.hasValue(a.dataLabels),x=e.hasPercent(a.dataLabels);d=(d||w||x)&&f!==c.GAUGE?{labelStyle:a.dataLabelsStackedInColumns?"columns":a.dataLabelsInside?"inside":"outside",omitLabels:!a.dataLabelsStackedInColumns,labelFunc:function(y){return u.formatDataLabel(y,a)}}:{labels:!1};switch(f){case c.PIE:var b=k;break;case c.DONUT:b=l;break;case c.GAUGE:b=m;break;case c.RING:b=n}if(!b)return null;b=g([b,
p]);return h.mixin({type:b,animate:v.isAnimationAllowed()},d)},calcSeries:function(a){switch(a.chartType){case c.GAUGE:return t.calcSeries(a);default:return r.calcSeries(a)}}}});