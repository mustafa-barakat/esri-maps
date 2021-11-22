// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/support/ParallelSnapshot","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has dojo/Deferred ../../kernel".split(" "),function(g,h,f,k,l,m){g=g(null,{declaredClass:"esri.layers.support.ParallelSnapshot",layer:null,mode:null,queryTask:null,batchSize:5,_queryInfo:null,_fetchDfd:null,_startPage:null,_lastPage:null,_pageSize:null,_maxPages:null,_requests:null,constructor:function(a){h.mixin(this,a);this._requests={}},destroy:function(){this.cancel()},fetch:function(){var a=
new l;this.cancel(!0);this._queryInfo=this.mode._createQueryInfo();this._pageSize=this.mode._getPageSize(this._queryInfo.query);this._maxPages=Math.ceil(this._getFeatureCount()/this._pageSize);this._fetchDfd=a;this._sendRequests();return a.promise},cancel:function(a){this._cancelPendingRequests(a);this._reset()},_reset:function(){this._startPage=this._lastPage=null;this._requests={}},_getFeatureCount:function(){return this.layer.mode===this.layer.constructor.MODE_AUTO&&0===this.layer.getLastExceedsLimitResult()?
this.layer._getMaxFeaturesForAutoSnapshotMode():this.mode.maxFeatures},_sendRequests:function(a){var b=this._queryInfo.query,c=this.queryTask,d=this._requests;a=null==a?1:a;var e=a+this.batchSize-1;e>this._maxPages&&(e=this._maxPages);if(!(a>e))for(this._startPage=a,this._lastPage=e;a<=e;a++)b.start=(a-1)*this._pageSize,b.num=this._pageSize,d[a]=c.execute(b,null,null,this._queryInfo.pbf?{format:"pbf"}:null),d[a].then(h.hitch(this,this._handleSuccess,a)).otherwise(h.hitch(this,this._handleError,a))},
_evalNextBatch:function(a){a===this._lastPage&&this._sendRequests(this._lastPage+1)},_handleSuccess:function(a,b){b.exceededTransferLimit||this._cancelLaterRequests(a,!0);var c=this.mode._checkMaxLimit(b.features);this._fetchDfd.progress({features:c.features,isError:!1});c.maxLimitReached?((a=c.featuresDiscarded||this._hasRejectedRequests())||(a=!!this._getResult(this._getLastSuccessfulRequest()).exceededTransferLimit),this._resolveFetch(a)):(b.exceededTransferLimit&&this._evalNextBatch(a),this._evalResolution())},
_handleError:function(a,b){var c=this._requests;c&&c[a]&&(1===a?this._rejectFetch(b):(this._evalNextBatch(a),this._fetchDfd.progress({error:b,isError:!0}),this._evalResolution()))},_evalResolution:function(){this._hasPendingRequests()||this._resolveFetch(this._hasRejectedRequests())},_resolveFetch:function(a){var b=this._hasRejectedRequests();this.cancel(!0);this._fetchDfd.resolve({hasPartialFeatures:a,hasUpdateError:b})},_rejectFetch:function(a){this.cancel(!0);this._fetchDfd.reject(a)},_getResult:function(a){return a&&
a.dfd.results[0]},_hasPendingRequests:function(){return!!this._getPendingRequests().length},_getPendingRequests:function(){var a=this._requests,b,c=[];for(b in a){var d=a[b];d.isFulfilled()||c.push({pageId:Number(b),dfd:d})}return c},_getLastSuccessfulRequest:function(){var a=this._getResolvedRequests(),b=-Infinity,c;a=f.filter(a,function(d){return!!this._getResult(d).features.length||1===d.pageId},this);f.forEach(a,function(d){d.pageId>b&&(b=d.pageId,c=d)});return c},_getResolvedRequests:function(){var a=
this._requests,b,c=[];for(b in a){var d=a[b];d.isResolved()&&c.push({pageId:Number(b),dfd:d})}return c},_hasRejectedRequests:function(){var a=this._getRejectedRequests(),b=this._getLastSuccessfulRequest(),c=this._getResult(b);c&&!c.exceededTransferLimit&&(a=f.filter(a,function(d){return d.pageId<=b.pageId}));return!!a.length},_getRejectedRequests:function(){var a=this._requests,b,c=[];for(b in a){var d=a[b];d.isRejected()&&c.push({pageId:Number(b),dfd:d})}return c},_cancelPendingRequests:function(a){this._cancelRequests(this._getPendingRequests(),
a)},_cancelLaterRequests:function(a,b){var c=f.filter(this._getPendingRequests(),function(d){return d.pageId>a});this._cancelRequests(c,b)},_cancelRequests:function(a,b){var c=this.mode,d=this._requests;f.forEach(a,function(e){b&&delete d[e.pageId];c._cancelPendingRequest(e.dfd)})}});k("extend-esri")&&h.setObject("layers.support.ParallelSnapshot",g,m);return g});