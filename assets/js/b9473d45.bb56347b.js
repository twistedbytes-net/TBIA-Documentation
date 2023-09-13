"use strict";(self.webpackChunktbia_documentation=self.webpackChunktbia_documentation||[]).push([[2699],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},l),{},{components:n})):a.createElement(h,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4887:function(e,t,n){n.d(t,{UE:function(){return o},h8:function(){return i},qh:function(){return c},y$:function(){return r}});n(87462),n(63366),n(67294);var a=n(3905),i=function(e){e.children;var t=e.text;return(0,a.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},t)},r=function(e){var t=e.children;return(0,a.kt)("span",{style:{color:"#faa"}},t)};function o(e){e.children;var t=e.version,n="#ffffff";return(0,a.kt)("span",{style:{backgroundColor:"#414141",color:n,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},t)}function p(e,t,n,i){return(0,a.kt)("div",{style:{backgroundColor:i,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}var c=function(e){e.children;return p(0,"Released","#afa","#181")}},64228:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=n(4887),p=["components"],c={sidebar_position:2,title:"Using Interact Active"},s=void 0,l={unversionedId:"quick-start/using-active",id:"version-1.5.2/quick-start/using-active",title:"Using Interact Active",description:"Create Interact Active Ability",source:"@site/versioned_docs/version-1.5.2/quick-start/using-active.mdx",sourceDirName:"quick-start",slug:"/quick-start/using-active",permalink:"/TBIA-Documentation/docs/1.5.2/quick-start/using-active",draft:!1,editUrl:"https://github.com/twistedbytes-net/TBIA-Documentation/edit/master/versioned_docs/version-1.5.2/quick-start/using-active.mdx",tags:[],version:"1.5.2",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Using Interact Active"},sidebar:"tutorialSidebar",previous:{title:"Using Interact Passive",permalink:"/TBIA-Documentation/docs/1.5.2/quick-start/using-passive"},next:{title:"Using Interact Animation Cosmetic",permalink:"/TBIA-Documentation/docs/1.5.2/quick-start/using-animation-cosmetic"}},u={},d=[{value:"Create Interact Active Ability",id:"create-interact-active-ability",level:2},{value:"Setup input",id:"setup-input",level:2},{value:"Setup Player Character",id:"setup-player-character",level:2},{value:"Interactable Actor",id:"interactable-actor",level:2}],m={toc:d};function h(e){var t=e.components,c=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-interact-active-ability"},"Create Interact Active Ability"),(0,r.kt)("p",null,"To create an ",(0,r.kt)("em",{parentName:"p"},"Interact Active")," ability, simply right-click in the ",(0,r.kt)("em",{parentName:"p"},"Content Browser"),"\nand select ",(0,r.kt)("inlineCode",{parentName:"p"},"TwistedBytes | Abilities | Interact Active")," as shown in the image below."),(0,r.kt)("p",null,"Name the newly created asset ",(0,r.kt)("inlineCode",{parentName:"p"},"InteractActive"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Interact Active Ability",src:n(10927).Z,width:"1920",height:"1040"})),(0,r.kt)("p",null,"Open the Ability you just created and set the ",(0,r.kt)("inlineCode",{parentName:"p"},"Trace Channel")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Interactable")," ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"}),"."),(0,r.kt)("p",null,"We want the player character to be able to interact with interactable objects that are in front\nof the character and within a range of 3 meters. Since the camera's arm length is also set to 3 meters (but sitting\nbehind our player character), we need to compensate for the additional 3 meters by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"Max Range")," property\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"600")," cm ",(0,r.kt)(o.h8,{text:"2",mdxType:"Step"}),"."),(0,r.kt)("p",null,"For easier debugging of the ",(0,r.kt)("em",{parentName:"p"},"Interact Active Ability"),", enable ",(0,r.kt)("inlineCode",{parentName:"p"},"Show Debug")," and set ",(0,r.kt)("inlineCode",{parentName:"p"},"Debug Show Duration")," to\n",(0,r.kt)("inlineCode",{parentName:"p"},"2.0")," seconds ",(0,r.kt)(o.h8,{text:"3",mdxType:"Step"}),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Ability Settings",src:n(39462).Z,width:"953",height:"837"})),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The property ",(0,r.kt)("inlineCode",{parentName:"p"},"Trace Start Location Type")," allows you to choose the start location for when executing an interaction line trace:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Center of Camera Location")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Socket on Character's Mesh")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Cursor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Custom Trace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"No Trace"))),(0,r.kt)("p",{parentName:"div"},"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"Socket on Character's Mesh")," is only useful when you have stabilized head movement, or if you want to make a\nsocket from root and set its position next to the head bone."),(0,r.kt)("p",{parentName:"div"},"In general, it is preferred to use ",(0,r.kt)("inlineCode",{parentName:"p"},"Center of Camera Location")," for stable line traces."))),(0,r.kt)("h2",{id:"setup-input"},"Setup input"),(0,r.kt)("p",null,"In order to bind the input with ",(0,r.kt)("inlineCode",{parentName:"p"},"Interact Active Ability"),", right-click in the ",(0,r.kt)("em",{parentName:"p"},"Content Browser")," and\nselect ",(0,r.kt)("inlineCode",{parentName:"p"},"TwistedBytes | Data Assets | GAS Input Mapping")," as shown in the image below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Input Mapping",src:n(94902).Z,width:"1920",height:"1040"})),(0,r.kt)("p",null,"Open the data asset and add a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Ability Mapping"),". Select ",(0,r.kt)("inlineCode",{parentName:"p"},"Interact")," ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"})," and set the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Interact Active")," ",(0,r.kt)(o.h8,{text:"2",mdxType:"Step"})," that we created as a value for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Interact")," key."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Input Interact",src:n(78194).Z,width:"1915",height:"1038"})),(0,r.kt)("p",null,"Now, select ",(0,r.kt)("inlineCode",{parentName:"p"},"Edit | Project Settings ..."),". In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Input")," section under ",(0,r.kt)("inlineCode",{parentName:"p"},"Engine"),", create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Action Mapping"),".\nThe name needs to be exactly written as ",(0,r.kt)("inlineCode",{parentName:"p"},"TBIA_Interact"),". Lastly, specify any number of inputs (keys, buttons) that\nyou want to use to trigger interactions in your game like, for example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"E")," key on a keyboard."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Input Settings",src:n(26436).Z,width:"496",height:"61"})),(0,r.kt)("h2",{id:"setup-player-character"},"Setup Player Character"),(0,r.kt)("p",null,"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"ThirdPersonCharacter")," Blueprint and select ",(0,r.kt)("inlineCode",{parentName:"p"},"TBIA Interaction Component")," in the ",(0,r.kt)("em",{parentName:"p"},"Components")," tab.\nIn the ",(0,r.kt)("em",{parentName:"p"},"Details")," tab, add your ",(0,r.kt)("inlineCode",{parentName:"p"},"Interact Active")," ability to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Granted Abilities")," property ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"}),".\nNext, set the input mapping data asset you created earlier ",(0,r.kt)(o.h8,{text:"2",mdxType:"Step"})," as shown in the image below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Character Active",src:n(58243).Z,width:"1914",height:"1037"})),(0,r.kt)("p",null,"Finally, override the ",(0,r.kt)("inlineCode",{parentName:"p"},"Get Character Context")," interface function. Click and drag the ",(0,r.kt)("inlineCode",{parentName:"p"},"Return Value")," pin of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Return"),"\nnode and select ",(0,r.kt)("inlineCode",{parentName:"p"},"Make TBIA_CharacterContext"),". Then, set the reference of the third-person skeletal mesh component (",(0,r.kt)("inlineCode",{parentName:"p"},"Mesh"),") as ",(0,r.kt)("em",{parentName:"p"},"Primary Mesh"),"\nin the struct that is going to be returned."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Chracter Context",src:n(69516).Z,width:"1916",height:"1039"})),(0,r.kt)("h2",{id:"interactable-actor"},"Interactable Actor"),(0,r.kt)("p",null,"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"GASActorBase")," Blueprint and override ",(0,r.kt)("inlineCode",{parentName:"p"},"On Pre Interact"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"On Post Interact"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"On Cancel Interact"),"\nand print their results to see them in action."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"GAS Actor Events",src:n(12804).Z,width:"1928",height:"1048"})),(0,r.kt)("p",null,"Press ",(0,r.kt)("em",{parentName:"p"},"Play")," in the Unreal Editor, look at the cube and press the interaction button you have configured.\nIn our example case we set it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"E")," key. You should now see the same debug messages as shown in the image below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Events",src:n(7330).Z,width:"1096",height:"699"})))}h.isMDXComponent=!0},10927:function(e,t,n){t.Z=n.p+"assets/images/20_create_active-c174f92b96293b5f037a5971715a9a90.png"},39462:function(e,t,n){t.Z=n.p+"assets/images/21b_settings-063e1f2c3d73104f1657500d35cc23b9.png"},94902:function(e,t,n){t.Z=n.p+"assets/images/22_input_mapping-f1a4af8ddec7db82b18868c75390a039.png"},78194:function(e,t,n){t.Z=n.p+"assets/images/23_input_interact-38cb72ac0e0fbbbc598e0a6ea9c1eeac.png"},26436:function(e,t){t.Z="data:image/png;base64,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"},58243:function(e,t,n){t.Z=n.p+"assets/images/25_character_active-b71b8b9cb82d48adfead3b01947f559d.png"},69516:function(e,t,n){t.Z=n.p+"assets/images/26_character_context-f2bc9eda6396e07b7aada48e5a9e0fb0.png"},12804:function(e,t,n){t.Z=n.p+"assets/images/28_GasActorEvents-df879a7f9707fe5dfa547b6db423e243.png"},7330:function(e,t,n){t.Z=n.p+"assets/images/29_Events-ed7ed602f3f7f8c9dd42769964086f7f.png"}}]);