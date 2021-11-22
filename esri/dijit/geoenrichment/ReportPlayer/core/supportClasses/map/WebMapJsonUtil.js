// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/map/WebMapJsonUtil",[],function(){return{processWebMapJson:function(f,c){function d(a,b,g){a=a.featureCollection.layers[0].featureSet.features[0];a.attributes=a.attributes||{};a.attributes[b]=g}var e=JSON.parse(c);e.operationalLayers.forEach(function(a){var b=a.featureCollection&&a.featureCollection.layers&&1===a.featureCollection.layers.length?a.featureCollection.layers[0].id:void 0;"string"===typeof b&&0===b.indexOf("SiteLayer")?
(a.isSiteLayer=!0,(b=0===b.indexOf("SiteLayer.")?b.replace("SiteLayer.",""):void 0)&&d(a,"STORE_ID",b)):"string"===typeof b&&0===b.indexOf("StudyAreasLayer.")?(a.isSiteLayer=!0,d(a,"AREA_ID",b.replace("StudyAreasLayer.",""))):"string"===typeof b&&0===b.indexOf("LocatorResultsLayer.")?(a.isLocatorLayer=!0,a.calculatorName=b.replace("LocatorResultsLayer.","")):"string"===typeof b&&0===b.indexOf("ComparisonResultsLayer.")?(a.isComparisonLayer=!0,a.calculatorName=b.replace("ComparisonResultsLayer.","")):
a.isOtherLayer=!0});return{fileName:f,originalString:c,webMapJson:e}}}});