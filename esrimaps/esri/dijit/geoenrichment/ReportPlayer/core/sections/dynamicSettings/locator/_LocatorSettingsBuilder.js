// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/sections/dynamicSettings/locator/_LocatorSettingsBuilder",["dojo/aspect","esri/dijit/geoenrichment/when","../../../infographics/InfographicTypes"],function(g,c,h){return{provideLocatorSettings:function(k){var b=k.getInfographic();return b&&b.getType()===h.LOCATOR_TABLE?c(b.getContentInitPromise(),function(){var a=b.getInnerInfographic();return c(a.getFilterRanges(),function(d){return c(a.getSummaryInfos(),function(e){var l=a.canExportToExcel(),m=
e&&e.length,n=d&&d.length&&a.getNumPointsTotal(),f={hasTitle:a.hasTitle(),exportSettings:l&&{canExportToExcel:!0,exportToExcel:function(){return a.exportToExcel()}},viewSettings:m&&{summaryInfos:e},filter:n&&{filterRanges:d,getNumPointsTotal:function(){return a.getNumPointsTotal()},getNumPointsShown:function(){return a.getNumPointsShown()},onContentUpdated:function(){}}};g.after(a,"onContentUpdated",function(){f.filter.onContentUpdated()});return f})})}):null}}});