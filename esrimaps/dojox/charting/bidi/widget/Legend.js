//>>built
define("dojox/charting/bidi/widget/Legend","dojo/_base/declare dojo/dom dijit/registry dojo/_base/connect dojo/_base/array dojo/query".split(" "),function(e,f,c,d,g,h){function k(a){return/^(ltr|rtl|auto)$/.test(a)?a:null}return e(null,{postMixInProperties:function(){if(this.chart)this.textDir=this.chart.textDir,d.connect(this.chart,"setTextDir",this,"_setTextDirAttr");else if(this.chartRef){var a=c.byId(this.chartRef);if(!a)if(a=f.byId(this.chartRef))a=c.byNode(a);else return;this.textDir=a.textDir;
d.connect(a,"setTextDir",this,"_setTextDirAttr")}},_setTextDirAttr:function(a){null!=k(a)&&this.textDir!=a&&(this._set("textDir",a),a=h(".dojoxLegendText",this._tr),g.forEach(a,function(b){b.dir=this.getTextDir(b.innerHTML,b.dir)},this))}})});