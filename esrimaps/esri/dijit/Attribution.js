// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/Attribution","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/kernel dojo/has dojo/query dojo/dom dojo/dom-attr dojo/dom-construct dojo/dom-style dojo/dom-class dojo/dom-geometry ../kernel ../lang ../SpatialReference ../geometry/webMercatorUtils ../geometry/Extent".split(" "),function(u,n,q,r,B,C,I,D,v,x,t,p,y,E,z,F,G,H){u=u(null,{declaredClass:"esri.dijit.Attribution",itemDelimiter:" | ",listClass:"esriAttributionList",itemClass:"esriAttributionItem",
lastItemClass:"esriAttributionLastItem",delimiterClass:"esriAttributionDelim",constructor:function(b,a){try{n.mixin(this,b);this._attributions={};this._pendingDfds={};this._activeLayers=[];this._sharedLayers=[];this._layerHandles={};var c=this.domNode=D.byId(a),d=this.map,e="\x3cspan class\x3d'"+this.listClass+"'\x3e\x3c/span\x3e";c&&(v.set(c,"innerHTML",e),this.listNode=B.query(".esriAttributionList",c)[0],this.itemNodes={});this._eventConnections=[r.connect(d,"onLayerAdd",this,this._onLayerAdd),
r.connect(d,"onLayerRemove",this,this._onLayerRemove),r.connect(d,"onLayerSuspend",this,this._onLayerSuspend),r.connect(d,"onLayerResume",this,this._onLayerResume),r.connect(d,"onResize",this,this._adjustFocus),r.connect(d,"onExtentChange",this,this._onExtentChange)];if(d.loaded){var f=d.layerIds.concat(d.graphicsLayerIds),g,k=f.length;for(g=0;g<k;g++){var l=d.getLayer(f[g]);l.loaded&&this._onLayerAdd(l)}}}catch(w){}},startup:function(){},destroy:function(){q.forEach(this._eventConnections,r.disconnect);
x.destroy(this.listNode);var b=this._layerHandles,a;for(a in b)b[a]&&b[a].remove();this.map=this.domNode=this._eventConnections=this.listNode=this._attributions=this._pendingDfds=this.itemNodes=this._activeLayers=this._lastItem=this._sharedLayers=this._layerHandles=null},_onLayerAdd:function(b){try{var a=this._attributions,c=b.id;if(!z.isDefined(a[c])&&b.showAttribution){if(b.hasAttributionData){var d=b.getAttributionData();this._pendingDfds[c]=1;a[c]=d;d.addBoth(n.partial(this._onAttributionLoad,
this,b))}else a[c]=b.copyright||b.copyrightText||"",a[c]?(b.suspended||this._activeLayers.push(c),this._createNode(c)):this._onLayerRemove(b);-1<b.declaredClass.toLowerCase().indexOf("vetiledlayer")&&(this._layerHandles[c]=b.on("map-style-change",n.hitch(this,function(){this._onLayerRemove(b);this._onLayerAdd(b)})))}}catch(e){}},_onAttributionLoad:function(b,a,c){var d=b._attributions,e=b._pendingDfds,f=a.id;if(e&&e[f]){delete e[f];if(!c||c instanceof Error)c="";d[f]=c?b._createIndexByLevel(c,-1!==
a.declaredClass.toLowerCase().indexOf("vetiledlayer")):a.copyright||a.copyrightText||"";d[f]?(a.suspended||b._activeLayers.push(f),b._createNode(f)):b._onLayerRemove(a)}},_onLayerRemove:function(b){try{var a=b.id,c=this.itemNodes,d=-1;this._onLayerSuspend(b);this._layerHandles[a]&&this._layerHandles[a].remove();delete this._attributions[a];delete this._pendingDfds[a];delete this._layerHandles[a];var e=this._getGroupIndex(a);-1!==e&&(d=q.indexOf(this._sharedLayers[e],a),-1!==d&&(this._sharedLayers[e].splice(d,
1),1>=this._sharedLayers[e].length&&this._sharedLayers.splice(e,1)));c[a]&&-1===d&&x.destroy(c[a]);delete c[a];this._updateLastItem()}catch(f){}},_onLayerSuspend:function(b){try{var a=b.id;if(this._attributions[a]){var c=q.indexOf(this._activeLayers,a),d=this.itemNodes[a];-1!==c&&this._activeLayers.splice(c,1);d&&this._toggleItem(d,!1,this._getGroupIndex(a))}}catch(e){}},_adjustFocus:function(){var b=this.domNode.scrollWidth>this.domNode.clientWidth,a=p.contains(this.domNode,"esriAttributionOpen");
v.set(this.domNode,"tabIndex",b||a?"0":"")},_onLayerResume:function(b){try{var a=b.id,c=this._attributions[a],d=this.itemNodes[a];if(c&&(-1===q.indexOf(this._activeLayers,a)&&this._activeLayers.push(a),d)){var e=n.isString(c)?c:this._getContributorsList(c,this.map.extent,this.map.getLevel());n.isString(c)||v.set(d,"innerHTML",e?e+this._getDelimiter():"");e&&this._toggleItem(d,!0,this._getGroupIndex(a))}}catch(f){}},_onExtentChange:function(b,a,c,d){try{var e=this._activeLayers,f=this._attributions,
g=this.itemNodes,k,l,w=e.length||0;for(l=0;l<w;l++){var h=e[l];var m=f[h];if((k=g[h])&&!n.isString(m)){var A=this._getContributorsList(m,b,d?d.level:-1);v.set(k,"innerHTML",A?A+this._getDelimiter():"");this._toggleItem(k,!!A,-1)}}}catch(J){}this._adjustCursorStyle()},_createNode:function(b){if(this.domNode){var a=this._checkShareInfo(b),c=a&&a.sharedWith;c=c&&this.itemNodes[c];var d=this.map,e=this._attributions[b];e=n.isString(e)?e:this._getContributorsList(e,d.extent,d.getLevel());d=!!e&&!d.getLayer(b).suspended;
c?(this.itemNodes[b]=c,this._toggleItem(c,d,a.index)):(b=this.itemNodes[b]=x.create("span",{"class":this.itemClass,innerHTML:e?e+this._getDelimiter():"",style:{display:d?"inline":"none"}},this.listNode),d&&this._setLastItem(b));this._adjustCursorStyle()}},_checkShareInfo:function(b){var a=this._attributions,c,d=-1,e=a[b];if(e&&n.isString(e)){for(c in a){var f=a[c];if(c!==b&&f&&n.isString(f)&&f.length===e.length&&f.toLowerCase()===e.toLowerCase()){var g=c;break}}a=this._sharedLayers;f=a.length;if(g){for(c=
0;c<f;c++)if(e=a[c],-1!==q.indexOf(e,g)){d=c;e.push(b);break}-1===d&&(d=a.push([g,b])-1)}}return-1<d?{index:d,sharedWith:g}:null},_getGroupIndex:function(b){var a=this._sharedLayers,c,d=a.length,e=-1;for(c=0;c<d;c++)if(-1!==q.indexOf(a[c],b)){e=c;break}return e},_getDelimiter:function(){var b=this.itemDelimiter;return b?"\x3cspan class\x3d'"+this.delimiterClass+"'\x3e"+b+"\x3c/span\x3e":""},_toggleItem:function(b,a,c){if(-1<c&&!a){c=this._sharedLayers[c];var d,e=c.length,f=this._activeLayers;for(d=
0;d<e;d++)if(-1!==q.indexOf(f,c[d]))return}t.set(b,"display",a?"inline":"none");this._updateLastItem()},_updateLastItem:function(){var b=this.listNode.childNodes;var a=b.length;if(a)for(--a;0<=a;a--){var c=b[a];if("none"!==t.get(c,"display")){this._setLastItem(c);break}}this._adjustCursorStyle()},_setLastItem:function(b){var a=this.itemClass,c=this.lastItemClass;this._lastItem&&p.replace(this._lastItem,a,c);b&&(p.replace(b,c,a),this._lastItem=b)},_createIndexByLevel:function(b,a){b=b.contributors;
var c,d,e=b?b.length:0,f,g=new F(4326),k={};for(d=0;d<e;d++){var l=b[d];var w=(c=l.coverageAreas)?c.length:0;for(f=0;f<w;f++){var h=c[f];var m=h.bbox;m={extent:G.geographicToWebMercator(new H(m[1],m[0],m[3],m[2],g)),attribution:l.attribution||"",zoomMin:h.zoomMin-(a&&h.zoomMin?1:0),zoomMax:h.zoomMax-(a&&h.zoomMax?1:0),score:z.isDefined(h.score)?h.score:100,objectId:d};for(h=m.zoomMin;h<=m.zoomMax;h++)k[h]=k[h]||[],k[h].push(m)}}return k},_getContributorsList:function(b,a,c){var d="";if(a&&z.isDefined(c)&&
-1<c){b=b[c];c=a.getCenter().normalize();var e=b?b.length:0,f=[],g={};for(d=0;d<e;d++)a=b[d],!g[a.objectId]&&a.extent.contains(c)&&(g[a.objectId]=1,f.push(a));f.sort(function(k,l){return l.score-k.score||k.objectId-l.objectId});e=f.length;for(d=0;d<e;d++)f[d]=f[d].attribution;d=f.join(", ")}return d},_adjustCursorStyle:function(){var b=y.position(this.listNode.parentNode,!0).h;p.contains(this.listNode.parentNode,"esriAttributionOpen")?(p.remove(this.listNode.parentNode,"esriAttributionOpen"),b>y.position(this.listNode.parentNode,
!0).h?(t.set(this.listNode.parentNode,"cursor","pointer"),p.add(this.listNode.parentNode,"esriAttributionOpen")):t.set(this.listNode.parentNode,"cursor","default")):(p.add(this.listNode.parentNode,"esriAttributionOpen"),b<y.position(this.listNode.parentNode,!0).h?t.set(this.listNode.parentNode,"cursor","pointer"):t.set(this.listNode.parentNode,"cursor","default"),p.remove(this.listNode.parentNode,"esriAttributionOpen"));this._adjustFocus()}});C("extend-esri")&&n.setObject("dijit.Attribution",u,E);
return u});