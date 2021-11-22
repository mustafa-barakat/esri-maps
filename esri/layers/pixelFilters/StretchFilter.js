// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/pixelFilters/StretchFilter",["dojo/_base/declare","dojo/_base/lang","../PixelBlock"],function(x,y,B){var d;return x(null,{stretchType:0,min:0,max:255,numberOfStandardDeviations:2,statistics:null,histograms:null,dra:!1,minPercent:.25,maxPercent:.5,useGamma:!1,gamma:null,raster:null,outputPixelType:"U8",computeGamma:!1,constructor:function(a){this.stretchType=a.stretchType||a.StretchType||this.stretchType;this.min=a.min||a.Min||this.min;this.max=a.max||a.Max||this.max;this.numberOfStandardDeviations=
a.numberOfStandardDeviations||a.NumberOfStandardDeviations||this.numberOfStandardDeviations;this.statistics=a.statistics||a.Statistics||this.statistics;this.dra=a.dra||a.DRA||a.dRA||this.dra;this.minPercent=a.minPercent||a.MinPercent||this.minPercent;this.maxPercent=a.maxPercent||a.MaxPercent||this.maxPercent;this.useGamma=a.useGamma||a.UseGamma||this.useGamma;this.gamma=a.gamma||a.Gamma||this.gamma;this.computeGamma=a.computeGamma||a.ComputeGamma||this.computeGamma;this.raster=a.raster||a.Raster||
this.raster;this.outputPixelType=a.outputPixelType||a.OutputPixelType||this.outputPixelType;this.raster=a.raster||a.Raster||this.raster;d=this},filter:function(a){if(void 0!==a&&null!==a&&null!==a.pixelBlock&&null!==a.pixelBlock.pixels){var b=a.pixelBlock,f=b.pixels,p=b.width*b.height,g=f.length,h;(h=6===d.stretchType||3===d.stretchType&&d.dra)&&d._calculateStatisticsHistograms(a);if(d.dra)if(h)d._statistics=b.statistics,d._histograms=b.histograms;else{var e=b.statistics;d._statistics=[];for(h=0;h<
g;h++)d._statistics[h]=[e[h].minValue,e[h].maxValue,0,0]}else d._statistics=d.statistics,d._histograms=d.histograms;d.computeGamma&&(d.gamma=d._computeGammaValues(b.pixelType),d.useGamma=!0);d._createLUT(a);if(void 0===d.LUT||null===d.LUT)return d._filterNoLUT(a);e=d.LUT;var k=d.LUTOffset;for(h=0;h<g;h++){var t=e[h];for(b=0;b<p;b++){var q=f[h][b];f[h][b]=t[q-k]}}a.pixelBlock.pixelType="U8";return a}},_calculateStatisticsHistograms:function(a){a=a.pixelBlock;var b=a.pixelType,f=a.pixels,p=a.mask,g=
f.length,h,e,k=function(w){this.min=-.5;this.max=255.5;this.size=256;y.mixin(this,w);this.counts=this.counts||new Uint32Array(this.size)},t=[],q,u;for(h=0;h<g;h++){var m=new k;var c=m.counts;var n=f[h];if("U8"===b)if(p)for(e=0;e<a.width*a.height;e++)p[e]&&c[n[e]]++;else for(e=0;e<a.width*a.height;e++)c[n[e]]++;else{var r=a.statistics[h].minValue;var l=a.statistics[h].maxValue;m.min=r;m.max=l;l=(l-r)/256;var v=new Uint32Array(257);if(p)for(e=0;e<a.width*a.height;e++)p[e]&&v[Math.floor((n[e]-r)/l)]++;
else for(e=0;e<a.width*a.height;e++)v[Math.floor((n[e]-r)/l)]++;for(e=0;255>e;e++)c[e]=v[e];c[255]=v[255]+v[256]}t.push(m);n=[];r=a.statistics[h].minValue;l=a.statistics[h].maxValue;for(e=u=q=v=0;e<m.size;e++)v+=c[e],q+=e*c[e];q/=v;for(e=0;e<m.size;e++)u+=c[e]*Math.pow(e-q,2);c=Math.sqrt(u/(v-1));e=(q+.5)*(m.max-m.min)/m.size+m.min;m=c*(m.max-m.min)/m.size;n.push(r);n.push(l);n.push(e);n.push(m);a.statistics[h]=n}a.histograms=t},_getCutOffPoints:function(a){a=a.pixelBlock.pixels.length;var b=[],f=
[],p,g,h;switch(d.stretchType){case 5:for(g=0;g<a;g++)b[g]=d._statistics[g][0],f[g]=d._statistics[g][1];break;case 3:for(g=0;g<a;g++)b[g]=d._statistics[g][2]-d.numberOfStandardDeviations*d._statistics[g][3],f[g]=d._statistics[g][2]+d.numberOfStandardDeviations*d._statistics[g][3],b[g]<d._statistics[g][0]&&(b[g]=d._statistics[g][0]),f[g]>d._statistics[g][1]&&(f[g]=d._statistics[g][1]);break;case 6:for(g=0;g<a;g++){var e=d._histograms[g];var k=new Uint32Array(e.size);var t=e.counts;for(h=p=0;h<e.size;h++)p+=
t[h],k[h]=p;t=d.minPercent*p/100;for(h=1;h<e.size;h++)if(k[h]>t){b[g]=e.min+(e.max-e.min)/e.size*(h-.5);break}t=(1-d.maxPercent/100)*p;for(h=e.size-2;0<=h;h--)if(k[h]<t){f[g]=e.min+(e.max-e.min)/e.size*(h+.5);break}}break;default:for(g=0;g<a;g++)b[g]=0,f[g]=255}return{minCutOff:b,maxCutOff:f}},_createLUT:function(a){var b=a.pixelBlock,f=b.pixelType;if("U8"===f||"U16"===f||"S8"===f||"S16"===f){if(d._LUTSignature&&(f=d._computeLutSignature(),f.length===d._LUTSignature.length&&!f.some(function(z,A){return z!==
d._LUTSignature[A]})))return;f=b.pixels.length;var p=[],g=[],h=[],e,k=d.max,t=d.min,q=d.gamma,u=k-t,m=d._getCutOffPoints(a);a=m.minCutOff;m=m.maxCutOff;var c=0,n=256;"S8"===b.pixelType?c=-127:"S16"===b.pixelType&&(c=-32767);if("U16"===b.pixelType||"S16"===b.pixelType)n=65536;for(b=0;b<f;b++)p[b]=m[b]-a[b];if(d.useGamma&&null!==q&&q.length===f)for(b=0;b<f;b++)h[b]=1<q[b]?2<q[b]?6.5+Math.pow(q[b]-2,2.5):6.5+100*Math.pow(2-q[b],4):1;if(d.useGamma)for(b=0;b<f;b++){var r=[];for(e=0;e<n;e++){var l=e+c;
var v=(l-a[b])/p[b];var w=1;1<q[b]&&(w-=Math.pow(1/u,v*h[b]));l<m[b]&&l>a[b]?r[e]=Math.floor(w*u*Math.pow(v,1/q[b]))+t:l>m[b]?r[e]=k:l<a[b]&&(r[e]=t)}g[b]=r}else for(b=0;b<f;b++){r=[];for(e=0;e<n;e++)l=e+c,r[e]=l<a[b]?t:l>m[b]?k:Math.floor((l-a[b])/p[b]*u)+t;g[b]=r}d.LUT=g;d.LUTOffset=c;d._LUTSignature=d._computeLutSignature()}},_computeLutSignature:function(){var a=[],b,f;a.push(d.stretchType);a.push(d.min);a.push(d.max);a.push(d.numberOfStandardDeviations);if(d._statistics)for(b=0;b<d._statistics.length;b++)for(f=
0;f<d._statistics[b].length;f++)a.push(d._statistics[b][f]);a.push(d.dra?1:0);a.push(d.minPercent);a.push(d.maxPercent);if(d.gamma)for(b=0;b<d._statistics.length;b++)a.push(d.gamma[b]);a.push(d.useGamma?1:0);return a},_filterNoLUT:function(a){if(null!==a&&null!==a.pixelBlock&&null!==a.pixelBlock.pixels){var b=a.pixelBlock,f=b.pixels,p=b.mask;b=b.width*b.height;var g=f.length,h=[],e=[],k,t=d.max,q=d.min,u=d.gamma,m=t-q;var c=d._getCutOffPoints(a);var n=c.minCutOff,r=c.maxCutOff;for(c=0;c<g;c++)h[c]=
r[c]-n[c];if(d.useGamma&&null!==u&&u.length===g)for(c=0;c<g;c++)e[c]=1<u[c]?2<u[c]?6.5+Math.pow(u[c]-2,2.5):6.5+100*Math.pow(2-u[c],4):1;if(d.useGamma)if(void 0!==p&&null!==p)for(k=0;k<b;k++){if(p[k])for(c=0;c<g;c++){var l=f[c][k];var v=(l-n[c])/h[c];var w=1;1<u[c]&&(w-=Math.pow(1/m,v*e[c]));l<r[c]&&l>n[c]?f[c][k]=Math.floor(w*m*Math.pow(v,1/u[c]))+q:l>r[c]?f[c][k]=t:l<n[c]&&(f[c][k]=q)}}else for(k=0;k<b;k++)for(c=0;c<g;c++)l=f[c][k],v=(l-n[c])/h[c],w=1,1<u[c]&&(w-=Math.pow(1/m,v*e[c])),l<r[c]&&l>
n[c]?f[c][k]=Math.floor(w*m*Math.pow(v,1/u[c]))+q:l>r[c]?f[c][k]=t:l<n[c]&&(f[c][k]=q);else if(void 0!==p&&null!==p)for(k=0;k<b;k++){if(p[k])for(c=0;c<g;c++)l=f[c][k],l<r[c]&&l>n[c]?f[c][k]=Math.floor((l-n[c])/h[c]*m)+q:l>r[c]?f[c][k]=t:l<n[c]&&(f[c][k]=q)}else for(k=0;k<b;k++)for(c=0;c<g;c++)l=f[c][k],l<r[c]&&l>n[c]?f[c][k]=Math.floor((l-n[c])/h[c]*m)+q:l>r[c]?f[c][k]=t:l<n[c]&&(f[c][k]=q);a.pixelBlock.pixelType="U8";return a}},_computeGammaValues:function(a){var b=this._statistics.length,f,p=[];
for(f=0;f<b;f++){var g=this._statistics[f][2];"U8"!==a&&(g=255*(g-this._statistics[f][0])/(this._statistics[f][1]-this._statistics[f][0]));p.push(this._computeGammaValue(g))}return p},_computeGammaValue:function(a){if(0!==a&&!(255<a||0>a)){var b=0;0<a&&150!=a&&255>a&&(b=150>=a?45*Math.cos(.01047*a):17*Math.sin(.021*a));b=Math.log((a+b)/255);if(0!==b&&(a=Math.log(a/255)/b,!isNaN(a)))return Math.min(9.9,Math.max(.01,a))}}})});