//>>built
define("dojox/dtl/contrib/dijit","dojo/_base/lang dojo/_base/connect dojo/_base/array dojo/query ../_base ../dom dojo/parser dojo/_base/sniff".split(" "),function(g,m,r,p,k,u,q,t){function n(a){var b=a.cloneNode(!0);t("ie")&&p("script",b).forEach("item.text \x3d this[index].text;",p("script",a));return b}var d=g.getObject("contrib.dijit",!0,k);d.AttachNode=g.extend(function(a,b){this._keys=a;this._object=b},{render:function(a,b){if(!this._rendered){this._rendered=!0;for(var c=0,e;e=this._keys[c];c++)a.getThis()[e]=
this._object||b.getParent()}return b},unrender:function(a,b){if(this._rendered){this._rendered=!1;for(var c=0,e;e=this._keys[c];c++)a.getThis()[e]===(this._object||b.getParent())&&delete a.getThis()[e]}return b},clone:function(a){return new this.constructor(this._keys,this._object)}});d.EventNode=g.extend(function(a,b){this._command=a;for(var c=a.split(/\s*,\s*/),e=g.trim,f=[],l=[];a=c.pop();)if(a){var h=null;-1!=a.indexOf(":")?(h=a.split(":"),a=e(h[0]),h=e(h.slice(1).join(":"))):a=e(a);h||(h=a);
f.push(a);l.push(h)}this._types=f;this._fns=l;this._object=b;this._rendered=[]},{_clear:!1,render:function(a,b){for(var c=0,e;e=this._types[c];c++){this._clear||this._object||(b.getParent()[e]=null);var f=this._fns[c];if(-1!=f.indexOf(" ")){this._rendered[c]&&(m.disconnect(this._rendered[c]),this._rendered[c]=!1);var l=r.map(f.split(" ").slice(1),function(h){return(new k._Filter(h)).resolve(a)});f=f.split(" ",2)[0]}this._rendered[c]||(this._object?(g.isArray(l),this._rendered[c]=m.connect(this._object,
e,a.getThis(),f)):this._rendered[c]=b.addEvent(a,e,f,l))}this._clear=!0;return b},unrender:function(a,b){for(;this._rendered.length;)m.disconnect(this._rendered.pop());return b},clone:function(){return new this.constructor(this._command,this._object)}});d.DojoTypeNode=g.extend(function(a,b){this._node=a;this._parsed=b;var c=a.getAttribute("dojoAttachEvent")||a.getAttribute("data-dojo-attach-event");c&&(this._events=new d.EventNode(g.trim(c)));if(c=a.getAttribute("dojoAttachPoint")||a.getAttribute("data-dojo-attach-point"))this._attach=
new d.AttachNode(g.trim(c).split(/\s*,\s*/));b?(a=n(a),b=d.widgetsInTemplate,d.widgetsInTemplate=!1,this._template=new k.DomTemplate(a),d.widgetsInTemplate=b):this._dijit=q.instantiate([n(a)])[0]},{render:function(a,b){if(this._parsed){var c=new k.DomBuffer;this._template.render(a,c);c=n(c.getRootNode());var e=document.createElement("div");e.appendChild(c);var f=e.innerHTML;e.removeChild(c);f!=this._rendered&&(this._rendered=f,this._dijit&&this._dijit.destroyRecursive(),this._dijit=q.instantiate([c])[0])}c=
this._dijit.domNode;this._events&&(this._events._object=this._dijit,this._events.render(a,b));this._attach&&(this._attach._object=this._dijit,this._attach.render(a,b));return b.concat(c)},unrender:function(a,b){return b.remove(this._dijit.domNode)},clone:function(){return new this.constructor(this._node,this._parsed)}});g.mixin(d,{widgetsInTemplate:!0,dojoAttachPoint:function(a,b){return new d.AttachNode(b.contents.slice(-1!==b.contents.indexOf("data-")?23:16).split(/\s*,\s*/))},dojoAttachEvent:function(a,
b){return new d.EventNode(b.contents.slice(-1!==b.contents.indexOf("data-")?23:16))},dojoType:function(a,b){var c=!1;" parsed"==b.contents.slice(-7)&&(c=!0);b=-1!==b.contents.indexOf("data-")?b.contents.slice(15):b.contents.slice(9);b=c?b.slice(0,-7):b.toString();return d.widgetsInTemplate?(a=a.swallowNode(),a.setAttribute("data-dojo-type",b),new d.DojoTypeNode(a,c)):new k.AttributeNode("data-dojo-type",b)},on:function(a,b){a=b.contents.split();return new d.EventNode(a[0]+":"+a.slice(1).join(" "))}});
d["data-dojo-type"]=d.dojoType;d["data-dojo-attach-point"]=d.dojoAttachPoint;d["data-dojo-attach-event"]=d.dojoAttachEvent;k.register.tags("dojox.dtl.contrib",{dijit:["attr:dojoType","attr:data-dojo-type","attr:dojoAttachPoint","attr:data-dojo-attach-point",["attr:attach","dojoAttachPoint"],["attr:attach","data-dojo-attach-point"],"attr:dojoAttachEvent","attr:data-dojo-attach-event",[/(attr:)?on(click|key(up))/i,"on"]]});return d});