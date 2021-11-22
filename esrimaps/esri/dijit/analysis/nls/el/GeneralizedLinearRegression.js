// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/el/GeneralizedLinearRegression",{modifiedTitle:"\u0393\u03b5\u03bd\u03b9\u03ba\u03b5\u03c5\u03bc\u03ad\u03bd\u03b7 \u03b3\u03c1\u03b1\u03bc\u03bc\u03b9\u03ba\u03ae \u03c0\u03b1\u03bb\u03b9\u03bd\u03b4\u03c1\u03cc\u03bc\u03b7\u03c3\u03b7 - ${goal}",fit:"\u03a0\u03c1\u03bf\u03c3\u03b1\u03c1\u03bc\u03bf\u03b3\u03ae",fitAndPredict:"\u03a0\u03c1\u03bf\u03c3\u03b1\u03c1\u03bc\u03bf\u03b3\u03ae \u03ba\u03b1\u03b9 \u03c0\u03c1\u03cc\u03b2\u03bb\u03b5\u03c8\u03b7",selectGoal:"\u03a4\u03b9 \u03b8\u03b1 \u03b8\u03ad\u03bb\u03b1\u03c4\u03b5 \u03bd\u03b1 \u03ba\u03ac\u03bd\u03b5\u03c4\u03b5;",
fitGoal:"\u03a0\u03c1\u03bf\u03c3\u03b1\u03c1\u03bc\u03bf\u03b3\u03ae \u03b5\u03bd\u03cc\u03c2 \u03bc\u03bf\u03bd\u03c4\u03ad\u03bb\u03bf\u03c5 \u03b3\u03b9\u03b1 \u03b1\u03be\u03b9\u03bf\u03bb\u03cc\u03b3\u03b7\u03c3\u03b7 \u03b5\u03c0\u03b9\u03b4\u03cc\u03c3\u03b5\u03c9\u03bd \u03bc\u03bf\u03bd\u03c4\u03ad\u03bb\u03c9\u03bd",fitAndPredictGoal:"\u03a0\u03c1\u03bf\u03c3\u03b1\u03c1\u03bc\u03bf\u03b3\u03ae \u03b5\u03bd\u03cc\u03c2 \u03bc\u03bf\u03bd\u03c4\u03ad\u03bb\u03bf\u03c5 \u03ba\u03b1\u03b9 \u03c0\u03c1\u03cc\u03b2\u03bb\u03b5\u03c8\u03b7 \u03c4\u03b9\u03bc\u03ce\u03bd",
inputLayerLabel:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03b5\u03bd\u03cc\u03c2 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03bf\u03c5 \u03b1\u03c0\u03cc \u03c4\u03bf \u03bf\u03c0\u03bf\u03af\u03bf \u03b8\u03b1 \u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03b7\u03b8\u03b5\u03af \u03bc\u03bf\u03bd\u03c4\u03ad\u03bb\u03bf",chooseDependentField:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03c4\u03bf\u03c5 \u03c0\u03b5\u03b4\u03af\u03bf\u03c5 \u03c0\u03c1\u03bf\u03c2 \u03bc\u03bf\u03bd\u03c4\u03b5\u03bb\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7",
chooseDataType:"\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03c4\u03bf\u03bd \u03c4\u03cd\u03c0\u03bf \u03c4\u03c9\u03bd \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd \u03c4\u03b1 \u03bf\u03c0\u03bf\u03af\u03b1 \u03bc\u03bf\u03bd\u03c4\u03b5\u03bb\u03bf\u03c0\u03bf\u03b9\u03b5\u03af\u03c4\u03b5.",continuousData:"\u03a3\u03c5\u03bd\u03b5\u03c7\u03ae\u03c2",binaryData:"\u0394\u03c5\u03b1\u03b4\u03b9\u03ba\u03cc\u03c2",countData:"\u0391\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2",chooseExplanatoryField:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03c4\u03c9\u03bd \u03b5\u03c0\u03b5\u03be\u03b7\u03b3\u03b7\u03bc\u03b1\u03c4\u03b9\u03ba\u03ce\u03bd \u03c0\u03b5\u03b4\u03af\u03c9\u03bd",
chooseFeaturesToPredict:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03b5\u03bd\u03cc\u03c2 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03bf\u03c5 \u03b3\u03b9\u03b1 \u03c0\u03c1\u03cc\u03b2\u03bb\u03b5\u03c8\u03b7 \u03c4\u03c9\u03bd \u03c4\u03b9\u03bc\u03ce\u03bd \u03c4\u03bf\u03c5",chooseExplainMatch:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03c4\u03c1\u03cc\u03c0\u03bf\u03c5 \u03b1\u03bd\u03c4\u03b9\u03c3\u03c4\u03bf\u03af\u03c7\u03b9\u03c3\u03b7\u03c2 \u03b5\u03c0\u03b5\u03be\u03b7\u03b3\u03b7\u03bc\u03b1\u03c4\u03b9\u03ba\u03ce\u03bd \u03c0\u03b5\u03b4\u03af\u03c9\u03bd",
outputLayerName:"GLR ${inputLayerName}",itemDescription:"Feature layer \u03c0\u03bf\u03c5 \u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03b5\u03af\u03c4\u03b1\u03b9 \u03b1\u03c0\u03cc \u03c4\u03b7\u03bd \u03b5\u03ba\u03c4\u03ad\u03bb\u03b5\u03c3\u03b7 \u03c4\u03c9\u03bd \u03bb\u03cd\u03c3\u03b5\u03c9\u03bd \u00ab\u0393\u03b5\u03bd\u03b9\u03ba\u03b5\u03c5\u03bc\u03ad\u03bd\u03b7 \u03b3\u03c1\u03b1\u03bc\u03bc\u03b9\u03ba\u03ae \u03c0\u03b1\u03bb\u03b9\u03bd\u03b4\u03c1\u03cc\u03bc\u03b7\u03c3\u03b7 ${goal}\u00bb.",
itemTags:"\u0391\u03c0\u03bf\u03c4\u03ad\u03bb\u03b5\u03c3\u03bc\u03b1 \u03b1\u03bd\u03ac\u03bb\u03c5\u03c3\u03b7\u03c2, \u0393\u03b5\u03bd\u03b9\u03ba\u03b5\u03c5\u03bc\u03ad\u03bd\u03b7 \u03b3\u03c1\u03b1\u03bc\u03bc\u03b9\u03ba\u03ae \u03c0\u03b1\u03bb\u03b9\u03bd\u03b4\u03c1\u03cc\u03bc\u03b7\u03c3\u03b7, ${inputLayerName}, ${goal}",itemSnippet:"Feature layer \u03c0\u03bf\u03c5 \u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03b5\u03af\u03c4\u03b1\u03b9 \u03b1\u03c0\u03cc \u03c4\u03b7 \u0393\u03b5\u03bd\u03b9\u03ba\u03b5\u03c5\u03bc\u03ad\u03bd\u03b7 \u03b3\u03c1\u03b1\u03bc\u03bc\u03b9\u03ba\u03ae \u03c0\u03b1\u03bb\u03b9\u03bd\u03b4\u03c1\u03cc\u03bc\u03b7\u03c3\u03b7 ${goal}"});