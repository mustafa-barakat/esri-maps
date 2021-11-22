// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/GridCellRenderer","dojo/_base/declare dojo/_base/lang dojo/aspect esri/dijit/geoenrichment/ReportPlayer/config esri/dijit/geoenrichment/utils/ObjectUtil esri/dijit/geoenrichment/utils/WaitingUtil ./GridDataUtil ./GridStyleUtil ./GridCellContentScaler ./GridCellContentSynchronizer ../../supportClasses/conditionalStyling/ConditionalStyleUtil ../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoRenderer esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ElementUsageTypes esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/SpecificViewModes ./GridQueryUtil ./tooltip/GridCellTooltipBuilder ../../../_devConfig".split(" "),
function(A,E,F,B,G,w,h,H,C,I,y,z,J,K,n,x,D,L,M){function p(a){var b=a.parentGrid;return a[b.hasRealBorders||b.isMultiDataTable()?"getContentWidth":"getWidth"]()}function q(a){var b=a.parentGrid;return a[b.hasRealBorders||b.isMultiDataTable()?"getContentHeight":"getHeight"]()}var N={color:"#FF0000"},O={color:"#AAAAAA",fontStyle:"italic",fontSize:13,horizontalAlign:"center",verticalAlign:"middle"},v=A(null,{_parentState:null,constructor:function(a,b,c){var e=this;C.fitContentInsideCell(a);this._setParentState(a);
c.forEach(function(d){var f=d[1];b.own(F.after(a,d[0],function(){e._checkParentChanged(f,a)&&(C.fitContentInsideCell(a,{sync:!0}),I.syncParentFieldInfoWithElementState(a,b))}))})},_setParentState:function(a){var b=a.getFullStyle();this._parentState={width:p(a),height:q(a),horizontalAlign:b.horizontalAlign,verticalAlign:b.verticalAlign}},_checkParentChanged:function(a,b){switch(a){case "width":a=p(b);if(this._parentState.width!==a){this._parentState.width=a;var c=!0}break;case "height":a=q(b);this._parentState.height!==
a&&(this._parentState.height=a,c=!0);break;case "horizontalAlign":case "verticalAlign":if(a=b.getFullStyle(),this._parentState.horizontalAlign!==a.horizontalAlign||this._parentState.verticalAlign!==a.verticalAlign)this._parentState.horizontalAlign=a.horizontalAlign,this._parentState.verticalAlign=a.verticalAlign,c=!0}return c}});return A(null,{renderCells:function(a,b){var c=this,e=a[0]&&a[0].parentGrid,d=e&&e.getViewMode()!==n.EDIT&&e.viewModel.dynamicReportInfo&&e.viewModel.dynamicReportInfo.fieldData,
f={},k=[];a.forEach(function(g){b.cellPreRenderer&&b.cellPreRenderer(g);var l=d&&h.getConditionalFormatting(g);l&&l.groupId?(f[l.groupId]=f[l.groupId]||[]).push({cell:g,content:h.isImageCell(g)?c._getImageCellConditionalValueFromData(g):c._getRenderedContent(g)}):k.push(g)});k.forEach(function(g){var l=c.renderCellContent(g);l&&l.then&&b.addToQueue(l);b.cellPostRenderer&&b.cellPostRenderer(g)});var r=function(g,l){h.isImageCell(g)?(l=c._placeImageInCell(g.parentGrid,g,l))&&l.then&&b.addToQueue(l):
c._applyRenderedContent(g,l);b.cellPostRenderer&&b.cellPostRenderer(g)},t;for(t in f){var m=f[t].filter(function(g){if("number"===typeof g.content.value)return!0;r(g.cell,g.content);return!1});if(m.length){var u=y.getConditionalStylesOrFileNamesForGroup(h.getConditionalFormatting(m[0].cell),m.map(function(g){return g.content.value}),h.isImageCell(m[0].cell));u.styles.forEach(function(g,l){l=m[l];"string"===typeof g?l.content.conditionalStyle.fileName=g:l.content.conditionalStyle.style=g;l.content.conditionalStyle.stats=
u.stats;r(l.cell,l.content)})}}},renderCellContent:function(a){var b=a.parentGrid,c=h.getFieldInfo(a);if(M.emulateErrors.reportContainerRenderError)throw Error("Error test: something crashed when building the UI layout!");try{if(c){if(c.isReportSection)return this._placeReportSectionInCell(b,a);if(c.isInfographic)return this._placeInfographicInCell(b,a);if(c.isChart)return this._placeChartInCell(b,a);if(c.isMap)return this._placeMapInCell(b,a);if(c.isImage)return this._placeImageInCell(b,a);if(c.isShape)return this._placeShapeInCell(b,
a);c.isMissing&&a.setStyle(N);c.isUnsupportedContent&&a.setStyle(O)}this._applyRenderedContent(a,this._getRenderedContent(a));a.setContent(null)}catch(e){if(console.log(e),!B.tables.leaveEmptyCellsUponError)throw e;}},_renderCellTooltip:function(a){a.viewModel.dynamicReportInfo&&!B.isPlayerOnServer&&L.setDynamicTooltipToCell(a,a.viewModel.dynamicReportInfo.templateVariableProvider)},updateViewMode:function(a,b){a.__viewMode!==b&&(b=h.getFieldInfo(a))&&(b.hasVariable||b.script||b.alias||b.isRichText)&&
this._applyRenderedContent(a,this._getRenderedContent(a))},getRenderedContent:function(a){return this._getRenderedContent(a)},_getRenderedContent:function(a,b){var c=h.getFieldInfo(a);if(c)return a=this._prepareRenderContextForFieldCell(a),E.mixin(a,b),c.isImage&&c.triggerJson&&c.triggerJson.fieldInfo&&(c=c.triggerJson.fieldInfo),z.renderFieldInfoInTableCell(c,a);b=a.row[a.column.field];return{formattedValue:null===b||void 0===b||"number"===typeof b&&isNaN(b)?"":b,value:b,formatFunction:null,isUnavailableData:!1,
conditionalStyle:null}},_prepareRenderContextForFieldCell:function(a){var b=a.parentGrid,c=b.getViewMode()===n.EDIT,e=this._getCellBenchmarkInfoBuilder(a);return{previewValues:this._isPreviewValues(a),previewConditionalStyle:!c,getPreviewValueFunction:b.getPreviewValueFunction,fieldData:b.viewModel.dynamicReportInfo&&b.viewModel.dynamicReportInfo.fieldData,currentFeatureIndex:b.getFeatureIndexForCell(a),currentFeatureAttributes:b.currentFeatureAttributes,cell:a,rowIndex:a.row&&a.row.index,columnIndex:a.column&&
a.column.index,columnField:a.column&&a.column.field,numRows:b.rows.length,isGraphicReport:b.viewModel.isGraphicStyle(),isMultiFeature:b.viewModel.dynamicReportInfo&&b.viewModel.dynamicReportInfo.isMultiFeature,presetFilter:!c&&b.presetFilter,presetSorting:!c&&b.presetSorting,isBenchmarked:!!e,getBenchmarkInfo:e&&e.getBenchmarkInfo}},_isPreviewValues:function(a){var b=a.parentGrid;a=h.getFieldInfo(a);var c=b.getSpecificViewMode();b=b.getViewMode()===n.PREVIEW_VALUES;a&&a.name&&0===a.name.indexOf("SiteNote")&&
(b=!0);c&&a&&(c[x.RICH_TEXT]===n.PREVIEW_VALUES&&a.isRichText?b=!0:c[x.VARIABLE]===n.PREVIEW_VALUES&&h.isVariableLikeFieldCell(a)?b=!0:c[x.SPECIAL]===n.PREVIEW_VALUES&&h.isSpecialFieldCell(a)?b=!0:c[x.INFOGRAPHIC]===n.PREVIEW_VALUES&&a.isInfographic&&(b=!0));return b},_applyRenderedContent:function(a,b){b&&(a.__viewMode=a.parentGrid.getViewMode(),this._setCellFormattedValue(a,b),b.isUnavailableData||("number"!==typeof b.value||isNaN(b.value)||(h.setNumericCellValue(a,b.value),a.setNumberValue(b.value,
b.formatFunction,a.parentGrid.enableNumberAnimation)),b.conditionalStyle?(h.setCellGroupStyleStats(a,b.conditionalStyle.stats),a.setStyle(b.conditionalStyle.style),"string"===typeof b.conditionalStyle.formattedValue&&this._setCellFormattedValue(a,b.conditionalStyle),a.appliedConditionalStyle=b.conditionalStyle.style):!1===b.conditionalStyle||a.appliedConditionalStyle?(a.appliedConditionalStyle=void 0,a.setStyle(H.combineCellStyle(a.parentGrid,a.row,a.column))):b.modifiedValue&&"string"===typeof b.modifiedValue.formattedValue&&
this._setCellFormattedValue(a,b.modifiedValue)),a.parentGrid&&a.parentGrid.viewModel.dynamicReportInfo&&a.setUrl(h.getFieldCellUrl(a)),this._renderCellTooltip(a))},_setCellFormattedValue:function(a,b){if("number"===typeof b.value&&!isNaN(b.value)){var c=this._getCellBenchmarkInfoBuilder(a);c&&a.setBenchmarkInfo(c.getBenchmarkInfo(b.value))}h.setFieldCellContent(a,b.formattedValue)},_getCellBenchmarkInfoBuilder:function(a){var b=this,c=a.parentGrid;return c.viewModel.isBenchmarkedArea&&c.viewModel.isBenchmarkedArea(c.getFeatureIndexForCell(a))&&
{isBenchmarked:!0,getBenchmarkInfo:function(e,d){var f=a;d&&(f={row:{fieldInfos:{}},column:a.column,parentGrid:c},f.row.fieldInfos[f.column.field]=d);d=b._getRenderedContent(f,{currentFeatureIndex:c.viewModel.getBenchmarkController().getAreaIndex()});f=e-d.value;return{ownValue:e,isGreater:0<=f,value:Math.abs(f),formattedValue:d.formatFunction?d.formatFunction(Math.abs(f)):G.formatNumber(Math.abs(f)),noTextLimit:c.viewModel.getBenchmarkController().hasNoTextLimit()}}}},_placeReportSectionInCell:function(a,
b){function c(){if(b.domNode)return e._createReportSectionFromParams(a,b,d)}var e=this,d={"class":"adjustableGrid_inCellSection"};d.json=h.getFieldInfo(b).sectionJson;d.viewModel=a.viewModel;d.theme=a.theme;d.viewPortContainer=a.viewPortContainer;d.parentWidget=b;d.currentFeatureIndex=a.getFeatureIndexForCell(b);d.currentFeatureAttributes=a.currentFeatureAttributes;d.initialWidth=p(b);d.initialHeight=q(b);d.noContentOffset=D.cellHasFloatingTableParent(b);d.initialViewMode=a.getViewMode();d.parentGridCell=
b;d.elementUsageType=(a.isReportContainerPageGrid||a.parentGrid&&a.parentGrid.isReportContainerPageGrid)&&K.PAGE_PANEL_SECTION;var f=a.viewModel.layoutBuilder.getClass("section");return f.isAsync?w.showProgressPromise(b.domNode,f.loadModules()).then(c):c()},_createReportSectionFromParams:function(a,b,c){a=c.json&&c.json.stack&&c.json.type!==J.EMPTY?a.viewModel.layoutBuilder.createElement("section",c,b.getContentContainerNode()):a.viewModel.layoutBuilder.createElement("emptySection",c,b.getContentContainerNode());
b.setContent(a);new v(b,a,[["onWidthChanged","width"],["onHeightChanged","height"]]);return a},_placeInfographicInCell:function(a,b){function c(){if(b.domNode)return e._createInfographicFromParams(a,b,d)}var e=this,d={json:h.getFieldInfo(b).infographicJson,viewModel:a.viewModel,theme:a.theme,parentWidget:b,currentFeatureIndex:a.getFeatureIndexForCell(b),currentFeatureAttributes:a.currentFeatureAttributes,getPreviewValueFunction:a.getPreviewValueFunction,width:p(b),height:q(b),adjustElementsWhenResized:D.cellHasFloatingTableParent(b)},
f=a.viewModel.layoutBuilder.getClass("infographic");return f.isAsync?w.showProgressPromise(b.domNode,f.loadModules()).then(c):c()},_createInfographicFromParams:function(a,b,c){c=a.viewModel.layoutBuilder.createElement("infographic",{node:b.getContentContainerNode(),placeFunc:function(e){b.setContent(e)},creationParams:c});c.setViewMode&&c.setViewMode(a.getViewMode());new v(b,c,[["onWidthChanged","width"],["onHeightChanged","height"]]);return c},_placeChartInCell:function(a,b){function c(){if(b.domNode)return e._createChartPageFromParams(a,
b,f)}var e=this,d=h.getFieldInfo(b).chartJson;d.visualProperties.width=b.getWidth();d.visualProperties.height=b.getHeight();var f={json:d,viewModel:a.viewModel,theme:a.theme,currentFeatureIndex:a.getFeatureIndexForCell(b),currentFeatureAttributes:a.currentFeatureAttributes,parentWidget:b};d=a.viewModel.layoutBuilder.getClass("chart");return d.isAsync?w.showProgressPromise(b.domNode,d.loadModules()).then(c):c()},_createChartPageFromParams:function(a,b,c){a=a.viewModel.layoutBuilder.createElement("chart",
{node:b.getContentContainerNode(),placeFunc:function(e){b.setContent(e)},creationParams:c});new v(b,a,[["onWidthChanged","width"],["onHeightChanged","height"]]);return a},_placeMapInCell:function(a,b){function c(){if(b.domNode)return d=e._createMapFromParams(a,b,f)}var e=this,d,f={json:h.getFieldInfo(b).mapJson,viewModel:a.viewModel,theme:a.theme,parentWidget:b,currentFeatureIndex:a.getFeatureIndexForCell(b),currentFeatureAttributes:a.currentFeatureAttributes},k=a.viewModel.layoutBuilder.getClass("map");
return k.isAsync?w.showProgressPromise(b.domNode,k.loadModules()).then(c):c()},_createMapFromParams:function(a,b,c){a=a.viewModel.layoutBuilder.createElement("map",{node:b.getContentContainerNode(),placeFunc:function(e){b.setContent(e)},creationParams:c});new v(b,a,[["onWidthChanged","width"],["onHeightChanged","height"],["setStyle","horizontalAlign"]]);return a},_placeImageInCell:function(a,b,c){function e(){if(b.domNode)return u=d._createImageFromParams(a,b,g),d._renderCellTooltip(b),u.getRenderPromise().then(function(){b.domNode&&
u.resize({w:p(b),h:q(b)},b.getFullStyle())}),u}var d=this,f=h.getFieldInfo(b),k=f.imageJson,r=p(b),t=q(b);if(f.triggerJson)if(a.viewModel.dynamicReportInfo)c=c||this._getImageCellConditionalValueFromData(b),k.fileName=c.conditionalStyle.fileName||k.fileName,c.isUnavailableData||"number"!==typeof c.value||isNaN(c.value)||(h.setNumericCellValue(b,c.value),h.setCellGroupStyleStats(b,c.conditionalStyle.stats),b.setNumberValue(c.value,c.formatFunction,!1));else if(c=z.getConditionalStylePreview(f,b)){var m=
"number"===typeof c.value&&!isNaN(c.value);k.fileName=c.fileName||y.getConditionalFileName(m?c.value:"first-non-default",f.triggerJson)||k.fileName;m&&h.setNumericCellValue(b,c.value);h.setCellGroupStyleStats(b,c.stats)}k.style.width&&k.style.height&&!1!==k.ownSizeInsideParent&&Math.round(k.style.width)!==Math.round(r)&&Math.round(k.style.height)!==Math.round(t)?k.ownSizeInsideParent=!0:(k.ownSizeInsideParent=!1,k.style.width=r,k.style.height=t);var u,g={json:k,viewModel:a.viewModel,theme:a.theme,
parentWidget:b,currentFeatureIndex:a.getFeatureIndexForCell(b),currentFeatureAttributes:a.currentFeatureAttributes,alignParams:b.getFullStyle(),imageTriggerJson:f.triggerJson};f=a.viewModel.layoutBuilder.getClass("image");return f.isAsync?f.loadModules().then(e):e()},_getImageCellConditionalValueFromData:function(a){var b=a.parentGrid,c=h.getFieldInfo(a);a=z.getValueFromFieldData(c.triggerJson.fieldInfo,{fieldData:b.viewModel.dynamicReportInfo.fieldData,currentFeatureIndex:b.getFeatureIndexForCell(a),
currentFeatureAttributes:b.currentFeatureAttributes});a.conditionalStyle={fileName:y.getConditionalFileName(a.value,c.triggerJson)};return a},_createImageFromParams:function(a,b,c){a=a.viewModel.layoutBuilder.createElement("image",{node:b.getContentContainerNode(),placeFunc:function(e){b.setContent(e)},creationParams:c});new v(b,a,[["onWidthChanged","width"],["onHeightChanged","height"],["setStyle","horizontalAlign"]]);return a},_placeShapeInCell:function(a,b){function c(){if(b.domNode)return r=e._createShapeFromParams(a,
b,t)}var e=this,d=h.getFieldInfo(b).shapeJson,f=p(b),k=q(b);d.style.width=f;d.style.height=k;var r,t={json:d,viewModel:a.viewModel,theme:a.theme,parentWidget:b,currentFeatureIndex:a.getFeatureIndexForCell(b),currentFeatureAttributes:a.currentFeatureAttributes,alignParams:b.getFullStyle(),getPreviewValueFunction:a.getPreviewValueFunction,applyThemeStyle:a.applyThemeStyle};d=a.viewModel.layoutBuilder.getClass("shape");return d.isAsync?d.loadModules().then(c):c()},_createShapeFromParams:function(a,b,
c){a=a.viewModel.layoutBuilder.createElement("shape",{node:b.getContentContainerNode(),placeFunc:function(e){b.setContent(e)},creationParams:c});new v(b,a,[["onWidthChanged","width"],["onHeightChanged","height"],["setStyle","horizontalAlign"]]);return a}})});