// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/workers/workers","require exports dojo/sniff dojo/promise/all ../Logger ../promiseUtils ./Connection ./RemoteClient ./WorkerOwner".split(" "),function(v,a,g,w,x,p,h,y,z){function q(){if(m)return m;for(var b=r+t,c=[],n=function(k){var e=z.create(k).then(function(d){return f[k]=d});c.push(e)},l=0;l<b;l++)n(l);return m=w(c).then(function(){})}Object.defineProperty(a,"__esModule",{value:!0});a.Connection=h;a.RemoteClient=y;(h=navigator.hardwareConcurrency)||(h=g("safari")&&
g("mac")||g("trident")?8:2);var r=g("esri-workers-debug")?1:Math.max(1,Math.ceil(h/2)),t=g("esri-workers-debug")?1:Math.max(1,Math.floor(h/2)),A=x.getLogger("esri.core.workers"),u=0,f=[];a.initialize=function(){q()};a.open=function(b,c,n){void 0===c&&(c={});if(Array.isArray(b))return new a.Connection(b.map(function(e){return new a.RemoteClient(e,c.client)}));if("string"!==typeof b){A.warn("workers-open:signature-deprecated","DEPRECATED: workers.open() changed signature.");var l=b;b=c;c={client:l,
strategy:n?"dedicated":"distributed"}}var k=c.strategy||"distributed";return"local"===k?p.create(function(e){v([b],function(d){e(a.RemoteClient.connect(d))})}).then(function(e){return new a.Connection([new a.RemoteClient(e,c.client)])}):q().then(function(){if("dedicated"===k){var e=r+u++;u%=t;return f[e].open(b).then(function(d){return new a.Connection([new a.RemoteClient(d,c.client)])})}return p.all(f.map(function(d){return d.open(b)})).then(function(d){return new a.Connection(d.map(function(B){return new a.RemoteClient(B,
c.client)}))})})};a.terminate=function(){for(var b=0;b<f.length;b++)f[b]&&f[b].terminate();f.length=0};var m});