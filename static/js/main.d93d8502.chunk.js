(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(4),i=n.n(o),r=(n(9),n(10),n(2)),u=n(0),s="2ecc90681044ffa3960e4211bb4ea71d",h="https://api.openweathermap.org/data/2.5/";var j=function(){var e=Object(c.useState)({}),t=Object(r.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(""),i=Object(r.a)(o,2),j=i[0],b=i[1],f=Object(c.useState)("Waterloo"),d=Object(r.a)(f,2),l=d[0],p=d[1];return Object(c.useEffect)((function(){fetch("".concat(h,"weather?q=").concat(l,"&units=metric&APPID=").concat(s)).then((function(e){return e.json()})).then((function(e){a(e),console.log(e)}))}),[l]),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"text",value:j,placeholder:"Search Location...",onChange:function(e){b(e.target.value)},onKeyPress:function(e){""!=j&&"Enter"===e.key&&p(j)}}),Object(u.jsx)("button",{onClick:function(){""!=j&&p(j)},children:"Submit"}),"undefined"!=typeof n.main?Object(u.jsxs)("h1",{children:[n.name,", ",n.sys.country,", ",n.weather[0].main,", ",Math.round(n.main.temp)]}):""]})};var b=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(j,{})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),f()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.d93d8502.chunk.js.map