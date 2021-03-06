// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/builder/ChartBuilder",["esri/dijit/geoenrichment/ReportPlayer/config","../ChartTypes","./waffle/WaffleChartBuilder","./round/RoundChartBuilder","./columnBarLine/ColumnBarLineChartBuilder"],function(c,b,d,e,f){return{getChartBuilder:function(a){return a===b.WAFFLE?d:a===b.PIE||a===b.DONUT||a===b.GAUGE||a===b.RING?e:f},checkSeriesAreValid:function(a){return c.charts.showErrorIfHasUnavailableData?!a.some(function(g){return g.data.some(function(h){return h.isUnavailableData})}):
!0}}});