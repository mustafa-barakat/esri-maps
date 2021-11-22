//>>built
define("dojox/data/RailsStore",["dojo","dojox","dojox/data/JsonRestStore"],function(d,g){return d.declare("dojox.data.RailsStore",g.data.JsonRestStore,{constructor:function(){},preamble:function(a){if("string"==typeof a.target&&!a.service){var f=a.target.replace(/\/$/g,"");a.service=g.rpc.Rest(this.target,!0,null,function(c,b){b=b||{};var h=f;if(d.isObject(c)){var e="";c="?"+d.objectToQuery(c)}else b.queryStr&&-1!=b.queryStr.indexOf("?")?(e=b.queryStr.replace(/\?.*/,""),c=b.queryStr.replace(/[^?]*\?/g,
"?")):d.isString(b.query)&&-1!=b.query.indexOf("?")?(e=b.query.replace(/\?.*/,""),c=b.query.replace(/[^?]*\?/g,"?")):(e=c?c.toString():"",c="");-1!=e.indexOf("\x3d")&&(c=e,e="");var k=g.rpc._sync;g.rpc._sync=!1;return{url:e?h+"/"+e+".json"+c:h+".json"+c,handleAs:"json",contentType:"application/json",sync:k,headers:{Accept:"application/json,application/javascript",Range:b&&(0<=b.start||0<=b.count)?"items\x3d"+(b.start||"0")+"-"+(b.count&&b.count+(b.start||0)-1||""):void 0}}})}},fetch:function(a){function f(b){null==
a.queryStr&&(null==a.queryStr&&(a.queryStr=""),d.isObject(a.query)?a.queryStr="?"+d.objectToQuery(a.query):d.isString(a.query)&&(a.queryStr=a.query));var h=a,e=a.queryStr;var k=-1==a.queryStr.indexOf("?")?"?":"\x26";h.queryStr=e+k+d.objectToQuery(b)}a=a||{};if(a.start||a.count){if((a.start||0)%a.count)throw Error("The start parameter must be a multiple of the count parameter");f({page:(a.start||0)/a.count+1,per_page:a.count})}if(a.sort){var c={sortBy:[],sortDir:[]};d.forEach(a.sort,function(b){c.sortBy.push(b.attribute);
c.sortDir.push(b.descending?"DESC":"ASC")});f(c);delete a.sort}return this.inherited(arguments)},_processResults:function(a,f){if("undefined"==typeof this.rootAttribute&&a[0])if(a[0][this.idAttribute])this.rootAttribute=!1,console.debug("RailsStore: without root_in_json");else for(c in a[0])a[0][c][this.idAttribute]&&(this.rootAttribute=c,console.debug("RailsStore: with root_in_json, attribute: "+c));var c=this.rootAttribute?d.map(a,function(b){return b[this.rootAttribute]},this):a;a=a.length;return{totalCount:f.fullLength||
(f.request.count==a?(f.request.start||0)+2*a:a),items:c}}})});