"use strict";(self.webpackChunktbia_documentation=self.webpackChunktbia_documentation||[]).push([[1863],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},l),{},{components:n})):a.createElement(f,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4887:function(e,t,n){n.d(t,{UE:function(){return o},h8:function(){return r},qh:function(){return c},y$:function(){return i}});n(87462),n(63366),n(67294);var a=n(3905),r=function(e){e.children;var t=e.text;return(0,a.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},t)},i=function(e){var t=e.children;return(0,a.kt)("span",{style:{color:"#faa"}},t)};function o(e){e.children;var t=e.version,n="#ffffff";return(0,a.kt)("span",{style:{backgroundColor:"#414141",color:n,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},t)}function s(e,t,n,r){return(0,a.kt)("div",{style:{backgroundColor:r,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}var c=function(e){e.children;return s(0,"Released","#afa","#181")}},64940:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(4887),s=["components"],c={sidebar_position:3,title:"Custom Trace In Passive Ability"},p=void 0,l={unversionedId:"features/passive-custom-trace",id:"version-1.2.0/features/passive-custom-trace",title:"Custom Trace In Passive Ability",description:"Project Setup",source:"@site/versioned_docs/version-1.2.0/features/passive-custom-trace.mdx",sourceDirName:"features",slug:"/features/passive-custom-trace",permalink:"/TBIA-Documentation/docs/1.2.0/features/passive-custom-trace",draft:!1,editUrl:"https://github.com/twistedbytes-net/TBIA-Documentation/edit/master/versioned_docs/version-1.2.0/features/passive-custom-trace.mdx",tags:[],version:"1.2.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Custom Trace In Passive Ability"},sidebar:"tutorialSidebar",previous:{title:"Using Proximity Interactions",permalink:"/TBIA-Documentation/docs/1.2.0/features/proximity-interactions"},next:{title:"Custom Trace In Active Ability",permalink:"/TBIA-Documentation/docs/1.2.0/features/active-custom-trace"}},u={},m=[{value:"Project Setup",id:"project-setup",level:2},{value:"Passive Ability Setup",id:"passive-ability-setup",level:2},{value:"Character Setup",id:"character-setup",level:2},{value:"Interactable Actor",id:"interactable-actor",level:2},{value:"Play",id:"play",level:2}],d={toc:m};function f(e){var t=e.components,c=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"project-setup"},"Project Setup"),(0,i.kt)("p",null,"In order to show a use-case for the custom trace functionality, we will create a new project based on Unreal Engine's ",(0,i.kt)("em",{parentName:"p"},"Top Down Template"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To shorten this guide, you can refer to the ",(0,i.kt)("em",{parentName:"p"},"Quick Start")," guide for initial setup ",(0,i.kt)("a",{parentName:"p",href:"/docs/quick-start/using-passive"},"here"),"."))),(0,i.kt)("h2",{id:"passive-ability-setup"},"Passive Ability Setup"),(0,i.kt)("p",null,"Open your ",(0,i.kt)("em",{parentName:"p"},"Passive Interact")," ability ",(0,i.kt)("em",{parentName:"p"},"Blueprint")," inherited from ",(0,i.kt)("inlineCode",{parentName:"p"},"TBIA_GAInteractPassive"),"."),(0,i.kt)("p",null,"In the ",(0,i.kt)("em",{parentName:"p"},"Class Defaults")," panel, set ",(0,i.kt)("inlineCode",{parentName:"p"},"Trace Start Location Type")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"Custom Trace"),(0,i.kt)(o.h8,{text:"1",mdxType:"Step"})," as shown in the image below."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Passive Ability Custom Trace Passive",src:n(55571).Z,width:"545",height:"738"})),(0,i.kt)("h2",{id:"character-setup"},"Character Setup"),(0,i.kt)("p",null,"Now open your ",(0,i.kt)("em",{parentName:"p"},"Player Character")," class that should be inherited from ",(0,i.kt)("em",{parentName:"p"},"TBIA_GASCharacter"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you are using GASCompanion, ",(0,i.kt)("a",{parentName:"p",href:"/docs/integration_guides/gas-companion"},"this guide")," will help you with integration.\nOr, take a look at ",(0,i.kt)("a",{parentName:"p",href:"/docs/integration_guides/unreal-engine-5-plugins"},"this guide")," which works with UE5 only."))),(0,i.kt)("p",null,"In the ",(0,i.kt)("em",{parentName:"p"},"MyBlueprint")," panel on the left side ",(0,i.kt)(o.h8,{text:"1",mdxType:"Step"}),", search for ",(0,i.kt)("em",{parentName:"p"},"Custom Trace for Interact Passive Ability"),".\nYou can find it under ",(0,i.kt)("inlineCode",{parentName:"p"},"Twisted Bytes | Interaction | Events")," ",(0,i.kt)(o.h8,{text:"2",mdxType:"Step"}),".\nRight-click on the function name and select ",(0,i.kt)("em",{parentName:"p"},"Implement Event")," ",(0,i.kt)(o.h8,{text:"3",mdxType:"Step"}),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Character Setup Custom Trace",src:n(96385).Z,width:"1920",height:"1040"})),(0,i.kt)("p",null,"A new ",(0,i.kt)("em",{parentName:"p"},"Blueprint")," graph will open to implement the custom logic for this function."),(0,i.kt)("p",null,"In this example we will trace for ",(0,i.kt)("em",{parentName:"p"},"Interactable Actors")," under the player's cursor by querying the object type ",(0,i.kt)("inlineCode",{parentName:"p"},"Interactable"),"."),(0,i.kt)("p",null,"The function ",(0,i.kt)("em",{parentName:"p"},"Get Hit Result Under Cursor for Objects")," returns us a ",(0,i.kt)("em",{parentName:"p"},"Hit Result")," that we want to return at the end of our function.\nWe also need to return a boolean value whether this object is currently available for interaction or not. In order to get this\ninformation we make use of the handy function ",(0,i.kt)("em",{parentName:"p"},"Is Available for Interaction"),"."),(0,i.kt)("p",null,"The completed logic in ",(0,i.kt)("em",{parentName:"p"},"Blueprints")," is shown in the image below."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Character Setup Cursor Trace Passive",src:n(67276).Z,width:"1920",height:"1040"})),(0,i.kt)("h2",{id:"interactable-actor"},"Interactable Actor"),(0,i.kt)("p",null,"Here we will use ",(0,i.kt)("em",{parentName:"p"},"BP_ShieldCell_item")," from our ",(0,i.kt)("a",{parentName:"p",href:"https://drive.google.com/drive/folders/1I7TXOPM-9tHABdhWqy58TAR6-lenSy1E?usp=sharing"},"demo project"),"\nwhich is inherited from ",(0,i.kt)("inlineCode",{parentName:"p"},"TBIA_GASActorBase"),". Just place a couple of these ",(0,i.kt)("em",{parentName:"p"},"Actors")," in your level to test interactions."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Interactable Actor Setup",src:n(54673).Z,width:"1920",height:"1040"})),(0,i.kt)("h2",{id:"play"},"Play"),(0,i.kt)("p",null,"Click on ",(0,i.kt)("em",{parentName:"p"},"Play")," and hover your mouse over the ",(0,i.kt)("em",{parentName:"p"},"Interactable Actors")," in the map."),(0,i.kt)("p",null,"You will see that the custom trace implementation works as intended."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Play",src:n(76515).Z,width:"893",height:"743"})))}f.isMDXComponent=!0},55571:function(e,t,n){t.Z=n.p+"assets/images/01_ability_passive-4493a667c61cc53260e512d04138925f.png"},96385:function(e,t,n){t.Z=n.p+"assets/images/02_custom_trace_passive-99bb2174525b592317ae3b8af4ae5fb5.png"},67276:function(e,t,n){t.Z=n.p+"assets/images/03_cursor_trace_passive-6ed5ecacdf83a84cec52b6e141ef3b9d.png"},54673:function(e,t,n){t.Z=n.p+"assets/images/04_place_in_level-bc4c2d826b1294d1ac6eaa37b596e687.png"},76515:function(e,t,n){t.Z=n.p+"assets/images/05_play_passive-0842136acd7e4ba1d6c504a24e6ee5f5.png"}}]);