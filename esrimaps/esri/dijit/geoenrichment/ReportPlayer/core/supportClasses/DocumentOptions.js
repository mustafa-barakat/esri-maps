// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions",["dojo/_base/lang","esri/dijit/geoenrichment/utils/PageUnitsConverter","../themes/ThemeLibrary"],function(q,f,t){var c={},l={a:[[841,1189],[594,841],[420,594],[297,420],[210,297],[148,210],[105,148],[74,105],[52,74],[37,52],[26,37]],b:[[1E3,1414],[707,1E3],[500,707],[353,500],[250,353],[176,250],[125,176],[88,125],[62,88],[44,62],[31,44]],c:[[917,1297],[648,917],[458,648],[324,458],[229,324],[162,229],[114,162],[81,
114],[57,81],[40,57],[28,40]],letter:[216,279],legal:[216,356],tabloid:[279,432],ledger:[432,279]};c.PAPER_SIZES=l;var k={};"a3 a4 a5 b4 b5 c4 c5 letter legal tabloid ledger".split(" ").forEach(function(a){var b=2===a.length?l[a[0]][a[1]]:l[a];k[a]={portrait:{w:f.mmToIn(b[0]),h:f.mmToIn(b[1])},landscape:{w:f.mmToIn(b[1]),h:f.mmToIn(b[0])}}});c.SIZE_TYPE_TO_DIM_HASH=k;c.hasStandardSize=function(a){return k[a]};c.getSupportedPageSizes=function(){var a=[],b;for(b in l)1===b.length?l[b].forEach(function(e,
g){a.push(b+g)}):a.push(b);return a};c.getPageDim=function(a,b,e){k[a]?a=k[a][b||"portrait"]:(a=a.split("x"),a={w:f.ptToIn(Number(a[0])),h:f.ptToIn(Number(a[1]))});e&&(a=q.clone(a),f.roundNDigitsObj(a,e.places));return a};c.getPageBox=function(a){if(!a)return null;var b=c.getPageDim(a.pagesize,a.orientation),e=f.inToPx(b.w);b=f.inToPx(b.h);return{w:e,h:b,contentW:e-(a.left||0)-(a.right||0),contentH:b-(a.top||0)-(a.bottom||0)}};c.combineCustomSizeString=function(a,b,e){return f.convert(a,e,"pt",5)+
"x"+f.convert(b,e,"pt",5)};c.getDefaultDocumentOptions=function(a){return q.mixin({pagesize:"letter",orientation:"portrait",left:21.07,right:22.6,top:19.2,bottom:9.6,align:"left",lineSpacing:1.12,fontSize:10,fontFamily:t.DEFAULT_FONT_FAMILY_CLASSIC},a)};c.getDefaultDocumentOptionsGraphicReport=function(a){return q.mixin({pagesize:"letter",orientation:"landscape",left:21.07,right:22.6,top:19.2,bottom:9.6,align:"left",fontSize:10,fontFamily:t.DEFAULT_FONT_FAMILY_GRAPHIC},a)};c.getClosestStandrdSizes=
function(a,b){function e(d){var h=d.w/g.w;d=d.h/g.h;return Math.max(1-(1<h?1/h:h),1-(1<d?1/d:d))}b=void 0===b?.4:b;var g=c.getPageDim(a.pagesize,a.orientation);a=[];for(var m in k){var n=k[m];a.push({pagesize:m,orientation:"portrait",score:e(n.portrait)});a.push({pagesize:m,orientation:"landscape",score:e(n.landscape)})}a=a.filter(function(d){return d.score<=b});a.sort(function(d,h){return d.score-h.score});return a};c.tryGetStandardPageSize=function(a,b){function e(p){var r="portrait"===b?1:0;return p["portrait"===
b?0:1]===m&&p[r]===n}if(c.SIZE_TYPE_TO_DIM_HASH[a])return a;var g=a.split("x"),m=f.convert(Number(g[0]),"pt","mm",0),n=f.convert(Number(g[1]),"pt","mm",0),d;for(d in c.PAPER_SIZES)if(g=c.PAPER_SIZES[d],1===d.length){if(g.some(function(p,r){if(e(p))return h=d+r,!0}))break}else if(e(g)){var h=d;break}return h||a};return c});