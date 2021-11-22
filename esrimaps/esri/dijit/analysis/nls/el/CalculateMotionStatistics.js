// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/el/CalculateMotionStatistics",{inputLayer:"\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03c4\u03bf \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf \u03b3\u03b9\u03b1 \u03c4\u03bf \u03bf\u03c0\u03bf\u03af\u03bf \u03b8\u03b1 \u03c5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03c4\u03bf\u03cd\u03bd \u03c4\u03b1 \u03c3\u03c4\u03b1\u03c4\u03b9\u03c3\u03c4\u03b9\u03ba\u03ac",trackField:"\u0394\u03b9\u03b1\u03bb\u03ad\u03be\u03c4\u03b5 \u03ad\u03bd\u03b1 \u03ae \u03c0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b1 \u03c0\u03b5\u03b4\u03af\u03b1 \u03b3\u03b9\u03b1 \u03c4\u03b7\u03bd \u03b1\u03bd\u03b1\u03b3\u03bd\u03ce\u03c1\u03b9\u03c3\u03b7 \u03b9\u03c7\u03bd\u03ce\u03bd",
trackHistoryWindow:"\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03c4\u03bf\u03bd \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc \u03c3\u03b7\u03bc\u03b5\u03af\u03c9\u03bd \u03c0\u03c1\u03bf\u03c2 \u03c7\u03c1\u03ae\u03c3\u03b7 \u03ba\u03b1\u03c4\u03ac \u03c4\u03bf\u03c5\u03c2 \u03c5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03bc\u03bf\u03cd\u03c2",distanceMethodLabel:"\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03c4\u03b7 \u03bc\u03ad\u03b8\u03bf\u03b4\u03bf \u03b1\u03c0\u03cc\u03c3\u03c4\u03b1\u03c3\u03b7\u03c2 \u03c0\u03c1\u03bf\u03c2 \u03c7\u03c1\u03ae\u03c3\u03b7 \u03ba\u03b1\u03c4\u03ac \u03c4\u03bf\u03c5\u03c2 \u03c5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03bc\u03bf\u03cd\u03c2",
idleToleranceLabel:"\u039a\u03b1\u03b8\u03bf\u03c1\u03af\u03c3\u03c4\u03b5 \u03c4\u03b1 \u03ba\u03c1\u03b9\u03c4\u03ae\u03c1\u03b9\u03b1 \u03b1\u03b4\u03c1\u03ac\u03bd\u03b5\u03b9\u03b1\u03c2 (\u03c0\u03c1\u03bf\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03cc)",chooseMotionStatsLabel:"\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03ad\u03bd\u03b1 \u03ae \u03c0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b1 \u03c3\u03c4\u03b1\u03c4\u03b9\u03c3\u03c4\u03b9\u03ba\u03ac \u03ba\u03af\u03bd\u03b7\u03c3\u03b7\u03c2",
distance:"\u0391\u03c0\u03cc\u03c3\u03c4\u03b1\u03c3\u03b7",speed:"\u03a4\u03b1\u03c7\u03cd\u03c4\u03b7\u03c4\u03b1",acceleration:"\u0395\u03c0\u03b9\u03c4\u03ac\u03c7\u03c5\u03bd\u03c3\u03b7",duration:"\u0394\u03b9\u03ac\u03c1\u03ba\u03b5\u03b9\u03b1",elevation:"\u03a5\u03c8\u03cc\u03bc\u03b5\u03c4\u03c1\u03bf",slope:"\u039a\u03bb\u03af\u03c3\u03b7",idle:"\u0391\u03b4\u03c1\u03ac\u03bd\u03b5\u03b9\u03b1",bearing:"\u0391\u03bd\u03c4\u03b9\u03c3\u03c4\u03bf\u03b9\u03c7\u03af\u03b1",selectAll:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03cc\u03bb\u03c9\u03bd",
deselectAll:"\u0391\u03c0\u03bf\u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03cc\u03bb\u03c9\u03bd",trackSplitting:"\u0394\u03b9\u03b1\u03c7\u03c9\u03c1\u03b9\u03c3\u03bc\u03cc\u03c2 \u03b4\u03b9\u03b1\u03b4\u03c1\u03bf\u03bc\u03ce\u03bd",optionsLabel:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2",metersPerSecond:"\u039c\u03ad\u03c4\u03c1\u03b1 \u03b1\u03bd\u03ac \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1",kilometersPerHour:"\u03a7\u03b9\u03bb\u03b9\u03cc\u03bc\u03b5\u03c4\u03c1\u03b1 \u03b1\u03bd\u03ac \u03ce\u03c1\u03b1",
feetPerSecond:"\u03a0\u03cc\u03b4\u03b9\u03b1 \u03b1\u03bd\u03ac \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03bf",milesPerHour:"\u039c\u03af\u03bb\u03b9\u03b1 \u03b1\u03bd\u03ac \u03ce\u03c1\u03b1",nauticalMilesPerHour:"\u039d\u03b1\u03c5\u03c4\u03b9\u03ba\u03ac \u03bc\u03af\u03bb\u03b9\u03b1 \u03b1\u03bd\u03ac \u03ce\u03c1\u03b1",metersPerSecondSquared:"Meters per second squared",feetPerSecondSquared:"\u03a0\u03cc\u03b4\u03b9\u03b1 \u03b1\u03bd\u03ac \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03bf",
itemDescription:"Feature layer \u03b1\u03c0\u03cc \u03b5\u03ba\u03c4\u03ad\u03bb\u03b5\u03c3\u03b7 \u03c4\u03bf\u03c5 \u03b5\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03bf\u03c5 \u03a5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03bc\u03bf\u03cd \u03a3\u03c4\u03b1\u03c4\u03b9\u03c3\u03c4\u03b9\u03ba\u03ce\u03bd \u039a\u03af\u03bd\u03b7\u03c3\u03b7\u03c2 \u03b3\u03b9\u03b1 ${inputLayername}.",itemTags:"\u0391\u03c0\u03bf\u03c4\u03ad\u03bb\u03b5\u03c3\u03bc\u03b1 \u0391\u03bd\u03ac\u03bb\u03c5\u03c3\u03b7\u03c2, \u03a5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03bc\u03cc\u03c2 \u03a3\u03c4\u03b1\u03c4\u03b9\u03c3\u03c4\u03b9\u03ba\u03ce\u03bd \u039a\u03af\u03bd\u03b7\u03c3\u03b7\u03c2${inputLayername}",
itemSnippet:"\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03ae\u03b8\u03b7\u03ba\u03b5 \u0395\u03c0\u03af\u03c0\u03b5\u03b4\u03bf \u03b1\u03c0\u03cc \u03a3\u03c4\u03b1\u03c4\u03b9\u03c3\u03c4\u03b9\u03ba\u03ac \u03a5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03bc\u03bf\u03cd \u039a\u03af\u03bd\u03b7\u03c3\u03b7\u03c2 ",outputLayerName:"\u03a5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03bc\u03cc\u03c2 \u03a3\u03c4\u03b1\u03c4\u03b9\u03c3\u03c4\u03b9\u03ba\u03ce\u03bd \u039a\u03af\u03bd\u03b7\u03c3\u03b7\u03c2 \u03b3\u03b9\u03b1${inputLayername}",
splitTracksLabel:"\u0394\u03b9\u03b1\u03c7\u03c9\u03c1\u03b9\u03c3\u03bc\u03cc\u03c2 \u03b9\u03c7\u03bd\u03ce\u03bd (\u03c0\u03c1\u03bf\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03ac)",timeSplit:"\u0392\u03ac\u03c3\u03b5\u03b9 \u03c7\u03c1\u03cc\u03bd\u03bf\u03c5 \u03bc\u03b5\u03c4\u03b1\u03be\u03cd \u03b5\u03b9\u03c3\u03cc\u03b4\u03c9\u03bd",timeIntervalSplit:"\u03a3\u03b5 \u03ba\u03b1\u03b8\u03bf\u03c1\u03b9\u03c3\u03bc\u03ad\u03bd\u03b1 \u03c7\u03c1\u03bf\u03bd\u03b9\u03ba\u03ac \u03b4\u03b9\u03b1\u03c3\u03c4\u03ae\u03bc\u03b1\u03c4\u03b1"});