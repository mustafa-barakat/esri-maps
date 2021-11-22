// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/BuildMultiVariableGrid.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentTitle" class\x3d"analysisTitle"\x3e\r\n      \x3ctable class\x3d"esriFormTable" \x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"buildMultiVariableGridIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n          \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.buildMultiVariableGrid}\x3c/label\x3e\r\n            \x3cnav class\x3d"breadcrumbs"  data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n              \x3ca href\x3d"#" class\x3d"crumb breadcrumbs__modelabel" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n              \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.buildMultiVariableGrid}\x3c/a\x3e\r\n            \x3c/nav\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\r\n            \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                  \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                  \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n     \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_aggregateTable"  style\x3d"border-collapse:collapse;border-spacing:5px;" cellpadding\x3d"5px" cellspacing\x3d"5px"\x3e\r\n       \x3ctbody\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow"\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.binsLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"binType"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_sumGeomTypeRow"\x3e\r\n          \x3ctd data-dojo-attach-point\x3d"bufTypeTd" colspan\x3d"3"\x3e\r\n            \x3ctable style\x3d"width:100%"\x3e\r\n              \x3ctr\x3e\r\n                \x3ctd\x3e\r\n                  \x3cdiv class\x3d"bufferSelector selected" data-dojo-attach-point\x3d"_square"\x3e\r\n                    \x3cdiv class\x3d"bufferIcon squareBinIcon"\x3e\x3c/div\x3e\r\n                    \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.square}\x3c/label\x3e\x3c/div\x3e\r\n                  \x3c/div\x3e\r\n                \x3c/td\x3e\r\n                \x3ctd\x3e\r\n                  \x3cdiv class\x3d"bufferSelector" data-dojo-attach-point\x3d"_hexagon"\x3e\r\n                    \x3cdiv class\x3d"bufferIcon  hexagonBinIcon"\x3e\x3c/div\x3e\r\n                    \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.hexagon}\x3c/label\x3e\x3c/div\x3e\r\n                  \x3c/div\x3e\r\n                \x3c/td\x3e\r\n              \x3c/tr\x3e\r\n            \x3c/table\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_chooseBinSizeLblRow"\x3e\r\n          \x3ctd colspan\x3d"3" style\x3d"padding-top:0;padding-bottom:0"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_binSizeLabel"\x3e\x3c/label\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_binsTypeRow"\x3e\r\n         \x3ctd style\x3d"padding-right:0;margin-top:1.0em;width:50%;"\x3e\r\n            \x3cinput type\x3d"text" class\x3d"esriLeadingMargin1" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"required:true,intermediateChanges:true,value:\'5\',required:true,constraints:{min:0.000001},missingMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_binsInput" class\x3d"esriLeadingMargin1"  style\x3d"width:75%;"\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd colspan\x3d"2" style\x3d"padding-left:0.25em;margin-top:1.0em;width:50%;"\x3e\r\n            \x3cselect class\x3d"mediumInput esriAnalysisSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-props\x3d"required:true" data-dojo-attach-point\x3d"_binUnits" style\x3d"width:80%;table-layout:fixed;"\x3e\r\n               \x3coption value\x3d"NauticalMiles"\x3e${i18n.nautMiles}\x3c/option\x3e\r\n               \x3coption value\x3d"Miles"\x3e${i18n.miles}\x3c/option\x3e\r\n               \x3coption value\x3d"Yards"\x3e${i18n.yards}\x3c/option\x3e\r\n               \x3coption value\x3d"Feet"\x3e${i18n.feet}\x3c/option\x3e\r\n               \x3coption type\x3d"separator"\x3e\x3c/option\x3e\r\n               \x3coption value\x3d"Kilometers"\x3e${i18n.kilometers}\x3c/option\x3e\r\n               \x3coption value\x3d"Meters"\x3e${i18n.meters}\x3c/option\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.layersAttrLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_sumLabelHelp" esriHelpTopic\x3d"variableCalculations"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"_gridDiv"\x3e\x3c/div\x3e\r\n            \x3cspan class\x3d"warningIcon hide esriAnalysisDriveMode" data-dojo-attach-point\x3d"_layerListWarningIcon" tabindex\x3d"0"\x3e\x3c/span\x3e  \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv class\x3d"esriLeadingMargin1 btn btn-clear btn-fill" data-dojo-attach-point\x3d"_addProximityAttrBtn" style\x3d"width:80%;"\x3e + \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel" data-dojo-attach-point\x3d"_outputLbl"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_outputHelp" esriHelpTopic\x3d"outputName"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"longInput esriLeadingMargin1" data-dojo-props\x3d"trim:true,required:true" data-dojo-attach-point\x3d"_outputLayerInput" value\x3d""\x3e\x3c/input\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n             \x3cdiv data-dojo-attach-point\x3d"_chooseFolderRow" class\x3d"esriLeadingMargin1"\x3e\r\n               \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n               \x3cinput class\x3d"longInput" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:60%;"\x3e\x3c/input\x3e\r\n             \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n     \x3c/table\x3e\r\n   \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n    \x3cdiv class\x3d"esriFormWarning esriRoundedBox" data-dojo-attach-point\x3d"_errorMessagePane" style\x3d"display:none;"\x3e\r\n      \x3ca href\x3d"#" title\x3d"${i18n.close}" class\x3d"esriFloatTrailing esriAnalysisCloseIcon" data-dojo-attach-event\x3d"onclick:_handleCloseMsg"\x3e\x3c/a\x3e\r\n      \x3cspan data-dojo-attach-point\x3d"_bodyNode"\x3e\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n      \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink"\x3e${i18n.showCredits}\x3c/a\x3e\r\n     \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n       \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n         ${i18n.useMapExtent}\r\n     \x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n        ${i18n.runAnalysis}\r\n    \x3c/button\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/ConfirmDialog" class\x3d"" title\x3d"${i18n.addVariables}" buttonOk\x3d"${i18n.add}" data-dojo-props\x3d"doLayout:false,closable:false" data-dojo-attach-event\x3d"execute:_handleAddVarDlg,onCancel:_handleVarDlgCancel" data-dojo-attach-point\x3d"_attrDialog"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_attrDialogContent" class\x3d"esriMultiVarDialogContent"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n \x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/BuildMultiVariableGrid","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/_base/fx dojo/Deferred dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/Evented dojo/query dojo/dom-class dojo/fx/easing dojo/NodeList dojo/NodeList-dom dojo/on dojo/topic dojo/when dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/ConfirmDialog dijit/Dialog dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect dijit/form/DateTextBox dijit/form/NumberTextBox dijit/form/TimeTextBox dijit/Toolbar dijit/Tooltip dgrid1/OnDemandGrid dgrid1/Editor dgrid1/Keyboard dgrid1/Selection dgrid1/Selector dgrid1/extensions/ColumnResizer dgrid1/extensions/DijitRegistry ../../kernel ../../lang ./AnalysisBase ./_AnalysisOptions ./CreditEstimator ./BuildMultiVariablesList ./utils ./storeUtils dojo/i18n!../../nls/jsapi dojo/i18n!./nls/BuildMultiVariableGrid dojo/text!./templates/BuildMultiVariableGrid.html".split(" "),
function(p,q,c,g,u,r,v,J,K,ia,ja,m,t,L,M,w,f,x,ka,la,y,z,ma,A,N,O,P,Q,na,B,oa,pa,qa,ra,sa,ta,ua,va,wa,xa,ya,za,R,C,S,T,U,V,W,X,Y,D,E,Z,aa,Aa,ba,l,ca,Ba,da,ea){var fa=q([S,U,V,W,T,X,Y]);p=q([A,N,O,P,Q,aa,Z],{declaredClass:"esri.dijit.analysis.BuildMultiVariableGrid",templateString:ea,widgetsInTemplate:!0,outputLayerName:null,i18n:null,toolName:"BuildMultiVariableGrid",helpFileName:"BuildMultiVariableGrid",resultParameter:"output",binType:"square",constructor:function(a){this._pbConnects=[];a.containerNode&&
(this.container=a.containerNode)},destroy:function(){this.inherited(arguments);g.forEach(this._pbConnects,u.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);c.mixin(this.i18n,da)},postCreate:function(){this.inherited(arguments);this._buildUI()},startup:function(){},_save:function(){},_onClose:function(a){a&&(this._save(),this.emit("save",{save:!0}));this.showGeoAnalyticsParams&&(this._hasPCSWarnShown=!1);this.variableCalculations=[];this.usedLayers=[];
this.inputLayers=[];this._gridEditHandle&&(this._gridEditHandle.remove(),this._gridEditHandle=null);this.emit("close",{save:a})},_handleShowCreditsClick:function(a){a.preventDefault();this._form.validate()&&(this._layerVarGrid?this._buildJobParams().then(c.hitch(this,function(b){this.getCreditsEstimate(this.toolName,b&&b.jobParams).then(c.hitch(this,function(d){this._usageForm.set("content",d);this._usageDialog.show()}))})):f.add(this._layerListWarningIcon,"show"))},_buildJobParams:function(){var a=
{},b,d,e,h,F,G,H=new J;this._layerVarGrid.refresh();this.set("variableCalculations",[]);this._layerVarGrid.collection.fetch().then(c.hitch(this,function(ha){this.set("variableCalculations",ha.slice());0===this.variableCalculations.length?f.add(this._layerListWarningIcon,"show"):f.remove(this._layerListWarningIcon,"hide");a.binType=this.binType;a.binSize=this._binsInput.get("value");a.binSizeUnit=this._binUnits.get("value");d=g.map(this.variableCalculations,function(k){return k.layer});e=g.filter(this.inputLayers,
function(k,n){return-1!==g.indexOf(d,n)});h=g.map(e,function(k){return k.name});a.inputLayers=g.map(e,function(k){return this.constructAnalysisInputLyrObj(k,this.showGeoAnalyticsParams)},this);F=g.map(this.variableCalculations,function(k){var n=g.indexOf(h,k.name),I;-1!==n&&(I=n);return{layer:I,variables:k.variables}});a.variableCalculations=r.toJson(F);this.returnFeatureCollection||(a.OutputName=r.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));b={};if(this.showGeoAnalyticsParams||
this.returnFeatureCollection)b.outSR=this.map.spatialReference;this.showChooseExtent&&this._useExtentCheck.get("checked")&&(b.extent=this.map.extent._normalize(!0));a.context=r.toJson(b);if(this.showGeoAnalyticsParams&&a.binType&&(G=l.checkPCSforAnalysis({widget:this,jobParams:a,hasPCSWarnShown:this._hasPCSWarnShown,inputLayers:e}),!G&&!this._hasPCSWarnShown)){this._hasPCSWarnShown=!0;return}H.resolve({jobParams:a})}));return H.promise},_handleSaveBtnClick:function(){this._form.validate()&&(this._layerVarGrid?
(f.remove(this._layerListWarningIcon,"hide"),this._saveBtn.set("disabled",!0),this._buildJobParams().then(c.hitch(this,function(a){var b={};b.jobParams=a&&a.jobParams;this._saveBtn.set("disabled",!1);b.itemParams={description:this.i18n.itemDescription,tags:this.i18n.itemTags,snippet:this.i18n.itemSnippet};this.showSelectFolder&&(b.itemParams.folder=this.get("folderId"));this.showGeoAnalyticsParams&&(b.isSpatioTemporalDataStore=!0);this.execute(b)}))):f.add(this._layerListWarningIcon,"show"))},_buildUI:function(){var a=
!0;f.add(this._form.domNode,"esriSimpleForm");this._attrDialog.set("buttonOk",this.i18n.add);w(".dijitDialogPaneActionBar",this._attrDialog.domNode).forEach(function(b,d){f.add(b,"esriFloatTrailing")},this);w(".dijitButton",this._attrDialog.domNode).forEach(function(b,d){0===d?f.add(b,this.primaryActionButttonClass):f.add(b,"btn calcite")},this);this.signInPromise.then(c.hitch(this,function(b){if(this.portalUrl)var d=this.portalUrl;else this.analysisGpServer&&(b=D.id.findServerInfo(this.analysisGpServer),
E.isDefined(b)&&E.isDefined(b.owningSystemUrl)&&(d=b.owningSystemUrl));if(this.rerun&&this.usedLayers){var e=this.usedLayers.slice();g.forEach(this.inputLayers,function(h){l.isLayerInLayers(h,e)||e.push(h)},this);this.inputLayers=e.slice()}this._attrBuilder=new ba({map:this.map,portalUrl:d,showGeoAnalyticsParams:this.showGeoAnalyticsParams,showReadyToUseLayers:this.showReadyToUseLayers,showBrowseLayers:this.showBrowseLayers,inputLayer:this.inputLayer,inputLayers:this.inputLayers,helpFileName:this.helpFileName,
isSingleTenant:this.isSingleTenant,portalthis:this.portalthis,useArcGISComponents:!0,isBrowseInDialog:!0},L.create("div",null,this._attrDialogContent));this.variableCalculations&&0<this.variableCalculations.length&&(g.forEach(this.variableCalculations,function(h){h.name||(h.name=this.inputLayers[h.layer]&&this.inputLayers[h.layer].name)},this),this._createLayerGrid())}));l.initHelpLinks(this.domNode,this.showHelp);this.get("showSelectAnalysisLayer")&&this.inputLayers&&this.inputLayer&&!l.isLayerInLayers(this.inputLayer,
this.inputLayers)&&this.inputLayers.push(this.inputLayer);this.showGeoAnalyticsParams&&this.distanceDefaultUnits&&this._binUnits.set("value",this.distanceDefaultUnits);this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),a=!1);m.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&this.getFolderStore().then(c.hitch(this,function(b){this.folderStore=b;l.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,
folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}));m.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none");m.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none");this._loadConnections();if(this.showGeoAnalyticsParams){if("hexagon"===this.binType||"square"===this.binType)this.binSize&&this._binsInput.set("value",this.binSize),this.binSizeUnit&&this._binUnits.set("value",this.binSizeUnit),this._handleBinTypeChange(this.binType.toLowerCase(),
!0);this.showGeoAnalyticsParams&&t.set(this._outputHelp,"esriHelpTopic","outputName")}this._updateAnalysisLayerUI(a,!0)},_loadConnections:function(){this.on("start",c.hitch(this,"_onClose",!0));this._connect(this._closeBtn,"onclick",c.hitch(this,"_onClose",!1));this._connect(this._square,"onclick",c.hitch(this,"_handleBinTypeChange","square"));this._connect(this._hexagon,"onclick",c.hitch(this,"_handleBinTypeChange","hexagon"));this._connect(this._addProximityAttrBtn,"onclick",c.hitch(this,this._handleAddProximityAttrBtnClick));
this.own(y(this._layerListWarningIcon,"click",c.hitch(this,function(a){this._displayWarningMessage({display:!0,message:this.i18n.requiredValue,label:this._layerListWarningIcon})})),y(this._layerListWarningIcon,"blur",c.hitch(this,function(a){this._displayWarningMessage({display:!1,label:this._layerListWarningIcon})})))},_createLayerGrid:function(){var a=q([A,M],{value:null,i18n:null,buildRendering:function(){this.inherited(arguments);this._toolbar=new R({"class":"esriFloatTrailing"});var b=new B({iconClass:"esriAnalysisDeleteIcon",
title:this.i18n.remove}),d=new B({iconClass:"esriAnalysisEditIcon",title:this.i18n.edit});this._toolbar.addChild(d);this._toolbar.addChild(b);d.on("click",c.hitch(this,function(){this.grid.collection.get(this.value.id).then(c.hitch(this,function(e){z.publish("multivariablegrid/edit",e)}))}));b.on("click",c.hitch(this,function(){this.grid.collection.remove(this.value.id)}));this.domNode.appendChild(this._toolbar.domNode)},_setValueAttr:function(b){this.value=b},_getValueAttr:function(){return this.value},
destroy:function(){this._toolbar.destroy();this.inherited(arguments)}});this._layerVarGrid=new fa({className:"dgrid-autoheight esriListItemGrid",collection:ca.createStore(this.variableCalculations),showHeader:!1,cellNavigation:!1,selectionMode:"single"},this._gridDiv);this._layerVarGrid.startup();this._layerVarGrid.set("columns",[{field:"name",label:"Name",className:"esriGridCellEllipses"},{label:"Operations",sortable:!1,editor:a,editorArgs:{grid:this._layerVarGrid,i18n:this.i18n}}]);this.own(this._gridEditHandle=
z.subscribe("multivariablegrid/edit",c.hitch(this,this._handleEditLayerClick)))},_handleAnalysisLayerChange:function(a){this._isAnalysisSelect=!0;"browse"===a||"browselayers"===a?this._createBrowseItems({browseValue:a,isDialog:!0},{},this._analysisSelect):(this.inputLayer=this.inputLayers[a])&&this._updateAnalysisLayerUI(!0)},_updateAnalysisLayerUI:function(a,b){},_validateBins:function(){return this._binsInput.validate()&&this._binUnits.validate()},_handleAddProximityAttrBtnClick:function(a){this._validateBins()&&
(this._action="add",this._attrBuilder&&(this._attrBuilder.set("binSize",this._binsInput.get("value")),this._attrBuilder.set("binSizeUnit",this._binUnits.get("value")),this._attrBuilder.reset(),this._attrBuilder.set("mode",this._action)),this._attrDialog.set("buttonOk",this.i18n.add),this._attrDialog.show())},_handleEditLayerClick:function(a){this._validateBins()&&(this._action="edit",this._attrBuilder&&(this._attrBuilder.set("binSize",this._binsInput.get("value")),this._attrBuilder.set("binSizeUnit",
this._binUnits.get("value")),this._attrBuilder.set("inputLayer",this.inputLayers[a.layer]),this._attrBuilder.set("layerVariables",a),this._attrBuilder.set("mode",this._action)),this._attrDialog.set("buttonOk",this.i18n.save),this._curItem=a,this._attrDialog.show())},_handleBrowseItemsSelect:function(a,b){a&&a.selection&&l.addAnalysisReadyLayer({item:a.selection,layers:this.inputLayers,layersSelect:this._analysisSelect,browseDialog:a.dialog||this._browsedlg,widget:this},b).always(c.hitch(this,function(){this.inputLayer=
this.inputLayers[this._analysisSelect.get("value")];this._updateAnalysisLayerUI(!0)}))},_handleBinTypeChange:function(a,b){b="square"===a?this.i18n.selectSqBinSizeLbl:"hexagon"===a?this.i18n.selectHexBinSizeLbl:"";f.toggle(this._square,"selected","square"===a);f.toggle(this._hexagon,"selected","hexagon"===a);this.binType=a;t.set(this._binSizeLabel,"innerHTML",b)},_handleAddVarDlg:function(){if(this._attrBuilder&&!this._attrBuilder.validate())this._attrDialog.show();else{var a=this._attrBuilder.get("layerVariables");
this.variableCalculations||(this.variableCalculations=[]);this.variableCalculations.push(a);this._layerVarGrid?("add"===this._action?this._layerVarGrid.collection.filter({layer:a.layer}).forEach(function(b){}).then(c.hitch(this,function(b){var d=0<b.totalLength,e;d&&(e=b[0]);d?(e.variables=e.variables.concat(a.variables),this._layerVarGrid.collection.put(e,{overwrite:!0,id:e.id})):this._layerVarGrid.collection.put(a)})):this._layerVarGrid.collection.put(a,{overwrite:!0,id:this._curItem.id}),this._layerVarGrid.refresh()):
this._createLayerGrid();this._attrDialog.hide()}},_handleVarDlgCancel:function(){this._layerVarGrid&&this._layerVarGrid.refresh();this._attrDialog.hide()},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayersAttr:function(a){this.inputLayers=a&&0<a.length?a.slice():[]},_setInputLayerAttr:function(a){this.inputLayer=a},_setVariableCalculationsAttr:function(a){this.variableCalculations=a&&0<a.length?a.slice():
[]},_getVariableCalculationsAttr:function(a){return this.variableCalculations},_setUsedLayersAttr:function(a){this.usedLayers=a&&0<a.length?a.slice():[]},_getUsedLayersAttr:function(a){return this.variableCalculations},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},validateServiceName:function(a){return l.validateServiceName(a,{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})},_connect:function(a,b,d){this._pbConnects.push(u.connect(a,b,d))},_showMessages:function(a){t.set(this._bodyNode,
"innerHTML",a);v.fadeIn({node:this._errorMessagePane,easing:x.quadIn,onEnd:c.hitch(this,function(){m.set(this._errorMessagePane,{display:""})})}).play()},_handleCloseMsg:function(a){a&&a.preventDefault();v.fadeOut({node:this._errorMessagePane,easing:x.quadOut,onEnd:c.hitch(this,function(){m.set(this._errorMessagePane,{display:"none"})})}).play()},_displayWarningMessage:function(a){a.display?C.show(a.message,a.label):C.hide(a.label)}});K("extend-esri")&&c.setObject("dijit.analysis.BuildMultiVariableGrid",
p,D);return p});