(this["webpackJsonpfirst-react-app"]=this["webpackJsonpfirst-react-app"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(1),a=n.n(c),s=n(8),o=n.n(s),u=(n(15),n(9)),i=n(2),p=n.n(i),j=n(4),f=n(6),l=function(t){var e=t.text;return Object(r.jsx)("header",{children:Object(r.jsx)("h1",{children:e})})},h=function(t){var e=t.placeholder,n=t.onAdd,a=Object(c.useState)(""),s=Object(f.a)(a,2),o=s[0],u=s[1];return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault(),o?(n(o),u("")):alert("please add text to post")},children:[Object(r.jsx)("textarea",{className:"text-content",placeholder:e,value:o,onChange:function(t){return u(t.target.value)}}),Object(r.jsx)("button",{children:" dont tweet "})]})},d=function(t){var e=t.notTweets;return Object(r.jsx)("div",{className:"text-content not-tweets",children:Object(r.jsxs)("h3",{children:[" ",e.content]})})},b=function(t){var e=t.notTweets;return Object(r.jsx)(r.Fragment,{children:e.map((function(t,e){return Object(r.jsx)(d,{className:"text-content not-tweets",notTweets:t},e)}))})},x=function(t){var e=t.onClick;return Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"btn",onClick:e,children:"Refresh"})})};var O=function(){var t=Object(c.useState)([]),e=Object(f.a)(t,2),n=e[0],a=e[1];Object(c.useEffect)((function(){(function(){var t=Object(j.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s();case 2:e=t.sent,a(e),console.log(e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var s=function(){var t=Object(j.a)(p.a.mark((function t(){var e,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://14.201.198.86:5000/api/posts");case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=Object(j.a)(p.a.mark((function t(e){var r,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://14.201.198.86:5000/api/posts",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({content:e})});case 2:return r=t.sent,t.next=5,r.json();case 5:c=t.sent,a([c].concat(Object(u.a)(n)));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=function(){var t=Object(j.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a([n]),console.log("refreshed");case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(l,{text:"not twitter"}),Object(r.jsx)(h,{placeholder:"what's not happening?",onAdd:o}),Object(r.jsx)(b,{notTweets:n}),Object(r.jsx)(x,{onClick:i})]})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),r(t),c(t),a(t),s(t)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root")),v()}},[[17,1,2]]]);
//# sourceMappingURL=main.c2fdf5c7.chunk.js.map