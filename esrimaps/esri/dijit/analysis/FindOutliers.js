// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/FindOutliers.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_hotspotsToolContentTitle" class\x3d"analysisTitle"\x3e\r\n         \x3ctable class\x3d"esriFormTable" \x3e \r\n            \x3ctr\x3e\r\n              \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"findOutliersIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n              \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n                \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.findOutliers}\x3c/label\x3e\r\n                \x3cnav class\x3d"breadcrumbs"  data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n                  \x3ca href\x3d"#" class\x3d"crumb breadcrumbs__modelabel" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n                  \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.findOutliers}\x3c/a\x3e\r\n                \x3c/nav\x3e                 \r\n              \x3c/td\x3e\r\n              \x3ctd\x3e\r\n                \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                    \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                      \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                      \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                    \x3c/div\x3e              \r\n                \x3c/div\x3e  \r\n              \x3c/td\x3e\r\n            \x3c/tr\x3e\r\n         \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n     \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_hotspotsTable"\x3e \r\n       \x3ctbody\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\r\n          \x3ctd  colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_hotspotsToolDescription" \x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.chooseLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"analysisLayer"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e           \r\n        \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n          \x3ctd  colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e          \r\n        \x3ctr data-dojo-attach-point\x3d"_fieldsLabelRow"\x3e\r\n          \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_labelOne" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_polylabel" class\x3d"esriAnalysisStepsLabel"\x3e${i18n.chooseAttributeLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"analysisField"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e \r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_fieldsSelectRow"\x3e\r\n         \x3ctd colspan\x3d"3" style\x3d"padding-top:0;"\x3e \r\n          \x3cselect class\x3d"esriLeadingMargin1 longTextInput"  style\x3d"margin-top:10px;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysFieldSelect" data-dojo-attach-event\x3d"onChange:_handleFieldChange"\x3e\r\n          \x3c/select\x3e         \r\n         \x3c/td\x3e \r\n        \x3c/tr\x3e \r\n        \x3ctr data-dojo-attach-point\x3d"_optionsRow"\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"optionsTd"\x3e\r\n            \x3cdiv class\x3d"esriLeadingMargin2 optionsOpen" style\x3d"border:none;" data-dojo-attach-point\x3d"_optionsDiv"\x3e\r\n              \x3ctable class\x3d"esriFormTable optionsTable" style\x3d"border:  none;"\x3e\r\n                \x3ctbody\x3e\r\n                  \x3ctr\x3e\r\n                    \x3ctd colspan\x3d"2"\x3e\r\n                        \x3clabel\x3e${i18n.provideAggLabel}\x3c/label\x3e\r\n                    \x3c/td\x3e                    \r\n                    \x3ctd class\x3d"shortTextInput"\x3e\r\n                      \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"aggregationPolygonLayer"\x3e\x3c/a\x3e \r\n                    \x3c/td\x3e \r\n                  \x3c/tr\x3e\r\n                  \x3ctr\x3e\r\n                    \x3ctd colspan\x3d"2" style\x3d"width:68%;"\x3e\r\n                        \x3cselect  class\x3d"longInput esriLongLabel"  data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_aggAreaSelect" data-dojo-attach-event\x3d"onChange:_handleAggAreaSelectChange"\x3e\x3c/select\x3e\r\n                    \x3c/td\x3e   \r\n                  \x3c/tr\x3e   \r\n                  \x3ctr data-dojo-attach-point\x3d"_boundingAreaLabelRow"\x3e\r\n                    \x3ctd colspan\x3d"2"\x3e\r\n                        \x3clabel\x3e${i18n.defineBoundingLabel}\x3c/label\x3e\r\n                    \x3c/td\x3e\r\n                    \x3ctd class\x3d"shortTextInput"\x3e\r\n                       \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"boundingPolygonLayer"\x3e\x3c/a\x3e \r\n                    \x3c/td\x3e                     \r\n                  \x3c/tr\x3e\r\n                  \x3ctr data-dojo-attach-point\x3d"_boundingAreaSelectRow"\x3e\r\n                    \x3ctd colspan\x3d"2" style\x3d"width:40%;"\x3e\r\n                      \x3cselect class\x3d"longInput esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_boundingAreaSelect" data-dojo-attach-event\x3d"onChange:_handleBoundingSelectChange"\x3e\x3c/select\x3e                      \r\n                    \x3c/td\x3e\r\n                    \x3ctd style\x3d"width:15%"\x3e\r\n                      \x3cdiv data-dojo-type\x3d"dijit/form/ToggleButton" class\x3d"esriFloatLeading esriActionButton" data-dojo-props\x3d"showLabel:false,iconClass:\'toolbarIcon polygonIcon\',label:\'${i18n.drawLabel}\'" data-dojo-attach-point\x3d"_boundingDrawBtn" data-dojo-attach-event\x3d"onChange:_handleBoundingBtnClick"\x3e\x3c/div\x3e                      \r\n                    \x3c/td\x3e \r\n                  \x3c/tr\x3e      \r\n                \x3c/tbody\x3e\r\n              \x3c/table\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_divideByLabelRow"\x3e\r\n          \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_labelOne" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_polylabel" class\x3d"esriAnalysisStepsLabel"\x3e${i18n.divideByLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"dividedByField"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e \r\n        \x3c/tr\x3e         \r\n        \x3ctr data-dojo-attach-point\x3d"_divideByRow"\x3e\r\n         \x3ctd colspan\x3d"3" style\x3d"padding-top:0;"\x3e \r\n          \x3cselect class\x3d"esriLeadingMargin1 longTextInput"  style\x3d"margin-top:10px;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_divideFieldSelect" data-dojo-attach-event\x3d"onChange:_handleDividedByFieldChange"\x3e\r\n           \x3c/select\x3e         \r\n         \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_chooseBinSizeLblRow"\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n              \x3clabel data-dojo-attach-point\x3d"_binLblNum" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel" data-dojo-attach-point\x3d"_binSizeLabel"\x3e${i18n.binSizeLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"inputBins"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e            \r\n          \x3c/tr\x3e \r\n          \x3ctr data-dojo-attach-point\x3d"_binsTypeRow"\x3e\r\n           \x3ctd style\x3d"padding-right:0;margin-top:1.0em;idth:50%;"\x3e\r\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"intermediateChanges:true,value:\'5\',required:false,missingMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_binsInput" class\x3d"esriLeadingMargin1"  style\x3d"width:75%;"\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-left:0.25em;margin-top:1.0em;width:50%;"\x3e\r\n              \x3cselect class\x3d"mediumInput esriAnalysisSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_binUnits" style\x3d"width:80%;table-layout:fixed;"\x3e\r\n                 \x3coption value\x3d"NauticalMiles"\x3e${i18n.nautMiles}\x3c/option\x3e\r\n                 \x3coption value\x3d"Miles"\x3e${i18n.miles}\x3c/option\x3e\r\n                 \x3coption value\x3d"Yards"\x3e${i18n.yards}\x3c/option\x3e\r\n                 \x3coption value\x3d"Feet"\x3e${i18n.feet}\x3c/option\x3e\r\n                 \x3coption type\x3d"separator"\x3e\x3c/option\x3e\r\n                 \x3coption value\x3d"Kilometers"\x3e${i18n.kilometers}\x3c/option\x3e\r\n                 \x3coption value\x3d"Meters"\x3e${i18n.meters}\x3c/option\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_neighborHoodLblRow"\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n              \x3clabel data-dojo-attach-point\x3d"_neLblNum" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel" data-dojo-attach-point\x3d"_neSizeLabel"\x3e${i18n.neighborhoodLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"neighborhood"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e            \r\n          \x3c/tr\x3e \r\n          \x3ctr data-dojo-attach-point\x3d"_neighborHoodRow"\x3e\r\n           \x3ctd style\x3d"padding-right:0;margin-top:1.0em;idth:50%;"\x3e\r\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"intermediateChanges:true,value:\'5\',required:false,missingMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_neigSizeInput" class\x3d"esriLeadingMargin1"  style\x3d"width:75%;"\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-left:0.25em;margin-top:1.0em;width:50%;"\x3e\r\n              \x3cselect class\x3d"mediumInput esriAnalysisSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_neigSizeInputUnits" style\x3d"width:80%;table-layout:fixed;"\x3e\r\n                 \x3coption value\x3d"NauticalMiles"\x3e${i18n.nautMiles}\x3c/option\x3e\r\n                 \x3coption value\x3d"Miles"\x3e${i18n.miles}\x3c/option\x3e\r\n                 \x3coption value\x3d"Yards"\x3e${i18n.yards}\x3c/option\x3e\r\n                 \x3coption value\x3d"Feet"\x3e${i18n.feet}\x3c/option\x3e\r\n                 \x3coption type\x3d"separator"\x3e\x3c/option\x3e\r\n                 \x3coption value\x3d"Kilometers"\x3e${i18n.kilometers}\x3c/option\x3e\r\n                 \x3coption value\x3d"Meters"\x3e${i18n.meters}\x3c/option\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e          \r\n          \x3ctr data-dojo-attach-point\x3d"_timeStepsLabelRow"\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel  data-dojo-attach-point\x3d"_timeStepLabelNo" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fiveLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.aggTimeStepsLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"timeSlicing"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e             \r\n                      \r\n          \x3c/tr\x3e\r\n           \x3ctr data-dojo-attach-point\x3d"_intervalLabelRow"\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriLeadingMargin1"\x3e${i18n.intervalLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n           \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"timeInterval"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e             \r\n          \x3c/tr\x3e           \r\n         \x3ctr data-dojo-attach-point\x3d"_intervalRow"\x3e\r\n          \x3ctd style\x3d"padding-right:0;padding-bottom:0;width:50%;"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"constraints:{min:1,places:0},intermediateChanges:true,required:false,missingMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_timeIntervalInput" class\x3d"esriLeadingMargin1"  style\x3d"width:75%;"\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd colspan\x3d"2" style\x3d"padding-left:0.25em;padding-bottom:0;width:50%;"\x3e\r\n            \x3cselect class\x3d"mediumInput esriAnalysisSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_timeIntervalUnits" style\x3d"width:80%;table-layout:fixed;"\x3e\r\n               \x3coption value\x3d"milliseconds"\x3e${i18n.milliseconds}\x3c/option\x3e\r\n               \x3coption value\x3d"seconds"\x3e${i18n.seconds}\x3c/option\x3e\r\n               \x3coption value\x3d"minutes"\x3e${i18n.minutes}\x3c/option\x3e\r\n               \x3coption value\x3d"hours"\x3e${i18n.hours}\x3c/option\x3e\r\n               \x3coption value\x3d"days"\x3e${i18n.days}\x3c/option\x3e\r\n               \x3coption value\x3d"weeks"\x3e${i18n.weeks}\x3c/option\x3e\r\n               \x3coption value\x3d"months"\x3e${i18n.months}\x3c/option\x3e\r\n               \x3coption value\x3d"years"\x3e${i18n.years}\x3c/option\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n          \r\n        \x3ctr data-dojo-attach-point\x3d"_repeatLabelRow"\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriLeadingMargin1"\x3e${i18n.repeatLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"timeStep"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e          \r\n        \x3c/tr\x3e       \r\n        \x3ctr data-dojo-attach-point\x3d"_repeatRow"\x3e\r\n          \x3ctd style\x3d"padding-right:0;padding-bottom:0;width:50%;"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"constraints:{min:1,places:0},intermediateChanges:true,required:false,missingMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_timeRepeatInput" class\x3d"esriLeadingMargin1"  style\x3d"width:75%;"\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd colspan\x3d"2" style\x3d"padding-left:0.25em;padding-bottom:0;width:50%;"\x3e\r\n            \x3cselect class\x3d"mediumInput esriAnalysisSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_timeRepeatUnits" style\x3d"width:80%;table-layout:fixed;"\x3e\r\n               \x3coption value\x3d"milliseconds"\x3e${i18n.milliseconds}\x3c/option\x3e\r\n               \x3coption value\x3d"seconds"\x3e${i18n.seconds}\x3c/option\x3e\r\n               \x3coption value\x3d"minutes"\x3e${i18n.minutes}\x3c/option\x3e\r\n               \x3coption value\x3d"hours"\x3e${i18n.hours}\x3c/option\x3e\r\n               \x3coption value\x3d"days"\x3e${i18n.days}\x3c/option\x3e\r\n               \x3coption value\x3d"weeks"\x3e${i18n.weeks}\x3c/option\x3e\r\n               \x3coption value\x3d"months"\x3e${i18n.months}\x3c/option\x3e\r\n               \x3coption value\x3d"years"\x3e${i18n.years}\x3c/option\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_timeAlignLabelRow"\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin1"\x3e${i18n.timeAlignLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"timeStep"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e             \r\n        \x3c/tr\x3e        \r\n        \x3ctr data-dojo-attach-point\x3d"_timeAlignRow"\x3e\r\n          \x3ctd  colspan\x3d"3" class\x3d"padBottom1"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"   data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_timeAlignmentSelect" data-dojo-attach-event\x3d"onChange:_handleTimeAlignmentChange"\x3e\r\n              \x3coption value\x3d"EndTime"\x3e${i18n.endTime}\x3c/option\x3e\r\n              \x3coption value\x3d"ReferenceTime"\x3e${i18n.referenceTime}\x3c/option\x3e\r\n              \x3coption value\x3d"StartTime" selected\x3d"true"\x3e${i18n.startTime}\x3c/option\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e                     \r\n        \x3ctr data-dojo-attach-point\x3d"_timeRefLabelRow"\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin1"\x3e${i18n.timeRefLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"timeReference"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e             \r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_timeRefRow"\x3e\r\n         \x3ctd style\x3d"padding-right:0;width:50%;" class\x3d"padTop0 padBottom1"\x3e\r\n            \x3cinput class\x3d"esriLeadingMargin2 esriAnalysisSelect" data-dojo-props\x3d"required:false" data-dojo-type\x3d"dijit/form/DateTextBox" data-dojo-attach-point\x3d"_timeRefDay" style\x3d"width:75%;"\x3e\r\n          \x3c/input\x3e\r\n         \x3c/td\x3e\r\n         \x3ctd colpsan\x3d"2" style\x3d"padding-left:0.25em;width:50%;" class\x3d"padTop0 padBottom1"\x3e   \r\n          \x3cinput  type\x3d"text" data-dojo-type\x3d"dijit/form/TimeTextBox" data-dojo-props\x3d"required:false,intermediateChanges:true,constraints:{formatLength:\'short\',selector:\'time\'}"  data-dojo-attach-point\x3d"_timeRefTime" data-dojo-attach-event\x3d"onChange:_handleRefTimeChange" style\x3d"margin-top:0;width:90%;"\x3e\r\n          \x3c/input\x3e\r\n        \x3c/td\x3e\r\n        \x3c/tr\x3e        \r\n       \x3c!-- \x3ctr data-dojo-attach-point\x3d"_srLabelRow"\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel" data-dojo-attach-point\x3d"_spatialRefLabel"\x3e${i18n.sixLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.spatialReference}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"spatialReference"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e             \r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_srInputRow"\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"esriLeadingMargin1 longInput" data-dojo-props\x3d"trim:true" data-dojo-attach-point\x3d"_spatialRefInput" value\x3d""\x3e\x3c/input\x3e\r\n          \x3c/td\x3e                \r\n        \x3c/tr\x3e--\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_datastoreLabelRow"\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel" data-dojo-attach-point\x3d"_datastoreLabel"\x3e${i18n.fiveLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.datastoreLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"dataStore"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e            \r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_selectDataStore"\x3e\r\n          \x3ctd  colspan\x3d"3" class\x3d"padTop0"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_datastoreSelect"\x3e\r\n              \x3coption value\x3d"relational"\x3e${i18n.relationalDS}\x3c/option\x3e\r\n              \x3coption value\x3d"spatialtemporal" selected\x3d"true"\x3e${i18n.spatialDS}\x3c/option\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n         \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_optimizeLabelNo" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_optmizeLabel" class\x3d"esriAnalysisStepsLabel"\x3e${i18n.optimizeFor}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"permutations"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-props\x3d"value:5,intermediateChanges:false,showButtons:true,minimum:1,maximum:9,discreteValues:3,pageIncrement:1" style\x3d"width:90%;" data-dojo-attach-point\x3d"_optimizeSlider" data-dojo-attach-event\x3d"onChange:_handleOptimizeSliderChange" type\x3d"range" data-dojo-type\x3d"dijit/form/HorizontalSlider"\x3e\r\n              \x3cdiv data-dojo-type\x3d"dijit/form/HorizontalRule" data-dojo-props\x3d"container: \'topDecoration\',count: 3,style: \'height: 0.5em;\'"\x3e\x3c/div\x3e\r\n               \x3col data-dojo-type\x3d"dijit/form/HorizontalRuleLabels"  data-dojo-attach-point\x3d"_liveTimeRuleLabels" data-dojo-props\x3d"container: \'bottomDecoration\', count:3" style\x3d"margin-top:5px;height: 1em;"\x3e\r\n                  \x3cli\x3e${i18n.speed}\x3c/li\x3e\r\n                  \x3cli\x3e\x3c/li\x3e\r\n                  \x3cli\x3e${i18n.precision}\x3c/li\x3e\r\n                \x3c/ol\x3e  \r\n            \x3c/div\x3e\r\n             \x3c!-- create rules and labels below horizontal slider --\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_overideOptionsRow"\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv class\x3d"optionsClose" data-dojo-attach-point\x3d"_overideOptionsDiv"\x3e\r\n              \x3cdiv class\x3d"dijitTreeExpando" data-dojo-attach-event\x3d"onclick:_handleOptionsBtnClick"\x3e\r\n                \x3clabel class\x3d"esriLeadingMargin2 noWrapLabel"\x3e${i18n.Options}\x3c/label\x3e\r\n              \x3c/div\x3e\r\n              \x3ca style\x3d"position:relative; top:-16px;" href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"overrideOptions"\x3e\x3c/a\x3e\r\n              \x3ctable class\x3d"esriFormTable optionsTable"\x3e\r\n                \x3ctbody\x3e\r\n                \x3ctr data-dojo-attach-point\x3d"_cellSizeLabelRow"\x3e\r\n                  \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n                    \x3clabel data-dojo-attach-point\x3d"_dbandLabel" class\x3d"esriLeadingMargin2"\x3e${i18n.cellSize}\x3c/label\x3e\r\n                  \x3c/td\x3e\r\n                  \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n                    \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"cellSize"\x3e\x3c/a\x3e \r\n                  \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr data-dojo-attach-point\x3d"_cellSizeRow"\x3e\r\n                  \x3ctd style\x3d"padding-right:0;margin-top:1.0em;idth:50%;"\x3e\r\n                    \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" class\x3d"esriLeadingMargin2" data-dojo-props\x3d"intermediateChanges:true,required:false,missingMessage:\'${i18n.distanceMsg}\',constraints:{min:0.000001}" data-dojo-attach-point\x3d"_cellSizeInput" style\x3d"width:75%;"\x3e\r\n                  \x3c/td\x3e\r\n                  \x3ctd colspan\x3d"2" style\x3d"padding-left:0.25em;margin-top:1.0em;width:50%;"\x3e\r\n                    \x3cselect class\x3d"mediumInput esriAnalysisSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_cellSizeUnits" style\x3d"width:80%;table-layout:fixed;"\x3e\r\n                      \x3coption value\x3d"Miles"\x3e${i18n.miles}\x3c/option\x3e\r\n                      \x3coption value\x3d"Feet"\x3e${i18n.feet}\x3c/option\x3e\r\n                      \x3coption type\x3d"separator"\x3e\x3c/option\x3e\r\n                      \x3coption value\x3d"Kilometers"\x3e${i18n.kilometers}\x3c/option\x3e\r\n                      \x3coption value\x3d"Meters"\x3e${i18n.meters}\x3c/option\x3e\r\n                    \x3c/select\x3e\r\n                  \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr data-dojo-attach-point\x3d"_distanceBandLabelRow"\x3e\r\n                  \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n                    \x3clabel data-dojo-attach-point\x3d"_dbandLabel" class\x3d"esriLeadingMargin2"\x3e${i18n.distanceBand}\x3c/label\x3e\r\n                  \x3c/td\x3e\r\n                  \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n                    \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"distanceBand"\x3e\x3c/a\x3e \r\n                  \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr data-dojo-attach-point\x3d"_distanceBandRow"\x3e\r\n                  \x3ctd style\x3d"padding-right:0;margin-top:1.0em;idth:50%;"\x3e\r\n                    \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" class\x3d"esriLeadingMargin2" data-dojo-props\x3d"intermediateChanges:true,required:false,missingMessage:\'${i18n.distanceMsg}\',constraints:{min:0.000001}" data-dojo-attach-point\x3d"_dbandInput" style\x3d"width:75%;"\x3e\r\n                  \x3c/td\x3e\r\n                  \x3ctd colspan\x3d"2" style\x3d"padding-left:0.25em;margin-top:1.0em;width:50%;"\x3e\r\n                    \x3cselect class\x3d"mediumInput esriAnalysisSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_dbandUnits" style\x3d"width:80%;table-layout:fixed;"\x3e\r\n                      \x3coption value\x3d"Miles"\x3e${i18n.miles}\x3c/option\x3e\r\n                      \x3coption value\x3d"Feet"\x3e${i18n.feet}\x3c/option\x3e\r\n                      \x3coption type\x3d"separator"\x3e\x3c/option\x3e\r\n                      \x3coption value\x3d"Kilometers"\x3e${i18n.kilometers}\x3c/option\x3e\r\n                      \x3coption value\x3d"Meters"\x3e${i18n.meters}\x3c/option\x3e\r\n                    \x3c/select\x3e\r\n                  \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n              \x3c/tbody\x3e\r\n            \x3c/table\x3e\r\n           \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel" data-dojo-attach-point\x3d"_outputNumLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel" \x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_outputHelpNode" esriHelpTopic\x3d"outlierResultLayer"\x3e\x3c/a\x3e \r\n          \x3c/td\x3e             \r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true,required:true" class\x3d"longTextInput esriLeadingMargin1" data-dojo-attach-point\x3d"_outputLayerInput" value\x3d"${i18n.hotspots}"\x3e\x3c/input\x3e\r\n          \x3c/td\x3e                \r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n             \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\r\n               \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n               \x3cinput class\x3d"longInput" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:60%;"\x3e\x3c/input\x3e\r\n             \x3c/div\x3e              \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e                                              \r\n      \x3c/tbody\x3e         \r\n     \x3c/table\x3e\r\n   \x3c/div\x3e\r\n  \x3cdiv style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n    \x3cdiv class\x3d"esriFormWarning esriRoundedBox" data-dojo-attach-point\x3d"_errorMessagePane" style\x3d"display:none;"\x3e\r\n      \x3ca href\x3d"#" title\x3d"${i18n.close}" class\x3d"esriFloatTrailing esriAnalysisCloseIcon" title\x3d\'${i18n.close}\' data-dojo-attach-event\x3d"onclick:_handleCloseMsg"\x3e\r\n      \x3c/a\x3e\r\n      \x3cspan data-dojo-attach-point\x3d"_bodyNode"\x3e\x3c/span\x3e\r\n    \x3c/div\x3e    \r\n    \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n      \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink"\x3e${i18n.showCredits}\x3c/a\x3e\r\n     \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n       \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n         ${i18n.useMapExtent}\r\n     \x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n        ${i18n.runAnalysis}\r\n    \x3c/button\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e    \r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/FindOutliers","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/Color dojo/_base/json dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/NodeList dojo/NodeList-dom dojo/_base/fx dojo/fx/easing dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ToggleButton dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect dijit/Dialog dijit/form/NumberTextBox dijit/form/TimeTextBox dijit/form/DateTextBox dijit/form/HorizontalSlider dijit/form/HorizontalRule dijit/form/HorizontalRuleLabels ../../kernel ../../lang ./AnalysisBase ./FindHotSpots ../../symbols/SimpleFillSymbol ../../symbols/SimpleLineSymbol ../../toolbars/draw ../PopupTemplate ../../layers/FeatureLayer ../../graphic ./utils ./CreditEstimator dojo/i18n!../../nls/jsapi dojo/text!./templates/FindOutliers.html".split(" "),
function(b,e,c,m,n,p,q,f,r,t,u,d,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,g,Y,Z,h,aa,ba,ca,da,ea,fa,ha,ia,k,l){b=e([h],{declaredClass:"esri.dijit.analysis.FindOutliers",templateString:l,widgetsInTemplate:!0,toolName:"FindOutliers",helpFileName:"FindOutliers",resultParameter:"outliersResultLayer",analysisFieldsToFilter:["LMiIndex","LMiPValue","LMiZScore","NNeighbors"],constructor:function(a,ja){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments)},
postMixInProperties:function(){this.inherited(arguments);c.mixin(this.i18n,k.findOutliersTool)},postCreate:function(){this.inherited(arguments);this.showGeoAnalyticsParams||(d.set(this._optimizeLabelNo,"innerHTML",this.i18n.fourLabel),d.set(this._outputNumLabel,"innerHTML",this.i18n.fiveLabel));this._optimizeSlider&&this.permutations&&("Speed"===this.permutations?this._optimizeSlider.set("value",1):"Balance"===this.permutations?this._optimizeSlider.set("value",5):"Precision"===this.permutations&&
this._optimizeSlider.set("value",9))},startup:function(){this.inherited(arguments)},_updateAnalysisLayerUI:function(a){this.inherited(arguments)},_buildJobParams:function(){var a=this.inherited(arguments);a.permutations=this.get("permutations");return a},_handleSaveBtnClick:function(){this.inherited(arguments)},_handleShowCreditsClick:function(a){this.inherited(arguments)},_handleAggAreaSelectChange:function(a){this.inherited(arguments)},_handleOptimizeSliderChange:function(a){a="Speed";1===this._optimizeSlider.get("value")?
a="Speed":5===this._optimizeSlider.get("value")?a="Balance":9===this._optimizeSlider.get("value")&&(a="Precision");this.set("permutations",a)},_handleFieldChange:function(a){this.inherited(arguments)},_setPermutationsAttr:function(a){this.permutations=a}});f("extend-esri")&&c.setObject("dijit.analysis.FindOutliers",b,g);return b});