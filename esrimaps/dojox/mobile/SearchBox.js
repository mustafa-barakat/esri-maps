//>>built
define("dojox/mobile/SearchBox","dojo/_base/declare dojo/_base/lang dojo/_base/window dijit/form/_SearchMixin dojox/mobile/TextBox dojo/dom-class dojo/keys dojo/touch dojo/on ./sniff".split(" "),function(l,v,m,n,p,q,d,f,r,g){return l("dojox.mobile.SearchBox",[p,n],{baseClass:"mblTextBox mblSearchBox",type:"search",placeHolder:"",incremental:!0,_setIncrementalAttr:function(a){this.incremental=a},_onInput:function(a){a.charOrCode==d.ENTER?a.charOrCode=229:this.incremental||(a.charOrCode=0);this.inherited(arguments)},
postCreate:function(){this.inherited(arguments);this.textbox.removeAttribute("incremental");this.textbox.hasAttribute("results")||this.textbox.setAttribute("results","0");5>g("ios")&&(q.add(this.domNode,"iphone4"),this.connect(this.textbox,"onfocus",function(){""!==this.textbox.value&&this.defer(function(){""===this.textbox.value&&this._onInput({charOrCode:d.ENTER})})}));this.connect(this.textbox,"onsearch",function(){this._onInput({charOrCode:d.ENTER})});var a=this,h,k,c;if(g("ios"))this.on(f.press,
function(b){h=b.touches?b.touches[0].pageX:b.pageX;k=b.touches?b.touches[0].pageY:b.pageY;c=r(m.doc,f.release,function(e){if(""!=a.get("value")){var t=e.pageX-h;var u=e.pageY-k;4>=Math.abs(t)&&4>=Math.abs(u)&&(e.preventDefault(),a.set("value",""),a._onInput({charOrCode:d.ENTER}))}c&&(c.remove(),c=null)});30<=a.domNode.getBoundingClientRect().right-(b.touches?b.touches[0].pageX:b.pageX)&&c&&(c.remove(),c=null)})}})});