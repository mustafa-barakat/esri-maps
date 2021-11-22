//>>built
define("dojox/dgauges/components/default/HorizontalLinearGauge","dojo/_base/lang dojo/_base/declare dojo/_base/Color ../utils ../../RectangularGauge ../../LinearScaler ../../RectangularScale ../../RectangularValueIndicator ../../TextIndicator ../DefaultPropertiesMixin".split(" "),function(g,l,k,c,m,n,p,q,r,t){return l("dojox.dgauges.components.default.HorizontalLinearGauge",[m,t],{borderColor:"#C9DFF2",fillColor:"#FCFCFF",indicatorColor:"#F01E28",constructor:function(){this.borderColor=new k(this.borderColor);
this.fillColor=new k(this.fillColor);this.indicatorColor=new k(this.indicatorColor);this.addElement("background",g.hitch(this,this.drawBackground));var d=new n,a=new p;a.set("scaler",d);a.set("labelPosition","trailing");a.set("paddingTop",15);a.set("paddingRight",23);this.addElement("scale",a);d=new q;d.indicatorShapeFunc=g.hitch(this,function(e){return e.createPolyline([0,0,10,0,0,10,-10,0,0,0]).setStroke({color:"blue",width:.25}).setFill(this.indicatorColor)});d.set("paddingTop",5);d.set("interactionArea",
"gauge");a.addIndicator("indicator",d);this.addElement("indicatorTextBorder",g.hitch(this,this.drawTextBorder),"leading");a=new r;a.set("indicator",d);a.set("x",32.5);a.set("y",30);this.addElement("indicatorText",a)},drawBackground:function(d,a,e){e=49;var b=0,h=3,f=c.createGradient([0,c.brightness(this.borderColor,-20),.1,c.brightness(this.borderColor,-40)]);d.createRect({x:0,y:0,width:a,height:e,r:h}).setFill(g.mixin({type:"linear",x1:0,y1:0,x2:a,y2:e},f)).setStroke({color:"#A5A5A5",width:.2});
f=c.createGradient([0,c.brightness(this.borderColor,70),1,c.brightness(this.borderColor,-50)]);b=4;d.createRect({x:b,y:b,width:a-2*b,height:e-2*b,r:2}).setFill(g.mixin({type:"linear",x1:0,y1:0,x2:a,y2:e},f));b=6;h=1;f=c.createGradient([0,c.brightness(this.borderColor,60),1,c.brightness(this.borderColor,-40)]);d.createRect({x:b,y:b,width:a-2*b,height:e-2*b,r:h}).setFill(g.mixin({type:"linear",x1:0,y1:0,x2:a,y2:e},f));b=7;h=0;f=c.createGradient([0,c.brightness(this.borderColor,70),1,c.brightness(this.borderColor,
-40)]);d.createRect({x:b,y:b,width:a-2*b,height:e-2*b,r:h}).setFill(g.mixin({type:"linear",x1:a,y1:0,x2:0,y2:e},f));b=5;h=0;f=c.createGradient([0,[255,255,255,220],.8,c.brightness(this.fillColor,-5),1,c.brightness(this.fillColor,-30)]);d.createRect({x:b,y:b,width:a-2*b,height:e-2*b,r:h}).setFill(g.mixin({type:"radial",cx:a/2,cy:0,r:a},f)).setStroke({color:c.brightness(this.fillColor,-40),width:.4})},drawTextBorder:function(d){return d.createRect({x:5,y:5,width:60,height:39}).setStroke({color:"#CECECE",
width:1})}})});