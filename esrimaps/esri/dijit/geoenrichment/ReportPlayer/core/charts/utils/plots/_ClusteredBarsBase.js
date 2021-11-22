// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/_ClusteredBarsBase","dojo/_base/lang dojo/_base/array dojo/_base/declare dojox/charting/plot2d/CartesianBase dojox/charting/plot2d/_PlotEvents dojox/charting/plot2d/common dojox/lang/utils dojox/lang/functional dojox/lang/functional/reversed ./labelsRendering/_BarsLabelRenderingFix ./animation/_ClusteredBarsAnimation ./_MinVisibleBar".split(" "),function(B,y,G,H,I,C,D,J,K,L,M,N){var O=K.lambda("item.purgeGroup()");return G("dojox.charting.plot2d.Bars",
[H,I,L,M,N],{_mainShapes:null,_animationInfos:null,_noCrispEdges:!1,defaultParams:{gap:0,animate:null},optionalParams:{minBarSize:1,maxBarSize:1},constructor:function(a,b){this.opt=B.clone(B.mixin(this.opt,this.defaultParams));D.updateWithObject(this.opt,b);D.updateWithPattern(this.opt,b,this.optionalParams);this.animate=this.opt.animate;this.renderingOptions=this._noCrispEdges?null:{"shape-rendering":"crispEdges"}},getSeriesStats:function(){var a=C.collectSimpleStats(this.series,function(d){return null==
d});a.hmin-=.5;a.hmax+=.5;var b=a.hmin;a.hmin=a.vmin;a.vmin=b;b=a.hmax;a.hmax=a.vmax;a.vmax=b;return a},render:function(a,b){if(!this.chart.isPreRenderMode){this.dirty=this.isDirty();this.resetEvents();if(this.dirty){y.forEach(this.series,O);this._eventSeries={};this.cleanGroup();var d=this.getGroup();J.forEachRev(this.series,function(u){u.cleanGroup(d)})}var c=this.chart.theme,g=this._hScaler.scaler.getTransformerFromModel(this._hScaler),f=this._vScaler.scaler.getTransformerFromModel(this._vScaler),
h=Math.max(c.series.baseLineValue||0,this._hScaler.bounds.lower),k=g(h),n=this.events(),x=this.getBarProperties();this._mainShapes=[];this._animationInfos=[];var z=this.extractValues(this._vScaler);z=this.rearrangeValues(z,g,k);for(var r=this.series.length-1;0<=r;--r){var e=this.series[r];if(this.dirty||e.dirty){e.cleanGroup();var E=c.next("bar",[this.opt,e]),F=Array(e.data.length);d=e.group;for(var v=y.some(e.data,function(u){return"number"===typeof u||u&&!u.hasOwnProperty("x")}),P=v?Math.min(e.data.length,
Math.ceil(this._vScaler.bounds.to)):e.data.length,l=v?Math.max(0,Math.floor(this._vScaler.bounds.from-1)):0;l<P;++l){var m=e.data[l];if(null!=m){var p=this.getValue(m,l,r,v);g(p.y);var A=z[r][l];if(this.opt.styleFunc||"number"!==typeof m){var q="number"!==typeof m?[m]:[];this.opt.styleFunc&&q.push(this.opt.styleFunc(m));q=c.addMixin(E,"bar",q,!0)}else q=c.post(E,"bar");if(1<=x.height){var t={x:b.l+k+Math.min(A,0),y:a.height-b.b-f(p.x+1.5)+x.gap+x.thickness*this._getYShift(r,c),width:Math.abs(A),height:x.height};
t=this._drawBar(d,m,t,q,a,b,e,k,l);var w=t.shape;c.series.isEditMode&&(w.rawNode.style.cursor="pointer");w.value=m;this._mainShapes.push(w);t=t.rect;n&&(p={element:"bar",index:l,run:e,shape:w,cx:p.y,cy:p.x+1.5,x:v?l:e.data[l].x,y:v?e.data[l]:e.data[l].y},this._connectEvents(p),F[l]=p);this.createLabel(d,m,t,q,a,b,h);this.animate&&(m={shape:w,hoffset:b.l+k,hsize:-A},this._animationInfos.push(m),this._animateBar(m))}}}this._eventSeries[e.name]=F;e.dirty=!1}else c.skip(),this._reconnectEvents(e.name)}this._renderLabels(q,
a,b,d);this.dirty=!1;return this}},getMainShapes:function(){return this._mainShapes},_drawBar:function(a,b,d,c,g,f,h,k,n){},_getYShift:function(a,b){return b.series.renderColumnBarsInOppositeDirections?a>=this.series.length/2?a-this.series.length/2:a:a},getValue:function(a,b,d,c){c?(d="number"===typeof a?a:a.y,a=b):(d=a.y,a=a.x-1);return{y:d,x:a}},extractValues:function(a){for(var b=[],d=this.series.length-1;0<=d;--d){var c=this.series[d];if(this.dirty||c.dirty){var g=y.some(c.data,function(n){return"number"==
typeof n||n&&!n.hasOwnProperty("x")}),f=g?Math.max(0,Math.floor(a.bounds.from-1)):0;g=g?Math.min(c.data.length,Math.ceil(a.bounds.to)):c.data.length;var h=b[d]=[];h.min=f;for(h.max=g;f<g;++f){var k=c.data[f];h[f]=this.isNullValue(k)?0:"number"==typeof k?k:k.y}}}return b},rearrangeValues:function(a,b,d){for(var c=0,g=a.length;c<g;++c){var f=a[c];if(f)for(var h=f.min,k=f.max;h<k;++h){var n=f[h];f[h]=this.isNullValue(n)?0:b(n)-d}}return a},getBarProperties:function(){var a=C.calculateBarSize(this._vScaler.bounds.scale,
this.opt,this._getClusterSize());return{gap:a.gap,height:a.size,thickness:a.size}},_getClusterSize:function(){var a=this.series.length;return this.chart.theme.series.renderColumnBarsInOppositeDirections?Math.round(a/2):a}})});