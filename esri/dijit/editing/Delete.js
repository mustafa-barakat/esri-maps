// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/editing/Delete","dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/has ../../kernel ./EditOperationBase".split(" "),function(e,c,d,f,g,h){c=c(h,{declaredClass:"esri.dijit.editing.Delete",type:"edit",label:"Delete Features",constructor:function(a){a=a||{};a.featureLayer?(this._featureLayer=a.featureLayer,a.deletedGraphics?this._deletedGraphics=a.deletedGraphics:console.error("In constructor of 'esri.dijit.editing.Delete', no graphics provided")):console.error("In constructor of 'esri.dijit.editing.Delete', featureLayer is not provided")},
updateObjectIds:function(a,b){this.updateIds(this._featureLayer,this._deletedGraphics,a,b)},performUndo:function(){var a=e.map(this._deletedGraphics,function(b){return b.attributes[this._featureLayer.objectIdField]},this);return this._featureLayer.applyEdits(this._deletedGraphics,null,null).then(d.hitch(this,function(b,l,m){b=e.map(b,function(k){return k.objectId});return{oldIds:a,addedIds:b,layer:this._featureLayer,operation:this}}))},performRedo:function(){return this._featureLayer.applyEdits(null,
null,this._deletedGraphics).then(d.hitch(this,function(){return{layer:this._featureLayer,operation:this}}))}});f("extend-esri")&&d.setObject("dijit.editing.Delete",c,g);return c});