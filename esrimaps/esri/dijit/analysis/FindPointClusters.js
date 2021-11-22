// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/FindPointClusters.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentTitle" class\x3d"analysisTitle"\x3e\r\n        \x3ctable class\x3d"esriFormTable" \x3e\r\n          \x3ctr\x3e\r\n            \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"findPointClustersIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n            \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n              \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.findPointClusters}\x3c/label\x3e\r\n              \x3cnav class\x3d"breadcrumbs"  data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n                \x3ca href\x3d"#" class\x3d"crumb breadcrumbs__modelabel" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n                \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.findPointClusters}\x3c/a\x3e\r\n              \x3c/nav\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                  \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                  \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                \x3c/div\x3e\r\n              \x3c/div\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/table\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n       \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_aggregateTable"  style\x3d"border-collapse:collapse;border-spacing:5px;" cellpadding\x3d"5px" cellspacing\x3d"5px"\x3e\r\n         \x3ctbody\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\r\n            \x3ctd  colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_aggregateToolDescription"\x3e${i18n.clustersLabel}\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.chooseLayerLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisHelpNode" esriHelpTopic\x3d"analysisLayer"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n            \x3ctd  colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n              \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-props\x3d"required:true" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_clusterMethodLblRow"\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel data-dojo-attach-point\x3d"_labelTwo" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.chooseClusteringMethod}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"clusterMethod"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_clusterMethodSelectRow"\x3e\r\n            \x3ctd colspan\x3d"3" style\x3d"padding-bottom:0.25;padding-top:0.25;"\x3e\r\n              \x3cselect data-dojo-type\x3d"dijit/form/Select"  class\x3d"esriLeadingMargin1 longInput esriLongLabel" data-dojo-attach-event\x3d"onChange:_handleClusterMethodChange" data-dojo-attach-point\x3d"_clusterMethodSelect"\x3e\r\n                \x3coption value\x3d"DBSCAN"\x3e${i18n.dbscanLabel}\x3c/option\x3e\r\n                \x3coption value\x3d"HDBSCAN"\x3e${i18n.hdbscanLabel}\x3c/option\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel data-dojo-attach-point\x3d"_labelTwo" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel" data-dojo-attach-point\x3d"_minClusterPtsLblNode"\x3e${i18n.minClusterPtsLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"minFeaturesCluster"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" style\x3d"padding-bottom:0.25;padding-top:0.25;"\x3e\r\n              \x3cinput data-dojo-type\x3d"dijit/form/NumberSpinner"  class\x3d "esriMediumlabel esriLeadingMargin1"  data-dojo-attach-point\x3d"_maxCountInput" data-dojo-props\x3d"style: \'width:25%\',smallDelta:1,value:2, constraints: { min:2, places:0 }, required:true"\x3e\r\n                \x3clabel\x3e${i18n.points}\x3c/label\x3e\r\n              \x3c/input\x3e\r\n            \x3c/td\x3e\r\n            \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel data-dojo-attach-point\x3d"_labelThree" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel" data-dojo-attach-point\x3d"_forLocationLabel"\x3e${i18n.limitSearchLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_addStatsHelpLink" esriHelpTopic\x3d"searchDistance"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n         \x3ctr\x3e\r\n            \x3ctd style\x3d"padding-right:0;padding-top:0;width:30%;"\x3e\r\n              \x3cinput type\x3d"text" class\x3d"esriLeadingMargin1" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-attach-event\x3d"onChange:_handleDistValueChange" data-dojo-props\x3d"intermediateChanges:true,invalidMessage:\'${i18n.distanceMsg}\',constraints:{min:0.000001}" data-dojo-attach-point\x3d"_searchCutoffInput" class\x3d"esriLeadingMargin1"  style\x3d"width:60%;"\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-left:0.25em;padding-top:0;width:60%;"\x3e\r\n              \x3cselect class\x3d"mediumInput esriMediumlabel esriAnalysisSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"onChange:_handleUnitsChange" data-dojo-attach-point\x3d"_distanceUnitsSelect" style\x3d"width:65%;table-layout:fixed;"\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_useTimeCheckRow"\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3clabel class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_useSearchTimeChkLabel"\x3e\r\n                \x3cinput data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"_useSearchTimeChk" data-dojo-props\x3d"checked:false" data-dojo-attach-event\x3d"onChange:_handeUseSearchTimeChkChange"\x3e\x3c/input\x3e\r\n                ${i18n.useTimeToFindCLusters}\r\n              \x3c/label\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n         \x3ctr data-dojo-attach-point\x3d"_searchDurLabelRow"\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3clabel class\x3d"esriLeadingMargin1"\x3e\r\n                ${i18n.limitSearchDurLabel}\r\n              \x3c/label\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_searchDurRow"\x3e\r\n            \x3ctd style\x3d"padding-right:0;padding-bottom:0;width:50%;"\x3e\r\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"constraints:{min:1,places:0},intermediateChanges:true,invalidMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_searchDurValue" class\x3d"esriLeadingMargin1"  style\x3d"width:60%;"/\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-left:0.25em;padding-bottom:0;width:50%;"\x3e\r\n              \x3cselect class\x3d"mediumInput esriAnalysisSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_searchDurUnits" style\x3d"width:65%;table-layout:fixed;"\x3e\r\n                \x3coption value\x3d"Seconds"\x3e${i18n.seconds}\x3c/option\x3e\r\n                \x3coption value\x3d"Minutes"\x3e${i18n.minutes}\x3c/option\x3e\r\n                \x3coption value\x3d"Hours"\x3e${i18n.hours}\x3c/option\x3e\r\n                \x3coption value\x3d"Days"\x3e${i18n.days}\x3c/option\x3e\r\n                \x3coption value\x3d"Weeks"\x3e${i18n.weeks}\x3c/option\x3e\r\n                \x3coption value\x3d"Months"\x3e${i18n.months}\x3c/option\x3e\r\n                \x3coption value\x3d"Years"\x3e${i18n.years}\x3c/option\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel data-dojo-attach-point\x3d"_labelFour" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel" data-dojo-attach-point\x3d"_outputNumberLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"longTextInput esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"outputName"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"esriLeadingMargin1 esriOutputText"  data-dojo-props\x3d"trim:true,required:true" data-dojo-attach-point\x3d"_outputLayerInput" value\x3d""\x3e\x3c/input\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n               \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\r\n                 \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n                 \x3cinput class\x3d"longInput esriFolderSelect" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true"\x3e\x3c/input\x3e\r\n               \x3c/div\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/tbody\x3e\r\n       \x3c/table\x3e\r\n     \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n      \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink"\x3e${i18n.showCredits}\x3c/a\x3e\r\n       \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n           ${i18n.useMapExtent}\r\n       \x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"esriFormWarning esriRoundedBox" data-dojo-attach-point\x3d"_errorMessagePane" style\x3d"display:none;"\x3e\r\n        \x3ca href\x3d"#" title\x3d"${i18n.close}" class\x3d"esriFloatTrailing esriAnalysisCloseIcon" title\x3d\'${i18n.close}\' data-dojo-attach-event\x3d"onclick:_handleCloseMsg"\x3e\x3c/a\x3e\r\n        \x3cspan data-dojo-attach-point\x3d"_bodyNode"\x3e\x3c/span\x3e\r\n      \x3c/div\x3e\r\n      \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n          ${i18n.runAnalysis}\r\n      \x3c/button\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/FindPointClusters","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/number dojo/_base/fx dojo/fx/easing dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect dijit/form/NumberSpinner dijit/form/NumberTextBox ../../kernel ../../lang ./AnalysisBase ./_AnalysisOptions ./AnalysisRegistry ./CreditEstimator ./utils dojo/i18n!../../nls/jsapi dojo/i18n!./nls/FindPointClusters dojo/text!./templates/FindPointClusters.html".split(" "),
function(l,u,d,p,q,h,v,I,k,g,f,J,K,m,L,r,t,w,x,y,z,A,M,N,O,P,Q,R,S,T,U,V,W,B,X,C,D,n,Y,e,E,F,G){l=u([w,x,y,z,A,D,C],{declaredClass:"esri.dijit.analysis.FindPointClusters",templateString:G,widgetsInTemplate:!0,analysisLayer:null,outputLayerName:null,searchDistance:null,searchDistanceUnit:"Miles",minFeaturesCluster:null,returnFeatureCollection:!1,enableTravelModes:!0,i18n:null,toolName:"FindPointClusters",helpFileName:"FindPointClusters",resultParameter:"pointClustersResultLayer",_timeObj:null,constructor:function(a){this._pbConnects=
[];a.containerNode&&(this.container=a.containerNode);a.showGeoAnalyticsParams&&a.rerun&&(a.analysisLayer=a.inputLayer)},destroy:function(){this.inherited(arguments);p.forEach(this._pbConnects,q.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);d.mixin(this.i18n,E.findPointClustersTool);d.mixin(this.i18n,F)},postCreate:function(){this.inherited(arguments);m.add(this._form.domNode,"esriSimpleForm");this._outputLayerInput.set("validator",d.hitch(this,this.validateServiceName));
this.filterObjects=[{layer:"inputLayer",layers:this.analysisLayers,select:this._analysisSelect,expressionObj:"attributeExprObj"}];this._buildUI()},startup:function(){},_onClose:function(a){a&&(this._save(),this.emit("save",{save:!0}));this.showGeoAnalyticsParams&&(this._hasPCSWarnShown=!1);this.emit("close",{save:a})},_buildJobParams:function(){var a={},b=this.get("searchDistance");var c=h.toJson(this.constructAnalysisInputLyrObj(this.analysisLayer,this.showGeoAnalyticsParams));this.showGeoAnalyticsParams?
a.inputLayer=c:a.analysisLayer=c;a.minFeaturesCluster=this.get("minFeaturesCluster");this.showGeoAnalyticsParams?(a.clusterMethod=this._clusterMethodSelect.get("value"),"HDBSCAN"!==a.clusterMethod&&(a.searchDistance=b,a.searchDistanceUnit=this.get("searchDistanceUnit"),this._useSearchTimeChk.get("checked")&&this._searchDurValue.get("value")&&this._searchDurUnits.get("value")&&(a.timeMethod="Linear",a.searchDuration=this._searchDurValue.get("value"),a.searchDurationUnit=this._searchDurUnits.get("value")))):
b&&(a.searchDistance=b,a.searchDistanceUnit=this.get("searchDistanceUnit"));this.returnFeatureCollection||(a.OutputName=h.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=h.toJson({extent:this.map.extent._normalize(!0)}));this.returnFeatureCollection&&(c={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(c.extent=this.map.extent._normalize(!0)),a.context=h.toJson(c));
return this._updateJobFilterAndSelection(a)},_handleShowCreditsClick:function(a){a.preventDefault();this._form.validate()&&this.getCreditsEstimate(this.toolName,this._buildJobParams()).then(d.hitch(this,function(b){this._usageForm.set("content",b);this._usageDialog.show()}))},_handleSaveBtnClick:function(){if(this._form.validate()){this._saveBtn.set("disabled",!0);var a={};a.itemParams={description:k.substitute(this.i18n.itemDescription,{inputLayerName:this.analysisLayer.name}),tags:k.substitute(this.i18n.itemTags,
{inputLayerName:this.analysisLayer.name}),snippet:this.i18n.itemSnippet};a.jobParams=this._buildJobParams();if(this.showGeoAnalyticsParams){this.resultParameter="output";a.isSpatioTemporalDataStore=!0;var b=e.checkPCSforAnalysis({widget:this,jobParams:a.jobParams,hasPCSWarnShown:this._hasPCSWarnShown});if(!b&&!this._hasPCSWarnShown){this._hasPCSWarnShown=!0;return}}this.showSelectFolder&&(a.itemParams.folder=this.get("folderId"));this.execute(a)}},_handleDistValueChange:function(a){},_handleUnitsChange:function(a){},
_handeUseSearchTimeChkChange:function(a){e.updateDisplay([this._searchDurLabelRow,this._searchDurRow],a,"table-row");this._searchDurValue.set("required",a);this._searchDurUnits.set("required",a)},_disableTimeDurationUX:function(a){this._useSearchTimeChk.reset();this._useSearchTimeChk.set("disabled",a);m.toggle(this._useSearchTimeChkLabel,"esriAnalysisTextDisabled",a)},_showMessages:function(a){f.set(this._bodyNode,"innerHTML",a);r.fadeIn({node:this._errorMessagePane,easing:t.quadIn,onEnd:d.hitch(this,
function(){g.set(this._errorMessagePane,{display:""})})}).play()},_handleCloseMsg:function(a){a&&a.preventDefault();r.fadeOut({node:this._errorMessagePane,easing:t.quadOut,onEnd:d.hitch(this,function(){g.set(this._errorMessagePane,{display:"none"})})}).play()},_save:function(){},_buildUI:function(){var a=!0;g.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none");this.signInPromise.then(d.hitch(this,e.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer}));
this._bigdataUX=[this._clusterMethodLblRow,this._clusterMethodSelectRow,this._useTimeCheckRow,this._searchDurLabelRow,this._searchDurRow];e.updateDisplay(this._bigdataUX,this.get("showGeoAnalyticsParams"),"table-row");this._loadConnections();var b=[{value:"Miles",label:this.i18n.miles},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters}];this.clusterMethod&&this._clusterMethodSelect.set("value",this.clusterMethod);
if(this.showGeoAnalyticsParams){f.set(this._forLocationLabel,"innerHTML",this.i18n.limitSearchReqLabel);f.set(this._minClusterPtsLblNode,"innerHTML",this.i18n.minClustersPtsGAXLbl);this._searchCutoffInput.set("required",!0);f.set(this._analysisHelpNode,"esriHelpTopic","inputLayer");b=[{value:"NauticalMiles",label:this.i18n.nautMiles},{value:"Miles",label:this.i18n.miles},{value:"Yards",label:this.i18n.yards},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},
{value:"Meters",label:this.i18n.meters}];var c=!!this.timeMethod&&!!this.searchDuration&&!!this.searchDurationUnit;a=!c;this._useSearchTimeChk.set("checked",c);this._handeUseSearchTimeChkChange(c);c&&(this._searchDurValue.set("value",this.searchDuration),this._searchDurUnits.set("value",this.searchDurationUnit))}this._distanceUnitsSelect.addOption(b);this.get("showSelectAnalysisLayer")&&(this.analysisLayers&&this.analysisLayer&&!e.isLayerInLayers(this.analysisLayer,this.analysisLayers)&&this.analysisLayers.push(this.analysisLayer),
this.get("analysisLayer")||!this.get("analysisLayers")||this.rerun||this.set("analysisLayer",this.analysisLayers[0]),e.populateAnalysisLayers(this,"analysisLayer","analysisLayers"));this.showGeoAnalyticsParams||(f.set(this._labelTwo,"innerHTML",this.i18n.twoLabel),f.set(this._labelThree,"innerHTML",this.i18n.threeLabel),f.set(this._labelFour,"innerHTML",this.i18n.fourLabel));this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),a=!1);this.searchDistanceUnit&&this._distanceUnitsSelect.set("value",
this.searchDistanceUnit);this.searchDistance&&this._searchCutoffInput.set("value",this.searchDistance);this.minFeaturesCluster&&this._maxCountInput.set("value",this.minFeaturesCluster);this.analysisLayer&&this._updateAnalysisLayerUI(a);e.addReadyToUseLayerOption(this,[this._analysisSelect]);g.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&this.getFolderStore().then(d.hitch(this,function(H){this.folderStore=H;e.setupFoldersUI({folderStore:this.folderStore,
folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}));g.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none");this._createFilterAndSelections()},_updateAnalysisLayerUI:function(a){this.analysisLayer&&(f.set(this._aggregateToolDescription,"innerHTML",k.substitute(this.i18n.clustersLabel,{inputLayerName:this.analysisLayer.name})),a||!this.outputLayerName)&&(this.outputLayerName=
k.substitute(this.i18n.outputLayerName,{inputLayerName:this.analysisLayer.name}),this._outputLayerInput.set("value",this.outputLayerName),this._disableTimeDurationUX(!e.isTimeInstantLayer(this.analysisLayer)))},_handleAnalysisLayerChange:function(a){"browse"===a||"browselayers"===a?this._createBrowseItems({browseValue:a},{tags:["point"],geometryTypes:[n.GeometryTypes.Point]},this._analysisSelect):(this.analysisLayer=this.analysisLayers[a],this._updateAnalysisLayerUI(!0))},_handleBrowseItemsSelect:function(a,
b){a&&a.selection&&e.addAnalysisReadyLayer({item:a.selection,layers:this.analysisLayers,layersSelect:this._analysisSelect,browseDialog:a.dialog||this._browsedlg,widget:this},b).always(d.hitch(this,function(c){this._handleAnalysisLayerChange(this._analysisSelect.get("value"))}))},_handleClusterMethodChange:function(a){a="HDBSCAN"===a;this._searchCutoffInput.set("disabled",a);this._distanceUnitsSelect.set("disabled",a);m.toggle(this._forLocationLabel,"esriAnalysisTextDisabled",a);this.showGeoAnalyticsParams&&
this._disableTimeDurationUX(a)},_loadConnections:function(){this.on("start",d.hitch(this,"_onClose",!0));this._connect(this._closeBtn,"onclick",d.hitch(this,"_onClose",!1))},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setAnalysisLayerAttr:function(a){this.analysisLayer=a&&a.geometryType===n.GeometryTypes.Point?a:null},_getAnalysisLayerAttr:function(a){return this.analysisLayer},_setAnalysisLayersAttr:function(a){this.analysisLayers=
p.filter(a,function(b){return b.geometryType===n.GeometryTypes.Point})},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},_setSearchDistanceUnitAttr:function(a){this.searchDistanceUnit=a},_getSearchDistanceUnitAttr:function(){return this.searchDistanceUnit=this._distanceUnitsSelect.get("value")},_getSearchDistanceAttr:function(){return this.searchDistance=this._searchCutoffInput.get("value")},_setSearchDistanceAttr:function(a){this.searchDistance=a},_getMinFeaturesClusterAttr:function(){return this.minFeaturesCluster=
this._maxCountInput.get("value")},_setMinFeaturesClusterAttr:function(a){this.minFeaturesCluster=a},_connect:function(a,b,c){this._pbConnects.push(q.connect(a,b,c))},validateServiceName:function(a){return e.validateServiceName(a,{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})}});v("extend-esri")&&d.setObject("dijit.analysis.FindPointClusters",l,B);return l});