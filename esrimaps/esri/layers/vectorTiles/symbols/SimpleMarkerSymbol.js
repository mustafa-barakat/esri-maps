// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define(["../core/declare","../core/lang","../core/screenUtils","./MarkerSymbol","./SimpleLineSymbol"],function(l,c,m,n,h){var k={style:"circle",color:[255,255,255,.25],outline:new h,size:12,angle:0,xoffset:0,yoffset:0},g=l(n,{declaredClass:"esri.symbols.SimpleMarkerSymbol",properties:{color:{json:{write:function(a,b){a&&"x"!==this.style&&"cross"!==this.style&&(b.color=a.toJSON());null===a&&(b.color=null)}}},type:"simple-marker",size:{value:12},style:{type:String,value:"circle",json:{read:function(a){return c.valueOf(this._styles,
a)},write:function(a,b){b.style=this._styles[a]}}},path:{type:String,value:null,set:function(a){this.style="path";this._set("path",a)},json:{write:!0}},outline:{type:h,json:{write:!0}}},_styles:{circle:"esriSMSCircle",square:"esriSMSSquare",cross:"esriSMSCross",x:"esriSMSX",diamond:"esriSMSDiamond",path:"esriSMSPath"},getDefaults:function(){return c.mixin(this.inherited(arguments),k)},normalizeCtorArgs:function(a,b,e,f){if(a&&"string"!==typeof a)return a;var d={};a&&(d.style=a);null!=b&&(d.size=m.toPt(b));
e&&(d.outline=e);f&&(d.color=f);return d},clone:function(){return new g({angle:this.angle,color:c.clone(this.color),outline:this.outline&&this.outline.clone(),path:this.path,size:this.size,style:this.style,xoffset:this.xoffset,yoffset:this.yoffset})},read:function f(b,e){return this.getInherited(f,arguments).call(this,c.mixin({outline:null},b),e)}});c.mixin(g,{STYLE_CIRCLE:"circle",STYLE_SQUARE:"square",STYLE_CROSS:"cross",STYLE_X:"x",STYLE_DIAMOND:"diamond",STYLE_PATH:"path",STYLE_TARGET:"target"});
g.defaultProps=k;return g});