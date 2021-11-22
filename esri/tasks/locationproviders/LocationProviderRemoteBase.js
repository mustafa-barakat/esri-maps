// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/tasks/locationproviders/LocationProviderRemoteBase","../../declare dojo/_base/array dojo/Deferred dojo/promise/all ../../graphic ./LocationProviderBase".split(" "),function(q,r,m,t,x,u){function v(a,c){function e(b){4>f&&(b=d.shift())&&g(b.args,b.dfd)}function g(b,h){f++;b=c.apply(a,b);b.always(function(){f--;e()});b.then(h.resolve,h.reject,h.progress)}var d=[],f=0;return function(){var b=arguments,h=new m;d.push({args:b,dfd:h});e();return h.promise}}return q("esri.tasks.locationproviders.LocationProviderRemoteBase",
u,{_fields:null,constructor:function(){var a=this._getFieldMapping&&this._getFieldMapping();this._fields=[];if(a)for(var c in a)a.hasOwnProperty(c)&&this._fields.push({inField:a[c],outField:c})},_throttle:function(a){return v(this,a)},_createFeatureLookup:function(a){for(var c={},e=0;e<a.length;e++){var g=a[e],d=this._createKey(g);if(d){var f=c[d];f?f.push(g):c[d]=[g]}}return c},_createKey:function(a,c){var e=[];c=c||r.map(this._fields,function(f){return f.inField});for(var g=0;g<c.length;g++){var d=
a.attributes[c[g]];if(void 0!==d&&null!==d)e.push(d);else return}return e.join("|||")},_locate:function(a,c){var e=new m,g=this,d=[],f=[],b=[];a=this._createFeatureLookup(a);var h=function(w){return g._locateBatch(w,c).then(function(n){n&&(d=d.concat(n));e.progress(d)})};h=this._throttle(h);for(var l in a)if(a.hasOwnProperty(l)){var k=a[l],p=this._createQueryExpression(k[0]);p&&(k={key:l,features:k,expression:p},this._batchWillOverflow(b,k)&&(f.push(h(b)),b=[]),b.push(k))}b.length&&f.push(h(b));t(f).then(function(){e.resolve(d)});
return e.promise}})});