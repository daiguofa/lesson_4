(this["webpackJsonpreact-lesson"]=this["webpackJsonpreact-lesson"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(22),r=n.n(s),i=n(13),l=n(4),o=(n(32),n.p+"static/media/logo.6ce24c58.svg"),d=(n(33),n(0));var u,j=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(d.jsxs)("p",{children:["Edit ",Object(d.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(d.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"}),Object(d.jsxs)("ul",{className:"nav nav-pills",children:[Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/",children:"Home"})}),"\xa0\xa0",Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/Lesson4",children:"Lesson4(Todo)"})}),Object(d.jsx)("li",{style:{display:"none"},children:Object(d.jsx)(i.b,{to:"/carbon",children:"Carbon"})})]})]})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))},b=n(24),p=n(7),O=n(8),f=n(10),m=n(9),v=n(25),x=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(p.a)(this,n),(c=t.call(this,e)).state={value:e.value||""},c}return Object(O.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"clear",value:function(){this.setState({value:""})}},{key:"handleKeyUp",value:function(e){var t=this.props.addNew,n=this.state.value.trim();e.keyCode===v.a&&n&&(t(n),this.clear())}},{key:"render",value:function(){var e=this;return Object(d.jsx)("input",{type:"text",className:"form-control add-todo",placeholder:"\u6dfb\u52a0",value:this.state.value,onKeyUp:function(t){return e.handleKeyUp(t)},onChange:function(t){return e.handleChange(t)}})}}]),n}(a.a.Component),g=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(p.a)(this,n),(c=t.call(this,e)).state={checked:c.props.checked},c}return Object(O.a)(n,[{key:"handleChange",value:function(e){var t=e.target.checked;this.setState({checked:t}),this.props.onChange(t)}},{key:"render",value:function(){return Object(d.jsx)("input",{type:"checkbox",checked:this.state.checked,onChange:this.handleChange.bind(this)})}}]),n}(c.Component),y=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.changeStatus,c=e.deleteRow,a="todo-item ui-state-default"+(t.completed?"completed":"pending");return Object(d.jsxs)("div",{className:a,style:{display:"flex",justifyContent:"space-between"},children:[Object(d.jsx)("div",{className:"checkbox",children:Object(d.jsxs)("label",{children:[Object(d.jsx)(g,{checked:t.completed,onChange:function(e){return n(t.id,e)}}),t.text]})}),Object(d.jsx)("button",{type:"button",className:"btn btn-default",onClick:function(e){return c(t.id,e)},children:"\u5220\u9664"})]})}}]),n}(a.a.Component),k=(n(26),n(11)),N="all",C="active",S="completed";var w={applyFilter:function(e,t){switch(t){case S:return e.filter((function(e){return!0===e.completed}));case C:return e.filter((function(e){return!0!==e.completed}));default:return e}},OPTIONS:(u={},Object(k.a)(u,N,"All"),Object(k.a)(u,C,"Active"),Object(k.a)(u,S,"Completed"),u),FILTER_ALL:N,FILTER_ACTIVE:C,FILTER_COMPLETED:S},A=w.OPTIONS;function L(e){var t=e.filter,n=e.change,c=function(e){return e==t?"selected":""};return Object(d.jsx)("ul",{className:"filters list-unstyled clearfix",children:Object.keys(A).map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)("a",{onClick:function(){return n(e)},className:c(e),children:A[e]})},e)}))})}function R(e){var t=e.count,n=e.filter,c=e.changeFilter;return Object(d.jsxs)("div",{className:"todo-footer clearfix",children:[Object(d.jsxs)("div",{className:"pull-left",children:[Object(d.jsx)("strong",{children:Object(d.jsx)("span",{className:"count-todos",children:t})}),"items left"]}),Object(d.jsx)("div",{className:"pull-right",children:Object(d.jsx)(L,{filter:n,change:c})}),Object(d.jsx)("div",{className:"pull-left",children:Object(d.jsx)("a",{href:"#/",children:"\u9996\u9875"})})]})}function F(e){var t=e.items,n=e.changeStatus,c=e.deleteRow;return 0===t.length?Object(d.jsx)("p",{className:"alert alert-info",children:"There are no items."}):Object(d.jsx)("ul",{className:"list-unstyled",children:t.map((function(e){return Object(d.jsx)(y,{data:e,changeStatus:n,deleteRow:c},e.id)}))})}var T=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.items,c=e.addNew,a=e.filter,s=e.changeFilter,r=e.changeStatus,i=e.deleteRow,l=w.applyFilter(n,a);return Object(d.jsxs)("div",{className:"todolist",children:[Object(d.jsxs)("header",{children:[Object(d.jsx)("h1",{children:t}),Object(d.jsx)(x,{addNew:c})]}),Object(d.jsx)(F,{items:l,changeStatus:r,deleteRow:i}),Object(d.jsx)(R,{count:l.length,filter:a,changeFilter:s})]})}}]),n}(a.a.Component),I=n(20),E=n.n(I),_=n(49);function P(){return[{id:Object(_.a)(),text:"Learn Javascript",completed:!1},{id:Object(_.a)(),text:"Learn React",completed:!1},{id:Object(_.a)(),text:"Build a React App",completed:!1}]}var B=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var c;return Object(p.a)(this,n),(c=t.call(this,e)).state={filter:w.FILTER_ALL,items:P()},c}return Object(O.a)(n,[{key:"changeStatus",value:function(e,t){var n=function(e,t,n){var c=e.findIndex((function(e){return e.id===t}));return E()(e,Object(k.a)({},c,{completed:{$set:n}}))}(this.state.items,e,t);this.setState({items:n})}},{key:"changeFilter",value:function(e){this.setState({filter:e})}},{key:"addNew",value:function(e){var t=function(e,t){var n=Object.assign({id:Object(_.a)()},t);return e.concat([n])}(this.state.items,{text:e,completed:!1});this.setState({items:t})}},{key:"deleteRow",value:function(e){var t=function(e,t){var n=e.findIndex((function(e){return e.id===t}));return console.log("itemId - index:",t,n),E()(e,{$splice:[[n,1]]})}(this.state.items,e);this.setState({items:t})}},{key:"render",value:function(){this.state.items;return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)(T,Object(b.a)({title:"My Todo React App",changeFilter:this.changeFilter.bind(this),addNew:this.addNew.bind(this),changeStatus:this.changeStatus.bind(this),deleteRow:this.deleteRow.bind(this)},this.state))})})}}]),n}(a.a.Component),M=(n(41),n(42),n.p+"static/media/logo.6ce24c58.svg"),J=(n(43),n(50)),K=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("img",{src:M,className:"App-logo",alt:"logo"}),Object(d.jsxs)("p",{children:["Edit ",Object(d.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(d.jsx)(J.a,{children:"Button"}),Object(d.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})}}]),n}(c.Component);console.log("REACT_APP_MSG:","test react env"),r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",component:j}),Object(d.jsx)(l.a,{path:"/Lesson4",component:B}),Object(d.jsx)(l.a,{path:"/carbon",component:K})]})}),document.getElementById("root")),h()}},[[44,1,2]]]);
//# sourceMappingURL=main.3510aecb.chunk.js.map