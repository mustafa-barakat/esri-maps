//>>built
define("dojox/editor/plugins/_SpellCheckParser",["dojo","dojox","dojo/_base/connect","dojo/_base/declare"],function(h,n){var l=h.declare("dojox.editor.plugins._SpellCheckParser",null,{lang:"english",parseIntoWords:function(b){function g(c){c=c.charCodeAt(0);return 48<=c&&57>=c||65<=c&&90>=c||97<=c&&122>=c}for(var k=this.words=[],m=this.indices=[],a=0,d=b&&b.length,f=0;a<d;){for(var e;a<d&&!g(e=b.charAt(a))&&"\x26"!=e;)a++;if("\x26"==e)for(;++a<d&&";"!=(e=b.charAt(a))&&g(e););else{for(f=a;++a<d&&g(b.charAt(a)););
f<d&&(k.push(b.substring(f,a)),m.push(f))}}return k},getIndices:function(){return this.indices}});h.subscribe(dijit._scopeName+".Editor.plugin.SpellCheck.getParser",null,function(b){b.parser||(b.parser=new l)});return l});