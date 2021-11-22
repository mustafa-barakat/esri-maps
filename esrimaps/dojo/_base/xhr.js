/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/_base/xhr","./kernel ./sniff require ../io-query ../dom ../dom-form ./Deferred ./config ./json ./lang ./array ../on ../aspect ../request/watch ../request/xhr ../request/util".split(" "),function(b,m,L,r,E,n,F,G,A,p,H,M,B,v,C,I){b._xhrObj=C._create;var w=b.config;b.objectToQuery=r.objectToQuery;b.queryToObject=r.queryToObject;b.fieldToObject=n.fieldToObject;b.formToObject=n.toObject;b.formToQuery=n.toQuery;b.formToJson=n.toJson;b._blockAsync=!1;m.add("native-xhr2-blob",function(){if(m("native-xhr2")){var a=
new XMLHttpRequest;a.open("GET","/",!0);a.responseType="blob";var c=a.responseType;a.abort();return"blob"===c}});var q=b._contentHandlers=b.contentHandlers={text:function(a){return a.responseText},json:function(a){return A.fromJson(a.responseText||null)},"json-comment-filtered":function(a){G.useCommentedJson||console.warn("Consider using the standard mimetype:application/json. json-commenting can introduce security issues. To decrease the chances of hijacking, use the standard the 'json' handler and prefix your json with: {}\x26\x26\nUse djConfig.useCommentedJson\x3dtrue to turn off this message.");
a=a.responseText;var c=a.indexOf("/*"),h=a.lastIndexOf("*/");if(-1==c||-1==h)throw Error("JSON was not comment filtered");return A.fromJson(a.substring(c+2,h))},javascript:function(a){return b.eval(a.responseText)},xml:function(a){var c=a.responseXML;c&&m("dom-qsa2.1")&&!c.querySelectorAll&&m("dom-parser")&&(c=(new DOMParser).parseFromString(a.responseText,"application/xml"));if(m("ie")&&(!c||!c.documentElement)){var h=function(k){return"MSXML"+k+".DOMDocument"};h=["Microsoft.XMLDOM",h(6),h(4),h(3),
h(2)];H.some(h,function(k){try{var d=new ActiveXObject(k);d.async=!1;d.loadXML(a.responseText);c=d}catch(f){return!1}return!0})}return c},"json-comment-optional":function(a){return a.responseText&&/^[^{\[]*\/\*/.test(a.responseText)?q["json-comment-filtered"](a):q.json(a)}};m("native-xhr2")&&(q.arraybuffer=q.blob=q.document=function(a,c){return"blob"!==c.args.handleAs||m("native-xhr2-blob")?a.response:new Blob([a.response],{type:a.getResponseHeader("Content-Type")})});b._ioSetArgs=function(a,c,h,
k){var d={args:a,url:a.url},f=null;if(a.form){f=E.byId(a.form);var l=f.getAttributeNode("action");d.url=d.url||(l?l.value:b.doc?b.doc.URL:null);f=n.toObject(f)}l={};f&&p.mixin(l,f);a.content&&p.mixin(l,a.content);a.preventCache&&(l["dojo.preventCache"]=(new Date).valueOf());d.query=r.objectToQuery(l);d.handleAs=a.handleAs||"text";var e=new F(function(g){g.canceled=!0;c&&c(g);var t=g.ioArgs.error;t||(t=Error("request cancelled"),t.dojoType="cancel",g.ioArgs.error=t);return t});e.addCallback(h);var x=
a.load;x&&p.isFunction(x)&&e.addCallback(function(g){return x.call(a,g,d)});var y=a.error;y&&p.isFunction(y)&&e.addErrback(function(g){return y.call(a,g,d)});var z=a.handle;z&&p.isFunction(z)&&e.addBoth(function(g){return z.call(a,g,d)});e.addErrback(function(g){return k(g,e)});w.ioPublish&&b.publish&&!1!==d.args.ioPublish&&(e.addCallbacks(function(g){b.publish("/dojo/io/load",[e,g]);return g},function(g){b.publish("/dojo/io/error",[e,g]);return g}),e.addBoth(function(g){b.publish("/dojo/io/done",
[e,g]);return g}));e.ioArgs=d;return e};var J=function(a){a=q[a.ioArgs.handleAs](a.ioArgs.xhr,a.ioArgs);return void 0===a?null:a},K=function(a,c){c.ioArgs.args.failOk||console.error(a);return a},D=function(a){0>=u&&(u=0,w.ioPublish&&b.publish&&(!a||a&&!1!==a.ioArgs.args.ioPublish)&&b.publish("/dojo/io/stop"))},u=0;B.after(v,"_onAction",function(){--u});B.after(v,"_onInFlight",D);b._ioCancelAll=v.cancelAll;b._ioNotifyStart=function(a){w.ioPublish&&b.publish&&!1!==a.ioArgs.args.ioPublish&&(u||b.publish("/dojo/io/start"),
u+=1,b.publish("/dojo/io/send",[a]))};b._ioWatch=function(a,c,h,k){a.ioArgs.options=a.ioArgs.args;p.mixin(a,{response:a.ioArgs,isValid:function(d){return c(a)},isReady:function(d){return h(a)},handleResponse:function(d){return k(a)}});v(a);D(a)};b._ioAddQueryToUrl=function(a){a.query.length&&(a.url+=(-1==a.url.indexOf("?")?"?":"\x26")+a.query,a.query=null)};b.xhr=function(a,c,h){var k=b._ioSetArgs(c,function(e){l&&l.cancel()},J,K),d=k.ioArgs;"postData"in c?d.query=c.postData:"putData"in c?d.query=
c.putData:"rawBody"in c?d.query=c.rawBody:(2<arguments.length&&!h||-1==="POST|PUT".indexOf(a.toUpperCase()))&&b._ioAddQueryToUrl(d);var f;m("native-xhr2")&&(f={arraybuffer:1,blob:1,document:1});f=f[c.handleAs]?c.handleAs:"text";"blob"!==f||m("native-xhr2-blob")||(f="arraybuffer");f={method:a,handleAs:f,responseType:c.responseType,timeout:c.timeout,withCredentials:c.withCredentials,ioArgs:d};"undefined"!==typeof c.headers&&(f.headers=c.headers);"undefined"!==typeof c.contentType&&(f.headers||(f.headers=
{}),f.headers["Content-Type"]=c.contentType);"undefined"!==typeof d.query&&(f.data=d.query);"undefined"!==typeof c.sync&&(f.sync=c.sync);b._ioNotifyStart(k);try{var l=C(d.url,f,!0)}catch(e){return k.cancel(),k}k.ioArgs.xhr=l.response.xhr;l.then(function(){k.resolve(k)}).otherwise(function(e){d.error=e;e.response&&(e.status=e.response.status,e.responseText=e.response.text,e.xhr=e.response.xhr);k.reject(e)});return k};b.xhrGet=function(a){return b.xhr("GET",a)};b.rawXhrPost=b.xhrPost=function(a){return b.xhr("POST",
a,!0)};b.rawXhrPut=b.xhrPut=function(a){return b.xhr("PUT",a,!0)};b.xhrDelete=function(a){return b.xhr("DELETE",a)};b._isDocumentOk=function(a){return I.checkStatus(a.status)};b._getText=function(a){var c;b.xhrGet({url:a,sync:!0,load:function(h){c=h}});return c};p.mixin(b.xhr,{_xhrObj:b._xhrObj,fieldToObject:n.fieldToObject,formToObject:n.toObject,objectToQuery:r.objectToQuery,formToQuery:n.toQuery,formToJson:n.toJson,queryToObject:r.queryToObject,contentHandlers:q,_ioSetArgs:b._ioSetArgs,_ioCancelAll:b._ioCancelAll,
_ioNotifyStart:b._ioNotifyStart,_ioWatch:b._ioWatch,_ioAddQueryToUrl:b._ioAddQueryToUrl,_isDocumentOk:b._isDocumentOk,_getText:b._getText,get:b.xhrGet,post:b.xhrPost,put:b.xhrPut,del:b.xhrDelete});return b.xhr});