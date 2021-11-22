/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/currency","./_base/array ./_base/lang ./number ./i18n ./i18n!./cldr/nls/currency ./cldr/monetary".split(" "),function(k,f,d,l,n,m){var b={};f.setObject("dojo.currency",b);b._mixInDefaults=function(a){a=a||{};a.type="currency";var c=l.getLocalization("dojo.cldr","currency",a.locale)||{},g=a.currency,e=m.getData(g);k.forEach(["displayName","symbol","group","decimal"],function(h){e[h]=c[g+"_"+h]});e.fractional=[!0,!1];return f.mixin(e,a)};b.format=function(a,c){return d.format(a,b._mixInDefaults(c))};
b.regexp=function(a){return d.regexp(b._mixInDefaults(a))};b.parse=function(a,c){return d.parse(a,b._mixInDefaults(c))};return b});