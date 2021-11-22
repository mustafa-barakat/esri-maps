// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/QueueProcessor",["require","exports","dojo/Deferred","./Queue","./scheduling"],function(m,n,h,k,l){return function(){function c(a){this._apiPromises=new Map;this._processingItems=new Map;this._isPaused=!1;this._scheduledNextHandle=null;this.concurrency=1;this.ordered=!1;a.concurrency&&(this.concurrency=a.concurrency);this.ordered=!!a.ordered;this._queue=new k(a.peeker?{peeker:a.peeker}:void 0);this.process=a.process}Object.defineProperty(c.prototype,"length",{get:function(){return this._processingItems.size+
this._queue.length},enumerable:!0,configurable:!0});c.prototype.clear=function(){this._queue.clear();var a=[];this._processingItems.forEach(function(b){return a.push(b.resultPromise)});this._processingItems.clear();a.forEach(function(b){return b.cancel()});a.length=0;this._apiPromises.forEach(function(b){return a.push(b)});this._apiPromises.clear();a.forEach(function(b){return b.cancel()});this._cancelNext()};c.prototype.find=function(a,b){var f=this,d=void 0;this._apiPromises.forEach(function(e,
g){a.call(b,g)&&(d=f._apiPromises.get(g).promise)});return d};c.prototype.get=function(a){return(a=this._apiPromises.get(a))&&a.promise||void 0};c.prototype.isOngoing=function(a){return this._processingItems.has(a)};c.prototype.has=function(a){return this._apiPromises.has(a)};c.prototype.pause=function(){this._isPaused||(this._isPaused=!0,this._cancelNext())};c.prototype.push=function(a){var b=this;if(this._apiPromises.has(a))return this._apiPromises.get(a).promise;var f=new h(function(d){var e=b._processingItems.get(a);
e?e.resultPromise.cancel(d):(b._remove(a),b._scheduleNext())});this._add(a,f);this._scheduleNext();return f.promise};c.prototype.reset=function(){var a=[];this._processingItems.forEach(function(d){return a.push(d)});this._processingItems.clear();for(var b=0;b<a.length;b++){var f=a[b];f.resultPromise.isFulfilled()?this._processReset(f):(f.isReset=!0,f.resultPromise.cancel())}};c.prototype.resume=function(){this._isPaused&&(this._isPaused=!1,this._scheduleNext())};c.prototype._scheduleNext=function(){var a=
this;this._isPaused||this._scheduledNextHandle||(this._scheduledNextHandle=l.schedule(function(){a._scheduledNextHandle=null;a._next()}))};c.prototype._next=function(){for(;0<this._queue.length&&this._processingItems.size<this.concurrency;)this._process(this._queue.pop())};c.prototype._processResult=function(a,b){this._remove(a.item);this._scheduleNext();a.dfd.resolve(b)};c.prototype._processError=function(a,b){a.isReset?this._processReset(a):(this._remove(a.item),this._scheduleNext(),a.dfd.reject(b))};
c.prototype._processReset=function(a){this._remove(a.item);this._add(a.item,a.dfd);this._scheduleNext()};c.prototype._processOrdered=function(a,b){var f=this,d=!1;if(a.isReset)this._processReset(a);else{a.result=b;this._itemsToProcess||(this._itemsToProcess=[]);this._processingItems.forEach(function(g){d||(g.result?f._itemsToProcess.push(g):d=!0)});a=0;for(b=this._itemsToProcess;a<b.length;a++){var e=b[a];!1===e.result.ok?this._processError(e,e.result.error):this._processResult(e,e.result.value)}this._itemsToProcess.length=
0}};c.prototype._process=function(a){var b=this;if(null!=a){var f=this._apiPromises.get(a),d=this.process(a);if(d&&"function"===typeof d.then){var e={item:a,resultPromise:d,result:null,dfd:f,isReset:!1};this._processingItems.set(a,e);this.ordered?d.then(function(g){return b._processOrdered(e,{ok:!0,value:g})},function(g){return b._processOrdered(e,{ok:!1,error:g})}):d.then(function(g){return b._processResult(e,g)},function(g){return b._processError(e,g)})}else f.resolve(d),this._remove(a)}};c.prototype._add=
function(a,b){this._apiPromises.set(a,b);this._queue.push(a)};c.prototype._remove=function(a){this._queue.remove(a);this._apiPromises.delete(a);this._processingItems.delete(a)};c.prototype._cancelNext=function(){this._scheduledNextHandle&&(this._scheduledNextHandle.remove(),this._scheduledNextHandle=null)};return c}()});