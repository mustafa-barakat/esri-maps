//>>built
define("dojox/lang/observable",["dojo","dijit","dojox"],function(h,r,g){h.provide("dojox.lang.observable");h.experimental("dojox.lang.observable");g.lang.observable=function(l,m,n,k){return g.lang.makeObservable(m,n,k)(l)};g.lang.makeObservable=function(l,m,n,k){function t(a,b,d){return function(){return n(a,b,d,arguments)}}k=k||{};n=n||function(a,b,d,e){return b[d].apply(a,e)};if(g.lang.lettableWin){var p=g.lang.makeObservable;p.inc=(p.inc||0)+1;var w="gettable_"+p.inc;g.lang.lettableWin[w]=l;var x=
"settable_"+p.inc;g.lang.lettableWin[x]=m;var y={};return function(a){if(a.__observable)return a.__observable;if(a.data__)throw Error("Can wrap an object that is already wrapped");var b=[];for(c in k)b.push(c);var d={type:1,event:1};for(c in a)!c.match(/^[a-zA-Z][\w\$_]*$/)||c in k||c in d||b.push(c);var e=b.join(",");var c=y[e];if(!c){var u="dj_lettable_"+p.inc++,v=u+"_dj_getter",q=["Class "+u,"\tPublic data__"];c=0;for(d=b.length;c<d;c++){var f=b[c];var z=typeof a[f];"function"==z||k[f]?q.push("  Public "+
f):"object"!=z&&q.push("\tPublic Property Let "+f+"(val)","\t\tCall "+x+'(me.data__,"'+f+'",val)',"\tEnd Property","\tPublic Property Get "+f,"\t\t"+f+" \x3d "+w+'(me.data__,"'+f+'")',"\tEnd Property")}q.push("End Class");q.push("Function "+v+"()","\tDim tmp","\tSet tmp \x3d New "+u,"\tSet "+v+" \x3d tmp","End Function");g.lang.lettableWin.vbEval(q.join("\n"));y[e]=c=function(){return g.lang.lettableWin.construct(v)}}console.log("starting5");e=c();e.data__=a;console.log("starting6");try{a.__observable=
e}catch(A){}c=0;for(d=b.length;c<d;c++){f=b[c];try{var B=a[f]}catch(A){console.log("error ",f,A)}if("function"==typeof B||k[f])e[f]=t(e,a,f)}return e}}return function(a){if(a.__observable)return a.__observable;var b=a instanceof Array?[]:{};b.data__=a;for(var d in a)"_"!=d.charAt(0)&&("function"==typeof a[d]?b[d]=t(b,a,d):"object"!=typeof a[d]&&function(e){b.__defineGetter__(e,function(){return l(a,e)});b.__defineSetter__(e,function(c){return m(a,e,c)})}(d));for(d in k)b[d]=t(b,a,d);return a.__observable=
b}};if(!{}.__defineGetter__)if(h.isIE)document.body?(h=document.createElement("iframe"),document.body.appendChild(h)):(document.write("\x3ciframe id\x3d'dj_vb_eval_frame'\x3e\x3c/iframe\x3e"),h=document.getElementById("dj_vb_eval_frame")),h.style.display="none",r=h.contentWindow.document,g.lang.lettableWin=h.contentWindow,r.write('\x3chtml\x3e\x3chead\x3e\x3cscript language\x3d"VBScript" type\x3d"text/VBScript"\x3eFunction vb_global_eval(code)ExecuteGlobal(code)End Function\x3c/script\x3e\x3cscript type\x3d"text/javascript"\x3efunction vbEval(code){ \nreturn vb_global_eval(code);}function construct(name){ \nreturn window[name]();}\x3c/script\x3e\x3c/head\x3e\x3cbody\x3evb-eval\x3c/body\x3e\x3c/html\x3e'),
r.close();else throw Error("This browser does not support getters and setters");g.lang.ReadOnlyProxy=g.lang.makeObservable(function(l,m){return l[m]},function(l,m,n){})});