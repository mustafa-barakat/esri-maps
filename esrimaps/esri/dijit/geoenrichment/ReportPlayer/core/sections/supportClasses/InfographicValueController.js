// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/sections/supportClasses/InfographicValueController",["dojo/_base/declare","../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoRenderer","../../supportClasses/conditionalStyling/ConditionalStyleUtil"],function(p,m,n){function q(a){var b=-Infinity;a.forEach(function(d){b=Math.max(b,d)});return b}return p(null,{_sections:null,_variableTables:null,constructor:function(){this._sections=[]},_samplePercentValues:[52,30,18,90,70,100],setVariableTables:function(a){this._variableTables=
a},addSection:function(a){this._sections.push(a)},getValueInfo:function(a,b){b=b||{};var d=!a.viewModel.dynamicReportInfo;a=this._sections.indexOf(a);var c=this._variableTables[a],e=c.variable.fieldInfo;b.fieldInfo=b.fieldInfo||e;e=!1;c.description&&c.description.fieldInfo&&c.description.fieldInfo.templateName===b.fieldInfo.templateName&&(e=!0);c=this._getValueAt(a,b,a,d);if(e||c.isStandAlone)return this._enrichWithConditionalColor(c.value,b);e=c.value.value;if(c.shapeJson.useRange){a=c.shapeJson.rangeMin;
c=c.shapeJson.rangeMax;if("number"!==typeof a||"number"!==typeof c||c<=a)return this._enrichWithConditionalColor({value:0,percent:0},b);d&&(e=a+.62123*(c-a));return this._enrichWithConditionalColor({value:e,percent:e,normalizedValue:(e-a)/(c-a)},b)}var g=[];this._getValues(b,a,d).forEach(function(f){f.shapeJson&&!f.shapeJson.useRange&&(f.shapeJson.showAsBar||f.shapeJson.scaleByValue)&&g.push(f.value.value)});c=q(g);return this._enrichWithConditionalColor({value:e,percent:e,normalizedValue:e/c},b)},
_enrichWithConditionalColor:function(a,b){null!=a.value&&b.fieldInfo.triggerJson&&(a.conditionalStyling=n.getConditionalStyle(a.value,b.fieldInfo.triggerJson));return a},_getValues:function(a,b,d){return this._variableTables.map(function(c,e){return this._getValueAt(e,a,b,d)},this)},_getValueAt:function(a,b,d,c){return c?this._getSampleValueAt(a,b,d):this._getRealValueAt(a,b,d)},_getRealValueAt:function(a,b,d){var c=this._variableTables[a],e=this._sections[0],g=a===d?b.fieldInfo:c.variable.fieldInfo,
f="number"===typeof b.currentFeatureIndex?b.currentFeatureIndex:e.currentFeatureIndex,h=b.currentFeatureAttributes||e.currentFeatureAttributes,k=c.shape&&c.shape.shapeJson,r=!k||!k.showAsBar&&!k.scaleByValue,l=void 0;a===d&&b.sectionPreviewValueFunction&&(a=b.sectionPreviewValueFunction(b))&&(l=a);void 0===l&&(l={value:m.getFieldDataValue(g,{fieldData:e.viewModel.dynamicReportInfo.fieldData,featureIndex:f,featureAttributes:h})});return{value:l,variable:c.variable,shapeJson:k,isStandAlone:r}},_getSampleValueAt:function(a,
b,d){var c=this._variableTables[a],e=a===d?b.fieldInfo:c.variable.fieldInfo,g=c.shape&&c.shape.shapeJson,f=!g||!g.showAsBar&&!g.scaleByValue,h=void 0;e.triggerJson?(d=n.getStatistics(e.triggerJson))&&(h={value:d.min+(d.max-d.min)/2}):a===d&&b.sectionPreviewValueFunction&&(d=b.sectionPreviewValueFunction(b))&&(h=d);void 0===h&&(h=f?m.renderFieldInfoInTableCell(b.fieldInfo,{previewValues:!0}):{value:this._samplePercentValues[a]||this._samplePercentValues[0]});return{value:h,variable:c.variable,shapeJson:g,
isStandAlone:f}}})});