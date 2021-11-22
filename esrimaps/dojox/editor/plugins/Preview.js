//>>built
define("dojox/editor/plugins/Preview","dojo dijit dojox dijit/_editor/_Plugin dijit/form/Button dojo/_base/connect dojo/_base/declare dojo/i18n dojo/i18n!dojox/editor/plugins/nls/Preview".split(" "),function(b,f,l,h){var g=b.declare("dojox.editor.plugins.Preview",h,{useDefaultCommand:!1,styles:"",stylesheets:null,iconClassPrefix:"dijitAdditionalEditorIcon",_initButton:function(){this._nlsResources=b.i18n.getLocalization("dojox.editor.plugins","Preview");this.button=new f.form.Button({label:this._nlsResources.preview,
showLabel:!1,iconClass:this.iconClassPrefix+" "+this.iconClassPrefix+"Preview",tabIndex:"-1",onClick:b.hitch(this,"_preview")})},setEditor:function(a){this.editor=a;this._initButton()},updateState:function(){this.button.set("disabled",this.get("disabled"))},_preview:function(){try{var a=this.editor.get("value"),d="\t\t\x3cmeta http-equiv\x3d'Content-Type' content\x3d'text/html; charset\x3dUTF-8'\x3e\n",c;if(this.stylesheets)for(c=0;c<this.stylesheets.length;c++)d+="\t\t\x3clink rel\x3d'stylesheet' type\x3d'text/css' href\x3d'"+
this.stylesheets[c]+"'\x3e\n";this.styles&&(d+="\t\t\x3cstyle\x3e"+this.styles+"\x3c/style\x3e\n");a="\x3chtml\x3e\n\t\x3chead\x3e\n"+d+"\t\x3c/head\x3e\n\t\x3cbody\x3e\n"+a+"\n\t\x3c/body\x3e\n\x3c/html\x3e";var e=window.open("javascript: ''",this._nlsResources.preview,"status\x3d1,menubar\x3d0,location\x3d0,toolbar\x3d0");e.document.open();e.document.write(a);e.document.close()}catch(k){console.warn(k)}}});b.subscribe(f._scopeName+".Editor.getPlugin",null,function(a){a.plugin||"preview"!==a.args.name.toLowerCase()||
(a.plugin=new g({styles:"styles"in a.args?a.args.styles:"",stylesheets:"stylesheets"in a.args?a.args.stylesheets:null}))});return g});