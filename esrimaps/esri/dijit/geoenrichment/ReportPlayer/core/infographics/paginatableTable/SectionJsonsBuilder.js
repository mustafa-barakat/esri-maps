// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/paginatableTable/SectionJsonsBuilder","dojo/_base/lang ../../sections/SectionTypes ../../grid/coreUtils/GridDataUtil ../../supportClasses/tableJson/TableJsonResizeUtil ../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoFormatUtil esri/dijit/geoenrichment/utils/DateUtil esri/dijit/geoenrichment/utils/FieldUtil".split(" "),function(u,G,y,A,H,I,B){function C(a,b){return B.isNumericField(a)&&"number"===typeof b&&!isNaN(b)}var g={buildSectionJsonsAndStat:function(a){var b=
g._collectGridDataObjectsAndStats(a);if(!b)return null;if(b.rowObjects.length)var c=g._splitRowsByPages(b.rowObjects,a).map(function(m){return g._buildSectionJsonForPage(m,a)});return{sectionJsons:c,stats:b.stats,unitedSectionJson:g._buildSectionJsonForPage(b.rowObjects,a)}},buildStats:function(a){return(a=g._collectGridDataObjectsAndStats(a,!0))&&a.stats},_collectGridDataObjectsAndStats:function(a,b){var c=a.calculatorDataArray,m=a.searchTextRe;if(!c||!c.length)if(a.allowNoResults)c=[];else return null;
var n=a.dataSectionJson.stack[0],p=n.rows[0],r=n.rows[1],h={numAttributesTotal:0,numAttributesShown:0,ranges:{}};if(a.filterRanges){var v={};a.filterRanges.forEach(function(d){v[d.fieldName]=d})}for(var J in p.fieldInfos){var w=p.fieldInfos[J];B.isNumericField(w)&&(h.ranges[w.name]={fieldName:w.name,alias:w.alias,min:Infinity,max:-Infinity,sumTotal:0,sumShown:0,decimals:w.decimals,dataArray:[]})}var x=[];c.forEach(function(d,q){var l={style:null,fieldInfos:{}};h.numAttributesTotal++;var D=!1,E=!1,
F=!1;n.columns.forEach(function(k){var f=p.fieldInfos[k.field],e=d[f.name];if(C(f,e)){var t=h.ranges[f.name];t.min=Math.min(t.min,e);t.max=Math.max(t.max,e);t.dataArray.push(e)}(t="esriFieldTypeDate"===f.type)?l[k.field]=e&&!isNaN(Number(e))?I.formatDateShort(Number(e)):"":void 0===e||"string"===typeof e?l[k.field]=e||"":(l[k.field]=H.formatNumber(e,f),y.setNumericDataValue(e,l,k.field));l.__attributeIndex=q;(k=v&&v[f.name])&&(e<k.min||e>k.max)&&(D=!0);m&&"string"===typeof e&&!t&&(E=!0,m.test(e)&&
(F=!0))});var z=D||E&&!F;z||b||(x.push(l),h.numAttributesShown++);n.columns.forEach(function(k){var f=p.fieldInfos[k.field];k=d[f.name];C(f,k)&&(f=h.ranges[f.name],f.sumTotal+=k,z||(f.sumShown+=k))});a.setAttributeVisibleAt&&a.setAttributeVisibleAt(q,!z)});a.sorting&&x.sort(function(d,q){var l=y.getNumericDataValue(d,a.sorting.field);l=void 0!==l?l:d[a.sorting.field];d=y.getNumericDataValue(q,a.sorting.field);d=void 0!==d?d:q[a.sorting.field];q="number"===typeof l?l-d:l.localeCompare(d);return"desc"===
a.sorting.order?-q:q});x.forEach(function(d,q){d.style=u.clone((0!==q%2?r||p:p).style);d.style.height=p.style.height});h.ranges=Object.keys(h.ranges).map(function(d){return h.ranges[d]});return{stats:h,rowObjects:x}},getAttributeIndexForGridData:function(a){return a.__attributeIndex},_splitRowsByPages:function(a,b){var c=g._getHeaderHeight(b),m=g._getDataRowHeight(b),n=g._getDataListHeight(a,b),p=[],r,h=0;a.forEach(function(v){r||(r=[],p.push(r),h+=c);r.push(v);h+=m;h+m>n&&(r=null,h=0)});return p},
_getHeaderHeight:function(a){return a.scaleToFitHeight?a.minRowHeight:a.headerSectionJson?a.headerSectionJson.stack[0].rows[0].style.height:0},_getDataRowHeight:function(a){return a.scaleToFitHeight?a.minRowHeight:a.dataSectionJson.stack[0].rows[0].style.height},_getDataListHeight:function(a,b){var c=g._getHeaderHeight(b),m=g._getDataRowHeight(b),n=b.height-(b.hasFooter?b.footerHeight:0)-(b.hasTitle?b.titleHeight:0);b=b.height-b.footerHeight-(b.hasTitle?b.titleHeight:0);return c+m*a.length<=n?n:b},
_buildSectionJsonForPage:function(a,b){if(b.headerSectionJson){var c=b.headerSectionJson.stack[0];c={id:"table",attributes:{},style:{width:b.width},columns:u.clone(c.columns),rows:[u.clone(c.rows[0])].concat(u.clone(a))}}else c={id:"table",attributes:{},style:{width:b.width},columns:u.clone(b.dataSectionJson.stack[0].columns),rows:u.clone(a)};c.rows.forEach(function(m,n){m.style.height=0===n&&b.headerSectionJson?g._getHeaderHeight(b):g._getDataRowHeight(b)});b.scaleToFitHeight&&(a=g._getDataListHeight(a,
b),A.resizeTableJsonToFitHeight(c,a));A.resizeTableJsonToFitWidth(c,b.width);return{type:G.DETAILS,stack:[c]}}};return g});