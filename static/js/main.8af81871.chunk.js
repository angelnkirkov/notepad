(this.webpackJsonpnotepad=this.webpackJsonpnotepad||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(8),o=n.n(a),s=n(10),d=n(7),r=n(9),l=n.n(r),j=(n(15),n(3)),b=n(6),u=n(0);var v=function(e){var t=e.activeNote,n=e.onUpdateNote,i=function(e,i){var c;n(Object(b.a)(Object(b.a)({},t),{},(c={},Object(j.a)(c,e,i),Object(j.a)(c,"lastModified",Date.now()),c)))};return t?Object(u.jsxs)("div",{className:"app-main",children:[Object(u.jsxs)("div",{className:"app-main-note-edit",children:[Object(u.jsx)("input",{type:"text",id:"title",value:t.title,onChange:function(e){return i("title",e.target.value)},autoFocus:!0}),Object(u.jsx)("textarea",{id:"body",placeholder:"Write your note here...",value:t.body,onChange:function(e){return i("body",e.target.value)}})]}),Object(u.jsxs)("div",{className:"app-main-note-preview",children:[Object(u.jsx)("h1",{className:"preview-title",children:t.title}),Object(u.jsx)("div",{className:"markdown-preview",children:t.body})]})]}):Object(u.jsx)("div",{className:"no-active-note",children:"No note selected"})};var p=function(e){var t=e.notes,n=e.onAddNote,i=e.onDeleteNote,c=e.activeNote,a=e.setActiveNote,o=t.sort((function(e,t){return t.lastModified-e.lastModified}));return Object(u.jsxs)("div",{className:"app-sidebar",children:[Object(u.jsxs)("div",{className:"app-sidebar-header",children:[Object(u.jsx)("h1",{children:"Notepad"}),Object(u.jsx)("button",{onClick:n,children:"Add"})]}),Object(u.jsx)("div",{className:"app-sidebar-notes",children:o.map((function(e){return Object(u.jsxs)("div",{className:"app-sidebar-note ".concat(e.id===c&&"active"," "),onClick:function(){return a(e.id)},children:[Object(u.jsxs)("div",{className:"sidebar-note-title",children:[Object(u.jsx)("strong",{children:e.title}),Object(u.jsx)("button",{onClick:function(){return i(e.id)},children:"Delete"})]}),Object(u.jsx)("p",{children:e.body&&e.body.substr(0,100)+"..."}),Object(u.jsxs)("small",{className:"note-meta",children:["Last modified"," ",new Date(e.lastModified).toLocaleDateString("en-GB",{hour:"2-digit",minute:"2-digit"})]})]})}))})]})};var O=function(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!1),o=Object(d.a)(a,2),r=o[0],j=o[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(p,{notes:n,onAddNote:function(){var e={id:l()(),title:"Untitled Note",body:"",lastModified:Date.now()};c([e].concat(Object(s.a)(n)))},onDeleteNote:function(e){c(n.filter((function(t){return t.id!==e})))},activeNote:r,setActiveNote:j}),Object(u.jsx)(v,{activeNote:n.find((function(e){return e.id===r})),onUpdateNote:function(e){var t=n.map((function(t){return t.id===r?e:t}));c(t)}})]})};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.8af81871.chunk.js.map