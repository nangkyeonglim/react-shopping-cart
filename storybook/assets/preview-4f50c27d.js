import{j as P}from"./jsx-runtime-6eef64cc.js";import{c as N}from"./styled-components.browser.esm-52fdd7b7.js";import{r as h}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const $=N`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  
  ul {
    padding: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
    padding: 0;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }}
`,T=N`
  body, button, input {
    font-family: 'Spoqa Han Sans Neo', 'Spoqa Han Sans JP', 'Sans-serif';
  }
  
  :root {
    --color-black: #000;
    --color-white: #FFF;
    --color-light-gray: #AAA;
    --color-header: #333;
    --color-shopping-cart-quantity: #04c09e;
    --color-image-overlay: #ddd4ba;
  }
`;/**
 * @remix-run/router v1.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},S.apply(this,arguments)}var g;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(g||(g={}));const E="popstate";function W(e){e===void 0&&(e={});function t(n,o){let{pathname:l,search:s,hash:i}=n.location;return R("",{pathname:l,search:s,hash:i},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(n,o){return typeof o=="string"?o:O(o)}return J(t,r,null,e)}function F(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function G(){return Math.random().toString(36).substr(2,8)}function C(e,t){return{usr:e.state,key:e.key,idx:t}}function R(e,t,r,n){return r===void 0&&(r=null),S({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?k(t):t,{state:r,key:t&&t.key||n||G()})}function O(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function k(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function J(e,t,r,n){n===void 0&&(n={});let{window:o=document.defaultView,v5Compat:l=!1}=n,s=o.history,i=g.Pop,f=null,c=m();c==null&&(c=0,s.replaceState(S({},s.state,{idx:c}),""));function m(){return(s.state||{idx:null}).idx}function v(){i=g.Pop;let a=m(),u=a==null?null:a-c;c=a,f&&f({action:i,location:d.location,delta:u})}function x(a,u){i=g.Push;let p=R(d.location,a,u);r&&r(p,a),c=m()+1;let U=C(p,c),w=d.createHref(p);try{s.pushState(U,"",w)}catch{o.location.assign(w)}l&&f&&f({action:i,location:d.location,delta:1})}function b(a,u){i=g.Replace;let p=R(d.location,a,u);r&&r(p,a),c=m();let U=C(p,c),w=d.createHref(p);s.replaceState(U,"",w),l&&f&&f({action:i,location:d.location,delta:0})}function y(a){let u=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof a=="string"?a:O(a);return F(u,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,u)}let d={get action(){return i},get location(){return e(o,s)},listen(a){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(E,v),f=a,()=>{o.removeEventListener(E,v),f=null}},createHref(a){return t(o,a)},createURL:y,encodeLocation(a){let u=y(a);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:x,replace:b,go(a){return s.go(a)}};return d}var L;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(L||(L={}));function K(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const q=["post","put","patch","delete"];new Set(q);const V=["get",...q];new Set(V);/**
 * React Router v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Z=h.createContext(null),z=h.createContext(null);function _(){return h.useContext(z)!=null}var B;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(B||(B={}));var I;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(I||(I={}));function Q(e){let{basename:t="/",children:r=null,location:n,navigationType:o=g.Pop,navigator:l,static:s=!1}=e;_()&&F(!1);let i=t.replace(/^\/*/,"/"),f=h.useMemo(()=>({basename:i,navigator:l,static:s}),[i,l,s]);typeof n=="string"&&(n=k(n));let{pathname:c="/",search:m="",hash:v="",state:x=null,key:b="default"}=n,y=h.useMemo(()=>{let d=K(c,i);return d==null?null:{location:{pathname:d,search:m,hash:v,state:x,key:b},navigationType:o}},[i,c,m,v,x,b,o]);return y==null?null:h.createElement(Z.Provider,{value:f},h.createElement(z.Provider,{children:r,value:y}))}var j;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(j||(j={}));new Promise(()=>{});/**
 * React Router DOM v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function X(e){let{basename:t,children:r,window:n}=e,o=h.useRef();o.current==null&&(o.current=W({window:n,v5Compat:!0}));let l=o.current,[s,i]=h.useState({action:l.action,location:l.location});return h.useLayoutEffect(()=>l.listen(i),[l]),h.createElement(Q,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:l})}var A;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(A||(A={}));var M;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(M||(M={}));const ne=[e=>P.jsxs(X,{children:[P.jsx($,{}),P.jsx(T,{}),P.jsx(e,{})]})],re={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}};export{ne as decorators,re as default};
//# sourceMappingURL=preview-4f50c27d.js.map
