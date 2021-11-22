// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/el/GenerateTessellations",{chooseShape:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03c3\u03c7\u03ae\u03bc\u03b1\u03c4\u03bf\u03c2",defineExtent:"\u039a\u03b1\u03b8\u03bf\u03c1\u03b9\u03c3\u03bc\u03cc\u03c2 \u03ad\u03ba\u03c4\u03b1\u03c3\u03b7\u03c2",defineBin:"\u039a\u03b1\u03b8\u03bf\u03c1\u03af\u03c3\u03c4\u03b5 \u03c4\u03bf \u03bc\u03ad\u03b3\u03b5\u03b8\u03bf\u03c2 bin \u03c0\u03c1\u03bf\u03c3\u03b4\u03b9\u03bf\u03c1\u03af\u03b6\u03bf\u03bd\u03c4\u03b1\u03c2",
area:"\u03a0\u03b5\u03c1\u03b9\u03bf\u03c7\u03ae",distance:"\u0391\u03c0\u03cc\u03c3\u03c4\u03b1\u03c3\u03b7",resultLayerName:"\u038c\u03bd\u03bf\u03bc\u03b1 \u03b5\u03be\u03b1\u03b3\u03cc\u03bc\u03b5\u03bd\u03bf\u03c5 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03bf\u03c5",hexagon:"\u0395\u03be\u03ac\u03b3\u03c9\u03bd\u03bf",transverseHexagon:"\u0395\u03b3\u03ba\u03ac\u03c1\u03c3\u03b9\u03bf \u03b5\u03be\u03ac\u03b3\u03c9\u03bd\u03bf",square:"\u03a4\u03b5\u03c4\u03c1\u03ac\u03b3\u03c9\u03bd\u03bf",
triangle:"\u03a4\u03c1\u03af\u03b3\u03c9\u03bd\u03bf",diamond:"\u03a1\u03cc\u03bc\u03b2\u03bf",sameAsDisplay:"\u038a\u03b4\u03b9\u03bf \u03bc\u03b5 \u03c4\u03b7\u03bd \u03b5\u03bc\u03c6\u03ac\u03bd\u03b9\u03c3\u03b7",emptyBinSize:"\u03a4\u03bf \u03c0\u03b5\u03b4\u03af\u03bf \u03b3\u03b9\u03b1 \u03c4\u03bf \u03bc\u03ad\u03b3\u03b5\u03b8\u03bf\u03c2 bin \u03b4\u03b5\u03bd \u03bc\u03c0\u03bf\u03c1\u03b5\u03af \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03ba\u03b5\u03bd\u03cc.",currentExtent:"\u03c4\u03c1\u03ad\u03c7\u03bf\u03c5\u03c3\u03b1 \u03ad\u03ba\u03c4\u03b1\u03c3\u03b7",
intersectExtent:"\u0394\u03b9\u03b1\u03c4\u03ae\u03c1\u03b7\u03c3\u03b7 \u03bc\u03cc\u03bd\u03bf \u03c4\u03b5\u03bc\u03bd\u03cc\u03bc\u03b5\u03bd\u03c9\u03bd \u03ba\u03b1\u03c4\u03b1\u03c4\u03bc\u03ae\u03c3\u03b5\u03c9\u03bd",outputLayerName:"\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03ba\u03b1\u03c4\u03b1\u03c4\u03bc\u03ae\u03c3\u03b5\u03c9\u03bd \u03c3\u03c4\u03bf \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf ${extentLayerName}",
itemDescription:"\u03a7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03b8\u03b7\u03ba\u03b5 \u03b7 \u03ad\u03ba\u03c4\u03b1\u03c3\u03b7 \u03b1\u03c0\u03cc \u03c4\u03bf \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf ${extentLayerName}.",itemTags:"\u0391\u03c0\u03bf\u03c4\u03ad\u03bb\u03b5\u03c3\u03bc\u03b1 \u03b1\u03bd\u03ac\u03bb\u03c5\u03c3\u03b7\u03c2, \u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u039a\u03b1\u03c4\u03b1\u03c4\u03bc\u03ae\u03c3\u03b5\u03c9\u03bd, ${extentLayerName}",
itemSnippet:"Feature layer \u03c0\u03bf\u03c5 \u03b8\u03b1 \u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03b5\u03af\u03c4\u03b1\u03b9 \u03b1\u03c0\u03cc \u03c4\u03bf \u03b5\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03bf \u00ab\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u039a\u03b1\u03c4\u03b1\u03c4\u03bc\u03ae\u03c3\u03b5\u03c9\u03bd\u00bb."});