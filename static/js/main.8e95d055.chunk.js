(this.webpackJsonpvivero_serrano=this.webpackJsonpvivero_serrano||[]).push([[0],{16:function(e,t,n){},26:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var r,i=n(1),c=n(14),o=n.n(c),a=(n(35),n(36),n(37),n(38),n(10)),s=n(11),l=n(13),d=n(12),j=n(2),b=(n(39),n(20)),h=[{title:"Posible 1",path:"/galeria/posible1",cName:"dropdown-link"},{title:"Posible 2",path:"/galeria/posible2",cName:"dropdown-link"},{title:"Posible 3",path:"/galeria/posible3",cName:"dropdown-link"},{title:"Posible 4",path:"/galeria/posible4",cName:"dropdown-link"}],u=(n(40),n(0)),x=function(e){var t=Object(i.useState)(!1),n=Object(b.a)(t,2),r=n[0],c=n[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("ul",{onClick:e.onCloseMobileMenu,className:r?"dropdown-menu clicked":"dropdown-menu",children:h.map((function(e,t){return Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{className:e.cName,to:e.path,onClick:function(){return c(!1)},children:e.title})},t)}))})})},p=n.p+"static/media/flower.b597b58d.jpg",O=n.p+"static/media/carrito.1277329b.png",v=n(30),f=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={click:!1,dropdown:!1},e.handleClick=function(){var t=e.state.click;e.setState({click:!t})},e.closeMobileMenu=function(){e.setState({click:!1})},e.onMouseEnter=function(){window.innerWidth<960?e.setState({dropdown:!1}):e.setState({dropdown:!0})},e.onMouseLeave=function(){window.innerWidth,e.setState({dropdown:!1})},e.extendElement=function(){e.dropdown?e.setState({dropdown:!1}):e.setState({dropdown:!0})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.click,n=e.dropdown;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("nav",{className:"navbar",children:[Object(u.jsx)(j.b,{to:"/vivero-serrano",className:"navbar-logo",onClick:this.closeMobileMenu,children:Object(u.jsx)("img",{className:"logo",src:p,alt:"logo"})}),Object(u.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(u.jsx)("i",{className:t?"fas fa-times":"fas fa-bars"})}),Object(u.jsxs)("ul",{className:t?"nav-menu active":"nav-menu",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(j.b,{to:"/vivero-serrano",className:"nav-links",onClick:this.closeMobileMenu,children:"HOME"})}),Object(u.jsxs)("li",{className:"nav-item",onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,onClick:this.extendElement,children:[Object(u.jsxs)(j.b,{to:"/servicios",className:"nav-links",children:["SERVICIOS ",Object(u.jsx)("i",{className:"fas fa-caret-down"})]}),n&&Object(u.jsx)(x,{onCloseMobileMenu:this.closeMobileMenu})]}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(j.b,{to:"/noticias",className:"nav-links",onClick:this.closeMobileMenu,children:"NOTICIAS"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(j.b,{to:"/galeria",className:"nav-links",onClick:this.closeMobileMenu,children:"GALERIA"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(j.b,{to:"/contactenos",className:"nav-links",onClick:this.closeMobileMenu,children:"CONTACTENOS"})})]}),Object(u.jsxs)("span",{className:" p-input-icon-left spanSearch",children:[Object(u.jsx)("i",{className:"pi pi-search"}),Object(u.jsx)(v.a,{placeholder:"Search"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)(j.b,{to:"/vivero-serrano",className:"linkIconos",onClick:this.closeMobileMenu,children:Object(u.jsx)("i",{className:"fas fa-search fa-2x"})}),Object(u.jsx)(j.b,{to:"/vivero-serrano",className:"linkIconos",onClick:this.closeMobileMenu,children:Object(u.jsx)("img",{className:"iconos",src:O,alt:"carrito"})}),Object(u.jsx)(j.b,{to:"/vivero-serrano",className:"linkIconos",onClick:this.closeMobileMenu,children:Object(u.jsx)("img",{className:"iconos",src:"data:image/png;base64,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",alt:"login"})})]})]})})}}]),n}(i.Component),m=n(5),g=(n(47),n(3)),k=["title","titleId"];function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function y(e,t){var n=e.title,c=e.titleId,o=N(e,k);return i.createElement("svg",w({width:24,height:24,xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",ref:t,"aria-labelledby":c},o),n?i.createElement("title",{id:c},n):null,r||(r=i.createElement("path",{d:"M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"})))}var A,C=i.forwardRef(y),S=(n.p,["title","titleId"]);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function R(e,t){var n=e.title,r=e.titleId,c=I(e,S);return i.createElement("svg",E({width:24,height:24,xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",ref:t,"aria-labelledby":r},c),n?i.createElement("title",{id:r},n):null,A||(A=i.createElement("path",{d:"M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"})))}var T,M,H,L,P,F,D,Z,J,X,q,V,W,B,z,U,G,Y,Q,K=i.forwardRef(R),_=(n.p,n(4)),$=function(e){var t=e.children,n=e.controles,r=void 0!==n&&n,c=e.autoplay,o=void 0!==c&&c,a=e.velocidad,s=void 0===a?"500":a,l=e.intervalo,d=void 0===l?"5000":l,j=Object(i.useRef)(null),b=Object(i.useRef)(null),h=Object(i.useCallback)((function(){if(j.current.children.length>0){console.log("Siguiente");var e=j.current.children[0];j.current.style.transition="".concat(s,"ms ease-out all");var t=j.current.children[0].offsetWidth;j.current.style.transform="translateX(-".concat(t,"px)");j.current.addEventListener("transitionend",(function t(){j.current.style.transition="none",j.current.style.transform="translateX(0)",j.current.appendChild(e),j.current.removeEventListener("transitionend",t)}))}}),[s]);return Object(i.useEffect)((function(){o&&(b.current=setInterval((function(){h()}),d),j.current.addEventListener("mouseenter",(function(){clearInterval(b.current)})),j.current.addEventListener("mouseleave",(function(){b.current=setInterval((function(){h()}),d)})))}),[o,d,h]),Object(u.jsxs)(ee,{children:[Object(u.jsx)(te,{ref:j,children:t}),r&&Object(u.jsxs)(ie,{children:[Object(u.jsx)(ce,{onClick:function(){if(console.log("Anterior"),j.current.children.length>0){var e=j.current.children.length-1,t=j.current.children[e];j.current.insertBefore(t,j.current.firstChild),j.current.style.transition="none";var n=j.current.children[0].offsetWidth;j.current.style.transform="translateX(-".concat(n,"px)"),setTimeout((function(){j.current.style.transition="".concat(s,"ms ease-out all"),j.current.style.transform="translateX(0)"}),30)}},children:Object(u.jsx)(C,{})}),Object(u.jsx)(ce,{derecho:!0,onClick:h,children:Object(u.jsx)(K,{})})]})]})},ee=_.a.div(T||(T=Object(g.a)(["\n\tposition: relative;  /* a los elementos hijos ponerle position:absolute y botton: para ponerlo encima */\n"]))),te=_.a.div(M||(M=Object(g.a)(["\n\tdisplay: flex; /* para poner una imagen al lado de otra */\n\tflex-wrap: nowrap;\n"]))),ne=_.a.div(H||(H=Object(g.a)(["\n\tmin-width: 100%;\n\toverflow: hidden;\n\ttransition: .3s ease all;\n\tz-index: 10;\n\tmax-height: 350px; \n\tposition: relative;\n\n\timg {\n\t\theight:100%;\n        width:1280px;  /*si tamanio original de la imagen es menor a esto debo poner width */\n\t\tmax-width: 100%;    /* porque maxWidth de DivSlide es 1280px */\n\t\tvertical-align: top;\n\t}\n"]))),re=_.a.div(L||(L=Object(g.a)(["\n\tbackground: ",";\n\tcolor: ",";\n\twidth: 100%;\n\tpadding: 10px 60px;\n\ttext-align: center;\n\tposition: absolute;\n\tbottom: 0;\n\n\t","\n"])),(function(e){return e.colorFondo?e.colorFondo:"rgba(0,0,0,.3)"}),(function(e){return e.colorTexto?e.colorTexto:"#fff"}),""),ie=_.a.div(P||(P=Object(g.a)(["\n\tposition: absolute;\n\ttop: 0;\n\tz-index: 20;\n\twidth: 100%;\n\theight: 100%;\n\tpointer-events: none;\n"]))),ce=_.a.button(F||(F=Object(g.a)(["\n\tpointer-events: all;\n\tbackground: none;\n\tborder: none;\n\tcursor: pointer;\n\toutline: none;\n\twidth: 50px;\n\theight: 100%;\n\ttext-align: center;\n\tposition: absolute;\n\ttransition: .3s ease all;\n\t/* &:hover {\n\t\tbackground: rgba(0,0,0,.2);\n\t\tpath {\n\t\t\tfill: #fff;\n\t\t}\n\t} */\n\t\n\t/* path es etiqueta de SVG y ejecutamos un filter  */\n\tpath {\n\t\tfilter: ",";\n\t}\n\n\t","\n"])),(function(e){return e.derecho?"drop-shadow(-2px 0px 0px #fff)":"drop-shadow(2px 0px 0px #fff)"}),(function(e){return e.derecho?"right: 0":"left: 0"})),oe=n.p+"static/media/1.12f10288.jpg",ae=n.p+"static/media/2.ecc006c7.jpg",se=n.p+"static/media/3.f69d8f53.jpg",le=n.p+"static/media/4.619a9bf3.jpg",de=[{categoria:"planta",precio:"$10.30",stock:!0,nombre:"bonsai",img:n.p+"static/media/bonsai.d6aee31a.jpg"},{categoria:"macetero",precio:"9.90",stock:!0,nombre:"macetero",img:n.p+"static/media/bouquet.3a70ecfb.jpg"},{categoria:"planta",precio:"7.80",stock:!1,nombre:"tierra",img:n.p+"static/media/gardening.ddbc387d.jpg"},{categoria:"planta",precio:"800.00",stock:!0,nombre:"cocina",img:n.p+"static/media/kitchen.6fad0cd2.jpg"},{categoria:"plantota",precio:"323.00",stock:!1,nombre:"plantota",img:n.p+"static/media/planta.a960ef8d.jpg"}],je=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=de.filter((function(e,t){return t<=3})).map((function(e,t){return Object(u.jsxs)(Oe,{children:[Object(u.jsx)(he,{src:e.img,alt:e.nombre}),Object(u.jsx)(ue,{colorText:"#fff",tamanioText:"1.5vw",children:e.nombre})]})}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(be,{children:[Object(u.jsx)(he,{src:de[0].img,alt:"bonsai"}),Object(u.jsxs)(ue,{colorText:"#000",children:[" ",Object(u.jsx)("h1",{children:"Las mejores plantitas del Ecuador"})]})]}),Object(u.jsxs)(be,{colorFondo:"#fff",children:[Object(u.jsxs)(pe,{children:[Object(u.jsxs)(ue,{colorText:"#000",posicionText:"relative",noPadding:!0,children:[Object(u.jsx)("h1",{children:"Tipos o Categorias de Plantas "})," "]}),Object(u.jsx)(ve,{to:"/vivero-serrano",children:"Ver todas "})]}),Object(u.jsx)("hr",{}),Object(u.jsx)(xe,{children:e})]})]})}}]),n}(i.Component),be=_.a.div(D||(D=Object(g.a)(["\nwidth:50%;\nmax-height: 400px;\nposition:relative;\nbackground:",";\nhr{\n    width: 98%;\n    margin:auto;\n    \n}\n\n"])),(function(e){return e.colorFondo?e.colorFondo:""})),he=_.a.img(Z||(Z=Object(g.a)(["\nheight:100%;\nwidth:100%;\n"]))),ue=_.a.div(J||(J=Object(g.a)(["\n\tpadding: ","; \n\tposition:  ",";\n    text-align: center;\n\tbottom: 0;\n    color: ",";\n    font-size: ",";\n\tfont-weight: 700;\n\n"])),(function(e){return e.noPadding?"0":"10px 23px"}),(function(e){return e.posicionText?e.posicionText:"absolute   "}),(function(e){return e.colorText?e.colorText:"#fff"}),(function(e){return e.tamanioText?e.tamanioText:"0.85vw"})),xe=_.a.div(X||(X=Object(g.a)(["\ndisplay:grid;\njustify-content:space-around;\ngrid-template-columns: repeat(2, auto);\ngrid-gap: 30px; \nmargin-top: 12px;\n"]))),pe=_.a.div(q||(q=Object(g.a)(["\ndisplay: flex; \nflex-direction: row;\nalign-items: center;\njustify-content: space-between;\npadding: 3px 3px 0px 3px;\n"]))),Oe=_.a.div(V||(V=Object(g.a)(["\nposition:relative;\nmax-width: 240px;\nmax-height: 150px;\npadding: 10px 20px;\n"]))),ve=Object(_.a)(j.b)(W||(W=Object(g.a)(["\ntext-decoration: none;\ncolor: #9b9b9b;\nfont-weight: 400;\nfont-size: 1.3vw;\n"])));var fe,me,ge,ke=function(){var e=Object(i.useState)(1),t=Object(b.a)(e,2),n=t[0],r=t[1],c=function(e){r(e)};return Object(u.jsxs)(we,{children:[Object(u.jsxs)(Ne,{children:[Object(u.jsx)(ye,{colorBefore1:"green",fontW1:"900",borderB1:"1px solid transparent",tabActivo:n,onClick:function(){return c(1)},children:"ART\xcdCULOS"}),Object(u.jsx)(ye,{colorBefore2:"red",fontW2:"900",borderB2:"1px solid transparent",tabActivo:n,onClick:function(){return c(2)},children:"NUESTROS SERVICIOS"}),Object(u.jsx)(ye,{colorBefore3:"orange",fontW3:"900",borderB3:"1px solid transparent",tabActivo:n,onClick:function(){return c(3)},children:"OFERTAS"})]}),Object(u.jsx)("hr",{style:{marginBottom:"27px"}}),Object(u.jsxs)(Ae,{children:[Object(u.jsx)(Ce,{colorContenido1:"green",ocultarDiv12:"none",ocultarDiv13:"none",tabActivo:n,children:Object(u.jsx)(Se,{children:Object(u.jsx)(je,{})})}),Object(u.jsxs)(Ce,{colorContenido2:"red",ocultarDiv23:"none",ocultarDiv12:"none",tabActivo:n,children:[Object(u.jsx)("h2",{children:"Content 2"}),Object(u.jsx)("hr",{}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum qui adipisci."})]}),Object(u.jsxs)(Ce,{colorContenido3:"orange",ocultarDiv13:"none",ocultarDiv23:"none",tabActivo:n,children:[Object(u.jsx)("h2",{children:"Content 3"}),Object(u.jsx)("hr",{}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed nostrum rerum laudantium totam unde adipisci incidunt modi alias! Accusamus in quia odit aspernatur provident et ad vel distinctio recusandae totam quidem repudiandae omnis veritatis nostrum laboriosam architecto optio rem, dignissimos voluptatum beatae aperiam voluptatem atque. Beatae rerum dolores sunt."})]})]})]})},we=_.a.div(B||(B=Object(g.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    position: relative;\n    max-width: 1280px;\n    max-height: 100%;\n    /* background: #f1f1f1; */\n    margin: 17px auto 0;\n    word-break: break-all;\n    /* border: 1px solid rgba(0, 0, 0, 0.274); */\n"]))),Ne=_.a.div(z||(z=Object(g.a)(["\n    display: flex;\n    justify-content: center;   /* justify-content va con align items; si quiero centrar algo de un flex*/\n    align-items: center;\n"]))),ye=_.a.button(U||(U=Object(g.a)(["\nborder: none;\npadding: 15px;\ntext-align: center;\nmax-width: 50%;\nbackground: rgba(0, 0, 0, 0);\ncursor: pointer;\n/* border-bottom: 1px solid rgba(0, 0, 0, 0.274); */\nbox-sizing: content-box;\nposition: relative;\noutline: none;\n\ncolor: ",";\n\nfont-weight: ",";\n\nborder-bottom: ",';\n\n&:before {\ncontent: "";\ndisplay: block;\nposition: absolute;\nbottom: -6px;\nleft: 50%;\ntransform: translateX(-50%);\nwidth: calc(100% + 2px);\nheight: 5px;\nbackground: ',";\n"])),(function(e){return 1===e.tabActivo?e.colorBefore1:2===e.tabActivo?e.colorBefore2:3===e.tabActivo?e.colorBefore3:"black"}),(function(e){return 1===e.tabActivo?e.fontW1:2===e.tabActivo?e.fontW2:3===e.tabActivo?e.fontW3:"0"}),(function(e){return 1===e.tabActivo?e.borderB1:2===e.tabActivo?e.borderB2:3===e.tabActivo?e.borderB3:"0"}),(function(e){return 1===e.tabActivo?e.colorBefore1:2===e.tabActivo?e.colorBefore2:3===e.tabActivo?e.colorBefore3:"white"})),Ae=_.a.div(G||(G=Object(g.a)(["\n    display:flex;\n    max-width: 1280px;\n    width: 100%;\n"]))),Ce=_.a.div(Y||(Y=Object(g.a)(["\npadding: 20px;\nwidth: 100%;\nheight: 100%;\nbackground: ",";\n\ndisplay: ",";\n\n\nh2{\n    padding: 0px 0 5px 0px;\n  }\nhr{\n    width: 100%;\n    height: 2px;\n    background: #222;\n    margin-bottom: 5px;\n  }\np{\n    width: 100%;\n    height: 100%;\n  }            \n"])),(function(e){return 1===e.tabActivo?e.colorContenido1:2===e.tabActivo?e.colorContenido2:3===e.tabActivo?e.colorContenido3:"white"}),(function(e){return 1===e.tabActivo?e.ocultarDiv23:2===e.tabActivo?e.ocultarDiv13:3===e.tabActivo?e.ocultarDiv12:"none"})),Se=_.a.div(Q||(Q=Object(g.a)(["\ndisplay:flex;\njustify-content: space-between;\ngrid-gap: 17px; \n"]))),Ee=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{style:{margin:"17px"},children:[Object(u.jsx)(Ie,{children:Object(u.jsxs)($,{controles:!0,autoplay:!0,velocidad:"2000",intervalo:"4000",children:[Object(u.jsx)(ne,{children:Object(u.jsxs)(j.b,{to:"/vivero-serrano",children:[Object(u.jsx)("img",{src:oe,alt:""}),Object(u.jsx)(re,{colorFondo:"rgba(0,0,0,00)",children:Object(u.jsx)(Re,{children:"M\xe1s Informaci\xf3n"})})]})}),Object(u.jsx)(ne,{children:Object(u.jsxs)(j.b,{to:"/vivero-serrano",children:[Object(u.jsx)("img",{src:ae,alt:""}),Object(u.jsx)(re,{colorFondo:"rgba(0,0,0,00)",children:Object(u.jsx)(Re,{children:"M\xe1s Informaci\xf3n"})})]})}),Object(u.jsx)(ne,{children:Object(u.jsxs)(j.b,{to:"/vivero-serrano",children:[Object(u.jsx)("img",{src:se,alt:""}),Object(u.jsx)(re,{children:Object(u.jsx)(Re,{children:"M\xe1s Informaci\xf3n"})})]})}),Object(u.jsx)(ne,{children:Object(u.jsxs)(j.b,{to:"/vivero-serrano",children:[Object(u.jsx)("img",{src:le,alt:""}),Object(u.jsx)(re,{colorFondo:"rgba(0,0,0,0)",children:Object(u.jsx)(Re,{children:"M\xe1s Informaci\xf3n"})})]})})]})}),Object(u.jsx)(ke,{}),Object(u.jsx)("div",{children:"productos mas vendidos"}),Object(u.jsx)("div",{children:"info "})]})})}}]),n}(i.Component),Ie=(_.a.p(fe||(fe=Object(g.a)(["\n\tfont-size: 18px;\n\tfont-weight: 700;\n\ttext-transform: uppercase;\n\tmargin-bottom: 10px;\n"]))),_.a.div(me||(me=Object(g.a)(["\n    max-width:1280px;\n    margin:  auto;\n    overflow: hidden;\n"])))),Re=_.a.p(ge||(ge=Object(g.a)(["\n    color:green;\n    padding: 20px;\n    max-width: 450px;\n    font-size: 30px;\n    border: 10px solid green;\n    border-radius:10px;\n    font-weight:900;\n    margin: auto;\n\n    @media screen and (max-width: 960px) {\n\t\tfont-size: 15px;\n        max-width: 350px;\n        padding: 7px;\n        border: 4px solid green;\n\t}\n\n"]))),Te=Ee,Me=function(){return Object(u.jsxs)("div",{style:{height:"500px"},children:[" ",Object(u.jsx)("h1",{children:"GALERIA"})]})},He=function(){return Object(u.jsxs)("div",{style:{height:"500px"},children:[" ",Object(u.jsx)("h1",{children:"CONTACTENOS"})]})},Le=function(){return Object(u.jsxs)("div",{style:{height:"500px"},children:[" ",Object(u.jsx)("h1",{children:"NOTICIAS"})]})},Pe=function(){return Object(u.jsx)("h1",{children:" SERVICIOS"})},Fe=function(){return Object(u.jsx)("h1",{children:" Not Found Error 404"})},De=function(){return Object(u.jsx)("h1",{children:"Por Si acaso"})},Ze=function(){return Object(u.jsx)("h1",{children:"Por Si acaso"})},Je=function(){return Object(u.jsx)("h1",{children:"Por Si acaso"})},Xe=function(){return Object(u.jsx)("h1",{children:"Por Si acaso"})},qe=(n(16),function(){return Object(u.jsxs)(j.b,{to:"/vivero-serrano",className:"linkHeaderRedes",children:[Object(u.jsx)("i",{class:"fas fa-map-marker-alt"})," ","Coop. un techo para los pobres"]})}),Ve=function(){return Object(u.jsxs)(j.b,{to:"/vivero-serrano",className:"linkHeaderRedes",children:[Object(u.jsx)("i",{class:"fab fa-whatsapp"})," ","091-236 5478"]})},We=function(){return Object(u.jsxs)(j.b,{to:"/vivero-serrano",className:"linkHeaderRedes",children:[Object(u.jsx)("i",{class:"far fa-envelope"})," ","laflordeloto@hotmail.com"]})},Be=function(){return Object(u.jsxs)("nav",{className:"navHeaderRedes",children:[Object(u.jsx)(qe,{}),Object(u.jsx)(Ve,{}),Object(u.jsx)(We,{}),Object(u.jsxs)("div",{children:[Object(u.jsx)(j.b,{to:"/vivero-serrano",children:Object(u.jsx)("i",{class:"fab fa-facebook-square   fabColor"})}),Object(u.jsx)(j.b,{to:"/vivero-serrano",children:Object(u.jsx)("i",{class:"fab fa-instagram-square fabColor"})}),Object(u.jsx)(j.b,{to:"/vivero-serrano",children:Object(u.jsx)("i",{class:"fab fa-twitter-square fabColor"})})]})]})},ze=(n(26),function(){return Object(u.jsxs)("div",{className:"contenedorLinks",children:[Object(u.jsx)(j.b,{to:"/vivero-serrano",className:"linkHeaderRedes spanTitulos",children:Object(u.jsx)("span",{children:"INICIO"})}),Object(u.jsx)("span",{children:"|"}),Object(u.jsx)(j.b,{to:"/vivero-serrano",className:"linkHeaderRedes spanTitulos",children:Object(u.jsx)("span",{children:"SERVICIOS"})}),Object(u.jsx)("span",{children:"|"}),Object(u.jsx)(j.b,{to:"/vivero-serrano",className:"linkHeaderRedes spanTitulos",children:Object(u.jsx)("span",{children:"NOTICIAS"})}),Object(u.jsx)("span",{children:"|"}),Object(u.jsx)(j.b,{to:"/vivero-serrano",className:"linkHeaderRedes spanTitulos",children:Object(u.jsx)("span",{children:"GALERIA"})}),Object(u.jsx)("span",{children:"|"}),Object(u.jsx)(j.b,{to:"/vivero-serrano",className:"linkHeaderRedes spanTitulos",children:Object(u.jsx)("span",{children:"CONT\xc1CTENOS"})})]})}),Ue=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsxs)("nav",{className:"navFooter",children:[Object(u.jsxs)("nav",{className:"navFooterTodos",children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("nav",{className:"navFooterLink",children:[Object(u.jsx)(j.b,{to:"/vivero-serrano",className:"linkHeaderRedes",children:Object(u.jsx)("img",{className:"imgLogo",src:p,alt:"logo"})}),Object(u.jsx)(j.b,{to:"/vivero-serrano",className:"linkHeaderRedes",children:Object(u.jsx)("span",{className:"spanLogo",children:" VIVERO SERRANO "})})]}),Object(u.jsx)("div",{children:Object(u.jsx)(ze,{})})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"h1Titulos",children:"ENLACES DE INTERES"}),Object(u.jsxs)("ul",{className:"ulListFooter",children:[Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/vivero-serrano",className:"linkHeaderRedes",children:"Acerca de"})}),Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/vivero-serrano",className:"linkHeaderRedes",children:"Noticias"})}),Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/vivero-serrano",className:"linkHeaderRedes",children:"Galeria"})}),Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/vivero-serrano",className:"linkHeaderRedes",children:"M\xe1s vendidos"})}),Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/vivero-serrano",className:"linkHeaderRedes",children:"Servicios Disponibles"})})]})]}),Object(u.jsxs)("div",{className:"divContactenos",children:[Object(u.jsx)("h1",{className:"h1Titulos",children:"CONT\xc1CTANOS"}),Object(u.jsx)("div",{children:Object(u.jsx)(Ve,{})}),Object(u.jsx)("div",{children:Object(u.jsx)(We,{})}),Object(u.jsx)("div",{children:Object(u.jsx)(qe,{})})]})]}),Object(u.jsxs)("nav",{className:"navLine",children:[Object(u.jsx)("br",{}),Object(u.jsx)("hr",{}),Object(u.jsx)("br",{})]}),Object(u.jsxs)("nav",{className:"navFooterLinkRedes",children:[Object(u.jsx)("div",{}),Object(u.jsxs)("div",{className:"divLink",children:[Object(u.jsx)(j.b,{to:"/vivero-serrano",children:Object(u.jsx)("i",{class:"fab fa-facebook-square   fabColor"})}),Object(u.jsx)(j.b,{to:"/vivero-serrano",children:Object(u.jsx)("i",{class:"fab fa-instagram-square fabColor"})}),Object(u.jsx)(j.b,{to:"/vivero-serrano",children:Object(u.jsx)("i",{class:"fab fa-twitter-square fabColor"})})]}),Object(u.jsx)("div",{children:Object(u.jsx)("span",{className:"spanCopyright",children:"Copyright \xa9 2021 |  desarrollado por Rivas, Serrano, Guacho, Heredia"})})]})]})})}}]),n}(i.Component),Ge=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(u.jsxs)(j.a,{children:[Object(u.jsx)(Be,{}),Object(u.jsx)(f,{}),Object(u.jsxs)(m.c,{children:[Object(u.jsx)(m.a,{exact:!0,path:"/vivero-serrano",children:Object(u.jsx)(Te,{})}),Object(u.jsx)(m.a,{path:"/servicios",component:Pe}),Object(u.jsx)(m.a,{path:"/noticias",component:Le}),Object(u.jsx)(m.a,{exact:!0,path:"/galeria",component:Me}),Object(u.jsx)(m.a,{exact:!0,path:"/contactenos",component:He}),Object(u.jsx)(m.a,{exact:!0,path:"/galeria/posible1",component:De}),Object(u.jsx)(m.a,{exact:!0,path:"/galeria/posible2",component:Ze}),Object(u.jsx)(m.a,{exact:!0,path:"/galeria/posible3",component:Je}),Object(u.jsx)(m.a,{exact:!0,path:"/galeria/posible4",component:Xe}),Object(u.jsx)(m.a,{component:Fe})]}),Object(u.jsx)(Ue,{})]})}}]),n}(i.Component);o.a.render(Object(u.jsx)(Ge,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.8e95d055.chunk.js.map