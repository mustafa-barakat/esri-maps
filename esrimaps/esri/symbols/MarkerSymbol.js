// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/symbols/MarkerSymbol","dojo/_base/declare dojo/_base/lang dojo/has dojox/gfx/_base ../kernel ./Symbol".split(" "),function(d,f,g,b,h,k){d=d(k,{declaredClass:"esri.symbol.MarkerSymbol",angle:0,xoffset:0,yoffset:0,size:12,constructor:function(a){a&&f.isObject(a)&&(this.size="auto"===this.size?this.size:b.pt2px(this.size),this.xoffset=b.pt2px(this.xoffset),this.yoffset=b.pt2px(this.yoffset),this.angle&&(this.angle*=-1))},setAngle:function(a){this.angle=a;return this},setSize:function(a){this.size=
a;return this},setOffset:function(a,c){this.xoffset=a;this.yoffset=c;return this},toJson:function(){var a=b.px2pt(this.size);a=isNaN(a)?void 0:a;var c=b.px2pt(this.xoffset);c=isNaN(c)?void 0:c;var e=b.px2pt(this.yoffset);e=isNaN(e)?void 0:e;return f.mixin(this.inherited("toJson",arguments),{size:"auto"===this.size?this.size:a,angle:this.angle&&-1*this.angle,xoffset:c,yoffset:e})}});g("extend-esri")&&f.setObject("symbol.MarkerSymbol",d,h);return d});