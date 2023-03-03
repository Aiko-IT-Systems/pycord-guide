"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[6231],{8624:function(e,t,o){o.d(t,{v:function(){return s}});var a=o(7294),n=o(7674),s=Object.assign({},n.TW,{profiles:{bob:{author:"BobDotCom",avatar:"/img/bob.png",roleColor:"#2cd6f7"},robocord:{author:"Robocord",avatar:"/img/robocord.png",roleColor:"#9b59b6",bot:!0},dorukyum:{author:"Dorukyum",avatar:"/img/dorukyum.png",roleColor:"#2cd6f7"}}});t.Z=function(e){var t=e.options,o=void 0===t?s:t,i=e.children;return a.createElement(n.qs.Provider,{value:o},a.createElement(n.dZ,null,i))}},5e3:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return u}});var a=o(7462),n=o(3366),s=(o(7294),o(3905)),i=o(7674),r=o(8624),l=["components"],d={title:"Discord Interactions"},m=void 0,c={unversionedId:"interactions/index",id:"interactions/index",title:"Discord Interactions",description:"In December 2020, Discord released their first Interaction: the",source:"@site/docs/interactions/index.mdx",sourceDirName:"interactions",slug:"/interactions/",permalink:"/interactions/",draft:!1,editUrl:"https://github.com/Pycord-Development/guide/tree/main/docs/interactions/index.mdx",tags:[],version:"current",lastUpdatedBy:"Lala Sabathil",lastUpdatedAt:1677810329,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{title:"Discord Interactions"},sidebar:"defaultSidebar",previous:{title:"Rules and Common Practices",permalink:"/getting-started/rules-and-common-practices"},next:{title:"Application Commands",permalink:"/category/application-commands"}},p={},u=[{value:"Application Commands",id:"application-commands",level:2},{value:"Slash Commands",id:"slash-commands",level:3},{value:"Message and User Commands",id:"message-and-user-commands",level:3},{value:"Application Commands vs. Prefix Commands",id:"application-commands-vs-prefix-commands",level:2},{value:"Discord&#39;s Decision",id:"discords-decision",level:3},{value:"Who has to Use Application Commands",id:"who-has-to-use-application-commands",level:3},{value:"What&#39;s the Better Option",id:"whats-the-better-option",level:3},{value:"Message Components",id:"message-components",level:2},{value:"Views",id:"views",level:3},{value:"Buttons",id:"buttons",level:3},{value:"Select Menus",id:"select-menus",level:3},{value:"Modal Dialogs",id:"modal-dialogs",level:3}],h={toc:u};function k(e){var t=e.components,d=(0,n.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},h,d,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In December 2020, Discord released their first Interaction: the\n",(0,s.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/interactions/application-commands#slash-commands"},"Slash Command"),".\nSince then, Discord has added many types of Interactions, including:"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/interactions/application-commands"},(0,s.kt)("strong",{parentName:"a"},"Application Commands"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://discord.com/developers/docs/interactions/application-commands#slash-commands"},(0,s.kt)("strong",{parentName:"a"},"Slash Commands")),":\nCommands that can be used with the ",(0,s.kt)("inlineCode",{parentName:"li"},"/")," prefix."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Context Menu Commands"),": Commands that can be used from the right-click menu.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://discord.com/developers/docs/interactions/application-commands#user-commands"},(0,s.kt)("strong",{parentName:"a"},"User Commands")),":\nCommands that can be used on a user by alt-clicking/selecting them."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://discord.com/developers/docs/interactions/application-commands#message-commands"},(0,s.kt)("strong",{parentName:"a"},"Message Commands")),":\nCommands that can be used on a message by alt-clicking/selecting it.")))),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/interactions/message-components"},(0,s.kt)("strong",{parentName:"a"},"UI Components"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://discord.com/developers/docs/interactions/message-components#buttons"},(0,s.kt)("strong",{parentName:"a"},"Buttons")),":\nButtons are attached to a message and can be clicked on to perform an action."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://discord.com/developers/docs/interactions/message-components#select-menus"},(0,s.kt)("strong",{parentName:"a"},"Select Menus")),":\nDrop-down menus are used to select a number of options from a list."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://discord.com/developers/docs/interactions/message-components#text-inputs"},(0,s.kt)("strong",{parentName:"a"},"Modals")),":\nForm-like modals can be used to ask for input from a user.")),(0,s.kt)("h2",{id:"application-commands"},"Application Commands"),(0,s.kt)("p",null,"Application Commands are another set of new features that are intended to avoid compromising users' safety and privacy.\nThey're relatively easy to add to your bot, and give people a simpler and safer way to use commands."),(0,s.kt)("h3",{id:"slash-commands"},(0,s.kt)("a",{parentName:"h3",href:"https://docs.pycord.dev/en/stable/api/application_commands.html#discord.SlashCommand"},"Slash Commands")),(0,s.kt)("p",null,"Slash Commands were the first Interaction added to Discord. They're easy to use and create, and\nis the only prefix commands alternative that does not need Message Content intent."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Preferring prefix commands over Application Commands is ",(0,s.kt)("strong",{parentName:"p"},"not")," a valid reason to apply for the\nMessage Content intent. Using that as a reason will get your application denied.")),(0,s.kt)(r.Z,{mdxType:"DiscordComponent"},(0,s.kt)(i.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,s.kt)("div",{slot:"interactions"},(0,s.kt)(i.un,{profile:"bob",command:!0,mdxType:"DiscordInteraction"},"ping")),"Pong! Latency is 335ms.")),(0,s.kt)("br",null),(0,s.kt)("p",null,"This is what a Slash Command looks like. Not too different from a prefix command,\napart from the note telling you who invoked it. A Slash Command's fields can accept any of the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Members"),(0,s.kt)("li",{parentName:"ul"},"Roles"),(0,s.kt)("li",{parentName:"ul"},"Channels"),(0,s.kt)("li",{parentName:"ul"},"Attachments"),(0,s.kt)("li",{parentName:"ul"},"Text")),(0,s.kt)("p",null,"Just about as good as it gets."),(0,s.kt)("h3",{id:"message-and-user-commands"},(0,s.kt)("a",{parentName:"h3",href:"https://docs.pycord.dev/en/stable/api/application_commands.html#discord.MessageCommand"},"Message")," and ",(0,s.kt)("a",{parentName:"h3",href:"https://docs.pycord.dev/en/stable/api/application_commands.html#discord.UserCommand"},"User")," Commands"),(0,s.kt)("p",null,"Message Commands and User Commands were both introduced at around the same time, and are very similar to each other, so we'll be\nintroducing them together. These commands can be found in the ",(0,s.kt)("inlineCode",{parentName:"p"},"Apps")," tab when alt-clicking. The only difference between the two is that\nMessage Commands only appear in the ",(0,s.kt)("inlineCode",{parentName:"p"},"Apps")," tab of a message, while User Commands are found in the ",(0,s.kt)("inlineCode",{parentName:"p"},"Apps")," tab of a user. Message Commands\ncan be used to quickly report a message, warn a user for a message, and other functions. Likewise, User Commands can be used to add a\nuser to a ticket, warn a user, and more."),(0,s.kt)("p",null,"Here's an example of a Message Command:"),(0,s.kt)(r.Z,{mdxType:"DiscordComponent"},(0,s.kt)(i.kK,{profile:"bob",mdxType:"DiscordMessage"},"Hello World!"),(0,s.kt)(i.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,s.kt)("div",{slot:"interactions"},(0,s.kt)(i.un,{profile:"dorukyum",contextMenu:!0,mdxType:"DiscordInteraction"},"Reverse Message")),'Message 930650407917748286 reversed is "!dlroW olleH"')),(0,s.kt)("br",null),(0,s.kt)("p",null,"And here's an example of a User Command:"),(0,s.kt)(r.Z,{mdxType:"DiscordComponent"},(0,s.kt)(i.kK,{profile:"bob",mdxType:"DiscordMessage"},r.v.profiles.dorukyum.author," has been on Discord for a long time"),(0,s.kt)(i.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,s.kt)("div",{slot:"interactions"},(0,s.kt)(i.un,{profile:"dorukyum",contextMenu:!0,mdxType:"DiscordInteraction"},"User Age")),r.v.profiles.dorukyum.author," is 1 week old."),(0,s.kt)(i.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,s.kt)("div",{slot:"interactions"},(0,s.kt)(i.un,{profile:"dorukyum",contextMenu:!0,mdxType:"DiscordInteraction"},"User Age")),r.v.profiles.bob.author," is 40 years old."),(0,s.kt)(i.kK,{profile:"dorukyum",mdxType:"DiscordMessage"},"\ud83e\udd14")),(0,s.kt)("br",null),(0,s.kt)("p",null,"Pretty cool, right? To learn more about these two, please read the ",(0,s.kt)("a",{parentName:"p",href:"/interactions/application-commands/context-menus"},"Context Menus guide"),"."),(0,s.kt)("h2",{id:"application-commands-vs-prefix-commands"},(0,s.kt)("a",{parentName:"h2",href:"#application-commands"},"Application Commands")," vs. ",(0,s.kt)("a",{parentName:"h2",href:"../extensions/commands/prefixed-commands"},"Prefix Commands")),(0,s.kt)("p",null,"Ever since Discord was created, apps on it have used prefix commands. Using prefixes meant that you would have to put a\ncertain character (or string of characters) in front of your command, such as the exclamation mark in ",(0,s.kt)("inlineCode",{parentName:"p"},"!ping"),". The way this\nworked was that your bot would listen for messages, pick out the ones that had their specific prefix, and then respond to the command.\nNow, Discord is encouraging developers to switch their bots over to Application Commands, which is a new system meant to preserve the\nprivacy and safety of their users. But why exactly is Discord making us switch? What's the better option, Application Commands or prefix\ncommands? Below, we'll discuss everything you need to know."),(0,s.kt)("h3",{id:"discords-decision"},"Discord's Decision"),(0,s.kt)("p",null,"Application Commands were conceptualized partly due to privacy concerns. When Discord first began, they weren't entirely concerned about bots\nhaving access to the content of every message that was being sent. However, as Discord grew, this became more of a problem. Hypothetically, bots\ncould simply log every message they're able to receive via the Discord API and hand their contents over to a company or other third party. This is\na problem, since that data is meant to be used only by Discord. As such, they locked down Message Content, and introduced Application Commands for\nbot developers to use instead."),(0,s.kt)("p",null,"Prefix commands work by reading messages, as described before. Application Commands, however, don't\nwork this way; instead, they work by having your bot get information from Discord about when a command was used. This way, Discord can limit\nMessage Content only to bots that ",(0,s.kt)("em",{parentName:"p"},"absolutely")," depend on it, such as auto-moderation bots."),(0,s.kt)("h3",{id:"who-has-to-use-application-commands"},"Who has to Use Application Commands"),(0,s.kt)("p",null,"Any verified bot that does not have the Message Content intent must use Application Commands. Discord is allowing developers to submit\napplications for the ability to use the intent; however, since they don't want to keep supporting prefix commands due to privacy concerns,\nthey will automatically decline any application that includes only that as a reason. So, if your bot doesn't have an auto-moderation feature\n(or any other functionality that requires Message Content), you're out of luck."),(0,s.kt)("p",null,"Unverified bots, however, don't have to use Application Commands. This is because the Message Content intent is a ",(0,s.kt)("inlineCode",{parentName:"p"},"Privileged Intent"),", meaning that\nit must be applied for only if your bot is verified or about to be verified. Unverified bots don't have to apply for Privileged Intents, so they can\nuse them freely."),(0,s.kt)("p",null,"So, if your bot is made only for a couple of servers, you can choose between prefix commands and Application Commands. However, if you plan on expanding\nyour bot's reach, it'll have to use Application Commands."),(0,s.kt)("h3",{id:"whats-the-better-option"},"What's the Better Option"),(0,s.kt)("p",null,"Choosing which is the better option is up to you, if you're starting small. If\nyou plan on growing your bot, however, you will have to use Application Commands. Since prefix commands are slowly being phased out by Discord,\nthere isn't much of a choice for developers of larger bots."),(0,s.kt)("h2",{id:"message-components"},"Message Components"),(0,s.kt)("p",null,"Message Components are fairly new features in Discord, allowing developers to give their bots a fast\nand understandable user interface. Message Components are easy to use and make your bot look modern,\nsleek, and downright awesome."),(0,s.kt)("h3",{id:"views"},(0,s.kt)("a",{parentName:"h3",href:"https://docs.pycord.dev/en/stable/api/ui_kit.html#discord.ui.View"},"Views")),(0,s.kt)("p",null,"Views are not an Application Command nor are they a Message Component. Views are the invisible placeholders, or grid,\nthat Message Components lie in. Views can have up to 5 ",(0,s.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api/models.html#discord.ActionRow"},(0,s.kt)("inlineCode",{parentName:"a"},"Action Rows")),",\nand Action Rows can have a maximum of 5 slots. Below, you can find a table showing how many slots a Message Interaction takes up."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Component"),(0,s.kt)("th",{parentName:"tr",align:null},"Slots"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Buttons"),(0,s.kt)("td",{parentName:"tr",align:null},"1 Slot")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Select Menus"),(0,s.kt)("td",{parentName:"tr",align:null},"5 Slots")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Text Modals"),(0,s.kt)("td",{parentName:"tr",align:null},"1 Slot (opened via a Button)")))),(0,s.kt)("p",null,"So, based on this, you could have a maximum of 25 Buttons in a View with no Select Menus, and 5 Select\nMenus in a View with no Buttons. This doesn't mean you can't have them both in a View, however. You can have\na combination of them, such as 20 Buttons and a Select Menu or 10 Buttons and 3 Select Menus."),(0,s.kt)("h3",{id:"buttons"},(0,s.kt)("a",{parentName:"h3",href:"https://docs.pycord.dev/en/stable/api/ui_kit.html#discord.ui.Button"},"Buttons")),(0,s.kt)("p",null,"Buttons are the first of the Message Components. They allow for quick responses to prompts, such as for canceling or continuing an action.\nOf course, these aren't their only uses; people have created awesome things with Buttons, such as calculators, games, and more!"),(0,s.kt)(r.Z,{mdxType:"DiscordComponent"},(0,s.kt)(i.kK,{profile:"robocord",mdxType:"DiscordMessage"},"Discord Buttons are awesome!",(0,s.kt)("div",{slot:"actions"},(0,s.kt)(i.jr,{mdxType:"DiscordButtons"},(0,s.kt)(i.qD,{type:"primary",emoji:"\ud83d\ude0e",mdxType:"DiscordButton"},"Click me!"))))),(0,s.kt)("br",null),(0,s.kt)("p",null,"This is what a Button looks like, very simple and modern. To learn more about Buttons, refer to our\n",(0,s.kt)("a",{parentName:"p",href:"/interactions/ui-components/buttons"},"Buttons page"),"."),(0,s.kt)("h3",{id:"select-menus"},(0,s.kt)("a",{parentName:"h3",href:"https://docs.pycord.dev/en/stable/api/ui_kit.html#discord.ui.Select"},"Select Menus")),(0,s.kt)("p",null,"Select Menus are the second of Discord's Message Components. They allow users to select from a list of choices, which your bot can then use.\nSelect Menus are good for things such as choosing features, pages of a help menu, and more."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Select Menu Example Image",src:o(8037).Z,width:"803",height:"426"})),(0,s.kt)("p",null,"This is what a Select Menu looks like. While not looking as good as Buttons, they still look great\nand have even greater possibilities. To learn more about Select Menus, please refer to our ",(0,s.kt)("a",{parentName:"p",href:"/interactions/ui-components/dropdowns"},"Select\nMenus page"),"."),(0,s.kt)("h3",{id:"modal-dialogs"},(0,s.kt)("a",{parentName:"h3",href:"https://docs.pycord.dev/en/stable/api/ui_kit.html#discord.ui.Modal"},"Modal Dialogs")),(0,s.kt)("p",null,"Text Modals are the most recently added Message Component in Discord. They're useful for text input and filling out forms, such as a\nsign-up for your bot's service. These are meant to replace long bot setup processes by allowing users to fill out multiple text fields,\nwhich avoids having the user send multiple messages for the bot. Modals can be accessed by either invoking an Application Command or by\ninteracting with another UI Component."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Text Modal Example Image",src:o(7700).Z,width:"442",height:"284"})),(0,s.kt)("p",null,"This is what a Text Modal looks like, easy to use and one of the most useful Message Components yet. To learn more about Text Modals,\nplease visit our ",(0,s.kt)("a",{parentName:"p",href:"/interactions/ui-components/modal-dialogs"},"Modal Dialogs page"),"."))}k.isMDXComponent=!0},7700:function(e,t,o){t.Z=o.p+"assets/images/modal-example-62ec0fce52863522553932b7b8857046.png"},8037:function(e,t,o){t.Z=o.p+"assets/images/select-menus-example-012e35519e65065fcd049ed4ce7d27a6.png"}}]);