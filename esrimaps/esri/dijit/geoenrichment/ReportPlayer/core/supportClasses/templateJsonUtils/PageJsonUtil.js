// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/PageJsonUtil",["dojo/_base/lang","../DocumentOptions"],function(m,n){return{getGraphicReportEmptyPageJson:function(b){function h(a){var e=m.mixin(n.getDefaultDocumentOptions(),b.documentOptions);if(!a){a=[];for(var c=0;c<b.numColumns;c++)a.push({field:"field"+c,style:{}});c=[];for(var f=0;f<b.numRows;f++)c.push({style:{},fieldInfos:{}});a=[{style:{},columns:a,rows:c}]}return{documentOptions:e,sectionsTables:a}}b=b||
{};b.numRows=b.numRows||3;b.numColumns=b.numColumns||2;if(b.jsonToCopy){var d=b.jsonToCopy;d=d.sectionsTables[d.sectionsTables.length-1];if(!d)return h();var k={style:{}};k.columns=d.columns.map(function(a){return{field:a.field,style:{width:a.style.width}}});k.rows=d.rows.map(function(a){var e=a.style.fields;if(e){var c={};for(var f in e){var g=e[f],l=c[f]={};g.width&&(l.width=g.width);g.height&&(l.height=g.height)}}return{rowSpans:a.rowSpans&&JSON.parse(JSON.stringify(a.rowSpans)),columnSpans:a.columnSpans&&
JSON.parse(JSON.stringify(a.columnSpans)),style:{height:a.style.height,fields:c}}});return h([k])}return h()}}});