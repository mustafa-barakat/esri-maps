//>>built
define("dojox/app/widgets/_ScrollableMixin","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/window dojo/dom-class dijit/registry dojo/dom dojo/dom-construct dojox/mobile/scrollable".split(" "),function(k,p,l,e,f,g,h,m,n){return k("dojox.app.widgets._ScrollableMixin",n,{scrollableParams:null,appBars:!0,allowNestedScrolls:!0,constructor:function(){this.scrollableParams={noResize:!0}},destroy:function(){this.cleanup();this.inherited(arguments)},startup:function(){if(!this._started){this.findAppBars();
var a=this.scrollableParams;if(this.fixedHeader){var b=h.byId(this.fixedHeader);b.parentNode==this.domNode&&(this.isLocalHeader=!0);a.fixedHeaderHeight=b.offsetHeight}this.fixedFooter&&(b=h.byId(this.fixedFooter))&&(b.parentNode==this.domNode&&(this.isLocalFooter=!0,b.style.bottom="0px"),a.fixedFooterHeight=b.offsetHeight);this.init(a);this.inherited(arguments);this.reparent()}},buildRendering:function(){this.inherited(arguments);f.add(this.domNode,"mblScrollableView");this.domNode.style.overflow=
"hidden";this.domNode.style.top="0px";this.containerNode=m.create("div",{className:"mblScrollableViewContainer"},this.domNode);this.containerNode.style.position="absolute";this.containerNode.style.top="0px";"v"===this.scrollDir&&(this.containerNode.style.width="100%")},reparent:function(){var a,b;var c=a=0;for(b=this.domNode.childNodes.length;a<b;a++){var d=this.domNode.childNodes[c];d===this.containerNode||this.checkFixedBar(d,!0)?c++:this.containerNode.appendChild(this.domNode.removeChild(d))}},
resize:function(){this.inherited(arguments);l.forEach(this.getChildren(),function(a){a.resize&&a.resize()})},findAppBars:function(){if(this.appBars){var a;var b=0;for(a=e.body().childNodes.length;b<a;b++){var c=e.body().childNodes[b];this.checkFixedBar(c,!1)}if(this.domNode.parentNode)for(b=0,a=this.domNode.parentNode.childNodes.length;b<a;b++)c=this.domNode.parentNode.childNodes[b],this.checkFixedBar(c,!1);this.fixedFooterHeight=this.fixedFooter?this.fixedFooter.offsetHeight:0}},checkFixedBar:function(a,
b){if(1===a.nodeType){var c=a.getAttribute("data-app-constraint")||g.byNode(a)&&g.byNode(a)["data-app-constraint"];if("bottom"===c)return f.add(a,"mblFixedBottomBar"),b?this.fixedFooter=a:this._fixedAppFooter=a,c}return null}})});