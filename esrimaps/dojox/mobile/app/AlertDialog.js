//>>built
define("dojox/mobile/app/AlertDialog",["dojo","dijit","dojox","dojo/require!dijit/_WidgetBase"],function(a,f,h){a.provide("dojox.mobile.app.AlertDialog");a.experimental("dojox.mobile.app.AlertDialog");a.require("dijit._WidgetBase");a.declare("dojox.mobile.app.AlertDialog",f._WidgetBase,{title:"",text:"",controller:null,buttons:null,defaultButtonLabel:"OK",onChoose:null,constructor:function(){this.onClick=a.hitch(this,this.onClick);this._handleSelect=a.hitch(this,this._handleSelect)},buildRendering:function(){this.domNode=
a.create("div",{"class":"alertDialog"});var c=a.create("div",{"class":"alertDialogBody"},this.domNode);a.create("div",{"class":"alertTitle",innerHTML:this.title||""},c);a.create("div",{"class":"alertText",innerHTML:this.text||""},c);var b=a.create("div",{"class":"alertBtns"},c);this.buttons&&0!=this.buttons.length||(this.buttons=[{label:this.defaultButtonLabel,value:"ok","class":"affirmative"}]);var d=this;a.forEach(this.buttons,function(e){var g=new h.mobile.Button({btnClass:e["class"]||"",label:e.label});
g._dialogValue=e.value;a.place(g.domNode,b);d.connect(g,"onClick",d._handleSelect)});c=this.controller.getWindowSize();this.mask=a.create("div",{"class":"dialogUnderlayWrapper",innerHTML:'\x3cdiv class\x3d"dialogUnderlay"\x3e\x3c/div\x3e',style:{width:c.w+"px",height:c.h+"px"}},this.controller.assistant.domNode);this.connect(this.mask,"onclick",function(){d.onChoose&&d.onChoose();d.hide()})},postCreate:function(){this.subscribe("/dojox/mobile/app/goback",this._handleSelect)},_handleSelect:function(c){var b;
console.log("handleSelect");if(c&&c.target)for(b=c.target;!f.byNode(b);)b=b.parentNode;if(this.onChoose)this.onChoose(b?f.byNode(b)._dialogValue:void 0);this.hide()},show:function(){this._doTransition(1)},hide:function(){this._doTransition(-1)},_doTransition:function(c){var b=a.marginBox(this.domNode.firstChild).h;var d=this.controller.getWindowSize().h;console.log("dialog height \x3d "+b," body height \x3d "+d);b=d-b;d=a.fx.slideTo({node:this.domNode,duration:400,top:{start:0>c?b:d,end:0>c?d:b}});
b=a[0>c?"fadeOut":"fadeIn"]({node:this.mask,duration:400});d=a.fx.combine([d,b]);var e=this;a.connect(d,"onEnd",this,function(){0>c&&(e.domNode.style.display="none",a.destroy(e.domNode),a.destroy(e.mask))});d.play()},destroy:function(){this.inherited(arguments);a.destroy(this.mask)},onClick:function(){}})});