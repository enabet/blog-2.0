(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{167:function(t,e,n){"use strict";n.d(e,"c",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"a",function(){return c}),n.d(e,"e",function(){return l}),n.d(e,"d",function(){return d});var r="https://www.mazipan.xyz",o="true",c="ca-pub-5442972248172818",l=function(t){return"".concat("https://www.mazipan.xyz","/").concat(t)},d=function(t){return"".concat("https://www.mazipan.xyz","/category/").concat(t)}},168:function(t,e,n){"use strict";n.d(e,"c",function(){return o}),n.d(e,"b",function(){return c}),n.d(e,"a",function(){return l}),n.d(e,"e",function(){return d}),n.d(e,"d",function(){return m});n(57);var r=n(170);n(169);function o(t){var e=Math.round(t/10);return"".concat(new Array(e||1).fill("☕️").join("")," ").concat(t," min read")}function c(t){var e;if("function"!=typeof Date.prototype.toLocaleDateString)return t;t=new Date(t);var n=["en-EN",{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(e=t).toLocaleDateString.apply(e,Object(r.a)(n))}function l(t,e,n){var r;return function(){var o=this,c=arguments,l=function(){r=null,n||t.apply(o,c)},d=n&&!r;clearTimeout(r),r=setTimeout(l,e),d&&t.apply(o,c)}}function d(t){return t&&t.replace(/"src":(?:[^=>][^"]*","data-src"|[^=>"]*)/gi,'"src"')}function m(t){var e=t.title,title=void 0===e?"":e,n=t.description,o=void 0===n?"":n,c=t.url,l=void 0===c?"":c,d=t.imageUrl,m=void 0===d?"":d,h=t.ampUrl,f=void 0===h?"":h,v=t.publishedDate,_=void 0===v?new Date:v,w=t.articleSection,y=void 0===w?"Technology":w,k=t.withAmpHtml,S=void 0!==k&&k,C=t.withCanonical,D=void 0!==C&&C,x=t.withArticle,O=void 0!==x&&x,meta=[{hid:"description",name:"description",content:o},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:title},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:o},{hid:"og:url",property:"og:url",content:l},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:description",name:"twitter:description",content:o},{hid:"twitter:url",name:"twitter:url",content:l}],j=[{hid:"og:image",property:"og:image",content:m},{hid:"og:image:secure_url",property:"og:image:secure_url",content:m},{hid:"twitter:image:src",name:"twitter:image:src",content:m}],L=[{hid:"og:type",property:"og:type",content:"article"},{hid:"article:published_time",property:"article:published_time",content:new Date(_).toISOString()},{hid:"article:section",property:"article:section",content:y}];m&&(meta=[].concat(Object(r.a)(meta),j)),O&&(meta=[].concat(Object(r.a)(meta),L));var link=[];return S&&(link=[{hid:"amphtml",rel:"amphtml",href:f}]),D&&(link=[{hid:"canonical",rel:"canonical",href:l}]),{title:title,meta:meta,link:link}}},171:function(t,e,n){"use strict";n(173);var r=n(168),o={name:"MetaData",props:{metaDate:{type:String,default:""},metaMinuteToRead:{type:Number,default:0},isShowStats:{type:Boolean,default:!1},statsLikes:{type:Number,default:0},statsRead:{type:Number,default:0}},data:function(){return{formatReadingTime:r.c,formatPostDate:r.b}}},c=n(3),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"meta meta--desktop"},[n("small",{staticClass:"meta__date"},[t._v("\n      📆 "+t._s(t.formatPostDate(t.metaDate))+"\n    ")]),t._v(" "),n("small",{staticClass:"dot"},[t._v(" • ")]),t._v(" "),n("small",{staticClass:"meta__read"},[t._v(t._s(t.formatReadingTime(t.metaMinuteToRead)))]),t._v(" "),t.isShowStats?n("small",{staticClass:"dot"},[t._v(" • ")]):t._e(),t._v(" "),t.isShowStats?n("small",[t._v("\n      ❤️ "+t._s(t.statsLikes)+" likes\n    ")]):t._e(),t._v(" "),t.isShowStats?n("small",{staticClass:"dot"},[t._v(" • ")]):t._e(),t._v(" "),t.isShowStats?n("small",[t._v("\n      📓 "+t._s(t.statsRead)+" read\n    ")]):t._e()]),t._v(" "),n("div",{staticClass:"meta meta--mobile"},[n("div",[n("small",{staticClass:"meta__date"},[t._v("\n        📆 "+t._s(t.formatPostDate(t.metaDate))+"\n      ")]),t._v(" "),n("small",{staticClass:"dot"},[t._v(" • ")]),t._v(" "),n("small",{staticClass:"meta__read"},[t._v(t._s(t.formatReadingTime(t.metaMinuteToRead)))])]),t._v(" "),n("div",{staticStyle:{"margin-top":".5em"}},[t.isShowStats?n("small",[t._v("\n        ❤️ "+t._s(t.statsLikes)+" likes\n      ")]):t._e(),t._v(" "),t.isShowStats?n("small",{staticClass:"dot"},[t._v(" • ")]):t._e(),t._v(" "),t.isShowStats?n("small",[t._v("\n        📓 "+t._s(t.statsRead)+" read\n      ")]):t._e()])])])},[],!1,null,null,null);e.a=component.exports},175:function(t,e,n){"use strict";var r=n(189),o=n.n(r),c=(n(190),n(191),n(192),n(193),n(194),n(195),n(196),n(197),n(198),n(199),n(200),{name:"ContentParser",props:{renderFn:{type:String,default:""},staticRenderFn:{type:String,default:""}},created:function(){this.templateRender=new Function(this.renderFn)(),this.$options.staticRenderFns=new Function(this.staticRenderFn)()},mounted:function(){o.a.highlightAll()},render:function(t){return this.templateRender?this.templateRender():t("div","Rendering")}}),l=n(3),component=Object(l.a)(c,void 0,void 0,!1,null,null,null);e.a=component.exports},178:function(t,e,n){"use strict";var r={name:"EditContentNav",props:{slug:{type:String,default:""},isDraft:{type:Boolean,default:!1}},computed:{markdownLocation:function(){return this.isDraft?"https://github.com/mazipan/blog-2.0/edit/master/contents/drafts/".concat(this.slug,"/index.md"):"https://github.com/mazipan/blog-2.0/edit/master/contents/published/".concat(this.slug,"/index.md")}}},o=n(3),component=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt-link",{attrs:{to:"/"}},[this._v("\n    🏠 Back to Home\n  ")]),this._v(" "),e("span",{staticClass:"dot"},[this._v(" • ")]),this._v(" "),e("a",{attrs:{target:"_blank",rel:"noopener",title:"Edit in Github",href:this.markdownLocation}},[this._v("\n    📝 Edit in Github\n  ")])],1)},[],!1,null,null,null);e.a=component.exports},188:function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"a",function(){return c});var r=n(167);function o(t){var e=t.category,title=t.title,n=t.slug;return{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:r.c},{"@type":"ListItem",position:2,name:e,item:Object(r.d)(e)},{"@type":"ListItem",position:3,name:title,item:Object(r.e)(n)}]}}function c(t){var e=t.slug,title=t.title,n=t.cover,o=t.date,desc=t.desc;return{"@context":"https://schema.org","@type":"NewsArticle",mainEntityOfPage:{"@type":"WebPage","@id":Object(r.e)(e)},headline:title,image:[n],datePublished:new Date(o).toISOString(),dateModified:new Date(o).toISOString(),author:{"@type":"Person",name:"Irfan Maulana"},publisher:{"@type":"Organization",name:"mazipan",logo:{"@type":"ImageObject",url:"".concat(r.c,"/favicon-192x192.png")}},description:desc}}},211:function(t,e,n){var map={"./create-awesome-blog-with-gridsome/en.md":[235,37],"./create-simple-like-button-using-firebase-rtdb/en.md":[236,39],"./eslint-formatter-html-extended/en.md":[237,41],"./experience-in-become-fasilitator-gdk-mws-2018/en.md":[238,43],"./generate-amp-pages-in-nuxtjs/en.md":[239,45],"./migrate-nuxt-to-typescript/en.md":[240,47],"./tasting-reasonml-for-react/en.md":[241,49],"./the-art-of-deleting-and-updating-the-code/en.md":[242,51],"./unit-testing-guide-in-vuejs/en.md":[243,53]};function r(t){if(!n.o(map,t))return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e});var e=map[t],r=e[0];return n.e(e[1]).then(function(){return n.t(r,7)})}r.keys=function(){return Object.keys(map)},r.id=211,t.exports=r},213:function(t,e,n){"use strict";var r=n(168);e.a={head:function(){var title="".concat(this.meta.title),t="".concat(this.meta.description),e="ID"===this.lang?"/":"/en",n="".concat(this.productionUrl,"/").concat(this.meta.slug).concat(e),o="".concat(this.productionUrl,"/amp/").concat(this.meta.slug).concat(e),c=this.meta.cover||"".concat(this.productionUrl,"/icon.png");return Object(r.d)({title:title,description:t,url:n,ampUrl:o,imageUrl:c,date:this.meta.date,withAmpHtml:!0,withArticle:!0})}}},214:function(t,e,n){"use strict";n(173);var r=n(29),o=n(216),c=n.n(o),l=n(217),d=n.n(l),m=n(218),h=n.n(m),f=n(219),v=n.n(f),_=n(220),w=n.n(_),y=n(171),k=n(175),S=n(178),C=n(168),D=n(188),x=n(51),O=n(221);function j(t){return"claps/".concat(t)}function L(t){return"pageview/".concat(t)}function I(t,e){var n=j(e);return t.database().ref(n)}function R(t,e){var n=L(e);return t.database().ref(n)}function E(t,e){t.database().ref().update(e)}n(225);var A=n(167),T=null,P={name:"PostDetailPartial",components:{FacebookIcon:c.a,TwitterIcon:d.a,HeartIcon:h.a,ShareIcon:v.a,ChatBoxesIcon:w.a,MetaData:y.a,EditContentNav:S.a,ContentParser:k.a},props:{lang:{type:String,default:"ID"},meta:{type:Object,default:function(){}},renderFn:{type:String,default:""},staticRenderFn:{type:String,default:""}},data:function(){return{productionUrl:"https://www.mazipan.xyz",formatReadingTime:C.c,formatPostDate:C.b,youClapped:0,claps:0,hits:0,isSupportWebshare:!1,ENABLE_ADS:A.b,ADS_CLIENT:A.a}},computed:{jsonLdBreadcrumb:function(){return Object(D.b)({category:this.meta.categories[0],title:this.meta.title,slug:this.meta.slug})},jsonLdArtcile:function(){return Object(D.a)({category:this.meta.categories[0],title:this.meta.title,slug:this.meta.slug,cover:this.meta.cover,date:this.meta.date,desc:this.meta.description})},encodedTitle:function(){return encodeURIComponent("".concat(this.meta.title))},encodedDesc:function(){return encodeURIComponent("".concat(this.meta.description))},encodedUrl:function(){return encodeURIComponent("".concat(this.productionUrl,"/").concat(this.meta.slug,"?utm_source=sosial-share"))},fbLinkShare:function(){return"https://www.facebook.com/sharer/sharer.php?u=".concat(this.encodedUrl,"&title=").concat(this.encodedTitle,"&description=").concat(this.encodedDesc,"&quote=").concat(this.encodedDesc)},twitterLinkShare:function(){return"https://twitter.com/intent/tweet?text=".concat(this.encodedTitle,"-").concat(this.encodedDesc,"&url=").concat(this.encodedUrl,"&via=maz_ipan")},twitterLinkDiscuss:function(){return"https://mobile.twitter.com/search?q=".concat(this.encodedUrl)}},mounted:function(){var t=this;window.navigator.share&&(this.isSupportWebshare=!0),O.apps.length||O.initializeApp({apiKey:"AIzaSyAjEDtmUc9C_mogAdlXPA3gOXwqQnJJP5c",authDomain:"mazipan-blog.firebaseapp.com",databaseURL:"https://mazipan-blog.firebaseio.com",projectId:"mazipan-blog",storageBucket:"",messagingSenderId:"331001770357"}),function(t,e,n){R(t,e).once("value",n)}(T=O,this.meta.slug,function(e){if(e.val())t.hits=Number(e.val()),function(t,e,n){R(t,e).set(n)}(T,t.meta.slug,t.hits+1);else{var n=Object(r.a)({},L(t.meta.slug),1);E(T,n)}}),function(t,e,n){I(t,e).once("value",n)}(T,this.meta.slug,function(e){if(e.val())t.claps=Number(e.val());else{var n=Object(r.a)({},j(t.meta.slug),1);E(T,n)}}),function(t,e,n){I(t,e).on("value",n)}(T,this.meta.slug,function(e){Object(C.a)(function(){t.claps=e.val()},300)()})},methods:{trackSocialShare:function(t){Object(x.c)(this.meta.slug,t)},onClickShare:function(){var title="".concat(this.meta.title),t="".concat(this.meta.description),e="/".concat(this.meta.slug);Object(x.d)(this.meta.slug);var data={title:title,text:"".concat(t),url:e};window.navigator.share&&window.navigator.share(data)},onClickLike:function(){Object(x.b)(this.meta.slug),this.youClapped+=1,function(t,e,n){I(t,e).set(n)}(T,this.meta.slug,this.claps+1)}}},U=n(3),component=Object(U.a)(P,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"pages"},[n("h1",{staticClass:"pages__title pages__title--small text-title"},[t._v("\n    "+t._s(t.meta.title)+"\n  ")]),t._v(" "),"ID"===t.lang?n("div",{staticClass:"pages__lang"},[n("nuxt-link",{attrs:{to:"/"+t.meta.slug+"/en?utm_source=lang"}},[t._v("\n      Switch to 🇬🇧 language\n    ")])],1):t._e(),t._v(" "),"EN"===t.lang?n("div",{staticClass:"pages__lang"},[n("nuxt-link",{attrs:{to:"/"+t.meta.slug+"/?utm_source=lang"}},[t._v("\n      Switch to 🇮🇩 language\n    ")])],1):t._e(),t._v(" "),n("MetaData",{attrs:{"meta-date":t.meta.date,"meta-minute-to-read":t.meta.minute2read,"is-show-stats":!0,"stats-likes":t.claps,"stats-read":t.hits}}),t._v(" "),n("div",{staticClass:"pages__tags pages__tags--spacetop"},t._l(t.meta.categories,function(e){return n("div",{key:e,staticClass:"pages__tag"},[n("nuxt-link",{attrs:{to:"/category/"+e+"?utm_source=home",title:e}},[t._v("\n        #"+t._s(e)+"\n      ")])],1)}),0),t._v(" "),n("div",{staticClass:"pages__content"},[n("ContentParser",{attrs:{"render-fn":t.renderFn,"static-render-fn":t.staticRenderFn}}),t._v(" "),n("EditContentNav",{attrs:{slug:t.meta.slug}})],1),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"pages__footer"},[t._v("\n    🚨Do you like this article? help me to click ❤️ button, share to your followers and subscribe the newsletter.\n    "),n("div",{staticClass:"block-wrap"},[t.isSupportWebshare?n("div",{staticClass:"share"},[n("a",{staticClass:"share-btn",attrs:{title:"Share this article"},on:{click:t.onClickShare}},[n("ShareIcon",{attrs:{w:"24px",h:"24px"}})],1),t._v(" "),n("a",{staticClass:"like-btn",attrs:{title:"Like this article"},on:{click:t.onClickLike}},[n("HeartIcon",{attrs:{w:"24px",h:"24px"}}),t._v("\n            "+t._s(t.claps)+"\n        ")],1)]):n("div",{staticClass:"share"},[n("a",{staticClass:"share-btn",attrs:{title:"Share to facebook",href:t.fbLinkShare,target:"_blank",rel:"noopener"},nativeOn:{click:function(e){return t.trackSocialShare("Facebook")}}},[n("FacebookIcon",{attrs:{w:"24px",h:"24px"}})],1),t._v(" "),n("a",{staticClass:"share-btn",attrs:{title:"Share to twitter",href:t.twitterLinkShare,target:"_blank",rel:"noopener"},nativeOn:{click:function(e){return t.trackSocialShare("Twitter")}}},[n("TwitterIcon",{attrs:{w:"24px",h:"24px"}})],1),t._v(" "),n("a",{staticClass:"share-btn",attrs:{title:"Discuss on twitter",href:t.twitterLinkDiscuss,target:"_blank",rel:"noopener"},nativeOn:{click:function(e){return t.trackSocialShare("Twitter Discuss")}}},[n("ChatBoxesIcon",{attrs:{w:"24px",h:"24px"}})],1),t._v(" "),n("a",{staticClass:"like-btn",attrs:{title:"Like this article"},on:{click:t.onClickLike}},[n("HeartIcon",{attrs:{w:"24px",h:"24px"}}),t._v("\n            "+t._s(t.claps)+"\n        ")],1)])])]),t._v(" "),t.ENABLE_ADS?n("InArticleAdsense",{attrs:{"data-ad-client":t.ADS_CLIENT,"data-ad-slot":"7974047383"}}):t._e(),t._v(" "),n("script",{attrs:{type:"application/ld+json"},domProps:{innerHTML:t._s(t.jsonLdBreadcrumb)}}),t._v(" "),n("script",{attrs:{type:"application/ld+json"},domProps:{innerHTML:t._s(t.jsonLdArtcile)}})],1)},[],!1,null,null,null);e.a=component.exports},281:function(t,e,n){"use strict";n.r(e);n(13);var r,o=n(2),c=n(214),l=n(213),d=n(167),m={name:"SlugPageEn",components:{PostDetail:c.a},mixins:[l.a],data:function(){return{productionUrl:d.c}},asyncData:(r=Object(o.a)(regeneratorRuntime.mark(function t(e){var r,o,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,t.next=3,n(211)("./".concat(r.slug,"/en.md"));case 3:return o=t.sent,c=o.attributes,t.abrupt("return",{lang:"EN",meta:c,renderFn:o.vue.render,staticRenderFn:o.vue.staticRenderFns});case 6:case"end":return t.stop()}},t)})),function(t){return r.apply(this,arguments)})},h=n(3),component=Object(h.a)(m,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"postdetail-EN"},[e("PostDetail",{attrs:{lang:"EN",meta:this.meta,"render-fn":this.renderFn,"static-render-fn":this.staticRenderFn}})],1)},[],!1,null,null,null);e.default=component.exports}}]);