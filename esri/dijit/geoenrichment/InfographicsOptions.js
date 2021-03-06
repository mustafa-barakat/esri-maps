// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/InfographicsOptions","esri/declare dojo/_base/lang esri/dijit/geoenrichment/Deferred esri/tasks/geoenrichment/studyAreaOptionsFromJson esri/tasks/geoenrichment/GeoenrichmentTask ./utils/ArrayUtil ./config ./InfographicsOptionsItem".split(" "),function(m,B,C,D,E,F,u,r){function v(a,b){if(a)for(var c in a)if(a.hasOwnProperty(c)){b[c]=[];for(var e=0;e<a[c].length;e++){var g={};w(a[c][e],g);b[c].push(g)}}}function G(a,b){a=parseFloat(a.index);b=parseFloat(b.index);return isNaN(a)&&
isNaN(b)?0:isNaN(a)?1:isNaN(b)?-1:a-b}function x(a,b){for(var c=0;c<a.length;c++){var e=a[c];if(e.type==b.type&&F.arraysEqual(e.variables,b.variables))return{report:e,index:c}}return null}function w(a,b){b.type=a.type||("OneVarMultiComparison"==a.report?"OneVar":a.report);if(a.dataCollection)if(a.vars){b.variables=[];for(var c=0;c<a.vars.length;c++)b.variables.push(a.dataCollection+"."+a.vars[c])}else b.variables=[a.dataCollection+".*"];else b.variables=a.variables;y(a.isVisible)?b.isVisible=a.isVisible:
y(a.checked)&&(b.isVisible=a.checked)}function y(a){return"boolean"==typeof a||a instanceof Boolean}m=m("esri.dijit.geoenrichment.InfographicsOptions",null,{_items:null,_loaded:null,_loadPromises:null,studyAreaOptions:null,theme:"common",constructor:function(a){this._loaded={};this._loadPromises={};this.studyAreaOptions=D(a&&(a.buffer||a.studyAreaOptions));this._items={};if(a){var b=a.reports||a.items;if(b){v(b,this._items);for(var c in b)b[c]&&b[c].length&&(this._loaded[c]=!0)}a.theme&&(this.theme=
a.theme)}},getItems:function(a){var b=new C;if(this._loaded[a])b.resolve(this._items[a]);else{if(this._loadPromises[a])return this._loadPromises[a];var c=new E(u.server);c.token=u.token;c.getDataCollections(a,null,["id","alias"]).then(B.hitch(this,this._mergeItems,a,b),function(e){b.reject(e)})}return this._loadPromises[a]=b.promise},_mergeItems:function(a,b,c){try{var e={AgePyramid:1,TapestryNEW:1,RelatedVariables:1,OneVar:1},g={TapestryNEW:"Tapestry"},d,l,h=[];for(d=0;d<c.length;d++){var z=c[d].metadata.infographics||
c[d].metadata.infographics2;if(z){var n=JSON.parse(z),k;for(k in n)if(e[k]){var p=new r(g[k]||k,[c[d].id+".*"]),q;for(q in n[k])n[k].hasOwnProperty(q)&&(p[q]=n[k][q]);(l=x(h,p))?h[l.index]=p:h.push(p)}}}var f=this._items[a];f||(f=[],f.push(new r("OneVar",["KeyGlobalFacts.AVGHHSZ"])),this._items[a]=f);for(d=f.length-1;0<=d;d--)if(l=x(h,f[d]))w(f[d],l.report),f[d]=l.report,h.splice(l.index,1);else{if("OneVar"==f[d].type&&1==f[d].variables.length){var A,H=f[d].variables[0];if(!t){var t={};for(e=0;e<
c.length;e++)for(g=0;g<c[e].variables.length;g++)t[c[e].id+"."+c[e].variables[g].id]=c[e].variables[g]}if(A=t[H]){f[d].title=A.alias;continue}}f.splice(d,1);d--}for(d=0;d<h.length;d++)f.push(h[d]);f.sort(G);this._loaded[a]=!0;delete this._loadPromises[a];b.resolve(f)}catch(I){b.reject(I)}},toJson:function(){var a={};v(this._items,a);return{studyAreaOptions:this.studyAreaOptions.toJson(),items:a,theme:this.theme}}});m.Item=r;return m});