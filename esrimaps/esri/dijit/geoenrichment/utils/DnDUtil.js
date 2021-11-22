// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/DnDUtil",["dojo/on","dojo/sniff","./DeviceUtil","./KeyboardUtil"],function(f,v,w,x){var u={MOBILE_TOLERANCE:10,LONG_PRESS_TIMEOUT:500,addNoDragClickHandler:function(a,m,b){b=b||{};return w.isMobileDevice()?u._addMobile(a,m,b):u._addPC(a,m,b)},_addPC:function(a,m,b){var k=b.tolerance||0,l,g,p=f(a,"mousedown",function(n){g&&g.remove();var q=n.clientX,r=n.clientY,h;l=f(document.body,"mousemove",function(c){if(!c.shiftKey&&!x.isCtrl(c)){var d=c.clientY;if(0<Math.abs(c.clientX-
q)||0<Math.abs(d-r))h=!0}});g=f.once(document.body,"mouseup",function(c){l.remove();var d=c.clientX,t=c.clientY;!h&&Math.abs(d-q)<=k&&Math.abs(t-r)<=k&&m(c)})});return{remove:function(){l&&l.remove();g&&g.remove();p&&p.remove()}}},_addMobile:function(a,m,b){function k(){g&&g.remove();p&&p.remove();n&&n.remove();clearTimeout(q)}var l=b.tolerance||u.MOBILE_TOLERANCE,g,p,n,q;var r=f(a,"touchstart",function(h){function c(e){return Math.abs(h.clientX-e.clientX)<l&&Math.abs(h.clientY-e.clientY)<l}k();var d;
if(b.detectLongPress){var t;p=f(a,"touchmove",function(e){t=e});q=setTimeout(function(){c(t||h)&&(b.ignoreReleaseIfLongPressHappened&&(d=!0),b.longPressCallback(h))},b.longPressTimeout||u.LONG_PRESS_TIMEOUT)}g=f.once(a,"touchend",function(e){!d&&c(e)&&m(e);k()});n=f.once(a,"touchcancel",k)});return{remove:function(){r&&r.remove();k()}}},addGlobalDragHanlder:function(a){function m(){b&&b.remove();k&&k.remove();l&&l.remove();g&&g.remove();p&&a.destroyDnDBox&&a.destroyDnDBox(p)}a.tolerance=0<a.tolerance?
a.tolerance:5;var b,k,l,g,p;return f(a.node,a.downEventName||w.press,function(n){m();if(!a.onMouseDown||a.onMouseDown(n)){var q=n.clientX,r=n.clientY,h=q,c=r;b=f(document.body,w.move,function(d){function t(){m();a.dragEnded&&a.dragEnded()}d.shiftKey||x.isCtrl(d)||!(Math.abs(q-d.clientX)>=a.tolerance||Math.abs(r-d.clientY)>=a.tolerance)||(b.remove(),a.dragStarted&&!a.dragStarted(d,d.clientX-h,d.clientY-c))||(h=d.clientX,c=d.clientY,p=a.createDnDBox&&a.createDnDBox(),k=f(document.body,w.move,function(e){a.dragMoved&&
a.dragMoved(e,e.clientX-h,e.clientY-c,t);h=e.clientX;c=e.clientY}),l=f.once(document.body,v("ie")||v("trident")?"mouseup, touchend, click":"mouseup, touchend",function(){t()}),g=f(document.body,"keyup",function(e){27==e.keyCode&&(m(),a.dragCanceled&&a.dragCanceled())}))});f.once(document.body,v("ie")||v("trident")?"mouseup, touchend, click":"mouseup, touchend",function(){b.remove()})}})}};return u});