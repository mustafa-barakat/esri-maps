// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/PopupUtil","dojo/_base/lang esri/dijit/geoenrichment/utils/onClickTouch dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style esri/dijit/geoenrichment/when esri/dijit/geoenrichment/ReportPlayer/config dijit/popup dijit/place dijit/Viewport ./DeviceUtil ./DnDUtil ./MouseUtil dojo/domReady!".split(" "),function(I,A,J,p,v,B,C,K,g,L,M,w,N,D){function O(c){if(!c)return["below"];var e=[];c.forEach(function(h){var b=v.isBodyLtr();switch(h){case "before-alt":b=
!b;case "after-alt":e.push(b?{aroundCorner:"BR",corner:"BL"}:{aroundCorner:"BL",corner:"BR"});e.push(b?{aroundCorner:"TR",corner:"TL"}:{aroundCorner:"TL",corner:"TR"});return}e.push(h)});return e}var l={makePopup:function(c,e,h,b){function P(d){if(b.overlay&&d._popupWrapper){var m=p.create("div",{"class":b.overlay.overlayClass});if(b.overlay.overlayParent)p.place(m,b.overlay.overlayParent);else{p.place(m,n,"before");var f=B.get(d._popupWrapper,"zIndex");B.set(m,"zIndex",f)}d.__popupOverlay=m}}function E(d){d.__popupOverlay&&
(p.destroy(d.__popupOverlay),d.__popupOverlay=null)}function F(d){q=!1;d.__bodyClickHandler&&d.__bodyClickHandler.remove();d.__bodyClickHandler=null;d.__popupWidgetOpenFlag=!1;E(d);b.onClose&&b.onClose()}function r(d){d&&b.stopEventPropagation&&d.stopPropagation();q||(q=!0,C(a||("function"==typeof c?c():c),function(m){a=m;a.domNode?(a.__openPopupWidgetFunc=r,n=g.moveOffScreen(a),C(b.onPreShow&&b.onPreShow(),function(){var f=O(b.orient);if(n&&!1!==b.allowAutoOrientation){var k=f.indexOf("below");-1!==
k&&-1===f.indexOf("above")&&f.splice(k+1,0,"above")}k=-1;if(-1!==f.indexOf("after")||-1!==f.indexOf("before")){k=M.getEffectiveBox(this.ownerDocument);var x=v.position(h,!1);k=Math.floor(Math.max(x.y+x.h,k.h-x.y))-10}b.noOverflow&&(a.baseClass="esriGENoOverflow "+a.baseClass);e.isLeftToRight=e.isLeftToRight=function(){return"rtl"!==document.dir};g.open({parent:e,popup:a,around:h,maxHeight:k,orient:f,onClose:function(){F(a)}});g._stack[g._stack.length-1].handlers.forEach(function(t){t.remove()});b.suppressReposition&&
clearTimeout(g._aroundMoveListener);b.noOverflow&&(a.baseClass=a.baseClass.replace("esriGENoOverflow ",""));n&&b.wrapperClass&&J.add(n,b.wrapperClass);a.__popupInfo=I.mixin({},g.getTopPopup());a.__popupInfo.orient=f;a.__popupInfo.around=h;E(a);P(a);b.onShow&&b.onShow(a);a.__popupWidgetOpenFlag=!0;u&&a.own&&a.own(u);a.__bodyClickHandler&&a.__bodyClickHandler.remove();if(!1!==b.closeOnClickOutside){var G="function"===typeof b.closeOnClickOutside?b.closeOnClickOutside:null;setTimeout(function(){a.__bodyClickHandler&&
a.__bodyClickHandler.remove();a.__bodyClickHandler=A(document.body,w.isMobileDevice()?w.press:H,function(t){q&&(D.fixTouchEvent(t),G&&!G(t)||D.isMouseOver(n)||b.isMouseOver&&b.isMouseOver()||a.isMouseOver&&a.isMouseOver()||a.__lockPopupWidgetFlag||l.close(a))})})}})):q=!1}))}if(c){if(K.isPlayerOnServer)return{remove:function(){}};b=b||{};var H=b.openMouseEvent?b.openMouseEvent:w.clickOrRelease,a="function"!==typeof c?c:null;if(a)var n=g.moveOffScreen(a);var q=!1;a&&(a.__openPopupWidgetFunc=r);if(!1!==
b.openOnMouseEvent){var y=r;if(b.toggleOnClick){var z;y=function(d){z=z||d.type;a?z===d.type&&l.toggle(a):r()}}var u=!1===b.onClickComponent?null:void 0!==b.noDragClickTolerance?N.addNoDragClickHandler(b.onClickComponent||h,y,{tolerance:b.noDragClickTolerance}):A(b.onClickComponent||h,H,y)}b.openPopup&&r();return{remove:function(){a&&"function"!==typeof a&&(l.close(a),F(a),a._popupWrapper&&(a.domNode&&a.domNode.parentNode===a._popupWrapper&&a._popupWrapper.removeChild(a.domNode),p.destroy(a._popupWrapper),
delete a._popupWrapper),delete a.__openPopupWidgetFunc,delete a.__popupWidgetOpenFlag);u&&u.remove()}}}},setLocked:function(c,e){c.__lockPopupWidgetFlag=e},open:function(c){c&&!c.__lockPopupWidgetFlag&&!c.__popupWidgetOpenFlag&&c.__openPopupWidgetFunc&&c.__openPopupWidgetFunc()},close:function(c){c&&!c.__lockPopupWidgetFlag&&g.close(c)},isOpen:function(c){return!(!c||!c.__popupWidgetOpenFlag)},toggle:function(c){l.isOpen(c)?l.close(c):l.open(c)},refresh:function(c){if(c){c=c.__popupInfo;var e=v.isBodyLtr();
c&&L.around(c.wrapper,c.around,c.orient,e)}},getWrapper:function(c){return c&&c._popupWrapper}};return l});