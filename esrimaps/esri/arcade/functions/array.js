// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/arcade/functions/array",["require","exports","../languageUtils"],function(p,l,c){Object.defineProperty(l,"__esModule",{value:!0});l.registerFunctions=void 0;l.registerFunctions=function(g,h){g.array=function(e,f){return h(e,f,function(b,d,a){c.pcCheck(a,1,2);b=c.toNumber(a[0]);if(isNaN(b)||!1===c.isInteger(b))throw Error("Invalid Parameter");a=c.defaultUndefined(a[1],null);b=Array(b);b.fill(a);return b})};g.front=function(e,f){return h(e,f,function(b,d,a){c.pcCheck(a,1,1);if(c.isImmutableArray(a[0])){if(0>=
a[0].length())throw Error("Array is empty");return a[0].get(0)}if(c.isArray(a[0])){if(0>=a[0].length)throw Error("Array is empty");return a[0][0]}throw Error("Invalid Parameter");})};g.back=function(e,f){return h(e,f,function(b,d,a){c.pcCheck(a,1,1);if(c.isImmutableArray(a[0])){if(0>=a[0].length())throw Error("Array is empty");return a[0].get(a[0].length()-1)}if(c.isArray(a[0])){if(0>=a[0].length)throw Error("Array is empty");return a[0][a[0].length-1]}throw Error("Invalid Parameter");})};g.push=
function(e,f){return h(e,f,function(b,d,a){c.pcCheck(a,1,2);if(c.isArray(a[0]))return a[0][a[0].length]=a[1],a[0].length;throw Error("Invalid Parameter");})};g.pop=function(e,f){return h(e,f,function(b,d,a){c.pcCheck(a,1,1);if(c.isArray(a[0])){if(0>=a[0].length)throw Error("Array is empty");b=a[0][a[0].length-1];--a[0].length;return b}throw Error("Invalid Parameter");})};g.erase=function(e,f){return h(e,f,function(b,d,a){c.pcCheck(a,2,2);if(c.isArray(a[0])){b=c.toNumber(a[1]);if(isNaN(b)||!1===c.isInteger(b))throw Error("Invalid Parameter");
a=a[0];if(0>=a.length)throw Error("Array is empty");0>b&&(b=a.length+b);if(0>b)throw Error("Element not found");if(b>=a.length)throw Error("Index is greater than array");a.splice(b,1);return c.voidOperation}throw Error("Invalid Parameter");})};g.insert=function(e,f){return h(e,f,function(b,d,a){c.pcCheck(a,3,3);if(c.isArray(a[0])){b=c.toNumber(a[1]);if(isNaN(b)||!1===c.isInteger(b))throw Error("Invalid Parameter");d=a[2];a=a[0];if(b>a.length)throw Error("Index is greater than array");if(0>b&&b<-1*
a.length)throw Error("Index is greater than array");if(b===a.length)return a[b]=d,c.voidOperation;a.splice(b,0,d);return c.voidOperation}throw Error("Invalid Parameter");})};g.resize=function(e,f){return h(e,f,function(b,d,a){c.pcCheck(a,2,3);if(c.isArray(a[0])){d=c.toNumber(a[1]);if(isNaN(d)||!1===c.isInteger(d))throw Error("Invalid Parameter");if(0>d)throw Error("Size cannot be negative");b=c.defaultUndefined(a[2],null);a=a[0];if(a.length>=d)return a.length=d,c.voidOperation;var k=a.length;a.length=
d;for(d=k;d<a.length;d++)a[d]=b;return c.voidOperation}throw Error("Invalid Parameter");})};g.includes=function(e,f){return h(e,f,function(b,d,a){c.pcCheck(a,2,2);if(c.isArray(a[0])){var k=a[1];b=a[0];return-1<b.findIndex(function(m){return c.equalityTest(m,k)})?!0:!1}if(c.isImmutableArray(a[0])){var n=a[1];b=a[0].toArray();return-1<b.findIndex(function(m){return c.equalityTest(m,n)})?!0:!1}throw Error("Invalid Parameter");})};g.slice=function(e,f){return h(e,f,function(b,d,a){c.pcCheck(a,1,3);if(c.isArray(a[0])){b=
c.toNumber(c.defaultUndefined(a[1],0));d=c.toNumber(c.defaultUndefined(a[2],a[0].length));if(isNaN(b)||!1===c.isInteger(b))throw Error("Invalid Parameter");if(isNaN(d)||!1===c.isInteger(d))throw Error("Invalid Parameter");var k=a[0];return k.slice(b,d)}if(c.isImmutableArray(a[0])){k=a[0];b=c.toNumber(c.defaultUndefined(a[1],0));d=c.toNumber(c.defaultUndefined(a[2],k.length()));if(isNaN(b)||!1===c.isInteger(b))throw Error("Invalid Parameter");if(isNaN(d)||!1===c.isInteger(d))throw Error("Invalid Parameter");
return k.toArray().slice(b,d)}throw Error("Invalid Parameter");})};g.splice=function(e,f){return h(e,f,function(b,d,a){b=[];for(d=0;d<a.length;d++)c.isArray(a[d])?b.push.apply(b,a[d]):c.isImmutableArray(a[d])?b.push.apply(b,a[d].toArray()):b.push(a[d]);return b})}}});