if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return l[e]||(s=new Promise((async s=>{if("document"in self){const l=document.createElement("script");l.src=e,document.head.appendChild(l),l.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!l[e])throw new Error(`Module ${e} didn’t register its module`);return l[e]}))},s=(s,l)=>{Promise.all(s.map(e)).then((e=>l(1===e.length?e[0]:e)))},l={require:Promise.resolve(s)};self.define=(s,i,r)=>{l[s]||(l[s]=Promise.resolve().then((()=>{let l={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return l;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return l.default||(l.default=s),l}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"3ba11e8e6a5ee6fd52f10708ac0c178b"},{url:"assets/404.26765530.js",revision:null},{url:"assets/404.html.7caa4353.js",revision:null},{url:"assets/404.html.c3886853.js",revision:null},{url:"assets/app.2098066f.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.12d866de.js",revision:null},{url:"assets/index.html.2491af8b.js",revision:null},{url:"assets/index.html.399ad746.js",revision:null},{url:"assets/index.html.4c621ab2.js",revision:null},{url:"assets/index.html.5fb91161.js",revision:null},{url:"assets/index.html.6eef53c9.js",revision:null},{url:"assets/index.html.7a4c0bea.js",revision:null},{url:"assets/index.html.9d36c1b6.js",revision:null},{url:"assets/index.html.b242512e.js",revision:null},{url:"assets/index.html.ec6330dd.js",revision:null},{url:"assets/Layout.dc459eb2.js",revision:null},{url:"assets/search.0782d0d1.svg",revision:null},{url:"assets/style.cd1bb268.css",revision:null},{url:"assets/vue-composition-api.html.3dfeb6c8.js",revision:null},{url:"assets/vue-composition-api.html.ef1fef8c.js",revision:null},{url:"assets/vue3-rfc.html.87f02c9e.js",revision:null},{url:"assets/vue3-rfc.html.ee173a9a.js",revision:null},{url:"assets/创建.html.9004c1a9.js",revision:null},{url:"assets/创建.html.af2f95da.js",revision:null},{url:"frontend/vite/index.html",revision:"1b00d4a98eec67500fb463424f8c8302"},{url:"frontend/vue/index.html",revision:"043a2e104237aacabc9c896abbcc5ce7"},{url:"frontend/vue/vue-composition-api.html",revision:"647e713a2d0cae202e9ee493c37fa2db"},{url:"frontend/vue/vue3-rfc.html",revision:"9029654be8ebad402b9ccfdb8bc2d806"},{url:"images/hero-img.png",revision:"573fbdc082a5ae37ee8b9d1c64c2d0e4"},{url:"images/logo.png",revision:"1c90584106f5cea6d56075e8cb53c5b4"},{url:"index.html",revision:"9da46186018f4006ffd5c1096f81a63e"},{url:"project/daily/index.html",revision:"a7fb2370d1c2ad9b8dcf1b33ea8567fa"},{url:"rule/index.html",revision:"388b71e26e5a1522f9e82f2a38d16536"},{url:"rule/创建.html",revision:"7c5209525cbe8828d85b20710f3a582b"}],{})}));
