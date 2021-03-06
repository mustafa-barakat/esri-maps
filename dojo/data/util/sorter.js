/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/data/util/sorter",["../../_base/lang"],function(v){var d={};v.setObject("dojo.data.util.sorter",d);d.basicComparator=function(a,b){var e=-1;null===a&&(a=void 0);null===b&&(b=void 0);if(a==b)e=0;else if(a>b||null==a)e=1;return e};d.createSortFunction=function(a,b){function e(h,l,k,f){return function(m,n){m=f.getValue(m,h);n=f.getValue(n,h);return l*k(m,n)}}for(var p=[],g,r=b.comparatorMap,t=d.basicComparator,q=0;q<a.length;q++){g=a[q];var c=g.attribute;if(c){g=g.descending?-1:1;var u=
t;r&&("string"!==typeof c&&"toString"in c&&(c=c.toString()),u=r[c]||t);p.push(e(c,g,u,b))}}return function(h,l){for(var k=0;k<p.length;){var f=p[k++](h,l);if(0!==f)return f}return 0}};return d});