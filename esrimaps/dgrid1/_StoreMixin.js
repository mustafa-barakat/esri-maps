//>>built
define("dgrid1/_StoreMixin","dojo/_base/declare dojo/_base/lang dojo/Deferred dojo/aspect dojo/dom-construct dojo/has dojo/on dojo/when".split(" "),function(z,n,u,A,t,E,v,B){function C(a){if("object"!==typeof a)a=Error(a);else if("cancel"===a.dojoType)return;v.emit(this.domNode,"dgrid-error",{grid:this,error:a,cancelable:!0,bubbles:!0})&&console.error(a)}return z(null,{collection:null,_renderedCollection:null,_rows:null,_observerHandle:null,_structureHandle:null,shouldTrackCollection:!0,getBeforePut:!0,
noDataMessage:"",loadingMessage:"",_total:0,constructor:function(){this.dirty={};this._updating={};this._columnsWithSet={};this._structureHandle=A.before(this,"configStructure",n.hitch(this,function(){this._columnsWithSet={}}))},destroy:function(){this.inherited(arguments);this._structureHandle&&this._structureHandle.remove();this._renderedCollection&&this._cleanupCollection();this._refreshTimeout&&clearTimeout(this._refreshTimeout)},_configColumn:function(a){a.set&&(this._columnsWithSet[a.field]=
a);this.inherited(arguments)},_setCollection:function(a){this._renderedCollection&&(this.cleanup(),this._cleanupCollection({shouldRevert:!a||a.storage!==this._renderedCollection.storage}));this.collection=a;if(this._started){if(a){var e=a;this.sort&&0<this.sort.length&&(e=a.sort(this.sort));e.track&&this.shouldTrackCollection&&(e=e.track(),this._rows=[],this._observerHandle=this._observeCollection(e,this.contentNode,{rows:this._rows}));this._renderedCollection=e}this.refresh()}},_setStore:function(){this.collection||
console.debug("set('store') call detected, but you probably meant set('collection')")},_getTotal:function(){return this._total},_cleanupCollection:function(a){a=a||{};this._observerHandle&&(this._observerHandle.remove(),this._observerHandle=this._rows=null);!1!==a.shouldRevert&&(this.dirty={});this._renderedCollection=this.collection=null},_applySort:function(){this.collection?this.set("collection",this.collection):this.store&&console.debug("_StoreMixin found store property but not collection; this is often the sign of a mistake during migration from 0.3 to 0.4")},
_emitRefreshComplete:function(){var a=this;this._refreshTimeout=setTimeout(function(){v.emit(a.domNode,"dgrid-refresh-complete",{bubbles:!0,cancelable:!1,grid:a});a._refreshTimeout=null},0)},_insertNoDataNode:function(a){this._removeNoDataNode();a=a||this.contentNode;var e=this.noDataNode=t.create("div",{className:"dgrid-no-data",innerHTML:this.noDataMessage});a.insertBefore(e,this._getFirstRowSibling?this._getFirstRowSibling(a):null);return e},_removeNoDataNode:function(){return this.noDataNode?
(t.destroy(this.noDataNode),delete this.noDataNode,!0):!1},row:function(){var a=this.inherited(arguments);a&&a.data&&"undefined"!==typeof a.id&&(a.id=this.collection.getIdentity(a.data));return a},refresh:function(){var a=this.inherited(arguments);this.collection||this._insertNoDataNode();return a},refreshCell:function(a){if(!this.collection||!this._createBodyRowCell)throw Error("refreshCell requires a Grid with a collection.");this.inherited(arguments);return this.collection.get(a.row.id).then(n.hitch(this,
"_refreshCellFromItem",a))},_refreshCellFromItem:function(a,e,g){var d=a.element;t.empty(d);var b=this.dirty&&this.dirty[a.row.id];b&&(e=n.delegate(e,b));this._createBodyRowCell(d,a.column,e,g)},renderArray:function(){var a=this.inherited(arguments);this.collection||a.length&&this.noDataNode&&t.destroy(this.noDataNode);return a},insertRow:function(a,e,g,d,b){var h=this.collection,l=this.dirty;h=h&&h.getIdentity(a);var f;h in l&&!(h in this._updating)&&(f=l[h]);f&&(a=n.delegate(a,f));l=this.inherited(arguments);
b&&b.rows&&(b.rows[d]=l);this.noDataNode&&(t.destroy(this.noDataNode),this.noDataNode=null);return l},updateDirty:function(a,e,g){var d=this.dirty,b=d[a];b||(b=d[a]={});b[e]=g},save:function(){function a(m,p){return function(q){var w=e._columnsWithSet,x=e._updating,r;if("function"===typeof q.set)q.set(p);else for(r in p)q[r]=p[r];for(r in w){var y=w[r].set(q);void 0!==y&&(q[r]=y)}x[m]=!0;return g.put(q).then(function(D){delete d[m];delete x[m];h[m]=D;return h})}}var e=this,g=this.collection,d=this.dirty,
b=new u,h={},l=function(m){var p;return e.getBeforePut||!(p=e.row(m).data)?function(){return g.get(m)}:function(){return p}},f=b.then(function(){return h}),c;for(c in d){var k=a(c,d[c]);f=f.then(l(c)).then(k)}b.resolve();return f},revert:function(){this.dirty={};this.refresh()},_trackError:function(a){"string"===typeof a&&(a=n.hitch(this,a));var e=this;try{var g=B(a())}catch(d){a=new u,a.reject(d),g=a.promise}g.otherwise(function(d){C.call(e,d)});return g},removeRow:function(a,e,g){var d={element:a};
e||this.up(d).element!==a||this.down(d).element!==a||this._insertNoDataNode();(d=g&&g.rows||this._rows)&&delete d[a.rowIndex];return this.inherited(arguments)},renderQueryResults:function(a,e,g){g=n.mixin({rows:this._rows},g);var d=this;return a.then(function(b){b=d.renderArray(b,e,g);delete d._lastCollection;return b})},_observeCollection:function(a,e,g){var d=this,b=g.rows,h,l=[a.on("delete, update",function(f){var c=f.previousIndex,k=f.index;void 0!==c&&b[c]&&("max"in b&&(void 0===k||k<b.min||
k>b.max)&&b.max--,0>b.max&&(b.max=0),h=b[c],h.parentNode===e&&d.removeRow(h,!1,g),b.splice(c,1),("delete"===f.type||"update"===f.type&&(c<k||void 0===k))&&b[c]&&b[c].rowIndex--);"delete"===f.type&&(h=null)}),a.on("add, update",function(f){var c=f.previousIndex,k=f.index;if(void 0!==k&&(!("max"in b)||k>=b.min&&k<=b.max)){"max"in b&&(void 0===c||c<b.min||c>b.max)&&b.max++;if(b.length){if(c=b[k],!c&&(c=b[k-1]))c=(c.connected||c).nextSibling}else c=d._getFirstRowSibling&&d._getFirstRowSibling(e);h&&c&&
h.id===c.id&&(c=(c.connected||c).nextSibling);c&&!c.parentNode&&(c=document.getElementById(c.id));b.splice(k,0,void 0);h=d.insertRow(f.target,e,c,k,g);d.highlightRow(h)}h=null}),a.on("add, delete, update",function(f){var c="undefined"!==typeof f.previousIndex?f.previousIndex:Infinity,k="undefined"!==typeof f.index?f.index:Infinity,m=Math.min(c,k);c!==k&&b[m]&&d.adjustRowIndices(b[m]);Infinity!==c&&d._processScroll&&(b[c]||b[c-1])&&d._processScroll();d._onNotification(b,f,a);a===d._renderedCollection&&
"totalLength"in f&&(d._total=f.totalLength)})];return{remove:function(){for(;0<l.length;)l.pop().remove()}}},_onNotification:function(){}})});