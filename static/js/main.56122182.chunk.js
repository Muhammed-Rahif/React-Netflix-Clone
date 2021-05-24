(this["webpackJsonpreact-netflix-clone"]=this["webpackJsonpreact-netflix-clone"]||[]).push([[0],{23:function(e,s,t){},24:function(e,s,t){},26:function(e,s,t){},27:function(e,s,t){},33:function(e,s,t){"use strict";t.r(s);var a=t(1),i=t.n(a),c=t(15),n=t.n(c),r=(t(23),t(16)),l=t(2),o=t(18),d=(t(24),t(7)),h=t.n(d),j=t(0);var m=function(e){var s=Object(a.useState)(!1),t=Object(o.a)(s,2),i=t[0],c=t[1];return Object(a.useEffect)((function(){window.innerWidth>400?h()(".search,.search-input").hover((function(){h()(".search-input").css({width:"18rem",padding:".3rem"}),h()(".search-input").focus()}),(function(){Boolean(h()(".search-input").val())||h()(".search-input").css({width:"0rem",padding:"0rem"})})):h()(".search").click((function(){c((function(e){return!e}))}))}),[]),Object(a.useEffect)((function(){i?h()(".search-input").css({width:"18rem",padding:".3rem"}):h()(".search-input").css({width:"0rem",padding:"0rem"})}),[i]),Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-black",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("a",{className:"navbar-brand",href:"/",children:Object(j.jsx)("img",{src:"./images/netflix-logo.png",alt:"Netflix",width:"124"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(j.jsxs)("ul",{className:"navbar-nav",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/tv-shows",children:"TV Shows"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link",href:"/movies",children:"Movies"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link",href:"/recents",children:"Recently Added"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link",href:"/my-list",children:"My List"})})]})}),Object(j.jsxs)("div",{className:"ml-auto text-white d-flex align-items-center justify-content-center",children:[Object(j.jsx)("i",{className:"fas fa-search fa-lg search"}),Object(j.jsx)("input",{type:"text",className:" search-input",placeholder:"Movies, TV Shows..."})]})]})})};t(26);var b=function(e){return Object(j.jsx)(i.a.Fragment,{children:Object(j.jsxs)("div",{className:"header-banner",style:{backgroundImage:"url(../images/backend/The-Avengers-banner-1.jpg)"},children:[Object(j.jsx)("div",{className:"dark-shade-top"}),Object(j.jsxs)("div",{className:"left-inner",children:[Object(j.jsx)("h1",{className:"main-title",children:"Avengers: Infinity War"}),window.innerWidth>767?Object(j.jsx)("h4",{className:"sub-title",children:"As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain."}):null,Object(j.jsxs)("div",{className:"buttons-section",children:[Object(j.jsxs)("button",{className:"btn play-button",children:[Object(j.jsx)("i",{className:"fas fa-play"})," Play"]}),Object(j.jsxs)("button",{className:"btn btn-secondary",children:[Object(j.jsx)("i",{className:"fas fa-plus"})," My Playlist"]})]})]}),Object(j.jsx)("div",{className:"dark-shade-bottom"})]})})};t(27);var u=function(e){var s,t=e.postersTitle,a=e.postersList;return Object(j.jsxs)(i.a.Fragment,{children:[Object(j.jsx)("div",{className:"posters-title",children:Object(j.jsx)("h3",{children:t})}),window.innerWidth<650?Object(j.jsx)(i.a.Fragment,{children:a.map((function(e,t){if((t+1)%2===0)return Object(j.jsxs)("div",{className:"posters-wrapper",children:[Object(j.jsxs)("div",{className:"poster-card",children:[Object(j.jsx)("div",{className:"dark-fade-top"}),Object(j.jsx)("img",{className:"img",src:s.imgSrc,alt:"Poster Card"}),Object(j.jsxs)("div",{className:"poster-text-wrapper",children:[Object(j.jsx)("h5",{className:"poster-title",children:s.title}),Object(j.jsx)("p",{className:"poster-subtitle",children:s.subtitle})]}),Object(j.jsx)("div",{className:"dark-fade-bottom"})]}),Object(j.jsxs)("div",{className:"poster-card",children:[Object(j.jsx)("div",{className:"dark-fade-top"}),Object(j.jsx)("img",{className:"img",src:e.imgSrc,alt:"Poster Card"}),Object(j.jsxs)("div",{className:"poster-text-wrapper",children:[Object(j.jsx)("h5",{className:"poster-title",children:e.title}),Object(j.jsx)("p",{className:"poster-subtitle",children:e.subtitle})]}),Object(j.jsx)("div",{className:"dark-fade-bottom"})]})]},t);s=e}))}):Object(j.jsx)("div",{className:"posters-wrapper",children:a.map((function(e){return Object(j.jsxs)("div",{className:"poster-card",children:[Object(j.jsx)("div",{className:"dark-fade-top"}),Object(j.jsx)("img",{className:"img",src:e.imgSrc,alt:"Poster Card"}),Object(j.jsxs)("div",{className:"poster-text-wrapper",children:[Object(j.jsx)("h5",{className:"poster-title",children:e.title}),Object(j.jsx)("p",{className:"poster-subtitle",children:e.subtitle})]}),Object(j.jsx)("div",{className:"dark-fade-bottom"})]})}))})]})};var p=function(e){var s={postersTitle:"Trending on Netflx",postersList:[{title:"Spider Man",subtitle:"The Vulture is an alias used by several fictional supervillains appearing in American comic books published by Marvel Comics.",imgSrc:"./images/backend/spider-man-1-card.jpg"},{title:"Stranger Things",subtitle:"Stranger Things is an American science-fiction horror television created by the Duffer Brothers and streaming on Netflix.",imgSrc:"./images/backend/stranger-things-card.jpg"},{title:"Jurassic World",subtitle:"A theme park showcasing genetically-engineered dinosaurs turns into a nightmare for its tourists when one of the dinosaurs escapes its enclosure.",imgSrc:"./images/backend/jurassic-world-card.jpg"},{title:"Game of Thrones",subtitle:"Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO.",imgSrc:"./images/backend/game-of-thrones-card.jpg"},{title:"Black Panther",subtitle:"Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name.",imgSrc:"./images/backend/black-panther-card.jpg"},{title:"Spider Man",subtitle:"Peter Parker tries to stop the Vulture from selling weapons made with advanced Chitauri technology while trying to balance his life as an ordinary high school student.",imgSrc:"./images/backend/spider-man-card.jpg"}]};return Object(j.jsxs)(i.a.Fragment,{children:[Object(j.jsx)(m,{}),Object(j.jsx)(b,{}),Object(j.jsx)(u,{postersTitle:s.postersTitle,postersList:s.postersList})]})};var f=function(){return Object(j.jsx)(r.a,{children:Object(j.jsx)(l.c,{children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)(l.a,{exact:!0,path:"/",children:Object(j.jsx)(p,{})})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,34)).then((function(s){var t=s.getCLS,a=s.getFID,i=s.getFCP,c=s.getLCP,n=s.getTTFB;t(e),a(e),i(e),c(e),n(e)}))};n.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.56122182.chunk.js.map