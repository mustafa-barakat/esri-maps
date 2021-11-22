//>>built
define("dojox/storage/BehaviorStorageProvider",["dojo","dijit","dojox","dojo/require!dojox/storage/Provider,dojox/storage/manager"],function(d,h,g){d.provide("dojox.storage.BehaviorStorageProvider");d.require("dojox.storage.Provider");d.require("dojox.storage.manager");d.declare("dojox.storage.BehaviorStorageProvider",[g.storage.Provider],{store:null,storeName:"__dojox_BehaviorStorage",keys:[],initialize:function(){try{this.store=this._createStore(),this.store.load(this.storeName)}catch(a){throw Error("Store is not available: "+
a);}this.keys=this.get("keys","dojoxSystemNS")||[];this.initialized=!0;g.storage.manager.loaded()},isAvailable:function(){return d.isIE&&5<=d.isIE},_createStore:function(){var a=d.create("link",{id:this.storeName+"Node",style:{display:"none"}},d.query("head")[0]);a.addBehavior("#default#userdata");return a},put:function(a,b,e,c){this._assertIsValidKey(a);c=c||this.DEFAULT_NAMESPACE;this._assertIsValidNamespace(c);var f=this.getFullKey(a,c);b=d.toJson(b);this.store.setAttribute(f,b);this.store.save(this.storeName);
if(b=this.store.getAttribute(f)===b)this._addKey(f),this.store.setAttribute("__dojoxSystemNS_keys",d.toJson(this.keys)),this.store.save(this.storeName);e&&e(b?this.SUCCESS:this.FAILED,a,null,c)},get:function(a,b){this._assertIsValidKey(a);b=b||this.DEFAULT_NAMESPACE;this._assertIsValidNamespace(b);a=this.getFullKey(a,b);return d.fromJson(this.store.getAttribute(a))},getKeys:function(a){a=a||this.DEFAULT_NAMESPACE;this._assertIsValidNamespace(a);a="__"+a+"_";for(var b=[],e=0;e<this.keys.length;e++){var c=
this.keys[e];this._beginsWith(c,a)&&(c=c.substring(a.length),b.push(c))}return b},clear:function(a){a=a||this.DEFAULT_NAMESPACE;this._assertIsValidNamespace(a);a="__"+a+"_";for(var b=[],e=0;e<this.keys.length;e++){var c=this.keys[e];this._beginsWith(c,a)&&b.push(c)}d.forEach(b,function(f){this.store.removeAttribute(f);this._removeKey(f)},this);this.put("keys",this.keys,null,"dojoxSystemNS");this.store.save(this.storeName)},remove:function(a,b){this._assertIsValidKey(a);b=b||this.DEFAULT_NAMESPACE;
this._assertIsValidNamespace(b);a=this.getFullKey(a,b);this.store.removeAttribute(a);this._removeKey(a);this.put("keys",this.keys,null,"dojoxSystemNS");this.store.save(this.storeName)},getNamespaces:function(){var a=[this.DEFAULT_NAMESPACE],b={};b[this.DEFAULT_NAMESPACE]=!0;for(var e=/^__([^_]*)_/,c=0;c<this.keys.length;c++){var f=this.keys[c];1==e.test(f)&&(f=f.match(e)[1],"undefined"==typeof b[f]&&(b[f]=!0,a.push(f)))}return a},isPermanent:function(){return!0},getMaximumSize:function(){return 64},
hasSettingsUI:function(){return!1},isValidKey:function(a){return null===a||void 0===a?!1:/^[0-9A-Za-z_-]*$/.test(a)},isValidNamespace:function(a){return null===a||void 0===a?!1:/^[0-9A-Za-z-]*$/.test(a)},getFullKey:function(a,b){return"__"+b+"_"+a},_beginsWith:function(a,b){return b.length>a.length?!1:a.substring(0,b.length)===b},_assertIsValidNamespace:function(a){if(!1===this.isValidNamespace(a))throw Error("Invalid namespace given: "+a);},_assertIsValidKey:function(a){if(!1===this.isValidKey(a))throw Error("Invalid key given: "+
a);},_addKey:function(a){this._removeKey(a);this.keys.push(a)},_removeKey:function(a){this.keys=d.filter(this.keys,function(b){return b!==a},this)}});g.storage.manager.register("dojox.storage.BehaviorStorageProvider",new g.storage.BehaviorStorageProvider)});