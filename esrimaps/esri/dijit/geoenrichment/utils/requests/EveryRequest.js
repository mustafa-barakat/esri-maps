// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/requests/EveryRequest",["dojo/_base/declare","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when"],function(k,l,m){var n=k(null,{requests:null,results:null,requestCount:0,chunkSize:0,stopOnError:!1,onProgress:null,index:0,completeCount:0,executeCount:0,isExecuting:!1,dfd:null,constructor:function(b,a,c,d,e){this.requests=b;this.results=a;this.requestCount=this.requests.length;this.chunkSize=Math.max(c,0);this.stopOnError=d;this.onProgress=e},execute:function(){this.isExecuting=
!0;for(this.dfd=new l;this.tryStartNextRequest(););return this.dfd.promise},tryStartNextRequest:function(){if(!this.isExecuting)return!1;if(this.index==this.requestCount&&!this.executeCount)return this.isExecuting=!1,this.dfd.resolve(this.results),!1;if(this.index==this.requestCount||this.executeCount==this.chunkSize)return!1;var b=this.requests[this.index++];this.executeCount++;var a=b.request;"function"===typeof a&&(a=a());var c=this,d=!0;m(a,function(e){c.processResult(e,b.key,e instanceof Error,
d)},function(e){c.processResult(e,b.key,!0,d)});d=!1;return!0},processResult:function(b,a,c,d){if(this.isExecuting)if(c&&this.stopOnError)this.isExecuting=!1,this.onProgress&&this.onProgress(1),this.dfd.reject(b);else if(this.results[a]=b,this.completeCount++,this.executeCount--,this.onProgress&&this.onProgress(this.completeCount/this.requestCount),!d)for(;this.tryStartNextRequest(););}});return function(b,a){var c=!1,d=10,e=null;"boolean"===typeof a?c=a:a&&("number"===typeof a.chunkSize&&(d=a.chunkSize),
"boolean"===typeof a.stopOnError&&(c=a.stopOnError),"function"===typeof a.onProgress&&(e=a.onProgress));var f=[];if(Array.isArray(b)){var g=[];b.forEach(function(p,q){f.push({key:q,request:p})})}else for(var h in b)g={},f.push({key:h,request:b[h]});return(new n(f,g,d,c,e)).execute()}});