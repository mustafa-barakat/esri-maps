// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/map/layers/LayerInfoTemplateProvider",["esri/dijit/PopupTemplate","esri/dijit/geoenrichment/utils/FieldUtil"],function(f,c){return{provideInfoTemplate:function(b){if(b.fields&&b.fields.length){var d=[];b.fields.map(function(a){if(c.canShowField(a)&&a.alias){var e={fieldName:a.name,label:a.alias,visible:!0};if(a=c.isNumericField(a))e.format={digitSeparator:!0,places:"i"===a?0:2};d.push(e)}});b.infoTemplate=new f({title:b.name||"",fieldInfos:d})}}}});