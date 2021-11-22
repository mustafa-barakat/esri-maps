//>>built
define("dojox/dtl/contrib/dom","dojo/_base/kernel dojo/_base/lang dojo/_base/connect dojo/dom-style dojo/dom-construct ../_base ../dom".split(" "),function(l,e,d,m,n,k,q){var h=e.getObject("contrib.dom",!0,k),p={render:function(){return this.contents}};h.StyleNode=e.extend(function(b){this.contents={};this._current={};this._styles=b;for(var a in b){if(-1!=b[a].indexOf("{{"))var c=new k.Template(b[a]);else c=e.delegate(p),c.contents=b[a];this.contents[a]=c}},{render:function(b,a){for(var c in this.contents){var f=
this.contents[c].render(b);this._current[c]!=f&&m.set(a.getParent(),c,this._current[c]=f)}return a},unrender:function(b,a){this._current={};return a},clone:function(b){return new this.constructor(this._styles)}});h.BufferNode=e.extend(function(b,a){this.nodelist=b;this.options=a},{_swap:function(b,a){if(!this.swapped&&this.parent.parentNode){if("node"==b){if(3==a.nodeType&&!this.options.text||1==a.nodeType&&!this.options.node)return}else if("class"==b&&"class"!=b)return;this.onAddNode&&d.disconnect(this.onAddNode);
this.onRemoveNode&&d.disconnect(this.onRemoveNode);this.onChangeAttribute&&d.disconnect(this.onChangeAttribute);this.onChangeData&&d.disconnect(this.onChangeData);this.swapped=this.parent.cloneNode(!0);this.parent.parentNode.replaceChild(this.swapped,this.parent)}},render:function(b,a){this.parent=a.getParent();this.options.node&&(this.onAddNode=d.connect(a,"onAddNode",e.hitch(this,"_swap","node")),this.onRemoveNode=d.connect(a,"onRemoveNode",e.hitch(this,"_swap","node")));this.options.text&&(this.onChangeData=
d.connect(a,"onChangeData",e.hitch(this,"_swap","node")));this.options["class"]&&(this.onChangeAttribute=d.connect(a,"onChangeAttribute",e.hitch(this,"_swap","class")));a=this.nodelist.render(b,a);this.swapped?(this.swapped.parentNode.replaceChild(this.parent,this.swapped),n.destroy(this.swapped)):(this.onAddNode&&d.disconnect(this.onAddNode),this.onRemoveNode&&d.disconnect(this.onRemoveNode),this.onChangeAttribute&&d.disconnect(this.onChangeAttribute),this.onChangeData&&d.disconnect(this.onChangeData));
delete this.parent;delete this.swapped;return a},unrender:function(b,a){return this.nodelist.unrender(b,a)},clone:function(b){return new this.constructor(this.nodelist.clone(b),this.options)}});e.mixin(h,{buffer:function(b,a){var c=a.contents.split().slice(1);a={};for(var f=!1,g=c.length;g--;)f=!0,a[c[g]]=!0;f||(a.node=!0);c=b.parse(["endbuffer"]);b.next_token();return new h.BufferNode(c,a)},html:function(b,a){l.deprecated("{% html someVariable %}","Use {{ someVariable|safe }} instead");return b.create_variable_node(a.contents.slice(5)+
"|safe")},style_:function(b,a){b={};a=a.contents.replace(/^style\s+/,"");a=a.split(/\s*;\s*/g);for(var c=0,f;f=a[c];c++){var g=f.split(/\s*:\s*/g);f=g[0];(g=e.trim(g[1]))&&(b[f]=g)}return new h.StyleNode(b)}});k.register.tags("dojox.dtl.contrib",{dom:["html","attr:style","buffer"]});return h});