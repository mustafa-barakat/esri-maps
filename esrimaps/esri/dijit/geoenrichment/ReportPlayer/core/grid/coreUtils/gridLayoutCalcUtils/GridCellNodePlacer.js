// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/gridLayoutCalcUtils/GridCellNodePlacer",["./rows/GridLayoutRowsCalculator","./columns/GridLayoutColumnsCalculator"],function(r,t){return{positionCells:function(a){var p={},q={},e={},f={};if(a.rows.length){a.rows.forEach(function(b,g){a.columns.forEach(function(h,k){var m=e[k]||0,n=f[g]||0,u=r.getDataHeight(a,b,h.field);h=t.getFieldWidth(a,b,h.field);m+=u;n+=h;q[k+"_"+g]=m;p[k+"_"+g]=n;e[k]=m;f[g]=n})});a.getCells().forEach(function(b){b.domNode.style.left=
(p[b.column.index-1+"_"+b.row.index]||0)+"px";b.domNode.style.top=(q[b.column.index+"_"+(b.row.index-1)]||0)+"px"});var c=0,l;for(l in e)c=Math.max(c,e[l]);var d=0;for(l in f)d=Math.max(d,f[l]);a.mainNode.style.width=d+"px";a.mainNode.style.height=c+"px";a.domNode.style.width=d+"px";a.domNode.style.height=c+"px";a._width=d;a._height=c}}}});