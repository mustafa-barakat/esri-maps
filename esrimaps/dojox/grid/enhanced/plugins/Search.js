//>>built
define("dojox/grid/enhanced/plugins/Search","dojo/_base/kernel dojo/_base/lang dojo/_base/declare dojo/_base/array dojo/data/util/filter ../../EnhancedGrid ../_Plugin".split(" "),function(l,h,q,m,n,r,t){l=q("dojox.grid.enhanced.plugins.Search",t,{name:"search",constructor:function(a,b){this.grid=a;b=b&&h.isObject(b)?b:{};this._cacheSize=b.cacheSize||-1;a.searchRow=h.hitch(this,"searchRow")},searchRow:function(a,b){if(h.isFunction(b)){h.isString(a)&&(a=n.patternToRegExp(a));var c=!1;if(a instanceof
RegExp)c=!0;else if(h.isObject(a)){var d=!0,e;for(e in a)h.isString(a[e])&&(a[e]=n.patternToRegExp(a[e])),d=!1;if(d)return}else return;this._search(a,0,b,c)}},_search:function(a,b,c,d){var e=this,f=this._cacheSize,g={start:b,query:this.grid.query,sort:this.grid.getSortProps(),queryOptions:this.grid.queryOptions,onBegin:function(k){e._storeSize=k},onComplete:function(k){m.some(k,function(p,u){return e._checkRow(p,a,d)?(c(b+u,p),!0):!1})||(0<f&&b+f<e._storeSize?e._search(a,b+f,c,d):c(-1,null))}};0<
f&&(g.count=f);this.grid._storeLayerFetch(g)},_checkRow:function(a,b,c){var d=this.grid,e=d.store,f;d=m.filter(d.layout.cells,function(g){return!g.hidden});if(c)return m.some(d,function(g){try{if(g.field)return 0<=String(e.getValue(a,g.field)).search(b)}catch(k){console.log("Search._checkRow() error: ",k)}return!1});for(f in b)if(b[f]instanceof RegExp){for(c=d.length-1;0<=c;--c)if(d[c].field==f)try{if(0>String(e.getValue(a,f)).search(b[f]))return!1;break}catch(g){return!1}if(0>c)return!1}return!0}});
r.registerPlugin(l);return l});