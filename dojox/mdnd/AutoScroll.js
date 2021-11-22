//>>built
define("dojox/mdnd/AutoScroll","dojo/_base/kernel dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/_base/sniff dojo/ready dojo/_base/window".split(" "),function(b,c,d,g,h,k){c=c("dojox.mdnd.AutoScroll",null,{interval:3,recursiveTimer:10,marginMouse:50,constructor:function(){this.resizeHandler=g.connect(b.global,"onresize",this,function(){this.getViewport()});k(d.hitch(this,"init"))},init:function(){this._html=h("webkit")?b.body():b.body().parentNode;this.getViewport()},getViewport:function(){var a=
b.doc.documentElement,e=window,f=b.body();b.isMozilla?this._v={w:a.clientWidth,h:e.innerHeight}:!b.isOpera&&e.innerWidth?this._v={w:e.innerWidth,h:e.innerHeight}:!b.isOpera&&a&&a.clientWidth?this._v={w:a.clientWidth,h:a.clientHeight}:f.clientWidth&&(this._v={w:f.clientWidth,h:f.clientHeight})},setAutoScrollNode:function(a){this._node=a},setAutoScrollMaxPage:function(){this._yMax=this._html.scrollHeight;this._xMax=this._html.scrollWidth},checkAutoScroll:function(a){this._autoScrollActive&&this.stopAutoScroll();
this._y=a.pageY;this._x=a.pageX;a.clientX<this.marginMouse?(this._autoScrollActive=!0,this._autoScrollLeft(a)):a.clientX>this._v.w-this.marginMouse&&(this._autoScrollActive=!0,this._autoScrollRight(a));a.clientY<this.marginMouse?(this._autoScrollActive=!0,this._autoScrollUp(a)):a.clientY>this._v.h-this.marginMouse&&(this._autoScrollActive=!0,this._autoScrollDown())},_autoScrollDown:function(){this._timer&&clearTimeout(this._timer);this._autoScrollActive&&this._y+this.marginMouse<this._yMax&&(this._html.scrollTop+=
this.interval,this._node.style.top=parseInt(this._node.style.top)+this.interval+"px",this._y+=this.interval,this._timer=setTimeout(d.hitch(this,"_autoScrollDown"),this.recursiveTimer))},_autoScrollUp:function(){this._timer&&clearTimeout(this._timer);this._autoScrollActive&&0<this._y-this.marginMouse&&(this._html.scrollTop-=this.interval,this._node.style.top=parseInt(this._node.style.top)-this.interval+"px",this._y-=this.interval,this._timer=setTimeout(d.hitch(this,"_autoScrollUp"),this.recursiveTimer))},
_autoScrollRight:function(){this._timer&&clearTimeout(this._timer);this._autoScrollActive&&this._x+this.marginMouse<this._xMax&&(this._html.scrollLeft+=this.interval,this._node.style.left=parseInt(this._node.style.left)+this.interval+"px",this._x+=this.interval,this._timer=setTimeout(d.hitch(this,"_autoScrollRight"),this.recursiveTimer))},_autoScrollLeft:function(a){this._timer&&clearTimeout(this._timer);this._autoScrollActive&&0<this._x-this.marginMouse&&(this._html.scrollLeft-=this.interval,this._node.style.left=
parseInt(this._node.style.left)-this.interval+"px",this._x-=this.interval,this._timer=setTimeout(d.hitch(this,"_autoScrollLeft"),this.recursiveTimer))},stopAutoScroll:function(){this._timer&&clearTimeout(this._timer);this._autoScrollActive=!1},destroy:function(){g.disconnect(this.resizeHandler)}});c.autoScroll=null;c.autoScroll=new c;return c});