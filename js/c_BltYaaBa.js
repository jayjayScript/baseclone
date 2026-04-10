import{bF as I,j as t,q as _,ce as X,B as p,w as A,O as L,V as v,v as w,b5 as R}from"./e_C3MCcFGy.js";import{C as S}from"./c_D5I357oN.js";import{C as G,a as T}from"./c_BQefzWLB.js";try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="752e70c5-ee92-4048-9d51-5ec92b23a3cb",e._sentryDebugIdIdentifier="sentry-dbid-752e70c5-ee92-4048-9d51-5ec92b23a3cb")})()}catch{}const F=I(function({layout:a,title:i,paragraph:l,ctaGroup:o,columns:s,cardType:r,cards:n=[],legal:d,id:j,className:x,testID:u="gallery-grid",componentId:C,contentTypeId:b,noSpacing:g=!1,sectionSettings:f,footerLayout:c,footerCtaGroup:y,footerParagraph:h,footerTitle:m}){return t.jsxs(_,{className:x,testID:u,noSpacing:g,sectionSettings:f,variant:"slim",children:[t.jsx(S,{title:i,paragraph:l,ctas:o,layout:a}),!!(n!=null&&n.length)&&t.jsx(B,{style:{"--max-column-count":s,"--item-min-width":r==="Avatar"?"170px":"260px"},display:"grid",gap:2,children:n.map(D=>t.jsx(p,{children:t.jsx(G,{...D,cardType:r,cardLayout:"mediaTop"})},D.id))}),t.jsx(T,{layout:c,title:m,paragraph:h,ctas:y}),X(d)&&t.jsx(p,{maxWidth:"900px",children:t.jsx(A,{font:"legal",color:"fgMuted",content:d})})]})}),B=L(p)`
  gap: var(--space-2);
  display: grid;

  --gap-count: calc(var(--max-column-count) - 1);
  --total-gap-width: calc(var(--gap-count) * var(--space-2));
  --item-max-width: calc(
    (100% - var(--total-gap-width)) / var(--max-column-count)
  );

  grid-template-columns: repeat(
    auto-fill,
    minmax(max(var(--item-min-width), var(--item-max-width)), 1fr)
  );
`,E=(e,a,i)=>e==="Article"&&a!==i-1,V={Article:"default",Media:"slim",Video:"slim",Basic:"slim"},O=I(function({layout:a,title:i,paragraph:l,ctaGroup:o,cardType:s,cards:r=[],legal:n,className:d,testID:j="gallery-list",sectionSettings:x,noSpacing:u,footerLayout:C,footerTitle:b,footerParagraph:g,footerCtaGroup:f}){return t.jsxs(_,{className:d,testID:j,sectionSettings:x,noSpacing:u,variant:V[s],children:[(i||l||o)&&t.jsx(S,{title:i,paragraph:l,ctas:o,layout:a}),t.jsx(v,{"data-testid":"gallery-list-cards",gap:w["content-element-gap"],children:r.map((c,y,{length:h})=>{const m=E(s,y,h);return t.jsxs(v,{gap:w["content-element-gap"],"data-testid":"gallery-list-card","data-separator":m,children:[t.jsx(G,{...c,cardType:s,cardLayout:"mediaLeft"}),m?t.jsx(R,{}):null]},c.id)})}),t.jsx(T,{layout:C,title:b,paragraph:g,ctas:f}),X(n)&&t.jsx(p,{maxWidth:"900px","data-testid":"gallery-list-legal",children:t.jsx(A,{font:"legal",color:"fgMuted",content:n})})]})});export{F as C,O as a};
//# sourceMappingURL=c_BltYaaBa.js.map
