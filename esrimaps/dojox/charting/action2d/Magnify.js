//>>built
define("dojox/charting/action2d/Magnify","dojo/_base/connect dojo/_base/declare ./PlotAction dojox/gfx/matrix dojox/gfx/fx dojo/fx dojo/fx/easing".split(" "),function(l,m,n,h,g,p,q){return m("dojox.charting.action2d.Magnify",n,{defaultParams:{duration:400,easing:q.backOut,scale:2},optionalParams:{},constructor:function(a,b,c){this.scale=c&&"number"==typeof c.scale?c.scale:2;this.connect()},process:function(a){if(a.shape&&a.type in this.overOutEvents&&"cx"in a&&"cy"in a&&"spider_plot"!=a.element&&
"spider_poly"!=a.element){var b=a.run.name,c=a.index,f=[],e;b in this.anim?e=this.anim[b][c]:this.anim[b]={};e?e.action.stop(!0):this.anim[b][c]=e={};if("onmouseover"==a.type){var d=h.identity;var k=this.scale}else d=h.scaleAt(this.scale,a.cx,a.cy),k=1/this.scale;d={shape:a.shape,duration:this.duration,easing:this.easing,transform:[{name:"scaleAt",start:[1,a.cx,a.cy],end:[k,a.cx,a.cy]},d]};a.shape&&f.push(g.animateTransform(d));a.outline&&(d.shape=a.outline,f.push(g.animateTransform(d)));a.shadow&&
(d.shape=a.shadow,f.push(g.animateTransform(d)));f.length?(e.action=p.combine(f),"onmouseout"==a.type&&l.connect(e.action,"onEnd",this,function(){this.anim[b]&&delete this.anim[b][c]}),e.action.play()):delete this.anim[b][c]}}})});