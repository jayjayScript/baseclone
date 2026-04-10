import{bF as k,r as u,bH as w,cI as B,ce as E,j as n,V as h,v as D,w as I,s as V,d2 as H,O as v,a0 as A,dD as $,q as F,bD as O,d9 as N,h as P,B as S,y as Y,e$ as z}from"./e_C3MCcFGy.js";import{E as T}from"./c_BIG4uymu.js";import{C as G,b as K}from"./c_DARWSW3y.js";import{m as U,g as q}from"./c_CCr92DtA.js";import{u as J}from"./c_BC3SJfXS.js";import{o as Q}from"./c_CaA4flmU.js";import{C as Z}from"./c_D5I357oN.js";try{(function(){var t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new t.Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="2890baf7-69c5-41b8-84d0-323c01f53325",t._sentryDebugIdIdentifier="sentry-dbid-2890baf7-69c5-41b8-84d0-323c01f53325")})()}catch{}const W={TitleLink:"titleLink",ContentLink:"contentLink"},tt=k(function({title:o,content:i,isExpanded:r=!1,setIsExpanded:e,componentId:a,contentTypeId:d,testID:s="accordion-item"}){const[c,p]=u.useState(!1),f=e?r:c,g=u.useCallback(()=>e?e(l=>!l):p(l=>!l),[e,p]),C=u.useCallback(l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),g())},[g]),y=w(W.TitleLink),x=w(W.ContentLink),b=f&&!!i,m=B(i)&&E(i)&&i.content.some(l=>l.nodeType==="table");return n.jsxs(h,{role:"group","data-testid":s,background:"bgSecondaryWash",borderRadius:400,width:"100%",position:"relative",children:[n.jsxs(nt,{onClick:g,onKeyDown:C,role:"button",tabIndex:0,"aria-expanded":f,"data-testid":"accordion-item-header",paddingY:3,paddingStart:D["card-padding"],paddingEnd:9,position:"relative",borderRadius:400,children:[n.jsx(h,{gap:1.5,alignItems:"flex-start",justifyContent:"center",padding:0,width:"100%",children:E(o)&&n.jsx(h,{justifyContent:"center",width:"100%","data-testid":"accordion-item-title",children:n.jsx(I,{maxWidth:"900px",font:"headline",color:"fg",content:o,onRichTextLinkClick:y})})}),n.jsxs(V,{alignItems:"center",justifyContent:"center",position:"absolute",right:"var(--space-2)",color:"fg",padding:2,children:[n.jsx(L,{name:"add",size:"s",color:"fg",$visible:!f}),n.jsx(L,{name:"minus",size:"s",color:"fg",$visible:f})]})]}),n.jsx(H,{collapsed:!b,children:n.jsx(et,{$visible:b,"data-testid":"accordion-item-content",width:"100%",paddingStart:D["card-padding"],paddingEnd:9,paddingBottom:6,children:n.jsx(h,{maxWidth:m?"100%":"900px","data-testid":"accordion-item-content-text",children:n.jsx(I,{font:"caption",color:"fg",content:i,onRichTextLinkClick:x})})})})]})}),nt=v(V)`
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: var(--borderRadius-400);
    background-color: var(--color-bgTertiary);
    opacity: 0;
  }

  &:hover {
    background-color: var(--color-bgSecondary);
  }

  &:focus-visible {
    background-color: var(--color-bgSecondary);
    outline: var(--borderWidth-200) solid var(--color-fgPrimary);
    outline-offset: var(--borderWidth-200);
  }

  &:active:before {
    opacity: 0.125;
  }
`,L=v($)`
  display: block;
  transition: opacity 0.2s;
  position: absolute;
  opacity: 0;
  ${({$visible:t})=>t&&A`
      opacity: 1;
    `}
`,et=v(h)`
  opacity: 0;
  transition: opacity 0.2s ease-in;

  ${({$visible:t})=>t&&A`
      opacity: 1;
      transition: opacity 0.2s ease-out;
    `}
`,ot=k(function({title:o,paragraph:i,ctaGroup:r,sections:e=[],componentId:a,contentTypeId:d,className:s,id:c,testID:p="accordion",legal:f,sectionSettings:g,noSpacing:C}){const[y,x]=u.useState(()=>{const m=new Set;return e.forEach((l,j)=>{l.isExpanded&&m.add(j)}),m}),b=u.useMemo(()=>e.map((m,l)=>j=>x(X=>{const M=typeof j=="function"?j(X.has(l)):j,_=new Set(X);return _[M?"add":"delete"](l),_})),[x,e]);return n.jsxs(F,{className:s,testID:p,sectionSettings:g,noSpacing:C,children:[n.jsx(Z,{title:o,paragraph:i,ctas:r,layout:"Horizontal"}),e.length>0&&n.jsx(h,{gap:.5,"data-testid":"accordion-sections",children:e.map((m,l)=>n.jsx(tt,{componentId:m.componentId,title:m.title,content:m.content,isExpanded:y.has(l),setIsExpanded:b[l],contentTypeId:m.contentTypeId},m.componentId))}),E(f)&&n.jsx(h,{maxWidth:"900px",children:n.jsx(I,{font:"legal",color:"fgMuted",content:f})})]})});function it(t){return u.memo(k(function(i){const{customComponentKey:r,content:e}=i;if(!t[r])return null;const a=e==null?void 0:e.reduce((s,c)=>(s[c.key]=c.value,s),{}),d=t[r];return n.jsx(d,{...i,content:a})}))}function jt(){const t=O(),o=(t==null?void 0:t.full)??0;return n.jsx(N,{children:n.jsx("style",{type:"text/css",children:`
          html {
            scroll-behavior: smooth;
            scroll-padding-top: ${o}px;
          }
        `})})}const rt=P("COINBASE_PUBLIC_DEPLOYMENT_TARGET");function R({components:t,gqlQueryRef:o,onError:i,componentMap:r,wrappersComponentMap:e}){return(t==null?void 0:t.map(({contentTypeId:a,...d})=>{if(!a||!r[a]&&!e[a])return null;const s=e[a],c=s?e[a]:r[a];if(!c)return null;const p=u.createElement(c,{key:d.id,...d,testID:rt!=="production"?d.id:void 0,gqlQueryRef:o,componentMap:s?r:void 0,wrappersComponentMap:s?e:void 0});return n.jsx(T,{onError:i,children:p},d.id)}).filter(a=>a!==null))??[]}function at({experimentName:t,includedCountries:o,includedLanguages:i,variants:r,gqlQueryRef:e,componentMap:a,wrappersComponentMap:d}){const s=u.useMemo(()=>r||[],[r]),c=J({experimentName:t,includedCountries:o,includedLanguages:i,selectedVariants:s}),p=u.useMemo(()=>U(s),[s]),f=u.useMemo(()=>q(p,c),[p,c]),g=u.useCallback(C=>Q(typeof C=="string"?new Error(C):C),[]);return f?R({components:f.content,gqlQueryRef:e,onError:g,componentMap:a,wrappersComponentMap:d}):null}const st=u.memo(at);function dt({testID:t="editorial-accordion",...o}){return n.jsx(S,{testID:t,children:n.jsx(ot,{noSpacing:!0,...o})})}function ct({defaultImage:t,imageAltText:o,hideBackground:i,defaultImageFit:r,darkModeImage:e,desktopImage:a,desktopImageFit:d,darkModeDesktopImage:s,tabletImage:c,tabletImageFit:p,darkModeTabletImage:f,mobileImage:g,mobileImageFit:C,darkModeMobileImage:y,testID:x="editorial-image",...b}){const m=(t==null?void 0:t.width)??"none";return n.jsx(S,{testID:x,paddingY:D["content-element-gap"],style:{maxWidth:m},children:n.jsx(Y,{media:{defaultImage:t,imageAltText:o,hideBackground:i,defaultImageFit:r,darkModeImage:e,desktopImage:a,desktopImageFit:d,darkModeDesktopImage:s,tabletImage:c,tabletImageFit:p,darkModeTabletImage:f,mobileImage:g,mobileImageFit:C,darkModeMobileImage:y},aspectRatio:"auto",...b})})}function lt({componentId:t,videoAltText:o,hideBackground:i,defaultExternalVideoUrl:r,defaultThumbnail:e,externalMobileVideoUrl:a,mobileThumbnail:d,loopEnabled:s,autoplayEnabled:c,audioEnabled:p,videoControls:f,externalDesktopVideoUrl:g,desktopThumbnail:C,externalTabletVideoUrl:y,tabletThumbnail:x,testID:b="editorial-video",...m}){return n.jsx(S,{paddingY:D["content-element-gap"],testID:b,children:n.jsx(z,{media:{componentId:t,videoAltText:o,hideBackground:i,defaultExternalVideoUrl:r,defaultThumbnail:e,externalMobileVideoUrl:a,mobileThumbnail:d,loopEnabled:s,autoplayEnabled:c,audioEnabled:p,videoControls:f,externalDesktopVideoUrl:g,desktopThumbnail:C,externalTabletVideoUrl:y,tabletThumbnail:x},...m})})}const ut={CDXV2_Image:ct,CDXV2_Video:lt,experiment:st},Dt={CDXV2_Accordion:dt};function pt({components:t,onError:o,componentMap:i,overrideComponentMap:r={},customComponentMap:e={},wrappersComponentMap:a={},gqlQueryRef:d}){const s=u.useMemo(()=>it(e),[e]),c=u.useMemo(()=>({...i,...r,CDXV2_CustomComponent:s}),[i,r,s]),p=u.useMemo(()=>t?Array.isArray(t)?t:[t]:[],[t]);return t?R({components:p,gqlQueryRef:d,onError:o,componentMap:c,wrappersComponentMap:{...ut,...a}}):null}const mt=u.memo(pt);function Et({pageData:t,onError:o,componentMap:i,overrideComponentMap:r,customComponentMap:e,gqlQueryRef:a}){const{components:d}=t.content;return n.jsx("main",{"data-testid":"cdxv2-main",style:{backgroundColor:"var(--color-bg)"},children:n.jsx(mt,{components:d??[],onError:o,componentMap:i,overrideComponentMap:r,customComponentMap:e,gqlQueryRef:a})})}function It({pageData:t,onError:o,activeColorScheme:i}){return n.jsx(T,{onError:o,children:n.jsx(K,{pageSettings:t.content.pageSettings,activeColorScheme:i})})}function kt({pageData:t,onError:o}){return n.jsx(T,{onError:o,children:n.jsx(G,{pageSettings:t.content.pageSettings})})}export{ot as C,It as D,mt as F,jt as a,kt as b,Et as c,Dt as e};
//# sourceMappingURL=c_DtxFEM42.js.map
