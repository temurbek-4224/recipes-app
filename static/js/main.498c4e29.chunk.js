(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(5),s=c.n(i),r=(c(11),c(4)),o=c.n(r),u=c(6),l=c(2),p=(c(13),c(14),c(0)),j=function(e){var t=e.title,c=e.image,n=e.calories,a=e.ingredients;return Object(p.jsxs)("div",{className:"recipe",children:[Object(p.jsx)("h1",{children:t}),Object(p.jsx)("ol",{children:a.map((function(e){return Object(p.jsx)("li",{children:e.text})}))}),Object(p.jsx)("p",{children:n}),Object(p.jsx)("img",{className:"image",src:"".concat(c),alt:""})]})},b=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),r=s[0],b=s[1],h=Object(n.useState)("chicken"),d=Object(l.a)(h,2),f=d[0],m=d[1];Object(n.useEffect)((function(){O()}),[f]);var O=function(){var e=Object(u.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(f,"&app_id=").concat("e72dc4ca","&app_key=").concat("1904e21167a0d93707bafa80f39998c0\t"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c.hits),console.log(c.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{className:"title",children:"Recipe App"}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(r),b("")},className:"search-form",children:[Object(p.jsx)("input",{className:"search-bar",type:"text",value:r,onChange:function(e){b(e.target.value),console.log(r)}}),Object(p.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]}),Object(p.jsx)("div",{className:"recipes",children:c.map((function(e){return Object(p.jsx)(j,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(b,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.498c4e29.chunk.js.map