// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/Tags","dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-style dojo/has dojo/html dojo/keys dojo/on dojo/query dojo/string dojo/store/Memory dijit/focus dijit/form/TextBox dijit/registry dijit/Tooltip dijit/_OnDijitClickMixin dijit/_TemplatedMixin dijit/_WidgetBase dgrid/OnDemandGrid dgrid/Selection dgrid/Keyboard ../kernel ../lang dojo/i18n!../nls/jsapi dojo/NodeList-traverse dojo/NodeList-manipulate dojo/_base/sniff".split(" "),
function(h,y,k,m,z,p,l,q,v,A,r,G,n,w,B,t,C,D,E,x,H,I,J,K,L,M,F,N){x=y([I,x,H],{declaredClass:"esri.dijit.Tags",templateString:'\x3cdiv class\x3d"${baseClass}"\x3e\x3c/div\x3e',baseClass:"esriTags",_attachmentNode:"",_autocompleteList:"",_grid:"",_store:"",_matchParam:"",_idProperty:"",_gridId:"",_filterId:"",_placeHolder:"",_noDataMsg:"",_maxWidth:"",_minWidth:"",_inputTextBox:"",_gridHasFocus:!1,_metaKeyPressed:!1,_shiftKeyPressed:!1,_CSS_STYLES:{CLASS_SELECTOR:".",ALL_SELECTOR:"\x3e",MULTI:"select2-container select2-container-multi",
CHOICES:"select2-choices",CHOICE:"select2-search-choice",SEARCH_CHOICE_FOCUS:"select2-search-choice-focus",SEARCH_FIELD:"select2-search-field",CLOSE_ICON:"select2-search-choice-close"},values:[],_selRows:[],_CHOICE_SELECTOR:"",_CHOICE_FOCUS:"",_CHOICE_FOCUS_ALL:"",tooltipPosition:[],constructor:function(a){this._idProperty=a.idProperty||"tag";this._maxWidth=a.maxWidth||"auto";this._minWidth=a.minWidth||"auto";this._matchParam=a.matchParam||"first";this.values=[];this._selRows=[];this._CHOICE_ALL_SELECTOR=
this._CSS_STYLES.CLASS_SELECTOR+this._CSS_STYLES.CHOICE+this._CSS_STYLES.ALL_SELECTOR;this._CHOICE_FOCUS=this._CSS_STYLES.CLASS_SELECTOR+this._CSS_STYLES.SEARCH_CHOICE_FOCUS;this._CHOICE_FOCUS_ALL=this._CHOICE_FOCUS+this._CSS_STYLES.ALL_SELECTOR},postMixInProperties:function(){this.inherited(arguments);var a=(new Date).getTime();this._tagsId="userTags-"+a;this._gridId="grid-"+a;this._filterId="filter-"+a;this._isIE8=9>v("ie");this.i18n={};k.mixin(this.i18n,N.widgets.tags)},postCreate:function(){if(this._isIE8)this._textTags=
new C({trim:!0,placeHolder:this.i18n.addTags,style:{minWidth:this.minWidth,maxWidth:this.maxWidth}},l.create("div",{id:this._tagsId},this.domNode)),this._textTags.startup(),p.add(this._textTags.domNode,"ie8Style");else{this._attachmentNode=l.create("div",{id:this._tagsId,className:"grid_1"},this.domNode);this._createContainerNode();this._createTagList();this._createDropDownList();this._createInput();var a=k.hitch(this,function(e,c,u){c=this._inputTextBox?this._inputTextBox.get("value")+"":"";if(1>
c.length)return!0;if(!e.tag)return!1;e=(e.tag+"").toLowerCase().match(new RegExp("^"+c.toLowerCase()));return null!==e&&0<e.length?!0:!1}),b=k.hitch(this,function(e,c,u){c=this._inputTextBox?this._inputTextBox.get("value")+"":"";return 1>c.length?!0:e.tag?(e.tag+"").toLowerCase().indexOf(c.toLowerCase())?!0:!1:!1}),d=[{field:this._idProperty}],g=[{attribute:this._idProperty,ascending:!0}];this._store=new B({idProperty:this._idProperty,data:[]});this._grid=new (y([J,K,L]))({store:this._store,showHeader:!1,
noDataMessage:this.i18n.noTagsFound,selectionMode:"extended",allowSelectAll:!0,cellNavigation:!1,columns:d,sort:g,renderRow:this._renderItem},this._dropDownList);this._grid.startup();p.add(this._grid.domNode,"gridHeightLimiter");this._grid.query="first"===this._matchParam?a:b;var f;this.own(this._inputTextBox.watch("value",k.hitch(this,function(e,c,u){f&&(clearTimeout(f),f=null);this._grid.refresh()})));this.own(this._grid.on(".dgrid-row:click",k.hitch(this,function(e){var c="";this._shiftKeyPressed||
this._metaKeyPressed?e.shiftKey||e.metaKey||e.ctrlKey||(c=this._selRows[0],this._createTags(c),this._store.remove(c),this._grid.refresh(),this._resetInputTextBox()):(c=this._grid.row(e).data.tag,this._createTags(c),this._store.remove(c),this._grid.refresh(),this._resetInputTextBox())})));this.own(this._grid.on("dgrid-deselect",k.hitch(this,function(e){this._selRows=[];for(var c in this._grid.selection)this._grid.selection.hasOwnProperty(c)&&this._selRows.push(c)})));this.own(this._grid.on("dgrid-select",
k.hitch(this,function(e){this._selRows=[];for(var c in this._grid.selection)this._grid.selection.hasOwnProperty(c)&&this._selRows.push(c)})));this.own(this.connect(this.domNode,"keydown","_keydownHandler"));window.onkeydown=k.hitch(this,function(e){if(e.shiftKey||e.ctrlKey||224===e.keyCode)this._metaKeyPressed=!0});this.own(this.connect(document,"onkeydown",k.hitch(this,function(e){this._metaKeyPressed=this._shiftKeyPressed=!0})))}},_keydownHandler:function(a){this._clearMessage();if(void 0!==t.curNode.value)var b=
t.curNode.value.length;var d=n(this._CHOICE_FOCUS,m.byId(this.id)),g=n(this._CSS_STYLES.CLASS_SELECTOR+this._CSS_STYLES.CHOICE,m.byId(this.id)).last();switch(a.keyCode){case r.RIGHT_ARROW:this._navigate(d,b,g,"right");this._hideGrid();break;case r.LEFT_ARROW:this._navigate(d,b,g,"left");this._hideGrid();break;case r.DOWN_ARROW:a.preventDefault();this._unhighlightTag(d);"none"===q.get(this._gridId,"display")&&this._showGrid();this._gridHasFocus||(this._grid.focus(this._setFocusOnFirstRow(this._grid,
0)),this._gridHasFocus=!0);break;case r.UP_ARROW:break;case r.BACKSPACE:if(0===b&&0===n(this._CHOICE_FOCUS_ALL).length&&void 0!==n(this._CHOICE_ALL_SELECTOR)[n(this._CHOICE_ALL_SELECTOR).length-1]){var f=n(this._CHOICE_ALL_SELECTOR)[n(this._CHOICE_ALL_SELECTOR).length-1].title;if(0<n("li",this._attachmentNode).length&&(l.destroy(g[0]),void 0!==f))try{this._store.add({tag:f})}catch(c){}}if(0<n(this._CHOICE_FOCUS_ALL).length&&(f=n(this._CHOICE_FOCUS_ALL).text(),l.destroy(d[0]),void 0!==f))try{this._store.add({tag:f})}catch(c){}this._grid.refresh();
0===b&&this._hideGrid();this._removeTag(f);this._emitRemoved(f);this._emitChanged();this.validate();break;case r.CTRL:this._metaKeyPressed=!0;break;case r.META:this._metaKeyPressed=!0;break;case r.SHIFT:this._shiftKeyPressed=!0;break;case r.ENTER:if(0<b){b=this._stripHTML(t.curNode.value);b=b.split(",");var e=[];h.forEach(b,function(c,u){-1===h.indexOf(e,c)&&e.push(w.trim(c))});h.forEach(e,k.hitch(this,function(c,u){this._isEmpty(c)||this._contains(this.values,c)||this._createTags(c)}))}else{for(b=
0;b<this._selRows.length;b++)this._createTags(this._selRows[b]),this._store.remove(this._selRows[b]);this._metaKeyPressed=this._shiftKeyPressed=!1}this._resetInputTextBox();a.preventDefault();t.focus(m.byId(this._filterId));break;case r.TAB:if(t.curNode.id!==this._filterId||0!==b){if(0<b)b=this._stripHTML(t.curNode.value),b=b.split(","),e=[],h.forEach(b,function(c,u){-1===h.indexOf(e,c)&&e.push(w.trim(c))}),h.forEach(e,k.hitch(this,function(c,u){this._isEmpty(c)||this._contains(this.values,c)||this._createTags(c)}));
else{for(b=0;b<this._selRows.length;b++)this._createTags(this._selRows[b]),this._store.remove(this._selRows[b]);this._metaKeyPressed=this._shiftKeyPressed=!1}this._resetInputTextBox();a.preventDefault();t.focus(m.byId(this._filterId))}break;case r.ESCAPE:this._hideGrid();break;default:-1<b&&("none"===q.get(m.byId(this._gridId),"display")&&this._showGrid(),this._unhighlightTag(d)),this._metaKeyPressed=!1}},_blurHandler:function(a,b,d){if(!this.focused){a=this._stripHTML(this._inputTextBox.value);if(0<
a.length){var g=[];a=a.split(",");h.forEach(a,function(f,e){-1===h.indexOf(g,f)&&g.push(w.trim(f))});h.forEach(g,k.hitch(this,function(f,e){this._isEmpty(f)||this._contains(this.values,f)||this._createTags(f)}));this._resetInputTextBox()}this._hideGrid()}this.validate()},isValid:function(){var a=this.get("value");return this.required?F.isDefined(a)&&0<a.length:!0},validate:function(){this._created&&!this.isValid()?(z.set(this.domNode,"aria-invalid","true"),this._displayMessage(this.i18n.required)):
(z.set(this.domNode,"aria-invalid","false"),this._displayMessage(null))},_clearMessage:function(){this._displayMessage(null)},_displayMessage:function(a){var b=this._isIE8?this._textTags.domNode:m.byId(this._tagsId);a&&this.focused?E.show(a,b):E.hide(b)},_resetInputTextBox:function(){D.byId(this._filterId).set("value","")},_isEmpty:function(a){a=a.replace(/^\s+|\s+$/,"");return 0===a.length?!0:!1},_navigate:function(a,b,d,g){0<a.length&&1>b?("right"===g?this._hightlightTag(a.next()):this._hightlightTag(a.prev()),
this._unhighlightTag(a)):1>b&&this._hightlightTag(d)},_contains:function(a,b){return 0<=h.indexOf(a,b)},_hightlightTag:function(a){a.addClass(this._CSS_STYLES.SEARCH_CHOICE_FOCUS)},_unhighlightTag:function(a){a.removeClass(this._CSS_STYLES.SEARCH_CHOICE_FOCUS)},_removeTag:function(a){a&&-1!==h.indexOf(this.values,a)&&this.values.splice(h.indexOf(this.values,a),1)},_hideGrid:function(){m.byId(this._gridId)&&q.set(m.byId(this._gridId),"display","none");this._gridHasFocus=!1},_showGrid:function(){q.set(m.byId(this._gridId),
"display","block");var a=q.get(m.byId(this._attachmentNode),"width");q.set(m.byId(this._gridId),"width",a+"px")},_setFocusOnFirstRow:function(a,b){return n(".dgrid-content .dgrid-cell",this._grid.domNode)[b]||n(".dgrid-content .dgrid-row",this._grid.domNode)[b]},_createTags:function(a){n(this._CHOICE_FOCUS,m.byId(this.id)).removeClass("select2-search-choice-focus");var b=l.create("li",null,this._autocompleteList);p.add(b,this._CSS_STYLES.CHOICE);b=l.create("div",{title:a},b);A.set(b,this._htmlEncode(a));
b=l.create("a",{href:"#"},b);p.add(b,this._CSS_STYLES.CLOSE_ICON);G(b,"click",k.hitch(this,function(d){var g=w.trim(d.target.parentElement.textContent);try{this._store.add({tag:g})}catch(f){}this._grid.refresh();this._removeTag(g);this._emitRemoved(g);this._emitChanged();l.destroy(d.target.parentNode.parentNode);d.preventDefault()}));b=D.byId(this._filterId);l.place(b.domNode,this._autocompleteList,"last");this._hideGrid();this.values.push(a);this._emitAdded(a);this._emitChanged()},_emitAdded:function(a){this.emit("tags-add",
{tag:a})},_emitRemoved:function(a){this.emit("tags-remove",{tag:a})},_emitChanged:function(){this.emit("tags-change",{tags:this.get("tags")})},_renderItem:function(a){return l.create("div",{innerHTML:a.tag})},_createContainerNode:function(){this._containerNode=l.create("div",null,this._attachmentNode);p.add(this._containerNode,this._CSS_STYLES.MULTI);q.set(this._containerNode,"maxWidth",this._maxWidth);q.set(this._containerNode,"minWidth",this._minWidth)},_createTagList:function(){this._autocompleteList=
l.create("ul",null,this._containerNode);p.add(this._autocompleteList,this._CSS_STYLES.CHOICES)},_createInput:function(){var a=l.create("li",null,this._autocompleteList,"last");p.add(a,this._CSS_STYLES.SEARCH_FIELD);this._inputTextBox=new C({id:this._filterId,placeHolder:this.i18n.addTags,intermediateChanges:!0,trim:!0,style:{border:"none"}},a);p.add(this._inputTextBox,"inputTextBox");q.set(this._inputTextBox,"width",this._minWidth);(8<v("ie")||4<v("trident"))&&p.add(this._inputTextBox.domNode,"ieStyle");
this.own(t.watch("curNode",k.hitch(this,this._blurHandler)))},_createDropDownList:function(){this._dropDownList=l.create("div",{id:this._gridId},this._containerNode);p.add(this._dropDownList,"dropDownList");q.set(this._dropDownList,"width",this._minWidth)},focus:function(){t.focus(this.domNode);this._isIE8?this._textTags.focus():this._inputTextBox.focus()},reset:function(){this.clearTags()},prepopulate:function(a){h.forEach(a,k.hitch(this,function(b,d){this._createTags(b);this._store.remove(b)}))},
clearTags:function(){var a=n(this._CSS_STYLES.CLASS_SELECTOR+this._CSS_STYLES.CHOICE,m.byId(this.id)),b=!1,d;0<a.length&&(b=!0,h.forEach(a,k.hitch(this,function(g,f){try{d=n(this._CHOICE_ALL_SELECTOR,m.byId(this.id))[0].title,this._store.add({tag:d})}catch(e){}l.destroy(g);this._emitRemoved(d)})),this.values=[],b&&this._emitChanged())},addStyledTags:function(a,b){p.add(m.byId(b),this._CSS_STYLES.MULTI);var d=l.create("ul",null,m.byId(b));p.add(d,this._CSS_STYLES.CHOICES);q.set(d,"border","none");
h.forEach(a,function(g,f){f=l.create("li",null,d);q.set(f,"padding","3px 5px 3px 5px");p.add(f,"select2-search-resultSet");f=l.create("div",{title:g},f);A.set(f,g)})},_getUniqueTags:function(a){var b=[],d;h.forEach(a,k.hitch(this,function(g){d=this._stripHTML(g);F.isDefined(d)&&0<d.length&&b.push(d)}));return h.filter(b,k.hitch(this,function(g,f){return h.indexOf(b,g)===f}))},_setValueAttr:function(a){this._setTagsAttr(a)},_getValueAttr:function(){return this._getTagsAttr()},_setTagsAttr:function(a){!a||
a instanceof Array||(a=a.split(","));this._isIE8?this._textTags&&this._textTags.set("value",this._getUniqueTags(a).join(",")):(this.clearTags(),this.prepopulate(a?this._getUniqueTags(a):[]))},_getTagsAttr:function(){return this._isIE8?this._textTags?this._textTags.get("value"):"":this.values?this.values.join(","):""},_setRequiredAttr:function(a){this.required=a},_getRequiredAttr:function(){return this.required},_setMinWidthAttr:function(a){this.minWidth=a},_setMaxWidthAttr:function(a){this.maxWidth=
a},_setKnownTagsAttr:function(a){if(!this._isIE8){var b=[],d;for(d=0;d<a.length;d++)0>h.indexOf(this.values,a[d])&&b.push(a[d]);this._store=new B({idProperty:this._idProperty,data:b});this._grid.set("store",this._store);this._grid.refresh()}},_stripHTML:function(a){return a&&a.replace(/<(?:.|\s)*?>/g,"")},_htmlEncode:function(a){return a?a.replace(/&/g,"\x26amp;").replace(/>/g,"\x26gt;").replace(/</g,"\x26lt;").replace(/"/g,"\x26quot;"):a}});v("extend-esri")&&k.setObject("dijit.Tags",x,M);return x});