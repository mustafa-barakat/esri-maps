// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/areas/AreasInfoTemplateBuilder","esri/dijit/geoenrichment/when esri/dijit/geoenrichment/promise/all esri/dijit/PopupTemplate ../attachments/AttributesUtil esri/dijit/geoenrichment/utils/DomUtil dojo/i18n!esri/nls/jsapi".split(" "),function(m,p,r,t,u,l){l=l.geoenrichment.dijit.ReportPlayer.AreasInfoTemplateBuilder;var n={buildInfoTemplates:function(b,d,a){var c=this,h={};d=d.map(function(e,k){return m(c._getAttributesAndNotesForAreaAt(b,
k),function(f){h[k]=f;c._buildAreaInfoTemplate(e,f.attributesText,f.notesText)})});return p(d).then(function(){a.groups&&a.groups.forEach(function(e){var k=h[e.indexes[0]];c._buildGroupInfoTemplate(e,k.attributesText,k.notesText)})})},buildInfoTemplateForFeature:function(b,d,a,c){var h=this;return m(this._getAttributesAndNotesForAreaAt(b,a),function(e){h._buildFeatureInfosInfoTemplate([{feature:d,title:c}],e.attributesText,e.notesText)})},_getAttributesAndNotesForAreaAt:function(b,d){b.supportsMultipleAreas&&
b.setCurrentAnalysisAreaIndex(d);return p([function(){return m(b.getAttributes(),function(a){return a&&a.length?n.buildAttributesTable(l.attributes,a.map(function(c){return{label:c.alias,value:t.formatAttributeValue(c,{unavailableDataValue:l.unavailableData})}})):null})}(),function(){return m(b.getNotes(),function(a){return a&&a.length?n.formatArrayOfTexts(l.notes,a.map(function(c){return c.text})):null})}()]).then(function(a){return{attributesText:a[0]||"",notesText:a[1]||""}})},_buildAreaInfoTemplate:function(b,
d,a){var c=[{feature:b.feature,title:b.name}];b.location&&c.push({feature:b.location,title:b.locationName||b.name});this._buildFeatureInfosInfoTemplate(c,d,a)},_buildGroupInfoTemplate:function(b,d,a){var c=[];b.location&&c.push({feature:b.location,title:b.locationName||b.name});this._buildFeatureInfosInfoTemplate(c,d,a)},_buildFeatureInfosInfoTemplate:function(b,d,a){b.forEach(function(c){d||a?c.feature.setInfoTemplate(new r({title:c.title,fieldInfos:[],description:d+a})):c.feature.setInfoTemplate(null)})},
formatArrayOfTexts:function(b,d){return"\x3cp\x3e"+b+"\x3c/p\x3e\x3cp style\x3d'padding-left:10px'\x3e"+(d.join("\x3cbr/\x3e\x3cbr/\x3e")+"\x3c/p\x3e")},buildAttributesTable:function(b,d,a){a=a||{};var c=a.padding?a.padding+"px":"0px 5px",h=null;if(a.maxHeight){var e=a.padding||0,k=u.getTextBox("Text").h;e=(2*e+k)*(d.length+(b?1:0));a.maxHeight<e&&(e=a.maxHeight/e,h=Math.floor(k*e)+"px",a.padding&&(c=Math.floor(a.padding*e*.5)+"px "+a.padding+"px"))}var f="";b&&(f+="\x3cp\x3e"+b+"\x3c/p\x3e");var q=
"padding:"+c+";"+(h?"font-size:"+h+";":"");f+="\x3ctable\x3e";d.forEach(function(g){f+="\x3ctr style\x3d'text-align:left;'\x3e";var v=f+="\x3ctd style\x3d'"+q+"'\x3e"+g.label+"\x3c/td\x3e";g=g.value;g=null===g||void 0===g||"number"===typeof g&&isNaN(g)?l.unavailableData:g;f=v+("\x3ctd style\x3d'"+q+"'\x3e"+g+"\x3c/td\x3e");f+="\x3c/tr\x3e"});return f+="\x3c/table\x3e"}};return n});