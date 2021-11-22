//>>built
define("dojox/encoding/digests/_sha-32",["./_base"],function(y){function f(c,b){return c>>>b|c<<32-b}var n=function(c){var b=function(){};b.prototype=c;return new b}(y);n.toWord=function(c){for(var b=Array(c.length>>2),a=0;a<b.length;a++)b[a]=0;for(a=0;a<8*c.length;a+=8)b[a>>5]|=(c.charCodeAt(a/8)&255)<<24-a%32;return b};n.toHex=function(c){for(var b=[],a=0,q=4*c.length;a<q;a++)b.push("0123456789abcdef".charAt(c[a>>2]>>8*(3-a%4)+4&15),"0123456789abcdef".charAt(c[a>>2]>>8*(3-a%4)&15));return b.join("")};
n.toBase64=function(c){for(var b=[],a=0,q=4*c.length;a<q;a+=3)for(var h=(c[a>>2]>>8*(3-a%4)&255)<<16|(c[a+1>>2]>>8*(3-(a+1)%4)&255)<<8|c[a+2>>2]>>8*(3-(a+2)%4)&255,k=0;4>k;k++)8*a+6*k>32*c.length?b.push("\x3d"):b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(h>>6*(3-k)&63));return b.join("")};n._toString=function(c){for(var b="",a=0;a<32*c.length;a+=8)b+=String.fromCharCode(c[a>>5]>>>24-a%32&255);return b};var d=y.addWords,z=[1116352408,1899447441,3049323471,3921009573,
961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,
883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];n.digest=function(c,b,a,q){a=a.slice(0);var h=Array(64),k,e;c[b>>5]|=128<<24-b%32;c[(b+64>>9<<4)+15]=b;for(k=0;k<c.length;k+=16){b=a[0];var r=a[1];var t=a[2];var x=a[3];var p=a[4];var v=a[5];var w=a[6];var l=a[7];for(e=0;64>e;e++){if(16>e)h[e]=c[e+k];else{var g=e;var m=h[e-2];m=f(m,17)^f(m,19)^m>>>10;m=d(m,h[e-7]);var u=h[e-15];u=f(u,7)^f(u,18)^u>>>3;h[g]=d(d(m,
u),h[e-16])}g=p;g=f(g,6)^f(g,11)^f(g,25);g=d(d(d(d(l,g),p&v^~p&w),z[e]),h[e]);l=b;l=f(l,2)^f(l,13)^f(l,22);m=d(l,b&r^b&t^r&t);l=w;w=v;v=p;p=d(x,g);x=t;t=r;r=b;b=d(g,m)}a[0]=d(b,a[0]);a[1]=d(r,a[1]);a[2]=d(t,a[2]);a[3]=d(x,a[3]);a[4]=d(p,a[4]);a[5]=d(v,a[5]);a[6]=d(w,a[6]);a[7]=d(l,a[7])}224==q&&a.pop();return a};return n});