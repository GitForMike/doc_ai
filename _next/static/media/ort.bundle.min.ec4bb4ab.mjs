let t;var r,i,a,n,s,o,u,l,d,p,c,h,f,m,g,_,y,b,$,v,w,x,k,S,T,I,E,z,C,A,O,R=Object.defineProperty,B=Object.getOwnPropertyDescriptor,D=Object.getOwnPropertyNames,M=Object.prototype.hasOwnProperty,N=(t=function(t){if("u">typeof require)return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')},"u">typeof require?require:"u">typeof Proxy?new Proxy(t,{get:(t,r)=>("u">typeof require?require:t)[r]}):t),P=(t,r)=>()=>(t&&(r=t(t=0)),r),U=(t,r)=>{for(var i in r)R(t,i,{get:r[i],enumerable:!0})},W=(t,r,i,a)=>{if(r&&"object"==typeof r||"function"==typeof r)for(let n of D(r))M.call(t,n)||n===i||R(t,n,{get:()=>r[n],enumerable:!(a=B(r,n))||a.enumerable});return t},q=t=>W(R({},"__esModule",{value:!0}),t),L=P(()=>{"use strict";r=new Map,i=[],a=(t,a,n)=>{if(a&&"function"==typeof a.init&&"function"==typeof a.createInferenceSessionHandler){let s=r.get(t);if(void 0===s)r.set(t,{backend:a,priority:n});else{if(s.priority>n)return;if(s.priority===n&&s.backend!==a)throw Error(`cannot register backend "${t}" using priority ${n}`)}if(n>=0){let a=i.indexOf(t);-1!==a&&i.splice(a,1);for(let a=0;a<i.length;a++)if(r.get(i[a]).priority<=n){i.splice(a,0,t);return}i.push(t)}return}throw TypeError("not a valid backend")},n=async t=>{let i=r.get(t);if(!i)return"backend not found.";if(i.initialized)return i.backend;if(i.aborted)return i.error;{let r=!!i.initPromise;try{return r||(i.initPromise=i.backend.init(t)),await i.initPromise,i.initialized=!0,i.backend}catch(t){return r||(i.error=`${t}`,i.aborted=!0),i.error}finally{delete i.initPromise}}},s=async t=>{let r=t.executionProviders||[],a=r.map(t=>"string"==typeof t?t:t.name),s=0===a.length?i:a,o,u=[],l=new Set;for(let t of s){let r=await n(t);"string"==typeof r?u.push({name:t,err:r}):(o||(o=r),o===r&&l.add(t))}if(!o)throw Error(`no available backend found. ERR: ${u.map(t=>`[${t.name}] ${t.err}`).join(", ")}`);for(let{name:t,err:r}of u)a.includes(t)&&console.warn(`removing requested execution provider "${t}" from session options because it is not available: ${r}`);let d=r.filter(t=>l.has("string"==typeof t?t:t.name));return[o,new Proxy(t,{get:(t,r)=>"executionProviders"===r?d:Reflect.get(t,r)})]}}),V=P(()=>{"use strict";L()}),G=P(()=>{"use strict";o="1.21.0-dev.20241212-1f88284f96"}),H=P(()=>{"use strict";G(),u="warning",Object.defineProperty(l={wasm:{},webgl:{},webgpu:{},versions:{common:o},set logLevel(e){if(void 0!==e){if("string"!=typeof e||-1===["verbose","info","warning","error","fatal"].indexOf(e))throw Error(`Unsupported logging level: ${e}`);u=e}},get logLevel(){return u}},"logLevel",{enumerable:!0})}),F=P(()=>{"use strict";H(),d=l}),j=P(()=>{"use strict";p=(t,r)=>{let i="u">typeof document?document.createElement("canvas"):new OffscreenCanvas(1,1);i.width=t.dims[3],i.height=t.dims[2];let a=i.getContext("2d");if(null!=a){let n,s;r?.tensorLayout!==void 0&&"NHWC"===r.tensorLayout?(n=t.dims[2],s=t.dims[3]):(n=t.dims[3],s=t.dims[2]);let o=r?.format!==void 0?r.format:"RGB",u=r?.norm,l,d;void 0===u||void 0===u.mean?l=[255,255,255,255]:"number"==typeof u.mean?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],0],void 0!==u.mean[3]&&(l[3]=u.mean[3])),void 0===u||void 0===u.bias?d=[0,0,0,0]:"number"==typeof u.bias?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],void 0!==u.bias[3]&&(d[3]=u.bias[3]));let p=s*n,c=0,h=p,f=2*p,m=-1;"RGBA"===o?(c=0,h=p,f=2*p,m=3*p):"RGB"===o?(c=0,h=p,f=2*p):"RBG"===o&&(c=0,f=p,h=2*p);for(let r=0;r<s;r++)for(let i=0;i<n;i++){let n=(t.data[c++]-d[0])*l[0],s=(t.data[h++]-d[1])*l[1],o=(t.data[f++]-d[2])*l[2],u=-1===m?255:(t.data[m++]-d[3])*l[3];a.fillStyle="rgba("+n+","+s+","+o+","+u+")",a.fillRect(i,r,1,1)}if("toDataURL"in i)return i.toDataURL();throw Error("toDataURL is not supported")}throw Error("Can not access image data")},c=(t,r)=>{let i="u">typeof document?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),a;if(null!=i){let n,s,o;r?.tensorLayout!==void 0&&"NHWC"===r.tensorLayout?(n=t.dims[2],s=t.dims[1],o=t.dims[3]):(n=t.dims[3],s=t.dims[2],o=t.dims[1]);let u=void 0!==r&&void 0!==r.format?r.format:"RGB",l=r?.norm,d,p;void 0===l||void 0===l.mean?d=[255,255,255,255]:"number"==typeof l.mean?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],void 0!==l.mean[3]&&(d[3]=l.mean[3])),void 0===l||void 0===l.bias?p=[0,0,0,0]:"number"==typeof l.bias?p=[l.bias,l.bias,l.bias,l.bias]:(p=[l.bias[0],l.bias[1],l.bias[2],0],void 0!==l.bias[3]&&(p[3]=l.bias[3]));let c=s*n;if(void 0!==r&&(void 0!==r.format&&4===o&&"RGBA"!==r.format||3===o&&"RGB"!==r.format&&"BGR"!==r.format))throw Error("Tensor format doesn't match input tensor dims");let h=0,f=1,m=2,g=3,_=0,y=c,b=2*c,$=-1;"RGBA"===u?(_=0,y=c,b=2*c,$=3*c):"RGB"===u?(_=0,y=c,b=2*c):"RBG"===u&&(_=0,b=c,y=2*c),a=i.createImageData(n,s);for(let r=0;r<s*n;h+=4,f+=4,m+=4,g+=4,r++)a.data[h]=(t.data[_++]-p[0])*d[0],a.data[f]=(t.data[y++]-p[1])*d[1],a.data[m]=(t.data[b++]-p[2])*d[2],a.data[g]=-1===$?255:(t.data[$++]-p[3])*d[3]}else throw Error("Can not access image data");return a}}),K=P(()=>{"use strict";Z(),h=(t,r)=>{if(void 0===t)throw Error("Image buffer must be defined");if(void 0===r.height||void 0===r.width)throw Error("Image height and width must be defined");if("NHWC"===r.tensorLayout)throw Error("NHWC Tensor layout is not supported yet");let{height:i,width:a}=r,n=r.norm??{mean:255,bias:0},s,o;s="number"==typeof n.mean?[n.mean,n.mean,n.mean,n.mean]:[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],o="number"==typeof n.bias?[n.bias,n.bias,n.bias,n.bias]:[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let u=void 0!==r.format?r.format:"RGBA",l=void 0!==r.tensorFormat&&void 0!==r.tensorFormat?r.tensorFormat:"RGB",d=i*a,p=new Float32Array("RGBA"===l?4*d:3*d),c=4,h=0,f=1,m=2,g=3,_=0,y=d,b=2*d,$=-1;"RGB"===u&&(c=3,h=0,f=1,m=2,g=-1),"RGBA"===l?$=3*d:"RBG"===l?(_=0,b=d,y=2*d):"BGR"===l&&(b=0,y=d,_=2*d);for(let r=0;r<d;r++,h+=c,m+=c,f+=c,g+=c)p[_++]=(t[h]+o[0])/s[0],p[y++]=(t[f]+o[1])/s[1],p[b++]=(t[m]+o[2])/s[2],-1!==$&&-1!==g&&(p[$++]=(t[g]+o[3])/s[3]);return"RGBA"===l?new S("float32",p,[1,4,i,a]):new S("float32",p,[1,3,i,a])},f=async(t,r)=>{let i="u">typeof HTMLImageElement&&t instanceof HTMLImageElement,a="u">typeof ImageData&&t instanceof ImageData,n="u">typeof ImageBitmap&&t instanceof ImageBitmap,s="string"==typeof t,o,u=r??{},l=()=>{if("u">typeof document)return document.createElement("canvas");if("u">typeof OffscreenCanvas)return new OffscreenCanvas(1,1);throw Error("Canvas is not supported")},d=t=>"u">typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||t instanceof OffscreenCanvas?t.getContext("2d"):null;if(i){let i=l();i.width=t.width,i.height=t.height;let a=d(i);if(null!=a){let i=t.height,n=t.width;if(void 0!==r&&void 0!==r.resizedHeight&&void 0!==r.resizedWidth&&(i=r.resizedHeight,n=r.resizedWidth),void 0!==r){if(u=r,void 0!==r.tensorFormat)throw Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=i,u.width=n}else u.tensorFormat="RGBA",u.height=i,u.width=n;a.drawImage(t,0,0),o=a.getImageData(0,0,n,i).data}else throw Error("Can not access image data")}else if(a){let i,a;if(void 0!==r&&void 0!==r.resizedWidth&&void 0!==r.resizedHeight?(i=r.resizedHeight,a=r.resizedWidth):(i=t.height,a=t.width),void 0!==r&&(u=r),u.format="RGBA",u.height=i,u.width=a,void 0!==r){let r=l();r.width=a,r.height=i;let n=d(r);if(null!=n)n.putImageData(t,0,0),o=n.getImageData(0,0,a,i).data;else throw Error("Can not access image data")}else o=t.data}else if(n){if(void 0===r)throw Error("Please provide image config with format for Imagebitmap");let i=l();i.width=t.width,i.height=t.height;let a=d(i);if(null!=a){let r=t.height,i=t.width;return a.drawImage(t,0,0,i,r),o=a.getImageData(0,0,i,r).data,u.height=r,u.width=i,h(o,u)}throw Error("Can not access image data")}else{if(s)return new Promise((r,i)=>{let a=l(),n=d(a);if(!t||!n)return i();let s=new Image;s.crossOrigin="Anonymous",s.src=t,s.onload=()=>{a.width=s.width,a.height=s.height,n.drawImage(s,0,0,a.width,a.height);let t=n.getImageData(0,0,a.width,a.height);u.height=a.height,u.width=a.width,r(h(t.data,u))}});throw Error("Input data provided is not supported - aborted tensor creation")}if(void 0!==o)return h(o,u);throw Error("Input data provided is not supported - aborted tensor creation")},m=(t,r)=>{let{width:i,height:a,download:n,dispose:s}=r;return new S({location:"texture",type:"float32",texture:t,dims:[1,a,i,4],download:n,dispose:s})},g=(t,r)=>{let{dataType:i,dims:a,download:n,dispose:s}=r;return new S({location:"gpu-buffer",type:i??"float32",gpuBuffer:t,dims:a,download:n,dispose:s})},_=(t,r)=>{let{dataType:i,dims:a,download:n,dispose:s}=r;return new S({location:"ml-tensor",type:i??"float32",mlTensor:t,dims:a,download:n,dispose:s})},y=(t,r,i)=>new S({location:"cpu-pinned",type:t,data:r,dims:i??[r.length]})}),Y=P(()=>{"use strict";b=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),$=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),v=!1,w=()=>{if(!v){v=!0;let t="u">typeof BigInt64Array&&BigInt64Array.from,r="u">typeof BigUint64Array&&BigUint64Array.from,i="u">typeof Float16Array&&Float16Array.from;t&&(b.set("int64",BigInt64Array),$.set(BigInt64Array,"int64")),r&&(b.set("uint64",BigUint64Array),$.set(BigUint64Array,"uint64")),i?(b.set("float16",Float16Array),$.set(Float16Array,"float16")):b.set("float16",Uint16Array)}}}),Q=P(()=>{"use strict";Z(),x=t=>{let r=1;for(let i=0;i<t.length;i++){let a=t[i];if("number"!=typeof a||!Number.isSafeInteger(a))throw TypeError(`dims[${i}] must be an integer, got: ${a}`);if(a<0)throw RangeError(`dims[${i}] must be a non-negative integer, got: ${a}`);r*=a}return r},k=(t,r)=>{switch(t.location){case"cpu":return new S(t.type,t.data,r);case"cpu-pinned":return new S({location:"cpu-pinned",data:t.data,type:t.type,dims:r});case"texture":return new S({location:"texture",texture:t.texture,type:t.type,dims:r});case"gpu-buffer":return new S({location:"gpu-buffer",gpuBuffer:t.gpuBuffer,type:t.type,dims:r});case"ml-tensor":return new S({location:"ml-tensor",mlTensor:t.mlTensor,type:t.type,dims:r});default:throw Error(`tensorReshape: tensor location ${t.location} is not supported`)}}}),Z=P(()=>{"use strict";j(),K(),Y(),Q(),S=class{constructor(t,r,i){let a,n;if(w(),"object"==typeof t&&"location"in t)switch(this.dataLocation=t.location,a=t.type,n=t.dims,t.location){case"cpu-pinned":{let r=b.get(a);if(!r)throw TypeError(`unsupported type "${a}" to create tensor from pinned buffer`);if(!(t.data instanceof r))throw TypeError(`buffer should be of type ${r.name}`);this.cpuData=t.data;break}case"texture":if("float32"!==a)throw TypeError(`unsupported type "${a}" to create tensor from texture`);this.gpuTextureData=t.texture,this.downloader=t.download,this.disposer=t.dispose;break;case"gpu-buffer":if("float32"!==a&&"float16"!==a&&"int32"!==a&&"int64"!==a&&"uint32"!==a&&"uint8"!==a&&"bool"!==a&&"uint4"!==a&&"int4"!==a)throw TypeError(`unsupported type "${a}" to create tensor from gpu buffer`);this.gpuBufferData=t.gpuBuffer,this.downloader=t.download,this.disposer=t.dispose;break;case"ml-tensor":if("float32"!==a&&"float16"!==a&&"int32"!==a&&"int64"!==a&&"uint32"!==a&&"uint64"!==a&&"int8"!==a&&"uint8"!==a&&"bool"!==a&&"uint4"!==a&&"int4"!==a)throw TypeError(`unsupported type "${a}" to create tensor from MLTensor`);this.mlTensorData=t.mlTensor,this.downloader=t.download,this.disposer=t.dispose;break;default:throw Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if("string"==typeof t){if(a=t,o=i,"string"===t){if(!Array.isArray(r))throw TypeError("A string tensor's data must be a string array.");s=r}else{let i=b.get(t);if(void 0===i)throw TypeError(`Unsupported tensor type: ${t}.`);if(Array.isArray(r)){if("float16"===t&&i===Uint16Array||"uint4"===t||"int4"===t)throw TypeError(`Creating a ${t} tensor from number array is not supported. Please use ${i.name} as data.`);s="uint64"===t||"int64"===t?i.from(r,BigInt):i.from(r)}else if(r instanceof i)s=r;else if(r instanceof Uint8ClampedArray){if("uint8"===t)s=Uint8Array.from(r);else throw TypeError("A Uint8ClampedArray tensor's data must be type of uint8")}else throw TypeError(`A ${a} tensor's data must be type of ${i}`)}}else if(o=r,Array.isArray(t)){if(0===t.length)throw TypeError("Tensor type cannot be inferred from an empty array.");let r=typeof t[0];if("string"===r)a="string",s=t;else if("boolean"===r)a="bool",s=Uint8Array.from(t);else throw TypeError(`Invalid element type of data array: ${r}.`)}else if(t instanceof Uint8ClampedArray)a="uint8",s=Uint8Array.from(t);else{let r=$.get(t.constructor);if(void 0===r)throw TypeError(`Unsupported type for tensor data: ${t.constructor}.`);a=r,s=t}if(void 0===o)o=[s.length];else if(!Array.isArray(o))throw TypeError("A tensor's dims must be a number array");n=o,this.cpuData=s,this.dataLocation="cpu"}let s=x(n);if(this.cpuData&&s!==this.cpuData.length&&!(("uint4"===a||"int4"===a)&&Math.ceil(s/2)===this.cpuData.length))throw Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=a,this.dims=n,this.size=s}static async fromImage(t,r){return f(t,r)}static fromTexture(t,r){return m(t,r)}static fromGpuBuffer(t,r){return g(t,r)}static fromMLTensor(t,r){return _(t,r)}static fromPinnedBuffer(t,r,i){return y(t,r,i)}toDataURL(t){return p(this,t)}toImageData(t){return c(this,t)}get data(){if(this.ensureValid(),!this.cpuData)throw Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(t){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":if(!this.downloader)throw Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let r=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=r,t&&this.disposer&&(this.disposer(),this.disposer=void 0),r}finally{this.isDownloading=!1}default:throw Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if("none"===this.dataLocation)throw Error("The tensor is disposed.")}reshape(t){if(this.ensureValid(),this.downloader||this.disposer)throw Error("Cannot reshape a tensor that owns GPU resource.");return k(this,t)}}}),X=P(()=>{"use strict";Z(),T=S}),J=P(()=>{"use strict";H(),I=(t,r)=>{(typeof l.trace>"u"?l.wasm.trace:l.trace)&&console.timeStamp(`${t}::ORT::${r}`)},E=(t,r)=>{let i=Error().stack?.split(/\r\n|\r|\n/g)||[],a=!1;for(let n=0;n<i.length;n++){if(a&&!i[n].includes("TRACE_FUNC")){let a=`FUNC_${t}::${i[n].trim().split(" ")[1]}`;r&&(a+=`::${r}`),I("CPU",a);return}i[n].includes("TRACE_FUNC")&&(a=!0)}},z=t=>{(typeof l.trace>"u"?l.wasm.trace:l.trace)&&E("BEGIN",t)},C=t=>{(typeof l.trace>"u"?l.wasm.trace:l.trace)&&E("END",t)}}),ee=P(()=>{"use strict";L(),X(),J(),A=class t{constructor(t){this.handler=t}async run(t,r,i){z();let a={},n={};if("object"!=typeof t||null===t||t instanceof T||Array.isArray(t))throw TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if("object"==typeof r){if(null===r)throw TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof T)throw TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(0===r.length)throw TypeError("'fetches' cannot be an empty array.");for(let t of(s=!1,r)){if("string"!=typeof t)throw TypeError("'fetches' must be a string array or an object.");if(-1===this.outputNames.indexOf(t))throw RangeError(`'fetches' contains invalid output name: ${t}.`);a[t]=null}if("object"==typeof i&&null!==i)n=i;else if("u">typeof i)throw TypeError("'options' must be an object.")}else{let t=!1,o=Object.getOwnPropertyNames(r);for(let i of this.outputNames)if(-1!==o.indexOf(i)){let n=r[i];(null===n||n instanceof T)&&(t=!0,s=!1,a[i]=n)}if(t){if("object"==typeof i&&null!==i)n=i;else if("u">typeof i)throw TypeError("'options' must be an object.")}else n=r}}else if("u">typeof r)throw TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let r of this.inputNames)if(typeof t[r]>"u")throw Error(`input '${r}' is missing in 'feeds'.`);if(s)for(let t of this.outputNames)a[t]=null;let o=await this.handler.run(t,a,n),u={};for(let t in o)if(Object.hasOwnProperty.call(o,t)){let r=o[t];r instanceof T?u[t]=r:u[t]=new T(r.type,r.data,r.dims)}return C(),u}async release(){return this.handler.dispose()}static async create(r,i,a,n){z();let o,u={};if("string"==typeof r){if(o=r,"object"==typeof i&&null!==i)u=i;else if("u">typeof i)throw TypeError("'options' must be an object.")}else if(r instanceof Uint8Array){if(o=r,"object"==typeof i&&null!==i)u=i;else if("u">typeof i)throw TypeError("'options' must be an object.")}else if(r instanceof ArrayBuffer||"u">typeof SharedArrayBuffer&&r instanceof SharedArrayBuffer){let t=0,s=r.byteLength;if("object"==typeof i&&null!==i)u=i;else if("number"==typeof i){if(!Number.isSafeInteger(t=i))throw RangeError("'byteOffset' must be an integer.");if(t<0||t>=r.byteLength)throw RangeError(`'byteOffset' is out of range [0, ${r.byteLength}).`);if(s=r.byteLength-t,"number"==typeof a){if(!Number.isSafeInteger(s=a))throw RangeError("'byteLength' must be an integer.");if(s<=0||t+s>r.byteLength)throw RangeError(`'byteLength' is out of range (0, ${r.byteLength-t}].`);if("object"==typeof n&&null!==n)u=n;else if("u">typeof n)throw TypeError("'options' must be an object.")}else if("u">typeof a)throw TypeError("'byteLength' must be a number.")}else if("u">typeof i)throw TypeError("'options' must be an object.");o=new Uint8Array(r,t,s)}else throw TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[l,d]=await s(u),p=await l.createInferenceSessionHandler(o,d);return C(),new t(p)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),et=P(()=>{"use strict";ee(),O=A}),er=P(()=>{}),ei=P(()=>{}),ea=P(()=>{}),en=P(()=>{}),es={};U(es,{InferenceSession:()=>O,TRACE:()=>I,TRACE_FUNC_BEGIN:()=>z,TRACE_FUNC_END:()=>C,Tensor:()=>T,env:()=>d,registerBackend:()=>a});var eo=P(()=>{"use strict";V(),F(),et(),X(),er(),ei(),J(),ea(),en()}),eu=P(()=>{}),el={};U(el,{default:()=>ec});var ed,ep,ec,eh=P(()=>{"use strict";l_(),oN(),oM(),ed="ort-wasm-proxy-worker",(ep=globalThis.self?.name===ed)&&(self.onmessage=t=>{let{type:r,in:i}=t.data;try{switch(r){case"init-wasm":eM(i.wasm).then(()=>{uK(i).then(()=>{postMessage({type:r})},t=>{postMessage({type:r,err:t})})},t=>{postMessage({type:r,err:t})});break;case"init-ep":{let{epName:t,env:a}=i;uY(a,t).then(()=>{postMessage({type:r})},t=>{postMessage({type:r,err:t})});break}case"copy-from":{let{buffer:t}=i,a=uX(t);postMessage({type:r,out:a});break}case"create":{let{model:t,options:a}=i;uJ(t,a).then(t=>{postMessage({type:r,out:t})},t=>{postMessage({type:r,err:t})});break}case"release":u0(i),postMessage({type:r});break;case"run":{let{sessionId:t,inputIndices:a,inputs:n,outputIndices:s,options:o}=i;u2(t,a,n,s,Array(s.length).fill(null),o).then(t=>{t.some(t=>"cpu"!==t[3])?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:t},u4([...n,...t]))},t=>{postMessage({type:r,err:t})});break}case"end-profiling":u3(i),postMessage({type:r})}}catch(t){postMessage({type:r,err:t})}}),ec=ep?null:t=>new Worker(t??eb,{type:"module",name:ed})}),ef={};U(ef,{default:()=>e_});var em,eg,e_,ey,eb,e$,ev,ew,ex,ek,eS,eT,eI,eE,ez,eC,eA,eO,eR,eB,eD,eM,eN,eP,eU,eW,eq,eL,eV,eG,eH,eF,ej,eK,eY,eQ,eZ,eX,eJ,e0,e1,e2,e3,e4,e6,e8,e5,e9,e7,te,tt,tr,ti,ta,tn,ts,to,tu,tl,td,tp,tc,th,tf,tm,tg,t_,ty,tb,t$,tv,tw,tx,tk,tS,tT,tI,tE,tz,tC,tA,tO,tR,tB,tD,tM,tN,tP,tU,tW,tq,tL,tV,tG,tH,tF,tj,tK,tY,tQ,tZ,tX,tJ,t0,t1,t2,t3,t4,t6,t8,t5,t9,t7,re,rt,rr,ri,ra,rn,rs,ro,ru,rl,rd,rp,rc,rh,rf,rm,rg,r_,ry,rb,r$,rv,rw,rx,rk,rS,rT,rI,rE,rz,rC,rA,rO,rR,rB,rD,rM,rN,rP,rU,rW,rq,rL,rV,rG,rH,rF,rj,rK,rY,rQ,rZ,rX,rJ,r0,r1,r2,r3,r4,r6,r8,r5,r9,r7,ie,it,ir,ii,ia,is,io,iu,il,id,ip,ic,ih,im,ig,i_,iy,ib,i$,iv,iw,ix,ik,iS,iT,iI,iE,iz,iC,iA,iO,iR,iB,iD,iM,iN,iP,iU,iW,iq,iL,iV,iG,iH,iF,ij,iK,iY,iQ,iZ,iX,iJ,i0,i1,i2,i3,i4,i6,i8,i5,i9,i7,ae,at,ar,ai,aa,an,as,ao,au,al,ad,ap,ac,ah,af,am,ag,a_,ay,ab,a$,av,aw,ax,ak,aS,aT,aI,aE,az,aC,aA,aO,aR,aB,aD,aM,aN,aP,aU,aW,aq,aL,aV,aG,aH,aF,aj,aK,aY,aQ,aZ,aX,aJ,a0,a1,a2,a3,a4,a6,a8,a5,a9,a7,ne,nt,nr,ni,na,nn,ns,no,nu,nl,nd,np,nc,nh,nf,nm,ng,n_,ny,nb,n$,nv,nw,nx,nk,nS,nT,nI,nE,nz,nC,nA,nO,nR,nB,nD,nM,nN,nP,nU,nW,nq,nL,nV,nG,nH,nF,nj,nK,nY,nQ,nZ,nX,nJ,n0,n1,n2,n3,n4,n6,n8,n5,n9,n7,se,st,sr,si,sa,sn,ss,so,su,sl,sd,sp,sc,sh,sf,sm,sg,s_,sy,sb,s$,sv,sw,sx,sk,sS,sT,sI,sE,sz,sC,sA,sO,sR,sB,sD,sM,sN,sP,sU,sW,sq,sL,sV,sG,sH,sF,sj,sK,sY,sQ,sZ,sX,sJ,s0,s1,s2,s3,s4,s6,s8,s5,s9,s7,oe,ot,or,oi,oa,on,os,oo,ou,ol,od,op,oc,oh,of,om,og,o_,oy,ob,o$,ov,ow,ox,ok,oS,oT,oI,oE,oz,oC,oA,oO,oR,oB,oD=P(()=>{"use strict";em=import.meta.url,e_=eg=async function(t={}){function r(){return A.buffer!=B.buffer&&H(),B}function i(){return A.buffer!=B.buffer&&H(),D}function a(){return A.buffer!=B.buffer&&H(),M}function n(){return A.buffer!=B.buffer&&H(),N}function s(){return A.buffer!=B.buffer&&H(),P}function o(){return A.buffer!=B.buffer&&H(),U}function u(){return A.buffer!=B.buffer&&H(),W}function l(){return A.buffer!=B.buffer&&H(),V}var d,p,c=Object.assign({},t),h=new Promise((t,r)=>{d=t,p=r}),f="object"==typeof window,m="function"==typeof importScripts,g=m&&"em-pthread"==self.name;c.mountExternalData=(t,r)=>{t.startsWith("./")&&(t=t.substring(2)),(c.Fb||(c.Fb=new Map)).set(t,r)},c.unmountExternalData=()=>{delete c.Fb};var _=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let y=()=>{let t=(t,r,i)=>(...a)=>{let n=tP,s=r?.();a=t(...a);let o=r?.();return s!==o&&(t=o,i(s),r=i=null),tP!=n?new Promise((t,r)=>{tG={resolve:t,reject:r}}):a},r=t=>async(...r)=>{try{if(c.Gb)throw Error("Session already started");let i=c.Gb={hc:r[0],errors:[]},a=await t(...r);if(c.Gb!==i)throw Error("Session mismatch");c.Hb?.flush();let n=i.errors;if(0<n.length){let t=await Promise.all(n);if(t=t.filter(t=>t),0<t.length)throw Error(t.join(`
`))}return a}finally{c.Gb=null}};c._OrtCreateSession=t(c._OrtCreateSession,()=>c._OrtCreateSession,t=>c._OrtCreateSession=t),c._OrtRun=r(t(c._OrtRun,()=>c._OrtRun,t=>c._OrtRun=t)),c._OrtRunWithBinding=r(t(c._OrtRunWithBinding,()=>c._OrtRunWithBinding,t=>c._OrtRunWithBinding=t)),c._OrtBindInput=t(c._OrtBindInput,()=>c._OrtBindInput,t=>c._OrtBindInput=t),y=void 0};c.jsepInit=(t,r)=>{if(y?.(),"webgpu"===t){[c.Hb,c.Vb,c.Zb,c.Ob,c.Yb,c.kb,c.$b,c.cc,c.Wb,c.Xb,c.ac]=r;let t=c.Hb;c.jsepRegisterBuffer=(r,i,a,n)=>t.registerBuffer(r,i,a,n),c.jsepGetBuffer=r=>t.getBuffer(r),c.jsepCreateDownloader=(r,i,a)=>t.createDownloader(r,i,a),c.jsepOnCreateSession=r=>{t.onCreateSession(r)},c.jsepOnReleaseSession=r=>{t.onReleaseSession(r)},c.jsepOnRunStart=r=>t.onRunStart(r),c.dc=(r,i)=>{t.upload(r,i)}}else if("webnn"===t){[c.Hb,c.bc,c.Pb,c.jsepEnsureTensor,c.ec,c.jsepDownloadTensor]=r,c.jsepReleaseTensorId=c.Pb;let t=c.Hb;c.jsepOnRunStart=r=>t.onRunStart(r),c.jsepRegisterMLContext=(r,i)=>{t.registerMLContext(r,i)},c.jsepOnReleaseSession=r=>{t.onReleaseSession(r)},c.jsepCreateMLTensorDownloader=(r,i)=>t.createMLTensorDownloader(r,i),c.jsepRegisterMLTensor=(r,i,a)=>t.registerMLTensor(r,i,a),c.jsepCreateMLContext=r=>t.createMLContext(r),c.jsepRegisterMLConstant=(r,i,a,n,s)=>t.registerMLConstant(r,i,a,n,s,c.Fb)}};var b,$,v=Object.assign({},c),w=(t,r)=>{throw r},x="";(f||m)&&(m?x=self.location.href:"u">typeof document&&document.currentScript&&(x=document.currentScript.src),em&&(x=em),x=x.startsWith("blob:")?"":x.substr(0,x.replace(/[?#].*/,"").lastIndexOf("/")+1),m&&($=t=>{var r=new XMLHttpRequest;return r.open("GET",t,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}),b=(t,r,i)=>{var a=new XMLHttpRequest;a.open("GET",t,!0),a.responseType="arraybuffer",a.onload=()=>{200==a.status||0==a.status&&a.response?r(a.response):i()},a.onerror=i,a.send(null)});var k,S=console.log.bind(console),T=console.error.bind(console),I=S,E=T;if(Object.assign(c,v),v=null,g){let t=function(r){try{var i=r.data,a=i.cmd;if("load"===a){let r=[];for(let a of(self.onmessage=t=>r.push(t),self.startWorker=()=>{for(let i of(postMessage({cmd:"loaded"}),r))t(i);self.onmessage=t},i.handlers))c[a]&&!c[a].proxy||(c[a]=(...t)=>{postMessage({Nb:"callHandler",pc:a,args:t})},"print"==a&&(I=c[a]),"printErr"==a&&(E=c[a]));A=i.wasmMemory,H(),z(i.wasmModule)}else if("run"===a){r3(i.pthread_ptr,0,0,1,0,0),tS(i.pthread_ptr),eI(),ex(),C||(rX(),C=!0);try{eE(i.start_routine,i.arg)}catch(t){if("unwind"!=t)throw t}}else"cancel"===a?r0()&&r5(-1):"setimmediate"!==i.target&&("checkMailbox"===a?C&&tT():a&&(E(`worker: received unknown command ${a}`),E(i)))}catch(t){throw r4(),t}};var z,C=!1;E=function(...t){console.error(t=t.join(" "))},self.alert=function(...t){postMessage({Nb:"alert",text:t.join(" "),rc:r0()})},c.instantiateWasm=(t,r)=>new Promise(t=>{z=i=>{r(i=new WebAssembly.Instance(i,en())),t()}}),self.onunhandledrejection=t=>{throw t.reason||t},self.onmessage=t}c.wasmBinary&&(k=c.wasmBinary);var A,O,R,B,D,M,N,P,U,W,q,L,V,G=!1;function H(){var t=A.buffer;c.HEAP8=B=new Int8Array(t),c.HEAP16=M=new Int16Array(t),c.HEAPU8=D=new Uint8Array(t),c.HEAPU16=N=new Uint16Array(t),c.HEAP32=P=new Int32Array(t),c.HEAPU32=U=new Uint32Array(t),c.HEAPF32=W=new Float32Array(t),c.HEAPF64=V=new Float64Array(t),c.HEAP64=q=new BigInt64Array(t),c.HEAPU64=L=new BigUint64Array(t)}if(!g){if(!((A=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0})).buffer instanceof _))throw E("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),Error("bad memory");H()}var F=[],j=[],K=[],Y=0,Q=null,Z=null;function X(){if(0==--Y&&(null!==Q&&(clearInterval(Q),Q=null),Z)){var t=Z;Z=null,t()}}function J(t){throw E(t="Aborted("+t+")"),G=!0,R=1,t=new WebAssembly.RuntimeError(t+". Build with -sASSERTIONS for more info."),p(t),t}var ee,et=t=>t.startsWith("data:application/octet-stream;base64,"),er=t=>t.startsWith("file://");function ei(t){if(t==ee&&k)return new Uint8Array(k);if($)return $(t);throw"both async and sync fetching of the wasm failed"}function ea(t,r,i){return(function(t){if(!k&&(f||m)){if("function"==typeof fetch&&!er(t))return fetch(t,{credentials:"same-origin"}).then(r=>{if(!r.ok)throw`failed to load wasm binary file at '${t}'`;return r.arrayBuffer()}).catch(()=>ei(t));if(b)return new Promise((r,i)=>{b(t,t=>r(new Uint8Array(t)),i)})}return Promise.resolve().then(()=>ei(t))})(t).then(t=>WebAssembly.instantiate(t,r)).then(i,t=>{E(`failed to asynchronously prepare wasm: ${t}`),J(t)})}function en(){return{a:{O:eu,Aa:eo,b:eC,aa:eO,B:eM,qa:eN,Y:eq,_:eL,ra:eV,oa:eG,ha:eH,na:eF,L:ej,Z:eK,W:eY,pa:eQ,X:eZ,va:e0,F:e5,Q:e7,P:to,E:tl,u:td,q:tp,G:tc,A:t$,R:tv,ua:tw,ka:tx,U:tI,ba:tz,H:tC,ja:tS,ta:tA,t:tB,Ba:tD,x:tj,n:tY,l:tX,c:tr,o:t0,j:t4,w:t6,p:t8,f:t5,s:t9,m:t7,e:re,k:rt,i:rr,h:ri,d:ra,ea:rn,fa:rl,ga:rd,ca:rp,da:rc,T:rh,g:rg,D:r_,I:ry,M:rb,y:r$,sa:rw,V:rx,v:rv,z:rk,N:rS,S:rT,za:rC,ya:rA,la:rD,ma:rM,$:e_,C:rN,K:rP,ia:rU,J:rq,a:A,xa:ef,wa:rH,r:rF}}}var es={913700:(t,r,a,n,s)=>{if(void 0===c||!c.Fb)return 1;if((t=eD(Number(t>>>0))).startsWith("./")&&(t=t.substring(2)),!(t=c.Fb.get(t)))return 2;if(r=Number(r>>>0),a=Number(a>>>0),n=Number(n>>>0),r+a>t.byteLength)return 3;try{let o=t.subarray(r,r+a);switch(s){case 0:i().set(o,n>>>0);break;case 1:c.dc(n,o);break;default:return 4}return 0}catch{return 4}},914415:(t,r,a)=>{c.ec(t,i().subarray(r>>>0,r+a>>>0))},914478:()=>c.bc(),914519:t=>{c.Pb(t)},914555:()=>{c.Wb()},914586:()=>{c.Xb()},914615:()=>{c.ac()},914640:t=>c.Vb(t),914673:t=>c.Zb(t),914705:(t,r,i)=>{c.Ob(Number(t),Number(r),Number(i),!0)},914768:(t,r,i)=>{c.Ob(Number(t),Number(r),Number(i))},914825:()=>"u">typeof wasmOffsetConverter,914882:t=>{c.kb("Abs",t,void 0)},914933:t=>{c.kb("Neg",t,void 0)},914984:t=>{c.kb("Floor",t,void 0)},915037:t=>{c.kb("Ceil",t,void 0)},915089:t=>{c.kb("Reciprocal",t,void 0)},915147:t=>{c.kb("Sqrt",t,void 0)},915199:t=>{c.kb("Exp",t,void 0)},915250:t=>{c.kb("Erf",t,void 0)},915301:t=>{c.kb("Sigmoid",t,void 0)},915356:(t,r,i)=>{c.kb("HardSigmoid",t,{alpha:r,beta:i})},915435:t=>{c.kb("Log",t,void 0)},915486:t=>{c.kb("Sin",t,void 0)},915537:t=>{c.kb("Cos",t,void 0)},915588:t=>{c.kb("Tan",t,void 0)},915639:t=>{c.kb("Asin",t,void 0)},915691:t=>{c.kb("Acos",t,void 0)},915743:t=>{c.kb("Atan",t,void 0)},915795:t=>{c.kb("Sinh",t,void 0)},915847:t=>{c.kb("Cosh",t,void 0)},915899:t=>{c.kb("Asinh",t,void 0)},915952:t=>{c.kb("Acosh",t,void 0)},916005:t=>{c.kb("Atanh",t,void 0)},916058:t=>{c.kb("Tanh",t,void 0)},916110:t=>{c.kb("Not",t,void 0)},916161:(t,r,i)=>{c.kb("Clip",t,{min:r,max:i})},916230:t=>{c.kb("Clip",t,void 0)},916282:(t,r)=>{c.kb("Elu",t,{alpha:r})},916340:t=>{c.kb("Gelu",t,void 0)},916392:t=>{c.kb("Relu",t,void 0)},916444:(t,r)=>{c.kb("LeakyRelu",t,{alpha:r})},916508:(t,r)=>{c.kb("ThresholdedRelu",t,{alpha:r})},916578:(t,r)=>{c.kb("Cast",t,{to:r})},916636:t=>{c.kb("Add",t,void 0)},916687:t=>{c.kb("Sub",t,void 0)},916738:t=>{c.kb("Mul",t,void 0)},916789:t=>{c.kb("Div",t,void 0)},916840:t=>{c.kb("Pow",t,void 0)},916891:t=>{c.kb("Equal",t,void 0)},916944:t=>{c.kb("Greater",t,void 0)},916999:t=>{c.kb("GreaterOrEqual",t,void 0)},917061:t=>{c.kb("Less",t,void 0)},917113:t=>{c.kb("LessOrEqual",t,void 0)},917172:(t,r,i,a,n)=>{c.kb("ReduceMean",t,{keepDims:!!r,noopWithEmptyAxes:!!i,axes:a?Array.from(s().subarray(Number(a)>>>0,Number(n)>>>0)):[]})},917347:(t,r,i,a,n)=>{c.kb("ReduceMax",t,{keepDims:!!r,noopWithEmptyAxes:!!i,axes:a?Array.from(s().subarray(Number(a)>>>0,Number(n)>>>0)):[]})},917521:(t,r,i,a,n)=>{c.kb("ReduceMin",t,{keepDims:!!r,noopWithEmptyAxes:!!i,axes:a?Array.from(s().subarray(Number(a)>>>0,Number(n)>>>0)):[]})},917695:(t,r,i,a,n)=>{c.kb("ReduceProd",t,{keepDims:!!r,noopWithEmptyAxes:!!i,axes:a?Array.from(s().subarray(Number(a)>>>0,Number(n)>>>0)):[]})},917870:(t,r,i,a,n)=>{c.kb("ReduceSum",t,{keepDims:!!r,noopWithEmptyAxes:!!i,axes:a?Array.from(s().subarray(Number(a)>>>0,Number(n)>>>0)):[]})},918044:(t,r,i,a,n)=>{c.kb("ReduceL1",t,{keepDims:!!r,noopWithEmptyAxes:!!i,axes:a?Array.from(s().subarray(Number(a)>>>0,Number(n)>>>0)):[]})},918217:(t,r,i,a,n)=>{c.kb("ReduceL2",t,{keepDims:!!r,noopWithEmptyAxes:!!i,axes:a?Array.from(s().subarray(Number(a)>>>0,Number(n)>>>0)):[]})},918390:(t,r,i,a,n)=>{c.kb("ReduceLogSum",t,{keepDims:!!r,noopWithEmptyAxes:!!i,axes:a?Array.from(s().subarray(Number(a)>>>0,Number(n)>>>0)):[]})},918567:(t,r,i,a,n)=>{c.kb("ReduceSumSquare",t,{keepDims:!!r,noopWithEmptyAxes:!!i,axes:a?Array.from(s().subarray(Number(a)>>>0,Number(n)>>>0)):[]})},918747:(t,r,i,a,n)=>{c.kb("ReduceLogSumExp",t,{keepDims:!!r,noopWithEmptyAxes:!!i,axes:a?Array.from(s().subarray(Number(a)>>>0,Number(n)>>>0)):[]})},918927:t=>{c.kb("Where",t,void 0)},918980:(t,r,i)=>{c.kb("Transpose",t,{perm:r?Array.from(s().subarray(Number(r)>>>0,Number(i)>>>0)):[]})},919104:(t,r,i,a)=>{c.kb("DepthToSpace",t,{blocksize:r,mode:eD(i),format:a?"NHWC":"NCHW"})},919237:(t,r,i,a)=>{c.kb("DepthToSpace",t,{blocksize:r,mode:eD(i),format:a?"NHWC":"NCHW"})},919370:(t,i,a,n,o,u,l,d,p,h,f,m,g,_,y)=>{c.kb("ConvTranspose",t,{format:p?"NHWC":"NCHW",autoPad:i,dilations:[a],group:n,kernelShape:[o],pads:[u,l],strides:[d],wIsConst:()=>!!r()[h>>>0],outputPadding:f?Array.from(s().subarray(Number(f)>>>0,Number(m)>>>0)):[],outputShape:g?Array.from(s().subarray(Number(g)>>>0,Number(_)>>>0)):[],activation:eD(y)})},919803:(t,i,a,n,o,u,l,d,p,h,f,m,g,_)=>{c.kb("ConvTranspose",t,{format:d?"NHWC":"NCHW",autoPad:i,dilations:Array.from(s().subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),group:n,kernelShape:Array.from(s().subarray(Number(o)>>>0,2+(Number(o)>>>0)>>>0)),pads:Array.from(s().subarray(Number(u)>>>0,4+(Number(u)>>>0)>>>0)),strides:Array.from(s().subarray(Number(l)>>>0,2+(Number(l)>>>0)>>>0)),wIsConst:()=>!!r()[p>>>0],outputPadding:h?Array.from(s().subarray(Number(h)>>>0,Number(f)>>>0)):[],outputShape:m?Array.from(s().subarray(Number(m)>>>0,Number(g)>>>0)):[],activation:eD(_)})},920464:(t,i,a,n,o,u,l,d,p,h,f,m,g,_,y)=>{c.kb("ConvTranspose",t,{format:p?"NHWC":"NCHW",autoPad:i,dilations:[a],group:n,kernelShape:[o],pads:[u,l],strides:[d],wIsConst:()=>!!r()[h>>>0],outputPadding:f?Array.from(s().subarray(Number(f)>>>0,Number(m)>>>0)):[],outputShape:g?Array.from(s().subarray(Number(g)>>>0,Number(_)>>>0)):[],activation:eD(y)})},920897:(t,i,a,n,o,u,l,d,p,h,f,m,g,_)=>{c.kb("ConvTranspose",t,{format:d?"NHWC":"NCHW",autoPad:i,dilations:Array.from(s().subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),group:n,kernelShape:Array.from(s().subarray(Number(o)>>>0,2+(Number(o)>>>0)>>>0)),pads:Array.from(s().subarray(Number(u)>>>0,4+(Number(u)>>>0)>>>0)),strides:Array.from(s().subarray(Number(l)>>>0,2+(Number(l)>>>0)>>>0)),wIsConst:()=>!!r()[p>>>0],outputPadding:h?Array.from(s().subarray(Number(h)>>>0,Number(f)>>>0)):[],outputShape:m?Array.from(s().subarray(Number(m)>>>0,Number(g)>>>0)):[],activation:eD(_)})},921558:(t,r)=>{c.kb("GlobalAveragePool",t,{format:r?"NHWC":"NCHW"})},921649:(t,r,i,a,n,o,u,l,d,p,h,f,m,g)=>{c.kb("AveragePool",t,{format:g?"NHWC":"NCHW",auto_pad:r,ceil_mode:i,count_include_pad:a,storage_order:n,dilations:o?Array.from(s().subarray(Number(o)>>>0,Number(u)>>>0)):[],kernel_shape:l?Array.from(s().subarray(Number(l)>>>0,Number(d)>>>0)):[],pads:p?Array.from(s().subarray(Number(p)>>>0,Number(h)>>>0)):[],strides:f?Array.from(s().subarray(Number(f)>>>0,Number(m)>>>0)):[]})},922128:(t,r)=>{c.kb("GlobalAveragePool",t,{format:r?"NHWC":"NCHW"})},922219:(t,r,i,a,n,o,u,l,d,p,h,f,m,g)=>{c.kb("AveragePool",t,{format:g?"NHWC":"NCHW",auto_pad:r,ceil_mode:i,count_include_pad:a,storage_order:n,dilations:o?Array.from(s().subarray(Number(o)>>>0,Number(u)>>>0)):[],kernel_shape:l?Array.from(s().subarray(Number(l)>>>0,Number(d)>>>0)):[],pads:p?Array.from(s().subarray(Number(p)>>>0,Number(h)>>>0)):[],strides:f?Array.from(s().subarray(Number(f)>>>0,Number(m)>>>0)):[]})},922698:(t,r)=>{c.kb("GlobalMaxPool",t,{format:r?"NHWC":"NCHW"})},922785:(t,r,i,a,n,o,u,l,d,p,h,f,m,g)=>{c.kb("MaxPool",t,{format:g?"NHWC":"NCHW",auto_pad:r,ceil_mode:i,count_include_pad:a,storage_order:n,dilations:o?Array.from(s().subarray(Number(o)>>>0,Number(u)>>>0)):[],kernel_shape:l?Array.from(s().subarray(Number(l)>>>0,Number(d)>>>0)):[],pads:p?Array.from(s().subarray(Number(p)>>>0,Number(h)>>>0)):[],strides:f?Array.from(s().subarray(Number(f)>>>0,Number(m)>>>0)):[]})},923260:(t,r)=>{c.kb("GlobalMaxPool",t,{format:r?"NHWC":"NCHW"})},923347:(t,r,i,a,n,o,u,l,d,p,h,f,m,g)=>{c.kb("MaxPool",t,{format:g?"NHWC":"NCHW",auto_pad:r,ceil_mode:i,count_include_pad:a,storage_order:n,dilations:o?Array.from(s().subarray(Number(o)>>>0,Number(u)>>>0)):[],kernel_shape:l?Array.from(s().subarray(Number(l)>>>0,Number(d)>>>0)):[],pads:p?Array.from(s().subarray(Number(p)>>>0,Number(h)>>>0)):[],strides:f?Array.from(s().subarray(Number(f)>>>0,Number(m)>>>0)):[]})},923822:(t,r,i,a,n)=>{c.kb("Gemm",t,{alpha:r,beta:i,transA:a,transB:n})},923926:t=>{c.kb("MatMul",t,void 0)},923980:(t,r,i,a)=>{c.kb("ArgMax",t,{keepDims:!!r,selectLastIndex:!!i,axis:a})},924088:(t,r,i,a)=>{c.kb("ArgMin",t,{keepDims:!!r,selectLastIndex:!!i,axis:a})},924196:(t,r)=>{c.kb("Softmax",t,{axis:r})},924259:(t,r)=>{c.kb("Concat",t,{axis:r})},924319:(t,r,i,a,n)=>{c.kb("Split",t,{axis:r,numOutputs:i,splitSizes:a?Array.from(s().subarray(Number(a)>>>0,Number(n)>>>0)):[]})},924475:t=>{c.kb("Expand",t,void 0)},924529:(t,r)=>{c.kb("Gather",t,{axis:Number(r)})},924600:(t,r)=>{c.kb("GatherElements",t,{axis:Number(r)})},924679:(t,r)=>{c.kb("GatherND",t,{batch_dims:Number(r)})},924758:(t,r,i,a,n,o,u,l,d,p,h)=>{c.kb("Resize",t,{antialias:r,axes:i?Array.from(s().subarray(Number(i)>>>0,Number(a)>>>0)):[],coordinateTransformMode:eD(n),cubicCoeffA:o,excludeOutside:u,extrapolationValue:l,keepAspectRatioPolicy:eD(d),mode:eD(p),nearestMode:eD(h)})},925120:(t,r,i,a,n,o,u)=>{c.kb("Slice",t,{starts:r?Array.from(s().subarray(Number(r)>>>0,Number(i)>>>0)):[],ends:a?Array.from(s().subarray(Number(a)>>>0,Number(n)>>>0)):[],axes:o?Array.from(s().subarray(Number(o)>>>0,Number(u)>>>0)):[]})},925384:t=>{c.kb("Tile",t,void 0)},925436:(t,r,i)=>{c.kb("InstanceNormalization",t,{epsilon:r,format:i?"NHWC":"NCHW"})},925550:(t,r,i)=>{c.kb("InstanceNormalization",t,{epsilon:r,format:i?"NHWC":"NCHW"})},925664:t=>{c.kb("Range",t,void 0)},925717:(t,r)=>{c.kb("Einsum",t,{equation:eD(r)})},925798:(t,r,i,a,n)=>{c.kb("Pad",t,{mode:r,value:i,pads:a?Array.from(s().subarray(Number(a)>>>0,Number(n)>>>0)):[]})},925941:(t,r,i,a,n,s)=>{c.kb("BatchNormalization",t,{epsilon:r,momentum:i,spatial:!!n,trainingMode:!!a,format:s?"NHWC":"NCHW"})},926110:(t,r,i,a,n,s)=>{c.kb("BatchNormalization",t,{epsilon:r,momentum:i,spatial:!!n,trainingMode:!!a,format:s?"NHWC":"NCHW"})},926279:(t,r,i)=>{c.kb("CumSum",t,{exclusive:Number(r),reverse:Number(i)})},926376:(t,r,i)=>{c.kb("DequantizeLinear",t,{axis:r,blockSize:i})},926466:(t,r,i,a,n)=>{c.kb("GridSample",t,{align_corners:r,mode:eD(i),padding_mode:eD(a),format:n?"NHWC":"NCHW"})},926636:(t,r,i,a,n)=>{c.kb("GridSample",t,{align_corners:r,mode:eD(i),padding_mode:eD(a),format:n?"NHWC":"NCHW"})},926806:(t,r,i,a,n,o,u,l,d)=>{c.kb("Attention",t,{numHeads:r,isUnidirectional:i,maskFilterValue:a,scale:n,doRotary:o,qkvHiddenSizes:u?Array.from(s().subarray(Number(l)>>>0,Number(l)+u>>>0)):[],pastPresentShareBuffer:!!d})},927078:t=>{c.kb("BiasAdd",t,void 0)},927133:t=>{c.kb("BiasSplitGelu",t,void 0)},927194:t=>{c.kb("FastGelu",t,void 0)},927250:(t,i,a,n,o,l,d,p,h,f,m,g,_,y,b,$)=>{c.kb("Conv",t,{format:g?"NHWC":"NCHW",auto_pad:i,dilations:a?Array.from(s().subarray(Number(a)>>>0,Number(n)>>>0)):[],group:o,kernel_shape:l?Array.from(s().subarray(Number(l)>>>0,Number(d)>>>0)):[],pads:p?Array.from(s().subarray(Number(p)>>>0,Number(h)>>>0)):[],strides:f?Array.from(s().subarray(Number(f)>>>0,Number(m)>>>0)):[],w_is_const:()=>!!r()[Number(_)>>>0],activation:eD(y),activation_params:b?Array.from(u().subarray(Number(b)>>>0,Number($)>>>0)):[]})},927834:t=>{c.kb("Gelu",t,void 0)},927886:(t,r,i,a,n,s,o,u,l)=>{c.kb("GroupQueryAttention",t,{numHeads:r,kvNumHeads:i,scale:a,softcap:n,doRotary:s,rotaryInterleaved:o,smoothSoftmax:u,localWindowSize:l})},928103:(t,r,i,a)=>{c.kb("LayerNormalization",t,{axis:r,epsilon:i,simplified:!!a})},928214:(t,r,i,a)=>{c.kb("LayerNormalization",t,{axis:r,epsilon:i,simplified:!!a})},928325:(t,r,i,a,n,s)=>{c.kb("MatMulNBits",t,{k:r,n:i,accuracyLevel:a,bits:n,blockSize:s})},928452:(t,r,i,a,n,s)=>{c.kb("MultiHeadAttention",t,{numHeads:r,isUnidirectional:i,maskFilterValue:a,scale:n,doRotary:s})},928611:(t,r)=>{c.kb("QuickGelu",t,{alpha:r})},928675:(t,r,i,a,n)=>{c.kb("RotaryEmbedding",t,{interleaved:!!r,numHeads:i,rotaryEmbeddingDim:a,scale:n})},928814:(t,r,i)=>{c.kb("SkipLayerNormalization",t,{epsilon:r,simplified:!!i})},928916:(t,r,i)=>{c.kb("SkipLayerNormalization",t,{epsilon:r,simplified:!!i})},929018:(t,r,i,a)=>{c.kb("GatherBlockQuantized",t,{gatherAxis:r,quantizeAxis:i,blockSize:a})},929139:t=>{c.$b(t)},929173:(t,r)=>c.cc(Number(t),Number(r),c.Gb.hc,c.Gb.errors)};function eo(t,r,i){return tF(async()=>{await c.Yb(Number(t),Number(r),Number(i))})}function eu(){return"u">typeof wasmOffsetConverter}function el(t){this.name="ExitStatus",this.message=`Program terminated with exit(${t})`,this.status=t}var ed=t=>{t.terminate(),t.onmessage=()=>{}},ep=t=>{0==ey.length&&(eS(),ek(ey[0]));var r=ey.pop();if(!r)return 6;eb.push(r),ev[t.Bb]=r,r.Bb=t.Bb;var i={cmd:"run",start_routine:t.ic,arg:t.Rb,pthread_ptr:t.Bb};return r.postMessage(i,t.nc),0},ec=0,eh=(t,r,...i)=>{for(var a=2*i.length,n=ir(),s=it(8*a),o=s>>>3,u=0;u<i.length;u++){var d=i[u];"bigint"==typeof d?(q[o+2*u]=1n,q[o+2*u+1]=d):(q[o+2*u]=0n,l()[o+2*u+1>>>0]=d)}return t=r6(t,0,a,s,r),ie(n),t};function ef(t){if(g)return eh(0,1,t);if(R=t,!(0<ec)){for(var r of eb)ed(r);for(r of ey)ed(r);ey=[],eb=[],ev=[],G=!0}w(t,new el(t))}function eg(t){if(g)return eh(1,0,t);e_(t)}var e_=t=>{if(R=t,g)throw eg(t),"unwind";ef(t)},ey=[],eb=[],e$=[],ev={},ew=t=>{var r=t.Bb;delete ev[r],ey.push(t),eb.splice(eb.indexOf(t),1),t.Bb=0,r8(r)};function ex(){e$.forEach(t=>t())}var ek=t=>new Promise(r=>{t.onmessage=i=>{var a=(i=i.data).cmd;if(i.targetThread&&i.targetThread!=r0()){var n=ev[i.targetThread];n?n.postMessage(i,i.transferList):E(`Internal error! Worker sent a message "${a}" to target pthread ${i.targetThread}, but that thread no longer exists!`)}else"checkMailbox"===a?tT():"spawnThread"===a?ep(i):"cleanupThread"===a?ew(ev[i.thread]):"killThread"===a?(a=ev[i=i.thread],delete ev[i],ed(a),r8(i),eb.splice(eb.indexOf(a),1),a.Bb=0):"cancelThread"===a?ev[i.thread].postMessage({cmd:"cancel"}):"loaded"===a?(t.loaded=!0,r(t)):"alert"===a?alert(`Thread ${i.threadId}: ${i.text}`):"setimmediate"===i.target?t.postMessage(i):"callHandler"===a?c[i.handler](...i.args):a&&E(`worker sent an unknown command ${a}`)},t.onerror=t=>{throw E(`worker sent an error! ${t.filename}:${t.lineno}: ${t.message}`),t};var i,a=[];for(i of[])c.hasOwnProperty(i)&&a.push(i);t.postMessage({cmd:"load",handlers:a,wasmMemory:A,wasmModule:O})});function eS(){var t=new Worker(import.meta.url.startsWith("file:")?new URL("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});ey.push(t)}var eT=t=>{for(;0<t.length;)t.shift()(c)},eI=()=>{var t=r0(),r=o()[t+52>>>2>>>0];t=o()[t+56>>>2>>>0],r7(r,r-t),ie(r)},eE=(t,r)=>{ec=0,t=ii(t,r),0<ec?R=t:r5(t)};class ez{constructor(t){this.Kb=t-24}}function eC(t,r,i){var a=new ez(t>>>=0);throw r>>>=0,i>>>=0,o()[a.Kb+16>>>2>>>0]=0,o()[a.Kb+4>>>2>>>0]=r,o()[a.Kb+8>>>2>>>0]=i,t}function eA(t,r,i,a){return g?eh(2,1,t,r,i,a):eO(t,r,i,a)}function eO(t,r,i,a){if(t>>>=0,r>>>=0,i>>>=0,a>>>=0,void 0===_)return E("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var n=[];return g&&0===n.length?eA(t,r,i,a):(t={ic:i,Bb:t,Rb:a,nc:n},g?(t.Nb="spawnThread",postMessage(t,n),0):ep(t))}var eR="u">typeof TextDecoder?new TextDecoder("utf8"):void 0,eB=(t,r,i)=>{var a=(r>>>=0)+i;for(i=r;t[i]&&!(i>=a);)++i;if(16<i-r&&t.buffer&&eR)return eR.decode(t.buffer instanceof _?t.slice(r,i):t.subarray(r,i));for(a="";r<i;){var n=t[r++];if(128&n){var s=63&t[r++];if((224&n)==192)a+=String.fromCharCode((31&n)<<6|s);else{var o=63&t[r++];65536>(n=(240&n)==224?(15&n)<<12|s<<6|o:(7&n)<<18|s<<12|o<<6|63&t[r++])?a+=String.fromCharCode(n):(n-=65536,a+=String.fromCharCode(55296|n>>10,56320|1023&n))}}else a+=String.fromCharCode(n)}return a},eD=(t,r)=>(t>>>=0)?eB(i(),t,r):"";function eM(t,r,i){return g?eh(3,1,t,r,i):0}function eN(t,r){if(g)return eh(4,1,t,r)}var eP=t=>{for(var r=0,i=0;i<t.length;++i){var a=t.charCodeAt(i);127>=a?r++:2047>=a?r+=2:55296<=a&&57343>=a?(r+=4,++i):r+=3}return r},eU=(t,r,i,a)=>{if(!(0<a))return 0;var n=i>>>=0;a=i+a-1;for(var s=0;s<t.length;++s){var o=t.charCodeAt(s);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&t.charCodeAt(++s)),127>=o){if(i>=a)break;r[i++>>>0]=o}else{if(2047>=o){if(i+1>=a)break;r[i++>>>0]=192|o>>6}else{if(65535>=o){if(i+2>=a)break;r[i++>>>0]=224|o>>12}else{if(i+3>=a)break;r[i++>>>0]=240|o>>18,r[i++>>>0]=128|o>>12&63}r[i++>>>0]=128|o>>6&63}r[i++>>>0]=128|63&o}}return r[i>>>0]=0,i-n},eW=(t,r,a)=>eU(t,i(),r,a);function eq(t,r){if(g)return eh(5,1,t,r)}function eL(t,r,i){if(g)return eh(6,1,t,r,i)}function eV(t,r,i){return g?eh(7,1,t,r,i):0}function eG(t,r){if(g)return eh(8,1,t,r)}function eH(t,r,i){if(g)return eh(9,1,t,r,i)}function eF(t,r,i,a){if(g)return eh(10,1,t,r,i,a)}function ej(t,r,i,a){if(g)return eh(11,1,t,r,i,a)}function eK(t,r,i,a){if(g)return eh(12,1,t,r,i,a)}function eY(t){if(g)return eh(13,1,t)}function eQ(t,r){if(g)return eh(14,1,t,r)}function eZ(t,r,i){if(g)return eh(15,1,t,r,i)}var eX,eJ,e0=()=>{J("")},e1=t=>{for(var r="";i()[t>>>0];)r+=eX[i()[t++>>>0]];return r},e2={},e3={},e4={};function e6(t,r,i={}){if(!("argPackAdvance"in r))throw TypeError("registerType registeredInstance requires argPackAdvance");return function(t,r,i={}){var a=r.name;if(!t)throw new eJ(`type "${a}" must have a positive integer typeid pointer`);if(e3.hasOwnProperty(t)){if(i.Tb)return;throw new eJ(`Cannot register type '${a}' twice`)}e3[t]=r,delete e4[t],e2.hasOwnProperty(t)&&(r=e2[t],delete e2[t],r.forEach(t=>t()))}(t,r,i)}var e8=(t,u,l)=>{switch(u){case 1:return l?t=>r()[t>>>0]:t=>i()[t>>>0];case 2:return l?t=>a()[t>>>1>>>0]:t=>n()[t>>>1>>>0];case 4:return l?t=>s()[t>>>2>>>0]:t=>o()[t>>>2>>>0];case 8:return l?t=>q[t>>>3]:t=>L[t>>>3];default:throw TypeError(`invalid integer width (${u}): ${t}`)}};function e5(t,r,i){i>>>=0,e6(t>>>=0,{name:r=e1(r>>>0),fromWireType:t=>t,toWireType:function(t,r){if("bigint"!=typeof r&&"number"!=typeof r)throw r=null===r?"null":"object"==(t=typeof r)||"array"===t||"function"===t?r.toString():""+r,TypeError(`Cannot convert "${r}" to ${this.name}`);return"number"==typeof r&&(r=BigInt(r)),r},argPackAdvance:e9,readValueFromPointer:e8(r,i,-1==r.indexOf("u")),Eb:null})}var e9=8;function e7(t,r,a,n){e6(t>>>=0,{name:r=e1(r>>>0),fromWireType:function(t){return!!t},toWireType:function(t,r){return r?a:n},argPackAdvance:e9,readValueFromPointer:function(t){return this.fromWireType(i()[t>>>0])},Eb:null})}var te=[],tt=[];function tr(t){9<(t>>>=0)&&0==--tt[t+1]&&(tt[t]=void 0,te.push(t))}var ti=t=>{if(!t)throw new eJ("Cannot use deleted val. handle = "+t);return tt[t]},ta=t=>{switch(t){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let r=te.pop()||tt.length;return tt[r]=t,tt[r+1]=1,r}};function tn(t){return this.fromWireType(o()[t>>>2>>>0])}var ts={name:"emscripten::val",fromWireType:t=>{var r=ti(t);return tr(t),r},toWireType:(t,r)=>ta(r),argPackAdvance:8,readValueFromPointer:tn,Eb:null};function to(t){return e6(t>>>0,ts)}var tu=(t,r)=>{switch(r){case 4:return function(t){return this.fromWireType(u()[t>>>2>>>0])};case 8:return function(t){return this.fromWireType(l()[t>>>3>>>0])};default:throw TypeError(`invalid float width (${r}): ${t}`)}};function tl(t,r,i){i>>>=0,e6(t>>>=0,{name:r=e1(r>>>0),fromWireType:t=>t,toWireType:(t,r)=>r,argPackAdvance:e9,readValueFromPointer:tu(r,i),Eb:null})}function td(t,r,i,a,n){if(t>>>=0,i>>>=0,r=e1(r>>>0),-1===n&&(n=0xffffffff),n=t=>t,0===a){var s=32-8*i;n=t=>t<<s>>>s}var o=r.includes("unsigned")?function(t,r){return r>>>0}:function(t,r){return r};e6(t,{name:r,fromWireType:n,toWireType:o,argPackAdvance:e9,readValueFromPointer:e8(r,i,0!==a),Eb:null})}function tp(t,i,a){function n(t){var i=o()[t>>>2>>>0];return t=o()[t+4>>>2>>>0],new s(r().buffer,t,i)}var s=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][i];e6(t>>>=0,{name:a=e1(a>>>0),fromWireType:n,argPackAdvance:e9,readValueFromPointer:n},{Tb:!0})}function tc(t,r){t>>>=0;var a="std::string"===(r=e1(r>>>0));e6(t,{name:r,fromWireType:function(t){var r=o()[t>>>2>>>0],n=t+4;if(a)for(var s=n,u=0;u<=r;++u){var l=n+u;if(u==r||0==i()[l>>>0]){if(s=eD(s,l-s),void 0===d)var d=s;else d+="\0",d+=s;s=l+1}}else{for(d=Array(r),u=0;u<r;++u)d[u]=String.fromCharCode(i()[n+u>>>0]);d=d.join("")}return r1(t),d},toWireType:function(t,r){r instanceof ArrayBuffer&&(r=new Uint8Array(r));var n="string"==typeof r;if(!(n||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array))throw new eJ("Cannot pass non-string to std::string");var s=a&&n?eP(r):r.length,u=r2(4+s+1),l=u+4;if(o()[u>>>2>>>0]=s,a&&n)eW(r,l,s+1);else if(n)for(n=0;n<s;++n){var d=r.charCodeAt(n);if(255<d)throw r1(l),new eJ("String has UTF-16 code units that do not fit in 8 bits");i()[l+n>>>0]=d}else for(n=0;n<s;++n)i()[l+n>>>0]=r[n];return null!==t&&t.push(r1,u),u},argPackAdvance:e9,readValueFromPointer:tn,Eb(t){r1(t)}})}var th="u">typeof TextDecoder?new TextDecoder("utf-16le"):void 0,tf=(t,r)=>{for(var s=t>>1,o=s+r/2;!(s>=o)&&n()[s>>>0];)++s;if(32<(s<<=1)-t&&th)return th.decode(i().slice(t,s));for(s="",o=0;!(o>=r/2);++o){var u=a()[t+2*o>>>1>>>0];if(0==u)break;s+=String.fromCharCode(u)}return s},tm=(t,r,i)=>{if(2>(i??=0x7fffffff))return 0;var n=r;i=(i-=2)<2*t.length?i/2:t.length;for(var s=0;s<i;++s){var o=t.charCodeAt(s);a()[r>>>1>>>0]=o,r+=2}return a()[r>>>1>>>0]=0,r-n},tg=t=>2*t.length,t_=(t,r)=>{for(var i=0,a="";!(i>=r/4);){var n=s()[t+4*i>>>2>>>0];if(0==n)break;++i,65536<=n?(n-=65536,a+=String.fromCharCode(55296|n>>10,56320|1023&n)):a+=String.fromCharCode(n)}return a},ty=(t,r,i)=>{if(r>>>=0,4>(i??=0x7fffffff))return 0;var a=r;i=a+i-4;for(var n=0;n<t.length;++n){var o=t.charCodeAt(n);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&t.charCodeAt(++n)),s()[r>>>2>>>0]=o,(r+=4)+4>i)break}return s()[r>>>2>>>0]=0,r-a},tb=t=>{for(var r=0,i=0;i<t.length;++i){var a=t.charCodeAt(i);55296<=a&&57343>=a&&++i,r+=4}return r};function t$(t,r,i){if(t>>>=0,r>>>=0,i=e1(i>>>=0),2===r)var a=tf,s=tm,u=tg,l=t=>n()[t>>>1>>>0];else 4===r&&(a=t_,s=ty,u=tb,l=t=>o()[t>>>2>>>0]);e6(t,{name:i,fromWireType:t=>{for(var i,n=o()[t>>>2>>>0],s=t+4,u=0;u<=n;++u){var d=t+4+u*r;u!=n&&0!=l(d)||(s=a(s,d-s),void 0===i?i=s:(i+="\0",i+=s),s=d+r)}return r1(t),i},toWireType:(t,a)=>{if("string"!=typeof a)throw new eJ(`Cannot pass non-string to C++ string type ${i}`);var n=u(a),l=r2(4+n+r);return o()[l>>>2>>>0]=n/r,s(a,l+4,n+r),null!==t&&t.push(r1,l),l},argPackAdvance:e9,readValueFromPointer:tn,Eb(t){r1(t)}})}function tv(t,r){e6(t>>>=0,{Ub:!0,name:r=e1(r>>>0),argPackAdvance:0,fromWireType:()=>{},toWireType:()=>{}})}var tw=()=>1;function tx(t){r3(t>>>0,!m,1,!f,131072,!1),ex()}var tk=t=>{if(!G)try{if(t(),!(0<ec))try{g?r5(R):e_(R)}catch(t){t instanceof el||"unwind"==t||w(1,t)}}catch(t){t instanceof el||"unwind"==t||w(1,t)}};function tS(t){t>>>=0,"function"==typeof Atomics.oc&&(Atomics.oc(s(),t>>>2,t).value.then(tT),t+=128,Atomics.store(s(),t>>>2,1))}var tT=()=>{var t=r0();t&&(tS(t),tk(r9))};function tI(t,r){(t>>>=0)==r>>>0?setTimeout(tT):g?postMessage({targetThread:t,cmd:"checkMailbox"}):(t=ev[t])&&t.postMessage({cmd:"checkMailbox"})}var tE=[];function tz(t,r,i,a,n){for(r>>>=0,a/=2,tE.length=a,i=n>>>0>>>3,n=0;n<a;n++)tE[n]=q[i+2*n]?q[i+2*n+1]:l()[i+2*n+1>>>0];return(r?es[r]:rY[t])(...tE)}function tC(t){t>>>=0,g?postMessage({cmd:"cleanupThread",thread:t}):ew(ev[t])}function tA(t){}var tO=(t,r)=>{var i=e3[t];if(void 0===i)throw i=e1(t=rZ(t)),r1(t),new eJ(`${r} has unknown type ${i}`);return i},tR=(t,r,i)=>{var a=[];return t=t.toWireType(a,i),a.length&&(o()[r>>>2>>>0]=ta(a)),t};function tB(t,r,i){return r>>>=0,i>>>=0,t=ti(t>>>0),tR(r=tO(r,"emval::as"),i,t)}function tD(t,r){return r>>>=0,t=ti(t>>>0),(r=tO(r,"emval::as")).toWireType(null,t)}var tM=t=>{try{t()}catch(t){J(t)}},tN=0,tP=null,tU=0,tW=[],tq={},tL={},tV=0,tG=null,tH=[];function tF(t){return function(t){if(!G){if(0===tN){var r,i,a,n=!1,u=!1;t((t=0)=>{if(!G&&(tU=t,n=!0,u)){tN=2,tM(()=>io(tP)),"u">typeof Browser&&Browser.Lb.Sb&&Browser.Lb.resume(),t=!1;try{var r,i=(r=rQ[tL[r=s()[tP+8>>>2>>>0]]],--ec,r())}catch(r){i=r,t=!0}var a=!1;if(!tP){var o=tG;o&&(tG=null,(t?o.reject:o.resolve)(i),a=!0)}if(t&&!a)throw i}}),u=!0,n||(tN=1,i=(r=r2(65548))+12,o()[r>>>2>>>0]=i,o()[r+4>>>2>>>0]=i+65536,void 0===(a=tq[i=tW[0]])&&(a=tV++,tq[i]=a,tL[a]=i),i=a,s()[r+8>>>2>>>0]=i,tP=r,"u">typeof Browser&&Browser.Lb.Sb&&Browser.Lb.pause(),tM(()=>ia(tP)))}else 2===tN?(tN=0,tM(iu),r1(tP),tP=null,tH.forEach(tk)):J(`invalid state: ${tN}`);return tU}}(r=>{t().then(r)})}function tj(t){return t>>>=0,tF(()=>(t=ti(t)).then(ta))}var tK=[];function tY(t,r,i,a){return i>>>=0,a>>>=0,(t=tK[t>>>0])(null,r=ti(r>>>0),i,a)}var tQ={},tZ=t=>{var r=tQ[t];return void 0===r?e1(t):r};function tX(t,r,i,a,n){return i>>>=0,a>>>=0,n>>>=0,(t=tK[t>>>0])(r=ti(r>>>0),r[i=tZ(i)],a,n)}var tJ=()=>"object"==typeof globalThis?globalThis:Function("return this")();function t0(t){return 0==(t>>>=0)?ta(tJ()):(t=tZ(t),ta(tJ()[t]))}var t1=t=>{var r=tK.length;return tK.push(t),r},t2=(t,r)=>{for(var i=Array(t),a=0;a<t;++a)i[a]=tO(o()[r+4*a>>>2>>>0],"parameter "+a);return i},t3=(t,r)=>Object.defineProperty(r,"name",{value:t});function t4(t,r,i){var a=(r=t2(t,r>>>0)).shift();t--;var n=`return function (obj, func, destructorsRef, args) {
`,s=0,o=[];0===i&&o.push("obj");for(var u=["retType"],l=[a],d=0;d<t;++d)o.push("arg"+d),u.push("argType"+d),l.push(r[d]),n+=`  var arg${d} = argType${d}.readValueFromPointer(args${s?"+"+s:""});
`,s+=r[d].argPackAdvance;return n+=`  var rv = ${1===i?"new func":"func.call"}(${o.join(", ")});
`,a.Ub||(u.push("emval_returnValue"),l.push(tR),n+=`  return emval_returnValue(retType, destructorsRef, rv);
`),u.push(n+`};
`),t=(function(t){var r=Function;if(!(r instanceof Function))throw TypeError(`new_ called with constructor type ${typeof r} which is not a function`);var i=t3(r.name||"unknownFunctionName",function(){});return i.prototype=r.prototype,i=new i,(t=r.apply(i,t))instanceof Object?t:i})(u)(...l),t1(t3(i=`methodCaller<(${r.map(t=>t.name).join(", ")}) => ${a.name}>`,t))}function t6(t){return ta(c[t=tZ(t>>>0)])}function t8(t,r){return r>>>=0,ta((t=ti(t>>>0))[r=ti(r)])}function t5(t){9<(t>>>=0)&&(tt[t+1]+=1)}function t9(){return ta([])}function t7(t){t=ti(t>>>0);for(var r=Array(t.length),i=0;i<t.length;i++)r[i]=t[i];return ta(r)}function re(t){return ta(tZ(t>>>0))}function rt(){return ta({})}function rr(t){for(var r=ti(t>>>=0);r.length;){var i=r.pop();r.pop()(i)}tr(t)}function ri(t,r,i){r>>>=0,i>>>=0,t=ti(t>>>0),r=ti(r),i=ti(i),t[r]=i}function ra(t,r){return r>>>=0,ta(t=(t=tO(t>>>0,"_emval_take_value")).readValueFromPointer(r))}function rn(t,r){t=-0x20000000000000>t||0x20000000000000<t?NaN:Number(t),r>>>=0,t=new Date(1e3*t),s()[r>>>2>>>0]=t.getUTCSeconds(),s()[r+4>>>2>>>0]=t.getUTCMinutes(),s()[r+8>>>2>>>0]=t.getUTCHours(),s()[r+12>>>2>>>0]=t.getUTCDate(),s()[r+16>>>2>>>0]=t.getUTCMonth(),s()[r+20>>>2>>>0]=t.getUTCFullYear()-1900,s()[r+24>>>2>>>0]=t.getUTCDay(),t=(t.getTime()-Date.UTC(t.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,s()[r+28>>>2>>>0]=t}var rs=t=>t%4==0&&(t%100!=0||t%400==0),ro=[0,31,60,91,121,152,182,213,244,274,305,335],ru=[0,31,59,90,120,151,181,212,243,273,304,334];function rl(t,r){t=-0x20000000000000>t||0x20000000000000<t?NaN:Number(t),r>>>=0,t=new Date(1e3*t),s()[r>>>2>>>0]=t.getSeconds(),s()[r+4>>>2>>>0]=t.getMinutes(),s()[r+8>>>2>>>0]=t.getHours(),s()[r+12>>>2>>>0]=t.getDate(),s()[r+16>>>2>>>0]=t.getMonth(),s()[r+20>>>2>>>0]=t.getFullYear()-1900,s()[r+24>>>2>>>0]=t.getDay();var i=(rs(t.getFullYear())?ro:ru)[t.getMonth()]+t.getDate()-1|0;s()[r+28>>>2>>>0]=i,s()[r+36>>>2>>>0]=-60*t.getTimezoneOffset(),i=new Date(t.getFullYear(),6,1).getTimezoneOffset();var a=new Date(t.getFullYear(),0,1).getTimezoneOffset();t=0|(i!=a&&t.getTimezoneOffset()==Math.min(a,i)),s()[r+32>>>2>>>0]=t}function rd(t){t>>>=0;var r=new Date(s()[t+20>>>2>>>0]+1900,s()[t+16>>>2>>>0],s()[t+12>>>2>>>0],s()[t+8>>>2>>>0],s()[t+4>>>2>>>0],s()[t>>>2>>>0],0),i=s()[t+32>>>2>>>0],a=r.getTimezoneOffset(),n=new Date(r.getFullYear(),6,1).getTimezoneOffset(),o=new Date(r.getFullYear(),0,1).getTimezoneOffset(),u=Math.min(o,n);return 0>i?s()[t+32>>>2>>>0]=+(n!=o&&u==a):0<i!=(u==a)&&(n=Math.max(o,n),r.setTime(r.getTime()+6e4*((0<i?u:n)-a))),s()[t+24>>>2>>>0]=r.getDay(),i=(rs(r.getFullYear())?ro:ru)[r.getMonth()]+r.getDate()-1|0,s()[t+28>>>2>>>0]=i,s()[t>>>2>>>0]=r.getSeconds(),s()[t+4>>>2>>>0]=r.getMinutes(),s()[t+8>>>2>>>0]=r.getHours(),s()[t+12>>>2>>>0]=r.getDate(),s()[t+16>>>2>>>0]=r.getMonth(),s()[t+20>>>2>>>0]=r.getYear(),BigInt(isNaN(t=r.getTime())?-1:t/1e3)}function rp(t,r,i,a,n,s,o){return g?eh(16,1,t,r,i,a,n,s,o):-52}function rc(t,r,i,a,n,s){if(g)return eh(17,1,t,r,i,a,n,s)}function rh(t,r,i,a){t>>>=0,r>>>=0,i>>>=0,a>>>=0;var n=new Date().getFullYear(),u=new Date(n,0,1),l=new Date(n,6,1);n=u.getTimezoneOffset();var d=l.getTimezoneOffset(),p=Math.max(n,d);o()[t>>>2>>>0]=60*p,s()[r>>>2>>>0]=+(n!=d),u=(t=t=>t.toLocaleTimeString(void 0,{hour12:!1,timeZoneName:"short"}).split(" ")[1])(u),l=t(l),d<n?(eW(u,i,17),eW(l,a,17)):(eW(u,a,17),eW(l,i,17))}var rf=[],rm=(t,r)=>{rf.length=0;for(var a;a=i()[t++>>>0];){var n=105!=a;r+=(n&=112!=a)&&r%8?4:0,rf.push(112==a?o()[r>>>2>>>0]:106==a?q[r>>>3]:105==a?s()[r>>>2>>>0]:l()[r>>>3>>>0]),r+=n?8:4}return rf};function rg(t,r,i){return t>>>=0,r=rm(r>>>0,i>>>0),es[t](...r)}function r_(t,r,i){return t>>>=0,r=rm(r>>>0,i>>>0),es[t](...r)}var ry=()=>{},rb=()=>Date.now();function r$(t,r){return E(eD(t>>>0,r>>>0))}var rv,rw=()=>{throw ec+=1,"unwind"};function rx(){return 0xffff0000}rv=()=>performance.timeOrigin+performance.now();var rk=()=>navigator.hardwareConcurrency;function rS(){return J("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function rT(t){t>>>=0;var r=i().length;if(t<=r||0xffff0000<t)return!1;for(var a=1;4>=a;a*=2){var n=r*(1+.2/a);n=Math.min(n,t+0x6000000);var s=Math;n=Math.max(t,n);e:{s=(s.min.call(s,0xffff0000,n+(65536-n%65536)%65536)-A.buffer.byteLength+65535)/65536;try{A.grow(s),H();var o=1;break e}catch{}o=void 0}if(o)return!0}return!1}var rI=()=>(J("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),rE={},rz=t=>{t.forEach(t=>{var r=rI();r&&(rE[r]=t)})};function rC(){var t=Error().stack.toString().split(`
`);return"Error"==t[0]&&t.shift(),rz(t),rE.Qb=rI(),rE.fc=t,rE.Qb}function rA(t,r,i){if(t>>>=0,r>>>=0,rE.Qb==t)var a=rE.fc;else"Error"==(a=Error().stack.toString().split(`
`))[0]&&a.shift(),rz(a);for(var n=3;a[n]&&rI()!=t;)++n;for(t=0;t<i&&a[t+n];++t)s()[r+4*t>>>2>>>0]=rI();return t}var rO,rR={},rB=()=>{if(!rO){var t,r={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(t in rR)void 0===rR[t]?delete r[t]:r[t]=rR[t];var i=[];for(t in r)i.push(`${t}=${r[t]}`);rO=i}return rO};function rD(t,i){if(g)return eh(18,1,t,i);t>>>=0,i>>>=0;var a=0;return rB().forEach((n,s)=>{var u=i+a;for(s=o()[t+4*s>>>2>>>0]=u,u=0;u<n.length;++u)r()[s++>>>0]=n.charCodeAt(u);r()[s>>>0]=0,a+=n.length+1}),0}function rM(t,r){if(g)return eh(19,1,t,r);t>>>=0,r>>>=0;var i=rB();o()[t>>>2>>>0]=i.length;var a=0;return i.forEach(t=>a+=t.length+1),o()[r>>>2>>>0]=a,0}function rN(t){return g?eh(20,1,t):52}function rP(t,r,i,a){return g?eh(21,1,t,r,i,a):52}function rU(t,r,i,a){return g?eh(22,1,t,r,i,a):70}var rW=[null,[],[]];function rq(t,r,a,n){if(g)return eh(23,1,t,r,a,n);r>>>=0,a>>>=0,n>>>=0;for(var s=0,u=0;u<a;u++){var l=o()[r>>>2>>>0],d=o()[r+4>>>2>>>0];r+=8;for(var p=0;p<d;p++){var c=i()[l+p>>>0],h=rW[t];0===c||10===c?((1===t?I:E)(eB(h,0)),h.length=0):h.push(c)}s+=d}return o()[n>>>2>>>0]=s,0}var rL=[31,29,31,30,31,30,31,31,30,31,30,31],rV=[31,28,31,30,31,30,31,31,30,31,30,31],rG=(t,i)=>{r().set(t,i>>>0)};function rH(t,r,i,a){function n(t,r,i){for(t="number"==typeof t?t.toString():t||"";t.length<r;)t=i[0]+t;return t}function u(t,r){return n(t,r,"0")}function l(t,r){var i;function a(t){return 0>t?-1:0<t?1:0}return 0===(i=a(t.getFullYear()-r.getFullYear()))&&0===(i=a(t.getMonth()-r.getMonth()))&&(i=a(t.getDate()-r.getDate())),i}function d(t){switch(t.getDay()){case 0:return new Date(t.getFullYear()-1,11,29);case 1:return t;case 2:return new Date(t.getFullYear(),0,3);case 3:return new Date(t.getFullYear(),0,2);case 4:return new Date(t.getFullYear(),0,1);case 5:return new Date(t.getFullYear()-1,11,31);case 6:return new Date(t.getFullYear()-1,11,30)}}function p(t){var r=t.Cb;for(t=new Date(new Date(t.Db+1900,0,1).getTime());0<r;){var i=t.getMonth(),a=(rs(t.getFullYear())?rL:rV)[i];if(!(r>a-t.getDate())){t.setDate(t.getDate()+r);break}r-=a-t.getDate()+1,t.setDate(1),11>i?t.setMonth(i+1):(t.setMonth(0),t.setFullYear(t.getFullYear()+1))}return i=new Date(t.getFullYear()+1,0,4),r=d(new Date(t.getFullYear(),0,4)),i=d(i),0>=l(r,t)?0>=l(i,t)?t.getFullYear()+1:t.getFullYear():t.getFullYear()-1}t>>>=0,r>>>=0,i>>>=0,a>>>=0;var c,h,f=o()[a+40>>>2>>>0];for(var m in a={lc:s()[a>>>2>>>0],kc:s()[a+4>>>2>>>0],Ib:s()[a+8>>>2>>>0],Mb:s()[a+12>>>2>>>0],Jb:s()[a+16>>>2>>>0],Db:s()[a+20>>>2>>>0],vb:s()[a+24>>>2>>>0],Cb:s()[a+28>>>2>>>0],sc:s()[a+32>>>2>>>0],jc:s()[a+36>>>2>>>0],mc:f?eD(f):""},i=eD(i),f={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})i=i.replace(RegExp(m,"g"),f[m]);var g="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),_="January February March April May June July August September October November December".split(" ");for(m in f={"%a":t=>g[t.vb].substring(0,3),"%A":t=>g[t.vb],"%b":t=>_[t.Jb].substring(0,3),"%B":t=>_[t.Jb],"%C":t=>u((t.Db+1900)/100|0,2),"%d":t=>u(t.Mb,2),"%e":t=>n(t.Mb,2," "),"%g":t=>p(t).toString().substring(2),"%G":p,"%H":t=>u(t.Ib,2),"%I":t=>(0==(t=t.Ib)?t=12:12<t&&(t-=12),u(t,2)),"%j":t=>{for(var r=0,i=0;i<=t.Jb-1;r+=(rs(t.Db+1900)?rL:rV)[i++]);return u(t.Mb+r,3)},"%m":t=>u(t.Jb+1,2),"%M":t=>u(t.kc,2),"%n":()=>`
`,"%p":t=>0<=t.Ib&&12>t.Ib?"AM":"PM","%S":t=>u(t.lc,2),"%t":()=>"	","%u":t=>t.vb||7,"%U":t=>u(Math.floor((t.Cb+7-t.vb)/7),2),"%V":t=>{var r=Math.floor((t.Cb+7-(t.vb+6)%7)/7);if(2>=(t.vb+371-t.Cb-2)%7&&r++,r)53==r&&(4==(i=(t.vb+371-t.Cb)%7)||3==i&&rs(t.Db)||(r=1));else{r=52;var i=(t.vb+7-t.Cb-1)%7;(4==i||5==i&&rs(t.Db%400-1))&&r++}return u(r,2)},"%w":t=>t.vb,"%W":t=>u(Math.floor((t.Cb+7-(t.vb+6)%7)/7),2),"%y":t=>(t.Db+1900).toString().substring(2),"%Y":t=>t.Db+1900,"%z":t=>{var r=0<=(t=t.jc);return(r?"+":"-")+("0000"+((t=Math.abs(t)/60)/60*100+t%60)).slice(-4)},"%Z":t=>t.mc,"%%":()=>"%"},i=i.replace(/%%/g,"\0\0"),f)i.includes(m)&&(i=i.replace(RegExp(m,"g"),f[m](a)));return h=Array(eP(c=i=i.replace(/\0\0/g,"%"))+1),eU(c,h,0,h.length),(m=h).length>r?0:(rG(m,t),m.length-1)}function rF(t,r,i,a){return rH(t>>>0,r>>>0,i>>>0,a>>>0)}g||function(){for(var t=c.numThreads-1;t--;)eS();F.unshift(()=>{var t;Y++,t=()=>X(),g?t():Promise.all(ey.map(ek)).then(t)})}();for(var rj=Array(256),rK=0;256>rK;++rK)rj[rK]=String.fromCharCode(rK);eX=rj,eJ=c.BindingError=class extends Error{constructor(t){super(t),this.name="BindingError"}},c.InternalError=class extends Error{constructor(t){super(t),this.name="InternalError"}},tt.push(0,1,void 0,1,null,1,!0,1,!1,1),c.count_emval_handles=()=>tt.length/2-5-te.length;var rY=[ef,eg,eA,eM,eN,eq,eL,eV,eG,eH,eF,ej,eK,eY,eQ,eZ,rp,rc,rD,rM,rN,rP,rU,rq],rQ=function(){function t(t,r){var i,a,n;return rQ=t.exports,i=rQ=function(){var t={};for(let[r,i]of Object.entries(rQ))t[r]="function"==typeof i?(...t)=>{tW.push(r);try{return i(...t)}finally{G||(tW.pop(),tP&&1===tN&&0===tW.length&&(tN=0,ec+=1,tM(is),"u">typeof Fibers&&Fibers.tc()))}}:i;return t}(),a=t=>r=>t(r)>>>0,n=t=>()=>t()>>>0,(i=Object.assign({},i)).Da=a(i.Da),i.gb=n(i.gb),i.ib=a(i.ib),i.emscripten_main_runtime_thread_id=n(i.emscripten_main_runtime_thread_id),i.tb=a(i.tb),i.ub=n(i.ub),rQ=i,e$.push(rQ.jb),j.unshift(rQ.Ca),O=r,X(),rQ}var r,i=en();if(Y++,c.instantiateWasm)try{return c.instantiateWasm(i,t)}catch(t){E(`Module.instantiateWasm callback failed with error: ${t}`),p(t)}return ee||=c.locateFile?et("ort-wasm-simd-threaded.jsep.wasm")?"ort-wasm-simd-threaded.jsep.wasm":c.locateFile?c.locateFile("ort-wasm-simd-threaded.jsep.wasm",x):x+"ort-wasm-simd-threaded.jsep.wasm":new URL("ort-wasm-simd-threaded.jsep.wasm",import.meta.url).href,(r=function(r){t(r.instance,r.module)},k||"function"!=typeof WebAssembly.instantiateStreaming||et(ee)||er(ee)||"function"!=typeof fetch?ea(ee,i,r):fetch(ee,{credentials:"same-origin"}).then(t=>WebAssembly.instantiateStreaming(t,i).then(r,function(t){return E(`wasm streaming compile failed: ${t}`),E("falling back to ArrayBuffer instantiation"),ea(ee,i,r)}))).catch(p),{}}(),rZ=t=>(rZ=rQ.Da)(t),rX=()=>(rX=rQ.Ea)();c._OrtInit=(t,r)=>(c._OrtInit=rQ.Fa)(t,r),c._OrtGetLastError=(t,r)=>(c._OrtGetLastError=rQ.Ga)(t,r),c._OrtCreateSessionOptions=(t,r,i,a,n,s,o,u,l,d)=>(c._OrtCreateSessionOptions=rQ.Ha)(t,r,i,a,n,s,o,u,l,d),c._OrtAppendExecutionProvider=(t,r)=>(c._OrtAppendExecutionProvider=rQ.Ia)(t,r),c._OrtAddFreeDimensionOverride=(t,r,i)=>(c._OrtAddFreeDimensionOverride=rQ.Ja)(t,r,i),c._OrtAddSessionConfigEntry=(t,r,i)=>(c._OrtAddSessionConfigEntry=rQ.Ka)(t,r,i),c._OrtReleaseSessionOptions=t=>(c._OrtReleaseSessionOptions=rQ.La)(t),c._OrtCreateSession=(t,r,i)=>(c._OrtCreateSession=rQ.Ma)(t,r,i),c._OrtReleaseSession=t=>(c._OrtReleaseSession=rQ.Na)(t),c._OrtGetInputOutputCount=(t,r,i)=>(c._OrtGetInputOutputCount=rQ.Oa)(t,r,i),c._OrtGetInputName=(t,r)=>(c._OrtGetInputName=rQ.Pa)(t,r),c._OrtGetOutputName=(t,r)=>(c._OrtGetOutputName=rQ.Qa)(t,r),c._OrtFree=t=>(c._OrtFree=rQ.Ra)(t),c._OrtCreateTensor=(t,r,i,a,n,s)=>(c._OrtCreateTensor=rQ.Sa)(t,r,i,a,n,s),c._OrtGetTensorData=(t,r,i,a,n)=>(c._OrtGetTensorData=rQ.Ta)(t,r,i,a,n),c._OrtReleaseTensor=t=>(c._OrtReleaseTensor=rQ.Ua)(t),c._OrtCreateRunOptions=(t,r,i,a)=>(c._OrtCreateRunOptions=rQ.Va)(t,r,i,a),c._OrtAddRunConfigEntry=(t,r,i)=>(c._OrtAddRunConfigEntry=rQ.Wa)(t,r,i),c._OrtReleaseRunOptions=t=>(c._OrtReleaseRunOptions=rQ.Xa)(t),c._OrtCreateBinding=t=>(c._OrtCreateBinding=rQ.Ya)(t),c._OrtBindInput=(t,r,i)=>(c._OrtBindInput=rQ.Za)(t,r,i),c._OrtBindOutput=(t,r,i,a)=>(c._OrtBindOutput=rQ._a)(t,r,i,a),c._OrtClearBoundOutputs=t=>(c._OrtClearBoundOutputs=rQ.$a)(t),c._OrtReleaseBinding=t=>(c._OrtReleaseBinding=rQ.ab)(t),c._OrtRunWithBinding=(t,r,i,a,n)=>(c._OrtRunWithBinding=rQ.bb)(t,r,i,a,n),c._OrtRun=(t,r,i,a,n,s,o,u)=>(c._OrtRun=rQ.cb)(t,r,i,a,n,s,o,u),c._OrtEndProfiling=t=>(c._OrtEndProfiling=rQ.db)(t),c._JsepOutput=(t,r,i)=>(c._JsepOutput=rQ.eb)(t,r,i),c._JsepGetNodeName=t=>(c._JsepGetNodeName=rQ.fb)(t);var rJ,r0=()=>(r0=rQ.gb)(),r1=c._free=t=>(r1=c._free=rQ.hb)(t),r2=c._malloc=t=>(r2=c._malloc=rQ.ib)(t),r3=(t,r,i,a,n,s)=>(r3=rQ.lb)(t,r,i,a,n,s),r4=()=>(r4=rQ.mb)(),r6=(t,r,i,a,n)=>(r6=rQ.nb)(t,r,i,a,n),r8=t=>(r8=rQ.ob)(t),r5=t=>(r5=rQ.pb)(t),r9=()=>(r9=rQ.qb)(),r7=(t,r)=>(r7=rQ.rb)(t,r),ie=t=>(ie=rQ.sb)(t),it=t=>(it=rQ.tb)(t),ir=()=>(ir=rQ.ub)(),ii=c.dynCall_ii=(t,r)=>(ii=c.dynCall_ii=rQ.wb)(t,r),ia=t=>(ia=rQ.xb)(t),is=()=>(is=rQ.yb)(),io=t=>(io=rQ.zb)(t),iu=()=>(iu=rQ.Ab)();function il(){0<Y||(g?(d(c),g||eT(j),startWorker(c)):(eT(F),0<Y||rJ||(rJ=!0,c.calledRun=!0,G||(g||eT(j),d(c),g||eT(K)))))}return c.___start_em_js=929301,c.___stop_em_js=929547,c.stackSave=()=>ir(),c.stackRestore=t=>ie(t),c.stackAlloc=t=>it(t),c.setValue=function(t,i,n="i8"){switch(n.endsWith("*")&&(n="*"),n){case"i1":case"i8":r()[t>>>0]=i;break;case"i16":a()[t>>>1>>>0]=i;break;case"i32":s()[t>>>2>>>0]=i;break;case"i64":q[t>>>3]=BigInt(i);break;case"float":u()[t>>>2>>>0]=i;break;case"double":l()[t>>>3>>>0]=i;break;case"*":o()[t>>>2>>>0]=i;break;default:J(`invalid type for setValue: ${n}`)}},c.getValue=function(t,i="i8"){switch(i.endsWith("*")&&(i="*"),i){case"i1":case"i8":return r()[t>>>0];case"i16":return a()[t>>>1>>>0];case"i32":return s()[t>>>2>>>0];case"i64":return q[t>>>3];case"float":return u()[t>>>2>>>0];case"double":return l()[t>>>3>>>0];case"*":return o()[t>>>2>>>0];default:J(`invalid type for getValue: ${i}`)}},c.UTF8ToString=eD,c.stringToUTF8=eW,c.lengthBytesUTF8=eP,Z=function t(){rJ||il(),rJ||(Z=t)},il(),c.PTR_SIZE=4,h},globalThis.self?.name==="em-pthread"&&eg()}),oM=P(()=>{"use strict";eu(),ey=typeof location>"u"?void 0:location.origin,eb=import.meta.url?.startsWith("file:")?new URL(new URL("ort.bundle.min.mjs",import.meta.url).href,ey).href:import.meta.url,e$=()=>{if(eb&&!eb.startsWith("blob:"))return eb.substring(0,eb.lastIndexOf("/")+1)},ev=(t,r)=>{try{let i=r??eb;return(i?new URL(t,i):new URL(t)).origin===ey}catch{return!1}},ew=(t,r)=>{let i=r??eb;try{return(i?new URL(t,i):new URL(t)).href}catch{return}},ex=(t,r)=>`${r??"./"}${t}`,ek=async t=>{let r=await (await fetch(t,{credentials:"same-origin"})).blob();return URL.createObjectURL(r)},eS=async t=>(await import(t)).default,eT=(eh(),q(el)).default,eI=async()=>{if(!eb)throw Error("Failed to load proxy worker: cannot determine the script source URL.");if(ev(eb))return[void 0,eT()];let t=await ek(eb);return[t,eT(t)]},eE=(oD(),q(ef)).default,ez=async(t,r,i)=>{if(!t&&!r&&eE&&eb&&ev(eb))return[void 0,eE];{let a="ort-wasm-simd-threaded.jsep.mjs",n=t??ew(a,r),s=i&&n&&!ev(n,r),o=s?await ek(n):n??ex(a,r);return[s?o:void 0,await eS(o)]}}}),oN=P(()=>{"use strict";oM(),eA=!1,eO=!1,eR=!1,eB=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return"u">typeof MessageChannel&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},eD=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},eM=async t=>{if(eA)return Promise.resolve();if(eO)throw Error("multiple calls to 'initializeWebAssembly()' detected.");if(eR)throw Error("previous call to 'initializeWebAssembly()' failed.");eO=!0;let r=t.initTimeout,i=t.numThreads;if(!eD())throw Error("WebAssembly SIMD is not supported in the current environment.");let a=eB();i>1&&!a&&("u">typeof self&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+i+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),t.numThreads=i=1);let n=t.wasmPaths,s="string"==typeof n?n:void 0,o=n?.mjs,u=o?.href??o,l=n?.wasm,d=l?.href??l,p=t.wasmBinary,[c,h]=await ez(u,s,i>1),f=!1,m=[];if(r>0&&m.push(new Promise(t=>{setTimeout(()=>{f=!0,t()},r)})),m.push(new Promise((t,r)=>{let a={numThreads:i};if(p)a.wasmBinary=p;else if(d||s)a.locateFile=t=>d??s+t;else if(u&&0!==u.indexOf("blob:"))a.locateFile=t=>new URL(t,u).href;else if(c){let t=e$();t&&(a.locateFile=r=>t+r)}h(a).then(r=>{eO=!1,eA=!0,eC=r,t(),c&&URL.revokeObjectURL(c)},t=>{eO=!1,eR=!0,r(t)})})),await Promise.race(m),f)throw Error(`WebAssembly backend initializing failed due to timeout: ${r}ms`)},eN=()=>{if(eA&&eC)return eC;throw Error("WebAssembly is not initialized yet.")}}),oP=P(()=>{"use strict";oN(),eP=(t,r)=>{let i=eN(),a=i.lengthBytesUTF8(t)+1,n=i._malloc(a);return i.stringToUTF8(t,n,a),r.push(n),n},eU=(t,r,i,a)=>{if("object"==typeof t&&null!==t){if(i.has(t))throw Error("Circular reference in options");i.add(t)}Object.entries(t).forEach(([t,n])=>{let s=r?r+t:t;if("object"==typeof n)eU(n,s+".",i,a);else if("string"==typeof n||"number"==typeof n)a(s,n.toString());else if("boolean"==typeof n)a(s,n?"1":"0");else throw Error(`Can't handle extra config type: ${typeof n}`)})},eW=t=>{let r=eN(),i=r.stackSave();try{let i=r.PTR_SIZE,a=r.stackAlloc(2*i);r._OrtGetLastError(a,a+i);let n=Number(r.getValue(a,4===i?"i32":"i64")),s=r.getValue(a+i,"*"),o=s?r.UTF8ToString(s):"";throw Error(`${t} ERROR_CODE: ${n}, ERROR_MESSAGE: ${o}`)}finally{r.stackRestore(i)}}}),oU=P(()=>{"use strict";oN(),oP(),eq=t=>{let r=eN(),i=0,a=[],n=t||{};try{if(t?.logSeverityLevel===void 0)n.logSeverityLevel=2;else if("number"!=typeof t.logSeverityLevel||!Number.isInteger(t.logSeverityLevel)||t.logSeverityLevel<0||t.logSeverityLevel>4)throw Error(`log serverity level is not valid: ${t.logSeverityLevel}`);if(t?.logVerbosityLevel===void 0)n.logVerbosityLevel=0;else if("number"!=typeof t.logVerbosityLevel||!Number.isInteger(t.logVerbosityLevel))throw Error(`log verbosity level is not valid: ${t.logVerbosityLevel}`);t?.terminate===void 0&&(n.terminate=!1);let s=0;return t?.tag!==void 0&&(s=eP(t.tag,a)),i=r._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,s),0===i&&eW("Can't create run options."),t?.extra!==void 0&&eU(t.extra,"",new WeakSet,(t,n)=>{let s=eP(t,a),o=eP(n,a);0!==r._OrtAddRunConfigEntry(i,s,o)&&eW(`Can't set a run config entry: ${t} - ${n}.`)}),[i,a]}catch(t){throw 0!==i&&r._OrtReleaseRunOptions(i),a.forEach(t=>r._free(t)),t}}}),oW=P(()=>{"use strict";oN(),oP(),eL=t=>{switch(t){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw Error(`unsupported graph optimization level: ${t}`)}},eV=t=>{switch(t){case"sequential":return 0;case"parallel":return 1;default:throw Error(`unsupported execution mode: ${t}`)}},eG=t=>{t.extra||(t.extra={}),t.extra.session||(t.extra.session={});let r=t.extra.session;r.use_ort_model_bytes_directly||(r.use_ort_model_bytes_directly="1"),t.executionProviders&&t.executionProviders.some(t=>("string"==typeof t?t:t.name)==="webgpu")&&(t.enableMemPattern=!1)},eH=(t,r,i)=>{for(let a of r){let r="string"==typeof a?a:a.name;switch(r){case"webnn":if(r="WEBNN","string"!=typeof a){let r=a?.deviceType;if(r){let a=eP("deviceType",i),n=eP(r,i);0!==eN()._OrtAddSessionConfigEntry(t,a,n)&&eW(`Can't set a session config entry: 'deviceType' - ${r}.`)}}break;case"webgpu":if(r="JS","string"!=typeof a&&a?.preferredLayout){if("NCHW"!==a.preferredLayout&&"NHWC"!==a.preferredLayout)throw Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${a.preferredLayout}`);let r=eP("preferredLayout",i),n=eP(a.preferredLayout,i);0!==eN()._OrtAddSessionConfigEntry(t,r,n)&&eW(`Can't set a session config entry: 'preferredLayout' - ${a.preferredLayout}.`)}break;case"wasm":case"cpu":continue;default:throw Error(`not supported execution provider: ${r}`)}let n=eP(r,i);0!==eN()._OrtAppendExecutionProvider(t,n)&&eW(`Can't append execution provider: ${r}.`)}},eF=t=>{let r=eN(),i=0,a=[],n=t||{};eG(n);try{let t=eL(n.graphOptimizationLevel??"all"),s=eV(n.executionMode??"sequential"),o="string"==typeof n.logId?eP(n.logId,a):0,u=n.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw Error(`log serverity level is not valid: ${u}`);let l=n.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw Error(`log verbosity level is not valid: ${l}`);let d="string"==typeof n.optimizedModelFilePath?eP(n.optimizedModelFilePath,a):0;if(i=r._OrtCreateSessionOptions(t,!!n.enableCpuMemArena,!!n.enableMemPattern,s,!!n.enableProfiling,0,o,u,l,d),0===i&&eW("Can't create session options."),n.executionProviders&&eH(i,n.executionProviders,a),void 0!==n.enableGraphCapture){if("boolean"!=typeof n.enableGraphCapture)throw Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);let t=eP("enableGraphCapture",a),s=eP(n.enableGraphCapture.toString(),a);0!==r._OrtAddSessionConfigEntry(i,t,s)&&eW(`Can't set a session config entry: 'enableGraphCapture' - ${n.enableGraphCapture}.`)}if(n.freeDimensionOverrides)for(let[t,s]of Object.entries(n.freeDimensionOverrides)){if("string"!=typeof t)throw Error(`free dimension override name must be a string: ${t}`);if("number"!=typeof s||!Number.isInteger(s)||s<0)throw Error(`free dimension override value must be a non-negative integer: ${s}`);let n=eP(t,a);0!==r._OrtAddFreeDimensionOverride(i,n,s)&&eW(`Can't set a free dimension override: ${t} - ${s}.`)}return void 0!==n.extra&&eU(n.extra,"",new WeakSet,(t,n)=>{let s=eP(t,a),o=eP(n,a);0!==r._OrtAddSessionConfigEntry(i,s,o)&&eW(`Can't set a session config entry: ${t} - ${n}.`)}),[i,a]}catch(t){throw 0!==i&&0!==r._OrtReleaseSessionOptions(i)&&eW("Can't release session options."),a.forEach(t=>r._free(t)),t}}}),oq=P(()=>{"use strict";ej=t=>{switch(t){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw Error(`unsupported data type: ${t}`)}},eK=t=>{switch(t){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw Error(`unsupported data type: ${t}`)}},eY=(t,r)=>{let i=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][t],a="number"==typeof r?r:r.reduce((t,r)=>t*r,1);return i>0?Math.ceil(a*i):void 0},eQ=t=>{switch(t){case"float16":return"u">typeof Float16Array&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":case"bool":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw Error(`unsupported type: ${t}`)}},eZ=t=>{switch(t){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw Error(`unsupported logging level: ${t}`)}},eX=t=>"float32"===t||"float16"===t||"int32"===t||"int64"===t||"uint32"===t||"uint8"===t||"bool"===t||"uint4"===t||"int4"===t,eJ=t=>"float32"===t||"float16"===t||"int32"===t||"int64"===t||"uint32"===t||"uint64"===t||"int8"===t||"uint8"===t||"bool"===t||"uint4"===t||"int4"===t,e0=t=>{switch(t){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw Error(`unsupported data location: ${t}`)}}}),oL=P(()=>{"use strict";eu(),e1=async t=>{if("string"!=typeof t)return t instanceof Blob?new Uint8Array(await t.arrayBuffer()):t instanceof Uint8Array?t:new Uint8Array(t);{let r=await fetch(t);if(!r.ok)throw Error(`failed to load external data file: ${t}`);let i=r.headers.get("Content-Length"),a=i?parseInt(i,10):0;if(a<0x40000000)return new Uint8Array(await r.arrayBuffer());{if(!r.body)throw Error(`failed to load external data file: ${t}, no response body.`);let i=r.body.getReader(),n;try{n=new ArrayBuffer(a)}catch(t){if(t instanceof RangeError){let t=Math.ceil(a/65536);n=new WebAssembly.Memory({initial:t,maximum:t}).buffer}else throw t}let s=0;for(;;){let{done:t,value:r}=await i.read();if(t)break;let a=r.byteLength;new Uint8Array(n,s,a).set(r),s+=a}return new Uint8Array(n,0,a)}}}}),oV=P(()=>{"use strict";oq(),e2=["V","I","W","E","F"],e3=(t,r)=>{console.log(`[${e2[t]},${new Date().toISOString()}]${r}`)},e8=(t,r)=>{e4=t,e6=r},e5=(t,r)=>{let i=eZ(t);i>=eZ(e4)&&e3(i,"function"==typeof r?r():r)},e9=(...t)=>{e6&&e5(...t)}}),oG=P(()=>{"use strict";oq(),e7=(t,r)=>new(eQ(r))(t)}),oH=P(()=>{}),oF=P(()=>{"use strict";oV(),oH(),te=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[0xc00000,10],[0x1000000,10],[0x1900000,15],[0x2000000,22],[0x2a30000,2],[0x3840000,6],[0x4000000,6],[0x8000000,6],[0xa000000,6]]),tt=[],tr=t=>16*Math.ceil(Number(t)/16),ti=t=>{for(let r=0;r<tt.length;r++){let i=tt[r];if(t<=i)return i}return 16*Math.ceil(t/16)},ta=1,tn=()=>ta++,ts=async(t,r,i,a)=>{let n=tr(i),s=t.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=t.getCommandEncoder();t.endComputePass(),o.copyBufferToBuffer(r,0,s,0,n),t.flush(),await s.mapAsync(GPUMapMode.READ);let u=s.getMappedRange();if(!a)return new Uint8Array(u.slice(0,i));{let t=a();return t.set(new Uint8Array(u,0,i)),t}}finally{s.destroy()}},to=class{constructor(t){for(let[r]of(this.backend=t,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map,te))tt.push(r),this.freeBuffers.set(r,[]),this.freeUniformBuffers.set(r,[]);this.sessionCount=0}upload(t,r){let i=r.buffer,a=r.byteOffset,n=r.byteLength,s=tr(n),o=this.storageCache.get(t);if(!o)throw Error("gpu data for uploading does not exist");if(Number(o.originalSize)!==n)throw Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${n}`);let u=this.backend.device.createBuffer({mappedAtCreation:!0,size:s,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC});new Uint8Array(u.getMappedRange()).set(new Uint8Array(i,a,n)),u.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(u,0,o.gpuData.buffer,0,s),this.backend.device.queue.submit([l.finish()]),u.destroy(),e9("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${t})`)}memcpy(t,r){let i=this.storageCache.get(t);if(!i)throw Error("source gpu data for memcpy does not exist");let a=this.storageCache.get(r);if(!a)throw Error("destination gpu data for memcpy does not exist");if(i.originalSize!==a.originalSize)throw Error("inconsistent source and destination gpu data size");let n=tr(i.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(i.gpuData.buffer,0,a.gpuData.buffer,0,n)}registerExternalBuffer(t,r,i){let a;if(i){if(a=i[0],t===i[1])return e9("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${r}) => id=${a}, buffer is the same, skip.`),a;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else a=tn();return this.storageCache.set(a,{gpuData:{id:a,type:0,buffer:t},originalSize:r}),e9("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${r}) => id=${a}, registered.`),a}unregisterExternalBuffer(t){void 0!==t&&(this.storageCache.delete(t),e9("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${t}`))}create(t,r=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let i=ti(t),a,n=(r&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(r&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||s){let t=(n?this.freeBuffers:this.freeUniformBuffers).get(i);a=t&&t.length>0?t.pop():this.backend.device.createBuffer({size:i,usage:r})}else a=this.backend.device.createBuffer({size:i,usage:r});let o={id:tn(),type:0,buffer:a};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(t)}),e9("verbose",()=>`[WebGPU] GpuDataManager.create(size=${t}) => id=${o.id}`),o}get(t){return this.storageCache.get(t)?.gpuData}release(t){let r="bigint"==typeof t?Number(t):t,i=this.storageCache.get(r);if(!i){if(0===this.storageCache.size)return 0;throw Error("releasing data does not exist")}return e9("verbose",()=>`[WebGPU] GpuDataManager.release(id=${r}), gpuDataId=${i.gpuData.id}`),this.storageCache.delete(r),this.buffersPending.push(i.gpuData.buffer),i.originalSize}async download(t,r){let i=this.storageCache.get(Number(t));if(!i)throw Error("data does not exist");await ts(this.backend,i.gpuData.buffer,i.originalSize,r)}refreshPendingBuffers(){if(0!==this.buffersPending.length){if("default"===this.backend.sessionStatus){for(let t of this.buffersPending){let r=te.get(t.size);if((t.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let i=this.freeBuffers.get(t.size)||[];void 0===r||i.length>=r?t.destroy():i.push(t)}else if((t.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let i=this.freeUniformBuffers.get(t.size)||[];void 0===r||i.length>=r?t.destroy():i.push(t)}else t.destroy()}this.buffersPending=[]}else{let t=this.capturedPendingBuffers.get(this.backend.currentSessionId);for(let r of(t||(t=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,t)),this.buffersPending))t.push(r);this.buffersPending=[]}}}dispose(){this.freeBuffers.forEach(t=>{t.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(t=>{t.forEach(t=>{t.destroy()})}),this.storageCache.forEach(t=>{t.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(t=>{t.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(t){let r=this.capturedPendingBuffers.get(t);r&&(r.forEach(t=>{t.destroy()}),this.capturedPendingBuffers.delete(t)),this.sessionCount-=1,0===this.sessionCount&&(e9("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(t=>{t.gpuData.buffer.destroy()}),this.storageCache=new Map)}},tu=(...t)=>new to(...t)}),oj=P(()=>{"use strict";tl=class{constructor(t){Object.assign(this,t)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(t=>`${this[t]}`).join(";")),this.key}},td=t=>new tl(t)}),oK=P(()=>{"use strict";tp=class{static calcMatMulShape(t,r){return t[1]!==r[0]?void 0:[t[0],r[1]]}},tc=class{static calcShape(t,r,i=!1){let a=t.length,n=r.length;if(0===a)return r;if(0===n)return t;let s=Math.max(t.length,r.length),o=Array(s);if(i){if(a<2||n<2)return;let i=tp.calcMatMulShape([t[a-2],t[a-1]],[r[n-2],r[n-1]]);if(void 0===i)return;[o[s-2],o[s-1]]=i}for(let u=i?3:1;u<=s;u++){let i=a-u<0?1:t[a-u],l=n-u<0?1:r[n-u];if(i!==l&&i>1&&l>1)return;let d=Math.max(i,l);if(i&&l)o[s-u]=Math.max(i,l);else{if(d>1)return;o[s-u]=0}}return o}static isValidBroadcast(t,r){let i=t.length,a=r.length;if(i>a)return!1;for(let n=1;n<=i;n++)if(1!==t[i-n]&&t[i-n]!==r[a-n])return!1;return!0}},th=class t{static size(r){return t.getSizeFromDimensionRange(r,0,r.length)}static convertShape(t,r=4){let i=t.length;if(0===i)return[];let a=Array(i),n=i-1;for(;n>=0;){if(t[n]%r==0){a[n]=t[n]/r;break}if(r%t[n]!=0)throw Error("cannot convert shape");a[n]=1,r/=t[n],n--}for(n--;n>=0;n--)a[n]=t[n];return a}static sizeFromDimension(r,i){if(i<0||i>r.length)throw Error(`invalid dimension of ${i} for sizeFromDimension as Tensor has ${r.length} dimensions.`);return t.getSizeFromDimensionRange(r,i,r.length)}static sizeToDimension(r,i){if(i<0||i>r.length)throw Error(`invalid dimension of ${i} for sizeToDimension as Tensor has ${r.length} dimensions.`);return t.getSizeFromDimensionRange(r,0,i)}static getSizeFromDimensionRange(t,r,i){let a=1;for(let n=r;n<i;n++){if(t[n]<0)throw Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[n])}return a}static computeStrides(t){let r=t.length;if(0===r)return[];if(1===r)return[1];let i=Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let a=r-3;a>=0;--a)i[a]=i[a+1]*t[a+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(r=>t[r]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((t,a)=>t+r[a]+r[a+i])}static areEqual(t,r){return t.length===r.length&&t.every((t,i)=>t===r[i])}},tf=class t{static adjustPoolAttributes(t,r,i,a,n,s){if(!t&&i.length!==r.length-2)throw Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let t=0;t<r.length-2;t++)t>=i.length?i.push(r[t+2]):i[t]=r[t+2];for(let t=0;t<i.length;t++)if(t<a.length){if(a[t]<0)throw Error("strides should be greater than or equal to 1")}else a.push(1);for(let t=0;t<i.length;t++)if(t<n.length){if(n[t]<0)throw Error("dilations should be greater than or equal to 1")}else n.push(1);for(let t=0;t<2*i.length;t++)if(t<s.length){if(s[t]<0)throw Error("pad should be greater than or equal to 1")}else s.push(0);for(let t=0;t<i.length;t++){if(i[t]<=0)throw Error("kernel shapes need to be greater than 0");if(s[t]>=i[t]||s[t+i.length]>=i[t])throw Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(r,i,a,n,s,o,u){if(u){if(s.length!==2*(r.length-2))throw Error("length of pads should be twice the length of data dimensions");if(i.length!==r.length-2)throw Error("length of strides should be the length of data dimensions");if(n.length!==r.length-2)throw Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<r.length-2;l++)t.adjustPadAndReturnShape(r[l+(o?1:2)],i[l],a[l],n[l],s,l,l+r.length-2,u)}}static computePoolOutputShape(r,i,a,n,s,o,u){if(i.length<=0)throw Error("input shape must be of size greater than 0");let l=[i[0],i[1]];return t.computeShapeHelper(r,i,l,a,n,s,o,u),l}static computeConvOutputShape(r,i,a,n,s,o,u){if(r.length<=0||i.length<=0)throw Error("invalid input tensor dims or invalid filter tensor dims");let l=[r[0],i[0]];return t.computeShapeHelper(!1,r,l,a,n,s,o,u),l}static computeShapeHelper(r,i,a,n,s,o,u,l){if(r)for(let t=0;t<i.length-2;t++)a.push(1);else for(let r=0;r<i.length-2;r++)a.push(t.adjustPadAndReturnShape(i[r+2],n[r],s[r],o[r],u,r,r+i.length-2,l))}static adjustPadAndReturnShape(t,r,i,a,n,s,o,u){let l=i*(a-1)+1;if(!u||"NOTSET"===u)return Math.floor((t+n[s]+n[o]-l)/r+1);switch(u){case"VALID":return n[s]=0,n[o]=0,Math.floor((t-l)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(1!==i)throw Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let i=((t+r-1)/r-1)*r+a-t;return n[s]=Math.floor("SAME_LOWER"===u?(i+1)/2:i/2),n[o]=i-n[s],Math.floor((t+i-a)/r+1)}default:throw Error("Unsupported AutoPad type")}}},tm=class{static getShapeOfGemmResult(t,r,i,a,n){let s,o,u;if(2!==t.length||2!==i.length)throw Error("shape need to be of size 2");r?(s=t[1],o=t[0]):(s=t[0],o=t[1]);let l=-1;if(a?(u=i[0],l=1):(u=i[1],l=0),i[l]!==o)throw Error("dimension mismatch");if(s<=0||u<=0||o<=0)throw Error("invalid shape specified");if(n&&!tc.isValidBroadcast(n,[s,u]))throw Error("gemm: invalid bias shape for broadcast");return[s,u,o]}},tg=-34028234663852886e22,t_=34028234663852886e22}),oY=P(()=>{"use strict";oq(),oK(),ty=64,tb=(t,r)=>{if(3===r)throw Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(t)){case 10:return r>1?`vec${r}<f16>`:"f16";case 1:return r>1?`vec${r}<f32>`:"f32";case 6:return r>1?`vec${r}<i32>`:"i32";case 12:return r>1?`vec${r}<u32>`:"u32";case 7:if(r>1)throw Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(r>1)throw Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(4!==r)throw Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw Error(`Unknown data type: ${t}`)}},t$=(t,r=1)=>{let i=tb(t,r);return"string"==typeof i?i:i[0]},tv=(t,r=1)=>{let i=tb(t,r);return"string"==typeof i?i:i[1]},tw=(...t)=>{let r=[];return t.forEach(t=>{0!==t.length&&r.push({type:12,data:t},{type:12,data:th.computeStrides(t)})}),r},tx=t=>t%4==0?4:t%2==0?2:1,tk=(t="f32",r,i="0")=>r&&1!==r?`vec${r}<${t}>(${i})`:`${t}(${i})`,tS=(t,r,i)=>"f32"===t?i:1===r?`f32(${i})`:`vec${r}<f32>(${i})`,tT=(t,r)=>4===r?`(${t}.x + ${t}.y + ${t}.z + ${t}.w)`:2===r?`(${t}.x + ${t}.y)`:3===r?`(${t}.x + ${t}.y + ${t}.z)`:t,tI=(t,r,i,a)=>t.startsWith("uniforms.")&&i>4?"string"==typeof r?"f16"===a?`${t}[(${r}) / 8][(${r}) % 8 / 4][(${r}) % 8 % 4]`:`${t}[(${r}) / 4][(${r}) % 4]`:"f16"===a?`${t}[${Math.floor(r/8)}][${Math.floor(r%8/4)}][${r%8%4}]`:`${t}[${Math.floor(r/4)}][${r%4}]`:i>1?`${t}[${r}]`:t,tE=(t,r,i,a,n)=>{let s,o,u,l,d="number"==typeof i,p=d?i:i.length,c=[...Array(p).keys()],h=p<2?"u32":p<=4?`vec${p}<u32>`:`array<u32, ${p}>`,f=tb(r,n),m="string"==typeof f?f:f[1],g={indices:h,value:m,storage:"string"==typeof f?f:f[0],tensor:r},_=t=>"string"==typeof t?t:`${t}u`,y={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=d?"uniforms.":"",$=`${b}${t}_shape`,v=`${b}${t}_strides`,w="";for(let t=0;t<p-1;t++)w+=`
    let dim${t} = current / ${tI(v,t,p)};
    let rest${t} = current % ${tI(v,t,p)};
    indices[${t}] = dim${t};
    current = rest${t};
    `;w+=`indices[${p-1}] = current;`;let x=p<2?"":`
  fn o2i_${t}(offset: u32) -> ${g.indices} {
    var indices: ${g.indices};
    var current = offset;
    ${w}
    return indices;
  }`,k=[];if(p>=2)for(let t=p-1;t>=0;t--)k.push(`${tI(v,t,p)} * (indices[${t}])`);let S=p<2?"":`
  fn i2o_${t}(indices: ${g.indices}) -> u32 {
    return ${k.join("+")};
  }`,T=(...t)=>0===p?"0u":`${g.indices}(${t.map(_).join(",")})`,I=(t,r)=>p<2?`${t}`:`${tI(t,r,p)}`,E={},z=(r,i)=>(()=>{if(g.storage===g.value)return`${t}[${r}]=${i};`;if("vec2<u32>"===g.storage&&"i32"===g.value)return`${t}[${r}]=vec2<u32>(u32(${i}), select(0u, 0xFFFFFFFFu, ${i} < 0));`;if("vec2<u32>"===g.storage&&"u32"===g.value)return`${t}[${r}]=vec2<u32>(u32(${i}), 0u);`;if("u32"===g.storage&&"vec4<bool>"===g.value)return`${t}[${r}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${i}));`;throw Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),C=r=>(()=>{if(g.storage===g.value)return`${t}[${r}]`;if("vec2<u32>"===g.storage&&"i32"===g.value)return`i32(${t}[${r}].x)`;if("vec2<u32>"===g.storage&&"u32"===g.value)return`u32(${t}[${r}].x)`;if("u32"===g.storage&&"vec4<bool>"===g.value)return`vec4<bool>(bool(${t}[${r}] & 0xFFu), bool(${t}[${r}] & 0xFF00u), bool(${t}[${r}] & 0xFF0000u), bool(${t}[${r}] & 0xFF000000u))`;throw Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),A=p<2?"":`
  fn get_${t}ByIndices(indices: ${g.indices}) -> ${m} {
    return ${C(`i2o_${t}(indices)`)};
  }`,O=p<2?"":(s=c.map(t=>`d${t}: u32`).join(", "),o=c.map(t=>`d${t}`).join(", "),`
  fn get_${t}(${s}) -> ${m} {
    return get_${t}ByIndices(${T(o)});
  }`),R=p<2?"":`
  fn set_${t}ByIndices(indices: ${g.indices}, value: ${m}) {
    ${z(`i2o_${t}(indices)`,"value")}
  }`,B=p<2?"":(u=c.map(t=>`d${t}: u32`).join(", "),l=c.map(t=>`d${t}`).join(", "),`
  fn set_${t}(${u}, value: ${m}) {
    set_${t}ByIndices(${T(l)}, value);
  }`);return{impl:()=>{let t=[],r=!1;return y.offsetToIndices&&(t.push(x),r=!0),y.indicesToOffset&&(t.push(S),r=!0),y.broadcastedIndicesToOffset&&(Object.values(E).forEach(r=>t.push(r)),r=!0),y.set&&(t.push(B),r=!0),y.setByIndices&&(t.push(R),r=!0),y.get&&(t.push(O),r=!0),y.getByIndices&&(t.push(A),r=!0),!d&&r&&t.unshift(`const ${$} = ${g.indices}(${i.join(",")});`,`const ${v} = ${g.indices}(${th.computeStrides(i).join(",")});`),t.join(`
`)},type:g,offsetToIndices:r=>(y.offsetToIndices=!0,p<2?r:`o2i_${t}(${r})`),indicesToOffset:r=>(y.indicesToOffset=!0,p<2?r:`i2o_${t}(${r})`),broadcastedIndicesToOffset:(r,i)=>{y.broadcastedIndicesToOffset=!0;let a=`${i.name}broadcastedIndicesTo${t}Offset`;if(a in E)return`${a}(${r})`;let n=[];for(let t=p-1;t>=0;t--){let r=i.indicesGet("outputIndices",t+i.rank-p);n.push(`${I(v,t)} * (${r} % ${I($,t)})`)}return E[a]=`fn ${a}(outputIndices: ${i.type.indices}) -> u32 {
             return ${n.length>0?n.join("+"):"0u"};
           }`,`${a}(${r})`},indices:T,indicesGet:I,indicesSet:(t,r,i)=>p<2?`${t}=${i};`:`${tI(t,r,p)}=${i};`,set:(...r)=>{if(r.length!==p+1)throw Error(`indices length must be ${p}`);let i=r[p];if("string"!=typeof i)throw Error("value must be string");let a=r.slice(0,p).map(_).join(",");return 0===p?z("0u",i):1===p?z(a[0],i):(y.set=!0,y.setByIndices=!0,y.indicesToOffset=!0,`set_${t}(${a}, ${i})`)},setByOffset:z,setByIndices:(r,i)=>p<2?z(r,i):(y.setByIndices=!0,y.indicesToOffset=!0,`set_${t}ByIndices(${r}, ${i});`),get:(...r)=>{if(r.length!==p)throw Error(`indices length must be ${p}`);let i=r.map(_).join(",");return 0===p?C("0u"):1===p?C(i[0]):(y.get=!0,y.getByIndices=!0,y.indicesToOffset=!0,`get_${t}(${i})`)},getByOffset:C,getByIndices:r=>p<2?C(r):(y.getByIndices=!0,y.indicesToOffset=!0,`get_${t}ByIndices(${r})`),usage:a,name:t,strides:v,shape:$,rank:p}},tz=(t,r,i,a=1)=>tE(t,r,i,"input",a),tC=(t,r,i,a=1)=>tE(t,r,i,"output",a),tA=(t,r,i)=>tE(t,r,i,"atomicOutput",1),tO=(t,r,i,a=1)=>tE(t,r,i,"internal",a),tR=class{constructor(t,r){this.normalizedDispatchGroup=t,this.limits=r,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(t){return`if (global_idx >= ${"number"==typeof t?`${t}u`:t}) { return; }`}mainStart(t=ty){let r="number"==typeof t?t:t[0],i="number"==typeof t?1:t[1],a="number"==typeof t?1:t[2];if(r>this.limits.maxComputeWorkgroupSizeX||i>this.limits.maxComputeWorkgroupSizeY||a>this.limits.maxComputeWorkgroupSizeZ)throw Error(`workgroup size [${r}, ${i}, ${a}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(r*i*a>this.limits.maxComputeInvocationsPerWorkgroup)throw Error(`workgroup size [${r}, ${i}, ${a}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=1===this.normalizedDispatchGroup[1]&&1===this.normalizedDispatchGroup[2],s=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,o=n?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${r*i*a}u + local_idx;`;return`@compute @workgroup_size(${r}, ${i}, ${a})
  fn main(${s}) {
    ${o}
  `}appendVariableUniforms(t){0!==t.rank&&(t.shape.startsWith("uniforms.")&&this.uniforms.push({name:t.shape.replace("uniforms.",""),type:"u32",length:t.rank}),t.strides.startsWith("uniforms.")&&this.uniforms.push({name:t.strides.replace("uniforms.",""),type:"u32",length:t.rank}))}declareVariable(t,r){if("internal"===t.usage)throw Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(t),this.appendVariableUniforms(t);let i="input"===t.usage?"read":"read_write",a="atomicOutput"===t.usage?"atomic<i32>":t.type.storage;return`@group(0) @binding(${r}) var<storage, ${i}> ${t.name}: array<${a}>;`}declareVariables(...t){return t.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(t){if("internal"!==t.usage)throw Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(t),this.appendVariableUniforms(t)}registerInternalVariables(...t){return t.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(t,r,i=1){return this.uniforms.push({name:t,type:r,length:i}),this}registerUniforms(t){return this.uniforms=this.uniforms.concat(t),this}uniformDeclaration(){if(0===this.uniforms.length)return"";let t=[];for(let{name:r,type:i,length:a}of this.uniforms)if(a&&a>4)"f16"===i?t.push(`@align(16) ${r}:array<mat2x4<${i}>, ${Math.ceil(a/8)}>`):t.push(`${r}:array<vec4<${i}>, ${Math.ceil(a/4)}>`);else{let n=null==a||1===a?i:`vec${a}<${i}>`;t.push(`${r}:${n}`)}return`
      struct Uniforms { ${t.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(t=>t.impl()).join(`
`)+this.internalVariables.map(t=>t.impl()).join(`
`)}get variablesInfo(){if(0===this.uniforms.length)return;let t=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(r=>[t(r.type),r.length??1])}},tB=(t,r)=>new tR(t,r)}),oQ=P(()=>{"use strict";oq(),oK(),oj(),oY(),tD=(t,r)=>{if(!t||1!==t.length)throw Error("Transpose requires 1 input.");if(0!==r.length&&r.length!==t[0].dims.length)throw Error(`perm size ${r.length} does not match input rank ${t[0].dims.length}`)},tM=(t,r)=>0!==r.length?r:[...Array(t).keys()].reverse(),tN=(t,r)=>th.sortBasedOnPerm(t,tM(t.length,r)),tP=(t,r,i,a)=>{let n=`fn perm(i: ${a.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`;for(let i=0;i<r;++i)n+=`a[${t[i]}]=i[${i}];`;return n+"return a;}"},tU=(t,r)=>{let i=[],a=[];for(let n=0;n<t.length;++n)1!==t[n]&&i.push(t[n]),1!==t[r[n]]&&a.push(r[n]);return{newShape:i,newPerm:a}},tW=(t,r)=>{let i=0;for(let a=0;a<t.length;++a)if(1!==r[t[a]]){if(t[a]<i)return!1;i=t[a]}return!0},tq=(t,r)=>{let i=t.dataType,a=t.dims.length,n=tM(a,r),s=tN(t.dims,n),o=t.dims,u=s;if(a<2||tW(n,t.dims))return{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let r=th.size(s);return{outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(r/64/4)},programUniforms:[{type:12,data:Math.ceil(r/4)}]}},getShaderSource:t=>{let r=tz("input",i,o,4),a=tC("output",i,u,4);return`
  ${t.registerUniform("output_size","u32").declareVariables(r,a)}
  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`}};let{newShape:l,newPerm:d}=tU(t.dims,n),p=th.areEqual(d,[2,3,1]),c=th.areEqual(d,[3,1,2]);return 2===l.length||p||c?(u=[(o=p?[l[0],l[1]*l[2]]:c?[l[0]*l[1],l[2]]:l)[1],o[0]],{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let r=th.size(s);return{outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(u[1]/16),y:Math.ceil(u[0]/16)},programUniforms:[{type:12,data:r},...tw(o,u)]}},getShaderSource:t=>{let r=tz("a",i,o.length),a=tC("output",i,u.length);return`
  ${t.registerUniform("output_size","u32").declareVariables(r,a)}
  var<workgroup> tile : array<array<${a.type.value}, 17>, 16>;
  ${t.mainStart([16,16,1])}
    let stride = (uniforms.output_shape[1] - 1) / 16 + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * 16u + local_id.x;
    let input_row = workgroup_id_x * 16u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${r.getByIndices(`${r.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * 16u + local_id.x;
    let output_row = workgroup_id_y * 16u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${a.setByIndices(`${a.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`}}):{name:"Transpose",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>{let r=th.size(s);return{outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:[{type:12,data:r},...tw(o,u)]}},getShaderSource:t=>{let r=tz("a",i,o.length),s=tC("output",i,u.length);return`
  ${t.registerUniform("output_size","u32").declareVariables(r,s)}

  ${tP(n,a,r,s)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${s.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${s.setByOffset("global_idx",r.getByIndices("aIndices"))}
  }`}}},tL=(t,r)=>{tD(t.inputs,r.perm),t.compute(tq(t.inputs[0],r.perm))},tV=t=>td({perm:t.perm})}),oZ=P(()=>{"use strict";oq(),oK(),oY(),oX(),oQ(),tG={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},tH={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},tF={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},tj={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},tK=(t,r)=>{let i=[];for(let a=r-t;a<r;++a)i.push(a);return i},tY=(t,r)=>{let i=[],a=t.length;for(let n=0;n<a;n++)-1===r.indexOf(n)&&i.push(t[n]);return[i,r.map(r=>t[r])]},tQ=(t,r)=>{let i=t.length+r.length,a=[],n=0;for(let s=0;s<i;s++)-1===r.indexOf(s)?a.push(t[n++]):a.push(1);return a},tZ=(t,r)=>{for(let i=0;i<t.length;++i)if(t[t.length-i-1]!==r-1-i)return!1;return!0},tX=(t,r)=>{let i=[];if(!tZ(t,r)){for(let a=0;a<r;++a)-1===t.indexOf(a)&&i.push(a);t.forEach(t=>i.push(t))}return i},tJ=(t,r,i,a,n,s,o)=>{let u=i[0].dims,l=th.size(s),d=th.size(o),p=tz("_A",i[0].dataType,u),c=tC("output",n,s),h=64;1===l&&(h=256);let f=`
          var<workgroup> aBestValues : array<f32, ${h}>;
       `;return{name:t,shaderCache:{hint:`${r};${h}`,inputDependencies:["type"]},getShaderSource:t=>`
        ${t.registerUniform("reduceSize","u32").declareVariables(p,c)}
        ${f}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${t.mainStart(h)}

          let outputIndex = global_idx / ${h};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${tF[a]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${h}) {
           let candidate = f32(${p.getByOffset("offset + k")});
           bestValue = ${tG[a]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${h}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${tH[a]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${c.setByOffset("outputIndex",`${"mean"===a?`${c.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${c.type.storage}(${tj[a]})`}`)};
         }
        }`,getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},t0=(t,r,i,a)=>{let n=1===t.inputs.length?i:ra(t.inputs,i),s=n.axes;0!==s.length||n.noopWithEmptyAxes||(s=t.inputs[0].dims.map((t,r)=>r));let o=th.normalizeAxes(s,t.inputs[0].dims.length),u=o,l=t.inputs[0],d=tX(u,t.inputs[0].dims.length);d.length>0&&(l=t.compute(tq(t.inputs[0],d),{inputs:[0],outputs:[-1]})[0],u=tK(u.length,l.dims.length));let[p,c]=tY(l.dims,u),h=p;n.keepDims&&(h=tQ(p,o)),t.compute(tJ(r,n.cacheKey,[l],a,t.inputs[0].dataType,h,c),{inputs:[l]})},t1=(t,r)=>{t0(t,"ReduceMeanShared",r,"mean")},t2=(t,r)=>{t0(t,"ReduceL1Shared",r,"l1")},t3=(t,r)=>{t0(t,"ReduceL2Shared",r,"l2")},t4=(t,r)=>{t0(t,"ReduceLogSumExpShared",r,"logSumExp")},t6=(t,r)=>{t0(t,"ReduceMaxShared",r,"max")},t8=(t,r)=>{t0(t,"ReduceMinShared",r,"min")},t5=(t,r)=>{t0(t,"ReduceProdShared",r,"prod")},t9=(t,r)=>{t0(t,"ReduceSumShared",r,"sum")},t7=(t,r)=>{t0(t,"ReduceSumSquareShared",r,"sumSquare")},re=(t,r)=>{t0(t,"ReduceLogSumShared",r,"logSum")}}),oX=P(()=>{"use strict";oq(),oK(),oj(),oY(),oZ(),rt=t=>{if(!t||0===t.length||t.length>2)throw Error("Reduce op requires 1 or 2 inputs.");if(2===t.length&&1!==t[1].dims.length)throw Error("Invalid axes input dims.")},rr=t=>["","",`var value = ${t.getByIndices("input_indices")};`,""],ri=(t,r,i,a,n,s,o=!1,u=!1)=>{let l=[],d=i[0].dims,p=d.length,c=th.normalizeAxes(n,p),h=!u&&0===c.length;d.forEach((t,r)=>{h||c.indexOf(r)>=0?o&&l.push(1):l.push(t)});let f=l.length,m=th.size(l);return{name:t,shaderCache:r,getShaderSource:t=>{let r=[],n=tz("_A",i[0].dataType,p),u=tC("output",s,f),l=a(n,u,c),m=l[2];for(let t=0,i=0;t<p;t++)h||c.indexOf(t)>=0?(o&&i++,m=`for(var j${t}: u32 = 0; j${t} < ${d[t]}; j${t}++) {
                  ${l[2].includes("last_index")?`let last_index = j${t};`:""}
                  ${n.indicesSet("input_indices",t,`j${t}`)}
                  ${m}
                }`):(r.push(`${n.indicesSet("input_indices",t,u.indicesGet("output_indices",i))};`),i++);return`

        ${t.registerUniform("output_size","u32").declareVariables(n,u)}

        ${t.mainStart()}
          ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${n.type.indices};
          let output_indices = ${u.offsetToIndices("global_idx")};

          ${r.join(`
`)}
          ${l[0]}       // init ops for reduce max/min
          ${l[1]}
          ${m}
          ${l[3]}
          ${4===l.length?u.setByOffset("global_idx","value"):l.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:s}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...tw(d,l)]})}},ra=(t,r)=>{let i=[];return t[1].dims[0]>0&&t[1].getBigInt64Array().forEach(t=>i.push(Number(t))),td({axes:i,keepDims:r.keepDims,noopWithEmptyAxes:r.noopWithEmptyAxes})},rn=(t,r,i,a)=>{let n=t.inputs,s=1===n.length?i:ra(n,i);t.compute(ri(r,{hint:s.cacheKey,inputDependencies:["rank"]},[n[0]],s.noopWithEmptyAxes&&0===s.axes.length?rr:a,s.axes,n[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},rs=(t,r)=>{rt(t.inputs),rn(t,"ReduceLogSum",r,(t,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${t.getByIndices("input_indices")};`,"value = log(value);"])},ro=(t,r)=>{rt(t.inputs),rn(t,"ReduceL1",r,(t,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${t.getByIndices("input_indices")});`,""])},ru=(t,r)=>{rt(t.inputs),rn(t,"ReduceL2",r,(t,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${t.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},rl=(t,r)=>{rt(t.inputs),rn(t,"ReduceLogSumExp",r,(t,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${t.getByIndices("input_indices")});`,"value = log(value);"])},rd=(t,r)=>{rt(t.inputs),rn(t,"ReduceMax",r,(t,r,i)=>{let a=[];for(let r=0;r<t.rank;r++)(i.indexOf(r)>=0||0===i.length)&&a.push(t.indicesSet("input_indices",r,0));return[`${a.join(`
`)}`,`var value = ${t.getByIndices("input_indices")};`,`value = max(value, ${t.getByIndices("input_indices")});`,""]})},rp=(t,r)=>{rt(t.inputs),rn(t,"ReduceMean",r,(r,i,a)=>{let n=1;for(let i=0;i<r.rank;i++)(a.indexOf(i)>=0||0===a.length)&&(n*=t.inputs[0].dims[i]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${n});`]})},rc=(t,r)=>{rt(t.inputs),rn(t,"ReduceMin",r,(t,r,i)=>{let a=[];for(let r=0;r<t.rank;r++)(i.indexOf(r)>=0||0===i.length)&&a.push(`input_indices[${r}] = 0;`);return[`${a.join(`
`)}`,`var value = ${t.getByIndices("input_indices")};`,`value = min(value, ${t.getByIndices("input_indices")});`,""]})},rh=(t,r)=>{rt(t.inputs),rn(t,"ReduceProd",r,(t,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${t.getByIndices("input_indices")};`,""])},rf=(t,r)=>{rt(t.inputs),rn(t,"ReduceSum",r,(t,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${t.getByIndices("input_indices")};`,""])},rm=(t,r)=>{rt(t.inputs),rn(t,"ReduceSumSquare",r,(t,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${t.getByIndices("input_indices")}; value += t * t;`,""])},rg=(t,r,i)=>{if(0===r.length)return i;let a=1,n=1;for(let i=0;i<r.length;i++)-1===r.indexOf(i)?a*=t[i]:n*=t[i];return n<32&&a>1024},r_=(t,r)=>{rg(t.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?rp(t,r):t1(t,r)},ry=(t,r)=>{rg(t.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?ro(t,r):t2(t,r)},rb=(t,r)=>{rg(t.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?ru(t,r):t3(t,r)},r$=(t,r)=>{rg(t.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?rl(t,r):t4(t,r)},rv=(t,r)=>{rg(t.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?rd(t,r):t6(t,r)},rw=(t,r)=>{rg(t.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?rc(t,r):t8(t,r)},rx=(t,r)=>{rg(t.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?rh(t,r):t5(t,r)},rk=(t,r)=>{rg(t.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?rf(t,r):t9(t,r)},rS=(t,r)=>{rg(t.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?rm(t,r):t7(t,r)},rT=(t,r)=>{rg(t.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?rs(t,r):re(t,r)}}),oJ=P(()=>{"use strict";oq(),oj(),oX(),rI=t=>{if(!t||0===t.length||t.length>2)throw Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(1!==t[0].dataType)throw Error("Invalid input type.")},rE=(t,r)=>{rI(t.inputs),t.compute(ri("ArgMin",{hint:r.cacheKey,inputDependencies:["rank"]},[t.inputs[0]],(t,i,a)=>{let n=[];for(let r=0;r<t.rank;r++)(a.indexOf(r)>=0||0===a.length)&&n.push(`input_indices[${r}] = 0;`);return[`${n.join(`
`)}`,`var value = ${t.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${t.getByIndices("input_indices")} ${r.selectLastIndex>0?"<=":"<"} value) {
         value = ${t.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]},[r.axis],7,r.keepDims),{inputs:[0]})},rz=(t,r)=>{rI(t.inputs),t.compute(ri("argMax",{hint:r.cacheKey,inputDependencies:["rank"]},[t.inputs[0]],(t,i,a)=>{let n=[];for(let r=0;r<t.rank;r++)(a.indexOf(r)>=0||0===a.length)&&n.push(`input_indices[${r}] = 0;`);return[`${n.join(`
`)}`,`var value = ${t.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${t.getByIndices("input_indices")} ${r.selectLastIndex>0?">=":">"} value) {
         value = ${t.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]},[r.axis],7,r.keepDims),{inputs:[0]})},rC=t=>td(t)}),o0=P(()=>{"use strict";oq(),oK(),oH(),oY(),rA=(t,r)=>{let i=t[0],a=t[1],n=t[2],s=t[3],o=t[4],u=t[5];if(o&&u)throw Error("Attention cannot have both past and attention_bias");if(3!==i.dims.length)throw Error('Input "input" must have 3 dimensions');let l=i.dims[0],d=i.dims[1],p=i.dims[2];if(1!==n.dims.length)throw Error('Input "bias" is expected to have 1 dimensions');if(2!==a.dims.length)throw Error('Input "weights" is expected to have 2 dimensions');if(a.dims[0]!==p)throw Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==a.dims[1])throw Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let c=n.dims[0]/3,h=c,f=h;if(r.qkvHiddenSizes.length>0){if(3!==r.qkvHiddenSizes.length)throw Error("qkv_hidden_sizes attribute should have 3 elements");for(let t of r.qkvHiddenSizes)if(t%r.numHeads!=0)throw Error("qkv_hidden_sizes should be divisible by num_heads");c=r.qkvHiddenSizes[0],h=r.qkvHiddenSizes[1],f=r.qkvHiddenSizes[2]}if(c!==h)throw Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==c+h+f)throw Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let m=0;if(o){if(h!==f)throw Error('Input "past" expect k_hidden_size == v_hidden_size');if(5!==o.dims.length)throw Error('Input "past" must have 5 dimensions');if(2!==o.dims[0])throw Error('Input "past" first dimension must be 2');if(o.dims[1]!==l)throw Error('Input "past" second dimension must be batch_size');if(o.dims[2]!==r.numHeads)throw Error('Input "past" third dimension must be num_heads');if(o.dims[4]!==h/r.numHeads)throw Error('Input "past" fifth dimension must be k_hidden_size / num_heads');r.pastPresentShareBuffer||(m=o.dims[3])}let g=d+m;if(s)throw Error("Mask not supported");if(o)throw Error("past is not supported");if(u){if(4!==u.dims.length)throw Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==l||u.dims[1]!==r.numHeads||u.dims[2]!==d||u.dims[3]!==g)throw Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:d,totalSequenceLength:g,maxSequenceLength:-1,inputHiddenSize:p,hiddenSize:c,vHiddenSize:f,headSize:Math.floor(c/r.numHeads),vHeadSize:Math.floor(f/r.numHeads),numHeads:r.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:r.maskFilterValue,maskType:0,scale:r.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},rO=(t,r,i)=>r&&t?`
      let total_sequence_length_input = u32(${r.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${t?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${i?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,rR=(t,r,i,a,n,s,o,u)=>{let l=tx(o?1:s),d=64,p=s/l;p<64&&(d=32);let c=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:n},{type:12,data:p},{type:12,data:Math.ceil(s/l/d)}],h=t$(t.dataType,l),f=tv(1,l),m=["type"];return o&&m.push("type"),u&&m.push("type"),{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${h};${l}`,inputDependencies:m},getShaderSource:r=>{let i=tC("x",t.dataType,t.dims,l),a=[i],n=o?tz("seq_lens",o.dataType,o.dims):void 0;n&&a.push(n);let s=u?tz("total_sequence_length_input",u.dataType,u.dims):void 0;s&&a.push(s);let p=tv(t.dataType);return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${r.registerUniforms([{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}]).declareVariables(...a)}
  ${r.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${rO(n,s,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${o?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${f}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${f}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${f}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${f}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${i.type.value}(${p}(1.0) / ${p}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${f}(x[offset + i]);
        x[offset + i] = ${i.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${i.type.value}(${p}(0));
        }`:""};
  }`},getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(s/d),y:n,z:r*i},programUniforms:c})}},rB=(t,r,i,a,n,s,o,u,l)=>{let d=o+s.kvSequenceLength,p=[s.batchSize,s.numHeads,s.sequenceLength,d],c=t>1&&a,h=s.kvNumHeads?s.kvNumHeads:s.numHeads,f=c?[s.batchSize,h,d,s.headSize]:void 0,m=s.nReps?s.nReps:1,g=0===s.scale?1/Math.sqrt(s.headSize):s.scale,_=tx(s.headSize),y=s.headSize/_,b={x:Math.ceil(d/12),y:Math.ceil(s.sequenceLength/12),z:s.batchSize*s.numHeads},$=[{type:12,data:s.sequenceLength},{type:12,data:y},{type:12,data:d},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:g},{type:12,data:o},{type:12,data:s.kvSequenceLength},{type:12,data:m}],v=c&&a&&th.size(a.dims)>0,w=["type","type"];v&&w.push("type"),n&&w.push("type"),u&&w.push("type"),l&&w.push("type");let x=[{dims:p,dataType:r.dataType,gpuDataType:0}];return c&&x.push({dims:f,dataType:r.dataType,gpuDataType:0}),{name:"AttentionProbs",shaderCache:{hint:`${_};${void 0!==n};${void 0!==a};${t}`,inputDependencies:w},getRunData:()=>({outputs:x,dispatchGroup:b,programUniforms:$}),getShaderSource:t=>{let s=tz("q",r.dataType,r.dims,_),o=[s,tz("key",i.dataType,i.dims,_)];if(v){let t=tz("past_key",a.dataType,a.dims,_);o.push(t)}n&&o.push(tz("attention_bias",n.dataType,n.dims));let d=u?tz("seq_lens",u.dataType,u.dims):void 0;d&&o.push(d);let h=l?tz("total_sequence_length_input",l.dataType,l.dims):void 0;h&&o.push(h);let g=tC("output",r.dataType,p),y=[g];c&&y.push(tC("present_key",r.dataType,f,_));let b=tv(1,_);return`
  const TILE_SIZE = 12u;

  var<workgroup> tileQ: array<${s.type.storage}, 144>;
  var<workgroup> tileK: array<${s.type.storage}, 144>;
  ${t.registerUniforms([{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}]).declareVariables(...o,...y)}
  ${t.mainStart([12,12,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${1===m?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${1===m?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${rO(d,h,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${v&&c?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${c?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${b}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${v&&c?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${c?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${b}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(_){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw Error(`Unsupported components: ${_}`)}})()};
        output[outputIdx] = ${g.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`}}},rD=(t,r,i,a,n,s,o,u)=>{let l=s+n.kvSequenceLength,d=n.nReps?n.nReps:1,p=n.vHiddenSize*d,c=t>1&&a,h=n.kvNumHeads?n.kvNumHeads:n.numHeads,f=c?[n.batchSize,h,l,n.headSize]:void 0,m=[n.batchSize,n.sequenceLength,p],g={x:Math.ceil(n.vHeadSize/12),y:Math.ceil(n.sequenceLength/12),z:n.batchSize*n.numHeads},_=[{type:12,data:n.sequenceLength},{type:12,data:l},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:p},{type:12,data:s},{type:12,data:n.kvSequenceLength},{type:12,data:d}],y=c&&a&&th.size(a.dims)>0,b=["type","type"];y&&b.push("type"),o&&b.push("type"),u&&b.push("type");let $=[{dims:m,dataType:r.dataType,gpuDataType:0}];return c&&$.push({dims:f,dataType:r.dataType,gpuDataType:0}),{name:"AttentionScore",shaderCache:{hint:`${void 0!==a};${t}`,inputDependencies:b},getRunData:()=>({outputs:$,dispatchGroup:g,programUniforms:_}),getShaderSource:t=>{let n=tz("probs",r.dataType,r.dims),s=[n,tz("v",i.dataType,i.dims)];y&&s.push(tz("past_value",a.dataType,a.dims));let l=o?tz("seq_lens",o.dataType,o.dims):void 0;o&&s.push(l);let p=u?tz("total_sequence_length_input",u.dataType,u.dims):void 0;u&&s.push(p);let h=[tC("output",r.dataType,m)];return c&&h.push(tC("present_value",r.dataType,f)),`
  const TILE_SIZE = 12u;
  var<workgroup> tileQ: array<${n.type.value}, 144>;
  var<workgroup> tileV: array<${n.type.value}, 144>;
  ${t.registerUniforms([{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}]).declareVariables(...s,...h)}
  ${t.mainStart([12,12,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${1===d?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${1===d?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${rO(l,p,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${y&&c?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${c?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${n.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${y&&c?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${c?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`}}},rM=(t,r,i,a,n,s,o,u,l,d,p,c)=>{let h=Math.min(t.outputCount,1+(o?1:0)+(u?1:0)),f=h>1?d.pastSequenceLength:0,m=f+d.kvSequenceLength,g=l&&th.size(l.dims)>0?l:void 0,_=[r,i];h>1&&o&&th.size(o.dims)>0&&_.push(o),g&&_.push(g),p&&_.push(p),c&&_.push(c);let y=t.compute(rB(h,r,i,o,g,d,f,p,c),{inputs:_,outputs:h>1?[-1,1]:[-1]})[0];t.compute(rR(y,d.batchSize,d.numHeads,f,d.sequenceLength,m,p,c),{inputs:p&&c?[y,p,c]:[y],outputs:[]});let b=[y,a];h>1&&u&&th.size(u.dims)>0&&b.push(u),p&&b.push(p),c&&b.push(c),t.compute(rD(h,y,a,u,d,f,p,c),{inputs:b,outputs:h>1?[0,2]:[0]})},rN=(t,r)=>{let i=[r.batchSize,r.numHeads,r.sequenceLength,r.headSize],a=r.sequenceLength,n=r.inputHiddenSize,s=r.headSize,o={x:Math.ceil(r.headSize/12),y:Math.ceil(r.sequenceLength/12),z:r.batchSize*r.numHeads},u=[t.inputs[0],t.inputs[1],t.inputs[2]],l=[{type:12,data:a},{type:12,data:n},{type:12,data:s},{type:12,data:r.numHeads},{type:12,data:r.headSize},{type:12,data:r.hiddenSize},{type:12,data:r.hiddenSize+r.hiddenSize+r.vHiddenSize}];return t.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:i,dataType:t.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:t.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:t.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:l}),getShaderSource:t=>{let r=tC("output_q",u[0].dataType,i),a=tC("output_k",u[0].dataType,i),n=tC("output_v",u[0].dataType,i),s=tz("input",u[0].dataType,u[0].dims),o=tz("weight",u[1].dataType,u[1].dims),l=tz("bias",u[2].dataType,u[2].dims),d=s.type.storage;return`
  const TILE_SIZE = 12u;
  var<workgroup> tileInput: array<${d}, 144>;
  var<workgroup> tileWeightQ: array<${d}, 144>;
  var<workgroup> tileWeightK: array<${d}, 144>;
  var<workgroup> tileWeightV: array<${d}, 144>;
  ${t.registerUniforms([{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}]).declareVariables(s,o,l,r,a,n)}
  ${t.mainStart([12,12,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${d}(0);
    var valueK = ${d}(0);
    var valueV = ${d}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`}},{inputs:u,outputs:[-1,-1,-1]})},rP=(t,r)=>{let i=rA(t.inputs,r),[a,n,s]=rN(t,i);return rM(t,a,n,s,t.inputs[4],void 0,void 0,void 0,t.inputs[5],i)}}),o1=P(()=>{"use strict";eo(),oq(),oK(),oj(),oY(),rU=(t,r)=>{if(!t||5!==t.length)throw Error("BatchNormalization requires 5 inputs");let i=(t,r,i)=>{let a=r.length;if(a!==t.length)throw Error(`${i}: num dimensions != ${a}`);r.forEach((r,a)=>{if(r!==t[a])throw Error(`${i}: dim[${a}] do not match`)})};if(t[0].dims.length>1){let a="NHWC"===r.format?r.spatial?t[0].dims.slice(-1):t[0].dims.slice(-1).concat(t[0].dims.slice(1,t[0].dims.length-1)):t[0].dims.slice(1,r.spatial?2:void 0);i(t[1].dims,a,"Invalid input scale"),i(t[2].dims,a,"Invalid input B"),i(t[3].dims,a,"Invalid input mean"),i(t[4].dims,a,"Invalid input var")}else i(t[1].dims,[1],"Invalid input scale"),i(t[2].dims,[1],"Invalid input B"),i(t[3].dims,[1],"Invalid input mean"),i(t[4].dims,[1],"Invalid input var")},rW=(t,r)=>{let{epsilon:i,spatial:a,format:n}=r,s=t[0].dims,o=a?tx(s[s.length-1]):1,u="NHWC"===n&&s.length>1?o:1,l=th.size(s)/o,d=a?s.length:s,p=tz("x",t[0].dataType,t[0].dims,o),c=tz("scale",t[1].dataType,t[1].dims,u),h=tz("bias",t[2].dataType,t[2].dims,u),f=tz("inputMean",t[3].dataType,t[3].dims,u),m=tz("inputVar",t[4].dataType,t[4].dims,u),g=tC("y",t[0].dataType,d,o),_=()=>{let t="";if(a)t=`let cOffset = ${1===s.length?"0u":"NHWC"===n?`outputIndices[${s.length-1}] / ${o}`:"outputIndices[1]"};`;else if("NCHW"===n)t=`
            ${g.indicesSet("outputIndices","0","0")}
            let cOffset = ${g.indicesToOffset("outputIndices")};`;else{t=`var cIndices = ${c.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let r=1;r<c.rank;r++)t+=`cIndices[${r}] = outputIndices[${r}];`;t+=`let cOffset = ${c.indicesToOffset("cIndices")};`}return t};return{name:"BatchNormalization",shaderCache:{hint:`${r.epsilon}_${r.format}_${a}_${o}`,inputDependencies:a?["rank","type","type","type","type"]:void 0},getShaderSource:t=>`
  const epsilon = ${i};
  ${t.registerUniform("outputSize","u32").declareVariables(p,c,h,f,m,g)}
  ${t.mainStart()}
  ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${g.offsetToIndices(`global_idx * ${o}`)};
    ${_()}
    let scale = ${c.getByOffset("cOffset")};
    let bias = ${h.getByOffset("cOffset")};
    let inputMean = ${f.getByOffset("cOffset")};
    let inputVar = ${m.getByOffset("cOffset")};
    let x = ${p.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${g.setByOffset("global_idx","value")}
  }`,getRunData:()=>({outputs:[{dims:t[0].dims,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:a?[{type:12,data:l},...tw(s)]:[{type:12,data:l}]})}},rq=t=>td(t),rL=(t,r)=>{let{inputs:i,outputCount:a}=t,n=rq({...r,outputCount:a});if(d.webgpu.validateInputContent&&rU(i,n),r.trainingMode)throw Error("BatchNormalization trainingMode is not supported yet.");t.compute(rW(i,n))}}),o2=P(()=>{"use strict";oK(),oY(),rV=t=>{if(3!==t[0].dims.length)throw Error("input should have 3 dimensions");if(![320,640,1280].includes(t[0].dims[2]))throw Error("number of channels should be 320, 640 or 1280");if(1!==t[1].dims.length)throw Error("bias is expected to have 1 dimensions");if(t[0].dims[2]!==t[1].dims[0])throw Error("last dimension of input and bias are not the same")},rG=t=>{let r=t[0].dims,i=t[0].dims[2],a=th.size(r)/4,n=t[0].dataType,s=tz("input",n,r,4),o=tz("bias",n,[i],4),u=tz("residual",n,r,4),l=tC("output",n,r,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:r,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:t=>`
  const channels = ${i}u / 4;
  ${t.declareVariables(s,o,u,l)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let value = ${s.getByOffset("global_idx")}
      + ${o.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},rH=t=>{rV(t.inputs),t.compute(rG(t.inputs))}}),o3=P(()=>{"use strict";oq(),oK(),oj(),oY(),rF=(t,r,i,a,n,s,o)=>{let u=Math.ceil(r/4),l="";l="string"==typeof n?`${n}(a)`:n("a");let d=tz("inputData",i,[u],4),p=tC("outputData",a,[u],4),c=[{name:"vec_size",type:"u32"}];return o&&c.push(...o),`
      ${t.registerUniforms(c).declareVariables(d,p)}

  ${s??""}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${p.setByOffset("global_idx",l)}
  }`},rj=(t,r,i,a,n,s=t.dataType,o,u)=>{let l=[{type:12,data:Math.ceil(th.size(t.dims)/4)}];return o&&l.push(...o),{name:r,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:r=>rF(r,th.size(t.dims),t.dataType,s,i,a,u),getRunData:r=>({outputs:[{dims:t.dims,dataType:s}],dispatchGroup:{x:Math.ceil(th.size(r[0].dims)/64/4)},programUniforms:l})}},rK=t=>{t.compute(rj(t.inputs[0],"Abs","abs"))},rY=t=>{t.compute(rj(t.inputs[0],"Acos","acos"))},rQ=t=>{t.compute(rj(t.inputs[0],"Acosh","acosh"))},rZ=t=>{t.compute(rj(t.inputs[0],"Asin","asin"))},rX=t=>{t.compute(rj(t.inputs[0],"Asinh","asinh"))},rJ=t=>{t.compute(rj(t.inputs[0],"Atan","atan"))},r0=t=>{t.compute(rj(t.inputs[0],"Atanh","atanh"))},r1=t=>td(t),r2=(t,r)=>{let i;switch(r.to){case 10:i="vec4<f16>";break;case 1:i="vec4<f32>";break;case 12:i="vec4<u32>";break;case 6:i="vec4<i32>";break;case 9:i="vec4<bool>";break;default:throw RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${r.to}`)}t.compute(rj(t.inputs[0],"Cast",i,void 0,r.cacheKey,r.to))},r3=t=>{let r,i,a=t.length>=2&&0!==t[1].data,n=t.length>=3&&0!==t[2].data;switch(t[0].dataType){case 1:r=a?t[1].getFloat32Array()[0]:-34028234663852886e22,i=n?t[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:r=a?t[1].getUint16Array()[0]:64511,i=n?t[2].getUint16Array()[0]:31743;break;default:throw Error("Unsupport data type")}return td({min:r,max:i})},r4=(t,r)=>{let i=r||r3(t.inputs),a=tv(t.inputs[0].dataType);t.compute(rj(t.inputs[0],"Clip",t=>`clamp(${t}, vec4<${a}>(uniforms.min), vec4<${a}>(uniforms.max))`,void 0,i.cacheKey,void 0,[{type:t.inputs[0].dataType,data:i.min},{type:t.inputs[0].dataType,data:i.max}],[{name:"min",type:a},{name:"max",type:a}]),{inputs:[0]})},r6=t=>{t.compute(rj(t.inputs[0],"Ceil","ceil"))},r8=t=>{t.compute(rj(t.inputs[0],"Cos","cos"))},r5=t=>{t.compute(rj(t.inputs[0],"Cosh","cosh"))},r9=t=>td(t),r7=(t,r)=>{let i=tv(t.inputs[0].dataType);t.compute(rj(t.inputs[0],"Elu",t=>`elu_vf32(${t})`,`
  const elu_alpha_ = ${i}(${r.alpha});

  fn elu_f32(a: ${i}) -> ${i} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${i}>) -> vec4<${i}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,r.cacheKey))},ie=(t="f32")=>`
const r0: ${t} = 0.3275911;
const r1: ${t} = 0.254829592;
const r2: ${t} = -0.284496736;
const r3: ${t} = 1.421413741;
const r4: ${t} = -1.453152027;
const r5: ${t} = 1.061405429;

fn erf_vf32(v: vec4<${t}>) -> vec4<${t}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,it=t=>{let r=tv(t.inputs[0].dataType);t.compute(rj(t.inputs[0],"Erf",t=>`erf_vf32(${t})`,ie(r)))},ir=t=>{t.compute(rj(t.inputs[0],"Exp","exp"))},ii=t=>{t.compute(rj(t.inputs[0],"Floor","floor"))},ia=t=>{let r=tv(t.inputs[0].dataType);t.compute(rj(t.inputs[0],"Gelu",t=>`0.5 * ${t} * (1.0 + erf_vf32(${t} * 0.7071067811865475))`,ie(r)))},is=(t,r)=>{let i=tv(t.inputs[0].dataType);t.compute(rj(t.inputs[0],"LeakyRelu",t=>`select(leaky_relu_alpha_ * ${t}, ${t}, ${t} >= vec4<${i}>(0.0))`,`const leaky_relu_alpha_ = ${i}(${r.alpha});`,r.cacheKey))},io=t=>{t.compute(rj(t.inputs[0],"Not",t=>`!${t}`))},iu=t=>{t.compute(rj(t.inputs[0],"Neg",t=>`-${t}`))},il=t=>{t.compute(rj(t.inputs[0],"Reciprocal",t=>`1.0/${t}`))},id=t=>{let r=tv(t.inputs[0].dataType);t.compute(rj(t.inputs[0],"Relu",t=>`select(vec4<${r}>(0.0), ${t}, ${t} > vec4<${r}>(0.0))`))},ip=t=>{t.compute(rj(t.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},ic=t=>td(t),ih=(t,r)=>{let i=tv(t.inputs[0].dataType);t.compute(rj(t.inputs[0],"HardSigmoid",t=>`max(vec4<${i}>(0.0), min(vec4<${i}>(1.0), ${r.alpha} * ${t} + vec4<${i}>(${r.beta})))`,void 0,r.cacheKey))},im=t=>{t.compute(rj(t.inputs[0],"Sin","sin"))},ig=t=>{t.compute(rj(t.inputs[0],"Sinh","sinh"))},i_=t=>{t.compute(rj(t.inputs[0],"Sqrt","sqrt"))},iy=t=>{t.compute(rj(t.inputs[0],"Tan","tan"))},ib=t=>`sign(${t}) * (1 - exp(-2 * abs(${t}))) / (1 + exp(-2 * abs(${t})))`,i$=t=>{t.compute(rj(t.inputs[0],"Tanh",ib))},iv=(t="f32")=>`
const fast_gelu_a: ${t} = 0.5;
const fast_gelu_b: ${t} = 0.7978845608028654;
const fast_gelu_c: ${t} = 0.035677408136300125;

fn tanh_v(v: vec4<${t}>) -> vec4<${t}> {
  return ${ib("v")};
}
`,iw=t=>`(fast_gelu_a + fast_gelu_a * tanh_v(${t} * (fast_gelu_c * ${t} * ${t} + fast_gelu_b))) * ${t}`,ix=t=>{let r=tv(t.inputs[0].dataType);t.compute(rj(t.inputs[0],"FastGelu",iw,iv(r),void 0,t.inputs[0].dataType))},ik=(t,r)=>{let i=tv(t.inputs[0].dataType);return t.compute(rj(t.inputs[0],"ThresholdedRelu",t=>`select(vec4<${i}>(0.0), ${t}, ${t} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${i}>(${r.alpha});`,r.cacheKey)),0},iS=t=>{t.compute(rj(t.inputs[0],"Log","log"))},iT=(t,r)=>`
const alpha = vec4<${t}>(${r});
const one = ${t}(1.0);
const zero = ${t}(0.0);

fn quick_gelu_impl(x: vec4<${t}>) -> vec4<${t}> {
  let v = x *alpha;
  var x1 : vec4<${t}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,iI=t=>`quick_gelu_impl(${t})`,iE=(t,r)=>{let i=tv(t.inputs[0].dataType);t.compute(rj(t.inputs[0],"QuickGelu",iI,iT(i,r.alpha),r.cacheKey,t.inputs[0].dataType))}}),o4=P(()=>{"use strict";oK(),oY(),o3(),iz=t=>{if(3!==t[0].dims.length)throw Error("input should have 3 dimensions");if(![2560,5120,10240].includes(t[0].dims[2]))throw Error("hidden state should be 2560, 5120 or 10240");if(1!==t[1].dims.length)throw Error("bias is expected to have 1 dimensions");if(t[0].dims[2]!==t[1].dims[0])throw Error("last dimension of input and bias are not the same")},iC=t=>{let r=t[0].dims.slice();r[2]=r[2]/2;let i=tz("input",t[0].dataType,t[0].dims,4),a=tz("bias",t[0].dataType,[t[0].dims[2]],4),n=tC("output",t[0].dataType,r,4),s=th.size(r)/4,o=t$(t[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:r,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:r=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${t[0].dims[2]/4/2}u;

  ${r.declareVariables(i,a,n)}

  ${ie(o)}

  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},iA=t=>{iz(t.inputs),t.compute(iC(t.inputs))}}),o6=P(()=>{"use strict";oq(),oK(),oY(),iO=(t,r,i,a,n,s,o,u,l,d,p,c)=>{let h,f;"string"==typeof u?h=f=(t,r)=>`${u}((${t}),(${r}))`:"function"==typeof u?h=f=u:(h=u.scalar,f=u.vector);let m=tC("outputData",p,a.length,4),g=tz("aData",l,r.length,4),_=tz("bData",d,i.length,4),y;if(n){if(s){let t=1===th.size(r),a=1===th.size(i),n=r.length>0&&r[r.length-1]%4==0,s=i.length>0&&i[i.length-1]%4==0;y=t||a?m.setByOffset("global_idx",f(t?`${g.type.value}(${g.getByOffset("0")}.x)`:g.getByOffset("global_idx"),a?`${_.type.value}(${_.getByOffset("0")}.x)`:_.getByOffset("global_idx"))):`
            let outputIndices = ${m.offsetToIndices("global_idx * 4u")};
            let offsetA = ${g.broadcastedIndicesToOffset("outputIndices",m)};
            let offsetB = ${_.broadcastedIndicesToOffset("outputIndices",m)};
            ${m.setByOffset("global_idx",f(o||n?g.getByOffset("offsetA / 4u"):`${g.type.value}(${g.getByOffset("offsetA / 4u")}[offsetA % 4u])`,o||s?_.getByOffset("offsetB / 4u"):`${_.type.value}(${_.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else y=m.setByOffset("global_idx",f(g.getByOffset("global_idx"),_.getByOffset("global_idx")))}else{if(!s)throw Error("no necessary to use scalar implementation for element-wise binary op implementation.");let t=(t,r,i="")=>{let a=`aData[indexA${r}][componentA${r}]`,n=`bData[indexB${r}][componentB${r}]`;return`
            let outputIndices${r} = ${m.offsetToIndices(`global_idx * 4u + ${r}u`)};
            let offsetA${r} = ${g.broadcastedIndicesToOffset(`outputIndices${r}`,m)};
            let offsetB${r} = ${_.broadcastedIndicesToOffset(`outputIndices${r}`,m)};
            let indexA${r} = offsetA${r} / 4u;
            let indexB${r} = offsetB${r} / 4u;
            let componentA${r} = offsetA${r} % 4u;
            let componentB${r} = offsetB${r} % 4u;
            ${t}[${r}] = ${i}(${h(a,n)});
          `};y=9===p?`
            var data = vec4<u32>(0);
            ${t("data",0,"u32")}
            ${t("data",1,"u32")}
            ${t("data",2,"u32")}
            ${t("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${t("outputData[global_idx]",0)}
            ${t("outputData[global_idx]",1)}
            ${t("outputData[global_idx]",2)}
            ${t("outputData[global_idx]",3)}
          `}return`
        ${t.registerUniform("vec_size","u32").declareVariables(g,_,m)}

        ${c??""}

        ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${y}
      }`},iR=(t,r,i,a,n,s,o=i.dataType)=>{let u=i.dims.map(t=>Number(t)??1),l=a.dims.map(t=>Number(t)??1),d=!th.areEqual(u,l),p=u,c=th.size(u),h=!1,f=!1,m=[d];if(d){let t=tc.calcShape(u,l,!1);if(!t)throw Error("Can't perform binary op on the given tensors");p=t.slice(),c=th.size(p);let r=1===th.size(u),i=1===th.size(l),a=u.length>0&&u[u.length-1]%4==0,n=l.length>0&&l[l.length-1]%4==0;m.push(r),m.push(i),m.push(a),m.push(n);let s=1;for(let t=1;t<p.length;t++){let r=u[u.length-t];if(r===l[l.length-t])s*=r;else break}s%4==0?(f=!0,h=!0):(r||i||a||n)&&(h=!0)}else h=!0;return m.push(h),{name:t,shaderCache:{hint:r+m.map(t=>t.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:t=>iO(t,u,l,p,h,d,f,n,i.dataType,a.dataType,o,s),getRunData:()=>({outputs:[{dims:p,dataType:o}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:Math.ceil(th.size(p)/4)},...tw(u,l,p)]})}},iB=(t,r,i,a,n,s)=>{t.compute(iR(r,n??"",t.inputs[0],t.inputs[1],i,a,s))},iD=t=>{iB(t,"Add",(t,r)=>`${t}+${r}`)},iM=t=>{iB(t,"Div",(t,r)=>`${t}/${r}`)},iN=t=>{iB(t,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},iP=t=>{iB(t,"Mul",(t,r)=>`${t}*${r}`)},iU=t=>{let r=tz("input",t.inputs[0].dataType,t.inputs[0].dims).type.value;iB(t,"Pow",{scalar:(t,r)=>`pow_custom(${t},${r})`,vector:(t,r)=>`pow_vector_custom(${t},${r})`},`
    fn pow_custom(a : ${r}, b : ${r}) -> ${r} {
      if (b == ${r}(0.0)) {
        return ${r}(1.0);
      } else if (a < ${r}(0.0) && f32(b) != floor(f32(b))) {
        return ${r}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${r}(1.0), round(f32(abs(b) % ${r}(2.0))) != 1.0) * ${r}(${"i32"===r?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${r}>, b : vec4<${r}>) -> vec4<${r}> {
      // TODO: implement vectorized pow
      return vec4<${r}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},iW=t=>{iB(t,"Sub",(t,r)=>`${t}-${r}`)},iq=t=>{iB(t,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},iL=t=>{iB(t,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},iV=t=>{iB(t,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},iG=t=>{iB(t,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),o8=P(()=>{"use strict";oq(),oK(),oj(),oY(),iH=(t,r)=>{if(!t||t.length<1)throw Error("too few inputs");let i=t[0],a=i.dataType,n=i.dims.length;t.forEach((t,s)=>{if(0!==s){if(t.dataType!==a)throw Error("input tensors should be one type");if(t.dims.length!==n)throw Error("input tensors should have the same shape");t.dims.forEach((t,a)=>{if(a!==r&&t!==i.dims[a])throw Error("non concat dimensions must match")})}})},iF=(t,r)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${t}u>(${r});
    for (var i: u32 = 0u; i < ${t}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${t}u;
  }`,ij=(t,r)=>{let i=t.length,a=[];for(let n=0;n<i;++n){let s=r.setByOffset("global_idx",t[n].getByIndices("indices"));1===i?a.push(s):0===n?a.push(`if (inputIndex == ${n}u) { ${s} }`):n===i-1?a.push(`else { ${s} }`):a.push(`else if (inputIndex == ${n}) { ${s} }`)}return a.join(`
`)},iK=(t,r,i,a)=>{let n=th.size(i),s=Array(t.length),o=Array(t.length),u=0,l=[],d=[],p=[{type:12,data:n}];for(let i=0;i<t.length;++i)u+=t[i].dims[r],s[i]=u,d.push(t[i].dims.length),o[i]=tz(`input${i}`,a,d[i]),l.push("rank"),p.push({type:12,data:s[i]});for(let r=0;r<t.length;++r)p.push(...tw(t[r].dims));p.push(...tw(i));let c=tC("output",a,i.length),h=c.indicesGet("indices",r),f=Array.from(Array(s.length).keys()).map(t=>`uniforms.sizeInConcatAxis${t}`).join(",");return{name:"Concat",shaderCache:{hint:`${r}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:i,dataType:a}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:p}),getShaderSource:r=>`

  ${(()=>{r.registerUniform("outputSize","u32");for(let i=0;i<t.length;i++)r.registerUniform(`sizeInConcatAxis${i}`,"u32");return r.declareVariables(...o,c)})()}

  ${iF(s.length,f)}

  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${c.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${h});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${f});
      ${h} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${ij(o,c)}
  }`}},iY=(t,r)=>{let i=t.inputs,a=i[0].dims,n=th.normalizeAxis(r.axis,a.length);iH(i,n);let s=a.slice();s[n]=i.reduce((t,r)=>t+(r.dims.length>n?r.dims[n]:0),0);let o=i.filter(t=>th.size(t.dims)>0);t.compute(iK(o,n,s,i[0].dataType),{inputs:o})},iQ=t=>td({axis:t.axis})}),o5=P(()=>{"use strict";oq(),oK(),iZ=(t,r,i="f32")=>{switch(t.activation){case"Relu":return`value = max(value, ${r}(0.0));`;case"Sigmoid":return`value = (${r}(1.0) / (${r}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${r}(${i}(uniforms.clip_min)), ${r}(${i}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${r}(0.0), min(${r}(1.0), ${i}(uniforms.alpha) * value + ${i}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${i}(uniforms.alpha) * value, value, value >= ${r}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw Error(`Unsupported activation ${t.activation}`)}},iX=(t,r)=>{"Clip"===t.activation?r.push({type:1,data:t.clipMax},{type:1,data:t.clipMin}):"HardSigmoid"===t.activation?r.push({type:1,data:t.alpha},{type:1,data:t.beta}):"LeakyRelu"===t.activation&&r.push({type:1,data:t.alpha})},iJ=(t,r)=>{"Clip"===t.activation?r.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):"HardSigmoid"===t.activation?r.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):"LeakyRelu"===t.activation&&r.push({name:"alpha",type:"f32"})},i0=t=>{let r=t?.activation||"";if("HardSigmoid"===r){let[i,a]=t?.activation_params||[.2,.5];return{activation:r,alpha:i,beta:a}}if("Clip"===r){let[i,a]=t?.activation_params||[tg,t_];return{activation:r,clipMax:a,clipMin:i}}if("LeakyRelu"===r){let[i]=t?.activation_params||[.01];return{activation:r,alpha:i}}return{activation:r}}}),o9=P(()=>{"use strict";i1=(t,r)=>{switch(t){case 1:return r;case 2:return`vec2<${r}>`;case 3:return`vec3<${r}>`;case 4:return`vec4<${r}>`;default:throw Error(`${t}-component is not supported.`)}},i2=t=>`
      ${t?"value = value + getBiasByOutputCoords(coords);":""}
      `}),o7=P(()=>{"use strict";i3=t=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${t}.x), i32(${t}.y), i32(${t}.z), 1));
}
`}),ue=P(()=>{"use strict";oq(),oK(),oY(),o5(),i4=(t,r,i,a,n)=>{let s=a-i;return`
      ${Array.from({length:i}).map((i,o)=>`
      if (${tI(r.shape,o,r.rank)} != 1) {
        ${r.indicesSet(t,o,tI(n,o+s,a))}
      } else {
        ${r.indicesSet(t,o,0)}
      }`).join("")}
`},i6=(t,r,i,a,n=!1,s)=>{let o=t[0].dims,u=t[1].dims,l=o[o.length-2],d=u[u.length-1],p=o[o.length-1],c=tx(d),h=tx(p),f=tx(l),m=th.size(i)/c/f,g=t.length>2,_=a?a.slice(0,-2):i.slice(0,-2),y=[th.size(_),l,d],b=[{type:12,data:m},{type:12,data:l},{type:12,data:d},{type:12,data:p}];return iX(r,b),b.push(...tw(_,o,u)),g&&b.push(...tw(t[2].dims)),b.push(...tw(y)),{name:"MatMulNaive",shaderCache:{hint:`${r.activation};${c};${h};${f};${n}`,inputDependencies:g?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(i):i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:b}),getShaderSource:a=>{let s=tO("batch_dims",t[0].dataType,_.length),l=tz("a",t[0].dataType,o.length,h),d=tz("b",t[1].dataType,u.length,c),p=tC("output",t[0].dataType,y.length,c),m=t$(p.type.tensor),b=iZ(r,p.type.value,m),$=[l,d],v="";if(g){let r=n?c:1;$.push(tz("bias",t[2].dataType,t[2].dims.length,r)),v=`${n?`value += bias[col / ${r}];`:`value += ${p.type.value}(bias[row + i]);`}`}let w=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];return iJ(r,w),`
  ${a.registerUniforms(w).registerInternalVariables(s).declareVariables(...$,p)}
  ${a.mainStart()}
    ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${c})) * ${c};
    var index1 = global_idx / (uniforms.N / ${c});
    let stride1 = uniforms.M / ${f};
    let row = (index1 % stride1) * ${f};
    let batch = index1 / stride1;

    ${2===i.length?"":`let batch_indices = ${s.offsetToIndices("batch")};`}

    var a_indices: ${l.type.indices};
    ${i4("a_indices",l,l.rank-2,s.rank,"batch_indices")}
    ${l.indicesSet("a_indices",l.rank-2,0)}
    ${l.indicesSet("a_indices",l.rank-1,0)}
    let a_offset = ${l.indicesToOffset("a_indices")};

    var b_indices: ${d.type.indices};
    ${i4("b_indices",d,d.rank-2,s.rank,"batch_indices")}
    ${d.indicesSet("b_indices",d.rank-2,0)}
    ${d.indicesSet("b_indices",d.rank-1,0)}
    let b_offset = ${d.indicesToOffset("b_indices")};
    var values: array<${p.type.value}, ${f}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${(()=>{let t=`var a_data: ${l.type.value};`;for(let r=0;r<h;r++)t+=`
              let b_data${r} = b[(b_offset + (k + ${r}) * uniforms.N + col) / ${c}];`;for(let r=0;r<f;r++){t+=`a_data = a[(a_offset + (row + ${r}) * uniforms.K + k) / ${h}];`;for(let i=0;i<h;i++)t+=`
            values[${r}] = fma(${d.type.value}(a_data${1===h?"":`[${i}]`}), b_data${i}, values[${r}]);
`}return t})()}
    }
    for (var i = 0u; i < ${f}u; i++) {
      var value = values[i];
      ${v}
      ${b}
      let cur_indices = ${p.type.indices}(batch, row + i, col);
      let offset = ${p.indicesToOffset("cur_indices")};
      ${p.setByOffset(`offset / ${c}`,"value")};
    }
  }
  `}}}}),ut=P(()=>{"use strict";oq(),oK(),oY(),o5(),ue(),o9(),i8=(t,r)=>t?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${r?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${r?", batchIndices":""});
        `,i5=(t,r)=>t?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${3===r?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${3===r?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${3===r?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,i9=(t,r,i="f32",a,n=!1,s=32,o=!1,u=32)=>{let l=r[1]*t[1],d=r[0]*t[0],p=n?l:s,c=n?s:l,h=p/r[0],f=s/r[1];if(!((n&&4===h&&4===t[1]||!n&&(3===h||4===h))&&p%r[0]==0&&s%r[1]==0&&4===t[0]))throw Error(`If transposeA ${n} is true, innerElementSize ${h} and workPerThread[1] ${t[1]} must be 4.
      Otherwise, innerElementSize ${h} must be 3 or 4.
  tileAWidth ${p} must be divisible by workgroupSize[0]${r[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${r[1]}. colPerThread ${t[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${h}<${i}>, ${p/h}>, ${c}>;
var<workgroup> mm_Bsub: array<array<vec4<${i}>, ${d/t[0]}>, ${s}>;

const rowPerThread = ${t[1]};
const colPerThread = ${t[0]};
const innerElementSize = ${h};
const tileInner = ${s};

@compute @workgroup_size(${r[0]}, ${r[1]}, ${r[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${o?"0":"i32(globalId.z)"};
  ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${o?`${Math.ceil(u/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${o?`i32(globalId.z) * ${u}`:"0"};

  var acc: array<vec4<${i}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${f};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${i8(n,a)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${f}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${a?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${3===h?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${i5(n,h)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},i7=(t,r)=>t?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${r?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${r?", batchIndices":""});
            `,ae=t=>t?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",at=(t,r,i="f32",a,n=!1,s=32,o=!1,u=32,l=!1)=>{let d=t[1]*r[1],p=t[0]*r[0],c=n?d:s,h=n?s:d;if(!(h%r[1]==0&&c%r[0]==0&&s%r[1]==0))throw Error(`tileAHight ${h} must be divisible by workgroupSize[1]${r[1]}, tileAWidth ${c} must be divisible by workgroupSize[0]${r[0]}, tileInner ${s} must be divisible by workgroupSize[1]${r[1]}`);let f=h/r[1],m=c/r[0],g=s/r[1],_=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${p};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${r[1]}) {
        for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${r[0]}) {
          ${i7(n,a)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${r[1]}) {
            for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${r[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${a?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${i}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${r[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${r[1]}];`:`mm_Asub[localRow + innerRow * ${r[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${r[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${r[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${f};
let tileColA = i32(localId.x) * ${m};
let tileRowB = i32(localId.y) * ${g};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${f}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${m}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${i7(n,a)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${a?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${i}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${ae(n)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${i}, ${c}>, ${h}>;
  var<workgroup> mm_Bsub : array<array<${i}, ${p}>, ${s}>;
  const rowPerThread = ${t[1]};
  const colPerThread = ${t[0]};
  const tileInner = ${s};

@compute @workgroup_size(${r[0]}, ${r[1]}, ${r[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${o?"0":"i32(globalId.z)"};
    ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${o?`${Math.ceil(u/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${o?`i32(globalId.z) * ${u}`:"0"};

    var acc : array<array<${i}, colPerThread>, rowPerThread>;
    ${_}
  }
`},ar=(t,r,i,a,n=!1)=>{let[s,o,u,l]=a,d=t$(a[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${i1(t,d)} {
      var value = ${i1(t,d)}(0.0);
      let col = colIn * ${t};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${i4("aIndices",o,o.rank-2,s.rank,"batchIndices")}
        ${o.indicesSet("aIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("aIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${i1(t,d)} {
      var value = ${i1(t,d)}(0.0);
      let col = colIn * ${t};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${u.type.indices};
        ${i4("bIndices",u,u.rank-2,s.rank,"batchIndices")}
        ${u.indicesSet("bIndices",u.rank-2,"u32(row)")}
        ${u.indicesSet("bIndices",u.rank-1,"u32(colIn)")}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${i1(t,d)}) {
      let col = colIn * ${t};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${r?`value = value + ${n?"bias[colIn]":`${i1(t,d)}(bias[row])`};`:""}
        ${i}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},ai=(t,r,i,a,n=!1,s)=>{let o=t[0].dims,u=t[1].dims,l=o.slice(0,-2),d=u.slice(0,-2),p=a?a.slice(0,-2):i.slice(0,-2),c=th.size(p),h=o[o.length-2],f=o[o.length-1],m=u[u.length-1],g=f%4==0&&m%4==0,_=h<=8?[4,1,1]:[4,4,1],y=[8,8,1],b=[Math.ceil(m/y[0]/_[0]),Math.ceil(h/y[1]/_[1]),Math.ceil(c/y[2]/_[2])],$=g?4:1,v=[...l,h,f/$],w=v.length,x=[...d,f,m/$],k=x.length,S=[c,h,m/$],T=[{type:6,data:h},{type:6,data:m},{type:6,data:f}];iX(r,T),T.push(...tw(p,v,x));let I=["rank","rank"],E=t.length>2;return E&&(T.push(...tw(t[2].dims)),I.push("rank")),T.push(...tw(S)),{name:"MatMul",shaderCache:{hint:`${_};${r.activation};${g};${n}`,inputDependencies:I},getRunData:()=>({outputs:[{dims:s?s(i):i,dataType:t[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:T}),getShaderSource:i=>{let a=p.length,s=tO("batchDims",t[0].dataType,a,1),o=t$(t[0].dataType),u=tz("a",t[0].dataType,w,$),l=tz("b",t[1].dataType,k,$),d=tC("result",t[0].dataType,S.length,$),c=[u,l];if(E){let r=n?$:1;c.push(tz("bias",t[2].dataType,t[2].dims.length,r))}let h=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];iJ(r,h);let f=t$(d.type.tensor),m=ar($,E,iZ(r,d.type.value,f),[s,u,l,d],n);return`
  ${i.registerUniforms(h).registerInternalVariables(s).declareVariables(...c,d)}
  ${m}
  ${g?i9(_,y,o,s):at(_,y,o,s)}
                   `}}}}),ur=P(()=>{"use strict";oq(),oV(),oY(),o5(),o9(),o7(),ut(),aa=(t,r,i,a,n=!1,s,o=4,u=4,l=4,d="f32")=>{let p=t=>{switch(t){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw Error(`innerElementSize ${t} is not supported.`)}},c=t?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,h=t?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,f=t?"row":"col",m=t?"col":"row",g=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${t?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${f} / outWidth;
    let outCol = ${f} % outWidth;

    let WRow = ${m} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${m} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${m} % inChannels;
    var resData = ${i1(o,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${t?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])"} && xCol >= 0 && xCol < ${t?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])"}) {
      ${c}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${(t=>{switch(t){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw Error(`innerElementSize ${t} is not supported.`)}})(o)}
    }
    return resData;`,_=t?r&&a?`
    let col = colIn * ${o};
    ${g}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${g}
    }
    return ${i1(o,d)}(0.0);`:a&&i?`
    let col = colIn * ${o};
    ${g}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${g}
    }
    return ${i1(o,d)}(0.0);`,y=t?a&&i?p(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${p(u)}
    }
    return ${i1(u,d)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${p(u)}
    }
    return ${i1(u,d)}(0.0);`,b=i1(l,d),$=t?i1(o,d):i1(u,d),v=t?i1(u,d):i1(o,d),w=iZ(s,b,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${$} {
      ${t?_:y}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${v} {
      ${t?y:_}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${b}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${t?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${h}
      ${i2(n)}
      ${w}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},an=(t,r,i,a,n,s,o,u,l)=>{let d="NHWC"===r.format,p=d?t[0].dims[3]:t[0].dims[1],c=i[0],h=d?i[2]:i[3],f=d?i[1]:i[2],m=d?i[3]:i[1],g=d&&(p%4==0||p%3==0)&&m%4==0,_=d?m:h*f,y=d?h*f:m,b=[8,8,1],$=a<=8?[4,1,1]:[4,4,1],v=[Math.ceil(_/b[0]/$[0]),Math.ceil(y/b[1]/$[1]),Math.ceil(c/b[2]/$[2])];e9("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${v}`);let w=g?d&&p%4!=0?3:4:1,x=b[1]*$[1],k=b[0]*$[0],S=Math.max(b[0]*w,b[1]),T=a%x==0,I=n%k==0,E=s%S==0,z=g?[w,4,4]:[1,1,1],C=[{type:6,data:a},{type:6,data:n},{type:6,data:s},{type:6,data:[r.pads[0],r.pads[1]]},{type:6,data:r.strides},{type:6,data:r.dilations}];iX(r,C),C.push(...tw(t[0].dims,t[1].dims));let A=["rank","rank"];return o&&(C.push(...tw(t[2].dims)),A.push("rank")),C.push(...tw(i)),{name:"Conv2DMatMul",shaderCache:{hint:`${r.cacheKey};${w};${g};${T};${I};${E};${x};${k};${S}`,inputDependencies:A},getRunData:()=>({outputs:[{dims:l?l(i):i,dataType:t[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:C}),getShaderSource:a=>{let n=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];iJ(r,n);let s=g?4:1,l=t$(t[0].dataType),p=`
      fn setOutputAtIndex(flatIndex : i32, value : ${g?`vec4<${l}>`:l}) {
        result[flatIndex] = ${g?`vec4<${l}>`:l}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${g?`vec4<${l}>`:l}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${g?"/ 4":""}, value);
      }`,c=[tz("x",t[0].dataType,t[0].dims.length,3===w?1:w),tz("w",t[1].dataType,t[1].dims.length,s)],h=tC("result",t[0].dataType,i.length,s);if(o){let r=tz("bias",t[2].dataType,t[2].dims.length,s);c.push(r),p+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${g?`vec4<${l}>`:l} {
          return bias[coords.${d?"w":"y"}${g?"/ 4":""}];
        }`}return`
        ${i3("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${a.registerUniforms(n).declareVariables(...c,h)}
        ${p}
        ${aa(d,T,I,E,o,r,z[0],z[1],z[2],l)}
        ${g?i9($,b,l,void 0,!d,S):at($,b,l,void 0,!d,S,!1,void 0,u)}`}}}}),ui=P(()=>{"use strict";oq(),oV(),oK(),oY(),o5(),o9(),as=t=>{let r=1;for(let i=0;i<t.length;i++)r*=t[i];return r},ao=t=>"number"==typeof t?[t,t,t]:t,au=(t,r)=>r<=1?t:t+(t-1)*(r-1),al=(t,r,i,a=1)=>{let n=au(r,a);return Math.floor((t[0]*(i-1)-i+n)/2)},ad=(t,r,i,a,n)=>{null==n&&(n=al(t,r[0],a[0]));let s=[0,0,0,i];for(let i=0;i<3;i++)t[i]+2*n>=r[i]&&(s[i]=Math.trunc((t[i]-r[i]+2*n)/a[i]+1));return s},ap=(t,r,i,a,n,s,o,u,l,d)=>{let p,c,h,f;if("VALID"===t&&(t=0),"number"==typeof t){p={top:t,bottom:t,left:t,right:t,front:t,back:t};let m=ad([r,i,a,1],[u,l,d],1,[n,s,o],t);c=m[0],h=m[1],f=m[2]}else if(Array.isArray(t)){if(!t.every((t,r,i)=>t===i[0]))throw Error(`Unsupported padding parameter: ${t}`);p={top:t[0],bottom:t[1],left:t[2],right:t[3],front:t[4],back:t[5]};let m=ad([r,i,a,1],[u,l,d],1,[n,s,o],t[0]);c=m[0],h=m[1],f=m[2]}else if("SAME_UPPER"===t){c=Math.ceil(r/n),h=Math.ceil(i/s),f=Math.ceil(a/o);let t=(c-1)*n+u-r,m=(h-1)*s+l-i,g=(f-1)*o+d-a,_=Math.floor(t/2),y=Math.floor(m/2),b=Math.floor(g/2);p={top:y,bottom:m-y,left:b,right:g-b,front:_,back:t-_}}else throw Error(`Unknown padding parameter: ${t}`);return{padInfo:p,outDepth:c,outHeight:h,outWidth:f}},ac=(t,r,i,a,n,s=!1,o="channelsLast")=>{let u,l,d,p,c;if("channelsLast"===o)[u,l,d,p,c]=t;else if("channelsFirst"===o)[u,c,l,d,p]=t;else throw Error(`Unknown dataFormat ${o}`);let[h,,f,m,g]=r,[_,y,b]=ao(i),[$,v,w]=ao(a),x=au(f,$),k=au(m,v),S=au(g,w),{padInfo:T,outDepth:I,outHeight:E,outWidth:z}=ap(n,l,d,p,_,y,b,x,k,S),C=s?h*c:h,A=[0,0,0,0,0];return"channelsFirst"===o?A=[u,C,I,E,z]:"channelsLast"===o&&(A=[u,I,E,z,C]),{batchSize:u,dataFormat:o,inDepth:l,inHeight:d,inWidth:p,inChannels:c,outDepth:I,outHeight:E,outWidth:z,outChannels:C,padInfo:T,strideDepth:_,strideHeight:y,strideWidth:b,filterDepth:f,filterHeight:m,filterWidth:g,effectiveFilterDepth:x,effectiveFilterHeight:k,effectiveFilterWidth:S,dilationDepth:$,dilationHeight:v,dilationWidth:w,inShape:t,outShape:A,filterShape:r}},ah=(t,r,i,a,n,s)=>{let o="channelsLast"===s,u=(o?t[0].dims[3]:t[0].dims[1],[Math.ceil(as(({x:i.map((t,r)=>r)}).x.map(t=>i[t]))/64),1,1]);e9("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${u}`);let l=[{type:12,data:th.size(i)},{type:12,data:a},{type:12,data:n},{type:12,data:r.strides},{type:12,data:r.dilations}];iX(r,l),l.push(...tw(t[0].dims,t[1].dims));let d=["rank","rank"],p=3===t.length;return p&&(l.push(...tw(t[2].dims)),d.push("rank")),l.push(...tw(i)),{name:"Conv3DNaive",shaderCache:{hint:`${r.cacheKey};${o};1;${p}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:u[0],y:u[1],z:u[2]},programUniforms:l}),getShaderSource:s=>{let u=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:a.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:r.strides.length},{name:"dilations",type:"u32",length:r.dilations.length}];iJ(r,u);let l=t$(t[0].dataType),d=tz("x",t[0].dataType,t[0].dims.length,1),c=tz("W",t[1].dataType,t[1].dims.length,1),h=[d,c],f=tC("result",t[0].dataType,i.length,1),m="";if(p){let r=tz("bias",t[2].dataType,t[2].dims.length,1);h.push(r),m+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${l} {
          return bias[${o?tI("coords",4,5):tI("coords",1,5)}];
        }`}let g=i1(1,l),_=iZ(r,g,l);return`
            ${m}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${d.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${c.getByIndices("aIndices")};
            }
          ${s.registerUniforms(u).declareVariables(...h,f)}
          ${s.mainStart()}
          ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${f.offsetToIndices("global_idx")};
              let batch = ${tI("coords",0,d.rank)};
              let d2 = ${o?tI("coords",d.rank-1,d.rank):tI("coords",1,d.rank)};
              let xFRCCorner = vec3<u32>(${o?tI("coords",1,d.rank):tI("coords",2,d.rank)},
              ${o?tI("coords",2,d.rank):tI("coords",3,d.rank)},
              ${o?tI("coords",3,d.rank):tI("coords",4,d.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?tI("uniforms.x_shape",1,d.rank):tI("uniforms.x_shape",2,d.rank)};
              let xShapeZ = ${o?tI("uniforms.x_shape",2,d.rank):tI("uniforms.x_shape",3,d.rank)};
              let xShapeW = ${o?tI("uniforms.x_shape",3,d.rank):tI("uniforms.x_shape",4,d.rank)};
              let xShapeU = ${o?tI("uniforms.x_shape",4,d.rank):tI("uniforms.x_shape",1,d.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${o?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${o?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${o?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${o?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${p?"value = value + getBiasByOutputCoords(coords)":""};
              ${_}
              result[global_idx] = f32(value);
          }`}}}}),ua=P(()=>{"use strict";oq(),oK(),oY(),o5(),af=(t,r,i,a)=>{let n=t.length>2,s=n?"value += b[output_channel];":"",o=t[0].dims,u=t[1].dims,l="NHWC"===r.format,d=l?i[3]:i[1],p=d/r.group,c=l&&p>=4?tx(d):1,h=th.size(i)/c,f=[{type:12,data:h},{type:12,data:r.dilations},{type:12,data:[r.strides[0],r.strides[1]]},{type:12,data:[r.pads[0],r.pads[1]]},{type:12,data:p}];return iX(r,f),f.push(...tw(o,[u[0],u[1],u[2],u[3]/c])),f.push(...tw([i[0],i[1],i[2],i[3]/c])),{name:"GroupedConv",shaderCache:{hint:`${r.cacheKey}_${c}`,inputDependencies:n?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(i):i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:f}),getShaderSource:a=>{let d=tC("output",t[0].dataType,i.length,c),p=t$(d.type.tensor),h=iZ(r,d.type.value,p),f=tz("x",t[0].dataType,o.length),m=tz("w",t[1].dataType,u.length,c),g=[f,m];n&&g.push(tz("b",t[2].dataType,t[2].dims,c));let _=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:r.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];iJ(r,_);let y=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${f.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${m.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${f.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${m.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${a.registerUniforms(_).declareVariables(...g,d)}

  ${a.mainStart()}
    ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${d.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${c} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${d.type.value} = ${d.type.value}(0);
    ${y}
    ${s}
    ${h}
    ${d.setByOffset("global_idx","value")}
  }`}}},am=(t,r,i,a)=>{let n=t.length>2,s=tx(i[3]),o=tx(i[2]),u=th.size(i)/s/o,l=[t[0].dims[0],t[0].dims[1],t[0].dims[2],t[0].dims[3]/s],d=[t[1].dims[0],t[1].dims[1],t[1].dims[2],t[1].dims[3]/s],p=[i[0],i[1],i[2],i[3]/s],c=[{type:12,data:u},{type:6,data:[r.strides[0],r.strides[1]]},{type:6,data:[r.pads[0],r.pads[1]]}];iX(r,c),c.push(...tw(l,d,p));let h=(o-1)*r.strides[1]+d[1];return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${r.cacheKey};${s};${o};${h};${d[0]};${d[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(i):i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:c}),getShaderSource:i=>{let a=tC("output",t[0].dataType,p.length,s),u=t$(a.type.tensor),c=iZ(r,a.type.value,u),f=tz("x",t[0].dataType,l.length,s),m=tz("w",t[1].dataType,d.length,s),g=[f,m];n&&g.push(tz("b",t[2].dataType,t[2].dims,s));let _=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return iJ(r,_),`
  ${i.registerUniforms(_).declareVariables(...g,a)}
  ${i.mainStart()}
    ${i.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${o}u;
    let col = (index1 % width1) * ${o}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${f.type.value}, ${h}>;
    var values: array<${a.type.value}, ${o}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${h}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${f.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${f.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${m.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${o}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${o}u; i++) {
      var value = values[i];
      ${n?"value += b[output_channel];":""}
      ${c}
      ${a.set("batch","row","col + i","output_channel","value")};
    }
  }`}}}}),un=P(()=>{"use strict";oK(),ur(),ui(),ut(),ua(),o5(),ue(),oQ(),ag=(t,r,i,a,n,s)=>{let o=t[0],u=t.slice(s?1:2,s?3:4),l=u.length,d=r[0],p=r.slice(2).map((t,r)=>t+(t-1)*(i[r]-1)),c=u.map((t,r)=>t+a[r]+a[r+l]).map((t,r)=>Math.floor((t-p[r]+n[r])/n[r]));return c.splice(0,0,o),c.splice(s?3:1,0,d),c},a_=[2,3,1,0],ay=(t,r)=>{if(!t||2!==t.length&&3!==t.length)throw Error("Conv requires 2 or 3 inputs");if(t[0].dims.length>5)throw Error("greater than 5D is not supported");if(t[0].dims.length!==t[1].dims.length)throw Error("filter does not have same dimension as input");if(t[0].dims["NHWC"===r.format?t[0].dims.length-1:1]!==t[1].dims[1]*r.group)throw Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(3===t.length&&(1!==t[2].dims.length||t[1].dims[0]!==t[2].dims[0]))throw Error("invalid bias");let i=t[0].dims.length-2;if(r.dilations.length!==i)throw Error(`dilations should be ${i}D`);if(r.strides.length!==i)throw Error(`strides should be ${i}D`);if(r.pads.length!==2*i)throw Error(`pads should be ${2*i}D`);if(0!==r.kernelShape.length&&r.kernelShape.length!==t[1].dims.length-2)throw Error("invalid kernel shape")},ab=(t,r)=>{let i=t.kernelShape.slice();i.length<r[1].dims.length-2&&i.push(...Array(r[1].dims.length-2-i.length).fill(0));for(let t=2;t<r[1].dims.length;++t)0===i[t-2]&&(i[t-2]=r[1].dims[t]);let a=t.pads.slice();tf.adjustPadsBasedOnAutoPad(r[0].dims,t.strides,t.dilations,i,a,"NHWC"===t.format,t.autoPad);let n=Object.assign({},t);return Object.assign(n,{kernelShape:i,pads:a}),n},a$=t=>{let r=i0(t),i=t.format;return{autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][t.auto_pad],format:i,dilations:t.dilations,group:t.group,kernelShape:t.kernel_shape,pads:t.pads,strides:t.strides,wIsConst:t.w_is_const(),...r,cacheKey:`${t.format};${r.activation};`}},av=(t,r,i,a)=>{let n="NHWC"===i.format,s=ag(r[0].dims,r[1].dims,i.dilations,i.pads,i.strides,n);if(1!==i.group){let o=[r[0]];if(n){let a=t.kernelCustomData.wT??t.compute(tq(r[1],a_),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=a),o.push(a)}else o.push(r[1]);3===r.length&&o.push(r[2]),!t.adapterInfo.isArchitecture("ampere")&&n&&r[1].dims[0]===i.group&&1===r[1].dims[1]&&1===i.dilations[0]&&1===i.dilations[1]?t.compute(am(o,i,s,a),{inputs:o}):t.compute(af(o,i,s,a),{inputs:o});return}let o=3===r.length,u=r[0].dims[n?1:2],l=r[0].dims[n?2:3],d=r[0].dims[n?3:1],p=r[1].dims[2],c=r[1].dims[3],h=s[n?1:2],f=s[n?2:3],m=s[n?3:1],g=n&&p===u&&c===l&&0===i.pads[0]&&0===i.pads[1];if(g||1===p&&1===c&&1===i.dilations[0]&&1===i.dilations[1]&&1===i.strides[0]&&1===i.strides[1]&&0===i.pads[0]&&0===i.pads[1]){let p=s[0],c,_,y,b=[];if(n){let a=t.kernelCustomData.wT??t.compute(tq(r[1],a_),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];if(i.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=a),g){let t=u*l*d;c=r[0].reshape([1,p,t]),_=a.reshape([1,t,m]),y=[1,p,m]}else c=r[0].reshape([p,u*l,d]),_=a.reshape([1,d,m]),y=[p,h*f,m];b.push(c),b.push(_)}else c=r[0].reshape([p,d,u*l]),_=r[1].reshape([1,m,d]),y=[p,m,h*f],b.push(_),b.push(c);o&&b.push(r[2]);let $=y[2],v=b[0].dims[b[0].dims.length-1];$<8&&v<8?t.compute(i6(b,i,s,y,n,a),{inputs:b}):t.compute(ai(b,i,s,y,n,a),{inputs:b});return}let _=t.kernelCustomData.wT??t.compute(tq(r[1],a_),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=_);let y=[r[0],_];o&&y.push(r[2]);let b=n?h*f:m,$=n?m:h*f,v=p*c*d;t.compute(an(y,i,s,b,$,v,o,!0,a),{inputs:y})},aw=(t,r)=>{let i="NHWC"===r.format,a=[t.inputs[0].reshape(i?[t.inputs[0].dims[0],1,t.inputs[0].dims[1],t.inputs[0].dims[2]]:[t.inputs[0].dims[0],t.inputs[0].dims[1],1,t.inputs[0].dims[2]]),t.inputs[1].reshape([t.inputs[1].dims[0],t.inputs[1].dims[1],1,t.inputs[1].dims[2]])];3===t.inputs.length&&a.push(t.inputs[2]);let n=[0,r.pads[0],0,r.pads[1]],s=[1].concat(r.strides),o=[1].concat(r.dilations),u=[1].concat(r.kernelShape),l=ab({...r,pads:n,strides:s,dilations:o,kernelShape:u},a);av(t,a,l,t=>i?[t[0],t[2],t[3]]:[t[0],t[1],t[3]])},ax=(t,r,i)=>{let a="NHWC"===i.format?"channelsLast":"channelsFirst",n=ab(i,r),s="NOTSET"===i.autoPad?i.pads:i.autoPad,o=ac(r[0].dims,r[1].dims,i.strides,i.dilations,s,!1,a);t.compute(ah(r,n,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],a))},ak=(t,r)=>{if(ay(t.inputs,r),3===t.inputs[0].dims.length)aw(t,r);else if(5===t.inputs[0].dims.length)ax(t,t.inputs,r);else{let i=ab(r,t.inputs);av(t,t.inputs,i)}}}),us=P(()=>{"use strict";oq(),oV(),oK(),oY(),aS=(t,r,i)=>{let a=t.length>2,n=r.outputShape,s="NHWC"===r.format,o=r.group,u=t[1].dims,l=u[2]/o,d=u[3],p=s?tx(l):1,c=s?tx(d):1,h=s?1===d?p:c:1,f=th.size(n)/c,m=[Math.ceil(f/64),1,1];e9("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${m}`);let g=["rank","rank"],_=[r.strides[0],r.strides[1]],y=[r.kernelShape[s?1:2],r.kernelShape[s?2:3]],b=[r.dilations[0],r.dilations[1]],$=[y[0]+(r.dilations[0]<=1?0:(r.kernelShape[s?1:2]-1)*(r.dilations[0]-1)),y[1]+(r.dilations[1]<=1?0:(r.kernelShape[s?2:3]-1)*(r.dilations[1]-1))],v=[$[0]-1-Math.floor((r.pads[0]+r.pads[2])/2),$[1]-1-Math.floor((r.pads[1]+r.pads[3])/2)],w=[{type:12,data:f},{type:12,data:_},{type:12,data:y},{type:12,data:b},{type:12,data:$},{type:6,data:v},{type:12,data:l},{type:12,data:d},...tw(t[0].dims,t[1].dims)];return a&&(w.push(...tw(t[2].dims)),g.push("rank")),w.push(...tw(n)),{name:"ConvTranspose2D",shaderCache:{hint:`${r.cacheKey};${p}${h}${c}${1===d}`,inputDependencies:g},getRunData:()=>({dispatchGroup:{x:m[0],y:m[1],z:m[2]},outputs:[{dims:i?i(n):n,dataType:t[0].dataType}],programUniforms:w}),getShaderSource:r=>{let i=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:_.length},{name:"filter_dims",type:"u32",length:y.length},{name:"dilations",type:"u32",length:y.length},{name:"effective_filter_dims",type:"u32",length:$.length},{name:"pads",type:"i32",length:v.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],o=t$(t[0].dataType),u=s?1:2,l=s?2:3,f=s?3:1,m=tz("W",t[1].dataType,t[1].dims.length,h),g=tz("Dy",t[0].dataType,t[0].dims.length,p),b=[g,m];a&&b.push(tz("bias",t[2].dataType,[n[f]].length,c));let w=tC("result",t[0].dataType,n.length,c),x=`
            let outputIndices = ${w.offsetToIndices(`global_idx * ${c}`)};
            let batch = ${w.indicesGet("outputIndices",0)};
            let d1 = ${w.indicesGet("outputIndices",f)};
            let r = ${w.indicesGet("outputIndices",u)};
            let c = ${w.indicesGet("outputIndices",l)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${w.type.value}(0.0);
            for (var wR: u32 = 0; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${o}(dyRCorner) + ${o}(wR)) / ${o}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${o}(uniforms.Dy_shape[${u}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              wR = wR + uniforms.strides[0] - 1;
              let idyR: u32 = u32(dyR);

              for (var wC: u32 = 0; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${o}(dyCCorner) + ${o}(wC)) / ${o}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${o}(uniforms.Dy_shape[${l}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                wC = wC + uniforms.strides.y - 1;
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + ${p}) {
                  let xValue = ${s?g.getByOffset(`${g.indicesToOffset(`${g.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p}`):g.get("batch","inputChannel","idyR","idyC")};
                  ${(()=>{let t="";if(1===p)t+=`
        let w_offset = ${m.indicesToOffset(`${m.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${m.getByOffset(`w_offset / ${h}`)};
        dotProd = dotProd + xValue * wValue;`;else if(1===d)t+=`
          let wValue = ${m.getByOffset(`${m.indicesToOffset(`${m.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${h}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let r=0;r<p;r++)t+=`
            let wValue${r} = ${m.getByOffset(`${m.indicesToOffset(`${m.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${r}, wOutChannel)`)} / ${h}`)};
            dotProd = dotProd + xValue[${r}] * wValue${r};`;return t})()}
                  inputChannel = inputChannel + ${p};
                }
              }
            }
            let value = dotProd${a?` + bias[d1 / ${c}]`:""};
            ${w.setByOffset("global_idx","value")};
          `;return`
    ${r.registerUniforms(i).declareVariables(...b,w)}
      ${r.mainStart()}
      ${r.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${x}}`}}}}),uo=P(()=>{"use strict";us(),o5(),oQ(),aT=(t,r,i,a,n,s)=>(t-1)*r+i+(a-1)*n+1-s,aI=(t,r,i,a,n)=>{let s=Math.floor(t/2);"SAME_UPPER"===r?(i[a]=s,i[n]=t-s):"SAME_LOWER"===r&&(i[a]=t-s,i[n]=s)},aE=(t,r,i,a,n,s,o,u,l,d)=>{let p=t.length-2,c=0===d.length;l.length<p&&l.push(...Array(p-l.length).fill(0));let h=t[0],f=r[u?3:1]*n;for(let n=0,h=t.length-p-(u?1:0);n<p;++n,++h){let u=t[h],f=c?u*o[n]:d[n];aI(aT(u,o[n],s[n],r[h],i[n],f),a,s,n,n+p),c&&d.push(o[n]*(u-1)+l[n]+(r[h]-1)*i[n]+1-s[n]-s[n+p])}d.splice(0,0,h),d.splice(u?3:1,0,f)},az=(t,r)=>{let i=t.kernelShape.slice();if(0===t.kernelShape.length||0===t.kernelShape.reduce((t,r)=>t*r,1)){i.length=0;for(let t=2;t<r[1].dims.length;++t)i.push(r[1].dims[t])}let a="NHWC"===t.format;i.splice(0,0,r[1].dims[0]),i.splice(a?3:1,0,r[1].dims[1]);let n=t.pads.slice(),s=t.outputShape.slice(),o=t.outputPadding.slice(),u=r[0].dims,l=t.dilations.slice();0===l.reduce((t,r)=>t+r,0)&&(l=Array(r[0].dims.length-2).fill(1));let d=t.strides.slice();0===d.reduce((t,r)=>t+r,0)&&(d=Array(r[0].dims.length-2).fill(1)),aE(u,i,l,t.autoPad,t.group,n,d,a,o,s);let p=Object.assign({},t);return Object.assign(p,{kernelShape:i,pads:n,outputPadding:o,outputShape:s,dilations:l,strides:d}),p},aC=t=>{let r=i0(t),i=t.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof t.autoPad>"u"?0:t.autoPad],n=t.dilations,s=t.group,o=t.kernelShape,u=t.pads,l=t.strides,d=t.wIsConst();return{autoPad:a,format:i,dilations:n,group:s,kernelShape:o,outputPadding:t.outputPadding,outputShape:t.outputShape,pads:u,strides:l,wIsConst:d,...r,cacheKey:`${t.format};${r.activation};`}},aA=(t,r)=>{if(!t||2!==t.length&&3!==t.length)throw Error("Conv requires 2 or 3 inputs");if(4!==t[0].dims.length&&3!==t[0].dims.length)throw Error("currently only support 2-dimensional conv");if(t[0].dims.length!==t[1].dims.length)throw Error("filter does not have same dimension as input");if(t[0].dims["NHWC"===r.format?t[0].dims.length-1:1]!==t[1].dims[0])throw Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=t[1].dims[1]*r.group;if(3===t.length&&(1!==t[2].dims.length||t[2].dims[0]!==i))throw Error("invalid bias");let a=t[0].dims.length-2;if(r.dilations.reduce((t,r)=>t+r,0)>0&&r.dilations.length!==a)throw Error(`dilations should be ${a}D`);if(r.strides.reduce((t,r)=>t+r,0)>0&&r.strides.length!==a)throw Error(`strides should be ${a}D`);if(r.pads.reduce((t,r)=>t+r,0)>0&&r.pads.length!==2*a)throw Error(`pads should be ${2*a}D`);if(r.outputPadding.length!==a&&0!==r.outputPadding.length)throw Error(`output_padding should be ${a}D`);if(r.kernelShape.reduce((t,r)=>t+r,0)>0&&0!==r.kernelShape.length&&r.kernelShape.length!==t[1].dims.length-2)throw Error("invalid kernel shape");if(0!==r.outputShape.length&&r.outputShape.length!==t[0].dims.length-2)throw Error("invalid output shape")},aO=(t,r,i,a)=>{let n=t.kernelCustomData.wT??t.compute(tq(r[1],[2,3,0,1]),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!t.kernelCustomData.wT&&(t.kernelCustomData.wT=n);let s=[r[0],n];3===r.length&&s.push(r[2]),t.compute(aS(s,i,a),{inputs:s})},aR=(t,r)=>{let i="NHWC"===r.format,a=[t.inputs[0].reshape(i?[t.inputs[0].dims[0],1,t.inputs[0].dims[1],t.inputs[0].dims[2]]:[t.inputs[0].dims[0],t.inputs[0].dims[1],1,t.inputs[0].dims[2]]),t.inputs[1].reshape([t.inputs[1].dims[0],t.inputs[1].dims[1],1,t.inputs[1].dims[2]])];3===t.inputs.length&&a.push(t.inputs[2]);let n=r.kernelShape;(0===n.length||0===n[0])&&(n=[t.inputs[1].dims[2]]);let s=r.dilations;(0===s.length||0===s[0])&&(s=[1]);let o=r.strides;(0===o.length||0===o[0])&&(o=[1]);let u=r.pads;0===u.length&&(u=[0,0]),u=[0,u[0],0,u[1]],o=[1].concat(o),s=[1].concat(s),n=[1].concat(n);let l=az({...r,pads:u,strides:o,dilations:s,kernelShape:n},a);aO(t,a,l,t=>i?[t[0],t[2],t[3]]:[t[0],t[1],t[3]])},aB=(t,r)=>{if(aA(t.inputs,r),3===t.inputs[0].dims.length)aR(t,r);else{let i=az(r,t.inputs);aO(t,t.inputs,i)}}}),uu=P(()=>{"use strict";oq(),oK(),oj(),oY(),aD=(t,r,i,a)=>{let n=th.size(r),s=r.length,o=tz("input",t,s),u=tC("output",t,s),l=6===i.dataType?i.getInt32Array()[0]:Number(i.getBigInt64Array()[0]),d=th.normalizeAxis(l,s);return{name:"CumSum",shaderCache:{hint:a.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:d},...tw(r,r)]}),getShaderSource:t=>{let r=` i32(${o.indicesGet("inputIndices","uniforms.axis")}) `,i=tI("uniforms.input_shape","uniforms.axis",s),n=a.reverse?r+(a.exclusive?" + 1":""):"0",l=a.reverse?i:r+(a.exclusive?"":" + 1");return`
                ${t.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(o,u)}
                ${t.mainStart()}
                  ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${n};
                  let last : i32 = ${l};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${o.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`}}},aM=(t,r)=>{let i=t.inputs[0].dims,a=t.inputs[0].dataType,n=t.inputs[1];t.compute(aD(a,i,n,r),{inputs:[0]})},aN=t=>{let r=1===t.exclusive,i=1===t.reverse;return td({exclusive:r,reverse:i})}}),ul=P(()=>{"use strict";oq(),oK(),oj(),oY(),aP=t=>{if(!t||1!==t.length)throw Error("DepthToSpace requires 1 input.");if(4!==t[0].dims.length)throw Error("DepthToSpace requires 4D input.")},aU=(t,r,i,a)=>{let n=[];n.push(`fn perm(i: ${a.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`);for(let a=0;a<r;++a)n.push(i.indicesSet("a",t[a],`i[${a}]`));return n.push("return a;}"),n.join(`
`)},aW=(t,r)=>{let i,a,n,s,o,u,l="NHWC"===r.format,d=r.blocksize,p="DCR"===r.mode;l?([i,a,n,s]=t.dims,o=p?[i,a,n,d,d,s/d**2]:[i,a,n,s/d**2,d,d],u=p?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([i,a,n,s]=[t.dims[0],t.dims[2],t.dims[3],t.dims[1]],o=p?[i,d,d,s/d**2,a,n]:[i,s/d**2,d,d,a,n],u=p?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let c=t.reshape(o),h=c.dims.length,f=t.dataType,m=tz("a",f,h),g=tC("output",f,h);return{name:"DepthToSpace",shaderCache:{hint:`${t.dims};${r.blocksize};${r.mode}`,inputDependencies:["rank"]},getRunData:t=>{let r=l?[i,a*d,n*d,s/d**2]:[i,s/d**2,a*d,n*d],o=th.size(r),p=c.dims,h=th.sortBasedOnPerm(p,u);return{outputs:[{dims:r,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},...tw(p,h)]}},getShaderSource:t=>`
  ${t.registerUniform("output_size","u32").declareVariables(m,g)}

  ${aU(u,h,m,g)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${g.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${g.setByOffset("global_idx",m.getByIndices("aIndices"))}
  }`}},aq=(t,r)=>{aP(t.inputs),t.compute(aW(t.inputs[0],r))},aL=t=>td({blocksize:t.blocksize,mode:t.mode,format:t.format})}),ud=P(()=>{"use strict";oq(),oK(),oj(),oY(),aH="^"+(aG="("+(aV="[a-zA-Z]|\\.\\.\\.")+")+")+"$",aF="^("+aG+",)*"+aG+"$",aj=class{constructor(t=-1){this.symbolToIndices=new Map,this.inputIndex=t}addSymbol(t,r){let i=this.symbolToIndices.get(t);void 0===i?i=[r]:i.push(r),this.symbolToIndices.set(t,i)}},aK=class{constructor(t,r){this.equation=r,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=[],this.outputDims=[];let[i,a]=r.includes("->")?r.split("->",2):[r,""];if(!i.match(RegExp(aF)))throw Error("Invalid LHS term");if(i.split(",").forEach((r,i)=>{let a=t[i].dims.slice();if(!r.match(RegExp(aH)))throw Error("Invalid LHS term");let n=this.processTerm(r,!0,a,i);this.lhs.push(n)}),""===a)a+=[...this.symbolToInfo.entries()].filter(([t,r])=>1===r.count||"..."===t).map(([t])=>t).join("");else if(!a.match(RegExp(aG)))throw Error("Invalid RHS");a.match(RegExp(aV,"g"))?.forEach(t=>{if("..."===t)this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let r=this.symbolToInfo.get(t);if(void 0===r)throw Error("Invalid RHS symbol");this.outputDims.push(r.dimValue)}}),this.rhs=this.processTerm(a,!1,this.outputDims)}addSymbol(t,r,i){let a=this.symbolToInfo.get(t);if(void 0!==a){if(a.dimValue!==r&&1!==a.count)throw Error("Dimension mismatch");a.count++,a.inputIndices.push(i)}else a={count:1,dimValue:r,inputIndices:[i]};this.symbolToInfo.set(t,a)}processTerm(t,r,i,a=-1){let n=i.length,s=!1,o=[],u=0;if(!t.match(RegExp(aH))&&!r&&""!==t)throw Error("Invalid LHS term");let l=t.match(RegExp(aV,"g")),d=new aj(a);return l?.forEach((t,p)=>{if("..."===t){if(s)throw Error("Only one ellipsis is allowed per input term");s=!0;let t=n-l.length+1;if(t<0)throw Error("Ellipsis out of bounds");if(o=i.slice(u,u+t),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw Error("Ellipsis dimensions mismatch")}else if(r)this.hasEllipsis=!0,this.ellipsisDims=o;else throw Error("Ellipsis must be specified in the LHS");for(let t=0;t<o.length;t++){let r=String.fromCharCode(48+t);d.addSymbol(r,p+t),this.addSymbol(r,i[u++],a)}}else d.addSymbol(t,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(t,i[u++],a)}),d}},aY=t=>t+"_max",aQ=(t,r,i,a)=>{let n=t.map(t=>t.length).map((t,i)=>tz(`input${i}`,r,t)),s=th.size(a),o=tC("output",r,a.length),u=[...i.symbolToInfo.keys()].filter(t=>!i.rhs.symbolToIndices.has(t));return{name:"Einsum",shaderCache:{hint:i.equation,inputDependencies:t.map(()=>"rank")},getRunData:()=>{let n=u.filter(t=>i.symbolToInfo.has(t)).map(t=>({type:12,data:i.symbolToInfo.get(t)?.dimValue||0}));n.push({type:12,data:s});let o=t.map((t,r)=>[...tw(t)]).reduce((t,r)=>t.concat(r),n);return o.push(...tw(a)),{outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o}},getShaderSource:t=>{let r=[],a=[],s=[],l=[],d=[],p=i.symbolToInfo.size===i.rhs.symbolToIndices.size;i.symbolToInfo.forEach((t,u)=>{if(i.rhs.symbolToIndices.has(u)){let a=i.rhs.symbolToIndices.get(u)?.[0];void 0!==a&&i.lhs.forEach((i,s)=>{if(t.inputIndices.includes(s)){let t=i.symbolToIndices.get(u);if(void 0===t)throw Error("Invalid symbol error");t.forEach(t=>{r.push(`${n[s].indicesSet(`input${s}Indices`,t,o.indicesGet("outputIndices",a))}`)})}})}else i.lhs.forEach((r,i)=>{if(t.inputIndices.includes(i)){let t=r.symbolToIndices.get(u);if(void 0===t)throw Error("Invalid symbol error");t.forEach(t=>{a.push(`${n[i].indicesSet(`input${i}Indices`,t,`${u}`)}`)}),d.push(`prod *= ${n[i].getByIndices(`input${i}Indices`)};`)}}),s.push(`for(var ${u}: u32 = 0; ${u} < uniforms.${aY(u)}; ${u}++) {`),l.push("}")});let c=p?[...r,`let sum = ${n.map((t,r)=>t.getByIndices(`input${r}Indices`)).join(" * ")};`]:[...r,"var sum = 0.0;",...s,...a,"var prod = 1.0;",...d,"sum += prod;",...l];return`
            ${t.registerUniforms(u.map(t=>({name:`${aY(t)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,o)}

            ${t.mainStart()}
            ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${o.offsetToIndices("global_idx")};
            ${n.map((t,r)=>`var input${r}Indices: ${n[r].type.indices};`).join(`
`)}
            ${c.join(`
`)};
            ${o.setByOffset("global_idx","sum")};
          }`}}},aZ=(t,r)=>{let i=new aK(t.inputs,r.equation),a=i.outputDims,n=t.inputs.map((t,r)=>t.dims);t.compute(aQ(n,t.inputs[0].dataType,i,a))},aX=t=>{let r=t.equation.replace(/\s+/g,"");return td({equation:r})}}),up=P(()=>{"use strict";oq(),oK(),oY(),aJ=t=>{if(!t||2!==t.length)throw Error("Expand requires 2 input.");let r=t[0].dims,i=Array.from(t[1].getBigInt64Array(),Number),a=i.length<r.length?0:i.length-r.length,n=r.length<i.length?0:r.length-i.length;for(;a<i.length&&n<r.length;++a,++n)if(i[a]!==r[n]&&1!==i[a]&&1!==r[n])throw Error("Expand requires shape to be broadcastable to input")},a0=(t,r)=>{let i=t.length-r.length,a=[];for(let r=0;r<i;++r)a.push(t[r]);for(let n=0;n<r.length;++n)a.push(1===r[n]?t[n+i]:r[n]);return a},a1=(t,r)=>t.length>r.length?a0(t,r):a0(r,t),a2=t=>{let r=t[0].dims,i=a1(r,Array.from(t[1].getBigInt64Array(),Number)),a=t[0].dataType,n=9===a||1===th.size(r),s=9===a||r.length>0&&r[r.length-1]%4==0?4:1,o=n||i.length>0&&i[i.length-1]%4==0?4:1,u=Math.ceil(th.size(i)/o),l=[{type:12,data:u},...tw(r,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:t=>{let n=tz("input",a,r.length,s),u=tC("output",a,i.length,o),l;if(9===a){let t=(t,r,i="")=>`
          let outputIndices${r} = ${u.offsetToIndices(`outputOffset + ${r}u`)};
          let offset${r} = ${n.broadcastedIndicesToOffset(`outputIndices${r}`,u)};
          let index${r} = offset${r} / 4u;
          let component${r} = offset${r} % 4u;
          ${t}[${r}] = ${i}(${n.getByOffset(`index${r}`)}[component${r}]);
        `;l=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${t("data",0,"u32")}
        ${t("data",1,"u32")}
        ${t("data",2,"u32")}
        ${t("data",3,"u32")}
        ${u.setByOffset("global_idx","data")}
      }`}else l=`
        let outputIndices = ${u.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${n.broadcastedIndicesToOffset("outputIndices",u)};
        let data = ${u.type.value}(${n.getByOffset(`inputOffset / ${s}`)});
        ${u.setByOffset("global_idx","data")}
      }`;return`
    ${t.registerUniform("vec_size","u32").declareVariables(n,u)}
    ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${l}`},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l})}},a3=t=>{aJ(t.inputs),t.compute(a2(t.inputs),{inputs:[0]})}}),uc=P(()=>{"use strict";oq(),oK(),oY(),o3(),a4=t=>{let r=t[0].dataType,i=th.size(t[0].dims),a=th.size(t[1].dims),n=a%4==0;return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:t=>{let i=tz("x",r,[1],4),a=tz("bias",r,[1],4),s=tC("y",r,[1],4),o=t=>`
      let bias${t}_offset: u32 = (global_idx * 4 + ${t}) % uniforms.bias_size;
      let bias${t} = ${a.getByOffset(`bias${t}_offset / 4`)}[bias${t}_offset % 4];`,u=n?`
      let bias = ${a.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${o(0)}${o(1)}${o(2)}${o(3)}
      let bias = ${i.type.value}(bias0, bias1, bias2, bias3);`;return`${t.registerUniforms([{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}]).declareVariables(i,a,s)}

    ${iv(tv(r))}

    ${t.mainStart(ty)}
      ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${i.getByOffset("global_idx")};
      ${u}
      let x_in = x + bias;
      ${s.setByOffset("global_idx",iw("x_in"))}
    }`},getRunData:t=>({outputs:[{dims:t[0].dims,dataType:t[0].dataType}],programUniforms:[{type:12,data:Math.ceil(i/4)},{type:12,data:a}],dispatchGroup:{x:Math.ceil(i/ty/4)}})}},a6=t=>{t.inputs.length<2||0===th.size(t.inputs[1].dims)?ix(t):t.compute(a4(t.inputs))}}),uh=P(()=>{"use strict";oq(),oK(),oj(),oY(),a8=t=>{if(!t||2!==t.length)throw Error("Gather requires 2 inputs.")},a5=(t,r)=>{let i=t[0].dims,a=t[1].dims,n=i.length,s=th.normalizeAxis(r.axis,n),o=i.slice(0);o.splice(s,1,...a);let u=i[s],l=9===t[0].dataType?4:1,d=Math.ceil(th.size(o)/l),p=[{type:12,data:d},{type:6,data:u},{type:12,data:s},...tw(t[0].dims,t[1].dims,o)];return{name:"Gather",shaderCache:{hint:r.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:o,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:r=>{let i=tz("data",t[0].dataType,t[0].dims.length,l),u=tz("inputIndices",t[1].dataType,t[1].dims.length),d=tC("output",t[0].dataType,o.length,l),p=t=>{let r=a.length,l=`var indicesIndices${t}  = ${u.type.indices}(0);`;for(let i=0;i<r;i++)l+=`${r>1?`indicesIndices${t}[${i}]`:`indicesIndices${t}`} = ${o.length>1?`outputIndices${t}[uniforms.axis + ${i}]`:`outputIndices${t}`};`;l+=`
          var idx${t} = ${u.getByIndices(`indicesIndices${t}`)};
          if (idx${t} < 0) {
            idx${t} = idx${t} + uniforms.axisDimLimit;
          }
          var dataIndices${t} : ${i.type.indices};
        `;for(let i=0,a=0;i<n;i++)i===s?(l+=`${n>1?`dataIndices${t}[${i}]`:`dataIndices${t}`} = u32(idx${t});`,a+=r):(l+=`${n>1?`dataIndices${t}[${i}]`:`dataIndices${t}`} = ${o.length>1?`outputIndices${t}[${a}]`:`outputIndices${t}`};`,a++);return l},c;if(9===t[0].dataType){let t=(t,r,a="")=>`
          let outputIndices${r} = ${d.offsetToIndices(`outputOffset + ${r}u`)};
          ${p(r)};
          let offset${r} = ${i.indicesToOffset(`dataIndices${r}`)};
          let index${r} = offset${r} / 4u;
          let component${r} = offset${r} % 4u;
          ${t}[${r}] = ${a}(${i.getByOffset(`index${r}`)}[component${r}]);
        `;c=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${t("value",0,"u32")}
        ${t("value",1,"u32")}
        ${t("value",2,"u32")}
        ${t("value",3,"u32")}
        ${d.setByOffset("global_idx","value")}
      `}else c=`
      let outputIndices = ${d.offsetToIndices("global_idx")};
      ${p("")};
      let value = ${i.getByIndices("dataIndices")};
      ${d.setByOffset("global_idx","value")};
      `;return`
      ${r.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(i,u,d)}
      ${r.mainStart()}
        ${r.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${c}
      }`}}},a9=t=>td({axis:t.axis}),a7=(t,r)=>{a8(t.inputs),t.compute(a5(t.inputs,r))}}),uf=P(()=>{"use strict";oq(),oK(),oY(),ne=(t,r,i,a,n,s,o,u,l)=>{let d=[{type:12,data:s},{type:12,data:a},{type:12,data:n},{type:12,data:i},{type:12,data:o},{type:12,data:u},{type:12,data:l}],p=[s];return d.push(...tw(r.dims,p)),t.compute({name:"computeSliceOffsets",shaderCache:{hint:`${n.length}_${i.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:p,dataType:t.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:t=>{let a=tz("indices_data",r.dataType,r.dims.length),s=tC("input_slice_offsets_data",12,1,1),o=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:n.length},{name:"sizes_from_slice_dims_data",type:"u32",length:i.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${t.registerUniforms(o).declareVariables(a,s)}
  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${1===n.length?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${1===i.length?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`}},{inputs:[r],outputs:[-1]})[0]},nt=(t,r)=>{let i=t.inputs,a=i[0].dims,n=i[0].dataType,s=i[1].dims,o=s[s.length-1],u=th.sizeToDimension(s,s.length-1),l=th.sizeFromDimension(a,r.batchDims+o),d=th.sizeToDimension(a,r.batchDims),p=th.sizeFromDimension(a,r.batchDims),c=Array(o),h=l;for(let t=0;t<o;++t)c[o-1-t]=h,h*=a[r.batchDims+o-1-t];let f=ne(t,i[1],c,r.batchDims,a,u,u/d,p,o),m=r.batchDims+o;if(m>a.length)throw Error("last dimension of indices must not be larger than rank of input tensor");let g=s.slice(0,-1).concat(a.slice(m)),_=th.size(g),y=[{type:12,data:_},{type:12,data:l},...tw(i[0].dims,f.dims,g)];t.compute({name:"GatherND",shaderCache:{hint:r.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:g,dataType:n}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:y}),getShaderSource:t=>{let r=tz("data",i[0].dataType,i[0].dims.length),a=tz("slice_offsets",12,f.dims.length),n=tC("output",i[0].dataType,g.length);return`
          ${t.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(r,a,n)}
            ${t.mainStart()}
            ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`}},{inputs:[i[0],f]})},nr=t=>({batchDims:t.batch_dims,cacheKey:""})}),um=P(()=>{"use strict";oq(),oK(),oj(),oY(),ni=(t,r)=>{if(t.length<3||t.length>4)throw Error("GatherBlockQuantized requires 3 or 4 inputs.");let i=th.normalizeAxis(r.quantizeAxis,t[0].dims.length),a=r.blockSize,n=t[0],s=t[2],o=4===t.length?t[3]:void 0;if(s.dims.length!==n.dims.length||!n.dims.map((t,r)=>r===i?Math.ceil(t/a)===s.dims[r]:t===s.dims[r]).reduce((t,r)=>t&&r,!0))throw Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(o){if(o.dataType!==n.dataType)throw Error("Zero point must have the same data type as the input tensor.");if(o.dims.length!==s.dims.length||!o.dims.map((t,r)=>t===s.dims[r]).reduce((t,r)=>t&&r,!0))throw Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},na=(t,r)=>{let i=t[0].dims,a=t[1].dims,n=i.length,s=th.normalizeAxis(r.gatherAxis,n),o=th.normalizeAxis(r.quantizeAxis,n),u=i.slice(0);u.splice(s,1,...a);let l=th.size(u),d=t[2].dataType,p=22===t[0].dataType,c=[{type:12,data:l},{type:12,data:o},{type:12,data:s},{type:12,data:r.blockSize},...tw(...t.map((t,r)=>t.dims),u)];return{name:"GatherBlockQuantized",shaderCache:{hint:`${r.cacheKey};${t.filter((t,r)=>1!==r).map(t=>t.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:t.length},(t,r)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c}),getShaderSource:r=>{let n=tz("data",t[0].dataType,t[0].dims.length),o=tz("inputIndices",t[1].dataType,t[1].dims.length),l=tz("scales",t[2].dataType,t[2].dims.length),c=t.length>3?tz("zeroPoint",t[3].dataType,t[3].dims.length):void 0,h=tC("output",d,u.length),f=[n,o,l];return c&&f.push(c),`
        ${r.registerUniforms([{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}]).declareVariables(...f,h)}
        ${r.mainStart()}
        let output_indices = ${h.offsetToIndices("global_idx")};
        var indices_indices = ${o.type.indices}(0);
        ${a.length>1?`
          for (var i: u32 = 0; i < ${a.length}; i++) {
            let index = ${h.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${o.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${h.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${n.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${h.indicesGet("output_indices","i")};
          ${n.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${o.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${i[s]};
        }
        ${n.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${u.length}; i++) {
          let index = ${h.indicesGet("output_indices",`i + ${a.length} - 1`)};
          ${n.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${n.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${n.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${l.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${l.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${l.getByIndices("scale_indices")};
        ${c?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${c.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${c.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${tv(d)}(quantized_data - zero_point) * scale;
        ${h.setByOffset("global_idx","dequantized_data")};
    }`}}},nn=(t,r)=>{ni(t.inputs,r),t.compute(na(t.inputs,r))},ns=t=>td({blockSize:t.blockSize,gatherAxis:t.gatherAxis,quantizeAxis:t.quantizeAxis})}),ug=P(()=>{"use strict";oq(),oK(),oj(),oY(),no=t=>{if(!t||2!==t.length)throw Error("GatherElements requires 2 inputs.");if(t[0].dims.length<1)throw Error("GatherElements requires that the data input be rank >= 1.");if(t[0].dims.length!==t[1].dims.length)throw Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},nu=(t,r)=>{let i=t[0].dims,a=t[0].dataType,n=i.length,s=t[1].dims,o=t[1].dataType,u=th.normalizeAxis(r.axis,n),l=i[u],d=s.slice(0),p=th.size(d),c=tz("input",a,n),h=tz("indicesInput",o,s.length),f=tC("output",a,d.length),m=[{type:12,data:p},{type:6,data:l},{type:12,data:u}];return m.push(...tw(i,s,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:m}),getShaderSource:t=>`
      ${t.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(c,h,f)}
      ${t.mainStart()}
      ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${f.offsetToIndices("global_idx")};

      var idx = ${h.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${c.type.indices}(outputIndices);
      ${c.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${c.getByIndices("inputIndices")};

      ${f.setByOffset("global_idx","value")};
  }`}},nl=t=>td({axis:t.axis}),nd=(t,r)=>{no(t.inputs),t.compute(nu(t.inputs,r))}}),u_=P(()=>{"use strict";oq(),oK(),oY(),np=t=>{if(!t)throw Error("Input is missing");if(t.length<2||t.length>3)throw Error("Invaid input number.");if(3===t.length&&t[2].dims.length>2)throw Error("Invalid input shape of C");if(t[0].dataType!==t[1].dataType||3===t.length&&t[0].dataType!==t[2].dataType)throw Error("Input types are mismatched")},nc=(t,r)=>{let i=t[0].dims.slice(),a=t[1].dims.slice(),[n,s,o]=tm.getShapeOfGemmResult(i,r.transA,a,r.transB,3===t.length?t[2].dims:void 0),u=[n,s];if(!u)throw Error("Can't use gemm on the given tensors");let l=Math.ceil(s/16),d=Math.ceil(n/16),p=(th.size(u),[{type:12,data:l},{type:12,data:n},{type:12,data:s},{type:12,data:o},{type:1,data:r.alpha},{type:1,data:r.beta}]),c=["type","type"];return 3===t.length&&(p.push(...tw(t[2].dims)),c.push("rank")),p.push(...tw(u)),{name:"GemmShared",shaderCache:{hint:`${r.cacheKey}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:u,dataType:t[0].dataType}],dispatchGroup:{x:l*d},programUniforms:p}),getShaderSource:i=>{let a=tz("a",t[0].dataType,t[0].dims),n=tz("b",t[1].dataType,t[1].dims),s=null,o=[a,n];3===t.length&&(s=tz("c",t[2].dataType,t[2].dims.length),o.push(s));let l=tC("output",t[0].dataType,u.length);o.push(l);let d="",p="";r.transA&&r.transB?(p=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${a.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${n.type.value}(0);
      }
      `,d="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):r.transA&&!r.transB?(p=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${a.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${n.type.value}(0);
      }
      `,d="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!r.transA&&r.transB?(p=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${a.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${n.type.value}(0);
      }
      `,d="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):r.transA||r.transB||(p=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${a.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${n.type.value}(0);
      }
      `,d="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let c=1===r.alpha?"":"value *= uniforms.alpha;";return`
  ${i.registerUniforms([{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}]).declareVariables(...o)}
  var<workgroup> tile_a: array<array<${a.type.storage}, 16>, 16>;
  var<workgroup> tile_b: array<array<${n.type.storage}, 16>, 16>;
  ${i.mainStart([16,16,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * 16;
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * 16;
    let num_tiles = (uniforms.K - 1) / 16 + 1;
    var k_start = 0u;
    var value = ${l.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${p}
      k_start = k_start + 16;
      workgroupBarrier();

      for (var k: u32 = 0u; k < 16; k++) {
        ${d}
      }
      workgroupBarrier();
    }

    ${c}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${null!=s?`let cOffset = ${s.broadcastedIndicesToOffset("vec2(m, n)",l)}; value += ${l.type.value}(uniforms.beta) * ${s.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`}}},nh=t=>({transA:t.transA,transB:t.transB,alpha:t.alpha,beta:t.beta,cacheKey:`${t.transA};${t.transB};${1===t.alpha}`}),nf=(t,r)=>{np(t.inputs),t.compute(nc(t.inputs,r))}}),uy=P(()=>{"use strict";oq(),oK(),oj(),oY(),[nm,ng,n_,ny]=[0,1,2,3],nb=t=>{if(4!==t[0].dims.length)throw Error("only 4-D tensor is supported.");if(t[0].dims.length!==t[1].dims.length)throw Error("input dimensions must be equal to grid dimensions");if(t[0].dims.length-2!==t[1].dims[t[1].dims.length-1])throw Error(`last dimension of grid must be equal to ${t[0].dims.length-2}`);if(t[0].dims[0]!==t[1].dims[0])throw Error("grid batch size must match input batch size")},n$=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,nv=t=>`
  fn gs_bicubic_interpolate(p: mat4x4<${t}>, x: f32, y: f32) -> ${t} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${t}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,nw=t=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${0===t.alignCorners?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,nx=t=>`
  ${"reflection"===t.paddingMode?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,nk=(t,r,i)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${r} {
     var pixel = ${r}(0);
     var indices = vec4<u32>(0);
     indices[${nm}] = batch;
     indices[${ng}] = channel;`+(()=>{switch(i.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${n_}] = u32(r);
            indices[${ny}] = u32(c);
          }
        `;case"border":return`
          indices[${n_}] = u32(clamp(r, 0, H - 1));
          indices[${ny}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${n_}] = gs_reflect(r, border[1], border[3]);
          indices[${ny}] = gs_reflect(c, border[0], border[2]);
        `;default:throw Error(`padding mode ${i.paddingMode} is not supported`)}})()+`
    return ${t.getByIndices("indices")};
  }
`,nS=(t,r,i)=>(()=>{switch(i.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${nm}], indices[${ng}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${nm}], indices[${ng}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${nm}], indices[${ng}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${nm}], indices[${ng}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${nm}], indices[${ng}], border);

          let dx2 = ${r}(f32(x2) - x);
          let dx1 = ${r}(x - f32(x1));
          let dy2 = ${r}(f32(y2) - y);
          let dy1 = ${r}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${r}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${nm}], indices[${ng}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw Error(`mode ${i.mode} is not supported`)}})()+`${t.setByOffset("global_idx","result")}`,nT=(t,r)=>{let i=tz("x",t[0].dataType,t[0].dims.length),a=[t[1].dims[0],t[1].dims[1],t[1].dims[2]],n=tz("grid",t[1].dataType,a.length,2),s=[t[0].dims[0],t[0].dims[1],t[1].dims[1],t[1].dims[2]];"NHWC"===r.format&&(s=[t[0].dims[0],t[1].dims[1],t[1].dims[2],t[0].dims[3]],[nm,ng,n_,ny]=[0,3,1,2]);let o=tC("output",t[0].dataType,s.length),u=i.type.value,l=[{type:12,data:th.size(s)},...tw(t[0].dims,a,s)];return{name:"GridSample",shaderCache:{hint:`${r.cacheKey}`,inputDependencies:["type","type"]},getRunData:t=>{let r=th.size(s);return{outputs:[{dims:s,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:l}},getShaderSource:t=>`
  ${t.registerUniform("output_size","u32").declareVariables(i,n,o)}
  ${n$}
  ${nv(u)}
  ${nw(r)}
  ${nx(r)}
  ${nk(i,u,r)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${n_}]);
      let W_in = i32(uniforms.x_shape[${ny}]);

      ${0===r.alignCorners?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${o.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${nm}], indices[${n_}], indices[${ny}]);
      let nxy = ${n.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${nS(o,u,r)}
  }`}},nI=(t,r)=>{nb(t.inputs),t.compute(nT(t.inputs,r))},nE=t=>td({alignCorners:t.align_corners,mode:t.mode,paddingMode:t.padding_mode,format:t.format})}),ub=P(()=>{"use strict";oq(),oK(),oj(),oH(),o0(),oY(),oQ(),nz=(t,r)=>t.length>r&&t[r].dims.length>0?t[r]:void 0,nC=(t,r)=>{let i,a=t[0],n=nz(t,1),s=nz(t,2),o=nz(t,3),u=nz(t,4),l=nz(t,5),d=nz(t,6),p=nz(t,7);if(3!==a.dims.length&&5!==a.dims.length)throw Error("Input query is expected to have 3 or 5 dimensions");let c=a.dims[0],h=a.dims[1],f=3===a.dims.length?a.dims[2]:r.numHeads*a.dims[4],m=h,g=0,_=0,y=Math.floor(f/r.numHeads);if(d&&p&&th.size(d.dims)&&th.size(p.dims)){if(4!==d.dims.length)throw Error('Input "past_key" is expected to have 4 dimensions');if(d.dims[0]!==c||d.dims[1]!==r.numHeads||d.dims[3]!==y)throw Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[0]!==c||p.dims[1]!==r.numHeads||p.dims[3]!==y)throw Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[2]!==p.dims[2])throw Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(4!==p.dims.length)throw Error('Input "past_value" is expected to have 4 dimensions');g=d.dims[2],_=d.dims[2]}else if(d&&th.size(d.dims)||p&&th.size(p.dims))throw Error('Input "past_key" and "past_value" shall be both present or both absent');if(n&&th.size(n.dims)>0){if(3!==a.dims.length)throw Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(a.dims[0]!==n.dims[0])throw Error('Input "query" and "key" shall have same dim 0 (batch size)');if(3===n.dims.length){if(n.dims[2]!==a.dims[2])throw Error('Input "query" and "key" shall have same dim 2 (hidden_size)');i=2,m=n.dims[1]}else if(5===n.dims.length){if(n.dims[2]!==r.numHeads||2!==n.dims[3]||n.dims[4]!==y)throw Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(s)throw Error('Expect "value" be none when "key" has packed kv format.');i=5,m=n.dims[1]}else{if(n.dims[1]!==r.numHeads||n.dims[3]!==y)throw Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');i=0,m=n.dims[2]}}else{if(5!==a.dims.length)throw Error('Input "query" is expected to have 5 dimensions when key is empty');if(a.dims[2]!==r.numHeads||3!==a.dims[3])throw Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');i=3}if(o&&th.size(o.dims)>0){if(1!==o.dims.length)throw Error('Input "bias" is expected to have 1 dimension');if(n&&5===n.dims.length&&2===n.dims[3])throw Error("bias is not allowed for packed kv.")}let b=g+m,$=0;if(u&&th.size(u.dims)>0){$=8;let t=u.dims;throw 1===t.length?t[0]===c?$=1:t[0]===3*c+2&&($=3):2===t.length&&t[0]===c&&t[1]===b&&($=5),8===$?Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):Error("Mask not supported")}let v=!1,w=f;if(s&&th.size(s.dims)>0){if(3!==s.dims.length&&4!==s.dims.length)throw Error('Input "value" is expected to have 3 or 4 dimensions');if(a.dims[0]!==s.dims[0])throw Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(3===s.dims.length){if(m!==s.dims[1])throw Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');w=s.dims[2]}else{if(m!==s.dims[2])throw Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');w=s.dims[1]*s.dims[3],v=!0}}if(u&&th.size(u.dims)>0)throw Error("Key padding mask is not supported");if(l&&th.size(l.dims)>0){if(4!==l.dims.length)throw Error('Input "attention_bias" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==r.numHeads||l.dims[2]!==h||l.dims[3]!==b)throw Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:h,pastSequenceLength:g,kvSequenceLength:m,totalSequenceLength:b,maxSequenceLength:_,inputHiddenSize:0,hiddenSize:f,vHiddenSize:w,headSize:y,vHeadSize:Math.floor(w/r.numHeads),numHeads:r.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:r.maskFilterValue,maskType:$,scale:r.scale,broadcastResPosBias:!1,passPastInKv:v,qkvFormat:i}},nA=t=>td({...t}),nO=td({perm:[0,2,1,3]}),nR=(t,r,i,a,n,s,o)=>{let u=[a,n,s],l=th.size(u),d=[{type:12,data:l},{type:12,data:o},{type:12,data:s}];return t.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:r.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:t=>{let a=tC("qkv_with_bias",r.dataType,u),n=tz("qkv",r.dataType,u),s=tz("bias",i.dataType,u);return`
  ${t.registerUniforms([{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}]).declareVariables(n,s,a)}
  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`}},{inputs:[r,i],outputs:[-1]})[0]},nB=(t,r,i,a,n,s,o,u)=>{let l=s;if(!(o&&th.size(o.dims)>0))return 3===s.dims.length&&(l=s.reshape([r,a,i,n])),1===i||1===a?l:t.compute(tq(l,nO.perm),{inputs:[l],outputs:[-1]})[0];if(1===a)throw Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=(l=nR(t,s,o,r,a,i*n,u)).reshape([r,a,i,n]),1===i||1===a?l:t.compute(tq(l,nO.perm),{inputs:[l],outputs:[-1]})[0]},nD=(t,r)=>{let i=nC(t.inputs,r),a=t.inputs[0],n=nz(t.inputs,1),s=nz(t.inputs,2),o=nz(t.inputs,3),u=nz(t.inputs,4),l=nz(t.inputs,5),d=nz(t.inputs,6),p=nz(t.inputs,7);if(5===a.dims.length)throw Error("Packed QKV is not implemented");if(n?.dims.length===5)throw Error("Packed KV is not implemented");let c=n&&s&&4===n.dims.length&&4===s.dims.length,h=nB(t,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,a,o,0);if(c)return rM(t,h,n,s,u,void 0,d,p,l,i);if(!n||!s)throw Error("key and value must be provided");let f=nB(t,i.batchSize,i.numHeads,i.kvSequenceLength,i.headSize,n,o,i.hiddenSize),m=nB(t,i.batchSize,i.numHeads,i.kvSequenceLength,i.vHeadSize,s,o,2*i.hiddenSize);rM(t,h,f,m,u,void 0,d,p,l,i)}}),u$=P(()=>{"use strict";oq(),oK(),oj(),oY(),nM=t=>{if(!t||t.length<1)throw Error("too few inputs")},nN=(t,r)=>{let i=[],a=r.numOutputs;return t[1].dims[0]>0&&(t[1].getBigInt64Array().forEach(t=>i.push(Number(t))),a=i.length),td({numOutputs:a,axis:r.axis,splitSizes:i})},nP=t=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${t}u; i += 1u ) {
    if (index < ${tI("uniforms.size_in_split_axis","i",t)}) {
        return i;
    }
    }
    return ${t}u;
}`,nU=t=>{let r=t.length,i=[];for(let a=0;a<r;++a){let n=t[a].setByIndices("indices","input[global_idx]");1===r?i.push(n):0===a?i.push(`if (output_number == ${a}u) { ${n} }`):a===r-1?i.push(`else { ${n} }`):i.push(`else if (output_number == ${a}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${t[0].type.indices}, global_idx: u32) {
        ${i.join(`
`)}
      }`},nW=(t,r)=>{let i=t[0].dims,a=th.size(i),n=t[0].dataType,s=th.normalizeAxis(r.axis,i.length),o=Array(r.numOutputs),u=tz("input",n,i.length),l=Array(r.numOutputs),d=[],p=[],c=0,h=[{type:12,data:a}];for(let a=0;a<r.numOutputs;a++){c+=r.splitSizes[a],l[a]=c;let u=i.slice();u[s]=r.splitSizes[a],p.push(u),o[a]=tC(`output${a}`,n,u.length),d.push({dims:p[a],dataType:t[0].dataType})}return h.push({type:12,data:l},...tw(i,...p)),{name:"Split",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getShaderSource:t=>`
  ${t.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(u,...o)}
  ${nP(l.length)}
  ${nU(o)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${tI("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${u.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(a/64)},programUniforms:h})}},nq=(t,r)=>{nM(t.inputs);let i=1===t.inputs.length?r:nN(t.inputs,r);t.compute(nW(t.inputs,i),{inputs:[0]})},nL=t=>{let r=t.axis,i=t.splitSizes,a=t.numOutputs<0?i.length:t.numOutputs;if(a!==i.length)throw Error("numOutputs and splitSizes lengh must be equal");return td({axis:r,numOutputs:a,splitSizes:i})}}),uv=P(()=>{"use strict";oj(),o0(),ub(),u$(),oQ(),nV=(t,r)=>{if(r.doRotary)throw Error("GroupQuerryAttention do_rotary attribute is not supported");if(r.doRotary&&t.length<=7)throw Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let i=t[0],a=t[1],n=t[2],s=t[3],o=t[4];if(-1!==r.localWindowSize)throw Error("Local attention is not supported");if(0!==r.softcap)throw Error("Softcap is not supported");if(0!==r.rotaryInterleaved)throw Error("Rotary interleaved is not supported");if(r.smoothSoftmax)throw Error("Smooth softmax is not supported");if(3!==i.dims.length&&5!==i.dims.length)throw Error("Input query is expected to have 3 or 5 dimensions");let u=i.dims[0],l=i.dims[1],d=3===i.dims.length?i.dims[2]:r.numHeads*i.dims[4],p=l,c=0,h=!a||0===a.dims.length,f=Math.floor(h?d/(r.numHeads+2*r.kvNumHeads):d/r.numHeads);h&&(d=f*r.numHeads);let m=s&&0!==s.dims.length,g=o&&0!==o.dims.length;if(m&&4===s.dims.length&&s.dims[0]===u&&s.dims[1]!==r.kvNumHeads&&s.dims[2]===r.kvNumHeads&&s.dims[3]===f)throw Error("BSNH pastKey/pastValue is not supported");if(m&&g){if(4!==s.dims.length)throw Error('Input "past_key" is expected to have 4 dimensions');if(4!==o.dims.length)throw Error('Input "past_value" is expected to have 4 dimensions');c=s.dims[2]}else if(m||g)throw Error('Input "past_key" and "past_value" shall be both present or both absent');let _=1;if(a&&a.dims.length>0){if(3!==i.dims.length)throw Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==a.dims[0])throw Error('Input "query" and "key" shall have same dim 0 (batch size)');if(3===a.dims.length){if(i.dims[2]%a.dims[2]!=0)throw Error('Dimension 2 of "query" should be a multiple of "key"');p=a.dims[1]}else if(5===a.dims.length){if(a.dims[2]!==r.numHeads||2!==a.dims[3]||a.dims[4]!==f)throw Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw Error('Expect "value" be none when "key" has packed kv format.');p=a.dims[1]}else{if(a.dims[1]!==r.numHeads||a.dims[3]!==f)throw Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');p=a.dims[2]}}else{if(3!==i.dims.length&&5!==i.dims.length)throw Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(5===i.dims.length&&(i.dims[2]!==r.numHeads||3!==i.dims[3]))throw Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');_=3}let y=!1,b=r.kvNumHeads?f*r.kvNumHeads:d;if(n&&n.dims.length>0){if(3!==n.dims.length&&4!==n.dims.length)throw Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==n.dims[0])throw Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(3===n.dims.length){if(p!==n.dims[1])throw Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');b=n.dims[2]}else{if(p!==n.dims[2])throw Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');b=n.dims[1]*n.dims[3],y=!0}}let $=t.length>4?t[5]:void 0;if($&&1!==$.dims.length&&$.dims[0]!==u)throw Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:u,sequenceLength:l,pastSequenceLength:c,kvSequenceLength:p,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:d,vHiddenSize:b,headSize:f,vHeadSize:Math.floor(b/r.kvNumHeads),numHeads:r.numHeads,kvNumHeads:r.kvNumHeads,nReps:r.numHeads/r.kvNumHeads,pastPresentShareBuffer:!1,maskType:0,scale:r.scale,broadcastResPosBias:!1,passPastInKv:y,qkvFormat:_}},nG=td({perm:[0,2,1,3]}),nH=(t,r,i)=>{let a=r,n=i.kvNumHeads;return 3===r.dims.length&&0!==i.kvSequenceLength&&(a=r.reshape([i.batchSize,i.kvSequenceLength,n,i.headSize]),a=t.compute(tq(a,nG.perm),{inputs:[a],outputs:[-1]})[0]),a},nF=(t,r)=>{let i=nV(t.inputs,r);if(5===t.inputs[0].dims.length)throw Error("Packed QKV is not implemented");if(t.inputs[1]?.dims.length===5)throw Error("Packed KV is not implemented");let a=t.inputs[0],n=t.inputs[1]&&t.inputs[1].dims.length>0?t.inputs[1]:void 0,s=t.inputs[2]&&t.inputs[2].dims.length>0?t.inputs[2]:void 0,o=t.inputs[3]&&0!==t.inputs[3].dims.length?t.inputs[3]:void 0,u=t.inputs[4]&&0!==t.inputs[4].dims.length?t.inputs[4]:void 0,l=t.inputs.length>4?t.inputs[5]:void 0,d=t.inputs.length>5?t.inputs[6]:void 0,p=i.kvNumHeads?i.kvNumHeads:i.numHeads,c=td({axis:2,numOutputs:3,splitSizes:[i.numHeads*i.headSize,p*i.headSize,p*i.headSize]}),[h,f,m]=n||s?[a,n,s]:t.compute(nW([a],c),{inputs:[a],outputs:[-1,-1,-1]}),g=nB(t,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,h,void 0,0);rM(t,g,nH(t,f,i),nH(t,m,i),void 0,void 0,o,u,void 0,i,l,d)}}),uw=P(()=>{"use strict";oq(),oK(),oQ(),oY(),nj=(t,r,i,a,n,s,o,u)=>{let l=tx(s),d=1===l?"f32":`vec${l}f`,p=1===l?"vec2f":`mat2x${l}f`,c=n*o,h=64;1===c&&(h=256);let f=[n,o,s/l],m=[n,o,2],g=[];return g.push(...tw(f,m)),t.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${u};${h}`,inputDependencies:["rank","type","type"]},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:c},programUniforms:g}),getShaderSource:t=>{let n=tz("x",r.dataType,3,l),s=[n,tz("scale",i.dataType,i.dims),tz("bias",a.dataType,a.dims),tC("output",1,3,2)];return`
  var<workgroup> workgroup_shared : array<${p}, ${h}>;
  const workgroup_size = ${h}u;
  ${t.declareVariables(...s)}
  ${t.mainStart(h)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${n.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${p}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${tT("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${tT("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`}},{inputs:[r,i,a],outputs:[-1]})[0]},nK=(t,r,i)=>{let a=r[0].dims,n=a[0],s=a[1],o=th.sizeFromDimension(a,2),u=tx(o),l=th.size(a)/u,d=nj(t,r[0],r[1],r[2],n,o,s,i.epsilon),p=[n,s,o/u],c=[n,s];t.compute({name:"InstanceNormalization",shaderCache:{hint:`${u}`,inputDependencies:["type","none"]},getRunData:()=>({outputs:[{dims:a,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:[{type:12,data:l},...tw(p,c,p)]}),getShaderSource:t=>{let i=tz("x",r[0].dataType,p.length,u),a=tz("scale_shift",1,c.length,2),n=tC("output",r[0].dataType,p.length,u),s=[i,a,n];return`
  ${t.registerUniform("output_size","u32").declareVariables(...s)}
  ${t.mainStart()}
  ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${n.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${a.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${i.getByOffset("global_idx")} * ${n.type.value}(scale_shift.x) + ${n.type.value}(scale_shift.y);
      ${n.setByOffset("global_idx","value")};
  }`}},{inputs:[r[0],d]})},nY=(t,r,i)=>{let a=r[0].dims,n=a[0],s=a[a.length-1],o=th.sizeFromDimension(a,1)/s,u=tx(s),l=th.size(a)/u,d=[{type:12,data:o},{type:12,data:Math.floor(s/u)}],p=!1,c=[0,a.length-1];for(let t=0;t<a.length-2;t++)p=p||1!==a[t+1],c.push(t+1);let h=(p=p&&1!==a[a.length-1])?t.compute(tq(t.inputs[0],c),{inputs:[t.inputs[0]],outputs:[-1]})[0]:t.inputs[0].reshape(Array.from({length:a.length},(t,r)=>a[c[r]])),f=nj(t,h,r[1],r[2],n,o,s,i.epsilon);t.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:a,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:t=>{let i=t$(r[0].dataType),n=1===u?"vec2f":`mat${u}x2f`,s=t=>{let r=0===t?"x":"y",a=1===u?"f32":`vec${u}f`;switch(u){case 1:return`${i}(${a}(scale.${r}))`;case 2:return`vec2<${i}>(${a}(scale[0].${r}, scale[1].${r}))`;case 4:return`vec4<${i}>(${a}(scale[0].${r}, scale[1].${r}, scale[2].${r}, scale[3].${r}))`;default:throw Error(`Not supported compoents ${u}`)}},o=tz("input",r[0].dataType,r[0].dims,u),l=tC("output",r[0].dataType,a,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${o.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${n}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${l.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${t.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${s(0)}, ${s(1)});
  }`}},{inputs:[r[0],f]})},nQ=(t,r)=>{"NHWC"===r.format?nY(t,t.inputs,r):nK(t,t.inputs,r)}}),ux=P(()=>{"use strict";oq(),oK(),oY(),nZ=t=>{if(!t||t.length<2)throw Error("layerNorm requires at least 2 inputs.")},nX=(t,r,i)=>{let a=r.simplified,n=t[0].dims,s=t[1],o=!a&&t[2],u=th.normalizeAxis(r.axis,n.length),l=th.sizeToDimension(n,u),d=th.sizeFromDimension(n,u),p=th.size(s.dims),c=o?th.size(o.dims):0;if(p!==d||o&&c!==d)throw Error(`Size of X.shape()[axis:] == ${d}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${p} and bias size of ${c}`);let h=[];for(let t=0;t<n.length;++t)t<u?h.push(n[t]):h.push(1);let f=tx(d),m=["type","type"],g=[{type:12,data:l},{type:1,data:d},{type:12,data:Math.floor(d/f)},{type:1,data:r.epsilon}];o&&m.push("type");let _=i>1,y=i>2,b=[{dims:n,dataType:t[0].dataType}];return _&&b.push({dims:h,dataType:1}),y&&b.push({dims:h,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${f};${i};${a}`,inputDependencies:m},getRunData:()=>({outputs:b,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:g}),getShaderSource:r=>{let i=t$(t[0].dataType),u=[tz("x",t[0].dataType,t[0].dims,f),tz("scale",s.dataType,s.dims,f)];return o&&u.push(tz("bias",o.dataType,o.dims,f)),u.push(tC("output",t[0].dataType,n,f)),_&&u.push(tC("mean_data_output",1,h)),y&&u.push(tC("inv_std_output",1,h)),`
  ${r.registerUniforms([{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}]).declareVariables(...u)}
  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${tk("f32",f)};
    var mean_square_vector = ${tk("f32",f)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${tS(i,f,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${tT("mean_vector",f)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${tT("mean_square_vector",f)} / uniforms.norm_size ${a?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${tS(i,f,"x[j + offset]")};
      let f32scale = ${tS(i,f,"scale[j]")};
      output[j + offset] = ${u[0].type.value}((f32input ${a?"":"- mean"}) * inv_std_dev * f32scale
        ${o?`+ ${tS(i,f,"bias[j]")}`:""}
      );
    }

    ${_?"mean_data_output[global_idx] = mean":""};
    ${y?"inv_std_output[global_idx] = inv_std_dev":""};
  }`}}},nJ=(t,r)=>{nZ(t.inputs),t.compute(nX(t.inputs,r,t.outputCount))}}),uk=P(()=>{"use strict";oK(),ue(),ut(),n0=t=>{if(!t||2!==t.length)throw Error("MatMul requires 2 inputs.");if(t[0].dims[t[0].dims.length-1]!==t[1].dims[t[1].dims.length-2])throw Error("shared dimension does not match.")},n1=t=>{n0(t.inputs);let r=tc.calcShape(t.inputs[0].dims,t.inputs[1].dims,!0);if(!r)throw Error("Can't use matmul on the given tensors");let i=r[r.length-1],a=t.inputs[0].dims[t.inputs[0].dims.length-1];if(i<8&&a<8)t.compute(i6(t.inputs,{activation:""},r));else{let n=r[r.length-2],s=th.size(t.inputs[0].dims.slice(0,-2)),o=th.size(t.inputs[1].dims.slice(0,-2));if(1!==s&&1===n&&1===o){let n=t.inputs[0].reshape([1,s,a]),o=t.inputs[1].reshape([1,a,i]),u=[1,s,i],l=[n,o];t.compute(ai(l,{activation:""},r,u),{inputs:l})}else t.compute(ai(t.inputs,{activation:""},r))}}}),uS=P(()=>{"use strict";oq(),oK(),oj(),oY(),n2=(t,r)=>{if(t.length<3||t.length>4)throw Error("MatMulNBits requires 3 or 4 inputs");let i=t[0],a=i.dims.length;if(i.dims[a-1]!==r.k)throw Error("The last dim of input shape does not match the k value");let n=Math.floor((r.k+r.blockSize-1)/r.blockSize),s=r.blockSize/8*r.bits,o=t[1];if(!th.areEqual(o.dims,[r.n,n,s]))throw Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=t[2].dims;if(th.size(u)!==r.n*n)throw Error("scales input size error.");if(4===t.length){let i=t[3].dims,a=r.bits>4?r.n*n:r.n*Math.floor((n+1)/2);if(th.size(i)!==a)throw Error("zeroPoints input size error.")}},n3=(t,r)=>{let i=t[0].dims,a=i.length,n=i[a-2],s=r.k,o=r.n,u=i.slice(0,a-2),l=th.size(u),d=t[1].dims[2]/4,p=t[0].dataType,c=tx(r.k),h=tx(d),f=tx(o),m=u.concat([n,o]),g=n>1&&o/f%2==0?2:1,_=th.size(m)/f/g,y=[],b=[l,n,s/c],$=th.convertShape(t[1].dims).slice();$.splice(-1,1,d/h),y.push(...tw(b)),y.push(...tw($)),y.push(...tw(t[2].dims)),4===t.length&&y.push(...tw(th.convertShape(t[3].dims)));let v=[l,n,o/f];return y.push(...tw(v)),{name:"MatMulNBits",shaderCache:{hint:`${r.blockSize};${r.bits};${c};${h};${f};${g};64`,inputDependencies:Array(t.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:p}],dispatchGroup:{x:_},programUniforms:y}),getShaderSource:i=>{let a=b.length,n=tz("a",t[0].dataType,a,c),s=tz("b",12,$.length,h),o=tz("scales",t[2].dataType,t[2].dims.length),u=[n,s,o],l=4===t.length?tz("zero_points",12,t[3].dims.length):void 0;l&&u.push(l);let p=v.length,m=tC("output",t[0].dataType,p,f),_=t$(t[0].dataType),y=(()=>{switch(c){case 1:return`array<${_}, 8>`;case 2:return`mat4x2<${_}>`;case 4:return`mat2x4<${_}>`;default:throw Error(`${c}-component is not supported.`)}})();return`
        var<workgroup> workgroup_shared: array<${m.type.value}, ${64*g}>;
        ${i.declareVariables(...u,m)}
        ${i.mainStart([64,1,1])}
          let output_indices = ${m.offsetToIndices(`(global_idx / 64) * ${g}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += 64) {
            //process one block
            var word_offset: u32 = block * ${r.blockSize/c};
            ${(()=>{let t=`
            var col_index = col * ${f};
            ${l?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${_}(8);`}
            `;for(let r=0;r<f*g;r++)t+=`
            let scale${r} = ${o.getByOffset("col_index * nBlocksPerCol + block")};
            ${l?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${l.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${r} = ${_}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return t})()}
            for (var word: u32 = 0; word < ${d}; word += ${h}) {
              ${(()=>{let t=`col_index = col * ${f};`;for(let r=0;r<f*g;r++)t+=`
            let b${r}_data = ${s.getByIndices(`${s.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return t+`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${y};
            var b_dequantized_values: ${y};`})()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${(()=>{let t=`
          // reuse a data
            var input_offset = ${n.indicesToOffset(`${n.type.indices}(batch, row, word_offset)`)};
            var a_data: ${y};
            for (var j: u32 = 0; j < ${8/c}; j++) {
              a_data[j] = ${n.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let r=0;r<f*g;r++)t+=`
            b_value = ${1===h?`b${r}_data`:`b${r}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${y}(${Array.from({length:4},(t,r)=>`${_}(b_value_lower[${r}]), ${_}(b_value_upper[${r}])`).join(", ")});
            b_dequantized_values = ${1===c?`${y}(${Array.from({length:8},(t,i)=>`(b_quantized_values[${i}] - ${l?`zero_point${r}`:"zero_point"}) * scale${r}`).join(", ")});`:`(b_quantized_values - ${y}(${Array(8).fill(`${l?`zero_point${r}`:"zero_point"}`).join(",")})) * scale${r};`};
            workgroup_shared[local_id.x * ${g} + ${Math.floor(r/f)}]${f>1?`[${r%f}]`:""} += ${Array.from({length:8/c},(t,r)=>`${1===c?`a_data[${r}] * b_dequantized_values[${r}]`:`dot(a_data[${r}], b_dequantized_values[${r}])`}`).join(" + ")};
          `;return t})()}
                word_offset += ${8/c};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${g}) {
            var output_value: ${m.type.value} = ${m.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < 64u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${g};
            }
            ${m.setByIndices(`${m.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`}}},n4=(t,r)=>{let i=t[0].dims,a=i.length,n=i[a-2],s=r.k,o=r.n,u=i.slice(0,a-2),l=th.size(u),d=t[1].dims[2]/4,p=t[0].dataType,c=tx(r.k),h=tx(d),f=u.concat([n,o]),m=o%8==0?8:o%4==0?4:1,g=128/m,_=g*h*8,y=_/c,b=_/r.blockSize,$=th.size(f)/m,v=[],w=[l,n,s/c],x=th.convertShape(t[1].dims).slice();x.splice(-1,1,d/h),v.push(...tw(w)),v.push(...tw(x)),v.push(...tw(t[2].dims)),4===t.length&&v.push(...tw(th.convertShape(t[3].dims)));let k=[l,n,o];return v.push(...tw(k)),{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${r.blockSize};${c};${h};${g};${m}`,inputDependencies:Array(t.length).fill("rank")},getRunData:()=>({outputs:[{dims:f,dataType:p}],dispatchGroup:{x:$},programUniforms:v}),getShaderSource:i=>{let a=w.length,n=tz("a",t[0].dataType,a,c),s=tz("b",12,x.length,h),o=tz("scales",t[2].dataType,t[2].dims.length),u=[n,s,o],l=4===t.length?tz("zero_points",12,t[3].dims.length):void 0;l&&u.push(l);let d=k.length,p=tC("output",t[0].dataType,d),f=t$(t[0].dataType);return`
        var<workgroup> sub_a: array<${n.type.value}, ${y}>;
        var<workgroup> inter_results: array<array<${p.type.value}, ${g}>, ${m}>;
        ${i.declareVariables(...u,p)}
        ${i.mainStart([g,m,1])}
          let output_indices = ${p.offsetToIndices(`workgroup_index * ${m}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${b} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${y};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${y}; a_offset += 128)
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${n.getByIndices(`${n.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${n.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${b} + local_id.x;
            ${l?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${l.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${f}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${f}(8);`}
            let scale = ${o.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${s.getByIndices(`${s.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${r.blockSize/c};
            for (var i: u32 = 0; i < ${h}; i++) {
              ${(()=>{switch(c){case 1:return`
          let a_data0 = vec4<${f}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${f}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${f}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${f}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw Error(`${c}-component is not supported.`)}})()}
              let b_value = ${1===h?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${f}>(${Array.from({length:4},(t,r)=>`${f}(b_value_lower[${r}]), ${f}(b_value_upper[${r}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${f}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(t,r)=>`dot(a_data${r}, b_dequantized_values[${r}])`).join(" + ")};
              word_offset += ${8/c};
            }
            workgroupBarrier();
          }

          if (local_idx < ${m}) {
            var output_value: ${p.type.value} = ${p.type.value}(0);
            for (var b = 0u; b < ${g}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${p.setByIndices(`${p.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`}}},n6=(t,r)=>{n2(t.inputs,r),32===r.blockSize&&t.adapterInfo.isVendor("intel")&&t.adapterInfo.isArchitecture("gen-12lp")?t.compute(n4(t.inputs,r)):t.compute(n3(t.inputs,r))},n8=t=>td(t)}),uT=P(()=>{"use strict";oq(),oK(),oY(),n5=t=>{if(!t||t.length<1)throw Error("Too few inputs");if(1!==t[0].dataType&&10!==t[0].dataType)throw Error("Input type must be float or float16.");if(t.length>=2){let r=2*t[0].dims.length===t[1].dims[0];if(4===t.length&&(r=2*t[3].dims[0]===t[1].dims[0]),!r)throw Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},n9=(t,r,i)=>{let a="";for(let n=r-1;n>=0;--n)a+=`
            k = i32(${t.indicesGet("indices",n)}) - ${tI("uniforms.pads",n,i)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${tI("uniforms.x_shape",n,r)})) {
              break;
            }
            offset += k * i32(${tI("uniforms.x_strides",n,r)});
        `;return`
          value = ${t.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${a}
            value = x[offset];
          }
      `},n7=(t,r,i)=>{let a="";for(let n=r-1;n>=0;--n)a+=`
                k = i32(${t.indicesGet("indices",n)}) - ${tI("uniforms.pads",n,i)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${tI("uniforms.x_shape",n,r)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${tI("uniforms.x_shape",n,r)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${tI("uniforms.x_strides",n,r)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},se=(t,r,i)=>{let a="";for(let n=r-1;n>=0;--n)a+=`
                k = i32(${t.indicesGet("indices",n)}) - ${tI("uniforms.pads",n,i)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${tI("uniforms.x_shape",n,r)})) {
                  k = i32(${tI("uniforms.x_shape",n,r)}) - 1;
                }
                offset += k * i32(${tI("uniforms.x_strides",n,r)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},st=(t,r,i)=>{let a="";for(let n=r-1;n>=0;--n)a+=`
                k = i32(${t.indicesGet("indices",n)}) - ${tI("uniforms.pads",n,i)};
                if (k < 0)  {
                  k += i32(${tI("uniforms.x_shape",n,r)}]);
                }
                if (k >= i32(${tI("uniforms.x_shape",n,r)})) {
                  k -= i32(${tI("uniforms.x_shape",n,r)});
                }
                offset += k * i32(${tI("uniforms.x_strides",n,r)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},sr=(t,r,i)=>{switch(i.mode){case 0:return n9(t,r,i.pads.length);case 1:return n7(t,r,i.pads.length);case 2:return se(t,r,i.pads.length);case 3:return st(t,r,i.pads.length);default:throw Error("Invalid mode")}},si=(t,r)=>{let i=th.padShape(t[0].dims.slice(),r.pads),a=t[0].dims,n=[{type:12,data:th.size(i)},{type:6,data:r.pads}],s=t.length>=3&&t[2].data;return 0===r.mode&&n.push({type:s?t[2].dataType:1,data:r.value}),n.push(...tw(t[0].dims,i)),{name:"Pad",shaderCache:{hint:`${r.mode}${s}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(th.size(i)/64)},programUniforms:n}),getShaderSource:n=>{let o=tC("output",t[0].dataType,i.length),u=tz("x",t[0].dataType,a.length),l=u.type.value,d=sr(o,a.length,r),p=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:r.pads.length}];return 0===r.mode&&p.push({name:"constant_value",type:s?l:"f32"}),`
            ${n.registerUniforms(p).declareVariables(u,o)}
            ${n.mainStart()}
            ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${o.offsetToIndices("global_idx")};

            var value = ${l}(0);
            ${d}
            output[global_idx] = value;
        }`}}},sa=(t,r)=>{if(!(t.length>1))return r;{let i=t[1].getBigInt64Array(),a=t.length>=3&&t[2].data?10===t[2].dataType?t[2].getUint16Array()[0]:t[2].getFloat32Array()[0]:0,n=t[0].dims.length,s=new Int32Array(2*n).fill(0);if(t.length>=4){let r=t[3].getBigInt64Array();for(let t=0;t<r.length;t++)s[Number(r[t])]=Number(i[t]),s[Number(r[t])+n]=Number(i[t+r.length])}else i.forEach((t,r)=>s[Number(r)]=Number(t));let o=[];return s.forEach(t=>o.push(t)),{mode:r.mode,value:a,pads:o}}},sn=(t,r)=>{n5(t.inputs);let i=sa(t.inputs,r);t.compute(si(t.inputs,i),{inputs:[0]})}}),uI=P(()=>{"use strict";eo(),oq(),oK(),oY(),ss=t=>{if(d.webgpu.validateInputContent&&(!t||1!==t.length))throw Error("Pool ops requires 1 input.")},so=(t,r,i)=>{let a="NHWC"===r.format,n=t.dims.slice();a&&n.splice(1,0,n.pop());let s=Object.hasOwnProperty.call(r,"dilations"),o=r.kernelShape.slice(),u=r.strides.slice(),l=s?r.dilations.slice():[],d=r.pads.slice();tf.adjustPoolAttributes(i,n,o,u,l,d);let p=tf.computePoolOutputShape(i,n,u,l,o,d,r.autoPad),c=Object.assign({},r);s?Object.assign(c,{kernelShape:o,strides:u,pads:d,dilations:l,cacheKey:r.cacheKey}):Object.assign(c,{kernelShape:o,strides:u,pads:d,cacheKey:r.cacheKey});let h=p.slice();return h.push(h.splice(1,1)[0]),[c,a?h:p]},su=(t,r)=>{let i="NHWC"===r.format,a=[{type:12,data:th.size(t)},{type:12,data:th.size(r.kernelShape)}],n=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(r.kernelShape.length<=2){let t=r.kernelShape[r.kernelShape.length-1],i=r.strides[r.strides.length-1],s=r.pads[r.pads.length/2-1],o=r.pads[r.pads.length-1],u=!!(s+o);a.push({type:12,data:t},{type:12,data:i},{type:12,data:s},{type:12,data:o}),n.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let l=!1;if(2===r.kernelShape.length){let t=r.kernelShape[r.kernelShape.length-2],i=r.strides[r.strides.length-2],s=r.pads[r.pads.length/2-2],o=r.pads[r.pads.length-2];l=!!(s+o),a.push({type:12,data:t},{type:12,data:i},{type:12,data:s},{type:12,data:o}),n.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,n,!0,u,l]}{if(i)throw Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let t=th.computeStrides(r.kernelShape);return a.push({type:12,data:t},{type:12,data:r.pads},{type:12,data:r.strides}),n.push({name:"kernelStrides",type:"u32",length:t.length},{name:"pads",type:"u32",length:r.pads.length},{name:"strides",type:"u32",length:r.strides.length}),[a,n,!!r.pads.reduce((t,r)=>t+r),!1,!1]}},sl=(t,r,i,a,n,s,o,u,l,d,p,c)=>{let h="NHWC"===n.format,f=r.type.value,m=tC("output",r.type.tensor,a);if(n.kernelShape.length<=2){let a="",d="",g="",_=i-(h?2:1);if(a=p?`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${_}] = indices[${_}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${_}] < 0 || xIndices[${_}]
                      >= uniforms.x_shape[${_}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${r.indicesToOffset("xIndices")}];
                  ${s}
                }`:`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${_}] = indices[${_}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${r.indicesToOffset("xIndices")}];
                  ${s}
                }`,2===n.kernelShape.length){let t=i-(h?3:2);d=c?`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${t}] = indices[${t}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${t}] < 0 || xIndices[${t}] >= uniforms.x_shape[${t}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${t}] = indices[${t}] * uniforms.sh - uniforms.phStart + j;
                `,g=`
              }
            `}return`
            ${t.registerUniforms(l).declareVariables(r,m)}

            ${t.mainStart()}
              ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var value = ${f}(${u});
              var pad = 0;
              ${d}
              ${a}
              ${g}
              ${o}

              output[global_idx] = value;
            }`}{if(h)throw Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let a=n.kernelShape.length,p=n.pads.length,c="";return c=d?`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${r.indicesToOffset("xIndices")}];
                ${s}
              }`:`
              }
              let x_val = x[${r.indicesToOffset("xIndices")}];
              ${s}
            `,`
            ${t.registerUniforms(l).declareVariables(r,m)}

            ${t.mainStart()}
              ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var offsets: array<u32, ${a}>;

              var value = ${f}(${u});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${a-1}u; j++) {
                  offsets[j] = offset / ${tI("uniforms.kernelStrides","j",a)};
                  offset -= offsets[j] * ${tI("uniforms.kernelStrides","j",a)};
                }
                offsets[${a-1}] = offset;

                isPad = false;
                for (var j = ${i-a}u; j < ${i}u; j++) {
                  xIndices[j] = indices[j] * ${tI("uniforms.strides",`j - ${i-a}u`,a)}
                    + offsets[j - ${i-a}u] - ${tI("uniforms.pads","j - 2u",p)};
                  ${c}
              }
              ${o}

              output[global_idx] = value;
            }`}},sd=t=>`${t.format};${t.ceilMode};${t.autoPad};${t.kernelShape.length}`,sp=t=>`${sd(t)};${t.countIncludePad}`,sc=t=>`${sd(t)};${t.storageOrder};${t.dilations}`,sh=t=>({format:t.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][t.auto_pad],ceilMode:t.ceil_mode,kernelShape:t.kernel_shape,strides:t.strides,pads:t.pads}),sf=(t,r,i,a)=>{let[n,s]=so(r,a,i),o=tz("x",r.dataType,r.dims.length),u=o.type.value,l="";n.countIncludePad?l+=`value /= ${u}(uniforms.kernelSize);`:l+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[d,p,c,h,f]=su(s,n);return d.push(...tw(r.dims,s)),{name:t,shaderCache:{hint:`${a.cacheKey};${c};${h};${f}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:s,dataType:r.dataType}],dispatchGroup:{x:Math.ceil(th.size(s)/64)},programUniforms:d}),getShaderSource:t=>sl(t,o,r.dims.length,s.length,n,"value += x_val;",l,0,p,c,h,f)}},sm=t=>{let r=0!==t.count_include_pad,i=sh(t);if(0!==i.ceilMode)throw Error("using ceil() in shape computation is not yet supported for AveragePool");let a={countIncludePad:r,...i,cacheKey:""};return{...a,cacheKey:sp(a)}},sg=(t,r)=>{ss(t.inputs),t.compute(sf("AveragePool",t.inputs[0],!1,r))},s_={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},sy=t=>{let r=t.format;return{format:r,...s_,cacheKey:r}},sb=(t,r)=>{ss(t.inputs),t.compute(sf("GlobalAveragePool",t.inputs[0],!0,r))},s$=(t,r,i,a)=>{let[n,s]=so(r,a,i),o=`
      value = max(x_val, value);
    `,u=tz("x",r.dataType,r.dims.length),[l,d,p,c,h]=su(s,n);return l.push(...tw(r.dims,s)),{name:t,shaderCache:{hint:`${a.cacheKey};${p};${c};${h}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:s,dataType:r.dataType}],dispatchGroup:{x:Math.ceil(th.size(s)/64)},programUniforms:l}),getShaderSource:t=>sl(t,u,r.dims.length,s.length,n,o,"",10===r.dataType?-65504:-1e5,d,p,c,h)}},sv=(t,r)=>{ss(t.inputs),t.compute(s$("MaxPool",t.inputs[0],!1,r))},sw=t=>{let r=t.storage_order,i=t.dilations,a=sh(t);if(0!==r)throw Error("column major storage order is not yet supported for MaxPool");if(0!==a.ceilMode)throw Error("using ceil() in shape computation is not yet supported for MaxPool");let n={storageOrder:r,dilations:i,...a,cacheKey:""};return{...n,cacheKey:sc(n)}},sx=t=>{let r=t.format;return{format:r,...s_,cacheKey:r}},sk=(t,r)=>{ss(t.inputs),t.compute(s$("GlobalMaxPool",t.inputs[0],!0,r))}}),uE=P(()=>{"use strict";oq(),oK(),oj(),oY(),sS=(t,r)=>{if(t.length<2||t.length>3)throw Error("DequantizeLinear requires 2 or 3 inputs.");if(3===t.length&&t[1].dims===t[2].dims)throw Error("x-scale and x-zero-point must have the same shape.");if(3===t.length&&t[0].dataType!==t[2].dataType)throw Error("x and x-zero-point must have the same data type.");if(6===t[0].dataType&&t.length>2)throw Error("In the case of dequantizing int32 there is no zero point.");if(0!==t[1].dims.length&&1!==t[1].dims.length&&t[1].dims.length!==t[0].dims.length)throw Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(t.length>2){if(t[0].dataType!==t[2].dataType)throw Error("x and x-zero-point must have the same data type.");if(t[1].dims.length!==t[2].dims.length)throw Error("scale and zero-point inputs must have the same rank.");if(!t[1].dims.map((r,i)=>r===t[2].dims[i]).reduce((t,r)=>t&&r,!0))throw Error("scale and zero-point inputs must have the same shape.")}if(r.blockSize>0){if(0===t[1].dims.length||1===t[1].dims.length&&1===t[1].dims[0])throw Error("blockSize must be set only for block quantization.");if(!t[1].dims.map((i,a)=>a===r.axis||i===t[0].dims[a]).reduce((t,r)=>t&&r,!0))throw Error("For block qunatization, scale input shape to match the input shape except for the axis");if(t[1].dims.length!==t[0].dims.length)throw Error("For block qunatization the scale input rank must be the same as the x rank.");let i=t[0].dims[r.axis],a=t[1].dims[r.axis];if(r.blockSize<Math.ceil(i/a)||r.blockSize>Math.ceil(i/(a-1)-1))throw Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},sT=(t,r)=>{let i=th.normalizeAxis(r.axis,t[0].dims.length),a=t[0].dataType,n=3===a,s=t[0].dims,o=t[1].dataType,u=th.size(s),l=3===a||2===a,d=l?[Math.ceil(th.size(t[0].dims)/4)]:t[0].dims,p=t[1].dims,c=t.length>2?t[2]:void 0,h=c?l?[Math.ceil(th.size(c.dims)/4)]:c.dims:void 0,f=0===p.length||1===p.length&&1===p[0],m=!1===f&&1===p.length,g=tx(u),_=f&&(!l||4===g),y=_?g:1,b=tz("input",l?12:a,d.length,_&&!l?g:1),$=tz("scale",o,p.length),v=c?tz("zero_point",l?12:a,h.length):void 0,w=tC("output",o,s.length,y),x=[b,$];v&&x.push(v);let k=[d,p];c&&k.push(h);let S=[{type:12,data:u/y},{type:12,data:i},{type:12,data:r.blockSize},...tw(...k,s)];return{name:"DequantizeLinear",shaderCache:{hint:r.cacheKey,inputDependencies:v?["rank","rank","rank"]:["rank","rank"]},getShaderSource:t=>`
      ${t.registerUniforms([{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}]).declareVariables(...x,w)}
      ${t.mainStart()}
          ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${w.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${b.getByOffset("global_idx / 4")};
            let x_vec = ${n?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${1===y?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${b.getByOffset("global_idx")};`};

          // Set scale input
          ${f?`let scale_value= ${$.getByOffset("0")}`:m?`
            let scale_index = ${w.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${$.getByOffset("scale_index")};`:`
            var scale_indices: ${$.type.indices} = output_indices;
            let index = ${$.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${$.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${$.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${v?f?l?`
                let zero_point_input = ${v.getByOffset("0")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${v.getByOffset("0")}`:m?l?`
                let zero_point_index = ${w.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${v.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${w.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${v.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${$.indicesToOffset("scale_indices")};
                let zero_point_input = ${v.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${v.getByIndices("scale_indices")};`:`let zero_point_value = ${l?n?"i32":"u32":b.type.value}(0);`};
      // Compute and write output
      ${w.setByOffset("global_idx",`${w.type.value}(x_value - zero_point_value) * scale_value`)};
      }`,getRunData:()=>({outputs:[{dims:s,dataType:o}],dispatchGroup:{x:Math.ceil(u/y/64),y:1,z:1},programUniforms:S})}},sI=(t,r)=>{sS(t.inputs,r),t.compute(sT(t.inputs,r))},sE=t=>td({axis:t.axis,blockSize:t.blockSize})}),uz=P(()=>{"use strict";eo(),oq(),oY(),sz=(t,r,i)=>{if(t===r||t<r&&i<0||t>r&&i>0)throw Error("Range these inputs' contents are invalid.")},sC=(t,r,i,a)=>{let n=Math.abs(Math.ceil((r-t)/i)),s=[n],o=[{type:12,data:n},{type:a,data:t},{type:a,data:i},...tw(s)];return{name:"Range",shaderCache:{hint:`${a}`},getShaderSource:t=>{let r=tC("output",a,s.length),i=r.type.value;return`
        ${t.registerUniforms([{name:"outputSize",type:"u32"},{name:"start",type:i},{name:"delta",type:i}]).declareVariables(r)}
        ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${i}(global_idx) * uniforms.delta;
      }`},getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:o})}},sA=t=>{let r=0,i=0,a=0;6===t.inputs[0].dataType?(r=t.inputs[0].getInt32Array()[0],i=t.inputs[1].getInt32Array()[0],a=t.inputs[2].getInt32Array()[0]):1===t.inputs[0].dataType&&(r=t.inputs[0].getFloat32Array()[0],i=t.inputs[1].getFloat32Array()[0],a=t.inputs[2].getFloat32Array()[0]),d.webgpu.validateInputContent&&sz(r,i,a),t.compute(sC(r,i,a,t.inputs[0].dataType),{inputs:[]})}}),uC=P(()=>{"use strict";oq(),oK(),oj(),oY(),sO=(t,r,i,a)=>{if("none"!==t&&"i32"!==a&&"u32"!==a&&"f32"!==a)throw Error(`Input ${a} is not supported with reduction ${t}.`);let n=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,s=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${r}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(t){case"none":return`${r}=${i};`;case"add":return"i32"===a||"u32"===a?`atomicAdd(&${r}, bitcast<${a}>(${i}));`:`
              ${n}bitcast<${a}>(oldValue) + (${i})${s}`;case"max":return"i32"===a||"u32"===a?`atomicMax(&${r}, bitcast<${a}>(${i}));`:`
                ${n}max(bitcast<f32>(oldValue), (${i}))${s}`;case"min":return"i32"===a||"u32"===a?`atomicMin(&${r}, bitcast<${a}>(${i}));`:`${n}min(bitcast<${a}>(oldValue), (${i}))${s}`;case"mul":return`${n}(bitcast<${a}>(oldValue) * (${i}))${s}`;default:throw Error(`Reduction ${t} is not supported.`)}},sR=(t,r)=>{let i=t[0].dims,a=t[1].dims,n=Math.ceil(th.size(a)/1),s=a[a.length-1],o=th.sizeFromDimension(i,s),u=[{type:12,data:n},{type:12,data:s},{type:12,data:o},...tw(t[1].dims,t[2].dims,i)];return{name:"ScatterND",shaderCache:{hint:`${r.cacheKey}_${r.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:u}),getShaderSource:a=>{let n=tz("indices",t[1].dataType,t[1].dims.length),s=tz("updates",t[2].dataType,t[2].dims.length,1),o="none"!==r.reduction&&""!==r.reduction?tA("output",t[0].dataType,i.length):tC("output",t[0].dataType,i.length,1);return`
      ${a.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(n,s,o)}
      ${a.mainStart()}
        ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${1===t[0].dims.length?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start + uniforms.last_index_dimension];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${sO(r.reduction,"output[data_offset + i]","value",o.type.value)}
  }

      }`}}},sB=t=>td({reduction:t.reduction}),sD=(t,r)=>{t.compute(sR(t.inputs,r),{inputs:[t.inputs[1],t.inputs[2]],outputs:[]})}}),uA=P(()=>{"use strict";oq(),oK(),oj(),oY(),sM=(t,r)=>{if(t.every(t=>t>0||(()=>{throw Error("Resize requires scales input values to be positive")})),t.length>0){if("linear"===r.mode){if(!(2===t.length||3===t.length||4===t.length&&1===t[0]&&1===t[1]||4===t.length&&1===t[0]&&1===t[3]||5===t.length&&1===t[0]&&1===t[1]))throw Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if("cubic"===r.mode&&!(2===t.length||4===t.length&&1===t[0]&&1===t[1]||4===t.length&&1===t[0]&&1===t[3]))throw Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},sN=(t,r,i)=>{r.every(t=>t>=0&&t<i||(()=>{throw Error("Resize requires axes input values to be positive and less than rank")}));let a=Array(i).fill(1);return r.forEach((r,i)=>a[r]=t[i]),a},sP=(t,r,i,a,n,s)=>{let[o,u,l]=i>10?[1,2,3]:[-1,t.length>1?1:-1,-1],d=t[0].dims.length;if(o>0&&t.length>o&&t[o].dims.length>0)t[o].getFloat32Array().forEach(t=>s.push(t));else if("tf_crop_and_resize"===r.coordinateTransformMode)throw Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&t.length>u&&1===t[u].dims.length&&t[u].dims[0]>0){if(t[u].getFloat32Array().forEach(t=>a.push(t)),0!==a.length&&a.length!==d&&i>=18&&a.length!==r.axes.length)throw Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");sM(a,r),r.axes.length>0&&sN(a,r.axes,d).forEach((t,r)=>a[r]=t)}if(l>0&&t.length>l&&1===t[l].dims.length&&t[l].dims[0]>0&&(t[l].getBigInt64Array().forEach(t=>n.push(Number(t))),0!==n.length&&n.length!==d&&i>=18&&n.length!==r.axes.length))throw Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(r.axes.length>0){if(0!==a.length&&a.length!==r.axes.length)throw Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(0!==n.length&&n.length!==r.axes.length)throw Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if("u">typeof a&&"u">typeof n&&a.length>0&&n.length>d)throw Error("Resize requires only of scales or sizes to be specified")},sU=(t,r)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${r} { `+(()=>{switch(t){case"asymmetric":return`return ${r}(xResized) / ${r}(xScale);`;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${r}(xResized) + 0.5) / ${r}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${r}(xResized) + 0.5) / ${r}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    // The whole part and the fractional part are calculated separately due to inaccuracy of floating
                    // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
                    // offset-by-one error later in floor().
                    let whole = ${r}(xResized * (lengthOriginal - 1) / (lengthResized - 1));
                    let fract =
                        ${r}(xResized * (lengthOriginal - 1) % (lengthResized - 1)) / ${r}(lengthResized - 1);
                    return whole + fract;
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${r}(roiStart) * ${r}(lengthOriginal - 1) +
                        (${r}(xResized) * ${r}(roiEnd - roiStart) * ${r}(lengthOriginal - 1)) /
                        ${r}(lengthResized - 1);
                  } else {
                    return 0.5 * ${r}(roiStart + roiEnd) * ${r}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${r}xScale * ${r}(lengthResized);
                  const adjustment = ${r}(lengthResized) / outputWidth;
                  const center = ${r}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${r}(xResized) + 0.5) / ${r}(xScale)) - 0.5;`;case"half_pixel":return`return ((${r}(xResized) + 0.5) / ${r}(xScale)) - 0.5;`;default:throw Error(`Coordinate transform mode ${t} is not supported`)}})()+"}",sW=(t,r,i)=>`fn getNearestPixelFromOriginal(xOriginal: ${i}, isDownSample: bool) -> ${i} {`+(()=>{switch(t){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(r<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw Error(`Nearest mode ${t} is not supported`)}})()+"}",sq=(t,r,i)=>{let a=Array(i).fill(0).concat(Array(i).fill(1)),n=0===t.length?a:t.slice();return r.length>0?(r.forEach((t,s)=>{a[t]=n[s],a[s+i]=n[r.length+s]}),a):n},sL=(t,r,i,a)=>{let n=[];if(i.length>0){if(a.length>0){if(t.forEach(t=>n.push(t)),Math.max(...a)>t.length)throw Error("axes is out of bound");a.forEach((t,r)=>n[t]=i[r])}else i.forEach(t=>n.push(t))}else{if(0===r.length)throw Error("Resize requires either scales or sizes.");n=t.map((t,i)=>Math.round(t*r[i]))}return n},sV=(t,r,i)=>{let a=(()=>{switch(i.keepAspectRatioPolicy){case"not_larger":return i.axes.length>0?Math.min(...i.axes.map(t=>r[t]),Number.MAX_VALUE):Math.min(...r,Number.MAX_VALUE);case"not_smaller":return i.axes.length>0?Math.max(...i.axes.map(t=>r[t]),Number.MIN_VALUE):Math.max(...r,Number.MIN_VALUE);default:throw Error(`Keep aspect ratio policy ${i.keepAspectRatioPolicy} is not supported`)}})();r.fill(1,0,r.length);let n=t.slice();return i.axes.length>0?(i.axes.forEach(t=>r[t]=a),i.axes.forEach(i=>n[i]=Math.round(t[i]*r[i]))):(r.fill(a,0,r.length),n.forEach((t,i)=>n[i]=Math.round(t*r[i]))),n},sG=(t,r,i,a,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> array<${t.type.value}, ${i.length}> {
      var original_indices: array<${t.type.value}, ${i.length}>;
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var scale = ${tI("uniforms.scales","i",a)};
        var roi_low = ${tI("uniforms.roi","i",n)};
        var roi_hi = ${tI("uniforms.roi",`i + ${r.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${t.type.value}(output_index);
        } else {
          var input_shape_i = ${tI("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${tI("uniforms.output_shape","i",i.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,sH=(t,r,i,a,n,s,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${r.type.indices}) -> ${t.type.indices} {
      var input_indices: ${t.type.indices};
      for (var i:u32 = 0; i < ${a.length}; i++) {
        var output_index = ${r.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${tI("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${tI("uniforms.roi","i",s)};
          var roi_hi = ${tI("uniforms.roi",`i + ${i.length}`,s)};
          var input_shape_i = ${tI("uniforms.input_shape","i",i.length)};
          var output_shape_i = ${tI("uniforms.output_shape","i",a.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${o} || (original_idx >= 0 && original_idx < ${r.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${r.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${t.indicesSet("input_indices","i"," input_index")}
      }
      return input_indices;
    }`,sF=(t,r)=>`
    fn checkInputIndices(input_indices: ${t.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var input_index = ${t.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${tI("uniforms.input_shape","i",r.length)}) {
          return false;
        }
      }
      return true;
    }`,sj=(t,r,i,a)=>t.rank>a?`
    ${t.indicesSet("input_indices",r,"channel")};
    ${t.indicesSet("input_indices",i,"batch")};
`:"",sK=(t,r,i,a,n)=>{let[s,o,u,l]=2===i.length?[-1,0,1,-1]:[0,2,3,1],d=t.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${t.type.indices};
      ${t.indicesSet("input_indices",o,`max(0, min(row, ${i[o]} - 1))`)};
      ${t.indicesSet("input_indices",u,`max(0, min(col, ${i[u]} - 1))`)};
      ${sj(t,l,s,2)}
      return ${t.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${r.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${o}];
      var col:${d} = originalIndices[${u}];
      ${a?`if (row < 0 || row > (${i[o]} - 1) || col < 0 || col > (${i[u]} - 1)) {
        return ${n};
      }`:""};
      row = max(0, min(row, ${i[o]} - 1));
      col = max(0, min(col, ${i[u]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${i.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${i.length>2?`u32(originalIndices[${s}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},sY=(t,r,i,a,n,s,o,u,l,d)=>{let[p,c]=2===i.length?[0,1]:[2,3],h=t.type.value,f=o=>{let c=o===p?"row":"col";return`
      fn ${c}CubicInterpolation(input_indices: ${t.type.indices}, output_indices: ${r.type.indices}) -> ${h} {
        var output_index = ${r.indicesGet("output_indices",o)};
        var originalIdx: ${h} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[o]},
        ${a[o]}, ${i[o]}, ${s[o]}, ${s[o]} + ${i.length});
        var fractOriginalIdx: ${h} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${i[o]} - 1))) {
          return ${l};
        }
        var data: array<${h}, 4> = array<${h}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${c}: ${h} = originalIdx + ${h}(i);
          if (${c} < 0 || ${c} >= ${i[o]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${l};`:`${c} = max(0, min(${c}, ${i[o]} - 1));`};
          }
        var input_indices_copy: ${t.type.indices} = input_indices;
          ${t.indicesSet("input_indices_copy",o,`u32(${c})`)};
          data[i + 1] = ${o===p?t.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${f(p)};
    ${f(c)};
  fn getCubicInterpolationCoefs(s: ${h}) -> array<${h}, 4> {
    var absS = abs(s);
    var coeffs: array<${h}, 4> = array<${h}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${h} = 1.0 - absS;
    var twoMinusAbsS: ${h} = 2.0 - absS;
    var onePlusAbsS: ${h} = 1.0 + absS;
    coeffs[0] = ((${o} * onePlusAbsS - 5 * ${o}) * onePlusAbsS + 8 * ${o}) * onePlusAbsS - 4 * ${o};
    coeffs[1] = ((${o} + 2) * absS - (${o} + 3)) * absS * absS + 1;
    coeffs[2] = ((${o} + 2) * oneMinusAbsS - (${o} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${o} * twoMinusAbsS - 5 * ${o}) * twoMinusAbsS + 8 * ${o}) * twoMinusAbsS - 4 * ${o};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${h}, 4>, coefs: array<${h}, 4>) -> ${h} {
    var coefsSum: ${h} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${r.type.indices}) -> ${h} {
    var input_indices: ${t.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},sQ=(t,r,i,a,n)=>{let[s,o,u,l,d]=3===i.length?[-1,0,1,2,-1]:[0,2,3,4,1],p=t.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${p} {
      var input_indices: ${t.type.indices};
      ${t.indicesSet("input_indices",o,`max(0, min(depth, ${i[o]} - 1))`)};
      ${t.indicesSet("input_indices",u,`max(0, min(height, ${i[u]} - 1))`)};
      ${t.indicesSet("input_indices",l,`max(0, min(width, ${i[l]} - 1))`)};
      ${sj(t,d,s,3)}
      return ${t.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${r.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${p} = originalIndices[${o}];
      var height:${p} = originalIndices[${u}];
      var width:${p} = originalIndices[${l}];
      ${a?`if (depth < 0 || depth > (${i[o]} - 1) || height < 0 || height > (${i[u]} - 1) || width < 0 || (width > ${i[l]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${i[o]} - 1));
      height = max(0, min(height, ${i[u]} - 1));
      width = max(0, min(width, ${i[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${i.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${i.length>3?`u32(originalIndices[${s}])`:"0"};

      var x111: ${p} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${p} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${p} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${p} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${p} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${p} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${p} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${p} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${p} = abs(depth - ${p}(depth1));
      var dx2: ${p} = abs(${p}(depth2) - depth);
      var dy1: ${p} = abs(height - ${p}(height1));
      var dy2: ${p} = abs(${p}(height2) - height);
      var dz1: ${p} = abs(width - ${p}(width1));
      var dz2: ${p} = abs(${p}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},sZ=(t,r,i,a,n,s)=>{let o=t.dims,u=sq(s,r.axes,o.length),l=sL(o,a,n,r.axes),d=a.slice();0===a.length&&(d=o.map((t,r)=>0===t?1:l[r]/t),"stretch"!==r.keepAspectRatioPolicy&&(l=sV(o,d,r)));let p=tC("output",t.dataType,l.length),c=tz("input",t.dataType,o.length),h=th.size(l),f=o.length===l.length&&o.every((t,r)=>t===l[r]),m="tf_crop_and_resize"===r.coordinateTransformMode,g=r.extrapolationValue,_=c.type.value;return{name:"Resize",shaderCache:{hint:`${r.cacheKey}|${i}|${d.length>0?d:""}|${n.length>0?n:""}|${u.length>0?u:""}|${f}|${o}`,inputDependencies:["rank"]},getShaderSource:t=>`
      ${f?"":`
      ${sU(r.coordinateTransformMode,_)};
      ${(()=>{switch(r.mode){case"nearest":return`
              ${sF(c,o)};
              ${sW(r.nearestMode,i,_)};
              ${sH(c,p,o,l,d.length,u.length,m)};
              `;case"linear":return`
              ${sG(p,o,l,d.length,u.length)};
              ${(()=>{if(2===o.length||4===o.length)return`${sK(c,p,o,m,g)}`;if(3===o.length||5===o.length)return`${sQ(c,p,o,m,g)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(2===o.length||4===o.length)return`${sY(c,p,o,l,d,u,r.cubicCoeffA,m,r.extrapolationValue,r.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${t.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",u.length).declareVariables(c,p)}
      ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${f?"output[global_idx] = input[global_idx];":`
        let output_indices = ${p.offsetToIndices("global_idx")};
        var input_indices: ${c.type.indices};
        ${(()=>{switch(r.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${c.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${r.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${2===o.length||4===o.length?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${r.mode}`)}})()};
`}
      }`,getRunData:()=>({outputs:[{dims:l,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},{type:1,data:d},{type:1,data:u},...tw(o,l)]})}},sX=t=>{let r=t.customDataBuffer;return new Uint32Array(r,r.byteOffset,1)[0]},sJ=(t,r)=>{let i=[],a=[],n=[],s=sX(t);if(0!==r.antialias)throw Error("Only default value (0) for Antialias attribute is supported");sP(t.inputs,r,s,i,a,n),t.compute(sZ(t.inputs[0],r,s,i,a,n),{inputs:[0]})},s0=t=>{let r=t.antialias,i=t.axes,a=t.coordinateTransformMode,n=t.cubicCoeffA,s=0!==t.excludeOutside,o=t.extrapolationValue,u=t.keepAspectRatioPolicy,l=t.mode,d=""===t.nearestMode?"simple":t.nearestMode;return td({antialias:r,axes:i,coordinateTransformMode:a,cubicCoeffA:n,excludeOutside:s,extrapolationValue:o,keepAspectRatioPolicy:u,mode:l,nearestMode:d})}}),uO=P(()=>{"use strict";oq(),oK(),oj(),oY(),s1=(t,r)=>{let[i,a,n,s]=t,{numHeads:o,rotaryEmbeddingDim:u}=r;if(3!==i.dims.length&&4!==i.dims.length)throw Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${i.dims.length}`);if(!th.areEqual(a.dims,[])&&!th.areEqual(a.dims,[1])&&2!==a.dims.length)throw Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${a.dims.length}`);if(2!==n.dims.length)throw Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(2!==s.dims.length)throw Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!th.areEqual(n.dims,s.dims))throw Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&0===o)throw Error("num_heads must be provided if rotary_embedding_dim is specified");let l=i.dims[0],d=i.dims[i.dims.length-2],p=n.dims[0],c=th.sizeFromDimension(i.dims,1)/d,h=0===u?2*n.dims[1]:c/o;if(u>h)throw Error("rotary_embedding_dim must be less than or equal to head_size");if(2===a.dims.length){if(l!==a.dims[0])throw Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${a.dims[0]}`);if(d!==a.dims[1])throw Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${a.dims[1]}`)}if(h/2!==n.dims[1]&&u/2!==n.dims[1])throw Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`);if(d>p)throw Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},s2=(t,r)=>{let{interleaved:i,numHeads:a,rotaryEmbeddingDim:n,scale:s}=r,o=t[0].dims[0],u=th.sizeFromDimension(t[0].dims,1),l=t[0].dims[t[0].dims.length-2],d=u/l,p=t[2].dims[1],c=0===n?2*p:d/a,h=[o,l,d/c,c-p],f=th.computeStrides(h),m=[{type:1,data:s},{type:12,data:h},{type:12,data:f},...3===t[0].dims.length?Array({type:12,data:[u,d,c,1]}):[],...4===t[0].dims.length?Array({type:12,data:[u,c,l*c,1]}):[],...tw(t[0].dims,t[1].dims,t[2].dims,t[3].dims,t[0].dims)];return{name:"RotaryEmbedding",shaderCache:{hint:td({interleaved:i}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:r=>{let a=tz("input",t[0].dataType,t[0].dims.length),n=tz("position_ids",t[1].dataType,t[1].dims.length),s=tz("cos_cache",t[2].dataType,t[2].dims.length),o=tz("sin_cache",t[3].dataType,t[3].dims.length),u=tC("output",t[0].dataType,t[0].dims.length);return r.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:f.length},{name:"input_output_strides",type:"u32",length:f.length}]),`
        ${r.declareVariables(a,n,s,o,u)}

        ${r.mainStart(ty)}
          let half_rotary_emb_dim = uniforms.${s.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${r.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${n.broadcastedIndicesToOffset("bsnh.xy",tC("",n.type.tensor,2))};
            let position_id =
                u32(${n.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${i});
            let j = i + select(half_rotary_emb_dim, 1, ${i});
            let re = ${a.getByOffset("i")} * ${s.get("position_id","bsnh[3]")} -
                ${a.getByOffset("j")} * ${o.get("position_id","bsnh[3]")};
            ${u.setByOffset("i","re")}
            let im = ${a.getByOffset("i")} * ${o.get("position_id","bsnh[3]")} +
                ${a.getByOffset("j")} * ${s.get("position_id","bsnh[3]")};
            ${u.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${u.setByOffset("k",a.getByOffset("k"))}
          }
        }`},getRunData:()=>({outputs:[{dims:t[0].dims,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(th.size(h)/ty)},programUniforms:m})}},s3=(t,r)=>{s1(t.inputs,r),t.compute(s2(t.inputs,r))}}),uR=P(()=>{"use strict";oq(),oK(),oY(),s4=t=>{if(!t||t.length<3)throw Error("layerNorm requires at least 3 inputs.");let r=t[0],i=t[1],a=t[2];if(r.dataType!==i.dataType||r.dataType!==a.dataType)throw Error("All inputs must have the same data type");if(3!==r.dims.length&&2!==r.dims.length)throw Error("Input must be 2D or 3D");if(3!==i.dims.length&&2!==i.dims.length)throw Error("Skip must be 2D or 3D");let n=r.dims[r.dims.length-1],s=r.dims[r.dims.length-2];if(i.dims[i.dims.length-1]!==n)throw Error("Skip must have the same hidden size as input");if(i.dims[i.dims.length-2]!==s)throw Error("Skip must have the same sequence length as input");if(1!==a.dims.length)throw Error("Gamma must be 1D");if(a.dims[a.dims.length-1]!==n)throw Error("Gamma must have the same hidden size as input");if(t.length>3){let r=t[3];if(1!==r.dims.length)throw Error("Beta must be 1D");if(r.dims[r.dims.length-1]!==n)throw Error("Beta must have the same hidden size as input")}if(t.length>4){let r=t[4];if(1!==r.dims.length)throw Error("Bias must be 1D");if(r.dims[r.dims.length-1]!==n)throw Error("Bias must have the same hidden size as input")}},s6=(t,r,i,a)=>{let n=r.simplified,s=t[0].dims,o=th.size(s),u=s.slice(-1)[0],l=a?s.slice(0,-1).concat(1):[],d=!n&&t.length>3,p=t.length>4,c=a&&i>1,h=a&&i>2,f=i>3,m=tx(u),g=[{type:12,data:o},{type:12,data:m},{type:12,data:u},{type:1,data:r.epsilon}],_=[{dims:s,dataType:t[0].dataType}];return i>1&&_.push({dims:l,dataType:1}),i>2&&_.push({dims:l,dataType:1}),i>3&&_.push({dims:s,dataType:t[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${m};${c};${h};${f}`,inputDependencies:t.map((t,r)=>"type")},getShaderSource:r=>{let i=[tz("x",t[0].dataType,t[0].dims,m),tz("skip",t[1].dataType,t[1].dims,m),tz("gamma",t[2].dataType,t[2].dims,m)];d&&i.push(tz("beta",t[3].dataType,t[3].dims,m)),p&&i.push(tz("bias",t[4].dataType,t[4].dims,m)),i.push(tC("output",t[0].dataType,s,m)),c&&i.push(tC("mean_output",1,l)),h&&i.push(tC("inv_std_output",1,l)),f&&i.push(tC("input_skip_bias_sum",t[0].dataType,s,m));let a=t$(t[0].dataType),o=t$(1,m);return`

      ${r.registerUniforms([{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}]).declareVariables(...i)}
      var<workgroup> sum_shared : array<${o}, 64>;
      var<workgroup> sum_squared_shared : array<${o}, 64>;

      ${r.mainStart([64,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / 64;

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / 64;
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == 63) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${p?"bias[offset1d + i]":a+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${f?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${tS(a,m,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = 64;
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${tT("sum",m)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${tT("square_sum",m)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${c?"mean_output[global_idx] = mean;":""}
        ${h?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${a}(mean)`}) *
            ${a}(inv_std_dev) * gamma[offset1d + i]
            ${d?"+ beta[offset1d + i]":""};
        }
      }`},getRunData:()=>({outputs:_,dispatchGroup:{x:Math.ceil(o/u)},programUniforms:g})}},s8=(t,r)=>{s4(t.inputs);let i=[0];t.outputCount>1&&i.push(-3),t.outputCount>2&&i.push(-3),t.outputCount>3&&i.push(3),t.compute(s6(t.inputs,r,t.outputCount,!1),{outputs:i})}}),uB=P(()=>{"use strict";oq(),oK(),oj(),oY(),s5=(t,r)=>{if(!t||t.length<1)throw Error("too few inputs");if(0!==r.axes.length){if(r.axes.length!==r.starts.length||r.axes.length!==r.ends.length)throw Error("axes, starts and ends must have the same length")}else if(r.starts.length!==r.ends.length)throw Error("starts and ends must have the same length");t.slice(1).forEach((r,i)=>{if(6!==t[i+1].dataType&&7!==t[i+1].dataType)throw Error(`Input ${i} must be an array of int32 or int64`)})},s9=(t,r)=>{let i=[];if(t.length>r){if(7===t[r].dataType)t[r].getBigInt64Array().forEach(t=>i.push(Number(t)));else if(6===t[r].dataType)t[r].getInt32Array().forEach(t=>i.push(Number(t)));else throw Error(`Input ${r} must be an array of int32 or int64`)}return i},s7=(t,r)=>{if(!(t.length>1))return r;{let r=s9(t,1),i=s9(t,2),a=s9(t,3);return 0===a.length&&(a=[...Array(t[0].dims.length).keys()]),td({starts:r,ends:i,axes:a})}},oe=(t,r,i,a,n)=>{let s=t;return t<0&&(s+=i[a[r]]),n[r]<0?Math.max(0,Math.min(s,i[a[r]]-1)):Math.max(0,Math.min(s,i[a[r]]))},ot=(t,r,i)=>`fn calculateInputIndices(output_indices: ${r.type.indices}) -> ${t.type.indices} {
          var input_indices: ${t.type.indices};
          var carry = 0u;
          for (var i = ${i.length}; i >= 0; i--) {
            let input_shape_i = ${tI("uniforms.input_shape","i",i.length)};
            let steps_i = ${tI("uniforms.steps","i",i.length)};
            let signs_i = ${tI("uniforms.signs","i",i.length)};
            let starts_i = ${tI("uniforms.starts","i",i.length)};
            var output_index = ${r.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${t.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,or=(t,r)=>{let i=t[0].dims,a=th.size(i),n=r.axes.length>0?th.normalizeAxes(r.axes,i.length):[...Array(i.length).keys()],s=s9(t,4);s.forEach(t=>0!==t||(()=>{throw Error("step cannot be 0")})),0===s.length&&(s=Array(n.length).fill(1));let o=r.starts.map((t,r)=>oe(t,r,i,n,s)),u=r.ends.map((t,r)=>oe(t,r,i,n,s));if(n.length!==o.length||n.length!==u.length)throw Error("start, ends and axes should have the same number of elements");if(n.length!==i.length)for(let t=0;t<i.length;++t)n.includes(t)||(o.splice(t,0,0),u.splice(t,0,i[t]),s.splice(t,0,1));let l=s.map(t=>Math.sign(t));s.forEach((t,r,i)=>{if(t<0){let a=(u[r]-o[r])/t,n=o[r],l=n+a*s[r];o[r]=l,u[r]=n,i[r]=-t}});let d=i.slice(0);n.forEach((t,r)=>{d[t]=Math.ceil((u[t]-o[t])/s[t])});let p={dims:d,dataType:t[0].dataType},c=tC("output",t[0].dataType,d.length),h=tz("input",t[0].dataType,t[0].dims.length),f=th.size(d),m=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:o.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:s.length}],g=[{type:12,data:f},{type:12,data:o},{type:6,data:l},{type:12,data:s},...tw(t[0].dims,d)];return{name:"Slice",shaderCache:{hint:`${l.length}_${o.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:t=>`
      ${t.registerUniforms(m).declareVariables(h,c)}
        ${ot(h,c,i)}
        ${t.mainStart()}
          ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${c.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${c.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`,getRunData:()=>({outputs:[p],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:g})}},oi=(t,r)=>{s5(t.inputs,r);let i=s7(t.inputs,r);t.compute(or(t.inputs,i),{inputs:[0]})},oa=t=>{let r=t.starts,i=t.ends,a=t.axes;return td({starts:r,ends:i,axes:a})}}),uD=P(()=>{"use strict";oq(),oK(),oj(),oQ(),oY(),on=t=>{if(!t||1!==t.length)throw Error("Softmax op requires 1 input.")},os=(t,r)=>{let i=t.inputs[0],a=i.dims,n=th.size(a),s=a.length,o=th.normalizeAxis(r.axis,s),u=o<a.length-1,l,d=[];u?((d=Array.from({length:s},(t,r)=>r))[o]=s-1,d[s-1]=o,l=t.compute(tq(i,d),{inputs:[i],outputs:[-1]})[0]):l=i;let p=l.dims,c=p[s-1],h=n/c,f=tx(c),m=c/f,g=64;1===h&&(g=256);let _=(t,r)=>4===r?`max(max(${t}.x, ${t}.y), max(${t}.z, ${t}.w))`:2===r?`max(${t}.x, ${t}.y)`:3===r?`max(max(${t}.x, ${t}.y), ${t}.z)`:t,y=tz("x",l.dataType,l.dims,f),b=tC("result",l.dataType,l.dims,f),$=y.type.value,v="f32"===t$(l.dataType)?`var threadMax = ${$}(-3.402823e+38f);`:`var threadMax = ${$}(-65504.0h);`,w=t.compute({name:"Softmax",shaderCache:{hint:`${f};${g}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:p,dataType:l.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:m}]}),getShaderSource:t=>`
      var<workgroup> rowMaxShared : ${$};
      var<workgroup> rowSumShared : ${$};
      var<workgroup> threadShared : array<${$}, ${g}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${$} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${$}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${t.registerUniform("packedCols","i32").declareVariables(y,b)}
      ${t.mainStart(g)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${g};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${v}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${$}(${_("threadShared[0]",f)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${$}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${$}(${tT("threadShared[0]",f)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`},{inputs:[l],outputs:[u?-1:0]})[0];u&&t.compute(tq(w,d),{inputs:[w]})},oo=(t,r)=>{on(t.inputs),os(t,r)},ou=t=>td({axis:t.axis})}),uM=P(()=>{"use strict";oq(),oK(),oY(),ol=t=>Array.from(t.getBigInt64Array(),Number),od=t=>{if(!t||2!==t.length)throw Error("Tile requires 2 inputs.");if(1!==t[0].dataType&&10!==t[0].dataType&&6!==t[0].dataType&&12!==t[0].dataType)throw Error("Tile only support float, float16, int32, and uint32 data types");if(7!==t[1].dataType)throw Error("Tile `repeats` input should be of int64 data type");if(1!==t[1].dims.length)throw Error("Tile `repeats` input should be 1-D");if(ol(t[1]).length!==t[0].dims.length)throw Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},op=(t,r)=>{let i=[];for(let a=0;a<t.length;++a)i.push(t[a]*r[a]);return i},oc=(t,r)=>{let i=t[0].dims,a=r??ol(t[1]),n=op(i,a),s=th.size(n),o=t[0].dataType,u=tz("input",o,i.length),l=tC("output",o,n.length);return{name:"Tile",shaderCache:{hint:`${a}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...tw(t[0].dims,n)]}),getShaderSource:t=>`
      const inputShape = ${u.indices(...i)};
      ${t.registerUniform("output_size","u32").declareVariables(u,l)}
      ${t.mainStart()}
      ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${u.type.indices};
      for (var i = 0; i < ${i.length}; i++) {
        let input_dim_i = ${u.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${u.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",u.getByIndices("input_indices"))}
    }`}},oh=t=>{od(t.inputs),t.compute(oc(t.inputs),{inputs:[0]})}}),uN=P(()=>{"use strict";oq(),oK(),oY(),of=(t,r,i,a,n)=>{let s=tC("output_data",n,i.length,4),o=tz("a_data",r[1].dataType,r[1].dims.length,4),u=tz("b_data",r[2].dataType,r[2].dims.length,4),l=tz("c_data",r[0].dataType,r[0].dims.length,4),d,p=(t,r,i)=>`select(${r}, ${t}, ${i})`;if(a){let t=(t,r,i="")=>{let a=`a_data[index_a${r}][component_a${r}]`,n=`b_data[index_b${r}][component_b${r}]`,d=`bool(c_data[index_c${r}] & (0xffu << (component_c${r} * 8)))`;return`
            let output_indices${r} = ${s.offsetToIndices(`global_idx * 4u + ${r}u`)};
            let offset_a${r} = ${o.broadcastedIndicesToOffset(`output_indices${r}`,s)};
            let offset_b${r} = ${u.broadcastedIndicesToOffset(`output_indices${r}`,s)};
            let offset_c${r} = ${l.broadcastedIndicesToOffset(`output_indices${r}`,s)};
            let index_a${r} = offset_a${r} / 4u;
            let index_b${r} = offset_b${r} / 4u;
            let index_c${r} = offset_c${r} / 4u;
            let component_a${r} = offset_a${r} % 4u;
            let component_b${r} = offset_b${r} % 4u;
            let component_c${r} = offset_c${r} % 4u;
            ${t}[${r}] = ${i}(${p(a,n,d)});
          `};d=9===n?`
            var data = vec4<u32>(0);
            ${t("data",0,"u32")}
            ${t("data",1,"u32")}
            ${t("data",2,"u32")}
            ${t("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${t("output_data[global_idx]",0)}
            ${t("output_data[global_idx]",1)}
            ${t("output_data[global_idx]",2)}
            ${t("output_data[global_idx]",3)}
          `}else d=s.setByOffset("global_idx",p(o.getByOffset("global_idx"),u.getByOffset("global_idx"),l.getByOffset("global_idx")));return`
        ${t.registerUniform("vec_size","u32").declareVariables(l,o,u,s)}
        ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},om=t=>{let r=t[1].dims,i=t[2].dims,a=t[0].dims,n=t[1].dataType,s=!(th.areEqual(r,i)&&th.areEqual(i,a)),o=r,u=th.size(r);if(s){let t=tc.calcShape(tc.calcShape(r,i,!1),a,!1);if(!t)throw Error("Can't perform where op on the given tensors");o=t,u=th.size(o)}let l=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:r=>of(r,t,o,s,n),getRunData:()=>({outputs:[{dims:o,dataType:n}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:l},...tw(a,r,i,o)]})}},og=t=>{t.compute(om(t.inputs))}}),uP=P(()=>{"use strict";oJ(),o0(),o1(),o2(),o4(),o6(),o8(),un(),uo(),uu(),ul(),ud(),up(),uc(),uh(),uf(),um(),ug(),u_(),uy(),uv(),uw(),ux(),uk(),uS(),ub(),uT(),uI(),uE(),uz(),uC(),oX(),uA(),uO(),uR(),uB(),uD(),u$(),uM(),oQ(),o3(),uN(),o_=new Map([["Abs",[rK]],["Acos",[rY]],["Acosh",[rQ]],["Add",[iD]],["ArgMax",[rz,rC]],["ArgMin",[rE,rC]],["Asin",[rZ]],["Asinh",[rX]],["Atan",[rJ]],["Atanh",[r0]],["Attention",[rP]],["AveragePool",[sg,sm]],["BatchNormalization",[rL]],["BiasAdd",[rH]],["BiasSplitGelu",[iA]],["Cast",[r2,r1]],["Ceil",[r6]],["Clip",[r4]],["Concat",[iY,iQ]],["Conv",[ak,a$]],["ConvTranspose",[aB,aC]],["Cos",[r8]],["Cosh",[r5]],["CumSum",[aM,aN]],["DepthToSpace",[aq,aL]],["DequantizeLinear",[sI,sE]],["Div",[iM]],["Einsum",[aZ,aX]],["Elu",[r7,r9]],["Equal",[iN]],["Erf",[it]],["Exp",[ir]],["Expand",[a3]],["FastGelu",[a6]],["Floor",[ii]],["FusedConv",[ak,a$]],["Gather",[a7,a9]],["GatherElements",[nd,nl]],["GatherBlockQuantized",[nn,ns]],["GatherND",[nt,nr]],["Gelu",[ia]],["Gemm",[nf,nh]],["GlobalAveragePool",[sb,sy]],["GlobalMaxPool",[sk,sx]],["Greater",[iq]],["GreaterOrEqual",[iV]],["GridSample",[nI,nE]],["GroupQueryAttention",[nF]],["HardSigmoid",[ih,ic]],["InstanceNormalization",[nQ]],["LayerNormalization",[nJ]],["LeakyRelu",[is,r9]],["Less",[iL]],["LessOrEqual",[iG]],["Log",[iS]],["MatMul",[n1]],["MatMulNBits",[n6,n8]],["MaxPool",[sv,sw]],["Mul",[iP]],["MultiHeadAttention",[nD,nA]],["Neg",[iu]],["Not",[io]],["Pad",[sn]],["Pow",[iU]],["QuickGelu",[iE,r9]],["Range",[sA]],["Reciprocal",[il]],["ReduceMin",[rw]],["ReduceMean",[r_]],["ReduceMax",[rv]],["ReduceSum",[rk]],["ReduceProd",[rx]],["ReduceL1",[ry]],["ReduceL2",[rb]],["ReduceLogSum",[rT]],["ReduceLogSumExp",[r$]],["ReduceSumSquare",[rS]],["Relu",[id]],["Resize",[sJ,s0]],["RotaryEmbedding",[s3]],["ScatterND",[sD,sB]],["Sigmoid",[ip]],["Sin",[im]],["Sinh",[ig]],["Slice",[oi,oa]],["SkipLayerNormalization",[s8]],["Split",[nq,nL]],["Sqrt",[i_]],["Softmax",[oo,ou]],["Sub",[iW]],["Tan",[iy]],["Tanh",[i$]],["ThresholdedRelu",[ik,r9]],["Tile",[oh]],["Transpose",[tL,tV]],["Where",[og]]])}),uU=P(()=>{"use strict";eo(),oV(),oY(),oy=class{constructor(t){this.backend=t,this.repo=new Map,this.attributesBound=!1}getArtifact(t){return this.repo.get(t)}setArtifact(t,r){this.repo.set(t,r)}run(t,r,i,a,n){z(t.programInfo.name);let s=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(2*this.backend.pendingDispatchNumber);let u=[];for(let t of r)u.push({binding:u.length,resource:{buffer:t.buffer}});for(let t of i)u.push({binding:u.length,resource:{buffer:t.buffer}});n&&u.push({binding:u.length,resource:n});let l=s.createBindGroup({layout:t.computePipeline.getBindGroupLayout(0),entries:u,label:t.programInfo.name});if("capturing"===this.backend.sessionStatus){let r={kernelId:this.backend.currentKernelId,computePipeline:t.computePipeline,bindGroup:l,dispatchGroup:a};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(r)}o.setPipeline(t.computePipeline),o.setBindGroup(0,l),o.dispatchWorkgroups(...a),this.backend.writeTimestamp(2*this.backend.pendingDispatchNumber+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||"at-passes"===this.backend.queryType)&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),C(t.programInfo.name)}dispose(){}build(t,r){z(t.name);let i=this.backend.device,a=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"},{feature:"subgroups-f16",extension:"subgroups_f16"}].forEach(t=>{i.features.has(t.feature)&&a.push(`enable ${t.extension};`)});let n=tB(r,this.backend.device.limits),s=t.getShaderSource(n),o=`${a.join(`
`)}
${n.additionalImplementations}
${s}`,u=i.createShaderModule({code:o,label:t.name});e9("verbose",()=>`[WebGPU] ${t.name} shader code: ${o}`);let l=i.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:t.name});return C(t.name),{programInfo:t,computePipeline:l,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(t){let r="number"==typeof t?t:t.x,i="number"==typeof t?1:t.y||1,a="number"==typeof t?1:t.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(r<=n&&i<=n&&a<=n)return[r,i,a];let s=r*i*a,o=Math.ceil(Math.sqrt(s));if(!(o>n))return[o,o,1];if((o=Math.ceil(Math.cbrt(s)))>n)throw Error("Total dispatch size exceeds WebGPU maximum.");return[o,o,o]}}}),uW=P(()=>{"use strict";eo(),oq(),oV(),oG(),oF(),uP(),uU(),ob=(t,r)=>{if(r.length!==t.length)throw Error(`inputDependencies length ${r.length} is not equal to inputTensors length ${t.length}.`);let i=[];for(let a=0;a<t.length;++a){let n=t[a].dataType;switch(r[a]){case"none":i.push("");break;case"type":i.push(`${n}`);break;case"rank":{let r=t[a].dims.length;i.push(`${n};${r}`);break}case"dims":{let r=t[a].dims.join(",");i.push(`${n};${r}`);break}default:throw Error(`unsupported input dependency: ${r[a]}`)}}return i.join("|")},o$=(t,r,i)=>{let a=t.name;return t.shaderCache?.hint&&(a+="["+t.shaderCache.hint+"]"),a+=":"+i+`:${ob(r,t.shaderCache?.inputDependencies??Array(r.length).fill("dims"))}`},ov=class{constructor(t){t&&(this.architecture=t.architecture,this.vendor=t.vendor)}isArchitecture(t){return this.architecture===t}isVendor(t){return this.vendor===t}},ow=class{constructor(t){this.subgroupsSupported=t.features.has("subgroups"),this.subgroupsF16Supported=t.features.has("subgroups");let r=t.limits;this.subgroupsSupported&&r.minSubgroupSize&&r.maxSubgroupSize?this.subgroupSizeRange=[r.minSubgroupSize,r.maxSubgroupSize]:this.subgroupSizeRange=void 0}},ox=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(null===this.currentKernelId)throw Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let t=this.kernelCustomData.get(this.currentKernelId);return t||(t={},this.kernelCustomData.set(this.currentKernelId,t)),t}async initialize(t,r){this.env=t;let i=[],a={requiredLimits:{maxComputeWorkgroupStorageSize:r.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:r.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:r.limits.maxStorageBufferBindingSize,maxBufferSize:r.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:r.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:r.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:r.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:r.limits.maxComputeWorkgroupSizeZ},requiredFeatures:i},n=t=>r.features.has(t)&&i.push(t)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups")&&n("subgroups-f16"),this.device=await r.requestDevice(a),this.deviceInfo=new ow(this.device),this.adapterInfo=new ov(r.info||await r.requestAdapterInfo()),this.gpuDataManager=tu(this),this.programManager=new oy(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,e8(t.logLevel,!!t.debug),this.device.onuncapturederror=t=>{t.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${t.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:r,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){"u">typeof this.querySet&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let t=this.getCommandEncoder(),r={};"at-passes"===this.queryType&&(r.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:2*this.pendingDispatchNumber,endOfPassWriteIndex:2*this.pendingDispatchNumber+1}),this.computePassEncoder=t.beginComputePass(r)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){let t;this.commandEncoder&&(z(),this.endComputePass(),"none"!==this.queryType&&(this.commandEncoder.resolveQuerySet(this.querySet,0,2*this.pendingDispatchNumber,this.queryResolveBuffer,0),t=this.device.createBuffer({size:16*this.pendingDispatchNumber,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(t,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,t,0,16*this.pendingDispatchNumber)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,"none"!==this.queryType&&t.mapAsync(GPUMapMode.READ).then(()=>{let r=new BigUint64Array(t.getMappedRange()),i=this.pendingQueries.get(t);for(let t=0;t<r.length/2;t++){let a=i[t],n=a.kernelId,s=this.kernels.get(n),o=s.kernelType,u=s.kernelName,l=a.programName,d=a.inputTensorViews,p=a.outputTensorViews,c=r[2*t],h=r[2*t+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=c);let f=Number(c-this.queryTimeBase),m=Number(h-this.queryTimeBase);if(!Number.isSafeInteger(f)||!Number.isSafeInteger(m))throw RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:d.map(t=>({dims:t.dims,dataType:eK(t.dataType)})),outputsMetadata:p.map(t=>({dims:t.dims,dataType:eK(t.dataType)})),kernelId:n,kernelType:o,kernelName:u,programName:l,startTime:f,endTime:m});else{let t="";d.forEach((r,i)=>{t+=`input[${i}]: [${r.dims}] | ${eK(r.dataType)}, `});let r="";p.forEach((t,i)=>{r+=`output[${i}]: [${t.dims}] | ${eK(t.dataType)}, `}),console.log(`[profiling] kernel "${n}|${o}|${u}|${l}" ${t}${r}execution time: ${m-f} ns`)}I("GPU",`${l}::${c}::${h}`)}t.unmap(),this.pendingQueries.delete(t)}),C())}run(t,r,i,a,n,s){let o;z(t.name);let u=[];for(let t=0;t<r.length;++t){let i=r[t].data;if(0===i)continue;let a=this.gpuDataManager.get(i);if(!a)throw Error(`no GPU data for input: ${i}`);u.push(a)}let{outputs:l,dispatchGroup:d,programUniforms:p}=t.getRunData(r),c=0===i.length?l.map((t,r)=>r):i;if(c.length!==l.length)throw Error(`Output size ${c.length} must be equal to ${l.length}.`);let h=[],f=[];for(let t=0;t<l.length;++t){if(!Number.isInteger(c[t])||c[t]<-3||c[t]>=s)throw Error(`Invalid output index: ${c[t]}`);if(-3===c[t])continue;let r=-1===c[t],i=-2===c[t],o=r||i?n(l[t].dataType,l[t].dims):a(c[t],l[t].dataType,l[t].dims);if(h.push(o),0===o.data)continue;let u=this.gpuDataManager.get(o.data);if(!u)throw Error(`no GPU data for output: ${o.data}`);if(r&&this.temporaryData.push(u),i){let t=this.kernelPersistentData.get(this.currentKernelId);t||(t=[],this.kernelPersistentData.set(this.currentKernelId,t)),t.push(u)}f.push(u)}if(u.length!==r.length||f.length!==h.length){if(0===f.length)return C(t.name),h;throw Error(`Program ${t.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}if(p){let t=0,r=[];p.forEach(i=>{let a="number"==typeof i.data?[i.data]:i.data;if(0===a.length)return;let n=10===i.type?2:4,s,o;10===i.type?(o=a.length>4?16:a.length>2?8:a.length*n,s=a.length>4?16:n*a.length):(o=a.length<=2?a.length*n:16,s=16),t=Math.ceil(t/o)*o,r.push(t);let u=10===i.type?8:4;t+=a.length>4?Math.ceil(a.length/u)*s:a.length*n});let i=new ArrayBuffer(t=16*Math.ceil(t/16));p.forEach((t,a)=>{let n=r[a],s="number"==typeof t.data?[t.data]:t.data;if(6===t.type)new Int32Array(i,n,s.length).set(s);else if(12===t.type)new Uint32Array(i,n,s.length).set(s);else if(10===t.type)new Uint16Array(i,n,s.length).set(s);else if(1===t.type)new Float32Array(i,n,s.length).set(s);else throw Error(`Unsupported uniform type: ${eK(t.type)}`)});let a=this.gpuDataManager.create(t,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(a.buffer,0,i,0,t),this.gpuDataManager.release(a.id),o={offset:0,size:t,buffer:a.buffer}}let m=this.programManager.normalizeDispatchGroupSize(d),g=o$(t,r,1===m[1]&&1===m[2]),_=this.programManager.getArtifact(g);if(_||(_=this.programManager.build(t,m),this.programManager.setArtifact(g,_),e9("info",()=>`[artifact] key: ${g}, programName: ${t.name}`)),p&&_.uniformVariablesInfo){if(p.length!==_.uniformVariablesInfo.length)throw Error(`Uniform variables count mismatch: expect ${_.uniformVariablesInfo.length}, got ${p.length} in program "${_.programInfo.name}".`);for(let t=0;t<p.length;t++){let r=p[t],i=r.type,a="number"==typeof r.data?1:r.data.length,[n,s]=_.uniformVariablesInfo[t];if(i!==n||a!==s)throw Error(`Uniform variable ${t} mismatch: expect type ${n} with size ${s}, got type ${i} with size ${a} in program "${_.programInfo.name}".`)}}if(e9("info",()=>`[ProgramManager] run "${t.name}" (key=${g}) with ${m[0]}x${m[1]}x${m[2]}`),"none"!==this.queryType||"capturing"===this.sessionStatus){let t={kernelId:this.currentKernelId,programName:_.programInfo.name,inputTensorViews:r,outputTensorViews:h};this.pendingKernels.push(t),"capturing"===this.sessionStatus&&this.capturedPendingKernels.get(this.currentSessionId).push(t)}return this.programManager.run(_,u,f,m,o),C(t.name),h}upload(t,r){this.gpuDataManager.upload(t,r)}memcpy(t,r){this.gpuDataManager.memcpy(t,r)}async download(t,r){await this.gpuDataManager.download(t,r)}alloc(t){return this.gpuDataManager.create(t).id}free(t){return this.gpuDataManager.release(t)}createKernel(t,r,i,a){let n=o_.get(t);if(!n)throw Error(`kernel not implemented: ${t}`);let s={kernelType:t,kernelName:a,kernelEntry:n[0],attributes:[n[1],i]};this.kernels.set(r,s)}releaseKernel(t){let r=this.kernelPersistentData.get(t);if(r){for(let t of r)this.gpuDataManager.release(t.id);this.kernelPersistentData.delete(t)}this.kernelCustomData.delete(t),this.kernels.delete(t)}computeKernel(t,r,i){let a=this.kernels.get(t);if(!a)throw Error(`kernel not created: ${t}`);let n=a.kernelType,s=a.kernelName,o=a.kernelEntry,u=a.attributes;if(null!==this.currentKernelId)throw Error(`kernel "[${n}] ${s}" is not allowed to be called recursively`);this.currentKernelId=t,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),e9("info",()=>`[WebGPU] Start to run kernel "[${n}] ${s}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),o(r,u[1]),0}catch(t){return i.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${s}" failed. ${t}`)),1}finally{for(let t of(l&&i.push(this.device.popErrorScope().then(t=>t?`GPU validation error for kernel "[${n}] ${s}": ${t.message}`:null)),this.temporaryData))this.gpuDataManager.release(t.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(t,r,i,a){let n=this.sessionExternalDataMapping.get(t);n||(n=new Map,this.sessionExternalDataMapping.set(t,n));let s=n.get(r),o=this.gpuDataManager.registerExternalBuffer(i,a,s);return n.set(r,[o,i]),o}unregisterBuffers(t){let r=this.sessionExternalDataMapping.get(t);r&&(r.forEach(t=>this.gpuDataManager.unregisterExternalBuffer(t[0])),this.sessionExternalDataMapping.delete(t))}getBuffer(t){let r=this.gpuDataManager.get(t);if(!r)throw Error(`no GPU data for buffer: ${t}`);return r.buffer}createDownloader(t,r,i){return async()=>{let a=await ts(this,t,r);return e7(a.buffer,i)}}writeTimestamp(t){"inside-passes"===this.queryType&&this.computePassEncoder.writeTimestamp(this.querySet,t)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),"none"!==this.queryType&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:2*this.maxDispatchNumber}),this.queryResolveBuffer=this.device.createBuffer({size:16*this.maxDispatchNumber,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){e9("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){e9("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){e9("info","replay"),this.sessionStatus="replaying";let t=this.capturedCommandList.get(this.currentSessionId),r=this.capturedPendingKernels.get(this.currentSessionId),i=t.length;this.pendingKernels=[];for(let a=0;a<i;a++){let i=this.getComputePassEncoder(),n=t[a];this.writeTimestamp(2*this.pendingDispatchNumber),i.setPipeline(n.computePipeline),i.setBindGroup(0,n.bindGroup),i.dispatchWorkgroups(...n.dispatchGroup),this.writeTimestamp(2*this.pendingDispatchNumber+1),this.pendingDispatchNumber++,"none"!==this.queryType&&this.pendingKernels.push(r[a]),(this.pendingDispatchNumber>=this.maxDispatchNumber||"at-passes"===this.queryType)&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(t){this.unregisterBuffers(t),this.capturedCommandList.has(t)&&this.capturedCommandList.delete(t),this.capturedPendingKernels.has(t)&&this.capturedPendingKernels.delete(t),this.gpuDataManager.onReleaseSession(t)}onRunStart(t){this.currentSessionId=t,this.setQueryType()}}}),uq=P(()=>{"use strict";oV(),ok=1,oS=()=>ok++,oT=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),oI=(t,r)=>{let i=oT.get(t);if(!i)throw Error("Unsupported data type.");return r.length>0?Math.ceil(r.reduce((t,r)=>t*r)*i/8):0},oE=class{constructor(t){this.sessionId=t.sessionId,this.mlContext=t.context,this.mlTensor=t.tensor,this.dataType=t.dataType,this.tensorShape=t.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return oI(this.dataType,this.tensorShape)}destroy(){e9("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(t){this.mlContext.writeTensor(this.mlTensor,t)}async read(t){return t?this.mlContext.readTensor(this.mlTensor,t):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(t,r,i){return this.mlContext===t&&this.dataType===r&&this.tensorShape.length===i.length&&this.tensorShape.every((t,r)=>t===i[r])}},oz=class{constructor(t,r){this.tensorManager=t,this.wrapper=r}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(t,r,i,a){if(this.wrapper){if(this.wrapper.canReuseTensor(t,r,i))return this.wrapper.tensor;if(a){if(this.wrapper.byteLength!==oI(r,i))throw Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let n=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(r,i,n,!0,!0),a&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(t){if(this.wrapper){if(t.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}e9("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(t){if(this.activeUpload)return t?(t instanceof ArrayBuffer?new Uint8Array(t).set(this.activeUpload):new Uint8Array(t.buffer,t.byteOffset,t.byteLength).set(this.activeUpload),void 0):this.activeUpload.buffer;if(!this.wrapper)throw Error("Tensor has not been created.");return t?this.wrapper.read(t):this.wrapper.read()}},oC=class{constructor(t){this.backend=t,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}reserveTensorId(){let t=oS();return this.tensorTrackersById.set(t,new oz(this)),t}releaseTensorId(t){let r=this.tensorTrackersById.get(t);r&&(this.tensorTrackersById.delete(t),r.tensorWrapper&&this.releaseTensor(r.tensorWrapper))}async ensureTensor(t,r,i,a){e9("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${a}}`);let n=this.tensorTrackersById.get(t);if(!n)throw Error("Tensor not found.");return n.ensureTensor(this.backend.currentContext,r,i,a)}upload(t,r){let i=this.tensorTrackersById.get(t);if(!i)throw Error("Tensor not found.");i.upload(r)}async download(t,r){e9("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${t}, dstBuffer: ${r?.byteLength}}`);let i=this.tensorTrackersById.get(t);if(!i)throw Error("Tensor not found.");return i.download(r)}releaseTensorsForSession(t){for(let r of this.freeTensors)r.sessionId===t&&r.destroy();this.freeTensors=this.freeTensors.filter(r=>r.sessionId!==t)}registerTensor(t,r,i,a){let n=oS(),s=new oE({sessionId:this.backend.currentSessionId,context:t,tensor:r,dataType:i,shape:a});return this.tensorTrackersById.set(n,new oz(this,s)),this.externalTensors.add(s),n}async getCachedTensor(t,r,i,a,n){let s=this.backend.currentSessionId,o=this.backend.currentContext;for(let[i,a]of this.freeTensors.entries())if(a.canReuseTensor(o,t,r)){e9("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, shape: ${r}}`);let a=this.freeTensors.splice(i,1)[0];return a.sessionId=s,a}e9("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, shape: ${r}}`);let u=await o.createTensor({dataType:t,shape:r,dimensions:r,usage:i,writable:a,readable:n});return new oE({sessionId:s,context:o,tensor:u,dataType:t,shape:r})}releaseTensor(t){this.externalTensors.has(t)&&this.externalTensors.delete(t),this.freeTensors.push(t)}},oA=(...t)=>new oC(...t)}),uL=P(()=>{"use strict";oq(),oN(),oG(),uq(),oV(),oO=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),oR=(t,r)=>{if(t===r)return!0;if(void 0===t||void 0===r)return!1;let i=Object.keys(t).sort(),a=Object.keys(r).sort();return i.length===a.length&&i.every((i,n)=>i===a[n]&&t[i]===r[i])},oB=class{constructor(t){this.tensorManager=oA(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],e8(t.logLevel,!!t.debug)}get currentSessionId(){if(void 0===this.activeSessionId)throw Error("No active session");return this.activeSessionId}onRunStart(t){this.activeSessionId=t}async createMLContext(t){if(t instanceof GPUDevice){let r=this.mlContextCache.findIndex(r=>r.gpuDevice===t);if(-1!==r)return this.mlContextCache[r].mlContext;{let r=await navigator.ml.createContext(t);return this.mlContextCache.push({gpuDevice:t,mlContext:r}),r}}if(void 0===t){let t=this.mlContextCache.findIndex(t=>void 0===t.options&&void 0===t.gpuDevice);if(-1!==t)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:t}),t}}let r=this.mlContextCache.findIndex(r=>oR(r.options,t));if(-1!==r)return this.mlContextCache[r].mlContext;{let r=await navigator.ml.createContext(t);return this.mlContextCache.push({options:t,mlContext:r}),r}}get currentContext(){let t=this.getMLContext(this.currentSessionId);if(!t)throw Error(`No MLContext found for session ${this.currentSessionId}`);return t}registerMLContext(t,r){this.mlContextBySessionId.set(t,r);let i=this.sessionIdsByMLContext.get(r);i||(i=new Set,this.sessionIdsByMLContext.set(r,i)),i.add(t)}onReleaseSession(t){let r=this.mlContextBySessionId.get(t);if(!r)return;this.tensorManager.releaseTensorsForSession(t),this.mlContextBySessionId.delete(t);let i=this.sessionIdsByMLContext.get(r);if(i.delete(t),0===i.size){this.sessionIdsByMLContext.delete(r);let t=this.mlContextCache.findIndex(t=>t.mlContext===r);-1!==t&&this.mlContextCache.splice(t,1)}}getMLContext(t){return this.mlContextBySessionId.get(t)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(t){e9("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${t}}`),this.tensorManager.releaseTensorId(t)}async ensureTensor(t,r,i,a){let n=oO.get(r);if(!n)throw Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(t,n,i,a)}uploadTensor(t,r){if(!eN().shouldTransferToMLTensor)throw Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");e9("verbose",()=>`[WebNN] uploadTensor {tensorId: ${t}, data: ${r.byteLength}}`),this.tensorManager.upload(t,r)}async downloadTensor(t,r){return this.tensorManager.download(t,r)}createMLTensorDownloader(t,r){return async()=>{let i=await this.tensorManager.download(t);return e7(i,r)}}registerMLTensor(t,r,i){let a=oO.get(r);if(!a)throw Error(`Unsupported ONNX data type: ${r}`);let n=this.tensorManager.registerTensor(this.currentContext,t,a,i);return e9("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${a}, dimensions: ${i}} -> {tensorId: ${n}}`),n}registerMLConstant(t,r,i,a,n,s){if(!s)throw Error("External mounted files are not available.");let o=t;t.startsWith("./")&&(o=t.substring(2));let u=s.get(o);if(!u)throw Error(`File with name ${o} not found in preloaded files.`);if(r+i>u.byteLength)throw Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(r,r+i).buffer,d;switch(n.dataType){case"float32":d=new Float32Array(l);break;case"float16":d=new Uint16Array(l);break;case"int32":d=new Int32Array(l);break;case"uint32":d=new Uint32Array(l);break;case"int64":d=new BigInt64Array(l);break;case"uint64":d=new BigUint64Array(l);break;case"int8":d=new Int8Array(l);break;case"int4":case"uint4":case"uint8":d=new Uint8Array(l);break;default:throw Error(`Unsupported data type: ${n.dataType} in creating WebNN Constant from external data.`)}return e9("verbose",()=>`[WebNN] registerMLConstant {dataType: ${n.dataType}, shape: ${n.shape}}}`),a.constant(n,d)}flush(){}}}),uV={};U(uV,{init:()=>uF});var uG,uH,uF,uj,uK,uY,uQ,uZ,uX,uJ,u0,u1,u2,u3,u4,u6,u8,u5,u9,u7,le,lt,lr,li,la,ln,ls,lo,lu,ll,ld,lp,lc,lh,lf,lm,lg=P(()=>{"use strict";oq(),uW(),oV(),oK(),uL(),uG=class t{constructor(t,r,i,a){this.module=t,this.dataType=r,this.data=i,this.dims=a}getFloat32Array(){if(1!==this.dataType)throw Error("Invalid data type");let t=th.size(this.dims);return 0===t?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(7!==this.dataType)throw Error("Invalid data type");let t=th.size(this.dims);return 0===t?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(6!==this.dataType)throw Error("Invalid data type");let t=th.size(this.dims);return 0===t?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(10!==this.dataType&&4!==this.dataType)throw Error("Invalid data type");let t=th.size(this.dims);return 0===t?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(r){if(th.size(r)!==th.size(this.dims))throw Error("Invalid new shape");return new t(this.module,this.dataType,this.data,r)}},uH=class{constructor(t,r,i){this.module=t,this.backend=r,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=r.adapterInfo,this.deviceInfo=r.deviceInfo;let a=t.PTR_SIZE,n=i/t.PTR_SIZE,s=4===a?"i32":"i64";this.opKernelContext=Number(t.getValue(a*n++,s));let o=Number(t.getValue(a*n++,s));this.outputCount=Number(t.getValue(a*n++,s)),this.customDataOffset=Number(t.getValue(a*n++,"*")),this.customDataSize=Number(t.getValue(a*n++,s));let u=[];for(let r=0;r<o;r++){let r=Number(t.getValue(a*n++,s)),i=Number(t.getValue(a*n++,"*")),o=Number(t.getValue(a*n++,s)),l=[];for(let r=0;r<o;r++)l.push(Number(t.getValue(a*n++,s)));u.push(new uG(t,r,i,l))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(t,r){let i=r?.inputs?.map(t=>"number"==typeof t?this.inputs[t]:t)??this.inputs,a=r?.outputs??[];return this.backend.run(t,i,a,(t,r,i)=>new uG(this.module,r,this.output(t,i),i),(t,r)=>{let i=eY(t,r);if(!i)throw Error(`Unsupported data type: ${t}`);let a=i>0?this.backend.gpuDataManager.create(i).id:0;return new uG(this.module,t,a,r)},this.outputCount)}output(t,r){let i=this.module.stackSave();try{let i=this.module.PTR_SIZE,a=4===i?"i32":"i64",n=this.module.stackAlloc((1+r.length)*i);this.module.setValue(n,r.length,a);for(let t=0;t<r.length;t++)this.module.setValue(n+i*(t+1),r[t],a);return this.module._JsepOutput(this.opKernelContext,t,n)}catch(i){throw Error(`Failed to generate kernel's output[${t}] with dims [${r}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(i)}}},uF=async(t,r,i,a)=>{let n=r.jsepInit;if(!n)throw Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if("webgpu"===t){let t=new ox;await t.initialize(i,a),n("webgpu",[t,r=>t.alloc(Number(r)),r=>t.free(r),(i,a,n,s=!1)=>{if(s)e9("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(i)}, dst=${Number(a)}, size=${Number(n)}`),t.memcpy(Number(i),Number(a));else{e9("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(i)}, gpuDataId=${Number(a)}, size=${Number(n)}`);let s=r.HEAPU8.subarray(Number(i>>>0),Number(i>>>0)+Number(n));t.upload(Number(a),s)}},async(i,a,n)=>{e9("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${i}, dataOffset=${a}, size=${n}`),await t.download(Number(i),()=>r.HEAPU8.subarray(Number(a)>>>0,Number(a+n)>>>0))},(i,a,n)=>t.createKernel(i,Number(a),n,r.UTF8ToString(r._JsepGetNodeName(Number(a)))),r=>t.releaseKernel(r),(i,a,n,s)=>{e9("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${n}, kernel=${i}, contextDataOffset=${a}`);let o=new uH(r,t,Number(a));return t.computeKernel(Number(i),o,s)},()=>t.captureBegin(),()=>t.captureEnd(),()=>t.replay()])}else{let t=new oB(i);n("webnn",[t,()=>t.reserveTensorId(),r=>t.releaseTensorId(r),async(r,i,a,n)=>t.ensureTensor(r,i,a,n),(r,i)=>{t.uploadTensor(r,i)},async(r,i)=>t.downloadTensor(r,i)])}}}),l_=P(()=>{"use strict";oU(),oW(),oq(),oN(),oP(),oL(),uj=(t,r)=>{0!==eN()._OrtInit(t,r)&&eW("Can't initialize onnxruntime.")},uK=async t=>{uj(t.wasm.numThreads,eZ(t.logLevel))},uY=async(t,r)=>{{let i=(lg(),q(uV)).init;if("webgpu"===r){if(typeof navigator>"u"||!navigator.gpu)throw Error("WebGPU is not supported in current environment");let r=t.webgpu.adapter;if(r){if("object"!=typeof r.limits||"object"!=typeof r.features||"function"!=typeof r.requestDevice)throw Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=t.webgpu.powerPreference;if(void 0!==i&&"low-power"!==i&&"high-performance"!==i)throw Error(`Invalid powerPreference setting: "${i}"`);let a=t.webgpu.forceFallbackAdapter;if(void 0!==a&&"boolean"!=typeof a)throw Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(!(r=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:a})))throw Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await i("webgpu",eN(),t,r)}if("webnn"===r){if(typeof navigator>"u"||!navigator.ml)throw Error("WebNN is not supported in current environment");await i("webnn",eN(),t)}}},uQ=new Map,uZ=t=>{let r=eN(),i=r.stackSave();try{let i=r.PTR_SIZE,a=r.stackAlloc(2*i);0!==r._OrtGetInputOutputCount(t,a,a+i)&&eW("Can't get session input/output count.");let n=4===i?"i32":"i64";return[Number(r.getValue(a,n)),Number(r.getValue(a+i,n))]}finally{r.stackRestore(i)}},uX=t=>{let r=eN(),i=r._malloc(t.byteLength);if(0===i)throw Error(`Can't create a session. failed to allocate a buffer of size ${t.byteLength}.`);return r.HEAPU8.set(t,i),[i,t.byteLength]},uJ=async(t,r)=>{let i,a,n=eN();Array.isArray(t)?[i,a]=t:t.buffer===n.HEAPU8.buffer?[i,a]=[t.byteOffset,t.byteLength]:[i,a]=uX(t);let s=0,o=0,u=0,l=[],d=[],p=[];try{if([o,l]=eF(r),r?.externalData&&n.mountExternalData){let t=[];for(let i of r.externalData){let r="string"==typeof i?i:i.path;t.push(e1("string"==typeof i?i:i.data).then(t=>{n.mountExternalData(r,t)}))}await Promise.all(t)}for(let t of r?.executionProviders??[])if(("string"==typeof t?t:t.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,"string"!=typeof t){let r=t?.context,i=t?.gpuDevice,a=t?.deviceType,s=t?.powerPreference;r?n.currentContext=r:i?n.currentContext=await n.jsepCreateMLContext(i):n.currentContext=await n.jsepCreateMLContext({deviceType:a,powerPreference:s})}else n.currentContext=await n.jsepCreateMLContext();break}s=await n._OrtCreateSession(i,a,o),0===s&&eW("Can't create a session."),n.jsepOnCreateSession?.(),n.currentContext&&(n.jsepRegisterMLContext(s,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[t,c]=uZ(s),h=!!r?.enableGraphCapture,f=[],m=[],g=[];for(let r=0;r<t;r++){let t=n._OrtGetInputName(s,r);0===t&&eW("Can't get an input name."),d.push(t),f.push(n.UTF8ToString(t))}for(let t=0;t<c;t++){let i=n._OrtGetOutputName(s,t);0===i&&eW("Can't get an output name."),p.push(i);let a=n.UTF8ToString(i);m.push(a);{if(h&&r?.preferredOutputLocation===void 0){g.push("gpu-buffer");continue}let t="string"==typeof r?.preferredOutputLocation?r.preferredOutputLocation:r?.preferredOutputLocation?.[a]??"cpu";if("cpu"!==t&&"cpu-pinned"!==t&&"gpu-buffer"!==t&&"ml-tensor"!==t)throw Error(`Not supported preferred output location: ${t}.`);if(h&&"gpu-buffer"!==t)throw Error(`Not supported preferred output location: ${t}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);g.push(t)}}let _=null;return g.some(t=>"gpu-buffer"===t||"ml-tensor"===t)&&(u=n._OrtCreateBinding(s),0===u&&eW("Can't create IO binding."),_={handle:u,outputPreferredLocations:g,outputPreferredLocationsEncoded:g.map(t=>e0(t))}),uQ.set(s,[s,d,p,_,h,!1]),[s,f,m]}catch(t){throw d.forEach(t=>n._OrtFree(t)),p.forEach(t=>n._OrtFree(t)),0!==u&&0!==n._OrtReleaseBinding(u)&&eW("Can't release IO binding."),0!==s&&0!==n._OrtReleaseSession(s)&&eW("Can't release session."),t}finally{n._free(i),0!==o&&0!==n._OrtReleaseSessionOptions(o)&&eW("Can't release session options."),l.forEach(t=>n._free(t)),n.unmountExternalData?.()}},u0=t=>{let r=eN(),i=uQ.get(t);if(!i)throw Error(`cannot release session. invalid session id: ${t}`);let[a,n,s,o,u]=i;o&&(u&&0!==r._OrtClearBoundOutputs(o.handle)&&eW("Can't clear bound outputs."),0!==r._OrtReleaseBinding(o.handle)&&eW("Can't release IO binding.")),r.jsepOnReleaseSession?.(t),n.forEach(t=>r._OrtFree(t)),s.forEach(t=>r._OrtFree(t)),0!==r._OrtReleaseSession(a)&&eW("Can't release session."),uQ.delete(t)},u1=(t,r,i,a,n,s=!1)=>{if(!t){r.push(0);return}let o=eN(),u=o.PTR_SIZE,l=t[0],d=t[1],p=t[3],c,h;if("string"===l&&("gpu-buffer"===p||"ml-tensor"===p))throw Error("String tensor is not supported on GPU.");if(s&&"gpu-buffer"!==p)throw Error(`External buffer must be provided for input/output index ${n} when enableGraphCapture is true.`);if("gpu-buffer"===p){let r=t[2].gpuBuffer;h=eY(ej(l),d);let i=o.jsepRegisterBuffer;if(!i)throw Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');c=i(a,n,r,h)}else if("ml-tensor"===p){let r=t[2].mlTensor;h=eY(ej(l),d);let i=o.jsepRegisterMLTensor;if(!i)throw Error('Tensor location "ml-tensor" is not supported without using WebNN.');c=i(r,ej(l),d)}else{let r=t[2];if(Array.isArray(r)){h=u*r.length,c=o._malloc(h),i.push(c);for(let t=0;t<r.length;t++){if("string"!=typeof r[t])throw TypeError(`tensor data at index ${t} is not a string`);o.setValue(c+t*u,eP(r[t],i),"*")}}else h=r.byteLength,c=o._malloc(h),i.push(c),o.HEAPU8.set(new Uint8Array(r.buffer,r.byteOffset,h),c)}let f=o.stackSave(),m=o.stackAlloc(4*d.length);try{d.forEach((t,r)=>o.setValue(m+r*u,t,4===u?"i32":"i64"));let t=o._OrtCreateTensor(ej(l),c,h,m,d.length,e0(p));0===t&&eW(`Can't create tensor for input/output. session=${a}, index=${n}.`),r.push(t)}finally{o.stackRestore(f)}},u2=async(t,r,i,a,n,s)=>{let o=eN(),u=o.PTR_SIZE,l=uQ.get(t);if(!l)throw Error(`cannot run inference. invalid session id: ${t}`);let d=l[0],p=l[1],c=l[2],h=l[3],f=l[4],m=l[5],g=r.length,_=a.length,y=0,b=[],$=[],v=[],w=[],x=o.stackSave(),k=o.stackAlloc(g*u),S=o.stackAlloc(g*u),T=o.stackAlloc(_*u),I=o.stackAlloc(_*u);try{let l;o.jsepOnRunStart?.(d),[y,b]=eq(s);for(let a=0;a<g;a++)u1(i[a],$,w,t,r[a],f);for(let r=0;r<_;r++)u1(n[r],v,w,t,g+a[r],f);for(let t=0;t<g;t++)o.setValue(k+t*u,$[t],"*"),o.setValue(S+t*u,p[r[t]],"*");for(let t=0;t<_;t++)o.setValue(T+t*u,v[t],"*"),o.setValue(I+t*u,c[a[t]],"*");if(h&&!m){let{handle:i,outputPreferredLocations:s,outputPreferredLocationsEncoded:u}=h;if(p.length!==g)throw Error(`input count from feeds (${g}) is expected to be always equal to model's input count (${p.length}).`);for(let a=0;a<g;a++){let n=r[a];await o._OrtBindInput(i,p[n],$[a])!==0&&eW(`Can't bind input[${a}] for session=${t}.`)}for(let r=0;r<_;r++){let l=a[r];n[r]?.[3]?0!==o._OrtBindOutput(i,c[l],v[r],0)&&eW(`Can't bind pre-allocated output[${r}] for session=${t}.`):0!==o._OrtBindOutput(i,c[l],0,u[l])&&eW(`Can't bind output[${r}] to ${s[r]} for session=${t}.`)}uQ.set(t,[d,p,c,h,f,!0])}l=h?await o._OrtRunWithBinding(d,h.handle,_,T,y):await o._OrtRun(d,S,k,g,I,_,T,y),0!==l&&eW("failed to call OrtRun().");let x=[];for(let t=0;t<_;t++){let r=Number(o.getValue(T+t*u,"*"));if(r===v[t]){x.push(n[t]);continue}let i=o.stackSave(),s=o.stackAlloc(4*u),l=!1,d,p=0;try{0!==o._OrtGetTensorData(r,s,s+u,s+2*u,s+3*u)&&eW(`Can't access output tensor data on index ${t}.`);let i=4===u?"i32":"i64",n=Number(o.getValue(s,i));p=o.getValue(s+u,"*");let c=o.getValue(s+2*u,"*"),f=Number(o.getValue(s+3*u,i)),m=[];for(let t=0;t<f;t++)m.push(Number(o.getValue(c+t*u,i)));0!==o._OrtFree(c)&&eW("Can't free memory for tensor dims.");let g=m.reduce((t,r)=>t*r,1);d=eK(n);let _=h?.outputPreferredLocations[a[t]];if("string"===d){if("gpu-buffer"===_||"ml-tensor"===_)throw Error("String tensor is not supported on GPU.");let t=[];for(let r=0;r<g;r++){let i=o.getValue(p+r*u,"*"),a=o.getValue(p+(r+1)*u,"*"),n=r===g-1?void 0:a-i;t.push(o.UTF8ToString(i,n))}x.push([d,m,t,"cpu"])}else if("gpu-buffer"===_&&g>0){let t=o.jsepGetBuffer;if(!t)throw Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let i=t(p),a=eY(n,g);if(void 0===a||!eX(d))throw Error(`Unsupported data type: ${d}`);l=!0,x.push([d,m,{gpuBuffer:i,download:o.jsepCreateDownloader(i,a,d),dispose:()=>{0!==o._OrtReleaseTensor(r)&&eW("Can't release tensor.")}},"gpu-buffer"])}else if("ml-tensor"===_&&g>0){let t=o.jsepEnsureTensor;if(!t)throw Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(void 0===eY(n,g)||!eJ(d))throw Error(`Unsupported data type: ${d}`);let i=await t(p,n,m,!1);l=!0,x.push([d,m,{mlTensor:i,download:o.jsepCreateMLTensorDownloader(p,d),dispose:()=>{o.jsepReleaseTensorId(p),o._OrtReleaseTensor(r)}},"ml-tensor"])}else{let t=new(eQ(d))(g);new Uint8Array(t.buffer,t.byteOffset,t.byteLength).set(o.HEAPU8.subarray(p,p+t.byteLength)),x.push([d,m,t,"cpu"])}}finally{o.stackRestore(i),"string"===d&&p&&o._free(p),l||o._OrtReleaseTensor(r)}}return h&&!f&&(0!==o._OrtClearBoundOutputs(h.handle)&&eW("Can't clear bound outputs."),uQ.set(t,[d,p,c,h,f,!1])),x}finally{o.stackRestore(x),$.forEach(t=>o._OrtReleaseTensor(t)),v.forEach(t=>o._OrtReleaseTensor(t)),w.forEach(t=>o._free(t)),0!==y&&o._OrtReleaseRunOptions(y),b.forEach(t=>o._free(t))}},u3=t=>{let r=eN(),i=uQ.get(t);if(!i)throw Error("invalid session id");let a=i[0],n=r._OrtEndProfiling(a);0===n&&eW("Can't get an profile file name."),r._OrtFree(n)},u4=t=>{let r=[];for(let i of t){let t=i[2];!Array.isArray(t)&&"buffer"in t&&r.push(t.buffer)}return r}}),ly=P(()=>{"use strict";eo(),l_(),oN(),oM(),u6=()=>!!d.wasm.proxy&&"u">typeof document,u5=!1,u9=!1,u7=!1,lr=new Map,li=(t,r)=>{let i=lr.get(t);i?i.push(r):lr.set(t,[r])},la=()=>{if(u5||!u9||u7||!u8)throw Error("worker not ready")},ln=t=>{switch(t.data.type){case"init-wasm":u5=!1,t.data.err?(u7=!0,lt[1](t.data.err)):(u9=!0,lt[0]()),le&&(URL.revokeObjectURL(le),le=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let r=lr.get(t.data.type);t.data.err?r.shift()[1](t.data.err):r.shift()[0](t.data.out)}}},ls=async()=>{if(!u9){if(u5)throw Error("multiple calls to 'initWasm()' detected.");if(u7)throw Error("previous call to 'initWasm()' failed.");if(u5=!0,u6())return new Promise((t,r)=>{u8?.terminate(),eI().then(([i,a])=>{try{(u8=a).onerror=t=>r(t),u8.onmessage=ln,lt=[t,r];let n={type:"init-wasm",in:d};!n.in.wasm.wasmPaths&&(i||import.meta.url?.startsWith("file:"))&&(n.in.wasm.wasmPaths={wasm:new URL("ort-wasm-simd-threaded.jsep.wasm",import.meta.url).href}),u8.postMessage(n),le=i}catch(t){r(t)}},r)});try{await eM(d.wasm),await uK(d),u9=!0}catch(t){throw u7=!0,t}finally{u5=!1}}},lo=async t=>{if(u6())return la(),new Promise((r,i)=>{li("init-ep",[r,i]);let a={type:"init-ep",in:{epName:t,env:d}};u8.postMessage(a)});await uY(d,t)},lu=async t=>u6()?(la(),new Promise((r,i)=>{li("copy-from",[r,i]),u8.postMessage({type:"copy-from",in:{buffer:t}},[t.buffer])})):uX(t),ll=async(t,r)=>{if(!u6())return uJ(t,r);if(r?.preferredOutputLocation)throw Error('session option "preferredOutputLocation" is not supported for proxy.');return la(),new Promise((i,a)=>{li("create",[i,a]);let n={type:"create",in:{model:t,options:{...r}}},s=[];t instanceof Uint8Array&&s.push(t.buffer),u8.postMessage(n,s)})},ld=async t=>{if(u6())return la(),new Promise((r,i)=>{li("release",[r,i]),u8.postMessage({type:"release",in:t})});u0(t)},lp=async(t,r,i,a,n,s)=>{if(!u6())return u2(t,r,i,a,n,s);if(i.some(t=>"cpu"!==t[3]))throw Error("input tensor on GPU is not supported for proxy.");if(n.some(t=>t))throw Error("pre-allocated output tensor is not supported for proxy.");return la(),new Promise((n,o)=>{li("run",[n,o]),u8.postMessage({type:"run",in:{sessionId:t,inputIndices:r,inputs:i,outputIndices:a,options:s}},u4(i))})},lc=async t=>{if(u6())return la(),new Promise((r,i)=>{li("end-profiling",[r,i]),u8.postMessage({type:"end-profiling",in:t})});u3(t)}}),lb=P(()=>{"use strict";eo(),ly(),oq(),eu(),oL(),lh=(t,r)=>{switch(t.location){case"cpu":return[t.type,t.dims,t.data,"cpu"];case"gpu-buffer":return[t.type,t.dims,{gpuBuffer:t.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[t.type,t.dims,{mlTensor:t.mlTensor},"ml-tensor"];default:throw Error(`invalid data location: ${t.location} for ${r()}`)}},lf=t=>{switch(t[3]){case"cpu":return new T(t[0],t[2],t[1]);case"gpu-buffer":{let r=t[0];if(!eX(r))throw Error(`not supported data type: ${r} for deserializing GPU tensor`);let{gpuBuffer:i,download:a,dispose:n}=t[2];return T.fromGpuBuffer(i,{dataType:r,dims:t[1],download:a,dispose:n})}case"ml-tensor":{let r=t[0];if(!eJ(r))throw Error(`not supported data type: ${r} for deserializing MLTensor tensor`);let{mlTensor:i,download:a,dispose:n}=t[2];return T.fromMLTensor(i,{dataType:r,dims:t[1],download:a,dispose:n})}default:throw Error(`invalid data location: ${t[3]}`)}},lm=class{async fetchModelAndCopyToWasmMemory(t){return lu(await e1(t))}async loadModel(t,r){let i;z(),i="string"==typeof t?await this.fetchModelAndCopyToWasmMemory(t):t,[this.sessionId,this.inputNames,this.outputNames]=await ll(i,r),C()}async dispose(){return ld(this.sessionId)}async run(t,r,i){z();let a=[],n=[];Object.entries(t).forEach(t=>{let r=t[0],i=t[1],s=this.inputNames.indexOf(r);if(-1===s)throw Error(`invalid input '${r}'`);a.push(i),n.push(s)});let s=[],o=[];Object.entries(r).forEach(t=>{let r=t[0],i=t[1],a=this.outputNames.indexOf(r);if(-1===a)throw Error(`invalid output '${r}'`);s.push(i),o.push(a)});let u=a.map((t,r)=>lh(t,()=>`input "${this.inputNames[n[r]]}"`)),l=s.map((t,r)=>t?lh(t,()=>`output "${this.outputNames[o[r]]}"`):null),d=await lp(this.sessionId,n,u,o,l,i),p={};for(let t=0;t<d.length;t++)p[this.outputNames[o[t]]]=s[t]??lf(d[t]);return C(),p}startProfiling(){}endProfiling(){lc(this.sessionId)}}}),l$={};U(l$,{OnnxruntimeWebAssemblyBackend:()=>lw,initializeFlags:()=>lv,wasmBackend:()=>lx});var lv,lw,lx,lk=P(()=>{"use strict";eo(),ly(),lb(),lv=()=>{if(("number"!=typeof d.wasm.initTimeout||d.wasm.initTimeout<0)&&(d.wasm.initTimeout=0),!1===d.wasm.simd&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),"boolean"!=typeof d.wasm.proxy&&(d.wasm.proxy=!1),"boolean"!=typeof d.wasm.trace&&(d.wasm.trace=!1),"number"!=typeof d.wasm.numThreads||!Number.isInteger(d.wasm.numThreads)||d.wasm.numThreads<=0){if("u">typeof self&&!self.crossOriginIsolated)d.wasm.numThreads=1;else{let t=typeof navigator>"u"?N("node:os").cpus().length:navigator.hardwareConcurrency;d.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}}},lx=new(lw=class{async init(t){lv(),await ls(),await lo(t)}async createInferenceSessionHandler(t,r){let i=new lm;return await i.loadModel(t,r),Promise.resolve(i)}})});eo(),eo(),eo();var lS=es;{let t=(lk(),q(l$)).wasmBackend;a("webgpu",t,5),a("webnn",t,5),a("cpu",t,10),a("wasm",t,10)}Object.defineProperty(d.versions,"web",{value:"1.21.0-dev.20250114-228dd16893",enumerable:!0});export{O as InferenceSession,I as TRACE,z as TRACE_FUNC_BEGIN,C as TRACE_FUNC_END,T as Tensor,lS as default,d as env,a as registerBackend};