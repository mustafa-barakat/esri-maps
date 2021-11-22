// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/editing/SelectionHelper","dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/_base/array dojo/has dojo/DeferredList ../../geometry/Extent ../../geometry/Point ../../geometry/ScreenPoint ../../layers/FeatureLayer ../../tasks/query ../../kernel".split(" "),function(n,k,q,h,v,w,x,y,t,m,u,z){n=n(null,{declaredClass:"esri.dijit.editing.SelectionHelper",constructor:function(a){this._settings=a||{};this._sConnects=[];this._mapServiceCount=0;this._map=this._settings.map;this._tolerance=
this._settings.singleSelectionTolerance;this._initMapServiceInfos(this._settings.layers)},destroy:function(){for(var a in this._sConnects)this._sConnects.hasOwnProperty(a)&&q.disconnect(this._sConnects[a])},selectFeatures:function(a,b,c,d){c===m.SELECTION_NEW&&(this._resetMapServiceInfos(),this.getSelection(a));var e=[];h.forEach(a,function(f){if(!0===f.visible&&!0===f._isMapAtVisibleScale()){var g=c;f._isSelOnly&&g===m.SELECTION_NEW&&(g=m.SELECTION_ADD);e.push(f.selectFeatures(b,g))}});(new w(e)).addCallback(k.hitch(this,
function(f){var g=[];h.forEach(f,function(l,p){h.forEach(l[1],function(r){(r=a[p]._mode._getFeature(r.attributes[a[p].objectIdField])||null)&&g.push(r)},this)},this);this._mapServiceCount?((f=c===m.SELECTION_SUBTRACT)?(this._resetMapServiceInfos(),this._createLayerDefs(this._getLayerInfosFromSelection(a))):this._createLayerDefs(this._getLayerInfosFromFeatures(g)),this._updateLayerDefs(this._mapServiceInfos,!1,!(g&&g.length||f),k.hitch(this,d,g))):d(g)}))},selectFeaturesByGeometry:function(a,b,c,d){var e=
b;-1!==b.declaredClass.indexOf("Extent")&&b.xmax===b.xmin&&b.ymax===b.ymin&&(e=new y(b.xmax,b.ymax,b.spatialReference));e=-1!==e.declaredClass.indexOf("Point")?this._extentFromPoint(e):e;b=new u;b.geometry=e;this.selectFeatures(a,b,c,d)},clearSelection:function(a){h.forEach(this._nonSelOnlyLayers,function(c){c.clearSelection&&c.clearSelection()});if(this._mapServiceCount){this._resetMapServiceInfos();var b=this._getLayerInfosFromSelection(this._settings.layers);h.some(b,function(c){return c.oids&&
c.oids.length})&&(this._createLayerDefs(b),this._updateLayerDefs(this._mapServiceInfos,!0,a||!1))}},findMapService:function(a){var b=this._map,c=b.layerIds;a=a&&a._url&&a._url.path?a._url.path.toLowerCase():"";var d;for(d in c)if(c.hasOwnProperty(d)){var e=b.getLayer(c[d]);var f=e._url?e._url.path?e._url.path.toLowerCase().replace("mapserver","featureserver"):e._url.toLowerCase().replace("mapserver","featureserver"):"";if(a.substr(0,f.length)===f&&"esri.layers.ArcGISDynamicMapServiceLayer"===e.declaredClass)return e}},
getSelection:function(a){var b=[];h.forEach(a,function(c){c._isSelOnly&&b.push(this._createLayerInfo(c))},this);h.forEach(b,function(c){var d=this._createMapServiceInfo(this.findMapService(c.layer));d&&(d.layerInfos[c.layer.layerId]=c)},this)},_initMapServiceInfos:function(a){this._nonSelOnlyLayers=[];this._mapServiceInfos=[];h.forEach(a,function(b){var c=this.findMapService(b);c?(this._mapServiceCount++,this._createMapServiceInfo(c),c&&c.setDisableClientCaching(!0)):this._nonSelOnlyLayers.push(b)},
this)},_createMapServiceInfo:function(a){if(!a)return null;var b=this._mapServiceInfos,c=b[a.id];c||(c=b[a.id]={mapService:a,layerInfos:[],layerDefs:k.mixin([],a.layerDefinitions||[]),origLayerDefs:k.mixin([],a.layerDefinitions||[])});return c},_resetMapServiceInfo:function(a){h.forEach(a.layerInfos,this._resetLayerInfo);a.layerDefs=k.mixin([],a.origLayerDefs||[])},_resetMapServiceInfos:function(){var a=this._mapServiceInfos,b;for(b in a)a.hasOwnProperty(b)&&this._resetMapServiceInfo(a[b])},_createLayerInfo:function(a,
b){var c=a.objectIdField;b=b?[]:a.getSelectedFeatures();return{layer:a,selectedFeatures:b||[],oids:h.map(b,function(d){return d.attributes[c]})}},_resetLayerInfo:function(a){a&&(a.selectedFeatures=[],a.oids=[])},_updateLayerDefs:function(a,b,c,d){for(var e in a)if(a.hasOwnProperty(e)){var f=a[e],g=f.mapService,l=f.layerDefs=b?k.mixin([],f.origLayerDefs||[]):f.layerDefs;l?(c?d&&d():this._sConnects[g.id]=q.connect(g,"onUpdateEnd",k.hitch(this,"_onMapServiceUpdate",f,b,d)),g.setLayerDefinitions(l,c||
!1)):d&&d()}},_onMapServiceUpdate:function(a,b,c){q.disconnect(this._sConnects[a.mapService.id]);h.forEach(a.layerInfos,function(d){if(b)d&&d.layer.clearSelection();else{var e=new u;e.objectIds=d?d.oids:[];e.objectIds.length&&d.layer.selectFeatures(e,m.SELECTION_SUBTRACT)}},this);b&&this._resetMapServiceInfo(a);c&&c()},_createLayerDefs:function(a){h.forEach(a,function(b){var c=b.layer,d=this._createMapServiceInfo(this.findMapService(b.layer));if(d){d=d.layerDefs;var e=c.layerId,f='("'+c.objectIdField+
'" NOT IN (',g=b.oids;g&&g.length&&(h.forEach(b.oids,function(l,p){g=!0;p&&(f+=",");f+="'"+l+"'"}),f+="))",d[e]=d.length&&d[e]&&d[e].length?d[e]+(" AND"+f):f)}},this)},_getLayerInfosFromFeatures:function(a){var b=[];h.forEach(a,function(d){var e=d.getLayer();e&&e._isSelOnly&&(b[e.id]||(b[e.id]=this._createLayerInfo(e,!0)),b[e.id].selectedFeatures.push(d),b[e.id].oids.push(d.attributes[e.objectIdField]))},this);a=[];for(var c in b)b.hasOwnProperty(c)&&a.push(b[c]);return a},_getLayerInfosFromSelection:function(a){var b=
[];h.forEach(a,function(c){c._isSelOnly&&b.push(this._createLayerInfo(c,!1))},this);return b},_extentFromPoint:function(a){var b=this._tolerance,c=this._map,d=c.toScreen(a);a=new t(d.x-b,d.y+b);b=new t(d.x+b,d.y-b);a=c.toMap(a);b=c.toMap(b);return new x(a.x,a.y,b.x,b.y,c.spatialReference)}});v("extend-esri")&&k.setObject("dijit.editing.SelectionHelper",n,z);return n});