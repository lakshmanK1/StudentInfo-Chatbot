(self.webpackChunkchatbot_student_management=self.webpackChunkchatbot_student_management||[]).push([[8],{5:function(e,t,r){var n=r(215).default,a=["styles"],o=["styles"];!function(){"use strict";var t={n:function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,{a:r}),r},d:function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},s={};t.r(s),t.d(s,{Chatbot:function(){return W},createChatBotMessage:function(){return d},createClientMessage:function(){return p},createCustomMessage:function(){return g},default:function(){return z},useChatbot:function(){return H}});var c=r(2791),i=t.n(c),l=r(1200),u=t.n(l),f=function(){return f=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},f.apply(this,arguments)},m=function(e,t){return{message:e,type:t,id:Math.round(Date.now()*Math.random())}},d=function(e,t){return f(f(f({},m(e,"bot")),t),{loading:!0})},g=function(e,t,r){return f(f({},m(e,t)),r)},p=function(e,t){return f(f({},m(e,"user")),t)},h=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(e)return e.apply(void 0,t)};function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},v.apply(this,arguments)}var y=function(e){e.styles;var t=n(e,a);return i().createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t),i().createElement("path",{d:"M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"}))},b=function(e){var t=e.message,r=e.customComponents;return i().createElement("div",{className:"react-chatbot-kit-user-chat-message-container"},i().createElement(u(),{condition:!!r.userChatMessage,show:h(r.userChatMessage,{message:t}),elseShow:i().createElement("div",{className:"react-chatbot-kit-user-chat-message"},t,i().createElement("div",{className:"react-chatbot-kit-user-chat-message-arrow"}))}),i().createElement(u(),{condition:!!r.userAvatar,show:h(r.userAvatar),elseShow:i().createElement("div",{className:"react-chatbot-kit-user-avatar"},i().createElement("div",{className:"react-chatbot-kit-user-avatar-container"},i().createElement(y,{className:"react-chatbot-kit-user-avatar-icon"})))}))},w=function(){return i().createElement("div",{className:"react-chatbot-kit-chat-bot-avatar"},i().createElement("div",{className:"react-chatbot-kit-chat-bot-avatar-container"},i().createElement("p",{className:"react-chatbot-kit-chat-bot-avatar-letter"},"B")))},E=function(){return i().createElement("div",{className:"chatbot-loader-container"},i().createElement("svg",{id:"dots",width:"50px",height:"21px",viewBox:"0 0 132 58",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},i().createElement("g",{stroke:"none",fill:"none"},i().createElement("g",{id:"chatbot-loader",fill:"#fff"},i().createElement("circle",{id:"chatbot-loader-dot1",cx:"25",cy:"30",r:"13"}),i().createElement("circle",{id:"chatbot-loader-dot2",cx:"65",cy:"30",r:"13"}),i().createElement("circle",{id:"chatbot-loader-dot3",cx:"105",cy:"30",r:"13"})))))},O=function(){return O=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},O.apply(this,arguments)},P=function(e){var t=e.message,r=e.withAvatar,n=void 0===r||r,a=e.loading,o=e.messages,s=e.customComponents,l=e.setState,f=e.customStyles,m=e.delay,d=e.id,g=(0,c.useState)(!1),p=g[0],v=g[1];(0,c.useEffect)((function(){var e;return function(t,r){var n=750;m&&(n+=m),e=setTimeout((function(){var e=function(e,t,r){if(r||2===arguments.length)for(var n,a=0,o=t.length;a<o;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))}([],t,!0).find((function(e){return e.id===d}));e&&(e.loading=!1,e.delay=void 0,r((function(t){var r=t.messages,n=r.findIndex((function(e){return e.id===d}));return r[n]=e,O(O({},t),{messages:r})})))}),n)}(o,l),function(){clearTimeout(e)}}),[m,d]),(0,c.useEffect)((function(){m?setTimeout((function(){return v(!0)}),m):v(!0)}),[m]);var y={backgroundColor:""},b={borderRightColor:""};return f&&(y.backgroundColor=f.backgroundColor,b.borderRightColor=f.backgroundColor),i().createElement(u(),{condition:p,show:i().createElement("div",{className:"react-chatbot-kit-chat-bot-message-container"},i().createElement(u(),{condition:n,show:i().createElement(u(),{condition:!!(null==s?void 0:s.botAvatar),show:h(null==s?void 0:s.botAvatar),elseShow:i().createElement(w,null)})}),i().createElement(u(),{condition:!!(null==s?void 0:s.botChatMessage),show:h(null==s?void 0:s.botChatMessage,{message:t,loader:i().createElement(E,null)}),elseShow:i().createElement("div",{className:"react-chatbot-kit-chat-bot-message",style:y},i().createElement(u(),{condition:a,show:i().createElement(E,null),elseShow:i().createElement("span",null,t)}),i().createElement(u(),{condition:n,show:i().createElement("div",{className:"react-chatbot-kit-chat-bot-message-arrow",style:b})}))}))})};function S(){return S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},S.apply(this,arguments)}var k=function(e){e.styles;var t=n(e,o);return i().createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t),i().createElement("path",{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"}))},M=function(){return M=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},M.apply(this,arguments)},x=function(e,t,r){if(r||2===arguments.length)for(var n,a=0,o=t.length;a<o;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))},C=function(e){var t=e.state,r=e.setState,n=e.widgetRegistry,a=e.messageParser,o=e.parse,s=e.customComponents,l=e.actionProvider,f=e.botName,d=e.customStyles,g=e.headerText,p=e.customMessages,h=e.placeholderText,v=e.validator,y=e.setMessageContainerRef,w=e.disableScrollToBottom,E=e.messageHistory,O=e.actions,S=t.messages,C=(0,c.useRef)(null),j=(0,c.useState)(""),N=j[0],T=j[1],A=function(){setTimeout((function(){var e;C.current&&(C.current.scrollTop=null===(e=null==C?void 0:C.current)||void 0===e?void 0:e.scrollHeight)}),50)};(0,c.useEffect)((function(){w||A()})),(0,c.useEffect)((function(){y(C)}),[C.current]);var B=function(){r((function(e){return M(M({},e),{messages:x(x([],e.messages,!0),[m(N,"user")],!1)})})),A(),T("")},_={backgroundColor:""};d&&d.chatButton&&(_.backgroundColor=d.chatButton.backgroundColor);var I="Conversation with "+f;g&&(I=g);var H="Write your message here";return h&&(H=h),i().createElement("div",{className:"react-chatbot-kit-chat-container"},i().createElement("div",{className:"react-chatbot-kit-chat-inner-container"},i().createElement(u(),{condition:!!s.header,show:s.header&&s.header(l),elseShow:i().createElement("div",{className:"react-chatbot-kit-chat-header"},I)}),i().createElement("div",{className:"react-chatbot-kit-chat-message-container",ref:C},i().createElement(u(),{condition:"string"==typeof E&&Boolean(E),show:i().createElement("div",{dangerouslySetInnerHTML:{__html:E}})}),S.map((function(e,a){return"bot"===e.type?i().createElement(i().Fragment,{key:e.id},function(e,a){var o;o=e.withAvatar?e.withAvatar:function(e,t){if(0===t)return!0;var r=e[t-1];return!("bot"===r.type&&!r.widget)}(S,a);var c=M(M({},e),{setState:r,state:t,customComponents:s,widgetRegistry:n,messages:S,actions:O});if(e.widget){var l=n.getWidget(c.widget,M(M({},t),{scrollIntoView:A,payload:e.payload,actions:O}));return i().createElement(i().Fragment,null,i().createElement(P,M({customStyles:d.botMessageBox,withAvatar:o},c,{key:e.id})),i().createElement(u(),{condition:!c.loading,show:l||null}))}return i().createElement(P,M({customStyles:d.botMessageBox,key:e.id,withAvatar:o},c,{customComponents:s,messages:S,setState:r}))}(e,a)):"user"===e.type?i().createElement(i().Fragment,{key:e.id},function(e){var r=n.getWidget(e.widget,M(M({},t),{scrollIntoView:A,payload:e.payload,actions:O}));return i().createElement(i().Fragment,null,i().createElement(b,{message:e.message,key:e.id,customComponents:s}),r||null)}(e)):function(e,t){return!!t[e.type]}(e,p)?i().createElement(i().Fragment,{key:e.id},function(e){var a=p[e.type],o={setState:r,state:t,scrollIntoView:A,actionProvider:l,payload:e.payload,actions:O};if(e.widget){var s=n.getWidget(e.widget,M(M({},t),{scrollIntoView:A,payload:e.payload,actions:O}));return i().createElement(i().Fragment,null,a(o),s||null)}return a(o)}(e)):void 0})),i().createElement("div",{style:{paddingBottom:"15px"}})),i().createElement("div",{className:"react-chatbot-kit-chat-input-container"},i().createElement("form",{className:"react-chatbot-kit-chat-input-form",onSubmit:function(e){if(e.preventDefault(),v&&"function"==typeof v){if(v(N)){if(B(),o)return o(N);a.parse(N)}}else{if(B(),o)return o(N);a.parse(N)}}},i().createElement("input",{className:"react-chatbot-kit-chat-input",placeholder:H,value:N,onChange:function(e){return T(e.target.value)}}),i().createElement("button",{className:"react-chatbot-kit-chat-btn-send",style:_},i().createElement(k,{className:"react-chatbot-kit-chat-btn-send-icon"}))))))},j=function(e){var t=e.message;return i().createElement("div",{className:"react-chatbot-kit-error"},i().createElement("h1",{className:"react-chatbot-kit-error-header"},"Ooops. Something is missing."),i().createElement("div",{className:"react-chatbot-kit-error-container"},i().createElement(P,{message:t,withAvatar:!0,loading:!1,id:1,customStyles:{backgroundColor:""},messages:[]})),i().createElement("a",{href:"https://fredrikoseberg.github.io/react-chatbot-kit-docs/",rel:"noopener norefferer",target:"_blank",className:"react-chatbot-kit-error-docs"},"View the docs"))},N=function(e){return e.widgets?e.widgets:[]},T=function(e){try{new e}catch(e){return!1}return!0},A=function(){return A=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},A.apply(this,arguments)},B=function(e,t){var r=this;this.addWidget=function(e,t){var n=e.widgetName,a=e.widgetFunc,o=e.mapStateToProps,s=e.props;r[n]={widget:a,props:s,mapStateToProps:o,parentProps:A({},t)}},this.getWidget=function(e,t){var n=r[e];if(n){var a,o=A(A(A(A({scrollIntoView:t.scrollIntoView},n.parentProps),"object"==typeof(a=n.props)?a:{}),r.mapStateToProps(n.mapStateToProps,t)),{setState:r.setState,actionProvider:r.actionProvider||t.actions,actions:t.actions,state:t,payload:t.payload});return n.widget(o)||null}},this.mapStateToProps=function(e,t){if(e)return e.reduce((function(e,r){return e[r]=t[r],e}),{})},this.setState=e,this.actionProvider=t},_=function(){return _=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},_.apply(this,arguments)},I=function(e,t,r){if(r||2===arguments.length)for(var n,a=0,o=t.length;a<o;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))},H=function(e){var t=e.config,r=e.actionProvider,n=e.messageParser,a=e.messageHistory,o=e.runInitialMessagesWithHistory,s=e.saveMessages,l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["config","actionProvider","messageParser","messageHistory","runInitialMessagesWithHistory","saveMessages"]),u="",f="";if(!t||!r||!n)return{configurationError:u="I think you forgot to feed me some props. Did you remember to pass a config, a messageparser and an actionprovider?"};var m=function(e,t){var r=[];return e.initialMessages||r.push("Config must contain property 'initialMessages', and it expects it to be an array of chatbotmessages."),r}(t);if(m.length)return{invalidPropsError:f=m.reduce((function(e,t){return e+t}),"")};var h=(0,c.useState)({}),v=h[0],y=h[1],b=function(e){return e.state?e.state:{}}(t);a&&Array.isArray(a)?t.initialMessages=I([],a,!0):"string"==typeof a&&Boolean(a)&&(o||(t.initialMessages=[]));var w,E,O,P=i().useState(_({messages:I([],t.initialMessages,!0)},b)),S=P[0],k=P[1],M=i().useRef(S.messages),x=i().useRef();(0,c.useEffect)((function(){M.current=S.messages})),(0,c.useEffect)((function(){a&&Array.isArray(a)&&k((function(e){return _(_({},e),{messages:a})}))}),[]),(0,c.useEffect)((function(){return function(){var e;if(s&&"function"==typeof s){var t=null===(e=null==v?void 0:v.current)||void 0===e?void 0:e.innerHTML.toString();if(!v.current)return;s(M.current,t)}}}),[v.current]),(0,c.useEffect)((function(){x.current=S}),[S]);var C=r,j=n;return T(C)&&T(j)?(w=new r(d,k,p,x.current,g,l),E=new B(k,w),O=new n(w,x.current),N(t).forEach((function(e){return null==E?void 0:E.addWidget(e,l)}))):(w=r,O=n,E=new B(k,null),N(t).forEach((function(e){return null==E?void 0:E.addWidget(e,l)}))),{widgetRegistry:E,actionProv:w,messagePars:O,configurationError:u,invalidPropsError:f,state:S,setState:k,setMessageContainerRef:y,ActionProvider:C,MessageParser:j}},R=function(){return R=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},R.apply(this,arguments)},W=function(e){var t=e.actionProvider,r=e.messageParser,n=e.config,a=e.headerText,o=e.placeholderText,s=e.saveMessages,c=e.messageHistory,l=e.runInitialMessagesWithHistory,u=e.disableScrollToBottom,f=e.validator,m=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["actionProvider","messageParser","config","headerText","placeholderText","saveMessages","messageHistory","runInitialMessagesWithHistory","disableScrollToBottom","validator"]),g=H(R({config:n,actionProvider:t,messageParser:r,messageHistory:c,saveMessages:s,runInitialMessagesWithHistory:l},m)),p=g.configurationError,h=g.invalidPropsError,v=g.ActionProvider,y=g.MessageParser,b=g.widgetRegistry,w=g.actionProv,E=g.messagePars,O=g.state,P=g.setState,S=g.setMessageContainerRef;if(p)return i().createElement(j,{message:p});if(h.length)return i().createElement(j,{message:h});var k=function(e){return e.customStyles?e.customStyles:{}}(n),M=function(e){return e.customComponents?e.customComponents:{}}(n),x=function(e){return e.botName?e.botName:"Bot"}(n),N=function(e){return e.customMessages?e.customMessages:{}}(n);return T(v)&&T(y)?i().createElement(C,{state:O,setState:P,widgetRegistry:b,actionProvider:w,messageParser:E,customMessages:N,customComponents:R({},M),botName:x,customStyles:R({},k),headerText:a,placeholderText:o,setMessageContainerRef:S,validator:f,messageHistory:c,disableScrollToBottom:u}):i().createElement(v,{setState:P,createChatBotMessage:d},i().createElement(y,null,i().createElement(C,{state:O,setState:P,widgetRegistry:b,actionProvider:v,messageParser:y,customMessages:N,customComponents:R({},M),botName:x,customStyles:R({},k),headerText:a,placeholderText:o,setMessageContainerRef:S,validator:f,messageHistory:c,disableScrollToBottom:u})))},z=W;e.exports=s}()},1200:function(e){!function(){"use strict";var t={d:function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};t.r(r),t.d(r,{default:function(){return n}});var n=function(e){var t=e.condition,r=e.show,n=e.elseShow,a=function(e){return"function"==typeof e},o=function(e){return e()||(console.warn("Nothing was returned from your render function. Please make sure you are returning a valid React element."),null)};return t?a(r)?o(r):r:!t&&n?a(n)?o(n):n:null};e.exports=r}()},8820:function(e,t,r){"use strict";r.d(t,{gYb:function(){return a}});var n=r(9983);function a(e){return(0,n.w_)({tag:"svg",attr:{t:"1569683742680",viewBox:"0 0 1024 1024",version:"1.1"},child:[{tag:"defs",attr:{},child:[]},{tag:"path",attr:{d:"M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2-8.5 2.1-13.8 10.7-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-0.9 3.7-0.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 0.7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-0.8 4.2-2.6 5-5 1.4-4.2-0.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"}}]})(e)}},9983:function(e,t,r){"use strict";r.d(t,{w_:function(){return l}});var n=r(2791),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),s=function(){return s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},s.apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function i(e){return e&&e.map((function(e,t){return n.createElement(e.tag,s({key:t},e.attr),i(e.child))}))}function l(e){return function(t){return n.createElement(u,s({attr:s({},e.attr)},t),i(e.child))}}function u(e){var t=function(t){var r,a=e.attr,o=e.size,i=e.title,l=c(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,l,{className:r,style:s(s({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}},5419:function(){},215:function(e,t,r){var n=r(7071);e.exports=function(e,t){if(null==e)return{};var r,a,o=n(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o},e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=8.8c7e8449.chunk.js.map