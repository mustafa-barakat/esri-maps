//>>built
define("dojox/fx/Timeline","dojo/_base/lang dojo/fx/easing dojo/_base/fx dojo/dom ./_base dojo/_base/connect dojo/_base/html dojo/_base/array dojo/_base/Color".split(" "),function(u,m,v,w,p,r,x,y,q){p.animateTimeline=function(e,g){var b=new n(e.keys),c=v.animateProperty({node:w.byId(g||e.node),duration:e.duration||1E3,properties:b._properties,easing:m.linear,onAnimate:function(f){}});r.connect(c,"onEnd",function(f){var d=c.curve.getValue(c.reversed?0:1);x.style(f,d)});r.connect(c,"beforeBegin",function(){c.curve&&
delete c.curve;c.curve=b;b.ani=c});return c};var n=function(e){this.keys=u.isArray(e)?this.flatten(e):e};n.prototype.flatten=function(e){var g={},b={};y.forEach(e,function(c,f){var d=c.step;f="from"==d?0:"to"==d?1:void 0===d?0==f?0:f/(e.length-1):.01*parseInt(d,10);d=m[c.ease]||m.linear;for(var a in c)"step"!=a&&"ease"!=a&&"from"!=a&&"to"!=a&&(b[a]||(b[a]={steps:[],values:[],eases:[],ease:d},g[a]={},/#/.test(c[a])?g[a].units=b[a].units="isColor":g[a].units=b[a].units=/\D{1,}/.exec(c[a]).join("")),
b[a].eases.push(m[c.ease||"linear"]),b[a].steps.push(f),"isColor"==g[a].units?b[a].values.push(new q(c[a])):b[a].values.push(parseInt(/\d{1,}/.exec(c[a]).join(""))),void 0===g[a].start?g[a].start=b[a].values[b[a].values.length-1]:g[a].end=b[a].values[b[a].values.length-1])});this._properties=g;return b};n.prototype.getValue=function(e){e=this.ani._reversed?1-e:e;var g={},b=this,c=function(l,t){return"isColor"!=b._properties[l].units?b.keys[l].values[t]+b._properties[l].units:b.keys[l].values[t].toCss()},
f;for(f in this.keys)for(var d=this.keys[f],a=0;a<d.steps.length;a++){var h=d.steps[a],z=d.steps[a+1],k=a<d.steps.length?!0:!1,A=d.eases[a]||function(l){return l};if(e==h){if(g[f]=c(f,a),!k||k&&this.ani._reversed)break}else if(e>h)if(k&&e<d.steps[a+1]){k=d.values[a+1];d=d.values[a];h=1/(z-h)*(e-h);h=A(h);g[f]=d instanceof q?q.blendColors(d,k,h).toCss(!1):d+h*(k-d)+this._properties[f].units;break}else g[f]=c(f,a);else if(k&&!this.ani._reversed||!k&&this.ani._reversed)g[f]=c(f,a)}return g};p._Timeline=
n;return p});