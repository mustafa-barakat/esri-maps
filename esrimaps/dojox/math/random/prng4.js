//>>built
define("dojox/math/random/prng4",["dojo","dojox"],function(f,e){function g(){this.j=this.i=0;this.S=Array(256)}f.getObject("math.random.prng4",!0,e);f.extend(g,{init:function(d){var a,b,c=this.S,h=d.length;for(a=0;256>a;++a)c[a]=a;for(a=b=0;256>a;++a){b=b+c[a]+d[a%h]&255;var k=c[a];c[a]=c[b];c[b]=k}this.j=this.i=0},next:function(){var d,a,b=this.S;this.i=d=this.i+1&255;this.j=a=this.j+b[d]&255;var c=b[d];b[d]=b[a];b[a]=c;return b[c+b[d]&255]}});e.math.random.prng4=function(){return new g};e.math.random.prng4.size=
256;return e.math.random.prng4});