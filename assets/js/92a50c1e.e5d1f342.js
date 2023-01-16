"use strict";(self.webpackChunktbia_documentation=self.webpackChunktbia_documentation||[]).push([[4807],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22795:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={sidebar_position:2,title:"Playable Demo"},s=void 0,c={unversionedId:"getting-started/playable-demo",id:"version-1.4.0/getting-started/playable-demo",title:"Playable Demo",description:"Playable Demo",source:"@site/versioned_docs/version-1.4.0/getting-started/playable-demo.mdx",sourceDirName:"getting-started",slug:"/getting-started/playable-demo",permalink:"/TBIA-Documentation/docs/1.4.0/getting-started/playable-demo",draft:!1,editUrl:"https://github.com/twistedbytes-net/TBIA-Documentation/edit/master/versioned_docs/version-1.4.0/getting-started/playable-demo.mdx",tags:[],version:"1.4.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Playable Demo"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/TBIA-Documentation/docs/1.4.0/getting-started/introduction"},next:{title:"Installation",permalink:"/TBIA-Documentation/docs/1.4.0/getting-started/installation"}},p={},d=[{value:"Download",id:"download",level:2},{value:"Testing in Multiplayer",id:"testing-in-multiplayer",level:2}],u={toc:d};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Playable Demo",src:n(3130).Z,width:"1920",height:"1080"})),(0,o.kt)("h2",{id:"download"},"Download"),(0,o.kt)("p",null,"You can download the playable demo: ",(0,o.kt)("a",{parentName:"p",href:"https://drive.google.com/drive/folders/12lCDG6TGoBTreHeardwIId3YxiQYlmP7?usp=sharing"},"here")),(0,o.kt)("p",null,"After downloading, simply unpack the archive file and run ",(0,o.kt)("inlineCode",{parentName:"p"},"TBIA_Demo.exe")," to run the demo as a single-player game."),(0,o.kt)("h2",{id:"testing-in-multiplayer"},"Testing in Multiplayer"),(0,o.kt)("p",null,"You can also easily try out the demo in a multiplayer scenario on one or more computers."),(0,o.kt)("p",null,"To make it as easy as possible, we prepared two batch files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"run-server.bat"),": Starts a ",(0,o.kt)("strong",{parentName:"li"},"listen-server instance")," of the demo game."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"run-client.bat"),": Starts a ",(0,o.kt)("strong",{parentName:"li"},"client instance")," of the demo game that will automatically try to connect to a running\nserver at the IP address ",(0,o.kt)("inlineCode",{parentName:"li"},"127.0.0.1"),".")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is more documentation inside the batch files in case you want to test it on multiple computers on your LAN."))))}m.isMDXComponent=!0},3130:function(e,t,n){t.Z=n.p+"assets/images/playable_demo-83b1b70168906228b03f90773bb3e402.png"}}]);