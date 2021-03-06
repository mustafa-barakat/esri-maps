/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/request/watch","./util ../errors/RequestTimeoutError ../errors/CancelError ../_base/array ../_base/window ../has!host-browser?dom-addeventlistener?:../on:".split(" "),function(r,m,n,p,h,k){function l(){for(var c=+new Date,e=0,a;e<d.length&&(a=d[e]);e++){var f=a.response,q=f.options;a.isCanceled&&a.isCanceled()||a.isValid&&!a.isValid(f)?(d.splice(e--,1),b._onAction&&b._onAction()):a.isReady&&a.isReady(f)?(d.splice(e--,1),a.handleResponse(f),b._onAction&&b._onAction()):a.startTime&&a.startTime+
(q.timeout||0)<c&&(d.splice(e--,1),a.cancel(new m("Timeout exceeded",f)),b._onAction&&b._onAction())}b._onInFlight&&b._onInFlight(a);d.length||(clearInterval(g),g=null)}function b(c){c.response.options.timeout&&(c.startTime=+new Date);c.isFulfilled()||(d.push(c),g||(g=setInterval(l,50)),c.response.options.sync&&l())}var g=null,d=[];b.cancelAll=function(){try{p.forEach(d,function(c){try{c.cancel(new n("All requests canceled."))}catch(e){}})}catch(c){}};h&&k&&h.doc.attachEvent&&k(h.global,"unload",
function(){b.cancelAll()});return b});