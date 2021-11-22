// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartCalculator","dojo/_base/lang dojo/dom-style ./ChartTypes ../legends/ChartLegendTypes ../legends/ChartLegendPlacements ../../themes/ThemeLibrary esri/dijit/geoenrichment/utils/DomUtil".split(" "),function(A,k,r,w,l,B,x){return{PRETTY_PADDING:10,calcChartDimentions:function(a,c){var e=c.visualProps,h=c.comparisonInfo,b=c.chartType,d=c.maxIconSize,g=c.numPoints;c=e.width;var f=e.height,t=0,y=0,C=0,D=!x.isHidden(a.chartLabel),m=0;r.isColumnLike(b)&&
!e.xAxis.show&&e.showAxisIcons&&(f+=30);D&&(m=k.get(a.chartLabel,"height")+(e.title.verticalShift||0),f-=m);e.showAxisIcons&&(r.isColumnLike(b)?f-=Math.min(d,(c-100)/g*.8)+10:r.isBarLike(b)&&(d=Math.min(d,(f-50)/g*.8)+10,t+=d,c-=d));e=e.legend||{};g=e[e.type===w.MIN_MAX?"minMax":"series"]||{};d=g.placement||l.NONE;g=(g.placementOffset||0)/100;var n=d===l.LEFT||d===l.RIGHT,F=a.comparisonSelectBlock&&a.comparisonSelectBlock.offsetWidth+20,E=a.comparisonSelectBlock&&a.comparisonSelectBlock.offsetHeight+
20;!h||!r.isComparisonSupported(b)||e.type===w.MIN_MAX&&n||(f-=E);n||k.set(a.getLegendNode(),{width:c-20+"px"});b=a.legend&&x.noTransformPosition(a.legend.domNode);b=A.mixin({w:0,h:0},b);n||k.set(a.getLegendNode(),{width:""});var u=n?f-48:0;b.h=u?Math.min(b.h,u):b.h;b.h+=20;e.type===w.MIN_MAX&&n&&(b.w=Math.max(b.w,F));switch(d){case l.LEFT:var p=10;var v=m+f*g;t+=2*p+b.w;c-=t;break;case l.RIGHT:var q=10;v=m+f*g;y+=2*q+b.w;c-=y;break;case l.TOP:f-=b.h;v=D?m+10:10;q=p=10;C+=b.h;break;case l.BOTTOM:f-=
b.h;var z=q=p=10;h&&(z+=E-10)}k.set(a.chartLabel,{marginLeft:"10px",marginRight:"10px"});k.set(a.chartContainerWithAxis,{marginTop:C+"px",marginLeft:t+"px",marginRight:y+"px"});a.legend&&k.set(a.legend.domNode,{maxHeight:u?u+"px":""});k.set(a.getLegendNode(),{left:void 0!==p?p+"px":"",right:void 0!==q?q+"px":"",top:void 0!==v?v+"px":"",bottom:void 0!==z?z+"px":""});return{w:c,h:f}},calcAxisLabelsAutoTilt:function(a,c,e,h){if(!c||!c.length||0!==e.xAxis.labelsAngle)return!1;var b=!1,d=(a-50)/c[0].data.length-
20;a=A.mixin({},h.xAxis.axisStyle,h.xAxis.style,e.xAxis.style);var g=x.getMeasureContext({style:"font-size:"+(a.fontSize||B.CHART_DATA_FONT_SIZE-1)+"px;font-family:"+(a.fontFamily||B.DEFAULT_FONT_FAMILY_GRAPHIC)});c[0].data.some(function(f){return g.measureText(f.name).w>d})&&(b=20);g.destroy();return b},resizeVisualProperties:function(a,c,e){var h=a.width,b=a.height;a.width=c;a.height=e;a.floatingTexts&&a.floatingTexts.forEach(function(d){d.style.left*=c/h;d.style.top*=e/b});a.floatingIcons&&a.floatingIcons.forEach(function(d){d.style.left*=
c/h;d.style.top*=e/b})}}});