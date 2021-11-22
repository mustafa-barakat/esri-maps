//>>built
define("dojox/app/utils/simpleModel",["dojo/_base/lang","dojo/Deferred","dojo/when"],function(k,p,q){return function(b,a,r){var d={},f=new p;b=function(c){var n={},h;for(h in c)"_"!==h.charAt(0)&&(n[h]=c[h]);return n};if(a.store){if(!a.store.params)throw Error("Invalid store for model ["+r+"]");if(a.store.params.data||a.store.params.store){var e=a.store.store;a.query?b(a.query):a.store.query&&b(a.store.query);var g=void 0}else if(a.store.params.url){try{var l=require("dojo/store/DataStore")}catch(c){throw Error("dojo/store/DataStore must be listed in the dependencies");
}e=new l({store:a.store.store});a.query?b(a.query):a.store.query&&b(a.store.query);g=void 0}else a.store.store&&(e=a.store.store,a.query?b(a.query):a.store.query&&b(a.store.query),g=void 0)}else if(a.datastore){try{l=require("dojo/store/DataStore")}catch(c){throw Error("When using datastore the dojo/store/DataStore module must be listed in the dependencies");}e=new l({store:a.datastore.store});b(a.query);g=void 0}else a.data?(a.data&&k.isString(a.data)&&(a.data=k.getObject(a.data)),g=a.data,e=void 0):
console.warn("simpleModel: Missing parameters.");try{var m=e?e.query():g}catch(c){return f.reject("load simple model error."),f.promise}if(m.then)q(m,k.hitch(this,function(c){d=c;f.resolve(d);return d}),function(){loadModelLoaderDeferred.reject("load model error.")});else return d=m,f.resolve(d),d;return f}});