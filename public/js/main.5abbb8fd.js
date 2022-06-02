/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$2=Symbol(),n$5=new Map;class s$3{constructor(t,n){if(this._$cssResult$=!0,n!==e$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){let e=n$5.get(this.cssText);return t$1&&void 0===e&&(n$5.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o$3=t=>new s$3("string"==typeof t?t:t+"",e$2),r$2=(t,...n)=>{const o=1===t.length?t[0]:n.reduce(((e,n,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1]),t[0]);return new s$3(o,e$2)},i$1=(e,n)=>{t$1?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n);}));},S$1=t$1?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o$3(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$1=window.trustedTypes,r$1=e$1?e$1.emptyScript:"",h$1=window.reactiveElementPolyfillSupport,o$2={toAttribute(t,i){switch(i){case Boolean:t=t?r$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},n$4=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:o$2,reflect:!1,hasChanged:n$4};class a$1 extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o();}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S$1(i));}else void 0!==i&&s.push(S$1(i));return s}static _$Eh(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1);}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$ES(t,i,s=l$2){var e,r;const h=this.constructor._$Eh(t,s);if(void 0!==h&&!0===s.reflect){const n=(null!==(r=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==r?r:o$2.toAttribute)(i,s.type);this._$Ei=t,null==n?this.removeAttribute(h):this.setAttribute(h,n),this._$Ei=null;}}_$AK(t,i){var s,e,r;const h=this.constructor,n=h._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=h.getPropertyOptions(n),l=t.converter,a=null!==(r=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==r?r:o$2.fromAttribute;this._$Ei=n,this[n]=a(i,t.type),this._$Ei=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||n$4)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ep=this._$E_());}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU();}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$EC=void 0),this._$EU();}updated(t){}firstUpdated(t){}}a$1.finalized=!0,a$1.elementProperties=new Map,a$1.elementStyles=[],a$1.shadowRootOptions={mode:"open"},null==h$1||h$1({ReactiveElement:a$1}),(null!==(s$2=globalThis.reactiveElementVersions)&&void 0!==s$2?s$2:globalThis.reactiveElementVersions=[]).push("1.3.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;const i=globalThis.trustedTypes,s$1=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e=`lit$${(Math.random()+"").slice(9)}$`,o$1="?"+e,n$3=`<${o$1}>`,l$1=document,h=(t="")=>l$1.createComment(t),r=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,u=t=>{var i;return d(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,a=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,m=/"/g,g=/^(?:script|style|textarea|title)$/i,p=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),$=p(1),b=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),T=new WeakMap,x=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(h(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},A=l$1.createTreeWalker(l$1,129,null,!1),C=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c;for(let i=0;i<o;i++){const s=t[i];let o,u,p=-1,$=0;for(;$<s.length&&(d.lastIndex=$,u=d.exec(s),null!==u);)$=d.lastIndex,d===c?"!--"===u[1]?d=v:void 0!==u[1]?d=a:void 0!==u[2]?(g.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f):void 0!==u[3]&&(d=f):d===f?">"===u[0]?(d=null!=h?h:c,p=-1):void 0===u[1]?p=-2:(p=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f:'"'===u[3]?m:_):d===m||d===_?d=f:d===v||d===a?d=c:(d=f,h=void 0);const y=d===f&&t[i+1].startsWith("/>")?" ":"";r+=d===c?s+n$3:p>=0?(l.push(o),s.slice(0,p)+"$lit$"+s.slice(p)+e+y):s+e+(-2===p?(l.push(void 0),i):y);}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==s$1?s$1.createHTML(u):u,l]};class E{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,s);if(this.el=E.createElement(v,n),A.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(e)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(e),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?H:"@"===i[1]?I:S});}else c.push({type:6,index:r});}for(const i of t)l.removeAttribute(i);}if(g.test(l.tagName)){const t=l.textContent.split(e),s=t.length-1;if(s>0){l.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],h()),A.nextNode(),c.push({type:2,index:++r});l.append(t[s],h());}}}else if(8===l.nodeType)if(l.data===o$1)c.push({type:2,index:r});else {let t=-1;for(;-1!==(t=l.data.indexOf(e,t+1));)c.push({type:7,index:r}),t+=e.length-1;}r++;}}static createElement(t,i){const s=l$1.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===b)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=r(i)?void 0:i._$litDirective$;return (null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=P(t,d._$AS(t,i.values),d,e)),i}class V{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:l$1).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L(n,this,t)),this.v.push(i),d=e[++r];}h!==(null==d?void 0:d.index)&&(n=A.nextNode(),h++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),r(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==b&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):u(t)?this.S(t):this.$(t);}M(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t));}$(t){this._$AH!==w&&r(this._$AH)?this._$AA.nextSibling.data=t:this.k(l$1.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=E.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new V(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t;}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new E(t)),i}S(t){d(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.M(h()),this.M(h()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!r(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===b&&(h=this._$AH[l]),n||(n=!r(h)||h!==this._$AH[l]),h===w?t=w:t!==w&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.C(t);}C(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S{constructor(){super(...arguments),this.type=3;}C(t){this.element[this.name]=t===w?void 0:t;}}const k=i?i.emptyScript:"";class H extends S{constructor(){super(...arguments),this.type=4;}C(t){t&&t!==w?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name);}}class I extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:w)===b)return;const e=this._$AH,o=t===w&&e!==w||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==w&&(e===w||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t);}}const z=window.litHtmlPolyfillSupport;null==z||z(E,N),(null!==(t=globalThis.litHtmlVersions)&&void 0!==t?t:globalThis.litHtmlVersions=[]).push("2.2.5");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o;class s extends a$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=x(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1);}render(){return b}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.2.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n$1=n=>e=>"function"==typeof e?((n,e)=>(window.customElements.define(n,e),e))(n,e):((n,e)=>{const{kind:t,elements:i}=e;return {kind:t,elements:i,finisher(e){window.customElements.define(n,e);}}})(n,e);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n;null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

