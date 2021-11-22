// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/fgdc/dataqual/templates/srcinfo.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n    data-dojo-props\x3d"target:\'srcinfo\',minOccurs:0,maxOccurs:\'unbounded\',\r\n      label:\'${i18nFgdc.dataqual.srcinfo.caption}\'"\x3e\r\n      \r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'srccite\',showHeader:false,"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/fgdc/citeinfo/citeinfo"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'srcscale\',minOccurs:0,\r\n        label:\'${i18nFgdc.dataqual.srcinfo.srcscale}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\r\n        data-dojo-props\x3d"integerOnly:true,minValue:1,minValueIsExclusive:true,\r\n          hint:\'${i18nFgdc.hints.integerGreaterThanOne}\'"\x3e\x3c/div\x3e  \r\n    \x3c/div\x3e\r\n    \r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'typesrc\',\r\n        label:\'${i18nFgdc.dataqual.srcinfo.typesrc.caption}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputSelectOne"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Options"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'\',value:\'\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"value:\'paper\',label:\'${i18nFgdc.dataqual.srcinfo.typesrc.paper}\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"value:\'stable-base material\',label:\'${i18nFgdc.dataqual.srcinfo.typesrc.stableBaseMaterial}\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"value:\'microfiche\',label:\'${i18nFgdc.dataqual.srcinfo.typesrc.microfiche}\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"value:\'microfilm\',label:\'${i18nFgdc.dataqual.srcinfo.typesrc.microfilm}\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"value:\'audiocassette\',label:\'${i18nFgdc.dataqual.srcinfo.typesrc.audiocassette}\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"value:\'chart\',label:\'${i18nFgdc.dataqual.srcinfo.typesrc.chart}\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"value:\'filmstrip\',label:\'${i18nFgdc.dataqual.srcinfo.typesrc.filmstrip}\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"value:\'transparency\',label:\'${i18nFgdc.dataqual.srcinfo.typesrc.transparency}\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"value:\'videocassette\',label:\'${i18nFgdc.dataqual.srcinfo.typesrc.videocassette}\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"value:\'videodisc\',label:\'${i18nFgdc.dataqual.srcinfo.typesrc.videodisc}\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"value:\'videotape\',label:\'${i18nFgdc.dataqual.srcinfo.typesrc.videotape}\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"value:\'physical model\',label:\'${i18nFgdc.dataqual.srcinfo.typesrc.physicalModel}\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"value:\'computer program\',label:\'${i18nFgdc.dataqual.srcinfo.typesrc.computerProgram}\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"value:\'disc\',label:\'${i18nFgdc.dataqual.srcinfo.typesrc.disc}\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"value:\'cartridge tape\',label:\'${i18nFgdc.dataqual.srcinfo.typesrc.cartridgeTape}\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"value:\'magnetic tape\',label:\'${i18nFgdc.dataqual.srcinfo.typesrc.magneticTape}\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"value:\'online\',label:\'${i18nFgdc.dataqual.srcinfo.typesrc.online}\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"value:\'CD-ROM\',label:\'${i18nFgdc.dataqual.srcinfo.typesrc.cdrom}\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"value:\'electronic bulletin board\',label:\'${i18nFgdc.dataqual.srcinfo.typesrc.electronicBulletinBoard}\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option" data-dojo-props\x3d"value:\'electronic mail system\',label:\'${i18nFgdc.dataqual.srcinfo.typesrc.electronicMailSystem}\'"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n            data-dojo-props\x3d"label:\'${i18nFgdc.alternates.other}\',value:\'_other\',isOther:true"\x3e\x3c/div\x3e  \r\n        \x3c/div\x3e            \r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'srctime\',label:\'${i18nFgdc.dataqual.srcinfo.srctime}\'"\x3e  \r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/fgdc/timeinfo/timeinfo"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n        data-dojo-props\x3d"target:\'srccurr\',\r\n          label:\'${i18nFgdc.dataqual.srcinfo.srccurr}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputSelectOne"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Options"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n              data-dojo-props\x3d"label:\'\',value:\'\'"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n              data-dojo-props\x3d"label:\'${i18nFgdc.idinfo.timeperd.current.groundCondition}\',value:\'ground condition\'"\x3e\x3c/div\x3e  \r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n              data-dojo-props\x3d"label:\'${i18nFgdc.idinfo.timeperd.current.publicationDate}\',value:\'publication date\'"\x3e\x3c/div\x3e  \r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Option"\r\n              data-dojo-props\x3d"label:\'${i18nFgdc.alternates.other}\',value:\'_other\',isOther:true"\x3e\x3c/div\x3e  \r\n          \x3c/div\x3e            \r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'srccitea\',\r\n        label:\'${i18nFgdc.dataqual.srcinfo.srccitea}\'"\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'srccontr\',\r\n        label:\'${i18nFgdc.dataqual.srcinfo.srccontr}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n  \x3c/div\x3e\r\n  \r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/fgdc/dataqual/srcinfo","dojo/_base/declare dojo/_base/lang dojo/has ../../../base/Descriptor ../../../form/Element ../../../form/InputNumber ../../../form/InputSelectOne ../../../form/InputTextArea ../../../form/Options ../../../form/Option ../citeinfo/citeinfo ../timeinfo/timeinfo dojo/text!./templates/srcinfo.html ../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,n,p,q,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.fgdc.dataqual.srcinfo",
a,f);return a});