// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/SVGUtil",["dojo/sniff","dojo/dom-construct"],function(l,n){var g={},m=l("ie")||l("trident"),h;g.getOuterHTML=function(a){g.fixSVG(a);if(a.outerHTML)return a.outerHTML;var c=a.parentNode;h=h||n.create("div",null,document.body);var d=a.nextSibling;c&&c.removeChild(a);h.appendChild(a);var e=a.parentNode.innerHTML;h.removeChild(a);d?d.parentNode.insertBefore(a,d):c&&c.appendChild(a);e=e.replace(/preserveAspectRatio="none meet"/g,'preserveAspectRatio\x3d"none"');
return e=e.replace(/preserveAspectRatio='none meet'/g,"preserveAspectRatio\x3d'none'")};g.fixSVG=function(a){function c(b,f){if(b&&(b.hasAttribute&&b.hasAttribute("xlink:href")&&(d=!0),"svg"===b.nodeName.toLowerCase()&&f(b),b.childNodes))for(var k=0,p=b.childNodes.length;k<p;k++)c(b.childNodes[k],f)}var d=!1,e=["xmlns","xmlns:xlink","xlink:href","version"];c(a,function(b){e.forEach(function(f){for(;b.hasAttribute(f);)b.removeAttribute(f)});b.hasAttribute("preserveAspectRatio")&&"none meet"===b.getAttribute("preserveAspectRatio")&&
(b.removeAttribute("preserveAspectRatio"),b.setAttribute("preserveAspectRatio","none"))});a.hasAttribute("xmlns")||m||a.setAttribute("xmlns","http://www.w3.org/2000/svg");!d||a.hasAttribute("xmlns:xlink")||m||a.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink");a.setAttribute("version","1.1")};return g});