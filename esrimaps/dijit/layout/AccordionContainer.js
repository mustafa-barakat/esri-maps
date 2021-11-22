//>>built
require({cache:{"url:dijit/layout/templates/AccordionButton.html":"\x3cdiv data-dojo-attach-event\x3d'ondijitclick:_onTitleClick' class\x3d'dijitAccordionTitle' role\x3d\"presentation\"\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d'titleNode,focusNode' data-dojo-attach-event\x3d'onkeydown:_onTitleKeyDown'\r\n\t\t\tclass\x3d'dijitAccordionTitleFocus' role\x3d\"tab\" aria-expanded\x3d\"false\"\r\n\t\t\x3e\x3cspan class\x3d'dijitInline dijitAccordionArrow' role\x3d\"presentation\"\x3e\x3c/span\r\n\t\t\x3e\x3cspan class\x3d'arrowTextUp' role\x3d\"presentation\"\x3e+\x3c/span\r\n\t\t\x3e\x3cspan class\x3d'arrowTextDown' role\x3d\"presentation\"\x3e-\x3c/span\r\n\t\t\x3e\x3cspan role\x3d\"presentation\" class\x3d\"dijitInline dijitIcon\" data-dojo-attach-point\x3d\"iconNode\"\x3e\x3c/span\x3e\r\n\t\t\x3cspan role\x3d\"presentation\" data-dojo-attach-point\x3d'titleTextNode, textDirNode' class\x3d'dijitAccordionText'\x3e\x3c/span\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e\r\n"}});
define("dijit/layout/AccordionContainer","require dojo/_base/array dojo/_base/declare dojo/_base/fx dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/keys dojo/_base/lang dojo/sniff dojo/topic ../focus ../_base/manager dojo/ready ../_Widget ../_Container ../_TemplatedMixin ../_CssStateMixin ./StackContainer ./ContentPane dojo/text!./templates/AccordionButton.html ../a11yclick".split(" "),function(A,r,g,B,C,t,D,m,f,h,n,p,u,E,F,G,x,K,H,y,I,L,J){function z(a,b){a.resize?
a.resize(b):f.setMarginBox(a.domNode,b)}u=g("dijit.layout._AccordionButton",[x,H,y],{templateString:J,label:"",_setLabelAttr:{node:"titleTextNode",type:"innerHTML"},title:"",_setTitleAttr:{node:"titleTextNode",type:"attribute",attribute:"title"},iconClassAttr:"",_setIconClassAttr:{node:"iconNode",type:"class"},baseClass:"dijitAccordionTitle",getParent:function(){return this.parent},buildRendering:function(){this.inherited(arguments);var a=this.id.replace(" ","_");t.set(this.titleTextNode,"id",a+"_title");
this.focusNode.setAttribute("aria-labelledby",t.get(this.titleTextNode,"id"));C.setSelectable(this.domNode,!1)},getTitleHeight:function(){return f.getMarginSize(this.domNode).h},_onTitleClick:function(){this.getParent().selectChild(this.contentWidget,!0);E.focus(this.focusNode)},_onTitleKeyDown:function(a){return this.getParent()._onKeyDown(a,this.contentWidget)},_setSelectedAttr:function(a){this._set("selected",a);this.focusNode.setAttribute("aria-expanded",a?"true":"false");this.focusNode.setAttribute("aria-selected",
a?"true":"false");this.focusNode.setAttribute("tabIndex",a?"0":"-1")}});p("dojo-bidi")&&u.extend({_setLabelAttr:function(a){this._set("label",a);t.set(this.titleTextNode,"innerHTML",a);this.applyTextDir(this.titleTextNode)},_setTitleAttr:function(a){this._set("title",a);t.set(this.titleTextNode,"title",a);this.applyTextDir(this.titleTextNode)}});var v=g("dijit.layout._AccordionInnerContainer"+(p("dojo-bidi")?"_NoBidi":""),[x,y],{baseClass:"dijitAccordionInnerContainer",isLayoutContainer:!0,buildRendering:function(){this.domNode=
m.place("\x3cdiv class\x3d'"+this.baseClass+"' role\x3d'presentation'\x3e",this.contentWidget.domNode,"after");var a=this.contentWidget,b=n.isString(this.buttonWidget)?n.getObject(this.buttonWidget):this.buttonWidget;this.button=a._buttonWidget=(new b({contentWidget:a,label:a.title,title:a.tooltip,dir:a.dir,lang:a.lang,textDir:a.textDir||this.textDir,iconClass:a.iconClass,id:a.id+"_button",parent:this.parent})).placeAt(this.domNode);this.containerNode=m.place("\x3cdiv class\x3d'dijitAccordionChildWrapper' role\x3d'tabpanel' style\x3d'display:none'\x3e",
this.domNode);this.containerNode.setAttribute("aria-labelledby",this.button.id);m.place(this.contentWidget.domNode,this.containerNode)},postCreate:function(){this.inherited(arguments);var a=this.button,b=this.contentWidget;this._contentWidgetWatches=[b.watch("title",n.hitch(this,function(c,d,e){a.set("label",e)})),b.watch("tooltip",n.hitch(this,function(c,d,e){a.set("title",e)})),b.watch("iconClass",n.hitch(this,function(c,d,e){a.set("iconClass",e)}))]},_setSelectedAttr:function(a){this._set("selected",
a);this.button.set("selected",a);if(a&&(a=this.contentWidget,a.onSelected))a.onSelected()},startup:function(){this.contentWidget.startup()},destroy:function(){this.button.destroyRecursive();r.forEach(this._contentWidgetWatches||[],function(a){a.unwatch()});delete this.contentWidget._buttonWidget;delete this.contentWidget._wrapperWidget;this.inherited(arguments)},destroyDescendants:function(a){this.contentWidget.destroyRecursive(a)}});p("dojo-bidi")&&(v=g("dijit.layout._AccordionInnerContainer",v,
{postCreate:function(){this.inherited(arguments);var a=this.button;this._contentWidgetWatches.push(this.contentWidget.watch("textDir",function(b,c,d){a.set("textDir",d)}))}}));g=g("dijit.layout.AccordionContainer",I,{duration:F.defaultDuration,buttonWidget:u,baseClass:"dijitAccordionContainer",buildRendering:function(){this.inherited(arguments);this.domNode.style.overflow="hidden";this.domNode.setAttribute("role","tablist")},startup:function(){this._started||(this.inherited(arguments),this.selectedChildWidget&&
this.selectedChildWidget._wrapperWidget.set("selected",!0))},layout:function(){var a=this.selectedChildWidget;if(a){var b=a._wrapperWidget.domNode,c=f.getMarginExtents(b);b=f.getPadBorderExtents(b);var d=a._wrapperWidget.containerNode,e=f.getMarginExtents(d);d=f.getPadBorderExtents(d);var q=this._contentBox,k=0;r.forEach(this.getChildren(),function(l){l!=a&&(k+=f.getMarginSize(l._wrapperWidget.domNode).h)});this._verticalSpace=q.h-k-c.h-b.h-e.h-d.h-a._buttonWidget.getTitleHeight();this._containerContentBox=
{h:this._verticalSpace,w:this._contentBox.w-c.w-b.w-e.w-d.w};a&&z(a,this._containerContentBox)}},_setupChild:function(a){a._wrapperWidget=v({contentWidget:a,buttonWidget:this.buttonWidget,id:a.id+"_wrapper",dir:a.dir,lang:a.lang,textDir:a.textDir||this.textDir,parent:this});this.inherited(arguments);m.place(a.domNode,a._wrapper,"replace")},removeChild:function(a){a._wrapperWidget&&(m.place(a.domNode,a._wrapperWidget.domNode,"after"),a._wrapperWidget.destroy(),delete a._wrapperWidget);D.remove(a.domNode,
"dijitHidden");this.inherited(arguments)},getChildren:function(){return r.map(this.inherited(arguments),function(a){return"dijit.layout._AccordionInnerContainer"==a.declaredClass?a.contentWidget:a},this)},destroy:function(){this._animation&&this._animation.stop();r.forEach(this.getChildren(),function(a){a._wrapperWidget?a._wrapperWidget.destroy():a.destroyRecursive()});this.inherited(arguments)},_showChild:function(a){a._wrapperWidget.containerNode.style.display="block";return this.inherited(arguments)},
_hideChild:function(a){a._wrapperWidget.containerNode.style.display="none";this.inherited(arguments)},_transition:function(a,b,c){8>p("ie")&&(c=!1);this._animation&&(this._animation.stop(!0),delete this._animation);var d=this;if(a){a._wrapperWidget.set("selected",!0);var e=this._showChild(a);this.doLayout&&z(a,this._containerContentBox)}b&&(b._wrapperWidget.set("selected",!1),c||this._hideChild(b));if(c){var q=a._wrapperWidget.containerNode,k=b._wrapperWidget.containerNode;c=a._wrapperWidget.containerNode;
a=f.getMarginExtents(c);c=f.getPadBorderExtents(c);var l=a.h+c.h;k.style.height=d._verticalSpace-l+"px";this._animation=new B.Animation({node:q,duration:this.duration,curve:[1,this._verticalSpace-l-1],onAnimate:function(w){w=Math.floor(w);q.style.height=w+"px";k.style.height=d._verticalSpace-l-w+"px"},onEnd:function(){delete d._animation;q.style.height="auto";b._wrapperWidget.containerNode.style.display="none";k.style.height="auto";d._hideChild(b)}});this._animation.onStop=this._animation.onEnd;this._animation.play()}return e},
_onKeyDown:function(a,b){if(!this.disabled&&!a.altKey&&(b||a.ctrlKey)){var c=a.keyCode;if(b&&(c==h.LEFT_ARROW||c==h.UP_ARROW)||a.ctrlKey&&c==h.PAGE_UP)this._adjacent(!1)._buttonWidget._onTitleClick(),a.stopPropagation(),a.preventDefault();else if(b&&(c==h.RIGHT_ARROW||c==h.DOWN_ARROW)||a.ctrlKey&&(c==h.PAGE_DOWN||c==h.TAB))this._adjacent(!0)._buttonWidget._onTitleClick(),a.stopPropagation(),a.preventDefault()}}});p("dijit-legacy-requires")&&G(0,function(){A(["dijit/layout/AccordionPane"])});g._InnerContainer=
v;g._Button=u;return g});