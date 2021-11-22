// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/requests/MultipartDataBuilder",["dojo/_base/declare","dojo/_base/lang","dojo/request/util","esri/lang","./FileContent"],function(h,l,f,m,n){function k(b,a){for(var d in a){var c=b[d],e=a[d];c!==e&&(c&&"object"===typeof c&&e&&"object"===typeof e?e instanceof Date?b[d]=new Date(e):k(c,e):b[d]=e)}return b}var g=h(null,{data:null,constructor:function(b){this.data=b}}),p=f.parseArgs;f.parseArgs=function(b,a,d){a.data&&a.data instanceof g&&(a.data=a.data.data,d=!0);
return p(b,a,d)};f.deepCreate=function(b,a){if(a instanceof g)return new g(a.data);a=a||{};var d=l.delegate(b),c,e;for(c in b)(e=b[c])&&"object"===typeof e&&(d[c]=f.deepCreate(e,a[c]));return k(d,a)};return h(null,{addVariables:function(b){for(var a in b)this.addVariable(a,b[a])},addVariable:function(b,a){m.isDefined(a)&&(a instanceof n?this._writeFileContent(b,a):this._writeVariable(b,a.toString()))},build:function(b){this._writeBoundary(!0);b.data=new g(this._prepareBinaryData());var a=b.headers||
{};a["Content-Type"]="multipart/form-data; boundary\x3d"+this._dataProvider.boundary;b.headers=a;this._dataProvider=null},_prepareBinaryData:function(){var b=this._dataProvider.buffer;if(!window.Uint8Array)return b;for(var a=b.length,d=new Uint8Array(new ArrayBuffer(a)),c=0;c<a;c++)d[c]=b.charCodeAt(c);return d},_dataProvider:null,_getDataProvider:function(){if(!this._dataProvider){for(var b="",a=0;32>a;a++)b+=String.fromCharCode(Math.floor(97+25*Math.random()));this._dataProvider={buffer:"",boundary:b}}return this._dataProvider},
_writeVariable:function(b,a){this._writeBoundary();this._writeContentDisposition(b);this._writeLineBreak();this._writeData(this._toUTF8(a));this._writeLineBreak()},_writeFileContent:function(b,a){this._writeBoundary();this._writeContentDisposition(b,a.filename);a.contentType&&(this._writeData("Content-Type: "+a.contentType),this._writeLineBreak());a.contentTransferEncoding&&(this._writeData("Content-Transfer-Encoding: "+a.contentTransferEncoding),this._writeLineBreak());this._writeLineBreak();this._writeData(a.data);
this._writeLineBreak()},_writeBoundary:function(b){this._writeDoubleDash();this._writeData(this._getDataProvider().boundary);b?this._writeDoubleDash():this._writeLineBreak()},_writeContentDisposition:function(b,a){a=a?'"; filename\x3d"'+this._toUTF8(a.replace(/"/g,"'")):"";this._writeData('Content-Disposition: form-data; name\x3d"'+this._toUTF8(b)+a+'"');this._writeLineBreak()},_writeDoubleDash:function(){this._writeData("--")},_writeLineBreak:function(){this._writeData("\r\n")},_writeData:function(b){this._getDataProvider().buffer+=
b},_toUTF8:function(b){return unescape(encodeURIComponent(b))}})});