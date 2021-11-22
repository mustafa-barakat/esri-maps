//>>built
define("dojox/wire/ml/RestHandler",["dojo","dijit","dojox","dojo/require!dojox/wire/_base,dojox/wire/ml/util"],function(e,k,l){e.provide("dojox.wire.ml.RestHandler");e.require("dojox.wire._base");e.require("dojox.wire.ml.util");e.declare("dojox.wire.ml.RestHandler",null,{contentType:"text/plain",handleAs:"text",bind:function(a,b,d,c){a=a.toUpperCase();var h=this;c={url:this._getUrl(a,b,c),contentType:this.contentType,handleAs:this.handleAs,headers:this.headers,preventCache:this.preventCache};var f=
null;"POST"==a?(c.postData=this._getContent(a,b),f=e.rawXhrPost(c)):"PUT"==a?(c.putData=this._getContent(a,b),f=e.rawXhrPut(c)):f="DELETE"==a?e.xhrDelete(c):e.xhrGet(c);f.addCallbacks(function(g){d.callback(h._getResult(g))},function(g){d.errback(g)})},_getUrl:function(a,b,d){var c;"GET"==a||"DELETE"==a?0<b.length&&(c=b[0]):1<b.length&&(c=b[1]);if(c){a="";for(var h in c)if(b=c[h]){b=encodeURIComponent(b);var f="{"+h+"}",g=d.indexOf(f);0<=g?d=d.substring(0,g)+b+d.substring(g+f.length):(a&&(a+="\x26"),
a+=h+"\x3d"+b)}a&&(d+="?"+a)}return d},_getContent:function(a,b){return"POST"==a||"PUT"==a?b?b[0]:null:null},_getResult:function(a){return a}})});