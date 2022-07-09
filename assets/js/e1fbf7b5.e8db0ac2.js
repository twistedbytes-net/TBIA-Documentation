"use strict";(self.webpackChunktbia_documentation=self.webpackChunktbia_documentation||[]).push([[6517],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4887:function(e,t,n){n.d(t,{AA:function(){return p},UE:function(){return o},V3:function(){return c},h8:function(){return i},qh:function(){return l},y$:function(){return r}});n(87462),n(63366),n(67294);var a=n(3905),i=function(e){e.children;var t=e.text;return(0,a.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},t)},r=function(e){var t=e.children;return(0,a.kt)("span",{style:{color:"#faa"}},t)};function o(e){e.children;var t=e.version,n="#ffffff";return(0,a.kt)("span",{style:{backgroundColor:"#414141",color:n,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},t)}function s(e,t,n,i){return(0,a.kt)("div",{style:{backgroundColor:i,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}var l=function(e){e.children;return s(0,"Released","#afa","#181")},p=function(e){e.children;return s(0,"In Progress","#ffa","#882")},c=function(e){e.children;return s(0,"Planned","#aff","#288")}},48595:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=n(4887),s=["components"],l={sidebar_position:1,title:"Using Interact Passive"},p=void 0,c={unversionedId:"quick-start/using-passive",id:"version-1.0.0/quick-start/using-passive",title:"Using Interact Passive",description:"Setting up player character",source:"@site/versioned_docs/version-1.0.0/quick-start/using-passive.mdx",sourceDirName:"quick-start",slug:"/quick-start/using-passive",permalink:"/TBIA-Documentation/docs/1.0.0/quick-start/using-passive",draft:!1,editUrl:"https://github.com/twistedbytes-net/TBIA-Documentation/edit/master/versioned_docs/version-1.0.0/quick-start/using-passive.mdx",tags:[],version:"1.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Using Interact Passive"},sidebar:"tutorialSidebar",previous:{title:"Migration Guide",permalink:"/TBIA-Documentation/docs/1.0.0/getting-started/migration-guide"},next:{title:"Using Interact Active",permalink:"/TBIA-Documentation/docs/1.0.0/quick-start/using-active"}},d={},u=[{value:"Setting up player character",id:"setting-up-player-character",level:2},{value:"Create Interact Passive Ability",id:"create-interact-passive-ability",level:2},{value:"Create your first interactable object",id:"create-your-first-interactable-object",level:2},{value:"Extending Passive Ability Functionality",id:"extending-passive-ability-functionality",level:2}],m={toc:u};function h(e){var t=e.components,l=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"setting-up-player-character"},"Setting up player character"),(0,r.kt)("p",null,"To get started, create a new project based on Unreal Engine's ",(0,r.kt)("em",{parentName:"p"},"Third Person Template"),"."),(0,r.kt)("p",null,"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"ThirdPersonCharacter")," Blueprint and go to ",(0,r.kt)("em",{parentName:"p"},"Class Settings")," ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"}),".\nChange the ",(0,r.kt)("em",{parentName:"p"},"Parent Class")," ",(0,r.kt)(o.h8,{text:"2",mdxType:"Step"})," from ",(0,r.kt)("inlineCode",{parentName:"p"},"Character")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"TBIA_GASCharacter"),".\nAfter changing the ",(0,r.kt)("em",{parentName:"p"},"Parent Class"),", two new components ",(0,r.kt)("inlineCode",{parentName:"p"},"TBIA Interaction Component")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"TBIA Ability System Component")," will appear ",(0,r.kt)(o.h8,{text:"3",mdxType:"Step"}),"."),(0,r.kt)("p",null,"Also note that your Character Blueprint now inherits two interfaces ",(0,r.kt)(o.h8,{text:"4",mdxType:"Step"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Ability System Interface")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"TBIA Interactable")," that we will make use of in a moment."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Character Parent Class",src:n(80030).Z,width:"1920",height:"1040"})),(0,r.kt)("p",null,"For a better third-person perspective move the camera's location a bit to the side, e.g.\n",(0,r.kt)("inlineCode",{parentName:"p"},"(0.0, 80.0, 60.0)")," ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"}),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Character Camera",src:n(7004).Z,width:"1920",height:"1040"})),(0,r.kt)("p",null,"Next, create a socket on the head bone ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"})," and name it\n",(0,r.kt)("inlineCode",{parentName:"p"},"headSocket")," ",(0,r.kt)(o.h8,{text:"2",mdxType:"Step"}),". Keep the location at its default."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Character Socket",src:n(64689).Z,width:"1920",height:"1040"})),(0,r.kt)("h2",{id:"create-interact-passive-ability"},"Create Interact Passive Ability"),(0,r.kt)("p",null,"To create an ",(0,r.kt)("em",{parentName:"p"},"Interact Passive")," ability, right-click in the ",(0,r.kt)("em",{parentName:"p"},"Content Browser")," and\nselect ",(0,r.kt)("inlineCode",{parentName:"p"},"TwistedBytes | Abilities | Interact Passive")," as shown in ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"}),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Interact Passive Ability",src:n(56290).Z,width:"1920",height:"1040"})),(0,r.kt)("p",null,"Open your newly created ",(0,r.kt)("inlineCode",{parentName:"p"},"InteractPassive")," Blueprint and change the ",(0,r.kt)("em",{parentName:"p"},"Trace Channel")," property to your\nown ",(0,r.kt)("em",{parentName:"p"},"Collision Channel"),", e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"Interactable")," ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"})," (see ",(0,r.kt)("a",{parentName:"p",href:"../getting-started/migration-guide#collision-settings"},"Migration Guide"),")."),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"Trace Start Location Type")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Socket on Character's Mesh")," ",(0,r.kt)(o.h8,{text:"2",mdxType:"Step"}),"."),(0,r.kt)("p",null,"For easier debugging of our ",(0,r.kt)("em",{parentName:"p"},"Interact Passive Ability")," we also want to enable ",(0,r.kt)("inlineCode",{parentName:"p"},"Show Debug")," ",(0,r.kt)(o.h8,{text:"3",mdxType:"Step"}),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Passive Config",src:n(20348).Z,width:"1920",height:"1040"})),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The max interaction range defaults to 3 meters. For this example, the default value will work just fine."))),(0,r.kt)("p",null,"Press ",(0,r.kt)("em",{parentName:"p"},"Play")," in the Unreal Editor. You should now see a debug line trace that starts from your character's head\nas shown in the image below which means your ",(0,r.kt)("em",{parentName:"p"},"Interact Passive Ability")," is set up correctly."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Done",src:n(47269).Z,width:"1343",height:"566"})),(0,r.kt)("h2",{id:"create-your-first-interactable-object"},"Create your first interactable object"),(0,r.kt)("p",null,"To create your first interactable object, right-click in the ",(0,r.kt)("em",{parentName:"p"},"Content Browser")," and select\n",(0,r.kt)("inlineCode",{parentName:"p"},"TwistedBytes | Actors | GAS Actor Base")," ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"}),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create GAS Actor",src:n(50108).Z,width:"1920",height:"1040"})),(0,r.kt)("p",null,"Open the newly created Actor Blueprint and add a ",(0,r.kt)("em",{parentName:"p"},"Static Mesh Component"),". Make this component the default root\ncomponent by dragging and dropping it onto ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultSceneRoot")," as shown in the image below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Set Mesh",src:n(39660).Z,width:"736",height:"346"})),(0,r.kt)("p",null,"Select the ",(0,r.kt)("inlineCode",{parentName:"p"},"StaticMesh")," in the ",(0,r.kt)("em",{parentName:"p"},"Components")," tab. Then, in the ",(0,r.kt)("em",{parentName:"p"},"Details")," tab, assign ",(0,r.kt)("inlineCode",{parentName:"p"},"1M_Cube_Chamfer")," to the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Static Mesh")," property ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"})," and lower its scale to ",(0,r.kt)("inlineCode",{parentName:"p"},"0.25")," for all three axis ",(0,r.kt)(o.h8,{text:"2",mdxType:"Step"}),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mesh Settings",src:n(29722).Z,width:"476",height:"286"})),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"My Blueprint")," tab in the lower-left, expand the ",(0,r.kt)("inlineCode",{parentName:"p"},"TwistedBytes")," interface functions and override\n",(0,r.kt)("inlineCode",{parentName:"p"},"On Interactable Target Found")," ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"})," and ",(0,r.kt)("inlineCode",{parentName:"p"},"On Interactable Target Lost")," ",(0,r.kt)(o.h8,{text:"2",mdxType:"Step"}),"."),(0,r.kt)("p",null,"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"Print String")," nodes to print some debug information about interactable actors as shown in the ",(0,r.kt)("em",{parentName:"p"},"Event Graph")," in\nthe image below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Target Found and Target Lost events",src:n(61488).Z,width:"1920",height:"1040"})),(0,r.kt)("p",null,"This concludes the initial set up of our interactable cube. Now, place one or more instances of it in the level and\nthen let's test our implementation. Press ",(0,r.kt)("em",{parentName:"p"},"Play")," in the Unreal Editor."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Remember that we did not modify the max range for interactions in our ",(0,r.kt)("inlineCode",{parentName:"p"},"PassiveAbility")," Blueprint.\nThis means we can only interact within 3 meters between the player character and an interactable object."))),(0,r.kt)("p",null,"Walk up to an interactable cube so that the player character is in range for interactions.\nYou should now see debug messages being printed whenever you look at the cube."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Target Found event",src:n(70367).Z,width:"1342",height:"567"})),(0,r.kt)("p",null,"When you look away from the cube the ",(0,r.kt)("inlineCode",{parentName:"p"},"On Interactable Target Lost")," event will be triggered. You should see\ndebug messages as shown in the image below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Target Lost event",src:n(84576).Z,width:"1342",height:"565"})),(0,r.kt)("h2",{id:"extending-passive-ability-functionality"},"Extending Passive Ability Functionality"),(0,r.kt)("p",null,"Open the Blueprint of our interactable test cube (",(0,r.kt)("inlineCode",{parentName:"p"},"GASActorBase"),") again. In the interface functions,\noverride ",(0,r.kt)("inlineCode",{parentName:"p"},"Is Available for Interaction"),". Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"Print String")," node as shown in  ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"})," and\nset the ",(0,r.kt)("inlineCode",{parentName:"p"},"Return Value")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," ",(0,r.kt)(o.h8,{text:"2",mdxType:"Step"}),"."),(0,r.kt)("p",null,"Now press ",(0,r.kt)("em",{parentName:"p"},"Play")," in the Unreal Editor and see what will happen when you try to interact with our test cube."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Available true",src:n(81256).Z,width:"1909",height:"1038"})),(0,r.kt)("p",null,"As you can see the ",(0,r.kt)("inlineCode",{parentName:"p"},"Is Available for Interaction")," interface function ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"})," was called\nbefore the ",(0,r.kt)("inlineCode",{parentName:"p"},"On Interactable Target Found")," event was fired ",(0,r.kt)(o.h8,{text:"2",mdxType:"Step"}),". This is because the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Interact Passive")," ability periodically executes a line trace to check for potential interactable objects\nin view and range."),(0,r.kt)("p",null,"If an interactable actor (i.e. an actor implementing the ",(0,r.kt)("inlineCode",{parentName:"p"},"TBIA_Interactable")," interface) has been found,\nthe passive ability will first call ",(0,r.kt)("inlineCode",{parentName:"p"},"Is Available for Interaction")," ",(0,r.kt)(o.h8,{text:"3",mdxType:"Step"})," to determine whether this\ninteractable actor is currently available for interactions or not. Only if the interactable is indeed available,\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"On Interactable Target Found")," event will be fired in order to notify all potential interactors."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Available true in-game",src:n(27390).Z,width:"1344",height:"566"})),(0,r.kt)("p",null,"Let's set the return value of ",(0,r.kt)("inlineCode",{parentName:"p"},"Is Available For Interaction")," to `",(0,r.kt)("inlineCode",{parentName:"p"},"false")," ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"})," and then\npress ",(0,r.kt)("em",{parentName:"p"},"Play")," again."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Available false",src:n(83176).Z,width:"1164",height:"668"})),(0,r.kt)("p",null,"The debug messages show that only the ",(0,r.kt)("inlineCode",{parentName:"p"},"Is Available For Interaction")," interface function is now being\ncalled ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"})," and that the ",(0,r.kt)("inlineCode",{parentName:"p"},"On Interactable Target Found")," event is not triggered at all."),(0,r.kt)("p",null,"This is because our implementation for the test cube now always answers ",(0,r.kt)("em",{parentName:"p"},'"No, I\'m not available at the moment"'),"\nwhenever our passive ability asks for the cube's current availability status."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Available false in-game",src:n(43836).Z,width:"1341",height:"564"})))}h.isMDXComponent=!0},80030:function(e,t,n){t.Z=n.p+"assets/images/01_character_parent-4cd2fd798f8cc8ed0691724bcae71044.png"},56290:function(e,t,n){t.Z=n.p+"assets/images/02_create_passive-c928cddce97f4ef5ffd124faac9519b8.png"},20348:function(e,t,n){t.Z=n.p+"assets/images/03_passive_config-6cabb537c0e72ae7f90586bab9d9df80.png"},7004:function(e,t,n){t.Z=n.p+"assets/images/05_character_camera-5850aeacc9d285aaeb0cded0d8dca0a2.png"},64689:function(e,t,n){t.Z=n.p+"assets/images/06_character_socket-706e826b59736e931a6d8e49f44be643.png"},47269:function(e,t,n){t.Z=n.p+"assets/images/07_done-9923518a931a96c20cd116ec86e2b219.png"},50108:function(e,t,n){t.Z=n.p+"assets/images/08_create_gas_actor-c002e13c0c59228a7dbfbe5f17f32a3a.png"},39660:function(e,t,n){t.Z=n.p+"assets/images/09_set_mesh-1d06cf86523c3f6e489e167bf2781058.png"},29722:function(e,t,n){t.Z=n.p+"assets/images/10_mesh_settings-923d5c78bd7de89d2579fc956dc93e1f.png"},61488:function(e,t,n){t.Z=n.p+"assets/images/11_target_found_lost-cf80e0b3186d759a148df31d1ff79557.png"},70367:function(e,t,n){t.Z=n.p+"assets/images/12_target_found-2b05ff86a08d3139fe2b30e31abf669d.png"},84576:function(e,t,n){t.Z=n.p+"assets/images/13_target_lost-168a5cc5b768827c164d3f16fe26b6ce.png"},81256:function(e,t,n){t.Z=n.p+"assets/images/14_available-97f6ed3f9424c2f01a2a7f628156df50.png"},27390:function(e,t,n){t.Z=n.p+"assets/images/15_available_ingame-a0342f47f15d1981823a348737853ccd.png"},83176:function(e,t,n){t.Z=n.p+"assets/images/16_available_false-db2ff1b0cc0b7a07ced1948ce409d33f.png"},43836:function(e,t,n){t.Z=n.p+"assets/images/17_available_false_ingame-f4b171a9d0b046640d45d50a1c5ac6e6.png"}}]);