if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/animation-BQ7AMZLt.js",revision:null},{url:"assets/animation-legacy-guHR4QKS.js",revision:null},{url:"assets/confconnect-legacy-BSs7Inp-.js",revision:null},{url:"assets/confconnect-MmlfOzRO.js",revision:null},{url:"assets/focus-visible-legacy-DUnU5P9z.js",revision:null},{url:"assets/focus-visible-supuXXMI.js",revision:null},{url:"assets/FooterApp-YS-u01HF.css",revision:null},{url:"assets/FooterApp.vue_vue_type_script_setup_true_lang-D-hizSer.js",revision:null},{url:"assets/FooterApp.vue_vue_type_script_setup_true_lang-legacy-ExsLBSqa.js",revision:null},{url:"assets/HomePage-gV1U9bBQ.js",revision:null},{url:"assets/HomePage-legacy-7Z6rD2W5.js",revision:null},{url:"assets/index-CgE_0vDE.css",revision:null},{url:"assets/index-kly8HKmH.js",revision:null},{url:"assets/index-legacy-CbC_At0k.js",revision:null},{url:"assets/index8-CGahkw1w.js",revision:null},{url:"assets/index8-legacy-DxnOao-f.js",revision:null},{url:"assets/index9-CAvgrPHH.js",revision:null},{url:"assets/index9-legacy-BpVLs9Tu.js",revision:null},{url:"assets/input-shims-CvMMbNaZ.js",revision:null},{url:"assets/input-shims-legacy-jqKFQuFX.js",revision:null},{url:"assets/ios.transition-legacy-Cdfuk7Jo.js",revision:null},{url:"assets/ios.transition-rFScYhKY.js",revision:null},{url:"assets/keyboard-DqiQDabN.js",revision:null},{url:"assets/keyboard-legacy-Or1J2Afh.js",revision:null},{url:"assets/keyboard2-Bv6Hic0p.js",revision:null},{url:"assets/keyboard2-legacy-DDXbAkzZ.js",revision:null},{url:"assets/Login-BqIjZrM7.js",revision:null},{url:"assets/Login-legacy-Dw1_G7ha.js",revision:null},{url:"assets/md.transition-C3oSnS3z.js",revision:null},{url:"assets/md.transition-legacy-BTzubfCs.js",revision:null},{url:"assets/polyfills-legacy-DwBJMNkW.js",revision:null},{url:"assets/PostPrev-CtEP4twb.js",revision:null},{url:"assets/PostPrev-legacy-CKGS1UCH.js",revision:null},{url:"assets/PostsAdd-DuDrXJth.js",revision:null},{url:"assets/PostsAdd-legacy-uol29PFg.js",revision:null},{url:"assets/PostsList-BA1ernzw.js",revision:null},{url:"assets/PostsList-legacy-CyGW3qT7.js",revision:null},{url:"assets/Registr-DWj08Tl_.js",revision:null},{url:"assets/Registr-legacy-CBEcbyiZ.js",revision:null},{url:"assets/status-tap-legacy-ByoRTaGF.js",revision:null},{url:"assets/status-tap-XQnswqHh.js",revision:null},{url:"assets/swipe-back-Dmaqg2uN.js",revision:null},{url:"assets/swipe-back-legacy-CYatJA3C.js",revision:null},{url:"index.html",revision:"10c0dcfda7a3a4f5132a7118a415df56"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"6716168d8a1c81427d770c521ef258ec"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
