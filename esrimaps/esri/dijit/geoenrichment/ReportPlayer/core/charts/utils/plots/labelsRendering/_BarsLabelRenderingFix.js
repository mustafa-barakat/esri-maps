// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/labelsRendering/_BarsLabelRenderingFix",["dojo/_base/declare","./LabelsUtil","./LabelOverlapFixer"],function(m,l,n){return m(null,{_labelBoxes:null,resetEvents:function(){this.inherited(arguments);this._labelBoxes=[]},createLabel:function(a,c,b,d,e,f,g){a=l.getLabelInfo(this,c,d,{horizontalAlign:d.series.dataLabelsHorizontalAlign,dataLabelsMaxWidth:d.series.dataLabelsMaxWidth});this.opt.labels&&"outside"===this.opt.labelStyle?this._renderOutside(a,
c,b,d,e,f,d.series.dataLabelsHorizontalAlign,!1,g):this.opt.labels&&"inside"===this.opt.labelStyle&&this._renderInside(a,c,b,d,e,f,g)},_renderOutside:function(a,c,b,d,e,f,g,k,h){d=c[c.valueProp];c=b.y+(b.height-a.box.h)/2;h=h||0;switch(g){case "right":b=d>h?e.width-f.r-a.box.w:f.l+this.opt.labelOffset;break;default:b=d>h?b.x+b.width+this.opt.labelOffset:b.x-a.box.w-this.opt.labelOffset}a={x:b,y:c,w:a.box.w,h:a.box.h,text:a.getText({isAltPosition:k})};this._labelBoxes.push(a)},_renderInside:function(a,
c,b,d,e,f,g){var k=c[c.valueProp];if(!(a.box.h-3>b.height))if(a.box.w+2*this.opt.labelOffset>b.width)a.box.w<=(0<k?e.width-f.r-(b.x+b.width+this.opt.labelOffset):b.x-f.l-2*this.opt.labelOffset)&&this._renderOutside(a,c,b,d,e,f,void 0,!0,g);else{c=b.y+(b.height-a.box.h)/2;switch(d.series.dataLabelsHorizontalAlign){case "left":b=b.x+this.opt.labelOffset;break;case "right":b=b.x+b.width-a.box.w-this.opt.labelOffset;break;default:b=b.x+b.width/2-a.box.w/2}a={x:b,y:c,w:a.box.w,h:a.box.h,text:a.getText()};
this._labelBoxes.push(a)}},_renderLabels:function(a,c,b,d){n.fixLabelsOverlap(this._labelBoxes,c,b,this._getFixLabelsParams(),d);this._labelBoxes.forEach(function(e){e.hidden||this.renderLabel(e)},this)},renderLabel:function(a){a=l.renderHTMLLabel(this.chart,a.x,a.y,a.text);this.htmlElements.push(a);return a},_getFixLabelsParams:function(){return{allowXShift:!0,allowYShift:!0,xGap:3,yGap:3,xTolerance:0,yTolerance:0}}})});