(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),s=n(3),o=n.n(s),r=n(4),a=n(5),u=n(7),S=n(6),l=n(17),T=(n(12),n(0)),h=function(t){Object(u.a)(n,t);var e=Object(S.a)(n);function n(t){var c;return Object(r.a)(this,n),(c=e.call(this,t)).ComandWatch=function(t){"START"===t?c.Timer(t):"STOP"===t?(c.Timer(t),c.setState({hour:0,min:0,second:0,StartStop:"START"})):"RESTART"===t&&c.setState({hour:0,min:0,second:0})},c.Timer=function(t){if("WAIT"===t)c.setState({StartStop:"START"});else if("START"===t)c.setState({StartStop:"STOP"}),c.Timer(null);else if(null===t)var e=Object(l.a)(0,1e3).subscribe((function(t){"STOP"===c.state.StartStop&&(c.state.min>=59?c.setState((function(t){return{min:0,hour:t.hour+1}})):c.state.second>=59?c.setState((function(t){return{second:0,min:t.min+1}})):c.setState((function(t){return{second:t.second+1}})))})),n=Object(l.a)(0,10).subscribe((function(t){"START"===c.state.StartStop&&(e.unsubscribe(),n.unsubscribe())}))},c.onClick=function(t){clearTimeout(c.timer),!1===c.state.Click?(c.setState({Click:!0}),c.timer=setTimeout((function(){c.setState({Click:!1})}),200)):(clearTimeout(c.timer),setTimeout((function(){return c.Timer("WAIT")})),c.setState({Click:!1}))},c.state={hour:0,min:0,second:0,StartStop:"START",Click:!1},c}return Object(a.a)(n,[{key:"render",value:function(){var t=this;return Object(T.jsxs)("div",{className:"stopwatch",children:[Object(T.jsxs)("div",{className:"stopwatch_timer",children:[this.state.hour,":",this.state.min,":",this.state.second]}),Object(T.jsxs)("div",{className:"stopwatch_buttons",children:[Object(T.jsx)("button",{onClick:function(){return t.ComandWatch(t.state.StartStop)},children:this.state.StartStop}),Object(T.jsx)("button",{onClick:function(){return t.onClick()},children:"WAIT"}),Object(T.jsx)("button",{onClick:function(){return t.ComandWatch("RESTART")},children:"RESTART"})]})]})}}]),n}(c.Component);n(14);var m=function(){return Object(T.jsx)("div",{className:"example",children:Object(T.jsx)(h,{})})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),s(t),o(t)}))};o.a.render(Object(T.jsx)(i.a.StrictMode,{children:Object(T.jsx)(m,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.09bffd85.chunk.js.map