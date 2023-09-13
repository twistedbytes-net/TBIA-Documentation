(self.webpackChunktbia_documentation=self.webpackChunktbia_documentation||[]).push([[91],{59819:function(n,t,e){"use strict";e.r(t),e.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return I},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return T}});var r=e(87462),a=e(63366),i=(e(67294),e(3905)),s=e(93456),c=["components"],o={sidebar_position:3,title:"Interact Active"},l=void 0,u={unversionedId:"architecture/interact-active",id:"version-1.5.2/architecture/interact-active",title:"Interact Active",description:"Event ActivateAbility",source:"@site/versioned_docs/version-1.5.2/architecture/interact-active.mdx",sourceDirName:"architecture",slug:"/architecture/interact-active",permalink:"/TBIA-Documentation/docs/1.5.2/architecture/interact-active",draft:!1,editUrl:"https://github.com/twistedbytes-net/TBIA-Documentation/edit/master/versioned_docs/version-1.5.2/architecture/interact-active.mdx",tags:[],version:"1.5.2",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Interact Active"},sidebar:"tutorialSidebar",previous:{title:"Interact Passive",permalink:"/TBIA-Documentation/docs/1.5.2/architecture/interact-passive"},next:{title:"Interact Animation",permalink:"/TBIA-Documentation/docs/1.5.2/architecture/interact-animation"}},d={},T=[{value:"Event ActivateAbility",id:"event-activateability",level:2},{value:"Event OnEndAbility",id:"event-onendability",level:2}],A={toc:T};function I(n){var t=n.components,e=(0,a.Z)(n,c);return(0,i.kt)("wrapper",(0,r.Z)({},A,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"event-activateability"},"Event ActivateAbility"),(0,i.kt)(s.Mermaid,{config:{},chart:'flowchart TB\n    START(("\u2b24"))\n    STOP(("\u2b24"))\n    Enum((" "))\n    \n    CANCEL_ABILITY[[Cancel Ability]]\n    END_ABILITY[[End Ability]]\n\n    B[[Commit Ability]]\n    D[[Get Interactable Target]]\n    F>Validate Pre Interact]\n    Y>C++ Functions]\n    G[[Hit Result]]\n    I>Custom Trace For Interact Active Ability]\n    V>Proximity]\n    H>Is Blocked For Interaction]\n    J>Get Interaction Context]\n    K[/Activate <br/> Interaction Animation <br/> Loop/]\n    L[/Cancel <br/> Interaction Animation <br/> Cosmetic/]\n    M[/"Activate <br/> Interaction Animation <br/> Cosmetic"/]\n    N[[Register Interactor]]\n    O>Get Pre Interact SyncType]\n    P>Pre Interact]\n    Q>Is Interaction Still Valid]\n    R>Get Post Interact SyncType]\n    S>Post Interact]\n    T[[Unregister Interactor]]\n    W{{Interaction Cooldown Duration > 0.0f}}\n    X{{Interaction Duration > 0.0f}}\n    \n    START --\x3e B\n    \n    B --\x3e |Success| D\n    B --\x3e |Failed| CANCEL_ABILITY\n    D --\x3e |Trace Start Location Type| Enum\n    Enum -.-> |Center of Camera <br/> Socket on Character\'s Mesh <br/> Cursor| Y\n    Enum -.-> |Custom Trace| I\n    Enum -.-> |No Trace| V\n    Y --\x3e G\n    I --\x3e G\n    V --\x3e |Target Hit| F\n    G --\x3e |Target Hit| F\n    G --\x3e |No Target| V\n    V --\x3e |No Target| CANCEL_ABILITY\n    F --\x3e |Not Valid| CANCEL_ABILITY\n    F --\x3e |Validated| H\n    H --\x3e |Blocked| CANCEL_ABILITY\n    H --\x3e |Not Blocked| J\n    J --\x3e X\n    X --\x3e |True| K\n    X --\x3e |False| W\n    W --\x3e |True| M\n    W --\x3e |False| L\n    L --\x3e M\n    K --\x3e N\n    M --\x3e N\n    N --\x3e O\n    O --\x3e P\n    P --\x3e Q\n    Q --\x3e |Not valid| CANCEL_ABILITY\n    Q --\x3e |Valid| R\n    R --\x3e S\n    S --\x3e T\n    T --\x3e END_ABILITY\n    \n    CANCEL_ABILITY --\x3e STOP\n    END_ABILITY --\x3e STOP\n    \n    subgraph sub_container [ ]\n        direction TB\n        \n        START\n        \n        subgraph sub_main [ ]\n            direction TB\n\n            B\n            D\n            H\n            J\n            K\n            \n            J\n            K\n            L\n            M\n            N\n            O\n            P\n            Q\n            R\n            S\n            T\n            W\n            X\n\n        subgraph sub_trace [ ]\n            direction TB\n    \n            Enum\n            F\n            G\n            Y\n            I\n            V\n\n        end\n\n        end\n\n\n        \n        subgraph sub_cancel [ ]\n            direction TB\n    \n            CANCEL_ABILITY\n            END_ABILITY\n        end\n        \n        STOP\n    end\n    \n    classDef sty_start fill:#A2C3FB,color:#A2C3FB,stroke-width:2px,stroke:#3866B5;\n    classDef sty_stop fill:#A2C3FB,color:#3866B5,stroke-width:4px,stroke:#3866B5;\n    classDef sty_subgraph_transparent fill:#0000,stroke:#0000;\n    classDef sty_enum fill:#A2C3FB,color:#A2C3FB,stroke-width:2px,stroke:#3866B5;\n    \n    class START sty_start;\n    class STOP sty_stop;\n    class Enum sty_enum;\n    class sub_container sty_subgraph_transparent;\n    class sub_main sty_subgraph_transparent;\n    class sub_cancel sty_subgraph_transparent;\n    class sub_trace sty_subgraph_transparent;\n',mdxType:"Mermaid"}),(0,i.kt)("h2",{id:"event-onendability"},"Event OnEndAbility"),(0,i.kt)(s.Mermaid,{chart:'flowchart TB\n    START(("\u2b24"))\n    STOP(("\u2b24"))\n    \n    B>End Interaction]\n    C{{Was Cancelled}}\n    D[[Unregister Interactor]]\n    E[[Cancel Interaction]]\n   \n    subgraph sub_container [ ]\n        direction TB\n        \n        START \n        START --\x3e B\n        B --\x3e C\n        C --\x3e |True| D\n        C --\x3e |False| STOP\n        D --\x3e E\n        E --\x3e STOP\n    end\n    \n    classDef sty_start fill:#A2C3FB,color:#A2C3FB,stroke-width:2px,stroke:#3866B5;\n    classDef sty_stop fill:#A2C3FB,color:#3866B5,stroke-width:4px,stroke:#3866B5;\n    classDef sty_subgraph_transparent fill:#0000,stroke:#0000;\n    \n    class sub_container sty_subgraph_transparent;\n    class START sty_start;\n    class STOP sty_stop;',mdxType:"Mermaid"}))}I.isMDXComponent=!0},11748:function(n,t,e){var r={"./locale":89234,"./locale.js":89234};function a(n){var t=i(n);return e(t)}function i(n){if(!e.o(r,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return r[n]}a.keys=function(){return Object.keys(r)},a.resolve=i,n.exports=a,a.id=11748}}]);