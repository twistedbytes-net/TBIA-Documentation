"use strict";(self.webpackChunktbia_documentation=self.webpackChunktbia_documentation||[]).push([[709],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,p=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||p;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=n.length,r=new Array(p);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var l=2;l<p;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4887:function(e,t,n){n.d(t,{UE:function(){return r},h8:function(){return i},qh:function(){return s},y$:function(){return p}});n(87462),n(63366),n(67294);var a=n(3905),i=function(e){e.children;var t=e.text;return(0,a.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},t)},p=function(e){var t=e.children;return(0,a.kt)("span",{style:{color:"#faa"}},t)};function r(e){e.children;var t=e.version,n="#ffffff";return(0,a.kt)("span",{style:{backgroundColor:"#414141",color:n,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},t)}function o(e,t,n,i){return(0,a.kt)("div",{style:{backgroundColor:i,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}var s=function(e){e.children;return o(0,"Released","#afa","#181")}},37600:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(87462),i=n(63366),p=(n(67294),n(3905)),r=n(4887),o=["components"],s={sidebar_position:1,title:"Using Enhanced Input"},l=void 0,c={unversionedId:"features/using-enhanced-input",id:"version-1.6.0/features/using-enhanced-input",title:"Using Enhanced Input",description:"The Enhanced Input plugin provides a new and more flexible input framework. It implements features like chorded actions,",source:"@site/versioned_docs/version-1.6.0/features/using-enhanced-input.mdx",sourceDirName:"features",slug:"/features/using-enhanced-input",permalink:"/TBIA-Documentation/docs/1.6.0/features/using-enhanced-input",draft:!1,editUrl:"https://github.com/twistedbytes-net/TBIA-Documentation/edit/master/versioned_docs/version-1.6.0/features/using-enhanced-input.mdx",tags:[],version:"1.6.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Using Enhanced Input"},sidebar:"tutorialSidebar",previous:{title:"Object Interaction Timed",permalink:"/TBIA-Documentation/docs/1.6.0/architecture/object-interaction-timed"},next:{title:"Using Proximity Interactions",permalink:"/TBIA-Documentation/docs/1.6.0/features/proximity-interactions"}},d={},u=[{value:"Regular Implementation",id:"regular-implementation",level:2},{value:"Enabling Enhanced Input in your Project",id:"enabling-enhanced-input-in-your-project",level:3},{value:"Creating Enhanced Input data assets",id:"creating-enhanced-input-data-assets",level:3},{value:"Setup Enhanced Input data assets",id:"setup-enhanced-input-data-assets",level:3},{value:"Creating GAS Enhanced Input data asset",id:"creating-gas-enhanced-input-data-asset",level:3},{value:"Setup GAS Enhanced Input data asset",id:"setup-gas-enhanced-input-data-asset",level:3},{value:"Setup Player Character",id:"setup-player-character",level:3},{value:"Custom Implementation",id:"custom-implementation",level:2},{value:"Setup Custom Abilities",id:"setup-custom-abilities",level:3}],m={toc:u};function h(e){var t=e.components,s=(0,i.Z)(e,o);return(0,p.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Only available for Unreal Engine: ",(0,p.kt)(r.UE,{version:"4.27",mdxType:"UE"})," ",(0,p.kt)(r.UE,{version:"5.0+",mdxType:"UE"}))),(0,p.kt)("div",{parentName:"div",className:"admonition-content"})),(0,p.kt)("p",null,"The Enhanced Input plugin provides a new and more flexible input framework. It implements features like ",(0,p.kt)("em",{parentName:"p"},"chorded actions"),",\n",(0,p.kt)("em",{parentName:"p"},"contextual input"),", ",(0,p.kt)("em",{parentName:"p"},"radial dead zones"),", etc. Its core design is a data-driven configuration approach and therefore this\npage will guide you through the creation and the setup process of all those required data assets."),(0,p.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"To learn more about the Enhanced Input plugin, please check out the official documentation page ",(0,p.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/5.0/en-US/input/#enhancedinputplugin"},"here"),"."))),(0,p.kt)("h2",{id:"regular-implementation"},"Regular Implementation"),(0,p.kt)("p",null,"In order to use the Enhanced Input plugin together with the ",(0,p.kt)("em",{parentName:"p"},"TwistedBytes Interaction Plugin"),", you simply need to\nfollow the instructions of this subsection."),(0,p.kt)("p",null,"At the end, you will be able to trigger interactions using the Enhanced Input system. Input events will then be passed\nto the ",(0,p.kt)("em",{parentName:"p"},"TwistedBytes Interaction Plugin")," which in turn will activate/cancel the corresponding ",(0,p.kt)("em",{parentName:"p"},"Gameplay Abilities"),"."),(0,p.kt)("h3",{id:"enabling-enhanced-input-in-your-project"},"Enabling Enhanced Input in your Project"),(0,p.kt)("p",null,"In order to enable Enhanced Input you need to change two input-related default classes in your project settings."),(0,p.kt)("p",null,"Go to ",(0,p.kt)("inlineCode",{parentName:"p"},"Project Settings | Engine | Input")," ",(0,p.kt)(r.h8,{text:"1",mdxType:"Step"})," and select the following classes from the corresponding dropdown menu:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Default Player Input Class: ",(0,p.kt)("inlineCode",{parentName:"li"},"EnhancedPlayerInput")," ",(0,p.kt)(r.h8,{text:"2",mdxType:"Step"})),(0,p.kt)("li",{parentName:"ul"},"Default Input Component Class: ",(0,p.kt)("inlineCode",{parentName:"li"},"TBIA_EnhancedInputComponent")," ",(0,p.kt)(r.h8,{text:"3",mdxType:"Step"}))),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"Project settings using enhanced input",src:n(20258).Z,width:"1920",height:"1040"})),(0,p.kt)("h3",{id:"creating-enhanced-input-data-assets"},"Creating Enhanced Input data assets"),(0,p.kt)("p",null,"Next, we need to create two new data assets; a so-called ",(0,p.kt)("em",{parentName:"p"},"Input Mapping Context")," and at least one ",(0,p.kt)("em",{parentName:"p"},"Input Action"),".\nYou can think of the ",(0,p.kt)("em",{parentName:"p"},"Input Mapping Context"),' as "glue" that allows you to bind physical inputs (i.e. keyboard keys,\nmouse/gamepad buttons) to specific ',(0,p.kt)("em",{parentName:"p"},"Input Action")," data assets that should be triggered whenever a physical input is\npressed or released."),(0,p.kt)("p",null,"To create an ",(0,p.kt)("em",{parentName:"p"},"Input Mapping Context"),", right-click in the ",(0,p.kt)("em",{parentName:"p"},"Content Browser")," and\nselect ",(0,p.kt)("inlineCode",{parentName:"p"},"Input | Input Mapping Context")," ",(0,p.kt)(r.h8,{text:"1",mdxType:"Step"}),"."),(0,p.kt)("p",null,"Name this newly created asset ",(0,p.kt)("inlineCode",{parentName:"p"},"InputMappingContext"),"."),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"Create Input Mapping Context",src:n(31655).Z,width:"805",height:"927"})),(0,p.kt)("p",null,"Then, to also create a new ",(0,p.kt)("em",{parentName:"p"},"Input Action"),", right-click in the ",(0,p.kt)("em",{parentName:"p"},"Content Browser")," and\nselect ",(0,p.kt)("inlineCode",{parentName:"p"},"Input | Input Action")," ",(0,p.kt)(r.h8,{text:"1",mdxType:"Step"}),"."),(0,p.kt)("p",null,"Name this newly created asset ",(0,p.kt)("inlineCode",{parentName:"p"},"IA_InteractActive")," so that it reflects the\nintended purpose in its asset name accordingly."),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"Create Input Action",src:n(34163).Z,width:"815",height:"921"})),(0,p.kt)("h3",{id:"setup-enhanced-input-data-assets"},"Setup Enhanced Input data assets"),(0,p.kt)("p",null,"Open the ",(0,p.kt)("em",{parentName:"p"},"Input Action")," you created earlier and add a trigger. Set it to ",(0,p.kt)("em",{parentName:"p"},"Down")," ",(0,p.kt)(r.h8,{text:"1",mdxType:"Step"}),"."),(0,p.kt)("p",null,"Also make sure the ",(0,p.kt)("em",{parentName:"p"},"Actuation Threshold")," is equal to ",(0,p.kt)("em",{parentName:"p"},"zero")," ",(0,p.kt)(r.h8,{text:"2",mdxType:"Step"}),"."),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"Setup Input Action",src:n(161).Z,width:"979",height:"481"})),(0,p.kt)("p",null,"Now, open the ",(0,p.kt)("em",{parentName:"p"},"Input Mapping Context")," data asset ",(0,p.kt)("inlineCode",{parentName:"p"},"InputMappingContext")," you created earlier and add a new action mapping\nby clicking on ",(0,p.kt)("em",{parentName:"p"},"+")," ",(0,p.kt)(r.h8,{text:"1",mdxType:"Step"}),"."),(0,p.kt)("p",null,"Set ",(0,p.kt)("inlineCode",{parentName:"p"},"IA_InteractActive")," as the ",(0,p.kt)("em",{parentName:"p"},"Input Action")," ",(0,p.kt)(r.h8,{text:"2",mdxType:"Step"})," for the new entry."),(0,p.kt)("p",null,"After that you need to bind the ",(0,p.kt)("em",{parentName:"p"},"Input Action")," to a physical input ",(0,p.kt)(r.h8,{text:"3",mdxType:"Step"}),", e.g. the ",(0,p.kt)("inlineCode",{parentName:"p"},"E")," key on your keyboard,\nas shown in the image below."),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"Setup Input Mapping Context",src:n(81394).Z,width:"820",height:"418"})),(0,p.kt)("h3",{id:"creating-gas-enhanced-input-data-asset"},"Creating GAS Enhanced Input data asset"),(0,p.kt)("p",null,"Now that we have finished the initial Enhanced Input setup, we need to also prepare one more data asset, a so-called\n",(0,p.kt)("em",{parentName:"p"},"GAS Enhanced Input Mapping"),", that enables us to connect the ",(0,p.kt)("em",{parentName:"p"},"Enhanced Input")," system with ",(0,p.kt)("em",{parentName:"p"},"Gameplay Abilities")," from\nthe ",(0,p.kt)("em",{parentName:"p"},"TwistedBytes Interaction Plugin"),"."),(0,p.kt)("p",null,"To create a ",(0,p.kt)("em",{parentName:"p"},"GAS Enhanced Input Mapping"),", right-click in the ",(0,p.kt)("em",{parentName:"p"},"Content Browser")," and\nselect ",(0,p.kt)("inlineCode",{parentName:"p"},"TwistedBytes | Data Assets | GAS Enhanced Input Mapping")," ",(0,p.kt)(r.h8,{text:"1",mdxType:"Step"}),"."),(0,p.kt)("p",null,"Name this newly created asset ",(0,p.kt)("inlineCode",{parentName:"p"},"GASEnhancedInputMapping"),"."),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"Create GAS Enhanced Input Mapping",src:n(97754).Z,width:"1144",height:"922"})),(0,p.kt)("h3",{id:"setup-gas-enhanced-input-data-asset"},"Setup GAS Enhanced Input data asset"),(0,p.kt)("p",null,"Now, open the ",(0,p.kt)("em",{parentName:"p"},"GAS Enhanced Input Mapping")," data asset ",(0,p.kt)("inlineCode",{parentName:"p"},"GASEnhancedInputMapping"),"."),(0,p.kt)("p",null,"Set the ",(0,p.kt)("em",{parentName:"p"},"Input Mapping Context")," to the ",(0,p.kt)("inlineCode",{parentName:"p"},"InputMappingContext")," data asset ",(0,p.kt)(r.h8,{text:"1",mdxType:"Step"})," that was created earlier.\nOptionally, adjust the ",(0,p.kt)("em",{parentName:"p"},"Input Mapping Context Priority")," ",(0,p.kt)(r.h8,{text:"2",mdxType:"Step"})," to your needs in case you are using multiple input mappings."),(0,p.kt)("p",null,"Then, click on ",(0,p.kt)("em",{parentName:"p"},"+")," to add a new ",(0,p.kt)("em",{parentName:"p"},"Ability Mapping")," entry and set all variables as follows:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Input Action: ",(0,p.kt)("inlineCode",{parentName:"li"},"IA_InteractActive")," ",(0,p.kt)(r.h8,{text:"3",mdxType:"Step"})),(0,p.kt)("li",{parentName:"ul"},"Input Tag: ",(0,p.kt)("inlineCode",{parentName:"li"},"TBIA.Input.Interaction.InteractActive")," ",(0,p.kt)(r.h8,{text:"4",mdxType:"Step"})," (See ",(0,p.kt)("a",{parentName:"li",href:"/docs/getting-started/migration-guide#add-gameplay-tags"},"this")," if this tag does not exist in your project)"),(0,p.kt)("li",{parentName:"ul"},"Gameplay Ability: ",(0,p.kt)("inlineCode",{parentName:"li"},"InteractActive")," ",(0,p.kt)(r.h8,{text:"5",mdxType:"Step"})," (See ",(0,p.kt)("a",{parentName:"li",href:"/docs/quick-start/using-active"},"this")," if you haven't created it yet)")),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"Setup GAS Enhanced Input Mapping",src:n(79397).Z,width:"1713",height:"1054"})),(0,p.kt)("h3",{id:"setup-player-character"},"Setup Player Character"),(0,p.kt)("p",null,"Open your ",(0,p.kt)("em",{parentName:"p"},"Player Character")," Blueprint (e.g. ",(0,p.kt)("inlineCode",{parentName:"p"},"BP_PlayerCharacter"),") and select the ",(0,p.kt)("inlineCode",{parentName:"p"},"TBIA_Interaction"),"\ncomponent ",(0,p.kt)(r.h8,{text:"1",mdxType:"Step"})," in the ",(0,p.kt)("em",{parentName:"p"},"Components")," panel."),(0,p.kt)("p",null,"In the ",(0,p.kt)("em",{parentName:"p"},"Details")," panel under ",(0,p.kt)("inlineCode",{parentName:"p"},"TwistedBytes | Interaction | Config"),", set the following properties:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Input Consumer: ",(0,p.kt)("inlineCode",{parentName:"li"},"TBIA Enhanced Input Component")," ",(0,p.kt)(r.h8,{text:"2",mdxType:"Step"})),(0,p.kt)("li",{parentName:"ul"},"Enhanced Input Mapping DA: ",(0,p.kt)("inlineCode",{parentName:"li"},"GAS Enhanced Input Mapping")," ",(0,p.kt)(r.h8,{text:"3",mdxType:"Step"}))),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"Setup Player Character",src:n(75901).Z,width:"1918",height:"1012"})),(0,p.kt)("h2",{id:"custom-implementation"},"Custom Implementation"),(0,p.kt)("h3",{id:"setup-custom-abilities"},"Setup Custom Abilities"),(0,p.kt)("p",null,"In order to add more Gameplay Abilities, you can simply add additional entries to the ",(0,p.kt)("em",{parentName:"p"},"GAS Enhanced Input Mapping"),".\nEach new entry requires to specify its own ",(0,p.kt)("em",{parentName:"p"},"Input Action")," (e.g. ",(0,p.kt)("inlineCode",{parentName:"p"},"IA_Run"),"), a ",(0,p.kt)("em",{parentName:"p"},"Gameplay Tag"),", and a\n",(0,p.kt)("em",{parentName:"p"},"Gameplay Ability")," (e.g. ",(0,p.kt)("inlineCode",{parentName:"p"},"GA_Run"),")."),(0,p.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"The ",(0,p.kt)("inlineCode",{parentName:"p"},"InteractActive")," ",(0,p.kt)("em",{parentName:"p"},"Gameplay Ability")," already has the ",(0,p.kt)("em",{parentName:"p"},"Gameplay Tag")," ",(0,p.kt)("inlineCode",{parentName:"p"},"TBIA.Input.Interaction.InteractActive")," added\nto its ",(0,p.kt)("em",{parentName:"p"},"Ability Tags")," property. This is the same tag we are referring to in the\n",(0,p.kt)("em",{parentName:"p"},"GAS Enhanced Input Mapping")," ",(0,p.kt)(r.h8,{text:"2",mdxType:"Step"}),"."))),(0,p.kt)("p",null,"You want to create a new ",(0,p.kt)("em",{parentName:"p"},"Gameplay Tag")," (in this example: ",(0,p.kt)("inlineCode",{parentName:"p"},"TBIA_Demo.Input.Ability.Run"),") for each ability which then needs to be set in two locations:"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("em",{parentName:"li"},"Input Tag")," in the ",(0,p.kt)("em",{parentName:"li"},"GAS Enhanced Input Mapping")," entry ",(0,p.kt)(r.h8,{text:"2",mdxType:"Step"})),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("em",{parentName:"li"},"Ability Tags")," in the ",(0,p.kt)("em",{parentName:"li"},"Gameplay Ability")," ",(0,p.kt)(r.h8,{text:"3",mdxType:"Step"}))),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"Setup Custom Abilities",src:n(17817).Z,width:"1247",height:"708"})))}h.isMDXComponent=!0},20258:function(e,t,n){t.Z=n.p+"assets/images/01_project_settings-f33d7ecfed90c45263b10bb2c56f5c7c.png"},31655:function(e,t,n){t.Z=n.p+"assets/images/02_mapping_context-a7fd5893c58193beda5fd667d3b0ce6b.png"},34163:function(e,t,n){t.Z=n.p+"assets/images/03_input_action-7635f1d44b965d7150fc66c7e09e4f27.png"},97754:function(e,t,n){t.Z=n.p+"assets/images/04_create_enhanced_asset-092e243ae05421653f9970c2c39290a7.png"},161:function(e,t,n){t.Z=n.p+"assets/images/05a_setup_input_action-fa3b2f8ea69ac26537cc38be823cd327.png"},81394:function(e,t,n){t.Z=n.p+"assets/images/05a_setup_input_mapping-fe165df69f50684299ba870fcf9527f2.png"},79397:function(e,t,n){t.Z=n.p+"assets/images/05b_setup_enhanced_asset-5535d5dc4ed93cea1510f7ac7dec67bf.png"},75901:function(e,t,n){t.Z=n.p+"assets/images/06_select_asset-3859c9f6db6ef01a64d2d086ffade062.png"},17817:function(e,t,n){t.Z=n.p+"assets/images/07_Input_tags-a3b9c3c7abaf55c01cfc030df9eef88a.png"}}]);