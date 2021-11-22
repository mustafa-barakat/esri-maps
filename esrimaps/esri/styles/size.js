// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/styles/size",["dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../Color"],function(v,w,z,A,e){function x(a,b){if(a){var c={};switch(b){case "point":c.color=new e(a.color);c.noDataColor=new e(a.noDataColor);c.outline={color:new e(a.outline.color),width:a.outline.width};c.size=a.size;c.noDataSize=a.noDataSize;c.minSize=a.minSize;c.maxSize=a.maxSize;c.opacity=a.opacity||1;break;case "line":c.color=new e(a.color);c.noDataColor=new e(a.noDataColor);c.width=a.width;c.noDataWidth=
a.noDataWidth;c.minWidth=a.minWidth;c.maxWidth=a.maxWidth;c.opacity=a.opacity||1;break;case "polygon":b=a.marker;var d=a.background;c.marker={color:new e(b.color),noDataColor:new e(b.noDataColor),outline:{color:new e(b.outline.color),width:b.outline.width},size:b.size,noDataSize:b.noDataSize,minSize:b.minSize,maxSize:b.maxSize};c.background={color:new e(d.color),outline:{color:new e(d.outline.color),width:d.outline.width}};c.opacity=a.opacity||1;delete c.marker.opacity}}return c}function q(a){if(a){var b=
w.mixin({},a);b.color&&(b.color=new e(b.color));b.noDataColor&&(b.noDataColor=new e(b.noDataColor));b.outline&&(b.outline={color:b.outline.color&&new e(b.outline.color),width:b.outline.width})}return b}function B(a){if("esriGeometryPoint"===a||"esriGeometryMultipoint"===a)a="point";else if("esriGeometryPolyline"===a)a="line";else if("esriGeometryPolygon"===a||"esriGeometryMultiPatch"===a)a="polygon";return a}var g=[128,128,128,1],l=[128,128,128,1],h={primary:{color:[227,139,79,1],noDataColor:g,outline:{color:[255,
255,255,.25],width:1},noDataSize:4,size:12,minSize:8,maxSize:50,opacity:.8},secondary:[{color:[128,128,128,1],noDataColor:g,outline:{color:[255,255,255,.25],width:1},noDataSize:4,size:12,minSize:8,maxSize:50,opacity:.8},{color:[255,255,255,1],noDataColor:g,outline:{color:[128,128,128,.25],width:1},noDataSize:4,size:12,minSize:8,maxSize:50,opacity:.8}]},k={primary:{color:[227,139,79,1],noDataColor:l,outline:{color:[92,92,92,.25],width:1},noDataSize:4,size:12,minSize:8,maxSize:50,opacity:.8},secondary:[{color:[178,
178,178,1],noDataColor:l,outline:{color:[92,92,92,.25],width:1},noDataSize:4,size:12,minSize:8,maxSize:50,opacity:.8},{color:[26,26,26,1],noDataColor:l,outline:{color:[128,128,128,.25],width:1},noDataSize:4,size:12,minSize:8,maxSize:50,opacity:.8}]},m={r:0,g:0,b:0,a:0},r={color:m,outline:{color:{r:166,g:166,b:166,a:.25},width:1}};m={color:m,outline:{color:{r:153,g:153,b:153,a:.25},width:1}};var p={"default":{name:"default",label:"Default",description:"Default theme for visualizing features by varying their size to show data.",
basemapGroups:{light:"streets gray topo terrain national-geographic oceans osm".split(" "),dark:["satellite","hybrid","dark-gray"]},pointSchemes:{light:h,dark:k},lineSchemes:{light:{primary:{color:[226,119,40,1],noDataColor:g,noDataWidth:1,width:1,minWidth:1,maxWidth:18},secondary:[{color:[77,77,77,1],noDataColor:g,noDataWidth:1,width:1,minWidth:1,maxWidth:18},{color:[153,153,153,1],noDataColor:g,noDataWidth:1,width:1,minWidth:1,maxWidth:18}]},dark:{primary:{color:[226,119,40,1],noDataColor:l,noDataWidth:1,
width:1,minWidth:1,maxWidth:18},secondary:[{color:[255,255,255,1],noDataColor:l,noDataWidth:1,width:1,minWidth:1,maxWidth:18},{color:[153,153,153,1],noDataColor:l,noDataWidth:1,width:1,minWidth:1,maxWidth:18}]}},polygonSchemes:{light:{primary:{marker:h.primary,background:m,opacity:h.primary.opacity},secondary:[{marker:h.secondary[0],background:m,opacity:h.secondary[0].opacity},{marker:h.secondary[1],background:m,opacity:h.secondary[1].opacity}]},dark:{primary:{marker:k.primary,background:r,opacity:k.primary.opacity},
secondary:[{marker:k.secondary[0],background:r,opacity:k.secondary[0].opacity},{marker:k.secondary[1],background:r,opacity:k.secondary[1].opacity}]}}}},t={};(function(){var a,b,c;for(a in p){var d=p[a];var f=d.basemapGroups;var n=t[a]={basemaps:[].concat(f.light).concat(f.dark),point:{},line:{},polygon:{}};for(b in f){var y=f[b];for(c=0;c<y.length;c++){var u=y[c];d.pointSchemes&&(n.point[u]=d.pointSchemes[b]);d.lineSchemes&&(n.line[u]=d.lineSchemes[b]);d.polygonSchemes&&(n.polygon[u]=d.polygonSchemes[b])}}}})();
g={getAvailableThemes:function(a){var b=[],c;for(c in p){var d=p[c];var f=t[c];a&&-1===v.indexOf(f.basemaps,a)||b.push({name:d.name,label:d.label,description:d.description,basemaps:f.basemaps.slice(0)})}return b},getSchemes:function(a){var b=a.theme,c=a.basemap,d=B(a.geometryType);a=t[b];var f;(a=(a=a&&a[d])&&a[c])&&(f={primaryScheme:x(a.primary,d),secondarySchemes:v.map(a.secondary,function(n){return x(n,d)})});return f},cloneScheme:function(a){if(a){var b=q(a);b.marker&&(b.marker=q(b.marker));b.background&&
(b.background=q(b.background))}return b}};z("extend-esri")&&w.setObject("styles.size",g,A);return g});