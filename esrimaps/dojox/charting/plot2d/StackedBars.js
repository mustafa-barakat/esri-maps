//>>built
define("dojox/charting/plot2d/StackedBars",["dojo/_base/declare","dojo/_base/lang","./Bars","./commonStacked"],function(d,e,f,c){return d("dojox.charting.plot2d.StackedBars",f,{getSeriesStats:function(){var a=c.collectStats(this.series,e.hitch(this,"isNullValue"));a.hmin-=.5;a.hmax+=.5;var b=a.hmin;a.hmin=a.vmin;a.vmin=b;b=a.hmax;a.hmax=a.vmax;a.vmax=b;return a},rearrangeValues:function(a,b,g){return c.rearrangeValues.call(this,a,b,g)}})});