// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/geometry/Geometry","require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/accessorSupport/decorators ./SpatialReference".split(" "),function(l,m,g,d,h,c,e){return function(f){function a(){var b=f.call(this)||this;b.type=null;b.extent=null;b.hasM=!1;b.hasZ=!1;b.spatialReference=e.WGS84;return b}g(a,f);Object.defineProperty(a.prototype,"cache",{get:function(){return{}},enumerable:!0,configurable:!0});a.prototype.clone=
function(){console.warn(".clone() is not implemented for "+this.declaredClass);return null};a.prototype.clearCache=function(){this.notifyChange("cache")};a.prototype.getCacheValue=function(b){return this.cache[b]};a.prototype.setCacheValue=function(b,k){this.cache[b]=k};d([c.property()],a.prototype,"type",void 0);d([c.property({readOnly:!0,dependsOn:["spatialReference"]})],a.prototype,"cache",null);d([c.property({readOnly:!0,dependsOn:["spatialReference"]})],a.prototype,"extent",void 0);d([c.property({type:Boolean,
json:{write:{overridePolicy:function(b){return{enabled:b}}}}})],a.prototype,"hasM",void 0);d([c.property({type:Boolean,json:{write:{overridePolicy:function(b){return{enabled:b}}}}})],a.prototype,"hasZ",void 0);d([c.property({type:e,json:{write:!0}})],a.prototype,"spatialReference",void 0);return a=d([c.subclass("esri.geometry.Geometry")],a)}(c.declared(h))});