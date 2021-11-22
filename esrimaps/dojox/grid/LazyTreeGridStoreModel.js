//>>built
define("dojox/grid/LazyTreeGridStoreModel",["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dijit/tree/ForestStoreModel"],function(n,g,f,p){return n("dojox.grid.LazyTreeGridStoreModel",p,{serverStore:!1,constructor:function(b){this.serverStore=!!b.serverStore},mayHaveChildren:function(b){var a=null;return g.some(this.childrenAttrs,function(d){a=this.store.getValue(b,d);return f.isString(a)?0<parseInt(a,10)||"true"===a.toLowerCase()?!0:!1:"number"==typeof a?0<a:"boolean"==typeof a?a:this.store.isItem(a)?
(a=this.store.getValues(b,d),f.isArray(a)?0<a.length:!1):!1},this)},getChildren:function(b,a,d,c){if(c){var h=c.start||0,k=c.count,q=c.parentId,l=c.sort;if(b===this.root)this.root.size=0,this.store.fetch({start:h,count:k,sort:l,query:this.query,onBegin:f.hitch(this,function(e){this.root.size=e}),onComplete:f.hitch(this,function(e){a(e,c,this.root.size)}),onError:d});else{var m=this.store;if(m.isItemLoaded(b))this.serverStore&&!this._isChildrenLoaded(b)?(this.childrenSize=0,this.store.fetch({start:h,
count:k,sort:l,query:f.mixin({parentId:q},this.query||{}),onBegin:f.hitch(this,function(e){this.childrenSize=e}),onComplete:f.hitch(this,function(e){a(e,c,this.childrenSize)}),onError:d})):this.inherited(arguments);else{var r=f.hitch(this,arguments.callee);m.loadItem({item:b,onItem:function(e){r(e,a,d,c)},onError:d})}}}else this.inherited(arguments)},_isChildrenLoaded:function(b){var a=null;return g.every(this.childrenAttrs,function(d){a=this.store.getValues(b,d);return g.every(a,function(c){return this.store.isItemLoaded(c)},
this)},this)},onNewItem:function(b,a){},onDeleteItem:function(b){}})});