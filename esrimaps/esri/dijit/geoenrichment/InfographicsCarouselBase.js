// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/geoenrichment/templates/InfographicsCarousel.html":'\x3cdiv style\x3d"display: inline-block;"\x3e\r\n    \x3ctable class\x3d"Browser_Table" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\r\n        \x3ctr\x3e\r\n            \x3ctd class\x3d"Browser_BackTd"\x3e\r\n                \x3cdiv class\x3d"Browser_Back" data-dojo-attach-point\x3d"_browseBackDiv" data-dojo-attach-event\x3d"click: _slideBack"\x3e\x3c/div\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd align\x3d"center"\x3e\r\n                \x3cdiv data-dojo-attach-point\x3d"_container" class\x3d"Browser_HostBorder"\x3e\r\n                    \x3cdiv data-dojo-attach-point\x3d"_titlePane" class\x3d"Browser_TitlePane" style\x3d"visibility: hidden;"\x3e\r\n                        \x3cdiv data-dojo-attach-point\x3d"_singleSelect"\x3e\x3c/div\x3e\r\n                        \x3cselect data-dojo-type\x3d"dijit/form/Select"\r\n                            data-dojo-attach-point\x3d"_select"\r\n                            data-dojo-props\x3d"maxHeight: 151"\r\n                            data-dojo-attach-event\x3d"onChange: _onSelectChange"\x3e\r\n                        \x3c/select\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv class\x3d"Browser_ContentPane"\x3e\r\n                        \x3cdiv data-dojo-type\x3d"esri/dijit/geoenrichment/Infographic"\r\n                            data-dojo-attach-point\x3d"_infographic"\r\n                            data-dojo-props\x3d"title: \'\'"\r\n                            data-dojo-attach-event\x3d"onDataRequest: _showProgress, onDataLoad: _onDataLoad, onDataReady: _onDataReady, onDataError: _onDataError"\r\n                            style\x3d"position: absolute; width: 100%; height: 100%; top: 0; left: 0;"\x3e\r\n                        \x3c/div\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv data-dojo-attach-point\x3d"_updateProgress" class\x3d"Browser_UpdateProgress" style\x3d"display: none;"\x3e\x3c/div\x3e\r\n                \x3c/div\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"Browser_ForwardTd"\x3e\r\n                \x3cdiv class\x3d"Browser_Forward" data-dojo-attach-point\x3d"_browseForwardDiv" data-dojo-attach-event\x3d"click: _slideForward"\x3e\x3c/div\x3e\r\n            \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n    \x3c/table\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_reloadProgress"\x3e\r\n        \x3cdiv class\x3d"Browser_ReloadProgressBack"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"Browser_ReloadProgress"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/geoenrichment/InfographicsCarouselBase","esri/declare dojo/_base/fx dojo/_base/lang dojo/aspect dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/on dojo/fx dojo/sniff dojox/gesture/swipe dojox/mvc/Templated ../_EventedWidget ./infographicUtils/theme dojo/text!./templates/InfographicsCarousel.html ./Infographic dijit/form/Select".split(" "),function(l,u,f,v,g,w,x,h,m,n,q,y,z,A,B,C){function D(a,c,b){function d(E,r,F,G,t){var p={};p[r]={start:F,end:G};t&&(p[r].units=
t);return u.animateProperty({node:E,properties:p,duration:b})}if(c&&b){var e=a.cloneNode(!0);a.parentNode.insertBefore(e,a);if(!x.isBodyLtr())switch(c){case "sf":c="sb";break;case "sb":c="sf"}switch(c){case "f":var k=n.combine([d(e,"opacity",1,0),d(a,"opacity",0,1)]);break;case "sf":k=n.combine([d(e,"left",0,-100,"%"),d(a,"left",100,0,"%")]);break;case "sb":k=n.combine([d(e,"left",0,100,"%"),d(a,"left",-100,0,"%")])}v.after(k,"onEnd",function(){w.destroy(e)});k.play()}}var H=l(y.Swipe,{_process:function(a,
c,b){b._locking=b._locking||{};b._locking[this.defaultEvent]||this.isLocked(b.currentTarget)||(b._locking[this.defaultEvent]=!0,this[c](a.data,b))}}),I=l(null,{_swipe:null,_node:null,_rtl:null,_ltr:null,_distance:50,constructor:function(a,c,b,d){this._node=a;this._rtl=c;this._ltr=b;d&&(this._distance=d);this._swipe=new H;m(this._node,this._swipe,function(){});m(this._node,this._swipe.end,f.hitch(this,"_end"))},_end:function(a){a=a.dx;Math.abs(a)<this._distance||(0>a&&this._rtl?this._rtl():this._ltr&&
this._ltr())}});return l("esri.dijit.geoenrichment.InfographicsCarouselBase",[z,A],{templateString:C,studyArea:null,outSR:null,selectedIndex:0,options:null,expanded:!0,returnGeometry:!1,animDuration:200,infographicsFactory:null,_items:null,_infographic:null,_select:null,_pendingAnimation:null,_pendingReload:!0,_browseDisabled:!1,_eventMap:{resize:["size"],"data-ready":["provider"],"data-error":["error"]},postCreate:function(){this.inherited(arguments);setTimeout(f.hitch(this,this._onResize),0);q("touch")&&
new I(this._container,f.hitch(this,"_slideForward"),f.hitch(this,"_slideBack"));q("esri-touch")&&m(this.domNode,"touchmove",function(a){a.stopPropagation()})},startup:function(){if(!this._started){this.inherited(arguments);this._infographic.autoTitle=!1;this._infographic.setGeoenrichment(this.infographicsFactory.createGeoenrichment());this.returnGeometry&&this.set("returnGeometry",this.returnGeometry);this.outSR&&this.set("outSR",this.outSR);this.studyArea&&this.set("studyArea",this.studyArea);var a=
this.options||this.infographicsFactory.getOptions();this.set("options",a)}},_setOptionsAttr:function(a){this._set("options",a);this._getReports();B.set(this.domNode,this.options.theme)},_setStudyAreaAttr:function(a){this._set("studyArea",a);this._started&&(this._infographic.set("studyArea",a),this._getReports())},_setSubtitleAttr:function(a){this._infographic.set("subtitle",a)},_setReturnGeometryAttr:function(a){this._set("returnGeometry",a);this._infographic.set("returnGeometry",a)},_setOutSRAttr:function(a){this._set("outSR",
a);this._infographic.set("outSR",a)},_getCountryIDAttr:function(){return this._infographic.get("countryID")},_setCountryIDAttr:function(a){this._infographic.set("countryID",a)},_setExpandedAttr:function(a){this._set("expanded",a);a?g.remove(this.domNode,"Collapsed"):g.add(this.domNode,"Collapsed");this._infographic.set("expanded",a);this._pendingReload=!0},_setSelectedIndexAttr:function(a){this.selectedIndex!=a&&(this._set("selectedIndex",a),this._updateSelection())},_getReports:function(){if(this.options&&
this._started){var a=this._infographic.get("countryID");a&&(this._pendingReload=!0,this._showProgress(),this.options.getItems(a).then(f.hitch(this,this._fillReports),f.hitch(this,this._onDataError)))}},_fillReports:function(a){this._items=[];this._select.removeOption(this._select.getOptions());for(var c=0;c<a.length;c++)if(a[c].isVisible){var b=a[c];this._select.addOption({value:this._items.length.toString(),label:b.title});this._items.push(b)}this._singleSelect.innerHTML=this._items.length?this._items[0].title:
"";this._browseDisabled=1>=this._items.length;this._select.domNode.style.display=this._browseDisabled?"none":"";this._singleSelect.style.display=this._browseDisabled?"":"none";g[this._browseDisabled?"add":"remove"](this._browseBackDiv,"Browser_Disabled");g[this._browseDisabled?"add":"remove"](this._browseForwardDiv,"Browser_Disabled");this._infographic.set("cacheLimit",this._items.length);this._titlePane.style.visibility=this._items.length?"":"hidden";this._updateSelection();this._infographic.set("studyAreaOptions",
this.options.studyAreaOptions)},_onDataReady:function(a){var c=!1,b=a.getData();if(0<b.features.length)for(var d=b.features[0],e=0;e<b.fields.length;e++)if(b.fields[e].fullName&&d.attributes[b.fields[e].name]){c=!0;break}c&&(D(this._infographic.domNode,this._pendingAnimation,this.animDuration),this._pendingAnimation=null,this.onDataReady(a));return c},onDataReady:function(a){},_onDataLoad:function(){this._hideProgress();this.onDataLoad()},onDataLoad:function(){},_onDataError:function(a){this._hideProgress();
this.onDataError(a)},onDataError:function(a){},_updateSelection:function(){if(this._items){this._pendingAnimation||(this._pendingAnimation="f");this._pendingReload=!0;var a=this._items[this.selectedIndex];this._select.set("value",this.selectedIndex);this._infographic.set("type",a.type);this._infographic.set("variables",a.variables)}},_showProgress:function(){this._pendingReload?(h.set(this._reloadProgress,"display",""),this._pendingReload=!1):h.set(this._updateProgress,"display","")},_hideProgress:function(){h.set(this._reloadProgress,
"display","none");h.set(this._updateProgress,"display","none")},_slideBack:function(){if(!this._browseDisabled){this._pendingAnimation="sb";this._infographic.set("effect","slideBack");var a=this.get("selectedIndex")-1;0>a&&(a=this._items.length-1);this.set("selectedIndex",a)}},_slideForward:function(){if(!this._browseDisabled){this._pendingAnimation="sf";var a=this.get("selectedIndex")+1;a>=this._items.length&&(a=0);this.set("selectedIndex",a)}},_onSelectChange:function(){this.set("selectedIndex",
+this._select.get("value"))},_onResize:function(){this.onResize([this.domNode.scrollWidth,this.domNode.scrollHeight])},onResize:function(a){}})});