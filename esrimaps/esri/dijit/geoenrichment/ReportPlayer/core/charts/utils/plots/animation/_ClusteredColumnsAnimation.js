// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/plots/animation/_ClusteredColumnsAnimation",["dojo/_base/declare","esri/dijit/geoenrichment/utils/animation/Animator","esri/dijit/geoenrichment/ReportPlayer/ReportPlayerState","./_defaults"],function(e,f,g,c){return e(null,{_animateColumn:function(a){if(!a.isAnimating&&!g.isAnimationSuspended){var h=a.shape,d=a.voffset,b=a.vsize;0===b&&(b=1);f.animateTransform({shape:h,duration:this.animate.duration||c.duration,easing:c.easingFunc,transform:[{name:"translate",
start:[0,d-d/b],end:[0,0]},{name:"scale",start:[1,1/b],end:[1,1]}],onEnd:function(){a.isAnimating=!1}})}},renderAnimation:function(){this._animationInfos&&this._animationInfos.forEach(function(a){this._animateColumn(a)},this)}})});