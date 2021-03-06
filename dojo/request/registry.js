/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/request/registry",["require","../_base/array","./default!platform","./util"],function(k,l,h,m){function f(a,e){for(var b=g.slice(0),c=0,d;d=b[c++];)if(d(a,e))return d.request.apply(null,arguments);return h.apply(null,arguments)}function n(a,e){if(e){var b=a.test?function(c){return a.test(c)}:a.apply&&a.call?function(){return a.apply(null,arguments)}:function(c){return c===a};b.request=e}else b=function(){return!0},b.request=a;return b}var g=[];f.register=function(a,e,b){var c=n(a,e);
g[b?"unshift":"push"](c);return{remove:function(){var d;~(d=l.indexOf(g,c))&&g.splice(d,1)}}};f.load=function(a,e,b,c){a?k([a],function(d){h=d;b(f)}):b(f)};m.addCommonMethods(f);return f});