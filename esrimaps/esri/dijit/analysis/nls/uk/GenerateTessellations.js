// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/uk/GenerateTessellations",{chooseShape:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0444\u043e\u0440\u043c\u0443",defineExtent:"\u0412\u0438\u0437\u043d\u0430\u0447\u0438\u0442\u0438 \u0435\u043a\u0441\u0442\u0435\u043d\u0442",defineBin:"\u0412\u0438\u0437\u043d\u0430\u0447\u0438\u0442\u0438 \u0440\u043e\u0437\u043c\u0456\u0440 \u0431\u0456\u043d\u0443, \u0432\u043a\u0430\u0437\u0430\u0432\u0448\u0438",area:"\u041f\u043b\u043e\u0449\u0430",distance:"\u0412\u0456\u0434\u0441\u0442\u0430\u043d\u044c",
resultLayerName:"\u041d\u0430\u0437\u0432\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0443\u044e\u0447\u043e\u0433\u043e \u0448\u0430\u0440\u0443",hexagon:"\u0428\u0435\u0441\u0442\u0438\u043a\u0443\u0442\u043d\u0438\u043a",transverseHexagon:"\u0421\u0456\u0447\u043d\u0438\u0439 \u0448\u0435\u0441\u0442\u0438\u043a\u0443\u0442\u043d\u0438\u043a",square:"\u041a\u0432\u0430\u0434\u0440\u0430\u0442",triangle:"\u0422\u0440\u0438\u043a\u0443\u0442\u043d\u0438\u043a",diamond:"\u0420\u043e\u043c\u0431",
sameAsDisplay:"\u0422\u0430\u043a \u0441\u0430\u043c\u043e \u044f\u043a \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0430\u0454\u0442\u044c\u0441\u044f",emptyBinSize:"\u0420\u043e\u0437\u043c\u0456\u0440 \u0431\u0456\u043d\u0443 \u043d\u0435 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u043f\u0443\u0441\u0442\u0438\u043c",currentExtent:"\u043f\u043e\u0442\u043e\u0447\u043d\u0438\u0439 \u0435\u043a\u0441\u0442\u0435\u043d\u0442",intersectExtent:"\u0417\u0431\u0435\u0440\u0456\u0433\u0430\u0442\u0438 \u0442\u0456\u043b\u044c\u043a\u0438 \u043f\u0435\u0440\u0435\u0442\u0438\u043d\u0430\u044e\u0447\u0456 \u043c\u043e\u0437\u0430\u0457\u043a\u0438",
outputLayerName:"\u0417\u0433\u0435\u043d\u0435\u0440\u0443\u0432\u0430\u0442\u0438 \u043c\u043e\u0437\u0430\u0457\u043a\u0438 \u043d\u0430 ${extentLayerName}",itemDescription:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043e \u0435\u043a\u0441\u0442\u0435\u043d\u0442 \u0437 ${extentLayerName}.",itemTags:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0430\u043d\u0430\u043b\u0456\u0437\u0443, \u0417\u0433\u0435\u043d\u0435\u0440\u0443\u0432\u0430\u0442\u0438 \u043c\u043e\u0437\u0430\u0457\u043a\u0438, ${extentLayerName}",
itemSnippet:"\u0412\u0435\u043a\u0442\u043e\u0440\u043d\u0438\u0439 \u0448\u0430\u0440, \u0437\u0433\u0435\u043d\u0435\u0440\u043e\u0432\u0430\u043d\u0438\u0439 \u0437\u0456 \u00ab\u0417\u0433\u0435\u043d\u0435\u0440\u0443\u0432\u0430\u0442\u0438 \u043c\u043e\u0437\u0430\u0457\u043a\u0438\u00bb."});