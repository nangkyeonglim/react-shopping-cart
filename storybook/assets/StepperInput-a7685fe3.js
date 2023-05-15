import{j as r}from"./jsx-runtime-6eef64cc.js";import{r as f}from"./index-c013ead5.js";import{i as l}from"./styled-components.browser.esm-52fdd7b7.js";const S=""+new URL("triangle-7d651aeb.svg",import.meta.url).href,V=""+new URL("triangle-down-79d7032c.svg",import.meta.url).href,u=l.div`
  display: flex;
`,s=l.input`
  border: 1px solid #ddd;
  width: 42px;
  height: 28px;
  padding-left: 4px;
`,d=l.div`
  display: flex;
  flex-direction: column;
`,p=l.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-white);
  border: 1px solid #ddd;
  width: 24px;
  height: 14px;
  font-size: 4px;
  cursor: pointer;
`;try{u.displayName="StepperInputWrapper",u.__docgenInfo={description:"",displayName:"StepperInputWrapper",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}}}catch{}try{s.displayName="Input",s.__docgenInfo={description:"",displayName:"Input",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}}}catch{}try{d.displayName="StepperWrapper",d.__docgenInfo={description:"",displayName:"StepperWrapper",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}}}catch{}try{p.displayName="Stepper",p.__docgenInfo={description:"",displayName:"Stepper",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"WebTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}}}catch{}const N={Number:/^[0-9]+$/},I=t=>N.Number.test(t),g=({min:t=0,max:o=99,step:c=1,initialValue:y=0,getValue:m})=>{const[a,n]=f.useState(String(y));f.useEffect(()=>{a!==""&&m(Number(a))},[m,a]);const _=e=>{if(e.target.value===""&&n(""),!I(e.target.value))return;const i=Number(e.target.value);i>=t&&i<=o&&n(String(i))},h=e=>{e.target.value===""&&n(String(t))},x=()=>{const e=Number(a)+c;e<=o&&n(String(e))},b=()=>{const e=Number(a)-c;e>=t&&n(String(e))};return r.jsxs(u,{children:[r.jsx(s,{type:"text",value:a,onChange:_,onBlur:h}),r.jsxs(d,{children:[r.jsx(p,{type:"button",onClick:x,children:r.jsx("img",{src:S,alt:"수량올리기"})}),r.jsx(p,{type:"button",onClick:b,children:r.jsx("img",{src:V,alt:"수량내리기"})})]})]})};try{g.displayName="StepperInput",g.__docgenInfo={description:"",displayName:"StepperInput",props:{min:{defaultValue:{value:"0"},description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"99"},description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}},initialValue:{defaultValue:{value:"0"},description:"",name:"initialValue",required:!1,type:{name:"number"}},getValue:{defaultValue:null,description:"",name:"getValue",required:!0,type:{name:"(value: number) => void"}}}}}catch{}export{g as S};
//# sourceMappingURL=StepperInput-a7685fe3.js.map
