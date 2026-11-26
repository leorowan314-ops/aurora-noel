(()=>{var be={camera:{fov:42,near:.1,far:120,position:[0,2.15,10.6],target:[0,1.95,0]},tree:{height:4.7,radius:2.05,particles:92e3,garland:7e3,ornaments:240,starY:4.98},galaxy:{radius:7,centerY:1.95},photos:{featuredCount:8},greeting:{text:"悦悦，圣诞快乐！",sub:"愿这片极光替我记得，我们一起走过的每一程"},storageKey:"aurora-noel-settings-v1",hand:{wasmBase:"assets/mediapipe/wasm",model:"assets/mediapipe/hand_landmarker.task"}},_n=[{id:0,name:"极光",aurora:["#39f6e0","#2a5cff"],hint:"青蓝极光 · 雪夜森林"},{id:1,name:"雪夜",aurora:["#9b7bff","#ff5fa2"],hint:"紫粉极光 · 安静落雪"},{id:2,name:"暖星",aurora:["#ffd98a","#ff9d5c"],hint:"金色星屑 · 壁炉微光"}];var km=0,Md=1,zm=2;var Io=1,Gm=2,ma=3,$s=0,Pi=1,cn=2,ds=0,ga=1,Ii=2,bd=3,Td=4,Vm=5;var _r=100,Hm=101,Wm=102,Xm=103,qm=104,$m=200,Ym=201,Km=202,Zm=203,Ed=204,wd=205,Jm=206,jm=207,Qm=208,t0=209,e0=210,i0=211,n0=212,s0=213,r0=214,ic=0,nc=1,sc=2,ra=3,rc=4,ac=5,oc=6,lc=7,Ad=0,a0=1,o0=2,zn=0,Lo=1,No=2,Do=3,vr=4,Fo=5,Uo=6,Oo=7;var Rd=300,xr=301,_a=302,Nc=303,Dc=304,cc=1e3,Nn=1001,hc=1002,hi=1003,l0=1004;var Bo=1005;var Ri=1006,Fc=1007;var fs=1008;var Bi=1009,Cd=1010,Pd=1011,va=1012,Uc=1013,Mn=1014,bn=1015,gi=1016,Oc=1017,Bc=1018,yr=1020,Id=35902,Ld=35899,Nd=1021,Dd=1022,Tn=1023,cs=1026,ps=1027,Fd=1028,kc=1029,Ys=1030,zc=1031;var Gc=1033,ko=33776,zo=33777,Go=33778,Vo=33779,Vc=35840,Hc=35841,Wc=35842,Xc=35843,qc=36196,$c=37492,Yc=37496,Kc=37488,Zc=37489,Ho=37490,Jc=37491,jc=37808,Qc=37809,th=37810,eh=37811,ih=37812,nh=37813,sh=37814,rh=37815,ah=37816,oh=37817,lh=37818,ch=37819,hh=37820,uh=37821,dh=36492,fh=36494,ph=36495,mh=36283,gh=36284,Wo=36285,_h=36286;var oo=2300,uc=2301,tc=2302,fd=2303,pd=2400,md=2401,gd=2402;var c0=3200;var vh=0,h0=1,ms="",$e="srgb",lo="srgb-linear",co="linear",ce="srgb";var ec=7680;var u0=519,d0=512,f0=513,p0=514,Ud=515,m0=516,g0=517,Od=518,Bd=519,kd=35044;var zd="300 es",on=2e3,aa=2001;function ox(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function lx(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ho(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function _0(){let e=ho("canvas");return e.style.display="block",e}var um={},oa=null;function uo(...e){let t="THREE."+e.shift();oa?oa("log",t,...e):console.log(t,...e)}function v0(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function zt(...e){e=v0(e);let t="THREE."+e.shift();if(oa)oa("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function Gt(...e){e=v0(e);let t="THREE."+e.shift();if(oa)oa("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function ao(...e){let t=e.join(" ");t in um||(um[t]=!0,zt(...e))}function x0(e,t,i){return new Promise(function(n,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,i);break;default:n()}}setTimeout(r,i)})}var y0={[ic]:ic,[sc]:oc,[rc]:rc,[ra]:ac,[nc]:nc,[oc]:sc,[lc]:lc,[ac]:ra},Dn=class{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(i)===-1&&n[t].push(i)}hasEventListener(t,i){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(i)!==-1}removeEventListener(t,i){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(i);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let i=this._listeners;if(i===void 0)return;let n=i[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Wu=Math.PI/180,dc=180/Math.PI;function Sr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Si[e&255]+Si[e>>8&255]+Si[e>>16&255]+Si[e>>24&255]+"-"+Si[t&255]+Si[t>>8&255]+"-"+Si[t>>16&15|64]+Si[t>>24&255]+"-"+Si[i&63|128]+Si[i>>8&255]+"-"+Si[i>>16&255]+Si[i>>24&255]+Si[n&255]+Si[n>>8&255]+Si[n>>16&255]+Si[n>>24&255]).toLowerCase()}function ne(e,t,i){return Math.max(t,Math.min(i,e))}function cx(e,t){return(e%t+t)%t}function Xu(e,t,i){return(1-i)*e+i*t}function S0(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function xh(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function M0(e,t){if(t.constructor===Float32Array)return e;let i=xh(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(e/i,-1)}function b0(e,t){if(t.constructor===Float32Array)return e;let i=xh(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(e*i)}var Xd=class Xd{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,n=this.y,s=t.elements;return this.x=s[0]*i+s[3]*n+s[6],this.y=s[1]*i+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ne(this.x,t.x,i.x),this.y=ne(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ne(this.x,t,i),this.y=ne(this.y,t,i),this}clampLength(t,i){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let n=this.dot(t)/i;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,n=this.y-t.y;return i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,n){return this.x=t.x+(i.x-t.x)*n,this.y=t.y+(i.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let n=Math.cos(i),s=Math.sin(i),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xd.prototype.isVector2=!0;var Et=Xd,Fn=class{constructor(t=0,i=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=n,this._w=s}static slerpFlat(t,i,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(d!==y||l!==u||c!==f||h!==g){let p=l*u+c*f+h*g+d*y;p<0&&(u=-u,f=-f,g=-g,y=-y,p=-p);let m=1-o;if(p<.9995){let b=Math.acos(p),A=Math.sin(b);m=Math.sin(m*b)/A,o=Math.sin(o*b)/A,l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+y*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+y*o;let b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[i]=l,t[i+1]=c,t[i+2]=h,t[i+3]=d}static multiplyQuaternionsFlat(t,i,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[i]=o*g+h*d+l*f-c*u,t[i+1]=l*g+h*u+c*d-o*f,t[i+2]=c*g+h*f+o*u-l*d,t[i+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,n,s){return this._x=t,this._y=i,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){let n=i/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let i=t.elements,n=i[0],s=i[4],r=i[8],a=i[1],o=i[5],l=i[9],c=i[2],h=i[6],d=i[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let n=t.dot(i)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,i){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,i/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){let n=t._x,s=t._y,r=t._z,a=t._w,o=i._x,l=i._y,c=i._z,h=i._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,i){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-i;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,i=Math.sin(i*c)/h,this._x=this._x*l+n*i,this._y=this._y*l+s*i,this._z=this._z*l+r*i,this._w=this._w*l+a*i,this._onChangeCallback()}else this._x=this._x*l+n*i,this._y=this._y*l+s*i,this._z=this._z*l+r*i,this._w=this._w*l+a*i,this.normalize();return this}slerpQuaternions(t,i,n){return this.copy(t).slerp(i,n)}random(){let t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(i),r*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},qd=class qd{constructor(t=0,i=0,n=0){this.x=t,this.y=i,this.z=n}set(t,i,n){return n===void 0&&(n=this.z),this.x=t,this.y=i,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(dm.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(dm.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*i+r[3]*n+r[6]*s,this.y=r[1]*i+r[4]*n+r[7]*s,this.z=r[2]*i+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*i+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*i+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*i+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*i+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let i=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*i-r*s),d=2*(r*n-a*i);return this.x=i+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*i+r[4]*n+r[8]*s,this.y=r[1]*i+r[5]*n+r[9]*s,this.z=r[2]*i+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ne(this.x,t.x,i.x),this.y=ne(this.y,t.y,i.y),this.z=ne(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ne(this.x,t,i),this.y=ne(this.y,t,i),this.z=ne(this.z,t,i),this}clampLength(t,i){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,n){return this.x=t.x+(i.x-t.x)*n,this.y=t.y+(i.y-t.y)*n,this.z=t.z+(i.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let n=t.x,s=t.y,r=t.z,a=i.x,o=i.y,l=i.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let n=t.dot(this)/i;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qu.copy(this).projectOnVector(t),this.sub(qu)}reflect(t){return this.sub(qu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let n=this.dot(t)/i;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return i*i+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,n){let s=Math.sin(i)*t;return this.x=s*Math.sin(n),this.y=Math.cos(i)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,n){return this.x=t*Math.sin(i),this.y=n,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=n,this.z=s,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,n=Math.sqrt(1-i*i);return this.x=n*Math.cos(t),this.y=i,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qd.prototype.isVector3=!0;var F=qd,qu=new F,dm=new Fn,$d=class $d{constructor(t,i,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,n,s,r,a,o,l,c)}set(t,i,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=i,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,n=t.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],this}extractBasis(t,i,n){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let n=t.elements,s=i.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],y=s[0],p=s[3],m=s[6],b=s[1],A=s[4],S=s[7],w=s[2],T=s[5],_=s[8];return r[0]=a*y+o*b+l*w,r[3]=a*p+o*A+l*T,r[6]=a*m+o*S+l*_,r[1]=c*y+h*b+d*w,r[4]=c*p+h*A+d*T,r[7]=c*m+h*S+d*_,r[2]=u*y+f*b+g*w,r[5]=u*p+f*A+g*T,r[8]=u*m+f*S+g*_,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return i*a*h-i*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,i=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=i*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=u*y,t[4]=(h*i-s*l)*y,t[5]=(s*r-o*i)*y,t[6]=f*y,t[7]=(n*l-c*i)*y,t[8]=(a*i-n*r)*y,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+i,0,0,1),this}scale(t,i){return ao("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($u.makeScale(t,i)),this}rotate(t){return ao("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($u.makeRotation(-t)),this}translate(t,i){return ao("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($u.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),n=Math.sin(t);return this.set(i,-n,0,n,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,n=t.elements;for(let s=0;s<9;s++)if(i[s]!==n[s])return!1;return!0}fromArray(t,i=0){for(let n=0;n<9;n++)this.elements[n]=t[n+i];return this}toArray(t=[],i=0){let n=this.elements;return t[i]=n[0],t[i+1]=n[1],t[i+2]=n[2],t[i+3]=n[3],t[i+4]=n[4],t[i+5]=n[5],t[i+6]=n[6],t[i+7]=n[7],t[i+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};$d.prototype.isMatrix3=!0;var Ht=$d,$u=new Ht,fm=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pm=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hx(){let e={enabled:!0,workingColorSpace:lo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ce&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ce&&(s.r=sa(s.r),s.g=sa(s.g),s.b=sa(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ms?co:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],n=[.3127,.329];return e.define({[lo]:{primaries:t,whitePoint:n,transfer:co,toXYZ:fm,fromXYZ:pm,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:fm,fromXYZ:pm,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),e}var jt=hx();function ls(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function sa(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Gr,fc=class{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Gr===void 0&&(Gr=ho("canvas")),Gr.width=t.width,Gr.height=t.height;let s=Gr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Gr}return n.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let i=ho("canvas");i.width=t.width,i.height=t.height;let n=i.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ls(r[a]/255)*255;return n.putImageData(s,0,0),i}else if(t.data){let i=t.data.slice(0);for(let n=0;n<i.length;n++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[n]=Math.floor(ls(i[n]/255)*255):i[n]=ls(i[n]);return{data:i,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ux=0,la=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=Sr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width||0,i.height||0,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Yu(s[a].image)):r.push(Yu(s[a]))}else r=Yu(s);n.url=r}return i||(t.images[this.uuid]=n),n}};function Yu(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?fc.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var dx=0,Ku=new F,Ci=class e extends Dn{constructor(t=e.DEFAULT_IMAGE,i=e.DEFAULT_MAPPING,n=Nn,s=Nn,r=Ri,a=fs,o=Tn,l=Bi,c=e.DEFAULT_ANISOTROPY,h=ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=Sr(),this.name="",this.source=new la(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ku).x}get height(){return this.source.getSize(Ku).y}get depth(){return this.source.getSize(Ku).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let n=t[i];if(n===void 0){zt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let s=this[i];if(s===void 0){zt(`Texture.setValues(): property '${i}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[i]=n}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),i||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cc:t.x=t.x-Math.floor(t.x);break;case Nn:t.x=t.x<0?0:1;break;case hc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cc:t.y=t.y-Math.floor(t.y);break;case Nn:t.y=t.y<0?0:1;break;case hc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ci.DEFAULT_IMAGE=null;Ci.DEFAULT_MAPPING=Rd;Ci.DEFAULT_ANISOTROPY=1;var Yd=class Yd{constructor(t=0,i=0,n=0,s=1){this.x=t,this.y=i,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,n,s){return this.x=t,this.y=i,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*i+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*i+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*i+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*i+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let A=(c+1)/2,S=(f+1)/2,w=(m+1)/2,T=(h+u)/4,_=(d+y)/4,M=(g+p)/4;return A>S&&A>w?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=T/n,r=_/n):S>w?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=M/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=_/r,s=M/r),this.set(n,s,r,i),this}let b=Math.sqrt((p-g)*(p-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(d-y)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ne(this.x,t.x,i.x),this.y=ne(this.y,t.y,i.y),this.z=ne(this.z,t.z,i.z),this.w=ne(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ne(this.x,t,i),this.y=ne(this.y,t,i),this.z=ne(this.z,t,i),this.w=ne(this.w,t,i),this}clampLength(t,i){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,n){return this.x=t.x+(i.x-t.x)*n,this.y=t.y+(i.y-t.y)*n,this.z=t.z+(i.z-t.z)*n,this.w=t.w+(i.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yd.prototype.isVector4=!0;var Ie=Yd,pc=class extends Dn{constructor(t=1,i=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=n.depth,this.scissor=new Ie(0,0,t,i),this.scissorTest=!1,this.viewport=new Ie(0,0,t,i),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ci({width:t,height:i,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let i={minFilter:Ri,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(i.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,n=1){if(this.width!==t||this.height!==i||this.depth!==n){this.width=t,this.height=i,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=i,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;let s=Object.assign({},t.textures[i].image);this.textures[i].source=new la(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qe=class extends pc{constructor(t=1,i=1,n={}){super(t,i,n),this.isWebGLRenderTarget=!0}},fo=class extends Ci{constructor(t=null,i=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:n,depth:s},this.magFilter=hi,this.minFilter=hi,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var mc=class extends Ci{constructor(t=null,i=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:n,depth:s},this.magFilter=hi,this.minFilter=hi,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Lc=class Lc{constructor(t,i,n,s,r,a,o,l,c,h,d,u,f,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,n,s,r,a,o,l,c,h,d,u,f,g,y,p)}set(t,i,n,s,r,a,o,l,c,h,d,u,f,g,y,p){let m=this.elements;return m[0]=t,m[4]=i,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lc().fromArray(this.elements)}copy(t){let i=this.elements,n=t.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],i[9]=n[9],i[10]=n[10],i[11]=n[11],i[12]=n[12],i[13]=n[13],i[14]=n[14],i[15]=n[15],this}copyPosition(t){let i=this.elements,n=t.elements;return i[12]=n[12],i[13]=n[13],i[14]=n[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,n){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,i,n){return this.set(t.x,i.x,n.x,0,t.y,i.y,n.y,0,t.z,i.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,n=t.elements,s=1/Vr.setFromMatrixColumn(t,0).length(),r=1/Vr.setFromMatrixColumn(t,1).length(),a=1/Vr.setFromMatrixColumn(t,2).length();return i[0]=n[0]*s,i[1]=n[1]*s,i[2]=n[2]*s,i[3]=0,i[4]=n[4]*r,i[5]=n[5]*r,i[6]=n[6]*r,i[7]=0,i[8]=n[8]*a,i[9]=n[9]*a,i[10]=n[10]*a,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,y=o*d;i[0]=l*h,i[4]=-l*d,i[8]=c,i[1]=f+g*c,i[5]=u-y*c,i[9]=-o*l,i[2]=y-u*c,i[6]=g+f*c,i[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,y=c*d;i[0]=u+y*o,i[4]=g*o-f,i[8]=a*c,i[1]=a*d,i[5]=a*h,i[9]=-o,i[2]=f*o-g,i[6]=y+u*o,i[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,y=c*d;i[0]=u-y*o,i[4]=-a*d,i[8]=g+f*o,i[1]=f+g*o,i[5]=a*h,i[9]=y-u*o,i[2]=-a*c,i[6]=o,i[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,y=o*d;i[0]=l*h,i[4]=g*c-f,i[8]=u*c+y,i[1]=l*d,i[5]=y*c+u,i[9]=f*c-g,i[2]=-c,i[6]=o*l,i[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,y=o*c;i[0]=l*h,i[4]=y-u*d,i[8]=g*d+f,i[1]=d,i[5]=a*h,i[9]=-o*h,i[2]=-c*h,i[6]=f*d+g,i[10]=u-y*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,y=o*c;i[0]=l*h,i[4]=-d,i[8]=c*h,i[1]=u*d+y,i[5]=a*h,i[9]=f*d-g,i[2]=g*d-f,i[6]=o*h,i[10]=y*d+u}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fx,t,px)}lookAt(t,i,n){let s=this.elements;return Xi.subVectors(t,i),Xi.lengthSq()===0&&(Xi.z=1),Xi.normalize(),Ns.crossVectors(n,Xi),Ns.lengthSq()===0&&(Math.abs(n.z)===1?Xi.x+=1e-4:Xi.z+=1e-4,Xi.normalize(),Ns.crossVectors(n,Xi)),Ns.normalize(),Cl.crossVectors(Xi,Ns),s[0]=Ns.x,s[4]=Cl.x,s[8]=Xi.x,s[1]=Ns.y,s[5]=Cl.y,s[9]=Xi.y,s[2]=Ns.z,s[6]=Cl.z,s[10]=Xi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let n=t.elements,s=i.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],y=n[6],p=n[10],m=n[14],b=n[3],A=n[7],S=n[11],w=n[15],T=s[0],_=s[4],M=s[8],D=s[12],P=s[1],L=s[5],U=s[9],O=s[13],R=s[2],G=s[6],X=s[10],V=s[14],Q=s[3],W=s[7],j=s[11],tt=s[15];return r[0]=a*T+o*P+l*R+c*Q,r[4]=a*_+o*L+l*G+c*W,r[8]=a*M+o*U+l*X+c*j,r[12]=a*D+o*O+l*V+c*tt,r[1]=h*T+d*P+u*R+f*Q,r[5]=h*_+d*L+u*G+f*W,r[9]=h*M+d*U+u*X+f*j,r[13]=h*D+d*O+u*V+f*tt,r[2]=g*T+y*P+p*R+m*Q,r[6]=g*_+y*L+p*G+m*W,r[10]=g*M+y*U+p*X+m*j,r[14]=g*D+y*O+p*V+m*tt,r[3]=b*T+A*P+S*R+w*Q,r[7]=b*_+A*L+S*G+w*W,r[11]=b*M+A*U+S*X+w*j,r[15]=b*D+A*O+S*V+w*tt,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],y=t[7],p=t[11],m=t[15],b=l*f-c*u,A=o*f-c*d,S=o*u-l*d,w=a*f-c*h,T=a*u-l*h,_=a*d-o*h;return i*(y*b-p*A+m*S)-n*(g*b-p*w+m*T)+s*(g*A-y*w+m*_)-r*(g*S-y*T+p*_)}determinantAffine(){let t=this.elements,i=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return i*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=i,s[14]=n),this}invert(){let t=this.elements,i=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],y=t[13],p=t[14],m=t[15],b=i*o-n*a,A=i*l-s*a,S=i*c-r*a,w=n*l-s*o,T=n*c-r*o,_=s*c-r*l,M=h*y-d*g,D=h*p-u*g,P=h*m-f*g,L=d*p-u*y,U=d*m-f*y,O=u*m-f*p,R=b*O-A*U+S*L+w*P-T*D+_*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/R;return t[0]=(o*O-l*U+c*L)*G,t[1]=(s*U-n*O-r*L)*G,t[2]=(y*_-p*T+m*w)*G,t[3]=(u*T-d*_-f*w)*G,t[4]=(l*P-a*O-c*D)*G,t[5]=(i*O-s*P+r*D)*G,t[6]=(p*S-g*_-m*A)*G,t[7]=(h*_-u*S+f*A)*G,t[8]=(a*U-o*P+c*M)*G,t[9]=(n*P-i*U-r*M)*G,t[10]=(g*T-y*S+m*b)*G,t[11]=(d*S-h*T-f*b)*G,t[12]=(o*D-a*L-l*M)*G,t[13]=(i*L-n*D+s*M)*G,t[14]=(y*A-g*w-p*b)*G,t[15]=(h*w-d*A+u*b)*G,this}scale(t){let i=this.elements,n=t.x,s=t.y,r=t.z;return i[0]*=n,i[4]*=s,i[8]*=r,i[1]*=n,i[5]*=s,i[9]*=r,i[2]*=n,i[6]*=s,i[10]*=r,i[3]*=n,i[7]*=s,i[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,n,s))}makeTranslation(t,i,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,n,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,i,-n,0,0,n,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),n=Math.sin(t);return this.set(i,0,n,0,0,1,0,0,-n,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),n=Math.sin(t);return this.set(i,-n,0,0,n,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let n=Math.cos(i),s=Math.sin(i),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,i,n){return this.set(t,0,0,0,0,i,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,i,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,i,s,1,0,0,0,0,1),this}compose(t,i,n){let s=this.elements,r=i._x,a=i._y,o=i._z,l=i._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,y=a*h,p=a*d,m=o*d,b=l*c,A=l*h,S=l*d,w=n.x,T=n.y,_=n.z;return s[0]=(1-(y+m))*w,s[1]=(f+S)*w,s[2]=(g-A)*w,s[3]=0,s[4]=(f-S)*T,s[5]=(1-(u+m))*T,s[6]=(p+b)*T,s[7]=0,s[8]=(g+A)*_,s[9]=(p-b)*_,s[10]=(1-(u+y))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,i,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),i.identity(),this;let a=Vr.set(s[0],s[1],s[2]).length(),o=Vr.set(s[4],s[5],s[6]).length(),l=Vr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),vn.copy(this);let c=1/a,h=1/o,d=1/l;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=d,vn.elements[9]*=d,vn.elements[10]*=d,i.setFromRotationMatrix(vn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,i,n,s,r,a,o=on,l=!1){let c=this.elements,h=2*r/(i-t),d=2*r/(n-s),u=(i+t)/(i-t),f=(n+s)/(n-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===on)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===aa)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,i,n,s,r,a,o=on,l=!1){let c=this.elements,h=2/(i-t),d=2/(n-s),u=-(i+t)/(i-t),f=-(n+s)/(n-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===on)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===aa)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let i=this.elements,n=t.elements;for(let s=0;s<16;s++)if(i[s]!==n[s])return!1;return!0}fromArray(t,i=0){for(let n=0;n<16;n++)this.elements[n]=t[n+i];return this}toArray(t=[],i=0){let n=this.elements;return t[i]=n[0],t[i+1]=n[1],t[i+2]=n[2],t[i+3]=n[3],t[i+4]=n[4],t[i+5]=n[5],t[i+6]=n[6],t[i+7]=n[7],t[i+8]=n[8],t[i+9]=n[9],t[i+10]=n[10],t[i+11]=n[11],t[i+12]=n[12],t[i+13]=n[13],t[i+14]=n[14],t[i+15]=n[15],t}};Lc.prototype.isMatrix4=!0;var Te=Lc,Vr=new F,vn=new Te,fx=new F(0,0,0),px=new F(1,1,1),Ns=new F,Cl=new F,Xi=new F,mm=new Te,gm=new Fn,hs=class e{constructor(t=0,i=0,n=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,n,s=this._order){return this._x=t,this._y=i,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(i){case"XYZ":this._y=Math.asin(ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,n){return mm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mm,i,n)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return gm.setFromEuler(this),this.setFromQuaternion(gm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hs.DEFAULT_ORDER="XYZ";var po=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},mx=0,_m=new F,Hr=new Fn,is=new Te,Pl=new F,Qa=new F,gx=new F,_x=new Fn,vm=new F(1,0,0),xm=new F(0,1,0),ym=new F(0,0,1),Sm={type:"added"},vx={type:"removed"},Wr={type:"childadded",child:null},Zu={type:"childremoved",child:null},mi=class e extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new F,i=new hs,n=new Fn,s=new F(1,1,1);function r(){n.setFromEuler(i,!1)}function a(){i.setFromQuaternion(n,void 0,!1)}i._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Te},normalMatrix:{value:new Ht}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Hr.setFromAxisAngle(t,i),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(t,i){return Hr.setFromAxisAngle(t,i),this.quaternion.premultiply(Hr),this}rotateX(t){return this.rotateOnAxis(vm,t)}rotateY(t){return this.rotateOnAxis(xm,t)}rotateZ(t){return this.rotateOnAxis(ym,t)}translateOnAxis(t,i){return _m.copy(t).applyQuaternion(this.quaternion),this.position.add(_m.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(vm,t)}translateY(t){return this.translateOnAxis(xm,t)}translateZ(t){return this.translateOnAxis(ym,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(is.copy(this.matrixWorld).invert())}lookAt(t,i,n){t.isVector3?Pl.copy(t):Pl.set(t,i,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?is.lookAt(Qa,Pl,this.up):is.lookAt(Pl,Qa,this.up),this.quaternion.setFromRotationMatrix(is),s&&(is.extractRotation(s.matrixWorld),Hr.setFromRotationMatrix(is),this.quaternion.premultiply(Hr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sm),Wr.child=t,this.dispatchEvent(Wr),Wr.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(vx),Zu.child=t,this.dispatchEvent(Zu),Zu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),is.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),is.multiply(t.parent.matrixWorld)),t.applyMatrix4(is),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sm),Wr.child=t,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,n=[]){this[t]===i&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,i,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,t,gx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,_x,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=i-r[0]*i-r[4]*n-r[8]*s,r[13]+=n-r[1]*i-r[5]*n-r[9]*s,r[14]+=s-r[2]*i-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let n=0,s=i.length;n<s;n++)i[n].updateMatrixWorld(t)}updateWorldMatrix(t,i,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),i===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let i=t===void 0||typeof t=="string",n={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(i){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};mi.DEFAULT_UP=new F(0,1,0);mi.DEFAULT_MATRIX_AUTO_UPDATE=!0;mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ln=class extends mi{constructor(){super(),this.isGroup=!0,this.type="Group"}},xx={type:"move"},ca=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let i=this._hand;if(i)for(let n of t.hand.values())this._getHandJoint(i,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let p=i.getJointPose(y,n),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=i.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=i.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){let n=new ln;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[i.jointName]=n,t.add(n)}return t.joints[i.jointName]}},T0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ds={h:0,s:0,l:0},Il={h:0,s:0,l:0};function Ju(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var Ft=class{constructor(t,i,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,n)}set(t,i,n){if(i===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,i,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,i),this}setRGB(t,i,n,s=jt.workingColorSpace){return this.r=t,this.g=i,this.b=n,jt.colorSpaceToWorking(this,s),this}setHSL(t,i,n,s=jt.workingColorSpace){if(t=cx(t,1),i=ne(i,0,1),n=ne(n,0,1),i===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+i):n+i-n*i,a=2*n-r;this.r=Ju(a,r,t+1/3),this.g=Ju(a,r,t),this.b=Ju(a,r,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,i=$e){function n(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,i);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,i);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,i);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,i);if(a===6)return this.setHex(parseInt(r,16),i);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=$e){let n=T0[t.toLowerCase()];return n!==void 0?this.setHex(n,i):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}copyLinearToSRGB(t){return this.r=sa(t.r),this.g=sa(t.g),this.b=sa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return jt.workingToColorSpace(Mi.copy(this),t),Math.round(ne(Mi.r*255,0,255))*65536+Math.round(ne(Mi.g*255,0,255))*256+Math.round(ne(Mi.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=jt.workingColorSpace){jt.workingToColorSpace(Mi.copy(this),i);let n=Mi.r,s=Mi.g,r=Mi.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,i=jt.workingColorSpace){return jt.workingToColorSpace(Mi.copy(this),i),t.r=Mi.r,t.g=Mi.g,t.b=Mi.b,t}getStyle(t=$e){jt.workingToColorSpace(Mi.copy(this),t);let i=Mi.r,n=Mi.g,s=Mi.b;return t!==$e?`color(${t} ${i.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,i,n){return this.getHSL(Ds),this.setHSL(Ds.h+t,Ds.s+i,Ds.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,n){return this.r=t.r+(i.r-t.r)*n,this.g=t.g+(i.g-t.g)*n,this.b=t.b+(i.b-t.b)*n,this}lerpHSL(t,i){this.getHSL(Ds),t.getHSL(Il);let n=Xu(Ds.h,Il.h,i),s=Xu(Ds.s,Il.s,i),r=Xu(Ds.l,Il.l,i);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let i=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*i+r[3]*n+r[6]*s,this.g=r[1]*i+r[4]*n+r[7]*s,this.b=r[2]*i+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mi=new Ft;Ft.NAMES=T0;var mo=class extends mi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hs,this.environmentIntensity=1,this.environmentRotation=new hs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}},xn=new F,ns=new F,ju=new F,ss=new F,Xr=new F,qr=new F,Mm=new F,Qu=new F,td=new F,ed=new F,id=new Ie,nd=new Ie,sd=new Ie,os=class e{constructor(t=new F,i=new F,n=new F){this.a=t,this.b=i,this.c=n}static getNormal(t,i,n,s){s.subVectors(n,i),xn.subVectors(t,i),s.cross(xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,i,n,s,r){xn.subVectors(s,i),ns.subVectors(n,i),ju.subVectors(t,i);let a=xn.dot(xn),o=xn.dot(ns),l=xn.dot(ju),c=ns.dot(ns),h=ns.dot(ju),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,i,n,s){return this.getBarycoord(t,i,n,s,ss)===null?!1:ss.x>=0&&ss.y>=0&&ss.x+ss.y<=1}static getInterpolation(t,i,n,s,r,a,o,l){return this.getBarycoord(t,i,n,s,ss)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ss.x),l.addScaledVector(a,ss.y),l.addScaledVector(o,ss.z),l)}static getInterpolatedAttribute(t,i,n,s,r,a){return id.setScalar(0),nd.setScalar(0),sd.setScalar(0),id.fromBufferAttribute(t,i),nd.fromBufferAttribute(t,n),sd.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(id,r.x),a.addScaledVector(nd,r.y),a.addScaledVector(sd,r.z),a}static isFrontFacing(t,i,n,s){return xn.subVectors(n,i),ns.subVectors(t,i),xn.cross(ns).dot(s)<0}set(t,i,n){return this.a.copy(t),this.b.copy(i),this.c.copy(n),this}setFromPointsAndIndices(t,i,n,s){return this.a.copy(t[i]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,i,n,s){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),ns.subVectors(this.a,this.b),xn.cross(ns).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return e.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,n,s,r){return e.getInterpolation(t,this.a,this.b,this.c,i,n,s,r)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let n=this.a,s=this.b,r=this.c,a,o;Xr.subVectors(s,n),qr.subVectors(r,n),Qu.subVectors(t,n);let l=Xr.dot(Qu),c=qr.dot(Qu);if(l<=0&&c<=0)return i.copy(n);td.subVectors(t,s);let h=Xr.dot(td),d=qr.dot(td);if(h>=0&&d<=h)return i.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),i.copy(n).addScaledVector(Xr,a);ed.subVectors(t,r);let f=Xr.dot(ed),g=qr.dot(ed);if(g>=0&&f<=g)return i.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),i.copy(n).addScaledVector(qr,o);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return Mm.subVectors(r,s),o=(d-h)/(d-h+(f-g)),i.copy(s).addScaledVector(Mm,o);let m=1/(p+y+u);return a=y*m,o=u*m,i.copy(n).addScaledVector(Xr,a).addScaledVector(qr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Bs=class{constructor(t=new F(1/0,1/0,1/0),i=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,n=t.length;i<n;i+=3)this.expandByPoint(yn.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,n=t.count;i<n;i++)this.expandByPoint(yn.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,n=t.length;i<n;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){let n=yn.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(i===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,yn):yn.fromBufferAttribute(r,a),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ll.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ll.copy(n.boundingBox)),Ll.applyMatrix4(t.matrixWorld),this.union(Ll)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,n;return t.normal.x>0?(i=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),i<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(to),Nl.subVectors(this.max,to),$r.subVectors(t.a,to),Yr.subVectors(t.b,to),Kr.subVectors(t.c,to),Fs.subVectors(Yr,$r),Us.subVectors(Kr,Yr),cr.subVectors($r,Kr);let i=[0,-Fs.z,Fs.y,0,-Us.z,Us.y,0,-cr.z,cr.y,Fs.z,0,-Fs.x,Us.z,0,-Us.x,cr.z,0,-cr.x,-Fs.y,Fs.x,0,-Us.y,Us.x,0,-cr.y,cr.x,0];return!rd(i,$r,Yr,Kr,Nl)||(i=[1,0,0,0,1,0,0,0,1],!rd(i,$r,Yr,Kr,Nl))?!1:(Dl.crossVectors(Fs,Us),i=[Dl.x,Dl.y,Dl.z],rd(i,$r,Yr,Kr,Nl))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(rs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),rs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),rs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),rs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),rs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),rs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),rs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),rs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(rs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},rs=[new F,new F,new F,new F,new F,new F,new F,new F],yn=new F,Ll=new Bs,$r=new F,Yr=new F,Kr=new F,Fs=new F,Us=new F,cr=new F,to=new F,Nl=new F,Dl=new F,hr=new F;function rd(e,t,i,n,s){for(let r=0,a=e.length-3;r<=a;r+=3){hr.fromArray(e,r);let o=s.x*Math.abs(hr.x)+s.y*Math.abs(hr.y)+s.z*Math.abs(hr.z),l=t.dot(hr),c=i.dot(hr),h=n.dot(hr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var qe=new F,Fl=new Et,yx=0,fe=class extends Dn{constructor(t,i,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yx++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=n,this.usage=kd,this.updateRanges=[],this.gpuType=bn,this.version=0,this._normalizationScale=t!==void 0?xh(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,i,n){t*=this.itemSize,n*=i.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=i.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,n=this.count;i<n;i++)Fl.fromBufferAttribute(this,i),Fl.applyMatrix3(t),this.setXY(i,Fl.x,Fl.y);else if(this.itemSize===3)for(let i=0,n=this.count;i<n;i++)qe.fromBufferAttribute(this,i),qe.applyMatrix3(t),this.setXYZ(i,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let i=0,n=this.count;i<n;i++)qe.fromBufferAttribute(this,i),qe.applyMatrix4(t),this.setXYZ(i,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let i=0,n=this.count;i<n;i++)qe.fromBufferAttribute(this,i),qe.applyNormalMatrix(t),this.setXYZ(i,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let i=0,n=this.count;i<n;i++)qe.fromBufferAttribute(this,i),qe.transformDirection(t),this.setXYZ(i,qe.x,qe.y,qe.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let n=this.array[t*this.itemSize+i];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,i,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+i]=n,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=this._denormalize(i)),i}setX(t,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=this._denormalize(i)),i}setY(t,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=this._denormalize(i)),i}setZ(t,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=this._denormalize(i)),i}setW(t,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,n){return t*=this.itemSize,this.normalized&&(i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=i,this.array[t+1]=n,this}setXYZ(t,i,n,s){return t*=this.itemSize,this.normalized&&(i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=i,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,i,n,s,r){return t*=this.itemSize,this.normalized&&(i=this._normalize(i),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=i,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let i=this._normalizationScale;return i!==void 0?Math.max(t/i,-1):M0(t,this.array)}_normalize(t){let i=this._normalizationScale;return i!==void 0?Math.round(t*i):b0(t,this.array)}};var go=class extends fe{constructor(t,i,n){super(new Uint16Array(t),i,n)}};var _o=class extends fe{constructor(t,i,n){super(new Uint32Array(t),i,n)}};var Se=class extends fe{constructor(t,i,n){super(new Float32Array(t),i,n)}},Sx=new Bs,eo=new F,ad=new F,Un=class{constructor(t=new F,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){let n=this.center;i!==void 0?n.copy(i):Sx.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){let n=this.center.distanceToSquared(t);return i.copy(t),n>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;eo.subVectors(t,this.center);let i=eo.lengthSq();if(i>this.radius*this.radius){let n=Math.sqrt(i),s=(n-this.radius)*.5;this.center.addScaledVector(eo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ad.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(eo.copy(t.center).add(ad)),this.expandByPoint(eo.copy(t.center).sub(ad))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Mx=0,an=new Te,od=new mi,Zr=new F,qi=new Bs,io=new Bs,ci=new F,Ge=class e extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ox(t)?_o:go)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,n=0){this.groups.push({start:t,count:i,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,i,n){return an.makeTranslation(t,i,n),this.applyMatrix4(an),this}scale(t,i,n){return an.makeScale(t,i,n),this.applyMatrix4(an),this}lookAt(t){return od.lookAt(t),od.updateMatrix(),this.applyMatrix4(od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Se(n,3))}else{let n=Math.min(t.length,i.count);for(let s=0;s<n;s++){let r=t[s];i.setXYZ(s,r.x,r.y,r.z||0)}t.length>i.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bs);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let r=i[n];qi.setFromBufferAttribute(r),this.morphTargetsRelative?(ci.addVectors(this.boundingBox.min,qi.min),this.boundingBox.expandByPoint(ci),ci.addVectors(this.boundingBox.max,qi.max),this.boundingBox.expandByPoint(ci)):(this.boundingBox.expandByPoint(qi.min),this.boundingBox.expandByPoint(qi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(qi.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let o=i[r];io.setFromBufferAttribute(o),this.morphTargetsRelative?(ci.addVectors(qi.min,io.min),qi.expandByPoint(ci),ci.addVectors(qi.max,io.max),qi.expandByPoint(ci)):(qi.expandByPoint(io.min),qi.expandByPoint(io.max))}qi.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ci.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ci));if(i)for(let r=0,a=i.length;r<a;r++){let o=i[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ci.fromBufferAttribute(o,c),l&&(Zr.fromBufferAttribute(t,c),ci.add(Zr)),s=Math.max(s,n.distanceToSquared(ci))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=i.position,s=i.normal,r=i.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new fe(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new F,l[D]=new F;let h=new F,d=new F,u=new F,f=new Et,g=new Et,y=new Et,p=new F,m=new F;function b(D,P,L){c[D]=c[P]=c[L]=1,h.fromBufferAttribute(n,D),d.fromBufferAttribute(n,P),u.fromBufferAttribute(n,L),f.fromBufferAttribute(r,D),g.fromBufferAttribute(r,P),y.fromBufferAttribute(r,L),d.sub(h),u.sub(h),g.sub(f),y.sub(f);let U=1/(g.x*y.y-y.x*g.y);isFinite(U)&&(p.copy(d).multiplyScalar(y.y).addScaledVector(u,-g.y).multiplyScalar(U),m.copy(u).multiplyScalar(g.x).addScaledVector(d,-y.x).multiplyScalar(U),o[D].add(p),o[P].add(p),o[L].add(p),l[D].add(m),l[P].add(m),l[L].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let D=0,P=A.length;D<P;++D){let L=A[D],U=L.start,O=L.count;for(let R=U,G=U+O;R<G;R+=3)b(t.getX(R+0),t.getX(R+1),t.getX(R+2))}let S=new F,w=new F,T=new F,_=new F;function M(D){T.fromBufferAttribute(s,D),_.copy(T);let P=o[D];S.copy(P),S.sub(T.multiplyScalar(T.dot(P))).normalize(),w.crossVectors(_,P);let U=w.dot(l[D])<0?-1:1;a.setXYZW(D,S.x,S.y,S.z,U)}for(let D=0,P=n.count;D<P;++D)c[D]&&M(D);this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==i.count)n=new fe(new Float32Array(i.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,d=new F;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),y=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(i,g),r.fromBufferAttribute(i,y),a.fromBufferAttribute(i,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=i.count;u<f;u+=3)s.fromBufferAttribute(i,u+0),r.fromBufferAttribute(i,u+1),a.fromBufferAttribute(i,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,n=t.count;i<n;i++)ci.fromBufferAttribute(t,i),ci.normalize(),t.setXYZ(i,ci.x,ci.y,ci.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new fe(u,h,d)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new e,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);i.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(i))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(i));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},gc=class{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=kd,this.updateRanges=[],this.version=0,this.uuid=Sr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,n){t*=this.stride,n*=i.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=i.array[n+s];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let i=bm(this.array);t.arrayBuffers[i]===void 0&&(t.arrayBuffers[i]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[i]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let i=bm(this.array);t.arrayBuffers[i]===void 0&&(t.arrayBuffers[i]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:i,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function bm(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=Sr()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+":"+e.byteOffset+":"+e.byteLength}var Ai=new F,vo=class e{constructor(t,i,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?xh(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,n=this.data.count;i<n;i++)Ai.fromBufferAttribute(this,i),Ai.applyMatrix4(t),this.setXYZ(i,Ai.x,Ai.y,Ai.z);return this}applyNormalMatrix(t){for(let i=0,n=this.count;i<n;i++)Ai.fromBufferAttribute(this,i),Ai.applyNormalMatrix(t),this.setXYZ(i,Ai.x,Ai.y,Ai.z);return this}transformDirection(t){for(let i=0,n=this.count;i<n;i++)Ai.fromBufferAttribute(this,i),Ai.transformDirection(t),this.setXYZ(i,Ai.x,Ai.y,Ai.z);return this}getComponent(t,i){let n=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,i,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+i]=n,this}setX(t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=this._denormalize(i)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=this._denormalize(i)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=this._denormalize(i)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=this._denormalize(i)),i}setXY(t,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(i=this._normalize(i),n=this._normalize(n)),this.data.array[t+0]=i,this.data.array[t+1]=n,this}setXYZ(t,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=i,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,i,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=this._normalize(i),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=i,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){uo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)i.push(this.data.array[s+r])}return new fe(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){uo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)i.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let i=this._normalizationScale;return i!==void 0?Math.max(t/i,-1):M0(t,this.data.array)}_normalize(t){let i=this._normalizationScale;return i!==void 0?Math.round(t*i):b0(t,this.data.array)}},ld=new F,bx=new F,Tx=new Ht,Sn=class{constructor(t=new F(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,n,s){return this.normal.set(t,i,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,n){let s=ld.subVectors(n,i).cross(bx.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,n=!0){let s=t.delta(ld),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:i.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let i=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return i<0&&n>0||n<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){let n=i||Tx.getNormalMatrix(t),s=this.coplanarPoint(ld).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Ex=0,On=class extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=ga,this.side=$s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ed,this.blendDst=wd,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=u0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ec,this.stencilZFail=ec,this.stencilZPass=ec,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let i in t){let n=t[i];if(n===void 0){zt(`Material: parameter '${i}' has value of undefined.`);continue}let s=this[i];if(s===void 0){zt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[i]=n}}toJSON(t){let i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(i){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ft().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Sn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Et().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Et().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=i[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let i=t.clippingPlanes,n=null;if(i!==null){let s=i.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=i[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ks=class extends On{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Jr,no=new F,jr=new F,Qr=new F,ta=new Et,so=new Et,E0=new Te,Ul=new F,ro=new F,Ol=new F,Tm=new Et,cd=new Et,Em=new Et,fr=class extends mi{constructor(t=new ks){if(super(),this.isSprite=!0,this.type="Sprite",Jr===void 0){Jr=new Ge;let i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new gc(i,5);Jr.setIndex([0,1,2,0,2,3]),Jr.setAttribute("position",new vo(n,3,0,!1)),Jr.setAttribute("uv",new vo(n,2,3,!1))}this.geometry=Jr,this.material=t,this.center=new Et(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,i){t.camera===null&&Gt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),jr.setFromMatrixScale(this.matrixWorld),E0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Qr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&jr.multiplyScalar(-Qr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Bl(Ul.set(-.5,-.5,0),Qr,a,jr,s,r),Bl(ro.set(.5,-.5,0),Qr,a,jr,s,r),Bl(Ol.set(.5,.5,0),Qr,a,jr,s,r),Tm.set(0,0),cd.set(1,0),Em.set(1,1);let o=t.ray.intersectTriangle(Ul,ro,Ol,!1,no);if(o===null&&(Bl(ro.set(-.5,.5,0),Qr,a,jr,s,r),cd.set(0,1),o=t.ray.intersectTriangle(Ul,Ol,ro,!1,no),o===null))return;let l=t.ray.origin.distanceTo(no);l<t.near||l>t.far||i.push({distance:l,point:no.clone(),uv:os.getInterpolation(no,Ul,ro,Ol,Tm,cd,Em,new Et),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let i=super.toJSON(t);return i.object.center=this.center.toArray(),i}};function Bl(e,t,i,n,s,r){ta.subVectors(e,i).addScalar(.5).multiply(n),s!==void 0?(so.x=r*ta.x-s*ta.y,so.y=s*ta.x+r*ta.y):so.copy(ta),e.copy(t),e.x+=so.x,e.y+=so.y,e.applyMatrix4(E0)}var as=new F,hd=new F,kl=new F,zl=new F,xo=class{constructor(t=new F,i=new F(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,as)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);let n=i.dot(this.direction);return n<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let i=as.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(as.copy(this.origin).addScaledVector(this.direction,i),as.distanceToSquared(t))}distanceSqToSegment(t,i,n,s){hd.copy(t).add(i).multiplyScalar(.5),kl.copy(i).sub(t).normalize(),zl.copy(this.origin).sub(hd);let r=t.distanceTo(i)*.5,a=-this.direction.dot(kl),o=zl.dot(this.direction),l=-zl.dot(kl),c=zl.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(hd).addScaledVector(kl,u),f}intersectSphere(t,i){if(t.radius<0)return null;as.subVectors(t.center,this.origin);let n=as.dot(this.direction),s=as.dot(as)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,i):this.at(o,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/i;return n>=0?n:null}intersectPlane(t,i){let n=this.distanceToPlane(t);return n===null?null:this.at(n,i)}intersectsPlane(t){let i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,i)}intersectsBox(t){return this.intersectBox(t,as)!==null}intersectTriangle(t,i,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=i.x-a.x,y=i.y-a.y,p=i.z-a.z,m=n.x-a.x,b=n.y-a.y,A=n.z-a.z,S=Math.abs(l),w=Math.abs(c),T=Math.abs(h),_,M,D,P,L,U,O,R,G,X,V,Q;if(S>=w&&S>=T?(D=l,U=d,G=g,Q=m,l>=0?(_=c,M=h,P=u,L=f,O=y,R=p,X=b,V=A):(_=h,M=c,P=f,L=u,O=p,R=y,X=A,V=b)):w>=T?(D=c,U=u,G=y,Q=b,c>=0?(_=h,M=l,P=f,L=d,O=p,R=g,X=A,V=m):(_=l,M=h,P=d,L=f,O=g,R=p,X=m,V=A)):(D=h,U=f,G=p,Q=A,h>=0?(_=l,M=c,P=d,L=u,O=g,R=y,X=m,V=b):(_=c,M=l,P=u,L=d,O=y,R=g,X=b,V=m)),D===0)return null;let W=_/D,j=M/D,tt=1/D,xt=P-W*U,Vt=L-j*U,Y=O-W*G,mt=R-j*G,Mt=X-W*Q,Ut=V-j*Q,_t=Mt*mt-Ut*Y,qt=xt*Ut-Vt*Mt,We=Y*Vt-mt*xt;if(s){if(_t<0||qt<0||We<0)return null}else if((_t<0||qt<0||We<0)&&(_t>0||qt>0||We>0))return null;let kt=_t+qt+We;if(kt===0)return null;let me=tt*(_t*U+qt*G+We*Q);return(kt>0?me<0:me>0)?null:this.at(me/kt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Bn=class extends On{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hs,this.combine=Ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},wm=new Te,ur=new xo,Gl=new Un,Am=new F,Vl=new F,Hl=new F,Wl=new F,ud=new F,Xl=new F,Rm=new F,ql=new F,Le=class extends mi{constructor(t=new Ge,i=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let i=this.geometry.morphAttributes,n=Object.keys(i);if(n.length>0){let s=i[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,i){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;i.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Xl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(ud.fromBufferAttribute(d,t),a?Xl.addScaledVector(ud,h):Xl.addScaledVector(ud.sub(i),h))}i.add(Xl)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gl.copy(n.boundingSphere),Gl.applyMatrix4(r),ur.copy(t.ray).recast(t.near),!(Gl.containsPoint(ur.origin)===!1&&(ur.intersectSphere(Gl,Am)===null||ur.origin.distanceToSquared(Am)>(t.far-t.near)**2))&&(wm.copy(r).invert(),ur.copy(t.ray).applyMatrix4(wm),!(n.boundingBox!==null&&ur.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,i,ur)))}_computeIntersections(t,i,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let p=u[g],m=a[p.materialIndex],b=Math.max(p.start,f.start),A=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let S=b,w=A;S<w;S+=3){let T=o.getX(S),_=o.getX(S+1),M=o.getX(S+2);s=$l(this,m,t,n,c,h,d,T,_,M),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,i.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let b=o.getX(p),A=o.getX(p+1),S=o.getX(p+2);s=$l(this,a,t,n,c,h,d,b,A,S),s&&(s.faceIndex=Math.floor(p/3),i.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let p=u[g],m=a[p.materialIndex],b=Math.max(p.start,f.start),A=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let S=b,w=A;S<w;S+=3){let T=S,_=S+1,M=S+2;s=$l(this,m,t,n,c,h,d,T,_,M),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,i.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){let b=p,A=p+1,S=p+2;s=$l(this,a,t,n,c,h,d,b,A,S),s&&(s.faceIndex=Math.floor(p/3),i.push(s))}}}};function wx(e,t,i,n,s,r,a,o){let l;if(t.side===Pi?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===$s,o),l===null)return null;ql.copy(o),ql.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(ql);return c<i.near||c>i.far?null:{distance:c,point:ql.clone(),object:e}}function $l(e,t,i,n,s,r,a,o,l,c){e.getVertexPosition(o,Vl),e.getVertexPosition(l,Hl),e.getVertexPosition(c,Wl);let h=wx(e,t,i,n,Vl,Hl,Wl,Rm);if(h){let d=new F;os.getBarycoord(Rm,Vl,Hl,Wl,d),s&&(h.uv=os.getInterpolatedAttribute(s,o,l,c,d,new Et)),r&&(h.uv1=os.getInterpolatedAttribute(r,o,l,c,d,new Et)),a&&(h.normal=os.getInterpolatedAttribute(a,o,l,c,d,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new F,materialIndex:0};os.getNormal(Vl,Hl,Wl,u.normal),h.face=u,h.barycoord=d}return h}var _c=class extends Ci{constructor(t=null,i=1,n=1,s,r,a,o,l,c=hi,h=hi,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:i,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dr=new Un,Ax=new Et(.5,.5),Yl=new F,zs=class{constructor(t=new Sn,i=new Sn,n=new Sn,s=new Sn,r=new Sn,a=new Sn){this.planes=[t,i,n,s,r,a]}set(t,i,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(i),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let i=this.planes;for(let n=0;n<6;n++)i[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,i=on,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],y=r[9],p=r[10],m=r[11],b=r[12],A=r[13],S=r[14],w=r[15];if(s[0].setComponents(c-a,f-h,m-g,w-b).normalize(),s[1].setComponents(c+a,f+h,m+g,w+b).normalize(),s[2].setComponents(c+o,f+d,m+y,w+A).normalize(),s[3].setComponents(c-o,f-d,m-y,w-A).normalize(),n)s[4].setComponents(l,u,p,S).normalize(),s[5].setComponents(c-l,f-u,m-p,w-S).normalize();else if(s[4].setComponents(c-l,f-u,m-p,w-S).normalize(),i===on)s[5].setComponents(c+l,f+u,m+p,w+S).normalize();else if(i===aa)s[5].setComponents(l,u,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(t){dr.center.set(0,0,0);let i=Ax.distanceTo(t.center);return dr.radius=.7071067811865476+i,dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(t){let i=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(i[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let i=this.planes;for(let n=0;n<6;n++){let s=i[n];if(Yl.x=s.normal.x>0?t.max.x:t.min.x,Yl.y=s.normal.y>0?t.max.y:t.min.y,Yl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Yl)<0)return!1}return!0}containsPoint(t){let i=this.planes;for(let n=0;n<6;n++)if(i[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Cm=new Te,vc=class e{constructor(){this.coordinateSystem=on,this._frustums=[],this._count=0}setFromArrayCamera(t){let i=t.cameras,n=this._frustums;for(let s=0;s<i.length;s++){let r=i[s];Cm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new zs),n[s].setFromProjectionMatrix(Cm,r.coordinateSystem,r.reversedDepth)}return this._count=i.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let i=this._frustums;for(let n=0;n<this._count;n++)if(i[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let i=this._frustums;for(let n=0;n<this._count;n++)if(i[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let i=this._frustums;for(let n=0;n<this._count;n++)if(i[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let i=this._frustums;for(let n=0;n<this._count;n++)if(i[n].intersectsBox(t))return!0;return!1}containsPoint(t){let i=this._frustums;for(let n=0;n<this._count;n++)if(i[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let i=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)i[s]===void 0&&(i[s]=new zs),i[s].copy(n[s]);return this._count=t._count,this}clone(){return new e().copy(this)}};var ha=class extends On{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Pm=new Te,_d=new xo,Kl=new Un,Zl=new F,Gs=class extends mi{constructor(t=new Ge,i=new ha){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kl.copy(n.boundingSphere),Kl.applyMatrix4(s),Kl.radius+=r,t.ray.intersectsSphere(Kl)===!1)return;Pm.copy(s).invert(),_d.copy(t.ray).applyMatrix4(Pm);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,y=f;g<y;g++){let p=c.getX(g);Zl.fromBufferAttribute(d,p),Im(Zl,p,l,s,t,i,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,y=f;g<y;g++)Zl.fromBufferAttribute(d,g),Im(Zl,g,l,s,t,i,this)}}updateMorphTargets(){let i=this.geometry.morphAttributes,n=Object.keys(i);if(n.length>0){let s=i[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Im(e,t,i,n,s,r,a){let o=_d.distanceSqToPoint(e);if(o<i){let l=new F;_d.closestPointToPoint(e,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var yo=class extends Ci{constructor(t=[],i=xr,n,s,r,a,o,l,c,h){super(t,i,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},pr=class extends Ci{constructor(t,i,n,s,r,a,o,l,c){super(t,i,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var us=class extends Ci{constructor(t,i,n=Mn,s,r,a,o=hi,l=hi,c,h=cs,d=1){if(h!==cs&&h!==ps)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:i,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new la(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}},So=class extends us{constructor(t,i=Mn,n=xr,s,r,a=hi,o=hi,l,c=cs){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,i,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Mo=class extends Ci{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Vs=class e extends Ge{constructor(t=1,i=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,i,t,a,r,0),g("z","y","x",1,-1,n,i,-t,a,r,1),g("x","z","y",1,1,t,n,i,s,a,2),g("x","z","y",1,-1,t,n,-i,s,a,3),g("x","y","z",1,-1,t,i,n,s,r,4),g("x","y","z",-1,-1,t,i,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(d,2));function g(y,p,m,b,A,S,w,T,_,M,D){let P=S/_,L=w/M,U=S/2,O=w/2,R=T/2,G=_+1,X=M+1,V=0,Q=0,W=new F;for(let j=0;j<X;j++){let tt=j*L-O;for(let xt=0;xt<G;xt++){let Vt=xt*P-U;W[y]=Vt*b,W[p]=tt*A,W[m]=R,c.push(W.x,W.y,W.z),W[y]=0,W[p]=0,W[m]=T>0?1:-1,h.push(W.x,W.y,W.z),d.push(xt/_),d.push(1-j/M),V+=1}}for(let j=0;j<M;j++)for(let tt=0;tt<_;tt++){let xt=u+tt+G*j,Vt=u+tt+G*(j+1),Y=u+(tt+1)+G*(j+1),mt=u+(tt+1)+G*j;l.push(xt,Vt,mt),l.push(Vt,Y,mt),Q+=6}o.addGroup(f,Q,D),f+=Q,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ua=class e extends Ge{constructor(t=1,i=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:n,thetaLength:s},i=Math.max(3,i);let r=[],a=[],o=[],l=[],c=new F,h=new Et;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=i;d++,u+=3){let f=n+d/i*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=i;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Se(a,3)),this.setAttribute("normal",new Se(o,3)),this.setAttribute("uv",new Se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},bo=class e extends Ge{constructor(t=1,i=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,y=[],p=n/2,m=0;b(),a===!1&&(t>0&&A(!0),i>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new Se(d,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(f,2));function b(){let S=new F,w=new F,T=0,_=(i-t)/n;for(let M=0;M<=r;M++){let D=[],P=M/r,L=P*(i-t)+t;for(let U=0;U<=s;U++){let O=U/s,R=O*l+o,G=Math.sin(R),X=Math.cos(R);w.x=L*G,w.y=-P*n+p,w.z=L*X,d.push(w.x,w.y,w.z),S.set(G,_,X).normalize(),u.push(S.x,S.y,S.z),f.push(O,1-P),D.push(g++)}y.push(D)}for(let M=0;M<s;M++)for(let D=0;D<r;D++){let P=y[D][M],L=y[D+1][M],U=y[D+1][M+1],O=y[D][M+1];(t>0||D!==0)&&(h.push(P,L,O),T+=3),(i>0||D!==r-1)&&(h.push(L,U,O),T+=3)}c.addGroup(m,T,0),m+=T}function A(S){let w=g,T=new Et,_=new F,M=0,D=S===!0?t:i,P=S===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,p*P,0),u.push(0,P,0),f.push(.5,.5),g++;let L=g;for(let U=0;U<=s;U++){let R=U/s*l+o,G=Math.cos(R),X=Math.sin(R);_.x=D*X,_.y=p*P,_.z=D*G,d.push(_.x,_.y,_.z),u.push(0,P,0),T.x=G*.5+.5,T.y=X*.5*P+.5,f.push(T.x,T.y),g++}for(let U=0;U<s;U++){let O=w+U,R=L+U;S===!0?h.push(R,R+1,O):h.push(R+1,R,O),M+=3}c.addGroup(m,M,S===!0?1:2),m+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Hs=class e extends Ge{constructor(t=1,i=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:n,heightSegments:s};let r=t/2,a=i/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=i/l,f=[],g=[],y=[],p=[];for(let m=0;m<h;m++){let b=m*u-a;for(let A=0;A<c;A++){let S=A*d-r;g.push(S,-b,0),y.push(0,0,1),p.push(A/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){let A=b+c*m,S=b+c*(m+1),w=b+1+c*(m+1),T=b+1+c*m;f.push(A,S,T),f.push(S,w,T)}this.setIndex(f),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(y,3)),this.setAttribute("uv",new Se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},To=class e extends Ge{constructor(t=.5,i=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=t,u=(i-t)/s,f=new F,g=new Et;for(let y=0;y<=s;y++){for(let p=0;p<=n;p++){let m=r+p/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/i+1)/2,g.y=(f.y/i+1)/2,h.push(g.x,g.y)}d+=u}for(let y=0;y<s;y++){let p=y*(n+1);for(let m=0;m<n;m++){let b=m+p,A=b,S=b+n+1,w=b+n+2,T=b+1;o.push(A,S,T),o.push(S,w,T)}}this.setIndex(o),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function Mr(e){let t={};for(let i in e){t[i]={};for(let n in e[i]){let s=e[i][n];if(Lm(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][n]=null):t[i][n]=s.clone();else if(Array.isArray(s))if(Lm(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[i][n]=r}else t[i][n]=s.slice();else t[i][n]=s}}return t}function Ti(e){let t={};for(let i=0;i<e.length;i++){let n=Mr(e[i]);for(let s in n)t[s]=n[s]}return t}function Lm(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Rx(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Gd(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var gs={clone:Mr,merge:Ti},Cx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Px=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Oe=class extends On{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cx,this.fragmentShader=Px,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mr(t.uniforms),this.uniformsGroups=Rx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?i.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?i.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?i.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?i.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?i.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?i.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?i.uniforms[s]={type:"m4",value:a.toArray()}:i.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(i.extensions=n),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=i[s.value]||null;break;case"c":this.uniforms[n].value=new Ft().setHex(s.value);break;case"v2":this.uniforms[n].value=new Et().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ie().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ht().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Te().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},da=class extends Oe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},kn=class extends On{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vh,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var xc=class extends On{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=c0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yc=class extends On{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ea(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Jl(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ws=class{constructor(t,i,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new i.constructor(n),this.sampleValues=i,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let i=this.parameterPositions,n=this._cachedIndex,s=i[n],r=i[n-1];t:{e:{let a;i:{n:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break n;return n=i.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=i[++n],t<s)break e}a=i.length;break i}if(!(t>=r)){let o=i[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=i[--n-1],t>=r)break e}a=n,n=0;break i}break t}for(;n<a;){let o=n+a>>>1;t<i[o]?a=o:n=o+1}if(s=i[n],r=i[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=i.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let i=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)i[a]=n[r+a];return i}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Sc=class extends Ws{constructor(t,i,n,s){super(t,i,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pd,endingEnd:pd}}intervalChanged_(t,i,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case md:r=t,o=2*i-n;break;case gd:r=s.length-2,o=i+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case md:a=t,l=2*n-i;break;case gd:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=i}let c=(n-i)*.5,h=this.valueSize;this._weightPrev=c/(i-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,i,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-i)/(s-i),y=g*g,p=y*g,m=-u*p+2*u*y-u*g,b=(1+u)*p+(-1.5-2*u)*y+(-.5+u)*g+1,A=(-1-f)*p+(1.5+f)*y+.5*g,S=f*p-f*y;for(let w=0;w!==o;++w)r[w]=m*a[h+w]+b*a[c+w]+A*a[l+w]+S*a[d+w];return r}},Mc=class extends Ws{constructor(t,i,n,s){super(t,i,n,s)}interpolate_(t,i,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-i)/(s-i),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},bc=class extends Ws{constructor(t,i,n,s){super(t,i,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Tc=class extends Ws{interpolate_(t,i,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-i)/(s-i),y=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*y+a[l+p]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let y=a[c+g],p=a[l+g],m=f*u+g*2,b=d[m],A=d[m+1],S=t*u+g*2,w=h[S],T=h[S+1],_=Lx(n,i,b,w,s);r[g]=w0(_,y,A,T,p)}return r}};function w0(e,t,i,n,s){let r=1-e;return r*r*r*t+3*r*r*e*i+3*r*e*e*n+e*e*e*s}function Ix(e,t,i,n,s){let r=1-e;return 3*r*r*(i-t)+6*r*e*(n-i)+3*e*e*(s-n)}function Lx(e,t,i,n,s){let r=(e-t)/(s-t);for(let a=0;a<8;a++){let o=w0(r,t,i,n,s)-e;if(Math.abs(o)<1e-10)break;let l=Ix(r,t,i,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var $i=class{constructor(t,i,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(i===void 0||i.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ea(i,this.TimeBufferType),this.values=ea(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let i=t.constructor,n;if(i.toJSON!==this.toJSON)n=i.toJSON(t);else{n={name:t.name,times:ea(t.times,Array),values:ea(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Jl(t.settings)&&(n.settings={inTangents:ea(t.settings.inTangents,Array),outTangents:ea(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new bc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Sc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let i=new Tc(this.times,this.values,this.getValueSize(),t);return this.settings&&(i.inTangents=this.settings.inTangents,i.outTangents=this.settings.outTangents),i}setInterpolation(t){let i;switch(t){case oo:i=this.InterpolantFactoryMethodDiscrete;break;case uc:i=this.InterpolantFactoryMethodLinear;break;case tc:i=this.InterpolantFactoryMethodSmooth;break;case fd:i=this.InterpolantFactoryMethodBezier;break}if(i===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return zt("KeyframeTrack:",n),this}return this.createInterpolant=i,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oo;case this.InterpolantFactoryMethodLinear:return uc;case this.InterpolantFactoryMethodSmooth:return tc;case this.InterpolantFactoryMethodBezier:return fd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let i=this.times;for(let n=0,s=i.length;n!==s;++n)i[n]+=t;Jl(this.settings)&&(Nm(this.settings.inTangents,t),Nm(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let i=this.times;for(let n=0,s=i.length;n!==s;++n)i[n]*=t;Jl(this.settings)&&(Dm(this.settings.inTangents,t),Dm(this.settings.outTangents,t))}return this}trim(t,i){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>i;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,i=this.getValueSize();i-Math.floor(i)!==0&&(Gt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Gt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Gt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Gt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&lx(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Gt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),i=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===tc,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let y=i[d+g];if(y!==i[u+g]||y!==i[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)i[u+f]=i[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)i[l+c]=i[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=i.slice(0,a*n)):(this.times=t,this.values=i),this}clone(){let t=this.times.slice(),i=this.values.slice(),n=this.constructor,s=new n(this.name,t,i);return s.createInterpolant=this.createInterpolant,Jl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Nm(e,t){for(let i=0,n=e.length;i!==n;i+=2)e[i]+=t}function Dm(e,t){for(let i=0,n=e.length;i!==n;i+=2)e[i]*=t}$i.prototype.ValueTypeName="";$i.prototype.TimeBufferType=Float32Array;$i.prototype.ValueBufferType=Float32Array;$i.prototype.DefaultInterpolation=uc;var Xs=class extends $i{constructor(t,i,n){super(t,i,n)}};Xs.prototype.ValueTypeName="bool";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=oo;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ec=class extends $i{constructor(t,i,n,s){super(t,i,n,s)}};Ec.prototype.ValueTypeName="color";var wc=class extends $i{constructor(t,i,n,s){super(t,i,n,s)}};wc.prototype.ValueTypeName="number";var Ac=class extends Ws{constructor(t,i,n,s){super(t,i,n,s)}interpolate_(t,i,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-i)/(s-i),c=t*o;for(let h=c+o;c!==h;c+=4)Fn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Eo=class extends $i{constructor(t,i,n,s){super(t,i,n,s)}InterpolantFactoryMethodLinear(t){return new Ac(this.times,this.values,this.getValueSize(),t)}};Eo.prototype.ValueTypeName="quaternion";Eo.prototype.InterpolantFactoryMethodSmooth=void 0;var qs=class extends $i{constructor(t,i,n){super(t,i,n)}};qs.prototype.ValueTypeName="string";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=oo;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;var Rc=class extends $i{constructor(t,i,n,s){super(t,i,n,s)}};Rc.prototype.ValueTypeName="vector";var Cc=class{constructor(t,i,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},A0=new Cc,Pc=class{constructor(t){this.manager=t!==void 0?t:A0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,i){let n=this;return new Promise(function(s,r){n.load(t,s,i,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Pc.DEFAULT_MATERIAL_NAME="__DEFAULT";var fa=class extends mi{static registerNode(t){this.prototype._lightNode=t}constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=i}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}};var dd=new Te,Fm=new F,Um=new F,wo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=Bi,this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let i=this.camera;Fm.setFromMatrixPosition(t.matrixWorld),i.position.copy(Fm),Um.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Um),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(t,i,n,s){dd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(dd,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===aa||t.reversedDepth?i.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):i.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),i.multiply(dd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},jl=new F,Ql=new Fn,Ln=new F,Ao=class extends mi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=on,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(jl,Ql,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jl,Ql,Ln.set(1,1,1)).invert()}updateWorldMatrix(t,i,n=!1){super.updateWorldMatrix(t,i,n),this.matrixWorld.decompose(jl,Ql,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jl,Ql,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Os=new F,Om=new Et,Bm=new Et,bi=class extends Ao{constructor(t=50,i=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let i=.5*this.getFilmHeight()/t;this.fov=dc*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Wu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dc*2*Math.atan(Math.tan(Wu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,n){Os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Os.x,Os.y).multiplyScalar(-t/Os.z),Os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Os.x,Os.y).multiplyScalar(-t/Os.z)}getViewSize(t,i){return this.getViewBounds(t,Om,Bm),i.subVectors(Bm,Om)}setViewOffset(t,i,n,s,r,a){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,i=t*Math.tan(Wu*.5*this.fov)/this.zoom,n=2*i,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,i-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,i,i-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}};var vd=class extends wo{constructor(){super(new bi(90,1,.5,500)),this.isPointLightShadow=!0}},mr=class extends fa{constructor(t,i,n=0,s=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}},gr=class extends Ao{constructor(t=-1,i=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+i,l=s-i;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}},xd=class extends wo{constructor(){super(new gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ro=class extends fa{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mi.DEFAULT_UP),this.updateMatrix(),this.target=new mi,this.shadow=new xd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}},Co=class extends fa{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}};var ia=-90,na=1,pa=class extends mi{constructor(t,i,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new bi(ia,na,t,i);s.layers=this.layers,this.add(s);let r=new bi(ia,na,t,i);r.layers=this.layers,this.add(r);let a=new bi(ia,na,t,i);a.layers=this.layers,this.add(a);let o=new bi(ia,na,t,i);o.layers=this.layers,this.add(o);let l=new bi(ia,na,t,i);l.layers=this.layers,this.add(l);let c=new bi(ia,na,t,i);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,i=this.children.concat(),[n,s,r,a,o,l]=i;for(let c of i)this.remove(c);if(t===on)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of i)this.add(c),c.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(i,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(i,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(i,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(i,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),n.texture.mipmapsAutoUpdate=y,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ic=class extends bi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},Po=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Nx.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Nx(){this._document.hidden===!1&&this.reset()}var Vd="\\[\\]\\.:\\/",Dx=new RegExp("["+Vd+"]","g"),Hd="[^"+Vd+"]",Fx="[^"+Vd.replace("\\.","")+"]",Ux=/((?:WC+[\/:])*)/.source.replace("WC",Hd),Ox=/(WCOD+)?/.source.replace("WCOD",Fx),Bx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hd),kx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hd),zx=new RegExp("^"+Ux+Ox+Bx+kx+"$"),Gx=["material","materials","bones","map"],yd=class{constructor(t,i,n){let s=n||we.parseTrackName(i);this._targetGroup=t,this._bindings=t.subscribe_(i,s)}getValue(t,i){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,i)}setValue(t,i){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,i)}bind(){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].bind()}unbind(){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].unbind()}},we=class e{constructor(t,i,n){this.path=i,this.parsedPath=n||e.parseTrackName(i),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,n){return t&&t.isAnimationObjectGroup?new e.Composite(t,i,n):new e(t,i,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Dx,"")}static parseTrackName(t){let i=zx.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Gx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(i);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===i||o.uuid===i)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[i++]=n[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,n=i.objectName,s=i.propertyName,r=i.propertyIndex;if(t||(t=e.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=i.objectIndex;switch(n){case"materials":if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=i.nodeName;Gt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=yd;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qT=new Float32Array(1);var Kd=class Kd{constructor(t,i,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let n=0;n<4;n++)this.elements[n]=t[n+i];return this}set(t,i,n,s){let r=this.elements;return r[0]=t,r[2]=i,r[1]=n,r[3]=s,this}};Kd.prototype.isMatrix2=!0;var Sd=Kd;function Wd(e,t,i,n){let s=Vx(n);switch(i){case Nd:return e*t;case Fd:return e*t/s.components*s.byteLength;case kc:return e*t/s.components*s.byteLength;case Ys:return e*t*2/s.components*s.byteLength;case zc:return e*t*2/s.components*s.byteLength;case Dd:return e*t*3/s.components*s.byteLength;case Tn:return e*t*4/s.components*s.byteLength;case Gc:return e*t*4/s.components*s.byteLength;case ko:case zo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Go:case Vo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Hc:case Xc:return Math.max(e,16)*Math.max(t,8)/4;case Vc:case Wc:return Math.max(e,8)*Math.max(t,8)/2;case qc:case $c:case Kc:case Zc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Yc:case Ho:case Jc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case jc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Qc:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case th:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case eh:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ih:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case nh:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case sh:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case rh:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ah:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case oh:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case lh:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ch:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case hh:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case uh:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case dh:case fh:case ph:return Math.ceil(e/4)*Math.ceil(t/4)*16;case mh:case gh:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Wo:case _h:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Vx(e){switch(e){case Bi:case Cd:return{byteLength:1,components:1};case va:case Pd:case gi:return{byteLength:2,components:1};case Oc:case Bc:return{byteLength:2,components:4};case Mn:case Uc:case bn:return{byteLength:4,components:1};case Id:case Ld:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function K0(){let e=null,t=!1,i=null,n=null;function s(r,a){n=e.requestAnimationFrame(s),i(r,a)}return{start:function(){t!==!0&&i!==null&&e!==null&&(n=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){i=r},setContext:function(r){e=r}}}function Wx(e){let t=new WeakMap;function i(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=e.SHORT;else if(c instanceof Uint32Array)f=e.UNSIGNED_INT;else if(c instanceof Int32Array)f=e.INT;else if(c instanceof Int8Array)f=e.BYTE;else if(c instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];e.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,i(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Xx=`#ifdef USE_ALPHAHASH
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
#endif`,Ty=`#ifdef USE_ENVMAP
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
#endif`,Ey=`#ifdef USE_ENVMAP
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
#endif`,Vy=`uniform sampler2D dfgLUT;
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
}`,Hy=`
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
#endif`,T2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E2=`#ifdef USE_ROUGHNESSMAP
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
#endif`,V2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
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
}`,Zt={alphahash_fragment:Xx,alphahash_pars_fragment:qx,alphamap_fragment:$x,alphamap_pars_fragment:Yx,alphatest_fragment:Kx,alphatest_pars_fragment:Zx,aomap_fragment:Jx,aomap_pars_fragment:jx,batching_pars_vertex:Qx,batching_vertex:ty,begin_vertex:ey,beginnormal_vertex:iy,bsdfs:ny,iridescence_fragment:sy,bumpmap_pars_fragment:ry,clipping_planes_fragment:ay,clipping_planes_pars_fragment:oy,clipping_planes_pars_vertex:ly,clipping_planes_vertex:cy,color_fragment:hy,color_pars_fragment:uy,color_pars_vertex:dy,color_vertex:fy,common:py,defaultnormal_vertex:my,displacementmap_pars_vertex:gy,displacementmap_vertex:_y,emissivemap_fragment:vy,emissivemap_pars_fragment:xy,colorspace_fragment:yy,colorspace_pars_fragment:Sy,envmap_fragment:My,envmap_common_pars_fragment:by,envmap_pars_fragment:Ty,envmap_pars_vertex:Ey,envmap_physical_pars_fragment:Uy,envmap_vertex:wy,fog_vertex:Ay,fog_pars_vertex:Ry,fog_fragment:Cy,fog_pars_fragment:Py,gradientmap_pars_fragment:Iy,lightmap_pars_fragment:Ly,lights_lambert_fragment:Ny,lights_lambert_pars_fragment:Dy,lights_pars_begin:Fy,lights_toon_fragment:Oy,lights_toon_pars_fragment:By,lights_phong_fragment:ky,lights_phong_pars_fragment:zy,lights_physical_fragment:Gy,lights_physical_pars_fragment:Vy,lights_fragment_begin:Hy,lights_fragment_maps:Wy,lights_fragment_end:Xy,lightprobes_pars_fragment:qy,logdepthbuf_fragment:$y,logdepthbuf_pars_fragment:Yy,logdepthbuf_pars_vertex:Ky,logdepthbuf_vertex:Zy,map_fragment:Jy,map_pars_fragment:jy,map_particle_fragment:Qy,map_particle_pars_fragment:t2,metalnessmap_fragment:e2,metalnessmap_pars_fragment:i2,morphinstance_vertex:n2,morphcolor_vertex:s2,morphnormal_vertex:r2,morphtarget_pars_vertex:a2,morphtarget_vertex:o2,normal_fragment_begin:l2,normal_fragment_maps:c2,normal_pars_fragment:h2,normal_pars_vertex:u2,normal_vertex:d2,normalmap_pars_fragment:f2,clearcoat_normal_fragment_begin:p2,clearcoat_normal_fragment_maps:m2,clearcoat_pars_fragment:g2,iridescence_pars_fragment:_2,opaque_fragment:v2,packing:x2,premultiplied_alpha_fragment:y2,project_vertex:S2,dithering_fragment:M2,dithering_pars_fragment:b2,roughnessmap_fragment:T2,roughnessmap_pars_fragment:E2,shadowmap_pars_fragment:w2,shadowmap_pars_vertex:A2,shadowmap_vertex:R2,shadowmask_pars_fragment:C2,skinbase_vertex:P2,skinning_pars_vertex:I2,skinning_vertex:L2,skinnormal_vertex:N2,specularmap_fragment:D2,specularmap_pars_fragment:F2,tonemapping_fragment:U2,tonemapping_pars_fragment:O2,transmission_fragment:B2,transmission_pars_fragment:k2,uv_pars_fragment:z2,uv_pars_vertex:G2,uv_vertex:V2,worldpos_vertex:H2,background_vert:W2,background_frag:X2,backgroundCube_vert:q2,backgroundCube_frag:$2,cube_vert:Y2,cube_frag:K2,depth_vert:Z2,depth_frag:J2,distance_vert:j2,distance_frag:Q2,equirect_vert:tS,equirect_frag:eS,linedashed_vert:iS,linedashed_frag:nS,meshbasic_vert:sS,meshbasic_frag:rS,meshlambert_vert:aS,meshlambert_frag:oS,meshmatcap_vert:lS,meshmatcap_frag:cS,meshnormal_vert:hS,meshnormal_frag:uS,meshphong_vert:dS,meshphong_frag:fS,meshphysical_vert:pS,meshphysical_frag:mS,meshtoon_vert:gS,meshtoon_frag:_S,points_vert:vS,points_frag:xS,shadow_vert:yS,shadow_frag:SS,sprite_vert:MS,sprite_frag:bS},pt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Vn={basic:{uniforms:Ti([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Ti([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ft(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Ti([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Ti([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Ti([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Ti([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Ti([pt.points,pt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Ti([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Ti([pt.common,pt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Ti([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Ti([pt.sprite,pt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:Ti([pt.common,pt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:Ti([pt.lights,pt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Vn.physical={uniforms:Ti([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var yh={r:0,b:0,g:0},TS=new Te,Z0=new Ht;Z0.set(-1,0,0,0,1,0,0,0,1);function ES(e,t,i,n,s,r){let a=new Ft(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){let S=b.backgroundBlurriness>0;A=t.get(A,S)}return A}function g(b){let A=!1,S=f(b);S===null?p(a,o):S&&S.isColor&&(p(S,1),A=!0);let w=e.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function y(b,A){let S=f(A);S&&S.isCubeTexture?(c===void 0&&(c=new Le(new Vs(1,1,1),new Oe({name:"BackgroundCubeMaterial",uniforms:Mr(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(TS.makeRotationFromEuler(A.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Z0),c.material.toneMapped=jt.getTransfer(S.colorSpace)!==ce,(h!==S||d!==S.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=e.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Le(new Hs(2,2),new Oe({name:"BackgroundMaterial",uniforms:Mr(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:$s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=jt.getTransfer(S.colorSpace)!==ce,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=e.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,A){b.getRGB(yh,Gd(e)),i.buffers.color.setClear(yh.r,yh.g,yh.b,A,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,A=1){a.set(b),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(a,o)},render:g,addToRenderList:y,dispose:m}}function wS(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(L,U,O,R,G){let X=!1,V=d(L,R,O,U);r!==V&&(r=V,c(r.object)),X=f(L,R,O,G),X&&g(L,R,O,G),G!==null&&t.update(G,e.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,S(L,U,O,R),G!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return e.createVertexArray()}function c(L){return e.bindVertexArray(L)}function h(L){return e.deleteVertexArray(L)}function d(L,U,O,R){let G=R.wireframe===!0,X=n[U.id];X===void 0&&(X={},n[U.id]=X);let V=L.isInstancedMesh===!0?L.id:0,Q=X[V];Q===void 0&&(Q={},X[V]=Q);let W=Q[O.id];W===void 0&&(W={},Q[O.id]=W);let j=W[G];return j===void 0&&(j=u(l()),W[G]=j),j}function u(L){let U=[],O=[],R=[];for(let G=0;G<i;G++)U[G]=0,O[G]=0,R[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:R,object:L,attributes:{},index:null}}function f(L,U,O,R){let G=r.attributes,X=U.attributes,V=0,Q=O.getAttributes();for(let W in Q)if(Q[W].location>=0){let tt=G[W],xt=X[W];if(xt===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(xt=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(xt=L.instanceColor)),tt===void 0||tt.attribute!==xt||xt&&tt.data!==xt.data)return!0;V++}return r.attributesNum!==V||r.index!==R}function g(L,U,O,R){let G={},X=U.attributes,V=0,Q=O.getAttributes();for(let W in Q)if(Q[W].location>=0){let tt=X[W];tt===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(tt=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(tt=L.instanceColor));let xt={};xt.attribute=tt,tt&&tt.data&&(xt.data=tt.data),G[W]=xt,V++}r.attributes=G,r.attributesNum=V,r.index=R}function y(){let L=r.newAttributes;for(let U=0,O=L.length;U<O;U++)L[U]=0}function p(L){m(L,0)}function m(L,U){let O=r.newAttributes,R=r.enabledAttributes,G=r.attributeDivisors;O[L]=1,R[L]===0&&(e.enableVertexAttribArray(L),R[L]=1),G[L]!==U&&(e.vertexAttribDivisor(L,U),G[L]=U)}function b(){let L=r.newAttributes,U=r.enabledAttributes;for(let O=0,R=U.length;O<R;O++)U[O]!==L[O]&&(e.disableVertexAttribArray(O),U[O]=0)}function A(L,U,O,R,G,X,V){V===!0?e.vertexAttribIPointer(L,U,O,G,X):e.vertexAttribPointer(L,U,O,R,G,X)}function S(L,U,O,R){y();let G=R.attributes,X=O.getAttributes(),V=U.defaultAttributeValues;for(let Q in X){let W=X[Q];if(W.location>=0){let j=G[Q];if(j===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),j!==void 0){let tt=j.normalized,xt=j.itemSize,Vt=t.get(j);if(Vt===void 0)continue;let Y=Vt.buffer,mt=Vt.type,Mt=Vt.bytesPerElement,Ut=mt===e.INT||mt===e.UNSIGNED_INT||j.gpuType===Uc;if(j.isInterleavedBufferAttribute){let _t=j.data,qt=_t.isInterleavedBuffer===!0?_t.stride:_t.itemSize,We=j.offset;if(_t.isInstancedInterleavedBuffer||_t.isInstancedBufferAttribute){for(let kt=0;kt<W.locationSize;kt++)m(W.location+kt,_t.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let kt=0;kt<W.locationSize;kt++)p(W.location+kt);e.bindBuffer(e.ARRAY_BUFFER,Y);for(let kt=0;kt<W.locationSize;kt++)A(W.location+kt,xt/W.locationSize,mt,tt,qt*Mt,(We+xt/W.locationSize*kt)*Mt,Ut)}else{if(j.isInstancedBufferAttribute){for(let _t=0;_t<W.locationSize;_t++)m(W.location+_t,j.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let _t=0;_t<W.locationSize;_t++)p(W.location+_t);e.bindBuffer(e.ARRAY_BUFFER,Y);for(let _t=0;_t<W.locationSize;_t++)A(W.location+_t,xt/W.locationSize,mt,tt,xt*Mt,xt/W.locationSize*_t*Mt,Ut)}}else if(V!==void 0){let tt=V[Q];if(tt!==void 0)switch(tt.length){case 2:e.vertexAttrib2fv(W.location,tt);break;case 3:e.vertexAttrib3fv(W.location,tt);break;case 4:e.vertexAttrib4fv(W.location,tt);break;default:e.vertexAttrib1fv(W.location,tt)}}}}b()}function w(){D();for(let L in n){let U=n[L];for(let O in U){let R=U[O];for(let G in R){let X=R[G];for(let V in X)h(X[V].object),delete X[V];delete R[G]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;let U=n[L.id];for(let O in U){let R=U[O];for(let G in R){let X=R[G];for(let V in X)h(X[V].object),delete X[V];delete R[G]}}delete n[L.id]}function _(L){for(let U in n){let O=n[U];for(let R in O){let G=O[R];if(G[L.id]===void 0)continue;let X=G[L.id];for(let V in X)h(X[V].object),delete X[V];delete G[L.id]}}}function M(L){for(let U in n){let O=n[U],R=L.isInstancedMesh===!0?L.id:0,G=O[R];if(G!==void 0){for(let X in G){let V=G[X];for(let Q in V)h(V[Q].object),delete V[Q];delete G[X]}delete O[R],Object.keys(O).length===0&&delete n[U]}}}function D(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:p,disableUnusedAttributes:b}}function AS(e,t,i){let n;function s(l){n=l}function r(l,c){e.drawArrays(n,l,c),i.update(c,n,1)}function a(l,c,h){h!==0&&(e.drawArraysInstanced(n,l,c,h),i.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];i.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function RS(e,t,i,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Tn&&n.convert(_)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let M=_===gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Bi&&_!==bn&&!M&&n.convert(_)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision!==void 0?i.precision:"highp",h=l(c);h!==c&&(zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.logarithmicDepthBuffer===!0&&d===!1;i.reversedDepthBuffer===!0&&d===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),i.logarithmicDepthBuffer===!0&&d===!0&&zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),p=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),m=e.getParameter(e.MAX_VERTEX_ATTRIBS),b=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),A=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),w=e.getParameter(e.MAX_SAMPLES),T=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:S,maxSamples:w,samples:T}}function CS(e){let t=this,i=null,n=0,s=!1,r=!1,a=new Sn,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){i=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,m=e.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let b=r?0:n,A=b*4,S=m.clippingState||null;l.value=S,S=h(g,u,A,f);for(let w=0;w!==A;++w)S[w]=i[w];m.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==i&&(l.value=i,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let m=f+y*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let A=0,S=f;A!==y;++A,S+=4)a.copy(d[A]).applyMatrix4(b,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var $o=class extends Qe{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new yo(s),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vs(5,5,5),r=new Oe({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pi,blending:ds});r.uniforms.tEquirect.value=i;let a=new Le(s,r),o=i.minFilter;return i.minFilter===fs&&(i.minFilter=Ri),new pa(1,10,this).update(t,a),i.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,i=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(i,n,s);t.setRenderTarget(r)}},R0=256,PS=3,IS=20,J0=256,j0=16,LS=3,NS=new F,DS=new Ft,Mh=class e{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new pa(1,10,null),this._boxMesh=new Le(new Vs(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,i=0,n=.1,s=100,r={}){let{size:a=256,position:o=NS}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);i>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,y=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(t.background=l.getClearColor(DS));let p=new pa(n,s,h);return p.position.copy(o),p.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=g,t.background=y,i>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,i)),this._applyPMREM(c),c}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=I0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=P0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,i){return i>0?1-Math.sqrt(1-t/i):0}_setSize(t){this._cubeSize=Math.max(R0,S0(t))}_fromTexture(t,i){t.mapping===xr||t.mapping===_a?this._setSize(t.image.length===0?R0:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=i||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,i=C0(t,!1,!1),n=Math.log2(t)-PS;for(let s=0;s<=n;s++)i.texture.mipmaps.push({width:t>>s,height:t>>s});return i.texture.name="PMREM",i.texture.isPMREMTexture=!0,i}_getSourceTarget(t=!1){let i=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==i||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=C0(i,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,i,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=i;let a=t.width>>i;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let i;t.mapping===xr||t.mapping===_a?(this._cubemapMaterial===null&&(this._cubemapMaterial=I0()),i=this._cubemapMaterial,i.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=P0()),i=this._equirectMaterial),i.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,i)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=FS(),this._integrationMaterial=US());let i=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(i/j0);for(let a=0;a<=n;a++){let o=e.lodToRoughness(a,n);if(a>n-LS)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(i)+.5*Math.log2(6/(J0*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,i){this._blurMaterial===null&&(this._blurMaterial=OS());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(i,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function C0(e,t,i){return new $o(e,{minFilter:fs,generateMipmaps:t,type:gi,colorSpace:lo,depthBuffer:i})}function Yo(e,t,i){return new Oe({name:e,uniforms:t,vertexShader:Zt.cube_vert,fragmentShader:i,side:Pi,blending:ds,depthTest:!1,depthWrite:!1})}function FS(){return Yo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${J0}u

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
	`)}function US(){return Yo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:j0}},`

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
	`)}function OS(){return Yo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

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
	`)}function P0(){return Yo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function I0(){return Yo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function BS(e){let t=new WeakMap,i=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Nc||f===Dc)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new $o(g.height);return y.fromEquirectangularTexture(e,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,g=f===Nc||f===Dc,y=f===xr||f===_a;if(g||y){let p=i.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Mh(e)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,i.set(u,p),p.texture;if(p!==void 0)return p.texture;{let b=u.image;return g&&b&&b.height>0||y&&b&&l(b)?(n===null&&(n=new Mh(e)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,i.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===Nc?u.mapping=xr:f===Dc&&(u.mapping=_a),u}function l(u){let f=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=i.get(f);g!==void 0&&(i.delete(f),g.dispose())}function d(){t=new WeakMap,i=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function kS(e){let t={};function i(n){if(t[n]!==void 0)return t[n];let s=e.getExtension(n);return t[n]=s,s}return{has:function(n){return i(n)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(n){let s=i(n);return s===null&&ao("WebGLRenderer: "+n+" extension not supported."),s}}}function zS(e,t,i,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let y=r.get(g);y&&(t.remove(y),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function c(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),i.memory.geometries++),y}function h(g){let y=g.attributes;for(let p in y)t.update(y[p],e.ARRAY_BUFFER)}function d(g){let y=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let b=y!==null?y.array.length:p.array.length/3-1,A=p.count>=65535?_o:go,S=new A(Math.ceil(b/3)*6,1),w=S.array;if(y!==null){let _=y.array;m=y.version;for(let M=0,D=0;M<b;M+=3){let P=_[M+0],L=_[M+1],U=_[M+2];w[D++]=P,w[D++]=L,w[D++]=L,w[D++]=U,w[D++]=U,w[D++]=P}}else{m=p.version;for(let _=0,M=0;_<b;_+=3){let D=_+0,P=_+1,L=_+2;w[M++]=D,w[M++]=P,w[M++]=P,w[M++]=L,w[M++]=L,w[M++]=D}}S.version=m;let T=r.get(g);T&&t.remove(T),r.set(g,S)}function u(g){let y=r.get(g);if(y){let p=g.index;p!==null&&y.version<p.version&&d(g)}else d(g);return r.get(g)}function f(){for(let g in s){let y=s[g].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function GS(e,t,i){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){e.drawElements(n,u,r,d*a),i.update(u,n,1)}function c(d,u,f){f!==0&&(e.drawElementsInstanced(n,u,r,d*a,f),i.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let y=0;for(let p=0;p<f;p++)y+=u[p];i.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function VS(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(i.calls++,a){case e.TRIANGLES:i.triangles+=o*(r/3);break;case e.LINES:i.lines+=o*(r/2);break;case e.LINE_STRIP:i.lines+=o*(r-1);break;case e.LINE_LOOP:i.lines+=o*r;break;case e.POINTS:i.points+=o*r;break;default:Gt("WebGLInfo: Unknown draw mode:",a);break}}function s(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:s,update:n}}function HS(e,t,i){let n=new WeakMap,s=new Ie;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let D=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",D)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),y===!0&&(A=3);let S=o.attributes.position.count*A,w=1;S>t.maxTextureSize&&(w=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let T=new Float32Array(S*w*4*d),_=new fo(T,S,w,d);_.type=bn,_.needsUpdate=!0;let M=A*4;for(let P=0;P<d;P++){let L=p[P],U=m[P],O=b[P],R=S*w*4*P;for(let G=0;G<L.count;G++){let X=G*M;f===!0&&(s.fromBufferAttribute(L,G),T[R+X+0]=s.x,T[R+X+1]=s.y,T[R+X+2]=s.z,T[R+X+3]=0),g===!0&&(s.fromBufferAttribute(U,G),T[R+X+4]=s.x,T[R+X+5]=s.y,T[R+X+6]=s.z,T[R+X+7]=0),y===!0&&(s.fromBufferAttribute(O,G),T[R+X+8]=s.x,T[R+X+9]=s.y,T[R+X+10]=s.z,T[R+X+11]=O.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new Et(S,w)},n.set(o,u),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",a.morphTexture,i);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:r}}function WS(e,t,i,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&i.update(c.instanceColor,e.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:a,dispose:o}}var XS={[Lo]:"LINEAR_TONE_MAPPING",[No]:"REINHARD_TONE_MAPPING",[Do]:"CINEON_TONE_MAPPING",[vr]:"ACES_FILMIC_TONE_MAPPING",[Uo]:"AGX_TONE_MAPPING",[Oo]:"NEUTRAL_TONE_MAPPING",[Fo]:"CUSTOM_TONE_MAPPING"};function qS(e,t,i,n,s,r){let a=new Qe(t,i,{type:e,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Ge;h.setAttribute("position",new Se([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Se([0,2,0,0,2,0],2));let d=new da({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Le(h,d),f=new gr(-1,1,1,-1,0,1),g=null,y=null,p=!1,m,b=null,A=[],S=!1;this.setSize=function(w,T){a.setSize(w,T),o!==null&&o.setSize(w,T),l!==null&&l.setSize(w,T);for(let _=0;_<A.length;_++){let M=A[_];M.setSize&&M.setSize(w,T)}},this.setEffects=function(w){A=w,S=A.length>0&&A[0].isRenderPass===!0;let T=a.width,_=a.height;A.length>0&&o===null&&(o=new Qe(T,_,{type:gi,depthBuffer:!1,stencilBuffer:!1}),l=new Qe(T,_,{type:gi,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&A.some(D=>D.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new us(T,_),r===!0&&(c.format=ps,c.type=yr)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let D=0;D<A.length;D++){let P=A[D];P.setSize&&P.setSize(T,_),M&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(w,T){if(p||w.toneMapping===zn&&A.length===0)return!1;if(b=T,T!==null){let _=T.width,M=T.height;(a.width!==_||a.height!==M)&&this.setSize(_,M)}return S===!1&&w.setRenderTarget(a),m=w.toneMapping,w.toneMapping=zn,!0},this.hasRenderPass=function(){return S},this.end=function(w,T){w.toneMapping=m,p=!0;let _=a,M=o;for(let D=0;D<A.length;D++){let P=A[D];P.enabled!==!1&&(P.render(w,M,_,T),P.needsSwap!==!1&&(_=M,M=M===o?l:o))}if(g!==w.outputColorSpace||y!==w.toneMapping){g=w.outputColorSpace,y=w.toneMapping,d.defines={},jt.getTransfer(g)===ce&&(d.defines.SRGB_TRANSFER="");let D=XS[y];D&&(d.defines[D]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(b),w.render(u,f),b=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Q0=new Ci,tg=new us(1,1),eg=new So(1),ig=new fo,ng=new mc,sg=new yo,L0=[],N0=[],D0=new Float32Array(16),F0=new Float32Array(9),U0=new Float32Array(4);function ya(e,t,i){let n=e[0];if(n<=0||n>0)return e;let s=t*i,r=L0[s];if(r===void 0&&(r=new Float32Array(s),L0[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=i,e[a].toArray(r,o)}return r}function ti(e,t){if(e.length!==t.length)return!1;for(let i=0,n=e.length;i<n;i++)if(e[i]!==t[i])return!1;return!0}function ei(e,t){for(let i=0,n=t.length;i<n;i++)e[i]=t[i]}function Th(e,t){let i=N0[t];i===void 0&&(i=new Int32Array(t),N0[t]=i);for(let n=0;n!==t;++n)i[n]=e.allocateTextureUnit();return i}function $S(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function YS(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ti(i,t))return;e.uniform2fv(this.addr,t),ei(i,t)}}function KS(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(ti(i,t))return;e.uniform3fv(this.addr,t),ei(i,t)}}function ZS(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ti(i,t))return;e.uniform4fv(this.addr,t),ei(i,t)}}function JS(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(ti(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),ei(i,t)}else{if(ti(i,n))return;U0.set(n),e.uniformMatrix2fv(this.addr,!1,U0),ei(i,n)}}function jS(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(ti(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),ei(i,t)}else{if(ti(i,n))return;F0.set(n),e.uniformMatrix3fv(this.addr,!1,F0),ei(i,n)}}function QS(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(ti(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),ei(i,t)}else{if(ti(i,n))return;D0.set(n),e.uniformMatrix4fv(this.addr,!1,D0),ei(i,n)}}function tM(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function eM(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ti(i,t))return;e.uniform2iv(this.addr,t),ei(i,t)}}function iM(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ti(i,t))return;e.uniform3iv(this.addr,t),ei(i,t)}}function nM(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ti(i,t))return;e.uniform4iv(this.addr,t),ei(i,t)}}function sM(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function rM(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ti(i,t))return;e.uniform2uiv(this.addr,t),ei(i,t)}}function aM(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ti(i,t))return;e.uniform3uiv(this.addr,t),ei(i,t)}}function oM(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ti(i,t))return;e.uniform4uiv(this.addr,t),ei(i,t)}}function Eh(e){return e.version===0&&(e.compareFunction=Bd,e.needsUpdate=!0),e}function lM(e,t,i){let n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(e.uniform1i(this.addr,s),n[0]=s);let r;this.type===e.SAMPLER_2D_SHADOW?r=Eh(tg):r=Q0,i.setTexture2D(t||r,s)}function cM(e,t,i){let n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(e.uniform1i(this.addr,s),n[0]=s),i.setTexture3D(t||ng,s)}function hM(e,t,i){let n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(e.uniform1i(this.addr,s),n[0]=s);let r;this.type===e.SAMPLER_CUBE_SHADOW?r=Eh(eg):r=sg,i.setTextureCube(t||r,s)}function uM(e,t,i){let n=this.cache,s=i.allocateTextureUnit();n[0]!==s&&(e.uniform1i(this.addr,s),n[0]=s),i.setTexture2DArray(t||ig,s)}function dM(e){switch(e){case 5126:return $S;case 35664:return YS;case 35665:return KS;case 35666:return ZS;case 35674:return JS;case 35675:return jS;case 35676:return QS;case 5124:case 35670:return tM;case 35667:case 35671:return eM;case 35668:case 35672:return iM;case 35669:case 35673:return nM;case 5125:return sM;case 36294:return rM;case 36295:return aM;case 36296:return oM;case 35678:case 36198:case 36298:case 36306:case 35682:return lM;case 35679:case 36299:case 36307:return cM;case 35680:case 36300:case 36308:case 36293:return hM;case 36289:case 36303:case 36311:case 36292:return uM}}function fM(e,t){e.uniform1fv(this.addr,t)}function pM(e,t){let i=ya(t,this.size,2);e.uniform2fv(this.addr,i)}function mM(e,t){let i=ya(t,this.size,3);e.uniform3fv(this.addr,i)}function gM(e,t){let i=ya(t,this.size,4);e.uniform4fv(this.addr,i)}function _M(e,t){let i=ya(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function vM(e,t){let i=ya(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function xM(e,t){let i=ya(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function yM(e,t){e.uniform1iv(this.addr,t)}function SM(e,t){e.uniform2iv(this.addr,t)}function MM(e,t){e.uniform3iv(this.addr,t)}function bM(e,t){e.uniform4iv(this.addr,t)}function TM(e,t){e.uniform1uiv(this.addr,t)}function EM(e,t){e.uniform2uiv(this.addr,t)}function wM(e,t){e.uniform3uiv(this.addr,t)}function AM(e,t){e.uniform4uiv(this.addr,t)}function RM(e,t,i){let n=this.cache,s=t.length,r=Th(i,s);ti(n,r)||(e.uniform1iv(this.addr,r),ei(n,r));let a;this.type===e.SAMPLER_2D_SHADOW?a=Eh(tg):a=Q0;for(let o=0;o!==s;++o)i.setTexture2D(t[o]||a,r[o])}function CM(e,t,i){let n=this.cache,s=t.length,r=Th(i,s);ti(n,r)||(e.uniform1iv(this.addr,r),ei(n,r));for(let a=0;a!==s;++a)i.setTexture3D(t[a]||ng,r[a])}function PM(e,t,i){let n=this.cache,s=t.length,r=Th(i,s);ti(n,r)||(e.uniform1iv(this.addr,r),ei(n,r));let a;this.type===e.SAMPLER_CUBE_SHADOW?a=Eh(eg):a=sg;for(let o=0;o!==s;++o)i.setTextureCube(t[o]||a,r[o])}function IM(e,t,i){let n=this.cache,s=t.length,r=Th(i,s);ti(n,r)||(e.uniform1iv(this.addr,r),ei(n,r));for(let a=0;a!==s;++a)i.setTexture2DArray(t[a]||ig,r[a])}function LM(e){switch(e){case 5126:return fM;case 35664:return pM;case 35665:return mM;case 35666:return gM;case 35674:return _M;case 35675:return vM;case 35676:return xM;case 5124:case 35670:return yM;case 35667:case 35671:return SM;case 35668:case 35672:return MM;case 35669:case 35673:return bM;case 5125:return TM;case 36294:return EM;case 36295:return wM;case 36296:return AM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return CM;case 35680:case 36300:case 36308:case 36293:return PM;case 36289:case 36303:case 36311:case 36292:return IM}}var jd=class{constructor(t,i,n){this.id=t,this.addr=n,this.cache=[],this.type=i.type,this.setValue=dM(i.type)}},Qd=class{constructor(t,i,n){this.id=t,this.addr=n,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=LM(i.type)}},tf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,i[o.id],n)}}},Zd=/(\w+)(\])?(\[|\.)?/g;function O0(e,t){e.seq.push(t),e.map[t.id]=t}function NM(e,t,i){let n=e.name,s=n.length;for(Zd.lastIndex=0;;){let r=Zd.exec(n),a=Zd.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){O0(i,c===void 0?new jd(o,e,t):new Qd(o,e,t));break}else{let d=i.map[o];d===void 0&&(d=new tf(o),O0(i,d)),i=d}}}var xa=class{constructor(t,i){this.seq=[],this.map={};let n=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(i,a),l=t.getUniformLocation(i,o.name);NM(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,i,n,s){let r=this.map[i];r!==void 0&&r.setValue(t,n,s)}setOptional(t,i,n){let s=i[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,i,n,s){for(let r=0,a=i.length;r!==a;++r){let o=i[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,i){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in i&&n.push(a)}return n}};function B0(e,t,i){let n=e.createShader(t);return e.shaderSource(n,i),e.compileShader(n),n}var DM=37297,FM=0;function UM(e,t){let i=e.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,i.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${i[a]}`)}return n.join(`
`)}var k0=new Ht;function OM(e){jt._getMatrix(k0,jt.workingColorSpace,e);let t=`mat3( ${k0.elements.map(i=>i.toFixed(4))} )`;switch(jt.getTransfer(e)){case co:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function z0(e,t,i){let n=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return i.toUpperCase()+`

`+r+`

`+UM(e.getShaderSource(t),o)}else return r}function BM(e,t){let i=OM(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var kM={[Lo]:"Linear",[No]:"Reinhard",[Do]:"Cineon",[vr]:"ACESFilmic",[Uo]:"AgX",[Oo]:"Neutral",[Fo]:"Custom"};function zM(e,t){let i=kM[t];return i===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Sh=new F;function GM(){jt.getLuminanceCoefficients(Sh);let e=Sh.x.toFixed(4),t=Sh.y.toFixed(4),i=Sh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VM(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function HM(e){let t=[];for(let i in e){let n=e[i];n!==!1&&t.push("#define "+i+" "+n)}return t.join(`
`)}function WM(e,t){let i={},n=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=e.getActiveAttrib(t,s),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),i[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return i}function qo(e){return e!==""}function G0(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function V0(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var XM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ef(e){return e.replace(XM,qM)}function qM(e,t){let i=Zt[t];if(i===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return ef(i)}var $M=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function H0(e){return e.replace($M,YM)}function YM(e,t,i,n){let s="";for(let r=parseInt(t);r<parseInt(i);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function W0(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var KM={[Io]:"SHADOWMAP_TYPE_PCF",[ma]:"SHADOWMAP_TYPE_VSM"};function ZM(e){return KM[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var JM={[_a]:"ENVMAP_MODE_REFRACTION"};function jM(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":JM[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var QM={[Ad]:"ENVMAP_BLENDING_MULTIPLY",[a0]:"ENVMAP_BLENDING_MIX",[o0]:"ENVMAP_BLENDING_ADD"};function tb(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":QM[e.combine]||"ENVMAP_BLENDING_NONE"}function eb(e,t,i,n){let s=e.getContext(),r=i.defines,a=i.vertexShader,o=i.fragmentShader,l=ZM(i),c=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=jM(i),d=tb(i),u=VM(i),f=HM(r),g=s.createProgram(),y,p,m=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,f].filter(qo).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,f].filter(qo).join(`
`),p.length>0&&(p+=`
`)):(y=[W0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,f,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),p=[W0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,f,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+h:"",i.envMap?"#define "+d:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==zn?"#define TONE_MAPPING":"",i.toneMapping!==zn?Zt.tonemapping_pars_fragment:"",i.toneMapping!==zn?zM("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,BM("linearToOutputTexel",i.outputColorSpace),GM(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qo).join(`
`)),a=ef(a),a=G0(a,i),a=V0(a,i),o=ef(o),o=G0(o,i),o=V0(o,i),a=H0(a),o=H0(o),i.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",i.glslVersion===zd?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===zd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=m+y+a,A=m+p+o,S=B0(s,s.VERTEX_SHADER,b),w=B0(s,s.FRAGMENT_SHADER,A);s.attachShader(g,S),s.attachShader(g,w),i.index0AttributeName!==void 0?s.bindAttribLocation(g,0,i.index0AttributeName):i.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(P){if(e.debug.checkShaderErrors){let L=s.getProgramInfoLog(g)||"",U=s.getShaderInfoLog(S)||"",O=s.getShaderInfoLog(w)||"",R=L.trim(),G=U.trim(),X=O.trim(),V=!0,Q=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(V=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,g,S,w);else{let W=z0(s,S,"vertex"),j=z0(s,w,"fragment");Gt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+R+`
`+W+`
`+j)}else R!==""?zt("WebGLProgram: Program Info Log:",R):(G===""||X==="")&&(Q=!1);Q&&(P.diagnostics={runnable:V,programLog:R,vertexShader:{log:G,prefix:y},fragmentShader:{log:X,prefix:p}})}s.deleteShader(S),s.deleteShader(w),_=new xa(s,g),M=WM(s,g)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(g,DM)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=FM++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=w,this}var ib=0,nf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,n){let s=this._getShaderCacheForMaterial(t);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let i=this.materialCache.get(t);for(let n of i)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let i=this.materialCache,n=i.get(t);return n===void 0&&(n=new Set,i.set(t,n)),n}_getShaderStage(t){let i=this.shaderCache,n=i.get(t);return n===void 0&&(n=new sf(t),i.set(t,n)),n}},sf=class{constructor(t){this.id=ib++,this.code=t,this.usedTimes=0}};function nb(e){return e===Ys||e===Ho||e===Wo}function sb(e,t,i,n,s,r){let a=new po,o=new nf,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,M,D,P,L,U){let O=P.fog,R=L.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=t.get(_.envMap||G,X),Q=u[_.type],W=n.precision;_.precision!==null&&(W=n.getMaxPrecision(_.precision),W!==_.precision&&zt("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));let j=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,tt=j!==void 0?j.length:0,xt=0;R.morphAttributes.position!==void 0&&(xt=1),R.morphAttributes.normal!==void 0&&(xt=2),R.morphAttributes.color!==void 0&&(xt=3);let Vt,Y,mt,Mt;if(Q){let ft=Vn[Q];Vt=ft.vertexShader,Y=ft.fragmentShader}else{Vt=_.vertexShader,Y=_.fragmentShader;let ft=o.getVertexShaderStage(_),ge=o.getFragmentShaderStage(_);o.update(_,ft,ge),mt=ft.id,Mt=ge.id}let Ut=e.getRenderTarget(),_t=e.state.buffers.depth.getReversed(),qt=L.isInstancedMesh===!0,We=L.isBatchedMesh===!0,kt=!!_.map,me=!!_.matcap,xe=!!V,Qt=xe&&V.isPMREMTexture===!0,fi=!!_.aoMap,Je=!!_.lightMap,Oi=!!_.bumpMap&&_.wireframe===!1,Fe=!!_.normalMap,In=!!_.displacementMap,ai=!!_.emissiveMap,en=!!_.metalnessMap,nn=!!_.roughnessMap,sn=_.anisotropy>0,N=_.clearcoat>0,rn=_.diffuseRoughness>0,Ce=_.dispersion>0,Pe=_.retroreflectivity>0,dt=_.iridescence>0,je=_.sheen>0,Ot=_.transmission>0,Wt=sn&&!!_.anisotropyMap,E=N&&!!_.clearcoatMap,v=N&&!!_.clearcoatNormalMap,k=N&&!!_.clearcoatRoughnessMap,et=rn&&!!_.diffuseRoughnessMap,J=dt&&!!_.iridescenceMap,rt=dt&&!!_.iridescenceThicknessMap,ht=je&&!!_.sheenColorMap,$=je&&!!_.sheenRoughnessMap,K=!!_.specularMap,ot=!!_.specularColorMap,C=!!_.specularIntensityMap,Z=Ot&&!!_.transmissionMap,q=Ot&&!!_.thicknessMap,lt=!!_.gradientMap,nt=!!_.alphaMap,at=_.alphaTest>0,Pt=!!_.alphaHash,Kt=!!_.extensions,it=zn;_.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(it=e.toneMapping);let Dt=Qt?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Yt={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:Vt,fragmentShader:Y,defines:_.defines,customVertexShaderID:mt,customFragmentShaderID:Mt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:We,batchingColor:We&&L._colorsTexture!==null,instancing:qt,instancingColor:qt&&L.instanceColor!==null,instancingMorph:qt&&L.morphTexture!==null,outputColorSpace:Ut===null?e.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:jt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:kt,matcap:me,envMap:xe,envMapMode:xe&&V.mapping,envMapPMREM:Qt,envMapMaxLod:Qt?Dt.length-1:null,envMapSize:Qt?Dt[0].width:null,aoMap:fi,lightMap:Je,bumpMap:Oi,normalMap:Fe,displacementMap:In,emissiveMap:ai,normalMapObjectSpace:Fe&&_.normalMapType===h0,normalMapTangentSpace:Fe&&_.normalMapType===vh,packedNormalMap:Fe&&_.normalMapType===vh&&nb(_.normalMap.format),metalnessMap:en,roughnessMap:nn,anisotropy:sn,anisotropyMap:Wt,clearcoat:N,clearcoatMap:E,clearcoatNormalMap:v,clearcoatRoughnessMap:k,diffuseRoughness:rn,diffuseRoughnessMap:et,dispersion:Ce,retroreflection:Pe,iridescence:dt,iridescenceMap:J,iridescenceThicknessMap:rt,sheen:je,sheenColorMap:ht,sheenRoughnessMap:$,specularMap:K,specularColorMap:ot,specularIntensityMap:C,transmission:Ot,transmissionMap:Z,thicknessMap:q,gradientMap:lt,opaque:_.transparent===!1&&_.blending===ga&&_.alphaToCoverage===!1,alphaMap:nt,alphaTest:at,alphaHash:Pt,combine:_.combine,mapUv:kt&&f(_.map.channel),aoMapUv:fi&&f(_.aoMap.channel),lightMapUv:Je&&f(_.lightMap.channel),bumpMapUv:Oi&&f(_.bumpMap.channel),normalMapUv:Fe&&f(_.normalMap.channel),displacementMapUv:In&&f(_.displacementMap.channel),emissiveMapUv:ai&&f(_.emissiveMap.channel),metalnessMapUv:en&&f(_.metalnessMap.channel),roughnessMapUv:nn&&f(_.roughnessMap.channel),anisotropyMapUv:Wt&&f(_.anisotropyMap.channel),clearcoatMapUv:E&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:et&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:J&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:$&&f(_.sheenRoughnessMap.channel),specularMapUv:K&&f(_.specularMap.channel),specularColorMapUv:ot&&f(_.specularColorMap.channel),specularIntensityMapUv:C&&f(_.specularIntensityMap.channel),transmissionMapUv:Z&&f(_.transmissionMap.channel),thicknessMapUv:q&&f(_.thicknessMap.channel),alphaMapUv:nt&&f(_.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Fe||sn),vertexNormals:!!R.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!R.attributes.uv&&(kt||nt),fog:!!O,useFog:_.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||R.attributes.normal===void 0&&Fe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:xt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:U.filter(ft=>ft.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:it,decodeVideoTexture:kt&&_.map.isVideoTexture===!0&&jt.getTransfer(_.map.colorSpace)===ce,decodeVideoTextureEmissive:ai&&_.emissiveMap.isVideoTexture===!0&&jt.getTransfer(_.emissiveMap.colorSpace)===ce,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===cn,flipSided:_.side===Pi,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Kt&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&_.extensions.multiDraw===!0||We)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function y(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)M.push(D),M.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(p(M,_),m(M,_),M.push(e.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function p(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function m(_,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function b(_){let M=u[_.type],D;if(M){let P=Vn[M];D=gs.clone(P.uniforms)}else D=_.uniforms;return D}function A(_,M){let D=h.get(M);return D!==void 0?++D.usedTimes:(D=new eb(e,M,_,s),c.push(D),h.set(M,D)),D}function S(_){if(--_.usedTimes===0){let M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:b,acquireProgram:A,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:T}}function rb(){let e=new WeakMap;function t(a){return e.has(a)}function i(a){let o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function n(a){e.delete(a)}function s(a,o,l){e.get(a)[o]=l}function r(){e=new WeakMap}return{has:t,get:i,remove:n,update:s,dispose:r}}function ab(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function X0(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function q0(){let e=[],t=0,i=[],n=[],s=[];function r(){t=0,i.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,y,p,m){let b=e[t];return b===void 0?(b={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:p,group:m},e[t]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=g,b.materialVariant=a(u),b.groupOrder=y,b.renderOrder=u.renderOrder,b.z=p,b.group=m),t++,b}function l(u,f,g,y,p,m,b){b.reversedDepth===!0&&(p=-p);let A=o(u,f,g,y,p,m);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):i.push(A)}function c(u,f,g,y,p,m){let b=o(u,f,g,y,p,m);g.transmission>0?n.unshift(b):g.transparent===!0?s.unshift(b):i.unshift(b)}function h(u,f){i.length>1&&i.sort(u||ab),n.length>1&&n.sort(f||X0),s.length>1&&s.sort(f||X0)}function d(){for(let u=t,f=e.length;u<f;u++){let g=e[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:i,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function ob(){let e=new WeakMap;function t(n,s){let r=e.get(n),a;return r===void 0?(a=new q0,e.set(n,[a])):s>=r.length?(a=new q0,r.push(a)):a=r[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}function lb(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new F,color:new Ft};break;case"SpotLight":i={position:new F,direction:new F,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new F,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":i={direction:new F,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":i={color:new Ft,position:new F,halfWidth:new F,halfHeight:new F};break}return e[t.id]=i,i}}}function cb(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var hb=0;function ub(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function db(e){let t=new lb,i=cb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new Te,a=new Te;function o(c){let h=0,d=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,g=0,y=0,p=0,m=0,b=0,A=0,S=0,w=0,T=0,_=0,M=0,D=0,P=0;c.sort(ub);for(let U=0,O=c.length;U<O;U++){let R=c[U],G=R.color,X=R.intensity,V=R.distance,Q=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Ys?Q=R.shadow.map.texture:Q=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=G.r*X,d+=G.g*X,u+=G.b*X;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],X);P++}else if(R.isSunLight){let W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let j=R.shadow,tt=i.get(R);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=tt,n.sunShadowMap[g]=Q;let xt=j.getViewportCount();for(let Vt=0;Vt<xt;Vt++)n.sunShadowMatrix[y+Vt]=j.getMatrix(Vt),n.sunShadowCascade[y+Vt]=j._cascadeData[Vt];y+=xt,g++}n.sun[f]=W,f++}else if(R.isDirectionalLight){let W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let j=R.shadow,tt=i.get(R);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,n.directionalShadow[p]=tt,n.directionalShadowMap[p]=Q,n.directionalShadowMatrix[p]=R.shadow.matrix,w++}n.directional[p]=W,p++}else if(R.isSpotLight){let W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(G).multiplyScalar(X),W.distance=V,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[b]=W;let j=R.shadow;if(R.map&&(n.spotLightMap[M]=R.map,M++,j.updateMatrices(R),R.castShadow&&D++),n.spotLightMatrix[b]=j.matrix,R.castShadow){let tt=i.get(R);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,n.spotShadow[b]=tt,n.spotShadowMap[b]=Q,_++}b++}else if(R.isRectAreaLight){let W=t.get(R);W.color.copy(G).multiplyScalar(X),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[A]=W,A++}else if(R.isPointLight){let W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){let j=R.shadow,tt=i.get(R);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,tt.shadowCameraNear=j.camera.near,tt.shadowCameraFar=j.camera.far,n.pointShadow[m]=tt,n.pointShadowMap[m]=Q,n.pointShadowMatrix[m]=R.shadow.matrix,T++}n.point[m]=W,m++}else if(R.isHemisphereLight){let W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(X),W.groundColor.copy(R.groundColor).multiplyScalar(X),n.hemi[S]=W,S++}}A>0&&(e.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.sunLength!==f||L.directionalLength!==p||L.pointLength!==m||L.spotLength!==b||L.rectAreaLength!==A||L.hemiLength!==S||L.numSunShadows!==g||L.numDirectionalShadows!==w||L.numPointShadows!==T||L.numSpotShadows!==_||L.numSpotMaps!==M||L.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=p,n.spot.length=b,n.rectArea.length=A,n.point.length=m,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+M-D,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=P,L.sunLength=f,L.directionalLength=p,L.pointLength=m,L.spotLength=b,L.rectAreaLength=A,L.hemiLength=S,L.numSunShadows=g,L.numDirectionalShadows=w,L.numPointShadows=T,L.numSpotShadows=_,L.numSpotMaps=M,L.numLightProbes=P,n.version=hb++)}function l(c,h){let d=0,u=0,f=0,g=0,y=0,p=0,m=h.matrixWorldInverse;for(let b=0,A=c.length;b<A;b++){let S=c[b];if(S.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(m),d++}else if(S.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(S.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),g++}else if(S.isRectAreaLight){let w=n.rectArea[y];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let w=n.hemi[p];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function $0(e){let t=new db(e),i=[],n=[],s=[];function r(d){h.camera=d,i.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):i.push(d)}function o(d){n.push(d)}function l(){t.setup(i),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(i,d)}let h={lightsArray:i,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function fb(e){let t=new WeakMap;function i(s,r=0){let a=t.get(s),o;return a===void 0?(o=new $0(e),t.set(s,[o])):r>=a.length?(o=new $0(e),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:i,dispose:n}}var pb=`void main() {
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
}`,gb=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],_b=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Y0=new Te,Xo=new F,Jd=new F;function vb(e,t,i){let n=new zs,s=new Et,r=new Et,a=new Ie,o=new xc,l=new yc,c={},h=i.maxTextureSize,d={[$s]:Pi,[Pi]:$s,[cn]:cn},u=new Oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:pb,fragmentShader:mb}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ge;g.setAttribute("position",new fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Le(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Io;let m=this.type;this.render=function(T,_,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Gm&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Io);let D=e.getRenderTarget(),P=e.getActiveCubeFace(),L=e.getActiveMipmapLevel(),U=e.state;U.setBlending(ds),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let O=m!==this.type;O&&_.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(G=>G.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,G=T.length;R<G;R++){let X=T[R],V=X.shadow;if(V===void 0){zt("WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let Q=V.getFrameExtents();s.multiply(Q),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,V.mapSize.y=r.y));let W=e.state.buffers.depth.getReversed();if(V.camera._reversedDepth=W,V.map===null||O===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===ma){if(X.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Qe(s.x,s.y,{format:Ys,type:gi,minFilter:Ri,magFilter:Ri,generateMipmaps:!1}),V.map.texture.name=X.name+".shadowMap",V.map.depthTexture=new us(s.x,s.y,bn),V.map.depthTexture.name=X.name+".shadowMapDepth",V.map.depthTexture.format=cs,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=hi,V.map.depthTexture.magFilter=hi}else X.isPointLight?(V.map=new $o(s.x),V.map.depthTexture=new So(s.x,Mn)):(V.map=new Qe(s.x,s.y),V.map.depthTexture=new us(s.x,s.y,Mn)),V.map.depthTexture.name=X.name+".shadowMap",V.map.depthTexture.format=cs,this.type===Io?(V.map.depthTexture.compareFunction=W?Od:Ud,V.map.depthTexture.minFilter=Ri,V.map.depthTexture.magFilter=Ri):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=hi,V.map.depthTexture.magFilter=hi);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let j=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();X.isPointLight!==!0&&V.updateMatrices(X,M);let tt=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:M.layers;for(let xt=0;xt<j;xt++){let Vt=V.getCamera(xt);if(X.isPointLight){let Y=V.camera,mt=V.matrix,Mt=X.distance||Y.far;Mt!==Y.far&&(Y.far=Mt,Y.updateProjectionMatrix()),Xo.setFromMatrixPosition(X.matrixWorld),Y.position.copy(Xo),Jd.copy(Y.position),Jd.add(gb[xt]),Y.up.copy(_b[xt]),Y.lookAt(Jd),Y.updateMatrixWorld(),mt.makeTranslation(-Xo.x,-Xo.y,-Xo.z),Y0.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Y0,Y.coordinateSystem,Y.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)e.setRenderTarget(V.map,xt),e.clear();else{xt===0&&(e.setRenderTarget(V.map),e.clear());let Y=V.getViewport(xt);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),U.viewport(a)}n=V.getFrustum(xt),S(_,M,Vt,X,tt,this.type)}V.isPointLightShadow!==!0&&this.type===ma&&b(V,M),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,e.setRenderTarget(D,P,L)};function b(T,_){let M=t.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Qe(s.x,s.y,{format:Ys,type:gi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(_,null,M,u,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(_,null,M,f,y,null)}function A(T,_,M,D){let P=null,L=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)P=L;else if(P=M.isPointLight===!0?l:o,e.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let U=P.uuid,O=_.uuid,R=c[U];R===void 0&&(R={},c[U]=R);let G=R[O];G===void 0&&(G=P.clone(),R[O]=G,_.addEventListener("dispose",w)),P=G}if(P.visible=_.visible,P.wireframe=_.wireframe,D===ma?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:d[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,M.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let U=e.properties.get(P);U.light=M}return P}function S(T,_,M,D,P,L){if(T.visible===!1)return;if(T.layers.test(P)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===ma)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);let R=t.update(T),G=T.material;if(Array.isArray(G)){let X=R.groups;for(let V=0,Q=X.length;V<Q;V++){let W=X[V],j=G[W.materialIndex];if(j&&j.visible){let tt=A(T,j,D,L);T.onBeforeShadow(e,T,_,M,R,tt,W),e.renderBufferDirect(M,null,R,tt,T,W),T.onAfterShadow(e,T,_,M,R,tt,W)}}}else if(G.visible){let X=A(T,G,D,L);T.onBeforeShadow(e,T,_,M,R,X,null),e.renderBufferDirect(M,null,R,X,T,null),T.onAfterShadow(e,T,_,M,R,X,null)}}let O=T.children;for(let R=0,G=O.length;R<G;R++)S(O[R],_,M,D,P,L)}function w(T){T.target.removeEventListener("dispose",w);for(let M in c){let D=c[M],P=T.target.uuid;P in D&&(D[P].dispose(),delete D[P])}}}function xb(e,t){function i(){let C=!1,Z=new Ie,q=null,lt=new Ie(0,0,0,0);return{setMask:function(nt){q!==nt&&!C&&(e.colorMask(nt,nt,nt,nt),q=nt)},setLocked:function(nt){C=nt},setClear:function(nt,at,Pt,Kt,it){it===!0&&(nt*=Kt,at*=Kt,Pt*=Kt),Z.set(nt,at,Pt,Kt),lt.equals(Z)===!1&&(e.clearColor(nt,at,Pt,Kt),lt.copy(Z))},reset:function(){C=!1,q=null,lt.set(-1,0,0,0)}}}function n(){let C=!1,Z=!1,q=null,lt=null,nt=null;return{setReversed:function(at){if(Z!==at){let Pt=t.get("EXT_clip_control");at?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),Z=at;let Kt=nt;nt=null,this.setClear(Kt)}},getReversed:function(){return Z},setTest:function(at){at?_t(e.DEPTH_TEST):qt(e.DEPTH_TEST)},setMask:function(at){q!==at&&!C&&(e.depthMask(at),q=at)},setFunc:function(at){if(Z&&(at=y0[at]),lt!==at){switch(at){case ic:e.depthFunc(e.NEVER);break;case nc:e.depthFunc(e.ALWAYS);break;case sc:e.depthFunc(e.LESS);break;case ra:e.depthFunc(e.LEQUAL);break;case rc:e.depthFunc(e.EQUAL);break;case ac:e.depthFunc(e.GEQUAL);break;case oc:e.depthFunc(e.GREATER);break;case lc:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}lt=at}},setLocked:function(at){C=at},setClear:function(at){nt!==at&&(nt=at,Z&&(at=1-at),e.clearDepth(at))},reset:function(){C=!1,q=null,lt=null,nt=null,Z=!1}}}function s(){let C=!1,Z=null,q=null,lt=null,nt=null,at=null,Pt=null,Kt=null,it=null;return{setTest:function(Dt){C||(Dt?_t(e.STENCIL_TEST):qt(e.STENCIL_TEST))},setMask:function(Dt){Z!==Dt&&!C&&(e.stencilMask(Dt),Z=Dt)},setFunc:function(Dt,Yt,ft){(q!==Dt||lt!==Yt||nt!==ft)&&(e.stencilFunc(Dt,Yt,ft),q=Dt,lt=Yt,nt=ft)},setOp:function(Dt,Yt,ft){(at!==Dt||Pt!==Yt||Kt!==ft)&&(e.stencilOp(Dt,Yt,ft),at=Dt,Pt=Yt,Kt=ft)},setLocked:function(Dt){C=Dt},setClear:function(Dt){it!==Dt&&(e.clearStencil(Dt),it=Dt)},reset:function(){C=!1,Z=null,q=null,lt=null,nt=null,at=null,Pt=null,Kt=null,it=null}}}let r=new i,a=new n,o=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],y=null,p=!1,m=null,b=null,A=null,S=null,w=null,T=null,_=null,M=new Ft(0,0,0),D=0,P=!1,L=null,U=null,O=null,R=null,G=null,X=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,Q=0,W=e.getParameter(e.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=Q>=2);let j=null,tt={},xt=e.getParameter(e.SCISSOR_BOX),Vt=e.getParameter(e.VIEWPORT),Y=new Ie().fromArray(xt),mt=new Ie().fromArray(Vt);function Mt(C,Z,q,lt){let nt=new Uint8Array(4),at=e.createTexture();e.bindTexture(C,at),e.texParameteri(C,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(C,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Pt=0;Pt<q;Pt++)C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY?e.texImage3D(Z,0,e.RGBA,1,1,lt,0,e.RGBA,e.UNSIGNED_BYTE,nt):e.texImage2D(Z+Pt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,nt);return at}let Ut={};Ut[e.TEXTURE_2D]=Mt(e.TEXTURE_2D,e.TEXTURE_2D,1),Ut[e.TEXTURE_CUBE_MAP]=Mt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ut[e.TEXTURE_2D_ARRAY]=Mt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Ut[e.TEXTURE_3D]=Mt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_t(e.DEPTH_TEST),a.setFunc(ra),Oi(!1),Fe(Md),_t(e.CULL_FACE),fi(ds);function _t(C){h[C]!==!0&&(e.enable(C),h[C]=!0)}function qt(C){h[C]!==!1&&(e.disable(C),h[C]=!1)}function We(C,Z){return u[C]!==Z?(e.bindFramebuffer(C,Z),u[C]=Z,C===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=Z),C===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=Z),!0):!1}function kt(C,Z){let q=g,lt=!1;if(C){q=f.get(Z),q===void 0&&(q=[],f.set(Z,q));let nt=C.textures;if(q.length!==nt.length||q[0]!==e.COLOR_ATTACHMENT0){for(let at=0,Pt=nt.length;at<Pt;at++)q[at]=e.COLOR_ATTACHMENT0+at;q.length=nt.length,lt=!0}}else q[0]!==e.BACK&&(q[0]=e.BACK,lt=!0);lt&&e.drawBuffers(q)}function me(C){return y!==C?(e.useProgram(C),y=C,!0):!1}let xe={[_r]:e.FUNC_ADD,[Hm]:e.FUNC_SUBTRACT,[Wm]:e.FUNC_REVERSE_SUBTRACT};xe[Xm]=e.MIN,xe[qm]=e.MAX;let Qt={[$m]:e.ZERO,[Ym]:e.ONE,[Km]:e.SRC_COLOR,[Ed]:e.SRC_ALPHA,[e0]:e.SRC_ALPHA_SATURATE,[Qm]:e.DST_COLOR,[Jm]:e.DST_ALPHA,[Zm]:e.ONE_MINUS_SRC_COLOR,[wd]:e.ONE_MINUS_SRC_ALPHA,[t0]:e.ONE_MINUS_DST_COLOR,[jm]:e.ONE_MINUS_DST_ALPHA,[i0]:e.CONSTANT_COLOR,[n0]:e.ONE_MINUS_CONSTANT_COLOR,[s0]:e.CONSTANT_ALPHA,[r0]:e.ONE_MINUS_CONSTANT_ALPHA};function fi(C,Z,q,lt,nt,at,Pt,Kt,it,Dt){if(C===ds){p===!0&&(qt(e.BLEND),p=!1);return}if(p===!1&&(_t(e.BLEND),p=!0),C!==Vm){if(C!==m||Dt!==P){if((b!==_r||w!==_r)&&(e.blendEquation(e.FUNC_ADD),b=_r,w=_r),Dt)switch(C){case ga:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ii:e.blendFunc(e.ONE,e.ONE);break;case bd:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Td:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Gt("WebGLState: Invalid blending: ",C);break}else switch(C){case ga:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ii:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case bd:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Td:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",C);break}A=null,S=null,T=null,_=null,M.set(0,0,0),D=0,m=C,P=Dt}return}nt=nt||Z,at=at||q,Pt=Pt||lt,(Z!==b||nt!==w)&&(e.blendEquationSeparate(xe[Z],xe[nt]),b=Z,w=nt),(q!==A||lt!==S||at!==T||Pt!==_)&&(e.blendFuncSeparate(Qt[q],Qt[lt],Qt[at],Qt[Pt]),A=q,S=lt,T=at,_=Pt),(Kt.equals(M)===!1||it!==D)&&(e.blendColor(Kt.r,Kt.g,Kt.b,it),M.copy(Kt),D=it),m=C,P=!1}function Je(C,Z){C.side===cn?qt(e.CULL_FACE):_t(e.CULL_FACE);let q=C.side===Pi;Z&&(q=!q),Oi(q),C.blending===ga&&C.transparent===!1?fi(ds):fi(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let lt=C.stencilWrite;o.setTest(lt),lt&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),ai(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?_t(e.SAMPLE_ALPHA_TO_COVERAGE):qt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Oi(C){L!==C&&(C?e.frontFace(e.CW):e.frontFace(e.CCW),L=C)}function Fe(C){C!==km?(_t(e.CULL_FACE),C!==U&&(C===Md?e.cullFace(e.BACK):C===zm?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):qt(e.CULL_FACE),U=C}function In(C){C!==O&&(V&&e.lineWidth(C),O=C)}function ai(C,Z,q){C?(_t(e.POLYGON_OFFSET_FILL),(R!==Z||G!==q)&&(R=Z,G=q,a.getReversed()&&(Z=-Z,q=-q),e.polygonOffset(Z,q))):qt(e.POLYGON_OFFSET_FILL)}function en(C){C?_t(e.SCISSOR_TEST):qt(e.SCISSOR_TEST)}function nn(C){C===void 0&&(C=e.TEXTURE0+X-1),j!==C&&(e.activeTexture(C),j=C)}function sn(C,Z,q){q===void 0&&(j===null?q=e.TEXTURE0+X-1:q=j);let lt=tt[q];lt===void 0&&(lt={type:void 0,texture:void 0},tt[q]=lt),(lt.type!==C||lt.texture!==Z)&&(j!==q&&(e.activeTexture(q),j=q),e.bindTexture(C,Z||Ut[C]),lt.type=C,lt.texture=Z)}function N(){let C=tt[j];C!==void 0&&C.type!==void 0&&(e.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function rn(){try{e.compressedTexImage2D(...arguments)}catch(C){Gt("WebGLState:",C)}}function Ce(){try{e.compressedTexImage3D(...arguments)}catch(C){Gt("WebGLState:",C)}}function Pe(){try{e.texSubImage2D(...arguments)}catch(C){Gt("WebGLState:",C)}}function dt(){try{e.texSubImage3D(...arguments)}catch(C){Gt("WebGLState:",C)}}function je(){try{e.compressedTexSubImage2D(...arguments)}catch(C){Gt("WebGLState:",C)}}function Ot(){try{e.compressedTexSubImage3D(...arguments)}catch(C){Gt("WebGLState:",C)}}function Wt(){try{e.texStorage2D(...arguments)}catch(C){Gt("WebGLState:",C)}}function E(){try{e.texStorage3D(...arguments)}catch(C){Gt("WebGLState:",C)}}function v(){try{e.texImage2D(...arguments)}catch(C){Gt("WebGLState:",C)}}function k(){try{e.texImage3D(...arguments)}catch(C){Gt("WebGLState:",C)}}function et(C){return d[C]!==void 0?d[C]:e.getParameter(C)}function J(C,Z){d[C]!==Z&&(e.pixelStorei(C,Z),d[C]=Z)}function rt(C){Y.equals(C)===!1&&(e.scissor(C.x,C.y,C.z,C.w),Y.copy(C))}function ht(C){mt.equals(C)===!1&&(e.viewport(C.x,C.y,C.z,C.w),mt.copy(C))}function $(C,Z){let q=c.get(Z);q===void 0&&(q=new WeakMap,c.set(Z,q));let lt=q.get(C);lt===void 0&&(lt=e.getUniformBlockIndex(Z,C.name),e.uniformBlockBinding(Z,lt,lt),q.set(C,lt))}function K(C,Z,q){let nt=c.get(Z).get(C);l[nt]!==q&&(e.bindBufferBase(e.UNIFORM_BUFFER,nt,q),l[nt]=q)}function ot(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,tt={},u={},l={},f=new WeakMap,g=[],y=null,p=!1,m=null,b=null,A=null,S=null,w=null,T=null,_=null,M=new Ft(0,0,0),D=0,P=!1,L=null,U=null,O=null,R=null,G=null,Y.set(0,0,e.canvas.width,e.canvas.height),mt.set(0,0,e.canvas.width,e.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_t,disable:qt,bindFramebuffer:We,drawBuffers:kt,useProgram:me,setBlending:fi,setMaterial:Je,setFlipSided:Oi,setCullFace:Fe,setLineWidth:In,setPolygonOffset:ai,setScissorTest:en,activeTexture:nn,bindTexture:sn,unbindTexture:N,compressedTexImage2D:rn,compressedTexImage3D:Ce,texImage2D:v,texImage3D:k,pixelStorei:J,getParameter:et,updateUBOMapping:$,uniformBlockBinding:K,texStorage2D:Wt,texStorage3D:E,texSubImage2D:Pe,texSubImage3D:dt,compressedTexSubImage2D:je,compressedTexSubImage3D:Ot,scissor:rt,viewport:ht,reset:ot}}function yb(e,t,i,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Et,h=new WeakMap,d=new Set,u,f=new WeakMap,g=new Set,y=new FinalizationRegistry(E=>g.delete(E)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,v){return p?new OffscreenCanvas(E,v):ho("canvas")}function b(E,v,k){let et=1,J=Wt(E);if((J.width>k||J.height>k)&&(et=k/Math.max(J.width,J.height)),et<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let rt=Math.floor(et*J.width),ht=Math.floor(et*J.height);u===void 0&&(u=m(rt,ht));let $=v?m(rt,ht):u;return $.width=rt,$.height=ht,$.getContext("2d").drawImage(E,0,0,rt,ht),zt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+rt+"x"+ht+")."),$}else return"data"in E&&zt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function A(E){return E.generateMipmaps}function S(E){e.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?e.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function T(E,v,k,et,J,rt=!1){if(E!==null){if(e[E]!==void 0)return e[E];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ht;et&&(ht=t.get("EXT_texture_norm16"),ht||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=v;if(v===e.RED&&(k===e.FLOAT&&($=e.R32F),k===e.HALF_FLOAT&&($=e.R16F),k===e.UNSIGNED_BYTE&&($=e.R8),k===e.UNSIGNED_SHORT&&ht&&($=ht.R16_EXT),k===e.SHORT&&ht&&($=ht.R16_SNORM_EXT)),v===e.RED_INTEGER&&(k===e.UNSIGNED_BYTE&&($=e.R8UI),k===e.UNSIGNED_SHORT&&($=e.R16UI),k===e.UNSIGNED_INT&&($=e.R32UI),k===e.BYTE&&($=e.R8I),k===e.SHORT&&($=e.R16I),k===e.INT&&($=e.R32I)),v===e.RG&&(k===e.FLOAT&&($=e.RG32F),k===e.HALF_FLOAT&&($=e.RG16F),k===e.UNSIGNED_BYTE&&($=e.RG8),k===e.UNSIGNED_SHORT&&ht&&($=ht.RG16_EXT),k===e.SHORT&&ht&&($=ht.RG16_SNORM_EXT)),v===e.RG_INTEGER&&(k===e.UNSIGNED_BYTE&&($=e.RG8UI),k===e.UNSIGNED_SHORT&&($=e.RG16UI),k===e.UNSIGNED_INT&&($=e.RG32UI),k===e.BYTE&&($=e.RG8I),k===e.SHORT&&($=e.RG16I),k===e.INT&&($=e.RG32I)),v===e.RGB_INTEGER&&(k===e.UNSIGNED_BYTE&&($=e.RGB8UI),k===e.UNSIGNED_SHORT&&($=e.RGB16UI),k===e.UNSIGNED_INT&&($=e.RGB32UI),k===e.BYTE&&($=e.RGB8I),k===e.SHORT&&($=e.RGB16I),k===e.INT&&($=e.RGB32I)),v===e.RGBA_INTEGER&&(k===e.UNSIGNED_BYTE&&($=e.RGBA8UI),k===e.UNSIGNED_SHORT&&($=e.RGBA16UI),k===e.UNSIGNED_INT&&($=e.RGBA32UI),k===e.BYTE&&($=e.RGBA8I),k===e.SHORT&&($=e.RGBA16I),k===e.INT&&($=e.RGBA32I)),v===e.RGB&&(k===e.UNSIGNED_SHORT&&ht&&($=ht.RGB16_EXT),k===e.SHORT&&ht&&($=ht.RGB16_SNORM_EXT),k===e.UNSIGNED_INT_5_9_9_9_REV&&($=e.RGB9_E5),k===e.UNSIGNED_INT_10F_11F_11F_REV&&($=e.R11F_G11F_B10F)),v===e.RGBA){let K=rt?co:jt.getTransfer(J);k===e.FLOAT&&($=e.RGBA32F),k===e.HALF_FLOAT&&($=e.RGBA16F),k===e.UNSIGNED_BYTE&&($=K===ce?e.SRGB8_ALPHA8:e.RGBA8),k===e.UNSIGNED_SHORT&&ht&&($=ht.RGBA16_EXT),k===e.SHORT&&ht&&($=ht.RGBA16_SNORM_EXT),k===e.UNSIGNED_SHORT_4_4_4_4&&($=e.RGBA4),k===e.UNSIGNED_SHORT_5_5_5_1&&($=e.RGB5_A1)}return($===e.R16F||$===e.R32F||$===e.RG16F||$===e.RG32F||$===e.RGBA16F||$===e.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function _(E,v){let k;return E?v===null||v===Mn||v===yr?k=e.DEPTH24_STENCIL8:v===bn?k=e.DEPTH32F_STENCIL8:v===va&&(k=e.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Mn||v===yr?k=e.DEPTH_COMPONENT24:v===bn?k=e.DEPTH_COMPONENT32F:v===va&&(k=e.DEPTH_COMPONENT16),k}function M(E,v){return A(E)===!0||E.isFramebufferTexture&&E.minFilter!==hi&&E.minFilter!==Ri?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function D(E){let v=new WeakRef(E);n.get(E).__ref=v,g.add(v),y.register(E,v,v)}function P(E){let v=n.get(E).__ref;v!==void 0&&(g.delete(v),y.unregister(v))}function L(E){O(E.target)}function U(E){R(E.target)}function O(E){E.removeEventListener("dispose",L),P(E),X(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&d.delete(E)}function R(E){E.removeEventListener("dispose",U),P(E),Q(E)}function G(){for(let E of g){let v=E.deref();v!==void 0&&(v.isRenderTarget===!0?R(v):O(v))}g.clear(),d.clear()}function X(E){let v=n.get(E);if(v.__webglInit===void 0)return;let k=E.source,et=f.get(k);if(et){let J=et[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&V(E),Object.keys(et).length===0&&f.delete(k)}n.remove(E)}function V(E){let v=n.get(E);e.deleteTexture(v.__webglTexture);let k=E.source,et=f.get(k);delete et[v.__cacheKey],a.memory.textures--}function Q(E){let v=n.get(E);v.__depthDisposeCallback&&v.__depthDisposeCallback();let k=E.depthTexture;if(k&&k.renderTarget===E&&O(k),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let rt=0;rt<v.__webglFramebuffer[J].length;rt++)e.deleteFramebuffer(v.__webglFramebuffer[J][rt]);else e.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)e.deleteFramebuffer(v.__webglFramebuffer[J]);else e.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&e.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&e.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&e.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let et=E.textures;for(let J=0,rt=et.length;J<rt;J++){let ht=n.get(et[J]);ht.__webglTexture&&(e.deleteTexture(ht.__webglTexture),a.memory.textures--),n.remove(et[J])}n.remove(E)}let W=0;function j(){W=0}function tt(){return W}function xt(E){W=E}function Vt(){let E=W;return E>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,E}function Y(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.mipmapsAutoUpdate),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function mt(E,v){let k=n.get(E);if(E.isVideoTexture&&je(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&k.__version!==E.version){let et=E.image;if(et===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{Je(k,E,v);return}}else E.isExternalTexture&&(k.__webglTexture=E.sourceTexture?E.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,k.__webglTexture,e.TEXTURE0+v)}function Mt(E,v){let k=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){Je(k,E,v);return}else E.isExternalTexture&&(k.__webglTexture=E.sourceTexture?E.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,k.__webglTexture,e.TEXTURE0+v)}function Ut(E,v){let k=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){Je(k,E,v);return}i.bindTexture(e.TEXTURE_3D,k.__webglTexture,e.TEXTURE0+v)}function _t(E,v){let k=n.get(E);if(E.version>0&&k.__version!==E.version){Oi(k,E,v);return}i.bindTexture(e.TEXTURE_CUBE_MAP,k.__webglTexture,e.TEXTURE0+v)}let qt={[cc]:e.REPEAT,[Nn]:e.CLAMP_TO_EDGE,[hc]:e.MIRRORED_REPEAT},We={[hi]:e.NEAREST,[l0]:e.NEAREST_MIPMAP_NEAREST,[Bo]:e.NEAREST_MIPMAP_LINEAR,[Ri]:e.LINEAR,[Fc]:e.LINEAR_MIPMAP_NEAREST,[fs]:e.LINEAR_MIPMAP_LINEAR},kt={[d0]:e.NEVER,[Bd]:e.ALWAYS,[f0]:e.LESS,[Ud]:e.LEQUAL,[p0]:e.EQUAL,[Od]:e.GEQUAL,[m0]:e.GREATER,[g0]:e.NOTEQUAL};function me(E,v){if(v.type===bn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ri||v.magFilter===Fc||v.magFilter===Bo||v.magFilter===fs||v.minFilter===Ri||v.minFilter===Fc||v.minFilter===Bo||v.minFilter===fs)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(E,e.TEXTURE_WRAP_S,qt[v.wrapS]),e.texParameteri(E,e.TEXTURE_WRAP_T,qt[v.wrapT]),(E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)&&e.texParameteri(E,e.TEXTURE_WRAP_R,qt[v.wrapR]),e.texParameteri(E,e.TEXTURE_MAG_FILTER,We[v.magFilter]),e.texParameteri(E,e.TEXTURE_MIN_FILTER,We[v.minFilter]),v.compareFunction&&(e.texParameteri(E,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(E,e.TEXTURE_COMPARE_FUNC,kt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===hi||v.minFilter!==Bo&&v.minFilter!==fs||v.type===bn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");e.texParameterf(E,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function xe(E,v){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",L),D(v));let et=v.source,J=f.get(et);J===void 0&&(J={},f.set(et,J));let rt=Y(v);if(rt!==E.__cacheKey){J[rt]===void 0&&(J[rt]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,k=!0),J[rt].usedTimes++;let ht=J[E.__cacheKey];ht!==void 0&&(J[E.__cacheKey].usedTimes--,ht.usedTimes===0&&V(v)),E.__cacheKey=rt,E.__webglTexture=J[rt].texture}return k}function Qt(E,v,k){return Math.floor(Math.floor(E/k)/v)}function fi(E,v,k,et){let rt=E.updateRanges;if(rt.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,v.width,v.height,k,et,v.data);else{rt.sort((C,Z)=>C.start-Z.start);let ht=0;for(let C=1;C<rt.length;C++){let Z=rt[ht],q=rt[C],lt=Z.start+Z.count,nt=Qt(q.start,v.width,4),at=Qt(Z.start,v.width,4);q.start<=lt+1&&nt===at&&Qt(q.start+q.count-1,v.width,4)===nt?Z.count=Math.max(Z.count,q.start+q.count-Z.start):(++ht,rt[ht]=q)}rt.length=ht+1;let $=i.getParameter(e.UNPACK_ROW_LENGTH),K=i.getParameter(e.UNPACK_SKIP_PIXELS),ot=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,v.width);for(let C=0,Z=rt.length;C<Z;C++){let q=rt[C],lt=Math.floor(q.start/4),nt=Math.ceil(q.count/4),at=lt%v.width,Pt=Math.floor(lt/v.width),Kt=nt,it=1;i.pixelStorei(e.UNPACK_SKIP_PIXELS,at),i.pixelStorei(e.UNPACK_SKIP_ROWS,Pt),i.texSubImage2D(e.TEXTURE_2D,0,at,Pt,Kt,it,k,et,v.data)}E.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,$),i.pixelStorei(e.UNPACK_SKIP_PIXELS,K),i.pixelStorei(e.UNPACK_SKIP_ROWS,ot)}}function Je(E,v,k){let et=e.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(et=e.TEXTURE_2D_ARRAY),v.isData3DTexture&&(et=e.TEXTURE_3D);let J=xe(E,v),rt=v.source;i.bindTexture(et,E.__webglTexture,e.TEXTURE0+k);let ht=n.get(rt);if(rt.version!==ht.__version||J===!0){if(i.activeTexture(e.TEXTURE0+k),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let it=jt.getPrimaries(jt.workingColorSpace),Dt=v.colorSpace===ms?null:jt.getPrimaries(v.colorSpace),Yt=v.colorSpace===ms||it===Dt?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt)}i.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment);let K=b(v.image,!1,s.maxTextureSize);K=Ot(v,K);let ot=r.convert(v.format,v.colorSpace),C=r.convert(v.type),Z=T(v.internalFormat,ot,C,v.normalized,v.colorSpace,v.isVideoTexture);me(et,v);let q,lt=v.mipmaps,nt=v.isVideoTexture!==!0,at=ht.__version===void 0||J===!0,Pt=rt.dataReady,Kt=M(v,K);if(v.isDepthTexture)Z=_(v.format===ps,v.type),at&&(nt?i.texStorage2D(e.TEXTURE_2D,1,Z,K.width,K.height):i.texImage2D(e.TEXTURE_2D,0,Z,K.width,K.height,0,ot,C,null));else if(v.isDataTexture)if(lt.length>0){nt&&at&&i.texStorage2D(e.TEXTURE_2D,Kt,Z,lt[0].width,lt[0].height);for(let it=0,Dt=lt.length;it<Dt;it++)q=lt[it],nt?Pt&&i.texSubImage2D(e.TEXTURE_2D,it,0,0,q.width,q.height,ot,C,q.data):i.texImage2D(e.TEXTURE_2D,it,Z,q.width,q.height,0,ot,C,q.data);v.generateMipmaps=!1}else nt?(at&&i.texStorage2D(e.TEXTURE_2D,Kt,Z,K.width,K.height),Pt&&fi(v,K,ot,C)):i.texImage2D(e.TEXTURE_2D,0,Z,K.width,K.height,0,ot,C,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){nt&&at&&i.texStorage3D(e.TEXTURE_2D_ARRAY,Kt,Z,lt[0].width,lt[0].height,K.depth);for(let it=0,Dt=lt.length;it<Dt;it++)if(q=lt[it],v.format!==Tn)if(ot!==null)if(nt){if(Pt)if(v.layerUpdates.size>0){let Yt=Wd(q.width,q.height,v.format,v.type);for(let ft of v.layerUpdates){let ge=q.data.subarray(ft*Yt/q.data.BYTES_PER_ELEMENT,(ft+1)*Yt/q.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,ft,q.width,q.height,1,ot,ge)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,0,q.width,q.height,K.depth,ot,q.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,it,Z,q.width,q.height,K.depth,0,q.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?Pt&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,0,q.width,q.height,K.depth,ot,C,q.data):i.texImage3D(e.TEXTURE_2D_ARRAY,it,Z,q.width,q.height,K.depth,0,ot,C,q.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{nt&&at&&i.texStorage2D(e.TEXTURE_2D,Kt,Z,lt[0].width,lt[0].height);for(let it=0,Dt=lt.length;it<Dt;it++)q=lt[it],v.format!==Tn?ot!==null?nt?Pt&&i.compressedTexSubImage2D(e.TEXTURE_2D,it,0,0,q.width,q.height,ot,q.data):i.compressedTexImage2D(e.TEXTURE_2D,it,Z,q.width,q.height,0,q.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?Pt&&i.texSubImage2D(e.TEXTURE_2D,it,0,0,q.width,q.height,ot,C,q.data):i.texImage2D(e.TEXTURE_2D,it,Z,q.width,q.height,0,ot,C,q.data)}else if(v.isDataArrayTexture)if(nt){if(at&&i.texStorage3D(e.TEXTURE_2D_ARRAY,Kt,Z,K.width,K.height,K.depth),Pt)if(v.layerUpdates.size>0){let it=Wd(K.width,K.height,v.format,v.type);for(let Dt of v.layerUpdates){let Yt=K.data.subarray(Dt*it/K.data.BYTES_PER_ELEMENT,(Dt+1)*it/K.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Dt,K.width,K.height,1,ot,C,Yt)}v.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ot,C,K.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,Z,K.width,K.height,K.depth,0,ot,C,K.data);else if(v.isData3DTexture)nt?(at&&i.texStorage3D(e.TEXTURE_3D,Kt,Z,K.width,K.height,K.depth),Pt&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ot,C,K.data)):i.texImage3D(e.TEXTURE_3D,0,Z,K.width,K.height,K.depth,0,ot,C,K.data);else if(v.isFramebufferTexture){if(at)if(nt)i.texStorage2D(e.TEXTURE_2D,Kt,Z,K.width,K.height);else{let it=K.width,Dt=K.height;for(let Yt=0;Yt<Kt;Yt++)i.texImage2D(e.TEXTURE_2D,Yt,Z,it,Dt,0,ot,C,null),it>>=1,Dt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in e){let it=e.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),K.parentNode!==it){it.appendChild(K),d.add(v),it.onpaint=Dt=>{let Yt=Dt.changedElements;for(let ft of d)Yt.includes(ft.image)&&(ft.needsUpdate=!0)},it.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,K);else{let Yt=e.RGBA,ft=e.RGBA,ge=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,Yt,ft,ge,K)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(lt.length>0){if(nt&&at){let it=Wt(lt[0]);i.texStorage2D(e.TEXTURE_2D,Kt,Z,it.width,it.height)}for(let it=0,Dt=lt.length;it<Dt;it++)q=lt[it],nt?Pt&&i.texSubImage2D(e.TEXTURE_2D,it,0,0,ot,C,q):i.texImage2D(e.TEXTURE_2D,it,Z,ot,C,q);v.generateMipmaps=!1}else if(nt){if(at){let it=Wt(K);i.texStorage2D(e.TEXTURE_2D,Kt,Z,it.width,it.height)}Pt&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,ot,C,K)}else i.texImage2D(e.TEXTURE_2D,0,Z,ot,C,K);A(v)&&v.mipmapsAutoUpdate===!0&&S(et),ht.__version=rt.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Oi(E,v,k){if(v.image.length!==6)return;let et=xe(E,v),J=v.source;i.bindTexture(e.TEXTURE_CUBE_MAP,E.__webglTexture,e.TEXTURE0+k);let rt=n.get(J);if(J.version!==rt.__version||et===!0){i.activeTexture(e.TEXTURE0+k);let ht=jt.getPrimaries(jt.workingColorSpace),$=v.colorSpace===ms?null:jt.getPrimaries(v.colorSpace),K=v.colorSpace===ms||ht===$?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ot=v.isCompressedTexture||v.image[0].isCompressedTexture,C=v.image[0]&&v.image[0].isDataTexture,Z=[];for(let ft=0;ft<6;ft++)!ot&&!C?Z[ft]=b(v.image[ft],!0,s.maxCubemapSize):Z[ft]=C?v.image[ft].image:v.image[ft],Z[ft]=Ot(v,Z[ft]);let q=Z[0],lt=r.convert(v.format,v.colorSpace),nt=r.convert(v.type),at=T(v.internalFormat,lt,nt,v.normalized,v.colorSpace),Pt=v.isVideoTexture!==!0,Kt=rt.__version===void 0||et===!0,it=J.dataReady,Dt=M(v,q);me(e.TEXTURE_CUBE_MAP,v);let Yt;if(v.isDepthTexture){if(at=_(v.format===ps,v.type),Kt)if(Pt)i.texStorage2D(e.TEXTURE_CUBE_MAP,1,at,q.width,q.height);else for(let ft=0;ft<6;ft++)i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,at,q.width,q.height,0,lt,nt,null)}else if(ot){Pt&&Kt&&i.texStorage2D(e.TEXTURE_CUBE_MAP,Dt,at,q.width,q.height);for(let ft=0;ft<6;ft++){Yt=Z[ft].mipmaps;for(let ge=0;ge<Yt.length;ge++){let oi=Yt[ge];v.format!==Tn?lt!==null?Pt?it&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,ge,0,0,oi.width,oi.height,lt,oi.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,ge,at,oi.width,oi.height,0,oi.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?it&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,ge,0,0,oi.width,oi.height,lt,nt,oi.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,ge,at,oi.width,oi.height,0,lt,nt,oi.data)}}}else{if(Yt=v.mipmaps,Pt&&Kt){Yt.length>0&&Dt++;let ft=Wt(Z[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Dt,at,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(C){Pt?it&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Z[ft].width,Z[ft].height,lt,nt,Z[ft].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,at,Z[ft].width,Z[ft].height,0,lt,nt,Z[ft].data);for(let ge=0;ge<Yt.length;ge++){let Is=Yt[ge].image[ft].image;Pt?it&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,ge+1,0,0,Is.width,Is.height,lt,nt,Is.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,ge+1,at,Is.width,Is.height,0,lt,nt,Is.data)}}else{Pt?it&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,lt,nt,Z[ft]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,at,lt,nt,Z[ft]);for(let ge=0;ge<Yt.length;ge++){let oi=Yt[ge];Pt?it&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,ge+1,0,0,lt,nt,oi.image[ft]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,ge+1,at,lt,nt,oi.image[ft])}}}A(v)&&v.mipmapsAutoUpdate===!0&&S(e.TEXTURE_CUBE_MAP),rt.__version=J.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Fe(E,v,k,et,J,rt){let ht=r.convert(k.format,k.colorSpace),$=r.convert(k.type),K=T(k.internalFormat,ht,$,k.normalized,k.colorSpace),ot=n.get(v),C=n.get(k);if(C.__renderTarget=v,!ot.__hasExternalTextures){let Z=Math.max(1,v.width>>rt),q=Math.max(1,v.height>>rt);J===e.TEXTURE_3D||J===e.TEXTURE_2D_ARRAY?i.texImage3D(J,rt,K,Z,q,v.depth,0,ht,$,null):i.texImage2D(J,rt,K,Z,q,0,ht,$,null)}i.bindFramebuffer(e.FRAMEBUFFER,E),dt(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,et,J,C.__webglTexture,0,Pe(v)):(J===e.TEXTURE_2D||J>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,et,J,C.__webglTexture,rt),i.bindFramebuffer(e.FRAMEBUFFER,null)}function In(E,v,k){if(e.bindRenderbuffer(e.RENDERBUFFER,E),v.depthBuffer){let et=v.depthTexture,J=et&&et.isDepthTexture?et.type:null,rt=_(v.stencilBuffer,J),ht=v.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;dt(v)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(v),rt,v.width,v.height):k?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(v),rt,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,rt,v.width,v.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ht,e.RENDERBUFFER,E)}else{let et=v.textures;for(let J=0;J<et.length;J++){let rt=et[J],ht=r.convert(rt.format,rt.colorSpace),$=r.convert(rt.type),K=T(rt.internalFormat,ht,$,rt.normalized,rt.colorSpace);dt(v)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pe(v),K,v.width,v.height):k?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pe(v),K,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,K,v.width,v.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ai(E,v,k){let et=v.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(v.depthTexture);J.__renderTarget=v;let rt=et?v.depthTexture.image[0]:v.depthTexture.image;(!J.__webglTexture||rt.width!==v.width||rt.height!==v.height)&&(rt.width=v.width,rt.height=v.height,v.depthTexture.needsUpdate=!0),et?_t(v.depthTexture,0):mt(v.depthTexture,0);let ht=J.__webglTexture,$=Pe(v),K=et?e.TEXTURE_CUBE_MAP_POSITIVE_X+k:e.TEXTURE_2D,ot=v.depthTexture.format===ps?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(v.depthTexture.format===cs)dt(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ot,K,ht,0,$):e.framebufferTexture2D(e.FRAMEBUFFER,ot,K,ht,0);else if(v.depthTexture.format===ps)dt(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ot,K,ht,0,$):e.framebufferTexture2D(e.FRAMEBUFFER,ot,K,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function en(E){let v=n.get(E),k=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let et=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),et){let J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,et.removeEventListener("dispose",J)};et.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=et}if(E.depthTexture&&!v.__autoAllocateDepthBuffer)if(k)for(let et=0;et<6;et++)ai(v.__webglFramebuffer[et],E,et);else E.texture.mipmaps.length>0?ai(v.__webglFramebuffer[0],E,0):ai(v.__webglFramebuffer,E,0);else if(k){v.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(i.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[et]),v.__webglDepthbuffer[et]===void 0)v.__webglDepthbuffer[et]=e.createRenderbuffer(),In(v.__webglDepthbuffer[et],E,!1);else{let J=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,rt=v.__webglDepthbuffer[et];e.bindRenderbuffer(e.RENDERBUFFER,rt),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,rt)}}else if(E.texture.mipmaps.length>0?i.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=e.createRenderbuffer(),In(v.__webglDepthbuffer,E,!1);else{let J=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,rt=v.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,rt),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,rt)}i.bindFramebuffer(e.FRAMEBUFFER,null)}function nn(E,v,k){let et=n.get(E);v!==void 0&&Fe(et.__webglFramebuffer,E,E.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),k!==void 0&&en(E)}function sn(E){let v=E.texture,k=n.get(E),et=n.get(v);E.addEventListener("dispose",U),D(E);let J=E.textures,rt=E.isWebGLCubeRenderTarget===!0,ht=J.length>1;if(ht||(et.__webglTexture===void 0&&(et.__webglTexture=e.createTexture()),et.__version=v.version,a.memory.textures++),rt){k.__webglFramebuffer=[];for(let $=0;$<6;$++)if(v.mipmaps.length>0){k.__webglFramebuffer[$]=[];for(let K=0;K<v.mipmaps.length;K++)k.__webglFramebuffer[$][K]=e.createFramebuffer()}else k.__webglFramebuffer[$]=e.createFramebuffer()}else{if(v.mipmaps.length>0){k.__webglFramebuffer=[];for(let $=0;$<v.mipmaps.length;$++)k.__webglFramebuffer[$]=e.createFramebuffer()}else k.__webglFramebuffer=e.createFramebuffer();if(ht)for(let $=0,K=J.length;$<K;$++){let ot=n.get(J[$]);ot.__webglTexture===void 0&&(ot.__webglTexture=e.createTexture(),a.memory.textures++)}if(E.samples>0&&dt(E)===!1){k.__webglMultisampledFramebuffer=e.createFramebuffer(),k.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let $=0;$<J.length;$++){let K=J[$];k.__webglColorRenderbuffer[$]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,k.__webglColorRenderbuffer[$]);let ot=r.convert(K.format,K.colorSpace),C=r.convert(K.type),Z=T(K.internalFormat,ot,C,K.normalized,K.colorSpace,E.isXRRenderTarget===!0),q=Pe(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,q,Z,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+$,e.RENDERBUFFER,k.__webglColorRenderbuffer[$])}e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=e.createRenderbuffer(),In(k.__webglDepthRenderbuffer,E,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(rt){i.bindTexture(e.TEXTURE_CUBE_MAP,et.__webglTexture),me(e.TEXTURE_CUBE_MAP,v);for(let $=0;$<6;$++)if(v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)Fe(k.__webglFramebuffer[$][K],E,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+$,K);else Fe(k.__webglFramebuffer[$],E,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);A(v)?S(e.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),i.unbindTexture()}else if(ht){for(let $=0,K=J.length;$<K;$++){let ot=J[$],C=n.get(ot),Z=e.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Z=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(Z,C.__webglTexture),me(Z,ot),Fe(k.__webglFramebuffer,E,ot,e.COLOR_ATTACHMENT0+$,Z,0),A(ot)&&S(Z)}i.unbindTexture()}else{let $=e.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&($=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture($,et.__webglTexture),me($,v),v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)Fe(k.__webglFramebuffer[K],E,v,e.COLOR_ATTACHMENT0,$,K);else Fe(k.__webglFramebuffer,E,v,e.COLOR_ATTACHMENT0,$,0);A(v)?S($):v.mipmaps.length>0&&e.texParameteri($,e.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),i.unbindTexture()}E.depthBuffer&&en(E)}function N(E){let v=E.textures;for(let k=0,et=v.length;k<et;k++){let J=v[k];if(A(J)&&J.mipmapsAutoUpdate===!0){let rt=w(E),ht=n.get(J).__webglTexture;i.bindTexture(rt,ht),S(rt),i.unbindTexture()}}}let rn=[];function Ce(E){if(E.samples>0){if(dt(E)===!1){let v=E.textures,k=E.width,et=E.height,J=e.COLOR_BUFFER_BIT,rt=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ht=n.get(E),$=v.length>1;if($)for(let ot=0;ot<v.length;ot++)i.bindFramebuffer(e.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,ht.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let ot=0;ot<v.length;ot++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=e.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=e.STENCIL_BUFFER_BIT)),$){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ht.__webglColorRenderbuffer[ot]);let C=n.get(v[ot]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,C,0)}e.blitFramebuffer(0,0,k,et,0,0,k,et,J,e.NEAREST),l===!0&&(rn.length=0,rn.push(e.COLOR_ATTACHMENT0+ot),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&rn.push(rt),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,rn))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),$)for(let ot=0;ot<v.length;ot++){i.bindFramebuffer(e.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,ht.__webglColorRenderbuffer[ot]);let C=n.get(v[ot]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,ht.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.TEXTURE_2D,C,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let v=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[v])}}}function Pe(E){return Math.min(s.maxSamples,E.samples)}function dt(E){let v=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function je(E){let v=a.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function Ot(E,v){let k=E.colorSpace,et=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||k!==lo&&k!==ms&&(jt.getTransfer(k)===ce?(et!==Tn||J!==Bi)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",k)),v}function Wt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=Vt,this.resetTextureUnits=j,this.getTextureUnits=tt,this.setTextureUnits=xt,this.setTexture2D=mt,this.setTexture2DArray=Mt,this.setTexture3D=Ut,this.setTextureCube=_t,this.rebindTextures=nn,this.setupRenderTarget=sn,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=en,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=dt,this.dispose=G}function Sb(e,t){function i(n,s=ms){let r,a=jt.getTransfer(s);if(n===Bi)return e.UNSIGNED_BYTE;if(n===Oc)return e.UNSIGNED_SHORT_4_4_4_4;if(n===Bc)return e.UNSIGNED_SHORT_5_5_5_1;if(n===Id)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===Ld)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===Cd)return e.BYTE;if(n===Pd)return e.SHORT;if(n===va)return e.UNSIGNED_SHORT;if(n===Uc)return e.INT;if(n===Mn)return e.UNSIGNED_INT;if(n===bn)return e.FLOAT;if(n===gi)return e.HALF_FLOAT;if(n===Nd)return e.ALPHA;if(n===Dd)return e.RGB;if(n===Tn)return e.RGBA;if(n===cs)return e.DEPTH_COMPONENT;if(n===ps)return e.DEPTH_STENCIL;if(n===Fd)return e.RED;if(n===kc)return e.RED_INTEGER;if(n===Ys)return e.RG;if(n===zc)return e.RG_INTEGER;if(n===Gc)return e.RGBA_INTEGER;if(n===ko||n===zo||n===Go||n===Vo)if(a===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ko)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ko)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vc||n===Hc||n===Wc||n===Xc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qc||n===$c||n===Yc||n===Kc||n===Zc||n===Ho||n===Jc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qc||n===$c)return a===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yc)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Kc)return r.COMPRESSED_R11_EAC;if(n===Zc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ho)return r.COMPRESSED_RG11_EAC;if(n===Jc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===jc||n===Qc||n===th||n===eh||n===ih||n===nh||n===sh||n===rh||n===ah||n===oh||n===lh||n===ch||n===hh||n===uh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jc)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qc)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===th)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===eh)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ih)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nh)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sh)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rh)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ah)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oh)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lh)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ch)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hh)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uh)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dh||n===fh||n===ph)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===dh)return a===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ph)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mh||n===gh||n===Wo||n===_h)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===mh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_h)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yr?e.UNSIGNED_INT_24_8:e[n]!==void 0?e[n]:null}return{convert:i}}var Mb=`
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

}`,rf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){let n=new Mo(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let i=t.cameras[0].viewport,n=new Oe({vertexShader:Mb,fragmentShader:bb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Le(new Hs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},af=class extends Dn{constructor(t,i){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,y=typeof XRWebGLBinding<"u",p=new rf,m={},b=i.getContextAttributes(),A=null,S=null,w=[],T=[],_=new Et,M=null,D=null,P=new bi;P.viewport=new Ie;let L=new bi;L.viewport=new Ie;let U=[P,L],O=new Ic,R=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let mt=w[Y];return mt===void 0&&(mt=new ca,w[Y]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(Y){let mt=w[Y];return mt===void 0&&(mt=new ca,w[Y]=mt),mt.getGripSpace()},this.getHand=function(Y){let mt=w[Y];return mt===void 0&&(mt=new ca,w[Y]=mt),mt.getHandSpace()};function X(Y){let mt=T.indexOf(Y.inputSource);if(mt===-1)return;let Mt=w[mt];Mt!==void 0&&(Mt.update(Y.inputSource,Y.frame,c||a),Mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Q);for(let Y=0;Y<w.length;Y++){let mt=T[Y];mt!==null&&(T[Y]=null,w[Y].disconnect(mt))}R=null,G=null,p.reset();for(let Y in m)delete m[Y];if(t.setRenderTarget(A),f=null,u=null,d=null,s=null,S=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(_.width,_.height,!1),D!==null){let Y=D.camera;Y.fov=D.fov,Y.zoom=D.zoom,Y.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,i)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Q),b.xrCompatible!==!0&&await i.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Ut=null,_t=null;b.depth&&(_t=b.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=b.stencil?ps:cs,Ut=b.stencil?yr:Mn);let qt={colorFormat:i.RGBA8,depthFormat:_t,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(qt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new Qe(u.textureWidth,u.textureHeight,{format:Tn,type:Bi,depthTexture:new us(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Mt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,i,Mt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Qe(f.framebufferWidth,f.framebufferHeight,{format:Tn,type:Bi,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Vt.setContext(s),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Q(Y){for(let mt=0;mt<Y.removed.length;mt++){let Mt=Y.removed[mt],Ut=T.indexOf(Mt);Ut>=0&&(T[Ut]=null,w[Ut].disconnect(Mt))}for(let mt=0;mt<Y.added.length;mt++){let Mt=Y.added[mt],Ut=T.indexOf(Mt);if(Ut===-1){for(let qt=0;qt<w.length;qt++)if(qt>=T.length){T.push(Mt),Ut=qt;break}else if(T[qt]===null){T[qt]=Mt,Ut=qt;break}if(Ut===-1)break}let _t=w[Ut];_t&&_t.connect(Mt)}}function W(Y,mt){mt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(mt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let mt=Y.near,Mt=Y.far;p.texture!==null&&(p.depthNear>0&&(mt=p.depthNear),p.depthFar>0&&(Mt=p.depthFar)),O.near=L.near=P.near=mt,O.far=L.far=P.far=Mt,(R!==O.near||G!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),R=O.near,G=O.far),O.layers.mask=Y.layers.mask|6,P.layers.mask=O.layers.mask&-5,L.layers.mask=O.layers.mask&-3;let Ut=Y.parent,_t=O.cameras;W(O,Ut);for(let qt=0;qt<_t.length;qt++)W(_t[qt],Ut);O.projectionMatrix.copy(P.projectionMatrix),O.projectionMatrixInverse.copy(P.projectionMatrixInverse),D===null&&Y.isPerspectiveCamera&&(D={camera:Y,fov:Y.fov,zoom:Y.zoom}),j(Y,O,Ut)};function j(Y,mt,Mt){Mt===null?Y.matrix.copy(mt.matrixWorld):(Y.matrix.copy(Mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(mt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(mt.projectionMatrix),Y.projectionMatrixInverse.copy(mt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=dc*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(Y){return m[Y]};let tt=null;function xt(Y,mt){if(h=mt.getViewerPose(c||a),g=mt,h!==null){let Mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let Ut=!1;Mt.length!==O.cameras.length&&(O.cameras.length=0,Ut=!0);for(let kt=0;kt<Mt.length;kt++){let me=Mt[kt],xe=null;if(f!==null)xe=f.getViewport(me);else{let fi=d.getViewSubImage(u,me);xe=fi.viewport,kt===0&&(t.setRenderTargetTextures(S,fi.colorTexture,fi.depthStencilTexture),t.setRenderTarget(S))}let Qt=U[kt];Qt===void 0&&(Qt=new bi,Qt.layers.enable(kt),Qt.viewport=new Ie,U[kt]=Qt),Qt.matrix.fromArray(me.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(me.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(xe.x,xe.y,xe.width,xe.height),kt===0&&(O.matrix.copy(Qt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ut===!0&&O.cameras.push(Qt)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let kt=d.getDepthInformation(Mt[0]);kt&&kt.isValid&&kt.texture&&p.init(kt,s.renderState)}if(_t&&_t.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let kt=0;kt<Mt.length;kt++){let me=Mt[kt].camera;if(me){let xe=m[me];xe||(xe=new Mo,m[me]=xe);let Qt=d.getCameraImage(me);xe.sourceTexture=Qt}}}}for(let Mt=0;Mt<w.length;Mt++){let Ut=T[Mt],_t=w[Mt];Ut!==null&&_t!==void 0&&_t.update(Ut,mt,c||a)}tt&&tt(Y,mt),mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:mt}),g=null}let Vt=new K0;Vt.setAnimationLoop(xt),this.setAnimationLoop=function(Y){tt=Y},this.dispose=function(){}}},Tb=new Te,rg=new Ht;rg.set(-1,0,0,0,1,0,0,0,1);function Eb(e,t){function i(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Gd(e)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,b,A,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,b,A):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,i(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,i(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,i(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Pi&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,i(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Pi&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,i(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,i(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,i(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let b=t.get(m),A=b.envMap,S=b.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(Tb.makeRotationFromEuler(S)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(rg),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,i(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,i(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,i(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,A){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=A*.5,m.map&&(p.map.value=m.map,i(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,i(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,i(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,i(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,i(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,i(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,b){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,i(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,i(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,i(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,i(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,i(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,i(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Pi&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,i(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,i(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,i(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,i(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,i(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,i(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,i(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let b=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wb(e,t,i,n){let s={},r={};function a(b,A){let S=A.program;n.uniformBlockBinding(b,S,s[b.id])}function o(b,A){let S=s[b.id];S===void 0&&(g(b),S=l(b),s[b.id]=S,b.addEventListener("dispose",p));let w=A.program;n.updateUBOMapping(b,w);let T=t.render.frame;r[b.id]!==T&&(c(b),r[b.id]=T)}function l(b){let A=e.createBuffer(),S=b.__size,w=b.usage;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,S,w),e.bindBuffer(e.UNIFORM_BUFFER,null),A}function c(b){let A=s[b.id],S=b.uniforms,w=b.__cache;e.bindBuffer(e.UNIFORM_BUFFER,A);for(let T=0,_=S.length;T<_;T++){let M=S[T];if(Array.isArray(M))for(let D=0,P=M.length;D<P;D++)h(M[D],T,D,w);else h(M,T,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(b,A,S,w){if(u(b,A,S,w)===!0){let T=b.__offset,_=b.value;if(Array.isArray(_)){let M=0;for(let D=0;D<_.length;D++){let P=_[D],L=y(P,!0);d(P,b.__data,M),M+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,b.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,T,b.__data)}}function d(b,A,S){typeof b=="number"||typeof b=="boolean"?A[S]=b:b.isMatrix3?(A[S]=b.elements[0],A[S+1]=b.elements[1],A[S+2]=b.elements[2],A[S+3]=0,A[S+4]=b.elements[3],A[S+5]=b.elements[4],A[S+6]=b.elements[5],A[S+7]=0,A[S+8]=b.elements[6],A[S+9]=b.elements[7],A[S+10]=b.elements[8],A[S+11]=0):ArrayBuffer.isView(b)?A.set(b.subarray(0,A.length-S),S):b.toArray(A,S)}function u(b,A,S,w){let T=b.value,_=A+"_"+S;if(Array.isArray(T)){w[_]===void 0&&(w[_]=[]);let M=w[_],D=!1;for(let P=0;P<T.length;P++)f(T[P],M,P)===!0&&(D=!0);return D}return f(T,w,_)}function f(b,A,S){if(A[S]===void 0)return typeof b=="number"||typeof b=="boolean"?A[S]=b:ArrayBuffer.isView(b)?A[S]=b.slice():A[S]=b.clone(),!0;{let w=A[S];if(typeof b=="number"||typeof b=="boolean"){if(w!==b)return A[S]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(w.equals(b)===!1)return w.copy(b),!0}}return!1}function g(b){let A=b.uniforms,S=0,w=16;for(let _=0,M=A.length;_<M;_++){let D=Array.isArray(A[_])?A[_]:[A[_]];for(let P=0,L=D.length;P<L;P++){let U=D[P],O=Array.isArray(U.value)?U.value:[U.value],R=Array.isArray(A[_])||Array.isArray(U.value),G=S;for(let V=0,Q=O.length;V<Q;V++){let W=O[V],j=y(W,R),tt=S%w,xt=tt%j.boundary,Vt=tt+xt;S+=xt,Vt!==0&&w-Vt<j.storage&&(S+=w-Vt),V===0&&(G=S),S+=j.storage}let X=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new X((S-G)/Float32Array.BYTES_PER_ELEMENT),U.__offset=G}}let T=S%w;return T>0&&(S+=w-T),b.__size=S,b.__cache={},this}function y(b,A){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=16,S.storage=48):b.isMatrix4?(S.boundary=16,S.storage=64):b.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(S.boundary=16,S.storage=b.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",b),A===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function p(b){let A=b.target;A.removeEventListener("dispose",p),e.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function m(){for(let b in s)e.deleteBuffer(s[b]);s={},r={}}return{bind:a,update:o,dispose:m}}var Ab=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gn=null;function Rb(){return Gn===null&&(Gn=new _c(Ab,16,16,Ys,gi),Gn.name="DFG_LUT",Gn.minFilter=Ri,Gn.magFilter=Ri,Gn.wrapS=Nn,Gn.wrapT=Nn,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}var bh=class{constructor(t={}){let{canvas:i=_0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Bi}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=f,p=new Set([Gc,zc,kc]),m=new Set([Bi,Mn,va,yr,Oc,Bc]),b=new Uint32Array(4),A=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},w=null,T=null,_=[],M=[],D=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,L=!1,U=null,O=null,R=null,G=null;this._outputColorSpace=$e;let X=0,V=0,Q=null,W=-1,j=null,tt=new Ie,xt=new Ie,Vt=null,Y=new Ft(0),mt=0,Mt=i.width,Ut=i.height,_t=1,qt=null,We=null,kt=new Ie(0,0,Mt,Ut),me=new Ie(0,0,Mt,Ut),xe=!1,Qt=new zs,fi=new vc,Je=!1,Oi=!1,Fe=new Te,In=new F,ai=new Ie,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nn=!1;function sn(){return Q===null?_t:1}let N=n;function rn(x,I){return i.getContext(x,I)}let Ce,Pe,dt,je,Ot,Wt,E,v,k,et,J,rt,ht,$,K,ot,C,Z,q,lt,nt,at,Pt;try{let x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${"187"}`),i.addEventListener("webglcontextlost",Dt,!1),i.addEventListener("webglcontextrestored",Yt,!1),i.addEventListener("webglcontextcreationerror",ft,!1),N===null){let I="webgl2";if(N=rn(I,x),N===null)throw rn(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Kt()}catch(x){throw i.removeEventListener("webglcontextlost",Dt,!1),i.removeEventListener("webglcontextrestored",Yt,!1),i.removeEventListener("webglcontextcreationerror",ft,!1),Gt("WebGLRenderer: "+x.message),x}function Kt(){Ce=new kS(N),Ce.init(),nt=new Sb(N,Ce),Pe=new RS(N,Ce,t,nt),dt=new xb(N,Ce),Pe.reversedDepthBuffer&&u&&dt.buffers.depth.setReversed(!0),O=N.createFramebuffer(),R=N.createFramebuffer(),G=N.createFramebuffer(),je=new VS(N),Ot=new rb,Wt=new yb(N,Ce,dt,Ot,Pe,nt,je),E=new BS(P),v=new Wx(N),at=new wS(N,v),k=new zS(N,v,je,at),et=new WS(N,k,v,at,je),Z=new HS(N,Pe,Wt),K=new CS(Ot),J=new sb(P,E,Ce,Pe,at,K),rt=new Eb(P,Ot),ht=new ob,$=new fb(Ce),C=new ES(P,E,dt,et,g,l),ot=new vb(P,et,Pe),Pt=new wb(N,je,Pe,dt),q=new AS(N,Ce,je),lt=new GS(N,Ce,je),je.programs=J.programs,P.capabilities=Pe,P.extensions=Ce,P.properties=Ot,P.renderLists=ht,P.shadowMap=ot,P.state=dt,P.info=je}y!==Bi&&(D=new qS(y,i.width,i.height,o,s,r));let it=new af(P,N);this.xr=it,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let x=Ce.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=Ce.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(x){x!==void 0&&(_t=x,this.setSize(Mt,Ut,!1))},this.getSize=function(x){return x.set(Mt,Ut)},this.setSize=function(x,I,H=!0){if(it.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}Mt=x,Ut=I,i.width=Math.floor(x*_t),i.height=Math.floor(I*_t),H===!0&&(i.style.width=x+"px",i.style.height=I+"px"),D!==null&&D.setSize(i.width,i.height),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(Mt*_t,Ut*_t).floor()},this.setDrawingBufferSize=function(x,I,H){Mt=x,Ut=I,_t=H,i.width=Math.floor(x*H),i.height=Math.floor(I*H),this.setViewport(0,0,x,I)},this.setEffects=function(x){if(y===Bi){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let I=0;I<x.length;I++)if(x[I].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(tt)},this.getViewport=function(x){return x.copy(kt)},this.setViewport=function(x,I,H,B){x.isVector4?kt.set(x.x,x.y,x.z,x.w):kt.set(x,I,H,B),dt.viewport(tt.copy(kt).multiplyScalar(sn()).round())},this.getScissor=function(x){return x.copy(me)},this.setScissor=function(x,I,H,B){x.isVector4?me.set(x.x,x.y,x.z,x.w):me.set(x,I,H,B),dt.scissor(xt.copy(me).multiplyScalar(sn()).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(x){dt.setScissorTest(xe=x)},this.setOpaqueSort=function(x){qt=x},this.setTransparentSort=function(x){We=x},this.getClearColor=function(x){return x.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(x=!0,I=!0,H=!0){let B=0;if(x){let z=!1;if(Q!==null){let ut=Q.texture.format;z=p.has(ut)}if(z){let ut=Q.texture.type,yt=m.has(ut),ct=C.getClearColor(),vt=C.getClearAlpha(),Rt=ct.r,Xt=ct.g,te=ct.b;yt?(b[0]=Rt,b[1]=Xt,b[2]=te,b[3]=vt,N.clearBufferuiv(N.COLOR,0,b)):(A[0]=Rt,A[1]=Xt,A[2]=te,A[3]=vt,N.clearBufferiv(N.COLOR,0,A))}else B|=N.COLOR_BUFFER_BIT}I&&(B|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),U=x},this.dispose=function(){i.removeEventListener("webglcontextlost",Dt,!1),i.removeEventListener("webglcontextrestored",Yt,!1),i.removeEventListener("webglcontextcreationerror",ft,!1),C.dispose(),ht.dispose(),$.dispose(),Wt.dispose(),Ot.dispose(),E.dispose(),et.dispose(),k.dispose(),at.dispose(),Pt.dispose(),J.dispose(),it.dispose(),it.removeEventListener("sessionstart",em),it.removeEventListener("sessionend",im),ar.stop()};function Dt(x){x.preventDefault(),uo("WebGLRenderer: Context Lost."),L=!0}function Yt(){uo("WebGLRenderer: Context Restored."),L=!1;let x=je.autoReset,I=ot.enabled,H=ot.autoUpdate,B=ot.needsUpdate,z=ot.type;Kt(),je.autoReset=x,ot.enabled=I,ot.autoUpdate=H,ot.needsUpdate=B,ot.type=z}function ft(x){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ge(x){let I=x.target;I.removeEventListener("dispose",ge),oi(I)}function oi(x){Is(x),Ot.remove(x)}function Is(x){let I=Ot.get(x).programs;I!==void 0&&(I.forEach(function(H){J.releaseProgram(H)}),x.isShaderMaterial&&J.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,H,B,z,ut){I===null&&(I=en);let yt=z.isMesh&&z.matrixWorld.determinantAffine()<0,ct=sx(x,I,H,B,z);dt.setMaterial(B,yt);let vt=H.index,Rt=1;if(B.wireframe===!0){if(vt=k.getWireframeAttribute(H),vt===void 0)return;Rt=2}let Xt=H.drawRange,te=H.attributes.position,bt=Xt.start*Rt,ee=(Xt.start+Xt.count)*Rt;ut!==null&&(bt=Math.max(bt,ut.start*Rt),ee=Math.min(ee,(ut.start+ut.count)*Rt)),vt!==null?(bt=Math.max(bt,0),ee=Math.min(ee,vt.count)):te!=null&&(bt=Math.max(bt,0),ee=Math.min(ee,te.count));let Xe=ee-bt;if(Xe<0||Xe===1/0)return;at.setup(z,B,ct,H,vt);let Me,ye=q;if(vt!==null&&(Me=v.get(vt),ye=lt,ye.setIndex(Me)),z.isMesh)B.wireframe===!0?(dt.setLineWidth(B.wireframeLinewidth*sn()),ye.setMode(N.LINES)):ye.setMode(N.TRIANGLES);else if(z.isLine){let xi=B.linewidth;xi===void 0&&(xi=1),dt.setLineWidth(xi*sn()),z.isLineSegments?ye.setMode(N.LINES):z.isLineLoop?ye.setMode(N.LINE_LOOP):ye.setMode(N.LINE_STRIP)}else z.isPoints?ye.setMode(N.POINTS):z.isSprite&&ye.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(Ce.get("WEBGL_multi_draw"))ye.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let xi=z._multiDrawStarts,Tt=z._multiDrawCounts,wi=z._multiDrawCount,de=vt?v.get(vt).bytesPerElement:1,or=Ot.get(B).currentProgram.getUniforms();for(let yi=0;yi<wi;yi++)or.setValue(N,"_gl_DrawID",yi),ye.render(xi[yi]/de,Tt[yi])}else if(z.isInstancedMesh)ye.renderInstances(bt,Xe,z.count);else if(H.isInstancedBufferGeometry){let xi=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Tt=Math.min(H.instanceCount,xi);ye.renderInstances(bt,Xe,Tt)}else ye.render(bt,Xe)};function tm(x,I,H,B){U!==null&&x.isNodeMaterial&&U.setObject(B,x),Je===!0&&K.setState(x,H,!1),x.transparent===!0&&x.side===cn&&x.forceSinglePass===!1?(x.side=Pi,x.needsUpdate=!0,ja(x,I,B),x.side=$s,x.needsUpdate=!0,ja(x,I,B),x.side=cn):ja(x,I,B)}this.compile=function(x,I,H=null){H===null&&(H=x),U!==null&&U.renderStart(x,I,H),T=$.get(H),T.init(I),M.push(T),H.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),x!==H&&x.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights(),U!==null&&U.updateLights(T.state.lightsArray),Oi=this.localClippingEnabled,Je=K.init(this.clippingPlanes,Oi),Je===!0&&K.setGlobalState(this.clippingPlanes,I),U!==null&&ot.render(T.state.shadowsArray,H,I);let B=new Set;return x.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ut=z.material;if(ut)if(Array.isArray(ut))for(let yt=0;yt<ut.length;yt++){let ct=ut[yt];tm(ct,H,I,z),B.add(ct)}else tm(ut,H,I,z),B.add(ut)}),T=M.pop(),U!==null&&U.renderEnd(),B},this.compileAsync=function(x,I,H=null){let B=this.compile(x,I,H);return new Promise(z=>{function ut(){if(B.forEach(function(yt){let vt=Ot.get(yt).currentProgram;(vt===void 0||vt.isReady())&&B.delete(yt)}),B.size===0){z(x);return}setTimeout(ut,10)}Ce.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Vu=null;function ix(x){Vu&&Vu(x)}function em(){ar.stop()}function im(){ar.start()}let ar=new K0;ar.setAnimationLoop(ix),typeof self<"u"&&ar.setContext(self),this.setAnimationLoop=function(x){Vu=x,it.setAnimationLoop(x),x===null?ar.stop():ar.start()},it.addEventListener("sessionstart",em),it.addEventListener("sessionend",im),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(x,I);let H=it.enabled===!0&&it.isPresenting===!0,B=D!==null&&(Q===null||H)&&D.begin(P,Q);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(I),I=it.getCamera()),x.isScene===!0&&x.onBeforeRender(P,x,I,Q),T=$.get(x,M.length),T.init(I),T.state.textureUnits=Wt.getTextureUnits(),M.push(T),Fe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?fi.setFromArrayCamera(I):Qt.setFromProjectionMatrix(Fe,on,I.reversedDepth),Oi=this.localClippingEnabled,Je=K.init(this.clippingPlanes,Oi),w=ht.get(x,_.length),w.init(),_.push(w),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){let yt=P.xr.getDepthSensingMesh();yt!==null&&Hu(yt,I,-1/0,P.sortObjects)}Hu(x,I,0,P.sortObjects),w.finish(),U!==null&&U.updateLights(T.state.lightsArray),P.sortObjects===!0&&w.sort(qt,We),nn=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,nn&&C.addToRenderList(w,x),this.info.autoReset===!0&&this.info.reset(),Je===!0&&K.beginShadows();let z=T.state.shadowsArray;if(ot.render(z,x,I),Je===!0&&K.endShadows(),(B&&D.hasRenderPass())===!1){let yt=w.opaque,ct=w.transmissive;if(T.setupLights(),I.isArrayCamera){let vt=I.cameras;if(ct.length>0)for(let Rt=0,Xt=vt.length;Rt<Xt;Rt++){let te=vt[Rt];sm(yt,ct,x,te)}nn&&C.render(x);for(let Rt=0,Xt=vt.length;Rt<Xt;Rt++){let te=vt[Rt];nm(w,x,te,te.viewport)}}else ct.length>0&&sm(yt,ct,x,I),nn&&C.render(x),nm(w,x,I)}Q!==null&&V===0&&(Wt.updateMultisampleRenderTarget(Q),Wt.updateRenderTargetMipmap(Q)),B&&D.end(P),x.isScene===!0&&x.onAfterRender(P,x,I),at.resetDefaultState(),W=-1,j=null,M.pop(),M.length>0?(T=M[M.length-1],Wt.setTextureUnits(T.state.textureUnits),Je===!0&&K.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,U!==null&&U.renderEnd()};function Hu(x,I,H,B){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)H=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)T.pushLight(x),x.castShadow&&T.pushShadow(x);else if(x.isSprite){let yt=I.isArrayCamera?fi:Qt;if(!x.frustumCulled||x.intersectsFrustum(yt)){B&&ai.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Fe);let ct=et.update(x),vt=x.material;vt.visible&&w.push(x,ct,vt,H,ai.z,null,I)}}else if(x.isMesh||x.isLine||x.isPoints){let yt=I.isArrayCamera?fi:Qt;if(!x.frustumCulled||x.intersectsFrustum(yt)){let ct=et.update(x),vt=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),ai.copy(x.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),ai.copy(ct.boundingSphere.center)),ai.applyMatrix4(x.matrixWorld).applyMatrix4(Fe)),Array.isArray(vt)){let Rt=ct.groups;for(let Xt=0,te=Rt.length;Xt<te;Xt++){let bt=Rt[Xt],ee=vt[bt.materialIndex];ee&&ee.visible&&w.push(x,ct,ee,H,ai.z,bt,I)}}else vt.visible&&w.push(x,ct,vt,H,ai.z,null,I)}}}let ut=x.children;for(let yt=0,ct=ut.length;yt<ct;yt++)Hu(ut[yt],I,H,B)}function nm(x,I,H,B){let{opaque:z,transmissive:ut,transparent:yt}=x;T.setupLightsView(H),Je===!0&&K.setGlobalState(P.clippingPlanes,H),B&&dt.viewport(tt.copy(B)),z.length>0&&Al(z,I,H),ut.length>0&&Al(ut,I,H),yt.length>0&&Al(yt,I,H),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function sm(x,I,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[B.id]===void 0){let bt=Ce.has("EXT_color_buffer_half_float")||Ce.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[B.id]=new Qe(1,1,{generateMipmaps:!0,type:bt?gi:Bi,minFilter:fs,samples:Math.max(4,Pe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:jt.workingColorSpace})}let ut=T.state.transmissionRenderTarget[B.id],yt=B.viewport||tt;ut.setSize(yt.z*P.transmissionResolutionScale,yt.w*P.transmissionResolutionScale);let ct=P.getRenderTarget(),vt=P.getActiveCubeFace(),Rt=P.getActiveMipmapLevel();P.setRenderTarget(ut),P.getClearColor(Y),mt=P.getClearAlpha(),mt<1&&P.setClearColor(16777215,.5),P.clear(),nn&&C.render(H);let Xt=P.toneMapping;P.toneMapping=zn;let te=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),T.setupLightsView(B),Je===!0&&K.setGlobalState(P.clippingPlanes,B),Al(x,H,B),Wt.updateMultisampleRenderTarget(ut),Wt.updateRenderTargetMipmap(ut),Ce.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let ee=0,Xe=I.length;ee<Xe;ee++){let Me=I[ee],{object:ye,geometry:xi,material:Tt,group:wi}=Me;if(Tt.side===cn&&ye.layers.test(B.layers)){let de=Tt.side;Tt.side=Pi,Tt.needsUpdate=!0,rm(ye,H,B,xi,Tt,wi),Tt.side=de,Tt.needsUpdate=!0,bt=!0}}bt===!0&&(Wt.updateMultisampleRenderTarget(ut),Wt.updateRenderTargetMipmap(ut))}P.setRenderTarget(ct,vt,Rt),P.setClearColor(Y,mt),te!==void 0&&(B.viewport=te),P.toneMapping=Xt}function Al(x,I,H){let B=I.isScene===!0?I.overrideMaterial:null;for(let z=0,ut=x.length;z<ut;z++){let yt=x[z],{object:ct,geometry:vt,group:Rt}=yt,Xt=yt.material;Xt.allowOverride===!0&&B!==null&&(Xt=B),ct.layers.test(H.layers)&&rm(ct,I,H,vt,Xt,Rt)}}function rm(x,I,H,B,z,ut){U!==null&&z.isNodeMaterial&&U.setObject(x,z),x.onBeforeRender(P,I,H,B,z,ut),x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),z.onBeforeRender(P,I,H,B,x,ut),z.transparent===!0&&z.side===cn&&z.forceSinglePass===!1?(z.side=Pi,z.needsUpdate=!0,P.renderBufferDirect(H,I,B,z,x,ut),z.side=$s,z.needsUpdate=!0,P.renderBufferDirect(H,I,B,z,x,ut),z.side=cn):P.renderBufferDirect(H,I,B,z,x,ut),x.onAfterRender(P,I,H,B,z,ut)}function am(x){let I=0;for(let H of x)H.texture!==null&&I++;return I}function ja(x,I,H){I.isScene!==!0&&(I=en);let B=Ot.get(x),z=T.state.lights,ut=T.state.shadowsArray,yt=z.state.version,ct=J.getParameters(x,z.state,ut,I,H,T.state.lightProbeGridArray),vt=J.getProgramCacheKey(ct),Rt=B.programs;B.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,B.fog=I.fog;let Xt=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;B.envMap=E.get(x.envMap||B.environment,Xt),B.envMapRotation=B.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,Rt===void 0&&(x.addEventListener("dispose",ge),Rt=new Map,B.programs=Rt,B.programVariants=new Map);let te=Rt.get(vt);if(te!==void 0){if(B.currentProgram===te&&B.lightsStateVersion===yt)return lm(x,ct),te}else ct.uniforms=J.getUniforms(x),U!==null&&x.isNodeMaterial&&U.build(x,H,ct),x.onBeforeCompile(ct,P),te=J.acquireProgram(ct,vt),Rt.set(vt,te),B.uniforms=ct.uniforms;let bt=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(bt.clippingPlanes=K.uniform),lm(x,ct),B.needsLights=ax(x),B.lightsStateVersion=yt,B.needsLights&&(bt.ambientLightColor.value=z.state.ambient,bt.lightProbe.value=z.state.probe,bt.sunLights.value=z.state.sun,bt.sunLightShadows.value=z.state.sunShadow,bt.directionalLights.value=z.state.directional,bt.directionalLightShadows.value=z.state.directionalShadow,bt.spotLights.value=z.state.spot,bt.spotLightShadows.value=z.state.spotShadow,bt.rectAreaLights.value=z.state.rectArea,bt.ltc_1.value=z.state.rectAreaLTC1,bt.ltc_2.value=z.state.rectAreaLTC2,bt.pointLights.value=z.state.point,bt.pointLightShadows.value=z.state.pointShadow,bt.hemisphereLights.value=z.state.hemi,bt.sunShadowMatrix.value=z.state.sunShadowMatrix,bt.sunShadowCascade.value=z.state.sunShadowCascade,bt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,bt.spotLightMatrix.value=z.state.spotLightMatrix,bt.spotLightMap.value=z.state.spotLightMap,bt.pointShadowMatrix.value=z.state.pointShadowMatrix),B.numLightProbeGrids=am(T.state.lightProbeGridArray),B.currentProgram=te,B.uniformsList=null,te}function nx(x,I,H,B,z){let ut=Ot.get(x),yt=ut.currentProgram.id+","+B+","+z,ct=ut.programVariants.get(yt);return ct===void 0?(ct=ja(x,I,H),ut.programVariants.set(yt,ct)):(ut.currentProgram=ct,ut.uniformsList=null,ut.outputColorSpace=B,ut.toneMapping=z),ct}function om(x){if(x.uniformsList===null){let I=x.currentProgram.getUniforms();x.uniformsList=xa.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function lm(x,I){let H=Ot.get(x);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function sx(x,I,H,B,z){I.isScene!==!0&&(I=en),Wt.resetTextureUnits();let ut=I.fog,yt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?I.environment:null,ct=Q===null?P.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:jt.workingColorSpace,vt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Rt=E.get(B.envMap||yt,vt),Xt=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,te=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),bt=!!H.morphAttributes.position,ee=!!H.morphAttributes.normal,Xe=!!H.morphAttributes.color,Me=zn;B.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Me=P.toneMapping);let ye=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,xi=ye!==void 0?ye.length:0,Tt=Ot.get(B),wi=T.state.lights;if(Je===!0&&(Oi===!0||x!==j)){let Ue=x===j&&B.id===W;K.setState(B,x,Ue)}let de=!1,or=!1;B.version===Tt.__version?Tt.needsLights&&Tt.lightsStateVersion!==wi.state.version||z.isBatchedMesh&&Tt.batching===!1||!z.isBatchedMesh&&Tt.batching===!0||z.isBatchedMesh&&Tt.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Tt.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Tt.instancing===!1||!z.isInstancedMesh&&Tt.instancing===!0||z.isSkinnedMesh&&Tt.skinning===!1||!z.isSkinnedMesh&&Tt.skinning===!0||z.isInstancedMesh&&Tt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Tt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Tt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Tt.instancingMorph===!1&&z.morphTexture!==null||Tt.envMap!==Rt||B.fog===!0&&Tt.fog!==ut||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==K.numPlanes||Tt.numIntersection!==K.numIntersection)||Tt.vertexAlphas!==Xt||Tt.vertexTangents!==te||Tt.morphTargets!==bt||Tt.morphNormals!==ee||Tt.morphColors!==Xe||Tt.morphTargetsCount!==xi||Tt.numLightProbeGrids!==am(T.state.lightProbeGridArray)?de=!0:(Tt.outputColorSpace!==ct||Tt.toneMapping!==Me)&&(or=!0):(de=!0,Tt.__version=B.version);let yi=Tt.currentProgram;(de===!0||or===!0)&&(yi=or===!0?nx(B,I,z,ct,Me):ja(B,I,z),U&&B.isNodeMaterial&&U.onUpdateProgram(B,yi,Tt));let Rl=!1,Ls=!1,lr=!1,ae=yi.getUniforms(),pi=Tt.uniforms;if(dt.useProgram(yi.program)&&(Rl=!0,Ls=!0,lr=!0),B.id!==W&&(W=B.id,Ls=!0),Rl||j!==x){dt.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ae.setValue(N,"projectionMatrix",x.projectionMatrix),ae.setValue(N,"viewMatrix",x.matrixWorldInverse);let li=ae.map.cameraPosition;li!==void 0&&li.setValue(N,In.setFromMatrixPosition(x.matrixWorld)),Pe.logarithmicDepthBuffer&&ae.setValue(N,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ae.setValue(N,"isOrthographic",x.isOrthographicCamera===!0),j!==x&&(j=x,Ls=!0,lr=!0)}if(Tt.needsLights&&(wi.state.sunShadowMap.length>0&&ae.setValue(N,"sunShadowMap",wi.state.sunShadowMap,Wt),wi.state.directionalShadowMap.length>0&&ae.setValue(N,"directionalShadowMap",wi.state.directionalShadowMap,Wt),wi.state.spotShadowMap.length>0&&ae.setValue(N,"spotShadowMap",wi.state.spotShadowMap,Wt),wi.state.pointShadowMap.length>0&&ae.setValue(N,"pointShadowMap",wi.state.pointShadowMap,Wt)),z.isSkinnedMesh){ae.setOptional(N,z,"bindMatrix"),ae.setOptional(N,z,"bindMatrixInverse");let Ue=z.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),ae.setValue(N,"boneTexture",Ue.boneTexture,Wt))}z.isBatchedMesh&&(ae.setOptional(N,z,"batchingTexture"),ae.setValue(N,"batchingTexture",z._matricesTexture,Wt),ae.setOptional(N,z,"batchingIdTexture"),ae.setValue(N,"batchingIdTexture",z._indirectTexture,Wt),ae.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&ae.setValue(N,"batchingColorTexture",z._colorsTexture,Wt));let gn=H.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&Z.update(z,H,yi),(Ls||Tt.receiveShadow!==z.receiveShadow)&&(Tt.receiveShadow=z.receiveShadow,ae.setValue(N,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&I.environment!==null&&(pi.envMapIntensity.value=I.environmentIntensity),pi.dfgLUT!==void 0&&(pi.dfgLUT.value=Rb()),Ls){if(ae.setValue(N,"toneMappingExposure",P.toneMappingExposure),Tt.needsLights&&rx(pi,lr),ut&&B.fog===!0&&rt.refreshFogUniforms(pi,ut),rt.refreshMaterialUniforms(pi,B,_t,Ut,T.state.transmissionRenderTarget[x.id]),Tt.needsLights&&Tt.numLightProbeGrids>0){let Ue=S,li=0;for(let es of T.state.lightProbeGridArray)es.texture!==null&&(Ue.textures[li]=es.texture,Ue.min[li]=es.boundingBox.min,Ue.max[li]=es.boundingBox.max,Ue.resolution[li]=es.resolution,li++);for(let es in Ue)Ue[es].length=li;pi.probesSH.value=Ue.textures,pi.probesMin.value=Ue.min,pi.probesMax.value=Ue.max,pi.probesResolution.value=Ue.resolution}xa.upload(N,om(Tt),pi,Wt)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(xa.upload(N,om(Tt),pi,Wt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ae.setValue(N,"center",z.center),ae.setValue(N,"modelViewMatrix",z.modelViewMatrix),ae.setValue(N,"normalMatrix",z.normalMatrix),ae.setValue(N,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){let Ue=B.uniformsGroups;for(let li=0,es=Ue.length;li<es;li++){let hm=Ue[li];Pt.update(hm,yi),Pt.bind(hm,yi)}}return yi}function rx(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.sunLights.needsUpdate=I,x.sunLightShadows.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function ax(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(x,I,H){let B=Ot.get(x);B.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Ot.get(x.texture).__webglTexture=I,Ot.get(x.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,I){let H=Ot.get(x);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(x,I=0,H=0){Q=x,X=I,V=H;let B=null,z=!1,ut=!1;if(x){let ct=Ot.get(x);if(ct.__useDefaultFramebuffer!==void 0){dt.bindFramebuffer(N.FRAMEBUFFER,ct.__webglFramebuffer),tt.copy(x.viewport),xt.copy(x.scissor),Vt=x.scissorTest,dt.viewport(tt),dt.scissor(xt),dt.setScissorTest(Vt),W=-1;return}else if(ct.__webglFramebuffer===void 0)Wt.setupRenderTarget(x);else if(ct.__hasExternalTextures)Wt.rebindTextures(x,Ot.get(x.texture).__webglTexture,Ot.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Xt=x.depthTexture;if(ct.__boundDepthTexture!==Xt){if(Xt!==null&&Ot.has(Xt)&&(x.width!==Xt.image.width||x.height!==Xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Wt.setupDepthRenderbuffer(x)}}let vt=x.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(ut=!0);let Rt=Ot.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Rt[I])?B=Rt[I][H]:B=Rt[I],z=!0):x.samples>0&&Wt.useMultisampledRTT(x)===!1?B=Ot.get(x).__webglMultisampledFramebuffer:Array.isArray(Rt)?B=Rt[H]:B=Rt,tt.copy(x.viewport),xt.copy(x.scissor),Vt=x.scissorTest}else tt.copy(kt).multiplyScalar(_t).floor(),xt.copy(me).multiplyScalar(_t).floor(),Vt=xe;if(H!==0&&(B=O),dt.bindFramebuffer(N.FRAMEBUFFER,B)&&dt.drawBuffers(x,B),dt.viewport(tt),dt.scissor(xt),dt.setScissorTest(Vt),z){let ct=Ot.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,ct.__webglTexture,H)}else if(ut){let ct=I;for(let vt=0;vt<x.textures.length;vt++){let Rt=Ot.get(x.textures[vt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+vt,Rt.__webglTexture,H,ct)}}else if(x!==null&&H!==0){let ct=Ot.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ct.__webglTexture,H)}W=-1};function cm(x){let I=Ot.get(x);return(I.__readFormat!==x.format||I.__readType!==x.type)&&(I.__readFormat=x.format,I.__readType=x.type,I.__formatReadable=Pe.textureFormatReadable(x.format),I.__typeReadable=Pe.textureTypeReadable(x.type)),I}this.readRenderTargetPixels=function(x,I,H,B,z,ut,yt,ct=0){if(!(x&&x.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Ot.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&yt!==void 0&&(vt=vt[yt],Array.isArray(vt)&&(vt=vt[0])),vt){dt.bindFramebuffer(N.FRAMEBUFFER,vt);try{let Rt=x.textures[ct],Xt=Rt.format,te=Rt.type;x.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ct);let bt=cm(Rt);if(bt.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(bt.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-B&&H>=0&&H<=x.height-z&&N.readPixels(I,H,B,z,nt.convert(Xt),nt.convert(te),ut)}finally{let Rt=Q!==null?Ot.get(Q).__webglFramebuffer:null;dt.bindFramebuffer(N.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(x,I,H,B,z,ut,yt,ct=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Ot.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&yt!==void 0&&(vt=vt[yt],Array.isArray(vt)&&(vt=vt[0])),vt)if(I>=0&&I<=x.width-B&&H>=0&&H<=x.height-z){dt.bindFramebuffer(N.FRAMEBUFFER,vt);let Rt=x.textures[ct],Xt=Rt.format,te=Rt.type;x.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ct);let bt=cm(Rt);if(bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ee=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ee),N.bufferData(N.PIXEL_PACK_BUFFER,ut.byteLength,N.STREAM_READ),N.readPixels(I,H,B,z,nt.convert(Xt),nt.convert(te),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Xe=Q!==null?Ot.get(Q).__webglFramebuffer:null;dt.bindFramebuffer(N.FRAMEBUFFER,Xe);let Me=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await x0(N,Me,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ee),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ut),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ee),N.deleteSync(Me),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,I=null,H=0){let B=Math.pow(2,-H),z=Math.floor(x.image.width*B),ut=Math.floor(x.image.height*B),yt=I!==null?I.x:0,ct=I!==null?I.y:0;Wt.setTexture2D(x,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,yt,ct,z,ut),dt.unbindTexture()},this.copyTextureToTexture=function(x,I,H=null,B=null,z=0,ut=0){let yt,ct,vt,Rt,Xt,te,bt,ee,Xe,Me=x.isCompressedTexture?x.mipmaps[ut]:x.image;if(H!==null)yt=H.max.x-H.min.x,ct=H.max.y-H.min.y,vt=H.isBox3?H.max.z-H.min.z:1,Rt=H.min.x,Xt=H.min.y,te=H.isBox3?H.min.z:0;else{let ae=Math.pow(2,-z);yt=Math.floor(Me.width*ae),ct=Math.floor(Me.height*ae),x.isDataArrayTexture?vt=Me.depth:x.isData3DTexture?vt=Math.floor(Me.depth*ae):vt=1,Rt=0,Xt=0,te=0}B!==null?(bt=B.x,ee=B.y,Xe=B.z):(bt=0,ee=0,Xe=0);let ye=nt.convert(I.format),xi=nt.convert(I.type),Tt;I.isData3DTexture?(Wt.setTexture3D(I,0),Tt=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Wt.setTexture2DArray(I,0),Tt=N.TEXTURE_2D_ARRAY):(Wt.setTexture2D(I,0),Tt=N.TEXTURE_2D),dt.activeTexture(N.TEXTURE0),dt.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),dt.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),dt.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);let wi=dt.getParameter(N.UNPACK_ROW_LENGTH),de=dt.getParameter(N.UNPACK_IMAGE_HEIGHT),or=dt.getParameter(N.UNPACK_SKIP_PIXELS),yi=dt.getParameter(N.UNPACK_SKIP_ROWS),Rl=dt.getParameter(N.UNPACK_SKIP_IMAGES);dt.pixelStorei(N.UNPACK_ROW_LENGTH,Me.width),dt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Me.height),dt.pixelStorei(N.UNPACK_SKIP_PIXELS,Rt),dt.pixelStorei(N.UNPACK_SKIP_ROWS,Xt),dt.pixelStorei(N.UNPACK_SKIP_IMAGES,te);let Ls=x.isDataArrayTexture||x.isData3DTexture,lr=I.isDataArrayTexture||I.isData3DTexture;if(x.isDepthTexture){let ae=Ot.get(x),pi=Ot.get(I),gn=Ot.get(ae.__renderTarget),Ue=Ot.get(pi.__renderTarget);dt.bindFramebuffer(N.READ_FRAMEBUFFER,gn.__webglFramebuffer),dt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let li=0;li<vt;li++)Ls&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ot.get(x).__webglTexture,z,te+li),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ot.get(I).__webglTexture,ut,Xe+li)),N.blitFramebuffer(Rt,Xt,Rt+yt,Xt+ct,bt,ee,bt+yt,ee+ct,N.DEPTH_BUFFER_BIT,N.NEAREST);dt.bindFramebuffer(N.READ_FRAMEBUFFER,null),dt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||x.isRenderTargetTexture||Ot.has(x)){let ae=Ot.get(x),pi=Ot.get(I);dt.bindFramebuffer(N.READ_FRAMEBUFFER,R),dt.bindFramebuffer(N.DRAW_FRAMEBUFFER,G);for(let gn=0;gn<vt;gn++)Ls?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ae.__webglTexture,z,te+gn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ae.__webglTexture,z),lr?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,pi.__webglTexture,ut,Xe+gn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,pi.__webglTexture,ut),z!==0?N.blitFramebuffer(Rt,Xt,Rt+yt,Xt+ct,bt,ee,bt+yt,ee+ct,N.COLOR_BUFFER_BIT,N.NEAREST):lr?N.copyTexSubImage3D(Tt,ut,bt,ee,Xe+gn,Rt,Xt,yt,ct):N.copyTexSubImage2D(Tt,ut,bt,ee,Rt,Xt,yt,ct);dt.bindFramebuffer(N.READ_FRAMEBUFFER,null),dt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else lr?x.isDataTexture||x.isData3DTexture?N.texSubImage3D(Tt,ut,bt,ee,Xe,yt,ct,vt,ye,xi,Me.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(Tt,ut,bt,ee,Xe,yt,ct,vt,ye,Me.data):N.texSubImage3D(Tt,ut,bt,ee,Xe,yt,ct,vt,ye,xi,Me):x.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ut,bt,ee,yt,ct,ye,xi,Me.data):x.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ut,bt,ee,Me.width,Me.height,ye,Me.data):N.texSubImage2D(N.TEXTURE_2D,ut,bt,ee,yt,ct,ye,xi,Me);dt.pixelStorei(N.UNPACK_ROW_LENGTH,wi),dt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,de),dt.pixelStorei(N.UNPACK_SKIP_PIXELS,or),dt.pixelStorei(N.UNPACK_SKIP_ROWS,yi),dt.pixelStorei(N.UNPACK_SKIP_IMAGES,Rl),ut===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&N.generateMipmap(Tt),dt.unbindTexture()},this.initRenderTarget=function(x){Ot.get(x).__webglFramebuffer===void 0&&Wt.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Wt.setTextureCube(x,0):x.isData3DTexture?Wt.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Wt.setTexture2DArray(x,0):Wt.setTexture2D(x,0),dt.unbindTexture()},this.resetState=function(){X=0,V=0,Q=null,dt.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let i=this.getContext();i.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),i.unpackColorSpace=jt._getUnpackColorSpace()}};var Sa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Yi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Cb=new gr(-1,1,1,-1,0,1),of=class extends Ge{constructor(){super(),this.setAttribute("position",new Se([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Se([0,2,0,0,2,0],2))}},Pb=new of,Ks=class{constructor(t){this._mesh=new Le(Pb,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Cb)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ah=class extends Yi{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof Oe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=gs.clone(t.uniforms),this.material=new Oe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ks(this.material)}render(t,i,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ko=class extends Yi{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Rh=class extends Yi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ch=class{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){let n=t.getSize(new Et);this._width=n.width,this._height=n.height,i=new Qe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:gi}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ah(Sa),this.copyPass.material.blending=ds,this.timer=new Po}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let i=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ko!==void 0&&(a instanceof Ko?n=!0:a instanceof Rh&&(n=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){let i=this.renderer.getSize(new Et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ph=class extends Yi{constructor(t,i,n=null,s=null,r=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ft}render(t,i,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var ag={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ft(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ma=class e extends Yi{constructor(t,i=1,n,s){super(),this.strength=i,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Et(t.x,t.y):new Et(256,256),this.clearColor=new Ft(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Qe(r,a,{type:gi,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Qe(r,a,{type:gi,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Qe(r,a,{type:gi,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=ag;this.highPassUniforms=gs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Oe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Et(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=gs.clone(Sa.uniforms),this.blendMaterial=new Oe({uniforms:this.copyUniforms,vertexShader:Sa.vertexShader,fragmentShader:Sa.fragmentShader,premultipliedAlpha:!0,blending:Ii,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ft,this._oldClearAlpha=1,this._basic=new Bn,this._fsQuad=new Ks(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,i){let n=Math.round(t/2),s=Math.round(i/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Et(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,i,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let i=[],n=t/3;for(let a=0;a<t;a++)i.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<t;a+=2){let o=i[a],l=a+1<t?i[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Oe({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Et(.5,.5)},direction:{value:new Et(.5,.5)},centerWeight:{value:i[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Oe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Ma.BlurDirectionX=new Et(1,0);Ma.BlurDirectionY=new Et(0,1);var Zo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ih=class extends Yi{constructor(){super(),this.isOutputPass=!0,this.uniforms=gs.clone(Zo.uniforms),this.material=new da({name:Zo.name,uniforms:this.uniforms,vertexShader:Zo.vertexShader,fragmentShader:Zo.fragmentShader}),this._fsQuad=new Ks(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,i,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},jt.getTransfer(this._outputColorSpace)===ce&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Lo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===No?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Do?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===vr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Uo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Oo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Fo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var og=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,lg=`
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
`,cg=`
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
`,hg=`
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
`,ug=`
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
`,dg=`
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
`;var ve=(e,t=0,i=1)=>e<t?t:e>i?i:e,Jo=(e,t,i)=>e+(t-e)*i,jo=(e,t,i)=>{let n=ve((i-e)/(t-e));return n*n*(3-2*n)},ui=(e,t,i,n)=>Jo(e,t,1-Math.exp(-i*n));function lf(e,t){return e+Math.random()*(t-e)}function _s(){let e=0,t=0;for(;e===0;)e=Math.random();for(;t===0;)t=Math.random();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*t)}function Lh(e){return String(Math.max(0,Math.floor(e))).padStart(2,"0")}function fg(e=128){let t=document.createElement("canvas");t.width=t.height=e;let i=t.getContext("2d"),n=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.22,"rgba(255,255,255,0.92)"),n.addColorStop(.55,"rgba(255,255,255,0.24)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,e,e);let s=new pr(t);return s.colorSpace=$e,s}function pg(e=512){let t=document.createElement("canvas");t.width=t.height=e;let i=t.getContext("2d"),n=e/2,s=i.createRadialGradient(n,n,0,n,n,n);s.addColorStop(0,"rgba(255,252,235,0.95)"),s.addColorStop(.1,"rgba(255,236,176,0.55)"),s.addColorStop(.3,"rgba(255,205,120,0.16)"),s.addColorStop(1,"rgba(255,190,90,0)"),i.fillStyle=s,i.fillRect(0,0,e,e),i.save(),i.translate(n,n),i.globalCompositeOperation="lighter";for(let h=0;h<4;h++){i.save(),i.rotate(h*Math.PI/2);let d=i.createLinearGradient(0,0,n*1.05,0);d.addColorStop(0,"rgba(255,248,215,0.85)"),d.addColorStop(.35,"rgba(255,225,150,0.26)"),d.addColorStop(1,"rgba(255,210,120,0)"),i.fillStyle=d,i.beginPath(),i.moveTo(0,0),i.lineTo(n*1.05,-n*.028),i.lineTo(n*1.05,n*.028),i.closePath(),i.fill(),i.restore()}i.restore();let r=i.createRadialGradient(n,n*.94,2,n,n,n*.42);r.addColorStop(0,"rgba(255,255,248,1)"),r.addColorStop(.45,"rgba(255,238,180,0.98)"),r.addColorStop(1,"rgba(255,196,92,0.86)"),i.fillStyle=r,i.beginPath();let a=e*.21,o=a*.44;for(let h=0;h<10;h++){let d=h%2===0?a:o,u=-Math.PI/2+h*Math.PI/5,f=n+Math.cos(u)*d,g=n+Math.sin(u)*d;h===0?i.moveTo(f,g):i.lineTo(f,g)}i.closePath(),i.fill();let l=i.createRadialGradient(n,n,0,n,n,a*.55);l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(.5,"rgba(255,248,220,0.65)"),l.addColorStop(1,"rgba(255,235,180,0)"),i.fillStyle=l,i.beginPath(),i.arc(n,n,a*.55,0,Math.PI*2),i.fill();let c=new pr(t);return c.colorSpace=$e,c}function Qo(e=256,t="rgba(120,235,225,"){let i=document.createElement("canvas");i.width=i.height=e;let n=i.getContext("2d"),s=e/2,r=n.createRadialGradient(s,s,0,s,s,s);r.addColorStop(0,t+"0.55)"),r.addColorStop(.32,t+"0.22)"),r.addColorStop(.68,t+"0.06)"),r.addColorStop(1,t+"0)"),n.fillStyle=r,n.fillRect(0,0,e,e);let a=new pr(i);return a.colorSpace=$e,a}function di(e,t,i){let n=new Ft().setHSL(e,t,i,$e);return n.convertSRGBToLinear(),[n.r,n.g,n.b]}function cf(e){let t=new Ft(e).convertSRGBToLinear();return[t.r,t.g,t.b]}function mg(e){let t=performance.now(),i=0,n=s=>{i=requestAnimationFrame(n);let r=Math.min(.05,(s-t)/1e3);t=s,e(r,s/1e3)};return i=requestAnimationFrame(n),()=>cancelAnimationFrame(i)}var gg=40,Nh=class{constructor(t){this.canvas=t,this.width=window.innerWidth,this.height=window.innerHeight,this.dpr=Math.min(window.devicePixelRatio||1,2),this.renderer=new bh({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(this.width,this.height,!1),this.renderer.toneMapping=vr,this.renderer.toneMappingExposure=1.12,this.renderer.outputColorSpace=$e,this.scene=new mo,this.scene.background=new Ft(132106);let i=be.camera;this.camera=new bi(i.fov,this.width/this.height,i.near,i.far),this.camera.position.set(...i.position),this.lookTarget=new F(...i.target),this.camera.lookAt(this.lookTarget),this.scene.add(this.camera),this.pointer=new Et(0,0),this.pointerSmooth=new Et(0,0),this.mood=0,this.moodSmooth=0,this.galaxy=0,this.galaxySmooth=0,this.burst=0,this.time=0,this.composer=new Ch(this.renderer),this.renderPass=new Ph(this.scene,this.camera),this.composer.addPass(this.renderPass),this.bloomPass=new Ma(new Et(this.width,this.height),.38,.4,.72),this.composer.addPass(this.bloomPass),this.outputPass=new Ih,this.composer.addPass(this.outputPass),this._auroraA=_n[0].aurora.map(n=>cf(n)),this._auroraB=[this._auroraA[1],this._auroraA[0]],this.bgMaterial=new Oe({vertexShader:og,fragmentShader:lg,uniforms:{uResolution:{value:new Et(this.width*this.dpr,this.height*this.dpr)},uTime:{value:0},uPointer:{value:new Et(0,0)},uMood:{value:0},uGalaxy:{value:0}},depthTest:!1,depthWrite:!1}),this.bgMesh=new Le(new Hs(1,1),this.bgMaterial),this.bgMesh.position.z=-gg,this.bgMesh.renderOrder=-1e3,this.bgMesh.frustumCulled=!1,this.camera.add(this.bgMesh),this._layoutBackground(),this._buildLights(),this._buildGround(),this._buildSnow(),this.update(0,0)}_layoutBackground(){let i=2*gg*Math.tan(be.camera.fov*Math.PI/360),n=i*(this.width/this.height);this.bgMesh.scale.set(n,i,1)}_buildLights(){let t=new Co(2769760,1.5);this.scene.add(t);let i=new Ro(10475775,1.35);i.position.set(-4,7,6),this.scene.add(i);let n=new mr(16761466,26,12,2);n.position.set(.4,1.4,2.2),this.scene.add(n),this.warmLight=n;let s=new mr(16767144,14,9,2);s.position.set(0,3.1,1.6),this.scene.add(s),this.warmLight2=s;let r=new mr(16773312,26,10,2);r.position.set(0,be.tree.starY,.2),this.scene.add(r),this.starLight=r}_buildGround(){let t=new Le(new Hs(11,11),new Bn({map:Qo(256,"rgba(110,240,225,"),transparent:!0,opacity:.55,depthWrite:!1,blending:Ii}));t.rotation.x=-Math.PI/2,t.position.set(0,.015,.4),this.scene.add(t),this.groundGlow=t;let i=new Le(new ua(9,72),new Bn({map:Qo(256,"rgba(30,56,88,"),transparent:!0,opacity:.9,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.set(0,-.01,.2),this.scene.add(i),this.snowPatch=i;let n=new Le(new ua(2.55,64),new kn({color:10339038,roughness:.6,metalness:.04,transparent:!0,opacity:.42}));n.rotation.x=-Math.PI/2,n.position.set(0,.02,0),this.scene.add(n),this.disc=n;let s=new Le(new To(2.45,2.72,72),new Bn({color:8188128,transparent:!0,opacity:.22,side:cn,blending:Ii,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.set(0,.035,0),this.scene.add(s),this.rim=s,this.gifts=new ln;let r=[14168636,3112284,15184970,15986918,11880239,4159428,14122928],a=new Vs(1,1,1),o=new kn({color:16179109,roughness:.35,metalness:.4}),l=[],c=14;for(let d=0;d<c;d++){let u=d/c*Math.PI*2+.22;l.push({a:u,r:1.12+Math.random()*1.16,s:.19+Math.random()*.2,onDisc:!0})}let h=3;for(let d=0;d<h;d++){let u=d/h*Math.PI*2+.9;l.push({a:u,r:2.42+Math.random()*.18,s:.13+Math.random()*.05,onDisc:!0})}l.forEach((d,u)=>{let{a:f,r:g,s:y}=d,p=new ln,m=new kn({color:r[u%r.length],roughness:.42,metalness:.18,emissive:new Ft(r[u%r.length]).multiplyScalar(.2)}),b=new Le(a,m);b.scale.set(y,y*(.6+Math.random()*.42),y),p.add(b);let A=new Le(a,o);A.scale.set(y*1.02,y*.92,y*.16),p.add(A);let S=new Le(a,o);S.scale.set(y*.16,y*.92,y*1.02),p.add(S),p.position.set(Math.cos(f)*g,y*.52+(d.onDisc?.03:0),Math.sin(f)*g),p.rotation.y=Math.random()*Math.PI,p.userData.base=p.position.clone(),p.userData.phase=Math.random()*Math.PI*2,p.userData.rot=p.rotation.y,this.gifts.add(p)}),this.scene.add(this.gifts)}_buildSnow(){let i=new Ge,n=new Float32Array(1500*3),s=new Float32Array(1500);for(let a=0;a<1500;a++)n[a*3]=(Math.random()-.5)*22,n[a*3+1]=Math.random()*13,n[a*3+2]=-6+Math.random()*14,s[a]=Math.random();i.setAttribute("position",new fe(n,3)),i.setAttribute("aSeed",new fe(s,1)),this.snowSeeds=s;let r=new ha({size:.055,map:fg(64),transparent:!0,opacity:.62,depthWrite:!1,blending:Ii,color:14413567,sizeAttenuation:!0});this.snow=new Gs(i,r),this.snow.frustumCulled=!1,this.scene.add(this.snow)}setMood(t,i=!1){this.mood=ve(t,0,_n.length-1);let n=_n[Math.round(this.mood)];this._auroraA=n.aurora.map(s=>cf(s)),this._auroraB=[this._auroraA[1],this._auroraA[0]],i&&(this.moodSmooth=this.mood,this.bgMaterial.uniforms.uMood.value=this.mood)}setPointer(t,i){this.pointer.set(ve(t,-1,1),ve(i,-1,1))}setGalaxy(t){this.galaxy=ve(t)}triggerBurst(t=.45){this.burst=Math.max(this.burst,t)}project(t){let i=this._pv||(this._pv=new F);return i.copy(t).project(this.camera),{x:(i.x*.5+.5)*this.width,y:(-i.y*.5+.5)*this.height,z:i.z,visible:i.z>-1&&i.z<1}}update(t,i){this.time=i,this.pointerSmooth.x=ui(this.pointerSmooth.x,this.pointer.x,2.2,t),this.pointerSmooth.y=ui(this.pointerSmooth.y,this.pointer.y,2.2,t),this.moodSmooth=ui(this.moodSmooth,this.mood,3.2,t),this.galaxySmooth=ui(this.galaxySmooth,this.galaxy,4.2,t),this.burst=Math.max(0,this.burst-t*1.9);let n=this.bgMaterial.uniforms;n.uTime.value=i,n.uPointer.value.set(this.pointerSmooth.x,this.pointerSmooth.y),n.uMood.value=this.moodSmooth,n.uGalaxy.value=this.galaxySmooth;let s=i;if(this.camera.position.x=ui(this.camera.position.x,this.pointerSmooth.x*.55+Math.sin(s*.18)*.1,3.4,t),this.camera.position.y=ui(this.camera.position.y,2.15+this.pointerSmooth.y*.32+Math.sin(s*.24+1.3)*.07,3.4,t),this.camera.position.z=ui(this.camera.position.z,10.6-this.galaxySmooth*.55,3,t),this.camera.lookAt(this.lookTarget),this.warmLight&&(this.warmLight.intensity=24+Math.sin(s*1.7)*4+this.galaxySmooth*6),this.warmLight2&&(this.warmLight2.intensity=12+Math.sin(s*2.1+1.1)*3),this.starLight&&(this.starLight.intensity=24+Math.sin(s*1.1+2)*6),this.groundGlow&&(this.groundGlow.material.opacity=(.42+Math.sin(s*.9)*.08)*Math.max(0,1-this.galaxySmooth*1.5),this.groundGlow.visible=this.galaxySmooth<.66),this.snowPatch&&(this.snowPatch.material.opacity=.9*(1-this.galaxySmooth*.92)),this.disc&&(this.disc.material.opacity=.42*(1-this.galaxySmooth*.95)),this.rim&&(this.rim.material.opacity=.22*(1-this.galaxySmooth)),this.gifts){let r=this.galaxySmooth;for(let a of this.gifts.children){let o=a.userData;a.position.set(o.base.x*(1+r*.22),o.base.y+r*(1.25+.5*Math.sin(s*.62+o.phase)),o.base.z*(1+r*.22)),a.rotation.y=o.rot+r*(s*.35+o.phase),a.rotation.x=r*Math.sin(s*.4+o.phase)*.4}}if(this.snow){let r=this.snow.geometry.attributes.position,a=r.array,o=this.snowSeeds,l=a.length/3;for(let c=0;c<l;c++){let h=o[c];a[c*3+1]-=(.22+h*.5)*t*1.4,a[c*3]+=Math.sin(s*.6+h*9)*t*.22,a[c*3+1]<-.15&&(a[c*3+1]=12.8,a[c*3]=(Math.random()-.5)*22,a[c*3+2]=-6+Math.random()*14)}r.needsUpdate=!0,this.snow.material.opacity=.6-this.galaxySmooth*.25}}render(){this.composer.render()}resize(t=window.innerWidth,i=window.innerHeight){this.width=t,this.height=i,this.dpr=Math.min(window.devicePixelRatio||1,2),this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(t,i,!1),this.composer.setPixelRatio(this.dpr),this.composer.setSize(t,i),this.camera.aspect=t/i,this.camera.updateProjectionMatrix(),this.bgMaterial.uniforms.uResolution.value.set(t*this.dpr,i*this.dpr),this._layoutBackground()}dispose(){this.composer.dispose?.(),this.renderer.dispose()}};var ba={baseY:.3,topY:4.72,radius:be.tree.radius,height:4.42},Hn=Math.PI*2,Dh=class{constructor(t){this.rig=t,this.group=new ln,this.rig.scene.add(this.group),this.burstValue=0,this.galaxyRotation=0,this.handStrength=0,this.handPos=new F(0,1.9,0),this._buildBody(),this._buildFoliage(),this._buildTrunk(),this._buildInnerGlow(),this._buildOrnaments(),this._buildStar()}_buildBody(){let{baseY:t,radius:i,height:n}=ba,s=80,r=72,a=8,o=[],l=[],c=[],h=(y,p)=>{let m=y/s,b=m*a%1,A=1+.115*Math.pow(1-b,2.4),S=Math.pow(1-m,1.04),w=i*S*A;m<.045&&(w*=.86+.14*(m/.045));let T=p/r*Hn,_=1+.022*Math.sin(T*5+m*18),M=t+m*n;return[Math.cos(T)*w*_,M,Math.sin(T)*w*_,m,b]},d=(y,p)=>{let[m,b,A,S,w]=h(y,p);o.push(m,b,A);let T=Math.pow(1-w,26)*.85+Math.pow(1-w,5)*.06,_=.085+S*.055,M=di(.335+Math.random()*.045,.55+Math.random()*.12,_),D=[.72,.83,.8],P=Math.random()*.25;l.push(M[0]*(1-T)+D[0]*T*(.35+P),M[1]*(1-T)+D[1]*T*(.35+P),M[2]*(1-T)+D[2]*T*(.35+P))};for(let y=0;y<=s;y++)for(let p=0;p<r;p++)d(y,p);for(let y=0;y<s;y++)for(let p=0;p<r;p++){let m=y*r+p,b=y*r+(p+1)%r,A=(y+1)*r+(p+1)%r,S=(y+1)*r+p;c.push(m,b,A,m,A,S)}let u=new Ge;u.setAttribute("position",new Se(o,3)),u.setAttribute("color",new Se(l,3)),u.setIndex(c),u.computeVertexNormals();let f=new kn({vertexColors:!0,roughness:.88,metalness:.02,emissive:new Ft(135691),transparent:!0,opacity:1}),g=new Le(u,f);g.position.set(0,0,0),g.renderOrder=0,this.group.add(g),this.body=g}_buildTrunk(){let t=new kn({color:2759186,roughness:.92,metalness:0,emissive:new Ft(1444870),transparent:!0}),i=new Le(new bo(.11,.17,.55,10),t);i.position.set(0,ba.baseY+.12,0),this.group.add(i),this.trunk=i}_buildInnerGlow(){let t=Qo(256,"rgba(255,206,120,"),i=new fr(new ks({map:t,color:16763514,transparent:!0,opacity:.14,depthWrite:!1,blending:Ii}));i.position.set(0,ba.baseY+ba.height*.44,.2),i.scale.set(3.4,3.1,1),this.group.add(i),this.innerGlow=i}_buildFoliage(){let{baseY:t,topY:i,radius:n,height:s}=ba,r=be.tree.particles,a=be.tree.garland,o=r+a,l=new Float32Array(o*3),c=new Float32Array(o*3),h=new Float32Array(o*3),d=new Float32Array(o*3),u=new Float32Array(o),f=new Float32Array(o),g=new Float32Array(o),y=()=>{let S=Math.random();if(S<.1)return di(.1+Math.random()*.04,.85,.7).map(M=>M*(1.1+Math.random()*.9));if(S<.16)return di(.9+Math.random()*.05,.7,.66).map(M=>M*(1+Math.random()*.6));let w=.5+Math.random()*.13,T=.42+Math.random()*.58,_=.45+Math.random()*.4;return di(w,T,_).map(M=>M*(.75+Math.random()*.85))},p=(S,w)=>{if(Math.random()<.18){let L=Math.random()*Hn,U=Math.acos(lf(-1,1)),O=lf(2.6,7.6),R=Math.sin(U)*Math.cos(L)*O,G=Math.cos(U)*O*.55+be.galaxy.centerY,X=Math.sin(U)*Math.sin(L)*O*.5;S[w*3]=R,S[w*3+1]=G,S[w*3+2]=X;return}let _=Math.random()*3|0,M=.7+Math.pow(Math.random(),.62)*6.6,D=Math.random()*Hn+_*(Hn/3)+M*.52,P=1+_s()*.12;S[w*3]=Math.cos(D)*M*1.18*P,S[w*3+1]=be.galaxy.centerY+Math.sin(D)*M*.5*P+_s()*.34,S[w*3+2]=Math.sin(D)*M*.22+_s()*.9},m=15,b=7;for(let S=0;S<r;S++){let w=Math.random()<.62,T,_,M;if(w){let L=(Math.floor(Math.pow(Math.random(),1.5)*b)+Math.random())/b,U=t+L*s,O=n*(1-L)*1.02,R=.12+Math.pow(Math.random(),.62)*O,X=Math.round(Math.random()*m)/m*Hn+_s()*.075,V=Math.pow(R/Math.max(.001,O),2)*.16;T=Math.cos(X)*R,M=Math.sin(X)*R,_=U-V+_s()*.03;let Q=Math.random(),W,j=R>O*.78;if(Q<.045)W=di(.11,.92,.74);else if(Q<.2)W=di(.53,.16,.93);else if(Q<.235)W=di(.03,.84,.6);else{let Vt=.315+Math.random()*.1,Y=j?.3+Math.random()*.22:.17+Math.random()*.18;W=di(Vt,.68+Math.random()*.3,Y)}let tt=1-.5*Math.pow(L,2.6),xt=(.85+Math.random()*.8)*tt;h[S*3]=W[0]*xt,h[S*3+1]=W[1]*xt,h[S*3+2]=W[2]*xt,u[S]=.018+Math.pow(Math.random(),1.8)*.034}else{let P=Math.random(),L=1-Math.sqrt(1-P);_=t+L*s;let U=1+.07*Math.sin(L*Math.PI*9+1.2),O=.42+Math.pow(Math.random(),.7)*.6,R=n*(1-L)*U*O,G=Math.random()*Hn;T=Math.cos(G)*R,M=Math.sin(G)*R,_=_-Math.pow(O,2)*.1+_s()*.03;let X=.31+Math.random()*.1,V=di(X,.72+Math.random()*.24,.13+Math.random()*.2),Q=.7+Math.random()*.7;h[S*3]=V[0]*Q,h[S*3+1]=V[1]*Q,h[S*3+2]=V[2]*Q,u[S]=.012+Math.pow(Math.random(),2.2)*.022}l[S*3]=T,l[S*3+1]=_,l[S*3+2]=M,f[S]=Math.random(),g[S]=Math.random(),p(c,S);let D=y();d[S*3]=D[0],d[S*3+1]=D[1],d[S*3+2]=D[2]}for(let S=0;S<a;S++){let w=r+S,T=S/a,_=t+T*s*.985+Math.sin(T*Hn*22)*.02,M=1+.085*Math.sin(T*Math.PI*8+1.2),D=n*(1-T)*M*1.035,P=T*Hn*7.5+Math.sin(T*9)*.16;l[w*3]=Math.cos(P)*D,l[w*3+1]=_,l[w*3+2]=Math.sin(P)*D;let L=di(.105+Math.random()*.02,.92,.62+Math.random()*.2),U=.85+Math.random()*.75;h[w*3]=L[0]*U,h[w*3+1]=L[1]*U,h[w*3+2]=L[2]*U,u[w]=.016+Math.random()*.03,f[w]=Math.random(),g[w]=Math.random(),p(c,w);let O=Math.random()<.55?di(.11,.9,.7):y();d[w*3]=O[0]*1.2,d[w*3+1]=O[1]*1.2,d[w*3+2]=O[2]*1.2}this.foliageCount=o;let A=new Ge;A.setAttribute("position",new fe(l.slice(),3)),A.setAttribute("aPosA",new fe(l,3)),A.setAttribute("aPosB",new fe(c,3)),A.setAttribute("aColorA",new fe(h,3)),A.setAttribute("aColorB",new fe(d,3)),A.setAttribute("aSize",new fe(u,1)),A.setAttribute("aPhase",new fe(f,1)),A.setAttribute("aSeed",new fe(g,1)),A.boundingSphere=new Un(new F(0,2,0),9),this.foliageUniforms={uTime:{value:0},uProgress:{value:0},uPixelRatio:{value:this.rig.dpr||1},uViewportScale:{value:800},uGalaxyRotation:{value:0},uBurst:{value:0},uSizeScale:{value:1},uHand:{value:new F(0,1.9,0)},uHandStrength:{value:0},uHandRadius:{value:1.35}},this.foliage=new Gs(A,new Oe({vertexShader:cg,fragmentShader:hg,uniforms:this.foliageUniforms,transparent:!0,depthWrite:!1,blending:Ii})),this.foliage.frustumCulled=!1,this.foliage.renderOrder=2,this.group.add(this.foliage)}_buildOrnaments(){let{baseY:t,radius:i,height:n}=ba,s=be.tree.ornaments,r=new Float32Array(s*3),a=new Float32Array(s*3),o=new Float32Array(s*3),l=new Float32Array(s*3),c=new Float32Array(s),h=new Float32Array(s),d=new Float32Array(s),u=[di(.995,.85,.55),di(.12,.9,.62),di(.5,.55,.9),di(.78,.7,.62),di(.35,.6,.62)];for(let g=0;g<s;g++){let y=Math.pow(Math.random(),.8),p=t+.25+y*(n-.45),m=1+.085*Math.sin(y*Math.PI*8+1.2),b=i*(1-y)*m*(.95+Math.random()*.12),A=Math.random()*Hn;r[g*3]=Math.cos(A)*b,r[g*3+1]=p,r[g*3+2]=Math.sin(A)*b;let S=u[g%u.length],w=1.1+Math.random()*.9;o[g*3]=S[0]*w,o[g*3+1]=S[1]*w,o[g*3+2]=S[2]*w,c[g]=.055+Math.random()*.075,h[g]=Math.random(),d[g]=Math.random();let T=Math.random()*Hn,_=1+Math.random()*6.2;a[g*3]=Math.cos(T)*_*1.12,a[g*3+1]=be.galaxy.centerY+Math.sin(T)*_*.5+_s()*.4,a[g*3+2]=Math.sin(T)*_*.3+_s()*.8;let M=Math.random()<.5?u[(g+2)%u.length]:di(.55,.5,.85);l[g*3]=M[0]*1.8,l[g*3+1]=M[1]*1.8,l[g*3+2]=M[2]*1.8}let f=new Ge;f.setAttribute("position",new fe(r.slice(),3)),f.setAttribute("aPosA",new fe(r,3)),f.setAttribute("aPosB",new fe(a,3)),f.setAttribute("aColorA",new fe(o,3)),f.setAttribute("aColorB",new fe(l,3)),f.setAttribute("aSize",new fe(c,1)),f.setAttribute("aPhase",new fe(h,1)),f.setAttribute("aSeed",new fe(d,1)),f.boundingSphere=new Un(new F(0,2,0),9),this.ornamentUniforms={uTime:{value:0},uProgress:{value:0},uPixelRatio:{value:this.rig.dpr||1},uViewportScale:{value:800},uGalaxyRotation:{value:0},uBurst:{value:0},uHand:{value:new F(0,1.9,0)},uHandStrength:{value:0},uHandRadius:{value:1.25}},this.ornaments=new Gs(f,new Oe({vertexShader:ug,fragmentShader:dg,uniforms:this.ornamentUniforms,transparent:!0,depthWrite:!1,blending:Ii})),this.ornaments.frustumCulled=!1,this.ornaments.renderOrder=3,this.group.add(this.ornaments)}_buildStar(){let t=pg(512);this.starMaterial=new ks({map:t,color:16773320,transparent:!0,depthWrite:!1,blending:Ii,opacity:.95}),this.star=new fr(this.starMaterial),this.star.position.set(0,be.tree.starY,.05),this.star.scale.setScalar(.95),this.star.renderOrder=4,this.group.add(this.star),this.starHalo=new fr(new ks({map:t,color:16765562,transparent:!0,depthWrite:!1,blending:Ii,opacity:.22})),this.starHalo.position.copy(this.star.position),this.starHalo.scale.setScalar(1.45),this.starHalo.renderOrder=1,this.group.add(this.starHalo)}setHand(t,i){t&&this.handPos.copy(t),this.handStrength=ve(i)}burst(t=.5){this.burstValue=Math.max(this.burstValue,t)}update(t,i){let n=this.rig,s=n.galaxySmooth;this.burstValue=Math.max(0,this.burstValue-t*1.6),this.galaxyRotation+=t*(.1+.22*s);let r=n.height/2/Math.tan(n.camera.fov*Math.PI/360),a=c=>{c.uTime.value=i,c.uProgress.value=s,c.uPixelRatio.value=n.dpr,c.uViewportScale.value=r,c.uGalaxyRotation.value=this.galaxyRotation,c.uBurst.value=this.burstValue,c.uHand.value.copy(this.handPos),c.uHandStrength.value=this.handStrength};a(this.foliageUniforms),a(this.ornamentUniforms),this.foliageUniforms.uSizeScale.value=1+s*.18+this.burstValue*.35;let o=1+Math.sin(i*1.6)*.055+Math.sin(i*4.3)*.02,l=(.95+s*.3)*o;this.star.scale.setScalar(l),this.starHalo.scale.setScalar(l*1.8),this.starMaterial.opacity=.85+Math.sin(i*2.1)*.1,this.star.position.y=be.tree.starY+Math.sin(i*.8)*.02,this.innerGlow&&(this.innerGlow.material.opacity=(.1+Math.sin(i*1.25)*.03)*Math.max(0,1-s*1.6),this.innerGlow.visible=s<.62),this.trunk&&(this.trunk.material.opacity=1-s),this.body&&(this.body.material.opacity=Math.max(0,1-s*1.35),this.body.visible=s<.985),this.starMaterial.opacity*=1-s*.55,this.starHalo.material.opacity=.22*(1-s*.6)}};var Ib=Math.PI*2,uC=Math.PI*(3-Math.sqrt(5));function vg(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let i=Math.imul(t^t>>>15,1|t);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}var _g=[[-1.95,1.3,1.35],[-2.12,2.32,1.15],[-1.78,3.24,1.2],[-1.02,1.74,1.95],[1.04,1.44,1.95],[2.06,1.94,1.35],[2.3,3.04,1],[.96,3.68,1.15]];function Lb(e){let t=[],i=vg(20221225),n=[{rad:2.05,y:.95,n:5},{rad:3.5,y:.62,n:6},{rad:4.9,y:.48,n:7}],s=0;for(let r=0;r<n.length;r++){let a=n[r];for(let o=0;o<a.n&&s<e;o++,s++){let l=o/a.n*Math.PI*2+(i()-.5)*.5+r*.42,c=a.rad*(.9+i()*.18);t.push(new F(Math.cos(l)*c,be.galaxy.centerY+Math.sin(l)*c*a.y,(i()-.5)*1.8))}}for(;t.length<e;){let r=i()*Math.PI*2,a=5.2+i()*1.4;t.push(new F(Math.cos(r)*a,be.galaxy.centerY+Math.sin(r)*a*.3,(i()-.5)*1.8))}return t}var Fh=class{constructor({rig:t,container:i,onGrab:n,onRelease:s,onTap:r}){this.rig=t,this.container=i,this.onGrab=n||(()=>{}),this.onRelease=s||(()=>{}),this.onTap=r||(()=>{}),this.cards=[],this.photos=[],this.galaxyAnchors=[],this.pointer={x:0,y:0,down:!1,active:!1,source:"mouse"},this.source="mouse",this.grabbed=null,this.hovered=null,this._pointerId=null,this._downInfo=null,this._v=new F,this._bindDomEvents()}async load(t="assets/photos/manifest.json"){let i;try{i=await(await fetch(t,{cache:"no-cache"})).json()}catch(n){console.error("[photos] manifest 加载失败",n),i={photos:[]}}return this.photos=(i.photos||[]).slice().sort((n,s)=>n.order-s.order),this.galaxyAnchors=Lb(Math.max(18,this.photos.length+6)),this._buildCards(this.photos),await this._decodeAll(),this.photos.length}_buildCards(t){let i=document.createDocumentFragment();t.forEach((n,s)=>{let r=this._makeCard(n,s);i.appendChild(r.el),this.cards.push(r)}),this.container.appendChild(i)}_makeCard(t,i){let n=document.createElement("div");n.className="photo-card settling",n.dataset.id=t.id;let s=document.createElement("div");s.className="photo-inner",s.style.setProperty("--ar",String(t.aspect||.75)),t.blur&&(s.style.backgroundImage=`url("${t.blur}")`);let r=document.createElement("img");r.alt=t.caption||t.place||"",r.draggable=!1,r.decoding="async",s.appendChild(r);let a=document.createElement("div");a.className="photo-caption",a.textContent=t.caption||t.place||"",n.appendChild(s),n.appendChild(a);let o=!!t.featured,l=o?this.cards.filter(u=>u.featured).length:-1,c=o&&_g[l]?new F(..._g[l]):new F(0,1.9,1.2),h=vg(1e3+i*7919),d={el:n,img:r,inner:s,photo:t,index:i,featured:o,treeAnchor:c,galaxyAnchor:this.galaxyAnchors[i%this.galaxyAnchors.length].clone(),worldW:(.56+h()*.18)*(o?1.05:1),rot:(h()-.5)*7,phase:h()*Ib,off:{x:0,y:0},vel:{x:0,y:0},sx:0,sy:0,scale:1,opacity:0,hover:!1,grabbed:!1,rect:{w:0,h:0},z:0};return n.addEventListener("pointerenter",()=>{this.source==="mouse"&&!d.grabbed&&(d.hover=!0,n.classList.add("hover"))}),n.addEventListener("pointerleave",()=>{d.hover=!1,n.classList.remove("hover")}),d}_decodeAll(){return Promise.all(this.cards.map(t=>new Promise(i=>{let n=t.img;n.onload=()=>{t.el.classList.add("ready"),requestAnimationFrame(()=>n.classList.add("loaded")),i()},n.onerror=()=>i(),n.src=t.photo.src})))}setSource(t){this.source=t,t!=="mouse"&&(this.releaseAll(),this._clearHover())}_bindDomEvents(){let t=i=>({x:i.clientX,y:i.clientY});window.addEventListener("pointermove",i=>{if(this.source!=="mouse")return;let n=t(i);this.pointer.x=n.x,this.pointer.y=n.y,this.pointer.active=!0,this.pointer.down?(!this.grabbed&&this._downInfo?.card&&Math.hypot(n.x-this._downInfo.x,n.y-this._downInfo.y)>6&&(this._grab(this._downInfo.card,this._downInfo.x,this._downInfo.y),this._downInfo=null),this.grabbed&&this._drag(n.x,n.y)):this._hover(n.x,n.y)}),window.addEventListener("pointerdown",i=>{if(this.source!=="mouse")return;let n=t(i);this.pointer.x=n.x,this.pointer.y=n.y,this.pointer.down=!0,this.pointer.active=!0,this._pointerId=i.pointerId,this._downInfo={x:n.x,y:n.y,t:performance.now(),card:this._pick(n.x,n.y)},this._downInfo.card&&i.preventDefault()}),window.addEventListener("pointerup",i=>{if(this.source!=="mouse")return;let n=t(i),s=this.grabbed;this.pointer.down=!1,this.pointer.x=n.x,this.pointer.y=n.y;let r=this._downInfo;if(this._downInfo=null,this._pointerId=null,s){this._release(s,n.x,n.y);return}r&&r.card&&Math.hypot(n.x-r.x,n.y-r.y)<8&&performance.now()-r.t<420&&this.onTap(r.card.photo,r.card.el)}),window.addEventListener("pointercancel",()=>{this.pointer.down=!1,this.releaseAll()}),window.addEventListener("blur",()=>{this.pointer.down=!1,this.releaseAll()})}setPointer(t,i,n,s=!0){if(this.pointer.x=t,this.pointer.y=i,this.pointer.active=s,this.pointer.down=n&&s,!s){this.releaseAll(),this._clearHover();return}if(this.pointer.down&&!this.grabbed){let r=this._pick(t,i);r&&this._grab(r,t,i)}else this.pointer.down&&this.grabbed?this._drag(t,i):!this.pointer.down&&this.grabbed?this._release(this.grabbed,t,i):this._hover(t,i)}_pick(t,i){let n=null,s=1/0;for(let r of this.cards){if(r.opacity<.25||r.el.classList.contains("grabbed"))continue;let a=r.rect.w/2+8,o=r.rect.h/2+8,l=Math.abs(t-r.sx),c=Math.abs(i-r.sy);if(l<a&&c<o){let h=l/a+c/o;h<s&&(s=h,n=r)}}return n}_hover(t,i){let n=this._pick(t,i);n!==this.hovered&&(this._clearHover(),n?(this.hovered=n,n.hover=!0,n.el.classList.add("hover"),this.container.style.cursor="grab"):this.container.style.cursor="")}_clearHover(){this.hovered&&(this.hovered.hover=!1,this.hovered.el.classList.remove("hover"),this.hovered=null),this.container.style.cursor=""}_grab(t,i,n){this._clearHover(),this.grabbed=t,t.grabbed=!0,t.grabDX=i-(t.sx+t.off.x),t.grabDY=n-(t.sy+t.off.y),t.lastX=i,t.lastY=n,t.vel.x=0,t.vel.y=0,t.el.classList.add("grabbed"),t.el.classList.remove("settling"),this.onGrab(t,{x:i,y:n})}_drag(t,i){let n=this.grabbed;if(!n)return;let s=1/60,r=t-n.sx-n.grabDX,a=i-n.sy-n.grabDY;n.vel.x=ve((r-n.off.x)/s,-2600,2600),n.vel.y=ve((a-n.off.y)/s,-2600,2600),n.off.x=r,n.off.y=a,n.lastX=t,n.lastY=i}_release(t,i,n){t.grabbed=!1,t.el.classList.remove("grabbed"),t.el.classList.add("settling"),t.vel.x=ve(t.vel.x,-1800,1800),t.vel.y=ve(t.vel.y,-1800,1800),this.grabbed=null,this.onRelease(t,{x:i,y:n,vx:t.vel.x,vy:t.vel.y})}releaseAll(){for(let t of this.cards)t.grabbed&&(t.grabbed=!1,t.el.classList.remove("grabbed"),t.el.classList.add("settling"));this.grabbed=null,this.pointer.down=!1}resetPositions(){for(let t of this.cards)t.off.x=t.off.y=0,t.vel.x=t.vel.y=0}update(t,i){let n=this.rig,s=n.galaxySmooth,r=n.height/2/Math.tan(n.camera.fov*Math.PI/360),a=n.width,o=n.height;this.grabbed&&this.pointer.down&&this.pointer.active&&this._drag(this.pointer.x,this.pointer.y);for(let l of this.cards){let c=l.grabbed,h=l.treeAnchor,d=l.galaxyAnchor,u=this._v.set(Jo(h.x,d.x,s),Jo(h.y,d.y,s),Jo(h.z,d.z,s)),f=.055;u.x+=Math.sin(i*.53+l.phase)*f,u.y+=Math.sin(i*.71+l.phase*1.7)*f,u.z+=Math.sin(i*.41+l.phase*2.3)*.04;let g=n.project(u),y=Math.max(2.2,n.camera.position.distanceTo(u)),m=l.worldW*(.82+s*.55)*1*r/y,A=m/(l.photo.aspect||.75)+m*.19+14;l.rect.w=m,l.rect.h=A,l.sx=g.x,l.sy=g.y;let S=l.featured?1:jo(.18,.62,s),w=l.featured?0:.95,T=ve(l.featured?S:jo(.15,.55,s)*w)*(s>.02||l.featured,1),_=c?1:T;if(!c){let Q=-26*l.off.x-8.6*l.vel.x,W=-26*l.off.y-8.6*l.vel.y;l.vel.x+=Q*t,l.vel.y+=W*t,l.off.x+=l.vel.x*t,l.off.y+=l.vel.y*t,Math.abs(l.off.x)<.02&&Math.abs(l.off.y)<.02&&(l.off.x=l.off.y=0,l.vel.x=l.vel.y=0)}let M=g.x+l.off.x,D=g.y+l.off.y,P=(c?1.62:1)*(l.hover?1.055:1)*(.94+s*.1);l.scale=ui(l.scale,P,12,t),l.opacity=ui(l.opacity,_,c?20:5.5,t);let L=ve(l.vel.x*.0075,-13,13),U=l.rot+Math.sin(i*.42+l.phase)*.9+L+0,O=l.el;O.style.setProperty("--x",`${M.toFixed(2)}px`),O.style.setProperty("--y",`${D.toFixed(2)}px`),O.style.setProperty("--w",`${Math.max(24,m).toFixed(2)}px`),O.style.setProperty("--s",l.scale.toFixed(4)),O.style.setProperty("--r",`${U.toFixed(2)}deg`),O.style.setProperty("--o",l.opacity.toFixed(3)),O.style.setProperty("--ar",String(l.photo.aspect||.75));let R=c?9e3:Math.round(3e3-g.z*1e3);l.z!==R&&(l.z=R,O.style.zIndex=String(R));let G=l.opacity<.14&&!c;O.style.pointerEvents=G?"none":"auto",G&&O.classList.contains("ready")?O.classList.remove("ready"):!G&&!O.classList.contains("ready")&&l.img.classList.contains("loaded")&&O.classList.add("ready")}}async appendPhotos(t){let i=Array.from(t||[]).filter(s=>s.type.startsWith("image/"));if(!i.length)return 0;let n=0;for(let s of i){if(this.cards.length>=30)break;let r=URL.createObjectURL(s),a=await this._probeImage(r).catch(()=>null);if(!a)continue;let o={id:`u${Date.now()}-${n}`,file:s.name,src:r,w:a.w,h:a.h,aspect:a.w/a.h,place:"自选",caption:s.name.replace(/\.[^.]+$/,"").slice(0,18),dominant:[120,120,130],blur:"",featured:!1,order:100+this.cards.length},l=this.cards.length,c=this._makeCard(o,l);c.featured=!1,this.container.appendChild(c.el),this.cards.push(c),c.img.onload=()=>{c.el.classList.add("ready"),requestAnimationFrame(()=>c.img.classList.add("loaded"))},c.img.src=r,n++}return n}_probeImage(t){return new Promise((i,n)=>{let s=new Image;s.onload=()=>i({w:s.naturalWidth,h:s.naturalHeight}),s.onerror=n,s.src=t})}};var Pa=typeof self<"u"?self:{};function Re(e,t){e=e.split(".");for(var i,n=Pa;e.length&&(i=e.shift());)e.length||t===void 0?n=n[i]&&n[i]!==Object.prototype[i]?n[i]:n[i]={}:n[i]=t}function br(){throw Error("Invalid UTF8")}function xg(e,t){return t=String.fromCharCode.apply(null,t),e==null?t:e+t}var hf,yg,Sf,Zh,Uh=void 0,Nb=typeof TextDecoder<"u",Db=typeof TextEncoder<"u";function W_(e){if(Db)e=(yg||(yg=new TextEncoder)).encode(e);else{let i=0,n=new Uint8Array(3*e.length);for(let s=0;s<e.length;s++){var t=e.charCodeAt(s);if(t<128)n[i++]=t;else{if(t<2048)n[i++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&s<e.length){let r=e.charCodeAt(++s);if(r>=56320&&r<=57343){t=1024*(t-55296)+r-56320+65536,n[i++]=t>>18|240,n[i++]=t>>12&63|128,n[i++]=t>>6&63|128,n[i++]=63&t|128;continue}s--}t=65533}n[i++]=t>>12|224,n[i++]=t>>6&63|128}n[i++]=63&t|128}}e=i===n.length?n:n.subarray(0,i)}return e}t:{for(uf=["CLOSURE_FLAGS"],Oh=Pa,Bh=0;Bh<uf.length;Bh++)if((Oh=Oh[uf[Bh]])==null){Zh=null;break t}Zh=Oh}var uf,Oh,Bh,Sg=Zh&&Zh[748402147];function Mg(){var e=Pa.navigator;return e&&(e=e.userAgent)?e:""}function gu(e){return gu[" "](e),e}Sf=Sg==null||Sg,gu[" "]=function(){};var X_={},sl=null;function Fb(e){var t=e.length,i=3*t/4;i%3?i=Math.floor(i):"=.".indexOf(e[t-1])!=-1&&(i="=.".indexOf(e[t-2])!=-1?i-2:i-1);var n=new Uint8Array(i),s=0;return(function(r,a){function o(c){for(;l<r.length;){let h=r.charAt(l++),d=sl[h];if(d!=null)return d;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return c}q_();for(var l=0;;){let c=o(-1),h=o(0),d=o(64),u=o(64);if(u===64&&c===-1)break;a(c<<2|h>>4),d!=64&&(a(h<<4&240|d>>2),u!=64&&a(d<<6&192|u))}})(e,function(r){n[s++]=r}),s!==i?n.subarray(0,s):n}function q_(){if(!sl){sl={};var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"];for(let i=0;i<5;i++){let n=e.concat(t[i].split(""));X_[i]=n;for(let s=0;s<n.length;s++){let r=n[s];sl[r]===void 0&&(sl[r]=s)}}}}var Ub=typeof Uint8Array<"u",$_=!(Mg().indexOf("Trident")!=-1||Mg().indexOf("MSIE")!=-1)&&typeof btoa=="function",bg=/[-_.]/g,Ob={"-":"+",_:"/",".":"="};function Bb(e){return Ob[e]||""}function Y_(e){if(!$_)return Fb(e);e=bg.test(e)?e.replace(bg,Bb):e,e=atob(e);var t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}function jf(e){return Ub&&e!=null&&e instanceof Uint8Array}var Ia={};function Lr(){return Tg||(Tg=new $n(null,Ia))}function Qf(e){K_(Ia);var t=e.h;return(t=t==null||jf(t)?t:typeof t=="string"?Y_(t):null)==null?t:e.h=t}var Tg,$n=class{i(){return new Uint8Array(Qf(this)||0)}constructor(e,t){if(K_(t),this.h=e,e!=null&&e.length===0)throw Error("ByteString should be constructed with non-empty values")}};function K_(e){if(e!==Ia)throw Error("illegal external caller")}function Z_(e,t){e.__closure__error__context__984382||(e.__closure__error__context__984382={}),e.__closure__error__context__984382.severity=t}var Eg=void 0;function ll(e){return Z_(e=Error(e),"warning"),e}function La(e,t){if(e!=null){var i=Eg??(Eg={}),n=i[e]||0;n>=t||(i[e]=n+1,Z_(e=Error(),"incident"),(function(s){Pa.setTimeout(()=>{throw s},0)})(e))}}function Dr(){return typeof BigInt=="function"}var Va=typeof Symbol=="function"&&typeof Symbol()=="symbol";function Rs(e,t,i=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?i&&Symbol.for&&e?Symbol.for(e):e!=null?Symbol(e):Symbol():t}var er,kb=Rs("jas",void 0,!0),wg=Rs(void 0,"0di"),tl=Rs(void 0,"1oa"),Yn=Rs(void 0,Symbol()),zb=Rs(void 0,"0ub"),Gb=Rs(void 0,"0ubs"),Mf=Rs(void 0,"0ubsb"),Vb=Rs(void 0,"0actk"),J_=Rs("m_m","jb",!0),j_={Va:{value:0,configurable:!0,writable:!0,enumerable:!1}},Q_=Object.defineProperties,At=Va?kb:"Va",Ag=[];function pl(e,t){Va||At in e||Q_(e,j_),e[At]|=t}function Ze(e,t){Va||At in e||Q_(e,j_),e[At]=t}function Ha(e){return pl(e,34),e}function cl(e){return pl(e,8192),e}function tp(e,t){return 2&t&&(e|=2),1|e}Ze(Ag,7),er=Object.freeze(Ag);var t1={};function Na(e){return e!=null&&e[J_]===t1}function Ni(e,t){return t===void 0?e.i!==Nr&&!!(2&e.B[At]):!!(2&t)&&e.i!==Nr}var Nr={};function _u(e,t){if(e!=null){if(typeof e=="string")e=e?new $n(e,Ia):Lr();else if(!(e instanceof $n))if(jf(e))e=e.length?new $n(new Uint8Array(e),Ia):Lr();else{if(!t)throw Error();e=void 0}}return e}var Jh=class{constructor(t,i,n){this.h=t,this.i=i,this.l=n}next(){var t=this.h.next();return t.done||(t.value=this.i.call(this.l,t.value)),t}[Symbol.iterator](){return this}};function e1(e,t,i){var n,s=128&t?0:-1,r=e.length;(n=!!r)&&(n=(n=e[r-1])!=null&&typeof n=="object"&&n.constructor===Object);var a=r+(n?-1:0);for(t=128&t?1:0;t<a;t++)i(t-s,e[t]);if(n){e=e[r-1];for(let o in e)!isNaN(o)&&i(+o,e[o])}}Object.freeze({});var i1={};function Wa(e){return 128&e?i1:void 0}function vu(e){return e.hb=!0,e}var Hb=vu(e=>typeof e=="number"),Rg=vu(e=>typeof e=="string"),Wb=vu(e=>typeof e=="boolean"),xu=typeof Pa.BigInt=="function"&&typeof Pa.BigInt(0)=="bigint";function ni(e){var t=e;if(Rg(t)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(t))throw Error(String(t))}else if(Hb(t)&&!Number.isSafeInteger(t))throw Error(String(t));return xu?BigInt(e):e=Wb(e)?e?"1":"0":Rg(e)?e.trim()||"0":String(e)}var bf=vu(e=>xu?e>=qb&&e<=Yb:e[0]==="-"?Cg(e,Xb):Cg(e,$b)),Xb=Number.MIN_SAFE_INTEGER.toString(),qb=xu?BigInt(Number.MIN_SAFE_INTEGER):void 0,$b=Number.MAX_SAFE_INTEGER.toString(),Yb=xu?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Cg(e,t){if(e.length>t.length)return!1;if(e.length<t.length||e===t)return!0;for(let i=0;i<e.length;i++){let n=e[i],s=t[i];if(n>s)return!1;if(n<s)return!0}}var jh,Kb=typeof Uint8Array.prototype.slice=="function",oe=0,_e=0;function Tf(e){var t=e>>>0;oe=t,_e=(e-t)/4294967296>>>0}function Fr(e){if(e<0){Tf(-e);let[t,i]=np(oe,_e);oe=t>>>0,_e=i>>>0}else Tf(e)}function ep(e){var t=jh||(jh=new DataView(new ArrayBuffer(8)));t.setFloat32(0,+e,!0),_e=0,oe=t.getUint32(0,!0)}function n1(e,t){var i=4294967296*t+(e>>>0);return Number.isSafeInteger(i)?i:Da(e,t)}function Zb(e,t){return ni(Dr()?BigInt.asUintN(64,(BigInt(t>>>0)<<BigInt(32))+BigInt(e>>>0)):Da(e,t))}function s1(e,t){return Dr()?ni(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(t))<<BigInt(32))+BigInt.asUintN(32,BigInt(e)))):ni(ip(e,t))}function Da(e,t){if(e>>>=0,(t>>>=0)<=2097151)var i=""+(4294967296*t+e);else Dr()?i=""+(BigInt(t)<<BigInt(32)|BigInt(e)):(e=(16777215&e)+6777216*(i=16777215&(e>>>24|t<<8))+6710656*(t=t>>16&65535),i+=8147497*t,t*=2,e>=1e7&&(i+=e/1e7>>>0,e%=1e7),i>=1e7&&(t+=i/1e7>>>0,i%=1e7),i=t+Pg(i)+Pg(e));return i}function Pg(e){return e=String(e),"0000000".slice(e.length)+e}function ip(e,t){if(2147483648&t)if(Dr())e=""+(BigInt(0|t)<<BigInt(32)|BigInt(e>>>0));else{let[i,n]=np(e,t);e="-"+Da(i,n)}else e=Da(e,t);return e}function ml(e){if(e.length<16)Fr(Number(e));else if(Dr())e=BigInt(e),oe=Number(e&BigInt(4294967295))>>>0,_e=Number(e>>BigInt(32)&BigInt(4294967295));else{let t=+(e[0]==="-");_e=oe=0;let i=e.length;for(let n=t,s=(i-t)%6+t;s<=i;n=s,s+=6){let r=Number(e.slice(n,s));_e*=1e6,(oe=1e6*oe+r)>=4294967296&&(_e+=Math.trunc(oe/4294967296),_e>>>=0,oe>>>=0)}if(t){let[n,s]=np(oe,_e);oe=n,_e=s}}}function np(e,t){return t=~t,e?e=1+~e:t+=1,[e,t]}function wn(e){return Array.prototype.slice.call(e)}var Rr=typeof BigInt=="function"?BigInt.asIntN:void 0,Ef=typeof BigInt=="function"?BigInt.asUintN:void 0,An=Number.isSafeInteger,gl=Number.isFinite,Qs=Math.trunc,Jb=ni(0);function r1(e){if(typeof e!="number")throw Error(`Value of float/double field must be a number, found ${typeof e}: ${e}`);return e}function Zi(e){return e==null||typeof e=="number"?e:e==="NaN"||e==="Infinity"||e==="-Infinity"?Number(e):void 0}function Qh(e){if(typeof e!="boolean"){var t=typeof e;throw Error(`Expected boolean but got ${t!="object"?t:e?Array.isArray(e)?"array":t:"null"}: ${e}`)}return e}var jb=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Xa(e){switch(typeof e){case"bigint":return!0;case"number":return gl(e);case"string":return jb.test(e);default:return!1}}function Ts(e){if(e!=null){if(!gl(e))throw ll("enum");e|=0}return e}function Ur(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return gl(e)?0|e:void 0}function a1(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return gl(e)?e>>>0:void 0}function o1(e,t){if(t??(t=1024),!Xa(e))throw ll("int64");var i=typeof e;switch(t){case 512:switch(i){case"string":return tu(e);case"bigint":return String(Rr(64,e));default:return wf(e)}case 1024:switch(i){case"string":return h1(e);case"bigint":return ni(Rr(64,e));default:return ni(An(e)?e:wf(e))}case 0:switch(i){case"string":return tu(e);case"bigint":return ni(Rr(64,e));default:return sp(e)}default:return(function(n,s=`unexpected value ${n}!`){throw Error(s)})(t,"Unknown format requested type for int64")}}function l1(e){var t=e.length;return(e[0]==="-"?t<20||t===20&&e<="-9223372036854775808":t<19||t===19&&e<="9223372036854775807")?e:(ml(e),ip(oe,_e))}function c1(e){if(e[0]==="-")var t=!1;else t=(t=e.length)<20||t===20&&e<="18446744073709551615";return t?e:(ml(e),Da(oe,_e))}function sp(e){if(e=Qs(e),!An(e)){Fr(e);var t=oe,i=_e;(e=2147483648&i)&&(i=~i>>>0,(t=1+~t>>>0)==0&&(i=i+1>>>0)),e=typeof(t=n1(t,i))=="number"?e?-t:t:e?"-"+t:t}return e}function wf(e){return e=Qs(e),An(e)?e=String(e):(Fr(e),e=ip(oe,_e)),e}function tu(e){var t=Qs(Number(e));return An(t)?String(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),l1(e))}function h1(e){var t=Qs(Number(e));return An(t)?ni(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),Dr()?ni(Rr(64,BigInt(e))):ni(l1(e)))}function eu(e){var t=typeof e;return e==null?e:t==="bigint"?ni(Rr(64,e)):Xa(e)?t==="string"?h1(e):ni(An(e)?e:wf(e)):void 0}function rp(e){if(e==null)return e;var t=typeof e;if(t==="bigint")return String(Rr(64,e));if(Xa(e)){if(t==="string")return tu(e);if(t==="number")return sp(e)}}function Qb(e){if(e==null)return e;var t=typeof e;if(t==="bigint")return String(Ef(64,e));if(Xa(e)){if(t==="string")return t=Qs(Number(e)),An(t)&&t>=0?e=String(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),e=c1(e)),e;if(t==="number")return(function(i){return(i=Qs(i))>=0&&An(i)||(Fr(i),i=n1(oe,_e)),i})(e)}}function u1(e){if(e==null||typeof e=="string"||e instanceof $n)return e}function d1(e){if(typeof e!="string")throw Error();return e}function Ms(e){if(e!=null&&typeof e!="string")throw Error();return e}function vi(e){return e==null||typeof e=="string"?e:void 0}function ap(e,t,i,n){return Na(e)?e:Array.isArray(e)?((n=(i=0|e[At])|32&n|2&n)!==i&&Ze(e,n),new t(e)):(i?2&n?((e=t[wg])||(Ha((e=new t).B),e=t[wg]=e),t=e):t=new t:t=void 0,t)}function t3(e,t,i){return t?o1(e,1024):eu(e)??(i?Jb:void 0)}function e3(e){return e}var i3={},n3=(function(){try{return gu(new class extends Map{constructor(){super()}}),!1}catch{return!0}})(),al=class{constructor(){this.h=new Map}get(t){return this.h.get(t)}set(t,i){return this.h.set(t,i),this.size=this.h.size,this}delete(t){return t=this.h.delete(t),this.size=this.h.size,t}clear(){this.h.clear(),this.size=this.h.size}has(t){return this.h.has(t)}entries(){return this.h.entries()}keys(){return this.h.keys()}values(){return this.h.values()}forEach(t,i){return this.h.forEach(t,i)}[Symbol.iterator](){return this.entries()}},s3=n3?(Object.setPrototypeOf(al.prototype,Map.prototype),Object.defineProperties(al.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),al):class extends Map{constructor(){super()}};function Ig(e){return e}function df(e){if(2&e.N)throw Error("Cannot mutate an immutable Map")}var Lg,ws=class extends s3{constructor(e,t,i=Ig,n=Ig){super(),this.N=0|e[At],this.O=t,this.ca=i,this.na=this.O?r3:n;for(let s=0;s<e.length;s++){let r=e[s],a=i(r[0],!1,!0),o=r[1];t?o===void 0&&(o=null):o=n(r[1],!1,!0,void 0,void 0,this.N),super.set(a,o)}}fa(e){return cl(Array.from(super.entries(),e))}clear(){df(this),super.clear()}delete(e){return df(this),super.delete(this.ca(e,!0,!1))}entries(){if(this.O){var e=super.keys();e=new Jh(e,a3,this)}else e=super.entries();return e}values(){if(this.O){var e=super.keys();e=new Jh(e,ws.prototype.get,this)}else e=super.values();return e}forEach(e,t){this.O?super.forEach((i,n,s)=>{e.call(t,s.get(n),n,s)}):super.forEach(e,t)}set(e,t){return df(this),(e=this.ca(e,!0,!1))==null?this:t==null?(super.delete(e),this):super.set(e,this.na(t,!0,!0,this.O,!1,this.N))}fb(e){var t=this.ca(e[0],!1,!0);e=e[1],e=this.O?e===void 0?null:e:this.na(e,!1,!0,void 0,!1,this.N),super.set(t,e)}has(e){return super.has(this.ca(e,!1,!1))}get(e){e=this.ca(e,!1,!1);var t=super.get(e);if(t!==void 0){var i=this.O;return i?((i=this.na(t,!1,!0,i,this.Fa,this.N))!==t&&super.set(e,i),i):t}}[Symbol.iterator](){return this.entries()}};function r3(e,t,i,n,s,r){return e=ap(e,n,i,r),s&&(e=lp(e)),e}function a3(e){return[e,this.get(e)]}function Ng(){return Lg||(Lg=new ws(Ha([]),void 0,void 0,void 0,i3))}function yu(e){return Yn?e[Yn]:void 0}function iu(e,t){for(let i in e)!isNaN(i)&&t(e,+i,e[i])}ws.prototype.toJSON=void 0;var o3,Dg,Fg,Af=class{};function l3(e,t){t<100||La(Gb,1)}function Su(e,t,i,n){var s=n!==void 0;n=!!n;var r,a=Yn;!s&&Va&&a&&(r=e[a])&&iu(r,l3),a=[];var o=e.length;r=4294967295;var l=!1,c=!!(64&t),h=c?128&t?0:-1:void 0;if(!(1&t)){var d=o&&e[o-1];d!=null&&typeof d=="object"&&d.constructor===Object?r=--o:d=void 0,!c||128&t||s||(l=!0,r=(o3??e3)(r-h,h,e,d,void 0)+h)}t=void 0;for(var u=0;u<o;u++){let f=e[u];if(f!=null&&(f=i(f,n))!=null)if(c&&u>=r){let g=u-h;(t??(t={}))[g]=f}else a[u]=f}if(d)for(let f in d){if((o=d[f])==null||(o=i(o,n))==null)continue;let g;u=+f,c&&!Number.isNaN(u)&&(g=u+h)<r?a[g]=o:(t??(t={}))[f]=o}return t&&(l?a.push(t):a[r]=t),s&&(i=Yn)&&(e=yu(e))&&e instanceof Af&&(a[i]=(function(f){var g=new Af;return iu(f,(y,p,m)=>{g[p]=wn(m)}),g.h=f.h,g})(e)),a}function c3(e){return e[0]=hl(e[0]),e[1]=hl(e[1]),e}function hl(e){switch(typeof e){case"number":return Number.isFinite(e)?e:""+e;case"bigint":return bf(e)?Number(e):""+e;case"boolean":return e?1:0;case"object":if(Array.isArray(e)){var t=0|e[At];return e.length===0&&1&t?void 0:Su(e,t,hl)}if(Na(e))return f1(e);if(e instanceof $n){if((t=e.h)==null)e="";else if(typeof t=="string")e=t;else{if($_){for(var i="",n=0,s=t.length-10240;n<s;)i+=String.fromCharCode.apply(null,t.subarray(n,n+=10240));i+=String.fromCharCode.apply(null,n?t.subarray(n):t),t=btoa(i)}else{i===void 0&&(i=0),q_(),i=X_[i],n=Array(Math.floor(t.length/3)),s=i[64]||"";let c=0,h=0;for(;c<t.length-2;c+=3){var r=t[c],a=t[c+1],o=t[c+2],l=i[r>>2];r=i[(3&r)<<4|a>>4],a=i[(15&a)<<2|o>>6],o=i[63&o],n[h++]=l+r+a+o}switch(l=0,o=s,t.length-c){case 2:o=i[(15&(l=t[c+1]))<<2]||s;case 1:t=t[c],n[h]=i[t>>2]+i[(3&t)<<4|l>>4]+o+s}t=n.join("")}e=e.h=t}return e}return e instanceof ws?e=e.size!==0?e.fa(c3):void 0:void 0}return e}function f1(e){return Su(e=e.B,0|e[At],hl)}function Cr(e,t){return p1(e,t[0],t[1])}function p1(e,t,i,n=0){if(e==null){var s=32;i?(e=[i],s|=128):e=[],t&&(s=-16760833&s|(1023&t)<<14)}else{if(!Array.isArray(e))throw Error("narr");if(s=0|e[At],Sf&&1&s)throw Error("rfarr");if(2048&s&&!(2&s)&&(function(){if(Sf)throw Error("carr");La(Vb,5)})(),256&s)throw Error("farr");if(64&s)return(s|n)!==s&&Ze(e,s|n),e;if(i&&(s|=128,i!==e[0]))throw Error("mid");t:{s|=64;var r=(i=e).length;if(r){var a=r-1;let l=i[a];if(l!=null&&typeof l=="object"&&l.constructor===Object){if((a-=t=128&s?0:-1)>=1024)throw Error("pvtlmt");for(var o in l)(r=+o)<a&&(i[r+t]=l[o],delete l[o]);s=-16760833&s|(1023&a)<<14;break t}}if(t){if((o=Math.max(t,r-(128&s?0:-1)))>1024)throw Error("spvt");s=-16760833&s|(1023&o)<<14}}}return Ze(e,64|s|n),e}function h3(e,t){if(typeof e!="object")return e;if(Array.isArray(e)){var i=0|e[At];return e.length===0&&1&i?void 0:Ug(e,i,t)}if(Na(e))return Og(e);if(e instanceof ws){if(2&(t=e.N))return e;if(!e.size)return;if(i=Ha(e.fa()),e.O)for(e=0;e<i.length;e++){let n=i[e],s=n[1];s=s==null||typeof s!="object"?void 0:Na(s)?Og(s):Array.isArray(s)?Ug(s,0|s[At],!!(32&t)):void 0,n[1]=s}return i}return e instanceof $n?e:void 0}function Ug(e,t,i){return 2&t||(!i||4096&t||16&t?e=qa(e,t,!1,i&&!(16&t)):(pl(e,34),4&t&&Object.freeze(e))),e}function op(e,t,i){return e=new e.constructor(t),i&&(e.i=Nr),e.o=Nr,e}function Og(e){var t=e.B,i=0|t[At];return Ni(e,i)?e:cp(e,t,i)?op(e,t):qa(t,i)}function qa(e,t,i,n){return n??(n=!!(34&t)),e=Su(e,t,h3,n),n=32,i&&(n|=2),Ze(e,t=16769217&t|n),e}function lp(e){var t=e.B,i=0|t[At];return Ni(e,i)?cp(e,t,i)?op(e,t,!0):new e.constructor(qa(t,i,!1)):e}function $a(e){if(e.i!==Nr)return!1;var t=e.B;return pl(t=qa(t,0|t[At]),2048),e.B=t,e.i=void 0,e.o=void 0,!0}function Or(e){if(!$a(e)&&Ni(e,0|e.B[At]))throw Error()}function ir(e,t){t===void 0&&(t=0|e[At]),32&t&&!(4096&t)&&Ze(e,4096|t)}function cp(e,t,i){return!!(2&i)||!(!(32&i)||4096&i)&&(Ze(t,2|i),e.i=Nr,!0)}var m1=ni(0),Zs={};function Ne(e,t,i,n){if((t=Kn(e.B,t,void 0,n))!==null||i&&e.o!==Nr)return t}function Kn(e,t,i,n){if(t===-1)return null;var s=t+(i?0:-1),r=e.length-1;if(!(r<1+(i?0:-1))){if(s>=r){var a=e[r];if(a!=null&&typeof a=="object"&&a.constructor===Object){i=a[t];var o=!0}else{if(s!==r)return;i=a}}else i=e[s];if(n&&i!=null){if((n=n(i))==null)return n;if(!Object.is(n,i))return o?a[t]=n:e[s]=n,n}return i}}function $t(e,t,i,n){Or(e);var s=e.B;return Ke(s,0|s[At],t,i,n),e}function Ke(e,t,i,n,s){var r=i+(s?0:-1),a=e.length-1;if(a>=1+(s?0:-1)&&r>=a){let o=e[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[i]=n,t}return r<=a?(e[r]=n,t):(n!==void 0&&(i>=(a=(t??(t=0|e[At]))>>14&1023||536870912)?n!=null&&(e[a+(s?0:-1)]={[i]:n}):e[r]=n),t)}function g1(e,t){return Na(e=Kn(e.B,t))||Array.isArray(e)}function _1(e,t,i){return g1(e,t=S1(e,i)===t?t:-1)}function wr(e,t,i,n,s){var r=e.B,a=0|r[At];n=n&&n!==4?n!==1&&(e?Ni(e,a):2&a)?1:n:4,s=!!s||n===3,n===2&&$a(e)&&(a=0|(r=e.B)[At]);var o=(e=hp(r,t))===er?7:0|e[At],l=tp(o,a),c=!(4&l);if(c){let h=0,d=0;for(;h<e.length;h++){let u=i(e[h]);u!=null&&(e[d++]=u)}d<h&&(e.length=d),i=-513&l|4,l=i&=-1025,l&=-4097}return l!==o&&(Ze(e,l),2&l&&Object.freeze(e)),v1(e,l,r,a,t,n,c,s)}function v1(e,t,i,n,s,r,a,o){var l=t,c=Fa(t);return c&&r===2&&(e=wn(e),l=0,t=Pr(t,n),n=Ke(i,n,s,e),c=!1),c||(r===1||r===4&&(2&t||!(16&t)&&32&n)?((t|=!e.length||a&&!(4096&t)||32&n&&!(4096&t||16&t)?2:256)!==l&&Ze(e,t),Object.freeze(e)):(o||(t|=16),t!==l&&Ze(e,t))),2&t||!(4096&t||16&t)||ir(i,n),e}function hp(e,t,i){return e=Kn(e,t,i),Array.isArray(e)?e:er}function Fa(e){return!!(2&e)&&!!(4&e)||!!(256&e)}function x1(e){return _u(e,!0)}function y1(e){e=wn(e);for(let t=0;t<e.length;t++){let i=e[t]=wn(e[t]);Array.isArray(i[1])&&(i[1]=Ha(i[1]))}return cl(e)}function _l(e,t,i,n){Or(e),Ke(e=e.B,0|e[At],t,(n==="0"?Number(i)===0:i===n)?void 0:i)}function nr(e,t,i){if(2&t)throw Error();var n=Wa(t),s=hp(e,i,n),r=s===er?7:0|s[At],a=tp(r,t);return(2&a||Fa(a)||16&a)&&(a===r||Fa(a)||Ze(s,a),s=wn(s),r=0,a=Pr(a,t),Ke(e,t,i,s,n)),(a&=-13)!==r&&Ze(s,a),s}function S1(e,t){return dp(up(e=e.B),e,void 0,t)}function up(e){if(Va)return e[tl]??(e[tl]=new Map);if(tl in e)return e[tl];var t=new Map;return Object.defineProperty(e,tl,{value:t}),t}function M1(e,t,i,n,s){var r=up(e),a=dp(r,e,t,i,s);return a!==n&&(a&&(t=Ke(e,t,a,void 0,s)),r.set(i,n)),t}function dp(e,t,i,n,s){var r=e.get(n);if(r!=null)return r;r=0;for(let a=0;a<n.length;a++){let o=n[a];Kn(t,o,s)!=null&&(r!==0&&(i=Ke(t,i,r,void 0,s)),r=o)}return e.set(n,r),r}function fp(e,t,i){var n=0|e[At],s=Wa(n),r=Kn(e,i,s);if(Na(r)){if(!Ni(r))return $a(r),r.B;var a=r.B}else Array.isArray(r)&&(a=r,2&n&&Ha(a));if(a){let o=0|a[At];2&o&&(a=qa(a,o))}return(a=Cr(a,t))!==r&&Ke(e,n,i,a,s),a}function u3(e,t,i,n,s){var r=!1;if(n=(function(a,o,l,c){return Kn(a,o,l,c)})(e,n,s,a=>{var o=ap(a,i,!1,t);return r=o!==a&&o!=null,o}),n!=null)return r&&!Ni(n)&&ir(e,t),n}function ue(e,t,i,n){var s=e.B,r=0|s[At];if((t=u3(s,r,t,i,n))==null)return t;if(!Ni(e,r=0|s[At])){let a=lp(t);a!==t&&($a(e)&&(r=0|(s=e.B)[At]),ir(s,r=Ke(s,r,i,t=a,n)))}return t}function b1(e,t,i,n,s,r,a,o){r=r&&r!==4?r!==1&&(e?Ni(e,i):2&i)?1:r:4,a=!!a||r===3;var l=!!o&&!(e?Ni(e,i):2&i);(r===2||l)&&e&&$a(e)&&(i=0|(t=e.B)[At]);var c=(e=hp(t,s))===er?7:0|e[At],h=tp(c,i);if(o=!(4&h)){var d=e,u=i;let f=!!(2&h);f&&(u|=2);let g=!f,y=!0,p=0,m=0;for(;p<d.length;p++){let b=ap(d[p],n,!1,u);if(b instanceof n){if(!f){let A=Ni(b);g&&(g=!A),y&&(y=A)}d[m++]=b}}m<p&&(d.length=m),h|=4,h=y?-4097&h:4096|h,h=g?8|h:-9&h}if(h!==c&&(Ze(e,h),2&h&&Object.freeze(e)),l&&!(8&h||!e.length&&(r===1||r===4&&(2&h||!(16&h)&&32&i)))){for(Fa(h)&&(e=wn(e),h=Pr(h,i),i=Ke(t,i,s,e)),n=e,l=h,c=0;c<n.length;c++)(d=n[c])!==(h=lp(d))&&(n[c]=h);l|=8,Ze(e,h=l=n.length?4096|l:-4097&l)}return v1(e,h,t,i,s,r,o,a)}function Br(e,t,i){var n=e.B;return b1(e,n,0|n[At],t,i,void 0,!1,!0)}function T1(e){return e==null&&(e=void 0),e}function Lt(e,t,i,n,s){return $t(e,i,n=T1(n),s),n&&!Ni(n)&&ir(e.B),e}function En(e,t,i,n){t:{var s=n=T1(n);Or(e);let r=e.B,a=0|r[At];if(s==null){let o=up(r);if(dp(o,r,a,i)!==t)break t;o.set(i,0)}else a=M1(r,a,i,t);Ke(r,a,t,s)}return n&&!Ni(n)&&ir(e.B),e}function Rf(e,t,i){Or(e);var n=e.B,s=0|n[At];if(i==null)Ke(n,s,t);else{var r=i===er?7:0|i[At],a=r,o=Fa(r),l=o||Object.isFrozen(i),c=!0,h=!0;for(let u=0;u<i.length;u++){var d=i[u];o||(d=Ni(d),c&&(c=!d),h&&(h=d))}o||(r=c?13:5,r=h?-4097&r:4096|r),l&&r===a||(i=wn(i),a=0,r=Pr(r,s)),r!==a&&Ze(i,r),s=Ke(n,s,t,i),2&r||!(4096&r||16&r)||ir(n,s)}return e}function Pr(e,t){return-273&(2&t?2|e:-3&e)}function ul(e,t,i,n){Or(e);var s=e.B;e=b1(e,s,0|s[At],i,t,2,!0),n=n??new i,e.push(n),t=i=e===er?7:0|e[At],(n=Ni(n))?(i&=-9,e.length===1&&(i&=-4097)):i|=4096,i!==t&&Ze(e,i),n||ir(s)}function fn(e,t,i){return Ur(Ne(e,t,i))}function Li(e,t){return Ne(e,t,void 0,Zi)??0}function Cf(e,t,i,n){return ue(e,t,i=S1(e,n)===i?i:-1,void 0)}function Pf(e,t){_l(e,3,t==null?t:Qh(t),!1)}function Zn(e,t,i){if(i!=null){if(typeof i!="number"||!gl(i))throw ll("int32");i|=0}$t(e,t,i)}function ff(e,t,i){return $t(e,t,i==null?i:o1(i))}function Vh(e,t,i){return $t(e,t,i==null?i:(function(n){if(!Xa(n))throw ll("uint64");switch(typeof n){case"string":var s=Qs(Number(n));return An(s)&&s>=0?n=ni(s):((s=n.indexOf("."))!==-1&&(n=n.substring(0,s)),n=Dr()?ni(Ef(64,BigInt(n))):ni(c1(n))),n;case"bigint":return ni(Ef(64,n));default:return n>=0&&An(n)||((n=Qs(n))>=0&&An(n)?n=String(n):(Fr(n),n=Da(oe,_e))),ni(n)}})(i))}function Nt(e,t,i){$t(e,t,i==null?i:r1(i))}function wa(e,t,i){_l(e,t,i==null?i:r1(i),0)}function Ji(e,t,i){_l(e,t,Ms(i),"")}function nu(e,t,i){{Or(e);let a=e.B,o=0|a[At];if(i==null)Ke(a,o,t);else{var n=e=i===er?7:0|i[At],s=Fa(e),r=s||Object.isFrozen(i);for(s||(e=0),r||(i=wn(i),n=0,e=Pr(e,o),r=!1),e|=5,e|=(4&e?512&e?512:1024&e?1024:0:void 0)??1024,s=0;s<i.length;s++){let l=i[s],c=d1(l);Object.is(l,c)||(r&&(i=wn(i),n=0,e=Pr(e,o),r=!1),i[s]=c)}e!==n&&(r&&(i=wn(i),e=Pr(e,o)),Ze(i,e)),Ke(a,o,t,i)}}}function Mu(e,t,i){Or(e),wr(e,t,vi,2,!0).push(d1(i))}var Ta=class{constructor(e,t,i){if(this.buffer=e,i&&!t)throw Error();this.h=t}};function bu(e,t){if(typeof e=="string")return new Ta(Y_(e),t);if(Array.isArray(e))return new Ta(new Uint8Array(e),t);if(e.constructor===Uint8Array)return new Ta(e,!1);if(e.constructor===ArrayBuffer)return e=new Uint8Array(e),new Ta(e,!1);if(e.constructor===$n)return t=Qf(e)||new Uint8Array(0),new Ta(t,!0,e);if(e instanceof Uint8Array)return e=e.constructor===Uint8Array?e:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Ta(e,!1);throw Error()}function pp(e,t){var i=0,n=0,s=0,r=e.i,a=e.h;do{var o=r[a++];i|=(127&o)<<s,s+=7}while(s<32&&128&o);if(s>32)for(n|=(127&o)>>4,s=3;s<32&&128&o;s+=7)n|=(127&(o=r[a++]))<<s;if(Ir(e,a),!(128&o))return t(i>>>0,n>>>0);throw Error()}function mp(e){for(var t=0,i=e.h,n=i+10,s=e.i;i<n;){let r=s[i++];if(t|=r,!(128&r))return Ir(e,i),!!(127&t)}throw Error()}function As(e){var t=e.i,i=e.h,n=t[i++],s=127&n;if(128&n&&(s|=(127&(n=t[i++]))<<7,128&n&&(s|=(127&(n=t[i++]))<<14,128&n&&(s|=(127&(n=t[i++]))<<21,128&n&&(s|=(n=t[i++])<<28,128&n&&128&t[i++]&&128&t[i++]&&128&t[i++]&&128&t[i++]&&128&t[i++])))))throw Error();return Ir(e,i),s}function Jn(e){return As(e)>>>0}function su(e){return pp(e,s1)}function If(e){var t=e.i,i=e.h,n=t[i],s=t[i+1],r=t[i+2];return t=t[i+3],Ir(e,e.h+4),(n|s<<8|r<<16|t<<24)>>>0}function ru(e){var t=If(e);e=2*(t>>31)+1;var i=t>>>23&255;return t&=8388607,i==255?t?NaN:e*(1/0):i==0?1401298464324817e-60*e*t:e*Math.pow(2,i-150)*(t+8388608)}function d3(e){return As(e)}function Ir(e,t){if(e.h=t,t>e.l)throw Error()}function E1(e,t){if(t<0)throw Error();var i=e.h;if((t=i+t)>e.l)throw Error();return e.h=t,i}function w1(e,t){if(t==0)return Lr();var i=E1(e,t);return e.ga&&e.u?i=e.i.subarray(i,i+t):(e=e.i,i=i===(t=i+t)?new Uint8Array(0):Kb?e.slice(i,t):new Uint8Array(e.subarray(i,t))),i.length==0?Lr():new $n(i,Ia)}var f3=class{constructor(e,t,i,n){this.i=null,this.u=!1,this.h=this.l=this.o=0,this.init(e,t,i,n)}init(e,t,i,{ga:n=!1,ma:s=!1}={}){this.ga=n,this.ma=s,e&&(e=bu(e,this.ma),this.i=e.buffer,this.u=e.h,this.o=t||0,this.l=i!==void 0?this.o+i:this.i.length,this.h=this.o)}clear(){this.i=null,this.u=!1,this.h=this.l=this.o=0,this.ga=!1}},Bg=[],Ua=0;function A1(e,t,i,n){if(au.length){let s=au.pop();return s.A(n),s.h.init(e,t,i,n),s}return new p3(e,t,i,n)}function R1(e){e.h.clear(),e.l=-1,e.i=-1,au.length<100&&au.push(e)}function C1(e){var t=e.h;if(t.h==t.l)return!1;e.o=e.h.h;var i=Jn(e.h);if(t=i>>>3,!((i&=7)>=0&&i<=5)||t<1)throw Error();return e.l=t,e.i=i,!0}function Hh(e){try{switch(e.i){case 0:e.i!=0?Hh(e):mp(e.h);break;case 1:var t=e.h;Ir(t,t.h+8);break;case 2:if(e.i!=2)Hh(e);else{var i=Jn(e.h),n=e.h;Ir(n,n.h+i)}break;case 5:var s=e.h;Ir(s,s.h+4);break;case 3:P1();let r=e.l;try{for(;;){if(!C1(e))throw Error();if(e.i==4){if(e.l!=r)throw Error();break}Hh(e)}}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{Ua>0&&Ua--}break;default:throw Error()}}catch(r){throw r instanceof RangeError?new SyntaxError:r}}function P1(){if(Ua>=100)throw new SyntaxError;Ua++}function vl(e,t,i){var n=e.h.l,s=Jn(e.h),r=(s=e.h.h+s)-n;if(r<=0&&(e.h.l=s,i(t,e,void 0,void 0,void 0),r=s-e.h.h),r)throw Error();return e.h.h=s,e.h.l=n,t}function gp(e){var t=Jn(e.h),i=E1(e=e.h,t);if(e=e.i,Nb){var n,s=e;(n=hf)||(n=hf=new TextDecoder("utf-8",{fatal:!0})),t=i+t,s=i===0&&t===s.length?s:s.subarray(i,t);try{var r=n.decode(s)}catch(o){if(Uh===void 0){try{n.decode(new Uint8Array([128]))}catch{}try{n.decode(new Uint8Array([97])),Uh=!0}catch{Uh=!1}}throw!Uh&&(hf=void 0),o}}else{t=(r=i)+t,i=[];let o,l=null;for(;r<t;){var a=e[r++];a<128?i.push(a):a<224?r>=t?br():(o=e[r++],a<194||(192&o)!=128?(r--,br()):i.push((31&a)<<6|63&o)):a<240?r>=t-1?br():(o=e[r++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(n=e[r++]))!=128?(r--,br()):i.push((15&a)<<12|(63&o)<<6|63&n)):a<=244?r>=t-2?br():(o=e[r++],(192&o)!=128||o-144+(a<<28)>>30||(192&(n=e[r++]))!=128||(192&(s=e[r++]))!=128?(r--,br()):(a=(7&a)<<18|(63&o)<<12|(63&n)<<6|63&s,a-=65536,i.push(55296+(a>>10&1023),56320+(1023&a)))):br(),i.length>=8192&&(l=xg(l,i),i.length=0)}r=xg(l,i)}return r}function _p(e){var t=Jn(e.h);return w1(e.h,t)}function xl(e,t,i){var n=Jn(e.h);for(n=e.h.h+n;e.h.h<n;)i.push(t(e.h))}var p3=class{constructor(e,t,i,n){if(Bg.length){let s=Bg.pop();s.init(e,t,i,n),e=s}else e=new f3(e,t,i,n);this.h=e,this.o=this.h.h,this.i=this.l=-1,this.A(n)}A({ra:e=!1}={}){this.ra=e}},au=[];function m3(e){return new ou(4294967295&e,Math.floor(e/4294967296))}function kg(e){return e?/^\d+$/.test(e)?(ml(e),new ou(oe,_e)):null:zg||(zg=new ou(0,0))}var zg,ou=class{constructor(e,t){this.i=e>>>0,this.h=t>>>0}};function g3(e){return new lu(4294967295&e,Math.floor(e/4294967296))}function I1(e){return e?/^-?\d+$/.test(e)?(ml(e),new lu(oe,_e)):null:Gg||(Gg=new lu(0,0))}var Gg,Vg,Hg,Wg,pf,Xg,el,kh,lu=class{constructor(e,t){this.i=e>>>0,this.h=t>>>0}};function L1(e,t,i){return typeof BigInt64Array<"u"?(el||(el=new BigInt64Array(1),kh=new Uint32Array(el.buffer),el[0]=BigInt(1),Xg=kh[0]===1),el[0]=e,new t(kh[e=Xg?0:1],kh[1-e])):(pf||(Vg=BigInt(Number.MIN_SAFE_INTEGER),Hg=BigInt(Number.MAX_SAFE_INTEGER),Wg=BigInt(4294967295),pf=BigInt(32)),e>=Vg&&e<=Hg?i(Number(e)):(e=BigInt.asUintN(64,e),new t(Number(e&Wg),Number(e>>pf))))}function Es(e,t,i){for(;i>0||t>127;)e.h.push(127&t|128),t=(t>>>7|i<<25)>>>0,i>>>=7;e.h.push(t)}function Ya(e,t){for(;t>127;)e.h.push(127&t|128),t>>>=7;e.h.push(t)}function yl(e,t){if(t>=0)Ya(e,t);else{for(let i=0;i<9;i++)e.h.push(127&t|128),t>>=7;e.h.push(1)}}function _3(e,t){ml(t),(function(i){var n=_e>>31;i(oe<<1^n,(_e<<1|oe>>>31)^n)})((i,n)=>{Es(e,i>>>0,n>>>0)})}function dl(e,t){e.h.push(t>>>0&255),e.h.push(t>>>8&255),e.h.push(t>>>16&255),e.h.push(t>>>24&255)}var v3=class{constructor(){this.h=[]}length(){return this.h.length}end(){var e=this.h;return this.h=[],e}};function Oa(e,t){t.length!==0&&(e.l.push(t),e.i+=t.length)}function Fi(e,t,i){Ya(e.h,8*t+i)}function vp(e,t){return Fi(e,t,2),t=e.h.end(),Oa(e,t),t.push(e.i),t}function xp(e,t){var i=t.pop();for(i=e.i+e.h.length()-i;i>127;)t.push(127&i|128),i>>>=7,e.i++;t.push(i),e.i++}function N1(e,t,i){if(i!=null)switch(Fi(e,t,0),typeof i){case"number":e=e.h,Fr(i),Es(e,oe,_e);break;case"bigint":i=L1(i,lu,g3),Es(e.h,i.i,i.h);break;default:i=I1(i),Es(e.h,i.i,i.h)}}function Sl(e,t,i){Fi(e,t,2),Ya(e.h,i.length),Oa(e,e.h.end()),Oa(e,i)}function cu(e,t,i,n){i!=null&&(t=vp(e,t),n(i,e),xp(e,t))}var x3=class{constructor(){this.l=[],this.i=0,this.h=new v3}};function D1(e){typeof e=="string"&&I1(e)}function pn(){var e=class{constructor(){throw Error()}};return Object.setPrototypeOf(e,e.prototype),e}var yp=pn(),F1=pn(),Sp=pn(),Tu=pn(),Mp=pn(),Eu=pn(),y3=pn(),S3=pn(),wu=pn(),M3=pn(),Au=pn(),bp=pn();function jn(e,t,i){var n=e.B;Yn&&Yn in n&&(n=n[Yn])&&delete n[t.h],t.i?t.u(e,t.i,t.h,i,t.l):t.u(e,t.h,i,t.l)}var gt=class{constructor(e,t){this.B=p1(e,t,void 0,2048)}toJSON(){return f1(this)}u(){var e=dT,t=this.B,i=e.h,n=Yn;return Va&&n&&t[n]?.[i]!=null&&La(zb,3),e.i?e.o(this,e.i,e.h,e.l):e.o(this,e.h,e.defaultValue,e.l)}clone(){var e=this.B,t=0|e[At];return cp(this,e,t)?op(this,e,!0):new this.constructor(qa(e,t,!1))}};gt.prototype[J_]=t1,gt.prototype.toString=function(){return this.B.toString()};var Ka=class{constructor(e,t,i){this.h=e,this.i=t,e=yp,this.l=!!e&&i===e||!1}};function Ru(e,t){return new Ka(e,t,yp)}function U1(e,t,i,n,s){cu(e,i,B1(t,n),s)}var Lf,Nf,b3=Ru(function(e,t,i,n,s){return e.i===2&&(vl(e,fp(t,n,i),s),!0)},U1),T3=Ru(function(e,t,i,n,s){return e.i===2&&(vl(e,fp(t,n,i),s),!0)},U1),Cu=Symbol(),Pu=Symbol(),Df=Symbol(),qg=Symbol(),$g=Symbol();function kr(e,t,i,n){var s=n[e];if(s)return s;(s={}).Ea=n,s.da=(function(d){switch(typeof d){case"boolean":return Dg||(Dg=[0,void 0,!0]);case"number":return d>0?void 0:d===0?Fg||(Fg=[0,void 0]):[-d,void 0];case"string":return[0,d];case"object":return d}})(n[0]);var r=n[1],a=1;r&&r.constructor===Object&&(s.ja=r,typeof(r=n[++a])=="function"&&r.length>0&&(s.wa=!0,Lf??(Lf=r),Nf??(Nf=n[a+1]),r=n[a+=2]));for(var o={};r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var l=0;l<r.length;l++)o[r[l]]=r;r=n[++a]}for(l=1;r!==void 0;){let d;typeof r=="number"&&(l+=r,r=n[++a]);var c=void 0;if(r instanceof Ka?d=r:(d=b3,a--),d?.l){r=n[++a],c=n;var h=a;typeof r=="function"&&(r=r(),c[h]=r),c=r}for(h=l+1,typeof(r=n[++a])=="number"&&r<0&&(h-=r,r=n[++a]);l<h;l++){let u=o[l];c?i(s,l,d,c,u):t(s,l,d,u)}}return n[e]=s}function O1(e){return Array.isArray(e)?e[0]instanceof Ka?e:[T3,e]:[e,void 0]}function B1(e,t){return e instanceof gt?e.B:Array.isArray(e)?Cr(e,t):void 0}function Tp(e,t,i,n){var s=i.h;e[t]=n?(r,a,o)=>s(r,a,o,n):s}function Ep(e,t,i,n,s){var r,a,o=i.h;e[t]=(l,c,h)=>o(l,c,h,a||(a=kr(Pu,Tp,Ep,n).da),r||(r=wp(n)),s)}function wp(e){var t=e[Df];if(t!=null)return t;var i=kr(Pu,Tp,Ep,e);return t=i.wa?(n,s)=>Lf(n,s,i):(n,s)=>{t:{P1();try{for(;C1(s)&&s.i!=4;){let u=s.l,f=i[u];if(f==null){let g=i.ja;if(g){let y=g[u];if(y){let p=w3(y);p!=null&&(f=i[u]=p)}}}if(f==null||!f(s,n,u)){var r=s;let g=r.o;if(Hh(r),r.ra)var a=void 0;else{let y=r.h.h-g;r.h.h=g,a=w1(r.h,y)}r=void 0;var o=n,l=u,c=a;c&&((r=o[Yn]??(o[Yn]=new Af))[l]??(r[l]=[])).push(c)}}let d=yu(n);d&&(d.h=i.Ea[$g]);var h=!0;break t}catch(d){throw d instanceof RangeError?new SyntaxError:d}finally{Ua>0&&Ua--}h=void 0}return h},e[Df]=t,e[$g]=E3.bind(e),t}function E3(e,t,i,n){var s=this[Pu],r=this[Df],a=Cr(void 0,s.da),o=yu(e);if(o){var l=!1,c=s.ja;if(c){if(s=(h,d,u)=>{if(u.length!==0)if(c[d])for(let f of u){h=A1(f);try{l=!0,r(a,h)}finally{R1(h)}}else n?.(e,d,u)},t==null)iu(o,s);else if(o!=null){let h=o[t];h&&s(o,t,h)}if(l){let h=0|e[At];if(2&h&&2048&h&&!i?.lb)throw Error();let d=Wa(h),u=(f,g)=>{if(Kn(e,f,d)!=null){if(i?.kb===1)return;throw Error()}g!=null&&(h=Ke(e,h,f,g,d)),delete o[f]};t==null?e1(a,0|a[At],(f,g)=>{u(f,g)}):u(t,Kn(a,t,d))}}}}function w3(e){var t=(e=O1(e))[0].h;if(e=e[1]){let i=wp(e),n=kr(Pu,Tp,Ep,e).da;return(s,r,a)=>t(s,r,a,n,i)}return t}function Iu(e,t,i){e[t]=i.i}function Lu(e,t,i,n){var s,r,a=i.i;e[t]=(o,l,c)=>a(o,l,c,r||(r=kr(Cu,Iu,Lu,n).da),s||(s=k1(n)))}function k1(e){var t=e[qg];if(!t){let i=kr(Cu,Iu,Lu,e);t=(n,s)=>z1(n,s,i),e[qg]=t}return t}function z1(e,t,i){e1(e,0|e[At],(n,s)=>{if(s!=null){var r=(function(a,o){var l=a[o];if(l)return l;if((l=a.ja)&&(l=l[o])){var c=(l=O1(l))[0].i;if(l=l[1]){let h=k1(l),d=kr(Cu,Iu,Lu,l).da;l=a.wa?Nf(d,h):(u,f,g)=>c(u,f,g,d,h)}else l=c;return a[o]=l}})(i,n);r?r(t,s,n):n<500||La(Mf,3)}}),(e=yu(e))&&iu(e,(n,s,r)=>{for(Oa(t,t.h.end()),n=0;n<r.length;n++)Oa(t,Qf(r[n])||new Uint8Array(0))})}var A3=ni(0);function Cs(e,t,i){if(Array.isArray(t)){var n=0|t[At];if(4&n)return t;for(var s=0,r=0;s<t.length;s++){let a=e(t[s]);a!=null&&(t[r++]=a)}return r<s&&(t.length=r),e=1|n,i&&(e=-1537&e|4),e!==n&&Ze(t,e),i&&2&e&&Object.freeze(t),t}}var G1=(e,t)=>{var i=new x3;z1(e.B,i,kr(Cu,Iu,Lu,t)),Oa(i,i.h.end()),e=new Uint8Array(i.i);var n=(t=i.l).length,s=0;for(let r=0;r<n;r++){let a=t[r];e.set(a,s),s+=a.length}return i.l=[e],e};function He(e,t,i){return new Ka(e,t,i)}function Ps(e,t,i){return new Ka(e,t,i)}function ri(e,t,i){Ke(e,0|e[At],t,i,Wa(0|e[At]))}var R3=Ru(function(e,t,i,n,s){if(e.i!==2)return!1;if(e=wn(e=vl(e,Cr([void 0,void 0],n),s)),s=Wa(n=0|t[At]),2&n)throw Error();var r=Kn(t,i,s);if(r instanceof ws)2&r.N?((r=r.fa()).push(e),Ke(t,n,i,r,s)):r.fb(e);else if(Array.isArray(r)){var a=0|r[At];8192&a||Ze(r,a|=8192),2&a&&Ke(t,n,i,r=y1(r),s),r.push(e)}else Ke(t,n,i,cl([e]),s);return!0},function(e,t,i,n,s){if(t instanceof ws)t.forEach((r,a)=>{cu(e,i,Cr([a,r],n),s)});else if(Array.isArray(t)){for(let r=0;r<t.length;r++){let a=t[r];Array.isArray(a)&&cu(e,i,Cr(a,n),s)}cl(t)}});function V1(e,t,i){(t=Zi(t))!=null&&(Fi(e,i,5),e=e.h,ep(t),dl(e,oe))}function Ap(e,t,i){(t=rp(t))!=null&&(D1(t),N1(e,i,t))}function H1(e,t,i){(t=Ur(t))!=null&&t!=null&&(Fi(e,i,0),yl(e.h,t))}function W1(e,t,i){(t=t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0)!=null&&(Fi(e,i,0),e.h.h.push(t?1:0))}function X1(e,t,i){(t=vi(t))!=null&&Sl(e,i,W_(t))}function q1(e,t,i,n,s){cu(e,i,B1(t,n),s)}function Rp(e,t,i){(t=u1(t))!=null&&Sl(e,i,bu(t,!0).buffer)}function $1(e,t,i){(t=a1(t))!=null&&t!=null&&(Fi(e,i,0),Ya(e.h,t))}function Y1(e,t,i){(t=Ur(t))!=null&&(t=parseInt(t,10),Fi(e,i,0),yl(e.h,t))}function K1(e,t,i){return(e.i===5||e.i===2)&&(t=nr(t,0|t[At],i),e.i==2?xl(e,ru,t):t.push(ru(e.h)),!0)}function Z1(e,t,i){return e.i===0&&(ri(t,i,su(e.h)),!0)}function J1(e,t,i){return(e.i===0||e.i===2)&&(t=nr(t,0|t[At],i),e.i==2?xl(e,As,t):t.push(As(e.h)),!0)}function j1(e,t,i){return e.i===2&&(ri(t,i,(e=_p(e))===Lr()?void 0:e),!0)}var Yg=He(function(e,t,i){if(e.i!==1)return!1;var n=e.h;e=If(n);var s=If(n);n=2*(s>>31)+1;var r=s>>>20&2047;return e=4294967296*(1048575&s)+e,ri(t,i,r==2047?e?NaN:n*(1/0):r==0?5e-324*n*e:n*Math.pow(2,r-1075)*(e+4503599627370496)),!0},function(e,t,i){(t=Zi(t))!=null&&(Fi(e,i,1),e=e.h,(i=jh||(jh=new DataView(new ArrayBuffer(8)))).setFloat64(0,+t,!0),oe=i.getUint32(0,!0),_e=i.getUint32(4,!0),dl(e,oe),dl(e,_e))},M3),ze=He(function(e,t,i){return e.i===5&&(ri(t,i,ru(e.h)),!0)},V1,wu),C3=Ps(K1,function(e,t,i){if((t=Cs(Zi,t,!0))!=null)for(let a=0;a<t.length;a++){var n=e,s=i,r=t[a];r!=null&&(Fi(n,s,5),n=n.h,ep(r),dl(n,oe))}},wu),Cp=Ps(K1,function(e,t,i){if((t=Cs(Zi,t,!0))!=null&&t.length){Fi(e,i,2),Ya(e.h,4*t.length);for(let n=0;n<t.length;n++)i=e.h,ep(t[n]),dl(i,oe)}},wu),Q1=He(function(e,t,i){return e.i===5&&(ri(t,i,(e=ru(e.h))===0?void 0:e),!0)},V1,wu),il=He(function(e,t,i){return Z1(e,t,i)},Ap,Eu),Ae=He(function(e,t,i){return Z1(e,t,i)},Ap,Eu),P3=Ps(function(e,t,i){return e.i!==0&&e.i!==2?e=!1:(t=nr(t,0|t[At],i),e.i==2?xl(e,su,t):t.push(su(e.h)),e=!0),e},function(e,t,i){if((t=Cs(rp,t,!1))!=null)for(let n=0;n<t.length;n++)N1(e,i,t[n])},Eu),Wh=He(function(e,t,i){return e.i!==0?t=!1:(ri(t,i,(e=su(e.h))===A3?void 0:e),t=!0),t},Ap,Eu),hu=He(function(e,t,i){return e.i!==0?e=!1:(ri(t,i,pp(e.h,Zb)),e=!0),e},function(e,t,i){if((t=Qb(t))!=null&&(typeof t=="string"&&kg(t),t!=null))switch(Fi(e,i,0),typeof t){case"number":e=e.h,Fr(t),Es(e,oe,_e);break;case"bigint":i=L1(t,ou,m3),Es(e.h,i.i,i.h);break;default:i=kg(t),Es(e.h,i.i,i.h)}},y3),Jt=He(function(e,t,i){return e.i===0&&(ri(t,i,As(e.h)),!0)},H1,Tu),Kg=Ps(J1,function(e,t,i){if((t=Cs(Ur,t,!0))!=null)for(let a=0;a<t.length;a++){var n=e,s=i,r=t[a];r!=null&&(Fi(n,s,0),yl(n.h,r))}},Tu),Za=Ps(J1,function(e,t,i){if((t=Cs(Ur,t,!0))!=null&&t.length){i=vp(e,i);for(let n=0;n<t.length;n++)yl(e.h,t[n]);xp(e,i)}},Tu),Ar=He(function(e,t,i){return e.i===0&&(ri(t,i,(e=As(e.h))===0?void 0:e),!0)},H1,Tu),Bt=He(function(e,t,i){return e.i===0&&(ri(t,i,mp(e.h)),!0)},W1,F1),js=He(function(e,t,i){return e.i===0&&(ri(t,i,(e=mp(e.h))===!1?void 0:e),!0)},W1,F1),ii=Ps(function(e,t,i){return e.i===2&&(e=gp(e),nr(t,0|t[At],i).push(e),!0)},function(e,t,i){if((t=Cs(vi,t,!0))!=null)for(let a=0;a<t.length;a++){var n=e,s=i,r=t[a];r!=null&&Sl(n,s,W_(r))}},Sp),ys=He(function(e,t,i){return e.i===2&&(ri(t,i,(e=gp(e))===""?void 0:e),!0)},X1,Sp),st=He(function(e,t,i){return e.i===2&&(ri(t,i,gp(e)),!0)},X1,Sp),Ee=(function(e,t,i=yp){return new Ka(e,t,i)})(function(e,t,i,n,s){return e.i===2&&(n=Cr(void 0,n),nr(t,0|t[At],i).push(n),vl(e,n,s),!0)},function(e,t,i,n,s){if(Array.isArray(t)){for(let r=0;r<t.length;r++)q1(e,t[r],i,n,s);1&(e=0|t[At])||Ze(t,1|e)}}),se=Ru(function(e,t,i,n,s,r){if(e.i!==2)return!1;var a=0|t[At];return M1(t,a,r,i,Wa(a)),vl(e,t=fp(t,n,i),s),!0},q1),Aa=He(function(e,t,i){return e.i===2&&(ri(t,i,_p(e)),!0)},Rp,Au),tv=Ps(function(e,t,i){return e.i===2&&(e=_p(e),nr(t,0|t[At],i).push(e),!0)},function(e,t,i){if((t=Cs(u1,t,!1))!=null)for(let a=0;a<t.length;a++){var n=e,s=i,r=t[a];r!=null&&Sl(n,s,bu(r,!0).buffer)}},Au),ev=He(function(e,t,i){return e.i===0&&(ri(t,i,Jn(e.h)),!0)},$1,Mp),I3=Ps(function(e,t,i){return(e.i===0||e.i===2)&&(t=nr(t,0|t[At],i),e.i==2?xl(e,Jn,t):t.push(Jn(e.h)),!0)},function(e,t,i){if((t=Cs(a1,t,!0))!=null)for(let a=0;a<t.length;a++){var n=e,s=i,r=t[a];r!=null&&(Fi(n,s,0),Ya(n.h,r))}},Mp),L3=He(function(e,t,i){return e.i===0&&(ri(t,i,(e=Jn(e.h))===0?void 0:e),!0)},$1,Mp),wt=He(function(e,t,i){return e.i===0&&(ri(t,i,As(e.h)),!0)},Y1,bp),Xh=He(function(e,t,i){return e.i===0&&(ri(t,i,(e=As(e.h))===0?void 0:e),!0)},Y1,bp),N3=He(function(e,t,i){return e.i!==0?e=!1:(ri(t,i,(function(n){return pp(n,(s,r)=>{var a=-(1&s);return s1(s=(s>>>1|r<<31)^a,r>>>1^a)})})(e.h)),e=!0),e},function(e,t,i){if((t=rp(t))!=null&&(D1(t),t!=null))switch(Fi(e,i,0),typeof t){case"number":e=e.h,t=(i=t)<0,Tf(i=2*Math.abs(i)),i=oe;let n=_e;t&&(i==0?n==0?n=i=4294967295:(n--,i=4294967295):i--),Es(e,oe=i,_e=n);break;case"bigint":e=e.h,t=t<<BigInt(1)^t>>BigInt(63),oe=Number(BigInt.asUintN(32,t)),_e=Number(BigInt.asUintN(32,t>>BigInt(32))),Es(e,oe,_e);break;default:_3(e.h,t)}},S3),Ff=class{constructor(t,i){var n=Qi;this.h=t,this.i=i,this.o=ue,this.u=Lt,this.defaultValue=void 0,this.l=n.ib!=null?i1:void 0}register(){gu(this)}};function Qn(e,t){return new Ff(e,t)}function sr(e,t){return(i,n)=>{t:{let r={ma:!0};n&&Object.assign(r,n),i=A1(i,void 0,void 0,r);try{let a=new e,o=a.B;wp(t)(o,i);var s=a;break t}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{R1(i)}s=void 0}return s}}function Pp(e){return t=>G1(t,e)}function Ml(e){return function(){return G1(this,e)}}var D3=[0,Aa,tv,Bt,st],F3=[0,ys,[0,Xh,[0,Wh,Ar],Xh,-1,[0,wt],Xh,-1],He(j1,Rp,Au)],mf,Zg=class extends gt{constructor(e){super(e)}},Jg=[0,ys,He(j1,function(e,t,i){if(t!=null){if(t instanceof gt){let n=t.mb;return void(n?(t=n(t),t!=null&&Sl(e,i,bu(t,!0).buffer)):La(Mf,3))}if(Array.isArray(t))return void La(Mf,3)}Rp(e,t,i)},Au)],U3=[0,1,[0,12,Jt,10,Bt],[0,7,[0,Jt,-1]]],jg=globalThis.trustedTypes,O3=class{constructor(e){this.h=e}toString(){return this.h+""}};function Qg(e){var t;return mf===void 0&&(mf=(function(){var i=null;if(!jg)return i;try{let n=s=>s;i=jg.createPolicy("goog#html",{createHTML:n,createScript:n,createScriptURL:n})}catch{}return i})()),e=(t=mf)?t.createScriptURL(e):e,new O3(e)}function Tr(e,...t){if(t.length===0)return Qg(e[0]);var i=e[0];for(let n=0;n<t.length;n++)i+=encodeURIComponent(t[n])+e[n+1];return Qg(i)}var iv=[0,Jt,wt,Bt,-1,Za,wt,-1,Bt,-1],nv=[0,wt,-1,Bt],sv=class extends gt{constructor(e){super(e)}},rv=[0,Bt,st,Bt,wt,-1,Ps(function(e,t,i){return(e.i===0||e.i===2)&&(t=nr(t,0|t[At],i),e.i==2?xl(e,d3,t):t.push(As(e.h)),!0)},function(e,t,i){if((t=Cs(Ur,t,!0))!=null&&t.length){i=vp(e,i);for(let n=0;n<t.length;n++)yl(e.h,t[n]);xp(e,i)}},bp),st,-1,[0,Bt,-1],wt,Bt,-1,nv],B3=class extends gt{constructor(e){super(e)}},k3=class extends gt{constructor(e){super(e)}},av=class extends gt{constructor(e){super(e)}h(){return g1(this,9)}},ov=[0,3,Bt,-1,2,[0,[2],Jt,se,[0,ev]],[0,wt,Bt,wt,Bt,wt,4,[0,Bt,st,-1,Bt,Jt,-1,Bt],wt,Bt,-4,wt,ii,Bt,ii,Bt,-1,Jt,Bt,-3,[0,Bt,Jt],[0,st,Jt,-1],[0,Bt],[0,Bt,-1],[0,Bt,Jt,-1]],[0,[3,4],st,-1,se,[0,Jt],se,[0,wt,-2]],[0],st,Bt],lv=[0,st,-2],t_=class extends gt{constructor(e){super(e)}},cv=[0],z3=class extends gt{constructor(e){super(e)}},hv=[0,Jt,Bt,1,Bt,-4],Qi=class extends gt{constructor(e){super(e,2)}},si={};si[336783863]=[0,st,Bt,-1,Jt,[0,[1,2,3,4,5,6,7,8,9],se,cv,se,rv,se,lv,se,hv,se,iv,se,[0,st,-2],se,[0,st,wt],se,ov,se,nv],[0,st],Bt,[0,[1,3],[2,4],se,[0,Za],-1,se,[0,ii],-1,Ee,[0,st,-1]],st];var e_=[0,Wh,-1,js,-3,Wh,Za,ys,Ar,Wh,-1,js,Ar,js,-2,ys];function De(e,t){Mu(e,3,t)}function re(e,t){Mu(e,4,t)}var Wi=class extends gt{constructor(e){super(e,500)}A(e){return Lt(this,0,7,e)}},ol=[-1,{}],i_=[0,st,1,ol],n_=[0,st,ii,ol];function mn(e,t){ul(e,1,Wi,t)}function Be(e,t){Mu(e,10,t)}function pe(e,t){Mu(e,15,t)}var tn=class extends gt{constructor(e){super(e,500)}A(e){return Lt(this,0,1001,e)}},uv=[-500,Ee,[-500,ys,-1,ii,-3,[-2,si,Bt],Ee,Jg,Ar,-1,i_,n_,Ee,[0,ys,js],ys,e_,Ar,ii,987,ii],4,Ee,[-500,st,-1,[-1,{}],998,st],Ee,[-500,st,ii,-1,[-2,{},Bt],997,ii,-1],Ar,Ee,[-500,st,ii,ol,998,ii],ii,Ar,i_,n_,Ee,[0,ys,-1,ol],ii,-2,e_,ys,-1,js,[0,js,L3],978,ol,Ee,Jg];tn.prototype.h=Ml(uv);var G3=sr(tn,uv),V3=class extends gt{constructor(e){super(e)}},dv=class extends gt{constructor(e){super(e)}h(){return Br(this,V3,1)}},fv=[0,Ee,[0,Jt,ze,st,-1]],Nu=sr(dv,fv),H3=class extends gt{constructor(e){super(e)}},W3=class extends gt{constructor(e){super(e)}},gf=class extends gt{constructor(e){super(e)}l(){return ue(this,H3,2)}h(){return Br(this,W3,5)}},pv=sr(class extends gt{constructor(e){super(e)}},[0,ii,Za,Cp,[0,wt,[0,Jt,-3],[0,ze,-3],[0,Jt,-1,[0,Ee,[0,Jt,-2]]],Ee,[0,ze,-1,st,ze]],st,-1,Ae,Ee,[0,Jt,ze],ii,Ae]),X3=class extends gt{constructor(e){super(e)}},Ra=sr(class extends gt{constructor(e){super(e)}},[0,Ee,[0,ze,-4]]),q3=class extends gt{constructor(e){super(e)}},bl=sr(class extends gt{constructor(e){super(e)}},[0,Ee,[0,ze,-4]]),$3=class extends gt{constructor(e){super(e)}},Y3=[0,Jt,-1,Cp,wt],mv=class extends gt{constructor(e){super(e)}};mv.prototype.h=Ml([0,ze,-4,Ae]);var K3=class extends gt{constructor(e){super(e)}},Z3=sr(class extends gt{constructor(e){super(e)}},[0,Ee,[0,1,Jt,st,fv],Ae]),J3=class extends gt{constructor(e){super(e)}},j3=class extends gt{constructor(e){super(e)}h(){var e=Ne(this,1,void 0,x1);return e??Lr()}},Q3=class extends gt{constructor(e){super(e)}},qh=[1,2],tT=sr(class extends gt{constructor(e){super(e)}},[0,Ee,[0,qh,se,[0,Cp],se,[0,Aa],Jt,st],Ae]),Ip=class extends gt{constructor(e){super(e)}},gv=[0,st,Jt,ze,ii,-1],s_=class extends gt{constructor(e){super(e)}},eT=[0,Bt,-1],uu=class extends gt{constructor(e){super(e)}h(){return _1(this,2,bs)}l(){return Cf(this,av,6,bs)}},bs=[1,2,3,4,5,6],du=class extends gt{constructor(e){super(e)}h(){return Ne(this,1,void 0,x1)!=null}l(){return vi(Ne(this,2))!=null}},ke=class extends gt{constructor(e){super(e)}},_v=[0,Aa,st,[0,Jt,Ae,-1],[0,hu,Ae]],Ve=[0,_v,Bt,[0,bs,se,hv,se,rv,se,iv,se,cv,se,lv,se,ov],wt],iT=Pp(Ve),Du=class extends gt{constructor(e){super(e)}},Lp=[0,Ve,ze,-1,Jt],nT=Qn(502141897,Du);si[502141897]=Lp;var sT=sr(class extends gt{constructor(e){super(e)}},[0,[0,wt,-1,C3,I3],Y3]),vv=class extends gt{constructor(e){super(e)}},xv=class extends gt{constructor(e){super(e)}},Uf=[0,Ve,ze,[0,Ve],Bt],rT=Qn(508968150,xv);si[508968150]=[0,Ve,Lp,Uf,ze,[0,[0,_v]]],si[508968149]=Uf;var Ea=class extends gt{constructor(e){super(e)}l(){return ue(this,Ip,2)}h(){$t(this,2)}},yv=[0,Ve,gv];si[478825465]=yv;var aT=class extends gt{constructor(e){super(e)}},Sv=class extends gt{constructor(e){super(e)}},Np=class extends gt{constructor(e){super(e)}},Dp=class extends gt{constructor(e){super(e)}},Mv=class extends gt{constructor(e){super(e)}},r_=[0,Ve,[0,Ve],yv,-1],bv=[0,Ve,ze,Jt],Fp=[0,Ve,ze],Tv=[0,Ve,bv,Fp,ze],oT=Qn(479097054,Mv);si[479097054]=[0,Ve,Tv,r_],si[463370452]=r_,si[464864288]=bv;var lT=Qn(462713202,Dp);si[462713202]=Tv,si[474472470]=Fp;var cT=class extends gt{constructor(e){super(e)}},Ev=class extends gt{constructor(e){super(e)}},wv=class extends gt{constructor(e){super(e)}},Av=class extends gt{constructor(e){super(e)}},Up=[0,Ve,ze,-1,Jt],Of=[0,Ve,ze,Bt];Av.prototype.h=Ml([0,Ve,Fp,[0,Ve],Lp,Uf,Up,Of]);var Rv=class extends gt{constructor(e){super(e)}},hT=Qn(456383383,Rv);si[456383383]=[0,Ve,gv];var Cv=class extends gt{constructor(e){super(e)}},uT=Qn(476348187,Cv);si[476348187]=[0,Ve,eT];var Pv=class extends gt{constructor(e){super(e)}},a_=class extends gt{constructor(e){super(e)}},Iv=[0,wt,-1],dT=Qn(458105876,class extends gt{constructor(e){super(e)}h(){var e=this.B,t=0|e[At],i=Ni(this,t);return e=(function(n,s,r,a){var o=a_;!a&&$a(n)&&(r=0|(s=n.B)[At]);var l=Kn(s,2);if(n=!1,l==null){if(a)return Ng();l=[]}else if(l.constructor===ws){if(!(2&l.N)||a)return l;l=l.fa()}else Array.isArray(l)?n=!!(2&l[At]):l=[];if(a){if(!l.length)return Ng();n||(n=!0,Ha(l))}else n&&(n=!1,cl(l),l=y1(l));return!n&&32&r&&pl(l,32),r=Ke(s,r,2,a=new ws(l,o,t3,void 0)),n||ir(s,r),a})(this,e,t,i),!i&&a_&&(e.Fa=!0),e}});si[458105876]=[0,Iv,R3,[!0,Ae,[0,st,-1,ii]],[0,Za,Bt,wt],Bt];var Op=class extends gt{constructor(e){super(e)}},Lv=Qn(458105758,Op);si[458105758]=[0,Ve,st,Iv];var fT=class extends gt{constructor(e){super(e)}},pT=class extends gt{constructor(e){super(e)}},mT=class extends gt{constructor(e){super(e)}},gT=Pp([0,Ee,[0,Xh,Ee,[0,Q1,-1],js]]),_f=class extends gt{constructor(e){super(e)}},o_=[0,Q1,-1,js],_T=class extends gt{constructor(e){super(e)}},Nv=class extends gt{constructor(e){super(e)}},Bf=[1,2];Nv.prototype.h=Ml([0,Bf,se,o_,se,[0,Ee,o_]]);var Dv=class extends gt{constructor(e){super(e)}},vT=Qn(443442058,Dv);si[443442058]=[0,Ve,st,Jt,ze,ii,-1,Bt,ze],si[514774813]=Up;var Fv=class extends gt{constructor(e){super(e)}},xT=Qn(516587230,Fv);function kf(e,t){return t=t?t.clone():new Ip,e.displayNamesLocale!==void 0?$t(t,1,Ms(e.displayNamesLocale)):e.displayNamesLocale===void 0&&$t(t,1),e.maxResults!==void 0?Zn(t,2,e.maxResults):"maxResults"in e&&$t(t,2),e.scoreThreshold!==void 0?Nt(t,3,e.scoreThreshold):"scoreThreshold"in e&&$t(t,3),e.categoryAllowlist!==void 0?nu(t,4,e.categoryAllowlist):"categoryAllowlist"in e&&$t(t,4),e.categoryDenylist!==void 0?nu(t,5,e.categoryDenylist):"categoryDenylist"in e&&$t(t,5),t}function Uv(e){var t=Number(e);return Number.isSafeInteger(t)?t:String(e)}function Bp(e,t=-1,i=""){return{categories:e.map(n=>({index:fn(n,1)??0??-1,score:Li(n,2)??0,categoryName:vi(Ne(n,3))??""??"",displayName:vi(Ne(n,4))??""??""})),headIndex:t,headName:i}}function yT(e){var t={classifications:Br(e,K3,1).map(i=>Bp(ue(i,dv,4)?.h()??[],fn(i,2)??0,vi(Ne(i,3))??""))};return(function(i){return i==null?i:typeof i=="bigint"?(bf(i)?i=Number(i):(i=Rr(64,i),i=bf(i)?Number(i):String(i)),i):Xa(i)?typeof i=="number"?sp(i):tu(i):void 0})(Ne(e,2,void 0,eu))!=null&&(t.timestampMs=Uv(Ne(e,2,void 0,eu)??m1)),t}function Ov(e){var t=wr(e,3,Zi),i=wr(e,2,Ur),n=wr(e,1,vi),s=wr(e,9,vi),r={categories:[],keypoints:[]};for(let a=0;a<t.length;a++)r.categories.push({score:t[a],index:i[a]??-1,categoryName:n[a]??"",displayName:s[a]??""});if((t=ue(e,gf,4)?.l())&&(r.boundingBox={originX:fn(t,1,Zs)??0,originY:fn(t,2,Zs)??0,width:fn(t,3,Zs)??0,height:fn(t,4,Zs)??0,angle:0}),ue(e,gf,4)?.h().length)for(let a of ue(e,gf,4).h())r.keypoints.push({x:Ne(a,1,Zs,Zi)??0,y:Ne(a,2,Zs,Zi)??0,score:Ne(a,4,Zs,Zi)??0,label:vi(Ne(a,3,Zs))??""});return r}function Tl(e){var t=[];for(let i of Br(e,q3,1))e={x:Li(i,1)??0,y:Li(i,2)??0,z:Li(i,3)??0,visibility:Li(i,4)??0},Ne(i,5,void 0,Zi)!=null&&(e.presence=Li(i,5)??0),t.push(e);return t}function Ca(e){var t=[];for(let i of Br(e,X3,1))e={x:Li(i,1)??0,y:Li(i,2)??0,z:Li(i,3)??0,visibility:Li(i,4)??0},Ne(i,5,void 0,Zi)!=null&&(e.presence=Li(i,5)??0),t.push(e);return t}function l_(e){return Array.from(e,t=>t>127?t-256:t)}function c_(e,t){if(e.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);var i=0,n=0,s=0;for(let r=0;r<e.length;r++)i+=e[r]*t[r],n+=e[r]*e[r],s+=t[r]*t[r];if(n<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return i/Math.sqrt(n*s)}function Er(e,t,i){return i=`wasm${i?"_module":""}_internal`,Promise.resolve({wasmLoaderPath:`${t}/${e}_${i}.js`,wasmBinaryPath:`${t}/${e}_${i}.wasm`})}si[516587230]=[0,Ve,Up,Of,ze],si[518928384]=Of;var xs=class{};function h_(e){return $t(new zf,1,Ts(e))}xs.forVisionTasks=function(e,t=!1){return Er("vision",e??Tr``,t)},xs.forLiteRtLmTextTasks=function(e,t=!1){return Er("litertlm_text",e??Tr``,t)},xs.forTextTasks=function(e,t=!1){return Er("text",e??Tr``,t)},xs.forRetrievalTasks=function(e,t=!1){return Er("retrieval",e??Tr``,t)},xs.forGenAiTasks=function(e,t=!1){return Er("genai",e??Tr``,t)},xs.forDecisionTasks=function(e,t=!1){return Er("decision",e??Tr``,t)},xs.forAudioTasks=function(e,t=!1){return Er("audio",e??Tr``,t)};var zf=class extends gt{constructor(e){super(e)}},ST=class extends gt{constructor(e){super(e)}},u_=[0,wt,2,hu,-2,Ae,Ee,[0,wt,Ae]],MT=class extends gt{constructor(e){super(e)}},bT=class extends gt{constructor(e){super(e)}};function Gf(e,t){return $t(e,1,Ts(t))}function Vf(e,t){return $t(e,2,Ts(t))}var Hf=class extends gt{constructor(e){super(e)}},fu=[3,4,5,6,7],TT=class extends gt{constructor(e){super(e)}},Bv=class extends gt{constructor(e){super(e)}};Bv.prototype.h=Ml([0,[0,wt,st,-3,wt],[0,fu,wt,-1,se,[0,wt,st,hu],se,u_,se,[0,1,u_],se,[0,wt],se,[0,wt,st,hu]]]);var ET=class{constructor(){this.h=typeof AbortController<"u"}async send(e,t,i){var n=this.h?new AbortController:void 0,s=n&&e.la>0?setTimeout(()=>{n.abort()},e.la):void 0;try{let r=await fetch(e.url,{method:e.bb,headers:{...e.ab},...e.body&&{body:e.body},...e.withCredentials&&{credentials:"include"},signal:e.la&&n?n.signal:null});r.ok?t?.(await r.text()):i?.(r.status)}catch(r){r?.name==="AbortError"?i?.(408):i?.(0)}finally{clearTimeout(s)}}},wT=class extends gt{constructor(e){super(e,37)}},d_=[-4,{},U3,wt,F3],f_=[0,st,wt,1,st,-1,wt,1,wt,1,Ae],p_=[0,wt,st,-2],m_=[0,st,wt],g_=[0,st,wt],__=[0,Bt,-3],v_=[0,wt,st,-1,Ae,Jt,-1,st,-5,Ee,[0,st,-4],-1,Bt,[0,Bt,-3],wt],AT=class extends gt{constructor(e){super(e,19)}},RT=Pp([-19,{},[0,wt,1,[0,st,-6,Ae,Jt,st,-1,Ae],1,[0,st,1,st,-5],st,-1,[0,wt,st,-8],[0,st,-3],[0,st,wt,st,-2],[0,st,-1,wt,st,-1,wt,st,-1,[0,Ee,[0,st,-1],Bt,st,-5],[0,wt,Bt,Jt,-2]],Ae,[0,st,-3,Ae,Jt,st,-1],[0,wt,st,-1],[0,st,-9],[0,st,-6,wt,st,1,st,Bt,wt,-1,Bt,st,-2,wt,st,wt,st,Jt,-1],1,[0,wt],1,[0,st,-4],1,f_,[0,[1,2,3,4,5,6],se,f_,se,m_,se,g_,se,[0,wt],se,v_,se,p_],m_,g_,v_,[0,[0,wt,st,-1,Ae,Jt,-1,st,-4,Ee,[0,st,-4],-1,1,__],[0,wt,st,-1,Ae,Jt,-1,st,-4,__]],p_,[0,st,[0,Jt,-3,wt],wt,-2,[0,Jt,-1],Bt],4,[0,st,wt,st,-1,Ae,wt,st,-1,wt,Jt,-1]],wt,Ee,[-37,{},il,st,Ee,[0,st,-1],Aa,1,Aa,[0,ii,-1,Kg,P3,-1],st,[0,Jt,st,-1],Bt,Jt,Ae,st,-1,N3,D3,il,Aa,wt,Kg,Ae,-1,[0,wt,-1],st,Bt,st,Za,st,-1,Yg,1,Yg,d_,Bt,[0,wt,[0,ze,Jt,-2],[0,ze]],[0,wt,Ae]],il,tv,st,-1,il,wt,-1,[0,Bt,-1,wt,Bt],[0,Ae,-1,st],[0,il,Bt,Ae],Ae,1,ev,1,d_]),CT=class{constructor(e){this.i=[],this.o=new ET,this.l=e??"",this.h=setInterval(()=>{this.flush()},6e4)}close(){this.h!==void 0&&(clearInterval(this.h),this.h=void 0),this.flush()}flush(e,t){if(this.error)t?.("net-send-failed");else if(this.i.length===0)e?.();else{var i=this.i;this.i=[],i=(function(n){var s=new AT;return Rf(s=$t(s,2,Ts(1786)),3,n)})(i),i=RT(i),this.o.send({url:"https://odml.pa.googleapis.com/v1/log",bb:"POST",la:1e4,body:i,gb:2,ab:{"Content-Type":"application/x-protobuf","x-goog-api-key":this.l},withCredentials:!1},()=>{e?.()},n=>{this.error=Error(`Logging failed with HTTP error: ${n}`),this.i=[],this.h!==void 0&&(clearInterval(this.h),this.h=void 0),t?.("net-send-failed",n)})}}},pu=class{constructor(){this.ba=this.V=this.Y=this.S=this.W=this.U=this.R=0}};function Wf(e,t){var i=new Bv;i=Lt(i,0,1,e.C),i=Lt(i,0,2,t),t=$t(t=new wT,6,_u(i=i.h(),!1)),(e=e.m).error||e.i.push(t)}function x_(e,t){var i={R:t.R-e.l.R,U:t.U-e.l.U,W:t.W-e.l.W,S:t.S-e.l.S,Y:t.Y-e.l.Y,V:t.V,ba:t.ba},n=Vf(Gf(new Hf,e.D),1);i=kv(e,i),Wf(e,n=En(n,4,fu,i)),e.l=t}function kv(e,t){var i=new ST;return e=Vh(e=ff(e=$t(i,1,Ts(e.F)),7,t.S),5,t.V),e=Vh(e,6,t.ba),t.W>0&&Vh(e,4,t.Y/t.W),t.R!==0&&(i=ff(i=h_(3),2,t.R),ul(e,8,zf,i)),t.U!==0&&(t=ff(i=h_(4),2,t.U),ul(e,8,zf,t)),e}var PT=class{constructor(e,t,i){this.v=performance.now(),this.o=performance.now(),this.i=new Map,this.u=0,this.h=new pu,this.l=new pu,this.m=new CT(i),this.D=(function(n){switch(n){case"AudioClassifier":return 4;case"AudioEmbedder":return 5;case"TextClassifier":return 6;case"TextEmbedder":return 7;case"GestureRecognizer":return 8;case"HandDetector":return 9;case"HandLandmarker":return 10;case"ImageClassifier":return 11;case"ImageEmbedder":return 12;case"ImageSegmenter":return 13;case"ObjectDetector":return 14;case"FaceDetector":return 15;case"FaceLandmarker":return 16;case"InteractiveSegmenter":case"InteractiveSegmenterLegacy":return 18;case"HolisticLandmarker":return 20;case"LlmInference":return 21;case"LanguageDetector":return 22;case"PoseLandmarker":return 23;case"UniversalEmbedder":return 28;case"SemanticRetriever":return 29;case"DecisionMaker":return 30;case"TextSummarizer":return 26;case"TextProofreader":return 27;case"AudioTranscriber":return 31;case"TextToSpeech":return 32;default:return 0}})(e),this.F=(function(n){switch(n){case"IMAGE":return 11;case"VIDEO":return 12;case"LIVE_STREAM":return 13;case"AUDIO_CLIPS":return 14;case"AUDIO_STREAM":return 15;default:return 10}})(t),e=new TT,typeof navigator>"u"?t=0:(t=navigator.userAgent,t=/Android/i.test(t)?1:/iPhone|iPad|iPod/i.test(t)?2:/Windows/i.test(t)?5:/Macintosh/i.test(t)?4:/Linux/i.test(t)?3:0),e=$t(e,1,Ts(t)),e=$t(e,2,Ms("")),e=$t(e,3,Ms("")),e=$t(e,4,Ms("1.2.3")),e=$t(e,5,Ms("")),this.C=$t(e,6,Ts((function(){var n=globalThis.__HOST_ENVIRONMENT__;if(typeof n=="string")switch(n){case"ANDROID":return 1;case"IOS":return 2;case"PYTHON":return 3;case"WEB":break;case"FLUTTER":return 5;case"FLUTTER_WEB":return 6;default:return 0}return 4})()))}ya(){var e=new bT;e=Vh(e=$t(e,1,Ts(this.F)),3,performance.now()-this.v),Wf(this,e=En(Vf(Gf(new Hf,this.D),0),3,fu,e)),this.o=performance.now()}za(e){var t=this.i.get(e);if(t!==void 0&&(this.i.delete(e),e=performance.now()-t,++this.h.W,this.h.Y+=e,this.h.V=Math.max(this.h.V,e),this.u=Math.max(this.u,e),performance.now()>this.o+3e4)){for(let[i,n]of this.i.entries())e=i,n<t&&(this.h.S++,this.i.delete(e));t={...this.h,ba:performance.now()-this.o},this.h.V=0,this.o=performance.now(),x_(this,t)}}xa(){var e={...this.h,S:this.h.S+this.i.size,V:this.u,ba:performance.now()-this.v};x_(this,e);var t=new MT;t=Lt(t,0,2,e=kv(this,e)),Wf(this,t=En(e=Vf(Gf(new Hf,this.D),2),5,fu,t))}close(){var e=this.m;typeof e.close=="function"?e.close():e.flush()}};function kp(){var e=navigator;return typeof OffscreenCanvas<"u"&&(!(function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")})(e)||!!((e=e.userAgent.match(/Version\/([\d]+).*Safari/))&&e.length>=1&&Number(e[1])>=17))}async function y_(e){if(typeof importScripts!="function"){let t=document.createElement("script");return t.src=e.toString(),t.crossOrigin="anonymous",new Promise((i,n)=>{t.addEventListener("load",()=>{i()},!1),t.addEventListener("error",s=>{n(s)},!1),document.body.appendChild(t)})}try{importScripts(e.toString())}catch(t){if(!(t instanceof TypeError))throw t;{let i=self.import;i?await i(e.toString()):await import(e.toString())}}}function zp(e){return e.videoWidth!==void 0?[e.videoWidth,e.videoHeight]:e.naturalWidth!==void 0?[e.naturalWidth,e.naturalHeight]:e.displayWidth!==void 0?[e.displayWidth,e.displayHeight]:[e.width,e.height]}function It(e,t,i){e.o||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),i(t=e.j.stringToNewUTF8(t)),e.j._free(t)}function zv(e,t,i){if(!e.j.canvas)throw Error("No OpenGL canvas configured.");if(i?e.j._bindTextureToStream(i):e.j._bindTextureToCanvas(),!(i=e.j.canvas.getContext("webgl2")||e.j.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");e.j.gpuOriginForWebTexturesIsBottomLeft&&i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!0),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,t),e.j.gpuOriginForWebTexturesIsBottomLeft&&i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1);var[n,s]=zp(t);return!e.l||n===e.j.canvas.width&&s===e.j.canvas.height||(e.j.canvas.width=n,e.j.canvas.height=s),[n,s]}function S_(e,t,i){e.o||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");var n=new Uint32Array(t.length);for(let s=0;s<t.length;s++)n[s]=e.j.stringToNewUTF8(t[s]);t=e.j._malloc(4*n.length),e.j.HEAPU32.set(n,t>>2),i(t);for(let s of n)e.j._free(s);e.j._free(t)}function Xn(e,t,i){e.j.simpleListeners=e.j.simpleListeners||{},e.j.simpleListeners[t]=i}function Js(e,t,i){var n=[];e.j.simpleListeners=e.j.simpleListeners||{},e.j.simpleListeners[t]=(s,r,a)=>{r?(i(n,a),n=[]):n.push(s)}}var Gv=class{constructor(e,t){this.l=!0,this.j=e,this.h=null,this.i=0,this.o=typeof this.j._addIntToInputStream=="function",t!==void 0?this.j.canvas=t:kp()?this.j.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.j.canvas=document.createElement("canvas"))}async initializeGraph(e){var t=await(await fetch(e)).arrayBuffer();e=!(e.endsWith(".pbtxt")||e.endsWith(".textproto")),this.setGraph(new Uint8Array(t),e)}setGraphFromString(e){this.setGraph(new TextEncoder().encode(e),!1)}setGraph(e,t){var i=e.length,n=this.j._malloc(i);this.j.HEAPU8.set(e,n),t?this.j._changeBinaryGraph(i,n):this.j._changeTextGraph(i,n),this.j._free(n)}configureAudio(e,t,i,n,s){this.j._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),It(this,n||"input_audio",r=>{It(this,s=s||"audio_header",a=>{this.j._configureAudio(r,a,e,t??0,i)})})}setAutoResizeCanvas(e){this.l=e}setAutoRenderToScreen(e){this.j._setAutoRenderToScreen(e)}setGpuBufferVerticalFlip(e){this.j.gpuOriginForWebTexturesIsBottomLeft=e}ka(e){Xn(this,"__graph_config__",t=>{e(t)}),It(this,"__graph_config__",t=>{this.j._getGraphConfig(t,void 0)}),delete this.j.simpleListeners.__graph_config__}attachErrorListener(e){this.j.errorListener=e}attachEmptyPacketListener(e,t){this.j.emptyPacketListeners=this.j.emptyPacketListeners||{},this.j.emptyPacketListeners[e]=t}addAudioToStream(e,t,i){this.addAudioToStreamWithShape(e,0,0,t,i)}addAudioToStreamWithShape(e,t,i,n,s){var r=4*e.length;this.i!==r&&(this.h&&this.j._free(this.h),this.h=this.j._malloc(r),this.i=r),this.j.HEAPF32.set(e,this.h/4),It(this,n,a=>{this.j._addAudioToInputStream(this.h,t,i,a,s)})}addGpuBufferToStream(e,t,i){It(this,t,n=>{var[s,r]=zv(this,e,n);this.j._addBoundTextureToStream(n,s,r,i)})}addBoolToStream(e,t,i){It(this,t,n=>{this.j._addBoolToInputStream(e,n,i)})}addDoubleToStream(e,t,i){It(this,t,n=>{this.j._addDoubleToInputStream(e,n,i)})}addFloatToStream(e,t,i){It(this,t,n=>{this.j._addFloatToInputStream(e,n,i)})}addIntToStream(e,t,i){It(this,t,n=>{this.j._addIntToInputStream(e,n,i)})}addUintToStream(e,t,i){It(this,t,n=>{this.j._addUintToInputStream(e,n,i)})}addStringToStream(e,t,i){It(this,t,n=>{It(this,e,s=>{this.j._addStringToInputStream(s,n,i)})})}addStringRecordToStream(e,t,i){It(this,t,n=>{S_(this,Object.keys(e),s=>{S_(this,Object.values(e),r=>{this.j._addFlatHashMapToInputStream(s,r,Object.keys(e).length,n,i)})})})}addProtoToStream(e,t,i,n){It(this,i,s=>{It(this,t,r=>{var a=this.j._malloc(e.length);this.j.HEAPU8.set(e,a),this.j._addProtoToInputStream(a,e.length,r,s,n),this.j._free(a)})})}addEmptyPacketToStream(e,t){It(this,e,i=>{this.j._addEmptyPacketToInputStream(i,t)})}addBoolVectorToStream(e,t,i){It(this,t,n=>{var s=this.j._allocateBoolVector(e.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(let r of e)this.j._addBoolVectorEntry(s,r);this.j._addBoolVectorToInputStream(s,n,i)})}addDoubleVectorToStream(e,t,i){It(this,t,n=>{var s=this.j._allocateDoubleVector(e.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(let r of e)this.j._addDoubleVectorEntry(s,r);this.j._addDoubleVectorToInputStream(s,n,i)})}addFloatVectorToStream(e,t,i){It(this,t,n=>{var s=this.j._allocateFloatVector(e.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(let r of e)this.j._addFloatVectorEntry(s,r);this.j._addFloatVectorToInputStream(s,n,i)})}addIntVectorToStream(e,t,i){It(this,t,n=>{var s=this.j._allocateIntVector(e.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(let r of e)this.j._addIntVectorEntry(s,r);this.j._addIntVectorToInputStream(s,n,i)})}addUintVectorToStream(e,t,i){It(this,t,n=>{var s=this.j._allocateUintVector(e.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(let r of e)this.j._addUintVectorEntry(s,r);this.j._addUintVectorToInputStream(s,n,i)})}addStringVectorToStream(e,t,i){It(this,t,n=>{var s=this.j._allocateStringVector(e.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(let r of e)It(this,r,a=>{this.j._addStringVectorEntry(s,a)});this.j._addStringVectorToInputStream(s,n,i)})}addBoolToInputSidePacket(e,t){It(this,t,i=>{this.j._addBoolToInputSidePacket(e,i)})}addDoubleToInputSidePacket(e,t){It(this,t,i=>{this.j._addDoubleToInputSidePacket(e,i)})}addFloatToInputSidePacket(e,t){It(this,t,i=>{this.j._addFloatToInputSidePacket(e,i)})}addIntToInputSidePacket(e,t){It(this,t,i=>{this.j._addIntToInputSidePacket(e,i)})}addUintToInputSidePacket(e,t){It(this,t,i=>{this.j._addUintToInputSidePacket(e,i)})}addStringToInputSidePacket(e,t){It(this,t,i=>{It(this,e,n=>{this.j._addStringToInputSidePacket(n,i)})})}addProtoToInputSidePacket(e,t,i){It(this,i,n=>{It(this,t,s=>{var r=this.j._malloc(e.length);this.j.HEAPU8.set(e,r),this.j._addProtoToInputSidePacket(r,e.length,s,n),this.j._free(r)})})}addBoolVectorToInputSidePacket(e,t){It(this,t,i=>{var n=this.j._allocateBoolVector(e.length);if(!n)throw Error("Unable to allocate new bool vector on heap.");for(let s of e)this.j._addBoolVectorEntry(n,s);this.j._addBoolVectorToInputSidePacket(n,i)})}addDoubleVectorToInputSidePacket(e,t){It(this,t,i=>{var n=this.j._allocateDoubleVector(e.length);if(!n)throw Error("Unable to allocate new double vector on heap.");for(let s of e)this.j._addDoubleVectorEntry(n,s);this.j._addDoubleVectorToInputSidePacket(n,i)})}addFloatVectorToInputSidePacket(e,t){It(this,t,i=>{var n=this.j._allocateFloatVector(e.length);if(!n)throw Error("Unable to allocate new float vector on heap.");for(let s of e)this.j._addFloatVectorEntry(n,s);this.j._addFloatVectorToInputSidePacket(n,i)})}addIntVectorToInputSidePacket(e,t){It(this,t,i=>{var n=this.j._allocateIntVector(e.length);if(!n)throw Error("Unable to allocate new int vector on heap.");for(let s of e)this.j._addIntVectorEntry(n,s);this.j._addIntVectorToInputSidePacket(n,i)})}addUintVectorToInputSidePacket(e,t){It(this,t,i=>{var n=this.j._allocateUintVector(e.length);if(!n)throw Error("Unable to allocate new unsigned int vector on heap.");for(let s of e)this.j._addUintVectorEntry(n,s);this.j._addUintVectorToInputSidePacket(n,i)})}addStringVectorToInputSidePacket(e,t){It(this,t,i=>{var n=this.j._allocateStringVector(e.length);if(!n)throw Error("Unable to allocate new string vector on heap.");for(let s of e)It(this,s,r=>{this.j._addStringVectorEntry(n,r)});this.j._addStringVectorToInputSidePacket(n,i)})}attachBoolListener(e,t){Xn(this,e,t),It(this,e,i=>{this.j._attachBoolListener(i)})}attachBoolVectorListener(e,t){Js(this,e,t),It(this,e,i=>{this.j._attachBoolVectorListener(i)})}attachIntListener(e,t){Xn(this,e,t),It(this,e,i=>{this.j._attachIntListener(i)})}attachIntVectorListener(e,t){Js(this,e,t),It(this,e,i=>{this.j._attachIntVectorListener(i)})}attachUintListener(e,t){Xn(this,e,t),It(this,e,i=>{this.j._attachUintListener(i)})}attachUintVectorListener(e,t){Js(this,e,t),It(this,e,i=>{this.j._attachUintVectorListener(i)})}attachDoubleListener(e,t){Xn(this,e,t),It(this,e,i=>{this.j._attachDoubleListener(i)})}attachDoubleVectorListener(e,t){Js(this,e,t),It(this,e,i=>{this.j._attachDoubleVectorListener(i)})}attachFloatListener(e,t){Xn(this,e,t),It(this,e,i=>{this.j._attachFloatListener(i)})}attachFloatVectorListener(e,t){Js(this,e,t),It(this,e,i=>{this.j._attachFloatVectorListener(i)})}attachStringListener(e,t){Xn(this,e,t),It(this,e,i=>{this.j._attachStringListener(i)})}attachStringVectorListener(e,t){Js(this,e,t),It(this,e,i=>{this.j._attachStringVectorListener(i)})}attachProtoListener(e,t,i){Xn(this,e,t),It(this,e,n=>{this.j._attachProtoListener(n,i||!1)})}attachProtoVectorListener(e,t,i){Js(this,e,t),It(this,e,n=>{this.j._attachProtoVectorListener(n,i||!1)})}attachAudioListener(e,t,i){this.j._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Xn(this,e,(n,s)=>{n=new Float32Array(n.buffer,n.byteOffset,n.length/4),t(n,s)}),It(this,e,n=>{this.j._attachAudioListener(n,i||!1)})}finishProcessing(){this.j._waitUntilIdle()}closeGraph(){this.j._closeGraph(),this.j.simpleListeners=void 0,this.j.emptyPacketListeners=void 0}};function Vv(e){return class extends e{get pa(){return this.j}Sa(){if(typeof this.pa._mediapipeLoggerGetEncodedApiKey=="function"){let t=this.pa._mediapipeLoggerGetEncodedApiKey();return this.pa._decodeBase64(t)}}}}function Hv(e){return class extends e{Za(){this.j._registerModelResourcesGraphService()}}}var IT=Vv(Hv(Gv)),LT=class extends IT{};async function NT(e,t,i,n){return e=await(async(s,r,a,o,l)=>{if(r&&await y_(r),!self.ModuleFactory||a&&(await y_(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((r=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new s(l,o)})(e,i.wasmLoaderPath,i.assetLoaderPath,t,{locateFile:s=>s.endsWith(".wasm")?i.wasmBinaryPath.toString():i.assetBinaryPath&&s.endsWith(".data")?i.assetBinaryPath.toString():s}),(function(s,r){r=r.runningMode??"";var a=s.h.Sa();s.o=new PT(s.D(),r,a)})(e,n),await e.A(n),e}async function $h(e,t,i,n){return NT(e,t,i,n)}function vf(e,t,i){try{e.h.j.FS_unlink(`/${i}`)}catch{}e.h.j.FS_createDataFile("/",i,t,!0,!1,!0),Xf(e,`/${i}`)}function Xf(e,t){var i=ue(e.baseOptions,du,1)||new du;typeof t=="string"?($t(i,2,Ms(t)),$t(i,1)):t instanceof Uint8Array&&($t(i,1,_u(t,!1)),$t(i,2)),Lt(e.baseOptions,0,1,i)}function M_(e){try{let t=e.L.length;if(t===1)throw Error(e.L[0].message);if(t>1)throw Error("Encountered multiple errors: "+e.L.map(i=>i.message).join(", "))}finally{e.L=[]}}function St(e,t){e.J=Math.max(e.J,t)}function Fu(e,t){e.F=new Wi,Ji(e.F,2,"PassThroughCalculator"),De(e.F,"free_memory"),re(e.F,"free_memory_unused_out"),Be(t,"free_memory"),mn(t,e.F)}function Ba(e,t){De(e.F,t),re(e.F,t+"_unused_out")}function Uu(e){e.h.addBoolToStream(!0,"free_memory",e.J)}var mu=class{constructor(e){this.h=e,this.L=[],this.J=0,this.h.setAutoRenderToScreen(!1)}l(e,t=!0,i=!1,n=!1){if(t){let s=e.baseOptions||{};if(e.baseOptions?.modelAssetBuffer&&e.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(ue(this.baseOptions,du,1)?.h()||ue(this.baseOptions,du,1)?.l()||e.baseOptions?.modelAssetBuffer||e.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");(function(a,o,l=!1){var c=ue(a.baseOptions,uu,3);if(!c){var h=c=new uu,d=new t_;En(h,4,bs,d)}"delegate"in o&&(o.delegate==="GPU"?(o=c,h=new sv,En(o,2,bs,h)):(o=c,h=new t_,En(o,4,bs,h))),l&&(l=c.l(),o=c.h()||l?.h()===!0,l=new av,o?Lt(l,0,9,o=new k3):Lt(l,0,8,o=new B3),En(c,6,bs,l)),Lt(a.baseOptions,0,3,c)})(this,s,n);let r=i?"model.litertlm":"model.dat";if(s.modelAssetPath)return fetch(s.modelAssetPath.toString()).then(a=>{if(a.ok)return a.arrayBuffer();throw Error(`Failed to fetch model: ${s.modelAssetPath} (${a.status})`)}).then(a=>{vf(this,new Uint8Array(a),r),this.u(),this.M()});if(s.modelAssetBuffer instanceof Uint8Array)i?vf(this,s.modelAssetBuffer,r):Xf(this,s.modelAssetBuffer);else if(s.modelAssetBuffer)return(async function(a){for(var o=[],l=0;;){let{done:c,value:h}=await a.read();if(c)break;o.push(h),l+=h.length}if(o.length===0)return new Uint8Array(0);if(o.length===1)return o[0];a=new Uint8Array(l),l=0;for(let c of o)a.set(c,l),l+=c.length;return a})(s.modelAssetBuffer).then(a=>{i?vf(this,a,r):Xf(this,a),this.u(),this.M()})}return this.u(),this.M(),Promise.resolve()}M(){}ka(){var e;if(this.h.ka(t=>{e=G3(t)}),!e)throw Error("Failed to retrieve CalculatorGraphConfig");return e}setGraph(e,t){this.h.attachErrorListener((i,n)=>{this.L.push(Error(n))}),this.h.Za(),this.h.setGraph(e,t),this.o?.ya(),this.F=void 0,M_(this)}finishProcessing(e){this.h.finishProcessing(),M_(this),this.o&&e!==void 0&&this.o.za(e)}close(){this.F=void 0,this.o?.xa(),this.o?.close(),this.h.closeGraph()}};function Di(e,t){if(!e)throw Error(`Unable to obtain required WebGL resource: ${t}`);return e}mu.prototype.close=mu.prototype.close;var qf=class{constructor(t,i,n,s){this.h=t,this.i=i,this.o=n,this.l=s}bind(){this.h.bindVertexArray(this.i)}close(){this.h.deleteVertexArray(this.i),this.h.deleteBuffer(this.o),this.h.deleteBuffer(this.l)}};function b_(e,t,i){var n=e.h;if(i=Di(n.createShader(i),"Failed to create WebGL shader"),n.shaderSource(i,t),n.compileShader(i),!n.getShaderParameter(i,n.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${n.getShaderInfoLog(i)}`);return n.attachShader(e.i,i),i}function T_(e,t){var i=e.h,n=Di(i.createVertexArray(),"Failed to create vertex array");i.bindVertexArray(n);var s=Di(i.createBuffer(),"Failed to create buffer");i.bindBuffer(i.ARRAY_BUFFER,s),i.enableVertexAttribArray(e.G),i.vertexAttribPointer(e.G,2,i.FLOAT,!1,0,0),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),i.STATIC_DRAW);var r=Di(i.createBuffer(),"Failed to create buffer");return i.bindBuffer(i.ARRAY_BUFFER,r),i.enableVertexAttribArray(e.L),i.vertexAttribPointer(e.L,2,i.FLOAT,!1,0,0),i.bufferData(i.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),i.STATIC_DRAW),i.bindBuffer(i.ARRAY_BUFFER,null),i.bindVertexArray(null),new qf(i,n,s,r)}function Gp(e,t){if(e.h){if(t!==e.h)throw Error("Cannot change GL context once initialized")}else e.h=t}function El(e,t,i,n){return Gp(e,t),e.i||(e.o(),e.J()),i?(e.m||(e.m=T_(e,!0)),i=e.m):(e.F||(e.F=T_(e,!1)),i=e.F),t.useProgram(e.i),i.bind(),e.l(),e=n(),i.h.bindVertexArray(null),e}function tr(e,t,i){return Gp(e,t),e=Di(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,i??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,i??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),e}function Ou(e,t,i){Gp(e,t),e.D||(e.D=Di(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,e.D),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,i,0)}function Vp(e){e.h?.bindFramebuffer(e.h.FRAMEBUFFER,null)}var zr=class{C(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}o(){var e=this.h;if(this.i=Di(e.createProgram(),"Failed to create WebGL program"),this.ea=b_(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,e.VERTEX_SHADER),this.aa=b_(this,this.C(),e.FRAGMENT_SHADER),e.linkProgram(this.i),!e.getProgramParameter(this.i,e.LINK_STATUS))throw Error(`Error during program linking: ${e.getProgramInfoLog(this.i)}`);this.G=e.getAttribLocation(this.i,"aVertex"),this.L=e.getAttribLocation(this.i,"aTex")}J(){}l(){}close(){if(this.i){let e=this.h;e.deleteProgram(this.i),e.deleteShader(this.ea),e.deleteShader(this.aa)}this.D&&this.h.deleteFramebuffer(this.D),this.F&&this.F.close(),this.m&&this.m.close()}},DT=class extends zr{C(){return`
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
 `}J(){var e=this.h;e.activeTexture(e.TEXTURE1),this.v=tr(this,e,e.LINEAR),e.activeTexture(e.TEXTURE2),this.u=tr(this,e,e.NEAREST)}o(){super.o();var e=this.h;this.P=Di(e.getUniformLocation(this.i,"backgroundTexture"),"Uniform location"),this.Z=Di(e.getUniformLocation(this.i,"colorMappingTexture"),"Uniform location"),this.M=Di(e.getUniformLocation(this.i,"maskTexture"),"Uniform location")}l(){super.l();var e=this.h;e.uniform1i(this.M,0),e.uniform1i(this.P,1),e.uniform1i(this.Z,2)}close(){this.v&&this.h.deleteTexture(this.v),this.u&&this.h.deleteTexture(this.u),super.close()}},FT=class extends zr{C(){return`
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
 `}J(){var e=this.h;e.activeTexture(e.TEXTURE1),this.u=tr(this,e),e.activeTexture(e.TEXTURE2),this.v=tr(this,e)}o(){super.o();var e=this.h;this.M=Di(e.getUniformLocation(this.i,"defaultTexture"),"Uniform location"),this.P=Di(e.getUniformLocation(this.i,"overlayTexture"),"Uniform location"),this.K=Di(e.getUniformLocation(this.i,"maskTexture"),"Uniform location")}l(){super.l();var e=this.h;e.uniform1i(this.K,0),e.uniform1i(this.M,1),e.uniform1i(this.P,2)}close(){this.u&&this.h.deleteTexture(this.u),this.v&&this.h.deleteTexture(this.v),super.close()}};function Ss(e,t){switch(t){case 0:return e.h.find(i=>i instanceof Uint8Array);case 1:return e.h.find(i=>i instanceof Float32Array);case 2:return e.h.find(i=>typeof WebGLTexture<"u"&&i instanceof WebGLTexture);default:throw Error(`Type is not supported: ${t}`)}}function $f(e){var t=Ss(e,1);if(!t){if(t=Ss(e,0))t=new Float32Array(t).map(n=>n/255);else{t=new Float32Array(e.width*e.height);let n=ka(e);var i=Hp(e);if(Ou(i,n,Wv(e)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){i=new Float32Array(e.width*e.height*4),n.readPixels(0,0,e.width,e.height,n.RGBA,n.FLOAT,i);for(let s=0,r=0;s<t.length;++s,r+=4)t[s]=i[r]}else n.readPixels(0,0,e.width,e.height,n.RED,n.FLOAT,t)}e.h.push(t)}return t}function Wv(e){var t=Ss(e,2);if(!t){let i=ka(e);t=qv(e);let n=$f(e),s=Xv(e);i.texImage2D(i.TEXTURE_2D,0,s,e.width,e.height,0,i.RED,i.FLOAT,n),Yf(e)}return t}function ka(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.i||(e.i=Di(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.i}function Xv(e){if(e=ka(e),!zh)if(e.getExtension("EXT_color_buffer_float")&&e.getExtension("OES_texture_float_linear")&&e.getExtension("EXT_float_blend"))zh=e.R32F;else{if(!e.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");zh=e.R16F}return zh}function Hp(e){return e.l||(e.l=new zr),e.l}function qv(e){var t=ka(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);var i=Ss(e,2);return i||(i=tr(Hp(e),t,e.o?t.LINEAR:t.NEAREST),e.h.push(i),e.u=!0),t.bindTexture(t.TEXTURE_2D,i),i}function Yf(e){e.i.bindTexture(e.i.TEXTURE_2D,null)}var zh,Ye=class{constructor(e,t,i,n,s,r,a){this.h=e,this.o=t,this.u=i,this.canvas=n,this.l=s,this.width=r,this.height=a,this.u&&--E_===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ua(){return!!Ss(this,0)}ua(){return!!Ss(this,1)}X(){return!!Ss(this,2)}ta(){return(t=Ss(e=this,0))||(t=$f(e),t=new Uint8Array(t.map(i=>Math.round(255*i))),e.h.push(t)),t;var e,t}sa(){return $f(this)}T(){return Wv(this)}clone(){var e=[];for(let t of this.h){let i;if(t instanceof Uint8Array)i=new Uint8Array(t);else if(t instanceof Float32Array)i=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{let n=ka(this),s=Hp(this);n.activeTexture(n.TEXTURE1),i=tr(s,n,this.o?n.LINEAR:n.NEAREST),n.bindTexture(n.TEXTURE_2D,i);let r=Xv(this);n.texImage2D(n.TEXTURE_2D,0,r,this.width,this.height,0,n.RED,n.FLOAT,null),n.bindTexture(n.TEXTURE_2D,null),Ou(s,n,i),El(s,n,!1,()=>{qv(this),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.drawArrays(n.TRIANGLE_FAN,0,4),Yf(this)}),Vp(s),Yf(this)}}e.push(i)}return new Ye(e,this.o,this.X(),this.canvas,this.l,this.width,this.height)}close(){this.u&&ka(this).deleteTexture(Ss(this,2)),E_=-1}};Ye.prototype.close=Ye.prototype.close,Ye.prototype.clone=Ye.prototype.clone,Ye.prototype.getAsWebGLTexture=Ye.prototype.T,Ye.prototype.getAsFloat32Array=Ye.prototype.sa,Ye.prototype.getAsUint8Array=Ye.prototype.ta,Ye.prototype.hasWebGLTexture=Ye.prototype.X,Ye.prototype.hasFloat32Array=Ye.prototype.ua,Ye.prototype.hasUint8Array=Ye.prototype.Ua;var E_=250,UT={color:"white",lineWidth:4,radius:6};function xf(e){return{...UT,fillColor:(e=e||{}).color,...e}}function vs(e,t){return e instanceof Function?e(t):e}function w_(e,t,i){return Math.max(Math.min(t,i),Math.min(Math.max(t,i),e))}function nl(e){if(!e.l)throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");return e.l}function fl(e){if(!e.u)throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");return e.u}function A_(e,t,i){if(t.X())i(t.T());else{let n=t.ua()?t.sa():t.ta();e.o=e.o??new zr;let s=fl(e);i((e=new Ye([n],t.o,!1,s.canvas,e.o,t.width,t.height)).T()),e.close()}}function R_(e,t,i,n){var s=(function(o){return o.h||(o.h=new DT),o.h})(e),r=fl(e),a=Array.isArray(i)?new ImageData(new Uint8ClampedArray(i),1,1):i;El(s,r,!0,()=>{(function(l,c,h,d){var u=l.h;if(u.activeTexture(u.TEXTURE0),u.bindTexture(u.TEXTURE_2D,c),u.activeTexture(u.TEXTURE1),u.bindTexture(u.TEXTURE_2D,l.v),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,u.RGBA,u.UNSIGNED_BYTE,h),l.K&&(function(f,g){if(f!==g)return!1;f=f.entries(),g=g.entries();for(let[y,p]of f){f=y;let m=p,b=g.next();if(b.done)return!1;let[A,S]=b.value;if(f!==A||m[0]!==S[0]||m[1]!==S[1]||m[2]!==S[2]||m[3]!==S[3])return!1}return!!g.next().done})(l.K,d))u.activeTexture(u.TEXTURE2),u.bindTexture(u.TEXTURE_2D,l.u);else{l.K=d;let f=Array(1024).fill(0);d.forEach((g,y)=>{if(g.length!==4)throw Error(`Color at index ${y} is not a four-channel value.`);f[4*y]=g[0],f[4*y+1]=g[1],f[4*y+2]=g[2],f[4*y+3]=g[3]}),u.activeTexture(u.TEXTURE2),u.bindTexture(u.TEXTURE_2D,l.u),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,256,1,0,u.RGBA,u.UNSIGNED_BYTE,new Uint8Array(f))}})(s,t,a,n),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4);var o=s.h;o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,null),o.activeTexture(o.TEXTURE1),o.bindTexture(o.TEXTURE_2D,null),o.activeTexture(o.TEXTURE2),o.bindTexture(o.TEXTURE_2D,null)})}function C_(e,t,i,n){var s=fl(e),r=(function(l){return l.i||(l.i=new FT),l.i})(e),a=Array.isArray(i)?new ImageData(new Uint8ClampedArray(i),1,1):i,o=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n;El(r,s,!0,()=>{var l=r.h;l.activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,t),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,r.u),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,a),l.activeTexture(l.TEXTURE2),l.bindTexture(l.TEXTURE_2D,r.v),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,o),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLE_FAN,0,4),s.bindTexture(s.TEXTURE_2D,null),(l=r.h).activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,null),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,null),l.activeTexture(l.TEXTURE2),l.bindTexture(l.TEXTURE_2D,null)})}var ki=class{constructor(e,t){typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||e instanceof OffscreenCanvasRenderingContext2D?(this.l=e,this.u=t):this.u=e}Ma(e,t){if(e){var i=nl(this);t=xf(t),i.save();var n=i.canvas,s=0;for(let r of e)i.fillStyle=vs(t.fillColor,{index:s,from:r}),i.strokeStyle=vs(t.color,{index:s,from:r}),i.lineWidth=vs(t.lineWidth,{index:s,from:r}),(e=new Path2D).arc(r.x*n.width,r.y*n.height,vs(t.radius,{index:s,from:r}),0,2*Math.PI),i.fill(e),i.stroke(e),++s;i.restore()}}La(e,t,i){if(e&&t){var n=nl(this);i=xf(i),n.save();var s=n.canvas,r=0;for(let a of t){n.beginPath(),t=e[a.start];let o=e[a.end];t&&o&&(n.strokeStyle=vs(i.color,{index:r,from:t,to:o}),n.lineWidth=vs(i.lineWidth,{index:r,from:t,to:o}),n.moveTo(t.x*s.width,t.y*s.height),n.lineTo(o.x*s.width,o.y*s.height)),++r,n.stroke()}n.restore()}}Ia(e,t){var i=nl(this);t=xf(t),i.save(),i.beginPath(),i.lineWidth=vs(t.lineWidth,{}),i.strokeStyle=vs(t.color,{}),i.fillStyle=vs(t.fillColor,{}),i.moveTo(e.originX,e.originY),i.lineTo(e.originX+e.width,e.originY),i.lineTo(e.originX+e.width,e.originY+e.height),i.lineTo(e.originX,e.originY+e.height),i.lineTo(e.originX,e.originY),i.stroke(),i.fill(),i.restore()}Ja(e,t,i=[0,0,0,255]){this.l?(function(n,s,r,a){var o=fl(n);A_(n,s,l=>{R_(n,l,r,a),(l=nl(n)).drawImage(o.canvas,0,0,l.canvas.width,l.canvas.height)})})(this,e,i,t):R_(this,e.T(),i,t)}Ka(e,t,i){this.l?(function(n,s,r,a){var o=fl(n);A_(n,s,l=>{C_(n,l,r,a),(l=nl(n)).drawImage(o.canvas,0,0,l.canvas.width,l.canvas.height)})})(this,e,t,i):C_(this,e.T(),t,i)}close(){this.h?.close(),this.h=void 0,this.i?.close(),this.i=void 0,this.o?.close(),this.o=void 0}};function qn(e,t){switch(t){case 0:return e.h.find(i=>i instanceof ImageData);case 1:return e.h.find(i=>typeof ImageBitmap<"u"&&i instanceof ImageBitmap);case 2:return e.h.find(i=>typeof WebGLTexture<"u"&&i instanceof WebGLTexture);default:throw Error(`Type is not supported: ${t}`)}}function $v(e){var t=qn(e,0);if(!t){t=za(e);let i=Bu(e),n=new Uint8Array(e.width*e.height*4);Ou(i,t,Yh(e)),t.readPixels(0,0,e.width,e.height,t.RGBA,t.UNSIGNED_BYTE,n),Vp(i),t=new ImageData(new Uint8ClampedArray(n.buffer),e.width,e.height),e.h.push(t)}return t}function Yh(e){var t=qn(e,2);if(!t){let i=za(e);t=Kh(e);let n=qn(e,1)||$v(e);i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,n),rl(e)}return t}function za(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.i||(e.i=Di(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.i}function Bu(e){return e.l||(e.l=new zr),e.l}function Kh(e){var t=za(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);var i=qn(e,2);return i||(i=tr(Bu(e),t),e.h.push(i),e.o=!0),t.bindTexture(t.TEXTURE_2D,i),i}function rl(e){e.i.bindTexture(e.i.TEXTURE_2D,null)}function P_(e){var t=za(e);return El(Bu(e),t,!0,()=>(function(i,n){var s=i.canvas;if(s.width===i.width&&s.height===i.height)return n();var r=s.width,a=s.height;return s.width=i.width,s.height=i.height,i=n(),s.width=r,s.height=a,i})(e,()=>{if(t.bindFramebuffer(t.FRAMEBUFFER,null),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLE_FAN,0,4),!(e.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return e.canvas.transferToImageBitmap()}))}ki.prototype.close=ki.prototype.close,ki.prototype.drawConfidenceMask=ki.prototype.Ka,ki.prototype.drawCategoryMask=ki.prototype.Ja,ki.prototype.drawBoundingBox=ki.prototype.Ia,ki.prototype.drawConnectors=ki.prototype.La,ki.prototype.drawLandmarks=ki.prototype.Ma,ki.lerp=function(e,t,i,n,s){return w_(n*(1-(e-t)/(i-t))+s*(1-(i-e)/(i-t)),n,s)},ki.clamp=w_;var _i=class{constructor(e,t,i,n,s,r,a){this.h=e,this.u=t,this.o=i,this.canvas=n,this.l=s,this.width=r,this.height=a,(this.u||this.o)&&--I_===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ta(){return!!qn(this,0)}va(){return!!qn(this,1)}X(){return!!qn(this,2)}Qa(){return $v(this)}Pa(){var e=qn(this,1);return e||(Yh(this),Kh(this),e=P_(this),rl(this),this.h.push(e),this.u=!0),e}T(){return Yh(this)}clone(){var e=[];for(let t of this.h){let i;if(t instanceof ImageData)i=new ImageData(t.data,this.width,this.height);else if(t instanceof WebGLTexture){let n=za(this),s=Bu(this);n.activeTexture(n.TEXTURE1),i=tr(s,n),n.bindTexture(n.TEXTURE_2D,i),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,this.width,this.height,0,n.RGBA,n.UNSIGNED_BYTE,null),n.bindTexture(n.TEXTURE_2D,null),Ou(s,n,i),El(s,n,!1,()=>{Kh(this),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.drawArrays(n.TRIANGLE_FAN,0,4),rl(this)}),Vp(s),rl(this)}else{if(!(t instanceof ImageBitmap))throw Error(`Type is not supported: ${t}`);Yh(this),Kh(this),i=P_(this),rl(this)}e.push(i)}return new _i(e,this.va(),this.X(),this.canvas,this.l,this.width,this.height)}close(){this.u&&qn(this,1).close(),this.o&&za(this).deleteTexture(qn(this,2)),I_=-1}};_i.prototype.close=_i.prototype.close,_i.prototype.clone=_i.prototype.clone,_i.prototype.getAsWebGLTexture=_i.prototype.T,_i.prototype.getAsImageBitmap=_i.prototype.Pa,_i.prototype.getAsImageData=_i.prototype.Qa,_i.prototype.hasWebGLTexture=_i.prototype.X,_i.prototype.hasImageBitmap=_i.prototype.va,_i.prototype.hasImageData=_i.prototype.Ta;var I_=250;function Rn(...e){return e.map(([t,i])=>({start:t,end:i}))}var L_,OT=Hv((L_=Vv(Gv),class extends L_{get oa(){return this.j}Da(e,t,i){It(this,t,n=>{var[s,r]=zv(this,e,n);this.oa._addBoundTextureAsImageToStream(n,s,r,i)})}ha(e,t){Xn(this,e,t),It(this,e,i=>{this.oa._attachImageListener(i)})}ia(e,t){Js(this,e,t),It(this,e,i=>{this.oa._attachImageVectorListener(i)})}})),Cn=class extends OT{};async function le(e,t,i){return $h(e,i.canvas??(kp()?void 0:document.createElement("canvas")),t,i)}function Yv(e,t,i,n){if(e.o&&n!==void 0){var s=ue(e.baseOptions,uu,3);s?.h()||s?.l()?.h()?(++(s=e.o).h.U,s.i.set(n,performance.now())):(++(s=e.o).h.R,s.i.set(n,performance.now()))}if(e.qa){if(s=new mv,i?.regionOfInterest){if(!e.Ca)throw Error("This task doesn't support region-of-interest.");let r=i.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Nt(s,1,(r.left+r.right)/2),Nt(s,2,(r.top+r.bottom)/2),Nt(s,4,r.right-r.left),Nt(s,3,r.bottom-r.top)}else Nt(s,1,.5),Nt(s,2,.5),Nt(s,4,1),Nt(s,3,1);if(i?.rotationDegrees){if(i?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Nt(s,5,-Math.PI*i.rotationDegrees/180),i?.rotationDegrees%180!=0){let[r,a]=zp(t);i=Li(s,4)*r/a,Nt(s,4,Li(s,3)*a/r),Nt(s,3,i)}}e.h.addProtoToStream(s.h(),"mediapipe.NormalizedRect",e.qa,n)}e.h.Da(t,e.Ba,n??performance.now()),e.finishProcessing(n)}function Pn(e,t,i){if(e.K)throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");Yv(e,t,i,e.J+1)}function ts(e,t,i,n){if(!e.K)throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");Yv(e,t,i,n)}function Ga(e,t,i,n){var s=t.data,r=t.width,a=r*(t=t.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==a)throw Error("Unsupported channel count: "+s.length/a);return e=new Ye([s],i,!1,e.h.j.canvas,e.ea,r,t),n?e.clone():e}var ji=class extends mu{constructor(e,t,i,n){super(e),this.h=e,this.Ba=t,this.qa=i,this.Ca=n,this.ea=new zr,this.K=!1}l(e,t=!0,i=!1,n=!1){if("runningMode"in e){var s=this.K=!!e.runningMode&&e.runningMode!=="IMAGE";$t(this.baseOptions,2,s==null?s:Qh(s))}if(e.canvas!==void 0&&this.h.j.canvas!==e.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(e,t,i,n)}close(){this.ea.close(),super.close()}};ji.prototype.close=ji.prototype.close;var hn=class extends ji{constructor(e,t){super(new Cn(e,t),"image_in","norm_rect_in",!1),this.m={detections:[]},Lt(e=this.i=new Du,0,1,t=new ke),Nt(this.i,2,.5),Nt(this.i,3,.3)}D(){return"FaceDetector"}get baseOptions(){return ue(this.i,ke,1)}set baseOptions(e){Lt(this.i,0,1,e)}A(e){return"minDetectionConfidence"in e&&Nt(this.i,2,e.minDetectionConfidence??.5),"minSuppressionThreshold"in e&&Nt(this.i,3,e.minSuppressionThreshold??.3),this.l(e)}H(e,t){return this.m={detections:[]},Pn(this,e,t),this.m}I(e,t,i){return this.m={detections:[]},ts(this,e,i,t),this.m}u(){var e=new tn;Be(e,"image_in"),Be(e,"norm_rect_in"),pe(e,"detections");var t=new Qi;jn(t,nT,this.i);var i=new Wi;Ji(i,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),De(i,"IMAGE:image_in"),De(i,"NORM_RECT:norm_rect_in"),re(i,"DETECTIONS:detections"),i.A(t),mn(e,i),this.h.attachProtoVectorListener("detections",(n,s)=>{for(let r of n)n=pv(r),this.m.detections.push(Ov(n));St(this,s)}),this.h.attachEmptyPacketListener("detections",n=>{St(this,n)}),e=e.h(),this.setGraph(new Uint8Array(e),!0)}};hn.prototype.detectForVideo=hn.prototype.I,hn.prototype.detect=hn.prototype.H,hn.prototype.setOptions=hn.prototype.A,hn.createFromModelPath=async function(e,t){return le(hn,e,{baseOptions:{modelAssetPath:t}})},hn.createFromModelBuffer=function(e,t){return le(hn,e,{baseOptions:{modelAssetBuffer:t}})},hn.createFromOptions=function(e,t){return le(hn,e,t)};var Wp=Rn([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Xp=Rn([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),qp=Rn([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),Kv=Rn([474,475],[475,476],[476,477],[477,474]),$p=Rn([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Yp=Rn([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),Zv=Rn([469,470],[470,471],[471,472],[472,469]),Kp=Rn([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),Jv=[...Wp,...Xp,...qp,...$p,...Yp,...Kp],jv=Rn([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function N_(e){e.m={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var he=class extends ji{constructor(e,t){super(new Cn(e,t),"image_in","norm_rect",!1),this.m={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Lt(e=this.i=new xv,0,1,t=new ke),this.C=new vv,Lt(this.i,0,3,this.C),this.v=new Du,Lt(this.i,0,2,this.v),Zn(this.v,4,1),Nt(this.v,2,.5),Nt(this.C,2,.5),Nt(this.i,4,.5)}D(){return"FaceLandmarker"}get baseOptions(){return ue(this.i,ke,1)}set baseOptions(e){Lt(this.i,0,1,e)}A(e){return"numFaces"in e&&Zn(this.v,4,e.numFaces??1),"minFaceDetectionConfidence"in e&&Nt(this.v,2,e.minFaceDetectionConfidence??.5),"minTrackingConfidence"in e&&Nt(this.i,4,e.minTrackingConfidence??.5),"minFacePresenceConfidence"in e&&Nt(this.C,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in e&&(this.outputFacialTransformationMatrixes=!!e.outputFacialTransformationMatrixes),this.l(e)}H(e,t){return N_(this),Pn(this,e,t),this.m}I(e,t,i){return N_(this),ts(this,e,i,t),this.m}u(){var e=new tn;Be(e,"image_in"),Be(e,"norm_rect"),pe(e,"face_landmarks");var t=new Qi;jn(t,rT,this.i);var i=new Wi;Ji(i,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),De(i,"IMAGE:image_in"),De(i,"NORM_RECT:norm_rect"),re(i,"NORM_LANDMARKS:face_landmarks"),i.A(t),mn(e,i),this.h.attachProtoVectorListener("face_landmarks",(n,s)=>{for(let r of n)n=bl(r),this.m.faceLandmarks.push(Tl(n));St(this,s)}),this.h.attachEmptyPacketListener("face_landmarks",n=>{St(this,n)}),this.outputFaceBlendshapes&&(pe(e,"blendshapes"),re(i,"BLENDSHAPES:blendshapes"),this.h.attachProtoVectorListener("blendshapes",(n,s)=>{if(this.outputFaceBlendshapes)for(let r of n)n=Nu(r),this.m.faceBlendshapes.push(Bp(n.h()??[]));St(this,s)}),this.h.attachEmptyPacketListener("blendshapes",n=>{St(this,n)})),this.outputFacialTransformationMatrixes&&(pe(e,"face_geometry"),re(i,"FACE_GEOMETRY:face_geometry"),this.h.attachProtoVectorListener("face_geometry",(n,s)=>{if(this.outputFacialTransformationMatrixes)for(let r of n)(n=ue(n=sT(r),$3,2))&&this.m.facialTransformationMatrixes.push({rows:fn(n,1)??0??0,columns:fn(n,2)??0??0,data:wr(n,3,Zi).slice()??[]});St(this,s)}),this.h.attachEmptyPacketListener("face_geometry",n=>{St(this,n)})),e=e.h(),this.setGraph(new Uint8Array(e),!0)}};he.prototype.detectForVideo=he.prototype.I,he.prototype.detect=he.prototype.H,he.prototype.setOptions=he.prototype.A,he.createFromModelPath=function(e,t){return le(he,e,{baseOptions:{modelAssetPath:t}})},he.createFromModelBuffer=function(e,t){return le(he,e,{baseOptions:{modelAssetBuffer:t}})},he.createFromOptions=function(e,t){return le(he,e,t)},he.FACE_LANDMARKS_LIPS=Wp,Re("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LIPS",he.FACE_LANDMARKS_LIPS),he.FACE_LANDMARKS_LEFT_EYE=Xp,Re("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYE",he.FACE_LANDMARKS_LEFT_EYE),he.FACE_LANDMARKS_LEFT_EYEBROW=qp,Re("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",he.FACE_LANDMARKS_LEFT_EYEBROW),he.FACE_LANDMARKS_LEFT_IRIS=Kv,Re("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS",he.FACE_LANDMARKS_LEFT_IRIS),he.FACE_LANDMARKS_RIGHT_EYE=$p,Re("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE",he.FACE_LANDMARKS_RIGHT_EYE),he.FACE_LANDMARKS_RIGHT_EYEBROW=Yp,Re("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",he.FACE_LANDMARKS_RIGHT_EYEBROW),he.FACE_LANDMARKS_RIGHT_IRIS=Zv,Re("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS",he.FACE_LANDMARKS_RIGHT_IRIS),he.FACE_LANDMARKS_FACE_OVAL=Kp,Re("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_FACE_OVAL",he.FACE_LANDMARKS_FACE_OVAL),he.FACE_LANDMARKS_CONTOURS=Jv,Re("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_CONTOURS",he.FACE_LANDMARKS_CONTOURS),he.FACE_LANDMARKS_TESSELATION=jv,Re("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_TESSELATION",he.FACE_LANDMARKS_TESSELATION);var Zp=Rn([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function D_(e){e.gestures=[],e.landmarks=[],e.worldLandmarks=[],e.handedness=[]}function F_(e){return e.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:e.gestures,landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handedness:e.handedness,handednesses:e.handedness}}function U_(e,t=!0){var i=[];for(let s of e){var n=Nu(s);e=[];for(let r of n.h())n=t&&fn(r,1)!=null?fn(r,1)??0:-1,e.push({score:Li(r,2)??0,index:n,categoryName:vi(Ne(r,3))??""??"",displayName:vi(Ne(r,4))??""??""});i.push(e)}return i}var zi=class extends ji{constructor(e,t){super(new Cn(e,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Lt(e=this.m=new Mv,0,1,t=new ke),this.v=new Dp,Lt(this.m,0,2,this.v),this.G=new Np,Lt(this.v,0,3,this.G),this.C=new Sv,Lt(this.v,0,2,this.C),this.i=new aT,Lt(this.m,0,3,this.i),Nt(this.C,2,.5),Nt(this.v,4,.5),Nt(this.G,2,.5)}D(){return"GestureRecognizer"}get baseOptions(){return ue(this.m,ke,1)}set baseOptions(e){Lt(this.m,0,1,e)}A(e){if(Zn(this.C,3,e.numHands??1),"minHandDetectionConfidence"in e&&Nt(this.C,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&Nt(this.v,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&Nt(this.G,2,e.minHandPresenceConfidence??.5),e.cannedGesturesClassifierOptions){var t=new Ea,i=t,n=kf(e.cannedGesturesClassifierOptions,ue(this.i,Ea,3)?.l());Lt(i,0,2,n),Lt(this.i,0,3,t)}else e.cannedGesturesClassifierOptions===void 0&&ue(this.i,Ea,3)?.h();return e.customGesturesClassifierOptions?(Lt(i=t=new Ea,0,2,n=kf(e.customGesturesClassifierOptions,ue(this.i,Ea,4)?.l())),Lt(this.i,0,4,t)):e.customGesturesClassifierOptions===void 0&&ue(this.i,Ea,4)?.h(),this.l(e)}Xa(e,t){return D_(this),Pn(this,e,t),F_(this)}Ya(e,t,i){return D_(this),ts(this,e,i,t),F_(this)}u(){var e=new tn;Be(e,"image_in"),Be(e,"norm_rect"),pe(e,"hand_gestures"),pe(e,"hand_landmarks"),pe(e,"world_hand_landmarks"),pe(e,"handedness");var t=new Qi;jn(t,oT,this.m);var i=new Wi;Ji(i,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),De(i,"IMAGE:image_in"),De(i,"NORM_RECT:norm_rect"),re(i,"HAND_GESTURES:hand_gestures"),re(i,"LANDMARKS:hand_landmarks"),re(i,"WORLD_LANDMARKS:world_hand_landmarks"),re(i,"HANDEDNESS:handedness"),i.A(t),mn(e,i),this.h.attachProtoVectorListener("hand_landmarks",(n,s)=>{for(let r of n)n=bl(r),this.landmarks.push(Tl(n));St(this,s)}),this.h.attachEmptyPacketListener("hand_landmarks",n=>{St(this,n)}),this.h.attachProtoVectorListener("world_hand_landmarks",(n,s)=>{for(let r of n)n=Ra(r),this.worldLandmarks.push(Ca(n));St(this,s)}),this.h.attachEmptyPacketListener("world_hand_landmarks",n=>{St(this,n)}),this.h.attachProtoVectorListener("hand_gestures",(n,s)=>{this.gestures.push(...U_(n,!1)),St(this,s)}),this.h.attachEmptyPacketListener("hand_gestures",n=>{St(this,n)}),this.h.attachProtoVectorListener("handedness",(n,s)=>{this.handedness.push(...U_(n)),St(this,s)}),this.h.attachEmptyPacketListener("handedness",n=>{St(this,n)}),e=e.h(),this.setGraph(new Uint8Array(e),!0)}};function O_(e){return{landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handednesses:e.handedness,handedness:e.handedness}}zi.prototype.recognizeForVideo=zi.prototype.Ya,zi.prototype.recognize=zi.prototype.Xa,zi.prototype.setOptions=zi.prototype.A,zi.createFromModelPath=function(e,t){return le(zi,e,{baseOptions:{modelAssetPath:t}})},zi.createFromModelBuffer=function(e,t){return le(zi,e,{baseOptions:{modelAssetBuffer:t}})},zi.createFromOptions=function(e,t){return le(zi,e,t)},zi.HAND_CONNECTIONS=Zp,Re("module$exports$google3$third_party$mediapipe$tasks$web$vision$gesture_recognizer$gesture_recognizer.GestureRecognizer.HAND_CONNECTIONS",zi.HAND_CONNECTIONS);var Ei=class extends ji{constructor(e,t){super(new Cn(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Lt(e=this.i=new Dp,0,1,t=new ke),this.v=new Np,Lt(this.i,0,3,this.v),this.m=new Sv,Lt(this.i,0,2,this.m),Zn(this.m,3,1),Nt(this.m,2,.5),Nt(this.v,2,.5),Nt(this.i,4,.5)}D(){return"HandLandmarker"}get baseOptions(){return ue(this.i,ke,1)}set baseOptions(e){Lt(this.i,0,1,e)}A(e){return"numHands"in e&&Zn(this.m,3,e.numHands??1),"minHandDetectionConfidence"in e&&Nt(this.m,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&Nt(this.i,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&Nt(this.v,2,e.minHandPresenceConfidence??.5),this.l(e)}H(e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Pn(this,e,t),O_(this)}I(e,t,i){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],ts(this,e,i,t),O_(this)}u(){var e=new tn;Be(e,"image_in"),Be(e,"norm_rect"),pe(e,"hand_landmarks"),pe(e,"world_hand_landmarks"),pe(e,"handedness");var t=new Qi;jn(t,lT,this.i);var i=new Wi;Ji(i,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),De(i,"IMAGE:image_in"),De(i,"NORM_RECT:norm_rect"),re(i,"LANDMARKS:hand_landmarks"),re(i,"WORLD_LANDMARKS:world_hand_landmarks"),re(i,"HANDEDNESS:handedness"),i.A(t),mn(e,i),this.h.attachProtoVectorListener("hand_landmarks",(n,s)=>{for(let r of n)n=bl(r),this.landmarks.push(Tl(n));St(this,s)}),this.h.attachEmptyPacketListener("hand_landmarks",n=>{St(this,n)}),this.h.attachProtoVectorListener("world_hand_landmarks",(n,s)=>{for(let r of n)n=Ra(r),this.worldLandmarks.push(Ca(n));St(this,s)}),this.h.attachEmptyPacketListener("world_hand_landmarks",n=>{St(this,n)}),this.h.attachProtoVectorListener("handedness",(n,s)=>{var r=this.handedness,a=r.push,o=[];for(let l of n){n=Nu(l);let c=[];for(let h of n.h())c.push({score:Li(h,2)??0,index:fn(h,1)??0??-1,categoryName:vi(Ne(h,3))??""??"",displayName:vi(Ne(h,4))??""??""});o.push(c)}a.call(r,...o),St(this,s)}),this.h.attachEmptyPacketListener("handedness",n=>{St(this,n)}),e=e.h(),this.setGraph(new Uint8Array(e),!0)}};Ei.prototype.detectForVideo=Ei.prototype.I,Ei.prototype.detect=Ei.prototype.H,Ei.prototype.setOptions=Ei.prototype.A,Ei.createFromModelPath=function(e,t){return le(Ei,e,{baseOptions:{modelAssetPath:t}})},Ei.createFromModelBuffer=function(e,t){return le(Ei,e,{baseOptions:{modelAssetBuffer:t}})},Ei.createFromOptions=function(e,t){return le(Ei,e,t)},Ei.HAND_CONNECTIONS=Zp,Re("module$exports$google3$third_party$mediapipe$tasks$web$vision$hand_landmarker$hand_landmarker.HandLandmarker.HAND_CONNECTIONS",Ei.HAND_CONNECTIONS);var Qv=Rn([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function B_(e){e.i={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function k_(e){try{if(!e.G)return e.i;e.G(e.i)}finally{Uu(e)}}function Gh(e,t){e=bl(e),t.push(Tl(e))}var ie=class extends ji{constructor(e,t){super(new Cn(e,t),"input_frames_image",null,!1),this.i={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Lt(e=this.m=new Av,0,1,t=new ke),this.Z=new Np,Lt(this.m,0,2,this.Z),this.Aa=new cT,Lt(this.m,0,3,this.Aa),this.v=new Du,Lt(this.m,0,4,this.v),this.P=new vv,Lt(this.m,0,5,this.P),this.C=new Ev,Lt(this.m,0,6,this.C),this.aa=new wv,Lt(this.m,0,7,this.aa),Nt(this.v,2,.5),Nt(this.v,3,.3),Nt(this.P,2,.5),Nt(this.C,2,.5),Nt(this.C,3,.3),Nt(this.aa,2,.5),Nt(this.Z,2,.5)}D(){return"HolisticLandmarker"}get baseOptions(){return ue(this.m,ke,1)}set baseOptions(e){Lt(this.m,0,1,e)}A(e){return"minFaceDetectionConfidence"in e&&Nt(this.v,2,e.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in e&&Nt(this.v,3,e.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in e&&Nt(this.P,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"minPoseDetectionConfidence"in e&&Nt(this.C,2,e.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in e&&Nt(this.C,3,e.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in e&&Nt(this.aa,2,e.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in e&&(this.outputPoseSegmentationMasks=!!e.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in e&&Nt(this.Z,2,e.minHandLandmarksConfidence??.5),this.l(e)}H(e,t,i){var n=typeof t!="function"?t:{};return this.G=typeof t=="function"?t:i,B_(this),Pn(this,e,n),k_(this)}I(e,t,i,n){var s=typeof i!="function"?i:{};return this.G=typeof i=="function"?i:n,B_(this),ts(this,e,s,t),k_(this)}u(){var e=new tn;Be(e,"input_frames_image"),pe(e,"pose_landmarks"),pe(e,"pose_world_landmarks"),pe(e,"face_landmarks"),pe(e,"left_hand_landmarks"),pe(e,"left_hand_world_landmarks"),pe(e,"right_hand_landmarks"),pe(e,"right_hand_world_landmarks");var t=new Qi,i=new Zg;Ji(i,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(s,r){if(r!=null)if(Array.isArray(r))$t(s,2,Su(r,0,hl));else{if(!(typeof r=="string"||r instanceof $n||jf(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");_l(s,2,_u(r,!1),Lr())}})(i,this.m.h());var n=new Wi;Ji(n,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),ul(n,8,Zg,i),De(n,"IMAGE:input_frames_image"),re(n,"POSE_LANDMARKS:pose_landmarks"),re(n,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),re(n,"FACE_LANDMARKS:face_landmarks"),re(n,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),re(n,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),re(n,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),re(n,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),n.A(t),mn(e,n),Fu(this,e),this.h.attachProtoListener("pose_landmarks",(s,r)=>{Gh(s,this.i.poseLandmarks),St(this,r)}),this.h.attachEmptyPacketListener("pose_landmarks",s=>{St(this,s)}),this.h.attachProtoListener("pose_world_landmarks",(s,r)=>{var a=this.i.poseWorldLandmarks;s=Ra(s),a.push(Ca(s)),St(this,r)}),this.h.attachEmptyPacketListener("pose_world_landmarks",s=>{St(this,s)}),this.outputPoseSegmentationMasks&&(re(n,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Ba(this,"pose_segmentation_mask"),this.h.ha("pose_segmentation_mask",(s,r)=>{this.i.poseSegmentationMasks=[Ga(this,s,!0,!this.G)],St(this,r)}),this.h.attachEmptyPacketListener("pose_segmentation_mask",s=>{this.i.poseSegmentationMasks=[],St(this,s)})),this.h.attachProtoListener("face_landmarks",(s,r)=>{Gh(s,this.i.faceLandmarks),St(this,r)}),this.h.attachEmptyPacketListener("face_landmarks",s=>{St(this,s)}),this.outputFaceBlendshapes&&(pe(e,"extra_blendshapes"),re(n,"FACE_BLENDSHAPES:extra_blendshapes"),this.h.attachProtoListener("extra_blendshapes",(s,r)=>{var a=this.i.faceBlendshapes;this.outputFaceBlendshapes&&(s=Nu(s),a.push(Bp(s.h()??[]))),St(this,r)}),this.h.attachEmptyPacketListener("extra_blendshapes",s=>{St(this,s)})),this.h.attachProtoListener("left_hand_landmarks",(s,r)=>{Gh(s,this.i.leftHandLandmarks),St(this,r)}),this.h.attachEmptyPacketListener("left_hand_landmarks",s=>{St(this,s)}),this.h.attachProtoListener("left_hand_world_landmarks",(s,r)=>{var a=this.i.leftHandWorldLandmarks;s=Ra(s),a.push(Ca(s)),St(this,r)}),this.h.attachEmptyPacketListener("left_hand_world_landmarks",s=>{St(this,s)}),this.h.attachProtoListener("right_hand_landmarks",(s,r)=>{Gh(s,this.i.rightHandLandmarks),St(this,r)}),this.h.attachEmptyPacketListener("right_hand_landmarks",s=>{St(this,s)}),this.h.attachProtoListener("right_hand_world_landmarks",(s,r)=>{var a=this.i.rightHandWorldLandmarks;s=Ra(s),a.push(Ca(s)),St(this,r)}),this.h.attachEmptyPacketListener("right_hand_world_landmarks",s=>{St(this,s)}),e=e.h(),this.setGraph(new Uint8Array(e),!0)}};ie.prototype.detectForVideo=ie.prototype.I,ie.prototype.detect=ie.prototype.H,ie.prototype.setOptions=ie.prototype.A,ie.createFromModelPath=function(e,t){return le(ie,e,{baseOptions:{modelAssetPath:t}})},ie.createFromModelBuffer=function(e,t){return le(ie,e,{baseOptions:{modelAssetBuffer:t}})},ie.createFromOptions=function(e,t){return le(ie,e,t)},ie.HAND_CONNECTIONS=Zp,Re("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.HAND_CONNECTIONS",ie.HAND_CONNECTIONS),ie.POSE_CONNECTIONS=Qv,Re("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.POSE_CONNECTIONS",ie.POSE_CONNECTIONS),ie.FACE_LANDMARKS_LIPS=Wp,Re("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LIPS",ie.FACE_LANDMARKS_LIPS),ie.FACE_LANDMARKS_LEFT_EYE=Xp,Re("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYE",ie.FACE_LANDMARKS_LEFT_EYE),ie.FACE_LANDMARKS_LEFT_EYEBROW=qp,Re("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",ie.FACE_LANDMARKS_LEFT_EYEBROW),ie.FACE_LANDMARKS_LEFT_IRIS=Kv,Re("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_IRIS",ie.FACE_LANDMARKS_LEFT_IRIS),ie.FACE_LANDMARKS_RIGHT_EYE=$p,Re("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYE",ie.FACE_LANDMARKS_RIGHT_EYE),ie.FACE_LANDMARKS_RIGHT_EYEBROW=Yp,Re("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",ie.FACE_LANDMARKS_RIGHT_EYEBROW),ie.FACE_LANDMARKS_RIGHT_IRIS=Zv,Re("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_IRIS",ie.FACE_LANDMARKS_RIGHT_IRIS),ie.FACE_LANDMARKS_FACE_OVAL=Kp,Re("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_FACE_OVAL",ie.FACE_LANDMARKS_FACE_OVAL),ie.FACE_LANDMARKS_CONTOURS=Jv,Re("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_CONTOURS",ie.FACE_LANDMARKS_CONTOURS),ie.FACE_LANDMARKS_TESSELATION=jv,Re("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_TESSELATION",ie.FACE_LANDMARKS_TESSELATION);var un=class extends ji{constructor(e,t){super(new Cn(e,t),"input_image","norm_rect",!0),this.m={classifications:[]},Lt(e=this.i=new Rv,0,1,t=new ke)}D(){return"ImageClassifier"}get baseOptions(){return ue(this.i,ke,1)}set baseOptions(e){Lt(this.i,0,1,e)}A(e){return Lt(this.i,0,2,kf(e,ue(this.i,Ip,2))),this.l(e)}Ga(e,t){return this.m={classifications:[]},Pn(this,e,t),this.m}Ha(e,t,i){return this.m={classifications:[]},ts(this,e,i,t),this.m}u(){var e=new tn;Be(e,"input_image"),Be(e,"norm_rect"),pe(e,"classifications");var t=new Qi;jn(t,hT,this.i);var i=new Wi;Ji(i,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),De(i,"IMAGE:input_image"),De(i,"NORM_RECT:norm_rect"),re(i,"CLASSIFICATIONS:classifications"),i.A(t),mn(e,i),this.h.attachProtoListener("classifications",(n,s)=>{this.m=yT(Z3(n)),St(this,s)}),this.h.attachEmptyPacketListener("classifications",n=>{St(this,n)}),e=e.h(),this.setGraph(new Uint8Array(e),!0)}};un.prototype.classifyForVideo=un.prototype.Ha,un.prototype.classify=un.prototype.Ga,un.prototype.setOptions=un.prototype.A,un.createFromModelPath=function(e,t){return le(un,e,{baseOptions:{modelAssetPath:t}})},un.createFromModelBuffer=function(e,t){return le(un,e,{baseOptions:{modelAssetBuffer:t}})},un.createFromOptions=function(e,t){return le(un,e,t)};var Ki=class extends ji{constructor(e,t){super(new Cn(e,t),"image_in","norm_rect",!0),this.i=new Cv,this.embeddings={embeddings:[]},Lt(e=this.i,0,1,t=new ke)}D(){return"ImageEmbedder"}get baseOptions(){return ue(this.i,ke,1)}set baseOptions(e){Lt(this.i,0,1,e)}A(e){var t=this.i,i=ue(this.i,s_,2);if(i=i?i.clone():new s_,e.l2Normalize!==void 0){var n=e.l2Normalize;$t(i,1,n==null?n:Qh(n))}else"l2Normalize"in e&&$t(i,1);return e.quantize!==void 0?$t(i,2,(n=e.quantize)==null?n:Qh(n)):"quantize"in e&&$t(i,2),Lt(t,0,2,i),this.l(e)}Na(e,t){return Pn(this,e,t),this.embeddings}Oa(e,t,i){return ts(this,e,i,t),this.embeddings}u(){var e=new tn;Be(e,"image_in"),Be(e,"norm_rect"),pe(e,"embeddings_out");var t=new Qi;jn(t,uT,this.i);var i=new Wi;Ji(i,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),De(i,"IMAGE:image_in"),De(i,"NORM_RECT:norm_rect"),re(i,"EMBEDDINGS:embeddings_out"),i.A(t),mn(e,i),this.h.attachProtoListener("embeddings_out",(n,s)=>{n=tT(n),this.embeddings=(function(r){return{embeddings:Br(r,Q3,1).map(a=>{var o={headIndex:fn(a,3)??0??-1,headName:vi(Ne(a,4))??""??""};if(_1(a,1,qh))a=wr(a=Cf(a,J3,1,qh),1,Zi),o.floatEmbedding=a.slice();else{let l=new Uint8Array(0);o.quantizedEmbedding=Cf(a,j3,2,qh)?.h()?.i()??l}return o}),timestampMs:Uv(Ne(r,2,void 0,eu)??m1)}})(n),St(this,s)}),this.h.attachEmptyPacketListener("embeddings_out",n=>{St(this,n)}),e=e.h(),this.setGraph(new Uint8Array(e),!0)}};Ki.cosineSimilarity=function(e,t){if(e.floatEmbedding&&t.floatEmbedding)e=c_(e.floatEmbedding,t.floatEmbedding);else{if(!e.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");e=c_(l_(e.quantizedEmbedding),l_(t.quantizedEmbedding))}return e},Ki.prototype.embedForVideo=Ki.prototype.Oa,Ki.prototype.embed=Ki.prototype.Na,Ki.prototype.setOptions=Ki.prototype.A,Ki.createFromModelPath=function(e,t){return le(Ki,e,{baseOptions:{modelAssetPath:t}})},Ki.createFromModelBuffer=function(e,t){return le(Ki,e,{baseOptions:{modelAssetBuffer:t}})},Ki.createFromOptions=function(e,t){return le(Ki,e,t)};var Kf=class{constructor(e,t,i){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=i}close(){this.confidenceMasks?.forEach(e=>{e.close()}),this.categoryMask?.close()}};function BT(e){var t=(function(i){return Br(i,Wi,1)})(e.ka()).filter(i=>(vi(Ne(i,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(e.v=[],t.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&(ue(t[0],Qi,7)?.u()?.h()??new Map).forEach((i,n)=>{e.v[Number(n)]=vi(Ne(i,1))??""})}function z_(e){e.categoryMask=void 0,e.confidenceMasks=void 0,e.qualityScores=void 0}function G_(e){try{let t=new Kf(e.confidenceMasks,e.categoryMask,e.qualityScores);if(!e.m)return t;e.m(t)}finally{Uu(e)}}Kf.prototype.close=Kf.prototype.close;var Gi=class extends ji{constructor(e,t){super(new Cn(e,t),"image_in","norm_rect",!1),this.v=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.i=new Op,this.C=new Pv,Lt(this.i,0,3,this.C),Lt(e=this.i,0,1,t=new ke)}D(){return"ImageSegmenter"}get baseOptions(){return ue(this.i,ke,1)}set baseOptions(e){Lt(this.i,0,1,e)}A(e){return e.displayNamesLocale!==void 0?$t(this.i,2,Ms(e.displayNamesLocale)):"displayNamesLocale"in e&&$t(this.i,2),"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}M(){BT(this)}segment(e,t,i){var n=typeof t!="function"?t:{};return this.m=typeof t=="function"?t:i,z_(this),Pn(this,e,n),G_(this)}cb(e,t,i,n){var s=typeof i!="function"?i:{};return this.m=typeof i=="function"?i:n,z_(this),ts(this,e,s,t),G_(this)}Ra(){return this.v}u(){var e=new tn;Be(e,"image_in"),Be(e,"norm_rect");var t=new Qi;jn(t,Lv,this.i);var i=new Wi;Ji(i,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),De(i,"IMAGE:image_in"),De(i,"NORM_RECT:norm_rect"),i.A(t),mn(e,i),Fu(this,e),this.outputConfidenceMasks&&(pe(e,"confidence_masks"),re(i,"CONFIDENCE_MASKS:confidence_masks"),Ba(this,"confidence_masks"),this.h.ia("confidence_masks",(n,s)=>{this.confidenceMasks=n.map(r=>Ga(this,r,!0,!this.m)),St(this,s)}),this.h.attachEmptyPacketListener("confidence_masks",n=>{this.confidenceMasks=[],St(this,n)})),this.outputCategoryMask&&(pe(e,"category_mask"),re(i,"CATEGORY_MASK:category_mask"),Ba(this,"category_mask"),this.h.ha("category_mask",(n,s)=>{this.categoryMask=Ga(this,n,!1,!this.m),St(this,s)}),this.h.attachEmptyPacketListener("category_mask",n=>{this.categoryMask=void 0,St(this,n)})),pe(e,"quality_scores"),re(i,"QUALITY_SCORES:quality_scores"),this.h.attachFloatVectorListener("quality_scores",(n,s)=>{this.qualityScores=n,St(this,s)}),this.h.attachEmptyPacketListener("quality_scores",n=>{this.categoryMask=void 0,St(this,n)}),e=e.h(),this.setGraph(new Uint8Array(e),!0)}};Gi.prototype.getLabels=Gi.prototype.Ra,Gi.prototype.segmentForVideo=Gi.prototype.cb,Gi.prototype.segment=Gi.prototype.segment,Gi.prototype.setOptions=Gi.prototype.A,Gi.createFromModelPath=function(e,t){return le(Gi,e,{baseOptions:{modelAssetPath:t}})},Gi.createFromModelBuffer=function(e,t){return le(Gi,e,{baseOptions:{modelAssetBuffer:t}})},Gi.createFromOptions=function(e,t){return le(Gi,e,t)};var kT={0:0,1:1,2:2,3:3};function yf(){return kp()?void 0:document.createElement("canvas")}var Vi=class extends mu{constructor(e,t){super(new LT(e,t)),this.v=new zr,this.delegate="CPU",this.i=0,this.baseOptions=new ke,this.C=this.m=0}D(){return"InteractiveSegmenter"}get j(){return this.h.j}A(e){return this.delegate=e.baseOptions?.delegate??"CPU",super.l(e)}eb(e){if(this.i===0)throw Error("Segmenter is not initialized.");var t;if(this.m!==0&&(this.j._free(this.m),this.m=0),!(t=typeof ImageData<"u"&&e instanceof ImageData))if(typeof e!="object"||e===null)t=!1;else{t=e.data;var i=e.width,n=e.height;t=Number.isInteger(i)&&i>0&&Number.isInteger(n)&&n>0&&(t instanceof Uint8ClampedArray||t instanceof Uint8Array)}if(t)t=e.width,i=e.height,e=e.data;else{if([t,i]=zp(e),typeof OffscreenCanvas<"u")n=new OffscreenCanvas(t,i);else{if(typeof document>"u")throw Error("Canvas is not supported in this environment.");n=document.createElement("canvas")}if(n.width=t,n.height=i,!(n=n.getContext("2d")))throw Error("Canvas 2D context is not supported in this environment.");n.drawImage(e,0,0),e=n.getImageData(0,0,t,i).data}if(!e)throw Error("Unsupported image source or failed to extract image pixels.");n=(function({Wa:r,width:a,height:o}){if(a<=0||o<=0)throw Error(`Invalid image dimensions: ${a}x${o}. Dimensions must be positive.`);if(r%(a*o)!==0)throw Error(`Invalid image dimensions or pixel data length. Pixel data length ${r} is not a multiple of the number of pixels (${a*o}).`);if((r/=a*o)!==4&&r!==3&&r!==1)throw Error(`Invalid image dimensions or pixel data length. Calculated channels: ${r}. Expected 1, 3, or 4.`);return r})({Wa:e.length,width:t,height:i});var s=this.j._malloc(e.length);if(this.j.HEAPU8.set(e,s),this.m=s,!this.j._interactive_segmenter_set_image(this.i,s,t,i,n))throw Error("Failed to set image on native engine.")}segment(e){if(this.i===0)throw Error("Segmenter is not initialized.");var t=(function(c){c=c.map(({isCompleted:d,brushMode:u,point:f})=>{u=kT[u]??0,f=f.map(({x:y,y:p})=>{var m=new fT;return wa(m,1,y),wa(m,2,p),m});var g=new pT;return Pf(g,d),_l(g,1,Ts(u),0),Rf(g,2,f),g});var h=new mT;return Rf(h,1,c),gT(h)})(e);e=this.j._malloc(t.length),this.j.HEAPU8.set(t,e);var i=this.j._malloc(12),n=i+4,s=i+8,r=0,a=this.C++;try{if(this.o)if(this.delegate==="GPU"){var o=this.o;++o.h.U,o.i.set(a,performance.now())}else{var l=this.o;++l.h.R,l.i.set(a,performance.now())}if((r=this.j._interactive_segmenter_segment(this.i,e,t.length,i,n,s))===0)throw Error("Segmentation failed.");this.o?.za(a);let c=this.j.HEAPU32[i/4],h=this.j.HEAPU32[n/4],d=new Float32Array(this.j.HEAPU8.buffer,r,this.j.HEAPU32[s/4]/4),u=new Float32Array(d);if(o=c*h,(u instanceof Uint8Array||u instanceof Float32Array)&&u.length!==o)throw Error("Unsupported channel count: "+u.length/o);return new Ye([u],!0,!1,this.h.j.canvas??void 0,this.v,c,h)}finally{e!==0&&this.j._free(e),i!==0&&this.j._free(i),r!==0&&this.j._free(r)}}u(){this.i!==0&&(this.o?.xa(),this.j._interactive_segmenter_close(this.i),this.i=0),this.m!==0&&(this.j._free(this.m),this.m=0);var e=new uu;if(this.delegate==="GPU"){var t=new sv;En(e,2,bs,t)}else Zn(t=new z3,1,4),En(e,1,bs,t);if(Lt(this.baseOptions,0,3,e),e=iT(this.baseOptions),t=this.j._malloc(e.length),this.j.HEAPU8.set(e,t),this.i=this.j._interactive_segmenter_create(t,e.length),this.j._free(t),this.i===0)throw Error("Failed to create native InteractiveSegmenter engine.");this.o?.ya()}close(){this.i!==0&&(this.j._interactive_segmenter_close(this.i),this.i=0),this.m!==0&&(this.j._free(this.m),this.m=0),this.v.close(),super.close()}};Vi.prototype.close=Vi.prototype.close,Vi.prototype.segment=Vi.prototype.segment,Vi.prototype.setImage=Vi.prototype.eb,Vi.prototype.setOptions=Vi.prototype.A,Vi.createFromModelPath=function(e,t){return $h(Vi,yf(),e,{baseOptions:{modelAssetPath:t}})},Vi.createFromModelBuffer=function(e,t){return $h(Vi,yf(),e,{baseOptions:{modelAssetBuffer:t}})},Vi.createFromOptions=function(e,t){var i=t.canvas??yf();return $h(Vi,i,e,t)};var Zf=class{constructor(e,t,i){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=i}close(){this.confidenceMasks?.forEach(e=>{e.close()}),this.categoryMask?.close()}};Zf.prototype.close=Zf.prototype.close;var Wn=class extends ji{constructor(e,t){super(new Cn(e,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.i=new Op,this.v=new Pv,Lt(this.i,0,3,this.v),Lt(e=this.i,0,1,t=new ke)}D(){return"InteractiveSegmenterLegacy"}get baseOptions(){return ue(this.i,ke,1)}set baseOptions(e){Lt(this.i,0,1,e)}A(e){return"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}segment(e,t,i,n){var s=typeof i!="function"?i:{};if(this.m=typeof i=="function"?i:n,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,i=this.J+1,n=new Nv,t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var r=new _f;Pf(r,!0),wa(r,1,t.keypoint.x),wa(r,2,t.keypoint.y),En(n,1,Bf,r)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");{let o=new _T;for(r of t.scribble)Pf(t=new _f,!0),wa(t,1,r.x),wa(t,2,r.y),ul(o,1,_f,t);En(n,2,Bf,o)}}this.h.addProtoToStream(n.h(),"mediapipe.tasks.vision.interactive_segmenter_legacy.proto.RegionOfInterest","roi_in",i),Pn(this,e,s);t:{try{let o=new Zf(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.m){var a=o;break t}this.m(o)}finally{Uu(this)}a=void 0}return a}u(){var e=new tn;Be(e,"image_in"),Be(e,"roi_in"),Be(e,"norm_rect_in");var t=new Qi;jn(t,Lv,this.i);var i=new Wi;Ji(i,2,"mediapipe.tasks.vision.interactive_segmenter_legacy.InteractiveSegmenterLegacyGraph"),De(i,"IMAGE:image_in"),De(i,"ROI:roi_in"),De(i,"NORM_RECT:norm_rect_in"),i.A(t),mn(e,i),Fu(this,e),this.outputConfidenceMasks&&(pe(e,"confidence_masks"),re(i,"CONFIDENCE_MASKS:confidence_masks"),Ba(this,"confidence_masks"),this.h.ia("confidence_masks",(n,s)=>{this.confidenceMasks=n.map(r=>Ga(this,r,!0,!this.m)),St(this,s)}),this.h.attachEmptyPacketListener("confidence_masks",n=>{this.confidenceMasks=[],St(this,n)})),this.outputCategoryMask&&(pe(e,"category_mask"),re(i,"CATEGORY_MASK:category_mask"),Ba(this,"category_mask"),this.h.ha("category_mask",(n,s)=>{this.categoryMask=Ga(this,n,!1,!this.m),St(this,s)}),this.h.attachEmptyPacketListener("category_mask",n=>{this.categoryMask=void 0,St(this,n)})),pe(e,"quality_scores"),re(i,"QUALITY_SCORES:quality_scores"),this.h.attachFloatVectorListener("quality_scores",(n,s)=>{this.qualityScores=n,St(this,s)}),this.h.attachEmptyPacketListener("quality_scores",n=>{this.categoryMask=void 0,St(this,n)}),e=e.h(),this.setGraph(new Uint8Array(e),!0)}};Wn.prototype.segment=Wn.prototype.segment,Wn.prototype.setOptions=Wn.prototype.A,Wn.createFromModelPath=function(e,t){return le(Wn,e,{baseOptions:{modelAssetPath:t}})},Wn.createFromModelBuffer=function(e,t){return le(Wn,e,{baseOptions:{modelAssetBuffer:t}})},Wn.createFromOptions=function(e,t){return le(Wn,e,t)};var dn=class extends ji{constructor(e,t){super(new Cn(e,t),"input_frame_gpu","norm_rect",!1),this.m={detections:[]},Lt(e=this.i=new Dv,0,1,t=new ke)}D(){return"ObjectDetector"}get baseOptions(){return ue(this.i,ke,1)}set baseOptions(e){Lt(this.i,0,1,e)}A(e){return e.displayNamesLocale!==void 0?$t(this.i,2,Ms(e.displayNamesLocale)):"displayNamesLocale"in e&&$t(this.i,2),e.maxResults!==void 0?Zn(this.i,3,e.maxResults):"maxResults"in e&&$t(this.i,3),e.scoreThreshold!==void 0?Nt(this.i,4,e.scoreThreshold):"scoreThreshold"in e&&$t(this.i,4),e.categoryAllowlist!==void 0?nu(this.i,5,e.categoryAllowlist):"categoryAllowlist"in e&&$t(this.i,5),e.categoryDenylist!==void 0?nu(this.i,6,e.categoryDenylist):"categoryDenylist"in e&&$t(this.i,6),this.l(e)}H(e,t){return this.m={detections:[]},Pn(this,e,t),this.m}I(e,t,i){return this.m={detections:[]},ts(this,e,i,t),this.m}u(){var e=new tn;Be(e,"input_frame_gpu"),Be(e,"norm_rect"),pe(e,"detections");var t=new Qi;jn(t,vT,this.i);var i=new Wi;Ji(i,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),De(i,"IMAGE:input_frame_gpu"),De(i,"NORM_RECT:norm_rect"),re(i,"DETECTIONS:detections"),i.A(t),mn(e,i),this.h.attachProtoVectorListener("detections",(n,s)=>{for(let r of n)n=pv(r),this.m.detections.push(Ov(n));St(this,s)}),this.h.attachEmptyPacketListener("detections",n=>{St(this,n)}),e=e.h(),this.setGraph(new Uint8Array(e),!0)}};dn.prototype.detectForVideo=dn.prototype.I,dn.prototype.detect=dn.prototype.H,dn.prototype.setOptions=dn.prototype.A,dn.createFromModelPath=async function(e,t){return le(dn,e,{baseOptions:{modelAssetPath:t}})},dn.createFromModelBuffer=function(e,t){return le(dn,e,{baseOptions:{modelAssetBuffer:t}})},dn.createFromOptions=function(e,t){return le(dn,e,t)};var Jf=class{constructor(e,t,i){this.landmarks=e,this.worldLandmarks=t,this.segmentationMasks=i}close(){this.segmentationMasks?.forEach(e=>{e.close()})}};function V_(e){e.landmarks=[],e.worldLandmarks=[],e.segmentationMasks=void 0}function H_(e){try{let t=new Jf(e.landmarks,e.worldLandmarks,e.segmentationMasks);if(!e.v)return t;e.v(t)}finally{Uu(e)}}Jf.prototype.close=Jf.prototype.close;var Hi=class extends ji{constructor(e,t){super(new Cn(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Lt(e=this.i=new Fv,0,1,t=new ke),this.C=new wv,Lt(this.i,0,3,this.C),this.m=new Ev,Lt(this.i,0,2,this.m),Zn(this.m,4,1),Nt(this.m,2,.5),Nt(this.C,2,.5),Nt(this.i,4,.5)}D(){return"PoseLandmarker"}get baseOptions(){return ue(this.i,ke,1)}set baseOptions(e){Lt(this.i,0,1,e)}A(e){return"numPoses"in e&&Zn(this.m,4,e.numPoses??1),"minPoseDetectionConfidence"in e&&Nt(this.m,2,e.minPoseDetectionConfidence??.5),"minTrackingConfidence"in e&&Nt(this.i,4,e.minTrackingConfidence??.5),"minPosePresenceConfidence"in e&&Nt(this.C,2,e.minPosePresenceConfidence??.5),"outputSegmentationMasks"in e&&(this.outputSegmentationMasks=e.outputSegmentationMasks??!1),this.l(e)}H(e,t,i){var n=typeof t!="function"?t:{};return this.v=typeof t=="function"?t:i,V_(this),Pn(this,e,n),H_(this)}I(e,t,i,n){var s=typeof i!="function"?i:{};return this.v=typeof i=="function"?i:n,V_(this),ts(this,e,s,t),H_(this)}u(){var e=new tn;Be(e,"image_in"),Be(e,"norm_rect"),pe(e,"normalized_landmarks"),pe(e,"world_landmarks"),pe(e,"segmentation_masks");var t=new Qi;jn(t,xT,this.i);var i=new Wi;Ji(i,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),De(i,"IMAGE:image_in"),De(i,"NORM_RECT:norm_rect"),re(i,"NORM_LANDMARKS:normalized_landmarks"),re(i,"WORLD_LANDMARKS:world_landmarks"),i.A(t),mn(e,i),Fu(this,e),this.h.attachProtoVectorListener("normalized_landmarks",(n,s)=>{this.landmarks=[];for(let r of n)n=bl(r),this.landmarks.push(Tl(n));St(this,s)}),this.h.attachEmptyPacketListener("normalized_landmarks",n=>{this.landmarks=[],St(this,n)}),this.h.attachProtoVectorListener("world_landmarks",(n,s)=>{this.worldLandmarks=[];for(let r of n)n=Ra(r),this.worldLandmarks.push(Ca(n));St(this,s)}),this.h.attachEmptyPacketListener("world_landmarks",n=>{this.worldLandmarks=[],St(this,n)}),this.outputSegmentationMasks&&(re(i,"SEGMENTATION_MASK:segmentation_masks"),Ba(this,"segmentation_masks"),this.h.ia("segmentation_masks",(n,s)=>{this.segmentationMasks=n.map(r=>Ga(this,r,!0,!this.v)),St(this,s)}),this.h.attachEmptyPacketListener("segmentation_masks",n=>{this.segmentationMasks=[],St(this,n)})),e=e.h(),this.setGraph(new Uint8Array(e),!0)}};Hi.prototype.detectForVideo=Hi.prototype.I,Hi.prototype.detect=Hi.prototype.H,Hi.prototype.setOptions=Hi.prototype.A,Hi.createFromModelPath=function(e,t){return le(Hi,e,{baseOptions:{modelAssetPath:t}})},Hi.createFromModelBuffer=function(e,t){return le(Hi,e,{baseOptions:{modelAssetBuffer:t}})},Hi.createFromOptions=function(e,t){return le(Hi,e,t)},Hi.POSE_CONNECTIONS=Qv,Re("module$exports$google3$third_party$mediapipe$tasks$web$vision$pose_landmarker$pose_landmarker.PoseLandmarker.POSE_CONNECTIONS",Hi.POSE_CONNECTIONS);var ku=class{constructor({video:t,wasmBase:i,model:n,onStatus:s}={}){this.video=t,this.wasmBase=i||"assets/mediapipe/wasm",this.modelUrl=n||"assets/mediapipe/hand_landmarker.task",this.onStatus=s||(()=>{}),this.landmarker=null,this.stream=null,this.running=!1,this.detecting=!1,this.lastVideoTime=-1,this.lastDetectAt=0,this.detectInterval=1e3/32,this.sensitivity=1,this.present=0,this.pinch=!1,this.pinchRatio=1,this.raw={x:.5,y:.5,palm:.1},this.sx=0,this.sy=0,this.velocity=0,this.energy=0,this.twoHands=0,this.fps=0,this._lastX=null,this._lastY=null,this._lastT=0,this._detectFrames=0,this._detectFpsT=0,this._raf=0,this._fpsSmooth=0}async start(){this.onStatus({state:"loading",text:"正在唤醒手势…"});try{await this._openCamera(),await this._createLandmarker()}catch(t){return console.warn("[hands] 启动失败",t),this.onStatus({state:"error",text:this._friendlyError(t),error:t}),this.stop(),!1}return this.running=!0,this.onStatus({state:"ready",text:"手势已开启 · 手掌靠近试试"}),this._loop(),!0}async _openCamera(){if(!navigator.mediaDevices?.getUserMedia)throw new Error("当前环境不支持摄像头（需 https 或 localhost）");this.stream=await navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user",width:{ideal:960},height:{ideal:720},frameRate:{ideal:30,max:60}}}),this.video.srcObject=this.stream,this.video.muted=!0,this.video.playsInline=!0,await this.video.play(),this.video.videoWidth===0&&await new Promise(t=>{let i=()=>t();this.video.addEventListener("loadeddata",i,{once:!0}),setTimeout(i,2500)})}async _createLandmarker(){let t=await xs.forVisionTasks(this.wasmBase),i=n=>Ei.createFromOptions(t,{baseOptions:{modelAssetPath:this.modelUrl,delegate:n},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.45,minHandPresenceConfidence:.4,minTrackingConfidence:.4});try{this.landmarker=await i("GPU")}catch(n){console.warn("[hands] GPU 不可用，回退 CPU",n),this.onStatus({state:"loading",text:"GPU 不可用 · 切换 CPU 模式"}),this.landmarker=await i("CPU")}}_friendlyError(t){let i=t?.name||"";return i==="NotAllowedError"||i==="PermissionDeniedError"?"摄像头权限被拒绝 · 可改用鼠标模式":i==="NotFoundError"?"没有找到摄像头 · 可改用鼠标模式":i==="NotReadableError"?"摄像头被其他程序占用 · 可改用鼠标模式":"手势启动失败 · 可改用鼠标模式"}setSensitivity(t){this.sensitivity=ve(t,.6,1.6)}_loop(){let t=()=>{this.running&&(this._raf=requestAnimationFrame(t),this._detect())};this._raf=requestAnimationFrame(t)}_detect(){let t=this.video;if(!this.landmarker||!t||t.readyState<2)return;let i=performance.now();if(i-this.lastDetectAt<this.detectInterval||t.currentTime===this.lastVideoTime)return;this.lastVideoTime=t.currentTime,this.lastDetectAt=i;let n=null;try{n=this.landmarker.detectForVideo(t,i)}catch(b){console.warn("[hands] detect 失败",b);return}let s=n?.landmarks?.length||0;if(this.twoHands=s,!s){this._hasHand=!1;return}this._hasHand=!0;let r=null,a=-1;for(let b=0;b<n.landmarks.length;b++){let A=n.landmarks[b],S=Math.hypot(A[0].x-A[9].x,A[0].y-A[9].y);S>a&&(a=S,r=A)}if(!r)return;let o=r,l=(o[0].x+o[5].x+o[9].x+o[13].x+o[17].x)/5,c=(o[0].y+o[5].y+o[9].y+o[13].y+o[17].y)/5,h=Math.hypot(o[0].x-o[9].x,o[0].y-o[9].y)+1e-5,d=o[4],u=o[8],g=Math.hypot(d.x-u.x,d.y-u.y)/h;!this.pinch&&g<.62?this.pinch=!0:this.pinch&&g>.92&&(this.pinch=!1);let y=this.pinch?(d.x+u.x)/2:l,p=this.pinch?(d.y+u.y)/2:c,m=1.28*this.sensitivity;this.raw.x=ve(.5+(1-y-.5)*m,-.15,1.15),this.raw.y=ve(.5+(p-.5)*m,-.15,1.15),this.raw.palm=h,this.pinchRatio=g,this.proximity=jo(.055,.2,h)}update(t,i,n){let s=this.running&&this._hasHand;this.present=ui(this.present,s?1:0,s?7:4.5,t);let r=this.raw.x*i,a=this.raw.y*n;this._lastX==null&&(this.sx=r,this.sy=a,this._lastX=r,this._lastY=a),this.sx=ui(this.sx,r,16,t),this.sy=ui(this.sy,a,16,t);let o=performance.now(),l=Math.max(1/120,(o-(this._lastT||o))/1e3),c=Math.hypot(this.sx-this._lastX,this.sy-this._lastY)/l;this.velocity=ui(this.velocity,c,8,t),this._lastX=this.sx,this._lastY=this.sy,this._lastT=o;let h=ve(this.velocity/900),d=s?ve(.35+h*.65+(this.pinch?.15:0)):0;return this.energy=ui(this.energy,d,6,t),this.fps=ui(this.fps,this.twoHands?30:0,3,t),{active:this.present>.12,present:this.present,x:this.sx,y:this.sy,pinch:this.pinch&&this.present>.3,energy:this.energy,proximity:this.proximity||0,hands:this.twoHands,velocity:this.velocity}}getWorldPosition(t,i={x:0,y:0,z:0}){let n=this.sx/Math.max(1,t.width)*2-1,s=-(this.sy/Math.max(1,t.height)*2-1),r=8.2,a=2*r*Math.tan(t.camera.fov*Math.PI/360),o=a*t.camera.aspect;return i.x=t.camera.position.x+n*o/2,i.y=t.camera.position.y+s*a/2,i.z=t.camera.position.z-r,i}stop(){if(this.running=!1,this._raf&&cancelAnimationFrame(this._raf),this._raf=0,this.stream){for(let t of this.stream.getTracks())t.stop();this.stream=null}if(this.video&&(this.video.srcObject=null),this.landmarker){try{this.landmarker.close()}catch{}this.landmarker=null}this._hasHand=!1,this.present=0}};var Ct=e=>document.getElementById(e),zu=class{constructor(){this.handlers=new Map,this.app=Ct("app"),this.loadingScreen=Ct("loadingScreen"),this.loadingBar=Ct("loadingBar"),this.loadingTip=Ct("loadingTip"),this.toastEl=Ct("toast"),this.toastTimer=0,this.settingsEl=Ct("settingsPanel"),this.startOverlay=Ct("startOverlay"),this.handCursor=Ct("handCursor"),this.rippleLayer=Ct("rippleLayer"),this.cd={year:Ct("cdYear"),days:Ct("cdDays"),hours:Ct("cdHours"),mins:Ct("cdMins"),secs:Ct("cdSecs")},this.statusEl=Ct("status"),this.statusText=Ct("statusText"),this.playerEl=Ct("player"),this.playerSub=Ct("playerSub"),this.greetingEl=Ct("greeting"),this.greetingSubEl=Ct("greetingSub"),this.modeText=Ct("modeText"),this.modeIcon=Ct("modeIcon"),this._bind(),this.updateCountdown(),this._countdownTimer=setInterval(()=>this.updateCountdown(),1e3)}on(t,i){return this.handlers.set(t,i),this}emit(t,i){let n=this.handlers.get(t);n&&n(i)}_bind(){Ct("btnStartGesture")?.addEventListener("click",()=>this.emit("start","gesture")),Ct("btnStartPointer")?.addEventListener("click",()=>this.emit("start","pointer")),Ct("btnUpload")?.addEventListener("click",()=>Ct("fileInput")?.click()),Ct("fileInput")?.addEventListener("change",o=>{let l=o.target.files;l?.length&&this.emit("upload",l),o.target.value=""}),Ct("btnMusic")?.addEventListener("click",()=>this.emit("toggleMusic")),Ct("btnPlayer")?.addEventListener("click",()=>this.emit("toggleMusic")),Ct("btnScene")?.addEventListener("click",()=>this.emit("cycleMood")),Ct("btnFullscreen")?.addEventListener("click",()=>this.toggleFullscreen()),Ct("btnSettings")?.addEventListener("click",()=>this.openSettings()),Ct("btnCloseSettings")?.addEventListener("click",()=>this.closeSettings()),Ct("btnToggleGalaxy")?.addEventListener("click",()=>this.emit("toggleGalaxy"));let t=Ct("inputGreeting"),i=Ct("inputSub"),n=0,s=()=>{clearTimeout(n),n=setTimeout(()=>{this.emit("settings",{greeting:t.value.trim()||"悦悦，圣诞快乐！",sub:i.value.trim()})},220)};t?.addEventListener("input",s),i?.addEventListener("input",s),Ct("checkMusic")?.addEventListener("change",o=>this.emit("settings",{music:o.target.checked})),Ct("rangeVolume")?.addEventListener("input",o=>this.emit("settings",{volume:Number(o.target.value)/100}));let r=Ct("rangeSensitivity"),a=Ct("outSensitivity");r?.addEventListener("input",o=>{let l=Number(o.target.value)/100;a&&(a.textContent=`${l.toFixed(2)}×`),this.emit("settings",{sensitivity:l})}),Ct("checkPreview")?.addEventListener("change",o=>{Ct("previewBox")?.classList.toggle("on",o.target.checked),this.emit("settings",{preview:o.target.checked})}),Ct("moodRow")?.addEventListener("click",o=>{let l=o.target.closest(".mood");l&&this.emit("setMood",Number(l.dataset.mood))}),Ct("btnResetPhotos")?.addEventListener("click",()=>this.emit("resetPhotos")),Ct("btnRestartCamera")?.addEventListener("click",()=>this.emit("restartCamera")),document.addEventListener("pointerdown",o=>{this.settingsEl.classList.contains("open")&&(this.settingsEl.contains(o.target)||o.target.closest?.("#btnSettings")||this.closeSettings())}),window.addEventListener("keydown",o=>{let l=(o.target?.tagName||"").toLowerCase();l==="input"||l==="textarea"||(o.code==="Space"?(o.preventDefault(),this.emit("toggleGalaxy")):o.code==="KeyF"?this.toggleFullscreen():o.code==="KeyM"?this.emit("toggleMusic"):o.code==="KeyS"?this.settingsEl.classList.contains("open")?this.closeSettings():this.openSettings():o.code==="KeyU"?Ct("fileInput")?.click():o.code==="Escape"&&this.closeSettings())}),document.addEventListener("fullscreenchange",()=>{Ct("btnFullscreen")?.classList.toggle("active",!!document.fullscreenElement)})}setLoading(t,i){this.loadingBar&&(this.loadingBar.style.width=`${Math.round(Math.max(0,Math.min(1,t))*100)}%`),i&&this.loadingTip&&(this.loadingTip.textContent=i)}hideLoading(){this.setLoading(1),setTimeout(()=>this.loadingScreen?.classList.add("hidden"),320)}hideStart(){this.startOverlay?.classList.add("hidden")}showStart(){this.startOverlay?.classList.remove("hidden")}toast(t,i=2400){this.toastEl&&(this.toastEl.textContent=t,this.toastEl.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this.toastEl.classList.remove("show"),i))}setStatus(t,i){this.statusEl&&(this.statusEl.dataset.state=t),this.statusText&&i&&(this.statusText.textContent=i)}setHint(t,i){let n=Ct("hintText"),s=Ct("hintSub");n&&t&&(n.textContent=t),s&&i&&(s.textContent=i)}setGreeting(t,i){this.greetingEl&&(this.greetingEl.textContent=t),this.greetingSubEl&&(this.greetingSubEl.textContent=i||""),this.greetingSubEl&&(this.greetingSubEl.style.display=i?"":"none")}setMusicPlaying(t){this.playerEl?.classList.toggle("playing",t),Ct("btnMusic")?.classList.toggle("active",t),this.playerSub&&(this.playerSub.textContent=t?"正在播放 · 雪夜八音盒":"轻点开启音乐")}setGalaxy(t){this.modeText&&(this.modeText.textContent=t?"让树回来":"散作星河"),this.modeIcon&&(this.modeIcon.textContent=t?"✧":"✦"),Ct("btnToggleGalaxy")?.classList.toggle("active",t),this.hintSub}updateCountdown(){let t=new Date,i=t.getFullYear(),n=new Date(i,11,25,0,0,0);t.getTime()>=n.getTime()&&(i+=1,n=new Date(i,11,25,0,0,0));let s=Math.max(0,n.getTime()-t.getTime()),r=Math.floor(s/1e3),a=Math.floor(r/86400),o=Math.floor(r%86400/3600),l=Math.floor(r%3600/60),c=r%60;this.cd.year&&(this.cd.year.textContent=String(i)),this.cd.days&&(this.cd.days.textContent=String(a)),this.cd.hours&&(this.cd.hours.textContent=Lh(o)),this.cd.mins&&(this.cd.mins.textContent=Lh(l)),this.cd.secs&&(this.cd.secs.textContent=Lh(c))}openSettings(){this.settingsEl?.classList.add("open")}closeSettings(){this.settingsEl?.classList.remove("open")}toggleSettings(){this.settingsEl?.classList.contains("open")?this.closeSettings():this.openSettings()}applySettings(t){let i=Ct("inputGreeting"),n=Ct("inputSub");i&&document.activeElement!==i&&(i.value=t.greeting||""),n&&document.activeElement!==n&&(n.value=t.sub||"");let s=Ct("checkMusic");s&&(s.checked=!!t.music);let r=Ct("rangeVolume");r&&(r.value=String(Math.round((t.volume??.7)*100)));let a=Ct("rangeSensitivity");a&&(a.value=String(Math.round((t.sensitivity??1)*100)));let o=Ct("outSensitivity");o&&(o.textContent=`${(t.sensitivity??1).toFixed(2)}×`);let l=Ct("checkPreview");l&&(l.checked=!!t.preview),Ct("previewBox")?.classList.toggle("on",!!t.preview),this.setMood(t.mood??0),this.setGreeting(t.greeting,t.sub),this.setMusicPlaying(!1)}setMood(t){document.querySelectorAll("#moodRow .mood").forEach(n=>{n.classList.toggle("active",Number(n.dataset.mood)===t)});let i=_n[t];i&&document.documentElement.style.setProperty("--mood-glow",i.aurora[0])}async toggleFullscreen(){try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{this.toast("这个浏览器不支持全屏，按 F11 也可以")}}updateCursor(t,i,{visible:n=!0,pinch:s=!1,grab:r=!1}={}){let a=this.handCursor;a&&(a.hidden=!1,a.style.transform=`translate3d(${t.toFixed(1)}px, ${i.toFixed(1)}px, 0)`,a.classList.toggle("show",n),a.classList.toggle("pinching",s&&!r),a.classList.toggle("grab",r))}hideCursor(){this.handCursor?.classList.remove("show","pinching","grab")}ripple(t,i,n="rgba(160,235,255,0.75)"){if(!this.rippleLayer)return;let s=document.createElement("span");s.className="ripple",s.style.left=`${t}px`,s.style.top=`${i}px`,s.style.borderColor=n,this.rippleLayer.appendChild(s),setTimeout(()=>s.remove(),950)}setUIHidden(t){this.app?.classList.toggle("ui-hidden",t)}};var wl=e=>typeof e=="number"&&Number.isFinite(e)?Math.min(1,Math.max(0,e)):0,Jp=(e,t,i)=>Math.min(i,Math.max(t,e)),jp=e=>440*Math.pow(2,(e-69)/12),Ui=(e,t)=>e+Math.random()*(t-e),tx=e=>e[Math.random()*e.length|0],ex={C:{bass:36,notes:[48,55,64]},G:{bass:31,notes:[43,50,59]},F:{bass:29,notes:[41,48,57]},Am:{bass:33,notes:[45,52,60]}},zT=["C","G","C","Am","C","G","F","F","C","G","C","Am","C","G","F","F","G","C","F","G"];function GT(){let e=[],t=(n,s,r,a=1,o=1)=>{e.push({t:(n-1)*4+s,type:"mel",midi:r,dur:a,vel:o})};zT.forEach((n,s)=>{e.push({t:s*4,type:"pad",chord:n}),e.push({t:s*4,type:"bass",midi:ex[n].bass})});let i=[.95,.3,.6,.28,.85,.3,.55,.28];for(let n=0;n<20;n++){let s=n<2?.65:1;for(let r=0;r<8;r++)e.push({t:n*4+r*.5+Ui(-.012,.012),type:"bell",vel:i[r]*s})}return t(1,0,72,1,.42),t(1,1,76,1,.4),t(1,2,79,1,.4),t(1,3,84,1.5,.38),t(2,0,71,1,.36),t(2,1,74,1,.36),t(2,2,79,1,.36),t(2,3,83,1.5,.34),t(3,0,64,1,.9),t(3,1,64,1,.85),t(3,2,64,2,.9),t(4,0,64,1,.85),t(4,1,64,1,.85),t(4,2,64,2,.88),t(5,0,64,1,.92),t(5,1,67,1,.95),t(5,2,72,1,1),t(5,3,74,1,1),t(6,0,76,2.5,.95),t(7,0,65,1,.9),t(7,1,65,.5,.85),t(7,1.5,65,.5,.85),t(7,2,65,1,.9),t(7,3,65,1,.9),t(8,0,64,1,.9),t(8,1,64,1,.85),t(8,2,64,1,.88),t(8,3,64,1,.88),t(9,0,62,1,.9),t(9,1,62,1,.85),t(9,2,64,1,.9),t(9,3,62,1,.9),t(10,0,67,2,.95),t(11,0,64,1,.9),t(11,1,64,1,.85),t(11,2,64,2,.9),t(12,0,64,1,.85),t(12,1,64,1,.85),t(12,2,64,2,.88),t(13,0,64,1,.92),t(13,1,67,1,.95),t(13,2,72,1,1),t(13,3,74,1,1),t(14,0,76,2.5,.95),t(15,0,65,1,.9),t(15,1,65,.5,.85),t(15,1.5,65,.5,.85),t(15,2,65,1,.9),t(15,3,65,1,.9),t(16,0,64,1,.9),t(16,1,64,1,.85),t(16,2,64,1,.88),t(16,3,64,1,.88),t(17,0,67,1,.95),t(17,1,67,1,.9),t(17,2,65,1,.9),t(17,3,62,1,.9),t(18,0,72,2,.9),t(18,2.5,76,.25,.75),t(18,2.75,79,.25,.75),t(18,3,84,.75,.8),t(19,0,72,1,.36),t(19,1,69,1,.34),t(19,2,72,1,.34),t(19,3,77,1.5,.32),t(20,0,71,1,.34),t(20,1,74,1,.34),t(20,2,79,1,.32),t(20,3,74,1.5,.3),e.sort((n,s)=>n.t-s.t),e}var Gu=class{constructor({volume:t=.65}={}){this._volume=wl(t),this._intensity=0,this._ready=!1,this._ctx=null,this._initPromise=null,this._musicWanted=!1,this._musicOn=!1,this._sfxWanted=!0,this._events=GT(),this._loopDur=48,this._schedTimer=null,this._stopTimer=null,this._loopAnchor=0,this._loopCount=0,this._evtIndex=0,this._lastTick=0,this._sparkleAt=0,this._ctx=null,this._analyser=null,this._noiseBuf=null,this._persistentOscs=[],this._master=null,this._limiter=null,this._dryBus=null,this._musicBus=null,this._musicFilter=null,this._musicFade=null,this._musicSend=null,this._sfxBus=null,this._sfxFade=null,this._sfxSend=null,this._reverb=null,this._reverbReturn=null,this._shimmerLevel=null}get ready(){return this._ready}get musicEnabled(){return this._musicWanted}get sfxEnabled(){return this._sfxWanted}get volume(){return this._volume}get context(){return this._ctx}getAnalyser(){return this._analyser}async init(){if(!this._ready){if(this._initPromise)return this._initPromise;this._initPromise=this._createGraph();try{await this._initPromise}finally{this._initPromise=null}}}async _createGraph(){let t=typeof window<"u"?window.AudioContext||window.webkitAudioContext:null;if(!t){console.warn("[ChristmasAudio] 当前环境不支持 WebAudio，音频已跳过。");return}try{let i=new t({latencyHint:"interactive"});this._ctx=i,this._buildGraph(i),this._ready=!0;try{i.state==="suspended"&&await i.resume()}catch(n){console.info("[ChristmasAudio] AudioContext 仍处于挂起状态，等待用户手势 unlock()。",n)}this._musicWanted&&this._startMusic()}catch(i){console.warn("[ChristmasAudio] 初始化音频失败：",i),this._teardownGraph();try{this._ctx&&this._ctx.state!=="closed"&&this._ctx.close()}catch{}this._ctx=null}}_buildGraph(t){let i=Math.floor(t.sampleRate*2),n=t.createBuffer(1,i,t.sampleRate),s=n.getChannelData(0);for(let c=0;c<i;c++)s[c]=Math.random()*2-1;this._noiseBuf=n,this._master=t.createGain(),this._master.gain.value=this._volumeToGain(this._volume),this._limiter=t.createDynamicsCompressor(),this._limiter.threshold.value=-8,this._limiter.knee.value=6,this._limiter.ratio.value=12,this._limiter.attack.value=.003,this._limiter.release.value=.25,this._analyser=t.createAnalyser(),this._analyser.fftSize=2048,this._analyser.smoothingTimeConstant=.55,this._dryBus=t.createGain(),this._dryBus.gain.value=1,this._dryBus.connect(this._master),this._master.connect(this._limiter),this._limiter.connect(this._analyser),this._analyser.connect(t.destination),this._reverb=t.createConvolver(),this._reverb.buffer=this._makeImpulse(t,2.8),this._reverbReturn=t.createGain(),this._reverbReturn.gain.value=.55,this._reverb.connect(this._reverbReturn),this._reverbReturn.connect(this._dryBus),this._musicBus=t.createGain(),this._musicFilter=t.createBiquadFilter(),this._musicFilter.type="lowpass",this._musicFilter.frequency.value=3200+2200*this._intensity,this._musicFilter.Q.value=.35,this._musicFade=t.createGain(),this._musicFade.gain.value=0,this._musicSend=t.createGain(),this._musicSend.gain.value=.26,this._musicBus.connect(this._musicFilter),this._musicFilter.connect(this._musicFade),this._musicFade.connect(this._dryBus),this._musicFade.connect(this._musicSend),this._musicSend.connect(this._reverb),this._sfxBus=t.createGain(),this._sfxFade=t.createGain(),this._sfxFade.gain.value=this._sfxWanted?.85:0,this._sfxSend=t.createGain(),this._sfxSend.gain.value=.3,this._sfxBus.connect(this._sfxFade),this._sfxFade.connect(this._dryBus),this._sfxFade.connect(this._sfxSend),this._sfxSend.connect(this._reverb),this._shimmerLevel=t.createGain(),this._shimmerLevel.gain.value=.014*this._intensity;let r=t.createGain();r.gain.value=.82;let a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=5200,this._shimmerLevel.connect(r),r.connect(a),a.connect(this._musicBus);for(let[c,h]of[[1046.5,"sine"],[1568,"sine"]]){let d=t.createOscillator();d.type=h,d.frequency.value=c;let u=t.createGain();u.gain.value=.42,d.connect(u),u.connect(this._shimmerLevel),d.start(),this._persistentOscs.push(d);let f=t.createOscillator();f.type="sine",f.frequency.value=Ui(.12,.2);let g=t.createGain();g.gain.value=2.2,f.connect(g),g.connect(d.detune),f.start(),this._persistentOscs.push(f)}let o=t.createOscillator();o.type="sine",o.frequency.value=.09;let l=t.createGain();l.gain.value=.18,o.connect(l),l.connect(r.gain),o.start(),this._persistentOscs.push(o)}_makeImpulse(t,i){let n=t.sampleRate,s=Math.max(1,Math.floor(n*i)),r=t.createBuffer(2,s,n);for(let a=0;a<2;a++){let o=r.getChannelData(a);for(let l=0;l<s;l++){let c=l/s,h=c<.01?c/.01:1;o[l]=(Math.random()*2-1)*Math.pow(1-c,2.6)*h}}return r}async unlock(){if(this._ctx){try{await this._ctx.resume()}catch(t){console.info("[ChristmasAudio] unlock 失败（可能缺少用户手势）：",t);return}this._musicWanted&&!this._musicOn&&this._startMusic()}}dispose(){this._stopScheduler(),clearTimeout(this._stopTimer),this._stopTimer=null,this._ready=!1,this._musicOn=!1;for(let i of this._persistentOscs){try{i.stop()}catch{}try{i.disconnect()}catch{}}this._persistentOscs=[],this._teardownGraph();let t=this._ctx;if(this._ctx=null,t&&t.state!=="closed")try{let i=t.close();i&&typeof i.catch=="function"&&i.catch(()=>{})}catch{}}_teardownGraph(){let t=[this._shimmerLevel,this._sfxSend,this._sfxFade,this._sfxBus,this._musicSend,this._musicFade,this._musicFilter,this._musicBus,this._reverbReturn,this._reverb,this._analyser,this._limiter,this._master,this._dryBus];for(let i of t)if(i)try{i.disconnect()}catch{}this._master=null,this._limiter=null,this._analyser=null,this._dryBus=null,this._musicBus=null,this._musicFilter=null,this._musicFade=null,this._musicSend=null,this._sfxBus=null,this._sfxFade=null,this._sfxSend=null,this._reverb=null,this._reverbReturn=null,this._shimmerLevel=null,this._noiseBuf=null}setMusicEnabled(t){this._musicWanted=!!t,this._ready&&(this._musicWanted?this._startMusic():this._stopMusic())}setSfxEnabled(t){if(this._sfxWanted=!!t,!this._ready||!this._sfxFade)return;let i=this._ctx.currentTime;this._sfxFade.gain.setTargetAtTime(this._sfxWanted?.85:0,i,.12)}setVolume(t){if(this._volume=wl(t),!this._ready||!this._master)return;let i=this._ctx.currentTime;this._master.gain.setTargetAtTime(this._volumeToGain(this._volume),i,.08)}setGestureIntensity(t){let i=wl(t);if(Math.abs(i-this._intensity)<.01||(this._intensity=i,!this._ready))return;let n=this._ctx.currentTime;this._musicFilter.frequency.setTargetAtTime(3200+2200*i,n,.25),this._shimmerLevel.gain.setTargetAtTime(.014*i,n,.3)}_volumeToGain(t){return .85*Math.pow(t,1.35)}_startMusic(){if(!this._ctx||this._musicOn)return;this._stopTimer&&(clearTimeout(this._stopTimer),this._stopTimer=null);let t=this._ctx;this._musicOn=!0,this._stopScheduler(),this._loopAnchor=t.currentTime+.15,this._loopCount=0,this._evtIndex=0,this._lastTick=t.currentTime,this._sparkleAt=t.currentTime+2,this._tick(),this._schedTimer=setInterval(()=>this._tick(),25);let i=t.currentTime,n=this._musicFade.gain;this._holdParam(n,i),n.linearRampToValueAtTime(.9,i+1.4)}_stopMusic(){if(!this._ctx||!this._musicOn)return;this._musicOn=!1;let t=this._ctx.currentTime,i=this._musicFade.gain;this._holdParam(i,t),i.linearRampToValueAtTime(0,t+1.1),this._stopTimer&&clearTimeout(this._stopTimer),this._stopTimer=setTimeout(()=>{this._stopTimer=null,this._stopScheduler()},1200)}_stopScheduler(){this._schedTimer&&(clearInterval(this._schedTimer),this._schedTimer=null)}_holdParam(t,i){if(typeof t.cancelAndHoldAtTime=="function")t.cancelAndHoldAtTime(i);else{let n=t.value;t.cancelScheduledValues(i),t.setValueAtTime(n,i)}}_tick(){if(!this._musicOn||!this._ctx)return;let i=this._ctx.currentTime;i-this._lastTick>.5&&this._resync(i),this._lastTick=i;let n=i+.22,s=this._events,r=0;for(;r++<600;){this._evtIndex>=s.length&&(this._evtIndex=0,this._loopCount++);let a=s[this._evtIndex],o=this._loopAnchor+this._loopCount*this._loopDur+a.t*.6;if(o>n)break;this._evtIndex++,!(o<i-.05)&&this._renderEvent(a,o)}if(this._intensity>.45&&i>=this._sparkleAt){this._sparkleAt=i+Ui(1.4,3.4)/(.6+this._intensity);let a=[84,86,88,91,93,96];this._musicBox(i+.05,tx(a),.14+this._intensity*.12,{decayScale:.6})}}_resync(t){let i=t-this._loopAnchor;if(i<0)return;let n=Math.floor(i/this._loopDur),s=i-n*this._loopDur;this._loopCount=n;let r=this._events.findIndex(a=>a.t*.6>s+.01);r<0&&(r=this._events.length),this._evtIndex=r}_renderEvent(t,i){switch(t.type){case"mel":this._musicBox(i,t.midi,t.vel,{decayScale:Jp(t.dur*.55+.5,.75,1.25)});break;case"pad":this._pad(i,t.chord);break;case"bass":this._bass(i,t.midi);break;case"bell":this._sleighBell(i,t.vel);break;default:break}}_musicBox(t,i,n=1,s={}){let r=this._ctx;if(!r)return;let{decayScale:a=1,bus:o=this._musicBus,send:l=this._musicSend,pan:c=Ui(-.28,.28)}=s,h=jp(i),d=.16*wl(n),u=Jp(1.7-(i-60)*.018,.5,1.8)*a,f=r.createGain();f.gain.setValueAtTime(1e-4,t),f.gain.linearRampToValueAtTime(Math.max(2e-4,d),t+.006),f.gain.exponentialRampToValueAtTime(Math.max(1e-4,d*.22),t+u*.45),f.gain.exponentialRampToValueAtTime(1e-4,t+u);let g=r.createBiquadFilter();g.type="lowpass",g.frequency.value=Jp(h*9+1500,1500,9e3),g.Q.value=.3;let y=r.createStereoPanner();y.pan.value=c,f.connect(g),g.connect(y),y.connect(o),y.connect(l);let p=r.createOscillator();p.type="triangle",p.frequency.value=h;let m=r.createOscillator();m.type="sine",m.frequency.value=Math.min(h*2.01,14e3);let b=r.createGain();b.gain.value=.16,m.connect(b),b.connect(f),p.connect(f),p.start(t),m.start(t);let A=t+u+.08;p.stop(A),m.stop(A)}_pad(t,i){let n=this._ctx,s=ex[i];if(!n||!s)return;let r=4*.6,a=n.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.linearRampToValueAtTime(.06,t+.55),a.gain.setValueAtTime(.06,t+r-.5),a.gain.linearRampToValueAtTime(1e-4,t+r+.9);let o=n.createBiquadFilter();o.type="lowpass",o.frequency.value=1400,o.Q.value=.3,a.connect(o),o.connect(this._musicBus),o.connect(this._musicSend);let l=t+r+1;for(let c of s.notes){let h=jp(c);for(let d of[-5,5]){let u=n.createOscillator();u.type="triangle",u.frequency.value=h,u.detune.value=d;let f=n.createGain();f.gain.value=.5,u.connect(f),f.connect(a),u.start(t),u.stop(l)}}}_bass(t,i){let n=this._ctx;if(!n)return;let s=4*.6,r=jp(i),a=n.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.linearRampToValueAtTime(.1,t+.35),a.gain.setValueAtTime(.1,t+s-.5),a.gain.linearRampToValueAtTime(1e-4,t+s+.9);let o=n.createBiquadFilter();o.type="lowpass",o.frequency.value=320,o.Q.value=.5,a.connect(o),o.connect(this._musicBus);let l=n.createOscillator();l.type="sine",l.frequency.value=r;let c=n.createOscillator();c.type="sine",c.frequency.value=r*2;let h=n.createGain();h.gain.value=.14,c.connect(h),h.connect(a),l.connect(a);let d=t+s+1;l.start(t),c.start(t),l.stop(d),c.stop(d)}_sleighBell(t,i){let n=this._ctx;if(!n||!this._noiseBuf)return;let s=n.createBufferSource();s.buffer=this._noiseBuf;let r=n.createBiquadFilter();r.type="bandpass",r.frequency.value=Ui(5200,8200),r.Q.value=Ui(.7,1.4);let a=n.createBiquadFilter();a.type="highpass",a.frequency.value=2200;let o=n.createGain(),l=.028*wl(i);o.gain.setValueAtTime(1e-4,t),o.gain.linearRampToValueAtTime(Math.max(2e-4,l),t+.004),o.gain.exponentialRampToValueAtTime(1e-4,t+Ui(.07,.13));let c=n.createStereoPanner();c.pan.value=Ui(-.45,.45),s.connect(r),r.connect(a),a.connect(o),o.connect(c),c.connect(this._musicBus),c.connect(this._musicSend);let h=t+Ui(-.005,.005);s.start(h,Ui(0,1.6)),s.stop(h+.2)}_canSfx(){return this._ready&&this._sfxWanted&&!!this._ctx}_noiseSource(){let t=this._ctx.createBufferSource();return t.buffer=this._noiseBuf,t}playWhoosh(){if(!this._canSfx())return;let t=this._ctx,i=t.currentTime+.02,n=this._noiseSource(),s=t.createBiquadFilter();s.type="bandpass",s.Q.value=1.1,s.frequency.setValueAtTime(260,i),s.frequency.exponentialRampToValueAtTime(5200,i+.7),s.frequency.exponentialRampToValueAtTime(700,i+1.25);let r=t.createGain();r.gain.setValueAtTime(1e-4,i),r.gain.linearRampToValueAtTime(.42,i+.18),r.gain.exponentialRampToValueAtTime(1e-4,i+1.3),n.connect(s),s.connect(r),r.connect(this._sfxBus),r.connect(this._sfxSend);let a=t.createOscillator();a.type="sine",a.frequency.setValueAtTime(120,i),a.frequency.exponentialRampToValueAtTime(38,i+.7);let o=t.createGain();o.gain.setValueAtTime(1e-4,i),o.gain.linearRampToValueAtTime(.34,i+.02),o.gain.exponentialRampToValueAtTime(1e-4,i+.95),a.connect(o),o.connect(this._sfxBus),n.start(i,Ui(0,.5)),n.stop(i+1.35),a.start(i),a.stop(i+1)}playReform(){if(!this._canSfx())return;let t=this._ctx,i=t.currentTime+.02,n=this._noiseSource(),s=t.createBiquadFilter();s.type="highpass",s.frequency.value=2400;let r=t.createGain();r.gain.setValueAtTime(1e-4,i),r.gain.linearRampToValueAtTime(.26,i+.58),r.gain.exponentialRampToValueAtTime(1e-4,i+.74),n.connect(s),s.connect(r),r.connect(this._sfxBus),r.connect(this._sfxSend),[72,76,79,84,88,91].forEach((c,h)=>{this._musicBox(i+h*.055,c,.42,{decayScale:.55,bus:this._sfxBus,send:this._sfxSend,pan:Ui(-.2,.2)})});let o=t.createOscillator();o.type="sine",o.frequency.setValueAtTime(90,i+.55),o.frequency.exponentialRampToValueAtTime(42,i+1.05);let l=t.createGain();l.gain.setValueAtTime(1e-4,i+.55),l.gain.linearRampToValueAtTime(.2,i+.58),l.gain.exponentialRampToValueAtTime(1e-4,i+1.2),o.connect(l),l.connect(this._sfxBus),n.start(i,Ui(0,.8)),n.stop(i+.85),o.start(i+.55),o.stop(i+1.25)}playGrab(){if(!this._canSfx())return;let t=this._ctx.currentTime+.02;this._musicBox(t,62,.5,{decayScale:.5,bus:this._sfxBus,send:this._sfxSend,pan:-.08}),this._musicBox(t+.012,67,.3,{decayScale:.45,bus:this._sfxBus,send:this._sfxSend,pan:.12})}playRelease(){if(!this._canSfx())return;let i=this._ctx.currentTime+.02,n=[84,86,88,91,93,96,98],s=4+(Math.random()*3|0),r=i;for(let a=0;a<s;a++)this._musicBox(r,tx(n),.22+Math.random()*.12,{decayScale:.35,bus:this._sfxBus,send:this._sfxSend,pan:Ui(-.55,.55)}),r+=Ui(.035,.075)}playClick(){if(!this._canSfx())return;let t=this._ctx,i=t.currentTime+.01;for(let[n,s,r]of[[1e3,.1,.055],[1500,.035,.04]]){let a=t.createOscillator();a.type="triangle",a.frequency.value=n;let o=t.createGain();o.gain.setValueAtTime(1e-4,i),o.gain.linearRampToValueAtTime(s,i+.004),o.gain.exponentialRampToValueAtTime(1e-4,i+r),a.connect(o),o.connect(this._sfxBus),a.start(i),a.stop(i+r+.02)}}playChime(){if(!this._canSfx())return;let i=this._ctx.currentTime+.02;this._musicBox(i,88,.38,{decayScale:.8,bus:this._sfxBus,send:this._sfxSend,pan:-.15}),this._musicBox(i+.07,91,.3,{decayScale:.8,bus:this._sfxBus,send:this._sfxSend,pan:.15})}};var rr=new URLSearchParams(location.search),Ja={greeting:be.greeting.text,sub:be.greeting.sub,music:!0,volume:.72,sensitivity:1,mood:0,preview:!1};function VT(){try{let e=localStorage.getItem(be.storageKey);if(!e)return{...Ja};let t=JSON.parse(e);return{...Ja,...t,greeting:t.greeting||Ja.greeting,sub:t.sub??Ja.sub,mood:ve(Number(t.mood)||0,0,_n.length-1)}}catch{return{...Ja}}}var Qp=class{constructor(){this.canvas=document.getElementById("scene"),this.settings=VT(),this.mode="pointer",this.manualGalaxy=!1,this.gestureGalaxy=0,this.audioReady=!1,this.mouseDown=!1,this.mouse={x:window.innerWidth/2,y:window.innerHeight/2,active:!1},this._handWorld={x:0,y:0,z:0},this._t=0,this._statusTimer=0,this.started=!1}async init(){this.ui=new zu,this.rig=new Nh(this.canvas),this.tree=new Dh(this.rig),this.audio=new Gu({volume:this.settings.volume}),this.cloud=new Fh({rig:this.rig,container:document.getElementById("photoCloud"),onGrab:n=>this._onGrab(n),onRelease:n=>this._onRelease(n),onTap:n=>this._onTap(n)}),this.tracker=new ku({video:document.getElementById("webcam"),wasmBase:be.hand.wasmBase,model:be.hand.model,onStatus:n=>this._onTrackerStatus(n)}),this._wireUI(),this.ui.applySettings(this.settings),this.rig.setMood(this.settings.mood,!0),this.ui.setMood(this.settings.mood),this.ui.setStatus("pointer","手势未开启"),this.ui.setHint("拖拽照片 · 或者让手掌靠近摄像头","捏合指尖可拾起照片 · 空格键散作星河"),this.settings.music||this.ui.setMusicPlaying(!1),this.ui.setLoading(.18,"正在取出照片…"),await this._nextFrame();let t=await this.cloud.load();if(this.ui.setLoading(.82,"正在挂上照片…"),await this._nextFrame(),matchMedia("(pointer: coarse)").matches&&this.ui.setHint("轻点照片把它拾起来 · 双指随心意摆动","也可以点邮箱旁的「散作星河」"),this.cloud.update(1/60,0),await this._nextFrame(),this.ui.hideLoading(),window.addEventListener("resize",()=>this.rig.resize()),this.canvas.addEventListener("pointerdown",n=>this._onCanvasDown(n)),window.addEventListener("pointerup",()=>{this.mouseDown=!1}),window.addEventListener("pointermove",n=>{this.mouse.x=n.clientX,this.mouse.y=n.clientY,this.mouse.active=!0;let s=n.clientX/this.rig.width*2-1,r=-(n.clientY/this.rig.height*2-1);this.rig.setPointer(s,r)}),window.__xmas=this,rr.get("debug")==="1"&&console.info("[xmas] photos:",t,"mode:",this.mode),this._loop(),rr.get("autostart")==="1"){let n=rr.get("mode")==="gesture";await this.start(n?"gesture":"pointer")}rr.get("mode")==="galaxy"&&(this.manualGalaxy=!0,this.ui.setGalaxy(!0),this.rig.setGalaxy(1)),rr.get("mood")!==null&&this._setMood(Number(rr.get("mood"))||0,!0),rr.get("ui")==="0"&&this.ui.setUIHidden(!0),rr.get("photos")==="0"&&(document.getElementById("photoCloud").style.display="none")}_nextFrame(){return new Promise(t=>requestAnimationFrame(()=>t()))}_wireUI(){let t=this.ui;t.on("start",i=>this.start(i)),t.on("toggleGalaxy",()=>this.toggleGalaxy()),t.on("toggleMusic",()=>this.toggleMusic()),t.on("cycleMood",()=>this._setMood((this.settings.mood+1)%_n.length)),t.on("setMood",i=>this._setMood(i)),t.on("settings",i=>this._patchSettings(i)),t.on("upload",i=>this._onUpload(i)),t.on("resetPhotos",()=>{this.cloud.resetPositions(),t.toast("照片都回到原来的位置了")}),t.on("restartCamera",()=>this._restartCamera())}_patchSettings(t){this.settings={...this.settings,...t};try{localStorage.setItem(be.storageKey,JSON.stringify(this.settings))}catch{}(t.greeting!==void 0||t.sub!==void 0)&&(this.settings.greeting=this.settings.greeting||Ja.greeting,this.ui.setGreeting(this.settings.greeting,this.settings.sub)),t.volume!==void 0&&this.audio?.setVolume?.(this.settings.volume),t.music!==void 0&&this._applyMusic(),t.preview!==void 0&&document.getElementById("previewBox")?.classList.toggle("on",HT(t.preview)),t.sensitivity!==void 0&&this.tracker?.setSensitivity?.(this.settings.sensitivity),t.mood!==void 0&&this._setMood(t.mood)}_setMood(t,i=!1){let n=ve(Math.round(t),0,_n.length-1);this.settings.mood=n,this.rig.setMood(n,i),this.ui.setMood(n),this.ui.setHint(null,_n[n].hint);try{localStorage.setItem(be.storageKey,JSON.stringify(this.settings))}catch{}}async _initAudio(){try{await this.audio.init(),this.audio.setVolume?.(this.settings.volume),this.audio.setSfxEnabled?.(!0),this.audioReady=!0}catch(t){console.warn("[audio] 初始化失败",t)}}async _applyMusic(){if(!this.audioReady)return;let t=!!this.settings.music;try{t?(await this.audio.unlock?.(),this.audio.setMusicEnabled?.(!0),this.ui.setMusicPlaying(!0)):(this.audio.setMusicEnabled?.(!1),this.ui.setMusicPlaying(!1))}catch(i){console.warn("[audio] 播放失败",i)}}async toggleMusic(){this.audioReady||await this._initAudio(),this.settings.music=!this.settings.music,this.settings={...this.settings},this.ui.applySettings(this.settings),await this._applyMusic();try{localStorage.setItem(be.storageKey,JSON.stringify(this.settings))}catch{}this.ui.toast(this.settings.music?"音乐已开启 · 雪夜八音盒":"音乐已暂停")}async start(t){this.started||(this.started=!0,this.ui.hideStart(),await this._initAudio(),this.tree.burst(.9),t==="gesture"?(this._setMode("gesture"),await this.tracker.start()||(this._setMode("pointer"),this.ui.toast("手势没启动成功，先用鼠标 / 触摸玩吧"))):(this._setMode("pointer"),this.ui.toast("轻点照片可以把它拾起来",1800)),await this._applyMusic(),this.ui.setLoading(1))}_setMode(t){this.mode=t,t==="gesture"?(this.cloud.setSource("hand"),this.ui.setStatus("camera","手势待识别"),this.ui.setHint("手掌靠近摄像头 · 圣诞树会为你散作星河","捏合指尖可拾起照片 · 移开手掌树会回来")):(this.cloud.setSource("mouse"),this.ui.setStatus("pointer","鼠标 / 触摸"),this.ui.setHint("拖拽照片 · 或者让手掌靠近摄像头","空格键散作星河 · 点击空白处激起星屑"),this.ui.hideCursor())}_onTrackerStatus(t){t.state==="loading"?this.ui.setStatus("camera",t.text||"正在唤醒手势…"):t.state==="ready"?(this.ui.setStatus("camera",t.text||"手势已开启"),this.ui.toast("把手掌放到摄像头前试试",2600),this.tree.burst(.6)):t.state==="error"&&(this.ui.setStatus("pointer",t.text||"手势不可用"),this.ui.toast(t.text||"手势不可用，已切换到鼠标模式",3200))}async _restartCamera(){this.tracker.stop(),this.cloud.releaseAll(),this.ui.closeSettings(),this._setMode("gesture"),await this.tracker.start()||this._setMode("pointer")}toggleGalaxy(){this.manualGalaxy=!this.manualGalaxy,this.ui.setGalaxy(this.manualGalaxy),this.tree.burst(this.manualGalaxy?.75:.5),this.audio?.playWhoosh?.({strength:this.manualGalaxy?1:.6}),this.ui.ripple(this.rig.width/2,this.rig.height/2,"rgba(255,214,140,0.6)"),this.manualGalaxy&&this.ui.toast("圣诞树散作星河了 · 再按一次让它回来",1800)}_onGrab(t){this.audio?.playGrab?.(),this.tree.burst(.35),this.ui.ripple(t.sx+t.off.x,t.sy+t.off.y,"rgba(255,226,170,0.8)"),this.ui.setStatus(this.mode==="gesture"?"camera":"pointer",`拾起了 · ${t.photo.place||"照片"}`)}_onRelease(t){this.audio?.playRelease?.(),this.ui.setStatus(this.mode==="gesture"?"camera":"pointer",this.mode==="gesture"?"手势模式":"鼠标 / 触摸")}_onTap(t){this.audio?.playChime?.(),this.tree.burst(.28),this.ui.toast(t.caption||t.place||"这张照片",2200)}_onCanvasDown(t){t.target.closest?.(".photo-card")||(this.mouseDown=!0,this.tree.burst(.3),this.ui.ripple(t.clientX,t.clientY),this.audio?.playWhoosh?.({strength:.35}))}async _onUpload(t){this.ui.toast("正在加入照片…",1200);let i=await this.cloud.appendPhotos(t);i>0?(this.ui.toast(`已加入 ${i} 张照片 · 点「散作星河」就能看到它们`),this.manualGalaxy=!0,this.ui.setGalaxy(!0)):this.ui.toast("这些文件没能读取，换几张试试？")}_screenToWorld(t,i,n,s){let r=t/Math.max(1,this.rig.width)*2-1,a=-(i/Math.max(1,this.rig.height)*2-1),o=2*n*Math.tan(this.rig.camera.fov*Math.PI/360),l=o*this.rig.camera.aspect;return s.x=this.rig.camera.position.x+r*l/2,s.y=this.rig.camera.position.y+a*o/2,s.z=this.rig.camera.position.z-n,s}_loop(){this._stop=mg(t=>{this._t+=t;let i=this._t,n=0,s=0;if(this.mode==="gesture"&&this.tracker){let a=this.tracker.update(t,this.rig.width,this.rig.height);if(this.handState=a,a.active){let o=this.tracker.getWorldPosition(this.rig,this._handWorld),l=ve(a.proximity||0);n=ve(a.present*(.55+.45*l)*(.75+a.pinch*.85)),this.tree.setHand(o,n),this.cloud.setPointer(a.x,a.y,a.pinch,!0),this.ui.updateCursor(a.x,a.y,{visible:!0,pinch:a.pinch,grab:!!this.cloud.grabbed}),s=ve(a.present*(.4+.6*l)+(a.pinch?.15:0)),a.present>.5&&this.ui.setStatus("camera",a.pinch?"捏合中 · 可以拾起照片":"手势已识别")}else n=0,this.tree.setHand(null,0),this.cloud.setPointer(-9999,-9999,!1,!1),this.ui.hideCursor(),this.cloud.grabbed||this.ui.setStatus("camera","手势待识别");this.gestureGalaxy=s}else{if(this.mouse.active){let a=this.mouseDown?.55:.16,o=this._screenToWorld(this.mouse.x,this.mouse.y,8.2,this._handWorld);this.tree.setHand(o,a),n=a}this.gestureGalaxy=0}let r=this.mode==="gesture"?Math.max(this.manualGalaxy?1:0,this.gestureGalaxy):this.manualGalaxy?1:0;this.rig.galaxy=r,this.rig.update(t,i),this.tree.update(t,i),this.cloud.update(t,i),this.audioReady&&this.audio.setGestureIntensity?.(ve(n*.8+this.rig.galaxySmooth*.4)),this.rig.render()})}dispose(){this._stop?.(),this.tracker?.stop(),this.audio?.dispose?.(),this.rig?.dispose?.()}};function HT(e){return e===!0||e==="true"||e===1}async function WT(){let e=new Qp;try{await e.init()}catch(t){console.error("[xmas] 初始化失败",t);let i=document.getElementById("loadingTip");i&&(i.textContent="出了一点小问题："+(t?.message||t));let n=document.getElementById("loadingBar");n&&(n.style.width="100%");return}window.__xmasApp=e}WT();})();
