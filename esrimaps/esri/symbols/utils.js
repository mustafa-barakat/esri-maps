// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/symbols/utils","dojo/_base/lang dojo/_base/window dojo/has dojox/gfx ../kernel ../Color".split(" "),function(r,m,n,g,t,u){function l(a){a.removeAttribute("marker-start");a.removeAttribute("marker-end");a.removeAttribute("opacity")}function h(a,b){for(var d in b)a.setAttribute(d,b[d])}function p(a,b,d){b="url(#"+b.getAttribute("id")+")";a.rawNode.setAttribute("marker-"+d,b)}var v=-1!==g.renderer.toLowerCase().indexOf("svg"),w=9===n("ie"),q={marker:{markerWidth:"6",markerHeight:"6",markerUnits:"strokeWidth",
orient:"auto"},spear:{marker:{end:{viewBox:"0 0 25.4 23.43",refX:"20",refY:"12.76"},start:{viewBox:"-25.4 0 25.4 23.43",refX:"-20",refY:"12.76"}},path:{common:{d:"M1.63 23.43 L5.37 16.6 L5.37 8.93 L1.63 2.09 L25.4 12.76 L1.63 23.43 Z","stroke-width":"0","fill-opacity":"1"},start:{transform:"matrix(-1, 0, 0, 1, 0, 0)"}}}};g={applyLineMarker:function(a,b,d,f){if(v&&!w){var c=a&&a.rawNode,e=b.marker;d=d||b.color;c&&"none"!==b.style&&d&&e&&"arrow"===e.style&&e.placement?c.getTotalLength&&0===c.getTotalLength()?
l(c):(b=-1!==e.placement.indexOf("begin"),e=-1!==e.placement.indexOf("end"),b||e?(c.removeAttribute("stroke-opacity"),c.setAttribute("opacity",d.a),b?(b=f(a,d,"spear","start"),p(a,b,"start")):c.removeAttribute("marker-start"),e?(d=f(a,d,"spear","end"),p(a,d,"end")):c.removeAttribute("marker-end")):l(c)):c&&l(c)}},createSVGMarker:function(a,b,d,f){d=q[d];var c=m.doc.createElementNS("http://www.w3.org/2000/svg","marker");c.setAttribute("id",b);h(c,q.marker);h(c,d.marker[f]);b=m.doc.createElementNS("http://www.w3.org/2000/svg",
"path");b.setAttribute("fill",a.toCss());h(b,d.path.common);h(b,d.path[f]);c.appendChild(b);return c},create2DColorRamp:function(a){var b=a.surface.createGroup(),d=a.colors,f=a.numClasses;a=(a.size||75)/f;for(var c=0;c<f;c++)for(var e=c*a,k=0;k<f;k++){var x=d[c][k];b.createRect({x:k*a,y:e,width:a,height:a}).setFill(x).setStroke(null)}return b},setSymbolFillColor:function(a,b){if(a)switch(b=b?new u(b):null,a.type){case "simplemarkersymbol":"cross"===a.style||"x"===a.style?a.outline&&a.outline.setColor(b):
a.setColor(b);break;case "simplelinesymbol":case "cartographiclinesymbol":case "simplefillsymbol":case "shieldlabelsymbol":case "textsymbol":a.setColor(b)}}};n("extend-esri")&&r.setObject("renderer.utils",g,t);return g});