// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/editor/util/DownloadXmlDialog","dojo/_base/declare dojo/_base/lang dojo/aspect dojo/dom-class dojo/dom-construct dojo/has dijit/_WidgetBase dojo/i18n!../../nls/i18nBase dijit/Dialog ./OkCancelBar ../../base/etc/docUtil ../../../../kernel".split(" "),function(c,a,n,p,d,q,r,l,t,u,v,w){c=c([r],{dialog:null,dialogTitle:l.editor.download.dialogTitle,postCreate:function(){this.inherited(arguments)},show:function(h,b){var x=b+".xml";h=new Blob([h],{type:"text/xml"});b=d.create("div",
{});var e=d.create("div",{"class":"gxePrimaryPane gxeDownloadPane"},b),k=d.create("a",{"class":"gxeClickableText gxeBold gxeLine",onclick:a.hitch(this,function(){this.dialog&&this.dialog.hide()})},e);v.setNodeText(k,l.editor.download.prompt);e=new FileReader;this.own(n.after(e,"onload",a.hitch(this,function(f){var m=null;f&&f.target&&f.target.result&&(m=f.target.result,k.href=m,k.download=x)}),!0));e.readAsDataURL(h);var y=new u({showOk:!1,onCancelClick:a.hitch(this,function(){this.dialog&&this.dialog.hide()})},
d.create("div",{},b)),g=this.dialog=new t({"class":"gxeDialog  gxePopupDialog",title:this.dialogTitle,content:b});this.isLeftToRight()||p.add(g.domNode,"gxeRtl");this.own(g.on("hide",a.hitch(this,function(){setTimeout(a.hitch(this,function(){y.destroyRecursive(!1);g.destroyRecursive(!1);this.destroyRecursive(!1)}),300)})));g.show()}});q("extend-esri")&&a.setObject("dijit.metadata.editor.util.DownloadXmlDialog",c,w);return c});