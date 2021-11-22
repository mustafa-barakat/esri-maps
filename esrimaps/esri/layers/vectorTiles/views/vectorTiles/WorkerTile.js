// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/vectorTiles/WorkerTile","require exports dojo/Deferred ../../core/executeAsync ../../core/ObjectPool ../../core/promiseUtils ../2d/tiling/enums ./BackgroundBucket ./CircleBucket ./FillBucket ./GeometryUtils ./IndexMemoryBuffer ./LineBucket ./Placement ./SymbolBucket ./TileParser ./VertexMemoryBuffer".split(" "),function(U,V,K,L,M,I,p,N,O,P,J,z,Q,R,S,T,l){return function(){function f(){this.rotation=0;this.status=p.TileStatus.INITIALIZED;this._symbolBuckets=[];
this.placementEngine=new R.PlacementEngine;this.fillVertexBuffer=new l.FillVertexBuffer(!1);this.fillDDVertexBuffer=new l.FillVertexBuffer(!0);this.fillIndexBuffer=new z.TriangleIndexBuffer;this.outlineVertexBuffer=new l.OutlineVertexBuffer(!1);this.outlineDDVertexBuffer=new l.OutlineVertexBuffer(!0);this.outlineIndexBuffer=new z.TriangleIndexBuffer;this.lineVertexBuffer=new l.LineVertexBuffer(!1);this.lineDDVertexBuffer=new l.LineVertexBuffer(!0);this.lineIndexBuffer=new z.TriangleIndexBuffer;this.iconVertexBuffer=
new l.SymbolVertexBuffer(!1);this.iconDDVertexBuffer=new l.SymbolVertexBuffer(!0);this.iconIndexBuffer=new z.TriangleIndexBuffer;this.textVertexBuffer=new l.SymbolVertexBuffer(!1);this.textDDVertexBuffer=new l.SymbolVertexBuffer(!0);this.textIndexBuffer=new z.TriangleIndexBuffer;this.circleVertexBuffer=new l.CircleVertexBuffer;this.circleIndexBuffer=new z.TriangleIndexBuffer}f.prototype.initialize=function(g,q,a,m){void 0===m&&(m=0);this.tileKey=g;this.refKey=q;this._workerTileHandler=a;this.rotation=
m;this.placementEngine.setAngle(J.C_DEG_TO_RAD*m)};f.prototype.release=function(){this.tileKey=this.refKey="";this.status=p.TileStatus.INITIALIZED;this.rotation=0;this.fillVertexBuffer.reset();this.fillDDVertexBuffer.reset();this.fillIndexBuffer.reset();this.outlineVertexBuffer.reset();this.outlineDDVertexBuffer.reset();this.outlineIndexBuffer.reset();this.lineVertexBuffer.reset();this.lineDDVertexBuffer.reset();this.lineIndexBuffer.reset();this.iconVertexBuffer.reset();this.iconDDVertexBuffer.reset();
this.iconIndexBuffer.reset();this.textVertexBuffer.reset();this.textDDVertexBuffer.reset();this.textIndexBuffer.reset();this.circleVertexBuffer.reset();this.circleIndexBuffer.reset();this.placementEngine.reset();this._symbolBuckets.length=0;this._workerTileHandler=null};f.prototype.setDataAndParse=function(g,q){var a=this,m=new K(function(h){a.status=p.TileStatus.INVALID});this._parse(g,q).then(function(h){a.status=p.TileStatus.READY;for(var v=new Uint32Array([1,a.fillVertexBuffer.sizeInBytes,2,a.fillDDVertexBuffer.sizeInBytes,
3,a.fillIndexBuffer.sizeInBytes,4,a.outlineVertexBuffer.sizeInBytes,5,a.outlineDDVertexBuffer.sizeInBytes,6,a.outlineIndexBuffer.sizeInBytes,7,a.lineVertexBuffer.sizeInBytes,8,a.lineDDVertexBuffer.sizeInBytes,9,a.lineIndexBuffer.sizeInBytes,10,a.iconVertexBuffer.sizeInBytes,11,a.iconDDVertexBuffer.sizeInBytes,12,a.iconIndexBuffer.sizeInBytes,13,a.textVertexBuffer.sizeInBytes,14,a.textDDVertexBuffer.sizeInBytes,15,a.textIndexBuffer.sizeInBytes,16,a.circleVertexBuffer.sizeInBytes,17,a.circleIndexBuffer.sizeInBytes]),
b=[],r=h.length,k=0;k<r;k++){var c=h[k];if(c instanceof P)b.push(c.layerIndex),b.push(1),b.push(c.fillIndexStart),b.push(c.fillIndexCount),b.push(c.outlineIndexStart),b.push(c.outlineIndexCount);else if(c instanceof Q)b.push(c.layerIndex),b.push(2),b.push(c.lineIndexStart),b.push(c.lineIndexCount);else if(c instanceof S){b.push(c.layerIndex);b.push(3);b.push(c.sdfMarker?1:0);var t=c.markerPageMap;b.push(t.size);t.forEach(function(C,H){b.push(H);b.push(C[0]);b.push(C[1])});c=c.glyphsPageMap;b.push(c.size);
c.forEach(function(C,H){b.push(H);b.push(C[0]);b.push(C[1])})}else c instanceof O?(b.push(c.layerIndex),b.push(4),b.push(c.circleIndexStart),b.push(c.circleIndexCount)):c instanceof N&&(b.push(c.layerIndex),b.push(0))}h=new Uint32Array(b);r=a.fillVertexBuffer.toBuffer();k=a.fillDDVertexBuffer.toBuffer();c=a.fillIndexBuffer.toBuffer();t=a.outlineVertexBuffer.toBuffer();var y=a.outlineDDVertexBuffer.toBuffer(),A=a.outlineIndexBuffer.toBuffer(),n=a.lineVertexBuffer.toBuffer(),d=a.lineDDVertexBuffer.toBuffer(),
u=a.lineIndexBuffer.toBuffer(),e=a.iconVertexBuffer.toBuffer(),w=a.iconDDVertexBuffer.toBuffer(),D=a.iconIndexBuffer.toBuffer(),E=a.textVertexBuffer.toBuffer(),F=a.textDDVertexBuffer.toBuffer(),G=a.textIndexBuffer.toBuffer(),x=a.circleVertexBuffer.toBuffer(),B=a.circleIndexBuffer.toBuffer();m.resolve({result:{bufferDataInfo:v.buffer,bucketDataInfo:h.buffer,bufferData:[r,k,c,t,y,A,n,d,u,e,w,D,E,F,G,x,B]},transferList:[r,k,c,t,y,A,n,d,u,e,w,D,E,F,G,x,B,v.buffer,h.buffer]})});return m.promise};f.prototype.addBucket=
function(g){this._symbolBuckets.push(g)};f.prototype.updateSymbols=function(g){var q=this,a=this._symbolBuckets;if(!a||0===a.length)return I.resolve();this.rotation=g;var m=this.placementEngine;m.reset();m.setAngle(g/256*360*J.C_DEG_TO_RAD);var h=this.iconVertexBuffer;h.reset();var v=this.iconDDVertexBuffer;v.reset();var b=this.iconIndexBuffer;b.reset();var r=this.textVertexBuffer;r.reset();var k=this.textDDVertexBuffer;k.reset();var c=this.textIndexBuffer;c.reset();var t=[],y=a.length,A=0;return L(function(){if(q.status===
p.TileStatus.INVALID||q.status===p.TileStatus.INITIALIZED)return!0;if(A<y){var n=a[A++],d=n.layer;if(n=n.copy(d.hasDataDrivenIcon?v:h,b,d.hasDataDrivenText?k:r,c,m))t.push(n),n.updateSymbols()}return A>=y}).then(function(){if(q.status===p.TileStatus.INVALID||q.status===p.TileStatus.INITIALIZED||0===h.sizeInBytes&&0===v.sizeInBytes&&0===b.sizeInBytes&&0===r.sizeInBytes&&0===k.sizeInBytes&&0===c.sizeInBytes)return{result:null,transferList:null};var n=new Uint32Array([10,h.sizeInBytes,11,v.sizeInBytes,
12,b.sizeInBytes,13,r.sizeInBytes,14,k.sizeInBytes,15,c.sizeInBytes]),d=[];y=t.length;for(var u=0;u<y;u++){var e=t[u];d.push(e.layerIndex);d.push(3);d.push(e.sdfMarker?1:0);var w=e.markerPageMap;d.push(w.size);w.forEach(function(x,B){d.push(B);d.push(x[0]);d.push(x[1])});e=e.glyphsPageMap;d.push(e.size);e.forEach(function(x,B){d.push(B);d.push(x[0]);d.push(x[1])})}u=new Uint32Array(d);e=h.toBuffer();w=v.toBuffer();var D=b.toBuffer(),E=r.toBuffer(),F=k.toBuffer(),G=c.toBuffer();return{result:{bufferDataInfo:n.buffer,
bucketDataInfo:u.buffer,bufferData:[e,w,D,E,F,G]},transferList:[e,w,D,E,F,G,n.buffer,u.buffer]}}).catch(function(){return null})};f.prototype.setObsolete=function(){this.status=p.TileStatus.INVALID};f.prototype.getLayers=function(){return this._workerTileHandler.getLayers()};f.prototype.getWorkerTileHandler=function(){return this._workerTileHandler};f.prototype._parse=function(g,q){if(!g||0===g.byteLength)return I.resolve([]);this.status=p.TileStatus.MODIFIED;return(new T(g,this,q)).parse()};f.pool=
new M(f);return f}()});