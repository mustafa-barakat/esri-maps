/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/store/util/SimpleQueryEngine",["../../_base/array"],function(n){return function(b,c){function k(a){a=n.filter(a,b);var d=c&&c.sort;d&&a.sort("function"==typeof d?d:function(p,q){for(var h,l=0;h=d[l];l++){var e=p[h.attribute],f=q[h.attribute];e=null!=e?e.valueOf():e;f=null!=f?f.valueOf():f;if(e!=f)return!!h.descending==(null==e||e>f)?-1:1}return 0});if(c&&(c.start||c.count)){var g=a.length;a=a.slice(c.start||0,(c.start||0)+(c.count||Infinity));a.total=g}return a}switch(typeof b){default:throw Error("Can not query with a "+
typeof b);case "object":case "undefined":var m=b;b=function(a){for(var d in m){var g=m[d];if(g&&g.test){if(!g.test(a[d],a))return!1}else if(g!=a[d])return!1}return!0};break;case "string":if(!this[b])throw Error("No filter function "+b+" was found in store");b=this[b];case "function":}k.matches=b;return k}});