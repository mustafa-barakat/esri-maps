//>>built
define("dojox/store/OData","dojo/io-query dojo/request dojo/_base/lang dojo/json dojo/_base/declare dojo/store/util/QueryResults".split(" "),function(m,f,g,n,k,p){return k(null,{headers:{MaxDataServiceVersion:"2.0"},target:"",idProperty:"id",accepts:"application/json;odata\x3dverbose",childAttr:"children",constructor:function(b){k.safeMixin(this,b)},get:function(b,a){a=a||{};a=g.mixin({Accept:this.accepts},this.headers,a.headers||a);return f(this.target+"("+b+")",{handleAs:"json",headers:a}).then(function(c){return c.d})},
getIdentity:function(b){return b[this.idProperty]},put:function(b,a){a=a||{};var c=this.getIdentity(b)||a[this.idProperty],e=c?this.target+"("+c+")":this.target,d=g.mixin({"Content-Type":"application/json;odata\x3dverbose",Accept:this.accepts},this.headers,a.headers);c&&(d["X-HTTP-Method"]=a.overwrite?"PUT":"MERGE",d["IF-MATCH"]=a.overwrite?"*":a.etag||"*");return f.post(e,{handleAs:"json",data:n.stringify(b),headers:d})},add:function(b,a){a=a||{};a.overwrite=!1;return this.put(b,a)},remove:function(b,
a){a=a||{};return f.post(this.target+"("+b+")",{headers:g.mixin({"IF-MATCH":"*","X-HTTP-Method":"DELETE"},this.headers,a.headers)})},getFormDigest:function(){var b=this.target.indexOf("_vti_bin");b=this.target.slice(0,b)+"_api/contextinfo";return f.post(b).then(function(a){return a.substring(a.indexOf("\x3cd:FormDigestValue\x3e")+19,a.indexOf("\x3c/d:FormDigestValue\x3e"))})},getChildren:function(b,a){b=this.getIdentity(object)||a[this.idProperty];return this.query({$filter:this.idProperty+" eq "+
b,$expand:this.childAttr},a)},query:function(b,a){a=a||{};var c=g.mixin({Accept:this.accepts},this.headers,a.headers);if(a&&a.sort){b.$orderby="";var e;var d=0;for(e=a.sort.length;d<e;d++){var l=a.sort[d];b.$orderby+=(0<d?",":"")+encodeURIComponent(l.attribute)+(l.descending?" desc":" asc")}}if(0<=a.start||0<=a.count)b.$skip=a.start||0,b.$inlinecount="allpages","count"in a&&Infinity!=a.count&&(b.$top=a.count);b=this.buildQueryString(b);b=f(this.target+(b||""),{handleAs:"json",headers:c});a=b.then(function(h){return h.d.results});
a=p(a);a.total=b.then(function(h){return h.d.__count});return a},buildQueryString:function(b){var a="",c;for(c in b)if(b.hasOwnProperty(c)&&-1==c.indexOf("$")){var e=b[c]+"",d=e.indexOf("*");-1!=d&&(e=e.slice(0!=d?0:1,e.length-(0!=d?1:0)),0<e.length&&(a+=0==a.length?"":"and ",a+=(0==d?"endswith":"startswith")+"("+c+",'"+e+"')"))}0<a.length&&(b.$filter=b.$filter&&0<b.$filter.length?b.$filter+" and "+a:a);a=-1<this.target.indexOf("?");b&&"object"==typeof b&&(b=(b=m.objectToQuery(b))?(a?"\x26":"?")+
b:"");return b}})});