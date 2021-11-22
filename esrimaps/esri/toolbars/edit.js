// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/toolbars/edit","require dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/_base/array dojo/_base/Color dojo/has dojo/dom-construct dojo/dom-style ../kernel ../lang ../sniff ./_toolbar ./_Box ./_GraphicMover ./_VertexEditor ./TextEditor ../symbols/SimpleMarkerSymbol ../symbols/SimpleLineSymbol ../symbols/TextSymbol ../graphic".split(" "),function(B,C,n,m,p,k,x,y,D,E,z,M,F,G,H,I,J,l,g,K,L){var e=C(F,{declaredClass:"esri.toolbars.Edit",constructor:function(a,b){this._map=a;this._tool=
0;if(this._map.loaded)this._scratchGL=a.graphics;else var c=m.connect(this._map,"onLoad",this,function(){m.disconnect(c);c=null;this._scratchGL=this._map.graphics});a=x("esri-mobile");this._defaultOptions=n.mixin({vertexSymbol:new l(l.STYLE_CIRCLE,a?20:12,new g(g.STYLE_SOLID,new k([0,0,0,.5]),1),new k([128,128,128])),ghostVertexSymbol:new l(l.STYLE_CIRCLE,a?18:10,new g(g.STYLE_SOLID,new k([0,0,0,.5]),1),new k([255,255,255,.75])),ghostLineSymbol:new g(g.STYLE_DOT,new k([128,128,128]),2),allowDeleteVertices:!0,
allowAddVertices:!0,rotateHandleOffset:a?24:16,boxLineSymbol:new g(g.STYLE_DASH,new k([64,64,64]),1),boxHandleSymbol:new l(l.STYLE_SQUARE,a?16:9,new g(g.STYLE_SOLID,new k([0,0,0,.5]),1),new k([255,255,255,.75])),textAnchorSymbol:new l(l.STYLE_CIRCLE,10,null,new k([255,0,0]))},b||{})},activate:function(a,b,c){this.deactivate();this._graphic=b;this._options=n.mixin(n.mixin({},this._defaultOptions),c||{});var f=e.MOVE;c=e.EDIT_VERTICES;var d=e.SCALE,h=e.ROTATE,r=e.EDIT_TEXT,t=!1,u=!1,A=!1,q=this._map,
v=q.spatialReference,w=b.geometry.spatialReference;this._geo=!(!v||!w||v.equals(w)||!v.isWebMercator()||4326!==w.wkid);this._isTextPoint=this._prepareTextSymbolEditing(b,a);(a&f)===f&&(t=this._enableMove(b));f=(a&d)===d;h=(a&h)===h;if(f||h)A=this._enableBoxEditing(b,f,h);(a&c)===c&&(u=this._enableVertexEditing(b));(a&r)===r&&this._enableTextEditing(b);if(!(t||u||A))throw Error("[esri.toolbars.Edit::activate] Unable to activate the tool. Check if the tool is valid for the given geometry type.");if(this._tool=
a)this._mapPanEndHandle=m.connect(q,"onPanEnd",this,this._mapPanEndHandler),this._mapExtChgHandle=m.connect(q,"onExtentChange",this,this._mapExtentChangeHandler),this.onActivate(this._tool,b);q.snappingManager&&(t||u)&&q.snappingManager._startSelectionLayerQuery()},deactivate:function(){this._isTextPoint=null;var a=this._tool,b=this._graphic;if(a){var c=!!this._modified;this._clear();m.disconnect(this._mapPanEndHandle);m.disconnect(this._mapExtChgHandle);this._graphic=this._geo=this._mapPanEndHandle=
this._mapExtChgHandle=null;this.onDeactivate(a,b,{isModified:c});this._map.snappingManager&&this._map.snappingManager._stopSelectionLayerQuery()}},refresh:function(){this._refreshMoveables(!0)},getCurrentState:function(){return{tool:this._tool,graphic:this._graphic,isModified:!!this._modified}},onActivate:function(a,b){},onDeactivate:function(a,b,c){},onGraphicMoveStart:function(a){},onGraphicFirstMove:function(a){this._modified=!0},onGraphicMove:function(a,b){},onGraphicMoveStop:function(a,b){},
onGraphicClick:function(a,b){},onVertexMoveStart:function(a,b){},onVertexFirstMove:function(a,b){this._modified=!0},onVertexMove:function(a,b,c){},onVertexMoveStop:function(a,b,c){},onVertexAdd:function(a,b){this._modified=!0},onVertexClick:function(a,b){},onVertexMouseOver:function(a,b){},onVertexMouseOut:function(a,b){},onVertexDelete:function(a,b){this._modified=!0},onTextEditStart:function(a,b){},onTextEditEnd:function(a){},onScaleStart:function(a){},onScaleFirstMove:function(a){this._modified=
!0},onScale:function(a,b){},onScaleStop:function(a,b){},onRotateStart:function(a){},onRotateFirstMove:function(a){this._modified=!0},onRotate:function(a,b){},onRotateStop:function(a,b){},_eventMap:{activate:["tool","graphic"],deactivate:["tool","graphic","info"],"graphic-move-start":["graphic"],"graphic-first-move":["graphic"],"graphic-move":["graphic","transform"],"graphic-move-stop":["graphic","transform"],"graphic-click":["graphic","info"],"vertex-move-start":["graphic","vertexinfo"],"vertex-first-move":["graphic",
"vertexinfo"],"vertex-move":["graphic","vertexinfo","transform"],"vertex-move-stop":["graphic","vertexinfo","transform"],"vertex-add":["graphic","vertexinfo"],"vertex-click":["graphic","vertexinfo"],"vertex-mouse-over":["graphic","vertexinfo"],"vertex-mouse-out":["graphic","vertexinfo"],"vertex-delete":["graphic","vertexinfo"],"scale-start":["graphic"],"scale-first-move":["graphic"],scale:["graphic","info"],"scale-stop":["graphic","info"],"rotate-start":["graphic"],"rotate-first-move":["graphic"],
rotate:["graphic","info"],"rotate-stop":["graphic","info"]},_prepareTextSymbolEditing:function(a,b){if("point"===a.geometry.type||"multipoint"===a.geometry.type){var c=a.getLayer(),f=c.renderer;c=a.symbol||c._getSymbol(a);!c&&(f.hasVisualVariables("sizeInfo",!1)||f.hasVisualVariables("colorInfo",!1)||f.hasVisualVariables("opacityInfo",!1))&&f.addBreak&&f.infos&&1===f.infos.length&&(c=f.infos[0].symbol||f.defaultSymbol);if(c&&"textsymbol"===c.type){if((b&e.SCALE)===e.SCALE||(b&e.ROTATE)===e.ROTATE||
(b&e.EDIT_TEXT)===e.EDIT_TEXT){a.setSymbol(new K(c.toJson()));var d=this;this._textSymbolEditor?(this._textSymbolEditor.createForm(a),this._textSymbolEditor.show()):this._options&&this._options.textSymbolEditor?(this._textSymbolEditor=this._options.textSymbolEditor,this._textSymbolEditor.on("symbol-change",function(){d._boxEditor&&d._boxEditor.refresh()})):B(["../dijit/SymbolEditor"],function(h){if(!d._textSymbolEditor){var r=d._options.textSymbolEditorHolder?y.create("div",null,d._options.textSymbolEditorHolder):
y.create("div",null,d._map.root);d._textSymbolEditor=new h({graphic:a},r);h=d._textSymbolEditor.domNode.parentNode.id;D.set(d._textSymbolEditor.domNode,{position:"map_root"===h?"absolute":"relative",left:"map_root"===h?d._map.width/2-100+"px":"5px",top:"20px","z-index":50});d._textSymbolEditor.startup();d._textSymbolEditor.createForm(a);d._textSymbolEditor.show();d._textSymbolEditor.on("symbol-change",function(){d._boxEditor&&d._boxEditor.refresh()})}})}if((b&e.MOVE)===e.MOVE||(b&e.ROTATE)===e.ROTATE||
(b&e.SCALE)===e.SCALE)this._textAnchor=new L(a.geometry,this._options.textAnchorSymbol),this._scratchGL.add(this._textAnchor);return!0}}return!1},_enableMove:function(a){var b=this._map;switch(a.geometry.type){case "point":case "polyline":case "polygon":return this._graphicMover=new H(a,b,this,this._textAnchor),!0}return!1},_enableVertexEditing:function(a){var b=this._map;switch(a.geometry.type){case "multipoint":case "polyline":case "polygon":return this._vertexEditor=I.create(a,b,this),!0}return!1},
_enableBoxEditing:function(a,b,c){var f=this._map,d=a.geometry.type;return"polyline"===d||"polygon"===d||this._isTextPoint?(this._boxEditor=new G(a,f,this,b,c,this._options.uniformScaling,this._isTextPoint),!0):!1},_enableTextEditing:function(a){return this._isTextPoint?(this._textEditor=new J(a,this._map,this),m.connect(this._textEditor,"onEditStart",n.hitch(this,function(){this._textAnchor&&(this._textAnchor.getLayer().remove(this._textAnchor),this._textAnchor=null);this._map.disableKeyboardNavigation();
this._disableMove();this._disableBoxEditing()})),!0):!1},_disableMove:function(){var a=this._graphicMover;a&&(a.destroy(),this._graphicMover=null)},_disableVertexEditing:function(){var a=this._vertexEditor;a&&(a.destroy(),this._vertexEditor=null)},_disableBoxEditing:function(){var a=this._boxEditor;a&&(a.destroy(),this._boxEditor=null)},_disableTextEditing:function(){this._textEditor&&(this._textEditor.destroy(),this._textEditor=null);this._map.enableKeyboardNavigation()},_disableSymbolEditing:function(){this._textSymbolEditor&&
this._textSymbolEditor.hide()},_clear:function(){this._disableMove();this._disableVertexEditing();this._disableBoxEditing();this._disableTextEditing();this._disableSymbolEditing();this._textAnchor&&(this._textAnchor.getLayer().remove(this._textAnchor),this._textAnchor=null);this._tool=0;this._modified=!1},_mapPanEndHandler:function(){this._refreshMoveables()},_mapExtentChangeHandler:function(a,b,c){c&&this._refreshMoveables()},_refreshMoveables:function(a){var b=p.filter([this._graphicMover,this._vertexEditor,
this._boxEditor],z.isDefined);p.forEach(b,function(c){c.refresh(a)})},_beginOperation:function(a){p.forEach(this._getAffectedTools(a),function(b){b.suspend()})},_endOperation:function(a){p.forEach(this._getAffectedTools(a),function(b){b.resume()})},_getAffectedTools:function(a){var b=[];switch(a){case "MOVE":b=[this._vertexEditor,this._boxEditor];break;case "VERTICES":b=[this._boxEditor];break;case "BOX":b=[this._vertexEditor]}return b=p.filter(b,z.isDefined)}});n.mixin(e,{MOVE:1,EDIT_VERTICES:2,
SCALE:4,ROTATE:8,EDIT_TEXT:16});x("extend-esri")&&n.setObject("toolbars.Edit",e,E);return e});