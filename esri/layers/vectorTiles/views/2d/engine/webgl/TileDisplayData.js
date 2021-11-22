// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/TileDisplayData","require exports ./WGLDisplayList ./WGLDisplayObject ./mesh/factories/WGLMeshFactory ./util/serializationUtils".split(" "),function(q,r,k,l,m,n){return function(){function d(){}Object.defineProperty(d.prototype,"displayObjectRegistry",{get:function(){if(!this._displayObjectRegistry){this._displayObjectRegistry=new Map;for(var a=0,b=this.displayObjects;a<b.length;a++){var c=b[a];this._displayObjectRegistry.set(c.id,c)}}return this._displayObjectRegistry},
enumerable:!0,configurable:!0});Object.defineProperty(d.prototype,"displayList",{get:function(){if(!this._displayList){this._displayList=new k;for(var a=0,b=this.displayObjects;a<b.length;a++)for(var c=0,f=b[a].displayRecords;c<f.length;c++)this._displayList.addToList(f[c])}return this._displayList},set:function(a){this._displayList=a},enumerable:!0,configurable:!0});d.prototype.serialize=function(a){this.materialStore.serialize(a);n.serializeList(a,this.displayObjects);return a};d.prototype._deserializeObjects=
function(a){var b=a.readInt32();b=Array(b);for(var c=new k,f=new Map,p={store:this.materialStore},g=0;g<b.length;++g){var e=l.deserialize(a,p);b[g]=e;f.set(e.id,e);var h=0;for(e=e.displayRecords;h<e.length;h++)c.addToList(e[h])}this.displayObjects=b;this._displayList=c;this._displayObjectRegistry=f};d.deserialize=function(a){var b=new d;b.materialStore=m.MaterialStore.deserialize(a);b._deserializeObjects(a);return b};return d}()});