// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/RasterFunctionEditor/templates/RFxFilteredArgumentEditor.html":'\x3cdiv\x3e\r\n  \x3ctable class\x3d"esri-rfx-args-editor__table"\x3e\r\n    \x3ctr class\x3d"esri-rfx-args-editor__tr--arg-name esri-rfx-pixel-type-filter"\x3e\r\n      \x3ctd data-dojo-attach-point\x3d"fieldLabel" data-key\x3d"factorFunction"\x3e\x3c/td\x3e\r\n    \x3c/tr\x3e\r\n    \x3ctr class\x3d"esri-rfx-args-editor__tr--arg-widget esri-rfx-pixel-type-filter"\x3e\r\n      \x3ctd\x3e\r\n        \x3cselect dojoType\x3d"dijit.form.Select" data-dojo-attach-point\x3d"_templateNode" declaredClass\x3d"RFxFilteredArgumentEditor"\x3e\x3c/select\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n  \x3c/table\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/RasterFunctionEditor/RFxFilteredArgumentEditor","dojo/_base/declare dojo/_base/lang dojo/has dojo/_base/array dojo/store/Memory dojo/data/ObjectStore dojo/i18n!../../nls/jsapi dojo/text!./templates/RFxFilteredArgumentEditor.html dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ../../kernel".split(" "),function(h,k,l,f,m,n,p,q,r,t,u,v){h=h("RFxFilteredArgumentEditor",[r,t,u],{widgetsInTemplate:!0,templateString:q,declaredClass:"esri.widgets.ToolModeler.RasterFunctionEditor.ArgumentEditors.RFxFilteredArgumentEditor",
storeType:"string",constructor:function(){this.inherited(arguments);this._i18n=p.rasterFunctionEditor},postCreate:function(){this.inherited(arguments);this._setLabels();this._initializeVariables();this._setInitialDropDownState();this._initializeAttributes();this._checkForFilters();this._attachTriggerArgsChangeListener();this._attachInputArgChangeListener()},_initializeVariables:function(){this.initialStore=[];this._pixelTypeFilters={};this._valueFilters={}},_getPersistedValue:function(){var a;Object.keys(this.inputArgs).forEach(function(b){a=
this.inputArgs[b].value}.bind(this));return a},_setInputArgValue:function(a){Object.keys(this.inputArgs).forEach(function(b){this.inputArgs[b].value="number"===this.storeType?Number(a):a}.bind(this));this.emit("change",{value:a})},_getFunctionName:function(a){return a.ToolName?a.ToolName.value.replace("_sa",""):a.type.replace("Arguments","")},_isRasterTypeFloat:function(a){return a&&0<=a.toLocaleLowerCase().indexOf("f")},_setStore:function(a){if(!this._isStoreDataSame(a)){var b=this._createObjectStore(a,
"key");this._templateNode.set("store",b);this.currentStoreData=a;b=a[0]&&a[0].key;var c=this._getPersistedValue();"number"===this.storeType&&(c=c.toString());c&&f.some(a,function(d){return d.key===c})&&(b=c);this._templateNode.set("value",b);this._setInputArgValue(b)}},_createObjectStore:function(a,b){return new n(new m({data:a,idProperty:b}))},_setLabels:function(){this.inputArgs&&f.forEach(Object.keys(this.inputArgs),function(a){a=this.inputArgs[a];this.fieldLabel.innerHTML=a.displayName;a.input=
this._templateNode}.bind(this))},_setInitialDropDownState:function(){var a=this._getFunctionName(this.rfxArgs),b=(a=this.rasterFunctions[a])&&a.rasterFunctionArguments;f.forEach(Object.keys(this.inputArgs),function(c){(c=b[c].domain)&&"list"===c.type&&(this.initialStore=k.clone(this.rasterFunctionEnums[c.enum]))},this);this.storeType=typeof this.initialStore[0].key;f.forEach(this.initialStore,function(c){c.key=c.key.toString()});this.initialStore||console.error("Domain list Enum not set! Check Schema");
this._setStore(this.initialStore)},_initializeAttributes:function(){this.triggerAttributes.trim().split(";").forEach(function(a){var b=a.trim().split(":");a=b[0];b=b[1].trim().split(",");var c={};c.dependFieldName=b[0];c.dependFieldValue=b[1].trim().split("|");c.filteredValue=b[2].trim().split("|");c.isApplied=!1;switch(a){case "pixelType":this._pixelTypeFilters[c.dependFieldName]=c;break;case "value":this._valueFilters[c.dependFieldName]=c}}.bind(this))},_attachInputArgChangeListener:function(){this._templateNode.on("change",
this._handleInputArgChange.bind(this))},_handleInputArgChange:function(a){this._setInputArgValue(a)},_attachTriggerArgsChangeListener:function(){f.forEach(Object.keys(this.triggerArgs),function(a){if(this.triggerArgs[a].input)this.triggerArgs[a].input.on("change",this._checkForFilters.bind(this))},this)},_checkForFilters:function(){Object.keys(this.triggerArgs).forEach(function(a){var b=this.triggerArgs[a].input,c=b?b.value:this.triggerArgs[a].value;if(this._pixelTypeFilters.hasOwnProperty(a)){var d=
this._pixelTypeFilters[a];d.isApplied=!1;if(c){var e=b.getSelectedLayer(c.name);e&&e.loaded?this._isRasterTypeFloat(e.pixelType)&&(d.isApplied=!0,this.applyFilter()):e&&e.on("load",function(g){e=g.layer?g.layer:g;this._isRasterTypeFloat(e.pixelType)&&(d.isApplied=!0,this.applyFilter())}.bind(this))}}this._valueFilters.hasOwnProperty(a)&&(a=this._valueFilters[a],a.isApplied=!1,a.dependFieldValue.some(function(g){return c===g})&&(a.isApplied=!0,this.applyFilter()))}.bind(this));this.applyFilter()},
applyFilter:function(){var a=this.initialStore;Object.keys(this._pixelTypeFilters).forEach(function(b){b=this._pixelTypeFilters[b];b.isApplied&&(a=this._getFilteredStore(a,b.filteredValue))}.bind(this));Object.keys(this._valueFilters).forEach(function(b){b=this._valueFilters[b];b.isApplied&&(a=this._getFilteredStore(a,b.filteredValue))}.bind(this));this._setStore(a)},_getFilteredStore:function(a,b){return a.filter(function(c){return b.some(function(d){return c.key===d})})},_isStoreDataSame:function(a){var b=
!0;if(!this.currentStoreData||a.length!==this.currentStoreData.length)return!1;a.forEach(function(c,d){c.key!==this.currentStoreData[d].key&&(b=!1)}.bind(this));return b}});l("extend-esri")&&k.setObject("dijit.RasterFunctionEditor.RFxFilteredArgumentEditor",h,v);return h});