// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/geometry/Extent","dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/has ../kernel ../lang ../SpatialReference ./Geometry ./Point ./webMercatorUtils ./mathUtils ../srUtils".split(" "),function(C,x,y,D,z,v,u,E,n,w,F,G){function A(){}var B={type:"extent",xmin:0,ymin:0,xmax:0,ymax:0},h=C(E,{declaredClass:"esri.geometry.Extent",type:"extent",xmin:0,ymin:0,xmax:0,ymax:0,constructor:function(a,b,c,d,e){v.isObject(a)?(v.mixin(this,a),this.spatialReference&&(this.spatialReference=G.createSpatialReference(this.spatialReference))):
this.update(a,b,c,d,e);this.verifySR()},getWidth:function(){return Math.abs(this.xmax-this.xmin)},getHeight:function(){return Math.abs(this.ymax-this.ymin)},getCenter:function(){return new n((this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2,this.spatialReference)},getTopLeft:function(){return new n(this.xmin,this.ymax,this.spatialReference)},getTopRight:function(){return new n(this.xmax,this.ymax,this.spatialReference)},getBottomLeft:function(){return new n(this.xmin,this.ymin,this.spatialReference)},
getBottomRight:function(){return new n(this.xmax,this.ymin,this.spatialReference)},centerAt:function(a){var b=this.getCenter(),c=a.x-b.x;a=a.y-b.y;return new h(this.xmin+c,this.ymin+a,this.xmax+c,this.ymax+a,this.spatialReference)},update:function(a,b,c,d,e){this.xmin=a;this.ymin=b;this.xmax=c;this.ymax=d;this.spatialReference=e;this.clearCache();return this},offset:function(a,b){return new h(this.xmin+a,this.ymin+b,this.xmax+a,this.ymax+b,this.spatialReference)},expand:function(a){var b=(1-a)/2;
a=this.getWidth()*b;b*=this.getHeight();return new h(this.xmin+a,this.ymin+b,this.xmax-a,this.ymax-b,this.spatialReference)},intersects:function(a){if(!a)return!1;var b=a.type,c=this.spatialReference,d=a.spatialReference;c&&d&&!c.equals(d)&&c._canProject(d)&&(a=c.isWebMercator()?w.geographicToWebMercator(a):w.webMercatorToGeographic(a,!0));switch(b){case "point":return this.contains(a);case "multipoint":return this._intersectsMultipoint(a);case "extent":return this._intersectsExtent(a);case "polygon":return this._intersectsPolygon(a);
case "polyline":return this._intersectsPolyline(a)}},normalize:function(){var a=this._normalize(!1,!0);y.isArray(a)||(a=[a]);return a},shiftCentralMeridian:function(){return this._normalize(!0)},bisect:function(){var a=this.spatialReference,b=a&&a._getInfo(),c=[],d=0;if(b&&this._isOutOfBounds(b)){var e=this;d=e.xmin;var f=e.ymin,g=e.ymax,l=b.valid[0],k=b.valid[1];e.getWidth()>2*k&&(e=e.getCenter(),e=new h(e.x-k,f,e.x+k,g,new u(a.toJson())));d=e.xmin-d;var m=this._normalizeX(e.xmin,b);b=this._normalizeX(e.xmax,
b);m.frameId===b.frameId?c.push(new h(m.x,f,b.x,g,new u(a.toJson()))):c.push(new h(m.x,f,k,g,new u(a.toJson())),new h(l,f,b.x,g,new u(a.toJson())))}else c.push(this.getExtent());return{extents:c,marginLeft:d}},_intersectsMultipoint:function(a){var b=a.points.length,c;for(c=0;c<b;c++)if(this.contains(a.getPoint(c)))return!0;return!1},_intersectsExtent:function(a){var b,c,d=!1;if(this.xmin<=a.xmin){var e=a.xmin;this.xmax<e?d=!0:b=Math.min(this.xmax,a.xmax)-e}else e=this.xmin,a.xmax<e?d=!0:b=Math.min(this.xmax,
a.xmax)-e;if(this.ymin<=a.ymin){var f=a.ymin;this.ymax<f?d=!0:c=Math.min(this.ymax,a.ymax)-f}else f=this.ymin,a.ymax<f?d=!0:c=Math.min(this.ymax,a.ymax)-f;return d?null:new h(e,f,e+b,f+c,this.spatialReference)},_intersectsPolygon:function(a){var b=[this.xmin,this.ymax],c=[this.xmax,this.ymax],d=[this.xmin,this.ymin],e=[this.xmax,this.ymin],f=[b,c,d,e];b=[[d,b],[b,c],[c,e],[e,d]];d=a.rings;e=d.length;var g=new n(0,0,this.spatialReference);var l=f.length;for(c=0;c<l;c++)if(g.update(f[c][0],f[c][1]),
a.contains(g))return!0;g.setSpatialReference(a.spatialReference);for(c=0;c<e;c++)if(f=d[c],l=f.length){var k=f[0];g.update(k[0],k[1]);if(this.contains(g))return!0;for(a=1;a<l;a++){var m=f[a];g.update(m[0],m[1]);if(this.contains(g)||this._intersectsLine([k,m],b))return!0;k=m}}return!1},_intersectsPolyline:function(a){var b=[[[this.xmin,this.ymin],[this.xmin,this.ymax]],[[this.xmin,this.ymax],[this.xmax,this.ymax]],[[this.xmax,this.ymax],[this.xmax,this.ymin]],[[this.xmax,this.ymin],[this.xmin,this.ymin]]],
c,d=a.paths,e=d.length,f,g=new n(0,0,a.spatialReference);for(a=0;a<e;a++){var l=d[a];if(f=l.length){var k=l[0];g.update(k[0],k[1]);if(this.contains(g))return!0;for(c=1;c<f;c++){var m=l[c];g.update(m[0],m[1]);if(this.contains(g)||this._intersectsLine([k,m],b))return!0;k=m}}}return!1},_intersectsLine:function(a,b){var c=F._getLineIntersection2,d,e=b.length;for(d=0;d<e;d++)if(c(a,b[d]))return!0;return!1},contains:function(a){if(!a)return!1;var b=a.type;if("point"===b){var c=this.spatialReference,d=a.spatialReference;
b=a.x;a=a.y;c&&d&&!c.equals(d)&&c._canProject(d)&&(a=c.isWebMercator()?n.lngLatToXY(b,a):n.xyToLngLat(b,a,!0),b=a[0],a=a[1]);return b>=this.xmin&&b<=this.xmax&&a>=this.ymin&&a<=this.ymax}return"extent"===b?this._containsExtent(a):!1},_containsExtent:function(a){var b=a.xmin,c=a.ymin,d=a.xmax,e=a.ymax,f=a.spatialReference;a=new n(b,c,f);b=new n(b,e,f);e=new n(d,e,f);c=new n(d,c,f);return this.contains(a)&&this.contains(b)&&this.contains(e)&&this.contains(c)?!0:!1},union:function(a){return new h(Math.min(this.xmin,
a.xmin),Math.min(this.ymin,a.ymin),Math.max(this.xmax,a.xmax),Math.max(this.ymax,a.ymax),this.spatialReference)},getExtent:function(){var a=this.spatialReference;return new h(this.xmin,this.ymin,this.xmax,this.ymax,a&&new u(a.toJson()))},_shiftCM:function(a){var b=this.getCacheValue("_shifted");if(!b){b=new h(this.toJson());var c=b.spatialReference;if(a=a||c._getInfo()){var d=this._getCM(a);if(d){var e=c._isWebMercator()?w.webMercatorToGeographic(d):d;b.xmin-=d.x;b.xmax-=d.x;c._isWebMercator()||(e.x=
this._normalizeX(e.x,a).x);b.setSpatialReference(new u(v.substitute({Central_Meridian:e.x},4326===c.wkid?a.altTemplate:a.wkTemplate)))}}this.setCacheValue("_shifted",b)}return b},_getCM:function(a){var b;this._isOutOfBounds(a)&&(b=this.getCenter());return b},_isOutOfBounds:function(a){var b=a.valid[0];a=a.valid[1];var c=this.xmin,d=this.xmax;return!(c>=b&&c<=a&&d>=b&&d<=a)},_normalize:function(a,b,c){var d=new h(this.toJson()),e=d.spatialReference;if(e&&(c=c||e._getInfo())){var f=x.map(this._getParts(c),
function(g){return g.extent});return 2<f.length?a?this._shiftCM(c):d.update(c.valid[0],d.ymin,c.valid[1],d.ymax,e):2===f.length?a?this._shiftCM(c):b?f:{rings:x.map(f,function(g){return[[g.xmin,g.ymin],[g.xmin,g.ymax],[g.xmax,g.ymax],[g.xmax,g.ymin],[g.xmin,g.ymin]]}),spatialReference:e}:f[0]||d}return d},_getParts:function(a){var b=this.getCacheValue("_parts");if(!b){b=[];var c=this.xmin,d=this.xmax,e=this.ymin,f=this.ymax,g=this.spatialReference,l=this.getWidth(),k=c,m=d,t=0,p=0;a=a||g._getInfo();
var q=a.valid[0];var r=a.valid[1];p=this._normalizeX(c,a);c=p.x;t=p.frameId;p=this._normalizeX(d,a);d=p.x;p=p.frameId;a=c===d&&0<l;if(l>2*r){l=new h(k<m?c:d,e,r,f,g);c=new h(q,e,k<m?d:c,f,g);r=new h(0,e,r,f,g);e=new h(q,e,0,f,g);g=[];q=[];l.contains(r)&&g.push(t);l.contains(e)&&q.push(t);c.contains(r)&&g.push(p);c.contains(e)&&q.push(p);for(f=t+1;f<p;f++)g.push(f),q.push(f);b.push({extent:l,frameIds:[t]},{extent:c,frameIds:[p]},{extent:r,frameIds:g},{extent:e,frameIds:q})}else c>d||a?b.push({extent:new h(c,
e,r,f,g),frameIds:[t]},{extent:new h(q,e,d,f,g),frameIds:[p]}):b.push({extent:new h(c,e,d,f,g),frameIds:[t]});this.setCacheValue("_parts",b)}return b},_normalizeX:function(a,b){var c=0,d=b.valid[0],e=b.valid[1];b=2*e;a>e?(c=Math.ceil(Math.abs(a-e)/b),a-=c*b):a<d&&(c=Math.ceil(Math.abs(a-d)/b),a+=c*b,c=-c);return{x:a,frameId:c}},toJson:function(){var a={xmin:this.xmin,ymin:this.ymin,xmax:this.xmax,ymax:this.ymax},b=this.spatialReference;b&&(a.spatialReference=b.toJson());return a}});A.prototype=h.prototype;
h.simpleConstructor=A;h.defaultProps=B;D("extend-esri")&&(y.setObject("geometry.Extent",h,z),z.geometry.defaultExtent=B);return h});