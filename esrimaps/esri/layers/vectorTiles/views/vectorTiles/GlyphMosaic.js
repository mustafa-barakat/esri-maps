// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/vectorTiles/GlyphMosaic","require exports dojo/has ../../core/promiseUtils ./Rect ./RectangleBinPack ../webgl/Texture".split(" "),function(K,L,y,G,H,E,I){var v;y("stable-symbol-rendering")&&(v=new Set);return function(){function w(e,c,b){this.height=this.width=0;this._dirties=[];this._glyphData=[];this._currentPage=0;this._glyphIndex={};this._textures=[];this._rangePromises=new Map;(0>=e||0>=c)&&console.error("Glyph mosaic width and height must be greater than zero!");
this.width=e;this.height=c;this._glyphSource=b;this._binPack=new E(e-4,c-4);this._glyphData.push(new Uint8Array(e*c));this._dirties.push(!0);this._textures.push(void 0)}w.prototype.getGlyphItems=function(e,c,b){var a=this,k=[],z=this._glyphSource,l=new Set;e=1/256;for(var r=0;r<b.length;r++)l.add(Math.floor(b[r]*e));var m=[];l.forEach(function(d){if(256>=d){var f=c+d;a._rangePromises.has(f)?m.push(a._rangePromises.get(f)):(d=z.getRange(c,d).always(function(){a._rangePromises["delete"](f)}),a._rangePromises.set(f,
d),m.push(d))}});return G.all(m).then(function(d){d=a._glyphIndex[c];d||(d={},a._glyphIndex[c]=d);if(y("stable-symbol-rendering")){v.clear();for(var f=0;f<b.length;f++){var g=b[f];v.add(g)}var A=[];l.forEach(function(J){A.push(J)});A.sort();g=[];for(f=0;f<A.length;f++)for(var B=A[f],h=0;256>h;++h)g.push(256*B+h)}else g=b;f=0;for(B=g;f<B.length;f++)if(g=B[f],h=d[g]){if(!y("stable-symbol-rendering")||v.has(g))k[g]={rect:h.rect,metrics:h.metrics,page:h.page}}else{var p=z.getGlyph(c,g);if(p&&p.metrics){h=
p.metrics;var n=void 0;if(0===h.width)n=new H(0,0,0,0);else{var t=h.width+6,x=h.height+6,u=t%4?4-t%4:4,q=x%4?4-x%4:4;1===u&&(u=5);1===q&&(q=5);n=a._binPack.allocate(t+u,x+q);n.isEmpty&&(a._dirties[a._currentPage]||(a._glyphData[a._currentPage]=null),a._currentPage=a._glyphData.length,a._glyphData.push(new Uint8Array(a.width*a.height)),a._dirties.push(!0),a._textures.push(void 0),a._binPack=new E(a.width-4,a.height-4),n=a._binPack.allocate(t+u,x+q));u=a._glyphData[a._currentPage];p=p.bitmap;var F=
q=void 0;if(p)for(var C=0;C<x;C++){q=t*C;F=a.width*(n.y+C+1)+n.x;for(var D=0;D<t;D++)u[F+D+1]=p[q+D]}}d[g]={rect:n,metrics:h,tileIDs:null,page:a._currentPage};if(!y("stable-symbol-rendering")||v.has(g))k[g]={rect:n,metrics:h,page:a._currentPage};a._dirties[a._currentPage]=!0}}return k})};w.prototype.removeGlyphs=function(e){for(var c in this._glyphIndex){var b=this._glyphIndex[c];if(b){var a=void 0,k;for(k in b)if(a=b[k],a.tileIDs["delete"](e),0===a.tileIDs.size){for(var z=this._glyphData[a.page],
l=a.rect,r=void 0,m=void 0,d=0;d<l.height;d++)for(r=this.width*(l.y+d)+l.x,m=0;m<l.width;m++)z[r+m]=0;delete b[k];this._dirties[a.page]=!0}}}};w.prototype.bind=function(e,c,b,a){void 0===a&&(a=0);this._textures[b]||(this._textures[b]=new I(e,{pixelFormat:6406,dataType:5121,width:this.width,height:this.height},new Uint8Array(this.width*this.height)));var k=this._textures[b];k.setSamplingMode(c);this._dirties[b]&&k.setData(this._glyphData[b]);e.bindTexture(k,a);this._dirties[b]=!1};w.prototype.dispose=
function(){this._binPack=null;for(var e=0,c=this._textures;e<c.length;e++){var b=c[e];b&&b.dispose()}this._textures.length=0};return w}()});