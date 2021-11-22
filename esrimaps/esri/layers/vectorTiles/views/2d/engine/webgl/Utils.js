// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/Utils","require exports ../../../../arcade/Dictionary ../../../../arcade/Feature ../../../../core/Logger ../../../../core/screenUtils ../../../../support/arcadeUtils ./color ./enums ./SymbolProperties".split(" "),function(t,a,F,G,H,w,x,y,d,I){function p(b){return b.map(function(c){return c.name})}function m(b){for(var c={},e=0;e<b.length;e++){var f=b[e];c[f.name]=f.strideInBytes}return c}function z(b,c){switch(b){case d.WGLGeometryType.MARKER:return c?
a.C_ICON_VERTEX_NAMES_VV:a.C_ICON_VERTEX_NAMES;case d.WGLGeometryType.FILL:return c?a.C_FILL_VERTEX_NAMES_VV:a.C_FILL_VERTEX_NAMES;case d.WGLGeometryType.LINE:return c?a.C_LINE_VERTEX_NAMES_VV:a.C_LINE_VERTEX_NAMES;case d.WGLGeometryType.TEXT:return c?a.C_TEXT_VERTEX_NAMES_VV:a.C_TEXT_VERTEX_NAMES;case d.WGLGeometryType.LABEL:return a.C_LABEL_VERTEX_NAMES}return null}function q(b){switch(b){case "esriSMS":return"simple-marker";case "esriPMS":return"picture-marker";case "esriSLS":return"simple-line";
case "esriPLS":return"picture-line";case "esriSFS":return"simple-fill";case "esriPFS":return"picture-fill";case "esriTS":return"text"}return b}function A(b){if(b=q(b.type)){switch(b){case "simple-marker":case "picture-marker":return!0;case "CIMPointSymbol":return!0}return!1}}function B(b){if(b=q(b.type)){switch(b){case "simple-fill":case "picture-fill":return!0;case "CIMPolygonSymbol":return!0}return!1}}function C(b){if(b=q(b.type)){switch(b){case "simple-line":case "picture-line":return!0;case "CIMLineSymbol":return!0}return!1}}
function D(b){if(b=q(b.type)){switch(b){case "text":return!0;case "CIMTextSymbol":return!0}return!1}}function u(b){return b&&b.length||0}function E(b){return"string"===typeof b}Object.defineProperty(a,"__esModule",{value:!0});var v=H.getLogger("esri.views.2d.engine.webgl.Utils");a.C_HITTEST_SEARCH_SIZE=4;a.C_VBO_GEOMETRY="geometry";a.C_VBO_PERINSTANCE="per_instance";a.C_VBO_PERINSTANCE_VV="per_instance_vv";a.C_VBO_VISIBILITY="visibility";a.C_VBO_VISIBILITY_RANGE="visibilityRange";a.C_ICON_VERTEX_DEF=
[{name:a.C_VBO_GEOMETRY,strideInBytes:28,divisor:0}];a.C_ICON_VERTEX_DEF_VV=[{name:a.C_VBO_GEOMETRY,strideInBytes:44,divisor:0}];a.C_ICON_HEATMAP=[{name:a.C_VBO_GEOMETRY,strideInBytes:32,divisor:0}];a.C_FILL_VERTEX_DEF=[{name:a.C_VBO_GEOMETRY,strideInBytes:24,divisor:0}];a.C_FILL_VERTEX_DEF_VV=[{name:a.C_VBO_GEOMETRY,strideInBytes:32,divisor:0}];a.C_LINE_VERTEX_DEF=[{name:a.C_VBO_GEOMETRY,strideInBytes:32,divisor:0}];a.C_LINE_VERTEX_DEF_VV=[{name:a.C_VBO_GEOMETRY,strideInBytes:44,divisor:0}];a.C_TEXT_VERTEX_DEF=
[{name:a.C_VBO_GEOMETRY,strideInBytes:20,divisor:0},{name:a.C_VBO_VISIBILITY,strideInBytes:1,divisor:0}];a.C_TEXT_VERTEX_DEF_VV=[{name:a.C_VBO_GEOMETRY,strideInBytes:36,divisor:0},{name:a.C_VBO_VISIBILITY,strideInBytes:1,divisor:0}];a.C_LABEL_VERTEX_DEF=[{name:a.C_VBO_GEOMETRY,strideInBytes:20,divisor:0},{name:a.C_VBO_VISIBILITY,strideInBytes:1,divisor:0},{name:a.C_VBO_VISIBILITY_RANGE,strideInBytes:2,divisor:0}];a.C_ICON_VERTEX_NAMES=p(a.C_ICON_VERTEX_DEF);a.C_ICON_VERTEX_NAMES_VV=p(a.C_ICON_VERTEX_DEF_VV);
a.C_FILL_VERTEX_NAMES=p(a.C_FILL_VERTEX_DEF);a.C_FILL_VERTEX_NAMES_VV=p(a.C_FILL_VERTEX_DEF_VV);a.C_LINE_VERTEX_NAMES=p(a.C_LINE_VERTEX_DEF);a.C_LINE_VERTEX_NAMES_VV=p(a.C_LINE_VERTEX_DEF_VV);a.C_TEXT_VERTEX_NAMES=p(a.C_TEXT_VERTEX_DEF);a.C_TEXT_VERTEX_NAMES_VV=p(a.C_TEXT_VERTEX_DEF_VV);a.C_LABEL_VERTEX_NAMES=p(a.C_LABEL_VERTEX_DEF);a.C_ICON_STRIDE_SPEC=m(a.C_ICON_VERTEX_DEF);a.C_ICON_STRIDE_SPEC_VV=m(a.C_ICON_VERTEX_DEF_VV);a.C_ICON_STRIDE_SPEC_HEATMAP=m(a.C_ICON_HEATMAP);a.C_FILL_STRIDE_SPEC=m(a.C_FILL_VERTEX_DEF);
a.C_FILL_STRIDE_SPEC_VV=m(a.C_FILL_VERTEX_DEF_VV);a.C_LINE_STRIDE_SPEC=m(a.C_LINE_VERTEX_DEF);a.C_LINE_STRIDE_SPEC_VV=m(a.C_LINE_VERTEX_DEF_VV);a.C_TEXT_STRIDE_SPEC=m(a.C_TEXT_VERTEX_DEF);a.C_TEXT_STRIDE_SPEC_VV=m(a.C_TEXT_VERTEX_DEF_VV);a.C_LABEL_STRIDE_SPEC=m(a.C_LABEL_VERTEX_DEF);a.getStrides=function(b,c,e){void 0===e&&(e=!1);switch(b){case d.WGLGeometryType.MARKER:return c?a.C_ICON_STRIDE_SPEC_VV:e?a.C_ICON_STRIDE_SPEC_HEATMAP:a.C_ICON_STRIDE_SPEC;case d.WGLGeometryType.FILL:return c?a.C_FILL_STRIDE_SPEC_VV:
a.C_FILL_STRIDE_SPEC;case d.WGLGeometryType.LINE:return c?a.C_LINE_STRIDE_SPEC_VV:a.C_LINE_STRIDE_SPEC;case d.WGLGeometryType.TEXT:return c?a.C_TEXT_STRIDE_SPEC_VV:a.C_TEXT_STRIDE_SPEC;case d.WGLGeometryType.LABEL:return a.C_LABEL_STRIDE_SPEC}return null};a.getNamedBuffers=z;a.getSymbolGeometryType=function(b){return A(b)?d.WGLGeometryType.MARKER:C(b)?d.WGLGeometryType.LINE:B(b)?d.WGLGeometryType.FILL:D(b)?d.WGLGeometryType.TEXT:d.WGLGeometryType.UNKNOWN};a.normalizeSymbolType=q;a.isMarkerSymbol=
A;a.isFillSymbol=B;a.isLineSymbol=C;a.isPictureSymbol=function(b){if(b=q(b.type))switch(b){case "picture-marker":case "picture-line":case "picture-fill":return!0}return!1};a.isTextSymbol=D;a.getTextProperties=function(b){return I.TextProperties.pool.acquire(b.color?y.copyAndPremultiply(b.color):[255,255,255,255],b.haloColor?y.copyAndPremultiply(b.haloColor):[255,255,255,255],w.pt2px(b.haloSize),w.pt2px(b.font.size),b.angle*Math.PI/180,b.xoffset/b.font.size,b.yoffset/b.font.size,"left"===b.horizontalAlignment?
0:"right"===b.horizontalAlignment?1:.5,"top"===b.verticalAlignment?0:"bottom"===b.verticalAlignment?1:.5)};a.isSameUniformValue=function(b,c){return!1};a.isSameMaterialInfo=function(b,c){if(b.materialKey!==c.materialKey||u(b.texBindingInfo)!==u(c.texBindingInfo)||u(b.materialParams)!==u(c.materialParams))return!1;for(var e=b.texBindingInfo.length,f=0;f<e;++f){var g=b.texBindingInfo[f],h=c.texBindingInfo[f];if(g.unit!==h.unit||g.pageId!==h.pageId||g.semantic!==h.semantic)return!1}b=b.materialParams.length;
for(f=0;f<b;)return!1;return!0};a.serializeString=function(b,c,e){for(var f=0,g=b.length,h=0;h<g;++h)c&&(c[e+f]=b.charCodeAt(h)),++f;c&&(c[e+f]=0);++f;return f};a.deserializeString=function(b,c,e){var f=0;b.s="";for(var g=!0;g;){var h=c[e+f];++f;0!==h?b.s+=String.fromCharCode(h):g=!1}return f};a.isDefined=function(b){return null!==b&&void 0!==b};a.isNumber=function(b){return"number"===typeof b};a.isString=E;a.isStringOrNull=function(b){return null==b||E(b)};a.lerp=function(b,c,e){return b+(c-b)*e};
t=function(){function b(){this._arr=[];this._push=this._push.bind(this)}b.prototype._push=function(c,e){this._arr.push(e)};b.prototype.getKeys=function(c){this._arr.length=0;c&&c.forEach(this._push);return this._arr};return b}();a.KeysGetter=t;t=function(){function b(){this._arr=[];this._push=this._push.bind(this)}b.prototype._push=function(c,e){this._arr.push(c)};b.prototype.getValues=function(c){this._arr.length=0;c&&c.forEach(this._push);return this._arr};return b}();a.ValuesGetter=t;a.getCapType=
function(b){switch(b){case "butt":return d.CapType.BUTT;case "round":return d.CapType.ROUND;case "square":return d.CapType.SQUARE;default:return v.error("Cannot interpret unknown cap: "+b),d.CapType.UNKNOWN}};a.getJoinType=function(b){switch(b){case "miter":return d.JoinType.MITER;case "bevel":return d.JoinType.BEVEL;case "round":return d.JoinType.ROUND;default:return v.error("Cannot interpret unknown join: "+b),d.JoinType.UNKNOWN}};a.getVVType=function(b){switch(b){case "opacity":return d.VVType.OPACITY;
case "color":return d.VVType.COLOR;case "rotation":return d.VVType.ROTATION;case "size":return d.VVType.SIZE;default:return v.error("Cannot interpret unknown vv: "+b),null}};a.createArcadeFunction=function(b,c){var e=b.spatialReference,f=b.layer,g=x.createFunction(b.valueExpression),h=new G;return function(l,n){h.repurposeFromGraphicLikeObject(l.geometry,l.attributes,f);l=n&&new F({viewingMode:n.viewingMode,scale:n.scale});l=x.executeFunction(g,{vars:{$feature:h,$view:l||{}},spatialReference:e});
return c?c(l):l}};a.copyMeshData=function(b,c,e,f,g,h,l){for(var n in h){var k=h[n].stride,J=h[n].data,K=e[n].data,L=k*g.vertexCount/4,M=k*b/4,N=k*g.vertexFrom/4;for(k=0;k<L;++k)K[k+M]=J[k+N]}e=g.indexCount;for(k=0;k<e;++k)f[k+c]=l[k+g.indexFrom]-g.vertexFrom+b};a.C_VBO_INFO=(r={},r[a.C_VBO_GEOMETRY]=35044,r[a.C_VBO_VISIBILITY]=35044,r[a.C_VBO_VISIBILITY_RANGE]=35048,r);a.createGeometryData=function(b,c,e){for(var f=[],g=0;5>g;++g){for(var h={},l=0,n=z(g,b);l<n.length;l++){var k=n[l];h[k]={data:e(g,
k)}}f.push({data:c(g),buffers:h})}return f};var r});