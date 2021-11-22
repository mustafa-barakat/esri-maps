// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
var __extends=this&&this.__extends||function(){var D=function(w,p){D=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,t){u.__proto__=t}||function(u,t){for(var z in t)Object.prototype.hasOwnProperty.call(t,z)&&(u[z]=t[z])};return D(w,p)};return function(w,p){function u(){this.constructor=w}if("function"!==typeof p&&null!==p)throw new TypeError("Class extends value "+String(p)+" is not a constructor or null");D(w,p);w.prototype=null===p?Object.create(p):(u.prototype=p.prototype,new u)}}();
define("esri/arcade/featureset/actions/GroupBy","require exports ../../../graphic ../../languageUtils ./Adapted ./AttributeFilter ./OrderBy ../support/FeatureSet ../support/IdSet ../support/OrderbyClause ../support/shared ../support/sqlUtils ../support/sqlUtils ../support/stats ../support/StatsField dojox/encoding/digests/_base dojox/encoding/digests/MD5 ../../polyfill/promiseUtils ../../polyfill/sql/WhereClause ../../../SpatialReference ../../../layers/Field ../../polyfill/sql/FieldsIndex".split(" "),
function(D,w,p,u,t,z,G,H,A,I,x,E,v,y,J,K,L,q,B,M,F,N){function O(C){if(!C)return"COUNT";switch(C.toLowerCase()){case "max":return"MAX";case "var":case "variance":return"VAR";case "avg":case "average":case "mean":return"AVG";case "min":return"MIN";case "sum":return"SUM";case "stdev":case "stddev":return"STDDEV"}return"COUNT"}return function(C){function h(d){var a=C.call(this,d)||this;a._decodedStatsfield=[];a._decodedGroupbyfield=[];a._candosimplegroupby=!0;a.phsyicalgroupbyfields=[];a.objectIdField=
"ROW__ID";a._internalObjectIdField="ROW__ID";a._adaptedFields=[];a.declaredClass="esri.arcade.featureset.actions.Aggregate";a._uniqueIds=1;a._maxQuery=10;a._maxProcessing=10;a._parent=d.parentfeatureset;a._config=d;return a}__extends(h,C);h.prototype.isTable=function(){return!0};h.prototype._getSet=function(d){var a=this;return null===this._wset?this._getFilteredSet("",null,null,null,d).then(function(f){a._wset=f;return a._wset}):q.resolve(this._wset)};h.prototype._isInFeatureSet=function(){return x.IdState.InFeatureSet};
h.prototype.nextUniqueName=function(d){for(;1===d["T"+this._uniqueIds.toString()];)this._uniqueIds++;var a="T"+this._uniqueIds.toString();d[a]=1;return a};h.prototype.convertToEsriFieldType=function(d){return d};h.prototype._initialiseFeatureSet=function(){var d={},a=!1,f=1,b=this._parent?this._parent.getFieldsIndex():new N([]);this.objectIdField="ROW__ID";for(this.globalIdField="";!1===a;){for(var e=!1,c=0;c<this._config.groupbyfields.length;c++)if(this._config.groupbyfields[c].name.toLowerCase()===
this.objectIdField.toLowerCase()){e=!0;break}if(!1===e)for(c=0;c<this._config.statsfields.length;c++)if(this._config.statsfields[c].name.toLowerCase()===this.objectIdField.toLowerCase()){e=!0;break}!1===e?a=!0:(this.objectIdField="ROW__ID"+f.toString(),f++)}a=0;for(f=this._config.statsfields;a<f.length;a++)c=f[a],e=new J,e.field=c.name,e.tofieldname=c.name,e.workingexpr=c.expression instanceof B.WhereClause?c.expression:B.WhereClause.create(c.expression,b),e.typeofstat=O(c.statistic),this._decodedStatsfield.push(e);
this._decodedGroupbyfield=[];a=0;for(f=this._config.groupbyfields;a<f.length;a++)c=f[a],c={name:c.name,singlefield:null,tofieldname:c.name,expression:c.expression instanceof B.WhereClause?c.expression:B.WhereClause.create(c.expression,b)},this._decodedGroupbyfield.push(c);if(null!==this._parent){this.geometryType=this._parent.geometryType;this.spatialReference=this._parent.spatialReference;this.hasM=this._parent.hasM;this.hasZ=this._parent.hasZ;this.typeIdField="";b=0;for(a=this._parent.fields;b<
a.length;b++)c=a[b],d[c.name.toUpperCase()]=1;this.types=null}else this.geometryType=x.layerGeometryEsriConstants.point,this.typeIdField="",this.types=null,this.spatialReference=new M({wkid:4326});this.fields=[];b=new J;b.field=this.nextUniqueName(d);b.tofieldname=this.objectIdField;b.workingexpr=B.WhereClause.create(this._parent.objectIdField,this._parent.getFieldsIndex());b.typeofstat="MIN";this._decodedStatsfield.push(b);c=0;for(f=this._decodedGroupbyfield;c<f.length;c++){a=f[c];b=new F;a.name=
this.nextUniqueName(d);b.name=a.tofieldname;b.alias=b.name;if(E.isSingleField(a.expression)){e=this._parent.getField(v.toWhereClause(a.expression,x.FeatureServiceDatabaseType.Standardised));if(!e)throw Error("Field is not present for Aggregation");a.name=e.name;a.singlefield=e.name;this.phsyicalgroupbyfields.push(e.name);b.type=e.type}else b.type=this.convertToEsriFieldType(v.predictType(a.expression,this._parent.fields)),e=new F,e.name=a.name,e.alias=e.name,this.phsyicalgroupbyfields.push(a.name),
this._adaptedFields.push(new t.SqlExpressionAdapted(e,a.expression)),this._candosimplegroupby=!1;this.fields.push(b)}if(0<this._adaptedFields.length)for(b=0,a=this._parent.fields;b<a.length;b++)c=a[b],this._adaptedFields.push(new t.OriginalField(c));for(c=0;c<this._decodedStatsfield.length;c++){b=new F;e=null;a=this._decodedStatsfield[c];a.field=this.nextUniqueName(d);a.tofieldname===this.objectIdField&&(this._internalObjectIdField=a.field);b.name=a.tofieldname;b.alias=b.name;a=null!==a.workingexpr?
E.isSingleField(a.workingexpr)?v.toWhereClause(a.workingexpr,x.FeatureServiceDatabaseType.Standardised):"":"";switch(this._decodedStatsfield[c].typeofstat){case "SUM":if(""!==a){e=this._parent.getField(a);if(!e)throw Error("Field is not present for Aggregation");b.type=e.type}else b.type="double";break;case "MIN":case "MAX":if(""!==a){e=this._parent.getField(a);if(!e)throw Error("Field is not present for Aggregation");b.type=e.type}else b.type="double";break;case "COUNT":b.type="integer";break;case "STDDEV":case "VAR":case "AVG":if(""!==
a&&(e=this._parent.getField(a),!e))throw Error("Field is not present for Aggregation");b.type="double"}this.fields.push(b)}};h.prototype._canDoAggregates=function(){return q.resolve(!1)};h.prototype._getFeatures=function(d,a,f,b){var e=this,c=[];-1!==a&&void 0===this._featureCache[a]&&c.push(a);c=this._maxQuery;return!0===this._checkIfNeedToExpandKnownPage(d,c)?this._expandPagedSet(d,c,0,0,b).then(function(){return e._getFeatures(d,a,f,b)}):q.resolve("success")};h.prototype._getFilteredSet=function(d,
a,f,b,e){var c=this;if(""!==d)return q.resolve(new A([],[],!0,null));var l=null,k=!1,m=!1;return this._ensureLoaded().then(function(){if(null!==f)for(var g=0;g<c._decodedStatsfield.length;g++)if(!0===E.scanForField(f,c._decodedStatsfield[g].tofieldname)){m=!0;f=null;break}if(null!==b){k=!0;for(g=0;g<c._decodedStatsfield.length;g++)if(!0===b.scanForField(c._decodedStatsfield[g].tofieldname)){b=null;k=!1;break}if(null!==b){g=0;for(var n=c._decodedGroupbyfield;g<n.length;g++){var r=n[g];if(null===r.singlefield&&
!0===b.scanForField(r.tofieldname)){b=null;k=!1;break}}}}return!1===c._candosimplegroupby?q.resolve(!1):c._parent._canDoAggregates(c.phsyicalgroupbyfields,c._decodedStatsfield,"",null,null)}).then(function(g){if(g){g=null;f&&(g=c._reformulateWhereClauseWithoutGroupByFields(f));var n=null;b&&(n=c._reformulateOrderClauseWithoutGroupByFields(b));return c._parent._getAggregatePagesDataSourceDefinition(c.phsyicalgroupbyfields,c._decodedStatsfield,"",null,g,n,c._internalObjectIdField).then(function(r){c._checkCancelled(e);
return l=!0===m?new A(r._candidates.slice(0).concat(r._known.slice(0)),[],!0===k?r._ordered:!1,c._clonePageDefinition(r.pagesDefinition)):new A(r._candidates.slice(0),r._known.slice(0),!0===k?r._ordered:!1,c._clonePageDefinition(r.pagesDefinition))})}g=c._parent;0<c._adaptedFields.length&&(g=new t.AdaptedFeatureSet({parentfeatureset:c._parent,adaptedFields:c._adaptedFields,extraFilter:null}));!0===m?l=new A(["GETPAGES"],[],!1,{aggregatefeaturesetpagedefinition:!0,resultOffset:0,resultRecordCount:c._maxQuery,
internal:{fullyResolved:!1,workingItem:null,type:"manual",iterator:null,set:[],subfeatureset:new G({parentfeatureset:g,orderbyclause:new I(c.phsyicalgroupbyfields.join(",")+","+c._parent.objectIdField+" ASC")})}}):(null!==f&&(n=null,f&&(n=c._reformulateWhereClauseWithoutGroupByFields(f)),g=new z({parentfeatureset:g,whereclause:n})),l=new A(["GETPAGES"],[],!1,{aggregatefeaturesetpagedefinition:!0,resultOffset:0,resultRecordCount:c._maxQuery,internal:{fullyResolved:!1,workingItem:null,type:"manual",
iterator:null,set:[],subfeatureset:new G({parentfeatureset:g,orderbyclause:new I(c.phsyicalgroupbyfields.join(",")+","+c._parent.objectIdField+" ASC")})}}));return l})};h.prototype._reformulateWhereClauseWithoutStatsFields=function(d){for(var a=0,f=this._decodedStatsfield;a<f.length;a++){var b=f[a];d=v.reformulateWithoutField(d,b.tofieldname,v.toWhereClause(b.workingexpr,x.FeatureServiceDatabaseType.Standardised),this._parent.getFieldsIndex())}return d};h.prototype._reformulateWhereClauseWithoutGroupByFields=
function(d){for(var a=0,f=this._decodedGroupbyfield;a<f.length;a++){var b=f[a];b.tofieldname!==b.name&&(d=v.reformulateWithoutField(d,b.tofieldname,v.toWhereClause(b.expression,x.FeatureServiceDatabaseType.Standardised),this._parent.getFieldsIndex()))}return d};h.prototype._reformulateOrderClauseWithoutGroupByFields=function(d){for(var a=[],f=0,b=this._decodedGroupbyfield;f<b.length;f++){var e=b[f];e.tofieldname!==e.name&&a.push({field:e.tofieldname,newfield:e.name})}return 0<a.length?d.replaceFields(a):
d};h.prototype._clonePageDefinition=function(d){return null===d?null:!0===d.aggregatefeaturesetpagedefinition?{aggregatefeaturesetpagedefinition:!0,resultRecordCount:d.resultRecordCount,resultOffset:d.resultOffset,internal:d.internal}:this._parent._clonePageDefinition(d)};h.prototype._refineSetBlock=function(d,a,f){var b=this;try{if(!0===this._checkIfNeedToExpandCandidatePage(d,this._maxQuery))return this._expandPagedSet(d,this._maxQuery,0,0,f).then(function(){return b._refineSetBlock(d,a,f)});this._checkCancelled(f);
this._refineKnowns(d,a);return q.resolve(d)}catch(e){return q.reject(e)}};h.prototype._expandPagedSet=function(d,a,f,b,e){return this._expandPagedSetFeatureSet(d,a,f,b,e)};h.prototype._getPhysicalPage=function(d,a,f){var b=this;return!0===d.pagesDefinition.aggregatefeaturesetpagedefinition?q.create(function(e,c){b._sequentialGetPhysicalItem(d,d.pagesDefinition.resultRecordCount,f,[]).then(function(l){e(l)},c)}):this._getAgregagtePhysicalPage(d,a,f).then(function(e){for(var c=0;c<e.length;c++){for(var l=
e[c],k={geometry:l.geometry,attributes:{}},m=0,g=b._decodedGroupbyfield;m<g.length;m++){var n=g[m];k.attributes[n.tofieldname]=l.attributes[n.name]}m=0;for(g=b._decodedStatsfield;m<g.length;m++)n=g[m],k.attributes[n.tofieldname]=l.attributes[n.field];b._featureCache[k.attributes[b.objectIdField]]=new p(k)}return e.length})};h.prototype._sequentialGetPhysicalItem=function(d,a,f,b){var e=this;return q.create(function(c,l){null===d.pagesDefinition.internal.iterator&&(d.pagesDefinition.internal.iterator=
d.pagesDefinition.internal.subfeatureset.iterator(f));!0===d.pagesDefinition.internal.fullyResolved?c(b.length):0===a?c(b.length):e._nextAggregateItem(d,a,f,b,function(k){null===k?c(b.length):(--a,c(e._sequentialGetPhysicalItem(d,a,f,b)))},l)})};h.prototype._nextAggregateItem=function(d,a,f,b,e,c){var l=this;try{u.tick(d.pagesDefinition.internal.iterator.next()).then(function(k){if(null===k){if(null!==d.pagesDefinition.internal.workingItem){var m=l._calculateAndAppendAggregateItem(d.pagesDefinition.internal.workingItem);
b.push(m);d.pagesDefinition.internal.workingItem=null;d.pagesDefinition.internal.set.push(m.attributes[l.objectIdField])}d.pagesDefinition.internal.fullyResolved=!0;e(null)}else{var g=l._generateAggregateHash(k);if(null===d.pagesDefinition.internal.workingItem)d.pagesDefinition.internal.workingItem={features:[k],id:g};else{if(g!==d.pagesDefinition.internal.workingItem.id){m=l._calculateAndAppendAggregateItem(d.pagesDefinition.internal.workingItem);b.push(m);d.pagesDefinition.internal.workingItem=
null;d.pagesDefinition.internal.set.push(m.attributes[l.objectIdField]);--a;d.pagesDefinition.internal.workingItem={features:[k],id:g};e(m);return}d.pagesDefinition.internal.workingItem.features.push(k)}l._nextAggregateItem(d,a,f,b,e,c)}},c)}catch(k){c(k)}};h.prototype._calculateFieldStat=function(d,a,f){for(var b=[],e=0;e<d.features.length;e++)if(null!==a.workingexpr){var c=a.workingexpr.calculateValue(d.features[e]);null!==c&&b.push(c)}else b.push(null);switch(a.typeofstat){case "MIN":f.attributes[a.tofieldname]=
y.calculateStat("min",b,-1);break;case "MAX":f.attributes[a.tofieldname]=y.calculateStat("max",b,-1);break;case "SUM":f.attributes[a.tofieldname]=y.calculateStat("sum",b,-1);break;case "COUNT":f.attributes[a.tofieldname]=b.length;break;case "VAR":f.attributes[a.tofieldname]=y.calculateStat("var",b,-1);break;case "STDDEV":f.attributes[a.tofieldname]=y.calculateStat("stddev",b,-1);break;case "AVG":f.attributes[a.tofieldname]=y.calculateStat("avg",b,-1)}return!0};h.prototype._calculateAndAppendAggregateItem=
function(d){for(var a={attributes:{},geometry:null},f=0,b=this._decodedGroupbyfield;f<b.length;f++){var e=b[f],c=e.singlefield?d.features[0].attributes[e.singlefield]:e.expression.calculateValue(d.features[0]);a.attributes[e.tofieldname]=c}f=0;for(b=this._decodedStatsfield;f<b.length;f++)this._calculateFieldStat(d,b[f],a);f=[];for(b=0;b<this._decodedStatsfield.length;b++)f.push(this._calculateFieldStat(d,this._decodedStatsfield[b],a));this._featureCache[a.attributes[this.objectIdField]]=new p({attributes:a.attributes,
geometry:a.geometry});return a};h.prototype._generateAggregateHash=function(d){for(var a="",f=0,b=this._decodedGroupbyfield;f<b.length;f++){var e=b[f];e=e.singlefield?d.attributes[e.singlefield]:e.expression.calculateValue(d);a=null===e||void 0===e?a+":":a+(":"+e.toString())}return L(a,K.outputTypes.String)};h.prototype._stat=function(){return q.resolve({calculated:!1})};h.prototype.getFeatureByObjectId=function(){return q.resolve(null)};h.registerAction=function(){H._featuresetFunctions.groupby=
function(d,a){return new h({parentfeatureset:this,groupbyfields:d,statsfields:a})}};return h}(H)});