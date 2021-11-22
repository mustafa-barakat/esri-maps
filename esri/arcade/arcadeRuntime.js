// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/arcade/arcadeRuntime","require exports ./ArcadePortal ./Attachment ./Dictionary ./Feature ./FunctionWrapper ./ImmutablePathArray ./ImmutablePointArray ./languageUtils ./treeAnalysis ./functions/array ./functions/date ./functions/geometry ./functions/geomsync ./functions/maths ./functions/stats ./functions/string ../geometry/Extent ../geometry/Geometry ../geometry/Multipoint ../geometry/Point ../geometry/Polygon ../geometry/Polyline ../SpatialReference".split(" "),function(Ba,q,da,ea,
x,A,I,M,fa,e,l,ha,ia,ja,ka,la,ma,na,oa,N,pa,qa,ra,sa,ta){function O(b,a){for(var d=[],f=0;f<a.arguments.length;f++)d.push(h(b,a.arguments[f]));return d}function u(b,a,d){try{return d(b,a,O(b,a))}catch(f){throw f;}}function h(b,a){try{switch(a.type){case "EmptyStatement":return e.voidOperation;case "VariableDeclarator":var d=null===a.init?null:h(b,a.init);d===e.voidOperation&&(d=null);if("Identifier"!==a.id.type)throw Error("Can only assign a regular variable");var f=a.id.name.toLowerCase();null!==
b.localScope?b.localScope[f]={value:d,valueset:!0,node:a.init}:b.globalScope[f]={value:d,valueset:!0,node:a.init};return e.voidOperation;case "VariableDeclaration":for(var c=0;c<a.declarations.length;c++)h(b,a.declarations[c]);return e.voidOperation;case "BlockStatement":a:{var k=e.voidOperation;for(c=0;c<a.body.length;c++)if(k=h(b,a.body[c]),k instanceof e.ReturnResult||k===e.breakResult||k===e.continueResult){var r=k;break a}r=k}return r;case "FunctionDeclaration":var v=a.id.name.toLowerCase();
b.globalScope[v]={valueset:!0,node:null,value:new I(a,b)};return e.voidOperation;case "ReturnStatement":if(null===a.argument)var t=new e.ReturnResult(e.voidOperation);else{var n=h(b,a.argument);t=new e.ReturnResult(n)}return t;case "IfStatement":if("AssignmentExpression"===a.test.type||"UpdateExpression"===a.test.type)throw Error(l.nodeErrorMessage(a.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));var P=h(b,a.test);if(!0===P)var Q=h(b,a.consequent);else if(!1===P)Q=null!==a.alternate?h(b,a.alternate):
e.voidOperation;else throw Error(l.nodeErrorMessage(a,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"));return Q;case "ExpressionStatement":if("AssignmentExpression"===a.expression.type||"UpdateExpression"===a.expression.type)var R=h(b,a.expression);else{var S=h(b,a.expression);R=S===e.voidOperation?e.voidOperation:new e.ImplicitResult(S)}return R;case "AssignmentExpression":var B=h(b,a.right);c=null;var g="";if("MemberExpression"===a.left.type){c=h(b,a.left.object);!0===a.left.computed?g=h(b,a.left.property):
"Identifier"===a.left.property.type&&(g=a.left.property.name);if(e.isArray(c))if(e.isNumber(g)){0>g&&(g=c.length+g);if(0>g||g>c.length)throw Error("Assignment outside of array bounds");if(g===c.length&&"\x3d"!==a.operator)throw Error("Invalid Parameter");c[g]=C(B,a.operator,c[g],a)}else throw Error("Invalid Parameter");else if(c instanceof x){if(!1===e.isString(g))throw Error("Dictionary accessor must be a string");if(!0===c.hasField(g))c.setField(g,C(B,a.operator,c.field(g),a));else{if("\x3d"!==
a.operator)throw Error("Invalid Parameter");c.setField(g,C(B,a.operator,null,a))}}else if(c instanceof A){if(!1===e.isString(g))throw Error("Feature accessor must be a string");if(!0===c.hasField(g))c.setField(g,C(B,a.operator,c.field(g),a));else{if("\x3d"!==a.operator)throw Error("Invalid Parameter");c.setField(g,C(B,a.operator,null,a))}}else{if(e.isImmutableArray(c))throw Error("Array is Immutable");throw Error("Invalid Parameter");}var D=e.voidOperation}else if(c=a.left.name.toLowerCase(),null!==
b.localScope&&void 0!==b.localScope[c])b.localScope[c]={value:C(B,a.operator,b.localScope[c].value,a),valueset:!0,node:a.right},D=e.voidOperation;else if(void 0!==b.globalScope[c])b.globalScope[c]={value:C(B,a.operator,b.globalScope[c].value,a),valueset:!0,node:a.right},D=e.voidOperation;else throw Error("Variable not recognised");return D;case "UpdateExpression":c=null;g="";if("MemberExpression"===a.argument.type){c=h(b,a.argument.object);!0===a.argument.computed?g=h(b,a.argument.property):"Identifier"===
a.argument.property.type&&(g=a.argument.property.name);if(e.isArray(c))if(e.isNumber(g)){0>g&&(g=c.length+g);if(0>g||g>=c.length)throw Error("Assignment outside of array bounds");var m=e.toNumber(c[g]);c[g]="++"===a.operator?m+1:m-1}else throw Error("Invalid Parameter");else if(c instanceof x){if(!1===e.isString(g))throw Error("Dictionary accessor must be a string");if(!0===c.hasField(g))m=e.toNumber(c.field(g)),c.setField(g,"++"===a.operator?m+1:m-1);else throw Error("Invalid Parameter");}else if(c instanceof
A){if(!1===e.isString(g))throw Error("Feature accessor must be a string");if(!0===c.hasField(g))m=e.toNumber(c.field(g)),c.setField(g,"++"===a.operator?m+1:m-1);else throw Error("Invalid Parameter");}else{if(e.isImmutableArray(c))throw Error("Array is Immutable");throw Error("Invalid Parameter");}var J=!1===a.prefix?m:"++"===a.operator?m+1:m-1}else{c="Identifier"===a.argument.type?a.argument.name.toLowerCase():"";if(!c)throw Error("Invalid identifier");if(null!==b.localScope&&void 0!==b.localScope[c])m=
e.toNumber(b.localScope[c].value),b.localScope[c]={value:"++"===a.operator?m+1:m-1,valueset:!0,node:a},J=!1===a.prefix?m:"++"===a.operator?m+1:m-1;else if(void 0!==b.globalScope[c])m=e.toNumber(b.globalScope[c].value),b.globalScope[c]={value:"++"===a.operator?m+1:m-1,valueset:!0,node:a},J=!1===a.prefix?m:"++"===a.operator?m+1:m-1;else throw Error("Variable not recognised");}return J;case "BreakStatement":return e.breakResult;case "ContinueStatement":return e.continueResult;case "TemplateElement":return a.value?
a.value.cooked:"";case "TemplateLiteral":var F="",y=0;D=0;for(c=a.quasis;D<c.length;D++)if(g=c[D],F+=g.value?g.value.cooked:"",!1===g.tail){var w=a.expressions[y]?e.toString(h(b,a.expressions[y])):"";F+=w;y++}return F;case "ForStatement":null!==a.init&&h(b,a.init);y={testResult:!0,lastAction:e.voidOperation};do b:{c=b;g=a;w=y;if(null!==g.test){w.testResult=h(c,g.test);if(!1===w.testResult)break b;if(!0!==w.testResult)throw Error(l.nodeErrorMessage(g,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"));
}w.lastAction=h(c,g.body);w.lastAction===e.breakResult?w.testResult=!1:w.lastAction instanceof e.ReturnResult?w.testResult=!1:null!==g.update&&h(c,g.update)}while(!0===y.testResult);F=y.lastAction instanceof e.ReturnResult?y.lastAction:e.voidOperation;return F;case "ForInStatement":return ua(b,a);case "Identifier":return T(b,a);case "MemberExpression":return va(b,a);case "Literal":return a.value;case "CallExpression":return wa(b,a);case "UnaryExpression":return xa(b,a);case "BinaryExpression":return ya(b,
a);case "LogicalExpression":return za(b,a);case "ArrayExpression":try{for(c=[],g=0;g<a.elements.length;g++){var K=h(b,a.elements[g]);if(e.isFunctionParameter(K))throw Error(l.nodeErrorMessage(a,"RUNTIME","FUNCTIONCONTEXTILLEGAL"));K===e.voidOperation?c.push(null):c.push(K)}}catch(L){throw L;}return c;case "ObjectExpression":c={};for(g=0;g<a.properties.length;g++){var G=h(b,a.properties[g]);if(e.isFunctionParameter(G.value))throw Error("Illegal Argument");if(!1===e.isString(G.key))throw Error("Illegal Argument");
c[G.key.toString()]=G.value===e.voidOperation?null:G.value}var U=new x(c);U.immutable=!1;return U;case "Property":return{key:"Identifier"===a.key.type?a.key.name:h(b,a.key),value:h(b,a.value)};default:throw Error(l.nodeErrorMessage(a,"RUNTIME","UNREOGNISED"));}}catch(L){throw L;}}function ua(b,a){var d=h(b,a.right);"VariableDeclaration"===a.left.type&&h(b,a.left);var f=null,c="";if("VariableDeclaration"===a.left.type){var k=a.left.declarations[0].id;"Identifier"===k.type&&(c=k.name)}else"Identifier"===
a.left.type&&(c=a.left.name);if(!c)throw Error(l.nodeErrorMessage(a,"RUNTIME","INVALIDVARIABLE"));c=c.toLowerCase();null!==b.localScope&&void 0!==b.localScope[c]&&(f=b.localScope[c]);null===f&&void 0!==b.globalScope[c]&&(f=b.globalScope[c]);if(null===f)throw Error(l.nodeErrorMessage(a,"RUNTIME","VARIABLENOTDECLARED"));if(e.isArray(d)||e.isString(d)){d=d.length;for(k=0;k<d;k++){f.value=k;c=h(b,a.body);if(c===e.breakResult)break;if(c instanceof e.ReturnResult)return c}return e.voidOperation}if(e.isImmutableArray(d)){for(k=
0;k<d.length();k++){f.value=k;c=h(b,a.body);if(c===e.breakResult)break;if(c instanceof e.ReturnResult)return c}return e.voidOperation}if(d instanceof x||d instanceof A)for(d=d.keys(),k=0;k<d.length;k++){f.value=d[k];c=h(b,a.body);if(c===e.breakResult)break;if(c instanceof e.ReturnResult)return c}else return e.voidOperation}function C(b,a,d,f){switch(a){case "\x3d":return b===e.voidOperation?null:b;case "/\x3d":return e.toNumber(d)/e.toNumber(b);case "*\x3d":return e.toNumber(d)*e.toNumber(b);case "-\x3d":return e.toNumber(d)-
e.toNumber(b);case "+\x3d":return e.isString(d)||e.isString(b)?e.toString(d)+e.toString(b):e.toNumber(d)+e.toNumber(b);case "%\x3d":return e.toNumber(d)%e.toNumber(b);default:throw Error(l.nodeErrorMessage(f,"RUNTIME","OPERATORNOTRECOGNISED"));}}function V(b,a,d){a=a.toLowerCase();switch(a){case "hasz":return b=b.hasZ,void 0===b?!1:b;case "hasm":return b=b.hasM,void 0===b?!1:b;case "spatialreference":return a=b.spatialReference._arcadeCacheId,void 0===a&&(d=!0,Object.freeze&&Object.isFrozen(b.spatialReference)&&
(d=!1),d&&(z++,a=b.spatialReference._arcadeCacheId=z)),b=new x({wkt:b.spatialReference.wkt,wkid:b.spatialReference.wkid}),void 0!==a&&(b._arcadeCacheId="SPREF"+a.toString()),b}switch(b.type){case "extent":switch(a){case "xmin":case "xmax":case "ymin":case "ymax":case "zmin":case "zmax":case "mmin":case "mmax":return b=b[a],void 0!==b?b:null;case "type":return"Extent"}break;case "polygon":switch(a){case "rings":return a=b.getCacheValue("_arcadeCacheId"),void 0===a&&(z++,a=z,b.setCacheValue("_arcadeCacheId",
a)),b=new M(b.rings,b.spatialReference,!0===b.hasZ,!0===b.hasM,a);case "type":return"Polygon"}break;case "point":switch(a){case "x":case "y":case "z":case "m":return void 0!==b[a]?b[a]:null;case "type":return"Point"}break;case "polyline":switch(a){case "paths":return a=b.getCacheValue("_arcadeCacheId"),void 0===a&&(z++,a=z,b.setCacheValue("_arcadeCacheId",a)),b=new M(b.paths,b.spatialReference,!0===b.hasZ,!0===b.hasM,a);case "type":return"Polyline"}break;case "multipoint":switch(a){case "points":return a=
b.getCacheValue("_arcadeCacheId"),void 0===a&&(z++,a=z,b.setCacheValue("_arcadeCacheId",a)),b=new fa(b.points,b.spatialReference,!0===b.hasZ,!0===b.hasM,a,1);case "type":return"Multipoint"}}throw Error(l.nodeErrorMessage(d,"RUNTIME","PROPERTYNOTFOUND"));}function va(b,a){try{var d=h(b,a.object);if(null===d)throw Error(l.nodeErrorMessage(a,"RUNTIME","NOTFOUND"));if(!1===a.computed){if("Identifier"===a.property.type){if(d instanceof x||d instanceof A)return d.field(a.property.name);if(d instanceof N)return V(d,
a.property.name,a)}throw Error(l.nodeErrorMessage(a,"RUNTIME","INVALIDTYPE"));}var f=h(b,a.property);if(d instanceof x||d instanceof A){if(e.isString(f))return d.field(f);throw Error(l.nodeErrorMessage(a,"RUNTIME","INVALIDTYPE"));}if(d instanceof N){if(e.isString(f))return V(d,f,a);throw Error(l.nodeErrorMessage(a,"RUNTIME","INVALIDTYPE"));}if(e.isArray(d)){if(e.isNumber(f)&&isFinite(f)&&Math.floor(f)===f){0>f&&(f=d.length+f);if(f>=d.length||0>f)throw Error(l.nodeErrorMessage(a,"RUNTIME","OUTOFBOUNDS"));
return d[f]}throw Error(l.nodeErrorMessage(a,"RUNTIME","INVALIDTYPE"));}if(e.isString(d)){if(e.isNumber(f)&&isFinite(f)&&Math.floor(f)===f){0>f&&(f=d.length+f);if(f>=d.length||0>f)throw Error(l.nodeErrorMessage(a,"RUNTIME","OUTOFBOUNDS"));return d[f]}throw Error(l.nodeErrorMessage(a,"RUNTIME","INVALIDTYPE"));}if(e.isImmutableArray(d)&&e.isNumber(f)&&isFinite(f)&&Math.floor(f)===f){0>f&&(f=d.length()+f);if(f>=d.length()||0>f)throw Error(l.nodeErrorMessage(a,"RUNTIME","OUTOFBOUNDS"));return d.get(f)}throw Error(l.nodeErrorMessage(a,
"RUNTIME","INVALIDTYPE"));}catch(c){throw c;}}function xa(b,a){try{var d=h(b,a.argument);if(e.isBoolean(d)){if("!"===a.operator)return!d;if("-"===a.operator)return-1*e.toNumber(d);if("+"===a.operator)return 1*e.toNumber(d);if("~"===a.operator)return~e.toNumber(d);throw Error(l.nodeErrorMessage(a,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"));}if("~"===a.operator)return~e.toNumber(d);if("-"===a.operator)return-1*e.toNumber(d);if("+"===a.operator)return 1*e.toNumber(d);throw Error(l.nodeErrorMessage(a,"RUNTIME",
"NOTSUPPORTEDUNARYOPERATOR"));}catch(f){throw f;}}function ya(b,a){try{var d=[h(b,a.left),h(b,a.right)],f=d[0],c=d[1];switch(a.operator){case "|":case "\x3c\x3c":case "\x3e\x3e":case "\x3e\x3e\x3e":case "^":case "\x26":return e.binaryOperator(e.toNumber(f),e.toNumber(c),a.operator);case "\x3d\x3d":return e.equalityTest(f,c);case "!\x3d":return!e.equalityTest(f,c);case "\x3c":return e.greaterThanLessThan(f,c,a.operator);case "\x3e":return e.greaterThanLessThan(f,c,a.operator);case "\x3c\x3d":return e.greaterThanLessThan(f,
c,a.operator);case "\x3e\x3d":return e.greaterThanLessThan(f,c,a.operator);case "+":return e.isString(f)||e.isString(c)?e.toString(f)+e.toString(c):e.toNumber(f)+e.toNumber(c);case "-":return e.toNumber(f)-e.toNumber(c);case "*":return e.toNumber(f)*e.toNumber(c);case "/":return e.toNumber(f)/e.toNumber(c);case "%":return e.toNumber(f)%e.toNumber(c);default:throw Error(l.nodeErrorMessage(a,"RUNTIME","OPERATORNOTRECOGNISED"));}}catch(k){throw k;}}function za(b,a){try{if("AssignmentExpression"===a.left.type||
"UpdateExpression"===a.left.type)throw Error(l.nodeErrorMessage(a.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));if("AssignmentExpression"===a.right.type||"UpdateExpression"===a.right.type)throw Error(l.nodeErrorMessage(a.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));var d=h(b,a.left);if(e.isBoolean(d))switch(a.operator){case "||":if(!0===d)return d;var f=h(b,a.right);if(e.isBoolean(f))return f;throw Error(l.nodeErrorMessage(a,"RUNTIME","ONLYORORAND"));case "\x26\x26":if(!1===d)return d;
f=h(b,a.right);if(e.isBoolean(f))return f;throw Error(l.nodeErrorMessage(a,"RUNTIME","ONLYORORAND"));default:throw Error(l.nodeErrorMessage(a,"RUNTIME","ONLYORORAND"));}throw Error(l.nodeErrorMessage(a,"RUNTIME","ONLYBOOLEAN"));}catch(c){throw c;}}function T(b,a){try{var d=a.name.toLowerCase();if(null!==b.localScope&&void 0!==b.localScope[d]){var f=b.localScope[d];if(!0===f.valueset)return f.value;f.value=h(b,f.node);f.valueset=!0;return f.value}if(void 0!==b.globalScope[d]){f=b.globalScope[d];if(!0===
f.valueset)return f.value;f.value=h(b,f.node);f.valueset=!0;return f.value}throw Error(l.nodeErrorMessage(a,"RUNTIME","VARIABLENOTFOUND"));}catch(c){throw c;}}function wa(b,a){try{if("Identifier"!==a.callee.type)throw Error(l.nodeErrorMessage(a,"RUNTIME","ONLYNODESSUPPORTED"));if(null!==b.localScope&&void 0!==b.localScope[a.callee.name.toLowerCase()]){var d=b.localScope[a.callee.name.toLowerCase()];if(d.value instanceof e.NativeFunction)return d.value.fn(b,a);if(d.value instanceof I)return W(b,a,
d.value.definition);throw Error(l.nodeErrorMessage(a,"RUNTIME","NOTAFUNCTION"));}if(void 0!==b.globalScope[a.callee.name.toLowerCase()]){d=b.globalScope[a.callee.name.toLowerCase()];if(d.value instanceof e.NativeFunction)return d.value.fn(b,a);if(d.value instanceof I)return W(b,a,d.value.definition);throw Error(l.nodeErrorMessage(a,"RUNTIME","NOTAFUNCTION"));}throw Error(l.nodeErrorMessage(a,"RUNTIME","NOTFOUND"));}catch(f){throw f;}}function X(b){return null==b?"":e.isArray(b)||e.isImmutableArray(b)?
"Array":e.isDate(b)?"Date":e.isString(b)?"String":e.isBoolean(b)?"Boolean":e.isNumber(b)?"Number":b instanceof ea?"Attachment":b instanceof da?"Portal":b instanceof x?"Dictionary":b instanceof A?"Feature":b instanceof qa?"Point":b instanceof ra?"Polygon":b instanceof sa?"Polyline":b instanceof pa?"Multipoint":b instanceof oa?"Extent":e.isFunctionParameter(b)?"Function":e.isFeatureSet(b)?"FeatureSet":e.isFeatureSetCollection(b)?"FeatureSetCollection":b===e.voidOperation?"":"number"===typeof b&&isNaN(b)?
"Number":"Unrecognised Type"}function Y(b,a,d,f){try{var c=h(b,a.arguments[d]);if(e.equalityTest(c,f))return h(b,a.arguments[d+1]);var k=a.arguments.length-d;return 1===k?h(b,a.arguments[d]):2===k?null:3===k?h(b,a.arguments[d+2]):Y(b,a,d+2,f)}catch(r){throw r;}}function Z(b,a,d,f){try{if(!0===f)return h(b,a.arguments[d+1]);if(3===a.arguments.length-d)return h(b,a.arguments[d+2]);var c=h(b,a.arguments[d+2]);if(!1===e.isBoolean(c))throw Error("WHEN needs boolean test conditions");return Z(b,a,d+2,c)}catch(k){throw k;
}}function E(b,a){var d=b.length,f=Math.floor(d/2);if(0===d)return[];if(1===d)return[b[0]];var c=E(b.slice(0,f),a);b=E(b.slice(f,d),a);for(d=[];0<c.length||0<b.length;)0<c.length&&0<b.length?(f=a(c[0],b[0]),isNaN(f)&&(f=0),0>=f?(d.push(c[0]),c=c.slice(1)):(d.push(b[0]),b=b.slice(1))):0<c.length?(d.push(c[0]),c=c.slice(1)):0<b.length&&(d.push(b[0]),b=b.slice(1));return d}function aa(b,a,d){try{var f=b.body;if(d.length!==b.params.length)throw Error("Invalid Parameter calls to function.");for(var c=
0;c<d.length;c++)a.localScope[b.params[c].name.toLowerCase()]={value:d[c],valueset:!0,node:null};var k=h(a,f);if(k instanceof e.ReturnResult)return k.value;if(k===e.breakResult)throw Error("Cannot Break from a Function");if(k===e.continueResult)throw Error("Cannot Continue from a Function");return k instanceof e.ImplicitResult?k.value:k}catch(r){throw r;}}function W(b,a,d){return u(b,a,function(f,c,k){f={spatialReference:b.spatialReference,globalScope:b.globalScope,depthCounter:b.depthCounter+1,console:b.console,
lrucache:b.lrucache,interceptor:b.interceptor,localScope:{}};if(64<f.depthCounter)throw Error("Exceeded maximum function depth");return aa(d,f,k)})}function ba(b){return function(){var a={spatialReference:b.context.spatialReference,console:b.context.console,lrucache:b.context.lrucache,interceptor:b.context.interceptor,localScope:{},depthCounter:b.context.depthCounter+1,globalScope:b.context.globalScope};if(64<a.depthCounter)throw Error("Exceeded maximum function depth");return aa(b.definition,a,arguments)}}
function Aa(b){console.log(b)}Object.defineProperty(q,"__esModule",{value:!0});q.findFunctionCalls=q.referencesFunction=q.referencesMember=q.validateScript=q.extractExpectedFieldLiterals=q.extractFieldLiterals=q.executeScript=q.extend=q.functionHelper=void 0;var z=0,p={};ha.registerFunctions(p,u);ia.registerFunctions(p,u);na.registerFunctions(p,u);la.registerFunctions(p,u);ja.registerFunctions(p,u);ma.registerFunctions(p,u);ka.registerFunctions(p,u);p["typeof"]=function(b,a){return u(b,a,function(d,
f,c){e.pcCheck(c,1,1);d=X(c[0]);if("Unrecognised Type"===d)throw Error("Unrecognised Type");return d})};p.iif=function(b,a){try{e.pcCheck(null===a.arguments?[]:a.arguments,3,3);var d=h(b,a.arguments[0]);if(!1===e.isBoolean(d))throw Error("IF Function must have a boolean test condition");var f=h(b,a.arguments[1]),c=h(b,a.arguments[2]);return!0===d?f:c}catch(k){throw k;}};p.decode=function(b,a){try{if(2>a.arguments.length)throw Error("Missing Parameters");if(2===a.arguments.length)return h(b,a.arguments[1]);
if(0===(a.arguments.length-1)%2)throw Error("Must have a default value result.");var d=h(b,a.arguments[0]);return Y(b,a,1,d)}catch(f){throw f;}};p.when=function(b,a){try{if(3>a.arguments.length)throw Error("Missing Parameters");if(0===a.arguments.length%2)throw Error("Must have a default value result.");var d=h(b,a.arguments[0]);if(!1===e.isBoolean(d))throw Error("WHEN needs boolean test conditions");return Z(b,a,0,d)}catch(f){throw f;}};p.top=function(b,a){return u(b,a,function(d,f,c){e.pcCheck(c,
2,2);if(e.isArray(c[0]))return e.toNumber(c[1])>=c[0].length?c[0].slice(0):c[0].slice(0,e.toNumber(c[1]));if(e.isImmutableArray(c[0]))return e.toNumber(c[1])>=c[0].length()?c[0].slice(0):c[0].slice(0,e.toNumber(c[1]));throw Error("Top cannot accept this parameter type");})};p.first=function(b,a){return u(b,a,function(d,f,c){e.pcCheck(c,1,1);return e.isArray(c[0])?0===c[0].length?null:c[0][0]:e.isImmutableArray(c[0])?0===c[0].length()?null:c[0].get(0):null})};p.sort=function(b,a){return u(b,a,function(d,
f,c){e.pcCheck(c,1,2);d=c[0];e.isImmutableArray(d)&&(d=d.toArray());if(!1===e.isArray(d))throw Error("Illegal Argument");if(1<c.length){if(!1===e.isFunctionParameter(c[1]))throw Error("Illegal Argument");var k=ba(c[1]);return d=E(d,function(t,n){return k(t,n)})}if(0===d.length)return[];c={};for(f=0;f<d.length;f++){var r=X(d[f]);""!==r&&(c[r]=!0)}if(!0===c.Array||!0===c.Dictionary||!0===c.Feature||!0===c.Point||!0===c.Polygon||!0===c.Polyline||!0===c.Multipoint||!0===c.Extent||!0===c.Function)return d.slice(0);
f=0;r="";for(var v in c)f++,r=v;return d=1<f||"String"===r?E(d,function(t,n){if(null===t||void 0===t||t===e.voidOperation)return null===n||void 0===n||n===e.voidOperation?0:1;if(null===n||void 0===n||n===e.voidOperation)return-1;t=e.toString(t);n=e.toString(n);return t<n?-1:t===n?0:1}):"Number"===r?E(d,function(t,n){return t-n}):"Boolean"===r?E(d,function(t,n){return t===n?0:n?-1:1}):"Date"===r?E(d,function(t,n){return n-t}):d.slice(0)})};for(var ca in p)p[ca]={value:new e.NativeFunction(p[ca]),valueset:!0,
node:null};var H=function(){};H.prototype=p;H.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null};H.prototype.pi={value:Math.PI,valueset:!0,node:null};q.functionHelper={fixSpatialReference:e.fixSpatialReference,parseArguments:O,standardFunction:u};q.extend=function(b){for(var a={mode:"sync",compiled:!1,functions:{},signatures:[],standardFunction:u,evaluateIdentifier:T,arcadeCustomFunctionHandler:ba},d=0;d<b.length;d++)b[d].registerFunctions(a);for(var f in a.functions)p[f]={value:new e.NativeFunction(a.functions[f]),
valueset:!0,node:null},H.prototype[f]=p[f];for(d=0;d<a.signatures.length;d++)l.addFunctionDeclaration(a.signatures[d],"async")};q.executeScript=function(b,a){var d=a.spatialReference;if(null===d||void 0===d)d=new ta({wkid:102100});var f=a.vars,c=a.customfunctions,k=new H;f||(f={});c||(c={});var r=new x({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});r.immutable=!1;k.textformatting={value:r,valueset:!0,node:null};for(var v in c)k[v]={value:new e.NativeFunction(c[v]),
native:!0,valueset:!0,node:null};for(v in f)k[v]=f[v]&&"esri.Graphic"===f[v].declaredClass?{value:A.createFromGraphic(f[v]),valueset:!0,node:null}:{value:f[v],valueset:!0,node:null};b=h({spatialReference:d,globalScope:k,localScope:null,console:a.console?a.console:Aa,lrucache:a.lrucache,interceptor:a.interceptor,depthCounter:1},b.body[0].body);b instanceof e.ReturnResult&&(b=b.value);b instanceof e.ImplicitResult&&(b=b.value);b===e.voidOperation&&(b=null);if(b===e.breakResult)throw Error("Cannot return BREAK");
if(b===e.continueResult)throw Error("Cannot return CONTINUE");if(b instanceof I)throw Error("Cannot return FUNCTION");if(b instanceof e.NativeFunction)throw Error("Cannot return FUNCTION");return b};q.extractFieldLiterals=function(b,a){void 0===a&&(a=!1);return l.findFieldLiterals(b)};q.extractExpectedFieldLiterals=function(b){return l.findExpectedFieldLiterals(b)};q.validateScript=function(b,a){return l.validateScript(b,a,"simple")};q.referencesMember=function(b,a){return l.referencesMember(b,a)};
q.referencesFunction=function(b,a){return l.referencesFunction(b,a)};q.findFunctionCalls=function(b){return l.findFunctionCalls(b)}});