(()=>{var xe={camera:{fov:42,near:.1,far:120,position:[0,2.15,10.6],target:[0,1.95,0]},tree:{height:4.7,radius:2.05,particles:92e3,garland:7e3,ornaments:240,starY:4.98},galaxy:{radius:7,centerY:1.95},photos:{featuredCount:8},greeting:{text:"悦悦，圣诞快乐！",sub:"愿这片极光替我记得，我们一起走过的每一程"},storageKey:"aurora-noel-settings-v1",hand:{wasmBase:"assets/mediapipe/wasm",model:"assets/mediapipe/hand_landmarker.task"}},vn=[{id:0,name:"极光",aurora:["#39f6e0","#2a5cff"],hint:"青蓝极光 · 雪夜森林"},{id:1,name:"雪夜",aurora:["#9b7bff","#ff5fa2"],hint:"紫粉极光 · 安静落雪"},{id:2,name:"暖星",aurora:["#ffd98a","#ff9d5c"],hint:"金色星屑 · 壁炉微光"}];var Gm=0,bd=1,Hm=2;var Do=1,Vm=2,_a=3,Zs=0,Ii=1,hn=2,ps=0,Js=1,Ei=2,Ed=3,Td=4,Wm=5;var yr=100,Xm=101,qm=102,$m=103,Ym=104,Km=200,Zm=201,Jm=202,jm=203,wd=204,Ad=205,Qm=206,t0=207,e0=208,i0=209,n0=210,s0=211,r0=212,a0=213,o0=214,ic=0,nc=1,sc=2,la=3,rc=4,ac=5,oc=6,lc=7,Rd=0,l0=1,c0=2,Gn=0,Fo=1,Uo=2,Oo=3,Sr=4,Bo=5,ko=6,zo=7;var Cd=300,Mr=301,va=302,Nc=303,Dc=304,cc=1e3,Fn=1001,hc=1002,ui=1003,h0=1004;var Go=1005;var Ci=1006,Fc=1007;var ms=1008;var Bi=1009,Pd=1010,Id=1011,xa=1012,Uc=1013,En=1014,Tn=1015,gi=1016,Oc=1017,Bc=1018,br=1020,Ld=35902,Nd=35899,Dd=1021,Fd=1022,wn=1023,hs=1026,gs=1027,Ud=1028,kc=1029,js=1030,zc=1031;var Gc=1033,Ho=33776,Vo=33777,Wo=33778,Xo=33779,Hc=35840,Vc=35841,Wc=35842,Xc=35843,qc=36196,$c=37492,Yc=37496,Kc=37488,Zc=37489,qo=37490,Jc=37491,jc=37808,Qc=37809,th=37810,eh=37811,ih=37812,nh=37813,sh=37814,rh=37815,ah=37816,oh=37817,lh=37818,ch=37819,hh=37820,uh=37821,dh=36492,fh=36494,ph=36495,mh=36283,gh=36284,$o=36285,_h=36286;var ho=2300,uc=2301,tc=2302,pd=2303,md=2400,gd=2401,_d=2402;var u0=3200;var vh=0,d0=1,_s="",$e="srgb",uo="srgb-linear",fo="linear",he="srgb";var ec=7680;var f0=519,p0=512,m0=513,g0=514,Od=515,_0=516,v0=517,Bd=518,kd=519,zd=35044;var Gd="300 es",ln=2e3,ca=2001;function ox(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function lx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function po(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function x0(){let i=po("canvas");return i.style.display="block",i}var fm={},ha=null;function mo(...i){let t="THREE."+i.shift();ha?ha("log",t,...i):console.log(t,...i)}function y0(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function zt(...i){i=y0(i);let t="THREE."+i.shift();if(ha)ha("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ht(...i){i=y0(i);let t="THREE."+i.shift();if(ha)ha("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function co(...i){let t=i.join(" ");t in fm||(fm[t]=!0,zt(...i))}function S0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var M0={[ic]:ic,[sc]:oc,[rc]:rc,[la]:ac,[nc]:nc,[oc]:sc,[lc]:lc,[ac]:la},Un=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Xu=Math.PI/180,dc=180/Math.PI;function Er(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Si[i&255]+Si[i>>8&255]+Si[i>>16&255]+Si[i>>24&255]+"-"+Si[t&255]+Si[t>>8&255]+"-"+Si[t>>16&15|64]+Si[t>>24&255]+"-"+Si[e&63|128]+Si[e>>8&255]+"-"+Si[e>>16&255]+Si[e>>24&255]+Si[n&255]+Si[n>>8&255]+Si[n>>16&255]+Si[n>>24&255]).toLowerCase()}function se(i,t,e){return Math.max(t,Math.min(e,i))}function cx(i,t){return(i%t+t)%t}function qu(i,t,e){return(1-e)*i+e*t}function b0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function E0(i,t){if(t.constructor===Float32Array)return i;let e=xh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function T0(i,t){if(t.constructor===Float32Array)return i;let e=xh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var qd=class qd{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qd.prototype.isVector2=!0;var wt=qd,On=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(d!==x||l!==u||c!==f||h!==g){let p=l*u+c*f+h*g+d*x;p<0&&(u=-u,f=-f,g=-g,x=-x,p=-p);let m=1-o;if(p<.9995){let M=Math.acos(p),A=Math.sin(M);m=Math.sin(m*M)/A,o=Math.sin(o*M)/A,l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+x*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+x*o;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},$d=class $d{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $u.copy(this).projectOnVector(t),this.sub($u)}reflect(t){return this.sub($u.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$d.prototype.isVector3=!0;var F=$d,$u=new F,pm=new On,Yd=class Yd{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=s[0],p=s[3],m=s[6],M=s[1],A=s[4],S=s[7],w=s[2],E=s[5],_=s[8];return r[0]=a*x+o*M+l*w,r[3]=a*p+o*A+l*E,r[6]=a*m+o*S+l*_,r[1]=c*x+h*M+d*w,r[4]=c*p+h*A+d*E,r[7]=c*m+h*S+d*_,r[2]=u*x+f*M+g*w,r[5]=u*p+f*A+g*E,r[8]=u*m+f*S+g*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return co("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yu.makeScale(t,e)),this}rotate(t){return co("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yu.makeRotation(-t)),this}translate(t,e){return co("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Yd.prototype.isMatrix3=!0;var Wt=Yd,Yu=new Wt,mm=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gm=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hx(){let i={enabled:!0,workingColorSpace:uo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===he&&(s.r=cs(s.r),s.g=cs(s.g),s.b=cs(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===he&&(s.r=oa(s.r),s.g=oa(s.g),s.b=oa(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_s?fo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[uo]:{primaries:t,whitePoint:n,transfer:fo,toXYZ:mm,fromXYZ:gm,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:n,transfer:he,toXYZ:mm,fromXYZ:gm,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),i}var te=hx();function cs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function oa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Wr,fc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Wr===void 0&&(Wr=po("canvas")),Wr.width=t.width,Wr.height=t.height;let s=Wr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Wr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=po("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=cs(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(cs(e[n]/255)*255):e[n]=cs(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ux=0,ua=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=Er(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ku(s[a].image)):r.push(Ku(s[a]))}else r=Ku(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ku(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var dx=0,Zu=new F,Pi=class i extends Un{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Fn,s=Fn,r=Ci,a=ms,o=wn,l=Bi,c=i.DEFAULT_ANISOTROPY,h=_s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=Er(),this.name="",this.source=new ua(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Zu).x}get height(){return this.source.getSize(Zu).y}get depth(){return this.source.getSize(Zu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cc:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case hc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cc:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case hc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Pi.DEFAULT_IMAGE=null;Pi.DEFAULT_MAPPING=Cd;Pi.DEFAULT_ANISOTROPY=1;var Kd=class Kd{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,S=(f+1)/2,w=(m+1)/2,E=(h+u)/4,_=(d+x)/4,b=(g+p)/4;return A>S&&A>w?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=E/n,r=_/n):S>w?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=E/s,r=b/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=_/r,s=b/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(d-x)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kd.prototype.isVector4=!0;var Ne=Kd,pc=class extends Un{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Pi({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ci,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ua(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ti=class extends pc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},go=class extends Pi{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ui,this.minFilter=ui,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var mc=class extends Pi{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ui,this.minFilter=ui,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Lc=class Lc{constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,x,p)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,x,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Xr.setFromMatrixColumn(t,0).length(),r=1/Xr.setFromMatrixColumn(t,1).length(),a=1/Xr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u+x*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u-x*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,x=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-x*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fx,t,px)}lookAt(t,e,n){let s=this.elements;return Xi.subVectors(t,e),Xi.lengthSq()===0&&(Xi.z=1),Xi.normalize(),Us.crossVectors(n,Xi),Us.lengthSq()===0&&(Math.abs(n.z)===1?Xi.x+=1e-4:Xi.z+=1e-4,Xi.normalize(),Us.crossVectors(n,Xi)),Us.normalize(),Cl.crossVectors(Xi,Us),s[0]=Us.x,s[4]=Cl.x,s[8]=Xi.x,s[1]=Us.y,s[5]=Cl.y,s[9]=Xi.y,s[2]=Us.z,s[6]=Cl.z,s[10]=Xi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],p=n[10],m=n[14],M=n[3],A=n[7],S=n[11],w=n[15],E=s[0],_=s[4],b=s[8],D=s[12],P=s[1],L=s[5],U=s[9],k=s[13],C=s[2],H=s[6],X=s[10],G=s[14],Q=s[3],W=s[7],j=s[11],tt=s[15];return r[0]=a*E+o*P+l*C+c*Q,r[4]=a*_+o*L+l*H+c*W,r[8]=a*b+o*U+l*X+c*j,r[12]=a*D+o*k+l*G+c*tt,r[1]=h*E+d*P+u*C+f*Q,r[5]=h*_+d*L+u*H+f*W,r[9]=h*b+d*U+u*X+f*j,r[13]=h*D+d*k+u*G+f*tt,r[2]=g*E+x*P+p*C+m*Q,r[6]=g*_+x*L+p*H+m*W,r[10]=g*b+x*U+p*X+m*j,r[14]=g*D+x*k+p*G+m*tt,r[3]=M*E+A*P+S*C+w*Q,r[7]=M*_+A*L+S*H+w*W,r[11]=M*b+A*U+S*X+w*j,r[15]=M*D+A*k+S*G+w*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],x=t[7],p=t[11],m=t[15],M=l*f-c*u,A=o*f-c*d,S=o*u-l*d,w=a*f-c*h,E=a*u-l*h,_=a*d-o*h;return e*(x*M-p*A+m*S)-n*(g*M-p*w+m*E)+s*(g*A-x*w+m*_)-r*(g*S-x*E+p*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],x=t[13],p=t[14],m=t[15],M=e*o-n*a,A=e*l-s*a,S=e*c-r*a,w=n*l-s*o,E=n*c-r*o,_=s*c-r*l,b=h*x-d*g,D=h*p-u*g,P=h*m-f*g,L=d*p-u*x,U=d*m-f*x,k=u*m-f*p,C=M*k-A*U+S*L+w*P-E*D+_*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/C;return t[0]=(o*k-l*U+c*L)*H,t[1]=(s*U-n*k-r*L)*H,t[2]=(x*_-p*E+m*w)*H,t[3]=(u*E-d*_-f*w)*H,t[4]=(l*P-a*k-c*D)*H,t[5]=(e*k-s*P+r*D)*H,t[6]=(p*S-g*_-m*A)*H,t[7]=(h*_-u*S+f*A)*H,t[8]=(a*U-o*P+c*b)*H,t[9]=(n*P-e*U-r*b)*H,t[10]=(g*E-x*S+m*M)*H,t[11]=(d*S-h*E-f*M)*H,t[12]=(o*D-a*L-l*b)*H,t[13]=(e*L-n*D+s*b)*H,t[14]=(x*A-g*w-p*M)*H,t[15]=(h*w-d*A+u*M)*H,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,x=a*h,p=a*d,m=o*d,M=l*c,A=l*h,S=l*d,w=n.x,E=n.y,_=n.z;return s[0]=(1-(x+m))*w,s[1]=(f+S)*w,s[2]=(g-A)*w,s[3]=0,s[4]=(f-S)*E,s[5]=(1-(u+m))*E,s[6]=(p+M)*E,s[7]=0,s[8]=(g+A)*_,s[9]=(p-M)*_,s[10]=(1-(u+x))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Xr.set(s[0],s[1],s[2]).length(),o=Xr.set(s[4],s[5],s[6]).length(),l=Xr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),xn.copy(this);let c=1/a,h=1/o,d=1/l;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=d,xn.elements[9]*=d,xn.elements[10]*=d,e.setFromRotationMatrix(xn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=ln,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===ln)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ca)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ln,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===ln)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===ca)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Lc.prototype.isMatrix4=!0;var Te=Lc,Xr=new F,xn=new Te,fx=new F(0,0,0),px=new F(1,1,1),Us=new F,Cl=new F,Xi=new F,_m=new Te,vm=new On,us=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _m.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_m,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vm.setFromEuler(this),this.setFromQuaternion(vm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};us.DEFAULT_ORDER="XYZ";var _o=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},mx=0,xm=new F,qr=new On,ns=new Te,Pl=new F,io=new F,gx=new F,_x=new On,ym=new F(1,0,0),Sm=new F(0,1,0),Mm=new F(0,0,1),bm={type:"added"},vx={type:"removed"},$r={type:"childadded",child:null},Ju={type:"childremoved",child:null},mi=class i extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=Er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new us,n=new On,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Te},normalMatrix:{value:new Wt}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qr.setFromAxisAngle(t,e),this.quaternion.multiply(qr),this}rotateOnWorldAxis(t,e){return qr.setFromAxisAngle(t,e),this.quaternion.premultiply(qr),this}rotateX(t){return this.rotateOnAxis(ym,t)}rotateY(t){return this.rotateOnAxis(Sm,t)}rotateZ(t){return this.rotateOnAxis(Mm,t)}translateOnAxis(t,e){return xm.copy(t).applyQuaternion(this.quaternion),this.position.add(xm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ym,t)}translateY(t){return this.translateOnAxis(Sm,t)}translateZ(t){return this.translateOnAxis(Mm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ns.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Pl.copy(t):Pl.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ns.lookAt(io,Pl,this.up):ns.lookAt(Pl,io,this.up),this.quaternion.setFromRotationMatrix(ns),s&&(ns.extractRotation(s.matrixWorld),qr.setFromRotationMatrix(ns),this.quaternion.premultiply(qr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bm),$r.child=t,this.dispatchEvent($r),$r.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vx),Ju.child=t,this.dispatchEvent(Ju),Ju.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ns.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ns.multiply(t.parent.matrixWorld)),t.applyMatrix4(ns),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bm),$r.child=t,this.dispatchEvent($r),$r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,t,gx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,_x,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};mi.DEFAULT_UP=new F(0,1,0);mi.DEFAULT_MATRIX_AUTO_UPDATE=!0;mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $i=class extends mi{constructor(){super(),this.isGroup=!0,this.type="Group"}},xx={type:"move"},da=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $i;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},w0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Os={h:0,s:0,l:0},Il={h:0,s:0,l:0};function ju(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Nt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=cx(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ju(a,r,t+1/3),this.g=ju(a,r,t),this.b=ju(a,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){let n=w0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}copyLinearToSRGB(t){return this.r=oa(t.r),this.g=oa(t.g),this.b=oa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return te.workingToColorSpace(Mi.copy(this),t),Math.round(se(Mi.r*255,0,255))*65536+Math.round(se(Mi.g*255,0,255))*256+Math.round(se(Mi.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Mi.copy(this),e);let n=Mi.r,s=Mi.g,r=Mi.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Mi.copy(this),e),t.r=Mi.r,t.g=Mi.g,t.b=Mi.b,t}getStyle(t=$e){te.workingToColorSpace(Mi.copy(this),t);let e=Mi.r,n=Mi.g,s=Mi.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Os),this.setHSL(Os.h+t,Os.s+e,Os.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Os),t.getHSL(Il);let n=qu(Os.h,Il.h,e),s=qu(Os.s,Il.s,e),r=qu(Os.l,Il.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mi=new Nt;Nt.NAMES=w0;var vo=class extends mi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new us,this.environmentIntensity=1,this.environmentRotation=new us,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},yn=new F,ss=new F,Qu=new F,rs=new F,Yr=new F,Kr=new F,Em=new F,td=new F,ed=new F,id=new F,nd=new Ne,sd=new Ne,rd=new Ne,ls=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),yn.subVectors(t,e),s.cross(yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){yn.subVectors(s,e),ss.subVectors(n,e),Qu.subVectors(t,e);let a=yn.dot(yn),o=yn.dot(ss),l=yn.dot(Qu),c=ss.dot(ss),h=ss.dot(Qu),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,rs)===null?!1:rs.x>=0&&rs.y>=0&&rs.x+rs.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,rs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,rs.x),l.addScaledVector(a,rs.y),l.addScaledVector(o,rs.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return nd.setScalar(0),sd.setScalar(0),rd.setScalar(0),nd.fromBufferAttribute(t,e),sd.fromBufferAttribute(t,n),rd.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(nd,r.x),a.addScaledVector(sd,r.y),a.addScaledVector(rd,r.z),a}static isFrontFacing(t,e,n,s){return yn.subVectors(n,e),ss.subVectors(t,e),yn.cross(ss).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),ss.subVectors(this.a,this.b),yn.cross(ss).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Yr.subVectors(s,n),Kr.subVectors(r,n),td.subVectors(t,n);let l=Yr.dot(td),c=Kr.dot(td);if(l<=0&&c<=0)return e.copy(n);ed.subVectors(t,s);let h=Yr.dot(ed),d=Kr.dot(ed);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(Yr,a);id.subVectors(t,r);let f=Yr.dot(id),g=Kr.dot(id);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Kr,o);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return Em.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Em,o);let m=1/(p+x+u);return a=x*m,o=u*m,e.copy(n).addScaledVector(Yr,a).addScaledVector(Kr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gs=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Sn):Sn.fromBufferAttribute(r,a),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ll.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ll.copy(n.boundingBox)),Ll.applyMatrix4(t.matrixWorld),this.union(Ll)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(no),Nl.subVectors(this.max,no),Zr.subVectors(t.a,no),Jr.subVectors(t.b,no),jr.subVectors(t.c,no),Bs.subVectors(Jr,Zr),ks.subVectors(jr,Jr),fr.subVectors(Zr,jr);let e=[0,-Bs.z,Bs.y,0,-ks.z,ks.y,0,-fr.z,fr.y,Bs.z,0,-Bs.x,ks.z,0,-ks.x,fr.z,0,-fr.x,-Bs.y,Bs.x,0,-ks.y,ks.x,0,-fr.y,fr.x,0];return!ad(e,Zr,Jr,jr,Nl)||(e=[1,0,0,0,1,0,0,0,1],!ad(e,Zr,Jr,jr,Nl))?!1:(Dl.crossVectors(Bs,ks),e=[Dl.x,Dl.y,Dl.z],ad(e,Zr,Jr,jr,Nl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(as[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),as[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),as[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),as[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),as[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),as[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),as[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),as[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(as),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},as=[new F,new F,new F,new F,new F,new F,new F,new F],Sn=new F,Ll=new Gs,Zr=new F,Jr=new F,jr=new F,Bs=new F,ks=new F,fr=new F,no=new F,Nl=new F,Dl=new F,pr=new F;function ad(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){pr.fromArray(i,r);let o=s.x*Math.abs(pr.x)+s.y*Math.abs(pr.y)+s.z*Math.abs(pr.z),l=t.dot(pr),c=e.dot(pr),h=n.dot(pr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var qe=new F,Fl=new wt,yx=0,pe=class extends Un{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zd,this.updateRanges=[],this.gpuType=Tn,this.version=0,this._normalizationScale=t!==void 0?xh(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fl.fromBufferAttribute(this,e),Fl.applyMatrix3(t),this.setXY(e,Fl.x,Fl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):E0(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):T0(t,this.array)}};var xo=class extends pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var yo=class extends pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var be=class extends pe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Sx=new Gs,so=new F,od=new F,Bn=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Sx.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;so.subVectors(t,this.center);let e=so.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(so,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(od.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(so.copy(t.center).add(od)),this.expandByPoint(so.copy(t.center).sub(od))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Mx=0,on=new Te,ld=new mi,Qr=new F,qi=new Gs,ro=new Gs,hi=new F,He=class i extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=Er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ox(t)?yo:xo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return ld.lookAt(t),ld.updateMatrix(),this.applyMatrix4(ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new be(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];qi.setFromBufferAttribute(r),this.morphTargetsRelative?(hi.addVectors(this.boundingBox.min,qi.min),this.boundingBox.expandByPoint(hi),hi.addVectors(this.boundingBox.max,qi.max),this.boundingBox.expandByPoint(hi)):(this.boundingBox.expandByPoint(qi.min),this.boundingBox.expandByPoint(qi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(qi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ro.setFromBufferAttribute(o),this.morphTargetsRelative?(hi.addVectors(qi.min,ro.min),qi.expandByPoint(hi),hi.addVectors(qi.max,ro.max),qi.expandByPoint(hi)):(qi.expandByPoint(ro.min),qi.expandByPoint(ro.max))}qi.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)hi.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(hi));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)hi.fromBufferAttribute(o,c),l&&(Qr.fromBufferAttribute(t,c),hi.add(Qr)),s=Math.max(s,n.distanceToSquared(hi))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new pe(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new F,l[D]=new F;let h=new F,d=new F,u=new F,f=new wt,g=new wt,x=new wt,p=new F,m=new F;function M(D,P,L){c[D]=c[P]=c[L]=1,h.fromBufferAttribute(n,D),d.fromBufferAttribute(n,P),u.fromBufferAttribute(n,L),f.fromBufferAttribute(r,D),g.fromBufferAttribute(r,P),x.fromBufferAttribute(r,L),d.sub(h),u.sub(h),g.sub(f),x.sub(f);let U=1/(g.x*x.y-x.x*g.y);isFinite(U)&&(p.copy(d).multiplyScalar(x.y).addScaledVector(u,-g.y).multiplyScalar(U),m.copy(u).multiplyScalar(g.x).addScaledVector(d,-x.x).multiplyScalar(U),o[D].add(p),o[P].add(p),o[L].add(p),l[D].add(m),l[P].add(m),l[L].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let D=0,P=A.length;D<P;++D){let L=A[D],U=L.start,k=L.count;for(let C=U,H=U+k;C<H;C+=3)M(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let S=new F,w=new F,E=new F,_=new F;function b(D){E.fromBufferAttribute(s,D),_.copy(E);let P=o[D];S.copy(P),S.sub(E.multiplyScalar(E.dot(P))).normalize(),w.crossVectors(_,P);let U=w.dot(l[D])<0?-1:1;a.setXYZW(D,S.x,S.y,S.z,U)}for(let D=0,P=n.count;D<P;++D)c[D]&&b(D);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,d=new F;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),x=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)hi.fromBufferAttribute(t,e),hi.normalize(),t.setXYZ(e,hi.x,hi.y,hi.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new pe(u,h,d)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},gc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=zd,this.updateRanges=[],this.version=0,this.uuid=Er()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Tm(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Tm(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Tm(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Er()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Ri=new F,So=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?xh(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ri.fromBufferAttribute(this,e),Ri.applyMatrix4(t),this.setXYZ(e,Ri.x,Ri.y,Ri.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ri.fromBufferAttribute(this,e),Ri.applyNormalMatrix(t),this.setXYZ(e,Ri.x,Ri.y,Ri.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ri.fromBufferAttribute(this,e),Ri.transformDirection(t),this.setXYZ(e,Ri.x,Ri.y,Ri.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){mo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){mo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):E0(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):T0(t,this.data.array)}},cd=new F,bx=new F,Ex=new Wt,Mn=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=cd.subVectors(n,e).cross(bx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(cd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ex.getNormalMatrix(t),s=this.coplanarPoint(cd).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Tx=0,kn=class extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=Er(),this.name="",this.type="Material",this.blending=Js,this.side=Zs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wd,this.blendDst=Ad,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=la,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=f0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ec,this.stencilZFail=ec,this.stencilZPass=ec,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Nt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Mn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new wt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new wt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},zn=class extends kn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ta,ao=new F,ea=new F,ia=new F,na=new wt,oo=new wt,A0=new Te,Ul=new F,lo=new F,Ol=new F,wm=new wt,hd=new wt,Am=new wt,ds=class extends mi{constructor(t=new zn){if(super(),this.isSprite=!0,this.type="Sprite",ta===void 0){ta=new He;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new gc(e,5);ta.setIndex([0,1,2,0,2,3]),ta.setAttribute("position",new So(n,3,0,!1)),ta.setAttribute("uv",new So(n,2,3,!1))}this.geometry=ta,this.material=t,this.center=new wt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ht('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ea.setFromMatrixScale(this.matrixWorld),A0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ia.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ea.multiplyScalar(-ia.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Bl(Ul.set(-.5,-.5,0),ia,a,ea,s,r),Bl(lo.set(.5,-.5,0),ia,a,ea,s,r),Bl(Ol.set(.5,.5,0),ia,a,ea,s,r),wm.set(0,0),hd.set(1,0),Am.set(1,1);let o=t.ray.intersectTriangle(Ul,lo,Ol,!1,ao);if(o===null&&(Bl(lo.set(-.5,.5,0),ia,a,ea,s,r),hd.set(0,1),o=t.ray.intersectTriangle(Ul,Ol,lo,!1,ao),o===null))return;let l=t.ray.origin.distanceTo(ao);l<t.near||l>t.far||e.push({distance:l,point:ao.clone(),uv:ls.getInterpolation(ao,Ul,lo,Ol,wm,hd,Am,new wt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Bl(i,t,e,n,s,r){na.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(oo.x=r*na.x-s*na.y,oo.y=s*na.x+r*na.y):oo.copy(na),i.copy(t),i.x+=oo.x,i.y+=oo.y,i.applyMatrix4(A0)}var os=new F,ud=new F,kl=new F,zl=new F,Mo=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,os)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=os.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(os.copy(this.origin).addScaledVector(this.direction,e),os.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ud.copy(t).add(e).multiplyScalar(.5),kl.copy(e).sub(t).normalize(),zl.copy(this.origin).sub(ud);let r=t.distanceTo(e)*.5,a=-this.direction.dot(kl),o=zl.dot(this.direction),l=-zl.dot(kl),c=zl.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ud).addScaledVector(kl,u),f}intersectSphere(t,e){if(t.radius<0)return null;os.subVectors(t.center,this.origin);let n=os.dot(this.direction),s=os.dot(os)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,os)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,x=e.y-a.y,p=e.z-a.z,m=n.x-a.x,M=n.y-a.y,A=n.z-a.z,S=Math.abs(l),w=Math.abs(c),E=Math.abs(h),_,b,D,P,L,U,k,C,H,X,G,Q;if(S>=w&&S>=E?(D=l,U=d,H=g,Q=m,l>=0?(_=c,b=h,P=u,L=f,k=x,C=p,X=M,G=A):(_=h,b=c,P=f,L=u,k=p,C=x,X=A,G=M)):w>=E?(D=c,U=u,H=x,Q=M,c>=0?(_=h,b=l,P=f,L=d,k=p,C=g,X=A,G=m):(_=l,b=h,P=d,L=f,k=g,C=p,X=m,G=A)):(D=h,U=f,H=p,Q=A,h>=0?(_=l,b=c,P=d,L=u,k=g,C=x,X=m,G=M):(_=c,b=l,P=u,L=d,k=x,C=g,X=M,G=m)),D===0)return null;let W=_/D,j=b/D,tt=1/D,yt=P-W*U,Gt=L-j*U,Y=k-W*H,mt=C-j*H,St=X-W*Q,Ut=G-j*Q,nt=St*mt-Ut*Y,Vt=yt*Ut-Gt*St,Pe=Y*Gt-mt*yt;if(s){if(nt<0||Vt<0||Pe<0)return null}else if((nt<0||Vt<0||Pe<0)&&(nt>0||Vt>0||Pe>0))return null;let kt=nt+Vt+Pe;if(kt===0)return null;let ge=tt*(nt*U+Vt*H+Pe*Q);return(kt>0?ge<0:ge>0)?null:this.at(ge/kt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},cn=class extends kn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new us,this.combine=Rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Rm=new Te,mr=new Mo,Gl=new Bn,Cm=new F,Hl=new F,Vl=new F,Wl=new F,dd=new F,Xl=new F,Pm=new F,ql=new F,ye=class extends mi{constructor(t=new He,e=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Xl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(dd.fromBufferAttribute(d,t),a?Xl.addScaledVector(dd,h):Xl.addScaledVector(dd.sub(e),h))}e.add(Xl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gl.copy(n.boundingSphere),Gl.applyMatrix4(r),mr.copy(t.ray).recast(t.near),!(Gl.containsPoint(mr.origin)===!1&&(mr.intersectSphere(Gl,Cm)===null||mr.origin.distanceToSquared(Cm)>(t.far-t.near)**2))&&(Rm.copy(r).invert(),mr.copy(t.ray).applyMatrix4(Rm),!(n.boundingBox!==null&&mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,mr)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let p=u[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),A=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let S=M,w=A;S<w;S+=3){let E=o.getX(S),_=o.getX(S+1),b=o.getX(S+2);s=$l(this,m,t,n,c,h,d,E,_,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let M=o.getX(p),A=o.getX(p+1),S=o.getX(p+2);s=$l(this,a,t,n,c,h,d,M,A,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let p=u[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),A=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let S=M,w=A;S<w;S+=3){let E=S,_=S+1,b=S+2;s=$l(this,m,t,n,c,h,d,E,_,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let M=p,A=p+1,S=p+2;s=$l(this,a,t,n,c,h,d,M,A,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function wx(i,t,e,n,s,r,a,o){let l;if(t.side===Ii?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Zs,o),l===null)return null;ql.copy(o),ql.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ql);return c<e.near||c>e.far?null:{distance:c,point:ql.clone(),object:i}}function $l(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Hl),i.getVertexPosition(l,Vl),i.getVertexPosition(c,Wl);let h=wx(i,t,e,n,Hl,Vl,Wl,Pm);if(h){let d=new F;ls.getBarycoord(Pm,Hl,Vl,Wl,d),s&&(h.uv=ls.getInterpolatedAttribute(s,o,l,c,d,new wt)),r&&(h.uv1=ls.getInterpolatedAttribute(r,o,l,c,d,new wt)),a&&(h.normal=ls.getInterpolatedAttribute(a,o,l,c,d,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new F,materialIndex:0};ls.getNormal(Hl,Vl,Wl,u.normal),h.face=u,h.barycoord=d}return h}var _c=class extends Pi{constructor(t=null,e=1,n=1,s,r,a,o,l,c=ui,h=ui,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gr=new Bn,Ax=new wt(.5,.5),Yl=new F,Hs=class{constructor(t=new Mn,e=new Mn,n=new Mn,s=new Mn,r=new Mn,a=new Mn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ln,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],x=r[9],p=r[10],m=r[11],M=r[12],A=r[13],S=r[14],w=r[15];if(s[0].setComponents(c-a,f-h,m-g,w-M).normalize(),s[1].setComponents(c+a,f+h,m+g,w+M).normalize(),s[2].setComponents(c+o,f+d,m+x,w+A).normalize(),s[3].setComponents(c-o,f-d,m-x,w-A).normalize(),n)s[4].setComponents(l,u,p,S).normalize(),s[5].setComponents(c-l,f-u,m-p,w-S).normalize();else if(s[4].setComponents(c-l,f-u,m-p,w-S).normalize(),e===ln)s[5].setComponents(c+l,f+u,m+p,w+S).normalize();else if(e===ca)s[5].setComponents(l,u,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(t){gr.center.set(0,0,0);let e=Ax.distanceTo(t.center);return gr.radius=.7071067811865476+e,gr.applyMatrix4(t.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Yl.x=s.normal.x>0?t.max.x:t.min.x,Yl.y=s.normal.y>0?t.max.y:t.min.y,Yl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Yl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Im=new Te,vc=class i{constructor(){this.coordinateSystem=ln,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Im.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Hs),n[s].setFromProjectionMatrix(Im,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Hs),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var fa=class extends kn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Lm=new Te,vd=new Mo,Kl=new Bn,Zl=new F,Vs=class extends mi{constructor(t=new He,e=new fa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kl.copy(n.boundingSphere),Kl.applyMatrix4(s),Kl.radius+=r,t.ray.intersectsSphere(Kl)===!1)return;Lm.copy(s).invert(),vd.copy(t.ray).applyMatrix4(Lm);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,x=f;g<x;g++){let p=c.getX(g);Zl.fromBufferAttribute(d,p),Nm(Zl,p,l,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,x=f;g<x;g++)Zl.fromBufferAttribute(d,g),Nm(Zl,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Nm(i,t,e,n,s,r,a){let o=vd.distanceSqToPoint(i);if(o<e){let l=new F;vd.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var bo=class extends Pi{constructor(t=[],e=Mr,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},_r=class extends Pi{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fs=class extends Pi{constructor(t,e,n=En,s,r,a,o=ui,l=ui,c,h=hs,d=1){if(h!==hs&&h!==gs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ua(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Eo=class extends fs{constructor(t,e=En,n=Mr,s,r,a=ui,o=ui,l,c=hs){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},To=class extends Pi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ws=class i extends He{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(d,2));function g(x,p,m,M,A,S,w,E,_,b,D){let P=S/_,L=w/b,U=S/2,k=w/2,C=E/2,H=_+1,X=b+1,G=0,Q=0,W=new F;for(let j=0;j<X;j++){let tt=j*L-k;for(let yt=0;yt<H;yt++){let Gt=yt*P-U;W[x]=Gt*M,W[p]=tt*A,W[m]=C,c.push(W.x,W.y,W.z),W[x]=0,W[p]=0,W[m]=E>0?1:-1,h.push(W.x,W.y,W.z),d.push(yt/_),d.push(1-j/b),G+=1}}for(let j=0;j<b;j++)for(let tt=0;tt<_;tt++){let yt=u+tt+H*j,Gt=u+tt+H*(j+1),Y=u+(tt+1)+H*(j+1),mt=u+(tt+1)+H*j;l.push(yt,Gt,mt),l.push(Gt,Y,mt),Q+=6}o.addGroup(f,Q,D),f+=Q,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Xs=class i extends He{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new F,h=new wt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new be(a,3)),this.setAttribute("normal",new be(o,3)),this.setAttribute("uv",new be(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},wo=class i extends He{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,x=[],p=n/2,m=0;M(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new be(d,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(f,2));function M(){let S=new F,w=new F,E=0,_=(e-t)/n;for(let b=0;b<=r;b++){let D=[],P=b/r,L=P*(e-t)+t;for(let U=0;U<=s;U++){let k=U/s,C=k*l+o,H=Math.sin(C),X=Math.cos(C);w.x=L*H,w.y=-P*n+p,w.z=L*X,d.push(w.x,w.y,w.z),S.set(H,_,X).normalize(),u.push(S.x,S.y,S.z),f.push(k,1-P),D.push(g++)}x.push(D)}for(let b=0;b<s;b++)for(let D=0;D<r;D++){let P=x[D][b],L=x[D+1][b],U=x[D+1][b+1],k=x[D][b+1];(t>0||D!==0)&&(h.push(P,L,k),E+=3),(e>0||D!==r-1)&&(h.push(L,U,k),E+=3)}c.addGroup(m,E,0),m+=E}function A(S){let w=g,E=new wt,_=new F,b=0,D=S===!0?t:e,P=S===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,p*P,0),u.push(0,P,0),f.push(.5,.5),g++;let L=g;for(let U=0;U<=s;U++){let C=U/s*l+o,H=Math.cos(C),X=Math.sin(C);_.x=D*X,_.y=p*P,_.z=D*H,d.push(_.x,_.y,_.z),u.push(0,P,0),E.x=H*.5+.5,E.y=X*.5*P+.5,f.push(E.x,E.y),g++}for(let U=0;U<s;U++){let k=w+U,C=L+U;S===!0?h.push(C,C+1,k):h.push(C+1,C,k),b+=3}c.addGroup(m,b,S===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var qs=class i extends He{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let M=m*u-a;for(let A=0;A<c;A++){let S=A*d-r;g.push(S,-M,0),x.push(0,0,1),p.push(A/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let A=M+c*m,S=M+c*(m+1),w=M+1+c*(m+1),E=M+1+c*m;f.push(A,S,E),f.push(S,w,E)}this.setIndex(f),this.setAttribute("position",new be(g,3)),this.setAttribute("normal",new be(x,3)),this.setAttribute("uv",new be(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ao=class i extends He{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new F,g=new wt;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){let m=r+p/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let x=0;x<s;x++){let p=x*(n+1);for(let m=0;m<n;m++){let M=m+p,A=M,S=M+n+1,w=M+n+2,E=M+1;o.push(A,S,E),o.push(S,w,E)}}this.setIndex(o),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(c,3)),this.setAttribute("uv",new be(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function Tr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Dm(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Dm(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ti(i){let t={};for(let e=0;e<i.length;e++){let n=Tr(i[e]);for(let s in n)t[s]=n[s]}return t}function Dm(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Rx(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hd(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var vs={clone:Tr,merge:Ti},Cx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Px=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Be=class extends kn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cx,this.fragmentShader=Px,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Tr(t.uniforms),this.uniformsGroups=Rx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Nt().setHex(s.value);break;case"v2":this.uniforms[n].value=new wt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ne().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Wt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Te().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},pa=class extends Be{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},bn=class extends kn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vh,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new us,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var xc=class extends kn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yc=class extends kn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function sa(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Jl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var $s=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let a;i:{n:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break n;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break e}a=e.length;break i}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break e}a=n,n=0;break i}break t}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Sc=class extends $s{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:md,endingEnd:md}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case gd:r=t,o=2*e-n;break;case _d:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gd:a=t,l=2*n-e;break;case _d:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,p=x*g,m=-u*p+2*u*x-u*g,M=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*g+1,A=(-1-f)*p+(1.5+f)*x+.5*g,S=f*p-f*x;for(let w=0;w!==o;++w)r[w]=m*a[h+w]+M*a[c+w]+A*a[l+w]+S*a[d+w];return r}},Mc=class extends $s{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},bc=class extends $s{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ec=class extends $s{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),x=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*x+a[l+p]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let x=a[c+g],p=a[l+g],m=f*u+g*2,M=d[m],A=d[m+1],S=t*u+g*2,w=h[S],E=h[S+1],_=Lx(n,e,M,w,s);r[g]=R0(_,x,A,E,p)}return r}};function R0(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Ix(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Lx(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=R0(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Ix(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Yi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=sa(e,this.TimeBufferType),this.values=sa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:sa(t.times,Array),values:sa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Jl(t.settings)&&(n.settings={inTangents:sa(t.settings.inTangents,Array),outTangents:sa(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new bc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Sc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ec(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ho:e=this.InterpolantFactoryMethodDiscrete;break;case uc:e=this.InterpolantFactoryMethodLinear;break;case tc:e=this.InterpolantFactoryMethodSmooth;break;case pd:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ho;case this.InterpolantFactoryMethodLinear:return uc;case this.InterpolantFactoryMethodSmooth:return tc;case this.InterpolantFactoryMethodBezier:return pd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Jl(this.settings)&&(Fm(this.settings.inTangents,t),Fm(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Jl(this.settings)&&(Um(this.settings.inTangents,t),Um(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ht("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ht("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&lx(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ht("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===tc,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let x=e[d+g];if(x!==e[u+g]||x!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Jl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Fm(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Um(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Yi.prototype.ValueTypeName="";Yi.prototype.TimeBufferType=Float32Array;Yi.prototype.ValueBufferType=Float32Array;Yi.prototype.DefaultInterpolation=uc;var Ys=class extends Yi{constructor(t,e,n){super(t,e,n)}};Ys.prototype.ValueTypeName="bool";Ys.prototype.ValueBufferType=Array;Ys.prototype.DefaultInterpolation=ho;Ys.prototype.InterpolantFactoryMethodLinear=void 0;Ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Tc=class extends Yi{constructor(t,e,n,s){super(t,e,n,s)}};Tc.prototype.ValueTypeName="color";var wc=class extends Yi{constructor(t,e,n,s){super(t,e,n,s)}};wc.prototype.ValueTypeName="number";var Ac=class extends $s{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)On.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ro=class extends Yi{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ac(this.times,this.values,this.getValueSize(),t)}};Ro.prototype.ValueTypeName="quaternion";Ro.prototype.InterpolantFactoryMethodSmooth=void 0;var Ks=class extends Yi{constructor(t,e,n){super(t,e,n)}};Ks.prototype.ValueTypeName="string";Ks.prototype.ValueBufferType=Array;Ks.prototype.DefaultInterpolation=ho;Ks.prototype.InterpolantFactoryMethodLinear=void 0;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var Rc=class extends Yi{constructor(t,e,n,s){super(t,e,n,s)}};Rc.prototype.ValueTypeName="vector";var Cc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},C0=new Cc,Pc=class{constructor(t){this.manager=t!==void 0?t:C0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Pc.DEFAULT_MATERIAL_NAME="__DEFAULT";var ma=class extends mi{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var fd=new Te,Om=new F,Bm=new F,Co=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.mapType=Bi,this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hs,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Om.setFromMatrixPosition(t.matrixWorld),e.position.copy(Om),Bm.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bm),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){fd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(fd,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ca||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(fd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},jl=new F,Ql=new On,Dn=new F,Po=class extends mi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(jl,Ql,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jl,Ql,Dn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(jl,Ql,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jl,Ql,Dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zs=new F,km=new wt,zm=new wt,bi=class extends Po{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=dc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dc*2*Math.atan(Math.tan(Xu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zs.x,zs.y).multiplyScalar(-t/zs.z),zs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zs.x,zs.y).multiplyScalar(-t/zs.z)}getViewSize(t,e){return this.getViewBounds(t,km,zm),e.subVectors(zm,km)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Xu*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var xd=class extends Co{constructor(){super(new bi(90,1,.5,500)),this.isPointLightShadow=!0}},vr=class extends ma{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new xd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},xr=class extends Po{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},yd=class extends Co{constructor(){super(new xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Io=class extends ma{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mi.DEFAULT_UP),this.updateMatrix(),this.target=new mi,this.shadow=new yd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Lo=class extends ma{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var ra=-90,aa=1,ga=class extends mi{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new bi(ra,aa,t,e);s.layers=this.layers,this.add(s);let r=new bi(ra,aa,t,e);r.layers=this.layers,this.add(r);let a=new bi(ra,aa,t,e);a.layers=this.layers,this.add(a);let o=new bi(ra,aa,t,e);o.layers=this.layers,this.add(o);let l=new bi(ra,aa,t,e);l.layers=this.layers,this.add(l);let c=new bi(ra,aa,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ic=class extends bi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},No=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Nx.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Nx(){this._document.hidden===!1&&this.reset()}var Vd="\\[\\]\\.:\\/",Dx=new RegExp("["+Vd+"]","g"),Wd="[^"+Vd+"]",Fx="[^"+Vd.replace("\\.","")+"]",Ux=/((?:WC+[\/:])*)/.source.replace("WC",Wd),Ox=/(WCOD+)?/.source.replace("WCOD",Fx),Bx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wd),kx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wd),zx=new RegExp("^"+Ux+Ox+Bx+kx+"$"),Gx=["material","materials","bones","map"],Sd=class{constructor(t,e,n){let s=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Dx,"")}static parseTrackName(t){let e=zx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Gx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=Sd;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $E=new Float32Array(1);var Zd=class Zd{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Zd.prototype.isMatrix2=!0;var Md=Zd;function Xd(i,t,e,n){let s=Hx(n);switch(e){case Dd:return i*t;case Ud:return i*t/s.components*s.byteLength;case kc:return i*t/s.components*s.byteLength;case js:return i*t*2/s.components*s.byteLength;case zc:return i*t*2/s.components*s.byteLength;case Fd:return i*t*3/s.components*s.byteLength;case wn:return i*t*4/s.components*s.byteLength;case Gc:return i*t*4/s.components*s.byteLength;case Ho:case Vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wo:case Xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vc:case Xc:return Math.max(i,16)*Math.max(t,8)/4;case Hc:case Wc:return Math.max(i,8)*Math.max(t,8)/2;case qc:case $c:case Kc:case Zc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Yc:case qo:case Jc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case th:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case eh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ih:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case nh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case sh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case rh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ah:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case oh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case lh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ch:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case hh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case uh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case dh:case fh:case ph:return Math.ceil(i/4)*Math.ceil(t/4)*16;case mh:case gh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $o:case _h:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Hx(i){switch(i){case Bi:case Pd:return{byteLength:1,components:1};case xa:case Id:case gi:return{byteLength:2,components:1};case Oc:case Bc:return{byteLength:2,components:4};case En:case Uc:case Tn:return{byteLength:4,components:1};case Ld:case Nd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function J0(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Wx(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Xx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ty=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ey=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ny=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ry=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,py=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,my=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,gy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,My=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,by=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ey=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ty=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ay=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ry=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Py=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ly=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ny=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Uy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Oy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,By=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ky=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qy=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$y=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ky=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,t2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s2=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,o2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,c2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,h2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,f2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,p2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,y2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,A2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,R2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,C2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,P2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,L2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,D2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,B2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,k2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,z2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,V2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,W2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$2=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,J2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,j2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Q2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,tS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_S=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:Xx,alphahash_pars_fragment:qx,alphamap_fragment:$x,alphamap_pars_fragment:Yx,alphatest_fragment:Kx,alphatest_pars_fragment:Zx,aomap_fragment:Jx,aomap_pars_fragment:jx,batching_pars_vertex:Qx,batching_vertex:ty,begin_vertex:ey,beginnormal_vertex:iy,bsdfs:ny,iridescence_fragment:sy,bumpmap_pars_fragment:ry,clipping_planes_fragment:ay,clipping_planes_pars_fragment:oy,clipping_planes_pars_vertex:ly,clipping_planes_vertex:cy,color_fragment:hy,color_pars_fragment:uy,color_pars_vertex:dy,color_vertex:fy,common:py,defaultnormal_vertex:my,displacementmap_pars_vertex:gy,displacementmap_vertex:_y,emissivemap_fragment:vy,emissivemap_pars_fragment:xy,colorspace_fragment:yy,colorspace_pars_fragment:Sy,envmap_fragment:My,envmap_common_pars_fragment:by,envmap_pars_fragment:Ey,envmap_pars_vertex:Ty,envmap_physical_pars_fragment:Uy,envmap_vertex:wy,fog_vertex:Ay,fog_pars_vertex:Ry,fog_fragment:Cy,fog_pars_fragment:Py,gradientmap_pars_fragment:Iy,lightmap_pars_fragment:Ly,lights_lambert_fragment:Ny,lights_lambert_pars_fragment:Dy,lights_pars_begin:Fy,lights_toon_fragment:Oy,lights_toon_pars_fragment:By,lights_phong_fragment:ky,lights_phong_pars_fragment:zy,lights_physical_fragment:Gy,lights_physical_pars_fragment:Hy,lights_fragment_begin:Vy,lights_fragment_maps:Wy,lights_fragment_end:Xy,lightprobes_pars_fragment:qy,logdepthbuf_fragment:$y,logdepthbuf_pars_fragment:Yy,logdepthbuf_pars_vertex:Ky,logdepthbuf_vertex:Zy,map_fragment:Jy,map_pars_fragment:jy,map_particle_fragment:Qy,map_particle_pars_fragment:t2,metalnessmap_fragment:e2,metalnessmap_pars_fragment:i2,morphinstance_vertex:n2,morphcolor_vertex:s2,morphnormal_vertex:r2,morphtarget_pars_vertex:a2,morphtarget_vertex:o2,normal_fragment_begin:l2,normal_fragment_maps:c2,normal_pars_fragment:h2,normal_pars_vertex:u2,normal_vertex:d2,normalmap_pars_fragment:f2,clearcoat_normal_fragment_begin:p2,clearcoat_normal_fragment_maps:m2,clearcoat_pars_fragment:g2,iridescence_pars_fragment:_2,opaque_fragment:v2,packing:x2,premultiplied_alpha_fragment:y2,project_vertex:S2,dithering_fragment:M2,dithering_pars_fragment:b2,roughnessmap_fragment:E2,roughnessmap_pars_fragment:T2,shadowmap_pars_fragment:w2,shadowmap_pars_vertex:A2,shadowmap_vertex:R2,shadowmask_pars_fragment:C2,skinbase_vertex:P2,skinning_pars_vertex:I2,skinning_vertex:L2,skinnormal_vertex:N2,specularmap_fragment:D2,specularmap_pars_fragment:F2,tonemapping_fragment:U2,tonemapping_pars_fragment:O2,transmission_fragment:B2,transmission_pars_fragment:k2,uv_pars_fragment:z2,uv_pars_vertex:G2,uv_vertex:H2,worldpos_vertex:V2,background_vert:W2,background_frag:X2,backgroundCube_vert:q2,backgroundCube_frag:$2,cube_vert:Y2,cube_frag:K2,depth_vert:Z2,depth_frag:J2,distance_vert:j2,distance_frag:Q2,equirect_vert:tS,equirect_frag:eS,linedashed_vert:iS,linedashed_frag:nS,meshbasic_vert:sS,meshbasic_frag:rS,meshlambert_vert:aS,meshlambert_frag:oS,meshmatcap_vert:lS,meshmatcap_frag:cS,meshnormal_vert:hS,meshnormal_frag:uS,meshphong_vert:dS,meshphong_frag:fS,meshphysical_vert:pS,meshphysical_frag:mS,meshtoon_vert:gS,meshtoon_frag:_S,points_vert:vS,points_frag:xS,shadow_vert:yS,shadow_frag:SS,sprite_vert:MS,sprite_frag:bS},_t={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Vn={basic:{uniforms:Ti([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Ti([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Ti([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Ti([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Ti([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Ti([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Ti([_t.points,_t.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Ti([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Ti([_t.common,_t.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Ti([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Ti([_t.sprite,_t.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:Ti([_t.common,_t.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:Ti([_t.lights,_t.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Vn.physical={uniforms:Ti([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var yh={r:0,b:0,g:0},ES=new Te,j0=new Wt;j0.set(-1,0,0,0,1,0,0,0,1);function TS(i,t,e,n,s,r){let a=new Nt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let S=M.backgroundBlurriness>0;A=t.get(A,S)}return A}function g(M){let A=!1,S=f(M);S===null?p(a,o):S&&S.isColor&&(p(S,1),A=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,A){let S=f(A);S&&S.isCubeTexture?(c===void 0&&(c=new ye(new Ws(1,1,1),new Be({name:"BackgroundCubeMaterial",uniforms:Tr(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ES.makeRotationFromEuler(A.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(j0),c.material.toneMapped=te.getTransfer(S.colorSpace)!==he,(h!==S||d!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ye(new qs(2,2),new Be({name:"BackgroundMaterial",uniforms:Tr(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Zs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=te.getTransfer(S.colorSpace)!==he,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,A){M.getRGB(yh,Hd(i)),e.buffers.color.setClear(yh.r,yh.g,yh.b,A,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:g,addToRenderList:x,dispose:m}}function wS(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(L,U,k,C,H){let X=!1,G=d(L,C,k,U);r!==G&&(r=G,c(r.object)),X=f(L,C,k,H),X&&g(L,C,k,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,S(L,U,k,C),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function d(L,U,k,C){let H=C.wireframe===!0,X=n[U.id];X===void 0&&(X={},n[U.id]=X);let G=L.isInstancedMesh===!0?L.id:0,Q=X[G];Q===void 0&&(Q={},X[G]=Q);let W=Q[k.id];W===void 0&&(W={},Q[k.id]=W);let j=W[H];return j===void 0&&(j=u(l()),W[H]=j),j}function u(L){let U=[],k=[],C=[];for(let H=0;H<e;H++)U[H]=0,k[H]=0,C[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:C,object:L,attributes:{},index:null}}function f(L,U,k,C){let H=r.attributes,X=U.attributes,G=0,Q=k.getAttributes();for(let W in Q)if(Q[W].location>=0){let tt=H[W],yt=X[W];if(yt===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(yt=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(yt=L.instanceColor)),tt===void 0||tt.attribute!==yt||yt&&tt.data!==yt.data)return!0;G++}return r.attributesNum!==G||r.index!==C}function g(L,U,k,C){let H={},X=U.attributes,G=0,Q=k.getAttributes();for(let W in Q)if(Q[W].location>=0){let tt=X[W];tt===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(tt=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(tt=L.instanceColor));let yt={};yt.attribute=tt,tt&&tt.data&&(yt.data=tt.data),H[W]=yt,G++}r.attributes=H,r.attributesNum=G,r.index=C}function x(){let L=r.newAttributes;for(let U=0,k=L.length;U<k;U++)L[U]=0}function p(L){m(L,0)}function m(L,U){let k=r.newAttributes,C=r.enabledAttributes,H=r.attributeDivisors;k[L]=1,C[L]===0&&(i.enableVertexAttribArray(L),C[L]=1),H[L]!==U&&(i.vertexAttribDivisor(L,U),H[L]=U)}function M(){let L=r.newAttributes,U=r.enabledAttributes;for(let k=0,C=U.length;k<C;k++)U[k]!==L[k]&&(i.disableVertexAttribArray(k),U[k]=0)}function A(L,U,k,C,H,X,G){G===!0?i.vertexAttribIPointer(L,U,k,H,X):i.vertexAttribPointer(L,U,k,C,H,X)}function S(L,U,k,C){x();let H=C.attributes,X=k.getAttributes(),G=U.defaultAttributeValues;for(let Q in X){let W=X[Q];if(W.location>=0){let j=H[Q];if(j===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),j!==void 0){let tt=j.normalized,yt=j.itemSize,Gt=t.get(j);if(Gt===void 0)continue;let Y=Gt.buffer,mt=Gt.type,St=Gt.bytesPerElement,Ut=mt===i.INT||mt===i.UNSIGNED_INT||j.gpuType===Uc;if(j.isInterleavedBufferAttribute){let nt=j.data,Vt=nt.isInterleavedBuffer===!0?nt.stride:nt.itemSize,Pe=j.offset;if(nt.isInstancedInterleavedBuffer||nt.isInstancedBufferAttribute){for(let kt=0;kt<W.locationSize;kt++)m(W.location+kt,nt.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let kt=0;kt<W.locationSize;kt++)p(W.location+kt);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let kt=0;kt<W.locationSize;kt++)A(W.location+kt,yt/W.locationSize,mt,tt,Vt*St,(Pe+yt/W.locationSize*kt)*St,Ut)}else{if(j.isInstancedBufferAttribute){for(let nt=0;nt<W.locationSize;nt++)m(W.location+nt,j.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let nt=0;nt<W.locationSize;nt++)p(W.location+nt);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let nt=0;nt<W.locationSize;nt++)A(W.location+nt,yt/W.locationSize,mt,tt,yt*St,yt/W.locationSize*nt*St,Ut)}}else if(G!==void 0){let tt=G[Q];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(W.location,tt);break;case 3:i.vertexAttrib3fv(W.location,tt);break;case 4:i.vertexAttrib4fv(W.location,tt);break;default:i.vertexAttrib1fv(W.location,tt)}}}}M()}function w(){D();for(let L in n){let U=n[L];for(let k in U){let C=U[k];for(let H in C){let X=C[H];for(let G in X)h(X[G].object),delete X[G];delete C[H]}}delete n[L]}}function E(L){if(n[L.id]===void 0)return;let U=n[L.id];for(let k in U){let C=U[k];for(let H in C){let X=C[H];for(let G in X)h(X[G].object),delete X[G];delete C[H]}}delete n[L.id]}function _(L){for(let U in n){let k=n[U];for(let C in k){let H=k[C];if(H[L.id]===void 0)continue;let X=H[L.id];for(let G in X)h(X[G].object),delete X[G];delete H[L.id]}}}function b(L){for(let U in n){let k=n[U],C=L.isInstancedMesh===!0?L.id:0,H=k[C];if(H!==void 0){for(let X in H){let G=H[X];for(let Q in G)h(G[Q].object),delete G[Q];delete H[X]}delete k[C],Object.keys(k).length===0&&delete n[U]}}}function D(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:M}}function AS(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function RS(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==wn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let b=_===gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Bi&&_!==Tn&&!b&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:S,maxSamples:w,samples:E}}function CS(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Mn,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let M=r?0:n,A=M*4,S=m.clippingState||null;l.value=S,S=h(g,u,A,f);for(let w=0;w!==A;++w)S[w]=e[w];m.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=f+x*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let A=0,S=f;A!==x;++A,S+=4)a.copy(d[A]).applyMatrix4(M,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}var Zo=class extends ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new bo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ws(5,5,5),r=new Be({name:"CubemapFromEquirect",uniforms:Tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ii,blending:ps});r.uniforms.tEquirect.value=e;let a=new ye(s,r),o=e.minFilter;return e.minFilter===ms&&(e.minFilter=Ci),new ga(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},P0=256,PS=3,IS=20,Q0=256,tg=16,LS=3,NS=new F,DS=new Nt,Mh=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ga(1,10,null),this._boxMesh=new ye(new Ws(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=NS}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(DS));let p=new ga(n,s,h);return p.position.copy(o),p.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=g,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=N0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=L0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(P0,b0(t))}_fromTexture(t,e){t.mapping===Mr||t.mapping===va?this._setSize(t.image.length===0?P0:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=I0(t,!1,!1),n=Math.log2(t)-PS;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=I0(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Mr||t.mapping===va?(this._cubemapMaterial===null&&(this._cubemapMaterial=N0()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=L0()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=FS(),this._integrationMaterial=US());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/tg);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-LS)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Q0*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=OS());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function I0(i,t,e){return new Zo(i,{minFilter:ms,generateMipmaps:t,type:gi,colorSpace:uo,depthBuffer:e})}function Jo(i,t,e){return new Be({name:i,uniforms:t,vertexShader:Zt.cube_vert,fragmentShader:e,side:Ii,blending:ps,depthTest:!1,depthWrite:!1})}function FS(){return Jo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Q0}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function US(){return Jo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:tg}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function OS(){return Jo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${IS}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function L0(){return Jo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function N0(){return Jo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function BS(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Nc||f===Dc)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new Zo(g.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,g=f===Nc||f===Dc,x=f===Mr||f===va;if(g||x){let p=e.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Mh(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let M=u.image;return g&&M&&M.height>0||x&&M&&l(M)?(n===null&&(n=new Mh(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===Nc?u.mapping=Mr:f===Dc&&(u.mapping=va),u}function l(u){let f=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function kS(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&co("WebGLRenderer: "+n+" extension not supported."),s}}}function zS(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let x=r.get(g);x&&(t.remove(x),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function h(g){let x=g.attributes;for(let p in x)t.update(x[p],i.ARRAY_BUFFER)}function d(g){let x=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let M=x!==null?x.array.length:p.array.length/3-1,A=p.count>=65535?yo:xo,S=new A(Math.ceil(M/3)*6,1),w=S.array;if(x!==null){let _=x.array;m=x.version;for(let b=0,D=0;b<M;b+=3){let P=_[b+0],L=_[b+1],U=_[b+2];w[D++]=P,w[D++]=L,w[D++]=L,w[D++]=U,w[D++]=U,w[D++]=P}}else{m=p.version;for(let _=0,b=0;_<M;_+=3){let D=_+0,P=_+1,L=_+2;w[b++]=D,w[b++]=P,w[b++]=P,w[b++]=L,w[b++]=L,w[b++]=D}}S.version=m;let E=r.get(g);E&&t.remove(E),r.set(g,S)}function u(g){let x=r.get(g);if(x){let p=g.index;p!==null&&x.version<p.version&&d(g)}else d(g);return r.get(g)}function f(){for(let g in s){let x=s[g].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function GS(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let p=0;p<f;p++)x+=u[p];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function HS(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Ht("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function VS(i,t,e){let n=new WeakMap,s=new Ne;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let D=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",D)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),x===!0&&(A=3);let S=o.attributes.position.count*A,w=1;S>t.maxTextureSize&&(w=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let E=new Float32Array(S*w*4*d),_=new go(E,S,w,d);_.type=Tn,_.needsUpdate=!0;let b=A*4;for(let P=0;P<d;P++){let L=p[P],U=m[P],k=M[P],C=S*w*4*P;for(let H=0;H<L.count;H++){let X=H*b;f===!0&&(s.fromBufferAttribute(L,H),E[C+X+0]=s.x,E[C+X+1]=s.y,E[C+X+2]=s.z,E[C+X+3]=0),g===!0&&(s.fromBufferAttribute(U,H),E[C+X+4]=s.x,E[C+X+5]=s.y,E[C+X+6]=s.z,E[C+X+7]=0),x===!0&&(s.fromBufferAttribute(k,H),E[C+X+8]=s.x,E[C+X+9]=s.y,E[C+X+10]=s.z,E[C+X+11]=k.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new wt(S,w)},n.set(o,u),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function WS(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var XS={[Fo]:"LINEAR_TONE_MAPPING",[Uo]:"REINHARD_TONE_MAPPING",[Oo]:"CINEON_TONE_MAPPING",[Sr]:"ACES_FILMIC_TONE_MAPPING",[ko]:"AGX_TONE_MAPPING",[zo]:"NEUTRAL_TONE_MAPPING",[Bo]:"CUSTOM_TONE_MAPPING"};function qS(i,t,e,n,s,r){let a=new ti(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new He;h.setAttribute("position",new be([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new be([0,2,0,0,2,0],2));let d=new pa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ye(h,d),f=new xr(-1,1,1,-1,0,1),g=null,x=null,p=!1,m,M=null,A=[],S=!1;this.setSize=function(w,E){a.setSize(w,E),o!==null&&o.setSize(w,E),l!==null&&l.setSize(w,E);for(let _=0;_<A.length;_++){let b=A[_];b.setSize&&b.setSize(w,E)}},this.setEffects=function(w){A=w,S=A.length>0&&A[0].isRenderPass===!0;let E=a.width,_=a.height;A.length>0&&o===null&&(o=new ti(E,_,{type:gi,depthBuffer:!1,stencilBuffer:!1}),l=new ti(E,_,{type:gi,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&A.some(D=>D.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new fs(E,_),r===!0&&(c.format=gs,c.type=br)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let D=0;D<A.length;D++){let P=A[D];P.setSize&&P.setSize(E,_),b&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(w,E){if(p||w.toneMapping===Gn&&A.length===0)return!1;if(M=E,E!==null){let _=E.width,b=E.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return S===!1&&w.setRenderTarget(a),m=w.toneMapping,w.toneMapping=Gn,!0},this.hasRenderPass=function(){return S},this.end=function(w,E){w.toneMapping=m,p=!0;let _=a,b=o;for(let D=0;D<A.length;D++){let P=A[D];P.enabled!==!1&&(P.render(w,b,_,E),P.needsSwap!==!1&&(_=b,b=b===o?l:o))}if(g!==w.outputColorSpace||x!==w.toneMapping){g=w.outputColorSpace,x=w.toneMapping,d.defines={},te.getTransfer(g)===he&&(d.defines.SRGB_TRANSFER="");let D=XS[x];D&&(d.defines[D]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(M),w.render(u,f),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var eg=new Pi,ig=new fs(1,1),ng=new Eo(1),sg=new go,rg=new mc,ag=new bo,D0=[],F0=[],U0=new Float32Array(16),O0=new Float32Array(9),B0=new Float32Array(4);function Sa(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=D0[s];if(r===void 0&&(r=new Float32Array(s),D0[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ei(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ii(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Eh(i,t){let e=F0[t];e===void 0&&(e=new Int32Array(t),F0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $S(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function YS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ei(e,t))return;i.uniform2fv(this.addr,t),ii(e,t)}}function KS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ei(e,t))return;i.uniform3fv(this.addr,t),ii(e,t)}}function ZS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ei(e,t))return;i.uniform4fv(this.addr,t),ii(e,t)}}function JS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ei(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ii(e,t)}else{if(ei(e,n))return;B0.set(n),i.uniformMatrix2fv(this.addr,!1,B0),ii(e,n)}}function jS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ei(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ii(e,t)}else{if(ei(e,n))return;O0.set(n),i.uniformMatrix3fv(this.addr,!1,O0),ii(e,n)}}function QS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ei(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ii(e,t)}else{if(ei(e,n))return;U0.set(n),i.uniformMatrix4fv(this.addr,!1,U0),ii(e,n)}}function tM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function eM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ei(e,t))return;i.uniform2iv(this.addr,t),ii(e,t)}}function iM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ei(e,t))return;i.uniform3iv(this.addr,t),ii(e,t)}}function nM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ei(e,t))return;i.uniform4iv(this.addr,t),ii(e,t)}}function sM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function rM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ei(e,t))return;i.uniform2uiv(this.addr,t),ii(e,t)}}function aM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ei(e,t))return;i.uniform3uiv(this.addr,t),ii(e,t)}}function oM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ei(e,t))return;i.uniform4uiv(this.addr,t),ii(e,t)}}function Th(i){return i.version===0&&(i.compareFunction=kd,i.needsUpdate=!0),i}function lM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Th(ig):r=eg,e.setTexture2D(t||r,s)}function cM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||rg,s)}function hM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Th(ng):r=ag,e.setTextureCube(t||r,s)}function uM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||sg,s)}function dM(i){switch(i){case 5126:return $S;case 35664:return YS;case 35665:return KS;case 35666:return ZS;case 35674:return JS;case 35675:return jS;case 35676:return QS;case 5124:case 35670:return tM;case 35667:case 35671:return eM;case 35668:case 35672:return iM;case 35669:case 35673:return nM;case 5125:return sM;case 36294:return rM;case 36295:return aM;case 36296:return oM;case 35678:case 36198:case 36298:case 36306:case 35682:return lM;case 35679:case 36299:case 36307:return cM;case 35680:case 36300:case 36308:case 36293:return hM;case 36289:case 36303:case 36311:case 36292:return uM}}function fM(i,t){i.uniform1fv(this.addr,t)}function pM(i,t){let e=Sa(t,this.size,2);i.uniform2fv(this.addr,e)}function mM(i,t){let e=Sa(t,this.size,3);i.uniform3fv(this.addr,e)}function gM(i,t){let e=Sa(t,this.size,4);i.uniform4fv(this.addr,e)}function _M(i,t){let e=Sa(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function vM(i,t){let e=Sa(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function xM(i,t){let e=Sa(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function yM(i,t){i.uniform1iv(this.addr,t)}function SM(i,t){i.uniform2iv(this.addr,t)}function MM(i,t){i.uniform3iv(this.addr,t)}function bM(i,t){i.uniform4iv(this.addr,t)}function EM(i,t){i.uniform1uiv(this.addr,t)}function TM(i,t){i.uniform2uiv(this.addr,t)}function wM(i,t){i.uniform3uiv(this.addr,t)}function AM(i,t){i.uniform4uiv(this.addr,t)}function RM(i,t,e){let n=this.cache,s=t.length,r=Eh(e,s);ei(n,r)||(i.uniform1iv(this.addr,r),ii(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Th(ig):a=eg;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function CM(i,t,e){let n=this.cache,s=t.length,r=Eh(e,s);ei(n,r)||(i.uniform1iv(this.addr,r),ii(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||rg,r[a])}function PM(i,t,e){let n=this.cache,s=t.length,r=Eh(e,s);ei(n,r)||(i.uniform1iv(this.addr,r),ii(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Th(ng):a=ag;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function IM(i,t,e){let n=this.cache,s=t.length,r=Eh(e,s);ei(n,r)||(i.uniform1iv(this.addr,r),ii(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||sg,r[a])}function LM(i){switch(i){case 5126:return fM;case 35664:return pM;case 35665:return mM;case 35666:return gM;case 35674:return _M;case 35675:return vM;case 35676:return xM;case 5124:case 35670:return yM;case 35667:case 35671:return SM;case 35668:case 35672:return MM;case 35669:case 35673:return bM;case 5125:return EM;case 36294:return TM;case 36295:return wM;case 36296:return AM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return CM;case 35680:case 36300:case 36308:case 36293:return PM;case 36289:case 36303:case 36311:case 36292:return IM}}var Qd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dM(e.type)}},tf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=LM(e.type)}},ef=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Jd=/(\w+)(\])?(\[|\.)?/g;function k0(i,t){i.seq.push(t),i.map[t.id]=t}function NM(i,t,e){let n=i.name,s=n.length;for(Jd.lastIndex=0;;){let r=Jd.exec(n),a=Jd.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){k0(e,c===void 0?new Qd(o,i,t):new tf(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new ef(o),k0(e,d)),e=d}}}var ya=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);NM(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function z0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var DM=37297,FM=0;function UM(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var G0=new Wt;function OM(i){te._getMatrix(G0,te.workingColorSpace,i);let t=`mat3( ${G0.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case fo:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function H0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+UM(i.getShaderSource(t),o)}else return r}function BM(i,t){let e=OM(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var kM={[Fo]:"Linear",[Uo]:"Reinhard",[Oo]:"Cineon",[Sr]:"ACESFilmic",[ko]:"AgX",[zo]:"Neutral",[Bo]:"Custom"};function zM(i,t){let e=kM[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Sh=new F;function GM(){te.getLuminanceCoefficients(Sh);let i=Sh.x.toFixed(4),t=Sh.y.toFixed(4),e=Sh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function VM(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function WM(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ko(i){return i!==""}function V0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function W0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var XM=/^[ \t]*#include +<([\w\d./]+)>/gm;function nf(i){return i.replace(XM,qM)}function qM(i,t){let e=Zt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return nf(e)}var $M=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function X0(i){return i.replace($M,YM)}function YM(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function q0(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var KM={[Do]:"SHADOWMAP_TYPE_PCF",[_a]:"SHADOWMAP_TYPE_VSM"};function ZM(i){return KM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var JM={[va]:"ENVMAP_MODE_REFRACTION"};function jM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":JM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var QM={[Rd]:"ENVMAP_BLENDING_MULTIPLY",[l0]:"ENVMAP_BLENDING_MIX",[c0]:"ENVMAP_BLENDING_ADD"};function tb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":QM[i.combine]||"ENVMAP_BLENDING_NONE"}function eb(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ZM(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=jM(e),d=tb(e),u=HM(e),f=VM(r),g=s.createProgram(),x,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ko).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ko).join(`
`),p.length>0&&(p+=`
`)):(x=[q0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),p=[q0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Gn?zM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,BM("linearToOutputTexel",e.outputColorSpace),GM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ko).join(`
`)),a=nf(a),a=V0(a,e),a=W0(a,e),o=nf(o),o=V0(o,e),o=W0(o,e),a=X0(a),o=X0(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===Gd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=m+x+a,A=m+p+o,S=z0(s,s.VERTEX_SHADER,M),w=z0(s,s.FRAGMENT_SHADER,A);s.attachShader(g,S),s.attachShader(g,w),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(P){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(g)||"",U=s.getShaderInfoLog(S)||"",k=s.getShaderInfoLog(w)||"",C=L.trim(),H=U.trim(),X=k.trim(),G=!0,Q=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,S,w);else{let W=H0(s,S,"vertex"),j=H0(s,w,"fragment");Ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+C+`
`+W+`
`+j)}else C!==""?zt("WebGLProgram: Program Info Log:",C):(H===""||X==="")&&(Q=!1);Q&&(P.diagnostics={runnable:G,programLog:C,vertexShader:{log:H,prefix:x},fragmentShader:{log:X,prefix:p}})}s.deleteShader(S),s.deleteShader(w),_=new ya(s,g),b=WM(s,g)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(g,DM)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=FM++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=w,this}var ib=0,sf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new rf(t),e.set(t,n)),n}},rf=class{constructor(t){this.id=ib++,this.code=t,this.usedTimes=0}};function nb(i){return i===js||i===qo||i===$o}function sb(i,t,e,n,s,r){let a=new _o,o=new sf,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,b,D,P,L,U){let k=P.fog,C=L.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=t.get(_.envMap||H,X),Q=u[_.type],W=n.precision;_.precision!==null&&(W=n.getMaxPrecision(_.precision),W!==_.precision&&zt("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));let j=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,tt=j!==void 0?j.length:0,yt=0;C.morphAttributes.position!==void 0&&(yt=1),C.morphAttributes.normal!==void 0&&(yt=2),C.morphAttributes.color!==void 0&&(yt=3);let Gt,Y,mt,St;if(Q){let gt=Vn[Q];Gt=gt.vertexShader,Y=gt.fragmentShader}else{Gt=_.vertexShader,Y=_.fragmentShader;let gt=o.getVertexShaderStage(_),ve=o.getFragmentShaderStage(_);o.update(_,gt,ve),mt=gt.id,St=ve.id}let Ut=i.getRenderTarget(),nt=i.state.buffers.depth.getReversed(),Vt=L.isInstancedMesh===!0,Pe=L.isBatchedMesh===!0,kt=!!_.map,ge=!!_.matcap,_e=!!G,Qt=_e&&G.isPMREMTexture===!0,fi=!!_.aoMap,je=!!_.lightMap,Oi=!!_.bumpMap&&_.wireframe===!1,Ue=!!_.normalMap,Nn=!!_.displacementMap,oi=!!_.emissiveMap,nn=!!_.metalnessMap,sn=!!_.roughnessMap,rn=_.anisotropy>0,N=_.clearcoat>0,an=_.diffuseRoughness>0,Ie=_.dispersion>0,Le=_.retroreflectivity>0,pt=_.iridescence>0,Qe=_.sheen>0,Ot=_.transmission>0,Xt=rn&&!!_.anisotropyMap,T=N&&!!_.clearcoatMap,v=N&&!!_.clearcoatNormalMap,B=N&&!!_.clearcoatRoughnessMap,et=an&&!!_.diffuseRoughnessMap,J=pt&&!!_.iridescenceMap,at=pt&&!!_.iridescenceThicknessMap,ut=Qe&&!!_.sheenColorMap,$=Qe&&!!_.sheenRoughnessMap,K=!!_.specularMap,lt=!!_.specularColorMap,R=!!_.specularIntensityMap,Z=Ot&&!!_.transmissionMap,q=Ot&&!!_.thicknessMap,ct=!!_.gradientMap,st=!!_.alphaMap,ot=_.alphaTest>0,Pt=!!_.alphaHash,Kt=!!_.extensions,it=Gn;_.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(it=i.toneMapping);let Ft=Qt?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Yt={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:Gt,fragmentShader:Y,defines:_.defines,customVertexShaderID:mt,customFragmentShaderID:St,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:Pe,batchingColor:Pe&&L._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&L.instanceColor!==null,instancingMorph:Vt&&L.morphTexture!==null,outputColorSpace:Ut===null?i.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:kt,matcap:ge,envMap:_e,envMapMode:_e&&G.mapping,envMapPMREM:Qt,envMapMaxLod:Qt?Ft.length-1:null,envMapSize:Qt?Ft[0].width:null,aoMap:fi,lightMap:je,bumpMap:Oi,normalMap:Ue,displacementMap:Nn,emissiveMap:oi,normalMapObjectSpace:Ue&&_.normalMapType===d0,normalMapTangentSpace:Ue&&_.normalMapType===vh,packedNormalMap:Ue&&_.normalMapType===vh&&nb(_.normalMap.format),metalnessMap:nn,roughnessMap:sn,anisotropy:rn,anisotropyMap:Xt,clearcoat:N,clearcoatMap:T,clearcoatNormalMap:v,clearcoatRoughnessMap:B,diffuseRoughness:an,diffuseRoughnessMap:et,dispersion:Ie,retroreflection:Le,iridescence:pt,iridescenceMap:J,iridescenceThicknessMap:at,sheen:Qe,sheenColorMap:ut,sheenRoughnessMap:$,specularMap:K,specularColorMap:lt,specularIntensityMap:R,transmission:Ot,transmissionMap:Z,thicknessMap:q,gradientMap:ct,opaque:_.transparent===!1&&_.blending===Js&&_.alphaToCoverage===!1,alphaMap:st,alphaTest:ot,alphaHash:Pt,combine:_.combine,mapUv:kt&&f(_.map.channel),aoMapUv:fi&&f(_.aoMap.channel),lightMapUv:je&&f(_.lightMap.channel),bumpMapUv:Oi&&f(_.bumpMap.channel),normalMapUv:Ue&&f(_.normalMap.channel),displacementMapUv:Nn&&f(_.displacementMap.channel),emissiveMapUv:oi&&f(_.emissiveMap.channel),metalnessMapUv:nn&&f(_.metalnessMap.channel),roughnessMapUv:sn&&f(_.roughnessMap.channel),anisotropyMapUv:Xt&&f(_.anisotropyMap.channel),clearcoatMapUv:T&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:et&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:J&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:at&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:$&&f(_.sheenRoughnessMap.channel),specularMapUv:K&&f(_.specularMap.channel),specularColorMapUv:lt&&f(_.specularColorMap.channel),specularIntensityMapUv:R&&f(_.specularIntensityMap.channel),transmissionMapUv:Z&&f(_.transmissionMap.channel),thicknessMapUv:q&&f(_.thicknessMap.channel),alphaMapUv:st&&f(_.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(Ue||rn),vertexNormals:!!C.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!C.attributes.uv&&(kt||st),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||C.attributes.normal===void 0&&Ue===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:nt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:yt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:U.filter(gt=>gt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:kt&&_.map.isVideoTexture===!0&&te.getTransfer(_.map.colorSpace)===he,decodeVideoTextureEmissive:oi&&_.emissiveMap.isVideoTexture===!0&&te.getTransfer(_.emissiveMap.colorSpace)===he,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===hn,flipSided:_.side===Ii,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Kt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&_.extensions.multiDraw===!0||Pe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function x(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)b.push(D),b.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(p(b,_),m(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function m(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){let b=u[_.type],D;if(b){let P=Vn[b];D=vs.clone(P.uniforms)}else D=_.uniforms;return D}function A(_,b){let D=h.get(b);return D!==void 0?++D.usedTimes:(D=new eb(i,b,_,s),c.push(D),h.set(b,D)),D}function S(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function E(){o.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:M,acquireProgram:A,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:E}}function rb(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ab(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function $0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Y0(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,x,p,m){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:p,group:m},i[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=a(u),M.groupOrder=x,M.renderOrder=u.renderOrder,M.z=p,M.group=m),t++,M}function l(u,f,g,x,p,m,M){M.reversedDepth===!0&&(p=-p);let A=o(u,f,g,x,p,m);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):e.push(A)}function c(u,f,g,x,p,m){let M=o(u,f,g,x,p,m);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||ab),n.length>1&&n.sort(f||$0),s.length>1&&s.sort(f||$0)}function d(){for(let u=t,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function ob(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Y0,i.set(n,[a])):s>=r.length?(a=new Y0,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function lb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new Nt};break;case"SpotLight":e={position:new F,direction:new F,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function cb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var hb=0;function ub(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function db(i){let t=new lb,e=cb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new Te,a=new Te;function o(c){let h=0,d=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,M=0,A=0,S=0,w=0,E=0,_=0,b=0,D=0,P=0;c.sort(ub);for(let U=0,k=c.length;U<k;U++){let C=c[U],H=C.color,X=C.intensity,G=C.distance,Q=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===js?Q=C.shadow.map.texture:Q=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=H.r*X,d+=H.g*X,u+=H.b*X;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],X);P++}else if(C.isSunLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let j=C.shadow,tt=e.get(C);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=tt,n.sunShadowMap[g]=Q;let yt=j.getViewportCount();for(let Gt=0;Gt<yt;Gt++)n.sunShadowMatrix[x+Gt]=j.getMatrix(Gt),n.sunShadowCascade[x+Gt]=j._cascadeData[Gt];x+=yt,g++}n.sun[f]=W,f++}else if(C.isDirectionalLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let j=C.shadow,tt=e.get(C);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,n.directionalShadow[p]=tt,n.directionalShadowMap[p]=Q,n.directionalShadowMatrix[p]=C.shadow.matrix,w++}n.directional[p]=W,p++}else if(C.isSpotLight){let W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(H).multiplyScalar(X),W.distance=G,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[M]=W;let j=C.shadow;if(C.map&&(n.spotLightMap[b]=C.map,b++,j.updateMatrices(C),C.castShadow&&D++),n.spotLightMatrix[M]=j.matrix,C.castShadow){let tt=e.get(C);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,n.spotShadow[M]=tt,n.spotShadowMap[M]=Q,_++}M++}else if(C.isRectAreaLight){let W=t.get(C);W.color.copy(H).multiplyScalar(X),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[A]=W,A++}else if(C.isPointLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){let j=C.shadow,tt=e.get(C);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,tt.shadowCameraNear=j.camera.near,tt.shadowCameraFar=j.camera.far,n.pointShadow[m]=tt,n.pointShadowMap[m]=Q,n.pointShadowMatrix[m]=C.shadow.matrix,E++}n.point[m]=W,m++}else if(C.isHemisphereLight){let W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(X),W.groundColor.copy(C.groundColor).multiplyScalar(X),n.hemi[S]=W,S++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.sunLength!==f||L.directionalLength!==p||L.pointLength!==m||L.spotLength!==M||L.rectAreaLength!==A||L.hemiLength!==S||L.numSunShadows!==g||L.numDirectionalShadows!==w||L.numPointShadows!==E||L.numSpotShadows!==_||L.numSpotMaps!==b||L.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=A,n.point.length=m,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-D,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=P,L.sunLength=f,L.directionalLength=p,L.pointLength=m,L.spotLength=M,L.rectAreaLength=A,L.hemiLength=S,L.numSunShadows=g,L.numDirectionalShadows=w,L.numPointShadows=E,L.numSpotShadows=_,L.numSpotMaps=b,L.numLightProbes=P,n.version=hb++)}function l(c,h){let d=0,u=0,f=0,g=0,x=0,p=0,m=h.matrixWorldInverse;for(let M=0,A=c.length;M<A;M++){let S=c[M];if(S.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(m),d++}else if(S.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(S.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),g++}else if(S.isRectAreaLight){let w=n.rectArea[x];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let w=n.hemi[p];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function K0(i){let t=new db(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):e.push(d)}function o(d){n.push(d)}function l(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function fb(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new K0(i),t.set(s,[o])):r>=a.length?(o=new K0(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var pb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,gb=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],_b=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Z0=new Te,Yo=new F,jd=new F;function vb(i,t,e){let n=new Hs,s=new wt,r=new wt,a=new Ne,o=new xc,l=new yc,c={},h=e.maxTextureSize,d={[Zs]:Ii,[Ii]:Zs,[hn]:hn},u=new Be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:pb,fragmentShader:mb}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new He;g.setAttribute("position",new pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ye(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Do;let m=this.type;this.render=function(E,_,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Vm&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Do);let D=i.getRenderTarget(),P=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ps),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let k=m!==this.type;k&&_.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(H=>H.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,H=E.length;C<H;C++){let X=E[C],G=X.shadow;if(G===void 0){zt("WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let Q=G.getFrameExtents();s.multiply(Q),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,G.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=W,G.map===null||k===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===_a){if(X.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ti(s.x,s.y,{format:js,type:gi,minFilter:Ci,magFilter:Ci,generateMipmaps:!1}),G.map.texture.name=X.name+".shadowMap",G.map.depthTexture=new fs(s.x,s.y,Tn),G.map.depthTexture.name=X.name+".shadowMapDepth",G.map.depthTexture.format=hs,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=ui,G.map.depthTexture.magFilter=ui}else X.isPointLight?(G.map=new Zo(s.x),G.map.depthTexture=new Eo(s.x,En)):(G.map=new ti(s.x,s.y),G.map.depthTexture=new fs(s.x,s.y,En)),G.map.depthTexture.name=X.name+".shadowMap",G.map.depthTexture.format=hs,this.type===Do?(G.map.depthTexture.compareFunction=W?Bd:Od,G.map.depthTexture.minFilter=Ci,G.map.depthTexture.magFilter=Ci):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=ui,G.map.depthTexture.magFilter=ui);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let j=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();X.isPointLight!==!0&&G.updateMatrices(X,b);let tt=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:b.layers;for(let yt=0;yt<j;yt++){let Gt=G.getCamera(yt);if(X.isPointLight){let Y=G.camera,mt=G.matrix,St=X.distance||Y.far;St!==Y.far&&(Y.far=St,Y.updateProjectionMatrix()),Yo.setFromMatrixPosition(X.matrixWorld),Y.position.copy(Yo),jd.copy(Y.position),jd.add(gb[yt]),Y.up.copy(_b[yt]),Y.lookAt(jd),Y.updateMatrixWorld(),mt.makeTranslation(-Yo.x,-Yo.y,-Yo.z),Z0.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Z0,Y.coordinateSystem,Y.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,yt),i.clear();else{yt===0&&(i.setRenderTarget(G.map),i.clear());let Y=G.getViewport(yt);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),U.viewport(a)}n=G.getFrustum(yt),S(_,b,Gt,X,tt,this.type)}G.isPointLightShadow!==!0&&this.type===_a&&M(G,b),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(D,P,L)};function M(E,_){let b=t.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new ti(s.x,s.y,{format:js,type:gi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(_,null,b,u,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(_,null,b,f,x,null)}function A(E,_,b,D){let P=null,L=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)P=L;else if(P=b.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let U=P.uuid,k=_.uuid,C=c[U];C===void 0&&(C={},c[U]=C);let H=C[k];H===void 0&&(H=P.clone(),C[k]=H,_.addEventListener("dispose",w)),P=H}if(P.visible=_.visible,P.wireframe=_.wireframe,D===_a?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:d[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,b.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let U=i.properties.get(P);U.light=b}return P}function S(E,_,b,D,P,L){if(E.visible===!1)return;if(E.layers.test(P)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===_a)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let C=t.update(E),H=E.material;if(Array.isArray(H)){let X=C.groups;for(let G=0,Q=X.length;G<Q;G++){let W=X[G],j=H[W.materialIndex];if(j&&j.visible){let tt=A(E,j,D,L);E.onBeforeShadow(i,E,_,b,C,tt,W),i.renderBufferDirect(b,null,C,tt,E,W),E.onAfterShadow(i,E,_,b,C,tt,W)}}}else if(H.visible){let X=A(E,H,D,L);E.onBeforeShadow(i,E,_,b,C,X,null),i.renderBufferDirect(b,null,C,X,E,null),E.onAfterShadow(i,E,_,b,C,X,null)}}let k=E.children;for(let C=0,H=k.length;C<H;C++)S(k[C],_,b,D,P,L)}function w(E){E.target.removeEventListener("dispose",w);for(let b in c){let D=c[b],P=E.target.uuid;P in D&&(D[P].dispose(),delete D[P])}}}function xb(i,t){function e(){let R=!1,Z=new Ne,q=null,ct=new Ne(0,0,0,0);return{setMask:function(st){q!==st&&!R&&(i.colorMask(st,st,st,st),q=st)},setLocked:function(st){R=st},setClear:function(st,ot,Pt,Kt,it){it===!0&&(st*=Kt,ot*=Kt,Pt*=Kt),Z.set(st,ot,Pt,Kt),ct.equals(Z)===!1&&(i.clearColor(st,ot,Pt,Kt),ct.copy(Z))},reset:function(){R=!1,q=null,ct.set(-1,0,0,0)}}}function n(){let R=!1,Z=!1,q=null,ct=null,st=null;return{setReversed:function(ot){if(Z!==ot){let Pt=t.get("EXT_clip_control");ot?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),Z=ot;let Kt=st;st=null,this.setClear(Kt)}},getReversed:function(){return Z},setTest:function(ot){ot?nt(i.DEPTH_TEST):Vt(i.DEPTH_TEST)},setMask:function(ot){q!==ot&&!R&&(i.depthMask(ot),q=ot)},setFunc:function(ot){if(Z&&(ot=M0[ot]),ct!==ot){switch(ot){case ic:i.depthFunc(i.NEVER);break;case nc:i.depthFunc(i.ALWAYS);break;case sc:i.depthFunc(i.LESS);break;case la:i.depthFunc(i.LEQUAL);break;case rc:i.depthFunc(i.EQUAL);break;case ac:i.depthFunc(i.GEQUAL);break;case oc:i.depthFunc(i.GREATER);break;case lc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=ot}},setLocked:function(ot){R=ot},setClear:function(ot){st!==ot&&(st=ot,Z&&(ot=1-ot),i.clearDepth(ot))},reset:function(){R=!1,q=null,ct=null,st=null,Z=!1}}}function s(){let R=!1,Z=null,q=null,ct=null,st=null,ot=null,Pt=null,Kt=null,it=null;return{setTest:function(Ft){R||(Ft?nt(i.STENCIL_TEST):Vt(i.STENCIL_TEST))},setMask:function(Ft){Z!==Ft&&!R&&(i.stencilMask(Ft),Z=Ft)},setFunc:function(Ft,Yt,gt){(q!==Ft||ct!==Yt||st!==gt)&&(i.stencilFunc(Ft,Yt,gt),q=Ft,ct=Yt,st=gt)},setOp:function(Ft,Yt,gt){(ot!==Ft||Pt!==Yt||Kt!==gt)&&(i.stencilOp(Ft,Yt,gt),ot=Ft,Pt=Yt,Kt=gt)},setLocked:function(Ft){R=Ft},setClear:function(Ft){it!==Ft&&(i.clearStencil(Ft),it=Ft)},reset:function(){R=!1,Z=null,q=null,ct=null,st=null,ot=null,Pt=null,Kt=null,it=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],x=null,p=!1,m=null,M=null,A=null,S=null,w=null,E=null,_=null,b=new Nt(0,0,0),D=0,P=!1,L=null,U=null,k=null,C=null,H=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,Q=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=Q>=2);let j=null,tt={},yt=i.getParameter(i.SCISSOR_BOX),Gt=i.getParameter(i.VIEWPORT),Y=new Ne().fromArray(yt),mt=new Ne().fromArray(Gt);function St(R,Z,q,ct){let st=new Uint8Array(4),ot=i.createTexture();i.bindTexture(R,ot),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<q;Pt++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(Z,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,st):i.texImage2D(Z+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,st);return ot}let Ut={};Ut[i.TEXTURE_2D]=St(i.TEXTURE_2D,i.TEXTURE_2D,1),Ut[i.TEXTURE_CUBE_MAP]=St(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ut[i.TEXTURE_2D_ARRAY]=St(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ut[i.TEXTURE_3D]=St(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(i.DEPTH_TEST),a.setFunc(la),Oi(!1),Ue(bd),nt(i.CULL_FACE),fi(ps);function nt(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function Vt(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function Pe(R,Z){return u[R]!==Z?(i.bindFramebuffer(R,Z),u[R]=Z,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Z),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Z),!0):!1}function kt(R,Z){let q=g,ct=!1;if(R){q=f.get(Z),q===void 0&&(q=[],f.set(Z,q));let st=R.textures;if(q.length!==st.length||q[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Pt=st.length;ot<Pt;ot++)q[ot]=i.COLOR_ATTACHMENT0+ot;q.length=st.length,ct=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,ct=!0);ct&&i.drawBuffers(q)}function ge(R){return x!==R?(i.useProgram(R),x=R,!0):!1}let _e={[yr]:i.FUNC_ADD,[Xm]:i.FUNC_SUBTRACT,[qm]:i.FUNC_REVERSE_SUBTRACT};_e[$m]=i.MIN,_e[Ym]=i.MAX;let Qt={[Km]:i.ZERO,[Zm]:i.ONE,[Jm]:i.SRC_COLOR,[wd]:i.SRC_ALPHA,[n0]:i.SRC_ALPHA_SATURATE,[e0]:i.DST_COLOR,[Qm]:i.DST_ALPHA,[jm]:i.ONE_MINUS_SRC_COLOR,[Ad]:i.ONE_MINUS_SRC_ALPHA,[i0]:i.ONE_MINUS_DST_COLOR,[t0]:i.ONE_MINUS_DST_ALPHA,[s0]:i.CONSTANT_COLOR,[r0]:i.ONE_MINUS_CONSTANT_COLOR,[a0]:i.CONSTANT_ALPHA,[o0]:i.ONE_MINUS_CONSTANT_ALPHA};function fi(R,Z,q,ct,st,ot,Pt,Kt,it,Ft){if(R===ps){p===!0&&(Vt(i.BLEND),p=!1);return}if(p===!1&&(nt(i.BLEND),p=!0),R!==Wm){if(R!==m||Ft!==P){if((M!==yr||w!==yr)&&(i.blendEquation(i.FUNC_ADD),M=yr,w=yr),Ft)switch(R){case Js:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ei:i.blendFunc(i.ONE,i.ONE);break;case Ed:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Td:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ht("WebGLState: Invalid blending: ",R);break}else switch(R){case Js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ed:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Td:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",R);break}A=null,S=null,E=null,_=null,b.set(0,0,0),D=0,m=R,P=Ft}return}st=st||Z,ot=ot||q,Pt=Pt||ct,(Z!==M||st!==w)&&(i.blendEquationSeparate(_e[Z],_e[st]),M=Z,w=st),(q!==A||ct!==S||ot!==E||Pt!==_)&&(i.blendFuncSeparate(Qt[q],Qt[ct],Qt[ot],Qt[Pt]),A=q,S=ct,E=ot,_=Pt),(Kt.equals(b)===!1||it!==D)&&(i.blendColor(Kt.r,Kt.g,Kt.b,it),b.copy(Kt),D=it),m=R,P=!1}function je(R,Z){R.side===hn?Vt(i.CULL_FACE):nt(i.CULL_FACE);let q=R.side===Ii;Z&&(q=!q),Oi(q),R.blending===Js&&R.transparent===!1?fi(ps):fi(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let ct=R.stencilWrite;o.setTest(ct),ct&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),oi(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):Vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oi(R){L!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),L=R)}function Ue(R){R!==Gm?(nt(i.CULL_FACE),R!==U&&(R===bd?i.cullFace(i.BACK):R===Hm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Vt(i.CULL_FACE),U=R}function Nn(R){R!==k&&(G&&i.lineWidth(R),k=R)}function oi(R,Z,q){R?(nt(i.POLYGON_OFFSET_FILL),(C!==Z||H!==q)&&(C=Z,H=q,a.getReversed()&&(Z=-Z,q=-q),i.polygonOffset(Z,q))):Vt(i.POLYGON_OFFSET_FILL)}function nn(R){R?nt(i.SCISSOR_TEST):Vt(i.SCISSOR_TEST)}function sn(R){R===void 0&&(R=i.TEXTURE0+X-1),j!==R&&(i.activeTexture(R),j=R)}function rn(R,Z,q){q===void 0&&(j===null?q=i.TEXTURE0+X-1:q=j);let ct=tt[q];ct===void 0&&(ct={type:void 0,texture:void 0},tt[q]=ct),(ct.type!==R||ct.texture!==Z)&&(j!==q&&(i.activeTexture(q),j=q),i.bindTexture(R,Z||Ut[R]),ct.type=R,ct.texture=Z)}function N(){let R=tt[j];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function an(){try{i.compressedTexImage2D(...arguments)}catch(R){Ht("WebGLState:",R)}}function Ie(){try{i.compressedTexImage3D(...arguments)}catch(R){Ht("WebGLState:",R)}}function Le(){try{i.texSubImage2D(...arguments)}catch(R){Ht("WebGLState:",R)}}function pt(){try{i.texSubImage3D(...arguments)}catch(R){Ht("WebGLState:",R)}}function Qe(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Ht("WebGLState:",R)}}function Ot(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Ht("WebGLState:",R)}}function Xt(){try{i.texStorage2D(...arguments)}catch(R){Ht("WebGLState:",R)}}function T(){try{i.texStorage3D(...arguments)}catch(R){Ht("WebGLState:",R)}}function v(){try{i.texImage2D(...arguments)}catch(R){Ht("WebGLState:",R)}}function B(){try{i.texImage3D(...arguments)}catch(R){Ht("WebGLState:",R)}}function et(R){return d[R]!==void 0?d[R]:i.getParameter(R)}function J(R,Z){d[R]!==Z&&(i.pixelStorei(R,Z),d[R]=Z)}function at(R){Y.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Y.copy(R))}function ut(R){mt.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),mt.copy(R))}function $(R,Z){let q=c.get(Z);q===void 0&&(q=new WeakMap,c.set(Z,q));let ct=q.get(R);ct===void 0&&(ct=i.getUniformBlockIndex(Z,R.name),i.uniformBlockBinding(Z,ct,ct),q.set(R,ct))}function K(R,Z,q){let st=c.get(Z).get(R);l[st]!==q&&(i.bindBufferBase(i.UNIFORM_BUFFER,st,q),l[st]=q)}function lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,tt={},u={},l={},f=new WeakMap,g=[],x=null,p=!1,m=null,M=null,A=null,S=null,w=null,E=null,_=null,b=new Nt(0,0,0),D=0,P=!1,L=null,U=null,k=null,C=null,H=null,Y.set(0,0,i.canvas.width,i.canvas.height),mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:Vt,bindFramebuffer:Pe,drawBuffers:kt,useProgram:ge,setBlending:fi,setMaterial:je,setFlipSided:Oi,setCullFace:Ue,setLineWidth:Nn,setPolygonOffset:oi,setScissorTest:nn,activeTexture:sn,bindTexture:rn,unbindTexture:N,compressedTexImage2D:an,compressedTexImage3D:Ie,texImage2D:v,texImage3D:B,pixelStorei:J,getParameter:et,updateUBOMapping:$,uniformBlockBinding:K,texStorage2D:Xt,texStorage3D:T,texSubImage2D:Le,texSubImage3D:pt,compressedTexSubImage2D:Qe,compressedTexSubImage3D:Ot,scissor:at,viewport:ut,reset:lt}}function yb(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new wt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=new Set,x=new FinalizationRegistry(T=>g.delete(T)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,v){return p?new OffscreenCanvas(T,v):po("canvas")}function M(T,v,B){let et=1,J=Xt(T);if((J.width>B||J.height>B)&&(et=B/Math.max(J.width,J.height)),et<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let at=Math.floor(et*J.width),ut=Math.floor(et*J.height);u===void 0&&(u=m(at,ut));let $=v?m(at,ut):u;return $.width=at,$.height=ut,$.getContext("2d").drawImage(T,0,0,at,ut),zt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+at+"x"+ut+")."),$}else return"data"in T&&zt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function A(T){return T.generateMipmaps}function S(T){i.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,v,B,et,J,at=!1){if(T!==null){if(i[T]!==void 0)return i[T];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ut;et&&(ut=t.get("EXT_texture_norm16"),ut||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=v;if(v===i.RED&&(B===i.FLOAT&&($=i.R32F),B===i.HALF_FLOAT&&($=i.R16F),B===i.UNSIGNED_BYTE&&($=i.R8),B===i.UNSIGNED_SHORT&&ut&&($=ut.R16_EXT),B===i.SHORT&&ut&&($=ut.R16_SNORM_EXT)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.R8UI),B===i.UNSIGNED_SHORT&&($=i.R16UI),B===i.UNSIGNED_INT&&($=i.R32UI),B===i.BYTE&&($=i.R8I),B===i.SHORT&&($=i.R16I),B===i.INT&&($=i.R32I)),v===i.RG&&(B===i.FLOAT&&($=i.RG32F),B===i.HALF_FLOAT&&($=i.RG16F),B===i.UNSIGNED_BYTE&&($=i.RG8),B===i.UNSIGNED_SHORT&&ut&&($=ut.RG16_EXT),B===i.SHORT&&ut&&($=ut.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RG8UI),B===i.UNSIGNED_SHORT&&($=i.RG16UI),B===i.UNSIGNED_INT&&($=i.RG32UI),B===i.BYTE&&($=i.RG8I),B===i.SHORT&&($=i.RG16I),B===i.INT&&($=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGB8UI),B===i.UNSIGNED_SHORT&&($=i.RGB16UI),B===i.UNSIGNED_INT&&($=i.RGB32UI),B===i.BYTE&&($=i.RGB8I),B===i.SHORT&&($=i.RGB16I),B===i.INT&&($=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGBA8UI),B===i.UNSIGNED_SHORT&&($=i.RGBA16UI),B===i.UNSIGNED_INT&&($=i.RGBA32UI),B===i.BYTE&&($=i.RGBA8I),B===i.SHORT&&($=i.RGBA16I),B===i.INT&&($=i.RGBA32I)),v===i.RGB&&(B===i.UNSIGNED_SHORT&&ut&&($=ut.RGB16_EXT),B===i.SHORT&&ut&&($=ut.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),v===i.RGBA){let K=at?fo:te.getTransfer(J);B===i.FLOAT&&($=i.RGBA32F),B===i.HALF_FLOAT&&($=i.RGBA16F),B===i.UNSIGNED_BYTE&&($=K===he?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ut&&($=ut.RGBA16_EXT),B===i.SHORT&&ut&&($=ut.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function _(T,v){let B;return T?v===null||v===En||v===br?B=i.DEPTH24_STENCIL8:v===Tn?B=i.DEPTH32F_STENCIL8:v===xa&&(B=i.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===En||v===br?B=i.DEPTH_COMPONENT24:v===Tn?B=i.DEPTH_COMPONENT32F:v===xa&&(B=i.DEPTH_COMPONENT16),B}function b(T,v){return A(T)===!0||T.isFramebufferTexture&&T.minFilter!==ui&&T.minFilter!==Ci?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function D(T){let v=new WeakRef(T);n.get(T).__ref=v,g.add(v),x.register(T,v,v)}function P(T){let v=n.get(T).__ref;v!==void 0&&(g.delete(v),x.unregister(v))}function L(T){k(T.target)}function U(T){C(T.target)}function k(T){T.removeEventListener("dispose",L),P(T),X(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&d.delete(T)}function C(T){T.removeEventListener("dispose",U),P(T),Q(T)}function H(){for(let T of g){let v=T.deref();v!==void 0&&(v.isRenderTarget===!0?C(v):k(v))}g.clear(),d.clear()}function X(T){let v=n.get(T);if(v.__webglInit===void 0)return;let B=T.source,et=f.get(B);if(et){let J=et[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&G(T),Object.keys(et).length===0&&f.delete(B)}n.remove(T)}function G(T){let v=n.get(T);i.deleteTexture(v.__webglTexture);let B=T.source,et=f.get(B);delete et[v.__cacheKey],a.memory.textures--}function Q(T){let v=n.get(T);v.__depthDisposeCallback&&v.__depthDisposeCallback();let B=T.depthTexture;if(B&&B.renderTarget===T&&k(B),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let at=0;at<v.__webglFramebuffer[J].length;at++)i.deleteFramebuffer(v.__webglFramebuffer[J][at]);else i.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)i.deleteFramebuffer(v.__webglFramebuffer[J]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let et=T.textures;for(let J=0,at=et.length;J<at;J++){let ut=n.get(et[J]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),a.memory.textures--),n.remove(et[J])}n.remove(T)}let W=0;function j(){W=0}function tt(){return W}function yt(T){W=T}function Gt(){let T=W;return T>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,T}function Y(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.mipmapsAutoUpdate),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function mt(T,v){let B=n.get(T);if(T.isVideoTexture&&Qe(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){let et=T.image;if(et===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{je(B,T,v);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function St(T,v){let B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){je(B,T,v);return}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function Ut(T,v){let B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){je(B,T,v);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function nt(T,v){let B=n.get(T);if(T.version>0&&B.__version!==T.version){Oi(B,T,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}let Vt={[cc]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[hc]:i.MIRRORED_REPEAT},Pe={[ui]:i.NEAREST,[h0]:i.NEAREST_MIPMAP_NEAREST,[Go]:i.NEAREST_MIPMAP_LINEAR,[Ci]:i.LINEAR,[Fc]:i.LINEAR_MIPMAP_NEAREST,[ms]:i.LINEAR_MIPMAP_LINEAR},kt={[p0]:i.NEVER,[kd]:i.ALWAYS,[m0]:i.LESS,[Od]:i.LEQUAL,[g0]:i.EQUAL,[Bd]:i.GEQUAL,[_0]:i.GREATER,[v0]:i.NOTEQUAL};function ge(T,v){if(v.type===Tn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ci||v.magFilter===Fc||v.magFilter===Go||v.magFilter===ms||v.minFilter===Ci||v.minFilter===Fc||v.minFilter===Go||v.minFilter===ms)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Vt[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Vt[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Vt[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Pe[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Pe[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,kt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ui||v.minFilter!==Go&&v.minFilter!==ms||v.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function _e(T,v){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",L),D(v));let et=v.source,J=f.get(et);J===void 0&&(J={},f.set(et,J));let at=Y(v);if(at!==T.__cacheKey){J[at]===void 0&&(J[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[at].usedTimes++;let ut=J[T.__cacheKey];ut!==void 0&&(J[T.__cacheKey].usedTimes--,ut.usedTimes===0&&G(v)),T.__cacheKey=at,T.__webglTexture=J[at].texture}return B}function Qt(T,v,B){return Math.floor(Math.floor(T/B)/v)}function fi(T,v,B,et){let at=T.updateRanges;if(at.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,B,et,v.data);else{at.sort((R,Z)=>R.start-Z.start);let ut=0;for(let R=1;R<at.length;R++){let Z=at[ut],q=at[R],ct=Z.start+Z.count,st=Qt(q.start,v.width,4),ot=Qt(Z.start,v.width,4);q.start<=ct+1&&st===ot&&Qt(q.start+q.count-1,v.width,4)===st?Z.count=Math.max(Z.count,q.start+q.count-Z.start):(++ut,at[ut]=q)}at.length=ut+1;let $=e.getParameter(i.UNPACK_ROW_LENGTH),K=e.getParameter(i.UNPACK_SKIP_PIXELS),lt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let R=0,Z=at.length;R<Z;R++){let q=at[R],ct=Math.floor(q.start/4),st=Math.ceil(q.count/4),ot=ct%v.width,Pt=Math.floor(ct/v.width),Kt=st,it=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,Pt),e.texSubImage2D(i.TEXTURE_2D,0,ot,Pt,Kt,it,B,et,v.data)}T.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,K),e.pixelStorei(i.UNPACK_SKIP_ROWS,lt)}}function je(T,v,B){let et=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(et=i.TEXTURE_3D);let J=_e(T,v),at=v.source;e.bindTexture(et,T.__webglTexture,i.TEXTURE0+B);let ut=n.get(at);if(at.version!==ut.__version||J===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let it=te.getPrimaries(te.workingColorSpace),Ft=v.colorSpace===_s?null:te.getPrimaries(v.colorSpace),Yt=v.colorSpace===_s||it===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let K=M(v.image,!1,s.maxTextureSize);K=Ot(v,K);let lt=r.convert(v.format,v.colorSpace),R=r.convert(v.type),Z=E(v.internalFormat,lt,R,v.normalized,v.colorSpace,v.isVideoTexture);ge(et,v);let q,ct=v.mipmaps,st=v.isVideoTexture!==!0,ot=ut.__version===void 0||J===!0,Pt=at.dataReady,Kt=b(v,K);if(v.isDepthTexture)Z=_(v.format===gs,v.type),ot&&(st?e.texStorage2D(i.TEXTURE_2D,1,Z,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,Z,K.width,K.height,0,lt,R,null));else if(v.isDataTexture)if(ct.length>0){st&&ot&&e.texStorage2D(i.TEXTURE_2D,Kt,Z,ct[0].width,ct[0].height);for(let it=0,Ft=ct.length;it<Ft;it++)q=ct[it],st?Pt&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,q.width,q.height,lt,R,q.data):e.texImage2D(i.TEXTURE_2D,it,Z,q.width,q.height,0,lt,R,q.data);v.generateMipmaps=!1}else st?(ot&&e.texStorage2D(i.TEXTURE_2D,Kt,Z,K.width,K.height),Pt&&fi(v,K,lt,R)):e.texImage2D(i.TEXTURE_2D,0,Z,K.width,K.height,0,lt,R,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){st&&ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Kt,Z,ct[0].width,ct[0].height,K.depth);for(let it=0,Ft=ct.length;it<Ft;it++)if(q=ct[it],v.format!==wn)if(lt!==null)if(st){if(Pt)if(v.layerUpdates.size>0){let Yt=Xd(q.width,q.height,v.format,v.type);for(let gt of v.layerUpdates){let ve=q.data.subarray(gt*Yt/q.data.BYTES_PER_ELEMENT,(gt+1)*Yt/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,gt,q.width,q.height,1,lt,ve)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,q.width,q.height,K.depth,lt,q.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,Z,q.width,q.height,K.depth,0,q.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?Pt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,q.width,q.height,K.depth,lt,R,q.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,Z,q.width,q.height,K.depth,0,lt,R,q.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{st&&ot&&e.texStorage2D(i.TEXTURE_2D,Kt,Z,ct[0].width,ct[0].height);for(let it=0,Ft=ct.length;it<Ft;it++)q=ct[it],v.format!==wn?lt!==null?st?Pt&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,q.width,q.height,lt,q.data):e.compressedTexImage2D(i.TEXTURE_2D,it,Z,q.width,q.height,0,q.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?Pt&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,q.width,q.height,lt,R,q.data):e.texImage2D(i.TEXTURE_2D,it,Z,q.width,q.height,0,lt,R,q.data)}else if(v.isDataArrayTexture)if(st){if(ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Kt,Z,K.width,K.height,K.depth),Pt)if(v.layerUpdates.size>0){let it=Xd(K.width,K.height,v.format,v.type);for(let Ft of v.layerUpdates){let Yt=K.data.subarray(Ft*it/K.data.BYTES_PER_ELEMENT,(Ft+1)*it/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ft,K.width,K.height,1,lt,R,Yt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,lt,R,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Z,K.width,K.height,K.depth,0,lt,R,K.data);else if(v.isData3DTexture)st?(ot&&e.texStorage3D(i.TEXTURE_3D,Kt,Z,K.width,K.height,K.depth),Pt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,lt,R,K.data)):e.texImage3D(i.TEXTURE_3D,0,Z,K.width,K.height,K.depth,0,lt,R,K.data);else if(v.isFramebufferTexture){if(ot)if(st)e.texStorage2D(i.TEXTURE_2D,Kt,Z,K.width,K.height);else{let it=K.width,Ft=K.height;for(let Yt=0;Yt<Kt;Yt++)e.texImage2D(i.TEXTURE_2D,Yt,Z,it,Ft,0,lt,R,null),it>>=1,Ft>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let it=i.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),K.parentNode!==it){it.appendChild(K),d.add(v),it.onpaint=Ft=>{let Yt=Ft.changedElements;for(let gt of d)Yt.includes(gt.image)&&(gt.needsUpdate=!0)},it.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let Yt=i.RGBA,gt=i.RGBA,ve=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Yt,gt,ve,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ct.length>0){if(st&&ot){let it=Xt(ct[0]);e.texStorage2D(i.TEXTURE_2D,Kt,Z,it.width,it.height)}for(let it=0,Ft=ct.length;it<Ft;it++)q=ct[it],st?Pt&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,lt,R,q):e.texImage2D(i.TEXTURE_2D,it,Z,lt,R,q);v.generateMipmaps=!1}else if(st){if(ot){let it=Xt(K);e.texStorage2D(i.TEXTURE_2D,Kt,Z,it.width,it.height)}Pt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt,R,K)}else e.texImage2D(i.TEXTURE_2D,0,Z,lt,R,K);A(v)&&v.mipmapsAutoUpdate===!0&&S(et),ut.__version=at.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Oi(T,v,B){if(v.image.length!==6)return;let et=_e(T,v),J=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);let at=n.get(J);if(J.version!==at.__version||et===!0){e.activeTexture(i.TEXTURE0+B);let ut=te.getPrimaries(te.workingColorSpace),$=v.colorSpace===_s?null:te.getPrimaries(v.colorSpace),K=v.colorSpace===_s||ut===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let lt=v.isCompressedTexture||v.image[0].isCompressedTexture,R=v.image[0]&&v.image[0].isDataTexture,Z=[];for(let gt=0;gt<6;gt++)!lt&&!R?Z[gt]=M(v.image[gt],!0,s.maxCubemapSize):Z[gt]=R?v.image[gt].image:v.image[gt],Z[gt]=Ot(v,Z[gt]);let q=Z[0],ct=r.convert(v.format,v.colorSpace),st=r.convert(v.type),ot=E(v.internalFormat,ct,st,v.normalized,v.colorSpace),Pt=v.isVideoTexture!==!0,Kt=at.__version===void 0||et===!0,it=J.dataReady,Ft=b(v,q);ge(i.TEXTURE_CUBE_MAP,v);let Yt;if(v.isDepthTexture){if(ot=_(v.format===gs,v.type),Kt)if(Pt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ot,q.width,q.height);else for(let gt=0;gt<6;gt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ot,q.width,q.height,0,ct,st,null)}else if(lt){Pt&&Kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,ot,q.width,q.height);for(let gt=0;gt<6;gt++){Yt=Z[gt].mipmaps;for(let ve=0;ve<Yt.length;ve++){let li=Yt[ve];v.format!==wn?ct!==null?Pt?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ve,0,0,li.width,li.height,ct,li.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ve,ot,li.width,li.height,0,li.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ve,0,0,li.width,li.height,ct,st,li.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ve,ot,li.width,li.height,0,ct,st,li.data)}}}else{if(Yt=v.mipmaps,Pt&&Kt){Yt.length>0&&Ft++;let gt=Xt(Z[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,ot,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(R){Pt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Z[gt].width,Z[gt].height,ct,st,Z[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ot,Z[gt].width,Z[gt].height,0,ct,st,Z[gt].data);for(let ve=0;ve<Yt.length;ve++){let Ds=Yt[ve].image[gt].image;Pt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ve+1,0,0,Ds.width,Ds.height,ct,st,Ds.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ve+1,ot,Ds.width,Ds.height,0,ct,st,Ds.data)}}else{Pt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,ct,st,Z[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ot,ct,st,Z[gt]);for(let ve=0;ve<Yt.length;ve++){let li=Yt[ve];Pt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ve+1,0,0,ct,st,li.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,ve+1,ot,ct,st,li.image[gt])}}}A(v)&&v.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),at.__version=J.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Ue(T,v,B,et,J,at){let ut=r.convert(B.format,B.colorSpace),$=r.convert(B.type),K=E(B.internalFormat,ut,$,B.normalized,B.colorSpace),lt=n.get(v),R=n.get(B);if(R.__renderTarget=v,!lt.__hasExternalTextures){let Z=Math.max(1,v.width>>at),q=Math.max(1,v.height>>at);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,at,K,Z,q,v.depth,0,ut,$,null):e.texImage2D(J,at,K,Z,q,0,ut,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),pt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,J,R.__webglTexture,0,Le(v)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,J,R.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nn(T,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){let et=v.depthTexture,J=et&&et.isDepthTexture?et.type:null,at=_(v.stencilBuffer,J),ut=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le(v),at,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le(v),at,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,at,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,T)}else{let et=v.textures;for(let J=0;J<et.length;J++){let at=et[J],ut=r.convert(at.format,at.colorSpace),$=r.convert(at.type),K=E(at.internalFormat,ut,$,at.normalized,at.colorSpace);pt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le(v),K,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le(v),K,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,K,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function oi(T,v,B){let et=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(v.depthTexture);J.__renderTarget=v;let at=et?v.depthTexture.image[0]:v.depthTexture.image;(!J.__webglTexture||at.width!==v.width||at.height!==v.height)&&(at.width=v.width,at.height=v.height,v.depthTexture.needsUpdate=!0),et?nt(v.depthTexture,0):mt(v.depthTexture,0);let ut=J.__webglTexture,$=Le(v),K=et?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,lt=v.depthTexture.format===gs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===hs)pt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,K,ut,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,lt,K,ut,0);else if(v.depthTexture.format===gs)pt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,K,ut,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,lt,K,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nn(T){let v=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){let et=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),et){let J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,et.removeEventListener("dispose",J)};et.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=et}if(T.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let et=0;et<6;et++)oi(v.__webglFramebuffer[et],T,et);else T.texture.mipmaps.length>0?oi(v.__webglFramebuffer[0],T,0):oi(v.__webglFramebuffer,T,0);else if(B){v.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[et]),v.__webglDepthbuffer[et]===void 0)v.__webglDepthbuffer[et]=i.createRenderbuffer(),Nn(v.__webglDepthbuffer[et],T,!1);else{let J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=v.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,at)}}else if(T.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Nn(v.__webglDepthbuffer,T,!1);else{let J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function sn(T,v,B){let et=n.get(T);v!==void 0&&Ue(et.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&nn(T)}function rn(T){let v=T.texture,B=n.get(T),et=n.get(v);T.addEventListener("dispose",U),D(T);let J=T.textures,at=T.isWebGLCubeRenderTarget===!0,ut=J.length>1;if(ut||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=v.version,a.memory.textures++),at){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(v.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let K=0;K<v.mipmaps.length;K++)B.__webglFramebuffer[$][K]=i.createFramebuffer()}else B.__webglFramebuffer[$]=i.createFramebuffer()}else{if(v.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<v.mipmaps.length;$++)B.__webglFramebuffer[$]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ut)for(let $=0,K=J.length;$<K;$++){let lt=n.get(J[$]);lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&pt(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<J.length;$++){let K=J[$];B.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[$]);let lt=r.convert(K.format,K.colorSpace),R=r.convert(K.type),Z=E(K.internalFormat,lt,R,K.normalized,K.colorSpace,T.isXRRenderTarget===!0),q=Le(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,q,Z,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,B.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Nn(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),ge(i.TEXTURE_CUBE_MAP,v);for(let $=0;$<6;$++)if(v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)Ue(B.__webglFramebuffer[$][K],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,K);else Ue(B.__webglFramebuffer[$],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);A(v)?S(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}else if(ut){for(let $=0,K=J.length;$<K;$++){let lt=J[$],R=n.get(lt),Z=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Z=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,R.__webglTexture),ge(Z,lt),Ue(B.__webglFramebuffer,T,lt,i.COLOR_ATTACHMENT0+$,Z,0),A(lt)&&S(Z)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&($=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,et.__webglTexture),ge($,v),v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)Ue(B.__webglFramebuffer[K],T,v,i.COLOR_ATTACHMENT0,$,K);else Ue(B.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,$,0);A(v)?S($):v.mipmaps.length>0&&i.texParameteri($,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}T.depthBuffer&&nn(T)}function N(T){let v=T.textures;for(let B=0,et=v.length;B<et;B++){let J=v[B];if(A(J)&&J.mipmapsAutoUpdate===!0){let at=w(T),ut=n.get(J).__webglTexture;e.bindTexture(at,ut),S(at),e.unbindTexture()}}}let an=[];function Ie(T){if(T.samples>0){if(pt(T)===!1){let v=T.textures,B=T.width,et=T.height,J=i.COLOR_BUFFER_BIT,at=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(T),$=v.length>1;if($)for(let lt=0;lt<v.length;lt++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let lt=0;lt<v.length;lt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[lt]);let R=n.get(v[lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,B,et,0,0,B,et,J,i.NEAREST),l===!0&&(an.length=0,an.push(i.COLOR_ATTACHMENT0+lt),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&an.push(at),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,an))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let lt=0;lt<v.length;lt++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,ut.__webglColorRenderbuffer[lt]);let R=n.get(v[lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,R,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Le(T){return Math.min(s.maxSamples,T.samples)}function pt(T){let v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Qe(T){let v=a.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function Ot(T,v){let B=T.colorSpace,et=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==uo&&B!==_s&&(te.getTransfer(B)===he?(et!==wn||J!==Bi)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",B)),v}function Xt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Gt,this.resetTextureUnits=j,this.getTextureUnits=tt,this.setTextureUnits=yt,this.setTexture2D=mt,this.setTexture2DArray=St,this.setTexture3D=Ut,this.setTextureCube=nt,this.rebindTextures=sn,this.setupRenderTarget=rn,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=nn,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=pt,this.dispose=H}function Sb(i,t){function e(n,s=_s){let r,a=te.getTransfer(s);if(n===Bi)return i.UNSIGNED_BYTE;if(n===Oc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ld)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pd)return i.BYTE;if(n===Id)return i.SHORT;if(n===xa)return i.UNSIGNED_SHORT;if(n===Uc)return i.INT;if(n===En)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===gi)return i.HALF_FLOAT;if(n===Dd)return i.ALPHA;if(n===Fd)return i.RGB;if(n===wn)return i.RGBA;if(n===hs)return i.DEPTH_COMPONENT;if(n===gs)return i.DEPTH_STENCIL;if(n===Ud)return i.RED;if(n===kc)return i.RED_INTEGER;if(n===js)return i.RG;if(n===zc)return i.RG_INTEGER;if(n===Gc)return i.RGBA_INTEGER;if(n===Ho||n===Vo||n===Wo||n===Xo)if(a===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hc||n===Vc||n===Wc||n===Xc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Hc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qc||n===$c||n===Yc||n===Kc||n===Zc||n===qo||n===Jc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qc||n===$c)return a===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Kc)return r.COMPRESSED_R11_EAC;if(n===Zc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===qo)return r.COMPRESSED_RG11_EAC;if(n===Jc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===jc||n===Qc||n===th||n===eh||n===ih||n===nh||n===sh||n===rh||n===ah||n===oh||n===lh||n===ch||n===hh||n===uh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===th)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===eh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ih)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ah)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ch)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dh||n===fh||n===ph)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===dh)return a===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ph)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mh||n===gh||n===$o||n===_h)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===mh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_h)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Mb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,af=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new To(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Be({vertexShader:Mb,fragmentShader:bb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ye(new qs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},of=class extends Un{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,x=typeof XRWebGLBinding<"u",p=new af,m={},M=e.getContextAttributes(),A=null,S=null,w=[],E=[],_=new wt,b=null,D=null,P=new bi;P.viewport=new Ne;let L=new bi;L.viewport=new Ne;let U=[P,L],k=new Ic,C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let mt=w[Y];return mt===void 0&&(mt=new da,w[Y]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(Y){let mt=w[Y];return mt===void 0&&(mt=new da,w[Y]=mt),mt.getGripSpace()},this.getHand=function(Y){let mt=w[Y];return mt===void 0&&(mt=new da,w[Y]=mt),mt.getHandSpace()};function X(Y){let mt=E.indexOf(Y.inputSource);if(mt===-1)return;let St=w[mt];St!==void 0&&(St.update(Y.inputSource,Y.frame,c||a),St.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Q);for(let Y=0;Y<w.length;Y++){let mt=E[Y];mt!==null&&(E[Y]=null,w[Y].disconnect(mt))}C=null,H=null,p.reset();for(let Y in m)delete m[Y];if(t.setRenderTarget(A),f=null,u=null,d=null,s=null,S=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(_.width,_.height,!1),D!==null){let Y=D.camera;Y.fov=D.fov,Y.zoom=D.zoom,Y.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Q),M.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Ut=null,nt=null;M.depth&&(nt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=M.stencil?gs:hs,Ut=M.stencil?br:En);let Vt={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Vt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new ti(u.textureWidth,u.textureHeight,{format:wn,type:Bi,depthTexture:new fs(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let St={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new ti(f.framebufferWidth,f.framebufferHeight,{format:wn,type:Bi,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Gt.setContext(s),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Q(Y){for(let mt=0;mt<Y.removed.length;mt++){let St=Y.removed[mt],Ut=E.indexOf(St);Ut>=0&&(E[Ut]=null,w[Ut].disconnect(St))}for(let mt=0;mt<Y.added.length;mt++){let St=Y.added[mt],Ut=E.indexOf(St);if(Ut===-1){for(let Vt=0;Vt<w.length;Vt++)if(Vt>=E.length){E.push(St),Ut=Vt;break}else if(E[Vt]===null){E[Vt]=St,Ut=Vt;break}if(Ut===-1)break}let nt=w[Ut];nt&&nt.connect(St)}}function W(Y,mt){mt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(mt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let mt=Y.near,St=Y.far;p.texture!==null&&(p.depthNear>0&&(mt=p.depthNear),p.depthFar>0&&(St=p.depthFar)),k.near=L.near=P.near=mt,k.far=L.far=P.far=St,(C!==k.near||H!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),C=k.near,H=k.far),k.layers.mask=Y.layers.mask|6,P.layers.mask=k.layers.mask&-5,L.layers.mask=k.layers.mask&-3;let Ut=Y.parent,nt=k.cameras;W(k,Ut);for(let Vt=0;Vt<nt.length;Vt++)W(nt[Vt],Ut);k.projectionMatrix.copy(P.projectionMatrix),k.projectionMatrixInverse.copy(P.projectionMatrixInverse),D===null&&Y.isPerspectiveCamera&&(D={camera:Y,fov:Y.fov,zoom:Y.zoom}),j(Y,k,Ut)};function j(Y,mt,St){St===null?Y.matrix.copy(mt.matrixWorld):(Y.matrix.copy(St.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(mt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(mt.projectionMatrix),Y.projectionMatrixInverse.copy(mt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=dc*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function(Y){return m[Y]};let tt=null;function yt(Y,mt){if(h=mt.getViewerPose(c||a),g=mt,h!==null){let St=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let Ut=!1;St.length!==k.cameras.length&&(k.cameras.length=0,Ut=!0);for(let kt=0;kt<St.length;kt++){let ge=St[kt],_e=null;if(f!==null)_e=f.getViewport(ge);else{let fi=d.getViewSubImage(u,ge);_e=fi.viewport,kt===0&&(t.setRenderTargetTextures(S,fi.colorTexture,fi.depthStencilTexture),t.setRenderTarget(S))}let Qt=U[kt];Qt===void 0&&(Qt=new bi,Qt.layers.enable(kt),Qt.viewport=new Ne,U[kt]=Qt),Qt.matrix.fromArray(ge.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(ge.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(_e.x,_e.y,_e.width,_e.height),kt===0&&(k.matrix.copy(Qt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ut===!0&&k.cameras.push(Qt)}let nt=s.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let kt=d.getDepthInformation(St[0]);kt&&kt.isValid&&kt.texture&&p.init(kt,s.renderState)}if(nt&&nt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let kt=0;kt<St.length;kt++){let ge=St[kt].camera;if(ge){let _e=m[ge];_e||(_e=new To,m[ge]=_e);let Qt=d.getCameraImage(ge);_e.sourceTexture=Qt}}}}for(let St=0;St<w.length;St++){let Ut=E[St],nt=w[St];Ut!==null&&nt!==void 0&&nt.update(Ut,mt,c||a)}tt&&tt(Y,mt),mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:mt}),g=null}let Gt=new J0;Gt.setAnimationLoop(yt),this.setAnimationLoop=function(Y){tt=Y},this.dispose=function(){}}},Eb=new Te,og=new Wt;og.set(-1,0,0,0,1,0,0,0,1);function Tb(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Hd(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,A,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,M,A):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ii&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ii&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=t.get(m),A=M.envMap,S=M.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(Eb.makeRotationFromEuler(S)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(og),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,A){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=A*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ii&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wb(i,t,e,n){let s={},r={};function a(M,A){let S=A.program;n.uniformBlockBinding(M,S,s[M.id])}function o(M,A){let S=s[M.id];S===void 0&&(g(M),S=l(M),s[M.id]=S,M.addEventListener("dispose",p));let w=A.program;n.updateUBOMapping(M,w);let E=t.render.frame;r[M.id]!==E&&(c(M),r[M.id]=E)}function l(M){let A=i.createBuffer(),S=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,S,w),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function c(M){let A=s[M.id],S=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let E=0,_=S.length;E<_;E++){let b=S[E];if(Array.isArray(b))for(let D=0,P=b.length;D<P;D++)h(b[D],E,D,w);else h(b,E,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,A,S,w){if(u(M,A,S,w)===!0){let E=M.__offset,_=M.value;if(Array.isArray(_)){let b=0;for(let D=0;D<_.length;D++){let P=_[D],L=x(P,!0);d(P,M.__data,b),b+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,M.__data)}}function d(M,A,S){typeof M=="number"||typeof M=="boolean"?A[S]=M:M.isMatrix3?(A[S]=M.elements[0],A[S+1]=M.elements[1],A[S+2]=M.elements[2],A[S+3]=0,A[S+4]=M.elements[3],A[S+5]=M.elements[4],A[S+6]=M.elements[5],A[S+7]=0,A[S+8]=M.elements[6],A[S+9]=M.elements[7],A[S+10]=M.elements[8],A[S+11]=0):ArrayBuffer.isView(M)?A.set(M.subarray(0,A.length-S),S):M.toArray(A,S)}function u(M,A,S,w){let E=M.value,_=A+"_"+S;if(Array.isArray(E)){w[_]===void 0&&(w[_]=[]);let b=w[_],D=!1;for(let P=0;P<E.length;P++)f(E[P],b,P)===!0&&(D=!0);return D}return f(E,w,_)}function f(M,A,S){if(A[S]===void 0)return typeof M=="number"||typeof M=="boolean"?A[S]=M:ArrayBuffer.isView(M)?A[S]=M.slice():A[S]=M.clone(),!0;{let w=A[S];if(typeof M=="number"||typeof M=="boolean"){if(w!==M)return A[S]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(w.equals(M)===!1)return w.copy(M),!0}}return!1}function g(M){let A=M.uniforms,S=0,w=16;for(let _=0,b=A.length;_<b;_++){let D=Array.isArray(A[_])?A[_]:[A[_]];for(let P=0,L=D.length;P<L;P++){let U=D[P],k=Array.isArray(U.value)?U.value:[U.value],C=Array.isArray(A[_])||Array.isArray(U.value),H=S;for(let G=0,Q=k.length;G<Q;G++){let W=k[G],j=x(W,C),tt=S%w,yt=tt%j.boundary,Gt=tt+yt;S+=yt,Gt!==0&&w-Gt<j.storage&&(S+=w-Gt),G===0&&(H=S),S+=j.storage}let X=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new X((S-H)/Float32Array.BYTES_PER_ELEMENT),U.__offset=H}}let E=S%w;return E>0&&(S+=w-E),M.__size=S,M.__cache={},this}function x(M,A){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=16,S.storage=48):M.isMatrix4?(S.boundary=16,S.storage=64):M.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",M),A===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function p(M){let A=M.target;A.removeEventListener("dispose",p),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:m}}var Ab=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hn=null;function Rb(){return Hn===null&&(Hn=new _c(Ab,16,16,js,gi),Hn.name="DFG_LUT",Hn.minFilter=Ci,Hn.magFilter=Ci,Hn.wrapS=Fn,Hn.wrapT=Fn,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}var bh=class{constructor(t={}){let{canvas:e=x0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Bi}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=f,p=new Set([Gc,zc,kc]),m=new Set([Bi,En,xa,br,Oc,Bc]),M=new Uint32Array(4),A=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},w=null,E=null,_=[],b=[],D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,L=!1,U=null,k=null,C=null,H=null;this._outputColorSpace=$e;let X=0,G=0,Q=null,W=-1,j=null,tt=new Ne,yt=new Ne,Gt=null,Y=new Nt(0),mt=0,St=e.width,Ut=e.height,nt=1,Vt=null,Pe=null,kt=new Ne(0,0,St,Ut),ge=new Ne(0,0,St,Ut),_e=!1,Qt=new Hs,fi=new vc,je=!1,Oi=!1,Ue=new Te,Nn=new F,oi=new Ne,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},sn=!1;function rn(){return Q===null?nt:1}let N=n;function an(y,I){return e.getContext(y,I)}let Ie,Le,pt,Qe,Ot,Xt,T,v,B,et,J,at,ut,$,K,lt,R,Z,q,ct,st,ot,Pt;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ft,!1),e.addEventListener("webglcontextrestored",Yt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),N===null){let I="webgl2";if(N=an(I,y),N===null)throw an(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Kt()}catch(y){throw e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),Ht("WebGLRenderer: "+y.message),y}function Kt(){Ie=new kS(N),Ie.init(),st=new Sb(N,Ie),Le=new RS(N,Ie,t,st),pt=new xb(N,Ie),Le.reversedDepthBuffer&&u&&pt.buffers.depth.setReversed(!0),k=N.createFramebuffer(),C=N.createFramebuffer(),H=N.createFramebuffer(),Qe=new HS(N),Ot=new rb,Xt=new yb(N,Ie,pt,Ot,Le,st,Qe),T=new BS(P),v=new Wx(N),ot=new wS(N,v),B=new zS(N,v,Qe,ot),et=new WS(N,B,v,ot,Qe),Z=new VS(N,Le,Xt),K=new CS(Ot),J=new sb(P,T,Ie,Le,ot,K),at=new Tb(P,Ot),ut=new ob,$=new fb(Ie),R=new TS(P,T,pt,et,g,l),lt=new vb(P,et,Le),Pt=new wb(N,Qe,Le,pt),q=new AS(N,Ie,Qe),ct=new GS(N,Ie,Qe),Qe.programs=J.programs,P.capabilities=Le,P.extensions=Ie,P.properties=Ot,P.renderLists=ut,P.shadowMap=lt,P.state=pt,P.info=Qe}x!==Bi&&(D=new qS(x,e.width,e.height,o,s,r));let it=new of(P,N);this.xr=it,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let y=Ie.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Ie.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(y){y!==void 0&&(nt=y,this.setSize(St,Ut,!1))},this.getSize=function(y){return y.set(St,Ut)},this.setSize=function(y,I,V=!0){if(it.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}St=y,Ut=I,e.width=Math.floor(y*nt),e.height=Math.floor(I*nt),V===!0&&(e.style.width=y+"px",e.style.height=I+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(St*nt,Ut*nt).floor()},this.setDrawingBufferSize=function(y,I,V){St=y,Ut=I,nt=V,e.width=Math.floor(y*V),e.height=Math.floor(I*V),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(x===Bi){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(tt)},this.getViewport=function(y){return y.copy(kt)},this.setViewport=function(y,I,V,O){y.isVector4?kt.set(y.x,y.y,y.z,y.w):kt.set(y,I,V,O),pt.viewport(tt.copy(kt).multiplyScalar(rn()).round())},this.getScissor=function(y){return y.copy(ge)},this.setScissor=function(y,I,V,O){y.isVector4?ge.set(y.x,y.y,y.z,y.w):ge.set(y,I,V,O),pt.scissor(yt.copy(ge).multiplyScalar(rn()).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(y){pt.setScissorTest(_e=y)},this.setOpaqueSort=function(y){Vt=y},this.setTransparentSort=function(y){Pe=y},this.getClearColor=function(y){return y.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,V=!0){let O=0;if(y){let z=!1;if(Q!==null){let dt=Q.texture.format;z=p.has(dt)}if(z){let dt=Q.texture.type,Mt=m.has(dt),ht=R.getClearColor(),xt=R.getClearAlpha(),Ct=ht.r,qt=ht.g,ee=ht.b;Mt?(M[0]=Ct,M[1]=qt,M[2]=ee,M[3]=xt,N.clearBufferuiv(N.COLOR,0,M)):(A[0]=Ct,A[1]=qt,A[2]=ee,A[3]=xt,N.clearBufferiv(N.COLOR,0,A))}else O|=N.COLOR_BUFFER_BIT}I&&(O|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(O|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&N.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),U=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),R.dispose(),ut.dispose(),$.dispose(),Xt.dispose(),Ot.dispose(),T.dispose(),et.dispose(),B.dispose(),ot.dispose(),Pt.dispose(),J.dispose(),it.dispose(),it.removeEventListener("sessionstart",nm),it.removeEventListener("sessionend",sm),hr.stop()};function Ft(y){y.preventDefault(),mo("WebGLRenderer: Context Lost."),L=!0}function Yt(){mo("WebGLRenderer: Context Restored."),L=!1;let y=Qe.autoReset,I=lt.enabled,V=lt.autoUpdate,O=lt.needsUpdate,z=lt.type;Kt(),Qe.autoReset=y,lt.enabled=I,lt.autoUpdate=V,lt.needsUpdate=O,lt.type=z}function gt(y){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ve(y){let I=y.target;I.removeEventListener("dispose",ve),li(I)}function li(y){Ds(y),Ot.remove(y)}function Ds(y){let I=Ot.get(y).programs;I!==void 0&&(I.forEach(function(V){J.releaseProgram(V)}),y.isShaderMaterial&&J.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,V,O,z,dt){I===null&&(I=nn);let Mt=z.isMesh&&z.matrixWorld.determinantAffine()<0,ht=sx(y,I,V,O,z);pt.setMaterial(O,Mt);let xt=V.index,Ct=1;if(O.wireframe===!0){if(xt=B.getWireframeAttribute(V),xt===void 0)return;Ct=2}let qt=V.drawRange,ee=V.attributes.position,Et=qt.start*Ct,ie=(qt.start+qt.count)*Ct;dt!==null&&(Et=Math.max(Et,dt.start*Ct),ie=Math.min(ie,(dt.start+dt.count)*Ct)),xt!==null?(Et=Math.max(Et,0),ie=Math.min(ie,xt.count)):ee!=null&&(Et=Math.max(Et,0),ie=Math.min(ie,ee.count));let Xe=ie-Et;if(Xe<0||Xe===1/0)return;ot.setup(z,O,ht,V,xt);let Ee,Me=q;if(xt!==null&&(Ee=v.get(xt),Me=ct,Me.setIndex(Ee)),z.isMesh)O.wireframe===!0?(pt.setLineWidth(O.wireframeLinewidth*rn()),Me.setMode(N.LINES)):Me.setMode(N.TRIANGLES);else if(z.isLine){let xi=O.linewidth;xi===void 0&&(xi=1),pt.setLineWidth(xi*rn()),z.isLineSegments?Me.setMode(N.LINES):z.isLineLoop?Me.setMode(N.LINE_LOOP):Me.setMode(N.LINE_STRIP)}else z.isPoints?Me.setMode(N.POINTS):z.isSprite&&Me.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(Ie.get("WEBGL_multi_draw"))Me.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let xi=z._multiDrawStarts,Tt=z._multiDrawCounts,Ai=z._multiDrawCount,fe=xt?v.get(xt).bytesPerElement:1,ur=Ot.get(O).currentProgram.getUniforms();for(let yi=0;yi<Ai;yi++)ur.setValue(N,"_gl_DrawID",yi),Me.render(xi[yi]/fe,Tt[yi])}else if(z.isInstancedMesh)Me.renderInstances(Et,Xe,z.count);else if(V.isInstancedBufferGeometry){let xi=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Tt=Math.min(V.instanceCount,xi);Me.renderInstances(Et,Xe,Tt)}else Me.render(Et,Xe)};function im(y,I,V,O){U!==null&&y.isNodeMaterial&&U.setObject(O,y),je===!0&&K.setState(y,V,!1),y.transparent===!0&&y.side===hn&&y.forceSinglePass===!1?(y.side=Ii,y.needsUpdate=!0,eo(y,I,O),y.side=Zs,y.needsUpdate=!0,eo(y,I,O),y.side=hn):eo(y,I,O)}this.compile=function(y,I,V=null){V===null&&(V=y),U!==null&&U.renderStart(y,I,V),E=$.get(V),E.init(I),b.push(E),V.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),y!==V&&y.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights(),U!==null&&U.updateLights(E.state.lightsArray),Oi=this.localClippingEnabled,je=K.init(this.clippingPlanes,Oi),je===!0&&K.setGlobalState(this.clippingPlanes,I),U!==null&&lt.render(E.state.shadowsArray,V,I);let O=new Set;return y.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let dt=z.material;if(dt)if(Array.isArray(dt))for(let Mt=0;Mt<dt.length;Mt++){let ht=dt[Mt];im(ht,V,I,z),O.add(ht)}else im(dt,V,I,z),O.add(dt)}),E=b.pop(),U!==null&&U.renderEnd(),O},this.compileAsync=function(y,I,V=null){let O=this.compile(y,I,V);return new Promise(z=>{function dt(){if(O.forEach(function(Mt){let xt=Ot.get(Mt).currentProgram;(xt===void 0||xt.isReady())&&O.delete(Mt)}),O.size===0){z(y);return}setTimeout(dt,10)}Ie.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Vu=null;function ix(y){Vu&&Vu(y)}function nm(){hr.stop()}function sm(){hr.start()}let hr=new J0;hr.setAnimationLoop(ix),typeof self<"u"&&hr.setContext(self),this.setAnimationLoop=function(y){Vu=y,it.setAnimationLoop(y),y===null?hr.stop():hr.start()},it.addEventListener("sessionstart",nm),it.addEventListener("sessionend",sm),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(y,I);let V=it.enabled===!0&&it.isPresenting===!0,O=D!==null&&(Q===null||V)&&D.begin(P,Q);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(I),I=it.getCamera()),y.isScene===!0&&y.onBeforeRender(P,y,I,Q),E=$.get(y,b.length),E.init(I),E.state.textureUnits=Xt.getTextureUnits(),b.push(E),Ue.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?fi.setFromArrayCamera(I):Qt.setFromProjectionMatrix(Ue,ln,I.reversedDepth),Oi=this.localClippingEnabled,je=K.init(this.clippingPlanes,Oi),w=ut.get(y,_.length),w.init(),_.push(w),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){let Mt=P.xr.getDepthSensingMesh();Mt!==null&&Wu(Mt,I,-1/0,P.sortObjects)}Wu(y,I,0,P.sortObjects),w.finish(),U!==null&&U.updateLights(E.state.lightsArray),P.sortObjects===!0&&w.sort(Vt,Pe),sn=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,sn&&R.addToRenderList(w,y),this.info.autoReset===!0&&this.info.reset(),je===!0&&K.beginShadows();let z=E.state.shadowsArray;if(lt.render(z,y,I),je===!0&&K.endShadows(),(O&&D.hasRenderPass())===!1){let Mt=w.opaque,ht=w.transmissive;if(E.setupLights(),I.isArrayCamera){let xt=I.cameras;if(ht.length>0)for(let Ct=0,qt=xt.length;Ct<qt;Ct++){let ee=xt[Ct];am(Mt,ht,y,ee)}sn&&R.render(y);for(let Ct=0,qt=xt.length;Ct<qt;Ct++){let ee=xt[Ct];rm(w,y,ee,ee.viewport)}}else ht.length>0&&am(Mt,ht,y,I),sn&&R.render(y),rm(w,y,I)}Q!==null&&G===0&&(Xt.updateMultisampleRenderTarget(Q),Xt.updateRenderTargetMipmap(Q)),O&&D.end(P),y.isScene===!0&&y.onAfterRender(P,y,I),ot.resetDefaultState(),W=-1,j=null,b.pop(),b.length>0?(E=b[b.length-1],Xt.setTextureUnits(E.state.textureUnits),je===!0&&K.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,U!==null&&U.renderEnd()};function Wu(y,I,V,O){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){let Mt=I.isArrayCamera?fi:Qt;if(!y.frustumCulled||y.intersectsFrustum(Mt)){O&&oi.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ue);let ht=et.update(y),xt=y.material;xt.visible&&w.push(y,ht,xt,V,oi.z,null,I)}}else if(y.isMesh||y.isLine||y.isPoints){let Mt=I.isArrayCamera?fi:Qt;if(!y.frustumCulled||y.intersectsFrustum(Mt)){let ht=et.update(y),xt=y.material;if(O&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),oi.copy(y.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),oi.copy(ht.boundingSphere.center)),oi.applyMatrix4(y.matrixWorld).applyMatrix4(Ue)),Array.isArray(xt)){let Ct=ht.groups;for(let qt=0,ee=Ct.length;qt<ee;qt++){let Et=Ct[qt],ie=xt[Et.materialIndex];ie&&ie.visible&&w.push(y,ht,ie,V,oi.z,Et,I)}}else xt.visible&&w.push(y,ht,xt,V,oi.z,null,I)}}}let dt=y.children;for(let Mt=0,ht=dt.length;Mt<ht;Mt++)Wu(dt[Mt],I,V,O)}function rm(y,I,V,O){let{opaque:z,transmissive:dt,transparent:Mt}=y;E.setupLightsView(V),je===!0&&K.setGlobalState(P.clippingPlanes,V),O&&pt.viewport(tt.copy(O)),z.length>0&&Al(z,I,V),dt.length>0&&Al(dt,I,V),Mt.length>0&&Al(Mt,I,V),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function am(y,I,V,O){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[O.id]===void 0){let Et=Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[O.id]=new ti(1,1,{generateMipmaps:!0,type:Et?gi:Bi,minFilter:ms,samples:Math.max(4,Le.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}let dt=E.state.transmissionRenderTarget[O.id],Mt=O.viewport||tt;dt.setSize(Mt.z*P.transmissionResolutionScale,Mt.w*P.transmissionResolutionScale);let ht=P.getRenderTarget(),xt=P.getActiveCubeFace(),Ct=P.getActiveMipmapLevel();P.setRenderTarget(dt),P.getClearColor(Y),mt=P.getClearAlpha(),mt<1&&P.setClearColor(16777215,.5),P.clear(),sn&&R.render(V);let qt=P.toneMapping;P.toneMapping=Gn;let ee=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),E.setupLightsView(O),je===!0&&K.setGlobalState(P.clippingPlanes,O),Al(y,V,O),Xt.updateMultisampleRenderTarget(dt),Xt.updateRenderTargetMipmap(dt),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let ie=0,Xe=I.length;ie<Xe;ie++){let Ee=I[ie],{object:Me,geometry:xi,material:Tt,group:Ai}=Ee;if(Tt.side===hn&&Me.layers.test(O.layers)){let fe=Tt.side;Tt.side=Ii,Tt.needsUpdate=!0,om(Me,V,O,xi,Tt,Ai),Tt.side=fe,Tt.needsUpdate=!0,Et=!0}}Et===!0&&(Xt.updateMultisampleRenderTarget(dt),Xt.updateRenderTargetMipmap(dt))}P.setRenderTarget(ht,xt,Ct),P.setClearColor(Y,mt),ee!==void 0&&(O.viewport=ee),P.toneMapping=qt}function Al(y,I,V){let O=I.isScene===!0?I.overrideMaterial:null;for(let z=0,dt=y.length;z<dt;z++){let Mt=y[z],{object:ht,geometry:xt,group:Ct}=Mt,qt=Mt.material;qt.allowOverride===!0&&O!==null&&(qt=O),ht.layers.test(V.layers)&&om(ht,I,V,xt,qt,Ct)}}function om(y,I,V,O,z,dt){U!==null&&z.isNodeMaterial&&U.setObject(y,z),y.onBeforeRender(P,I,V,O,z,dt),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(P,I,V,O,y,dt),z.transparent===!0&&z.side===hn&&z.forceSinglePass===!1?(z.side=Ii,z.needsUpdate=!0,P.renderBufferDirect(V,I,O,z,y,dt),z.side=Zs,z.needsUpdate=!0,P.renderBufferDirect(V,I,O,z,y,dt),z.side=hn):P.renderBufferDirect(V,I,O,z,y,dt),y.onAfterRender(P,I,V,O,z,dt)}function lm(y){let I=0;for(let V of y)V.texture!==null&&I++;return I}function eo(y,I,V){I.isScene!==!0&&(I=nn);let O=Ot.get(y),z=E.state.lights,dt=E.state.shadowsArray,Mt=z.state.version,ht=J.getParameters(y,z.state,dt,I,V,E.state.lightProbeGridArray),xt=J.getProgramCacheKey(ht),Ct=O.programs;O.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,O.fog=I.fog;let qt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;O.envMap=T.get(y.envMap||O.environment,qt),O.envMapRotation=O.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Ct===void 0&&(y.addEventListener("dispose",ve),Ct=new Map,O.programs=Ct,O.programVariants=new Map);let ee=Ct.get(xt);if(ee!==void 0){if(O.currentProgram===ee&&O.lightsStateVersion===Mt)return hm(y,ht),ee}else ht.uniforms=J.getUniforms(y),U!==null&&y.isNodeMaterial&&U.build(y,V,ht),y.onBeforeCompile(ht,P),ee=J.acquireProgram(ht,xt),Ct.set(xt,ee),O.uniforms=ht.uniforms;let Et=O.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Et.clippingPlanes=K.uniform),hm(y,ht),O.needsLights=ax(y),O.lightsStateVersion=Mt,O.needsLights&&(Et.ambientLightColor.value=z.state.ambient,Et.lightProbe.value=z.state.probe,Et.sunLights.value=z.state.sun,Et.sunLightShadows.value=z.state.sunShadow,Et.directionalLights.value=z.state.directional,Et.directionalLightShadows.value=z.state.directionalShadow,Et.spotLights.value=z.state.spot,Et.spotLightShadows.value=z.state.spotShadow,Et.rectAreaLights.value=z.state.rectArea,Et.ltc_1.value=z.state.rectAreaLTC1,Et.ltc_2.value=z.state.rectAreaLTC2,Et.pointLights.value=z.state.point,Et.pointLightShadows.value=z.state.pointShadow,Et.hemisphereLights.value=z.state.hemi,Et.sunShadowMatrix.value=z.state.sunShadowMatrix,Et.sunShadowCascade.value=z.state.sunShadowCascade,Et.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Et.spotLightMatrix.value=z.state.spotLightMatrix,Et.spotLightMap.value=z.state.spotLightMap,Et.pointShadowMatrix.value=z.state.pointShadowMatrix),O.numLightProbeGrids=lm(E.state.lightProbeGridArray),O.currentProgram=ee,O.uniformsList=null,ee}function nx(y,I,V,O,z){let dt=Ot.get(y),Mt=dt.currentProgram.id+","+O+","+z,ht=dt.programVariants.get(Mt);return ht===void 0?(ht=eo(y,I,V),dt.programVariants.set(Mt,ht)):(dt.currentProgram=ht,dt.uniformsList=null,dt.outputColorSpace=O,dt.toneMapping=z),ht}function cm(y){if(y.uniformsList===null){let I=y.currentProgram.getUniforms();y.uniformsList=ya.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function hm(y,I){let V=Ot.get(y);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function sx(y,I,V,O,z){I.isScene!==!0&&(I=nn),Xt.resetTextureUnits();let dt=I.fog,Mt=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?I.environment:null,ht=Q===null?P.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:te.workingColorSpace,xt=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Ct=T.get(O.envMap||Mt,xt),qt=O.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ee=!!V.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Et=!!V.morphAttributes.position,ie=!!V.morphAttributes.normal,Xe=!!V.morphAttributes.color,Ee=Gn;O.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ee=P.toneMapping);let Me=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,xi=Me!==void 0?Me.length:0,Tt=Ot.get(O),Ai=E.state.lights;if(je===!0&&(Oi===!0||y!==j)){let Oe=y===j&&O.id===W;K.setState(O,y,Oe)}let fe=!1,ur=!1;O.version===Tt.__version?Tt.needsLights&&Tt.lightsStateVersion!==Ai.state.version||z.isBatchedMesh&&Tt.batching===!1||!z.isBatchedMesh&&Tt.batching===!0||z.isBatchedMesh&&Tt.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Tt.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Tt.instancing===!1||!z.isInstancedMesh&&Tt.instancing===!0||z.isSkinnedMesh&&Tt.skinning===!1||!z.isSkinnedMesh&&Tt.skinning===!0||z.isInstancedMesh&&Tt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Tt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Tt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Tt.instancingMorph===!1&&z.morphTexture!==null||Tt.envMap!==Ct||O.fog===!0&&Tt.fog!==dt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==K.numPlanes||Tt.numIntersection!==K.numIntersection)||Tt.vertexAlphas!==qt||Tt.vertexTangents!==ee||Tt.morphTargets!==Et||Tt.morphNormals!==ie||Tt.morphColors!==Xe||Tt.morphTargetsCount!==xi||Tt.numLightProbeGrids!==lm(E.state.lightProbeGridArray)?fe=!0:(Tt.outputColorSpace!==ht||Tt.toneMapping!==Ee)&&(ur=!0):(fe=!0,Tt.__version=O.version);let yi=Tt.currentProgram;(fe===!0||ur===!0)&&(yi=ur===!0?nx(O,I,z,ht,Ee):eo(O,I,z),U&&O.isNodeMaterial&&U.onUpdateProgram(O,yi,Tt));let Rl=!1,Fs=!1,dr=!1,oe=yi.getUniforms(),pi=Tt.uniforms;if(pt.useProgram(yi.program)&&(Rl=!0,Fs=!0,dr=!0),O.id!==W&&(W=O.id,Fs=!0),Rl||j!==y){pt.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),oe.setValue(N,"projectionMatrix",y.projectionMatrix),oe.setValue(N,"viewMatrix",y.matrixWorldInverse);let ci=oe.map.cameraPosition;ci!==void 0&&ci.setValue(N,Nn.setFromMatrixPosition(y.matrixWorld)),Le.logarithmicDepthBuffer&&oe.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&oe.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),j!==y&&(j=y,Fs=!0,dr=!0)}if(Tt.needsLights&&(Ai.state.sunShadowMap.length>0&&oe.setValue(N,"sunShadowMap",Ai.state.sunShadowMap,Xt),Ai.state.directionalShadowMap.length>0&&oe.setValue(N,"directionalShadowMap",Ai.state.directionalShadowMap,Xt),Ai.state.spotShadowMap.length>0&&oe.setValue(N,"spotShadowMap",Ai.state.spotShadowMap,Xt),Ai.state.pointShadowMap.length>0&&oe.setValue(N,"pointShadowMap",Ai.state.pointShadowMap,Xt)),z.isSkinnedMesh){oe.setOptional(N,z,"bindMatrix"),oe.setOptional(N,z,"bindMatrixInverse");let Oe=z.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),oe.setValue(N,"boneTexture",Oe.boneTexture,Xt))}z.isBatchedMesh&&(oe.setOptional(N,z,"batchingTexture"),oe.setValue(N,"batchingTexture",z._matricesTexture,Xt),oe.setOptional(N,z,"batchingIdTexture"),oe.setValue(N,"batchingIdTexture",z._indirectTexture,Xt),oe.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&oe.setValue(N,"batchingColorTexture",z._colorsTexture,Xt));let _n=V.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&Z.update(z,V,yi),(Fs||Tt.receiveShadow!==z.receiveShadow)&&(Tt.receiveShadow=z.receiveShadow,oe.setValue(N,"receiveShadow",z.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&I.environment!==null&&(pi.envMapIntensity.value=I.environmentIntensity),pi.dfgLUT!==void 0&&(pi.dfgLUT.value=Rb()),Fs){if(oe.setValue(N,"toneMappingExposure",P.toneMappingExposure),Tt.needsLights&&rx(pi,dr),dt&&O.fog===!0&&at.refreshFogUniforms(pi,dt),at.refreshMaterialUniforms(pi,O,nt,Ut,E.state.transmissionRenderTarget[y.id]),Tt.needsLights&&Tt.numLightProbeGrids>0){let Oe=S,ci=0;for(let is of E.state.lightProbeGridArray)is.texture!==null&&(Oe.textures[ci]=is.texture,Oe.min[ci]=is.boundingBox.min,Oe.max[ci]=is.boundingBox.max,Oe.resolution[ci]=is.resolution,ci++);for(let is in Oe)Oe[is].length=ci;pi.probesSH.value=Oe.textures,pi.probesMin.value=Oe.min,pi.probesMax.value=Oe.max,pi.probesResolution.value=Oe.resolution}ya.upload(N,cm(Tt),pi,Xt)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ya.upload(N,cm(Tt),pi,Xt),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&oe.setValue(N,"center",z.center),oe.setValue(N,"modelViewMatrix",z.modelViewMatrix),oe.setValue(N,"normalMatrix",z.normalMatrix),oe.setValue(N,"modelMatrix",z.matrixWorld),O.uniformsGroups!==void 0){let Oe=O.uniformsGroups;for(let ci=0,is=Oe.length;ci<is;ci++){let dm=Oe[ci];Pt.update(dm,yi),Pt.bind(dm,yi)}}return yi}function rx(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.sunLights.needsUpdate=I,y.sunLightShadows.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function ax(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(y,I,V){let O=Ot.get(y);O.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Ot.get(y.texture).__webglTexture=I,Ot.get(y.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:V,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){let V=Ot.get(y);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,V=0){Q=y,X=I,G=V;let O=null,z=!1,dt=!1;if(y){let ht=Ot.get(y);if(ht.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(N.FRAMEBUFFER,ht.__webglFramebuffer),tt.copy(y.viewport),yt.copy(y.scissor),Gt=y.scissorTest,pt.viewport(tt),pt.scissor(yt),pt.setScissorTest(Gt),W=-1;return}else if(ht.__webglFramebuffer===void 0)Xt.setupRenderTarget(y);else if(ht.__hasExternalTextures)Xt.rebindTextures(y,Ot.get(y.texture).__webglTexture,Ot.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let qt=y.depthTexture;if(ht.__boundDepthTexture!==qt){if(qt!==null&&Ot.has(qt)&&(y.width!==qt.image.width||y.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Xt.setupDepthRenderbuffer(y)}}let xt=y.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(dt=!0);let Ct=Ot.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ct[I])?O=Ct[I][V]:O=Ct[I],z=!0):y.samples>0&&Xt.useMultisampledRTT(y)===!1?O=Ot.get(y).__webglMultisampledFramebuffer:Array.isArray(Ct)?O=Ct[V]:O=Ct,tt.copy(y.viewport),yt.copy(y.scissor),Gt=y.scissorTest}else tt.copy(kt).multiplyScalar(nt).floor(),yt.copy(ge).multiplyScalar(nt).floor(),Gt=_e;if(V!==0&&(O=k),pt.bindFramebuffer(N.FRAMEBUFFER,O)&&pt.drawBuffers(y,O),pt.viewport(tt),pt.scissor(yt),pt.setScissorTest(Gt),z){let ht=Ot.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,ht.__webglTexture,V)}else if(dt){let ht=I;for(let xt=0;xt<y.textures.length;xt++){let Ct=Ot.get(y.textures[xt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+xt,Ct.__webglTexture,V,ht)}}else if(y!==null&&V!==0){let ht=Ot.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ht.__webglTexture,V)}W=-1};function um(y){let I=Ot.get(y);return(I.__readFormat!==y.format||I.__readType!==y.type)&&(I.__readFormat=y.format,I.__readType=y.type,I.__formatReadable=Le.textureFormatReadable(y.format),I.__typeReadable=Le.textureTypeReadable(y.type)),I}this.readRenderTargetPixels=function(y,I,V,O,z,dt,Mt,ht=0){if(!(y&&y.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Ot.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Mt!==void 0&&(xt=xt[Mt],Array.isArray(xt)&&(xt=xt[0])),xt){pt.bindFramebuffer(N.FRAMEBUFFER,xt);try{let Ct=y.textures[ht],qt=Ct.format,ee=Ct.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ht);let Et=um(Ct);if(Et.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Et.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-O&&V>=0&&V<=y.height-z&&N.readPixels(I,V,O,z,st.convert(qt),st.convert(ee),dt)}finally{let Ct=Q!==null?Ot.get(Q).__webglFramebuffer:null;pt.bindFramebuffer(N.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(y,I,V,O,z,dt,Mt,ht=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Ot.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Mt!==void 0&&(xt=xt[Mt],Array.isArray(xt)&&(xt=xt[0])),xt)if(I>=0&&I<=y.width-O&&V>=0&&V<=y.height-z){pt.bindFramebuffer(N.FRAMEBUFFER,xt);let Ct=y.textures[ht],qt=Ct.format,ee=Ct.type;y.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ht);let Et=um(Ct);if(Et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ie=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ie),N.bufferData(N.PIXEL_PACK_BUFFER,dt.byteLength,N.STREAM_READ),N.readPixels(I,V,O,z,st.convert(qt),st.convert(ee),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Xe=Q!==null?Ot.get(Q).__webglFramebuffer:null;pt.bindFramebuffer(N.FRAMEBUFFER,Xe);let Ee=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await S0(N,Ee,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ie),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,dt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ie),N.deleteSync(Ee),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,V=0){let O=Math.pow(2,-V),z=Math.floor(y.image.width*O),dt=Math.floor(y.image.height*O),Mt=I!==null?I.x:0,ht=I!==null?I.y:0;Xt.setTexture2D(y,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,Mt,ht,z,dt),pt.unbindTexture()},this.copyTextureToTexture=function(y,I,V=null,O=null,z=0,dt=0){let Mt,ht,xt,Ct,qt,ee,Et,ie,Xe,Ee=y.isCompressedTexture?y.mipmaps[dt]:y.image;if(V!==null)Mt=V.max.x-V.min.x,ht=V.max.y-V.min.y,xt=V.isBox3?V.max.z-V.min.z:1,Ct=V.min.x,qt=V.min.y,ee=V.isBox3?V.min.z:0;else{let oe=Math.pow(2,-z);Mt=Math.floor(Ee.width*oe),ht=Math.floor(Ee.height*oe),y.isDataArrayTexture?xt=Ee.depth:y.isData3DTexture?xt=Math.floor(Ee.depth*oe):xt=1,Ct=0,qt=0,ee=0}O!==null?(Et=O.x,ie=O.y,Xe=O.z):(Et=0,ie=0,Xe=0);let Me=st.convert(I.format),xi=st.convert(I.type),Tt;I.isData3DTexture?(Xt.setTexture3D(I,0),Tt=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Xt.setTexture2DArray(I,0),Tt=N.TEXTURE_2D_ARRAY):(Xt.setTexture2D(I,0),Tt=N.TEXTURE_2D),pt.activeTexture(N.TEXTURE0),pt.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),pt.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),pt.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);let Ai=pt.getParameter(N.UNPACK_ROW_LENGTH),fe=pt.getParameter(N.UNPACK_IMAGE_HEIGHT),ur=pt.getParameter(N.UNPACK_SKIP_PIXELS),yi=pt.getParameter(N.UNPACK_SKIP_ROWS),Rl=pt.getParameter(N.UNPACK_SKIP_IMAGES);pt.pixelStorei(N.UNPACK_ROW_LENGTH,Ee.width),pt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ee.height),pt.pixelStorei(N.UNPACK_SKIP_PIXELS,Ct),pt.pixelStorei(N.UNPACK_SKIP_ROWS,qt),pt.pixelStorei(N.UNPACK_SKIP_IMAGES,ee);let Fs=y.isDataArrayTexture||y.isData3DTexture,dr=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){let oe=Ot.get(y),pi=Ot.get(I),_n=Ot.get(oe.__renderTarget),Oe=Ot.get(pi.__renderTarget);pt.bindFramebuffer(N.READ_FRAMEBUFFER,_n.__webglFramebuffer),pt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let ci=0;ci<xt;ci++)Fs&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ot.get(y).__webglTexture,z,ee+ci),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ot.get(I).__webglTexture,dt,Xe+ci)),N.blitFramebuffer(Ct,qt,Ct+Mt,qt+ht,Et,ie,Et+Mt,ie+ht,N.DEPTH_BUFFER_BIT,N.NEAREST);pt.bindFramebuffer(N.READ_FRAMEBUFFER,null),pt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||y.isRenderTargetTexture||Ot.has(y)){let oe=Ot.get(y),pi=Ot.get(I);pt.bindFramebuffer(N.READ_FRAMEBUFFER,C),pt.bindFramebuffer(N.DRAW_FRAMEBUFFER,H);for(let _n=0;_n<xt;_n++)Fs?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,oe.__webglTexture,z,ee+_n):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,oe.__webglTexture,z),dr?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,pi.__webglTexture,dt,Xe+_n):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,pi.__webglTexture,dt),z!==0?N.blitFramebuffer(Ct,qt,Ct+Mt,qt+ht,Et,ie,Et+Mt,ie+ht,N.COLOR_BUFFER_BIT,N.NEAREST):dr?N.copyTexSubImage3D(Tt,dt,Et,ie,Xe+_n,Ct,qt,Mt,ht):N.copyTexSubImage2D(Tt,dt,Et,ie,Ct,qt,Mt,ht);pt.bindFramebuffer(N.READ_FRAMEBUFFER,null),pt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else dr?y.isDataTexture||y.isData3DTexture?N.texSubImage3D(Tt,dt,Et,ie,Xe,Mt,ht,xt,Me,xi,Ee.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(Tt,dt,Et,ie,Xe,Mt,ht,xt,Me,Ee.data):N.texSubImage3D(Tt,dt,Et,ie,Xe,Mt,ht,xt,Me,xi,Ee):y.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,dt,Et,ie,Mt,ht,Me,xi,Ee.data):y.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,dt,Et,ie,Ee.width,Ee.height,Me,Ee.data):N.texSubImage2D(N.TEXTURE_2D,dt,Et,ie,Mt,ht,Me,xi,Ee);pt.pixelStorei(N.UNPACK_ROW_LENGTH,Ai),pt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,fe),pt.pixelStorei(N.UNPACK_SKIP_PIXELS,ur),pt.pixelStorei(N.UNPACK_SKIP_ROWS,yi),pt.pixelStorei(N.UNPACK_SKIP_IMAGES,Rl),dt===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&N.generateMipmap(Tt),pt.unbindTexture()},this.initRenderTarget=function(y){Ot.get(y).__webglFramebuffer===void 0&&Xt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Xt.setTextureCube(y,0):y.isData3DTexture?Xt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Xt.setTexture2DArray(y,0):Xt.setTexture2D(y,0),pt.unbindTexture()},this.resetState=function(){X=0,G=0,Q=null,pt.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var Ma={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Ki=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Cb=new xr(-1,1,1,-1,0,1),lf=class extends He{constructor(){super(),this.setAttribute("position",new be([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new be([0,2,0,0,2,0],2))}},Pb=new lf,Qs=class{constructor(t){this._mesh=new ye(Pb,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Cb)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ah=class extends Ki{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Be?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=vs.clone(t.uniforms),this.material=new Be({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Qs(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var jo=class extends Ki{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Rh=class extends Ki{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ch=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new wt);this._width=n.width,this._height=n.height,e=new ti(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:gi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ah(Ma),this.copyPass.material.blending=ps,this.timer=new No}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}jo!==void 0&&(a instanceof jo?n=!0:a instanceof Rh&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new wt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ph=class extends Ki{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Nt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var lg={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Nt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ba=class i extends Ki{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new wt(t.x,t.y):new wt(256,256),this.clearColor=new Nt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ti(r,a,{type:gi,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new ti(r,a,{type:gi,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new ti(r,a,{type:gi,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=lg;this.highPassUniforms=vs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Be({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new wt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=vs.clone(Ma.uniforms),this.blendMaterial=new Be({uniforms:this.copyUniforms,vertexShader:Ma.vertexShader,fragmentShader:Ma.fragmentShader,premultipliedAlpha:!0,blending:Ei,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Nt,this._oldClearAlpha=1,this._basic=new cn,this._fsQuad=new Qs(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new wt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Be({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new wt(.5,.5)},direction:{value:new wt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Be({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};ba.BlurDirectionX=new wt(1,0);ba.BlurDirectionY=new wt(0,1);var Qo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Ih=class extends Ki{constructor(){super(),this.isOutputPass=!0,this.uniforms=vs.clone(Qo.uniforms),this.material=new pa({name:Qo.name,uniforms:this.uniforms,vertexShader:Qo.vertexShader,fragmentShader:Qo.fragmentShader}),this._fsQuad=new Qs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},te.getTransfer(this._outputColorSpace)===he&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Uo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Oo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Sr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ko?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===zo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Bo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var cg=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,hg=`
precision highp float;

uniform vec2  uResolution;
uniform float uTime;
uniform vec2  uPointer;
uniform float uMood;    // 0 极光 / 1 雪夜 / 2 暖星
uniform float uGalaxy;  // 0..1 爆散程度
varying vec2  vUv;

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 4; i++) {
    v += a * vnoise(p);
    p = m * p;
    a *= 0.5;
  }
  return v;
}

vec3 auroraA() {
  if (uMood < 0.5) return vec3(0.13, 0.98, 0.82);
  if (uMood < 1.5) return vec3(0.62, 0.46, 1.00);
  return vec3(1.00, 0.80, 0.42);
}
vec3 auroraB() {
  if (uMood < 0.5) return vec3(0.14, 0.42, 1.00);
  if (uMood < 1.5) return vec3(1.00, 0.30, 0.58);
  return vec3(1.00, 0.54, 0.22);
}

// 一条极光飘带
float auroraBand(float x, float y, float seed, float speed, float freq, out float curtain) {
  float center = 0.585
    + 0.105 * sin(x * freq * 3.0 + seed + uTime * speed * 0.55)
    + 0.058 * sin(x * freq * 7.3 - uTime * speed * 0.85 + seed * 2.3)
    + 0.024 * sin(x * freq * 17.0 + uTime * speed * 1.25 + seed * 4.1);
  float d = y - center;
  float body = exp(-d * d * 110.0);
  float core = exp(-d * d * 900.0);
  curtain = fbm(vec2(x * 7.0 + seed * 3.0 - uTime * 0.10, y * 2.6 - uTime * 0.04));
  float streak = smoothstep(0.22, 0.78, curtain);
  // 大尺度明暗：让飘带时断时续，而不是一整条均匀亮带
  float region = smoothstep(0.05, 0.74, fbm(vec2(x * 2.1 + seed * 5.0, seed * 3.7 + uTime * 0.03)));
  float vertical = 0.62 + 0.52 * vnoise(vec2(x * 130.0 + seed, y * 6.0 + uTime * 0.15));
  float mask = smoothstep(0.30, 0.50, y) * smoothstep(1.02, 0.72, y);
  return (body * 0.52 + core * 1.05) * (0.26 + 1.15 * streak) * vertical * region * mask;
}

// 雪山山脊（尖峰）
float ridge(float x, float seed) {
  float h = 0.0;
  h += 0.10 * pow(abs(sin(x * 2.35 + seed * 1.7)), 1.5);
  h += 0.062 * pow(abs(sin(x * 4.95 + seed * 3.1)), 1.7);
  h += 0.030 * pow(abs(sin(x * 10.3 + seed * 5.7)), 1.9);
  h += 0.040 * (vnoise(vec2(x * 4.2 + seed * 2.0, seed * 3.0)) - 0.5);
  h += 0.022 * (vnoise(vec2(x * 13.0 + seed, seed * 7.0)) - 0.5);
  return h - 0.09;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  vec3 col = vec3(0.0);

  // 视差
  float px = uPointer.x * 0.012;
  float py = uPointer.y * 0.008;
  vec2 p = vec2(uv.x + px, uv.y + py);

  // ── 夜空底色 ────────────────────────────────
  vec3 skyTop = uMood < 0.5 ? vec3(0.004, 0.010, 0.030)
             : uMood < 1.5 ? vec3(0.012, 0.006, 0.034)
             : vec3(0.016, 0.010, 0.022);
  vec3 skyHor = uMood < 0.5 ? vec3(0.028, 0.072, 0.145)
             : uMood < 1.5 ? vec3(0.105, 0.055, 0.175)
             : vec3(0.155, 0.090, 0.048);
  col = mix(skyHor, skyTop, smoothstep(0.10, 0.92, uv.y));

  // 地平线余光
  float haze = exp(-pow((uv.y - 0.30) * 4.6, 2.0));
  col += mix(auroraA(), auroraB(), 0.42) * haze * 0.03;
  col += vec3(0.06, 0.14, 0.24) * haze * 0.07;

  // ── 极光 ──────────────────────────────────
  float curtainA, curtainB, curtainC;
  float a1 = auroraBand(p.x, p.y - 0.105, 1.0, 0.55, 1.0, curtainA);
  float a2 = auroraBand(p.x * 0.92 + 0.22, p.y - 0.015, 4.7, 0.34, 1.45, curtainB);
  float a3 = auroraBand(p.x * 1.15 - 0.10, p.y - 0.175, 9.3, 0.22, 0.72, curtainC);

  vec3 cA = mix(auroraA(), auroraB(), smoothstep(0.15, 0.95, curtainA));
  vec3 cB = mix(auroraB(), auroraA(), smoothstep(0.10, 0.90, curtainB));
  vec3 cC = mix(auroraA(), auroraB(), smoothstep(0.30, 0.85, curtainC));

  col += cA * a1 * (0.95 + 0.14 * uGalaxy);
  col += cB * a2 * 0.62;
  col += cC * a3 * 0.34;
  // 柔和极光雾气
  col += mix(cA, cB, 0.5) * exp(-pow((uv.y - 0.60) * 3.2, 2.0)) * 0.03;

  // ── 星空 ──────────────────────────────────
  vec2 starUv = uv * vec2(uResolution.x / uResolution.y, 1.0) * 190.0;
  vec2 cell = floor(starUv);
  vec2 f = fract(starUv) - 0.5;
  float rnd = hash21(cell);
  float star = smoothstep(0.075, 0.0, length(f)) * step(0.982, rnd);
  float twinkle = 0.30 + 0.70 * pow(0.5 + 0.5 * sin(uTime * 1.6 + rnd * 62.0), 3.0);
  star *= twinkle * smoothstep(0.26, 0.42, uv.y);
  col += vec3(0.70, 0.84, 1.00) * star * 1.5;

  // 亮星（带光晕）
  vec2 bigUv = uv * vec2(uResolution.x / uResolution.y, 1.0) * 26.0;
  vec2 bigCell = floor(bigUv);
  vec2 bigF = fract(bigUv) - 0.5;
  float bigRnd = hash21(bigCell + 17.0);
  float big = smoothstep(0.16, 0.0, length(bigF)) * step(0.90, bigRnd);
  big *= (0.45 + 0.55 * pow(0.5 + 0.5 * sin(uTime * 1.1 + bigRnd * 40.0), 2.0)) * smoothstep(0.30, 0.55, uv.y);
  col += vec3(0.82, 0.90, 1.00) * big * 1.1;

  // ── 雪山（远景 → 近景） ─────────────────────
  for (int i = 0; i < 3; i++) {
    float fi = float(i);
    float parallax = px * (0.5 + fi * 0.55);
    float base = 0.315 - fi * 0.055;
    float h = ridge(uv.x * 1.05 + fi * 11.0 + parallax, 3.0 + fi * 7.0) * 1.35;
    float mh = base + h - (0.055 * (1.0 - fi * 0.25));
    float mask = smoothstep(mh + 0.0025, mh - 0.0025, uv.y);

    vec3 mcol = mix(vec3(0.050, 0.088, 0.160), vec3(0.020, 0.038, 0.078), fi * 0.5);
    mcol = mix(mcol, vec3(0.085, 0.070, 0.100), uMood * 0.22);
    col = mix(col, mcol, mask);

    // 山脊积雪
    float rim = smoothstep(mh - 0.014, mh, uv.y) * mask;
    col += vec3(0.40, 0.60, 0.86) * rim * (0.46 - fi * 0.09);

    // 山体雪面噪声
    float snowPatch = smoothstep(0.55, 0.78, vnoise(vec2(uv.x * 26.0 + fi * 7.0, uv.y * 40.0))) * mask * 0.06;
    col += vec3(0.35, 0.55, 0.75) * snowPatch;
  }

  // ── 雪地与光池 ──────────────────────────────
  float gy = smoothstep(0.175, 0.085, uv.y);
  vec3 gcol = mix(vec3(0.020, 0.040, 0.072), vec3(0.095, 0.150, 0.235), smoothstep(0.0, 0.17, uv.y));
  float pool = exp(-pow((uv.x - 0.5) * 4.2, 2.0)) * exp(-pow((uv.y - 0.035) * 10.0, 2.0));
  gcol += auroraA() * pool * 0.34;
  gcol += vec3(0.10, 0.22, 0.32) * smoothstep(0.02, 0.16, uv.y) * 0.2;
  col = mix(col, gcol, gy * 0.94);

  // 雪地碎光
  vec2 glintUv = uv * vec2(uResolution.x / uResolution.y, 1.0) * 130.0;
  vec2 gc = floor(glintUv);
  vec2 gf = fract(glintUv) - 0.5;
  float grnd = hash21(gc + 5.0);
  float glint = smoothstep(0.09, 0.0, length(gf)) * step(0.975, grnd) * gy;
  glint *= 0.4 + 0.6 * pow(0.5 + 0.5 * sin(uTime * 2.0 + grnd * 70.0), 2.0);
  col += vec3(0.55, 0.78, 0.95) * glint * 1.1;

  // ── 星河状态：背景整体微微发亮 ────────────────
  col += vec3(0.06, 0.12, 0.24) * uGalaxy * 0.045 * smoothstep(0.78, 0.10, abs(uv.y - 0.52));

  // ── 暗角 / 颗粒 ────────────────────────────
  vec2 q = (uv - 0.5) * vec2(1.18, 1.02);
  col *= mix(0.46, 1.0, smoothstep(0.85, 0.28, length(q)));
  col += (hash21(gl_FragCoord.xy + fract(uTime) * 37.0) - 0.5) * 0.016;

  gl_FragColor = vec4(col, 1.0);
}
`,ug=`
precision highp float;

uniform float uTime;
uniform float uProgress;
uniform float uPixelRatio;
uniform float uViewportScale;
uniform float uGalaxyRotation;
uniform float uBurst;
uniform float uSizeScale;
uniform vec3  uHand;
uniform float uHandStrength;
uniform float uHandRadius;

attribute vec3  aPosA;
attribute vec3  aPosB;
attribute vec3  aColorA;
attribute vec3  aColorB;
attribute float aSize;
attribute float aPhase;
attribute float aSeed;

varying vec3  vColor;
varying float vAlpha;

mat2 rot2(float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c, -s, s, c);
}

void main() {
  float p = clamp(uProgress, -0.15, 1.18);
  float ease = smoothstep(0.0, 1.0, clamp(p, 0.0, 1.0));

  // ── 树的静止呼吸 ──────────────────────────────
  vec3 treePos = aPosA;
  treePos.xz = rot2(sin(uTime * 0.16 + aPhase * 0.22) * 0.018) * treePos.xz;
  treePos += vec3(
    sin(uTime * 0.70 + aPhase * 1.0) * 0.012,
    sin(uTime * 0.55 + aPhase * 1.7) * 0.016,
    cos(uTime * 0.80 + aPhase * 1.1) * 0.012
  );

  // ── 星河中的位置 ──────────────────────────────
  vec3 galPos = aPosB;
  float radius = length(galPos.xz);
  float swirl = uGalaxyRotation * (0.50 + radius * 0.11);
  galPos.xz = rot2(swirl) * galPos.xz;
  galPos.y += sin(uTime * 0.45 + aPhase * 2.0) * 0.14;

  vec3 pos = mix(treePos, galPos, ease);

  // ── 手部推开 & 绕流 ───────────────────────────
  vec3 d = pos - uHand;
  float dist = length(d);
  float infl = exp(-dist * dist / (2.0 * uHandRadius * uHandRadius)) * uHandStrength * (0.22 + 0.78 * ease);
  vec3 dir = normalize(d + vec3(0.0001));
  pos += dir * infl * 1.55;
  vec3 tangent = normalize(cross(dir, vec3(0.0, 1.0, 0.0)) + vec3(0.0001));
  pos += tangent * infl * 1.15 * (0.35 + 0.65 * sin(uTime * 2.2 + aPhase * 6.283));

  // ── 爆散脉冲 ─────────────────────────────────
  vec3 center = vec3(0.0, 1.9, 0.0);
  pos += normalize(pos - center + vec3(0.0001)) * uBurst * (0.30 + aSeed * 1.0);

  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;

  float size = aSize * uSizeScale * (1.0 + ease * 0.28 + infl * 0.45);
  gl_PointSize = size * uPixelRatio * (uViewportScale / max(1.0, -mv.z));
  gl_PointSize = clamp(gl_PointSize, 1.0, 64.0);

  float twinkle = 0.70 + 0.30 * sin(uTime * (1.1 + aSeed * 2.3) + aPhase * 6.283);
  vec3 col = mix(aColorA, aColorB, ease) * mix(1.0, 0.82, ease);
  col *= 0.78 + 0.62 * twinkle + infl * 0.9;

  vColor = col;
  vAlpha = (0.50 + 0.50 * twinkle) * (0.85 + 0.15 * ease);
}
`,dg=`
precision highp float;
varying vec3  vColor;
varying float vAlpha;

void main() {
  vec2 c = gl_PointCoord - 0.5;
  float r = length(c);
  if (r > 0.5) discard;
  float halo = smoothstep(0.5, 0.0, r);
  float core = smoothstep(0.16, 0.0, r);
  float a = pow(halo, 1.7);
  vec3 col = vColor * (0.55 + 1.45 * core);
  gl_FragColor = vec4(col * vAlpha, a * vAlpha);
}
`,fg=`
precision highp float;

uniform float uTime;
uniform float uProgress;
uniform float uPixelRatio;
uniform float uViewportScale;
uniform float uGalaxyRotation;
uniform float uBurst;
uniform vec3  uHand;
uniform float uHandStrength;
uniform float uHandRadius;

attribute vec3  aPosA;
attribute vec3  aPosB;
attribute vec3  aColorA;
attribute vec3  aColorB;
attribute float aSize;
attribute float aPhase;
attribute float aSeed;

varying vec3  vColor;
varying float vAlpha;

mat2 rot2(float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c, -s, s, c);
}

void main() {
  float p = clamp(uProgress, -0.15, 1.18);
  float ease = smoothstep(0.0, 1.0, clamp(p, 0.0, 1.0));

  vec3 treePos = aPosA;
  treePos.y += sin(uTime * 0.6 + aPhase * 6.283) * 0.02;

  vec3 galPos = aPosB;
  float radius = length(galPos.xz);
  galPos.xz = rot2(uGalaxyRotation * (0.50 + radius * 0.11)) * galPos.xz;
  galPos.y += sin(uTime * 0.4 + aPhase * 3.0) * 0.16;

  vec3 pos = mix(treePos, galPos, ease);

  vec3 d = pos - uHand;
  float dist = length(d);
  float infl = exp(-dist * dist / (2.0 * uHandRadius * uHandRadius)) * uHandStrength * (0.22 + 0.78 * ease);
  pos += normalize(d + vec3(0.0001)) * infl * 1.7;
  pos += normalize(pos - vec3(0.0, 1.9, 0.0) + vec3(0.0001)) * uBurst * (0.35 + aSeed * 1.1);

  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;

  float pulse = 0.85 + 0.15 * sin(uTime * 1.4 + aPhase * 6.283);
  float size = aSize * (1.0 + ease * 0.22) * pulse * uPixelRatio;
  gl_PointSize = size * (1.0 + 0.4 * infl) * (uViewportScale / max(1.0, -mv.z));
  gl_PointSize = clamp(gl_PointSize, 1.0, 96.0);

  vColor = mix(aColorA, aColorB, ease) * (0.95 + infl * 1.0);
  vAlpha = 0.95;
}
`,pg=`
precision highp float;
varying vec3  vColor;
varying float vAlpha;

void main() {
  vec2 c = gl_PointCoord - 0.5;
  float r = length(c) * 2.0;
  if (r > 1.0) discard;
  float core = smoothstep(0.34, 0.0, r);
  float halo = smoothstep(1.0, 0.0, r);
  vec3 col = vColor * (core * 1.7 + halo * 0.30);
  gl_FragColor = vec4(col, (core + halo * 0.42) * vAlpha);
}
`;var Jt=(i,t=0,e=1)=>i<t?t:i>e?e:i,xs=(i,t,e)=>i+(t-i)*e,Ea=(i,t,e)=>{let n=Jt((e-i)/(t-i));return n*n*(3-2*n)},Ye=(i,t,e,n)=>xs(i,t,1-Math.exp(-e*n));function cf(i,t){return i+Math.random()*(t-i)}function ys(){let i=0,t=0;for(;i===0;)i=Math.random();for(;t===0;)t=Math.random();return Math.sqrt(-2*Math.log(i))*Math.cos(2*Math.PI*t)}function Lh(i){return String(Math.max(0,Math.floor(i))).padStart(2,"0")}function mg(i=128){let t=document.createElement("canvas");t.width=t.height=i;let e=t.getContext("2d"),n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.22,"rgba(255,255,255,0.92)"),n.addColorStop(.55,"rgba(255,255,255,0.24)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,i,i);let s=new _r(t);return s.colorSpace=$e,s}function gg(i=512){let t=document.createElement("canvas");t.width=t.height=i;let e=t.getContext("2d"),n=i/2,s=e.createRadialGradient(n,n,0,n,n,n);s.addColorStop(0,"rgba(255,252,235,0.95)"),s.addColorStop(.1,"rgba(255,236,176,0.55)"),s.addColorStop(.3,"rgba(255,205,120,0.16)"),s.addColorStop(1,"rgba(255,190,90,0)"),e.fillStyle=s,e.fillRect(0,0,i,i),e.save(),e.translate(n,n),e.globalCompositeOperation="lighter";for(let h=0;h<4;h++){e.save(),e.rotate(h*Math.PI/2);let d=e.createLinearGradient(0,0,n*1.05,0);d.addColorStop(0,"rgba(255,248,215,0.85)"),d.addColorStop(.35,"rgba(255,225,150,0.26)"),d.addColorStop(1,"rgba(255,210,120,0)"),e.fillStyle=d,e.beginPath(),e.moveTo(0,0),e.lineTo(n*1.05,-n*.028),e.lineTo(n*1.05,n*.028),e.closePath(),e.fill(),e.restore()}e.restore();let r=e.createRadialGradient(n,n*.94,2,n,n,n*.42);r.addColorStop(0,"rgba(255,255,248,1)"),r.addColorStop(.45,"rgba(255,238,180,0.98)"),r.addColorStop(1,"rgba(255,196,92,0.86)"),e.fillStyle=r,e.beginPath();let a=i*.21,o=a*.44;for(let h=0;h<10;h++){let d=h%2===0?a:o,u=-Math.PI/2+h*Math.PI/5,f=n+Math.cos(u)*d,g=n+Math.sin(u)*d;h===0?e.moveTo(f,g):e.lineTo(f,g)}e.closePath(),e.fill();let l=e.createRadialGradient(n,n,0,n,n,a*.55);l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(.5,"rgba(255,248,220,0.65)"),l.addColorStop(1,"rgba(255,235,180,0)"),e.fillStyle=l,e.beginPath(),e.arc(n,n,a*.55,0,Math.PI*2),e.fill();let c=new _r(t);return c.colorSpace=$e,c}function Ta(i=256,t="rgba(120,235,225,"){let e=document.createElement("canvas");e.width=e.height=i;let n=e.getContext("2d"),s=i/2,r=n.createRadialGradient(s,s,0,s,s,s);r.addColorStop(0,t+"0.55)"),r.addColorStop(.32,t+"0.22)"),r.addColorStop(.68,t+"0.06)"),r.addColorStop(1,t+"0)"),n.fillStyle=r,n.fillRect(0,0,i,i);let a=new _r(e);return a.colorSpace=$e,a}function di(i,t,e){let n=new Nt().setHSL(i,t,e,$e);return n.convertSRGBToLinear(),[n.r,n.g,n.b]}function hf(i){let t=new Nt(i).convertSRGBToLinear();return[t.r,t.g,t.b]}function _g(i){let t=performance.now(),e=0,n=s=>{e=requestAnimationFrame(n);let r=Math.min(.05,(s-t)/1e3);t=s,i(r,s/1e3)};return e=requestAnimationFrame(n),()=>cancelAnimationFrame(e)}var Nh=40,Dh=class{constructor(t){this.canvas=t,this.width=window.innerWidth,this.height=window.innerHeight,this.dpr=Math.min(window.devicePixelRatio||1,2),this.renderer=new bh({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(this.width,this.height,!1),this.renderer.toneMapping=Sr,this.renderer.toneMappingExposure=1.12,this.renderer.outputColorSpace=$e,this.scene=new vo,this.scene.background=new Nt(132106);let e=xe.camera;this.camera=new bi(e.fov,this.width/this.height,e.near,e.far),this.camera.position.set(...e.position),this.baseZ=e.position[2],this.lookTarget=new F(...e.target),this.camera.lookAt(this.lookTarget),this.scene.add(this.camera),this.pointer=new wt(0,0),this.pointerSmooth=new wt(0,0),this.mood=0,this.moodSmooth=0,this.galaxy=0,this.galaxySmooth=0,this.burst=0,this.time=0,this.orbit={az:0,pol:0,azT:0,polT:0,vAz:0,vPol:0,dragging:!1},this.zoom=1,this.zoomT=1,this.autoRotate=!1,this.camHeight=xe.camera.position[1]-xe.camera.target[1],this.composer=new Ch(this.renderer),this.renderPass=new Ph(this.scene,this.camera),this.composer.addPass(this.renderPass),this.bloomPass=new ba(new wt(this.width,this.height),.38,.4,.72),this.composer.addPass(this.bloomPass),this.outputPass=new Ih,this.composer.addPass(this.outputPass),this._auroraA=vn[0].aurora.map(n=>hf(n)),this._auroraB=[this._auroraA[1],this._auroraA[0]],this.bgMaterial=new Be({vertexShader:cg,fragmentShader:hg,uniforms:{uResolution:{value:new wt(this.width*this.dpr,this.height*this.dpr)},uTime:{value:0},uPointer:{value:new wt(0,0)},uMood:{value:0},uGalaxy:{value:0}},depthTest:!1,depthWrite:!1}),this.bgMesh=new ye(new qs(1,1),this.bgMaterial),this.bgMesh.position.z=-Nh,this.bgMesh.renderOrder=-1e3,this.bgMesh.frustumCulled=!1,this.camera.add(this.bgMesh),this._layoutBackground(),this._buildMoon(),this._buildLights(),this._buildGround(),this._buildSnow(),this.update(0,0)}_buildMoon(){let t=new ye(new Xs(.3,48),new cn({color:15986394,transparent:!0,opacity:.68,depthWrite:!1,depthTest:!1}));t.position.set(9.6,7,-Nh+1.4),t.renderOrder=-999,this.camera.add(t);let e=new ds(new zn({map:Ta(128,"rgba(206,226,255,"),transparent:!0,opacity:.11,depthWrite:!1,depthTest:!1,blending:Ei}));e.scale.set(1.5,1.5,1),t.add(e);let n=new ye(new Xs(.29,48),new cn({color:14275517,transparent:!0,opacity:.2,depthWrite:!1,depthTest:!1}));n.position.z=.002,t.add(n),this.moon=t}_layoutBackground(){let e=2*Nh*Math.tan(xe.camera.fov*Math.PI/360),n=e*(this.width/this.height);this.bgMesh.scale.set(n,e,1)}_buildLights(){let t=new Lo(2769760,1.5);this.scene.add(t);let e=new Io(10475775,1.35);e.position.set(-4,7,6),this.scene.add(e);let n=new vr(16761466,26,12,2);n.position.set(.4,1.4,2.2),this.scene.add(n),this.warmLight=n;let s=new vr(16767144,14,9,2);s.position.set(0,3.1,1.6),this.scene.add(s),this.warmLight2=s;let r=new vr(16773312,26,10,2);r.position.set(0,xe.tree.starY,.2),this.scene.add(r),this.starLight=r}_buildGround(){let t=new ye(new qs(11,11),new cn({map:Ta(256,"rgba(110,240,225,"),transparent:!0,opacity:.55,depthWrite:!1,blending:Ei}));t.rotation.x=-Math.PI/2,t.position.set(0,.015,.4),this.scene.add(t),this.groundGlow=t;let e=new ye(new Xs(9,72),new cn({map:Ta(256,"rgba(30,56,88,"),transparent:!0,opacity:.9,depthWrite:!1}));e.rotation.x=-Math.PI/2,e.position.set(0,-.01,.2),this.scene.add(e),this.snowPatch=e;let n=new ye(new Xs(2.55,64),new bn({color:10339038,roughness:.6,metalness:.04,transparent:!0,opacity:.42}));n.rotation.x=-Math.PI/2,n.position.set(0,.02,0),this.scene.add(n),this.disc=n;let s=new ye(new Ao(2.45,2.72,72),new cn({color:8188128,transparent:!0,opacity:.22,side:hn,blending:Ei,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.set(0,.035,0),this.scene.add(s),this.rim=s,this.gifts=new $i;let r=[14168636,3112284,15184970,15986918,11880239,4159428,14122928],a=new Ws(1,1,1),o=new bn({color:16179109,roughness:.35,metalness:.4}),l=[],c=14;for(let u=0;u<c;u++){let f=u/c*Math.PI*2+.22;l.push({a:f,r:1.12+Math.random()*1.16,s:.19+Math.random()*.2,onDisc:!0})}let h=3;for(let u=0;u<h;u++){let f=u/h*Math.PI*2+.9;l.push({a:f,r:2.42+Math.random()*.18,s:.13+Math.random()*.05,onDisc:!0})}l.forEach((u,f)=>{let{a:g,r:x,s:p}=u,m=new $i,M=new bn({color:r[f%r.length],roughness:.42,metalness:.18,emissive:new Nt(r[f%r.length]).multiplyScalar(.2)}),A=new ye(a,M);A.scale.set(p,p*(.6+Math.random()*.42),p),m.add(A);let S=new ye(a,o);S.scale.set(p*1.02,p*.92,p*.16),m.add(S);let w=new ye(a,o);w.scale.set(p*.16,p*.92,p*1.02),m.add(w),m.position.set(Math.cos(g)*x,p*.52+(u.onDisc?.03:0),Math.sin(g)*x),m.rotation.y=Math.random()*Math.PI,m.userData.base=m.position.clone(),m.userData.phase=Math.random()*Math.PI*2,m.userData.rot=m.rotation.y,this.gifts.add(m)}),this.scene.add(this.gifts),[{x:2.85,z:4.3,s:.4,c:2},{x:-3.2,z:4.7,s:.46,c:1},{x:.75,z:5.4,s:.32,c:3}].forEach(u=>{let f=new $i,g=new bn({color:r[u.c],roughness:.42,metalness:.18,emissive:new Nt(r[u.c]).multiplyScalar(.22)}),x=new ye(a,g);x.scale.set(u.s,u.s*.78,u.s),f.add(x);let p=new ye(a,o);p.scale.set(u.s*1.02,u.s*.8,u.s*.14),f.add(p);let m=new ye(a,o);m.scale.set(u.s*.14,u.s*.8,u.s*1.02),f.add(m),f.position.set(u.x,u.s*.39,u.z),f.rotation.y=Math.random()*Math.PI,f.userData.base=f.position.clone(),f.userData.phase=Math.random()*Math.PI*2,f.userData.rot=f.rotation.y,f.userData.fg=!0,this.gifts.add(f)})}_makeSnowLayer(t,e){let{size:n,opacity:s,spreadX:r,topY:a,zNear:o,zFar:l,additive:c,textureSize:h}=e,d=new He,u=new Float32Array(t*3),f=new Float32Array(t);for(let p=0;p<t;p++)u[p*3]=(Math.random()-.5)*r,u[p*3+1]=Math.random()*a,u[p*3+2]=o+Math.random()*(l-o),f[p]=Math.random();d.setAttribute("position",new pe(u,3)),d.setAttribute("aSeed",new pe(f,1));let g=new fa({size:n,map:mg(h),transparent:!0,opacity:s,depthWrite:!1,blending:c?Ei:Js,color:c?14413567:15923455,sizeAttenuation:!0}),x=new Vs(d,g);return x.frustumCulled=!1,this.scene.add(x),{points:x,seeds:f,baseOpacity:s,speed:e.speed,sway:e.sway,topY:a,spreadX:r,zNear:o,zFar:l}}_buildSnow(){this.snowLayerFar=this._makeSnowLayer(2400,{size:.04,opacity:.52,spreadX:24,topY:13,zNear:-6,zFar:8,additive:!0,textureSize:64,speed:.85,sway:.16}),this.snowLayerNear=this._makeSnowLayer(300,{size:.125,opacity:.5,spreadX:17,topY:11,zNear:1.6,zFar:7.6,additive:!1,textureSize:128,speed:1.35,sway:.36}),this.snow=this.snowLayerFar.points,this.snowSeeds=this.snowLayerFar.seeds,this.snowNear=this.snowLayerNear.points}setMood(t,e=!1){this.mood=Jt(t,0,vn.length-1);let n=vn[Math.round(this.mood)];this._auroraA=n.aurora.map(s=>hf(s)),this._auroraB=[this._auroraA[1],this._auroraA[0]],e&&(this.moodSmooth=this.mood,this.bgMaterial.uniforms.uMood.value=this.mood)}setPointer(t,e){this.pointer.set(Jt(t,-1,1),Jt(e,-1,1))}setGalaxy(t){this.galaxy=Jt(t)}triggerBurst(t=.45){this.burst=Math.max(this.burst,t)}setOrbitDelta(t,e){this.orbit.azT=Jt(this.orbit.azT+t,-.55,.55),this.orbit.polT=Jt(this.orbit.polT+e,-.24,.3),this.orbit.vAz=t*4.5,this.orbit.vPol=e*3.5}beginOrbit(){this.orbit.dragging=!0,this.orbit.vAz=0,this.orbit.vPol=0}endOrbit(){this.orbit.dragging=!1,this.orbit.vAz*=6,this.orbit.vPol*=4}addZoom(t){this.zoomT=Jt(this.zoomT+t,.78,1.35)}setAutoRotate(t){this.autoRotate=!!t}resetView(){this.orbit.azT=0,this.orbit.polT=0,this.orbit.vAz=0,this.orbit.vPol=0,this.zoomT=1}setSnowDensity(t){let e=Jt(t,0,1);for(let n of[this.snowLayerFar,this.snowLayerNear]){if(!n)continue;let s=n.points.geometry.attributes.position.count;n.points.geometry.setDrawRange(0,Math.round(s*e)),n.points.visible=e>.02}}project(t){let e=this._pv||(this._pv=new F);return e.copy(t).project(this.camera),{x:(e.x*.5+.5)*this.width,y:(-e.y*.5+.5)*this.height,z:e.z,visible:e.z>-1&&e.z<1}}update(t,e){this.time=e,this.pointerSmooth.x=Ye(this.pointerSmooth.x,this.pointer.x,2.2,t),this.pointerSmooth.y=Ye(this.pointerSmooth.y,this.pointer.y,2.2,t),this.moodSmooth=Ye(this.moodSmooth,this.mood,3.2,t),this.galaxySmooth=Ye(this.galaxySmooth,this.galaxy,6.8,t),this.burst=Math.max(0,this.burst-t*1.9);let n=this.bgMaterial.uniforms;n.uTime.value=e,n.uPointer.value.set(this.pointerSmooth.x,this.pointerSmooth.y),n.uMood.value=this.moodSmooth,n.uGalaxy.value=this.galaxySmooth;let s=e,r=this.orbit;r.dragging||(r.azT=Jt(r.azT+r.vAz*t,-.55,.55),r.polT=Jt(r.polT+r.vPol*t,-.24,.3),r.vAz=Ye(r.vAz,0,3.2,t),r.vPol=Ye(r.vPol,0,3.4,t)),this.autoRotate&&(r.azT+=t*.05),r.az=Ye(r.az,r.azT,5.5,t),r.pol=Ye(r.pol,r.polT,5.5,t),this.zoom=Ye(this.zoom,this.zoomT,5,t);let a=this.baseZ*this.zoom-this.galaxySmooth*.55,o=r.az+this.pointerSmooth.x*.055+Math.sin(s*.18)*.008,l=r.pol+this.pointerSmooth.y*.03+Math.sin(s*.24+1.3)*.006,c=Math.cos(l),h=this.lookTarget;if(this.camera.position.set(h.x+Math.sin(o)*a*c,h.y+this.camHeight+Math.sin(l)*a,h.z+Math.cos(o)*a*c),this.camera.lookAt(h),this.snow&&(this.snow.position.x=this.pointerSmooth.x*.22),this.snowNear&&(this.snowNear.position.x=this.pointerSmooth.x*.5,this.snowNear.position.y=-this.pointerSmooth.y*.16),this.warmLight&&(this.warmLight.intensity=24+Math.sin(s*1.7)*4+this.galaxySmooth*6),this.warmLight2&&(this.warmLight2.intensity=12+Math.sin(s*2.1+1.1)*3),this.starLight&&(this.starLight.intensity=24+Math.sin(s*1.1+2)*6),this.groundGlow&&(this.groundGlow.material.opacity=(.42+Math.sin(s*.9)*.08)*Math.max(0,1-this.galaxySmooth*1.5),this.groundGlow.visible=this.galaxySmooth<.66),this.snowPatch&&(this.snowPatch.material.opacity=.9*(1-this.galaxySmooth*.92)),this.disc&&(this.disc.material.opacity=.42*(1-this.galaxySmooth*.95)),this.rim&&(this.rim.material.opacity=.22*(1-this.galaxySmooth)),this.gifts){let u=this.galaxySmooth;for(let f of this.gifts.children){let g=f.userData;if(g.fg){f.visible=u<.32;continue}f.position.set(g.base.x*(1+u*.22),g.base.y+u*(1.25+.5*Math.sin(s*.62+g.phase)),g.base.z*(1+u*.22)),f.rotation.y=g.rot+u*(s*.35+g.phase),f.rotation.x=u*Math.sin(s*.4+g.phase)*.4}}let d=(u,f)=>{if(!u)return;let g=u.points,x=g.geometry.attributes.position.array,p=u.seeds,m=x.length/3;for(let M=0;M<m;M++){let A=p[M];x[M*3+1]-=(.16+A*.5)*u.speed*t,x[M*3]+=Math.sin(s*.55+A*9)*t*u.sway,x[M*3+1]<-.2&&(x[M*3+1]=u.topY,x[M*3]=(Math.random()-.5)*u.spreadX,x[M*3+2]=u.zNear+Math.random()*(u.zFar-u.zNear))}g.geometry.attributes.position.needsUpdate=!0,g.material.opacity=u.baseOpacity*(1-this.galaxySmooth*f)};d(this.snowLayerFar,.2),d(this.snowLayerNear,.35)}render(){this.composer.render()}resize(t=window.innerWidth,e=window.innerHeight){this.width=t,this.height=e,this.dpr=Math.min(window.devicePixelRatio||1,2),this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(t,e,!1),this.composer.setPixelRatio(this.dpr),this.composer.setSize(t,e);let n=t/e;this.camera.aspect=n,this.camera.updateProjectionMatrix(),this.baseZ=xe.camera.position[2]*(n<1?1+(1-n)*.64:1),this.moon&&this.moon.position.set(n<1?3.4:9.6,n<1?6.6:7,-Nh+1.4),this.bgMaterial.uniforms.uResolution.value.set(t*this.dpr,e*this.dpr),this._layoutBackground()}dispose(){this.composer.dispose?.(),this.renderer.dispose()}};var wa={baseY:.3,topY:4.72,radius:xe.tree.radius,height:4.42},Wn=Math.PI*2,Fh=class{constructor(t){this.rig=t,this.group=new $i,this.rig.scene.add(this.group),this.burstValue=0,this.galaxyRotation=0,this.handStrength=0,this.handPos=new F(0,1.9,0),this._buildBody(),this._buildFoliage(),this._buildTrunk(),this._buildInnerGlow(),this._buildOrnaments(),this._buildStar()}_buildBody(){let{baseY:t,radius:e,height:n}=wa,s=80,r=72,a=8,o=[],l=[],c=[],h=(x,p)=>{let m=x/s,M=m*a%1,A=1+.115*Math.pow(1-M,2.4),S=Math.pow(1-m,1.04),w=e*S*A;m<.045&&(w*=.86+.14*(m/.045));let E=p/r*Wn,_=1+.022*Math.sin(E*5+m*18),b=t+m*n;return[Math.cos(E)*w*_,b,Math.sin(E)*w*_,m,M]},d=(x,p)=>{let[m,M,A,S,w]=h(x,p);o.push(m,M,A);let E=Math.pow(1-w,26)*.85+Math.pow(1-w,5)*.06,_=.085+S*.055,b=di(.335+Math.random()*.045,.55+Math.random()*.12,_),D=[.72,.83,.8],P=Math.random()*.25;l.push(b[0]*(1-E)+D[0]*E*(.35+P),b[1]*(1-E)+D[1]*E*(.35+P),b[2]*(1-E)+D[2]*E*(.35+P))};for(let x=0;x<=s;x++)for(let p=0;p<r;p++)d(x,p);for(let x=0;x<s;x++)for(let p=0;p<r;p++){let m=x*r+p,M=x*r+(p+1)%r,A=(x+1)*r+(p+1)%r,S=(x+1)*r+p;c.push(m,M,A,m,A,S)}let u=new He;u.setAttribute("position",new be(o,3)),u.setAttribute("color",new be(l,3)),u.setIndex(c),u.computeVertexNormals();let f=new bn({vertexColors:!0,roughness:.88,metalness:.02,emissive:new Nt(135691),transparent:!0,opacity:1}),g=new ye(u,f);g.position.set(0,0,0),g.renderOrder=0,this.group.add(g),this.body=g}_buildTrunk(){let t=new bn({color:2759186,roughness:.92,metalness:0,emissive:new Nt(1444870),transparent:!0}),e=new ye(new wo(.11,.17,.55,10),t);e.position.set(0,wa.baseY+.12,0),this.group.add(e),this.trunk=e}_buildInnerGlow(){let t=Ta(256,"rgba(255,206,120,"),e=new ds(new zn({map:t,color:16763514,transparent:!0,opacity:.14,depthWrite:!1,blending:Ei}));e.position.set(0,wa.baseY+wa.height*.44,.2),e.scale.set(3.4,3.1,1),this.group.add(e),this.innerGlow=e}_buildFoliage(){let{baseY:t,topY:e,radius:n,height:s}=wa,r=xe.tree.particles,a=xe.tree.garland,o=r+a,l=new Float32Array(o*3),c=new Float32Array(o*3),h=new Float32Array(o*3),d=new Float32Array(o*3),u=new Float32Array(o),f=new Float32Array(o),g=new Float32Array(o),x=()=>{let S=Math.random();if(S<.1)return di(.1+Math.random()*.04,.85,.7).map(b=>b*(1.1+Math.random()*.9));if(S<.16)return di(.9+Math.random()*.05,.7,.66).map(b=>b*(1+Math.random()*.6));let w=.5+Math.random()*.13,E=.42+Math.random()*.58,_=.45+Math.random()*.4;return di(w,E,_).map(b=>b*(.75+Math.random()*.85))},p=(S,w)=>{if(Math.random()<.18){let L=Math.random()*Wn,U=Math.acos(cf(-1,1)),k=cf(2.6,7.6),C=Math.sin(U)*Math.cos(L)*k,H=Math.cos(U)*k*.55+xe.galaxy.centerY,X=Math.sin(U)*Math.sin(L)*k*.5;S[w*3]=C,S[w*3+1]=H,S[w*3+2]=X;return}let _=Math.random()*3|0,b=.7+Math.pow(Math.random(),.62)*6.6,D=Math.random()*Wn+_*(Wn/3)+b*.52,P=1+ys()*.12;S[w*3]=Math.cos(D)*b*1.18*P,S[w*3+1]=xe.galaxy.centerY+Math.sin(D)*b*.5*P+ys()*.34,S[w*3+2]=Math.sin(D)*b*.22+ys()*.9},m=15,M=7;for(let S=0;S<r;S++){let w=Math.random()<.62,E,_,b;if(w){let L=(Math.floor(Math.pow(Math.random(),1.5)*M)+Math.random())/M,U=t+L*s,k=n*(1-L)*1.02,C=.12+Math.pow(Math.random(),.62)*k,X=Math.round(Math.random()*m)/m*Wn+ys()*.075,G=Math.pow(C/Math.max(.001,k),2)*.16;E=Math.cos(X)*C,b=Math.sin(X)*C,_=U-G+ys()*.03;let Q=Math.random(),W,j=C>k*.78;if(Q<.045)W=di(.11,.92,.74);else if(Q<.2)W=di(.53,.16,.93);else if(Q<.235)W=di(.03,.84,.6);else{let Gt=.315+Math.random()*.1,Y=j?.3+Math.random()*.22:.17+Math.random()*.18;W=di(Gt,.68+Math.random()*.3,Y)}let tt=1-.5*Math.pow(L,2.6),yt=(.85+Math.random()*.8)*tt;h[S*3]=W[0]*yt,h[S*3+1]=W[1]*yt,h[S*3+2]=W[2]*yt,u[S]=.018+Math.pow(Math.random(),1.8)*.034}else{let P=Math.random(),L=1-Math.sqrt(1-P);_=t+L*s;let U=1+.07*Math.sin(L*Math.PI*9+1.2),k=.42+Math.pow(Math.random(),.7)*.6,C=n*(1-L)*U*k,H=Math.random()*Wn;E=Math.cos(H)*C,b=Math.sin(H)*C,_=_-Math.pow(k,2)*.1+ys()*.03;let X=.31+Math.random()*.1,G=di(X,.72+Math.random()*.24,.13+Math.random()*.2),Q=.7+Math.random()*.7;h[S*3]=G[0]*Q,h[S*3+1]=G[1]*Q,h[S*3+2]=G[2]*Q,u[S]=.012+Math.pow(Math.random(),2.2)*.022}l[S*3]=E,l[S*3+1]=_,l[S*3+2]=b,f[S]=Math.random(),g[S]=Math.random(),p(c,S);let D=x();d[S*3]=D[0],d[S*3+1]=D[1],d[S*3+2]=D[2]}for(let S=0;S<a;S++){let w=r+S,E=S/a,_=t+E*s*.985+Math.sin(E*Wn*22)*.02,b=1+.085*Math.sin(E*Math.PI*8+1.2),D=n*(1-E)*b*1.035,P=E*Wn*7.5+Math.sin(E*9)*.16;l[w*3]=Math.cos(P)*D,l[w*3+1]=_,l[w*3+2]=Math.sin(P)*D;let L=di(.105+Math.random()*.02,.92,.62+Math.random()*.2),U=.85+Math.random()*.75;h[w*3]=L[0]*U,h[w*3+1]=L[1]*U,h[w*3+2]=L[2]*U,u[w]=.016+Math.random()*.03,f[w]=Math.random(),g[w]=Math.random(),p(c,w);let k=Math.random()<.55?di(.11,.9,.7):x();d[w*3]=k[0]*1.2,d[w*3+1]=k[1]*1.2,d[w*3+2]=k[2]*1.2}this.foliageCount=o;let A=new He;A.setAttribute("position",new pe(l.slice(),3)),A.setAttribute("aPosA",new pe(l,3)),A.setAttribute("aPosB",new pe(c,3)),A.setAttribute("aColorA",new pe(h,3)),A.setAttribute("aColorB",new pe(d,3)),A.setAttribute("aSize",new pe(u,1)),A.setAttribute("aPhase",new pe(f,1)),A.setAttribute("aSeed",new pe(g,1)),A.boundingSphere=new Bn(new F(0,2,0),9),this.foliageUniforms={uTime:{value:0},uProgress:{value:0},uPixelRatio:{value:this.rig.dpr||1},uViewportScale:{value:800},uGalaxyRotation:{value:0},uBurst:{value:0},uSizeScale:{value:1},uHand:{value:new F(0,1.9,0)},uHandStrength:{value:0},uHandRadius:{value:1.35}},this.foliage=new Vs(A,new Be({vertexShader:ug,fragmentShader:dg,uniforms:this.foliageUniforms,transparent:!0,depthWrite:!1,blending:Ei})),this.foliage.frustumCulled=!1,this.foliage.renderOrder=2,this.group.add(this.foliage)}_buildOrnaments(){let{baseY:t,radius:e,height:n}=wa,s=xe.tree.ornaments,r=new Float32Array(s*3),a=new Float32Array(s*3),o=new Float32Array(s*3),l=new Float32Array(s*3),c=new Float32Array(s),h=new Float32Array(s),d=new Float32Array(s),u=[di(.995,.85,.55),di(.12,.9,.62),di(.5,.55,.9),di(.78,.7,.62),di(.35,.6,.62)];for(let g=0;g<s;g++){let x=Math.pow(Math.random(),.8),p=t+.25+x*(n-.45),m=1+.085*Math.sin(x*Math.PI*8+1.2),M=e*(1-x)*m*(.95+Math.random()*.12),A=Math.random()*Wn;r[g*3]=Math.cos(A)*M,r[g*3+1]=p,r[g*3+2]=Math.sin(A)*M;let S=u[g%u.length],w=1.1+Math.random()*.9;o[g*3]=S[0]*w,o[g*3+1]=S[1]*w,o[g*3+2]=S[2]*w,c[g]=.055+Math.random()*.075,h[g]=Math.random(),d[g]=Math.random();let E=Math.random()*Wn,_=1+Math.random()*6.2;a[g*3]=Math.cos(E)*_*1.12,a[g*3+1]=xe.galaxy.centerY+Math.sin(E)*_*.5+ys()*.4,a[g*3+2]=Math.sin(E)*_*.3+ys()*.8;let b=Math.random()<.5?u[(g+2)%u.length]:di(.55,.5,.85);l[g*3]=b[0]*1.8,l[g*3+1]=b[1]*1.8,l[g*3+2]=b[2]*1.8}let f=new He;f.setAttribute("position",new pe(r.slice(),3)),f.setAttribute("aPosA",new pe(r,3)),f.setAttribute("aPosB",new pe(a,3)),f.setAttribute("aColorA",new pe(o,3)),f.setAttribute("aColorB",new pe(l,3)),f.setAttribute("aSize",new pe(c,1)),f.setAttribute("aPhase",new pe(h,1)),f.setAttribute("aSeed",new pe(d,1)),f.boundingSphere=new Bn(new F(0,2,0),9),this.ornamentUniforms={uTime:{value:0},uProgress:{value:0},uPixelRatio:{value:this.rig.dpr||1},uViewportScale:{value:800},uGalaxyRotation:{value:0},uBurst:{value:0},uHand:{value:new F(0,1.9,0)},uHandStrength:{value:0},uHandRadius:{value:1.25}},this.ornaments=new Vs(f,new Be({vertexShader:fg,fragmentShader:pg,uniforms:this.ornamentUniforms,transparent:!0,depthWrite:!1,blending:Ei})),this.ornaments.frustumCulled=!1,this.ornaments.renderOrder=3,this.group.add(this.ornaments)}_buildStar(){let t=gg(512);this.starMaterial=new zn({map:t,color:16773320,transparent:!0,depthWrite:!1,blending:Ei,opacity:.95}),this.star=new ds(this.starMaterial),this.star.position.set(0,xe.tree.starY,.05),this.star.scale.setScalar(.95),this.star.renderOrder=4,this.group.add(this.star),this.starHalo=new ds(new zn({map:t,color:16765562,transparent:!0,depthWrite:!1,blending:Ei,opacity:.22})),this.starHalo.position.copy(this.star.position),this.starHalo.scale.setScalar(1.45),this.starHalo.renderOrder=1,this.group.add(this.starHalo)}setHand(t,e){t&&this.handPos.copy(t),this.handStrength=Jt(e)}burst(t=.5){this.burstValue=Math.max(this.burstValue,t)}update(t,e){let n=this.rig,s=n.galaxySmooth;this.burstValue=Math.max(0,this.burstValue-t*1.6),this.galaxyRotation+=t*(.1+.22*s);let r=n.height/2/Math.tan(n.camera.fov*Math.PI/360),a=c=>{c.uTime.value=e,c.uProgress.value=s,c.uPixelRatio.value=n.dpr,c.uViewportScale.value=r,c.uGalaxyRotation.value=this.galaxyRotation,c.uBurst.value=this.burstValue,c.uHand.value.copy(this.handPos),c.uHandStrength.value=this.handStrength};a(this.foliageUniforms),a(this.ornamentUniforms),this.foliageUniforms.uSizeScale.value=1+s*.18+this.burstValue*.35;let o=1+Math.sin(e*1.6)*.055+Math.sin(e*4.3)*.02,l=(.95+s*.3)*o;this.star.scale.setScalar(l),this.starHalo.scale.setScalar(l*1.8),this.starMaterial.opacity=.85+Math.sin(e*2.1)*.1,this.star.position.y=xe.tree.starY+Math.sin(e*.8)*.02,this.innerGlow&&(this.innerGlow.material.opacity=(.1+Math.sin(e*1.25)*.03)*Math.max(0,1-s*1.6),this.innerGlow.visible=s<.62),this.trunk&&(this.trunk.material.opacity=1-s),this.body&&(this.body.material.opacity=Math.max(0,1-s*1.35),this.body.visible=s<.985),this.starMaterial.opacity*=1-s*.55,this.starHalo.material.opacity=.22*(1-s*.6)}};var Ib=Math.PI*2,dC=Math.PI*(3-Math.sqrt(5));function uf(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var vg=[[-1.95,1.3,1.35],[-2.12,2.32,1.15],[-1.78,3.24,1.2],[-1.02,1.74,1.95],[1.04,1.44,1.95],[2.06,1.94,1.35],[2.3,3.04,1],[.96,3.68,1.15]];function Lb(i){let t=[],e=uf(20221225),n=[{rad:2.05,y:.95,n:5},{rad:3.5,y:.62,n:6},{rad:4.9,y:.48,n:7}],s=0;for(let r=0;r<n.length;r++){let a=n[r];for(let o=0;o<a.n&&s<i;o++,s++){let l=o/a.n*Math.PI*2+(e()-.5)*.5+r*.42,c=a.rad*(.9+e()*.18);t.push(new F(Math.cos(l)*c,xe.galaxy.centerY+Math.sin(l)*c*a.y,(e()-.5)*1.8))}}for(;t.length<i;){let r=e()*Math.PI*2,a=5.2+e()*1.4;t.push(new F(Math.cos(r)*a,xe.galaxy.centerY+Math.sin(r)*a*.3,(e()-.5)*1.8))}return t}function Nb(i){let t=[],e=uf(20221226),n=3,s=Math.ceil(i/n);for(let r=0;r<i;r++){let a=r%n,o=Math.floor(r/n);t.push(new F((a-(n-1)/2)*1.46+(e()-.5)*.16,3.15-o*1.02+(e()-.5)*.1,(e()-.5)*.8))}return t}var Uh=class{constructor({rig:t,container:e,onGrab:n,onRelease:s,onTap:r}){this.rig=t,this.container=e,this.onGrab=n||(()=>{}),this.onRelease=s||(()=>{}),this.onTap=r||(()=>{}),this.cards=[],this.photos=[],this.galaxyAnchors=[],this.pointer={x:0,y:0,down:!1,active:!1,source:"mouse"},this.source="mouse",this.grabbed=null,this.hovered=null,this.focusCard=null,this._pointerId=null,this._downInfo=null,this._v=new F,this._bindDomEvents()}async load(t="assets/photos/manifest.json"){let e;if(location.protocol==="file:"&&window.__AURORA_MANIFEST__)e=window.__AURORA_MANIFEST__;else try{let n=await fetch(t,{cache:"no-cache"});if(!n.ok)throw new Error("HTTP "+n.status);e=await n.json()}catch(n){window.__AURORA_MANIFEST__?e=window.__AURORA_MANIFEST__:(console.error("[photos] manifest 加载失败",n),e={photos:[]})}return this.photos=(e.photos||[]).slice().sort((n,s)=>n.order-s.order),this.galaxyAnchors=Lb(Math.max(18,this.photos.length+6)),this.galaxyAnchorsNarrow=Nb(Math.max(18,this.photos.length+6)),this._buildCards(this.photos),await this._decodeAll(),this.photos.length}_buildCards(t){let e=document.createDocumentFragment();t.forEach((n,s)=>{let r=this._makeCard(n,s);e.appendChild(r.el),this.cards.push(r)}),this.container.appendChild(e)}_makeCard(t,e){let n=document.createElement("div");n.className="photo-card settling",n.dataset.id=t.id;let s=document.createElement("div");s.className="photo-inner",s.style.setProperty("--ar",String(t.aspect||.75)),t.blur&&(s.style.backgroundImage=`url("${t.blur}")`);let r=document.createElement("img");r.alt=t.caption||t.place||"",r.draggable=!1,r.decoding="async",s.appendChild(r);let a=document.createElement("div");a.className="photo-caption",a.textContent=t.caption||t.place||"",n.appendChild(s),n.appendChild(a);let o=!!t.featured,l=o?this.cards.filter(u=>u.featured).length:-1,c=o&&vg[l]?new F(...vg[l]):new F(0,1.9,1.2),h=uf(1e3+e*7919),d={el:n,img:r,inner:s,photo:t,index:e,featured:o,treeAnchor:c,galaxyAnchor:this.galaxyAnchors[e%this.galaxyAnchors.length].clone(),galaxyAnchorNarrow:this.galaxyAnchorsNarrow[e%this.galaxyAnchorsNarrow.length].clone(),worldW:(.62+h()*.16)*(o?1.14:1),rot:(h()-.5)*7,phase:h()*Ib,off:{x:0,y:0},vel:{x:0,y:0},sx:0,sy:0,scale:1,opacity:0,hover:!1,grabbed:!1,rect:{w:0,h:0},z:0};return n.addEventListener("pointerenter",()=>{this.source==="mouse"&&!d.grabbed&&(d.hover=!0,n.classList.add("hover"))}),n.addEventListener("pointerleave",()=>{d.hover=!1,n.classList.remove("hover")}),d}_decodeAll(){return Promise.all(this.cards.map(t=>new Promise(e=>{let n=t.img;n.onload=()=>{t.el.classList.add("ready"),requestAnimationFrame(()=>n.classList.add("loaded")),e()},n.onerror=()=>e(),n.src=t.photo.src})))}setSource(t){this.source=t,t!=="mouse"&&(this.releaseAll(),this._clearHover())}_bindDomEvents(){let t=e=>({x:e.clientX,y:e.clientY});window.addEventListener("pointermove",e=>{if(this.source!=="mouse")return;let n=t(e);this.pointer.x=n.x,this.pointer.y=n.y,this.pointer.active=!0,this.pointer.down?(!this.grabbed&&this._downInfo?.card&&Math.hypot(n.x-this._downInfo.x,n.y-this._downInfo.y)>6&&(this._grab(this._downInfo.card,this._downInfo.x,this._downInfo.y),this._downInfo=null),this.grabbed&&this._drag(n.x,n.y)):this._hover(n.x,n.y)}),window.addEventListener("pointerdown",e=>{if(this.source!=="mouse")return;let n=t(e);this.pointer.x=n.x,this.pointer.y=n.y,this.pointer.down=!0,this.pointer.active=!0,this._pointerId=e.pointerId,this._downInfo={x:n.x,y:n.y,t:performance.now(),card:this._pick(n.x,n.y)},this._downInfo.card&&e.preventDefault()}),window.addEventListener("pointerup",e=>{if(this.source!=="mouse")return;let n=t(e),s=this.grabbed;this.pointer.down=!1,this.pointer.x=n.x,this.pointer.y=n.y;let r=this._downInfo;if(this._downInfo=null,this._pointerId=null,s){this._release(s,n.x,n.y);return}r&&r.card&&Math.hypot(n.x-r.x,n.y-r.y)<8&&performance.now()-r.t<420&&this.onTap(r.card.photo,r.card.el)}),window.addEventListener("pointercancel",()=>{this.pointer.down=!1,this.releaseAll()}),window.addEventListener("blur",()=>{this.pointer.down=!1,this.releaseAll()})}setPointer(t,e,n,s=!0){if(this.pointer.x=t,this.pointer.y=e,this.pointer.active=s,this.pointer.down=n&&s,!s){this.releaseAll(),this._clearHover();return}if(this.pointer.down&&!this.grabbed){let r=this._pick(t,e);r&&this._grab(r,t,e)}else this.pointer.down&&this.grabbed?this._drag(t,e):!this.pointer.down&&this.grabbed?this._release(this.grabbed,t,e):this._hover(t,e)}_pick(t,e){let n=null,s=1/0;for(let r of this.cards){if(r.opacity<.25||r.el.classList.contains("grabbed"))continue;let a=r.rect.w/2+8,o=r.rect.h/2+8,l=Math.abs(t-r.sx),c=Math.abs(e-r.sy);if(l<a&&c<o){let h=l/a+c/o;h<s&&(s=h,n=r)}}return n}_hover(t,e){let n=this._pick(t,e);n!==this.hovered&&(this._clearHover(),n?(this.hovered=n,n.hover=!0,n.el.classList.add("hover"),this.container.style.cursor="grab"):this.container.style.cursor="")}_clearHover(){this.hovered&&(this.hovered.hover=!1,this.hovered.el.classList.remove("hover"),this.hovered=null),this.container.style.cursor=""}_grab(t,e,n){this._clearHover(),this.grabbed=t,t.grabbed=!0,t.grabDX=e-(t.sx+t.off.x),t.grabDY=n-(t.sy+t.off.y),t.lastX=e,t.lastY=n,t.vel.x=0,t.vel.y=0,t.el.classList.add("grabbed"),t.el.classList.remove("settling"),this.onGrab(t,{x:e,y:n})}_drag(t,e){let n=this.grabbed;if(!n)return;let s=1/60,r=t-n.sx-n.grabDX,a=e-n.sy-n.grabDY;n.vel.x=Jt((r-n.off.x)/s,-2600,2600),n.vel.y=Jt((a-n.off.y)/s,-2600,2600),n.off.x=r,n.off.y=a,n.lastX=t,n.lastY=e}_release(t,e,n){t.grabbed=!1,t.el.classList.remove("grabbed"),t.el.classList.add("settling"),t.vel.x=Jt(t.vel.x,-1800,1800),t.vel.y=Jt(t.vel.y,-1800,1800),this.grabbed=null,this.onRelease(t,{x:e,y:n,vx:t.vel.x,vy:t.vel.y})}releaseAll(){for(let t of this.cards)t.grabbed&&(t.grabbed=!1,t.el.classList.remove("grabbed"),t.el.classList.add("settling"));this.grabbed=null,this.pointer.down=!1}resetPositions(){for(let t of this.cards)t.off.x=t.off.y=0,t.vel.x=t.vel.y=0}setPhotoScale(t){this.sizeScale=Jt(t,.6,1.6)}setFocus(t){this.focusCard=t||null}update(t,e){let n=this.rig,s=n.galaxySmooth,r=n.height/2/Math.tan(n.camera.fov*Math.PI/360),a=n.width,o=n.height;this.grabbed&&this.pointer.down&&this.pointer.active&&this._drag(this.pointer.x,this.pointer.y);for(let l of this.cards){let c=l.grabbed,h=l.treeAnchor,d=a<760?l.galaxyAnchorNarrow:l.galaxyAnchor,u=a<760?.72:1,f=a<760?1.18:1,g=this._v.set(xs(h.x*u,d.x,s),xs((h.y-1.95)*f+1.95,d.y,s),xs(h.z,d.z,s)),x=.055;g.x+=Math.sin(e*.53+l.phase)*x,g.y+=Math.sin(e*.71+l.phase*1.7)*x,g.z+=Math.sin(e*.41+l.phase*2.3)*.04;let p=n.project(g),m=Math.max(2.2,n.camera.position.distanceTo(g)),A=l.worldW*(this.sizeScale||1)*(.82+s*.55)*(a<760?xs(.78,.55,s):1)*r/m,S=A/(l.photo.aspect||.75),w=A<74,E=S+A*(w?.08:.19)+(w?6:14);l.rect.w=A,l.rect.h=E,l.sx=p.x,l.sy=p.y;let _=l.featured?1:Ea(.18,.62,s),b=l.featured?0:.95,D=Jt(l.featured?_:Ea(.15,.55,s)*b)*(s>.02||l.featured,1),P=c?1:D;if(!c){let _e=-26*l.off.x-8.6*l.vel.x,Qt=-26*l.off.y-8.6*l.vel.y;l.vel.x+=_e*t,l.vel.y+=Qt*t,l.off.x+=l.vel.x*t,l.off.y+=l.vel.y*t,Math.abs(l.off.x)<.02&&Math.abs(l.off.y)<.02&&(l.off.x=l.off.y=0,l.vel.x=l.vel.y=0)}let L=p.x+l.off.x,U=p.y+l.off.y,k=this.focusCard===l&&!c?Ea(.34,.92,s):0,C=xs(L,a*.5,k),H=xs(U,o*.53,k),X=(c?1.62:1)*(l.hover?1.08:1)*(.94+s*.1)*xs(1,2.75,k);l.scale=Ye(l.scale,X,12,t);let G=k>.02?1:P;l.opacity=Ye(l.opacity,G,c?20:5.5,t);let Q=Jt(l.vel.x*.0075,-13,13),W=l.rot+Math.sin(e*.42+l.phase)*.9+Q,j=(l.hover||c?.22:1)*(1-k),tt=a*.5,yt=o*.5,Gt=(p.x-tt)/Math.max(1,a*.5),Y=(p.y-yt)/Math.max(1,o*.5),mt=Jt(Gt*13,-13,13)*j,St=Jt(-Y*9,-9,9)*j,Ut=l.hover||c||k>.4?Jt(1-k,0,1)*.6:Jt((m-11.4)/3.4,0,1)*.9,nt=l.el;nt.style.setProperty("--x",`${C.toFixed(2)}px`),nt.style.setProperty("--y",`${H.toFixed(2)}px`),nt.style.setProperty("--w",`${Math.max(24,A).toFixed(2)}px`),nt.style.setProperty("--s",l.scale.toFixed(4)),nt.style.setProperty("--r",`${W.toFixed(2)}deg`),nt.style.setProperty("--ry",`${mt.toFixed(2)}deg`),nt.style.setProperty("--rx",`${St.toFixed(2)}deg`),nt.style.setProperty("--blur",`${Ut.toFixed(2)}px`),nt.style.setProperty("--o",l.opacity.toFixed(3)),nt.style.setProperty("--ar",String(l.photo.aspect||.75)),nt.classList.toggle("tiny",w);let Vt=c||k>.5?9e3:Math.round(3e3-p.z*1e3);l.z!==Vt&&(l.z=Vt,nt.style.zIndex=String(Vt));let Pe=l.opacity<.14&&!c;nt.style.pointerEvents=Pe?"none":"auto",Pe&&nt.classList.contains("ready")?nt.classList.remove("ready"):!Pe&&!nt.classList.contains("ready")&&l.img.classList.contains("loaded")&&nt.classList.add("ready")}}async appendPhotos(t){let e=Array.from(t||[]).filter(s=>s.type.startsWith("image/"));if(!e.length)return 0;let n=0;for(let s of e){if(this.cards.length>=30)break;let r=URL.createObjectURL(s),a=await this._probeImage(r).catch(()=>null);if(!a)continue;let o={id:`u${Date.now()}-${n}`,file:s.name,src:r,w:a.w,h:a.h,aspect:a.w/a.h,place:"自选",caption:s.name.replace(/\.[^.]+$/,"").slice(0,18),dominant:[120,120,130],blur:"",featured:!1,order:100+this.cards.length},l=this.cards.length,c=this._makeCard(o,l);c.featured=!1,this.container.appendChild(c.el),this.cards.push(c),c.img.onload=()=>{c.el.classList.add("ready"),requestAnimationFrame(()=>c.img.classList.add("loaded"))},c.img.src=r,n++}return n}_probeImage(t){return new Promise((e,n)=>{let s=new Image;s.onload=()=>e({w:s.naturalWidth,h:s.naturalHeight}),s.onerror=n,s.src=t})}};var Na=typeof self<"u"?self:{};function Ce(i,t){i=i.split(".");for(var e,n=Na;i.length&&(e=i.shift());)i.length||t===void 0?n=n[e]&&n[e]!==Object.prototype[e]?n[e]:n[e]={}:n[e]=t}function wr(){throw Error("Invalid UTF8")}function xg(i,t){return t=String.fromCharCode.apply(null,t),i==null?t:i+t}var df,yg,bf,Jh,Oh=void 0,Db=typeof TextDecoder<"u",Fb=typeof TextEncoder<"u";function W_(i){if(Fb)i=(yg||(yg=new TextEncoder)).encode(i);else{let e=0,n=new Uint8Array(3*i.length);for(let s=0;s<i.length;s++){var t=i.charCodeAt(s);if(t<128)n[e++]=t;else{if(t<2048)n[e++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&s<i.length){let r=i.charCodeAt(++s);if(r>=56320&&r<=57343){t=1024*(t-55296)+r-56320+65536,n[e++]=t>>18|240,n[e++]=t>>12&63|128,n[e++]=t>>6&63|128,n[e++]=63&t|128;continue}s--}t=65533}n[e++]=t>>12|224,n[e++]=t>>6&63|128}n[e++]=63&t|128}}i=e===n.length?n:n.subarray(0,e)}return i}t:{for(ff=["CLOSURE_FLAGS"],Bh=Na,kh=0;kh<ff.length;kh++)if((Bh=Bh[ff[kh]])==null){Jh=null;break t}Jh=Bh}var ff,Bh,kh,Sg=Jh&&Jh[748402147];function Mg(){var i=Na.navigator;return i&&(i=i.userAgent)?i:""}function _u(i){return _u[" "](i),i}bf=Sg==null||Sg,_u[" "]=function(){};var X_={},sl=null;function Ub(i){var t=i.length,e=3*t/4;e%3?e=Math.floor(e):"=.".indexOf(i[t-1])!=-1&&(e="=.".indexOf(i[t-2])!=-1?e-2:e-1);var n=new Uint8Array(e),s=0;return(function(r,a){function o(c){for(;l<r.length;){let h=r.charAt(l++),d=sl[h];if(d!=null)return d;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return c}q_();for(var l=0;;){let c=o(-1),h=o(0),d=o(64),u=o(64);if(u===64&&c===-1)break;a(c<<2|h>>4),d!=64&&(a(h<<4&240|d>>2),u!=64&&a(d<<6&192|u))}})(i,function(r){n[s++]=r}),s!==e?n.subarray(0,s):n}function q_(){if(!sl){sl={};var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"];for(let e=0;e<5;e++){let n=i.concat(t[e].split(""));X_[e]=n;for(let s=0;s<n.length;s++){let r=n[s];sl[r]===void 0&&(sl[r]=s)}}}}var Ob=typeof Uint8Array<"u",$_=!(Mg().indexOf("Trident")!=-1||Mg().indexOf("MSIE")!=-1)&&typeof btoa=="function",bg=/[-_.]/g,Bb={"-":"+",_:"/",".":"="};function kb(i){return Bb[i]||""}function Y_(i){if(!$_)return Ub(i);i=bg.test(i)?i.replace(bg,kb):i,i=atob(i);var t=new Uint8Array(i.length);for(let e=0;e<i.length;e++)t[e]=i.charCodeAt(e);return t}function tp(i){return Ob&&i!=null&&i instanceof Uint8Array}var Da={};function Fr(){return Eg||(Eg=new Yn(null,Da))}function ep(i){K_(Da);var t=i.h;return(t=t==null||tp(t)?t:typeof t=="string"?Y_(t):null)==null?t:i.h=t}var Eg,Yn=class{i(){return new Uint8Array(ep(this)||0)}constructor(i,t){if(K_(t),this.h=i,i!=null&&i.length===0)throw Error("ByteString should be constructed with non-empty values")}};function K_(i){if(i!==Da)throw Error("illegal external caller")}function Z_(i,t){i.__closure__error__context__984382||(i.__closure__error__context__984382={}),i.__closure__error__context__984382.severity=t}var Tg=void 0;function ll(i){return Z_(i=Error(i),"warning"),i}function Fa(i,t){if(i!=null){var e=Tg??(Tg={}),n=e[i]||0;n>=t||(e[i]=n+1,Z_(i=Error(),"incident"),(function(s){Na.setTimeout(()=>{throw s},0)})(i))}}function Or(){return typeof BigInt=="function"}var Xa=typeof Symbol=="function"&&typeof Symbol()=="symbol";function Is(i,t,e=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?e&&Symbol.for&&i?Symbol.for(i):i!=null?Symbol(i):Symbol():t}var rr,zb=Is("jas",void 0,!0),wg=Is(void 0,"0di"),tl=Is(void 0,"1oa"),Kn=Is(void 0,Symbol()),Gb=Is(void 0,"0ub"),Hb=Is(void 0,"0ubs"),Ef=Is(void 0,"0ubsb"),Vb=Is(void 0,"0actk"),J_=Is("m_m","jb",!0),j_={Va:{value:0,configurable:!0,writable:!0,enumerable:!1}},Q_=Object.defineProperties,Rt=Xa?zb:"Va",Ag=[];function pl(i,t){Xa||Rt in i||Q_(i,j_),i[Rt]|=t}function Je(i,t){Xa||Rt in i||Q_(i,j_),i[Rt]=t}function qa(i){return pl(i,34),i}function cl(i){return pl(i,8192),i}function ip(i,t){return 2&t&&(i|=2),1|i}Je(Ag,7),rr=Object.freeze(Ag);var t1={};function Ua(i){return i!=null&&i[J_]===t1}function Ni(i,t){return t===void 0?i.i!==Ur&&!!(2&i.B[Rt]):!!(2&t)&&i.i!==Ur}var Ur={};function vu(i,t){if(i!=null){if(typeof i=="string")i=i?new Yn(i,Da):Fr();else if(!(i instanceof Yn))if(tp(i))i=i.length?new Yn(new Uint8Array(i),Da):Fr();else{if(!t)throw Error();i=void 0}}return i}var jh=class{constructor(t,e,n){this.h=t,this.i=e,this.l=n}next(){var t=this.h.next();return t.done||(t.value=this.i.call(this.l,t.value)),t}[Symbol.iterator](){return this}};function e1(i,t,e){var n,s=128&t?0:-1,r=i.length;(n=!!r)&&(n=(n=i[r-1])!=null&&typeof n=="object"&&n.constructor===Object);var a=r+(n?-1:0);for(t=128&t?1:0;t<a;t++)e(t-s,i[t]);if(n){i=i[r-1];for(let o in i)!isNaN(o)&&e(+o,i[o])}}Object.freeze({});var i1={};function $a(i){return 128&i?i1:void 0}function xu(i){return i.hb=!0,i}var Wb=xu(i=>typeof i=="number"),Rg=xu(i=>typeof i=="string"),Xb=xu(i=>typeof i=="boolean"),yu=typeof Na.BigInt=="function"&&typeof Na.BigInt(0)=="bigint";function si(i){var t=i;if(Rg(t)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(t))throw Error(String(t))}else if(Wb(t)&&!Number.isSafeInteger(t))throw Error(String(t));return yu?BigInt(i):i=Xb(i)?i?"1":"0":Rg(i)?i.trim()||"0":String(i)}var Tf=xu(i=>yu?i>=$b&&i<=Kb:i[0]==="-"?Cg(i,qb):Cg(i,Yb)),qb=Number.MIN_SAFE_INTEGER.toString(),$b=yu?BigInt(Number.MIN_SAFE_INTEGER):void 0,Yb=Number.MAX_SAFE_INTEGER.toString(),Kb=yu?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Cg(i,t){if(i.length>t.length)return!1;if(i.length<t.length||i===t)return!0;for(let e=0;e<i.length;e++){let n=i[e],s=t[e];if(n>s)return!1;if(n<s)return!0}}var Qh,Zb=typeof Uint8Array.prototype.slice=="function",le=0,Se=0;function wf(i){var t=i>>>0;le=t,Se=(i-t)/4294967296>>>0}function Br(i){if(i<0){wf(-i);let[t,e]=rp(le,Se);le=t>>>0,Se=e>>>0}else wf(i)}function np(i){var t=Qh||(Qh=new DataView(new ArrayBuffer(8)));t.setFloat32(0,+i,!0),Se=0,le=t.getUint32(0,!0)}function n1(i,t){var e=4294967296*t+(i>>>0);return Number.isSafeInteger(e)?e:Oa(i,t)}function Jb(i,t){return si(Or()?BigInt.asUintN(64,(BigInt(t>>>0)<<BigInt(32))+BigInt(i>>>0)):Oa(i,t))}function s1(i,t){return Or()?si(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(t))<<BigInt(32))+BigInt.asUintN(32,BigInt(i)))):si(sp(i,t))}function Oa(i,t){if(i>>>=0,(t>>>=0)<=2097151)var e=""+(4294967296*t+i);else Or()?e=""+(BigInt(t)<<BigInt(32)|BigInt(i)):(i=(16777215&i)+6777216*(e=16777215&(i>>>24|t<<8))+6710656*(t=t>>16&65535),e+=8147497*t,t*=2,i>=1e7&&(e+=i/1e7>>>0,i%=1e7),e>=1e7&&(t+=e/1e7>>>0,e%=1e7),e=t+Pg(e)+Pg(i));return e}function Pg(i){return i=String(i),"0000000".slice(i.length)+i}function sp(i,t){if(2147483648&t)if(Or())i=""+(BigInt(0|t)<<BigInt(32)|BigInt(i>>>0));else{let[e,n]=rp(i,t);i="-"+Oa(e,n)}else i=Oa(i,t);return i}function ml(i){if(i.length<16)Br(Number(i));else if(Or())i=BigInt(i),le=Number(i&BigInt(4294967295))>>>0,Se=Number(i>>BigInt(32)&BigInt(4294967295));else{let t=+(i[0]==="-");Se=le=0;let e=i.length;for(let n=t,s=(e-t)%6+t;s<=e;n=s,s+=6){let r=Number(i.slice(n,s));Se*=1e6,(le=1e6*le+r)>=4294967296&&(Se+=Math.trunc(le/4294967296),Se>>>=0,le>>>=0)}if(t){let[n,s]=rp(le,Se);le=n,Se=s}}}function rp(i,t){return t=~t,i?i=1+~i:t+=1,[i,t]}function Rn(i){return Array.prototype.slice.call(i)}var Ir=typeof BigInt=="function"?BigInt.asIntN:void 0,Af=typeof BigInt=="function"?BigInt.asUintN:void 0,Cn=Number.isSafeInteger,gl=Number.isFinite,nr=Math.trunc,jb=si(0);function r1(i){if(typeof i!="number")throw Error(`Value of float/double field must be a number, found ${typeof i}: ${i}`);return i}function Ji(i){return i==null||typeof i=="number"?i:i==="NaN"||i==="Infinity"||i==="-Infinity"?Number(i):void 0}function tu(i){if(typeof i!="boolean"){var t=typeof i;throw Error(`Expected boolean but got ${t!="object"?t:i?Array.isArray(i)?"array":t:"null"}: ${i}`)}return i}var Qb=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Ya(i){switch(typeof i){case"bigint":return!0;case"number":return gl(i);case"string":return Qb.test(i);default:return!1}}function As(i){if(i!=null){if(!gl(i))throw ll("enum");i|=0}return i}function kr(i){if(i==null)return i;if(typeof i=="string"&&i)i=+i;else if(typeof i!="number")return;return gl(i)?0|i:void 0}function a1(i){if(i==null)return i;if(typeof i=="string"&&i)i=+i;else if(typeof i!="number")return;return gl(i)?i>>>0:void 0}function o1(i,t){if(t??(t=1024),!Ya(i))throw ll("int64");var e=typeof i;switch(t){case 512:switch(e){case"string":return eu(i);case"bigint":return String(Ir(64,i));default:return Rf(i)}case 1024:switch(e){case"string":return h1(i);case"bigint":return si(Ir(64,i));default:return si(Cn(i)?i:Rf(i))}case 0:switch(e){case"string":return eu(i);case"bigint":return si(Ir(64,i));default:return ap(i)}default:return(function(n,s=`unexpected value ${n}!`){throw Error(s)})(t,"Unknown format requested type for int64")}}function l1(i){var t=i.length;return(i[0]==="-"?t<20||t===20&&i<="-9223372036854775808":t<19||t===19&&i<="9223372036854775807")?i:(ml(i),sp(le,Se))}function c1(i){if(i[0]==="-")var t=!1;else t=(t=i.length)<20||t===20&&i<="18446744073709551615";return t?i:(ml(i),Oa(le,Se))}function ap(i){if(i=nr(i),!Cn(i)){Br(i);var t=le,e=Se;(i=2147483648&e)&&(e=~e>>>0,(t=1+~t>>>0)==0&&(e=e+1>>>0)),i=typeof(t=n1(t,e))=="number"?i?-t:t:i?"-"+t:t}return i}function Rf(i){return i=nr(i),Cn(i)?i=String(i):(Br(i),i=sp(le,Se)),i}function eu(i){var t=nr(Number(i));return Cn(t)?String(t):((t=i.indexOf("."))!==-1&&(i=i.substring(0,t)),l1(i))}function h1(i){var t=nr(Number(i));return Cn(t)?si(t):((t=i.indexOf("."))!==-1&&(i=i.substring(0,t)),Or()?si(Ir(64,BigInt(i))):si(l1(i)))}function iu(i){var t=typeof i;return i==null?i:t==="bigint"?si(Ir(64,i)):Ya(i)?t==="string"?h1(i):si(Cn(i)?i:Rf(i)):void 0}function op(i){if(i==null)return i;var t=typeof i;if(t==="bigint")return String(Ir(64,i));if(Ya(i)){if(t==="string")return eu(i);if(t==="number")return ap(i)}}function t3(i){if(i==null)return i;var t=typeof i;if(t==="bigint")return String(Af(64,i));if(Ya(i)){if(t==="string")return t=nr(Number(i)),Cn(t)&&t>=0?i=String(t):((t=i.indexOf("."))!==-1&&(i=i.substring(0,t)),i=c1(i)),i;if(t==="number")return(function(e){return(e=nr(e))>=0&&Cn(e)||(Br(e),e=n1(le,Se)),e})(i)}}function u1(i){if(i==null||typeof i=="string"||i instanceof Yn)return i}function d1(i){if(typeof i!="string")throw Error();return i}function Ts(i){if(i!=null&&typeof i!="string")throw Error();return i}function vi(i){return i==null||typeof i=="string"?i:void 0}function lp(i,t,e,n){return Ua(i)?i:Array.isArray(i)?((n=(e=0|i[Rt])|32&n|2&n)!==e&&Je(i,n),new t(i)):(e?2&n?((i=t[wg])||(qa((i=new t).B),i=t[wg]=i),t=i):t=new t:t=void 0,t)}function e3(i,t,e){return t?o1(i,1024):iu(i)??(e?jb:void 0)}function i3(i){return i}var n3={},s3=(function(){try{return _u(new class extends Map{constructor(){super()}}),!1}catch{return!0}})(),al=class{constructor(){this.h=new Map}get(t){return this.h.get(t)}set(t,e){return this.h.set(t,e),this.size=this.h.size,this}delete(t){return t=this.h.delete(t),this.size=this.h.size,t}clear(){this.h.clear(),this.size=this.h.size}has(t){return this.h.has(t)}entries(){return this.h.entries()}keys(){return this.h.keys()}values(){return this.h.values()}forEach(t,e){return this.h.forEach(t,e)}[Symbol.iterator](){return this.entries()}},r3=s3?(Object.setPrototypeOf(al.prototype,Map.prototype),Object.defineProperties(al.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),al):class extends Map{constructor(){super()}};function Ig(i){return i}function pf(i){if(2&i.N)throw Error("Cannot mutate an immutable Map")}var Lg,Cs=class extends r3{constructor(i,t,e=Ig,n=Ig){super(),this.N=0|i[Rt],this.O=t,this.ca=e,this.na=this.O?a3:n;for(let s=0;s<i.length;s++){let r=i[s],a=e(r[0],!1,!0),o=r[1];t?o===void 0&&(o=null):o=n(r[1],!1,!0,void 0,void 0,this.N),super.set(a,o)}}fa(i){return cl(Array.from(super.entries(),i))}clear(){pf(this),super.clear()}delete(i){return pf(this),super.delete(this.ca(i,!0,!1))}entries(){if(this.O){var i=super.keys();i=new jh(i,o3,this)}else i=super.entries();return i}values(){if(this.O){var i=super.keys();i=new jh(i,Cs.prototype.get,this)}else i=super.values();return i}forEach(i,t){this.O?super.forEach((e,n,s)=>{i.call(t,s.get(n),n,s)}):super.forEach(i,t)}set(i,t){return pf(this),(i=this.ca(i,!0,!1))==null?this:t==null?(super.delete(i),this):super.set(i,this.na(t,!0,!0,this.O,!1,this.N))}fb(i){var t=this.ca(i[0],!1,!0);i=i[1],i=this.O?i===void 0?null:i:this.na(i,!1,!0,void 0,!1,this.N),super.set(t,i)}has(i){return super.has(this.ca(i,!1,!1))}get(i){i=this.ca(i,!1,!1);var t=super.get(i);if(t!==void 0){var e=this.O;return e?((e=this.na(t,!1,!0,e,this.Fa,this.N))!==t&&super.set(i,e),e):t}}[Symbol.iterator](){return this.entries()}};function a3(i,t,e,n,s,r){return i=lp(i,n,e,r),s&&(i=hp(i)),i}function o3(i){return[i,this.get(i)]}function Ng(){return Lg||(Lg=new Cs(qa([]),void 0,void 0,void 0,n3))}function Su(i){return Kn?i[Kn]:void 0}function nu(i,t){for(let e in i)!isNaN(e)&&t(i,+e,i[e])}Cs.prototype.toJSON=void 0;var l3,Dg,Fg,Cf=class{};function c3(i,t){t<100||Fa(Hb,1)}function Mu(i,t,e,n){var s=n!==void 0;n=!!n;var r,a=Kn;!s&&Xa&&a&&(r=i[a])&&nu(r,c3),a=[];var o=i.length;r=4294967295;var l=!1,c=!!(64&t),h=c?128&t?0:-1:void 0;if(!(1&t)){var d=o&&i[o-1];d!=null&&typeof d=="object"&&d.constructor===Object?r=--o:d=void 0,!c||128&t||s||(l=!0,r=(l3??i3)(r-h,h,i,d,void 0)+h)}t=void 0;for(var u=0;u<o;u++){let f=i[u];if(f!=null&&(f=e(f,n))!=null)if(c&&u>=r){let g=u-h;(t??(t={}))[g]=f}else a[u]=f}if(d)for(let f in d){if((o=d[f])==null||(o=e(o,n))==null)continue;let g;u=+f,c&&!Number.isNaN(u)&&(g=u+h)<r?a[g]=o:(t??(t={}))[f]=o}return t&&(l?a.push(t):a[r]=t),s&&(e=Kn)&&(i=Su(i))&&i instanceof Cf&&(a[e]=(function(f){var g=new Cf;return nu(f,(x,p,m)=>{g[p]=Rn(m)}),g.h=f.h,g})(i)),a}function h3(i){return i[0]=hl(i[0]),i[1]=hl(i[1]),i}function hl(i){switch(typeof i){case"number":return Number.isFinite(i)?i:""+i;case"bigint":return Tf(i)?Number(i):""+i;case"boolean":return i?1:0;case"object":if(Array.isArray(i)){var t=0|i[Rt];return i.length===0&&1&t?void 0:Mu(i,t,hl)}if(Ua(i))return f1(i);if(i instanceof Yn){if((t=i.h)==null)i="";else if(typeof t=="string")i=t;else{if($_){for(var e="",n=0,s=t.length-10240;n<s;)e+=String.fromCharCode.apply(null,t.subarray(n,n+=10240));e+=String.fromCharCode.apply(null,n?t.subarray(n):t),t=btoa(e)}else{e===void 0&&(e=0),q_(),e=X_[e],n=Array(Math.floor(t.length/3)),s=e[64]||"";let c=0,h=0;for(;c<t.length-2;c+=3){var r=t[c],a=t[c+1],o=t[c+2],l=e[r>>2];r=e[(3&r)<<4|a>>4],a=e[(15&a)<<2|o>>6],o=e[63&o],n[h++]=l+r+a+o}switch(l=0,o=s,t.length-c){case 2:o=e[(15&(l=t[c+1]))<<2]||s;case 1:t=t[c],n[h]=e[t>>2]+e[(3&t)<<4|l>>4]+o+s}t=n.join("")}i=i.h=t}return i}return i instanceof Cs?i=i.size!==0?i.fa(h3):void 0:void 0}return i}function f1(i){return Mu(i=i.B,0|i[Rt],hl)}function Lr(i,t){return p1(i,t[0],t[1])}function p1(i,t,e,n=0){if(i==null){var s=32;e?(i=[e],s|=128):i=[],t&&(s=-16760833&s|(1023&t)<<14)}else{if(!Array.isArray(i))throw Error("narr");if(s=0|i[Rt],bf&&1&s)throw Error("rfarr");if(2048&s&&!(2&s)&&(function(){if(bf)throw Error("carr");Fa(Vb,5)})(),256&s)throw Error("farr");if(64&s)return(s|n)!==s&&Je(i,s|n),i;if(e&&(s|=128,e!==i[0]))throw Error("mid");t:{s|=64;var r=(e=i).length;if(r){var a=r-1;let l=e[a];if(l!=null&&typeof l=="object"&&l.constructor===Object){if((a-=t=128&s?0:-1)>=1024)throw Error("pvtlmt");for(var o in l)(r=+o)<a&&(e[r+t]=l[o],delete l[o]);s=-16760833&s|(1023&a)<<14;break t}}if(t){if((o=Math.max(t,r-(128&s?0:-1)))>1024)throw Error("spvt");s=-16760833&s|(1023&o)<<14}}}return Je(i,64|s|n),i}function u3(i,t){if(typeof i!="object")return i;if(Array.isArray(i)){var e=0|i[Rt];return i.length===0&&1&e?void 0:Ug(i,e,t)}if(Ua(i))return Og(i);if(i instanceof Cs){if(2&(t=i.N))return i;if(!i.size)return;if(e=qa(i.fa()),i.O)for(i=0;i<e.length;i++){let n=e[i],s=n[1];s=s==null||typeof s!="object"?void 0:Ua(s)?Og(s):Array.isArray(s)?Ug(s,0|s[Rt],!!(32&t)):void 0,n[1]=s}return e}return i instanceof Yn?i:void 0}function Ug(i,t,e){return 2&t||(!e||4096&t||16&t?i=Ka(i,t,!1,e&&!(16&t)):(pl(i,34),4&t&&Object.freeze(i))),i}function cp(i,t,e){return i=new i.constructor(t),e&&(i.i=Ur),i.o=Ur,i}function Og(i){var t=i.B,e=0|t[Rt];return Ni(i,e)?i:up(i,t,e)?cp(i,t):Ka(t,e)}function Ka(i,t,e,n){return n??(n=!!(34&t)),i=Mu(i,t,u3,n),n=32,e&&(n|=2),Je(i,t=16769217&t|n),i}function hp(i){var t=i.B,e=0|t[Rt];return Ni(i,e)?up(i,t,e)?cp(i,t,!0):new i.constructor(Ka(t,e,!1)):i}function Za(i){if(i.i!==Ur)return!1;var t=i.B;return pl(t=Ka(t,0|t[Rt]),2048),i.B=t,i.i=void 0,i.o=void 0,!0}function zr(i){if(!Za(i)&&Ni(i,0|i.B[Rt]))throw Error()}function ar(i,t){t===void 0&&(t=0|i[Rt]),32&t&&!(4096&t)&&Je(i,4096|t)}function up(i,t,e){return!!(2&e)||!(!(32&e)||4096&e)&&(Je(t,2|e),i.i=Ur,!0)}var m1=si(0),tr={};function De(i,t,e,n){if((t=Zn(i.B,t,void 0,n))!==null||e&&i.o!==Ur)return t}function Zn(i,t,e,n){if(t===-1)return null;var s=t+(e?0:-1),r=i.length-1;if(!(r<1+(e?0:-1))){if(s>=r){var a=i[r];if(a!=null&&typeof a=="object"&&a.constructor===Object){e=a[t];var o=!0}else{if(s!==r)return;e=a}}else e=i[s];if(n&&e!=null){if((n=n(e))==null)return n;if(!Object.is(n,e))return o?a[t]=n:i[s]=n,n}return e}}function $t(i,t,e,n){zr(i);var s=i.B;return Ze(s,0|s[Rt],t,e,n),i}function Ze(i,t,e,n,s){var r=e+(s?0:-1),a=i.length-1;if(a>=1+(s?0:-1)&&r>=a){let o=i[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[e]=n,t}return r<=a?(i[r]=n,t):(n!==void 0&&(e>=(a=(t??(t=0|i[Rt]))>>14&1023||536870912)?n!=null&&(i[a+(s?0:-1)]={[e]:n}):i[r]=n),t)}function g1(i,t){return Ua(i=Zn(i.B,t))||Array.isArray(i)}function _1(i,t,e){return g1(i,t=S1(i,e)===t?t:-1)}function Cr(i,t,e,n,s){var r=i.B,a=0|r[Rt];n=n&&n!==4?n!==1&&(i?Ni(i,a):2&a)?1:n:4,s=!!s||n===3,n===2&&Za(i)&&(a=0|(r=i.B)[Rt]);var o=(i=dp(r,t))===rr?7:0|i[Rt],l=ip(o,a),c=!(4&l);if(c){let h=0,d=0;for(;h<i.length;h++){let u=e(i[h]);u!=null&&(i[d++]=u)}d<h&&(i.length=d),e=-513&l|4,l=e&=-1025,l&=-4097}return l!==o&&(Je(i,l),2&l&&Object.freeze(i)),v1(i,l,r,a,t,n,c,s)}function v1(i,t,e,n,s,r,a,o){var l=t,c=Ba(t);return c&&r===2&&(i=Rn(i),l=0,t=Nr(t,n),n=Ze(e,n,s,i),c=!1),c||(r===1||r===4&&(2&t||!(16&t)&&32&n)?((t|=!i.length||a&&!(4096&t)||32&n&&!(4096&t||16&t)?2:256)!==l&&Je(i,t),Object.freeze(i)):(o||(t|=16),t!==l&&Je(i,t))),2&t||!(4096&t||16&t)||ar(e,n),i}function dp(i,t,e){return i=Zn(i,t,e),Array.isArray(i)?i:rr}function Ba(i){return!!(2&i)&&!!(4&i)||!!(256&i)}function x1(i){return vu(i,!0)}function y1(i){i=Rn(i);for(let t=0;t<i.length;t++){let e=i[t]=Rn(i[t]);Array.isArray(e[1])&&(e[1]=qa(e[1]))}return cl(i)}function _l(i,t,e,n){zr(i),Ze(i=i.B,0|i[Rt],t,(n==="0"?Number(e)===0:e===n)?void 0:e)}function or(i,t,e){if(2&t)throw Error();var n=$a(t),s=dp(i,e,n),r=s===rr?7:0|s[Rt],a=ip(r,t);return(2&a||Ba(a)||16&a)&&(a===r||Ba(a)||Je(s,a),s=Rn(s),r=0,a=Nr(a,t),Ze(i,t,e,s,n)),(a&=-13)!==r&&Je(s,a),s}function S1(i,t){return pp(fp(i=i.B),i,void 0,t)}function fp(i){if(Xa)return i[tl]??(i[tl]=new Map);if(tl in i)return i[tl];var t=new Map;return Object.defineProperty(i,tl,{value:t}),t}function M1(i,t,e,n,s){var r=fp(i),a=pp(r,i,t,e,s);return a!==n&&(a&&(t=Ze(i,t,a,void 0,s)),r.set(e,n)),t}function pp(i,t,e,n,s){var r=i.get(n);if(r!=null)return r;r=0;for(let a=0;a<n.length;a++){let o=n[a];Zn(t,o,s)!=null&&(r!==0&&(e=Ze(t,e,r,void 0,s)),r=o)}return i.set(n,r),r}function mp(i,t,e){var n=0|i[Rt],s=$a(n),r=Zn(i,e,s);if(Ua(r)){if(!Ni(r))return Za(r),r.B;var a=r.B}else Array.isArray(r)&&(a=r,2&n&&qa(a));if(a){let o=0|a[Rt];2&o&&(a=Ka(a,o))}return(a=Lr(a,t))!==r&&Ze(i,n,e,a,s),a}function d3(i,t,e,n,s){var r=!1;if(n=(function(a,o,l,c){return Zn(a,o,l,c)})(i,n,s,a=>{var o=lp(a,e,!1,t);return r=o!==a&&o!=null,o}),n!=null)return r&&!Ni(n)&&ar(i,t),n}function de(i,t,e,n){var s=i.B,r=0|s[Rt];if((t=d3(s,r,t,e,n))==null)return t;if(!Ni(i,r=0|s[Rt])){let a=hp(t);a!==t&&(Za(i)&&(r=0|(s=i.B)[Rt]),ar(s,r=Ze(s,r,e,t=a,n)))}return t}function b1(i,t,e,n,s,r,a,o){r=r&&r!==4?r!==1&&(i?Ni(i,e):2&e)?1:r:4,a=!!a||r===3;var l=!!o&&!(i?Ni(i,e):2&e);(r===2||l)&&i&&Za(i)&&(e=0|(t=i.B)[Rt]);var c=(i=dp(t,s))===rr?7:0|i[Rt],h=ip(c,e);if(o=!(4&h)){var d=i,u=e;let f=!!(2&h);f&&(u|=2);let g=!f,x=!0,p=0,m=0;for(;p<d.length;p++){let M=lp(d[p],n,!1,u);if(M instanceof n){if(!f){let A=Ni(M);g&&(g=!A),x&&(x=A)}d[m++]=M}}m<p&&(d.length=m),h|=4,h=x?-4097&h:4096|h,h=g?8|h:-9&h}if(h!==c&&(Je(i,h),2&h&&Object.freeze(i)),l&&!(8&h||!i.length&&(r===1||r===4&&(2&h||!(16&h)&&32&e)))){for(Ba(h)&&(i=Rn(i),h=Nr(h,e),e=Ze(t,e,s,i)),n=i,l=h,c=0;c<n.length;c++)(d=n[c])!==(h=hp(d))&&(n[c]=h);l|=8,Je(i,h=l=n.length?4096|l:-4097&l)}return v1(i,h,t,e,s,r,o,a)}function Gr(i,t,e){var n=i.B;return b1(i,n,0|n[Rt],t,e,void 0,!1,!0)}function E1(i){return i==null&&(i=void 0),i}function Lt(i,t,e,n,s){return $t(i,e,n=E1(n),s),n&&!Ni(n)&&ar(i.B),i}function An(i,t,e,n){t:{var s=n=E1(n);zr(i);let r=i.B,a=0|r[Rt];if(s==null){let o=fp(r);if(pp(o,r,a,e)!==t)break t;o.set(e,0)}else a=M1(r,a,e,t);Ze(r,a,t,s)}return n&&!Ni(n)&&ar(i.B),i}function Pf(i,t,e){zr(i);var n=i.B,s=0|n[Rt];if(e==null)Ze(n,s,t);else{var r=e===rr?7:0|e[Rt],a=r,o=Ba(r),l=o||Object.isFrozen(e),c=!0,h=!0;for(let u=0;u<e.length;u++){var d=e[u];o||(d=Ni(d),c&&(c=!d),h&&(h=d))}o||(r=c?13:5,r=h?-4097&r:4096|r),l&&r===a||(e=Rn(e),a=0,r=Nr(r,s)),r!==a&&Je(e,r),s=Ze(n,s,t,e),2&r||!(4096&r||16&r)||ar(n,s)}return i}function Nr(i,t){return-273&(2&t?2|i:-3&i)}function ul(i,t,e,n){zr(i);var s=i.B;i=b1(i,s,0|s[Rt],e,t,2,!0),n=n??new e,i.push(n),t=e=i===rr?7:0|i[Rt],(n=Ni(n))?(e&=-9,i.length===1&&(e&=-4097)):e|=4096,e!==t&&Je(i,e),n||ar(s)}function pn(i,t,e){return kr(De(i,t,e))}function Li(i,t){return De(i,t,void 0,Ji)??0}function If(i,t,e,n){return de(i,t,e=S1(i,n)===e?e:-1,void 0)}function Lf(i,t){_l(i,3,t==null?t:tu(t),!1)}function Jn(i,t,e){if(e!=null){if(typeof e!="number"||!gl(e))throw ll("int32");e|=0}$t(i,t,e)}function mf(i,t,e){return $t(i,t,e==null?e:o1(e))}function Vh(i,t,e){return $t(i,t,e==null?e:(function(n){if(!Ya(n))throw ll("uint64");switch(typeof n){case"string":var s=nr(Number(n));return Cn(s)&&s>=0?n=si(s):((s=n.indexOf("."))!==-1&&(n=n.substring(0,s)),n=Or()?si(Af(64,BigInt(n))):si(c1(n))),n;case"bigint":return si(Af(64,n));default:return n>=0&&Cn(n)||((n=nr(n))>=0&&Cn(n)?n=String(n):(Br(n),n=Oa(le,Se))),si(n)}})(e))}function Dt(i,t,e){$t(i,t,e==null?e:r1(e))}function Ca(i,t,e){_l(i,t,e==null?e:r1(e),0)}function ji(i,t,e){_l(i,t,Ts(e),"")}function su(i,t,e){{zr(i);let a=i.B,o=0|a[Rt];if(e==null)Ze(a,o,t);else{var n=i=e===rr?7:0|e[Rt],s=Ba(i),r=s||Object.isFrozen(e);for(s||(i=0),r||(e=Rn(e),n=0,i=Nr(i,o),r=!1),i|=5,i|=(4&i?512&i?512:1024&i?1024:0:void 0)??1024,s=0;s<e.length;s++){let l=e[s],c=d1(l);Object.is(l,c)||(r&&(e=Rn(e),n=0,i=Nr(i,o),r=!1),e[s]=c)}i!==n&&(r&&(e=Rn(e),i=Nr(i,o)),Je(e,i)),Ze(a,o,t,e)}}}function bu(i,t,e){zr(i),Cr(i,t,vi,2,!0).push(d1(e))}var Aa=class{constructor(i,t,e){if(this.buffer=i,e&&!t)throw Error();this.h=t}};function Eu(i,t){if(typeof i=="string")return new Aa(Y_(i),t);if(Array.isArray(i))return new Aa(new Uint8Array(i),t);if(i.constructor===Uint8Array)return new Aa(i,!1);if(i.constructor===ArrayBuffer)return i=new Uint8Array(i),new Aa(i,!1);if(i.constructor===Yn)return t=ep(i)||new Uint8Array(0),new Aa(t,!0,i);if(i instanceof Uint8Array)return i=i.constructor===Uint8Array?i:new Uint8Array(i.buffer,i.byteOffset,i.byteLength),new Aa(i,!1);throw Error()}function gp(i,t){var e=0,n=0,s=0,r=i.i,a=i.h;do{var o=r[a++];e|=(127&o)<<s,s+=7}while(s<32&&128&o);if(s>32)for(n|=(127&o)>>4,s=3;s<32&&128&o;s+=7)n|=(127&(o=r[a++]))<<s;if(Dr(i,a),!(128&o))return t(e>>>0,n>>>0);throw Error()}function _p(i){for(var t=0,e=i.h,n=e+10,s=i.i;e<n;){let r=s[e++];if(t|=r,!(128&r))return Dr(i,e),!!(127&t)}throw Error()}function Ps(i){var t=i.i,e=i.h,n=t[e++],s=127&n;if(128&n&&(s|=(127&(n=t[e++]))<<7,128&n&&(s|=(127&(n=t[e++]))<<14,128&n&&(s|=(127&(n=t[e++]))<<21,128&n&&(s|=(n=t[e++])<<28,128&n&&128&t[e++]&&128&t[e++]&&128&t[e++]&&128&t[e++]&&128&t[e++])))))throw Error();return Dr(i,e),s}function jn(i){return Ps(i)>>>0}function ru(i){return gp(i,s1)}function Nf(i){var t=i.i,e=i.h,n=t[e],s=t[e+1],r=t[e+2];return t=t[e+3],Dr(i,i.h+4),(n|s<<8|r<<16|t<<24)>>>0}function au(i){var t=Nf(i);i=2*(t>>31)+1;var e=t>>>23&255;return t&=8388607,e==255?t?NaN:i*(1/0):e==0?1401298464324817e-60*i*t:i*Math.pow(2,e-150)*(t+8388608)}function f3(i){return Ps(i)}function Dr(i,t){if(i.h=t,t>i.l)throw Error()}function T1(i,t){if(t<0)throw Error();var e=i.h;if((t=e+t)>i.l)throw Error();return i.h=t,e}function w1(i,t){if(t==0)return Fr();var e=T1(i,t);return i.ga&&i.u?e=i.i.subarray(e,e+t):(i=i.i,e=e===(t=e+t)?new Uint8Array(0):Zb?i.slice(e,t):new Uint8Array(i.subarray(e,t))),e.length==0?Fr():new Yn(e,Da)}var p3=class{constructor(i,t,e,n){this.i=null,this.u=!1,this.h=this.l=this.o=0,this.init(i,t,e,n)}init(i,t,e,{ga:n=!1,ma:s=!1}={}){this.ga=n,this.ma=s,i&&(i=Eu(i,this.ma),this.i=i.buffer,this.u=i.h,this.o=t||0,this.l=e!==void 0?this.o+e:this.i.length,this.h=this.o)}clear(){this.i=null,this.u=!1,this.h=this.l=this.o=0,this.ga=!1}},Bg=[],ka=0;function A1(i,t,e,n){if(ou.length){let s=ou.pop();return s.A(n),s.h.init(i,t,e,n),s}return new m3(i,t,e,n)}function R1(i){i.h.clear(),i.l=-1,i.i=-1,ou.length<100&&ou.push(i)}function C1(i){var t=i.h;if(t.h==t.l)return!1;i.o=i.h.h;var e=jn(i.h);if(t=e>>>3,!((e&=7)>=0&&e<=5)||t<1)throw Error();return i.l=t,i.i=e,!0}function Wh(i){try{switch(i.i){case 0:i.i!=0?Wh(i):_p(i.h);break;case 1:var t=i.h;Dr(t,t.h+8);break;case 2:if(i.i!=2)Wh(i);else{var e=jn(i.h),n=i.h;Dr(n,n.h+e)}break;case 5:var s=i.h;Dr(s,s.h+4);break;case 3:P1();let r=i.l;try{for(;;){if(!C1(i))throw Error();if(i.i==4){if(i.l!=r)throw Error();break}Wh(i)}}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{ka>0&&ka--}break;default:throw Error()}}catch(r){throw r instanceof RangeError?new SyntaxError:r}}function P1(){if(ka>=100)throw new SyntaxError;ka++}function vl(i,t,e){var n=i.h.l,s=jn(i.h),r=(s=i.h.h+s)-n;if(r<=0&&(i.h.l=s,e(t,i,void 0,void 0,void 0),r=s-i.h.h),r)throw Error();return i.h.h=s,i.h.l=n,t}function vp(i){var t=jn(i.h),e=T1(i=i.h,t);if(i=i.i,Db){var n,s=i;(n=df)||(n=df=new TextDecoder("utf-8",{fatal:!0})),t=e+t,s=e===0&&t===s.length?s:s.subarray(e,t);try{var r=n.decode(s)}catch(o){if(Oh===void 0){try{n.decode(new Uint8Array([128]))}catch{}try{n.decode(new Uint8Array([97])),Oh=!0}catch{Oh=!1}}throw!Oh&&(df=void 0),o}}else{t=(r=e)+t,e=[];let o,l=null;for(;r<t;){var a=i[r++];a<128?e.push(a):a<224?r>=t?wr():(o=i[r++],a<194||(192&o)!=128?(r--,wr()):e.push((31&a)<<6|63&o)):a<240?r>=t-1?wr():(o=i[r++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(n=i[r++]))!=128?(r--,wr()):e.push((15&a)<<12|(63&o)<<6|63&n)):a<=244?r>=t-2?wr():(o=i[r++],(192&o)!=128||o-144+(a<<28)>>30||(192&(n=i[r++]))!=128||(192&(s=i[r++]))!=128?(r--,wr()):(a=(7&a)<<18|(63&o)<<12|(63&n)<<6|63&s,a-=65536,e.push(55296+(a>>10&1023),56320+(1023&a)))):wr(),e.length>=8192&&(l=xg(l,e),e.length=0)}r=xg(l,e)}return r}function xp(i){var t=jn(i.h);return w1(i.h,t)}function xl(i,t,e){var n=jn(i.h);for(n=i.h.h+n;i.h.h<n;)e.push(t(i.h))}var m3=class{constructor(i,t,e,n){if(Bg.length){let s=Bg.pop();s.init(i,t,e,n),i=s}else i=new p3(i,t,e,n);this.h=i,this.o=this.h.h,this.i=this.l=-1,this.A(n)}A({ra:i=!1}={}){this.ra=i}},ou=[];function g3(i){return new lu(4294967295&i,Math.floor(i/4294967296))}function kg(i){return i?/^\d+$/.test(i)?(ml(i),new lu(le,Se)):null:zg||(zg=new lu(0,0))}var zg,lu=class{constructor(i,t){this.i=i>>>0,this.h=t>>>0}};function _3(i){return new cu(4294967295&i,Math.floor(i/4294967296))}function I1(i){return i?/^-?\d+$/.test(i)?(ml(i),new cu(le,Se)):null:Gg||(Gg=new cu(0,0))}var Gg,Hg,Vg,Wg,gf,Xg,el,zh,cu=class{constructor(i,t){this.i=i>>>0,this.h=t>>>0}};function L1(i,t,e){return typeof BigInt64Array<"u"?(el||(el=new BigInt64Array(1),zh=new Uint32Array(el.buffer),el[0]=BigInt(1),Xg=zh[0]===1),el[0]=i,new t(zh[i=Xg?0:1],zh[1-i])):(gf||(Hg=BigInt(Number.MIN_SAFE_INTEGER),Vg=BigInt(Number.MAX_SAFE_INTEGER),Wg=BigInt(4294967295),gf=BigInt(32)),i>=Hg&&i<=Vg?e(Number(i)):(i=BigInt.asUintN(64,i),new t(Number(i&Wg),Number(i>>gf))))}function Rs(i,t,e){for(;e>0||t>127;)i.h.push(127&t|128),t=(t>>>7|e<<25)>>>0,e>>>=7;i.h.push(t)}function Ja(i,t){for(;t>127;)i.h.push(127&t|128),t>>>=7;i.h.push(t)}function yl(i,t){if(t>=0)Ja(i,t);else{for(let e=0;e<9;e++)i.h.push(127&t|128),t>>=7;i.h.push(1)}}function v3(i,t){ml(t),(function(e){var n=Se>>31;e(le<<1^n,(Se<<1|le>>>31)^n)})((e,n)=>{Rs(i,e>>>0,n>>>0)})}function dl(i,t){i.h.push(t>>>0&255),i.h.push(t>>>8&255),i.h.push(t>>>16&255),i.h.push(t>>>24&255)}var x3=class{constructor(){this.h=[]}length(){return this.h.length}end(){var i=this.h;return this.h=[],i}};function za(i,t){t.length!==0&&(i.l.push(t),i.i+=t.length)}function Fi(i,t,e){Ja(i.h,8*t+e)}function yp(i,t){return Fi(i,t,2),t=i.h.end(),za(i,t),t.push(i.i),t}function Sp(i,t){var e=t.pop();for(e=i.i+i.h.length()-e;e>127;)t.push(127&e|128),e>>>=7,i.i++;t.push(e),i.i++}function N1(i,t,e){if(e!=null)switch(Fi(i,t,0),typeof e){case"number":i=i.h,Br(e),Rs(i,le,Se);break;case"bigint":e=L1(e,cu,_3),Rs(i.h,e.i,e.h);break;default:e=I1(e),Rs(i.h,e.i,e.h)}}function Sl(i,t,e){Fi(i,t,2),Ja(i.h,e.length),za(i,i.h.end()),za(i,e)}function hu(i,t,e,n){e!=null&&(t=yp(i,t),n(e,i),Sp(i,t))}var y3=class{constructor(){this.l=[],this.i=0,this.h=new x3}};function D1(i){typeof i=="string"&&I1(i)}function mn(){var i=class{constructor(){throw Error()}};return Object.setPrototypeOf(i,i.prototype),i}var Mp=mn(),F1=mn(),bp=mn(),Tu=mn(),Ep=mn(),wu=mn(),S3=mn(),M3=mn(),Au=mn(),b3=mn(),Ru=mn(),Tp=mn();function Qn(i,t,e){var n=i.B;Kn&&Kn in n&&(n=n[Kn])&&delete n[t.h],t.i?t.u(i,t.i,t.h,e,t.l):t.u(i,t.h,e,t.l)}var vt=class{constructor(i,t){this.B=p1(i,t,void 0,2048)}toJSON(){return f1(this)}u(){var i=fE,t=this.B,e=i.h,n=Kn;return Xa&&n&&t[n]?.[e]!=null&&Fa(Gb,3),i.i?i.o(this,i.i,i.h,i.l):i.o(this,i.h,i.defaultValue,i.l)}clone(){var i=this.B,t=0|i[Rt];return up(this,i,t)?cp(this,i,!0):new this.constructor(Ka(i,t,!1))}};vt.prototype[J_]=t1,vt.prototype.toString=function(){return this.B.toString()};var ja=class{constructor(i,t,e){this.h=i,this.i=t,i=Mp,this.l=!!i&&e===i||!1}};function Cu(i,t){return new ja(i,t,Mp)}function U1(i,t,e,n,s){hu(i,e,B1(t,n),s)}var Df,Ff,E3=Cu(function(i,t,e,n,s){return i.i===2&&(vl(i,mp(t,n,e),s),!0)},U1),T3=Cu(function(i,t,e,n,s){return i.i===2&&(vl(i,mp(t,n,e),s),!0)},U1),Pu=Symbol(),Iu=Symbol(),Uf=Symbol(),qg=Symbol(),$g=Symbol();function Hr(i,t,e,n){var s=n[i];if(s)return s;(s={}).Ea=n,s.da=(function(d){switch(typeof d){case"boolean":return Dg||(Dg=[0,void 0,!0]);case"number":return d>0?void 0:d===0?Fg||(Fg=[0,void 0]):[-d,void 0];case"string":return[0,d];case"object":return d}})(n[0]);var r=n[1],a=1;r&&r.constructor===Object&&(s.ja=r,typeof(r=n[++a])=="function"&&r.length>0&&(s.wa=!0,Df??(Df=r),Ff??(Ff=n[a+1]),r=n[a+=2]));for(var o={};r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var l=0;l<r.length;l++)o[r[l]]=r;r=n[++a]}for(l=1;r!==void 0;){let d;typeof r=="number"&&(l+=r,r=n[++a]);var c=void 0;if(r instanceof ja?d=r:(d=E3,a--),d?.l){r=n[++a],c=n;var h=a;typeof r=="function"&&(r=r(),c[h]=r),c=r}for(h=l+1,typeof(r=n[++a])=="number"&&r<0&&(h-=r,r=n[++a]);l<h;l++){let u=o[l];c?e(s,l,d,c,u):t(s,l,d,u)}}return n[i]=s}function O1(i){return Array.isArray(i)?i[0]instanceof ja?i:[T3,i]:[i,void 0]}function B1(i,t){return i instanceof vt?i.B:Array.isArray(i)?Lr(i,t):void 0}function wp(i,t,e,n){var s=e.h;i[t]=n?(r,a,o)=>s(r,a,o,n):s}function Ap(i,t,e,n,s){var r,a,o=e.h;i[t]=(l,c,h)=>o(l,c,h,a||(a=Hr(Iu,wp,Ap,n).da),r||(r=Rp(n)),s)}function Rp(i){var t=i[Uf];if(t!=null)return t;var e=Hr(Iu,wp,Ap,i);return t=e.wa?(n,s)=>Df(n,s,e):(n,s)=>{t:{P1();try{for(;C1(s)&&s.i!=4;){let u=s.l,f=e[u];if(f==null){let g=e.ja;if(g){let x=g[u];if(x){let p=A3(x);p!=null&&(f=e[u]=p)}}}if(f==null||!f(s,n,u)){var r=s;let g=r.o;if(Wh(r),r.ra)var a=void 0;else{let x=r.h.h-g;r.h.h=g,a=w1(r.h,x)}r=void 0;var o=n,l=u,c=a;c&&((r=o[Kn]??(o[Kn]=new Cf))[l]??(r[l]=[])).push(c)}}let d=Su(n);d&&(d.h=e.Ea[$g]);var h=!0;break t}catch(d){throw d instanceof RangeError?new SyntaxError:d}finally{ka>0&&ka--}h=void 0}return h},i[Uf]=t,i[$g]=w3.bind(i),t}function w3(i,t,e,n){var s=this[Iu],r=this[Uf],a=Lr(void 0,s.da),o=Su(i);if(o){var l=!1,c=s.ja;if(c){if(s=(h,d,u)=>{if(u.length!==0)if(c[d])for(let f of u){h=A1(f);try{l=!0,r(a,h)}finally{R1(h)}}else n?.(i,d,u)},t==null)nu(o,s);else if(o!=null){let h=o[t];h&&s(o,t,h)}if(l){let h=0|i[Rt];if(2&h&&2048&h&&!e?.lb)throw Error();let d=$a(h),u=(f,g)=>{if(Zn(i,f,d)!=null){if(e?.kb===1)return;throw Error()}g!=null&&(h=Ze(i,h,f,g,d)),delete o[f]};t==null?e1(a,0|a[Rt],(f,g)=>{u(f,g)}):u(t,Zn(a,t,d))}}}}function A3(i){var t=(i=O1(i))[0].h;if(i=i[1]){let e=Rp(i),n=Hr(Iu,wp,Ap,i).da;return(s,r,a)=>t(s,r,a,n,e)}return t}function Lu(i,t,e){i[t]=e.i}function Nu(i,t,e,n){var s,r,a=e.i;i[t]=(o,l,c)=>a(o,l,c,r||(r=Hr(Pu,Lu,Nu,n).da),s||(s=k1(n)))}function k1(i){var t=i[qg];if(!t){let e=Hr(Pu,Lu,Nu,i);t=(n,s)=>z1(n,s,e),i[qg]=t}return t}function z1(i,t,e){e1(i,0|i[Rt],(n,s)=>{if(s!=null){var r=(function(a,o){var l=a[o];if(l)return l;if((l=a.ja)&&(l=l[o])){var c=(l=O1(l))[0].i;if(l=l[1]){let h=k1(l),d=Hr(Pu,Lu,Nu,l).da;l=a.wa?Ff(d,h):(u,f,g)=>c(u,f,g,d,h)}else l=c;return a[o]=l}})(e,n);r?r(t,s,n):n<500||Fa(Ef,3)}}),(i=Su(i))&&nu(i,(n,s,r)=>{for(za(t,t.h.end()),n=0;n<r.length;n++)za(t,ep(r[n])||new Uint8Array(0))})}var R3=si(0);function Ls(i,t,e){if(Array.isArray(t)){var n=0|t[Rt];if(4&n)return t;for(var s=0,r=0;s<t.length;s++){let a=i(t[s]);a!=null&&(t[r++]=a)}return r<s&&(t.length=r),i=1|n,e&&(i=-1537&i|4),i!==n&&Je(t,i),e&&2&i&&Object.freeze(t),t}}var G1=(i,t)=>{var e=new y3;z1(i.B,e,Hr(Pu,Lu,Nu,t)),za(e,e.h.end()),i=new Uint8Array(e.i);var n=(t=e.l).length,s=0;for(let r=0;r<n;r++){let a=t[r];i.set(a,s),s+=a.length}return e.l=[i],i};function We(i,t,e){return new ja(i,t,e)}function Ns(i,t,e){return new ja(i,t,e)}function ai(i,t,e){Ze(i,0|i[Rt],t,e,$a(0|i[Rt]))}var C3=Cu(function(i,t,e,n,s){if(i.i!==2)return!1;if(i=Rn(i=vl(i,Lr([void 0,void 0],n),s)),s=$a(n=0|t[Rt]),2&n)throw Error();var r=Zn(t,e,s);if(r instanceof Cs)2&r.N?((r=r.fa()).push(i),Ze(t,n,e,r,s)):r.fb(i);else if(Array.isArray(r)){var a=0|r[Rt];8192&a||Je(r,a|=8192),2&a&&Ze(t,n,e,r=y1(r),s),r.push(i)}else Ze(t,n,e,cl([i]),s);return!0},function(i,t,e,n,s){if(t instanceof Cs)t.forEach((r,a)=>{hu(i,e,Lr([a,r],n),s)});else if(Array.isArray(t)){for(let r=0;r<t.length;r++){let a=t[r];Array.isArray(a)&&hu(i,e,Lr(a,n),s)}cl(t)}});function H1(i,t,e){(t=Ji(t))!=null&&(Fi(i,e,5),i=i.h,np(t),dl(i,le))}function Cp(i,t,e){(t=op(t))!=null&&(D1(t),N1(i,e,t))}function V1(i,t,e){(t=kr(t))!=null&&t!=null&&(Fi(i,e,0),yl(i.h,t))}function W1(i,t,e){(t=t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0)!=null&&(Fi(i,e,0),i.h.h.push(t?1:0))}function X1(i,t,e){(t=vi(t))!=null&&Sl(i,e,W_(t))}function q1(i,t,e,n,s){hu(i,e,B1(t,n),s)}function Pp(i,t,e){(t=u1(t))!=null&&Sl(i,e,Eu(t,!0).buffer)}function $1(i,t,e){(t=a1(t))!=null&&t!=null&&(Fi(i,e,0),Ja(i.h,t))}function Y1(i,t,e){(t=kr(t))!=null&&(t=parseInt(t,10),Fi(i,e,0),yl(i.h,t))}function K1(i,t,e){return(i.i===5||i.i===2)&&(t=or(t,0|t[Rt],e),i.i==2?xl(i,au,t):t.push(au(i.h)),!0)}function Z1(i,t,e){return i.i===0&&(ai(t,e,ru(i.h)),!0)}function J1(i,t,e){return(i.i===0||i.i===2)&&(t=or(t,0|t[Rt],e),i.i==2?xl(i,Ps,t):t.push(Ps(i.h)),!0)}function j1(i,t,e){return i.i===2&&(ai(t,e,(i=xp(i))===Fr()?void 0:i),!0)}var Yg=We(function(i,t,e){if(i.i!==1)return!1;var n=i.h;i=Nf(n);var s=Nf(n);n=2*(s>>31)+1;var r=s>>>20&2047;return i=4294967296*(1048575&s)+i,ai(t,e,r==2047?i?NaN:n*(1/0):r==0?5e-324*n*i:n*Math.pow(2,r-1075)*(i+4503599627370496)),!0},function(i,t,e){(t=Ji(t))!=null&&(Fi(i,e,1),i=i.h,(e=Qh||(Qh=new DataView(new ArrayBuffer(8)))).setFloat64(0,+t,!0),le=e.getUint32(0,!0),Se=e.getUint32(4,!0),dl(i,le),dl(i,Se))},b3),Ge=We(function(i,t,e){return i.i===5&&(ai(t,e,au(i.h)),!0)},H1,Au),P3=Ns(K1,function(i,t,e){if((t=Ls(Ji,t,!0))!=null)for(let a=0;a<t.length;a++){var n=i,s=e,r=t[a];r!=null&&(Fi(n,s,5),n=n.h,np(r),dl(n,le))}},Au),Ip=Ns(K1,function(i,t,e){if((t=Ls(Ji,t,!0))!=null&&t.length){Fi(i,e,2),Ja(i.h,4*t.length);for(let n=0;n<t.length;n++)e=i.h,np(t[n]),dl(e,le)}},Au),Q1=We(function(i,t,e){return i.i===5&&(ai(t,e,(i=au(i.h))===0?void 0:i),!0)},H1,Au),il=We(function(i,t,e){return Z1(i,t,e)},Cp,wu),Re=We(function(i,t,e){return Z1(i,t,e)},Cp,wu),I3=Ns(function(i,t,e){return i.i!==0&&i.i!==2?i=!1:(t=or(t,0|t[Rt],e),i.i==2?xl(i,ru,t):t.push(ru(i.h)),i=!0),i},function(i,t,e){if((t=Ls(op,t,!1))!=null)for(let n=0;n<t.length;n++)N1(i,e,t[n])},wu),Xh=We(function(i,t,e){return i.i!==0?t=!1:(ai(t,e,(i=ru(i.h))===R3?void 0:i),t=!0),t},Cp,wu),uu=We(function(i,t,e){return i.i!==0?i=!1:(ai(t,e,gp(i.h,Jb)),i=!0),i},function(i,t,e){if((t=t3(t))!=null&&(typeof t=="string"&&kg(t),t!=null))switch(Fi(i,e,0),typeof t){case"number":i=i.h,Br(t),Rs(i,le,Se);break;case"bigint":e=L1(t,lu,g3),Rs(i.h,e.i,e.h);break;default:e=kg(t),Rs(i.h,e.i,e.h)}},S3),jt=We(function(i,t,e){return i.i===0&&(ai(t,e,Ps(i.h)),!0)},V1,Tu),Kg=Ns(J1,function(i,t,e){if((t=Ls(kr,t,!0))!=null)for(let a=0;a<t.length;a++){var n=i,s=e,r=t[a];r!=null&&(Fi(n,s,0),yl(n.h,r))}},Tu),Qa=Ns(J1,function(i,t,e){if((t=Ls(kr,t,!0))!=null&&t.length){e=yp(i,e);for(let n=0;n<t.length;n++)yl(i.h,t[n]);Sp(i,e)}},Tu),Pr=We(function(i,t,e){return i.i===0&&(ai(t,e,(i=Ps(i.h))===0?void 0:i),!0)},V1,Tu),Bt=We(function(i,t,e){return i.i===0&&(ai(t,e,_p(i.h)),!0)},W1,F1),ir=We(function(i,t,e){return i.i===0&&(ai(t,e,(i=_p(i.h))===!1?void 0:i),!0)},W1,F1),ni=Ns(function(i,t,e){return i.i===2&&(i=vp(i),or(t,0|t[Rt],e).push(i),!0)},function(i,t,e){if((t=Ls(vi,t,!0))!=null)for(let a=0;a<t.length;a++){var n=i,s=e,r=t[a];r!=null&&Sl(n,s,W_(r))}},bp),bs=We(function(i,t,e){return i.i===2&&(ai(t,e,(i=vp(i))===""?void 0:i),!0)},X1,bp),rt=We(function(i,t,e){return i.i===2&&(ai(t,e,vp(i)),!0)},X1,bp),we=(function(i,t,e=Mp){return new ja(i,t,e)})(function(i,t,e,n,s){return i.i===2&&(n=Lr(void 0,n),or(t,0|t[Rt],e).push(n),vl(i,n,s),!0)},function(i,t,e,n,s){if(Array.isArray(t)){for(let r=0;r<t.length;r++)q1(i,t[r],e,n,s);1&(i=0|t[Rt])||Je(t,1|i)}}),re=Cu(function(i,t,e,n,s,r){if(i.i!==2)return!1;var a=0|t[Rt];return M1(t,a,r,e,$a(a)),vl(i,t=mp(t,n,e),s),!0},q1),Pa=We(function(i,t,e){return i.i===2&&(ai(t,e,xp(i)),!0)},Pp,Ru),tv=Ns(function(i,t,e){return i.i===2&&(i=xp(i),or(t,0|t[Rt],e).push(i),!0)},function(i,t,e){if((t=Ls(u1,t,!1))!=null)for(let a=0;a<t.length;a++){var n=i,s=e,r=t[a];r!=null&&Sl(n,s,Eu(r,!0).buffer)}},Ru),ev=We(function(i,t,e){return i.i===0&&(ai(t,e,jn(i.h)),!0)},$1,Ep),L3=Ns(function(i,t,e){return(i.i===0||i.i===2)&&(t=or(t,0|t[Rt],e),i.i==2?xl(i,jn,t):t.push(jn(i.h)),!0)},function(i,t,e){if((t=Ls(a1,t,!0))!=null)for(let a=0;a<t.length;a++){var n=i,s=e,r=t[a];r!=null&&(Fi(n,s,0),Ja(n.h,r))}},Ep),N3=We(function(i,t,e){return i.i===0&&(ai(t,e,(i=jn(i.h))===0?void 0:i),!0)},$1,Ep),At=We(function(i,t,e){return i.i===0&&(ai(t,e,Ps(i.h)),!0)},Y1,Tp),qh=We(function(i,t,e){return i.i===0&&(ai(t,e,(i=Ps(i.h))===0?void 0:i),!0)},Y1,Tp),D3=We(function(i,t,e){return i.i!==0?i=!1:(ai(t,e,(function(n){return gp(n,(s,r)=>{var a=-(1&s);return s1(s=(s>>>1|r<<31)^a,r>>>1^a)})})(i.h)),i=!0),i},function(i,t,e){if((t=op(t))!=null&&(D1(t),t!=null))switch(Fi(i,e,0),typeof t){case"number":i=i.h,t=(e=t)<0,wf(e=2*Math.abs(e)),e=le;let n=Se;t&&(e==0?n==0?n=e=4294967295:(n--,e=4294967295):e--),Rs(i,le=e,Se=n);break;case"bigint":i=i.h,t=t<<BigInt(1)^t>>BigInt(63),le=Number(BigInt.asUintN(32,t)),Se=Number(BigInt.asUintN(32,t>>BigInt(32))),Rs(i,le,Se);break;default:v3(i.h,t)}},M3),Of=class{constructor(t,e){var n=tn;this.h=t,this.i=e,this.o=de,this.u=Lt,this.defaultValue=void 0,this.l=n.ib!=null?i1:void 0}register(){_u(this)}};function ts(i,t){return new Of(i,t)}function lr(i,t){return(e,n)=>{t:{let r={ma:!0};n&&Object.assign(r,n),e=A1(e,void 0,void 0,r);try{let a=new i,o=a.B;Rp(t)(o,e);var s=a;break t}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{R1(e)}s=void 0}return s}}function Lp(i){return t=>G1(t,i)}function Ml(i){return function(){return G1(this,i)}}var F3=[0,Pa,tv,Bt,rt],U3=[0,bs,[0,qh,[0,Xh,Pr],qh,-1,[0,At],qh,-1],We(j1,Pp,Ru)],_f,Zg=class extends vt{constructor(i){super(i)}},Jg=[0,bs,We(j1,function(i,t,e){if(t!=null){if(t instanceof vt){let n=t.mb;return void(n?(t=n(t),t!=null&&Sl(i,e,Eu(t,!0).buffer)):Fa(Ef,3))}if(Array.isArray(t))return void Fa(Ef,3)}Pp(i,t,e)},Ru)],O3=[0,1,[0,12,jt,10,Bt],[0,7,[0,jt,-1]]],jg=globalThis.trustedTypes,B3=class{constructor(i){this.h=i}toString(){return this.h+""}};function Qg(i){var t;return _f===void 0&&(_f=(function(){var e=null;if(!jg)return e;try{let n=s=>s;e=jg.createPolicy("goog#html",{createHTML:n,createScript:n,createScriptURL:n})}catch{}return e})()),i=(t=_f)?t.createScriptURL(i):i,new B3(i)}function Ar(i,...t){if(t.length===0)return Qg(i[0]);var e=i[0];for(let n=0;n<t.length;n++)e+=encodeURIComponent(t[n])+i[n+1];return Qg(e)}var iv=[0,jt,At,Bt,-1,Qa,At,-1,Bt,-1],nv=[0,At,-1,Bt],sv=class extends vt{constructor(i){super(i)}},rv=[0,Bt,rt,Bt,At,-1,Ns(function(i,t,e){return(i.i===0||i.i===2)&&(t=or(t,0|t[Rt],e),i.i==2?xl(i,f3,t):t.push(Ps(i.h)),!0)},function(i,t,e){if((t=Ls(kr,t,!0))!=null&&t.length){e=yp(i,e);for(let n=0;n<t.length;n++)yl(i.h,t[n]);Sp(i,e)}},Tp),rt,-1,[0,Bt,-1],At,Bt,-1,nv],k3=class extends vt{constructor(i){super(i)}},z3=class extends vt{constructor(i){super(i)}},av=class extends vt{constructor(i){super(i)}h(){return g1(this,9)}},ov=[0,3,Bt,-1,2,[0,[2],jt,re,[0,ev]],[0,At,Bt,At,Bt,At,4,[0,Bt,rt,-1,Bt,jt,-1,Bt],At,Bt,-4,At,ni,Bt,ni,Bt,-1,jt,Bt,-3,[0,Bt,jt],[0,rt,jt,-1],[0,Bt],[0,Bt,-1],[0,Bt,jt,-1]],[0,[3,4],rt,-1,re,[0,jt],re,[0,At,-2]],[0],rt,Bt],lv=[0,rt,-2],t_=class extends vt{constructor(i){super(i)}},cv=[0],G3=class extends vt{constructor(i){super(i)}},hv=[0,jt,Bt,1,Bt,-4],tn=class extends vt{constructor(i){super(i,2)}},ri={};ri[336783863]=[0,rt,Bt,-1,jt,[0,[1,2,3,4,5,6,7,8,9],re,cv,re,rv,re,lv,re,hv,re,iv,re,[0,rt,-2],re,[0,rt,At],re,ov,re,nv],[0,rt],Bt,[0,[1,3],[2,4],re,[0,Qa],-1,re,[0,ni],-1,we,[0,rt,-1]],rt];var e_=[0,Xh,-1,ir,-3,Xh,Qa,bs,Pr,Xh,-1,ir,Pr,ir,-2,bs];function Fe(i,t){bu(i,3,t)}function ae(i,t){bu(i,4,t)}var Wi=class extends vt{constructor(i){super(i,500)}A(i){return Lt(this,0,7,i)}},ol=[-1,{}],i_=[0,rt,1,ol],n_=[0,rt,ni,ol];function gn(i,t){ul(i,1,Wi,t)}function ke(i,t){bu(i,10,t)}function me(i,t){bu(i,15,t)}var en=class extends vt{constructor(i){super(i,500)}A(i){return Lt(this,0,1001,i)}},uv=[-500,we,[-500,bs,-1,ni,-3,[-2,ri,Bt],we,Jg,Pr,-1,i_,n_,we,[0,bs,ir],bs,e_,Pr,ni,987,ni],4,we,[-500,rt,-1,[-1,{}],998,rt],we,[-500,rt,ni,-1,[-2,{},Bt],997,ni,-1],Pr,we,[-500,rt,ni,ol,998,ni],ni,Pr,i_,n_,we,[0,bs,-1,ol],ni,-2,e_,bs,-1,ir,[0,ir,N3],978,ol,we,Jg];en.prototype.h=Ml(uv);var H3=lr(en,uv),V3=class extends vt{constructor(i){super(i)}},dv=class extends vt{constructor(i){super(i)}h(){return Gr(this,V3,1)}},fv=[0,we,[0,jt,Ge,rt,-1]],Du=lr(dv,fv),W3=class extends vt{constructor(i){super(i)}},X3=class extends vt{constructor(i){super(i)}},vf=class extends vt{constructor(i){super(i)}l(){return de(this,W3,2)}h(){return Gr(this,X3,5)}},pv=lr(class extends vt{constructor(i){super(i)}},[0,ni,Qa,Ip,[0,At,[0,jt,-3],[0,Ge,-3],[0,jt,-1,[0,we,[0,jt,-2]]],we,[0,Ge,-1,rt,Ge]],rt,-1,Re,we,[0,jt,Ge],ni,Re]),q3=class extends vt{constructor(i){super(i)}},Ia=lr(class extends vt{constructor(i){super(i)}},[0,we,[0,Ge,-4]]),$3=class extends vt{constructor(i){super(i)}},bl=lr(class extends vt{constructor(i){super(i)}},[0,we,[0,Ge,-4]]),Y3=class extends vt{constructor(i){super(i)}},K3=[0,jt,-1,Ip,At],mv=class extends vt{constructor(i){super(i)}};mv.prototype.h=Ml([0,Ge,-4,Re]);var Z3=class extends vt{constructor(i){super(i)}},J3=lr(class extends vt{constructor(i){super(i)}},[0,we,[0,1,jt,rt,fv],Re]),j3=class extends vt{constructor(i){super(i)}},Q3=class extends vt{constructor(i){super(i)}h(){var i=De(this,1,void 0,x1);return i??Fr()}},tE=class extends vt{constructor(i){super(i)}},$h=[1,2],eE=lr(class extends vt{constructor(i){super(i)}},[0,we,[0,$h,re,[0,Ip],re,[0,Pa],jt,rt],Re]),Np=class extends vt{constructor(i){super(i)}},gv=[0,rt,jt,Ge,ni,-1],s_=class extends vt{constructor(i){super(i)}},iE=[0,Bt,-1],du=class extends vt{constructor(i){super(i)}h(){return _1(this,2,ws)}l(){return If(this,av,6,ws)}},ws=[1,2,3,4,5,6],fu=class extends vt{constructor(i){super(i)}h(){return De(this,1,void 0,x1)!=null}l(){return vi(De(this,2))!=null}},ze=class extends vt{constructor(i){super(i)}},_v=[0,Pa,rt,[0,jt,Re,-1],[0,uu,Re]],Ve=[0,_v,Bt,[0,ws,re,hv,re,rv,re,iv,re,cv,re,lv,re,ov],At],nE=Lp(Ve),Fu=class extends vt{constructor(i){super(i)}},Dp=[0,Ve,Ge,-1,jt],sE=ts(502141897,Fu);ri[502141897]=Dp;var rE=lr(class extends vt{constructor(i){super(i)}},[0,[0,At,-1,P3,L3],K3]),vv=class extends vt{constructor(i){super(i)}},xv=class extends vt{constructor(i){super(i)}},Bf=[0,Ve,Ge,[0,Ve],Bt],aE=ts(508968150,xv);ri[508968150]=[0,Ve,Dp,Bf,Ge,[0,[0,_v]]],ri[508968149]=Bf;var Ra=class extends vt{constructor(i){super(i)}l(){return de(this,Np,2)}h(){$t(this,2)}},yv=[0,Ve,gv];ri[478825465]=yv;var oE=class extends vt{constructor(i){super(i)}},Sv=class extends vt{constructor(i){super(i)}},Fp=class extends vt{constructor(i){super(i)}},Up=class extends vt{constructor(i){super(i)}},Mv=class extends vt{constructor(i){super(i)}},r_=[0,Ve,[0,Ve],yv,-1],bv=[0,Ve,Ge,jt],Op=[0,Ve,Ge],Ev=[0,Ve,bv,Op,Ge],lE=ts(479097054,Mv);ri[479097054]=[0,Ve,Ev,r_],ri[463370452]=r_,ri[464864288]=bv;var cE=ts(462713202,Up);ri[462713202]=Ev,ri[474472470]=Op;var hE=class extends vt{constructor(i){super(i)}},Tv=class extends vt{constructor(i){super(i)}},wv=class extends vt{constructor(i){super(i)}},Av=class extends vt{constructor(i){super(i)}},Bp=[0,Ve,Ge,-1,jt],kf=[0,Ve,Ge,Bt];Av.prototype.h=Ml([0,Ve,Op,[0,Ve],Dp,Bf,Bp,kf]);var Rv=class extends vt{constructor(i){super(i)}},uE=ts(456383383,Rv);ri[456383383]=[0,Ve,gv];var Cv=class extends vt{constructor(i){super(i)}},dE=ts(476348187,Cv);ri[476348187]=[0,Ve,iE];var Pv=class extends vt{constructor(i){super(i)}},a_=class extends vt{constructor(i){super(i)}},Iv=[0,At,-1],fE=ts(458105876,class extends vt{constructor(i){super(i)}h(){var i=this.B,t=0|i[Rt],e=Ni(this,t);return i=(function(n,s,r,a){var o=a_;!a&&Za(n)&&(r=0|(s=n.B)[Rt]);var l=Zn(s,2);if(n=!1,l==null){if(a)return Ng();l=[]}else if(l.constructor===Cs){if(!(2&l.N)||a)return l;l=l.fa()}else Array.isArray(l)?n=!!(2&l[Rt]):l=[];if(a){if(!l.length)return Ng();n||(n=!0,qa(l))}else n&&(n=!1,cl(l),l=y1(l));return!n&&32&r&&pl(l,32),r=Ze(s,r,2,a=new Cs(l,o,e3,void 0)),n||ar(s,r),a})(this,i,t,e),!e&&a_&&(i.Fa=!0),i}});ri[458105876]=[0,Iv,C3,[!0,Re,[0,rt,-1,ni]],[0,Qa,Bt,At],Bt];var kp=class extends vt{constructor(i){super(i)}},Lv=ts(458105758,kp);ri[458105758]=[0,Ve,rt,Iv];var pE=class extends vt{constructor(i){super(i)}},mE=class extends vt{constructor(i){super(i)}},gE=class extends vt{constructor(i){super(i)}},_E=Lp([0,we,[0,qh,we,[0,Q1,-1],ir]]),xf=class extends vt{constructor(i){super(i)}},o_=[0,Q1,-1,ir],vE=class extends vt{constructor(i){super(i)}},Nv=class extends vt{constructor(i){super(i)}},zf=[1,2];Nv.prototype.h=Ml([0,zf,re,o_,re,[0,we,o_]]);var Dv=class extends vt{constructor(i){super(i)}},xE=ts(443442058,Dv);ri[443442058]=[0,Ve,rt,jt,Ge,ni,-1,Bt,Ge],ri[514774813]=Bp;var Fv=class extends vt{constructor(i){super(i)}},yE=ts(516587230,Fv);function Gf(i,t){return t=t?t.clone():new Np,i.displayNamesLocale!==void 0?$t(t,1,Ts(i.displayNamesLocale)):i.displayNamesLocale===void 0&&$t(t,1),i.maxResults!==void 0?Jn(t,2,i.maxResults):"maxResults"in i&&$t(t,2),i.scoreThreshold!==void 0?Dt(t,3,i.scoreThreshold):"scoreThreshold"in i&&$t(t,3),i.categoryAllowlist!==void 0?su(t,4,i.categoryAllowlist):"categoryAllowlist"in i&&$t(t,4),i.categoryDenylist!==void 0?su(t,5,i.categoryDenylist):"categoryDenylist"in i&&$t(t,5),t}function Uv(i){var t=Number(i);return Number.isSafeInteger(t)?t:String(i)}function zp(i,t=-1,e=""){return{categories:i.map(n=>({index:pn(n,1)??0??-1,score:Li(n,2)??0,categoryName:vi(De(n,3))??""??"",displayName:vi(De(n,4))??""??""})),headIndex:t,headName:e}}function SE(i){var t={classifications:Gr(i,Z3,1).map(e=>zp(de(e,dv,4)?.h()??[],pn(e,2)??0,vi(De(e,3))??""))};return(function(e){return e==null?e:typeof e=="bigint"?(Tf(e)?e=Number(e):(e=Ir(64,e),e=Tf(e)?Number(e):String(e)),e):Ya(e)?typeof e=="number"?ap(e):eu(e):void 0})(De(i,2,void 0,iu))!=null&&(t.timestampMs=Uv(De(i,2,void 0,iu)??m1)),t}function Ov(i){var t=Cr(i,3,Ji),e=Cr(i,2,kr),n=Cr(i,1,vi),s=Cr(i,9,vi),r={categories:[],keypoints:[]};for(let a=0;a<t.length;a++)r.categories.push({score:t[a],index:e[a]??-1,categoryName:n[a]??"",displayName:s[a]??""});if((t=de(i,vf,4)?.l())&&(r.boundingBox={originX:pn(t,1,tr)??0,originY:pn(t,2,tr)??0,width:pn(t,3,tr)??0,height:pn(t,4,tr)??0,angle:0}),de(i,vf,4)?.h().length)for(let a of de(i,vf,4).h())r.keypoints.push({x:De(a,1,tr,Ji)??0,y:De(a,2,tr,Ji)??0,score:De(a,4,tr,Ji)??0,label:vi(De(a,3,tr))??""});return r}function El(i){var t=[];for(let e of Gr(i,$3,1))i={x:Li(e,1)??0,y:Li(e,2)??0,z:Li(e,3)??0,visibility:Li(e,4)??0},De(e,5,void 0,Ji)!=null&&(i.presence=Li(e,5)??0),t.push(i);return t}function La(i){var t=[];for(let e of Gr(i,q3,1))i={x:Li(e,1)??0,y:Li(e,2)??0,z:Li(e,3)??0,visibility:Li(e,4)??0},De(e,5,void 0,Ji)!=null&&(i.presence=Li(e,5)??0),t.push(i);return t}function l_(i){return Array.from(i,t=>t>127?t-256:t)}function c_(i,t){if(i.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${i.length} vs. ${t.length}).`);var e=0,n=0,s=0;for(let r=0;r<i.length;r++)e+=i[r]*t[r],n+=i[r]*i[r],s+=t[r]*t[r];if(n<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return e/Math.sqrt(n*s)}function Rr(i,t,e){return e=`wasm${e?"_module":""}_internal`,Promise.resolve({wasmLoaderPath:`${t}/${i}_${e}.js`,wasmBinaryPath:`${t}/${i}_${e}.wasm`})}ri[516587230]=[0,Ve,Bp,kf,Ge],ri[518928384]=kf;var Ms=class{};function h_(i){return $t(new Hf,1,As(i))}Ms.forVisionTasks=function(i,t=!1){return Rr("vision",i??Ar``,t)},Ms.forLiteRtLmTextTasks=function(i,t=!1){return Rr("litertlm_text",i??Ar``,t)},Ms.forTextTasks=function(i,t=!1){return Rr("text",i??Ar``,t)},Ms.forRetrievalTasks=function(i,t=!1){return Rr("retrieval",i??Ar``,t)},Ms.forGenAiTasks=function(i,t=!1){return Rr("genai",i??Ar``,t)},Ms.forDecisionTasks=function(i,t=!1){return Rr("decision",i??Ar``,t)},Ms.forAudioTasks=function(i,t=!1){return Rr("audio",i??Ar``,t)};var Hf=class extends vt{constructor(i){super(i)}},ME=class extends vt{constructor(i){super(i)}},u_=[0,At,2,uu,-2,Re,we,[0,At,Re]],bE=class extends vt{constructor(i){super(i)}},EE=class extends vt{constructor(i){super(i)}};function Vf(i,t){return $t(i,1,As(t))}function Wf(i,t){return $t(i,2,As(t))}var Xf=class extends vt{constructor(i){super(i)}},pu=[3,4,5,6,7],TE=class extends vt{constructor(i){super(i)}},Bv=class extends vt{constructor(i){super(i)}};Bv.prototype.h=Ml([0,[0,At,rt,-3,At],[0,pu,At,-1,re,[0,At,rt,uu],re,u_,re,[0,1,u_],re,[0,At],re,[0,At,rt,uu]]]);var wE=class{constructor(){this.h=typeof AbortController<"u"}async send(i,t,e){var n=this.h?new AbortController:void 0,s=n&&i.la>0?setTimeout(()=>{n.abort()},i.la):void 0;try{let r=await fetch(i.url,{method:i.bb,headers:{...i.ab},...i.body&&{body:i.body},...i.withCredentials&&{credentials:"include"},signal:i.la&&n?n.signal:null});r.ok?t?.(await r.text()):e?.(r.status)}catch(r){r?.name==="AbortError"?e?.(408):e?.(0)}finally{clearTimeout(s)}}},AE=class extends vt{constructor(i){super(i,37)}},d_=[-4,{},O3,At,U3],f_=[0,rt,At,1,rt,-1,At,1,At,1,Re],p_=[0,At,rt,-2],m_=[0,rt,At],g_=[0,rt,At],__=[0,Bt,-3],v_=[0,At,rt,-1,Re,jt,-1,rt,-5,we,[0,rt,-4],-1,Bt,[0,Bt,-3],At],RE=class extends vt{constructor(i){super(i,19)}},CE=Lp([-19,{},[0,At,1,[0,rt,-6,Re,jt,rt,-1,Re],1,[0,rt,1,rt,-5],rt,-1,[0,At,rt,-8],[0,rt,-3],[0,rt,At,rt,-2],[0,rt,-1,At,rt,-1,At,rt,-1,[0,we,[0,rt,-1],Bt,rt,-5],[0,At,Bt,jt,-2]],Re,[0,rt,-3,Re,jt,rt,-1],[0,At,rt,-1],[0,rt,-9],[0,rt,-6,At,rt,1,rt,Bt,At,-1,Bt,rt,-2,At,rt,At,rt,jt,-1],1,[0,At],1,[0,rt,-4],1,f_,[0,[1,2,3,4,5,6],re,f_,re,m_,re,g_,re,[0,At],re,v_,re,p_],m_,g_,v_,[0,[0,At,rt,-1,Re,jt,-1,rt,-4,we,[0,rt,-4],-1,1,__],[0,At,rt,-1,Re,jt,-1,rt,-4,__]],p_,[0,rt,[0,jt,-3,At],At,-2,[0,jt,-1],Bt],4,[0,rt,At,rt,-1,Re,At,rt,-1,At,jt,-1]],At,we,[-37,{},il,rt,we,[0,rt,-1],Pa,1,Pa,[0,ni,-1,Kg,I3,-1],rt,[0,jt,rt,-1],Bt,jt,Re,rt,-1,D3,F3,il,Pa,At,Kg,Re,-1,[0,At,-1],rt,Bt,rt,Qa,rt,-1,Yg,1,Yg,d_,Bt,[0,At,[0,Ge,jt,-2],[0,Ge]],[0,At,Re]],il,tv,rt,-1,il,At,-1,[0,Bt,-1,At,Bt],[0,Re,-1,rt],[0,il,Bt,Re],Re,1,ev,1,d_]),PE=class{constructor(i){this.i=[],this.o=new wE,this.l=i??"",this.h=setInterval(()=>{this.flush()},6e4)}close(){this.h!==void 0&&(clearInterval(this.h),this.h=void 0),this.flush()}flush(i,t){if(this.error)t?.("net-send-failed");else if(this.i.length===0)i?.();else{var e=this.i;this.i=[],e=(function(n){var s=new RE;return Pf(s=$t(s,2,As(1786)),3,n)})(e),e=CE(e),this.o.send({url:"https://odml.pa.googleapis.com/v1/log",bb:"POST",la:1e4,body:e,gb:2,ab:{"Content-Type":"application/x-protobuf","x-goog-api-key":this.l},withCredentials:!1},()=>{i?.()},n=>{this.error=Error(`Logging failed with HTTP error: ${n}`),this.i=[],this.h!==void 0&&(clearInterval(this.h),this.h=void 0),t?.("net-send-failed",n)})}}},mu=class{constructor(){this.ba=this.V=this.Y=this.S=this.W=this.U=this.R=0}};function qf(i,t){var e=new Bv;e=Lt(e,0,1,i.C),e=Lt(e,0,2,t),t=$t(t=new AE,6,vu(e=e.h(),!1)),(i=i.m).error||i.i.push(t)}function x_(i,t){var e={R:t.R-i.l.R,U:t.U-i.l.U,W:t.W-i.l.W,S:t.S-i.l.S,Y:t.Y-i.l.Y,V:t.V,ba:t.ba},n=Wf(Vf(new Xf,i.D),1);e=kv(i,e),qf(i,n=An(n,4,pu,e)),i.l=t}function kv(i,t){var e=new ME;return i=Vh(i=mf(i=$t(e,1,As(i.F)),7,t.S),5,t.V),i=Vh(i,6,t.ba),t.W>0&&Vh(i,4,t.Y/t.W),t.R!==0&&(e=mf(e=h_(3),2,t.R),ul(i,8,Hf,e)),t.U!==0&&(t=mf(e=h_(4),2,t.U),ul(i,8,Hf,t)),i}var IE=class{constructor(i,t,e){this.v=performance.now(),this.o=performance.now(),this.i=new Map,this.u=0,this.h=new mu,this.l=new mu,this.m=new PE(e),this.D=(function(n){switch(n){case"AudioClassifier":return 4;case"AudioEmbedder":return 5;case"TextClassifier":return 6;case"TextEmbedder":return 7;case"GestureRecognizer":return 8;case"HandDetector":return 9;case"HandLandmarker":return 10;case"ImageClassifier":return 11;case"ImageEmbedder":return 12;case"ImageSegmenter":return 13;case"ObjectDetector":return 14;case"FaceDetector":return 15;case"FaceLandmarker":return 16;case"InteractiveSegmenter":case"InteractiveSegmenterLegacy":return 18;case"HolisticLandmarker":return 20;case"LlmInference":return 21;case"LanguageDetector":return 22;case"PoseLandmarker":return 23;case"UniversalEmbedder":return 28;case"SemanticRetriever":return 29;case"DecisionMaker":return 30;case"TextSummarizer":return 26;case"TextProofreader":return 27;case"AudioTranscriber":return 31;case"TextToSpeech":return 32;default:return 0}})(i),this.F=(function(n){switch(n){case"IMAGE":return 11;case"VIDEO":return 12;case"LIVE_STREAM":return 13;case"AUDIO_CLIPS":return 14;case"AUDIO_STREAM":return 15;default:return 10}})(t),i=new TE,typeof navigator>"u"?t=0:(t=navigator.userAgent,t=/Android/i.test(t)?1:/iPhone|iPad|iPod/i.test(t)?2:/Windows/i.test(t)?5:/Macintosh/i.test(t)?4:/Linux/i.test(t)?3:0),i=$t(i,1,As(t)),i=$t(i,2,Ts("")),i=$t(i,3,Ts("")),i=$t(i,4,Ts("1.2.3")),i=$t(i,5,Ts("")),this.C=$t(i,6,As((function(){var n=globalThis.__HOST_ENVIRONMENT__;if(typeof n=="string")switch(n){case"ANDROID":return 1;case"IOS":return 2;case"PYTHON":return 3;case"WEB":break;case"FLUTTER":return 5;case"FLUTTER_WEB":return 6;default:return 0}return 4})()))}ya(){var i=new EE;i=Vh(i=$t(i,1,As(this.F)),3,performance.now()-this.v),qf(this,i=An(Wf(Vf(new Xf,this.D),0),3,pu,i)),this.o=performance.now()}za(i){var t=this.i.get(i);if(t!==void 0&&(this.i.delete(i),i=performance.now()-t,++this.h.W,this.h.Y+=i,this.h.V=Math.max(this.h.V,i),this.u=Math.max(this.u,i),performance.now()>this.o+3e4)){for(let[e,n]of this.i.entries())i=e,n<t&&(this.h.S++,this.i.delete(i));t={...this.h,ba:performance.now()-this.o},this.h.V=0,this.o=performance.now(),x_(this,t)}}xa(){var i={...this.h,S:this.h.S+this.i.size,V:this.u,ba:performance.now()-this.v};x_(this,i);var t=new bE;t=Lt(t,0,2,i=kv(this,i)),qf(this,t=An(i=Wf(Vf(new Xf,this.D),2),5,pu,t))}close(){var i=this.m;typeof i.close=="function"?i.close():i.flush()}};function Gp(){var i=navigator;return typeof OffscreenCanvas<"u"&&(!(function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")})(i)||!!((i=i.userAgent.match(/Version\/([\d]+).*Safari/))&&i.length>=1&&Number(i[1])>=17))}async function y_(i){if(typeof importScripts!="function"){let t=document.createElement("script");return t.src=i.toString(),t.crossOrigin="anonymous",new Promise((e,n)=>{t.addEventListener("load",()=>{e()},!1),t.addEventListener("error",s=>{n(s)},!1),document.body.appendChild(t)})}try{importScripts(i.toString())}catch(t){if(!(t instanceof TypeError))throw t;{let e=self.import;e?await e(i.toString()):await import(i.toString())}}}function Hp(i){return i.videoWidth!==void 0?[i.videoWidth,i.videoHeight]:i.naturalWidth!==void 0?[i.naturalWidth,i.naturalHeight]:i.displayWidth!==void 0?[i.displayWidth,i.displayHeight]:[i.width,i.height]}function It(i,t,e){i.o||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),e(t=i.j.stringToNewUTF8(t)),i.j._free(t)}function zv(i,t,e){if(!i.j.canvas)throw Error("No OpenGL canvas configured.");if(e?i.j._bindTextureToStream(e):i.j._bindTextureToCanvas(),!(e=i.j.canvas.getContext("webgl2")||i.j.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");i.j.gpuOriginForWebTexturesIsBottomLeft&&e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),i.j.gpuOriginForWebTexturesIsBottomLeft&&e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1);var[n,s]=Hp(t);return!i.l||n===i.j.canvas.width&&s===i.j.canvas.height||(i.j.canvas.width=n,i.j.canvas.height=s),[n,s]}function S_(i,t,e){i.o||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");var n=new Uint32Array(t.length);for(let s=0;s<t.length;s++)n[s]=i.j.stringToNewUTF8(t[s]);t=i.j._malloc(4*n.length),i.j.HEAPU32.set(n,t>>2),e(t);for(let s of n)i.j._free(s);i.j._free(t)}function qn(i,t,e){i.j.simpleListeners=i.j.simpleListeners||{},i.j.simpleListeners[t]=e}function er(i,t,e){var n=[];i.j.simpleListeners=i.j.simpleListeners||{},i.j.simpleListeners[t]=(s,r,a)=>{r?(e(n,a),n=[]):n.push(s)}}var Gv=class{constructor(i,t){this.l=!0,this.j=i,this.h=null,this.i=0,this.o=typeof this.j._addIntToInputStream=="function",t!==void 0?this.j.canvas=t:Gp()?this.j.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.j.canvas=document.createElement("canvas"))}async initializeGraph(i){var t=await(await fetch(i)).arrayBuffer();i=!(i.endsWith(".pbtxt")||i.endsWith(".textproto")),this.setGraph(new Uint8Array(t),i)}setGraphFromString(i){this.setGraph(new TextEncoder().encode(i),!1)}setGraph(i,t){var e=i.length,n=this.j._malloc(e);this.j.HEAPU8.set(i,n),t?this.j._changeBinaryGraph(e,n):this.j._changeTextGraph(e,n),this.j._free(n)}configureAudio(i,t,e,n,s){this.j._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),It(this,n||"input_audio",r=>{It(this,s=s||"audio_header",a=>{this.j._configureAudio(r,a,i,t??0,e)})})}setAutoResizeCanvas(i){this.l=i}setAutoRenderToScreen(i){this.j._setAutoRenderToScreen(i)}setGpuBufferVerticalFlip(i){this.j.gpuOriginForWebTexturesIsBottomLeft=i}ka(i){qn(this,"__graph_config__",t=>{i(t)}),It(this,"__graph_config__",t=>{this.j._getGraphConfig(t,void 0)}),delete this.j.simpleListeners.__graph_config__}attachErrorListener(i){this.j.errorListener=i}attachEmptyPacketListener(i,t){this.j.emptyPacketListeners=this.j.emptyPacketListeners||{},this.j.emptyPacketListeners[i]=t}addAudioToStream(i,t,e){this.addAudioToStreamWithShape(i,0,0,t,e)}addAudioToStreamWithShape(i,t,e,n,s){var r=4*i.length;this.i!==r&&(this.h&&this.j._free(this.h),this.h=this.j._malloc(r),this.i=r),this.j.HEAPF32.set(i,this.h/4),It(this,n,a=>{this.j._addAudioToInputStream(this.h,t,e,a,s)})}addGpuBufferToStream(i,t,e){It(this,t,n=>{var[s,r]=zv(this,i,n);this.j._addBoundTextureToStream(n,s,r,e)})}addBoolToStream(i,t,e){It(this,t,n=>{this.j._addBoolToInputStream(i,n,e)})}addDoubleToStream(i,t,e){It(this,t,n=>{this.j._addDoubleToInputStream(i,n,e)})}addFloatToStream(i,t,e){It(this,t,n=>{this.j._addFloatToInputStream(i,n,e)})}addIntToStream(i,t,e){It(this,t,n=>{this.j._addIntToInputStream(i,n,e)})}addUintToStream(i,t,e){It(this,t,n=>{this.j._addUintToInputStream(i,n,e)})}addStringToStream(i,t,e){It(this,t,n=>{It(this,i,s=>{this.j._addStringToInputStream(s,n,e)})})}addStringRecordToStream(i,t,e){It(this,t,n=>{S_(this,Object.keys(i),s=>{S_(this,Object.values(i),r=>{this.j._addFlatHashMapToInputStream(s,r,Object.keys(i).length,n,e)})})})}addProtoToStream(i,t,e,n){It(this,e,s=>{It(this,t,r=>{var a=this.j._malloc(i.length);this.j.HEAPU8.set(i,a),this.j._addProtoToInputStream(a,i.length,r,s,n),this.j._free(a)})})}addEmptyPacketToStream(i,t){It(this,i,e=>{this.j._addEmptyPacketToInputStream(e,t)})}addBoolVectorToStream(i,t,e){It(this,t,n=>{var s=this.j._allocateBoolVector(i.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(let r of i)this.j._addBoolVectorEntry(s,r);this.j._addBoolVectorToInputStream(s,n,e)})}addDoubleVectorToStream(i,t,e){It(this,t,n=>{var s=this.j._allocateDoubleVector(i.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(let r of i)this.j._addDoubleVectorEntry(s,r);this.j._addDoubleVectorToInputStream(s,n,e)})}addFloatVectorToStream(i,t,e){It(this,t,n=>{var s=this.j._allocateFloatVector(i.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(let r of i)this.j._addFloatVectorEntry(s,r);this.j._addFloatVectorToInputStream(s,n,e)})}addIntVectorToStream(i,t,e){It(this,t,n=>{var s=this.j._allocateIntVector(i.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(let r of i)this.j._addIntVectorEntry(s,r);this.j._addIntVectorToInputStream(s,n,e)})}addUintVectorToStream(i,t,e){It(this,t,n=>{var s=this.j._allocateUintVector(i.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(let r of i)this.j._addUintVectorEntry(s,r);this.j._addUintVectorToInputStream(s,n,e)})}addStringVectorToStream(i,t,e){It(this,t,n=>{var s=this.j._allocateStringVector(i.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(let r of i)It(this,r,a=>{this.j._addStringVectorEntry(s,a)});this.j._addStringVectorToInputStream(s,n,e)})}addBoolToInputSidePacket(i,t){It(this,t,e=>{this.j._addBoolToInputSidePacket(i,e)})}addDoubleToInputSidePacket(i,t){It(this,t,e=>{this.j._addDoubleToInputSidePacket(i,e)})}addFloatToInputSidePacket(i,t){It(this,t,e=>{this.j._addFloatToInputSidePacket(i,e)})}addIntToInputSidePacket(i,t){It(this,t,e=>{this.j._addIntToInputSidePacket(i,e)})}addUintToInputSidePacket(i,t){It(this,t,e=>{this.j._addUintToInputSidePacket(i,e)})}addStringToInputSidePacket(i,t){It(this,t,e=>{It(this,i,n=>{this.j._addStringToInputSidePacket(n,e)})})}addProtoToInputSidePacket(i,t,e){It(this,e,n=>{It(this,t,s=>{var r=this.j._malloc(i.length);this.j.HEAPU8.set(i,r),this.j._addProtoToInputSidePacket(r,i.length,s,n),this.j._free(r)})})}addBoolVectorToInputSidePacket(i,t){It(this,t,e=>{var n=this.j._allocateBoolVector(i.length);if(!n)throw Error("Unable to allocate new bool vector on heap.");for(let s of i)this.j._addBoolVectorEntry(n,s);this.j._addBoolVectorToInputSidePacket(n,e)})}addDoubleVectorToInputSidePacket(i,t){It(this,t,e=>{var n=this.j._allocateDoubleVector(i.length);if(!n)throw Error("Unable to allocate new double vector on heap.");for(let s of i)this.j._addDoubleVectorEntry(n,s);this.j._addDoubleVectorToInputSidePacket(n,e)})}addFloatVectorToInputSidePacket(i,t){It(this,t,e=>{var n=this.j._allocateFloatVector(i.length);if(!n)throw Error("Unable to allocate new float vector on heap.");for(let s of i)this.j._addFloatVectorEntry(n,s);this.j._addFloatVectorToInputSidePacket(n,e)})}addIntVectorToInputSidePacket(i,t){It(this,t,e=>{var n=this.j._allocateIntVector(i.length);if(!n)throw Error("Unable to allocate new int vector on heap.");for(let s of i)this.j._addIntVectorEntry(n,s);this.j._addIntVectorToInputSidePacket(n,e)})}addUintVectorToInputSidePacket(i,t){It(this,t,e=>{var n=this.j._allocateUintVector(i.length);if(!n)throw Error("Unable to allocate new unsigned int vector on heap.");for(let s of i)this.j._addUintVectorEntry(n,s);this.j._addUintVectorToInputSidePacket(n,e)})}addStringVectorToInputSidePacket(i,t){It(this,t,e=>{var n=this.j._allocateStringVector(i.length);if(!n)throw Error("Unable to allocate new string vector on heap.");for(let s of i)It(this,s,r=>{this.j._addStringVectorEntry(n,r)});this.j._addStringVectorToInputSidePacket(n,e)})}attachBoolListener(i,t){qn(this,i,t),It(this,i,e=>{this.j._attachBoolListener(e)})}attachBoolVectorListener(i,t){er(this,i,t),It(this,i,e=>{this.j._attachBoolVectorListener(e)})}attachIntListener(i,t){qn(this,i,t),It(this,i,e=>{this.j._attachIntListener(e)})}attachIntVectorListener(i,t){er(this,i,t),It(this,i,e=>{this.j._attachIntVectorListener(e)})}attachUintListener(i,t){qn(this,i,t),It(this,i,e=>{this.j._attachUintListener(e)})}attachUintVectorListener(i,t){er(this,i,t),It(this,i,e=>{this.j._attachUintVectorListener(e)})}attachDoubleListener(i,t){qn(this,i,t),It(this,i,e=>{this.j._attachDoubleListener(e)})}attachDoubleVectorListener(i,t){er(this,i,t),It(this,i,e=>{this.j._attachDoubleVectorListener(e)})}attachFloatListener(i,t){qn(this,i,t),It(this,i,e=>{this.j._attachFloatListener(e)})}attachFloatVectorListener(i,t){er(this,i,t),It(this,i,e=>{this.j._attachFloatVectorListener(e)})}attachStringListener(i,t){qn(this,i,t),It(this,i,e=>{this.j._attachStringListener(e)})}attachStringVectorListener(i,t){er(this,i,t),It(this,i,e=>{this.j._attachStringVectorListener(e)})}attachProtoListener(i,t,e){qn(this,i,t),It(this,i,n=>{this.j._attachProtoListener(n,e||!1)})}attachProtoVectorListener(i,t,e){er(this,i,t),It(this,i,n=>{this.j._attachProtoVectorListener(n,e||!1)})}attachAudioListener(i,t,e){this.j._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),qn(this,i,(n,s)=>{n=new Float32Array(n.buffer,n.byteOffset,n.length/4),t(n,s)}),It(this,i,n=>{this.j._attachAudioListener(n,e||!1)})}finishProcessing(){this.j._waitUntilIdle()}closeGraph(){this.j._closeGraph(),this.j.simpleListeners=void 0,this.j.emptyPacketListeners=void 0}};function Hv(i){return class extends i{get pa(){return this.j}Sa(){if(typeof this.pa._mediapipeLoggerGetEncodedApiKey=="function"){let t=this.pa._mediapipeLoggerGetEncodedApiKey();return this.pa._decodeBase64(t)}}}}function Vv(i){return class extends i{Za(){this.j._registerModelResourcesGraphService()}}}var LE=Hv(Vv(Gv)),NE=class extends LE{};async function DE(i,t,e,n){return i=await(async(s,r,a,o,l)=>{if(r&&await y_(r),!self.ModuleFactory||a&&(await y_(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((r=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new s(l,o)})(i,e.wasmLoaderPath,e.assetLoaderPath,t,{locateFile:s=>s.endsWith(".wasm")?e.wasmBinaryPath.toString():e.assetBinaryPath&&s.endsWith(".data")?e.assetBinaryPath.toString():s}),(function(s,r){r=r.runningMode??"";var a=s.h.Sa();s.o=new IE(s.D(),r,a)})(i,n),await i.A(n),i}async function Yh(i,t,e,n){return DE(i,t,e,n)}function yf(i,t,e){try{i.h.j.FS_unlink(`/${e}`)}catch{}i.h.j.FS_createDataFile("/",e,t,!0,!1,!0),$f(i,`/${e}`)}function $f(i,t){var e=de(i.baseOptions,fu,1)||new fu;typeof t=="string"?($t(e,2,Ts(t)),$t(e,1)):t instanceof Uint8Array&&($t(e,1,vu(t,!1)),$t(e,2)),Lt(i.baseOptions,0,1,e)}function M_(i){try{let t=i.L.length;if(t===1)throw Error(i.L[0].message);if(t>1)throw Error("Encountered multiple errors: "+i.L.map(e=>e.message).join(", "))}finally{i.L=[]}}function bt(i,t){i.J=Math.max(i.J,t)}function Uu(i,t){i.F=new Wi,ji(i.F,2,"PassThroughCalculator"),Fe(i.F,"free_memory"),ae(i.F,"free_memory_unused_out"),ke(t,"free_memory"),gn(t,i.F)}function Ga(i,t){Fe(i.F,t),ae(i.F,t+"_unused_out")}function Ou(i){i.h.addBoolToStream(!0,"free_memory",i.J)}var gu=class{constructor(i){this.h=i,this.L=[],this.J=0,this.h.setAutoRenderToScreen(!1)}l(i,t=!0,e=!1,n=!1){if(t){let s=i.baseOptions||{};if(i.baseOptions?.modelAssetBuffer&&i.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(de(this.baseOptions,fu,1)?.h()||de(this.baseOptions,fu,1)?.l()||i.baseOptions?.modelAssetBuffer||i.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");(function(a,o,l=!1){var c=de(a.baseOptions,du,3);if(!c){var h=c=new du,d=new t_;An(h,4,ws,d)}"delegate"in o&&(o.delegate==="GPU"?(o=c,h=new sv,An(o,2,ws,h)):(o=c,h=new t_,An(o,4,ws,h))),l&&(l=c.l(),o=c.h()||l?.h()===!0,l=new av,o?Lt(l,0,9,o=new z3):Lt(l,0,8,o=new k3),An(c,6,ws,l)),Lt(a.baseOptions,0,3,c)})(this,s,n);let r=e?"model.litertlm":"model.dat";if(s.modelAssetPath)return fetch(s.modelAssetPath.toString()).then(a=>{if(a.ok)return a.arrayBuffer();throw Error(`Failed to fetch model: ${s.modelAssetPath} (${a.status})`)}).then(a=>{yf(this,new Uint8Array(a),r),this.u(),this.M()});if(s.modelAssetBuffer instanceof Uint8Array)e?yf(this,s.modelAssetBuffer,r):$f(this,s.modelAssetBuffer);else if(s.modelAssetBuffer)return(async function(a){for(var o=[],l=0;;){let{done:c,value:h}=await a.read();if(c)break;o.push(h),l+=h.length}if(o.length===0)return new Uint8Array(0);if(o.length===1)return o[0];a=new Uint8Array(l),l=0;for(let c of o)a.set(c,l),l+=c.length;return a})(s.modelAssetBuffer).then(a=>{e?yf(this,a,r):$f(this,a),this.u(),this.M()})}return this.u(),this.M(),Promise.resolve()}M(){}ka(){var i;if(this.h.ka(t=>{i=H3(t)}),!i)throw Error("Failed to retrieve CalculatorGraphConfig");return i}setGraph(i,t){this.h.attachErrorListener((e,n)=>{this.L.push(Error(n))}),this.h.Za(),this.h.setGraph(i,t),this.o?.ya(),this.F=void 0,M_(this)}finishProcessing(i){this.h.finishProcessing(),M_(this),this.o&&i!==void 0&&this.o.za(i)}close(){this.F=void 0,this.o?.xa(),this.o?.close(),this.h.closeGraph()}};function Di(i,t){if(!i)throw Error(`Unable to obtain required WebGL resource: ${t}`);return i}gu.prototype.close=gu.prototype.close;var Yf=class{constructor(t,e,n,s){this.h=t,this.i=e,this.o=n,this.l=s}bind(){this.h.bindVertexArray(this.i)}close(){this.h.deleteVertexArray(this.i),this.h.deleteBuffer(this.o),this.h.deleteBuffer(this.l)}};function b_(i,t,e){var n=i.h;if(e=Di(n.createShader(e),"Failed to create WebGL shader"),n.shaderSource(e,t),n.compileShader(e),!n.getShaderParameter(e,n.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${n.getShaderInfoLog(e)}`);return n.attachShader(i.i,e),e}function E_(i,t){var e=i.h,n=Di(e.createVertexArray(),"Failed to create vertex array");e.bindVertexArray(n);var s=Di(e.createBuffer(),"Failed to create buffer");e.bindBuffer(e.ARRAY_BUFFER,s),e.enableVertexAttribArray(i.G),e.vertexAttribPointer(i.G,2,e.FLOAT,!1,0,0),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),e.STATIC_DRAW);var r=Di(e.createBuffer(),"Failed to create buffer");return e.bindBuffer(e.ARRAY_BUFFER,r),e.enableVertexAttribArray(i.L),e.vertexAttribPointer(i.L,2,e.FLOAT,!1,0,0),e.bufferData(e.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindVertexArray(null),new Yf(e,n,s,r)}function Vp(i,t){if(i.h){if(t!==i.h)throw Error("Cannot change GL context once initialized")}else i.h=t}function Tl(i,t,e,n){return Vp(i,t),i.i||(i.o(),i.J()),e?(i.m||(i.m=E_(i,!0)),e=i.m):(i.F||(i.F=E_(i,!1)),e=i.F),t.useProgram(i.i),e.bind(),i.l(),i=n(),e.h.bindVertexArray(null),i}function sr(i,t,e){return Vp(i,t),i=Di(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,i),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,e??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,e??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),i}function Bu(i,t,e){Vp(i,t),i.D||(i.D=Di(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,i.D),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0)}function Wp(i){i.h?.bindFramebuffer(i.h.FRAMEBUFFER,null)}var Vr=class{C(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}o(){var i=this.h;if(this.i=Di(i.createProgram(),"Failed to create WebGL program"),this.ea=b_(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,i.VERTEX_SHADER),this.aa=b_(this,this.C(),i.FRAGMENT_SHADER),i.linkProgram(this.i),!i.getProgramParameter(this.i,i.LINK_STATUS))throw Error(`Error during program linking: ${i.getProgramInfoLog(this.i)}`);this.G=i.getAttribLocation(this.i,"aVertex"),this.L=i.getAttribLocation(this.i,"aTex")}J(){}l(){}close(){if(this.i){let i=this.h;i.deleteProgram(this.i),i.deleteShader(this.ea),i.deleteShader(this.aa)}this.D&&this.h.deleteFramebuffer(this.D),this.F&&this.F.close(),this.m&&this.m.close()}},FE=class extends Vr{C(){return`
  precision mediump float;
  uniform sampler2D backgroundTexture;
  uniform sampler2D maskTexture;
  uniform sampler2D colorMappingTexture;
  varying vec2 vTex;
  void main() {
    vec4 backgroundColor = texture2D(backgroundTexture, vTex);
    float category = texture2D(maskTexture, vTex).r;
    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));
    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);
  }
 `}J(){var i=this.h;i.activeTexture(i.TEXTURE1),this.v=sr(this,i,i.LINEAR),i.activeTexture(i.TEXTURE2),this.u=sr(this,i,i.NEAREST)}o(){super.o();var i=this.h;this.P=Di(i.getUniformLocation(this.i,"backgroundTexture"),"Uniform location"),this.Z=Di(i.getUniformLocation(this.i,"colorMappingTexture"),"Uniform location"),this.M=Di(i.getUniformLocation(this.i,"maskTexture"),"Uniform location")}l(){super.l();var i=this.h;i.uniform1i(this.M,0),i.uniform1i(this.P,1),i.uniform1i(this.Z,2)}close(){this.v&&this.h.deleteTexture(this.v),this.u&&this.h.deleteTexture(this.u),super.close()}},UE=class extends Vr{C(){return`
  precision mediump float;
  uniform sampler2D maskTexture;
  uniform sampler2D defaultTexture;
  uniform sampler2D overlayTexture;
  varying vec2 vTex;
  void main() {
    float confidence = texture2D(maskTexture, vTex).r;
    vec4 defaultColor = texture2D(defaultTexture, vTex);
    vec4 overlayColor = texture2D(overlayTexture, vTex);
    // Apply the alpha from the overlay and merge in the default color
    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);
    gl_FragColor = mix(defaultColor, overlayColor, confidence);
  }
 `}J(){var i=this.h;i.activeTexture(i.TEXTURE1),this.u=sr(this,i),i.activeTexture(i.TEXTURE2),this.v=sr(this,i)}o(){super.o();var i=this.h;this.M=Di(i.getUniformLocation(this.i,"defaultTexture"),"Uniform location"),this.P=Di(i.getUniformLocation(this.i,"overlayTexture"),"Uniform location"),this.K=Di(i.getUniformLocation(this.i,"maskTexture"),"Uniform location")}l(){super.l();var i=this.h;i.uniform1i(this.K,0),i.uniform1i(this.M,1),i.uniform1i(this.P,2)}close(){this.u&&this.h.deleteTexture(this.u),this.v&&this.h.deleteTexture(this.v),super.close()}};function Es(i,t){switch(t){case 0:return i.h.find(e=>e instanceof Uint8Array);case 1:return i.h.find(e=>e instanceof Float32Array);case 2:return i.h.find(e=>typeof WebGLTexture<"u"&&e instanceof WebGLTexture);default:throw Error(`Type is not supported: ${t}`)}}function Kf(i){var t=Es(i,1);if(!t){if(t=Es(i,0))t=new Float32Array(t).map(n=>n/255);else{t=new Float32Array(i.width*i.height);let n=Ha(i);var e=Xp(i);if(Bu(e,n,Wv(i)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){e=new Float32Array(i.width*i.height*4),n.readPixels(0,0,i.width,i.height,n.RGBA,n.FLOAT,e);for(let s=0,r=0;s<t.length;++s,r+=4)t[s]=e[r]}else n.readPixels(0,0,i.width,i.height,n.RED,n.FLOAT,t)}i.h.push(t)}return t}function Wv(i){var t=Es(i,2);if(!t){let e=Ha(i);t=qv(i);let n=Kf(i),s=Xv(i);e.texImage2D(e.TEXTURE_2D,0,s,i.width,i.height,0,e.RED,e.FLOAT,n),Zf(i)}return t}function Ha(i){if(!i.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return i.i||(i.i=Di(i.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),i.i}function Xv(i){if(i=Ha(i),!Gh)if(i.getExtension("EXT_color_buffer_float")&&i.getExtension("OES_texture_float_linear")&&i.getExtension("EXT_float_blend"))Gh=i.R32F;else{if(!i.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Gh=i.R16F}return Gh}function Xp(i){return i.l||(i.l=new Vr),i.l}function qv(i){var t=Ha(i);t.viewport(0,0,i.width,i.height),t.activeTexture(t.TEXTURE0);var e=Es(i,2);return e||(e=sr(Xp(i),t,i.o?t.LINEAR:t.NEAREST),i.h.push(e),i.u=!0),t.bindTexture(t.TEXTURE_2D,e),e}function Zf(i){i.i.bindTexture(i.i.TEXTURE_2D,null)}var Gh,Ke=class{constructor(i,t,e,n,s,r,a){this.h=i,this.o=t,this.u=e,this.canvas=n,this.l=s,this.width=r,this.height=a,this.u&&--T_===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ua(){return!!Es(this,0)}ua(){return!!Es(this,1)}X(){return!!Es(this,2)}ta(){return(t=Es(i=this,0))||(t=Kf(i),t=new Uint8Array(t.map(e=>Math.round(255*e))),i.h.push(t)),t;var i,t}sa(){return Kf(this)}T(){return Wv(this)}clone(){var i=[];for(let t of this.h){let e;if(t instanceof Uint8Array)e=new Uint8Array(t);else if(t instanceof Float32Array)e=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{let n=Ha(this),s=Xp(this);n.activeTexture(n.TEXTURE1),e=sr(s,n,this.o?n.LINEAR:n.NEAREST),n.bindTexture(n.TEXTURE_2D,e);let r=Xv(this);n.texImage2D(n.TEXTURE_2D,0,r,this.width,this.height,0,n.RED,n.FLOAT,null),n.bindTexture(n.TEXTURE_2D,null),Bu(s,n,e),Tl(s,n,!1,()=>{qv(this),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.drawArrays(n.TRIANGLE_FAN,0,4),Zf(this)}),Wp(s),Zf(this)}}i.push(e)}return new Ke(i,this.o,this.X(),this.canvas,this.l,this.width,this.height)}close(){this.u&&Ha(this).deleteTexture(Es(this,2)),T_=-1}};Ke.prototype.close=Ke.prototype.close,Ke.prototype.clone=Ke.prototype.clone,Ke.prototype.getAsWebGLTexture=Ke.prototype.T,Ke.prototype.getAsFloat32Array=Ke.prototype.sa,Ke.prototype.getAsUint8Array=Ke.prototype.ta,Ke.prototype.hasWebGLTexture=Ke.prototype.X,Ke.prototype.hasFloat32Array=Ke.prototype.ua,Ke.prototype.hasUint8Array=Ke.prototype.Ua;var T_=250,OE={color:"white",lineWidth:4,radius:6};function Sf(i){return{...OE,fillColor:(i=i||{}).color,...i}}function Ss(i,t){return i instanceof Function?i(t):i}function w_(i,t,e){return Math.max(Math.min(t,e),Math.min(Math.max(t,e),i))}function nl(i){if(!i.l)throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");return i.l}function fl(i){if(!i.u)throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");return i.u}function A_(i,t,e){if(t.X())e(t.T());else{let n=t.ua()?t.sa():t.ta();i.o=i.o??new Vr;let s=fl(i);e((i=new Ke([n],t.o,!1,s.canvas,i.o,t.width,t.height)).T()),i.close()}}function R_(i,t,e,n){var s=(function(o){return o.h||(o.h=new FE),o.h})(i),r=fl(i),a=Array.isArray(e)?new ImageData(new Uint8ClampedArray(e),1,1):e;Tl(s,r,!0,()=>{(function(l,c,h,d){var u=l.h;if(u.activeTexture(u.TEXTURE0),u.bindTexture(u.TEXTURE_2D,c),u.activeTexture(u.TEXTURE1),u.bindTexture(u.TEXTURE_2D,l.v),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,u.RGBA,u.UNSIGNED_BYTE,h),l.K&&(function(f,g){if(f!==g)return!1;f=f.entries(),g=g.entries();for(let[x,p]of f){f=x;let m=p,M=g.next();if(M.done)return!1;let[A,S]=M.value;if(f!==A||m[0]!==S[0]||m[1]!==S[1]||m[2]!==S[2]||m[3]!==S[3])return!1}return!!g.next().done})(l.K,d))u.activeTexture(u.TEXTURE2),u.bindTexture(u.TEXTURE_2D,l.u);else{l.K=d;let f=Array(1024).fill(0);d.forEach((g,x)=>{if(g.length!==4)throw Error(`Color at index ${x} is not a four-channel value.`);f[4*x]=g[0],f[4*x+1]=g[1],f[4*x+2]=g[2],f[4*x+3]=g[3]}),u.activeTexture(u.TEXTURE2),u.bindTexture(u.TEXTURE_2D,l.u),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,256,1,0,u.RGBA,u.UNSIGNED_BYTE,new Uint8Array(f))}})(s,t,a,n),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4);var o=s.h;o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,null),o.activeTexture(o.TEXTURE1),o.bindTexture(o.TEXTURE_2D,null),o.activeTexture(o.TEXTURE2),o.bindTexture(o.TEXTURE_2D,null)})}function C_(i,t,e,n){var s=fl(i),r=(function(l){return l.i||(l.i=new UE),l.i})(i),a=Array.isArray(e)?new ImageData(new Uint8ClampedArray(e),1,1):e,o=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n;Tl(r,s,!0,()=>{var l=r.h;l.activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,t),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,r.u),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,a),l.activeTexture(l.TEXTURE2),l.bindTexture(l.TEXTURE_2D,r.v),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,o),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLE_FAN,0,4),s.bindTexture(s.TEXTURE_2D,null),(l=r.h).activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,null),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,null),l.activeTexture(l.TEXTURE2),l.bindTexture(l.TEXTURE_2D,null)})}var ki=class{constructor(i,t){typeof CanvasRenderingContext2D<"u"&&i instanceof CanvasRenderingContext2D||i instanceof OffscreenCanvasRenderingContext2D?(this.l=i,this.u=t):this.u=i}Ma(i,t){if(i){var e=nl(this);t=Sf(t),e.save();var n=e.canvas,s=0;for(let r of i)e.fillStyle=Ss(t.fillColor,{index:s,from:r}),e.strokeStyle=Ss(t.color,{index:s,from:r}),e.lineWidth=Ss(t.lineWidth,{index:s,from:r}),(i=new Path2D).arc(r.x*n.width,r.y*n.height,Ss(t.radius,{index:s,from:r}),0,2*Math.PI),e.fill(i),e.stroke(i),++s;e.restore()}}La(i,t,e){if(i&&t){var n=nl(this);e=Sf(e),n.save();var s=n.canvas,r=0;for(let a of t){n.beginPath(),t=i[a.start];let o=i[a.end];t&&o&&(n.strokeStyle=Ss(e.color,{index:r,from:t,to:o}),n.lineWidth=Ss(e.lineWidth,{index:r,from:t,to:o}),n.moveTo(t.x*s.width,t.y*s.height),n.lineTo(o.x*s.width,o.y*s.height)),++r,n.stroke()}n.restore()}}Ia(i,t){var e=nl(this);t=Sf(t),e.save(),e.beginPath(),e.lineWidth=Ss(t.lineWidth,{}),e.strokeStyle=Ss(t.color,{}),e.fillStyle=Ss(t.fillColor,{}),e.moveTo(i.originX,i.originY),e.lineTo(i.originX+i.width,i.originY),e.lineTo(i.originX+i.width,i.originY+i.height),e.lineTo(i.originX,i.originY+i.height),e.lineTo(i.originX,i.originY),e.stroke(),e.fill(),e.restore()}Ja(i,t,e=[0,0,0,255]){this.l?(function(n,s,r,a){var o=fl(n);A_(n,s,l=>{R_(n,l,r,a),(l=nl(n)).drawImage(o.canvas,0,0,l.canvas.width,l.canvas.height)})})(this,i,e,t):R_(this,i.T(),e,t)}Ka(i,t,e){this.l?(function(n,s,r,a){var o=fl(n);A_(n,s,l=>{C_(n,l,r,a),(l=nl(n)).drawImage(o.canvas,0,0,l.canvas.width,l.canvas.height)})})(this,i,t,e):C_(this,i.T(),t,e)}close(){this.h?.close(),this.h=void 0,this.i?.close(),this.i=void 0,this.o?.close(),this.o=void 0}};function $n(i,t){switch(t){case 0:return i.h.find(e=>e instanceof ImageData);case 1:return i.h.find(e=>typeof ImageBitmap<"u"&&e instanceof ImageBitmap);case 2:return i.h.find(e=>typeof WebGLTexture<"u"&&e instanceof WebGLTexture);default:throw Error(`Type is not supported: ${t}`)}}function $v(i){var t=$n(i,0);if(!t){t=Va(i);let e=ku(i),n=new Uint8Array(i.width*i.height*4);Bu(e,t,Kh(i)),t.readPixels(0,0,i.width,i.height,t.RGBA,t.UNSIGNED_BYTE,n),Wp(e),t=new ImageData(new Uint8ClampedArray(n.buffer),i.width,i.height),i.h.push(t)}return t}function Kh(i){var t=$n(i,2);if(!t){let e=Va(i);t=Zh(i);let n=$n(i,1)||$v(i);e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n),rl(i)}return t}function Va(i){if(!i.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return i.i||(i.i=Di(i.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),i.i}function ku(i){return i.l||(i.l=new Vr),i.l}function Zh(i){var t=Va(i);t.viewport(0,0,i.width,i.height),t.activeTexture(t.TEXTURE0);var e=$n(i,2);return e||(e=sr(ku(i),t),i.h.push(e),i.o=!0),t.bindTexture(t.TEXTURE_2D,e),e}function rl(i){i.i.bindTexture(i.i.TEXTURE_2D,null)}function P_(i){var t=Va(i);return Tl(ku(i),t,!0,()=>(function(e,n){var s=e.canvas;if(s.width===e.width&&s.height===e.height)return n();var r=s.width,a=s.height;return s.width=e.width,s.height=e.height,e=n(),s.width=r,s.height=a,e})(i,()=>{if(t.bindFramebuffer(t.FRAMEBUFFER,null),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLE_FAN,0,4),!(i.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return i.canvas.transferToImageBitmap()}))}ki.prototype.close=ki.prototype.close,ki.prototype.drawConfidenceMask=ki.prototype.Ka,ki.prototype.drawCategoryMask=ki.prototype.Ja,ki.prototype.drawBoundingBox=ki.prototype.Ia,ki.prototype.drawConnectors=ki.prototype.La,ki.prototype.drawLandmarks=ki.prototype.Ma,ki.lerp=function(i,t,e,n,s){return w_(n*(1-(i-t)/(e-t))+s*(1-(e-i)/(e-t)),n,s)},ki.clamp=w_;var _i=class{constructor(i,t,e,n,s,r,a){this.h=i,this.u=t,this.o=e,this.canvas=n,this.l=s,this.width=r,this.height=a,(this.u||this.o)&&--I_===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ta(){return!!$n(this,0)}va(){return!!$n(this,1)}X(){return!!$n(this,2)}Qa(){return $v(this)}Pa(){var i=$n(this,1);return i||(Kh(this),Zh(this),i=P_(this),rl(this),this.h.push(i),this.u=!0),i}T(){return Kh(this)}clone(){var i=[];for(let t of this.h){let e;if(t instanceof ImageData)e=new ImageData(t.data,this.width,this.height);else if(t instanceof WebGLTexture){let n=Va(this),s=ku(this);n.activeTexture(n.TEXTURE1),e=sr(s,n),n.bindTexture(n.TEXTURE_2D,e),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,this.width,this.height,0,n.RGBA,n.UNSIGNED_BYTE,null),n.bindTexture(n.TEXTURE_2D,null),Bu(s,n,e),Tl(s,n,!1,()=>{Zh(this),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.drawArrays(n.TRIANGLE_FAN,0,4),rl(this)}),Wp(s),rl(this)}else{if(!(t instanceof ImageBitmap))throw Error(`Type is not supported: ${t}`);Kh(this),Zh(this),e=P_(this),rl(this)}i.push(e)}return new _i(i,this.va(),this.X(),this.canvas,this.l,this.width,this.height)}close(){this.u&&$n(this,1).close(),this.o&&Va(this).deleteTexture($n(this,2)),I_=-1}};_i.prototype.close=_i.prototype.close,_i.prototype.clone=_i.prototype.clone,_i.prototype.getAsWebGLTexture=_i.prototype.T,_i.prototype.getAsImageBitmap=_i.prototype.Pa,_i.prototype.getAsImageData=_i.prototype.Qa,_i.prototype.hasWebGLTexture=_i.prototype.X,_i.prototype.hasImageBitmap=_i.prototype.va,_i.prototype.hasImageData=_i.prototype.Ta;var I_=250;function Pn(...i){return i.map(([t,e])=>({start:t,end:e}))}var L_,BE=Vv((L_=Hv(Gv),class extends L_{get oa(){return this.j}Da(i,t,e){It(this,t,n=>{var[s,r]=zv(this,i,n);this.oa._addBoundTextureAsImageToStream(n,s,r,e)})}ha(i,t){qn(this,i,t),It(this,i,e=>{this.oa._attachImageListener(e)})}ia(i,t){er(this,i,t),It(this,i,e=>{this.oa._attachImageVectorListener(e)})}})),In=class extends BE{};async function ce(i,t,e){return Yh(i,e.canvas??(Gp()?void 0:document.createElement("canvas")),t,e)}function Yv(i,t,e,n){if(i.o&&n!==void 0){var s=de(i.baseOptions,du,3);s?.h()||s?.l()?.h()?(++(s=i.o).h.U,s.i.set(n,performance.now())):(++(s=i.o).h.R,s.i.set(n,performance.now()))}if(i.qa){if(s=new mv,e?.regionOfInterest){if(!i.Ca)throw Error("This task doesn't support region-of-interest.");let r=e.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Dt(s,1,(r.left+r.right)/2),Dt(s,2,(r.top+r.bottom)/2),Dt(s,4,r.right-r.left),Dt(s,3,r.bottom-r.top)}else Dt(s,1,.5),Dt(s,2,.5),Dt(s,4,1),Dt(s,3,1);if(e?.rotationDegrees){if(e?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Dt(s,5,-Math.PI*e.rotationDegrees/180),e?.rotationDegrees%180!=0){let[r,a]=Hp(t);e=Li(s,4)*r/a,Dt(s,4,Li(s,3)*a/r),Dt(s,3,e)}}i.h.addProtoToStream(s.h(),"mediapipe.NormalizedRect",i.qa,n)}i.h.Da(t,i.Ba,n??performance.now()),i.finishProcessing(n)}function Ln(i,t,e){if(i.K)throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");Yv(i,t,e,i.J+1)}function es(i,t,e,n){if(!i.K)throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");Yv(i,t,e,n)}function Wa(i,t,e,n){var s=t.data,r=t.width,a=r*(t=t.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==a)throw Error("Unsupported channel count: "+s.length/a);return i=new Ke([s],e,!1,i.h.j.canvas,i.ea,r,t),n?i.clone():i}var Qi=class extends gu{constructor(i,t,e,n){super(i),this.h=i,this.Ba=t,this.qa=e,this.Ca=n,this.ea=new Vr,this.K=!1}l(i,t=!0,e=!1,n=!1){if("runningMode"in i){var s=this.K=!!i.runningMode&&i.runningMode!=="IMAGE";$t(this.baseOptions,2,s==null?s:tu(s))}if(i.canvas!==void 0&&this.h.j.canvas!==i.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(i,t,e,n)}close(){this.ea.close(),super.close()}};Qi.prototype.close=Qi.prototype.close;var un=class extends Qi{constructor(i,t){super(new In(i,t),"image_in","norm_rect_in",!1),this.m={detections:[]},Lt(i=this.i=new Fu,0,1,t=new ze),Dt(this.i,2,.5),Dt(this.i,3,.3)}D(){return"FaceDetector"}get baseOptions(){return de(this.i,ze,1)}set baseOptions(i){Lt(this.i,0,1,i)}A(i){return"minDetectionConfidence"in i&&Dt(this.i,2,i.minDetectionConfidence??.5),"minSuppressionThreshold"in i&&Dt(this.i,3,i.minSuppressionThreshold??.3),this.l(i)}H(i,t){return this.m={detections:[]},Ln(this,i,t),this.m}I(i,t,e){return this.m={detections:[]},es(this,i,e,t),this.m}u(){var i=new en;ke(i,"image_in"),ke(i,"norm_rect_in"),me(i,"detections");var t=new tn;Qn(t,sE,this.i);var e=new Wi;ji(e,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Fe(e,"IMAGE:image_in"),Fe(e,"NORM_RECT:norm_rect_in"),ae(e,"DETECTIONS:detections"),e.A(t),gn(i,e),this.h.attachProtoVectorListener("detections",(n,s)=>{for(let r of n)n=pv(r),this.m.detections.push(Ov(n));bt(this,s)}),this.h.attachEmptyPacketListener("detections",n=>{bt(this,n)}),i=i.h(),this.setGraph(new Uint8Array(i),!0)}};un.prototype.detectForVideo=un.prototype.I,un.prototype.detect=un.prototype.H,un.prototype.setOptions=un.prototype.A,un.createFromModelPath=async function(i,t){return ce(un,i,{baseOptions:{modelAssetPath:t}})},un.createFromModelBuffer=function(i,t){return ce(un,i,{baseOptions:{modelAssetBuffer:t}})},un.createFromOptions=function(i,t){return ce(un,i,t)};var qp=Pn([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),$p=Pn([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Yp=Pn([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),Kv=Pn([474,475],[475,476],[476,477],[477,474]),Kp=Pn([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Zp=Pn([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),Zv=Pn([469,470],[470,471],[471,472],[472,469]),Jp=Pn([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),Jv=[...qp,...$p,...Yp,...Kp,...Zp,...Jp],jv=Pn([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function N_(i){i.m={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var ue=class extends Qi{constructor(i,t){super(new In(i,t),"image_in","norm_rect",!1),this.m={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Lt(i=this.i=new xv,0,1,t=new ze),this.C=new vv,Lt(this.i,0,3,this.C),this.v=new Fu,Lt(this.i,0,2,this.v),Jn(this.v,4,1),Dt(this.v,2,.5),Dt(this.C,2,.5),Dt(this.i,4,.5)}D(){return"FaceLandmarker"}get baseOptions(){return de(this.i,ze,1)}set baseOptions(i){Lt(this.i,0,1,i)}A(i){return"numFaces"in i&&Jn(this.v,4,i.numFaces??1),"minFaceDetectionConfidence"in i&&Dt(this.v,2,i.minFaceDetectionConfidence??.5),"minTrackingConfidence"in i&&Dt(this.i,4,i.minTrackingConfidence??.5),"minFacePresenceConfidence"in i&&Dt(this.C,2,i.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in i&&(this.outputFaceBlendshapes=!!i.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in i&&(this.outputFacialTransformationMatrixes=!!i.outputFacialTransformationMatrixes),this.l(i)}H(i,t){return N_(this),Ln(this,i,t),this.m}I(i,t,e){return N_(this),es(this,i,e,t),this.m}u(){var i=new en;ke(i,"image_in"),ke(i,"norm_rect"),me(i,"face_landmarks");var t=new tn;Qn(t,aE,this.i);var e=new Wi;ji(e,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Fe(e,"IMAGE:image_in"),Fe(e,"NORM_RECT:norm_rect"),ae(e,"NORM_LANDMARKS:face_landmarks"),e.A(t),gn(i,e),this.h.attachProtoVectorListener("face_landmarks",(n,s)=>{for(let r of n)n=bl(r),this.m.faceLandmarks.push(El(n));bt(this,s)}),this.h.attachEmptyPacketListener("face_landmarks",n=>{bt(this,n)}),this.outputFaceBlendshapes&&(me(i,"blendshapes"),ae(e,"BLENDSHAPES:blendshapes"),this.h.attachProtoVectorListener("blendshapes",(n,s)=>{if(this.outputFaceBlendshapes)for(let r of n)n=Du(r),this.m.faceBlendshapes.push(zp(n.h()??[]));bt(this,s)}),this.h.attachEmptyPacketListener("blendshapes",n=>{bt(this,n)})),this.outputFacialTransformationMatrixes&&(me(i,"face_geometry"),ae(e,"FACE_GEOMETRY:face_geometry"),this.h.attachProtoVectorListener("face_geometry",(n,s)=>{if(this.outputFacialTransformationMatrixes)for(let r of n)(n=de(n=rE(r),Y3,2))&&this.m.facialTransformationMatrixes.push({rows:pn(n,1)??0??0,columns:pn(n,2)??0??0,data:Cr(n,3,Ji).slice()??[]});bt(this,s)}),this.h.attachEmptyPacketListener("face_geometry",n=>{bt(this,n)})),i=i.h(),this.setGraph(new Uint8Array(i),!0)}};ue.prototype.detectForVideo=ue.prototype.I,ue.prototype.detect=ue.prototype.H,ue.prototype.setOptions=ue.prototype.A,ue.createFromModelPath=function(i,t){return ce(ue,i,{baseOptions:{modelAssetPath:t}})},ue.createFromModelBuffer=function(i,t){return ce(ue,i,{baseOptions:{modelAssetBuffer:t}})},ue.createFromOptions=function(i,t){return ce(ue,i,t)},ue.FACE_LANDMARKS_LIPS=qp,Ce("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LIPS",ue.FACE_LANDMARKS_LIPS),ue.FACE_LANDMARKS_LEFT_EYE=$p,Ce("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYE",ue.FACE_LANDMARKS_LEFT_EYE),ue.FACE_LANDMARKS_LEFT_EYEBROW=Yp,Ce("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",ue.FACE_LANDMARKS_LEFT_EYEBROW),ue.FACE_LANDMARKS_LEFT_IRIS=Kv,Ce("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS",ue.FACE_LANDMARKS_LEFT_IRIS),ue.FACE_LANDMARKS_RIGHT_EYE=Kp,Ce("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE",ue.FACE_LANDMARKS_RIGHT_EYE),ue.FACE_LANDMARKS_RIGHT_EYEBROW=Zp,Ce("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",ue.FACE_LANDMARKS_RIGHT_EYEBROW),ue.FACE_LANDMARKS_RIGHT_IRIS=Zv,Ce("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS",ue.FACE_LANDMARKS_RIGHT_IRIS),ue.FACE_LANDMARKS_FACE_OVAL=Jp,Ce("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_FACE_OVAL",ue.FACE_LANDMARKS_FACE_OVAL),ue.FACE_LANDMARKS_CONTOURS=Jv,Ce("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_CONTOURS",ue.FACE_LANDMARKS_CONTOURS),ue.FACE_LANDMARKS_TESSELATION=jv,Ce("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_TESSELATION",ue.FACE_LANDMARKS_TESSELATION);var jp=Pn([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function D_(i){i.gestures=[],i.landmarks=[],i.worldLandmarks=[],i.handedness=[]}function F_(i){return i.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:i.gestures,landmarks:i.landmarks,worldLandmarks:i.worldLandmarks,handedness:i.handedness,handednesses:i.handedness}}function U_(i,t=!0){var e=[];for(let s of i){var n=Du(s);i=[];for(let r of n.h())n=t&&pn(r,1)!=null?pn(r,1)??0:-1,i.push({score:Li(r,2)??0,index:n,categoryName:vi(De(r,3))??""??"",displayName:vi(De(r,4))??""??""});e.push(i)}return e}var zi=class extends Qi{constructor(i,t){super(new In(i,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Lt(i=this.m=new Mv,0,1,t=new ze),this.v=new Up,Lt(this.m,0,2,this.v),this.G=new Fp,Lt(this.v,0,3,this.G),this.C=new Sv,Lt(this.v,0,2,this.C),this.i=new oE,Lt(this.m,0,3,this.i),Dt(this.C,2,.5),Dt(this.v,4,.5),Dt(this.G,2,.5)}D(){return"GestureRecognizer"}get baseOptions(){return de(this.m,ze,1)}set baseOptions(i){Lt(this.m,0,1,i)}A(i){if(Jn(this.C,3,i.numHands??1),"minHandDetectionConfidence"in i&&Dt(this.C,2,i.minHandDetectionConfidence??.5),"minTrackingConfidence"in i&&Dt(this.v,4,i.minTrackingConfidence??.5),"minHandPresenceConfidence"in i&&Dt(this.G,2,i.minHandPresenceConfidence??.5),i.cannedGesturesClassifierOptions){var t=new Ra,e=t,n=Gf(i.cannedGesturesClassifierOptions,de(this.i,Ra,3)?.l());Lt(e,0,2,n),Lt(this.i,0,3,t)}else i.cannedGesturesClassifierOptions===void 0&&de(this.i,Ra,3)?.h();return i.customGesturesClassifierOptions?(Lt(e=t=new Ra,0,2,n=Gf(i.customGesturesClassifierOptions,de(this.i,Ra,4)?.l())),Lt(this.i,0,4,t)):i.customGesturesClassifierOptions===void 0&&de(this.i,Ra,4)?.h(),this.l(i)}Xa(i,t){return D_(this),Ln(this,i,t),F_(this)}Ya(i,t,e){return D_(this),es(this,i,e,t),F_(this)}u(){var i=new en;ke(i,"image_in"),ke(i,"norm_rect"),me(i,"hand_gestures"),me(i,"hand_landmarks"),me(i,"world_hand_landmarks"),me(i,"handedness");var t=new tn;Qn(t,lE,this.m);var e=new Wi;ji(e,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Fe(e,"IMAGE:image_in"),Fe(e,"NORM_RECT:norm_rect"),ae(e,"HAND_GESTURES:hand_gestures"),ae(e,"LANDMARKS:hand_landmarks"),ae(e,"WORLD_LANDMARKS:world_hand_landmarks"),ae(e,"HANDEDNESS:handedness"),e.A(t),gn(i,e),this.h.attachProtoVectorListener("hand_landmarks",(n,s)=>{for(let r of n)n=bl(r),this.landmarks.push(El(n));bt(this,s)}),this.h.attachEmptyPacketListener("hand_landmarks",n=>{bt(this,n)}),this.h.attachProtoVectorListener("world_hand_landmarks",(n,s)=>{for(let r of n)n=Ia(r),this.worldLandmarks.push(La(n));bt(this,s)}),this.h.attachEmptyPacketListener("world_hand_landmarks",n=>{bt(this,n)}),this.h.attachProtoVectorListener("hand_gestures",(n,s)=>{this.gestures.push(...U_(n,!1)),bt(this,s)}),this.h.attachEmptyPacketListener("hand_gestures",n=>{bt(this,n)}),this.h.attachProtoVectorListener("handedness",(n,s)=>{this.handedness.push(...U_(n)),bt(this,s)}),this.h.attachEmptyPacketListener("handedness",n=>{bt(this,n)}),i=i.h(),this.setGraph(new Uint8Array(i),!0)}};function O_(i){return{landmarks:i.landmarks,worldLandmarks:i.worldLandmarks,handednesses:i.handedness,handedness:i.handedness}}zi.prototype.recognizeForVideo=zi.prototype.Ya,zi.prototype.recognize=zi.prototype.Xa,zi.prototype.setOptions=zi.prototype.A,zi.createFromModelPath=function(i,t){return ce(zi,i,{baseOptions:{modelAssetPath:t}})},zi.createFromModelBuffer=function(i,t){return ce(zi,i,{baseOptions:{modelAssetBuffer:t}})},zi.createFromOptions=function(i,t){return ce(zi,i,t)},zi.HAND_CONNECTIONS=jp,Ce("module$exports$google3$third_party$mediapipe$tasks$web$vision$gesture_recognizer$gesture_recognizer.GestureRecognizer.HAND_CONNECTIONS",zi.HAND_CONNECTIONS);var wi=class extends Qi{constructor(i,t){super(new In(i,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Lt(i=this.i=new Up,0,1,t=new ze),this.v=new Fp,Lt(this.i,0,3,this.v),this.m=new Sv,Lt(this.i,0,2,this.m),Jn(this.m,3,1),Dt(this.m,2,.5),Dt(this.v,2,.5),Dt(this.i,4,.5)}D(){return"HandLandmarker"}get baseOptions(){return de(this.i,ze,1)}set baseOptions(i){Lt(this.i,0,1,i)}A(i){return"numHands"in i&&Jn(this.m,3,i.numHands??1),"minHandDetectionConfidence"in i&&Dt(this.m,2,i.minHandDetectionConfidence??.5),"minTrackingConfidence"in i&&Dt(this.i,4,i.minTrackingConfidence??.5),"minHandPresenceConfidence"in i&&Dt(this.v,2,i.minHandPresenceConfidence??.5),this.l(i)}H(i,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ln(this,i,t),O_(this)}I(i,t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],es(this,i,e,t),O_(this)}u(){var i=new en;ke(i,"image_in"),ke(i,"norm_rect"),me(i,"hand_landmarks"),me(i,"world_hand_landmarks"),me(i,"handedness");var t=new tn;Qn(t,cE,this.i);var e=new Wi;ji(e,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Fe(e,"IMAGE:image_in"),Fe(e,"NORM_RECT:norm_rect"),ae(e,"LANDMARKS:hand_landmarks"),ae(e,"WORLD_LANDMARKS:world_hand_landmarks"),ae(e,"HANDEDNESS:handedness"),e.A(t),gn(i,e),this.h.attachProtoVectorListener("hand_landmarks",(n,s)=>{for(let r of n)n=bl(r),this.landmarks.push(El(n));bt(this,s)}),this.h.attachEmptyPacketListener("hand_landmarks",n=>{bt(this,n)}),this.h.attachProtoVectorListener("world_hand_landmarks",(n,s)=>{for(let r of n)n=Ia(r),this.worldLandmarks.push(La(n));bt(this,s)}),this.h.attachEmptyPacketListener("world_hand_landmarks",n=>{bt(this,n)}),this.h.attachProtoVectorListener("handedness",(n,s)=>{var r=this.handedness,a=r.push,o=[];for(let l of n){n=Du(l);let c=[];for(let h of n.h())c.push({score:Li(h,2)??0,index:pn(h,1)??0??-1,categoryName:vi(De(h,3))??""??"",displayName:vi(De(h,4))??""??""});o.push(c)}a.call(r,...o),bt(this,s)}),this.h.attachEmptyPacketListener("handedness",n=>{bt(this,n)}),i=i.h(),this.setGraph(new Uint8Array(i),!0)}};wi.prototype.detectForVideo=wi.prototype.I,wi.prototype.detect=wi.prototype.H,wi.prototype.setOptions=wi.prototype.A,wi.createFromModelPath=function(i,t){return ce(wi,i,{baseOptions:{modelAssetPath:t}})},wi.createFromModelBuffer=function(i,t){return ce(wi,i,{baseOptions:{modelAssetBuffer:t}})},wi.createFromOptions=function(i,t){return ce(wi,i,t)},wi.HAND_CONNECTIONS=jp,Ce("module$exports$google3$third_party$mediapipe$tasks$web$vision$hand_landmarker$hand_landmarker.HandLandmarker.HAND_CONNECTIONS",wi.HAND_CONNECTIONS);var Qv=Pn([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function B_(i){i.i={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function k_(i){try{if(!i.G)return i.i;i.G(i.i)}finally{Ou(i)}}function Hh(i,t){i=bl(i),t.push(El(i))}var ne=class extends Qi{constructor(i,t){super(new In(i,t),"input_frames_image",null,!1),this.i={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Lt(i=this.m=new Av,0,1,t=new ze),this.Z=new Fp,Lt(this.m,0,2,this.Z),this.Aa=new hE,Lt(this.m,0,3,this.Aa),this.v=new Fu,Lt(this.m,0,4,this.v),this.P=new vv,Lt(this.m,0,5,this.P),this.C=new Tv,Lt(this.m,0,6,this.C),this.aa=new wv,Lt(this.m,0,7,this.aa),Dt(this.v,2,.5),Dt(this.v,3,.3),Dt(this.P,2,.5),Dt(this.C,2,.5),Dt(this.C,3,.3),Dt(this.aa,2,.5),Dt(this.Z,2,.5)}D(){return"HolisticLandmarker"}get baseOptions(){return de(this.m,ze,1)}set baseOptions(i){Lt(this.m,0,1,i)}A(i){return"minFaceDetectionConfidence"in i&&Dt(this.v,2,i.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in i&&Dt(this.v,3,i.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in i&&Dt(this.P,2,i.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in i&&(this.outputFaceBlendshapes=!!i.outputFaceBlendshapes),"minPoseDetectionConfidence"in i&&Dt(this.C,2,i.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in i&&Dt(this.C,3,i.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in i&&Dt(this.aa,2,i.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in i&&(this.outputPoseSegmentationMasks=!!i.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in i&&Dt(this.Z,2,i.minHandLandmarksConfidence??.5),this.l(i)}H(i,t,e){var n=typeof t!="function"?t:{};return this.G=typeof t=="function"?t:e,B_(this),Ln(this,i,n),k_(this)}I(i,t,e,n){var s=typeof e!="function"?e:{};return this.G=typeof e=="function"?e:n,B_(this),es(this,i,s,t),k_(this)}u(){var i=new en;ke(i,"input_frames_image"),me(i,"pose_landmarks"),me(i,"pose_world_landmarks"),me(i,"face_landmarks"),me(i,"left_hand_landmarks"),me(i,"left_hand_world_landmarks"),me(i,"right_hand_landmarks"),me(i,"right_hand_world_landmarks");var t=new tn,e=new Zg;ji(e,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(s,r){if(r!=null)if(Array.isArray(r))$t(s,2,Mu(r,0,hl));else{if(!(typeof r=="string"||r instanceof Yn||tp(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");_l(s,2,vu(r,!1),Fr())}})(e,this.m.h());var n=new Wi;ji(n,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),ul(n,8,Zg,e),Fe(n,"IMAGE:input_frames_image"),ae(n,"POSE_LANDMARKS:pose_landmarks"),ae(n,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),ae(n,"FACE_LANDMARKS:face_landmarks"),ae(n,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),ae(n,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),ae(n,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),ae(n,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),n.A(t),gn(i,n),Uu(this,i),this.h.attachProtoListener("pose_landmarks",(s,r)=>{Hh(s,this.i.poseLandmarks),bt(this,r)}),this.h.attachEmptyPacketListener("pose_landmarks",s=>{bt(this,s)}),this.h.attachProtoListener("pose_world_landmarks",(s,r)=>{var a=this.i.poseWorldLandmarks;s=Ia(s),a.push(La(s)),bt(this,r)}),this.h.attachEmptyPacketListener("pose_world_landmarks",s=>{bt(this,s)}),this.outputPoseSegmentationMasks&&(ae(n,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Ga(this,"pose_segmentation_mask"),this.h.ha("pose_segmentation_mask",(s,r)=>{this.i.poseSegmentationMasks=[Wa(this,s,!0,!this.G)],bt(this,r)}),this.h.attachEmptyPacketListener("pose_segmentation_mask",s=>{this.i.poseSegmentationMasks=[],bt(this,s)})),this.h.attachProtoListener("face_landmarks",(s,r)=>{Hh(s,this.i.faceLandmarks),bt(this,r)}),this.h.attachEmptyPacketListener("face_landmarks",s=>{bt(this,s)}),this.outputFaceBlendshapes&&(me(i,"extra_blendshapes"),ae(n,"FACE_BLENDSHAPES:extra_blendshapes"),this.h.attachProtoListener("extra_blendshapes",(s,r)=>{var a=this.i.faceBlendshapes;this.outputFaceBlendshapes&&(s=Du(s),a.push(zp(s.h()??[]))),bt(this,r)}),this.h.attachEmptyPacketListener("extra_blendshapes",s=>{bt(this,s)})),this.h.attachProtoListener("left_hand_landmarks",(s,r)=>{Hh(s,this.i.leftHandLandmarks),bt(this,r)}),this.h.attachEmptyPacketListener("left_hand_landmarks",s=>{bt(this,s)}),this.h.attachProtoListener("left_hand_world_landmarks",(s,r)=>{var a=this.i.leftHandWorldLandmarks;s=Ia(s),a.push(La(s)),bt(this,r)}),this.h.attachEmptyPacketListener("left_hand_world_landmarks",s=>{bt(this,s)}),this.h.attachProtoListener("right_hand_landmarks",(s,r)=>{Hh(s,this.i.rightHandLandmarks),bt(this,r)}),this.h.attachEmptyPacketListener("right_hand_landmarks",s=>{bt(this,s)}),this.h.attachProtoListener("right_hand_world_landmarks",(s,r)=>{var a=this.i.rightHandWorldLandmarks;s=Ia(s),a.push(La(s)),bt(this,r)}),this.h.attachEmptyPacketListener("right_hand_world_landmarks",s=>{bt(this,s)}),i=i.h(),this.setGraph(new Uint8Array(i),!0)}};ne.prototype.detectForVideo=ne.prototype.I,ne.prototype.detect=ne.prototype.H,ne.prototype.setOptions=ne.prototype.A,ne.createFromModelPath=function(i,t){return ce(ne,i,{baseOptions:{modelAssetPath:t}})},ne.createFromModelBuffer=function(i,t){return ce(ne,i,{baseOptions:{modelAssetBuffer:t}})},ne.createFromOptions=function(i,t){return ce(ne,i,t)},ne.HAND_CONNECTIONS=jp,Ce("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.HAND_CONNECTIONS",ne.HAND_CONNECTIONS),ne.POSE_CONNECTIONS=Qv,Ce("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.POSE_CONNECTIONS",ne.POSE_CONNECTIONS),ne.FACE_LANDMARKS_LIPS=qp,Ce("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LIPS",ne.FACE_LANDMARKS_LIPS),ne.FACE_LANDMARKS_LEFT_EYE=$p,Ce("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYE",ne.FACE_LANDMARKS_LEFT_EYE),ne.FACE_LANDMARKS_LEFT_EYEBROW=Yp,Ce("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",ne.FACE_LANDMARKS_LEFT_EYEBROW),ne.FACE_LANDMARKS_LEFT_IRIS=Kv,Ce("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_IRIS",ne.FACE_LANDMARKS_LEFT_IRIS),ne.FACE_LANDMARKS_RIGHT_EYE=Kp,Ce("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYE",ne.FACE_LANDMARKS_RIGHT_EYE),ne.FACE_LANDMARKS_RIGHT_EYEBROW=Zp,Ce("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",ne.FACE_LANDMARKS_RIGHT_EYEBROW),ne.FACE_LANDMARKS_RIGHT_IRIS=Zv,Ce("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_IRIS",ne.FACE_LANDMARKS_RIGHT_IRIS),ne.FACE_LANDMARKS_FACE_OVAL=Jp,Ce("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_FACE_OVAL",ne.FACE_LANDMARKS_FACE_OVAL),ne.FACE_LANDMARKS_CONTOURS=Jv,Ce("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_CONTOURS",ne.FACE_LANDMARKS_CONTOURS),ne.FACE_LANDMARKS_TESSELATION=jv,Ce("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_TESSELATION",ne.FACE_LANDMARKS_TESSELATION);var dn=class extends Qi{constructor(i,t){super(new In(i,t),"input_image","norm_rect",!0),this.m={classifications:[]},Lt(i=this.i=new Rv,0,1,t=new ze)}D(){return"ImageClassifier"}get baseOptions(){return de(this.i,ze,1)}set baseOptions(i){Lt(this.i,0,1,i)}A(i){return Lt(this.i,0,2,Gf(i,de(this.i,Np,2))),this.l(i)}Ga(i,t){return this.m={classifications:[]},Ln(this,i,t),this.m}Ha(i,t,e){return this.m={classifications:[]},es(this,i,e,t),this.m}u(){var i=new en;ke(i,"input_image"),ke(i,"norm_rect"),me(i,"classifications");var t=new tn;Qn(t,uE,this.i);var e=new Wi;ji(e,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Fe(e,"IMAGE:input_image"),Fe(e,"NORM_RECT:norm_rect"),ae(e,"CLASSIFICATIONS:classifications"),e.A(t),gn(i,e),this.h.attachProtoListener("classifications",(n,s)=>{this.m=SE(J3(n)),bt(this,s)}),this.h.attachEmptyPacketListener("classifications",n=>{bt(this,n)}),i=i.h(),this.setGraph(new Uint8Array(i),!0)}};dn.prototype.classifyForVideo=dn.prototype.Ha,dn.prototype.classify=dn.prototype.Ga,dn.prototype.setOptions=dn.prototype.A,dn.createFromModelPath=function(i,t){return ce(dn,i,{baseOptions:{modelAssetPath:t}})},dn.createFromModelBuffer=function(i,t){return ce(dn,i,{baseOptions:{modelAssetBuffer:t}})},dn.createFromOptions=function(i,t){return ce(dn,i,t)};var Zi=class extends Qi{constructor(i,t){super(new In(i,t),"image_in","norm_rect",!0),this.i=new Cv,this.embeddings={embeddings:[]},Lt(i=this.i,0,1,t=new ze)}D(){return"ImageEmbedder"}get baseOptions(){return de(this.i,ze,1)}set baseOptions(i){Lt(this.i,0,1,i)}A(i){var t=this.i,e=de(this.i,s_,2);if(e=e?e.clone():new s_,i.l2Normalize!==void 0){var n=i.l2Normalize;$t(e,1,n==null?n:tu(n))}else"l2Normalize"in i&&$t(e,1);return i.quantize!==void 0?$t(e,2,(n=i.quantize)==null?n:tu(n)):"quantize"in i&&$t(e,2),Lt(t,0,2,e),this.l(i)}Na(i,t){return Ln(this,i,t),this.embeddings}Oa(i,t,e){return es(this,i,e,t),this.embeddings}u(){var i=new en;ke(i,"image_in"),ke(i,"norm_rect"),me(i,"embeddings_out");var t=new tn;Qn(t,dE,this.i);var e=new Wi;ji(e,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Fe(e,"IMAGE:image_in"),Fe(e,"NORM_RECT:norm_rect"),ae(e,"EMBEDDINGS:embeddings_out"),e.A(t),gn(i,e),this.h.attachProtoListener("embeddings_out",(n,s)=>{n=eE(n),this.embeddings=(function(r){return{embeddings:Gr(r,tE,1).map(a=>{var o={headIndex:pn(a,3)??0??-1,headName:vi(De(a,4))??""??""};if(_1(a,1,$h))a=Cr(a=If(a,j3,1,$h),1,Ji),o.floatEmbedding=a.slice();else{let l=new Uint8Array(0);o.quantizedEmbedding=If(a,Q3,2,$h)?.h()?.i()??l}return o}),timestampMs:Uv(De(r,2,void 0,iu)??m1)}})(n),bt(this,s)}),this.h.attachEmptyPacketListener("embeddings_out",n=>{bt(this,n)}),i=i.h(),this.setGraph(new Uint8Array(i),!0)}};Zi.cosineSimilarity=function(i,t){if(i.floatEmbedding&&t.floatEmbedding)i=c_(i.floatEmbedding,t.floatEmbedding);else{if(!i.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");i=c_(l_(i.quantizedEmbedding),l_(t.quantizedEmbedding))}return i},Zi.prototype.embedForVideo=Zi.prototype.Oa,Zi.prototype.embed=Zi.prototype.Na,Zi.prototype.setOptions=Zi.prototype.A,Zi.createFromModelPath=function(i,t){return ce(Zi,i,{baseOptions:{modelAssetPath:t}})},Zi.createFromModelBuffer=function(i,t){return ce(Zi,i,{baseOptions:{modelAssetBuffer:t}})},Zi.createFromOptions=function(i,t){return ce(Zi,i,t)};var Jf=class{constructor(i,t,e){this.confidenceMasks=i,this.categoryMask=t,this.qualityScores=e}close(){this.confidenceMasks?.forEach(i=>{i.close()}),this.categoryMask?.close()}};function kE(i){var t=(function(e){return Gr(e,Wi,1)})(i.ka()).filter(e=>(vi(De(e,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(i.v=[],t.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&(de(t[0],tn,7)?.u()?.h()??new Map).forEach((e,n)=>{i.v[Number(n)]=vi(De(e,1))??""})}function z_(i){i.categoryMask=void 0,i.confidenceMasks=void 0,i.qualityScores=void 0}function G_(i){try{let t=new Jf(i.confidenceMasks,i.categoryMask,i.qualityScores);if(!i.m)return t;i.m(t)}finally{Ou(i)}}Jf.prototype.close=Jf.prototype.close;var Gi=class extends Qi{constructor(i,t){super(new In(i,t),"image_in","norm_rect",!1),this.v=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.i=new kp,this.C=new Pv,Lt(this.i,0,3,this.C),Lt(i=this.i,0,1,t=new ze)}D(){return"ImageSegmenter"}get baseOptions(){return de(this.i,ze,1)}set baseOptions(i){Lt(this.i,0,1,i)}A(i){return i.displayNamesLocale!==void 0?$t(this.i,2,Ts(i.displayNamesLocale)):"displayNamesLocale"in i&&$t(this.i,2),"outputCategoryMask"in i&&(this.outputCategoryMask=i.outputCategoryMask??!1),"outputConfidenceMasks"in i&&(this.outputConfidenceMasks=i.outputConfidenceMasks??!0),super.l(i)}M(){kE(this)}segment(i,t,e){var n=typeof t!="function"?t:{};return this.m=typeof t=="function"?t:e,z_(this),Ln(this,i,n),G_(this)}cb(i,t,e,n){var s=typeof e!="function"?e:{};return this.m=typeof e=="function"?e:n,z_(this),es(this,i,s,t),G_(this)}Ra(){return this.v}u(){var i=new en;ke(i,"image_in"),ke(i,"norm_rect");var t=new tn;Qn(t,Lv,this.i);var e=new Wi;ji(e,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Fe(e,"IMAGE:image_in"),Fe(e,"NORM_RECT:norm_rect"),e.A(t),gn(i,e),Uu(this,i),this.outputConfidenceMasks&&(me(i,"confidence_masks"),ae(e,"CONFIDENCE_MASKS:confidence_masks"),Ga(this,"confidence_masks"),this.h.ia("confidence_masks",(n,s)=>{this.confidenceMasks=n.map(r=>Wa(this,r,!0,!this.m)),bt(this,s)}),this.h.attachEmptyPacketListener("confidence_masks",n=>{this.confidenceMasks=[],bt(this,n)})),this.outputCategoryMask&&(me(i,"category_mask"),ae(e,"CATEGORY_MASK:category_mask"),Ga(this,"category_mask"),this.h.ha("category_mask",(n,s)=>{this.categoryMask=Wa(this,n,!1,!this.m),bt(this,s)}),this.h.attachEmptyPacketListener("category_mask",n=>{this.categoryMask=void 0,bt(this,n)})),me(i,"quality_scores"),ae(e,"QUALITY_SCORES:quality_scores"),this.h.attachFloatVectorListener("quality_scores",(n,s)=>{this.qualityScores=n,bt(this,s)}),this.h.attachEmptyPacketListener("quality_scores",n=>{this.categoryMask=void 0,bt(this,n)}),i=i.h(),this.setGraph(new Uint8Array(i),!0)}};Gi.prototype.getLabels=Gi.prototype.Ra,Gi.prototype.segmentForVideo=Gi.prototype.cb,Gi.prototype.segment=Gi.prototype.segment,Gi.prototype.setOptions=Gi.prototype.A,Gi.createFromModelPath=function(i,t){return ce(Gi,i,{baseOptions:{modelAssetPath:t}})},Gi.createFromModelBuffer=function(i,t){return ce(Gi,i,{baseOptions:{modelAssetBuffer:t}})},Gi.createFromOptions=function(i,t){return ce(Gi,i,t)};var zE={0:0,1:1,2:2,3:3};function Mf(){return Gp()?void 0:document.createElement("canvas")}var Hi=class extends gu{constructor(i,t){super(new NE(i,t)),this.v=new Vr,this.delegate="CPU",this.i=0,this.baseOptions=new ze,this.C=this.m=0}D(){return"InteractiveSegmenter"}get j(){return this.h.j}A(i){return this.delegate=i.baseOptions?.delegate??"CPU",super.l(i)}eb(i){if(this.i===0)throw Error("Segmenter is not initialized.");var t;if(this.m!==0&&(this.j._free(this.m),this.m=0),!(t=typeof ImageData<"u"&&i instanceof ImageData))if(typeof i!="object"||i===null)t=!1;else{t=i.data;var e=i.width,n=i.height;t=Number.isInteger(e)&&e>0&&Number.isInteger(n)&&n>0&&(t instanceof Uint8ClampedArray||t instanceof Uint8Array)}if(t)t=i.width,e=i.height,i=i.data;else{if([t,e]=Hp(i),typeof OffscreenCanvas<"u")n=new OffscreenCanvas(t,e);else{if(typeof document>"u")throw Error("Canvas is not supported in this environment.");n=document.createElement("canvas")}if(n.width=t,n.height=e,!(n=n.getContext("2d")))throw Error("Canvas 2D context is not supported in this environment.");n.drawImage(i,0,0),i=n.getImageData(0,0,t,e).data}if(!i)throw Error("Unsupported image source or failed to extract image pixels.");n=(function({Wa:r,width:a,height:o}){if(a<=0||o<=0)throw Error(`Invalid image dimensions: ${a}x${o}. Dimensions must be positive.`);if(r%(a*o)!==0)throw Error(`Invalid image dimensions or pixel data length. Pixel data length ${r} is not a multiple of the number of pixels (${a*o}).`);if((r/=a*o)!==4&&r!==3&&r!==1)throw Error(`Invalid image dimensions or pixel data length. Calculated channels: ${r}. Expected 1, 3, or 4.`);return r})({Wa:i.length,width:t,height:e});var s=this.j._malloc(i.length);if(this.j.HEAPU8.set(i,s),this.m=s,!this.j._interactive_segmenter_set_image(this.i,s,t,e,n))throw Error("Failed to set image on native engine.")}segment(i){if(this.i===0)throw Error("Segmenter is not initialized.");var t=(function(c){c=c.map(({isCompleted:d,brushMode:u,point:f})=>{u=zE[u]??0,f=f.map(({x,y:p})=>{var m=new pE;return Ca(m,1,x),Ca(m,2,p),m});var g=new mE;return Lf(g,d),_l(g,1,As(u),0),Pf(g,2,f),g});var h=new gE;return Pf(h,1,c),_E(h)})(i);i=this.j._malloc(t.length),this.j.HEAPU8.set(t,i);var e=this.j._malloc(12),n=e+4,s=e+8,r=0,a=this.C++;try{if(this.o)if(this.delegate==="GPU"){var o=this.o;++o.h.U,o.i.set(a,performance.now())}else{var l=this.o;++l.h.R,l.i.set(a,performance.now())}if((r=this.j._interactive_segmenter_segment(this.i,i,t.length,e,n,s))===0)throw Error("Segmentation failed.");this.o?.za(a);let c=this.j.HEAPU32[e/4],h=this.j.HEAPU32[n/4],d=new Float32Array(this.j.HEAPU8.buffer,r,this.j.HEAPU32[s/4]/4),u=new Float32Array(d);if(o=c*h,(u instanceof Uint8Array||u instanceof Float32Array)&&u.length!==o)throw Error("Unsupported channel count: "+u.length/o);return new Ke([u],!0,!1,this.h.j.canvas??void 0,this.v,c,h)}finally{i!==0&&this.j._free(i),e!==0&&this.j._free(e),r!==0&&this.j._free(r)}}u(){this.i!==0&&(this.o?.xa(),this.j._interactive_segmenter_close(this.i),this.i=0),this.m!==0&&(this.j._free(this.m),this.m=0);var i=new du;if(this.delegate==="GPU"){var t=new sv;An(i,2,ws,t)}else Jn(t=new G3,1,4),An(i,1,ws,t);if(Lt(this.baseOptions,0,3,i),i=nE(this.baseOptions),t=this.j._malloc(i.length),this.j.HEAPU8.set(i,t),this.i=this.j._interactive_segmenter_create(t,i.length),this.j._free(t),this.i===0)throw Error("Failed to create native InteractiveSegmenter engine.");this.o?.ya()}close(){this.i!==0&&(this.j._interactive_segmenter_close(this.i),this.i=0),this.m!==0&&(this.j._free(this.m),this.m=0),this.v.close(),super.close()}};Hi.prototype.close=Hi.prototype.close,Hi.prototype.segment=Hi.prototype.segment,Hi.prototype.setImage=Hi.prototype.eb,Hi.prototype.setOptions=Hi.prototype.A,Hi.createFromModelPath=function(i,t){return Yh(Hi,Mf(),i,{baseOptions:{modelAssetPath:t}})},Hi.createFromModelBuffer=function(i,t){return Yh(Hi,Mf(),i,{baseOptions:{modelAssetBuffer:t}})},Hi.createFromOptions=function(i,t){var e=t.canvas??Mf();return Yh(Hi,e,i,t)};var jf=class{constructor(i,t,e){this.confidenceMasks=i,this.categoryMask=t,this.qualityScores=e}close(){this.confidenceMasks?.forEach(i=>{i.close()}),this.categoryMask?.close()}};jf.prototype.close=jf.prototype.close;var Xn=class extends Qi{constructor(i,t){super(new In(i,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.i=new kp,this.v=new Pv,Lt(this.i,0,3,this.v),Lt(i=this.i,0,1,t=new ze)}D(){return"InteractiveSegmenterLegacy"}get baseOptions(){return de(this.i,ze,1)}set baseOptions(i){Lt(this.i,0,1,i)}A(i){return"outputCategoryMask"in i&&(this.outputCategoryMask=i.outputCategoryMask??!1),"outputConfidenceMasks"in i&&(this.outputConfidenceMasks=i.outputConfidenceMasks??!0),super.l(i)}segment(i,t,e,n){var s=typeof e!="function"?e:{};if(this.m=typeof e=="function"?e:n,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,e=this.J+1,n=new Nv,t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var r=new xf;Lf(r,!0),Ca(r,1,t.keypoint.x),Ca(r,2,t.keypoint.y),An(n,1,zf,r)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");{let o=new vE;for(r of t.scribble)Lf(t=new xf,!0),Ca(t,1,r.x),Ca(t,2,r.y),ul(o,1,xf,t);An(n,2,zf,o)}}this.h.addProtoToStream(n.h(),"mediapipe.tasks.vision.interactive_segmenter_legacy.proto.RegionOfInterest","roi_in",e),Ln(this,i,s);t:{try{let o=new jf(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.m){var a=o;break t}this.m(o)}finally{Ou(this)}a=void 0}return a}u(){var i=new en;ke(i,"image_in"),ke(i,"roi_in"),ke(i,"norm_rect_in");var t=new tn;Qn(t,Lv,this.i);var e=new Wi;ji(e,2,"mediapipe.tasks.vision.interactive_segmenter_legacy.InteractiveSegmenterLegacyGraph"),Fe(e,"IMAGE:image_in"),Fe(e,"ROI:roi_in"),Fe(e,"NORM_RECT:norm_rect_in"),e.A(t),gn(i,e),Uu(this,i),this.outputConfidenceMasks&&(me(i,"confidence_masks"),ae(e,"CONFIDENCE_MASKS:confidence_masks"),Ga(this,"confidence_masks"),this.h.ia("confidence_masks",(n,s)=>{this.confidenceMasks=n.map(r=>Wa(this,r,!0,!this.m)),bt(this,s)}),this.h.attachEmptyPacketListener("confidence_masks",n=>{this.confidenceMasks=[],bt(this,n)})),this.outputCategoryMask&&(me(i,"category_mask"),ae(e,"CATEGORY_MASK:category_mask"),Ga(this,"category_mask"),this.h.ha("category_mask",(n,s)=>{this.categoryMask=Wa(this,n,!1,!this.m),bt(this,s)}),this.h.attachEmptyPacketListener("category_mask",n=>{this.categoryMask=void 0,bt(this,n)})),me(i,"quality_scores"),ae(e,"QUALITY_SCORES:quality_scores"),this.h.attachFloatVectorListener("quality_scores",(n,s)=>{this.qualityScores=n,bt(this,s)}),this.h.attachEmptyPacketListener("quality_scores",n=>{this.categoryMask=void 0,bt(this,n)}),i=i.h(),this.setGraph(new Uint8Array(i),!0)}};Xn.prototype.segment=Xn.prototype.segment,Xn.prototype.setOptions=Xn.prototype.A,Xn.createFromModelPath=function(i,t){return ce(Xn,i,{baseOptions:{modelAssetPath:t}})},Xn.createFromModelBuffer=function(i,t){return ce(Xn,i,{baseOptions:{modelAssetBuffer:t}})},Xn.createFromOptions=function(i,t){return ce(Xn,i,t)};var fn=class extends Qi{constructor(i,t){super(new In(i,t),"input_frame_gpu","norm_rect",!1),this.m={detections:[]},Lt(i=this.i=new Dv,0,1,t=new ze)}D(){return"ObjectDetector"}get baseOptions(){return de(this.i,ze,1)}set baseOptions(i){Lt(this.i,0,1,i)}A(i){return i.displayNamesLocale!==void 0?$t(this.i,2,Ts(i.displayNamesLocale)):"displayNamesLocale"in i&&$t(this.i,2),i.maxResults!==void 0?Jn(this.i,3,i.maxResults):"maxResults"in i&&$t(this.i,3),i.scoreThreshold!==void 0?Dt(this.i,4,i.scoreThreshold):"scoreThreshold"in i&&$t(this.i,4),i.categoryAllowlist!==void 0?su(this.i,5,i.categoryAllowlist):"categoryAllowlist"in i&&$t(this.i,5),i.categoryDenylist!==void 0?su(this.i,6,i.categoryDenylist):"categoryDenylist"in i&&$t(this.i,6),this.l(i)}H(i,t){return this.m={detections:[]},Ln(this,i,t),this.m}I(i,t,e){return this.m={detections:[]},es(this,i,e,t),this.m}u(){var i=new en;ke(i,"input_frame_gpu"),ke(i,"norm_rect"),me(i,"detections");var t=new tn;Qn(t,xE,this.i);var e=new Wi;ji(e,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),Fe(e,"IMAGE:input_frame_gpu"),Fe(e,"NORM_RECT:norm_rect"),ae(e,"DETECTIONS:detections"),e.A(t),gn(i,e),this.h.attachProtoVectorListener("detections",(n,s)=>{for(let r of n)n=pv(r),this.m.detections.push(Ov(n));bt(this,s)}),this.h.attachEmptyPacketListener("detections",n=>{bt(this,n)}),i=i.h(),this.setGraph(new Uint8Array(i),!0)}};fn.prototype.detectForVideo=fn.prototype.I,fn.prototype.detect=fn.prototype.H,fn.prototype.setOptions=fn.prototype.A,fn.createFromModelPath=async function(i,t){return ce(fn,i,{baseOptions:{modelAssetPath:t}})},fn.createFromModelBuffer=function(i,t){return ce(fn,i,{baseOptions:{modelAssetBuffer:t}})},fn.createFromOptions=function(i,t){return ce(fn,i,t)};var Qf=class{constructor(i,t,e){this.landmarks=i,this.worldLandmarks=t,this.segmentationMasks=e}close(){this.segmentationMasks?.forEach(i=>{i.close()})}};function H_(i){i.landmarks=[],i.worldLandmarks=[],i.segmentationMasks=void 0}function V_(i){try{let t=new Qf(i.landmarks,i.worldLandmarks,i.segmentationMasks);if(!i.v)return t;i.v(t)}finally{Ou(i)}}Qf.prototype.close=Qf.prototype.close;var Vi=class extends Qi{constructor(i,t){super(new In(i,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Lt(i=this.i=new Fv,0,1,t=new ze),this.C=new wv,Lt(this.i,0,3,this.C),this.m=new Tv,Lt(this.i,0,2,this.m),Jn(this.m,4,1),Dt(this.m,2,.5),Dt(this.C,2,.5),Dt(this.i,4,.5)}D(){return"PoseLandmarker"}get baseOptions(){return de(this.i,ze,1)}set baseOptions(i){Lt(this.i,0,1,i)}A(i){return"numPoses"in i&&Jn(this.m,4,i.numPoses??1),"minPoseDetectionConfidence"in i&&Dt(this.m,2,i.minPoseDetectionConfidence??.5),"minTrackingConfidence"in i&&Dt(this.i,4,i.minTrackingConfidence??.5),"minPosePresenceConfidence"in i&&Dt(this.C,2,i.minPosePresenceConfidence??.5),"outputSegmentationMasks"in i&&(this.outputSegmentationMasks=i.outputSegmentationMasks??!1),this.l(i)}H(i,t,e){var n=typeof t!="function"?t:{};return this.v=typeof t=="function"?t:e,H_(this),Ln(this,i,n),V_(this)}I(i,t,e,n){var s=typeof e!="function"?e:{};return this.v=typeof e=="function"?e:n,H_(this),es(this,i,s,t),V_(this)}u(){var i=new en;ke(i,"image_in"),ke(i,"norm_rect"),me(i,"normalized_landmarks"),me(i,"world_landmarks"),me(i,"segmentation_masks");var t=new tn;Qn(t,yE,this.i);var e=new Wi;ji(e,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Fe(e,"IMAGE:image_in"),Fe(e,"NORM_RECT:norm_rect"),ae(e,"NORM_LANDMARKS:normalized_landmarks"),ae(e,"WORLD_LANDMARKS:world_landmarks"),e.A(t),gn(i,e),Uu(this,i),this.h.attachProtoVectorListener("normalized_landmarks",(n,s)=>{this.landmarks=[];for(let r of n)n=bl(r),this.landmarks.push(El(n));bt(this,s)}),this.h.attachEmptyPacketListener("normalized_landmarks",n=>{this.landmarks=[],bt(this,n)}),this.h.attachProtoVectorListener("world_landmarks",(n,s)=>{this.worldLandmarks=[];for(let r of n)n=Ia(r),this.worldLandmarks.push(La(n));bt(this,s)}),this.h.attachEmptyPacketListener("world_landmarks",n=>{this.worldLandmarks=[],bt(this,n)}),this.outputSegmentationMasks&&(ae(e,"SEGMENTATION_MASK:segmentation_masks"),Ga(this,"segmentation_masks"),this.h.ia("segmentation_masks",(n,s)=>{this.segmentationMasks=n.map(r=>Wa(this,r,!0,!this.v)),bt(this,s)}),this.h.attachEmptyPacketListener("segmentation_masks",n=>{this.segmentationMasks=[],bt(this,n)})),i=i.h(),this.setGraph(new Uint8Array(i),!0)}};Vi.prototype.detectForVideo=Vi.prototype.I,Vi.prototype.detect=Vi.prototype.H,Vi.prototype.setOptions=Vi.prototype.A,Vi.createFromModelPath=function(i,t){return ce(Vi,i,{baseOptions:{modelAssetPath:t}})},Vi.createFromModelBuffer=function(i,t){return ce(Vi,i,{baseOptions:{modelAssetBuffer:t}})},Vi.createFromOptions=function(i,t){return ce(Vi,i,t)},Vi.POSE_CONNECTIONS=Qv,Ce("module$exports$google3$third_party$mediapipe$tasks$web$vision$pose_landmarker$pose_landmarker.PoseLandmarker.POSE_CONNECTIONS",Vi.POSE_CONNECTIONS);var zu=class{constructor({video:t,wasmBase:e,model:n,onStatus:s}={}){this.video=t,this.wasmBase=e||"assets/mediapipe/wasm",this.modelUrl=n||"assets/mediapipe/hand_landmarker.task",this.onStatus=s||(()=>{}),this.landmarker=null,this.stream=null,this.running=!1,this.detecting=!1,this.lastVideoTime=-1,this.lastDetectAt=0,this.detectInterval=1e3/32,this.sensitivity=1,this.present=0,this.pinch=!1,this.pinchRatio=1,this.raw={x:.5,y:.5,palm:.1},this.sx=0,this.sy=0,this.velocity=0,this.energy=0,this.twoHands=0,this.fps=0,this._lastX=null,this._lastY=null,this._lastT=0,this._detectFrames=0,this._detectFpsT=0,this._raf=0,this._fpsSmooth=0}async start(){this.onStatus({state:"loading",text:"正在唤醒手势…"});try{await this._openCamera(),await this._createLandmarker()}catch(t){return console.warn("[hands] 启动失败",t),this.onStatus({state:"error",text:this._friendlyError(t),error:t}),this.stop(),!1}return this.running=!0,this.onStatus({state:"ready",text:"手势已开启 · 手掌靠近试试"}),this._loop(),!0}async _openCamera(){if(!navigator.mediaDevices?.getUserMedia)throw new Error("当前环境不支持摄像头（需 https 或 localhost）");this.stream=await navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user",width:{ideal:960},height:{ideal:720},frameRate:{ideal:30,max:60}}}),this.video.srcObject=this.stream,this.video.muted=!0,this.video.playsInline=!0,await this.video.play(),this.video.videoWidth===0&&await new Promise(t=>{let e=()=>t();this.video.addEventListener("loadeddata",e,{once:!0}),setTimeout(e,2500)})}async _createLandmarker(){let t=await Ms.forVisionTasks(this.wasmBase),e=n=>wi.createFromOptions(t,{baseOptions:{modelAssetPath:this.modelUrl,delegate:n},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.45,minHandPresenceConfidence:.4,minTrackingConfidence:.4});try{this.landmarker=await e("GPU")}catch(n){console.warn("[hands] GPU 不可用，回退 CPU",n),this.onStatus({state:"loading",text:"GPU 不可用 · 切换 CPU 模式"}),this.landmarker=await e("CPU")}}_friendlyError(t){let e=t?.name||"";return e==="NotAllowedError"||e==="PermissionDeniedError"?"摄像头权限被拒绝 · 可改用鼠标模式":e==="NotFoundError"?"没有找到摄像头 · 可改用鼠标模式":e==="NotReadableError"?"摄像头被其他程序占用 · 可改用鼠标模式":"手势启动失败 · 可改用鼠标模式"}setSensitivity(t){this.sensitivity=Jt(t,.6,1.6)}_loop(){let t=()=>{this.running&&(this._raf=requestAnimationFrame(t),this._detect())};this._raf=requestAnimationFrame(t)}_detect(){let t=this.video;if(!this.landmarker||!t||t.readyState<2)return;let e=performance.now();if(e-this.lastDetectAt<this.detectInterval||t.currentTime===this.lastVideoTime)return;this.lastVideoTime=t.currentTime,this.lastDetectAt=e;let n=null;try{n=this.landmarker.detectForVideo(t,e)}catch(M){console.warn("[hands] detect 失败",M);return}let s=n?.landmarks?.length||0;if(this.twoHands=s,!s){this._hasHand=!1;return}this._hasHand=!0;let r=null,a=-1;for(let M=0;M<n.landmarks.length;M++){let A=n.landmarks[M],S=Math.hypot(A[0].x-A[9].x,A[0].y-A[9].y);S>a&&(a=S,r=A)}if(!r)return;let o=r,l=(o[0].x+o[5].x+o[9].x+o[13].x+o[17].x)/5,c=(o[0].y+o[5].y+o[9].y+o[13].y+o[17].y)/5,h=Math.hypot(o[0].x-o[9].x,o[0].y-o[9].y)+1e-5,d=o[4],u=o[8],g=Math.hypot(d.x-u.x,d.y-u.y)/h;!this.pinch&&g<.62?this.pinch=!0:this.pinch&&g>.92&&(this.pinch=!1);let x=this.pinch?(d.x+u.x)/2:l,p=this.pinch?(d.y+u.y)/2:c,m=1.28*this.sensitivity;this.raw.x=Jt(.5+(1-x-.5)*m,-.15,1.15),this.raw.y=Jt(.5+(p-.5)*m,-.15,1.15),this.raw.palm=h,this.pinchRatio=g,this.proximity=Ea(.055,.2,h)}update(t,e,n){let s=this.running&&this._hasHand;this.present=Ye(this.present,s?1:0,s?7:4.5,t);let r=this.raw.x*e,a=this.raw.y*n;this._lastX==null&&(this.sx=r,this.sy=a,this._lastX=r,this._lastY=a),this.sx=Ye(this.sx,r,16,t),this.sy=Ye(this.sy,a,16,t);let o=performance.now(),l=Math.max(1/120,(o-(this._lastT||o))/1e3),c=Math.hypot(this.sx-this._lastX,this.sy-this._lastY)/l;this.velocity=Ye(this.velocity,c,8,t),this._lastX=this.sx,this._lastY=this.sy,this._lastT=o;let h=Jt(this.velocity/900),d=s?Jt(.35+h*.65+(this.pinch?.15:0)):0;return this.energy=Ye(this.energy,d,6,t),this.fps=Ye(this.fps,this.twoHands?30:0,3,t),{active:this.present>.12,present:this.present,x:this.sx,y:this.sy,pinch:this.pinch&&this.present>.3,energy:this.energy,proximity:this.proximity||0,hands:this.twoHands,velocity:this.velocity}}getWorldPosition(t,e={x:0,y:0,z:0}){let n=this.sx/Math.max(1,t.width)*2-1,s=-(this.sy/Math.max(1,t.height)*2-1),r=8.2,a=2*r*Math.tan(t.camera.fov*Math.PI/360),o=a*t.camera.aspect;return e.x=t.camera.position.x+n*o/2,e.y=t.camera.position.y+s*a/2,e.z=t.camera.position.z-r,e}stop(){if(this.running=!1,this._raf&&cancelAnimationFrame(this._raf),this._raf=0,this.stream){for(let t of this.stream.getTracks())t.stop();this.stream=null}if(this.video&&(this.video.srcObject=null),this.landmarker){try{this.landmarker.close()}catch{}this.landmarker=null}this._hasHand=!1,this.present=0}};var ft=i=>document.getElementById(i),Gu=class{constructor(){this.handlers=new Map,this.app=ft("app"),this.loadingScreen=ft("loadingScreen"),this.loadingBar=ft("loadingBar"),this.loadingTip=ft("loadingTip"),this.toastEl=ft("toast"),this.toastTimer=0,this.settingsEl=ft("settingsPanel"),this.startOverlay=ft("startOverlay"),this.viewerEl=ft("photoViewer"),this.helpEl=ft("helpPanel"),this.handCursor=ft("handCursor"),this.rippleLayer=ft("rippleLayer"),this.cd={year:ft("cdYear"),days:ft("cdDays"),hours:ft("cdHours"),mins:ft("cdMins"),secs:ft("cdSecs")},this.statusEl=ft("status"),this.statusText=ft("statusText"),this.playerEl=ft("player"),this.playerSub=ft("playerSub"),this.greetingEl=ft("greeting"),this.greetingSubEl=ft("greetingSub"),this.modeText=ft("modeText"),this.modeIcon=ft("modeIcon"),this._bind(),this.updateCountdown(),this._countdownTimer=setInterval(()=>this.updateCountdown(),1e3)}on(t,e){return this.handlers.set(t,e),this}emit(t,e){let n=this.handlers.get(t);n&&n(e)}_bind(){ft("btnStartGesture")?.addEventListener("click",()=>this.emit("start","gesture")),ft("btnStartPointer")?.addEventListener("click",()=>this.emit("start","pointer")),ft("btnUpload")?.addEventListener("click",()=>ft("fileInput")?.click()),ft("fileInput")?.addEventListener("change",c=>{let h=c.target.files;h?.length&&this.emit("upload",h),c.target.value=""}),ft("btnMusic")?.addEventListener("click",()=>this.emit("toggleMusic")),ft("btnPlayer")?.addEventListener("click",()=>this.emit("toggleMusic")),ft("btnScene")?.addEventListener("click",()=>this.emit("cycleMood")),ft("btnFullscreen")?.addEventListener("click",()=>this.toggleFullscreen()),ft("btnSettings")?.addEventListener("click",()=>this.openSettings()),ft("btnCloseSettings")?.addEventListener("click",()=>this.closeSettings()),ft("btnHelp")?.addEventListener("click",()=>this.openHelp()),ft("btnCloseHelp")?.addEventListener("click",()=>this.closeHelp()),ft("photoViewerBackdrop")?.addEventListener("click",()=>this.closePhoto()),ft("btnCloseViewer")?.addEventListener("click",()=>this.closePhoto()),ft("btnToggleGalaxy")?.addEventListener("click",()=>this.emit("toggleGalaxy"));let t=ft("inputGreeting"),e=ft("inputSub"),n=0,s=()=>{clearTimeout(n),n=setTimeout(()=>{this.emit("settings",{greeting:t.value.trim()||"悦悦，圣诞快乐！",sub:e.value.trim()})},220)};t?.addEventListener("input",s),e?.addEventListener("input",s),ft("checkMusic")?.addEventListener("change",c=>this.emit("settings",{music:c.target.checked})),ft("rangeVolume")?.addEventListener("input",c=>this.emit("settings",{volume:Number(c.target.value)/100}));let r=ft("rangeSensitivity"),a=ft("outSensitivity");r?.addEventListener("input",c=>{let h=Number(c.target.value)/100;a&&(a.textContent=`${h.toFixed(2)}×`),this.emit("settings",{sensitivity:h})}),ft("checkPreview")?.addEventListener("change",c=>{ft("previewBox")?.classList.toggle("on",c.target.checked),this.emit("settings",{preview:c.target.checked})});let o=ft("rangePhotoSize"),l=ft("outPhotoSize");o?.addEventListener("input",c=>{let h=Number(c.target.value)/100;l&&(l.textContent=`${h.toFixed(2)}×`),this.emit("settings",{photoSize:h})}),ft("rangeSnow")?.addEventListener("input",c=>{let h=Number(c.target.value);ft("outSnow")&&(ft("outSnow").textContent=["无","中","密"][h]||"中"),this.emit("settings",{snow:[.25,1,1.55][h]??1})}),ft("checkAutoRotate")?.addEventListener("change",c=>this.emit("settings",{autoRotate:c.target.checked})),ft("moodRow")?.addEventListener("click",c=>{let h=c.target.closest(".mood");h&&this.emit("setMood",Number(h.dataset.mood))}),ft("btnResetPhotos")?.addEventListener("click",()=>this.emit("resetPhotos")),ft("btnRestartCamera")?.addEventListener("click",()=>this.emit("restartCamera")),document.addEventListener("pointerdown",c=>{this.settingsEl.classList.contains("open")&&(this.settingsEl.contains(c.target)||c.target.closest?.("#btnSettings")||this.closeSettings())}),window.addEventListener("keydown",c=>{let h=(c.target?.tagName||"").toLowerCase();h==="input"||h==="textarea"||(c.code==="Space"?(c.preventDefault(),this.emit("toggleGalaxy")):c.code==="KeyF"?this.toggleFullscreen():c.code==="KeyM"?this.emit("toggleMusic"):c.code==="KeyS"?this.settingsEl.classList.contains("open")?this.closeSettings():this.openSettings():c.code==="KeyU"?ft("fileInput")?.click():c.code==="Escape"&&(this.isPhotoOpen()?this.closePhoto():this.helpEl?.classList.contains("open")?this.closeHelp():this.closeSettings()))}),document.addEventListener("fullscreenchange",()=>{ft("btnFullscreen")?.classList.toggle("active",!!document.fullscreenElement)})}setLoading(t,e){this.loadingBar&&(this.loadingBar.style.width=`${Math.round(Math.max(0,Math.min(1,t))*100)}%`),e&&this.loadingTip&&(this.loadingTip.textContent=e)}hideLoading(){this.setLoading(1),setTimeout(()=>this.loadingScreen?.classList.add("hidden"),320)}hideStart(){this.startOverlay?.classList.add("hidden")}showStart(){this.startOverlay?.classList.remove("hidden")}toast(t,e=2400){this.toastEl&&(this.toastEl.textContent=t,this.toastEl.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this.toastEl.classList.remove("show"),e))}setStatus(t,e){this.statusEl&&(this.statusEl.dataset.state=t),this.statusText&&e&&(this.statusText.textContent=e)}setHint(t,e){let n=ft("hintText"),s=ft("hintSub");n&&t&&(n.textContent=t),s&&e&&(s.textContent=e)}setGreeting(t,e){this.greetingEl&&(this.greetingEl.textContent=t),this.greetingSubEl&&(this.greetingSubEl.textContent=e||""),this.greetingSubEl&&(this.greetingSubEl.style.display=e?"":"none")}openPhoto(t,e){let n=this.viewerEl;if(!n||!t)return;let s=ft("photoViewerImg"),r=ft("photoViewerTitle"),a=ft("photoViewerSub"),o=t.src||t.thumb||"";s&&(s.src=o,s.alt=t.caption||"照片"),r&&(r.textContent=t.caption||t.place||"这一刻"),a&&(a.textContent=[t.place,t.date].filter(Boolean).join(" · ")),n.classList.add("open"),n.setAttribute("aria-hidden","false"),this.photoOpen=!0,this._viewerSrc=e}closePhoto(){this.viewerEl&&(this.viewerEl.classList.remove("open"),this.viewerEl.setAttribute("aria-hidden","true"),this.photoOpen=!1)}isPhotoOpen(){return!!this.photoOpen}openHelp(){this.helpEl?.classList.add("open"),this.helpEl?.setAttribute("aria-hidden","false")}closeHelp(){this.helpEl?.classList.remove("open"),this.helpEl?.setAttribute("aria-hidden","true")}setMusicPlaying(t){this.playerEl?.classList.toggle("playing",t),ft("btnMusic")?.classList.toggle("active",t),this.playerSub&&(this.playerSub.textContent=t?"正在播放 · 雪夜八音盒":"轻点开启音乐")}setGalaxy(t){this.modeText&&(this.modeText.textContent=t?"让树回来":"散作星河"),this.modeIcon&&(this.modeIcon.textContent=t?"✧":"✦"),ft("btnToggleGalaxy")?.classList.toggle("active",t),this.hintSub}updateCountdown(){let t=new Date,e=t.getFullYear(),n=new Date(e,11,25,0,0,0);t.getTime()>=n.getTime()&&(e+=1,n=new Date(e,11,25,0,0,0));let s=Math.max(0,n.getTime()-t.getTime()),r=Math.floor(s/1e3),a=Math.floor(r/86400),o=Math.floor(r%86400/3600),l=Math.floor(r%3600/60),c=r%60;this.cd.year&&(this.cd.year.textContent=String(e)),this.cd.days&&(this.cd.days.textContent=String(a)),this.cd.hours&&(this.cd.hours.textContent=Lh(o)),this.cd.mins&&(this.cd.mins.textContent=Lh(l)),this.cd.secs&&(this.cd.secs.textContent=Lh(c))}openSettings(){this.settingsEl?.classList.add("open")}closeSettings(){this.settingsEl?.classList.remove("open")}toggleSettings(){this.settingsEl?.classList.contains("open")?this.closeSettings():this.openSettings()}applySettings(t){let e=ft("inputGreeting"),n=ft("inputSub");e&&document.activeElement!==e&&(e.value=t.greeting||""),n&&document.activeElement!==n&&(n.value=t.sub||"");let s=ft("checkMusic");s&&(s.checked=!!t.music);let r=ft("rangeVolume");r&&(r.value=String(Math.round((t.volume??.7)*100)));let a=ft("rangeSensitivity");a&&(a.value=String(Math.round((t.sensitivity??1)*100)));let o=ft("outSensitivity");o&&(o.textContent=`${(t.sensitivity??1).toFixed(2)}×`);let l=ft("rangePhotoSize");l&&(l.value=String(Math.round((t.photoSize??1)*100)));let c=ft("outPhotoSize");c&&(c.textContent=`${(t.photoSize??1).toFixed(2)}×`);let h=ft("rangeSnow");if(h){let f=(t.snow??1)>1.3?2:(t.snow??1)<.6?0:1;h.value=String(f),ft("outSnow")&&(ft("outSnow").textContent=["无","中","密"][f])}let d=ft("checkAutoRotate");d&&(d.checked=!!t.autoRotate);let u=ft("checkPreview");u&&(u.checked=!!t.preview),ft("previewBox")?.classList.toggle("on",!!t.preview),this.setMood(t.mood??0),this.setGreeting(t.greeting,t.sub),this.setMusicPlaying(!1)}setMood(t){document.querySelectorAll("#moodRow .mood").forEach(n=>{n.classList.toggle("active",Number(n.dataset.mood)===t)});let e=vn[t];e&&document.documentElement.style.setProperty("--mood-glow",e.aurora[0])}async toggleFullscreen(){try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{this.toast("这个浏览器不支持全屏，按 F11 也可以")}}updateCursor(t,e,{visible:n=!0,pinch:s=!1,grab:r=!1}={}){let a=this.handCursor;a&&(a.hidden=!1,a.style.transform=`translate3d(${t.toFixed(1)}px, ${e.toFixed(1)}px, 0)`,a.classList.toggle("show",n),a.classList.toggle("pinching",s&&!r),a.classList.toggle("grab",r))}hideCursor(){this.handCursor?.classList.remove("show","pinching","grab")}ripple(t,e,n="rgba(160,235,255,0.75)"){if(!this.rippleLayer)return;let s=document.createElement("span");s.className="ripple",s.style.left=`${t}px`,s.style.top=`${e}px`,s.style.borderColor=n,this.rippleLayer.appendChild(s),setTimeout(()=>s.remove(),950)}setUIHidden(t){this.app?.classList.toggle("ui-hidden",t)}};var wl=i=>typeof i=="number"&&Number.isFinite(i)?Math.min(1,Math.max(0,i)):0,Qp=(i,t,e)=>Math.min(e,Math.max(t,i)),tm=i=>440*Math.pow(2,(i-69)/12),Ui=(i,t)=>i+Math.random()*(t-i),tx=i=>i[Math.random()*i.length|0],ex={C:{bass:36,notes:[48,55,64]},G:{bass:31,notes:[43,50,59]},F:{bass:29,notes:[41,48,57]},Am:{bass:33,notes:[45,52,60]}},GE=["C","G","C","Am","C","G","F","F","C","G","C","Am","C","G","F","F","G","C","F","G"];function HE(){let i=[],t=(n,s,r,a=1,o=1)=>{i.push({t:(n-1)*4+s,type:"mel",midi:r,dur:a,vel:o})};GE.forEach((n,s)=>{i.push({t:s*4,type:"pad",chord:n}),i.push({t:s*4,type:"bass",midi:ex[n].bass})});let e=[.95,.3,.6,.28,.85,.3,.55,.28];for(let n=0;n<20;n++){let s=n<2?.65:1;for(let r=0;r<8;r++)i.push({t:n*4+r*.5+Ui(-.012,.012),type:"bell",vel:e[r]*s})}return t(1,0,72,1,.42),t(1,1,76,1,.4),t(1,2,79,1,.4),t(1,3,84,1.5,.38),t(2,0,71,1,.36),t(2,1,74,1,.36),t(2,2,79,1,.36),t(2,3,83,1.5,.34),t(3,0,64,1,.9),t(3,1,64,1,.85),t(3,2,64,2,.9),t(4,0,64,1,.85),t(4,1,64,1,.85),t(4,2,64,2,.88),t(5,0,64,1,.92),t(5,1,67,1,.95),t(5,2,72,1,1),t(5,3,74,1,1),t(6,0,76,2.5,.95),t(7,0,65,1,.9),t(7,1,65,.5,.85),t(7,1.5,65,.5,.85),t(7,2,65,1,.9),t(7,3,65,1,.9),t(8,0,64,1,.9),t(8,1,64,1,.85),t(8,2,64,1,.88),t(8,3,64,1,.88),t(9,0,62,1,.9),t(9,1,62,1,.85),t(9,2,64,1,.9),t(9,3,62,1,.9),t(10,0,67,2,.95),t(11,0,64,1,.9),t(11,1,64,1,.85),t(11,2,64,2,.9),t(12,0,64,1,.85),t(12,1,64,1,.85),t(12,2,64,2,.88),t(13,0,64,1,.92),t(13,1,67,1,.95),t(13,2,72,1,1),t(13,3,74,1,1),t(14,0,76,2.5,.95),t(15,0,65,1,.9),t(15,1,65,.5,.85),t(15,1.5,65,.5,.85),t(15,2,65,1,.9),t(15,3,65,1,.9),t(16,0,64,1,.9),t(16,1,64,1,.85),t(16,2,64,1,.88),t(16,3,64,1,.88),t(17,0,67,1,.95),t(17,1,67,1,.9),t(17,2,65,1,.9),t(17,3,62,1,.9),t(18,0,72,2,.9),t(18,2.5,76,.25,.75),t(18,2.75,79,.25,.75),t(18,3,84,.75,.8),t(19,0,72,1,.36),t(19,1,69,1,.34),t(19,2,72,1,.34),t(19,3,77,1.5,.32),t(20,0,71,1,.34),t(20,1,74,1,.34),t(20,2,79,1,.32),t(20,3,74,1.5,.3),i.sort((n,s)=>n.t-s.t),i}var Hu=class{constructor({volume:t=.65}={}){this._volume=wl(t),this._intensity=0,this._ready=!1,this._ctx=null,this._initPromise=null,this._musicWanted=!1,this._musicOn=!1,this._sfxWanted=!0,this._events=HE(),this._loopDur=48,this._schedTimer=null,this._stopTimer=null,this._loopAnchor=0,this._loopCount=0,this._evtIndex=0,this._lastTick=0,this._sparkleAt=0,this._ctx=null,this._analyser=null,this._noiseBuf=null,this._persistentOscs=[],this._master=null,this._limiter=null,this._dryBus=null,this._musicBus=null,this._musicFilter=null,this._musicFade=null,this._musicSend=null,this._sfxBus=null,this._sfxFade=null,this._sfxSend=null,this._reverb=null,this._reverbReturn=null,this._shimmerLevel=null}get ready(){return this._ready}get musicEnabled(){return this._musicWanted}get sfxEnabled(){return this._sfxWanted}get volume(){return this._volume}get context(){return this._ctx}getAnalyser(){return this._analyser}async init(){if(!this._ready){if(this._initPromise)return this._initPromise;this._initPromise=this._createGraph();try{await this._initPromise}finally{this._initPromise=null}}}async _createGraph(){let t=typeof window<"u"?window.AudioContext||window.webkitAudioContext:null;if(!t){console.warn("[ChristmasAudio] 当前环境不支持 WebAudio，音频已跳过。");return}try{let e=new t({latencyHint:"interactive"});this._ctx=e,this._buildGraph(e),this._ready=!0;try{e.state==="suspended"&&await e.resume()}catch(n){console.info("[ChristmasAudio] AudioContext 仍处于挂起状态，等待用户手势 unlock()。",n)}this._musicWanted&&this._startMusic()}catch(e){console.warn("[ChristmasAudio] 初始化音频失败：",e),this._teardownGraph();try{this._ctx&&this._ctx.state!=="closed"&&this._ctx.close()}catch{}this._ctx=null}}_buildGraph(t){let e=Math.floor(t.sampleRate*2),n=t.createBuffer(1,e,t.sampleRate),s=n.getChannelData(0);for(let c=0;c<e;c++)s[c]=Math.random()*2-1;this._noiseBuf=n,this._master=t.createGain(),this._master.gain.value=this._volumeToGain(this._volume),this._limiter=t.createDynamicsCompressor(),this._limiter.threshold.value=-8,this._limiter.knee.value=6,this._limiter.ratio.value=12,this._limiter.attack.value=.003,this._limiter.release.value=.25,this._analyser=t.createAnalyser(),this._analyser.fftSize=2048,this._analyser.smoothingTimeConstant=.55,this._dryBus=t.createGain(),this._dryBus.gain.value=1,this._dryBus.connect(this._master),this._master.connect(this._limiter),this._limiter.connect(this._analyser),this._analyser.connect(t.destination),this._reverb=t.createConvolver(),this._reverb.buffer=this._makeImpulse(t,2.8),this._reverbReturn=t.createGain(),this._reverbReturn.gain.value=.55,this._reverb.connect(this._reverbReturn),this._reverbReturn.connect(this._dryBus),this._musicBus=t.createGain(),this._musicFilter=t.createBiquadFilter(),this._musicFilter.type="lowpass",this._musicFilter.frequency.value=3200+2200*this._intensity,this._musicFilter.Q.value=.35,this._musicFade=t.createGain(),this._musicFade.gain.value=0,this._musicSend=t.createGain(),this._musicSend.gain.value=.26,this._musicBus.connect(this._musicFilter),this._musicFilter.connect(this._musicFade),this._musicFade.connect(this._dryBus),this._musicFade.connect(this._musicSend),this._musicSend.connect(this._reverb),this._sfxBus=t.createGain(),this._sfxFade=t.createGain(),this._sfxFade.gain.value=this._sfxWanted?.85:0,this._sfxSend=t.createGain(),this._sfxSend.gain.value=.3,this._sfxBus.connect(this._sfxFade),this._sfxFade.connect(this._dryBus),this._sfxFade.connect(this._sfxSend),this._sfxSend.connect(this._reverb),this._shimmerLevel=t.createGain(),this._shimmerLevel.gain.value=.014*this._intensity;let r=t.createGain();r.gain.value=.82;let a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=5200,this._shimmerLevel.connect(r),r.connect(a),a.connect(this._musicBus);for(let[c,h]of[[1046.5,"sine"],[1568,"sine"]]){let d=t.createOscillator();d.type=h,d.frequency.value=c;let u=t.createGain();u.gain.value=.42,d.connect(u),u.connect(this._shimmerLevel),d.start(),this._persistentOscs.push(d);let f=t.createOscillator();f.type="sine",f.frequency.value=Ui(.12,.2);let g=t.createGain();g.gain.value=2.2,f.connect(g),g.connect(d.detune),f.start(),this._persistentOscs.push(f)}let o=t.createOscillator();o.type="sine",o.frequency.value=.09;let l=t.createGain();l.gain.value=.18,o.connect(l),l.connect(r.gain),o.start(),this._persistentOscs.push(o)}_makeImpulse(t,e){let n=t.sampleRate,s=Math.max(1,Math.floor(n*e)),r=t.createBuffer(2,s,n);for(let a=0;a<2;a++){let o=r.getChannelData(a);for(let l=0;l<s;l++){let c=l/s,h=c<.01?c/.01:1;o[l]=(Math.random()*2-1)*Math.pow(1-c,2.6)*h}}return r}async unlock(){if(this._ctx){try{await this._ctx.resume()}catch(t){console.info("[ChristmasAudio] unlock 失败（可能缺少用户手势）：",t);return}this._musicWanted&&!this._musicOn&&this._startMusic()}}dispose(){this._stopScheduler(),clearTimeout(this._stopTimer),this._stopTimer=null,this._ready=!1,this._musicOn=!1;for(let e of this._persistentOscs){try{e.stop()}catch{}try{e.disconnect()}catch{}}this._persistentOscs=[],this._teardownGraph();let t=this._ctx;if(this._ctx=null,t&&t.state!=="closed")try{let e=t.close();e&&typeof e.catch=="function"&&e.catch(()=>{})}catch{}}_teardownGraph(){let t=[this._shimmerLevel,this._sfxSend,this._sfxFade,this._sfxBus,this._musicSend,this._musicFade,this._musicFilter,this._musicBus,this._reverbReturn,this._reverb,this._analyser,this._limiter,this._master,this._dryBus];for(let e of t)if(e)try{e.disconnect()}catch{}this._master=null,this._limiter=null,this._analyser=null,this._dryBus=null,this._musicBus=null,this._musicFilter=null,this._musicFade=null,this._musicSend=null,this._sfxBus=null,this._sfxFade=null,this._sfxSend=null,this._reverb=null,this._reverbReturn=null,this._shimmerLevel=null,this._noiseBuf=null}setMusicEnabled(t){this._musicWanted=!!t,this._ready&&(this._musicWanted?this._startMusic():this._stopMusic())}setSfxEnabled(t){if(this._sfxWanted=!!t,!this._ready||!this._sfxFade)return;let e=this._ctx.currentTime;this._sfxFade.gain.setTargetAtTime(this._sfxWanted?.85:0,e,.12)}setVolume(t){if(this._volume=wl(t),!this._ready||!this._master)return;let e=this._ctx.currentTime;this._master.gain.setTargetAtTime(this._volumeToGain(this._volume),e,.08)}setGestureIntensity(t){let e=wl(t);if(Math.abs(e-this._intensity)<.01||(this._intensity=e,!this._ready))return;let n=this._ctx.currentTime;this._musicFilter.frequency.setTargetAtTime(3200+2200*e,n,.25),this._shimmerLevel.gain.setTargetAtTime(.014*e,n,.3)}_volumeToGain(t){return .85*Math.pow(t,1.35)}_startMusic(){if(!this._ctx||this._musicOn)return;this._stopTimer&&(clearTimeout(this._stopTimer),this._stopTimer=null);let t=this._ctx;this._musicOn=!0,this._stopScheduler(),this._loopAnchor=t.currentTime+.15,this._loopCount=0,this._evtIndex=0,this._lastTick=t.currentTime,this._sparkleAt=t.currentTime+2,this._tick(),this._schedTimer=setInterval(()=>this._tick(),25);let e=t.currentTime,n=this._musicFade.gain;this._holdParam(n,e),n.linearRampToValueAtTime(.9,e+1.4)}_stopMusic(){if(!this._ctx||!this._musicOn)return;this._musicOn=!1;let t=this._ctx.currentTime,e=this._musicFade.gain;this._holdParam(e,t),e.linearRampToValueAtTime(0,t+1.1),this._stopTimer&&clearTimeout(this._stopTimer),this._stopTimer=setTimeout(()=>{this._stopTimer=null,this._stopScheduler()},1200)}_stopScheduler(){this._schedTimer&&(clearInterval(this._schedTimer),this._schedTimer=null)}_holdParam(t,e){if(typeof t.cancelAndHoldAtTime=="function")t.cancelAndHoldAtTime(e);else{let n=t.value;t.cancelScheduledValues(e),t.setValueAtTime(n,e)}}_tick(){if(!this._musicOn||!this._ctx)return;let e=this._ctx.currentTime;e-this._lastTick>.5&&this._resync(e),this._lastTick=e;let n=e+.22,s=this._events,r=0;for(;r++<600;){this._evtIndex>=s.length&&(this._evtIndex=0,this._loopCount++);let a=s[this._evtIndex],o=this._loopAnchor+this._loopCount*this._loopDur+a.t*.6;if(o>n)break;this._evtIndex++,!(o<e-.05)&&this._renderEvent(a,o)}if(this._intensity>.45&&e>=this._sparkleAt){this._sparkleAt=e+Ui(1.4,3.4)/(.6+this._intensity);let a=[84,86,88,91,93,96];this._musicBox(e+.05,tx(a),.14+this._intensity*.12,{decayScale:.6})}}_resync(t){let e=t-this._loopAnchor;if(e<0)return;let n=Math.floor(e/this._loopDur),s=e-n*this._loopDur;this._loopCount=n;let r=this._events.findIndex(a=>a.t*.6>s+.01);r<0&&(r=this._events.length),this._evtIndex=r}_renderEvent(t,e){switch(t.type){case"mel":this._musicBox(e,t.midi,t.vel,{decayScale:Qp(t.dur*.55+.5,.75,1.25)});break;case"pad":this._pad(e,t.chord);break;case"bass":this._bass(e,t.midi);break;case"bell":this._sleighBell(e,t.vel);break;default:break}}_musicBox(t,e,n=1,s={}){let r=this._ctx;if(!r)return;let{decayScale:a=1,bus:o=this._musicBus,send:l=this._musicSend,pan:c=Ui(-.28,.28)}=s,h=tm(e),d=.16*wl(n),u=Qp(1.7-(e-60)*.018,.5,1.8)*a,f=r.createGain();f.gain.setValueAtTime(1e-4,t),f.gain.linearRampToValueAtTime(Math.max(2e-4,d),t+.006),f.gain.exponentialRampToValueAtTime(Math.max(1e-4,d*.22),t+u*.45),f.gain.exponentialRampToValueAtTime(1e-4,t+u);let g=r.createBiquadFilter();g.type="lowpass",g.frequency.value=Qp(h*9+1500,1500,9e3),g.Q.value=.3;let x=r.createStereoPanner();x.pan.value=c,f.connect(g),g.connect(x),x.connect(o),x.connect(l);let p=r.createOscillator();p.type="triangle",p.frequency.value=h;let m=r.createOscillator();m.type="sine",m.frequency.value=Math.min(h*2.01,14e3);let M=r.createGain();M.gain.value=.16,m.connect(M),M.connect(f),p.connect(f),p.start(t),m.start(t);let A=t+u+.08;p.stop(A),m.stop(A)}_pad(t,e){let n=this._ctx,s=ex[e];if(!n||!s)return;let r=4*.6,a=n.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.linearRampToValueAtTime(.06,t+.55),a.gain.setValueAtTime(.06,t+r-.5),a.gain.linearRampToValueAtTime(1e-4,t+r+.9);let o=n.createBiquadFilter();o.type="lowpass",o.frequency.value=1400,o.Q.value=.3,a.connect(o),o.connect(this._musicBus),o.connect(this._musicSend);let l=t+r+1;for(let c of s.notes){let h=tm(c);for(let d of[-5,5]){let u=n.createOscillator();u.type="triangle",u.frequency.value=h,u.detune.value=d;let f=n.createGain();f.gain.value=.5,u.connect(f),f.connect(a),u.start(t),u.stop(l)}}}_bass(t,e){let n=this._ctx;if(!n)return;let s=4*.6,r=tm(e),a=n.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.linearRampToValueAtTime(.1,t+.35),a.gain.setValueAtTime(.1,t+s-.5),a.gain.linearRampToValueAtTime(1e-4,t+s+.9);let o=n.createBiquadFilter();o.type="lowpass",o.frequency.value=320,o.Q.value=.5,a.connect(o),o.connect(this._musicBus);let l=n.createOscillator();l.type="sine",l.frequency.value=r;let c=n.createOscillator();c.type="sine",c.frequency.value=r*2;let h=n.createGain();h.gain.value=.14,c.connect(h),h.connect(a),l.connect(a);let d=t+s+1;l.start(t),c.start(t),l.stop(d),c.stop(d)}_sleighBell(t,e){let n=this._ctx;if(!n||!this._noiseBuf)return;let s=n.createBufferSource();s.buffer=this._noiseBuf;let r=n.createBiquadFilter();r.type="bandpass",r.frequency.value=Ui(5200,8200),r.Q.value=Ui(.7,1.4);let a=n.createBiquadFilter();a.type="highpass",a.frequency.value=2200;let o=n.createGain(),l=.028*wl(e);o.gain.setValueAtTime(1e-4,t),o.gain.linearRampToValueAtTime(Math.max(2e-4,l),t+.004),o.gain.exponentialRampToValueAtTime(1e-4,t+Ui(.07,.13));let c=n.createStereoPanner();c.pan.value=Ui(-.45,.45),s.connect(r),r.connect(a),a.connect(o),o.connect(c),c.connect(this._musicBus),c.connect(this._musicSend);let h=t+Ui(-.005,.005);s.start(h,Ui(0,1.6)),s.stop(h+.2)}_canSfx(){return this._ready&&this._sfxWanted&&!!this._ctx}_noiseSource(){let t=this._ctx.createBufferSource();return t.buffer=this._noiseBuf,t}playWhoosh(){if(!this._canSfx())return;let t=this._ctx,e=t.currentTime+.02,n=this._noiseSource(),s=t.createBiquadFilter();s.type="bandpass",s.Q.value=1.1,s.frequency.setValueAtTime(260,e),s.frequency.exponentialRampToValueAtTime(5200,e+.7),s.frequency.exponentialRampToValueAtTime(700,e+1.25);let r=t.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(.42,e+.18),r.gain.exponentialRampToValueAtTime(1e-4,e+1.3),n.connect(s),s.connect(r),r.connect(this._sfxBus),r.connect(this._sfxSend);let a=t.createOscillator();a.type="sine",a.frequency.setValueAtTime(120,e),a.frequency.exponentialRampToValueAtTime(38,e+.7);let o=t.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(.34,e+.02),o.gain.exponentialRampToValueAtTime(1e-4,e+.95),a.connect(o),o.connect(this._sfxBus),n.start(e,Ui(0,.5)),n.stop(e+1.35),a.start(e),a.stop(e+1)}playReform(){if(!this._canSfx())return;let t=this._ctx,e=t.currentTime+.02,n=this._noiseSource(),s=t.createBiquadFilter();s.type="highpass",s.frequency.value=2400;let r=t.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(.26,e+.58),r.gain.exponentialRampToValueAtTime(1e-4,e+.74),n.connect(s),s.connect(r),r.connect(this._sfxBus),r.connect(this._sfxSend),[72,76,79,84,88,91].forEach((c,h)=>{this._musicBox(e+h*.055,c,.42,{decayScale:.55,bus:this._sfxBus,send:this._sfxSend,pan:Ui(-.2,.2)})});let o=t.createOscillator();o.type="sine",o.frequency.setValueAtTime(90,e+.55),o.frequency.exponentialRampToValueAtTime(42,e+1.05);let l=t.createGain();l.gain.setValueAtTime(1e-4,e+.55),l.gain.linearRampToValueAtTime(.2,e+.58),l.gain.exponentialRampToValueAtTime(1e-4,e+1.2),o.connect(l),l.connect(this._sfxBus),n.start(e,Ui(0,.8)),n.stop(e+.85),o.start(e+.55),o.stop(e+1.25)}playGrab(){if(!this._canSfx())return;let t=this._ctx.currentTime+.02;this._musicBox(t,62,.5,{decayScale:.5,bus:this._sfxBus,send:this._sfxSend,pan:-.08}),this._musicBox(t+.012,67,.3,{decayScale:.45,bus:this._sfxBus,send:this._sfxSend,pan:.12})}playRelease(){if(!this._canSfx())return;let e=this._ctx.currentTime+.02,n=[84,86,88,91,93,96,98],s=4+(Math.random()*3|0),r=e;for(let a=0;a<s;a++)this._musicBox(r,tx(n),.22+Math.random()*.12,{decayScale:.35,bus:this._sfxBus,send:this._sfxSend,pan:Ui(-.55,.55)}),r+=Ui(.035,.075)}playClick(){if(!this._canSfx())return;let t=this._ctx,e=t.currentTime+.01;for(let[n,s,r]of[[1e3,.1,.055],[1500,.035,.04]]){let a=t.createOscillator();a.type="triangle",a.frequency.value=n;let o=t.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(s,e+.004),o.gain.exponentialRampToValueAtTime(1e-4,e+r),a.connect(o),o.connect(this._sfxBus),a.start(e),a.stop(e+r+.02)}}playChime(){if(!this._canSfx())return;let e=this._ctx.currentTime+.02;this._musicBox(e,88,.38,{decayScale:.8,bus:this._sfxBus,send:this._sfxSend,pan:-.15}),this._musicBox(e+.07,91,.3,{decayScale:.8,bus:this._sfxBus,send:this._sfxSend,pan:.15})}};var cr=new URLSearchParams(location.search),to={greeting:xe.greeting.text,sub:xe.greeting.sub,music:!0,volume:.72,sensitivity:1,photoSize:1,snow:1,autoRotate:!1,mood:0,preview:!1};function VE(){try{let i=localStorage.getItem(xe.storageKey);if(!i)return{...to};let t=JSON.parse(i);return{...to,...t,greeting:t.greeting||to.greeting,sub:t.sub??to.sub,mood:Jt(Number(t.mood)||0,0,vn.length-1)}}catch{return{...to}}}var em=class{constructor(){this.canvas=document.getElementById("scene"),this.settings=VE(),this.mode="pointer",this.manualGalaxy=!1,this.gestureGalaxy=0,this.audioReady=!1,this.mouseDown=!1,this.mouse={x:window.innerWidth/2,y:window.innerHeight/2,active:!1},this._handWorld={x:0,y:0,z:0},this._t=0,this._statusTimer=0,this.started=!1,this.isFileMode=location.protocol==="file:"}async init(){this.ui=new Gu,this.rig=new Dh(this.canvas),this.rig.resize(),this.tree=new Fh(this.rig),this.audio=new Hu({volume:this.settings.volume}),this.cloud=new Uh({rig:this.rig,container:document.getElementById("photoCloud"),onGrab:n=>this._onGrab(n),onRelease:n=>this._onRelease(n),onTap:n=>this._onTap(n)}),this.tracker=new zu({video:document.getElementById("webcam"),wasmBase:xe.hand.wasmBase,model:xe.hand.model,onStatus:n=>this._onTrackerStatus(n)}),this._wireUI(),this.ui.applySettings(this.settings),this.rig.setMood(this.settings.mood,!0),this.rig.setAutoRotate(this.settings.autoRotate),this.rig.setSnowDensity(this._snowFraction(this.settings.snow)),this.cloud.setPhotoScale(this.settings.photoSize),this.ui.setMood(this.settings.mood),this.ui.setStatus("pointer","手势未开启"),this.ui.setHint("拖动画面转一圈 · 按住画面整场绽放","滚轮缩放 · 轻点照片放大 · 空格键散作星河"),this.isFileMode&&(this.ui.setStatus("pointer","本地文件 · 鼠标模式"),this.ui.setHint("双击打开的本地页面：拖拽照片即可","想用手势：双击同目录的「启动.bat」，或用在线网址"),document.body.classList.add("file-mode")),this.settings.music||this.ui.setMusicPlaying(!1),this.ui.setLoading(.18,"正在取出照片…"),await this._nextFrame();let t=await this.cloud.load();if(this.ui.setLoading(.82,"正在挂上照片…"),await this._nextFrame(),matchMedia("(pointer: coarse)").matches&&this.ui.setHint("轻点照片放大看 · 双指可缩放画面","也可以点右下角「散作星河」"),this.cloud.update(1/60,0),await this._nextFrame(),this.ui.hideLoading(),window.addEventListener("resize",()=>this.rig.resize()),this.drag={active:!1,sx:0,sy:0,lx:0,ly:0,moved:0,hold:!1,timer:0},this.pointers=new Map,this.pinchDist=0,this.holdBloom=!1,this.canvas.addEventListener("pointerdown",n=>this._onCanvasPointerDown(n)),window.addEventListener("pointermove",n=>this._onPointerMove(n)),window.addEventListener("pointerup",n=>this._onPointerUp(n)),window.addEventListener("pointercancel",n=>this._onPointerUp(n)),this.canvas.addEventListener("wheel",n=>this._onWheel(n),{passive:!1}),window.__xmas=this,cr.get("debug")==="1"&&console.info("[xmas] photos:",t,"mode:",this.mode),this._loop(),requestAnimationFrame(()=>this.rig.resize()),cr.get("autostart")==="1"){let n=cr.get("mode")==="gesture";await this.start(n?"gesture":"pointer")}cr.get("mode")==="galaxy"&&(this.manualGalaxy=!0,this.ui.setGalaxy(!0),this.rig.setGalaxy(1)),cr.get("mood")!==null&&this._setMood(Number(cr.get("mood"))||0,!0),cr.get("ui")==="0"&&this.ui.setUIHidden(!0),cr.get("photos")==="0"&&(document.getElementById("photoCloud").style.display="none")}_nextFrame(){return new Promise(t=>requestAnimationFrame(()=>t()))}_wireUI(){let t=this.ui;t.on("start",e=>this.start(e)),t.on("toggleGalaxy",()=>this.toggleGalaxy()),t.on("toggleMusic",()=>this.toggleMusic()),t.on("cycleMood",()=>this._setMood((this.settings.mood+1)%vn.length)),t.on("setMood",e=>this._setMood(e)),t.on("settings",e=>this._patchSettings(e)),t.on("upload",e=>this._onUpload(e)),t.on("resetPhotos",()=>{this.cloud.resetPositions(),t.toast("照片都回到原来的位置了")}),t.on("restartCamera",()=>this._restartCamera())}_patchSettings(t){this.settings={...this.settings,...t};try{localStorage.setItem(xe.storageKey,JSON.stringify(this.settings))}catch{}(t.greeting!==void 0||t.sub!==void 0)&&(this.settings.greeting=this.settings.greeting||to.greeting,this.ui.setGreeting(this.settings.greeting,this.settings.sub)),t.volume!==void 0&&this.audio?.setVolume?.(this.settings.volume),t.music!==void 0&&this._applyMusic(),t.preview!==void 0&&document.getElementById("previewBox")?.classList.toggle("on",WE(t.preview)),t.sensitivity!==void 0&&this.tracker?.setSensitivity?.(this.settings.sensitivity),t.photoSize!==void 0&&this.cloud?.setPhotoScale?.(this.settings.photoSize),t.snow!==void 0&&this.rig?.setSnowDensity?.(this._snowFraction(this.settings.snow)),t.autoRotate!==void 0&&this.rig?.setAutoRotate?.(this.settings.autoRotate),t.mood!==void 0&&this._setMood(t.mood)}_snowFraction(t){let e=Number(t);return Number.isFinite(e)?e<=.4?.26:e>=1.4?1:.74:.72}_setMood(t,e=!1){let n=Jt(Math.round(t),0,vn.length-1);this.settings.mood=n,this.rig.setMood(n,e),this.ui.setMood(n),this.ui.setHint(null,vn[n].hint);try{localStorage.setItem(xe.storageKey,JSON.stringify(this.settings))}catch{}}async _initAudio(){try{await this.audio.init(),this.audio.setVolume?.(this.settings.volume),this.audio.setSfxEnabled?.(!0),this.audioReady=!0}catch(t){console.warn("[audio] 初始化失败",t)}}async _applyMusic(){if(!this.audioReady)return;let t=!!this.settings.music;try{t?(await this.audio.unlock?.(),this.audio.setMusicEnabled?.(!0),this.ui.setMusicPlaying(!0)):(this.audio.setMusicEnabled?.(!1),this.ui.setMusicPlaying(!1))}catch(e){console.warn("[audio] 播放失败",e)}}async toggleMusic(){this.audioReady||await this._initAudio(),this.settings.music=!this.settings.music,this.settings={...this.settings},this.ui.applySettings(this.settings),await this._applyMusic();try{localStorage.setItem(xe.storageKey,JSON.stringify(this.settings))}catch{}this.ui.toast(this.settings.music?"音乐已开启 · 雪夜八音盒":"音乐已暂停")}async start(t){this.started||(this.started=!0,t==="gesture"&&this.isFileMode&&(t="pointer",this.ui.toast("双击打开的本地页面调不到摄像头：已切到鼠标模式。想用手势请点同目录的「启动.bat」，或打开在线网址。",4600)),this.ui.hideStart(),await this._initAudio(),this.tree.burst(.9),t==="gesture"?(this._setMode("gesture"),await this.tracker.start()||(this._setMode("pointer"),this.ui.toast("手势没启动成功，先用鼠标 / 触摸玩吧"))):(this._setMode("pointer"),this.ui.toast("轻点照片可以把它拾起来",1800)),await this._applyMusic(),this.ui.setLoading(1))}_setMode(t){this.mode=t,t==="gesture"?(this.cloud.setSource("hand"),this.ui.setStatus("camera","手势待识别"),this.ui.setHint("手掌靠近摄像头 · 圣诞树散作星河","捏合指尖拾起照片 · 移开手掌树会回来")):(this.cloud.setSource("mouse"),this.ui.setStatus("pointer","鼠标 / 触摸"),this.ui.setHint("拖动旋转 · 滚轮缩放 · 按住绽放","轻点照片放大 · 空格键散作星河"),this.ui.hideCursor())}_onTrackerStatus(t){t.state==="loading"?this.ui.setStatus("camera",t.text||"正在唤醒手势…"):t.state==="ready"?(this.ui.setStatus("camera",t.text||"手势已开启"),this.ui.toast("把手掌放到摄像头前试试",2600),this.tree.burst(.6)):t.state==="error"&&(this.ui.setStatus("pointer",t.text||"手势不可用"),this.ui.toast(t.text||"手势不可用，已切换到鼠标模式",3200))}async _restartCamera(){this.tracker.stop(),this.cloud.releaseAll(),this.ui.closeSettings(),this._setMode("gesture"),await this.tracker.start()||this._setMode("pointer")}toggleGalaxy(){this.manualGalaxy=!this.manualGalaxy,this.ui.setGalaxy(this.manualGalaxy),this.tree.burst(this.manualGalaxy?.75:.5),this.audio?.playWhoosh?.({strength:this.manualGalaxy?1:.6}),this.ui.ripple(this.rig.width/2,this.rig.height/2,"rgba(255,214,140,0.6)"),this.manualGalaxy&&this.ui.toast("圣诞树散作星河了 · 再按一次让它回来",1800)}_onGrab(t){this.audio?.playGrab?.(),this.tree.burst(.35),this.ui.ripple(t.sx+t.off.x,t.sy+t.off.y,"rgba(255,226,170,0.8)"),this.ui.setStatus(this.mode==="gesture"?"camera":"pointer",`拾起了 · ${t.photo.place||"照片"}`)}_onRelease(t){this.audio?.playRelease?.(),this.ui.setStatus(this.mode==="gesture"?"camera":"pointer",this.mode==="gesture"?"手势模式":"鼠标 / 触摸")}_onTap(t){this.audio?.playChime?.(),this.tree.burst(.28),this.ui.openPhoto(t)}_onCanvasPointerDown(t){if(t.target.closest?.(".photo-card"))return;if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY}),this.mouseDown=!0,this.pointers.size===2){clearTimeout(this.drag.timer),this._endHoldBloom();let[n,s]=[...this.pointers.values()];this.pinchDist=Math.hypot(n.x-s.x,n.y-s.y),this.drag.active=!1;return}if(this.pointers.size>2)return;let e=this.drag;e.active=!0,e.sx=e.lx=t.clientX,e.sy=e.ly=t.clientY,e.moved=0,e.hold=!1,this.rig.beginOrbit(),this.ui.ripple(t.clientX,t.clientY),this.audio?.playWhoosh?.({strength:.22}),clearTimeout(e.timer),e.timer=setTimeout(()=>{!e.active||e.moved>9||(e.hold=!0,this._startHoldBloom())},240)}_onPointerMove(t){this.mouse.x=t.clientX,this.mouse.y=t.clientY,this.mouse.active=!0;let e=t.clientX/this.rig.width*2-1,n=-(t.clientY/this.rig.height*2-1);if(this.rig.setPointer(e,n),this.pointers.has(t.pointerId)&&this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY}),this.pointers.size===2){let[o,l]=[...this.pointers.values()],c=Math.hypot(o.x-l.x,o.y-l.y);this.pinchDist>0&&this.rig.addZoom((this.pinchDist-c)*.0035),this.pinchDist=c;return}let s=this.drag;if(!s.active)return;let r=t.clientX-s.lx,a=t.clientY-s.ly;s.lx=t.clientX,s.ly=t.clientY,s.moved+=Math.abs(r)+Math.abs(a),s.moved>9&&(clearTimeout(s.timer),this.holdBloom&&this._endHoldBloom(),this.rig.beginOrbit(),this.rig.setOrbitDelta(r*.0042,-a*.0024))}_onPointerUp(t){if(this.pointers.delete(t.pointerId),this.pointers.size>0)return;this.mouseDown=!1;let e=this.drag;clearTimeout(e.timer),e.active&&e.moved<=9&&!this.holdBloom&&(this.tree.burst(.22),this.audio?.playClick?.()),this.holdBloom&&this._endHoldBloom(),e.active&&this.rig.endOrbit(),e.active=!1,e.hold=!1,this.pinchDist=0}_onWheel(t){t.preventDefault(),this.rig.addZoom(Jt(-t.deltaY*8e-4,-.1,.1))}_startHoldBloom(){if(this.holdBloom)return;this.holdBloom=!0,this.rig.galaxySmooth=Math.max(this.rig.galaxySmooth,.22),this._focusIndex=((this._focusIndex||0)+1)%8;let t=this.cloud.cards.filter(e=>e.photo.featured);this.cloud.setFocus(t[this._focusIndex%Math.max(1,t.length)]||null),this.tree.burst(1),this.audio?.playWhoosh?.({strength:.9}),this.ui.ripple(this.drag.sx,this.drag.sy),this.ui.setStatus(this.mode==="gesture"?"camera":"pointer","拾起这片星河…")}_endHoldBloom(){this.holdBloom&&(this.holdBloom=!1,this.cloud.setFocus(null),this.tree.burst(.55),this.audio?.playReform?.(),this.ui.setStatus(this.mode==="gesture"?"camera":"pointer",this.mode==="gesture"?"手势模式":"鼠标 / 触摸"))}async _onUpload(t){this.ui.toast("正在加入照片…",1200);let e=await this.cloud.appendPhotos(t);e>0?(this.ui.toast(`已加入 ${e} 张照片 · 点「散作星河」就能看到它们`),this.manualGalaxy=!0,this.ui.setGalaxy(!0)):this.ui.toast("这些文件没能读取，换几张试试？")}_screenToWorld(t,e,n,s){let r=t/Math.max(1,this.rig.width)*2-1,a=-(e/Math.max(1,this.rig.height)*2-1),o=2*n*Math.tan(this.rig.camera.fov*Math.PI/360),l=o*this.rig.camera.aspect;return s.x=this.rig.camera.position.x+r*l/2,s.y=this.rig.camera.position.y+a*o/2,s.z=this.rig.camera.position.z-n,s}_loop(){this._stop=_g(t=>{this._t+=t;let e=this._t,n=0,s=0;if(this.mode==="gesture"&&this.tracker){let o=this.tracker.update(t,this.rig.width,this.rig.height);if(this.handState=o,o.active){let l=this.tracker.getWorldPosition(this.rig,this._handWorld),c=Jt(o.proximity||0);n=Jt(o.present*(.55+.45*c)*(.75+o.pinch*.85)),this.tree.setHand(l,n),this.cloud.setPointer(o.x,o.y,o.pinch,!0),this.ui.updateCursor(o.x,o.y,{visible:!0,pinch:o.pinch,grab:!!this.cloud.grabbed}),s=Jt(o.present*(.4+.6*c)+(o.pinch?.15:0)),o.present>.5&&this.ui.setStatus("camera",o.pinch?"捏合中 · 可以拾起照片":"手势已识别")}else n=0,this.tree.setHand(null,0),this.cloud.setPointer(-9999,-9999,!1,!1),this.ui.hideCursor(),this.cloud.grabbed||this.ui.setStatus("camera","手势待识别");this.gestureGalaxy=s}else{if(this.mouse.active){let o=this.mouseDown?.55:.16,l=this._screenToWorld(this.mouse.x,this.mouse.y,8.2,this._handWorld);this.tree.setHand(l,o),n=o}this.gestureGalaxy=0}let r=this.holdBloom?1:0,a=this.mode==="gesture"?Math.max(this.manualGalaxy?1:0,this.gestureGalaxy,r):Math.max(this.manualGalaxy?1:0,r);this.rig.galaxy=a,this.rig.update(t,e),this.tree.update(t,e),this.cloud.update(t,e),this.audioReady&&this.audio.setGestureIntensity?.(Jt(n*.8+this.rig.galaxySmooth*.4)),this.rig.render()})}dispose(){this._stop?.(),this.tracker?.stop(),this.audio?.dispose?.(),this.rig?.dispose?.()}};function WE(i){return i===!0||i==="true"||i===1}async function XE(){let i=new em;try{await i.init()}catch(t){console.error("[xmas] 初始化失败",t);let e=document.getElementById("loadingTip");e&&(e.textContent="出了一点小问题："+(t?.message||t));let n=document.getElementById("loadingBar");n&&(n.style.width="100%");return}window.__xmasApp=i}XE();})();
