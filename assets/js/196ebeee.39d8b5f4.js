"use strict";(self.webpackChunktbia_documentation=self.webpackChunktbia_documentation||[]).push([[757],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,u=d["".concat(l,".").concat(h)]||d[h]||m[h]||o;return n?a.createElement(u,r(r({ref:t},s),{},{components:n})):a.createElement(u,r({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4887:function(e,t,n){n.d(t,{UE:function(){return r},h8:function(){return i},qh:function(){return l},y$:function(){return o}});n(87462),n(63366),n(67294);var a=n(3905),i=function(e){e.children;var t=e.text;return(0,a.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},t)},o=function(e){var t=e.children;return(0,a.kt)("span",{style:{color:"#faa"}},t)};function r(e){e.children;var t=e.version,n="#ffffff";return(0,a.kt)("span",{style:{backgroundColor:"#414141",color:n,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},t)}function p(e,t,n,i){return(0,a.kt)("div",{style:{backgroundColor:i,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}var l=function(e){e.children;return p(0,"Released","#afa","#181")}},81360:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=n(4887),p=["components"],l={sidebar_position:5,title:"Using Object Interaction Timed"},c=void 0,s={unversionedId:"quick-start/using-object-timed",id:"version-1.4.0/quick-start/using-object-timed",title:"Using Object Interaction Timed",description:"Create Object Interaction Timed",source:"@site/versioned_docs/version-1.4.0/quick-start/using-object-timed.mdx",sourceDirName:"quick-start",slug:"/quick-start/using-object-timed",permalink:"/TBIA-Documentation/docs/1.4.0/quick-start/using-object-timed",draft:!1,editUrl:"https://github.com/twistedbytes-net/TBIA-Documentation/edit/master/versioned_docs/version-1.4.0/quick-start/using-object-timed.mdx",tags:[],version:"1.4.0",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Using Object Interaction Timed"},sidebar:"tutorialSidebar",previous:{title:"Using Interact Animation",permalink:"/TBIA-Documentation/docs/1.4.0/quick-start/using-animation"},next:{title:"Using Object Interaction Tag",permalink:"/TBIA-Documentation/docs/1.4.0/quick-start/using-object-tag"}},m={},d=[{value:"Create Object Interaction Timed",id:"create-object-interaction-timed",level:2},{value:"Setup Interactable Actor",id:"setup-interactable-actor",level:2},{value:"Playing montages on Interactable Actors",id:"playing-montages-on-interactable-actors",level:3},{value:"Setup Door Montage",id:"setup-door-montage",level:2},{value:"Interactable Actor Logic",id:"interactable-actor-logic",level:2}],h={toc:d};function u(e){var t=e.components,l=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"create-object-interaction-timed"},"Create Object Interaction Timed"),(0,o.kt)("p",null,"To create an ",(0,o.kt)("em",{parentName:"p"},"Object Interaction Timed")," ability, right-click in the ",(0,o.kt)("em",{parentName:"p"},"Content Browser"),"\nand select ",(0,o.kt)("inlineCode",{parentName:"p"},"TwistedBytes | Abilities | Object Interaction Timed")," as shown in the image below."),(0,o.kt)("p",null,"Name the newly created asset ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectInteractionTimed"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create Object Interaction Timed Ability",src:n(95700).Z,width:"1920",height:"1040"})),(0,o.kt)("h2",{id:"setup-interactable-actor"},"Setup Interactable Actor"),(0,o.kt)("p",null,"Create new ",(0,o.kt)("em",{parentName:"p"},"GAS Actor Base"),", right-click in the ",(0,o.kt)("em",{parentName:"p"},"Content Browser")," and select\n",(0,o.kt)("inlineCode",{parentName:"p"},"TwistedBytes | Actors | GAS Actor Base")," as shown in the image below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create New GAS Actor Base",src:n(57247).Z,width:"1341",height:"924"})),(0,o.kt)("p",null,"Replace ",(0,o.kt)("em",{parentName:"p"},"Default Scene Root")," with ",(0,o.kt)("em",{parentName:"p"},"Skeletal Mesh Component")," ",(0,o.kt)(r.h8,{text:"1",mdxType:"Step"}),". Next, select a ",(0,o.kt)("em",{parentName:"p"},"Skeletal Mesh")," you want to use.\nIn this example, we will use the ",(0,o.kt)("em",{parentName:"p"},"Door")," static mesh ",(0,o.kt)(r.h8,{text:"2",mdxType:"Step"})," that is shipped with ",(0,o.kt)("inlineCode",{parentName:"p"},"TBIA_Demo"),". Then you can easily create\nan ",(0,o.kt)("em",{parentName:"p"},"Animation Blueprint")," for the ",(0,o.kt)("em",{parentName:"p"},"Door")," mesh by right-clicking in the ",(0,o.kt)("em",{parentName:"p"},"Content Browser"),". Select\n",(0,o.kt)("inlineCode",{parentName:"p"},"Animation | Animation Blueprint")," and then select the ",(0,o.kt)("em",{parentName:"p"},"Door")," skeletal mesh. After that, assign it to the ",(0,o.kt)("em",{parentName:"p"},"Door")," Skeletal mesh\nin the newly created ",(0,o.kt)("em",{parentName:"p"},"GAS Actor Base")," ",(0,o.kt)(r.h8,{text:"3",mdxType:"Step"}),". "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Setup New GAS Actor",src:n(5594).Z,width:"991",height:"865"})),(0,o.kt)("p",null,"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"TBIA_InteractionComponent")," ",(0,o.kt)(r.h8,{text:"1",mdxType:"Step"}),", go to the ",(0,o.kt)("em",{parentName:"p"},"Details Panel")," and add ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectInteractionTimed")," ",(0,o.kt)(r.h8,{text:"2",mdxType:"Step"})," to the ",(0,o.kt)("em",{parentName:"p"},"Granted Abilities on Start")," property."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Grant Ability to New GAS Actor",src:n(10058).Z,width:"1920",height:"1040"})),(0,o.kt)("p",null,"We then add four static mesh components ",(0,o.kt)(r.h8,{text:"1",mdxType:"Step"})," so that the door has some kind of buttons that can be interacted with.\nPlace the static mesh components next to the door mesh as shown in ",(0,o.kt)(r.h8,{text:"2",mdxType:"Step"}),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add Button Meshes to the Door",src:n(16098).Z,width:"1378",height:"851"})),(0,o.kt)("p",null,"Create a new ",(0,o.kt)("em",{parentName:"p"},"map")," variable ",(0,o.kt)("inlineCode",{parentName:"p"},"InteractableMeshesToIndexes")," ",(0,o.kt)(r.h8,{text:"1",mdxType:"Step"}),". As variable types, choose ",(0,o.kt)("inlineCode",{parentName:"p"},"Primitive Component")," for the key ",(0,o.kt)(r.h8,{text:"2",mdxType:"Step"})," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Integer")," for the value ",(0,o.kt)(r.h8,{text:"3",mdxType:"Step"}),"."),(0,o.kt)("p",null,"Switch to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Construction Script")," tab and add both button static mesh components to the ",(0,o.kt)("em",{parentName:"p"},"map")," variable ",(0,o.kt)("inlineCode",{parentName:"p"},"InteractableMeshesToIndexes")," ",(0,o.kt)(r.h8,{text:"4",mdxType:"Step"}),", ",(0,o.kt)(r.h8,{text:"5",mdxType:"Step"})," as shown in the image below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Setup Door Buttons",src:n(77305).Z,width:"1920",height:"1040"})),(0,o.kt)("h3",{id:"playing-montages-on-interactable-actors"},"Playing montages on Interactable Actors"),(0,o.kt)("p",null,"We will use a simple technique to play montages on ",(0,o.kt)("em",{parentName:"p"},"Interactable Actors"),"."),(0,o.kt)("p",null,"Open the ",(0,o.kt)("em",{parentName:"p"},"Door AnimBP")," and drag the ",(0,o.kt)("inlineCode",{parentName:"p"},"door_open")," animation sequence into the ",(0,o.kt)("inlineCode",{parentName:"p"},"AnimGraph")," ",(0,o.kt)(r.h8,{text:"1",mdxType:"Step"}),".\nThen, right-click on the animation sequence and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Convert to Single Frame Animation")," ",(0,o.kt)(r.h8,{text:"2",mdxType:"Step"}),"."),(0,o.kt)("p",null,"Now, the animation sequence will look like what you see in the image below ",(0,o.kt)(r.h8,{text:"3",mdxType:"Step"}),". Add a montage slot ",(0,o.kt)(r.h8,{text:"4",mdxType:"Step"})," to be able to specify\nfrom where the montage will override the door's animation."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Setup AnimBP for the New GAS Actor Base",src:n(56054).Z,width:"1534",height:"927"})),(0,o.kt)("h2",{id:"setup-door-montage"},"Setup Door Montage"),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"door_open_Montage")," (shipped with the demo project) and make sure the ",(0,o.kt)("em",{parentName:"p"},"Montage Sections")," ",(0,o.kt)(r.h8,{text:"1",mdxType:"Step"}),", ",(0,o.kt)(r.h8,{text:"2",mdxType:"Step"}),", ",(0,o.kt)(r.h8,{text:"3",mdxType:"Step"})," are named the same as in the ",(0,o.kt)("inlineCode",{parentName:"p"},"GA_ObjectInteractionTimed"),"\nas in the image below. The montage slot should match the defined slot in the ",(0,o.kt)("em",{parentName:"p"},"Door AnimBP")," ",(0,o.kt)(r.h8,{text:"4",mdxType:"Step"}),"."),(0,o.kt)("p",null,"Also make sure that the ",(0,o.kt)("em",{parentName:"p"},"Interact")," montage section loops on itself ",(0,o.kt)(r.h8,{text:"5",mdxType:"Step"})," as shown in the image below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Setup Door Montage",src:n(55565).Z,width:"1545",height:"1012"})),(0,o.kt)("h2",{id:"interactable-actor-logic"},"Interactable Actor Logic"),(0,o.kt)("p",null,"Open the new ",(0,o.kt)("inlineCode",{parentName:"p"},"GasActorBase")," and override ",(0,o.kt)("inlineCode",{parentName:"p"},"Is Available for Interaction"),". We want to check if the interacted component\n(the component that the character is looking at) is the static mesh component of the button."),(0,o.kt)("p",null,"To do this, we simply call ",(0,o.kt)("em",{parentName:"p"},"Find")," on the ",(0,o.kt)("em",{parentName:"p"},"map")," variable ",(0,o.kt)("inlineCode",{parentName:"p"},"Interactable Meshes to Indexes")," holding all references to our static mesh components."),(0,o.kt)("p",null,"Also make sure that the ",(0,o.kt)("em",{parentName:"p"},"Door")," is ",(0,o.kt)("strong",{parentName:"p"},"not")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Interacting")," state. If both checks evaluate to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", then the ",(0,o.kt)("em",{parentName:"p"},"Door")," is available for potential interactions."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Is Available for Interaction",src:n(70663).Z,width:"1098",height:"667"})),(0,o.kt)("p",null,"Override ",(0,o.kt)("inlineCode",{parentName:"p"},"Is Blocked for Interaction")," and return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," which means it's blocked so that no one can interact with the ",(0,o.kt)("em",{parentName:"p"},"Door")," if its state\nis ",(0,o.kt)("inlineCode",{parentName:"p"},"Interacting"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Is Blocked for Interaction",src:n(84643).Z,width:"1103",height:"712"})),(0,o.kt)("p",null,"Override ",(0,o.kt)("inlineCode",{parentName:"p"},"Get Interaction Context")," and add a new ",(0,o.kt)("em",{parentName:"p"},"Make ",(0,o.kt)("inlineCode",{parentName:"em"},"TBIA_InteractionContext"))," node."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Primary Mesh Montage")," ",(0,o.kt)(r.h8,{text:"1",mdxType:"Step"})," is the interaction animation montage that we want to play on the ",(0,o.kt)("em",{parentName:"p"},"PlayerCharacter")," when interacting with the ",(0,o.kt)("em",{parentName:"p"},"Door"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Wait for Input Trigger")," ",(0,o.kt)(r.h8,{text:"2",mdxType:"Step"})," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"True")," so that if the ",(0,o.kt)("em",{parentName:"p"},"Player")," releases the ",(0,o.kt)("em",{parentName:"p"},"Interaction Button")," the interaction will be cancelled."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Interaction Duration")," ",(0,o.kt)(r.h8,{text:"3",mdxType:"Step"})," is ",(0,o.kt)("inlineCode",{parentName:"p"},"1 sec")," which is the whole time needed for the ",(0,o.kt)("em",{parentName:"p"},"Interaction")," to finish successfully."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Animation Loop Duration")," ",(0,o.kt)(r.h8,{text:"4",mdxType:"Step"})," is ",(0,o.kt)("inlineCode",{parentName:"p"},"0.8 sec")," which is the time that you want to loop the montage on."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Object Interaction Duration")," ",(0,o.kt)(r.h8,{text:"5",mdxType:"Step"})," is the lifetime of ",(0,o.kt)("inlineCode",{parentName:"p"},"Object Interaction Timed")," Ability that will run on the ",(0,o.kt)("em",{parentName:"p"},"Door"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Object Montage")," ",(0,o.kt)(r.h8,{text:"6",mdxType:"Step"})," is the montage that the ",(0,o.kt)("inlineCode",{parentName:"p"},"Object Interaction Timed")," Ability will try to play when it starts."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Get Interaction Context",src:n(44080).Z,width:"1106",height:"713"})),(0,o.kt)("p",null,"Go to the ",(0,o.kt)("em",{parentName:"p"},"Event Graph")," and navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"On Post Interact"),". When this event is triggered on\n",(0,o.kt)("inlineCode",{parentName:"p"},"Authority")," ",(0,o.kt)(r.h8,{text:"1",mdxType:"Step"}),", we want to call ",(0,o.kt)("inlineCode",{parentName:"p"},"Send Gameplay Event to Interacting Actor"),"."),(0,o.kt)("p",null,"Pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"Interacted Actor")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"Self"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Interacted Component")," as the Door Skeletal Mesh Component, set the ",(0,o.kt)("em",{parentName:"p"},"EventTag"),"\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"TBIA.Object.Interaction.Timed"),", ",(0,o.kt)("em",{parentName:"p"},"Interacting Actor")," will be ",(0,o.kt)("em",{parentName:"p"},"Self")," referenced also."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Send Gameplay Event to Interacting Actor",src:n(97690).Z,width:"1100",height:"715"})),(0,o.kt)("p",null,"Place the ",(0,o.kt)("em",{parentName:"p"},"Door")," actor in the world and Press ",(0,o.kt)("em",{parentName:"p"},"Play")," in the Unreal Editor, look at the door button and press the ",(0,o.kt)("inlineCode",{parentName:"p"},"E")," key which is the Interaction button that we configured earlier.\nYou will see the ",(0,o.kt)("em",{parentName:"p"},"PlayerCharacter")," playing the interaction montage for 1 second then the door will open for 3 seconds then it will be closed."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Play",src:n(45997).Z,width:"1661",height:"680"})))}u.isMDXComponent=!0},95700:function(e,t,n){t.Z=n.p+"assets/images/01a_create_object_timed-33d1b7945c30dfc342cbb04b85268b82.png"},57247:function(e,t,n){t.Z=n.p+"assets/images/01b_create_GASActor-19c7da6e2f915c15e2909d354dfd1691.png"},5594:function(e,t,n){t.Z=n.p+"assets/images/02a_door_actor-208d84bd6d16f55ef74e881b78f83c2b.png"},10058:function(e,t,n){t.Z=n.p+"assets/images/02b_grant_ability-aa5f4b2e7825f718f89a949f3a8a6db1.png"},16098:function(e,t,n){t.Z=n.p+"assets/images/03a_buttons-7127ab33190a6839ff6d30c8c52d7d1c.png"},77305:function(e,t,n){t.Z=n.p+"assets/images/03b_button_var-4090be2177977552fe5aba5c6462f08f.png"},56054:function(e,t,n){t.Z=n.p+"assets/images/04_door_animbp-ba3dbe901c079be25c2606a76e8a300e.png"},55565:function(e,t,n){t.Z=n.p+"assets/images/05_montage_setup-af3ad828e10dc91956d0487e59aad39e.png"},70663:function(e,t,n){t.Z=n.p+"assets/images/06_is_available-d211ae3a03346724a0496f2305251089.png"},84643:function(e,t,n){t.Z=n.p+"assets/images/07_is_blocked-3ee967ab9b5493e819700ea8961c21d0.png"},44080:function(e,t,n){t.Z=n.p+"assets/images/08_interaction_context-d4cc4e8ee71d9b357768dbeb7de4f311.png"},97690:function(e,t,n){t.Z=n.p+"assets/images/09_send_gameplay_event-8921139baf058329ab76c5d9cac58b13.png"},45997:function(e,t,n){t.Z=n.p+"assets/images/10_play-612a09223deff6d87be7f92a8d934dff.png"}}]);