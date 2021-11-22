// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/PopupBase","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/Color dojo/_base/Deferred dojo/has ./kernel ./graphic ./geometry/Point ./geometry/jsonUtils ./geometry/mathUtils ./geometry/webMercatorUtils ./symbols/SimpleMarkerSymbol ./symbols/SimpleLineSymbol ./symbols/CartographicLineSymbol ./symbols/SimpleFillSymbol ./tasks/query ./Evented".split(" "),function(t,p,n,r,z,A,B,C,D,E,F,w,x,q,v,u,y,G){function H(a){return"sizeInfo"===a.type}t=t(G,{declaredClass:"esri.PopupBase",
_featureLayers:{},_updateEndHandles:[],_mapLevelChangeHandle:null,_evtMap:{"set-features":!0,"clear-features":!0,"selection-change":!0,"dfd-complete":!0},onSetFeatures:function(){},onClearFeatures:function(){},onSelectionChange:function(){},onDfdComplete:function(){},initialize:function(){this.count=0;this.selectedIndex=-1;this.on("clear-features",p.hitch(this,this._resetUpdateEndListeners));this.on("dfd-complete",p.hitch(this,this._processFeatures));this.on("set-features",p.hitch(this,this._processFeatures));
this.on("selection-change",p.hitch(this,this._checkFeatureResolution))},cleanup:function(){this.features=this.deferreds=null;this._resetUpdateEndListeners();this._untrackMapLevelChange()},setFeatures:function(a){if(a&&a.length){this.clearFeatures(!0);var b,c;a[0]instanceof z?c=a:b=a;b?this._updateFeatures(null,b):(this.deferreds=c,c=c.slice(0),n.forEach(c,function(d){d.addBoth(p.hitch(this,this._updateFeatures,d))},this))}},clearFeatures:function(a){this.features=this.deferreds=this._marked=null;
this.count=0;var b=this.selectedIndex;this.selectedIndex=-1;if(-1<b)this.onSelectionChange();this.onClearFeatures({isIntermediate:!!a})},getSelectedFeature:function(){var a=this.features;if(a)return a[this.selectedIndex]},select:function(a){0>a||a>=this.count||(this.selectedIndex=a,this.onSelectionChange())},enableHighlight:function(a){this._highlighted=a.graphics.add(new C(new D(0,0,a.spatialReference)));this._highlighted.attr("data-popup-highlight","");this._highlighted.hide();this._trackMapLevelChange(a);
this.markerSymbol||(a=this.markerSymbol=new x,a.setStyle(x.STYLE_TARGET),a._setDim(16,16,0),a.setOutline(new v(q.STYLE_SOLID,new r([0,255,255]),2,v.CAP_ROUND,v.JOIN_ROUND)),a.setColor(new r([0,0,0,0])));this.lineSymbol||(this.lineSymbol=new q(q.STYLE_SOLID,new r([0,255,255]),2));this.fillSymbol||(this.fillSymbol=new u(u.STYLE_NULL,new q(q.STYLE_SOLID,new r([0,255,255]),2),new r([0,0,0,0])));this.clusterFillSymbol||(this.clusterFillSymbol=new u(u.STYLE_SOLID,new q(q.STYLE_SOLID,new r([0,255,255]),
1.33),null))},disableHighlight:function(a){var b=this._highlighted;b&&(b.hide(),a.graphics.remove(b),delete this._highlighted);this._untrackMapLevelChange();this.markerSymbol=this.lineSymbol=this.fillSymbol=null},showHighlight:function(){var a=this.features&&this.features[this.selectedIndex];this._highlighted&&a&&a.geometry&&this._highlighted.show()},hideHighlight:function(){this._highlighted&&this._highlighted.hide()},updateHighlight:function(a,b){var c=b.geometry,d=this._highlighted;if(c&&d){d.hide();
!d._graphicsLayer&&a&&a.graphics.add(d);d.setGeometry(E.fromJson(c.toJson()));switch(c.type){case "point":case "multipoint":var g=b.getLayer(),e=b.symbol||g&&g._getSymbol(b);if(g&&e){var m;c=e.xoffset||0;var h=e.yoffset||0,k=e.angle||0;switch(e.type){case "simplemarkersymbol":var l=m=e.size||0;break;case "picturemarkersymbol":l=e.width||0;m=e.height||0;break;case "textsymbol":l=m=e.font&&e.font.size||0}var f=b.symbol?null:g._getRenderer(b);(g=this._getSizeInfo(f))?a=b=f.getSize(b,{sizeInfo:g,shape:e.style,
resolution:a&&a.getResolutionInMeters&&a.getResolutionInMeters()}):null!=b.size?a=b=b.size:(a=l,b=m);f=this.markerSymbol;a&&b&&(c&&(c=c/l*a),h&&(h=h/m*b),f._setDim(a+4,b+4,0));f.setOffset(c,h);f.setAngle(k)}break;case "polyline":f=this.lineSymbol;break;case "polygon":f=this.fillSymbol}d.setSymbol(f)}else d&&d.hide()},showClosestFirst:function(a){var b=this.features;if(b&&b.length){if(1<b.length){var c,d=Infinity,g=-1,e,m=F.getLength,h=a.spatialReference;a=a.normalize();for(c=b.length-1;0<=c;c--)if(e=
b[c].geometry){var k=e.spatialReference;var l=0;try{var f="point"===e.type?e:e.getExtent().getCenter();f=f.normalize();h&&k&&!h.equals(k)&&h._canProject(k)&&(f=h.isWebMercator()?w.geographicToWebMercator(f):w.webMercatorToGeographic(f));l=m(a,f)}catch(I){}0<l&&l<d&&(d=l,g=c)}0<g&&(b.splice(0,0,b.splice(g,1)[0]),this.select(0))}}else this.deferreds&&(this._marked=a)},_trackMapLevelChange:function(a){this._untrackMapLevelChange();this._mapLevelChangeHandle=a.on("extent-change",p.hitch(this,function(b){b.levelChange&&
this._checkFeatureResolution()}))},_untrackMapLevelChange:function(){this._mapLevelChangeHandle&&(this._mapLevelChangeHandle.remove(),this._mapLevelChangeHandle=null)},_unbind:function(a){a=n.indexOf(this.deferreds,a);if(-1!==a)return this.deferreds.splice(a,1),this.deferreds.length?1:(this.deferreds=null,2)},_fireComplete:function(a){var b=this._marked;b&&(this._marked=null,this.showClosestFirst(b));this.onDfdComplete(a)},_updateFeatures:function(a,b){if(a){if(this.deferreds&&(a=this._unbind(a)))if(b&&
b instanceof Error){if(this._fireComplete(b),2===a)this.onSetFeatures()}else if(b&&b.length)if(this.features){if(b=n.filter(b,function(c){return-1===n.indexOf(this.features,c)},this),this.features=this.features.concat(b),this.count=this.features.length,this._fireComplete(),2===a)this.onSetFeatures()}else{this.features=b;this.count=b.length;this.selectedIndex=0;this._fireComplete();if(2===a)this.onSetFeatures();this.select(0)}else if(this._fireComplete(),2===a)this.onSetFeatures()}else this.features=
b,this.count=b.length,this.selectedIndex=0,this.onSetFeatures(),this.select(0)},_getSizeInfo:function(a){return a?a.sizeInfo||n.filter(a.visualVariables,H)[0]:null},_resetUpdateEndListeners:function(){this._featureLayers={};n.forEach(this._updateEndHandles,function(a){a.remove()});this._updateEndHandles=[]},_processFeatures:function(){n.forEach(this.features,function(a){(a=a.getLayer())&&!this._featureLayers[a.id]&&(1===a.currentMode||0===a.currentMode&&6===a.mode)&&a.objectIdField&&a.hasXYFootprint&&
a.queryFeatures&&(this._featureLayers[a.id]=a,a=a.on("update-end",p.hitch(this,this._fLyrUpdateEndHandler)),this._updateEndHandles.push(a))},this)},_fLyrUpdateEndHandler:function(a){if(!a.error){var b=this,c=a.target,d=c.getSelectedFeatures(),g=0===c.currentMode&&6===c.mode,e={},m=[];n.forEach(this.features,function(h){if(h.getLayer()===c){var k=h.attributes[c.objectIdField];e[k]=h;m.push(k)}});m.length&&(a=new y,a.objectIds=m,c.queryFeatures(a,function(h){n.forEach(h.features,function(k){var l=e[k.attributes[c.objectIdField]],
f=!1;l.geometry!==k.geometry||c.hasWebGLSurface()?(l.setGeometry(k.geometry),f=!0):g&&d&&-1!==n.indexOf(d,k)&&(f=!0);f&&this._highlighted&&l===this.getSelectedFeature()&&this._highlighted.setGeometry(k.geometry)},b)}))}},_checkFeatureResolution:function(){var a=this.getSelectedFeature(),b=this.map;if(a&&b){var c=a.getLayer();if(c){var d=a.getResolution();2===c.currentMode&&a.geometry&&d&&d>b.getResolution()&&(b=b.getResolutionForPopup(),(c=this._refetchFeature(a,b,c))&&c.then(p.hitch(this,this._updateFeatureResolution,
a,b)))}}},_refetchFeature:function(a,b,c){if(a=this._createQueryForCustomResolution(a,b,c))return c.queryFeatures(a).then(function(d){return d&&d.features[0]})},_createQueryForCustomResolution:function(a,b,c){c=c.objectIdField;var d=a.attributes;d=d&&c&&d[c];if(null==d)return null;var g=new y;g.objectIds=[d];g.maxAllowableOffset=b;g.outFields=[c];g.outSpatialReference=a.geometry.spatialReference;return g},_updateFeatureResolution:function(a,b,c){a.getResolution()!==b&&(a.setResolution(b),a.setGeometry(c.geometry),
this._highlighted&&a===this.getSelectedFeature()&&this._highlighted.setGeometry(a.geometry))}});A("extend-esri")&&(B.PopupBase=t);return t});