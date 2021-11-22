// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/symbols/support/symbolConversion","require exports ../../Color ../../symbols ../../core/Error ../../core/lang ../FillSymbol3DLayer ../Font ../IconSymbol3DLayer ../LabelSymbol3D ../LineSymbol3D ../LineSymbol3DLayer ../PictureMarkerSymbol ../PointSymbol3D ../PolygonSymbol3D ../SimpleFillSymbol ../SimpleLineSymbol ../SimpleMarkerSymbol ../TextSymbol ../TextSymbol3DLayer ../WebStyleSymbol".split(" "),function(G,k,l,m,r,t,u,v,w,x,y,z,n,p,A,B,C,e,D,E,F){function q(a){var f=
a.color?a.color.clone():new l([255,255,255]),g;if(a instanceof n){a.color&&0===a.color.r&&0===a.color.g&&0===a.color.b&&(f=new l([255,255,255]));var b={href:a.url};var c=a.width<=a.height?a.height:a.width}else b=a.style,b in d?b=d[b]:(console.log(b+' cannot be mapped to Icon symbol. Fallback to "circle"'),b="circle"),b={primitive:b},c=a.size,a.outline&&a.outline.color&&0<a.outline.width&&(g={size:a.outline.width,color:a.outline.color.clone()});return new p(new w({size:c,resource:b,material:{color:f},
outline:g}))}Object.defineProperty(k,"__esModule",{value:!0});var d={};d[e.STYLE_CIRCLE]="circle";d[e.STYLE_CROSS]="cross";d[e.STYLE_DIAMOND]="kite";d[e.STYLE_SQUARE]="square";d[e.STYLE_X]="x";k.to3D=function(a,f,g,b){void 0===f&&(f=!1);void 0===g&&(g=!1);void 0===b&&(b=!0);if(!a)return{symbol:null};if(m.isSymbol3D(a)||a instanceof F)b=a.clone();else if(a instanceof C)b=new y(new z({size:a.width||1,material:{color:a.color?a.color.clone():[255,255,255]}}));else if(a instanceof e)b=q(a);else if(a instanceof
n)b=q(a);else if(a instanceof B)b=new u({material:{color:a.color?a.color.clone():[255,255,255]}}),a.outline&&a.outline.color&&(b.outline={size:a.outline.width||0,color:a.outline.color}),b=new A(b);else if(a instanceof D){var c=a.haloColor;var h=a.haloSize;c=c&&0<h?{color:t.clone(c),size:h}:null;h=a.font?a.font.clone():new v;b=new (b?x:p)(new E({size:h.size,font:h,halo:c,material:{color:a.color.clone()},text:a.text}))}else return{error:new r("symbol-conversion:unsupported-2d-symbol","2D symbol of type '"+
(a.type||a.declaredClass)+"' is unsupported in 3D",{symbol:a})};f&&(b.id=a.id);if(g&&m.isSymbol3D(b))for(a=0;a<b.symbolLayers.length;++a)b.symbolLayers.getItemAt(a)._ignoreDrivers=!0;return{symbol:b}}});