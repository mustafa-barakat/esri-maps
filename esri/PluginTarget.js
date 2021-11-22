// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/PluginTarget","require dojo/aspect dojo/_base/array dojo/_base/lang dojo/Deferred dojo/when".split(" "),function(k,l,m,q,n,p){function h(){l.after(this.constructor._meta,"ctor",this._pluginsHandler,!0);this._plugins={}}h.prototype={addPlugin:function(a,b){var d=this,c=this._plugins,e=new n;try{k([a],function(f){a in c?e.resolve({id:c[a].declaredId||a.replace(/\//g,".")}):(c[a]=f,p(f.add(d,b),function(){var g={id:f.declaredId||a.replace(/\//g,".")};d.emit("plugin-add",g);e.resolve(g)},
function(g){e.reject(g)}))})}catch(f){e.reject(f)}return e.promise},removePlugin:function(a){if(a in this._plugins){var b=this._plugins[a];b.remove(this);delete this._plugins[a];this.emit("plugin-remove",{id:b.declaredId||a.replace(/\//g,".")})}},_pluginsHandler:function(){var a=this;m.some(arguments,function(b){if(b&&b.plugins&&b.plugins instanceof Array){b=b.plugins;var d;for(d=0;d<b.length;d++){var c=b[d];var e=c instanceof Object?c.id:c;a.addPlugin(e,c.options)}return!0}})}};return h});