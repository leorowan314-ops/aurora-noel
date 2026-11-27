(()=>{var _e={camera:{fov:42,near:.1,far:120,position:[0,2.15,10.6],target:[0,1.95,0]},tree:{height:4.7,radius:2.05,particles:92e3,garland:7e3,ornaments:240,starY:4.98},galaxy:{radius:7,centerY:1.95},photos:{featuredCount:8},greeting:{text:"悦悦，圣诞快乐！",sub:"愿这片极光替我记得，我们一起走过的每一程"},storageKey:"aurora-noel-settings-v1",hand:{wasmBase:"assets/mediapipe/wasm",model:"assets/mediapipe/hand_landmarker.task"}},An=[{id:0,name:"极光",aurora:["#39f6e0","#2a5cff"],hint:"青蓝极光 · 雪夜森林"},{id:1,name:"雪夜",aurora:["#9b7bff","#ff5fa2"],hint:"紫粉极光 · 安静落雪"},{id:2,name:"暖星",aurora:["#ffd98a","#ff9d5c"],hint:"金色星屑 · 壁炉微光"}];var eg=0,Mf=1,ig=2;var ml=1,ng=2,Oa=3,rr=0,Ri=1,vn=2,Ts=0,ar=1,ui=2,bf=3,Ef=4,sg=5;var Lr=100,rg=101,ag=102,og=103,lg=104,cg=200,hg=201,ug=202,dg=203,Tf=204,wf=205,fg=206,pg=207,mg=208,gg=209,_g=210,vg=211,xg=212,yg=213,Sg=214,Vc=0,Wc=1,Xc=2,ya=3,qc=4,$c=5,Yc=6,Kc=7,bh=0,Mg=1,bg=2,Jn=0,gl=1,_l=2,vl=3,Dr=4,xl=5,yl=6,Sl=7;var Af=300,Nr=301,Ba=302,Eh=303,Th=304,Sa=1e3,Wn=1001,Zc=1002,Si=1003,Eg=1004;var Ml=1005;var Ti=1006,wh=1007;var Nn=1008;var Yi=1009,Rf=1010,Cf=1011,ka=1012,Ah=1013,Fn=1014,xn=1015,Ci=1016,Rh=1017,Ch=1018,Fr=1020,Pf=35902,If=35899,Lf=1021,Df=1022,Un=1023,Ss=1026,ws=1027,Ph=1028,Ih=1029,or=1030,Lh=1031;var Dh=1033,bl=33776,El=33777,Tl=33778,wl=33779,Nh=35840,Fh=35841,Uh=35842,Oh=35843,Bh=36196,kh=37492,zh=37496,Gh=37488,Hh=37489,Al=37490,Vh=37491,Wh=37808,Xh=37809,qh=37810,$h=37811,Yh=37812,Kh=37813,Zh=37814,Jh=37815,jh=37816,Qh=37817,tu=37818,eu=37819,iu=37820,nu=37821,su=36492,ru=36494,au=36495,ou=36283,lu=36284,Rl=36285,cu=36286;var Bo=2300,Jc=2301,Gc=2302,lf=2303,cf=2400,hf=2401,uf=2402;var Tg=3200;var Cl=0,wg=1,As="",$e="srgb",ko="srgb-linear",zo="linear",Ee="srgb";var Hc=7680;var Ag=519,Rg=512,Cg=513,Pg=514,Nf=515,Ig=516,Lg=517,Ff=518,Uf=519,Of=35044;var Bf="300 es",gn=2e3,Ma=2001;function Ay(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ry(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Go(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dg(){let i=Go("canvas");return i.style.display="block",i}var g0={},ba=null;function Ho(...i){let t="THREE."+i.shift();ba?ba("log",t,...i):console.log(t,...i)}function Ng(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Yt(...i){i=Ng(i);let t="THREE."+i.shift();if(ba)ba("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Zt(...i){i=Ng(i);let t="THREE."+i.shift();if(ba)ba("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ar(...i){let t=i.join(" ");t in g0||(g0[t]=!0,Yt(...i))}function Fg(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Ug={[Vc]:Vc,[Xc]:Yc,[qc]:qc,[ya]:$c,[Wc]:Wc,[Yc]:Xc,[Kc]:Kc,[$c]:ya},Xn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ni=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_0=1234567,No=Math.PI/180,Ea=180/Math.PI;function Rs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ni[i&255]+Ni[i>>8&255]+Ni[i>>16&255]+Ni[i>>24&255]+"-"+Ni[t&255]+Ni[t>>8&255]+"-"+Ni[t>>16&15|64]+Ni[t>>24&255]+"-"+Ni[e&63|128]+Ni[e>>8&255]+"-"+Ni[e>>16&255]+Ni[e>>24&255]+Ni[n&255]+Ni[n>>8&255]+Ni[n>>16&255]+Ni[n>>24&255]).toLowerCase()}function le(i,t,e){return Math.max(t,Math.min(e,i))}function kf(i,t){return(i%t+t)%t}function Cy(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Py(i,t,e){return i!==t?(e-i)/(t-i):0}function Fo(i,t,e){return(1-e)*i+e*t}function Iy(i,t,e,n){return Fo(i,t,1-Math.exp(-e*n))}function Ly(i,t=1){return t-Math.abs(kf(i,t*2)-t)}function Dy(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ny(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Fy(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Uy(i,t){return i+Math.random()*(t-i)}function Oy(i){return i*(.5-Math.random())}function By(i){i!==void 0&&(_0=i);let t=_0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ky(i){return i*No}function zy(i){return i*Ea}function Gy(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Hy(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vy(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),u=a((t-n)/2),d=r((n-t)/2),p=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*f,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*p,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*p,o*c);break;case"ZYZ":i.set(l*p,l*d,o*h,o*c);break;default:Yt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hu(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Gf(i,t){if(t.constructor===Float32Array)return i;let e=hu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Hf(i,t){if(t.constructor===Float32Array)return i;let e=hu(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Pl={DEG2RAD:No,RAD2DEG:Ea,generateUUID:Rs,clamp:le,euclideanModulo:kf,mapLinear:Cy,inverseLerp:Py,lerp:Fo,damp:Iy,pingpong:Ly,smoothstep:Dy,smootherstep:Ny,randInt:Fy,randFloat:Uy,randFloatSpread:Oy,seededRandom:By,degToRad:ky,radToDeg:zy,isPowerOfTwo:Gy,ceilPowerOfTwo:Hy,floorPowerOfTwo:zf,setQuaternionFromProperEuler:Vy,normalize:Hf,denormalize:Gf},Yf=class Yf{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yf.prototype.isVector2=!0;var it=Yf,qn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],p=r[a+2],v=r[a+3];if(f!==v||l!==u||c!==d||h!==p){let m=l*u+c*d+h*p+f*v;m<0&&(u=-u,d=-d,p=-p,v=-v,m=-m);let g=1-o;if(m<.9995){let b=Math.acos(m),E=Math.sin(b);g=Math.sin(g*b)/E,o=Math.sin(o*b)/E,l=l*g+u*o,c=c*g+d*o,h=h*g+p*o,f=f*g+v*o}else{l=l*g+u*o,c=c*g+d*o,h=h*g+p*o,f=f*g+v*o;let b=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=b,c*=b,h*=b,f*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],p=r[a+3];return t[e]=o*p+h*f+l*d-c*u,t[e+1]=l*p+h*u+c*f-o*d,t[e+2]=c*p+h*d+o*u-l*f,t[e+3]=h*p-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"YZX":this._x=u*h*f+c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f-u*d*p;break;case"XZY":this._x=u*h*f-c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f+u*d*p;break;default:Yt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Kf=class Kf{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(v0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(v0.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Od.copy(this).projectOnVector(t),this.sub(Od)}reflect(t){return this.sub(Od.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kf.prototype.isVector3=!0;var L=Kf,Od=new L,v0=new qn,Zf=class Zf{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],p=n[8],v=s[0],m=s[3],g=s[6],b=s[1],E=s[4],y=s[7],w=s[2],T=s[5],_=s[8];return r[0]=a*v+o*b+l*w,r[3]=a*m+o*E+l*T,r[6]=a*g+o*y+l*_,r[1]=c*v+h*b+f*w,r[4]=c*m+h*E+f*T,r[7]=c*g+h*y+f*_,r[2]=u*v+d*b+p*w,r[5]=u*m+d*E+p*T,r[8]=u*g+d*y+p*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,p=e*f+n*u+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return t[0]=f*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ar("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bd.makeScale(t,e)),this}rotate(t){return Ar("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bd.makeRotation(-t)),this}translate(t,e){return Ar("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Zf.prototype.isMatrix3=!0;var Qt=Zf,Bd=new Qt,x0=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),y0=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wy(){let i={enabled:!0,workingColorSpace:ko,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ee&&(s.r=ys(s.r),s.g=ys(s.g),s.b=ys(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ee&&(s.r=xa(s.r),s.g=xa(s.g),s.b=xa(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===As?zo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ko]:{primaries:t,whitePoint:n,transfer:zo,toXYZ:x0,fromXYZ:y0,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:n,transfer:Ee,toXYZ:x0,fromXYZ:y0,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),i}var ue=Wy();function ys(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ea,jc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ea===void 0&&(ea=Go("canvas")),ea.width=t.width,ea.height=t.height;let s=ea.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ea}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Go("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ys(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ys(e[n]/255)*255):e[n]=ys(e[n]);return{data:e,width:t.width,height:t.height}}else return Yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Xy=0,Ta=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=Rs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(kd(s[a].image)):r.push(kd(s[a]))}else r=kd(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function kd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Yt("Texture: Unable to serialize Texture."),{})}var qy=0,zd=new L,wi=class i extends Xn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Wn,s=Wn,r=Ti,a=Nn,o=Un,l=Yi,c=i.DEFAULT_ANISOTROPY,h=As){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Rs(),this.name="",this.source=new Ta(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(zd).x}get height(){return this.source.getSize(zd).y}get depth(){return this.source.getSize(zd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Yt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Yt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Af)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sa:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case Zc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sa:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case Zc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};wi.DEFAULT_IMAGE=null;wi.DEFAULT_MAPPING=Af;wi.DEFAULT_ANISOTROPY=1;var Jf=class Jf{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,y=(d+1)/2,w=(g+1)/2,T=(h+u)/4,_=(f+v)/4,M=(p+m)/4;return E>y&&E>w?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=_/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=M/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=_/r,s=M/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-p)*(m-p)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-p)/b,this.y=(f-v)/b,this.z=(u-h)/b,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jf.prototype.isVector4=!0;var Ve=Jf,Qc=class extends Xn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ve(0,0,t,e),this.scissorTest=!1,this.viewport=new Ve(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new wi({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ti,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ta(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ci=class extends Qc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Vo=class extends wi{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Si,this.minFilter=Si,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var th=class extends wi{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Si,this.minFilter=Si,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Mh=class Mh{constructor(t,e,n,s,r,a,o,l,c,h,f,u,d,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,u,d,p,v,m)}set(t,e,n,s,r,a,o,l,c,h,f,u,d,p,v,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=u,g[3]=d,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mh().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ia.setFromMatrixColumn(t,0).length(),r=1/ia.setFromMatrixColumn(t,1).length(),a=1/ia.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,p=o*h,v=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+p*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=p+d*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,p=c*h,v=c*f;e[0]=u+v*o,e[4]=p*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-p,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,p=c*h,v=c*f;e[0]=u-v*o,e[4]=-a*f,e[8]=p+d*o,e[1]=d+p*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,d=a*f,p=o*h,v=o*f;e[0]=l*h,e[4]=p*c-d,e[8]=u*c+v,e[1]=l*f,e[5]=v*c+u,e[9]=d*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,d=a*c,p=o*l,v=o*c;e[0]=l*h,e[4]=v-u*f,e[8]=p*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+p,e[10]=u-v*f}else if(t.order==="XZY"){let u=a*l,d=a*c,p=o*l,v=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+v,e[5]=a*h,e[9]=d*f-p,e[2]=p*f-d,e[6]=o*h,e[10]=v*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($y,t,Yy)}lookAt(t,e,n){let s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),$s.crossVectors(n,en),$s.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),$s.crossVectors(n,en)),$s.normalize(),fc.crossVectors(en,$s),s[0]=$s.x,s[4]=fc.x,s[8]=en.x,s[1]=$s.y,s[5]=fc.y,s[9]=en.y,s[2]=$s.z,s[6]=fc.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],p=n[2],v=n[6],m=n[10],g=n[14],b=n[3],E=n[7],y=n[11],w=n[15],T=s[0],_=s[4],M=s[8],F=s[12],R=s[1],I=s[5],U=s[9],H=s[13],C=s[2],z=s[6],X=s[10],G=s[14],tt=s[3],V=s[7],J=s[11],et=s[15];return r[0]=a*T+o*R+l*C+c*tt,r[4]=a*_+o*I+l*z+c*V,r[8]=a*M+o*U+l*X+c*J,r[12]=a*F+o*H+l*G+c*et,r[1]=h*T+f*R+u*C+d*tt,r[5]=h*_+f*I+u*z+d*V,r[9]=h*M+f*U+u*X+d*J,r[13]=h*F+f*H+u*G+d*et,r[2]=p*T+v*R+m*C+g*tt,r[6]=p*_+v*I+m*z+g*V,r[10]=p*M+v*U+m*X+g*J,r[14]=p*F+v*H+m*G+g*et,r[3]=b*T+E*R+y*C+w*tt,r[7]=b*_+E*I+y*z+w*V,r[11]=b*M+E*U+y*X+w*J,r[15]=b*F+E*H+y*G+w*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],p=t[3],v=t[7],m=t[11],g=t[15],b=l*d-c*u,E=o*d-c*f,y=o*u-l*f,w=a*d-c*h,T=a*u-l*h,_=a*f-o*h;return e*(v*b-m*E+g*y)-n*(p*b-m*w+g*T)+s*(p*E-v*w+g*_)-r*(p*y-v*T+m*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],p=t[12],v=t[13],m=t[14],g=t[15],b=e*o-n*a,E=e*l-s*a,y=e*c-r*a,w=n*l-s*o,T=n*c-r*o,_=s*c-r*l,M=h*v-f*p,F=h*m-u*p,R=h*g-d*p,I=f*m-u*v,U=f*g-d*v,H=u*g-d*m,C=b*H-E*U+y*I+w*R-T*F+_*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/C;return t[0]=(o*H-l*U+c*I)*z,t[1]=(s*U-n*H-r*I)*z,t[2]=(v*_-m*T+g*w)*z,t[3]=(u*T-f*_-d*w)*z,t[4]=(l*R-a*H-c*F)*z,t[5]=(e*H-s*R+r*F)*z,t[6]=(m*y-p*_-g*E)*z,t[7]=(h*_-u*y+d*E)*z,t[8]=(a*U-o*R+c*M)*z,t[9]=(n*R-e*U-r*M)*z,t[10]=(p*T-v*y+g*b)*z,t[11]=(f*y-h*T-d*b)*z,t[12]=(o*F-a*I-l*M)*z,t[13]=(e*I-n*F+s*M)*z,t[14]=(v*E-p*w-m*b)*z,t[15]=(h*w-f*E+u*b)*z,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,p=r*f,v=a*h,m=a*f,g=o*f,b=l*c,E=l*h,y=l*f,w=n.x,T=n.y,_=n.z;return s[0]=(1-(v+g))*w,s[1]=(d+y)*w,s[2]=(p-E)*w,s[3]=0,s[4]=(d-y)*T,s[5]=(1-(u+g))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(p+E)*_,s[9]=(m-b)*_,s[10]=(1-(u+v))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ia.set(s[0],s[1],s[2]).length(),o=ia.set(s[4],s[5],s[6]).length(),l=ia.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Rn.copy(this);let c=1/a,h=1/o,f=1/l;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=f,Rn.elements[9]*=f,Rn.elements[10]*=f,e.setFromRotationMatrix(Rn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=gn,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,v;if(l)p=r/(a-r),v=a*r/(a-r);else if(o===gn)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Ma)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=gn,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s),p,v;if(l)p=1/(a-r),v=a/(a-r);else if(o===gn)p=-2/(a-r),v=-(a+r)/(a-r);else if(o===Ma)p=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Mh.prototype.isMatrix4=!0;var Ce=Mh,ia=new L,Rn=new Ce,$y=new L(0,0,0),Yy=new L(1,1,1),$s=new L,fc=new L,en=new L,S0=new Ce,M0=new qn,$n=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-le(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return S0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(S0,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return M0.setFromEuler(this),this.setFromQuaternion(M0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var wa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ky=0,b0=new L,na=new qn,ps=new Ce,pc=new L,Eo=new L,Zy=new L,Jy=new qn,E0=new L(1,0,0),T0=new L(0,1,0),w0=new L(0,0,1),A0={type:"added"},jy={type:"removed"},sa={type:"childadded",child:null},Gd={type:"childremoved",child:null},hi=class i extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ky++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new $n,n=new qn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Qt}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return na.setFromAxisAngle(t,e),this.quaternion.multiply(na),this}rotateOnWorldAxis(t,e){return na.setFromAxisAngle(t,e),this.quaternion.premultiply(na),this}rotateX(t){return this.rotateOnAxis(E0,t)}rotateY(t){return this.rotateOnAxis(T0,t)}rotateZ(t){return this.rotateOnAxis(w0,t)}translateOnAxis(t,e){return b0.copy(t).applyQuaternion(this.quaternion),this.position.add(b0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(E0,t)}translateY(t){return this.translateOnAxis(T0,t)}translateZ(t){return this.translateOnAxis(w0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ps.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?pc.copy(t):pc.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ps.lookAt(Eo,pc,this.up):ps.lookAt(pc,Eo,this.up),this.quaternion.setFromRotationMatrix(ps),s&&(ps.extractRotation(s.matrixWorld),na.setFromRotationMatrix(ps),this.quaternion.premultiply(na.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(A0),sa.child=t,this.dispatchEvent(sa),sa.child=null):Zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jy),Gd.child=t,this.dispatchEvent(Gd),Gd.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ps.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ps.multiply(t.parent.matrixWorld)),t.applyMatrix4(ps),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(A0),sa.child=t,this.dispatchEvent(sa),sa.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,t,Zy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,Jy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};hi.DEFAULT_UP=new L(0,1,0);hi.DEFAULT_MATRIX_AUTO_UPDATE=!0;hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gi=class extends hi{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qy={type:"move"},Aa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&u>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qy)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Gi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Og={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ys={h:0,s:0,l:0},mc={h:0,s:0,l:0};function Hd(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ue.workingColorSpace){if(t=kf(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Hd(a,r,t+1/3),this.g=Hd(a,r,t),this.b=Hd(a,r,t-1/3)}return ue.colorSpaceToWorking(this,s),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&Yt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Yt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Yt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){let n=Og[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Yt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}copyLinearToSRGB(t){return this.r=xa(t.r),this.g=xa(t.g),this.b=xa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return ue.workingToColorSpace(Fi.copy(this),t),Math.round(le(Fi.r*255,0,255))*65536+Math.round(le(Fi.g*255,0,255))*256+Math.round(le(Fi.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(Fi.copy(this),e);let n=Fi.r,s=Fi.g,r=Fi.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(Fi.copy(this),e),t.r=Fi.r,t.g=Fi.g,t.b=Fi.b,t}getStyle(t=$e){ue.workingToColorSpace(Fi.copy(this),t);let e=Fi.r,n=Fi.g,s=Fi.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ys),this.setHSL(Ys.h+t,Ys.s+e,Ys.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ys),t.getHSL(mc);let n=Fo(Ys.h,mc.h,e),s=Fo(Ys.s,mc.s,e),r=Fo(Ys.l,mc.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fi=new Ft;Ft.NAMES=Og;var Ms=class extends hi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Cn=new L,ms=new L,Vd=new L,gs=new L,ra=new L,aa=new L,R0=new L,Wd=new L,Xd=new L,qd=new L,$d=new Ve,Yd=new Ve,Kd=new Ve,xs=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Cn.subVectors(t,e),s.cross(Cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Cn.subVectors(s,e),ms.subVectors(n,e),Vd.subVectors(t,e);let a=Cn.dot(Cn),o=Cn.dot(ms),l=Cn.dot(Vd),c=ms.dot(ms),h=ms.dot(Vd),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,gs)===null?!1:gs.x>=0&&gs.y>=0&&gs.x+gs.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,gs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gs.x),l.addScaledVector(a,gs.y),l.addScaledVector(o,gs.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return $d.setScalar(0),Yd.setScalar(0),Kd.setScalar(0),$d.fromBufferAttribute(t,e),Yd.fromBufferAttribute(t,n),Kd.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector($d,r.x),a.addScaledVector(Yd,r.y),a.addScaledVector(Kd,r.z),a}static isFrontFacing(t,e,n,s){return Cn.subVectors(n,e),ms.subVectors(t,e),Cn.cross(ms).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),ms.subVectors(this.a,this.b),Cn.cross(ms).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ra.subVectors(s,n),aa.subVectors(r,n),Wd.subVectors(t,n);let l=ra.dot(Wd),c=aa.dot(Wd);if(l<=0&&c<=0)return e.copy(n);Xd.subVectors(t,s);let h=ra.dot(Xd),f=aa.dot(Xd);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(ra,a);qd.subVectors(t,r);let d=ra.dot(qd),p=aa.dot(qd);if(p>=0&&d<=p)return e.copy(r);let v=d*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(aa,o);let m=h*p-d*f;if(m<=0&&f-h>=0&&d-p>=0)return R0.subVectors(r,s),o=(f-h)/(f-h+(d-p)),e.copy(s).addScaledVector(R0,o);let g=1/(m+v+u);return a=v*g,o=u*g,e.copy(n).addScaledVector(ra,a).addScaledVector(aa,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Yn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Pn):Pn.fromBufferAttribute(r,a),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gc.copy(n.boundingBox)),gc.applyMatrix4(t.matrixWorld),this.union(gc)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(To),_c.subVectors(this.max,To),oa.subVectors(t.a,To),la.subVectors(t.b,To),ca.subVectors(t.c,To),Ks.subVectors(la,oa),Zs.subVectors(ca,la),Mr.subVectors(oa,ca);let e=[0,-Ks.z,Ks.y,0,-Zs.z,Zs.y,0,-Mr.z,Mr.y,Ks.z,0,-Ks.x,Zs.z,0,-Zs.x,Mr.z,0,-Mr.x,-Ks.y,Ks.x,0,-Zs.y,Zs.x,0,-Mr.y,Mr.x,0];return!Zd(e,oa,la,ca,_c)||(e=[1,0,0,0,1,0,0,0,1],!Zd(e,oa,la,ca,_c))?!1:(vc.crossVectors(Ks,Zs),e=[vc.x,vc.y,vc.z],Zd(e,oa,la,ca,_c))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_s[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_s[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_s[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_s[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_s[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_s[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_s[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_s[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_s),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},_s=[new L,new L,new L,new L,new L,new L,new L,new L],Pn=new L,gc=new Yn,oa=new L,la=new L,ca=new L,Ks=new L,Zs=new L,Mr=new L,To=new L,_c=new L,vc=new L,br=new L;function Zd(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){br.fromArray(i,r);let o=s.x*Math.abs(br.x)+s.y*Math.abs(br.y)+s.z*Math.abs(br.z),l=t.dot(br),c=e.dot(br),h=n.dot(br);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var ri=new L,xc=new it,t2=0,Te=class extends Xn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:t2++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Of,this.updateRanges=[],this.gpuType=xn,this.version=0,this._normalizationScale=t!==void 0?hu(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xc.fromBufferAttribute(this,e),xc.applyMatrix3(t),this.setXY(e,xc.x,xc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ri.fromBufferAttribute(this,e),ri.applyMatrix3(t),this.setXYZ(e,ri.x,ri.y,ri.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ri.fromBufferAttribute(this,e),ri.applyMatrix4(t),this.setXYZ(e,ri.x,ri.y,ri.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ri.fromBufferAttribute(this,e),ri.applyNormalMatrix(t),this.setXYZ(e,ri.x,ri.y,ri.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ri.fromBufferAttribute(this,e),ri.transformDirection(t),this.setXYZ(e,ri.x,ri.y,ri.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Gf(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Hf(t,this.array)}};var Wo=class extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Xo=class extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Le=class extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}},e2=new Yn,wo=new L,Jd=new L,_n=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):e2.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wo.subVectors(t,this.center);let e=wo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(wo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wo.copy(t.center).add(Jd)),this.expandByPoint(wo.copy(t.center).sub(Jd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},i2=0,mn=new Ce,jd=new hi,ha=new L,nn=new Yn,Ao=new Yn,yi=new L,Qe=class i extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i2++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ay(t)?Xo:Wo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return jd.lookAt(t),jd.updateMatrix(),this.applyMatrix4(jd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ha).negate(),this.translate(ha.x,ha.y,ha.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Le(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(yi.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(yi),yi.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(yi)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ao.setFromBufferAttribute(o),this.morphTargetsRelative?(yi.addVectors(nn.min,Ao.min),nn.expandByPoint(yi),yi.addVectors(nn.max,Ao.max),nn.expandByPoint(yi)):(nn.expandByPoint(Ao.min),nn.expandByPoint(Ao.max))}nn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)yi.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(yi));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)yi.fromBufferAttribute(o,c),l&&(ha.fromBufferAttribute(t,c),yi.add(ha)),s=Math.max(s,n.distanceToSquared(yi))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Te(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let F=0;F<n.count;F++)o[F]=new L,l[F]=new L;let h=new L,f=new L,u=new L,d=new it,p=new it,v=new it,m=new L,g=new L;function b(F,R,I){c[F]=c[R]=c[I]=1,h.fromBufferAttribute(n,F),f.fromBufferAttribute(n,R),u.fromBufferAttribute(n,I),d.fromBufferAttribute(r,F),p.fromBufferAttribute(r,R),v.fromBufferAttribute(r,I),f.sub(h),u.sub(h),p.sub(d),v.sub(d);let U=1/(p.x*v.y-v.x*p.y);isFinite(U)&&(m.copy(f).multiplyScalar(v.y).addScaledVector(u,-p.y).multiplyScalar(U),g.copy(u).multiplyScalar(p.x).addScaledVector(f,-v.x).multiplyScalar(U),o[F].add(m),o[R].add(m),o[I].add(m),l[F].add(g),l[R].add(g),l[I].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let F=0,R=E.length;F<R;++F){let I=E[F],U=I.start,H=I.count;for(let C=U,z=U+H;C<z;C+=3)b(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let y=new L,w=new L,T=new L,_=new L;function M(F){T.fromBufferAttribute(s,F),_.copy(T);let R=o[F];y.copy(R),y.sub(T.multiplyScalar(T.dot(R))).normalize(),w.crossVectors(_,R);let U=w.dot(l[F])<0?-1:1;a.setXYZW(F,y.x,y.y,y.z,U)}for(let F=0,R=n.count;F<R;++F)c[F]&&M(F);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,f=new L;if(t)for(let u=0,d=t.count;u<d;u+=3){let p=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)yi.fromBufferAttribute(t,e),yi.normalize(),t.setXYZ(e,yi.x,yi.y,yi.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,p=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let g=0;g<h;g++)u[p++]=c[d++]}return new Te(u,h,f)}if(this.index===null)return Yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},eh=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Of,this.updateRanges=[],this.version=0,this.uuid=Rs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=C0(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=C0(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function C0(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Rs()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var zi=new L,qo=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?hu(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)zi.fromBufferAttribute(this,e),zi.applyMatrix4(t),this.setXYZ(e,zi.x,zi.y,zi.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)zi.fromBufferAttribute(this,e),zi.applyNormalMatrix(t),this.setXYZ(e,zi.x,zi.y,zi.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)zi.fromBufferAttribute(this,e),zi.transformDirection(t),this.setXYZ(e,zi.x,zi.y,zi.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ho("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ho("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Gf(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Hf(t,this.data.array)}},Qd=new L,n2=new L,s2=new Qt,In=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Qd.subVectors(n,e).cross(n2.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Qd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||s2.getNormalMatrix(t),s=this.coplanarPoint(Qd).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},r2=0,Ln=class extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r2++}),this.uuid=Rs(),this.name="",this.type="Material",this.blending=ar,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tf,this.blendDst=wf,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ag,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hc,this.stencilZFail=Hc,this.stencilZPass=Hc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Yt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Yt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ft().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new In().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new it().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new it().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Kn=class extends Ln{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ua,Ro=new L,da=new L,fa=new L,pa=new it,Co=new it,Bg=new Ce,yc=new L,Po=new L,Sc=new L,P0=new it,tf=new it,I0=new it,bs=class extends hi{constructor(t=new Kn){if(super(),this.isSprite=!0,this.type="Sprite",ua===void 0){ua=new Qe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new eh(e,5);ua.setIndex([0,1,2,0,2,3]),ua.setAttribute("position",new qo(n,3,0,!1)),ua.setAttribute("uv",new qo(n,2,3,!1))}this.geometry=ua,this.material=t,this.center=new it(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Zt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),da.setFromMatrixScale(this.matrixWorld),Bg.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),fa.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&da.multiplyScalar(-fa.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Mc(yc.set(-.5,-.5,0),fa,a,da,s,r),Mc(Po.set(.5,-.5,0),fa,a,da,s,r),Mc(Sc.set(.5,.5,0),fa,a,da,s,r),P0.set(0,0),tf.set(1,0),I0.set(1,1);let o=t.ray.intersectTriangle(yc,Po,Sc,!1,Ro);if(o===null&&(Mc(Po.set(-.5,.5,0),fa,a,da,s,r),tf.set(0,1),o=t.ray.intersectTriangle(yc,Sc,Po,!1,Ro),o===null))return;let l=t.ray.origin.distanceTo(Ro);l<t.near||l>t.far||e.push({distance:l,point:Ro.clone(),uv:xs.getInterpolation(Ro,yc,Po,Sc,P0,tf,I0,new it),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Mc(i,t,e,n,s,r){pa.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Co.x=r*pa.x-s*pa.y,Co.y=s*pa.x+r*pa.y):Co.copy(pa),i.copy(t),i.x+=Co.x,i.y+=Co.y,i.applyMatrix4(Bg)}var vs=new L,ef=new L,bc=new L,Ec=new L,Ra=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vs.copy(this.origin).addScaledVector(this.direction,e),vs.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ef.copy(t).add(e).multiplyScalar(.5),bc.copy(e).sub(t).normalize(),Ec.copy(this.origin).sub(ef);let r=t.distanceTo(e)*.5,a=-this.direction.dot(bc),o=Ec.dot(this.direction),l=-Ec.dot(bc),c=Ec.lengthSq(),h=Math.abs(1-a*a),f,u,d,p;if(h>0)if(f=a*l-o,u=a*o-l,p=r*h,f>=0)if(u>=-p)if(u<=p){let v=1/h;f*=v,u*=v,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ef).addScaledVector(bc,u),d}intersectSphere(t,e){if(t.radius<0)return null;vs.subVectors(t.center,this.origin);let n=vs.dot(this.direction),s=vs.dot(vs)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,vs)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,p=e.x-a.x,v=e.y-a.y,m=e.z-a.z,g=n.x-a.x,b=n.y-a.y,E=n.z-a.z,y=Math.abs(l),w=Math.abs(c),T=Math.abs(h),_,M,F,R,I,U,H,C,z,X,G,tt;if(y>=w&&y>=T?(F=l,U=f,z=p,tt=g,l>=0?(_=c,M=h,R=u,I=d,H=v,C=m,X=b,G=E):(_=h,M=c,R=d,I=u,H=m,C=v,X=E,G=b)):w>=T?(F=c,U=u,z=v,tt=b,c>=0?(_=h,M=l,R=d,I=f,H=m,C=p,X=E,G=g):(_=l,M=h,R=f,I=d,H=p,C=m,X=g,G=E)):(F=h,U=d,z=m,tt=E,h>=0?(_=l,M=c,R=f,I=u,H=p,C=v,X=g,G=b):(_=c,M=l,R=u,I=f,H=v,C=p,X=b,G=g)),F===0)return null;let V=_/F,J=M/F,et=1/F,Tt=R-V*U,zt=I-J*U,$=H-V*z,xt=C-J*z,At=X-V*tt,Gt=G-J*tt,yt=At*xt-Gt*$,Ht=Tt*Gt-zt*At,Ne=$*zt-xt*Tt;if(s){if(yt<0||Ht<0||Ne<0)return null}else if((yt<0||Ht<0||Ne<0)&&(yt>0||Ht>0||Ne>0))return null;let Xt=yt+Ht+Ne;if(Xt===0)return null;let se=et*(yt*U+Ht*z+Ne*tt);return(Xt>0?se<0:se>0)?null:this.at(se/Xt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mi=class extends Ln{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},L0=new Ce,Er=new Ra,Tc=new _n,D0=new L,wc=new L,Ac=new L,Rc=new L,nf=new L,Cc=new L,N0=new L,Pc=new L,jt=class extends hi{constructor(t=new Qe,e=new Mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Cc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(nf.fromBufferAttribute(f,t),a?Cc.addScaledVector(nf,h):Cc.addScaledVector(nf.sub(e),h))}e.add(Cc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tc.copy(n.boundingSphere),Tc.applyMatrix4(r),Er.copy(t.ray).recast(t.near),!(Tc.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Tc,D0)===null||Er.origin.distanceToSquared(D0)>(t.far-t.near)**2))&&(L0.copy(r).invert(),Er.copy(t.ray).applyMatrix4(L0),!(n.boundingBox!==null&&Er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Er)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=u.length;p<v;p++){let m=u[p],g=a[m.materialIndex],b=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=b,w=E;y<w;y+=3){let T=o.getX(y),_=o.getX(y+1),M=o.getX(y+2);s=Ic(this,g,t,n,c,h,f,T,_,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=p,g=v;m<g;m+=3){let b=o.getX(m),E=o.getX(m+1),y=o.getX(m+2);s=Ic(this,a,t,n,c,h,f,b,E,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=u.length;p<v;p++){let m=u[p],g=a[m.materialIndex],b=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=b,w=E;y<w;y+=3){let T=y,_=y+1,M=y+2;s=Ic(this,g,t,n,c,h,f,T,_,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=p,g=v;m<g;m+=3){let b=m,E=m+1,y=m+2;s=Ic(this,a,t,n,c,h,f,b,E,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function a2(i,t,e,n,s,r,a,o){let l;if(t.side===Ri?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===rr,o),l===null)return null;Pc.copy(o),Pc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Pc);return c<e.near||c>e.far?null:{distance:c,point:Pc.clone(),object:i}}function Ic(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,wc),i.getVertexPosition(l,Ac),i.getVertexPosition(c,Rc);let h=a2(i,t,e,n,wc,Ac,Rc,N0);if(h){let f=new L;xs.getBarycoord(N0,wc,Ac,Rc,f),s&&(h.uv=xs.getInterpolatedAttribute(s,o,l,c,f,new it)),r&&(h.uv1=xs.getInterpolatedAttribute(r,o,l,c,f,new it)),a&&(h.normal=xs.getInterpolatedAttribute(a,o,l,c,f,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new L,materialIndex:0};xs.getNormal(wc,Ac,Rc,u.normal),h.face=u,h.barycoord=f}return h}var $o=class extends wi{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Si,h=Si,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yo=class extends Te{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ma=new Ce,F0=new Ce,Lc=[],U0=new Yn,o2=new Ce,Io=new jt,Lo=new _n,Ko=class extends jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Yo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,o2)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ma),U0.copy(t.boundingBox).applyMatrix4(ma),this.boundingBox.union(U0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ma),Lo.copy(t.boundingSphere).applyMatrix4(ma),this.boundingSphere.union(Lo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Io.geometry=this.geometry,Io.material=this.material,Io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lo.copy(this.boundingSphere),Lo.applyMatrix4(n),t.ray.intersectsSphere(Lo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ma),F0.multiplyMatrices(n,ma),Io.matrixWorld=F0,Io.raycast(t,Lc);for(let a=0,o=Lc.length;a<o;a++){let l=Lc[a];l.instanceId=r,l.object=this,e.push(l)}Lc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Yo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new $o(new Float32Array(s*this.count),s,this.count,Ph,xn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Tr=new _n,l2=new it(.5,.5),Dc=new L,js=class{constructor(t=new In,e=new In,n=new In,s=new In,r=new In,a=new In){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],p=r[8],v=r[9],m=r[10],g=r[11],b=r[12],E=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-a,d-h,g-p,w-b).normalize(),s[1].setComponents(c+a,d+h,g+p,w+b).normalize(),s[2].setComponents(c+o,d+f,g+v,w+E).normalize(),s[3].setComponents(c-o,d-f,g-v,w-E).normalize(),n)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,d-u,g-m,w-y).normalize();else if(s[4].setComponents(c-l,d-u,g-m,w-y).normalize(),e===gn)s[5].setComponents(c+l,d+u,g+m,w+y).normalize();else if(e===Ma)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Tr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(t){Tr.center.set(0,0,0);let e=l2.distanceTo(t.center);return Tr.radius=.7071067811865476+e,Tr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Dc.x=s.normal.x>0?t.max.x:t.min.x,Dc.y=s.normal.y>0?t.max.y:t.min.y,Dc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},O0=new Ce,ih=class i{constructor(){this.coordinateSystem=gn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];O0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new js),n[s].setFromProjectionMatrix(O0,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new js),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Ca=class extends Ln{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},B0=new Ce,df=new Ra,Nc=new _n,Fc=new L,Qs=class extends hi{constructor(t=new Qe,e=new Ca){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nc.copy(n.boundingSphere),Nc.applyMatrix4(s),Nc.radius+=r,t.ray.intersectsSphere(Nc)===!1)return;B0.copy(s).invert(),df.copy(t.ray).applyMatrix4(B0);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=u,v=d;p<v;p++){let m=c.getX(p);Fc.fromBufferAttribute(f,m),k0(Fc,m,l,s,t,e,this)}}else{let u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let p=u,v=d;p<v;p++)Fc.fromBufferAttribute(f,p),k0(Fc,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function k0(i,t,e,n,s,r,a){let o=df.distanceSqToPoint(i);if(o<e){let l=new L;df.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Zo=class extends wi{constructor(t=[],e=Nr,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Dn=class extends wi{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Es=class extends wi{constructor(t,e,n=Fn,s,r,a,o=Si,l=Si,c,h=Ss,f=1){if(h!==Ss&&h!==ws)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ta(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Jo=class extends Es{constructor(t,e=Fn,n=Nr,s,r,a=Si,o=Si,l,c=Ss){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},jo=class extends wi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Zn=class i extends Qe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(f,2));function p(v,m,g,b,E,y,w,T,_,M,F){let R=y/_,I=w/M,U=y/2,H=w/2,C=T/2,z=_+1,X=M+1,G=0,tt=0,V=new L;for(let J=0;J<X;J++){let et=J*I-H;for(let Tt=0;Tt<z;Tt++){let zt=Tt*R-U;V[v]=zt*b,V[m]=et*E,V[g]=C,c.push(V.x,V.y,V.z),V[v]=0,V[m]=0,V[g]=T>0?1:-1,h.push(V.x,V.y,V.z),f.push(Tt/_),f.push(1-J/M),G+=1}}for(let J=0;J<M;J++)for(let et=0;et<_;et++){let Tt=u+et+z*J,zt=u+et+z*(J+1),$=u+(et+1)+z*(J+1),xt=u+(et+1)+z*J;l.push(Tt,zt,xt),l.push(zt,$,xt),tt+=6}o.addGroup(d,tt,F),d+=tt,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var tr=class i extends Qe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new L,h=new it;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Le(a,3)),this.setAttribute("normal",new Le(o,3)),this.setAttribute("uv",new Le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Qo=class i extends Qe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],p=0,v=[],m=n/2,g=0;b(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Le(f,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(d,2));function b(){let y=new L,w=new L,T=0,_=(e-t)/n;for(let M=0;M<=r;M++){let F=[],R=M/r,I=R*(e-t)+t;for(let U=0;U<=s;U++){let H=U/s,C=H*l+o,z=Math.sin(C),X=Math.cos(C);w.x=I*z,w.y=-R*n+m,w.z=I*X,f.push(w.x,w.y,w.z),y.set(z,_,X).normalize(),u.push(y.x,y.y,y.z),d.push(H,1-R),F.push(p++)}v.push(F)}for(let M=0;M<s;M++)for(let F=0;F<r;F++){let R=v[F][M],I=v[F+1][M],U=v[F+1][M+1],H=v[F][M+1];(t>0||F!==0)&&(h.push(R,I,H),T+=3),(e>0||F!==r-1)&&(h.push(I,U,H),T+=3)}c.addGroup(g,T,0),g+=T}function E(y){let w=p,T=new it,_=new L,M=0,F=y===!0?t:e,R=y===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,m*R,0),u.push(0,R,0),d.push(.5,.5),p++;let I=p;for(let U=0;U<=s;U++){let C=U/s*l+o,z=Math.cos(C),X=Math.sin(C);_.x=F*X,_.y=m*R,_.z=F*z,f.push(_.x,_.y,_.z),u.push(0,R,0),T.x=z*.5+.5,T.y=X*.5*R+.5,d.push(T.x,T.y),p++}for(let U=0;U<s;U++){let H=w+U,C=I+U;y===!0?h.push(C,C+1,H):h.push(C+1,C,H),M+=3}c.addGroup(g,M,y===!0?1:2),g+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Yt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new it:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,s=[],r=[],a=[],o=new L,l=new Ce;for(let d=0;d<=t;d++){let p=d/t;s[d]=this.getTangentAt(p,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(le(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,p))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(le(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Pa=class extends sn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new it){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},nh=class extends Pa{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Vf(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var z0=new L,G0=new L,sf=new Vf,rf=new Vf,af=new Vf,sh=class extends sn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(G0.subVectors(s[0],s[1]).add(s[0]),c=G0);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(z0.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=z0),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),sf.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,p,v,m),rf.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,p,v,m),af.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,p,v,m)}else this.curveType==="catmullrom"&&(sf.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),rf.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),af.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(sf.calc(l),rf.calc(l),af.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function H0(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function c2(i,t){let e=1-i;return e*e*t}function h2(i,t){return 2*(1-i)*i*t}function u2(i,t){return i*i*t}function Uo(i,t,e,n){return c2(i,t)+h2(i,e)+u2(i,n)}function d2(i,t){let e=1-i;return e*e*e*t}function f2(i,t){let e=1-i;return 3*e*e*i*t}function p2(i,t){return 3*(1-i)*i*i*t}function m2(i,t){return i*i*i*t}function Oo(i,t,e,n,s){return d2(i,t)+f2(i,e)+p2(i,n)+m2(i,s)}var tl=class extends sn{constructor(t=new it,e=new it,n=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new it){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Oo(t,s.x,r.x,a.x,o.x),Oo(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},rh=class extends sn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Oo(t,s.x,r.x,a.x,o.x),Oo(t,s.y,r.y,a.y,o.y),Oo(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},el=class extends sn{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ah=class extends sn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},il=class extends sn{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Uo(t,s.x,r.x,a.x),Uo(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oh=class extends sn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Uo(t,s.x,r.x,a.x),Uo(t,s.y,r.y,a.y),Uo(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},nl=class extends sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(H0(o,l.x,c.x,h.x,f.x),H0(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new it().fromArray(s))}return this}},ff=Object.freeze({__proto__:null,ArcCurve:nh,CatmullRomCurve3:sh,CubicBezierCurve:tl,CubicBezierCurve3:rh,EllipseCurve:Pa,LineCurve:el,LineCurve3:ah,QuadraticBezierCurve:il,QuadraticBezierCurve3:oh,SplineCurve:nl}),lh=class extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ff[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ff[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},er=class extends lh{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new el(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new il(this.currentPoint.clone(),new it(t,e),new it(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new tl(this.currentPoint.clone(),new it(t,e),new it(n,s),new it(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new nl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Pa(t,e,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Rr=class extends er{constructor(t){super(t),this.uuid=Rs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new er().fromJSON(s))}return this}};function g2(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=kg(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=S2(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,f=l;for(let u=e;u<s;u+=e){let d=i[u],p=i[u+1];d<o&&(o=d),p<l&&(l=p),d>h&&(h=d),p>f&&(f=p)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return sl(r,a,e,o,l,c,0),a}function kg(i,t,e,n,s){let r;if(s===L2(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=V0(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=V0(a/n|0,i[a],i[a+1],r);return r&&Ia(r,r.next)&&(al(r),r=r.next),r}function Cr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ia(e,e.next)||Ye(e.prev,e,e.next)===0)){if(al(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function sl(i,t,e,n,s,r,a){if(!i)return;!a&&r&&w2(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?v2(i,n,s,r):_2(i)){t.push(l.i,i.i,c.i),al(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=x2(Cr(i),t),sl(i,t,e,n,s,r,2)):a===2&&y2(i,t,e,n,s,r):sl(Cr(i),t,e,n,s,r,1);break}}}function _2(i){let t=i.prev,e=i,n=i.next;if(Ye(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=f&&p.y<=d&&Do(s,o,r,l,a,c,p.x,p.y)&&Ye(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function v2(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ye(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),p=Math.min(h,f,u),v=Math.max(o,l,c),m=Math.max(h,f,u),g=pf(d,p,t,e,n),b=pf(v,m,t,e,n),E=i.prevZ,y=i.nextZ;for(;E&&E.z>=g&&y&&y.z<=b;){if(E.x>=d&&E.x<=v&&E.y>=p&&E.y<=m&&E!==s&&E!==a&&Do(o,h,l,f,c,u,E.x,E.y)&&Ye(E.prev,E,E.next)>=0||(E=E.prevZ,y.x>=d&&y.x<=v&&y.y>=p&&y.y<=m&&y!==s&&y!==a&&Do(o,h,l,f,c,u,y.x,y.y)&&Ye(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;E&&E.z>=g;){if(E.x>=d&&E.x<=v&&E.y>=p&&E.y<=m&&E!==s&&E!==a&&Do(o,h,l,f,c,u,E.x,E.y)&&Ye(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;y&&y.z<=b;){if(y.x>=d&&y.x<=v&&y.y>=p&&y.y<=m&&y!==s&&y!==a&&Do(o,h,l,f,c,u,y.x,y.y)&&Ye(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function x2(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ia(n,s)&&Gg(n,e,e.next,s)&&rl(n,s)&&rl(s,n)&&(t.push(n.i,e.i,s.i),al(e),al(e.next),e=i=s),e=e.next}while(e!==i);return Cr(e)}function y2(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&C2(a,o)){let l=Hg(a,o);a=Cr(a,a.next),l=Cr(l,l.next),sl(a,t,e,n,s,r,0),sl(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function S2(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=kg(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(R2(c))}s.sort(M2);for(let r=0;r<s.length;r++)e=b2(s[r],e);return e}function M2(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function b2(i,t){let e=E2(i,t);if(!e)return t;let n=Hg(e,i);return Cr(n,n.next),Cr(e,e.next)}function E2(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ia(i,e))return e;do{if(Ia(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&zg(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);rl(e,i)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&T2(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function T2(i,t){return Ye(i.prev,i,t.prev)<0&&Ye(t.next,i,i.next)<0}function w2(i,t,e,n){let s=i;do s.z===0&&(s.z=pf(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,A2(s)}function A2(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function pf(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function R2(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function zg(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Do(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&zg(i,t,e,n,s,r,a,o)}function C2(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!P2(i,t)&&(rl(i,t)&&rl(t,i)&&I2(i,t)&&(Ye(i.prev,i,t.prev)||Ye(i,t.prev,t))||Ia(i,t)&&Ye(i.prev,i,i.next)>0&&Ye(t.prev,t,t.next)>0)}function Ye(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ia(i,t){return i.x===t.x&&i.y===t.y}function Gg(i,t,e,n){let s=Oc(Ye(i,t,e)),r=Oc(Ye(i,t,n)),a=Oc(Ye(e,n,i)),o=Oc(Ye(e,n,t));return!!(s!==r&&a!==o||s===0&&Uc(i,e,t)||r===0&&Uc(i,n,t)||a===0&&Uc(e,i,n)||o===0&&Uc(e,t,n))}function Uc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Oc(i){return i>0?1:i<0?-1:0}function P2(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Gg(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function rl(i,t){return Ye(i.prev,i,i.next)<0?Ye(i,t,i.next)>=0&&Ye(i,i.prev,t)>=0:Ye(i,t,i.prev)<0||Ye(i,i.next,t)<0}function I2(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Hg(i,t){let e=mf(i.i,i.x,i.y),n=mf(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function V0(i,t,e,n){let s=mf(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function al(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function mf(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function L2(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var gf=class{static triangulate(t,e,n=2){return g2(t,e,n)}},wr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];W0(t),X0(n,t);let a=t.length;e.forEach(W0);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,X0(n,e[l]);let o=gf.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function W0(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function X0(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var La=class i extends Qe{constructor(t=new Rr([new it(.5,.5),new it(-.5,.5),new it(-.5,-.5),new it(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Le(s,3)),this.setAttribute("uv",new Le(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:D2,E,y=!1,w,T,_,M;if(g){E=g.getSpacedPoints(h),y=!0,u=!1;let j=g.isCatmullRomCurve3?g.closed:!1;w=g.computeFrenetFrames(h,j),T=new L,_=new L,M=new L}u||(m=0,d=0,p=0,v=0);let F=o.extractPoints(c),R=F.shape,I=F.holes;if(!wr.isClockWise(R)){R=R.reverse();for(let j=0,at=I.length;j<at;j++){let ot=I[j];wr.isClockWise(ot)&&(I[j]=ot.reverse())}}function H(j){let ot=10000000000000001e-36,wt=j[0];for(let mt=1;mt<=j.length;mt++){let te=mt%j.length,Ut=j[te],de=Ut.x-wt.x,fe=Ut.y-wt.y,be=de*de+fe*fe,N=Math.max(Math.abs(Ut.x),Math.abs(Ut.y),Math.abs(wt.x),Math.abs(wt.y)),ni=ot*N*N;if(be<=ni){j.splice(te,1),mt--;continue}wt=Ut}}H(R),I.forEach(H);let C=I.length,z=R;for(let j=0;j<C;j++){let at=I[j];R=R.concat(at)}function X(j,at,ot){return at||Zt("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(at,ot)}let G=R.length;function tt(j,at,ot){let wt,mt,te,Ut=j.x-at.x,de=j.y-at.y,fe=ot.x-j.x,be=ot.y-j.y,N=Ut*Ut+de*de,ni=Ut*be-de*fe;if(Math.abs(ni)>Number.EPSILON){let he=Math.sqrt(N),Fe=Math.sqrt(fe*fe+be*be),gt=at.x-de/he,je=at.y+Ut/he,$t=ot.x-be/Fe,Jt=ot.y+fe/Fe,A=(($t-gt)*be-(Jt-je)*fe)/(Ut*be-de*fe);wt=gt+Ut*A-j.x,mt=je+de*A-j.y;let x=wt*wt+mt*mt;if(x<=2)return new it(wt,mt);te=Math.sqrt(x/2)}else{let he=!1;Ut>Number.EPSILON?fe>Number.EPSILON&&(he=!0):Ut<-Number.EPSILON?fe<-Number.EPSILON&&(he=!0):Math.sign(de)===Math.sign(be)&&(he=!0),he?(wt=-de,mt=Ut,te=Math.sqrt(N)):(wt=Ut,mt=de,te=Math.sqrt(N/2))}return new it(wt/te,mt/te)}let V=[];for(let j=0,at=z.length,ot=at-1,wt=j+1;j<at;j++,ot++,wt++)ot===at&&(ot=0),wt===at&&(wt=0),V[j]=tt(z[j],z[ot],z[wt]);let J=[],et,Tt=V.concat();for(let j=0,at=C;j<at;j++){let ot=I[j];et=[];for(let wt=0,mt=ot.length,te=mt-1,Ut=wt+1;wt<mt;wt++,te++,Ut++)te===mt&&(te=0),Ut===mt&&(Ut=0),et[wt]=tt(ot[wt],ot[te],ot[Ut]);J.push(et),Tt=Tt.concat(et)}let zt;if(m===0)zt=wr.triangulateShape(z,I);else{let j=[],at=[];for(let ot=0;ot<m;ot++){let wt=ot/m,mt=d*Math.cos(wt*Math.PI/2),te=p*Math.sin(wt*Math.PI/2)+v;for(let Ut=0,de=z.length;Ut<de;Ut++){let fe=X(z[Ut],V[Ut],te);Ht(fe.x,fe.y,-mt),wt===0&&j.push(fe)}for(let Ut=0,de=C;Ut<de;Ut++){let fe=I[Ut];et=J[Ut];let be=[];for(let N=0,ni=fe.length;N<ni;N++){let he=X(fe[N],et[N],te);Ht(he.x,he.y,-mt),wt===0&&be.push(he)}wt===0&&at.push(be)}}zt=wr.triangulateShape(j,at)}let $=zt.length,xt=p+v;for(let j=0;j<G;j++){let at=u?X(R[j],Tt[j],xt):R[j];y?(_.copy(w.normals[0]).multiplyScalar(at.x),T.copy(w.binormals[0]).multiplyScalar(at.y),M.copy(E[0]).add(_).add(T),Ht(M.x,M.y,M.z)):Ht(at.x,at.y,0)}for(let j=1;j<=h;j++)for(let at=0;at<G;at++){let ot=u?X(R[at],Tt[at],xt):R[at];y?(_.copy(w.normals[j]).multiplyScalar(ot.x),T.copy(w.binormals[j]).multiplyScalar(ot.y),M.copy(E[j]).add(_).add(T),Ht(M.x,M.y,M.z)):Ht(ot.x,ot.y,f/h*j)}for(let j=m-1;j>=0;j--){let at=j/m,ot=d*Math.cos(at*Math.PI/2),wt=p*Math.sin(at*Math.PI/2)+v;for(let mt=0,te=z.length;mt<te;mt++){let Ut=X(z[mt],V[mt],wt);Ht(Ut.x,Ut.y,f+ot)}for(let mt=0,te=I.length;mt<te;mt++){let Ut=I[mt];et=J[mt];for(let de=0,fe=Ut.length;de<fe;de++){let be=X(Ut[de],et[de],wt);y?Ht(be.x,be.y+E[h-1].y,E[h-1].x+ot):Ht(be.x,be.y,f+ot)}}}At(),Gt();function At(){let j=s.length/3;if(u){let at=0,ot=G*at;for(let wt=0;wt<$;wt++){let mt=zt[wt];Ne(mt[2]+ot,mt[1]+ot,mt[0]+ot)}at=h+m*2,ot=G*at;for(let wt=0;wt<$;wt++){let mt=zt[wt];Ne(mt[0]+ot,mt[1]+ot,mt[2]+ot)}}else{for(let at=0;at<$;at++){let ot=zt[at];Ne(ot[2],ot[1],ot[0])}for(let at=0;at<$;at++){let ot=zt[at];Ne(ot[0]+G*h,ot[1]+G*h,ot[2]+G*h)}}n.addGroup(j,s.length/3-j,0)}function Gt(){let j=s.length/3,at=0;yt(z,at),at+=z.length;for(let ot=0,wt=I.length;ot<wt;ot++){let mt=I[ot];yt(mt,at),at+=mt.length}n.addGroup(j,s.length/3-j,1)}function yt(j,at){let ot=j.length;for(;--ot>=0;){let wt=ot,mt=ot-1;mt<0&&(mt=j.length-1);for(let te=0,Ut=h+m*2;te<Ut;te++){let de=G*te,fe=G*(te+1),be=at+wt+de,N=at+mt+de,ni=at+mt+fe,he=at+wt+fe;Xt(be,N,ni,he)}}}function Ht(j,at,ot){l.push(j),l.push(at),l.push(ot)}function Ne(j,at,ot){se(j),se(at),se(ot);let wt=s.length/3,mt=b.generateTopUV(n,s,wt-3,wt-2,wt-1);Vt(mt[0]),Vt(mt[1]),Vt(mt[2])}function Xt(j,at,ot,wt){se(j),se(at),se(wt),se(at),se(ot),se(wt);let mt=s.length/3,te=b.generateSideWallUV(n,s,mt-6,mt-3,mt-2,mt-1);Vt(te[0]),Vt(te[1]),Vt(te[3]),Vt(te[1]),Vt(te[2]),Vt(te[3])}function se(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function Vt(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return N2(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ff[s.type]().fromJSON(s)),new i(n,t.options)}},D2={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new it(r,a),new it(o,l),new it(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],p=t[s*3+2],v=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new it(a,1-l),new it(c,1-f),new it(u,1-p),new it(v,1-g)]:[new it(o,1-l),new it(h,1-f),new it(d,1-p),new it(m,1-g)]}};function N2(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var $i=class i extends Qe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,d=[],p=[],v=[],m=[];for(let g=0;g<h;g++){let b=g*u-a;for(let E=0;E<c;E++){let y=E*f-r;p.push(y,-b,0),v.push(0,0,1),m.push(E/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<o;b++){let E=b+c*g,y=b+c*(g+1),w=b+1+c*(g+1),T=b+1+c*g;d.push(E,y,T),d.push(y,w,T)}this.setIndex(d),this.setAttribute("position",new Le(p,3)),this.setAttribute("normal",new Le(v,3)),this.setAttribute("uv",new Le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ol=class i extends Qe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],f=t,u=(e-t)/s,d=new L,p=new it;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let g=r+m/n*a;d.x=f*Math.cos(g),d.y=f*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,h.push(p.x,p.y)}f+=u}for(let v=0;v<s;v++){let m=v*(n+1);for(let g=0;g<n;g++){let b=g+m,E=b,y=b+n+1,w=b+n+2,T=b+1;o.push(E,y,T),o.push(y,w,T)}}this.setIndex(o),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(c,3)),this.setAttribute("uv",new Le(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function Ur(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(q0(s))s.isRenderTargetTexture?(Yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(q0(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Oi(i){let t={};for(let e=0;e<i.length;e++){let n=Ur(i[e]);for(let s in n)t[s]=n[s]}return t}function q0(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function F2(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var Cs={clone:Ur,merge:Oi},U2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ke=class extends Ln{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=U2,this.fragmentShader=O2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ur(t.uniforms),this.uniformsGroups=F2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ft().setHex(s.value);break;case"v2":this.uniforms[n].value=new it().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ve().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Qt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ce().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Da=class extends Ke{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ai=class extends Ln{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cl,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Na=class extends Ai{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ft(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ft(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ft(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Ar('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Ar('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var ll=class extends Ln{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cl,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=bh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ch=class extends Ln{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},hh=class extends Ln{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ga(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Bc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ir=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let a;i:{n:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break n;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break e}a=e.length;break i}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break e}a=n,n=0;break i}break t}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},uh=class extends ir{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cf,endingEnd:cf}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case hf:r=t,o=2*e-n;break;case uf:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hf:a=t,l=2*n-e;break;case uf:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(n-e)/(s-e),v=p*p,m=v*p,g=-u*m+2*u*v-u*p,b=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*p+1,E=(-1-d)*m+(1.5+d)*v+.5*p,y=d*m-d*v;for(let w=0;w!==o;++w)r[w]=g*a[h+w]+b*a[c+w]+E*a[l+w]+y*a[f+w];return r}},dh=class extends ir{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},fh=class extends ir{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ph=class extends ir{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(n-e)/(s-e),v=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*p;return r}let u=o*2,d=t-1;for(let p=0;p!==o;++p){let v=a[c+p],m=a[l+p],g=d*u+p*2,b=f[g],E=f[g+1],y=t*u+p*2,w=h[y],T=h[y+1],_=k2(n,e,b,w,s);r[p]=Vg(_,v,E,T,m)}return r}};function Vg(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function B2(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function k2(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Vg(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=B2(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var rn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ga(e,this.TimeBufferType),this.values=ga(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ga(t.times,Array),values:ga(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Bc(t.settings)&&(n.settings={inTangents:ga(t.settings.inTangents,Array),outTangents:ga(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new fh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new dh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new uh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ph(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Bo:e=this.InterpolantFactoryMethodDiscrete;break;case Jc:e=this.InterpolantFactoryMethodLinear;break;case Gc:e=this.InterpolantFactoryMethodSmooth;break;case lf:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Yt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bo;case this.InterpolantFactoryMethodLinear:return Jc;case this.InterpolantFactoryMethodSmooth:return Gc;case this.InterpolantFactoryMethodBezier:return lf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Bc(this.settings)&&($0(this.settings.inTangents,t),$0(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Bc(this.settings)&&(Y0(this.settings.inTangents,t),Y0(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Zt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Zt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Zt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Ry(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Zt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Gc,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,u=f-n,d=f+n;for(let p=0;p!==n;++p){let v=e[f+p];if(v!==e[u+p]||v!==e[d+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Bc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function $0(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Y0(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}rn.prototype.ValueTypeName="";rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=Jc;var nr=class extends rn{constructor(t,e,n){super(t,e,n)}};nr.prototype.ValueTypeName="bool";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=Bo;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;var mh=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}};mh.prototype.ValueTypeName="color";var gh=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}};gh.prototype.ValueTypeName="number";var _h=class extends ir{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)qn.slerpFlat(r,0,a,c-o,a,c,l);return r}},cl=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new _h(this.times,this.values,this.getValueSize(),t)}};cl.prototype.ValueTypeName="quaternion";cl.prototype.InterpolantFactoryMethodSmooth=void 0;var sr=class extends rn{constructor(t,e,n){super(t,e,n)}};sr.prototype.ValueTypeName="string";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=Bo;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;var vh=class extends rn{constructor(t,e,n,s){super(t,e,n,s)}};vh.prototype.ValueTypeName="vector";var xh=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wg=new xh,yh=class{constructor(t){this.manager=t!==void 0?t:Wg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};yh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fa=class extends hi{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var of=new Ce,K0=new L,Z0=new L,hl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=Yi,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new js,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;K0.setFromMatrixPosition(t.matrixWorld),e.position.copy(K0),Z0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Z0),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){of.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(of,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ma||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(of)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},kc=new L,zc=new qn,Vn=new L,ul=class extends hi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(kc,zc,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,zc,Vn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(kc,zc,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,zc,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Js=new L,J0=new it,j0=new it,Ui=class extends ul{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ea*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ea*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Js.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Js.x,Js.y).multiplyScalar(-t/Js.z),Js.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Js.x,Js.y).multiplyScalar(-t/Js.z)}getViewSize(t,e){return this.getViewBounds(t,J0,j0),e.subVectors(j0,J0)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(No*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var _f=class extends hl{constructor(){super(new Ui(90,1,.5,500)),this.isPointLightShadow=!0}},an=class extends Fa{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _f}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Pr=class extends ul{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},vf=class extends hl{constructor(){super(new Pr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},dl=class extends Fa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hi.DEFAULT_UP),this.updateMatrix(),this.target=new hi,this.shadow=new vf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Ir=class extends Fa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var _a=-90,va=1,Ua=class extends hi{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ui(_a,va,t,e);s.layers=this.layers,this.add(s);let r=new Ui(_a,va,t,e);r.layers=this.layers,this.add(r);let a=new Ui(_a,va,t,e);a.layers=this.layers,this.add(a);let o=new Ui(_a,va,t,e);o.layers=this.layers,this.add(o);let l=new Ui(_a,va,t,e);l.layers=this.layers,this.add(l);let c=new Ui(_a,va,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Sh=class extends Ui{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},fl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=z2.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function z2(){this._document.hidden===!1&&this.reset()}var Xf="\\[\\]\\.:\\/",G2=new RegExp("["+Xf+"]","g"),qf="[^"+Xf+"]",H2="[^"+Xf.replace("\\.","")+"]",V2=/((?:WC+[\/:])*)/.source.replace("WC",qf),W2=/(WCOD+)?/.source.replace("WCOD",H2),X2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qf),q2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qf),$2=new RegExp("^"+V2+W2+X2+q2+"$"),Y2=["material","materials","bones","map"],xf=class{constructor(t,e,n){let s=n||ze.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ze=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(G2,"")}static parseTrackName(t){let e=$2.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Y2.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Yt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Zt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ze.Composite=xf;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var aA=new Float32Array(1);var Q0=new Ce,pl=class{constructor(t,e,n=0,s=1/0){this.ray=new Ra(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new wa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Zt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Q0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Q0),this}intersectObject(t,e=!0,n=[]){return yf(t,this,n,e),n.sort(tg),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)yf(t[s],this,n,e);return n.sort(tg),n}};function tg(i,t){return i.distance-t.distance}function yf(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)yf(r[a],t,e,!0)}}var jf=class jf{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};jf.prototype.isMatrix2=!0;var Sf=jf;function $f(i,t,e,n){let s=K2(n);switch(e){case Lf:return i*t;case Ph:return i*t/s.components*s.byteLength;case Ih:return i*t/s.components*s.byteLength;case or:return i*t*2/s.components*s.byteLength;case Lh:return i*t*2/s.components*s.byteLength;case Df:return i*t*3/s.components*s.byteLength;case Un:return i*t*4/s.components*s.byteLength;case Dh:return i*t*4/s.components*s.byteLength;case bl:case El:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Tl:case wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fh:case Oh:return Math.max(i,16)*Math.max(t,8)/4;case Nh:case Uh:return Math.max(i,8)*Math.max(t,8)/2;case Bh:case kh:case Gh:case Hh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zh:case Al:case Vh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case qh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $h:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Yh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Kh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Zh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Jh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case jh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Qh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case tu:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case eu:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case iu:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case nu:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case su:case ru:case au:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ou:case lu:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Rl:case cu:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function K2(i){switch(i){case Yi:case Rf:return{byteLength:1,components:1};case ka:case Cf:case Ci:return{byteLength:2,components:1};case Rh:case Ch:return{byteLength:2,components:4};case Fn:case Ah:case xn:return{byteLength:4,components:1};case Pf:case If:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function d_(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function J2(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<f.length;d++){let p=f[u],v=f[d];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++u,f[u]=v)}f.length=u+1;for(let d=0,p=f.length;d<p;d++){let v=f[d];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var j2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Q2=`#ifdef USE_ALPHAHASH
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
#endif`,tS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sS=`#ifdef USE_AOMAP
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
#endif`,rS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aS=`#ifdef USE_BATCHING
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
#endif`,oS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uS=`#ifdef USE_IRIDESCENCE
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
#endif`,dS=`#ifdef USE_BUMPMAP
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
#endif`,fS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_S=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,SS=`#define PI 3.141592653589793
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
} // validated`,MS=`vec3 transformedNormal = objectNormal;
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
#endif`,bS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ES=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AS="gl_FragColor = linearToOutputTexel( gl_FragColor );",RS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CS=`#ifdef USE_ENVMAP
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
#endif`,PS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,IS=`#ifdef USE_ENVMAP
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
#endif`,LS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DS=`#ifdef USE_ENVMAP
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
#endif`,NS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,US=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BS=`#ifdef USE_GRADIENTMAP
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
}`,kS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,VS=`#ifdef USE_ENVMAP
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
#endif`,WS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$S=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YS=`PhysicalMaterial material;
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
#endif`,KS=`uniform sampler2D dfgLUT;
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
}`,ZS=`
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
#endif`,JS=`#if defined( RE_IndirectDiffuse )
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
#endif`,jS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QS=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,tM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,oM=`#if defined( USE_POINTS_UV )
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
#endif`,lM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uM=`#if defined( USE_MORPHCOLORS )
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
#endif`,dM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fM=`#ifdef USE_MORPHTARGETS
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
#endif`,pM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yM=`#ifdef USE_NORMALMAP
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
#endif`,SM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,AM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,UM=`float getShadowMask() {
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
}`,OM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BM=`#ifdef USE_SKINNING
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
#endif`,kM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zM=`#ifdef USE_SKINNING
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
#endif`,GM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,XM=`#ifdef USE_TRANSMISSION
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
#endif`,qM=`#ifdef USE_TRANSMISSION
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
#endif`,$M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,JM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jM=`uniform sampler2D t2D;
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
}`,QM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tb=`uniform float backgroundBlurriness;
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
}`,eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ib=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nb=`#include <common>
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
}`,sb=`#if DEPTH_PACKING == 3200
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
}`,rb=`#define DISTANCE
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
}`,ab=`#define DISTANCE
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
}`,ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cb=`uniform float scale;
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
}`,hb=`uniform vec3 diffuse;
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
}`,ub=`#include <common>
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
}`,db=`uniform vec3 diffuse;
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
}`,fb=`#define LAMBERT
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
}`,pb=`#define LAMBERT
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
}`,mb=`#define MATCAP
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
}`,gb=`#define MATCAP
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
}`,_b=`#define NORMAL
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
}`,vb=`#define NORMAL
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
}`,xb=`#define PHONG
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
}`,yb=`#define PHONG
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
}`,Sb=`#define STANDARD
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
}`,Mb=`#define STANDARD
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
}`,bb=`#define TOON
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
}`,Eb=`#define TOON
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
}`,Tb=`uniform float size;
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
}`,wb=`uniform vec3 diffuse;
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
}`,Ab=`#include <common>
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
}`,Rb=`uniform vec3 color;
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
}`,Cb=`uniform float rotation;
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
}`,Pb=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:j2,alphahash_pars_fragment:Q2,alphamap_fragment:tS,alphamap_pars_fragment:eS,alphatest_fragment:iS,alphatest_pars_fragment:nS,aomap_fragment:sS,aomap_pars_fragment:rS,batching_pars_vertex:aS,batching_vertex:oS,begin_vertex:lS,beginnormal_vertex:cS,bsdfs:hS,iridescence_fragment:uS,bumpmap_pars_fragment:dS,clipping_planes_fragment:fS,clipping_planes_pars_fragment:pS,clipping_planes_pars_vertex:mS,clipping_planes_vertex:gS,color_fragment:_S,color_pars_fragment:vS,color_pars_vertex:xS,color_vertex:yS,common:SS,defaultnormal_vertex:MS,displacementmap_pars_vertex:bS,displacementmap_vertex:ES,emissivemap_fragment:TS,emissivemap_pars_fragment:wS,colorspace_fragment:AS,colorspace_pars_fragment:RS,envmap_fragment:CS,envmap_common_pars_fragment:PS,envmap_pars_fragment:IS,envmap_pars_vertex:LS,envmap_physical_pars_fragment:VS,envmap_vertex:DS,fog_vertex:NS,fog_pars_vertex:FS,fog_fragment:US,fog_pars_fragment:OS,gradientmap_pars_fragment:BS,lightmap_pars_fragment:kS,lights_lambert_fragment:zS,lights_lambert_pars_fragment:GS,lights_pars_begin:HS,lights_toon_fragment:WS,lights_toon_pars_fragment:XS,lights_phong_fragment:qS,lights_phong_pars_fragment:$S,lights_physical_fragment:YS,lights_physical_pars_fragment:KS,lights_fragment_begin:ZS,lights_fragment_maps:JS,lights_fragment_end:jS,lightprobes_pars_fragment:QS,logdepthbuf_fragment:tM,logdepthbuf_pars_fragment:eM,logdepthbuf_pars_vertex:iM,logdepthbuf_vertex:nM,map_fragment:sM,map_pars_fragment:rM,map_particle_fragment:aM,map_particle_pars_fragment:oM,metalnessmap_fragment:lM,metalnessmap_pars_fragment:cM,morphinstance_vertex:hM,morphcolor_vertex:uM,morphnormal_vertex:dM,morphtarget_pars_vertex:fM,morphtarget_vertex:pM,normal_fragment_begin:mM,normal_fragment_maps:gM,normal_pars_fragment:_M,normal_pars_vertex:vM,normal_vertex:xM,normalmap_pars_fragment:yM,clearcoat_normal_fragment_begin:SM,clearcoat_normal_fragment_maps:MM,clearcoat_pars_fragment:bM,iridescence_pars_fragment:EM,opaque_fragment:TM,packing:wM,premultiplied_alpha_fragment:AM,project_vertex:RM,dithering_fragment:CM,dithering_pars_fragment:PM,roughnessmap_fragment:IM,roughnessmap_pars_fragment:LM,shadowmap_pars_fragment:DM,shadowmap_pars_vertex:NM,shadowmap_vertex:FM,shadowmask_pars_fragment:UM,skinbase_vertex:OM,skinning_pars_vertex:BM,skinning_vertex:kM,skinnormal_vertex:zM,specularmap_fragment:GM,specularmap_pars_fragment:HM,tonemapping_fragment:VM,tonemapping_pars_fragment:WM,transmission_fragment:XM,transmission_pars_fragment:qM,uv_pars_fragment:$M,uv_pars_vertex:YM,uv_vertex:KM,worldpos_vertex:ZM,background_vert:JM,background_frag:jM,backgroundCube_vert:QM,backgroundCube_frag:tb,cube_vert:eb,cube_frag:ib,depth_vert:nb,depth_frag:sb,distance_vert:rb,distance_frag:ab,equirect_vert:ob,equirect_frag:lb,linedashed_vert:cb,linedashed_frag:hb,meshbasic_vert:ub,meshbasic_frag:db,meshlambert_vert:fb,meshlambert_frag:pb,meshmatcap_vert:mb,meshmatcap_frag:gb,meshnormal_vert:_b,meshnormal_frag:vb,meshphong_vert:xb,meshphong_frag:yb,meshphysical_vert:Sb,meshphysical_frag:Mb,meshtoon_vert:bb,meshtoon_frag:Eb,points_vert:Tb,points_frag:wb,shadow_vert:Ab,shadow_frag:Rb,sprite_vert:Cb,sprite_frag:Pb},Mt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Qn={basic:{uniforms:Oi([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Oi([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ft(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Oi([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Oi([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Oi([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Oi([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Oi([Mt.points,Mt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Oi([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Oi([Mt.common,Mt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Oi([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Oi([Mt.sprite,Mt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:Oi([Mt.common,Mt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:Oi([Mt.lights,Mt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};Qn.physical={uniforms:Oi([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var uu={r:0,b:0,g:0},Ib=new Ce,f_=new Qt;f_.set(-1,0,0,0,1,0,0,0,1);function Lb(i,t,e,n,s,r){let a=new Ft(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(b){let E=b.isScene===!0?b.background:null;if(E&&E.isTexture){let y=b.backgroundBlurriness>0;E=t.get(E,y)}return E}function p(b){let E=!1,y=d(b);y===null?m(a,o):y&&y.isColor&&(m(y,1),E=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(b,E){let y=d(E);y&&y.isCubeTexture?(c===void 0&&(c=new jt(new Zn(1,1,1),new Ke({name:"BackgroundCubeMaterial",uniforms:Ur(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ib.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(f_),c.material.toneMapped=ue.getTransfer(y.colorSpace)!==Ee,(h!==y||f!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new jt(new $i(2,2),new Ke({name:"BackgroundMaterial",uniforms:Ur(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ue.getTransfer(y.colorSpace)!==Ee,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,E){b.getRGB(uu,Wf(i)),e.buffers.color.setClear(uu.r,uu.g,uu.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:p,addToRenderList:v,dispose:g}}function Db(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(I,U,H,C,z){let X=!1,G=f(I,C,H,U);r!==G&&(r=G,c(r.object)),X=d(I,C,H,z),X&&p(I,C,H,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,y(I,U,H,C),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function f(I,U,H,C){let z=C.wireframe===!0,X=n[U.id];X===void 0&&(X={},n[U.id]=X);let G=I.isInstancedMesh===!0?I.id:0,tt=X[G];tt===void 0&&(tt={},X[G]=tt);let V=tt[H.id];V===void 0&&(V={},tt[H.id]=V);let J=V[z];return J===void 0&&(J=u(l()),V[z]=J),J}function u(I){let U=[],H=[],C=[];for(let z=0;z<e;z++)U[z]=0,H[z]=0,C[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:C,object:I,attributes:{},index:null}}function d(I,U,H,C){let z=r.attributes,X=U.attributes,G=0,tt=H.getAttributes();for(let V in tt)if(tt[V].location>=0){let et=z[V],Tt=X[V];if(Tt===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(Tt=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(Tt=I.instanceColor)),et===void 0||et.attribute!==Tt||Tt&&et.data!==Tt.data)return!0;G++}return r.attributesNum!==G||r.index!==C}function p(I,U,H,C){let z={},X=U.attributes,G=0,tt=H.getAttributes();for(let V in tt)if(tt[V].location>=0){let et=X[V];et===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(et=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(et=I.instanceColor));let Tt={};Tt.attribute=et,et&&et.data&&(Tt.data=et.data),z[V]=Tt,G++}r.attributes=z,r.attributesNum=G,r.index=C}function v(){let I=r.newAttributes;for(let U=0,H=I.length;U<H;U++)I[U]=0}function m(I){g(I,0)}function g(I,U){let H=r.newAttributes,C=r.enabledAttributes,z=r.attributeDivisors;H[I]=1,C[I]===0&&(i.enableVertexAttribArray(I),C[I]=1),z[I]!==U&&(i.vertexAttribDivisor(I,U),z[I]=U)}function b(){let I=r.newAttributes,U=r.enabledAttributes;for(let H=0,C=U.length;H<C;H++)U[H]!==I[H]&&(i.disableVertexAttribArray(H),U[H]=0)}function E(I,U,H,C,z,X,G){G===!0?i.vertexAttribIPointer(I,U,H,z,X):i.vertexAttribPointer(I,U,H,C,z,X)}function y(I,U,H,C){v();let z=C.attributes,X=H.getAttributes(),G=U.defaultAttributeValues;for(let tt in X){let V=X[tt];if(V.location>=0){let J=z[tt];if(J===void 0&&(tt==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),tt==="instanceColor"&&I.instanceColor&&(J=I.instanceColor)),J!==void 0){let et=J.normalized,Tt=J.itemSize,zt=t.get(J);if(zt===void 0)continue;let $=zt.buffer,xt=zt.type,At=zt.bytesPerElement,Gt=xt===i.INT||xt===i.UNSIGNED_INT||J.gpuType===Ah;if(J.isInterleavedBufferAttribute){let yt=J.data,Ht=yt.isInterleavedBuffer===!0?yt.stride:yt.itemSize,Ne=J.offset;if(yt.isInstancedInterleavedBuffer||yt.isInstancedBufferAttribute){for(let Xt=0;Xt<V.locationSize;Xt++)g(V.location+Xt,yt.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Xt=0;Xt<V.locationSize;Xt++)m(V.location+Xt);i.bindBuffer(i.ARRAY_BUFFER,$);for(let Xt=0;Xt<V.locationSize;Xt++)E(V.location+Xt,Tt/V.locationSize,xt,et,Ht*At,(Ne+Tt/V.locationSize*Xt)*At,Gt)}else{if(J.isInstancedBufferAttribute){for(let yt=0;yt<V.locationSize;yt++)g(V.location+yt,J.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let yt=0;yt<V.locationSize;yt++)m(V.location+yt);i.bindBuffer(i.ARRAY_BUFFER,$);for(let yt=0;yt<V.locationSize;yt++)E(V.location+yt,Tt/V.locationSize,xt,et,Tt*At,Tt/V.locationSize*yt*At,Gt)}}else if(G!==void 0){let et=G[tt];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(V.location,et);break;case 3:i.vertexAttrib3fv(V.location,et);break;case 4:i.vertexAttrib4fv(V.location,et);break;default:i.vertexAttrib1fv(V.location,et)}}}}b()}function w(){F();for(let I in n){let U=n[I];for(let H in U){let C=U[H];for(let z in C){let X=C[z];for(let G in X)h(X[G].object),delete X[G];delete C[z]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;let U=n[I.id];for(let H in U){let C=U[H];for(let z in C){let X=C[z];for(let G in X)h(X[G].object),delete X[G];delete C[z]}}delete n[I.id]}function _(I){for(let U in n){let H=n[U];for(let C in H){let z=H[C];if(z[I.id]===void 0)continue;let X=z[I.id];for(let G in X)h(X[G].object),delete X[G];delete z[I.id]}}}function M(I){for(let U in n){let H=n[U],C=I.isInstancedMesh===!0?I.id:0,z=H[C];if(z!==void 0){for(let X in z){let G=z[X];for(let tt in G)h(G[tt].object),delete G[tt];delete z[X]}delete H[C],Object.keys(H).length===0&&delete n[U]}}}function F(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function Nb(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Fb(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Un&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let M=_===Ci&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Yi&&_!==xn&&!M&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Yt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Yt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Yt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:y,maxSamples:w,samples:T}}function Ub(i){let t=this,e=null,n=0,s=!1,r=!1,a=new In,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let p=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,g=i.get(f);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,E=b*4,y=g.clippingState||null;l.value=y,y=h(p,u,E,d);for(let w=0;w!==E;++w)y[w]=e[w];g.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,p){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=l.value,p!==!0||m===null){let g=d+v*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<g)&&(m=new Float32Array(g));for(let E=0,y=d;E!==v;++E,y+=4)a.copy(f[E]).applyMatrix4(b,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var Dl=class extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Zo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zn(5,5,5),r=new Ke({name:"CubemapFromEquirect",uniforms:Ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ri,blending:Ts});r.uniforms.tEquirect.value=e;let a=new jt(s,r),o=e.minFilter;return e.minFilter===Nn&&(e.minFilter=Ti),new Ua(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Xg=256,Ob=3,Bb=20,p_=256,m_=16,kb=3,zb=new L,Gb=new Ft,Ga=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ua(1,10,null),this._boxMesh=new jt(new Zn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=zb}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(Gb));let m=new Ua(n,s,h);return m.position.copy(o),m.update(l,t),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=p,t.background=v,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Xg,zf(t))}_fromTexture(t,e){t.mapping===Nr||t.mapping===Ba?this._setSize(t.image.length===0?Xg:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=qg(t,!1,!1),n=Math.log2(t)-Ob;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=qg(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Nr||t.mapping===Ba?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yg()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=$g()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Hb(),this._integrationMaterial=Vb());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/m_);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-kb)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(p_*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Wb());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function qg(i,t,e){return new Dl(i,{minFilter:Nn,generateMipmaps:t,type:Ci,colorSpace:ko,depthBuffer:e})}function Nl(i,t,e){return new Ke({name:i,uniforms:t,vertexShader:oe.cube_vert,fragmentShader:e,side:Ri,blending:Ts,depthTest:!1,depthWrite:!1})}function Hb(){return Nl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${p_}u

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
	`)}function Vb(){return Nl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:m_}},`

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
	`)}function Wb(){return Nl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Bb}
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
	`)}function $g(){return Nl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Yg(){return Nl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Xb(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Eh||d===Th)if(t.has(u)){let p=t.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let v=new Dl(p.height);return v.fromEquirectangularTexture(i,u),t.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,p=d===Eh||d===Th,v=d===Nr||d===Ba;if(p||v){let m=e.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Ga(i)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return p&&b&&b.height>0||v&&b&&l(b)?(n===null&&(n=new Ga(i)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===Eh?u.mapping=Nr:d===Th&&(u.mapping=Ba),u}function l(u){let d=0,p=6;for(let v=0;v<p;v++)u[v]!==void 0&&d++;return d===p}function c(u){let d=u.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function qb(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ar("WebGLRenderer: "+n+" extension not supported."),s}}}function $b(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);let v=r.get(p);v&&(t.remove(v),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),e.memory.geometries++),v}function h(p){let v=p.attributes;for(let m in v)t.update(v[m],i.ARRAY_BUFFER)}function f(p){let v=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let b=v!==null?v.array.length:m.array.length/3-1,E=m.count>=65535?Xo:Wo,y=new E(Math.ceil(b/3)*6,1),w=y.array;if(v!==null){let _=v.array;g=v.version;for(let M=0,F=0;M<b;M+=3){let R=_[M+0],I=_[M+1],U=_[M+2];w[F++]=R,w[F++]=I,w[F++]=I,w[F++]=U,w[F++]=U,w[F++]=R}}else{g=m.version;for(let _=0,M=0;_<b;_+=3){let F=_+0,R=_+1,I=_+2;w[M++]=F,w[M++]=R,w[M++]=R,w[M++]=I,w[M++]=I,w[M++]=F}}y.version=g;let T=r.get(p);T&&t.remove(T),r.set(p,y)}function u(p){let v=r.get(p);if(v){let m=p.index;m!==null&&v.version<m.version&&f(p)}else f(p);return r.get(p)}function d(){for(let p in s){let v=s[p].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function Yb(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),e.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let v=0;for(let m=0;m<d;m++)v+=u[m];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Kb(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Zt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Zb(i,t,e){let n=new WeakMap,s=new Ve;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let F=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",F)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],E=0;d===!0&&(E=1),p===!0&&(E=2),v===!0&&(E=3);let y=o.attributes.position.count*E,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*w*4*f),_=new Vo(T,y,w,f);_.type=xn,_.needsUpdate=!0;let M=E*4;for(let R=0;R<f;R++){let I=m[R],U=g[R],H=b[R],C=y*w*4*R;for(let z=0;z<I.count;z++){let X=z*M;d===!0&&(s.fromBufferAttribute(I,z),T[C+X+0]=s.x,T[C+X+1]=s.y,T[C+X+2]=s.z,T[C+X+3]=0),p===!0&&(s.fromBufferAttribute(U,z),T[C+X+4]=s.x,T[C+X+5]=s.y,T[C+X+6]=s.z,T[C+X+7]=0),v===!0&&(s.fromBufferAttribute(H,z),T[C+X+8]=s.x,T[C+X+9]=s.y,T[C+X+10]=s.z,T[C+X+11]=H.itemSize===4?s.w:1)}}u={count:f,texture:_,size:new it(y,w)},n.set(o,u),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Jb(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var jb={[gl]:"LINEAR_TONE_MAPPING",[_l]:"REINHARD_TONE_MAPPING",[vl]:"CINEON_TONE_MAPPING",[Dr]:"ACES_FILMIC_TONE_MAPPING",[yl]:"AGX_TONE_MAPPING",[Sl]:"NEUTRAL_TONE_MAPPING",[xl]:"CUSTOM_TONE_MAPPING"};function Qb(i,t,e,n,s,r){let a=new ci(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Qe;h.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Le([0,2,0,0,2,0],2));let f=new Da({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new jt(h,f),d=new Pr(-1,1,1,-1,0,1),p=null,v=null,m=!1,g,b=null,E=[],y=!1;this.setSize=function(w,T){a.setSize(w,T),o!==null&&o.setSize(w,T),l!==null&&l.setSize(w,T);for(let _=0;_<E.length;_++){let M=E[_];M.setSize&&M.setSize(w,T)}},this.setEffects=function(w){E=w,y=E.length>0&&E[0].isRenderPass===!0;let T=a.width,_=a.height;E.length>0&&o===null&&(o=new ci(T,_,{type:Ci,depthBuffer:!1,stencilBuffer:!1}),l=new ci(T,_,{type:Ci,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&E.some(F=>F.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new Es(T,_),r===!0&&(c.format=ws,c.type=Fr)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let F=0;F<E.length;F++){let R=E[F];R.setSize&&R.setSize(T,_),M&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(w,T){if(m||w.toneMapping===Jn&&E.length===0)return!1;if(b=T,T!==null){let _=T.width,M=T.height;(a.width!==_||a.height!==M)&&this.setSize(_,M)}return y===!1&&w.setRenderTarget(a),g=w.toneMapping,w.toneMapping=Jn,!0},this.hasRenderPass=function(){return y},this.end=function(w,T){w.toneMapping=g,m=!0;let _=a,M=o;for(let F=0;F<E.length;F++){let R=E[F];R.enabled!==!1&&(R.render(w,M,_,T),R.needsSwap!==!1&&(_=M,M=M===o?l:o))}if(p!==w.outputColorSpace||v!==w.toneMapping){p=w.outputColorSpace,v=w.toneMapping,f.defines={},ue.getTransfer(p)===Ee&&(f.defines.SRGB_TRANSFER="");let F=jb[v];F&&(f.defines[F]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(b),w.render(u,d),b=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var g_=new wi,__=new Es(1,1),v_=new Jo(1),x_=new Vo,y_=new th,S_=new Zo,Kg=[],Zg=[],Jg=new Float32Array(16),jg=new Float32Array(9),Qg=new Float32Array(4);function Ha(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Kg[s];if(r===void 0&&(r=new Float32Array(s),Kg[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function di(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function fi(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function pu(i,t){let e=Zg[t];e===void 0&&(e=new Int32Array(t),Zg[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function t3(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function e3(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(di(e,t))return;i.uniform2fv(this.addr,t),fi(e,t)}}function i3(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(di(e,t))return;i.uniform3fv(this.addr,t),fi(e,t)}}function n3(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(di(e,t))return;i.uniform4fv(this.addr,t),fi(e,t)}}function s3(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(di(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),fi(e,t)}else{if(di(e,n))return;Qg.set(n),i.uniformMatrix2fv(this.addr,!1,Qg),fi(e,n)}}function r3(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(di(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),fi(e,t)}else{if(di(e,n))return;jg.set(n),i.uniformMatrix3fv(this.addr,!1,jg),fi(e,n)}}function a3(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(di(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),fi(e,t)}else{if(di(e,n))return;Jg.set(n),i.uniformMatrix4fv(this.addr,!1,Jg),fi(e,n)}}function o3(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function l3(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(di(e,t))return;i.uniform2iv(this.addr,t),fi(e,t)}}function c3(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(di(e,t))return;i.uniform3iv(this.addr,t),fi(e,t)}}function h3(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(di(e,t))return;i.uniform4iv(this.addr,t),fi(e,t)}}function u3(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function d3(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(di(e,t))return;i.uniform2uiv(this.addr,t),fi(e,t)}}function f3(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(di(e,t))return;i.uniform3uiv(this.addr,t),fi(e,t)}}function p3(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(di(e,t))return;i.uniform4uiv(this.addr,t),fi(e,t)}}function mu(i){return i.version===0&&(i.compareFunction=Uf,i.needsUpdate=!0),i}function m3(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=mu(__):r=g_,e.setTexture2D(t||r,s)}function g3(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||y_,s)}function _3(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=mu(v_):r=S_,e.setTextureCube(t||r,s)}function v3(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||x_,s)}function x3(i){switch(i){case 5126:return t3;case 35664:return e3;case 35665:return i3;case 35666:return n3;case 35674:return s3;case 35675:return r3;case 35676:return a3;case 5124:case 35670:return o3;case 35667:case 35671:return l3;case 35668:case 35672:return c3;case 35669:case 35673:return h3;case 5125:return u3;case 36294:return d3;case 36295:return f3;case 36296:return p3;case 35678:case 36198:case 36298:case 36306:case 35682:return m3;case 35679:case 36299:case 36307:return g3;case 35680:case 36300:case 36308:case 36293:return _3;case 36289:case 36303:case 36311:case 36292:return v3}}function y3(i,t){i.uniform1fv(this.addr,t)}function S3(i,t){let e=Ha(t,this.size,2);i.uniform2fv(this.addr,e)}function M3(i,t){let e=Ha(t,this.size,3);i.uniform3fv(this.addr,e)}function b3(i,t){let e=Ha(t,this.size,4);i.uniform4fv(this.addr,e)}function E3(i,t){let e=Ha(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function T3(i,t){let e=Ha(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function w3(i,t){let e=Ha(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function A3(i,t){i.uniform1iv(this.addr,t)}function R3(i,t){i.uniform2iv(this.addr,t)}function C3(i,t){i.uniform3iv(this.addr,t)}function P3(i,t){i.uniform4iv(this.addr,t)}function I3(i,t){i.uniform1uiv(this.addr,t)}function L3(i,t){i.uniform2uiv(this.addr,t)}function D3(i,t){i.uniform3uiv(this.addr,t)}function N3(i,t){i.uniform4uiv(this.addr,t)}function F3(i,t,e){let n=this.cache,s=t.length,r=pu(e,s);di(n,r)||(i.uniform1iv(this.addr,r),fi(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=mu(__):a=g_;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function U3(i,t,e){let n=this.cache,s=t.length,r=pu(e,s);di(n,r)||(i.uniform1iv(this.addr,r),fi(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||y_,r[a])}function O3(i,t,e){let n=this.cache,s=t.length,r=pu(e,s);di(n,r)||(i.uniform1iv(this.addr,r),fi(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=mu(v_):a=S_;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function B3(i,t,e){let n=this.cache,s=t.length,r=pu(e,s);di(n,r)||(i.uniform1iv(this.addr,r),fi(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||x_,r[a])}function k3(i){switch(i){case 5126:return y3;case 35664:return S3;case 35665:return M3;case 35666:return b3;case 35674:return E3;case 35675:return T3;case 35676:return w3;case 5124:case 35670:return A3;case 35667:case 35671:return R3;case 35668:case 35672:return C3;case 35669:case 35673:return P3;case 5125:return I3;case 36294:return L3;case 36295:return D3;case 36296:return N3;case 35678:case 36198:case 36298:case 36306:case 35682:return F3;case 35679:case 36299:case 36307:return U3;case 35680:case 36300:case 36308:case 36293:return O3;case 36289:case 36303:case 36311:case 36292:return B3}}var ep=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=x3(e.type)}},ip=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=k3(e.type)}},np=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Qf=/(\w+)(\])?(\[|\.)?/g;function t_(i,t){i.seq.push(t),i.map[t.id]=t}function z3(i,t,e){let n=i.name,s=n.length;for(Qf.lastIndex=0;;){let r=Qf.exec(n),a=Qf.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){t_(e,c===void 0?new ep(o,i,t):new ip(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new np(o),t_(e,f)),e=f}}}var za=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);z3(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function e_(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var G3=37297,H3=0;function V3(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var i_=new Qt;function W3(i){ue._getMatrix(i_,ue.workingColorSpace,i);let t=`mat3( ${i_.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(i)){case zo:return[t,"LinearTransferOETF"];case Ee:return[t,"sRGBTransferOETF"];default:return Yt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function n_(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+V3(i.getShaderSource(t),o)}else return r}function X3(i,t){let e=W3(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var q3={[gl]:"Linear",[_l]:"Reinhard",[vl]:"Cineon",[Dr]:"ACESFilmic",[yl]:"AgX",[Sl]:"Neutral",[xl]:"Custom"};function $3(i,t){let e=q3[t];return e===void 0?(Yt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var du=new L;function Y3(){ue.getLuminanceCoefficients(du);let i=du.x.toFixed(4),t=du.y.toFixed(4),e=du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K3(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ll).join(`
`)}function Z3(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function J3(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ll(i){return i!==""}function s_(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function r_(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var j3=/^[ \t]*#include +<([\w\d./]+)>/gm;function sp(i){return i.replace(j3,Q3)}function Q3(i,t){let e=oe[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return sp(e)}var tE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function a_(i){return i.replace(tE,eE)}function eE(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function o_(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var iE={[ml]:"SHADOWMAP_TYPE_PCF",[Oa]:"SHADOWMAP_TYPE_VSM"};function nE(i){return iE[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var sE={[Ba]:"ENVMAP_MODE_REFRACTION"};function rE(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":sE[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var aE={[bh]:"ENVMAP_BLENDING_MULTIPLY",[Mg]:"ENVMAP_BLENDING_MIX",[bg]:"ENVMAP_BLENDING_ADD"};function oE(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":aE[i.combine]||"ENVMAP_BLENDING_NONE"}function lE(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=nE(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=rE(e),f=oE(e),u=K3(e),d=Z3(r),p=s.createProgram(),v,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ll).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ll).join(`
`),m.length>0&&(m+=`
`)):(v=[o_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ll).join(`
`),m=[o_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?oe.tonemapping_pars_fragment:"",e.toneMapping!==Jn?$3("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,X3("linearToOutputTexel",e.outputColorSpace),Y3(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ll).join(`
`)),a=sp(a),a=s_(a,e),a=r_(a,e),o=sp(o),o=s_(o,e),o=r_(o,e),a=a_(a),o=a_(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",e.glslVersion===Bf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=g+v+a,E=g+m+o,y=e_(s,s.VERTEX_SHADER,b),w=e_(s,s.FRAGMENT_SHADER,E);s.attachShader(p,y),s.attachShader(p,w),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function T(R){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(p)||"",U=s.getShaderInfoLog(y)||"",H=s.getShaderInfoLog(w)||"",C=I.trim(),z=U.trim(),X=H.trim(),G=!0,tt=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,y,w);else{let V=n_(s,y,"vertex"),J=n_(s,w,"fragment");Zt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+C+`
`+V+`
`+J)}else C!==""?Yt("WebGLProgram: Program Info Log:",C):(z===""||X==="")&&(tt=!1);tt&&(R.diagnostics={runnable:G,programLog:C,vertexShader:{log:z,prefix:v},fragmentShader:{log:X,prefix:m}})}s.deleteShader(y),s.deleteShader(w),_=new za(s,p),M=J3(s,p)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(p,G3)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=H3++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=w,this}var cE=0,rp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ap(t),e.set(t,n)),n}},ap=class{constructor(t){this.id=cE++,this.code=t,this.usedTimes=0}};function hE(i){return i===or||i===Al||i===Rl}function uE(i,t,e,n,s,r){let a=new wa,o=new rp,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,M,F,R,I,U){let H=R.fog,C=I.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=t.get(_.envMap||z,X),tt=u[_.type],V=n.precision;_.precision!==null&&(V=n.getMaxPrecision(_.precision),V!==_.precision&&Yt("WebGLProgram.getParameters:",_.precision,"not supported, using",V,"instead."));let J=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,et=J!==void 0?J.length:0,Tt=0;C.morphAttributes.position!==void 0&&(Tt=1),C.morphAttributes.normal!==void 0&&(Tt=2),C.morphAttributes.color!==void 0&&(Tt=3);let zt,$,xt,At;if(tt){let St=Qn[tt];zt=St.vertexShader,$=St.fragmentShader}else{zt=_.vertexShader,$=_.fragmentShader;let St=o.getVertexShaderStage(_),Ie=o.getFragmentShaderStage(_);o.update(_,St,Ie),xt=St.id,At=Ie.id}let Gt=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),Ht=I.isInstancedMesh===!0,Ne=I.isBatchedMesh===!0,Xt=!!_.map,se=!!_.matcap,Vt=!!G,j=Vt&&G.isPMREMTexture===!0,at=!!_.aoMap,ot=!!_.lightMap,wt=!!_.bumpMap&&_.wireframe===!1,mt=!!_.normalMap,te=!!_.displacementMap,Ut=!!_.emissiveMap,de=!!_.metalnessMap,fe=!!_.roughnessMap,be=_.anisotropy>0,N=_.clearcoat>0,ni=_.diffuseRoughness>0,he=_.dispersion>0,Fe=_.retroreflectivity>0,gt=_.iridescence>0,je=_.sheen>0,$t=_.transmission>0,Jt=be&&!!_.anisotropyMap,A=N&&!!_.clearcoatMap,x=N&&!!_.clearcoatNormalMap,B=N&&!!_.clearcoatRoughnessMap,nt=ni&&!!_.diffuseRoughnessMap,Q=gt&&!!_.iridescenceMap,ct=gt&&!!_.iridescenceThicknessMap,_t=je&&!!_.sheenColorMap,Y=je&&!!_.sheenRoughnessMap,K=!!_.specularMap,dt=!!_.specularColorMap,P=!!_.specularIntensityMap,Z=$t&&!!_.transmissionMap,q=$t&&!!_.thicknessMap,ft=!!_.gradientMap,rt=!!_.alphaMap,ht=_.alphaTest>0,Ot=!!_.alphaHash,ae=!!_.extensions,st=Jn;_.toneMapped&&(Gt===null||Gt.isXRRenderTarget===!0)&&(st=i.toneMapping);let qt=j?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,re={shaderID:tt,shaderType:_.type,shaderName:_.name,vertexShader:zt,fragmentShader:$,defines:_.defines,customVertexShaderID:xt,customFragmentShaderID:At,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:V,batching:Ne,batchingColor:Ne&&I._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&I.instanceColor!==null,instancingMorph:Ht&&I.morphTexture!==null,outputColorSpace:Gt===null?i.outputColorSpace:Gt.isXRRenderTarget===!0?Gt.texture.colorSpace:ue.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Xt,matcap:se,envMap:Vt,envMapMode:Vt&&G.mapping,envMapPMREM:j,envMapMaxLod:j?qt.length-1:null,envMapSize:j?qt[0].width:null,aoMap:at,lightMap:ot,bumpMap:wt,normalMap:mt,displacementMap:te,emissiveMap:Ut,normalMapObjectSpace:mt&&_.normalMapType===wg,normalMapTangentSpace:mt&&_.normalMapType===Cl,packedNormalMap:mt&&_.normalMapType===Cl&&hE(_.normalMap.format),metalnessMap:de,roughnessMap:fe,anisotropy:be,anisotropyMap:Jt,clearcoat:N,clearcoatMap:A,clearcoatNormalMap:x,clearcoatRoughnessMap:B,diffuseRoughness:ni,diffuseRoughnessMap:nt,dispersion:he,retroreflection:Fe,iridescence:gt,iridescenceMap:Q,iridescenceThicknessMap:ct,sheen:je,sheenColorMap:_t,sheenRoughnessMap:Y,specularMap:K,specularColorMap:dt,specularIntensityMap:P,transmission:$t,transmissionMap:Z,thicknessMap:q,gradientMap:ft,opaque:_.transparent===!1&&_.blending===ar&&_.alphaToCoverage===!1,alphaMap:rt,alphaTest:ht,alphaHash:Ot,combine:_.combine,mapUv:Xt&&d(_.map.channel),aoMapUv:at&&d(_.aoMap.channel),lightMapUv:ot&&d(_.lightMap.channel),bumpMapUv:wt&&d(_.bumpMap.channel),normalMapUv:mt&&d(_.normalMap.channel),displacementMapUv:te&&d(_.displacementMap.channel),emissiveMapUv:Ut&&d(_.emissiveMap.channel),metalnessMapUv:de&&d(_.metalnessMap.channel),roughnessMapUv:fe&&d(_.roughnessMap.channel),anisotropyMapUv:Jt&&d(_.anisotropyMap.channel),clearcoatMapUv:A&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:x&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:nt&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:Y&&d(_.sheenRoughnessMap.channel),specularMapUv:K&&d(_.specularMap.channel),specularColorMapUv:dt&&d(_.specularColorMap.channel),specularIntensityMapUv:P&&d(_.specularIntensityMap.channel),transmissionMapUv:Z&&d(_.transmissionMap.channel),thicknessMapUv:q&&d(_.thicknessMap.channel),alphaMapUv:rt&&d(_.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(mt||be),vertexNormals:!!C.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!C.attributes.uv&&(Xt||rt),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||C.attributes.normal===void 0&&mt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:yt,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:Tt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:U.filter(St=>St.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:Xt&&_.map.isVideoTexture===!0&&ue.getTransfer(_.map.colorSpace)===Ee,decodeVideoTextureEmissive:Ut&&_.emissiveMap.isVideoTexture===!0&&ue.getTransfer(_.emissiveMap.colorSpace)===Ee,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===vn,flipSided:_.side===Ri,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ae&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&_.extensions.multiDraw===!0||Ne)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function v(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let F in _.defines)M.push(F),M.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(m(M,_),g(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function m(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function g(_,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function b(_){let M=u[_.type],F;if(M){let R=Qn[M];F=Cs.clone(R.uniforms)}else F=_.uniforms;return F}function E(_,M){let F=h.get(M);return F!==void 0?++F.usedTimes:(F=new lE(i,M,_,s),c.push(F),h.set(M,F)),F}function y(_){if(--_.usedTimes===0){let M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function T(){o.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:b,acquireProgram:E,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:T}}function dE(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function fE(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function l_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function c_(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,p,v,m,g){let b=i[t];return b===void 0?(b={id:u.id,object:u,geometry:d,material:p,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:g},i[t]=b):(b.id=u.id,b.object=u,b.geometry=d,b.material=p,b.materialVariant=a(u),b.groupOrder=v,b.renderOrder=u.renderOrder,b.z=m,b.group=g),t++,b}function l(u,d,p,v,m,g,b){b.reversedDepth===!0&&(m=-m);let E=o(u,d,p,v,m,g);p.transmission>0?n.push(E):p.transparent===!0?s.push(E):e.push(E)}function c(u,d,p,v,m,g){let b=o(u,d,p,v,m,g);p.transmission>0?n.unshift(b):p.transparent===!0?s.unshift(b):e.unshift(b)}function h(u,d){e.length>1&&e.sort(u||fE),n.length>1&&n.sort(d||l_),s.length>1&&s.sort(d||l_)}function f(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function pE(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new c_,i.set(n,[a])):s>=r.length?(a=new c_,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function mE(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new Ft};break;case"SpotLight":e={position:new L,direction:new L,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function gE(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var _E=0;function vE(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function xE(i){let t=new mE,e=gE(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new Ce,a=new Ce;function o(c){let h=0,f=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,p=0,v=0,m=0,g=0,b=0,E=0,y=0,w=0,T=0,_=0,M=0,F=0,R=0;c.sort(vE);for(let U=0,H=c.length;U<H;U++){let C=c[U],z=C.color,X=C.intensity,G=C.distance,tt=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===or?tt=C.shadow.map.texture:tt=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=z.r*X,f+=z.g*X,u+=z.b*X;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],X);R++}else if(C.isSunLight){let V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let J=C.shadow,et=e.get(C);et.shadowIntensity=J.intensity,et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[p]=et,n.sunShadowMap[p]=tt;let Tt=J.getViewportCount();for(let zt=0;zt<Tt;zt++)n.sunShadowMatrix[v+zt]=J.getMatrix(zt),n.sunShadowCascade[v+zt]=J._cascadeData[zt];v+=Tt,p++}n.sun[d]=V,d++}else if(C.isDirectionalLight){let V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let J=C.shadow,et=e.get(C);et.shadowIntensity=J.intensity,et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize=J.mapSize,n.directionalShadow[m]=et,n.directionalShadowMap[m]=tt,n.directionalShadowMatrix[m]=C.shadow.matrix,w++}n.directional[m]=V,m++}else if(C.isSpotLight){let V=t.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(z).multiplyScalar(X),V.distance=G,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[b]=V;let J=C.shadow;if(C.map&&(n.spotLightMap[M]=C.map,M++,J.updateMatrices(C),C.castShadow&&F++),n.spotLightMatrix[b]=J.matrix,C.castShadow){let et=e.get(C);et.shadowIntensity=J.intensity,et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize=J.mapSize,n.spotShadow[b]=et,n.spotShadowMap[b]=tt,_++}b++}else if(C.isRectAreaLight){let V=t.get(C);V.color.copy(z).multiplyScalar(X),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[E]=V,E++}else if(C.isPointLight){let V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){let J=C.shadow,et=e.get(C);et.shadowIntensity=J.intensity,et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize=J.mapSize,et.shadowCameraNear=J.camera.near,et.shadowCameraFar=J.camera.far,n.pointShadow[g]=et,n.pointShadowMap[g]=tt,n.pointShadowMatrix[g]=C.shadow.matrix,T++}n.point[g]=V,g++}else if(C.isHemisphereLight){let V=t.get(C);V.skyColor.copy(C.color).multiplyScalar(X),V.groundColor.copy(C.groundColor).multiplyScalar(X),n.hemi[y]=V,y++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let I=n.hash;(I.sunLength!==d||I.directionalLength!==m||I.pointLength!==g||I.spotLength!==b||I.rectAreaLength!==E||I.hemiLength!==y||I.numSunShadows!==p||I.numDirectionalShadows!==w||I.numPointShadows!==T||I.numSpotShadows!==_||I.numSpotMaps!==M||I.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=m,n.spot.length=b,n.rectArea.length=E,n.point.length=g,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+M-F,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=R,I.sunLength=d,I.directionalLength=m,I.pointLength=g,I.spotLength=b,I.rectAreaLength=E,I.hemiLength=y,I.numSunShadows=p,I.numDirectionalShadows=w,I.numPointShadows=T,I.numSpotShadows=_,I.numSpotMaps=M,I.numLightProbes=R,n.version=_E++)}function l(c,h){let f=0,u=0,d=0,p=0,v=0,m=0,g=h.matrixWorldInverse;for(let b=0,E=c.length;b<E;b++){let y=c[b];if(y.isSunLight){let w=n.sun[f];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(g),f++}else if(y.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),u++}else if(y.isSpotLight){let w=n.spot[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let w=n.rectArea[v];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let w=n.point[d];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let w=n.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function h_(i){let t=new xE(i),e=[],n=[],s=[];function r(f){h.camera=f,e.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){n.push(f)}function l(){t.setup(e),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function yE(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new h_(i),t.set(s,[o])):r>=a.length?(o=new h_(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var SE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ME=`uniform sampler2D shadow_pass;
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
}`,bE=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],EE=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],u_=new Ce,Il=new L,tp=new L;function TE(i,t,e){let n=new js,s=new it,r=new it,a=new Ve,o=new ch,l=new hh,c={},h=e.maxTextureSize,f={[rr]:Ri,[Ri]:rr,[vn]:vn},u=new Ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:SE,fragmentShader:ME}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let p=new Qe;p.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new jt(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ml;let g=this.type;this.render=function(T,_,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===ng&&(Yt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ml);let F=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Ts),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let H=g!==this.type;H&&_.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(z=>z.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,z=T.length;C<z;C++){let X=T[C],G=X.shadow;if(G===void 0){Yt("WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let tt=G.getFrameExtents();s.multiply(tt),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,G.mapSize.y=r.y));let V=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=V,G.map===null||H===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Oa){if(X.isPointLight){Yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ci(s.x,s.y,{format:or,type:Ci,minFilter:Ti,magFilter:Ti,generateMipmaps:!1}),G.map.texture.name=X.name+".shadowMap",G.map.depthTexture=new Es(s.x,s.y,xn),G.map.depthTexture.name=X.name+".shadowMapDepth",G.map.depthTexture.format=Ss,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Si,G.map.depthTexture.magFilter=Si}else X.isPointLight?(G.map=new Dl(s.x),G.map.depthTexture=new Jo(s.x,Fn)):(G.map=new ci(s.x,s.y),G.map.depthTexture=new Es(s.x,s.y,Fn)),G.map.depthTexture.name=X.name+".shadowMap",G.map.depthTexture.format=Ss,this.type===ml?(G.map.depthTexture.compareFunction=V?Ff:Nf,G.map.depthTexture.minFilter=Ti,G.map.depthTexture.magFilter=Ti):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Si,G.map.depthTexture.magFilter=Si);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let J=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();X.isPointLight!==!0&&G.updateMatrices(X,M);let et=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:M.layers;for(let Tt=0;Tt<J;Tt++){let zt=G.getCamera(Tt);if(X.isPointLight){let $=G.camera,xt=G.matrix,At=X.distance||$.far;At!==$.far&&($.far=At,$.updateProjectionMatrix()),Il.setFromMatrixPosition(X.matrixWorld),$.position.copy(Il),tp.copy($.position),tp.add(bE[Tt]),$.up.copy(EE[Tt]),$.lookAt(tp),$.updateMatrixWorld(),xt.makeTranslation(-Il.x,-Il.y,-Il.z),u_.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),G._frustum.setFromProjectionMatrix(u_,$.coordinateSystem,$.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,Tt),i.clear();else{Tt===0&&(i.setRenderTarget(G.map),i.clear());let $=G.getViewport(Tt);a.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),U.viewport(a)}n=G.getFrustum(Tt),y(_,M,zt,X,et,this.type)}G.isPointLightShadow!==!0&&this.type===Oa&&b(G,M),G.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(F,R,I)};function b(T,_){let M=t.update(v);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new ci(s.x,s.y,{format:or,type:Ci}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(_,null,M,u,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(_,null,M,d,v,null)}function E(T,_,M,F){let R=null,I=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)R=I;else if(R=M.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let U=R.uuid,H=_.uuid,C=c[U];C===void 0&&(C={},c[U]=C);let z=C[H];z===void 0&&(z=R.clone(),C[H]=z,_.addEventListener("dispose",w)),R=z}if(R.visible=_.visible,R.wireframe=_.wireframe,F===Oa?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:f[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=i.properties.get(R);U.light=M}return R}function y(T,_,M,F,R,I){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===Oa)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);let C=t.update(T),z=T.material;if(Array.isArray(z)){let X=C.groups;for(let G=0,tt=X.length;G<tt;G++){let V=X[G],J=z[V.materialIndex];if(J&&J.visible){let et=E(T,J,F,I);T.onBeforeShadow(i,T,_,M,C,et,V),i.renderBufferDirect(M,null,C,et,T,V),T.onAfterShadow(i,T,_,M,C,et,V)}}}else if(z.visible){let X=E(T,z,F,I);T.onBeforeShadow(i,T,_,M,C,X,null),i.renderBufferDirect(M,null,C,X,T,null),T.onAfterShadow(i,T,_,M,C,X,null)}}let H=T.children;for(let C=0,z=H.length;C<z;C++)y(H[C],_,M,F,R,I)}function w(T){T.target.removeEventListener("dispose",w);for(let M in c){let F=c[M],R=T.target.uuid;R in F&&(F[R].dispose(),delete F[R])}}}function wE(i,t){function e(){let P=!1,Z=new Ve,q=null,ft=new Ve(0,0,0,0);return{setMask:function(rt){q!==rt&&!P&&(i.colorMask(rt,rt,rt,rt),q=rt)},setLocked:function(rt){P=rt},setClear:function(rt,ht,Ot,ae,st){st===!0&&(rt*=ae,ht*=ae,Ot*=ae),Z.set(rt,ht,Ot,ae),ft.equals(Z)===!1&&(i.clearColor(rt,ht,Ot,ae),ft.copy(Z))},reset:function(){P=!1,q=null,ft.set(-1,0,0,0)}}}function n(){let P=!1,Z=!1,q=null,ft=null,rt=null;return{setReversed:function(ht){if(Z!==ht){let Ot=t.get("EXT_clip_control");ht?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),Z=ht;let ae=rt;rt=null,this.setClear(ae)}},getReversed:function(){return Z},setTest:function(ht){ht?yt(i.DEPTH_TEST):Ht(i.DEPTH_TEST)},setMask:function(ht){q!==ht&&!P&&(i.depthMask(ht),q=ht)},setFunc:function(ht){if(Z&&(ht=Ug[ht]),ft!==ht){switch(ht){case Vc:i.depthFunc(i.NEVER);break;case Wc:i.depthFunc(i.ALWAYS);break;case Xc:i.depthFunc(i.LESS);break;case ya:i.depthFunc(i.LEQUAL);break;case qc:i.depthFunc(i.EQUAL);break;case $c:i.depthFunc(i.GEQUAL);break;case Yc:i.depthFunc(i.GREATER);break;case Kc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=ht}},setLocked:function(ht){P=ht},setClear:function(ht){rt!==ht&&(rt=ht,Z&&(ht=1-ht),i.clearDepth(ht))},reset:function(){P=!1,q=null,ft=null,rt=null,Z=!1}}}function s(){let P=!1,Z=null,q=null,ft=null,rt=null,ht=null,Ot=null,ae=null,st=null;return{setTest:function(qt){P||(qt?yt(i.STENCIL_TEST):Ht(i.STENCIL_TEST))},setMask:function(qt){Z!==qt&&!P&&(i.stencilMask(qt),Z=qt)},setFunc:function(qt,re,St){(q!==qt||ft!==re||rt!==St)&&(i.stencilFunc(qt,re,St),q=qt,ft=re,rt=St)},setOp:function(qt,re,St){(ht!==qt||Ot!==re||ae!==St)&&(i.stencilOp(qt,re,St),ht=qt,Ot=re,ae=St)},setLocked:function(qt){P=qt},setClear:function(qt){st!==qt&&(i.clearStencil(qt),st=qt)},reset:function(){P=!1,Z=null,q=null,ft=null,rt=null,ht=null,Ot=null,ae=null,st=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,h={},f={},u={},d=new WeakMap,p=[],v=null,m=!1,g=null,b=null,E=null,y=null,w=null,T=null,_=null,M=new Ft(0,0,0),F=0,R=!1,I=null,U=null,H=null,C=null,z=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,tt=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=tt>=1):V.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=tt>=2);let J=null,et={},Tt=i.getParameter(i.SCISSOR_BOX),zt=i.getParameter(i.VIEWPORT),$=new Ve().fromArray(Tt),xt=new Ve().fromArray(zt);function At(P,Z,q,ft){let rt=new Uint8Array(4),ht=i.createTexture();i.bindTexture(P,ht),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<q;Ot++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(Z,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D(Z+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return ht}let Gt={};Gt[i.TEXTURE_2D]=At(i.TEXTURE_2D,i.TEXTURE_2D,1),Gt[i.TEXTURE_CUBE_MAP]=At(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Gt[i.TEXTURE_2D_ARRAY]=At(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Gt[i.TEXTURE_3D]=At(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),yt(i.DEPTH_TEST),a.setFunc(ya),wt(!1),mt(Mf),yt(i.CULL_FACE),at(Ts);function yt(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Ht(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Ne(P,Z){return u[P]!==Z?(i.bindFramebuffer(P,Z),u[P]=Z,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Z),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Z),!0):!1}function Xt(P,Z){let q=p,ft=!1;if(P){q=d.get(Z),q===void 0&&(q=[],d.set(Z,q));let rt=P.textures;if(q.length!==rt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Ot=rt.length;ht<Ot;ht++)q[ht]=i.COLOR_ATTACHMENT0+ht;q.length=rt.length,ft=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,ft=!0);ft&&i.drawBuffers(q)}function se(P){return v!==P?(i.useProgram(P),v=P,!0):!1}let Vt={[Lr]:i.FUNC_ADD,[rg]:i.FUNC_SUBTRACT,[ag]:i.FUNC_REVERSE_SUBTRACT};Vt[og]=i.MIN,Vt[lg]=i.MAX;let j={[cg]:i.ZERO,[hg]:i.ONE,[ug]:i.SRC_COLOR,[Tf]:i.SRC_ALPHA,[_g]:i.SRC_ALPHA_SATURATE,[mg]:i.DST_COLOR,[fg]:i.DST_ALPHA,[dg]:i.ONE_MINUS_SRC_COLOR,[wf]:i.ONE_MINUS_SRC_ALPHA,[gg]:i.ONE_MINUS_DST_COLOR,[pg]:i.ONE_MINUS_DST_ALPHA,[vg]:i.CONSTANT_COLOR,[xg]:i.ONE_MINUS_CONSTANT_COLOR,[yg]:i.CONSTANT_ALPHA,[Sg]:i.ONE_MINUS_CONSTANT_ALPHA};function at(P,Z,q,ft,rt,ht,Ot,ae,st,qt){if(P===Ts){m===!0&&(Ht(i.BLEND),m=!1);return}if(m===!1&&(yt(i.BLEND),m=!0),P!==sg){if(P!==g||qt!==R){if((b!==Lr||w!==Lr)&&(i.blendEquation(i.FUNC_ADD),b=Lr,w=Lr),qt)switch(P){case ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ui:i.blendFunc(i.ONE,i.ONE);break;case bf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ef:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Zt("WebGLState: Invalid blending: ",P);break}else switch(P){case ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case bf:Zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ef:Zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Zt("WebGLState: Invalid blending: ",P);break}E=null,y=null,T=null,_=null,M.set(0,0,0),F=0,g=P,R=qt}return}rt=rt||Z,ht=ht||q,Ot=Ot||ft,(Z!==b||rt!==w)&&(i.blendEquationSeparate(Vt[Z],Vt[rt]),b=Z,w=rt),(q!==E||ft!==y||ht!==T||Ot!==_)&&(i.blendFuncSeparate(j[q],j[ft],j[ht],j[Ot]),E=q,y=ft,T=ht,_=Ot),(ae.equals(M)===!1||st!==F)&&(i.blendColor(ae.r,ae.g,ae.b,st),M.copy(ae),F=st),g=P,R=!1}function ot(P,Z){P.side===vn?Ht(i.CULL_FACE):yt(i.CULL_FACE);let q=P.side===Ri;Z&&(q=!q),wt(q),P.blending===ar&&P.transparent===!1?at(Ts):at(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let ft=P.stencilWrite;o.setTest(ft),ft&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ut(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?yt(i.SAMPLE_ALPHA_TO_COVERAGE):Ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function wt(P){I!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),I=P)}function mt(P){P!==eg?(yt(i.CULL_FACE),P!==U&&(P===Mf?i.cullFace(i.BACK):P===ig?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ht(i.CULL_FACE),U=P}function te(P){P!==H&&(G&&i.lineWidth(P),H=P)}function Ut(P,Z,q){P?(yt(i.POLYGON_OFFSET_FILL),(C!==Z||z!==q)&&(C=Z,z=q,a.getReversed()&&(Z=-Z,q=-q),i.polygonOffset(Z,q))):Ht(i.POLYGON_OFFSET_FILL)}function de(P){P?yt(i.SCISSOR_TEST):Ht(i.SCISSOR_TEST)}function fe(P){P===void 0&&(P=i.TEXTURE0+X-1),J!==P&&(i.activeTexture(P),J=P)}function be(P,Z,q){q===void 0&&(J===null?q=i.TEXTURE0+X-1:q=J);let ft=et[q];ft===void 0&&(ft={type:void 0,texture:void 0},et[q]=ft),(ft.type!==P||ft.texture!==Z)&&(J!==q&&(i.activeTexture(q),J=q),i.bindTexture(P,Z||Gt[P]),ft.type=P,ft.texture=Z)}function N(){let P=et[J];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ni(){try{i.compressedTexImage2D(...arguments)}catch(P){Zt("WebGLState:",P)}}function he(){try{i.compressedTexImage3D(...arguments)}catch(P){Zt("WebGLState:",P)}}function Fe(){try{i.texSubImage2D(...arguments)}catch(P){Zt("WebGLState:",P)}}function gt(){try{i.texSubImage3D(...arguments)}catch(P){Zt("WebGLState:",P)}}function je(){try{i.compressedTexSubImage2D(...arguments)}catch(P){Zt("WebGLState:",P)}}function $t(){try{i.compressedTexSubImage3D(...arguments)}catch(P){Zt("WebGLState:",P)}}function Jt(){try{i.texStorage2D(...arguments)}catch(P){Zt("WebGLState:",P)}}function A(){try{i.texStorage3D(...arguments)}catch(P){Zt("WebGLState:",P)}}function x(){try{i.texImage2D(...arguments)}catch(P){Zt("WebGLState:",P)}}function B(){try{i.texImage3D(...arguments)}catch(P){Zt("WebGLState:",P)}}function nt(P){return f[P]!==void 0?f[P]:i.getParameter(P)}function Q(P,Z){f[P]!==Z&&(i.pixelStorei(P,Z),f[P]=Z)}function ct(P){$.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),$.copy(P))}function _t(P){xt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),xt.copy(P))}function Y(P,Z){let q=c.get(Z);q===void 0&&(q=new WeakMap,c.set(Z,q));let ft=q.get(P);ft===void 0&&(ft=i.getUniformBlockIndex(Z,P.name),i.uniformBlockBinding(Z,ft,ft),q.set(P,ft))}function K(P,Z,q){let rt=c.get(Z).get(P);l[rt]!==q&&(i.bindBufferBase(i.UNIFORM_BUFFER,rt,q),l[rt]=q)}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},J=null,et={},u={},l={},d=new WeakMap,p=[],v=null,m=!1,g=null,b=null,E=null,y=null,w=null,T=null,_=null,M=new Ft(0,0,0),F=0,R=!1,I=null,U=null,H=null,C=null,z=null,$.set(0,0,i.canvas.width,i.canvas.height),xt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:yt,disable:Ht,bindFramebuffer:Ne,drawBuffers:Xt,useProgram:se,setBlending:at,setMaterial:ot,setFlipSided:wt,setCullFace:mt,setLineWidth:te,setPolygonOffset:Ut,setScissorTest:de,activeTexture:fe,bindTexture:be,unbindTexture:N,compressedTexImage2D:ni,compressedTexImage3D:he,texImage2D:x,texImage3D:B,pixelStorei:Q,getParameter:nt,updateUBOMapping:Y,uniformBlockBinding:K,texStorage2D:Jt,texStorage3D:A,texSubImage2D:Fe,texSubImage3D:gt,compressedTexSubImage2D:je,compressedTexSubImage3D:$t,scissor:ct,viewport:_t,reset:dt}}function AE(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap,f=new Set,u,d=new WeakMap,p=new Set,v=new FinalizationRegistry(A=>p.delete(A)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return m?new OffscreenCanvas(A,x):Go("canvas")}function b(A,x,B){let nt=1,Q=Jt(A);if((Q.width>B||Q.height>B)&&(nt=B/Math.max(Q.width,Q.height)),nt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ct=Math.floor(nt*Q.width),_t=Math.floor(nt*Q.height);u===void 0&&(u=g(ct,_t));let Y=x?g(ct,_t):u;return Y.width=ct,Y.height=_t,Y.getContext("2d").drawImage(A,0,0,ct,_t),Yt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ct+"x"+_t+")."),Y}else return"data"in A&&Yt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function E(A){return A.generateMipmaps}function y(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(A,x,B,nt,Q,ct=!1){if(A!==null){if(i[A]!==void 0)return i[A];Yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let _t;nt&&(_t=t.get("EXT_texture_norm16"),_t||Yt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===i.RED&&(B===i.FLOAT&&(Y=i.R32F),B===i.HALF_FLOAT&&(Y=i.R16F),B===i.UNSIGNED_BYTE&&(Y=i.R8),B===i.UNSIGNED_SHORT&&_t&&(Y=_t.R16_EXT),B===i.SHORT&&_t&&(Y=_t.R16_SNORM_EXT)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.R8UI),B===i.UNSIGNED_SHORT&&(Y=i.R16UI),B===i.UNSIGNED_INT&&(Y=i.R32UI),B===i.BYTE&&(Y=i.R8I),B===i.SHORT&&(Y=i.R16I),B===i.INT&&(Y=i.R32I)),x===i.RG&&(B===i.FLOAT&&(Y=i.RG32F),B===i.HALF_FLOAT&&(Y=i.RG16F),B===i.UNSIGNED_BYTE&&(Y=i.RG8),B===i.UNSIGNED_SHORT&&_t&&(Y=_t.RG16_EXT),B===i.SHORT&&_t&&(Y=_t.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RG8UI),B===i.UNSIGNED_SHORT&&(Y=i.RG16UI),B===i.UNSIGNED_INT&&(Y=i.RG32UI),B===i.BYTE&&(Y=i.RG8I),B===i.SHORT&&(Y=i.RG16I),B===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),B===i.UNSIGNED_INT&&(Y=i.RGB32UI),B===i.BYTE&&(Y=i.RGB8I),B===i.SHORT&&(Y=i.RGB16I),B===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),B===i.UNSIGNED_INT&&(Y=i.RGBA32UI),B===i.BYTE&&(Y=i.RGBA8I),B===i.SHORT&&(Y=i.RGBA16I),B===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_SHORT&&_t&&(Y=_t.RGB16_EXT),B===i.SHORT&&_t&&(Y=_t.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),x===i.RGBA){let K=ct?zo:ue.getTransfer(Q);B===i.FLOAT&&(Y=i.RGBA32F),B===i.HALF_FLOAT&&(Y=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Y=K===Ee?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&_t&&(Y=_t.RGBA16_EXT),B===i.SHORT&&_t&&(Y=_t.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function _(A,x){let B;return A?x===null||x===Fn||x===Fr?B=i.DEPTH24_STENCIL8:x===xn?B=i.DEPTH32F_STENCIL8:x===ka&&(B=i.DEPTH24_STENCIL8,Yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Fn||x===Fr?B=i.DEPTH_COMPONENT24:x===xn?B=i.DEPTH_COMPONENT32F:x===ka&&(B=i.DEPTH_COMPONENT16),B}function M(A,x){return E(A)===!0||A.isFramebufferTexture&&A.minFilter!==Si&&A.minFilter!==Ti?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function F(A){let x=new WeakRef(A);n.get(A).__ref=x,p.add(x),v.register(A,x,x)}function R(A){let x=n.get(A).__ref;x!==void 0&&(p.delete(x),v.unregister(x))}function I(A){H(A.target)}function U(A){C(A.target)}function H(A){A.removeEventListener("dispose",I),R(A),X(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&f.delete(A)}function C(A){A.removeEventListener("dispose",U),R(A),tt(A)}function z(){for(let A of p){let x=A.deref();x!==void 0&&(x.isRenderTarget===!0?C(x):H(x))}p.clear(),f.clear()}function X(A){let x=n.get(A);if(x.__webglInit===void 0)return;let B=A.source,nt=d.get(B);if(nt){let Q=nt[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&G(A),Object.keys(nt).length===0&&d.delete(B)}n.remove(A)}function G(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let B=A.source,nt=d.get(B);delete nt[x.__cacheKey],a.memory.textures--}function tt(A){let x=n.get(A);x.__depthDisposeCallback&&x.__depthDisposeCallback();let B=A.depthTexture;if(B&&B.renderTarget===A&&H(B),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(x.__webglFramebuffer[Q]))for(let ct=0;ct<x.__webglFramebuffer[Q].length;ct++)i.deleteFramebuffer(x.__webglFramebuffer[Q][ct]);else i.deleteFramebuffer(x.__webglFramebuffer[Q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Q])}else{if(Array.isArray(x.__webglFramebuffer))for(let Q=0;Q<x.__webglFramebuffer.length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[Q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Q=0;Q<x.__webglColorRenderbuffer.length;Q++)x.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let nt=A.textures;for(let Q=0,ct=nt.length;Q<ct;Q++){let _t=n.get(nt[Q]);_t.__webglTexture&&(i.deleteTexture(_t.__webglTexture),a.memory.textures--),n.remove(nt[Q])}n.remove(A)}let V=0;function J(){V=0}function et(){return V}function Tt(A){V=A}function zt(){let A=V;return A>=s.maxTextures&&Yt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,A}function $(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.mipmapsAutoUpdate),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function xt(A,x){let B=n.get(A);if(A.isVideoTexture&&je(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let nt=A.image;if(nt===null)Yt("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)Yt("WebGLRenderer: Texture marked for update but image is incomplete");else{ot(B,A,x);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function At(A,x){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){ot(B,A,x);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function Gt(A,x){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){ot(B,A,x);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function yt(A,x){let B=n.get(A);if(A.version>0&&B.__version!==A.version){wt(B,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}let Ht={[Sa]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[Zc]:i.MIRRORED_REPEAT},Ne={[Si]:i.NEAREST,[Eg]:i.NEAREST_MIPMAP_NEAREST,[Ml]:i.NEAREST_MIPMAP_LINEAR,[Ti]:i.LINEAR,[wh]:i.LINEAR_MIPMAP_NEAREST,[Nn]:i.LINEAR_MIPMAP_LINEAR},Xt={[Rg]:i.NEVER,[Uf]:i.ALWAYS,[Cg]:i.LESS,[Nf]:i.LEQUAL,[Pg]:i.EQUAL,[Ff]:i.GEQUAL,[Ig]:i.GREATER,[Lg]:i.NOTEQUAL};function se(A,x){if(x.type===xn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ti||x.magFilter===wh||x.magFilter===Ml||x.magFilter===Nn||x.minFilter===Ti||x.minFilter===wh||x.minFilter===Ml||x.minFilter===Nn)&&Yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ht[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ht[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ht[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Ne[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Ne[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Xt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Si||x.minFilter!==Ml&&x.minFilter!==Nn||x.type===xn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Vt(A,x){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",I),F(x));let nt=x.source,Q=d.get(nt);Q===void 0&&(Q={},d.set(nt,Q));let ct=$(x);if(ct!==A.__cacheKey){Q[ct]===void 0&&(Q[ct]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[ct].usedTimes++;let _t=Q[A.__cacheKey];_t!==void 0&&(Q[A.__cacheKey].usedTimes--,_t.usedTimes===0&&G(x)),A.__cacheKey=ct,A.__webglTexture=Q[ct].texture}return B}function j(A,x,B){return Math.floor(Math.floor(A/B)/x)}function at(A,x,B,nt){let ct=A.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,nt,x.data);else{ct.sort((P,Z)=>P.start-Z.start);let _t=0;for(let P=1;P<ct.length;P++){let Z=ct[_t],q=ct[P],ft=Z.start+Z.count,rt=j(q.start,x.width,4),ht=j(Z.start,x.width,4);q.start<=ft+1&&rt===ht&&j(q.start+q.count-1,x.width,4)===rt?Z.count=Math.max(Z.count,q.start+q.count-Z.start):(++_t,ct[_t]=q)}ct.length=_t+1;let Y=e.getParameter(i.UNPACK_ROW_LENGTH),K=e.getParameter(i.UNPACK_SKIP_PIXELS),dt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let P=0,Z=ct.length;P<Z;P++){let q=ct[P],ft=Math.floor(q.start/4),rt=Math.ceil(q.count/4),ht=ft%x.width,Ot=Math.floor(ft/x.width),ae=rt,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ot),e.texSubImage2D(i.TEXTURE_2D,0,ht,Ot,ae,st,B,nt,x.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Y),e.pixelStorei(i.UNPACK_SKIP_PIXELS,K),e.pixelStorei(i.UNPACK_SKIP_ROWS,dt)}}function ot(A,x,B){let nt=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(nt=i.TEXTURE_3D);let Q=Vt(A,x),ct=x.source;e.bindTexture(nt,A.__webglTexture,i.TEXTURE0+B);let _t=n.get(ct);if(ct.version!==_t.__version||Q===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let st=ue.getPrimaries(ue.workingColorSpace),qt=x.colorSpace===As?null:ue.getPrimaries(x.colorSpace),re=x.colorSpace===As||st===qt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let K=b(x.image,!1,s.maxTextureSize);K=$t(x,K);let dt=r.convert(x.format,x.colorSpace),P=r.convert(x.type),Z=T(x.internalFormat,dt,P,x.normalized,x.colorSpace,x.isVideoTexture);se(nt,x);let q,ft=x.mipmaps,rt=x.isVideoTexture!==!0,ht=_t.__version===void 0||Q===!0,Ot=ct.dataReady,ae=M(x,K);if(x.isDepthTexture)Z=_(x.format===ws,x.type),ht&&(rt?e.texStorage2D(i.TEXTURE_2D,1,Z,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,Z,K.width,K.height,0,dt,P,null));else if(x.isDataTexture)if(ft.length>0){rt&&ht&&e.texStorage2D(i.TEXTURE_2D,ae,Z,ft[0].width,ft[0].height);for(let st=0,qt=ft.length;st<qt;st++)q=ft[st],rt?Ot&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,q.width,q.height,dt,P,q.data):e.texImage2D(i.TEXTURE_2D,st,Z,q.width,q.height,0,dt,P,q.data);x.generateMipmaps=!1}else rt?(ht&&e.texStorage2D(i.TEXTURE_2D,ae,Z,K.width,K.height),Ot&&at(x,K,dt,P)):e.texImage2D(i.TEXTURE_2D,0,Z,K.width,K.height,0,dt,P,K.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){rt&&ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Z,ft[0].width,ft[0].height,K.depth);for(let st=0,qt=ft.length;st<qt;st++)if(q=ft[st],x.format!==Un)if(dt!==null)if(rt){if(Ot)if(x.layerUpdates.size>0){let re=$f(q.width,q.height,x.format,x.type);for(let St of x.layerUpdates){let Ie=q.data.subarray(St*re/q.data.BYTES_PER_ELEMENT,(St+1)*re/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,St,q.width,q.height,1,dt,Ie)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,q.width,q.height,K.depth,dt,q.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Z,q.width,q.height,K.depth,0,q.data,0,0);else Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?Ot&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,q.width,q.height,K.depth,dt,P,q.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Z,q.width,q.height,K.depth,0,dt,P,q.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{rt&&ht&&e.texStorage2D(i.TEXTURE_2D,ae,Z,ft[0].width,ft[0].height);for(let st=0,qt=ft.length;st<qt;st++)q=ft[st],x.format!==Un?dt!==null?rt?Ot&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,q.width,q.height,dt,q.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Z,q.width,q.height,0,q.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?Ot&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,q.width,q.height,dt,P,q.data):e.texImage2D(i.TEXTURE_2D,st,Z,q.width,q.height,0,dt,P,q.data)}else if(x.isDataArrayTexture)if(rt){if(ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Z,K.width,K.height,K.depth),Ot)if(x.layerUpdates.size>0){let st=$f(K.width,K.height,x.format,x.type);for(let qt of x.layerUpdates){let re=K.data.subarray(qt*st/K.data.BYTES_PER_ELEMENT,(qt+1)*st/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,qt,K.width,K.height,1,dt,P,re)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,dt,P,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Z,K.width,K.height,K.depth,0,dt,P,K.data);else if(x.isData3DTexture)rt?(ht&&e.texStorage3D(i.TEXTURE_3D,ae,Z,K.width,K.height,K.depth),Ot&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,dt,P,K.data)):e.texImage3D(i.TEXTURE_3D,0,Z,K.width,K.height,K.depth,0,dt,P,K.data);else if(x.isFramebufferTexture){if(ht)if(rt)e.texStorage2D(i.TEXTURE_2D,ae,Z,K.width,K.height);else{let st=K.width,qt=K.height;for(let re=0;re<ae;re++)e.texImage2D(i.TEXTURE_2D,re,Z,st,qt,0,dt,P,null),st>>=1,qt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),K.parentNode!==st){st.appendChild(K),f.add(x),st.onpaint=qt=>{let re=qt.changedElements;for(let St of f)re.includes(St.image)&&(St.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let re=i.RGBA,St=i.RGBA,Ie=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,re,St,Ie,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ft.length>0){if(rt&&ht){let st=Jt(ft[0]);e.texStorage2D(i.TEXTURE_2D,ae,Z,st.width,st.height)}for(let st=0,qt=ft.length;st<qt;st++)q=ft[st],rt?Ot&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,dt,P,q):e.texImage2D(i.TEXTURE_2D,st,Z,dt,P,q);x.generateMipmaps=!1}else if(rt){if(ht){let st=Jt(K);e.texStorage2D(i.TEXTURE_2D,ae,Z,st.width,st.height)}Ot&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,P,K)}else e.texImage2D(i.TEXTURE_2D,0,Z,dt,P,K);E(x)&&x.mipmapsAutoUpdate===!0&&y(nt),_t.__version=ct.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function wt(A,x,B){if(x.image.length!==6)return;let nt=Vt(A,x),Q=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);let ct=n.get(Q);if(Q.version!==ct.__version||nt===!0){e.activeTexture(i.TEXTURE0+B);let _t=ue.getPrimaries(ue.workingColorSpace),Y=x.colorSpace===As?null:ue.getPrimaries(x.colorSpace),K=x.colorSpace===As||_t===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let dt=x.isCompressedTexture||x.image[0].isCompressedTexture,P=x.image[0]&&x.image[0].isDataTexture,Z=[];for(let St=0;St<6;St++)!dt&&!P?Z[St]=b(x.image[St],!0,s.maxCubemapSize):Z[St]=P?x.image[St].image:x.image[St],Z[St]=$t(x,Z[St]);let q=Z[0],ft=r.convert(x.format,x.colorSpace),rt=r.convert(x.type),ht=T(x.internalFormat,ft,rt,x.normalized,x.colorSpace),Ot=x.isVideoTexture!==!0,ae=ct.__version===void 0||nt===!0,st=Q.dataReady,qt=M(x,q);se(i.TEXTURE_CUBE_MAP,x);let re;if(x.isDepthTexture){if(ht=_(x.format===ws,x.type),ae)if(Ot)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ht,q.width,q.height);else for(let St=0;St<6;St++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ht,q.width,q.height,0,ft,rt,null)}else if(dt){Ot&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,qt,ht,q.width,q.height);for(let St=0;St<6;St++){re=Z[St].mipmaps;for(let Ie=0;Ie<re.length;Ie++){let vi=re[Ie];x.format!==Un?ft!==null?Ot?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ie,0,0,vi.width,vi.height,ft,vi.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ie,ht,vi.width,vi.height,0,vi.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ie,0,0,vi.width,vi.height,ft,rt,vi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ie,ht,vi.width,vi.height,0,ft,rt,vi.data)}}}else{if(re=x.mipmaps,Ot&&ae){re.length>0&&qt++;let St=Jt(Z[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,qt,ht,St.width,St.height)}for(let St=0;St<6;St++)if(P){Ot?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Z[St].width,Z[St].height,ft,rt,Z[St].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ht,Z[St].width,Z[St].height,0,ft,rt,Z[St].data);for(let Ie=0;Ie<re.length;Ie++){let Xs=re[Ie].image[St].image;Ot?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ie+1,0,0,Xs.width,Xs.height,ft,rt,Xs.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ie+1,ht,Xs.width,Xs.height,0,ft,rt,Xs.data)}}else{Ot?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,ft,rt,Z[St]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ht,ft,rt,Z[St]);for(let Ie=0;Ie<re.length;Ie++){let vi=re[Ie];Ot?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ie+1,0,0,ft,rt,vi.image[St]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,Ie+1,ht,ft,rt,vi.image[St])}}}E(x)&&x.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),ct.__version=Q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function mt(A,x,B,nt,Q,ct){let _t=r.convert(B.format,B.colorSpace),Y=r.convert(B.type),K=T(B.internalFormat,_t,Y,B.normalized,B.colorSpace),dt=n.get(x),P=n.get(B);if(P.__renderTarget=x,!dt.__hasExternalTextures){let Z=Math.max(1,x.width>>ct),q=Math.max(1,x.height>>ct);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,ct,K,Z,q,x.depth,0,_t,Y,null):e.texImage2D(Q,ct,K,Z,q,0,_t,Y,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),gt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,Q,P.__webglTexture,0,Fe(x)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,Q,P.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function te(A,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let nt=x.depthTexture,Q=nt&&nt.isDepthTexture?nt.type:null,ct=_(x.stencilBuffer,Q),_t=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;gt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Fe(x),ct,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe(x),ct,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ct,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,A)}else{let nt=x.textures;for(let Q=0;Q<nt.length;Q++){let ct=nt[Q],_t=r.convert(ct.format,ct.colorSpace),Y=r.convert(ct.type),K=T(ct.internalFormat,_t,Y,ct.normalized,ct.colorSpace);gt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Fe(x),K,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe(x),K,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,K,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(A,x,B){let nt=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(x.depthTexture);Q.__renderTarget=x;let ct=nt?x.depthTexture.image[0]:x.depthTexture.image;(!Q.__webglTexture||ct.width!==x.width||ct.height!==x.height)&&(ct.width=x.width,ct.height=x.height,x.depthTexture.needsUpdate=!0),nt?yt(x.depthTexture,0):xt(x.depthTexture,0);let _t=Q.__webglTexture,Y=Fe(x),K=nt?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,dt=x.depthTexture.format===ws?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ss)gt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,K,_t,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,dt,K,_t,0);else if(x.depthTexture.format===ws)gt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,K,_t,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,dt,K,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function de(A){let x=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let nt=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),nt){let Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,nt.removeEventListener("dispose",Q)};nt.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=nt}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let nt=0;nt<6;nt++)Ut(x.__webglFramebuffer[nt],A,nt);else A.texture.mipmaps.length>0?Ut(x.__webglFramebuffer[0],A,0):Ut(x.__webglFramebuffer,A,0);else if(B){x.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[nt]),x.__webglDepthbuffer[nt]===void 0)x.__webglDepthbuffer[nt]=i.createRenderbuffer(),te(x.__webglDepthbuffer[nt],A,!1);else{let Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=x.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ct)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),te(x.__webglDepthbuffer,A,!1);else{let Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ct)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(A,x,B){let nt=n.get(A);x!==void 0&&mt(nt.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&de(A)}function be(A){let x=A.texture,B=n.get(A),nt=n.get(x);A.addEventListener("dispose",U),F(A);let Q=A.textures,ct=A.isWebGLCubeRenderTarget===!0,_t=Q.length>1;if(_t||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=x.version,a.memory.textures++),ct){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0){B.__webglFramebuffer[Y]=[];for(let K=0;K<x.mipmaps.length;K++)B.__webglFramebuffer[Y][K]=i.createFramebuffer()}else B.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(x.mipmaps.length>0){B.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)B.__webglFramebuffer[Y]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(_t)for(let Y=0,K=Q.length;Y<K;Y++){let dt=n.get(Q[Y]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&gt(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<Q.length;Y++){let K=Q[Y];B.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);let dt=r.convert(K.format,K.colorSpace),P=r.convert(K.type),Z=T(K.internalFormat,dt,P,K.normalized,K.colorSpace,A.isXRRenderTarget===!0),q=Fe(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,q,Z,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),te(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),se(i.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)mt(B.__webglFramebuffer[Y][K],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,K);else mt(B.__webglFramebuffer[Y],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);E(x)?y(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(_t){for(let Y=0,K=Q.length;Y<K;Y++){let dt=Q[Y],P=n.get(dt),Z=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,P.__webglTexture),se(Z,dt),mt(B.__webglFramebuffer,A,dt,i.COLOR_ATTACHMENT0+Y,Z,0),E(dt)&&y(Z)}e.unbindTexture()}else{let Y=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,nt.__webglTexture),se(Y,x),x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)mt(B.__webglFramebuffer[K],A,x,i.COLOR_ATTACHMENT0,Y,K);else mt(B.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,Y,0);E(x)?y(Y):x.mipmaps.length>0&&i.texParameteri(Y,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&de(A)}function N(A){let x=A.textures;for(let B=0,nt=x.length;B<nt;B++){let Q=x[B];if(E(Q)&&Q.mipmapsAutoUpdate===!0){let ct=w(A),_t=n.get(Q).__webglTexture;e.bindTexture(ct,_t),y(ct),e.unbindTexture()}}}let ni=[];function he(A){if(A.samples>0){if(gt(A)===!1){let x=A.textures,B=A.width,nt=A.height,Q=i.COLOR_BUFFER_BIT,ct=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(A),Y=x.length>1;if(Y)for(let dt=0;dt<x.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let dt=0;dt<x.length;dt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[dt]);let P=n.get(x[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,B,nt,0,0,B,nt,Q,i.NEAREST),l===!0&&(ni.length=0,ni.push(i.COLOR_ATTACHMENT0+dt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&ni.push(ct),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ni))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let dt=0;dt<x.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[dt]);let P=n.get(x[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,P,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Fe(A){return Math.min(s.maxSamples,A.samples)}function gt(A){let x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function je(A){let x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function $t(A,x){let B=A.colorSpace,nt=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==ko&&B!==As&&(ue.getTransfer(B)===Ee?(nt!==Un||Q!==Yi)&&Yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Zt("WebGLTextures: Unsupported texture color space:",B)),x}function Jt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=zt,this.resetTextureUnits=J,this.getTextureUnits=et,this.setTextureUnits=Tt,this.setTexture2D=xt,this.setTexture2DArray=At,this.setTexture3D=Gt,this.setTextureCube=yt,this.rebindTextures=fe,this.setupRenderTarget=be,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=gt,this.dispose=z}function RE(i,t){function e(n,s=As){let r,a=ue.getTransfer(s);if(n===Yi)return i.UNSIGNED_BYTE;if(n===Rh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ch)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===If)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rf)return i.BYTE;if(n===Cf)return i.SHORT;if(n===ka)return i.UNSIGNED_SHORT;if(n===Ah)return i.INT;if(n===Fn)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===Ci)return i.HALF_FLOAT;if(n===Lf)return i.ALPHA;if(n===Df)return i.RGB;if(n===Un)return i.RGBA;if(n===Ss)return i.DEPTH_COMPONENT;if(n===ws)return i.DEPTH_STENCIL;if(n===Ph)return i.RED;if(n===Ih)return i.RED_INTEGER;if(n===or)return i.RG;if(n===Lh)return i.RG_INTEGER;if(n===Dh)return i.RGBA_INTEGER;if(n===bl||n===El||n===Tl||n===wl)if(a===Ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===El)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===El)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nh||n===Fh||n===Uh||n===Oh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Nh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bh||n===kh||n===zh||n===Gh||n===Hh||n===Al||n===Vh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Bh||n===kh)return a===Ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zh)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Gh)return r.COMPRESSED_R11_EAC;if(n===Hh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Al)return r.COMPRESSED_RG11_EAC;if(n===Vh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wh||n===Xh||n===qh||n===$h||n===Yh||n===Kh||n===Zh||n===Jh||n===jh||n===Qh||n===tu||n===eu||n===iu||n===nu)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wh)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xh)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qh)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$h)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yh)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kh)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zh)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jh)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jh)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qh)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tu)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===eu)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===iu)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nu)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===su||n===ru||n===au)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===su)return a===Ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ru)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===au)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ou||n===lu||n===Rl||n===cu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ou)return r.COMPRESSED_RED_RGTC1_EXT;if(n===lu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var CE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PE=`
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

}`,op=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new jo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ke({vertexShader:CE,fragmentShader:PE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new jt(new $i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lp=class extends Xn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,p=null,v=typeof XRWebGLBinding<"u",m=new op,g={},b=e.getContextAttributes(),E=null,y=null,w=[],T=[],_=new it,M=null,F=null,R=new Ui;R.viewport=new Ve;let I=new Ui;I.viewport=new Ve;let U=[R,I],H=new Sh,C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let xt=w[$];return xt===void 0&&(xt=new Aa,w[$]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function($){let xt=w[$];return xt===void 0&&(xt=new Aa,w[$]=xt),xt.getGripSpace()},this.getHand=function($){let xt=w[$];return xt===void 0&&(xt=new Aa,w[$]=xt),xt.getHandSpace()};function X($){let xt=T.indexOf($.inputSource);if(xt===-1)return;let At=w[xt];At!==void 0&&(At.update($.inputSource,$.frame,c||a),At.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",tt);for(let $=0;$<w.length;$++){let xt=T[$];xt!==null&&(T[$]=null,w[$].disconnect(xt))}C=null,z=null,m.reset();for(let $ in g)delete g[$];if(t.setRenderTarget(E),d=null,u=null,f=null,s=null,y=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(_.width,_.height,!1),F!==null){let $=F.camera;$.fov=F.fov,$.zoom=F.zoom,$.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",G),s.addEventListener("inputsourceschange",tt),b.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Gt=null,yt=null;b.depth&&(yt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=b.stencil?ws:Ss,Gt=b.stencil?Fr:Fn);let Ht={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ht),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new ci(u.textureWidth,u.textureHeight,{format:Un,type:Yi,depthTexture:new Es(u.textureWidth,u.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let At={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,At),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new ci(d.framebufferWidth,d.framebufferHeight,{format:Un,type:Yi,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),zt.setContext(s),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt($){for(let xt=0;xt<$.removed.length;xt++){let At=$.removed[xt],Gt=T.indexOf(At);Gt>=0&&(T[Gt]=null,w[Gt].disconnect(At))}for(let xt=0;xt<$.added.length;xt++){let At=$.added[xt],Gt=T.indexOf(At);if(Gt===-1){for(let Ht=0;Ht<w.length;Ht++)if(Ht>=T.length){T.push(At),Gt=Ht;break}else if(T[Ht]===null){T[Ht]=At,Gt=Ht;break}if(Gt===-1)break}let yt=w[Gt];yt&&yt.connect(At)}}function V($,xt){xt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(xt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let xt=$.near,At=$.far;m.texture!==null&&(m.depthNear>0&&(xt=m.depthNear),m.depthFar>0&&(At=m.depthFar)),H.near=I.near=R.near=xt,H.far=I.far=R.far=At,(C!==H.near||z!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),C=H.near,z=H.far),H.layers.mask=$.layers.mask|6,R.layers.mask=H.layers.mask&-5,I.layers.mask=H.layers.mask&-3;let Gt=$.parent,yt=H.cameras;V(H,Gt);for(let Ht=0;Ht<yt.length;Ht++)V(yt[Ht],Gt);H.projectionMatrix.copy(R.projectionMatrix),H.projectionMatrixInverse.copy(R.projectionMatrixInverse),F===null&&$.isPerspectiveCamera&&(F={camera:$,fov:$.fov,zoom:$.zoom}),J($,H,Gt)};function J($,xt,At){At===null?$.matrix.copy(xt.matrixWorld):($.matrix.copy(At.matrixWorld),$.matrix.invert(),$.matrix.multiply(xt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(xt.projectionMatrix),$.projectionMatrixInverse.copy(xt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ea*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function($){return g[$]};let et=null;function Tt($,xt){if(h=xt.getViewerPose(c||a),p=xt,h!==null){let At=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Gt=!1;At.length!==H.cameras.length&&(H.cameras.length=0,Gt=!0);for(let Xt=0;Xt<At.length;Xt++){let se=At[Xt],Vt=null;if(d!==null)Vt=d.getViewport(se);else{let at=f.getViewSubImage(u,se);Vt=at.viewport,Xt===0&&(t.setRenderTargetTextures(y,at.colorTexture,at.depthStencilTexture),t.setRenderTarget(y))}let j=U[Xt];j===void 0&&(j=new Ui,j.layers.enable(Xt),j.viewport=new Ve,U[Xt]=j),j.matrix.fromArray(se.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(se.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),Xt===0&&(H.matrix.copy(j.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Gt===!0&&H.cameras.push(j)}let yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let Xt=f.getDepthInformation(At[0]);Xt&&Xt.isValid&&Xt.texture&&m.init(Xt,s.renderState)}if(yt&&yt.includes("camera-access")&&v){t.state.unbindTexture(),f=n.getBinding();for(let Xt=0;Xt<At.length;Xt++){let se=At[Xt].camera;if(se){let Vt=g[se];Vt||(Vt=new jo,g[se]=Vt);let j=f.getCameraImage(se);Vt.sourceTexture=j}}}}for(let At=0;At<w.length;At++){let Gt=T[At],yt=w[At];Gt!==null&&yt!==void 0&&yt.update(Gt,xt,c||a)}et&&et($,xt),xt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xt}),p=null}let zt=new d_;zt.setAnimationLoop(Tt),this.setAnimationLoop=function($){et=$},this.dispose=function(){}}},IE=new Ce,M_=new Qt;M_.set(-1,0,0,0,1,0,0,0,1);function LE(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Wf(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,b,E,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),f(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&d(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,b,E):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Ri&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Ri&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let b=t.get(g),E=b.envMap,y=b.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(IE.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(M_),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,b,E){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*b,m.scale.value=E*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,b){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ri&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){let b=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function DE(i,t,e,n){let s={},r={};function a(b,E){let y=E.program;n.uniformBlockBinding(b,y,s[b.id])}function o(b,E){let y=s[b.id];y===void 0&&(p(b),y=l(b),s[b.id]=y,b.addEventListener("dispose",m));let w=E.program;n.updateUBOMapping(b,w);let T=t.render.frame;r[b.id]!==T&&(c(b),r[b.id]=T)}function l(b){let E=i.createBuffer(),y=b.__size,w=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,y,w),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(b){let E=s[b.id],y=b.uniforms,w=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,_=y.length;T<_;T++){let M=y[T];if(Array.isArray(M))for(let F=0,R=M.length;F<R;F++)h(M[F],T,F,w);else h(M,T,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(b,E,y,w){if(u(b,E,y,w)===!0){let T=b.__offset,_=b.value;if(Array.isArray(_)){let M=0;for(let F=0;F<_.length;F++){let R=_[F],I=v(R,!0);f(R,b.__data,M),M+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,b.__data)}}function f(b,E,y){typeof b=="number"||typeof b=="boolean"?E[y]=b:b.isMatrix3?(E[y]=b.elements[0],E[y+1]=b.elements[1],E[y+2]=b.elements[2],E[y+3]=0,E[y+4]=b.elements[3],E[y+5]=b.elements[4],E[y+6]=b.elements[5],E[y+7]=0,E[y+8]=b.elements[6],E[y+9]=b.elements[7],E[y+10]=b.elements[8],E[y+11]=0):ArrayBuffer.isView(b)?E.set(b.subarray(0,E.length-y),y):b.toArray(E,y)}function u(b,E,y,w){let T=b.value,_=E+"_"+y;if(Array.isArray(T)){w[_]===void 0&&(w[_]=[]);let M=w[_],F=!1;for(let R=0;R<T.length;R++)d(T[R],M,R)===!0&&(F=!0);return F}return d(T,w,_)}function d(b,E,y){if(E[y]===void 0)return typeof b=="number"||typeof b=="boolean"?E[y]=b:ArrayBuffer.isView(b)?E[y]=b.slice():E[y]=b.clone(),!0;{let w=E[y];if(typeof b=="number"||typeof b=="boolean"){if(w!==b)return E[y]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(w.equals(b)===!1)return w.copy(b),!0}}return!1}function p(b){let E=b.uniforms,y=0,w=16;for(let _=0,M=E.length;_<M;_++){let F=Array.isArray(E[_])?E[_]:[E[_]];for(let R=0,I=F.length;R<I;R++){let U=F[R],H=Array.isArray(U.value)?U.value:[U.value],C=Array.isArray(E[_])||Array.isArray(U.value),z=y;for(let G=0,tt=H.length;G<tt;G++){let V=H[G],J=v(V,C),et=y%w,Tt=et%J.boundary,zt=et+Tt;y+=Tt,zt!==0&&w-zt<J.storage&&(y+=w-zt),G===0&&(z=y),y+=J.storage}let X=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new X((y-z)/Float32Array.BYTES_PER_ELEMENT),U.__offset=z}}let T=y%w;return T>0&&(y+=w-T),b.__size=y,b.__cache={},this}function v(b,E){let y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=16,y.storage=48):b.isMatrix4?(y.boundary=16,y.storage=64):b.isTexture?Yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(y.boundary=16,y.storage=b.byteLength):Yt("WebGLRenderer: Unsupported uniform value type.",b),E===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(b){let E=b.target;E.removeEventListener("dispose",m),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function g(){for(let b in s)i.deleteBuffer(s[b]);s={},r={}}return{bind:a,update:o,dispose:g}}var NE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),jn=null;function FE(){return jn===null&&(jn=new $o(NE,16,16,or,Ci),jn.name="DFG_LUT",jn.minFilter=Ti,jn.magFilter=Ti,jn.wrapS=Wn,jn.wrapT=Wn,jn.generateMipmaps=!1,jn.needsUpdate=!0),jn}var fu=class{constructor(t={}){let{canvas:e=Dg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Yi}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let v=d,m=new Set([Dh,Lh,Ih]),g=new Set([Yi,Fn,ka,Fr,Rh,Ch]),b=new Uint32Array(4),E=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},w=null,T=null,_=[],M=[],F=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,U=null,H=null,C=null,z=null;this._outputColorSpace=$e;let X=0,G=0,tt=null,V=-1,J=null,et=new Ve,Tt=new Ve,zt=null,$=new Ft(0),xt=0,At=e.width,Gt=e.height,yt=1,Ht=null,Ne=null,Xt=new Ve(0,0,At,Gt),se=new Ve(0,0,At,Gt),Vt=!1,j=new js,at=new ih,ot=!1,wt=!1,mt=new Ce,te=new L,Ut=new Ve,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fe=!1;function be(){return tt===null?yt:1}let N=n;function ni(S,D){return e.getContext(S,D)}let he,Fe,gt,je,$t,Jt,A,x,B,nt,Q,ct,_t,Y,K,dt,P,Z,q,ft,rt,ht,Ot;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",qt,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",St,!1),N===null){let D="webgl2";if(N=ni(D,S),N===null)throw ni(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ae()}catch(S){throw e.removeEventListener("webglcontextlost",qt,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",St,!1),Zt("WebGLRenderer: "+S.message),S}function ae(){he=new qb(N),he.init(),rt=new RE(N,he),Fe=new Fb(N,he,t,rt),gt=new wE(N,he),Fe.reversedDepthBuffer&&u&&gt.buffers.depth.setReversed(!0),H=N.createFramebuffer(),C=N.createFramebuffer(),z=N.createFramebuffer(),je=new Kb(N),$t=new dE,Jt=new AE(N,he,gt,$t,Fe,rt,je),A=new Xb(R),x=new J2(N),ht=new Db(N,x),B=new $b(N,x,je,ht),nt=new Jb(N,B,x,ht,je),Z=new Zb(N,Fe,Jt),K=new Ub($t),Q=new uE(R,A,he,Fe,ht,K),ct=new LE(R,$t),_t=new pE,Y=new yE(he),P=new Lb(R,A,gt,nt,p,l),dt=new TE(R,nt,Fe),Ot=new DE(N,je,Fe,gt),q=new Nb(N,he,je),ft=new Yb(N,he,je),je.programs=Q.programs,R.capabilities=Fe,R.extensions=he,R.properties=$t,R.renderLists=_t,R.shadowMap=dt,R.state=gt,R.info=je}v!==Yi&&(F=new Qb(v,e.width,e.height,o,s,r));let st=new lp(R,N);this.xr=st,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let S=he.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=he.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(S){S!==void 0&&(yt=S,this.setSize(At,Gt,!1))},this.getSize=function(S){return S.set(At,Gt)},this.setSize=function(S,D,W=!0){if(st.isPresenting){Yt("WebGLRenderer: Can't change size while VR device is presenting.");return}At=S,Gt=D,e.width=Math.floor(S*yt),e.height=Math.floor(D*yt),W===!0&&(e.style.width=S+"px",e.style.height=D+"px"),F!==null&&F.setSize(e.width,e.height),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(At*yt,Gt*yt).floor()},this.setDrawingBufferSize=function(S,D,W){At=S,Gt=D,yt=W,e.width=Math.floor(S*W),e.height=Math.floor(D*W),this.setViewport(0,0,S,D)},this.setEffects=function(S){if(v===Yi){Zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let D=0;D<S.length;D++)if(S[D].isOutputPass===!0){Yt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(et)},this.getViewport=function(S){return S.copy(Xt)},this.setViewport=function(S,D,W,O){S.isVector4?Xt.set(S.x,S.y,S.z,S.w):Xt.set(S,D,W,O),gt.viewport(et.copy(Xt).multiplyScalar(be()).round())},this.getScissor=function(S){return S.copy(se)},this.setScissor=function(S,D,W,O){S.isVector4?se.set(S.x,S.y,S.z,S.w):se.set(S,D,W,O),gt.scissor(Tt.copy(se).multiplyScalar(be()).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(S){gt.setScissorTest(Vt=S)},this.setOpaqueSort=function(S){Ht=S},this.setTransparentSort=function(S){Ne=S},this.getClearColor=function(S){return S.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,W=!0){let O=0;if(S){let k=!1;if(tt!==null){let vt=tt.texture.format;k=m.has(vt)}if(k){let vt=tt.texture.type,Rt=g.has(vt),pt=P.getClearColor(),Et=P.getClearAlpha(),Nt=pt.r,ee=pt.g,pe=pt.b;Rt?(b[0]=Nt,b[1]=ee,b[2]=pe,b[3]=Et,N.clearBufferuiv(N.COLOR,0,b)):(E[0]=Nt,E[1]=ee,E[2]=pe,E[3]=Et,N.clearBufferiv(N.COLOR,0,E))}else O|=N.COLOR_BUFFER_BIT}D&&(O|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(O|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&N.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),U=S},this.dispose=function(){e.removeEventListener("webglcontextlost",qt,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",St,!1),P.dispose(),_t.dispose(),Y.dispose(),Jt.dispose(),$t.dispose(),A.dispose(),nt.dispose(),B.dispose(),ht.dispose(),Ot.dispose(),Q.dispose(),st.dispose(),st.removeEventListener("sessionstart",a0),st.removeEventListener("sessionend",o0),xr.stop()};function qt(S){S.preventDefault(),Ho("WebGLRenderer: Context Lost."),I=!0}function re(){Ho("WebGLRenderer: Context Restored."),I=!1;let S=je.autoReset,D=dt.enabled,W=dt.autoUpdate,O=dt.needsUpdate,k=dt.type;ae(),je.autoReset=S,dt.enabled=D,dt.autoUpdate=W,dt.needsUpdate=O,dt.type=k}function St(S){Zt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ie(S){let D=S.target;D.removeEventListener("dispose",Ie),vi(D)}function vi(S){Xs(S),$t.remove(S)}function Xs(S){let D=$t.get(S).programs;D!==void 0&&(D.forEach(function(W){Q.releaseProgram(W)}),S.isShaderMaterial&&Q.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,W,O,k,vt){D===null&&(D=de);let Rt=k.isMesh&&k.matrixWorld.determinantAffine()<0,pt=Ey(S,D,W,O,k);gt.setMaterial(O,Rt);let Et=W.index,Nt=1;if(O.wireframe===!0){if(Et=B.getWireframeAttribute(W),Et===void 0)return;Nt=2}let ee=W.drawRange,pe=W.attributes.position,Pt=ee.start*Nt,me=(ee.start+ee.count)*Nt;vt!==null&&(Pt=Math.max(Pt,vt.start*Nt),me=Math.min(me,(vt.start+vt.count)*Nt)),Et!==null?(Pt=Math.max(Pt,0),me=Math.min(me,Et.count)):pe!=null&&(Pt=Math.max(Pt,0),me=Math.min(me,pe.count));let si=me-Pt;if(si<0||si===1/0)return;ht.setup(k,O,pt,W,Et);let Oe,Ue=q;if(Et!==null&&(Oe=x.get(Et),Ue=ft,Ue.setIndex(Oe)),k.isMesh)O.wireframe===!0?(gt.setLineWidth(O.wireframeLinewidth*be()),Ue.setMode(N.LINES)):Ue.setMode(N.TRIANGLES);else if(k.isLine){let Li=O.linewidth;Li===void 0&&(Li=1),gt.setLineWidth(Li*be()),k.isLineSegments?Ue.setMode(N.LINES):k.isLineLoop?Ue.setMode(N.LINE_LOOP):Ue.setMode(N.LINE_STRIP)}else k.isPoints?Ue.setMode(N.POINTS):k.isSprite&&Ue.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(he.get("WEBGL_multi_draw"))Ue.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Li=k._multiDrawStarts,It=k._multiDrawCounts,ki=k._multiDrawCount,Re=Et?x.get(Et).bytesPerElement:1,yr=$t.get(O).currentProgram.getUniforms();for(let Di=0;Di<ki;Di++)yr.setValue(N,"_gl_DrawID",Di),Ue.render(Li[Di]/Re,It[Di])}else if(k.isInstancedMesh)Ue.renderInstances(Pt,si,k.count);else if(W.isInstancedBufferGeometry){let Li=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,It=Math.min(W.instanceCount,Li);Ue.renderInstances(Pt,si,It)}else Ue.render(Pt,si)};function r0(S,D,W,O){U!==null&&S.isNodeMaterial&&U.setObject(O,S),ot===!0&&K.setState(S,W,!1),S.transparent===!0&&S.side===vn&&S.forceSinglePass===!1?(S.side=Ri,S.needsUpdate=!0,bo(S,D,O),S.side=rr,S.needsUpdate=!0,bo(S,D,O),S.side=vn):bo(S,D,O)}this.compile=function(S,D,W=null){W===null&&(W=S),U!==null&&U.renderStart(S,D,W),T=Y.get(W),T.init(D),M.push(T),W.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),S!==W&&S.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),T.setupLights(),U!==null&&U.updateLights(T.state.lightsArray),wt=this.localClippingEnabled,ot=K.init(this.clippingPlanes,wt),ot===!0&&K.setGlobalState(this.clippingPlanes,D),U!==null&&dt.render(T.state.shadowsArray,W,D);let O=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let vt=k.material;if(vt)if(Array.isArray(vt))for(let Rt=0;Rt<vt.length;Rt++){let pt=vt[Rt];r0(pt,W,D,k),O.add(pt)}else r0(vt,W,D,k),O.add(vt)}),T=M.pop(),U!==null&&U.renderEnd(),O},this.compileAsync=function(S,D,W=null){let O=this.compile(S,D,W);return new Promise(k=>{function vt(){if(O.forEach(function(Rt){let Et=$t.get(Rt).currentProgram;(Et===void 0||Et.isReady())&&O.delete(Rt)}),O.size===0){k(S);return}setTimeout(vt,10)}he.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Fd=null;function My(S){Fd&&Fd(S)}function a0(){xr.stop()}function o0(){xr.start()}let xr=new d_;xr.setAnimationLoop(My),typeof self<"u"&&xr.setContext(self),this.setAnimationLoop=function(S){Fd=S,st.setAnimationLoop(S),S===null?xr.stop():xr.start()},st.addEventListener("sessionstart",a0),st.addEventListener("sessionend",o0),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){Zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;U!==null&&U.renderStart(S,D);let W=st.enabled===!0&&st.isPresenting===!0,O=F!==null&&(tt===null||W)&&F.begin(R,tt);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(D),D=st.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,D,tt),T=Y.get(S,M.length),T.init(D),T.state.textureUnits=Jt.getTextureUnits(),M.push(T),mt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?at.setFromArrayCamera(D):j.setFromProjectionMatrix(mt,gn,D.reversedDepth),wt=this.localClippingEnabled,ot=K.init(this.clippingPlanes,wt),w=_t.get(S,_.length),w.init(),_.push(w),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let Rt=R.xr.getDepthSensingMesh();Rt!==null&&Ud(Rt,D,-1/0,R.sortObjects)}Ud(S,D,0,R.sortObjects),w.finish(),U!==null&&U.updateLights(T.state.lightsArray),R.sortObjects===!0&&w.sort(Ht,Ne),fe=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,fe&&P.addToRenderList(w,S),this.info.autoReset===!0&&this.info.reset(),ot===!0&&K.beginShadows();let k=T.state.shadowsArray;if(dt.render(k,S,D),ot===!0&&K.endShadows(),(O&&F.hasRenderPass())===!1){let Rt=w.opaque,pt=w.transmissive;if(T.setupLights(),D.isArrayCamera){let Et=D.cameras;if(pt.length>0)for(let Nt=0,ee=Et.length;Nt<ee;Nt++){let pe=Et[Nt];c0(Rt,pt,S,pe)}fe&&P.render(S);for(let Nt=0,ee=Et.length;Nt<ee;Nt++){let pe=Et[Nt];l0(w,S,pe,pe.viewport)}}else pt.length>0&&c0(Rt,pt,S,D),fe&&P.render(S),l0(w,S,D)}tt!==null&&G===0&&(Jt.updateMultisampleRenderTarget(tt),Jt.updateRenderTargetMipmap(tt)),O&&F.end(R),S.isScene===!0&&S.onAfterRender(R,S,D),ht.resetDefaultState(),V=-1,J=null,M.pop(),M.length>0?(T=M[M.length-1],Jt.setTextureUnits(T.state.textureUnits),ot===!0&&K.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,U!==null&&U.renderEnd()};function Ud(S,D,W,O){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){let Rt=D.isArrayCamera?at:j;if(!S.frustumCulled||S.intersectsFrustum(Rt)){O&&Ut.setFromMatrixPosition(S.matrixWorld).applyMatrix4(mt);let pt=nt.update(S),Et=S.material;Et.visible&&w.push(S,pt,Et,W,Ut.z,null,D)}}else if(S.isMesh||S.isLine||S.isPoints){let Rt=D.isArrayCamera?at:j;if(!S.frustumCulled||S.intersectsFrustum(Rt)){let pt=nt.update(S),Et=S.material;if(O&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ut.copy(S.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Ut.copy(pt.boundingSphere.center)),Ut.applyMatrix4(S.matrixWorld).applyMatrix4(mt)),Array.isArray(Et)){let Nt=pt.groups;for(let ee=0,pe=Nt.length;ee<pe;ee++){let Pt=Nt[ee],me=Et[Pt.materialIndex];me&&me.visible&&w.push(S,pt,me,W,Ut.z,Pt,D)}}else Et.visible&&w.push(S,pt,Et,W,Ut.z,null,D)}}}let vt=S.children;for(let Rt=0,pt=vt.length;Rt<pt;Rt++)Ud(vt[Rt],D,W,O)}function l0(S,D,W,O){let{opaque:k,transmissive:vt,transparent:Rt}=S;T.setupLightsView(W),ot===!0&&K.setGlobalState(R.clippingPlanes,W),O&&gt.viewport(et.copy(O)),k.length>0&&uc(k,D,W),vt.length>0&&uc(vt,D,W),Rt.length>0&&uc(Rt,D,W),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function c0(S,D,W,O){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[O.id]===void 0){let Pt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[O.id]=new ci(1,1,{generateMipmaps:!0,type:Pt?Ci:Yi,minFilter:Nn,samples:Math.max(4,Fe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ue.workingColorSpace})}let vt=T.state.transmissionRenderTarget[O.id],Rt=O.viewport||et;vt.setSize(Rt.z*R.transmissionResolutionScale,Rt.w*R.transmissionResolutionScale);let pt=R.getRenderTarget(),Et=R.getActiveCubeFace(),Nt=R.getActiveMipmapLevel();R.setRenderTarget(vt),R.getClearColor($),xt=R.getClearAlpha(),xt<1&&R.setClearColor(16777215,.5),R.clear(),fe&&P.render(W);let ee=R.toneMapping;R.toneMapping=Jn;let pe=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),T.setupLightsView(O),ot===!0&&K.setGlobalState(R.clippingPlanes,O),uc(S,W,O),Jt.updateMultisampleRenderTarget(vt),Jt.updateRenderTargetMipmap(vt),he.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let me=0,si=D.length;me<si;me++){let Oe=D[me],{object:Ue,geometry:Li,material:It,group:ki}=Oe;if(It.side===vn&&Ue.layers.test(O.layers)){let Re=It.side;It.side=Ri,It.needsUpdate=!0,h0(Ue,W,O,Li,It,ki),It.side=Re,It.needsUpdate=!0,Pt=!0}}Pt===!0&&(Jt.updateMultisampleRenderTarget(vt),Jt.updateRenderTargetMipmap(vt))}R.setRenderTarget(pt,Et,Nt),R.setClearColor($,xt),pe!==void 0&&(O.viewport=pe),R.toneMapping=ee}function uc(S,D,W){let O=D.isScene===!0?D.overrideMaterial:null;for(let k=0,vt=S.length;k<vt;k++){let Rt=S[k],{object:pt,geometry:Et,group:Nt}=Rt,ee=Rt.material;ee.allowOverride===!0&&O!==null&&(ee=O),pt.layers.test(W.layers)&&h0(pt,D,W,Et,ee,Nt)}}function h0(S,D,W,O,k,vt){U!==null&&k.isNodeMaterial&&U.setObject(S,k),S.onBeforeRender(R,D,W,O,k,vt),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(R,D,W,O,S,vt),k.transparent===!0&&k.side===vn&&k.forceSinglePass===!1?(k.side=Ri,k.needsUpdate=!0,R.renderBufferDirect(W,D,O,k,S,vt),k.side=rr,k.needsUpdate=!0,R.renderBufferDirect(W,D,O,k,S,vt),k.side=vn):R.renderBufferDirect(W,D,O,k,S,vt),S.onAfterRender(R,D,W,O,k,vt)}function u0(S){let D=0;for(let W of S)W.texture!==null&&D++;return D}function bo(S,D,W){D.isScene!==!0&&(D=de);let O=$t.get(S),k=T.state.lights,vt=T.state.shadowsArray,Rt=k.state.version,pt=Q.getParameters(S,k.state,vt,D,W,T.state.lightProbeGridArray),Et=Q.getProgramCacheKey(pt),Nt=O.programs;O.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,O.fog=D.fog;let ee=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;O.envMap=A.get(S.envMap||O.environment,ee),O.envMapRotation=O.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Nt===void 0&&(S.addEventListener("dispose",Ie),Nt=new Map,O.programs=Nt,O.programVariants=new Map);let pe=Nt.get(Et);if(pe!==void 0){if(O.currentProgram===pe&&O.lightsStateVersion===Rt)return f0(S,pt),pe}else pt.uniforms=Q.getUniforms(S),U!==null&&S.isNodeMaterial&&U.build(S,W,pt),S.onBeforeCompile(pt,R),pe=Q.acquireProgram(pt,Et),Nt.set(Et,pe),O.uniforms=pt.uniforms;let Pt=O.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pt.clippingPlanes=K.uniform),f0(S,pt),O.needsLights=wy(S),O.lightsStateVersion=Rt,O.needsLights&&(Pt.ambientLightColor.value=k.state.ambient,Pt.lightProbe.value=k.state.probe,Pt.sunLights.value=k.state.sun,Pt.sunLightShadows.value=k.state.sunShadow,Pt.directionalLights.value=k.state.directional,Pt.directionalLightShadows.value=k.state.directionalShadow,Pt.spotLights.value=k.state.spot,Pt.spotLightShadows.value=k.state.spotShadow,Pt.rectAreaLights.value=k.state.rectArea,Pt.ltc_1.value=k.state.rectAreaLTC1,Pt.ltc_2.value=k.state.rectAreaLTC2,Pt.pointLights.value=k.state.point,Pt.pointLightShadows.value=k.state.pointShadow,Pt.hemisphereLights.value=k.state.hemi,Pt.sunShadowMatrix.value=k.state.sunShadowMatrix,Pt.sunShadowCascade.value=k.state.sunShadowCascade,Pt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Pt.spotLightMatrix.value=k.state.spotLightMatrix,Pt.spotLightMap.value=k.state.spotLightMap,Pt.pointShadowMatrix.value=k.state.pointShadowMatrix),O.numLightProbeGrids=u0(T.state.lightProbeGridArray),O.currentProgram=pe,O.uniformsList=null,pe}function by(S,D,W,O,k){let vt=$t.get(S),Rt=vt.currentProgram.id+","+O+","+k,pt=vt.programVariants.get(Rt);return pt===void 0?(pt=bo(S,D,W),vt.programVariants.set(Rt,pt)):(vt.currentProgram=pt,vt.uniformsList=null,vt.outputColorSpace=O,vt.toneMapping=k),pt}function d0(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=za.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function f0(S,D){let W=$t.get(S);W.outputColorSpace=D.outputColorSpace,W.batching=D.batching,W.batchingColor=D.batchingColor,W.instancing=D.instancing,W.instancingColor=D.instancingColor,W.instancingMorph=D.instancingMorph,W.skinning=D.skinning,W.morphTargets=D.morphTargets,W.morphNormals=D.morphNormals,W.morphColors=D.morphColors,W.morphTargetsCount=D.morphTargetsCount,W.numClippingPlanes=D.numClippingPlanes,W.numIntersection=D.numClipIntersection,W.vertexAlphas=D.vertexAlphas,W.vertexTangents=D.vertexTangents,W.toneMapping=D.toneMapping}function Ey(S,D,W,O,k){D.isScene!==!0&&(D=de),Jt.resetTextureUnits();let vt=D.fog,Rt=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?D.environment:null,pt=tt===null?R.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ue.workingColorSpace,Et=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Nt=A.get(O.envMap||Rt,Et),ee=O.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pe=!!W.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Pt=!!W.morphAttributes.position,me=!!W.morphAttributes.normal,si=!!W.morphAttributes.color,Oe=Jn;O.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Oe=R.toneMapping);let Ue=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Li=Ue!==void 0?Ue.length:0,It=$t.get(O),ki=T.state.lights;if(ot===!0&&(wt===!0||S!==J)){let qe=S===J&&O.id===V;K.setState(O,S,qe)}let Re=!1,yr=!1;O.version===It.__version?It.needsLights&&It.lightsStateVersion!==ki.state.version||k.isBatchedMesh&&It.batching===!1||!k.isBatchedMesh&&It.batching===!0||k.isBatchedMesh&&It.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&It.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&It.instancing===!1||!k.isInstancedMesh&&It.instancing===!0||k.isSkinnedMesh&&It.skinning===!1||!k.isSkinnedMesh&&It.skinning===!0||k.isInstancedMesh&&It.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&It.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&It.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&It.instancingMorph===!1&&k.morphTexture!==null||It.envMap!==Nt||O.fog===!0&&It.fog!==vt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==K.numPlanes||It.numIntersection!==K.numIntersection)||It.vertexAlphas!==ee||It.vertexTangents!==pe||It.morphTargets!==Pt||It.morphNormals!==me||It.morphColors!==si||It.morphTargetsCount!==Li||It.numLightProbeGrids!==u0(T.state.lightProbeGridArray)?Re=!0:(It.outputColorSpace!==pt||It.toneMapping!==Oe)&&(yr=!0):(Re=!0,It.__version=O.version);let Di=It.currentProgram;(Re===!0||yr===!0)&&(Di=yr===!0?by(O,D,k,pt,Oe):bo(O,D,k),U&&O.isNodeMaterial&&U.onUpdateProgram(O,Di,It));let dc=!1,qs=!1,Sr=!1,ye=Di.getUniforms(),Ei=It.uniforms;if(gt.useProgram(Di.program)&&(dc=!0,qs=!0,Sr=!0),O.id!==V&&(V=O.id,qs=!0),dc||J!==S){gt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ye.setValue(N,"projectionMatrix",S.projectionMatrix),ye.setValue(N,"viewMatrix",S.matrixWorldInverse);let xi=ye.map.cameraPosition;xi!==void 0&&xi.setValue(N,te.setFromMatrixPosition(S.matrixWorld)),Fe.logarithmicDepthBuffer&&ye.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ye.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),J!==S&&(J=S,qs=!0,Sr=!0)}if(It.needsLights&&(ki.state.sunShadowMap.length>0&&ye.setValue(N,"sunShadowMap",ki.state.sunShadowMap,Jt),ki.state.directionalShadowMap.length>0&&ye.setValue(N,"directionalShadowMap",ki.state.directionalShadowMap,Jt),ki.state.spotShadowMap.length>0&&ye.setValue(N,"spotShadowMap",ki.state.spotShadowMap,Jt),ki.state.pointShadowMap.length>0&&ye.setValue(N,"pointShadowMap",ki.state.pointShadowMap,Jt)),k.isSkinnedMesh){ye.setOptional(N,k,"bindMatrix"),ye.setOptional(N,k,"bindMatrixInverse");let qe=k.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),ye.setValue(N,"boneTexture",qe.boneTexture,Jt))}k.isBatchedMesh&&(ye.setOptional(N,k,"batchingTexture"),ye.setValue(N,"batchingTexture",k._matricesTexture,Jt),ye.setOptional(N,k,"batchingIdTexture"),ye.setValue(N,"batchingIdTexture",k._indirectTexture,Jt),ye.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&ye.setValue(N,"batchingColorTexture",k._colorsTexture,Jt));let wn=W.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&Z.update(k,W,Di),(qs||It.receiveShadow!==k.receiveShadow)&&(It.receiveShadow=k.receiveShadow,ye.setValue(N,"receiveShadow",k.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&D.environment!==null&&(Ei.envMapIntensity.value=D.environmentIntensity),Ei.dfgLUT!==void 0&&(Ei.dfgLUT.value=FE()),qs){if(ye.setValue(N,"toneMappingExposure",R.toneMappingExposure),It.needsLights&&Ty(Ei,Sr),vt&&O.fog===!0&&ct.refreshFogUniforms(Ei,vt),ct.refreshMaterialUniforms(Ei,O,yt,Gt,T.state.transmissionRenderTarget[S.id]),It.needsLights&&It.numLightProbeGrids>0){let qe=y,xi=0;for(let fs of T.state.lightProbeGridArray)fs.texture!==null&&(qe.textures[xi]=fs.texture,qe.min[xi]=fs.boundingBox.min,qe.max[xi]=fs.boundingBox.max,qe.resolution[xi]=fs.resolution,xi++);for(let fs in qe)qe[fs].length=xi;Ei.probesSH.value=qe.textures,Ei.probesMin.value=qe.min,Ei.probesMax.value=qe.max,Ei.probesResolution.value=qe.resolution}za.upload(N,d0(It),Ei,Jt)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(za.upload(N,d0(It),Ei,Jt),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ye.setValue(N,"center",k.center),ye.setValue(N,"modelViewMatrix",k.modelViewMatrix),ye.setValue(N,"normalMatrix",k.normalMatrix),ye.setValue(N,"modelMatrix",k.matrixWorld),O.uniformsGroups!==void 0){let qe=O.uniformsGroups;for(let xi=0,fs=qe.length;xi<fs;xi++){let m0=qe[xi];Ot.update(m0,Di),Ot.bind(m0,Di)}}return Di}function Ty(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.sunLights.needsUpdate=D,S.sunLightShadows.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function wy(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(S,D,W){let O=$t.get(S);O.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),$t.get(S.texture).__webglTexture=D,$t.get(S.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:W,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){let W=$t.get(S);W.__webglFramebuffer=D,W.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,W=0){tt=S,X=D,G=W;let O=null,k=!1,vt=!1;if(S){let pt=$t.get(S);if(pt.__useDefaultFramebuffer!==void 0){gt.bindFramebuffer(N.FRAMEBUFFER,pt.__webglFramebuffer),et.copy(S.viewport),Tt.copy(S.scissor),zt=S.scissorTest,gt.viewport(et),gt.scissor(Tt),gt.setScissorTest(zt),V=-1;return}else if(pt.__webglFramebuffer===void 0)Jt.setupRenderTarget(S);else if(pt.__hasExternalTextures)Jt.rebindTextures(S,$t.get(S.texture).__webglTexture,$t.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let ee=S.depthTexture;if(pt.__boundDepthTexture!==ee){if(ee!==null&&$t.has(ee)&&(S.width!==ee.image.width||S.height!==ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Jt.setupDepthRenderbuffer(S)}}let Et=S.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(vt=!0);let Nt=$t.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Nt[D])?O=Nt[D][W]:O=Nt[D],k=!0):S.samples>0&&Jt.useMultisampledRTT(S)===!1?O=$t.get(S).__webglMultisampledFramebuffer:Array.isArray(Nt)?O=Nt[W]:O=Nt,et.copy(S.viewport),Tt.copy(S.scissor),zt=S.scissorTest}else et.copy(Xt).multiplyScalar(yt).floor(),Tt.copy(se).multiplyScalar(yt).floor(),zt=Vt;if(W!==0&&(O=H),gt.bindFramebuffer(N.FRAMEBUFFER,O)&&gt.drawBuffers(S,O),gt.viewport(et),gt.scissor(Tt),gt.setScissorTest(zt),k){let pt=$t.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,pt.__webglTexture,W)}else if(vt){let pt=D;for(let Et=0;Et<S.textures.length;Et++){let Nt=$t.get(S.textures[Et]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Et,Nt.__webglTexture,W,pt)}}else if(S!==null&&W!==0){let pt=$t.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,pt.__webglTexture,W)}V=-1};function p0(S){let D=$t.get(S);return(D.__readFormat!==S.format||D.__readType!==S.type)&&(D.__readFormat=S.format,D.__readType=S.type,D.__formatReadable=Fe.textureFormatReadable(S.format),D.__typeReadable=Fe.textureTypeReadable(S.type)),D}this.readRenderTargetPixels=function(S,D,W,O,k,vt,Rt,pt=0){if(!(S&&S.isWebGLRenderTarget)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=$t.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Rt!==void 0&&(Et=Et[Rt],Array.isArray(Et)&&(Et=Et[0])),Et){gt.bindFramebuffer(N.FRAMEBUFFER,Et);try{let Nt=S.textures[pt],ee=Nt.format,pe=Nt.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+pt);let Pt=p0(Nt);if(Pt.__formatReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-O&&W>=0&&W<=S.height-k&&N.readPixels(D,W,O,k,rt.convert(ee),rt.convert(pe),vt)}finally{let Nt=tt!==null?$t.get(tt).__webglFramebuffer:null;gt.bindFramebuffer(N.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(S,D,W,O,k,vt,Rt,pt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=$t.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Rt!==void 0&&(Et=Et[Rt],Array.isArray(Et)&&(Et=Et[0])),Et)if(D>=0&&D<=S.width-O&&W>=0&&W<=S.height-k){gt.bindFramebuffer(N.FRAMEBUFFER,Et);let Nt=S.textures[pt],ee=Nt.format,pe=Nt.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+pt);let Pt=p0(Nt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let me=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,me),N.bufferData(N.PIXEL_PACK_BUFFER,vt.byteLength,N.STREAM_READ),N.readPixels(D,W,O,k,rt.convert(ee),rt.convert(pe),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let si=tt!==null?$t.get(tt).__webglFramebuffer:null;gt.bindFramebuffer(N.FRAMEBUFFER,si);let Oe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Fg(N,Oe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,me),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,vt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(me),N.deleteSync(Oe),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,W=0){let O=Math.pow(2,-W),k=Math.floor(S.image.width*O),vt=Math.floor(S.image.height*O),Rt=D!==null?D.x:0,pt=D!==null?D.y:0;Jt.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,Rt,pt,k,vt),gt.unbindTexture()},this.copyTextureToTexture=function(S,D,W=null,O=null,k=0,vt=0){let Rt,pt,Et,Nt,ee,pe,Pt,me,si,Oe=S.isCompressedTexture?S.mipmaps[vt]:S.image;if(W!==null)Rt=W.max.x-W.min.x,pt=W.max.y-W.min.y,Et=W.isBox3?W.max.z-W.min.z:1,Nt=W.min.x,ee=W.min.y,pe=W.isBox3?W.min.z:0;else{let ye=Math.pow(2,-k);Rt=Math.floor(Oe.width*ye),pt=Math.floor(Oe.height*ye),S.isDataArrayTexture?Et=Oe.depth:S.isData3DTexture?Et=Math.floor(Oe.depth*ye):Et=1,Nt=0,ee=0,pe=0}O!==null?(Pt=O.x,me=O.y,si=O.z):(Pt=0,me=0,si=0);let Ue=rt.convert(D.format),Li=rt.convert(D.type),It;D.isData3DTexture?(Jt.setTexture3D(D,0),It=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Jt.setTexture2DArray(D,0),It=N.TEXTURE_2D_ARRAY):(Jt.setTexture2D(D,0),It=N.TEXTURE_2D),gt.activeTexture(N.TEXTURE0),gt.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),gt.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),gt.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let ki=gt.getParameter(N.UNPACK_ROW_LENGTH),Re=gt.getParameter(N.UNPACK_IMAGE_HEIGHT),yr=gt.getParameter(N.UNPACK_SKIP_PIXELS),Di=gt.getParameter(N.UNPACK_SKIP_ROWS),dc=gt.getParameter(N.UNPACK_SKIP_IMAGES);gt.pixelStorei(N.UNPACK_ROW_LENGTH,Oe.width),gt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Oe.height),gt.pixelStorei(N.UNPACK_SKIP_PIXELS,Nt),gt.pixelStorei(N.UNPACK_SKIP_ROWS,ee),gt.pixelStorei(N.UNPACK_SKIP_IMAGES,pe);let qs=S.isDataArrayTexture||S.isData3DTexture,Sr=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){let ye=$t.get(S),Ei=$t.get(D),wn=$t.get(ye.__renderTarget),qe=$t.get(Ei.__renderTarget);gt.bindFramebuffer(N.READ_FRAMEBUFFER,wn.__webglFramebuffer),gt.bindFramebuffer(N.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let xi=0;xi<Et;xi++)qs&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,$t.get(S).__webglTexture,k,pe+xi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,$t.get(D).__webglTexture,vt,si+xi)),N.blitFramebuffer(Nt,ee,Nt+Rt,ee+pt,Pt,me,Pt+Rt,me+pt,N.DEPTH_BUFFER_BIT,N.NEAREST);gt.bindFramebuffer(N.READ_FRAMEBUFFER,null),gt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||$t.has(S)){let ye=$t.get(S),Ei=$t.get(D);gt.bindFramebuffer(N.READ_FRAMEBUFFER,C),gt.bindFramebuffer(N.DRAW_FRAMEBUFFER,z);for(let wn=0;wn<Et;wn++)qs?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ye.__webglTexture,k,pe+wn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ye.__webglTexture,k),Sr?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ei.__webglTexture,vt,si+wn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ei.__webglTexture,vt),k!==0?N.blitFramebuffer(Nt,ee,Nt+Rt,ee+pt,Pt,me,Pt+Rt,me+pt,N.COLOR_BUFFER_BIT,N.NEAREST):Sr?N.copyTexSubImage3D(It,vt,Pt,me,si+wn,Nt,ee,Rt,pt):N.copyTexSubImage2D(It,vt,Pt,me,Nt,ee,Rt,pt);gt.bindFramebuffer(N.READ_FRAMEBUFFER,null),gt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Sr?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(It,vt,Pt,me,si,Rt,pt,Et,Ue,Li,Oe.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(It,vt,Pt,me,si,Rt,pt,Et,Ue,Oe.data):N.texSubImage3D(It,vt,Pt,me,si,Rt,pt,Et,Ue,Li,Oe):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,vt,Pt,me,Rt,pt,Ue,Li,Oe.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,vt,Pt,me,Oe.width,Oe.height,Ue,Oe.data):N.texSubImage2D(N.TEXTURE_2D,vt,Pt,me,Rt,pt,Ue,Li,Oe);gt.pixelStorei(N.UNPACK_ROW_LENGTH,ki),gt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Re),gt.pixelStorei(N.UNPACK_SKIP_PIXELS,yr),gt.pixelStorei(N.UNPACK_SKIP_ROWS,Di),gt.pixelStorei(N.UNPACK_SKIP_IMAGES,dc),vt===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&N.generateMipmap(It),gt.unbindTexture()},this.initRenderTarget=function(S){$t.get(S).__webglFramebuffer===void 0&&Jt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Jt.setTextureCube(S,0):S.isData3DTexture?Jt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Jt.setTexture2DArray(S,0):Jt.setTexture2D(S,0),gt.unbindTexture()},this.resetState=function(){X=0,G=0,tt=null,gt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}};var Va={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var on=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},UE=new Pr(-1,1,1,-1,0,1),cp=class extends Qe{constructor(){super(),this.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Le([0,2,0,0,2,0],2))}},OE=new cp,lr=class{constructor(t){this._mesh=new jt(OE,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,UE)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var gu=class extends on{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ke?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Cs.clone(t.uniforms),this.material=new Ke({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new lr(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ul=class extends on{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},_u=class extends on{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var vu=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new it);this._width=n.width,this._height=n.height,e=new ci(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ci}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new gu(Va),this.copyPass.material.blending=Ts,this.timer=new fl}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ul!==void 0&&(a instanceof Ul?n=!0:a instanceof _u&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new it);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var xu=class extends on{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ft}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var b_={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ft(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Wa=class i extends on{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new it(t.x,t.y):new it(256,256),this.clearColor=new Ft(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ci(r,a,{type:Ci,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new ci(r,a,{type:Ci,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new ci(r,a,{type:Ci,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=b_;this.highPassUniforms=Cs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ke({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new it(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Cs.clone(Va.uniforms),this.blendMaterial=new Ke({uniforms:this.copyUniforms,vertexShader:Va.vertexShader,fragmentShader:Va.fragmentShader,premultipliedAlpha:!0,blending:ui,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ft,this._oldClearAlpha=1,this._basic=new Mi,this._fsQuad=new lr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new it(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Ke({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new it(.5,.5)},direction:{value:new it(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Ke({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Wa.BlurDirectionX=new it(1,0);Wa.BlurDirectionY=new it(0,1);var Ol={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var yu=class extends on{constructor(){super(),this.isOutputPass=!0,this.uniforms=Cs.clone(Ol.uniforms),this.material=new Da({name:Ol.name,uniforms:this.uniforms,vertexShader:Ol.vertexShader,fragmentShader:Ol.fragmentShader}),this._fsQuad=new lr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ue.getTransfer(this._outputColorSpace)===Ee&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===gl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_l?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===vl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Dr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===yl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Sl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===xl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var E_=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,T_=`
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
`,w_=`
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
`,A_=`
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
`,R_=`
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
`,C_=`
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
`;var ie=(i,t=0,e=1)=>i<t?t:i>e?e:i,ln=(i,t,e)=>i+(t-i)*e,Ps=(i,t,e)=>{let n=ie((e-i)/(t-i));return n*n*(3-2*n)},Be=(i,t,e,n)=>ln(i,t,1-Math.exp(-e*n));function hp(i,t){return i+Math.random()*(t-i)}function Is(){let i=0,t=0;for(;i===0;)i=Math.random();for(;t===0;)t=Math.random();return Math.sqrt(-2*Math.log(i))*Math.cos(2*Math.PI*t)}function Su(i){return String(Math.max(0,Math.floor(i))).padStart(2,"0")}function P_(i=128){let t=document.createElement("canvas");t.width=t.height=i;let e=t.getContext("2d"),n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.22,"rgba(255,255,255,0.92)"),n.addColorStop(.55,"rgba(255,255,255,0.24)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,i,i);let s=new Dn(t);return s.colorSpace=$e,s}function I_(i=512){let t=document.createElement("canvas");t.width=t.height=i;let e=t.getContext("2d"),n=i/2,s=e.createRadialGradient(n,n,0,n,n,n);s.addColorStop(0,"rgba(255,252,235,0.95)"),s.addColorStop(.1,"rgba(255,236,176,0.55)"),s.addColorStop(.3,"rgba(255,205,120,0.16)"),s.addColorStop(1,"rgba(255,190,90,0)"),e.fillStyle=s,e.fillRect(0,0,i,i),e.save(),e.translate(n,n),e.globalCompositeOperation="lighter";for(let h=0;h<4;h++){e.save(),e.rotate(h*Math.PI/2);let f=e.createLinearGradient(0,0,n*1.05,0);f.addColorStop(0,"rgba(255,248,215,0.85)"),f.addColorStop(.35,"rgba(255,225,150,0.26)"),f.addColorStop(1,"rgba(255,210,120,0)"),e.fillStyle=f,e.beginPath(),e.moveTo(0,0),e.lineTo(n*1.05,-n*.028),e.lineTo(n*1.05,n*.028),e.closePath(),e.fill(),e.restore()}e.restore();let r=e.createRadialGradient(n,n*.94,2,n,n,n*.42);r.addColorStop(0,"rgba(255,255,248,1)"),r.addColorStop(.45,"rgba(255,238,180,0.98)"),r.addColorStop(1,"rgba(255,196,92,0.86)"),e.fillStyle=r,e.beginPath();let a=i*.21,o=a*.44;for(let h=0;h<10;h++){let f=h%2===0?a:o,u=-Math.PI/2+h*Math.PI/5,d=n+Math.cos(u)*f,p=n+Math.sin(u)*f;h===0?e.moveTo(d,p):e.lineTo(d,p)}e.closePath(),e.fill();let l=e.createRadialGradient(n,n,0,n,n,a*.55);l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(.5,"rgba(255,248,220,0.65)"),l.addColorStop(1,"rgba(255,235,180,0)"),e.fillStyle=l,e.beginPath(),e.arc(n,n,a*.55,0,Math.PI*2),e.fill();let c=new Dn(t);return c.colorSpace=$e,c}function cr(i=256,t="rgba(120,235,225,"){let e=document.createElement("canvas");e.width=e.height=i;let n=e.getContext("2d"),s=i/2,r=n.createRadialGradient(s,s,0,s,s,s);r.addColorStop(0,t+"0.55)"),r.addColorStop(.32,t+"0.22)"),r.addColorStop(.68,t+"0.06)"),r.addColorStop(1,t+"0)"),n.fillStyle=r,n.fillRect(0,0,i,i);let a=new Dn(e);return a.colorSpace=$e,a}function bi(i,t,e){let n=new Ft().setHSL(i,t,e,$e);return n.convertSRGBToLinear(),[n.r,n.g,n.b]}function up(i){let t=new Ft(i).convertSRGBToLinear();return[t.r,t.g,t.b]}function L_(i){return new Promise((t,e)=>{let n=new Image;n.decoding="async",n.onload=()=>t(n),n.onerror=e,n.src=i})}function D_(i){let t=performance.now(),e=0,n=s=>{e=requestAnimationFrame(n);let r=Math.min(.05,(s-t)/1e3);t=s,i(r,s/1e3)};return e=requestAnimationFrame(n),()=>cancelAnimationFrame(e)}var Mu=40,N_=new URLSearchParams(location.search).has("lite"),bu=class{constructor(t){this.canvas=t,this.width=window.innerWidth,this.height=window.innerHeight,this.dpr=Math.min(window.devicePixelRatio||1,N_?1:1.45),this.renderer=new fu({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(this.width,this.height,!1),this.renderer.toneMapping=Dr,this.renderer.toneMappingExposure=1.12,this.renderer.outputColorSpace=$e,t.addEventListener("webglcontextlost",n=>{n.preventDefault(),this.onContextLost?.()},!1),this.scene=new Ms,this.scene.background=new Ft(132106);let e=_e.camera;this.camera=new Ui(e.fov,this.width/this.height,e.near,e.far),this.camera.position.set(...e.position),this.baseZ=e.position[2],this.lookTarget=new L(...e.target),this.camera.lookAt(this.lookTarget),this.scene.add(this.camera),this.pointer=new it(0,0),this.pointerSmooth=new it(0,0),this.mood=0,this.moodSmooth=0,this.galaxy=0,this.galaxySmooth=0,this.burst=0,this.time=0,this.orbit={az:0,pol:0,azT:0,polT:0,vAz:0,vPol:0,dragging:!1},this.zoom=1,this.zoomT=1,this.autoRotate=!1,this.camHeight=_e.camera.position[1]-_e.camera.target[1],this.composer=new vu(this.renderer),this.renderPass=new xu(this.scene,this.camera),this.composer.addPass(this.renderPass),this.bloomPass=new Wa(new it(this.width,this.height),.34,.45,.86),this.composer.addPass(this.bloomPass),this.outputPass=new yu,this.composer.addPass(this.outputPass),this._auroraA=An[0].aurora.map(n=>up(n)),this._auroraB=[this._auroraA[1],this._auroraA[0]],this.bgMaterial=new Ke({vertexShader:E_,fragmentShader:T_,uniforms:{uResolution:{value:new it(this.width*this.dpr,this.height*this.dpr)},uTime:{value:0},uPointer:{value:new it(0,0)},uMood:{value:0},uGalaxy:{value:0}},depthTest:!1,depthWrite:!1}),this.bgMesh=new jt(new $i(1,1),this.bgMaterial),this.bgMesh.position.z=-Mu,this.bgMesh.renderOrder=-1e3,this.bgMesh.frustumCulled=!1,this.camera.add(this.bgMesh),this._layoutBackground(),this._buildMoon(),this._buildLights(),this._buildGround(),this._buildSnow(),this.update(0,0)}_buildMoon(){let t=new jt(new tr(.3,48),new Mi({color:15986394,transparent:!0,opacity:.68,depthWrite:!1,depthTest:!1}));t.position.set(9.6,7,-Mu+1.4),t.renderOrder=-999,this.camera.add(t);let e=new bs(new Kn({map:cr(128,"rgba(206,226,255,"),transparent:!0,opacity:.11,depthWrite:!1,depthTest:!1,blending:ui}));e.scale.set(1.5,1.5,1),t.add(e);let n=new jt(new tr(.29,48),new Mi({color:14275517,transparent:!0,opacity:.2,depthWrite:!1,depthTest:!1}));n.position.z=.002,t.add(n),this.moon=t}_layoutBackground(){let e=2*Mu*Math.tan(_e.camera.fov*Math.PI/360),n=e*(this.width/this.height);this.bgMesh.scale.set(n,e,1)}_buildLights(){let t=new Ir(2769760,1.5);this.scene.add(t);let e=new dl(10475775,1.35);e.position.set(-4,7,6),this.scene.add(e);let n=new an(16761466,26,12,2);n.position.set(.4,1.4,2.2),this.scene.add(n),this.warmLight=n;let s=new an(16767144,14,9,2);s.position.set(0,3.1,1.6),this.scene.add(s),this.warmLight2=s;let r=new an(16773312,26,10,2);r.position.set(0,_e.tree.starY,.2),this.scene.add(r),this.starLight=r}_buildGround(){let t=new jt(new $i(11,11),new Mi({map:cr(256,"rgba(110,240,225,"),transparent:!0,opacity:.55,depthWrite:!1,blending:ui}));t.rotation.x=-Math.PI/2,t.position.set(0,.015,.4),this.scene.add(t),this.groundGlow=t;let e=new jt(new tr(9,72),new Mi({map:cr(256,"rgba(30,56,88,"),transparent:!0,opacity:.9,depthWrite:!1}));e.rotation.x=-Math.PI/2,e.position.set(0,-.01,.2),this.scene.add(e),this.snowPatch=e;let n=new jt(new tr(2.55,64),new Ai({color:10339038,roughness:.6,metalness:.04,transparent:!0,opacity:.42}));n.rotation.x=-Math.PI/2,n.position.set(0,.02,0),this.scene.add(n),this.disc=n;let s=new jt(new ol(2.45,2.72,72),new Mi({color:8188128,transparent:!0,opacity:.22,side:vn,blending:ui,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.set(0,.035,0),this.scene.add(s),this.rim=s,this.gifts=new Gi;let r=[14168636,3112284,15184970,15986918,11880239,4159428,14122928],a=new Zn(1,1,1),o=new Ai({color:16179109,roughness:.35,metalness:.4}),l=[],c=14;for(let u=0;u<c;u++){let d=u/c*Math.PI*2+.22;l.push({a:d,r:1.12+Math.random()*1.16,s:.19+Math.random()*.2,onDisc:!0})}let h=3;for(let u=0;u<h;u++){let d=u/h*Math.PI*2+.9;l.push({a:d,r:2.42+Math.random()*.18,s:.13+Math.random()*.05,onDisc:!0})}l.forEach((u,d)=>{let{a:p,r:v,s:m}=u,g=new Gi,b=new Ai({color:r[d%r.length],roughness:.42,metalness:.18,emissive:new Ft(r[d%r.length]).multiplyScalar(.2)}),E=new jt(a,b);E.scale.set(m,m*(.6+Math.random()*.42),m),g.add(E);let y=new jt(a,o);y.scale.set(m*1.02,m*.92,m*.16),g.add(y);let w=new jt(a,o);w.scale.set(m*.16,m*.92,m*1.02),g.add(w),g.position.set(Math.cos(p)*v,m*.52+(u.onDisc?.03:0),Math.sin(p)*v),g.rotation.y=Math.random()*Math.PI,g.userData.base=g.position.clone(),g.userData.phase=Math.random()*Math.PI*2,g.userData.rot=g.rotation.y,this.gifts.add(g)}),this.scene.add(this.gifts),[{x:2.95,z:4.2,s:.4,c:2},{x:-3.95,z:4.9,s:.42,c:1},{x:1.05,z:4.9,s:.28,c:3}].forEach(u=>{let d=new Gi,p=new Ai({color:r[u.c],roughness:.42,metalness:.18,emissive:new Ft(r[u.c]).multiplyScalar(.22)}),v=new jt(a,p);v.scale.set(u.s,u.s*.78,u.s),d.add(v);let m=new jt(a,o);m.scale.set(u.s*1.02,u.s*.8,u.s*.14),d.add(m);let g=new jt(a,o);g.scale.set(u.s*.14,u.s*.8,u.s*1.02),d.add(g),d.position.set(u.x,u.s*.39,u.z),d.rotation.y=Math.random()*Math.PI,d.userData.base=d.position.clone(),d.userData.phase=Math.random()*Math.PI*2,d.userData.rot=d.rotation.y,d.userData.fg=!0,this.gifts.add(d)})}_makeSnowLayer(t,e){let{size:n,opacity:s,spreadX:r,topY:a,zNear:o,zFar:l,additive:c,textureSize:h}=e,f=new Qe,u=new Float32Array(t*3),d=new Float32Array(t);for(let m=0;m<t;m++)u[m*3]=(Math.random()-.5)*r,u[m*3+1]=Math.random()*a,u[m*3+2]=o+Math.random()*(l-o),d[m]=Math.random();f.setAttribute("position",new Te(u,3)),f.setAttribute("aSeed",new Te(d,1));let p=new Ca({size:n,map:P_(h),transparent:!0,opacity:s,depthWrite:!1,blending:c?ui:ar,color:c?14413567:15923455,sizeAttenuation:!0}),v=new Qs(f,p);return v.frustumCulled=!1,this.scene.add(v),{points:v,seeds:d,baseOpacity:s,speed:e.speed,sway:e.sway,topY:a,spreadX:r,zNear:o,zFar:l}}_buildSnow(){this.snowLayerFar=this._makeSnowLayer(N_?520:1100,{size:.04,opacity:.52,spreadX:24,topY:13,zNear:-6,zFar:8,additive:!0,textureSize:64,speed:.85,sway:.16}),this.snowLayerNear=this._makeSnowLayer(300,{size:.125,opacity:.5,spreadX:17,topY:11,zNear:1.6,zFar:7.6,additive:!1,textureSize:128,speed:1.35,sway:.36}),this.snow=this.snowLayerFar.points,this.snowSeeds=this.snowLayerFar.seeds,this.snowNear=this.snowLayerNear.points}setMood(t,e=!1){this.mood=ie(t,0,An.length-1);let n=An[Math.round(this.mood)];this._auroraA=n.aurora.map(s=>up(s)),this._auroraB=[this._auroraA[1],this._auroraA[0]],e&&(this.moodSmooth=this.mood,this.bgMaterial.uniforms.uMood.value=this.mood)}setPointer(t,e){this.pointer.set(ie(t,-1,1),ie(e,-1,1))}setGalaxy(t){this.galaxy=ie(t)}setMusicLevel(t){this.musicLevel=ie(t||0,0,1)}triggerBurst(t=.45){this.burst=Math.max(this.burst,t)}setOrbitDelta(t,e){this.orbit.azT=ie(this.orbit.azT+t,-.55,.55),this.orbit.polT=ie(this.orbit.polT+e,-.24,.3),this.orbit.vAz=t*4.5,this.orbit.vPol=e*3.5}beginOrbit(){this.orbit.dragging=!0,this.orbit.vAz=0,this.orbit.vPol=0}endOrbit(){this.orbit.dragging=!1,this.orbit.vAz*=6,this.orbit.vPol*=4}addZoom(t){this.zoomT=ie(this.zoomT+t,.78,1.35)}setAutoRotate(t){this.autoRotate=!!t}resetView(){this.orbit.azT=0,this.orbit.polT=0,this.orbit.vAz=0,this.orbit.vPol=0,this.zoomT=1}setSnowDensity(t){let e=ie(t,0,1);for(let n of[this.snowLayerFar,this.snowLayerNear]){if(!n)continue;let s=n.points.geometry.attributes.position.count;n.points.geometry.setDrawRange(0,Math.round(s*e)),n.points.visible=e>.02}}project(t){let e=this._pv||(this._pv=new L);return e.copy(t).project(this.camera),{x:(e.x*.5+.5)*this.width,y:(-e.y*.5+.5)*this.height,z:e.z,visible:e.z>-1&&e.z<1}}update(t,e){this.time=e,this.pointerSmooth.x=Be(this.pointerSmooth.x,this.pointer.x,2.2,t),this.pointerSmooth.y=Be(this.pointerSmooth.y,this.pointer.y,2.2,t),this.moodSmooth=Be(this.moodSmooth,this.mood,3.2,t),this.galaxySmooth=Be(this.galaxySmooth,this.galaxy,14,t);let n=this.musicLevel||0;this.bloomPass&&(this.bloomPass.strength=.38+n*.14),this.starLight&&(this.starLight.intensity=26+n*12),this.burst=Math.max(0,this.burst-t*1.9);let s=this.bgMaterial.uniforms;s.uTime.value=e,s.uPointer.value.set(this.pointerSmooth.x,this.pointerSmooth.y),s.uMood.value=this.moodSmooth,s.uGalaxy.value=this.galaxySmooth;let r=e,a=this.orbit;a.dragging||(a.azT=ie(a.azT+a.vAz*t,-.55,.55),a.polT=ie(a.polT+a.vPol*t,-.24,.3),a.vAz=Be(a.vAz,0,3.2,t),a.vPol=Be(a.vPol,0,3.4,t)),this.autoRotate&&(a.azT+=t*.05),a.az=Be(a.az,a.azT,5.5,t),a.pol=Be(a.pol,a.polT,5.5,t),this.zoom=Be(this.zoom,this.zoomT,5,t);let o=this.baseZ*this.zoom-this.galaxySmooth*.55,l=a.az+this.pointerSmooth.x*.055+Math.sin(r*.18)*.008,c=a.pol+this.pointerSmooth.y*.03+Math.sin(r*.24+1.3)*.006,h=Math.cos(c),f=this.lookTarget;if(this.camera.position.set(f.x+Math.sin(l)*o*h,f.y+this.camHeight+Math.sin(c)*o,f.z+Math.cos(l)*o*h),this.camera.lookAt(f),this.snow&&(this.snow.position.x=this.pointerSmooth.x*.22),this.snowNear&&(this.snowNear.position.x=this.pointerSmooth.x*.5,this.snowNear.position.y=-this.pointerSmooth.y*.16),this.warmLight&&(this.warmLight.intensity=24+Math.sin(r*1.7)*4+this.galaxySmooth*6),this.warmLight2&&(this.warmLight2.intensity=12+Math.sin(r*2.1+1.1)*3),this.starLight&&(this.starLight.intensity=24+Math.sin(r*1.1+2)*6),this.groundGlow&&(this.groundGlow.material.opacity=(.42+Math.sin(r*.9)*.08)*Math.max(0,1-this.galaxySmooth*1.5),this.groundGlow.visible=this.galaxySmooth<.66),this.snowPatch&&(this.snowPatch.material.opacity=.9*(1-this.galaxySmooth*.92)),this.disc&&(this.disc.material.opacity=.42*(1-this.galaxySmooth*.95)),this.rim&&(this.rim.material.opacity=.22*(1-this.galaxySmooth)),this.gifts){let d=this.galaxySmooth;for(let p of this.gifts.children){let v=p.userData;if(v.fg){p.visible=d<.32;continue}p.position.set(v.base.x*(1+d*.22),v.base.y+d*(1.25+.5*Math.sin(r*.62+v.phase)),v.base.z*(1+d*.22)),p.rotation.y=v.rot+d*(r*.35+v.phase),p.rotation.x=d*Math.sin(r*.4+v.phase)*.4}}let u=(d,p)=>{if(!d)return;let v=d.points,m=v.geometry.attributes.position.array,g=d.seeds,b=m.length/3;for(let E=0;E<b;E++){let y=g[E];m[E*3+1]-=(.16+y*.5)*d.speed*t,m[E*3]+=Math.sin(r*.55+y*9)*t*d.sway,m[E*3+1]<-.2&&(m[E*3+1]=d.topY,m[E*3]=(Math.random()-.5)*d.spreadX,m[E*3+2]=d.zNear+Math.random()*(d.zFar-d.zNear))}v.geometry.attributes.position.needsUpdate=!0,v.material.opacity=d.baseOpacity*(1-this.galaxySmooth*p)};u(this.snowLayerFar,.2),u(this.snowLayerNear,.35)}render(){this.composer.render()}resize(t=window.innerWidth,e=window.innerHeight){this.width=t,this.height=e,this.dpr=Math.min(window.devicePixelRatio||1,2),this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(t,e,!1),this.composer.setPixelRatio(this.dpr),this.composer.setSize(t,e);let n=t/e;this.camera.aspect=n,this.camera.updateProjectionMatrix();let s=n<1?1+(1-n)*.64:1,r=n>1.95?1-Math.min(.16,(n-1.95)*.28):1;this.baseZ=_e.camera.position[2]*s*r,this.moon&&this.moon.position.set(n<1?3.4:9.6,n<1?6.6:7,-Mu+1.4),this.bgMaterial.uniforms.uResolution.value.set(t*this.dpr,e*this.dpr),this._layoutBackground()}dispose(){this.composer.dispose?.(),this.renderer.dispose()}};var Xa={baseY:.3,topY:4.72,radius:_e.tree.radius,height:4.42},ts=Math.PI*2,Eu=class{constructor(t){this.rig=t,this.group=new Gi,this.rig.scene.add(this.group),this.burstValue=0,this.galaxyRotation=0,this.handStrength=0,this.handPos=new L(0,1.9,0),this.musicLevel=0,this._buildBody(),this._buildFoliage(),this._buildTrunk(),this._buildInnerGlow(),this._buildOrnaments(),this._buildStar()}_buildBody(){let{baseY:t,radius:e,height:n}=Xa,s=80,r=72,a=8,o=[],l=[],c=[],h=(v,m)=>{let g=v/s,b=g*a%1,E=1+.115*Math.pow(1-b,2.4),y=Math.pow(1-g,1.04),w=e*y*E;g<.045&&(w*=.86+.14*(g/.045));let T=m/r*ts,_=1+.022*Math.sin(T*5+g*18),M=t+g*n;return[Math.cos(T)*w*_,M,Math.sin(T)*w*_,g,b]},f=(v,m)=>{let[g,b,E,y,w]=h(v,m);o.push(g,b,E);let T=Math.pow(1-w,26)*.85+Math.pow(1-w,5)*.06,_=.085+y*.055,M=bi(.335+Math.random()*.045,.55+Math.random()*.12,_),F=[.72,.83,.8],R=Math.random()*.25;l.push(M[0]*(1-T)+F[0]*T*(.35+R),M[1]*(1-T)+F[1]*T*(.35+R),M[2]*(1-T)+F[2]*T*(.35+R))};for(let v=0;v<=s;v++)for(let m=0;m<r;m++)f(v,m);for(let v=0;v<s;v++)for(let m=0;m<r;m++){let g=v*r+m,b=v*r+(m+1)%r,E=(v+1)*r+(m+1)%r,y=(v+1)*r+m;c.push(g,b,E,g,E,y)}let u=new Qe;u.setAttribute("position",new Le(o,3)),u.setAttribute("color",new Le(l,3)),u.setIndex(c),u.computeVertexNormals();let d=new Ai({vertexColors:!0,roughness:.88,metalness:.02,emissive:new Ft(135691),transparent:!0,opacity:1}),p=new jt(u,d);p.position.set(0,0,0),p.renderOrder=0,this.group.add(p),this.body=p}_buildTrunk(){let t=new Ai({color:2759186,roughness:.92,metalness:0,emissive:new Ft(1444870),transparent:!0}),e=new jt(new Qo(.11,.17,.55,10),t);e.position.set(0,Xa.baseY+.12,0),this.group.add(e),this.trunk=e}_buildInnerGlow(){let t=cr(256,"rgba(255,206,120,"),e=new bs(new Kn({map:t,color:16763514,transparent:!0,opacity:.14,depthWrite:!1,blending:ui}));e.position.set(0,Xa.baseY+Xa.height*.44,.2),e.scale.set(3.4,3.1,1),this.group.add(e),this.innerGlow=e}_buildFoliage(){let{baseY:t,topY:e,radius:n,height:s}=Xa,r=_e.tree.particles,a=_e.tree.garland,o=r+a,l=new Float32Array(o*3),c=new Float32Array(o*3),h=new Float32Array(o*3),f=new Float32Array(o*3),u=new Float32Array(o),d=new Float32Array(o),p=new Float32Array(o),v=()=>{let y=Math.random();if(y<.1)return bi(.1+Math.random()*.04,.85,.7).map(M=>M*(1.1+Math.random()*.9));if(y<.16)return bi(.9+Math.random()*.05,.7,.66).map(M=>M*(1+Math.random()*.6));let w=.5+Math.random()*.13,T=.42+Math.random()*.58,_=.45+Math.random()*.4;return bi(w,T,_).map(M=>M*(.75+Math.random()*.85))},m=(y,w)=>{if(Math.random()<.18){let I=Math.random()*ts,U=Math.acos(hp(-1,1)),H=hp(2.6,7.6),C=Math.sin(U)*Math.cos(I)*H,z=Math.cos(U)*H*.55+_e.galaxy.centerY,X=Math.sin(U)*Math.sin(I)*H*.5;y[w*3]=C,y[w*3+1]=z,y[w*3+2]=X;return}let _=Math.random()*3|0,M=.7+Math.pow(Math.random(),.62)*6.6,F=Math.random()*ts+_*(ts/3)+M*.52,R=1+Is()*.12;y[w*3]=Math.cos(F)*M*1.18*R,y[w*3+1]=_e.galaxy.centerY+Math.sin(F)*M*.5*R+Is()*.34,y[w*3+2]=Math.sin(F)*M*.22+Is()*.9},g=15,b=7;for(let y=0;y<r;y++){let w=Math.random()<.62,T,_,M;if(w){let I=(Math.floor(Math.pow(Math.random(),1.5)*b)+Math.random())/b,U=t+I*s,H=n*(1-I)*1.02,C=.12+Math.pow(Math.random(),.62)*H,X=Math.round(Math.random()*g)/g*ts+Is()*.075,G=Math.pow(C/Math.max(.001,H),2)*.16;T=Math.cos(X)*C,M=Math.sin(X)*C,_=U-G+Is()*.03;let tt=Math.random(),V,J=C>H*.78;if(tt<.045)V=bi(.11,.92,.74);else if(tt<.2)V=bi(.53,.16,.93);else if(tt<.235)V=bi(.03,.84,.6);else{let zt=.315+Math.random()*.1,$=J?.3+Math.random()*.22:.17+Math.random()*.18;V=bi(zt,.68+Math.random()*.3,$)}let et=1-.5*Math.pow(I,2.6),Tt=(.85+Math.random()*.8)*et;h[y*3]=V[0]*Tt,h[y*3+1]=V[1]*Tt,h[y*3+2]=V[2]*Tt,u[y]=.018+Math.pow(Math.random(),1.8)*.034}else{let R=Math.random(),I=1-Math.sqrt(1-R);_=t+I*s;let U=1+.07*Math.sin(I*Math.PI*9+1.2),H=.42+Math.pow(Math.random(),.7)*.6,C=n*(1-I)*U*H,z=Math.random()*ts;T=Math.cos(z)*C,M=Math.sin(z)*C,_=_-Math.pow(H,2)*.1+Is()*.03;let X=.31+Math.random()*.1,G=bi(X,.72+Math.random()*.24,.13+Math.random()*.2),tt=.7+Math.random()*.7;h[y*3]=G[0]*tt,h[y*3+1]=G[1]*tt,h[y*3+2]=G[2]*tt,u[y]=.012+Math.pow(Math.random(),2.2)*.022}l[y*3]=T,l[y*3+1]=_,l[y*3+2]=M,d[y]=Math.random(),p[y]=Math.random(),m(c,y);let F=v();f[y*3]=F[0],f[y*3+1]=F[1],f[y*3+2]=F[2]}for(let y=0;y<a;y++){let w=r+y,T=y/a,_=t+T*s*.985+Math.sin(T*ts*22)*.02,M=1+.085*Math.sin(T*Math.PI*8+1.2),F=n*(1-T)*M*1.035,R=T*ts*7.5+Math.sin(T*9)*.16;l[w*3]=Math.cos(R)*F,l[w*3+1]=_,l[w*3+2]=Math.sin(R)*F;let I=bi(.105+Math.random()*.02,.92,.62+Math.random()*.2),U=.85+Math.random()*.75;h[w*3]=I[0]*U,h[w*3+1]=I[1]*U,h[w*3+2]=I[2]*U,u[w]=.016+Math.random()*.03,d[w]=Math.random(),p[w]=Math.random(),m(c,w);let H=Math.random()<.55?bi(.11,.9,.7):v();f[w*3]=H[0]*1.2,f[w*3+1]=H[1]*1.2,f[w*3+2]=H[2]*1.2}this.foliageCount=o;let E=new Qe;E.setAttribute("position",new Te(l.slice(),3)),E.setAttribute("aPosA",new Te(l,3)),E.setAttribute("aPosB",new Te(c,3)),E.setAttribute("aColorA",new Te(h,3)),E.setAttribute("aColorB",new Te(f,3)),E.setAttribute("aSize",new Te(u,1)),E.setAttribute("aPhase",new Te(d,1)),E.setAttribute("aSeed",new Te(p,1)),E.boundingSphere=new _n(new L(0,2,0),9),this.foliageUniforms={uTime:{value:0},uProgress:{value:0},uPixelRatio:{value:this.rig.dpr||1},uViewportScale:{value:800},uGalaxyRotation:{value:0},uBurst:{value:0},uSizeScale:{value:1},uHand:{value:new L(0,1.9,0)},uHandStrength:{value:0},uHandRadius:{value:1.35}},this.foliage=new Qs(E,new Ke({vertexShader:w_,fragmentShader:A_,uniforms:this.foliageUniforms,transparent:!0,depthWrite:!1,blending:ui})),this.foliage.frustumCulled=!1,this.foliage.renderOrder=2,this.group.add(this.foliage)}_buildOrnaments(){let{baseY:t,radius:e,height:n}=Xa,s=_e.tree.ornaments,r=new Float32Array(s*3),a=new Float32Array(s*3),o=new Float32Array(s*3),l=new Float32Array(s*3),c=new Float32Array(s),h=new Float32Array(s),f=new Float32Array(s),u=[bi(.995,.85,.55),bi(.12,.9,.62),bi(.5,.55,.9),bi(.78,.7,.62),bi(.35,.6,.62)];for(let p=0;p<s;p++){let v=Math.pow(Math.random(),.8),m=t+.25+v*(n-.45),g=1+.085*Math.sin(v*Math.PI*8+1.2),b=e*(1-v)*g*(.95+Math.random()*.12),E=Math.random()*ts;r[p*3]=Math.cos(E)*b,r[p*3+1]=m,r[p*3+2]=Math.sin(E)*b;let y=u[p%u.length],w=1.1+Math.random()*.9;o[p*3]=y[0]*w,o[p*3+1]=y[1]*w,o[p*3+2]=y[2]*w,c[p]=.055+Math.random()*.075,h[p]=Math.random(),f[p]=Math.random();let T=Math.random()*ts,_=1+Math.random()*6.2;a[p*3]=Math.cos(T)*_*1.12,a[p*3+1]=_e.galaxy.centerY+Math.sin(T)*_*.5+Is()*.4,a[p*3+2]=Math.sin(T)*_*.3+Is()*.8;let M=Math.random()<.5?u[(p+2)%u.length]:bi(.55,.5,.85);l[p*3]=M[0]*1.8,l[p*3+1]=M[1]*1.8,l[p*3+2]=M[2]*1.8}let d=new Qe;d.setAttribute("position",new Te(r.slice(),3)),d.setAttribute("aPosA",new Te(r,3)),d.setAttribute("aPosB",new Te(a,3)),d.setAttribute("aColorA",new Te(o,3)),d.setAttribute("aColorB",new Te(l,3)),d.setAttribute("aSize",new Te(c,1)),d.setAttribute("aPhase",new Te(h,1)),d.setAttribute("aSeed",new Te(f,1)),d.boundingSphere=new _n(new L(0,2,0),9),this.ornamentUniforms={uTime:{value:0},uProgress:{value:0},uPixelRatio:{value:this.rig.dpr||1},uViewportScale:{value:800},uGalaxyRotation:{value:0},uBurst:{value:0},uHand:{value:new L(0,1.9,0)},uHandStrength:{value:0},uHandRadius:{value:1.25}},this.ornaments=new Qs(d,new Ke({vertexShader:R_,fragmentShader:C_,uniforms:this.ornamentUniforms,transparent:!0,depthWrite:!1,blending:ui})),this.ornaments.frustumCulled=!1,this.ornaments.renderOrder=3,this.group.add(this.ornaments)}_buildStar(){let t=I_(512);this.starMaterial=new Kn({map:t,color:16773320,transparent:!0,depthWrite:!1,blending:ui,opacity:.95}),this.star=new bs(this.starMaterial),this.star.position.set(0,_e.tree.starY,.05),this.star.scale.setScalar(.95),this.star.renderOrder=4,this.group.add(this.star),this.starHalo=new bs(new Kn({map:t,color:16765562,transparent:!0,depthWrite:!1,blending:ui,opacity:.22})),this.starHalo.position.copy(this.star.position),this.starHalo.scale.setScalar(1.45),this.starHalo.renderOrder=1,this.group.add(this.starHalo)}setHand(t,e){t&&this.handPos.copy(t),this.handStrength=ie(e)}burst(t=.5){this.burstValue=Math.max(this.burstValue,t)}setMusicLevel(t){this.musicLevel=ie(t||0,0,1)}update(t,e){let n=this.rig,s=n.galaxySmooth;this.burstValue=Math.max(0,this.burstValue-t*1.6),this.galaxyRotation+=t*(.1+.22*s);let r=this.musicLevel||0,a=n.height/2/Math.tan(n.camera.fov*Math.PI/360),o=h=>{h.uTime.value=e,h.uProgress.value=s,h.uPixelRatio.value=n.dpr,h.uViewportScale.value=a,h.uGalaxyRotation.value=this.galaxyRotation,h.uBurst.value=this.burstValue,h.uHand.value.copy(this.handPos),h.uHandStrength.value=this.handStrength};o(this.foliageUniforms),o(this.ornamentUniforms),this.foliageUniforms.uSizeScale.value=1+s*.18+this.burstValue*.35+r*.22;let l=1+Math.sin(e*1.6)*.055+Math.sin(e*4.3)*.02+r*.07,c=(.95+s*.3)*l;this.star.scale.setScalar(c),this.starHalo.scale.setScalar(c*1.8),this.starMaterial.opacity=.85+Math.sin(e*2.1)*.1+r*.15,this.star.position.y=_e.tree.starY+Math.sin(e*.8)*.02,this.innerGlow&&(this.innerGlow.material.opacity=(.1+Math.sin(e*1.25)*.03+r*.05)*Math.max(0,1-s*1.6),this.innerGlow.visible=s<.62),this.trunk&&(this.trunk.material.opacity=1-s),this.body&&(this.body.material.opacity=Math.max(0,1-s*1.35),this.body.visible=s<.985),this.starMaterial.opacity*=1-s*.55,this.starHalo.material.opacity=.22*(1-s*.6)}};var BE=Math.PI*2,nP=Math.PI*(3-Math.sqrt(5));function F_(i){let t=i.src||"";return!i.v||!t||t.startsWith("data:")?t:t+(t.includes("?")?"&":"?")+"v="+encodeURIComponent(i.v)}function dp(i){let t=i>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var U_=[[-1.95,1.3,1.35],[-2.12,2.32,1.15],[-1.78,3.24,1.2],[-1.02,1.74,1.95],[1.04,1.44,1.95],[2.06,1.94,1.35],[2.3,3.04,1],[.96,3.68,1.15]];function kE(i){let t=[],e=dp(20221225),n=[{rad:2.05,y:.95,n:5},{rad:3.5,y:.62,n:6},{rad:4.9,y:.48,n:7}],s=0;for(let r=0;r<n.length;r++){let a=n[r];for(let o=0;o<a.n&&s<i;o++,s++){let l=o/a.n*Math.PI*2+(e()-.5)*.5+r*.42,c=a.rad*(.9+e()*.18);t.push(new L(Math.cos(l)*c,_e.galaxy.centerY+Math.sin(l)*c*a.y,(e()-.5)*1.8))}}for(;t.length<i;){let r=e()*Math.PI*2,a=5.2+e()*1.4;t.push(new L(Math.cos(r)*a,_e.galaxy.centerY+Math.sin(r)*a*.3,(e()-.5)*1.8))}return t}function zE(i){let t=[],e=dp(20221226),n=3,s=Math.ceil(i/n);for(let r=0;r<i;r++){let a=r%n,o=Math.floor(r/n);t.push(new L((a-(n-1)/2)*1.46+(e()-.5)*.16,3.15-o*1.02+(e()-.5)*.1,(e()-.5)*.8))}return t}var GE="aurora-noel-photos",qa="uploads";function O_(){return new Promise((i,t)=>{if(!("indexedDB"in window))return t(new Error("no indexedDB"));let e=indexedDB.open(GE,1);e.onupgradeneeded=()=>{let n=e.result;n.objectStoreNames.contains(qa)||n.createObjectStore(qa,{keyPath:"id"})},e.onsuccess=()=>i(e.result),e.onerror=()=>t(e.error)})}async function HE(i){let t=await O_();return new Promise((e,n)=>{let s=t.transaction(qa,"readwrite");s.objectStore(qa).put(i),s.oncomplete=()=>e(!0),s.onerror=()=>n(s.error)})}async function VE(){let i=await O_();return new Promise((t,e)=>{let s=i.transaction(qa,"readonly").objectStore(qa).getAll();s.onsuccess=()=>t(s.result||[]),s.onerror=()=>e(s.error)})}var Tu=class{constructor({rig:t,container:e,onGrab:n,onRelease:s,onTap:r}){this.rig=t,this.container=e,this.onGrab=n||(()=>{}),this.onRelease=s||(()=>{}),this.onTap=r||(()=>{}),this.cards=[],this.photos=[],this.galaxyAnchors=[],this.pointer={x:0,y:0,down:!1,active:!1,source:"mouse"},this.source="mouse",this.grabbed=null,this.hovered=null,this.focusCard=null,this._pointerId=null,this._downInfo=null,this._v=new L,this.reveal=0,this.revealTarget=0,this._bindDomEvents()}async load(t="assets/photos/manifest.json"){let e;if(location.protocol==="file:"&&window.__AURORA_FILE_MANIFEST__)e=window.__AURORA_FILE_MANIFEST__;else if(location.protocol==="file:"&&window.__AURORA_MANIFEST__)e=window.__AURORA_MANIFEST__;else try{let n=await fetch(t,{cache:"no-cache"});if(!n.ok)throw new Error("HTTP "+n.status);e=await n.json()}catch(n){window.__AURORA_MANIFEST__?e=window.__AURORA_MANIFEST__:(console.error("[photos] manifest 加载失败",n),e={photos:[]})}return this.photos=(e.photos||[]).slice().sort((n,s)=>n.order-s.order),this.galaxyAnchors=kE(Math.max(18,this.photos.length+6)),this.galaxyAnchorsNarrow=zE(Math.max(18,this.photos.length+6)),this._buildCards(this.photos),await this._decodeAll(),await this._restoreUploads().catch(()=>{}),this.photos.length+this.uploadCount}async _restoreUploads(){let t=[];try{t=await VE()}catch{return 0}t.sort((n,s)=>(n.ts||0)-(s.ts||0));let e=0;for(let n of t){if(!n||!n.blob)continue;if(this.cards.length>=30)break;let s=URL.createObjectURL(n.blob),r=await this._probeImage(s).catch(()=>null);if(!r)continue;let a={id:n.id,file:n.name||"photo",src:s,w:r.w,h:r.h,aspect:r.w/r.h,place:"自选",caption:(n.caption||n.name||"自选照片").replace(/\.[^.]+$/,"").slice(0,18),dominant:[120,120,130],blur:"",featured:!1,order:200+this.cards.length};this._addUploadCard(a),e++}return this.uploadCount=(this.uploadCount||0)+e,e}_addUploadCard(t){let e=this.cards.length,n=this._makeCard(t,e);return n.featured=!1,n.photo.featured=!1,this.container.appendChild(n.el),this.cards.push(n),n.img.onload=()=>{n.el.classList.add("ready"),requestAnimationFrame(()=>n.img.classList.add("loaded"))},n.img.src=F_(t),n}_buildCards(t){let e=document.createDocumentFragment();t.forEach((n,s)=>{let r=this._makeCard(n,s);e.appendChild(r.el),this.cards.push(r)}),this.container.appendChild(e)}_makeCard(t,e){let n=document.createElement("div");n.className="photo-card settling",n.dataset.id=t.id;let s=document.createElement("div");s.className="photo-inner",s.style.setProperty("--ar",String(t.aspect||.75)),t.blur&&(s.style.backgroundImage=`url("${t.blur}")`);let r=document.createElement("img");r.alt=t.caption||t.place||"",r.draggable=!1,r.decoding="async",s.appendChild(r);let a=document.createElement("div");a.className="photo-caption",a.textContent=t.caption||t.place||"",n.appendChild(s),n.appendChild(a);let o=!!t.featured,l=o?this.cards.filter(u=>u.featured).length:-1,c=o&&U_[l]?new L(...U_[l]):new L(0,1.9,1.2),h=dp(1e3+e*7919),f={el:n,img:r,inner:s,photo:t,index:e,featured:o,treeAnchor:c,galaxyAnchor:this.galaxyAnchors[e%this.galaxyAnchors.length].clone(),galaxyAnchorNarrow:this.galaxyAnchorsNarrow[e%this.galaxyAnchorsNarrow.length].clone(),worldW:(.55+h()*.12)*(o?1.03:1),rot:(h()-.5)*7,phase:h()*BE,off:{x:0,y:0},vel:{x:0,y:0},sx:0,sy:0,scale:1,opacity:0,hover:!1,grabbed:!1,rect:{w:0,h:0},z:0,revealDelay:e%6*.055};return n.addEventListener("pointerenter",()=>{this.source==="mouse"&&!f.grabbed&&(f.hover=!0,n.classList.add("hover"))}),n.addEventListener("pointerleave",()=>{f.hover=!1,n.classList.remove("hover")}),f}_decodeAll(){return Promise.all(this.cards.map(t=>new Promise(e=>{let n=t.img;n.onload=()=>{t.el.classList.add("ready"),requestAnimationFrame(()=>n.classList.add("loaded")),e()},n.onerror=()=>e(),n.src=F_(t.photo)})))}setSource(t){this.source=t,t!=="mouse"&&(this.releaseAll(),this._clearHover())}_bindDomEvents(){let t=e=>({x:e.clientX,y:e.clientY});window.addEventListener("pointermove",e=>{if(this.source!=="mouse")return;let n=t(e);this.pointer.x=n.x,this.pointer.y=n.y,this.pointer.active=!0,this.pointer.down?(!this.grabbed&&this._downInfo?.card&&Math.hypot(n.x-this._downInfo.x,n.y-this._downInfo.y)>6&&(this._grab(this._downInfo.card,this._downInfo.x,this._downInfo.y),this._downInfo=null),this.grabbed&&this._drag(n.x,n.y)):this._hover(n.x,n.y)}),window.addEventListener("pointerdown",e=>{if(this.source!=="mouse")return;let n=t(e);this.pointer.x=n.x,this.pointer.y=n.y,this.pointer.down=!0,this.pointer.active=!0,this._pointerId=e.pointerId,this._downInfo={x:n.x,y:n.y,t:performance.now(),card:this._pick(n.x,n.y)},this._downInfo.card&&e.preventDefault()}),window.addEventListener("pointerup",e=>{if(this.source!=="mouse")return;let n=t(e),s=this.grabbed;this.pointer.down=!1,this.pointer.x=n.x,this.pointer.y=n.y;let r=this._downInfo;if(this._downInfo=null,this._pointerId=null,s){this._release(s,n.x,n.y);return}r&&r.card&&Math.hypot(n.x-r.x,n.y-r.y)<8&&performance.now()-r.t<420&&this.onTap(r.card.photo,r.card.el)}),window.addEventListener("pointercancel",()=>{this.pointer.down=!1,this.releaseAll()}),window.addEventListener("blur",()=>{this.pointer.down=!1,this.releaseAll()})}setPointer(t,e,n,s=!0){if(this.pointer.x=t,this.pointer.y=e,this.pointer.active=s,this.pointer.down=n&&s,!s){this.releaseAll(),this._clearHover();return}if(this.pointer.down&&!this.grabbed){let r=this._pick(t,e);r&&this._grab(r,t,e)}else this.pointer.down&&this.grabbed?this._drag(t,e):!this.pointer.down&&this.grabbed?this._release(this.grabbed,t,e):this._hover(t,e)}_pick(t,e){let n=null,s=1/0;for(let r of this.cards){if(r.opacity<.25||r.el.classList.contains("grabbed"))continue;let a=r.sync,o=a?a.sx:r.sx,l=a?a.sy:r.sy,c=a?a.w:r.rect.w,h=c/2+8,f=c/((r.photo.aspect||.75)*2)+8,u=Math.abs(t-o),d=Math.abs(e-l);if(u<h&&d<f){let p=u/h+d/f;p<s&&(s=p,n=r)}}return n}_hover(t,e){let n=this._pick(t,e);n!==this.hovered&&(this._clearHover(),n?(this.hovered=n,n.hover=!0,n.el.classList.add("hover"),this.container.style.cursor="grab"):this.container.style.cursor="")}_clearHover(){this.hovered&&(this.hovered.hover=!1,this.hovered.el.classList.remove("hover"),this.hovered=null),this.container.style.cursor=""}_grab(t,e,n){this._clearHover(),this.grabbed=t,t.grabbed=!0,t.grabDX=e-(t.sx+t.off.x),t.grabDY=n-(t.sy+t.off.y),t.grabStartX=e,t.grabStartY=n,t.grabOffX=t.off.x,t.grabOffY=t.off.y,t.lastX=e,t.lastY=n,t.vel.x=0,t.vel.y=0,t.el.classList.add("grabbed"),t.el.classList.remove("settling"),this.onGrab(t,{x:e,y:n})}_drag(t,e){let n=this.grabbed;if(!n)return;let s=1/60,r=(n.grabOffX||0)+(t-n.grabStartX),a=(n.grabOffY||0)+(e-n.grabStartY);n.vel.x=ie((r-n.off.x)/s,-2600,2600),n.vel.y=ie((a-n.off.y)/s,-2600,2600),n.off.x=r,n.off.y=a,n.lastX=t,n.lastY=e}_release(t,e,n){t.grabbed=!1,t.el.classList.remove("grabbed"),t.el.classList.add("settling"),t.vel.x=ie(t.vel.x,-1800,1800),t.vel.y=ie(t.vel.y,-1800,1800),this.grabbed=null,this.onRelease(t,{x:e,y:n,vx:t.vel.x,vy:t.vel.y})}releaseAll(){for(let t of this.cards)t.grabbed&&(t.grabbed=!1,t.el.classList.remove("grabbed"),t.el.classList.add("settling"));this.grabbed=null,this.pointer.down=!1}resetPositions(){for(let t of this.cards)t.off.x=t.off.y=0,t.vel.x=t.vel.y=0}setPhotoScale(t){this.sizeScale=ie(t,.6,1.6)}setFocus(t){this.focusCard=t||null}setReveal(t){let e=ie(t,0,1);this.revealTarget=e,e<.02&&this.grabbed&&this.releaseAll()}pickAt(t,e){return this.reveal<.35?null:this._pick(t,e)}update(t,e){let n=this.rig,s=n.galaxySmooth;this.reveal=Be(this.reveal,this.revealTarget,9,t);let r=n.height/2/Math.tan(n.camera.fov*Math.PI/360),a=n.width,o=n.height;for(let l of this.cards){let c=l.grabbed,h=l.treeAnchor,f=a<760?l.galaxyAnchorNarrow:l.galaxyAnchor,u=a<760?.72:1,d=a<760?1.18:1,p=this._v.set(ln(h.x*u,f.x,s),ln((h.y-1.95)*d+1.95,f.y,s),ln(h.z,f.z,s)),v=.055;p.x+=Math.sin(e*.53+l.phase)*v,p.y+=Math.sin(e*.71+l.phase*1.7)*v,p.z+=Math.sin(e*.41+l.phase*2.3)*.04;let m=n.project(p),g=Math.max(2.2,n.camera.position.distanceTo(p)),E=l.worldW*(this.sizeScale||1)*(.82+s*.55)*(a<760?ln(.78,.55,s):1)*r/g,y=E/(l.photo.aspect||.75),w=E<58;l.rect.w=E,l.rect.h=y,l.sx=m.x,l.sy=m.y;let T=l.featured?1:Ps(.18,.62,s),_=l.featured?0:.95,M=ie(l.featured?T:Ps(.15,.55,s)*_),F=Ps(0,.5,this.reveal-l.revealDelay),R=M*F,I=c?1:R;if(!c){let mt=-26*l.off.x-8.6*l.vel.x,te=-26*l.off.y-8.6*l.vel.y;l.vel.x+=mt*t,l.vel.y+=te*t,l.off.x+=l.vel.x*t,l.off.y+=l.vel.y*t,Math.abs(l.off.x)<.02&&Math.abs(l.off.y)<.02&&(l.off.x=l.off.y=0,l.vel.x=l.vel.y=0)}let U=m.x+l.off.x,H=m.y+l.off.y,C=Be(l.hoverK||0,l.hover&&!c?1:0,9,t);l.hoverK=C;let z=C*.22,X=ln(U,a*.5,z),G=ln(H,o*.46,z),tt=this.focusCard===l&&!c?Ps(.34,.92,s):0,V=ln(X,a*.5,tt),J=ln(G,o*.53,tt),et=(c?1.4:1)*(.94+s*.1)*ln(1,1.3,C)*ln(1,2.6,tt);l.scale=Be(l.scale,et,12,t);let Tt=tt>.02?1:I;l.opacity=Be(l.opacity,Tt,c?20:7.5,t);let zt=ie(l.vel.x*.0075,-13,13),$=l.rot+Math.sin(e*.42+l.phase)*.9+zt,xt=(l.hover||c?.22:1)*(1-tt),At=a*.5,Gt=o*.5,yt=(m.x-At)/Math.max(1,a*.5),Ht=(m.y-Gt)/Math.max(1,o*.5),Ne=ie(yt*13,-13,13)*xt,Xt=ie(-Ht*9,-9,9)*xt,se=l.hover||c||tt>.4?ie(1-tt,0,1)*.6:ie((g-11.4)/3.4,0,1)*.9;l.sync={sx:V,sy:J,w:Math.max(24,E)*l.scale,op:l.opacity,rot:$,hot:c?1:l.hover?.55:0,dist:tt>.01?ln(g,5.4,tt):g,tiltX:Xt,tiltY:Ne};let Vt=l.el;Vt.style.setProperty("--x",`${V.toFixed(2)}px`),Vt.style.setProperty("--y",`${J.toFixed(2)}px`),Vt.style.setProperty("--w",`${Math.max(24,E).toFixed(2)}px`),Vt.style.setProperty("--s",l.scale.toFixed(4)),Vt.style.setProperty("--r",`${$.toFixed(2)}deg`),Vt.style.setProperty("--ry",`${Ne.toFixed(2)}deg`),Vt.style.setProperty("--rx",`${Xt.toFixed(2)}deg`),Vt.style.setProperty("--blur",`${se.toFixed(2)}px`),Vt.style.setProperty("--o",l.opacity.toFixed(3)),Vt.style.setProperty("--ar",String(l.photo.aspect||.75)),Vt.classList.toggle("tiny",w);let j=c||tt>.5?9e3:Math.round(3e3-m.z*1e3);l.z!==j&&(l.z=j,Vt.style.zIndex=String(j));let at=l.opacity<.14&&!c;Vt.style.pointerEvents=at?"none":"auto",at&&Vt.classList.contains("ready")?Vt.classList.remove("ready"):!at&&!Vt.classList.contains("ready")&&l.img.classList.contains("loaded")&&Vt.classList.add("ready")}}async appendPhotos(t){let e=Array.from(t||[]).filter(s=>s.type.startsWith("image/"));if(!e.length)return 0;let n=0;for(let s of e){if(this.cards.length>=30)break;let r=URL.createObjectURL(s),a=await this._probeImage(r).catch(()=>null);if(!a)continue;let o=`u${Date.now()}-${n}`,l=s.name.replace(/\.[^.]+$/,"").slice(0,18),c={id:o,file:s.name,src:r,w:a.w,h:a.h,aspect:a.w/a.h,place:"自选",caption:l,dominant:[120,120,130],blur:"",featured:!1,order:200+this.cards.length};this._addUploadCard(c),HE({id:o,name:s.name,caption:l,blob:s,ts:Date.now()}).catch(()=>{}),n++,this.uploadCount=(this.uploadCount||0)+1}return n}_probeImage(t){return new Promise((e,n)=>{let s=new Image;s.onload=()=>e({w:s.naturalWidth,h:s.naturalHeight}),s.onerror=n,s.src=t})}};var wu=class extends Ms{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Zn;t.deleteAttribute("uv");let e=new Ai({side:Ri}),n=new Ai,s=new an(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new jt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Ko(t,n,6),o=new hi;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new jt(t,$a(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new jt(t,$a(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new jt(t,$a(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new jt(t,$a(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new jt(t,$a(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new jt(t,$a(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function $a(i){return new ll({color:0,emissive:16777215,emissiveIntensity:i})}var fp=.086,pp=.08,B_=.55;function Au(i,t,e,n,s,r){let a=Math.min(r,n/2,s/2),o=i;return o.moveTo(t+a,e),o.lineTo(t+n-a,e),o.quadraticCurveTo(t+n,e,t+n,e+a),o.lineTo(t+n,e+s-a),o.quadraticCurveTo(t+n,e+s,t+n-a,e+s),o.lineTo(t+a,e+s),o.quadraticCurveTo(t,e+s,t,e+s-a),o.lineTo(t,e+a),o.quadraticCurveTo(t,e,t+a,e),o}var Ru=class{constructor(t){this.rig=t,this.frameScene=new Ms,this.camera=t.camera,this.items=new Map,this._geo=new Map,this._lipGeo=new Map,this._ray=new pl,this._ndc=new it,this._pos=new L,this._t=0;let e=new Ga(t.renderer);this.envMap=e.fromScene(new wu,.04).texture,e.dispose(),this.maxAniso=t.renderer.capabilities.getMaxAnisotropy(),this.glowTexture=cr(128,"rgba(255,214,150,"),this.brushedTexture=this._makeBrushedTexture(),this.sheenTexture=this._makeSheenTexture(),this.keyLight=new an(16771526,22,24,2),this.rimLight=new an(10476799,8,24,2),this.fillLight=new an(16758903,6,20,2),this.frameScene.add(this.keyLight,this.rimLight,this.fillLight),this.frameScene.add(new Ir(3358810,.5))}_makeBrushedTexture(){let e=document.createElement("canvas");e.width=e.height=256;let n=e.getContext("2d");n.fillStyle="#b6b6b6",n.fillRect(0,0,256,256);for(let r=0;r<1500;r++){let a=Math.random()*256,o=30+Math.random()*240,l=Math.random()*256,c=110+Math.floor(Math.random()*130);n.strokeStyle=`rgba(${c},${c},${c},${.08+Math.random()*.16})`,n.lineWidth=Math.random()<.78?.6:1.4,n.beginPath(),n.moveTo(l,a),n.lineTo(l+o,a),n.stroke()}let s=new Dn(e);return s.wrapS=s.wrapT=Sa,s.repeat.set(2.4,2.4),s.anisotropy=this.maxAniso,s}_makeSheenTexture(){let e=document.createElement("canvas");e.width=e.height=256;let n=e.getContext("2d"),s=n.createLinearGradient(0,256,256,0);s.addColorStop(0,"rgba(255,255,255,0)"),s.addColorStop(.36,"rgba(255,255,255,0)"),s.addColorStop(.46,"rgba(255,250,235,0.42)"),s.addColorStop(.52,"rgba(255,255,255,0.78)"),s.addColorStop(.58,"rgba(255,248,230,0.36)"),s.addColorStop(.7,"rgba(255,255,255,0)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,256,256);let r=new Dn(e);return r.colorSpace=$e,r}_geometry(t){let e=Math.round(t*1e3);if(this._geo.has(e))return this._geo.get(e);let n=1e3/e,s=fp,r=new Rr;Au(r,-.5,-n/2,1,n,.03);let a=new er;Au(a,-.5+s,-n/2+s,1-s*2,n-s*2,.014),a.clockwise=!0,r.holes.push(a);let o=new La(r,{depth:pp,bevelEnabled:!0,bevelThickness:.02,bevelSize:.014,bevelSegments:3,curveSegments:6});return o.translate(0,0,-pp/2),o.computeVertexNormals(),this._geo.set(e,o),o}_lipGeometry(t){let e=Math.round(t*1e3);if(this._lipGeo.has(e))return this._lipGeo.get(e);let n=1e3/e,s=fp,r=.05,a=.004,o=.5-s+r,l=n/2-s+r,c=.5-s-a,h=n/2-s-a,f=new Rr;Au(f,-o,-l,o*2,l*2,.02);let u=new er;Au(u,-c,-h,c*2,h*2,.012),u.clockwise=!0,f.holes.push(u);let d=new La(f,{depth:.012,bevelEnabled:!0,bevelThickness:.005,bevelSize:.004,bevelSegments:2,curveSegments:6});return d.translate(0,0,pp/2-.012),d.computeVertexNormals(),this._lipGeo.set(e,d),d}_create(t){if(!t)return null;let e=t.aspect||.75,n=1/e,s=this._geometry(e),r=this._lipGeometry(e),a=fp,o=new Gi;o.matrixAutoUpdate=!0;let l=new Ai({color:11565610,metalness:1,roughness:.22,roughnessMap:this.brushedTexture,envMap:this.envMap,envMapIntensity:2.2,emissive:1839106,emissiveIntensity:.06,fog:!1}),c=new Na({color:16773586,metalness:1,roughness:.1,envMap:this.envMap,envMapIntensity:1.9,clearcoat:1,clearcoatRoughness:.08,emissive:2759174,emissiveIntensity:.05,fog:!1}),h=new jt(s,[l,c]);o.add(h);let f=new Na({color:16774104,metalness:1,roughness:.06,envMap:this.envMap,envMapIntensity:2.2,clearcoat:1,clearcoatRoughness:.06,emissive:3350538,emissiveIntensity:.08,fog:!1}),u=new jt(r,f);o.add(u);let d=new Mi({color:16777215,toneMapped:!1,fog:!1,transparent:!1}),p=new Mi({color:724759,fog:!1}),v=new jt(new $i(1-a*2+.006,n-a*2+.006),p);v.position.z=.004,o.add(v);let m=new $i(1-a*2-.026,n-a*2-.026),g=new jt(m,d);g.position.z=.012,o.add(g);let b=new Mi({map:this.sheenTexture,transparent:!0,opacity:0,depthWrite:!1,blending:ui,toneMapped:!1,fog:!1}),E=new jt(new $i(1-a*2-.018,n-a*2-.018),b);E.position.z=.016,o.add(E);let y=new Mi({color:658966,fog:!1}),w=new jt(new $i(1-a*1.4,n-a*1.4),y);w.position.z=-.02,o.add(w);let T=new Mi({map:this.glowTexture,color:16767392,transparent:!0,opacity:.3,depthWrite:!1,blending:ui,fog:!1}),_=new jt(new $i(1+B_,n+B_),T);_.position.z=-.045,o.add(_);let M={group:o,materials:[l,c,f,p,y],metal:l,polish:c,photoMat:d,glowMat:T,sheenMat:b,sheen:E,opacity:1,hot:0,photoMesh:g,ready:!1};this.frameScene.add(o);let F=t.src;return F&&L_(F).then(R=>{let I;if(location.protocol==="file:"){let U=document.createElement("canvas");U.width=R.naturalWidth||R.width,U.height=R.naturalHeight||R.height,U.getContext("2d").drawImage(R,0,0),I=new Dn(U)}else I=new wi(R);I.colorSpace=$e,I.anisotropy=this.maxAniso,I.minFilter=Nn,I.magFilter=Ti,I.generateMipmaps=!0,I.needsUpdate=!0,d.map=I,d.needsUpdate=!0,M.ready=!0}).catch(()=>{}),M}_setOpacity(t,e){if(Math.abs(t.opacity-e)<.004)return;t.opacity=e;let n=Math.max(0,Math.min(1,e));for(let s of t.materials)s.transparent=n<.995,s.opacity=n,s.needsUpdate=!0;t.photoMat.transparent=n<.995,t.photoMat.opacity=n}_setHot(t,e,n){t.hot=Be(t.hot,e,9,n);let s=t.hot,r=t.opacity;t.metal.emissiveIntensity=.05+s*.22,t.polish.emissiveIntensity=.05+s*.42,t.glowMat.opacity=(.3+s*.55)*r,t.sheenMat.opacity=(.1+s*.3)*r}sync(t,e=1/60){if(!t||!t.length)return;let n=this.rig,s=this.camera,r=n.width,a=n.height,o=a/2/Math.tan(s.fov*Math.PI/360),l=s.matrixWorld;this.keyLight.position.set(.85,1.05,-3.4).applyMatrix4(l),this.rimLight.position.set(-1.5,-.7,-3).applyMatrix4(l),this.fillLight.position.set(.1,-1.3,-2.6).applyMatrix4(l);let c=performance.now(),h=new Set;for(let f of t){let u=f.sync;if(!u)continue;let d=f.photo.id,p=this.items.get(d);if(!p){if(p=this._create(f.photo),!p)continue;this.items.set(d,p)}h.add(d);let v=u.op>.02;if(p.group.visible=v,!v)continue;this._ndc.set(u.sx/r*2-1,-(u.sy/a*2-1)),this._ray.setFromCamera(this._ndc,s),this._ray.ray.at(u.dist,p.group.position);let m=u.w*u.dist/o;p.group.scale.set(m,m,m),p.group.quaternion.copy(s.quaternion),p.group.rotateY(Pl.degToRad(u.tiltY||0)),p.group.rotateX(Pl.degToRad(u.tiltX||0)),p.group.rotateZ(Pl.degToRad(u.rot||0)),this._setOpacity(p,u.op),this._setHot(p,u.hot||0,e),p.sheen.position.x=Math.sin(c*6e-4+(u.rot||0)*.12)*.018}for(let[f,u]of this.items)h.has(f)||(u.group.visible=!1)}render(){let t=this.rig.renderer,e=t.autoClear;t.autoClear=!1,t.clearDepth(),t.render(this.frameScene,this.camera),t.autoClear=e}dispose(){for(let t of this.items.values())this.frameScene.remove(t.group),t.group.traverse(e=>{e.geometry&&e.geometry.dispose?.(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(s=>s.dispose?.())});this.items.clear();for(let t of this._geo.values())t.dispose();this._geo.clear();for(let t of this._lipGeo.values())t.dispose();this._lipGeo.clear(),this.envMap.dispose(),this.glowTexture.dispose(),this.brushedTexture.dispose(),this.sheenTexture.dispose()}};var to=typeof self<"u"?self:{};function He(i,t){i=i.split(".");for(var e,n=to;i.length&&(e=i.shift());)i.length||t===void 0?n=n[e]&&n[e]!==Object.prototype[e]?n[e]:n[e]={}:n[e]=t}function Or(){throw Error("Invalid UTF8")}function k_(i,t){return t=String.fromCharCode.apply(null,t),i==null?t:i+t}var mp,z_,wp,Vu,Cu=void 0,WE=typeof TextDecoder<"u",XE=typeof TextEncoder<"u";function hv(i){if(XE)i=(z_||(z_=new TextEncoder)).encode(i);else{let e=0,n=new Uint8Array(3*i.length);for(let s=0;s<i.length;s++){var t=i.charCodeAt(s);if(t<128)n[e++]=t;else{if(t<2048)n[e++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&s<i.length){let r=i.charCodeAt(++s);if(r>=56320&&r<=57343){t=1024*(t-55296)+r-56320+65536,n[e++]=t>>18|240,n[e++]=t>>12&63|128,n[e++]=t>>6&63|128,n[e++]=63&t|128;continue}s--}t=65533}n[e++]=t>>12|224,n[e++]=t>>6&63|128}n[e++]=63&t|128}}i=e===n.length?n:n.subarray(0,e)}return i}t:{for(gp=["CLOSURE_FLAGS"],Pu=to,Iu=0;Iu<gp.length;Iu++)if((Pu=Pu[gp[Iu]])==null){Vu=null;break t}Vu=Pu}var gp,Pu,Iu,G_=Vu&&Vu[748402147];function H_(){var i=to.navigator;return i&&(i=i.userAgent)?i:""}function cd(i){return cd[" "](i),i}wp=G_==null||G_,cd[" "]=function(){};var uv={},Hl=null;function qE(i){var t=i.length,e=3*t/4;e%3?e=Math.floor(e):"=.".indexOf(i[t-1])!=-1&&(e="=.".indexOf(i[t-2])!=-1?e-2:e-1);var n=new Uint8Array(e),s=0;return(function(r,a){function o(c){for(;l<r.length;){let h=r.charAt(l++),f=Hl[h];if(f!=null)return f;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return c}dv();for(var l=0;;){let c=o(-1),h=o(0),f=o(64),u=o(64);if(u===64&&c===-1)break;a(c<<2|h>>4),f!=64&&(a(h<<4&240|f>>2),u!=64&&a(f<<6&192|u))}})(i,function(r){n[s++]=r}),s!==e?n.subarray(0,s):n}function dv(){if(!Hl){Hl={};var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"];for(let e=0;e<5;e++){let n=i.concat(t[e].split(""));uv[e]=n;for(let s=0;s<n.length;s++){let r=n[s];Hl[r]===void 0&&(Hl[r]=s)}}}}var $E=typeof Uint8Array<"u",fv=!(H_().indexOf("Trident")!=-1||H_().indexOf("MSIE")!=-1)&&typeof btoa=="function",V_=/[-_.]/g,YE={"-":"+",_:"/",".":"="};function KE(i){return YE[i]||""}function pv(i){if(!fv)return qE(i);i=V_.test(i)?i.replace(V_,KE):i,i=atob(i);var t=new Uint8Array(i.length);for(let e=0;e<i.length;e++)t[e]=i.charCodeAt(e);return t}function nm(i){return $E&&i!=null&&i instanceof Uint8Array}var eo={};function qr(){return W_||(W_=new ss(null,eo))}function sm(i){mv(eo);var t=i.h;return(t=t==null||nm(t)?t:typeof t=="string"?pv(t):null)==null?t:i.h=t}var W_,ss=class{i(){return new Uint8Array(sm(this)||0)}constructor(i,t){if(mv(t),this.h=i,i!=null&&i.length===0)throw Error("ByteString should be constructed with non-empty values")}};function mv(i){if(i!==eo)throw Error("illegal external caller")}function gv(i,t){i.__closure__error__context__984382||(i.__closure__error__context__984382={}),i.__closure__error__context__984382.severity=t}var X_=void 0;function ql(i){return gv(i=Error(i),"warning"),i}function io(i,t){if(i!=null){var e=X_??(X_={}),n=e[i]||0;n>=t||(e[i]=n+1,gv(i=Error(),"incident"),(function(s){to.setTimeout(()=>{throw s},0)})(i))}}function Yr(){return typeof BigInt=="function"}var fo=typeof Symbol=="function"&&typeof Symbol()=="symbol";function Hs(i,t,e=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?e&&Symbol.for&&i?Symbol.for(i):i!=null?Symbol(i):Symbol():t}var mr,ZE=Hs("jas",void 0,!0),q_=Hs(void 0,"0di"),Bl=Hs(void 0,"1oa"),rs=Hs(void 0,Symbol()),JE=Hs(void 0,"0ub"),jE=Hs(void 0,"0ubs"),Ap=Hs(void 0,"0ubsb"),QE=Hs(void 0,"0actk"),_v=Hs("m_m","jb",!0),vv={Va:{value:0,configurable:!0,writable:!0,enumerable:!1}},xv=Object.defineProperties,Dt=fo?ZE:"Va",$_=[];function jl(i,t){fo||Dt in i||xv(i,vv),i[Dt]|=t}function li(i,t){fo||Dt in i||xv(i,vv),i[Dt]=t}function po(i){return jl(i,34),i}function $l(i){return jl(i,8192),i}function rm(i,t){return 2&t&&(i|=2),1|i}li($_,7),mr=Object.freeze($_);var yv={};function no(i){return i!=null&&i[_v]===yv}function Vi(i,t){return t===void 0?i.i!==$r&&!!(2&i.B[Dt]):!!(2&t)&&i.i!==$r}var $r={};function hd(i,t){if(i!=null){if(typeof i=="string")i=i?new ss(i,eo):qr();else if(!(i instanceof ss))if(nm(i))i=i.length?new ss(new Uint8Array(i),eo):qr();else{if(!t)throw Error();i=void 0}}return i}var Wu=class{constructor(t,e,n){this.h=t,this.i=e,this.l=n}next(){var t=this.h.next();return t.done||(t.value=this.i.call(this.l,t.value)),t}[Symbol.iterator](){return this}};function Sv(i,t,e){var n,s=128&t?0:-1,r=i.length;(n=!!r)&&(n=(n=i[r-1])!=null&&typeof n=="object"&&n.constructor===Object);var a=r+(n?-1:0);for(t=128&t?1:0;t<a;t++)e(t-s,i[t]);if(n){i=i[r-1];for(let o in i)!isNaN(o)&&e(+o,i[o])}}Object.freeze({});var Mv={};function mo(i){return 128&i?Mv:void 0}function ud(i){return i.hb=!0,i}var tT=ud(i=>typeof i=="number"),Y_=ud(i=>typeof i=="string"),eT=ud(i=>typeof i=="boolean"),dd=typeof to.BigInt=="function"&&typeof to.BigInt(0)=="bigint";function mi(i){var t=i;if(Y_(t)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(t))throw Error(String(t))}else if(tT(t)&&!Number.isSafeInteger(t))throw Error(String(t));return dd?BigInt(i):i=eT(i)?i?"1":"0":Y_(i)?i.trim()||"0":String(i)}var Rp=ud(i=>dd?i>=nT&&i<=rT:i[0]==="-"?K_(i,iT):K_(i,sT)),iT=Number.MIN_SAFE_INTEGER.toString(),nT=dd?BigInt(Number.MIN_SAFE_INTEGER):void 0,sT=Number.MAX_SAFE_INTEGER.toString(),rT=dd?BigInt(Number.MAX_SAFE_INTEGER):void 0;function K_(i,t){if(i.length>t.length)return!1;if(i.length<t.length||i===t)return!0;for(let e=0;e<i.length;e++){let n=i[e],s=t[e];if(n>s)return!1;if(n<s)return!0}}var Xu,aT=typeof Uint8Array.prototype.slice=="function",Se=0,De=0;function Cp(i){var t=i>>>0;Se=t,De=(i-t)/4294967296>>>0}function Kr(i){if(i<0){Cp(-i);let[t,e]=lm(Se,De);Se=t>>>0,De=e>>>0}else Cp(i)}function am(i){var t=Xu||(Xu=new DataView(new ArrayBuffer(8)));t.setFloat32(0,+i,!0),De=0,Se=t.getUint32(0,!0)}function bv(i,t){var e=4294967296*t+(i>>>0);return Number.isSafeInteger(e)?e:so(i,t)}function oT(i,t){return mi(Yr()?BigInt.asUintN(64,(BigInt(t>>>0)<<BigInt(32))+BigInt(i>>>0)):so(i,t))}function Ev(i,t){return Yr()?mi(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(t))<<BigInt(32))+BigInt.asUintN(32,BigInt(i)))):mi(om(i,t))}function so(i,t){if(i>>>=0,(t>>>=0)<=2097151)var e=""+(4294967296*t+i);else Yr()?e=""+(BigInt(t)<<BigInt(32)|BigInt(i)):(i=(16777215&i)+6777216*(e=16777215&(i>>>24|t<<8))+6710656*(t=t>>16&65535),e+=8147497*t,t*=2,i>=1e7&&(e+=i/1e7>>>0,i%=1e7),e>=1e7&&(t+=e/1e7>>>0,e%=1e7),e=t+Z_(e)+Z_(i));return e}function Z_(i){return i=String(i),"0000000".slice(i.length)+i}function om(i,t){if(2147483648&t)if(Yr())i=""+(BigInt(0|t)<<BigInt(32)|BigInt(i>>>0));else{let[e,n]=lm(i,t);i="-"+so(e,n)}else i=so(i,t);return i}function Ql(i){if(i.length<16)Kr(Number(i));else if(Yr())i=BigInt(i),Se=Number(i&BigInt(4294967295))>>>0,De=Number(i>>BigInt(32)&BigInt(4294967295));else{let t=+(i[0]==="-");De=Se=0;let e=i.length;for(let n=t,s=(e-t)%6+t;s<=e;n=s,s+=6){let r=Number(i.slice(n,s));De*=1e6,(Se=1e6*Se+r)>=4294967296&&(De+=Math.trunc(Se/4294967296),De>>>=0,Se>>>=0)}if(t){let[n,s]=lm(Se,De);Se=n,De=s}}}function lm(i,t){return t=~t,i?i=1+~i:t+=1,[i,t]}function Bn(i){return Array.prototype.slice.call(i)}var Hr=typeof BigInt=="function"?BigInt.asIntN:void 0,Pp=typeof BigInt=="function"?BigInt.asUintN:void 0,kn=Number.isSafeInteger,tc=Number.isFinite,fr=Math.trunc,lT=mi(0);function Tv(i){if(typeof i!="number")throw Error(`Value of float/double field must be a number, found ${typeof i}: ${i}`);return i}function hn(i){return i==null||typeof i=="number"?i:i==="NaN"||i==="Infinity"||i==="-Infinity"?Number(i):void 0}function qu(i){if(typeof i!="boolean"){var t=typeof i;throw Error(`Expected boolean but got ${t!="object"?t:i?Array.isArray(i)?"array":t:"null"}: ${i}`)}return i}var cT=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function go(i){switch(typeof i){case"bigint":return!0;case"number":return tc(i);case"string":return cT.test(i);default:return!1}}function Bs(i){if(i!=null){if(!tc(i))throw ql("enum");i|=0}return i}function Zr(i){if(i==null)return i;if(typeof i=="string"&&i)i=+i;else if(typeof i!="number")return;return tc(i)?0|i:void 0}function wv(i){if(i==null)return i;if(typeof i=="string"&&i)i=+i;else if(typeof i!="number")return;return tc(i)?i>>>0:void 0}function Av(i,t){if(t??(t=1024),!go(i))throw ql("int64");var e=typeof i;switch(t){case 512:switch(e){case"string":return $u(i);case"bigint":return String(Hr(64,i));default:return Ip(i)}case 1024:switch(e){case"string":return Pv(i);case"bigint":return mi(Hr(64,i));default:return mi(kn(i)?i:Ip(i))}case 0:switch(e){case"string":return $u(i);case"bigint":return mi(Hr(64,i));default:return cm(i)}default:return(function(n,s=`unexpected value ${n}!`){throw Error(s)})(t,"Unknown format requested type for int64")}}function Rv(i){var t=i.length;return(i[0]==="-"?t<20||t===20&&i<="-9223372036854775808":t<19||t===19&&i<="9223372036854775807")?i:(Ql(i),om(Se,De))}function Cv(i){if(i[0]==="-")var t=!1;else t=(t=i.length)<20||t===20&&i<="18446744073709551615";return t?i:(Ql(i),so(Se,De))}function cm(i){if(i=fr(i),!kn(i)){Kr(i);var t=Se,e=De;(i=2147483648&e)&&(e=~e>>>0,(t=1+~t>>>0)==0&&(e=e+1>>>0)),i=typeof(t=bv(t,e))=="number"?i?-t:t:i?"-"+t:t}return i}function Ip(i){return i=fr(i),kn(i)?i=String(i):(Kr(i),i=om(Se,De)),i}function $u(i){var t=fr(Number(i));return kn(t)?String(t):((t=i.indexOf("."))!==-1&&(i=i.substring(0,t)),Rv(i))}function Pv(i){var t=fr(Number(i));return kn(t)?mi(t):((t=i.indexOf("."))!==-1&&(i=i.substring(0,t)),Yr()?mi(Hr(64,BigInt(i))):mi(Rv(i)))}function Yu(i){var t=typeof i;return i==null?i:t==="bigint"?mi(Hr(64,i)):go(i)?t==="string"?Pv(i):mi(kn(i)?i:Ip(i)):void 0}function hm(i){if(i==null)return i;var t=typeof i;if(t==="bigint")return String(Hr(64,i));if(go(i)){if(t==="string")return $u(i);if(t==="number")return cm(i)}}function hT(i){if(i==null)return i;var t=typeof i;if(t==="bigint")return String(Pp(64,i));if(go(i)){if(t==="string")return t=fr(Number(i)),kn(t)&&t>=0?i=String(t):((t=i.indexOf("."))!==-1&&(i=i.substring(0,t)),i=Cv(i)),i;if(t==="number")return(function(e){return(e=fr(e))>=0&&kn(e)||(Kr(e),e=bv(Se,De)),e})(i)}}function Iv(i){if(i==null||typeof i=="string"||i instanceof ss)return i}function Lv(i){if(typeof i!="string")throw Error();return i}function Us(i){if(i!=null&&typeof i!="string")throw Error();return i}function Ii(i){return i==null||typeof i=="string"?i:void 0}function um(i,t,e,n){return no(i)?i:Array.isArray(i)?((n=(e=0|i[Dt])|32&n|2&n)!==e&&li(i,n),new t(i)):(e?2&n?((i=t[q_])||(po((i=new t).B),i=t[q_]=i),t=i):t=new t:t=void 0,t)}function uT(i,t,e){return t?Av(i,1024):Yu(i)??(e?lT:void 0)}function dT(i){return i}var fT={},pT=(function(){try{return cd(new class extends Map{constructor(){super()}}),!1}catch{return!0}})(),Wl=class{constructor(){this.h=new Map}get(t){return this.h.get(t)}set(t,e){return this.h.set(t,e),this.size=this.h.size,this}delete(t){return t=this.h.delete(t),this.size=this.h.size,t}clear(){this.h.clear(),this.size=this.h.size}has(t){return this.h.has(t)}entries(){return this.h.entries()}keys(){return this.h.keys()}values(){return this.h.values()}forEach(t,e){return this.h.forEach(t,e)}[Symbol.iterator](){return this.entries()}},mT=pT?(Object.setPrototypeOf(Wl.prototype,Map.prototype),Object.defineProperties(Wl.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Wl):class extends Map{constructor(){super()}};function J_(i){return i}function _p(i){if(2&i.N)throw Error("Cannot mutate an immutable Map")}var j_,zs=class extends mT{constructor(i,t,e=J_,n=J_){super(),this.N=0|i[Dt],this.O=t,this.ca=e,this.na=this.O?gT:n;for(let s=0;s<i.length;s++){let r=i[s],a=e(r[0],!1,!0),o=r[1];t?o===void 0&&(o=null):o=n(r[1],!1,!0,void 0,void 0,this.N),super.set(a,o)}}fa(i){return $l(Array.from(super.entries(),i))}clear(){_p(this),super.clear()}delete(i){return _p(this),super.delete(this.ca(i,!0,!1))}entries(){if(this.O){var i=super.keys();i=new Wu(i,_T,this)}else i=super.entries();return i}values(){if(this.O){var i=super.keys();i=new Wu(i,zs.prototype.get,this)}else i=super.values();return i}forEach(i,t){this.O?super.forEach((e,n,s)=>{i.call(t,s.get(n),n,s)}):super.forEach(i,t)}set(i,t){return _p(this),(i=this.ca(i,!0,!1))==null?this:t==null?(super.delete(i),this):super.set(i,this.na(t,!0,!0,this.O,!1,this.N))}fb(i){var t=this.ca(i[0],!1,!0);i=i[1],i=this.O?i===void 0?null:i:this.na(i,!1,!0,void 0,!1,this.N),super.set(t,i)}has(i){return super.has(this.ca(i,!1,!1))}get(i){i=this.ca(i,!1,!1);var t=super.get(i);if(t!==void 0){var e=this.O;return e?((e=this.na(t,!1,!0,e,this.Fa,this.N))!==t&&super.set(i,e),e):t}}[Symbol.iterator](){return this.entries()}};function gT(i,t,e,n,s,r){return i=um(i,n,e,r),s&&(i=fm(i)),i}function _T(i){return[i,this.get(i)]}function Q_(){return j_||(j_=new zs(po([]),void 0,void 0,void 0,fT))}function fd(i){return rs?i[rs]:void 0}function Ku(i,t){for(let e in i)!isNaN(e)&&t(i,+e,i[e])}zs.prototype.toJSON=void 0;var vT,t1,e1,Lp=class{};function xT(i,t){t<100||io(jE,1)}function pd(i,t,e,n){var s=n!==void 0;n=!!n;var r,a=rs;!s&&fo&&a&&(r=i[a])&&Ku(r,xT),a=[];var o=i.length;r=4294967295;var l=!1,c=!!(64&t),h=c?128&t?0:-1:void 0;if(!(1&t)){var f=o&&i[o-1];f!=null&&typeof f=="object"&&f.constructor===Object?r=--o:f=void 0,!c||128&t||s||(l=!0,r=(vT??dT)(r-h,h,i,f,void 0)+h)}t=void 0;for(var u=0;u<o;u++){let d=i[u];if(d!=null&&(d=e(d,n))!=null)if(c&&u>=r){let p=u-h;(t??(t={}))[p]=d}else a[u]=d}if(f)for(let d in f){if((o=f[d])==null||(o=e(o,n))==null)continue;let p;u=+d,c&&!Number.isNaN(u)&&(p=u+h)<r?a[p]=o:(t??(t={}))[d]=o}return t&&(l?a.push(t):a[r]=t),s&&(e=rs)&&(i=fd(i))&&i instanceof Lp&&(a[e]=(function(d){var p=new Lp;return Ku(d,(v,m,g)=>{p[m]=Bn(g)}),p.h=d.h,p})(i)),a}function yT(i){return i[0]=Yl(i[0]),i[1]=Yl(i[1]),i}function Yl(i){switch(typeof i){case"number":return Number.isFinite(i)?i:""+i;case"bigint":return Rp(i)?Number(i):""+i;case"boolean":return i?1:0;case"object":if(Array.isArray(i)){var t=0|i[Dt];return i.length===0&&1&t?void 0:pd(i,t,Yl)}if(no(i))return Dv(i);if(i instanceof ss){if((t=i.h)==null)i="";else if(typeof t=="string")i=t;else{if(fv){for(var e="",n=0,s=t.length-10240;n<s;)e+=String.fromCharCode.apply(null,t.subarray(n,n+=10240));e+=String.fromCharCode.apply(null,n?t.subarray(n):t),t=btoa(e)}else{e===void 0&&(e=0),dv(),e=uv[e],n=Array(Math.floor(t.length/3)),s=e[64]||"";let c=0,h=0;for(;c<t.length-2;c+=3){var r=t[c],a=t[c+1],o=t[c+2],l=e[r>>2];r=e[(3&r)<<4|a>>4],a=e[(15&a)<<2|o>>6],o=e[63&o],n[h++]=l+r+a+o}switch(l=0,o=s,t.length-c){case 2:o=e[(15&(l=t[c+1]))<<2]||s;case 1:t=t[c],n[h]=e[t>>2]+e[(3&t)<<4|l>>4]+o+s}t=n.join("")}i=i.h=t}return i}return i instanceof zs?i=i.size!==0?i.fa(yT):void 0:void 0}return i}function Dv(i){return pd(i=i.B,0|i[Dt],Yl)}function Vr(i,t){return Nv(i,t[0],t[1])}function Nv(i,t,e,n=0){if(i==null){var s=32;e?(i=[e],s|=128):i=[],t&&(s=-16760833&s|(1023&t)<<14)}else{if(!Array.isArray(i))throw Error("narr");if(s=0|i[Dt],wp&&1&s)throw Error("rfarr");if(2048&s&&!(2&s)&&(function(){if(wp)throw Error("carr");io(QE,5)})(),256&s)throw Error("farr");if(64&s)return(s|n)!==s&&li(i,s|n),i;if(e&&(s|=128,e!==i[0]))throw Error("mid");t:{s|=64;var r=(e=i).length;if(r){var a=r-1;let l=e[a];if(l!=null&&typeof l=="object"&&l.constructor===Object){if((a-=t=128&s?0:-1)>=1024)throw Error("pvtlmt");for(var o in l)(r=+o)<a&&(e[r+t]=l[o],delete l[o]);s=-16760833&s|(1023&a)<<14;break t}}if(t){if((o=Math.max(t,r-(128&s?0:-1)))>1024)throw Error("spvt");s=-16760833&s|(1023&o)<<14}}}return li(i,64|s|n),i}function ST(i,t){if(typeof i!="object")return i;if(Array.isArray(i)){var e=0|i[Dt];return i.length===0&&1&e?void 0:i1(i,e,t)}if(no(i))return n1(i);if(i instanceof zs){if(2&(t=i.N))return i;if(!i.size)return;if(e=po(i.fa()),i.O)for(i=0;i<e.length;i++){let n=e[i],s=n[1];s=s==null||typeof s!="object"?void 0:no(s)?n1(s):Array.isArray(s)?i1(s,0|s[Dt],!!(32&t)):void 0,n[1]=s}return e}return i instanceof ss?i:void 0}function i1(i,t,e){return 2&t||(!e||4096&t||16&t?i=_o(i,t,!1,e&&!(16&t)):(jl(i,34),4&t&&Object.freeze(i))),i}function dm(i,t,e){return i=new i.constructor(t),e&&(i.i=$r),i.o=$r,i}function n1(i){var t=i.B,e=0|t[Dt];return Vi(i,e)?i:pm(i,t,e)?dm(i,t):_o(t,e)}function _o(i,t,e,n){return n??(n=!!(34&t)),i=pd(i,t,ST,n),n=32,e&&(n|=2),li(i,t=16769217&t|n),i}function fm(i){var t=i.B,e=0|t[Dt];return Vi(i,e)?pm(i,t,e)?dm(i,t,!0):new i.constructor(_o(t,e,!1)):i}function vo(i){if(i.i!==$r)return!1;var t=i.B;return jl(t=_o(t,0|t[Dt]),2048),i.B=t,i.i=void 0,i.o=void 0,!0}function Jr(i){if(!vo(i)&&Vi(i,0|i.B[Dt]))throw Error()}function gr(i,t){t===void 0&&(t=0|i[Dt]),32&t&&!(4096&t)&&li(i,4096|t)}function pm(i,t,e){return!!(2&e)||!(!(32&e)||4096&e)&&(li(t,2|e),i.i=$r,!0)}var Fv=mi(0),hr={};function We(i,t,e,n){if((t=as(i.B,t,void 0,n))!==null||e&&i.o!==$r)return t}function as(i,t,e,n){if(t===-1)return null;var s=t+(e?0:-1),r=i.length-1;if(!(r<1+(e?0:-1))){if(s>=r){var a=i[r];if(a!=null&&typeof a=="object"&&a.constructor===Object){e=a[t];var o=!0}else{if(s!==r)return;e=a}}else e=i[s];if(n&&e!=null){if((n=n(e))==null)return n;if(!Object.is(n,e))return o?a[t]=n:i[s]=n,n}return e}}function ne(i,t,e,n){Jr(i);var s=i.B;return oi(s,0|s[Dt],t,e,n),i}function oi(i,t,e,n,s){var r=e+(s?0:-1),a=i.length-1;if(a>=1+(s?0:-1)&&r>=a){let o=i[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[e]=n,t}return r<=a?(i[r]=n,t):(n!==void 0&&(e>=(a=(t??(t=0|i[Dt]))>>14&1023||536870912)?n!=null&&(i[a+(s?0:-1)]={[e]:n}):i[r]=n),t)}function Uv(i,t){return no(i=as(i.B,t))||Array.isArray(i)}function Ov(i,t,e){return Uv(i,t=Gv(i,e)===t?t:-1)}function zr(i,t,e,n,s){var r=i.B,a=0|r[Dt];n=n&&n!==4?n!==1&&(i?Vi(i,a):2&a)?1:n:4,s=!!s||n===3,n===2&&vo(i)&&(a=0|(r=i.B)[Dt]);var o=(i=mm(r,t))===mr?7:0|i[Dt],l=rm(o,a),c=!(4&l);if(c){let h=0,f=0;for(;h<i.length;h++){let u=e(i[h]);u!=null&&(i[f++]=u)}f<h&&(i.length=f),e=-513&l|4,l=e&=-1025,l&=-4097}return l!==o&&(li(i,l),2&l&&Object.freeze(i)),Bv(i,l,r,a,t,n,c,s)}function Bv(i,t,e,n,s,r,a,o){var l=t,c=ro(t);return c&&r===2&&(i=Bn(i),l=0,t=Wr(t,n),n=oi(e,n,s,i),c=!1),c||(r===1||r===4&&(2&t||!(16&t)&&32&n)?((t|=!i.length||a&&!(4096&t)||32&n&&!(4096&t||16&t)?2:256)!==l&&li(i,t),Object.freeze(i)):(o||(t|=16),t!==l&&li(i,t))),2&t||!(4096&t||16&t)||gr(e,n),i}function mm(i,t,e){return i=as(i,t,e),Array.isArray(i)?i:mr}function ro(i){return!!(2&i)&&!!(4&i)||!!(256&i)}function kv(i){return hd(i,!0)}function zv(i){i=Bn(i);for(let t=0;t<i.length;t++){let e=i[t]=Bn(i[t]);Array.isArray(e[1])&&(e[1]=po(e[1]))}return $l(i)}function ec(i,t,e,n){Jr(i),oi(i=i.B,0|i[Dt],t,(n==="0"?Number(e)===0:e===n)?void 0:e)}function _r(i,t,e){if(2&t)throw Error();var n=mo(t),s=mm(i,e,n),r=s===mr?7:0|s[Dt],a=rm(r,t);return(2&a||ro(a)||16&a)&&(a===r||ro(a)||li(s,a),s=Bn(s),r=0,a=Wr(a,t),oi(i,t,e,s,n)),(a&=-13)!==r&&li(s,a),s}function Gv(i,t){return _m(gm(i=i.B),i,void 0,t)}function gm(i){if(fo)return i[Bl]??(i[Bl]=new Map);if(Bl in i)return i[Bl];var t=new Map;return Object.defineProperty(i,Bl,{value:t}),t}function Hv(i,t,e,n,s){var r=gm(i),a=_m(r,i,t,e,s);return a!==n&&(a&&(t=oi(i,t,a,void 0,s)),r.set(e,n)),t}function _m(i,t,e,n,s){var r=i.get(n);if(r!=null)return r;r=0;for(let a=0;a<n.length;a++){let o=n[a];as(t,o,s)!=null&&(r!==0&&(e=oi(t,e,r,void 0,s)),r=o)}return i.set(n,r),r}function vm(i,t,e){var n=0|i[Dt],s=mo(n),r=as(i,e,s);if(no(r)){if(!Vi(r))return vo(r),r.B;var a=r.B}else Array.isArray(r)&&(a=r,2&n&&po(a));if(a){let o=0|a[Dt];2&o&&(a=_o(a,o))}return(a=Vr(a,t))!==r&&oi(i,n,e,a,s),a}function MT(i,t,e,n,s){var r=!1;if(n=(function(a,o,l,c){return as(a,o,l,c)})(i,n,s,a=>{var o=um(a,e,!1,t);return r=o!==a&&o!=null,o}),n!=null)return r&&!Vi(n)&&gr(i,t),n}function Ae(i,t,e,n){var s=i.B,r=0|s[Dt];if((t=MT(s,r,t,e,n))==null)return t;if(!Vi(i,r=0|s[Dt])){let a=fm(t);a!==t&&(vo(i)&&(r=0|(s=i.B)[Dt]),gr(s,r=oi(s,r,e,t=a,n)))}return t}function Vv(i,t,e,n,s,r,a,o){r=r&&r!==4?r!==1&&(i?Vi(i,e):2&e)?1:r:4,a=!!a||r===3;var l=!!o&&!(i?Vi(i,e):2&e);(r===2||l)&&i&&vo(i)&&(e=0|(t=i.B)[Dt]);var c=(i=mm(t,s))===mr?7:0|i[Dt],h=rm(c,e);if(o=!(4&h)){var f=i,u=e;let d=!!(2&h);d&&(u|=2);let p=!d,v=!0,m=0,g=0;for(;m<f.length;m++){let b=um(f[m],n,!1,u);if(b instanceof n){if(!d){let E=Vi(b);p&&(p=!E),v&&(v=E)}f[g++]=b}}g<m&&(f.length=g),h|=4,h=v?-4097&h:4096|h,h=p?8|h:-9&h}if(h!==c&&(li(i,h),2&h&&Object.freeze(i)),l&&!(8&h||!i.length&&(r===1||r===4&&(2&h||!(16&h)&&32&e)))){for(ro(h)&&(i=Bn(i),h=Wr(h,e),e=oi(t,e,s,i)),n=i,l=h,c=0;c<n.length;c++)(f=n[c])!==(h=fm(f))&&(n[c]=h);l|=8,li(i,h=l=n.length?4096|l:-4097&l)}return Bv(i,h,t,e,s,r,o,a)}function jr(i,t,e){var n=i.B;return Vv(i,n,0|n[Dt],t,e,void 0,!1,!0)}function Wv(i){return i==null&&(i=void 0),i}function kt(i,t,e,n,s){return ne(i,e,n=Wv(n),s),n&&!Vi(n)&&gr(i.B),i}function On(i,t,e,n){t:{var s=n=Wv(n);Jr(i);let r=i.B,a=0|r[Dt];if(s==null){let o=gm(r);if(_m(o,r,a,e)!==t)break t;o.set(e,0)}else a=Hv(r,a,e,t);oi(r,a,t,s)}return n&&!Vi(n)&&gr(i.B),i}function Dp(i,t,e){Jr(i);var n=i.B,s=0|n[Dt];if(e==null)oi(n,s,t);else{var r=e===mr?7:0|e[Dt],a=r,o=ro(r),l=o||Object.isFrozen(e),c=!0,h=!0;for(let u=0;u<e.length;u++){var f=e[u];o||(f=Vi(f),c&&(c=!f),h&&(h=f))}o||(r=c?13:5,r=h?-4097&r:4096|r),l&&r===a||(e=Bn(e),a=0,r=Wr(r,s)),r!==a&&li(e,r),s=oi(n,s,t,e),2&r||!(4096&r||16&r)||gr(n,s)}return i}function Wr(i,t){return-273&(2&t?2|i:-3&i)}function Kl(i,t,e,n){Jr(i);var s=i.B;i=Vv(i,s,0|s[Dt],e,t,2,!0),n=n??new e,i.push(n),t=e=i===mr?7:0|i[Dt],(n=Vi(n))?(e&=-9,i.length===1&&(e&=-4097)):e|=4096,e!==t&&li(i,e),n||gr(s)}function bn(i,t,e){return Zr(We(i,t,e))}function Hi(i,t){return We(i,t,void 0,hn)??0}function Np(i,t,e,n){return Ae(i,t,e=Gv(i,n)===e?e:-1,void 0)}function Fp(i,t){ec(i,3,t==null?t:qu(t),!1)}function os(i,t,e){if(e!=null){if(typeof e!="number"||!tc(e))throw ql("int32");e|=0}ne(i,t,e)}function vp(i,t,e){return ne(i,t,e==null?e:Av(e))}function Fu(i,t,e){return ne(i,t,e==null?e:(function(n){if(!go(n))throw ql("uint64");switch(typeof n){case"string":var s=fr(Number(n));return kn(s)&&s>=0?n=mi(s):((s=n.indexOf("."))!==-1&&(n=n.substring(0,s)),n=Yr()?mi(Pp(64,BigInt(n))):mi(Cv(n))),n;case"bigint":return mi(Pp(64,n));default:return n>=0&&kn(n)||((n=fr(n))>=0&&kn(n)?n=String(n):(Kr(n),n=so(Se,De))),mi(n)}})(e))}function Wt(i,t,e){ne(i,t,e==null?e:Tv(e))}function Za(i,t,e){ec(i,t,e==null?e:Tv(e),0)}function un(i,t,e){ec(i,t,Us(e),"")}function Zu(i,t,e){{Jr(i);let a=i.B,o=0|a[Dt];if(e==null)oi(a,o,t);else{var n=i=e===mr?7:0|e[Dt],s=ro(i),r=s||Object.isFrozen(e);for(s||(i=0),r||(e=Bn(e),n=0,i=Wr(i,o),r=!1),i|=5,i|=(4&i?512&i?512:1024&i?1024:0:void 0)??1024,s=0;s<e.length;s++){let l=e[s],c=Lv(l);Object.is(l,c)||(r&&(e=Bn(e),n=0,i=Wr(i,o),r=!1),e[s]=c)}i!==n&&(r&&(e=Bn(e),i=Wr(i,o)),li(e,i)),oi(a,o,t,e)}}}function md(i,t,e){Jr(i),zr(i,t,Ii,2,!0).push(Lv(e))}var Ya=class{constructor(i,t,e){if(this.buffer=i,e&&!t)throw Error();this.h=t}};function gd(i,t){if(typeof i=="string")return new Ya(pv(i),t);if(Array.isArray(i))return new Ya(new Uint8Array(i),t);if(i.constructor===Uint8Array)return new Ya(i,!1);if(i.constructor===ArrayBuffer)return i=new Uint8Array(i),new Ya(i,!1);if(i.constructor===ss)return t=sm(i)||new Uint8Array(0),new Ya(t,!0,i);if(i instanceof Uint8Array)return i=i.constructor===Uint8Array?i:new Uint8Array(i.buffer,i.byteOffset,i.byteLength),new Ya(i,!1);throw Error()}function xm(i,t){var e=0,n=0,s=0,r=i.i,a=i.h;do{var o=r[a++];e|=(127&o)<<s,s+=7}while(s<32&&128&o);if(s>32)for(n|=(127&o)>>4,s=3;s<32&&128&o;s+=7)n|=(127&(o=r[a++]))<<s;if(Xr(i,a),!(128&o))return t(e>>>0,n>>>0);throw Error()}function ym(i){for(var t=0,e=i.h,n=e+10,s=i.i;e<n;){let r=s[e++];if(t|=r,!(128&r))return Xr(i,e),!!(127&t)}throw Error()}function Gs(i){var t=i.i,e=i.h,n=t[e++],s=127&n;if(128&n&&(s|=(127&(n=t[e++]))<<7,128&n&&(s|=(127&(n=t[e++]))<<14,128&n&&(s|=(127&(n=t[e++]))<<21,128&n&&(s|=(n=t[e++])<<28,128&n&&128&t[e++]&&128&t[e++]&&128&t[e++]&&128&t[e++]&&128&t[e++])))))throw Error();return Xr(i,e),s}function ls(i){return Gs(i)>>>0}function Ju(i){return xm(i,Ev)}function Up(i){var t=i.i,e=i.h,n=t[e],s=t[e+1],r=t[e+2];return t=t[e+3],Xr(i,i.h+4),(n|s<<8|r<<16|t<<24)>>>0}function ju(i){var t=Up(i);i=2*(t>>31)+1;var e=t>>>23&255;return t&=8388607,e==255?t?NaN:i*(1/0):e==0?1401298464324817e-60*i*t:i*Math.pow(2,e-150)*(t+8388608)}function bT(i){return Gs(i)}function Xr(i,t){if(i.h=t,t>i.l)throw Error()}function Xv(i,t){if(t<0)throw Error();var e=i.h;if((t=e+t)>i.l)throw Error();return i.h=t,e}function qv(i,t){if(t==0)return qr();var e=Xv(i,t);return i.ga&&i.u?e=i.i.subarray(e,e+t):(i=i.i,e=e===(t=e+t)?new Uint8Array(0):aT?i.slice(e,t):new Uint8Array(i.subarray(e,t))),e.length==0?qr():new ss(e,eo)}var ET=class{constructor(i,t,e,n){this.i=null,this.u=!1,this.h=this.l=this.o=0,this.init(i,t,e,n)}init(i,t,e,{ga:n=!1,ma:s=!1}={}){this.ga=n,this.ma=s,i&&(i=gd(i,this.ma),this.i=i.buffer,this.u=i.h,this.o=t||0,this.l=e!==void 0?this.o+e:this.i.length,this.h=this.o)}clear(){this.i=null,this.u=!1,this.h=this.l=this.o=0,this.ga=!1}},s1=[],ao=0;function $v(i,t,e,n){if(Qu.length){let s=Qu.pop();return s.A(n),s.h.init(i,t,e,n),s}return new TT(i,t,e,n)}function Yv(i){i.h.clear(),i.l=-1,i.i=-1,Qu.length<100&&Qu.push(i)}function Kv(i){var t=i.h;if(t.h==t.l)return!1;i.o=i.h.h;var e=ls(i.h);if(t=e>>>3,!((e&=7)>=0&&e<=5)||t<1)throw Error();return i.l=t,i.i=e,!0}function Uu(i){try{switch(i.i){case 0:i.i!=0?Uu(i):ym(i.h);break;case 1:var t=i.h;Xr(t,t.h+8);break;case 2:if(i.i!=2)Uu(i);else{var e=ls(i.h),n=i.h;Xr(n,n.h+e)}break;case 5:var s=i.h;Xr(s,s.h+4);break;case 3:Zv();let r=i.l;try{for(;;){if(!Kv(i))throw Error();if(i.i==4){if(i.l!=r)throw Error();break}Uu(i)}}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{ao>0&&ao--}break;default:throw Error()}}catch(r){throw r instanceof RangeError?new SyntaxError:r}}function Zv(){if(ao>=100)throw new SyntaxError;ao++}function ic(i,t,e){var n=i.h.l,s=ls(i.h),r=(s=i.h.h+s)-n;if(r<=0&&(i.h.l=s,e(t,i,void 0,void 0,void 0),r=s-i.h.h),r)throw Error();return i.h.h=s,i.h.l=n,t}function Sm(i){var t=ls(i.h),e=Xv(i=i.h,t);if(i=i.i,WE){var n,s=i;(n=mp)||(n=mp=new TextDecoder("utf-8",{fatal:!0})),t=e+t,s=e===0&&t===s.length?s:s.subarray(e,t);try{var r=n.decode(s)}catch(o){if(Cu===void 0){try{n.decode(new Uint8Array([128]))}catch{}try{n.decode(new Uint8Array([97])),Cu=!0}catch{Cu=!1}}throw!Cu&&(mp=void 0),o}}else{t=(r=e)+t,e=[];let o,l=null;for(;r<t;){var a=i[r++];a<128?e.push(a):a<224?r>=t?Or():(o=i[r++],a<194||(192&o)!=128?(r--,Or()):e.push((31&a)<<6|63&o)):a<240?r>=t-1?Or():(o=i[r++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(n=i[r++]))!=128?(r--,Or()):e.push((15&a)<<12|(63&o)<<6|63&n)):a<=244?r>=t-2?Or():(o=i[r++],(192&o)!=128||o-144+(a<<28)>>30||(192&(n=i[r++]))!=128||(192&(s=i[r++]))!=128?(r--,Or()):(a=(7&a)<<18|(63&o)<<12|(63&n)<<6|63&s,a-=65536,e.push(55296+(a>>10&1023),56320+(1023&a)))):Or(),e.length>=8192&&(l=k_(l,e),e.length=0)}r=k_(l,e)}return r}function Mm(i){var t=ls(i.h);return qv(i.h,t)}function nc(i,t,e){var n=ls(i.h);for(n=i.h.h+n;i.h.h<n;)e.push(t(i.h))}var TT=class{constructor(i,t,e,n){if(s1.length){let s=s1.pop();s.init(i,t,e,n),i=s}else i=new ET(i,t,e,n);this.h=i,this.o=this.h.h,this.i=this.l=-1,this.A(n)}A({ra:i=!1}={}){this.ra=i}},Qu=[];function wT(i){return new td(4294967295&i,Math.floor(i/4294967296))}function r1(i){return i?/^\d+$/.test(i)?(Ql(i),new td(Se,De)):null:a1||(a1=new td(0,0))}var a1,td=class{constructor(i,t){this.i=i>>>0,this.h=t>>>0}};function AT(i){return new ed(4294967295&i,Math.floor(i/4294967296))}function Jv(i){return i?/^-?\d+$/.test(i)?(Ql(i),new ed(Se,De)):null:o1||(o1=new ed(0,0))}var o1,l1,c1,h1,xp,u1,kl,Lu,ed=class{constructor(i,t){this.i=i>>>0,this.h=t>>>0}};function jv(i,t,e){return typeof BigInt64Array<"u"?(kl||(kl=new BigInt64Array(1),Lu=new Uint32Array(kl.buffer),kl[0]=BigInt(1),u1=Lu[0]===1),kl[0]=i,new t(Lu[i=u1?0:1],Lu[1-i])):(xp||(l1=BigInt(Number.MIN_SAFE_INTEGER),c1=BigInt(Number.MAX_SAFE_INTEGER),h1=BigInt(4294967295),xp=BigInt(32)),i>=l1&&i<=c1?e(Number(i)):(i=BigInt.asUintN(64,i),new t(Number(i&h1),Number(i>>xp))))}function ks(i,t,e){for(;e>0||t>127;)i.h.push(127&t|128),t=(t>>>7|e<<25)>>>0,e>>>=7;i.h.push(t)}function xo(i,t){for(;t>127;)i.h.push(127&t|128),t>>>=7;i.h.push(t)}function sc(i,t){if(t>=0)xo(i,t);else{for(let e=0;e<9;e++)i.h.push(127&t|128),t>>=7;i.h.push(1)}}function RT(i,t){Ql(t),(function(e){var n=De>>31;e(Se<<1^n,(De<<1|Se>>>31)^n)})((e,n)=>{ks(i,e>>>0,n>>>0)})}function Zl(i,t){i.h.push(t>>>0&255),i.h.push(t>>>8&255),i.h.push(t>>>16&255),i.h.push(t>>>24&255)}var CT=class{constructor(){this.h=[]}length(){return this.h.length}end(){var i=this.h;return this.h=[],i}};function oo(i,t){t.length!==0&&(i.l.push(t),i.i+=t.length)}function Xi(i,t,e){xo(i.h,8*t+e)}function bm(i,t){return Xi(i,t,2),t=i.h.end(),oo(i,t),t.push(i.i),t}function Em(i,t){var e=t.pop();for(e=i.i+i.h.length()-e;e>127;)t.push(127&e|128),e>>>=7,i.i++;t.push(e),i.i++}function Qv(i,t,e){if(e!=null)switch(Xi(i,t,0),typeof e){case"number":i=i.h,Kr(e),ks(i,Se,De);break;case"bigint":e=jv(e,ed,AT),ks(i.h,e.i,e.h);break;default:e=Jv(e),ks(i.h,e.i,e.h)}}function rc(i,t,e){Xi(i,t,2),xo(i.h,e.length),oo(i,i.h.end()),oo(i,e)}function id(i,t,e,n){e!=null&&(t=bm(i,t),n(e,i),Em(i,t))}var PT=class{constructor(){this.l=[],this.i=0,this.h=new CT}};function tx(i){typeof i=="string"&&Jv(i)}function En(){var i=class{constructor(){throw Error()}};return Object.setPrototypeOf(i,i.prototype),i}var Tm=En(),ex=En(),wm=En(),_d=En(),Am=En(),vd=En(),IT=En(),LT=En(),xd=En(),DT=En(),yd=En(),Rm=En();function cs(i,t,e){var n=i.B;rs&&rs in n&&(n=n[rs])&&delete n[t.h],t.i?t.u(i,t.i,t.h,e,t.l):t.u(i,t.h,e,t.l)}var bt=class{constructor(i,t){this.B=Nv(i,t,void 0,2048)}toJSON(){return Dv(this)}u(){var i=bw,t=this.B,e=i.h,n=rs;return fo&&n&&t[n]?.[e]!=null&&io(JE,3),i.i?i.o(this,i.i,i.h,i.l):i.o(this,i.h,i.defaultValue,i.l)}clone(){var i=this.B,t=0|i[Dt];return pm(this,i,t)?dm(this,i,!0):new this.constructor(_o(i,t,!1))}};bt.prototype[_v]=yv,bt.prototype.toString=function(){return this.B.toString()};var yo=class{constructor(i,t,e){this.h=i,this.i=t,i=Tm,this.l=!!i&&e===i||!1}};function Sd(i,t){return new yo(i,t,Tm)}function ix(i,t,e,n,s){id(i,e,sx(t,n),s)}var Op,Bp,NT=Sd(function(i,t,e,n,s){return i.i===2&&(ic(i,vm(t,n,e),s),!0)},ix),FT=Sd(function(i,t,e,n,s){return i.i===2&&(ic(i,vm(t,n,e),s),!0)},ix),Md=Symbol(),bd=Symbol(),kp=Symbol(),d1=Symbol(),f1=Symbol();function Qr(i,t,e,n){var s=n[i];if(s)return s;(s={}).Ea=n,s.da=(function(f){switch(typeof f){case"boolean":return t1||(t1=[0,void 0,!0]);case"number":return f>0?void 0:f===0?e1||(e1=[0,void 0]):[-f,void 0];case"string":return[0,f];case"object":return f}})(n[0]);var r=n[1],a=1;r&&r.constructor===Object&&(s.ja=r,typeof(r=n[++a])=="function"&&r.length>0&&(s.wa=!0,Op??(Op=r),Bp??(Bp=n[a+1]),r=n[a+=2]));for(var o={};r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var l=0;l<r.length;l++)o[r[l]]=r;r=n[++a]}for(l=1;r!==void 0;){let f;typeof r=="number"&&(l+=r,r=n[++a]);var c=void 0;if(r instanceof yo?f=r:(f=NT,a--),f?.l){r=n[++a],c=n;var h=a;typeof r=="function"&&(r=r(),c[h]=r),c=r}for(h=l+1,typeof(r=n[++a])=="number"&&r<0&&(h-=r,r=n[++a]);l<h;l++){let u=o[l];c?e(s,l,f,c,u):t(s,l,f,u)}}return n[i]=s}function nx(i){return Array.isArray(i)?i[0]instanceof yo?i:[FT,i]:[i,void 0]}function sx(i,t){return i instanceof bt?i.B:Array.isArray(i)?Vr(i,t):void 0}function Cm(i,t,e,n){var s=e.h;i[t]=n?(r,a,o)=>s(r,a,o,n):s}function Pm(i,t,e,n,s){var r,a,o=e.h;i[t]=(l,c,h)=>o(l,c,h,a||(a=Qr(bd,Cm,Pm,n).da),r||(r=Im(n)),s)}function Im(i){var t=i[kp];if(t!=null)return t;var e=Qr(bd,Cm,Pm,i);return t=e.wa?(n,s)=>Op(n,s,e):(n,s)=>{t:{Zv();try{for(;Kv(s)&&s.i!=4;){let u=s.l,d=e[u];if(d==null){let p=e.ja;if(p){let v=p[u];if(v){let m=OT(v);m!=null&&(d=e[u]=m)}}}if(d==null||!d(s,n,u)){var r=s;let p=r.o;if(Uu(r),r.ra)var a=void 0;else{let v=r.h.h-p;r.h.h=p,a=qv(r.h,v)}r=void 0;var o=n,l=u,c=a;c&&((r=o[rs]??(o[rs]=new Lp))[l]??(r[l]=[])).push(c)}}let f=fd(n);f&&(f.h=e.Ea[f1]);var h=!0;break t}catch(f){throw f instanceof RangeError?new SyntaxError:f}finally{ao>0&&ao--}h=void 0}return h},i[kp]=t,i[f1]=UT.bind(i),t}function UT(i,t,e,n){var s=this[bd],r=this[kp],a=Vr(void 0,s.da),o=fd(i);if(o){var l=!1,c=s.ja;if(c){if(s=(h,f,u)=>{if(u.length!==0)if(c[f])for(let d of u){h=$v(d);try{l=!0,r(a,h)}finally{Yv(h)}}else n?.(i,f,u)},t==null)Ku(o,s);else if(o!=null){let h=o[t];h&&s(o,t,h)}if(l){let h=0|i[Dt];if(2&h&&2048&h&&!e?.lb)throw Error();let f=mo(h),u=(d,p)=>{if(as(i,d,f)!=null){if(e?.kb===1)return;throw Error()}p!=null&&(h=oi(i,h,d,p,f)),delete o[d]};t==null?Sv(a,0|a[Dt],(d,p)=>{u(d,p)}):u(t,as(a,t,f))}}}}function OT(i){var t=(i=nx(i))[0].h;if(i=i[1]){let e=Im(i),n=Qr(bd,Cm,Pm,i).da;return(s,r,a)=>t(s,r,a,n,e)}return t}function Ed(i,t,e){i[t]=e.i}function Td(i,t,e,n){var s,r,a=e.i;i[t]=(o,l,c)=>a(o,l,c,r||(r=Qr(Md,Ed,Td,n).da),s||(s=rx(n)))}function rx(i){var t=i[d1];if(!t){let e=Qr(Md,Ed,Td,i);t=(n,s)=>ax(n,s,e),i[d1]=t}return t}function ax(i,t,e){Sv(i,0|i[Dt],(n,s)=>{if(s!=null){var r=(function(a,o){var l=a[o];if(l)return l;if((l=a.ja)&&(l=l[o])){var c=(l=nx(l))[0].i;if(l=l[1]){let h=rx(l),f=Qr(Md,Ed,Td,l).da;l=a.wa?Bp(f,h):(u,d,p)=>c(u,d,p,f,h)}else l=c;return a[o]=l}})(e,n);r?r(t,s,n):n<500||io(Ap,3)}}),(i=fd(i))&&Ku(i,(n,s,r)=>{for(oo(t,t.h.end()),n=0;n<r.length;n++)oo(t,sm(r[n])||new Uint8Array(0))})}var BT=mi(0);function Vs(i,t,e){if(Array.isArray(t)){var n=0|t[Dt];if(4&n)return t;for(var s=0,r=0;s<t.length;s++){let a=i(t[s]);a!=null&&(t[r++]=a)}return r<s&&(t.length=r),i=1|n,e&&(i=-1537&i|4),i!==n&&li(t,i),e&&2&i&&Object.freeze(t),t}}var ox=(i,t)=>{var e=new PT;ax(i.B,e,Qr(Md,Ed,Td,t)),oo(e,e.h.end()),i=new Uint8Array(e.i);var n=(t=e.l).length,s=0;for(let r=0;r<n;r++){let a=t[r];i.set(a,s),s+=a.length}return e.l=[i],i};function ii(i,t,e){return new yo(i,t,e)}function Ws(i,t,e){return new yo(i,t,e)}function _i(i,t,e){oi(i,0|i[Dt],t,e,mo(0|i[Dt]))}var kT=Sd(function(i,t,e,n,s){if(i.i!==2)return!1;if(i=Bn(i=ic(i,Vr([void 0,void 0],n),s)),s=mo(n=0|t[Dt]),2&n)throw Error();var r=as(t,e,s);if(r instanceof zs)2&r.N?((r=r.fa()).push(i),oi(t,n,e,r,s)):r.fb(i);else if(Array.isArray(r)){var a=0|r[Dt];8192&a||li(r,a|=8192),2&a&&oi(t,n,e,r=zv(r),s),r.push(i)}else oi(t,n,e,$l([i]),s);return!0},function(i,t,e,n,s){if(t instanceof zs)t.forEach((r,a)=>{id(i,e,Vr([a,r],n),s)});else if(Array.isArray(t)){for(let r=0;r<t.length;r++){let a=t[r];Array.isArray(a)&&id(i,e,Vr(a,n),s)}$l(t)}});function lx(i,t,e){(t=hn(t))!=null&&(Xi(i,e,5),i=i.h,am(t),Zl(i,Se))}function Lm(i,t,e){(t=hm(t))!=null&&(tx(t),Qv(i,e,t))}function cx(i,t,e){(t=Zr(t))!=null&&t!=null&&(Xi(i,e,0),sc(i.h,t))}function hx(i,t,e){(t=t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0)!=null&&(Xi(i,e,0),i.h.h.push(t?1:0))}function ux(i,t,e){(t=Ii(t))!=null&&rc(i,e,hv(t))}function dx(i,t,e,n,s){id(i,e,sx(t,n),s)}function Dm(i,t,e){(t=Iv(t))!=null&&rc(i,e,gd(t,!0).buffer)}function fx(i,t,e){(t=wv(t))!=null&&t!=null&&(Xi(i,e,0),xo(i.h,t))}function px(i,t,e){(t=Zr(t))!=null&&(t=parseInt(t,10),Xi(i,e,0),sc(i.h,t))}function mx(i,t,e){return(i.i===5||i.i===2)&&(t=_r(t,0|t[Dt],e),i.i==2?nc(i,ju,t):t.push(ju(i.h)),!0)}function gx(i,t,e){return i.i===0&&(_i(t,e,Ju(i.h)),!0)}function _x(i,t,e){return(i.i===0||i.i===2)&&(t=_r(t,0|t[Dt],e),i.i==2?nc(i,Gs,t):t.push(Gs(i.h)),!0)}function vx(i,t,e){return i.i===2&&(_i(t,e,(i=Mm(i))===qr()?void 0:i),!0)}var p1=ii(function(i,t,e){if(i.i!==1)return!1;var n=i.h;i=Up(n);var s=Up(n);n=2*(s>>31)+1;var r=s>>>20&2047;return i=4294967296*(1048575&s)+i,_i(t,e,r==2047?i?NaN:n*(1/0):r==0?5e-324*n*i:n*Math.pow(2,r-1075)*(i+4503599627370496)),!0},function(i,t,e){(t=hn(t))!=null&&(Xi(i,e,1),i=i.h,(e=Xu||(Xu=new DataView(new ArrayBuffer(8)))).setFloat64(0,+t,!0),Se=e.getUint32(0,!0),De=e.getUint32(4,!0),Zl(i,Se),Zl(i,De))},DT),ti=ii(function(i,t,e){return i.i===5&&(_i(t,e,ju(i.h)),!0)},lx,xd),zT=Ws(mx,function(i,t,e){if((t=Vs(hn,t,!0))!=null)for(let a=0;a<t.length;a++){var n=i,s=e,r=t[a];r!=null&&(Xi(n,s,5),n=n.h,am(r),Zl(n,Se))}},xd),Nm=Ws(mx,function(i,t,e){if((t=Vs(hn,t,!0))!=null&&t.length){Xi(i,e,2),xo(i.h,4*t.length);for(let n=0;n<t.length;n++)e=i.h,am(t[n]),Zl(e,Se)}},xd),xx=ii(function(i,t,e){return i.i===5&&(_i(t,e,(i=ju(i.h))===0?void 0:i),!0)},lx,xd),zl=ii(function(i,t,e){return gx(i,t,e)},Lm,vd),Ge=ii(function(i,t,e){return gx(i,t,e)},Lm,vd),GT=Ws(function(i,t,e){return i.i!==0&&i.i!==2?i=!1:(t=_r(t,0|t[Dt],e),i.i==2?nc(i,Ju,t):t.push(Ju(i.h)),i=!0),i},function(i,t,e){if((t=Vs(hm,t,!1))!=null)for(let n=0;n<t.length;n++)Qv(i,e,t[n])},vd),Ou=ii(function(i,t,e){return i.i!==0?t=!1:(_i(t,e,(i=Ju(i.h))===BT?void 0:i),t=!0),t},Lm,vd),nd=ii(function(i,t,e){return i.i!==0?i=!1:(_i(t,e,xm(i.h,oT)),i=!0),i},function(i,t,e){if((t=hT(t))!=null&&(typeof t=="string"&&r1(t),t!=null))switch(Xi(i,e,0),typeof t){case"number":i=i.h,Kr(t),ks(i,Se,De);break;case"bigint":e=jv(t,td,wT),ks(i.h,e.i,e.h);break;default:e=r1(t),ks(i.h,e.i,e.h)}},IT),ce=ii(function(i,t,e){return i.i===0&&(_i(t,e,Gs(i.h)),!0)},cx,_d),m1=Ws(_x,function(i,t,e){if((t=Vs(Zr,t,!0))!=null)for(let a=0;a<t.length;a++){var n=i,s=e,r=t[a];r!=null&&(Xi(n,s,0),sc(n.h,r))}},_d),So=Ws(_x,function(i,t,e){if((t=Vs(Zr,t,!0))!=null&&t.length){e=bm(i,e);for(let n=0;n<t.length;n++)sc(i.h,t[n]);Em(i,e)}},_d),Gr=ii(function(i,t,e){return i.i===0&&(_i(t,e,(i=Gs(i.h))===0?void 0:i),!0)},cx,_d),Kt=ii(function(i,t,e){return i.i===0&&(_i(t,e,ym(i.h)),!0)},hx,ex),dr=ii(function(i,t,e){return i.i===0&&(_i(t,e,(i=ym(i.h))===!1?void 0:i),!0)},hx,ex),pi=Ws(function(i,t,e){return i.i===2&&(i=Sm(i),_r(t,0|t[Dt],e).push(i),!0)},function(i,t,e){if((t=Vs(Ii,t,!0))!=null)for(let a=0;a<t.length;a++){var n=i,s=e,r=t[a];r!=null&&rc(n,s,hv(r))}},wm),Ns=ii(function(i,t,e){return i.i===2&&(_i(t,e,(i=Sm(i))===""?void 0:i),!0)},ux,wm),lt=ii(function(i,t,e){return i.i===2&&(_i(t,e,Sm(i)),!0)},ux,wm),ke=(function(i,t,e=Tm){return new yo(i,t,e)})(function(i,t,e,n,s){return i.i===2&&(n=Vr(void 0,n),_r(t,0|t[Dt],e).push(n),ic(i,n,s),!0)},function(i,t,e,n,s){if(Array.isArray(t)){for(let r=0;r<t.length;r++)dx(i,t[r],e,n,s);1&(i=0|t[Dt])||li(t,1|i)}}),ve=Sd(function(i,t,e,n,s,r){if(i.i!==2)return!1;var a=0|t[Dt];return Hv(t,a,r,e,mo(a)),ic(i,t=vm(t,n,e),s),!0},dx),Ja=ii(function(i,t,e){return i.i===2&&(_i(t,e,Mm(i)),!0)},Dm,yd),yx=Ws(function(i,t,e){return i.i===2&&(i=Mm(i),_r(t,0|t[Dt],e).push(i),!0)},function(i,t,e){if((t=Vs(Iv,t,!1))!=null)for(let a=0;a<t.length;a++){var n=i,s=e,r=t[a];r!=null&&rc(n,s,gd(r,!0).buffer)}},yd),Sx=ii(function(i,t,e){return i.i===0&&(_i(t,e,ls(i.h)),!0)},fx,Am),HT=Ws(function(i,t,e){return(i.i===0||i.i===2)&&(t=_r(t,0|t[Dt],e),i.i==2?nc(i,ls,t):t.push(ls(i.h)),!0)},function(i,t,e){if((t=Vs(wv,t,!0))!=null)for(let a=0;a<t.length;a++){var n=i,s=e,r=t[a];r!=null&&(Xi(n,s,0),xo(n.h,r))}},Am),VT=ii(function(i,t,e){return i.i===0&&(_i(t,e,(i=ls(i.h))===0?void 0:i),!0)},fx,Am),Lt=ii(function(i,t,e){return i.i===0&&(_i(t,e,Gs(i.h)),!0)},px,Rm),Bu=ii(function(i,t,e){return i.i===0&&(_i(t,e,(i=Gs(i.h))===0?void 0:i),!0)},px,Rm),WT=ii(function(i,t,e){return i.i!==0?i=!1:(_i(t,e,(function(n){return xm(n,(s,r)=>{var a=-(1&s);return Ev(s=(s>>>1|r<<31)^a,r>>>1^a)})})(i.h)),i=!0),i},function(i,t,e){if((t=hm(t))!=null&&(tx(t),t!=null))switch(Xi(i,e,0),typeof t){case"number":i=i.h,t=(e=t)<0,Cp(e=2*Math.abs(e)),e=Se;let n=De;t&&(e==0?n==0?n=e=4294967295:(n--,e=4294967295):e--),ks(i,Se=e,De=n);break;case"bigint":i=i.h,t=t<<BigInt(1)^t>>BigInt(63),Se=Number(BigInt.asUintN(32,t)),De=Number(BigInt.asUintN(32,t>>BigInt(32))),ks(i,Se,De);break;default:RT(i.h,t)}},LT),zp=class{constructor(t,e){var n=fn;this.h=t,this.i=e,this.o=Ae,this.u=kt,this.defaultValue=void 0,this.l=n.ib!=null?Mv:void 0}register(){cd(this)}};function hs(i,t){return new zp(i,t)}function vr(i,t){return(e,n)=>{t:{let r={ma:!0};n&&Object.assign(r,n),e=$v(e,void 0,void 0,r);try{let a=new i,o=a.B;Im(t)(o,e);var s=a;break t}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{Yv(e)}s=void 0}return s}}function Fm(i){return t=>ox(t,i)}function ac(i){return function(){return ox(this,i)}}var XT=[0,Ja,yx,Kt,lt],qT=[0,Ns,[0,Bu,[0,Ou,Gr],Bu,-1,[0,Lt],Bu,-1],ii(vx,Dm,yd)],yp,g1=class extends bt{constructor(i){super(i)}},_1=[0,Ns,ii(vx,function(i,t,e){if(t!=null){if(t instanceof bt){let n=t.mb;return void(n?(t=n(t),t!=null&&rc(i,e,gd(t,!0).buffer)):io(Ap,3))}if(Array.isArray(t))return void io(Ap,3)}Dm(i,t,e)},yd)],$T=[0,1,[0,12,ce,10,Kt],[0,7,[0,ce,-1]]],v1=globalThis.trustedTypes,YT=class{constructor(i){this.h=i}toString(){return this.h+""}};function x1(i){var t;return yp===void 0&&(yp=(function(){var e=null;if(!v1)return e;try{let n=s=>s;e=v1.createPolicy("goog#html",{createHTML:n,createScript:n,createScriptURL:n})}catch{}return e})()),i=(t=yp)?t.createScriptURL(i):i,new YT(i)}function Br(i,...t){if(t.length===0)return x1(i[0]);var e=i[0];for(let n=0;n<t.length;n++)e+=encodeURIComponent(t[n])+i[n+1];return x1(e)}var Mx=[0,ce,Lt,Kt,-1,So,Lt,-1,Kt,-1],bx=[0,Lt,-1,Kt],Ex=class extends bt{constructor(i){super(i)}},Tx=[0,Kt,lt,Kt,Lt,-1,Ws(function(i,t,e){return(i.i===0||i.i===2)&&(t=_r(t,0|t[Dt],e),i.i==2?nc(i,bT,t):t.push(Gs(i.h)),!0)},function(i,t,e){if((t=Vs(Zr,t,!0))!=null&&t.length){e=bm(i,e);for(let n=0;n<t.length;n++)sc(i.h,t[n]);Em(i,e)}},Rm),lt,-1,[0,Kt,-1],Lt,Kt,-1,bx],KT=class extends bt{constructor(i){super(i)}},ZT=class extends bt{constructor(i){super(i)}},wx=class extends bt{constructor(i){super(i)}h(){return Uv(this,9)}},Ax=[0,3,Kt,-1,2,[0,[2],ce,ve,[0,Sx]],[0,Lt,Kt,Lt,Kt,Lt,4,[0,Kt,lt,-1,Kt,ce,-1,Kt],Lt,Kt,-4,Lt,pi,Kt,pi,Kt,-1,ce,Kt,-3,[0,Kt,ce],[0,lt,ce,-1],[0,Kt],[0,Kt,-1],[0,Kt,ce,-1]],[0,[3,4],lt,-1,ve,[0,ce],ve,[0,Lt,-2]],[0],lt,Kt],Rx=[0,lt,-2],y1=class extends bt{constructor(i){super(i)}},Cx=[0],JT=class extends bt{constructor(i){super(i)}},Px=[0,ce,Kt,1,Kt,-4],fn=class extends bt{constructor(i){super(i,2)}},gi={};gi[336783863]=[0,lt,Kt,-1,ce,[0,[1,2,3,4,5,6,7,8,9],ve,Cx,ve,Tx,ve,Rx,ve,Px,ve,Mx,ve,[0,lt,-2],ve,[0,lt,Lt],ve,Ax,ve,bx],[0,lt],Kt,[0,[1,3],[2,4],ve,[0,So],-1,ve,[0,pi],-1,ke,[0,lt,-1]],lt];var S1=[0,Ou,-1,dr,-3,Ou,So,Ns,Gr,Ou,-1,dr,Gr,dr,-2,Ns];function Xe(i,t){md(i,3,t)}function xe(i,t){md(i,4,t)}var tn=class extends bt{constructor(i){super(i,500)}A(i){return kt(this,0,7,i)}},Xl=[-1,{}],M1=[0,lt,1,Xl],b1=[0,lt,pi,Xl];function Tn(i,t){Kl(i,1,tn,t)}function Ze(i,t){md(i,10,t)}function Pe(i,t){md(i,15,t)}var pn=class extends bt{constructor(i){super(i,500)}A(i){return kt(this,0,1001,i)}},Ix=[-500,ke,[-500,Ns,-1,pi,-3,[-2,gi,Kt],ke,_1,Gr,-1,M1,b1,ke,[0,Ns,dr],Ns,S1,Gr,pi,987,pi],4,ke,[-500,lt,-1,[-1,{}],998,lt],ke,[-500,lt,pi,-1,[-2,{},Kt],997,pi,-1],Gr,ke,[-500,lt,pi,Xl,998,pi],pi,Gr,M1,b1,ke,[0,Ns,-1,Xl],pi,-2,S1,Ns,-1,dr,[0,dr,VT],978,Xl,ke,_1];pn.prototype.h=ac(Ix);var jT=vr(pn,Ix),QT=class extends bt{constructor(i){super(i)}},Lx=class extends bt{constructor(i){super(i)}h(){return jr(this,QT,1)}},Dx=[0,ke,[0,ce,ti,lt,-1]],wd=vr(Lx,Dx),tw=class extends bt{constructor(i){super(i)}},ew=class extends bt{constructor(i){super(i)}},Sp=class extends bt{constructor(i){super(i)}l(){return Ae(this,tw,2)}h(){return jr(this,ew,5)}},Nx=vr(class extends bt{constructor(i){super(i)}},[0,pi,So,Nm,[0,Lt,[0,ce,-3],[0,ti,-3],[0,ce,-1,[0,ke,[0,ce,-2]]],ke,[0,ti,-1,lt,ti]],lt,-1,Ge,ke,[0,ce,ti],pi,Ge]),iw=class extends bt{constructor(i){super(i)}},ja=vr(class extends bt{constructor(i){super(i)}},[0,ke,[0,ti,-4]]),nw=class extends bt{constructor(i){super(i)}},oc=vr(class extends bt{constructor(i){super(i)}},[0,ke,[0,ti,-4]]),sw=class extends bt{constructor(i){super(i)}},rw=[0,ce,-1,Nm,Lt],Fx=class extends bt{constructor(i){super(i)}};Fx.prototype.h=ac([0,ti,-4,Ge]);var aw=class extends bt{constructor(i){super(i)}},ow=vr(class extends bt{constructor(i){super(i)}},[0,ke,[0,1,ce,lt,Dx],Ge]),lw=class extends bt{constructor(i){super(i)}},cw=class extends bt{constructor(i){super(i)}h(){var i=We(this,1,void 0,kv);return i??qr()}},hw=class extends bt{constructor(i){super(i)}},ku=[1,2],uw=vr(class extends bt{constructor(i){super(i)}},[0,ke,[0,ku,ve,[0,Nm],ve,[0,Ja],ce,lt],Ge]),Um=class extends bt{constructor(i){super(i)}},Ux=[0,lt,ce,ti,pi,-1],E1=class extends bt{constructor(i){super(i)}},dw=[0,Kt,-1],sd=class extends bt{constructor(i){super(i)}h(){return Ov(this,2,Os)}l(){return Np(this,wx,6,Os)}},Os=[1,2,3,4,5,6],rd=class extends bt{constructor(i){super(i)}h(){return We(this,1,void 0,kv)!=null}l(){return Ii(We(this,2))!=null}},Je=class extends bt{constructor(i){super(i)}},Ox=[0,Ja,lt,[0,ce,Ge,-1],[0,nd,Ge]],ei=[0,Ox,Kt,[0,Os,ve,Px,ve,Tx,ve,Mx,ve,Cx,ve,Rx,ve,Ax],Lt],fw=Fm(ei),Ad=class extends bt{constructor(i){super(i)}},Om=[0,ei,ti,-1,ce],pw=hs(502141897,Ad);gi[502141897]=Om;var mw=vr(class extends bt{constructor(i){super(i)}},[0,[0,Lt,-1,zT,HT],rw]),Bx=class extends bt{constructor(i){super(i)}},kx=class extends bt{constructor(i){super(i)}},Gp=[0,ei,ti,[0,ei],Kt],gw=hs(508968150,kx);gi[508968150]=[0,ei,Om,Gp,ti,[0,[0,Ox]]],gi[508968149]=Gp;var Ka=class extends bt{constructor(i){super(i)}l(){return Ae(this,Um,2)}h(){ne(this,2)}},zx=[0,ei,Ux];gi[478825465]=zx;var _w=class extends bt{constructor(i){super(i)}},Gx=class extends bt{constructor(i){super(i)}},Bm=class extends bt{constructor(i){super(i)}},km=class extends bt{constructor(i){super(i)}},Hx=class extends bt{constructor(i){super(i)}},T1=[0,ei,[0,ei],zx,-1],Vx=[0,ei,ti,ce],zm=[0,ei,ti],Wx=[0,ei,Vx,zm,ti],vw=hs(479097054,Hx);gi[479097054]=[0,ei,Wx,T1],gi[463370452]=T1,gi[464864288]=Vx;var xw=hs(462713202,km);gi[462713202]=Wx,gi[474472470]=zm;var yw=class extends bt{constructor(i){super(i)}},Xx=class extends bt{constructor(i){super(i)}},qx=class extends bt{constructor(i){super(i)}},$x=class extends bt{constructor(i){super(i)}},Gm=[0,ei,ti,-1,ce],Hp=[0,ei,ti,Kt];$x.prototype.h=ac([0,ei,zm,[0,ei],Om,Gp,Gm,Hp]);var Yx=class extends bt{constructor(i){super(i)}},Sw=hs(456383383,Yx);gi[456383383]=[0,ei,Ux];var Kx=class extends bt{constructor(i){super(i)}},Mw=hs(476348187,Kx);gi[476348187]=[0,ei,dw];var Zx=class extends bt{constructor(i){super(i)}},w1=class extends bt{constructor(i){super(i)}},Jx=[0,Lt,-1],bw=hs(458105876,class extends bt{constructor(i){super(i)}h(){var i=this.B,t=0|i[Dt],e=Vi(this,t);return i=(function(n,s,r,a){var o=w1;!a&&vo(n)&&(r=0|(s=n.B)[Dt]);var l=as(s,2);if(n=!1,l==null){if(a)return Q_();l=[]}else if(l.constructor===zs){if(!(2&l.N)||a)return l;l=l.fa()}else Array.isArray(l)?n=!!(2&l[Dt]):l=[];if(a){if(!l.length)return Q_();n||(n=!0,po(l))}else n&&(n=!1,$l(l),l=zv(l));return!n&&32&r&&jl(l,32),r=oi(s,r,2,a=new zs(l,o,uT,void 0)),n||gr(s,r),a})(this,i,t,e),!e&&w1&&(i.Fa=!0),i}});gi[458105876]=[0,Jx,kT,[!0,Ge,[0,lt,-1,pi]],[0,So,Kt,Lt],Kt];var Hm=class extends bt{constructor(i){super(i)}},jx=hs(458105758,Hm);gi[458105758]=[0,ei,lt,Jx];var Ew=class extends bt{constructor(i){super(i)}},Tw=class extends bt{constructor(i){super(i)}},ww=class extends bt{constructor(i){super(i)}},Aw=Fm([0,ke,[0,Bu,ke,[0,xx,-1],dr]]),Mp=class extends bt{constructor(i){super(i)}},A1=[0,xx,-1,dr],Rw=class extends bt{constructor(i){super(i)}},Qx=class extends bt{constructor(i){super(i)}},Vp=[1,2];Qx.prototype.h=ac([0,Vp,ve,A1,ve,[0,ke,A1]]);var ty=class extends bt{constructor(i){super(i)}},Cw=hs(443442058,ty);gi[443442058]=[0,ei,lt,ce,ti,pi,-1,Kt,ti],gi[514774813]=Gm;var ey=class extends bt{constructor(i){super(i)}},Pw=hs(516587230,ey);function Wp(i,t){return t=t?t.clone():new Um,i.displayNamesLocale!==void 0?ne(t,1,Us(i.displayNamesLocale)):i.displayNamesLocale===void 0&&ne(t,1),i.maxResults!==void 0?os(t,2,i.maxResults):"maxResults"in i&&ne(t,2),i.scoreThreshold!==void 0?Wt(t,3,i.scoreThreshold):"scoreThreshold"in i&&ne(t,3),i.categoryAllowlist!==void 0?Zu(t,4,i.categoryAllowlist):"categoryAllowlist"in i&&ne(t,4),i.categoryDenylist!==void 0?Zu(t,5,i.categoryDenylist):"categoryDenylist"in i&&ne(t,5),t}function iy(i){var t=Number(i);return Number.isSafeInteger(t)?t:String(i)}function Vm(i,t=-1,e=""){return{categories:i.map(n=>({index:bn(n,1)??0??-1,score:Hi(n,2)??0,categoryName:Ii(We(n,3))??""??"",displayName:Ii(We(n,4))??""??""})),headIndex:t,headName:e}}function Iw(i){var t={classifications:jr(i,aw,1).map(e=>Vm(Ae(e,Lx,4)?.h()??[],bn(e,2)??0,Ii(We(e,3))??""))};return(function(e){return e==null?e:typeof e=="bigint"?(Rp(e)?e=Number(e):(e=Hr(64,e),e=Rp(e)?Number(e):String(e)),e):go(e)?typeof e=="number"?cm(e):$u(e):void 0})(We(i,2,void 0,Yu))!=null&&(t.timestampMs=iy(We(i,2,void 0,Yu)??Fv)),t}function ny(i){var t=zr(i,3,hn),e=zr(i,2,Zr),n=zr(i,1,Ii),s=zr(i,9,Ii),r={categories:[],keypoints:[]};for(let a=0;a<t.length;a++)r.categories.push({score:t[a],index:e[a]??-1,categoryName:n[a]??"",displayName:s[a]??""});if((t=Ae(i,Sp,4)?.l())&&(r.boundingBox={originX:bn(t,1,hr)??0,originY:bn(t,2,hr)??0,width:bn(t,3,hr)??0,height:bn(t,4,hr)??0,angle:0}),Ae(i,Sp,4)?.h().length)for(let a of Ae(i,Sp,4).h())r.keypoints.push({x:We(a,1,hr,hn)??0,y:We(a,2,hr,hn)??0,score:We(a,4,hr,hn)??0,label:Ii(We(a,3,hr))??""});return r}function lc(i){var t=[];for(let e of jr(i,nw,1))i={x:Hi(e,1)??0,y:Hi(e,2)??0,z:Hi(e,3)??0,visibility:Hi(e,4)??0},We(e,5,void 0,hn)!=null&&(i.presence=Hi(e,5)??0),t.push(i);return t}function Qa(i){var t=[];for(let e of jr(i,iw,1))i={x:Hi(e,1)??0,y:Hi(e,2)??0,z:Hi(e,3)??0,visibility:Hi(e,4)??0},We(e,5,void 0,hn)!=null&&(i.presence=Hi(e,5)??0),t.push(i);return t}function R1(i){return Array.from(i,t=>t>127?t-256:t)}function C1(i,t){if(i.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${i.length} vs. ${t.length}).`);var e=0,n=0,s=0;for(let r=0;r<i.length;r++)e+=i[r]*t[r],n+=i[r]*i[r],s+=t[r]*t[r];if(n<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return e/Math.sqrt(n*s)}function kr(i,t,e){return e=`wasm${e?"_module":""}_internal`,Promise.resolve({wasmLoaderPath:`${t}/${i}_${e}.js`,wasmBinaryPath:`${t}/${i}_${e}.wasm`})}gi[516587230]=[0,ei,Gm,Hp,ti],gi[518928384]=Hp;var Ds=class{};function P1(i){return ne(new Xp,1,Bs(i))}Ds.forVisionTasks=function(i,t=!1){return kr("vision",i??Br``,t)},Ds.forLiteRtLmTextTasks=function(i,t=!1){return kr("litertlm_text",i??Br``,t)},Ds.forTextTasks=function(i,t=!1){return kr("text",i??Br``,t)},Ds.forRetrievalTasks=function(i,t=!1){return kr("retrieval",i??Br``,t)},Ds.forGenAiTasks=function(i,t=!1){return kr("genai",i??Br``,t)},Ds.forDecisionTasks=function(i,t=!1){return kr("decision",i??Br``,t)},Ds.forAudioTasks=function(i,t=!1){return kr("audio",i??Br``,t)};var Xp=class extends bt{constructor(i){super(i)}},Lw=class extends bt{constructor(i){super(i)}},I1=[0,Lt,2,nd,-2,Ge,ke,[0,Lt,Ge]],Dw=class extends bt{constructor(i){super(i)}},Nw=class extends bt{constructor(i){super(i)}};function qp(i,t){return ne(i,1,Bs(t))}function $p(i,t){return ne(i,2,Bs(t))}var Yp=class extends bt{constructor(i){super(i)}},ad=[3,4,5,6,7],Fw=class extends bt{constructor(i){super(i)}},sy=class extends bt{constructor(i){super(i)}};sy.prototype.h=ac([0,[0,Lt,lt,-3,Lt],[0,ad,Lt,-1,ve,[0,Lt,lt,nd],ve,I1,ve,[0,1,I1],ve,[0,Lt],ve,[0,Lt,lt,nd]]]);var Uw=class{constructor(){this.h=typeof AbortController<"u"}async send(i,t,e){var n=this.h?new AbortController:void 0,s=n&&i.la>0?setTimeout(()=>{n.abort()},i.la):void 0;try{let r=await fetch(i.url,{method:i.bb,headers:{...i.ab},...i.body&&{body:i.body},...i.withCredentials&&{credentials:"include"},signal:i.la&&n?n.signal:null});r.ok?t?.(await r.text()):e?.(r.status)}catch(r){r?.name==="AbortError"?e?.(408):e?.(0)}finally{clearTimeout(s)}}},Ow=class extends bt{constructor(i){super(i,37)}},L1=[-4,{},$T,Lt,qT],D1=[0,lt,Lt,1,lt,-1,Lt,1,Lt,1,Ge],N1=[0,Lt,lt,-2],F1=[0,lt,Lt],U1=[0,lt,Lt],O1=[0,Kt,-3],B1=[0,Lt,lt,-1,Ge,ce,-1,lt,-5,ke,[0,lt,-4],-1,Kt,[0,Kt,-3],Lt],Bw=class extends bt{constructor(i){super(i,19)}},kw=Fm([-19,{},[0,Lt,1,[0,lt,-6,Ge,ce,lt,-1,Ge],1,[0,lt,1,lt,-5],lt,-1,[0,Lt,lt,-8],[0,lt,-3],[0,lt,Lt,lt,-2],[0,lt,-1,Lt,lt,-1,Lt,lt,-1,[0,ke,[0,lt,-1],Kt,lt,-5],[0,Lt,Kt,ce,-2]],Ge,[0,lt,-3,Ge,ce,lt,-1],[0,Lt,lt,-1],[0,lt,-9],[0,lt,-6,Lt,lt,1,lt,Kt,Lt,-1,Kt,lt,-2,Lt,lt,Lt,lt,ce,-1],1,[0,Lt],1,[0,lt,-4],1,D1,[0,[1,2,3,4,5,6],ve,D1,ve,F1,ve,U1,ve,[0,Lt],ve,B1,ve,N1],F1,U1,B1,[0,[0,Lt,lt,-1,Ge,ce,-1,lt,-4,ke,[0,lt,-4],-1,1,O1],[0,Lt,lt,-1,Ge,ce,-1,lt,-4,O1]],N1,[0,lt,[0,ce,-3,Lt],Lt,-2,[0,ce,-1],Kt],4,[0,lt,Lt,lt,-1,Ge,Lt,lt,-1,Lt,ce,-1]],Lt,ke,[-37,{},zl,lt,ke,[0,lt,-1],Ja,1,Ja,[0,pi,-1,m1,GT,-1],lt,[0,ce,lt,-1],Kt,ce,Ge,lt,-1,WT,XT,zl,Ja,Lt,m1,Ge,-1,[0,Lt,-1],lt,Kt,lt,So,lt,-1,p1,1,p1,L1,Kt,[0,Lt,[0,ti,ce,-2],[0,ti]],[0,Lt,Ge]],zl,yx,lt,-1,zl,Lt,-1,[0,Kt,-1,Lt,Kt],[0,Ge,-1,lt],[0,zl,Kt,Ge],Ge,1,Sx,1,L1]),zw=class{constructor(i){this.i=[],this.o=new Uw,this.l=i??"",this.h=setInterval(()=>{this.flush()},6e4)}close(){this.h!==void 0&&(clearInterval(this.h),this.h=void 0),this.flush()}flush(i,t){if(this.error)t?.("net-send-failed");else if(this.i.length===0)i?.();else{var e=this.i;this.i=[],e=(function(n){var s=new Bw;return Dp(s=ne(s,2,Bs(1786)),3,n)})(e),e=kw(e),this.o.send({url:"https://odml.pa.googleapis.com/v1/log",bb:"POST",la:1e4,body:e,gb:2,ab:{"Content-Type":"application/x-protobuf","x-goog-api-key":this.l},withCredentials:!1},()=>{i?.()},n=>{this.error=Error(`Logging failed with HTTP error: ${n}`),this.i=[],this.h!==void 0&&(clearInterval(this.h),this.h=void 0),t?.("net-send-failed",n)})}}},od=class{constructor(){this.ba=this.V=this.Y=this.S=this.W=this.U=this.R=0}};function Kp(i,t){var e=new sy;e=kt(e,0,1,i.C),e=kt(e,0,2,t),t=ne(t=new Ow,6,hd(e=e.h(),!1)),(i=i.m).error||i.i.push(t)}function k1(i,t){var e={R:t.R-i.l.R,U:t.U-i.l.U,W:t.W-i.l.W,S:t.S-i.l.S,Y:t.Y-i.l.Y,V:t.V,ba:t.ba},n=$p(qp(new Yp,i.D),1);e=ry(i,e),Kp(i,n=On(n,4,ad,e)),i.l=t}function ry(i,t){var e=new Lw;return i=Fu(i=vp(i=ne(e,1,Bs(i.F)),7,t.S),5,t.V),i=Fu(i,6,t.ba),t.W>0&&Fu(i,4,t.Y/t.W),t.R!==0&&(e=vp(e=P1(3),2,t.R),Kl(i,8,Xp,e)),t.U!==0&&(t=vp(e=P1(4),2,t.U),Kl(i,8,Xp,t)),i}var Gw=class{constructor(i,t,e){this.v=performance.now(),this.o=performance.now(),this.i=new Map,this.u=0,this.h=new od,this.l=new od,this.m=new zw(e),this.D=(function(n){switch(n){case"AudioClassifier":return 4;case"AudioEmbedder":return 5;case"TextClassifier":return 6;case"TextEmbedder":return 7;case"GestureRecognizer":return 8;case"HandDetector":return 9;case"HandLandmarker":return 10;case"ImageClassifier":return 11;case"ImageEmbedder":return 12;case"ImageSegmenter":return 13;case"ObjectDetector":return 14;case"FaceDetector":return 15;case"FaceLandmarker":return 16;case"InteractiveSegmenter":case"InteractiveSegmenterLegacy":return 18;case"HolisticLandmarker":return 20;case"LlmInference":return 21;case"LanguageDetector":return 22;case"PoseLandmarker":return 23;case"UniversalEmbedder":return 28;case"SemanticRetriever":return 29;case"DecisionMaker":return 30;case"TextSummarizer":return 26;case"TextProofreader":return 27;case"AudioTranscriber":return 31;case"TextToSpeech":return 32;default:return 0}})(i),this.F=(function(n){switch(n){case"IMAGE":return 11;case"VIDEO":return 12;case"LIVE_STREAM":return 13;case"AUDIO_CLIPS":return 14;case"AUDIO_STREAM":return 15;default:return 10}})(t),i=new Fw,typeof navigator>"u"?t=0:(t=navigator.userAgent,t=/Android/i.test(t)?1:/iPhone|iPad|iPod/i.test(t)?2:/Windows/i.test(t)?5:/Macintosh/i.test(t)?4:/Linux/i.test(t)?3:0),i=ne(i,1,Bs(t)),i=ne(i,2,Us("")),i=ne(i,3,Us("")),i=ne(i,4,Us("1.2.3")),i=ne(i,5,Us("")),this.C=ne(i,6,Bs((function(){var n=globalThis.__HOST_ENVIRONMENT__;if(typeof n=="string")switch(n){case"ANDROID":return 1;case"IOS":return 2;case"PYTHON":return 3;case"WEB":break;case"FLUTTER":return 5;case"FLUTTER_WEB":return 6;default:return 0}return 4})()))}ya(){var i=new Nw;i=Fu(i=ne(i,1,Bs(this.F)),3,performance.now()-this.v),Kp(this,i=On($p(qp(new Yp,this.D),0),3,ad,i)),this.o=performance.now()}za(i){var t=this.i.get(i);if(t!==void 0&&(this.i.delete(i),i=performance.now()-t,++this.h.W,this.h.Y+=i,this.h.V=Math.max(this.h.V,i),this.u=Math.max(this.u,i),performance.now()>this.o+3e4)){for(let[e,n]of this.i.entries())i=e,n<t&&(this.h.S++,this.i.delete(i));t={...this.h,ba:performance.now()-this.o},this.h.V=0,this.o=performance.now(),k1(this,t)}}xa(){var i={...this.h,S:this.h.S+this.i.size,V:this.u,ba:performance.now()-this.v};k1(this,i);var t=new Dw;t=kt(t,0,2,i=ry(this,i)),Kp(this,t=On(i=$p(qp(new Yp,this.D),2),5,ad,t))}close(){var i=this.m;typeof i.close=="function"?i.close():i.flush()}};function Wm(){var i=navigator;return typeof OffscreenCanvas<"u"&&(!(function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")})(i)||!!((i=i.userAgent.match(/Version\/([\d]+).*Safari/))&&i.length>=1&&Number(i[1])>=17))}async function z1(i){if(typeof importScripts!="function"){let t=document.createElement("script");return t.src=i.toString(),t.crossOrigin="anonymous",new Promise((e,n)=>{t.addEventListener("load",()=>{e()},!1),t.addEventListener("error",s=>{n(s)},!1),document.body.appendChild(t)})}try{importScripts(i.toString())}catch(t){if(!(t instanceof TypeError))throw t;{let e=self.import;e?await e(i.toString()):await import(i.toString())}}}function Xm(i){return i.videoWidth!==void 0?[i.videoWidth,i.videoHeight]:i.naturalWidth!==void 0?[i.naturalWidth,i.naturalHeight]:i.displayWidth!==void 0?[i.displayWidth,i.displayHeight]:[i.width,i.height]}function Bt(i,t,e){i.o||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),e(t=i.j.stringToNewUTF8(t)),i.j._free(t)}function ay(i,t,e){if(!i.j.canvas)throw Error("No OpenGL canvas configured.");if(e?i.j._bindTextureToStream(e):i.j._bindTextureToCanvas(),!(e=i.j.canvas.getContext("webgl2")||i.j.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");i.j.gpuOriginForWebTexturesIsBottomLeft&&e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),i.j.gpuOriginForWebTexturesIsBottomLeft&&e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1);var[n,s]=Xm(t);return!i.l||n===i.j.canvas.width&&s===i.j.canvas.height||(i.j.canvas.width=n,i.j.canvas.height=s),[n,s]}function G1(i,t,e){i.o||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");var n=new Uint32Array(t.length);for(let s=0;s<t.length;s++)n[s]=i.j.stringToNewUTF8(t[s]);t=i.j._malloc(4*n.length),i.j.HEAPU32.set(n,t>>2),e(t);for(let s of n)i.j._free(s);i.j._free(t)}function is(i,t,e){i.j.simpleListeners=i.j.simpleListeners||{},i.j.simpleListeners[t]=e}function ur(i,t,e){var n=[];i.j.simpleListeners=i.j.simpleListeners||{},i.j.simpleListeners[t]=(s,r,a)=>{r?(e(n,a),n=[]):n.push(s)}}var oy=class{constructor(i,t){this.l=!0,this.j=i,this.h=null,this.i=0,this.o=typeof this.j._addIntToInputStream=="function",t!==void 0?this.j.canvas=t:Wm()?this.j.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.j.canvas=document.createElement("canvas"))}async initializeGraph(i){var t=await(await fetch(i)).arrayBuffer();i=!(i.endsWith(".pbtxt")||i.endsWith(".textproto")),this.setGraph(new Uint8Array(t),i)}setGraphFromString(i){this.setGraph(new TextEncoder().encode(i),!1)}setGraph(i,t){var e=i.length,n=this.j._malloc(e);this.j.HEAPU8.set(i,n),t?this.j._changeBinaryGraph(e,n):this.j._changeTextGraph(e,n),this.j._free(n)}configureAudio(i,t,e,n,s){this.j._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Bt(this,n||"input_audio",r=>{Bt(this,s=s||"audio_header",a=>{this.j._configureAudio(r,a,i,t??0,e)})})}setAutoResizeCanvas(i){this.l=i}setAutoRenderToScreen(i){this.j._setAutoRenderToScreen(i)}setGpuBufferVerticalFlip(i){this.j.gpuOriginForWebTexturesIsBottomLeft=i}ka(i){is(this,"__graph_config__",t=>{i(t)}),Bt(this,"__graph_config__",t=>{this.j._getGraphConfig(t,void 0)}),delete this.j.simpleListeners.__graph_config__}attachErrorListener(i){this.j.errorListener=i}attachEmptyPacketListener(i,t){this.j.emptyPacketListeners=this.j.emptyPacketListeners||{},this.j.emptyPacketListeners[i]=t}addAudioToStream(i,t,e){this.addAudioToStreamWithShape(i,0,0,t,e)}addAudioToStreamWithShape(i,t,e,n,s){var r=4*i.length;this.i!==r&&(this.h&&this.j._free(this.h),this.h=this.j._malloc(r),this.i=r),this.j.HEAPF32.set(i,this.h/4),Bt(this,n,a=>{this.j._addAudioToInputStream(this.h,t,e,a,s)})}addGpuBufferToStream(i,t,e){Bt(this,t,n=>{var[s,r]=ay(this,i,n);this.j._addBoundTextureToStream(n,s,r,e)})}addBoolToStream(i,t,e){Bt(this,t,n=>{this.j._addBoolToInputStream(i,n,e)})}addDoubleToStream(i,t,e){Bt(this,t,n=>{this.j._addDoubleToInputStream(i,n,e)})}addFloatToStream(i,t,e){Bt(this,t,n=>{this.j._addFloatToInputStream(i,n,e)})}addIntToStream(i,t,e){Bt(this,t,n=>{this.j._addIntToInputStream(i,n,e)})}addUintToStream(i,t,e){Bt(this,t,n=>{this.j._addUintToInputStream(i,n,e)})}addStringToStream(i,t,e){Bt(this,t,n=>{Bt(this,i,s=>{this.j._addStringToInputStream(s,n,e)})})}addStringRecordToStream(i,t,e){Bt(this,t,n=>{G1(this,Object.keys(i),s=>{G1(this,Object.values(i),r=>{this.j._addFlatHashMapToInputStream(s,r,Object.keys(i).length,n,e)})})})}addProtoToStream(i,t,e,n){Bt(this,e,s=>{Bt(this,t,r=>{var a=this.j._malloc(i.length);this.j.HEAPU8.set(i,a),this.j._addProtoToInputStream(a,i.length,r,s,n),this.j._free(a)})})}addEmptyPacketToStream(i,t){Bt(this,i,e=>{this.j._addEmptyPacketToInputStream(e,t)})}addBoolVectorToStream(i,t,e){Bt(this,t,n=>{var s=this.j._allocateBoolVector(i.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(let r of i)this.j._addBoolVectorEntry(s,r);this.j._addBoolVectorToInputStream(s,n,e)})}addDoubleVectorToStream(i,t,e){Bt(this,t,n=>{var s=this.j._allocateDoubleVector(i.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(let r of i)this.j._addDoubleVectorEntry(s,r);this.j._addDoubleVectorToInputStream(s,n,e)})}addFloatVectorToStream(i,t,e){Bt(this,t,n=>{var s=this.j._allocateFloatVector(i.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(let r of i)this.j._addFloatVectorEntry(s,r);this.j._addFloatVectorToInputStream(s,n,e)})}addIntVectorToStream(i,t,e){Bt(this,t,n=>{var s=this.j._allocateIntVector(i.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(let r of i)this.j._addIntVectorEntry(s,r);this.j._addIntVectorToInputStream(s,n,e)})}addUintVectorToStream(i,t,e){Bt(this,t,n=>{var s=this.j._allocateUintVector(i.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(let r of i)this.j._addUintVectorEntry(s,r);this.j._addUintVectorToInputStream(s,n,e)})}addStringVectorToStream(i,t,e){Bt(this,t,n=>{var s=this.j._allocateStringVector(i.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(let r of i)Bt(this,r,a=>{this.j._addStringVectorEntry(s,a)});this.j._addStringVectorToInputStream(s,n,e)})}addBoolToInputSidePacket(i,t){Bt(this,t,e=>{this.j._addBoolToInputSidePacket(i,e)})}addDoubleToInputSidePacket(i,t){Bt(this,t,e=>{this.j._addDoubleToInputSidePacket(i,e)})}addFloatToInputSidePacket(i,t){Bt(this,t,e=>{this.j._addFloatToInputSidePacket(i,e)})}addIntToInputSidePacket(i,t){Bt(this,t,e=>{this.j._addIntToInputSidePacket(i,e)})}addUintToInputSidePacket(i,t){Bt(this,t,e=>{this.j._addUintToInputSidePacket(i,e)})}addStringToInputSidePacket(i,t){Bt(this,t,e=>{Bt(this,i,n=>{this.j._addStringToInputSidePacket(n,e)})})}addProtoToInputSidePacket(i,t,e){Bt(this,e,n=>{Bt(this,t,s=>{var r=this.j._malloc(i.length);this.j.HEAPU8.set(i,r),this.j._addProtoToInputSidePacket(r,i.length,s,n),this.j._free(r)})})}addBoolVectorToInputSidePacket(i,t){Bt(this,t,e=>{var n=this.j._allocateBoolVector(i.length);if(!n)throw Error("Unable to allocate new bool vector on heap.");for(let s of i)this.j._addBoolVectorEntry(n,s);this.j._addBoolVectorToInputSidePacket(n,e)})}addDoubleVectorToInputSidePacket(i,t){Bt(this,t,e=>{var n=this.j._allocateDoubleVector(i.length);if(!n)throw Error("Unable to allocate new double vector on heap.");for(let s of i)this.j._addDoubleVectorEntry(n,s);this.j._addDoubleVectorToInputSidePacket(n,e)})}addFloatVectorToInputSidePacket(i,t){Bt(this,t,e=>{var n=this.j._allocateFloatVector(i.length);if(!n)throw Error("Unable to allocate new float vector on heap.");for(let s of i)this.j._addFloatVectorEntry(n,s);this.j._addFloatVectorToInputSidePacket(n,e)})}addIntVectorToInputSidePacket(i,t){Bt(this,t,e=>{var n=this.j._allocateIntVector(i.length);if(!n)throw Error("Unable to allocate new int vector on heap.");for(let s of i)this.j._addIntVectorEntry(n,s);this.j._addIntVectorToInputSidePacket(n,e)})}addUintVectorToInputSidePacket(i,t){Bt(this,t,e=>{var n=this.j._allocateUintVector(i.length);if(!n)throw Error("Unable to allocate new unsigned int vector on heap.");for(let s of i)this.j._addUintVectorEntry(n,s);this.j._addUintVectorToInputSidePacket(n,e)})}addStringVectorToInputSidePacket(i,t){Bt(this,t,e=>{var n=this.j._allocateStringVector(i.length);if(!n)throw Error("Unable to allocate new string vector on heap.");for(let s of i)Bt(this,s,r=>{this.j._addStringVectorEntry(n,r)});this.j._addStringVectorToInputSidePacket(n,e)})}attachBoolListener(i,t){is(this,i,t),Bt(this,i,e=>{this.j._attachBoolListener(e)})}attachBoolVectorListener(i,t){ur(this,i,t),Bt(this,i,e=>{this.j._attachBoolVectorListener(e)})}attachIntListener(i,t){is(this,i,t),Bt(this,i,e=>{this.j._attachIntListener(e)})}attachIntVectorListener(i,t){ur(this,i,t),Bt(this,i,e=>{this.j._attachIntVectorListener(e)})}attachUintListener(i,t){is(this,i,t),Bt(this,i,e=>{this.j._attachUintListener(e)})}attachUintVectorListener(i,t){ur(this,i,t),Bt(this,i,e=>{this.j._attachUintVectorListener(e)})}attachDoubleListener(i,t){is(this,i,t),Bt(this,i,e=>{this.j._attachDoubleListener(e)})}attachDoubleVectorListener(i,t){ur(this,i,t),Bt(this,i,e=>{this.j._attachDoubleVectorListener(e)})}attachFloatListener(i,t){is(this,i,t),Bt(this,i,e=>{this.j._attachFloatListener(e)})}attachFloatVectorListener(i,t){ur(this,i,t),Bt(this,i,e=>{this.j._attachFloatVectorListener(e)})}attachStringListener(i,t){is(this,i,t),Bt(this,i,e=>{this.j._attachStringListener(e)})}attachStringVectorListener(i,t){ur(this,i,t),Bt(this,i,e=>{this.j._attachStringVectorListener(e)})}attachProtoListener(i,t,e){is(this,i,t),Bt(this,i,n=>{this.j._attachProtoListener(n,e||!1)})}attachProtoVectorListener(i,t,e){ur(this,i,t),Bt(this,i,n=>{this.j._attachProtoVectorListener(n,e||!1)})}attachAudioListener(i,t,e){this.j._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),is(this,i,(n,s)=>{n=new Float32Array(n.buffer,n.byteOffset,n.length/4),t(n,s)}),Bt(this,i,n=>{this.j._attachAudioListener(n,e||!1)})}finishProcessing(){this.j._waitUntilIdle()}closeGraph(){this.j._closeGraph(),this.j.simpleListeners=void 0,this.j.emptyPacketListeners=void 0}};function ly(i){return class extends i{get pa(){return this.j}Sa(){if(typeof this.pa._mediapipeLoggerGetEncodedApiKey=="function"){let t=this.pa._mediapipeLoggerGetEncodedApiKey();return this.pa._decodeBase64(t)}}}}function cy(i){return class extends i{Za(){this.j._registerModelResourcesGraphService()}}}var Hw=ly(cy(oy)),Vw=class extends Hw{};async function Ww(i,t,e,n){return i=await(async(s,r,a,o,l)=>{if(r&&await z1(r),!self.ModuleFactory||a&&(await z1(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((r=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new s(l,o)})(i,e.wasmLoaderPath,e.assetLoaderPath,t,{locateFile:s=>s.endsWith(".wasm")?e.wasmBinaryPath.toString():e.assetBinaryPath&&s.endsWith(".data")?e.assetBinaryPath.toString():s}),(function(s,r){r=r.runningMode??"";var a=s.h.Sa();s.o=new Gw(s.D(),r,a)})(i,n),await i.A(n),i}async function zu(i,t,e,n){return Ww(i,t,e,n)}function bp(i,t,e){try{i.h.j.FS_unlink(`/${e}`)}catch{}i.h.j.FS_createDataFile("/",e,t,!0,!1,!0),Zp(i,`/${e}`)}function Zp(i,t){var e=Ae(i.baseOptions,rd,1)||new rd;typeof t=="string"?(ne(e,2,Us(t)),ne(e,1)):t instanceof Uint8Array&&(ne(e,1,hd(t,!1)),ne(e,2)),kt(i.baseOptions,0,1,e)}function H1(i){try{let t=i.L.length;if(t===1)throw Error(i.L[0].message);if(t>1)throw Error("Encountered multiple errors: "+i.L.map(e=>e.message).join(", "))}finally{i.L=[]}}function Ct(i,t){i.J=Math.max(i.J,t)}function Rd(i,t){i.F=new tn,un(i.F,2,"PassThroughCalculator"),Xe(i.F,"free_memory"),xe(i.F,"free_memory_unused_out"),Ze(t,"free_memory"),Tn(t,i.F)}function lo(i,t){Xe(i.F,t),xe(i.F,t+"_unused_out")}function Cd(i){i.h.addBoolToStream(!0,"free_memory",i.J)}var ld=class{constructor(i){this.h=i,this.L=[],this.J=0,this.h.setAutoRenderToScreen(!1)}l(i,t=!0,e=!1,n=!1){if(t){let s=i.baseOptions||{};if(i.baseOptions?.modelAssetBuffer&&i.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(Ae(this.baseOptions,rd,1)?.h()||Ae(this.baseOptions,rd,1)?.l()||i.baseOptions?.modelAssetBuffer||i.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");(function(a,o,l=!1){var c=Ae(a.baseOptions,sd,3);if(!c){var h=c=new sd,f=new y1;On(h,4,Os,f)}"delegate"in o&&(o.delegate==="GPU"?(o=c,h=new Ex,On(o,2,Os,h)):(o=c,h=new y1,On(o,4,Os,h))),l&&(l=c.l(),o=c.h()||l?.h()===!0,l=new wx,o?kt(l,0,9,o=new ZT):kt(l,0,8,o=new KT),On(c,6,Os,l)),kt(a.baseOptions,0,3,c)})(this,s,n);let r=e?"model.litertlm":"model.dat";if(s.modelAssetPath)return fetch(s.modelAssetPath.toString()).then(a=>{if(a.ok)return a.arrayBuffer();throw Error(`Failed to fetch model: ${s.modelAssetPath} (${a.status})`)}).then(a=>{bp(this,new Uint8Array(a),r),this.u(),this.M()});if(s.modelAssetBuffer instanceof Uint8Array)e?bp(this,s.modelAssetBuffer,r):Zp(this,s.modelAssetBuffer);else if(s.modelAssetBuffer)return(async function(a){for(var o=[],l=0;;){let{done:c,value:h}=await a.read();if(c)break;o.push(h),l+=h.length}if(o.length===0)return new Uint8Array(0);if(o.length===1)return o[0];a=new Uint8Array(l),l=0;for(let c of o)a.set(c,l),l+=c.length;return a})(s.modelAssetBuffer).then(a=>{e?bp(this,a,r):Zp(this,a),this.u(),this.M()})}return this.u(),this.M(),Promise.resolve()}M(){}ka(){var i;if(this.h.ka(t=>{i=jT(t)}),!i)throw Error("Failed to retrieve CalculatorGraphConfig");return i}setGraph(i,t){this.h.attachErrorListener((e,n)=>{this.L.push(Error(n))}),this.h.Za(),this.h.setGraph(i,t),this.o?.ya(),this.F=void 0,H1(this)}finishProcessing(i){this.h.finishProcessing(),H1(this),this.o&&i!==void 0&&this.o.za(i)}close(){this.F=void 0,this.o?.xa(),this.o?.close(),this.h.closeGraph()}};function Wi(i,t){if(!i)throw Error(`Unable to obtain required WebGL resource: ${t}`);return i}ld.prototype.close=ld.prototype.close;var Jp=class{constructor(t,e,n,s){this.h=t,this.i=e,this.o=n,this.l=s}bind(){this.h.bindVertexArray(this.i)}close(){this.h.deleteVertexArray(this.i),this.h.deleteBuffer(this.o),this.h.deleteBuffer(this.l)}};function V1(i,t,e){var n=i.h;if(e=Wi(n.createShader(e),"Failed to create WebGL shader"),n.shaderSource(e,t),n.compileShader(e),!n.getShaderParameter(e,n.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${n.getShaderInfoLog(e)}`);return n.attachShader(i.i,e),e}function W1(i,t){var e=i.h,n=Wi(e.createVertexArray(),"Failed to create vertex array");e.bindVertexArray(n);var s=Wi(e.createBuffer(),"Failed to create buffer");e.bindBuffer(e.ARRAY_BUFFER,s),e.enableVertexAttribArray(i.G),e.vertexAttribPointer(i.G,2,e.FLOAT,!1,0,0),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),e.STATIC_DRAW);var r=Wi(e.createBuffer(),"Failed to create buffer");return e.bindBuffer(e.ARRAY_BUFFER,r),e.enableVertexAttribArray(i.L),e.vertexAttribPointer(i.L,2,e.FLOAT,!1,0,0),e.bufferData(e.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindVertexArray(null),new Jp(e,n,s,r)}function qm(i,t){if(i.h){if(t!==i.h)throw Error("Cannot change GL context once initialized")}else i.h=t}function cc(i,t,e,n){return qm(i,t),i.i||(i.o(),i.J()),e?(i.m||(i.m=W1(i,!0)),e=i.m):(i.F||(i.F=W1(i,!1)),e=i.F),t.useProgram(i.i),e.bind(),i.l(),i=n(),e.h.bindVertexArray(null),i}function pr(i,t,e){return qm(i,t),i=Wi(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,i),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,e??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,e??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),i}function Pd(i,t,e){qm(i,t),i.D||(i.D=Wi(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,i.D),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0)}function $m(i){i.h?.bindFramebuffer(i.h.FRAMEBUFFER,null)}var ta=class{C(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}o(){var i=this.h;if(this.i=Wi(i.createProgram(),"Failed to create WebGL program"),this.ea=V1(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,i.VERTEX_SHADER),this.aa=V1(this,this.C(),i.FRAGMENT_SHADER),i.linkProgram(this.i),!i.getProgramParameter(this.i,i.LINK_STATUS))throw Error(`Error during program linking: ${i.getProgramInfoLog(this.i)}`);this.G=i.getAttribLocation(this.i,"aVertex"),this.L=i.getAttribLocation(this.i,"aTex")}J(){}l(){}close(){if(this.i){let i=this.h;i.deleteProgram(this.i),i.deleteShader(this.ea),i.deleteShader(this.aa)}this.D&&this.h.deleteFramebuffer(this.D),this.F&&this.F.close(),this.m&&this.m.close()}},Xw=class extends ta{C(){return`
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
 `}J(){var i=this.h;i.activeTexture(i.TEXTURE1),this.v=pr(this,i,i.LINEAR),i.activeTexture(i.TEXTURE2),this.u=pr(this,i,i.NEAREST)}o(){super.o();var i=this.h;this.P=Wi(i.getUniformLocation(this.i,"backgroundTexture"),"Uniform location"),this.Z=Wi(i.getUniformLocation(this.i,"colorMappingTexture"),"Uniform location"),this.M=Wi(i.getUniformLocation(this.i,"maskTexture"),"Uniform location")}l(){super.l();var i=this.h;i.uniform1i(this.M,0),i.uniform1i(this.P,1),i.uniform1i(this.Z,2)}close(){this.v&&this.h.deleteTexture(this.v),this.u&&this.h.deleteTexture(this.u),super.close()}},qw=class extends ta{C(){return`
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
 `}J(){var i=this.h;i.activeTexture(i.TEXTURE1),this.u=pr(this,i),i.activeTexture(i.TEXTURE2),this.v=pr(this,i)}o(){super.o();var i=this.h;this.M=Wi(i.getUniformLocation(this.i,"defaultTexture"),"Uniform location"),this.P=Wi(i.getUniformLocation(this.i,"overlayTexture"),"Uniform location"),this.K=Wi(i.getUniformLocation(this.i,"maskTexture"),"Uniform location")}l(){super.l();var i=this.h;i.uniform1i(this.K,0),i.uniform1i(this.M,1),i.uniform1i(this.P,2)}close(){this.u&&this.h.deleteTexture(this.u),this.v&&this.h.deleteTexture(this.v),super.close()}};function Fs(i,t){switch(t){case 0:return i.h.find(e=>e instanceof Uint8Array);case 1:return i.h.find(e=>e instanceof Float32Array);case 2:return i.h.find(e=>typeof WebGLTexture<"u"&&e instanceof WebGLTexture);default:throw Error(`Type is not supported: ${t}`)}}function jp(i){var t=Fs(i,1);if(!t){if(t=Fs(i,0))t=new Float32Array(t).map(n=>n/255);else{t=new Float32Array(i.width*i.height);let n=co(i);var e=Ym(i);if(Pd(e,n,hy(i)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){e=new Float32Array(i.width*i.height*4),n.readPixels(0,0,i.width,i.height,n.RGBA,n.FLOAT,e);for(let s=0,r=0;s<t.length;++s,r+=4)t[s]=e[r]}else n.readPixels(0,0,i.width,i.height,n.RED,n.FLOAT,t)}i.h.push(t)}return t}function hy(i){var t=Fs(i,2);if(!t){let e=co(i);t=dy(i);let n=jp(i),s=uy(i);e.texImage2D(e.TEXTURE_2D,0,s,i.width,i.height,0,e.RED,e.FLOAT,n),Qp(i)}return t}function co(i){if(!i.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return i.i||(i.i=Wi(i.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),i.i}function uy(i){if(i=co(i),!Du)if(i.getExtension("EXT_color_buffer_float")&&i.getExtension("OES_texture_float_linear")&&i.getExtension("EXT_float_blend"))Du=i.R32F;else{if(!i.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Du=i.R16F}return Du}function Ym(i){return i.l||(i.l=new ta),i.l}function dy(i){var t=co(i);t.viewport(0,0,i.width,i.height),t.activeTexture(t.TEXTURE0);var e=Fs(i,2);return e||(e=pr(Ym(i),t,i.o?t.LINEAR:t.NEAREST),i.h.push(e),i.u=!0),t.bindTexture(t.TEXTURE_2D,e),e}function Qp(i){i.i.bindTexture(i.i.TEXTURE_2D,null)}var Du,ai=class{constructor(i,t,e,n,s,r,a){this.h=i,this.o=t,this.u=e,this.canvas=n,this.l=s,this.width=r,this.height=a,this.u&&--X1===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ua(){return!!Fs(this,0)}ua(){return!!Fs(this,1)}X(){return!!Fs(this,2)}ta(){return(t=Fs(i=this,0))||(t=jp(i),t=new Uint8Array(t.map(e=>Math.round(255*e))),i.h.push(t)),t;var i,t}sa(){return jp(this)}T(){return hy(this)}clone(){var i=[];for(let t of this.h){let e;if(t instanceof Uint8Array)e=new Uint8Array(t);else if(t instanceof Float32Array)e=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{let n=co(this),s=Ym(this);n.activeTexture(n.TEXTURE1),e=pr(s,n,this.o?n.LINEAR:n.NEAREST),n.bindTexture(n.TEXTURE_2D,e);let r=uy(this);n.texImage2D(n.TEXTURE_2D,0,r,this.width,this.height,0,n.RED,n.FLOAT,null),n.bindTexture(n.TEXTURE_2D,null),Pd(s,n,e),cc(s,n,!1,()=>{dy(this),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.drawArrays(n.TRIANGLE_FAN,0,4),Qp(this)}),$m(s),Qp(this)}}i.push(e)}return new ai(i,this.o,this.X(),this.canvas,this.l,this.width,this.height)}close(){this.u&&co(this).deleteTexture(Fs(this,2)),X1=-1}};ai.prototype.close=ai.prototype.close,ai.prototype.clone=ai.prototype.clone,ai.prototype.getAsWebGLTexture=ai.prototype.T,ai.prototype.getAsFloat32Array=ai.prototype.sa,ai.prototype.getAsUint8Array=ai.prototype.ta,ai.prototype.hasWebGLTexture=ai.prototype.X,ai.prototype.hasFloat32Array=ai.prototype.ua,ai.prototype.hasUint8Array=ai.prototype.Ua;var X1=250,$w={color:"white",lineWidth:4,radius:6};function Ep(i){return{...$w,fillColor:(i=i||{}).color,...i}}function Ls(i,t){return i instanceof Function?i(t):i}function q1(i,t,e){return Math.max(Math.min(t,e),Math.min(Math.max(t,e),i))}function Gl(i){if(!i.l)throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");return i.l}function Jl(i){if(!i.u)throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");return i.u}function $1(i,t,e){if(t.X())e(t.T());else{let n=t.ua()?t.sa():t.ta();i.o=i.o??new ta;let s=Jl(i);e((i=new ai([n],t.o,!1,s.canvas,i.o,t.width,t.height)).T()),i.close()}}function Y1(i,t,e,n){var s=(function(o){return o.h||(o.h=new Xw),o.h})(i),r=Jl(i),a=Array.isArray(e)?new ImageData(new Uint8ClampedArray(e),1,1):e;cc(s,r,!0,()=>{(function(l,c,h,f){var u=l.h;if(u.activeTexture(u.TEXTURE0),u.bindTexture(u.TEXTURE_2D,c),u.activeTexture(u.TEXTURE1),u.bindTexture(u.TEXTURE_2D,l.v),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,u.RGBA,u.UNSIGNED_BYTE,h),l.K&&(function(d,p){if(d!==p)return!1;d=d.entries(),p=p.entries();for(let[v,m]of d){d=v;let g=m,b=p.next();if(b.done)return!1;let[E,y]=b.value;if(d!==E||g[0]!==y[0]||g[1]!==y[1]||g[2]!==y[2]||g[3]!==y[3])return!1}return!!p.next().done})(l.K,f))u.activeTexture(u.TEXTURE2),u.bindTexture(u.TEXTURE_2D,l.u);else{l.K=f;let d=Array(1024).fill(0);f.forEach((p,v)=>{if(p.length!==4)throw Error(`Color at index ${v} is not a four-channel value.`);d[4*v]=p[0],d[4*v+1]=p[1],d[4*v+2]=p[2],d[4*v+3]=p[3]}),u.activeTexture(u.TEXTURE2),u.bindTexture(u.TEXTURE_2D,l.u),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,256,1,0,u.RGBA,u.UNSIGNED_BYTE,new Uint8Array(d))}})(s,t,a,n),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4);var o=s.h;o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,null),o.activeTexture(o.TEXTURE1),o.bindTexture(o.TEXTURE_2D,null),o.activeTexture(o.TEXTURE2),o.bindTexture(o.TEXTURE_2D,null)})}function K1(i,t,e,n){var s=Jl(i),r=(function(l){return l.i||(l.i=new qw),l.i})(i),a=Array.isArray(e)?new ImageData(new Uint8ClampedArray(e),1,1):e,o=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n;cc(r,s,!0,()=>{var l=r.h;l.activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,t),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,r.u),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,a),l.activeTexture(l.TEXTURE2),l.bindTexture(l.TEXTURE_2D,r.v),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,o),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLE_FAN,0,4),s.bindTexture(s.TEXTURE_2D,null),(l=r.h).activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,null),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,null),l.activeTexture(l.TEXTURE2),l.bindTexture(l.TEXTURE_2D,null)})}var Ki=class{constructor(i,t){typeof CanvasRenderingContext2D<"u"&&i instanceof CanvasRenderingContext2D||i instanceof OffscreenCanvasRenderingContext2D?(this.l=i,this.u=t):this.u=i}Ma(i,t){if(i){var e=Gl(this);t=Ep(t),e.save();var n=e.canvas,s=0;for(let r of i)e.fillStyle=Ls(t.fillColor,{index:s,from:r}),e.strokeStyle=Ls(t.color,{index:s,from:r}),e.lineWidth=Ls(t.lineWidth,{index:s,from:r}),(i=new Path2D).arc(r.x*n.width,r.y*n.height,Ls(t.radius,{index:s,from:r}),0,2*Math.PI),e.fill(i),e.stroke(i),++s;e.restore()}}La(i,t,e){if(i&&t){var n=Gl(this);e=Ep(e),n.save();var s=n.canvas,r=0;for(let a of t){n.beginPath(),t=i[a.start];let o=i[a.end];t&&o&&(n.strokeStyle=Ls(e.color,{index:r,from:t,to:o}),n.lineWidth=Ls(e.lineWidth,{index:r,from:t,to:o}),n.moveTo(t.x*s.width,t.y*s.height),n.lineTo(o.x*s.width,o.y*s.height)),++r,n.stroke()}n.restore()}}Ia(i,t){var e=Gl(this);t=Ep(t),e.save(),e.beginPath(),e.lineWidth=Ls(t.lineWidth,{}),e.strokeStyle=Ls(t.color,{}),e.fillStyle=Ls(t.fillColor,{}),e.moveTo(i.originX,i.originY),e.lineTo(i.originX+i.width,i.originY),e.lineTo(i.originX+i.width,i.originY+i.height),e.lineTo(i.originX,i.originY+i.height),e.lineTo(i.originX,i.originY),e.stroke(),e.fill(),e.restore()}Ja(i,t,e=[0,0,0,255]){this.l?(function(n,s,r,a){var o=Jl(n);$1(n,s,l=>{Y1(n,l,r,a),(l=Gl(n)).drawImage(o.canvas,0,0,l.canvas.width,l.canvas.height)})})(this,i,e,t):Y1(this,i.T(),e,t)}Ka(i,t,e){this.l?(function(n,s,r,a){var o=Jl(n);$1(n,s,l=>{K1(n,l,r,a),(l=Gl(n)).drawImage(o.canvas,0,0,l.canvas.width,l.canvas.height)})})(this,i,t,e):K1(this,i.T(),t,e)}close(){this.h?.close(),this.h=void 0,this.i?.close(),this.i=void 0,this.o?.close(),this.o=void 0}};function ns(i,t){switch(t){case 0:return i.h.find(e=>e instanceof ImageData);case 1:return i.h.find(e=>typeof ImageBitmap<"u"&&e instanceof ImageBitmap);case 2:return i.h.find(e=>typeof WebGLTexture<"u"&&e instanceof WebGLTexture);default:throw Error(`Type is not supported: ${t}`)}}function fy(i){var t=ns(i,0);if(!t){t=ho(i);let e=Id(i),n=new Uint8Array(i.width*i.height*4);Pd(e,t,Gu(i)),t.readPixels(0,0,i.width,i.height,t.RGBA,t.UNSIGNED_BYTE,n),$m(e),t=new ImageData(new Uint8ClampedArray(n.buffer),i.width,i.height),i.h.push(t)}return t}function Gu(i){var t=ns(i,2);if(!t){let e=ho(i);t=Hu(i);let n=ns(i,1)||fy(i);e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n),Vl(i)}return t}function ho(i){if(!i.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return i.i||(i.i=Wi(i.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),i.i}function Id(i){return i.l||(i.l=new ta),i.l}function Hu(i){var t=ho(i);t.viewport(0,0,i.width,i.height),t.activeTexture(t.TEXTURE0);var e=ns(i,2);return e||(e=pr(Id(i),t),i.h.push(e),i.o=!0),t.bindTexture(t.TEXTURE_2D,e),e}function Vl(i){i.i.bindTexture(i.i.TEXTURE_2D,null)}function Z1(i){var t=ho(i);return cc(Id(i),t,!0,()=>(function(e,n){var s=e.canvas;if(s.width===e.width&&s.height===e.height)return n();var r=s.width,a=s.height;return s.width=e.width,s.height=e.height,e=n(),s.width=r,s.height=a,e})(i,()=>{if(t.bindFramebuffer(t.FRAMEBUFFER,null),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLE_FAN,0,4),!(i.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return i.canvas.transferToImageBitmap()}))}Ki.prototype.close=Ki.prototype.close,Ki.prototype.drawConfidenceMask=Ki.prototype.Ka,Ki.prototype.drawCategoryMask=Ki.prototype.Ja,Ki.prototype.drawBoundingBox=Ki.prototype.Ia,Ki.prototype.drawConnectors=Ki.prototype.La,Ki.prototype.drawLandmarks=Ki.prototype.Ma,Ki.lerp=function(i,t,e,n,s){return q1(n*(1-(i-t)/(e-t))+s*(1-(e-i)/(e-t)),n,s)},Ki.clamp=q1;var Pi=class{constructor(i,t,e,n,s,r,a){this.h=i,this.u=t,this.o=e,this.canvas=n,this.l=s,this.width=r,this.height=a,(this.u||this.o)&&--J1===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ta(){return!!ns(this,0)}va(){return!!ns(this,1)}X(){return!!ns(this,2)}Qa(){return fy(this)}Pa(){var i=ns(this,1);return i||(Gu(this),Hu(this),i=Z1(this),Vl(this),this.h.push(i),this.u=!0),i}T(){return Gu(this)}clone(){var i=[];for(let t of this.h){let e;if(t instanceof ImageData)e=new ImageData(t.data,this.width,this.height);else if(t instanceof WebGLTexture){let n=ho(this),s=Id(this);n.activeTexture(n.TEXTURE1),e=pr(s,n),n.bindTexture(n.TEXTURE_2D,e),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,this.width,this.height,0,n.RGBA,n.UNSIGNED_BYTE,null),n.bindTexture(n.TEXTURE_2D,null),Pd(s,n,e),cc(s,n,!1,()=>{Hu(this),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.drawArrays(n.TRIANGLE_FAN,0,4),Vl(this)}),$m(s),Vl(this)}else{if(!(t instanceof ImageBitmap))throw Error(`Type is not supported: ${t}`);Gu(this),Hu(this),e=Z1(this),Vl(this)}i.push(e)}return new Pi(i,this.va(),this.X(),this.canvas,this.l,this.width,this.height)}close(){this.u&&ns(this,1).close(),this.o&&ho(this).deleteTexture(ns(this,2)),J1=-1}};Pi.prototype.close=Pi.prototype.close,Pi.prototype.clone=Pi.prototype.clone,Pi.prototype.getAsWebGLTexture=Pi.prototype.T,Pi.prototype.getAsImageBitmap=Pi.prototype.Pa,Pi.prototype.getAsImageData=Pi.prototype.Qa,Pi.prototype.hasWebGLTexture=Pi.prototype.X,Pi.prototype.hasImageBitmap=Pi.prototype.va,Pi.prototype.hasImageData=Pi.prototype.Ta;var J1=250;function zn(...i){return i.map(([t,e])=>({start:t,end:e}))}var j1,Yw=cy((j1=ly(oy),class extends j1{get oa(){return this.j}Da(i,t,e){Bt(this,t,n=>{var[s,r]=ay(this,i,n);this.oa._addBoundTextureAsImageToStream(n,s,r,e)})}ha(i,t){is(this,i,t),Bt(this,i,e=>{this.oa._attachImageListener(e)})}ia(i,t){ur(this,i,t),Bt(this,i,e=>{this.oa._attachImageVectorListener(e)})}})),Gn=class extends Yw{};async function Me(i,t,e){return zu(i,e.canvas??(Wm()?void 0:document.createElement("canvas")),t,e)}function py(i,t,e,n){if(i.o&&n!==void 0){var s=Ae(i.baseOptions,sd,3);s?.h()||s?.l()?.h()?(++(s=i.o).h.U,s.i.set(n,performance.now())):(++(s=i.o).h.R,s.i.set(n,performance.now()))}if(i.qa){if(s=new Fx,e?.regionOfInterest){if(!i.Ca)throw Error("This task doesn't support region-of-interest.");let r=e.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Wt(s,1,(r.left+r.right)/2),Wt(s,2,(r.top+r.bottom)/2),Wt(s,4,r.right-r.left),Wt(s,3,r.bottom-r.top)}else Wt(s,1,.5),Wt(s,2,.5),Wt(s,4,1),Wt(s,3,1);if(e?.rotationDegrees){if(e?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Wt(s,5,-Math.PI*e.rotationDegrees/180),e?.rotationDegrees%180!=0){let[r,a]=Xm(t);e=Hi(s,4)*r/a,Wt(s,4,Hi(s,3)*a/r),Wt(s,3,e)}}i.h.addProtoToStream(s.h(),"mediapipe.NormalizedRect",i.qa,n)}i.h.Da(t,i.Ba,n??performance.now()),i.finishProcessing(n)}function Hn(i,t,e){if(i.K)throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");py(i,t,e,i.J+1)}function us(i,t,e,n){if(!i.K)throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");py(i,t,e,n)}function uo(i,t,e,n){var s=t.data,r=t.width,a=r*(t=t.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==a)throw Error("Unsupported channel count: "+s.length/a);return i=new ai([s],e,!1,i.h.j.canvas,i.ea,r,t),n?i.clone():i}var dn=class extends ld{constructor(i,t,e,n){super(i),this.h=i,this.Ba=t,this.qa=e,this.Ca=n,this.ea=new ta,this.K=!1}l(i,t=!0,e=!1,n=!1){if("runningMode"in i){var s=this.K=!!i.runningMode&&i.runningMode!=="IMAGE";ne(this.baseOptions,2,s==null?s:qu(s))}if(i.canvas!==void 0&&this.h.j.canvas!==i.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(i,t,e,n)}close(){this.ea.close(),super.close()}};dn.prototype.close=dn.prototype.close;var yn=class extends dn{constructor(i,t){super(new Gn(i,t),"image_in","norm_rect_in",!1),this.m={detections:[]},kt(i=this.i=new Ad,0,1,t=new Je),Wt(this.i,2,.5),Wt(this.i,3,.3)}D(){return"FaceDetector"}get baseOptions(){return Ae(this.i,Je,1)}set baseOptions(i){kt(this.i,0,1,i)}A(i){return"minDetectionConfidence"in i&&Wt(this.i,2,i.minDetectionConfidence??.5),"minSuppressionThreshold"in i&&Wt(this.i,3,i.minSuppressionThreshold??.3),this.l(i)}H(i,t){return this.m={detections:[]},Hn(this,i,t),this.m}I(i,t,e){return this.m={detections:[]},us(this,i,e,t),this.m}u(){var i=new pn;Ze(i,"image_in"),Ze(i,"norm_rect_in"),Pe(i,"detections");var t=new fn;cs(t,pw,this.i);var e=new tn;un(e,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Xe(e,"IMAGE:image_in"),Xe(e,"NORM_RECT:norm_rect_in"),xe(e,"DETECTIONS:detections"),e.A(t),Tn(i,e),this.h.attachProtoVectorListener("detections",(n,s)=>{for(let r of n)n=Nx(r),this.m.detections.push(ny(n));Ct(this,s)}),this.h.attachEmptyPacketListener("detections",n=>{Ct(this,n)}),i=i.h(),this.setGraph(new Uint8Array(i),!0)}};yn.prototype.detectForVideo=yn.prototype.I,yn.prototype.detect=yn.prototype.H,yn.prototype.setOptions=yn.prototype.A,yn.createFromModelPath=async function(i,t){return Me(yn,i,{baseOptions:{modelAssetPath:t}})},yn.createFromModelBuffer=function(i,t){return Me(yn,i,{baseOptions:{modelAssetBuffer:t}})},yn.createFromOptions=function(i,t){return Me(yn,i,t)};var Km=zn([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Zm=zn([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Jm=zn([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),my=zn([474,475],[475,476],[476,477],[477,474]),jm=zn([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Qm=zn([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),gy=zn([469,470],[470,471],[471,472],[472,469]),t0=zn([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),_y=[...Km,...Zm,...Jm,...jm,...Qm,...t0],vy=zn([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Q1(i){i.m={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var we=class extends dn{constructor(i,t){super(new Gn(i,t),"image_in","norm_rect",!1),this.m={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,kt(i=this.i=new kx,0,1,t=new Je),this.C=new Bx,kt(this.i,0,3,this.C),this.v=new Ad,kt(this.i,0,2,this.v),os(this.v,4,1),Wt(this.v,2,.5),Wt(this.C,2,.5),Wt(this.i,4,.5)}D(){return"FaceLandmarker"}get baseOptions(){return Ae(this.i,Je,1)}set baseOptions(i){kt(this.i,0,1,i)}A(i){return"numFaces"in i&&os(this.v,4,i.numFaces??1),"minFaceDetectionConfidence"in i&&Wt(this.v,2,i.minFaceDetectionConfidence??.5),"minTrackingConfidence"in i&&Wt(this.i,4,i.minTrackingConfidence??.5),"minFacePresenceConfidence"in i&&Wt(this.C,2,i.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in i&&(this.outputFaceBlendshapes=!!i.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in i&&(this.outputFacialTransformationMatrixes=!!i.outputFacialTransformationMatrixes),this.l(i)}H(i,t){return Q1(this),Hn(this,i,t),this.m}I(i,t,e){return Q1(this),us(this,i,e,t),this.m}u(){var i=new pn;Ze(i,"image_in"),Ze(i,"norm_rect"),Pe(i,"face_landmarks");var t=new fn;cs(t,gw,this.i);var e=new tn;un(e,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Xe(e,"IMAGE:image_in"),Xe(e,"NORM_RECT:norm_rect"),xe(e,"NORM_LANDMARKS:face_landmarks"),e.A(t),Tn(i,e),this.h.attachProtoVectorListener("face_landmarks",(n,s)=>{for(let r of n)n=oc(r),this.m.faceLandmarks.push(lc(n));Ct(this,s)}),this.h.attachEmptyPacketListener("face_landmarks",n=>{Ct(this,n)}),this.outputFaceBlendshapes&&(Pe(i,"blendshapes"),xe(e,"BLENDSHAPES:blendshapes"),this.h.attachProtoVectorListener("blendshapes",(n,s)=>{if(this.outputFaceBlendshapes)for(let r of n)n=wd(r),this.m.faceBlendshapes.push(Vm(n.h()??[]));Ct(this,s)}),this.h.attachEmptyPacketListener("blendshapes",n=>{Ct(this,n)})),this.outputFacialTransformationMatrixes&&(Pe(i,"face_geometry"),xe(e,"FACE_GEOMETRY:face_geometry"),this.h.attachProtoVectorListener("face_geometry",(n,s)=>{if(this.outputFacialTransformationMatrixes)for(let r of n)(n=Ae(n=mw(r),sw,2))&&this.m.facialTransformationMatrixes.push({rows:bn(n,1)??0??0,columns:bn(n,2)??0??0,data:zr(n,3,hn).slice()??[]});Ct(this,s)}),this.h.attachEmptyPacketListener("face_geometry",n=>{Ct(this,n)})),i=i.h(),this.setGraph(new Uint8Array(i),!0)}};we.prototype.detectForVideo=we.prototype.I,we.prototype.detect=we.prototype.H,we.prototype.setOptions=we.prototype.A,we.createFromModelPath=function(i,t){return Me(we,i,{baseOptions:{modelAssetPath:t}})},we.createFromModelBuffer=function(i,t){return Me(we,i,{baseOptions:{modelAssetBuffer:t}})},we.createFromOptions=function(i,t){return Me(we,i,t)},we.FACE_LANDMARKS_LIPS=Km,He("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LIPS",we.FACE_LANDMARKS_LIPS),we.FACE_LANDMARKS_LEFT_EYE=Zm,He("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYE",we.FACE_LANDMARKS_LEFT_EYE),we.FACE_LANDMARKS_LEFT_EYEBROW=Jm,He("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",we.FACE_LANDMARKS_LEFT_EYEBROW),we.FACE_LANDMARKS_LEFT_IRIS=my,He("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS",we.FACE_LANDMARKS_LEFT_IRIS),we.FACE_LANDMARKS_RIGHT_EYE=jm,He("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE",we.FACE_LANDMARKS_RIGHT_EYE),we.FACE_LANDMARKS_RIGHT_EYEBROW=Qm,He("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",we.FACE_LANDMARKS_RIGHT_EYEBROW),we.FACE_LANDMARKS_RIGHT_IRIS=gy,He("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS",we.FACE_LANDMARKS_RIGHT_IRIS),we.FACE_LANDMARKS_FACE_OVAL=t0,He("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_FACE_OVAL",we.FACE_LANDMARKS_FACE_OVAL),we.FACE_LANDMARKS_CONTOURS=_y,He("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_CONTOURS",we.FACE_LANDMARKS_CONTOURS),we.FACE_LANDMARKS_TESSELATION=vy,He("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_TESSELATION",we.FACE_LANDMARKS_TESSELATION);var e0=zn([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function tv(i){i.gestures=[],i.landmarks=[],i.worldLandmarks=[],i.handedness=[]}function ev(i){return i.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:i.gestures,landmarks:i.landmarks,worldLandmarks:i.worldLandmarks,handedness:i.handedness,handednesses:i.handedness}}function iv(i,t=!0){var e=[];for(let s of i){var n=wd(s);i=[];for(let r of n.h())n=t&&bn(r,1)!=null?bn(r,1)??0:-1,i.push({score:Hi(r,2)??0,index:n,categoryName:Ii(We(r,3))??""??"",displayName:Ii(We(r,4))??""??""});e.push(i)}return e}var Zi=class extends dn{constructor(i,t){super(new Gn(i,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],kt(i=this.m=new Hx,0,1,t=new Je),this.v=new km,kt(this.m,0,2,this.v),this.G=new Bm,kt(this.v,0,3,this.G),this.C=new Gx,kt(this.v,0,2,this.C),this.i=new _w,kt(this.m,0,3,this.i),Wt(this.C,2,.5),Wt(this.v,4,.5),Wt(this.G,2,.5)}D(){return"GestureRecognizer"}get baseOptions(){return Ae(this.m,Je,1)}set baseOptions(i){kt(this.m,0,1,i)}A(i){if(os(this.C,3,i.numHands??1),"minHandDetectionConfidence"in i&&Wt(this.C,2,i.minHandDetectionConfidence??.5),"minTrackingConfidence"in i&&Wt(this.v,4,i.minTrackingConfidence??.5),"minHandPresenceConfidence"in i&&Wt(this.G,2,i.minHandPresenceConfidence??.5),i.cannedGesturesClassifierOptions){var t=new Ka,e=t,n=Wp(i.cannedGesturesClassifierOptions,Ae(this.i,Ka,3)?.l());kt(e,0,2,n),kt(this.i,0,3,t)}else i.cannedGesturesClassifierOptions===void 0&&Ae(this.i,Ka,3)?.h();return i.customGesturesClassifierOptions?(kt(e=t=new Ka,0,2,n=Wp(i.customGesturesClassifierOptions,Ae(this.i,Ka,4)?.l())),kt(this.i,0,4,t)):i.customGesturesClassifierOptions===void 0&&Ae(this.i,Ka,4)?.h(),this.l(i)}Xa(i,t){return tv(this),Hn(this,i,t),ev(this)}Ya(i,t,e){return tv(this),us(this,i,e,t),ev(this)}u(){var i=new pn;Ze(i,"image_in"),Ze(i,"norm_rect"),Pe(i,"hand_gestures"),Pe(i,"hand_landmarks"),Pe(i,"world_hand_landmarks"),Pe(i,"handedness");var t=new fn;cs(t,vw,this.m);var e=new tn;un(e,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Xe(e,"IMAGE:image_in"),Xe(e,"NORM_RECT:norm_rect"),xe(e,"HAND_GESTURES:hand_gestures"),xe(e,"LANDMARKS:hand_landmarks"),xe(e,"WORLD_LANDMARKS:world_hand_landmarks"),xe(e,"HANDEDNESS:handedness"),e.A(t),Tn(i,e),this.h.attachProtoVectorListener("hand_landmarks",(n,s)=>{for(let r of n)n=oc(r),this.landmarks.push(lc(n));Ct(this,s)}),this.h.attachEmptyPacketListener("hand_landmarks",n=>{Ct(this,n)}),this.h.attachProtoVectorListener("world_hand_landmarks",(n,s)=>{for(let r of n)n=ja(r),this.worldLandmarks.push(Qa(n));Ct(this,s)}),this.h.attachEmptyPacketListener("world_hand_landmarks",n=>{Ct(this,n)}),this.h.attachProtoVectorListener("hand_gestures",(n,s)=>{this.gestures.push(...iv(n,!1)),Ct(this,s)}),this.h.attachEmptyPacketListener("hand_gestures",n=>{Ct(this,n)}),this.h.attachProtoVectorListener("handedness",(n,s)=>{this.handedness.push(...iv(n)),Ct(this,s)}),this.h.attachEmptyPacketListener("handedness",n=>{Ct(this,n)}),i=i.h(),this.setGraph(new Uint8Array(i),!0)}};function nv(i){return{landmarks:i.landmarks,worldLandmarks:i.worldLandmarks,handednesses:i.handedness,handedness:i.handedness}}Zi.prototype.recognizeForVideo=Zi.prototype.Ya,Zi.prototype.recognize=Zi.prototype.Xa,Zi.prototype.setOptions=Zi.prototype.A,Zi.createFromModelPath=function(i,t){return Me(Zi,i,{baseOptions:{modelAssetPath:t}})},Zi.createFromModelBuffer=function(i,t){return Me(Zi,i,{baseOptions:{modelAssetBuffer:t}})},Zi.createFromOptions=function(i,t){return Me(Zi,i,t)},Zi.HAND_CONNECTIONS=e0,He("module$exports$google3$third_party$mediapipe$tasks$web$vision$gesture_recognizer$gesture_recognizer.GestureRecognizer.HAND_CONNECTIONS",Zi.HAND_CONNECTIONS);var Bi=class extends dn{constructor(i,t){super(new Gn(i,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],kt(i=this.i=new km,0,1,t=new Je),this.v=new Bm,kt(this.i,0,3,this.v),this.m=new Gx,kt(this.i,0,2,this.m),os(this.m,3,1),Wt(this.m,2,.5),Wt(this.v,2,.5),Wt(this.i,4,.5)}D(){return"HandLandmarker"}get baseOptions(){return Ae(this.i,Je,1)}set baseOptions(i){kt(this.i,0,1,i)}A(i){return"numHands"in i&&os(this.m,3,i.numHands??1),"minHandDetectionConfidence"in i&&Wt(this.m,2,i.minHandDetectionConfidence??.5),"minTrackingConfidence"in i&&Wt(this.i,4,i.minTrackingConfidence??.5),"minHandPresenceConfidence"in i&&Wt(this.v,2,i.minHandPresenceConfidence??.5),this.l(i)}H(i,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Hn(this,i,t),nv(this)}I(i,t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],us(this,i,e,t),nv(this)}u(){var i=new pn;Ze(i,"image_in"),Ze(i,"norm_rect"),Pe(i,"hand_landmarks"),Pe(i,"world_hand_landmarks"),Pe(i,"handedness");var t=new fn;cs(t,xw,this.i);var e=new tn;un(e,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Xe(e,"IMAGE:image_in"),Xe(e,"NORM_RECT:norm_rect"),xe(e,"LANDMARKS:hand_landmarks"),xe(e,"WORLD_LANDMARKS:world_hand_landmarks"),xe(e,"HANDEDNESS:handedness"),e.A(t),Tn(i,e),this.h.attachProtoVectorListener("hand_landmarks",(n,s)=>{for(let r of n)n=oc(r),this.landmarks.push(lc(n));Ct(this,s)}),this.h.attachEmptyPacketListener("hand_landmarks",n=>{Ct(this,n)}),this.h.attachProtoVectorListener("world_hand_landmarks",(n,s)=>{for(let r of n)n=ja(r),this.worldLandmarks.push(Qa(n));Ct(this,s)}),this.h.attachEmptyPacketListener("world_hand_landmarks",n=>{Ct(this,n)}),this.h.attachProtoVectorListener("handedness",(n,s)=>{var r=this.handedness,a=r.push,o=[];for(let l of n){n=wd(l);let c=[];for(let h of n.h())c.push({score:Hi(h,2)??0,index:bn(h,1)??0??-1,categoryName:Ii(We(h,3))??""??"",displayName:Ii(We(h,4))??""??""});o.push(c)}a.call(r,...o),Ct(this,s)}),this.h.attachEmptyPacketListener("handedness",n=>{Ct(this,n)}),i=i.h(),this.setGraph(new Uint8Array(i),!0)}};Bi.prototype.detectForVideo=Bi.prototype.I,Bi.prototype.detect=Bi.prototype.H,Bi.prototype.setOptions=Bi.prototype.A,Bi.createFromModelPath=function(i,t){return Me(Bi,i,{baseOptions:{modelAssetPath:t}})},Bi.createFromModelBuffer=function(i,t){return Me(Bi,i,{baseOptions:{modelAssetBuffer:t}})},Bi.createFromOptions=function(i,t){return Me(Bi,i,t)},Bi.HAND_CONNECTIONS=e0,He("module$exports$google3$third_party$mediapipe$tasks$web$vision$hand_landmarker$hand_landmarker.HandLandmarker.HAND_CONNECTIONS",Bi.HAND_CONNECTIONS);var xy=zn([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function sv(i){i.i={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function rv(i){try{if(!i.G)return i.i;i.G(i.i)}finally{Cd(i)}}function Nu(i,t){i=oc(i),t.push(lc(i))}var ge=class extends dn{constructor(i,t){super(new Gn(i,t),"input_frames_image",null,!1),this.i={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,kt(i=this.m=new $x,0,1,t=new Je),this.Z=new Bm,kt(this.m,0,2,this.Z),this.Aa=new yw,kt(this.m,0,3,this.Aa),this.v=new Ad,kt(this.m,0,4,this.v),this.P=new Bx,kt(this.m,0,5,this.P),this.C=new Xx,kt(this.m,0,6,this.C),this.aa=new qx,kt(this.m,0,7,this.aa),Wt(this.v,2,.5),Wt(this.v,3,.3),Wt(this.P,2,.5),Wt(this.C,2,.5),Wt(this.C,3,.3),Wt(this.aa,2,.5),Wt(this.Z,2,.5)}D(){return"HolisticLandmarker"}get baseOptions(){return Ae(this.m,Je,1)}set baseOptions(i){kt(this.m,0,1,i)}A(i){return"minFaceDetectionConfidence"in i&&Wt(this.v,2,i.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in i&&Wt(this.v,3,i.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in i&&Wt(this.P,2,i.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in i&&(this.outputFaceBlendshapes=!!i.outputFaceBlendshapes),"minPoseDetectionConfidence"in i&&Wt(this.C,2,i.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in i&&Wt(this.C,3,i.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in i&&Wt(this.aa,2,i.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in i&&(this.outputPoseSegmentationMasks=!!i.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in i&&Wt(this.Z,2,i.minHandLandmarksConfidence??.5),this.l(i)}H(i,t,e){var n=typeof t!="function"?t:{};return this.G=typeof t=="function"?t:e,sv(this),Hn(this,i,n),rv(this)}I(i,t,e,n){var s=typeof e!="function"?e:{};return this.G=typeof e=="function"?e:n,sv(this),us(this,i,s,t),rv(this)}u(){var i=new pn;Ze(i,"input_frames_image"),Pe(i,"pose_landmarks"),Pe(i,"pose_world_landmarks"),Pe(i,"face_landmarks"),Pe(i,"left_hand_landmarks"),Pe(i,"left_hand_world_landmarks"),Pe(i,"right_hand_landmarks"),Pe(i,"right_hand_world_landmarks");var t=new fn,e=new g1;un(e,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(s,r){if(r!=null)if(Array.isArray(r))ne(s,2,pd(r,0,Yl));else{if(!(typeof r=="string"||r instanceof ss||nm(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");ec(s,2,hd(r,!1),qr())}})(e,this.m.h());var n=new tn;un(n,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Kl(n,8,g1,e),Xe(n,"IMAGE:input_frames_image"),xe(n,"POSE_LANDMARKS:pose_landmarks"),xe(n,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),xe(n,"FACE_LANDMARKS:face_landmarks"),xe(n,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),xe(n,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),xe(n,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),xe(n,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),n.A(t),Tn(i,n),Rd(this,i),this.h.attachProtoListener("pose_landmarks",(s,r)=>{Nu(s,this.i.poseLandmarks),Ct(this,r)}),this.h.attachEmptyPacketListener("pose_landmarks",s=>{Ct(this,s)}),this.h.attachProtoListener("pose_world_landmarks",(s,r)=>{var a=this.i.poseWorldLandmarks;s=ja(s),a.push(Qa(s)),Ct(this,r)}),this.h.attachEmptyPacketListener("pose_world_landmarks",s=>{Ct(this,s)}),this.outputPoseSegmentationMasks&&(xe(n,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),lo(this,"pose_segmentation_mask"),this.h.ha("pose_segmentation_mask",(s,r)=>{this.i.poseSegmentationMasks=[uo(this,s,!0,!this.G)],Ct(this,r)}),this.h.attachEmptyPacketListener("pose_segmentation_mask",s=>{this.i.poseSegmentationMasks=[],Ct(this,s)})),this.h.attachProtoListener("face_landmarks",(s,r)=>{Nu(s,this.i.faceLandmarks),Ct(this,r)}),this.h.attachEmptyPacketListener("face_landmarks",s=>{Ct(this,s)}),this.outputFaceBlendshapes&&(Pe(i,"extra_blendshapes"),xe(n,"FACE_BLENDSHAPES:extra_blendshapes"),this.h.attachProtoListener("extra_blendshapes",(s,r)=>{var a=this.i.faceBlendshapes;this.outputFaceBlendshapes&&(s=wd(s),a.push(Vm(s.h()??[]))),Ct(this,r)}),this.h.attachEmptyPacketListener("extra_blendshapes",s=>{Ct(this,s)})),this.h.attachProtoListener("left_hand_landmarks",(s,r)=>{Nu(s,this.i.leftHandLandmarks),Ct(this,r)}),this.h.attachEmptyPacketListener("left_hand_landmarks",s=>{Ct(this,s)}),this.h.attachProtoListener("left_hand_world_landmarks",(s,r)=>{var a=this.i.leftHandWorldLandmarks;s=ja(s),a.push(Qa(s)),Ct(this,r)}),this.h.attachEmptyPacketListener("left_hand_world_landmarks",s=>{Ct(this,s)}),this.h.attachProtoListener("right_hand_landmarks",(s,r)=>{Nu(s,this.i.rightHandLandmarks),Ct(this,r)}),this.h.attachEmptyPacketListener("right_hand_landmarks",s=>{Ct(this,s)}),this.h.attachProtoListener("right_hand_world_landmarks",(s,r)=>{var a=this.i.rightHandWorldLandmarks;s=ja(s),a.push(Qa(s)),Ct(this,r)}),this.h.attachEmptyPacketListener("right_hand_world_landmarks",s=>{Ct(this,s)}),i=i.h(),this.setGraph(new Uint8Array(i),!0)}};ge.prototype.detectForVideo=ge.prototype.I,ge.prototype.detect=ge.prototype.H,ge.prototype.setOptions=ge.prototype.A,ge.createFromModelPath=function(i,t){return Me(ge,i,{baseOptions:{modelAssetPath:t}})},ge.createFromModelBuffer=function(i,t){return Me(ge,i,{baseOptions:{modelAssetBuffer:t}})},ge.createFromOptions=function(i,t){return Me(ge,i,t)},ge.HAND_CONNECTIONS=e0,He("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.HAND_CONNECTIONS",ge.HAND_CONNECTIONS),ge.POSE_CONNECTIONS=xy,He("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.POSE_CONNECTIONS",ge.POSE_CONNECTIONS),ge.FACE_LANDMARKS_LIPS=Km,He("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LIPS",ge.FACE_LANDMARKS_LIPS),ge.FACE_LANDMARKS_LEFT_EYE=Zm,He("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYE",ge.FACE_LANDMARKS_LEFT_EYE),ge.FACE_LANDMARKS_LEFT_EYEBROW=Jm,He("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",ge.FACE_LANDMARKS_LEFT_EYEBROW),ge.FACE_LANDMARKS_LEFT_IRIS=my,He("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_IRIS",ge.FACE_LANDMARKS_LEFT_IRIS),ge.FACE_LANDMARKS_RIGHT_EYE=jm,He("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYE",ge.FACE_LANDMARKS_RIGHT_EYE),ge.FACE_LANDMARKS_RIGHT_EYEBROW=Qm,He("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",ge.FACE_LANDMARKS_RIGHT_EYEBROW),ge.FACE_LANDMARKS_RIGHT_IRIS=gy,He("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_IRIS",ge.FACE_LANDMARKS_RIGHT_IRIS),ge.FACE_LANDMARKS_FACE_OVAL=t0,He("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_FACE_OVAL",ge.FACE_LANDMARKS_FACE_OVAL),ge.FACE_LANDMARKS_CONTOURS=_y,He("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_CONTOURS",ge.FACE_LANDMARKS_CONTOURS),ge.FACE_LANDMARKS_TESSELATION=vy,He("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_TESSELATION",ge.FACE_LANDMARKS_TESSELATION);var Sn=class extends dn{constructor(i,t){super(new Gn(i,t),"input_image","norm_rect",!0),this.m={classifications:[]},kt(i=this.i=new Yx,0,1,t=new Je)}D(){return"ImageClassifier"}get baseOptions(){return Ae(this.i,Je,1)}set baseOptions(i){kt(this.i,0,1,i)}A(i){return kt(this.i,0,2,Wp(i,Ae(this.i,Um,2))),this.l(i)}Ga(i,t){return this.m={classifications:[]},Hn(this,i,t),this.m}Ha(i,t,e){return this.m={classifications:[]},us(this,i,e,t),this.m}u(){var i=new pn;Ze(i,"input_image"),Ze(i,"norm_rect"),Pe(i,"classifications");var t=new fn;cs(t,Sw,this.i);var e=new tn;un(e,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Xe(e,"IMAGE:input_image"),Xe(e,"NORM_RECT:norm_rect"),xe(e,"CLASSIFICATIONS:classifications"),e.A(t),Tn(i,e),this.h.attachProtoListener("classifications",(n,s)=>{this.m=Iw(ow(n)),Ct(this,s)}),this.h.attachEmptyPacketListener("classifications",n=>{Ct(this,n)}),i=i.h(),this.setGraph(new Uint8Array(i),!0)}};Sn.prototype.classifyForVideo=Sn.prototype.Ha,Sn.prototype.classify=Sn.prototype.Ga,Sn.prototype.setOptions=Sn.prototype.A,Sn.createFromModelPath=function(i,t){return Me(Sn,i,{baseOptions:{modelAssetPath:t}})},Sn.createFromModelBuffer=function(i,t){return Me(Sn,i,{baseOptions:{modelAssetBuffer:t}})},Sn.createFromOptions=function(i,t){return Me(Sn,i,t)};var cn=class extends dn{constructor(i,t){super(new Gn(i,t),"image_in","norm_rect",!0),this.i=new Kx,this.embeddings={embeddings:[]},kt(i=this.i,0,1,t=new Je)}D(){return"ImageEmbedder"}get baseOptions(){return Ae(this.i,Je,1)}set baseOptions(i){kt(this.i,0,1,i)}A(i){var t=this.i,e=Ae(this.i,E1,2);if(e=e?e.clone():new E1,i.l2Normalize!==void 0){var n=i.l2Normalize;ne(e,1,n==null?n:qu(n))}else"l2Normalize"in i&&ne(e,1);return i.quantize!==void 0?ne(e,2,(n=i.quantize)==null?n:qu(n)):"quantize"in i&&ne(e,2),kt(t,0,2,e),this.l(i)}Na(i,t){return Hn(this,i,t),this.embeddings}Oa(i,t,e){return us(this,i,e,t),this.embeddings}u(){var i=new pn;Ze(i,"image_in"),Ze(i,"norm_rect"),Pe(i,"embeddings_out");var t=new fn;cs(t,Mw,this.i);var e=new tn;un(e,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Xe(e,"IMAGE:image_in"),Xe(e,"NORM_RECT:norm_rect"),xe(e,"EMBEDDINGS:embeddings_out"),e.A(t),Tn(i,e),this.h.attachProtoListener("embeddings_out",(n,s)=>{n=uw(n),this.embeddings=(function(r){return{embeddings:jr(r,hw,1).map(a=>{var o={headIndex:bn(a,3)??0??-1,headName:Ii(We(a,4))??""??""};if(Ov(a,1,ku))a=zr(a=Np(a,lw,1,ku),1,hn),o.floatEmbedding=a.slice();else{let l=new Uint8Array(0);o.quantizedEmbedding=Np(a,cw,2,ku)?.h()?.i()??l}return o}),timestampMs:iy(We(r,2,void 0,Yu)??Fv)}})(n),Ct(this,s)}),this.h.attachEmptyPacketListener("embeddings_out",n=>{Ct(this,n)}),i=i.h(),this.setGraph(new Uint8Array(i),!0)}};cn.cosineSimilarity=function(i,t){if(i.floatEmbedding&&t.floatEmbedding)i=C1(i.floatEmbedding,t.floatEmbedding);else{if(!i.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");i=C1(R1(i.quantizedEmbedding),R1(t.quantizedEmbedding))}return i},cn.prototype.embedForVideo=cn.prototype.Oa,cn.prototype.embed=cn.prototype.Na,cn.prototype.setOptions=cn.prototype.A,cn.createFromModelPath=function(i,t){return Me(cn,i,{baseOptions:{modelAssetPath:t}})},cn.createFromModelBuffer=function(i,t){return Me(cn,i,{baseOptions:{modelAssetBuffer:t}})},cn.createFromOptions=function(i,t){return Me(cn,i,t)};var tm=class{constructor(i,t,e){this.confidenceMasks=i,this.categoryMask=t,this.qualityScores=e}close(){this.confidenceMasks?.forEach(i=>{i.close()}),this.categoryMask?.close()}};function Kw(i){var t=(function(e){return jr(e,tn,1)})(i.ka()).filter(e=>(Ii(We(e,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(i.v=[],t.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&(Ae(t[0],fn,7)?.u()?.h()??new Map).forEach((e,n)=>{i.v[Number(n)]=Ii(We(e,1))??""})}function av(i){i.categoryMask=void 0,i.confidenceMasks=void 0,i.qualityScores=void 0}function ov(i){try{let t=new tm(i.confidenceMasks,i.categoryMask,i.qualityScores);if(!i.m)return t;i.m(t)}finally{Cd(i)}}tm.prototype.close=tm.prototype.close;var Ji=class extends dn{constructor(i,t){super(new Gn(i,t),"image_in","norm_rect",!1),this.v=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.i=new Hm,this.C=new Zx,kt(this.i,0,3,this.C),kt(i=this.i,0,1,t=new Je)}D(){return"ImageSegmenter"}get baseOptions(){return Ae(this.i,Je,1)}set baseOptions(i){kt(this.i,0,1,i)}A(i){return i.displayNamesLocale!==void 0?ne(this.i,2,Us(i.displayNamesLocale)):"displayNamesLocale"in i&&ne(this.i,2),"outputCategoryMask"in i&&(this.outputCategoryMask=i.outputCategoryMask??!1),"outputConfidenceMasks"in i&&(this.outputConfidenceMasks=i.outputConfidenceMasks??!0),super.l(i)}M(){Kw(this)}segment(i,t,e){var n=typeof t!="function"?t:{};return this.m=typeof t=="function"?t:e,av(this),Hn(this,i,n),ov(this)}cb(i,t,e,n){var s=typeof e!="function"?e:{};return this.m=typeof e=="function"?e:n,av(this),us(this,i,s,t),ov(this)}Ra(){return this.v}u(){var i=new pn;Ze(i,"image_in"),Ze(i,"norm_rect");var t=new fn;cs(t,jx,this.i);var e=new tn;un(e,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Xe(e,"IMAGE:image_in"),Xe(e,"NORM_RECT:norm_rect"),e.A(t),Tn(i,e),Rd(this,i),this.outputConfidenceMasks&&(Pe(i,"confidence_masks"),xe(e,"CONFIDENCE_MASKS:confidence_masks"),lo(this,"confidence_masks"),this.h.ia("confidence_masks",(n,s)=>{this.confidenceMasks=n.map(r=>uo(this,r,!0,!this.m)),Ct(this,s)}),this.h.attachEmptyPacketListener("confidence_masks",n=>{this.confidenceMasks=[],Ct(this,n)})),this.outputCategoryMask&&(Pe(i,"category_mask"),xe(e,"CATEGORY_MASK:category_mask"),lo(this,"category_mask"),this.h.ha("category_mask",(n,s)=>{this.categoryMask=uo(this,n,!1,!this.m),Ct(this,s)}),this.h.attachEmptyPacketListener("category_mask",n=>{this.categoryMask=void 0,Ct(this,n)})),Pe(i,"quality_scores"),xe(e,"QUALITY_SCORES:quality_scores"),this.h.attachFloatVectorListener("quality_scores",(n,s)=>{this.qualityScores=n,Ct(this,s)}),this.h.attachEmptyPacketListener("quality_scores",n=>{this.categoryMask=void 0,Ct(this,n)}),i=i.h(),this.setGraph(new Uint8Array(i),!0)}};Ji.prototype.getLabels=Ji.prototype.Ra,Ji.prototype.segmentForVideo=Ji.prototype.cb,Ji.prototype.segment=Ji.prototype.segment,Ji.prototype.setOptions=Ji.prototype.A,Ji.createFromModelPath=function(i,t){return Me(Ji,i,{baseOptions:{modelAssetPath:t}})},Ji.createFromModelBuffer=function(i,t){return Me(Ji,i,{baseOptions:{modelAssetBuffer:t}})},Ji.createFromOptions=function(i,t){return Me(Ji,i,t)};var Zw={0:0,1:1,2:2,3:3};function Tp(){return Wm()?void 0:document.createElement("canvas")}var ji=class extends ld{constructor(i,t){super(new Vw(i,t)),this.v=new ta,this.delegate="CPU",this.i=0,this.baseOptions=new Je,this.C=this.m=0}D(){return"InteractiveSegmenter"}get j(){return this.h.j}A(i){return this.delegate=i.baseOptions?.delegate??"CPU",super.l(i)}eb(i){if(this.i===0)throw Error("Segmenter is not initialized.");var t;if(this.m!==0&&(this.j._free(this.m),this.m=0),!(t=typeof ImageData<"u"&&i instanceof ImageData))if(typeof i!="object"||i===null)t=!1;else{t=i.data;var e=i.width,n=i.height;t=Number.isInteger(e)&&e>0&&Number.isInteger(n)&&n>0&&(t instanceof Uint8ClampedArray||t instanceof Uint8Array)}if(t)t=i.width,e=i.height,i=i.data;else{if([t,e]=Xm(i),typeof OffscreenCanvas<"u")n=new OffscreenCanvas(t,e);else{if(typeof document>"u")throw Error("Canvas is not supported in this environment.");n=document.createElement("canvas")}if(n.width=t,n.height=e,!(n=n.getContext("2d")))throw Error("Canvas 2D context is not supported in this environment.");n.drawImage(i,0,0),i=n.getImageData(0,0,t,e).data}if(!i)throw Error("Unsupported image source or failed to extract image pixels.");n=(function({Wa:r,width:a,height:o}){if(a<=0||o<=0)throw Error(`Invalid image dimensions: ${a}x${o}. Dimensions must be positive.`);if(r%(a*o)!==0)throw Error(`Invalid image dimensions or pixel data length. Pixel data length ${r} is not a multiple of the number of pixels (${a*o}).`);if((r/=a*o)!==4&&r!==3&&r!==1)throw Error(`Invalid image dimensions or pixel data length. Calculated channels: ${r}. Expected 1, 3, or 4.`);return r})({Wa:i.length,width:t,height:e});var s=this.j._malloc(i.length);if(this.j.HEAPU8.set(i,s),this.m=s,!this.j._interactive_segmenter_set_image(this.i,s,t,e,n))throw Error("Failed to set image on native engine.")}segment(i){if(this.i===0)throw Error("Segmenter is not initialized.");var t=(function(c){c=c.map(({isCompleted:f,brushMode:u,point:d})=>{u=Zw[u]??0,d=d.map(({x:v,y:m})=>{var g=new Ew;return Za(g,1,v),Za(g,2,m),g});var p=new Tw;return Fp(p,f),ec(p,1,Bs(u),0),Dp(p,2,d),p});var h=new ww;return Dp(h,1,c),Aw(h)})(i);i=this.j._malloc(t.length),this.j.HEAPU8.set(t,i);var e=this.j._malloc(12),n=e+4,s=e+8,r=0,a=this.C++;try{if(this.o)if(this.delegate==="GPU"){var o=this.o;++o.h.U,o.i.set(a,performance.now())}else{var l=this.o;++l.h.R,l.i.set(a,performance.now())}if((r=this.j._interactive_segmenter_segment(this.i,i,t.length,e,n,s))===0)throw Error("Segmentation failed.");this.o?.za(a);let c=this.j.HEAPU32[e/4],h=this.j.HEAPU32[n/4],f=new Float32Array(this.j.HEAPU8.buffer,r,this.j.HEAPU32[s/4]/4),u=new Float32Array(f);if(o=c*h,(u instanceof Uint8Array||u instanceof Float32Array)&&u.length!==o)throw Error("Unsupported channel count: "+u.length/o);return new ai([u],!0,!1,this.h.j.canvas??void 0,this.v,c,h)}finally{i!==0&&this.j._free(i),e!==0&&this.j._free(e),r!==0&&this.j._free(r)}}u(){this.i!==0&&(this.o?.xa(),this.j._interactive_segmenter_close(this.i),this.i=0),this.m!==0&&(this.j._free(this.m),this.m=0);var i=new sd;if(this.delegate==="GPU"){var t=new Ex;On(i,2,Os,t)}else os(t=new JT,1,4),On(i,1,Os,t);if(kt(this.baseOptions,0,3,i),i=fw(this.baseOptions),t=this.j._malloc(i.length),this.j.HEAPU8.set(i,t),this.i=this.j._interactive_segmenter_create(t,i.length),this.j._free(t),this.i===0)throw Error("Failed to create native InteractiveSegmenter engine.");this.o?.ya()}close(){this.i!==0&&(this.j._interactive_segmenter_close(this.i),this.i=0),this.m!==0&&(this.j._free(this.m),this.m=0),this.v.close(),super.close()}};ji.prototype.close=ji.prototype.close,ji.prototype.segment=ji.prototype.segment,ji.prototype.setImage=ji.prototype.eb,ji.prototype.setOptions=ji.prototype.A,ji.createFromModelPath=function(i,t){return zu(ji,Tp(),i,{baseOptions:{modelAssetPath:t}})},ji.createFromModelBuffer=function(i,t){return zu(ji,Tp(),i,{baseOptions:{modelAssetBuffer:t}})},ji.createFromOptions=function(i,t){var e=t.canvas??Tp();return zu(ji,e,i,t)};var em=class{constructor(i,t,e){this.confidenceMasks=i,this.categoryMask=t,this.qualityScores=e}close(){this.confidenceMasks?.forEach(i=>{i.close()}),this.categoryMask?.close()}};em.prototype.close=em.prototype.close;var es=class extends dn{constructor(i,t){super(new Gn(i,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.i=new Hm,this.v=new Zx,kt(this.i,0,3,this.v),kt(i=this.i,0,1,t=new Je)}D(){return"InteractiveSegmenterLegacy"}get baseOptions(){return Ae(this.i,Je,1)}set baseOptions(i){kt(this.i,0,1,i)}A(i){return"outputCategoryMask"in i&&(this.outputCategoryMask=i.outputCategoryMask??!1),"outputConfidenceMasks"in i&&(this.outputConfidenceMasks=i.outputConfidenceMasks??!0),super.l(i)}segment(i,t,e,n){var s=typeof e!="function"?e:{};if(this.m=typeof e=="function"?e:n,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,e=this.J+1,n=new Qx,t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var r=new Mp;Fp(r,!0),Za(r,1,t.keypoint.x),Za(r,2,t.keypoint.y),On(n,1,Vp,r)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");{let o=new Rw;for(r of t.scribble)Fp(t=new Mp,!0),Za(t,1,r.x),Za(t,2,r.y),Kl(o,1,Mp,t);On(n,2,Vp,o)}}this.h.addProtoToStream(n.h(),"mediapipe.tasks.vision.interactive_segmenter_legacy.proto.RegionOfInterest","roi_in",e),Hn(this,i,s);t:{try{let o=new em(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.m){var a=o;break t}this.m(o)}finally{Cd(this)}a=void 0}return a}u(){var i=new pn;Ze(i,"image_in"),Ze(i,"roi_in"),Ze(i,"norm_rect_in");var t=new fn;cs(t,jx,this.i);var e=new tn;un(e,2,"mediapipe.tasks.vision.interactive_segmenter_legacy.InteractiveSegmenterLegacyGraph"),Xe(e,"IMAGE:image_in"),Xe(e,"ROI:roi_in"),Xe(e,"NORM_RECT:norm_rect_in"),e.A(t),Tn(i,e),Rd(this,i),this.outputConfidenceMasks&&(Pe(i,"confidence_masks"),xe(e,"CONFIDENCE_MASKS:confidence_masks"),lo(this,"confidence_masks"),this.h.ia("confidence_masks",(n,s)=>{this.confidenceMasks=n.map(r=>uo(this,r,!0,!this.m)),Ct(this,s)}),this.h.attachEmptyPacketListener("confidence_masks",n=>{this.confidenceMasks=[],Ct(this,n)})),this.outputCategoryMask&&(Pe(i,"category_mask"),xe(e,"CATEGORY_MASK:category_mask"),lo(this,"category_mask"),this.h.ha("category_mask",(n,s)=>{this.categoryMask=uo(this,n,!1,!this.m),Ct(this,s)}),this.h.attachEmptyPacketListener("category_mask",n=>{this.categoryMask=void 0,Ct(this,n)})),Pe(i,"quality_scores"),xe(e,"QUALITY_SCORES:quality_scores"),this.h.attachFloatVectorListener("quality_scores",(n,s)=>{this.qualityScores=n,Ct(this,s)}),this.h.attachEmptyPacketListener("quality_scores",n=>{this.categoryMask=void 0,Ct(this,n)}),i=i.h(),this.setGraph(new Uint8Array(i),!0)}};es.prototype.segment=es.prototype.segment,es.prototype.setOptions=es.prototype.A,es.createFromModelPath=function(i,t){return Me(es,i,{baseOptions:{modelAssetPath:t}})},es.createFromModelBuffer=function(i,t){return Me(es,i,{baseOptions:{modelAssetBuffer:t}})},es.createFromOptions=function(i,t){return Me(es,i,t)};var Mn=class extends dn{constructor(i,t){super(new Gn(i,t),"input_frame_gpu","norm_rect",!1),this.m={detections:[]},kt(i=this.i=new ty,0,1,t=new Je)}D(){return"ObjectDetector"}get baseOptions(){return Ae(this.i,Je,1)}set baseOptions(i){kt(this.i,0,1,i)}A(i){return i.displayNamesLocale!==void 0?ne(this.i,2,Us(i.displayNamesLocale)):"displayNamesLocale"in i&&ne(this.i,2),i.maxResults!==void 0?os(this.i,3,i.maxResults):"maxResults"in i&&ne(this.i,3),i.scoreThreshold!==void 0?Wt(this.i,4,i.scoreThreshold):"scoreThreshold"in i&&ne(this.i,4),i.categoryAllowlist!==void 0?Zu(this.i,5,i.categoryAllowlist):"categoryAllowlist"in i&&ne(this.i,5),i.categoryDenylist!==void 0?Zu(this.i,6,i.categoryDenylist):"categoryDenylist"in i&&ne(this.i,6),this.l(i)}H(i,t){return this.m={detections:[]},Hn(this,i,t),this.m}I(i,t,e){return this.m={detections:[]},us(this,i,e,t),this.m}u(){var i=new pn;Ze(i,"input_frame_gpu"),Ze(i,"norm_rect"),Pe(i,"detections");var t=new fn;cs(t,Cw,this.i);var e=new tn;un(e,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),Xe(e,"IMAGE:input_frame_gpu"),Xe(e,"NORM_RECT:norm_rect"),xe(e,"DETECTIONS:detections"),e.A(t),Tn(i,e),this.h.attachProtoVectorListener("detections",(n,s)=>{for(let r of n)n=Nx(r),this.m.detections.push(ny(n));Ct(this,s)}),this.h.attachEmptyPacketListener("detections",n=>{Ct(this,n)}),i=i.h(),this.setGraph(new Uint8Array(i),!0)}};Mn.prototype.detectForVideo=Mn.prototype.I,Mn.prototype.detect=Mn.prototype.H,Mn.prototype.setOptions=Mn.prototype.A,Mn.createFromModelPath=async function(i,t){return Me(Mn,i,{baseOptions:{modelAssetPath:t}})},Mn.createFromModelBuffer=function(i,t){return Me(Mn,i,{baseOptions:{modelAssetBuffer:t}})},Mn.createFromOptions=function(i,t){return Me(Mn,i,t)};var im=class{constructor(i,t,e){this.landmarks=i,this.worldLandmarks=t,this.segmentationMasks=e}close(){this.segmentationMasks?.forEach(i=>{i.close()})}};function lv(i){i.landmarks=[],i.worldLandmarks=[],i.segmentationMasks=void 0}function cv(i){try{let t=new im(i.landmarks,i.worldLandmarks,i.segmentationMasks);if(!i.v)return t;i.v(t)}finally{Cd(i)}}im.prototype.close=im.prototype.close;var Qi=class extends dn{constructor(i,t){super(new Gn(i,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,kt(i=this.i=new ey,0,1,t=new Je),this.C=new qx,kt(this.i,0,3,this.C),this.m=new Xx,kt(this.i,0,2,this.m),os(this.m,4,1),Wt(this.m,2,.5),Wt(this.C,2,.5),Wt(this.i,4,.5)}D(){return"PoseLandmarker"}get baseOptions(){return Ae(this.i,Je,1)}set baseOptions(i){kt(this.i,0,1,i)}A(i){return"numPoses"in i&&os(this.m,4,i.numPoses??1),"minPoseDetectionConfidence"in i&&Wt(this.m,2,i.minPoseDetectionConfidence??.5),"minTrackingConfidence"in i&&Wt(this.i,4,i.minTrackingConfidence??.5),"minPosePresenceConfidence"in i&&Wt(this.C,2,i.minPosePresenceConfidence??.5),"outputSegmentationMasks"in i&&(this.outputSegmentationMasks=i.outputSegmentationMasks??!1),this.l(i)}H(i,t,e){var n=typeof t!="function"?t:{};return this.v=typeof t=="function"?t:e,lv(this),Hn(this,i,n),cv(this)}I(i,t,e,n){var s=typeof e!="function"?e:{};return this.v=typeof e=="function"?e:n,lv(this),us(this,i,s,t),cv(this)}u(){var i=new pn;Ze(i,"image_in"),Ze(i,"norm_rect"),Pe(i,"normalized_landmarks"),Pe(i,"world_landmarks"),Pe(i,"segmentation_masks");var t=new fn;cs(t,Pw,this.i);var e=new tn;un(e,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Xe(e,"IMAGE:image_in"),Xe(e,"NORM_RECT:norm_rect"),xe(e,"NORM_LANDMARKS:normalized_landmarks"),xe(e,"WORLD_LANDMARKS:world_landmarks"),e.A(t),Tn(i,e),Rd(this,i),this.h.attachProtoVectorListener("normalized_landmarks",(n,s)=>{this.landmarks=[];for(let r of n)n=oc(r),this.landmarks.push(lc(n));Ct(this,s)}),this.h.attachEmptyPacketListener("normalized_landmarks",n=>{this.landmarks=[],Ct(this,n)}),this.h.attachProtoVectorListener("world_landmarks",(n,s)=>{this.worldLandmarks=[];for(let r of n)n=ja(r),this.worldLandmarks.push(Qa(n));Ct(this,s)}),this.h.attachEmptyPacketListener("world_landmarks",n=>{this.worldLandmarks=[],Ct(this,n)}),this.outputSegmentationMasks&&(xe(e,"SEGMENTATION_MASK:segmentation_masks"),lo(this,"segmentation_masks"),this.h.ia("segmentation_masks",(n,s)=>{this.segmentationMasks=n.map(r=>uo(this,r,!0,!this.v)),Ct(this,s)}),this.h.attachEmptyPacketListener("segmentation_masks",n=>{this.segmentationMasks=[],Ct(this,n)})),i=i.h(),this.setGraph(new Uint8Array(i),!0)}};Qi.prototype.detectForVideo=Qi.prototype.I,Qi.prototype.detect=Qi.prototype.H,Qi.prototype.setOptions=Qi.prototype.A,Qi.createFromModelPath=function(i,t){return Me(Qi,i,{baseOptions:{modelAssetPath:t}})},Qi.createFromModelBuffer=function(i,t){return Me(Qi,i,{baseOptions:{modelAssetBuffer:t}})},Qi.createFromOptions=function(i,t){return Me(Qi,i,t)},Qi.POSE_CONNECTIONS=xy,He("module$exports$google3$third_party$mediapipe$tasks$web$vision$pose_landmarker$pose_landmarker.PoseLandmarker.POSE_CONNECTIONS",Qi.POSE_CONNECTIONS);var Jw=[[6,8],[10,12],[14,16],[18,20]],Ld=class{constructor({video:t,wasmBase:e,model:n,onStatus:s}={}){this.video=t,this.wasmBase=e||"assets/mediapipe/wasm",this.modelUrl=n||"assets/mediapipe/hand_landmarker.task",this.onStatus=s||(()=>{}),this.landmarker=null,this.stream=null,this.running=!1,this.detecting=!1,this.lastVideoTime=-1,this.lastDetectAt=0,this.detectInterval=1e3/32,this.sensitivity=1,this.present=0,this.pinch=!1,this.pinchRatio=1,this.raw={x:.5,y:.5,palm:.1},this.sx=0,this.sy=0,this.velocity=0,this.energy=0,this.twoHands=0,this.fps=0,this._lastX=null,this._lastY=null,this._lastT=0,this._detectFrames=0,this._detectFpsT=0,this._raf=0,this._fpsSmooth=0,this.landmarks=null,this.handedness="",this.handIndex=-1,this.fingers=0,this.openHold=0,this.fist=!1,this.gesture="none",this.pinchTap=null,this.pinchHold=0,this.pinchMoved=0,this._pinchPrev=!1,this._pinchStartAt=0,this._pinchAnchor={x:.5,y:.5},this._tapPending=null}async start(){this.onStatus({state:"loading",text:"正在加载手势模型（首次约 10MB）…"});try{await this._openCamera(),await this._createLandmarker()}catch(t){return console.warn("[hands] 启动失败",t),this.onStatus({state:"error",text:this._friendlyError(t),error:t}),this.stop(),!1}return this.running=!0,this.onStatus({state:"ready",text:"手势已开启 · 手掌靠近试试"}),this._loop(),!0}async _openCamera(){if(!navigator.mediaDevices?.getUserMedia)throw new Error("当前环境不支持摄像头（需 https 或 localhost）");this.stream=await navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user",width:{ideal:960},height:{ideal:720},frameRate:{ideal:30,max:60}}}),this.video.srcObject=this.stream,this.video.muted=!0,this.video.playsInline=!0,await this.video.play(),this.video.videoWidth===0&&await new Promise(t=>{let e=()=>t();this.video.addEventListener("loadeddata",e,{once:!0}),setTimeout(e,2500)})}async _createLandmarker(){let t,e=this.modelUrl,n=window.__AURORA_MP_EMBEDDED__;if(n){let r=o=>{if(!o)return"";if(o.startsWith("data:"))return o.slice(o.indexOf(",")+1);let l=document.getElementById(o);return(l?l.textContent:"").replace(/\s+/g,"")},a=(o,l)=>{let c=r(o),h=atob(c),f=new Uint8Array(h.length);for(let u=0;u<h.length;u++)f[u]=h.charCodeAt(u);return URL.createObjectURL(new Blob([f],{type:l}))};t={wasmLoaderPath:a(n.loader,"text/javascript"),wasmBinaryPath:a(n.wasm,"application/wasm")},e=a(n.task,"application/octet-stream")}else t=await Ds.forVisionTasks(this.wasmBase);let s=r=>Bi.createFromOptions(t,{baseOptions:{modelAssetPath:e,delegate:r},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.45,minHandPresenceConfidence:.4,minTrackingConfidence:.4});try{this.landmarker=await s("GPU")}catch(r){console.warn("[hands] GPU 不可用，回退 CPU",r),this.onStatus({state:"loading",text:"GPU 不可用 · 切换 CPU 模式"}),this.landmarker=await s("CPU")}}_friendlyError(t){let e=t?.name||"";return e==="NotAllowedError"||e==="PermissionDeniedError"?"摄像头权限被拒绝 · 可改用鼠标模式":e==="NotFoundError"?"没有找到摄像头 · 可改用鼠标模式":e==="NotReadableError"?"摄像头被其他程序占用 · 可改用鼠标模式":"手势启动失败 · 可改用鼠标模式"}setSensitivity(t){this.sensitivity=ie(t,.6,1.6)}_loop(){let t=()=>{this.running&&(this._raf=requestAnimationFrame(t),this._detect())};this._raf=requestAnimationFrame(t)}_detect(){let t=this.video;if(!this.landmarker||!t||t.readyState<2)return;let e=performance.now();if(e-this.lastDetectAt<this.detectInterval||t.currentTime===this.lastVideoTime)return;this.lastVideoTime=t.currentTime,this.lastDetectAt=e;let n=null;try{n=this.landmarker.detectForVideo(t,e)}catch(M){console.warn("[hands] detect 失败",M);return}let s=n?.landmarks?.length||0;if(this.twoHands=s,!s){this._hasHand=!1,this.landmarks=null,this.handedness="",this.fist=!1,this.openHold=0,this._openSince=0,this._fistSince=0,this._fistFrames=0,this._pinchPrev=!1,this._pinchStartAt=0,this.pinch=!1;return}this._hasHand=!0;let r=null,a=-1,o=0;for(let M=0;M<n.landmarks.length;M++){let F=n.landmarks[M],R=Math.hypot(F[0].x-F[9].x,F[0].y-F[9].y);R>a&&(a=R,r=F,o=M)}if(!r)return;let l=r;this.landmarks=l,this.handIndex=o,this.handedness=n.handedness?.[o]?.categoryName||"";let c=(l[0].x+l[5].x+l[9].x+l[13].x+l[17].x)/5,h=(l[0].y+l[5].y+l[9].y+l[13].y+l[17].y)/5,f=Math.hypot(l[0].x-l[9].x,l[0].y-l[9].y)+1e-5,u=l[4],d=l[8],v=Math.hypot(u.x-d.x,u.y-d.y)/f,m=e;this.pinch?v>.6?(this._pinchOffAt||(this._pinchOffAt=m),m-this._pinchOffAt>60&&(this.pinch=!1,this._pinchOffAt=0)):this._pinchOffAt=0:v<.35?(this._pinchOnAt||(this._pinchOnAt=m),m-this._pinchOnAt>60&&(this.pinch=!0,this._pinchOnAt=0)):this._pinchOnAt=0;let g=0;for(let[M,F]of Jw){let R=Math.hypot(l[M].x-l[0].x,l[M].y-l[0].y);Math.hypot(l[F].x-l[0].x,l[F].y-l[0].y)>R*1.08&&g++}this.fingers=g;let b=g>=4,E=g<=1;b?this._openSince||(this._openSince=m):this._openSince=0,this.openHold=this._openSince?m-this._openSince:0,E?(this._fistSince||(this._fistSince=m),this._fistFrames=(this._fistFrames||0)+1):(this._fistSince=0,this._fistFrames=0),this.fist=E&&this._fistFrames>=3&&this._fistSince&&m-this._fistSince>120;let y=this.pinch?(u.x+d.x)/2:c,w=this.pinch?(u.y+d.y)/2:h,T=1.28*this.sensitivity;this.raw.x=ie(.5+(1-y-.5)*T,-.15,1.15),this.raw.y=ie(.5+(w-.5)*T,-.15,1.15),this.raw.palm=f,this.pinchRatio=v,this.proximity=Ps(.055,.2,f);let _=this.pinch;_&&!this._pinchPrev?(this._pinchStartAt=m,this._pinchAnchor.x=this.raw.x,this._pinchAnchor.y=this.raw.y,this.pinchMoved=0):_&&this._pinchPrev?this.pinchMoved=Math.max(this.pinchMoved,Math.hypot(this.raw.x-this._pinchAnchor.x,this.raw.y-this._pinchAnchor.y)):!_&&this._pinchPrev&&this._pinchStartAt&&(m-this._pinchStartAt<420&&this.pinchMoved<.055&&(this._tapPending={x:this.raw.x,y:this.raw.y,at:m}),this._pinchStartAt=0),this.pinchHold=_&&this._pinchStartAt?m-this._pinchStartAt:0,this._pinchPrev=_}update(t,e,n){let s=this.running&&this._hasHand;this.present=Be(this.present,s?1:0,s?7:4.5,t);let r=this.raw.x*e,a=this.raw.y*n;this._lastX==null&&(this.sx=r,this.sy=a,this._lastX=r,this._lastY=a),this.sx=Be(this.sx,r,16,t),this.sy=Be(this.sy,a,16,t);let o=performance.now(),l=Math.max(1/120,(o-(this._lastT||o))/1e3),c=Math.hypot(this.sx-this._lastX,this.sy-this._lastY)/l;this.velocity=Be(this.velocity,c,8,t),this._lastX=this.sx,this._lastY=this.sy,this._lastT=o;let h=ie(this.velocity/900),f=s?ie(.35+h*.65+(this.pinch?.15:0)):0;this.energy=Be(this.energy,f,6,t),this.fps=Be(this.fps,this.twoHands?30:0,3,t);let u=null;this._tapPending&&(o-this._tapPending.at<500&&(u={x:this._tapPending.x,y:this._tapPending.y}),this._tapPending=null);let d=s?this.pinch?"pinch":this.fist?"fist":this.openHold>150?"open":"hand":"none";return this.gesture=d,{active:this.present>.12,present:this.present,x:this.sx,y:this.sy,pinch:this.pinch&&this.present>.3,openPalm:s?ie(this.openHold/220):0,fist:!!(this.fist&&s),fingers:this.fingers||0,energy:this.energy,proximity:this.proximity||0,hands:this.twoHands,velocity:this.velocity,landmarks:s?this.landmarks:null,handedness:this.handedness,gesture:d,pinchHold:this.pinchHold,pinchTap:s&&this.present>.3?u:null}}getWorldPosition(t,e={x:0,y:0,z:0}){let n=this.sx/Math.max(1,t.width)*2-1,s=-(this.sy/Math.max(1,t.height)*2-1),r=8.2,a=2*r*Math.tan(t.camera.fov*Math.PI/360),o=a*t.camera.aspect;return e.x=t.camera.position.x+n*o/2,e.y=t.camera.position.y+s*a/2,e.z=t.camera.position.z-r,e}stop(){if(this.running=!1,this._raf&&cancelAnimationFrame(this._raf),this._raf=0,this.stream){for(let t of this.stream.getTracks())t.stop();this.stream=null}if(this.video&&(this.video.srcObject=null),this.landmarker){try{this.landmarker.close()}catch{}this.landmarker=null}this._hasHand=!1,this.present=0,this.landmarks=null,this.handedness="",this.gesture="none",this.pinchTap=null,this.fist=!1}};var ut=i=>document.getElementById(i);function jw(i){let t=["零","一","二","三","四","五","六","七","八","九"];return!Number.isFinite(i)||i<0?String(i):i<10?t[i]:i<20?"十"+(i%10?t[i%10]:""):i<100?t[Math.floor(i/10)]+"十"+(i%10?t[i%10]:""):String(i)}var Dd=class{constructor(){this.handlers=new Map;let t=location.hostname;this.isFile=location.protocol==="file:",this.isLocalServer=!this.isFile&&(t==="localhost"||t==="127.0.0.1"||t==="[::1]"),this.isPublic=!this.isFile&&!this.isLocalServer,this.app=ut("app"),this.loadingScreen=ut("loadingScreen"),this.loadingBar=ut("loadingBar"),this.loadingTip=ut("loadingTip"),this.toastEl=ut("toast"),this.toastTimer=0,this.settingsEl=ut("settingsPanel"),this.startOverlay=ut("startOverlay"),this.viewerEl=ut("photoViewer"),this.helpEl=ut("helpPanel"),this.handCursor=ut("handCursor"),this.rippleLayer=ut("rippleLayer"),this.cd={year:ut("cdYear"),days:ut("cdDays"),hours:ut("cdHours"),mins:ut("cdMins"),secs:ut("cdSecs")},this.statusEl=ut("status"),this.statusText=ut("statusText"),this.playerEl=ut("player"),this.playerSub=ut("playerSub"),this.greetingEl=ut("greeting"),this.greetingSubEl=ut("greetingSub"),this.modeText=ut("modeText"),this.modeIcon=ut("modeIcon"),this._bind(),this.updateCountdown(),this._countdownTimer=setInterval(()=>this.updateCountdown(),1e3)}on(t,e){return this.handlers.set(t,e),this}emit(t,e){let n=this.handlers.get(t);n&&n(e)}_bind(){ut("btnStartGesture")?.addEventListener("click",()=>this.emit("start","gesture")),ut("btnStartPointer")?.addEventListener("click",()=>this.emit("start","pointer")),ut("btnUpload")?.addEventListener("click",()=>this._openUpload()),ut("fileInput")?.addEventListener("change",c=>{let h=c.target.files;h?.length&&this.emit("upload",h),c.target.value=""}),ut("btnMusic")?.addEventListener("click",()=>this.emit("toggleMusic")),ut("btnPlayer")?.addEventListener("click",()=>this.emit("toggleMusic")),ut("btnScene")?.addEventListener("click",()=>this.emit("cycleMood")),ut("btnFullscreen")?.addEventListener("click",()=>this.toggleFullscreen()),ut("btnSettings")?.addEventListener("click",()=>this.openSettings()),ut("btnCloseSettings")?.addEventListener("click",()=>this.closeSettings()),ut("btnHelp")?.addEventListener("click",()=>this.openHelp()),ut("btnCloseHelp")?.addEventListener("click",()=>this.closeHelp()),ut("photoViewerBackdrop")?.addEventListener("click",()=>this.closePhoto()),ut("btnCloseViewer")?.addEventListener("click",()=>this.closePhoto()),ut("btnToggleGalaxy")?.addEventListener("click",()=>this.emit("toggleGalaxy"));let t=ut("inputGreeting"),e=ut("inputSub"),n=0,s=()=>{clearTimeout(n),n=setTimeout(()=>{this.emit("settings",{greeting:t.value.trim()||"悦悦，圣诞快乐！",sub:e.value.trim()})},220)};t?.addEventListener("input",s),e?.addEventListener("input",s),ut("checkMusic")?.addEventListener("change",c=>this.emit("settings",{music:c.target.checked})),ut("rangeVolume")?.addEventListener("input",c=>this.emit("settings",{volume:Number(c.target.value)/100}));let r=ut("rangeSensitivity"),a=ut("outSensitivity");r?.addEventListener("input",c=>{let h=Number(c.target.value)/100;a&&(a.textContent=`${h.toFixed(2)}×`),this.emit("settings",{sensitivity:h})}),ut("checkPreview")?.addEventListener("change",c=>{ut("previewBox")?.classList.toggle("on",c.target.checked),this.emit("settings",{preview:c.target.checked})});let o=ut("rangePhotoSize"),l=ut("outPhotoSize");o?.addEventListener("input",c=>{let h=Number(c.target.value)/100;l&&(l.textContent=`${h.toFixed(2)}×`),this.emit("settings",{photoSize:h})}),ut("rangeSnow")?.addEventListener("input",c=>{let h=Number(c.target.value);ut("outSnow")&&(ut("outSnow").textContent=["无","中","密"][h]||"中"),this.emit("settings",{snow:[.25,1,1.55][h]??1})}),ut("checkAutoRotate")?.addEventListener("change",c=>this.emit("settings",{autoRotate:c.target.checked})),ut("moodRow")?.addEventListener("click",c=>{let h=c.target.closest(".mood");h&&this.emit("setMood",Number(h.dataset.mood))}),ut("btnResetPhotos")?.addEventListener("click",()=>this.emit("resetPhotos")),ut("btnRestartCamera")?.addEventListener("click",()=>this.emit("restartCamera")),document.addEventListener("pointerdown",c=>{this.settingsEl.classList.contains("open")&&(this.settingsEl.contains(c.target)||c.target.closest?.("#btnSettings")||this.closeSettings())}),window.addEventListener("keydown",c=>{let h=(c.target?.tagName||"").toLowerCase();h==="input"||h==="textarea"||(c.code==="Space"?(c.preventDefault(),this.emit("toggleGalaxy")):c.code==="KeyF"?this.toggleFullscreen():c.code==="KeyM"?this.emit("toggleMusic"):c.code==="KeyS"?this.settingsEl.classList.contains("open")?this.closeSettings():this.openSettings():c.code==="KeyU"?this._openUpload():c.code==="Escape"&&(this.isPhotoOpen()?this.closePhoto():this.helpEl?.classList.contains("open")?this.closeHelp():this.closeSettings()))}),document.addEventListener("fullscreenchange",()=>{ut("btnFullscreen")?.classList.toggle("active",!!document.fullscreenElement)})}setLoading(t,e){this.loadingBar&&(this.loadingBar.style.width=`${Math.round(Math.max(0,Math.min(1,t))*100)}%`),e&&this.loadingTip&&(this.loadingTip.textContent=e)}hideLoading(){this.setLoading(1),setTimeout(()=>this.loadingScreen?.classList.add("hidden"),320)}hideStart(){this.startOverlay?.classList.add("hidden")}showStart(){this.startOverlay?.classList.remove("hidden")}toast(t,e=2400){this.toastEl&&(this.toastEl.textContent=t,this.toastEl.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this.toastEl.classList.remove("show"),e))}setStatus(t,e){this.statusEl&&(this.statusEl.dataset.state=t),this.statusText&&e&&(this.statusText.textContent=e)}setHint(t,e){let n=ut("hintText"),s=ut("hintSub");n&&t&&(n.textContent=t),s&&e&&(s.textContent=e)}setGreeting(t,e){this.greetingEl&&(this.greetingEl.textContent=t),this.greetingSubEl&&(this.greetingSubEl.textContent=e||""),this.greetingSubEl&&(this.greetingSubEl.style.display=e?"":"none")}applyEnvironment(t=0,e=[]){let n=jw(t),s=ut("startPhotoCount");s&&t>0&&(s.textContent=`${n}张照片`);let r=ut("startFooter");if(r&&e.length){let c=[...new Set(e.filter(Boolean))].slice(0,4);c.length&&(r.textContent=`${c.join(" · ")} — 2026 冬`)}let a=ut("btnUpload"),o=ut("helpKeys"),l=ut("settingsNote");this.isPublic?(a&&(a.style.display="none"),o&&(o.textContent="空格 星河 · F 全屏 · M 音乐 · S 设置 · Esc 关闭面板"),l&&(l.innerHTML="照片和祝福语都已经提前准备好，存在这个网页里。<br />刷新、换手机打开都还在，慢慢看就好。")):this.isLocalServer&&(a&&(a.dataset.tip="管理照片"),o&&(o.textContent="空格 星河 · F 全屏 · M 音乐 · S 设置 · U 照片管理 · Esc 关闭面板"),l&&(l.innerHTML="照片都在「管理照片」里改：双击桌面上的 <b>管理照片.bat</b>，加照片、改说明、删照片，改完点「发布上线」，她刷新就能看到。<br />祝福语、音乐这些设置只在这台电脑上生效。"))}_openUpload(){if(this.isPublic){this.toast("照片是提前准备好的，慢慢看就好");return}if(this.isLocalServer){let t=location.port==="8777"?"/manage.html":"http://127.0.0.1:8777/manage.html";window.open(t,"_blank","noopener");return}ut("fileInput")?.click()}openPhoto(t,e){let n=this.viewerEl;if(!n||!t)return;let s=ut("photoViewerImg"),r=ut("photoViewerTitle"),a=ut("photoViewerSub"),o=t.src||t.thumb||"";s&&(s.src=o,s.alt=t.caption||"照片"),r&&(r.textContent=t.caption||t.place||"这一刻"),a&&(a.textContent=[t.place,t.date].filter(Boolean).join(" · ")),n.classList.add("open"),n.setAttribute("aria-hidden","false"),this.photoOpen=!0,this._viewerSrc=e}closePhoto(){this.viewerEl&&(this.viewerEl.classList.remove("open"),this.viewerEl.setAttribute("aria-hidden","true"),this.photoOpen=!1)}isPhotoOpen(){return!!this.photoOpen}openHelp(){this.helpEl?.classList.add("open"),this.helpEl?.setAttribute("aria-hidden","false")}closeHelp(){this.helpEl?.classList.remove("open"),this.helpEl?.setAttribute("aria-hidden","true")}setMusicPlaying(t){this.playerEl?.classList.toggle("playing",t),ut("btnMusic")?.classList.toggle("active",t),this.playerSub&&(this.playerSub.textContent=t?"正在播放 · 雪夜八音盒":"轻点开启音乐")}setGalaxy(t){this.modeText&&(this.modeText.textContent=t?"让树回来":"散作星河"),this.modeIcon&&(this.modeIcon.textContent=t?"✧":"✦"),ut("btnToggleGalaxy")?.classList.toggle("active",t),this.hintSub}updateCountdown(){let t=new Date,e=t.getFullYear(),n=new Date(e,11,25,0,0,0);t.getTime()>=n.getTime()&&(e+=1,n=new Date(e,11,25,0,0,0));let s=Math.max(0,n.getTime()-t.getTime()),r=Math.floor(s/1e3),a=Math.floor(r/86400),o=Math.floor(r%86400/3600),l=Math.floor(r%3600/60),c=r%60;this.cd.year&&(this.cd.year.textContent=String(e)),this.cd.days&&(this.cd.days.textContent=String(a)),this.cd.hours&&(this.cd.hours.textContent=Su(o)),this.cd.mins&&(this.cd.mins.textContent=Su(l)),this.cd.secs&&(this.cd.secs.textContent=Su(c))}openSettings(){this.settingsEl?.classList.add("open")}closeSettings(){this.settingsEl?.classList.remove("open")}toggleSettings(){this.settingsEl?.classList.contains("open")?this.closeSettings():this.openSettings()}applySettings(t){let e=ut("inputGreeting"),n=ut("inputSub");e&&document.activeElement!==e&&(e.value=t.greeting||""),n&&document.activeElement!==n&&(n.value=t.sub||"");let s=ut("checkMusic");s&&(s.checked=!!t.music);let r=ut("rangeVolume");r&&(r.value=String(Math.round((t.volume??.7)*100)));let a=ut("rangeSensitivity");a&&(a.value=String(Math.round((t.sensitivity??1)*100)));let o=ut("outSensitivity");o&&(o.textContent=`${(t.sensitivity??1).toFixed(2)}×`);let l=ut("rangePhotoSize");l&&(l.value=String(Math.round((t.photoSize??1)*100)));let c=ut("outPhotoSize");c&&(c.textContent=`${(t.photoSize??1).toFixed(2)}×`);let h=ut("rangeSnow");if(h){let d=(t.snow??1)>1.3?2:(t.snow??1)<.6?0:1;h.value=String(d),ut("outSnow")&&(ut("outSnow").textContent=["无","中","密"][d])}let f=ut("checkAutoRotate");f&&(f.checked=!!t.autoRotate);let u=ut("checkPreview");u&&(u.checked=!!t.preview),ut("previewBox")?.classList.toggle("on",!!t.preview),this.setMood(t.mood??0),this.setGreeting(t.greeting,t.sub),this.setMusicPlaying(!1)}setMood(t){document.querySelectorAll("#moodRow .mood").forEach(n=>{n.classList.toggle("active",Number(n.dataset.mood)===t)});let e=An[t];e&&document.documentElement.style.setProperty("--mood-glow",e.aurora[0])}async toggleFullscreen(){try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{this.toast("这个浏览器不支持全屏，按 F11 也可以")}}updateCursor(t,e,{visible:n=!0,pinch:s=!1,grab:r=!1}={}){let a=this.handCursor;a&&(a.hidden=!1,a.style.transform=`translate3d(${t.toFixed(1)}px, ${e.toFixed(1)}px, 0)`,a.classList.toggle("show",n),a.classList.toggle("pinching",s&&!r),a.classList.toggle("grab",r))}hideCursor(){this.handCursor?.classList.remove("show","pinching","grab")}ripple(t,e,n="rgba(160,235,255,0.75)"){if(!this.rippleLayer)return;let s=document.createElement("span");s.className="ripple",s.style.left=`${t}px`,s.style.top=`${e}px`,s.style.borderColor=n,this.rippleLayer.appendChild(s),setTimeout(()=>s.remove(),950)}setUIHidden(t){this.app?.classList.toggle("ui-hidden",t)}};var hc=i=>typeof i=="number"&&Number.isFinite(i)?Math.min(1,Math.max(0,i)):0,i0=(i,t,e)=>Math.min(e,Math.max(t,i)),n0=i=>440*Math.pow(2,(i-69)/12),qi=(i,t)=>i+Math.random()*(t-i),yy=i=>i[Math.random()*i.length|0],Sy={C:{bass:36,notes:[48,55,64]},G:{bass:31,notes:[43,50,59]},F:{bass:29,notes:[41,48,57]},Am:{bass:33,notes:[45,52,60]}},Qw=["C","G","C","Am","C","G","F","F","C","G","C","Am","C","G","F","F","G","C","F","G"];function tA(){let i=[],t=(n,s,r,a=1,o=1)=>{i.push({t:(n-1)*4+s,type:"mel",midi:r,dur:a,vel:o})};Qw.forEach((n,s)=>{i.push({t:s*4,type:"pad",chord:n}),i.push({t:s*4,type:"bass",midi:Sy[n].bass})});let e=[.95,.3,.6,.28,.85,.3,.55,.28];for(let n=0;n<20;n++){let s=n<2?.65:1;for(let r=0;r<8;r++)i.push({t:n*4+r*.5+qi(-.012,.012),type:"bell",vel:e[r]*s})}return t(1,0,72,1,.42),t(1,1,76,1,.4),t(1,2,79,1,.4),t(1,3,84,1.5,.38),t(2,0,71,1,.36),t(2,1,74,1,.36),t(2,2,79,1,.36),t(2,3,83,1.5,.34),t(3,0,64,1,.9),t(3,1,64,1,.85),t(3,2,64,2,.9),t(4,0,64,1,.85),t(4,1,64,1,.85),t(4,2,64,2,.88),t(5,0,64,1,.92),t(5,1,67,1,.95),t(5,2,72,1,1),t(5,3,74,1,1),t(6,0,76,2.5,.95),t(7,0,65,1,.9),t(7,1,65,.5,.85),t(7,1.5,65,.5,.85),t(7,2,65,1,.9),t(7,3,65,1,.9),t(8,0,64,1,.9),t(8,1,64,1,.85),t(8,2,64,1,.88),t(8,3,64,1,.88),t(9,0,62,1,.9),t(9,1,62,1,.85),t(9,2,64,1,.9),t(9,3,62,1,.9),t(10,0,67,2,.95),t(11,0,64,1,.9),t(11,1,64,1,.85),t(11,2,64,2,.9),t(12,0,64,1,.85),t(12,1,64,1,.85),t(12,2,64,2,.88),t(13,0,64,1,.92),t(13,1,67,1,.95),t(13,2,72,1,1),t(13,3,74,1,1),t(14,0,76,2.5,.95),t(15,0,65,1,.9),t(15,1,65,.5,.85),t(15,1.5,65,.5,.85),t(15,2,65,1,.9),t(15,3,65,1,.9),t(16,0,64,1,.9),t(16,1,64,1,.85),t(16,2,64,1,.88),t(16,3,64,1,.88),t(17,0,67,1,.95),t(17,1,67,1,.9),t(17,2,65,1,.9),t(17,3,62,1,.9),t(18,0,72,2,.9),t(18,2.5,76,.25,.75),t(18,2.75,79,.25,.75),t(18,3,84,.75,.8),t(19,0,72,1,.36),t(19,1,69,1,.34),t(19,2,72,1,.34),t(19,3,77,1.5,.32),t(20,0,71,1,.34),t(20,1,74,1,.34),t(20,2,79,1,.32),t(20,3,74,1.5,.3),i.sort((n,s)=>n.t-s.t),i}var Nd=class{constructor({volume:t=.65}={}){this._volume=hc(t),this._intensity=0,this._ready=!1,this._ctx=null,this._initPromise=null,this._musicWanted=!1,this._musicOn=!1,this._sfxWanted=!0,this._events=tA(),this._loopDur=48,this._schedTimer=null,this._stopTimer=null,this._loopAnchor=0,this._loopCount=0,this._evtIndex=0,this._lastTick=0,this._sparkleAt=0,this._ctx=null,this._analyser=null,this._noiseBuf=null,this._persistentOscs=[],this._master=null,this._limiter=null,this._dryBus=null,this._musicBus=null,this._musicFilter=null,this._musicFade=null,this._musicSend=null,this._sfxBus=null,this._sfxFade=null,this._sfxSend=null,this._reverb=null,this._reverbReturn=null,this._shimmerLevel=null}get ready(){return this._ready}get musicEnabled(){return this._musicWanted}get sfxEnabled(){return this._sfxWanted}get volume(){return this._volume}get context(){return this._ctx}getAnalyser(){return this._analyser}async init(){if(!this._ready){if(this._initPromise)return this._initPromise;this._initPromise=this._createGraph();try{await this._initPromise}finally{this._initPromise=null}}}async _createGraph(){let t=typeof window<"u"?window.AudioContext||window.webkitAudioContext:null;if(!t){console.warn("[ChristmasAudio] 当前环境不支持 WebAudio，音频已跳过。");return}try{let e=new t({latencyHint:"interactive"});this._ctx=e,this._buildGraph(e),this._ready=!0;try{e.state==="suspended"&&await e.resume()}catch(n){console.info("[ChristmasAudio] AudioContext 仍处于挂起状态，等待用户手势 unlock()。",n)}this._musicWanted&&this._startMusic()}catch(e){console.warn("[ChristmasAudio] 初始化音频失败：",e),this._teardownGraph();try{this._ctx&&this._ctx.state!=="closed"&&this._ctx.close()}catch{}this._ctx=null}}_buildGraph(t){let e=Math.floor(t.sampleRate*2),n=t.createBuffer(1,e,t.sampleRate),s=n.getChannelData(0);for(let c=0;c<e;c++)s[c]=Math.random()*2-1;this._noiseBuf=n,this._master=t.createGain(),this._master.gain.value=this._volumeToGain(this._volume),this._limiter=t.createDynamicsCompressor(),this._limiter.threshold.value=-8,this._limiter.knee.value=6,this._limiter.ratio.value=12,this._limiter.attack.value=.003,this._limiter.release.value=.25,this._analyser=t.createAnalyser(),this._analyser.fftSize=2048,this._analyser.smoothingTimeConstant=.55,this._dryBus=t.createGain(),this._dryBus.gain.value=1,this._dryBus.connect(this._master),this._master.connect(this._limiter),this._limiter.connect(this._analyser),this._analyser.connect(t.destination),this._reverb=t.createConvolver(),this._reverb.buffer=this._makeImpulse(t,2.8),this._reverbReturn=t.createGain(),this._reverbReturn.gain.value=.55,this._reverb.connect(this._reverbReturn),this._reverbReturn.connect(this._dryBus),this._musicBus=t.createGain(),this._musicFilter=t.createBiquadFilter(),this._musicFilter.type="lowpass",this._musicFilter.frequency.value=3200+2200*this._intensity,this._musicFilter.Q.value=.35,this._musicFade=t.createGain(),this._musicFade.gain.value=0,this._musicSend=t.createGain(),this._musicSend.gain.value=.26,this._musicBus.connect(this._musicFilter),this._musicFilter.connect(this._musicFade),this._musicFade.connect(this._dryBus),this._musicFade.connect(this._musicSend),this._musicSend.connect(this._reverb),this._sfxBus=t.createGain(),this._sfxFade=t.createGain(),this._sfxFade.gain.value=this._sfxWanted?.85:0,this._sfxSend=t.createGain(),this._sfxSend.gain.value=.3,this._sfxBus.connect(this._sfxFade),this._sfxFade.connect(this._dryBus),this._sfxFade.connect(this._sfxSend),this._sfxSend.connect(this._reverb),this._shimmerLevel=t.createGain(),this._shimmerLevel.gain.value=.014*this._intensity;let r=t.createGain();r.gain.value=.82;let a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=5200,this._shimmerLevel.connect(r),r.connect(a),a.connect(this._musicBus);for(let[c,h]of[[1046.5,"sine"],[1568,"sine"]]){let f=t.createOscillator();f.type=h,f.frequency.value=c;let u=t.createGain();u.gain.value=.42,f.connect(u),u.connect(this._shimmerLevel),f.start(),this._persistentOscs.push(f);let d=t.createOscillator();d.type="sine",d.frequency.value=qi(.12,.2);let p=t.createGain();p.gain.value=2.2,d.connect(p),p.connect(f.detune),d.start(),this._persistentOscs.push(d)}let o=t.createOscillator();o.type="sine",o.frequency.value=.09;let l=t.createGain();l.gain.value=.18,o.connect(l),l.connect(r.gain),o.start(),this._persistentOscs.push(o)}_makeImpulse(t,e){let n=t.sampleRate,s=Math.max(1,Math.floor(n*e)),r=t.createBuffer(2,s,n);for(let a=0;a<2;a++){let o=r.getChannelData(a);for(let l=0;l<s;l++){let c=l/s,h=c<.01?c/.01:1;o[l]=(Math.random()*2-1)*Math.pow(1-c,2.6)*h}}return r}async unlock(){if(this._ctx){try{await this._ctx.resume()}catch(t){console.info("[ChristmasAudio] unlock 失败（可能缺少用户手势）：",t);return}this._musicWanted&&!this._musicOn&&this._startMusic()}}dispose(){this._stopScheduler(),clearTimeout(this._stopTimer),this._stopTimer=null,this._ready=!1,this._musicOn=!1;for(let e of this._persistentOscs){try{e.stop()}catch{}try{e.disconnect()}catch{}}this._persistentOscs=[],this._teardownGraph();let t=this._ctx;if(this._ctx=null,t&&t.state!=="closed")try{let e=t.close();e&&typeof e.catch=="function"&&e.catch(()=>{})}catch{}}_teardownGraph(){let t=[this._shimmerLevel,this._sfxSend,this._sfxFade,this._sfxBus,this._musicSend,this._musicFade,this._musicFilter,this._musicBus,this._reverbReturn,this._reverb,this._analyser,this._limiter,this._master,this._dryBus];for(let e of t)if(e)try{e.disconnect()}catch{}this._master=null,this._limiter=null,this._analyser=null,this._dryBus=null,this._musicBus=null,this._musicFilter=null,this._musicFade=null,this._musicSend=null,this._sfxBus=null,this._sfxFade=null,this._sfxSend=null,this._reverb=null,this._reverbReturn=null,this._shimmerLevel=null,this._noiseBuf=null}setMusicEnabled(t){this._musicWanted=!!t,this._ready&&(this._musicWanted?this._startMusic():this._stopMusic())}setSfxEnabled(t){if(this._sfxWanted=!!t,!this._ready||!this._sfxFade)return;let e=this._ctx.currentTime;this._sfxFade.gain.setTargetAtTime(this._sfxWanted?.85:0,e,.12)}setVolume(t){if(this._volume=hc(t),!this._ready||!this._master)return;let e=this._ctx.currentTime;this._master.gain.setTargetAtTime(this._volumeToGain(this._volume),e,.08)}setGestureIntensity(t){let e=hc(t);if(Math.abs(e-this._intensity)<.01||(this._intensity=e,!this._ready))return;let n=this._ctx.currentTime;this._musicFilter.frequency.setTargetAtTime(3200+2200*e,n,.25),this._shimmerLevel.gain.setTargetAtTime(.014*e,n,.3)}_volumeToGain(t){return .85*Math.pow(t,1.35)}_startMusic(){if(!this._ctx||this._musicOn)return;this._stopTimer&&(clearTimeout(this._stopTimer),this._stopTimer=null);let t=this._ctx;this._musicOn=!0,this._stopScheduler(),this._loopAnchor=t.currentTime+.15,this._loopCount=0,this._evtIndex=0,this._lastTick=t.currentTime,this._sparkleAt=t.currentTime+2,this._tick(),this._schedTimer=setInterval(()=>this._tick(),25);let e=t.currentTime,n=this._musicFade.gain;this._holdParam(n,e),n.linearRampToValueAtTime(.9,e+1.4)}_stopMusic(){if(!this._ctx||!this._musicOn)return;this._musicOn=!1;let t=this._ctx.currentTime,e=this._musicFade.gain;this._holdParam(e,t),e.linearRampToValueAtTime(0,t+1.1),this._stopTimer&&clearTimeout(this._stopTimer),this._stopTimer=setTimeout(()=>{this._stopTimer=null,this._stopScheduler()},1200)}_stopScheduler(){this._schedTimer&&(clearInterval(this._schedTimer),this._schedTimer=null)}_holdParam(t,e){if(typeof t.cancelAndHoldAtTime=="function")t.cancelAndHoldAtTime(e);else{let n=t.value;t.cancelScheduledValues(e),t.setValueAtTime(n,e)}}_tick(){if(!this._musicOn||!this._ctx)return;let e=this._ctx.currentTime;e-this._lastTick>.5&&this._resync(e),this._lastTick=e;let n=e+.22,s=this._events,r=0;for(;r++<600;){this._evtIndex>=s.length&&(this._evtIndex=0,this._loopCount++);let a=s[this._evtIndex],o=this._loopAnchor+this._loopCount*this._loopDur+a.t*.6;if(o>n)break;this._evtIndex++,!(o<e-.05)&&this._renderEvent(a,o)}if(this._intensity>.45&&e>=this._sparkleAt){this._sparkleAt=e+qi(1.4,3.4)/(.6+this._intensity);let a=[84,86,88,91,93,96];this._musicBox(e+.05,yy(a),.14+this._intensity*.12,{decayScale:.6})}}_resync(t){let e=t-this._loopAnchor;if(e<0)return;let n=Math.floor(e/this._loopDur),s=e-n*this._loopDur;this._loopCount=n;let r=this._events.findIndex(a=>a.t*.6>s+.01);r<0&&(r=this._events.length),this._evtIndex=r}_renderEvent(t,e){switch(t.type){case"mel":this._musicBox(e,t.midi,t.vel,{decayScale:i0(t.dur*.55+.5,.75,1.25)});break;case"pad":this._pad(e,t.chord);break;case"bass":this._bass(e,t.midi);break;case"bell":this._sleighBell(e,t.vel);break;default:break}}_musicBox(t,e,n=1,s={}){let r=this._ctx;if(!r)return;let{decayScale:a=1,bus:o=this._musicBus,send:l=this._musicSend,pan:c=qi(-.28,.28)}=s,h=n0(e),f=.16*hc(n),u=i0(1.7-(e-60)*.018,.5,1.8)*a,d=r.createGain();d.gain.setValueAtTime(1e-4,t),d.gain.linearRampToValueAtTime(Math.max(2e-4,f),t+.006),d.gain.exponentialRampToValueAtTime(Math.max(1e-4,f*.22),t+u*.45),d.gain.exponentialRampToValueAtTime(1e-4,t+u);let p=r.createBiquadFilter();p.type="lowpass",p.frequency.value=i0(h*9+1500,1500,9e3),p.Q.value=.3;let v=r.createStereoPanner();v.pan.value=c,d.connect(p),p.connect(v),v.connect(o),v.connect(l);let m=r.createOscillator();m.type="triangle",m.frequency.value=h;let g=r.createOscillator();g.type="sine",g.frequency.value=Math.min(h*2.01,14e3);let b=r.createGain();b.gain.value=.16,g.connect(b),b.connect(d),m.connect(d),m.start(t),g.start(t);let E=t+u+.08;m.stop(E),g.stop(E)}_pad(t,e){let n=this._ctx,s=Sy[e];if(!n||!s)return;let r=4*.6,a=n.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.linearRampToValueAtTime(.06,t+.55),a.gain.setValueAtTime(.06,t+r-.5),a.gain.linearRampToValueAtTime(1e-4,t+r+.9);let o=n.createBiquadFilter();o.type="lowpass",o.frequency.value=1400,o.Q.value=.3,a.connect(o),o.connect(this._musicBus),o.connect(this._musicSend);let l=t+r+1;for(let c of s.notes){let h=n0(c);for(let f of[-5,5]){let u=n.createOscillator();u.type="triangle",u.frequency.value=h,u.detune.value=f;let d=n.createGain();d.gain.value=.5,u.connect(d),d.connect(a),u.start(t),u.stop(l)}}}_bass(t,e){let n=this._ctx;if(!n)return;let s=4*.6,r=n0(e),a=n.createGain();a.gain.setValueAtTime(1e-4,t),a.gain.linearRampToValueAtTime(.1,t+.35),a.gain.setValueAtTime(.1,t+s-.5),a.gain.linearRampToValueAtTime(1e-4,t+s+.9);let o=n.createBiquadFilter();o.type="lowpass",o.frequency.value=320,o.Q.value=.5,a.connect(o),o.connect(this._musicBus);let l=n.createOscillator();l.type="sine",l.frequency.value=r;let c=n.createOscillator();c.type="sine",c.frequency.value=r*2;let h=n.createGain();h.gain.value=.14,c.connect(h),h.connect(a),l.connect(a);let f=t+s+1;l.start(t),c.start(t),l.stop(f),c.stop(f)}_sleighBell(t,e){let n=this._ctx;if(!n||!this._noiseBuf)return;let s=n.createBufferSource();s.buffer=this._noiseBuf;let r=n.createBiquadFilter();r.type="bandpass",r.frequency.value=qi(5200,8200),r.Q.value=qi(.7,1.4);let a=n.createBiquadFilter();a.type="highpass",a.frequency.value=2200;let o=n.createGain(),l=.028*hc(e);o.gain.setValueAtTime(1e-4,t),o.gain.linearRampToValueAtTime(Math.max(2e-4,l),t+.004),o.gain.exponentialRampToValueAtTime(1e-4,t+qi(.07,.13));let c=n.createStereoPanner();c.pan.value=qi(-.45,.45),s.connect(r),r.connect(a),a.connect(o),o.connect(c),c.connect(this._musicBus),c.connect(this._musicSend);let h=t+qi(-.005,.005);s.start(h,qi(0,1.6)),s.stop(h+.2)}_canSfx(){return this._ready&&this._sfxWanted&&!!this._ctx}_noiseSource(){let t=this._ctx.createBufferSource();return t.buffer=this._noiseBuf,t}playWhoosh(){if(!this._canSfx())return;let t=this._ctx,e=t.currentTime+.02,n=this._noiseSource(),s=t.createBiquadFilter();s.type="bandpass",s.Q.value=1.1,s.frequency.setValueAtTime(260,e),s.frequency.exponentialRampToValueAtTime(5200,e+.7),s.frequency.exponentialRampToValueAtTime(700,e+1.25);let r=t.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(.42,e+.18),r.gain.exponentialRampToValueAtTime(1e-4,e+1.3),n.connect(s),s.connect(r),r.connect(this._sfxBus),r.connect(this._sfxSend);let a=t.createOscillator();a.type="sine",a.frequency.setValueAtTime(120,e),a.frequency.exponentialRampToValueAtTime(38,e+.7);let o=t.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(.34,e+.02),o.gain.exponentialRampToValueAtTime(1e-4,e+.95),a.connect(o),o.connect(this._sfxBus),n.start(e,qi(0,.5)),n.stop(e+1.35),a.start(e),a.stop(e+1)}playReform(){if(!this._canSfx())return;let t=this._ctx,e=t.currentTime+.02,n=this._noiseSource(),s=t.createBiquadFilter();s.type="highpass",s.frequency.value=2400;let r=t.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(.26,e+.58),r.gain.exponentialRampToValueAtTime(1e-4,e+.74),n.connect(s),s.connect(r),r.connect(this._sfxBus),r.connect(this._sfxSend),[72,76,79,84,88,91].forEach((c,h)=>{this._musicBox(e+h*.055,c,.42,{decayScale:.55,bus:this._sfxBus,send:this._sfxSend,pan:qi(-.2,.2)})});let o=t.createOscillator();o.type="sine",o.frequency.setValueAtTime(90,e+.55),o.frequency.exponentialRampToValueAtTime(42,e+1.05);let l=t.createGain();l.gain.setValueAtTime(1e-4,e+.55),l.gain.linearRampToValueAtTime(.2,e+.58),l.gain.exponentialRampToValueAtTime(1e-4,e+1.2),o.connect(l),l.connect(this._sfxBus),n.start(e,qi(0,.8)),n.stop(e+.85),o.start(e+.55),o.stop(e+1.25)}playGrab(){if(!this._canSfx())return;let t=this._ctx.currentTime+.02;this._musicBox(t,62,.5,{decayScale:.5,bus:this._sfxBus,send:this._sfxSend,pan:-.08}),this._musicBox(t+.012,67,.3,{decayScale:.45,bus:this._sfxBus,send:this._sfxSend,pan:.12})}playRelease(){if(!this._canSfx())return;let e=this._ctx.currentTime+.02,n=[84,86,88,91,93,96,98],s=4+(Math.random()*3|0),r=e;for(let a=0;a<s;a++)this._musicBox(r,yy(n),.22+Math.random()*.12,{decayScale:.35,bus:this._sfxBus,send:this._sfxSend,pan:qi(-.55,.55)}),r+=qi(.035,.075)}playClick(){if(!this._canSfx())return;let t=this._ctx,e=t.currentTime+.01;for(let[n,s,r]of[[1e3,.1,.055],[1500,.035,.04]]){let a=t.createOscillator();a.type="triangle",a.frequency.value=n;let o=t.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(s,e+.004),o.gain.exponentialRampToValueAtTime(1e-4,e+r),a.connect(o),o.connect(this._sfxBus),a.start(e),a.stop(e+r+.02)}}playChime(){if(!this._canSfx())return;let e=this._ctx.currentTime+.02;this._musicBox(e,88,.38,{decayScale:.8,bus:this._sfxBus,send:this._sfxSend,pan:-.15}),this._musicBox(e+.07,91,.3,{decayScale:.8,bus:this._sfxBus,send:this._sfxSend,pan:.15})}};var ds=new URLSearchParams(location.search),eA=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[17,18],[18,19],[19,20],[0,17]];ds.has("lite")&&(_e.tree.particles=Math.round(_e.tree.particles*.42),_e.tree.garland=Math.round(_e.tree.garland*.5),_e.tree.ornaments=Math.round(_e.tree.ornaments*.5));var Mo={greeting:_e.greeting.text,sub:_e.greeting.sub,music:!0,volume:.72,sensitivity:1,photoSize:1,snow:1,autoRotate:!1,mood:0,preview:!1};function iA(){try{let i=localStorage.getItem(_e.storageKey);if(!i)return{...Mo};let t=JSON.parse(i);return{...Mo,...t,greeting:t.greeting||Mo.greeting,sub:t.sub??Mo.sub,mood:ie(Number(t.mood)||0,0,An.length-1)}}catch{return{...Mo}}}var s0=class{constructor(){this.canvas=document.getElementById("scene"),this.settings=iA(),this.mode="pointer",this.manualGalaxy=!1,this.gestureGalaxy=0,this.audioReady=!1,this.mouseDown=!1,this.mouse={x:window.innerWidth/2,y:window.innerHeight/2,active:!1},this._handWorld={x:0,y:0,z:0},this._t=0,this._statusTimer=0,this.started=!1,this.gestureOpen=!1,this.gestureSwitchAt=0,this._lastPinchTapAt=0,this.isFileMode=location.protocol==="file:"&&!window.__AURORA_MP_EMBEDDED__}async init(){this.ui=new Dd,this.rig=new bu(this.canvas),this.rig.resize(),this.rig.onContextLost=()=>this._onContextLost(),this.tree=new Eu(this.rig),this.audio=new Nd({volume:this.settings.volume}),this.cloud=new Tu({rig:this.rig,container:document.getElementById("photoCloud"),onGrab:n=>this._onGrab(n),onRelease:n=>this._onRelease(n),onTap:n=>this._onTap(n)}),this.frames=new Ru(this.rig),this.tracker=new Ld({video:document.getElementById("webcam"),wasmBase:_e.hand.wasmBase,model:_e.hand.model,onStatus:n=>this._onTrackerStatus(n)}),this._wireUI(),this.ui.applySettings(this.settings),this.rig.setMood(this.settings.mood,!0),this.rig.setAutoRotate(this.settings.autoRotate),this.rig.setSnowDensity(this._snowFraction(this.settings.snow)),this.cloud.setPhotoScale(this.settings.photoSize),this.ui.setMood(this.settings.mood),this._setStatus("pointer","手势未开启"),this.ui.setHint("拖动画面转一圈 · 按住画面整场绽放","滚轮缩放 · 轻点照片放大 · 空格键散作星河"),this.isFileMode&&(this._setStatus("pointer","本地文件 · 鼠标模式"),this.ui.setHint("双击打开的本地页面：拖拽照片即可","想用手势：双击同目录的「启动.bat」，或用在线网址"),document.body.classList.add("file-mode")),this.settings.music||this.ui.setMusicPlaying(!1),this.ui.setLoading(.18,"正在取出照片…"),await this._nextFrame();let t=await this.cloud.load();if(this.ui.applyEnvironment(t,this.cloud.photos.map(n=>n.place)),this.ui.setLoading(.82,"正在挂上照片…"),await this._nextFrame(),matchMedia("(pointer: coarse)").matches&&this.ui.setHint("轻点照片放大看 · 双指可缩放画面","也可以点右下角「散作星河」"),this.cloud.update(1/60,0),await this._nextFrame(),this.ui.hideLoading(),window.addEventListener("resize",()=>this.rig.resize()),this.drag={active:!1,sx:0,sy:0,lx:0,ly:0,moved:0,hold:!1,timer:0},this.pointers=new Map,this.pinchDist=0,this.holdBloom=!1,this.canvas.addEventListener("pointerdown",n=>this._onCanvasPointerDown(n)),window.addEventListener("pointermove",n=>this._onPointerMove(n)),window.addEventListener("pointerup",n=>this._onPointerUp(n)),window.addEventListener("pointercancel",n=>this._onPointerUp(n)),this.canvas.addEventListener("wheel",n=>this._onWheel(n),{passive:!1}),window.__xmas=this,ds.get("debug")==="1"&&console.info("[xmas] photos:",t,"mode:",this.mode),this._loop(),requestAnimationFrame(()=>this.rig.resize()),window.__xmasApp=this,window.__pendingStart){let n=window.__pendingStart;window.__pendingStart=null,this.start(n).catch(s=>console.warn("[xmas] pending start 失败",s))}if(ds.get("autostart")==="1"){let n=ds.get("mode")==="gesture";this.start(n?"gesture":"pointer").catch(s=>console.warn("[xmas] autostart 失败",s))}(ds.get("mode")==="galaxy"||ds.get("open")==="1")&&(this.manualGalaxy=!0,this.ui.setGalaxy(!0),this.rig.setGalaxy(1)),ds.get("mood")!==null&&this._setMood(Number(ds.get("mood"))||0,!0),ds.get("ui")==="0"&&this.ui.setUIHidden(!0),ds.get("photos")==="0"&&(document.getElementById("photoCloud").style.display="none")}_nextFrame(){return new Promise(t=>requestAnimationFrame(()=>t()))}_wireUI(){let t=this.ui;t.on("start",n=>this.start(n)),t.on("toggleGalaxy",()=>this.toggleGalaxy()),t.on("toggleMusic",()=>this.toggleMusic()),t.on("cycleMood",()=>this._setMood((this.settings.mood+1)%An.length)),t.on("setMood",n=>this._setMood(n)),t.on("settings",n=>this._patchSettings(n)),t.on("upload",n=>this._onUpload(n)),t.on("resetPhotos",()=>{this.cloud.resetPositions(),t.toast("照片都回到原来的位置了")}),t.on("restartCamera",()=>this._restartCamera());let e=document.getElementById("camDockToggle");e&&e.addEventListener("click",()=>{let n=document.body.classList.toggle("cam-collapsed");e.textContent=n?"+":"–",e.setAttribute("aria-label",n?"展开摄像头预览":"收起摄像头预览")})}_updateCamDock(){let t=document.getElementById("camDockCanvas");if(!t)return;let e=performance.now();if(this._camDrawnAt&&e-this._camDrawnAt<80)return;this._camDrawnAt=e;let n=this.handState,s=document.getElementById("camDockStatus");if(s&&this._statusText){let u=this._gestureLabel(n),d=u&&!this._statusText.includes(u)?`${u} · ${this._statusText}`:this._statusText;s.textContent!==d&&(s.textContent=d)}let r=t.getContext("2d");if(!r)return;let a=t.width,o=t.height;r.clearRect(0,0,a,o);let l=this.tracker?.video;if(!l||l.readyState<2||!l.videoWidth)return;r.drawImage(l,0,0,a,o);let c=this.tracker?.landmarks;if(!c||!n||(n.present||0)<.3)return;let h=u=>u.x*a,f=u=>u.y*o;r.save(),r.lineWidth=1.4,r.lineCap="round",r.strokeStyle="rgba(255, 214, 150, 0.7)",r.shadowColor="rgba(255, 198, 110, 0.9)",r.shadowBlur=3;for(let[u,d]of eA)r.beginPath(),r.moveTo(h(c[u]),f(c[u])),r.lineTo(h(c[d]),f(c[d])),r.stroke();r.shadowBlur=0;for(let u=0;u<c.length;u++){let d=c[u],p=u===4||u===8||u===12||u===16||u===20,v=!!n.pinch&&(u===4||u===8);r.beginPath(),r.arc(h(d),f(d),v?3.6:p?2.6:1.8,0,Math.PI*2),v?(r.fillStyle="rgba(255, 244, 214, 1)",r.shadowColor="rgba(255, 226, 160, 1)",r.shadowBlur=6):(r.fillStyle=p?"rgba(255, 224, 164, 0.95)":"rgba(186, 224, 255, 0.9)",r.shadowBlur=0),r.fill()}r.restore()}_gestureLabel(t){return!t||!t.active||(t.present||0)<.3?"":t.pinch?this.cloud?.grabbed?"捏住拖动":"捏合":t.fist?"握拳":(t.openPalm||0)>.6?"张开":"追踪"}_patchSettings(t){this.settings={...this.settings,...t};try{localStorage.setItem(_e.storageKey,JSON.stringify(this.settings))}catch{}(t.greeting!==void 0||t.sub!==void 0)&&(this.settings.greeting=this.settings.greeting||Mo.greeting,this.ui.setGreeting(this.settings.greeting,this.settings.sub)),t.volume!==void 0&&this.audio?.setVolume?.(this.settings.volume),t.music!==void 0&&this._applyMusic(),t.preview!==void 0&&document.getElementById("previewBox")?.classList.toggle("on",nA(t.preview)),t.sensitivity!==void 0&&this.tracker?.setSensitivity?.(this.settings.sensitivity),t.photoSize!==void 0&&this.cloud?.setPhotoScale?.(this.settings.photoSize),t.snow!==void 0&&this.rig?.setSnowDensity?.(this._snowFraction(this.settings.snow)),t.autoRotate!==void 0&&this.rig?.setAutoRotate?.(this.settings.autoRotate),t.mood!==void 0&&this._setMood(t.mood)}_snowFraction(t){let e=Number(t);return Number.isFinite(e)?e<=.4?.26:e>=1.4?1:.74:.72}_setMood(t,e=!1){let n=ie(Math.round(t),0,An.length-1);this.settings.mood=n,this.rig.setMood(n,e),this.ui.setMood(n),this.ui.setHint(null,An[n].hint);try{localStorage.setItem(_e.storageKey,JSON.stringify(this.settings))}catch{}}_withTimeout(t,e){return new Promise(n=>{let s=!1,r=()=>{s||(s=!0,n())};Promise.resolve(t).then(r,r),setTimeout(r,e)})}async _initAudio(){try{await this._withTimeout(this.audio.init(),6e3),this.audio.setVolume?.(this.settings.volume),this.audio.setSfxEnabled?.(!0),this.audioReady=!0}catch(t){console.warn("[audio] 初始化失败",t)}}async _applyMusic(){if(!this.audioReady)return;let t=!!this.settings.music;try{t?(await this._withTimeout(this.audio.unlock?.(),2500),this.audio.setMusicEnabled?.(!0),this.ui.setMusicPlaying(!0)):(this.audio.setMusicEnabled?.(!1),this.ui.setMusicPlaying(!1))}catch(e){console.warn("[audio] 播放失败",e)}}async toggleMusic(){this.audioReady||await this._initAudio(),this.settings.music=!this.settings.music,this.settings={...this.settings},this.ui.applySettings(this.settings),await this._applyMusic();try{localStorage.setItem(_e.storageKey,JSON.stringify(this.settings))}catch{}this.ui.toast(this.settings.music?"音乐已开启 · 雪夜八音盒":"音乐已暂停")}async start(t){this.started||(this.started=!0,t==="gesture"&&this.isFileMode&&(t="pointer",this.ui.toast("双击打开的本地页面调不到摄像头：已切到鼠标模式。想用手势请点同目录的「启动.bat」，或打开在线网址。",4600)),this.ui.hideStart(),await this._initAudio(),this.tree.burst(.9),t==="gesture"?(this._setMode("gesture"),this.ui.toast("手势模型首次加载需要一点时间，先用鼠标也能玩",4200),this._applyMusic().catch(()=>{}),await this.tracker.start()||(this._setMode("pointer"),this.ui.toast("手势没启动成功，先用鼠标 / 触摸玩吧"))):(this._setMode("pointer"),this.ui.toast("轻点照片可以把它拾起来",1800),await this._applyMusic()),this.ui.setLoading(1))}_setMode(t){this.mode=t,document.body.classList.toggle("mode-gesture",t==="gesture"),t==="gesture"?(this.cloud.setSource("hand"),this._setStatus("camera","正在唤醒手势…"),this.ui.setHint("张开手掌 · 圣诞树打开，照片飞出来","握拳收拢 · 捏住照片拖动 · 捏一下放大")):(this.cloud.setSource("mouse"),this._setStatus("pointer","鼠标 / 触摸"),this.ui.setHint("拖动旋转 · 滚轮缩放 · 按住绽放","轻点照片放大 · 空格键散作星河"),this.ui.hideCursor())}_setStatus(t,e){Date.now()<(this._statusLockUntil||0)||this._statusState===t&&this._statusText===e||(this._statusState=t,this._statusText=e,this.ui.setStatus(t,e))}_onTrackerStatus(t){t.state==="loading"?this._setStatus("camera",t.text||"正在唤醒手势…"):t.state==="ready"?(this._setStatus("camera","手势待识别"),this.ui.toast("手势就绪 · 把手掌放到摄像头前试试",2600),this.tree.burst(.6)):t.state==="error"&&(this._setStatus("pointer",t.text||"手势不可用"),this.ui.toast(t.text||"手势不可用，已切换到鼠标模式",3200))}async _restartCamera(){this.tracker.stop(),this.cloud.releaseAll(),this.ui.closeSettings(),this._setMode("gesture"),await this.tracker.start()||this._setMode("pointer")}toggleGalaxy(){this.manualGalaxy=!this.manualGalaxy,this.ui.setGalaxy(this.manualGalaxy),this.tree.burst(this.manualGalaxy?.75:.5),this.audio?.playWhoosh?.({strength:this.manualGalaxy?1:.6}),this.ui.ripple(this.rig.width/2,this.rig.height/2,"rgba(255,214,140,0.6)"),this.manualGalaxy&&this.ui.toast("圣诞树散作星河了 · 再按一次让它回来",1800)}_onGrab(t){this.audio?.playGrab?.(),this.tree.burst(.35),this.ui.ripple(t.sx+t.off.x,t.sy+t.off.y,"rgba(255,226,170,0.8)");let e=this.mode==="gesture"?"camera":"pointer";this._setStatus(e,`拾起了 · ${t.photo.place||"照片"}`),this._statusLockUntil=Date.now()+1600}_onRelease(t){this.audio?.playRelease?.(),this._statusLockUntil=0,this._setStatus(this.mode==="gesture"?"camera":"pointer",this.mode==="gesture"?"手势待识别":"鼠标 / 触摸")}_onTap(t){this.audio?.playChime?.(),this.tree.burst(.28),this.ui.openPhoto(t)}_onPinchTap(t){if(!t)return;let e=t.x*this.rig.width,n=t.y*this.rig.height,s=this.cloud.pickAt(e,n);s&&(this.ui.ripple(e,n,"rgba(255, 226, 170, 0.9)"),this.audio?.playChime?.(),this.tree.burst(.35),this.ui.openPhoto(s.photo))}_onCanvasPointerDown(t){if(t.target.closest?.(".photo-card"))return;if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY}),this.mouseDown=!0,this.pointers.size===2){clearTimeout(this.drag.timer),this._endHoldBloom();let[n,s]=[...this.pointers.values()];this.pinchDist=Math.hypot(n.x-s.x,n.y-s.y),this.drag.active=!1;return}if(this.pointers.size>2)return;let e=this.drag;e.active=!0,e.sx=e.lx=t.clientX,e.sy=e.ly=t.clientY,e.moved=0,e.hold=!1,this.rig.beginOrbit(),this.ui.ripple(t.clientX,t.clientY),this.audio?.playWhoosh?.({strength:.22}),clearTimeout(e.timer),e.timer=setTimeout(()=>{!e.active||e.moved>9||(e.hold=!0,this._startHoldBloom())},240)}_onPointerMove(t){this.mouse.x=t.clientX,this.mouse.y=t.clientY,this.mouse.active=!0;let e=t.clientX/this.rig.width*2-1,n=-(t.clientY/this.rig.height*2-1);if(this.rig.setPointer(e,n),this.pointers.has(t.pointerId)&&this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY}),this.pointers.size===2){let[o,l]=[...this.pointers.values()],c=Math.hypot(o.x-l.x,o.y-l.y);this.pinchDist>0&&this.rig.addZoom((this.pinchDist-c)*.0035),this.pinchDist=c;return}let s=this.drag;if(!s.active)return;let r=t.clientX-s.lx,a=t.clientY-s.ly;s.lx=t.clientX,s.ly=t.clientY,s.moved+=Math.abs(r)+Math.abs(a),s.moved>9&&(clearTimeout(s.timer),this.holdBloom&&this._endHoldBloom(),this.rig.beginOrbit(),this.rig.setOrbitDelta(r*.0042,-a*.0024))}_onPointerUp(t){if(this.pointers.delete(t.pointerId),this.pointers.size>0)return;this.mouseDown=!1;let e=this.drag;clearTimeout(e.timer),e.active&&e.moved<=9&&!this.holdBloom&&(this.tree.burst(.22),this.audio?.playClick?.()),this.holdBloom&&this._endHoldBloom(),e.active&&this.rig.endOrbit(),e.active=!1,e.hold=!1,this.pinchDist=0}_onWheel(t){t.preventDefault(),this.rig.addZoom(ie(-t.deltaY*8e-4,-.1,.1))}_startHoldBloom(){if(this.holdBloom)return;this.holdBloom=!0,this.rig.galaxySmooth=Math.max(this.rig.galaxySmooth,.22),this._focusIndex=((this._focusIndex||0)+1)%8;let t=this.cloud.cards.filter(e=>e.photo.featured);this.cloud.setFocus(t[this._focusIndex%Math.max(1,t.length)]||null),this.tree.burst(1),this.audio?.playWhoosh?.({strength:.9}),this.ui.ripple(this.drag.sx,this.drag.sy),this._setStatus(this.mode==="gesture"?"camera":"pointer","拾起这片星河…"),this._statusLockUntil=Date.now()+3e3}_endHoldBloom(){this.holdBloom&&(this.holdBloom=!1,this.cloud.setFocus(null),this.tree.burst(.55),this.audio?.playReform?.(),this._statusLockUntil=0,this._setStatus(this.mode==="gesture"?"camera":"pointer",this.mode==="gesture"?"手势待识别":"鼠标 / 触摸"))}async _onUpload(t){this.ui.toast("正在加入照片…",1200);let e=await this.cloud.appendPhotos(t);e>0?(this.ui.toast(`已加入 ${e} 张照片 · 点「散作星河」就能看到它们`),this.manualGalaxy=!0,this.ui.setGalaxy(!0)):this.ui.toast("这些文件没能读取，换几张试试？")}_screenToWorld(t,e,n,s){let r=t/Math.max(1,this.rig.width)*2-1,a=-(e/Math.max(1,this.rig.height)*2-1),o=2*n*Math.tan(this.rig.camera.fov*Math.PI/360),l=o*this.rig.camera.aspect;return s.x=this.rig.camera.position.x+r*l/2,s.y=this.rig.camera.position.y+a*o/2,s.z=this.rig.camera.position.z-n,s}_loop(){this._stop=D_(t=>{this._t+=t;let e=this._t,n=0,s=0;if(this.mode==="gesture"&&this.tracker){let l=this.tracker.update(t,this.rig.width,this.rig.height);this.handState=l;let c=performance.now();if(l.active){let h=this.tracker.getWorldPosition(this.rig,this._handWorld),f=ie(l.proximity||0);if(n=ie(l.present*(.55+.45*f)*(.75+l.pinch*.85)),this.tree.setHand(h,n),this.cloud.setPointer(l.x*this.rig.width,l.y*this.rig.height,l.pinch,!0),this.ui.updateCursor(l.x,l.y,{visible:!0,pinch:l.pinch,grab:!!this.cloud.grabbed}),l.fist&&this.gestureOpen&&c-this.gestureSwitchAt>650?(this.gestureOpen=!1,this.gestureSwitchAt=c,this.tree.burst(.45),this.ui.toast("握拳 · 收拢星河",1600),this.audio?.playWhoosh?.({strength:.6})):(l.openPalm||0)>.86&&!this.gestureOpen&&c-this.gestureSwitchAt>650&&(this.gestureOpen=!0,this.gestureSwitchAt=c,this.tree.burst(.85),this.ui.toast("张开手掌 · 星河绽放",1600),this.audio?.playWhoosh?.({strength:1})),l.pinchTap&&c-this._lastPinchTapAt>550&&(this._lastPinchTapAt=c,this._onPinchTap(l.pinchTap)),s=this.gestureOpen?1:0,l.present>.5&&c>(this._statusLockUntil||0)){let u=l.pinch?this.cloud.grabbed?"捏住照片 · 拖动摆好位置":"捏合中 · 捏住照片可以拖动":l.fist?"握拳 · 收拢星河":(l.openPalm||0)>.5?"张开手掌 · 星河绽放":this.gestureOpen?"捏住照片拖动 · 轻捏一下放大":"张开手掌 · 让圣诞树打开";this._setStatus("camera",u)}}else n=0,this.tree.setHand(null,0),this.cloud.setPointer(-9999,-9999,!1,!1),this.ui.hideCursor(),!this.cloud.grabbed&&this.tracker.running&&this.tracker.landmarker&&this._setStatus("camera",this.gestureOpen?"星河已展开 · 握拳收拢":"张开手掌 · 让圣诞树打开");this.gestureGalaxy=s}else{if(this.mouse.active){let l=this.mouseDown?.55:.16,c=this._screenToWorld(this.mouse.x,this.mouse.y,8.2,this._handWorld);this.tree.setHand(c,l),n=l}this.gestureGalaxy=0}this.mode==="gesture"&&this._updateCamDock();let r=this.holdBloom?1:0,a=this.mode==="gesture"?Math.max(this.manualGalaxy?1:0,this.gestureGalaxy,r):Math.max(this.manualGalaxy?1:0,r);this.rig.galaxy=a,this.rig.update(t,e),this.tree.update(t,e),this.cloud.setReveal(Ps(.08,.55,this.rig.galaxySmooth)),this.cloud.update(t,e),this.frames.sync(this.cloud.cards,t);let o=this._readAudioLevel(t);this.tree.setMusicLevel(o),this.rig.setMusicLevel?.(o),this.audioReady&&this.audio.setGestureIntensity?.(ie(n*.8+this.rig.galaxySmooth*.4)),this.rig.render(),this.frames.render()})}_readAudioLevel(t){let e=this.audio?.getAnalyser?.(),n=0;if(e&&this.audio.musicEnabled){(!this._freqData||this._freqData.length!==e.frequencyBinCount)&&(this._freqData=new Uint8Array(e.frequencyBinCount)),e.getByteFrequencyData(this._freqData);let s=Math.min(56,this._freqData.length),r=0;for(let a=0;a<s;a++)r+=this._freqData[a];n=ie(r/Math.max(1,s)/255*1.7,0,1)}return this._audioLevel=Be(this._audioLevel||0,n,7,t),this._audioLevel}_onContextLost(){try{let t=Number(sessionStorage.getItem("xmas-ctx-lost")||0),e=Date.now();if(sessionStorage.setItem("xmas-ctx-lost",String(e)),e-t<1e4){this.ui?.toast?.("画面没有恢复，请手动刷新本页（F5）");return}}catch{}this.ui?.toast?.("画面被系统回收了，正在自动恢复…"),setTimeout(()=>location.reload(),900)}dispose(){this._stop?.(),this.tracker?.stop(),this.audio?.dispose?.(),this.rig?.dispose?.()}};function nA(i){return i===!0||i==="true"||i===1}async function sA(){let i=new s0;try{await i.init()}catch(t){console.error("[xmas] 初始化失败",t);let e=String(t?.message||t||""),n=/webgl|context|gpu|THREE\.WebGLRenderer/i.test(e),s=document.getElementById("loadingTip");s&&(s.textContent=n?"这个浏览器 / 显卡暂时不支持 WebGL2：请用最新版 Chrome 或 Edge 打开，或换一台设备。":"出了一点小问题，刷新一次通常就好："+e);let r=document.getElementById("loadingBar");r&&(r.style.width="100%");return}window.__xmasApp=i}sA();})();
