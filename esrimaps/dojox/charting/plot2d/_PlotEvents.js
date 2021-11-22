//>>built
define("dojox/charting/plot2d/_PlotEvents",["dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/_base/connect"],function(e,d,f,g){return f("dojox.charting.plot2d._PlotEvents",null,{constructor:function(){this._shapeEvents=[];this._eventSeries={}},destroy:function(){this.resetEvents();this.inherited(arguments)},plotEvent:function(a){},raiseEvent:function(a){this.plotEvent(a);var c=e.delegate(a);c.originalEvent=a.type;c.originalPlot=a.plot;c.type="onindirect";d.forEach(this.chart.stack,
function(b){b!==this&&b.plotEvent&&(c.plot=b,b.plotEvent(c))},this)},connect:function(a,c){this.dirty=!0;return g.connect(this,"plotEvent",a,c)},events:function(){return!!this.plotEvent.after},resetEvents:function(){this._shapeEvents.length&&(d.forEach(this._shapeEvents,function(a){a.shape.disconnect(a.handle)}),this._shapeEvents=[]);this.raiseEvent({type:"onplotreset",plot:this})},_connectSingleEvent:function(a,c){this._shapeEvents.push({shape:a.eventMask,handle:a.eventMask.connect(c,this,function(b){a.type=
c;a.event=b;this.raiseEvent(a);a.event=null})})},_connectEvents:function(a){a&&(a.chart=this.chart,a.plot=this,a.hAxis=this.hAxis||null,a.vAxis=this.vAxis||null,a.eventMask=a.eventMask||a.shape,this._connectSingleEvent(a,"onmouseover"),this._connectSingleEvent(a,"onmouseout"),this._connectSingleEvent(a,"onclick"))},_reconnectEvents:function(a){(a=this._eventSeries[a])&&d.forEach(a,this._connectEvents,this)},fireEvent:function(a,c,b,h){(a=this._eventSeries[a])&&a.length&&b<a.length&&(b=a[b],b.type=
c,b.event=h||null,this.raiseEvent(b),b.event=null)}})});