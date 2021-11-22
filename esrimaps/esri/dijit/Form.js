// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/templates/Form.html":'\x3cdiv class\x3d"esriForm"\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/Form","require dojo/_base/declare dojo/_base/lang dojo/has ../kernel dojo/_base/array dojo/dom-style dojo/dom-construct dojo/dom-class dojo/query dijit/_Widget dijit/_TemplatedMixin dojo/text!./templates/Form.html".split(" "),function(w,m,n,x,y,r,z,t,u,h,A,B,C){m=m([A,B],{declaredClass:"esri.dijit.Form",widgetsInTemplate:!0,templateString:C,widgets:{},fieldTypes:{string:{widget:"dijit/form/TextBox"},date:{widget:"dijit/form/DateTextBox"},number:{widget:"dijit/form/NumberTextBox"},
"boolean":{widget:"dijit/form/Select",widgetParameters:{options:[{label:"True",value:"true"},{label:"False",value:"false"}]}}},fieldTemplate:"\x3cdiv\x3e\x3cdiv\x3e{label}\x3c/div\x3e\x3cdiv\x3e{widget}\x3c/div\x3e\x3c/div\x3e",constructor:function(a,b){this.fieldTypes=n.mixin(this.fieldTypes,a.fieldTypes)},postCreate:function(){this._fieldsLength=this.fields.length;r.forEach(this.fields,function(a){this.addField(a)},this)},destroy:function(){this.inherited(arguments);var a;for(a in this.widgets)if(this.widgets.hasOwnProperty(a)){var b=
this.widgets[a];b.destroy()}this.widgets=null},addField:function(a){var b,d,c=this;var p=(a.template||this.fieldTemplate).replace("{label}",'\x3cspan class\x3d"esriFormFieldLabel"\x3e'+(a.label||a.name)+"\x3c/span\x3e");p=p.replace("{widget}",'\x3cdiv class\x3d"esriFormFieldWidget"\x3e\x3c/div\x3e');var k=t.toDom(p);u.add(k,"esriFormField");var D=h(".esriFormFieldWidget",k)[0];z.set(k,{display:!1===a.visible?"none":"block"});w([a.widget||this.fieldTypes[a.type].widget],function(f){b=a.widgetParameters||
c.fieldTypes[a.type].widgetParameters||{};d=new f(b,D);d.startup();u.add(d.domNode,"esriFormFieldWidget");d.fieldNode=k;d.initialState={value:a.value||null,visible:a.visible||!0,disabled:a.disabled||!1};c.domNode.appendChild(k);c.widgets[a.name]=d;c.setField(a);d.on("change",n.hitch(c,function(q,g){if(g){var v=g.value||g;g.target&&g.target.value&&(v=g.target.value);q={fieldName:q,value:v};c.emit("value-change",q)}},a.name));c._fieldsLength--;var e,l;if(0===c._fieldsLength)for(f=h(".esriFormField",
c.domNode),e=0;e<f.length;e++)for(l=e;l<f.length;l++)(c.fields[e].label||c.fields[e].name)===h(".esriFormFieldLabel",f[l])[0].innerHTML&&t.place(f[l],c.domNode,e)})},removeField:function(a){n.isString(a)||(a=a.name);a=this.getWidget(a);a.fieldNode.parentNode.removeChild(a.fieldNode);a.destroy()},getWidget:function(a){return this.widgets[a]},reset:function(){var a;for(a in this.widgets)if(this.widgets.hasOwnProperty(a)){var b=this.widgets[a].initialState;this.setField({name:a,value:b.value,visible:b.visible,
disabled:b.disabled})}},getField:function(a){var b=this.getWidget(a);return{label:h(".esriFormFieldLabel",b.parentNode)[0].innerHTML,name:a,value:b.value||b.getValue(),visible:b.visible,disabled:b.disabled}},setValues:function(a){for(var b in a)a.hasOwnProperty(b)&&this.setValue(b,a[b])},setValue:function(a,b){a=this.getWidget(a);a.setValue?a.setValue(b):a.set&&a.set("value",b)},setFields:function(a){r.forEach(a,function(b){this.setField(b)})},setField:function(a){var b=this.getWidget(a.name);h(".esriFormFieldLabel",
b.fieldNode)[0].innerHTML=a.label||a.name;if(!0===a.visible||!1===a.visible)b.setVisibility?b.setVisibility(a.visible):b.set&&b.set("visible",a.visible);if(!0===a.disabled||!1===a.disabled)b.setDisabled?b.setDisabled(a.disabled):b.set&&b.set("disabled",a.disabled);if(void 0!==a.value||null!==a.value)b.setValue?b.setValue(a.value):b.set&&b.set("value",a.value)}});x("extend-esri")&&n.setObject("dijit.Form",m,y);return m});