//>>built
define("dojox/charting/axis2d/Default","dojo/_base/lang dojo/_base/array dojo/sniff dojo/_base/declare dojo/_base/connect dojo/dom-geometry ./Invisible ../scaler/linear ./common dojox/gfx dojox/lang/utils dojox/lang/functional dojo/has!dojo-bidi?../bidi/axis2d/Default".split(" "),function(P,S,V,fa,ha,la,W,X,ba,z,ia,ja,ma){W=fa(V("dojo-bidi")?"dojox.charting.axis2d.NonBidiDefault":"dojox.charting.axis2d.Default",W,{defaultParams:{vertical:!1,fixUpper:"none",fixLower:"none",natural:!1,leftBottom:!0,
includeZero:!1,fixed:!0,majorLabels:!0,minorTicks:!0,minorLabels:!0,microTicks:!1,rotation:0,htmlLabels:!0,enableCache:!1,dropLabels:!0,labelSizeChange:!1,position:"leftOrBottom"},optionalParams:{min:0,max:1,from:0,to:1,majorTickStep:4,minorTickStep:2,microTickStep:1,labels:[],labelFunc:null,maxLabelSize:0,maxLabelCharCount:0,trailingSymbol:null,stroke:{},majorTick:{},minorTick:{},microTick:{},tick:{},font:"",fontColor:"",title:"",titleGap:0,titleFont:"",titleFontColor:"",titleOrientation:""},constructor:function(a,
d){this.opt=P.clone(this.defaultParams);ia.updateWithObject(this.opt,d);ia.updateWithPattern(this.opt,d,this.optionalParams);this.opt.enableCache&&(this._textFreePool=[],this._lineFreePool=[],this._textUsePool=[],this._lineUsePool=[]);this._invalidMaxLabelSize=!0;d&&"position"in d||(this.opt.position=this.opt.leftBottom?"leftOrBottom":"rightOrTop");this.renderingOptions={"shape-rendering":"crispEdges"}},setWindow:function(a,d){a!=this.scale&&(this._invalidMaxLabelSize=!0);return this.inherited(arguments)},
_groupLabelWidth:function(a,d,g){if(!a.length)return 0;50<a.length&&(a.length=50);P.isObject(a[0])&&(a=ja.map(a,function(m){return m.text}));g&&(a=ja.map(a,function(m){return 0==P.trim(m).length?"":m.substring(0,g)+this.trailingSymbol},this));a=a.join("\x3cbr\x3e");return z._base._getTextBox(a,{font:d}).w||0},_getMaxLabelSize:function(a,d,g,m,c,e){if(null==this._maxLabelSize&&6==arguments.length){var p=this.opt;this.scaler.minMinorStep=this._prevMinMinorStep=0;var b=P.clone(p);delete b.to;delete b.from;
var f=X.buildScaler(a,d,g,b,p.to-p.from);f.minMinorStep=0;this._majorStart=f.major.start;p=X.buildTicks(f,p);if(e&&p){var h=f=0,k=function(r){r.label&&this.push(r.label)},n=[];this.opt.majorLabels&&(S.forEach(p.major,k,n),f=this._groupLabelWidth(n,c,b.maxLabelCharCount),b.maxLabelSize&&(f=Math.min(b.maxLabelSize,f)));n=[];this.opt.dropLabels&&this.opt.minorLabels&&(S.forEach(p.minor,k,n),h=this._groupLabelWidth(n,c,b.maxLabelCharCount),b.maxLabelSize&&(h=Math.min(b.maxLabelSize,h)));this._maxLabelSize=
{majLabelW:f,minLabelW:h,majLabelH:e,minLabelH:e}}else this._maxLabelSize=null}return this._maxLabelSize},calculate:function(a,d,g){this.inherited(arguments);this.scaler.minMinorStep=this._prevMinMinorStep;if((this._invalidMaxLabelSize||g!=this._oldSpan)&&Infinity!=a&&-Infinity!=d){this._invalidMaxLabelSize=!1;this.opt.labelSizeChange&&(this._maxLabelSize=null);this._oldSpan=g;var m=this.opt,c=this.chart.theme.axis,e=m.rotation%360,p=this.chart.theme.axis.tick.labelGap,b=m.font||c.majorTick&&c.majorTick.font||
c.tick&&c.tick.font;c=b?z.normalizedLength(z.splitFontString(b).size):0;b=this._getMaxLabelSize(a,d,g,e,b,c);"number"!=typeof p&&(p=4);if(b&&m.dropLabels){m=Math.abs(Math.cos(e*Math.PI/180));var f=Math.abs(Math.sin(e*Math.PI/180));0>e&&(e+=360);switch(e){case 0:case 180:this.vertical?e=c:(e=b.majLabelW,c=b.minLabelW);break;case 90:case 270:this.vertical?(e=b.majLabelW,c=b.minLabelW):e=c;break;default:e=this.vertical?Math.min(b.majLabelW,c/m):Math.min(b.majLabelW,c/f),c=Math.min(Math.sqrt(b.minLabelW*
b.minLabelW+c*c),this.vertical?c*m+b.minLabelW*f:b.minLabelW*m+c*f)}this.scaler.minMinorStep=this._prevMinMinorStep=Math.max(e,c)+p;this._skipInterval=this.scaler.minMinorStep<=this.scaler.minor.tick*this.scaler.bounds.scale?0:Math.floor((e+p)/(this.scaler.major.tick*this.scaler.bounds.scale))}else this._skipInterval=0}this.ticks=X.buildTicks(this.scaler,this.opt);return this},getOffsets:function(){var a={l:0,r:0,t:0,b:0};if(!this.scaler)return a;var d=this.opt,g=this.chart.theme.axis,m=this.chart.theme.axis.tick.labelGap,
c=d.titleFont||g.title&&g.title.font;g=0==d.titleGap?0:d.titleGap||g.title&&g.title.gap;var e=this.chart.theme.getTick("major",d),p=this.chart.theme.getTick("minor",d);c=c?z.normalizedLength(z.splitFontString(c).size):0;var b=d.rotation%360,f=d.position,h="rightOrTop"!==f,k=Math.abs(Math.cos(b*Math.PI/180)),n=Math.abs(Math.sin(b*Math.PI/180));this.trailingSymbol=void 0===d.trailingSymbol||null===d.trailingSymbol?this.trailingSymbol:d.trailingSymbol;"number"!=typeof m&&(m=4);0>b&&(b+=360);var r=this._getMaxLabelSize();
if(r){var t=Math.ceil(Math.max(r.majLabelW,r.minLabelW))+1,l=Math.ceil(Math.max(r.majLabelH,r.minLabelH))+1;if(this.vertical)switch(r=h?"l":"r",b){case 0:case 180:a[r]="center"===f?0:t;a.t=a.b=l/2;break;case 90:case 270:a[r]=l;a.t=a.b=t/2;break;default:45>=b||180<b&&225>=b?(a[r]=l*n/2+t*k,a[h?"t":"b"]=l*k/2+t*n,a[h?"b":"t"]=l*k/2):315<b||180>b&&135<b?(a[r]=l*n/2+t*k,a[h?"b":"t"]=l*k/2+t*n,a[h?"t":"b"]=l*k/2):90>b||180<b&&270>b?(a[r]=l*n+t*k,a[h?"t":"b"]=l*k+t*n):(a[r]=l*n+t*k,a[h?"b":"t"]=l*k+t*n)}else switch(r=
h?"b":"t",b){case 0:case 180:a[r]="center"===f?0:l;a.l=a.r=t/2;break;case 90:case 270:a[r]=t;a.l=a.r=l/2;break;default:45<=b&&90>=b||225<=b&&270>=b?(a[r]=l*k/2+t*n,a[h?"r":"l"]=l*n/2+t*k,a[h?"l":"r"]=l*n/2):90<=b&&135>=b||270<=b&&315>=b?(a[r]=l*k/2+t*n,a[h?"l":"r"]=l*n/2+t*k,a[h?"r":"l"]=l*n/2):45>b||180<b&&225>b?(a[r]=l*k+t*n,a[h?"r":"l"]=l*n+t*k):(a[r]=l*k+t*n,a[h?"l":"r"]=l*n+t*k)}a[r]="center"===f?0:a[r]+(m+Math.max(0<e.length?e.length:0,0<p.length?p.length:0)+(d.title?c+g:0))}return a},cleanGroup:function(a){this.opt.enableCache&&
this.group&&(this._lineFreePool=this._lineFreePool.concat(this._lineUsePool),this._lineUsePool=[],this._textFreePool=this._textFreePool.concat(this._textUsePool),this._textUsePool=[]);this.inherited(arguments)},createText:function(a,d,g,m,c,e,p,b,f){if(!this.opt.enableCache||"html"==a)return ba.createText[a](this.chart,d,g,m,c,e,p,b,f);0<this._textFreePool.length?(a=this._textFreePool.pop(),a.setShape({x:g,y:m,text:e,align:c}),d.add(a)):a=ba.createText[a](this.chart,d,g,m,c,e,p,b);this._textUsePool.push(a);
return a},createLine:function(a,d){if(this.opt.enableCache&&0<this._lineFreePool.length){var g=this._lineFreePool.pop();g.setShape(d);a.add(g)}else g=a.createLine(d);this.opt.enableCache&&this._lineUsePool.push(g);return g},render:function(a,d){var g,m=this._isRtl();if(!this.dirty||!this.scaler)return this;var c=this.opt;var e=this.chart.theme.axis;var p=c.position,b="rightOrTop"!==p,f=c.rotation%360,h=0;h=this.chart.theme.axis.tick.labelGap;var k=c.font||e.majorTick&&e.majorTick.font||e.tick&&e.tick.font,
n=c.titleFont||e.title&&e.title.font,r=c.fontColor||e.majorTick&&e.majorTick.fontColor||e.tick&&e.tick.fontColor||"black",t=c.titleFontColor||e.title&&e.title.fontColor||"black";var l=0==c.titleGap?0:c.titleGap||e.title&&e.title.gap||15;var H=c.titleOrientation||e.title&&e.title.orientation||"axis",B=this.chart.theme.getTick("major",c),C=this.chart.theme.getTick("minor",c),ca=this.chart.theme.getTick("micro",c),na="stroke"in c?c.stroke:e.stroke,u=k?z.normalizedLength(z.splitFontString(k).size):0;
var I=Math.abs(Math.cos(f*Math.PI/180));var J=Math.abs(Math.sin(f*Math.PI/180));var Q=n?z.normalizedLength(z.splitFontString(n).size):0;"number"!=typeof h&&(h=4);0>f&&(f+=360);var T=this._getMaxLabelSize();T=T&&T.majLabelW;if(this.vertical){var K=a.height-d.b;var L=void 0;var Y=d.t;var R=void 0;e=(a.height-d.b+d.t)/2;var U=void 0;J=u*J+(T||0)*I+h+Math.max(0<B.length?B.length:0,0<C.length?C.length:0)+Q+l;var Z=0;var aa=-1;var w=g=0;l=1;I=0;var M=h;var N=0;switch(f){case 0:var q="end";w=.4*u;break;
case 90:q="middle";g=-u;break;case 180:q="start";w=.4*-u;break;case 270:q="middle";break;default:45>f?(q="end",w=.4*u):90>f?(q="end",w=.4*u):135>f?q="start":225>f?(q="start",w=.4*-u):270>f?(q="start",g=b?0:.4*u):315>f?(q="end",g=b?0:.4*u):(q="end",w=.4*u)}if(b)L=R="center"===p?a.width/2:d.l,h=H&&"away"==H?90:270,U=d.l-J+(270==h?Q:0),l=-1,M=-M;else switch(L=R=a.width-d.r,h=H&&"axis"==H?90:270,U=a.width-d.r+J-(270==h?0:Q),q){case "start":q="end";break;case "end":q="start";break;case "middle":g+=u}}else{L=
d.l;K=void 0;R=a.width-d.r;Y=void 0;U=(a.width-d.r+d.l)/2;e=void 0;J=u*I+(T||0)*J+h+Math.max(0<B.length?B.length:0,0<C.length?C.length:0)+Q+l;Z=m?-1:1;l=w=g=aa=0;I=1;M=0;N=h;switch(f){case 0:q="middle";w=u;break;case 90:q="start";g=.4*-u;break;case 180:q="middle";break;case 270:q="end";g=.4*u;break;default:45>f?(q="start",w=b?u:0):135>f?(q="start",g=.4*-u):180>f?(q="start",w=b?0:-u):225>f?(q="end",w=b?0:-u):315>f?(q="end",w=b?.4*u:0):(q="end",w=b?u:0)}if(b)K=Y="center"===p?a.height/2:a.height-d.b,
h=H&&"axis"==H?180:0,e=a.height-d.b+J-(h?Q:0);else switch(K=Y=d.t,h=H&&"away"==H?180:0,e=d.t-J+(h?0:Q),I=-1,N=-N,q){case "start":q="end";break;case "end":q="start";break;case "middle":w-=u}}this.cleanGroup();var O=this.group;a=this.scaler;d=this.ticks;var da=X.getTransformerFromModel(this.scaler),D=c.title&&h||f||!this.opt.htmlLabels||V("ie")||V("opera")?"gfx":"html",E=l*B.length,F=I*B.length,ea=this._skipInterval;O.createLine({x1:L,y1:K,x2:R,y2:Y}).setStroke(na);c.title&&(n=ba.createText[D](this.chart,
O,U,e,"middle",c.title,n,t),"html"==D?this.htmlElements.push(n):n.setTransform(z.matrix.rotategAt(h,U,e)));if(null==d)return this.dirty=!1,this;var oa=0<d.major.length?(d.major[0].value-this._majorStart)/a.major.tick:0,ka=this.opt.majorLabels;S.forEach(d.major,function(x,v){var A=da(x.value),G=(m?R:L)+Z*A;A=K+aa*A;v+=oa;this.createLine(O,{x1:G,y1:A,x2:G+E,y2:A+F}).setStroke(B);if(x.label&&(!ea||0==(v-(1+ea))%(1+ea))){var y=c.maxLabelCharCount?this.getTextWithLimitCharCount(x.label,k,c.maxLabelCharCount):
{text:x.label,truncated:!1};y=c.maxLabelSize?this.getTextWithLimitLength(y.text,k,c.maxLabelSize,y.truncated):y;v=this.createText(D,O,G+(0<B.length?E:0)+M+(f?0:g),A+(0<B.length?F:0)+N+(f?0:w),q,y.text,k,r);y.truncated&&this.chart.formatTruncatedLabel(v,x.label,D);y.truncated&&this.labelTooltip(v,this.chart,x.label,y.text,k,D);"html"==D?this.htmlElements.push(v):f&&v.setTransform([{dx:g,dy:w},z.matrix.rotategAt(f,G+(0<B.length?E:0)+M,A+(0<B.length?F:0)+N)])}},this);E=l*C.length;F=I*C.length;ka=this.opt.minorLabels&&
a.minMinorStep<=a.minor.tick*a.bounds.scale;S.forEach(d.minor,function(x){var v=da(x.value),A=(m?R:L)+Z*v,G=K+aa*v;this.createLine(O,{x1:A,y1:G,x2:A+E,y2:G+F}).setStroke(C);if(ka&&x.label){var y=c.maxLabelCharCount?this.getTextWithLimitCharCount(x.label,k,c.maxLabelCharCount):{text:x.label,truncated:!1};y=c.maxLabelSize?this.getTextWithLimitLength(y.text,k,c.maxLabelSize,y.truncated):y;v=this.createText(D,O,A+(0<C.length?E:0)+M+(f?0:g),G+(0<C.length?F:0)+N+(f?0:w),q,y.text,k,r);y.truncated&&this.chart.formatTruncatedLabel(v,
x.label,D);y.truncated&&this.labelTooltip(v,this.chart,x.label,y.text,k,D);"html"==D?this.htmlElements.push(v):f&&v.setTransform([{dx:g,dy:w},z.matrix.rotategAt(f,A+(0<C.length?E:0)+M,G+(0<C.length?F:0)+N)])}},this);E=l*ca.length;F=I*ca.length;S.forEach(d.micro,function(x){var v=da(x.value);x=L+Z*v;v=K+aa*v;this.createLine(O,{x1:x,y1:v,x2:x+E,y2:v+F}).setStroke(ca)},this);this.dirty=!1;return this},labelTooltip:function(a,d,g,m,c,e){var p=["dijit/Tooltip"],b={type:"rect"},f=["above","below"];m=z._base._getTextBox(m,
{font:c}).w||0;c=c?z.normalizedLength(z.splitFontString(c).size):0;"html"==e?(P.mixin(b,la.position(a.firstChild,!0)),b.width=Math.ceil(m),b.height=Math.ceil(c),this._events.push({shape:dojo,handle:ha.connect(a.firstChild,"onmouseover",this,function(h){require(p,function(k){k.show(g,b,f)})})}),this._events.push({shape:dojo,handle:ha.connect(a.firstChild,"onmouseout",this,function(h){require(p,function(k){k.hide(b)})})})):(e=a.getShape(),d=d.getCoords(),b=P.mixin(b,{x:e.x-m/2,y:e.y}),b.x+=d.x,b.y+=
d.y,b.x=Math.round(b.x),b.y=Math.round(b.y),b.width=Math.ceil(m),b.height=Math.ceil(c),this._events.push({shape:a,handle:a.connect("onmouseenter",this,function(h){require(p,function(k){k.show(g,b,f)})})}),this._events.push({shape:a,handle:a.connect("onmouseleave",this,function(h){require(p,function(k){k.hide(b)})})}))},_isRtl:function(){return!1}});return V("dojo-bidi")?fa("dojox.charting.axis2d.Default",[W,ma]):W});