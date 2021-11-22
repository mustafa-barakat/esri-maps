// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/vectorTiles/renderers/IconRenderer","require exports ../../../core/libs/gl-matrix/mat4 ../../../core/libs/gl-matrix/vec3 ../../../core/libs/gl-matrix/vec4 ../GeometryUtils ./rendererUtils ./vtShaderSnippets ../../webgl/ShaderVariations ../../webgl/VertexArrayObject".split(" "),function(M,N,m,F,G,B,H,I,J,C){return function(){function t(){this._attributeLocations={a_pos:0,a_vertexOffset:1,a_tex:2,a_levelInfo:3};this._attributeLocationsDD={a_pos:0,a_vertexOffset:1,
a_tex:2,a_levelInfo:3,a_color:4,a_size:5};this._spritesTextureSize=new Float32Array(2);this._initialized=!1;this._viewProjMat=m.create();this._offsetVector=F.create();this._extrudeMat=m.create();this._color=G.create()}t.prototype.dispose=function(){};t.prototype.render=function(c,d,a,f,u,w,n,e,x,k,y,h){var z=this;this._initialized||this._initialize(c);var K=e.hasDataDrivenIconSize?1:e.getLayoutValue("icon-size",a),g=e.hasDataDrivenIconColor?[1,1,1,1]:e.getPaintValue("icon-color",a),v=e.hasDataDrivenIconOpacity?
1:e.getPaintValue("icon-opacity",a);h*=g[3]*v;this._color[0]=h*g[0];this._color[1]=h*g[1];this._color[2]=h*g[2];this._color[3]=h;g=e.getLayoutValue("icon-rotation-alignment",a);2===g&&(g=1===e.getLayoutValue("symbol-placement",a)?0:1);var L=0===g;h=d.isSDF;v=e.hasDataDrivenIcon;f=3===f;g=B.degToByte(u);var p=n.tileTransform.transform,l=e.getPaintValue("icon-translate",a);if(0!==l[0]||0!==l[1]){m.copy(this._viewProjMat,n.tileTransform.transform);p=l[0];l=l[1];var q=0,r=0;r=(1<<n.key.level)/Math.pow(2,
a)*(n.coordRange/512);if(1===e.getPaintValue("icon-translate-anchor",a)){q=-B.C_DEG_TO_RAD*u;u=Math.sin(q);var D=Math.cos(q);q=r*(p*D-l*u);r*=p*u+l*D}else q=r*p,r*=l;this._offsetVector[0]=q;this._offsetVector[1]=r;this._offsetVector[2]=0;m.translate(this._viewProjMat,this._viewProjMat,this._offsetVector);p=this._viewProjMat}L?m.copy(this._extrudeMat,k):m.copy(this._extrudeMat,y);if(k=this._getIconVAO(c,n,v)){c.bindVAO(k);var b=this._shaderVariations.getProgram([h,v,f],void 0,void 0,v?this._attributeLocationsDD:
this._attributeLocations);c.bindProgram(b);h&&(k=e.getPaintValue("icon-halo-color",a),y=e.getPaintValue("icon-halo-width",a),b.setUniform4f("u_outlineColor",k[0],k[1],k[2],k[3]),b.setUniform1f("u_outlineSize",y));b.setUniformMatrix4fv("u_transformMatrix",p);b.setUniformMatrix4fv("u_extrudeMatrix",this._extrudeMat);b.setUniform2fv("u_normalized_origin",n.tileTransform.displayCoord);b.setUniform1f("u_depth",e.z);b.setUniform1f("u_mapRotation",g);b.setUniform1f("u_keepUpright",0);b.setUniform1f("u_level",
10*a);b.setUniform1f("u_fadeSpeed",10*w.fadeSpeed);b.setUniform1f("u_minfadeLevel",10*w.minfadeLevel);b.setUniform1f("u_maxfadeLevel",10*w.maxfadeLevel);b.setUniform1f("u_fadeChange",10*(a+w.fadeChange));b.setUniform1i("u_texture",1);b.setUniform1f("u_size",K);b.setUniform4fv("u_color",this._color);f&&(a=H.int32To4Bytes(d.layerID),b.setUniform4f("u_id",a[0],a[1],a[2],a[3]));d.markerPerPageElementsMap.forEach(function(E,A){z._spritesTextureSize[0]=x.getWidth(A)/4;z._spritesTextureSize[1]=x.getHeight(A)/
4;b.setUniform2fv("u_mosaicSize",z._spritesTextureSize);x.bind(c,9729,A,1);c.drawElements(4,E[1],5125,12*E[0])});c.bindVAO()}};t.prototype._initialize=function(c){if(this._initialized)return!0;c=new J("icon",["iconVS","iconFS"],[],I,c);c.addDefine("SDF","SDF",[!0,!0],"SDF");c.addDefine("DD","DD",[!0,!1],"DD");c.addDefine("ID","ID",[!0,!0],"ID");this._shaderVariations=c;this._vertexAttributes={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:16,normalized:!1,divisor:0},{name:"a_vertexOffset",
count:2,type:5122,offset:4,stride:16,normalized:!1,divisor:0},{name:"a_tex",count:4,type:5121,offset:8,stride:16,normalized:!1,divisor:0},{name:"a_levelInfo",count:4,type:5121,offset:12,stride:16,normalized:!1,divisor:0}]};this._vertexAttributesDD={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:24,normalized:!1,divisor:0},{name:"a_vertexOffset",count:2,type:5122,offset:4,stride:24,normalized:!1,divisor:0},{name:"a_tex",count:4,type:5121,offset:8,stride:24,normalized:!1,divisor:0},{name:"a_levelInfo",
count:4,type:5121,offset:12,stride:24,normalized:!1,divisor:0},{name:"a_color",count:4,type:5121,offset:16,stride:24,normalized:!0,divisor:0},{name:"a_size",count:1,type:5126,offset:20,stride:24,normalized:!1,divisor:0}]};return this._initialized=!0};t.prototype._getIconVAO=function(c,d,a){if(a){if(d.iconDDVertexArrayObject)return d.iconDDVertexArrayObject;a=d.iconDDVertexBuffer;var f=d.iconIndexBuffer;if(!a||!f)return null;d.iconDDVertexArrayObject=new C(c,this._attributeLocationsDD,this._vertexAttributesDD,
{geometry:a},f);return d.iconDDVertexArrayObject}if(d.iconVertexArrayObject)return d.iconVertexArrayObject;a=d.iconVertexBuffer;f=d.iconIndexBuffer;if(!a||!f)return null;d.iconVertexArrayObject=new C(c,this._attributeLocations,this._vertexAttributes,{geometry:a},f);return d.iconVertexArrayObject};return t}()});