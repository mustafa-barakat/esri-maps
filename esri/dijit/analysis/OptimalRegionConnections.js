// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/OptimalRegionConnections.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_optimalRegionConnectionsToolContentTitle" class\x3d"analysisTitle"\x3e\r\n      \x3ctable class\x3d"esriFormTable"\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"esriToolIconTd"\x3e\r\n            \x3cdiv class\x3d"optimalRegionConnectionsIcon"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.optimalRegionConnections}\x3c/label\x3e\r\n            \x3cnav class\x3d"breadcrumbs" data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n              \x3ca href\x3d"#" class\x3d"crumb" style\x3d"font-size:12px;" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n              \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.optimalRegionConnections}\x3c/a\x3e\r\n            \x3c/nav\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\r\n            \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n              \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n    \x3ctable class\x3d"esriFormTable"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.inputRegionRasterOrFeatures}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputRegionRasterOrFeatures"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriAnalysisSelect esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-props\x3d"required:true"\r\n              data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n              \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/components/AddPointFeatures/AddPointFeatures" data-dojo-attach-point\x3d"_sourceDrawBtn"\r\n                class\x3d"right esriActionButton" data-dojo-props\x3d"iconUrl:\'http://static.arcgis.com/images/Symbols/Basic/GreenStickpin.png\', layerName:\'${i18n.drawSourcePointLayerName}\', label:\'${i18n.drawLabel}\'"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.inputBarrierRasterOrFeatures}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputBarrierRasterOrFeatures"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriAnalysisSelect esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_inputBarrierRasterOrFeaturesSelect" data-dojo-attach-event\x3d"onChange:_handleInputBarrierRasterOrFeaturesChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.inputCostRaster}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputCostRaster"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriAnalysisSelect esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_inputCostRasterSelect" data-dojo-attach-event\x3d"onChange:_handleInputCostRasterChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.distanceMethod}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"distanceMethod"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriAnalysisSelect esriLongLabel" data-dojo-type\x3d"dijit/form/Select"\r\n            data-dojo-attach-point\x3d"_distanceMethodSelect"\x3e\r\n              \x3coption value\x3d"PLANAR" selected\x3e${i18n.planar}\x3c/option\x3e\r\n              \x3coption value\x3d"GEODESIC"\x3e${i18n.geoDesic}\x3c/option\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fiveLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.connectionsWithinRegions}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"connectionsWithinRegions"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriAnalysisSelect esriLongLabel" data-dojo-type\x3d"dijit/form/Select"\r\n              data-dojo-attach-point\x3d"_connectionsWithinRegionsSelect"\x3e\r\n              \x3coption value\x3d"GENERATE_CONNECTIONS" selected\x3e${i18n.generateConnections}\x3c/option\x3e\r\n              \x3coption value\x3d"NO_CONNECTIONS" selected\x3e${i18n.noConnections}\x3c/option\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.sixLabel}\x3c/label\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"outputOptimalLinesName"\x3e\x3c/a\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputOptimalLinesName}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true,required:true" class\x3d"esriOutputText esriLeadingMargin1"\r\n              data-dojo-attach-point\x3d"_outputLayerInput"\x3e\x3c/input\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.sevenLabel}\x3c/label\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"outputNeighborConnectionsName"\x3e\x3c/a\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputNeighborConnectionsName}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true" class\x3d"esriOutputText esriLeadingMargin1"\r\n              data-dojo-attach-point\x3d"_outputNeighborConnectionsNameInput"\x3e\x3c/input\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\r\n              \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n              \x3cinput class\x3d"longInput" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true"\r\n                style\x3d"width:60%;"\x3e\x3c/input\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n    \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n      \x3ca class\x3d"esriFloatTrailing esriSmallFont" href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink"\x3e${i18n.showCredits}\x3c/a\x3e\r\n      \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n        \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true"\r\n          name\x3d"extent" value\x3d"true" /\x3e ${i18n.useMapExtent}\r\n      \x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton"\r\n      data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n      ${i18n.runAnalysis}\r\n    \x3c/button\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator" data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/OptimalRegionConnections","../../kernel ./AnalysisRegistry ./RasterAnalysisMixin ./utils ./ItemTypes dijit/_FocusMixin dijit/_OnDijitClickMixin dijit/_TemplatedMixin dijit/_WidgetBase dijit/_WidgetsInTemplateMixin dijit/layout/ContentPane dijit/form/Form dijit/form/Select esri/dijit/analysis/components/AddPointFeatures/AddPointFeatures dijit/form/ValidationTextBox dijit/form/FilteringSelect dijit/form/CheckBox dijit/form/Button dijit/Dialog esri/dijit/analysis/CreditEstimator dojo/_base/array dojo/_base/declare dojo/_base/json dojo/_base/lang dojo/has dojo/i18n!./nls/OptimalRegionConnections dojo/text!./templates/OptimalRegionConnections.html".split(" "),
function(m,c,g,d,h,n,p,q,r,t,y,z,A,B,C,D,E,F,G,H,e,u,k,f,v,w,x){g=u([r,q,t,p,n,g],{declaredClass:"esri.dijit.analysis.OptimalRegionConnections",templateString:x,widgetsInTemplate:!0,analysisType:"feature",browseType:[h.IS,h.FS],checkGeometries:[c.GeometryTypes.Point,c.GeometryTypes.MultiPoint,c.GeometryTypes.Line],tags:["point","line"],map:null,drawSourcePointLayerName:"",toolName:"OptimalRegionConnections",helpFileName:"OptimalRegionConnections",toolNlsName:w,rasterGPToolName:"OptimalRegionConnections",
outputName:"outputOptimalLinesName",resultParameter:["outputOptimalLinesFeatures","outputNeighborConnectionsFeatures"],secondaryOutputs:["outputNeighborConnectionsFeatures"],secondaryOutputNames:["outputNeighborConnectionsName"],constructor:function(a,b){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode)},_removePointLayer:function(){this.sourcePointLayer&&this._removeLayer(this.sourcePointLayer,this.inputLayers,this._analysisSelect);this._sourceDrawBtn.deactivate()},_getJobParameters:function(){var a=
d.constructAnalysisInputLyrObj(this.get("inputLayer"));this.inputLayer.drawnLayer&&(a.drawnLayer=this.inputLayer.drawnLayer);a={inputRegionRasterOrFeatures:k.toJson(a),distanceMethod:this.get("distanceMethod"),connectionsWithinRegions:this.get("connectionsWithinRegions")};if(this.get("inputBarrierRasterOrFeatures")){var b=k.toJson(d.constructAnalysisInputLyrObj(this.get("inputBarrierRasterOrFeatures")));a.inputBarrierRasterOrFeatures=b}this.get("inputCostRaster")&&(b=k.toJson(d.constructAnalysisInputLyrObj(this.get("inputCostRaster"))),
a.inputCostRaster=b);return a},_setDefaultInputs:function(){this.inputCostRaster&&this.inputCostRasters&&!d.isLayerInLayers(this.inputCostRaster,this.inputCostRasters)&&this.inputCostRasters.push(this.inputCostRaster);this.inputBarrierRasterOrFeatures&&this.inputBarriers&&!d.isLayerInLayers(this.inputBarrierRasterOrFeatures,this.inputBarriers)&&this.inputBarriers.push(this.inputBarrierRasterOrFeatures);this._addBarrierLayerOptions();this._addInputCostRasterLayerOptions();this._outputLayerInput.set("value",
this.outputOptimalLinesName&&this.outputOptimalLinesName.serviceProperties.name);this.set("distanceMethod",this.distanceMethod);this.set("connectionsWithinRegions",this.connectionsWithinRegions);this.drawSourcePointLayerName||(this.drawSourcePointLayerName=this.i18n.drawSourcePointLayerName);this.inputLayer&&this.inputLayer.drawnLayer&&(this._sourceDrawBtn.set("pointFeatureLayer",this.inputLayer),this.sourcePointLayer=this.inputLayer);this._sourceDrawBtn.set("map",this.map);this._sourceDrawBtn.on("change",
f.hitch(this,this._handleSourceDrawLayer))},_setDefaultInputCostRaster:function(){this.inputCostRaster||(this.inputCostRaster=this.inputCostRasters[0])},_handleSourceDrawLayer:function(a){this._clearSelectedPointSelectLayer(!0);this.inputLayers&&0!==this.inputLayers.length&&-1!==this.inputLayers.indexOf(a)||(this.sourcePointLayer=a,this.inputLayers.push(a),this.inputLayer=a,this._analysisSelect.removeOption(this._analysisSelect.getOptions()),d.populateAnalysisLayers(this,"inputLayer","inputLayers"),
d.addReadyToUseLayerOption(this,[{disableLAAL:!0,select:this._analysisSelect}]))},_clearSelectedPointSelectLayer:function(a){!a&&this.sourcePointLayer&&this._sourceDrawBtn.reset()},_addInputCostRasterLayerOptions:function(){var a=[{label:" ",value:""}];this._inputCostRasterSelect.removeOption(this._inputCostRasterSelect.getOptions());e.forEach(this.inputCostRasters,f.hitch(this,function(b,l){this._isSelected(this.inputCostRaster,this.inputLayer)||a.push({label:b.name,value:l.toString(),selected:this._isSelected(b,
this.inputCostRaster)})}));this._inputCostRasterSelect.addOption(a);d.addReadyToUseLayerOption(this,[{disableLAAL:!0,select:this._inputCostRasterSelect}]);this._handleInputCostRasterChange(this._inputCostRasterSelect.get("value"))},_handleInputCostRasterChange:function(a){"browselayers"===a||"browse"===a?(this._isAnalysisSelect=!1,this._isCostRasterSelect=!0,this.defaultItemTypes=[],this.set("allowedItemTypes",[h.IS]),this._createBrowseItems({browseValue:a,disableLAAL:!0,disableBoundary:!0,disabledSubResources:[this.inputCostRaster]},
{},this._inputCostRasterSelect)):0<=a&&this.set("inputCostRaster",this.inputCostRasters[a])},_handleInputBarrierRasterOrFeaturesChange:function(a){"browselayers"===a||"browse"===a?(this._isCostRasterSelect=this._isAnalysisSelect=!1,this.defaultItemTypes=[],this.set("allowedItemTypes",this.browseType),this._createBrowseItems({browseValue:a,disableLAAL:!0,disableBoundary:!0,disabledSubResources:[this.inputLayer,this.inputBarrierRasterOrFeatures]},{geometryTypes:this.checkGeometries,tags:this.tags},
this._inputBarrierRasterOrFeaturesSelect)):0<=a&&this.set("inputBarrierRasterOrFeatures",this.inputBarriers[a])},_handleBrowseItemsSelect:function(a,b){a&&a.selection&&d.addAnalysisReadyLayer({item:a.selection,layers:this._isAnalysisSelect?this.inputLayers:this._isCostRasterSelect?this.inputCostRasters:this.inputBarriers,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._isCostRasterSelect?this._inputCostRasterSelect:this._inputBarrierRasterOrFeaturesSelect,browseDialog:this._browseLyrsdlg||
this._browsedlg,widget:this},b).always(f.hitch(this,function(){this._isAnalysisSelect?this._handleAnalysisLayerChange(this._analysisSelect.get("value")):this._isCostRasterSelect?this._handleInputCostRasterChange(this._inputCostRasterSelect.get("value")):this._handleInputBarrierRasterOrFeaturesChange(this._inputBarrierRasterOrFeaturesSelect.get("value"))}))},addBrowseOption:function(){d.addReadyToUseLayerOption(this,[{disableLAAL:!0,select:this._inputCostRasterSelect},this._inputBarrierRasterOrFeaturesSelect])},
_isSelected:function(a,b){return b&&a&&b.url===a.url&&a.name===b.name},_addBarrierLayerOptions:function(){var a=[{label:" ",value:""}];this._inputBarrierRasterOrFeaturesSelect.removeOption(this._inputBarrierRasterOrFeaturesSelect.getOptions());e.forEach(this.inputBarriers,f.hitch(this,function(b,l){a.push({label:b.name,value:l.toString(),selected:this._isSelected(b,this.inputBarrierRasterOrFeatures)})}));this._inputBarrierRasterOrFeaturesSelect.addOption(a);d.addReadyToUseLayerOption(this,[{select:this._inputBarrierRasterOrFeaturesSelect}])},
_handleDistanceMethodChange:function(a){this.distanceMethod=a},_setInputLayerAttr:function(a){this.inputLayer=a},_getInputLayerAttr:function(){return this.inputLayer},_setInputBarrierRasterOrFeaturesAttr:function(a){a&&(a.geometryType===c.GeometryTypes.Point||a.geometryType===c.GeometryTypes.Line||a.geometryType===c.GeometryTypes.Polygon||this.isImageServiceLayer(a))&&(this.inputBarrierRasterOrFeatures=a)},_getInputBarrierRasterOrFeaturesAttr:function(){return this.inputBarrierRasterOrFeatures},_setInputLayersAttr:function(a){this.inputLayers=
e.filter(a,function(b){return b.geometryType===c.GeometryTypes.Point||b.geometryType===c.GeometryTypes.Line||b.geometryType===c.GeometryTypes.Polygon||this.isImageServiceLayer(b)},this);this.set("inputCostRasters",a);this.set("inputBarriers",a)},_getInputLayersAttr:function(a){return this.inputLayers},_setInputCostRasterAttr:function(a){this.isImageServiceLayer(a)&&(this.inputCostRaster=a)},_getInputCostRasterAttr:function(){return this.inputCostRaster},setInputBarriersAttr:function(a){this.inputBarriers=
e.filter(a,function(b){return b&&(b.geometryType===c.GeometryTypes.Point||b.geometryType===c.GeometryTypes.Line||b.geometryType===c.GeometryTypes.Polygon||this.isImageServiceLayer(b))},this)},_getInputBarriersAttr:function(a){return this.inputBarriers},_getInputCostRastersAttr:function(){return this.inputCostRasters},_setInputCostRastersAttr:function(a){this.inputCostRasters=e.filter(a,function(b){return this.isImageServiceLayer(b)},this)},_setOutputNeighborConnectionsNameAttr:function(a){this.outputNeighborConnectionsName=
a},_getOutputNeighborConnectionsNameAttr:function(){return this._outputNeighborConnectionsNameInput.get("value")},_setDrawSourcePointLayerNameAttr:function(a){this.drawSourcePointLayerName=a},_getDrawSourcePointLayerNameAttr:function(){return this.drawSourcePointLayerName},_getDistanceMethodAttr:function(){return this._distanceMethodSelect.get("value")},_setDistanceMethodAttr:function(a){this.distanceMethod=a;this._distanceMethodSelect&&this._distanceMethodSelect.set("value",a)},_getConnectionsWithinRegionsAttr:function(){return this._connectionsWithinRegionsSelect.get("value")},
_setConnectionsWithinRegionsAttr:function(a){this.connectionsWithinRegions=a;this._connectionsWithinRegionsSelect&&this._connectionsWithinRegionsSelect.set("value",a)}});v("extend-esri")&&f.setObject("dijit.analysis.OptimalRegionConnections",g,m);return g});