"use strict";(self.webpackChunkez_img=self.webpackChunkez_img||[]).push([[807],{807:function(n,e,c){c.r(e),c.d(e,{default:function(){return t}});var o=c(791),s=c(184);var t=function(n){var e=(0,o.useRef)(""),c=(0,o.useRef)(""),t=Object.values(null===n||void 0===n?void 0:n.imgURL),a=function(n){n.target.parentElement.className="error"};function r(){var n=e.current.className;e.current.className="modalContanier"===n?"close":"modalContanier"}var l="http://localhost:4000";return(0,s.jsx)("section",{className:"layout_imgbox",children:(0,s.jsxs)("div",{className:"column_imgBox",children:[t.map((function(n){return n.image_url})).map((function(n,e){return(0,s.jsxs)("div",{className:"box",children:[(0,s.jsx)("img",{className:"rander_img",src:n,onError:a},e),(0,s.jsxs)("div",{className:"imgIcon",children:[(0,s.jsx)("button",{onClick:function(){return function(n){var e=localStorage.getItem("USERNAME");console.log(n),console.log("".concat(l,"/Profiles/").concat(e)),fetch("".concat(l,"/Profiles/").concat(e),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({scrapImg:"".concat(n)})}).then((function(n){return console.log(n.json())}))}(n)},children:"\uc2a4\ud06c\ub7a9"}),(0,s.jsx)("button",{onClick:function(){return e=n,c.current.src=e,void r();var e},children:"\ud06c\uac8c\ubcf4\uae30"}),(0,s.jsx)("button",{type:"button",onClick:function(){},children:"\ub2e4\uc6b4\ub85c\ub4dc"})]})]})})),(0,s.jsx)("div",{className:" close",onClick:function(n){"modalContanier"===n.target.className&&(e.current.className="close")},ref:e,children:(0,s.jsx)("div",{className:"modal",children:(0,s.jsxs)("div",{className:"column modalShow",children:[(0,s.jsx)("img",{ref:c}),(0,s.jsx)("button",{className:"modalBtn",onClick:function(n){r()},children:"X"})]})})})]})})}}}]);
//# sourceMappingURL=807.df4eebda.chunk.js.map