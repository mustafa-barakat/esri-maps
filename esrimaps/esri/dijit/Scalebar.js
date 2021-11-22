// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/Scalebar","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/has dojo/query ../kernel ../lang ../domUtils ../units ../SpatialReference ../WKIDUnitConversion ../geometry/Point ../geometry/ScreenPoint ../geometry/Polyline ../geometry/geodesicUtils ../geometry/webMercatorUtils ../geometry/screenUtils ../geometry/normalizeUtils dojo/i18n!../nls/jsapi".split(" "),function(n,l,m,g,p,q,G,x,H,k,
I,y,z,A,B,r,t,C,D,w,u,E,F,J){n=n(null,{declaredClass:"esri.dijit.Scalebar",map:null,mapUnit:null,scalebarUnit:null,unitsDictionary:[],domNode:null,screenPt1:null,screenPt2:null,localStrings:J.widgets.scalebar,constructor:function(a,b){this.metricScalebar=q.create("div",{innerHTML:"\x3cdiv class\x3d'esriScaleLabelDiv'\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarLineLabel esriScalebarSecondNumber'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLine esriScalebarMetricLine'\x3e\x3c/div\x3e"});
this.englishScalebar=q.create("div",{innerHTML:"\x3cdiv class\x3d'esriScalebarLine esriScalebarEnglishLine'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScaleLabelDiv'\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarLineLabel esriScalebarSecondNumber'\x3e\x3c/div\x3e\x3c/div\x3e"});this.domNode=q.create("div");a=a||{};if(a.map){if(a.scalebarUnit){if("english"!==a.scalebarUnit&&"metric"!==a.scalebarUnit&&"dual"!==a.scalebarUnit){console.error("scalebar unit only accepts english or metric or dual");return}this.scalebarUnit=
a.scalebarUnit}else this.scalebarUnit="english";if(a.scalebarStyle){if("ruler"!==a.scalebarStyle&&"line"!==a.scalebarStyle){console.error("scalebar style must be ruler or line");return}this.scalebarStyle=a.scalebarStyle}else this.scalebarStyle="ruler";this.background=a.background;switch(this.scalebarUnit){case "english":"ruler"===this.scalebarStyle&&(this.englishScalebar.innerHTML="\x3cdiv class\x3d'esriScalebarRuler'\x3e\x3cdiv class\x3d'esriScalebarRulerBlock upper_firstpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock upper_secondpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock lower_firstpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock lower_secondpiece'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'scaleLabelDiv'\x3e\x3cdiv class\x3d'esriScalebarLabel' style\x3d'left: -3%'\x3e0\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarFirstNumber'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarSecondNumber'\x3e\x3c/div\x3e\x3c/div\x3e");
this.domNode.appendChild(this.englishScalebar);break;case "metric":"ruler"===this.scalebarStyle&&(this.metricScalebar.innerHTML="\x3cdiv class\x3d'esriScalebarRuler'\x3e\x3cdiv class\x3d'esriScalebarRulerBlock upper_firstpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock upper_secondpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock lower_firstpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock lower_secondpiece'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'scaleLabelDiv'\x3e\x3cdiv class\x3d'esriScalebarLabel' style\x3d'left: -3%'\x3e0\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarFirstNumber'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarSecondNumber'\x3e\x3c/div\x3e\x3c/div\x3e");
this.domNode.appendChild(this.metricScalebar);break;case "dual":this.domNode.appendChild(this.metricScalebar),this.domNode.appendChild(this.englishScalebar)}this.map=a.map;b?b.appendChild(this.domNode):(this.map.container.appendChild(this.domNode),a.attachTo?p.add(this.domNode,"scalebar_"+a.attachTo):p.add(this.domNode,"scalebar_bottom-left"));p.add(this.domNode,"esriScalebar");if(this.map.loaded)this._getDistance(),this._checkBingMaps();else var e=g.connect(this.map,"onLoad",this,function(){g.disconnect(e);
e=null;this._getDistance();this._checkBingMaps()});this._mapOnPan=g.connect(this.map,"onPan",this,this._getDistance);this._mapOnExtentChange=g.connect(this.map,"onExtentChange",this,this._getDistance);m.forEach(this.map.layerIds,function(d,f){"esri.virtualearth.VETiledLayer"===this.map.getLayer(d).declaredClass&&g.connect(this.map.getLayer(d),"onVisibilityChange",l.hitch(this,function(c){this._checkBingMaps()}))},this);this._mapOnLayerAdd=g.connect(this.map,"onLayerAdd",l.hitch(this,function(d){"esri.virtualearth.VETiledLayer"===
d.declaredClass&&g.connect(d,"onVisibilityChange",l.hitch(this,function(f){this._checkBingMaps()}));this._checkBingMaps()}));this._mapOnLayerRemove=g.connect(this.map,"onLayerRemove",l.hitch(this,this._checkBingMaps))}else console.error("scalebar: unable to find the 'map' property in parameters")},hide:function(){this._hidden=!0;z.hide(this.domNode)},show:function(){this._hidden=!1;z.show(this.domNode)},destroy:function(){g.disconnect(this._mapOnPan);g.disconnect(this._mapOnExtentChange);g.disconnect(this._mapOnLayerAdd);
g.disconnect(this._mapOnLayerRemove);this.hide();this.map=null;q.destroy(this.domNode)},_checkBingMaps:function(){p.contains(this.domNode,"scalebar_bottom-left")&&(x.set(this.domNode,"left","25px"),m.forEach(this.map.layerIds,function(a,b){"esri.virtualearth.VETiledLayer"===this.map.getLayer(a).declaredClass&&this.map.getLayer(a).visible&&(a="95px",this.map._mapParams.nav&&(a="115px"),x.set(this.domNode,"left",a))},this))},_getDistance:function(a){a=this.map._clip?this.map._getAvailExtent():a||this.map.extent;
var b=G.position(this.domNode,!0).y-this.map.position.y;b=b>this.map.height?this.map.height:b;b=0>b?0:b;var e=new C(0,b);b=new C(this.map.width,b);this.mapUnit="esriDecimalDegrees";var d=E.toMapPoint(a,this.map.width,this.map.height,e),f=E.toMapPoint(a,this.map.width,this.map.height,b);e=new t(a.xmin,(a.ymin+a.ymax)/2,this.map.spatialReference);b=new t(a.xmax,(a.ymin+a.ymax)/2,this.map.spatialReference);this.map._clip&&(f=this.map.spatialReference._getInfo(),d=new t(f.valid[0],0,this.map.spatialReference),
f=new t(f.valid[1],0,this.map.spatialReference));if(3857===this.map.spatialReference.wkid||102100===this.map.spatialReference.wkid||102113===this.map.spatialReference.wkid||this.map.spatialReference.wkt&&-1!=this.map.spatialReference.wkt.indexOf("WGS_1984_Web_Mercator"))d=u.webMercatorToGeographic(d,!0),f=u.webMercatorToGeographic(f,!0),e=u.webMercatorToGeographic(e,!0),b=u.webMercatorToGeographic(b,!0);else if(y.isDefined(r[this.map.spatialReference.wkid])||this.map.spatialReference.wkt&&0===this.map.spatialReference.wkt.indexOf("PROJCS")){this.mapUnit=
"linearUnit";a=Math.abs(a.xmax-a.xmin);if(y.isDefined(r[this.map.spatialReference.wkid]))var c=r.values[r[this.map.spatialReference.wkid]];else{c=this.map.spatialReference.wkt;var h=c.lastIndexOf(",")+1;var v=c.lastIndexOf("]]");c=parseFloat(c.substring(h,v))}a*=c;h=a/1609;c=a/1E3;a/=1E3}"esriDecimalDegrees"===this.mapUnit&&(c=w.isSupported(this.map.spatialReference)?this.map.spatialReference.wkid:4326,a=new D(new B({wkid:c})),a.addPath([d,f]),d=F._straightLineDensify(a,10),a=w.geodesicLengths([d],
A.KILOMETERS)[0],d=new D(new B({wkid:c})),d.addPath([e,b]),e=F._straightLineDensify(d,10),w.geodesicLengths([e],A.KILOMETERS),h=a/1.609,c=a);"english"===this.scalebarUnit?this._getScaleBarLength(h,"mi"):"metric"===this.scalebarUnit?this._getScaleBarLength(c,"km"):"dual"===this.scalebarUnit&&(this._getScaleBarLength(h,"mi"),this._getScaleBarLength(c,"km"))},_getScaleBarLength:function(a,b){var e=this.map._getFrameWidth();a=50*a/(this.map._clip&&0<e?e:this.map.width);e=0;var d=b;.1>a&&("mi"===b?(a*=
5280,d="ft"):"km"===b&&(a*=1E3,d="m"));for(;1<=a;)a/=10,e++;if(.5<a){var f=1;var c=.5}else.3<a?(f=.5,c=.3):.2<a?(f=.3,c=.2):.15<a?(f=.2,c=.15):.1<=a&&(f=.15,c=.1);b=f/a>=a/c?c:f;this._drawScaleBar(b/a*50,Math.pow(10,e)*b,d)},_drawScaleBar:function(a,b,e){var d=2*Math.round(a);if("mi"===e||"ft"===e){this.englishScalebar.style.width=d+"px";a=k(".esriScalebarFirstNumber",this.englishScalebar);var f=k(".esriScalebarSecondNumber",this.englishScalebar);var c=k(".esriScalebarMetricLineBackground",this.englishScalebar)}else this.metricScalebar.style.width=
d+"px",a=k(".esriScalebarFirstNumber",this.metricScalebar),f=k(".esriScalebarSecondNumber",this.metricScalebar),c=k(".esriScalebarMetricLineBackground",this.metricScalebar);m.forEach(c,function(h,v){h.style.width=d-2+"px"},this);m.forEach(a,function(h,v){h.innerHTML=b},this);m.forEach(f,function(h,v){h.innerHTML="esriUnknown"!==this.mapUnit?2*b+this.localStrings[e]:2*b+"Unknown Unit"},this)}});H("extend-esri")&&l.setObject("dijit.Scalebar",n,I);return n});