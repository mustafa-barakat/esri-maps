//>>built
define("dojox/fx/_base","dojo/_base/array dojo/_base/lang dojo/_base/fx dojo/fx dojo/dom dojo/dom-style dojo/dom-geometry dojo/_base/connect dojo/_base/html".split(" "),function(k,h,g,m,q,u,A,x,r){k=h.getObject("dojox.fx",!0);h.mixin(k,{anim:g.anim,animateProperty:g.animateProperty,fadeTo:g._fade,fadeIn:g.fadeIn,fadeOut:g.fadeOut,combine:m.combine,chain:m.chain,slideTo:m.slideTo,wipeIn:m.wipeIn,wipeOut:m.wipeOut});k.sizeTo=function(a){var d=a.node=q.byId(a.node),c=a.method||"chain";a.duration||(a.duration=
500);"chain"==c&&(a.duration=Math.floor(a.duration/2));var b,f,e,n,v,w=null,B=function(p){return function(){var l=u.getComputedStyle(p),t=l.position,y=l.width,z=l.height;b="absolute"==t?p.offsetTop:parseInt(l.top)||0;e="absolute"==t?p.offsetLeft:parseInt(l.left)||0;v="auto"==y?0:parseInt(y);w="auto"==z?0:parseInt(z);n=e-Math.floor((a.width-v)/2);f=b-Math.floor((a.height-w)/2);"absolute"!=t&&"relative"!=t&&(l=u.coords(p,!0),b=l.y,e=l.x,p.style.position="absolute",p.style.top=b+"px",p.style.left=e+
"px")}}(d);d=g.animateProperty(h.mixin({properties:{height:function(){B();return{end:a.height||0,start:w}},top:function(){return{start:b,end:f}}}},a));c=g.animateProperty(h.mixin({properties:{width:function(){return{start:v,end:a.width||0}},left:function(){return{start:e,end:n}}}},a));return m["combine"==a.method?"combine":"chain"]([d,c])};k.slideBy=function(a){var d,c,b=function(f){return function(){var e=u.getComputedStyle(f),n=e.position;d="absolute"==n?f.offsetTop:parseInt(e.top)||0;c="absolute"==
n?f.offsetLeft:parseInt(e.left)||0;"absolute"!=n&&"relative"!=n&&(e=A.coords(f,!0),d=e.y,c=e.x,f.style.position="absolute",f.style.top=d+"px",f.style.left=c+"px")}}(a.node=q.byId(a.node));b();a=g.animateProperty(h.mixin({properties:{top:d+(a.top||0),left:c+(a.left||0)}},a));x.connect(a,"beforeBegin",a,b);return a};k.crossFade=function(a){var d=a.nodes[0]=q.byId(a.nodes[0]),c=r.style(d,"opacity"),b=a.nodes[1]=q.byId(a.nodes[1]);r.style(b,"opacity");return m.combine([g[0==c?"fadeIn":"fadeOut"](h.mixin({node:d},
a)),g[0==c?"fadeOut":"fadeIn"](h.mixin({node:b},a))])};k.highlight=function(a){var d=a.node=q.byId(a.node);a.duration=a.duration||400;var c=a.color||"#ffff99",b=r.style(d,"backgroundColor");"rgba(0, 0, 0, 0)"==b&&(b="transparent");a=g.animateProperty(h.mixin({properties:{backgroundColor:{start:c,end:b}}},a));"transparent"==b&&x.connect(a,"onEnd",a,function(){d.style.backgroundColor=b});return a};k.wipeTo=function(a){a.node=q.byId(a.node);var d=a.node,c=d.style,b=a.width?"width":"height",f={};f[b]=
{start:function(){c.overflow="hidden";if("hidden"==c.visibility||"none"==c.display)return c[b]="1px",c.display="",c.visibility="",1;var e=r.style(d,b);return Math.max(e,1)},end:a[b]};return g.animateProperty(h.mixin({properties:f},a))};return k});