(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{oKB5:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),c=a("wHSu"),r=a("GbWW"),o=a("hZio"),i=a("eKTO"),s=a("VreA"),l=a("AeFk");t.default=function(e){var t=e.location,a=e.data,u=e.pageContext,b=u.categoryName,p=u.currentPage,d=u.canonical,O=u.totalPage,h=u.prevPagePath,m=u.nextPagePath,P=u.hasPrevPage,j=u.hasNextPage,g=Object(s.c)().find((function(e){return e.node.fields.name===b})),f=Object(n.useState)(!1),v=f[0],w=f[1],x=Object(n.useState)(!1),k=x[0],S=x[1],I=Object(n.useState)(null),M=I[0],N=I[1],y="カテゴリー："+g.node.frontmatter.title,q=g.node.frontmatter.description,A=[{label:"ホーム",url:"/",icon:c.p},{label:"カテゴリー一覧",url:"/categories/",icon:c.i},{label:y,url:t.pathname,icon:c.h}],D={title:y,description:q,location:t.pathname,canonical:d,breadcrumbItems:A,isOpenMenu:v,setIsOpenMenu:w,isOpenSearch:k,setIsOpenSearch:S,isDarkMode:M,setIsDarkMode:N};return Object(l.a)(r.a.Provider,{value:D},Object(l.a)(o.d,null),Object(l.a)(o.c,{pattern:"one-column"},Object(l.a)(i.q,{icon:c.h},D.title),Object(l.a)("p",{className:"mt-8"},D.description),Object(l.a)("section",{className:"mt-8"},Object(l.a)(i.b,null,a.allMdx.edges.map((function(e){return Object(l.a)(i.c,{item:e,key:e.node.id})}))),Object(l.a)(i.r,{current:p,max:O,parentPath:"/category/"+b+"/",prevPath:h,nextPath:m,hasPrev:P,hasNext:j}))))}}}]);
//# sourceMappingURL=component---src-templates-archive-category-index-js-cb2e8320106e443d47d7.js.map