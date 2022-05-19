(self.webpackChunktbia_documentation=self.webpackChunktbia_documentation||[]).push([[2447],{7472:function(n,t,e){"use strict";e.r(t),e.d(t,{assets:function(){return o},contentTitle:function(){return A},default:function(){return I},frontMatter:function(){return _},metadata:function(){return c},toc:function(){return C}});var a=e(87462),s=e(63366),i=(e(67294),e(3905)),T=e(93456),r=["components"],_={sidebar_position:4,title:"Interact Animation"},A=void 0,c={unversionedId:"architecture/interact-animation",id:"version-1.0.0/architecture/interact-animation",title:"Interact Animation",description:"Event ActivateAbility",source:"@site/versioned_docs/version-1.0.0/architecture/interact-animation.mdx",sourceDirName:"architecture",slug:"/architecture/interact-animation",permalink:"/TBIA-Documentation/docs/1.0.0/architecture/interact-animation",draft:!1,editUrl:"https://github.com/twistedbytes-net/TBIA-Documentation/edit/master/versioned_docs/version-1.0.0/architecture/interact-animation.mdx",tags:[],version:"1.0.0",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Interact Animation"},sidebar:"tutorialSidebar",previous:{title:"Interact Active",permalink:"/TBIA-Documentation/docs/1.0.0/architecture/interact-active"},next:{title:"Interact Animation Cosmetic",permalink:"/TBIA-Documentation/docs/1.0.0/architecture/interact-animation-cosmetic"}},o={},C=[{value:"Event ActivateAbility",id:"event-activateability",level:2}],N={toc:C};function I(n){var t=n.components,e=(0,s.Z)(n,r);return(0,i.kt)("wrapper",(0,a.Z)({},N,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"event-activateability"},"Event ActivateAbility"),(0,i.kt)(T.Mermaid,{config:{},chart:'flowchart TB\n    START(("\u2b24"))\n    STOP(("\u2b24"))\n    \n    START_ASYNC1(("\u2b24"))\n    STOP_ASYNC1(("\u2b24"))\n\n    START_ASYNC2(("\u2b24"))\n    STOP_ASYNC2(("\u2b24"))\n    \n    CANCEL_ABILITY(Cancel Ability)\n    \n    CANCEL_ABILITY_ASYNC1(Cancel Ability)\n    CANCEL_ABILITY_ASYNC2(Cancel Ability)\n    END_ABILITY_ASYNC1(End Ability)\n    \n    COMMIT_ABILITY[[Commit Ability]]\n    GET_CHARACTER_CONTEXT>Get Character Context]\n    GET_INTERACTION_CONTEXT>Get Interaction Context]\n    TRY_PLAY_MONTAGES[[Try Play Montages]]\n    INTERACTION_EVENT_RECEIVED>Interaction Event Received]\n    IS_INTERACTION_STILL_VALID>Is Interaction Still Valid]\n    MONTAGE_NEXT_SECTION[[Montage Next Section]]\n    \n    START --\x3e COMMIT_ABILITY\n    \n    COMMIT_ABILITY --\x3e |Success| GET_CHARACTER_CONTEXT\n    COMMIT_ABILITY --\x3e |Failed| CANCEL_ABILITY\n    GET_CHARACTER_CONTEXT --\x3e GET_INTERACTION_CONTEXT\n    GET_INTERACTION_CONTEXT --\x3e TRY_PLAY_MONTAGES\n\n    TRY_PLAY_MONTAGES -.-> |Async Task <br/> Play Montage| sub_async1\n    TRY_PLAY_MONTAGES -.-> |Async Task <br/> Check Interaction| sub_async2\n    TRY_PLAY_MONTAGES --\x3e STOP\n    \n    CANCEL_ABILITY --\x3e STOP\n    \n\n\n    START_ASYNC1 -..-> |Montage <br/> Event <br/> Received| INTERACTION_EVENT_RECEIVED\n    START_ASYNC1 -.-> |Montage <br/> Completed| END_ABILITY_ASYNC1\n    START_ASYNC1 -.-> |Montage <br/> Interrupted| CANCEL_ABILITY_ASYNC1\n    START_ASYNC1 -.-> |Montage <br/> Cancelled| CANCEL_ABILITY_ASYNC1\n    INTERACTION_EVENT_RECEIVED --\x3e STOP_ASYNC1\n    END_ABILITY_ASYNC1 --\x3e STOP_ASYNC1\n    CANCEL_ABILITY_ASYNC1 --\x3e STOP_ASYNC1\n\n    START_ASYNC2 -.-> |Check Interaction| IS_INTERACTION_STILL_VALID\n    START_ASYNC2 -.-> |Interaction Finished| MONTAGE_NEXT_SECTION\n    IS_INTERACTION_STILL_VALID --\x3e |Not Valid| CANCEL_ABILITY_ASYNC2\n    MONTAGE_NEXT_SECTION --\x3e STOP_ASYNC2\n    CANCEL_ABILITY_ASYNC2 --\x3e STOP_ASYNC2\n    \n    subgraph sub_container [ ]\n        direction TB\n        \n        START\n        \n        subgraph sub_main [ ]\n            direction TB\n\n            COMMIT_ABILITY\n            GET_CHARACTER_CONTEXT\n            GET_INTERACTION_CONTEXT\n            TRY_PLAY_MONTAGES\n\n            CANCEL_ABILITY\n        end\n        \n        subgraph sub_async1 [ ]\n            direction TB\n            \n            START_ASYNC1\n            INTERACTION_EVENT_RECEIVED\n            CANCEL_ABILITY_ASYNC1\n            END_ABILITY_ASYNC1\n\n        end\n\n        subgraph sub_async2 [ ]\n            direction TB\n            \n            START_ASYNC2\n           \n            IS_INTERACTION_STILL_VALID\n            MONTAGE_NEXT_SECTION\n            CANCEL_ABILITY_ASYNC2\n        end\n    end\n    \n    subgraph sub_stop [ ]\n        STOP\n        STOP_ASYNC1\n        STOP_ASYNC2\n    end\n\n    classDef sty_start fill:#A2C3FB,color:#A2C3FB,stroke-width:2px,stroke:#3866B5;\n    classDef sty_stop fill:#A2C3FB,color:#3866B5,stroke-width:4px,stroke:#3866B5;\n    classDef sty_start_async1 fill:#FBDAA2,color:#FBDAA2,stroke-width:2px,stroke:#B58738;\n    classDef sty_stop_async1 fill:#FBDAA2,color:#B58738,stroke-width:4px,stroke:#B58738;\n    classDef sty_start_async2 fill:#B1FBA2,color:#B1FBA2,stroke-width:2px,stroke:#4DB538;\n    classDef sty_stop_async2 fill:#B1FBA2,color:#4DB538,stroke-width:4px,stroke:#4DB538;\n    classDef sty_subgraph_transparent fill:#0000,stroke:#0000;\n    \n    class sub_container sty_subgraph_transparent;\n    class sub_main sty_subgraph_transparent;\n    %%class sub_async1 sty_subgraph_transparent;\n    %%class sub_async2 sty_subgraph_transparent;\n    class sub_stop sty_subgraph_transparent;\n    \n    class START sty_start;\n    class STOP sty_stop;\n    class START_ASYNC1 sty_start_async1;\n    class STOP_ASYNC1 sty_stop_async1;\n    class START_ASYNC2 sty_start_async2;\n    class STOP_ASYNC2 sty_stop_async2;',mdxType:"Mermaid"}))}I.isMDXComponent=!0},11748:function(n,t,e){var a={"./locale":89234,"./locale.js":89234};function s(n){var t=i(n);return e(t)}function i(n){if(!e.o(a,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return a[n]}s.keys=function(){return Object.keys(a)},s.resolve=i,n.exports=s,s.id=11748}}]);