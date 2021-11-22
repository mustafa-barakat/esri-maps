// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/commands/mapToImage/LegendToLayerUtil","require dojo/_base/lang esri/dijit/geoenrichment/Deferred esri/dijit/geoenrichment/when dojo/dom-construct dojo/dom-style esri/graphic esri/geometry/ScreenPoint esri/layers/GraphicsLayer esri/symbols/PictureMarkerSymbol esri/dijit/geoenrichment/utils/DomUtil ../imageUtils/ImagePrintUtil ../imageUtils/NodeToCanvasUtil dojo/i18n!esri/nls/jsapi".split(" "),function(v,w,x,r,m,g,y,z,A,B,n,C,D,p){p=p.geoenrichment.dijit.ReportPlayer.ReportPlayer;
return{legendToGraphicsLayer:function(a,e,q){var E=a.domNode.scrollHeight>a.domNode.clientHeight,t=n.noTransformPosition(a.domNode),F=g.get(a.domNode,"left"),G=g.get(a.domNode,"top"),H=g.get(a.domNode,"maxHeight");g.set(a.domNode,{left:0,top:0,maxHeight:"10000px"});var f=m.toDom(a.domNode.outerHTML);m.place(f,document.body);f.style.zIndex="-1000";f.style.position="absolute";var c=w.mixin({},n.noTransformPosition(f));c.x=t.x;c.y=t.y;g.set(a.domNode,{left:F+"px",top:G+"px",maxHeight:H+"px"});var u=
new x;v(["esri/dijit/geoenrichment/utils/htmlToSvg/HTMLtoSVGConverter"],function(h){u.resolve(h)});return u.promise.then(function(h){return r(h.htmlToSvg(f,{iterationsPerScript:100}),function(I){return r(C.printImages({svgStrings:[I],nodeToCanvasFunc:function(d,k,b){return D.svgNodeToCanvasFunc(d.children[0],k,b)},scale:5}),function(d){m.destroy(f);var k=new y,b=n.noTransformPosition(q),l=1;E&&(c.x=b.x+10,c.y=b.y+10,l=(b.h-20)/c.h);b=e.toMap(new z(c.x-b.x,c.y-b.y));b.setSpatialReference(e.spatialReference);
k.setGeometry(b);b=new B;b.setUrl(d[0]);b.setWidth(c.w*l);b.setHeight(c.h*l);b.setOffset(c.w/2*l,-c.h/2*l);k.setSymbol(b);d=new A;d.id="legend-layer";d.name=p.legend;d.add(k);return d})})}).otherwise(function(h){console.log(h);return null})},correctLegendPositionByScale:function(a,e){if(a=a.operationalLayers.filter(function(q){return"legend-layer"===q.id})[0])a=a.featureCollection.layers[0].featureSet.features[0].symbol,a.width*=e,a.height*=e,a.xoffset*=e,a.yoffset*=e}}});