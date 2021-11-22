// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/libs/gl-matrix/vec4",["./common"],function(k){var e={create:function(){var a=new k.ARRAY_TYPE(4);a[0]=0;a[1]=0;a[2]=0;a[3]=0;return a},clone:function(a){var b=new k.ARRAY_TYPE(4);b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];return b},fromValues:function(a,b,c,d){var f=new k.ARRAY_TYPE(4);f[0]=a;f[1]=b;f[2]=c;f[3]=d;return f},copy:function(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];return a},set:function(a,b,c,d,f){a[0]=b;a[1]=c;a[2]=d;a[3]=f;return a},add:function(a,
b,c){a[0]=b[0]+c[0];a[1]=b[1]+c[1];a[2]=b[2]+c[2];a[3]=b[3]+c[3];return a},subtract:function(a,b,c){a[0]=b[0]-c[0];a[1]=b[1]-c[1];a[2]=b[2]-c[2];a[3]=b[3]-c[3];return a}};e.sub=e.subtract;e.multiply=function(a,b,c){a[0]=b[0]*c[0];a[1]=b[1]*c[1];a[2]=b[2]*c[2];a[3]=b[3]*c[3];return a};e.mul=e.multiply;e.divide=function(a,b,c){a[0]=b[0]/c[0];a[1]=b[1]/c[1];a[2]=b[2]/c[2];a[3]=b[3]/c[3];return a};e.div=e.divide;e.ceil=function(a,b){a[0]=Math.ceil(b[0]);a[1]=Math.ceil(b[1]);a[2]=Math.ceil(b[2]);a[3]=
Math.ceil(b[3]);return a};e.floor=function(a,b){a[0]=Math.floor(b[0]);a[1]=Math.floor(b[1]);a[2]=Math.floor(b[2]);a[3]=Math.floor(b[3]);return a};e.min=function(a,b,c){a[0]=Math.min(b[0],c[0]);a[1]=Math.min(b[1],c[1]);a[2]=Math.min(b[2],c[2]);a[3]=Math.min(b[3],c[3]);return a};e.max=function(a,b,c){a[0]=Math.max(b[0],c[0]);a[1]=Math.max(b[1],c[1]);a[2]=Math.max(b[2],c[2]);a[3]=Math.max(b[3],c[3]);return a};e.round=function(a,b){a[0]=Math.round(b[0]);a[1]=Math.round(b[1]);a[2]=Math.round(b[2]);a[3]=
Math.round(b[3]);return a};e.scale=function(a,b,c){a[0]=b[0]*c;a[1]=b[1]*c;a[2]=b[2]*c;a[3]=b[3]*c;return a};e.scaleAndAdd=function(a,b,c,d){a[0]=b[0]+c[0]*d;a[1]=b[1]+c[1]*d;a[2]=b[2]+c[2]*d;a[3]=b[3]+c[3]*d;return a};e.distance=function(a,b){var c=b[0]-a[0],d=b[1]-a[1],f=b[2]-a[2];a=b[3]-a[3];return Math.sqrt(c*c+d*d+f*f+a*a)};e.dist=e.distance;e.squaredDistance=function(a,b){var c=b[0]-a[0],d=b[1]-a[1],f=b[2]-a[2];a=b[3]-a[3];return c*c+d*d+f*f+a*a};e.sqrDist=e.squaredDistance;e.length=function(a){var b=
a[0],c=a[1],d=a[2];a=a[3];return Math.sqrt(b*b+c*c+d*d+a*a)};e.len=e.length;e.squaredLength=function(a){var b=a[0],c=a[1],d=a[2];a=a[3];return b*b+c*c+d*d+a*a};e.sqrLen=e.squaredLength;e.negate=function(a,b){a[0]=-b[0];a[1]=-b[1];a[2]=-b[2];a[3]=-b[3];return a};e.inverse=function(a,b){a[0]=1/b[0];a[1]=1/b[1];a[2]=1/b[2];a[3]=1/b[3];return a};e.normalize=function(a,b){var c=b[0],d=b[1],f=b[2];b=b[3];var g=c*c+d*d+f*f+b*b;0<g&&(g=1/Math.sqrt(g),a[0]=c*g,a[1]=d*g,a[2]=f*g,a[3]=b*g);return a};e.dot=function(a,
b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]};e.lerp=function(a,b,c,d){var f=b[0],g=b[1],h=b[2];b=b[3];a[0]=f+d*(c[0]-f);a[1]=g+d*(c[1]-g);a[2]=h+d*(c[2]-h);a[3]=b+d*(c[3]-b);return a};e.random=function(a,b){b=b||1;a[0]=k.RANDOM();a[1]=k.RANDOM();a[2]=k.RANDOM();a[3]=k.RANDOM();e.normalize(a,a);e.scale(a,a,b);return a};e.transformMat4=function(a,b,c){var d=b[0],f=b[1],g=b[2];b=b[3];a[0]=c[0]*d+c[4]*f+c[8]*g+c[12]*b;a[1]=c[1]*d+c[5]*f+c[9]*g+c[13]*b;a[2]=c[2]*d+c[6]*f+c[10]*g+c[14]*b;a[3]=c[3]*
d+c[7]*f+c[11]*g+c[15]*b;return a};e.transformQuat=function(a,b,c){var d=b[0],f=b[1],g=b[2],h=c[0],l=c[1],m=c[2];c=c[3];var n=c*d+l*g-m*f,p=c*f+m*d-h*g,q=c*g+h*f-l*d;d=-h*d-l*f-m*g;a[0]=n*c+d*-h+p*-m-q*-l;a[1]=p*c+d*-l+q*-h-n*-m;a[2]=q*c+d*-m+n*-l-p*-h;a[3]=b[3];return a};e.forEach=function(){var a=e.create();return function(b,c,d,f,g,h){c||(c=4);d||(d=0);for(f=f?Math.min(f*c+d,b.length):b.length;d<f;d+=c)a[0]=b[d],a[1]=b[d+1],a[2]=b[d+2],a[3]=b[d+3],g(a,a,h),b[d]=a[0],b[d+1]=a[1],b[d+2]=a[2],b[d+
3]=a[3];return b}}();e.str=function(a){return"vec4("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+")"};e.exactEquals=function(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]};e.equals=function(a,b){var c=a[0],d=a[1],f=a[2];a=a[3];var g=b[0],h=b[1],l=b[2];b=b[3];return Math.abs(c-g)<=k.EPSILON*Math.max(1,Math.abs(c),Math.abs(g))&&Math.abs(d-h)<=k.EPSILON*Math.max(1,Math.abs(d),Math.abs(h))&&Math.abs(f-l)<=k.EPSILON*Math.max(1,Math.abs(f),Math.abs(l))&&Math.abs(a-b)<=k.EPSILON*Math.max(1,Math.abs(a),
Math.abs(b))};return e});