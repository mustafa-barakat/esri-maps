//>>built
define("dojox/form/uploader/_HTML5","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo dojo/request dojo/has".split(" "),function(k,q,l,e,m,n){return k("dojox.form.uploader._HTML5",[],{errMsg:"Error uploading files. Try checking permissions",uploadType:"html5",postMixInProperties:function(){this.inherited(arguments)},postCreate:function(){this.connectForm();this.inherited(arguments);this.uploadOnSelect&&this.connect(this,"onChange",function(a){this.upload(a[0])})},_drop:function(a){e.stopEvent(a);
this._files=a.dataTransfer.files;this.onChange(this.getFileList())},upload:function(a){this.onBegin(this.getFileList());this.uploadWithFormData(a)},addDropTarget:function(a,b){b||(this.connect(a,"dragenter",e.stopEvent),this.connect(a,"dragover",e.stopEvent),this.connect(a,"dragleave",e.stopEvent));this.connect(a,"drop","_drop")},uploadWithFormData:function(a){function b(c){f._xhrProgress(c);"load"===c.type&&(f.onComplete(d.response.data),d.response.xhr.removeEventListener("load",b,!1),d.response.xhr.upload.removeEventListener("progress",
b,!1),d=null)}if(this.getUrl()){var g=new FormData,p=this._getFileFieldName();l.forEach(this._files,function(c,r){g.append(p,c)},this);if(a){a.uploadType=this.uploadType;for(var h in a)g.append(h,a[h])}var f=this,d=m(this.getUrl(),{method:"POST",data:g,handleAs:"json",uploadProgress:!0,headers:{Accept:"application/json"}},!0);d.promise.response.otherwise(function(c){console.error(c);console.error(c.response.text);f.onError(c)});n("native-xhr2")?(d.response.xhr.addEventListener("load",b,!1),d.response.xhr.upload.addEventListener("progress",
b,!1)):d.promise.then(function(c){f.onComplete(c)})}else console.error("No upload url found.",this)},_xhrProgress:function(a){if(a.lengthComputable){var b={bytesLoaded:a.loaded,bytesTotal:a.total,type:a.type,timeStamp:a.timeStamp};"load"==a.type?(b.percent="100%",b.decimal=1):(b.decimal=a.loaded/a.total,b.percent=Math.ceil(a.loaded/a.total*100)+"%");this.onProgress(b)}}})});