// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/utils/InfographicJsonUtil",["esri/dijit/geoenrichment/config","esri/dijit/geoenrichment/utils/ArrayUtil"],function(g,h){var f={getDefaultLevels:function(){var a=g.levels.slice();a.push(g.highestLevel);return a},getLevels:function(a){a=a.levels&&a.levels.length?a.levels:f.getDefaultLevels();return h.removeDuplicates(a)},getSubLevels:function(a){a=f.getLevels(a);a.pop();return a},getHighestLevel:function(a){a=f.getLevels(a);return a[a.length-
1]},setLevels:function(a,b){b=h.removeDuplicates(b||[]);a.levels=b.length?b:f.getDefaultLevels()},getDataDrilling:function(a,b){"string"!==typeof b&&(b=(b=a.variableTables&&a.variableTables[b])&&b.variable.fieldInfo&&b.variable.fieldInfo.templateName);return a.dataDrilling&&a.dataDrilling[b]},setDataDrilling:function(a,b,d){b&&(a.dataDrilling=a.dataDrilling||{},d?a.dataDrilling[b]=d:delete a.dataDrilling[b])},validateDataDrilling:function(a){var b=a.dataDrilling;if(b){var d={};a.variableTables.forEach(function(c){c.variable&&
c.variable.fieldInfo&&c.variable.fieldInfo.templateName&&(d[c.variable.fieldInfo.templateName]=!0)});Object.keys(b).forEach(function(c){d[c]||delete b[c]})}},analyzeVariables:function(a){a=a.fieldInfos?a.fieldInfos.map(function(e){return e.fullName}):a.variables;if(1===a.length&&-1!==a[0].indexOf(".*"))return{dataCollectionID:a[0].substr(0,a[0].indexOf("."))};var b={},d,c;a.forEach(function(e,k){b[e.substr(0,e.indexOf("."))]=1;d=e.substr(e.indexOf(".")+1);c=e});return{dataCollectionID:1===Object.keys(b).length?
Object.keys(b)[0]:null,variableID:1===a.length?d:null,fullName:1===a.length?c:null}}};return f});