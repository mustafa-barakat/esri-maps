//>>built
define("dojox/dtl/render/dom",["dojo/_base/lang","dojo/dom","../Context","../dom","../_base"],function(e,f,g,c,h){c=e.getObject("render.dom",!0,h);c.Render=function(a,b){this._tpl=b;this.domNode=f.byId(a)};e.extend(c.Render,{setAttachPoint:function(a){this.domNode=a},render:function(a,b,d){if(!this.domNode)throw Error("You cannot use the Render object without specifying where you want to render it");this._tpl=b=b||this._tpl;d=d||b.getBuffer();a=a||new g;a=b.render(a,d).getParent();if(!a)throw Error("Rendered template does not have a root node");
this.domNode!==a&&(this.domNode.parentNode&&this.domNode.parentNode.replaceChild(a,this.domNode),this.domNode=a)}});return c});