// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/th/DistanceAllocation",{inputSourceRasterOrFeatures:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e0b\u0e2d\u0e23\u0e4c\u0e2a\u0e41\u0e23\u0e2a\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e2b\u0e23\u0e37\u0e2d\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c",sourceField:"\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e0b\u0e2d\u0e23\u0e4c\u0e2a (\u0e17\u0e32\u0e07\u0e40\u0e25\u0e37\u0e2d\u0e01)",outputDistanceAllocationRasterName:"\u0e0a\u0e37\u0e48\u0e2d\u0e41\u0e23\u0e2a\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e2a\u0e23\u0e23\u0e23\u0e30\u0e22\u0e30\u0e17\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c",
inputBarrierRasterOrFeatures:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e41\u0e23\u0e2a\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e2b\u0e23\u0e37\u0e2d\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c\u0e2d\u0e38\u0e1b\u0e2a\u0e23\u0e23\u0e04 (\u0e17\u0e32\u0e07\u0e40\u0e25\u0e37\u0e2d\u0e01)",inputSurfaceRaster:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e41\u0e23\u0e2a\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e1e\u0e37\u0e49\u0e19\u0e1c\u0e34\u0e27 (\u0e17\u0e32\u0e07\u0e40\u0e25\u0e37\u0e2d\u0e01)",inputCostRaster:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e41\u0e23\u0e2a\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e15\u0e49\u0e19\u0e17\u0e38\u0e19 (\u0e17\u0e32\u0e07\u0e40\u0e25\u0e37\u0e2d\u0e01)",
inputVerticalRaster:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e41\u0e23\u0e2a\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e41\u0e19\u0e27\u0e15\u0e31\u0e49\u0e07 (\u0e17\u0e32\u0e07\u0e40\u0e25\u0e37\u0e2d\u0e01)",verticalFactor:"\u0e41\u0e1f\u0e01\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e41\u0e19\u0e27\u0e15\u0e31\u0e49\u0e07 (\u0e17\u0e32\u0e07\u0e40\u0e25\u0e37\u0e2d\u0e01)",inputHorizontalRaster:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e41\u0e23\u0e2a\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e41\u0e19\u0e27\u0e19\u0e2d\u0e19 (\u0e17\u0e32\u0e07\u0e40\u0e25\u0e37\u0e2d\u0e01)",
horizontalFactor:"\u0e41\u0e1f\u0e01\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e41\u0e19\u0e27\u0e19\u0e2d\u0e19 (\u0e17\u0e32\u0e07\u0e40\u0e25\u0e37\u0e2d\u0e01)",outputLayerName:"\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e2a\u0e23\u0e23\u0e23\u0e30\u0e22\u0e30\u0e17\u0e32\u0e07\u0e02\u0e2d\u0e07 ${layername}",outputDistanceAccumulationRasterName:"\u0e0a\u0e37\u0e48\u0e2d\u0e41\u0e23\u0e2a\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e01\u0e32\u0e23\u0e2a\u0e30\u0e2a\u0e21\u0e23\u0e30\u0e22\u0e30\u0e17\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c (\u0e17\u0e32\u0e07\u0e40\u0e25\u0e37\u0e2d\u0e01)",
outputBackDirectionRasterName:"\u0e0a\u0e37\u0e48\u0e2d\u0e41\u0e23\u0e2a\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e17\u0e34\u0e28\u0e17\u0e32\u0e07\u0e22\u0e49\u0e2d\u0e19\u0e01\u0e25\u0e31\u0e1a\u0e02\u0e2d\u0e07\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c (\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01)",outputSourceDirectionRasterName:"\u0e0a\u0e37\u0e48\u0e2d\u0e41\u0e23\u0e2a\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e17\u0e34\u0e28\u0e17\u0e32\u0e07\u0e0b\u0e2d\u0e23\u0e4c\u0e2a\u0e02\u0e2d\u0e07\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c (\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01)",
outputSourceLocationRasterName:"\u0e0a\u0e37\u0e48\u0e2d\u0e41\u0e23\u0e2a\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e0b\u0e2d\u0e23\u0e4c\u0e2a\u0e02\u0e2d\u0e07\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c (\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01)",sourceInitialAccumulation:"\u0e01\u0e32\u0e23\u0e2a\u0e30\u0e2a\u0e21\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19",sourceMaximumAccumulation:"\u0e01\u0e32\u0e23\u0e2a\u0e30\u0e2a\u0e21\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14",
sourceCostMultiplier:"\u0e15\u0e31\u0e27\u0e04\u0e39\u0e13\u0e15\u0e49\u0e19\u0e17\u0e38\u0e19",sourceDirection:"\u0e17\u0e34\u0e28\u0e17\u0e32\u0e07\u0e01\u0e32\u0e23\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07",distanceMethod:"\u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e23\u0e30\u0e22\u0e30\u0e17\u0e32\u0e07",sourceCharacteristicOptions:"\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e25\u0e31\u0e01\u0e29\u0e13\u0e30\u0e41\u0e2b\u0e25\u0e48\u0e07\u0e17\u0e35\u0e48\u0e21\u0e32",itemDescription:"\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c\u0e17\u0e35\u0e48\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e02\u0e36\u0e49\u0e19\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e40\u0e1b\u0e34\u0e14\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e2a\u0e23\u0e23\u0e23\u0e30\u0e22\u0e30\u0e17\u0e32\u0e07 ${layername} ",
itemTags:"\u0e1c\u0e25\u0e01\u0e32\u0e23\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c \u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e2a\u0e23\u0e23\u0e23\u0e30\u0e22\u0e30\u0e17\u0e32\u0e07 ${layername} ${fieldname}",itemSnippet:"\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c\u0e17\u0e35\u0e48\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e2a\u0e23\u0e23\u0e23\u0e30\u0e22\u0e30\u0e17\u0e32\u0e07",invalidNumber:"\u0e43\u0e2a\u0e48\u0e2b\u0e21\u0e32\u0e22\u0e40\u0e25\u0e02\u0e17\u0e35\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07",
or:"\u0e2b\u0e23\u0e37\u0e2d",toSource:"\u0e16\u0e36\u0e07\u0e41\u0e2b\u0e25\u0e48\u0e07\u0e17\u0e35\u0e48\u0e21\u0e32",fromSource:"\u0e08\u0e32\u0e01\u0e41\u0e2b\u0e25\u0e48\u0e07\u0e17\u0e35\u0e48\u0e21\u0e32",planar:"\u0e01\u0e23\u0e32\u0e1f\u0e40\u0e0a\u0e34\u0e07\u0e23\u0e30\u0e19\u0e32\u0e1a",geoDesic:"\u0e40\u0e23\u0e02\u0e32\u0e04\u0e13\u0e34\u0e15\u0e02\u0e2d\u0e07\u0e1c\u0e34\u0e27\u0e2b\u0e19\u0e49\u0e32\u0e42\u0e04\u0e49\u0e07",uniqueId:"Unique ID",binary:"\u0e44\u0e1a\u0e19\u0e32\u0e23\u0e35",
linear:"\u0e40\u0e0a\u0e34\u0e07\u0e40\u0e2a\u0e49\u0e19",inverseLinear:"\u0e2d\u0e34\u0e19\u0e40\u0e27\u0e34\u0e23\u0e4c\u0e2a\u0e40\u0e0a\u0e34\u0e07\u0e40\u0e2a\u0e49\u0e19",forward:"\u0e2a\u0e48\u0e07\u0e15\u0e48\u0e2d",symmetricLinear:"\u0e2a\u0e21\u0e21\u0e32\u0e15\u0e23\u0e40\u0e0a\u0e34\u0e07\u0e40\u0e2a\u0e49\u0e19",symmetricInverseLinear:"\u0e2a\u0e21\u0e21\u0e32\u0e15\u0e23\u0e2d\u0e34\u0e19\u0e40\u0e27\u0e34\u0e23\u0e4c\u0e2a\u0e40\u0e0a\u0e34\u0e07\u0e40\u0e2a\u0e49\u0e19",cos:"Cos",
sec:"Sec",cosSec:"Cos \u00e2\u20ac\u201c Sec",secCos:"Sec \u00e2\u20ac\u201c Cos",zeroFactor:"\u0e1b\u0e31\u0e08\u0e08\u0e31\u0e22\u0e28\u0e39\u0e19\u0e22\u0e4c",lowCutAngle:"\u0e21\u0e38\u0e21\u0e15\u0e31\u0e14\u0e15\u0e48\u0e33",highCutAngle:"\u0e21\u0e38\u0e21\u0e15\u0e31\u0e14\u0e2a\u0e39\u0e07",cutAngle:"\u0e21\u0e38\u0e21\u0e15\u0e31\u0e14",slope:"\u0e04\u0e27\u0e32\u0e21\u0e0a\u0e31\u0e19",power:"\u0e1e\u0e32\u0e27\u0e40\u0e27\u0e2d\u0e23\u0e4c",cosPower:"Cos power",secPower:"Sec power",sideValue:"\u0e04\u0e48\u0e32\u0e14\u0e49\u0e32\u0e19\u0e02\u0e49\u0e32\u0e07",
selectField:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e1f\u0e34\u0e25\u0e14\u0e4c"});