"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[4757],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=a.createContext({}),c=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(r.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(r,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=p;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),i=n(6010),o="tabItem_Ymn6";function s(e){var t=e.children,n=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,s),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),i=n(7294),o=n(6010),s=n(2389),l=n(7392),r=n(7094),c=n(2466),u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n,s=e.lazy,p=e.block,m=e.defaultValue,h=e.values,f=e.groupId,w=e.className,b=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.l)(y,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(t=null!=m?m:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==v&&!y.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,r.U)(),N=g.tabGroupChoices,T=g.setTabGroupChoices,_=(0,i.useState)(v),C=_[0],x=_[1],O=[],P=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var S=N[f];null!=S&&S!==C&&y.some((function(e){return e.value===S}))&&x(S)}var D=function(e){var t=e.currentTarget,n=O.indexOf(t),a=y[n].value;a!==C&&(P(t),x(a),null!=f&&T(f,String(a)))},I=function(e){var t,n=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":var a,i=O.indexOf(e.currentTarget)+1;n=null!=(a=O[i])?a:O[0];break;case"ArrowLeft":var o,s=O.indexOf(e.currentTarget)-1;n=null!=(o=O[s])?o:O[O.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},w)},y.map((function(e){var t=e.value,n=e.label,s=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return O.push(e)},onKeyDown:I,onClick:D},s,{className:(0,o.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),s?(0,i.cloneElement)(b.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,s.Z)();return i.createElement(p,(0,a.Z)({key:String(t)},e))}},930:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),s=n(5488),l=n(5162),r=["components"],c={title:"Select Menus",description:"Learn all about implementing Select Menus or Dropdowns in your Discord Bot with Pycord."},u=void 0,d={unversionedId:"interactions/ui-components/dropdowns",id:"interactions/ui-components/dropdowns",title:"Select Menus",description:"Learn all about implementing Select Menus or Dropdowns in your Discord Bot with Pycord.",source:"@site/docs/interactions/ui-components/dropdowns.mdx",sourceDirName:"interactions/ui-components",slug:"/interactions/ui-components/dropdowns",permalink:"/interactions/ui-components/dropdowns",draft:!1,editUrl:"https://github.com/Pycord-Development/guide/tree/main/docs/interactions/ui-components/dropdowns.mdx",tags:[],version:"current",lastUpdatedBy:"Lala Sabathil",lastUpdatedAt:1677810329,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{title:"Select Menus",description:"Learn all about implementing Select Menus or Dropdowns in your Discord Bot with Pycord."},sidebar:"defaultSidebar",previous:{title:"Buttons",permalink:"/interactions/ui-components/buttons"},next:{title:"Modal Dialogs",permalink:"/interactions/ui-components/modal-dialogs"}},p={},m=[{value:"Concept",id:"concept",level:2},{value:"Usage Syntax",id:"usage-syntax",level:2},{value:"Customization",id:"customization",level:2},{value:"Select Menu Properties",id:"select-menu-properties",level:4},{value:"Select Option Properties",id:"select-option-properties",level:4},{value:"Action Rows",id:"action-rows",level:2},{value:"Disabling Select Menus",id:"disabling-select-menus",level:2},{value:"Pre-Disabled Menus",id:"pre-disabled-menus",level:3},{value:"Disabling Buttons on Press",id:"disabling-buttons-on-press",level:3},{value:"Timeouts",id:"timeouts",level:2},{value:"Persistent Views",id:"persistent-views",level:2},{value:"FAQ",id:"faq",level:2},{value:"How many select menus can I have in a message?",id:"how-many-select-menus-can-i-have-in-a-message",level:4},{value:"Can I add more than one view to a message?",id:"can-i-add-more-than-one-view-to-a-message",level:4},{value:"Why are UI Components so confusing?",id:"why-are-ui-components-so-confusing",level:4},{value:'<e id="oop">What is OOP? What is subclassing?</e>',id:"what-is-oop-what-is-subclassing",level:4},{value:"Do select menus need any special permissions?",id:"do-select-menus-need-any-special-permissions",level:4}],h={toc:m};function f(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Shortly after the buttons were added, Discord added their second message component: Select Menus. Select Menus allow users to choose from a list of items sent by a bot. These are a great substitute for having a user send a number that corresponds to an option. You can even allow users to select multiple options from the Select Menus. This guide will show you the easy and painless ways of using them with Pycord."),(0,o.kt)("h2",{id:"concept"},"Concept"),(0,o.kt)("p",null,"Select Menus aren't the only message component in Discord. There's also ",(0,o.kt)("a",{parentName:"p",href:"./buttons"},"Buttons")," and ",(0,o.kt)("a",{parentName:"p",href:"./modal-dialogs"},"Modal Dialogs"),". Select Menus make it easy for users to pick one or multiple options from a list provided by a bot."),(0,o.kt)("p",null,'These UI elements reside in a "view". To learn more about views, please refer to the\n',(0,o.kt)("a",{parentName:"p",href:"../../interactions"},"interactions page"),"."),(0,o.kt)("h2",{id:"usage-syntax"},"Usage Syntax"),(0,o.kt)("p",null,"Let's see how to create a simple responsive button."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import discord\n\nbot = discord.Bot()\n\nclass MyView(discord.ui.View):\n    @discord.ui.select( # the decorator that lets you specify the properties of the select menu\n        placeholder = "Choose a Flavor!", # the placeholder text that will be displayed if nothing is selected\n        min_values = 1, # the minimum number of values that must be selected by the users\n        max_values = 1, # the maximum number of values that can be selected by the users\n        options = [ # the list of options from which users can choose, a required field\n            discord.SelectOption(\n                label="Vanilla",\n                description="Pick this if you like vanilla!"\n            ),\n            discord.SelectOption(\n                label="Chocolate",\n                description="Pick this if you like chocolate!"\n            ),\n            discord.SelectOption(\n                label="Strawberry",\n                description="Pick this if you like strawberry!"\n            )\n        ]\n    )\n    async def select_callback(self, select, interaction): # the function called when the user is done selecting options\n        await interaction.response.send_message(f"Awesome! I like {select.values[0]} too!")\n\n@bot.command()\nasync def flavor(ctx):\n    await ctx.send("Choose a flavor!", view=MyView())\n\nbot.run("TOKEN")\n')),(0,o.kt)("p",null,"There's a lot going on over here! Don't worry, we will go over the code and explain it."),(0,o.kt)("p",null,"As you can see, we create a class called ",(0,o.kt)("inlineCode",{parentName:"p"},"MyView")," that subclasses\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api/ui_kit.html#discord.ui.View"},(0,o.kt)("inlineCode",{parentName:"a"},"discord.ui.View")),"."),(0,o.kt)("p",null,"Then, we add a function called ",(0,o.kt)("inlineCode",{parentName:"p"},"select_callback")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"View")," class with the decorator\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api/ui_kit.html#discord.ui.select"},(0,o.kt)("inlineCode",{parentName:"a"},"discord.ui.select")),".\nThis decorator adds a select menu to the view. This decorator takes a few arguments to customize your select menu. Read them in the ",(0,o.kt)("a",{parentName:"p",href:"#customization"},"Customization section"),"."),(0,o.kt)("p",null,"That was the decorator. Now, the function itself is pretty simple. It takes two parameters, not including ",(0,o.kt)("inlineCode",{parentName:"p"},"self"),". The parameters are ",(0,o.kt)("inlineCode",{parentName:"p"},"select"),": The select menu, and ",(0,o.kt)("inlineCode",{parentName:"p"},"interaction"),": a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api/models.html#discord.InteractionResponse"},(0,o.kt)("inlineCode",{parentName:"a"},"discord.InteractionResponse"))," object. Both of these are passed by Pycord, so you just need to specify them in the function!"),(0,o.kt)("p",null,"In the callback, you could do anything you want. You get the two parameters ",(0,o.kt)("inlineCode",{parentName:"p"},"select")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"interaction")," to play around with. Here, we send a message using ",(0,o.kt)("inlineCode",{parentName:"p"},"await interaction.response.send_message")," (where interaction is ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api/models.html#discord.InteractionResponse"},(0,o.kt)("inlineCode",{parentName:"a"},"discord.InteractionResponse")),") with content ",(0,o.kt)("inlineCode",{parentName:"p"},"select.values[0]"),", which sends the label of the first/only option the user selected. Obviously, this is only an example, and you could do just about anything you want."),(0,o.kt)("p",null,"Finally, we create a global slash command called ",(0,o.kt)("inlineCode",{parentName:"p"},"flavour"),' that sends a message "Choose a flavor!" along with the view\nthat contains our select menu.'),(0,o.kt)("p",null,"This is the basic syntax of creating a select menu. What you create with it is up to you. You can worry\nabout making your code do amazing things, while Pycord handles the rest!"),(0,o.kt)("h2",{id:"customization"},"Customization"),(0,o.kt)("h4",{id:"select-menu-properties"},"Select Menu Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options"),"*",": A list of ",(0,o.kt)("a",{parentName:"li",href:"https://docs.pycord.dev/en/stable/api/data_classes.html#discord.SelectOption"},(0,o.kt)("inlineCode",{parentName:"a"},"discord.SelectOption"))," values. These are the options that can be selected in this menu."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"placeholder")," is the placeholder text shown in the select menu if no option is selected."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"custom_id"),": The ID of the select menu that gets received during an interaction. It is recommended not to set this to anything unless you are trying to create a persistent view."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"row"),": The relative row this select menu belongs to. A Discord component can only have 5 rows. By default, items are arranged automatically into those 5 rows. If you\u2019d like to control the relative positioning of the row then passing an index is advised. For example, row=1 will show up before row=2. Defaults to None, which is automatic ordering. The row number must be between 0 and 4 (i.e. zero indexed)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"min_values"),": The minimum number of items that must be chosen for this select menu. Defaults to 1 and must be between 1 and 25."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"max_values"),": The maximum number of items that must be chosen for this select menu. Defaults to 1 and must be between 1 and 25."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"disabled"),": Whether the select is disabled or not. Defaults to False.")),(0,o.kt)("p",null,"*"," means that the parameter is required."),(0,o.kt)("h4",{id:"select-option-properties"},"Select Option Properties"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," parameter, you pass a list of ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api/data_classes.html#discord.SelectOption"},(0,o.kt)("inlineCode",{parentName:"a"},"discord.SelectOption"))," values. This class also has a few parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"default")," (whether the option is selected by default)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"description")," (an additional description, if any)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"emoji")," (a string or an emoji object, if any)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"label")," (the name displayed to users, can be up to 100 characters)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value")," (a special value of the option, defaults to the label).")),(0,o.kt)("h2",{id:"action-rows"},"Action Rows"),(0,o.kt)("p",null,"We have discussed that Views can have 5 rows. Each row has 5 slots. A button takes a single slot, while a select menu takes up all 5 of them. This means a view can have a maximum of 5 select menus, or any possible combination of select menus and buttons."),(0,o.kt)("p",null,"The arrangement of buttons and select menus is generally adjusted by Pycord. However, it is possible to move them to specific relative rows. This is done by specifying the ",(0,o.kt)("inlineCode",{parentName:"p"},"row")," argument."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"row")," argument"),(0,o.kt)("p",{parentName:"admonition"},"The row argument specifies the relative row this select menu belongs to. A Discord component can only have 5 rows. By default, items are arranged automatically into those 5 rows. If you\u2019d like to control the relative positioning of the row then passing an index is advised. For example, row=1 will show up before row=2. Defaults to None, which is automatic ordering. The row number must be between 0 and 4 (i.e. zero-indexed).")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class MyView(discord.ui.View):\n    @discord.ui.button(label="Button 1", row=0, style=discord.ButtonStyle.primary)\n    async def first_button_callback(self, button, interaction):\n        await interaction.response.send_message("You pressed me!")\n\n    @discord.ui.button(label="Button 2", row=0, style=discord.ButtonStyle.primary)\n    async def second_button_callback(self, button, interaction):\n        await interaction.response.send_message("You pressed me!")\n\n    @discord.ui.select(\n        row = 1,\n        options = [...]\n    )\n    async def select_callback(self, select, interaction):\n        await interaction.response.send_message(f"Awesome! I like {select.values[0]} too!")\n')),(0,o.kt)("h2",{id:"disabling-select-menus"},"Disabling Select Menus"),(0,o.kt)("h3",{id:"pre-disabled-menus"},"Pre-Disabled Menus"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class MyView(discord.ui.View):\n    @discord.ui.select(\n        disabled = True, # pass disabled=True to set the button as disabled\n        options = [...]\n    )\n    async def select_callback(self, select, interaction):\n        ...\n\n@bot.command()\nasync def button(ctx):\n    await ctx.send("Press the button!", view=MyView())\n')),(0,o.kt)("h3",{id:"disabling-buttons-on-press"},"Disabling Buttons on Press"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"disabling-a-single-component",label:"Disabling a single component",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class MyView(discord.ui.View):\n  @discord.ui.select(options = [...])\n    async def select_callback(self, select, interaction):\n        select.disabled = True # set the status of the select as disabled\n        await interaction.response.edit_message(view=self) # edit the message to show the changes\n"))),(0,o.kt)(l.Z,{value:"disabling-all-children",label:"Disabling all the components of a view",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class MyView(discord.ui.View):\n    @discord.ui.select(options = [...])\n    async def first_select_callback(self, select, interaction):\n        for child in self.children: # loop through all the children of the view\n            child.disabled = True # set the component to disabled\n        await interaction.response.edit_message(view=self) # edit the message to show the changes\n\n    @discord.ui.select(options = [...])\n    async def second_select_callback(self, select, interaction):\n        for child in self.children:\n            child.disabled = True\n        await interaction.response.edit_message(view=self)\n")))),(0,o.kt)("h2",{id:"timeouts"},"Timeouts"),(0,o.kt)("p",null,"You may want a select menu to automatically stop working after a certain amount of time. This is where timeouts come in."),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"0",label:"Specifying time when creating a view object",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class MyView(discord.ui.View):\n    async def on_timeout(self):\n        for child in self.children:\n            child.disabled = True\n        await self.message.edit(content="You took too long! Disabled all the components.", view=self)\n\n    @discord.ui.select(options = [...])\n    async def select_callback(self, select, interaction):\n        ...\n\n@bot.command()\nasync def select(ctx):\n    await ctx.send(view=MyView(timeout=30)) # specify the timeout here\n'))),(0,o.kt)(l.Z,{value:"1",label:"Specifying the time when subclassing",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class MyView(discord.ui.View):\n    def __init__(self):\n        super().__init__(timeout=10) # specify the timeout here\n\n    async def on_timeout(self):\n        for child in self.children:\n            child.disabled = True\n        await self.message.edit(content="You took too long! Disabled all the components.", view=self)\n\n    @discord.ui.select(options = [...])\n    async def select_callback(self, select, interaction):\n        ...\n')))),(0,o.kt)("p",null,"Here, we loop through all the children of the view (buttons and select menus in the view) and disable\nthem. Then, we edit the message to show that the timeout was reached. "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"on_timeout")," coroutine is not present, the components will simply stop working after the specified time.")),(0,o.kt)("h2",{id:"persistent-views"},"Persistent Views"),(0,o.kt)("p",null,"Sometimes, instead of a select menu that is disabled after a certain amount of time, you want to have a\nselect menu that is always working."),(0,o.kt)("p",null,"Normally, when the bot goes offline, all of its views stop working, even if they don't have a timeout. You will be able to see the\nviews, but nothing will happen when you try to interact with them. This is a problem\nif you are trying to create a self-role system, for example. This is where persistent views come in."),(0,o.kt)("p",null,"Persistent views work forever. When the bot goes offline, the buttons will stop working. However, when the bot comes back online, the buttons will start working again."),(0,o.kt)("p",null,"In a Persistent View, the timeout must be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," and all the children in the view much have a ",(0,o.kt)("inlineCode",{parentName:"p"},"custom_id")," attribute set."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@bot.event\nasync def on_ready():\n    bot.add_view(MyView()) # Registers a View for persistent listening\n\nclass MyView(discord.ui.View):\n    def __init__(self):\n        super().__init__(timeout=None) # timeout of the view must be set to None\n\n    @discord.ui.select(custom_id="select-1", options = [...]) # a custom_id must be set\n    async def select_callback(self, select, interaction):\n        ...\n\n@bot.command()\nasync def button(ctx):\n    await ctx.send(f"View persistence status: {MyView.is_persistent(MyView())}", view=MyView())\n')),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h4",{id:"how-many-select-menus-can-i-have-in-a-message"},"How many select menus can I have in a message?"),(0,o.kt)("p",null,"Each message can have a maximum of 5 select menus. Views can have up to 5 rows, and each row has 5 slots. A button takes up one slot, while a select menu takes up all five slots."),(0,o.kt)("h4",{id:"can-i-add-more-than-one-view-to-a-message"},"Can I add more than one view to a message?"),(0,o.kt)("p",null,"No. As a Discord limitation, you can only have one view per message."),(0,o.kt)("h4",{id:"why-are-ui-components-so-confusing"},"Why are UI Components so confusing?"),(0,o.kt)("p",null,"They cannot be simple like commands. This system makes them flexible and doesn't limit your imagination. There are loads of different ways you can use UI Components. For example, you could subclass Buttons or Select Menus and add them to a view using the view's ",(0,o.kt)("inlineCode",{parentName:"p"},"add_item")," function."),(0,o.kt)("p",null,"UI Components aren't hard to use if you know Python. We recommend learning ",(0,o.kt)("a",{parentName:"p",href:"#oop"},"Object-Oriented Programming with Python"),"."),(0,o.kt)("h4",{id:"what-is-oop-what-is-subclassing"},(0,o.kt)("e",{id:"oop"},"What is OOP? What is subclassing?")),(0,o.kt)("p",null,"OOP (object-oriented programming) is a programming paradigm that allows you to create objects that have\ntheir own properties and methods. Almost everything in python is an object or a class. ",(0,o.kt)("inlineCode",{parentName:"p"},"discord.Embed")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"discord.ui.View")," are both classes. When you use ",(0,o.kt)("inlineCode",{parentName:"p"},"view = discord.ui.View()")," to create a view, you are actually creating an object of type ",(0,o.kt)("inlineCode",{parentName:"p"},"discord.ui.View"),"."),(0,o.kt)("p",null,"Subclassing is a Python OOP concept. It means that you can create a class that inherits from another class. In other words, the class that subclasses another class can inherit all the methods and attributes of that class."),(0,o.kt)("p",null,"We highly recommend you learn about basic Python concepts like classes and inheritance before you start learning Pycord."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Resources"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3schools.com/python/python_classes.asp"},"W3Schools's Guide to Python Classes & Objects")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3schools.com/python/python_inheritance.asp"},"W3Schools's Guide to Python Inheritance"))),(0,o.kt)("h4",{id:"do-select-menus-need-any-special-permissions"},"Do select menus need any special permissions?"),(0,o.kt)("p",null,"No new permissions are needed in the bot or in the server."),(0,o.kt)("admonition",{title:"Related Topics",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../application-commands/slash-commands"},"Slash Commands")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../interactions"},"Interactions Index")))))}f.isMDXComponent=!0}}]);