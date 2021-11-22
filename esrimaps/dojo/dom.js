/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/dom",["./sniff","./_base/window","./_base/kernel"],function(f,h,g){if(7>=f("ie"))try{document.execCommand("BackgroundImageCache",!1,!0)}catch(a){}var d={};f("ie")?d.byId=function(a,b){if("string"!=typeof a)return a||null;var c=b||h.doc;b=a&&c.getElementById(a);if(!b||b.attributes.id.value!=a&&b.id!=a){c=c.all[a];if(!c||c.nodeName)c=[c];for(var e=0;b=c[e++];)if(b.attributes&&b.attributes.id&&b.attributes.id.value==a||b.id==a)return b}else return b;return null}:d.byId=function(a,b){return("string"==
typeof a?(b||h.doc).getElementById(a):a)||null};g=g.global.document||null;f.add("dom-contains",!(!g||!g.contains));d.isDescendant=f("dom-contains")?function(a,b){return!(!(b=d.byId(b))||!b.contains(d.byId(a)))}:function(a,b){try{for(a=d.byId(a),b=d.byId(b);a;){if(a==b)return!0;a=a.parentNode}}catch(c){}return!1};f.add("css-user-select",function(a,b,c){if(!c)return!1;a=c.style;b=["Khtml","O","Moz","Webkit"];c=b.length;var e="userSelect";do if("undefined"!==typeof a[e])return e;while(c--&&(e=b[c]+"UserSelect"));
return!1});var k=f("css-user-select");d.setSelectable=k?function(a,b){d.byId(a).style[k]=b?"":"none"}:function(a,b){a=d.byId(a);var c=a.getElementsByTagName("*"),e=c.length;if(b)for(a.removeAttribute("unselectable");e--;)c[e].removeAttribute("unselectable");else for(a.setAttribute("unselectable","on");e--;)c[e].setAttribute("unselectable","on")};return d});