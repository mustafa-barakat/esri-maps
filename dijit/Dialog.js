//>>built
require({cache:{"url:dijit/templates/Dialog.html":'\x3cdiv class\x3d"dijitDialog" role\x3d"dialog" aria-labelledby\x3d"${id}_title"\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"titleBar" class\x3d"dijitDialogTitleBar"\x3e\r\n\t\t\x3cspan data-dojo-attach-point\x3d"titleNode" class\x3d"dijitDialogTitle" id\x3d"${id}_title"\r\n\t\t\t\trole\x3d"heading" level\x3d"1"\x3e\x3c/span\x3e\r\n\t\t\x3cspan data-dojo-attach-point\x3d"closeButtonNode" class\x3d"dijitDialogCloseIcon" data-dojo-attach-event\x3d"ondijitclick: onCancel" title\x3d"${buttonCancel}" role\x3d"button" tabindex\x3d"-1"\x3e\r\n\t\t\t\x3cspan data-dojo-attach-point\x3d"closeText" class\x3d"closeText" title\x3d"${buttonCancel}"\x3ex\x3c/span\x3e\r\n\t\t\x3c/span\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"containerNode" class\x3d"dijitDialogPaneContent"\x3e\x3c/div\x3e\r\n\t${!actionBarTemplate}\r\n\x3c/div\x3e\r\n\r\n'}});
define("dijit/Dialog","require dojo/_base/array dojo/aspect dojo/_base/declare dojo/Deferred dojo/dom dojo/dom-class dojo/dom-geometry dojo/dom-style dojo/_base/fx dojo/i18n dojo/keys dojo/_base/lang dojo/on dojo/ready dojo/sniff dojo/touch dojo/window dojo/dnd/Moveable dojo/dnd/TimedMoveable ./focus ./_base/manager ./_Widget ./_TemplatedMixin ./_CssStateMixin ./form/_FormMixin ./_DialogMixin ./DialogUnderlay ./layout/ContentPane ./layout/utils dojo/text!./templates/Dialog.html ./a11yclick dojo/i18n!./nls/common".split(" "),
function(F,m,t,u,v,G,w,g,n,B,H,C,e,x,I,p,J,r,K,L,f,h,S,M,N,O,P,y,Q,z,R){function D(){}var A=new v;A.resolve(!0);h=u("dijit._DialogBase"+(p("dojo-bidi")?"_NoBidi":""),[M,O,P,N],{templateString:R,baseClass:"dijitDialog",cssStateNodes:{closeButtonNode:"dijitDialogCloseIcon"},_setTitleAttr:{node:"titleNode",type:"innerHTML"},open:!1,duration:h.defaultDuration,refocus:!0,autofocus:!0,_firstFocusItem:null,_lastFocusItem:null,draggable:!0,_setDraggableAttr:function(a){this._set("draggable",a)},maxRatio:.9,
closable:!0,_setClosableAttr:function(a){this.closeButtonNode.style.display=a?"":"none";this._set("closable",a)},postMixInProperties:function(){var a=H.getLocalization("dijit","common");e.mixin(this,a);this.inherited(arguments)},postCreate:function(){n.set(this.domNode,{display:"none",position:"absolute"});this.ownerDocumentBody.appendChild(this.domNode);this.inherited(arguments);t.after(this,"onExecute",e.hitch(this,"hide"),!0);t.after(this,"onCancel",e.hitch(this,"hide"),!0);x(this.closeButtonNode,
J.press,function(a){a.stopPropagation()});this._modalconnects=[]},onLoad:function(){this.resize();this._position();this.autofocus&&k.isTop(this)&&(this._getFocusItems(),f.focus(this._firstFocusItem));this.inherited(arguments)},focus:function(){this._getFocusItems();f.focus(this._firstFocusItem)},_endDrag:function(){var a=g.position(this.domNode),b=r.getBox(this.ownerDocument);a.y=Math.min(Math.max(a.y,0),b.h-a.h);a.x=Math.min(Math.max(a.x,0),b.w-a.w);this._relativePosition=a;this._position()},_setup:function(){var a=
this.domNode;this.titleBar&&this.draggable?(this._moveable=new (6==p("ie")?L:K)(a,{handle:this.titleBar}),t.after(this._moveable,"onMoveStop",e.hitch(this,"_endDrag"),!0)):w.add(a,"dijitDialogFixed");this.underlayAttrs={dialogId:this.id,"class":m.map(this["class"].split(/\s/),function(b){return b+"_underlay"}).join(" "),_onKeyDown:e.hitch(this,"_onKey"),ownerDocument:this.ownerDocument}},_size:function(){this.resize()},_position:function(){if(!w.contains(this.ownerDocumentBody,"dojoMove")){var a=
this.domNode,b=r.getBox(this.ownerDocument),c=this._relativePosition,l=g.position(a);n.set(a,{left:Math.floor(b.l+(c?Math.min(c.x,b.w-l.w):(b.w-l.w)/2))+"px",top:Math.floor(b.t+(c?Math.min(c.y,b.h-l.h):(b.h-l.h)/2))+"px"})}},_onKey:function(a){if(a.keyCode==C.TAB){this._getFocusItems();var b=a.target;this._firstFocusItem==this._lastFocusItem?(a.stopPropagation(),a.preventDefault()):b==this._firstFocusItem&&a.shiftKey?(f.focus(this._lastFocusItem),a.stopPropagation(),a.preventDefault()):b!=this._lastFocusItem||
a.shiftKey||(f.focus(this._firstFocusItem),a.stopPropagation(),a.preventDefault())}else this.closable&&a.keyCode==C.ESCAPE&&(this.onCancel(),a.stopPropagation(),a.preventDefault())},show:function(){if(this.open)return A.promise;this._started||this.startup();this._alreadyInitialized||(this._setup(),this._alreadyInitialized=!0);this._fadeOutDeferred&&(this._fadeOutDeferred.cancel(),k.hide(this));var a=r.get(this.ownerDocument);this._modalconnects.push(x(a,"scroll",e.hitch(this,"resize",null)));this._modalconnects.push(x(this.domNode,
"keydown",e.hitch(this,"_onKey")));n.set(this.domNode,{opacity:0,display:""});this._set("open",!0);this._onShow();this.resize();this._position();this._fadeInDeferred=new v(e.hitch(this,function(){b.stop();delete this._fadeInDeferred}));this._fadeInDeferred.then(void 0,D);a=this._fadeInDeferred.promise;var b=B.fadeIn({node:this.domNode,duration:this.duration,beforeBegin:e.hitch(this,function(){k.show(this,this.underlayAttrs)}),onEnd:e.hitch(this,function(){this.autofocus&&k.isTop(this)&&(this._getFocusItems(),
f.focus(this._firstFocusItem));this._fadeInDeferred.resolve(!0);delete this._fadeInDeferred})}).play();return a},hide:function(){if(!this._alreadyInitialized||!this.open)return A.promise;this._fadeInDeferred&&this._fadeInDeferred.cancel();this._fadeOutDeferred=new v(e.hitch(this,function(){b.stop();delete this._fadeOutDeferred}));this._fadeOutDeferred.then(void 0,D);this._fadeOutDeferred.then(e.hitch(this,"onHide"));var a=this._fadeOutDeferred.promise;var b=B.fadeOut({node:this.domNode,duration:this.duration,
onEnd:e.hitch(this,function(){this.domNode.style.display="none";k.hide(this);this._fadeOutDeferred.resolve(!0);delete this._fadeOutDeferred})}).play();this._scrollConnected&&(this._scrollConnected=!1);for(var c;c=this._modalconnects.pop();)c.remove();this._relativePosition&&delete this._relativePosition;this._set("open",!1);return a},resize:function(a){if("none"!=this.domNode.style.display){this._checkIfSingleChild();if(!a){this._shrunk&&(this._singleChild&&"undefined"!=typeof this._singleChildOriginalStyle&&
(this._singleChild.domNode.style.cssText=this._singleChildOriginalStyle,delete this._singleChildOriginalStyle),m.forEach([this.domNode,this.containerNode,this.titleBar,this.actionBarNode],function(E){E&&n.set(E,{position:"static",width:"auto",height:"auto"})}),this.domNode.style.position="absolute");var b=r.getBox(this.ownerDocument);b.w*=this.maxRatio;b.h*=this.maxRatio;var c=g.position(this.domNode);this._shrunk=!1;c.w>=b.w&&(a={w:b.w},g.setMarginBox(this.domNode,a),c=g.position(this.domNode),this._shrunk=
!0);c.h>=b.h&&(a||(a={w:c.w}),a.h=b.h,this._shrunk=!0);a&&(a.w||(a.w=c.w),a.h||(a.h=c.h))}if(a){g.setMarginBox(this.domNode,a);b=[];this.titleBar&&b.push({domNode:this.titleBar,region:"top"});this.actionBarNode&&b.push({domNode:this.actionBarNode,region:"bottom"});c={domNode:this.containerNode,region:"center"};b.push(c);var l=z.marginBox2contentBox(this.domNode,a);z.layoutChildren(this.domNode,l,b);this._singleChild?(b=z.marginBox2contentBox(this.containerNode,c),this._singleChild.resize({w:b.w,h:b.h})):
(this.containerNode.style.overflow="auto",this._layoutChildren())}else this._layoutChildren();p("touch")||a||this._position()}},_layoutChildren:function(){m.forEach(this.getChildren(),function(a){a.resize&&a.resize()})},destroy:function(){this._fadeInDeferred&&this._fadeInDeferred.cancel();this._fadeOutDeferred&&this._fadeOutDeferred.cancel();this._moveable&&this._moveable.destroy();for(var a;a=this._modalconnects.pop();)a.remove();k.hide(this);this.inherited(arguments)}});p("dojo-bidi")&&(h=u("dijit._DialogBase",
h,{_setTitleAttr:function(a){this._set("title",a);this.titleNode.innerHTML=a;this.applyTextDir(this.titleNode)},_setTextDirAttr:function(a){this._created&&this.textDir!=a&&(this._set("textDir",a),this.set("title",this.title))}}));var q=u("dijit.Dialog",[Q,h],{});q._DialogBase=h;var k=q._DialogLevelManager={_beginZIndex:950,show:function(a,b){d[d.length-1].focus=f.curNode;var c=d[d.length-1].dialog?d[d.length-1].zIndex+2:q._DialogLevelManager._beginZIndex;n.set(a.domNode,"zIndex",c);y.show(b,c-1);
d.push({dialog:a,underlayAttrs:b,zIndex:c})},hide:function(a){if(d[d.length-1].dialog==a){d.pop();var b=d[d.length-1];1==d.length?y.hide():y.show(b.underlayAttrs,b.zIndex-1);if(a.refocus&&(a=b.focus,!b.dialog||a&&G.isDescendant(a,b.dialog.domNode)||(b.dialog._getFocusItems(),a=b.dialog._firstFocusItem),a))try{a.focus()}catch(c){}}else b=m.indexOf(m.map(d,function(c){return c.dialog}),a),-1!=b&&d.splice(b,1)},isTop:function(a){return d[d.length-1].dialog==a}},d=q._dialogStack=[{dialog:null,focus:null,
underlayAttrs:null}];f.watch("curNode",function(a,b,c){a=d[d.length-1].dialog;if(c&&a&&!a._fadeOutDeferred&&c.ownerDocument==a.ownerDocument){do if(c==a.domNode||w.contains(c,"dijitPopup"))return;while(c=c.parentNode);a.focus()}});p("dijit-legacy-requires")&&I(0,function(){F(["dijit/TooltipDialog"])});return q});