const EVENT = {
    CLICK: 'click',
    CANCEL_DIALOG: 'cancel',
    SUBMIT_FORM: 'submit',
    OPEN_DIALOG: 'open',
    CLOSE_DIALOG: 'close',
};
const ANIMATION = {
    SCALE: 'scale',
    SLIDE_IN_UP: 'slide-in-up',
    SCALE_DOWN: 'scale-down',
};
const ELEMENT = {
    DIALOG: 'dialog',
    BUTTON: 'button',
};
const STYLE = 'style';
const BACKDROP_CLASS = 'backdrop';
const POLYFILL_CLASS = 'polyfill';
const CALLBACK_BUTTON = 'next';
function animate(el, className) {
    return new Promise((res) => {
        try {
            el.classList.add(className);
            el.addEventListener('animationend', ({ target }) => {
                target.classList.remove(className);
                return res(null);
            }, { once: true });
        }
        catch (err) {
            console.error(err);
            res(null);
        }
    });
}
function toggleVerticalScrollBar(el = document.body) {
    if (el.hasAttribute(STYLE)) {
        el.removeAttribute(STYLE);
    }
    else {
        const hasVerticalScrollbar = el.scrollHeight > document.documentElement.clientHeight;
        if (hasVerticalScrollbar) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth + 'px';
            el.style.marginRight = scrollbarWidth;
            el.style.overflow = 'hidden';
        }
    }
}
class DialogController {
    constructor(host) {
        this._formHeight = 0;
        this.host = host;
        host.addController(this);
        this._onClick = this._onClick.bind(this);
        this._onSubmit = this._onSubmit.bind(this);
        this._onCancel = this._onCancel.bind(this);
        this._onClosed = this._onClosed.bind(this);
    }
    get done() {
        return this._done;
    }
    set done(value) {
        this._done = value;
        this.host.requestUpdate();
    }
    _observeFormElement(entries) {
        for (let entry of entries) {
            const form = entry.target;
            const { height } = entry.contentRect;
            if (height > this._formHeight) {
                this._formHeight = height;
                form.style.minHeight = `${height}px`;
            }
            else if (height === 0) {
                this._formHeight = 0;
                form.removeAttribute(STYLE);
            }
        }
    }
    async hostConnected() {
        this._ro = new ResizeObserver((entries) => this._observeFormElement(entries));
        await this.host.updateComplete;
        const dialogForms = this.host.shadowRoot.querySelectorAll('dialog form');
        dialogForms.forEach((el) => this._ro.observe(el));
    }
    hostDisconnected() {
        this._ro.disconnect();
    }
    _handlePolyfill(state) {
        const dialog = this._polyfill;
        switch (state) {
            case EVENT.OPEN_DIALOG:
                return dialog.classList.add(POLYFILL_CLASS);
            case EVENT.CLOSE_DIALOG:
                dialog.dispatchEvent(new Event(EVENT.CLOSE_DIALOG));
                return dialog.classList.remove(POLYFILL_CLASS);
        }
    }
    async _handleButtonClick(e) {
        const btn = e.target;
        const dialog = btn.closest(ELEMENT.DIALOG);
        if (dialog === null) {
            return;
        }
        else if (btn.value === CALLBACK_BUTTON) {
            try {
                e.preventDefault();
                this.done = false;
                await this._callback();
                this.done = true;
                btn.previousElementSibling.focus();
            }
            catch (err) {
                console.error(err);
                this.error = err.message;
                this.done = undefined;
            }
        }
        else if (btn.type === 'button') {
            dialog.dispatchEvent(new Event(EVENT.CANCEL_DIALOG));
        }
        else if (this._polyfill) {
            this._polyfill.returnValue = btn.value;
            const form = this._polyfill.querySelector('form');
            form.submit();
        }
    }
    _onClick(e) {
        const el = e.target;
        const tagName = el.tagName.toLowerCase();
        if (tagName === ELEMENT.DIALOG) {
            animate(el, ANIMATION.SCALE);
        }
        else if (tagName === ELEMENT.BUTTON) {
            this._handleButtonClick(e);
        }
    }
    _onOpening({ target: dialog }) {
        dialog.showModal();
        dialog.classList.add(BACKDROP_CLASS);
        animate(dialog, ANIMATION.SLIDE_IN_UP);
        toggleVerticalScrollBar();
    }
    _onSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        const form = e.target;
        const dialog = form.closest(ELEMENT.DIALOG);
        this._onClosing(dialog);
    }
    _onCancel(e) {
        e.preventDefault();
        const form = e.target.querySelector('form');
        if (form)
            form.reset();
        this._onClosing(e.target);
    }
    async _onClosing(dialog) {
        dialog.classList.remove(BACKDROP_CLASS);
        await animate(dialog, ANIMATION.SCALE_DOWN);
        dialog.close();
    }
    _onClosed({ target: dialog }) {
        dialog.removeEventListener(EVENT.SUBMIT_FORM, this._onSubmit);
        dialog.removeEventListener(EVENT.CANCEL_DIALOG, this._onCancel);
        dialog.removeEventListener(EVENT.CLICK, this._onClick);
        dialog.removeAttribute(STYLE);
        toggleVerticalScrollBar();
        if (this.error)
            this.error = undefined;
        if (this.done)
            this.done = undefined;
        if (this._polyfill)
            this._handlePolyfill(EVENT.CLOSE_DIALOG);
    }
    showModal(dialog, callback = undefined) {
        if (dialog?.tagName?.toLowerCase() !== ELEMENT.DIALOG)
            return console.error('not a dialog element', dialog);
        this._callback = callback;
        if (typeof dialog.showModal !== 'function') {
            this._polyfill = dialog;
            this._polyfill.showModal = () => this._handlePolyfill(EVENT.OPEN_DIALOG);
            this._polyfill.close = () => this._handlePolyfill(EVENT.CLOSE_DIALOG);
        }
        dialog.addEventListener(EVENT.CLICK, this._onClick);
        dialog.addEventListener(EVENT.OPEN_DIALOG, this._onOpening, { once: true });
        dialog.addEventListener(EVENT.SUBMIT_FORM, this._onSubmit);
        dialog.addEventListener(EVENT.CANCEL_DIALOG, this._onCancel);
        dialog.addEventListener(EVENT.CLOSE_DIALOG, this._onClosed, { once: true });
        dialog.dispatchEvent(new Event(EVENT.OPEN_DIALOG));
    }
    closeModal(dialog) {
        this._onClosing(dialog);
    }
}

