// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/geometry/Point","dojo/_base/declare dojo/_base/lang dojo/has ../kernel ../lang ../SpatialReference ./Geometry ../srUtils".split(" "),function(d,m,r,n,p,f,t,u){function g(a,b){89.99999<b?b=89.99999:-89.99999>b&&(b=-89.99999);b*=.017453292519943;return[111319.49079327169*a,3189068.5*Math.log((1+Math.sin(b))/(1-Math.sin(b)))]}function h(a,b,c){a=a/6378137*57.29577951308232;return c?[a,57.29577951308232*(1.5707963267948966-2*Math.atan(Math.exp(-1*b/6378137)))]:[a-360*Math.floor((a+180)/360),
57.29577951308232*(1.5707963267948966-2*Math.atan(Math.exp(-1*b/6378137)))]}function k(){}function e(){}function q(a){var b=a._json;a._unquantizeFn?(b=a._unquantizeFn({x:b.x,y:b.y}),a._xVal=b.x,a._yVal=b.y,a._unquantizeFn=null):(a._xVal=b.x,a._yVal=b.y);a._json=null}f={type:"point",x:0,y:0};d=d(t,{declaredClass:"esri.geometry.Point",type:"point",x:0,y:0,constructor:function(a,b,c){m.isArray(a)?(this.x=a[0],this.y=a[1],this.spatialReference=b):p.isObject(a)?(p.mixin(this,a),null!=this.latitude&&(this.y=
this.latitude),null!=this.longitude&&(this.x=this.longitude),this.spatialReference&&(this.spatialReference=u.createSpatialReference(this.spatialReference))):(this.x=a,this.y=b,this.spatialReference=c);this.verifySR()},offset:function(a,b){return new this.constructor(this.x+a,this.y+b,this.spatialReference)},setX:function(a){this.x=a;this.clearCache();return this},setY:function(a){this.y=a;this.clearCache();return this},setLongitude:function(a){var b=this.spatialReference;b&&(b._isWebMercator()?this.setX(g(a,
this.y)[0]):4326===b.wkid&&this.setX(a));return this},setLatitude:function(a){var b=this.spatialReference;b&&(b._isWebMercator()?this.setY(g(this.x,a)[1]):4326===b.wkid&&this.setY(a));return this},getLongitude:function(){var a=this.spatialReference;if(a)if(a._isWebMercator())var b=h(this.x,this.y)[0];else 4326===a.wkid&&(b=this.x);return b},getLatitude:function(){var a=this.spatialReference;if(a)if(a._isWebMercator())var b=h(this.x,this.y)[1];else 4326===a.wkid&&(b=this.y);return b},update:function(a,
b){this.x=a;this.y=b;this.clearCache();return this},normalize:function(){var a=this.x,b=this.spatialReference;if(b){var c=b._getInfo();c&&(a=this._normalizeX(a,c))}return new this.constructor(a,this.y,b)},_normalizeX:function(a,b){var c=b.valid[0],l=b.valid[1];b=2*l;a>l?(c=Math.ceil(Math.abs(a-l)/b),a-=c*b):a<c&&(c=Math.ceil(Math.abs(a-c)/b),a+=c*b);return a},toJson:function(){var a={x:this.x,y:this.y},b=this.spatialReference;b&&(a.spatialReference=b.toJson());return a}});k.prototype=d.prototype;
e.prototype=new k;Object.defineProperty(e.prototype,"x",{get:function(){this._json&&q(this);return this._xVal},set:function(a){this._xVal=a}});Object.defineProperty(e.prototype,"y",{get:function(){this._json&&q(this);return this._yVal},set:function(a){this._yVal=a}});e.prototype.setupLazyUnquantization=function(a,b){this._unquantizeFn=a;this._json=b};d.simpleConstructor=k;d.accessorConstructor=e;d.lngLatToXY=g;d.xyToLngLat=h;d.defaultProps=f;d.metersPerDegree=6378137*Math.PI/180;r("extend-esri")&&
(m.setObject("geometry.Point",d,n),n.geometry.defaultPoint=f);return d});