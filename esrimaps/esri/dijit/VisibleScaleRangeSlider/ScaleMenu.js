// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/VisibleScaleRangeSlider/templates/ScaleMenu.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"${css.section}"\x3e\r\n    \x3cdiv class\x3d"${css.header}"\x3e${labels.current}\x3c/div\x3e\r\n    \x3cdiv class\x3d"${css.content}"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"dap_currentScaleLabel" class\x3d"${css.item} ${css.current}"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"dap_scaleInput" data-dojo-type\x3d"dijit/form/TextBox" class\x3d"${css.input}"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"${css.section}" data-dojo-attach-point\x3d"dap_recommendedScaleSection"\x3e\r\n    \x3cdiv class\x3d"${css.header}" data-dojo-attach-point\x3d"dap_scaleListHeader"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"${css.content}"\x3e\r\n      \x3col data-dojo-attach-point\x3d"dap_recommendedScales" class\x3d"${css.list}"\x3e\r\n        \x3cli data-dojo-attach-point\x3d"dap_mapScaleItem" class\x3d"${css.item} ${css.selectable}"\x3e\x3c/li\x3e\r\n        \x3c!--additional list items added dynamically--\x3e\r\n      \x3c/ol\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/VisibleScaleRangeSlider/ScaleMenu","../../kernel ../_EventedWidget ../_Tooltip ./recommendedScales ./ScaleRanges dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/dom-class dojo/dom-construct dojo/dom-prop dojo/dom-style dojo/has dojo/keys dojo/number dojo/on dojo/query dojo/string dojox/html/entities dojox/lang/functional/object dojo/i18n!../../nls/jsapi dojo/text!./templates/ScaleMenu.html dijit/form/TextBox".split(" "),
function(v,d,w,x,y,z,A,B,n,e,f,g,h,C,D,E,p,q,F,k,G,r,H,I){d=B([d,z,A,w],{declaredClass:"esri.dijit.VisibleScaleRangeSlider.ScaleMenu",templateString:I,baseClass:"esriScaleMenu",labels:H.widgets.visibleScaleRangeSlider,css:{header:"esriHeader",section:"esriSection",content:"esriContent",current:"esriCurrent",input:"esriInput",list:"esriList",item:"esriItem",inline:"esriInline",selectable:"esriSelectable",hidden:"esriHidden"},_elementValueMap:null,_elements:null,_scaleRangeCategories:null,_scaleRanges:null,
_rangeToScaleAndNodeLookup:null,constructor:function(){this._scaleRanges=new y},buildRendering:function(){this.inherited(arguments);this._rangeToScaleAndNodeLookup={map:{scale:null,node:this.dap_mapScaleItem}};var a=this.labels,c=a.featuredScaleLabels,b=x.all(),J=this.css.item+" "+this.css.selectable,t;n.forEach(r.keys(b),function(l){t=c[l];var u=b[l],m=k.substitute(t,{scaleLabel:this._formatScale(u)});m=g.create("li",{innerHTML:m,className:J},this.dap_recommendedScales);this._rangeToScaleAndNodeLookup[l]=
{scale:u,node:m}},this);var K=g.create("span",{innerHTML:a.setTo,className:this.css.inline}),L=g.create("span",{innerHTML:a.selectOne,className:this.css.inline});h.set(this.dap_scaleListHeader,"innerHTML",k.substitute(a.setToSelectOne,{setTo:K.outerHTML,selectOne:L.outerHTML}))},_formatScale:function(a){return"1:"+p.format(a)},postCreate:function(){this.inherited(arguments);this.own(q(this.domNode,q.selector("."+this.css.item+"."+this.css.selectable,"click"),e.hitch(this,function(a){a=a.target===
this.dap_mapScaleItem?this.options.scale.map:this._parseScale(a.target.innerHTML);this._emitScaleSelected(a)})));this.dap_scaleInput.on("keyDown",e.hitch(this,function(a){a.keyCode===E.ENTER&&this._handleCustomScaleInput()}));this.createTooltip(this.dap_scaleInput,this.labels.customScaleInputTooltip)},_emitScaleSelected:function(a){this.emit("scale-selected",{scale:a})},_handleCustomScaleInput:function(){var a=this._parseScale(this.dap_scaleInput.get("value"));isNaN(a)||this._emitScaleSelected(this._scaleRanges.clampScale(a))},
_parseScale:function(a){a=G.decode(a).replace(/.*\(/,"").replace(/\).*$/,"").replace(/.*1:/,"").replace(/[^0-9.\s]/g,"");return p.parse(a)},_setOptionsAttr:function(a){var c=a.scale,b=this._formatScale(c.current);h.set(this.dap_currentScaleLabel,"innerHTML",a.label);this.dap_scaleInput.set("value",b,!1);b=k.substitute(this.labels.featuredScaleLabels.current,{scaleLabel:this._formatScale(c.map)});this._rangeToScaleAndNodeLookup.map.scale=c.map;h.set(this.dap_mapScaleItem,"innerHTML",b);f.toggle(this.dap_mapScaleItem,
this.css.hidden,-1===c.map);this._scaleRanges.set("scaleRangeBounds",{minScale:c.min,maxScale:c.max});this._hideOutOfScaleRanges();this._set("options",a)},_hideOutOfScaleRanges:function(){var a=F("."+this.css.item+"."+this.css.selectable,this.dap_recommendedScales),c=this._scaleRanges;n.forEach(r.keys(this._rangeToScaleAndNodeLookup),function(b){b=this._rangeToScaleAndNodeLookup[b];f.toggle(b.node,this.css.hidden,!c.contains(b.scale))},this);a=a.every(function(b){return"none"===C.get(b,"display")});
f.toggle(this.dap_recommendedScaleSection,this.css.hidden,a)}});D("extend-esri")&&e.setObject("dijit.ScaleMenu",d,v);return d});