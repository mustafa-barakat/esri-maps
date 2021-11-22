// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/CustomReportsManager","dojo/_base/lang esri/dijit/geoenrichment/Deferred esri/dijit/geoenrichment/when ./PortalManager ./ReportTemplateData ./StandardGraphicReportTemplates esri/dijit/geoenrichment/utils/CacheUtil esri/dijit/geoenrichment/utils/PortalUtil esri/dijit/geoenrichment/utils/PortalQueryUtil esri/dijit/geoenrichment/utils/UrlUtil ../../config ../../countryConfig".split(" "),function(m,z,k,n,A,B,p,C,D,l,q,E){var y=
{TEMPLATE_TYPE:"Report Template",PLAYER_STANDARD_INFOGRAPHIC_TYPEKEYWORD:"esriReportPlayerStandardInfographic",STANDARD_INFOGRAPHIC_TYPEKEYWORD:"esriWebStandardInfographicReport",GALLERY_INFOGRAPHIC_TYPEKEYWORD:"esriWebGalleryInfographicReport",MOBILE_INFOGRAPHIC_TYPEKEYWORD:"esriMobileFactsInfographicReport",GALLERY_INFOGRAPHIC_USER:"esri_reports",resetCache:function(){p.set("CustomReportsManager",{})},_getCache:function(){return p.get("CustomReportsManager")},getCustomReports:function(a){var c=
this,d=l.getPortalUrl(a.portalUrl);return k(n.getSignedInPortal(d),function(f){f=f.user.username;f={q:D.combineQueryString({type:"Report Template",typeKeywords:a.typeKeywords,owner:!a.publicOnly&&f}),sortField:"modified",sortOrder:"desc"};return C.queryCommon(l.combine(d,"sharing/rest/search"),f).then(function(b){b=b.map(function(e){return c.prepareCustomReportFromItem(e,d,a)});return c._getCountryReports(b,a.countryID)})})},_getCountryReports:function(a,c){return a&&("*"===c?a:a.filter(function(d){return!d.countries||
d.countries.split(",").some(function(f){return c===f.trim()})}))},prepareCustomReportFromItem:function(a,c,d){function f(e){return"string"===typeof e?"true"===e:!!e}var b=m.mixin({},a.properties||a.details);b.isGraphicReport=f(b.isGraphicReport);b.isMultiFeature=f(b.isMultiFeature);b.reportID=a.id;c={title:a.title,templateData:c&&new A(a,c),modified:a.modified instanceof Date?a.modified.getTime():a.modified};d&&d.attachItemProperty&&(c[d.attachItemProperty]=a);m.mixin(c,b);return c},getCustomReportByID:function(a){var c=
this,d=this._getCache()[a.reportID];if(d)return d;var f=l.getPortalUrl(a.portalUrl);return this._getCache()[a.reportID]=k(n.getSignedInPortal(f),function(b){return b.user.getItem(a.reportID).then(function(e){return e&&c.prepareCustomReportFromItem(e,f,a)})}).otherwise(function(b){delete c._getCache()[a.reportID];return a.ignoreError?null:(new z).reject(b)})},tryFindReportIdByAlias:function(a){var c=this,d=B.aliasToID(a.countryID,a.reportID);if(null==d)return null;var f=l.getPortalUrl(a.portalUrl);
return k(d&&this.getCustomReportByID({reportID:d,portalUrl:f,ignoreError:!0,attachItemProperty:a.attachItemProperty}),function(b){return b?b&&(a.returnObject?b:b.reportID):k(c.getCustomReports({portalUrl:f,countryID:a.countryID,typeKeywords:"esriReportPlayerStandardInfographic",publicOnly:!0,attachItemProperty:a.attachItemProperty}),function(e){function r(g){g=g.split(".");return Number((Number(g[0])+Number(g[1])/100).toFixed(2))}var t=r(q.jsapiVersion),u,v,w=-Infinity,x=Infinity;e.forEach(function(g){if(g.playerAlias===
a.reportID){var h=r(g.jsapiVersion);t>=h&&h>w&&(w=h,u=g);t<h&&h<x&&(x=h,v=g)}});e=u||v;a.strictVersionCheck&&e&&e.jsapiVersion!==q.jsapiVersion&&(e=null);return e&&(a.returnObject?e:e.reportID)})})},itemUpdated:function(a){delete this._getCache()[a]},getFakeCustomReportByContext:function(a){return{title:"Generic template",type:"esriReportTemplateStandard",coverage:a.countryID,countries:a.countryID,hierarchy:a.hierarchy||E.getHierarchyID(),isGraphicReport:!0,isMultiFeature:!1,reportID:null}}};y.resetCache();
return y});