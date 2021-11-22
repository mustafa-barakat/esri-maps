// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/tasks/Geoprocessor","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/Deferred dojo/_base/json dojo/has dojo/io-query ../kernel ../request ../deferredUtils ../geometry/normalizeUtils ./Task ./FeatureSet ./JobInfo ./GPMessage ./LinearUnit ./DataFile ./RasterData ./Date ./ParameterValue ./GPResultImageLayer ../layers/ArcGISDynamicMapServiceLayer ../layers/MapImage".split(" "),function(p,l,v,t,q,w,x,y,n,u,z,A,B,r,C,D,E,F,G,H,I,J,K){p=p(A,{declaredClass:"esri.tasks.Geoprocessor",
_eventMap:{"execute-complete":["results","messages"],"get-result-data-complete":["result"],"get-result-image-complete":["mapImage"],"get-result-image-layer-complete":["layer"],"job-cancel":["jobInfo"],"job-complete":["jobInfo"],"status-update":["jobInfo"]},constructor:function(a){this._jobUpdateHandler=l.hitch(this,this._jobUpdateHandler);this._getJobStatus=l.hitch(this,this._getJobStatus);this._getResultDataHandler=l.hitch(this,this._getResultDataHandler);this._getResultImageHandler=l.hitch(this,
this._getResultImageHandler);this._executeHandler=l.hitch(this,this._executeHandler);this._updateTimers=[];this.registerConnectEvents()},updateDelay:1E3,processSpatialReference:null,outputSpatialReference:null,outSpatialReference:null,setUpdateDelay:function(a){this.updateDelay=a},setProcessSpatialReference:function(a){this.processSpatialReference=a},setOutputSpatialReference:function(a){this._setOutSR(a)},setOutSpatialReference:function(a){this._setOutSR(a)},__msigns:[{n:"execute",c:3,a:[{i:0,p:["*"]}],
e:2,f:1},{n:"submitJob",c:4,a:[{i:0,p:["*"]}],e:3}],_setOutSR:function(a){this.outSpatialReference=this.outputSpatialReference=a},_getOutSR:function(){return this.outSpatialReference||this.outputSpatialReference},_gpEncode:function(a,c,b){for(var f in a){var d=a[f];l.isArray(d)?a[f]=q.toJson(v.map(d,function(e){return this._gpEncode({item:e},!0).item},this)):d instanceof Date&&(a[f]=d.getTime())}return this._encode(a,c,b)},_decode:function(a){var c=a.dataType,b=new H(a);if(-1!==v.indexOf(["GPBoolean",
"GPDouble","GPLong","GPString"],c))return b;if("GPLinearUnit"===c)b.value=new D(b.value);else if("GPFeatureRecordSetLayer"===c||"GPRecordSet"===c)b.value=new B(b.value);else if("GPDataFile"===c)b.value=new E(b.value);else if("GPDate"===c)a=b.value,l.isString(a)?b.value=new G({date:a}):b.value=new Date(a);else if("GPRasterData"===c||"GPRasterDataLayer"===c)a=a.value.mapImage,b.value=a?new K(a):new F(b.value);else if(-1!==c.indexOf("GPMultiValue:")){var f=c.split(":")[1];a=b.value;b.value=v.map(a,function(d){return this._decode({paramName:"_name",
dataType:f,value:d}).value},this)}else console.log(this.declaredClass+" : GP Data type not handled. : "+b.dataType),b=null;return b},submitJob:function(a,c,b,f,d){var e=this._getOutSR(),g=d.assembly;a=this._gpEncode(l.mixin({},this._url.query,{f:"json","env:outSR":e?e.wkid||q.toJson(e.toJson()):null,"env:processSR":this.processSpatialReference?this.processSpatialReference.wkid||q.toJson(this.processSpatialReference.toJson()):null},a),null,g&&g[0]);var h=this._jobUpdateHandler,k=this._errorHandler;
return n({url:this._url.path+"/submitJob",content:a,callbackParamName:"callback",load:function(m,L){h(m,L,!1,c,b,d.dfd)},error:function(m){k(m,f,d.dfd)}})},_jobUpdateHandler:function(a,c,b,f,d,e){var g=a.jobId;c=new r(a);this._successHandler([c],"onStatusUpdate",d,b&&e);if(!b)switch(clearTimeout(this._updateTimers[g]),this._updateTimers[g]=null,e&&e.progress(c),a.jobStatus){case r.STATUS_SUBMITTED:case r.STATUS_EXECUTING:case r.STATUS_WAITING:case r.STATUS_NEW:var h=this._getJobStatus;this._updateTimers[g]=
setTimeout(function(){h(g,b,f,d,e)},this.updateDelay);break;default:this._successHandler([c],"onJobComplete",f,e)}},_getJobStatus:function(a,c,b,f,d){var e=this._jobUpdateHandler;n({url:this._url.path+"/jobs/"+a,content:l.mixin({},this._url.query,{f:"json"}),callbackParamName:"callback",load:function(g,h){e(g,h,c,b,f,d)},error:this._errorHandler})},_getResultDataHandler:function(a,c,b,f,d){try{var e=this._decode(a);this._successHandler([e],"onGetResultDataComplete",b,d)}catch(g){this._errorHandler(g,
f,d)}},getResultData:function(a,c,b,f){var d=this._getResultDataHandler,e=this._errorHandler,g=new t(u._dfdCanceller);g._pendingDfd=n({url:this._url.path+"/jobs/"+a+"/results/"+c,content:l.mixin({},this._url.query,{f:"json",returnType:"data"}),callbackParamName:"callback",load:function(h,k){d(h,k,b,f,g)},error:function(h){e(h,f,g)}});return g},checkJobStatus:function(a,c,b){var f=this._jobUpdateHandler,d=this._errorHandler,e=new t(u._dfdCanceller);e._pendingDfd=n({url:this._url.path+"/jobs/"+a,content:l.mixin({},
this._url.query,{f:"json"}),callbackParamName:"callback",load:function(g,h){f(g,h,!0,null,c,e)},error:function(g){d(g,b,e)}});return e},cancelJob:function(a,c,b){var f=this._errorHandler,d=new t(u._dfdCanceller);d._pendingDfd=n({url:this._url.path+"/jobs/"+a+"/cancel",content:l.mixin({},this._url.query,{f:"json"}),callbackParamName:"callback",load:l.hitch(this,function(e,g){this._successHandler([e],"onJobCancel",c,d)}),error:function(e){f(e,b,d)}});return d},execute:function(a,c,b,f){var d=this._getOutSR(),
e=f.assembly;a=this._gpEncode(l.mixin({},this._url.query,{f:"json","env:outSR":d?d.wkid||q.toJson(d.toJson()):null,"env:processSR":this.processSpatialReference?this.processSpatialReference.wkid||q.toJson(this.processSpatialReference.toJson()):null},a),null,e&&e[0]);var g=this._executeHandler,h=this._errorHandler;return n({url:this._url.path+"/execute",content:a,callbackParamName:"callback",load:function(k,m){g(k,m,c,b,f.dfd)},error:function(k){h(k,b,f.dfd)}})},_executeHandler:function(a,c,b,f,d){try{var e=
a.results,g,h=a.messages;var k=0;for(g=e.length;k<g;k++)e[k]=this._decode(e[k]);k=0;for(g=h.length;k<g;k++)h[k]=new C(h[k]);this._successHandler([e,h],"onExecuteComplete",b,d)}catch(m){this._errorHandler(m,f,d)}},_getResultImageHandler:function(a,c,b,f,d){try{var e=this._decode(a);this._successHandler([e],"onGetResultImageComplete",b,d)}catch(g){this._errorHandler(g,f,d)}},getResultImage:function(a,c,b,f,d){var e=this._getResultImageHandler,g=this._errorHandler;b=this._gpEncode(l.mixin({},this._url.query,
{f:"json"},b.toJson()));var h=new t(u._dfdCanceller);h._pendingDfd=n({url:this._url.path+"/jobs/"+a+"/results/"+c,content:b,callbackParamName:"callback",load:function(k,m){e(k,m,f,d,h)},error:function(k){g(k,d,h)}});return h},cancelJobStatusUpdates:function(a){clearTimeout(this._updateTimers[a]);this._updateTimers[a]=null},getResultImageLayer:function(a,c,b,f){if(null==c){var d=this._url.path.indexOf("/GPServer/");a=this._url.path.substring(0,d)+"/MapServer/jobs/"+a}else a=this._url.path+"/jobs/"+
a+"/results/"+c;this._url.query&&(a+="?"+x.objectToQuery(this._url.query));c=null==c?new J(a,{imageParameters:b}):new I(a,{imageParameters:b},!0);this.onGetResultImageLayerComplete(c);f&&f(c);return c},onStatusUpdate:function(){},onJobComplete:function(){},onExecuteComplete:function(){},onGetResultDataComplete:function(){},onGetResultImageComplete:function(){},onGetResultImageLayerComplete:function(){},onJobCancel:function(){}});z._createWrappers(p);w("extend-esri")&&l.setObject("tasks.Geoprocessor",
p,y);return p});