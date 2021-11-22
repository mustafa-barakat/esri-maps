// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/ja/DistanceAllocation",{inputSourceRasterOrFeatures:"\u30bd\u30fc\u30b9 \u30e9\u30b9\u30bf\u30fc\u307e\u305f\u306f\u30d5\u30a3\u30fc\u30c1\u30e3\u306e\u9078\u629e",sourceField:"\u30bd\u30fc\u30b9 \u30d5\u30a3\u30fc\u30eb\u30c9 (\u30aa\u30d7\u30b7\u30e7\u30f3)",outputDistanceAllocationRasterName:"\u7d50\u679c\u306e\u8ddd\u96e2\u30a2\u30ed\u30b1\u30fc\u30b7\u30e7\u30f3 \u30e9\u30b9\u30bf\u30fc\u540d",inputBarrierRasterOrFeatures:"\u30d0\u30ea\u30a2 \u30e9\u30b9\u30bf\u30fc\u307e\u305f\u306f\u30d0\u30ea\u30a2 \u30d5\u30a3\u30fc\u30c1\u30e3\u306e\u9078\u629e (\u30aa\u30d7\u30b7\u30e7\u30f3)",
inputSurfaceRaster:"\u30b5\u30fc\u30d5\u30a7\u30b9 \u30e9\u30b9\u30bf\u30fc\u306e\u9078\u629e (\u30aa\u30d7\u30b7\u30e7\u30f3)",inputCostRaster:"\u30b3\u30b9\u30c8 \u30e9\u30b9\u30bf\u30fc\u306e\u9078\u629e (\u30aa\u30d7\u30b7\u30e7\u30f3)",inputVerticalRaster:"\u5782\u76f4\u65b9\u5411\u30e9\u30b9\u30bf\u30fc\u306e\u9078\u629e (\u30aa\u30d7\u30b7\u30e7\u30f3)",verticalFactor:"\u5782\u76f4\u65b9\u5411\u30d5\u30a1\u30af\u30bf\u30fc (\u30aa\u30d7\u30b7\u30e7\u30f3)",inputHorizontalRaster:"\u6c34\u5e73\u65b9\u5411\u30e9\u30b9\u30bf\u30fc\u306e\u9078\u629e (\u30aa\u30d7\u30b7\u30e7\u30f3)",
horizontalFactor:"\u6c34\u5e73\u65b9\u5411\u30d5\u30a1\u30af\u30bf\u30fc (\u30aa\u30d7\u30b7\u30e7\u30f3)",outputLayerName:"${layername} \u306e\u8ddd\u96e2\u30a2\u30ed\u30b1\u30fc\u30b7\u30e7\u30f3",outputDistanceAccumulationRasterName:"\u7d50\u679c\u306e\u8ddd\u96e2\u7d2f\u7a4d\u30e9\u30b9\u30bf\u30fc\u306e\u540d\u524d (\u30aa\u30d7\u30b7\u30e7\u30f3)",outputBackDirectionRasterName:"\u7d50\u679c\u306e\u30d0\u30c3\u30af\u65b9\u5411\u30e9\u30b9\u30bf\u30fc\u306e\u540d\u524d (\u30aa\u30d7\u30b7\u30e7\u30f3)",
outputSourceDirectionRasterName:"\u7d50\u679c\u306e\u30bd\u30fc\u30b9\u65b9\u5411\u30e9\u30b9\u30bf\u30fc\u306e\u540d\u524d (\u30aa\u30d7\u30b7\u30e7\u30f3)",outputSourceLocationRasterName:"\u7d50\u679c\u306e\u30bd\u30fc\u30b9\u4f4d\u7f6e\u30e9\u30b9\u30bf\u30fc\u306e\u540d\u524d (\u30aa\u30d7\u30b7\u30e7\u30f3)",sourceInitialAccumulation:"\u521d\u671f\u7d2f\u7a4d",sourceMaximumAccumulation:"\u6700\u5927\u7d2f\u7a4d",sourceCostMultiplier:"\u30b3\u30b9\u30c8\u306e\u4e57\u6570",sourceDirection:"\u79fb\u52d5\u65b9\u5411",
distanceMethod:"\u8ddd\u96e2\u8a08\u7b97\u306e\u65b9\u6cd5",sourceCharacteristicOptions:"\u30bd\u30fc\u30b9\u7279\u6027\u30aa\u30d7\u30b7\u30e7\u30f3",itemDescription:"${layername} \u306b [\u8ddd\u96e2\u30a2\u30ed\u30b1\u30fc\u30b7\u30e7\u30f3] \u3092\u5b9f\u884c\u3057\u3066\u751f\u6210\u3055\u308c\u305f\u30d5\u30a3\u30fc\u30c1\u30e3 \u30ec\u30a4\u30e4\u30fc\u3002 ",itemTags:"[\u89e3\u6790\u7d50\u679c]\u3001[\u8ddd\u96e2\u30a2\u30ed\u30b1\u30fc\u30b7\u30e7\u30f3]\u3001${layername} ${fieldname}",itemSnippet:"[\u8ddd\u96e2\u30a2\u30ed\u30b1\u30fc\u30b7\u30e7\u30f3] \u3067\u751f\u6210\u3055\u308c\u305f\u30d5\u30a3\u30fc\u30c1\u30e3 \u30ec\u30a4\u30e4\u30fc\u3002",
invalidNumber:"\u6709\u52b9\u306a\u6570\u5b57\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",or:"\u307e\u305f\u306f",toSource:"\u30bd\u30fc\u30b9\u3078",fromSource:"\u30bd\u30fc\u30b9\u304b\u3089",planar:"\u5e73\u9762",geoDesic:"\u6e2c\u5730\u7dda",uniqueId:"\u4e00\u610f\u306e ID",binary:"\u30d0\u30a4\u30ca\u30ea",linear:"\u30e9\u30a4\u30f3",inverseLinear:"Inverse linear",forward:"\u659c\u7dda",symmetricLinear:"Symmetric linear",symmetricInverseLinear:"Symmetric inverse linear",cos:"Cos",
sec:"Sec",cosSec:"Cos - Sec",secCos:"Sec - Cos",zeroFactor:"\u30bc\u30ed \u30d5\u30a1\u30af\u30bf\u30fc",lowCutAngle:"Low cut angle",highCutAngle:"High cut angle",cutAngle:"\u30ab\u30c3\u30c8 \u30a2\u30f3\u30b0\u30eb",slope:"\u50be\u659c\u89d2",power:"Power",cosPower:"Cos power",secPower:"Sec power",sideValue:"Side value",selectField:"\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u9078\u629e"});