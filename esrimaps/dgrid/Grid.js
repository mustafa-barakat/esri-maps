//>>built
define("dgrid/Grid","dojo/_base/kernel dojo/_base/declare dojo/on dojo/has put-selector/put ./List ./util/misc dojo/_base/sniff".split(" "),function(y,q,z,m,g,D,r){function v(a,b){b&&b.nodeType&&a.appendChild(b)}function A(a,b,d,e){if(this.formatter){e=this.formatter;var c=this.grid.formatterScope;d.innerHTML="string"===typeof e&&c?c[e](b,a):this.formatter(b,a)}else null!=b&&d.appendChild(document.createTextNode(b))}var B=8>m("ie")&&!m("quirks");q=q("dgrid.Grid",D,{columns:null,cellNavigation:!0,
tabableHeader:!0,showHeader:!0,column:function(a){return"object"!=typeof a?this.columns[a]:this.cell(a).column},listType:"grid",cell:function(a,b){if(a.column&&a.element)return a;a.target&&a.target.nodeType&&(a=a.target);if(a.nodeType){do{if(this._rowIdToObject[a.id])break;var d=a.columnId;if(d){b=d;var e=a;break}a=a.parentNode}while(a&&a!=this.domNode)}if(!e&&"undefined"!=typeof b){var c=this.row(a);if(d=c&&c.element){d=d.getElementsByTagName("td");for(var f=0;f<d.length;f++)if(d[f].columnId==b){e=
d[f];break}}}if(null!=a)return{row:c||this.row(a),column:b&&this.column(b),element:e}},createRowCells:function(a,b,d,e){var c=g("table.dgrid-row-table[role\x3dpresentation]"),f=9>m("ie")||m("quirks")?g(c,"tbody"):c,h,t,p;d=d||this.subRows;var w=0;for(h=d.length;w<h;w++){var u=d[w];var C=g(f,"tr");u.className&&g(C,"."+u.className);var x=0;for(t=u.length;x<t;x++){var l=u[x];var n=l.id;var k=l.field?".field-"+r.escapeCssIdentifier(l.field,"-"):"";(p="function"===typeof l.className?l.className(e):l.className)&&
(k+="."+p);k=g(a+(".dgrid-cell.dgrid-cell-padding"+(n?".dgrid-column-"+r.escapeCssIdentifier(n,"-"):"")+k.replace(/ +/g,"."))+"[role\x3d"+("th"===a?"columnheader":"gridcell")+"]");k.columnId=n;B?(n=g(k,"!dgrid-cell-padding div.dgrid-cell-padding"),k.contents=n):n=k;if(p=l.colSpan)k.colSpan=p;if(p=l.rowSpan)k.rowSpan=p;b(n,l);C.appendChild(k)}}return c},left:function(a,b){a.element||(a=this.cell(a));return this.cell(this._move(a,-(b||1),"dgrid-cell"))},right:function(a,b){a.element||(a=this.cell(a));
return this.cell(this._move(a,b||1,"dgrid-cell"))},renderRow:function(a,b){var d=this.createRowCells("td",function(e,c){var f=a;c.get?f=c.get(a):"field"in c&&"_item"!=c.field&&(f=f[c.field]);c.renderCell?v(e,c.renderCell(a,f,e,b)):A.call(c,a,f,e,b)},b&&b.subRows,a);return g("div[role\x3drow]\x3e",d)},renderHeader:function(){var a=this,b=this.headerNode,d=b.childNodes.length;for(b.setAttribute("role","row");d--;)g(b.childNodes[d],"!");d=this.createRowCells("th",function(e,c){var f=c.headerNode=e;B&&
(e=e.parentNode);var h=c.field;h&&(e.field=h);c.renderHeaderCell?v(f,c.renderHeaderCell(f)):("label"in c||c.field)&&f.appendChild(document.createTextNode("label"in c?c.label:c.field));!1!==c.sortable&&h&&"_item"!=h&&(e.sortable=!0,e.className+=" dgrid-sortable")},this.subRows&&this.subRows.headerRows);this._rowIdToObject[d.id=this.id+"-header"]=this.columns;b.appendChild(d);this._sortListener&&this._sortListener.remove();this._sortListener=z(d,"click,keydown",function(e){if("click"==e.type||32==e.keyCode||
!m("opera")&&13==e.keyCode){var c=e.target,f,h;do if(c.sortable){var t=[{attribute:f=c.field||c.columnId,descending:(h=a._sort[0])&&h.attribute==f&&!h.descending}];f={bubbles:!0,cancelable:!0,grid:a,parentType:e.type,sort:t};z.emit(e.target,"dgrid-sort",f)&&(a._sortNode=c,a.set("sort",t));break}while((c=c.parentNode)&&c!=b)}})},resize:function(){var a=this.headerNode.firstChild,b=this.contentNode,d;this.inherited(arguments);if(!m("ie")||7<m("ie")&&!m("quirks"))b.style.width="",b&&a&&(d=a.offsetWidth)!=
b.offsetWidth&&(b.style.width=d+"px")},destroy:function(){this._destroyColumns();this._sortListener&&this._sortListener.remove();this.inherited(arguments)},_setSort:function(a,b){this.inherited(arguments);this.updateSortArrow(this._sort)},_findSortArrowParent:function(a){var b=this.columns,d;for(d in b){var e=b[d];if(e.field==a)return e.headerNode}},updateSortArrow:function(a,b){this._lastSortedArrow&&(g(this._lastSortedArrow,"\x3c!dgrid-sort-up!dgrid-sort-down"),g(this._lastSortedArrow,"!"),delete this._lastSortedArrow);
b&&(this._sort=a);if(a[0]&&(b=a[0].attribute,a=a[0].descending,b=this._sortNode||this._findSortArrowParent(b),delete this._sortNode,b)){b=b.contents||b;var d=this._lastSortedArrow=g("div.dgrid-sort-arrow.ui-icon[role\x3dpresentation]");d.innerHTML="\x26nbsp;";b.insertBefore(d,b.firstChild);g(b,a?".dgrid-sort-down":".dgrid-sort-up");this.resize()}},styleColumn:function(a,b){return this.addCssRule("#"+r.escapeCssIdentifier(this.domNode.id)+" .dgrid-column-"+r.escapeCssIdentifier(a,"-"),b)},_configColumns:function(a,
b){var d=[],e=b instanceof Array;r.each(b,function(c,f){"string"==typeof c&&(b[f]=c={label:c});e||c.field||(c.field=f);f=c.id=c.id||(isNaN(f)?f:a+f);this._configColumn&&(this._configColumn(c,f,b,a),f=c.id);e&&(this.columns[f]=c);c.grid=this;"function"===typeof c.init&&c.init();d.push(c)},this);return e?b:d},_destroyColumns:function(){var a=this.subRows,b=a&&a.length,d,e;this.cleanup();for(d=0;d<b;d++){var c=0;for(e=a[d].length;c<e;c++){var f=a[d][c];"function"===typeof f.destroy&&f.destroy()}}},configStructure:function(){var a=
this.subRows,b=this._columns=this.columns;this.columns=!b||b instanceof Array?{}:b;if(a)for(b=0;b<a.length;b++)a[b]=this._configColumns(b+"-",a[b]);else this.subRows=[this._configColumns("",b)]},_getColumns:function(){return this._columns||this.columns},_setColumns:function(a){this._destroyColumns();this.subRows=null;this.columns=a;this._updateColumns()},_setSubRows:function(a){this._destroyColumns();this.subRows=a;this._updateColumns()},setColumns:function(a){y.deprecated("setColumns(...)",'use set("columns", ...) instead',
"dgrid 0.4");this.set("columns",a)},setSubRows:function(a){y.deprecated("setSubRows(...)",'use set("subRows", ...) instead',"dgrid 0.4");this.set("subRows",a)},_updateColumns:function(){this.configStructure();this.renderHeader();this.refresh();this._lastCollection&&this.renderArray(this._lastCollection);this._started&&(this._sort&&this._sort.length?this.updateSortArrow(this._sort):this.resize())}});q.appendIfNode=v;q.defaultRenderCell=A;return q});