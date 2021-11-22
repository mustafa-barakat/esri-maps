// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/builder/utils/TooltipInfoBuilder",["dojo/_base/lang","esri/dijit/geoenrichment/utils/ObjectUtil","./ChartDataUtil","../../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder"],function(g,h,n,p){var k={},q=0;k.getTooltipInfo=function(a){function c(f,l,m){var r=d.dataLabelsShowValuePercentSymbol||d.yAxis&&d.yAxis.showPercentSymbol&&!d.yAxis.showValuesAsWeightsInSeries&&!d.showValuesAsWeightInStack||a.fieldInfo&&p.isFieldInfoInPercentState(a.fieldInfo),
t=d.dataLabelsShowValueCurrencySymbol;return n.formatNumber(f,void 0!==l?{dataLabelsDecimals:l}:void 0!==a.decimals?{dataLabelsDecimals:a.decimals}:d,m&&r,m&&t)}var d=a.visualProperties,e=a.isMultiFeature?a.absSumInAreasValue:a.absSumInSeriesValue,b=d.tooltip||{},u=h.copyOwnJsonProperties(b.style,g.mixin({},a.themeSettings.tooltip)),v=h.copyOwnJsonProperties(b.linkStyle,g.mixin({},a.themeSettings.tooltipLink));e={id:"tooltipId."+q++,getContext:function(){return{fieldData:a.viewModel.dynamicReportInfo&&
a.viewModel.dynamicReportInfo.fieldData,conditionalStyling:a.conditionalStyling,conditionalStats:a.conditionalStats,fieldInfo:a.fieldInfo,comparisonFeatureAttribute:a.comparisonFeatureAttribute,richTextFieldInfo:b.fieldInfo,tooltipTemplateValues:b.templateValues,chartContainer:a.chartContainer,viewModel:a.viewModel,theme:a.theme,dataDrillingPanelInfo:a.dataDrillingPanelInfo}},isMultiFeature:a.isMultiFeature,value:a.yValue,label:a.pointLabel,seriesLabel:a.seriesLabel,valueLabel:c(a.yValue,void 0,!0),
isSinglePointInSeries:a.isSinglePointInSeries,sumValueLabel:c(a.isMultiFeature?a.sumInAreasValue:a.sumInSeriesValue,void 0,!0),minValueLabel:c(a.isMultiFeature?a.minInAreasValue:a.minInSeriesValue,void 0,!0),maxValueLabel:c(a.isMultiFeature?a.maxInAreasValue:a.maxInSeriesValue,void 0,!0),avgValueLabel:c(a.isMultiFeature?a.avgInAreasValue:a.avgInSeriesValue,void 0,!0),weightValueLabel:e?c(Math.abs(a.yValue)/e*100,2)+"%":"",weightInStackLabel:a.weightInStack?c(100*a.weightInStack,2)+"%":"",formatFunc:function(f){return c(f,
void 0,!0)},isUnavailableData:isNaN(a.yValue),isThisAreaSpecific:a.isThisAreaSpecific,isThisAreaSingleSeries:a.isThisAreaSingleSeries,hasNegativeValues:a.hasNegativeValues,getGroup:null,fill:a.fill,stroke:a.stroke,marker:a.marker,isBenchmarked:a.isBenchmarked,unbenchmarkedValue:a.unbenchmarkedValue,unbenchmarkedValueLabel:c(a.unbenchmarkedValue,void 0,!0),showTitle:b.title,showValue:b.value,showMin:b.min,showMax:b.max,showAvg:b.avg,showWeight:b.weight,showConditional:b.conditional,tooltipStyle:u,
tooltipLinkStyle:v,pointName:a.pointName,seriesName:a.seriesName,areaName:a.areaName,featureIndex:a.featureIndex,isComparisonPoint:a.isComparisonPoint};if(!a.viewModel.dynamicReportInfo&&a.dataDrillingPanelInfo)a.chartContainer.onTooltipInfoCreated(e);return e};return k});