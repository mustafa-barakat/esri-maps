// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportData",["../../declare","dojo/number","./utils/ObjectUtil"],function(c,g,h){var d=c("esri.dijit.geoenrichment.ReportData",null,{title:null,_cols:null,_rows:null,_indexes:null,constructor:function(){this._cols=[];this._rows=[]},addCol:function(a){this._indexes=null;this._cols.push(a)},getColCount:function(){return this._cols.length},getCol:function(a){return this._cols[a]},addRow:function(a){this._rows.push(a)},getRow:function(a){return this._rows[a]},getRowCount:function(){return this._rows.length},
findField:function(a){if(!this._indexes){this._indexes={};for(var b=this._cols.length,f=0;f<b;f++)this._indexes[this._cols[f].name]=f}return this._indexes[a]},getValue:function(a,b){return h.isNumber(b)?this._rows[a][b]:this._rows[a][this.findField(b)]},formatValue:function(a,b){b=h.isNumber(b)?b:this.findField(b);return this.getCol(b).format(this._rows[a][b])},clearRows:function(a){h.isNumber(a)?this._rows.splice(a,this._rows.length-a):this._rows=[]},clearCols:function(){this.clearRows();this._cols=
[];this._indexes=null}}),k=c(null,{name:null,alias:null,fullName:null,constructor:function(a){this.name=a.name;this.alias=a.alias||a.name;this.fullName=a.fullName||null}}),e=c([k],{decimals:0,constructor:function(a){this.decimals=a.decimals||0},format:function(a){return g.format(a,{places:this.decimals})}});d.NumericColumn=e;var l=c([e],{format:function(a){return g.format(a/100,{places:this.decimals,type:"percent"})}});d.PercentColumn=l;e=c([e],{constructor:function(a){this.symbol=a.symbol||"$"},
format:function(a){return g.format(a,{places:this.decimals,type:"currency",symbol:this.symbol})}});d.CurrencyColumn=e;c=c([k],{format:function(a){return a}});d.StringColumn=c;return d});