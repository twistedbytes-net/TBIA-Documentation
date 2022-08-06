(self.webpackChunktbia_documentation=self.webpackChunktbia_documentation||[]).push([[5460],{15038:function(t,n,e){"use strict";e.r(n),e.d(n,{assets:function(){return d},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=e(87462),i=e(63366),a=(e(67294),e(3905)),s=e(93456),o=["components"],c={sidebar_position:2,title:"Interact Passive"},u=void 0,l={unversionedId:"architecture/interact-passive",id:"version-1.2.0/architecture/interact-passive",title:"Interact Passive",description:"Event ActivateAbility",source:"@site/versioned_docs/version-1.2.0/architecture/interact-passive.mdx",sourceDirName:"architecture",slug:"/architecture/interact-passive",permalink:"/TBIA-Documentation/docs/architecture/interact-passive",draft:!1,editUrl:"https://github.com/twistedbytes-net/TBIA-Documentation/edit/master/versioned_docs/version-1.2.0/architecture/interact-passive.mdx",tags:[],version:"1.2.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Interact Passive"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/TBIA-Documentation/docs/architecture/overview"},next:{title:"Interact Active",permalink:"/TBIA-Documentation/docs/architecture/interact-active"}},d={},p=[{value:"Event ActivateAbility",id:"event-activateability",level:2}],m={toc:p};function v(t){var n=t.components,e=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"event-activateability"},"Event ActivateAbility"),(0,a.kt)(s.Mermaid,{config:{},chart:'flowchart TD\n\n    START(("\u2b24"))\n    STOP(("\u2b24"))\n\n    CANCEL_ABILITY[[Cancel Ability]]\n\n    Enum((" "))\n\n    B[[Commit Ability]]\n    C>Wait For Interactable Target]\n    D>C++ Functions]\n    E>Custom Trace For Interact Passive Ability]\n    L>Only Proximity]\n    F>Proximity]\n    G[[Hit Result]]\n    H>Clear Interactable Target]\n    I>Interactable Target Lost]\n    J[[Is Target New]]\n    K>Interactable Target Found]\n\n    START --\x3e B\n\n    B --\x3e |Success| C\n    B --\x3e |Failed| CANCEL_ABILITY\n    C --\x3e |Use Proximity = True| F\n    C --\x3e |Trace Start Location Type| Enum\n    Enum -.-> |No Trace|L\n    Enum -.-> |Center of Camera <br/> Socket on Character\'s Mesh <br/> Cursor| D\n    Enum -.-> |Custom Trace|E\n    D --\x3e |Override Proximity|G\n    E --\x3e |Override Proximity|G\n    F --\x3e G\n    G --\x3e |No Target| H\n    G --\x3e |Target Lost| I\n    G --\x3e |Target Found| J\n    J --\x3e |New Target| K\n    \n    CANCEL_ABILITY --\x3e STOP\n    \n    subgraph sub_container [ ]\n        direction TB\n        START\n\n        subgraph sub_main [ ]\n        direction TB\n\n            B\n            C\n            Enum\n\n        end\n\n        subgraph sub_functions [ ]\n        direction TB\n            \n            \n            D\n            L\n            E\n            F\n            G\n\n        end\n\n        subgraph sub_result [ ]\n        direction TB\n            \n            H\n            I\n            J\n            K\n\n        end\n\n        CANCEL_ABILITY\n        STOP\n    end\n\n    classDef sty_start fill:#A2C3FB,color:#A2C3FB,stroke-width:2px,stroke:#3866B5;\n    classDef sty_stop fill:#A2C3FB,color:#3866B5,stroke-width:4px,stroke:#3866B5;\n    classDef sty_subgraph_transparent fill:#0000,stroke:#0000;\n    classDef sty_enum fill:#A2C3FB,color:#A2C3FB,stroke-width:2px,stroke:#3866B5;\n    \n    class START sty_start;\n    class STOP sty_stop;\n    class Enum sty_enum;\n    class sub_container sty_subgraph_transparent;\n    class sub_main sty_subgraph_transparent;\n    class sub_functions sty_subgraph_transparent;\n    class sub_result sty_subgraph_transparent;\n',mdxType:"Mermaid"}))}v.isMDXComponent=!0},11748:function(t,n,e){var r={"./locale":89234,"./locale.js":89234};function i(t){var n=a(t);return e(n)}function a(t){if(!e.o(r,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=a,t.exports=i,i.id=11748}}]);