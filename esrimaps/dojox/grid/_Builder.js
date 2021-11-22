//>>built
define("dojox/grid/_Builder","../main dojo/_base/array dojo/_base/lang dojo/_base/window dojo/_base/event dojo/_base/sniff dojo/_base/connect dojo/dnd/Moveable dojox/html/metrics ./util dojo/_base/html dojo/dom-geometry".split(" "),function(w,y,n,p,z,q,C,D,E,u,h,F){var r=w.grid,G=function(a){return 0<=a.rowIndex?a.rowIndex:y.indexOf(a.parentNode.childNodes,a)},H=function(a,b){return a&&((a.rows||0)[b]||a.childNodes[b])},A=function(a){for(;a&&"TABLE"!=a.tagName;a=a.parentNode);return a},I=function(a){var b=
a.toUpperCase();return function(c){return c.tagName!=b}},B=u.rowIndexTag,v=u.gridViewTag,t=r._Builder=n.extend(function(a){a&&(this.view=a,this.grid=a.grid)},{view:null,_table:'\x3ctable class\x3d"dojoxGridRowTable" border\x3d"0" cellspacing\x3d"0" cellpadding\x3d"0" role\x3d"presentation"',getTableArray:function(){var a=[this._table];this.view.viewWidth&&a.push([' style\x3d"width:',this.view.viewWidth,';"'].join(""));a.push("\x3e");return a},generateCellMarkup:function(a,b,c,f){var e=[];if(f){var d=
a.index!=a.grid.getSortIndex()?"":0<a.grid.sortInfo?'aria-sort\x3d"ascending"':'aria-sort\x3d"descending"';a.id||(a.id=this.grid.id+"Hdr"+a.index);d=['\x3cth tabIndex\x3d"-1" aria-readonly\x3d"true" role\x3d"columnheader"',d,' id\x3d"',a.id,'"']}else d=['\x3ctd tabIndex\x3d"-1" role\x3d"gridcell"',this.grid.editable&&!a.editable?'aria-readonly\x3d"true"':""];a.colSpan&&d.push(' colspan\x3d"',a.colSpan,'"');a.rowSpan&&d.push(' rowspan\x3d"',a.rowSpan,'"');d.push(' class\x3d"dojoxGridCell ');a.classes&&
d.push(a.classes," ");c&&d.push(c," ");e.push(d.join(""));e.push("");d=['" idx\x3d"',a.index,'" style\x3d"'];b&&";"!=b[b.length-1]&&(b+=";");d.push(a.styles,b||"",a.hidden?"display:none;":"");a.unitWidth&&d.push("width:",a.unitWidth,";");e.push(d.join(""));e.push("");d=['"'];a.attrs&&d.push(" ",a.attrs);d.push("\x3e");e.push(d.join(""));e.push("");e.push(f?"\x3c/th\x3e":"\x3c/td\x3e");return e},isCellNode:function(a){return!(!a||a==p.doc||!h.attr(a,"idx"))},getCellNodeIndex:function(a){return a?Number(h.attr(a,
"idx")):-1},getCellNode:function(a,b){for(var c=0,f;(f=H(a.firstChild,c))&&f.cells;c++)for(var e=0,d;d=f.cells[e];e++)if(this.getCellNodeIndex(d)==b)return d;return null},findCellTarget:function(a,b){for(;a&&(!this.isCellNode(a)||a.offsetParent&&v in a.offsetParent.parentNode&&a.offsetParent.parentNode[v]!=this.view.id)&&a!=b;)a=a.parentNode;return a!=b?a:null},baseDecorateEvent:function(a){a.dispatch="do"+a.type;a.grid=this.grid;a.sourceView=this.view;a.cellNode=this.findCellTarget(a.target,a.rowNode);
a.cellIndex=this.getCellNodeIndex(a.cellNode);a.cell=0<=a.cellIndex?this.grid.getCell(a.cellIndex):null},findTarget:function(a,b){for(;a&&a!=this.domNode&&(!(b in a)||v in a&&a[v]!=this.view.id);)a=a.parentNode;return a!=this.domNode?a:null},findRowTarget:function(a){return this.findTarget(a,B)},isIntraNodeEvent:function(a){try{return a.cellNode&&a.relatedTarget&&h.isDescendant(a.relatedTarget,a.cellNode)}catch(b){return!1}},isIntraRowEvent:function(a){try{var b=a.relatedTarget&&this.findRowTarget(a.relatedTarget);
return!b&&-1==a.rowIndex||b&&a.rowIndex==b.gridRowIndex}catch(c){return!1}},dispatchEvent:function(a){return a.dispatch in this?this[a.dispatch](a):!1},domouseover:function(a){a.cellNode&&a.cellNode!=this.lastOverCellNode&&(this.lastOverCellNode=a.cellNode,this.grid.onMouseOver(a));this.grid.onMouseOverRow(a)},domouseout:function(a){if(a.cellNode&&a.cellNode==this.lastOverCellNode&&!this.isIntraNodeEvent(a,this.lastOverCellNode)&&(this.lastOverCellNode=null,this.grid.onMouseOut(a),!this.isIntraRowEvent(a)))this.grid.onMouseOutRow(a)},
domousedown:function(a){if(a.cellNode)this.grid.onMouseDown(a);this.grid.onMouseDownRow(a)},_getTextDirStyle:function(a,b,c){return""}});w=r._ContentBuilder=n.extend(function(a){t.call(this,a)},t.prototype,{update:function(){this.prepareHtml()},prepareHtml:function(){for(var a=this.grid.get,b=this.view.structure.cells,c=0,f;f=b[c];c++)for(var e=0,d;d=f[e];e++)d.get=d.get||void 0==d.value&&a,d.markup=this.generateCellMarkup(d,d.cellStyles,d.cellClasses,!1),!this.grid.editable&&d.editable&&(this.grid.editable=
!0)},generateHtml:function(a,b){a=this.getTableArray();var c=this.view.structure.cells,f=this.grid.getItem(b);u.fire(this.view,"onBeforeRow",[b,c]);for(var e=0,d;d=c[e];e++)if(!d.hidden&&!d.header){a.push(d.invisible?'\x3ctr class\x3d"dojoxGridInvisible"\x3e':"\x3ctr\x3e");for(var l=0,k,g,m;k=d[l];l++){g=k.markup;var x=k.customClasses=[];m=k.customStyles=[];g[5]=k.format(b,f);g[1]=x.join(" ");g[3]=m.join(";");(x=k.textDir||this.grid.textDir)&&(g[3]+=this._getTextDirStyle(x,k,b));a.push.apply(a,g)}a.push("\x3c/tr\x3e")}a.push("\x3c/table\x3e");
return a.join("")},decorateEvent:function(a){a.rowNode=this.findRowTarget(a.target);if(!a.rowNode)return!1;a.rowIndex=a.rowNode[B];this.baseDecorateEvent(a);a.cell=this.grid.getCell(a.cellIndex);return!0}});var J=r._HeaderBuilder=n.extend(function(a){this.moveable=null;t.call(this,a)},t.prototype,{_skipBogusClicks:!1,overResizeWidth:4,minColWidth:1,update:function(){this.tableMap?this.tableMap.mapRows(this.view.structure.cells):this.tableMap=new r._TableMap(this.view.structure.cells)},generateHtml:function(a,
b){var c,f=this.getTableArray(),e=this.view.structure.cells;u.fire(this.view,"onBeforeRow",[-1,e]);for(var d=0,l;l=e[d];d++)if(!l.hidden){f.push(l.invisible?'\x3ctr class\x3d"dojoxGridInvisible"\x3e':"\x3ctr\x3e");for(var k=0,g,m;g=l[k];k++)g.customClasses=[],g.customStyles=[],this.view.simpleStructure&&(g.draggable&&(g.headerClasses?-1==g.headerClasses.indexOf("dojoDndItem")&&(g.headerClasses+=" dojoDndItem"):g.headerClasses="dojoDndItem"),g.attrs?-1==g.attrs.indexOf("dndType\x3d'gridColumn_")&&
(g.attrs+=" dndType\x3d'gridColumn_"+this.grid.id+"'"):g.attrs="dndType\x3d'gridColumn_"+this.grid.id+"'"),m=this.generateCellMarkup(g,g.headerStyles,g.headerClasses,!0),m[5]=void 0!=b?b:a(g),m[3]=g.customStyles.join(";"),(c=g.textDir||this.grid.textDir)&&(m[3]+=this._getTextDirStyle(c,g,b)),m[1]=g.customClasses.join(" "),f.push(m.join(""));f.push("\x3c/tr\x3e")}f.push("\x3c/table\x3e");return f.join("")},getCellX:function(a){var b=I("th");for(var c=a.target;c&&b(c);c=c.parentNode);(b=c)?(b=F.position(b),
a=a.clientX-b.x):a=a.layerX;return a},decorateEvent:function(a){this.baseDecorateEvent(a);a.rowIndex=-1;a.cellX=this.getCellX(a);return!0},prepareResize:function(a,b){do{var c=a.cellIndex;a.cellNode=c?a.cellNode.parentNode.cells[c+b]:null;a.cellIndex=a.cellNode?this.getCellNodeIndex(a.cellNode):-1}while(a.cellNode&&"none"==a.cellNode.style.display);return!!a.cellNode},canResize:function(a){if(!a.cellNode||1<a.cellNode.colSpan)return!1;a=this.grid.getCell(a.cellIndex);return!a.noresize&&a.canResize()},
overLeftResizeArea:function(a){if(h.hasClass(p.body(),"dojoDndMove"))return!1;if(q("ie")){var b=a.target;if(h.hasClass(b,"dojoxGridArrowButtonNode")||h.hasClass(b,"dojoxGridArrowButtonChar")||h.hasClass(b,"dojoxGridColCaption"))return!1}return this.grid.isLeftToRight()?0<a.cellIndex&&0<a.cellX&&a.cellX<this.overResizeWidth&&this.prepareResize(a,-1):a.cellNode&&0<a.cellX&&a.cellX<this.overResizeWidth},overRightResizeArea:function(a){if(h.hasClass(p.body(),"dojoDndMove"))return!1;if(q("ie")){var b=
a.target;if(h.hasClass(b,"dojoxGridArrowButtonNode")||h.hasClass(b,"dojoxGridArrowButtonChar")||h.hasClass(b,"dojoxGridColCaption"))return!1}return this.grid.isLeftToRight()?a.cellNode&&a.cellX>=a.cellNode.offsetWidth-this.overResizeWidth:0<a.cellIndex&&a.cellX>=a.cellNode.offsetWidth-this.overResizeWidth&&this.prepareResize(a,-1)},domousemove:function(a){if(!this.moveable){var b=this.overRightResizeArea(a)?"dojoxGridColResize":this.overLeftResizeArea(a)?"dojoxGridColResize":"";b&&!this.canResize(a)&&
(b="dojoxGridColNoResize");h.toggleClass(a.sourceView.headerNode,"dojoxGridColNoResize","dojoxGridColNoResize"==b);h.toggleClass(a.sourceView.headerNode,"dojoxGridColResize","dojoxGridColResize"==b);b&&z.stop(a)}},domousedown:function(a){this.moveable||((this.overRightResizeArea(a)||this.overLeftResizeArea(a))&&this.canResize(a)?this.beginColumnResize(a):(this.grid.onMouseDown(a),this.grid.onMouseOverRow(a)))},doclick:function(a){return this._skipBogusClicks?(z.stop(a),!0):!1},colResizeSetup:function(a,
b){var c=h.contentBox(a.sourceView.headerNode);if(b){this.lineDiv=document.createElement("div");b=h.position(a.sourceView.headerNode,!0);var f=h.contentBox(a.sourceView.domNode),e=a.pageX;!this.grid.isLeftToRight()&&8>q("ie")&&(e-=E.getScrollbar().w);h.style(this.lineDiv,{top:b.y+"px",left:e+"px",height:f.h+c.h+"px"});h.addClass(this.lineDiv,"dojoxGridResizeColLine");this.lineDiv._origLeft=e;p.body().appendChild(this.lineDiv)}b=[];f=this.tableMap.findOverlappingNodes(a.cellNode);e=0;for(var d;d=f[e];e++)b.push({node:d,
index:this.getCellNodeIndex(d),width:d.offsetWidth});f=a.sourceView;d=this.grid.isLeftToRight()?1:-1;var l=a.grid.views.views;e=[];for(var k=f.idx+d,g;g=l[k];k+=d)e.push({node:g.headerNode,left:window.parseInt(g.headerNode.style.left)});d=f.headerContentNode.firstChild;return{scrollLeft:a.sourceView.headerNode.scrollLeft,view:f,node:a.cellNode,index:a.cellIndex,w:h.contentBox(a.cellNode).w,vw:c.w,table:d,tw:h.contentBox(d).w,spanners:b,followers:e}},beginColumnResize:function(a){this.moverDiv=document.createElement("div");
h.style(this.moverDiv,{position:"absolute",left:0});p.body().appendChild(this.moverDiv);h.addClass(this.grid.domNode,"dojoxGridColumnResizing");var b=this.moveable=new D(this.moverDiv),c=this.colResizeSetup(a,!0);b.onMove=n.hitch(this,"doResizeColumn",c);C.connect(b,"onMoveStop",n.hitch(this,function(){this.endResizeColumn(c);c.node.releaseCapture&&c.node.releaseCapture();this.moveable.destroy();delete this.moveable;this.moveable=null;h.removeClass(this.grid.domNode,"dojoxGridColumnResizing")}));
a.cellNode.setCapture&&a.cellNode.setCapture();b.onMouseDown(a)},doResizeColumn:function(a,b,c){var f=c.l;f={deltaX:f,w:a.w+(this.grid.isLeftToRight()?f:-f),vw:a.vw+f,tw:a.tw+f};this.dragRecord={inDrag:a,mover:b,leftTop:c};f.w>=this.minColWidth&&(b?h.style(this.lineDiv,"left",this.lineDiv._origLeft+f.deltaX+"px"):this.doResizeNow(a,f))},endResizeColumn:function(a){if(this.dragRecord){var b=this.dragRecord.leftTop;b=this.grid.isLeftToRight()?b.l:-b.l;b+=Math.max(a.w+b,this.minColWidth)-(a.w+b);q("webkit")&&
a.spanners.length&&(b+=h._getPadBorderExtents(a.spanners[0].node).w);this.doResizeNow(a,{deltaX:b,w:a.w+b,vw:a.vw+b,tw:a.tw+b});delete this.dragRecord}h.destroy(this.lineDiv);h.destroy(this.moverDiv);h.destroy(this.moverDiv);delete this.moverDiv;this._skipBogusClicks=!0;a.view.update();this._skipBogusClicks=!1;this.grid.onResizeColumn(a.index)},doResizeNow:function(a,b){a.view.convertColPctToFixed();if(a.view.flexCells&&!a.view.testFlexCells()){var c=A(a.node);c&&(c.style.width="")}var f;for(c=0;f=
a.spanners[c];c++){var e=f.width+b.deltaX;0<e&&(f.node.style.width=e+"px",a.view.setColWidth(f.index,e))}if(this.grid.isLeftToRight()||!q("ie"))for(c=0;f=a.followers[c];c++)e=f.left+b.deltaX,f.node.style.left=e+"px";a.node.style.width=b.w+"px";a.view.setColWidth(a.index,b.w);a.view.headerNode.style.width=b.vw+"px";a.view.setColumnsWidth(b.tw);this.grid.isLeftToRight()||(a.view.headerNode.scrollLeft=a.scrollLeft+b.deltaX)}});r._TableMap=n.extend(function(a){this.mapRows(a)},{map:null,mapRows:function(a){if(a.length){this.map=
[];for(var b,c=0;b=a[c];c++)this.map[c]=[];for(c=0;b=a[c];c++)for(var f=0,e=0,d,l;d=b[f];f++){for(;this.map[c][e];)e++;this.map[c][e]={c:f,r:c};l=d.rowSpan||1;d=d.colSpan||1;for(var k=0;k<l;k++)for(var g=0;g<d;g++)this.map[c+k][e+g]=this.map[c][e];e+=d}}},dumpMap:function(){for(var a=0,b;b=this.map[a];a++)for(var c=0;b[c];c++);},getMapCoords:function(a,b){for(var c=0,f;f=this.map[c];c++)for(var e=0,d;d=f[e];e++)if(d.c==b&&d.r==a)return{j:c,i:e};return{j:-1,i:-1}},getNode:function(a,b,c){return(a=
a&&a.rows[b])&&a.cells[c]},_findOverlappingNodes:function(a,b,c){var f=[];b=this.getMapCoords(b,c);c=0;for(var e;e=this.map[c];c++)c!=b.j&&(e=(e=e[b.i])?this.getNode(a,e.r,e.c):null)&&f.push(e);return f},findOverlappingNodes:function(a){return this._findOverlappingNodes(A(a),G(a.parentNode),0<=a.cellIndex?a.cellIndex:y.indexOf(a.parentNode.cells,a))}});return{_Builder:t,_HeaderBuilder:J,_ContentBuilder:w}});