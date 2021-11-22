// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/th/ForestBasedClassificationAndRegression",{modifiedTitle:"\u0e15\u0e32\u0e21\u0e01\u0e32\u0e23\u0e16\u0e14\u0e16\u0e2d\u0e22\u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e08\u0e33\u0e41\u0e19\u0e01\u0e1b\u0e48\u0e32\u0e44\u0e21\u0e49 - ${goal}",train:"\u0e23\u0e16\u0e44\u0e1f",trainAndPredict:"\u0e1d\u0e36\u0e01\u0e41\u0e25\u0e30\u0e17\u0e33\u0e19\u0e32\u0e22",selectGoal:"\u0e04\u0e38\u0e13\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e17\u0e33\u0e2d\u0e30\u0e44\u0e23",trainGoal:"\u0e1d\u0e36\u0e01\u0e42\u0e21\u0e40\u0e14\u0e25\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19\u0e1b\u0e23\u0e30\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e20\u0e32\u0e1e\u0e02\u0e2d\u0e07\u0e42\u0e21\u0e40\u0e14\u0e25",
trainAndPredictGoal:"\u0e1d\u0e36\u0e01\u0e42\u0e21\u0e40\u0e14\u0e25\u0e41\u0e25\u0e30\u0e17\u0e33\u0e19\u0e32\u0e22\u0e04\u0e48\u0e32",inFeaturesLabel:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e0a\u0e31\u0e49\u0e19\u0e01\u0e32\u0e23\u0e1d\u0e36\u0e01",variablePredictLabel:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e17\u0e33\u0e19\u0e32\u0e22",categorical:"\u0e08\u0e31\u0e14\u0e01\u0e25\u0e38\u0e48\u0e21",chooseExplanatoryField:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e19\u0e49\u0e2d\u0e22\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e1f\u0e34\u0e25\u0e14\u0e4c",
chooseFeaturesToPredict:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e0a\u0e31\u0e49\u0e19\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e17\u0e33\u0e19\u0e32\u0e22\u0e04\u0e48\u0e32",chooseExplainMatch:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e27\u0e48\u0e32\u0e08\u0e30\u0e08\u0e31\u0e1a\u0e04\u0e39\u0e48\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23",options:"\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01",advancedForestOptions:"\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e1b\u0e48\u0e32\u0e44\u0e21\u0e49\u0e02\u0e31\u0e49\u0e19\u0e2a\u0e39\u0e07",
numberOfTrees:"\u0e08\u0e33\u0e19\u0e27\u0e19\u0e15\u0e49\u0e19\u0e44\u0e21\u0e49",minimumLeafSize:"\u0e02\u0e19\u0e32\u0e14\u0e43\u0e1a\u0e44\u0e21\u0e49\u0e15\u0e48\u0e33\u0e2a\u0e38\u0e14",maximumTreeDepth:"\u0e04\u0e27\u0e32\u0e21\u0e25\u0e36\u0e01\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14\u0e02\u0e2d\u0e07\u0e15\u0e49\u0e19\u0e44\u0e21\u0e49",sampleSize:"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e35\u0e48\u0e21\u0e35\u0e15\u0e48\u0e2d\u0e15\u0e49\u0e19\u0e44\u0e21\u0e49 (%)",randomVariables:"\u0e08\u0e33\u0e19\u0e27\u0e19\u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e2a\u0e38\u0e48\u0e21\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",
variableConstraintMsg:"\u0e15\u0e49\u0e2d\u0e07\u0e2d\u0e22\u0e39\u0e48\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07 1 \u0e41\u0e25\u0e30\u0e08\u0e33\u0e19\u0e27\u0e19\u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e41\u0e1b\u0e23\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",validationOptions:"\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e01\u0e32\u0e23\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a",percentageForValidation:"\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e01\u0e32\u0e23\u0e1d\u0e36\u0e01\u0e2d\u0e1a\u0e23\u0e21\u0e44\u0e21\u0e48\u0e23\u0e27\u0e21\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a (%)",
outputLayerName:"FBCR ${inFeaturesName}",itemDescription:"\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c\u0e17\u0e35\u0e48\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e02\u0e36\u0e49\u0e19\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e23\u0e31\u0e19\u0e42\u0e0b\u0e25\u0e39\u0e0a\u0e31\u0e19\u0e15\u0e32\u0e21\u0e01\u0e32\u0e23\u0e16\u0e14\u0e16\u0e2d\u0e22\u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e08\u0e33\u0e41\u0e19\u0e01\u0e1b\u0e48\u0e32\u0e44\u0e21\u0e49 ${goal}",
itemTags:"\u0e1c\u0e25\u0e01\u0e32\u0e23\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c\u0e15\u0e32\u0e21\u0e01\u0e32\u0e23\u0e16\u0e14\u0e16\u0e2d\u0e22\u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e08\u0e33\u0e41\u0e19\u0e01\u0e1b\u0e48\u0e32\u0e44\u0e21\u0e49, ${inFeaturesName}, ${goal}",itemSnippet:"\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c\u0e17\u0e35\u0e48\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e02\u0e36\u0e49\u0e19\u0e08\u0e32\u0e01\u0e15\u0e32\u0e21\u0e01\u0e32\u0e23\u0e16\u0e14\u0e16\u0e2d\u0e22\u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e08\u0e33\u0e41\u0e19\u0e01\u0e1b\u0e48\u0e32\u0e44\u0e21\u0e49 (${goal})"});