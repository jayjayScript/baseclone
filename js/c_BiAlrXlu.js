import{c as p,X as g,d as b,j as C,M as h}from"./e_C3MCcFGy.js";try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="23f76613-8f24-4e1d-95f2-b27c178a522f",e._sentryDebugIdIdentifier="sentry-dbid-23f76613-8f24-4e1d-95f2-b27c178a522f")})()}catch{}const o="SEOMeta",a=b({title:{id:`${o}.title`,defaultMessage:"Buy/Sell cryptocurrency - Coinbase",description:`
    #Component: SEOMeta
    #CharLimit: 75
    #Context: Default meta title for Coinbase.com on Google. (CharLimit autocalculated to 75)
    #VariableExample: Buy/Sell cryptocurrency - Coinbase`},titleWithCountryName:{id:`${o}.titleWithCountryName`,defaultMessage:"Buy/Sell cryptocurrency - Coinbase {countryName}",description:`
    #Component: SEOMeta
    #CharLimit: 75
    #Context: Meta title for Coinbase.com on Google with country name. (CharLimit autocalculated to 75)
    #VariableExample: Buy/Sell cryptocurrency - Coinbase Germany`},description:{id:`${o}.description`,defaultMessage:"Coinbase is a secure online platform for buying, selling, transferring, and storing cryptocurrency.",description:`
    #Component: meta
    #CharLimit: 160
    #Context: Default description for Coinbase.com.
    #VariableExample: Coinbase is a secure online platform for buying, selling, transferring, and storing cryptocurrency.`},descriptionWithCountryName:{id:`${o}.descriptionWithCountryName`,defaultMessage:"Coinbase {countryName} is a secure online platform for buying, selling, transferring, and storing cryptocurrency.",description:`
    #Component: meta
    #CharLimit: 160
    #Context: Description for Coinbase.com with country name.
    #VariableExample: Coinbase Germany is a secure online platform for buying, selling, transferring, and storing cryptocurrency.`}});function x({title:e,description:t,image:r,ogTitle:s,twitterCard:c,twitterImage:l,noIndex:u,noFollow:y,includeHrefLangs:d}){const{formatMessage:n}=p(),i=g().countryMessage,f=i?n(a.titleWithCountryName,{countryName:i}):n(a.title),m=i?n(a.descriptionWithCountryName,{countryName:i}):n(a.description);return C.jsx(h,{title:e||f,image:r,ogTitle:s,description:t||m,twitterCard:c,twitterImage:l,noIndex:u,noFollow:y,includeHrefLangs:d})}export{x as S};
//# sourceMappingURL=c_BiAlrXlu.js.map
