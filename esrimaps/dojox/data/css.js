//>>built
define("dojox/data/css",["dojo/_base/lang","dojo/_base/array"],function(k,f){var g=k.getObject("dojox.data.css",!0);g.rules={};g.rules.forEach=function(c,e,d){d&&f.forEach(d,function(a){f.forEach(a[a.cssRules?"cssRules":"rules"],function(b){if(!b.type||3!==b.type){var h="";a&&a.href&&(h=a.href);c.call(e?e:this,b,a,h)}})})};g.findStyleSheets=function(c){var e=[];f.forEach(c,function(d){(d=g.findStyleSheet(d))&&f.forEach(d,function(a){-1===f.indexOf(e,a)&&e.push(a)})});return e};g.findStyleSheet=function(c){var e=
[];"."===c.charAt(0)&&(c=c.substring(1));var d=function(a){return a.href&&a.href.match(c)?(e.push(a),!0):a.imports?f.some(a.imports,function(b){return d(b)}):f.some(a[a.cssRules?"cssRules":"rules"],function(b){return b.type&&3===b.type&&d(b.styleSheet)?!0:!1})};f.some(document.styleSheets,d);return e};g.determineContext=function(c){var e=[];c=c&&0<c.length?g.findStyleSheets(c):document.styleSheets;var d=function(a){e.push(a);a.imports&&f.forEach(a.imports,function(b){d(b)});f.forEach(a[a.cssRules?
"cssRules":"rules"],function(b){b.type&&3===b.type&&d(b.styleSheet)})};f.forEach(c,d);return e};return g});