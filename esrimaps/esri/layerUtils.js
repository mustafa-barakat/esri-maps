// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layerUtils",["dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/has","./kernel"],function(m,g,k,n,p){var l={_serializeLayerDefinitions:function(c,a){var b=[],d=/[:;]/;if(c&&(g.forEach(c,function(f,h){f&&(b.push([h,f]),!a&&d.test(f)&&(a=!0))}),0<b.length)){if(a){var e={};g.forEach(b,function(f){e[f[0]]=f[1]});e=k.toJson(e)}else e=[],g.forEach(b,function(f){e.push(f[0]+":"+f[1])}),e=e.join(";");return e}return null},_serializeTimeOptions:function(c,a){if(c){var b=[];g.forEach(c,
function(d,e){d&&(d=d.toJson(),a&&-1!==g.indexOf(a,e)&&(d.useTime=!1),b.push('"'+e+'":'+k.toJson(d)))});if(b.length)return"{"+b.join(",")+"}"}},_getVisibleLayers:function(c,a){var b=[],d;if(!c)return b;if(a)for(b=a.concat(),d=0;d<c.length;d++){a=c[d];var e=g.indexOf(c,a.id);a.subLayerIds&&-1<e&&(b.splice(e,1),b=b.concat(a.subLayerIds))}else b=this._getDefaultVisibleLayers(c);return b},_getDefaultVisibleLayers:function(c){var a=[],b;if(!c)return a;for(b=0;b<c.length;b++)0<=c[b].parentLayerId&&-1===
g.indexOf(a,c[b].parentLayerId)&&g.some(c,function(d){return d.id===c[b].parentLayerId})||c[b].defaultVisibility&&a.push(c[b].id);return a},_getLayersForScale:function(c,a){var b=[];if(0<c&&a){var d;for(d=0;d<a.length;d++)if(!(0<=a[d].parentLayerId&&-1===g.indexOf(b,a[d].parentLayerId)&&g.some(a,function(q){return q.id===a[d].parentLayerId}))&&0<=a[d].id){var e=!0,f=a[d].maxScale,h=a[d].minScale;if(0<f||0<h)0<f&&0<h?e=f<=c&&c<=h:0<f?e=f<=c:0<h&&(e=c<=h);e&&b.push(a[d].id)}}return b}};n("extend-esri")&&
m.mixin(p,l);return l});