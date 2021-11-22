// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/el/OptimalPathAsLine",{inputDestinationRasterOrFeatures:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03c9\u03bd \u03ae \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03b7\u03c1\u03b9\u03c3\u03c4\u03b9\u03ba\u03ce\u03bd \u03c0\u03c1\u03bf\u03bf\u03c1\u03b9\u03c3\u03bc\u03bf\u03cd",destinationField:"\u03a0\u03b5\u03b4\u03af\u03bf \u03c0\u03c1\u03bf\u03bf\u03c1\u03b9\u03c3\u03bc\u03bf\u03cd (\u03c0\u03c1\u03bf\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03cc)",
inputDistanceAccumulationRaster:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03c3\u03c5\u03b3\u03ba\u03b5\u03bd\u03c4\u03c1\u03c9\u03c4\u03b9\u03ba\u03ae\u03c2 \u03b1\u03c0\u03cc\u03c3\u03c4\u03b1\u03c3\u03b7\u03c2",inputBackDirectionRaster:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03b5\u03c0\u03b9\u03c3\u03c4\u03c1\u03bf\u03c6\u03ae\u03c2 \u03ae \u03ba\u03b1\u03c4\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7\u03c2 \u03c1\u03bf\u03ae\u03c2",pathType:"\u03a4\u03cd\u03c0\u03bf\u03c2 \u03b4\u03b9\u03b1\u03b4\u03c1\u03bf\u03bc\u03ae\u03c2 (\u03c0\u03c1\u03bf\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03cc)",
bestSingle:"\u039a\u03b1\u03bb\u03cd\u03c4\u03b5\u03c1\u03bf \u03bc\u03bf\u03bd\u03cc",eachCell:"\u039a\u03ac\u03b8\u03b5 \u03c0\u03b5\u03b4\u03af\u03bf",eachZone:"\u039a\u03ac\u03b8\u03b5 \u03b6\u03ce\u03bd\u03b7",outputFeatureName:"\u038c\u03bd\u03bf\u03bc\u03b1 \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03bf\u03c5 \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03b7\u03c1\u03b9\u03c3\u03c4\u03b9\u03ba\u03bf\u03cd \u03b1\u03c0\u03bf\u03c4\u03b5\u03bb\u03ad\u03c3\u03bc\u03b1\u03c4\u03bf\u03c2",outputLayerName:"\u0392\u03ad\u03bb\u03c4\u03b9\u03c3\u03c4\u03bf \u03bc\u03bf\u03bd\u03bf\u03c0\u03ac\u03c4\u03b9 \u03c9\u03c2 \u03b3\u03c1\u03b1\u03bc\u03bc\u03ae${layername}",
drawSourcePointLayerName:"\u03a3\u03b7\u03bc\u03b5\u03af\u03b1 \u03c0\u03c1\u03bf\u03ad\u03bb\u03b5\u03c5\u03c3\u03b7\u03c2",itemDescription:"Feature layer \u03c0\u03bf\u03c5 \u03c0\u03c1\u03bf\u03ba\u03cd\u03c0\u03c4\u03b5\u03b9 \u03b1\u03c0\u03cc \u03c4\u03b7\u03bd \u03b5\u03ba\u03c4\u03ad\u03bb\u03b5\u03c3\u03b7 \u03c4\u03bf\u03c5 \u03b5\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03bf\u03c5 \u03b2\u03ad\u03bb\u03c4\u03b9\u03c3\u03c4\u03b7 \u03b4\u03b9\u03b1\u03b4\u03c1\u03bf\u03bc\u03ae \u03c9\u03c2 \u03b3\u03c1\u03b1\u03bc\u03bc\u03ae ${layername}. ",
itemTags:"\u0391\u03c0\u03bf\u03c4\u03ad\u03bb\u03b5\u03c3\u03bc\u03b1 \u0391\u03bd\u03ac\u03bb\u03c5\u03c3\u03b7\u03c2, \u0392\u03ad\u03bb\u03c4\u03b9\u03c3\u03c4\u03b7 \u03b4\u03b9\u03b1\u03b4\u03c1\u03bf\u03bc\u03ae \u03c9\u03c2 \u03b3\u03c1\u03b1\u03bc\u03bc\u03ae, ${layername} ${fieldname}",itemSnippet:"Feature layer \u03c0\u03bf\u03c5 \u03c0\u03c1\u03bf\u03ba\u03cd\u03c0\u03c4\u03b5\u03b9 \u03b1\u03c0\u03cc \u03c4\u03b7\u03bd \u03b5\u03ba\u03c4\u03ad\u03bb\u03b5\u03c3\u03b7 \u03c4\u03bf\u03c5 \u03b5\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03bf\u03c5 \u03b2\u03ad\u03bb\u03c4\u03b9\u03c3\u03c4\u03b7\u03c2 \u03b4\u03b9\u03b1\u03b4\u03c1\u03bf\u03bc\u03ae\u03c2 \u03c9\u03c2 \u03b3\u03c1\u03b1\u03bc\u03bc\u03ae"});