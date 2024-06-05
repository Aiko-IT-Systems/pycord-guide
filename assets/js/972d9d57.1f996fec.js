"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[937],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9880:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={title:"Introduction",description:"Pycord Guide is a complete guide for Pycord. Learn how to create Discord Bots today!",sidebar_position:1},s=void 0,c={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"Pycord Guide is a complete guide for Pycord. Learn how to create Discord Bots today!",source:"@site/docs/introduction.mdx",sourceDirName:".",slug:"/introduction",permalink:"/introduction",draft:!1,editUrl:"https://github.com/Pycord-Development/guide/tree/main/docs/introduction.mdx",tags:[],version:"current",lastUpdatedBy:"Lala Sabathil",lastUpdatedAt:1717595618,formattedLastUpdatedAt:"Jun 5, 2024",sidebarPosition:1,frontMatter:{title:"Introduction",description:"Pycord Guide is a complete guide for Pycord. Learn how to create Discord Bots today!",sidebar_position:1},sidebar:"defaultSidebar",next:{title:"Installation",permalink:"/installation"}},u={},d=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"Learning Resources",id:"learning-resources",level:2},{value:"Credits",id:"credits",level:2}],p={toc:d},m="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pycord is a modern, easy to use, feature-rich, and async ready API wrapper for Discord, written in Python. Pycord is a maintained fork of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Rapptz/discord.py"},"discord.py"),"."),(0,a.kt)("h2",{id:"before-you-begin"},"Before you begin"),(0,a.kt)("p",null,"Pycord is an advanced and complex Python library. To take advantage of the full capabilities of Pycord, you will need to have a good understanding of Python. You should know the basics of Python and have an understanding of the following concepts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Variables"),(0,a.kt)("li",{parentName:"ul"},"Data Types"),(0,a.kt)("li",{parentName:"ul"},"Functions"),(0,a.kt)("li",{parentName:"ul"},"Packages"),(0,a.kt)("li",{parentName:"ul"},"Conditionals"),(0,a.kt)("li",{parentName:"ul"},"Loops"),(0,a.kt)("li",{parentName:"ul"},"Classes"),(0,a.kt)("li",{parentName:"ul"},"Object-Oriented Programming"),(0,a.kt)("li",{parentName:"ul"},"Inheritance"),(0,a.kt)("li",{parentName:"ul"},"Exception Handling"),(0,a.kt)("li",{parentName:"ul"},"Iterators"),(0,a.kt)("li",{parentName:"ul"},"Coroutines"),(0,a.kt)("li",{parentName:"ul"},"Async/Await")),(0,a.kt)("p",null,"This list is not exhaustive, but it should give you a good idea of what you need to know to get started."),(0,a.kt)("p",null,"When you see an ellipsis - that's the three dots - in this guide, it is a placeholder for code that you need to fill in. Sometimes, it may be code for a command, while other times it could be something simple like a Guild ID. Make sure to replace them before running your bot!"),(0,a.kt)("h2",{id:"learning-resources"},"Learning Resources"),(0,a.kt)("p",null,"Here are some good resources to get started or to freshen up your Python knowledge:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wiki.python.org/moin/BeginnersGuide"},"Official Beginner's Guide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/tutorial/"},"Official Tutorial")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://automatetheboringstuff.com/"},"Automate the Boring Stuff, a free online book for complete beginners to programming")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learnxinyminutes.com/docs/python3/"},"Learn Python in y Minutes, complete cheat sheet for people who know programming already")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://python.swaroopch.com/"},"Swaroopch's free Python book")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.codeabbey.com/"},"Codeabbey, exercises for beginners"))),(0,a.kt)("h2",{id:"credits"},"Credits"),(0,a.kt)("p",null,"First of all, we would like to thank ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Rapptz"},"Rapptz")," for the original ",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/discord.py"},"discord.py")," library. Pycord is a maintained fork of this library."),(0,a.kt)("p",null,"We would also like to thank the ",(0,a.kt)("a",{parentName:"p",href:"https://discordjs.guide"},"discord.js guide"),", which inspired this guide style-wise, and the ",(0,a.kt)("a",{parentName:"p",href:"https://namantech.me/pycord"},"original Pycord Guide"),", which inspired some content in this guide."),(0,a.kt)("p",null,"We created this guide using ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io"},"Docusaurus v2"),", a modern static site generator for React. We would also like to thank Danktuary for his ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@discord-message-components/react"},(0,a.kt)("inlineCode",{parentName:"a"},"@discord-message-components/react"))," package, from which we took the Discord message components."),(0,a.kt)("p",null,"And finally, we would like to thank the amazing and loving community of Pycord users, contributors and developers."))}f.isMDXComponent=!0}}]);