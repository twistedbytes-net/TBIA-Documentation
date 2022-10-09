"use strict";(self.webpackChunktbia_documentation=self.webpackChunktbia_documentation||[]).push([[9427],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4887:function(e,t,n){n.d(t,{UE:function(){return o},h8:function(){return i},qh:function(){return p},y$:function(){return r}});n(87462),n(63366),n(67294);var a=n(3905),i=function(e){e.children;var t=e.text;return(0,a.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},t)},r=function(e){var t=e.children;return(0,a.kt)("span",{style:{color:"#faa"}},t)};function o(e){e.children;var t=e.version,n="#ffffff";return(0,a.kt)("span",{style:{backgroundColor:"#414141",color:n,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},t)}function l(e,t,n,i){return(0,a.kt)("div",{style:{backgroundColor:i,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}var p=function(e){e.children;return l(0,"Released","#afa","#181")}},45271:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=n(4887),l=["components"],p={sidebar_position:1,title:"Unreal Engine 4 Plugins"},s=void 0,c={unversionedId:"integration_guides/unreal-engine-4-plugins",id:"version-1.1.1/integration_guides/unreal-engine-4-plugins",title:"Unreal Engine 4 Plugins",description:"This guide is meant to be a general integration guide that you can use as reference when integrating any plugin from the",source:"@site/versioned_docs/version-1.1.1/integration_guides/unreal-engine-4-plugins.mdx",sourceDirName:"integration_guides",slug:"/integration_guides/unreal-engine-4-plugins",permalink:"/TBIA-Documentation/docs/1.1.1/integration_guides/unreal-engine-4-plugins",draft:!1,editUrl:"https://github.com/twistedbytes-net/TBIA-Documentation/edit/master/versioned_docs/version-1.1.1/integration_guides/unreal-engine-4-plugins.mdx",tags:[],version:"1.1.1",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Unreal Engine 4 Plugins"},sidebar:"tutorialSidebar",previous:{title:"Using Enhanced Input",permalink:"/TBIA-Documentation/docs/1.1.1/features/using-enhanced-input"},next:{title:"Unreal Engine 5 Plugins",permalink:"/TBIA-Documentation/docs/1.1.1/integration_guides/unreal-engine-5-plugins"}},d={},m=[{value:"Requirements",id:"requirements",level:2},{value:"Adding Engine Plugins to a Project",id:"adding-engine-plugins-to-a-project",level:2},{value:"Create Custom Character Class",id:"create-custom-character-class",level:2},{value:"Modifying Project Files",id:"modifying-project-files",level:2},{value:"Modifying Project&#39;s Build.cs File",id:"modifying-projects-buildcs-file",level:3},{value:"Modifying MyAGRCharacter Header File",id:"modifying-myagrcharacter-header-file",level:3},{value:"Modifying MyAGRCharacter CPP File",id:"modifying-myagrcharacter-cpp-file",level:3},{value:"Setting up the Player Character",id:"setting-up-the-player-character",level:2}],u={toc:m};function h(e){var t=e.components,p=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Only available for Unreal Engine: ",(0,r.kt)(o.UE,{version:"4.26",mdxType:"UE"})," ",(0,r.kt)(o.UE,{version:"4.27",mdxType:"UE"}))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This guide is meant to be a general integration guide that you can use as reference when integrating any plugin from the\nUnreal Engine Marketplace which are mainly non-GAS-based plugins."))),(0,r.kt)("p",null,"As an example, this integration guide will show you how to integrate a free plugin called\n",(0,r.kt)("a",{parentName:"p",href:"https://www.unrealengine.com/marketplace/en-US/product/agr-pro"},"AGR PRO")," with the\n",(0,r.kt)("em",{parentName:"p"},"TwistedBytes Interaction System"),", so that you can use both in combination in your own projects."),(0,r.kt)("p",null,"All steps described here should be applicable to other non-GAS-based plugins."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://visualstudio.microsoft.com/"},"Microsoft Visual Studio C/C++ IDE and Compiler")," (",(0,r.kt)("em",{parentName:"li"},"Free Community Edition 2019 is sufficient"),")"),(0,r.kt)("li",{parentName:"ul"},"Unreal project must be based on Unreal Engine 4.26 or 4.27")),(0,r.kt)("h2",{id:"adding-engine-plugins-to-a-project"},"Adding Engine Plugins to a Project"),(0,r.kt)("p",null,"To get started, go to your project's folder. Create a new folder called ",(0,r.kt)("inlineCode",{parentName:"p"},"Plugins")," in case it does not exist yet ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"}),"."),(0,r.kt)("p",null,"Copy both plugin folders ",(0,r.kt)("inlineCode",{parentName:"p"},"AGRPRO")," ",(0,r.kt)(o.h8,{text:"2",mdxType:"Step"})," and ",(0,r.kt)("inlineCode",{parentName:"p"},"TBInteractionSystem")," ",(0,r.kt)(o.h8,{text:"3",mdxType:"Step"})," from the ",(0,r.kt)("em",{parentName:"p"},"Engine Plugin")," folder to your project's ",(0,r.kt)("inlineCode",{parentName:"p"},"Plugins")," folder."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The default location of the engine plugin folder for Unreal Engine 4.26 is:"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\Epic Games\\UE_4.26\\Engine\\Plugins\\Marketplace")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Plugins Folder",src:n(72772).Z,width:"1017",height:"803"})),(0,r.kt)("p",null,"In your project, navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"Edit | Plugins")," to open the ",(0,r.kt)("em",{parentName:"p"},"Plugins")," tab."),(0,r.kt)("p",null,"Make sure that both ",(0,r.kt)("inlineCode",{parentName:"p"},"AGR PRO")," ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"})," and ",(0,r.kt)("inlineCode",{parentName:"p"},"TwistedBytes Interaction System")," ",(0,r.kt)(o.h8,{text:"2",mdxType:"Step"})," show up and are enabled."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Enable Plugins",src:n(26027).Z,width:"1579",height:"809"})),(0,r.kt)("h2",{id:"create-custom-character-class"},"Create Custom Character Class"),(0,r.kt)("p",null,"To create your custom character class navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"File | New C++ Class...")," ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"})," in the ",(0,r.kt)("em",{parentName:"p"},"Unreal Engine Editor"),"."),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Add C++ Class")," dialog, click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Show all Classes")," ",(0,r.kt)(o.h8,{text:"2",mdxType:"Step"})," then in the search dialog look for ",(0,r.kt)("inlineCode",{parentName:"p"},"AGRCharacter")," and\nselect it ",(0,r.kt)(o.h8,{text:"3",mdxType:"Step"})," and click next ",(0,r.kt)(o.h8,{text:"4",mdxType:"Step"}),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create C++ File",src:n(6098).Z,width:"1920",height:"1040"})),(0,r.kt)("p",null,"In the next page you can name your class ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"}),". In our case let's name it ",(0,r.kt)("inlineCode",{parentName:"p"},"MyAGRCharacter"),"."),(0,r.kt)("p",null,"Lastly, click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Create class")," ",(0,r.kt)(o.h8,{text:"2",mdxType:"Step"}),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create C++ File",src:n(19748).Z,width:"947",height:"571"})),(0,r.kt)("p",null,"Wait for the ",(0,r.kt)("em",{parentName:"p"},"Editor")," to create and compile all source files needed before proceeding."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The process described above is a quick way to create a new and valid C++ module that in fact turns any\n",(0,r.kt)("em",{parentName:"p"},"Blueprints-only Project")," into a ",(0,r.kt)("em",{parentName:"p"},"C++ Project"),"."))),(0,r.kt)("h2",{id:"modifying-project-files"},"Modifying Project Files"),(0,r.kt)("p",null,"The next steps describe how to modify the project C++ files, so that it knows about ",(0,r.kt)("inlineCode",{parentName:"p"},"AGRPRO")," plugin, ",(0,r.kt)("inlineCode",{parentName:"p"},"TwistedBytesInteractionSystem")," plugin,\n",(0,r.kt)("inlineCode",{parentName:"p"},"GamePlayAbilities")," and their base classes to seamlessly integrate them with each other."),(0,r.kt)("p",null,"In Windows Explorer, navigate to your project's root folder. You should see a new file with the file extension ",(0,r.kt)("inlineCode",{parentName:"p"},".sln"),"."),(0,r.kt)("p",null,"Double-click this ",(0,r.kt)("em",{parentName:"p"},"Solution")," file ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"})," to open it in your favorite IDE (e.g. ",(0,r.kt)("em",{parentName:"p"},"Microsoft Visual Studio")," or ",(0,r.kt)("em",{parentName:"p"},"JetBrains Rider"),")."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Open Solution File",src:n(21557).Z,width:"624",height:"308"})),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The initial startup will take some time. Might be a good time to grab a \u2615 ..."))),(0,r.kt)("h3",{id:"modifying-projects-buildcs-file"},"Modifying Project's Build.cs File"),(0,r.kt)("p",null,"Next, navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Games>/<Project Name>/Source/")," and open the file ",(0,r.kt)("inlineCode",{parentName:"p"},"<Project Name>.Build.cs")," ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"}),"."),(0,r.kt)("p",null,"Under ",(0,r.kt)("em",{parentName:"p"},"PublicDependencyModuleNames")," ",(0,r.kt)(o.h8,{text:"2",mdxType:"Step"})," add :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AGRPRO")," ",(0,r.kt)(o.h8,{text:"3",mdxType:"Step"})," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TBIA_Runtime")," ",(0,r.kt)(o.h8,{text:"4",mdxType:"Step"})," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GameplayAbilities"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"GameplayTags"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"GameplayTasks")," ",(0,r.kt)(o.h8,{text:"5",mdxType:"Step"}),".")),(0,r.kt)("p",null,"Click on ",(0,r.kt)("em",{parentName:"p"},"Build Solution")," ",(0,r.kt)(o.h8,{text:"6",mdxType:"Step"})," and wait for the project to finish building (it might take a couple of minutes)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add Necessary Modules",src:n(41409).Z,width:"1920",height:"1040"})),(0,r.kt)("h3",{id:"modifying-myagrcharacter-header-file"},"Modifying MyAGRCharacter Header File"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"<Games>/<Project Name>/Source/Public/"),",\nopen the file ",(0,r.kt)("inlineCode",{parentName:"p"},"MyAGRCharacter.h")," ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"}),"."),(0,r.kt)("p",null,"At the top of the file, add the following lines (see ",(0,r.kt)(o.h8,{text:"2",mdxType:"Step"}),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "AbilitySystemInterface.h"\n#include "Interface/TBIA_Interactable.h"\n#include "Component/TBIA_InteractionComponent.h"\n#include "GAS/Component/TBIA_AbilitySystemComponent.h"\n')),(0,r.kt)("p",null,"After this, go to the ",(0,r.kt)("em",{parentName:"p"},"Class Declaration")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"AMyAGRCharacter")," and add these two interfaces ",(0,r.kt)(o.h8,{text:"3",mdxType:"Step"})," as shown in the image below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"public IAbilitySystemInterface, public ITBIA_Interactable\n")),(0,r.kt)("p",null,"Then scroll down and inside ",(0,r.kt)("inlineCode",{parentName:"p"},"AMyAGRCharacter"),", we want add the components ",(0,r.kt)("inlineCode",{parentName:"p"},"TBIA_AbilitySystemComponent")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"TBIA_InteractionComponent"),".\nYou can do that by copying and pasting the code ",(0,r.kt)(o.h8,{text:"4",mdxType:"Step"})," as shown in the image below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'protected:\n    /**\n     * The Ability System Component provided by TwistedBytes Interaction System.\n     */\n    UPROPERTY(VisibleDefaultsOnly, BlueprintReadOnly, Category = "TwistedBytes|Interaction")\n        UTBIA_AbilitySystemComponent* TBIA_AbilitySystemComponent = nullptr;\n\n    /**\n     * The Interaction Component provided by TwistedBytes Interaction System.\n     */\n    UPROPERTY(VisibleDefaultsOnly, BlueprintReadOnly, Category = "TwistedBytes|Interaction")\n        UTBIA_InteractionComponent* TBIA_InteractionComponent = nullptr;\n')),(0,r.kt)("p",null,"And under that we need to add the constructor and also override the inteface function ",(0,r.kt)("inlineCode",{parentName:"p"},"GetAbilitySystemComponent"),"\nwhich is needed to get a reference to the ",(0,r.kt)("em",{parentName:"p"},"Ability System Component")," used by ",(0,r.kt)("em",{parentName:"p"},"GAS"),"."),(0,r.kt)("p",null,"Copy and paste the following code as shown in ",(0,r.kt)(o.h8,{text:"5",mdxType:"Step"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"public:\n    AMyAGRCharacter();\n    //~ IAbilitySystemInterface\n    virtual UAbilitySystemComponent* GetAbilitySystemComponent() const override;\n    //~ IAbilitySystemInterface\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Modifying MyAGRCharacter Header File",src:n(35144).Z,width:"1920",height:"1040"})),(0,r.kt)("h3",{id:"modifying-myagrcharacter-cpp-file"},"Modifying MyAGRCharacter CPP File"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"<Games>/<Project Name>/Source/Private/"),",\nopen the file ",(0,r.kt)("inlineCode",{parentName:"p"},"MyAGRCharacter.cpp")," ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"}),"."),(0,r.kt)("p",null,"At the top of the file, add the following lines (see ",(0,r.kt)(o.h8,{text:"2",mdxType:"Step"}),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "AbilitySystemComponent.h"\n#include "GAS/Component/TBIA_AbilitySystemComponent.h"\n')),(0,r.kt)("p",null,"Under that we want to define the constructor to create the components we declared in the header file. You\ncan do that by adding the following code as shown in ",(0,r.kt)(o.h8,{text:"3",mdxType:"Step"}),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'AMyAGRCharacter::AMyAGRCharacter()\n{\n    PrimaryActorTick.bCanEverTick = true;\n\n    TBIA_InteractionComponent = CreateDefaultSubobject<UTBIA_InteractionComponent>("TBIA_InteractionComponent");\n    TBIA_AbilitySystemComponent = CreateDefaultSubobject<UTBIA_AbilitySystemComponent>("TBIA_AbilitySystemComponent");\n    TBIA_AbilitySystemComponent->SetIsReplicated(true);\n}\n')),(0,r.kt)("p",null,"Then we want to add the implementation for the overridden interface function ",(0,r.kt)("inlineCode",{parentName:"p"},"GetAbilitySystemComponent")," as shown\nbelow in ",(0,r.kt)(o.h8,{text:"4",mdxType:"Step"}),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"UAbilitySystemComponent* AMyAGRCharacter::GetAbilitySystemComponent() const\n{\n    return TBIA_AbilitySystemComponent;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Modifying MyAGRCharacter CPP File",src:n(82914).Z,width:"1920",height:"1040"})),(0,r.kt)("h2",{id:"setting-up-the-player-character"},"Setting up the Player Character"),(0,r.kt)("p",null,"Open your ",(0,r.kt)("em",{parentName:"p"},"Player Character")," Blueprint (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"AGRPRO_Character"),"). As you can see here in our\nexample, we are using ",(0,r.kt)("inlineCode",{parentName:"p"},"AGR Character")," as the parent class."),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Class Settings")," ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"})," and click on ",(0,r.kt)("em",{parentName:"p"},"Parent Class")," ",(0,r.kt)(o.h8,{text:"2",mdxType:"Step"})," select the\n",(0,r.kt)("inlineCode",{parentName:"p"},"MyAGRCharacter")," class ",(0,r.kt)(o.h8,{text:"3",mdxType:"Step"})," like shown in the image below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Player Character Reparent to MyAGRCharacter",src:n(14280).Z,width:"1920",height:"1040"})),(0,r.kt)("p",null,"Finally, you can go to ",(0,r.kt)("inlineCode",{parentName:"p"},"TBIA_InteractionComponent")," ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"})," add your interaction abilities ",(0,r.kt)(o.h8,{text:"2",mdxType:"Step"}),"\nthen setup your input ",(0,r.kt)(o.h8,{text:"3",mdxType:"Step"})," regarding the default input component you're using."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Player Character Interaction Setup",src:n(76231).Z,width:"1920",height:"1040"})),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For more info on how to configure interaction abilities you can start from ",(0,r.kt)("a",{parentName:"p",href:"/docs/quick-start/using-passive"},"here")," "))),(0,r.kt)("p",null,"Finally you can press ",(0,r.kt)("em",{parentName:"p"},"Play")," and test."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Play Test Project",src:n(43094).Z,width:"1275",height:"838"})))}h.isMDXComponent=!0},72772:function(e,t,n){t.Z=n.p+"assets/images/01_Plugins-b6def9c0aa53795f4a45a179b469ecad.png"},26027:function(e,t,n){t.Z=n.p+"assets/images/02_plugin_enabled-b03001d4d255d86c48b9e540663d0065.png"},6098:function(e,t,n){t.Z=n.p+"assets/images/03_create_class-59109011c39fb8399579fde35326c9d2.png"},19748:function(e,t,n){t.Z=n.p+"assets/images/04_create_character-9a21b167ef9098d78ee0b65b96bb954a.png"},21557:function(e,t,n){t.Z=n.p+"assets/images/05a_open_sln-1384a685c9cf2bb0be6e8c4e54870d3c.png"},41409:function(e,t,n){t.Z=n.p+"assets/images/05b_module_dependency-835da2ced1d9fc473678f104e325498e.png"},35144:function(e,t,n){t.Z=n.p+"assets/images/06_character_header-9355f2b088447e3734c3376bda50c97f.png"},82914:function(e,t,n){t.Z=n.p+"assets/images/07_character_cpp-e69c0cd09de33e9559ebe970e8c700eb.png"},14280:function(e,t,n){t.Z=n.p+"assets/images/08_reparent_character-45b9830719353fa1bd25f0025024b102.png"},76231:function(e,t,n){t.Z=n.p+"assets/images/09_config_abilities-5a3c57faac848d32d4988bf054fa90c1.png"},43094:function(e,t,n){t.Z=n.p+"assets/images/10_play-60c770055869a6224c87c7f68ea3aea5.png"}}]);