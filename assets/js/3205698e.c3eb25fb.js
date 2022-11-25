"use strict";(self.webpackChunktbia_documentation=self.webpackChunktbia_documentation||[]).push([[6051],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=a.createContext({}),s=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),u=s(n),d=i,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,o(o({ref:e},p),{},{components:n})):a.createElement(h,o({ref:e},p))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:i,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4887:function(t,e,n){n.d(e,{UE:function(){return o},h8:function(){return i},qh:function(){return l},y$:function(){return r}});n(87462),n(63366),n(67294);var a=n(3905),i=function(t){t.children;var e=t.text;return(0,a.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},e)},r=function(t){var e=t.children;return(0,a.kt)("span",{style:{color:"#faa"}},e)};function o(t){t.children;var e=t.version,n="#ffffff";return(0,a.kt)("span",{style:{backgroundColor:"#414141",color:n,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},e)}function c(t,e,n,i){return(0,a.kt)("div",{style:{backgroundColor:i,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},e)}var l=function(t){t.children;return c(0,"Released","#afa","#181")}},37714:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=n(4887),c=["components"],l={sidebar_position:4,title:"Using Interact Animation"},s=void 0,p={unversionedId:"quick-start/using-animation",id:"version-1.4.0/quick-start/using-animation",title:"Using Interact Animation",description:"Create Interact Animation",source:"@site/versioned_docs/version-1.4.0/quick-start/using-animation.mdx",sourceDirName:"quick-start",slug:"/quick-start/using-animation",permalink:"/TBIA-Documentation/docs/quick-start/using-animation",draft:!1,editUrl:"https://github.com/twistedbytes-net/TBIA-Documentation/edit/master/versioned_docs/version-1.4.0/quick-start/using-animation.mdx",tags:[],version:"1.4.0",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Using Interact Animation"},sidebar:"tutorialSidebar",previous:{title:"Using Interact Animation Cosmetic",permalink:"/TBIA-Documentation/docs/quick-start/using-animation-cosmetic"},next:{title:"Using Object Interaction Timed",permalink:"/TBIA-Documentation/docs/quick-start/using-object-timed"}},m={},u=[{value:"Create Interact Animation",id:"create-interact-animation",level:2},{value:"Setup Player Character",id:"setup-player-character",level:2},{value:"Setup Montage",id:"setup-montage",level:2},{value:"Interactable Actor",id:"interactable-actor",level:2}],d={toc:u};function h(t){var e=t.components,l=(0,i.Z)(t,c);return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-interact-animation"},"Create Interact Animation"),(0,r.kt)("p",null,"To create an ",(0,r.kt)("em",{parentName:"p"},"Interact Animation")," ability, right-click in the ",(0,r.kt)("em",{parentName:"p"},"Content Browser"),"\nand select ",(0,r.kt)("inlineCode",{parentName:"p"},"TwistedBytes | Abilities | Interact Animation")," ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"}),"\nas shown in the image below."),(0,r.kt)("p",null,"Name the newly created asset ",(0,r.kt)("inlineCode",{parentName:"p"},"InteractAnimation"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Interact Animation Ability",src:n(27983).Z,width:"1920",height:"1040"})),(0,r.kt)("h2",{id:"setup-player-character"},"Setup Player Character"),(0,r.kt)("p",null,"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"ThirdPersonCharacter")," Blueprint and select ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"})," ",(0,r.kt)("inlineCode",{parentName:"p"},"TBIA Interaction Component"),"\nin the ",(0,r.kt)("em",{parentName:"p"},"Components")," tab. In the ",(0,r.kt)("em",{parentName:"p"},"Details")," tab, add your ",(0,r.kt)("inlineCode",{parentName:"p"},"InteractAnimation")," ability to the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Granted Abilities")," property ",(0,r.kt)(o.h8,{text:"2",mdxType:"Step"})," as shown in the image below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Grant Animation Ability",src:n(64383).Z,width:"1920",height:"1040"})),(0,r.kt)("h2",{id:"setup-montage"},"Setup Montage"),(0,r.kt)("p",null,"Open a montage you want to play during an interaction. We now want to add three montage sections which will be used\nby our ",(0,r.kt)("inlineCode",{parentName:"p"},"Interact Animation")," ability."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a new montage section, name it ",(0,r.kt)("inlineCode",{parentName:"li"},"Pre-Interact"),", and set it to the beginning of the montage ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"}),"."),(0,r.kt)("li",{parentName:"ol"},"Create second new montage section, name it ",(0,r.kt)("inlineCode",{parentName:"li"},"Interact"),", and set it to the frame that you want to start the looped animation on ",(0,r.kt)(o.h8,{text:"2",mdxType:"Step"}),"."),(0,r.kt)("li",{parentName:"ol"},"Create third new montage section, name it ",(0,r.kt)("inlineCode",{parentName:"li"},"Post-Interact"),". This section marks the end of the looped animation ",(0,r.kt)(o.h8,{text:"3",mdxType:"Step"}),".\nIt will jumped to when an interaction loop ends. Make sure to set the looping montage section to ",(0,r.kt)("em",{parentName:"li"},"loop")," ",(0,r.kt)(o.h8,{text:"4",mdxType:"Step"})," as shown in the image below.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Montage Sections",src:n(27730).Z,width:"1920",height:"1040"})),(0,r.kt)("p",null,"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"Interact Animation")," ability. Here you are able to specify the section names that should be used for each animation event."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The start section ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"})," when an interaction starts."),(0,r.kt)("li",{parentName:"ul"},"The looping section the animation montage will jump from ",(0,r.kt)(o.h8,{text:"2",mdxType:"Step"}),"."),(0,r.kt)("li",{parentName:"ul"},"The last section ",(0,r.kt)(o.h8,{text:"3",mdxType:"Step"})," the animation montage will jump to when the loop ends.")),(0,r.kt)("p",null,"In our example we used the default section name value on purpose to make it easy to follow but, of course, you are totally free\nto choose you own section names. Just make sure that the montage section names match in both your montages and ",(0,r.kt)("inlineCode",{parentName:"p"},"Interact Animation")," ability."),(0,r.kt)("p",null,"Also make sure that ",(0,r.kt)("inlineCode",{parentName:"p"},"Replicate Primary Montage")," is enabled ",(0,r.kt)(o.h8,{text:"4",mdxType:"Step"}),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Animation Settings",src:n(35047).Z,width:"735",height:"766"})),(0,r.kt)("h2",{id:"interactable-actor"},"Interactable Actor"),(0,r.kt)("p",null,"Duplicate ",(0,r.kt)("inlineCode",{parentName:"p"},"GasActorBase")," to showcase the new Interaction type and customize it to differentiate\nit from the other actor, Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"Get Interaction Context")," set the new montage ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"})," to\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"Primary Mesh Montage")," check ",(0,r.kt)(o.h8,{text:"2",mdxType:"Step"})," ",(0,r.kt)("inlineCode",{parentName:"p"},"Wait For Input Trigger")," to true,\nset ",(0,r.kt)("inlineCode",{parentName:"p"},"Interaction duration")," ",(0,r.kt)(o.h8,{text:"3",mdxType:"Step"})," to ",(0,r.kt)("inlineCode",{parentName:"p"},"3.0")," seconds and the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Animation Loop Duration")," ",(0,r.kt)(o.h8,{text:"4",mdxType:"Step"})," to ",(0,r.kt)("inlineCode",{parentName:"p"},"2.8")," seconds."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Interaction Context",src:n(51454).Z,width:"1920",height:"1040"})),(0,r.kt)("p",null,"Place the new ",(0,r.kt)("inlineCode",{parentName:"p"},"GasActorBase")," in the world ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"})," and press ",(0,r.kt)("em",{parentName:"p"},"Play")," in the Unreal Editor.\nThen, interact with the new actor. You should now see the new montage is playing as long as you are\nholding down the interaction key for 3 seconds while it is also looping in the section that you specified."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Play",src:n(26728).Z,width:"1628",height:"689"})))}h.isMDXComponent=!0},27983:function(t,e,n){e.Z=n.p+"assets/images/01_create_interact_animation-1dbe440381f3b0b2e7a2e0f7689290b9.png"},64383:function(t,e,n){e.Z=n.p+"assets/images/02_grant_animation-ae2c7d7123f63d57ce370db296b7d581.png"},27730:function(t,e,n){e.Z=n.p+"assets/images/03_montage_sections-ba6b3cb0f9633f959ade1887e3d85d8a.png"},35047:function(t,e,n){e.Z=n.p+"assets/images/04_animation_settings-829955a5e6df4b1092ffbdcdca90a739.png"},51454:function(t,e,n){e.Z=n.p+"assets/images/05_interaction_context-b163c7624780a49ce29375f6f3725bb6.png"},26728:function(t,e,n){e.Z=n.p+"assets/images/06_play-2ab157f5997c9f571a875eeddcc6cbca.png"}}]);