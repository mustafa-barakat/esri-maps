// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/ru/Sample",{toolDefine:"\u041e\u0431\u0440\u0430\u0437\u0435\u0446",outputLayerName:"${layername}_sampled",locationLayer:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u043b\u043e\u0439 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0439",uniqueIDField:"\u0423\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u043e\u043b\u0435 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e ID",acquisitionDefinition:"\u0423\u043a\u0430\u0437\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0441\u0431\u043e\u0440\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0439 (\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e)",
acquisitionDimension:"\u0423\u043a\u0430\u0437\u0430\u0442\u044c \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f \u0438 \u0444\u043e\u0440\u043c\u0430\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438 \u043e \u0441\u0431\u043e\u0440\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 (\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e)",buffer:"\u0423\u043a\u0430\u0437\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u043b\u0438 \u043f\u043e\u043b\u0435 \u0431\u0443\u0444\u0435\u0440\u043d\u043e\u0433\u043e \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u044f",
formatOptions:"\u041e\u043f\u0446\u0438\u0438 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",dimensionField:"\u041f\u043e\u043b\u0435 \u0438\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f",dimensionFieldOrValue:"\u041f\u043e\u043b\u0435 \u0438\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f",relativeDaysBefore:"\u041e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043e",
relativeDaysAfter:"\u041e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u043b\u0435",singleFieldOrValue:"\u041e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u0438\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435",singleFieldWithRelativeValues:"\u041e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u0438\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438",
startEndFieldsOrValues:"\u041f\u043e\u043b\u0435 \u043d\u0430\u0447\u0430\u043b\u0430 \u0438 \u043f\u043e\u043b\u0435 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u0438\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f",startFieldOrValue:"\u041f\u043e\u043b\u0435 \u043d\u0430\u0447\u0430\u043b\u0430 \u0438\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435",endFieldOrValue:"\u041f\u043e\u043b\u0435 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u0438\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435",
statisticsType:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0442\u0438\u043f \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0438",percentile:"\u041f\u0440\u043e\u0446\u0435\u043d\u0442\u0438\u043b\u044c",percentileValue:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u0438\u043b\u044f",resample:"\u0423\u043a\u0430\u0437\u0430\u0442\u044c \u043c\u0435\u0442\u043e\u0434 \u043f\u0435\u0440\u0435\u0441\u0447\u0435\u0442\u0430",nearest:"\u0411\u043b\u0438\u0436\u0430\u0439\u0448\u0430\u044f \u043e\u043a\u0440\u0435\u0441\u0442\u043d\u043e\u0441\u0442\u044c",
bilinear:"\u0411\u0438\u043b\u0438\u043d\u0435\u0439\u043d\u044b\u0439",cubic:"\u041a\u0443\u0431\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0432\u0435\u0440\u0442\u043a\u0430",outputLayout:"\u0423\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u044b\u0445\u043e\u0434\u043d\u043e\u0439 \u0448\u0430\u0431\u043b\u043e\u043d",layoutRow:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043e\u0431\u0440\u0430\u0437\u0446\u0430 \u0432 \u0441\u0442\u0440\u043e\u043a\u0430\u0445",layoutColumn:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043e\u0431\u0440\u0430\u0437\u0446\u0430 \u0432 \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u0445",
outputType:"\u0423\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u044b\u0445\u043e\u0434\u043d\u043e\u0439 \u0442\u0438\u043f",features:"\u041f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b",table:"\u0422\u0430\u0431\u043b\u0438\u0446\u0430",removeLayer:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u043b\u043e\u0439",dimensionError:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u0438. \u0423 \u0432\u0441\u0435\u0445 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0435 \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f",
analysisLayerLabel:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u043b\u043e\u0439 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0437\u0446\u0430",itemDescription:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u0438\u0437 \u043e\u0431\u0440\u0430\u0437\u0446\u0430",itemTags:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0440\u0430\u0441\u0442\u0440\u0430, \u041e\u0431\u0440\u0430\u0437\u0435\u0446 ${layername}",
itemSnippet:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u0438\u0437 \u043e\u0431\u0440\u0430\u0437\u0446\u0430"});