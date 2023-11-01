import{j as u,_ as ee,a as ne,F as M,s as te,b as se,R as ie}from"./assets/@qwik-city-plan-1f34eec4.mjs";/**
 * @license
 * @builder.io/qwik/server 1.2.15
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */var re=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,t)=>(typeof require<"u"?require:n)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});function oe(e,n){const t=n==null?void 0:n.mapper,s=e.symbolMapper?e.symbolMapper:i=>{var a;if(t){const o=j(i),c=t[o];if(!c){if((a=globalThis.__qwik_reg_symbols)==null?void 0:a.has(o))return[i,"_"];console.error("Cannot resolve symbol",i,"in",t)}return c}};return{isServer:!0,async importSymbol(i,a,o){var v;const c=j(o),l=(v=globalThis.__qwik_reg_symbols)==null?void 0:v.get(c);if(l)return l;let m=String(a);m.endsWith(".js")||(m+=".js");const _=re(m);if(!(o in _))throw new Error(`Q-ERROR: missing symbol '${o}' in module '${m}'.`);return _[o]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:i=>new Promise(a=>{setTimeout(()=>{a(i())})}),chunkForSymbol(i){return s(i,t)}}}async function ae(e,n){const t=oe(e,n);te(t)}var j=e=>{const n=e.lastIndexOf("_");return n>-1?e.slice(n+1):e};function w(){if(typeof performance>"u")return()=>0;const e=performance.now();return()=>(performance.now()-e)/1e6}function W(e){let n=e.base;return typeof e.base=="function"&&(n=e.base(e)),typeof n=="string"?(n.endsWith("/")||(n+="/"),n):"/build/"}var ce=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,le=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(
                    /* @vite-ignore */
                    url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`,de=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,me=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events = new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(
                    /* @vite-ignore */
                    url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`;function ue(e={}){return Array.isArray(e.events)&&e.events.length>0?(e.debug?me:de).replace("window.qEvents",JSON.stringify(e.events)):e.debug?le:ce}function pe(e,n,t){if(!t)return[];const s=n.prefetchStrategy,r=W(n);if(s!==null){if(!s||!s.symbolsToPrefetch||s.symbolsToPrefetch==="auto")return fe(e,t,r);if(typeof s.symbolsToPrefetch=="function")try{return s.symbolsToPrefetch({manifest:t.manifest})}catch(i){console.error("getPrefetchUrls, symbolsToPrefetch()",i)}}return[]}function fe(e,n,t){const s=[],r=e==null?void 0:e.qrls,{mapper:i,manifest:a}=n,o=new Map;if(Array.isArray(r))for(const c of r){const l=c.getHash(),m=i[l];m&&Y(a,o,s,t,m[1])}return s}function Y(e,n,t,s,r){const i=s+r;let a=n.get(i);if(!a){a={url:i,imports:[]},n.set(i,a);const o=e.bundles[r];if(o&&Array.isArray(o.imports))for(const c of o.imports)Y(e,n,a.imports,s,c)}t.push(a)}function be(e){if(e!=null&&e.mapping!=null&&typeof e.mapping=="object"&&e.symbols!=null&&typeof e.symbols=="object"&&e.bundles!=null&&typeof e.bundles=="object")return e}function g(){let r=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return r+="w.postMessage(u.map(u=>new URL(u,origin)+''));",r+="w.onmessage=()=>{w.terminate()};",r}function k(e){const n=[],t=s=>{if(Array.isArray(s))for(const r of s)n.includes(r.url)||(n.push(r.url),t(r.imports))};return t(e),n}function qe(e){const n=new Map;let t=0;const s=(o,c)=>{if(Array.isArray(o))for(const l of o){const m=n.get(l.url)||0;n.set(l.url,m+1),t++,c.has(l.url)||(c.add(l.url),s(l.imports,c))}},r=new Set;for(const o of e)r.clear(),s(o.imports,r);const i=t/n.size*2,a=Array.from(n.entries());return a.sort((o,c)=>c[1]-o[1]),a.slice(0,5).filter(o=>o[1]>i).map(o=>o[0])}function ye(e,n,t){const s=je(e==null?void 0:e.implementation),r=[];return s.prefetchEvent==="always"&&ve(r,n,t),s.linkInsert==="html-append"&&_e(r,n,s),s.linkInsert==="js-append"?he(r,n,s,t):s.workerFetchInsert==="always"&&we(r,n,t),r.length>0?u(M,{children:r}):null}function ve(e,n,t){const s=qe(n);for(const r of s)e.push(u("link",{rel:"modulepreload",href:r,nonce:t}));e.push(u("script",{"q:type":"prefetch-bundles",dangerouslySetInnerHTML:"document.dispatchEvent(new CustomEvent('qprefetch', {detail:{links: [location.pathname]}}))",nonce:t}))}function _e(e,n,t){const s=k(n),r=t.linkRel||"prefetch";for(const i of s){const a={};a.href=i,a.rel=r,(r==="prefetch"||r==="preload")&&i.endsWith(".js")&&(a.as="script"),e.push(u("link",a,void 0))}}function he(e,n,t,s){const r=t.linkRel||"prefetch";let i="";t.workerFetchInsert==="no-link-support"&&(i+="let supportsLinkRel = true;"),i+=`const u=${JSON.stringify(k(n))};`,i+="u.map((u,i)=>{",i+="const l=document.createElement('link');",i+='l.setAttribute("href",u);',i+=`l.setAttribute("rel","${r}");`,t.workerFetchInsert==="no-link-support"&&(i+="if(i===0){",i+="try{",i+=`supportsLinkRel=l.relList.supports("${r}");`,i+="}catch(e){}",i+="}"),i+="document.body.appendChild(l);",i+="});",t.workerFetchInsert==="no-link-support"&&(i+="if(!supportsLinkRel){",i+=g(),i+="}"),t.workerFetchInsert==="always"&&(i+=g()),e.push(u("script",{type:"module","q:type":"link-js",dangerouslySetInnerHTML:i,nonce:s}))}function we(e,n,t){let s=`const u=${JSON.stringify(k(n))};`;s+=g(),e.push(u("script",{type:"module","q:type":"prefetch-worker",dangerouslySetInnerHTML:s,nonce:t}))}function je(e){return e&&typeof e=="object"?e:ge}var ge={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},ke="<!DOCTYPE html>";async function xe(e,n){var C;let t=n.stream,s=0,r=0,i=0,a=0,o="",c;const l=((C=n.streaming)==null?void 0:C.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},m=n.containerTagName??"html",_=n.containerAttributes??{},v=t,U=w(),J=W(n),p=Ne(n.manifest);function x(){o&&(v.write(o),o="",s=0,i++,i===1&&(a=U()))}function N(d){const f=d.length;s+=f,r+=f,o+=d}switch(l.strategy){case"disabled":t={write:N};break;case"direct":t=v;break;case"auto":let d=0,f=!1;const z=l.maximunChunk??0,h=l.maximunInitialChunk??0;t={write(y){y==="<!--qkssr-f-->"?f||(f=!0):y==="<!--qkssr-pu-->"?d++:y==="<!--qkssr-po-->"?d--:N(y),d===0&&(f||s>=(i===0?h:z))&&(f=!1,x())}};break}m==="html"?t.write(ke):(t.write("<!--cq-->"),n.qwikLoader?(n.qwikLoader.include===void 0&&(n.qwikLoader.include="never"),n.qwikLoader.position===void 0&&(n.qwikLoader.position="bottom")):n.qwikLoader={include:"never"}),n.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await ae(n,p);const I=p==null?void 0:p.manifest.injections,H=I?I.map(d=>u(d.tag,d.attributes??{})):void 0,V=w(),E=[];let A=0,S=0;await ee(e,{stream:t,containerTagName:m,containerAttributes:_,serverData:n.serverData,base:J,beforeContent:H,beforeClose:async(d,f,z,h)=>{var T,D,P,O,B,$,K;A=V();const y=w();c=await ne(d,f,void 0,h);const q=[];if(n.prefetchStrategy!==null){const b=pe(c,n,p);if(b.length>0){const Q=ye(n.prefetchStrategy,b,(T=n.serverData)==null?void 0:T.nonce);Q&&q.push(Q)}}const G=JSON.stringify(c.state,void 0,void 0);q.push(u("script",{type:"qwik/json",dangerouslySetInnerHTML:Ie(G),nonce:(D=n.serverData)==null?void 0:D.nonce})),c.funcs.length>0&&q.push(u("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:Ae(c.funcs),nonce:(P=n.serverData)==null?void 0:P.nonce}));const X=!c||c.mode!=="static",F=((O=n.qwikLoader)==null?void 0:O.include)??"auto",L=F==="always"||F==="auto"&&X;if(L){const b=ue({events:(B=n.qwikLoader)==null?void 0:B.events,debug:n.debug});q.push(u("script",{id:"qwikloader",dangerouslySetInnerHTML:b,nonce:($=n.serverData)==null?void 0:$.nonce}))}const R=Array.from(f.$events$,b=>JSON.stringify(b));if(R.length>0){let b=`window.qwikevents.push(${R.join(", ")})`;L||(b=`window.qwikevents||=[];${b}`),q.push(u("script",{dangerouslySetInnerHTML:b,nonce:(K=n.serverData)==null?void 0:K.nonce}))}return Ee(E,d),S=y(),u(M,{children:q})},manifestHash:(p==null?void 0:p.manifest.manifestHash)||"dev"}),m!=="html"&&t.write("<!--/cq-->"),x();const Z=c.resources.some(d=>d._cache!==1/0);return{prefetchResources:void 0,snapshotResult:c,flushes:i,manifest:p==null?void 0:p.manifest,size:r,isStatic:!Z,timing:{render:A,snapshot:S,firstFlush:a},_symbols:E}}function Ne(e){if(e){if("mapper"in e)return e;if(e=be(e),e){const n={};return Object.entries(e.mapping).forEach(([t,s])=>{n[j(t)]=[t,s]}),{mapper:n,manifest:e}}}}var Ie=e=>e.replace(/<(\/?script)/g,"\\x3C$1");function Ee(e,n){var t;for(const s of n){const r=(t=s.$componentQrl$)==null?void 0:t.getSymbol();r&&!e.includes(r)&&e.push(r)}}function Ae(e){return`document.currentScript.qFuncs=[${e.join(`,
`)}]`}const Se={manifestHash:"rrxipt",symbols:{s_02wMImzEAbk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useTask",canonicalFilename:"s_02wmimzeabk",hash:"02wMImzEAbk",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_TxCFOy819ag",loc:[26295,35258]},s_0heB8WFezIo:{origin:"components/Cards/cards.tsx",displayName:"Cards_component",canonicalFilename:"s_0heb8wfezio",hash:"0heB8WFezIo",ctxKind:"function",ctxName:"component$",captures:!1,loc:[606,2965]},s_0vphQYqOdZI:{origin:"components/router-head/router-head.tsx",displayName:"RouterHead_component",canonicalFilename:"s_0vphqyqodzi",hash:"0vphQYqOdZI",ctxKind:"function",ctxName:"component$",captures:!1,loc:[243,854]},s_4ubNSfBp6b8:{origin:"components/Background/background.tsx",displayName:"Background_component",canonicalFilename:"s_4ubnsfbp6b8",hash:"4ubNSfBp6b8",ctxKind:"function",ctxName:"component$",captures:!1,loc:[171,1374]},s_8gdLBszqbaM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component",canonicalFilename:"s_8gdlbszqbam",hash:"8gdLBszqbaM",ctxKind:"function",ctxName:"component$",captures:!1,loc:[37211,38862]},s_B0lqk5IDDy4:{origin:"routes/index.tsx",displayName:"routes_component",canonicalFilename:"s_b0lqk5iddy4",hash:"B0lqk5IDDy4",ctxKind:"function",ctxName:"component$",captures:!1,loc:[242,1361]},s_KvcMoBagFGY:{origin:"routes/pandacss/index.tsx",displayName:"pandacss_component",canonicalFilename:"s_kvcmobagfgy",hash:"KvcMoBagFGY",ctxKind:"function",ctxName:"component$",captures:!1,loc:[118,348]},s_Nk9PlpjQm9Y:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component",canonicalFilename:"s_nk9plpjqm9y",hash:"Nk9PlpjQm9Y",ctxKind:"function",ctxName:"component$",captures:!1,loc:[48978,50329]},s_TxCFOy819ag:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component",canonicalFilename:"s_txcfoy819ag",hash:"TxCFOy819ag",ctxKind:"function",ctxName:"component$",captures:!1,loc:[23025,35545]},s_VKFlAWJuVm8:{origin:"routes/layout.tsx",displayName:"layout_component",canonicalFilename:"s_vkflawjuvm8",hash:"VKFlAWJuVm8",ctxKind:"function",ctxName:"component$",captures:!1,loc:[654,730]},s_WmYC5H00wtI:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component",canonicalFilename:"s_wmyc5h00wti",hash:"WmYC5H00wtI",ctxKind:"function",ctxName:"component$",captures:!1,loc:[35829,37092]},s_aR0LYx09dlQ:{origin:"components/Hero/hero.tsx",displayName:"Hero_component",canonicalFilename:"s_ar0lyx09dlq",hash:"aR0LYx09dlQ",ctxKind:"function",ctxName:"component$",captures:!1,loc:[4976,5853]},s_cLxhDSZvvW8:{origin:"components/ThemeSelector/themeselector.tsx",displayName:"ThemeSelector_component",canonicalFilename:"s_clxhdszvvw8",hash:"cLxhDSZvvW8",ctxKind:"function",ctxName:"component$",captures:!1,loc:[470,2026]},s_e0ssiDXoeAM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_e0ssidxoeam",hash:"e0ssiDXoeAM",ctxKind:"function",ctxName:"component$",captures:!1,loc:[7931,8645]},s_rIMYpLARjwc:{origin:"routes/wip/index.tsx",displayName:"wip_component",canonicalFilename:"s_rimyplarjwc",hash:"rIMYpLARjwc",ctxKind:"function",ctxName:"component$",captures:!1,loc:[245,1450]},s_tntnak2DhJ8:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_tntnak2dhj8",hash:"tntnak2DhJ8",ctxKind:"function",ctxName:"component$",captures:!1,loc:[5032,7227]},s_RPDJAz33WLA:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useStyles",canonicalFilename:"s_rpdjaz33wla",hash:"RPDJAz33WLA",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_TxCFOy819ag",loc:[23080,23114]},s_A5bZC7WO00A:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"routeActionQrl_action_submit",canonicalFilename:"s_a5bzc7wo00a",hash:"A5bZC7WO00A",ctxKind:"function",ctxName:"submit",captures:!0,loc:[40230,41864]},s_DyVc0YBIqQU:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"spa_init",canonicalFilename:"s_dyvc0ybiqqu",hash:"DyVc0YBIqQU",ctxKind:"function",ctxName:"spaInit",captures:!1,loc:[1391,6872]},s_wOIPfiQ04l4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"serverQrl_stuff",canonicalFilename:"s_woipfiq04l4",hash:"wOIPfiQ04l4",ctxKind:"function",ctxName:"stuff",captures:!0,loc:[44878,46864]},s_BUbtvTyvVRE:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component_goto",canonicalFilename:"s_bubtvtyvvre",hash:"BUbtvTyvVRE",ctxKind:"function",ctxName:"goto",captures:!1,parent:"s_WmYC5H00wtI",loc:[36230,36291]},s_eBQ0vFsFKsk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_onPrefetch_event",canonicalFilename:"s_ebq0vfsfksk",hash:"eBQ0vFsFKsk",ctxKind:"function",ctxName:"event$",captures:!1,parent:"s_8gdLBszqbaM",loc:[37738,37801]},s_fX0bDjeJa0E:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_goto",canonicalFilename:"s_fx0bdjeja0e",hash:"fX0bDjeJa0E",ctxKind:"function",ctxName:"goto",captures:!0,parent:"s_TxCFOy819ag",loc:[24364,25683]},s_i1Cv0pYJNR0:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_handleClick_event",canonicalFilename:"s_i1cv0pyjnr0",hash:"i1Cv0pYJNR0",ctxKind:"function",ctxName:"event$",captures:!0,parent:"s_8gdLBszqbaM",loc:[37919,38434]},s_p9MSze0ojs4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component_form_onSubmit",canonicalFilename:"s_p9msze0ojs4",hash:"p9MSze0ojs4",ctxKind:"function",ctxName:"_jsxS",captures:!0,parent:"s_Nk9PlpjQm9Y",loc:[49285,49982]},s_xqwDAIngONU:{origin:"components/ThemeSelector/themeselector.tsx",displayName:"ThemeSelector_component_div_p_onClick",canonicalFilename:"s_xqwdaingonu",hash:"xqwDAIngONU",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:"s_cLxhDSZvvW8",loc:[1922,1956]}},mapping:{s_02wMImzEAbk:"q-45cdb9fc.js",s_0heB8WFezIo:"q-c986be03.js",s_0vphQYqOdZI:"q-5b880ce2.js",s_4ubNSfBp6b8:"q-eb79616d.js",s_8gdLBszqbaM:"q-d73d612c.js",s_B0lqk5IDDy4:"q-18dc9153.js",s_KvcMoBagFGY:"q-b2f402d2.js",s_Nk9PlpjQm9Y:"q-0e39d41e.js",s_TxCFOy819ag:"q-45cdb9fc.js",s_VKFlAWJuVm8:"q-8d4deccb.js",s_WmYC5H00wtI:"q-d5a28901.js",s_aR0LYx09dlQ:"q-0db8ff5e.js",s_cLxhDSZvvW8:"q-3469f6da.js",s_e0ssiDXoeAM:"q-a915600b.js",s_rIMYpLARjwc:"q-57f90100.js",s_tntnak2DhJ8:"q-b2c566c3.js",s_RPDJAz33WLA:"q-45cdb9fc.js",s_A5bZC7WO00A:"q-eea00131.js",s_DyVc0YBIqQU:"q-663033b0.js",s_wOIPfiQ04l4:"q-39cfc83c.js",s_BUbtvTyvVRE:"q-d5a28901.js",s_eBQ0vFsFKsk:"q-67efc913.js",s_fX0bDjeJa0E:"q-45cdb9fc.js",s_i1Cv0pYJNR0:"q-d73d612c.js",s_p9MSze0ojs4:"q-0e39d41e.js",s_xqwDAIngONU:"q-3469f6da.js"},bundles:{"q-0db8ff5e.js":{size:2871,imports:["q-12fb87a4.js","q-2a87dfca.js"],origins:["src/components/Hero/hero.tsx","src/entry_Hero.js","src/s_ar0lyx09dlq.js"],symbols:["s_aR0LYx09dlQ"]},"q-0e39d41e.js":{size:1037,imports:["q-2a87dfca.js","q-605109e3.js"],origins:["src/entry_GetForm.js","src/s_nk9plpjqm9y.js","src/s_p9msze0ojs4.js"],symbols:["s_Nk9PlpjQm9Y","s_p9MSze0ojs4"]},"q-12fb87a4.js":{size:8110,origins:["src/styled-system/css/conditions.mjs","src/styled-system/css/css.mjs"]},"q-18dc9153.js":{size:746,imports:["q-12fb87a4.js","q-2a87dfca.js","q-fd20876c.js"],origins:["src/entry_routes.js","src/s_b0lqk5iddy4.js"],symbols:["s_B0lqk5IDDy4"]},"q-2a87dfca.js":{size:46851,origins:["node_modules/@builder.io/qwik/core.min.mjs"]},"q-3469f6da.js":{size:974,imports:["q-12fb87a4.js","q-2a87dfca.js","q-54c56343.js"],origins:["src/components/ThemeSelector/themeselector.tsx","src/entry_ThemeSelector.js","src/s_clxhdszvvw8.js","src/s_xqwdaingonu.js"],symbols:["s_cLxhDSZvvW8","s_xqwDAIngONU"]},"q-39cfc83c.js":{size:889,imports:["q-2a87dfca.js","q-605109e3.js"],origins:["src/entry_serverQrl.js","src/s_woipfiq04l4.js"],symbols:["s_wOIPfiQ04l4"]},"q-45cb698e.js":{size:125,imports:["q-2a87dfca.js"],dynamicImports:["q-8ea06850.js"],origins:["@qwik-city-entries"]},"q-45cdb9fc.js":{size:5790,imports:["q-2a87dfca.js","q-605109e3.js"],dynamicImports:["q-45cb698e.js","q-7e7ec543.js","q-92b3d86f.js","q-bef1745c.js","q-c9696811.js"],origins:["@qwik-city-plan","src/entry_QwikCityProvider.js","src/s_02wmimzeabk.js","src/s_fx0bdjeja0e.js","src/s_rpdjaz33wla.js","src/s_txcfoy819ag.js"],symbols:["s_02wMImzEAbk","s_fX0bDjeJa0E","s_RPDJAz33WLA","s_TxCFOy819ag"]},"q-54c56343.js":{size:2669,imports:["q-2a87dfca.js"],dynamicImports:["q-b2c566c3.js"],origins:["src/global.css","src/root.tsx"]},"q-57f90100.js":{size:838,imports:["q-12fb87a4.js","q-2a87dfca.js","q-e90c5edf.js"],origins:["src/entry_wip.js","src/s_rimyplarjwc.js"],symbols:["s_rIMYpLARjwc"]},"q-5b880ce2.js":{size:671,imports:["q-2a87dfca.js","q-605109e3.js"],origins:["src/entry_RouterHead.js","src/s_0vphqyqodzi.js"],symbols:["s_0vphQYqOdZI"]},"q-605109e3.js":{size:7493,imports:["q-2a87dfca.js"],dynamicImports:["q-45cdb9fc.js","q-663033b0.js","q-a915600b.js"],origins:["@qwik-city-sw-register","node_modules/@builder.io/qwik-city/index.qwik.mjs"]},"q-663033b0.js":{size:2286,origins:["src/entry_spaInit.js","src/s_dyvc0ybiqqu.js"],symbols:["s_DyVc0YBIqQU"]},"q-67efc913.js":{size:128,imports:["q-2a87dfca.js","q-605109e3.js"],origins:["src/s_ebq0vfsfksk.js"],symbols:["s_eBQ0vFsFKsk"]},"q-7e7ec543.js":{size:229,imports:["q-2a87dfca.js"],dynamicImports:["q-57f90100.js"],origins:["src/routes/wip/index.tsx"]},"q-8d4deccb.js":{size:191,imports:["q-2a87dfca.js","q-fd20876c.js"],origins:["src/entry_layout.js","src/s_vkflawjuvm8.js"],symbols:["s_VKFlAWJuVm8"]},"q-8ea06850.js":{size:2539,origins:["node_modules/@builder.io/qwik-city/service-worker.mjs","src/routes/service-worker.ts"]},"q-92b3d86f.js":{size:207,imports:["q-2a87dfca.js"],dynamicImports:["q-b2f402d2.js"],origins:["src/routes/pandacss/index.tsx"]},"q-a915600b.js":{size:462,imports:["q-2a87dfca.js","q-605109e3.js"],origins:["src/entry_RouterOutlet.js","src/s_e0ssidxoeam.js"],symbols:["s_e0ssiDXoeAM"]},"q-b2c566c3.js":{size:2197,imports:["q-2a87dfca.js","q-605109e3.js"],dynamicImports:["q-5b880ce2.js"],origins:["src/components/router-head/router-head.tsx","src/entry_root.js","src/s_tntnak2dhj8.js"],symbols:["s_tntnak2DhJ8"]},"q-b2f402d2.js":{size:203,imports:["q-12fb87a4.js","q-2a87dfca.js"],origins:["src/entry_pandacss.js","src/s_kvcmobagfgy.js"],symbols:["s_KvcMoBagFGY"]},"q-bef1745c.js":{size:337,imports:["q-2a87dfca.js"],dynamicImports:["q-18dc9153.js"],origins:["src/routes/index.tsx"]},"q-c9696811.js":{size:310,imports:["q-2a87dfca.js"],dynamicImports:["q-8d4deccb.js"],origins:["src/routes/layout.tsx"]},"q-c986be03.js":{size:1630,imports:["q-12fb87a4.js","q-2a87dfca.js","q-e90c5edf.js"],origins:["src/entry_Cards.js","src/s_0heb8wfezio.js"],symbols:["s_0heB8WFezIo"]},"q-d5a28901.js":{size:787,imports:["q-2a87dfca.js","q-605109e3.js"],origins:["src/entry_QwikCityMockProvider.js","src/s_bubtvtyvvre.js","src/s_wmyc5h00wti.js"],symbols:["s_BUbtvTyvVRE","s_WmYC5H00wtI"]},"q-d73d612c.js":{size:1149,imports:["q-2a87dfca.js","q-605109e3.js"],dynamicImports:["q-67efc913.js"],origins:["src/entry_Link.js","src/s_8gdlbszqbam.js","src/s_i1cv0pyjnr0.js"],symbols:["s_8gdLBszqbaM","s_i1Cv0pYJNR0"]},"q-e90c5edf.js":{size:568,imports:["q-2a87dfca.js"],dynamicImports:["q-c986be03.js"],origins:["src/components/Cards/cards.tsx"]},"q-eb79616d.js":{size:674,imports:["q-12fb87a4.js","q-2a87dfca.js","q-54c56343.js"],origins:["src/entry_Background.js","src/s_4ubnsfbp6b8.js"],symbols:["s_4ubNSfBp6b8"]},"q-eea00131.js":{size:751,imports:["q-2a87dfca.js"],origins:["src/entry_routeActionQrl.js","src/s_a5bzc7wo00a.js"],symbols:["s_A5bZC7WO00A"]},"q-fd20876c.js":{size:223,imports:["q-2a87dfca.js"],dynamicImports:["q-eb79616d.js"],origins:["src/components/Background/background.tsx"]}},injections:[{tag:"link",location:"head",attributes:{rel:"stylesheet",href:"/build/q-7cf08457.css"}}],version:"1",options:{target:"client",buildMode:"production",entryStrategy:{type:"smart"}},platform:{qwik:"1.2.15",vite:"",rollup:"3.29.4",env:"node",os:"linux",node:"21.1.0"}};function Fe(e){return xe(se(ie,null,3,"Qb_0"),{manifest:Se,...e,containerAttributes:{lang:"en-us",...e.containerAttributes}})}export{Fe as default};
