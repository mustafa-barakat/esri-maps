// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/RasterFunctionEditor/templates/RFxNeighborhoodValues.html":'\x3cdiv class\x3d"esriRFxNeighborhoodValues esriRFxMatrix"\x3e\r\n  \x3ctable\x3e\r\n    \x3ctr class\x3d"esriRFxArgsEditor__tr--arg-name"\x3e\r\n      \x3ctd data-dojo-attach-point\x3d"neighborhoodLabel"\x3e\x3c/td\x3e\r\n    \x3c/tr\x3e\r\n    \x3ctr class\x3d"esriRFxArgsEditor__tr--arg-widget"\x3e\r\n      \x3ctd\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"gridDiv"\x3e\x3c/div\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n  \x3c/table\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/RasterFunctionEditor/RFxNeighborhoodValues","dojo/_base/declare dojo/has dojo/text!./templates/RFxNeighborhoodValues.html dojo/i18n!../../nls/jsapi ../../kernel dojo/_base/lang dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ./SimpleMatrixCreator".split(" "),function(b,e,f,g,h,k,l,m,n,p){b=b("RFxNeighborhoodValues",[l,m,n,p],{templateString:f,declaredClass:"esri.dijit.RasterFunctionEditor.RFxNeighborhoodValues",constructor:function(){this.inherited(arguments);
this._i18n=g.widgets.rasterFunctionEditor},postCreate:function(){this.inherited(arguments);this._setLabels();this._getInfo();this._info&&this._initializeGrid();this._setupTriggerArgs()},_setupTriggerArgs:function(){this.triggerArgs.Width.input.on("change",this._onWidthValueChange.bind(this));this.triggerArgs.Height.input.on("change",this._onHeightValueChange.bind(this))},_getInfo:function(){this._info={};if(this.inputArgs&&this.inputArgs.NeighborhoodValues&&this.inputArgs.NeighborhoodValues.value.length){var a=
this.inputArgs.NeighborhoodValues.value;var c=this.triggerArgs.Width.value;var d=this.triggerArgs.Height.value}else c=d=3;this._info.columns=c;this._info.rows=d;this._info.value=a},_updateValue:function(a){this.inputArgs.NeighborhoodValues.value=this._getValueFromGridData(a)},_onWidthValueChange:function(a){this._info&&(!a||0>=a?this.triggerArgs.Width.input.set("displayedValue",this._info.columns):(this._info.columns=a,this._onGridSizeChange(),this.inputArgs.NeighborhoodValues.value=this._info.value))},
_onHeightValueChange:function(a){this._info&&(!a||0>=a?this.triggerArgs.Height.input.set("displayedValue",this._info.rows):(this._info.rows=a,this._onGridSizeChange(),this.inputArgs.NeighborhoodValues.value=this._info.value))},_setLabels:function(){this.inputArgs&&this.inputArgs.NeighborhoodValues&&(this.neighborhoodLabel.innerHTML=this.inputArgs.NeighborhoodValues.displayName)}});e("extend-esri")&&k.setObject("dijit.RasterFunctionEditor.RFxNeighborhoodValues",b,h);return b});