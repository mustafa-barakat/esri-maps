// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/infographicPanels/RelatedVariables","esri/declare dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/string dojo/number ../BaseSelectComparison ../utils/ObjectUtil ../infographicUtils/dom ../infographicUtils/formatVariable dojo/i18n!esri/nls/jsapi".split(" "),function(A,k,l,v,z,B,C,D,t,m,g){g=g.geoenrichment.dijit.RelatedVariables;return A("esri.dijit.geoenrichment.RelatedVariables",C,{baseClass:"Infographics_RelatedVariables",createUIExpanded:function(a){this.inherited(arguments);
var b=a.addHeader("div",{"class":"RelatedVariables_Labels"});this.highLabel=v.create("div",{"class":"RelatedVariables_HighLabel"},b);this.lowLabel=v.create("div",{"class":"RelatedVariables_LowLabel"},b);this.table=a.addContent("table",{"class":"RelatedVariables_Table",cellpadding:"2",cellspacing:"0"});t.createCols(this.table,[.35,.15,.15,.175,.175]);b=this.table.insertRow(0);this._appendSortHeader(b,g.indicatorCol,0,{"class":"RelatedVariables_ColumnHeader"});this._appendSortHeader(b,g.valueCol,2,
{"class":"RelatedVariables_ColumnHeader"});this._appendSortHeader(b,g.difCol,3,{"class":"RelatedVariables_ColumnHeader",colspan:"3"});b=a.addFooter("div",{"class":"RelatedVariables_ComparisonDiv"});v.create("div",{"class":"RelatedVariables_ComparisonLabel",innerHTML:g.chartLabel},b);this._createComboBox(b)},createUICollapsed:function(a){this.inherited(arguments);this.table=a.addContent("table",{"class":"RelatedVariables_Table",cellpadding:"2",cellspacing:"0"});t.createCols(this.table,[.7,.3]);var b=
this.table.insertRow(0);this._appendSortHeader(b,g.indicatorCol,0,{"class":"RelatedVariables_ColumnHeader"});this._appendSortHeader(b,g.valueCol,2,{"class":"RelatedVariables_ColumnHeader"})},updateUIExpanded:function(){this.inherited(arguments);var a=this._calculate(),b=Math.max(Math.abs(a.minDif),Math.abs(a.maxDif)),c;for(c=this.table.rows.length;c<a.indexes.length+1;c++){var d=this.table.insertRow(-1);d.className=0<c&&0===c%2?"AlternatingRow RelatedVariables_Row":"RelatedVariables_Row";k.set(d.insertCell(-1),
"class","RelatedVariables_TextColumn");k.set(d.insertCell(-1),"class","RelatedVariables_ValueColumn");d.insertCell(-1);var e=d.insertCell(-1);k.set(e,"class","RelatedVariables_ChartNegative");k.set(e,"style","padding: 0;");e=d.insertCell(-1);k.set(e,"class","RelatedVariables_ChartPositive");k.set(e,"style","padding: 0;")}for(;this.table.rows.length>a.indexes.length+1;)this.table.deleteRow(-1);for(c=0;c<a.rows.length;c++){var f=this.getFieldByIndex(a.indexes[a.rows[c][0]]);d=this.table.rows[c+1];d.cells[0].innerHTML=
a.rows[c][1];d.cells[1].innerHTML=m(f,a.rows[c][2]);e=a.rows[c][3];D.isNumber(e)?(f=0<e?"+"+m(f,e):0>e?"-"+m(f,-e):"0",d.cells[2].innerHTML=f,d.cells[2].className="RelatedVariables_DifferenceColumn",0<e?(l.add(d.cells[2],"RelatedVariables_DifferenceColumn_Positive"),e=t.pct(e/b),d.cells[3].innerHTML="",d.cells[4].innerHTML="\x3cdiv class\x3d'RelatedVariables_PositiveBar' style\x3d'width:"+e+"' /\x3e"):(0>e?(l.add(d.cells[2],"RelatedVariables_DifferenceColumn_Negative"),e=t.pct(-e/b),d.cells[3].innerHTML=
"\x3cdiv class\x3d'RelatedVariables_NegativeBar' style\x3d'width:"+e+"' /\x3e"):d.cells[3].innerHTML="",d.cells[4].innerHTML="")):(d.cells[2].innerHTML="",d.cells[3].innerHTML="",d.cells[4].innerHTML="")}f=this.getFieldByIndex(a.highCol);this.highLabel.innerHTML=z.substitute(g.highLabel2,{alias:f.alias})+" ("+m(f,a.highValue)+")";f=this.getFieldByIndex(a.lowCol);this.lowLabel.innerHTML=z.substitute(g.lowLabel2,{alias:f.alias})+" ("+m(f,a.lowValue)+")"},updateUICollapsed:function(){this.inherited(arguments);
var a=this._calculate(),b;for(b=this.table.rows.length;b<a.indexes.length+1;b++){var c=this.table.insertRow(-1);c.className=0<b&&0===b%2?"AlternatingRow RelatedVariables_Row":"RelatedVariables_Row";k.set(c.insertCell(-1),"class","RelatedVariables_TextColumn");k.set(c.insertCell(-1),"class","RelatedVariables_ValueColumn")}for(;this.table.rows.length>a.indexes.length+1;)this.table.deleteRow(-1);for(b=0;b<a.rows.length;b++){var d=this.getFieldByIndex(a.indexes[a.rows[b][0]]);c=this.table.rows[b+1];c.cells[0].innerHTML=
a.rows[b][1];c.cells[1].innerHTML=m(d,a.rows[b][2]);l.remove(c.cells[1],"MaxPct");l.remove(c.cells[1],"MinPct");a.rows[b][2]==a.maxPct&&l.add(c.cells[1],"MaxPct");a.rows[b][2]==a.minPct&&l.add(c.cells[1],"MinPct")}},_calculate:function(){for(var a,b,c=Number.NEGATIVE_INFINITY,d=Number.POSITIVE_INFINITY,e=Number.NEGATIVE_INFINITY,f=Number.POSITIVE_INFINITY,w=Number.NEGATIVE_INFINITY,x=Number.POSITIVE_INFINITY,y=[],p=this.getDataFields(),n=0;n<p.length;n++){var u=this.getFieldByIndex(p[n]),h=this.getValueByName(0,
u.name);var q=0<=this._state.selectedComparison?B.round(h-this.getValueByName(this._getComparisonRow(),u.name),u.decimals||0):Number.NaN;q>e&&(e=q);q<f&&(f=q);var r=[];r.push(n);r.push(u.alias);r.push(h);r.push(q);y.push(r);h>c&&(c=h,a=p[n]);h<d&&(d=h,b=p[n]);h>w&&(w=h);h<x&&(x=h)}this._sortRows(y);return{rows:y,indexes:p,minDif:f,maxDif:e,minPct:x,maxPct:w,highCol:a,lowCol:b,lowValue:d,highValue:c}}})});