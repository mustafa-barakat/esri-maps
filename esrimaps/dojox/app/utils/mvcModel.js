//>>built
define("dojox/app/utils/mvcModel",["dojo/_base/lang","dojo/Deferred","dojo/when","dojox/mvc/getStateful"],function(h,q,r,t){return function(c,a,m){var k={},d=new q,l=function(e){var n={},g;for(g in e)"_"!==g.charAt(0)&&(n[g]=e[g]);return n};if(a.store)var f={store:a.store.store,query:a.query?l(a.query):a.store.query?l(a.store.query):{}};else if(a.datastore){try{var u=require("dojo/store/DataStore")}catch(e){throw Error("When using datastore the dojo/store/DataStore module must be listed in the dependencies");
}f={store:new u({store:a.datastore.store}),query:l(a.query)}}else a.data?(a.data&&h.isString(a.data)&&(a.data=h.getObject(a.data)),f={data:a.data,query:{}}):console.warn("mvcModel: Missing parameters.");c=c[m].type?c[m].type:"dojox/mvc/EditStoreRefListController";try{var v=require(c)}catch(e){throw Error(c+" must be listed in the dependencies");}var b=new v(f);try{if(b.queryStore)var p=b.queryStore(f.query);else b.set(b._refSourceModelProp||b._refModelProp||"model",t(f.data)),p=b}catch(e){return d.reject("load mvc model error."),
d.promise}r(p,h.hitch(this,function(){k=b;d.resolve(k);return k}),function(){d.reject("load model error.")});return d}});