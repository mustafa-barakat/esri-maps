/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/request/util","exports ../errors/RequestError ../errors/CancelError ../Deferred ../io-query ../_base/array ../_base/lang ../promise/Promise ../has".split(" "),function(g,v,p,w,q,x,l,y,m){function r(a){return m("native-arraybuffer")&&a instanceof ArrayBuffer}function t(a){return m("native-blob")&&a instanceof Blob}function z(a){return u(a)}function A(a){return void 0!==a.data?a.data:a.text}g.deepCopy=function(a,e){for(var c in e){var d=a[c],b=e[c];if("__proto__"!==c&&d!==b){var h=b,f;
if(f=h&&"object"===typeof h)f=h,f=!(m("native-formdata")&&f instanceof FormData);!f||("undefined"!==typeof Element?h instanceof Element:1===h.nodeType)||t(h)||r(h)?a[c]=b:"[object Date]"===Object.prototype.toString.call(b)?a[c]=new Date(b):l.isArray(b)?a[c]=g.deepCopyArray(b):d&&"object"===typeof d?g.deepCopy(d,b):a[c]=g.deepCopy({},b)}}return a};g.deepCopyArray=function(a){for(var e=[],c=0,d=a.length;c<d;c++){var b=a[c];"object"===typeof b?e.push(g.deepCopy({},b)):e.push(b)}return e};g.deepCreate=
function(a,e){e=e||{};var c=l.delegate(a),d,b;for(d in a)(b=a[d])&&"object"===typeof b&&(c[d]=g.deepCreate(b,e[d]));return g.deepCopy(c,e)};var u=Object.freeze||function(a){return a};g.deferred=function(a,e,c,d,b,h){var f=new w(function(k){e&&e(f,a);return k&&(k instanceof v||k instanceof p)?k:new p("Request canceled",a)});f.response=a;f.isValid=c;f.isReady=d;f.handleResponse=b;c=f.then(z).otherwise(function(k){k.response=a;throw k;});g.notify&&c.then(l.hitch(g.notify,"emit","load"),l.hitch(g.notify,
"emit","error"));d=c.then(A);b=new y;for(var n in d)d.hasOwnProperty(n)&&(b[n]=d[n]);b.response=c;u(b);h&&f.then(function(k){h.call(f,k)},function(k){h.call(f,a,k)});f.promise=b;f.then=b.then;return f};g.addCommonMethods=function(a,e){x.forEach(e||["GET","POST","PUT","DELETE"],function(c){a[("DELETE"===c?"DEL":c).toLowerCase()]=function(d,b){b=l.delegate(b||{});b.method=c;return a(d,b)}})};g.parseArgs=function(a,e,c){var d=e.data,b=e.query;!d||c||"object"!==typeof d||m("native-xhr2")&&(r(d)||t(d))||
(e.data=q.objectToQuery(d));b?("object"===typeof b&&(b=q.objectToQuery(b)),e.preventCache&&(b+=(b?"\x26":"")+"request.preventCache\x3d"+ +new Date)):e.preventCache&&(b="request.preventCache\x3d"+ +new Date);a&&b&&(a+=(~a.indexOf("?")?"\x26":"?")+b);return{url:a,options:e,getHeader:function(h){return null}}};g.checkStatus=function(a){a=a||0;return 200<=a&&300>a||304===a||1223===a||!a}});