// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/el/DistanceAccumulation",{inputSourceRasterOrFeatures:"\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 raster \u03ae \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03b1 \u03c0\u03c1\u03bf\u03ad\u03bb\u03b5\u03c5\u03c3\u03b7\u03c2",outputDistanceAccumulationRasterName:"\u038c\u03bd\u03bf\u03bc\u03b1 raster \u03b1\u03b8\u03c1\u03bf\u03b9\u03c3\u03c4\u03b9\u03ba\u03ae\u03c2 \u03b1\u03c0\u03cc\u03c3\u03c4\u03b1\u03c3\u03b7\u03c2 \u03c0\u03bf\u03c5 \u03c0\u03c1\u03bf\u03ba\u03cd\u03c0\u03c4\u03b5\u03b9",
inputBarrierRasterOrFeatures:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae raster \u03ae \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03c9\u03bd \u03b5\u03bc\u03c0\u03bf\u03b4\u03af\u03c9\u03bd (\u03c0\u03c1\u03bf\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03cc)",inputSurfaceRaster:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae raster \u03b5\u03c0\u03b9\u03c6\u03ac\u03bd\u03b5\u03b9\u03b1\u03c2 (\u03c0\u03c1\u03bf\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03cc)",inputCostRaster:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae raster \u03ba\u03cc\u03c3\u03c4\u03bf\u03c5\u03c2 (\u03c0\u03c1\u03bf\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03cc)",
inputVerticalRaster:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03ba\u03ac\u03b8\u03b5\u03c4\u03bf\u03c5 raster (\u03c0\u03c1\u03bf\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03cc)",verticalFactor:"\u039a\u03b1\u03c4\u03b1\u03ba\u03cc\u03c1\u03c5\u03c6\u03bf\u03c2 \u03c0\u03b1\u03c1\u03ac\u03b3\u03bf\u03bd\u03c4\u03b1\u03c2 (\u03c0\u03c1\u03bf\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03cc)",inputHorizontalRaster:"\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03bf\u03c1\u03b9\u03b6\u03cc\u03bd\u03c4\u03b9\u03bf raster\u202f(\u03c0\u03c1\u03bf\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03cc)",
horizontalFactor:"\u039f\u03c1\u03b9\u03b6\u03cc\u03bd\u03c4\u03b9\u03bf\u03c2 \u03c0\u03b1\u03c1\u03ac\u03b3\u03bf\u03bd\u03c4\u03b1\u03c2 (\u03c0\u03c1\u03bf\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03cc)",outputLayerName:"\u0391\u03b8\u03c1\u03bf\u03b9\u03c3\u03c4\u03b9\u03ba\u03ae \u03b1\u03c0\u03cc\u03c3\u03c4\u03b1\u03c3\u03b7 ${layername}",outputBackDirectionRasterName:"\u038c\u03bd\u03bf\u03bc\u03b1 \u03b5\u03c0\u03b9\u03c3\u03c4\u03c1\u03b5\u03c6\u03cc\u03bc\u03b5\u03bd\u03bf\u03c5 raster \u03b1\u03c0\u03bf\u03c4\u03b5\u03bb\u03b5\u03c3\u03bc\u03ac\u03c4\u03c9\u03bd (\u03c0\u03c1\u03bf\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03cc)",
outputSourceDirectionRasterName:"\u038c\u03bd\u03bf\u03bc\u03b1 raster \u03ba\u03b1\u03c4\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7\u03c2 \u03c0\u03c1\u03bf\u03ad\u03bb\u03b5\u03c5\u03c3\u03b7\u03c2 \u03b1\u03c0\u03bf\u03c4\u03b5\u03bb\u03b5\u03c3\u03bc\u03ac\u03c4\u03c9\u03bd (\u03c0\u03c1\u03bf\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03cc)",outputSourceLocationRasterName:"\u038c\u03bd\u03bf\u03bc\u03b1 raster \u03c4\u03bf\u03c0\u03bf\u03b8\u03b5\u03c3\u03af\u03b1\u03c2 \u03c0\u03c1\u03bf\u03ad\u03bb\u03b5\u03c5\u03c3\u03b7\u03c2 \u03b1\u03c0\u03bf\u03c4\u03b5\u03bb\u03b5\u03c3\u03bc\u03ac\u03c4\u03c9\u03bd (\u03c0\u03c1\u03bf\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03cc)",
sourceInitialAccumulation:"\u0391\u03c1\u03c7\u03b9\u03ba\u03ae \u03c3\u03c5\u03c3\u03c3\u03ce\u03c1\u03b5\u03c5\u03c3\u03b7",sourceMaximumAccumulation:"\u039c\u03ad\u03b3\u03b9\u03c3\u03c4\u03b7 \u03c3\u03c5\u03c3\u03c3\u03ce\u03c1\u03b5\u03c5\u03c3\u03b7",sourceCostMultiplier:"\u03a0\u03bf\u03bb\u03bb\u03b1\u03c0\u03bb\u03b1\u03c3\u03b9\u03b1\u03c3\u03c4\u03ae\u03c2 \u03ba\u03cc\u03c3\u03c4\u03bf\u03c5\u03c2",sourceDirection:"\u039a\u03b1\u03c4\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 \u03bc\u03b5\u03c4\u03b1\u03ba\u03af\u03bd\u03b7\u03c3\u03b7\u03c2",
distanceMethod:"\u039c\u03ad\u03b8\u03bf\u03b4\u03bf\u03c2 \u03b1\u03c0\u03cc\u03c3\u03c4\u03b1\u03c3\u03b7\u03c2 (\u03c0\u03c1\u03bf\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03cc)",sourceCharacteristicOptions:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03c2 \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03b7\u03c1\u03b9\u03c3\u03c4\u03b9\u03ba\u03bf\u03cd \u03c0\u03c1\u03bf\u03ad\u03bb\u03b5\u03c5\u03c3\u03b7\u03c2",itemDescription:"Feature layer \u03c0\u03bf\u03c5 \u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03ae\u03b8\u03b7\u03ba\u03b5 \u03b1\u03c0\u03cc \u03c4\u03b7\u03bd \u03b5\u03ba\u03c4\u03ad\u03bb\u03b5\u03c3\u03b7 \u03c4\u03b7\u03c2 \u0386\u03b8\u03c1\u03bf\u03b9\u03c3\u03b7\u03c2 \u03b1\u03c0\u03cc\u03c3\u03c4\u03b1\u03c3\u03b7\u03c2 \u03c3\u03c4\u03bf ${layername}. ",
itemTags:"\u0391\u03c0\u03bf\u03c4\u03ad\u03bb\u03b5\u03c3\u03bc\u03b1 \u03b1\u03bd\u03ac\u03bb\u03c5\u03c3\u03b7\u03c2, \u0386\u03b8\u03c1\u03bf\u03b9\u03c3\u03b7 \u03b1\u03c0\u03cc\u03c3\u03c4\u03b1\u03c3\u03b7\u03c2, ${layername} ${fieldname}",itemSnippet:"Feature layer \u03c0\u03bf\u03c5 \u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03ae\u03b8\u03b7\u03ba\u03b5 \u03b1\u03c0\u03cc \u03c4\u03b7\u03bd \u0386\u03b8\u03c1\u03bf\u03b9\u03c3\u03b7 \u03b1\u03c0\u03cc\u03c3\u03c4\u03b1\u03c3\u03b7\u03c2.",
invalidNumber:"\u0395\u03b9\u03c3\u03b1\u03b3\u03ac\u03b3\u03b5\u03c4\u03b5 \u03ad\u03b3\u03ba\u03c5\u03c1\u03bf \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc.",or:"\u03ae",toSource:"\u03a0\u03c1\u03bf\u03c2 \u03c0\u03b7\u03b3\u03ae",fromSource:"\u0391\u03c0\u03cc \u03c0\u03b7\u03b3\u03ae",planar:"\u039c\u03b5\u03c4\u03c1\u03b9\u03ba\u03cc",geoDesic:"\u0393\u03b5\u03c9\u03b4\u03b1\u03b9\u03c4\u03b9\u03ba\u03cc",uniqueId:"\u039c\u03bf\u03bd\u03b1\u03b4\u03b9\u03ba\u03cc ID",binary:"\u0394\u03c5\u03b1\u03b4\u03b9\u03ba\u03cc\u03c2",
linear:"\u0393\u03c1\u03b1\u03bc\u03bc\u03b9\u03ba\u03ae",inverseLinear:"\u0391\u03bd\u03c4\u03af\u03c3\u03c4\u03c1\u03bf\u03c6\u03b7 \u03b3\u03c1\u03b1\u03bc\u03bc\u03b9\u03ba\u03ae",forward:"\u03a0\u03c1\u03bf\u03ce\u03b8\u03b7\u03c3\u03b7",symmetricLinear:"\u03a3\u03c5\u03bc\u03bc\u03b5\u03c4\u03c1\u03b9\u03ba\u03ae \u03b3\u03c1\u03b1\u03bc\u03bc\u03b9\u03ba\u03ae",symmetricInverseLinear:"\u03a3\u03c5\u03bc\u03bc\u03b5\u03c4\u03c1\u03b9\u03ba\u03ae \u03b1\u03bd\u03c4\u03af\u03c3\u03c4\u03c1\u03bf\u03c6\u03b7 \u03b3\u03c1\u03b1\u03bc\u03bc\u03b9\u03ba\u03ae",
cos:"Cos",sec:"Sec",cosSec:"Cos \u00e2\u20ac\u201c Sec",secCos:"Sec \u00e2\u20ac\u201c Cos",zeroFactor:"\u039c\u03b7\u03b4\u03b5\u03bd\u03b9\u03ba\u03cc\u03c2 \u03c0\u03b1\u03c1\u03ac\u03b3\u03bf\u03bd\u03c4\u03b1\u03c2",lowCutAngle:"\u039a\u03b1\u03c4\u03ce\u03c4\u03b5\u03c1\u03bf \u03cc\u03c1\u03b9\u03bf \u03b3\u03c9\u03bd\u03af\u03b1\u03c2 \u03b1\u03c0\u03bf\u03ba\u03bf\u03c0\u03ae\u03c2",highCutAngle:"\u0391\u03bd\u03ce\u03c4\u03b5\u03c1\u03bf \u03cc\u03c1\u03b9\u03bf \u03b3\u03c9\u03bd\u03af\u03b1\u03c2 \u03b1\u03c0\u03bf\u03ba\u03bf\u03c0\u03ae\u03c2",
cutAngle:"\u0393\u03c9\u03bd\u03af\u03b1 \u03b1\u03c0\u03bf\u03ba\u03bf\u03c0\u03ae\u03c2",slope:"\u039a\u03bb\u03af\u03c3\u03b7",power:"\u0399\u03c3\u03c7\u03cd\u03c2",cosPower:"Cos power",secPower:"Sec power",sideValue:"\u03a0\u03bb\u03b5\u03c5\u03c1\u03b9\u03ba\u03ae \u03c4\u03b9\u03bc\u03ae",selectField:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03c0\u03b5\u03b4\u03af\u03bf\u03c5"});