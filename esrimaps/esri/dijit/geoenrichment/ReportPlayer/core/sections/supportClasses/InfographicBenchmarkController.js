// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/sections/supportClasses/InfographicBenchmarkController",["dojo/_base/declare","esri/dijit/geoenrichment/utils/ColorUtil"],function(g,d){return g(null,{isVariableInShape:!1,iconTableIndex:-1,descTableIndex:-1,backgroundColor:null,_section:null,setSection:function(c){this._section=c},getIconTable:function(){return this._section.getTrueTables()[this.iconTableIndex]},getOutsideShapeTextColor:function(){var c=[],a=this.getIconTable().getFirstCell().content;
a.isShape&&(a=a.getShapeStyle(),a.fillColor&&(void 0===a.fillAlpha||.05<a.fillAlpha)&&c.push(a.fillColor),a.borderColor&&0<a.borderWidth&&(void 0===a.borderAlpha||.1<a.borderAlpha)&&c.push(a.borderColor));c.push(this._section.viewModel.getStaticInfographicDefaultStyles().variableLabelStyle.color);a=this._section.viewModel.getDocumentDefaultStyles();var e;[this.backgroundColor,a.backgroundColor].some(function(b){if(b&&!d.isTransparent(b))return e=b,!0});var f;c.some(function(b){if(b&&!d.isTransparent(b)&&
!d.colorsEqual(b,e))return f=b,!0});return f||a.color}})});