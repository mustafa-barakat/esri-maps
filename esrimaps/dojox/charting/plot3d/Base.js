//>>built
define("dojox/charting/plot3d/Base",["dojo/_base/declare","dojo/has"],function(b,d){b=b("dojox.charting.plot3d.Base",null,{constructor:function(a,c,e){this.width=a;this.height=c},setData:function(a){this.data=a?a:[];return this},getDepth:function(){return this.depth},generate:function(a,c){}});d("dojo-bidi")&&b.extend({_checkOrientation:function(a){a.isMirrored&&a.applyMirroring(a.view,{width:this.width,height:this.height},{l:0,r:0,t:0,b:0})}});return b});