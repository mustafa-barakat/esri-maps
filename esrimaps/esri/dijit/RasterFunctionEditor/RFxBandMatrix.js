// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/RasterFunctionEditor/RFxBandMatrix","dojo/_base/declare dojo/has ../../kernel dojo/_base/lang dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ./EditableGridMixin ./RFxGridBase".split(" "),function(e,h,k,f,l,m,n,p,q,g){e=e("RFxBandMatrix",[m,n,p,l,q],{templateString:"\x3cdiv\x3e\x3cdiv data-dojo-attach-point\x3d'bandMatrix'\x3e\x3c/div\x3e\x3c/div\x3e",baseClass:"esriRFxBandMatrix",nCols:0,displayNames:[],dataType:g.DATA_TYPES.double,_store:null,
_grid:null,refreshGrid:null,updateValue:null,hasIdColumn:!0,isExtensible:!0,postCreate:function(){this.inherited(arguments);this._initializeGrid();this._grid.on("grid-data-change",f.hitch(this,function(a){this._updateValue(a)}));this.refreshGrid=this._refreshGrid.bind(this);this.updateValue=this._updateValue.bind(this)},_initializeGrid:function(){var a=this._getGridSchema(),b=this._createDataObject(this.value);this._grid=new g({schema:a,data:b,hasIdColumn:this.hasIdColumn,isExtensible:this.isExtensible},
this.bandMatrix);this._grid.startup()},_getGridSchema:function(){var a=[];return a=this.displayNames.map(function(b,c){return{label:b,name:c+1,dataType:this.dataType}},this)},_createDataObject:function(){var a=[],b=f.clone(this._getProcessedValue?this._getProcessedValue():this.value);if(b)for(;b.length;){var c={};b.splice(0,this.nCols).forEach(function(d,r){c[r+1]=d});a.push(c)}return a},_updateValue:function(a){var b=[];a.forEach(function(c){"*"!==c.idNum&&Object.keys(c).forEach(function(d){d&&!isNaN(c[d])&&
"id"!==d&&"idNum"!==d&&b.push(c[d])})});this.value=this._createComplexValue?this._createComplexValue(b):b},_refreshGrid:function(){var a=this._createDataObject(this.value);this._grid.updateStoreValue(a)}});h("extend-esri")&&f.setObject("dijit.RasterFunctionEditor.RFxBandMatrix",e,k);return e});