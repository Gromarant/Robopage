(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,i,n){},14:function(e,i,n){},16:function(e,i,n){"use strict";n.r(i);var a=n(1),t=n(3),r=n.n(t),s=(n(12),n(4)),c=n(5),o=n(7),l=n(6),d=n(0),u=function(e){var i=e.id,n=e.name,a=e.email;return Object(d.jsxs)("div",{className:"bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(d.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(i,"?200x200")}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:n}),Object(d.jsx)("p",{children:a})]})]})},m=function(e){var i=e.robots;return Object(d.jsx)("div",{children:i.map((function(e,n){return Object(d.jsx)(u,{id:i[n].id,name:i[n].name,email:i[n].email},n)}))})},h=function(e){e.searchfield;var i=e.searchChange;return Object(d.jsx)("div",{className:"pa2",children:Object(d.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:i})})},b=function(e){return Object(d.jsx)("div",{style:{overflow:"scroll",border:"3px solid rgba(7,40,65,1)  ",height:"700px"},children:e.children})},j=[{id:"one",username:"billie",email:"bilmore@monday.zet"},{id:"two",username:"Mig",email:"migfullness@relax.xix"},{id:"three",username:"Luis",email:"luichi@art.is"},{id:"four",username:"Vick",email:"victory@design.in"},{id:"five",username:"Mery",email:"merycondo@clean.all"},{id:"six",username:"Mum",email:"mumycita@fit.ness"},{id:"seven",username:"Pilli",email:"pillisimbol@guap.eton"},{id:"eight",username:"Dad",email:"dady@col.on"},{id:"nine",username:"Twinkie",email:"tungue_out@var.rod"},{id:"ten",username:"RunRun",email:"catico@pas.ao"},{id:"eleven",username:"Hermenejildo",email:"hermessss@ilumina.do"},{id:"twelve",username:"Wenceslao",email:"wen_cambie@miNomb.re"}],f=(n(14),function(e){Object(o.a)(n,e);var i=Object(l.a)(n);function n(){var e;return Object(s.a)(this,n),(e=i.call(this)).onSearchChange=function(i){e.setState({searchfield:i.target.value})},e.state={robots:[],searchfield:""},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.setState({robots:j})}},{key:"render",value:function(){var e=this.state,i=e.robots,n=e.searchfield,a=i.filter((function(e){return e.username.toLowerCase().includes(n.toLowerCase())}));return i.length?Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(d.jsx)(h,{searchChange:this.onSearchChange}),Object(d.jsx)(b,{children:Object(d.jsx)(m,{robots:a})})]}):Object(d.jsx)("h1",{children:"Loading"})}}]),n}(a.Component));n(15);r.a.render(Object(d.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4c2b709e.chunk.js.map