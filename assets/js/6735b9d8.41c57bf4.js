"use strict";(self.webpackChunktbia_documentation=self.webpackChunktbia_documentation||[]).push([[5076],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(n),d=i,f=h["".concat(c,".").concat(d)]||h[d]||p[d]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},81998:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={sidebar_position:6,title:"FAQ"},c=void 0,s={unversionedId:"faq",id:"version-1.7.0/faq",title:"FAQ",description:"Do you offer the source code with the plugin?",source:"@site/versioned_docs/version-1.7.0/faq.mdx",sourceDirName:".",slug:"/faq",permalink:"/TBIA-Documentation/docs/1.7.0/faq",draft:!1,editUrl:"https://github.com/twistedbytes-net/TBIA-Documentation/edit/master/versioned_docs/version-1.7.0/faq.mdx",tags:[],version:"1.7.0",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"FAQ"},sidebar:"tutorialSidebar",previous:{title:"GAS Companion",permalink:"/TBIA-Documentation/docs/1.7.0/integration_guides/gas-companion"}},u={},p=[{value:"Do you offer the source code with the plugin?",id:"do-you-offer-the-source-code-with-the-plugin",level:2},{value:"Are there any tick events in interactable objects?",id:"are-there-any-tick-events-in-interactable-objects",level:2},{value:"Do interactions also work when two objects are very close to each other (almost overlapping)?",id:"do-interactions-also-work-when-two-objects-are-very-close-to-each-other-almost-overlapping",level:2},{value:"Why should I buy this product when there are similar ones that are free?",id:"why-should-i-buy-this-product-when-there-are-similar-ones-that-are-free",level:2},{value:"Why are triggered interactions not visible / get out of sync?",id:"why-are-triggered-interactions-not-visible--get-out-of-sync",level:2},{value:"Why are my proximity interactions not working properly?",id:"why-are-my-proximity-interactions-not-working-properly",level:2},{value:"Why is the <em>On Interactable Target Found</em> event is not triggered?",id:"why-is-the-on-interactable-target-found-event-is-not-triggered",level:2}],h={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"do-you-offer-the-source-code-with-the-plugin"},"Do you offer the source code with the plugin?"),(0,o.kt)("p",null,"Yes of course, the plugin comes with full source code once you buy it from the MarketPlace."),(0,o.kt)("h2",{id:"are-there-any-tick-events-in-interactable-objects"},"Are there any tick events in interactable objects?"),(0,o.kt)("p",null,"Interactable objects never tick. They only execute logic when being interacted with which is very performant.\nPerformance will not be affected even if you have 1000+ of interactable objects in your level."),(0,o.kt)("p",null,"Additionally, we will make tutorials on how to use light-weight instances with our plugin."),(0,o.kt)("h2",{id:"do-interactions-also-work-when-two-objects-are-very-close-to-each-other-almost-overlapping"},"Do interactions also work when two objects are very close to each other (almost overlapping)?"),(0,o.kt)("p",null,"Yes, interactables are detected by executing a line trace which will return only one object at a time."),(0,o.kt)("h2",{id:"why-should-i-buy-this-product-when-there-are-similar-ones-that-are-free"},"Why should I buy this product when there are similar ones that are free?"),(0,o.kt)("p",null,"As stated in the plugin description, one of the main features is multiplayer support with client-prediction.\nAlso, our plugin extends GAS by adding support for replicated montages on multiple skeletal meshes."),(0,o.kt)("h2",{id:"why-are-triggered-interactions-not-visible--get-out-of-sync"},"Why are triggered interactions not visible / get out of sync?"),(0,o.kt)("p",null,"Make sure that ",(0,o.kt)("inlineCode",{parentName:"p"},"Replicates")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," in the respective actor's CDO."),(0,o.kt)("h2",{id:"why-are-my-proximity-interactions-not-working-properly"},"Why are my proximity interactions not working properly?"),(0,o.kt)("p",null,"Multiple issues might cause proximity interactions to fail:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make sure that your interactable actor object type is the same as the object type you are tracing for in the\nproximity settings."),(0,o.kt)("li",{parentName:"ul"},"Check if your actor implements the ",(0,o.kt)("inlineCode",{parentName:"li"},"TBIA_Interactable")," interface."),(0,o.kt)("li",{parentName:"ul"},"Make sure that the object interaction priority settings are correct.")),(0,o.kt)("h2",{id:"why-is-the-on-interactable-target-found-event-is-not-triggered"},"Why is the ",(0,o.kt)("em",{parentName:"h2"},"On Interactable Target Found")," event is not triggered?"),(0,o.kt)("p",null,"Multiple issues might cause to this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check if the ",(0,o.kt)("inlineCode",{parentName:"li"},"IsAvailableForInteraction")," interface function is overridden and returns ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},"Make sure that the ",(0,o.kt)("inlineCode",{parentName:"li"},"IsBlockedForInteraction")," interface function is overridden and returns ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,o.kt)("li",{parentName:"ul"},"Lastly, see if the ",(0,o.kt)("inlineCode",{parentName:"li"},"IsInteractionStilValid")," interface function is overridden and returns ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),".")))}d.isMDXComponent=!0}}]);