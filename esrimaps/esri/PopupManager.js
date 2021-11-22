// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/PopupManager","./geometry/Extent ./geometry/ScreenPoint ./kernel ./layerUtils ./tasks/query dijit/registry dojo/_base/array dojo/_base/declare dojo/_base/Deferred dojo/_base/lang esri/sniff dojo/on dojo/promise/all dojo/Stateful require".split(" "),function(K,G,L,H,M,N,l,D,z,I,J,O,P,Q,R){var E;D=D(Q,{declaredClass:"esri.PopupManager",enabled:!1,map:null,_mapClickHandle:null,_featureLayersCache:{},constructor:function(a){this._mapClickHandler=I.hitch(this,this._mapClickHandler)},setMap:function(a){if(this.map)if(a!==
this.map)this.unsetMap();else return;this.map=a;this._setupClickHandler()},unsetMap:function(){this.map&&(this.map=null);this._mapClickHandle&&(this._mapClickHandle.remove(),this._mapClickHandle=null)},getMapLayer:function(a){var b;if(a&&(b=a.getLayer())&&(a=b.id,this._featureLayersCache[a])){var e=a.lastIndexOf("_");-1<e&&(a=a.substring(0,e),b=this.map.getLayer(a))}return b},_enabledSetter:function(a){this.enabled=a;this._setupClickHandler()},_setupClickHandler:function(){this._mapClickHandle&&(this._mapClickHandle.remove(),
this._mapClickHandle=null);this.enabled&&this.map&&(this._mapClickHandle=this.map.on("click",this._mapClickHandler))},_mapClickHandler:function(a){var b=this.map.infoWindow,e=a.graphic;b&&this.map.loaded&&(b.clearFeatures&&b.setFeatures?this._showPopup(a):e&&e.getInfoTemplate()&&this._showInfoWindow(e,a.mapPoint))},_showPopup:function(a){var b=this.map,e=b.infoWindow,c=this,k=[],t=[b.graphics].concat(l.map(b.graphicsLayerIds,b.getLayer,b));l.forEach(t,function(d){var f=d.getFeatureReduction&&d.getFeatureReduction();
d&&d.loaded&&d.infoTemplate&&!d.suspended&&(!f||!c._isReductionEnabled(d)||f.infoTemplate&&!f.disablePopup)&&k.push(d)});var w=[];l.forEach(b.layerIds,function(d){(d=b.getLayer(d))&&d.loaded&&!d.suspended&&(c._isImageServiceLayer(d)&&d.infoTemplate?k.push(d):"esri.layers.WMSLayer"===d.declaredClass&&d.getFeatureInfoURL?k.push(d):"esri.layers.ArcGISDynamicMapServiceLayer"!==d.declaredClass&&"esri.layers.ArcGISTiledMapServiceLayer"!==d.declaredClass||!d.infoTemplates||w.push(d))});var F=b.getResolutionForPopup();
this._getSubLayerFeatureLayers(w,F).then(function(d){k=k.concat(d);d=a.graphic&&a.graphic.getParentGraphic()||a.graphic;var f=null;d&&d.getInfoTemplate()&&!c._isImageServiceLayer(d.getLayer())&&(f=d);if(k.length||f){var m=c._calculateClickTolerance(k),u=a.screenPoint;d=b.toMap(new G(u.x-m,u.y+m));m=b.toMap(new G(u.x+m,u.y-m));var A=new K(d.x,d.y,m.x,m.y,b.spatialReference);if(A=A.intersects(b.extent)){var x=new M,p=!!f,y=!0;d=l.map(k,function(g){x.timeExtent=g.useMapTime?b.timeExtent:null;var r=c._isReductionEnabled(g);
g=r?g.getFeatureReductionLayer():g;var B=c._featureLayersCache[g.id];if(c._isImageServiceLayer(g)){x.geometry=a.mapPoint;y=!1;var h={rasterAttributeTableFieldPrefix:"Raster.",returnDomainValues:!0};c._isTiledImageServiceLayer(g)?h=g.fetchPopupFromTiles(x):(h=g.queryVisibleRasters(x,h),h.addCallback(function(){var q=g.getVisibleRasters();p=p||0<q.length;return q}))}else if("esri.layers.WMSLayer"===g.declaredClass){h=new z;var v=g._getPopupGraphic(b,a.screenPoint);v?(h.resolve([v]),p=!0):h.resolve([])}else B||
"function"===typeof g.queryFeatures&&(0===g.currentMode||1===g.currentMode)?(x.geometry=A,h=g.queryFeatures(x),h.addCallback(function(q){var n=[];l.forEach(q.features,function(C){C.visible&&(n.push(C),B&&C.setResolution(F))});p=p||0<n.length;return n})):(h=new z,v=l.filter(g.graphics,function(q){return q&&q.visible&&A.intersects(q.geometry)}),r&&c._isParentLayer(g,f)&&(r=c._findGraphicById(v,f,"cluster_id"))&&(f=r),p=p||0<v.length,h.resolve(v));return h});f&&(m=new z,m.resolve([f]),d.unshift(m));
l.some(d,function(g){return!g.isFulfilled()})||p?(e.setFeatures(d),e.show(a.mapPoint,{closestFirst:y})):(e.hide(),e.clearFeatures())}}})},_getSubLayerFeatureLayers:function(a,b,e){b=b||null;var c=e||new z,k=[];e=a.length;var t=this.map.getScale(),w=!1,F=this,d=0;a:for(;d<e;d++){var f=a[d],m=f.dynamicLayerInfos||f.layerInfos;if(m){var u=null;f._params&&(f._params.layers||f._params.dynamicLayers)&&(u=f.visibleLayers);u=H._getVisibleLayers(m,u);for(var A=H._getLayersForScale(t,m),x=m.length,p=0;p<x;p++){var y=
m[p],g=y.id,r=f.infoTemplates[g];if(!y.subLayerIds&&r&&r.infoTemplate&&-1<l.indexOf(u,g)&&-1<l.indexOf(A,g)){if(!E){w=!0;break a}var B=f.id+"_"+g,h=this._featureLayersCache[B];h&&h.loadError||(h||((h=r.layerUrl)||(h=y.source?this._getLayerUrl(f.url,"/dynamicLayer"):this._getLayerUrl(f.url,g)),h=new E(h,{parentLayer:f,id:B,drawMode:!1,mode:E.MODE_SELECTION,outFields:this._getOutFields(r.infoTemplate),resourceInfo:r.resourceInfo,source:y.source}),this._featureLayersCache[B]=h),h.setDefinitionExpression(f.layerDefinitions&&
f.layerDefinitions[g]),h.setGDBVersion(f.gdbVersion),h.setInfoTemplate(r.infoTemplate),h.setMaxAllowableOffset(b),h.setUseMapTime(!!f.useMapTime),f.layerDrawingOptions&&f.layerDrawingOptions[g]&&f.layerDrawingOptions[g].renderer&&h.setRenderer(f.layerDrawingOptions[g].renderer),k.push(h))}}}}if(w){var v=new z;R(["./layers/FeatureLayer"],function(n){E=n;v.resolve()});v.then(function(){F._getSubLayerFeatureLayers(a,b,c)})}else{var q=[];l.forEach(k,function(n){if(!n.loaded){var C=new z;O.once(n,"load, error",
function(){C.resolve()});q.push(C.promise)}});q.length?P(q).then(function(){k=l.filter(k,function(n){return!n.loadError&&n.isVisibleAtScale(t)});c.resolve(k)}):(k=l.filter(k,function(n){return n.isVisibleAtScale(t)}),c.resolve(k))}return c.promise},_getLayerUrl:function(a,b){var e=a.indexOf("?");return-1===e?a+"/"+b:a.substring(0,e)+"/"+b+a.substring(e)},_getOutFields:function(a){var b=a.info&&a.info.fieldInfos;if(b&&b.length&&"esri.dijit.PopupTemplate"===a.declaredClass){var e=[];l.forEach(b,function(c){var k=
c.fieldName&&c.fieldName.toLowerCase();k&&"shape"!==k&&0!==k.indexOf("relationships/")&&e.push(c.fieldName)})}else e=["*"];return e},_calculateClickTolerance:function(a){var b=J("esri-touch")?9:6,e,c;l.forEach(a,function(k){if(e=k.renderer)"esri.renderer.SimpleRenderer"===e.declaredClass?((c=e.symbol)&&c.xoffset&&(b=Math.max(b,Math.abs(c.xoffset))),c&&c.yoffset&&(b=Math.max(b,Math.abs(c.yoffset)))):"esri.renderer.UniqueValueRenderer"!==e.declaredClass&&"esri.renderer.ClassBreaksRenderer"!==e.declaredClass||
l.forEach(e.infos,function(t){(c=t.symbol)&&c.xoffset&&(b=Math.max(b,Math.abs(c.xoffset)));c&&c.yoffset&&(b=Math.max(b,Math.abs(c.yoffset)))})});return b},_showInfoWindow:function(a,b){var e=this.map.infoWindow,c=a.geometry;b=c&&"point"===c.type?c:b;c=a.getContent();e.setTitle(a.getTitle());c&&I.isString(c.id)&&(a=N.byId(c.id))&&a.set&&/_PopupRenderer/.test(a.declaredClass)&&a.set("showTitle",!1);e.setContent(c);e.show(b)},_findGraphicById:function(a,b,e){var c,k=(b=b.attributes)&&b[e];l.some(a,function(t){var w=
t.attributes;w&&w[e]===k&&(c=t);return!!c});return c},_isParentLayer:function(a,b){b=b&&b.getLayer();return a&&b===a},_isReductionEnabled:function(a){return a&&a.isFeatureReductionActive&&a.isFeatureReductionActive()},_isImageServiceLayer:function(a){return"esri.layers.ArcGISImageServiceLayer"===a.declaredClass||"esri.layers.ArcGISImageServiceVectorLayer"===a.declaredClass||"esri.layers.RasterXLayer"===a.declaredClass},_isTiledImageServiceLayer:function(a){return"esri.layers.RasterXLayer"===a.declaredClass}});
J("extend-esri")&&(L.PopupManager=D);return D});