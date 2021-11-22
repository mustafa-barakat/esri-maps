// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/MathUtil",[],function(){function k(a){return Array.isArray(a)?a:[a.x,a.y]}function n(a){return Array.isArray(a)?a:[a.x,a.y,a.x+a.w,a.y+a.h]}function q(a){return Array.isArray(a)?{x:a[0],y:a[1],w:a[2]-a[0],h:a[3]-a[1]}:a}function l(a){return[[a[0],a[1]],[a[2],a[1]],[a[2],a[3]],[a[0],a[3]],[a[0]+(a[2]-a[0])/2,a[1]+(a[3]-a[1])/2]]}var e={rotatePointAroundPoint:function(a,b,d){d=e.degToRad(d);var c=k(a),f=k(b);b=Math.cos(d)*(f[0]-c[0])-Math.sin(d)*(f[1]-c[1])+c[0];
d=Math.sin(d)*(f[0]-c[0])+Math.cos(d)*(f[1]-c[1])+c[1];return Array.isArray(a)?[b,d]:{x:b,y:d}},degToRad:function(a){return a*Math.PI/180},radToDeg:function(a){return 180*a/Math.PI},cosDeg:function(a){return Math.cos(e.degToRad(a))},sinDeg:function(a){return Math.sin(e.degToRad(a))},angleTo180_180Range:function(a){a=(a+180)%360;0>a&&(a=360+a);return a-180},angleTo0_360Range:function(a){a%=360;0>a&&(a=360+a);return a},calcVectorLength:function(a){var b=a[0]-a[2];a=a[1]-a[3];return Math.sqrt(b*b+a*
a)},addPointToVector:function(a,b){b=k(b);a=a.slice();a[0]+=b[0];a[1]+=b[1];a[2]+=b[0];a[3]+=b[1];return a},subtractPointFromVector:function(a,b){b=k(b);a=a.slice();a[0]-=b[0];a[1]-=b[1];a[2]-=b[0];a[3]-=b[1];return a},putVectorToOrigin:function(a){return e.subtractPointFromVector(a,[a[0],a[1]])},normalizeVector:function(a){a=e.putVectorToOrigin(a);var b=e.calcVectorLength(a);a[2]/=b;a[3]/=b;return a},calcDotProduct:function(a,b){a=e.putVectorToOrigin(a);b=e.putVectorToOrigin(b);return a[2]*b[2]+
a[3]*b[3]},calcAngleBetweenVectors:function(a,b){a=e.normalizeVector(a);b=e.normalizeVector(b);return Math.acos(e.calcDotProduct(a,b))},addLengthToVector:function(a,b){var d=e.calcVectorLength(a),c=[a[0],a[1]];a=e.normalizeVector(a);a[2]*=d+b;a[3]*=d+b;return e.addPointToVector(a,c)},rotateVectorAroundPoint:function(a,b,d){b=k(b);var c=e.rotatePointAroundPoint(b,[a[0],a[1]],d);a=e.rotatePointAroundPoint(b,[a[2],a[3]],d);return[c[0],c[1],a[0],a[1]]},toLineABC:function(a){var b=a[3]-a[1],d=a[0]-a[2];
return[b,d,-b*a[0]-d*a[1]]},intersect2Lines:function(a,b){var d=e.toLineABC(a),c=e.toLineABC(b);b=d[0];a=d[1];d=d[2];var f=c[0],h=c[1];c=c[2];var g=b*h-f*a;return 0===g?null:[(c*a-d*h)/g,(f*d-b*c)/g]},intersectLineWithRect:function(a,b){function d(p,r){(p=e.intersect2Lines(a,[p[0],p[1],r[0],r[1]]))&&e.isPointInRect(b,p)&&m.push(p)}var c=l(b),f=c[0],h=c[1],g=c[2];c=c[3];var m=[];d(f,h);d(h,g);d(g,c);d(c,f);if(2!==m.length)return null;f=[m[0][0],m[0][1],m[1][0],m[1][1]];return e.calcVectorLength(f)?
f:null},isPointInRect:function(a,b){a=n(a);b=k(b);var d=a[2]-a[0],c=a[3]-a[1];return!(b[0]<a[0]||b[0]>a[0]+d||b[1]<a[1]||b[1]>a[1]+c)},isRectInRect:function(a,b){return e.checkRectsIntersect([a,b])&&l(n(a)).every(function(d){return e.isPointInRect(b,d)})},checkRectsIntersect:function(a){a=a.map(n);return a.every(function(b){var d=l(b);return a.every(function(c){return b===c?!0:d.some(function(f){return e.isPointInRect(c,f)})||l(c).some(function(f){return e.isPointInRect(b,f)})})})},getRotatedRectBox:function(a,
b){var d=!Array.isArray(a);a=n(a);var c=l(a);a=c[0];var f=c[1],h=c[2],g=c[3];c=c[4];a=e.rotatePointAroundPoint(c,a,b);f=e.rotatePointAroundPoint(c,f,b);h=e.rotatePointAroundPoint(c,h,b);g=e.rotatePointAroundPoint(c,g,b);a=e.getPointsExtent([a,f,h,g]);return d?q(a):a},uniteRects:function(a){var b=!Array.isArray(a[0]);a=a.map(n);var d=[];a.forEach(function(c){d=d.concat(l(c))});a=e.getPointsExtent(d);return b?q(a):a},getPointsExtent:function(a){var b=!Array.isArray(a[0]),d=Infinity,c=-Infinity,f=Infinity,
h=-Infinity;a.forEach(function(g){g=k(g);d=Math.min(d,g[0]);c=Math.max(c,g[0]);f=Math.min(f,g[1]);h=Math.max(h,g[1])});a=[d,f,c,h];return b?q(a):a}};return e});