(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{BDjo:function(e,t,a){"use strict";a("q1tI");var n=a("hvxB"),r=a("qKvR");t.a=function(e){var t=e.icon,a=e.children;return Object(r.a)("h2",{className:"text-4xl font-bold leading-8 mb-4"},Object(r.a)(n.a,{icon:t,className:"mr-1"}),a)}},EtBP:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a("wHSu"),o=a("lqo/"),c=a("S3iu"),i=a("I/Ru"),l=a("BDjo"),s=a("egrm"),u=a("VreA"),b=a("qKvR");t.default=function(e){var t=e.location,a=Object(u.h)(),d=Object(u.i)(),m=Object(n.useState)(!1),p=m[0],g=m[1],O=Object(n.useState)(!1),j=O[0],f=O[1],v={title:"タグ一覧",description:"",location:t.pathname,breadcrumbItems:[{label:"ホーム",url:"/",icon:r.n},{label:"タグ一覧",url:t.pathname,icon:r.t}],isOpenMenu:p,setIsOpenMenu:g,isOpenSearch:j,setIsOpenSearch:f};return Object(b.a)(o.a.Provider,{value:v},Object(b.a)(c.a,null),Object(b.a)(i.a,{pattern:"one-column"},Object(b.a)(l.a,{icon:r.t},"タグ一覧"),Object(b.a)("section",{className:"mt-8"},Object(b.a)(s.b,null,d.map((function(e){var t=a.find((function(t){return t.node.fields.name===e.fieldValue}));return Object(b.a)(s.a,{key:t.node.id,item:t,total:e.totalCount,icon:r.s})}))))))}},egrm:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a("q1tI");var n=a("qKvR"),r=a("Wbzz"),o=a("hvxB"),c=function(e){var t=e.item,a=e.total,c=e.icon;return Object(n.a)("li",null,Object(n.a)("h3",null,Object(n.a)(r.Link,{to:t.node.fields.slug,className:"inline-flex items-center text-xl border-gray-700 border-b pb-1 font-semibold group"},Object(n.a)("span",{className:" text-gray-800 group-hover:text-gray-900"},Object(n.a)(o.a,{icon:c,className:"mr-1"}),t.node.frontmatter.title),Object(n.a)("span",{className:"ml-2 px-2 rounded outline-none bg-gray-900 text-base text-gray-100 group-hover:bg-gray-100 group-hover:text-gray-900 border border-gray-900 group-hover:border-gray-900"},a," 記事"))),Object(n.a)("p",{className:"inline-block mt-4 text-sm"},t.node.frontmatter.description))};t.b=function(e){var t=e.children;return Object(n.a)("ul",{className:"grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-5 md:gap-y-6 xl:grid-cols-3"},t)}}}]);
//# sourceMappingURL=component---src-templates-list-tags-index-js-f8d2946aeb0766ea2609.js.map