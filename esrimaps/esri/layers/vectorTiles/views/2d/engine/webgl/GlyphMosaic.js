// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/GlyphMosaic","require exports dojo/has dojo/promise/all ./Rect ./RectangleBinPack ../../../webgl/Texture".split(" "),function(C,D,r,y,z,w,A){var q;r("stable-symbol-rendering")&&(q=new Set);return function(){function p(b,c,a){this.height=this.width=0;this._dirties=[];this._glyphData=[];this._currentPage=0;this._glyphIndex={};this._textures=[];this._rangePromises=new Map;(0>=b||0>=c)&&console.error("Glyph mosaic width and height must be greater than zero!");
this.width=b;this.height=c;this._glyphSource=a;this._binPack=new w(b-4,c-4);this._glyphData.push(new Uint8Array(b*c));this._dirties.push(!0);this._textures.push(void 0);this._addDecorationGlyph()}p.prototype.getGlyphItems=function(b,c){for(var a=this,g=[],e=this._glyphSource,l=new Set,t=1/256,m=0;m<c.length;m++)l.add(Math.floor(c[m]*t));var n=[];l.forEach(function(h){if(256>=h){var d=b+h;a._rangePromises.has(d)?n.push(a._rangePromises.get(d)):(h=e.getRange(b,h).then(function(){a._rangePromises["delete"](d)}).catch(function(){a._rangePromises["delete"](d);
throw Error("Unable to query resource");}),a._rangePromises.set(d,h),n.push(h))}});return y(n).then(function(h){h=a._glyphIndex[b];h||(h={},a._glyphIndex[b]=h);if(r("stable-symbol-rendering")){q.clear();for(var d=0;d<c.length;d++){var f=c[d];q.add(f)}var u=[];l.forEach(function(B){u.push(B)});u.sort();f=[];for(d=0;d<u.length;d++)for(var v=u[d],k=0;256>k;++k)f.push(256*v+k)}else f=c;d=0;for(v=f;d<v.length;d++)if(f=v[d],k=h[f]){if(!r("stable-symbol-rendering")||q.has(f))g[f]={rect:k.rect,metrics:k.metrics,
page:k.page}}else if((k=e.getGlyph(b,f))&&k.metrics){var x=a._recordGlyph(k,f);h[f]={rect:x,metrics:k.metrics,tileIDs:null,page:a._currentPage};if(!r("stable-symbol-rendering")||q.has(f))g[f]={rect:x,metrics:k.metrics,page:a._currentPage};a._dirties[a._currentPage]=!0}return g})};p.prototype._recordGlyph=function(b,c){var a=b.metrics;if(0===a.width)a=new z(0,0,0,0);else{c=a.width+6;var g=a.height+6,e=c%4?4-c%4:4,l=g%4?4-g%4:4;1===e&&(e=5);1===l&&(l=5);a=this._binPack.allocate(c+e,g+l);a.isEmpty&&
(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(void 0),this._binPack=new w(this.width-4,this.height-4),a=this._binPack.allocate(c+e,g+l));e=this._glyphData[this._currentPage];b=b.bitmap;var t=l=void 0;if(b)for(var m=0;m<g;m++){l=c*m;t=this.width*(a.y+m+1)+a.x;for(var n=0;n<c;n++)e[t+n+1]=b[l+n]}}return a};p.prototype._addDecorationGlyph=
function(){for(var b=[117,149,181,207,207,181,149,117],c=[],a=0;a<b.length;a++)for(var g=b[a],e=0;11>e;e++)c.push(g);b={metrics:{width:5,height:2,left:0,top:0,advance:0},bitmap:new Uint8Array(c)};this._recordGlyph(b,0)};p.prototype.bind=function(b,c,a,g){this._textures[a]||(this._textures[a]=new A(b,{pixelFormat:6406,dataType:5121,width:this.width,height:this.height},new Uint8Array(this.width*this.height)));var e=this._textures[a];e.setSamplingMode(c);this._dirties[a]&&e.setData(this._glyphData[a]);
b.bindTexture(e,g);this._dirties[a]=!1};p.prototype.dispose=function(){this._binPack=null;for(var b=0,c=this._textures;b<c.length;b++){var a=c[b];a&&a.dispose()}this._textures.length=0;this._glyphData.length=0};return p}()});