//>>built
define("dojox/io/windowName","dojo/_base/kernel dojo/_base/window dojo/_base/xhr dojo/_base/sniff dojo/_base/url dojo/domReady!".split(" "),function(c){c.getObject("io.windowName",!0,dojox);dojox.io.windowName={send:function(q,a){a.url+=(a.url.match(/\?/)?"\x26":"?")+"windowname\x3d"+(a.authElement?"auth":!0);var l=a.authElement,p=function(g){try{var k=h.ioArgs.frame.contentWindow.document;k.write(" ");k.close()}catch(u){}(l||c.body()).removeChild(h.ioArgs.outerFrame);return g},h=c._ioSetArgs(a,p,
p,p);a.timeout&&setTimeout(function(){-1==h.fired&&h.callback(Error("Timeout"))},a.timeout);dojox.io.windowName._send(h,q,l,a.onAuthLoad);return h},_send:function(q,a,l,p){function h(m){m.style.width="100%";m.style.height="100%";m.style.border="0px"}var g=q.ioArgs,k=dojox.io.windowName._frameNum++,u=(c.config.dojoBlankHtmlUrl||c.config.dojoCallbackUrl||c.moduleUrl("dojo","resources/blank.html"))+"#"+k,r=new c._Url(window.location,u),e=c.doc,f=l||c.body();if(c.isMoz&&![].reduce){var d=e.createElement("iframe");
h(d);l||(d.style.display="none");f.appendChild(d);f=d.contentWindow;e=f.document;e.write("\x3chtml\x3e\x3cbody margin\x3d'0px'\x3e\x3ciframe style\x3d'width:100%;height:100%;border:0px' name\x3d'protectedFrame'\x3e\x3c/iframe\x3e\x3c/body\x3e\x3c/html\x3e");e.close();e=f[0];f.__defineGetter__(0,function(){});f.__defineGetter__("protectedFrame",function(){});e=e.document;e.write("\x3chtml\x3e\x3cbody margin\x3d'0px'\x3e\x3c/body\x3e\x3c/html\x3e");e.close();f=e.body}if(c.isIE){var n=e.createElement("div");
n.innerHTML='\x3ciframe name\x3d"'+r+'" onload\x3d"dojox.io.windowName['+k+']()"\x3e';var b=n.firstChild}else b=e.createElement("iframe");g.frame=b;h(b);g.outerFrame=d=d||b;l||(d.style.display="none");var t=0;dojox.io.windowName[k]=b.onload=function(){try{if(!c.isMoz&&"about:blank"==b.contentWindow.location)return}catch(w){}t||(t=1,l?p&&p():b.contentWindow.location=u);try{if(2>t){var m=b.contentWindow.name;"string"==typeof m&&m!=r&&(t=2,q.ioArgs.hash=b.contentWindow.location.hash,q.callback(m))}}catch(w){}};
b.name=r;if(a.match(/GET/i))c._ioAddQueryToUrl(g),b.src=g.url,f.appendChild(b),b.contentWindow&&b.contentWindow.location.replace(g.url);else if(a.match(/POST/i)){f.appendChild(b);a=c.doc.createElement("form");c.body().appendChild(a);k=c.queryToObject(g.query);for(var v in k)for(d=k[v],d=d instanceof Array?d:[d],f=0;f<d.length;f++)n=e.createElement("input"),n.type="hidden",n.name=v,n.value=d[f],a.appendChild(n);a.method="POST";a.action=g.url;a.target=r;a.submit();a.parentNode.removeChild(a)}else throw Error("Method "+
a+" not supported with the windowName transport");b.contentWindow&&(b.contentWindow.name=r)},_frameNum:0};return dojox.io.windowName});