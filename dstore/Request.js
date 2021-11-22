//>>built
define("dstore/Request","dojo/request dojo/_base/lang dojo/_base/array dojo/json dojo/_base/declare ./Store ./QueryResults".split(" "),function(m,g,h,n,p,q,k){var l=[].push;return p(q,{constructor:function(){this.headers||(this.headers={});this._targetContainsQueryString=0<=this.target.lastIndexOf("?")},headers:{},parse:n.parse,target:"",ascendingPrefix:"+",descendingPrefix:"-",accepts:"application/json",fetch:function(a){a=this._request(a);return new k(a.data,{response:a.response})},fetchRange:function(a){var b=
a.start,c=a.end,e={};this.useRangeHeaders?e.headers=g.mixin(this._renderRangeHeaders(b,c),a.headers):(e.queryParams=this._renderRangeParams(b,c),a.headers&&(e.headers=a.headers));a=this._request(e);return new k(a.data,{totalLength:a.total,response:a.response})},_issueFetchRequest:function(a,b){return m(a,{method:"GET",headers:b})},_request:function(a){a=a||{};var b=g.delegate(this.headers,{Accept:this.accepts});"headers"in a&&g.mixin(b,a.headers);a=this._renderUrl(a.queryParams);var c=this._issueFetchRequest(a,
b),e=this;b=c.then(function(d){return e.parse(d)});return{data:b.then(function(d){d=d.items||d;for(var f=0,r=d.length;f<r;f++)d[f]=e._restore(d[f],!0);return d}),total:b.then(function(d){d=d.total;return-1<d?d:c.response.then(function(f){return(f=f.getHeader("Content-Range"))&&(f=f.match(/\/(.*)/))&&+f[1]})}),response:c.response}},_renderFilterParams:function(a){var b=a.type,c=a.args;if(!b)return[""];if("string"===b)return[c[0]];if("and"===b||"or"===b)return[h.map(a.args,function(e){var d=this._renderFilterParams(e);
return"and"!==e.type&&"or"!==e.type||e.type===b?d:"("+d+")"},this).join("and"===b?"\x26":"|")];(a=c[1])&&(a._renderUrl?a="("+a._renderUrl()+")":a instanceof Array&&(a="("+a+")"));return[encodeURIComponent(c[0])+"\x3d"+("eq"===b?"":b+"\x3d")+encodeURIComponent(a)]},_renderSortParams:function(a){a=h.map(a,function(c){return(c.descending?this.descendingPrefix:this.ascendingPrefix)+encodeURIComponent(c.property)},this);var b=[];a&&b.push(this.sortParam?encodeURIComponent(this.sortParam)+"\x3d"+a:"sort("+
a+")");return b},_renderRangeParams:function(a,b){var c=[];this.rangeStartParam?c.push(this.rangeStartParam+"\x3d"+a,this.rangeCountParam+"\x3d"+(b-a)):c.push("limit("+(b-a)+(a?","+a:"")+")");return c},_renderSelectParams:function(a){var b=[];this.selectParam?b.push(this.selectParam+"\x3d"+a):b.push("select("+a+")");return b},_renderQueryParams:function(){var a=[],b=[];h.forEach(this.queryLog,function(e){var d=e.type,f="_render"+d[0].toUpperCase()+d.substr(1)+"Params";"filter"===d?b.push(e.normalizedArguments[0]):
this[f]?l.apply(a,this[f].apply(this,e.normalizedArguments)):console.warn('Unable to render query params for "'+d+'" query',e)},this);if(b.length){var c=new this.Filter;c=c.and.apply(c,b);a.unshift.apply(a,this._renderFilterParams(c))}return a},_renderUrl:function(a){var b=this._renderQueryParams(),c=this.target;a&&l.apply(b,a);0<b.length&&(c+=(this._targetContainsQueryString?"\x26":"?")+b.join("\x26"));return c},_renderRangeHeaders:function(a,b){a="items\x3d"+a+"-"+(b-1);return{Range:a,"X-Range":a}}})});