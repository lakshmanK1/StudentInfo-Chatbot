"use strict";(self.webpackChunkchatbot_student_management=self.webpackChunkchatbot_student_management||[]).push([[578],{9282:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var a=n(2791),s=n(5),r=n.n(s),i=n(1413),o=n(184);var c=function(e){return(0,o.jsx)("div",{children:(0,o.jsx)("button",{className:"ini-btn",onClick:function(){return e.actionProvider.handleUserMsg(),void setTimeout((function(){e.actionProvider.handleStart()}),1e3)},children:"Got it"})})},u=n(8948),d=n(9434),l=n(8820),m=function(e){var t=(0,a.useRef)(),n=(0,d.I0)();return(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{className:"ipdetail-head",children:"Enter your name"}),(0,o.jsxs)("form",{className:"ip-form",onSubmit:function(a){a.preventDefault();var s="id"+Math.random().toString(16).slice(2),r=t.current.value,i={id:s,name:r};n(u.u.addStudentInfo(i)),e.actionProvider.studentInfoText(r),setTimeout((function(){e.actionProvider.handleGreetWithName()}),1e3)},children:[(0,o.jsx)("input",{type:"text",placeholder:"name",ref:t}),(0,o.jsx)("button",{type:"submit",children:(0,o.jsx)(l.gYb,{className:"ip-sendbtn"})})]})]})},f=function(e){var t=(0,a.useRef)(),n=(0,d.I0)(),s=(0,d.v9)((function(e){return e.studentStore.studentData}));return(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{className:"ipdetail-head",children:"Enter your age"}),(0,o.jsx)("div",{className:"box",children:(0,o.jsxs)("select",{ref:t,onChange:function(){var a=t.current.value;n(u.u.addStudentInfo((0,i.Z)((0,i.Z)({},s),{},{age:a}))),e.actionProvider.studentInfoText(a),setTimeout((function(){e.actionProvider.handleEnd()}),1e3)},children:[(0,o.jsx)("option",{value:"select age",children:"select age"}),(0,o.jsx)("option",{value:"18-25",children:"18-25"}),(0,o.jsx)("option",{value:"26-35",children:"26-35"}),(0,o.jsx)("option",{value:"36-45",children:"36-45"})]})})]})},h=function(){var e=(0,d.v9)((function(e){return e.studentStore.studentData}));return(0,o.jsx)("div",{children:(0,o.jsx)("p",{children:"Hey ".concat(e.name,", one more question for you.")})})},g=n(9439),v=n(7689);var x=function(){var e=(0,a.useState)(5),t=(0,g.Z)(e,2),n=t[0],s=t[1],r=(0,v.s0)();return(0,a.useEffect)((function(){if(n>0&&setInterval((function(){return s(n-1)}),2e3),0===n)return r("/studentpage")}),[n]),(0,o.jsxs)("div",{className:"timer-div",children:[(0,o.jsx)("h1",{className:"timer-header",children:"Redirecting you Student Page!"}),(0,o.jsx)("h2",{className:"timer-count",children:n})]})};var j=n.p+"static/media/bot.f1377573c19196ee1ddccd835065fe6f.svg";var b=function(){return(0,o.jsx)("div",{className:"react-chatbot-kit-chat-bot-avatar",children:(0,o.jsx)("div",{className:"react-chatbot-kit-chat-bot-avatar-container",style:{background:"none"},children:(0,o.jsx)("img",{alt:"BotAvatar",src:j})})})},Z={lang:"no",botName:"ChatBot",customStyles:{botMessageBox:{backgroundColor:"#04668a"},chatButton:{backgroundColor:"#0f5faf"}},initialMessages:[(0,s.createChatBotMessage)("Hello, Welcome to student info system!",{widget:"gotItButton"})],customComponents:{botAvatar:function(e){return(0,o.jsx)(b,(0,i.Z)({},e))}},widgets:[{widgetName:"gotItButton",widgetFunc:function(e){return(0,o.jsx)(c,(0,i.Z)({},e))}},{widgetName:"firstQuestion",widgetFunc:function(e){return(0,o.jsx)(m,(0,i.Z)({},e))}},{widgetName:"secondQuestion",widgetFunc:function(e){return(0,o.jsx)(f,(0,i.Z)({},e))}},{widgetName:"timer",widgetFunc:function(e){return(0,o.jsx)(x,(0,i.Z)({},e))}}]},p=n(3433),N=function(e){var t=e.createChatBotMessage,n=e.setState,r=e.children,c=function(){var e=t("Hello. Nice to meet you.");n((function(t){return(0,i.Z)((0,i.Z)({},t),{},{messages:[].concat((0,p.Z)(t.messages),[e])})}))},u=function(){var e=t("Awesome, answer below questions.",{widget:"firstQuestion"});n((function(t){return(0,i.Z)((0,i.Z)({},t),{},{messages:[].concat((0,p.Z)(t.messages),[e])})}))},d=function(){var e=t((0,o.jsx)(h,{}),{widget:"secondQuestion"});n((function(t){return(0,i.Z)((0,i.Z)({},t),{},{messages:[].concat((0,p.Z)(t.messages),[e])})}))},l=function(){var e=(0,s.createClientMessage)("Got it");n((function(t){return(0,i.Z)((0,i.Z)({},t),{},{messages:[].concat((0,p.Z)(t.messages),[e])})}))},m=function(){var e=t("Thank you",{widget:"timer"});n((function(t){return(0,i.Z)((0,i.Z)({},t),{},{messages:[].concat((0,p.Z)(t.messages),[e])})}))},f=function(e){var t=(0,s.createClientMessage)(e);n((function(e){return(0,i.Z)((0,i.Z)({},e),{},{messages:[].concat((0,p.Z)(e.messages),[t])})}))};return(0,o.jsx)("div",{children:a.Children.map(r,(function(e){return a.cloneElement(e,{actions:{handleHello:c,handleStart:u,handleUserMsg:l,handleGreetWithName:d,handleEnd:m,studentInfoText:f}})}))})},w=function(e){var t=e.children,n=e.actions,s=function(e){e.toLowerCase().includes("hello")&&n.handleHello(),e.toLowerCase().includes("got it")&&n.handleStart()};return(0,o.jsx)("div",{children:a.Children.map(t,(function(e){return a.cloneElement(e,{parse:s,actions:n})}))})};n(5419);var C=function(){return(0,o.jsxs)("main",{className:"bot-main-container",children:[(0,o.jsx)("h3",{className:"bot-head-text",children:"Interact with our chatbot to get register quickly!!"}),(0,o.jsx)("div",{className:"bot-div",children:(0,o.jsx)(r(),{config:Z,messageParser:w,actionProvider:N})})]})}}}]);
//# sourceMappingURL=578.4f0a7ed8.chunk.js.map