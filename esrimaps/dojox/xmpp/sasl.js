//>>built
define("dojox/xmpp/sasl",["dojo","dijit","dojox","dojo/require!dojox/xmpp/util,dojo/AdapterRegistry,dojox/encoding/digests/MD5"],function(d,u,b){d.provide("dojox.xmpp.sasl");d.require("dojox.xmpp.util");d.require("dojo.AdapterRegistry");d.require("dojox.encoding.digests.MD5");b.xmpp.sasl.saslNS="urn:ietf:params:xml:ns:xmpp-sasl";d.declare("dojox.xmpp.sasl._Base",null,{mechanism:null,closeAuthTag:!0,constructor:function(a){this.session=a;this.startAuth()},startAuth:function(){var a=new b.string.Builder(b.xmpp.util.createElement("auth",
{xmlns:b.xmpp.sasl.saslNS,mechanism:this.mechanism},this.closeAuthTag));this.appendToAuth(a);this.session.dispatchPacket(a.toString())},appendToAuth:function(a){},onChallenge:function(a){if(this.first_challenge)this.onSecondChallenge(a);else this.first_challenge=!0,this.onFirstChallenge(a)},onFirstChallenge:function(){},onSecondChallenge:function(){},onSuccess:function(){this.session.sendRestart()}});d.declare("dojox.xmpp.sasl.SunWebClientAuth",b.xmpp.sasl._Base,{mechanism:"SUN-COMMS-CLIENT-PROXY-AUTH"});
d.declare("dojox.xmpp.sasl.Plain",b.xmpp.sasl._Base,{mechanism:"PLAIN",closeAuthTag:!1,appendToAuth:function(a){var c=this.session.jid,f=this.session.jid.indexOf("@");-1!=f&&(c=this.session.jid.substring(0,f));c=this.session.jid+"\x00"+c+"\x00"+this.session.password;c=b.xmpp.util.Base64.encode(c);a.append(c);a.append("\x3c/auth\x3e");delete this.session.password}});d.declare("dojox.xmpp.sasl.DigestMD5",b.xmpp.sasl._Base,{mechanism:"DIGEST-MD5",onFirstChallenge:function(a){var c=b.encoding.digests,
f=b.encoding.digests.outputTypes,h=function(p){return c.MD5(p,f.Hex)},e={realm:"",nonce:"",qop:"auth",maxbuf:65536};b.xmpp.util.Base64.decode(a.firstChild.nodeValue).replace(/([a-z]+)=([^,]+)/g,function(p,r,n){n=n.replace(/^"(.+)"$/,"$1");e[r]=n});var k="";switch(e.qop){case "auth-int":case "auth-conf":k=":00000000000000000000000000000000";case "auth":break;default:return!1}a=c.MD5(1234567890*Math.random(),f.Hex);var q="xmpp/"+this.session.domain,l=this.session.jid,g=this.session.jid.indexOf("@");
-1!=g&&(l=this.session.jid.substring(0,g));l=b.xmpp.util.encodeJid(l);var m=new b.string.Builder;m.append(c.MD5(l+":"+e.realm+":"+this.session.password,f.String),":",e.nonce+":"+a);delete this.session.password;k=":"+q+k;var t="AUTHENTICATE"+k;g=new b.string.Builder;g.append(h(m.toString()),":",e.nonce,":00000001:",a,":",e.qop,":");m=new b.string.Builder;m.append('username\x3d"',l,'",','realm\x3d"',e.realm,'",',"nonce\x3d",e.nonce,",",'cnonce\x3d"',a,'",','nc\x3d"00000001",qop\x3d"',e.qop,'",digest-uri\x3d"',
q,'",','response\x3d"',h(g.toString()+h(t)),'",charset\x3d"utf-8"');a=new b.string.Builder(b.xmpp.util.createElement("response",{xmlns:b.xmpp.xmpp.SASL_NS},!1));a.append(b.xmpp.util.Base64.encode(m.toString()));a.append("\x3c/response\x3e");this.rspauth=h(g.toString()+h(k));this.session.dispatchPacket(a.toString())},onSecondChallenge:function(a){a=b.xmpp.util.Base64.decode(a.firstChild.nodeValue);this.rspauth==a.substring(8)&&(a=new b.string.Builder(b.xmpp.util.createElement("response",{xmlns:b.xmpp.xmpp.SASL_NS},
!0)),this.session.dispatchPacket(a.toString()))}});b.xmpp.sasl.registry=new d.AdapterRegistry;b.xmpp.sasl.registry.register("SUN-COMMS-CLIENT-PROXY-AUTH",function(a){return"SUN-COMMS-CLIENT-PROXY-AUTH"==a},function(a,c){return new b.xmpp.sasl.SunWebClientAuth(c)});b.xmpp.sasl.registry.register("DIGEST-MD5",function(a){return"DIGEST-MD5"==a},function(a,c){return new b.xmpp.sasl.DigestMD5(c)});b.xmpp.sasl.registry.register("PLAIN",function(a){return"PLAIN"==a},function(a,c){return new b.xmpp.sasl.Plain(c)})});