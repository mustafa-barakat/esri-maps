// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/htmlToSvg/supportClasses/imageUtils/ImageReplacer","esri/dijit/geoenrichment/Deferred esri/dijit/geoenrichment/when esri/dijit/geoenrichment/promise/all ../dom-style ../VisibilityChecker ../../../ImageInfoUtil".split(" "),function(n,p,m,v,q,r){var t={},w=/^data:/i,u=/dijit\/geoenrichment\//i,x=/^url\s*\(/i,y=/url\(["']data:|url\(data:/i,l={getImages:function(c,e,a){c=c.getElementsByTagName("img");for(var d=[],b=0;b<c.length;b++){var f=c[b];w.test(f.src)===!!e&&
q.checkNode(f)&&(e||!a||u.test(f.src))&&d.push(c[b])}return d},getBackgroundImageNodes:function(c,e,a){function d(f){if(f&&f.children)for(var h=0;h<f.children.length;h++){var g=f.children[h];if("IMG"!==g.nodeName&&q.checkNode(g)){var k=v.get(g,"backgroundImage");if(k&&x.test(k)&&y.test(k)===!!e){g.__url=k.replace(/^url\s*\(/i,"").replace(")","").replace(/"/g,"").trim();if(!e&&a&&!u.test(g.__url))continue;b.push(g)}d(g)}}}var b=[];d(c);return b}},z={replaceImages:function(c,e){return m(c.map(function(a){return p(r.getRemoteImageDataUrl(a.src),
function(d){function b(){e.hideUrlImages&&(a.style.display="none")}if(d!==a.src){var f=a.src,h=new n;a.onload=function(){a.onload=a.onerror=null;h.resolve()};a.onerror=function(){a.onload=a.onerror=null;a.src=f;b()};a.src=d;return h.promise}b()})}))}},A={replaceBackgroundNodes:function(c,e){return m(c.map(function(a){var d=a.__url;delete a.__url;return p(r.getRemoteImageDataUrl(d),function(b){if(b!==d)return a.style.backgroundImage="url("+b+")",b=new n,setTimeout(b.resolve),b.promise;e.hideUrlImages&&
(a.style.display="none")})}))}},B={replaceWithItemResourceUrls:function(c,e,a){c.forEach(function(d){var b=a.getItemResourceUrl(d.src);b&&(d.src=b)});e.forEach(function(d){var b=d.__url;delete d.__url;if(b=a.getItemResourceUrl(b))d.style.backgroundImage="url("+b+")"})}};t.replaceImagesWithDataURL=function(c,e){var a=l.getImages(c,!1,!e.convertUrlImages),d=l.getBackgroundImageNodes(c,!1,!e.convertUrlImages),b=e.getItemResourceUrl&&l.getImages(c,!0);c=e.getItemResourceUrl&&l.getBackgroundImageNodes(c,
!0);return m([a&&z.replaceImages(a,e),d&&A.replaceBackgroundNodes(d,e),(b||c)&&B.replaceWithItemResourceUrls(b,c,e)])};return t});