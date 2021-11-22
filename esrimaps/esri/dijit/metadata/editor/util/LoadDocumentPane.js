// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/editor/util/templates/LoadDocumentPane.html":'\x3cdiv class\x3d"gxePrimaryPane gxeLoadDocumentPane" data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv class\x3d"gxePrompt" data-dojo-attach-point\x3d"promptNode" style\x3d"display:none"\x3e\x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"gxeTabs" data-dojo-attach-point\x3d"tabsNode"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/base/TabButton" data-dojo-attach-point\x3d"fileTab"\r\n      data-dojo-props\x3d"xtnMode:\'file\',label:\'${i18nBase.editor.load.fileTab}\'"\r\n      data-dojo-attach-event\x3d"onClick: _onFileTabClick"\x3e\r\n    \x3c/div\x3e\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/base/TabButton" data-dojo-attach-point\x3d"typeTab"\r\n      data-dojo-props\x3d"xtnMode:\'type\',label:\'${i18nBase.editor.load.typeTab}\'"\r\n      data-dojo-attach-event\x3d"onClick: _onTypeTabClick"\x3e\r\n    \x3c/div\x3e\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/base/TabButton" data-dojo-attach-point\x3d"itemTab"\r\n      data-dojo-props\x3d"xtnMode:\'item\',label:\'${i18nBase.editor.load.itemTab}\'"\r\n      data-dojo-attach-event\x3d"onClick: _onItemTabClick"\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"gxeSection" data-dojo-attach-point\x3d"fileSection"\x3e\r\n    \x3cdiv class\x3d"gxePrompt" data-dojo-attach-point\x3d"filePrompt"\x3e${i18nBase.editor.load.filePrompt}\x3c/div\x3e\r\n    \x3cdiv class\x3d"gxePrompt" data-dojo-attach-point\x3d"astCheckBoxSection"\x3e\r\n      \x3cinput id\x3d"${id}_astcbx" type\x3d"checkbox" data-dojo-attach-point\x3d"astCheckBoxNode" /\x3e\r\n      \x3clabel for\x3d"${id}_astcbx"  data-dojo-attach-point\x3d"labelNode"\x3e${i18nBase.editor.load.pullItem}\x3c/label\x3e\r\n    \x3c/div\x3e\r\n     \x3cdiv class\x3d"gxeInputFileContainer" data-dojo-attach-point\x3d"importNode"\x3e\x3c/div\x3e\r\n     \x3cdiv class\x3d"gxeLine gxeWarningSection" style\x3d"display:none"\r\n      data-dojo-attach-point\x3d"importWarningSection" \x3e\r\n      \x3cdiv class\x3d"gxeIconWarning"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"gxeWarning" data-dojo-attach-point\x3d"importWarningNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"gxeSection" data-dojo-attach-point\x3d"typesSection"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"typesNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"gxeSection" data-dojo-attach-point\x3d"itemSection"\x3e\r\n    \x3cdiv class\x3d"gxeClickableText gxeLine" data-dojo-attach-point\x3d"pullItemNode"\r\n      data-dojo-attach-event\x3d"onClick: _onPullItemClick"\x3e${i18nBase.editor.load.pullItem}\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/metadata/editor/util/LoadDocumentPane","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/aspect dojo/dom-class dojo/dom-construct dojo/dom-style dojo/has ../../base/xml/xmlUtil ../../base/xml/XmlInterrogator ../../base/Templated dojo/text!./templates/LoadDocumentPane.html dojo/i18n!../../nls/i18nBase ../../base/TabButton ../../../../kernel".split(" "),function(g,h,l,n,m,k,c,p,q,r,t,u,e,w,v){g=g([t],{_escapeSingleQuotes:!0,_inputFileNode:null,_working:!1,arcgisMode:!0,editor:null,
dialogBroker:null,prompt:null,templateString:u,postCreate:function(){this.inherited(arguments);this.fileSection.xtnAsTemplate=!1;this.editor&&(this.arcgisMode=this.editor.gxeContext.arcgisMode,"string"===typeof this.editor.gxeContext.filePromptText&&(this.filePrompt.innerHTML=this.editor.gxeContext.filePromptText),"string"===typeof this.editor.gxeContext.asTemplateText&&(this.labelNode.innerHTML=this.editor.gxeContext.asTemplateText));this._initialize()},onSelect:function(a,b,d){},onSelectPullItem:function(){},
_addBrowseButton:function(){var a=k.create("div",{},this.importNode);this._inputFileNode=k.create("input",{"class":"gxeLine",type:"file",onchange:h.hitch(this,function(b){this._loadXmlFile(b)})},a)},_addDocType:function(a){var b=k.create("div",{},this.typesNode);b=k.create("div",{"class":"gxeClickableText gxeLine",onclick:h.hitch(this,function(){this._working||this._loadDocType(a)})},b);this.arcgisMode?this.setI18nNodeText(b,e.editor.load.templatePrompt):this.setI18nNodeText(b,a.caption)},_initialize:function(){null!==
this.prompt&&(this.setI18nNodeText(this.promptNode,this.prompt),this.promptNode.style.display="");var a=this.editor.getEditDocument(),b=window&&window.FileReader;a=a&&this.editor.gxeAdaptor.getAllowPullItem();var d=this.editor.gxeContext.filterDocumentTypes();this._setMode("file");l.forEach(d,function(f){this._addDocType(f)},this);b?this._addBrowseButton():c.set(this.fileTab.domNode,"display","none");a||c.set(this.itemTab.domNode,"display","none");this.arcgisMode&&c.set(this.typeTab.domNode,"display",
"none");c.set(this.itemTab.domNode,"display","none");this.astCheckBoxNode.checked=!1;try{this.astCheckBoxSection.style.display="block",this.editor&&this.arcgisMode&&!this.editor.gxeAdaptor.portalItemContext&&(this.astCheckBoxSection.style.display="none")}catch(f){console.error(f)}},_loadDocType:function(a){if(!this._working)this.onSelect(a,null,!1)},_loadXmlFile:function(a){this.importWarningNode.innerHTML="";this.importWarningSection.style.display="none";if(a&&a.target&&a.target.files&&FileReader){var b=
null;(a=a.target.files)&&1===a.length&&(b=a[0]);b&&(this._showMessage(e.editor.load.loading),a=new FileReader,this.own(n.after(a,"onload",h.hitch(this,function(d){d&&d.target&&d.target.result?this._working||(this._showMessage(e.editor.load.loading),this._parseAndLoad(d.target.result)):this._showUnrecognizedXml(e.editor.load.warnings.badFile)}),!0)),a.readAsText(b))}},_onFileTabClick:function(a){this._working||this._setMode(a.xtnMode)},_onItemTabClick:function(a){this._working||this._setMode(a.xtnMode)},
_onPullItemClick:function(){if(!this._working)this.onSelectPullItem()},_onTemplateTabClick:function(a){this._working||this._setMode(a.xtnMode)},_onTypeTabClick:function(a){this._working||this._setMode(a.xtnMode)},_parseAndLoad:function(a){var b=null;try{b=q.parseFromString(a)}catch(f){console.error(f);this._showUnrecognizedXml(e.editor.load.warnings.badFile);return}a=this.editor.gxeContext.filterDocumentTypes();a=(new r).interrogate(b,a);var d=this.astCheckBoxNode.checked&&!0;if(a)this.onSelect(a,
b,d);else this._showUnrecognizedXml(e.editor.load.warnings.notSupported)},_setMode:function(a){l.forEach([this.typeTab,this.fileTab,this.itemTab],function(b){a===b.xtnMode?m.add(b.domNode,"current"):m.remove(b.domNode,"current")});this.fileSection.xtnAsTemplate="template"===a;"type"===a?(c.set(this.fileSection,"display","none"),c.set(this.itemSection,"display","none"),c.set(this.typesSection,"display","")):"item"===a?(c.set(this.typesSection,"display","none"),c.set(this.fileSection,"display","none"),
c.set(this.itemSection,"display","")):(c.set(this.typesSection,"display","none"),c.set(this.itemSection,"display","none"),c.set(this.fileSection,"display",""))},_showMessage:function(a){if(this.dialogBroker){var b=this.dialogBroker.okCancelBar;b&&b.showWorking(a)}},_showUnrecognizedXml:function(a){this.arcgisMode?this.setNodeText(this.importWarningNode,e.editor.load.importWarning):this.setNodeText(this.importWarningNode,a);this.importWarningSection.style.display="block";this.dialogBroker&&this.dialogBroker.okCancelBar&&
this.dialogBroker.okCancelBar.hideWorking()}});p("extend-esri")&&h.setObject("dijit.metadata.editor.util.LoadDocumentPane",g,v);return g});