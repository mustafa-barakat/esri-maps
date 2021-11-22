//>>built
define("dijit/_editor/selection",["dojo/dom","dojo/_base/lang","dojo/sniff","dojo/_base/window","../main"],function(k,n,l,c,g){var m={getType:function(){if(c.doc.getSelection){var a="text";try{var b=c.global.getSelection()}catch(d){}b&&1==b.rangeCount&&(b=b.getRangeAt(0),b.startContainer==b.endContainer&&1==b.endOffset-b.startOffset&&3!=b.startContainer.nodeType&&(a="control"));return a}return c.doc.selection.type.toLowerCase()},getSelectedText:function(){if(c.doc.getSelection){var a=c.global.getSelection();
return a?a.toString():""}return"control"==g._editor.selection.getType()?null:c.doc.selection.createRange().text},getSelectedHtml:function(){if(c.doc.getSelection){var a=c.global.getSelection();if(a&&a.rangeCount){var b,d="";for(b=0;b<a.rangeCount;b++){var f=a.getRangeAt(b).cloneContents(),e=c.doc.createElement("div");e.appendChild(f);d+=e.innerHTML}return d}return null}return"control"==g._editor.selection.getType()?null:c.doc.selection.createRange().htmlText},getSelectedElement:function(){if("control"==
g._editor.selection.getType()){if(c.doc.getSelection){var a=c.global.getSelection();return a.anchorNode.childNodes[a.anchorOffset]}if((a=c.doc.selection.createRange())&&a.item)return c.doc.selection.createRange().item(0)}return null},getParentElement:function(){if("control"==g._editor.selection.getType()){var a=this.getSelectedElement();if(a)return a.parentNode}else if(c.doc.getSelection){if(a=c.global.getSelection()){for(a=a.anchorNode;a&&1!=a.nodeType;)a=a.parentNode;return a}}else return a=c.doc.selection.createRange(),
a.collapse(!0),a.parentElement();return null},hasAncestorElement:function(a){return null!=this.getAncestorElement.apply(this,arguments)},getAncestorElement:function(a){var b=this.getSelectedElement()||this.getParentElement();return this.getParentOfType(b,arguments)},isTag:function(a,b){if(a&&a.tagName){a=a.tagName.toLowerCase();for(var d=0;d<b.length;d++){var f=String(b[d]).toLowerCase();if(a==f)return f}}return""},getParentOfType:function(a,b){for(;a;){if(this.isTag(a,b).length)return a;a=a.parentNode}return null},
collapse:function(a){if(c.doc.getSelection){var b=c.global.getSelection();b.removeAllRanges?a?b.collapseToStart():b.collapseToEnd():b.collapse(a)}else b=c.doc.selection.createRange(),b.collapse(a),b.select()},remove:function(){var a=c.doc.selection;c.doc.getSelection?(a=c.global.getSelection(),a.deleteFromDocument()):"none"!=a.type.toLowerCase()&&a.clear();return a},selectElementChildren:function(a,b){var d=c.doc;a=k.byId(a);if(c.doc.getSelection)b=c.global.getSelection(),l("opera")?(d=b.rangeCount?
b.getRangeAt(0):d.createRange(),d.setStart(a,0),d.setEnd(a,3==a.nodeType?a.length:a.childNodes.length),b.addRange(d)):b.selectAllChildren(a);else if(d=a.ownerDocument.body.createTextRange(),d.moveToElementText(a),!b)try{d.select()}catch(f){}},selectElement:function(a,b){a=k.byId(a);var d=a.ownerDocument,f=c.global;if(d.getSelection){b=f.getSelection();var e=d.createRange();b.removeAllRanges&&(l("opera")&&b.getRangeAt(0)&&(e=b.getRangeAt(0)),e.selectNode(a),b.removeAllRanges(),b.addRange(e))}else try{var h=
a.tagName?a.tagName.toLowerCase():"";e="img"===h||"table"===h?c.body(d).createControlRange():c.body(d).createRange();e.addElement(a);b||e.select()}catch(p){this.selectElementChildren(a,b)}},inSelection:function(a){if(a){var b=c.doc,d;if(c.doc.getSelection){var f=c.global.getSelection();f&&0<f.rangeCount&&(d=f.getRangeAt(0));if(d&&d.compareBoundaryPoints&&b.createRange)try{var e=b.createRange();e.setStart(a,0);if(1===d.compareBoundaryPoints(d.START_TO_END,e))return!0}catch(h){}}else{d=b.selection.createRange();
try{(e=a.ownerDocument.body.createControlRange())&&e.addElement(a)}catch(h){try{e=a.ownerDocument.body.createTextRange(),e.moveToElementText(a)}catch(p){}}if(d&&e&&1===d.compareEndPoints("EndToStart",e))return!0}}return!1}};n.setObject("dijit._editor.selection",m);return m});