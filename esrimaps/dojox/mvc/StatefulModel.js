//>>built
define("dojox/mvc/StatefulModel","dojo/_base/kernel dojo/_base/lang dojo/_base/array dojo/_base/declare dojo/Stateful ./getStateful ./getPlainValue ./StatefulArray".split(" "),function(m,d,g,p,q,k,h,l){m.deprecated("dojox/mvc/StatefulModel","Use dojox/mvc/getStateful, dojox/mvc/getPlainValue, dojox/mvc/StatefulArray or one of the dojox/mvc/*RefControllers instead");var e=p("dojox.mvc.StatefulModel",[q],{data:null,store:null,valid:!0,value:"",reset:function(){if(!d.isObject(this.data)||this.data instanceof
Date||this.data instanceof RegExp)this.set("value",this.data);else for(var a in this)this[a]&&d.isFunction(this[a].reset)&&this[a].reset()},commit:function(a){this._commit();(a=a||this.store)&&this._saveToStore(a)},toPlainObject:function(){return h(this,e.getPlainValueOptions)},splice:function(a,b){for(var c=(new l([])).splice.apply(this,d._toArray(arguments)),f=0;f<c.length;f++)(this._removals=this._removals||[]).push(c[f].toPlainObject());return c},add:function(a,b){if("number"===typeof this.get("length")&&
/^[0-9]+$/.test(a.toString())){if(this.get("length")<a-0)throw Error("Out of bounds insert attempted, must be contiguous.");this.splice(a-0,0,b)}else this.set(a,b)},remove:function(a){if("number"===typeof this.get("length")&&/^[0-9]+$/.test(a.toString()))if(this.get(a))this.splice(a-0,1);else throw Error("Out of bounds delete attempted - no such index: "+n);else{var b=this.get(a);if(b)this._removals=this._removals||[],this._removals.push(b.toPlainObject()),this.set(a,void 0),delete this[a];else throw Error("Illegal delete attempted - no such property: "+
a);}},valueOf:function(){return this.toPlainObject()},toString:function(){return""===this.value&&this.data?this.data.toString():this.value.toString()},constructor:function(a){this._createModel(a&&"data"in a?a.data:this.data)},_createModel:function(a){if(null!=a)if(a=k(a,e.getStatefulOptions),d.isArray(a))this.length=0,[].splice.apply(this,a);else if(d.isObject(a))for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b]);else this.set("value",a)},_commit:function(){for(var a in this)this[a]&&d.isFunction(this[a]._commit)&&
this[a]._commit();this.data=this.toPlainObject()},_saveToStore:function(a){this._removals&&(g.forEach(this._removals,function(c){a.remove(a.getIdentity(c))},this),delete this._removals);var b=this.toPlainObject();d.isArray(b)?g.forEach(b,function(c){a.put(c)},this):a.put(b)}});d.mixin(e,{getStatefulOptions:{getType:function(a){return d.isArray(a)?"array":null!=a&&"[object Object]"=={}.toString.call(a)?"object":"value"},getStatefulArray:function(a){var b=this,c=d.mixin(new l(g.map(a,function(r){return k(r,
b)}))),f;for(f in e.prototype)"set"!=f&&(c[f]=e.prototype[f]);c.data=a;return c},getStatefulObject:function(a){var b=new e;b.data=a;for(var c in a)b.set(c,k(a[c],this));return b},getStatefulValue:function(a){var b=new e;b.data=a;b.set("value",a);return b}},getPlainValueOptions:{getType:function(a){if(d.isArray(a))return"array";if(d.isObject(a))for(var b in a)if(a.hasOwnProperty(b)&&"value"!=b&&(a[b]||{}).get&&(a[b]||{}).watch)return"object";return"value"},getPlainArray:function(a){return g.map(a,
function(b){return h(b,this)},this)},getPlainObject:function(a){var b={},c;for(c in a)"_watchCallbacks"==c||c in e.prototype||(b[c]=h(a[c],this));return b},getPlainValue:function(a){return(a||{}).set&&(a||{}).watch?h(a.value,this):a}}});return e});