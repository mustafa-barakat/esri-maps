//>>built
(function(C){var z,h=/[-+,> ]/;C("put-selector/put",[],z=function(f,F){function q(l){function t(){a&&c&&a!=c&&(c==l&&(y||(y=h.test(d)&&f.createDocumentFragment()))?y:c).insertBefore(a,u||null)}for(var y,A,u,c,a,m=arguments,B=m[0],k=0;k<m.length;k++){var d=m[k];if("object"==typeof d){A=!1;if(d instanceof Array){a=f.createDocumentFragment();for(var v=0;v<d.length;v++)a.appendChild(q(d[v]));d=a}if(d.nodeType)a=d,t(),c=d,u=0;else for(v in d)a[v]=d[v]}else if(A)A=!1,a.appendChild(f.createTextNode(d));
else{1>k&&(l=null);A=!0;if(B=d.replace(G,function(b,e,n,r,g,p){e&&(t(),"-"==e||"+"==e?(c=(u=a||c).parentNode,a=null,"+"==e&&(u=u.nextSibling)):("\x3c"==e?c=a=(a||c).parentNode:(","==e?c=l:a&&(c=a),a=null),u=0),a&&(c=a));if((b=!n&&r)||!a&&(n||g))"$"==b?(b=m[++k],c.appendChild(f.createTextNode(b))):(b=b||q.defaultTag,(e=D&&m[k+1]&&m[k+1].name)&&(b="\x3c"+b+' name\x3d"'+e+'"\x3e'),a=w&&~(x=b.indexOf("|"))?f.createElementNS(w[b.slice(0,x)],b.slice(x+1)):f.createElement(b));if(n)if("$"==r&&(r=m[++k]),
"#"==n)a.id=r;else if(e=(b=a.className)&&(" "+b+" ").replace(" "+r+" "," "),"."==n)a.className=b?(e+r).substring(1):r;else if("!"==d){var E;D?q("div",a,"\x3c").innerHTML="":(E=a.parentNode)&&E.removeChild(a)}else e=e.substring(1,e.length-1),e!=b&&(a.className=e);g&&("$"==p&&(p=m[++k]),"style"==g?a.style.cssText=p:(n="!"==g.charAt(0)?(g=g.substring(1))&&"removeAttribute":"setAttribute",p=""===p?g:p,w&&~(x=g.indexOf("|"))?a[n+"NS"](w[g.slice(0,x)],g.slice(x+1),p):a[n](g,p)));return""}))throw new SyntaxError("Unexpected char "+
B+" in "+d);t();c=B=a||c}}l&&y&&l.appendChild(y);return B}h=F||h;var G=/(?:\s*([-+ ,<>]))?\s*(\.|!\.?|#)?([-\w\u00A0-\uFFFF%$|]+)?(?:\[([^\]=]+)=?['"]?([^\]'"]*)['"]?\])?/g,x,w=!1;f=f||document;var D="object"==typeof f.createElement;q.addNamespace=function(l,t){f.createElementNS?(w||(w={}))[l]=t:f.namespaces.add(l,t)};q.defaultTag="div";q.forDocument=z;return q})})(function(C,z,h){h=h||z;"function"===typeof define?define([],function(){return h()}):"undefined"==typeof window?require("./node-html")(module,
h):put=h()});