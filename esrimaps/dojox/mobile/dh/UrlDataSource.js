//>>built
define("dojox/mobile/dh/UrlDataSource",["dojo/_base/declare","dojo/_base/lang","dojo/_base/xhr"],function(c,d,e){return c("dojox.mobile.dh.UrlDataSource",null,{text:"",_url:"",constructor:function(a){this._url=a},getData:function(){var a=e.get({url:this._url,handleAs:"text"});a.addCallback(d.hitch(this,function(b,f){this.text=b}));a.addErrback(function(b){console.log("Failed to load "+this._url+"\n"+(b.description||b))});return a}})});