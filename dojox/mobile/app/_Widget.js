//>>built
define("dojox/mobile/app/_Widget",["dojo","dijit","dojox","dojo/require!dijit/_WidgetBase"],function(a,c,f){a.provide("dojox.mobile.app._Widget");a.experimental("dojox.mobile.app._Widget");a.require("dijit._WidgetBase");a.declare("dojox.mobile.app._Widget",c._WidgetBase,{getScroll:function(){return{x:a.global.scrollX,y:a.global.scrollY}},connect:function(d,b,e){return"dblclick"!=b.toLowerCase()&&"ondblclick"!=b.toLowerCase()||!a.global.Mojo?this.inherited(arguments):this.connect(d,Mojo.Event.tap,
e)}})});