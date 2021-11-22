// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/tasks/locationproviders/QueryTaskLocationProvider","../../declare dojo/_base/lang dojo/_base/array ../../tasks/query ../../request ../../SpatialReference ./LocationProviderRemoteBase".split(" "),function(q,n,h,r,t,u,v){return q("esri.tasks.locationproviders.QueryTaskLocationProvider",v,{queryTask:null,queryParameters:null,whereFields:null,unicode:!1,maxWhereLength:2E3,constructor:function(){this.queryParameters||(this.queryParameters={})},_getFieldMapping:function(){return this.whereFields},
_init:function(){if(this.queryTask&&this.queryTask.url){var a=this.getInherited(arguments);t({url:this.queryTask.url,callbackParamName:"callback",content:{f:"json"}}).then(n.hitch(this,function(b){this.geometryType=b.geometryType;a.call(this)}))}},_batchWillOverflow:function(a,b){a=h.map(a,function(e){return e.expression}).concat(b.expression);b=this.queryParameters.where?this.queryParameters.where.length+7:0;if(a.join(" OR ").length+b>this.maxWhereLength)return!0},_locateBatch:function(a,b){var e=
h.map(a,function(d){return d.expression}).join(" OR "),f=h.map(this._fields,function(d){return d.outField}),g=this.queryParameters.outFields?f.concat(h.filter(this.queryParameters.outFields,function(d){return-1===h.indexOf(f,d)})):f,k=n.hitch(this,function(d){if(d&&d.features)return d.exceededTransferLimit&&console.warn("exceededTransferLimit"),this._merge(a,d.features,f)}),c=new r;c.where=this.queryParameters.where?this.queryParameters.where+" AND ("+e+")":e;c.outFields=g;c.outSpatialReference=b.outSpatialReference||
new u(4326);c.geometry=this.queryParameters.geometry;c.returnGeometry=!1===this.queryParameters.returnGeometry?!1:!0;c.maxAllowableOffset=this.queryParameters.maxAllowableOffset;return this.queryTask.execute(c).then(k)},_merge:function(a,b,e){for(var f=[],g=0;g<a.length;g++)for(var k=a[g],c=0;c<b.length;c++){var d=b[c],l=this._createKey(d,e);if(k.key===l){for(c=0;c<k.features.length;c++){var m=k.features[c];if(l=d.geometry)m.geometry=l;h.forEach(this.queryParameters.outFields,function(p){m.attributes[p]=
d.attributes[p]});f.push(m)}break}}return f},_createQueryExpression:function(a){for(var b=[],e=0;e<this._fields.length;e++){var f=this._fields[e],g=a.attributes[f.inField];if(void 0!==g&&null!==g)b.push(f.outField+(this.unicode?"\x3dN'":"\x3d'")+this._escape(g)+"'");else return}return 1<b.length?"("+b.join(" AND ")+")":b[0]},_escape:function(a){return"string"===typeof a?a.replace(/'/g,"''"):a}})});