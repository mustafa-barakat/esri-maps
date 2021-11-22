/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/hash","./_base/kernel require ./_base/config ./aspect ./_base/lang ./topic ./domReady ./sniff".split(" "),function(f,C,l,D,g,E,F,v){function t(a,b){b=a.indexOf(b);return 0<=b?a.substring(b+1):""}function d(){return t(location.href,"#")}function m(){E.publish("/dojo/hashchange",d())}function w(){d()!==c&&(c=d(),m())}function x(a){if(h)if(h.isTransitioning())setTimeout(g.hitch(null,x,a),n);else{var b=h.iframe.location.href,p=b.indexOf("?");h.iframe.location.replace(b.substring(0,p)+"?"+
a)}else b=location.href.replace(/#.*/,""),location.replace(b+"#"+a),!y&&w()}function G(){function a(){c=d();z=e?c:t(u.href,"?");q=!1;r=null}var b=document.createElement("iframe"),p=l.dojoBlankHtmlUrl||C.toUrl("./resources/blank.html");l.useXDomain&&!l.dojoBlankHtmlUrl&&console.warn("dojo/hash: When using cross-domain Dojo builds, please save dojo/resources/blank.html to your domain and set djConfig.dojoBlankHtmlUrl to the path on your domain to blank.html");b.id="dojo-hash-iframe";b.src=p+"?"+d();
b.style.display="none";document.body.appendChild(b);this.iframe=f.global["dojo-hash-iframe"];var z,q,r,A,e,u=this.iframe.location;this.isTransitioning=function(){return q};this.pollLocation=function(){if(!e)try{var B=t(u.href,"?");document.title!=A&&(A=this.iframe.document.title=document.title)}catch(H){e=!0,console.error("dojo/hash: Error adding history entry. Server unreachable.")}var k=d();if(q&&c===k)if(e||B===r)a(),m();else{setTimeout(g.hitch(this,this.pollLocation),0);return}else if(c!==k||
!e&&z!==B){if(c!==k){c=k;q=!0;r=k;b.src=p+"?"+r;e=!1;setTimeout(g.hitch(this,this.pollLocation),0);return}e||(location.href="#"+u.search.substring(1),a(),m())}setTimeout(g.hitch(this,this.pollLocation),n)};a();setTimeout(g.hitch(this,this.pollLocation),n)}f.hash=function(a,b){if(!arguments.length)return d();"#"==a.charAt(0)&&(a=a.substring(1));b?x(a):location.hash="#"+a;return a};var c,h,y,n=l.hashPollFrequency||100;F(function(){"onhashchange"in f.global&&(!v("ie")||8<=v("ie")&&"BackCompat"!=document.compatMode)?
y=D.after(f.global,"onhashchange",m,!0):document.addEventListener?(c=d(),setInterval(w,n)):document.attachEvent&&(h=new G)});return f.hash});