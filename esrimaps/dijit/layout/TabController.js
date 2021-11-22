//>>built
require({cache:{"url:dijit/layout/templates/_TabButton.html":'\x3cdiv role\x3d"presentation" data-dojo-attach-point\x3d"titleNode,innerDiv,tabContent" class\x3d"dijitTabInner dijitTabContent"\x3e\r\n\t\x3cspan role\x3d"presentation" class\x3d"dijitInline dijitIcon dijitTabButtonIcon" data-dojo-attach-point\x3d"iconNode"\x3e\x3c/span\x3e\r\n\t\x3cspan data-dojo-attach-point\x3d\'containerNode,focusNode\' class\x3d\'tabLabel\'\x3e\x3c/span\x3e\r\n\t\x3cspan class\x3d"dijitInline dijitTabCloseButton dijitTabCloseIcon" data-dojo-attach-point\x3d\'closeNode\'\r\n\t\t  role\x3d"presentation"\x3e\r\n\t\t\x3cspan data-dojo-attach-point\x3d\'closeText\' class\x3d\'dijitTabCloseText\'\x3e[x]\x3c/span\r\n\t\t\t\t\x3e\x3c/span\x3e\r\n\x3c/div\x3e\r\n'}});
define("dijit/layout/TabController","dojo/_base/declare dojo/dom dojo/dom-attr dojo/dom-class dojo/has dojo/i18n dojo/_base/lang ./StackController ../registry ../Menu ../MenuItem dojo/text!./templates/_TabButton.html dojo/i18n!../nls/common".split(" "),function(b,m,e,f,k,g,n,l,p,q,r,c){c=b("dijit.layout._TabButton"+(k("dojo-bidi")?"_NoBidi":""),l.StackButton,{baseClass:"dijitTab",cssStateNodes:{closeNode:"dijitTabCloseButton"},templateString:c,_setNameAttr:"focusNode",scrollOnFocus:!1,buildRendering:function(){this.inherited(arguments);
m.setSelectable(this.containerNode,!1)},startup:function(){this.inherited(arguments);var a=this.domNode;this.defer(function(){a.className=a.className},1)},_setCloseButtonAttr:function(a){this._set("closeButton",a);f.toggle(this.domNode,"dijitClosable",a);this.closeNode.style.display=a?"":"none";a&&(a=g.getLocalization("dijit","common"),this.closeNode&&e.set(this.closeNode,"title",a.itemClose))},_setDisabledAttr:function(a){this.inherited(arguments);if(this.closeNode)if(a)e.remove(this.closeNode,"title");
else{var h=g.getLocalization("dijit","common");e.set(this.closeNode,"title",h.itemClose)}},_setLabelAttr:function(a){this.inherited(arguments);this.showLabel||this.params.title||(this.iconNode.alt=n.trim(this.containerNode.innerText||this.containerNode.textContent||""))}});k("dojo-bidi")&&(c=b("dijit.layout._TabButton",c,{_setLabelAttr:function(a){this.inherited(arguments);this.applyTextDir(this.iconNode,this.iconNode.alt)}}));b=b("dijit.layout.TabController",l,{baseClass:"dijitTabController",templateString:"\x3cdiv role\x3d'tablist' data-dojo-attach-event\x3d'onkeydown:onkeydown'\x3e\x3c/div\x3e",
tabPosition:"top",buttonWidget:c,buttonWidgetCloseClass:"dijitTabCloseButton",postCreate:function(){this.inherited(arguments);var a=new q({id:this.id+"_Menu",ownerDocument:this.ownerDocument,dir:this.dir,lang:this.lang,textDir:this.textDir,targetNodeIds:[this.domNode],selector:function(d){return f.contains(d,"dijitClosable")&&!f.contains(d,"dijitTabDisabled")}});this.own(a);var h=g.getLocalization("dijit","common"),t=this;a.addChild(new r({label:h.itemClose,ownerDocument:this.ownerDocument,dir:this.dir,
lang:this.lang,textDir:this.textDir,onClick:function(d){d=p.byNode(this.getParent().currentTarget);t.onCloseButtonClick(d.page)}}))}});b.TabButton=c;return b});