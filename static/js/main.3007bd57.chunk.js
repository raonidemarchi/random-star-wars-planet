(window["webpackJsonprandom-star-wars-planet"]=window["webpackJsonprandom-star-wars-planet"]||[]).push([[0],{2:function(e,a,t){e.exports={container:"RandomPlanetDisplay_container__ewe3q",starWarsLogoImg:"RandomPlanetDisplay_starWarsLogoImg__29wCO",buttonMargin:"RandomPlanetDisplay_buttonMargin__2_ms1",greyText:"RandomPlanetDisplay_greyText__1cZpf",noConnectionIcon:"RandomPlanetDisplay_noConnectionIcon__2mhtm",noConnectionMessage:"RandomPlanetDisplay_noConnectionMessage__MqnN9",noConnectionDetails:"RandomPlanetDisplay_noConnectionDetails__3LML6",filmsErrorMessage:"RandomPlanetDisplay_filmsErrorMessage__2o-uO"}},20:function(e,a,t){e.exports={card:"Card_card__1-hnJ",cardTitle:"Card_cardTitle__393vX",placeholder:"Card_placeholder__37e6Y",animatedBackground:"Card_animatedBackground__N3Xhy",placeHolderShimmer:"Card_placeHolderShimmer__2MMdk",cardBody:"Card_cardBody__EGJUB",placeholder1:"Card_placeholder1__2hvSY",placeholder2:"Card_placeholder2__2C632",placeholder3:"Card_placeholder3__1iqYQ",cardFooter:"Card_cardFooter__2gzG9"}},21:function(e,a,t){e.exports={cardTitle:"CardTitle_cardTitle__1KORw"}},22:function(e,a,t){e.exports={cardBody:"CardBody_cardBody__31Ctx"}},23:function(e,a,t){e.exports={cardFooter:"CardFooter_cardFooter__9u6ZX"}},24:function(e,a,t){e.exports=t.p+"static/media/death-star.e43cf385.svg"},25:function(e,a,t){e.exports=t.p+"static/media/star-wars-logo.528d93d0.png"},26:function(e,a,t){e.exports=t(50)},31:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(19),o=t.n(c),l=(t(31),t(1)),i=t.n(l),s=t(4),u=t(5),d=t(20),m=t.n(d),p=t(21),g=t.n(p),f=t(7),h=t.n(f);var _=function(e){var a=e.height,t=void 0===a?"14px":a,n=e.maxWidth,c=void 0===n?"100%":n,o=e.marginBottom,l=void 0===o?"0":o;return r.a.createElement("div",{className:h.a.placeholder,style:{minHeight:t,maxWidth:c,marginBottom:l}},r.a.createElement("div",{className:h.a.animatedBackground,style:{height:t}}))};var v=function(e){var a=e.children,t=e.loading;return r.a.createElement("div",{className:g.a.cardTitle},t?r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{height:"50px",maxWidth:"90%"})):r.a.createElement(r.a.Fragment,null,a))},b=t(22),x=t.n(b);var E=function(e){var a=e.children,t=e.loading;return r.a.createElement("div",{className:x.a.cardBody},t?r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{height:"16px",maxWidth:"90%",marginBottom:"10px"}),r.a.createElement(_,{height:"16px",maxWidth:"50%",marginBottom:"10px"}),r.a.createElement(_,{height:"16px",maxWidth:"70%"})):r.a.createElement(r.a.Fragment,null,a))},y=t(23),C=t.n(y);var w=function(e){var a=e.children,t=e.loading;return r.a.createElement("div",{className:C.a.cardFooter},t?r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{height:"14px",maxWidth:"50%"})):r.a.createElement(r.a.Fragment,null,a))};var O=function(e){var a=e.children;return r.a.createElement("div",{className:m.a.card},a)},j=t(8),N=t.n(j);var k=function(e){var a=e.children,t=e.onClick,n=e.disabled;return r.a.createElement("div",{role:"button",className:[N.a.button,n&&N.a.disabled].join(" "),onClick:n?function(){}:t},a)},B=t(9),S=t.n(B);var P=function(e){var a=e.children,t=e.onClick,n=e.disabled;return r.a.createElement("div",{role:"button",className:[S.a.button,n&&S.a.disabled].join(" "),onClick:n?function(){}:t},a)},F=t(2),T=t.n(F),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return isNaN(e)?e:new Intl.NumberFormat("en").format(e)},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.floor(Math.random()*(a-e))+e},W=t(6),I=t.n(W),R="".concat("https://swapi.co/api/","planets/"),L=("".concat("https://swapi.co/api/","films/"),{getPlanetsCount:function(){return new Promise(function(){var e=Object(s.a)(i.a.mark(function e(a){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={error:!1,message:"",data:0},n={},e.prev=2,e.next=5,I.a.get("".concat(R));case 5:n=e.sent,t.data=n.data.count,e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),t.error=!0,t.message=e.t0.toString();case 13:a(t);case 14:case"end":return e.stop()}},e,null,[[2,9]])}));return function(a){return e.apply(this,arguments)}}())},getPlanetById:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise(function(){var a=Object(s.a)(i.a.mark(function a(t){var n,r;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n={error:!1,message:"",data:{}},r={},a.prev=2,a.next=5,I.a.get("".concat(R).concat(e,"/"));case 5:r=a.sent,n.data=r.data,a.next=13;break;case 9:a.prev=9,a.t0=a.catch(2),n.error=!0,n.message=a.t0.toString();case 13:t(n);case 14:case"end":return a.stop()}},a,null,[[2,9]])}));return function(e){return a.apply(this,arguments)}}())}}),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new Promise(function(){var a=Object(s.a)(i.a.mark(function a(t){var n,r;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n={error:!1,message:"",data:{}},r={},a.prev=2,a.next=5,I.a.get(e);case 5:r=a.sent,n.data=r.data.title,a.next=13;break;case 9:a.prev=9,a.t0=a.catch(2),n.error=!0,n.message=a.t0.toString();case 13:t(n);case 14:case"end":return a.stop()}},a,null,[[2,9]])}));return function(e){return a.apply(this,arguments)}}())},J={getFilmTitleByUrl:H,getFilmsTitleByUrlArray:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(function(){var a=Object(s.a)(i.a.mark(function a(t){var n,r;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(n={error:!1,message:"",data:[]},r={},0!==e.length){a.next=4;break}return a.abrupt("return",t(n));case 4:return a.next=6,Promise.all(e.map(function(e){return H(e)}));case 6:r=a.sent,n.data=r.map(function(e){return e.error?(n.error=e.error,n.message=e.message,!1):e.data}),n.data=n.data.filter(function(e){return e}),t(n);case 10:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}())}},X=t(24),U=t.n(X),Y=t(25),q=t.n(Y);var z=function(){var e=Object(n.useState)(0),a=Object(u.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)({}),l=Object(u.a)(o,2),d=l[0],m=l[1],p=Object(n.useState)([]),g=Object(u.a)(p,2),f=g[0],h=g[1],_=Object(n.useState)(!1),b=Object(u.a)(_,2),x=b[0],y=b[1],C=Object(n.useState)(""),j=Object(u.a)(C,2),N=j[0],B=j[1],S=Object(n.useState)(!1),F=Object(u.a)(S,2),W=F[0],I=F[1],R=Object(n.useState)(!0),H=Object(u.a)(R,2),X=H[0],Y=H[1],z=Object(n.useState)(!0),A=Object(u.a)(z,2),G=A[0],Q=A[1],Z=Object(n.useState)(!0),K=Object(u.a)(Z,2),V=K[0],$=K[1],ee=function(){var e=Object(s.a)(i.a.mark(function e(){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={},$(!0),e.next=4,L.getPlanetsCount();case 4:if(a=e.sent,$(!1),y(a.error),B(a.message),+a.data!==+localStorage.planetsCount){e.next=10;break}return e.abrupt("return");case 10:c(a.data),localStorage.planetsCount=a.data;case 12:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(s.a)(i.a.mark(function e(){var a,t,n,r=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>0&&void 0!==r[0]?r[0]:0,t=0,n={},Y(!0),Q(!0),t=D(1,a),e.next=8,L.getPlanetById(t);case 8:n=e.sent,Y(!1),y(n.error),B(n.message),m(n.data);case 13:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(s.a)(i.a.mark(function e(){var a,t,n=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.length>0&&void 0!==n[0]?n[0]:{},e.next=3,J.getFilmsTitleByUrlArray(a.films);case 3:t=e.sent,I(t.error),Q(!1),h(t.data);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){localStorage.planetsCount&&c(localStorage.planetsCount),ee()},[]),Object(n.useEffect)(function(){0!==t&&ae(t)},[t]),Object(n.useEffect)(function(){0!==Object.entries(d).length&&(te(d),document.title=d.name)},[d]),r.a.createElement("div",{className:T.a.container},r.a.createElement("img",{src:q.a,alt:"Star Wars logo",className:T.a.starWarsLogoImg}),x?r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:U.a,alt:"Death Star icon",className:T.a.noConnectionIcon}),r.a.createElement("p",{className:T.a.noConnectionMessage},"There's a connection problem."),r.a.createElement("span",{className:T.a.noConnectionDetails},N),r.a.createElement("div",{className:T.a.buttonMargin},r.a.createElement(P,{disabled:V,onClick:function(){return ee()}},V?"Tentando connection...":"Try to connect"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null,r.a.createElement(v,{loading:X},d.name),r.a.createElement(E,{loading:X},r.a.createElement("span",{className:T.a.greyText},"Population:")," ",M(d.population),r.a.createElement("br",null),r.a.createElement("span",{className:T.a.greyText},"Climate:")," ",d.climate,r.a.createElement("br",null),r.a.createElement("span",{className:T.a.greyText},"Terrain:")," ",d.terrain),r.a.createElement(w,{loading:G},0===f.length?r.a.createElement("span",{className:T.a.greyText},"Not featured in any film"):r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:T.a.greyText},"Featured in")," ",f.join(", ")),W&&r.a.createElement("p",{className:T.a.filmsErrorMessage},"We couldn't retreive all films."))),r.a.createElement("div",{className:T.a.buttonMargin},r.a.createElement(k,{disabled:X,onClick:function(){return ae(t)}},X?"Loading planet":"Next"))))};o.a.render(r.a.createElement(z,null),document.getElementById("root"))},7:function(e,a,t){e.exports={placeholder:"PlaceholderLoader_placeholder__RDbsg",animatedBackground:"PlaceholderLoader_animatedBackground__1eQnY",placeHolderShimmer:"PlaceholderLoader_placeHolderShimmer__1XwO_"}},8:function(e,a,t){e.exports={button:"Button_button__3bslJ",disabled:"Button_disabled__4pXzC"}},9:function(e,a,t){e.exports={button:"ButtonSecondary_button__34sMy",disabled:"ButtonSecondary_disabled__1cpsc"}}},[[26,1,2]]]);
//# sourceMappingURL=main.3007bd57.chunk.js.map