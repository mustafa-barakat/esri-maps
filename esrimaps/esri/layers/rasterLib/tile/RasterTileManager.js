// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/tile/RasterTileManager","dojo/_base/declare dojo/_base/lang dojo/Deferred dojo/when ../DeferredList2 ../../../geometry/Extent ../../../SpatialReference ../../../geometry/Point ../../PixelBlock ./RasterTileInfo ../raster/rasterProjectionHelper".split(" "),function(F,u,B,D,E,z,G,H,C,J,y){var I=function(a,b){var c;for(c=0;c<a.length;c++)if(b(a[c]))return c;return-1};return F(null,{declaredClass:"esri.layers.rasterLib.tile.RasterTileManager",count:null,fullBoundary:null,
tileBoundary:null,tiles:null,resolution:null,virtual:!0,prefetchBufferSize:0,_progressiveGlobal:!1,_MAX_TILES:128,_defaultMatrixResolution:20,constructor:function(a){this.tiles=[];this.xformSetting={};this.mapSpatialReference=a&&a.mapSR;this.layer=a&&a.layer;this.identifiers=this.layer.raster.rasterFunction?this.layer.raster.getMemberRasters().map(function(b){return b._rasterId}):[this.layer.raster._rasterId];(a=a&&a.tileInfo)&&this.setTileInfo(a)},setTileInfo:function(a){this.tileInfo=a;this.virtual=
a.virtual;this.mapResolution=null;this.tiles.length=0;this.xformSetting.requireProjection=!this.virtual&&!this.mapSpatialReference.equals(this.tileInfo.spatialReference);this.xformSetting.requirePE=y.requirePE(this.mapSpatialReference,this.tileInfo.spatialReference);this.xformSetting.meshSize=this.xformSetting.requireProjection?[this._defaultMatrixResolution,this._defaultMatrixResolution]:[1,1];this.halfWorldWidth=y.getHalfWorldWidth(a.spatialReference)},updateResolution:function(a,b){if(!(this.mapResolution&&
a&&this._resolutionEqual(this.mapResolution.x,a.x)&&this._resolutionEqual(this.mapResolution.y,a.y))){this.resetTiles();var c=this.xformSetting.requireProjection;this.mapResolution=this.resolution=a;c&&(this.resolution=y.projectResolution(a,this.tileInfo.spatialReference,this.layer.projectedFullExtent||b));this._resolution=this.resolution;a=this.resolution;if(!this.tileInfo.virtual){c=.75*Math.min(a.x,a.y)+.25*Math.max(a.x,a.y);if(c>=this.tileInfo.lods[0].resolution){var d=this.tileInfo.lods[0];this.ooe=
!0}else{if(c<=this.tileInfo.lods[this.tileInfo.lods.length-1].resolution)d=this.tileInfo.lods[this.tileInfo.lods.length-1];else for(a=0;a<this.tileInfo.lods.length-1;a++)if(d=this.tileInfo.lods[a],b=this.tileInfo.lods[a+1],d.resolution>=c&&b.resolution<=c){d.resolution-c>c-b.resolution&&(d=b);break}this.ooe=!1}this.level=d&&d.level;a=this.resolution=new H({x:d.resolution,y:d.resolution,spatialReference:this.tileInfo.spatialReference})}c=this.layer.raster.rasterInfo.extent;d=this.tileInfo.origin;b=
this.tileInfo.cols;var e=this.tileInfo.rows;this.fullBoundary={rowStart:Math.floor((d.y-c.ymax)/a.y/e),rowEnd:Math.floor((d.y-c.ymin-a.y)/a.y/e),colStart:Math.floor((c.xmin-d.x)/a.x/b),colEnd:Math.floor((c.xmax-d.x-a.x)/a.x/b)};if(c=this.halfWorldWidth){e=Math.ceil(c/a.x/(b/2));var f=this.tileInfo.applyGCS360Transform?360:c,k=Math.round(b-(f-d.x)/a.x%b);k===b&&(k=0);this.fullBoundary.colRange=e;this.fullBoundary.paddingRight=k;this.fullBoundary.paddingLeft=Math.round((e*b*a.x+d.x-f-(this.tileInfo.applyGCS360Transform?
0:d.x+c))/a.x)}this.hasNewData=!0}},getXformGrid:function(){var a=this.mapExtent,b=this.layer._hasTilingEffects?this.extent:this.fullExtent,c=this.layer.getCurrentResolution(),d=JSON.stringify(a.toJson())+JSON.stringify(b.toJson());this._datumTransformationInitialized||(this._datumTransformationInitialized=!0,this._datumTransformation=y.getDefaultDatumTransformationForDataset(this.layer.raster.rasterInfo.extent,a.spatialReference,!0));this._cachedExtentString&&this._cachedExtentString===d||(this._cachedExtentString=
d,this._xformGrid=a=y.getProjectionOffsetGrid(a,b,c,this.tileInfo.applyGCS360Transform,this.halfWorldWidth,this._datumTransformation));a=this._xformGrid;this.xformSetting.meshSize=a&&a.size;return a},getWrapTimes:function(a){var b=y.getHalfWorldWidth(a.spatialReference);if(!b)return 0;var c=2*b;b=this.tileInfo.applyGCS360Transform?0:-b;return Math.floor((a.xmax-b)/c)-Math.floor((a.xmin-b)/c)},normalizeCoordinate:function(a,b){if(!b)return 0;var c=2*b;if(0<a){for(;a>b;)a-=c;return a}for(;a<-b;)a+=
c;return a},resetTiles:function(){this.tiles.forEach(u.hitch(this,function(a){a.fetch&&!a.fetch.isCanceled()&&a.fetch.cancel();a.update&&!a.update.isCanceled()&&a.update.cancel()}));this.tiles.length=0},updateExtent:function(a,b){this.mapExtent=this.extent=a;var c=this.xformSetting.requireProjection;if(c){this.extent=y.project(a,this.tileInfo.spatialReference,this.tileInfo.applyGCS360Transform);if(!this.extent)return;this.extent.spatialReference=new G(this.extent.spatialReference.toJson())}this.updateResolution(b,
a);var d=this.extent,e=this.tileInfo,f=e.cols,k=e.rows;b=this.resolution;var g=d;c=c?this.layer.raster.rasterInfo.extent:this.layer.raster.projectedFullExtent;this.ooe&&(g=this._getIntersect(d,c));var m=Math.floor((g.xmin-e.origin.x)/b.x/f)-this.prefetchBufferSize,n=Math.floor((g.xmax-e.origin.x)/b.x/f)+this.prefetchBufferSize,r=null;a=this.getWrapTimes(a);var w=this.fullBoundary&&this.fullBoundary.colRange;a&&this.halfWorldWidth&&(n===m&&(r=m),n+=a*w);var l=this.halfWorldWidth&&this.tiles.length&&
(a!==this.wrapTimes||r!==this._circlularColId);l&&(this._wrapSwitchCount=this._wrapSwitchCount?this._wrapSwitchCount+1:1);this.wrapTimes=a;this._circlularColId=r;var v=Math.floor((e.origin.y-g.ymax)/b.y/k)-this.prefetchBufferSize;r=Math.floor((e.origin.y-g.ymin)/b.y/k)+this.prefetchBufferSize;this.tileBoundary={rowStart:v,rowEnd:r,colStart:m,colEnd:n};var h,p;((g=(r-v+1)*(n-m+1)>this._MAX_TILES||!this.virtual&&this._resolution.x>8*this.tileInfo.lods[0].resolution)||2<a||l)&&this.resetTiles();if(!(g||
2<a)){l=this.tiles;g=!1;for(h=l.length-1;0<=h;h--){var x=l[h].row;var t=l[h].wrapCol;if(x<v||x>r||t<m||t>n)l[h].fetch&&!l[h].fetch.isCanceled()&&l[h].fetch.cancel(),l[h].update&&!l[h].update.isCanceled()&&l[h].update.cancel(),l.splice(h,1),g=!0}for(h=v;h<=r;h++)for(p=m;p<=n;p++){v=new z(e.origin.x+b.x*f*p,e.origin.y-b.y*k*(h+1),e.origin.x+b.x*f*(p+1),e.origin.y-b.y*k*h,d.spatialReference);var A=a&&w?0<=p?p%w:w- -p%w:p;x=I(l,function(q){return q.row===h&&q.col===A&&q.wrapCol===p});t=c.xmax>=v.xmax?
f:Math.round((c.xmax-v.xmin)/b.x);-1===x&&(l.push({row:h,col:A,wrapCol:p,cellsizeX:b.x,cellsizeY:b.y,width:f,height:k,actualWidth:t,extent:v,normalizedExtent:this._wrapExtent(v,A),pixelBlock:null,virtual:this.virtual,level:this.level,tileType:this.tileInfo.tileType||"Raster"}),g=!0)}g&&this._sortTiles();b=this.tileInfo.rows*(this.tileBoundary.rowEnd-this.tileBoundary.rowStart+1);this.width=this.tileInfo.cols*(this.tileBoundary.colEnd-this.tileBoundary.colStart+1);this.height=b;this.count=l.length;
b=Math.min.apply(null,l.map(function(q){return q.extent.xmin}));e=Math.max.apply(null,l.map(function(q){return q.extent.xmax}));f=Math.min.apply(null,l.map(function(q){return q.extent.ymin}));k=Math.max.apply(null,l.map(function(q){return q.extent.ymax}));b=this.fullExtent=new z(b,f,e,k,d.spatialReference);if(this.layer.roaming||this.layer.useWebGL)this.layer._hasTilingEffects?(this.xformSetting.offset=[0,0],this.xformSetting.scale=[1,1]):(g&&(this._tilesChanged=!0),this.xformSetting.offset=[(d.xmin-
b.xmin)/(b.xmax-b.xmin),-(b.ymin-d.ymin)/(b.ymax-b.ymin)],this.xformSetting.scale=[(d.xmax-d.xmin)/(b.xmax-b.xmin),(d.ymax-d.ymin)/(b.ymax-b.ymin)])}},fetchTiles:function(a){(this._tilesChanged||a)&&this._fetchTiles(a)},_fetchTiles:function(a){this._fetchCounter=0;var b=this.extent;this.fetchAllCompleted=a?new B:null;(this._tilesChanged||a&&this.layer._hasTilingEffects)&&this.tiles.forEach(u.hitch(this,function(d){d.updateCompleted=!1}));var c={};!this.layer.roaming&&this.layer._hasTilingEffects&&
a?(this.identifiers.forEach(function(d,e){c[d]={extent:this.extent,pixelBlock:new C({width:this.layer._map.width,height:this.layer._map.height,pixels:[],pixelType:"",mask:null,statistics:[]})}}.bind(this)),this.originalPixelData={extent:this.extent,src:c,isEmpty:!0}):this._tilesChanged&&(this.identifiers.forEach(function(d,e){c[d]={extent:this.fullExtent,pixelBlock:new C({width:128,height:128,pixels:[],pixelType:"",mask:null,statistics:[]})}}.bind(this)),this.originalPixelData={extent:this.fullExtent,
src:c,isEmpty:!0});this.tiles.forEach(u.hitch(this,function(d){if(d.fetch)d.update||(d.update=this.updateTile(d));else{if(this._isTileOutSide(d,b)){d.updateCompleted=!0;return}this._requestTile(d)}this.layer.roaming&&this.layer.useWebGL?this._fillPixelData(d):d.src&&a&&(this.layer._hasTilingEffects||this.layer.useWebGL)&&(this._fillPixelData(d),this.layer._hasTilingEffects&&(d.updateCompleted=!0),d.processedPixelBlock=null,d.renderedPixelBlock=null)}));0===this._fetchCounter&&(this._fetched=!0);this._tilesChanged=
!1;a&&this._updateFetchStatus()},updateTile:function(a,b){var c=new B;if(!a.src&&!a.fetch)return c.resolve(a),c.promise;D(a.src||a._fetched||a.fetch,u.hitch(this,function(){var d=this.layer.tileMode&&this.layer._rasterHandler&&!(this.layer._hasTilingEffects||this.layer.useWebGL),e=this.layer._drawTile,f=this._validateRawPixelBlocks(a);this.layer._hasTilingEffects&&!this.layer.useWebGL&&(e=e&&(this._progressiveGlobal||b));if((b||!b&&f)&&(d||e||this.layer.roaming)){if(this.xformSetting.requireProjection&&
this.layer.useWebGL&&(this.xformSetting.gridConfig=this.getXformGrid(),null==this.xformSetting.gridConfig))return c.cancel(),c.promise;this._processTile(a,b).then(u.hitch(this,function(k){c.isCanceled()||this._renderTile(k,b).then(u.hitch(this,function(g){this.hasNewData=!1;c.isCanceled()||c.resolve(g)}))}))}else b||f||(a.updateCompleted=!0),this.layer.useWebGL||this.layer._hasTilingEffects?c.resolve(this.originalPixelData):c.resolve()}));return c.promise},setLayer:function(a){this.layer=a},fillupTiles:function(){this.tiles.forEach(u.hitch(this,
function(a){a.update&&a.updateCompleted&&!a.filled&&(a.updateCompleted=!1,this._fillPixelData(a),a.updateCompleted=!0)}))},_validateRawPixelBlocks:function(a){return a&&a.src&&!this.identifiers.some(function(b){return!(a.src[b].pixelBlock&&0!==a.src[b].pixelBlock.validPixelCount&&a.src[b].pixelBlock.pixels&&0<a.src[b].pixelBlock.pixels.length)})},_wrapExtent:function(a,b){if(a){if(this.tileInfo.applyGCS360Transform){var c=this.normalizeCoordinate(a.xmin,180);0>c&&(c+=360);return new z({xmin:c,ymin:a.ymin,
xmax:a.xmax-a.xmin+c,ymax:a.ymax,spatialReference:a.spatialReference})}if(this.halfWorldWidth){c=null!=b?new z({xmin:this.tileInfo.origin.x+this.tileInfo.cols*b*this.resolution.x,ymin:a.ymin,xmax:this.tileInfo.origin.x+this.tileInfo.cols*(b+1)*this.resolution.x,ymax:a.ymax,spatialReference:a.spatialReference}):new z({xmin:a.xmin,ymin:a.ymin,xmax:a.xmax,ymax:a.ymax,spatialReference:a.spatialReference});b=this.normalizeCoordinate(c.xmin,this.halfWorldWidth);var d=b-c.xmin;.01<Math.abs(d)&&(c.xmin=b,
c.xmax+=d)}return c||a}},_getIntersect:function(a,b){return new z(Math.max(a.xmin,b.xmin),Math.max(a.ymin,b.ymin),Math.min(a.xmax,b.xmax),Math.min(a.ymax,b.ymax),a.spatialReference)},_isTileOutSide:function(a,b){var c=!1;if(a.virtual){var d=a.normalizedExtent;if(b=b||(this.xformSetting.requireProjection?this.layer.raster.rasterInfo.extent:this.layer.raster.projectedFullExtent)){a=d.xmin-this.prefetchBufferSize*this.tileInfo.cols*this.resolution.x;c=d.ymin-this.prefetchBufferSize*this.tileInfo.rows*
this.resolution.y;var e=d.xmax+this.prefetchBufferSize*this.tileInfo.cols*this.resolution.x;d=d.ymax+this.prefetchBufferSize*this.tileInfo.rows*this.resolution.y;c=e<=b.xmin||a>=b.xmax||d<=b.ymin||c>=b.ymax}else c=!1}else c=0>a.level||a.row<this.fullBoundary.rowStart||a.row>this.fullBoundary.rowEnd||a.col<this.fullBoundary.colStart||a.col>this.fullBoundary.colEnd;return c},_resolutionEqual:function(a,b){return a===b||a&&b&&Math.abs(a-b)<Math.abs(b/1E4)?!0:!1},_requestTile:function(a){var b=this.identifiers,
c;if(this._isTileOutSide(a)){var d=new B;a.updateCompleted=!0;d.resolve(null);d=d.promise}else d=this.layer.raster.rasterFunction?new E(this.layer.raster.getMemberRasters().map(function(e){return e.read(a)})):new E([this.layer.raster.read(a)]);a.fetch=d;this._fetchCounter++;D(a.src||a._fetched||d,u.hitch(this,function(e){if(c=e&&e.some(function(k){return k[0]})){var f={};e.forEach(function(k,g){f[b[g]]=k[0]&&k[1]?{extent:k[1].extent,pixelBlock:k[1].pixelBlock,width:k[1].width,height:k[1].height}:
null});a.src=f}else a.src=null;this._fetchCounter--;0===this._fetchCounter&&(this._fetched=!0);a._fetched=!0;this._updateFetchStatus()}),u.hitch(this,function(){this._fetchCounter--;0===this._fetchCounter&&(this._fetched=!0);a._fetched=!0;this._updateFetchStatus()}));a.update=this.updateTile(a)},_updateFetchStatus:function(){this.layer._drawTile&&this.fetchAllCompleted&&!this.fetchAllCompleted.isResolved()&&!this.tiles.some(function(a){return!a._fetched})&&(this.tiles.forEach(u.hitch(this,function(a){this._fillPixelData(a)})),
this.fetchAllCompleted.resolve())},_fillPixelData:function(a,b){if(a&&!a.updateCompleted)if(Math.abs(a.cellsizeX-this.resolution.x)>a.cellsizeX/10)a.updateCompleted=!0;else if(!1===this._validateRawPixelBlocks(a))a.updateCompleted=!0;else{var c=a.extent;if(this.layer.roaming||this.layer.useWebGL&&!this.layer._hasTilingEffects){var d=this.fullExtent;var e=this.tileInfo.cols*(this.tileBoundary.colEnd-this.tileBoundary.colStart+1);var f=this.tileInfo.rows*(this.tileBoundary.rowEnd-this.tileBoundary.rowStart+
1);b?this.originalPixelData.renderedPixelBlock||(this.originalPixelData.renderedPixelBlock=new C({width:e,height:f,pixels:[],pixelType:"",mask:null,statistics:[]})):this.identifiers.forEach(u.hitch(this,function(g){this.originalPixelData.src[g].pixelBlock.width=e;this.originalPixelData.src[g].pixelBlock.height=f}))}else d=this.extent,e=this.layer._map.width,f=this.layer._map.height,b?this.originalPixelData.renderedPixelBlock||(this.originalPixelData.renderedPixelBlock=new C({width:e,height:f,pixels:[],
pixelType:"",mask:null,statistics:[]})):this.identifiers.forEach(u.hitch(this,function(g){this.originalPixelData.src[g].pixelBlock.width=e;this.originalPixelData.src[g].pixelBlock.height=f}));if(d.xmax<=c.xmin||d.xmin>=c.xmax||d.ymax<=c.ymin||d.ymin>=c.ymax)return null;var k=this.originalPixelData.isEmpty=!1;this.identifiers.forEach(u.hitch(this,function(g){a.src&&(this._fillPixelBlock(a.src[g],this.originalPixelData.src[g],{extent:d,width:e,height:f,normalizedExtent:a.normalizedExtent},!1),k=!0)}));
a.filled=k;this.hasNewData=!0}},_fillPixelBlock:function(a,b,c,d){var e=a.extent,f=c.extent;d=c.width;var k=c.height;if(a.pixelBlock&&a.pixelBlock.pixels&&a.pixelBlock.pixels[0]){var g=(e.xmax-e.xmin)/a.width,m=Math.max(e.xmin,f.xmin),n=Math.min(e.ymax,f.ymax),r=Math.round((m-e.xmin)/g),w=a.width-Math.round(Math.abs(e.xmax-Math.min(e.xmax,f.xmax))/g),l=Math.round(Math.abs(e.ymax-n)/g),v=a.height-Math.round((Math.max(e.ymin,f.ymin)-e.ymin)/g),h=this.halfWorldWidth;m=Math.round((m-f.xmin)/g);c=c.normalizedExtent;
if(!(this.wrapTimes&&h&&e.xmin<-h)){if(this.wrapTimes&&h){if(this.tileInfo.applyGCS360Transform)360<e.xmin&&(m-=this.fullBoundary.paddingLeft);else if(e.xmin>h){m-=this.fullBoundary.paddingLeft;var p=this.normalizeCoordinate(e.xmin,h);var x=this.normalizeCoordinate(e.xmax,h)}else p=e.xmin,x=e.xmax;this.tileInfo.applyGCS360Transform?c&&360>c.xmin&&360<c.xmax&&(w-=this.fullBoundary.paddingRight):c&&c.xmin<h&&c.xmax>h?w-=this.fullBoundary.paddingRight:p<h&&x>h&&(w-=this.fullBoundary.paddingRight)}p=
Math.round(Math.abs(f.ymax-n)/g);x=a.pixelBlock.pixels.length;b=b.pixelBlock;c=a.width;e=b.mask||new Uint8Array(d*k);var t=a.pixelBlock,A=t.mask,q=0;for(g=0;g<x;g++){n=t.pixels[g];h=b.pixels[g]||new n.constructor(d*k);for(a=l;a<v;a++)for(q=(p+a-l)*d+m,f=r;f<w;f++)h[q+f-r]=n[a*c+f];b.pixels[g]=h}if(A)for(a=l;a<v;a++)for(q=(p+a-l)*d+m,f=r;f<w;f++)e[q+f-r]=A[a*c+f];else for(a=l;a<v;a++)for(q=(p+a-l)*d+m,f=r;f<w;f++)e[q+f-r]=1;b.pixelType=b.pixelType||t.pixelType;b.mask=e;if(!(b.statistics&&0<b.statistics.length))for(b.statistics=
[],a=0;a<t.statistics.length;a++)b.statistics[a]={minValue:t.statistics[a].minValue,maxValue:t.statistics[a].maxValue};else if(t.statistics&&b.statistics)for(a=0;a<b.statistics.length;a++)b.statistics[a].minValue=Math.min(t.statistics[a].minValue,b.statistics[a].minValue),b.statistics[a].maxValue=Math.max(t.statistics[a].maxValue,b.statistics[a].maxValue)}}},_processTile:function(a,b){var c=new B,d=this.layer._hasTilingEffects,e=this.layer.useWebGL,f=d||e,k=this.layer.raster.rasterFunction&&a&&(d||
e||!a.processedPixelBlock);if(b)var g=a;else this._fillPixelData(a),g=f?this.originalPixelData:a;this.xformSetting.hasNewTexture=this.hasNewData;var m;k?(this.identifiers.forEach(function(n){if(0===g.src[n].pixelBlock.pixels.length||0===g.src[n].pixelBlock.pixels[0].length)m=!0}),m?c.resolve({extent:g.extent,processedPixelBlock:g.src[this.identifiers[0]],pixelBlock:g.src[this.identifiers[0]]}):e?(this.processedPixelData=this.layer.raster.rasterFunction.read(g),c.resolve(this.processedPixelData)):
this.layer._rasterHandler?this.layer._rasterHandler.process({extent:g.extent,src:g.src}).then(function(n){d?(this.processedPixelData=n,c.resolve(this.processedPixelData)):(a.processedPixelBlock=n.pixelBlock,c.resolve(a))}):(b=this.layer.raster.rasterFunction.read(a),a.processedPixelBlock=b.pixelBlock,c.resolve(a))):f?c.resolve(g.src[this.identifiers[0]]):(a.pixelBlock=g.src[this.identifiers[0]]&&g.src[this.identifiers[0]].pixelBlock,c.resolve(a));return c.promise},_renderTile:function(a){var b=new B,
c=this.layer._hasTilingEffects,d=this.layer.useWebGL,e=Math.abs((a.extent.xmax-a.extent.xmin)/a.width-this.layer.getCurrentResolution().x)>this.resolution.x/10;e=this.layer.useWebGL&&(e||this._isTileOutSide(a,this.layer._map.extent));this.xformSetting.hasNewTexture=this.hasNewData;this.layer._rasterRenderer&&a&&(a.texture||a.src||a.pixelBlock||a.processedPixelBlock)?(this.layer._rasterRenderer.interpolation=this.layer.interpolation,d&&!e?(this.layer.raster.rasterFunction&&this.layer.raster.rasterFunction.renderTexture||
this.layer._rasterRenderer.draw(a),b.resolve(a)):this.layer._rasterHandler?this.layer._rasterHandler.render({extent:a.extent,pixelBlock:a.processedPixelBlock||a.pixelBlock}).then(function(f){c?(f.renderedPixelBlock=f.pixelBlock,b.resolve(f)):(a.renderedPixelBlock=f.pixelBlock,b.resolve(a))}.bind(this)):(a.renderedPixelBlock=this.layer._rasterRenderer.draw(a).pixelBlock,b.resolve(a))):(a.renderedPixelBlock=a.processedPixelBlock||a.pixelBlock,b.resolve(a));return b.promise},_sortTiles:function(){this.tiles.sort(function(a,
b){return a.row<b.row||a.row==b.row&&a.col<b.col?-1:1})}})});