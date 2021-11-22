// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/form/templates/Tabs.html":'\x3cdiv class\x3d"gxeTabs gxeIndent" style\x3d"display:none;"\x3e\r\n  \x3cdiv class\x3d"gxeHeader" data-dojo-attach-point\x3d"tabsNode"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"gxeContainer" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/metadata/form/Tabs","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/event dojo/on dojo/keys dojo/topic dojo/dom-class dojo/dom-construct dojo/dom-style dojo/has ../base/Templated dojo/text!./templates/Tabs.html ../base/TabButton ../base/TabRadio ../../../kernel".split(" "),function(h,e,f,n,p,k,t,l,q,g,u,v,w,x,y,z){h=h([v],{_activeTabButton:null,_isGxeTabs:!0,_tabButtons:null,templateString:w,useRadios:!1,showPromptIfRadios:!0,promptLabel:null,postCreate:function(){this.inherited(arguments);
this._tabButtons=[];this.tabsNode.setAttribute("role","tablist")},startup:function(){this._started||(this.noIndent&&l.remove(this.domNode,"gxeIndent"),this.inherited(arguments),this._buildTabs())},_activateTab:function(a){var d=this.useRadios;f.forEach(this._tabButtons,function(b){b===a?(b.domNode.setAttribute("aria-selected","true"),b.tabWgt.domNode.setAttribute("aria-hidden","false"),l.add(b.domNode,"current"),g.set(b.tabWgt.domNode,"display","block"),d&&(b.tabWgt._isOptionallyOff=!1)):(b.domNode.setAttribute("aria-selected",
"false"),b.tabWgt.domNode.setAttribute("aria-hidden","true"),l.remove(b.domNode,"current"),g.set(b.tabWgt.domNode,"display","none"),d&&(b.tabWgt._isOptionallyOff=!0))});try{t.publish("gxe/tab-activated",{tabs:this,button:a})}catch(b){console.error(b)}},_addTab:function(a){var d=this._getLabel(a);g.set(a.domNode,"display","none");var b=null,A=this.id+"_radios";b=this.useRadios?new y({label:d,tabWgt:a,radioName:A,onClick:e.hitch(this,function(c){this._activateTab(c)})}):new x({label:d,tabWgt:a,onClick:e.hitch(this,
function(c){this._activateTab(c)})});this.own(p(b.domNode,"focus",e.hitch(this,function(){b.setChecked&&b.setChecked(!0);this._activateTab(b)})));this.own(p(b.domNode,"keydown",e.hitch(this,function(c){var m=null;if(c.keyCode===k.RIGHT_ARROW)c=this._tabButtons.indexOf(b),-1!==c&&c<this._tabButtons.length-1&&(m=this._tabButtons[c+1]);else if(c.keyCode===k.LEFT_ARROW)c=this._tabButtons.indexOf(b),0<c&&(m=this._tabButtons[c-1]);else if(c.keyCode===k.DOWN_ARROW)"function"===typeof a.focusDown&&(n.stop(c),
a.focusDown(c));else if(c.keyCode===k.UP_ARROW)for(n.stop(c),c=this.getParent();c;){if(c._isGxeTabs){f.some(c._tabButtons,function(r){if(l.contains(r.domNode,"current"))return r.domNode.focus(),!0});break}c=c.getParent()}m&&m.domNode.focus()})));b.domNode.setAttribute("role","tab");b.domNode.setAttribute("aria-controls",a.id);b.domNode.setAttribute("tabindex","0");a.domNode.setAttribute("role","tabpanel");a.domNode.setAttribute("aria-labelledby",b.id);a.tabButton=b;(a.hide||a.notApplicable)&&g.set(b.domNode,
"display","none");q.place(b.domNode,this.tabsNode,"last");this._tabButtons.push(b);return b},_addPrompt:function(){var a=this.promptLabel;null===a&&(a=this.i18nBase.general.choose);var d=q.create("span",{"class":"gxeEditOnly gxeTabsPrompt"},this.tabsNode,"last");this.setNodeText(d,a)},_buildTabs:function(){var a=null;this.useRadios&&this.showPromptIfRadios&&this._addPrompt();f.forEach(this.getChildren(),function(d){this._addTab(d)},this);f.some(this._tabButtons,function(d){if(d.tabWgt&&!d.tabWgt.notApplicable)return a=
d,!0});a&&(a.radioName&&a.setChecked(!0),this._activateTab(a),g.set(this.domNode,"display","block"))},ensureActiveTab:function(a){f.some(this._tabButtons,function(d){if(d.tabWgt===a)return this._activateTab(d),this.useRadios&&d.setChecked&&d.setChecked(!0),!0},this)},_getLabel:function(a){return"function"===typeof a.getLabelString?a.getLabelString():"string"===typeof a.label?a.label:"Untitled"}});u("extend-esri")&&e.setObject("dijit.metadata.form.Tabs",h,z);return h});