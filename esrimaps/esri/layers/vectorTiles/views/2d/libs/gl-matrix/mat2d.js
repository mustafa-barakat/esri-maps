// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/libs/gl-matrix/mat2d",["./common"],function(k){var m=k.GLMAT_ARRAY_TYPE;k={create:function(){var a=new m(6);a[0]=1;a[1]=0;a[2]=0;a[3]=1;a[4]=0;a[5]=0;return a},clone:function(a){var b=new m(6);b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];return b},copy:function(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];return a},identity:function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=1;a[4]=0;a[5]=0;return a},invert:function(a,b){var c=b[0],e=b[1],
f=b[2],g=b[3],h=b[4];b=b[5];var d=c*g-e*f;if(!d)return null;d=1/d;a[0]=g*d;a[1]=-e*d;a[2]=-f*d;a[3]=c*d;a[4]=(f*b-g*h)*d;a[5]=(e*h-c*b)*d;return a},determinant:function(a){return a[0]*a[3]-a[1]*a[2]},multiply:function(a,b,c){var e=b[0],f=b[1],g=b[2],h=b[3],d=b[4];b=b[5];var l=c[0],n=c[1],p=c[2],q=c[3],r=c[4];c=c[5];a[0]=e*l+g*n;a[1]=f*l+h*n;a[2]=e*p+g*q;a[3]=f*p+h*q;a[4]=e*r+g*c+d;a[5]=f*r+h*c+b;return a}};k.mul=k.multiply;k.rotate=function(a,b,c){var e=b[0],f=b[1],g=b[2],h=b[3],d=b[4];b=b[5];var l=
Math.sin(c);c=Math.cos(c);a[0]=e*c+g*l;a[1]=f*c+h*l;a[2]=e*-l+g*c;a[3]=f*-l+h*c;a[4]=d;a[5]=b;return a};k.scale=function(a,b,c){var e=b[1],f=b[2],g=b[3],h=b[4],d=b[5],l=c[0];c=c[1];a[0]=b[0]*l;a[1]=e*l;a[2]=f*c;a[3]=g*c;a[4]=h;a[5]=d;return a};k.translate=function(a,b,c){var e=b[0],f=b[1],g=b[2],h=b[3],d=b[4];b=b[5];var l=c[0];c=c[1];a[0]=e;a[1]=f;a[2]=g;a[3]=h;a[4]=e*l+g*c+d;a[5]=f*l+h*c+b;return a};k.fromRotation=function(a,b){var c=Math.sin(b);b=Math.cos(b);a[0]=b;a[1]=c;a[2]=-c;a[3]=b;a[4]=0;
a[5]=0;return a};k.fromScaling=function(a,b){a[0]=b[0];a[1]=0;a[2]=0;a[3]=b[1];a[4]=0;a[5]=0;return a};k.fromTranslation=function(a,b){a[0]=1;a[1]=0;a[2]=0;a[3]=1;a[4]=b[0];a[5]=b[1];return a};k.str=function(a){return"mat2d("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+")"};k.frob=function(a){return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)+Math.pow(a[2],2)+Math.pow(a[3],2)+Math.pow(a[4],2)+Math.pow(a[5],2)+1)};return k});