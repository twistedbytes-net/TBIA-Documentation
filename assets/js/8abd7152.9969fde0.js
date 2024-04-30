"use strict";(self.webpackChunktbia_documentation=self.webpackChunktbia_documentation||[]).push([[7657],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4887:function(e,t,n){n.d(t,{UE:function(){return o},h8:function(){return a},qh:function(){return p},y$:function(){return r}});n(87462),n(63366),n(67294);var i=n(3905),a=function(e){e.children;var t=e.text;return(0,i.kt)("span",{style:{backgroundColor:"#822",color:"#faa",border:"1px #faa solid",borderRadius:"5rem",padding:".2rem .4rem",fontSize:".6rem"}},t)},r=function(e){var t=e.children;return(0,i.kt)("span",{style:{color:"#faa"}},t)};function o(e){e.children;var t=e.version,n="#ffffff";return(0,i.kt)("span",{style:{backgroundColor:"#414141",color:n,border:"1px #ffffff solid",borderRadius:"5px",padding:".05rem .4rem",fontSize:".75rem"}},t)}function l(e,t,n,a){return(0,i.kt)("div",{style:{backgroundColor:a,color:n,border:"1px "+n+" solid",borderRadius:"5px",padding:".1rem .4rem"}},t)}var p=function(e){e.children;return l(0,"Released","#afa","#181")}},44347:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=n(4887),l=["components"],p={sidebar_position:2,title:"Using Proximity Interactions"},s=void 0,c={unversionedId:"features/proximity-interactions",id:"version-1.6.0/features/proximity-interactions",title:"Using Proximity Interactions",description:"What Is Proximity Interactions?",source:"@site/versioned_docs/version-1.6.0/features/proximity-interactions.mdx",sourceDirName:"features",slug:"/features/proximity-interactions",permalink:"/TBIA-Documentation/docs/1.6.0/features/proximity-interactions",draft:!1,editUrl:"https://github.com/twistedbytes-net/TBIA-Documentation/edit/master/versioned_docs/version-1.6.0/features/proximity-interactions.mdx",tags:[],version:"1.6.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Using Proximity Interactions"},sidebar:"tutorialSidebar",previous:{title:"Using Enhanced Input",permalink:"/TBIA-Documentation/docs/1.6.0/features/using-enhanced-input"},next:{title:"Custom Trace In Passive Ability",permalink:"/TBIA-Documentation/docs/1.6.0/features/passive-custom-trace"}},m={},d=[{value:"What Is Proximity Interactions?",id:"what-is-proximity-interactions",level:2},{value:"Interact Passive Ability Setup",id:"interact-passive-ability-setup",level:2},{value:"Interact Active Ability Setup",id:"interact-active-ability-setup",level:2},{value:"Interactable Object Setup",id:"interactable-object-setup",level:2},{value:"Play",id:"play",level:2}],u={toc:d};function h(e){var t=e.components,p=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-proximity-interactions"},"What Is Proximity Interactions?"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Proximity Interactions")," is the ability to interact with an interactable object (e.g. weapon pickup) without looking directly towards it. Instead,\nyou can interact with an interactable object when you are close enough to it. This functionality is added to ",(0,r.kt)("inlineCode",{parentName:"p"},"TBIA_GAInteractPassive")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"TBIA_GAInteractActive")," but if you would like to added it to your custom abilities you can find the functions\n",(0,r.kt)("inlineCode",{parentName:"p"},"ProximityTraceForInteractables")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"GetNearestInteractableObject")," inside ",(0,r.kt)("inlineCode",{parentName:"p"},"TBIA_InteractionFunctionLibrary"),"."),(0,r.kt)("p",null,"Proximity interactions are added to ",(0,r.kt)("inlineCode",{parentName:"p"},"TBIA_GAInteractPassive")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"TBIA_GAInteractActive")," which can be activated by setting ",(0,r.kt)("em",{parentName:"p"},"Use Proximity")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"Once you enable this feature in the ",(0,r.kt)("strong",{parentName:"p"},"Details")," panel, you will see several extra parameters appear which allow you to\ncustomize the way proximity interactions should work."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"InteractablePriority"),": Integer that holds the priority of the interactable objects to interact with."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PriorityCondition"),": Prioritized interactable objects are filtered by priority using this condition."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ProximityTimerPeriod"),": How long to wait in seconds before executing the proximity interaction again."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CollisionShape"),": The collision shape of the proximity trace."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TraceOffset"),": Offset the start location of the proximity trace which is the world location of the capsule in the character class."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Radius"),": Radius for the circle of sphere shape selected in the ",(0,r.kt)("em",{parentName:"li"},"CollisionShape"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CapsuleHalfHeight"),": Capsule half height when the ",(0,r.kt)("em",{parentName:"li"},"CollisionShape")," is set to ",(0,r.kt)("em",{parentName:"li"},"Capsule"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BoxHalfSize"),": Box size when the ",(0,r.kt)("em",{parentName:"li"},"CollisionShape")," is set to ",(0,r.kt)("em",{parentName:"li"},"Box"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BoxOrientation"),": Box orientation when the ",(0,r.kt)("em",{parentName:"li"},"CollisionShape")," is set to ",(0,r.kt)("em",{parentName:"li"},"Box"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bIgnoreSelf"),": Ignore self on ",(0,r.kt)("em",{parentName:"li"},"CollisionShape"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bTraceComplex"),": If ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", the trace will use complex collision for the ",(0,r.kt)("em",{parentName:"li"},"CollisionShape"),". Otherwise, simplified collision is used."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DrawDebugType"),": Draw debug type for the ",(0,r.kt)("em",{parentName:"li"},"CollisionShape"),". "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ShapeTraceColor"),": Trace color for the ",(0,r.kt)("em",{parentName:"li"},"CollisionShape"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ShapeTraceHitColor"),": Trace hit color for the ",(0,r.kt)("em",{parentName:"li"},"CollisionShape")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DebugDrawTime"),": Draw time of the trace debug visualization."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bCheckForVisibility"),": Check for unblocked Line of Sight (LoS) to potentially interactable objects."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LineTraceChannel"),": Trace channel for the visibility check trace."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LineTraceOffset"),": Offset of the start location for the visibility check."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LineTraceColor"),": Trace color for the visibility check. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LineTraceHitColor"),": Trace hit color for the visibility check. ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"What Is Proximity Interactions",src:n(94647).Z,width:"1063",height:"592"})),(0,r.kt)("h2",{id:"interact-passive-ability-setup"},"Interact Passive Ability Setup"),(0,r.kt)("p",null,"In order to use ",(0,r.kt)("em",{parentName:"p"},"Proximity Interactions")," in the ",(0,r.kt)("em",{parentName:"p"},"Passive Ability"),", open your ",(0,r.kt)("em",{parentName:"p"},"Interact Passive")," ability Blueprint that is inherited from ",(0,r.kt)("inlineCode",{parentName:"p"},"TBIA_InteractPassive"),".\nUnder ",(0,r.kt)("inlineCode",{parentName:"p"},"Twisted Bytes | Interactions"),", set ",(0,r.kt)("em",{parentName:"p"},"Use Proximity")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"})," and the ",(0,r.kt)("em",{parentName:"p"},"Interactable Priority")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," ",(0,r.kt)(o.h8,{text:"2",mdxType:"Step"}),"\n(or whatever might make sense in your case). Scroll down to ",(0,r.kt)("em",{parentName:"p"},"Object Types")," and click on the add icon ",(0,r.kt)("em",{parentName:"p"},"+")," ",(0,r.kt)(o.h8,{text:"3",mdxType:"Step"}),".\nThen, select ",(0,r.kt)("em",{parentName:"p"},"Interactable")," ",(0,r.kt)(o.h8,{text:"4",mdxType:"Step"}),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Interactable")," object type we selected here is what we already defined in a ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/migration-guide#collision-settings"},"previous setup step"),"."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Interact Passive Ability Setup",src:n(17462).Z,width:"3839",height:"2038"})),(0,r.kt)("h2",{id:"interact-active-ability-setup"},"Interact Active Ability Setup"),(0,r.kt)("p",null,"Open your ",(0,r.kt)("em",{parentName:"p"},"Interact Active")," ability Blueprint that is inherited from ",(0,r.kt)("inlineCode",{parentName:"p"},"TBIA_InteractActive"),". Under ",(0,r.kt)("inlineCode",{parentName:"p"},"Twisted Bytes | Interactions"),", set ",(0,r.kt)("em",{parentName:"p"},"Use Proximity"),"\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"}),". Then set ",(0,r.kt)("em",{parentName:"p"},"Interactable Priority")," ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"})," to the same value as you set it in your ",(0,r.kt)("em",{parentName:"p"},"Interact Passive")," ability.\nAfter that, scroll down to ",(0,r.kt)("em",{parentName:"p"},"Object Types")," and click on the add icon ",(0,r.kt)("em",{parentName:"p"},"+")," ",(0,r.kt)(o.h8,{text:"3",mdxType:"Step"}),". Then, select ",(0,r.kt)("em",{parentName:"p"},"Interactable")," ",(0,r.kt)(o.h8,{text:"4",mdxType:"Step"}),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Interact Active Ability Setup",src:n(6379).Z,width:"3839",height:"2037"})),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In order to visualize the proximity tracing, set ",(0,r.kt)("inlineCode",{parentName:"p"},"Draw Debug Type")," to ",(0,r.kt)("em",{parentName:"p"},"For Duration"),". For the ",(0,r.kt)("em",{parentName:"p"},"Passive Ability")," set ",(0,r.kt)("em",{parentName:"p"},"Draw Time")," equal to ",(0,r.kt)("em",{parentName:"p"},"Proximity Timer Period"),"."))),(0,r.kt)("h2",{id:"interactable-object-setup"},"Interactable Object Setup"),(0,r.kt)("p",null,"Here we are using ",(0,r.kt)("em",{parentName:"p"},"BP_ShieldCell_Item")," from the ",(0,r.kt)("a",{parentName:"p",href:"https://static.twistedbytes.net/downloads/7a42299c-6047-e1e8-5b98-c16ab1868b89/TBIA%20Demo%20Project/"},(0,r.kt)("inlineCode",{parentName:"a"},"TBIA_Demo")),".\nThis ",(0,r.kt)("em",{parentName:"p"},"Blueprint")," class is inherited from ",(0,r.kt)("inlineCode",{parentName:"p"},"TBIA_GASActorBase")," which has the ",(0,r.kt)("em",{parentName:"p"},"ASC")," and the ",(0,r.kt)("em",{parentName:"p"},"Interaction Component")," added, where in UE5 it is not essential anymore\nto have the ",(0,r.kt)("em",{parentName:"p"},"ASC")," implemented in C++ and you can add it directly in ",(0,r.kt)("em",{parentName:"p"},"Blueprints"),"."),(0,r.kt)("p",null,"Open the ",(0,r.kt)("em",{parentName:"p"},"Blueprint")," file and select the ",(0,r.kt)("em",{parentName:"p"},"SkeletalMesh")," component ",(0,r.kt)(o.h8,{text:"1",mdxType:"Step"}),". In the ",(0,r.kt)("em",{parentName:"p"},"Details")," panel under ",(0,r.kt)("em",{parentName:"p"},"Collision"),", set the ",(0,r.kt)("inlineCode",{parentName:"p"},"Object Type"),"\nto ",(0,r.kt)("em",{parentName:"p"},"Interactable")," ",(0,r.kt)(o.h8,{text:"2",mdxType:"Step"})," and make sure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"Visibility")," trace channel is set to ",(0,r.kt)("em",{parentName:"p"},"Blocked")," ",(0,r.kt)(o.h8,{text:"3",mdxType:"Step"}),".\nThen open the overridden function ",(0,r.kt)("em",{parentName:"p"},"GetInteractionContext")," and set ",(0,r.kt)("inlineCode",{parentName:"p"},"Object Interaction Priority")," ",(0,r.kt)(o.h8,{text:"4",mdxType:"Step"})," to the same value that you chose in\nyour ability ",(0,r.kt)("em",{parentName:"p"},"Blueprints")," earlier."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Interactable Object Setup",src:n(8463).Z,width:"1920",height:"1040"})),(0,r.kt)("h2",{id:"play"},"Play"),(0,r.kt)("p",null,"Place the ",(0,r.kt)("em",{parentName:"p"},"Interactable Actor")," in your level and press ",(0,r.kt)("em",{parentName:"p"},"Play")," and get close to the placed ",(0,r.kt)("em",{parentName:"p"},"Actor"),"."),(0,r.kt)("p",null,"As you can see in the image below you are now able to interact with actors just by standing close next to them."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Interactable Object Setup",src:n(93119).Z,width:"939",height:"734"})))}h.isMDXComponent=!0},94647:function(e,t,n){t.Z=n.p+"assets/images/01_proximity_logic-d1a53dd29053d93a13539b230c557b84.png"},17462:function(e,t,n){t.Z=n.p+"assets/images/02_passive_setup-611f585f4e3f12e6ce27bf06cdd0719f.png"},6379:function(e,t,n){t.Z=n.p+"assets/images/03_active_setup-bd7c81e600d0e6b15ece489ec8c4c3ee.png"},8463:function(e,t,n){t.Z=n.p+"assets/images/04_object_setup-ca1574162a488400a81f271d90d4f050.png"},93119:function(e,t,n){t.Z=n.p+"assets/images/05_play-217ff874161c9cf9ec5efbbb145634f4.png"}}]);