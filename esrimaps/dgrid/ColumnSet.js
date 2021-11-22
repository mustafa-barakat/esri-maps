//>>built
define("dgrid/ColumnSet","dojo/_base/kernel dojo/_base/declare dojo/_base/lang dojo/_base/Deferred dojo/on dojo/aspect dojo/query dojo/has ./util/misc put-selector/put xstyle/has-class ./Grid dojo/_base/sniff xstyle/css!./css/columnset.css".split(" "),function(B,C,D,E,q,x,n,g,y,l,F,K){function z(a,b){function c(){n(".dgrid-column-set",b).forEach(function(e){e.scrollLeft=d[e.getAttribute("data-dgrid-column-set-id")]})}var d=a._columnSetScrollLefts;8>g("ie")||g("quirks")?setTimeout(c,1):c()}g.add("event-mousewheel",
function(a,b,c){return"onmousewheel"in c});g.add("event-wheel",function(a,b,c){return"onwheel"in c});F("safari","ie-7");var G=g("event-mousewheel")||g("event-wheel")?function(a){return function(b,c){return q(b,g("event-mousewheel")?"mousewheel":"wheel",function(d){var e=d.target;1!==e.nodeType&&(e=e.parentNode);for(;!n.matches(e,".dgrid-column-set[data-dgrid-column-set-id]",b);)if(e===b||!(e=e.parentNode))return;(d=d.deltaX||-d.wheelDeltaX/3)&&c.call(null,a,e,d)})}}:function(a){return function(b,
c){return q(b,".dgrid-column-set[data-dgrid-column-set-id]:MozMousePixelScroll",function(d){1===d.axis&&c.call(null,a,this,d.detail)})}};return C("dgrid.ColumnSet",null,{postCreate:function(){var a=this;this.inherited(arguments);this.on(G(this),function(b,c,d){c=c.getAttribute("data-dgrid-column-set-id");b=b._columnSetScrollers[c];d=b.scrollLeft+d;b.scrollLeft=0>d?0:d});this.on(".dgrid-column-set:dgrid-cellfocusin",function(b){a._onColumnSetCellFocus(b,this)})},columnSets:[],createRowCells:function(a,
b,c,d){for(var e=l("table.dgrid-row-table"),k=l(e,"tbody tr"),f=0,h=this.columnSets.length;f<h;f++){var p=l(k,a+".dgrid-column-set-cell.dgrid-column-set-"+f+" div.dgrid-column-set[data-dgrid-column-set-id\x3d"+f+"]"),m;if((m=c||this.subRows)&&m.length){for(var A=[],H=f+"-",r=0,I=m.length;r<I;r++){var t=m[r],u=[];u.className=t.className;for(var v=0,J=t.length;v<J;v++){var w=t[v];null!=w.id&&0===w.id.indexOf(H)&&u.push(w)}A.push(u)}m=A}else m=void 0;p.appendChild(this.inherited(arguments,[a,b,m||this.columnSets[f],
d]))}return e},renderArray:function(){var a=this,b=this.inherited(arguments);E.when(b,function(c){for(var d=0;d<c.length;d++)z(a,c[d])});return b},insertRow:function(){var a=this.inherited(arguments);z(this,a);return a},renderHeader:function(){function a(){d._positionScrollers()}this.inherited(arguments);var b=this.columnSets,c=this._columnSetScrollers;this._columnSetScrollerContents={};this._columnSetScrollLefts={};var d=this;if(c)for(e in c)l(c[e],"!");else x.after(this,"resize",a,!0),x.after(this,
"styleColumn",a,!0),this._columnSetScrollerNode=l(this.footerNode,"+div.dgrid-column-set-scroller-container");c=this._columnSetScrollers={};var e=0;for(c=b.length;e<c;e++)this._putScroller(b[e],e);this._positionScrollers()},styleColumnSet:function(a,b){a=this.addCssRule("#"+y.escapeCssIdentifier(this.domNode.id)+" .dgrid-column-set-"+y.escapeCssIdentifier(a,"-"),b);this._positionScrollers();return a},_destroyColumns:function(){var a=this.columnSets.length,b,c,d;for(b=0;b<a;b++){var e=this.columnSets[b];
var k=0;for(c=e.length;k<c;k++){var f=e[k];var h=0;for(d=f.length;h<d;h++){var p=f[h];"function"===typeof p.destroy&&p.destroy()}}}this.inherited(arguments)},configStructure:function(){this.columns={};this.subRows=[];for(var a=0,b=this.columnSets.length;a<b;a++)for(var c=this.columnSets[a],d=0;d<c.length;d++)c[d]=this._configColumns(a+"-"+d+"-",c[d]);this.inherited(arguments)},_positionScrollers:function(){var a=this.domNode,b=this._columnSetScrollers,c=this._columnSetScrollerContents,d=this.columnSets,
e=0,k=0;var f=0;for(d=d.length;f<d;f++){var h=n('.dgrid-column-set[data-dgrid-column-set-id\x3d"'+f+'"]',a)[0];e=h.offsetWidth;h=h.firstChild.offsetWidth;c[f].style.width=h+"px";b[f].style.width=e+"px";9>g("ie")&&(b[f].style.overflowX=h>e?"scroll":"auto");h>e&&k++}this._columnSetScrollerNode.style.bottom=this.showFooter?this.footerNode.offsetHeight+"px":"0";this.bodyNode.style.bottom=k?g("dom-scrollbar-height")+(g("ie")?1:0)+"px":"0"},_putScroller:function(a,b){a=this._columnSetScrollers[b]=l(this._columnSetScrollerNode,
"span"+(9>g("ie")||g("ff")?".dgrid-scrollbar-height":"")+".dgrid-column-set-scroller.dgrid-column-set-scroller-"+b+"[data-dgrid-column-set-id\x3d"+b+"]");this._columnSetScrollerContents[b]=l(a,"div.dgrid-column-set-scroller-content");this._listeners.push(q(a,"scroll",D.hitch(this,"_onColumnSetScroll")))},_onColumnSetScroll:function(a){var b=a.target.scrollLeft;a=a.target.getAttribute("data-dgrid-column-set-id");var c;this._columnSetScrollLefts[a]!=b&&(n('.dgrid-column-set[data-dgrid-column-set-id\x3d"'+
a+'"],.dgrid-column-set-scroller[data-dgrid-column-set-id\x3d"'+a+'"]',this.domNode).forEach(function(d,e){d.scrollLeft=b;e||(c=d.scrollLeft)}),this._columnSetScrollLefts[a]=c)},_setColumnSets:function(a){this._destroyColumns();this.columnSets=a;this._updateColumns()},setColumnSets:function(a){B.deprecated("setColumnSets(...)",'use set("columnSets", ...) instead',"dgrid 0.4");this.set("columnSets",a)},_scrollColumnSet:function(a,b){a=a.tagName?a.getAttribute("data-dgrid-column-set-id"):a;this._columnSetScrollers[a].scrollLeft=
0>b?0:b},_onColumnSetCellFocus:function(a,b){a=a.target;var c=b.getAttribute("data-dgrid-column-set-id");c=this._columnSetScrollers[c];(a.offsetLeft-c.scrollLeft+a.offsetWidth>b.offsetWidth||c.scrollLeft>a.offsetLeft)&&this._scrollColumnSet(b,a.offsetLeft)}})});