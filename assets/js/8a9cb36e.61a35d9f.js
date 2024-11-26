"use strict";(self.webpackChunktbia_documentation=self.webpackChunktbia_documentation||[]).push([[4916],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4887:function(e,t,n){n.d(t,{UE:function(){return o},h8:function(){return r},qh:function(){return p},y$:function(){return i}});n(87462),n(63366),n(67294);var a=n(3905),r=function(e){e.children;var t=e.text;return(0,a.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},t)},i=function(e){var t=e.children;return(0,a.kt)("span",{style:{color:"#faa"}},t)};function o(e){e.children;var t=e.version,n="#ffffff";return(0,a.kt)("span",{style:{backgroundColor:"#414141",color:n,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},t)}function c(e,t,n,r){return(0,a.kt)("div",{style:{backgroundColor:r,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}var p=function(e){e.children;return c(0,"Released","#afa","#181")}},43105:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(4887),c=["components"],p={sidebar_position:7,title:"Using Triggered Interaction Cosmetic"},l=void 0,s={unversionedId:"quick-start/using-triggered-cosmetic",id:"version-1.8.0/quick-start/using-triggered-cosmetic",title:"Using Triggered Interaction Cosmetic",description:"Creating Triggered Interaction Cosmetic Ability",source:"@site/versioned_docs/version-1.8.0/quick-start/using-triggered-cosmetic.mdx",sourceDirName:"quick-start",slug:"/quick-start/using-triggered-cosmetic",permalink:"/TBIA-Documentation/docs/quick-start/using-triggered-cosmetic",draft:!1,editUrl:"https://github.com/twistedbytes-net/TBIA-Documentation/edit/master/versioned_docs/version-1.8.0/quick-start/using-triggered-cosmetic.mdx",tags:[],version:"1.8.0",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Using Triggered Interaction Cosmetic"},sidebar:"tutorialSidebar",previous:{title:"Using Object Interaction Tag",permalink:"/TBIA-Documentation/docs/quick-start/using-object-tag"},next:{title:"Overview",permalink:"/TBIA-Documentation/docs/architecture/overview"}},d={},m=[{value:"Creating Triggered Interaction Cosmetic Ability",id:"creating-triggered-interaction-cosmetic-ability",level:2},{value:"Setting up the Player Character",id:"setting-up-the-player-character",level:2},{value:"Creating the Interactable Actor",id:"creating-the-interactable-actor",level:2},{value:"Testing the Interactable Actor",id:"testing-the-interactable-actor",level:2}],u={toc:m};function h(e){var t=e.components,p=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"creating-triggered-interaction-cosmetic-ability"},"Creating Triggered Interaction Cosmetic Ability"),(0,i.kt)("p",null,"To create a ",(0,i.kt)("em",{parentName:"p"},"Triggered Interaction Cosmetic")," ability, simply right-click in the ",(0,i.kt)("em",{parentName:"p"},"Content Browser"),"\nand select ",(0,i.kt)("inlineCode",{parentName:"p"},"TwistedBytes | Abilities | Triggered Interaction Cosmetic")," as shown in the image below."),(0,i.kt)("p",null,"Name the newly created asset ",(0,i.kt)("inlineCode",{parentName:"p"},"TriggeredInteractionCosmetic"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create Triggered Interaction Cosmetic Ability",src:n(83463).Z,width:"1535",height:"922"})),(0,i.kt)("h2",{id:"setting-up-the-player-character"},"Setting up the Player Character"),(0,i.kt)("p",null,"Open ",(0,i.kt)("inlineCode",{parentName:"p"},"ThirdPersonCharacter"),", select ",(0,i.kt)("inlineCode",{parentName:"p"},"TBIA Interaction Component"),". In the ",(0,i.kt)("em",{parentName:"p"},"Details")," panel, add\n",(0,i.kt)("inlineCode",{parentName:"p"},"TriggeredInteractionCosmetic")," to the array named ",(0,i.kt)("em",{parentName:"p"},"Grant Abilities on Start"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This will grant the ability to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ThirdPersonCharacter")," so it can be activated later on."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create Triggered Interaction Cosmetic Ability",src:n(2788).Z,width:"1920",height:"1040"})),(0,i.kt)("h2",{id:"creating-the-interactable-actor"},"Creating the Interactable Actor"),(0,i.kt)("p",null,"For an easier implementation, we are going to duplicate the ",(0,i.kt)("inlineCode",{parentName:"p"},"GASActorBase")," that we created earlier in\n",(0,i.kt)("a",{parentName:"p",href:"/docs/quick-start/using-passive"},"Using Interact Passive")," to make use of what we set up before. To do that, navigate\nto ",(0,i.kt)("inlineCode",{parentName:"p"},"GASActorBase")," ",(0,i.kt)(o.h8,{text:"1",mdxType:"Step"}),", right-click it and select ",(0,i.kt)("em",{parentName:"p"},"Duplicate")," ",(0,i.kt)(o.h8,{text:"2",mdxType:"Step"}),"."),(0,i.kt)("p",null,"Name this newly created asset ",(0,i.kt)("inlineCode",{parentName:"p"},"GASActor_Pickup"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We are going to create an item pickup object a player just needs to walk over in order to pick it up. Thus, when a\nplayer overlaps with ",(0,i.kt)("inlineCode",{parentName:"p"},"GASActor_Pickup"),", it will activate the ",(0,i.kt)("inlineCode",{parentName:"p"},"TriggeredInteractionCosmetic")," ",(0,i.kt)("em",{parentName:"p"},"Gameplay Ability")," on\nthat ",(0,i.kt)("em",{parentName:"p"},"Player Character"),"."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create GASActor_Pickup",src:n(40266).Z,width:"550",height:"671"})),(0,i.kt)("p",null,"Open the newly created asset ",(0,i.kt)("inlineCode",{parentName:"p"},"GASActor_Pickup"),". In the ",(0,i.kt)("em",{parentName:"p"},"Components")," panel, click on ",(0,i.kt)("em",{parentName:"p"},"Add Component")," ",(0,i.kt)(o.h8,{text:"1",mdxType:"Step"}),"\nand add a ",(0,i.kt)("em",{parentName:"p"},"Sphere Collision")," component ",(0,i.kt)(o.h8,{text:"2",mdxType:"Step"})," named ",(0,i.kt)("inlineCode",{parentName:"p"},"Sphere"),"."),(0,i.kt)("p",null,"After that, go to the ",(0,i.kt)("em",{parentName:"p"},"Details")," panel of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Sphere")," and increase the value of the ",(0,i.kt)("em",{parentName:"p"},"Sphere Radius"),"\nproperty ",(0,i.kt)(o.h8,{text:"3",mdxType:"Step"})," to something around ",(0,i.kt)("inlineCode",{parentName:"p"},"150"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Setup GASActor_Pickup Collision",src:n(89555).Z,width:"1920",height:"1040"})),(0,i.kt)("p",null,"Now, right-click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Sphere")," component ",(0,i.kt)(o.h8,{text:"1",mdxType:"Step"}),", select ",(0,i.kt)("inlineCode",{parentName:"p"},"Add Event")," ",(0,i.kt)(o.h8,{text:"2",mdxType:"Step"})," and choose\n",(0,i.kt)("inlineCode",{parentName:"p"},"Add OnComponentBeginOverlap")," ",(0,i.kt)(o.h8,{text:"3",mdxType:"Step"})," to add this event handler to the ",(0,i.kt)("em",{parentName:"p"},"Event Graph"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Setup GASActor_Pickup Events",src:n(90662).Z,width:"643",height:"632"})),(0,i.kt)("p",null,"In the ",(0,i.kt)("em",{parentName:"p"},"Event Graph")," you should now see the event handler ",(0,i.kt)("inlineCode",{parentName:"p"},"OnComponentBeginOverlap"),".\nFirst, we want to cast the ",(0,i.kt)("inlineCode",{parentName:"p"},"Other Actor")," variable to ",(0,i.kt)("inlineCode",{parentName:"p"},"ThirdPersonCharacter")," and get the reference of its\n",(0,i.kt)("inlineCode",{parentName:"p"},"TBIA Interaction Component"),". From the component's reference we than need to get the ",(0,i.kt)("inlineCode",{parentName:"p"},"ASCOwner")," reference."),(0,i.kt)("p",null,"Before continuing, we check if the actor is valid and then call ",(0,i.kt)("inlineCode",{parentName:"p"},"Send Gameplay Event to Interacting Actor")," passing the\nfollowing parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Interacted Actor : ",(0,i.kt)("inlineCode",{parentName:"li"},"ASCOwner")," ",(0,i.kt)(o.h8,{text:"1",mdxType:"Step"})),(0,i.kt)("li",{parentName:"ul"},"Event Tag : ",(0,i.kt)("inlineCode",{parentName:"li"},"TBIA.Interaction.Triggered.Cosmetic")," ",(0,i.kt)(o.h8,{text:"2",mdxType:"Step"})),(0,i.kt)("li",{parentName:"ul"},"Interacting Actor : ",(0,i.kt)("em",{parentName:"li"},"Blueprint")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Self")," reference.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"ASCOwner")," is a reference to the actor holding ",(0,i.kt)("inlineCode",{parentName:"p"},"TBIA Ability System Component")," which might be the ",(0,i.kt)("em",{parentName:"p"},"Player Character")," or\n",(0,i.kt)("em",{parentName:"p"},"Player State")," depending on your project."),(0,i.kt)("p",{parentName:"div"},"In our ",(0,i.kt)("em",{parentName:"p"},"Demo Project")," we show how to get the ",(0,i.kt)("inlineCode",{parentName:"p"},"ASCOwner")," reference using a ",(0,i.kt)("em",{parentName:"p"},"BluePrint Interface")," which is a better\n(read: more performant) approach than casting. However, for keeping this tutorial concise and to the point we are\nusing this shortcut instead."))),(0,i.kt)("p",null,"From ",(0,i.kt)("inlineCode",{parentName:"p"},"Event On End Interaction")," check if the interaction ended in normal execution, or it is being cancelled, then call ",(0,i.kt)("inlineCode",{parentName:"p"},"Switch Has Authority"),"\nand only if true we destroy ",(0,i.kt)("inlineCode",{parentName:"p"},"GASActor_Pickup"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Setup GASActor_Pickup Send Gameplay Events",src:n(75356).Z,width:"1141",height:"589"})),(0,i.kt)("h2",{id:"testing-the-interactable-actor"},"Testing the Interactable Actor"),(0,i.kt)("p",null,"To test this interaction, place a couple of ",(0,i.kt)("inlineCode",{parentName:"p"},"GASActor_Pickup")," in the level."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Test Interactable Actor",src:n(48856).Z,width:"1532",height:"595"})),(0,i.kt)("p",null,"Press the ",(0,i.kt)("em",{parentName:"p"},"Play")," button and let your player character overlap with ",(0,i.kt)("inlineCode",{parentName:"p"},"GASActor_Pickup"),".\nYou should see the pickup object getting destroyed."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"As you can see, the ",(0,i.kt)("inlineCode",{parentName:"p"},"ThirdPersonCharacter")," character played the ",(0,i.kt)("em",{parentName:"p"},"Grab Montage")," that we set up earlier in\n",(0,i.kt)("a",{parentName:"p",href:"/docs/quick-start/using-animation-cosmetic"},"Using Animation Cosmetic")," because we are using the same\n",(0,i.kt)("em",{parentName:"p"},"Interaction Context")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"GASActorBase"),"."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Play in Editor",src:n(99050).Z,width:"1267",height:"837"})))}h.isMDXComponent=!0},83463:function(e,t,n){t.Z=n.p+"assets/images/01_create_ability-a362fb94ec6c974b401099e31a004aa3.png"},2788:function(e,t,n){t.Z=n.p+"assets/images/01a_grant_to_player-6d61f60aaa98bd9d7245fc6944e9caf9.png"},40266:function(e,t,n){t.Z=n.p+"assets/images/02_duplicate-e5bea3fa57d2903b0a3f07b605a3c6b1.png"},89555:function(e,t,n){t.Z=n.p+"assets/images/03_setup_actor_pickup-e4d5b333247fe68bc3ceab158a304de3.png"},90662:function(e,t,n){t.Z=n.p+"assets/images/04_collision_sphere-55562a5d39aab326a67024bbce911eb8.png"},75356:function(e,t,n){t.Z=n.p+"assets/images/05_send_gameplay_event-23a7b8176ff7b9f04a6c04f4fceefd36.png"},48856:function(e,t,n){t.Z=n.p+"assets/images/06_place_level-ba8ea6d84cf3094aed0f354c97d304e4.png"},99050:function(e,t,n){t.Z=n.p+"assets/images/07_play-8de68b2fc699bdb44076e120c2bc81f1.png"}}]);