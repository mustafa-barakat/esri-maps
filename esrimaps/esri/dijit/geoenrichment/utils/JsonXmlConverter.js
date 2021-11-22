// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/JsonXmlConverter",["dojo/_base/declare","./RegExpUtil"],function(v,p){function w(a,b,c,d){return q(c,d)+"\x3c"+a+(b?t(b):"")+"\x3e"+(d?"\n":"")}function x(a,b,c){return q(b,c)+"\x3c/"+a+"\x3e"+(c?"\n":"")}function y(a,b,c,d){return q(c,d)+"\x3c"+a+(b?t(b):"")+" /\x3e"+(d?"\n":"")}function z(a,b,c){a=p.encodeXML(a,!1);return q(b,c)+a+(c?"\n":"")}function t(a){var b="",c;for(c in a){var d=a[c];Array.isArray(d)&&(d=d.join(";"));void 0===d||null===d||"number"===
typeof d&&isNaN(d)||(b+=" "+c+'\x3d"'+p.encodeXML(d,!0)+'"')}return b}function q(a,b){if(!b)return"";b="";for(var c=0;c<a;c++)b+="     ";return b}return v(null,{parseJson:function(a,b){function c(e,h){e.text||"#text"===e.name?f+=z(e.text,h,d):e.name&&(e.tags&&e.tags.length?(f+=w(e.name,e.attributes,h,d),e.tags&&e.tags.forEach(function(l){c(l,h+1)}),f+=x(e.name,h,d)):f+=y(e.name,e.attributes,h,d))}var d=b&&b.prettify,f="";b&&b.addDocumentOptions&&(f+='\x3c?xml version\x3d"1.0" encoding\x3d"utf-8"?\x3e');
c(a,0);return f=decodeURIComponent(encodeURIComponent(f).replace("%19",""))},parseXml:function(a,b){function c(m,k){m.name=k.nodeName;b.saveInnerHTML&&(m.innerHTML=k.innerHTML);if(k.attributes&&k.attributes.length){m.attributes={};for(var n=0;n<k.attributes.length;n++){var r=k.attributes[n],g=r.value;if(!0===g||"true"===g)g=!0;else if(!1===g||"false"===g)g=!1;else if(d&&g){var u=Number(g);isNaN(u)||(g=u)}m.attributes[r.nodeName]=g}}if(k.childNodes&&k.childNodes.length)for(m.tags=[],n=0;n<k.childNodes.length;n++){if(g=
r=k.childNodes[n],"#text"!==g.nodeName||(f?g.nodeValue.trim():g.nodeValue))g={},m.tags.push(g),c(g,r)}else"#text"===k.nodeName&&(delete m.name,m.text=p.decodeXML(k.nodeValue))}b=b||{};var d=b.parseNumbers,f=b.ignoreWhiteSpacedTextNodes;f=void 0===f?!0:f;var e={};a=(new DOMParser).parseFromString(a,"text/xml").childNodes;for(var h=0;h<a.length;h++)if(1===a[h].nodeType){var l=a[h];break}l&&c(e,l);return e},queryTopJson:function(a,b){return this.queryJson(a,b,!0)},queryJson:function(a,b,c){function d(e,
h){e.tags&&e.tags.forEach(function(l){(b.test?b.test(l.name):l.name===b)&&f.push(l);c&&0===h||d(l,h+1)})}var f=[];d(a,0);return f},traverseJson:function(a,b){function c(f){d||(!0===b(f)?d=!0:f.tags&&f.tags.forEach(c))}var d=!1;c(a)},getInnerHTML:function(a){return a.innerHTML?a.innerHTML.trim():this.parseJson(a).replace(/^<[^<]*>/,"").replace(/<\/[^<]*>$/,"").trim()},_IS_RICH_RE:/<.+>.*<\/.+>|<br\s*\/>|<\/br>/,_UNRICH_RE:/<.*?>/g,isRichText:function(a){return(a=String(a))&&this._IS_RICH_RE.test(a)},
unrichHTML:function(a){if(!a)return"";a=p.decodeXML(String(a).trim()).replace(this._UNRICH_RE,"");0===a.indexOf("\x3c")&&-1!==a.indexOf("\x3e")&&(a="");return a}})()});