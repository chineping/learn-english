(function(e){function t(t){for(var n,r,s=t[0],l=t[1],c=t[2],u=0,p=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={app:0},o={app:0},i=[];function s(e){return l.p+"js/"+({dialog:"dialog",grammar:"grammar"}[e]||e)+"."+{dialog:"29ab365a",grammar:"f536034c"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={dialog:1,grammar:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({dialog:"dialog",grammar:"grammar"}[e]||e)+"."+{dialog:"1bf5a558",grammar:"427541b5"}[e]+".css",o=l.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===o))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){c=p[s],u=c.getAttribute("data-href");if(u===n||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],d.parentNode.removeChild(d),a(i)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(e);var p=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(d);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",p.name="ChunkLoadError",p.type=n,p.request=r,a[1](p)}o[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var d=u;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"21bb":function(e,t,a){"use strict";var n=a("d63f"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{app:"",right:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},e._l(e.routes,(function(t,n){return a("v-list-item",{key:n,attrs:{link:"",to:t.path}},[a("v-list-item-action",[a("v-icon",[e._v(e._s(t.meta.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(t.meta.name))])],1)],1)})),1)],1),a("v-app-bar",{attrs:{app:"",color:"indigo",dark:"","hide-on-scroll":""}},[a("v-toolbar-title",[e._v(e._s(e.title))]),a("v-spacer"),a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}})],1),a("v-main",{staticClass:"grey lighten-4"},[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1)],1)},o=[],i=(a("b0c0"),a("d3b7"),a("8c4f")),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("v-card",{staticClass:"filter",attrs:{flat:"",color:"blue-grey"}},[a("v-chip-group",{attrs:{column:"","active-class":"amber--text",dark:""},on:{change:e.handleFilterChange}},e._l(e.tags,(function(t){return a("v-chip",{key:t,attrs:{color:"#78909C"}},[e._v(" "+e._s(t)+" ")])})),1)],1),a("v-expansion-panels",{attrs:{accordion:"",flat:""}},e._l(e.phrases,(function(t){return a("v-expansion-panel",{key:t.id},[a("v-expansion-panel-header",[e._v(e._s(t.zh))]),a("v-expansion-panel-content",[a("p",{staticClass:"grey--text"},[e._v(e._s(t.en))]),a("p",e._l(t.tag,(function(t,n){return a("v-chip",{key:n,staticClass:"mr-2 lighten-4 amber--text text--darken-4",attrs:{label:"",small:"",color:"amber"}},[e._v(e._s(t))])})),1)])],1)})),1)],1)},l=[],c=(a("4de4"),a("caad"),a("2532"),a("4160"),["趋势","询问","工作","日常","回答","确认","虚拟语气条件句"]),u={};c.forEach((function(e){u[e]=e}));var p=u,d=(a("159b"),0),m=[{zh:"米娅在正常工作时间上班，朝九晚五。",en:"Mia works normal hours, from 9 to 5.",tag:[p.工作]},{zh:"他有点古怪，不过工作非常在行。",en:"He's slightly odd, but he's very good at his job.",tag:[p.工作]},{zh:"我认为你辞职是愚蠢的行为。",en:"I think quitting your job is a foolish thing to do.",tag:[p.工作]},{zh:"如果她当初更有抱负，他们就会提拔她。",en:"If she had been more ambitious, they would have promoted her.",tag:[p.虚拟语气条件句]},{zh:"我想提高我的德语流利度。",en:"I want to improve my proficiency in German.",tag:[]},{zh:"在那个行业哪些技能是重要的?",en:"What skill sets are important in that industry?",tag:[p.工作]},{zh:"他们在会计方面有一个空缺的职位。",en:"They have a post open in accounting.",tag:[p.工作]},{zh:"我想提高我在那个领域的能力。",en:"I'd like to improve my proficiency in that discipline.",tag:[p.工作]},{zh:"金融行业做得很好。",en:"The financial sector is doing very well.",tag:[p.工作]},{zh:"我目前的工作是程序员。",en:"I am currently employed as a programer.",tag:[p.工作]},{zh:"短期来看，我的目标是在一个大型的，跨国公司工作。",en:"Short term, I am aiming to work at a large, multinational company.",tag:[p.工作]},{zh:"你想喝点什么吗？",en:"Would you like something to drink?",tag:[p.日常]},{zh:"真的吗？我为你感到非常高兴！",en:"Really? I'm so happy for you!",tag:[p.日常]},{zh:"他辞去了银行的职位并且毁掉了他自己有希望的前程。",en:"He handed in his notice at the bank and ruined his promising career.",tag:[p.工作]},{zh:"是的，我就是这个意思。",en:"Yes, that's exactly what I mean.",tag:[p.回答,p.确认]},{zh:"是的，理解正确。",en:"Yes, that's correct.",tag:[p.回答,p.确认]},{zh:"那么，你的意思是我们如今遇到大问题了。",en:"So, what you're saying is, we've got a big problem on our hands.",tag:[p.确认]}];m.forEach((function(e){e.id=++d}));var h=m,f={name:"Home",components:{},data:function(){return{tags:c,phrases:h}},methods:{handleFilterChange:function(e){if(void 0!==e){var t=this.tags[e];this.phrases=h.filter((function(e){return e.tag.includes(t)}))}else this.phrases=h}}},g=f,v=(a("21bb"),a("2877")),b=a("6544"),y=a.n(b),w=a("b0af"),_=a("cc20"),k=a("ef9a"),x=a("cd55"),C=a("49e2"),V=a("c865"),z=a("0393"),E=Object(v["a"])(g,s,l,!1,null,null,null),j=E.exports;y()(E,{VCard:w["a"],VChip:_["a"],VChipGroup:k["a"],VExpansionPanel:x["a"],VExpansionPanelContent:C["a"],VExpansionPanelHeader:V["a"],VExpansionPanels:z["a"]}),n["a"].use(i["a"]);var I=[{path:"/",name:"Home",component:j,meta:{name:"常用短语",icon:"mdi-account-voice"}},{path:"/dialogue",name:"Dialogue",component:function(){return a.e("dialog").then(a.bind(null,"0e65"))},meta:{name:"场景对话",icon:"mdi-forum"}},{path:"/grammar",name:"Grammar",component:function(){return a.e("grammar").then(a.bind(null,"42c5"))},meta:{name:"常用语法",icon:"mdi-book"}}],P=new i["a"]({routes:I}),O=P,S={name:"LayoutsDemosBaselineFlipped",props:{source:String},data:function(){return{routes:I,drawer:null}},computed:{title:function(){return this.$route.meta.name}}},T=S,L=a("7496"),A=a("40dc"),N=a("5bc1"),B=a("a523"),H=a("132d"),M=a("8860"),D=a("da13"),F=a("1800"),$=a("5d23"),q=a("f6c4"),G=a("f774"),J=a("2fa4"),W=a("2a7f"),Y=Object(v["a"])(T,r,o,!1,null,null,null),K=Y.exports;y()(Y,{VApp:L["a"],VAppBar:A["a"],VAppBarNavIcon:N["a"],VContainer:B["a"],VIcon:H["a"],VList:M["a"],VListItem:D["a"],VListItemAction:F["a"],VListItemContent:$["a"],VListItemTitle:$["b"],VMain:q["a"],VNavigationDrawer:G["a"],VSpacer:J["a"],VToolbarTitle:W["a"]});var R=a("f309");n["a"].use(R["a"]);var U={},Q=new R["a"](U);n["a"].config.productionTip=!1,new n["a"]({router:O,vuetify:Q,render:function(e){return e(K)}}).$mount("#app")},d63f:function(e,t,a){}});
//# sourceMappingURL=app.920d12e0.js.map