//>>built
define("dojox/drawing/stencil/Rect",["dojo/_base/lang","../util/oo","./_Base","../manager/_registry"],function(e,c,f,g){c=c.declare(f,function(a){},{type:"dojox.drawing.stencil.Rect",anchorType:"group",baseRender:!0,dataToPoints:function(a){a=a||this.data;return this.points=[{x:a.x,y:a.y},{x:a.x+a.width,y:a.y},{x:a.x+a.width,y:a.y+a.height},{x:a.x,y:a.y+a.height}]},pointsToData:function(a){a=a||this.points;var b=a[0];a=a[2];return this.data={x:b.x,y:b.y,width:a.x-b.x,height:a.y-b.y,r:this.data.r||
0}},_create:function(a,b,d){this.remove(this[a]);this[a]=this.container.createRect(b).setStroke(d).setFill(d.fill);this._setNodeAtts(this[a])},render:function(){this.onBeforeRender(this);this.renderHit&&this._create("hit",this.data,this.style.currentHit);this._create("shape",this.data,this.style.current)}});e.setObject("dojox.drawing.stencil.Rect",c);g.register({name:"dojox.drawing.stencil.Rect"},"stencil");return c});