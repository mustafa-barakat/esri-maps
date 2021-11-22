// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/webgl/ShaderSourceVariator",["require","exports","../../core/lang","./Util"],function(p,q,n,f){return function(){function l(a,d,c){if("string"===typeof a)var b=a;else b=a.programNamePrefix,d=a.shaderSnippetPrefixes,c=a.baseDefines;f.assert(d,"you must specify shader snippet prefixes");f.assert(2===d.length,"you must specify shader snippet prefixes for vertex and fragment shaders");c&&0!==c.length||(c=[]);this.programNamePrefix=b;this.shaderSnippetPrefixes=d;this.baseDefines=
c;this.variables=[];this.sealed=!1}l.prototype.addDefine=function(a,d,c,b){f.assert(!this.sealed,"you cannot add another variable after the first program has been generated");f.assert(a,"you must specify a program name suffix");this.variables.push({programNameSuffixes:["",a],shaderNameSuffixes:b||a,defineStr:d,affectsShaderTypes:c||[!0,!0]})};l.prototype.addBinaryShaderSnippetSuffix=function(a,d,c){f.assert(!this.sealed,"you cannot add another variable after the first program has been generated");
f.assert(a,"you must specify a program name suffix");this.variables.push({programNameSuffixes:["",a],shaderSnippetSuffixes:["",d],affectsShaderTypes:c||[!0,!0]})};l.prototype.addNaryShaderSnippetSuffix=function(a,d){f.assert(!this.sealed,"you cannot add another variable after the first program has been generated");var c=a.map(function(b){f.assert(null!=b.value,"value must always be specified");return b.value});this.variables.push({values:c,programNameSuffixes:a.map(function(b,k){return null!=b.programNameSuffix?
b.programNameSuffix:c[k]}),shaderSnippetSuffixes:a.map(function(b,k){return null!=b.shaderSnippetSuffix?b.shaderSnippetSuffix:c[k]}),affectsShaderTypes:d||[!0,!0]})};l.prototype.getShaderVariation=function(a){f.assert(a.length===this.variables.length,"you must specify a value for each variable");for(var d=this.programNamePrefix,c=n.clone(this.shaderSnippetPrefixes),b=n.clone(this.shaderSnippetPrefixes),k=n.clone(this.baseDefines),m=0;m<this.variables.length;m++){var g=this.variables[m],e=a[m],h=void 0;
g.values?(h=g.values.indexOf(e),f.assert(0<=h,"invalid value "+e+" for variable "+m)):h=e?1:0;d+=g.programNameSuffixes[h];for(e=0;2>e;e++)g.affectsShaderTypes[e]&&(g.shaderSnippetSuffixes&&(c[e]+=g.shaderSnippetSuffixes[h],b[e]+=g.shaderSnippetSuffixes[h]),g.defineStr&&h&&(k.push(g.defineStr),b[e]+=g.shaderNameSuffixes))}return{programName:d,shaderSnippetNames:c,shaderNames:b,defines:k}};return l}()});