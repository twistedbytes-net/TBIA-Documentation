"use strict";(self.webpackChunktbia_documentation=self.webpackChunktbia_documentation||[]).push([[814],{4887:function(e,t,n){n.d(t,{UE:function(){return r},h8:function(){return a},qh:function(){return p},y$:function(){return l}});n(87462),n(63366),n(67294);var i=n(3905),a=function(e){e.children;var t=e.text;return(0,i.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},t)},l=function(e){var t=e.children;return(0,i.kt)("span",{style:{color:"#faa"}},t)};function r(e){e.children;var t=e.version,n="#ffffff";return(0,i.kt)("span",{style:{backgroundColor:"#414141",color:n,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},t)}function o(e,t,n,a){return(0,i.kt)("div",{style:{backgroundColor:a,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}var p=function(e){e.children;return o(0,"Released","#afa","#181")}},41590:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return u}});var i=n(87462),a=n(63366),l=(n(67294),n(3905)),r=n(4887),o=n(22004),p=["components"],s={sidebar_position:3,title:"Lyra"},d=void 0,m={unversionedId:"integration_guides/lyra",id:"version-1.5.1/integration_guides/lyra",title:"Lyra",description:"Lyra Screenshot",source:"@site/versioned_docs/version-1.5.1/integration_guides/lyra.mdx",sourceDirName:"integration_guides",slug:"/integration_guides/lyra",permalink:"/TBIA-Documentation/docs/integration_guides/lyra",draft:!1,editUrl:"https://github.com/twistedbytes-net/TBIA-Documentation/edit/master/versioned_docs/version-1.5.1/integration_guides/lyra.mdx",tags:[],version:"1.5.1",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Lyra"},sidebar:"tutorialSidebar",previous:{title:"Unreal Engine 5 Plugins",permalink:"/TBIA-Documentation/docs/integration_guides/unreal-engine-5-plugins"},next:{title:"GAS Companion",permalink:"/TBIA-Documentation/docs/integration_guides/gas-companion"}},c={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Project preparation",id:"project-preparation",level:2},{value:"Modifying the TBIA plugin",id:"modifying-the-tbia-plugin",level:2},{value:"Step 1: <code>TBIA_Runtime.Build.cs</code>",id:"step-1-tbia_runtimebuildcs",level:3},{value:"Step 2: <code>TBIA_GASEngineSubsystem.cpp</code>",id:"step-2-tbia_gasenginesubsystemcpp",level:3},{value:"Step 3: <code>TBIA_AbilitySystemComponent.h</code>",id:"step-3-tbia_abilitysystemcomponenth",level:3},{value:"Step 4: <code>TBIA_GameplayAbility.h</code>",id:"step-4-tbia_gameplayabilityh",level:3},{value:"Preparing Lyra&#39;s Hero Blueprint for usage with TBIA",id:"preparing-lyras-hero-blueprint-for-usage-with-tbia",level:2},{value:"Showcase: Lyra <code>ShooterCore</code> Experience",id:"showcase-lyra-shootercore-experience",level:2},{value:"Video Tutorial",id:"video-tutorial",level:2}],h={toc:u};function k(e){var t=e.components,s=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,i.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Only available for Unreal Engine: ",(0,l.kt)(r.UE,{version:"5.0+",mdxType:"UE"}))),(0,l.kt)("div",{parentName:"div",className:"admonition-content"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Lyra Screenshot",src:n(77033).Z,width:"1920",height:"1080"})),(0,l.kt)("p",null,"This integration guide will show you how to integrate ",(0,l.kt)("em",{parentName:"p"},"Lyra")," with ",(0,l.kt)("em",{parentName:"p"},"TwistedBytes Interaction System"),", so that\nyou can use both in combination in your own projects."),(0,l.kt)("p",null,"We would like to highlight the aim of this integration guide is make the ",(0,l.kt)("strong",{parentName:"p"},"TwistedBytes Interaction")," plugin become\npart of the ",(0,l.kt)("strong",{parentName:"p"},"Lyra")," project and not the other way around."),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Unreal Engine 5.0 or higher"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.unrealengine.com/marketplace/en-US/product/lyra/"},(0,l.kt)("inlineCode",{parentName:"a"},"Lyra Starter Game"))," project or your own project based on it"),(0,l.kt)("li",{parentName:"ul"},"An IDE (e.g. ",(0,l.kt)("a",{parentName:"li",href:"https://visualstudio.microsoft.com/"},"Visual Studio")," or ",(0,l.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/rider/"},"Rider"),")")),(0,l.kt)("h2",{id:"project-preparation"},"Project preparation"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"In this guide, we are going to use ",(0,l.kt)("strong",{parentName:"p"},"Unreal Engine 5.1"),"."),(0,l.kt)("p",{parentName:"div"},"Please adjust mentioned paths accordingly if your project is using a different engine version."))),(0,l.kt)("p",null,"First, copy the installed ",(0,l.kt)("strong",{parentName:"p"},"TwistedBytes Interaction")," plugin from Unreal Engine\n(e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\Epic Games\\UE_5.1\\Engine\\Plugins\\Marketplace\\TBInteractionSystem\\"),") ..."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Engine Plugins",src:n(56891).Z,width:"790",height:"161"})),(0,l.kt)("p",null,"... to your project's ",(0,l.kt)("inlineCode",{parentName:"p"},"Plugins")," directory."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Project Plugin",src:n(64896).Z,width:"625",height:"448"})),(0,l.kt)("p",null,"Next, go to the root directory of your project."),(0,l.kt)("p",null,"Right-click on the file ",(0,l.kt)("inlineCode",{parentName:"p"},"LyraStarterGame.uproject")," and select ",(0,l.kt)("inlineCode",{parentName:"p"},"Generate Visual Studio project files"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Generate Visual Studio Project Files",src:n(57791).Z,width:"624",height:"427"})),(0,l.kt)("p",null,"This will generate all necessary files for you to be able to open and compile the project successfully."),(0,l.kt)("p",null,"Now, open the generated solution file called ",(0,l.kt)("inlineCode",{parentName:"p"},"LyraStarterGame.sln")," in your IDE of choice."),(0,l.kt)("h2",{id:"modifying-the-tbia-plugin"},"Modifying the TBIA plugin"),(0,l.kt)("p",null,"You will need to modify a few files of the ",(0,l.kt)("strong",{parentName:"p"},"TwistedBytes Interaction")," plugin."),(0,l.kt)("h3",{id:"step-1-tbia_runtimebuildcs"},"Step 1: ",(0,l.kt)("inlineCode",{parentName:"h3"},"TBIA_Runtime.Build.cs")),(0,l.kt)("p",null,"In order to successfully integrate TBIA with Lyra we will need to set up a new dependency in the TBIA plugin."),(0,l.kt)("p",null,"Open the file ",(0,l.kt)("inlineCode",{parentName:"p"},"Plugins/TBInteractionSystem/Source/TBIA_Runtime/TBIA_Runtime.Build.cs")," and add ",(0,l.kt)("inlineCode",{parentName:"p"},"LyraGame")," to\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"PublicDependencyModuleNames")," ",(0,l.kt)(r.h8,{text:"1",mdxType:"Step"})," like this:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Modify TBIA Step 1",src:n(19555).Z,width:"1016",height:"272"})),(0,l.kt)("p",null,"After this change, you will need to re-generate files again like before:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Generate Visual Studio Project Files",src:n(57791).Z,width:"624",height:"427"})),(0,l.kt)("h3",{id:"step-2-tbia_gasenginesubsystemcpp"},"Step 2: ",(0,l.kt)("inlineCode",{parentName:"h3"},"TBIA_GASEngineSubsystem.cpp")),(0,l.kt)("p",null,"TBIA manages the initialization of the ",(0,l.kt)("strong",{parentName:"p"},"Gameplay Ability System")," for you in the background. However, Lyra does this\nalready, so we want to disable it in the TBIA plugin."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open the file ",(0,l.kt)("inlineCode",{parentName:"li"},"Plugins/TBInteractionSystem/Source/TBIA_Runtime/Private/GAS/TBIA_GASEngineSubsystem.cpp"),"."),(0,l.kt)("li",{parentName:"ul"},"Comment out the lines where we include ",(0,l.kt)("inlineCode",{parentName:"li"},"AbilitySystemGlobals.h")," ",(0,l.kt)(r.h8,{text:"1",mdxType:"Step"})," and where we call the ",(0,l.kt)("inlineCode",{parentName:"li"},"InitGlobalData()")," function  ",(0,l.kt)(r.h8,{text:"2",mdxType:"Step"}),"."),(0,l.kt)("li",{parentName:"ul"},"After the change your source code should look similar to this:")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Modify TBIA Step 2",src:n(21558).Z,width:"896",height:"218"})),(0,l.kt)("h3",{id:"step-3-tbia_abilitysystemcomponenth"},"Step 3: ",(0,l.kt)("inlineCode",{parentName:"h3"},"TBIA_AbilitySystemComponent.h")),(0,l.kt)("p",null,"TBIA sub-classes the ",(0,l.kt)("strong",{parentName:"p"},"Gameplay Ability System"),"'s ",(0,l.kt)("inlineCode",{parentName:"p"},"ASC")," (Ability System Component). Since Lyra has its own sub-classesd ",(0,l.kt)("inlineCode",{parentName:"p"},"ASC"),"\nwe need to reparent TBIA's ",(0,l.kt)("inlineCode",{parentName:"p"},"ASC")," to integrate it correctly into all systems."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open the file ",(0,l.kt)("inlineCode",{parentName:"li"},"Plugins/TBInteractionSystem/Source/TBIA_Runtime/Public/GAS/Component/TBIA_AbilitySystemComponent.h"),"."),(0,l.kt)("li",{parentName:"ul"},"Find the declaration of the ",(0,l.kt)("inlineCode",{parentName:"li"},"UTBIA_AbilitySystemComponent")," class and change its base class of from ",(0,l.kt)("inlineCode",{parentName:"li"},"UAbilitySystemComponent"),"\nto ",(0,l.kt)("inlineCode",{parentName:"li"},"ULyraAbilitySystemComponent")," ",(0,l.kt)(r.h8,{text:"1",mdxType:"Step"}),"."),(0,l.kt)("li",{parentName:"ul"},"Also include the corresponding header ",(0,l.kt)("inlineCode",{parentName:"li"},"AbilitySystem/LyraAbilitySystemComponent.h")," ",(0,l.kt)(r.h8,{text:"2",mdxType:"Step"}),"."),(0,l.kt)("li",{parentName:"ul"},"Lastly, let's comment out the inclusion of the ",(0,l.kt)("inlineCode",{parentName:"li"},"AbilitySystemComponent.h")," header file ",(0,l.kt)(r.h8,{text:"3",mdxType:"Step"}),".")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Modify TBIA Step 3",src:n(95033).Z,width:"1171",height:"525"})),(0,l.kt)("h3",{id:"step-4-tbia_gameplayabilityh"},"Step 4: ",(0,l.kt)("inlineCode",{parentName:"h3"},"TBIA_GameplayAbility.h")),(0,l.kt)("p",null,"Similar to step 3, we need to take care of the same sub-classing situation for the ",(0,l.kt)("strong",{parentName:"p"},"Gameplay Ability")," base class."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open the file ",(0,l.kt)("inlineCode",{parentName:"li"},"Plugins/TBInteractionSystem/Source/TBIA_Runtime/Public/GAS/GameplayAbility/TBIA_GameplayAbility.h"),"."),(0,l.kt)("li",{parentName:"ul"},"Find the declaration of the ",(0,l.kt)("inlineCode",{parentName:"li"},"UTBIA_GameplayAbility")," class and change its base class of from ",(0,l.kt)("inlineCode",{parentName:"li"},"UGameplayAbility"),"\nto ",(0,l.kt)("inlineCode",{parentName:"li"},"ULyraGameplayAbility")," ",(0,l.kt)(r.h8,{text:"1",mdxType:"Step"}),"."),(0,l.kt)("li",{parentName:"ul"},"Also include the corresponding header ",(0,l.kt)("inlineCode",{parentName:"li"},"AbilitySystem/Abilities/LyraGameplayAbility.h")," ",(0,l.kt)(r.h8,{text:"2",mdxType:"Step"}),"."),(0,l.kt)("li",{parentName:"ul"},"Lastly, let's comment out the inclusion of the ",(0,l.kt)("inlineCode",{parentName:"li"},"Abilities/GameplayAbility.h")," header file ",(0,l.kt)(r.h8,{text:"3",mdxType:"Step"}),".")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Modify TBIA Step 4",src:n(33468).Z,width:"979",height:"415"})),(0,l.kt)("h2",{id:"preparing-lyras-hero-blueprint-for-usage-with-tbia"},"Preparing Lyra's Hero Blueprint for usage with TBIA"),(0,l.kt)("p",null,"Now that we have integrated both source codes of TBIA plugin and Lyra's, we can continue and prepare Lyra's\nHero Blueprint which represents our player character in Lyra-based projects."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open the project in the Unreal Engine editor."),(0,l.kt)("li",{parentName:"ul"},"In the ",(0,l.kt)("em",{parentName:"li"},"Content Browser")," panel, go to ",(0,l.kt)("inlineCode",{parentName:"li"},"Content/Characters/Heroes")," ",(0,l.kt)(r.h8,{text:"1",mdxType:"Step"})," and open the asset ",(0,l.kt)("inlineCode",{parentName:"li"},"B_Hero_Default")," ",(0,l.kt)(r.h8,{text:"2",mdxType:"Step"}),".")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Prepare Lyra Hero 1",src:n(29139).Z,width:"788",height:"479"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Click ",(0,l.kt)("em",{parentName:"li"},"Add")," ",(0,l.kt)(r.h8,{text:"1",mdxType:"Step"})," to add new component ",(0,l.kt)("inlineCode",{parentName:"li"},"TBIA Interaction")," ",(0,l.kt)(r.h8,{text:"2",mdxType:"Step"}),".")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Prepare Lyra Hero 2",src:n(54052).Z,width:"455",height:"441"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In the ",(0,l.kt)("em",{parentName:"li"},"Components")," panel, select the ",(0,l.kt)("inlineCode",{parentName:"li"},"TBIA_Interaction")," ",(0,l.kt)(r.h8,{text:"1",mdxType:"Step"})," component."),(0,l.kt)("li",{parentName:"ul"},"In the ",(0,l.kt)("em",{parentName:"li"},"Details")," panel, navigate to ",(0,l.kt)("inlineCode",{parentName:"li"},"Twisted Bytes | Interaction")," and set ",(0,l.kt)("inlineCode",{parentName:"li"},"Initialize ASC")," ",(0,l.kt)(r.h8,{text:"2",mdxType:"Step"})," to ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Prepare Lyra Hero 3",src:n(57696).Z,width:"999",height:"490"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Go to the ",(0,l.kt)("em",{parentName:"li"},"Class Settings"),"."),(0,l.kt)("li",{parentName:"ul"},"In the ",(0,l.kt)("em",{parentName:"li"},"Details")," panel, navigate to ",(0,l.kt)("inlineCode",{parentName:"li"},"Interfaces | Implemented Interfaces"),"."),(0,l.kt)("li",{parentName:"ul"},"Click the ",(0,l.kt)("em",{parentName:"li"},"Add")," button ",(0,l.kt)(r.h8,{text:"1",mdxType:"Step"})," and add the ",(0,l.kt)("inlineCode",{parentName:"li"},"TBIA Interactable")," ",(0,l.kt)(r.h8,{text:"2",mdxType:"Step"})," interface.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Prepare Lyra Hero 4",src:n(61607).Z,width:"999",height:"599"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In the ",(0,l.kt)("em",{parentName:"li"},"My Blueprint")," panel, navigate to ",(0,l.kt)("inlineCode",{parentName:"li"},"Interfaces | Twisted Bytes")," and double-click on ",(0,l.kt)("inlineCode",{parentName:"li"},"Get Character Context")," ",(0,l.kt)(r.h8,{text:"1",mdxType:"Step"})," to implement this interface function."),(0,l.kt)("li",{parentName:"ul"},"Create a ",(0,l.kt)("inlineCode",{parentName:"li"},"Make TBIA_CharacterContext")," ",(0,l.kt)(r.h8,{text:"2",mdxType:"Step"})," node and connect the output pin to the ",(0,l.kt)("inlineCode",{parentName:"li"},"Return Value")," ",(0,l.kt)(r.h8,{text:"3",mdxType:"Step"})," of the ",(0,l.kt)("em",{parentName:"li"},"Return Node"),"."),(0,l.kt)("li",{parentName:"ul"},"Drag the ",(0,l.kt)("inlineCode",{parentName:"li"},"Mesh")," ",(0,l.kt)(r.h8,{text:"4",mdxType:"Step"})," component from the ",(0,l.kt)("em",{parentName:"li"},"Components")," panel onto the ",(0,l.kt)("inlineCode",{parentName:"li"},"Primary Mesh")," ",(0,l.kt)(r.h8,{text:"5",mdxType:"Step"})," input pin of the ",(0,l.kt)("inlineCode",{parentName:"li"},"Make TBIA_CharacterContext")," node.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Prepare Lyra Hero 5",src:n(1429).Z,width:"854",height:"836"})),(0,l.kt)("p",null,"Congratulations! You just completed the integration of TBIA into your Lyra-based project."),(0,l.kt)("h2",{id:"showcase-lyra-shootercore-experience"},"Showcase: Lyra ",(0,l.kt)("inlineCode",{parentName:"h2"},"ShooterCore")," Experience"),(0,l.kt)("p",null,'This section is meant to showcase on how you would now use TBIA in any "experience" like Lyra\'s ',(0,l.kt)("inlineCode",{parentName:"p"},"ShooterCore"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In the ",(0,l.kt)("em",{parentName:"li"},"Content Browser")," panel, go to ",(0,l.kt)("inlineCode",{parentName:"li"},"Plugins/Shooter Core Content")," and create a new folder ",(0,l.kt)("inlineCode",{parentName:"li"},"TwistedBytesInteraction"),"."),(0,l.kt)("li",{parentName:"ul"},"Inside that new folder, create a new ",(0,l.kt)("inlineCode",{parentName:"li"},"Interact Passive")," ",(0,l.kt)(r.h8,{text:"1",mdxType:"Step"})," ",(0,l.kt)("em",{parentName:"li"},"Gameplay Ability")," for use in the ",(0,l.kt)("inlineCode",{parentName:"li"},"ShooterCore")," experience and name it ",(0,l.kt)("inlineCode",{parentName:"li"},"GAInteractPassive"),".")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Showcase: Lyra ShooterCore Experience 1",src:n(12749).Z,width:"1065",height:"1138"})),(0,l.kt)("p",null,"Now, for demonstration purposes, we would like to enable the debug visualization and also change the maximum trace length for this ability to make it\neasier for us to verify that everything works fine."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open the newly created ",(0,l.kt)("inlineCode",{parentName:"li"},"GAInteractPassive")," ",(0,l.kt)("em",{parentName:"li"},"Gameplay Ability"),"."),(0,l.kt)("li",{parentName:"ul"},"In the ",(0,l.kt)("em",{parentName:"li"},"Details")," panel, navigate to ",(0,l.kt)("inlineCode",{parentName:"li"},"Twisted Bytes | Interaction")," and set ",(0,l.kt)("inlineCode",{parentName:"li"},"Max Range")," ",(0,l.kt)(r.h8,{text:"1",mdxType:"Step"})," to ",(0,l.kt)("inlineCode",{parentName:"li"},"600"),"."),(0,l.kt)("li",{parentName:"ul"},"In the ",(0,l.kt)("em",{parentName:"li"},"Details")," panel, navigate to ",(0,l.kt)("inlineCode",{parentName:"li"},"Twisted Bytes | Interaction | Debug")," and set ",(0,l.kt)("inlineCode",{parentName:"li"},"Show Debug")," ",(0,l.kt)(r.h8,{text:"2",mdxType:"Step"})," to ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Showcase: Lyra ShooterCore Experience 2",src:n(71167).Z,width:"970",height:"600"})),(0,l.kt)("p",null,"Finally, we need to tell Lyra about our new ",(0,l.kt)("em",{parentName:"p"},"Gameplay Ability"),", so it will be granted to our player character."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In the ",(0,l.kt)("em",{parentName:"li"},"Content Browser")," panel, go to ",(0,l.kt)("inlineCode",{parentName:"li"},"Plugins/Shooter Core Content/Game")," and open the asset ",(0,l.kt)("inlineCode",{parentName:"li"},"AbilitySet_ShooterHero")," ",(0,l.kt)(r.h8,{text:"1",mdxType:"Step"}),".")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Showcase: Lyra ShooterCore Experience 3",src:n(47242).Z,width:"781",height:"410"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In the ",(0,l.kt)("em",{parentName:"li"},"Details")," panel, navigate to ",(0,l.kt)("inlineCode",{parentName:"li"},"Granted Gameplay Abilities")," and click on the ",(0,l.kt)("inlineCode",{parentName:"li"},"+")," ",(0,l.kt)(r.h8,{text:"1",mdxType:"Step"})," button."),(0,l.kt)("li",{parentName:"ul"},"For the new element at the end of the list, set ",(0,l.kt)("inlineCode",{parentName:"li"},"Ability")," ",(0,l.kt)(r.h8,{text:"2",mdxType:"Step"})," to our ",(0,l.kt)("inlineCode",{parentName:"li"},"GAInteractivePassive")," ",(0,l.kt)("em",{parentName:"li"},"Gameplay Ability"),".")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Showcase: Lyra ShooterCore Experience 4",src:n(88398).Z,width:"757",height:"835"})),(0,l.kt)("p",null,"All done! Press ",(0,l.kt)("em",{parentName:"p"},"Play")," in the editor and test it out."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Showcase: Lyra ShooterCore Experience 5",src:n(66001).Z,width:"1286",height:"760"})),(0,l.kt)("h2",{id:"video-tutorial"},"Video Tutorial"),(0,l.kt)("p",null,"We also provide a video tutorial to guide you through the integration process."),(0,l.kt)(o.Z,{controls:!0,url:"https://www.youtube.com/watch?v=6rLD3BFVaKU",mdxType:"ReactPlayer"}))}k.isMDXComponent=!0},56891:function(e,t,n){t.Z=n.p+"assets/images/engine-plugins-27ab00095d9faac5f94873c88063850f.png"},57791:function(e,t,n){t.Z=n.p+"assets/images/generate-vs-project-files-acd9f9c3808a2366b8b436d51d935b52.png"},77033:function(e,t,n){t.Z=n.p+"assets/images/lyra-screenshot-5dd3a30ecb6e6419fdbefc43b802d70e.png"},19555:function(e,t,n){t.Z=n.p+"assets/images/modify-tbia-step-1-e5f838720cec06a5b786b052d61068f2.png"},21558:function(e,t,n){t.Z=n.p+"assets/images/modify-tbia-step-2-fa6a0ae6879c61cdd616fdbe3d225e32.png"},95033:function(e,t,n){t.Z=n.p+"assets/images/modify-tbia-step-3-798f21c7a888fe7d1ff10d5540296788.png"},33468:function(e,t,n){t.Z=n.p+"assets/images/modify-tbia-step-4-0c1706cac841fb1adcd7c2c182fc869b.png"},29139:function(e,t,n){t.Z=n.p+"assets/images/prepare-lyra-hero-1-d644cc164ab0e1afd9900bef33f31ae3.png"},54052:function(e,t,n){t.Z=n.p+"assets/images/prepare-lyra-hero-2-292911d399b96699f6aabe28f29f542c.png"},57696:function(e,t,n){t.Z=n.p+"assets/images/prepare-lyra-hero-3-3c870deb45de0c7b0a4e60a19c1d050e.png"},61607:function(e,t,n){t.Z=n.p+"assets/images/prepare-lyra-hero-4-4c8768a1ddef71345b040e9032bb4146.png"},1429:function(e,t,n){t.Z=n.p+"assets/images/prepare-lyra-hero-5-5b0298059a1d5c976fa8beb9487faad9.png"},64896:function(e,t,n){t.Z=n.p+"assets/images/project-plugin-68b8117fc5325764f25bcc425e8a38f8.png"},12749:function(e,t,n){t.Z=n.p+"assets/images/showcase-lyra-shootercore-experience-1-3ca1b56607d6ee2c11c6dc3c802eeb09.png"},71167:function(e,t,n){t.Z=n.p+"assets/images/showcase-lyra-shootercore-experience-2-46472fa017c4016807d89afa9d4b6a65.png"},47242:function(e,t,n){t.Z=n.p+"assets/images/showcase-lyra-shootercore-experience-3-14cba2cf3fb7b3fe44c24b07fc0ec157.png"},88398:function(e,t,n){t.Z=n.p+"assets/images/showcase-lyra-shootercore-experience-4-e57798af982b183bb6c2febe479ac02c.png"},66001:function(e,t,n){t.Z=n.p+"assets/images/showcase-lyra-shootercore-experience-5-9197a7f158b9c6b0bd1f0385db95738f.png"}}]);