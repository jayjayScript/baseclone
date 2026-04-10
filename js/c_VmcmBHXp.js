import{A as I}from"./c_CmL4fgUI.js";import{A as E}from"./c_B5kC8JJd.js";import{E as D}from"./c_oWACDsRd.js";import{a as w}from"./c_BNSVsSJJ.js";import{L as H}from"./c_CUR5kWBq.js";import{j as e,B as t,e as L,aw as N,aO as b,c as P,V as C,d as R,s as K,r as F,x as M,b5 as V,O as _,aK as v,ar as Y,dy as A,cS as S,dz as m}from"./e_C3MCcFGy.js";try{(function(){var s=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},n=new s.Error().stack;n&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[n]="fb763fa3-12f2-4ed7-8ec7-ffccd229a203",s._sentryDebugIdIdentifier="sentry-dbid-fb763fa3-12f2-4ed7-8ec7-ffccd229a203")})()}catch{}const z=20,ie=112,oe=59,re=1228,le=55,de=32,ce=150,pe=1;function W({column:s}){return e.jsx(t,{display:"flex",flexDirection:"column",children:s.filter(n=>n.links.length>0).map(({category:n,links:p},f)=>e.jsxs(t,{width:"100%",display:"block",paddingBottom:{base:3,phone:2},children:[e.jsx(L,{as:"p",color:"fg",fontSize:"body",fontWeight:"headline",display:"block",children:n}),e.jsx(t,{as:"ul",paddingTop:1,flexDirection:"column",style:{listStyleType:"none",paddingInline:0,marginBlock:0},children:p.filter(i=>!!i.label&&(!!i.url||!!i.onClick)).map(({label:i,url:a,onClick:r,target:l},o)=>{const d=e.jsx(b,{as:"span",color:"fgMuted",children:i});return r?e.jsx(t,{as:"li",paddingBottom:1,children:e.jsx(N,{onClick:r,alignItems:"center",justifyContent:"center",children:d})},o):e.jsx(t,{as:"li",paddingBottom:.5,children:e.jsx(N,{rel:l==="_blank"?"noopener noreferrer":void 0,as:"a",href:a,target:l,alignItems:"center",justifyContent:"center",children:d})},o)})})]},f))})}const X=R({imgAltText:{id:"SharedFooter.imgAltText",defaultMessage:"Coinbase Logo",description:`
    #Component: LEGACY
    #CharLimit: 60
    #Context: Coinbase logo alt text.`}});function fe({socialMediaLinks:s=[],legalDisclaimer:n,columnOne:p=[],columnTwo:f=[],columnThree:i=[],customLogo:a,customLogoHeight:r,copyrightText:l="Coinbase",globalNavHeight:o}){var u,y,j;const{formatMessage:d}=P();return e.jsx(D,{children:e.jsx(E,{analyticsPrefix:"GlobalFooter",children:e.jsx(C,{as:"section",background:"bgAlternate",paddingX:{base:2,tablet:3,desktop:4},paddingY:{base:6,tablet:8,desktop:10},children:e.jsxs(C,{width:"100%",maxWidth:{desktop:1600,tablet:1228},style:{margin:"0 auto"},children:[e.jsx(q,{id:"footer-site-index",style:{scrollMarginBlockStart:o?o+40:210}}),n&&e.jsx(t,{display:"flex",flexDirection:"column",justifyContent:"start",paddingBottom:8,children:e.jsx(H,{legalDisclaimer:n})}),e.jsxs($,{background:"bgAlternate",children:[a?e.jsx(t,{paddingBottom:{tablet:5,phone:4},height:r||z,width:"auto",children:e.jsx(w,{alt:((u=a==null?void 0:a.fields)==null?void 0:u.description)||"",src:((j=(y=a==null?void 0:a.fields)==null?void 0:y.file)==null?void 0:j.url)||""})}):e.jsx(U,{paddingBottom:{tablet:5,phone:4},name:"coinbase",size:"l",accessibilityLabel:d(X.imgAltText)}),e.jsx(t,{display:"grid",columnGap:4,gridTemplateColumns:{base:"1fr",tablet:"1fr 1fr",desktop:"1fr 1fr 1fr"},children:[p,f,i].map((h,c)=>e.jsx(E,{analyticsPrefix:`${I.Column}${c}`,children:e.jsx(W,{column:h})},c))})]}),e.jsx(K,{gap:1,children:s.map(({label:h,url:c,target:O},T)=>e.jsx(F.Fragment,{children:e.jsx(M,{target:O,href:c,"data-qa":`${I.SocialMedia}${T}`,children:e.jsx(b,{as:"span",color:"fg",children:h})})},T))}),e.jsx(V,{color:"bgLine",paddingY:3}),e.jsx(t,{display:"flex",flexDirection:"column",gap:1,children:e.jsxs(b,{as:"p",color:"fg",fontFamily:"caption",textTransform:"none",display:"block",children:["© ",new Date().getFullYear()," ",l]})})]})})})})}const $=_(t)`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;

  @media ${v.desktop} {
    grid-template-columns: 1fr 2fr;
  }
`,U=_(Y)`
  &,
  span {
    width: 64px;
    height: 100%;
    font-size: 64px;
  }
`,q=_.div`
  width: 0;
  height: 0;
  position: absolute;
  visibility: hidden;
`,g="94jhd7y7oDbWXz1pyhdng03hgf8sSeec8HutgKDuS831",B="marketingspc",k="blogspc",G="coinbaseblog",x="94jhd7y7oDbWXz1pyhdng03hgf8sSeec8HutgKDuS831",Z={dev:{clientKey:k,spaceId:G,accessToken:x,previewAccessToken:x,host:A,previewHost:m,supportsLocalization:!0},prod:{clientKey:k,spaceId:G,accessToken:x,host:A,supportsLocalization:!0}},J={dev:{clientKey:S,spaceId:B,accessToken:g,previewAccessToken:g,host:m,previewHost:m,supportsLocalization:!0},prod:{clientKey:S,spaceId:B,accessToken:g,host:A,supportsLocalization:!0}},he={marketing:J,blog:Z};export{Z as B,fe as G,J as M,oe as N,he as S,de as a,re as b,ie as c,z as d,ce as e,le as f,pe as g};
//# sourceMappingURL=c_VmcmBHXp.js.map
