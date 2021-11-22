// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/geoenrichment/DataBrowser/templates/CountrySelect.html":'\x3cdiv class\x3d"DataBrowser_CountryBoxContainer"\x3e\r\n    \x3cdiv class\x3d"DataBrowser_CountryBox" data-dojo-attach-point\x3d"divCountrySelect"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"DataBrowser_HierarchyBox" data-dojo-attach-point\x3d"divHierarchySelect"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/geoenrichment/DataBrowser/CountrySelect","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/string dojo/on dojo/store/Memory dijit/form/FilteringSelect dijit/form/_ComboBoxMenu dojo/i18n!../../../nls/jsapi dojox/mvc/Templated dojo/text!./templates/CountrySelect.html".split(" "),function(k,m,q,r,n,f,t,l,d,u,v){d=d.geoenrichment.dijit.DataCategoriesPage;var w={AUS_MapDataServices:"Map Services - Census",AUS_MapDataServicesDeloitte:"Map Services - Spending",FRA_EsriFrance:"Esri France",
JPN_EsriJapan:"Esri Japan",DEU_Nexiga:"Nexiga GmbH",IND_Indicus:"Indicus Analytics",NLD_4orange:"Netherland 4Orange",KOR_OPENmate:"OPENmate",ESP_AIS:"AIS Group",EsriThailand:"Esri Thailand"};l=k(l,{"class":"dijitComboBoxMenu DataBrowser_CountrySelectMenu",selectItem:function(a){if(this.items){for(var c=-1,b=0;b<this.items.length;b++)if(this.items[b].value==a){c=b;break}if(!(0>c))for(a=this.containerNode.children,b=0;b<a.length;b++){var e=a[b];if("none"!=e.style.display&&e.getAttribute("item")==c){this.selectLastNode();
this.set("selected",e,!0);break}}}}});var p=k(t,{dropDownClass:l,_openResultList:function(a,c,b){this.inherited(arguments);this.store.filtered||this.dropDown.selectItem(this.get("value"))}});return k(u,{templateString:v,nls:d,_hierarchyCache:null,_currentValue:null,postCreate:function(){this.inherited(arguments);this.countrySelect=new p({maxHeight:151});this.countrySelect.placeAt(this.divCountrySelect);this.countrySelect.set("labelAttr","label");this.countrySelect.set("searchAttr","label");this.countrySelect.set("store",
new f({data:[{value:"loading",label:d.loading}],idProperty:"value"}));this.countrySelect.set("value","loading");this.countrySelect.set("disabled",!0);this.countrySelect.startup();this.own(this.countrySelect);this.hierarchySelect=new p({});this.hierarchySelect.placeAt(this.divHierarchySelect);this.hierarchySelect.set("labelAttr","label");this.hierarchySelect.set("searchAttr","label");this.hierarchySelect.domNode.style.display="none";this.hierarchySelect.startup();this.own(this.hierarchySelect)},setCountries:function(a){this._hierarchyCache=
{};var c=[];q.forEach(a,function(b){b.hierarchyID?(this._hierarchyCache[b.countryID]||(this._hierarchyCache[b.countryID]={value:b.countryID,label:d.allHierarchies,index:0}),this._hierarchyCache[b.value]={value:b.value,label:this._composeHierarchyLabel(b),index:b.isDefault?1:2}):c.push(b)},this);this.countrySelect.set("disabled",!1);this.countrySelect.set("store",new f({data:c,idProperty:"value"}));n(this.countrySelect,"change",m.hitch(this,this._changeCountry));n(this.hierarchySelect,"change",m.hitch(this,
this._changeHierarchy))},_composeHierarchyLabel:function(a){var c=d["hierarchy_"+a.hierarchyID];c||(c=r.substitute(d.premiumHierarchy,{name:w[a.hierarchyID]||a.hierarchyID}));return c},_changeCountry:function(){if(!this._innerUpdate){var a=this.countrySelect.get("value");a!=this._currentValue.substr(0,2)&&(this._innerUpdate=!0,this._updateHierarchySelect(a),this._innerUpdate=!1,this.emit("change"))}},_changeHierarchy:function(){if(!this._innerUpdate){var a=this.hierarchySelect.get("value");a!=this._currentValue&&
this._hierarchyCache&&this._hierarchyCache[a]&&(this._currentValue=a,this.emit("change"))}},_innerUpdate:!1,_getValueAttr:function(){return this._currentValue},_setValueAttr:function(a){a!=this._currentValue&&(this._innerUpdate=!0,this._currentValue=a.substr(0,2),this.countrySelect.set("value",this._currentValue),this._updateHierarchySelect(a),this._innerUpdate=!1,this.emit("change"))},_updateHierarchySelect:function(a){if(this._hierarchyCache){var c=a.substr(0,2);if(this._hierarchyCache[c]){var b=
[],e;for(e in this._hierarchyCache)e.substr(0,2)==c&&b.push(this._hierarchyCache[e]);b.sort(function(g,h){return g.index<h.index?-1:g.index>h.index?1:g.label<h.label?-1:g.label>h.label?1:0});this._currentValue=this._hierarchyCache[a]&&a||c;this.hierarchySelect.set("store",new f({data:b,idProperty:"value"}));this.hierarchySelect.set("value",this._currentValue);this.hierarchySelect.domNode.style.display=""}else this._currentValue=c,this.hierarchySelect.domNode.style.display="none",this.hierarchySelect.set("store",
new f({data:[{value:"none",label:""}],idProperty:"value"})),this.hierarchySelect.set("value","none")}}})});