const animations = r$2 `
  @keyframes fade-in-opacity {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes fade-in {
    100% {
      background: rgb(0 0 0 / 0.6);
    }
  }
  @keyframes slide-in-up {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
  }
  @keyframes scale-down {
    to {
      transform: scale(.75);
      opacity: 0;
    }
  }
  @keyframes scale {
    0% { transform: scale(1); }
    35% { transform: scale(0.98); }
    100% { transform: scale(1); }
  }
  @keyframes shake {
    from, to { transform: translate3d(0, 0, 0); }
    10%, 30%, 50%, 70%, 90% { transform: translate3d(-10px, 0, 0); }
    20%, 40%, 60%, 80% { transform: translate3d(10px, 0, 0); }
  }
`;

const button = r$2 `
  button {
    padding: var(--space-xxs) var(--space-xs);
    margin: var(--space-xxs);
    border-radius: var(--space-xxs);
    border: 2px solid var(--surface3);

    color: inherit;
    background: var(--surface2);

    font-family: inherit;
    font-size: inherit;
    letter-spacing: 0.0125rem;
    text-align: center;

    cursor: pointer;
    -webkit-tap-highlight-color: hsl(0deg 0% 0% / 0%);
  }
  button svg-icon {
    pointer-events: none;
  }
  button:focus {
    outline: 2px solid var(--active);
    border: 2px solid var(--surface2);
  }
  button[disabled] {
    opacity: 0.3;
    pointer-events: none;
  }
  button:hover {
    background: var(--surface3);
    transition: background-color 0.2s ease;
  }
  button:active {
    background: var(--surface4);
    transition: background-color 0.2s ease;
  }
`;

