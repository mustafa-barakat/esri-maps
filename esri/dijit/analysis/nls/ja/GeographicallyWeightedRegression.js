// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/ja/GeographicallyWeightedRegression",{chooseLayer:"\u89e3\u6790\u3059\u308b\u30ec\u30a4\u30e4\u30fc\u306e\u9078\u629e",chooseField:"\u30e2\u30c7\u30eb\u5316\u3059\u308b\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u9078\u629e",chooseExplanatoryField:"\u8aac\u660e\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u9078\u629e",chooseNeighborhood:"\u8fd1\u508d\u306e\u6c7a\u5b9a\u65b9\u6cd5\u306e\u9078\u629e",distanceBand:"\u8ddd\u96e2\u30d0\u30f3\u30c9",numNeighbors:"\u8fd1\u508d\u6570",chooseWeighted:"\u8fd1\u96a3\u30d5\u30a3\u30fc\u30c1\u30e3\u306e\u91cd\u307f\u4ed8\u3051\u65b9\u6cd5\u306e\u9078\u629e",
bisquare:"Bisquare",gaussian:"Gaussian",resultLayerName:"\u7d50\u679c\u30ec\u30a4\u30e4\u30fc\u540d",outputLayerName:"GWR ${inputLayerName}",distanceBandWarning:"\u8ddd\u96e2\u30d0\u30f3\u30c9\u306e\u5024\u306f ${min} \u304b\u3089 ${max} \u307e\u3067\u306e\u7bc4\u56f2\u5185\u306e\u5024\u3067\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002",numNeighborsWarning:"\u8fd1\u508d\u306e\u6570\u306f ${min} \u304b\u3089 ${max} \u307e\u3067\u306e\u7bc4\u56f2\u5185\u306e\u5024\u3067\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002",
explanatoryFieldsWarning:"1 \u3064\u4ee5\u4e0a\u306e\u8aac\u660e\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u9078\u629e",explanatoryLayerWarning:"\u9078\u629e\u3057\u305f\u30ec\u30a4\u30e4\u30fc\u306b\u306f\u3001\u6709\u52b9\u306a\u8aac\u660e\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u3042\u308a\u307e\u305b\u3093\u3002\u5225\u306e\u30ec\u30a4\u30e4\u30fc\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002",inputLayerWarning:"\u9078\u629e\u3057\u305f\u30ec\u30a4\u30e4\u30fc\u306b\u306f\u3001\u30e2\u30c7\u30eb\u5316\u3059\u308b\u6570\u5024\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u3042\u308a\u307e\u305b\u3093\u3002\u5225\u306e\u30ec\u30a4\u30e4\u30fc\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
itemDescription:"\u5730\u7406\u7a7a\u9593\u52a0\u91cd\u56de\u5e30\u5206\u6790\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3057\u3066\u751f\u6210\u3055\u308c\u305f\u30d5\u30a3\u30fc\u30c1\u30e3 \u30ec\u30a4\u30e4\u30fc\u3002",itemTags:"\u89e3\u6790\u7d50\u679c\u3001\u5730\u7406\u7a7a\u9593\u52a0\u91cd\u56de\u5e30\u5206\u6790\u3001${inputLayerName}\u3001\u8abf\u6574",itemSnippet:"[\u5730\u7406\u7a7a\u9593\u52a0\u91cd\u56de\u5e30\u5206] \u30c4\u30fc\u30eb\u3067\u751f\u6210\u3055\u308c\u305f\u30d5\u30a3\u30fc\u30c1\u30e3 \u30ec\u30a4\u30e4\u30fc"});