// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/form/InputHtmlArea","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dijit/Dialog dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-style dojo/has ../../../../../kernel ../../../base/etc/docUtil ../../../base/xml/xmlUtil ../../../form/InputTextArea ../../../form/tools/ClickableTool ../../../editor/util/OkCancelBar dojo/i18n!../../../nls/i18nArcGIS dijit/Editor dijit/_editor/plugins/FontChoice dijit/_editor/plugins/TextColor dijit/_editor/plugins/ViewSource dijit/_editor/plugins/LinkDialog".split(" "),
function(h,q,l,C,r,k,m,g,D,t,u,n,v,w,x,y,z,A,E,F,G,H){h=h([w],{postCreate:function(){this.inherited(arguments);this._makeEditTool()},_makeEditTool:function(){var a=this;m.add(this.domNode,"gxeInputHtmlTextArea");var b=g.create("span",{},this.focusNode,"after");new x({label:z.htmlEditor.button,whenToolClicked:function(){a._openDialog()}},b)},_openDialog:function(){var a=this,b=null,f=this.parentXNode.label,c=this.getInputValue();null===c&&(c="");c=c.replace(/(\r\n|\r|\n|\n\r)/g,"\x3cbr /\x3e");var e=
g.create("div",{});var d=new A({plugins:["bold","italic","underline","foreColor","hiliteColor","|","justifyLeft","justifyCenter","justifyRight","justifyFull","|","insertOrderedList","insertUnorderedList","indent","outdent","createLink","unlink","removeFormat","|","undo","redo","|","viewsource",{name:"dijit._editor.plugins.FontChoice",command:"fontName",custom:"Arial;Courier New;Garamond;Tahoma;Times New Roman;Verdana".split(";")},{name:"dijit._editor.plugins.FontChoice",command:"fontSize",custom:["2",
"3","4","5","6"]}]},g.create("div",{},e));d.setValue(c);d.startup();var B=new y({onOkClick:function(){if(d){var p=d.get("value");null!==p&&(a.setInputValue(p),b&&b.hide())}},onCancelClick:function(){b&&b.hide()}},g.create("div",{},e));b=new r({"class":"gxeDialog gxePopupDialog gxeHtmlEditorDialog",title:f,content:e});a.isLeftToRight()||m.add(b.domNode,"gxeRtl");a.own(b.on("hide",function(){setTimeout(function(){d.destroyRecursive(!1);B.destroyRecursive(!1);b.destroyRecursive(!1)},300)}));b.show()},
getInputValue:function(){return this.focusNode?n.cleanHtml(this.focusNode.value):null},setInputValue:function(a){"undefined"===typeof a&&(a=null);a=n.cleanHtml(a);this.focusNode.value=a;this.emitInteractionOccurred();this.applyViewOnly()},setNodeText:function(a,b){if(a===this.viewOnlyNode)try{this._cleanForView(a,b)}catch(f){console.error(f)}else this.inherited(arguments)},_cleanForView:function(a,b){a=g.create("div",{},a,"last");a.innerHTML=b;this._walkForView(a)},_walkForView:function(a){var b,
f,c;if(a.nodeType===v.nodeTypes.ELEMENT_NODE){var e=a.localName;"undefined"!==typeof e&&null!==e&&(e=e.toLowerCase(),l.forEach(a.attributes,function(d){b=d.localName;"undefined"!==typeof b&&null!==b&&(f=b.toLowerCase(),0===f.indexOf("on")?k.set(a,b,null):"href"===f&&(c=d.nodeValue,"undefined"!==typeof c&&null!==c&&0===c.toLowerCase().indexOf("http")&&k.remove(a,b)))},this),"a"===e&&k.set(a,"target","_blank"),l.forEach(a.childNodes,function(d){this._walkForView(d)},this))}}});t("extend-esri")&&q.setObject("dijit.metadata.types.arcgis.form.InputHtmlArea",
h,u);return h});