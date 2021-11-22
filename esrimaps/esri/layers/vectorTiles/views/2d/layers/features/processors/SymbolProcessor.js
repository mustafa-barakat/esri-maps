// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/layers/features/processors/SymbolProcessor","require exports ../../../../../renderers ../../../../../core/executeAsync ../../../../../core/MapPool ../../../../../core/promiseUtils ../../../../../core/SetPool ../../../../../renderers/support/jsonUtils ../../../engine/webgl/rendererInfoUtils ../../../engine/webgl/Utils ../../../engine/webgl/mesh/factories/WGLMeshFactory".split(" "),function(y,z,A,E,w,x,B,C,F,u,G){function D(b,a){u.isMarkerSymbol(b)||u.isLineSymbol(b)?
a.add(b):u.isFillSymbol(b)&&(a.add(b),b.outline&&"none"!==b.outline.style&&a.add(b.outline))}function H(b,a){a.has(b)||a.set(b,new Set);var c=b.text;b=a.get(b);a=c.length;for(var d=0;d<a;d++){var m=c.charCodeAt(d);b.add(m)}}Object.defineProperty(z,"__esModule",{value:!0});y=function(){function b(a){this.type="symbol";this._symbolToMosaicItemMap=new Map;this._symbolToMosaicItemMap.clear();this.configuration=a.configuration;this.service=a.service;this.spatialReference=a.spatialReference;this.tileRenderer=
a.tileRenderer}b.prototype.destroy=function(){this._symbolToMosaicItemMap.clear()};b.prototype.getMeshData=function(a,c){return c&&c.features&&0!==c.features.length?this._processFeatures(a,c.features).then(function(d){return{tileKey:a.id,data:d}}):x.resolve({tileKey:a.id,data:null})};b.prototype.setConfiguration=function(a){this.configuration=a;this.factory=this.renderer=this.rendererInfo=null};b.prototype.getFactory=function(){this.factory||(this.factory=this._createFactory());return this.factory};
b.prototype.getRenderer=function(){this.renderer||(this.renderer=this._createRenderer());return this.renderer};b.prototype.getRendererInfo=function(){this.rendererInfo||(this.rendererInfo=this._createRendererInfo());return this.rendererInfo};b.prototype._createFactory=function(){if(!this.configuration)return null;var a={fields:this.service.fields,typeIdField:this.service.typeIdField,types:this.service.types};return G.default.from(this.getRenderer(),a,this._symbolToMosaicItemMap,this.service.geometryType,
this.service.objectIdField,this.spatialReference,this.configuration.devicePixelRatio)};b.prototype._createRenderer=function(){return this.configuration?C.fromJSON(this.configuration.renderer):null};b.prototype._createRendererInfo=function(){return this.configuration?F.createRendererInfo(C.fromJSON(this.configuration.renderer),this.spatialReference,{fields:this.service.fields}):null};b.prototype._processFeatures=function(a,c){var d=this;return c&&c.length?this._getMosaicItems(c).then(function(){return d._writeFeatures(a,
c)}):x.resolve(null)};b.prototype._writeFeatures=function(a,c){var d=this,m=0,v=this.getFactory(),r=v.createMeshData(c.length),h={viewingMode:"",scale:a.scale};return E(function(){var p=c[m++],q=m===c.length;v.write(r,p,h);return q}).then(function(){return d._encodeDisplayData(r)})};b.prototype._encodeDisplayData=function(a){var c={};a.encode(c,[]);return c};b.prototype._getReturnCentroid=function(a){function c(d){if(!d)return!1;d=d.type;return"simple-marker"===d||"picture-marker"===d||"text"===d}
if("esriGeometryPolygon"!==this.service.geometryType)return!1;switch(a.type){case "simple":return c(a.symbol);case "unique-value":return c(a.defaultSymbol)||a.uniqueValueInfos.some(function(d){return c(d.symbol)});case "class-breaks":return c(a.defaultSymbol)||a.classBreakInfos.some(function(d){return c(d.symbol)});default:return!0}};b.prototype._getMosaicItems=function(a){a=B.acquire();for(var c=w.acquire(),d=this.getRenderer(),m=0,v=d.getSymbols();m<v.length;m++){var r=v[m];u.isTextSymbol(r)?H(r,
c):D(r,a)}(d instanceof A.UniqueValueRenderer||d instanceof A.ClassBreaksRenderer)&&(d=d.backgroundFillSymbol)&&D(d,a);var h=this._symbolToMosaicItemMap,p=w.acquire(),q=[],k=0;a.forEach(function(l){h.has(l.id)||(p.set(k,l),q.push({symbol:l.toJSON(),id:k}),k++)});c.forEach(function(l,g){if(h.has(g.id)){var e=h.get(g.id).glyphMosaicItems,f=[];l.forEach(function(t){if(e&&e.length<t||!e[t])f[t]=t});0<f.length&&(p.set(k,g),q.push({symbol:g.toJSON(),id:k,glyphIds:f}),k++)}else{p.set(k,g);var n=[];l.forEach(function(t){return n.push(t)});
q.push({symbol:g.toJSON(),id:k,glyphIds:n});k++}});if(0<q.length)return this.tileRenderer.getMaterialItems(q).then(function(l){for(var g=0;g<l.length;g++){var e=l[g],f=p.get(e.id);if(f)if(u.isTextSymbol(f))if(h.has(f.id)){if(f=h.get(f.id).glyphMosaicItems,e=e.mosaicItem.glyphMosaicItems)for(var n=0;n<e.length;n++)null!=e[n]&&(f[n]=e[n])}else h.set(f.id,e.mosaicItem);else h.set(f.id,e.mosaicItem)}w.release(p)});B.release(a);w.release(c);return x.resolve()};return b}();z.SymbolProcessor=y});