// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/printing/PageOptionsDialog/PageOptionsDialog","dojo/_base/declare dojo/aspect ./PageOptionsDialogContent dijit/Dialog esri/dijit/geoenrichment/ReportPlayer/PlayerCommands dojo/i18n!esri/nls/jsapi".split(" "),function(g,h,k,l,m,c){c=c.geoenrichment.dijit.ReportPlayer.PageOptionsDialog;var d;return g(null,{_dialog:null,show:function(e){function f(n){b._dialog&&(d=a.getSettings(),n&&b.onCancel(),b._dialog.destroy(),b._dialog=null)}var b=this;if(!this._dialog||
!this._dialog.open){var a=new k({onPrint:function(){b.onPrint(a.getSettings());f(!1)},onCancel:function(){f(!0)}});this._dialog=new l({title:e.commandId===m.PRINT?c.dialogTitlePrint:c.dialogTitleExport,content:a});this._dialog.own(a);this._dialog.show();this._dialog.own(h.after(this._dialog,"hide",function(){f(!0)}));a.update(e);d&&a.setState(d)}},onPrint:function(e){},onCancel:function(){}})});