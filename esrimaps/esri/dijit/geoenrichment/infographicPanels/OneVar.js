// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/infographicPanels/OneVar","esri/declare dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/query dojo/string ../BaseWidget ../utils/ObjectUtil ../infographicUtils/dom ../infographicUtils/utils ../infographicUtils/formatVariable dojo/i18n!esri/nls/jsapi".split(" "),function(u,h,n,m,v,w,x,r,q,y,p,l){l=l.geoenrichment.dijit.OneVar;return u("esri.dijit.geoenrichment.OneVar",[x],{baseClass:"Infographics_OneVar",constructor:function(){this._state={sortBy:1,sortDesc:!0}},
createUIExpanded:function(e){this.inherited(arguments);if(this._canCreateValueBlock()){var f=e.addHeader("div",{"class":"OneVarMultiComparison_Value"});f=m.create("table",{cellpadding:"0",cellspacing:"0"},f);var a=f.insertRow(0);a=a.insertCell(-1);this.site=m.create("span",{"class":"OneVarMultiComparison_Expanded_Value_Site"},a);a=f.insertRow(-1);a=a.insertCell(-1);this.primary=m.create("span",{"class":"OneVarMultiComparison_Expanded_Value_Primary"},a);this.comp=m.create("span",{"class":"OneVarMultiComparison_Comparison"},
a)}this.table=e.addContent("table",{"class":"OneVarMultiComparison_Table"});q.createCols(this.table,[.5,.2,.15,.15]);a=this.table.insertRow(-1);this._appendSortHeader(a,l.areaCol,0,{"class":"OneVarMultiComparison_TextColumnHeader"});this._appendSortHeader(a,l.valueCol,1,{"class":"OneVarMultiComparison_ValueColumnHeader"});h.set(a.insertCell(-1),"class","OneVarMultiComparison_ChartColumnHeader_Lower");h.set(a.insertCell(-1),"class","OneVarMultiComparison_ChartColumnHeader_Upper");e.addFooter("div")},
createUICollapsed:function(e){this.inherited(arguments);if(this._canCreateValueBlock()){var f=e.addHeader("div",{"class":"OneVarMultiComparison_Value"});f=m.create("table",{cellpadding:"0",cellspacing:"0"},f);var a=f.insertRow(0);a=a.insertCell(-1);this.site=m.create("span",{"class":"OneVarMultiComparison_Expanded_Value_Site"},a);a=f.insertRow(-1);a=a.insertCell(-1);this.primary=m.create("span",{"class":"OneVarMultiComparison_Expanded_Value_Primary"},a)}this.table=e.addContent("table",{"class":"OneVarMultiComparison_Table"});
q.createCols(this.table,[.7,.3]);a=this.table.insertRow(-1);this._appendSortHeader(a,l.areaCol,0,{"class":"OneVarMultiComparison_TextColumnHeader"});this._appendSortHeader(a,l.valueCol,1,{"class":"OneVarMultiComparison_ValueColumnHeader"});h.set(a.insertCell(-1),"class","OneVarMultiComparison_ChartColumnHeader_Lower");h.set(a.insertCell(-1),"class","OneVarMultiComparison_ChartColumnHeader_Upper");e.addFooter("div")},_canCreateValueBlock:function(){return!0},updateUIExpanded:function(){this.inherited(arguments);
var e=this._calculate().firstCol,f=[],a;if(e){var g=[],d=this.data.features.length;for(a=0;a<d;a++){var c=[];f.length&&!this._isSiteRowFeature(this.data.features[a])||f.push(c);c.push(this.getFeatureTitle(a));c.push(this.getValueByName(a,e.name));g.push(c)}this.site&&(this.site.innerHTML=l.subtitleSite2);this._sortRows(g);var b=this.getValueByName(0,e.name);if(c=r.isNumber(b)){var k=this.getValueByName(d-1,e.name);a=this.getFeatureTitle(d-1);d=1-k/b;.005>Math.abs(d)&&(d=0);d=0>d?this._getLessThanPattern():
0<d?this._getMoreThanPattern():this._getSamePattern();this.comp&&(this.comp.innerHTML=w.substitute(d,{site:a}))}else this.comp&&(this.comp.innerHTML="");d=this.table;for(k=g.length+1;1<d.rows.length;)d.deleteRow(-1);b=d.rows[0];if(c)for(;4>b.cells.length;)b.insertCell(-1);else for(;2<b.cells.length;)m.destroy(b.cells[b.cells.length-1]);for(a=1;a<k;a++)b=d.insertRow(-1),0===a%2&&0<a&&(b.className="AlternatingRow"),h.set(b.insertCell(-1),"class","OneVarMultiComparison_TextColumn"),h.set(b.insertCell(-1),
"class","OneVarMultiComparison_ValueColumn"),c&&(b=h.set(b.insertCell(-1),"class","OneVarMultiComparison_ChartColumn"),h.set(b,"colspan","2"));k=Number.NEGATIVE_INFINITY;if(c){for(a=0;a<g.length;a++)g[a][1]>k&&(k=g[a][1]);k=y.getCeiling(k);d.rows[0].cells[2].innerHTML=p(e,0);d.rows[0].cells[3].innerHTML=p(e,k)}for(a=0;a<g.length;a++)if(b=d.rows[a+1],b.cells[0].innerHTML=g[a][0],b.cells[1].innerHTML=p(e,g[a][1]),c){n.add(b,"OneVarMultiComparison_Row");if(-1!==f.indexOf(g[a])){n.add(b,"OneVarMultiComparison_CurrentRow");
var t="OneVarMultiComparison_Expanded_CurrentBar"}else n.remove(b,"OneVarMultiComparison_CurrentRow"),t="OneVarMultiComparison_Expanded_Bar";var z=q.pct(g[a][1]/k);b.cells[2].innerHTML="\x3cdiv class\x3d'"+t+"' style\x3d'width:"+z+"' /\x3e";h.set(b.cells[0],"style","width:50%");h.set(b.cells[1],"style","width:20%")}else h.set(b.cells[0],"style","width:50%"),h.set(b.cells[1],"style","width:50%")}},updateUICollapsed:function(){this.inherited(arguments);var e=this._calculate().firstCol,f=[],a;if(e){var g=
[],d=this.data.features.length;for(a=0;a<d;a++){var c=[];f.length&&!this._isSiteRowFeature(this.data.features[a])||f.push(c);c.push(this.getFeatureTitle(a));c.push(this.getValueByName(a,e.name));g.push(c)}this._sortRows(g);c=this.getValueByName(0,e.name);d=this.table;var b=g.length+1;for(a=d.rows.length;a<b;a++){var k=d.insertRow(-1);0===a%2&&(k.className="AlternatingRow");h.set(k.insertCell(-1),"class","OneVarMultiComparison_TextColumn");h.set(k.insertCell(-1),"class","OneVarMultiComparison_ValueColumn")}for(;d.rows.length>
b;)d.deleteRow(-1);a=r.isNumber(c);c=v("col",this.table);a?(h.set(c[0],"style","width:70%"),h.set(c[1],"style","width:30%")):(h.set(c[0],"style","width:50%"),h.set(c[1],"style","width:50%"));for(a=0;a<g.length;a++)c=d.rows[a+1],c.cells[0].innerHTML=g[a][0],c.cells[1].innerHTML=p(e,g[a][1]),n.add(c,"OneVarMultiComparison_Row"),-1!==f.indexOf(g[a])?n.add(c,"OneVarMultiComparison_CurrentRow"):n.remove(c,"OneVarMultiComparison_CurrentRow")}},_calculate:function(){var e=this.getDataFields(),f=this.getFieldByIndex(e[0]);
this.primary&&(this.primary.innerHTML=this.formatByIndex(0,e[0])+" ");return{firstCol:f}},_getLessThanPattern:function(){return l.lessThan},_getMoreThanPattern:function(){return l.moreThan},_getSamePattern:function(){return l.same},_isSiteRowFeature:function(e){return!1}})});