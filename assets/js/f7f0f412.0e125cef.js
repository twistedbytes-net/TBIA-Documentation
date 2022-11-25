(self.webpackChunktbia_documentation=self.webpackChunktbia_documentation||[]).push([[7824],{28037:function(t,n,e){"use strict";e.r(n),e.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return T}});var i=e(87462),r=e(63366),a=(e(67294),e(3905)),c=e(93456),o=["components"],s={sidebar_position:6,title:"Triggered Interaction Cosmetic"},l=void 0,d={unversionedId:"architecture/triggered-interaction-cosmetic",id:"version-1.4.0/architecture/triggered-interaction-cosmetic",title:"Triggered Interaction Cosmetic",description:"Event ActivateAbility",source:"@site/versioned_docs/version-1.4.0/architecture/triggered-interaction-cosmetic.mdx",sourceDirName:"architecture",slug:"/architecture/triggered-interaction-cosmetic",permalink:"/TBIA-Documentation/docs/architecture/triggered-interaction-cosmetic",draft:!1,editUrl:"https://github.com/twistedbytes-net/TBIA-Documentation/edit/master/versioned_docs/version-1.4.0/architecture/triggered-interaction-cosmetic.mdx",tags:[],version:"1.4.0",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Triggered Interaction Cosmetic"},sidebar:"tutorialSidebar",previous:{title:"Interact Animation Cosmetic",permalink:"/TBIA-Documentation/docs/architecture/interact-animation-cosmetic"},next:{title:"Object Interaction Tag",permalink:"/TBIA-Documentation/docs/architecture/object-interaction-tag"}},u={},T=[{value:"Event ActivateAbility",id:"event-activateability",level:2},{value:"Event OnEndAbility",id:"event-onendability",level:2}],A={toc:T};function p(t){var n=t.components,e=(0,r.Z)(t,o);return(0,a.kt)("wrapper",(0,i.Z)({},A,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"event-activateability"},"Event ActivateAbility"),(0,a.kt)(c.Mermaid,{config:{},chart:'flowchart TB\n    START(("\u2b24"))\n    STOP(("\u2b24"))\n    \n    CANCEL_ABILITY(Cancel Ability)\n    END_ABILITY(End Ability)\n    \n    B[[Commit Ability]]\n    F>Validate Pre Interact]\n    H>Is Blocked For Interaction]\n    J>Get Interaction Context]\n    \n    M[[Activate Interaction Animation Cosmetic]]\n    N[[Register Interactor]]\n    O>Get Pre Interact SyncType]\n    P>Pre Interact]\n    Q>Is Interaction Still Valid]\n    R>Get PostInteract SyncType]\n    S>Post Interact]\n    T[[Unregister Interactor]]\n  \n    START --\x3e B\n\n    B --\x3e |Failed| CANCEL_ABILITY\n    F --\x3e |Not Valid| CANCEL_ABILITY\n    H --\x3e |Blocked| CANCEL_ABILITY\n    \n    B --\x3e |Success| F\n    F --\x3e |Validated| H\n    H --\x3e |Not Blocked| J\n    J --\x3e K\n    \n    K{{Interaction Duration > 0.0f}}\n    K --\x3e |True| CANCEL_ABILITY\n    K --\x3e |False| M\n    \n    M --\x3e N\n    N --\x3e O\n    O --\x3e P\n    P --\x3e Q\n    Q --\x3e R\n    R --\x3e S\n    S --\x3e T\n    T --\x3e END_ABILITY\n    \n    CANCEL_ABILITY --\x3e STOP\n    END_ABILITY --\x3e STOP\n\n    subgraph sub_container [ ]\n        direction TB\n        \n        START\n        \n        subgraph sub_main [ ]\n            direction TB\n    \n            B\n            F\n            H\n            J\n            K\n            M\n            N\n            O\n            P\n            Q\n            R\n            S\n            T\n        end\n        \n        subgraph sub_cancel [ ]\n            direction TB\n    \n            CANCEL_ABILITY\n            END_ABILITY\n        end\n        \n        STOP\n    end\n\n    classDef sty_start fill:#A2C3FB,color:#A2C3FB,stroke-width:2px,stroke:#3866B5;\n    classDef sty_stop fill:#A2C3FB,color:#3866B5,stroke-width:4px,stroke:#3866B5;\n    classDef sty_subgraph_transparent fill:#0000,stroke:#0000;\n    \n    class sub_container sty_subgraph_transparent;\n    class sub_main sty_subgraph_transparent;\n    class sub_cancel sty_subgraph_transparent;\n    class START sty_start;\n    class STOP sty_stop;',mdxType:"Mermaid"}),(0,a.kt)("h2",{id:"event-onendability"},"Event OnEndAbility"),(0,a.kt)(c.Mermaid,{chart:'flowchart TB\n    START(("\u2b24"))\n    STOP(("\u2b24"))\n    \n    A(End Interaction)\n\n    START --\x3e A\n    A --\x3e STOP\n    \n    subgraph sub_container [ ]\n        direction TB\n        \n        START\n        A\n        STOP\n    end\n    \n    classDef sty_start fill:#A2C3FB,color:#A2C3FB,stroke-width:2px,stroke:#3866B5;\n    classDef sty_stop fill:#A2C3FB,color:#3866B5,stroke-width:4px,stroke:#3866B5;\n    classDef sty_subgraph_transparent fill:#0000,stroke:#0000;\n    \n    class sub_container sty_subgraph_transparent;\n    class START sty_start;\n    class STOP sty_stop;',mdxType:"Mermaid"}))}p.isMDXComponent=!0},11748:function(t,n,e){var i={"./locale":89234,"./locale.js":89234};function r(t){var n=a(t);return e(n)}function a(t){if(!e.o(i,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=a,t.exports=r,r.id=11748}}]);