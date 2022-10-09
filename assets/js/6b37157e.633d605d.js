(self.webpackChunktbia_documentation=self.webpackChunktbia_documentation||[]).push([[6832],{53925:function(n,t,e){"use strict";e.r(t),e.d(t,{assets:function(){return A},contentTitle:function(){return o},default:function(){return N},frontMatter:function(){return _},metadata:function(){return c},toc:function(){return I}});var s=e(87462),T=e(63366),i=(e(67294),e(3905)),a=e(93456),r=["components"],_={sidebar_position:8,title:"Object Interaction Timed"},o=void 0,c={unversionedId:"architecture/object-interaction-timed",id:"version-1.2.0/architecture/object-interaction-timed",title:"Object Interaction Timed",description:"Event ActivateAbility",source:"@site/versioned_docs/version-1.2.0/architecture/object-interaction-timed.mdx",sourceDirName:"architecture",slug:"/architecture/object-interaction-timed",permalink:"/TBIA-Documentation/docs/1.2.0/architecture/object-interaction-timed",draft:!1,editUrl:"https://github.com/twistedbytes-net/TBIA-Documentation/edit/master/versioned_docs/version-1.2.0/architecture/object-interaction-timed.mdx",tags:[],version:"1.2.0",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Object Interaction Timed"},sidebar:"tutorialSidebar",previous:{title:"Object Interaction Tag",permalink:"/TBIA-Documentation/docs/1.2.0/architecture/object-interaction-tag"},next:{title:"Using Enhanced Input",permalink:"/TBIA-Documentation/docs/1.2.0/features/using-enhanced-input"}},A={},I=[{value:"Event ActivateAbility",id:"event-activateability",level:2},{value:"Event OnEndAbility",id:"event-onendability",level:2}],C={toc:I};function N(n){var t=n.components,e=(0,T.Z)(n,r);return(0,i.kt)("wrapper",(0,s.Z)({},C,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"event-activateability"},"Event ActivateAbility"),(0,i.kt)(a.Mermaid,{config:{},chart:'flowchart TD\n    START(("\u2b24"))\n    STOP(("\u2b24"))\n    \n    START_ASYNC1(("\u2b24"))\n    STOP_ASYNC1(("\u2b24"))\n\n    START_ASYNC2(("\u2b24"))\n    STOP_ASYNC2(("\u2b24"))\n    \n    CANCEL_ABILITY(Cancel Ability)\n    \n    CANCEL_ABILITY_ASYNC1(Cancel Ability)\n    CANCEL_ABILITY_ASYNC2(Cancel Ability)\n    END_ABILITY_ASYNC1(End Ability)\n    \n    COMMIT_ABILITY[[Commit Ability]]\n    GET_INTERACTION_CONTEXT>Get Interaction Context]\n    OBJECT_START_INTERACTION>Object Start Interaction]\n    TRY_PLAY_MONTAGES[[Try Play Montages]]\n    INTERACTION_EVENT_RECEIVED>Interaction Event Received]\n    IS_INTERACTION_STILL_VALID>Is Interaction Still Valid]\n    MONTAGE_NEXT_SECTION[[Montage Next Section]]\n    \n    START --\x3e COMMIT_ABILITY\n    \n    COMMIT_ABILITY --\x3e |Success| GET_INTERACTION_CONTEXT\n    COMMIT_ABILITY --\x3e |Failed| CANCEL_ABILITY\n    GET_INTERACTION_CONTEXT --\x3e OBJECT_START_INTERACTION\n    OBJECT_START_INTERACTION --\x3e TRY_PLAY_MONTAGES\n\n    TRY_PLAY_MONTAGES -.-> |Async Task <br/> Play Montage| sub_async1\n    TRY_PLAY_MONTAGES -.-> |Async Task <br/> Check Interaction| sub_async2\n    TRY_PLAY_MONTAGES --\x3e STOP\n    \n    CANCEL_ABILITY --\x3e STOP\n    \n\n\n    START_ASYNC1 -..-> |Montage <br/> Event <br/> Received| INTERACTION_EVENT_RECEIVED\n    START_ASYNC1 -.-> |Montage <br/> Completed| END_ABILITY_ASYNC1\n    START_ASYNC1 -.-> |Montage <br/> Interrupted| CANCEL_ABILITY_ASYNC1\n    START_ASYNC1 -.-> |Montage <br/> Cancelled| CANCEL_ABILITY_ASYNC1\n    INTERACTION_EVENT_RECEIVED --\x3e STOP_ASYNC1\n    END_ABILITY_ASYNC1 --\x3e STOP_ASYNC1\n    CANCEL_ABILITY_ASYNC1 --\x3e STOP_ASYNC1\n\n    START_ASYNC2 -.-> |Check Interaction| IS_INTERACTION_STILL_VALID\n    START_ASYNC2 -.-> |Interaction Finished| MONTAGE_NEXT_SECTION\n    IS_INTERACTION_STILL_VALID --\x3e |Not Valid| CANCEL_ABILITY_ASYNC2\n    MONTAGE_NEXT_SECTION --\x3e STOP_ASYNC2\n    CANCEL_ABILITY_ASYNC2 --\x3e STOP_ASYNC2\n    \n    subgraph sub_container [ ]\n        direction TB\n        \n        START\n        \n        subgraph sub_main [ ]\n            direction TB\n\n            COMMIT_ABILITY\n            GET_INTERACTION_CONTEXT\n            OBJECT_START_INTERACTION\n            TRY_PLAY_MONTAGES\n\n            CANCEL_ABILITY\n        end\n        \n        subgraph sub_async1 [ ]\n            direction TB\n            \n            START_ASYNC1\n            INTERACTION_EVENT_RECEIVED\n            CANCEL_ABILITY_ASYNC1\n            END_ABILITY_ASYNC1\n\n        end\n\n        subgraph sub_async2 [ ]\n            direction TB\n            \n            START_ASYNC2\n           \n            IS_INTERACTION_STILL_VALID\n            MONTAGE_NEXT_SECTION\n            CANCEL_ABILITY_ASYNC2\n        end\n    end\n    \n    subgraph sub_stop [ ]\n        STOP\n        STOP_ASYNC1\n        STOP_ASYNC2\n    end\n\n    classDef sty_start fill:#A2C3FB,color:#A2C3FB,stroke-width:2px,stroke:#3866B5;\n    classDef sty_stop fill:#A2C3FB,color:#3866B5,stroke-width:4px,stroke:#3866B5;\n    classDef sty_start_async1 fill:#FBDAA2,color:#FBDAA2,stroke-width:2px,stroke:#B58738;\n    classDef sty_stop_async1 fill:#FBDAA2,color:#B58738,stroke-width:4px,stroke:#B58738;\n    classDef sty_start_async2 fill:#B1FBA2,color:#B1FBA2,stroke-width:2px,stroke:#4DB538;\n    classDef sty_stop_async2 fill:#B1FBA2,color:#4DB538,stroke-width:4px,stroke:#4DB538;\n    classDef sty_subgraph_transparent fill:#0000,stroke:#0000;\n    \n    class sub_container sty_subgraph_transparent;\n    class sub_main sty_subgraph_transparent;\n    %%class sub_async1 sty_subgraph_transparent;\n    %%class sub_async2 sty_subgraph_transparent;\n    class sub_stop sty_subgraph_transparent;\n    \n    class START sty_start;\n    class STOP sty_stop;\n    class START_ASYNC1 sty_start_async1;\n    class STOP_ASYNC1 sty_stop_async1;\n    class START_ASYNC2 sty_start_async2;\n    class STOP_ASYNC2 sty_stop_async2;',mdxType:"Mermaid"}),(0,i.kt)("h2",{id:"event-onendability"},"Event OnEndAbility"),(0,i.kt)(a.Mermaid,{chart:'flowchart TD\n    START(("\u2b24"))\n    STOP(("\u2b24"))\n    \n    B>Object End Interaction]\n   \n    subgraph sub_container [ ]\n        direction TB\n        \n        START \n        START --\x3e B\n        B --\x3e STOP\n    end\n    \n    classDef sty_start fill:#A2C3FB,color:#A2C3FB,stroke-width:2px,stroke:#3866B5;\n    classDef sty_stop fill:#A2C3FB,color:#3866B5,stroke-width:4px,stroke:#3866B5;\n    classDef sty_subgraph_transparent fill:#0000,stroke:#0000;\n    \n    class sub_container sty_subgraph_transparent;\n    class START sty_start;\n    class STOP sty_stop;',mdxType:"Mermaid"}))}N.isMDXComponent=!0},11748:function(n,t,e){var s={"./locale":89234,"./locale.js":89234};function T(n){var t=i(n);return e(t)}function i(n){if(!e.o(s,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return s[n]}T.keys=function(){return Object.keys(s)},T.resolve=i,n.exports=T,T.id=11748}}]);