/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/rpc/JsonpService",["../_base/array","../_base/declare","../_base/lang","./RpcService","../io/script"],function(e,f,d,g,h){return f("dojo.rpc.JsonpService",g,{constructor:function(a,c){this.required&&(c&&d.mixin(this.required,c),e.forEach(this.required,function(b){if(""==b||void 0==b)throw Error("Required Service Argument not found: "+b);}))},strictArgChecks:!1,bind:function(a,c,b,k){h.get({url:k||this.serviceUrl,callbackParamName:this.callbackParamName||"callback",content:this.createRequest(c),
timeout:this.timeout,handleAs:"json",preventCache:!0}).addCallbacks(this.resultCallback(b),this.errorCallback(b))},createRequest:function(a){a=d.isArrayLike(a)&&1==a.length?a[0]:{};d.mixin(a,this.required);return a}})});