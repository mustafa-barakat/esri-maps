// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/renderers/support/UniqueValueInfo","require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/accessorSupport/decorators ../../symbols/support/jsonUtils ../../symbols/support/typeUtils".split(" "),function(f,g,m,c,n,b,e,k){Object.defineProperty(g,"__esModule",{value:!0});f=function(h){function a(){var d=null!==h&&h.apply(this,arguments)||this;d.description=null;d.label=null;d.symbol=null;d.value=
null;return d}m(a,h);var l=a;a.prototype.clone=function(){return new l({value:this.value,description:this.description,label:this.label,symbol:this.symbol?this.symbol.clone():null})};c([b.property({type:String,json:{write:!0}})],a.prototype,"description",void 0);c([b.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);c([b.property({types:k.rendererTypes,json:{origins:{"web-scene":{read:e.read,write:{target:{symbol:{types:k.rendererTypes3D}},writer:e.writeTarget}}},read:e.read,write:e.writeTarget}})],
a.prototype,"symbol",void 0);c([b.property({type:String,json:{write:!0}})],a.prototype,"value",void 0);return a=l=c([b.subclass("esri.renderers.support.UniqueValueInfo")],a)}(b.declared(n));g.UniqueValueInfo=f;g.default=f});