"use strict";(self.webpackChunksobecednica_external=self.webpackChunksobecednica_external||[]).push([[709],{47028:(e,t,s)=>{s.d(t,{j:()=>n});s(65043);var a=s(70579);function n(e){return(0,a.jsx)("div",{id:"SubmitButton",children:(0,a.jsx)("div",{className:"text-button-submit",children:(0,a.jsx)("input",{className:"input-submit-button",type:"submit",value:e.text})})})}},15709:(e,t,s)=>{s.r(t),s.d(t,{default:()=>v});var a=s(65043),n=s(30800),i=s(47028),o=s(35475);const r="\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u044d\u0442\u043e \u043f\u043e\u043b\u0435";var l=s(70579);function d(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"auth-form-background",children:(0,l.jsxs)("form",{className:"auth-form",action:"",method:"POST",onInput:e=>e.target.setCustomValidity(""),onInvalid:e=>e.target.setCustomValidity(r),onSubmit:t=>{e.submitForm(t)},children:[(0,l.jsxs)("div",{className:"input-container",children:[(0,l.jsx)("div",{className:"field-hint",children:"\u041b\u043e\u0433\u0438\u043d"}),(0,l.jsx)("input",{type:"text",autoComplete:"on",id:"login",name:"login",required:!0})]}),(0,l.jsxs)("div",{className:"input-container password",children:[(0,l.jsx)("div",{className:"field-hint",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),(0,l.jsx)("input",{type:"password",autoComplete:"on",id:"password-input",name:"password",required:!0}),(0,l.jsx)("div",{className:"password-control",onClick:e=>{!function(e){let t=document.getElementById("password-input");"password"===t.getAttribute("type")?(e.classList.add("view"),t.setAttribute("type","text")):(e.classList.remove("view"),t.setAttribute("type","password"))}(e.target)}})]}),(0,l.jsx)("div",{className:"submit-button-auth",children:(0,l.jsx)(i.j,{text:"\u0412\u043e\u0439\u0442\u0438"})})]})}),(0,l.jsxs)("div",{className:"auth-hint-form",children:[(0,l.jsx)("div",{children:"\u041d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"}),(0,l.jsx)("div",{children:(0,l.jsx)(o.N_,{className:"auth-hint-form-link",to:"/registration",children:"\u041f\u043e\u0434\u0430\u0439\u0442\u0435 \u0437\u0430\u044f\u0432\u043a\u0443."})})]})]})}var c=s(27772),u=s(75724),m=s(5897),h=s(91754),p=s(61755),x=s(25263);class v extends a.Component{constructor(e){super(e),this.handleSubmitForm=this.handleSubmitForm.bind(this)}handleSubmitForm(e){e.preventDefault();let t=e.target[0].value.trim(),s=e.target[1].value;const a=new URLSearchParams;a.append("username",t),a.append("password",s),t&&s&&fetch(u.He,{method:"POST",credentials:"include",body:a}).then((e=>{e.status===x.oM||e.status===x.bx?this.props.checkAuth(e.status,h.C$):window.localStorage.setItem(h.C$,c.Iy)})).then((()=>{window.localStorage.getItem(h.C$)===c.Iy?(0,m.k)("error",h.uG).then((()=>window.localStorage.removeItem(h.C$))).catch((e=>{window.localStorage.removeItem(h.C$),(0,m.k)("info",p.UT)})):window.localStorage.getItem(h.C$)===c.LL&&(0,m.k)("warning",h.WY).then((()=>{window.localStorage.removeItem(h.C$)})).catch((e=>{window.localStorage.removeItem(h.C$),(0,m.k)("info",p.UT),console.log(e)}))})).catch((e=>{(0,m.k)("info",p.UT),console.log(e)}))}componentDidMount(){let e=[...document.querySelectorAll("input")];for(let t of e)t.title=r}render(){return(0,l.jsxs)("div",{className:"page-area-container",children:[(0,l.jsx)(n.Y,{page:"pageAuth"}),(0,l.jsxs)("div",{className:"content-page-container",children:[(0,l.jsx)("div",{className:"additional-header-text",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),(0,l.jsx)(d,{submitForm:this.handleSubmitForm})]})]})}}}}]);
//# sourceMappingURL=709.1d447662.chunk.js.map