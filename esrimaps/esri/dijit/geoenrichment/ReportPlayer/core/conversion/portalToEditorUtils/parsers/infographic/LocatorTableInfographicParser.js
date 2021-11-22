// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/portalToEditorUtils/parsers/infographic/LocatorTableInfographicParser","../../../../sections/SectionTypes ../../../ConversionUtil ../_FieldInfoBuilder esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoNameUtil esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoFormatUtil esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder".split(" "),
function(f,m,r,t,u,v){return{portalToEditor:function(a,b){var n,g,p,h,q;a.tags.forEach(function(c){c.attributes.type===f.INFOGRAPHIC_HEADER?n=c:c.attributes.type===f.INFOGRAPHIC_SUMMARY||c.attributes.type===f.INFOGRAPHIC_SUMMARY2?(h=h||c,c.attributes.type=f.INFOGRAPHIC_SUMMARY):c.attributes.type===f.INFOGRAPHIC_SUMMARY_FOOTER?q=c:c.attributes.query&&(g?p=c:g=c)});var k=b.templateJson.metadata.locatorCalculatorsHash[p.attributes.query];if(!k||!k.isValid)return null;var d=a.attributes.summarizeFractionField;
if("string"===typeof d){var l=t.getTemplateNameParts(d);l=l.calcName&&l.calcName!==k.calculatorName?r.getCalculatorOrScriptFieldInfo(d,b):d}if(d=h&&b.parsers.getParser("section").parseSection(h,b)){var e=d.stack[0];e=e.rows[0].fieldInfos[e.columns[0].field].infographicJson.variableTables[0];if("LocatorSummary"!==e.variable.fieldInfo.name){var w=u.buildFormatStringFromObject(e.variable.fieldInfo);e.variable.fieldInfo=v.createFieldInfoFromSpecialFieldName("LOCATORSUMMARY",w)}}return{type:a.attributes.type,
calculatorName:g.attributes.query,locatorCalculatorInfo:k,style:{width:m.ptToPx(a.attributes.width),height:m.ptToPx(a.attributes.height),padding:a.attributes.padding?m.ptToPx(a.attributes.padding):void 0,backgroundColor:a.attributes.backgroundColor},titleSectionJson:n&&b.parsers.getParser("section").parseSection(n,b),scaleToFitHeight:a.attributes.scaleToFitHeight,showNumberOfLocations:a.attributes.showNumberOfLocations,headerSectionJson:b.parsers.getParser("section").parseSection(g,b),dataSectionJson:b.parsers.getParser("section").parseSection(p,
b),summaryFooterSectionJson:q&&b.parsers.getParser("section").parseSection(q,b),summaryFooterFields:a.attributes.summaryFooterFields&&a.attributes.summaryFooterFields.split(";"),showAsSummary:a.attributes.showAsSummary,summarizeField:a.attributes.summarizeField,summarizeType:a.attributes.summarizeByAverage?"average":a.attributes.summarizeType,summarizeFractionField:l,summarizeMultiplier:Number(a.attributes.summarizeMultiplier)||null,summarySectionJson:d}}}});