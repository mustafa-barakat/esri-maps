//>>built
define("dojox/widget/rotator/ThumbnailController","dojo/_base/declare dojo/_base/connect dojo/_base/lang dojo/_base/event dojo/aspect dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/query".split(" "),function(m,u,g,n,p,e,q,h,r){return m("dojox.widget.rotator.ThumbnailController",null,{rotator:null,constructor:function(a,b){g.mixin(this,a);this._domNode=b;var c=this.rotator;if(c){for(;b.firstChild;)b.removeChild(b.firstChild);for(a=0;a<c.panes.length;a++){var d=c.panes[a].node,k=e.get(d,"thumbsrc")||
e.get(d,"src"),l=e.get(d,"alt")||"";/img/i.test(d.tagName)&&function(f){h.create("a",{classname:"dojoxRotatorThumb dojoxRotatorThumb"+f+" "+(f==c.idx?"dojoxRotatorThumbSelected":""),href:k,onclick:function(t){n.stop(t);c&&c.control.apply(c,["go",f])},title:l,innerHTML:'\x3cimg src\x3d"'+k+'" alt\x3d"'+l+'"/\x3e'},b)}(a)}p.after(c,"onUpdate",g.hitch(this,"_onUpdate"),!0)}},destroy:function(){h.destroy(this._domNode)},_onUpdate:function(a){var b=this.rotator;"onAfterTransition"==a&&(a=r(".dojoxRotatorThumb",
this._domNode).removeClass("dojoxRotatorThumbSelected"),b.idx<a.length&&q.add(a[b.idx],"dojoxRotatorThumbSelected"))}})});