// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/StackedColumns",["dojo/_base/declare","dojo/_base/lang","dojox/charting/plot2d/commonStacked","./ClusteredColumns"],function(p,q,n,r){return p(r,{getSeriesStats:function(){var a=n.collectStats(this.series,q.hitch(this,"isNullValue"));a.hmin-=.5;a.hmax+=.5;return a},rearrangeValues:function(a,c,b){return n.rearrangeValues.call(this,a,c,b)},_drawColumnBackground:function(a,c,b,g,l,h,e,f){this.series.indexOf(e)===this.series.length-
1&&this.inherited(arguments)},_getXShift:function(a,c){return 0},_getClusterSize:function(){return 1},_renderInside:function(a,c,b,g,l,h){var e=c[c.valueProp];if(a.box.h+2*this.opt.labelOffset>b.height)a.box.h<=(0<e?b.y-h.t-this.opt.labelOffset:l.height-h.b-(b.y+b.height+2*this.opt.labelOffset))&&this._renderOutside(a,c,b,g,l,h,!0);else{g=b.x+b.width/2-a.box.w/2;var f=0;c.stackValues.forEach(function(d,k){k<=c.seriesIndex&&(f+=Math.abs(d||0))});var m=0>e?0:f;c.stackValues.forEach(function(d,k){d=
d||0;0>d?k<c.seriesIndex&&(m+=Math.abs(d)):k<=c.seriesIndex&&(m-=Math.abs(d))});a={x:g,y:b.y+b.height*m/f+b.height*Math.abs(e)/f/2-a.box.h/2,w:a.box.w,h:a.box.h,text:a.getText(),angle:a.angle};this._labelBoxes.push(a)}},_getFixLabelsParams:function(){return{allowXShift:!0,allowYShift:!0,xGap:1,yGap:3,xTolerance:.1}}})});