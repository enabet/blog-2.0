(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{171:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"b",function(){return d}),n.d(t,"a",function(){return c}),n.d(t,"e",function(){return l}),n.d(t,"d",function(){return m});n(14),n(22),n(17),n(59),n(2),n(60);var r=n(176);n(175),n(13);function o(e){var t=Math.round(e/10);return"".concat(new Array(t||1).fill("☕️").join("")," ").concat(e," min read")}function d(e){var t;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);var n=["en-EN",{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(t=e).toLocaleDateString.apply(t,Object(r.a)(n))}function c(e,t,n){var r;return function(){var o=this,d=arguments,c=function(){r=null,n||e.apply(o,d)},l=n&&!r;clearTimeout(r),r=setTimeout(c,t),l&&e.apply(o,d)}}function l(e){return e&&e.replace(/"src":(?:[^=>][^"]*","data-src"|[^=>"]*)/gi,'"src"')}function m(e){var t=e.title,title=void 0===t?"":t,n=e.description,o=void 0===n?"":n,d=e.url,c=void 0===d?"":d,l=e.imageUrl,m=void 0===l?"":l,f=e.ampUrl,h=void 0===f?"":f,v=e.publishedDate,_=void 0===v?new Date:v,x=e.articleSection,y=void 0===x?"Technology":x,w=e.withAmpHtml,S=void 0!==w&&w,k=e.withCanonical,N=void 0!==k&&k,j=e.withArticle,E=void 0!==j&&j,meta=[{hid:"description",name:"description",content:o},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:title},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:o},{hid:"og:url",property:"og:url",content:c},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:description",name:"twitter:description",content:o},{hid:"twitter:url",name:"twitter:url",content:c}],C=[{hid:"og:image",property:"og:image",content:m},{hid:"og:image:secure_url",property:"og:image:secure_url",content:m},{hid:"twitter:image:src",name:"twitter:image:src",content:m}],D=[{hid:"og:type",property:"og:type",content:"article"},{hid:"article:published_time",property:"article:published_time",content:new Date(_).toISOString()},{hid:"article:section",property:"article:section",content:y}];m&&(meta=[].concat(Object(r.a)(meta),C)),E&&(meta=[].concat(Object(r.a)(meta),D));var link=[];return S&&(link=[{hid:"amphtml",rel:"amphtml",href:h}]),N&&(link=[{hid:"canonical",rel:"canonical",href:c}]),{title:title,meta:meta,link:link}}},172:function(e,t,n){"use strict";var r=n(171),o=n(13);t.a={data:function(){return{formatReadingTime:r.c,formatPostDate:r.b,productionUrl:o.h,ENABLE_ADS:o.g,ADS_CLIENT:o.a}}}},174:function(e,t,n){var map={"./":[42,9],"./archives/blog-2-0-in-nuxtjs/index.md":[208,7,60],"./categories":[80,9],"./categories.js":[80,9],"./drafts":[78,9],"./drafts/":[78,9],"./drafts/cara-saya-belajar-teknologi-baru/index.md":[189,7,4],"./drafts/every-working-environtment-is-unique/en.md":[209,7,61],"./drafts/every-working-environtment-is-unique/index.md":[190,7,5],"./drafts/index":[78,9],"./drafts/index.js":[78,9],"./drafts/learn-programming-for-non-tech/en.md":[210,7,62],"./drafts/learn-programming-for-non-tech/index.md":[191,7,6],"./drafts/tokopedia-tech-interview-process/en.md":[211,7,63],"./drafts/tokopedia-tech-interview-process/index.md":[192,7,7],"./ghibah":[79,9],"./ghibah/":[79,9],"./ghibah/01-code-ownership/index.md":[193,7,8],"./ghibah/02-gaji-programmer/index.md":[194,7,9],"./ghibah/03-pindah-kerja/index.md":[195,7,10],"./ghibah/04-cto-gadungan/index.md":[196,7,11],"./ghibah/index":[79,9],"./ghibah/index.js":[79,9],"./index":[42,9],"./index.js":[42,9],"./node-index":[173,7,3],"./node-index.js":[173,7,3],"./published/3-years-3-different-company/en.md":[197,7,12],"./published/3-years-3-different-company/index.md":[178,7,13],"./published/create-awesome-blog-with-gridsome/en.md":[198,7,14],"./published/create-awesome-blog-with-gridsome/index.md":[179,7,15],"./published/create-simple-like-button-using-firebase-rtdb/en.md":[199,7,16],"./published/create-simple-like-button-using-firebase-rtdb/index.md":[180,7,17],"./published/eslint-formatter-html-extended/en.md":[200,7,18],"./published/eslint-formatter-html-extended/index.md":[181,7,19],"./published/experience-in-become-fasilitator-gdk-mws-2018/en.md":[201,7,20],"./published/experience-in-become-fasilitator-gdk-mws-2018/index.md":[182,7,21],"./published/generate-amp-pages-in-nuxtjs/en.md":[202,7,22],"./published/generate-amp-pages-in-nuxtjs/index.md":[183,7,23],"./published/lesson-learned-from-building-tokopedia-anniv-microsite/en.md":[203,7,24],"./published/lesson-learned-from-building-tokopedia-anniv-microsite/index.md":[184,7,25],"./published/migrate-nuxt-to-typescript/en.md":[204,7,26],"./published/migrate-nuxt-to-typescript/index.md":[185,7,27],"./published/tasting-reasonml-for-react/en.md":[205,7,28],"./published/tasting-reasonml-for-react/index.md":[186,7,29],"./published/the-art-of-deleting-and-updating-the-code/en.md":[206,7,30],"./published/the-art-of-deleting-and-updating-the-code/index.md":[187,7,31],"./published/unit-testing-guide-in-vuejs/en.md":[207,7,32],"./published/unit-testing-guide-in-vuejs/index.md":[188,7,33]};function r(e){if(!n.o(map,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=map[e],r=t[0];return Promise.all(t.slice(2).map(n.e)).then(function(){return n.t(r,t[1])})}r.keys=function(){return Object.keys(map)},r.id=174,e.exports=r},175:function(e,t,n){var r=n(7);r(r.P,"Array",{fill:n(177)}),n(61)("fill")},176:function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var i=0,t=new Array(e.length);i<e.length;i++)t[i]=e[i];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",function(){return r})},177:function(e,t,n){"use strict";var r=n(23),o=n(107),d=n(18);e.exports=function(e){for(var t=r(this),n=d(t.length),c=arguments.length,l=o(c>1?arguments[1]:void 0,n),m=c>2?arguments[2]:void 0,f=void 0===m?n:o(m,n);f>l;)t[l++]=e;return t}},212:function(e,t,n){"use strict";n(214);var r=n(171),o={name:"MetaData",props:{metaDate:{type:String,default:""},metaMinuteToRead:{type:Number,default:0},isShowStats:{type:Boolean,default:!1},statsLikes:{type:Number,default:0},statsRead:{type:Number,default:0}},data:function(){return{formatReadingTime:r.c,formatPostDate:r.b}}},d=n(3),component=Object(d.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"meta meta--desktop"},[n("small",{staticClass:"meta__date"},[e._v("\n      📆 "+e._s(e.formatPostDate(e.metaDate))+"\n    ")]),e._v(" "),n("small",{staticClass:"dot"},[e._v(" • ")]),e._v(" "),n("small",{staticClass:"meta__read"},[e._v(e._s(e.formatReadingTime(e.metaMinuteToRead)))]),e._v(" "),e.isShowStats?n("small",{staticClass:"dot"},[e._v(" • ")]):e._e(),e._v(" "),e.isShowStats?n("small",[e._v("\n      ❤️ "+e._s(e.statsLikes)+" likes\n    ")]):e._e(),e._v(" "),e.isShowStats?n("small",{staticClass:"dot"},[e._v(" • ")]):e._e(),e._v(" "),e.isShowStats?n("small",[e._v("\n      📓 "+e._s(e.statsRead)+" read\n    ")]):e._e()]),e._v(" "),n("div",{staticClass:"meta meta--mobile"},[n("div",[n("small",{staticClass:"meta__date"},[e._v("\n        📆 "+e._s(e.formatPostDate(e.metaDate))+"\n      ")]),e._v(" "),n("small",{staticClass:"dot"},[e._v(" • ")]),e._v(" "),n("small",{staticClass:"meta__read"},[e._v(e._s(e.formatReadingTime(e.metaMinuteToRead)))])]),e._v(" "),n("div",{staticStyle:{"margin-top":".5em"}},[e.isShowStats?n("small",[e._v("\n        ❤️ "+e._s(e.statsLikes)+" likes\n      ")]):e._e(),e._v(" "),e.isShowStats?n("small",{staticClass:"dot"},[e._v(" • ")]):e._e(),e._v(" "),e.isShowStats?n("small",[e._v("\n        📓 "+e._s(e.statsRead)+" read\n      ")]):e._e()])])])},[],!1,null,null,null);t.a=component.exports},214:function(e,t,n){"use strict";var r=n(5),o=n(19),d=n(27),c=n(108),l=n(62),m=n(11),f=n(43).f,h=n(63).f,v=n(9).f,_=n(215).trim,x=r.Number,y=x,w=x.prototype,S="Number"==d(n(81)(w)),k="trim"in String.prototype,N=function(e){var t=l(e,!1);if("string"==typeof t&&t.length>2){var n,r,o,d=(t=k?t.trim():_(t,3)).charCodeAt(0);if(43===d||45===d){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===d){switch(t.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+t}for(var code,c=t.slice(2),i=0,m=c.length;i<m;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+t};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof x&&(S?m(function(){w.valueOf.call(n)}):"Number"!=d(n))?c(new y(N(t)),n,x):N(t)};for(var j,E=n(8)?f(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;E.length>C;C++)o(y,j=E[C])&&!o(x,j)&&v(x,j,h(y,j));x.prototype=w,w.constructor=x,n(12)(r,"Number",x)}},215:function(e,t,n){var r=n(7),o=n(26),d=n(11),c=n(216),l="["+c+"]",m=RegExp("^"+l+l+"*"),f=RegExp(l+l+"*$"),h=function(e,t,n){var o={},l=d(function(){return!!c[e]()||"​"!="​"[e]()}),m=o[e]=l?t(v):c[e];n&&(o[n]=m),r(r.P+r.F*l,"String",o)},v=h.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(m,"")),2&t&&(e=e.replace(f,"")),e};e.exports=h},216:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},234:function(e,t,n){var map={"./01-code-ownership/index.md":[193,8],"./02-gaji-programmer/index.md":[194,9],"./03-pindah-kerja/index.md":[195,10],"./04-cto-gadungan/index.md":[196,11]};function r(e){if(!n.o(map,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=map[e],r=t[0];return n.e(t[1]).then(function(){return n.t(r,7)})}r.keys=function(){return Object.keys(map)},r.id=234,e.exports=r},235:function(e,t,n){var content=n(253);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("77e088d1",content,!0,{sourceMap:!1})},252:function(e,t,n){"use strict";var r=n(235);n.n(r).a},253:function(e,t,n){(e.exports=n(24)(!1)).push([e.i,".pages__title[data-v-fa073b9a]{margin-bottom:.25em}.pages__date[data-v-fa073b9a]{color:var(--textSubtitle)}.pages__item[data-v-fa073b9a]{margin-bottom:3.5em}\n",""])},288:function(e,t,n){"use strict";n.r(t);n(22),n(17),n(59),n(14);var r,o=n(2),d=n(79),c=n(212),l=n(172),m={name:"HomepageGhibah",layout:"homepage",components:{MetaData:c.a},mixins:[l.a],asyncData:(r=Object(o.a)(regeneratorRuntime.mark(function e(t){var r,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){return(c=Object(o.a)(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(234)("./".concat(t,"/index.md"));case 2:return r=e.sent,e.abrupt("return",r.attributes);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)},r=function(e){return c.apply(this,arguments)},t.store,e.abrupt("return",Promise.all(d.default.data.map(function(e){return r(e)})).then(function(e){return{metas:e}}));case 4:case"end":return e.stop()}},e)})),function(e){return r.apply(this,arguments)})},f=(n(252),n(3)),component=Object(f.a)(m,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"pages"},e._l(e.metas,function(meta){return n("div",{key:meta.title,staticClass:"pages__item"},[n("nuxt-link",{staticClass:"pages__link",attrs:{to:"/ghibahprogrammer/"+meta.slug+"/",title:meta.title}},[n("h2",{staticClass:"pages__title"},[e._v("\n        "+e._s(meta.title)+"\n      ")])]),e._v(" "),n("MetaData",{attrs:{"meta-date":meta.date,"meta-minute-to-read":meta.minute2read}}),e._v(" "),n("img",{directives:[{name:"lazyload",rawName:"v-lazyload"}],staticClass:"pages__cover",attrs:{src:"/images/placeholder-1x1.png","data-src":meta.cover,alt:meta.title}}),e._v(" "),n("div",[n("p",[e._v("\n        "+e._s(meta.description)+"\n      ")])])],1)}),0)},[],!1,null,"fa073b9a",null);t.default=component.exports}}]);