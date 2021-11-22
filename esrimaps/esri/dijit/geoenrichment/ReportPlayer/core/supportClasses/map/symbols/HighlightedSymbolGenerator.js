// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/map/symbols/HighlightedSymbolGenerator","dojo/_base/lang dojo/_base/Color esri/dijit/geoenrichment/Deferred esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/jsonUtils esri/renderers/jsonUtils esri/renderers/ClassBreaksRenderer esri/renderers/UniqueValueRenderer esri/dijit/geoenrichment/utils/ColorUtil esri/dijit/geoenrichment/utils/SymbolUtil".split(" "),function(t,g,y,u,v,m,z,A,B,n,C){var l={getHighlightSymbol:function(a){function b(c,
w){if(w){var e=z.fromJson(t.clone(w));c=e.getSymbol(c)}else c=c.symbol?c.symbol:(e=d.renderer)&&e.getSymbol(c);c=p(c.toJson())||{symbol:a.defaultHighlightSymbol};if(e instanceof B||e instanceof A)c.getSymbol=function(x){var q=e.getSymbol(x);e.getVisualVariableValues&&(q=C.prepareGraphicSymbol(q,e.getVisualVariableValues(x)).symbol);return p(q.toJson()).symbol};k.resolve(c)}function p(c){switch(c.type){case "esriSMS":return l._highlightSMS(c);case "esriPMS":return l._highlightPMS(c);case "esriSFS":return l._highlightSFS(c,
a.outlineOnly)}}var h=a.graphic,d=a.graphicsLayer,f=a.rendererJson,k=new y;if(h)b(h);else if(d&&!f)if(d.graphics.length)b(d.graphics[0]);else var r=d.on("graphic-add",function(){r.remove();b(d.graphics[0])});else f&&("uniqueValue"===f.type||"classBreaks"===f.type?d.graphics.length?b(d.graphics[0],f):r=d.on("graphic-add",function(){r.remove();b(d.graphics[0],f)}):"heatmap"===f.type?k.resolve(null):(h=t.clone(f.symbol),k.resolve(h&&p(h)||{symbol:a.defaultHighlightSymbol})));return k.promise},_highlightSMS:function(a){a.size*=
1.1;if(a.color){var b=n.getHighlightColor(new g(a.color.slice(0,3)));a.color[0]=b.r;a.color[1]=b.g;a.color[2]=b.b}return{symbol:m.fromJson(a)}},_highlightPMS:function(a){a.width*=1.1;a.height*=1.1;a.xoffset*=1.1;a.yoffset*=1.1;var b=new u(u.STYLE_SQUARE,Math.max(a.width,a.height)/.75,new v(v.STYLE_SOLID,new g([255,255,0,.7]),2),new g([0,0,0,0]));b.setOffset(a.xoffset/.75||0,a.yoffset/.75||0);return{symbol:m.fromJson(a),frameSymbol:b}},_highlightSFS:function(a,b){a.color&&!b&&(b=n.getHighlightColor(new g(a.color.slice(0,
3))),a.color[0]=b.r,a.color[1]=b.g,a.color[2]=b.b);a.outline&&a.outline.color&&(b=n.getHighlightColor(new g(a.outline.color.slice(0,3))),a.outline.color[0]=b.r,a.outline.color[1]=b.g,a.outline.color[2]=b.b);return{symbol:m.fromJson(a)}}};return l});