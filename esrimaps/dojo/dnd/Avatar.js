/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/dnd/Avatar","../_base/declare ../_base/window ../dom ../dom-attr ../dom-class ../dom-construct ../hccss ../query".split(" "),function(m,t,n,l,p,a,k,q){return m("dojo.dnd.Avatar",null,{constructor:function(d){this.manager=d;this.construct()},construct:function(){var d=a.create("table",{"class":"dojoDndAvatar",style:{position:"absolute",zIndex:"1999",margin:"0px"}}),b=this.manager.source,g=a.create("tbody",null,d),c=a.create("tr",null,g),h=a.create("td",null,c),r=Math.min(5,this.manager.nodes.length),
f=0;k("highcontrast")&&a.create("span",{id:"a11yIcon",innerHTML:this.manager.copy?"+":"\x3c"},h);a.create("span",{innerHTML:b.generateText?this._generateText():""},h);for(l.set(c,{"class":"dojoDndAvatarHeader",style:{opacity:.9}});f<r;++f){if(b.creator)var e=b._normalizedCreator(b.getItem(this.manager.nodes[f].id).data,"avatar").node;else e=this.manager.nodes[f].cloneNode(!0),"tr"==e.tagName.toLowerCase()&&(c=a.create("table"),a.create("tbody",null,c).appendChild(e),e=c);e.id="";c=a.create("tr",null,
g);h=a.create("td",null,c);h.appendChild(e);l.set(c,{"class":"dojoDndAvatarItem",style:{opacity:(9-f)/10}})}this.node=d},destroy:function(){a.destroy(this.node);this.node=!1},update:function(){p.toggle(this.node,"dojoDndAvatarCanDrop",this.manager.canDropFlag);if(k("highcontrast")){var d=n.byId("a11yIcon"),b="+";this.manager.canDropFlag&&!this.manager.copy?b="\x3c ":this.manager.canDropFlag||this.manager.copy?this.manager.canDropFlag||(b="x"):b="o";d.innerHTML=b}q("tr.dojoDndAvatarHeader td span"+
(k("highcontrast")?" span":""),this.node).forEach(function(g){g.innerHTML=this.manager.source.generateText?this._generateText():""},this)},_generateText:function(){return this.manager.nodes.length.toString()}})});