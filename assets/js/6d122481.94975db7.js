"use strict";(self.webpackChunktbia_documentation=self.webpackChunktbia_documentation||[]).push([[9757],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),u=i,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4887:function(e,t,n){n.d(t,{UE:function(){return r},h8:function(){return i},qh:function(){return l},y$:function(){return o}});n(87462),n(63366),n(67294);var a=n(3905),i=function(e){e.children;var t=e.text;return(0,a.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},t)},o=function(e){var t=e.children;return(0,a.kt)("span",{style:{color:"#faa"}},t)};function r(e){e.children;var t=e.version,n="#ffffff";return(0,a.kt)("span",{style:{backgroundColor:"#414141",color:n,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},t)}function p(e,t,n,i){return(0,a.kt)("div",{style:{backgroundColor:i,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}var l=function(e){e.children;return p(0,"Released","#afa","#181")}},5573:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=n(4887),p=["components"],l={sidebar_position:3,title:"GAS Companion"},s=void 0,d={unversionedId:"integration_guides/gas-companion",id:"version-1.2.0/integration_guides/gas-companion",title:"GAS Companion",description:"This integration guide will show you how to integrate GAS Companion with TwistedBytes Interaction System, so that",source:"@site/versioned_docs/version-1.2.0/integration_guides/gas-companion.mdx",sourceDirName:"integration_guides",slug:"/integration_guides/gas-companion",permalink:"/TBIA-Documentation/docs/1.2.0/integration_guides/gas-companion",draft:!1,editUrl:"https://github.com/twistedbytes-net/TBIA-Documentation/edit/master/versioned_docs/version-1.2.0/integration_guides/gas-companion.mdx",tags:[],version:"1.2.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"GAS Companion"},sidebar:"tutorialSidebar",previous:{title:"Unreal Engine 5 Plugins",permalink:"/TBIA-Documentation/docs/1.2.0/integration_guides/unreal-engine-5-plugins"},next:{title:"FAQ",permalink:"/TBIA-Documentation/docs/1.2.0/faq"}},m={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Adding Engine Plugins to a Project",id:"adding-engine-plugins-to-a-project",level:2},{value:"Convert a Blueprint-only into a C++ Project",id:"convert-a-blueprint-only-into-a-c-project",level:2},{value:"Modifying TwistedBytes Interaction System",id:"modifying-twistedbytes-interaction-system",level:2},{value:"Adding <code>GASCompanion</code> to <code>.uplugin</code>",id:"adding-gascompanion-to-uplugin",level:3},{value:"Modifying <code>TBIA_AbilitySystemComponent</code>",id:"modifying-tbia_abilitysystemcomponent",level:3},{value:"Setting up the Player Character",id:"setting-up-the-player-character",level:2}],u={toc:c};function h(e){var t=e.components,l=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Only available for Unreal Engine: ",(0,o.kt)(r.UE,{version:"5.0+",mdxType:"UE"}))),(0,o.kt)("div",{parentName:"div",className:"admonition-content"})),(0,o.kt)("p",null,"This integration guide will show you how to integrate ",(0,o.kt)("em",{parentName:"p"},"GAS Companion")," with ",(0,o.kt)("em",{parentName:"p"},"TwistedBytes Interaction System"),", so that\nyou can use both in combination in your own projects."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://visualstudio.microsoft.com/"},"Microsoft Visual Studio C/C++ IDE and Compiler")," (",(0,o.kt)("em",{parentName:"li"},"Free Community Edition 2019 is sufficient"),")"),(0,o.kt)("li",{parentName:"ul"},"Unreal project must be based on Unreal Engine 5 or higher")),(0,o.kt)("h2",{id:"adding-engine-plugins-to-a-project"},"Adding Engine Plugins to a Project"),(0,o.kt)("p",null,"To get started, go to your project's folder. Create a new folder called ",(0,o.kt)("inlineCode",{parentName:"p"},"Plugins")," in case it does not exist yet ",(0,o.kt)(r.h8,{text:"1",mdxType:"Step"}),"."),(0,o.kt)("p",null,"Copy both plugin folders ",(0,o.kt)("inlineCode",{parentName:"p"},"GASCompanion")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"TBInteractionSystem")," from the ",(0,o.kt)("em",{parentName:"p"},"Engine Plugin")," folder to your project's ",(0,o.kt)("inlineCode",{parentName:"p"},"Plugins")," folder."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The default location of the engine plugin folder for Unreal Engine 5.0 is:"),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\Epic Games\\UE_5.0\\Engine\\Plugins\\Marketplace")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create Plugins Folder",src:n(79078).Z,width:"647",height:"249"})),(0,o.kt)("p",null,"In your project, navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit | Plugins")," to open the ",(0,o.kt)("em",{parentName:"p"},"Plugins")," tab."),(0,o.kt)("p",null,"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"Gameplay")," as plugin category filter on the left side and make sure that both ",(0,o.kt)("inlineCode",{parentName:"p"},"GAS Companion")," ",(0,o.kt)(r.h8,{text:"2",mdxType:"Step"})," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"TwistedBytes Interaction System")," ",(0,o.kt)(r.h8,{text:"3",mdxType:"Step"})," show up and are enabled."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Enable Plugins",src:n(30361).Z,width:"1920",height:"377"})),(0,o.kt)("h2",{id:"convert-a-blueprint-only-into-a-c-project"},"Convert a Blueprint-only into a C++ Project"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can skip this step if your project is a C++ project already."))),(0,o.kt)("p",null,"In case you started your work on a project with a ",(0,o.kt)("em",{parentName:"p"},"Blueprints-only Project")," you need to first convert it to a\nC++ project before continuing with the next steps."),(0,o.kt)("p",null,"Navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"Tools | New C++ Class...")," ",(0,o.kt)(r.h8,{text:"1",mdxType:"Step"})," in the ",(0,o.kt)("em",{parentName:"p"},"Unreal Engine Editor"),"."),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add C++ Class")," dialog, select ",(0,o.kt)("inlineCode",{parentName:"p"},"None - An empty C++ class")," ",(0,o.kt)(r.h8,{text:"2",mdxType:"Step"})," and confirm by clicking on ",(0,o.kt)("inlineCode",{parentName:"p"},"Create Class")," ",(0,o.kt)(r.h8,{text:"3",mdxType:"Step"}),"."),(0,o.kt)("p",null,"Wait for the ",(0,o.kt)("em",{parentName:"p"},"Editor")," to create and compile all source files needed before proceeding."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create C++ File",src:n(94375).Z,width:"1920",height:"1040"})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The process described above is a quick way to create a new and valid C++ module that in fact turns any\n",(0,o.kt)("em",{parentName:"p"},"Blueprints-only Project")," into a ",(0,o.kt)("em",{parentName:"p"},"C++ Project"),". The new C++ class we created is not actually needed and could now be\ndeleted if you so wish."))),(0,o.kt)("h2",{id:"modifying-twistedbytes-interaction-system"},"Modifying TwistedBytes Interaction System"),(0,o.kt)("p",null,"The next steps describe how to modify the interaction plugin, so that it knows about the GAS Companion plugin and its\nbase classes to seamlessly integrate with each other."),(0,o.kt)("p",null,"In Windows Explorer, navigate to your project's root folder. You should see a new file with the file extension ",(0,o.kt)("inlineCode",{parentName:"p"},".sln"),"."),(0,o.kt)("p",null,"Double-click this ",(0,o.kt)("em",{parentName:"p"},"Solution")," file ",(0,o.kt)(r.h8,{text:"1",mdxType:"Step"})," to open it in your favorite IDE (",(0,o.kt)("em",{parentName:"p"},"Microsoft Visual Studio")," or ",(0,o.kt)("em",{parentName:"p"},"JetBrains Rider"),")."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Open Solution File",src:n(86600).Z,width:"624",height:"308"})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The initial startup will take some time. Might be a good time to grab a \u2615 ..."))),(0,o.kt)("h3",{id:"adding-gascompanion-to-uplugin"},"Adding ",(0,o.kt)("inlineCode",{parentName:"h3"},"GASCompanion")," to ",(0,o.kt)("inlineCode",{parentName:"h3"},".uplugin")),(0,o.kt)("p",null,"After your IDE has fully initialized, navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Games>/<Project Name>/Plugins/TBInteractionSystem")," and open\n",(0,o.kt)("inlineCode",{parentName:"p"},"TwistedBytes_InteractionSystem.uplugin")," ",(0,o.kt)(r.h8,{text:"1",mdxType:"Step"}),"."),(0,o.kt)("p",null,"Add the following JSON object ",(0,o.kt)(r.h8,{text:"2",mdxType:"Step"})," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Plugins")," JSON array as shown in the image below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "Name": "GASCompanion",\n        "Enabled": true,\n        "MarketplaceURL": "com.epicgames.launcher://ue/marketplace/product/d83c6f34c3fb4b7092dde195c37c7413"\n    }\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add GasCompanion To Plugins",src:n(52189).Z,width:"1920",height:"1040"})),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Be careful not to miss a separating comma (",(0,o.kt)("inlineCode",{parentName:"p"},","),") between the existing JSON objects and the newly added one for ",(0,o.kt)("inlineCode",{parentName:"p"},"GASCompanion"),"."))),(0,o.kt)("h3",{id:"modifying-tbia_abilitysystemcomponent"},"Modifying ",(0,o.kt)("inlineCode",{parentName:"h3"},"TBIA_AbilitySystemComponent")),(0,o.kt)("p",null,"Next, navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Games>/<Project Name>/Plugins/TBInteractionSystem/Source/TBIA_Runtime")," and open the file\n",(0,o.kt)("inlineCode",{parentName:"p"},"TBIA_Runtime.Build.cs")," ",(0,o.kt)(r.h8,{text:"1",mdxType:"Step"}),"."),(0,o.kt)("p",null,"Under ",(0,o.kt)("em",{parentName:"p"},"PublicDependencyModuleNames")," ",(0,o.kt)(r.h8,{text:"2",mdxType:"Step"})," add ",(0,o.kt)("inlineCode",{parentName:"p"},"GASCompanion")," ",(0,o.kt)(r.h8,{text:"3",mdxType:"Step"}),"."),(0,o.kt)("p",null,"Click on ",(0,o.kt)("em",{parentName:"p"},"Build Solution")," ",(0,o.kt)(r.h8,{text:"4",mdxType:"Step"})," and wait for the project to finish building (it might take a couple of minutes)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add GasCompanion Module",src:n(28427).Z,width:"1920",height:"1040"})),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"<Games>/<Project Name>/TBInteractionSystem/Source/TBIA_Runtime/Public/GAS/Component"),",\nopen the file ",(0,o.kt)("inlineCode",{parentName:"p"},"TBIA_AbilitySystemComponent.h")," ",(0,o.kt)(r.h8,{text:"1",mdxType:"Step"}),"."),(0,o.kt)("p",null,"At the top of the file, comment (or remove) the following line (see ",(0,o.kt)(r.h8,{text:"2",mdxType:"Step"}),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "AbilitySystemComponent.h"\n')),(0,o.kt)("p",null,"Then, add a new line directly under the previous line (see ",(0,o.kt)(r.h8,{text:"3",mdxType:"Step"}),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "Abilities/GSCAbilitySystemComponent.h"\n')),(0,o.kt)("p",null,"After this, scroll down to the ",(0,o.kt)("em",{parentName:"p"},"Class Declaration")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"UTBIA_AbilitySystemComponent")," and reparent it from\n",(0,o.kt)("inlineCode",{parentName:"p"},"UAbilitySystemComponent")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"UGSCAbilitySystemComponent")," ",(0,o.kt)(r.h8,{text:"4",mdxType:"Step"})," as shown in the image below."),(0,o.kt)("p",null,"Then build the solution again and wait till it finishes building."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Reparent ASC To GASCompanion&#39;s ASC",src:n(51748).Z,width:"1920",height:"1040"})),(0,o.kt)("h2",{id:"setting-up-the-player-character"},"Setting up the Player Character"),(0,o.kt)("p",null,"Open your ",(0,o.kt)("em",{parentName:"p"},"Player Character")," Blueprint (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"BP_PlayerCharacter"),") that you are using. As you can see here in our\nexample, we are using ",(0,o.kt)("inlineCode",{parentName:"p"},"GSCModular Character")," ",(0,o.kt)(r.h8,{text:"1",mdxType:"Step"})," as the parent class."),(0,o.kt)("p",null,"Go to the ",(0,o.kt)("em",{parentName:"p"},"Components")," tab and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Ability System Component")," ",(0,o.kt)(r.h8,{text:"2",mdxType:"Step"}),". In the ",(0,o.kt)("em",{parentName:"p"},"Details")," panel, click on\n",(0,o.kt)("em",{parentName:"p"},"Component Class")," ",(0,o.kt)(r.h8,{text:"3",mdxType:"Step"})," and select ",(0,o.kt)("inlineCode",{parentName:"p"},"TBIA_AbilitySystemComponent")," ",(0,o.kt)(r.h8,{text:"4",mdxType:"Step"}),"."),(0,o.kt)("p",null,"Finally, compile and save the Blueprint."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Player Character ASC Setup",src:n(26587).Z,width:"1928",height:"1048"})),(0,o.kt)("p",null,"Now, to add the interaction functionality to the ",(0,o.kt)("em",{parentName:"p"},"Player Character"),", click on ",(0,o.kt)("em",{parentName:"p"},"Add")," ",(0,o.kt)(r.h8,{text:"1",mdxType:"Step"})," in the\n",(0,o.kt)("em",{parentName:"p"},"Components")," tab and select the ",(0,o.kt)("inlineCode",{parentName:"p"},"TBIA_Interaction")," component ",(0,o.kt)(r.h8,{text:"2",mdxType:"Step"}),"."),(0,o.kt)("p",null,"Switch to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Class Settings")," and scroll down to the ",(0,o.kt)("em",{parentName:"p"},"Interfaces")," category. Click on ",(0,o.kt)("em",{parentName:"p"},"Add")," ",(0,o.kt)(r.h8,{text:"3",mdxType:"Step"})," and\nselect the ",(0,o.kt)("inlineCode",{parentName:"p"},"TBIA_Interactable")," interface. It should now look like it is shown in ",(0,o.kt)(r.h8,{text:"4",mdxType:"Step"}),"."),(0,o.kt)("p",null,"Finally, compile and save the Blueprint."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Player Character Interaction Setup",src:n(15630).Z,width:"1928",height:"1048"})))}h.isMDXComponent=!0},79078:function(e,t,n){t.Z=n.p+"assets/images/01_project_plugin-4f54b1819a45bdc6d93016b51e7537a2.png"},30361:function(e,t,n){t.Z=n.p+"assets/images/02_enable_plugins-ed49c26a4331a95e07bafb00f9ae0e6b.png"},94375:function(e,t,n){t.Z=n.p+"assets/images/03_create_cpp-c8c34f78f02ca2838b2ead134202ec8c.png"},86600:function(e,t,n){t.Z=n.p+"assets/images/03b_open_sln-1384a685c9cf2bb0be6e8c4e54870d3c.png"},52189:function(e,t,n){t.Z=n.p+"assets/images/04_add_module_to_uplugin-4b342929bd3b8b060991634ead385106.png"},28427:function(e,t,n){t.Z=n.p+"assets/images/05_runtime_build_dependency-e0537bdb5df05ae396e455ed75706534.png"},51748:function(e,t,n){t.Z=n.p+"assets/images/06_reparent_class-9a3c0d26a65a706ef62e7f325125c8e7.png"},26587:function(e,t,n){t.Z=n.p+"assets/images/07_component_class-2f25fd1321fca1ede532a5662a7449ab.png"},15630:function(e,t,n){t.Z=n.p+"assets/images/08_add_interaction-81670cf3609c28de4a5108d6baa8cac3.png"}}]);