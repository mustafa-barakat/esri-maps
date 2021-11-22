// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/geometry/support/contains",["require","exports"],function(t,l){function e(a,b,c,d){return b>=a.xmin&&b<=a.xmax&&c>=a.ymin&&c<=a.ymax?null!=d&&a.hasZ?d>=a.zmin&&d<=a.zmax:!0:!1}function n(a,b){if(a=a.rings)if(Array.isArray(a[0][0])){for(var c=!1,d=0,g=a.length;d<g;d++)c=p(c,a[d],b);b=c}else b=p(!1,a,b);else b=!1;return b}function p(a,b,c){var d=c[0];c=c[1];for(var g=0,h=0,k=b.length;h<k;h++){g++;g===k&&(g=0);var f=b[h],q=f[0];f=f[1];var m=b[g],r=m[0];m=m[1];(f<c&&m>=
c||m<c&&f>=c)&&q+(c-f)/(m-f)*(r-q)<d&&(a=!a)}return a}Object.defineProperty(l,"__esModule",{value:!0});l.extentContainsPoint=function(a,b){return e(a,b.x,b.y,b.z)};l.extentContainsExtent=function(a,b){var c=b.xmin,d=b.ymin,g=b.zmin,h=b.xmax,k=b.ymax,f=b.zmax;return a.hasZ&&b.hasZ?e(a,c,d,g)&&e(a,c,k,g)&&e(a,h,k,g)&&e(a,h,d,g)&&e(a,c,d,f)&&e(a,c,k,f)&&e(a,h,k,f)&&e(a,h,d,f):e(a,c,d)&&e(a,c,k)&&e(a,h,k)&&e(a,h,d)};l.extentContainsCoords2D=function(a,b){return e(a,b[0],b[1])};l.extentContainsCoords3D=
function(a,b){return e(a,b[0],b[1],b[2])};l.polygonContainsPoint=function(a,b){return n(a,[b.x,b.y])};l.polygonContainsCoords=n});