// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/attachments/DefaultAttachmentsStore",["dojo/_base/declare","esri/dijit/geoenrichment/promise/all","esri/dijit/geoenrichment/when","./WebMapAttachmentStore"],function(d,e,f,g){return d(null,{supportsMultipleAreas:!0,_analysisAreas:null,_currentAreaIndex:-1,_webMapStores:null,constructor:function(b){this._analysisAreas=b},initialize:function(){var b=this;this._webMapStores={};return e(this._analysisAreas.map(function(a,c){if(a=
a.feature||a.location||a.additionalFeatures&&a.additionalFeatures[0])return(b._webMapStores[c]=new g(a)).initialize()})).then(function(){return b})},_callStoreMethod:function(b){var a=this._webMapStores[this._currentAreaIndex];return a?f(a[b](),function(c){return c?c.slice():[]}):[]},getImages:function(){return this._callStoreMethod("getImages")},getAttributes:function(){return this._callStoreMethod("getAttributes")},getNotes:function(){return this._callStoreMethod("getNotes")},setCurrentAnalysisAreaIndex:function(b){this._currentAreaIndex=
b}})});