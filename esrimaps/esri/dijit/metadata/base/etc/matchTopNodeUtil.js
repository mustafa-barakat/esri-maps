// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/base/etc/matchTopNodeUtil","dojo/_base/lang dojo/_base/array dojo/has ../xml/xmlUtil ../xml/XmlFlattener ../../../../kernel".split(" "),function(m,g,n,h,p,q){h={evaluateDomMatch:function(a,c,b){if(!this.hasMatchConditions(a))return c;var e=new p,d=[],f=a.matchTopNode.length;g.forEach(c,function(k){var l=0;g.forEach(a.matchTopNode,function(r){var t=e.flattenNode(k,b);this._evaluateDomNode(a,k,t,r)&&l++},this);l===f&&d.push(k)},this);return d},evaluateXNodeMatch:function(a,
c){if(!this.hasMatchConditions(a))return!0;var b=0,e=a.matchTopNode.length;g.forEach(a.matchTopNode,function(d){var f=this._findXNode(c,d.qPath,null);f?this._evaluateXNode(f,d)&&b++:"mustNot"===d.qMode&&b++},this);return b===e},hasMatchConditions:function(a){return a.matchTopNode&&a.matchTopNode.push&&0<a.matchTopNode.length?!0:!1},_evaluateDomNode:function(a,c,b,e){var d=c=null;a=a.target+"/"+e.qPath;if(!e.qValue)return b=a in b,"mustNot"!==e.qMode?b:!b;if(a in b)(d=b[a])&&0<d.length&&(c=d[0]);else if("mustNot"!==
e.qMode)return!1;b=null===e.qValue||c===e.qValue;return"mustNot"===e.qMode?!b:b},_evaluateXNode:function(a,c){a=a.getXmlValue();a=null===c.qValue||a===c.qValue;return"mustNot"===c.qMode?!a:a},_findXNode:function(a,c,b){var e=null,d=!0;if(a._isGxeElement)if(null===b)b="";else{0<b.length&&(b+="/");b+=a.target;if(c===b)return a;d=!1;0===c.indexOf(b)&&(d=!0)}else if(a._isGxeAttribute&&(d=!1,null!==b&&(0<b.length&&(b+="/"),b+="@"+a.target,c===b)))return a;d&&g.some(a.getChildren(),function(f){if(e=this._findXNode(f,
c,b))return!0},this);return e}};n("extend-esri")&&m.setObject("dijit.metadata.base.etc.matchTopNodeUtil",h,q);return h});