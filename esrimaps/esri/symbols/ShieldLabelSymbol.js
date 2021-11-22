// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/symbols/ShieldLabelSymbol","dojo/_base/declare dojo/_base/lang dojo/sniff dojox/gfx/_base ../kernel ../lang ../urlUtils ./MarkerSymbol ./Font".split(" "),function(e,g,k,f,l,n,p,q,r){var h={url:"",width:12,height:12,angle:0,xoffset:0,yoffset:0};e=e(q,{declaredClass:"esri.symbol.ShieldLabelSymbol",type:"shieldlabelsymbol",color:[255,255,255,1],width:32,height:32,font:f.defaultFont,constructor:function(a,b,c,d,m){a?g.isString(a)?(this.url=a,b&&(this.color=b),c&&(this.width=c),d&&(this.height=
d),void 0!==m&&(this.font=m)):(this.width=f.pt2px(a.width),this.height=f.pt2px(a.height),b=a.imageData,9>k("ie")||!b||(c=this.url,this.url="data:"+(a.contentType||"image")+";base64,"+b,this.imageData=c)):g.mixin(this,h)},getStroke:function(){return null},getFill:function(){return this.color},setWidth:function(a){this.width=a;return this},setHeight:function(a){this.height=a;return this},setUrl:function(a){a!==this.url&&(delete this.imageData,delete this.contentType);this.url=a;return this},setFont:function(a){this.font=
a;return this},setText:function(a){this.text=a;return this},getWidth:function(){return this.width},getHeight:function(){return this.height},getShapeDescriptors:function(){return{defaultShape:{type:"image",x:-Math.round(this.width/2),y:-Math.round(this.height/2),width:this.width,height:this.height,src:this.url||""},fill:null,stroke:null}},toJson:function(){var a=this.url,b=this.imageData;if(0===a.indexOf("data:")){var c=a;a=b;b=c.indexOf(";base64,")+8;b=c.substr(b)}a=p.getAbsoluteUrl(a);c=f.px2pt(this.width);
c=isNaN(c)?void 0:c;var d=f.px2pt(this.height);d=isNaN(d)?void 0:d;a=n.fixJson(g.mixin(this.inherited("toJson",arguments),{type:"esriSHD",url:a,imageData:b,contentType:this.contentType,width:c,height:d}));this.font?(b=new r(this.font),a.font=b.toJson()):a.font=null;delete a.size;a.imageData||delete a.imageData;return a}});e.defaultProps=h;k("extend-esri")&&(g.setObject("symbol.ShieldLabelSymbol",e,l),l.symbol.defaultShieldLabelSymbol=h);return e});