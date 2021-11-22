// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/ReportTemplateData","dojo/_base/declare dojo/_base/lang dojo/request/xhr esri/dijit/geoenrichment/promise/all esri/kernel esri/request esri/urlUtils esri/dijit/geoenrichment/utils/DataUtil esri/dijit/geoenrichment/utils/PortalUtil esri/dijit/geoenrichment/utils/UrlUtil esri/dijit/geoenrichment/utils/requests/FileContent esri/dijit/geoenrichment/utils/requests/UniversalClient".split(" "),function(e,n,p,q,g,r,t,h,u,k,v,l){function m(a,
b){var d=a.substr(a.lastIndexOf("/")+1),c=t.getProxyRule(a);return p(c&&c.proxyUrl?c.proxyUrl+"?"+a:a,{method:"POST",handleAs:"arraybuffer",data:"token\x3d"+b,headers:{"X-Requested-With":null,"Content-Type":"application/x-www-form-urlencoded; charset\x3dutf-8"}}).then(function(f){var w=!/\.xml$|\.txt$|\.json$/i.test(d);return{name:d,data:w?h.base64FromByteSource(f):decodeURIComponent(escape(h.binaryStringFromByteSource(f)))}})}e=e(null,{id:null,_portalUrl:null,_baseUrl:null,constructor:function(a,
b){this.id=a.id;this._portalUrl=b;this._baseUrl=k.combine(this._portalUrl,"sharing/rest")},getFiles:function(){var a=this;return this._getResources().then(function(b){var d=[];b.map(function(c){c=c.resource;"thumbnail.png"!==c&&d.push(a.getFileByName(c))});return q(d)})},getFileByName:function(a){return m(this.getItemResourceUrl(a,!1),this._getToken())},getItemResourceUrl:function(a,b){a=this._baseUrl+"/"+this._contentItemPath(this.id+"/resources/"+a);return b?k.addQueryPart(a,"token\x3d"+this._getToken()):
a},updateFile:function(a,b){var d=this;return l.request({url:this._baseUrl,urlSuffix:"content/items/"+this.id}).then(function(c){var f=v.fromFileData(a,b);return l.request({url:d._baseUrl,urlSuffix:"content/users/"+c.owner+"/"+c.ownerFolder+"/items/"+d.id+"/updateResources"},{content:{file:f,filename:a}})})},_contentItemPath:function(a){return"content/items/"+a},_getToken:function(){var a=g.id.findCredential(this._portalUrl)||g.id.credentials[0];return a&&a.token},_getResources:function(){var a=this;
return u.query(function(b){return r({url:a._baseUrl+"/"+a._contentItemPath(a.id+"/resources"),content:n.mixin({f:"json",token:a._getToken()},b),handleAs:"json"},{usePost:!0})},null,"resources").then(function(b){return b.resources})},getPortalUrl:function(a){return a?/[^:]+:\/\/(.+)$/i.exec(this._portalUrl)[1]:this._portalUrl}});e.loadResource=m;return e});