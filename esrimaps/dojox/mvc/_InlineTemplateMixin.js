//>>built
define("dojox/mvc/_InlineTemplateMixin",["dojo/_base/declare","dojo/_base/lang","dojo/has"],function(e,f,c){c.add("dom-qsa",!!document.createElement("div").querySelectorAll);return e("dojox.mvc._InlineTemplateMixin",null,{buildRendering:function(){var a=this.srcNodeRef;if(a){a=c("dom-qsa")?a.querySelectorAll("script[type\x3d'dojox/mvc/InlineTemplate']"):a.getElementsByTagName("script");for(var d=[],b=0,g=a.length;b<g;++b)(c("dom-qsa")||"dojox/mvc/InlineTemplate"==a[b].getAttribute("type"))&&d.push(a[b].innerHTML);
if(a=f.trim(d.join("")))this.templateString=a}this.inherited(arguments)}})});