// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/gridLayoutCalcUtils/columns/ColumnsProcessor",["dojox/uuid/generateRandomUuid","./ColumnDataUtil"],function(z,k){function A(b){b._dynamicBindings={};if(b.getNumDynamicColumns()){for(var c=b.getNumDynamicColumns(),t=b.getNumFixedColumns(),d=0;d<t;d++)b.columns[d].isFixed=!0;d=[];for(var p=0;p<c;p++){for(var m=t,q=[];m<b.columns.length;){var n=b.columns[m+p];n.isDynamic=!0;q.push(n);m+=c}d.push(q)}d.forEach(function(l){l.forEach(function(g){b._dynamicBindings[g.field]=
l})})}}var y={recalcColumns:function(b,c){var t=c&&c.resetWidth,d=c&&c.columnsToPreserve,p=c&&c.stickToRight,m=c&&c.newWidth,q=c&&c.rightOffsetWeight;c=c&&c._isJson;var n={},l=0;b.columns.every(function(a,e){if(!a.style||!a.style.width||isNaN(a.style.width)||"number"!==typeof a.style.width)return l=0,!1;l+=a.style.width;n[e]=a.style.width;return!0});var g=m?m:p?b.getAllowedWidth():l?Math.min(l,b._width):b._width;g-=0<q?g*q:0;var u=g/b.columns.length,r=g;if(d){var B=d.length*u,v=0;d.forEach(function(a){v+=
a.style.width});d.forEach(function(a){a.style.width=B/v*a.style.width/r*100+"%"})}b.columns.forEach(function(a,e,h){a.index=e;a.style=a.style||{};if("number"!==typeof a.style.width||t)if(e===h.length-1)a.style.width=r;else{var f=a.style.width;"string"===typeof f&&-1!==f.indexOf("%")?a.style.width=parseFloat(f.substr(0,f.length-1))/100*g:a.style.width=u}r-=a.style.width;e===h.length-1&&0>r&&(a.style.width+=r);void 0===a.id&&(a.id=z())});if(b.looseResize){b.columns.some(function(a,e){var h=n[e]?a.style.width/
n[e]:void 0;b.rows.forEach(function(f){var w=k.getFieldWidthOwn(b,f,a.field);w?h&&1!==h&&k.setFieldWidth(b,f,a.field,w*h):k.setFieldWidth(b,f,a.field,a.style.width)})});var x=b.columns[b.columns.length-1].field;b.rows.forEach(function(a){var e=0;b.columns.some(function(f){e+=k.getFieldWidthOwn(b,a,f.field)});var h=g-e;0!==h&&k.setFieldWidth(b,a,x,k.getFieldWidthOwn(b,a,x)+h)})}c||(A(b),k.recalcGridWidth(b));return g},recalcColumnsTableJson:function(b){y.recalcColumns(b,{resetWidth:!0,newWidth:b.style.width,
_isJson:!0})}};return y});