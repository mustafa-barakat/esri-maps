// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/declare",["require","exports","dojo/_base/declare"],function(n,p,h){function m(a,b){a&&!Array.isArray(a)&&"function"!==typeof a&&(b=a,a=null);a=a||[];b=b||{};return e([this].concat(a),b)}function e(a,b){a&&!Array.isArray(a)&&"function"!==typeof a&&(b=a,a=null);"function"===typeof a?a=[a]:a||(a=[]);b=b||{};var d;var c=0;for(d=f.length;c<d;c++)f[c](a,b);a=h(a,b);a.createSubclass=m;c=0;for(d=g.length;c<d;c++)g[c](a);return a}var f=[],g=[];(function(a){a.hasMixin=
function(b,d){b=Array.isArray(b)?b.reduce(function(k,l){return l._meta?k.concat(l._meta.bases):k},[]):b._meta?b._meta.bases:b;if(!b)return!1;if("string"===typeof d)for(var c=b.length-1;0<=c;c--)if(b[c].prototype.declaredClass===d)return!0;return-1!==b.indexOf(d)};a.safeMixin=function(b,d){return h.safeMixin(b,d)};a.before=function(b){f.push(b)};a.after=function(b){g.push(b)}})(e||(e={}));return e});