const dialog = r$2 `
  dialog {
    min-inline-size: min(50vw, 35ch);
    max-inline-size: min(90vw, 60ch);

    padding: 0;
    border: 1px solid var(--surface3);
    border-radius: var(--space-xs);

    background: var(--surface2);
    color: var(--text1);
    box-shadow: var(--shadow-6);

    user-select: none;
  }
  dialog.slide-in-up {
    animation: var(--animation-slide-in-up);
  }
  dialog.scale-down {
    animation: var(--animation-scale-down);
  }
  dialog.scale {
    animation: var(--animation-scale);
  }
  dialog[disabled] {
    color: var(--text2);
  }
  dialog.backdrop::backdrop {
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);

    background: rgb(0 0 0 / 0.3);
    animation: fade-in-opacity 0.3s;
  }

  dialog form {
    display: grid;
    grid-template-rows: auto 1fr auto;
    max-block-size: 65vh;
  }

  dialog header, dialog footer {
    padding: var(--space-s);
  }
  dialog header {
    display: flex;
    gap: var(--space-s);
    align-items: center;
  }
  dialog h1 {
    font-size: 1.3rem;
    font-weight: 500;
    margin: 0;
  }
  details,
  dialog article {
    padding: 0 var(--space-s);
    overflow-y: auto;
  }
  dialog footer {
    text-align: right;
  }
  dialog footer button {
    min-width: 80px;
  }
  dialog article[confirmed] + footer button[value="next"] {
    display: none;
  }
`;

const delay = (ms) => new Promise((res) => setTimeout(() => res(true), ms));
const category = 'app-view';
let AppView = class AppView extends s {
    constructor() {
        super(...arguments);
        this.dialog = new DialogController(this);
    }
    async dialogCallback() {
        return await delay(1000);
    }
    _onClick({ target }) {
        if (target.tagName !== 'BUTTON')
            return;
        const { id } = target.dataset;
        const dialog = this.shadowRoot.getElementById(id);
        if (id === 'dynamic') {
            this.dialog.showModal(dialog, this.dialogCallback);
        }
        else {
            this.dialog.showModal(dialog);
        }
    }
    render() {
        return $ `
      <main>
        <section class="demo" @click="${this._onClick}">
          <button data-id="confirm">Confirm Dialog</button>
          <button data-id="alert">Alert Dialog</button>
          <button data-id="dynamic">Dynamic Dialog</button>
          <button data-id="scrollable">Scrollable Dialog</button>
        </section>
        <dialog id="confirm">
          <form method="dialog">
            <header>
              <h1>Are you sure?</h1>
            </header>
            <article>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </article>
            <footer>
              <button value="no">No</button>
              <button value="yes">Yes</button>
            </footer>
          </form>
        </dialog>
        <dialog id="alert">
          <form method="dialog">
            <header>
              <h1>Alert</h1>
            </header>
            <article>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </article>
            <footer>
              <button value="close">Close</button>
            </footer>
          </form>
        </dialog>
        <dialog id="dynamic" ?disabled="${this.dialog.done === false}">
          <form method="dialog">
            <header>
              <h1>Dynamic Dialog</h1>
            </header>
            ${this.dialog.error
            ? $ `<article>${this.dialog.error}</article>`
            : ''}
            ${this.dialog.done
            ? $ `<article confirmed>Thank you for confirming</article>`
            : $ `<article>Click the "confirm" button to show the next page after a 1 second delay.</article>`}
            <footer>
              <button value="cancel" autofocus>Close</button>
              <button value="next" ?disabled="${this.dialog.done === false}">Confirm</button>
            </footer>
          </form>
        </dialog>
        <dialog id="scrollable">
          <form method="dialog">
            <header>
              <svg viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></svg>
              <h1>Dialog With Scroll</h1>
            </header>
            <article>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </article>
            <footer>
              <button value="close">Close</button>
              <button value="confirm">Confirm</button>
            </footer>
          </form>
        </dialog>
      </main>
    `;
    }
};
AppView.styles = [
    button,
    animations,
    dialog,
    r$2 `
      main {
        padding: var(--space-xxl);
      }
      section,
      main {
        display: grid;
        place-content: center;
      }
      svg {
        width: 24px;
        fill: currentColor;
      }
      .demo button {
        margin: var(--space-s);
        padding: var(--space-xs);
      }
    `,
];
AppView = __decorate([
    n$1(category)
], AppView);
//# sourceMappingURL=main.5abbb8fd.js.map
