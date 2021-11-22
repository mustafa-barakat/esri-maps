//>>built
define("dgrid/Keyboard","dojo/_base/declare dojo/aspect dojo/on dojo/_base/lang dojo/has put-selector/put ./util/misc dojo/_base/Deferred dojo/_base/sniff".split(" "),function(w,t,q,u,r,x,z,A){function B(a){a.preventDefault()}var K={checkbox:1,radio:1,button:1},C=/\bdgrid-cell\b/,D=/\bdgrid-row\b/,h=w("dgrid.Keyboard",null,{pageSkip:10,tabIndex:0,keyMap:null,headerKeyMap:null,postMixInProperties:function(){this.inherited(arguments);this.keyMap||(this.keyMap=u.mixin({},h.defaultKeyMap));this.headerKeyMap||
(this.headerKeyMap=u.mixin({},h.defaultHeaderKeyMap))},postCreate:function(){function a(e){var d=e.target;return d.type&&(!K[d.type]||32==e.keyCode)}function c(e){function d(){b._focusedHeaderNode&&(b._focusedHeaderNode.tabIndex=-1);if(b.showHeader){if(l)for(var f=0,g,m=b.headerNode.getElementsByTagName("th");g=m[f];++f){if(n.test(g.className)){b._focusedHeaderNode=p=g;break}}else b._focusedHeaderNode=p=b.headerNode;p&&(p.tabIndex=b.tabIndex)}}var l=b.cellNavigation,n=l?C:D,k=e===b.headerNode,p=e;
k?(d(),t.after(b,"renderHeader",d,!0)):t.after(b,"renderArray",function(f){return A.when(f,function(g){var m=b._focusedNode||p;if(n.test(m.className)&&z.contains(e,m))return g;for(var E=0,L=e.getElementsByTagName("*"),y;y=L[E];++E)if(n.test(y.className)){m=b._focusedNode=y;break}m.tabIndex=b.tabIndex;return g})});b._listeners.push(q(e,"mousedown",function(f){a(f)||b._focusOnNode(f.target,k,f)}));b._listeners.push(q(e,"keydown",function(f){if(!f.metaKey&&!f.altKey){var g=b[k?"headerKeyMap":"keyMap"][f.keyCode];
g&&!a(f)&&g.call(b,f)}}))}this.inherited(arguments);var b=this;this.tabableHeader&&(c(this.headerNode),this._listeners.push(q(this.headerNode,"dgrid-cellfocusin",function(){b.scrollTo({x:this.scrollLeft})})));c(this.contentNode);this._debouncedEnsureScroll=z.debounce(this._ensureScroll,this)},removeRow:function(a){if(!this._focusedNode)return this.inherited(arguments);var c=this,b=document.activeElement===this._focusedNode,e=this[this.cellNavigation?"cell":"row"](this._focusedNode),d=e.row||e,l;a=
a.element||a;a===d.element&&((l=this.down(d,!0))&&l.element!==a||(l=this.up(d,!0)),this._removedFocus={active:b,rowId:d.id,columnId:e.column&&e.column.id,siblingId:l&&l.element!==a?l.id:void 0},setTimeout(function(){c._removedFocus&&c._restoreFocus(d.id)},0),this._focusedNode=null);this.inherited(arguments)},insertRow:function(a){var c=this.inherited(arguments);this._removedFocus&&!this._removedFocus.wait&&this._restoreFocus(c);return c},_restoreFocus:function(a){var c=this._removedFocus,b;if((a=
(a=a&&this.row(a))&&a.element&&a.id===c.rowId?a:"undefined"!==typeof c.siblingId&&this.row(c.siblingId))&&a.element){if(!a.element.parentNode.parentNode){c.wait=!0;return}"undefined"!==typeof c.columnId&&(b=this.cell(a,c.columnId))&&b.element&&(a=b);c.active&&0!==a.element.offsetHeight?this._focusOnNode(a,!1,null):(x(a.element,".dgrid-focus"),a.element.tabIndex=this.tabIndex,this._focusedNode=a.element)}delete this._removedFocus},addKeyHandler:function(a,c,b){return t.after(this[b?"headerKeyMap":
"keyMap"],a,c,!0)},_ensureRowScroll:function(a){var c=this.getScrollPosition().y;c>a.offsetTop?this.scrollTo({y:a.offsetTop}):c+this.contentNode.offsetHeight<a.offsetTop+a.offsetHeight&&this.scrollTo({y:a.offsetTop-this.contentNode.offsetHeight+a.offsetHeight})},_ensureColumnScroll:function(a){var c=this.getScrollPosition().x,b=a.offsetLeft;if(c>b)this.scrollTo({x:b});else{var e=this.bodyNode.clientWidth;a=a.offsetWidth;var d=b+a;c+e<d&&this.scrollTo({x:e>a?d-e:b})}},_ensureScroll:function(a,c){this.cellNavigation&&
(this.columnSets||1<this.subRows.length)&&!c&&this._ensureRowScroll(a.row.element);this.bodyNode.clientWidth<this.contentNode.offsetWidth&&this._ensureColumnScroll(a.element)},_focusOnNode:function(a,c,b){var e="_focused"+(c?"Header":"")+"Node",d=this[e],l=this.cellNavigation?"cell":"row",n=this[l](a),k;if(a=n&&n.element){if(this.cellNavigation){var p=a.getElementsByTagName("input");var f=0;for(k=p.length;f<k;f++){var g=p[f];if((-1!=g.tabIndex||"_dgridLastValue"in g)&&!g.disabled){8>r("ie")&&(g.style.position=
"relative");g.focus();8>r("ie")&&(g.style.position="");var m=!0;break}}}null!==b&&(b=u.mixin({grid:this},b),b.type&&(b.parentType=b.type),b.bubbles||(b.bubbles=!0));d&&(x(d,"!dgrid-focus[!tabIndex]"),8>r("ie")&&(d.style.position=""),b&&(b[l]=this[l](d),q.emit(d,"dgrid-cellfocusout",b)));d=this[e]=a;b&&(b[l]=n);e=this.cellNavigation?C:D;!m&&e.test(a.className)&&(8>r("ie")&&(a.style.position="relative"),a.tabIndex=this.tabIndex,a.focus());x(a,".dgrid-focus");b&&q.emit(d,"dgrid-cellfocusin",b);this._debouncedEnsureScroll(n,
c)}},focusHeader:function(a){this._focusOnNode(a||this._focusedHeaderNode,!0)},focus:function(a){(a=a||this._focusedNode)?this._focusOnNode(a,!1):this.contentNode.focus()}}),v=h.moveFocusVertical=function(a,c){if(this._focusOnNode&&a.target!==this.contentNode){var b=this.cellNavigation,e=this[b?"cell":"row"](a);e=b&&e.column.id;c=this.down(this._focusedNode,c,!0);b&&(c=this.cell(c,e));this._focusOnNode(c,!1,a);a.preventDefault()}};w=h.moveFocusUp=function(a){v.call(this,a,-1)};var M=h.moveFocusDown=
function(a){v.call(this,a,1)},N=h.moveFocusPageUp=function(a){v.call(this,a,-this.pageSkip)},O=h.moveFocusPageDown=function(a){v.call(this,a,this.pageSkip)},F=h.moveFocusHorizontal=function(a,c){if(this.cellNavigation&&a.target!==this.contentNode){var b=!this.row(a);this._focusOnNode(this.right(this["_focused"+(b?"Header":"")+"Node"],c),b,a);a.preventDefault()}},G=h.moveFocusLeft=function(a){F.call(this,a,-1)},H=h.moveFocusRight=function(a){F.call(this,a,1)},I=h.moveHeaderFocusEnd=function(a,c){if(this.cellNavigation){var b=
this.headerNode.getElementsByTagName("th");this._focusOnNode(b[c?0:b.length-1],!0,a)}a.preventDefault()},P=h.moveHeaderFocusHome=function(a){I.call(this,a,!0)},J=h.moveFocusEnd=function(a,c){var b=this,e=this.cellNavigation,d=this.contentNode,l=d.scrollTop+(c?0:d.scrollHeight);d=d[c?"firstChild":"lastChild"];var n=-1<d.className.indexOf("dgrid-preload"),k=n?d[(c?"next":"previous")+"Sibling"]:d,p=k.offsetTop+(c?0:k.offsetHeight);if(n){for(;k&&0>k.className.indexOf("dgrid-row");)k=k[(c?"next":"previous")+
"Sibling"];if(!k)return}if(!n||1>d.offsetHeight)e&&(k=this.cell(k,this.cell(a).column.id)),this._focusOnNode(k,!1,a);else{r("dom-addeventlistener")||(a=u.mixin({},a));var f=t.after(this,"renderArray",function(g){f.remove();return A.when(g,function(m){m=m[c?0:m.length-1];e&&(m=b.cell(m,b.cell(a).column.id));b._focusOnNode(m,!1,a)})})}l===p&&a.preventDefault()},Q=h.moveFocusHome=function(a){J.call(this,a,!0)};h.defaultKeyMap={32:B,33:N,34:O,35:J,36:Q,37:G,38:w,39:H,40:M};h.defaultHeaderKeyMap={32:B,
35:I,36:P,37:G,39:H};return h});