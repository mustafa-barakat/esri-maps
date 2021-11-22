// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/tableViewRendering/TableViewRenderer","dojo/_base/declare dojo/_base/lang dijit/Destroyable esri/dijit/geoenrichment/utils/ColorUtil esri/dijit/geoenrichment/ReportPlayer/config ../../supportClasses/tableJson/TableJsonUtil esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes ../../sections/sectionUtils/SectionJsonUtil ../utils/builder/utils/ChartDataUtil ../utils/ChartTypes ../../grid/coreUtils/GridDataUtil dojo/i18n!esri/nls/jsapi".split(" "),
function(L,F,M,z,N,O,P,Q,G,R,H,m){m=m.geoenrichment.dijit.ReportPlayer.ChartContainer;var S=/_P$/i,V={buildSectionJsonFromSeriesItems:function(b,w,e,k,r,f,g,n){function p(c,a,h){var d=(a=(c=e[c-1]&&e[c-1].data[a-1])||T)&&a.point.fieldInfo&&S.test(a.point.fieldInfo.name);if(c&&c.isUnavailableData){a=0;var l=N.tables.showUnavailableData?m.unavailableDataShort:""}a=void 0!==h?h:c&&c.originalValue;l=void 0!==l?l:void 0!==a?G.formatNumber(a,k,d):"";c&&l&&c.isBenchmarked&&!c.isUnavailableData&&(l=G.formatNumber(c.unbenchmarkedValue,
k,d)+" ("+(0<a?"+":"")+l+")");return{dataPoint:c,value:a||0,formattedValue:l||""}}e=e.map(function(c){c=F.mixin({},c);c.data=c.data.slice();c.data.sort(function(a,h){return a.unsortedIndex-h.unsortedIndex});return c});if(w&&R.isColumnBarLike(b)){var I=[];e[0].data.forEach(function(c,a){I.push({name:c.name,data:e.map(function(h){return F.mixin({},h.data[a],{name:h.name})})})});e=I}var A=-1,B=-1,C=-1,D=-1,q=e[0].data.length+1;b=q;n.showTotalsBelow&&(A=q++);n.showAvgBelow&&(B=q++);var x=e.length+1,E=
x;n.showTotalsAfter&&(C=x++);n.showAvgAfter&&(D=x++);var U=g/q-2,t=O.createTable({numColumns:x,numRows:q,width:f,height:g,processTableCell:function(c,a){c.style.fields[a].verticalAlign="middle";c.style.fields[a].horizontalPadding=5;c.style.fields[a].fontSize=Math.round(Math.min(U,15-4*q/50))}}),T=e[0]&&e[0].data[0],y={},u={},J={},v={},K={};t.rows.forEach(function(c,a){t.columns.forEach(function(h,d){y[a+";"+d]=p(d,a)})});for(f=0;f<b;f++){for(g=v[f]=0;g<E;g++)v[f]+=y[f+";"+g].value;K[f]=v[f]/(E-1)}for(g=
0;g<E;g++){for(f=u[g]=0;f<b;f++)u[g]+=y[f+";"+g].value;J[g]=u[g]/(b-1)}t.rows.forEach(function(c,a){t.columns.forEach(function(h,d){if(0===a)c[h.field]=0===d?k.xAxis&&k.xAxis.title||"":1===d?r?w||2<e.length?e[d-1].name||"":m.thisArea:1<e.length?e[d-1].name||"":k.yAxis&&k.yAxis.title||"":d===C?m.total:d===D?m.average:e[d-1].name||"";else if(0===d)h=h.field,d=0!==a?a===A?m.total:a===B?m.average:e[0].data[a-1].name||"":void 0,c[h]=d;else{if(d===C)d=p(d,a,v[a]);else if(d===D)d=p(d,a,K[a]);else if(a===
A)d=p(d,a,u[d]);else if(a===B)d=p(d,a,J[d]);else if(d=y[a+";"+d],k.conditionalStyling&&d.dataPoint.fill){var l=c.style.fields[h.field]=c.style.fields[h.field]||{};l.overrideStyle=void 0;l.backgroundColor=z.toCSSColor(d.dataPoint.fill);l.color=z.toCSSColor(z.getContrastColor(l.backgroundColor))}H.setNumericDataValue(d.value,c,h.field);c[h.field]=d.formattedValue}})});return{sectionJson:Q.wrapInDetailsSectionJson(t),numberFormatFunction:function(c,a){return p(a.column.index,a.row.index,c).formattedValue}}}};
return L(M,{_tableSection:null,_sorting:null,renderTableForChart:function(b){var w=this;this._destroyTable();if(b.chartSeries&&b.chartSeries.length){var e={"class":"chartContainer_tableSection"};e.initialWidth=b.width;e.initialHeight=b.height;var k=V.buildSectionJsonFromSeriesItems(b.chartType,b.isMultiFeatureChart,b.chartSeries,b.visualProperties,b.hasComparison,b.width,b.height,b.tableViewInfo);e.json=k.sectionJson;var r=b.viewModel.getDocumentDefaultStyles(b.theme);r.backgroundImage&&r.backgroundImage.data&&
(e.json.style={backgroundColor:r.backgroundColor});b.showAnimation||(k.numberFormatFunction=null);e.viewModel=b.viewModel;e.theme=b.theme;e.tableClass="chartContainerChartTable";e.parentWidget=b.parentWidget;e.initialViewMode=this._viewMode||P.PREVIEW_VALUES;e.tableParams={enableNumberAnimation:b.showAnimation,_postCreateFieldCell:function(f){if(k.numberFormatFunction){var g=k.numberFormatFunction;f.setNumberValue(H.getNumericCellValue(f),function(n){return g(n,f)},!0);setTimeout(function(){k.numberFormatFunction=
null})}},onSortingChanged:function(f){w._sorting=f}};this._tableSection=b.viewModel.layoutBuilder.createElement("section",e,b.tableNode);this._tableSection.getTrueTables()[0].setSorting(this._sorting)}},_viewMode:null,setViewMode:function(b){this._viewMode!==b&&(this._viewMode=b,this._tableSection&&this._tableSection.setViewMode(b))},getVisualState:function(){return{type:"tableViewRenderer",tableSection:this._tableSection&&this._tableSection.getVisualState()}},setVisualState:function(b){return b&&
b.tableSection&&this._tableSection&&this._tableSection.setVisualState(b.tableSection)},destroyTable:function(){this._destroyTable()},_destroyTable:function(){this._tableSection&&this._tableSection.destroy();this._tableSection=null},destroy:function(){this._destroyTable();this.inherited(arguments)}})});