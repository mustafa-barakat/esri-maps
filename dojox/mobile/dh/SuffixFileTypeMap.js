//>>built
define("dojox/mobile/dh/SuffixFileTypeMap",["dojo/_base/lang"],function(c){var a={};c.setObject("dojox.mobile.dh.SuffixFileTypeMap",a);a.map={html:"html",json:"json"};a.add=function(b,d){this.map[b]=d};a.getContentType=function(b){b=(b||"").replace(/.*\./,"");return this.map[b]};return a});