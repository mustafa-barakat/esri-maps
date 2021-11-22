// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/form/ContactNameElement","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/etc/docUtil ../../../form/OpenElement dojo/i18n!../../../nls/i18nArcGIS".split(" "),function(e,f,m,n,k,p,h){e=e([p],{postCreate:function(){this.inherited(arguments)},beforeValidateValue:function(g,d,q){g=this.gxeDocument;if("rpOrgName"===this.target&&!g.isAgsItemDescription&&(!g.isAgsINSPIRE||0!==this.gxePath.indexOf("/metadata/mdContact/")&&0!==this.gxePath.indexOf("/metadata/dataIdInfo/idPoC/"))){var b=
!0,c=!0,a=!0;a=c=b=!0;a=this.parentElement.gxePath+"/";var l=this.domNode.parentNode;b=q;b=null===b||0===f.trim(b).length;c=k.findInputWidget(a+"rpIndName",l).getInputValue();c=null===c||0===f.trim(c).length;d.label=h.contact.conditionalName.caption;g.isAgsFGDC?b&&c&&(d.isValid=!1,d.message=h.contact.conditionalName.msg_fgdc):(a=k.findInputWidget(a+"rpPosName",l).getInputValue(),a=null===a||0===f.trim(a).length,b&&c&&a&&(d.isValid=!1,d.message=h.contact.conditionalName.msg))}}});m("extend-esri")&&
f.setObject("dijit.metadata.types.arcgis.form.ContactNameElement",e,n);return e});