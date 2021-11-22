//>>built
define("dojox/editor/plugins/ResizeTableColumn",["dojo","dijit","dojox","./TablePlugins"],function(b,B,D,C){var A=b.declare("dojox.editor.plugins.ResizeTableColumn",C,{constructor:function(){this.isLtr=this.dir?"ltr"==this.dir:b._isBodyLtr();this.ruleDiv=b.create("div",{style:"top: -10000px; z-index: 10001"},b.body(),"last")},setEditor:function(m){function p(a,e){var c=b.query("\x3e td",a.parentNode);switch(e){case "first":return c[0]==a;case "last":return c[c.length-1]==a;default:return!1}}function w(a){for(a=
a.nextSibling;a&&(!a.tagName||"td"!=a.tagName.toLowerCase());)a=a.nextSibling;return a}function q(a){for(;(a=a.parentNode)&&"table"!=a.tagName.toLowerCase(););return a}function x(a){for(var e=b.query("td",q(a)),c=e.length,d=0;d<c;d++)if(b.position(e[d]).x==b.position(a).x)return e[d];return null}function r(a,e){function c(l,f){if(!f)return 0;if("medium"==f)return 1;if(f.slice&&"px"==f.slice(-2))return parseFloat(f);with(l){l=style.left;var t=runtimeStyle.left;runtimeStyle.left=currentStyle.left;try{style.left=
f,f=style.pixelLeft}catch(u){f=0}style.left=l;runtimeStyle.left=t}return f}if(b.isIE){var d=a.currentStyle,h=c(a,d.borderLeftWidth),g=c(a,d.borderRightWidth),n=c(a,d.paddingLeft);d=c(a,d.paddingRight);a.style.width=e-h-g-n-d}else b.marginBox(a,{w:e})}var k=this.ruleDiv;this.editor=m;this.editor.customUndo=!0;this.onEditorLoaded();m.onLoadDeferred.addCallback(b.hitch(this,function(){this.connect(this.editor.editNode,"onmousemove",function(a){var e=b.position(m.iframe,!0),c=e.x,d=a.clientX;if(this.isDragging){var h=
this.activeCell;a=b.position(h);e=a.x;a=a.w;var g=w(h),n=b.position(q(h).parentNode);h=n.x;n=n.w;if(g){var l=b.position(g);var f=l.x;l=l.w}(this.isLtr&&(k.headerColumn&&g&&h<d&&d<e+a||!g&&e<d&&d<h+n||g&&e<d&&d<f+l)||!this.isLtr&&(k.headerColumn&&g&&h>d&&d>e||!g&&e+a>d&&d>h||g&&e+a>d&&d>f))&&b.style(k,{left:c+d+"px"})}else if(f=a.target,f.tagName&&"td"==f.tagName.toLowerCase()){l=b.position(f);a=l.x;g=l.w;c=c+l.x-2;if(this.isLtr){if(k.headerColumn=!0,!p(f,"first")||d>a+g/2)c+=g,k.headerColumn=!1}else k.headerColumn=
!1,p(f,"first")&&d>a+g/2&&(c+=g,k.headerColumn=!0);b.style(k,{position:"absolute",cursor:"col-resize",display:"block",width:"4px",backgroundColor:"transparent",top:e.y+l.y+"px",left:c+"px",height:l.h+"px"});this.activeCell=f}else b.style(k,{display:"none",top:"-10000px"})});this.connect(k,"onmousedown",function(a){var e=b.position(m.iframe,!0),c=b.position(q(this.activeCell));this.isDragging=!0;b.style(m.editNode,{cursor:"col-resize"});b.style(k,{width:"1px",left:a.clientX+"px",top:e.y+c.y+"px",height:c.h+
"px",backgroundColor:"#777"})});this.connect(k,"onmouseup",function(a){var e=this.activeCell,c=b.position(e),d=c.w,h=c.x;c=w(e);var g=b.position(m.iframe).x,n=q(e),l=b.position(n),f=n.getAttribute("cellspacing");a=a.clientX;var t=x(e),u;if(!f||0>(f=parseInt(f,10)))f=2;if(c){var v=b.position(c);var y=v.x;v=v.w;var z=x(c)}this.isLtr?k.headerColumn?h=g+h+d-a:(h=a-g-h,c&&(u=g+y+v-a-f)):k.headerColumn?h=a-g-h:(h=g+h+d-a,c&&(u=a-g-y-f));this.isDragging=!1;r(t,h);c&&(k.headerColumn||r(z,u));(k.headerColumn&&
p(e,"first")||p(e,"last"))&&b.marginBox(n,{w:l.w+h-d});r(t,b.position(e).w);c&&r(z,b.position(c).w);b.style(m.editNode,{cursor:"auto"});b.style(k,{display:"none",top:"-10000px"});this.activeCell=null})}))}});b.subscribe(B._scopeName+".Editor.getPlugin",null,function(m){if(!m.plugin&&m.args&&m.args.command){var p=m.args.command.charAt(0).toLowerCase()+m.args.command.substring(1,m.args.command.length);"resizeTableColumn"==p&&(m.plugin=new A({commandName:p}))}});return A});