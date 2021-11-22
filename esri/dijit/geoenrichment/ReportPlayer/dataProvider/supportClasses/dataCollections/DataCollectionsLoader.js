// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/dataCollections/DataCollectionsLoader","esri/dijit/geoenrichment/promise/all ../GEUtil ../ReportTemplateData esri/dijit/geoenrichment/utils/CacheUtil esri/dijit/geoenrichment/utils/JsonXmlConverter esri/dijit/geoenrichment/utils/UrlUtil".split(" "),function(v,q,w,x,k,r){return{canLoad:function(){return q.canMakeRequests()},loadVariables:function(c){var e=x.get("DataCollectionsLoader"),g="*"===c.outFields,b=g?["*"]:c.outFields,
l=c.countryID+";"+c.hierarchy+";"+b.join(";")+";"+!!c.forceLowerCase;e[l]||(g||(b=b.slice(),-1===b.indexOf("id")&&b.push("id")),e[l]=q.getDataCollections(c.countryID,c.hierarchy,{f:"json",outFields:g?"*":JSON.stringify(b),suppressNullValues:!0,AddDerivativeVariables:"all"}).then(function(d){var f={dataCollections:d,idToVariableCache:{},fullNameToVariableCache:{}};d.forEach(function(m){m.data.forEach(function(a){function h(n){return c.forceLowerCase?n.toLowerCase():n}function p(n){if(g)return Object.keys(n).length;
var t=0;b.forEach(function(y){void 0!==n[y]&&t++});return t}var u=f.idToVariableCache[h(a.id)];if(!u||p(a)>p(u))f.idToVariableCache[h(a.id)]=a;f.fullNameToVariableCache[h(m.dataCollectionID+"."+a.id)]=a})});return f}));return e[l]},loadCustomDataVariables:function(c,e){e=e||{};var g={idToVariableCache:{},fullNameToVariableCache:{}};return v(c.map(function(b){var l=r.combineMulti([b.url||e.portalUrl,"sharing/rest/content/items",b.itemid,"resources/metadata.xml"]);return w.loadResource(l,b.token||r.getToken(e.portalUrl)).then(function(d){var f=
k.parseXml(d.data);d=[];var m=k.queryJson(f,"Fields")[0];m&&(d=d.concat(k.queryJson(m,"Field")));(f=k.queryJson(f,"CalculatedFields")[0])&&(d=d.concat(k.queryJson(f,"Script")));d.forEach(function(a){function h(p){return e.forceLowerCase?p.toLowerCase():p}a=a.attributes;a={id:a.Name,fullName:b.itemid+"."+a.Name,alias:a.Alias,description:a.Alias,type:"esriFieldType"+a.Type,precision:a.Precision?Number(a.Precision):void 0,vintage:a.Vintage};g.idToVariableCache[h(a.id)]=a;g.fullNameToVariableCache[h(a.fullName)]=
a})})})).then(function(){return g})}}});