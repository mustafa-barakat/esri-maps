// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/geometry/support/scaleUtils",["require","exports","../../config","../../core/kebabDictionary","./WKIDUnitConversion"],function(u,c,k,r,t){function l(a){return m.fromJSON(a.toLowerCase())||null}function f(a){return h(a)||c.decDegToMeters}function h(a){if(a)if("object"===typeof a){var b=a.wkid;var d=a.wkt}else"number"===typeof a?b=a:"string"===typeof a&&(d=a);if(b)var e=g.values[g[b]];else d&&-1!==d.search(/^PROJCS/i)&&(a=n.exec(d))&&a[1]&&(e=parseFloat(a[1].split(",")[1]));
return e}function p(a){if(a)if("object"===typeof a){var b=a.wkid;var d=a.wkt}else"number"===typeof a?b=a:"string"===typeof a&&(d=a);if(b)var e=g.units[g[b]];else d&&-1!==d.search(/^PROJCS/i)&&(a=n.exec(d))&&a[1]&&(e=(a=/[\\"\\']{1}([^\\"\\']+)/.exec(a[1]))&&a[1]);return e?l(e):null}function q(a,b){b=f(b);return a/(b*c.inchesPerMeter*k.screenDPI)}Object.defineProperty(c,"__esModule",{value:!0});c.inchesPerMeter=39.37;c.decDegToMeters=20015077/180;var n=/UNIT\[([^\]]+)\]\]$/i,g=t,m=r({meter:"meters",
foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain_sears_1922_truncated:"sears-1922-truncated-chains","50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"},{ignoreUnknown:!0});c.unitFromRESTJSON=l;c.unitToRESTJSON=
function(a){return m.toJSON(a)||null};c.getMetersPerVerticalUnitForSR=function(a){a=f(a);return 1E5<a?1:a};c.getVerticalUnitStringForSR=function(a){return 1E5<f(a)?"meters":p(a)};c.getMetersPerUnitForSR=f;c.getMetersPerUnit=h;c.getUnitString=p;c.getScale=function(a,b){b=b||a.extent;a=a.width;var d=h(b&&b.spatialReference);return b&&a?b.width/a*(d||c.decDegToMeters)*c.inchesPerMeter*k.screenDPI:0};c.getResolutionForScale=q;c.getExtentForScale=function(a,b){var d=a.extent;a=a.width;b=q(b,d.spatialReference);
return d.clone().expand(b*a/d.width)}});