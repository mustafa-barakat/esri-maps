// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/geometry/normalizeUtils","dojo/_base/array dojo/_base/lang dojo/_base/Deferred dojo/has ../kernel ../config ../deferredUtils ./Extent ./Polyline ./Polygon ./webMercatorUtils ./jsonUtils".split(" "),function(t,x,K,U,V,W,L,X,A,G,E,Y){function B(a,g){return Math.ceil((a-g)/(2*g))}function H(a,g){var e=a.paths||a.rings,d,c,b=e.length;for(d=0;d<b;d++){var f=e[d].length;for(c=0;c<f;c++){var k=a.getPoint(d,c);a.setPoint(d,c,k.offset(g,0))}}return a}function M(a,g){if(!(a instanceof A||a instanceof
G))throw console.error("_straightLineDensify: the input geometry is neither polyline nor polygon"),Error("_straightLineDensify: the input geometry is neither polyline nor polygon");var e=a instanceof A,d=[],c;t.forEach(e?a.paths:a.rings,function(b){d.push(c=[]);c.push([b[0][0],b[0][1]]);var f,k;for(f=0;f<b.length-1;f++){var l=b[f][0];var h=b[f][1];var m=b[f+1][0];var q=b[f+1][1];var u=Math.sqrt((m-l)*(m-l)+(q-h)*(q-h));var z=(q-h)/u;var C=(m-l)/u;var v=u/g;if(1<v){for(k=1;k<=v-1;k++){var w=k*g;var D=
C*w+l;w=z*w+h;c.push([D,w])}k=(u+Math.floor(v-1)*g)/2;D=C*k+l;w=z*k+h;c.push([D,w])}c.push([m,q])}});return e?new A({paths:d,spatialReference:a.spatialReference}):new G({rings:d,spatialReference:a.spatialReference})}function I(a,g,e){g&&(a=M(a,1E6),a=E.webMercatorToGeographic(a,!0));e&&(a=H(a,e));return a}function J(a,g,e){var d=a.x||a[0];if(d>g){var c=B(d,g);a.x?a=a.offset(-2*c*g,0):a[0]=d+-2*c*g}else d<e&&(c=B(d,e),a.x?a=a.offset(-2*c*e,0):a[0]=d+-2*c*e);return a}function N(a,g){var e=-1;t.forEach(g.cutIndexes,
function(d,c){var b=g.geometries[c];t.forEach(b.rings||b.paths,function(f,k){t.some(f,function(l){if(!(180>l[0])){l=0;var h,m=f.length;for(h=0;h<m;h++){var q=f[h][0];l=q>l?q:l}l=Number(l.toFixed(9));l=-360*B(l,180);m=f.length;for(h=0;h<m;h++)q=b.getPoint(k,h),b.setPoint(k,h,q.offset(l,0))}return!0})});d===e?b.rings?t.forEach(b.rings,function(f){a[d]=a[d].addRing(f)}):t.forEach(b.paths,function(f){a[d]=a[d].addPath(f)}):(e=d,a[d]=b)});return a}function O(a,g,e,d){var c=new K;c.addCallbacks(e,d);g=
g||W.defaults.geometryService;var b=[],f=[],k,l,h,m,q,u,z,C,v=0;t.forEach(a,function(r){if(r)if(k||(k=r.spatialReference,l=k._getInfo(),m=(h=k._isWebMercator())?2.0037508342788905E7:180,q=h?-2.0037508342788905E7:-180,u=h?102100:4326,z=new A({paths:[[[m,q],[m,m]]],spatialReference:{wkid:u}}),C=new A({paths:[[[q,q],[q,m]]],spatialReference:{wkid:u}})),l){var n=Y.fromJson(r.toJson()),p=r.getExtent();"point"===r.type?b.push(J(n,m,q)):"multipoint"===r.type?(n.points=t.map(n.points,function(y){return J(y,
m,q)}),b.push(n)):"extent"===r.type?(n=p._normalize(null,null,l),b.push(n.rings?new G(n):n)):p?(r=2*B(p.xmin,q)*m,n=0===r?n:H(n,r),p=p.offset(r,0),p.intersects(z)&&p.xmax!==m?(v=p.xmax>v?p.xmax:v,n=I(n,h),f.push(n),b.push("cut")):p.intersects(C)&&p.xmin!==q?(v=2*p.xmax*m>v?2*p.xmax*m:v,n=I(n,h,360),f.push(n),b.push("cut")):b.push(n)):b.push(n)}else b.push(r);else b.push(r)});e=new A;d=B(v,m);for(var w=-90,D=d;0<d;){var P=-180+360*d;e.addPath([[P,w],[P,-1*w]]);w*=-1;d--}0<f.length&&0<D?g?g.cut(f,e,
function(r){f=N(f,r);var n=[];t.forEach(b,function(p,y){"cut"===p&&(p=f.shift(),a[y].rings&&1<a[y].rings.length&&p.rings.length>=a[y].rings.length?(b[y]="simplify",n.push(p)):b[y]=!0===h?E.geographicToWebMercator(p):p)});0<n.length?g.simplify(n,function(p){t.forEach(b,function(y,Z){"simplify"===y&&(b[Z]=!0===h?E.geographicToWebMercator(p.shift()):p.shift())});c.callback(b)},function(p){c.errback(p)}):c.callback(b)},function(r){c.errback(r)}):c.errback(Error("esri.geometry.normalizeCentralMeridian: 'geometryService' argument is missing.")):
(t.forEach(b,function(r,n){"cut"===r&&(r=f.shift(),b[n]=!0===h?E.geographicToWebMercator(r):r)}),c.callback(b));return c}function F(a,g,e,d){var c=!1,b;x.isObject(a)&&a&&(x.isArray(a)?a.length&&((b=a[0]&&a[0].declaredClass)&&-1!==b.indexOf("Graphic")?(a=t.map(a,function(f){return f.geometry}),c=a.length?!0:!1):b&&-1!==b.indexOf("esri.geometry.")&&(c=!0)):(b=a.declaredClass)&&-1!==b.indexOf("FeatureSet")?(a=t.map(a.features||[],function(f){return f.geometry}),c=a.length?!0:!1):b&&-1!==b.indexOf("esri.geometry.")&&
(c=!0));c&&g.push({index:e,property:d,value:a})}function Q(a,g){var e=[];t.forEach(g,function(d){var c=d.i,b=a[c];d=d.p;var f;if(x.isObject(b)&&b)if(d)if("*"===d[0])for(f in b)b.hasOwnProperty(f)&&F(b[f],e,c,f);else t.forEach(d,function(k){F(x.getObject(k,!1,b),e,c,k)});else F(b,e,c)});return e}function R(a,g){var e=0,d={};t.forEach(g,function(c){var b=c.index,f=c.property,k=c.value,l=k.length||1,h=a.slice(e,e+l);x.isArray(k)||(h=h[0]);e+=l;delete c.value;f?(d[b]=d[b]||{},d[b][f]=h):d[b]=h});return d}
function S(a){for(var g=[],e=0,d=0,c=Math.min,b=Math.max,f=0;f<a.length;f++){for(var k=a[f],l=null,h=0;h<k.length;h++)l=k[h],g.push(l),0===h?d=e=l[0]:(e=c(e,l[0]),d=b(d,l[0]));l&&g.push([(e+d)/2,0])}return g}var T={normalizeCentralMeridian:O,_foldCutResults:N,_prepareGeometryForCut:I,_offsetMagnitude:B,_pointNormalization:J,_updatePolyGeometry:H,_straightLineDensify:M,_createWrappers:function(a){var g=x.isObject(a)?a.prototype:x.getObject(a+".prototype");t.forEach(g.__msigns,function(e){var d=g[e.n];
g[e.n]=function(){var c=this,b=[],f,k=new K(L._dfdCanceller);e.f&&L._fixDfd(k);for(f=0;f<e.c;f++)b[f]=arguments[f];var l={dfd:k};b.push(l);var h=[],m;if(c.normalization&&!c._isTable){var q=Q(b,e.a);t.forEach(q,function(u){h=h.concat(u.value)});h.length&&(m=O(h))}m?(k._pendingDfd=m,m.addCallbacks(function(u){k.canceled||(l.assembly=R(u,q),k._pendingDfd=d.apply(c,b))},function(u){var z=c.declaredClass;z&&-1!==z.indexOf("FeatureLayer")?c._resolve([u],null,b[e.e],k,!0):c._errorHandler(u,b[e.e],k)})):
k._pendingDfd=d.apply(c,b);return k}})},_disassemble:Q,_addToBucket:F,_reassemble:R,getDenormalizedExtent:function(a){if(!a)return null;var g=a.getExtent();if(!g)return null;var e=a.spatialReference&&a.spatialReference._getInfo();if(!e)return g;var d=e.valid[0];e=e.valid[1];var c=2*e,b=g.getWidth(),f=g.xmax,k=g.xmin;if("extent"===a.type||0===b||b<=e||b>c||f<d||k>e)return g;switch(a.type){case "polygon":if(1<a.rings.length)var l=S(a.rings);else return g;break;case "polyline":if(1<a.paths.length)l=
S(a.paths);else return g;break;case "multipoint":l=a.points}a=Math.min;d=Math.max;c=new X(g.toJson());for(var h=0;h<l.length;h++){var m=l[h][0];0>m?(m+=e,k=d(m,k)):(m-=e,f=a(m,f))}c.xmin=f;c.xmax=k;return c.getWidth()<b?(c.xmin-=e,c.xmax-=e,c):g}};U("extend-esri")&&x.mixin(x.getObject("geometry",!0,V),T);return T});