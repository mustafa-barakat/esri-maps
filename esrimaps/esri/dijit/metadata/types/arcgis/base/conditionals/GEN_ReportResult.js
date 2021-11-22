// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/base/conditionals/GEN_ReportResult","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/topic dojo/has ../../../../../../kernel dojo/i18n!../../../../nls/i18nArcGIS ../../../../base/Conditional ../../../../base/etc/docUtil".split(" "),function(e,l,h,k,m,n,p,q,r){e=e(q,{key:"GEN_ReportResult",postCreate:function(){this.inherited(arguments);var b=this;this.own(k.subscribe("gxe/interaction-occurred",function(a){try{b.parentXNode&&a&&a.inputWidget&&a.inputWidget.parentXNode&&
"/metadata/dqInfo/report/@type"===a.inputWidget.parentXNode.gxePath&&b.emitInteractionOccurred()}catch(c){console.error(c)}}));this.own(k.subscribe("gxe/optional-content-toggled",function(a){try{if(b.parentXNode&&a&&a.src&&a.src.target){var c=a.src.target;"ConResult"!==c&&"QuanResult"!==c||b.emitInteractionOccurred()}}catch(d){console.error(d)}}))},ensureFocus:function(){r.ensureVisibility(this.parentXNode);h.some(this.parentXNode.getChildren(),function(b){if(b._isGxeTabs)return h.some(b.getChildren(),
function(a){if(a.isResultSection)return b.ensureActiveTab(a),!0}),!0})},validateConditionals:function(b){var a=this.newStatus({message:p.conditionals[this.key]}),c=!0,d=this.parentXNode.domNode,f=!1;if(!this.isXNodeOff(this.parentXNode)){f=!0;if(this.parentXNode.gxeDocument.isAgsFGDC){var g=this.findInputValue("/metadata/dqInfo/report/@type",d);if("DQCompOm"===g||"DQConcConsis"===g)f=!1}this.parentXNode.gxeDocument.isAgsINSPIRE&&(g=this.findInputValue("/metadata/dqInfo/report/@type",d),"DQDomConsis"===
g&&(f=!1))}f&&(c=!1,this.forActiveXNodes("/metadata/dqInfo/report/measResult/ConResult,/metadata/dqInfo/report/measResult/QuanResult",d,function(t){return c=!0}));a.isValid=c;this.track(a,b);return a}});m("extend-esri")&&l.setObject("dijit.metadata.types.arcgis.base.conditionals.GEN_ReportResult",e,n);return e});