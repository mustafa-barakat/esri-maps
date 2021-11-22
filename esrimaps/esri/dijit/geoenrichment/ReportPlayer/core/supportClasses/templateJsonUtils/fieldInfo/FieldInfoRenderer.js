// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoRenderer",["../../../grid/coreUtils/GridDataUtil","./utils","./_FieldInfoPreviewRenderer","./_FieldInfoDataRenderer","dojo/i18n!esri/nls/jsapi"],function(r,h,k,n,d){function f(a,b){b=b||15;return!a||a.length<=b?a:a.substr(0,b-3)+"..."}var t=d.geoenrichment.dijit.ReportPlayer.ReportPlayer.missingVariable,u=d.geoenrichment.dijit.ReportPlayer.ReportPlayer.unsupportedContent;d=d.geoenrichment.dijit.ReportPlayer.VariableStates;
var e={},g={renderPreview:function(a,b){return b.fieldData?n.getValueFromFieldData(a,b):k.getValuePreview(a,b)},tryProvideConditionalStylePreview:function(a,b,c){a.isUnavailableData||a.conditionalStyle||c.fieldData||!(b=k.getConditionalStylePreview(b,c))||(a.conditionalStyle=c.previewConditionalStyle?b:!1)},tryProvideRangeFilterPreview:function(a,b){a.isUnavailableData||a.modifiedValue||b.fieldData||!b.presetFilter||(a.modifiedValue=k.getRangeFilterPreview(b))},tryProvideSortingPreview:function(a,
b){a.isUnavailableData||b.fieldData||!b.presetSorting||(a.modifiedValue=k.getSortingPreview(b))}},p={buildVariableLabel:function(a){if(a.isWebMap)var b=f(a.webMapFieldName)+"(WebMap)";else if(a.isSiteAttribute)b=f(a.alias)+"(SiteAttribute)";else if(a.isDataLayerAttribute)b=f(a.alias||a.attribute&&a.attribute.alias)+"(NearbyLocations)";else if(a.isCustomDataCollection)b=f(a.alias)+"(CustomData)";else a:{b=a.variableID;switch(a.statefulName&&a.statefulName.charAt(0).toLowerCase()){case "p":a=d.statePercent_short;
break;case "a":a=d.stateAverage_short;break;case "i":a=d.stateIndex_short;break;case "r":a=d.stateReliability_short;break;default:break a}b=b+" ("+a+")"}return"["+b+"]"},_SCRIPT_ALIAS_RE:/\s/g,buildScriptLabel:function(a){a=a.alias?a.alias.replace(p._SCRIPT_ALIAS_RE,""):h.name.renderScriptName(a.name);return"["+f(a,40)+"]"}},q={renderRichTextFieldInfoInTableCell:function(a,b){return h.richText.createRichTextFromFieldInfo(a,{getFieldInfoTagString:function(c){var l=e.renderFieldInfoInTableCell(c,b),
m=l.formattedValue;b&&b.isBenchmarked&&(c=b.getBenchmarkInfo(l.value,c))&&c.formattedValue&&(m+=" ("+(c.isGreater?"+":"-")+c.formattedValue+")");return m},getLinkFieldInfoTagString:function(c){return e.renderFieldInfoInTableCell(c,b).formattedValue},actualLink:!0})}};e.renderFieldInfoInTableCell=function(a,b){b=b||{};var c={formattedValue:null,value:null,formatFunction:null,isUnavailableData:!1,conditionalStyle:null,modifiedValue:null};if(a.isRichText)return c.formattedValue=q.renderRichTextFieldInfoInTableCell(a,
b),c;if(a.isMissing)return c.formattedValue=t,c.isUnavailableData=!0,c;if(a.isUnsupportedContent)return c.formattedValue=u,c.isUnavailableData=!0,c;if(b.previewValues){if(c=g.renderPreview(a,b),c.isUnavailableData)return c}else c.formattedValue=a.hasVariable?p.buildVariableLabel(a):a.script?p.buildScriptLabel(a.script):"["+("Name"===a.alias?"Title":a.alias)+"]";if(r.isVariableLikeFieldCell(a)&&(g.tryProvideConditionalStylePreview(c,a,b),g.tryProvideRangeFilterPreview(c,b),g.tryProvideSortingPreview(c,
b),c.formattedValue=h.format.providePercentCurrencySymbols(c.formattedValue,a,{placePercentCurrencyInFront:!b.previewValues}),c.formatFunction)){var l=c.formatFunction;c.formatFunction=function(m){return h.format.providePercentCurrencySymbols(l(m),a,{placePercentCurrencyInFront:!b.previewValues})};c.conditionalStyle&&(c.conditionalStyle.formattedValue=c.formatFunction(c.conditionalStyle.value));c.modifiedValue&&(c.modifiedValue.formattedValue=c.formatFunction(c.modifiedValue.value))}return c};e.getConditionalStylePreview=
function(a,b){var c={};g.tryProvideConditionalStylePreview(c,a,{cell:b,rowIndex:b.row&&b.row.index,previewConditionalStyle:!0});return c.conditionalStyle};e.renderRichTextFieldInfoInTableCell=q.renderRichTextFieldInfoInTableCell;e.getValueFromFieldData=n.getValueFromFieldData;e.getFieldDataValue=n.getFieldDataValue;return e});