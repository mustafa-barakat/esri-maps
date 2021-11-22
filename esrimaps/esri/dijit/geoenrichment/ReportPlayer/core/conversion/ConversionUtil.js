// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/ConversionUtil",["dojo/_base/lang","esri/dijit/geoenrichment/utils/PageUnitsConverter","esri/dijit/geoenrichment/utils/ColorUtil"],function(p,q,r){var d={};p.mixin(d,q);var g={"font-size":"fontSize","line-height":"lineHeight","font-family":"fontFamily","font-style":"fontStyle","font-weight":"fontWeight","text-decoration":"textDecoration",color:"color","background-color":"backgroundColor"},l={},h;for(h in g)l[g[h]]=h;d.splitTrim=function(a,
b,e){a=String(a).split(b).map(function(c){return c.trim()});return e?a.filter(function(c){return!!c}):a};d.parseStyleString=function(a){var b={};d.splitTrim(a||"",";",!0).forEach(function(e){var c=d.splitTrim(e,":");if(e=g[c[0]])c=c[1],"rgba(0, 0, 0, 0)"===c&&(c="transparent"),b[e]=c});return b};d.composeStyleString=function(a,b){b=b&&b.addPx;var e="",c;for(c in a){var k=l[c];if(k){var f=a[c];f&&("backgroundColor"===c&&(f=r.toCSSColor(f)),e+=k+":"+f+(b&&b[k]?"px;":";"))}}return e};d.removeZeroProperties=
function(a){Object.keys(a).forEach(function(b){0===Number(a[b])&&delete a[b]});return a};var m={valign:{center:"middle"}},n={valign:{middle:"center"}};d.getPropValuePtoE=function(a,b){return m[a]&&m[a][b]||b};d.getPropValueEtoP=function(a,b){return n[a]&&n[a][b]||b};d.KEY_OPERATOR_RE=/^(!=|>=|<=|<|>|=)/;d.ONE_FIELD_KEY_TEST=/^((<|>|<=|>=|!=|=|)(-?\d+\.\d+|-?\d+))$/;d.KEY_INTERVAL_SEPARATOR=";";return d});