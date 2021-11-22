// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/grid/coreUtils/GridBorderUtil",["../../themes/PageBorderStyles","../../themes/ThemeLibrary","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes"],function(h,n,p){var g={getBorderStyle:function(a,f,b,c,d){a=a.renderBordersFromTheme?g._getThemeBorderStyle(a,f,b,c,d):a.getViewMode()===p.EDIT?a.editModeBorderLineStyle&&g._getAllBorderStyle(c,d,a.editModeBorderLineStyle.width,a.editModeBorderLineStyle.color):a.previewModeBorderLineStyle&&
g._getAllBorderStyle(c,d,a.previewModeBorderLineStyle.width,a.previewModeBorderLineStyle.color);return g._toBorderStyleFormat(a)},_getAllBorderStyle:function(a,f,b,c,d){return{l:b,r:a?b:0,t:b,b:f?b:0,color:c,style:d}},_getThemeBorderStyle:function(a,f,b,c,d){var k=a.viewModel.getDocumentDefaultStyles(a.theme).border||n.getDefaultBorderSettings();if(k){var e=k.thickness,l=k.lineStyle,m=k.color;switch(k.style){case h.ALL:return g._getAllBorderStyle(c,d,e,m,l);case h.OUTER_ONLY:return{l:0===b.index?
e:0,r:c?e:0,t:0===f.index?e:0,b:d?e:0,color:m,style:l};case h.INNER_ONLY:return{l:0<b.index?e:0,t:0<f.index?e:0,color:m,style:l};case h.HORIZONTAL_INNER_ONLY:return{t:0<f.index?e:0,color:m,style:l};case h.VERTICAL_INNER_ONLY:return{l:0<b.index?e:0,color:m,style:l};default:return a.noThemeBorderLineStyle&&g._getAllBorderStyle(c,d,a.noThemeBorderLineStyle.width,a.noThemeBorderLineStyle.color)}}},_toBorderStyleFormat:function(a){return a&&{borderTopColor:a.color,borderTopWidth:a.t,borderTopOpacity:1,
borderTopStyle:a.style,borderRightColor:a.color,borderRightWidth:a.r,borderRightOpacity:1,borderRightStyle:a.style,borderBottomColor:a.color,borderBottomWidth:a.b,borderBottomOpacity:1,borderBottomStyle:a.style,borderLeftColor:a.color,borderLeftWidth:a.l,borderLeftOpacity:1,borderLeftStyle:a.style}}};return g});