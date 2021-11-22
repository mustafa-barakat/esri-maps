// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/SnappingManager","dojo/_base/declare dojo/_base/connect dojo/_base/lang dojo/_base/array dojo/_base/Color dojo/_base/Deferred dojo/has dojo/keys ./kernel ./graphic ./geometry/ScreenPoint ./geometry/Extent ./symbols/SimpleMarkerSymbol ./symbols/SimpleLineSymbol ./tasks/query".split(" "),function(D,u,E,x,H,P,I,J,Q,R,K,F,L,M,G){D=D(null,{declaredClass:"esri.SnappingManager",constructor:function(a){a=a||{};a.map||console.error("map is not specified for SnappingManager");this.map=a.map;this.tolerance=
a.tolerance||15;this.layerInfos=[];if(a.layerInfos)this.layerInfos=a.layerInfos;else{var b;for(b=0;b<this.map.graphicsLayerIds.length;b++){var c=this.map.getLayer(this.map.graphicsLayerIds[b]);this.layerInfos.push({layer:c})}if(this.map.loaded)this.layerInfos.push({layer:this.map.graphics});else var n=u.connect(this.map,"onLoad",this,function(p){u.disconnect(n);n=null;this.layerInfos.push({layer:this.map.graphics});this.setLayerInfos(this.layerInfos)})}this.snapPointSymbol=a.snapPointSymbol?a.snapPointSymbol:
new L(L.STYLE_CROSS,15,new M(M.STYLE_SOLID,new H([0,255,255]),1),new H([0,255,0,0]));this.alwaysSnap=a.alwaysSnap?a.alwaysSnap:!1;this.snapKey=a.snapKey?a.snapKey:I("mac")?J.META:J.CTRL;this._SelectionLyrQuery=new G;this._SelectionLyrQuery.spatialRelationship=G.SPATIAL_REL_INTERSECTS;this._snappingGraphic=new R;this.setLayerInfos(this.layerInfos);this._currentGraphicOption={snapToPoint:!0,snapToVertex:!0,snapToLastVertex:!0,snapToEdge:!0};this._snappingCallback=E.hitch(this,this._snappingCallback)},
getSnappingPoint:function(a){var b=this.layers,c=this.tolerance,n=this.map,p=this.layerOptions,d=n.toMap(a.offset(-c,c));c=n.toMap(a.offset(c,-c));d=new F(d.x,d.y,c.x,c.y,n.spatialReference);var l=new G;l.geometry=d;l.spatialRelationship=G.SPATIAL_REL_INTERSECTS;var f=[],r=[],w=this._extractPointsAndLines,B=new P,g=0,m;c=d.xmin;var h=d.xmax;x.forEach(b,function(e,y){e.visible&&e.loaded&&"esri.layers.FeatureLayer"===e.declaredClass&&e.mode!==e.constructor.MODE_SELECTION&&g++});n.spatialReference._isWrappable()&&
(c=F.prototype._normalizeX(d.xmin,n.spatialReference._getInfo()).x,h=F.prototype._normalizeX(d.xmax,n.spatialReference._getInfo()).x);var k=new F(c,d.ymin,h,d.ymax,n.spatialReference);x.forEach(b,function(e,y){if("esri.layers.GraphicsLayer"===e.declaredClass&&e.visible){var C=[];x.forEach(e.graphics,function(z){z&&z.visible&&k.intersects(z.geometry)&&C.push(z)});e=w(C,p[y]);f=f.concat(e[0]);r=r.concat(e[1])}});var A=E.hitch(this,function(e){g--;e instanceof Error?console.log("getSnappingPoint: query features failed"):
(e=w(e.features,p[m]),f=f.concat(e[0]),r=r.concat(e[1]));g||(q=this._getSnappingPoint(f,r,a),B.callback(q))}),t=!1;x.forEach(b,function(e,y){e.visible&&e.loaded&&(m=y,"esri.layers.FeatureLayer"===e.declaredClass&&e.mode!==e.constructor.MODE_SELECTION&&(t=!0,e.queryFeatures(l,A,A)))});if(!t){var q=this._getSnappingPoint(f,r,a);B.callback(q)}return B},setLayerInfos:function(a){this.layers=[];this.layerOptions=[];var b;for(b=0;b<a.length;b++)this.layers.push(a[b].layer),this.layerOptions.push({snapToPoint:!0,
snapToVertex:!0,snapToEdge:!0}),!1===a[b].snapToPoint&&(this.layerOptions[b].snapToPoint=a[b].snapToPoint),!1===a[b].snapToVertex&&(this.layerOptions[b].snapToVertex=a[b].snapToVertex),!1===a[b].snapToEdge&&(this.layerOptions[b].snapToEdge=a[b].snapToEdge);this._featurePtsFromSelectionLayer=[];this._featureLinesFromSelectionLayer=[];this._selectionLayers=[];this._selectionLayerOptions=[];x.forEach(this.layers,function(c,n){"esri.layers.FeatureLayer"===c.declaredClass&&c.mode===c.constructor.MODE_SELECTION&&
(this._selectionLayers.push(c),this._selectionLayerOptions.push(this.layerOptions[n]))},this);this.layerInfos=a},destroy:function(){u.disconnect(this._onExtentChangeConnect);this._killOffSnapping();this._featurePtsFromSelectionLayer=this._featureLinesFromSelectionLayer=this._currentFeaturePts=this._currentFeatureLines=this.layers=this.map=null},_startSelectionLayerQuery:function(){u.disconnect(this._onExtentChangeConnect);this._mapExtentChangeHandler(this._selectionLayers,this._selectionLayerOptions,
this.map.extent);this._onExtentChangeConnect=u.connect(this.map,"onExtentChange",E.hitch(this,"_mapExtentChangeHandler",this._selectionLayers,this._selectionLayerOptions))},_stopSelectionLayerQuery:function(){u.disconnect(this._onExtentChangeConnect)},_mapExtentChangeHandler:function(a,b,c){this._featurePtsFromSelectionLayer=[];this._featureLinesFromSelectionLayer=[];var n;this._SelectionLyrQuery.geometry=c;var p=E.hitch(this,function(d){d instanceof Error?console.log("getSnappingPoint: query features failed"):
(d=this._extractPointsAndLines(d.features,b[n]),this._featurePtsFromSelectionLayer=this._featurePtsFromSelectionLayer.concat(d[0]),this._featureLinesFromSelectionLayer=this._featureLinesFromSelectionLayer.concat(d[1]))});x.forEach(a,function(d,l){d.visible&&d.loaded&&(n=l,d.queryFeatures(this._SelectionLyrQuery,p,p))},this)},_extractPointsAndLines:function(a,b){var c=b&&!1===b.snapToLastVertex?!1:!0,n=[],p=[],d,l;x.forEach(a,function(f,r){if((!f._graphicsLayer||f.visible)&&f.geometry&&f._isSnapTarget)if("point"===
f.geometry.type&&b.snapToPoint)n.push(f.geometry);else if("polyline"===f.geometry.type)for(d=0;d<f.geometry.paths.length;d++){p.push("lineStart");r=f.geometry.paths[d].length;for(l=0;l<r;l++)if(c||l!==r-1){var w=f.geometry.getPoint(d,l);b.snapToVertex&&n.push(w);b.snapToEdge&&p.push(w)}p.push("lineEnd")}else if("polygon"===f.geometry.type)for(d=0;d<f.geometry.rings.length;d++){p.push("lineStart");r=f.geometry.rings[d].length;for(l=0;l<r;l++)if(c||l!==r-1)w=f.geometry.getPoint(d,l),b.snapToVertex&&
n.push(w),b.snapToEdge&&p.push(w);p.push("lineEnd")}});return[n,p]},_getSnappingPoint:function(a,b,c){var n,p=this.tolerance,d=this.map,l=this.map._getFrameWidth();a=a.concat(this._featurePtsFromSelectionLayer);b=b.concat(this._featureLinesFromSelectionLayer);if(this._currentGraphic){var f=this._extractPointsAndLines([this._currentGraphic],this._currentGraphicOption);a=a.concat(f[0]);b=b.concat(f[1])}var r,w;x.forEach(a,function(v,N){v=d.toScreen(v,!0);if(-1!==l&&(v.x%=l,0>v.x&&(v.x+=l),d.width>l))for(N=
(d.width-l)/2;v.x<N;)v.x+=l;n=Math.sqrt((v.x-c.x)*(v.x-c.x)+(v.y-c.y)*(v.y-c.y));n<=p&&(p=n,r=v.x,w=v.y)});if(r){b=new K(r,w);var B=b=d.toMap(b)}else{p=this.tolerance;for(a=0;a<b.length;a++)if("lineStart"===b[a])for(f=a+1;f<b.length;f++){if("lineEnd"!==b[f+1]&&"lineStart"!==b[f+1]&&"lineEnd"!==b[f]&&"lineStart"!==b[f]){var g=d.toScreen(b[f],!0),m=d.toScreen(b[f+1],!0),h=g.x>=m.x?g:m,k=g.x>=m.x?m:g;-1!==l&&(h.x%=l,0>h.x&&(h.x+=l),k.x%=l,0>k.x&&(k.x+=l),k.x>h.x&&(k.x-=l));g=h.x;h=h.y;m=k.x;k=k.y;var A;
if(g===m){var t=g;var q=c.y;var e=A=g;var y=h<=k?h:k;var C=h<=k?k:h}else h===k?(t=c.x,q=h,e=g<=m?g:m,A=g<=m?m:g,y=C=h):(q=(k-h)/(m-g),e=(h*m-g*k)/(m-g),t=(e-(c.y*k-c.y*h-c.x*g+c.x*m)/(k-h))/((g-m)/(k-h)-q),q=q*t+e,e=g<=m?g:m,A=g<=m?m:g,y=h<=k?h:k,C=h<=k?k:h);if(t>=e&&t<=A&&q>=y&&q<=C){if(g=Math.sqrt((c.x-t)*(c.x-t)+(c.y-q)*(c.y-q)),g<=p){p=g;var z=t;var O=q}}else t=Math.sqrt((g-c.x)*(g-c.x)+(h-c.y)*(h-c.y)),q=Math.sqrt((m-c.x)*(m-c.x)+(k-c.y)*(k-c.y)),t<=q?(e=t,t=g,q=h):(e=q,t=m,q=k),e<=p&&(p=e,z=
t,O=q)}if("lineEnd"===b[f]){a=f;break}}z&&(b=new K(z,O),B=b=d.toMap(b))}return B},_setGraphic:function(a,b){this._currentGraphic=a;this._currentGraphicOption.snapToLastVertex=b&&!1===b.snapToLastVertex?!1:!0},_addSnappingPointGraphic:function(){var a=this.map;this._snappingGraphic.setSymbol(this.snapPointSymbol);a.graphics.add(this._snappingGraphic)},_setUpSnapping:function(){var a=this.map;this._onSnapKeyDown_connect=u.connect(a,"onKeyDown",this,"_onSnapKeyDownHandler");this._onSnapKeyUp_connect=
u.connect(a,"onKeyUp",this,"_onSnapKeyUpHandler");this._onSnappingMouseMove_connect=u.connect(a,"onMouseMove",this,"_onSnappingMouseMoveHandler");this._onSnappingMouseDrag_connect=u.connect(a,"onMouseDrag",this,"_onSnappingMouseMoveHandler");this.alwaysSnap&&this._activateSnapping()},_killOffSnapping:function(){u.disconnect(this._onSnapKeyDown_connect);u.disconnect(this._onSnapKeyUp_connect);u.disconnect(this._onSnappingMouseMove_connect);u.disconnect(this._onSnappingMouseDrag_connect);this._deactivateSnapping()},
_onSnapKeyDownHandler:function(a){a.keyCode===this.snapKey&&(u.disconnect(this._onSnapKeyDown_connect),this.alwaysSnap?this._deactivateSnapping():this._activateSnapping())},_activateSnapping:function(){this._snappingActive=!0;this._addSnappingPointGraphic();this._currentLocation&&this._onSnappingMouseMoveHandler(this._currentLocation)},_onSnapKeyUpHandler:function(a){a.keyCode===this.snapKey&&(this._onSnapKeyDown_connect=u.connect(this.map,"onKeyDown",this,"_onSnapKeyDownHandler"),this.alwaysSnap?
this._activateSnapping():this._deactivateSnapping())},_deactivateSnapping:function(){this._snappingActive=!1;this._snappingPoint=null;this.map.graphics.remove(this._snappingGraphic);this._snappingGraphic.setGeometry(null)},_onSnappingMouseMoveHandler:function(a){this._currentLocation=a;this._snappingPoint=null;this._snappingActive&&(this._snappingGraphic.hide(),this.getSnappingPoint(a.screenPoint).addCallback(this._snappingCallback))},_snappingCallback:function(a){if(this._snappingPoint=a)this._snappingGraphic.show(),
this._snappingGraphic.setGeometry(a)}});I("extend-esri")&&(Q.SnappingManager=D);return D});