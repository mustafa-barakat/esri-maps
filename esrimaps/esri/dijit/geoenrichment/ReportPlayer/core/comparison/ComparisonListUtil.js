// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/comparison/ComparisonListUtil",["dojo/_base/declare","dojo/dom-class","esri/dijit/geoenrichment/lists/FlowListDefaultItemRenderer","esri/dijit/geoenrichment/ReportPlayer/countryConfig"],function(m,p,q,n){var l={getListOptionsFromFeatures:function(a,b){a=l.getFeatureGroups(a,b);return l.getOptionsFromGroups(a,b)},getFeatureGroups:function(a,b){var e={},g=[];a.forEach(function(f){if(!f.attributes.isThisArea){var c=f.attributes.StdGeographyLevel||"",
d=e[c];d||(d=(d=n.getGeographiesModel())?d.getLevelPluralName(c):c,d={levelId:c,label:d,features:[]},e[c]=d,g.push(d));d.features.push(f)}});g.forEach(function(f){f.features.sort(function(c,d){return(c.attributes.StdGeographyName||"").localeCompare(d.attributes.StdGeographyName||"")})});return g},getOptionsFromGroups:function(a,b){function e(k){k.features.forEach(function(h){c.push({isArea:!0,value:g||!h.attributes.StdGeographyID?String(d++):h.attributes.StdGeographyLevel+"."+h.attributes.StdGeographyID,
label:h.attributes.StdGeographyName||"",attributes:h.attributes,featureId:h.attributes.StdGeographyID,levelId:k.levelId})})}var g=b&&b.isIndexBased,f=b&&b.hideTitleForSingleGroup,c=[],d=0;1!==a.length||a[0].levelId?a.forEach(function(k,h){0<h&&c.push({isSeparator:!0});(1<a.length||!f)&&c.push({isTitle:!0,enabled:!1,value:k.levelId,label:k.label+":"});e(k)}):e(a[0]);return c},getDefaultOptionValue:function(a,b){function e(f){var c;a.some(function(d){if(d.isArea&&(!f||!g||d.levelId===g.id))return c=
d,!0});return c}var g;b&&(g=n.getGeographiesModel().getLevel(b));return(b=e(!0)||e(!1))&&b.value},getFeatureIndexInOptionsById:function(a,b,e){var g=b+"."+e,f=-1,c=0;a.some(function(d){if(d.isArea){if(d.value===g)return f=c,!0;c++}});return f},getOptionValueByFeatureIndex:function(a,b){var e,g=0;a.some(function(f){if(f.isArea){if(g===b)return e=f,!0;g++}});return e&&e.value},getNumFeaturesFromOptions:function(a){var b=0;a.forEach(function(e){e.isArea&&b++});return b}};m=m(q,{createPresentation:function(a,
b,e,g,f){var c=this.inherited(arguments);a.isArea&&p.add(c,"esriGEComparisonList_areaItemRoot");return c}});l.ComparisonListItemRenderer=m;return l});