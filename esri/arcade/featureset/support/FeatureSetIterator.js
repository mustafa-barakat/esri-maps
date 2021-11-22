// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/arcade/featureset/support/FeatureSetIterator",["require","exports","../../polyfill/promiseUtils"],function(q,r,k){return function(){function n(a,b){this._lastId=-1;this._progress=b;this._parent=a}n.prototype.reset=function(){this._lastId=-1};n.prototype.nextBatch=function(a){var b=this;if(null!==this._parent._mainSetInUse)return this._parent._mainSetInUse.then(function(e){return b.nextBatch(a)},function(e){return b.nextBatch(a)});var c=null,d=!1,h=[];c=k.create(function(e,f){b._parent._getSet(b._progress).then(function(g){var l=
g._known.length-1;"GETPAGES"===g._known[g._known.length-1]&&--l;if(b._lastId+a>l&&0<g._known.length&&"GETPAGES"===g._known[g._known.length-1])b._parent._expandPagedSet(g,b._parent._maxQueryRate(),0,0,b._progress).then(function(m){d=!0;b._parent._mainSetInUse=null;b.nextBatch(a).then(e,f)},function(m){d=!0;b._parent._mainSetInUse=null;f(m)});else if(l>=b._lastId+a||0===g._candidates.length){for(l=0;l<a;l++){var p=l+b._lastId+1;if(p>=g._known.length)break;h[l]=g._known[p]}b._lastId+=h.length;0===h.length&&
(d=!0,b._parent._mainSetInUse=null,e([]));b._parent._getFeatureBatch(h,b._progress).then(function(m){d=!0;b._parent._mainSetInUse=null;e(m)},function(m){d=!0;b._parent._mainSetInUse=null;f(m)})}else b._parent._refineSetBlock(g,b._parent._maxProcessingRate(),b._progress).then(function(){d=!0;b._parent._mainSetInUse=null;b.nextBatch(a).then(e,f)},function(m){d=!0;b._parent._mainSetInUse=null;f(m)})},function(g){d=!0;b._parent._mainSetInUse=null;f(g)})});!1===d&&(this._parent._mainSetInUse=c,d=!0);return c};
n.prototype.next=function(){var a=this;if(null!==this._parent._mainSetInUse)return this._parent._mainSetInUse.then(function(d){return a.next()},function(d){return a.next()});var b=null,c=!1;b=k.create(function(d,h){a._parent._getSet(a._progress).then(function(e){a._lastId<e._known.length-1?"GETPAGES"===e._known[a._lastId+1]?a._parent._expandPagedSet(e,a._parent._maxQueryRate(),0,0,a._progress).then(function(f){c=!0;a._parent._mainSetInUse=null;return a.next()}).then(d,h):(a._lastId+=1,a._parent._getFeature(e,
e._known[a._lastId],a._progress).then(function(f){c=!0;a._parent._mainSetInUse=null;d(f)},function(f){c=!0;a._parent._mainSetInUse=null;h(f)})):0<e._candidates.length?a._parent._refineSetBlock(e,a._parent._maxProcessingRate(),a._progress).then(function(){c=!0;a._parent._mainSetInUse=null;a.next().then(d,h)},function(f){c=!0;a._parent._mainSetInUse=null;h(f)}):(c=!0,a._parent._mainSetInUse=null,d(null))},function(e){c=!0;a._parent._mainSetInUse=null;h(e)})});!1===c&&(this._parent._mainSetInUse=b,c=
!0);return b};n.prototype.count=function(){var a=this;return-1!==this._parent._totalCount?k.resolve(this._parent._totalCount):this._parent._getSet(this._progress).then(function(b){return a._refineAllSets(b)}).then(function(b){a._parent._totalCount=b._known.length;return k.resolve(a._parent._totalCount)})};n.prototype._refineAllSets=function(a){var b=this;return 0<a._known.length&&"GETPAGES"===a._known[a._known.length-1]?this._parent._expandPagedSet(a,this._parent._maxQueryRate(),0,1,this._progress).then(function(c){return b._refineAllSets(a)}).then(function(c){return k.resolve(c)}):
0<a._candidates.length?"GETPAGES"===a._known[a._candidates.length-1]?this._parent._expandPagedSet(a,this._parent._maxQueryRate(),0,2,this._progress).then(function(c){return b._refineAllSets(a)}).then(function(c){return k.resolve(c)}):this._parent._refineSetBlock(a,this._parent._maxProcessingRate(),this._progress).then(function(c){return 0<c._candidates.length?b._refineAllSets(c):k.resolve(c)}):k.resolve(a)};return n}()});