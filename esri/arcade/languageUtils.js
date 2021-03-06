// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/arcade/languageUtils","require exports ./FunctionWrapper ./ImmutableArray ./ImmutablePathArray ./ImmutablePointArray ./polyfill/promiseUtils ../geometry/Extent ../geometry/Geometry ../geometry/Multipoint ../geometry/Point ../geometry/Polygon ../geometry/Polyline ../libs/luxon/luxon dojo/number dojo/_base/kernel".split(" "),function(G,d,da,y,ea,B,fa,P,H,Q,C,I,R,D,S,ha){function A(a,b,c){return""===b||null===b||void 0===b||b===c||b===c?a:a=a.split(b).join(c)}function J(a){return a instanceof
K||a instanceof da||a instanceof L}function T(a){return n(a)||r(a)||p(a)||t(a)||null===a||a===d.voidOperation||"number"===typeof a?!0:!1}function n(a){return"string"===typeof a||a instanceof String}function t(a){return"boolean"===typeof a}function r(a){return"number"===typeof a}function u(a){return a instanceof Array}function x(a){return a instanceof y}function p(a){return a instanceof Date}function M(a,b){if(!1===isNaN(a)){if(void 0===b||null===b||""===b)return a.toString();b=A(b,"\u2030","");b=
A(b,"\u00a4","");return S.format(a,{pattern:b})}return a.toString()}function E(a,b){a=D.DateTime.fromJSDate(a);return void 0===b||null===b||""===b?a.toISO({suppressMilliseconds:!0}):a.toFormat(U(b),{locale:ha.locale,numberingSystem:"latn"})}function U(a){a=a.replace(/LTS|LT|LL?L?L?|l{1,4}/g,"[$\x26]");var b="",c=0;for(a=a.match(/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g);c<
a.length;c++){var e=a[c];switch(e){case "D":b+="d";break;case "DD":b+="dd";break;case "DDD":b+="o";break;case "d":b+="c";break;case "ddd":b+="ccc";break;case "dddd":b+="cccc";break;case "M":b+="L";break;case "MM":b+="LL";break;case "MMM":b+="LLL";break;case "MMMM":b+="LLLL";break;case "YY":b+="yy";break;case "Y":case "YYYY":b+="yyyy";break;case "Q":b+="q";break;case "Z":b+="ZZ";break;case "ZZ":b+="ZZZ";break;case "S":b+="'S'";break;case "SS":b+="'SS'";break;case "SSS":b+="u";break;case "A":case "a":b+=
"a";break;case "m":case "mm":case "h":case "hh":case "H":case "HH":case "s":case "ss":case "X":case "x":b+=e;break;default:b=2<=e.length&&"["===e.slice(0,1)&&"]"===e.slice(-1)?b+("'"+e.slice(1,-1)+"'"):b+("'"+e+"'")}}return b}function k(a,b,c){switch(c){case "\x3e":return a>b;case "\x3c":return a<b;case "\x3e\x3d":return a>=b;case "\x3c\x3d":return a<=b}return!1}function V(a,b){if(a===b||null===a&&b===d.voidOperation||null===b&&a===d.voidOperation)return!0;if(p(a)&&p(b))return a.getTime()===b.getTime();
if(a instanceof ea||a instanceof B)return a.equalityTest(b);if(a instanceof C&&b instanceof C){var c=a.getCacheValue("_arcadeCacheId"),e=b.getCacheValue("_arcadeCacheId");if(void 0!==c&&null!==c)return c===e}return void 0!==a&&void 0!==b&&null!==a&&null!==b&&"object"===typeof a&&"object"===typeof b&&(a._arcadeCacheId===b._arcadeCacheId&&void 0!==a._arcadeCacheId&&null!==a._arcadeCacheId||a._underlyingGraphic===b._underlyingGraphic&&void 0!==a._underlyingGraphic&&null!==a._underlyingGraphic)?!0:!1}
function w(a,b){if(n(a))return a;if(null===a)return"";if(r(a))return M(a,b);if(t(a))return a.toString();if(p(a))return E(a,b);if(a instanceof H)return JSON.stringify(a.toJson());if(u(a)){b=[];for(var c=0;c<a.length;c++)b[c]=F(a[c]);return"["+b.join(",")+"]"}if(a instanceof y){b=[];for(c=0;c<a.length();c++)b[c]=F(a.get(c));return"["+b.join(",")+"]"}return null!==a&&"object"===typeof a&&void 0!==a.castToText?a.castToText():J(a)?"object, Function":""}function W(a,b){if(n(a))return a;if(null===a)return"";
if(r(a))return M(a,b);if(t(a))return a.toString();if(p(a))return E(a,b);if(a instanceof H)return a instanceof P?'{"xmin":'+a.xmin.toString()+',"ymin":'+a.ymin.toString()+","+(a.hasZ?'"zmin":'+a.zmin.toString()+",":"")+(a.hasM?'"mmin":'+a.mmin.toString()+",":"")+'"xmax":'+a.xmax.toString()+',"ymax":'+a.ymax.toString()+","+(a.hasZ?'"zmax":'+a.zmax.toString()+",":"")+(a.hasM?'"mmax":'+a.mmax.toString()+",":"")+'"spatialReference":'+N(a.spatialReference)+"}":N(a.toJson(),function(e,f){return e.key===
f.key?0:"spatialReference"===e.key?1:"spatialReference"===f.key||e.key<f.key?-1:e.key>f.key?1:0});if(u(a)){b=[];for(var c=0;c<a.length;c++)b[c]=F(a[c]);return"["+b.join(",")+"]"}if(a instanceof y){b=[];for(c=0;c<a.length();c++)b[c]=F(a.get(c));return"["+b.join(",")+"]"}return null!==a&&"object"===typeof a&&void 0!==a.castToText?a.castToText():J(a)?"object, Function":""}function F(a){return null===a?"null":t(a)||r(a)||n(a)?JSON.stringify(a):a instanceof H||a instanceof y||a instanceof Array?W(a):a instanceof
Date?JSON.stringify(E(a,"")):null!==a&&"object"===typeof a&&void 0!==a.castToText?a.castToText():"null"}function m(a,b){return r(a)?a:null===a||""===a?0:p(a)?NaN:t(a)?a?1:0:u(a)||""===a||void 0===a?NaN:void 0!==b&&n(a)?(b=A(b,"\u2030",""),b=A(b,"\u00a4",""),S.parse(a,{pattern:b})):a===d.voidOperation?0:Number(a)}function X(a){var b=/ (\d\d)/,c=D.DateTime.fromISO(a);return c.isValid||b.test(a)&&(a=a.replace(b,"T$1"),c=D.DateTime.fromISO(a),c.isValid)?c:null}function Y(a,b){var c;b.fields.some(function(e){e.name.toLowerCase()===
a.toLowerCase()&&(c=e.domain);return!!c});return c}function N(a,b){b||(b={});"function"===typeof b&&(b={cmp:b});var c="boolean"===typeof b.cycles?b.cycles:!1,e=b.cmp&&function(h){return function(g){return function(l,q){return h({key:l,value:g[l]},{key:q,value:g[q]})}}}(b.cmp),f=[];return function l(g){g&&g.toJson&&"function"===typeof g.toJson&&(g=g.toJson());if(void 0!==g){if("number"===typeof g)return isFinite(g)?""+g:"null";if("object"!==typeof g)return JSON.stringify(g);var q;if(Array.isArray(g)){var v=
"[";for(q=0;q<g.length;q++)q&&(v+=","),v+=l(g[q])||"null";return v+"]"}if(null===g)return"null";if(-1!==f.indexOf(g)){if(c)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON");}var ia=f.push(g)-1,Z=Object.keys(g).sort(e&&e(g));v="";for(q=0;q<Z.length;q++){var aa=Z[q],ba=l(g[aa]);ba&&(v&&(v+=","),v+=JSON.stringify(aa)+":"+ba)}f.splice(ia,1);return"{"+v+"}"}}(a)}function z(a,b){if(b instanceof C)a.push([b.x,b.y]);else throw Error("Invalid Argument");}Object.defineProperty(d,
"__esModule",{value:!0});d.binaryOperator=d.tick=d.toStringArray=d.autoCastArrayOfPointsToMultiPoint=d.autoCastArrayOfPointsToPolyline=d.autoCastArrayOfPointsToPolygon=d.autoCastFeatureToGeometry=d.stableStringify=d.getDomain=d.getDomainCode=d.getDomainValue=d.fixNullGeometry=d.fixSpatialReference=d.toBoolean=d.toDateTime=d.toDate=d.toNumber=d.toStringExplicit=d.toNumberArray=d.toString=d.equalityTest=d.greaterThanLessThan=d.standardiseDateFormat=d.formatDate=d.formatNumber=d.generateUUID=d.absRound=
d.pcCheck=d.isDate=d.isImmutableArray=d.isFeatureSetCollection=d.isFeatureSet=d.isArray=d.isInteger=d.isNumber=d.isBoolean=d.isString=d.defaultUndefined=d.isSimpleType=d.isFunctionParameter=d.multiReplace=d.continueResult=d.breakResult=d.voidOperation=d.SizzleFunction=d.ReturnResult=d.ImplicitResult=d.NativeFunction=d.SizzleFunctionE=d.NativeFunctionE=d.ImplicitResultE=d.ReturnResultE=void 0;G=function(){return function(a){this.value=a}}();d.ReturnResultE=G;var ca=function(){return function(a){this.value=
a}}();d.ImplicitResultE=ca;var K=function(){return function(a){this.fn=a}}();d.NativeFunctionE=K;var L=function(){return function(a){this.fn=a}}();d.SizzleFunctionE=L;d.NativeFunction=K;d.ImplicitResult=ca;d.ReturnResult=G;d.SizzleFunction=L;d.voidOperation={type:"VOID"};d.breakResult={type:"BREAK"};d.continueResult={type:"CONTINUE"};d.multiReplace=A;d.isFunctionParameter=J;d.isSimpleType=T;d.defaultUndefined=function(a,b){return void 0===a?b:a};d.isString=n;d.isBoolean=t;d.isNumber=r;d.isInteger=
function(a){return"number"===typeof a&&isFinite(a)&&Math.floor(a)===a};d.isArray=u;d.isFeatureSet=function(a){return!0===(a&&a.declaredRootClass&&"esri.arcade.featureset.support.FeatureSet"===a.declaredRootClass)};d.isFeatureSetCollection=function(a){return!0===(a&&a.declaredRootClass&&"esri.arcade.featureSetCollection"===a.declaredRootClass)};d.isImmutableArray=x;d.isDate=p;d.pcCheck=function(a,b,c){if(a.length<b||a.length>c)throw Error("Function called with wrong number of Parameters");};d.absRound=
function(a){return 0>a?-Math.round(-a):Math.round(a)};d.generateUUID=function(){var a=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(b){var c=(a+16*Math.random())%16|0;a=Math.floor(a/16);return("x"===b?c:c&3|8).toString(16)})};d.formatNumber=M;d.formatDate=E;d.standardiseDateFormat=U;d.greaterThanLessThan=function(a,b,c){if(null===a){if(null===b||b===d.voidOperation)return k(null,null,c);if(r(b))return k(0,b,c);if(n(b)||t(b))return k(0,m(b),c);if(p(b))return k(0,
b.getTime(),c)}if(a===d.voidOperation){if(null===b||b===d.voidOperation)return k(null,null,c);if(r(b))return k(0,b,c);if(n(b)||t(b))return k(0,m(b),c);if(p(b))return k(0,b.getTime(),c)}else if(r(a)){if(r(b))return k(a,b,c);if(t(b))return k(a,m(b),c);if(null===b||b===d.voidOperation)return k(a,0,c);if(n(b))return k(a,m(b),c);if(p(b))return k(a,b.getTime(),c)}else if(n(a)){if(n(b))return k(w(a),w(b),c);if(p(b))return k(m(a),b.getTime(),c);if(r(b))return k(m(a),b,c);if(null===b||b===d.voidOperation)return k(m(a),
0,c);if(t(b))return k(m(a),m(b),c)}else if(p(a)){if(p(b))return k(a,b,c);if(null===b||b===d.voidOperation)return k(a.getTime(),0,c);if(r(b))return k(a.getTime(),b,c);if(t(b)||n(b))return k(a.getTime(),m(b),c)}else if(t(a)){if(t(b))return k(a,b,c);if(r(b))return k(m(a),m(b),c);if(p(b))return k(m(a),b.getTime(),c);if(null===b||b===d.voidOperation)return k(m(a),0,c);if(n(b))return k(m(a),m(b),c)}return!V(a,b)||"\x3c\x3d"!==c&&"\x3e\x3d"!==c?!1:!0};d.equalityTest=V;d.toString=w;d.toNumberArray=function(a){var b=
[];if(!1===u(a))return null;if(a instanceof y){for(var c=0;c<a.length();c++)b[c]=m(a.get(c));return b}for(c=0;c<a.length;c++)b[c]=m(a[c]);return b};d.toStringExplicit=W;d.toNumber=m;d.toDate=function(a){return p(a)?a:n(a)&&(a=X(a))?a.toJSDate():null};d.toDateTime=function(a){return p(a)?D.DateTime.fromJSDate(a):n(a)?X(a):null};d.toBoolean=function(a){return t(a)?a:n(a)?(a=a.toLowerCase(),"true"===a?!0:!1):r(a)?0===a||isNaN(a)?!1:!0:!1};d.fixSpatialReference=function(a,b){if(null===a||void 0===a)return null;
if(null===a.spatialReference||void 0===a.spatialReference)a.spatialReference=b;return a};d.fixNullGeometry=function(a){if(null===a)return null;if(a instanceof C)return"NaN"===a.x||null===a.x||isNaN(a.x)?null:a;if(a instanceof I){if(0===a.rings.length)return null;for(var b=0,c=a.rings;b<c.length;b++){var e=c[b];if(0<e.length)return a}return null}if(a instanceof R){if(0===a.paths.length)return null;b=0;for(c=a.paths;b<c.length;b++)if(e=c[b],0<e.length)return a;return null}return a instanceof Q?0===
a.points.length?null:a:a instanceof P?"NaN"===a.xmin||null===a.xmin||isNaN(a.xmin)?null:a:null};d.getDomainValue=function(a,b){if(!a||!a.domain)return b;var c=null;if("string"===a.field.type||"esriFieldTypeString"===a.field.type)b=w(b);else{if(null===b||void 0===b)return null;if(""===b)return b;b=m(b)}for(var e=0;e<a.domain.codedValues.length;e++){var f=a.domain.codedValues[e];f.code===b&&(c=f)}return null===c?b:c.name};d.getDomainCode=function(a,b){if(!a||!a.domain)return b;var c=null;b=w(b);for(var e=
0;e<a.domain.codedValues.length;e++){var f=a.domain.codedValues[e];f.name===b&&(c=f)}return null===c?b:c.code};d.getDomain=function(a,b,c,e){void 0===c&&(c=null);if(!b||!b.fields)return null;for(var f=null,h=0;h<b.fields.length;h++){var g=b.fields[h];g.name.toLowerCase()===a.toString().toLowerCase()&&(f=g)}if(null===f)throw Error("Field not found");var l,q;e||(e=c&&b.typeIdField&&c._field(b.typeIdField));null!=e&&b.types.some(function(v){return v.id===e?((l=v.domains&&v.domains[f.name])&&"inherited"===
l.type&&(l=Y(f.name,b),q=!0),!0):!1});q||l||(l=Y(a,b));return{field:f,domain:l}};d.stableStringify=N;d.autoCastFeatureToGeometry=function(a){if(null===a)return null;for(var b=[],c=0;c<a.length;c++){var e=a[c];e&&(e.declaredClass&&"esri.arcade.Feature"===e.declaredClass||"FeatureSetReader"===e.type)?b.push(e.geometry()):b.push(e)}return b};d.autoCastArrayOfPointsToPolygon=function(a,b){if(u(a)||x(a)){var c=!1,e=!1,f=[];if(u(a)){for(var h=0;h<a.length;h++){var g=a[h];z(f,g)}0<f.length&&(b=a[0].spatialReference,
c=a[0].hasZ,e=a[0].hasM)}else if(a instanceof B)f=a._elements,0<f.length&&(c=a._hasZ,e=a._hasM,b=a.get(0).spatialReference);else if(x(a)){h=0;for(var l=a.toArray();h<l.length;h++)g=l[h],z(f,g);0<f.length&&(b=a.get(0).spatialReference,c=!0===a.get(0).hasZ,e=!0===a.get(0).hasM)}else throw Error("Invalid Argument");if(0===f.length)return null;!1===(new I({rings:[],spatialReference:{wkid:4326}})).isClockwise(f)&&(f=f.slice(0).reverse());return new I({rings:[f],spatialReference:b,hasZ:c,hasM:e})}return a};
d.autoCastArrayOfPointsToPolyline=function(a,b){if(u(a)||x(a)){var c=!1,e=!1,f=[];if(u(a)){for(var h=0;h<a.length;h++){var g=a[h];z(f,g)}0<f.length&&(b=a[0].spatialReference,c=!0===a[0].hasZ,e=!0===a[0].hasM)}else if(a instanceof B)f=a._elements,0<f.length&&(c=a._hasZ,e=a._hasM,b=a.get(0).spatialReference);else if(x(a)){h=0;for(var l=a.toArray();h<l.length;h++)g=l[h],z(f,g);0<f.length&&(b=a.get(0).spatialReference,c=!0===a.get(0).hasZ,e=!0===a.get(0).hasM)}return 0===f.length?null:new R({paths:[f],
spatialReference:b,hasZ:c,hasM:e})}return a};d.autoCastArrayOfPointsToMultiPoint=function(a,b){if(u(a)||x(a)){var c=!1,e=!1,f=[];if(u(a)){for(var h=0;h<a.length;h++){var g=a[h];z(f,g)}0<f.length&&(b=a[0].spatialReference,c=!0===a[0].hasZ,e=!0===a[0].hasM)}else if(a instanceof B)f=a._elements,0<f.length&&(c=a._hasZ,e=a._hasM,b=a.get(0).spatialReference);else if(x(a)){h=0;for(var l=a.toArray();h<l.length;h++)g=l[h],z(f,g);0<f.length&&(b=a.get(0).spatialReference,c=!0===a.get(0).hasZ,e=!0===a.get(0).hasM)}return 0===
f.length?null:new Q({points:f,spatialReference:b,hasZ:c,hasM:e})}return a};d.toStringArray=function(a,b){void 0===b&&(b=!1);var c=[];if(null===a)return c;if(!0===u(a)){for(var e=0;e<a.length;e++){var f=w(a[e]);""===f&&!0!==b||c.push(f)}return c}if(a instanceof y){for(e=0;e<a.length();e++)f=w(a.get(e)),""===f&&!0!==b||c.push(f);return c}return T(a)?(f=w(a),""===f&&!0!==b||c.push(f),c):[]};var O=0;d.tick=function(a){O++;return 0===O%100?(O=0,fa.create(function(b){setTimeout(function(){b(a)},0)})):a};
d.binaryOperator=function(a,b,c){switch(c){case "\x26":return a&b;case "|":return a|b;case "^":return a^b;case "\x3c\x3c":return a<<b;case "\x3e\x3e":return a>>b;case "\x3e\x3e\x3e":return a>>>b}}});