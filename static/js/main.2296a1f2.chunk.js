(this["webpackJsonpclozd-interview-project"]=this["webpackJsonpclozd-interview-project"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(6),i=n.n(s),a=(n(11),n(2)),o=n(3),l=(n(12),n(4)),d=n(0);var j=function(e){var t=e.index,n=e.setCurrentPage,r=e.users,c=e.setUsers,s=e.setEntryStatement;function i(e){return 1===e?"1 to 1000":2===e?"1001 to 2000":3===e?"2001 to 3000":4===e?"3001 to 4000":5===e?"4001 to 5000":6===e?"5001 to 6000":7===e?"6001 to 7000":void 0}return Object(d.jsx)("div",{className:"pagination-button",onClick:function(){void 0!==r[t][0]?(n(t),s(i(t))):fetch("https://polar-earth-69438.herokuapp.com/getuserdata/?results=1000&page=".concat(t,"&seed=abc&exc=gender,login,registered,id,nat"),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){c(Object(a.a)(Object(a.a)({},r),{},Object(l.a)({},t,e.results))),n(t),s(i(t))})).catch((function(e){console.log(e)}))},children:t})};var u=function(e){var t=e.user,n=e.userIndex,r=e.currentPage,c=e.setCurrentProfile;return Object(d.jsxs)("div",{className:"summary-entry",onClick:function(){return c({display:!0,currentPage:r,userIndex:n})},children:[Object(d.jsxs)("div",{className:"ph4px",children:["Name:",t.name.first," ",t.name.last]}),Object(d.jsxs)("div",{className:"ph4px",children:["Email:",t.email]}),Object(d.jsxs)("div",{className:"ph4px",children:["Country:",t.location.country]}),Object(d.jsxs)("div",{className:"ph4px",children:["City:",t.location.city]})]})};var b=function(e){var t=e.users,n=e.setUsers,r=e.paginationPlaceholder,c=e.currentPage,s=e.setCurrentPage,i=e.entryStatement,a=e.setEntryStatement,o=e.setCurrentProfile;return Object(d.jsxs)("div",{className:"summary",children:[Object(d.jsx)("h2",{children:"Users Summary List"}),Object(d.jsxs)("div",{children:["Entries ",i]}),Object(d.jsx)("div",{className:"entries-container",children:t[c].map((function(e,t){return Object(d.jsx)(u,{user:e,userIndex:t,currentPage:c,setCurrentProfile:o},e.email)}))}),Object(d.jsx)("div",{className:"flex-row",children:r.map((function(e){return Object(d.jsx)(j,{index:e,setCurrentPage:s,users:t,setUsers:n,setEntryStatement:a},e)}))})]})};var h=function(e){var t=e.user,n=e.setCurrentProfile,r=e.currentProfile;return Object(d.jsxs)("div",{className:"profile",children:[Object(d.jsx)("div",{children:"Profile"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:t.picture.large}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{children:["Name: ",t.name.first," ",t.name.last]}),Object(d.jsxs)("div",{children:["Email: ",t.email]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"Location: "}),Object(d.jsxs)("div",{children:["Street Name and Number: ",t.location.street.number," ",t.location.street.name]}),Object(d.jsxs)("div",{children:["City: ",t.location.city]}),Object(d.jsxs)("div",{children:["State: ",t.location.state]}),Object(d.jsxs)("div",{children:["Postal Code: ",t.location.postcode]}),Object(d.jsxs)("div",{children:["Country ",t.location.country]})]}),Object(d.jsxs)("div",{children:["Phone Number: ",t.cell]}),Object(d.jsxs)("div",{children:["Date of Birth: ",t.dob.date]}),Object(d.jsx)("div",{className:"flex-row justify-center",children:Object(d.jsx)("div",{onClick:function(){return n(Object(a.a)(Object(a.a)({},r),{},{display:!1}))},className:"back",children:"Back"})})]})]})]})};var O=function(){var e=Object(r.useState)(!0),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(1),i=Object(o.a)(s,2),l=i[0],j=i[1],u=Object(r.useState)({1:[],2:[],3:[],4:[],5:[],6:[],7:[]}),O=Object(o.a)(u,2),x=O[0],m=O[1],v=Object(r.useState)("1 to 1000"),f=Object(o.a)(v,2),p=f[0],g=f[1],y=Object(r.useState)({display:!1,currentPage:1,userIndex:0}),P=Object(o.a)(y,2),C=P[0],N=P[1];return Object(r.useEffect)((function(){fetch("https://polar-earth-69438.herokuapp.com/getuserdata/?results=1000&page=1&seed=abc&exc=gender,login,registered,id,nat",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){m(Object(a.a)(Object(a.a)({},x),{},{1:e.results})),c(!1)})).catch((function(e){console.log(e)}))}),[]),Object(d.jsx)("div",{className:"App",children:!1===n?Object(d.jsx)("div",{className:"w-100",children:C.display?Object(d.jsx)(h,{user:x[l][C.userIndex],currentProfile:C,setCurrentProfile:N}):Object(d.jsx)(b,{users:x,setUsers:m,paginationPlaceholder:[1,2,3,4,5,6,7],currentPage:l,setCurrentPage:j,entryStatement:p,setEntryStatement:g,currentProfile:C,setCurrentProfile:N})}):Object(d.jsx)("div",{children:"Loading..."})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),x()}},[[14,1,2]]]);
//# sourceMappingURL=main.2296a1f2.chunk.js.map