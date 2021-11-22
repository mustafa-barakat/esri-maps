//>>built
define("dojox/data/OpmlStore","dojo/_base/declare dojo/_base/lang dojo/_base/xhr dojo/data/util/simpleFetch dojo/data/util/filter dojo/_base/kernel".split(" "),function(m,q,r,x,t,n){m=m("dojox.data.OpmlStore",null,{constructor:function(a){this._xmlData=null;this._arrayOfTopLevelItems=[];this._arrayOfAllItems=[];this._metadataNodes=null;this._loadFinished=!1;this.url=a.url;this._opmlData=a.data;a.label&&(this.label=a.label);this._loadInProgress=!1;this._queuedFetches=[];this._identityMap={};this._identCount=
0;this._idProp="_I";a&&"urlPreventCache"in a&&(this.urlPreventCache=a.urlPreventCache?!0:!1)},label:"text",url:"",urlPreventCache:!1,_assertIsItem:function(a){if(!this.isItem(a))throw Error("dojo.data.OpmlStore: a function was passed an item argument that was not an item");},_assertIsAttribute:function(a){if(!q.isString(a))throw Error("dojox.data.OpmlStore: a function was passed an attribute argument that was not an attribute object nor an attribute name string");},_removeChildNodesThatAreNotElementNodes:function(a,
b){var c=a.childNodes;if(0!==c.length){var e=[],d;for(d=0;d<c.length;++d){var f=c[d];1!=f.nodeType&&e.push(f)}for(d=0;d<e.length;++d)f=e[d],a.removeChild(f);if(b)for(d=0;d<c.length;++d)f=c[d],this._removeChildNodesThatAreNotElementNodes(f,b)}},_processRawXmlTree:function(a){this._loadFinished=!0;this._xmlData=a;var b=a.getElementsByTagName("head")[0];b&&(this._removeChildNodesThatAreNotElementNodes(b),this._metadataNodes=b.childNodes);a=a.getElementsByTagName("body");if(b=a[0])for(this._removeChildNodesThatAreNotElementNodes(b,
!0),a=a[0].childNodes,b=0;b<a.length;++b){var c=a[b];"outline"==c.tagName&&(this._identityMap[this._identCount]=c,this._identCount++,this._arrayOfTopLevelItems.push(c),this._arrayOfAllItems.push(c),this._checkChildNodes(c))}},_checkChildNodes:function(a){if(a.firstChild)for(var b=0;b<a.childNodes.length;b++){var c=a.childNodes[b];"outline"==c.tagName&&(this._identityMap[this._identCount]=c,this._identCount++,this._arrayOfAllItems.push(c),this._checkChildNodes(c))}},_getItemsArray:function(a){return a&&
a.deep?this._arrayOfAllItems:this._arrayOfTopLevelItems},getValue:function(a,b,c){this._assertIsItem(a);this._assertIsAttribute(b);if("children"==b)return a.firstChild||c;a=a.getAttribute(b);return void 0!==a?a:c},getValues:function(a,b){this._assertIsItem(a);this._assertIsAttribute(b);var c=[];if("children"==b)for(b=0;b<a.childNodes.length;++b)c.push(a.childNodes[b]);else null!==a.getAttribute(b)&&c.push(a.getAttribute(b));return c},getAttributes:function(a){this._assertIsItem(a);for(var b=[],c=
a.attributes,e=0;e<c.length;++e){var d=c.item(e);b.push(d.nodeName)}0<a.childNodes.length&&b.push("children");return b},hasAttribute:function(a,b){return 0<this.getValues(a,b).length},containsValue:function(a,b,c){var e=void 0;"string"===typeof c&&(e=t.patternToRegExp(c,!1));return this._containsValue(a,b,c,e)},_containsValue:function(a,b,c,e){a=this.getValues(a,b);for(b=0;b<a.length;++b){var d=a[b];if("string"===typeof d&&e)return null!==d.match(e);if(c===d)return!0}return!1},isItem:function(a){return a&&
1==a.nodeType&&"outline"==a.tagName&&a.ownerDocument===this._xmlData},isItemLoaded:function(a){return this.isItem(a)},loadItem:function(a){},getLabel:function(a){if(this.isItem(a))return this.getValue(a,this.label)},getLabelAttributes:function(a){return[this.label]},_fetchItems:function(a,b,c){var e=this,d=function(f,g){var k=null;if(f.query){k=[];var l=f.queryOptions?f.queryOptions.ignoreCase:!1,u={},h;for(h in f.query){var p=f.query[h];"string"===typeof p&&(u[h]=t.patternToRegExp(p,l))}for(l=0;l<
g.length;++l){var v=!0,w=g[l];for(h in f.query)p=f.query[h],e._containsValue(w,h,p,u[h])||(v=!1);v&&k.push(w)}}else 0<g.length&&(k=g.slice(0,g.length));b(k,f)};if(this._loadFinished)d(a,this._getItemsArray(a.queryOptions));else if(this._loadInProgress)this._queuedFetches.push({args:a,filter:d});else if(""!==this.url)this._loadInProgress=!0,c=r.get({url:e.url,handleAs:"xml",preventCache:e.urlPreventCache}),c.addCallback(function(f){e._processRawXmlTree(f);d(a,e._getItemsArray(a.queryOptions));e._handleQueuedFetches()}),
c.addErrback(function(f){throw f;});else if(this._opmlData)this._processRawXmlTree(this._opmlData),this._opmlData=null,d(a,this._getItemsArray(a.queryOptions));else throw Error("dojox.data.OpmlStore: No OPML source data was provided as either URL or XML data input.");},getFeatures:function(){return{"dojo.data.api.Read":!0,"dojo.data.api.Identity":!0}},getIdentity:function(a){if(this.isItem(a))for(var b in this._identityMap)if(this._identityMap[b]===a)return b;return null},fetchItemByIdentity:function(a){if(this._loadFinished)c=
this._identityMap[a.identity],this.isItem(c)||(c=null),a.onItem&&(e=a.scope?a.scope:n.global,a.onItem.call(e,c));else{var b=this;if(""!==this.url)this._loadInProgress?this._queuedFetches.push({args:a}):(this._loadInProgress=!0,c=r.get({url:b.url,handleAs:"xml"}),c.addCallback(function(d){var f=a.scope?a.scope:n.global;try{b._processRawXmlTree(d);var g=b._identityMap[a.identity];b.isItem(g)||(g=null);a.onItem&&a.onItem.call(f,g);b._handleQueuedFetches()}catch(k){a.onError&&a.onError.call(f,k)}}),c.addErrback(function(d){this._loadInProgress=
!1;a.onError&&a.onError.call(a.scope?a.scope:n.global,d)}));else if(this._opmlData){this._processRawXmlTree(this._opmlData);this._opmlData=null;var c=this._identityMap[a.identity];b.isItem(c)||(c=null);if(a.onItem){var e=a.scope?a.scope:n.global;a.onItem.call(e,c)}}}},getIdentityAttributes:function(a){return null},_handleQueuedFetches:function(){if(0<this._queuedFetches.length){for(var a=0;a<this._queuedFetches.length;a++){var b=this._queuedFetches[a],c=b.args;(b=b.filter)?b(c,this._getItemsArray(c.queryOptions)):
this.fetchItemByIdentity(c)}this._queuedFetches=[]}},close:function(a){}});q.extend(m,x);return m});