// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/3d/webgl-engine/lib/gl-matrix",[],function(){var W={};(function(M,J){J(M,!0);J(M,!1)})(W,function(M,J){var Q={};(function(){if("undefined"!=typeof Float32Array){var a=new Float32Array(1),b=new Int32Array(a.buffer);Q.invsqrt=function(c){a[0]=c;b[0]=1597463007-(b[0]>>1);var d=a[0];return d*(1.5-.5*c*d*d)}}else Q.invsqrt=function(c){return 1/Math.sqrt(c)}})();var y=Array;"undefined"!=typeof Float32Array&&(y=J?Float32Array:Array);var x={create:function(a){var b=new y(3);
a?(b[0]=a[0],b[1]=a[1],b[2]=a[2]):b[0]=b[1]=b[2]=0;return b},createFrom:function(a,b,c){var d=new y(3);d[0]=a;d[1]=b;d[2]=c;return d},set:function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];return b},set3:function(a,b,c,d){d[0]=a;d[1]=b;d[2]=c;return d},add:function(a,b,c){if(!c||a===c)return a[0]+=b[0],a[1]+=b[1],a[2]+=b[2],a;c[0]=a[0]+b[0];c[1]=a[1]+b[1];c[2]=a[2]+b[2];return c},subtract:function(a,b,c){if(!c||a===c)return a[0]-=b[0],a[1]-=b[1],a[2]-=b[2],a;c[0]=a[0]-b[0];c[1]=a[1]-b[1];c[2]=a[2]-b[2];
return c},multiply:function(a,b,c){if(!c||a===c)return a[0]*=b[0],a[1]*=b[1],a[2]*=b[2],a;c[0]=a[0]*b[0];c[1]=a[1]*b[1];c[2]=a[2]*b[2];return c},max:function(a,b,c){c[0]=Math.max(a[0],b[0]);c[1]=Math.max(a[1],b[1]);c[2]=Math.max(a[2],b[2]);return c},min:function(a,b,c){c[0]=Math.min(a[0],b[0]);c[1]=Math.min(a[1],b[1]);c[2]=Math.min(a[2],b[2]);return c},negate:function(a,b){b||(b=a);b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];return b},scale:function(a,b,c){if(!c||a===c)return a[0]*=b,a[1]*=b,a[2]*=b,a;c[0]=
a[0]*b;c[1]=a[1]*b;c[2]=a[2]*b;return c},normalize:function(a,b){b||(b=a);var c=a[0],d=a[1];a=a[2];var e=Math.sqrt(c*c+d*d+a*a);if(!e)return b[0]=0,b[1]=0,b[2]=0,b;if(1===e)return b[0]=c,b[1]=d,b[2]=a,b;e=1/e;b[0]=c*e;b[1]=d*e;b[2]=a*e;return b},cross:function(a,b,c){c||(c=a);var d=a[0],e=a[1];a=a[2];var f=b[0],g=b[1];b=b[2];c[0]=e*b-a*g;c[1]=a*f-d*b;c[2]=d*g-e*f;return c},length:function(a){var b=a[0],c=a[1];a=a[2];return Math.sqrt(b*b+c*c+a*a)},length2:function(a){var b=a[0],c=a[1];a=a[2];return b*
b+c*c+a*a},dot:function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]},direction:function(a,b,c){c||(c=a);var d=a[0]-b[0],e=a[1]-b[1];a=a[2]-b[2];b=Math.sqrt(d*d+e*e+a*a);if(!b)return c[0]=0,c[1]=0,c[2]=0,c;b=1/b;c[0]=d*b;c[1]=e*b;c[2]=a*b;return c},lerp:function(a,b,c,d){d||(d=a);d[0]=a[0]+c*(b[0]-a[0]);d[1]=a[1]+c*(b[1]-a[1]);d[2]=a[2]+c*(b[2]-a[2]);return d},dist:function(a,b){var c=b[0]-a[0],d=b[1]-a[1];a=b[2]-a[2];return Math.sqrt(c*c+d*d+a*a)},dist2:function(a,b){var c=b[0]-a[0],d=b[1]-a[1];a=b[2]-
a[2];return c*c+d*d+a*a}},U=null,L=new y(4);x.unproject=function(a,b,c,d,e){e||(e=a);U||(U=B.create());var f=U;L[0]=2*(a[0]-d[0])/d[2]-1;L[1]=2*(a[1]-d[1])/d[3]-1;L[2]=2*a[2]-1;L[3]=1;B.multiply(c,b,f);if(!B.inverse(f))return null;B.multiplyVec4(f,L);if(0===L[3])return null;e[0]=L[0]/L[3];e[1]=L[1]/L[3];e[2]=L[2]/L[3];return e};var Z=x.createFrom(1,0,0),aa=x.createFrom(0,1,0),ba=x.createFrom(0,0,1);x.rotationTo=function(a,b,c){c||(c=t.create());var d=x.dot(a,b),e=x.create();if(1<=d)t.set(ca,c);else if(-.999999>
d)x.cross(Z,a,e),1E-6>e.length&&x.cross(aa,a,e),1E-6>e.length&&x.cross(ba,a,e),x.normalize(e),t.fromAxisAngle(e,Math.PI,c);else{d=Math.sqrt(2*(1+d));var f=1/d;x.cross(a,b,e);c[0]=e[0]*f;c[1]=e[1]*f;c[2]=e[2]*f;c[3]=.5*d;t.normalize(c)}1<c[3]?c[3]=1:-1>c[3]&&(c[3]=-1);return c};var V=x.create(),X=x.create();x.project=function(a,b,c,d){d||(d=a);x.direction(b,c,V);x.subtract(a,b,X);a=x.dot(V,X);x.scale(V,a,d);x.add(d,b,d)};x.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+"]"};var P={create:function(a){var b=
new y(9);a?(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b[4]=a[4],b[5]=a[5],b[6]=a[6],b[7]=a[7],b[8]=a[8]):b[0]=b[1]=b[2]=b[3]=b[4]=b[5]=b[6]=b[7]=b[8]=0;return b},createFrom:function(a,b,c,d,e,f,g,h,l){var k=new y(9);k[0]=a;k[1]=b;k[2]=c;k[3]=d;k[4]=e;k[5]=f;k[6]=g;k[7]=h;k[8]=l;return k},determinant:function(a){var b=a[3],c=a[4],d=a[5],e=a[6],f=a[7],g=a[8];return a[0]*(g*c-d*f)+a[1]*(-g*b+d*e)+a[2]*(f*b-c*e)},inverse:function(a,b){var c=a[0],d=a[1],e=a[2],f=a[3],g=a[4],h=a[5],l=a[6],k=a[7];a=a[8];var m=
a*g-h*k,n=-a*f+h*l,q=k*f-g*l,p=c*m+d*n+e*q;if(!p)return null;p=1/p;b||(b=P.create());b[0]=m*p;b[1]=(-a*d+e*k)*p;b[2]=(h*d-e*g)*p;b[3]=n*p;b[4]=(a*c-e*l)*p;b[5]=(-h*c+e*f)*p;b[6]=q*p;b[7]=(-k*c+d*l)*p;b[8]=(g*c-d*f)*p;return b},multiply:function(a,b,c){c||(c=a);var d=a[0],e=a[1],f=a[2],g=a[3],h=a[4],l=a[5],k=a[6],m=a[7];a=a[8];var n=b[0],q=b[1],p=b[2],u=b[3],v=b[4],r=b[5],z=b[6],A=b[7];b=b[8];c[0]=n*d+q*g+p*k;c[1]=n*e+q*h+p*m;c[2]=n*f+q*l+p*a;c[3]=u*d+v*g+r*k;c[4]=u*e+v*h+r*m;c[5]=u*f+v*l+r*a;c[6]=
z*d+A*g+b*k;c[7]=z*e+A*h+b*m;c[8]=z*f+A*l+b*a;return c},multiplyVec2:function(a,b,c){c||(c=b);var d=b[0];b=b[1];c[0]=d*a[0]+b*a[3]+a[6];c[1]=d*a[1]+b*a[4]+a[7];return c},multiplyVec3:function(a,b,c){c||(c=b);var d=b[0],e=b[1];b=b[2];c[0]=d*a[0]+e*a[3]+b*a[6];c[1]=d*a[1]+e*a[4]+b*a[7];c[2]=d*a[2]+e*a[5]+b*a[8];return c},set:function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];return b},identity:function(a){a||(a=P.create());a[0]=1;a[1]=0;a[2]=0;a[3]=
0;a[4]=1;a[5]=0;a[6]=0;a[7]=0;a[8]=1;return a},transpose:function(a,b){if(!b||a===b){b=a[1];var c=a[2],d=a[5];a[1]=a[3];a[2]=a[6];a[3]=b;a[5]=a[7];a[6]=c;a[7]=d;return a}b[0]=a[0];b[1]=a[3];b[2]=a[6];b[3]=a[1];b[4]=a[4];b[5]=a[7];b[6]=a[2];b[7]=a[5];b[8]=a[8];return b},toMat4:function(a,b){b||(b=B.create());b[15]=1;b[14]=0;b[13]=0;b[12]=0;b[11]=0;b[10]=a[8];b[9]=a[7];b[8]=a[6];b[7]=0;b[6]=a[5];b[5]=a[4];b[4]=a[3];b[3]=0;b[2]=a[2];b[1]=a[1];b[0]=a[0];return b},str:function(a){return"["+a[0]+", "+a[1]+
", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+"]"}},B={create:function(a){var b=new y(16);4===arguments.length?(b[0]=arguments[0],b[1]=arguments[1],b[2]=arguments[2],b[3]=arguments[3],b[4]=arguments[4],b[5]=arguments[5],b[6]=arguments[6],b[7]=arguments[7],b[8]=arguments[8],b[9]=arguments[9],b[10]=arguments[10],b[11]=arguments[11],b[12]=arguments[12],b[13]=arguments[13],b[14]=arguments[14],b[15]=arguments[15]):a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3],b[4]=a[4],b[5]=a[5],
b[6]=a[6],b[7]=a[7],b[8]=a[8],b[9]=a[9],b[10]=a[10],b[11]=a[11],b[12]=a[12],b[13]=a[13],b[14]=a[14],b[15]=a[15]);return b},createFrom:function(a,b,c,d,e,f,g,h,l,k,m,n,q,p,u,v){var r=new y(16);r[0]=a;r[1]=b;r[2]=c;r[3]=d;r[4]=e;r[5]=f;r[6]=g;r[7]=h;r[8]=l;r[9]=k;r[10]=m;r[11]=n;r[12]=q;r[13]=p;r[14]=u;r[15]=v;return r},createFromMatrixRowMajor:function(a){var b=new y(16);b[0]=a[0];b[4]=a[1];b[8]=a[2];b[12]=a[3];b[1]=a[4];b[5]=a[5];b[9]=a[6];b[13]=a[7];b[2]=a[8];b[6]=a[9];b[10]=a[10];b[14]=a[11];b[3]=
a[12];b[7]=a[13];b[11]=a[14];b[15]=a[15];return b},createFromMatrix:function(a){var b=new y(16);b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15];return b},set:function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15];return b},setRowMajor:function(a,
b){b[0]=a[0];b[4]=a[1];b[8]=a[2];b[12]=a[3];b[1]=a[4];b[5]=a[5];b[9]=a[6];b[13]=a[7];b[2]=a[8];b[6]=a[9];b[10]=a[10];b[14]=a[11];b[3]=a[12];b[7]=a[13];b[11]=a[14];b[15]=a[15];return b},identity:function(a){a||(a=B.create());a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a},transpose:function(a,b){if(!b||a===b){b=a[1];var c=a[2],d=a[3],e=a[6],f=a[7],g=a[11];a[1]=a[4];a[2]=a[8];a[3]=a[12];a[4]=b;a[6]=a[9];a[7]=a[13];a[8]=
c;a[9]=e;a[11]=a[14];a[12]=d;a[13]=f;a[14]=g;return a}b[0]=a[0];b[1]=a[4];b[2]=a[8];b[3]=a[12];b[4]=a[1];b[5]=a[5];b[6]=a[9];b[7]=a[13];b[8]=a[2];b[9]=a[6];b[10]=a[10];b[11]=a[14];b[12]=a[3];b[13]=a[7];b[14]=a[11];b[15]=a[15];return b},determinant:function(a){var b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],l=a[7],k=a[8],m=a[9],n=a[10],q=a[11],p=a[12],u=a[13],v=a[14];a=a[15];return p*m*h*e-k*u*h*e-p*g*n*e+f*u*n*e+k*g*v*e-f*m*v*e-p*m*d*l+k*u*d*l+p*c*n*l-b*u*n*l-k*c*v*l+b*m*v*l+p*g*d*q-f*u*d*q-
p*c*h*q+b*u*h*q+f*c*v*q-b*g*v*q-k*g*d*a+f*m*d*a+k*c*h*a-b*m*h*a-f*c*n*a+b*g*n*a},inverse:function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],f=a[3],g=a[4],h=a[5],l=a[6],k=a[7],m=a[8],n=a[9],q=a[10],p=a[11],u=a[12],v=a[13],r=a[14];a=a[15];var z=c*h-d*g,A=c*l-e*g,K=c*k-f*g,C=d*l-e*h,D=d*k-f*h,E=e*k-f*l,F=m*v-n*u,G=m*r-q*u,H=m*a-p*u,I=n*r-q*v,N=n*a-p*v,O=q*a-p*r,w=z*O-A*N+K*I+C*H-D*G+E*F;if(!w)return null;w=1/w;b[0]=(h*O-l*N+k*I)*w;b[1]=(-d*O+e*N-f*I)*w;b[2]=(v*E-r*D+a*C)*w;b[3]=(-n*E+q*D-p*C)*w;b[4]=(-g*
O+l*H-k*G)*w;b[5]=(c*O-e*H+f*G)*w;b[6]=(-u*E+r*K-a*A)*w;b[7]=(m*E-q*K+p*A)*w;b[8]=(g*N-h*H+k*F)*w;b[9]=(-c*N+d*H-f*F)*w;b[10]=(u*D-v*K+a*z)*w;b[11]=(-m*D+n*K-p*z)*w;b[12]=(-g*I+h*G-l*F)*w;b[13]=(c*I-d*G+e*F)*w;b[14]=(-u*C+v*A-r*z)*w;b[15]=(m*C-n*A+q*z)*w;return b},toRotationMat:function(a,b){b||(b=B.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b},toMat3:function(a,b){b||
(b=P.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[4];b[4]=a[5];b[5]=a[6];b[6]=a[8];b[7]=a[9];b[8]=a[10];return b},toInverseMat3:function(a,b){var c=a[0],d=a[1],e=a[2],f=a[4],g=a[5],h=a[6],l=a[8],k=a[9];a=a[10];var m=a*g-h*k,n=-a*f+h*l,q=k*f-g*l,p=c*m+d*n+e*q;if(!p)return null;p=1/p;b||(b=P.create());b[0]=m*p;b[1]=(-a*d+e*k)*p;b[2]=(h*d-e*g)*p;b[3]=n*p;b[4]=(a*c-e*l)*p;b[5]=(-h*c+e*f)*p;b[6]=q*p;b[7]=(-k*c+d*l)*p;b[8]=(g*c-d*f)*p;return b},multiply:function(a,b,c){c||(c=a);var d=a[0],e=a[1],f=a[2],
g=a[3],h=a[4],l=a[5],k=a[6],m=a[7],n=a[8],q=a[9],p=a[10],u=a[11],v=a[12],r=a[13],z=a[14];a=a[15];var A=b[0],K=b[1],C=b[2],D=b[3],E=b[4],F=b[5],G=b[6],H=b[7],I=b[8],N=b[9],O=b[10],w=b[11],R=b[12],S=b[13],T=b[14];b=b[15];c[0]=A*d+K*h+C*n+D*v;c[1]=A*e+K*l+C*q+D*r;c[2]=A*f+K*k+C*p+D*z;c[3]=A*g+K*m+C*u+D*a;c[4]=E*d+F*h+G*n+H*v;c[5]=E*e+F*l+G*q+H*r;c[6]=E*f+F*k+G*p+H*z;c[7]=E*g+F*m+G*u+H*a;c[8]=I*d+N*h+O*n+w*v;c[9]=I*e+N*l+O*q+w*r;c[10]=I*f+N*k+O*p+w*z;c[11]=I*g+N*m+O*u+w*a;c[12]=R*d+S*h+T*n+b*v;c[13]=
R*e+S*l+T*q+b*r;c[14]=R*f+S*k+T*p+b*z;c[15]=R*g+S*m+T*u+b*a;return c},multiplyVec3:function(a,b,c){c||(c=b);var d=b[0],e=b[1];b=b[2];c[0]=a[0]*d+a[4]*e+a[8]*b+a[12];c[1]=a[1]*d+a[5]*e+a[9]*b+a[13];c[2]=a[2]*d+a[6]*e+a[10]*b+a[14];return c},multiplyVec4:function(a,b,c){c||(c=b);var d=b[0],e=b[1],f=b[2];b=b[3];c[0]=a[0]*d+a[4]*e+a[8]*f+a[12]*b;c[1]=a[1]*d+a[5]*e+a[9]*f+a[13]*b;c[2]=a[2]*d+a[6]*e+a[10]*f+a[14]*b;c[3]=a[3]*d+a[7]*e+a[11]*f+a[15]*b;return c},translate:function(a,b,c){var d=b[0],e=b[1];
b=b[2];if(!c||a===c)return a[12]=a[0]*d+a[4]*e+a[8]*b+a[12],a[13]=a[1]*d+a[5]*e+a[9]*b+a[13],a[14]=a[2]*d+a[6]*e+a[10]*b+a[14],a[15]=a[3]*d+a[7]*e+a[11]*b+a[15],a;var f=a[0];var g=a[1];var h=a[2];var l=a[3];var k=a[4];var m=a[5];var n=a[6];var q=a[7];var p=a[8];var u=a[9];var v=a[10];var r=a[11];c[0]=f;c[1]=g;c[2]=h;c[3]=l;c[4]=k;c[5]=m;c[6]=n;c[7]=q;c[8]=p;c[9]=u;c[10]=v;c[11]=r;c[12]=f*d+k*e+p*b+a[12];c[13]=g*d+m*e+u*b+a[13];c[14]=h*d+n*e+v*b+a[14];c[15]=l*d+q*e+r*b+a[15];return c},scale:function(a,
b,c){var d=b[0],e=b[1];b=b[2];if(!c||a===c)return a[0]*=d,a[1]*=d,a[2]*=d,a[3]*=d,a[4]*=e,a[5]*=e,a[6]*=e,a[7]*=e,a[8]*=b,a[9]*=b,a[10]*=b,a[11]*=b,a;c[0]=a[0]*d;c[1]=a[1]*d;c[2]=a[2]*d;c[3]=a[3]*d;c[4]=a[4]*e;c[5]=a[5]*e;c[6]=a[6]*e;c[7]=a[7]*e;c[8]=a[8]*b;c[9]=a[9]*b;c[10]=a[10]*b;c[11]=a[11]*b;c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15];return c},maxScale:function(a){return Math.max(Math.max(Math.sqrt(a[0]*a[0]+a[4]*a[4]+a[8]*a[8]),Math.sqrt(a[1]*a[1]+a[5]*a[5]+a[9]*a[9])),Math.sqrt(a[2]*a[2]+
a[6]*a[6]+a[10]*a[10]))},rotate:function(a,b,c,d){var e=c[0],f=c[1];c=c[2];var g=Math.sqrt(e*e+f*f+c*c);if(!g)return null;1!==g&&(g=1/g,e*=g,f*=g,c*=g);var h=Math.sin(b);var l=Math.cos(b);var k=1-l;b=a[0];g=a[1];var m=a[2];var n=a[3];var q=a[4];var p=a[5];var u=a[6];var v=a[7];var r=a[8];var z=a[9];var A=a[10];var K=a[11];var C=e*e*k+l;var D=f*e*k+c*h;var E=c*e*k-f*h;var F=e*f*k-c*h;var G=f*f*k+l;var H=c*f*k+e*h;var I=e*c*k+f*h;e=f*c*k-e*h;f=c*c*k+l;d?a!==d&&(d[12]=a[12],d[13]=a[13],d[14]=a[14],d[15]=
a[15]):d=a;d[0]=b*C+q*D+r*E;d[1]=g*C+p*D+z*E;d[2]=m*C+u*D+A*E;d[3]=n*C+v*D+K*E;d[4]=b*F+q*G+r*H;d[5]=g*F+p*G+z*H;d[6]=m*F+u*G+A*H;d[7]=n*F+v*G+K*H;d[8]=b*I+q*e+r*f;d[9]=g*I+p*e+z*f;d[10]=m*I+u*e+A*f;d[11]=n*I+v*e+K*f;return d},rotateX:function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[4],f=a[5],g=a[6],h=a[7],l=a[8],k=a[9],m=a[10],n=a[11];c?a!==c&&(c[0]=a[0],c[1]=a[1],c[2]=a[2],c[3]=a[3],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]):c=a;c[4]=e*b+l*d;c[5]=f*b+k*d;c[6]=g*b+m*d;c[7]=h*b+n*d;c[8]=
e*-d+l*b;c[9]=f*-d+k*b;c[10]=g*-d+m*b;c[11]=h*-d+n*b;return c},rotateY:function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[0],f=a[1],g=a[2],h=a[3],l=a[8],k=a[9],m=a[10],n=a[11];c?a!==c&&(c[4]=a[4],c[5]=a[5],c[6]=a[6],c[7]=a[7],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]):c=a;c[0]=e*b+l*-d;c[1]=f*b+k*-d;c[2]=g*b+m*-d;c[3]=h*b+n*-d;c[8]=e*d+l*b;c[9]=f*d+k*b;c[10]=g*d+m*b;c[11]=h*d+n*b;return c},rotateZ:function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[0],f=a[1],g=a[2],h=a[3],l=a[4],k=
a[5],m=a[6],n=a[7];c?a!==c&&(c[8]=a[8],c[9]=a[9],c[10]=a[10],c[11]=a[11],c[12]=a[12],c[13]=a[13],c[14]=a[14],c[15]=a[15]):c=a;c[0]=e*b+l*d;c[1]=f*b+k*d;c[2]=g*b+m*d;c[3]=h*b+n*d;c[4]=e*-d+l*b;c[5]=f*-d+k*b;c[6]=g*-d+m*b;c[7]=h*-d+n*b;return c},frustum:function(a,b,c,d,e,f,g){g||(g=B.create());var h=b-a,l=d-c,k=f-e;g[0]=2*e/h;g[1]=0;g[2]=0;g[3]=0;g[4]=0;g[5]=2*e/l;g[6]=0;g[7]=0;g[8]=(b+a)/h;g[9]=(d+c)/l;g[10]=-(f+e)/k;g[11]=-1;g[12]=0;g[13]=0;g[14]=-(f*e*2)/k;g[15]=0;return g},perspective:function(a,
b,c,d,e){a=c*Math.tan(a*Math.PI/360);b*=a;return B.frustum(-b,b,-a,a,c,d,e)},ortho:function(a,b,c,d,e,f,g){g||(g=B.create());var h=b-a,l=d-c,k=f-e;g[0]=2/h;g[1]=0;g[2]=0;g[3]=0;g[4]=0;g[5]=2/l;g[6]=0;g[7]=0;g[8]=0;g[9]=0;g[10]=-2/k;g[11]=0;g[12]=-(a+b)/h;g[13]=-(d+c)/l;g[14]=-(f+e)/k;g[15]=1;return g},lookAt:function(a,b,c,d){d||(d=B.create());var e=a[0],f=a[1];a=a[2];var g=c[0];var h=c[1];var l=c[2];var k=b[0];c=b[1];var m=b[2];if(e===k&&f===c&&a===m)return B.identity(d);b=e-k;c=f-c;k=a-m;var n=
1/Math.sqrt(b*b+c*c+k*k);b*=n;c*=n;k*=n;m=h*k-l*c;l=l*b-g*k;g=g*c-h*b;(n=Math.sqrt(m*m+l*l+g*g))?(n=1/n,m*=n,l*=n,g*=n):g=l=m=0;h=c*g-k*l;var q=k*m-b*g;var p=b*l-c*m;(n=Math.sqrt(h*h+q*q+p*p))?(n=1/n,h*=n,q*=n,p*=n):p=q=h=0;d[0]=m;d[1]=h;d[2]=b;d[3]=0;d[4]=l;d[5]=q;d[6]=c;d[7]=0;d[8]=g;d[9]=p;d[10]=k;d[11]=0;d[12]=-(m*e+l*f+g*a);d[13]=-(h*e+q*f+p*a);d[14]=-(b*e+c*f+k*a);d[15]=1;return d},fromRotationTranslation:function(a,b,c){c||(c=B.create());var d=a[0],e=a[1],f=a[2],g=a[3],h=d+d,l=e+e,k=f+f;a=
d*h;var m=d*l;d*=k;var n=e*l;e*=k;f*=k;h*=g;l*=g;g*=k;c[0]=1-(n+f);c[1]=m+g;c[2]=d-l;c[3]=0;c[4]=m-g;c[5]=1-(a+f);c[6]=e+h;c[7]=0;c[8]=d+l;c[9]=e-h;c[10]=1-(a+n);c[11]=0;c[12]=b[0];c[13]=b[1];c[14]=b[2];c[15]=1;return c},str:function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+", "+a[9]+", "+a[10]+", "+a[11]+", "+a[12]+", "+a[13]+", "+a[14]+", "+a[15]+"]"}},t={create:function(a){var b=new y(4);a?(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3]):b[0]=b[1]=
b[2]=b[3]=0;return b},createFrom:function(a,b,c,d){var e=new y(4);e[0]=a;e[1]=b;e[2]=c;e[3]=d;return e},set:function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];return b},identity:function(a){a||(a=t.create());a[0]=0;a[1]=0;a[2]=0;a[3]=1;return a}},ca=t.identity();t.calculateW=function(a,b){var c=a[0],d=a[1],e=a[2];if(!b||a===b)return a[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e)),a;b[0]=c;b[1]=d;b[2]=e;b[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e));return b};t.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*
b[2]+a[3]*b[3]};t.inverse=function(a,b){var c=a[0],d=a[1],e=a[2],f=a[3];c=(c=c*c+d*d+e*e+f*f)?1/c:0;if(!b||a===b)return a[0]*=-c,a[1]*=-c,a[2]*=-c,a[3]*=c,a;b[0]=-a[0]*c;b[1]=-a[1]*c;b[2]=-a[2]*c;b[3]=a[3]*c;return b};t.conjugate=function(a,b){if(!b||a===b)return a[0]*=-1,a[1]*=-1,a[2]*=-1,a;b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];b[3]=a[3];return b};t.length=function(a){var b=a[0],c=a[1],d=a[2];a=a[3];return Math.sqrt(b*b+c*c+d*d+a*a)};t.normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2];a=a[3];
var f=Math.sqrt(c*c+d*d+e*e+a*a);if(0===f)return b[0]=0,b[1]=0,b[2]=0,b[3]=0,b;f=1/f;b[0]=c*f;b[1]=d*f;b[2]=e*f;b[3]=a*f;return b};t.add=function(a,b,c){if(!c||a===c)return a[0]+=b[0],a[1]+=b[1],a[2]+=b[2],a[3]+=b[3],a;c[0]=a[0]+b[0];c[1]=a[1]+b[1];c[2]=a[2]+b[2];c[3]=a[3]+b[3];return c};t.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],f=a[2];a=a[3];var g=b[0],h=b[1],l=b[2];b=b[3];c[0]=d*b+a*g+e*l-f*h;c[1]=e*b+a*h+f*g-d*l;c[2]=f*b+a*l+d*h-e*g;c[3]=a*b-d*g-e*h-f*l;return c};t.multiplyVec3=function(a,
b,c){c||(c=b);var d=b[0],e=b[1],f=b[2];b=a[0];var g=a[1],h=a[2];a=a[3];var l=a*d+g*f-h*e,k=a*e+h*d-b*f,m=a*f+b*e-g*d;d=-b*d-g*e-h*f;c[0]=l*a+d*-b+k*-h-m*-g;c[1]=k*a+d*-g+m*-b-l*-h;c[2]=m*a+d*-h+l*-g-k*-b;return c};t.scale=function(a,b,c){if(!c||a===c)return a[0]*=b,a[1]*=b,a[2]*=b,a[3]*=b,a;c[0]=a[0]*b;c[1]=a[1]*b;c[2]=a[2]*b;c[3]=a[3]*b;return c};t.toMat3=function(a,b){b||(b=P.create());var c=a[0],d=a[1],e=a[2],f=a[3],g=c+c,h=d+d,l=e+e;a=c*g;var k=c*h;c*=l;var m=d*h;d*=l;e*=l;g*=f;h*=f;f*=l;b[0]=
1-(m+e);b[1]=k+f;b[2]=c-h;b[3]=k-f;b[4]=1-(a+e);b[5]=d+g;b[6]=c+h;b[7]=d-g;b[8]=1-(a+m);return b};t.toMat4=function(a,b){b||(b=B.create());var c=a[0],d=a[1],e=a[2],f=a[3],g=c+c,h=d+d,l=e+e;a=c*g;var k=c*h;c*=l;var m=d*h;d*=l;e*=l;g*=f;h*=f;f*=l;b[0]=1-(m+e);b[1]=k+f;b[2]=c-h;b[3]=0;b[4]=k-f;b[5]=1-(a+e);b[6]=d+g;b[7]=0;b[8]=c+h;b[9]=d-g;b[10]=1-(a+m);b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};t.slerp=function(a,b,c,d){d||(d=a);var e=a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3];if(1<=Math.abs(e))return d!==
a&&(d[0]=a[0],d[1]=a[1],d[2]=a[2],d[3]=a[3]),d;var f=Math.acos(e);var g=Math.sqrt(1-e*e);if(.001>Math.abs(g))return d[0]=.5*a[0]+.5*b[0],d[1]=.5*a[1]+.5*b[1],d[2]=.5*a[2]+.5*b[2],d[3]=.5*a[3]+.5*b[3],d;e=Math.sin((1-c)*f)/g;c=Math.sin(c*f)/g;d[0]=a[0]*e+b[0]*c;d[1]=a[1]*e+b[1]*c;d[2]=a[2]*e+b[2]*c;d[3]=a[3]*e+b[3]*c;return d};t.fromRotationMatrix=function(a,b){b||(b=t.create());var c=a[0]+a[4]+a[8];if(0<c){var d=Math.sqrt(c+1);b[3]=.5*d;d=.5/d;b[0]=(a[7]-a[5])*d;b[1]=(a[2]-a[6])*d;b[2]=(a[3]-a[1])*
d}else{d=t.fromRotationMatrix.s_iNext=t.fromRotationMatrix.s_iNext||[1,2,0];c=0;a[4]>a[0]&&(c=1);a[8]>a[3*c+c]&&(c=2);var e=d[c],f=d[e];d=Math.sqrt(a[3*c+c]-a[3*e+e]-a[3*f+f]+1);b[c]=.5*d;d=.5/d;b[3]=(a[3*f+e]-a[3*e+f])*d;b[e]=(a[3*e+c]+a[3*c+e])*d;b[f]=(a[3*f+c]+a[3*c+f])*d}return b};P.toQuat4=t.fromRotationMatrix;(function(){var a=P.create();t.fromAxes=function(b,c,d,e){a[0]=c[0];a[3]=c[1];a[6]=c[2];a[1]=d[0];a[4]=d[1];a[7]=d[2];a[2]=b[0];a[5]=b[1];a[8]=b[2];return t.fromRotationMatrix(a,e)}})();
t.identity=function(a){a||(a=t.create());a[0]=0;a[1]=0;a[2]=0;a[3]=1;return a};t.fromAngleAxis=function(a,b,c){c||(c=t.create());a*=.5;var d=Math.sin(a);c[3]=Math.cos(a);c[0]=d*b[0];c[1]=d*b[1];c[2]=d*b[2];return c};t.toAngleAxis=function(a,b){b||(b=a);var c=a[0]*a[0]+a[1]*a[1]+a[2]*a[2];0<c?(b[3]=2*Math.acos(a[3]),c=Q.invsqrt(c),b[0]=a[0]*c,b[1]=a[1]*c,b[2]=a[2]*c):(b[3]=0,b[0]=1,b[1]=0,b[2]=0);return b};t.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+"]"};var Y={create:function(a){var b=
new y(4);a?(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3]):b[0]=b[1]=b[2]=b[3]=0;return b},createFrom:function(a,b,c,d){var e=new y(4);e[0]=a;e[1]=b;e[2]=c;e[3]=d;return e},set:function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];return b},identity:function(a){a||(a=Y.create());a[0]=1;a[1]=0;a[2]=0;a[3]=1;return a},transpose:function(a,b){if(!b||a===b)return b=a[1],a[1]=a[2],a[2]=b,a;b[0]=a[0];b[1]=a[2];b[2]=a[1];b[3]=a[3];return b},determinant:function(a){return a[0]*a[3]-a[2]*a[1]},inverse:function(a,
b){b||(b=a);var c=a[0],d=a[1],e=a[2];a=a[3];var f=c*a-e*d;if(!f)return null;f=1/f;b[0]=a*f;b[1]=-d*f;b[2]=-e*f;b[3]=c*f;return b},multiply:function(a,b,c){c||(c=a);var d=a[0],e=a[1],f=a[2];a=a[3];c[0]=d*b[0]+e*b[2];c[1]=d*b[1]+e*b[3];c[2]=f*b[0]+a*b[2];c[3]=f*b[1]+a*b[3];return c},rotate:function(a,b,c){c||(c=a);var d=a[0],e=a[1],f=a[2];a=a[3];var g=Math.sin(b);b=Math.cos(b);c[0]=d*b+e*g;c[1]=d*-g+e*b;c[2]=f*b+a*g;c[3]=f*-g+a*b;return c},multiplyVec2:function(a,b,c){c||(c=b);var d=b[0];b=b[1];c[0]=
d*a[0]+b*a[1];c[1]=d*a[2]+b*a[3];return c},scale:function(a,b,c){c||(c=a);var d=a[1],e=a[2],f=a[3],g=b[0];b=b[1];c[0]=a[0]*g;c[1]=d*b;c[2]=e*g;c[3]=f*b;return c},str:function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+"]"}};J=J?"":"d";M["glMath"+J]=Q;M["vec2"+J]={create:function(a){var b=new y(2);a?(b[0]=a[0],b[1]=a[1]):(b[0]=0,b[1]=0);return b},createFrom:function(a,b){var c=new y(2);c[0]=a;c[1]=b;return c},add:function(a,b,c){c||(c=b);c[0]=a[0]+b[0];c[1]=a[1]+b[1];return c},subtract:function(a,
b,c){c||(c=b);c[0]=a[0]-b[0];c[1]=a[1]-b[1];return c},multiply:function(a,b,c){c||(c=b);c[0]=a[0]*b[0];c[1]=a[1]*b[1];return c},divide:function(a,b,c){c||(c=b);c[0]=a[0]/b[0];c[1]=a[1]/b[1];return c},scale:function(a,b,c){c||(c=a);c[0]=a[0]*b;c[1]=a[1]*b;return c},dist:function(a,b){var c=b[0]-a[0];a=b[1]-a[1];return Math.sqrt(c*c+a*a)},dist2:function(a,b){var c=b[0]-a[0];a=b[1]-a[1];return c*c+a*a},set:function(a,b){b[0]=a[0];b[1]=a[1];return b},set2:function(a,b,c){c[0]=a;c[1]=b;return c},negate:function(a,
b){b||(b=a);b[0]=-a[0];b[1]=-a[1];return b},normalize:function(a,b){b||(b=a);var c=a[0]*a[0]+a[1]*a[1];0<c?(c=Math.sqrt(c),b[0]=a[0]/c,b[1]=a[1]/c):b[0]=b[1]=0;return b},cross:function(a,b,c){a=a[0]*b[1]-a[1]*b[0];if(!c)return a;c[0]=c[1]=0;c[2]=a;return c},length:function(a){var b=a[0];a=a[1];return Math.sqrt(b*b+a*a)},dot:function(a,b){return a[0]*b[0]+a[1]*b[1]},direction:function(a,b,c){c||(c=a);var d=a[0]-b[0];a=a[1]-b[1];b=d*d+a*a;if(!b)return c[0]=0,c[1]=0,c[2]=0,c;b=1/Math.sqrt(b);c[0]=d*
b;c[1]=a*b;return c},lerp:function(a,b,c,d){d||(d=a);d[0]=a[0]+c*(b[0]-a[0]);d[1]=a[1]+c*(b[1]-a[1]);return d},str:function(a){return"["+a[0]+", "+a[1]+"]"}};M["vec3"+J]=x;M["vec4"+J]={create:function(a){var b=new y(4);a?(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3]):(b[0]=0,b[1]=0,b[2]=0,b[3]=0);return b},createFrom:function(a,b,c,d){var e=new y(4);e[0]=a;e[1]=b;e[2]=c;e[3]=d;return e},add:function(a,b,c){c||(c=b);c[0]=a[0]+b[0];c[1]=a[1]+b[1];c[2]=a[2]+b[2];c[3]=a[3]+b[3];return c},subtract:function(a,
b,c){c||(c=b);c[0]=a[0]-b[0];c[1]=a[1]-b[1];c[2]=a[2]-b[2];c[3]=a[3]-b[3];return c},multiply:function(a,b,c){c||(c=b);c[0]=a[0]*b[0];c[1]=a[1]*b[1];c[2]=a[2]*b[2];c[3]=a[3]*b[3];return c},divide:function(a,b,c){c||(c=b);c[0]=a[0]/b[0];c[1]=a[1]/b[1];c[2]=a[2]/b[2];c[3]=a[3]/b[3];return c},scale:function(a,b,c){c||(c=a);c[0]=a[0]*b;c[1]=a[1]*b;c[2]=a[2]*b;c[3]=a[3]*b;return c},dot:function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]},set:function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];
return b},set4:function(a,b,c,d,e){e[0]=a;e[1]=b;e[2]=c;e[3]=d;return e},negate:function(a,b){b||(b=a);b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];b[3]=-a[3];return b},lerp:function(a,b,c,d){d||(d=a);d[0]=a[0]+c*(b[0]-a[0]);d[1]=a[1]+c*(b[1]-a[1]);d[2]=a[2]+c*(b[2]-a[2]);d[3]=a[3]+c*(b[3]-a[3]);return d},str:function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+"]"}};M["mat2"+J]=Y;M["mat3"+J]=P;M["mat4"+J]=B;M["quat4"+J]=t});return W});