(this["webpackJsonpreact-netflix-clone"]=this["webpackJsonpreact-netflix-clone"]||[]).push([[0],{38:function(e,t,a){},39:function(e,t,a){},46:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),i=a(29),n=a.n(i),r=(a(38),a(11)),o=a(3),l=a(2),d=(a(39),a(10)),j=a.n(d),b=a(0);var u=function(e){var t=Object(s.useState)(!1),a=Object(l.a)(t,2),c=a[0],i=a[1];return Object(s.useEffect)((function(){window.onscroll=function(){console.log(window.pageYOffset),0!==window.pageYOffset?j()("nav").css({"line-height":"0.3"}):j()("nav").css({"line-height":"1.5"})},window.innerWidth>400?j()(".search,.search-input").hover((function(){j()(".search-input").css({width:"18rem",padding:".3rem"}),j()(".search-input").focus()}),(function(){Boolean(j()(".search-input").val())||j()(".search-input").css({width:"0rem",padding:"0rem"})})):j()(".search").click((function(){i((function(e){return!e}))}))}),[]),Object(s.useEffect)((function(){c?j()(".search-input").css({width:"18rem",padding:".3rem"}):j()(".search-input").css({width:"0rem",padding:"0rem"})}),[c]),Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-black fixed-top",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(r.b,{className:"navbar-brand",to:"/",onClick:function(){window.location.href="/"},children:Object(b.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",alt:"Netflix",width:"124"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(b.jsxs)("ul",{className:"navbar-nav",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(r.b,{className:"nav-link",to:"/upcoming",children:"Upcoming"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(r.b,{className:"nav-link","aria-current":"page",to:"/tv-shows",children:"TV Shows"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(r.b,{className:"nav-link",to:"/movies",children:"Movies"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(r.b,{className:"nav-link",to:"/recents",children:"Recently Added"})})]})}),Object(b.jsxs)("div",{className:"ml-auto text-white d-flex align-items-center justify-content-center",children:[Object(b.jsx)("i",{className:"fas fa-search fa-lg search"}),Object(b.jsx)("input",{type:"text",className:" search-input",placeholder:" Movies, TV Shows..."})]})]})})},h=(a(46),a(13)),m="https://image.tmdb.org/t/p/original",p="https://image.tmdb.org/t/p/w500",f=a(33),v=a.n(f).a.create({baseURL:"https://api.themoviedb.org/3/"});var O=function(e){var t=e.cardsArray,a=e.title,c=void 0===a?"":a,i=Object(s.useState)(),n=Object(l.a)(i,2),r=n[0],o=n[1],d=Object(s.useState)(),j=Object(l.a)(d,2),u=j[0],p=j[1];Object(s.useEffect)((function(){0!==t.length&&v.get("movie/".concat(t[0].id,"/videos?api_key=").concat("2a4afa027d254745d262a88cce34ee48","&language=en-US")).then((function(e){if(console.log(e.data),0!==e.data.results.length){console.log(e.data.results[0]);var t=e.data.results[0];p(t.key)}}));var e=new Array(Math.ceil(t.length/3)).fill().map((function(e){return t.splice(0,3)}));o(e)}),[t]);var f=function(e){v.get("movie/".concat(e,"/videos?api_key=").concat("2a4afa027d254745d262a88cce34ee48","&language=en-US")).then((function(e){if(console.log(e.data),0!==e.data.results.length){console.log(e.data.results[0]);var t=e.data.results[0];p(t.key)}else alert("Sorry, No related videos found in YouTube..!")})).catch((function(e){console.log(e),alert("Sorry, No related videos found in YouTube..!")}))};return Object(b.jsxs)("div",{className:"video-cards-wrapper",children:[Object(b.jsx)("div",{className:"video-cards-title-wrapper",children:Object(b.jsx)("h2",{children:c})}),u&&Object(b.jsx)(h.a,{videoId:u,opts:{playerVars:{autoplay:1}},className:"youtube-video"}),r&&r.map((function(e,t){return window.innerWidth>767?Object(b.jsx)("div",{className:"video-card-row",children:e.map((function(e){return Object(b.jsxs)("div",{className:"video-card",onClick:function(){f(e.id),window.scrollTo({top:0,left:0,behavior:"smooth"})},children:[Object(b.jsx)("img",{src:"".concat(m+e.backdrop_path),alt:"Something"}),Object(b.jsx)("h4",{className:"text-white",children:e.title}),Object(b.jsx)("p",{className:"text-white",children:e.overview.substring(0,120)+"..."})]})}))}):e.map((function(e){return Object(b.jsx)("div",{className:"video-card-row",children:Object(b.jsxs)("div",{className:"video-card",onClick:function(){f(e.id),window.scrollTo({top:0,left:0,behavior:"smooth"})},children:[Object(b.jsx)("img",{src:"".concat(m+e.backdrop_path),alt:"Something"}),Object(b.jsx)("h4",{className:"text-white",children:e.title}),Object(b.jsx)("p",{className:"text-white",children:e.overview.substring(0,120)+"..."})]})})}))}))]})};var g=function(e){var t=Object(s.useState)(),a=Object(l.a)(t,2),i=a[0],n=a[1];return Object(s.useEffect)((function(){v.get("movie/upcoming?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&language=en-US&page=1")).then((function(e){var t=e.data.results;n(t)}))}),[]),Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)(u,{}),Object(b.jsx)(O,{title:i?"Upcoming Movies":"Loading..",cardsArray:i||[]})]})};a(75);var x=function(e){var t=e.imageUrl,a=e.title,i=e.subtitle,n=e.id,r=Object(s.useState)(),o=Object(l.a)(r,2),d=o[0],j=o[1];return Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsxs)("div",{className:"header-banner lozad",style:{backgroundColor:"#222222e6",backgroundImage:"url(".concat(t,")")},children:[Object(b.jsx)("div",{className:"dark-shade-top"}),Object(b.jsxs)("div",{className:"left-inner",children:[Object(b.jsx)("h1",{className:"main-title",children:a}),Object(b.jsx)("h4",{className:"sub-title",children:i}),Object(b.jsxs)("div",{className:"buttons-section",children:[Object(b.jsxs)("button",{className:"btn play-button",onClick:function(){!function(e){v.get("movie/".concat(e,"/videos?api_key=").concat("2a4afa027d254745d262a88cce34ee48","&language=en-US")).then((function(e){if(console.log(e.data),0!==e.data.results.length){console.log(e.data.results[0]);var t=e.data.results[0];j(t.key)}else alert("Sorry, No related videos found in YouTube..!")})).catch((function(e){console.log(e),alert("Sorry, No related videos found in YouTube..!")}))}(n)},children:[Object(b.jsx)("i",{className:"fas fa-play"})," Play"]}),Object(b.jsxs)("button",{className:"btn btn-secondary",children:[Object(b.jsx)("i",{className:"fas fa-plus"})," My Playlist"]})]})]}),Object(b.jsx)("div",{className:"dark-shade-bottom"})]}),d&&Object(b.jsx)(h.a,{videoId:d,opts:{playerVars:{autoplay:1}},className:"youtube-video"})]})},N=(a(76),a(77),a(14)),w=a.n(N);var y=function(e){var t=e.postersTitle,a=e.postersList,i=Object(s.useState)(!1),n=Object(l.a)(i,2),r=n[0],o=n[1],d=Object(s.useState)(),j=Object(l.a)(d,2),u=j[0],m=j[1];Object(s.useEffect)((function(){o(Boolean(window.innerWidth<767))}),[]),Object(s.useEffect)((function(){w()().observe()}));var f,O=function(e){v.get("movie/".concat(e,"/videos?api_key=").concat("2a4afa027d254745d262a88cce34ee48","&language=en-US")).then((function(e){if(console.log(e.data),0!==e.data.results.length){console.log(e.data.results[0]);var t=e.data.results[0];m(t.key)}else alert("Sorry, No related videos found in YouTube..!")})).catch((function(e){console.log(e),alert("Sorry, No related videos found in YouTube..!")}))};return Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)("div",{className:"posters-title",children:Object(b.jsx)("h3",{children:t})}),r?Object(b.jsx)(c.a.Fragment,{children:a.length>0&&a.map((function(e,t){return(t+1)%2===0?Object(b.jsxs)("div",{className:"posters-wrapper",children:[Object(b.jsxs)("div",{onClick:function(){O(e.id)},className:"poster-card",children:[Object(b.jsx)("div",{className:"dark-fade-top"}),Object(b.jsx)("img",{className:"img lozad","data-src":p+e.poster_path,style:{backgroundColor:"#222222e6"},alt:e.title}),Object(b.jsx)("div",{className:"play-button-wrapper"}),Object(b.jsxs)("div",{className:"poster-text-wrapper",children:[Object(b.jsx)("h5",{className:"poster-title",children:f.title}),Object(b.jsx)("p",{className:"poster-subtitle",children:f.overview.substring(0,90)+"..."})]}),Object(b.jsx)("div",{className:"dark-fade-bottom"})]}),Object(b.jsxs)("div",{onClick:function(){O(f.id)},className:"poster-card",children:[Object(b.jsx)("div",{className:"dark-fade-top"}),Object(b.jsx)("img",{className:"img lozad","data-src":p+f.poster_path,style:{backgroundColor:"#222222e6"},alt:e.title}),Object(b.jsx)("div",{className:"play-button-wrapper"}),Object(b.jsxs)("div",{className:"poster-text-wrapper",children:[Object(b.jsx)("h5",{className:"poster-title",children:e.title}),Object(b.jsx)("p",{className:"poster-subtitle",children:e.overview.substring(0,90)+"..."})]}),Object(b.jsx)("div",{className:"dark-fade-bottom"})]})]},t):(f=e,null)}))}):Object(b.jsx)("div",{className:"posters-wrapper",children:a.length>0&&a.map((function(e,t){return Object(b.jsxs)("div",{onClick:function(){O(e.id)},className:"poster-card",children:[Object(b.jsx)("div",{className:"dark-fade-top"}),Object(b.jsx)("img",{className:"img lozad","data-src":p+e.poster_path,style:{background:"#222222e6"},alt:e.title}),Object(b.jsx)("div",{className:"play-button-wrapper"}),Object(b.jsxs)("div",{className:"poster-text-wrapper",children:[Object(b.jsx)("h5",{className:"poster-title",children:e.title}),Object(b.jsx)("p",{className:"poster-subtitle",children:e.overview.substring(0,75)+"..."})]}),Object(b.jsx)("div",{className:"dark-fade-bottom"})]},t)}))}),u&&Object(b.jsx)(h.a,{videoId:u,opts:{playerVars:{autoplay:1}},className:"youtube-video"})]})};a(78);var k=function(e){return Object(b.jsxs)("div",{className:"row footer",children:[Object(b.jsx)("div",{className:"footer-shade-top"}),Object(b.jsxs)("div",{className:"footer-content",children:[Object(b.jsx)("img",{className:"footer-netflix-logo",src:"https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",alt:"Netflix Clone React made by Rahif"}),Object(b.jsxs)("p",{children:["Netflix Clone React made by ",Object(b.jsx)("a",{href:"https://muhammed-rahif.github.io",rel:"noreferrer",target:"_blank",children:"Muhammed Rahif"})]}),Object(b.jsxs)("p",{className:"footer-copyright",children:["Copyrights @ Muhammed Rahif ",(new Date).getFullYear()]}),Object(b.jsxs)("div",{className:"footer-social-logos",children:[Object(b.jsx)("a",{href:"https://github.com/Muhammed-Rahif",rel:"noreferrer",target:"_blank",children:Object(b.jsx)("i",{className:"fab fa-github"})}),Object(b.jsx)("a",{href:"https://muhammed-rahif.github.io",rel:"noreferrer",target:"_blank",children:Object(b.jsx)("i",{className:"fas fa-user-circle"})}),Object(b.jsx)("a",{href:"https://www.instagram.com/_.raifu.op_/",rel:"noreferrer",target:"_blank",children:Object(b.jsx)("i",{className:"fab fa-instagram"})}),Object(b.jsx)("a",{href:"mailto:rahifpalliyalil@gmail.com",children:Object(b.jsx)("i",{className:"fas fa-envelope"})})]})]})]})};var S=function(e){var t=Object(s.useState)(),a=Object(l.a)(t,2),c=a[0],i=a[1],n=Object(s.useState)(),r=Object(l.a)(n,2),o=r[0],d=r[1],j=Object(s.useState)(),h=Object(l.a)(j,2),p=h[0],f=h[1],O=Object(s.useState)(),g=Object(l.a)(O,2),N=g[0],S=g[1],_=Object(s.useState)(),T=Object(l.a)(_,2),C=T[0],L=T[1],F=Object(s.useState)(),M=Object(l.a)(F,2),E=M[0],U=M[1],Y=Object(s.useState)(),z=Object(l.a)(Y,2),B=z[0],R=z[1],I=Object(s.useState)(),W=Object(l.a)(I,2),A=W[0],J=W[1],K=Object(s.useState)(),P=Object(l.a)(K,2),V=P[0],q=P[1];return Object(s.useEffect)((function(){w()().observe(),v.get("trending/all/day?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&language=en-US")).then((function(e){var t=e.data.results;i(t.slice(0,8))})),v.get("movie/popular?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&language=en-US&page=1")).then((function(e){var t=e.data.results;d(t.slice(0,8))})),v.get("discover/movie?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&with_genres=28")).then((function(e){var t=e.data.results;q(t[Math.floor(Math.random()*t.length+1)]),f(t.slice(0,8))})),v.get("discover/tv?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&with_networks=213")).then((function(e){var t=e.data.results;L(t.slice(0,8))})),v.get("discover/movie?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&with_genres=35")).then((function(e){var t=e.data.results;S(t.slice(0,8))})),v.get("discover/movie?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&with_genres=27")).then((function(e){var t=e.data.results;U(t.slice(0,8))})),v.get("discover/movie?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&with_genres=10749")).then((function(e){var t=e.data.results;R(t.slice(0,8))})),v.get("discover/movie?api_key=".concat("2a4afa027d254745d262a88cce34ee48","&with_genres=10751")).then((function(e){var t=e.data.results;J(t.slice(0,8))}))}),[]),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)(u,{}),Object(b.jsx)(x,{title:V?V.title:"Loading..",subtitle:V?V.overview:"Loading..",imageUrl:V?m+V.backdrop_path:"",id:V?V.id:""}),Object(b.jsx)(y,{postersTitle:c?"Trending on Netflix":"",postersList:c||[]}),Object(b.jsx)(y,{postersTitle:o?"Popular on Netflix":"",postersList:o||[]}),Object(b.jsx)(y,{postersTitle:C?"Orignials on Netflix":"",postersList:C||[]}),Object(b.jsx)(y,{postersTitle:E?"Horror Films":"",postersList:E||[]}),Object(b.jsx)(y,{postersTitle:B?"Romance Movies":"",postersList:B||[]}),Object(b.jsx)(y,{postersTitle:N?"Comedy Movies":"",postersList:N||[]}),Object(b.jsx)(y,{postersTitle:p?"Action Films":"",postersList:p||[]}),Object(b.jsx)(y,{postersTitle:A?"Family Entertainment":"",postersList:A||[]}),Object(b.jsx)(k,{})]})};a(79);var _=function(e){return Object(b.jsxs)("div",{className:"row h-100",children:[Object(b.jsx)(u,{}),Object(b.jsxs)("div",{className:"content",style:{backgroundImage:"url('https://i.picsum.photos/id/957/1920/1080.jpg?hmac=j6IpszzgaWjKITEaLB7QiwR-han900vlNJ5vfezaGQE')"},children:[Object(b.jsx)("div",{className:"dark-shade-top"}),Object(b.jsx)("h1",{className:"main-title-404 mb-4",children:"Lost your way ?"}),Object(b.jsx)("h4",{children:"Sorry, we can't find that page. You'll find lots to explore on the home page."}),Object(b.jsx)(r.b,{to:"/",children:Object(b.jsx)("button",{className:"btn mt-3",children:"Netflix Home"})}),Object(b.jsx)("div",{className:"error-code mt-3",children:Object(b.jsx)("h3",{children:"Error code 404 : Not Found"})}),Object(b.jsx)("div",{className:"dark-shade-bottom"})]})]})};var T=function(){return Object(b.jsx)(r.a,{children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/",component:S}),Object(b.jsx)(o.a,{path:"/upcoming",component:g}),Object(b.jsx)(o.a,{path:"*",component:_})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,81)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,n=t.getTTFB;a(e),s(e),c(e),i(e),n(e)}))};n.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(T,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),C()}},[[80,1,2]]]);
//# sourceMappingURL=main.221dac6f.chunk.js.map