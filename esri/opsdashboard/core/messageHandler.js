// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/opsdashboard/core/messageHandler",["dojo/_base/declare","dojo/_base/lang","dojo/json","../../Evented","dojo/Deferred"],function(g,d,e,h,f){var k=0;return new (g([h],{isNative:!1,_targetUrl:"",_loadingDeferred:null,_redirectIdentityManager:!1,constructor:function(){this._promises={};var b=document.referrer;b&&(b=b.split(/[\/?#]/),this._targetUrl=b[0]+"//"+b[2]);this._loadingDeferred=new f;window.engine?(this.isNative=!0,window.engine._trigger=d.hitch(this,this._engineCallbacks),window.engine.BindingsReady(),
window.document.addEventListener("contextmenu",function(a){var c=new MouseEvent("click",{view:a.view,altKey:a.altKey,ctrlKey:a.ctrlKey,shiftKey:a.shiftKey,metaKey:a.metaKey,which:a.which,button:a.button,buttons:a.buttons,detail:a.detail,currentTarget:a.currentTarget,relatedTarget:a.relatedTarget,target:a.target,timeStamp:a.timeStamp,clientX:a.clientX,clientY:a.clientY,screenX:a.screenX,screenY:a.screenY});a.target.dispatchEvent(c)})):(window.addEventListener("message",d.hitch(this,function(a){a.origin===
this._targetUrl&&this._messageReceived(a.data)}),!1),this._loadingDeferred.resolve());window.setInterval(d.hitch(this,this.checkPromises),3E4)},_engineCallbacks:function(b,a){switch(b.toLowerCase()){case "_onready":this._loadingDeferred.resolve();break;case "receivemessages":this._messageReceived(a)}},checkPromises:function(){var b=Date.now()-3E4,a=[],c;for(c in this._promises)this._promises[c].timestamp>b||(a.push(c),this._promises[c].promise.isFulfilled()||this._promises[c].promise.reject(Error("messageTimeout")));
a.forEach(function(l){delete this._promises[l]},this)},_messageReceived:function(b){b=e.parse(b);if(b.args)for(var a in b.args){var c=b.args[a];"string"===typeof c&&0===c.indexOf("{")&&(b.args[a]=e.parse(c))}if((a=void 0!==b.clientMessageId?this._promises[b.clientMessageId]:null)||!b.clientMessageId){if(a)return delete this._promises[b.clientMessageId],a.promise.isFulfilled()?void 0:b.args?b.args.error?a.promise.reject({error:b.args.error}):b.args.cancelled?a.promise.reject({cancel:b.args.cancelled}):
a.promise.resolve(b.args):a.promise.resolve();b.functionName&&this.emit("message-received",b)}},__sendMessage:function(b){window.name&&(b.addinId=window.name);window.engine?window.engine.SendMessage.call(this,"sendMessage",null,e.stringify(b),window.location.hostname):window.parent.postMessage(e.stringify(b),this._targetUrl)},_sendMessageWithReply:function(b){return this._loadingDeferred.then(d.hitch(this,function(){var a=new f;b.clientMessageId=k++;this._promises[b.clientMessageId]={promise:a,timestamp:Date.now()};
this.__sendMessage(b);return a.promise}))},_sendMessage:function(b){this._loadingDeferred.then(d.hitch(this,function(){this.__sendMessage(b)}))}}))});