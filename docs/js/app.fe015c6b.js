(function(e){function t(t){for(var a,r,s=t[0],l=t[1],u=t[2],c=0,p=[];c<s.length;c++)r=s[c],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function s(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1f06249f"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"1bf5a558"}[e]+".css",o=l.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===a||c===o))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){u=p[s],c=u.getAttribute("data-href");if(c===a||c===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],d.parentNode.removeChild(d),n(i)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=s(e);var p=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",p.name="ChunkLoadError",p.type=a,p.request=r,n[1](p)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21bb":function(e,t,n){"use strict";var a=n("d63f"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{app:"",right:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},e._l(e.routes,(function(t,a){return n("v-list-item",{key:a,attrs:{link:"",to:t.path}},[n("v-list-item-action",[n("v-icon",[e._v(e._s(t.meta.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.meta.name))])],1)],1)})),1)],1),n("v-app-bar",{attrs:{app:"",color:"indigo",dark:"","hide-on-scroll":""}},[n("v-toolbar-title",[e._v(e._s(e.title))]),n("v-spacer"),n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}})],1),n("v-main",{staticClass:"grey lighten-4"},[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1)],1)},o=[],i=(n("b0c0"),n("d3b7"),n("8c4f")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("v-card",{staticClass:"filter",attrs:{flat:"",color:"blue-grey"}},[n("v-chip-group",{attrs:{column:"","active-class":"amber--text",dark:""},on:{change:e.handleFilterChange}},e._l(e.tags,(function(t){return n("v-chip",{key:t,attrs:{color:"#78909C"}},[e._v(" "+e._s(t)+" ")])})),1)],1),n("v-expansion-panels",{attrs:{accordion:"",flat:""}},e._l(e.phrases,(function(t){return n("v-expansion-panel",{key:t.id},[n("v-expansion-panel-header",[e._v(e._s(t.zh))]),n("v-expansion-panel-content",[n("p",{staticClass:"grey--text"},[e._v(e._s(t.en))]),n("p",e._l(t.tag,(function(t,a){return n("v-chip",{key:a,staticClass:"mr-2 lighten-4 amber--text text--darken-4",attrs:{label:"",small:"",color:"amber"}},[e._v(e._s(t))])})),1)])],1)})),1)],1)},l=[],u=(n("4de4"),n("caad"),n("2532"),n("4160"),["趋势","询问","工作","日常","虚拟语气条件句"]),c={};u.forEach((function(e){c[e]=e}));var p=c,d=(n("159b"),0),f=[{zh:"米娅在正常工作时间上班，朝九晚五。",en:"Mia works normal hours, from 9 to 5.",tag:[p.工作]},{zh:"他有点古怪，不过工作非常在行。",en:"He's slightly odd, but he's very good at his job.",tag:[p.工作]},{zh:"我认为你辞职是愚蠢的行为。",en:"I think quitting your job is a foolish thing to do.",tag:[p.工作]},{zh:"如果她当初更有抱负，他们就会提拔她。",en:"If she had been more ambitious, they would have promoted her.",tag:[p.虚拟语气条件句]},{zh:"我想提高我的德语流利度。",en:"I want to improve my proficiency in German.",tag:[]},{zh:"在那个行业哪些技能是重要的?",en:"What skill sets are important in that industry?",tag:[p.工作]},{zh:"他们在会计方面有一个空缺的职位。",en:"They have a post open in accounting.",tag:[p.工作]},{zh:"我想提高我在那个领域的能力。",en:"I'd like to improve my proficiency in that discipline.",tag:[p.工作]},{zh:"金融行业做得很好。",en:"The financial sector is doing very well.",tag:[p.工作]},{zh:"我目前的工作是程序员。",en:"I am currently employed as a programer.",tag:[p.工作]},{zh:"短期来看，我的目标是在一个大型的，跨国公司工作。",en:"Short term, I am aiming to work at a large, multinational company.",tag:[p.工作]},{zh:"你想喝点什么吗？",en:"Would you like something to drink?",tag:[p.日常]},{zh:"真的吗？我为你感到非常高兴！",en:"Really? I'm so happy for you!",tag:[p.日常]}];f.forEach((function(e){e.id=++d}));var h=f,m={name:"Home",components:{},data:function(){return{tags:u,phrases:h}},methods:{handleFilterChange:function(e){if(e){var t=this.tags[e];this.phrases=h.filter((function(e){return e.tag.includes(t)}))}else this.phrases=h}}},v=m,g=(n("21bb"),n("2877")),b=n("6544"),y=n.n(b),w=n("b0af"),_=n("cc20"),k=n("ef9a"),x=n("cd55"),C=n("49e2"),V=n("c865"),E=n("0393"),j=Object(g["a"])(v,s,l,!1,null,null,null),P=j.exports;y()(j,{VCard:w["a"],VChip:_["a"],VChipGroup:k["a"],VExpansionPanel:x["a"],VExpansionPanelContent:C["a"],VExpansionPanelHeader:V["a"],VExpansionPanels:E["a"]}),a["a"].use(i["a"]);var z=[{path:"/",name:"Home",component:P,meta:{name:"常用短语",icon:"mdi-account-voice"}},{path:"/dialogue",name:"Dialogue",component:function(){return n.e("about").then(n.bind(null,"0e65"))},meta:{name:"场景对话",icon:"mdi-forum"}}],I=new i["a"]({routes:z}),O=I,T={name:"LayoutsDemosBaselineFlipped",props:{source:String},data:function(){return{routes:z,drawer:null}},computed:{title:function(){return this.$route.meta.name}}},S=T,L=n("7496"),A=n("40dc"),N=n("5bc1"),B=n("a523"),M=n("132d"),D=n("8860"),H=n("da13"),F=n("1800"),$=n("5d23"),q=n("f6c4"),G=n("f774"),J=n("2fa4"),W=n("2a7f"),K=Object(g["a"])(S,r,o,!1,null,null,null),R=K.exports;y()(K,{VApp:L["a"],VAppBar:A["a"],VAppBarNavIcon:N["a"],VContainer:B["a"],VIcon:M["a"],VList:D["a"],VListItem:H["a"],VListItemAction:F["a"],VListItemContent:$["a"],VListItemTitle:$["b"],VMain:q["a"],VNavigationDrawer:G["a"],VSpacer:J["a"],VToolbarTitle:W["a"]});var U=n("f309");a["a"].use(U["a"]);var Q={},X=new U["a"](Q);a["a"].config.productionTip=!1,new a["a"]({router:O,vuetify:X,render:function(e){return e(R)}}).$mount("#app")},d63f:function(e,t,n){}});
//# sourceMappingURL=app.fe015c6b.js.map