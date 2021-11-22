// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/CreateDriveTimeAreas.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_hotspotsToolContentTitle" class\x3d"analysisTitle"\x3e\r\n         \x3ctable class\x3d"esriFormTable" \x3e\r\n            \x3ctr\x3e\r\n              \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"driveIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n              \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n                \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.createDriveTimeAreas}\x3c/label\x3e\r\n                \x3cnav class\x3d"breadcrumbs"  data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n                  \x3ca href\x3d"#" class\x3d"crumb breadcrumbs__modelabel" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n                  \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.createDriveTimeAreas}\x3c/a\x3e\r\n                \x3c/nav\x3e                \r\n              \x3c/td\x3e\r\n              \x3ctd\x3e\r\n                 \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                  \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                    \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e\r\n                  \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                    \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e              \r\n              \x3c/div\x3e  \r\n              \x3c/td\x3e\r\n            \x3c/tr\x3e\r\n         \x3c/table\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n     \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_driveTimesTable"\x3e\r\n       \x3ctbody\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_driveTimeDescription" \x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.analysisLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputLayer"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e          \r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_labelOne" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_measurelabel" class\x3d"esriAnalysisStepsLabel"\x3e${i18n.measureLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"MeasurementMethod"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd style\x3d"padding:0.25em;" colspan\x3d"3"\x3e\r\n            \x3cdiv data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_drivingModeSelect" class\x3d"esriLeadingMargin1 longInput esriLongLabel esriAnalysisDriveMode"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c!--\x3ctr\x3e\r\n          \x3ctd style\x3d"padding:0.25em;width:50%"\x3e\r\n            \x3cdiv class\x3d"esriLeadingMargin4 bufferSelector selected" data-dojo-attach-point\x3d"_drivingTime" \x3e\r\n              \x3cdiv class\x3d"bufferIcon esriDrivingTimeIcon"\x3e\x3c/div\x3e\r\n              \x3cdiv\x3e\x3clabel class\x3d"esriFloatLeading esriSelectLabel"\x3e${i18n.drivingTime}\x3c/label\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd style\x3d"padding:0.25em;width:50%"\x3e\r\n            \x3cdiv class\x3d"bufferSelector" data-dojo-attach-point\x3d"_drivingDistance"\x3e\r\n              \x3cdiv class\x3d"bufferIcon esriDrivingDistanceIcon"\x3e\x3c/div\x3e\r\n              \x3cdiv\x3e\x3clabel class\x3d"esriFloatLeading esriTrailingMargin2 esriSelectLabel"\x3e${i18n.drivingDistance}\x3c/label\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e--\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd style\x3d"padding-right:0;padding-bottom:0;width:50%;"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-attach-event\x3d"onChange:_handleDistValueChange" data-dojo-props\x3d"intermediateChanges:true,value:\'5\',required:true,missingMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_breakValuesInput" class\x3d"esriLeadingMargin1"  style\x3d"width:75%;"\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd colspan\x3d"2" style\x3d"padding-left:0.25em;padding-bottom:0;width:50%;"\x3e\r\n            \x3cselect class\x3d"mediumInput esriAnalysisSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"onChange:_handleDistUnitsChange" data-dojo-attach-point\x3d"_distanceUnitsSelect" style\x3d"width:80%;table-layout:fixed;"\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd style\x3d"padding:0" colspan\x3d"3"\x3e\r\n            \x3cdiv class\x3d"esriLeadingMargin3"\x3e\r\n              \x3clabel class\x3d"esriSmallLabel"\x3e${i18n.measureHelp}\x3c/label\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_useTrafficLabelRow"\x3e\r\n          \x3ctd style\x3d"padding:0" colspan\x3d"3"\x3e\r\n            \x3cdiv style\x3d"width:100%" data-dojo-type\x3d"esri/dijit/analysis/TrafficTime" data-dojo-attach-point\x3d"_trafficTimeWidget"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-type\x3d"esri/dijit/analysis/components/AddBarrierLayers/AddBarrierLayers" data-dojo-attach-point\x3d"_addBarrierLayersComponent" data-dojo-props\x3d"showGeoAnalyticsParams: ${showGeoAnalyticsParams}"\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_travelDirectionLabel" class\x3d"esriLeadingMargin2"\x3e${i18n.travelDirection}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e         \r\n        \x3ctr\x3e      \r\n          \x3ctd\x3e\r\n            \x3cdiv class\x3d"esriLeadingMargin2 bufferSelector selected" data-dojo-attach-point\x3d"_facilitytodemand" data-dojo-attach-event\x3d"onClick:_handleFacilityToDemandClick"\x3e\r\n              \x3cdiv class\x3d"bufferIcon facilityDemandIcon"\x3e\x3c/div\x3e\r\n              \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.awayFacility}\x3c/label\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\r\n            \x3cdiv class\x3d"bufferSelector" data-dojo-attach-point\x3d"_demandtofacility" data-dojo-attach-event\x3d"onClick:_handleDemandToFacilityClick"\x3e\r\n              \x3cdiv class\x3d"bufferIcon demandFacilityIcon"\x3e\x3c/div\x3e\r\n              \x3cdiv\x3e\x3clabel class\x3d"esriSelectLabel"\x3e${i18n.towardsFacility}\x3c/label\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_labelTwo" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_arealabel" class\x3d"esriAnalysisStepsLabel"\x3e${i18n.areaLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"DissolveType"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd style\x3d"padding-top:0;padding-bottom:0;" colspan\x3d"3"\x3e\r\n            \x3ctable style\x3d"width:100%;padding:0.25em;"\x3e\r\n              \x3ctr\x3e\r\n                \x3ctd style\x3d"padding-top:0;" class\x3d"onebythree-width"\x3e\r\n                  \x3cdiv style\x3d"min-width:36px; text-align: center;" class\x3d"bufferSelector selected" data-dojo-attach-point\x3d"_Overlap"\x3e\r\n                    \x3cdiv class\x3d"bufferIcon bufferOverlapIcon" style\x3d"margin:5px 10px; display: inline-block;"\x3e\x3c/div\x3e\r\n                    \x3cdiv style\x3d"width:100%"\x3e\x3clabel class\x3d"esriLeadingMargin025  esriSelectLabel"\x3e${i18n.overlap}\x3c/label\x3e\x3c/div\x3e\r\n                  \x3c/div\x3e\r\n                \x3c/td\x3e\r\n                \x3ctd style\x3d"padding-top:0;" class\x3d"onebythree-width"\x3e\r\n                  \x3cdiv style\x3d"min-width:36px; text-align: center;" class\x3d"bufferSelector" data-dojo-attach-point\x3d"_Dissolve"\x3e\r\n                  \x3cdiv class\x3d"bufferIcon bufferDissolveIcon" style\x3d"margin:5px 10px; display: inline-block;"\x3e\x3c/div\x3e\r\n                  \x3cdiv style\x3d"width:100%"\x3e\x3clabel class\x3d"esriLeadingMargin025  esriSelectLabel"\x3e${i18n.dissolve}\x3c/label\x3e\x3c/div\x3e\r\n                  \x3c/div\x3e\r\n                \x3c/td\x3e\r\n                \x3ctd style\x3d"padding-top:0;" class\x3d"onebythree-width"\x3e\r\n                 \x3cdiv style\x3d"min-width:36px; text-align: center;" class\x3d"bufferSelector" data-dojo-attach-point\x3d"_Split"\x3e\r\n                   \x3cdiv class\x3d"bufferIcon esriAnalysisSplitIcon" style\x3d"margin:5px 10px; display: inline-block;"\x3e\x3c/div\x3e\r\n                   \x3cdiv style\x3d"width:100%"\x3e\x3clabel class\x3d"esriLeadingMargin1  esriSelectLabel"\x3e${i18n.split}\x3c/label\x3e\x3c/div\x3e\r\n                 \x3c/div\x3e\r\n                \x3c/td\x3e        \r\n              \x3c/tr\x3e\r\n            \x3c/table\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin1 esriSelectLabel"\x3e\r\n              \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_unreachableAreas" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-event\x3d"onClick:_handleUnreachableAreasClick"/\x3e\r\n              ${i18n.showUnreachableAreas}\r\n            \x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\r\n            \x3ctable\x3e\r\n              \x3ctbody\x3e\r\n                \x3ctr\x3e\r\n                  \x3ctd\x3e\r\n                      \x3cspan class\x3d"warningIcon hide" data-dojo-attach-point\x3d"_unreachableAreasWarning" tabindex\x3d"0"\x3e\x3c/span\x3e\r\n                  \x3c/td\x3e\r\n                  \x3ctd\x3e\r\n                      \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"showHoles"\x3e\x3c/a\x3e\r\n                  \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n              \x3c/tbody\x3e\r\n            \x3c/table\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_labelThree" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_resultlabel" class\x3d"esriAnalysisStepsLabel"\x3e${i18n.resultLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"OutputLayer"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"esriLeadingMargin1 esriOutputText" data-dojo-props\x3d"required:true,trim:true" data-dojo-attach-event\x3d"onChange:_handleResultLyrInputChange" data-dojo-attach-point\x3d"outputLayerInput"  value\x3d""\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin1 esriSelectLabel"\x3e\r\n              \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_reachableStreets" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-event\x3d"onClick:_handleReachableStreetsClick"/\x3e\r\n              ${i18n.includeReachableStreets}\r\n            \x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\r\n            \x3ctable\x3e\r\n              \x3ctbody\x3e\r\n                \x3ctr\x3e\r\n                  \x3ctd\x3e\r\n                      \x3cspan class\x3d"warningIcon hide" data-dojo-attach-point\x3d"_reachableStreetsWarning" tabindex\x3d"0"\x3e\x3c/span\x3e\r\n                  \x3c/td\x3e\r\n                  \x3ctd\x3e\r\n                      \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"includeReachableStreets"\x3e\x3c/a\x3e\r\n                  \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n              \x3c/tbody\x3e\r\n            \x3c/table\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n             \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\r\n               \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n               \x3cinput class\x3d"longInput" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:60%;"\x3e\x3c/input\x3e\r\n             \x3c/div\x3e              \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e      \r\n       \x3c/tbody\x3e\r\n      \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n      \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink"\x3e${i18n.showCredits}\x3c/a\x3e\r\n       \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n           ${i18n.useMapExtent}\r\n       \x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n          ${i18n.runAnalysis}\r\n      \x3c/button\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e    \r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/CreateDriveTimeAreas","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/_base/kernel dojo/has dojo/on dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/number dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect dijit/Tooltip ../../kernel ../../lang ./AnalysisBase ./_AnalysisOptions ./CreditEstimator ./utils ./AnalysisRegistry ./TrafficTime ./components/AddBarrierLayers/AddBarrierLayers dojo/i18n!../../nls/jsapi dojo/text!./templates/CreateDriveTimeAreas.html".split(" "),
function(x,C,d,n,h,k,z,D,v,O,l,w,E,P,Q,f,m,F,G,H,I,J,R,S,T,U,V,W,X,Y,Z,A,K,q,L,M,aa,g,B,ba,ca,r,N){x=C([F,G,H,I,J,L,M],{declaredClass:"esri.dijit.analysis.CreateDriveTimeAreas",templateString:N,widgetsInTemplate:!0,inputLayer:null,inputType:null,outputLayerName:null,breakValues:null,overlapPolicy:"Overlap",distanceDefaultUnits:"Miles",i18n:null,pointBarriers:null,pointBarrierLayer:null,lineBarriers:null,lineBarrierLayer:null,polygonBarriers:null,polygonBarrierLayer:null,forbiddenLayers:[],_unreachableAreasWarningMsg:"",
_reachableStreetsWarningMsg:"",toolName:"CreateDriveTimeAreas",helpFileName:"CreateDriveTimeAreas",resultParameter:"DriveTimeAreasLayer",constructor:function(a,b){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments);n.forEach(this._pbConnects,h.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);d.mixin(this.i18n,r.bufferTool);d.mixin(this.i18n,r.driveTimes);var a=r.widgets.directions.units,b=
{};b.kilometers=a.esriKilometers.abbr;b.meters=a.esriMeters.abbr;b.miles=a.esriMiles.abbr;b.feet=a.esriFeet.abbr;b.yards=a.esriYards.abbr;b.hours=r.common.hoursSmall;b.minutes=r.common.minutesSmall;b.seconds=r.common.secondsSmall;this.i18n.abbreviatedUnits=b},postCreate:function(){this.inherited(arguments);f.add(this._form.domNode,"esriSimpleForm");this._breakValuesInput.set("validator",d.hitch(this,function(){return this.validateDistance()}));g.getNetworkAnalysisLimits(this).then(d.hitch(this,function(a){this.limits=
a}));this.outputLayerInput.set("validator",d.hitch(this,this.validateServiceName));this.breakValues||(this.breakValues=[],this.breakValues.push(this._breakValuesInput.get("value")));this._buildUI()},startup:function(){},_onClose:function(a){a&&(this._save(),this.emit("save",{save:!0}));this.emit("close",{save:a})},_toUpperFirstLetter:function(a){return a.slice(0,1).toUpperCase()+a.slice(1)},_handleShowCreditsClick:function(a){a.preventDefault();a={};if(this._form.validate()&&this._warningIconsValidated()){a.inputLayer=
k.toJson(this.constructAnalysisInputLyrObj(this.inputLayer));a.breakValues=k.toJson(this.get("breakValues"));a.breakUnits=this.get("breakUnits");a.overlapPolicy=this.get("overlapPolicy");this._trafficTimeWidget.get("checked")&&(a.timeOfDay=this._trafficTimeWidget.get("timeOfDay"),"UTC"===this._trafficTimeWidget.get("timeZoneForTimeOfDay")&&(a.timeZoneForTimeOfDay=this._trafficTimeWidget.get("timeZoneForTimeOfDay")));var b=this._trafficTimeWidget.get("startDateAndTime");b&&(a.timeOfDay=b);this.returnFeatureCollection||
(a.OutputName=k.toJson({serviceProperties:{name:this.outputLayerInput.get("value")}}));this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=k.toJson({extent:this.map.extent._normalize(!0)}));f.contains(this._facilitytodemand,"selected")?a.travelDirection="AwayFromFacility":a.travelDirection="TowardsFacility";a.showHoles=!!this._unreachableAreas.get("value");a.includeReachableStreets=!!this._reachableStreets.get("value");a=this._addBarrierstoJobParams(a,this._addBarrierLayersComponent.get("barrierLayers"));
this.getCreditsEstimate(this.toolName,a).then(d.hitch(this,function(c){this._usageForm.set("content",c);this._usageDialog.show()}))}},_handleSaveBtnClick:function(a){a={};var b={};if(this._form.validate()&&this._warningIconsValidated()){this._saveBtn.set("disabled",!0);a.inputLayer=k.toJson(this.constructAnalysisInputLyrObj(this.inputLayer));a.breakValues=this.get("breakValues");a.breakUnits=this.get("breakUnits");a.overlapPolicy=this.get("overlapPolicy");var c=this._drivingModeSelect.getOptions(this._drivingModeSelect.get("value"));
a.travelMode=c&&k.toJson(c.travelMode);this._trafficTimeWidget.get("checked")&&(a.timeOfDay=this._trafficTimeWidget.get("timeOfDay"),"UTC"===this._trafficTimeWidget.get("timeZoneForTimeOfDay")&&(a.timeZoneForTimeOfDay=this._trafficTimeWidget.get("timeZoneForTimeOfDay"),a.liveOffset=this._trafficTimeWidget.get("liveOffset")));if(c=this._trafficTimeWidget.get("startDateAndTime"))a.timeOfDay=c;this.returnFeatureCollection||(a.OutputName=k.toJson({serviceProperties:{name:this.outputLayerInput.get("value")}}));
this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=k.toJson({extent:this.map.extent._normalize(!0)}));this.returnFeatureCollection&&(c={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(c.extent=this.map.extent._normalize(!0)),a.context=k.toJson(c));f.contains(this._facilitytodemand,"selected")?a.travelDirection="AwayFromFacility":a.travelDirection="TowardsFacility";a.showHoles=!!this._unreachableAreas.get("value");a.includeReachableStreets=
!!this._reachableStreets.get("value");a=this._addBarrierstoJobParams(a,this._addBarrierLayersComponent.get("barrierLayers"));b.jobParams=a;b.itemParams={description:l.substitute(this.i18n.itemDescription,{layername:this.inputLayer.name,distance_field:a.Distances||a.Field,units:a.Units}),tags:l.substitute(this.i18n.itemTags,{layername:this.inputLayer.name}),snippet:this.i18n.itemSnippet};this.showSelectFolder&&(b.itemParams.folder=this.get("folderId"));this.execute(b)}},_handleResultLyrInputChange:function(a){this.set("outputLayerName",
a)},_handleDistValueChange:function(){this.set("outputLayerName");this._handleUnreachableAreasClick();this._handleReachableStreetsClick()},_handleDistUnitsChange:function(a){this.set("breakUnits",a);this.set("outputLayerName");this.validateDistance();this._handleUnreachableAreasClick();this._handleReachableStreetsClick()},_handleDistanceTypeChange:function(a,b){var c=this._drivingModeSelect.getOptions(this._drivingModeSelect.get("value"));if(a&&b)this._initTravelMode=a;else if(a===this._initTravelMode&&
!b){this._initTravelMode=null;return}if(q.isDefined(c)){var e=c.units.toLowerCase();var t="Time"===c.units&&("driving"===c.modei18nKey||"trucking"===c.modei18nKey)}e&&("time"===e&&g.getRoutingUtilities(this).then(d.hitch(this,function(u){this._trafficTimeWidget.set("trafficSupport",t&&u.networkDataset&&u.networkDataset.trafficSupport)})),w.set(this._useTrafficLabelRow,"display","time"===e?"":"none"),this._trafficTimeWidget.set("disabled","time"!==e),this._trafficTimeWidget.set("reset","time"!==e));
"time"===e?(this._distanceUnitsSelect.removeOption(this._distanceUnitsSelect.getOptions()),this._distanceUnitsSelect.addOption([{value:"Seconds",label:this.i18n.seconds},{value:"Minutes",label:this.i18n.minutes,selected:"selected"},{value:"Hours",label:this.i18n.hours}]),b||this.set("breakUnits",this._distanceUnitsSelect.get("value"))):"other"===e?(this.set("breakUnits","Other"),this._distanceUnitsSelect.removeOption(this._distanceUnitsSelect.getOptions()),this._distanceUnitsSelect.addOption([{value:"Other",
label:this.i18n.otherLabel,selected:!0}])):(!b&&this.get("distanceDefaultUnits")&&this.set("breakUnits",this.get("distanceDefaultUnits")),this._distanceUnitsSelect.removeOption(this._distanceUnitsSelect.getOptions()),this._distanceUnitsSelect.addOption([{value:"Miles",label:this.i18n.miles},{value:"Yards",label:this.i18n.yards},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters}]),this._distanceUnitsSelect.set("value",
this.breakUnits));b&&(this.breakUnits?this._distanceUnitsSelect.set("value",this.breakUnits):this.distanceDefaultUnits&&this._distanceUnitsSelect.set("value",this.distanceDefaultUnits));this.set("outputLayerName");this.validateDistance();this._handleUnreachableAreasClick();this._handleReachableStreetsClick()},_handleUnreachableAreasClick:function(a){var b=this._drivingModeSelect.get("value").replace("-","");a=this._distanceUnitsSelect.get("value");b=g.getMaxInputByMode({type:b,units:a,limits:this.limits,
travelMode:this._drivingModeSelect.getOptions(this._drivingModeSelect.get("value")),alternateLimits:"unreachableAreas"});this._unreachableAreas.get("value")&&!this.validateDistance(b)?(f.remove(this._unreachableAreasWarning,"hide"),this._unreachableAreasWarningMsg=l.substitute(this.i18n.unreachableValidationMsg,{x:m.format(b,{locale:z.locale}),units:this._localizeMeasurementUnit(a)})):f.add(this._unreachableAreasWarning,"hide")},_localizeMeasurementUnit:function(a){return this.i18n.abbreviatedUnits[a.toLowerCase()]||
""},_handleReachableStreetsClick:function(a){var b=this._drivingModeSelect.get("value").replace("-","");a=this._distanceUnitsSelect.get("value");b=g.getMaxInputByMode({type:b,units:a,limits:this.limits,travelMode:this._drivingModeSelect.getOptions(this._drivingModeSelect.get("value")),alternateLimits:"reachableStreets"});this._reachableStreets.get("value")&&!this.validateDistance(b)?(f.remove(this._reachableStreetsWarning,"hide"),this._reachableStreetsWarningMsg=l.substitute(this.i18n.reachableValidationMsg,
{x:m.format(b,{locale:z.locale}),units:this._localizeMeasurementUnit(a)})):f.add(this._reachableStreetsWarning,"hide")},_displayWarningMessage:function(a){a.display?A.show(a.message,a.label):A.hide(a.label)},_warningIconsValidated:function(){return f.contains(this._unreachableAreasWarning,"hide")&&f.contains(this._reachableStreetsWarning,"hide")},_handleOverlapPolicyChange:function(a,b){this.set("overlapPolicy",b);f.remove(this._Overlap,"selected");f.remove(this._Dissolve,"selected");f.remove(this._Split,
"selected");f.add(a,"selected");this._unreachableAreas.set("disabled","Split"===b);"Split"===b&&this._unreachableAreas.set("value",!1)},_save:function(){},_buildUI:function(){var a=!0;w.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none");g.initHelpLinks(this.domNode,this.showHelp);this.get("showSelectAnalysisLayer")&&(this.inputLayers&&this.inputLayer&&!g.isLayerInLayers(this.inputLayer,this.inputLayers)&&this.inputLayers.push(this.inputLayer),this.get("inputLayer")||!this.get("inputLayers")||
this.rerun||this.set("inputLayer",this.inputLayers[0]),g.populateAnalysisLayers(this,"inputLayer","inputLayers"));g.addReadyToUseLayerOption(this,[this._analysisSelect]);this.outputLayerName&&(this.outputLayerInput.set("value",this.outputLayerName),a=!1);w.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&this.getFolderStore().then(d.hitch(this,function(c){this.folderStore=c;g.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,
folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}));this.breakunits&&(this.breakUnits=this.breakunits);this.breakUnits?this._distanceUnitsSelect.set("value",this.breakUnits):this.distanceDefaultUnits&&this._distanceUnitsSelect.set("value",this.distanceDefaultUnits);this.breakValues&&(this.breakValues=n.map(this.breakValues,function(c){return m.format(c)}),this._breakValuesInput.set("value",this.breakValues.join(" ")));w.set(this._chooseExtentDiv,"display",
!0===this.showChooseExtent?"inline-block":"none");this._loadConnections();g.populateTravelModes({selectWidget:this._drivingModeSelect,widget:this,separator:"-",selectDefaultMode:!0,value:this.travelMode});if(this.timeOfDay){var b=this.travelMode&&g.isTrafficBasedTravelMode(this.travelMode);this._trafficTimeWidget.set("checked",b);b?(this._trafficTimeWidget.set("timeZoneForTimeOfDay",this.timeZoneForTimeOfDay),this._trafficTimeWidget.set("timeOfDay",this.timeOfDay),this.liveOffset&&this._trafficTimeWidget.set("liveOffset",
this.liveOffset)):this._trafficTimeWidget.set("startDateAndTime",this.timeOfDay)}this.inputLayer&&this._updateAnalysisLayerUI(a);"Overlap"===this.overlapPolicy?d.hitch(this,"_handleOverlapPolicyChange",this._Overlap,"Overlap")():"Dissolve"===this.overlapPolicy?d.hitch(this,"_handleOverlapPolicyChange",this._Dissolve,"Dissolve")():"Split"===this.overlapPolicy&&d.hitch(this,"_handleOverlapPolicyChange",this._Split,"Split")();h.connect(this._Overlap,"onclick",d.hitch(this,"_handleOverlapPolicyChange",
this._Overlap,"Overlap"));h.connect(this._Dissolve,"onclick",d.hitch(this,"_handleOverlapPolicyChange",this._Dissolve,"Dissolve"));h.connect(this._Split,"onclick",d.hitch(this,"_handleOverlapPolicyChange",this._Split,"Split"));this._addBarrierLayersComponent.buildUI({pointBarrierLayer:this.pointBarrierLayer,pointBarriers:this.pointBarriers,lineBarrierLayer:this.lineBarrierLayer,lineBarriers:this.lineBarriers,polygonBarrierLayer:this.polygonBarrierLayer,polygonBarriers:this.polygonBarriers,forbiddenLayers:this.forbiddenLayers,
showBrowseLayers:this.showBrowseLayers,map:this.get("map"),portalSelf:this.get("portalSelf"),portalUrl:this.get("portalUrl"),useArcGISComponents:this.useArcGISComponents,isSingleTenant:this.isSingleTenant});"AwayFromFacility"===this.travelDirection?this._handleFacilityToDemandClick():"TowardsFacility"===this.travelDirection&&this._handleDemandToFacilityClick();this._unreachableAreas.set("value",this.showHoles);this._reachableStreets.set("value",this.includeReachableStreets)},_updateAnalysisLayerUI:function(a){this.inputLayer&&
(E.set(this._driveTimeDescription,"innerHTML",l.substitute(this.i18n.toolDefine,{layername:this.inputLayer.name})),a&&this.set("outputLayerName"))},_handleAnalysisLayerChange:function(a){"browse"===a||"browselayers"===a?this._createBrowseItems({browseValue:a,disabledSubResources:[this.inputLayer]},{tags:["point"],geometryTypes:[B.GeometryTypes.Point]},this._analysisSelect):(this.set("inputLayer",this.inputLayers[a]),this.outputLayerName=null,this._updateAnalysisLayerUI(!0))},_handleBrowseItemsSelect:function(a,
b){a&&a.selection&&g.addAnalysisReadyLayer({item:a.selection,layers:this.inputLayers,layersSelect:this._analysisSelect,browseDialog:a.dialog||this._browsedlg,widget:this},b).then(d.hitch(this,function(c){c&&this._addBarrierLayersComponent.addNewBarrier(this.inputLayers[this.inputLayers.length-1])}))},validateTime:function(){},validateDistance:function(a){if(!this.limits)return!0;var b=this,c=[],e,t;this.set("breakValues");var u=a?a:g.getMaxInputByMode({type:this._drivingModeSelect.get("value").replace("-",
""),units:this._distanceUnitsSelect.get("value"),limits:this.limits,travelMode:this._drivingModeSelect.getOptions(this._drivingModeSelect.get("value"))});a=d.trim(this._breakValuesInput.get("value")).split(" ");if(0===a.length)return!1;n.forEach(a,function(p){p=m.parse(p);if(isNaN(p)||u&&p>u)return c.push(0),!1;e=m.format(p,{locale:"root"});q.isDefined(e)?q.isDefined(e)||(e=m.format(p,{locale:"en-us"})):e=m.format(p,{locale:"en"});q.isDefined(e)&&(t=d.trim(e).match(/\D/g));t&&n.forEach(t,function(y){"."===
y||","===y?c.push(1):"-"===y&&"polygon"===b.inputType?c.push(1):c.push(0)})});return-1!==n.indexOf(c,0)?(this._breakValuesInput.focus(),!1):!0},_loadConnections:function(){this.on("start",d.hitch(this,"_onClose",!0));this._connect(this._closeBtn,"onclick",d.hitch(this,"_onClose",!1));this.own(this.on("travelmodes-added",d.hitch(this,function(){h.connect(this._drivingModeSelect,"onChange",d.hitch(this,this._handleDistanceTypeChange));d.hitch(this,this._handleDistanceTypeChange,this._drivingModeSelect.get("value"),
q.isDefined(this.breakUnits))()})));h.connect(this._Overlap,"onclick",d.hitch(this,"_handleOverlapPolicyChange",this._Overlap,"Overlap"));h.connect(this._Dissolve,"onclick",d.hitch(this,"_handleOverlapPolicyChange",this._Dissolve,"Dissolve"));h.connect(this._Split,"onclick",d.hitch(this,"_handleOverlapPolicyChange",this._Split,"Split"));this.own(this._addBarrierLayersComponent.on("add-ready-to-use-layer",d.hitch(this,function(a){this.emit("add-ready-to-use-layer",a)})));this.own(v(this._unreachableAreasWarning,
"click",d.hitch(this,function(a){this._displayWarningMessage({display:!0,message:this._unreachableAreasWarningMsg,label:this._unreachableAreasWarning})})),v(this._unreachableAreasWarning,"blur",d.hitch(this,function(a){this._displayWarningMessage({display:!1,label:this._unreachableAreasWarning})})),v(this._reachableStreetsWarning,"click",d.hitch(this,function(a){this._displayWarningMessage({display:!0,message:this._reachableStreetsWarningMsg,label:this._reachableStreetsWarning})})),v(this._reachableStreetsWarning,
"blur",d.hitch(this,function(a){this._displayWarningMessage({display:!1,label:this._reachableStreetsWarning})})))},_handleFacilityToDemandClick:function(){f.add(this._facilitytodemand,"selected");f.remove(this._demandtofacility,"selected")},_handleDemandToFacilityClick:function(){f.remove(this._facilitytodemand,"selected");f.add(this._demandtofacility,"selected")},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},
_setInputLayerAttr:function(a){q.isDefined(a)&&a.geometryType===B.GeometryTypes.Point&&(this.inputLayer=a,this.forbiddenLayers=[this.inputLayer],this._addBarrierLayersComponent&&this._addBarrierLayersComponent.updateOptions(this.forbiddenLayers))},_getInputLayerAttr:function(){return this.inputLayer},_setInputLayersAttr:function(a){this.inputLayers=a||[]},_setOverlapPolicyAttr:function(a){this.overlapPolicy=a},_getOverlapPolicyAttr:function(){return this.overlapPolicy},_setBreakValuesAttr:function(a){if(a)this.breakValues=
a;else{a=d.trim(this._breakValuesInput.get("value")).split(" ");var b=[];n.forEach(a,function(c){b.push(m.parse(c))});this.breakValues=b}},_getBreakValuesAttr:function(){return this.breakValues},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},_getTravelModeAttr:function(){return this.travelMode},_setTravelModeAttr:function(a){this._set("travelMode",a)},validateServiceName:function(a){return g.validateServiceName(a,{textInput:this.outputLayerInput})},_setBreakUnitsAttr:function(a){this.breakUnits=
a},_getBreakUnitsAttr:function(){return this.breakUnits},_setDistanceDefaultUnitsAttr:function(a){this.distanceDefaultUnits=a},_getDistanceDefaultUnitsAttr:function(){return this.distanceDefaultUnits},_setOutputLayerNameAttr:function(a){var b=[this.i18n.seconds,this.i18n.minutes,this.i18n.hours,this.i18n.miles,this.i18n.meters,this.i18n.kilometers,this.i18n.feet,this.i18n.yards];if(0!==this._distanceUnitsSelect.getOptions().length){var c=this._distanceUnitsSelect.getOptions(this._distanceUnitsSelect.get("value"))&&
this._distanceUnitsSelect.getOptions(this._distanceUnitsSelect.get("value")).label;this._drivingModeSelect.getOptions(this._drivingModeSelect.get("value"));var e=this.i18n.other;a?(this.outputLayerName=a,this.outputLayerInput.set("value",a)):this._breakValuesInput&&(!this.outputLayerName&&this.inputLayer&&c?this.outputLayerName=l.substitute(this.i18n.outputModeLayerName,{mode:e,layername:this.inputLayer.name,breakValues:this._breakValuesInput.get("value"),breakUnits:c}):(this.outputLayerName=this.outputLayerInput.get("value"),
-1!==this.outputLayerName.lastIndexOf("(")&&(a=this.outputLayerName.substring(0,this.outputLayerName.lastIndexOf("(")),e=l.trim(this.outputLayerName.substring(this.outputLayerName.lastIndexOf(" "),this.outputLayerName.lastIndexOf(")"))),-1!==n.indexOf(b,e)&&c&&(this.outputLayerName=l.substitute(a+"(${breakValues} ${breakUnits})",{breakValues:this._breakValuesInput.get("value"),breakUnits:c})))),this.outputLayerInput.set("value",this.outputLayerName))}},_connect:function(a,b,c){this._pbConnects.push(h.connect(a,
b,c))}});D("extend-esri")&&d.setObject("dijit.analysis.CreateDriveTimeAreas",x,K);return x});