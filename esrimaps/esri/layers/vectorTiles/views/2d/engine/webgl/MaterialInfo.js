// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/MaterialInfo","require exports ./enums ./MaterialInfoUtils ./MaterialInfoUtils_updateMaterialVariations ./MaterialKeyInfo ./util/serializationUtils".split(" "),function(n,h,f,p,r,k,l){Object.defineProperty(h,"__esModule",{value:!0});var m=function(){function c(b,d,e){this.unit=b;this.pageId=d;this.semantic=e}c.prototype.clone=function(){return new c(this.unit,this.pageId,this.semantic)};c.prototype.serialize=function(b){b.writeInt32(this.unit);
b.writeInt32(this.pageId);return b};c.deserialize=function(b){var d=b.readInt32();b=b.readInt32();return new c(d,b,"u_texture")};return c}();h.TexBindingInfo=m;var q=function(){function c(b,d){this.name=b;this.value=d}c.prototype.clone=function(){return new c(this.name,this.value)};c.prototype.serialize=function(b){b.writeInt32(this.value);return b};c.deserialize=function(b){b=b.readInt32();return new c("u_my_param",b)};return c}();h.MaterialParam=q;n=function(){function c(){this.texBindingInfo=[];
this.materialParams=[]}c.fromSprite=function(b,d,e){var g=new c,a=new k;a.geometryType=d;b?(a.sdf=b.sdf,a.pattern=!0,g.texBindingInfo.push(new m(1,b.page,"u_texture"))):(a.sdf=!1,a.pattern=!1);0===e?a.vvOpacity=a.vvSizeMinMaxValue=a.vvSizeScaleStops=a.vvSizeFieldStops=a.vvSizeUnitValue=a.vvColor=a.vvRotation=!1:(a.vvOpacity=0!==(e&f.WGLVVFlag.OPACITY),a.vvSizeMinMaxValue=0!==(e&f.WGLVVFlag.SIZE_MINMAX_VALUE),a.vvSizeScaleStops=0!==(e&f.WGLVVFlag.SIZE_SCALE_STOPS),a.vvSizeFieldStops=0!==(e&f.WGLVVFlag.SIZE_FIELD_STOPS),
a.vvSizeUnitValue=0!==(e&f.WGLVVFlag.SIZE_UNIT_VALUE),a.vvColor=0!==(e&f.WGLVVFlag.COLOR),a.vvRotation=0!==(e&f.WGLVVFlag.ROTATION));a.visibility=!1;g.materialKey=p.getMaterialKey(a);g.materialKeyInfo=a;return g};c.fromGlyph=function(b,d,e){var g=new c,a=new k;a.geometryType=d;a.sdf=!0;a.pattern=!1;a.visibility=!1;a.heatmap=!1;g.texBindingInfo.push(new m(2,b.page,"u_texture"));0===e?a.vvOpacity=a.vvSizeMinMaxValue=a.vvSizeScaleStops=a.vvSizeFieldStops=a.vvSizeUnitValue=a.vvColor=a.vvRotation=!1:(a.vvOpacity=
0!==(e&f.WGLVVFlag.OPACITY),a.vvSizeMinMaxValue=0!==(e&f.WGLVVFlag.SIZE_MINMAX_VALUE),a.vvSizeScaleStops=0!==(e&f.WGLVVFlag.SIZE_SCALE_STOPS),a.vvSizeFieldStops=0!==(e&f.WGLVVFlag.SIZE_FIELD_STOPS),a.vvSizeUnitValue=0!==(e&f.WGLVVFlag.SIZE_UNIT_VALUE),a.vvColor=0!==(e&f.WGLVVFlag.COLOR),a.vvRotation=0!==(e&f.WGLVVFlag.ROTATION));g.materialKey=p.getMaterialKey(a);g.materialKeyInfo=a;return g};c.prototype.copy=function(b){this.materialParams=b.materialParams.map(function(d){return d.clone()});this.texBindingInfo=
b.texBindingInfo.map(function(d){return d.clone()});b.materialKeyInfo&&(this.materialKeyInfo=new k,this.materialKeyInfo.copy(b.materialKeyInfo));this.materialKey=b.materialKey};c.prototype.serialize=function(b){b.writeInt32(this.materialKey);l.serializeList(b,this.texBindingInfo);l.serializeList(b,this.materialParams);return b};c.deserialize=function(b){var d=new c;d.materialKey=b.readInt32();d.texBindingInfo=l.deserializeList(b,m);d.materialParams=l.deserializeList(b,q);d.materialKeyInfo=new k;r(d.materialKeyInfo,
d.materialKey);return d};return c}();h.default=n});