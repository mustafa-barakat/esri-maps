// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/reportContainerGrid/_ScrollSupport",["dojo/_base/declare"],function(b){return b(null,{getCurrentViewedPageIndex:function(){var a=this.getCurrentPageIndex();if(0<=a)return a;a=this.getScrollableContainer().scrollHeight/this._grids.length;return Math.round(this.getScrollableContainer().scrollTop/a)},getGridInView:function(){return this.getGrids()[this.getCurrentViewedPageIndex()]},getScrollableContainer:function(){return this.mainContainer},isScrollShown:function(){return this.getScrollableContainer()&&
this.getScrollableContainer().clientHeight<this.getScrollableContainer().scrollHeight}})});