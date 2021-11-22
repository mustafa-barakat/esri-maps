//>>built
define("dojox/dgauges/RectangularSegmentedRangeIndicator",["dojo/_base/declare","dojo/on","dojox/gfx","./IndicatorBase"],function(t,v,w,u){return t("dojox.dgauges.RectangularSegmentedRangeIndicator",u,{start:0,startThickness:10,endThickness:10,fill:null,stroke:null,paddingLeft:0,paddingTop:0,paddingRight:0,paddingBottom:0,segments:10,segmentSpacing:2,rounded:!0,ranges:null,constructor:function(){this.fill=[255,120,0];this.stroke={color:"black",width:.2};this.addInvalidatingProperties("start startThickness endThickness fill stroke segments segmentSpacing ranges".split(" "))},
_defaultHorizontalShapeFunc:function(f,m,a,b,c,l,d,g,e,q){d=a._contentBox.w;if(this.ranges)for(e={type:"linear",colors:[]},e.x1=b,e.y1=c,e.x2=b+d,e.y2=c,g=this.start,f=0;f<this.ranges.length;f++){var p={color:this.ranges[f].color,offset:a.scaler.positionForValue(g)},k={color:this.ranges[f].color,offset:a.scaler.positionForValue(g+this.ranges[f].size)};e.colors.push(p);e.colors.push(k);g+=this.ranges[f].size}else e&&e.colors&&(e.x1=b,e.y1=c,e.x2=b+d,e.y2=c);a=b;d=d/this.segments-this.segmentSpacing;
l=Math.abs((l-b)/(d+this.segmentSpacing));g=this.startThickness;p=(this.endThickness-this.startThickness)/this.segments;k=g+p;var n=l-Math.floor(l);for(f=0;f<Math.floor(l);f++){var h=m.createPath();0==f&&this.rounded&&g/2<d?(b=g/2,h.moveTo(a+b,c),h.lineTo(a+d,c),h.lineTo(a+d,c+k),h.lineTo(a+b,c+g),h.arcTo(b,b,0,0,1,a+b,c)):(f==Math.floor(l)-1&&0==n&&this.rounded&&k/2<d?(b=k/2,h.moveTo(a,c),h.lineTo(a+d-b,c),h.arcTo(b,b,0,0,1,a+d-b,c+k)):(h.moveTo(a,c),h.lineTo(a+d,c),h.lineTo(a+d,c+k)),h.lineTo(a,
c+g),h.lineTo(a,c));h.setFill(e).setStroke(q);g=k;k+=p;a+=d+this.segmentSpacing}if(0<n){c=[a,c,a+d*n,c,a+d*n,c+(g+(k-g)*n),a,c+g,a,c];var r=m.createPolyline(c).setFill(e).setStroke(q)}return r},_defaultVerticalShapeFunc:function(f,m,a,b,c,l,d,g,e,q){d=a._contentBox.h;if(this.ranges)for(e={type:"linear",colors:[]},e.x1=b,e.y1=c,e.x2=b,e.y2=c+d,f=g=0;f<this.ranges.length;f++){var p={color:this.ranges[f].color,offset:a.scaler.positionForValue(g)},k={color:this.ranges[f].color,offset:a.scaler.positionForValue(g+
this.ranges[f].size)};e.colors.push(p);e.colors.push(k);g+=this.ranges[f].size}else e&&e.colors&&(e.x1=b,e.y1=c,e.x2=b,e.y2=c+d);a=c;d=d/this.segments-this.segmentSpacing;l=Math.abs((l-c)/(d+this.segmentSpacing));g=this.startThickness;p=(this.endThickness-this.startThickness)/this.segments;k=g+p;var n=l-Math.floor(l);for(f=0;f<Math.floor(l);f++){var h=m.createPath();0==f&&this.rounded&&g/2<d?(c=g/2,h.moveTo(b,a+c),h.lineTo(b,a+d),h.lineTo(b+k,a+d),h.lineTo(b+g,a+c),h.arcTo(c,c,0,0,0,b,a+c)):(f==Math.floor(l)-
1&&0==n&&this.rounded&&k/2<d?(c=k/2,h.moveTo(b,a),h.lineTo(b,a+d-c),h.arcTo(c,c,0,0,0,b+k,a+d-c)):(h.moveTo(b,a),h.lineTo(b,a+d),h.lineTo(b+k,a+d)),h.lineTo(b+g,a),h.lineTo(b,a));h.setFill(e).setStroke(q);g=k;k+=p;a+=d+this.segmentSpacing}if(0<n){b=[b,a,b,a+d*n,b+(g+(k-g)*n),a+d*n,b+g,a,b,a];var r=m.createPolyline(b).setFill(e).setStroke(q)}return r},indicatorShapeFunc:function(f,m,a,b,c,l,d,g,e){"horizontal"==m.scale._gauge.orientation?this._defaultHorizontalShapeFunc(m,f,m.scale,a,b,c,l,d,g,e):
this._defaultVerticalShapeFunc(m,f,m.scale,a,b,c,l,d,g,e)},refreshRendering:function(){if(null!=this._gfxGroup&&null!=this.scale){var f=this.scale.positionForValue(this.start),m=this.scale.positionForValue(this.value);this._gfxGroup.clear();if("horizontal"==this.scale._gauge.orientation){var a=f;f=this.paddingTop}else a=this.paddingLeft;this.indicatorShapeFunc(this._gfxGroup,this,a,f,m,this.startThickness,this.endThickness,this.fill,this.stroke)}}})});