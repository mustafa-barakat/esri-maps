// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/he/GenerateMultidimensionalAnomaly",{toolDefine:"\u05d4\u05e4\u05e7 \u05d0\u05e0\u05d5\u05de\u05dc\u05d9\u05d4 \u05e8\u05d1-\u05de\u05de\u05d3\u05d9\u05ea",outputLayerName:"${layername}_anomaly",variablesLabel:"\u05d1\u05d7\u05e8 \u05d0\u05ea \u05d4\u05de\u05e9\u05ea\u05e0\u05d4/\u05d9\u05dd \u05e9\u05e2\u05d1\u05d5\u05e8\u05d5/\u05dd \u05d9\u05d5\u05e4\u05e7\u05d5 \u05d0\u05e0\u05d5\u05de\u05dc\u05d9\u05d5\u05ea",variablesListLabel:"\u05de\u05e9\u05ea\u05e0\u05d9\u05dd [Dimension Info] (\u05ea\u05d9\u05d0\u05d5\u05e8)",
methodLabel:"\u05d1\u05d7\u05e8 \u05e9\u05d9\u05d8\u05d4 \u05dc\u05d4\u05e4\u05e7\u05ea \u05d0\u05e0\u05d5\u05de\u05dc\u05d9\u05d4",calculationIntervalLabel:"\u05d1\u05d7\u05e8 \u05de\u05e8\u05d5\u05d5\u05d7 \u05d6\u05de\u05df \u05dc\u05d7\u05d9\u05e9\u05d5\u05d1 \u05d4\u05de\u05de\u05d5\u05e6\u05e2",differenceFromMean:"\u05d4\u05e4\u05e8\u05e9 \u05de\u05d4\u05de\u05de\u05d5\u05e6\u05e2",percentDifferenceFromMean:"\u05d4\u05e4\u05e8\u05e9 \u05d1\u05d0\u05d7\u05d5\u05d6\u05d9\u05dd \u05de\u05d4\u05de\u05de\u05d5\u05e6\u05e2",
percentOfMean:"\u05d0\u05d7\u05d5\u05d6 \u05d4\u05de\u05de\u05d5\u05e6\u05e2",zScore:"Z Score",differenceFromMedian:"\u05d4\u05e4\u05e8\u05e9 \u05de\u05d4\u05d7\u05e6\u05d9\u05d5\u05df",percentDifferenceFromMedian:"\u05d4\u05e4\u05e8\u05e9 \u05d1\u05d0\u05d7\u05d5\u05d6\u05d9\u05dd \u05de\u05d4\u05d7\u05e6\u05d9\u05d5\u05df",percentOfMedian:"\u05d0\u05d7\u05d5\u05d6 \u05d4\u05d7\u05e6\u05d9\u05d5\u05df",all:"\u05d4\u05db\u05dc",yearly:"\u05e9\u05e0\u05ea\u05d9",recurringMonthly:"\u05d7\u05d5\u05d6\u05e8 \u05db\u05dc \u05d7\u05d5\u05d3\u05e9",
recurringWeekly:"\u05d7\u05d5\u05d6\u05e8 \u05db\u05dc \u05e9\u05d1\u05d5\u05e2",recurringDaily:"\u05d7\u05d5\u05d6\u05e8 \u05db\u05dc \u05d9\u05d5\u05dd",hourly:"\u05e9\u05e2\u05ea\u05d9",externalRaster:"\u05e8\u05e1\u05d8\u05e8 \u05d7\u05d9\u05e6\u05d5\u05e0\u05d9",meanRaster:"\u05d1\u05d7\u05e8 \u05e9\u05db\u05d1\u05ea \u05ea\u05de\u05d5\u05e0\u05d4 \u05e9\u05dc \u05de\u05de\u05d5\u05e6\u05e2 \u05db\u05d9\u05d9\u05d7\u05d5\u05e1",ignoreNodataLabel:"\u05d4\u05ea\u05e2\u05dc\u05dd \u05de\u05e2\u05e8\u05db\u05d9\u05dd \u05d7\u05e1\u05e8\u05d9\u05dd \u05d1\u05d7\u05d9\u05e9\u05d5\u05d1",
ignore:"\u05d4\u05ea\u05e2\u05dc\u05dd",analysisLayerLabel:"\u05d1\u05d7\u05e8 \u05e9\u05db\u05d1\u05ea \u05ea\u05de\u05d5\u05e0\u05d4 \u05e8\u05d1-\u05de\u05de\u05d3\u05d9\u05ea \u05dc\u05d4\u05e4\u05e7\u05ea \u05d0\u05e0\u05d5\u05de\u05dc\u05d9\u05d4",itemDescription:"\u05e0\u05d9\u05ea\u05d5\u05d7 \u05e9\u05d9\u05e8\u05d5\u05ea \u05ea\u05de\u05d5\u05e0\u05d5\u05ea \u05e0\u05d5\u05e6\u05e8 \u05de\u05ea\u05d5\u05da \u05d4\u05e4\u05e7 \u05d0\u05e0\u05d5\u05de\u05dc\u05d9\u05d4 \u05e8\u05d1-\u05de\u05de\u05d3\u05d9\u05ea",
itemTags:"\u05ea\u05d5\u05e6\u05d0\u05ea \u05e0\u05d9\u05ea\u05d5\u05d7 \u05e8\u05e1\u05d8\u05e8, \u05d4\u05e4\u05e7 \u05d0\u05e0\u05d5\u05de\u05dc\u05d9\u05d4 \u05e8\u05d1-\u05de\u05de\u05d3\u05d9\u05ea, ${layername}",itemSnippet:"\u05e0\u05d9\u05ea\u05d5\u05d7 \u05e9\u05d9\u05e8\u05d5\u05ea \u05ea\u05de\u05d5\u05e0\u05d5\u05ea \u05e0\u05d5\u05e6\u05e8 \u05de\u05ea\u05d5\u05da \u05d4\u05e4\u05e7 \u05d0\u05e0\u05d5\u05de\u05dc\u05d9\u05d4 \u05e8\u05d1-\u05de\u05de\u05d3\u05d9\u05ea"});