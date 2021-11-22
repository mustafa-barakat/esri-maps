// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
require({cache:{"esri/layers/KMLFolder":function(){define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../lang"],function(n,q,p,m,k){n=n(null,{declaredClass:"esri.layers.KMLFolder",constructor:function(r){q.mixin(this,r);k.isDefined(this.visibility)&&(this.visible=!!this.visibility)}});p("extend-esri")&&q.setObject("layers.KMLFolder",n,m);return n})},"esri/layers/KMLGroundOverlay":function(){define("dojo/_base/declare dojo/_base/lang dojo/has ../kernel ../lang ./MapImage".split(" "),
function(n,q,p,m,k,r){n=n([r],{declaredClass:"esri.layers.KMLGroundOverlay",constructor:function(x){k.isDefined(this.visibility)&&(this.visible=!!this.visibility)}});p("extend-esri")&&q.setObject("layers.KMLGroundOverlay",n,m);return n})},"*noref":1}});
define("esri/layers/KMLLayer","dojo/_base/kernel dojo/_base/declare dojo/_base/connect dojo/_base/lang dojo/_base/array dojo/_base/json dojo/_base/sniff dojo/io-query dojo/dom-construct dojo/dom-style ../kernel ../config ../lang ../request ../urlUtils ../SpatialReference ../geometry/webMercatorUtils ../dijit/PopupTemplate ./layer ./KMLFolder ./KMLGroundOverlay ./MapImageLayer ./FeatureLayer".split(" "),function(n,q,p,m,k,r,x,y,z,D,u,A,E,F,B,G,v,H,I,J,K,L,M){var w=q([I],{declaredClass:"esri.layers.KMLLayer",
serviceUrl:B.getProtocolForWebResource()+"//utility.arcgis.com/sharing/kml",constructor:function(a,b){a||console.log("KMLLayer:constructor - please provide url for the KML file");this._url=B.urlToObject(this.url=a);this._outSR=b&&b.outSR||new G({wkid:4326});this._options=m.mixin({},b);A.defaults.kmlService&&(this.serviceUrl=A.defaults.kmlService);if(a=this.linkInfo=b&&b.linkInfo)this.visible=!!a.visibility,this._waitingForMap=!!a.viewFormat;(!a||a&&a.visibility&&!this._waitingForMap)&&this._parseKml();
this.refresh=m.hitch(this,this.refresh);this.registerConnectEvents("esri.layers.KMLLayer",!0)},getFeature:function(a){if(a){var b=a.type,c=a.id,d;switch(b){case "esriGeometryPoint":case "esriGeometryPolyline":case "esriGeometryPolygon":(a=this["_"+b])&&(d=m.getObject("_mode._featureMap."+c,!1,a));break;case "GroundOverlay":if(a=this._groundLyr){var e=a.getImages();b=e.length;for(a=0;a<b;a++)if(e[a].id===c){d=e[a];break}}break;case "ScreenOverlay":break;case "NetworkLink":k.some(this._links,function(h){return h.linkInfo&&
h.linkInfo.id===c?(d=h,!0):!1});break;case "Folder":b=(e=this.folders)?e.length:0;for(a=0;a<b;a++)if(e[a].id===c){d=e[a];break}break;default:console.log("KMLLayer:getFeature - unknown feature type")}return d}},getLayers:function(){var a=[];this._groundLyr&&a.push(this._groundLyr);this._fLayers&&(a=a.concat(this._fLayers));this._links&&k.forEach(this._links,function(b){b.declaredClass&&a.push(b)});return a},setFolderVisibility:function(a,b){a&&(this._fireUpdateStart(),(a.visible=b)&&(b=this._areLocalAncestorsVisible(a)),
this._setState(a,b),this._fireUpdateEnd())},_eventMap:{"network-link-error":["error"]},onRefresh:function(){},onOpacityChange:function(){},onNetworkLinkError:function(){},_parseKml:function(a){var b=this;this._fireUpdateStart();this._io=F({url:this.serviceUrl,content:{url:this._url.path+this._getQueryParameters(a),model:"simple",folders:"",refresh:this.loaded?!0:void 0,outSR:r.toJson(this._outSR.toJson())},callbackParamName:"callback",load:function(c){b._io=null;b._initLayer(c)},error:function(c){b._io=
null;c=m.mixin(Error(),c);c.message="Unable to load KML: "+(c.message||"");b._fireUpdateEnd(c);b._errorHandler(c)}})},_initLayer:function(a){if(this.loaded){var b=[];k.forEach(this.folders,function(l){l.visible&&b.push(l.id)});this._options.minScale=this.minScale;this._options.maxScale=this.maxScale;this._options.opacity=this.opacity;this._removeInternalLayers()}this.name=a.name;this.description=a.description;this.snippet=a.snippet;this.visibility=a.visibility;this.featureInfos=a.featureInfos;var c,
d=this.folders=a.folders,e=[];if(d){var h=d.length;for(c=0;c<h;c++){var f=d[c]=new J(d[c]);-1===f.parentFolderId&&e.push(f)}}d=this._links=a.networkLinks;h=d?d.length:0;for(c=0;c<h;c++)if(!d[c].viewRefreshMode||-1===d[c].viewRefreshMode.toLowerCase().indexOf("onregion")){var g=m.mixin({},this._options);g.linkInfo=d[c];g.id&&(g.id=g.id+"_"+c);f=d[c]=new w(d[c].href,g);f._parentLayer=this;f._parentFolderId=this._getLinkParentId(f.linkInfo.id);f._linkErrorHandle=f.on("error,network-link-error",m.hitch(f,
function(l){this._parentLayer.onNetworkLinkError(l.error)}))}if((d=a.groundOverlays)&&0<d.length)for(g=m.mixin({},this._options),g.id&&(g.id+="_mapImage"),f=this._groundLyr=new L(g),h=d.length,c=0;c<h;c++)f.addImage(new K(d[c]));(a=m.getObject("featureCollection.layers",!1,a))&&0<a.length&&(this._fLayers=[],k.forEach(a,function(l,t){var C=m.getObject("featureSet.features",!1,l);C&&0<C.length&&(g=m.mixin({outFields:["*"],infoTemplate:l.popupInfo?new H(l.popupInfo):null,editable:!1},this._options),
g.id&&(g.id=g.id+"_"+t),g.webgl=!1,l.layerDefinition.capabilities="Query,Data",l=new M(l,g),l.geometryType&&(this["_"+l.geometryType]=l),this._fLayers.push(l))},this),0===this._fLayers.length&&delete this._fLayers);if(!this.loaded)for(h=e.length,c=0;c<h;c++)f=e[c],this._setState(f,f.visible);this._fireUpdateEnd();this.loaded?(this._addInternalLayers(),k.forEach(this.folders,function(l){-1<k.indexOf(b,l.id)?this.setFolderVisibility(l,!0):this.setFolderVisibility(l,!1)},this),this.onRefresh()):(this.loaded=
!0,this.onLoad(this))},_addInternalLayers:function(){var a=this._map;this._fireUpdateStart();this._links&&k.forEach(this._links,function(e){e.declaredClass&&(a.addLayer(e),e._waitingForMap&&(e._waitingForMap=null,e.visible?e._parseKml(a):e._wMap=a))});var b=a.spatialReference,c=this._outSR;if(!b.equals(c))if(b.isWebMercator()&&4326===c.wkid)var d=v.geographicToWebMercator;else if(c.isWebMercator()&&4326===b.wkid)d=v.webMercatorToGeographic;else{console.log("KMLLayer:_setMap - unsupported workflow. Spatial reference of the map and kml layer do not match, and the conversion cannot be done on the client.");
return}this._groundLyr&&(d&&k.forEach(this._groundLyr.getImages(),function(e){e.extent=d(e.extent)}),a.addLayer(this._groundLyr));(b=this._fLayers)&&0<b.length&&k.forEach(b,function(e){if(d){var h=e.graphics,f,g,l=h?h.length:0;for(f=0;f<l;f++)(g=h[f].geometry)&&h[f].setGeometry(d(g))}a.addLayer(e)});this.onVisibilityChange(this.visible)},_removeInternalLayers:function(){var a=this._map;this._links&&k.forEach(this._links,function(b){b.declaredClass&&b._io&&b._io.cancel();b._linkErrorHandle&&(b._linkErrorHandle.remove(),
b._linkErrorHandle=null)});a&&k.forEach(this.getLayers(),a.removeLayer,a)},_setState:function(a,b){a=a.featureInfos;var c,d,e=a?a.length:0,h=b?"show":"hide",f=b?"_resume":"_suspend";for(d=0;d<e;d++){var g=a[d];if(c=this.getFeature(g))if("Folder"===g.type)this._setState(c,b&&c.visible);else if("NetworkLink"===g.type)this._setInternalVisibility(c,b);else if(c[f])c[f]();else c[h]()}},_areLocalAncestorsVisible:function(a){var b=a.parentFolderId;for(a=a.visible;a&&-1!==b;)b=this.getFeature({type:"Folder",
id:b}),a=a&&b.visible,b=b.parentFolderId;return a},_setInternalVisibility:function(a,b){var c=a._parentLayer,d=a._parentFolderId;for(b=b&&a.visible;b&&c;)b=b&&c.visible,-1<d&&(b=b&&c._areLocalAncestorsVisible(c.getFeature({type:"Folder",id:d}))),d=c._parentFolderId,c=c._parentLayer;this._setIntState(a,b)},_setIntState:function(a,b){a&&k.forEach(a.getLayers(),function(c){c.linkInfo?a._setIntState(c,b&&c.visible&&a._areLocalAncestorsVisible(a.getFeature({type:"Folder",id:c._parentFolderId}))):c.setVisibility(b)})},
_getLinkParentId:function(a){var b=-1;this.folders&&k.some(this.folders,function(c){return c.networkLinkIds&&-1!==k.indexOf(c.networkLinkIds,a)?(b=c.id,!0):!1});return b},_checkAutoRefresh:function(){var a=this.linkInfo;if(a)if(this.visible){if(this.loaded&&this._map){var b=a.refreshMode,c=a.refreshInterval,d=a.viewRefreshMode;a=a.viewRefreshTime;b&&-1!==b.toLowerCase().indexOf("oninterval")&&0<c&&(this._stopAutoRefresh(),this._timeoutHandle=setTimeout(this.refresh,1E3*c));d&&-1!==d.toLowerCase().indexOf("onstop")&&
0<a&&!this._extChgHandle&&(this._extChgHandle=p.connect(this._map,"onExtentChange",this,this._extentChanged))}}else this._stopAutoRefresh(),p.disconnect(this._extChgHandle),delete this._extChgHandle},_stopAutoRefresh:function(){clearTimeout(this._timeoutHandle);this._timeoutHandle=null},_getQueryParameters:function(a){a=a||this._map;var b={},c=this.linkInfo,d=a&&a.extent;if(this._url.query){m.mixin(b,this._url.query);var e=!!this._url.query.token}u.id&&!e&&(e=u.id.findCredential(this._url.path))&&
(b.token=e.token);if(c){e=c.viewFormat;var h=c.httpQuery;c=c.viewBoundScale;if(d&&e){var f=d,g=d,l=d.spatialReference;l&&(l.isWebMercator()?f=v.webMercatorToGeographic(d):4326===l.wkid&&(g=v.geographicToWebMercator(d)));d=f.getCenter();g=Math.max(g.getWidth(),g.getHeight());c&&(f=f.expand(c));e=e.replace(/\[bboxWest\]/ig,f.xmin).replace(/\[bboxEast\]/ig,f.xmax).replace(/\[bboxSouth\]/ig,f.ymin).replace(/\[bboxNorth\]/ig,f.ymax).replace(/\[lookatLon\]/ig,d.x).replace(/\[lookatLat\]/ig,d.y).replace(/\[lookatRange\]/ig,
g).replace(/\[lookatTilt\]/ig,0).replace(/\[lookatHeading\]/ig,0).replace(/\[lookatTerrainLon\]/ig,d.x).replace(/\[lookatTerrainLat\]/ig,d.y).replace(/\[lookatTerrainAlt\]/ig,0).replace(/\[cameraLon\]/ig,d.x).replace(/\[cameraLat\]/ig,d.y).replace(/\[cameraAlt\]/ig,g).replace(/\[horizFov\]/ig,60).replace(/\[vertFov\]/ig,60).replace(/\[horizPixels\]/ig,a.width).replace(/\[vertPixels\]/ig,a.height).replace(/\[terrainEnabled\]/ig,0);m.mixin(b,y.queryToObject(e))}h&&(h=h.replace(/\[clientVersion\]/ig,
u.version).replace(/\[kmlVersion\]/ig,2.2).replace(/\[clientName\]/ig,"ArcGIS API for JavaScript").replace(/\[language\]/ig,n.locale),m.mixin(b,y.queryToObject(h)))}a=[];for(var t in b)E.isDefined(b[t])&&a.push(t+"\x3d"+b[t]);return(a=a.join("\x26"))?"?"+a:""},setScaleRange:function(a,b){this.inherited(arguments);k.forEach(this.getLayers(),function(c){c.setScaleRange(a,b)})},setOpacity:function(a){this.opacity!=a&&(k.forEach(this.getLayers(),function(b){b.setOpacity(a)}),this.opacity=a,this.onOpacityChange(a))},
_setMap:function(a,b){this.inherited(arguments);this._map=a;var c=this._div=z.create("div",null,b);D.set(c,"position","absolute");this._addInternalLayers();this.evaluateSuspension();return c},_unsetMap:function(a,b){this._io&&this._io.cancel();this._stopAutoRefresh();p.disconnect(this._extChgHandle);delete this._extChgHandle;this._removeInternalLayers();var c=this._div;c&&(b.removeChild(c),z.destroy(c));this._wMap=this._div=null;this.inherited(arguments)},onVisibilityChange:function(a){this.loaded?
(this._fireUpdateStart(),this._setInternalVisibility(this,a),this._checkAutoRefresh(),this._fireUpdateEnd()):this.linkInfo&&a&&(this._waitingForMap||this._parseKml(this._wMap))},refresh:function(){this.loaded&&this._map&&!this._io&&this.visible&&this._parseKml()},getFeatureCollection:function(a){var b,c=[];(a=this.getFeature({type:"Folder",id:a}))&&(b=k.map(a.featureInfos,function(d){if("esriGeometryPoint"===d.type||"esriGeometryPolyline"===d.type||"esriGeometryPolygon"===d.type)return d.id},this))&&
0<b.length&&k.forEach(this._fLayers,function(d){var e;var h=d.toJson();h.featureSet.features&&0<h.featureSet.features.length&&(e=k.filter(h.featureSet.features,function(f){if(-1!==k.indexOf(b,f.attributes[d.objectIdField]))return f},this));e&&0<e.length&&(h.featureSet.features=e,c.push(h))},this);return c},getFeatureCount:function(a){a=this.getFeature({type:"Folder",id:a});var b={points:0,polylines:0,polygons:0};a&&k.forEach(a.featureInfos,function(c){"esriGeometryPoint"===c.type&&(b.points+=1);"esriGeometryPolyline"===
c.type&&(b.polylines+=1);"esriGeometryPolygon"===c.type&&(b.polygons+=1)});return b},_extentChanged:function(){this._stopAutoRefresh();this._timeoutHandle=setTimeout(this.refresh,1E3*this.linkInfo.viewRefreshTime)}});x("extend-esri")&&m.setObject("layers.KMLLayer",w,u);return w});