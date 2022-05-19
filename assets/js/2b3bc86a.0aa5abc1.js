(self.webpackChunktbia_documentation=self.webpackChunktbia_documentation||[]).push([[9825],{72838:function(t,e,n){"use strict";n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return b}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),c=n(93456),a=["components"],d={sidebar_position:7,title:"Object Interaction Tag"},u=void 0,l={unversionedId:"architecture/object-interaction-tag",id:"version-1.0.0/architecture/object-interaction-tag",title:"Object Interaction Tag",description:"Event ActivateAbility",source:"@site/versioned_docs/version-1.0.0/architecture/object-interaction-tag.mdx",sourceDirName:"architecture",slug:"/architecture/object-interaction-tag",permalink:"/TBIA-Documentation/docs/1.0.0/architecture/object-interaction-tag",draft:!1,editUrl:"https://github.com/twistedbytes-net/TBIA-Documentation/edit/master/versioned_docs/version-1.0.0/architecture/object-interaction-tag.mdx",tags:[],version:"1.0.0",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Object Interaction Tag"},sidebar:"tutorialSidebar",previous:{title:"Triggered Interaction Cosmetic",permalink:"/TBIA-Documentation/docs/1.0.0/architecture/triggered-interaction-cosmetic"},next:{title:"Object Interaction Timed",permalink:"/TBIA-Documentation/docs/1.0.0/architecture/object-interaction-timed"}},s={},b=[{value:"Event ActivateAbility",id:"event-activateability",level:2},{value:"Event OnEndAbility",id:"event-onendability",level:2}],v={toc:b};function m(t){var e=t.components,n=(0,r.Z)(t,a);return(0,o.kt)("wrapper",(0,i.Z)({},v,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"event-activateability"},"Event ActivateAbility"),(0,o.kt)(c.Mermaid,{config:{},chart:"flowchart TD\n    A[Activate Ability] --\x3eB(Commit Ability)\n    B --\x3e |Failed| C(CancelAbility)\n    B --\x3e |Success| D[Get Interaction Context]\n    D --\x3e E[Object Start Interaction]\n    E --\x3e F[Try Play Montages]\n    F --\x3e |Montage Event Received| G[InteractionEventReceived]\n    F --\x3e |Montage Completed| H(End Ability)\n    F --\x3e |Montage Interrupted|I(Cancel Ability)\n    F --\x3e |Montage Cancelled|J(Cancel Ability)",mdxType:"Mermaid"}),(0,o.kt)("h2",{id:"event-onendability"},"Event OnEndAbility"),(0,o.kt)(c.Mermaid,{chart:"flowchart TD\n    X[Ability Ended] --\x3e Y[Object End Interaction]",mdxType:"Mermaid"}))}m.isMDXComponent=!0},11748:function(t,e,n){var i={"./locale":89234,"./locale.js":89234};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id=11748}}]);