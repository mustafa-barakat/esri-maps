// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/base/optionsFilterer",["dojo/_base/lang","dojo/_base/array","dojo/has","../../../../../kernel"],function(d,e,f,g){var c={filter:function(k,a,h){return e.filter(h,function(b){return b.NAPOnly&&!a.isAgsNAP||b.NAPFGDCOnly&&!a.isAgsNAP&&!a.isAgsFGDC||b.NAPExcluded&&a.isAgsNAP||b.FGDCExcluded&&a.isAgsFGDC||b.INSPIREExcluded&&a.isAgsINSPIRE?!1:!0})}};f("extend-esri")&&d.setObject("dijit.metadata.types.arcgis.base.optionsFilterer",c,g);return c});