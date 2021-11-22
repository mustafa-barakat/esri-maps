// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/_GridHighlightSupport",["dojo/_base/declare","dojo/on","dojo/dom-construct","esri/dijit/geoenrichment/utils/MouseUtil"],function(l,f,m,k){return l(null,{canHighlightHeader:!1,canHighlightFirstColumn:!0,_highlightOnHoverHandles:null,_setHighlightRowsOnHoverAttr:function(a){this._setHighlightOnHover(a,!1)},setCellRowHighlighted:function(a,d){(a=a&&a.domNode&&this.queryCells({rowIndex:a.row.index}))&&a.forEach(function(e){this.setCellHighlighted(e,
d)},this)},_setHighlightColumnsOnHoverAttr:function(a){this._setHighlightOnHover(a,!0)},setCellColumnHighlighted:function(a,d){(a=a&&a.domNode&&this.queryCells({columnIndex:a.column.index}))&&a.forEach(function(e){this.setCellHighlighted(e,d)},this)},setCellHighlighted:function(a,d){if(a&&a.domNode)if(!d)a.__highlightScreen&&(a.__highlightScreen.style.display="none");else if(this.canHighlightHeader||0!==a.row.index)if(this.canHighlightFirstColumn||0!==a.column.index)a.__highlightScreen=a.__highlightScreen||
m.create("div",{"class":"fieldCellHighlightScreen esriGEAbsoluteStretched"},a.domNode,"first"),a.__highlightScreen.style.display=""},_setHighlightOnHover:function(a,d){function e(){var b;c.getCells().forEach(function(g){c.setCellHighlighted(g,!1);k.isMouseOver(g&&g.domNode)&&(b=g)});return b}if(this.domNode){var c=this;this._highlightOnHoverHandles&&this._highlightOnHoverHandles.forEach(function(b){b.remove()});if(a){this._highlightOnHoverHandles=[];var h;this._highlightOnHoverHandles.push(f(c.domNode,
"mouseover",function(){h&&h.remove();h=f(document.body,"mousemove",function(){k.isMouseOver(c.domNode)||(e(),h.remove())})}));this._highlightOnHoverHandles.push(f(c.domNode,"mousemove",function(){var b=e();b&&c[d?"setCellColumnHighlighted":"setCellRowHighlighted"](b,!0)}));this._highlightOnHoverHandles.push(f(c.domNode,"mouseout",function(){e()}));this._highlightOnHoverHandles.forEach(function(b){c.own(b)})}}}})});