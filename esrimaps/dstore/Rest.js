//>>built
define("dstore/Rest","dojo/request dojo/when dojo/_base/lang dojo/json dojo/io-query dojo/_base/declare ./Request".split(" "),function(g,m,h,n,u,p,q){return p(q,{stringify:n.stringify,_getTarget:function(b){var a=this.target;return"/"==a.slice(-1)?a+b:a+"/"+b},get:function(b,a){a=a||{};a=h.mixin({Accept:this.accepts},this.headers,a.headers||a);var d=this;return g(this._getTarget(b),{headers:a}).then(function(c){return d._restore(d.parse(c),!0)})},autoEmitEvents:!1,put:function(b,a){a=a||{};var d=
"id"in a?a.id:this.getIdentity(b),c="undefined"!==typeof d,e=this,r="beforeId"in a?null===a.beforeId?{"Put-Default-Position":"end"}:{"Put-Before":a.beforeId}:c&&!1!==a.overwrite?null:{"Put-Default-Position":this.defaultNewToStart?"start":"end"},l=g(c?this._getTarget(d):this.target,{method:c&&!a.incremental?"PUT":"POST",data:this.stringify(b),headers:h.mixin({"Content-Type":"application/json",Accept:this.accepts,"If-Match":!0===a.overwrite?"*":null,"If-None-Match":!1===a.overwrite?"*":null},r,this.headers,
a.headers)});return l.then(function(f){var k={};"beforeId"in a&&(k.beforeId=a.beforeId);f=k.target=f&&e._restore(e.parse(f),!0)||b;m(l.response,function(t){e.emit(201===t.status?"add":"update",k)});return f})},add:function(b,a){a=a||{};a.overwrite=!1;return this.put(b,a)},remove:function(b,a){a=a||{};var d=this;return g(this._getTarget(b),{method:"DELETE",headers:h.mixin({},this.headers,a.headers)}).then(function(c){var e=c&&d.parse(c);d.emit("delete",{id:b,target:e});return c?e:!0})}})});