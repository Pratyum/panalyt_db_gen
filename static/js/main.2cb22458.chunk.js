(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{239:function(e,t,a){e.exports=a(603)},244:function(e,t,a){},246:function(e,t,a){},603:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(28),i=a.n(r),l=(a(244),a(19)),s=a(20),c=a(22),h=a(21),d=a(23),p=(a(246),a(7)),u=a(35),m=a.n(u),b=a(36),y=a.n(b),g=a(42),f=a(37),C=a.n(f),k=a(38),O=a.n(k),v=a(32),j=a.n(v),S=(a(248),a(250),a(134)),E=a(87),w=a.n(E),D=a(234),P=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(D.ResponsiveBar,{data:[{country:"AD","hot dog":58,"hot dogColor":"hsl(155, 70%, 50%)",burger:183,burgerColor:"hsl(135, 70%, 50%)",sandwich:73,sandwichColor:"hsl(281, 70%, 50%)",kebab:199,kebabColor:"hsl(208, 70%, 50%)",fries:89,friesColor:"hsl(109, 70%, 50%)",donut:173,donutColor:"hsl(330, 70%, 50%)"},{country:"AE","hot dog":174,"hot dogColor":"hsl(135, 70%, 50%)",burger:72,burgerColor:"hsl(210, 70%, 50%)",sandwich:63,sandwichColor:"hsl(158, 70%, 50%)",kebab:30,kebabColor:"hsl(142, 70%, 50%)",fries:115,friesColor:"hsl(257, 70%, 50%)",donut:33,donutColor:"hsl(36, 70%, 50%)"},{country:"AF","hot dog":35,"hot dogColor":"hsl(304, 70%, 50%)",burger:157,burgerColor:"hsl(175, 70%, 50%)",sandwich:33,sandwichColor:"hsl(18, 70%, 50%)",kebab:154,kebabColor:"hsl(113, 70%, 50%)",fries:2,friesColor:"hsl(146, 70%, 50%)",donut:99,donutColor:"hsl(84, 70%, 50%)"},{country:"AG","hot dog":179,"hot dogColor":"hsl(196, 70%, 50%)",burger:105,burgerColor:"hsl(42, 70%, 50%)",sandwich:114,sandwichColor:"hsl(279, 70%, 50%)",kebab:81,kebabColor:"hsl(277, 70%, 50%)",fries:42,friesColor:"hsl(21, 70%, 50%)",donut:100,donutColor:"hsl(78, 70%, 50%)"},{country:"AI","hot dog":168,"hot dogColor":"hsl(290, 70%, 50%)",burger:71,burgerColor:"hsl(49, 70%, 50%)",sandwich:105,sandwichColor:"hsl(155, 70%, 50%)",kebab:61,kebabColor:"hsl(49, 70%, 50%)",fries:128,friesColor:"hsl(307, 70%, 50%)",donut:169,donutColor:"hsl(200, 70%, 50%)"},{country:"AL","hot dog":143,"hot dogColor":"hsl(261, 70%, 50%)",burger:36,burgerColor:"hsl(35, 70%, 50%)",sandwich:98,sandwichColor:"hsl(165, 70%, 50%)",kebab:70,kebabColor:"hsl(282, 70%, 50%)",fries:131,friesColor:"hsl(171, 70%, 50%)",donut:9,donutColor:"hsl(260, 70%, 50%)"},{country:"AM","hot dog":160,"hot dogColor":"hsl(26, 70%, 50%)",burger:70,burgerColor:"hsl(142, 70%, 50%)",sandwich:106,sandwichColor:"hsl(53, 70%, 50%)",kebab:57,kebabColor:"hsl(330, 70%, 50%)",fries:69,friesColor:"hsl(218, 70%, 50%)",donut:125,donutColor:"hsl(11, 70%, 50%)"}],keys:["hot dog","burger","sandwich","kebab","fries","donut"],indexBy:"country",margin:{top:50,right:130,bottom:50,left:60},colors:"nivo",colorBy:"id",borderColor:"inherit:darker(1.6)",axisTop:null,axisRight:null,axisBottom:{tickSize:5,tickPadding:5,tickRotation:0,legend:"country",legendPosition:"middle",legendOffset:32},axisLeft:{tickSize:5,tickPadding:5,tickRotation:0,legend:"food",legendPosition:"middle",legendOffset:-40},labelSkipWidth:1,labelSkipHeight:12,labelTextColor:"inherit:darker(1.6)",animate:!0,motionStiffness:90,motionDamping:15,padding:.2,legends:[{dataFrom:"keys",direction:"row",anchor:"bottom",justify:!1,translateX:20,translateY:25,itemWidth:20,itemHeight:10,itemDirection:"left-to-right",itemOpacity:.85,symbolSize:20,effects:[{on:"hover",style:{itemOpacity:1}}]}]})}}]),t}(n.Component),A=Object(S.WidthProvider)(S.Responsive),x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={items:[].map(function(e,t,a){return{i:e.toString(),x:2*e,y:0,w:2,h:4,add:e===(a.length-1).toString()}}),newCounter:0},a.onAddItem=a.onAddItem.bind(Object(p.a)(Object(p.a)(a))),a.onBreakpointChange=a.onBreakpointChange.bind(Object(p.a)(Object(p.a)(a))),a.onLayoutChange=a.onLayoutChange.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"createElement",value:function(e){var t=e.add?"+":e.i;return o.a.createElement("div",{key:t,"data-grid":e,style:{backgroundColor:"#82D2F5"}},e.add?o.a.createElement("span",{className:"add text",onClick:this.onAddItem,title:"You can add an item by clicking here, too."},"Add +"):o.a.createElement(P,null),o.a.createElement("span",{className:"remove",style:{position:"absolute",right:"2px",top:0,cursor:"pointer",color:"#24A69A"},onClick:this.onRemoveItem.bind(this,t)},"x"))}},{key:"onAddItem",value:function(){console.log("adding","n"+this.state.newCounter),this.setState({items:this.state.items.concat({i:"n"+this.state.newCounter,x:2*this.state.items.length%(this.state.cols||12),y:1/0,w:3,h:15}),newCounter:this.state.newCounter+1})}},{key:"onBreakpointChange",value:function(e,t){this.setState({breakpoint:e,cols:t})}},{key:"onLayoutChange",value:function(e){this.setState({layout:e})}},{key:"onRemoveItem",value:function(e){console.log("removing",e),this.setState({items:w.a.reject(this.state.items,{i:e})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:{maxHeight:"100%"}},o.a.createElement("button",{onClick:this.onAddItem},"Add Item"),o.a.createElement(A,Object.assign({onLayoutChange:this.onLayoutChange,onBreakpointChange:this.onBreakpointChange},this.props),w.a.map(this.state.items,function(t){return e.createElement(t)})))}}]),t}(o.a.PureComponent);x.defaultProps={className:"layout",cols:{lg:24,md:20,sm:12,xs:8,xxs:4},rowHeight:2};var L=x,_=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value),function(){a.props.action(a.state.pr)})},a.state={pr:"",options_pr:e.options_pr?e.options_pr:[{property:"Location",employeeDataProperty:"Location"},{property:"Hire_Date",employeeDataProperty:"HireDate"},{property:"Salary",employeeDataProperty:"Salary"},{property:"Location",employeeDataProperty:"Location"}]},a.handleChange.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=M.labelStyle;return o.a.createElement("div",null,o.a.createElement(m.a,{style:e},o.a.createElement(y.a,{style:{paddingLeft:30}},"Select Property"),o.a.createElement(O.a,{value:this.state.pr,onChange:this.handleChange,input:o.a.createElement(j.a,{name:"pr",id:"pr-label-placeholder"}),displayEmpty:!0,name:"pr"},this.state.options_pr.map(function(e){return o.a.createElement(C.a,{value:e.property},e.employeeDataProperty)}))))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value),function(){a.props.action(a.state.op)})},a.state={op:"",pr:e.pr,options_pr:e.options_pr?e.options_pr:[{property:"COUNT",allowedMeasureOperations:"COUNT"},{property:"SUM",allowedMeasureOperations:"SUM"},{property:"MAX",allowedMeasureOperations:"MAX"},{property:"MIN",allowedMeasureOperations:"MIN"}],option_pr:{}},a.handleChange.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillUpdate",value:function(e,t){var a=this;this.props.pr!=e.pr&&this.setState({pr:e.pr},function(){var e=a.state.options_pr.find(function(e){return e.property==a.state.pr});console.log(e),a.setState({option_pr:e})})}},{key:"render",value:function(){var e=M.labelStyleLast;return o.a.createElement("div",null,o.a.createElement(m.a,{style:e},o.a.createElement(y.a,{style:{paddingLeft:30}},"Select Operation"),o.a.createElement(O.a,{value:this.state.op,onChange:this.handleChange,input:o.a.createElement(j.a,{name:"op",id:"op-label-placeholder"}),displayEmpty:!0,name:"op"},this.state.option_pr.allowedMeasureOperations&&this.state.option_pr.allowedMeasureOperations.map(function(e){return o.a.createElement(C.a,{value:e},e)}))))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={clicked:!1,token:e.token,chart:e.chart,options_pr:e.options_pr,domain:e.domain,dp:e.dp,pr:"",op:""},a.addChart=a.addChart.bind(Object(p.a)(Object(p.a)(a))),a.handleProperty=a.handleProperty.bind(Object(p.a)(Object(p.a)(a))),a.handleOperation=a.handleOperation.bind(Object(p.a)(Object(p.a)(a))),a.resetForm=a.resetForm.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillUpdate",value:function(e,t){e.options_pr!=this.state.options_pr&&this.setState({options_pr:e.options_pr})}},{key:"handleProperty",value:function(e){console.log(e),this.setState({pr:e})}},{key:"handleOperation",value:function(e){var t=this;this.setState({op:e},function(){t.props.setPrOp({pr:t.state.pr,op:t.state.op})})}},{key:"addChart",value:function(e){this.setState({clicked:!0})}},{key:"resetForm",value:function(){this.setState({ChartType:"",dp:"",pr:"",op:""})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(_,{options_pr:this.state.options_pr,action:this.handleProperty}),o.a.createElement(I,{options_pr:this.state.options_pr,pr:this.state.pr,action:this.handleOperation}))}}]),t}(n.Component),M={labelStyle:{display:"flex",alignContent:"center",height:60},labelStyleLast:{display:"flex",alignContent:"center",height:90},buttonStyle:{padding:15,alignSelf:"end",borderColor:"#26A69A",backgroundColor:"#22958A",height:40,display:"flex"},newStyle:{padding:15,alignSelf:"end",marginTop:40,borderColor:"#26A69A",backgroundColor:"#22958A",height:40,flex:1}},T=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value),function(){a.props.setDp(a.state.dp)}),a.addPropOp()},a.state={token:e.token,chart:e.chart,domain:e.domain,dp:"",clicked:!1,options:e.options?e.options:[{property:"Location",employeeDataProperty:"Location"},{property:"Hire_Date",employeeDataProperty:"HireDate"},{property:"Salary",employeeDataProperty:"Salary"},{property:"Location",employeeDataProperty:"Location"}]},a.addPropOp=a.addPropOp.bind(Object(p.a)(Object(p.a)(a))),a.handleChange.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillUpdate",value:function(e,t){e.options!==this.state.options&&this.setState({options:e.options})}},{key:"addPropOp",value:function(){this.setState({clicked:!0})}},{key:"render",value:function(){var e=B.labelStyle;return o.a.createElement("form",{noValidate:!0,autoComplete:"off"},o.a.createElement(m.a,{style:e},o.a.createElement(y.a,{shrink:!0,htmlFor:"dp-label-placeholder",style:{paddingLeft:30}},"Select DataPoint"),o.a.createElement(O.a,{value:this.state.dp,onChange:this.handleChange,input:o.a.createElement(j.a,{name:"dp",id:"dp-label-placeholder"}),displayEmpty:!0,name:"dp"},this.state.options.map(function(e){return o.a.createElement(C.a,{value:e.property},e.employeeDataProperty)}))))}}]),t}(n.Component),B={labelStyle:{display:"flex",alignContent:"center",height:60}},W=a(237),F=a.n(W),U=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value),function(){a.props.setChartType(a.state.chart)}),a.addDP()},a.findQueryLimitations=function(e){return F.a.get("https://panalyt-internal-dev.appspot.com/_ah/api/employeedata/listQueryLimitations",{headers:{Authorization:"Bearer ".concat(a.state.token)},params:{domain:e}}).then(function(e){return console.log(e),e.data.limitations})},a.state={chart:"",clicked:!1,token:e.token,domain:e.domainName,options:[]},a.addDP=a.addDP.bind(Object(p.a)(Object(p.a)(a))),a.handleChange.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"addDP",value:function(){this.setState({clicked:!0})}},{key:"componentWillUpdate",value:function(e,t){this.state.token!==e.token&&this.setState({token:e.token})}},{key:"componentDidMount",value:function(){var e=this;this.findQueryLimitations(this.state.domain).then(function(t){e.setState({options:t},function(){e.props.setOptions(e.state.options)})})}},{key:"render",value:function(){var e=H.labelStyle;return o.a.createElement("div",{style:{alignContent:"center"}},o.a.createElement(m.a,{style:e},o.a.createElement(y.a,{shrink:!0,htmlFor:"chart-label-placeholder",style:{paddingLeft:30}},"Select Chart Type"),o.a.createElement(O.a,{value:this.state.chart,onChange:this.handleChange,input:o.a.createElement(j.a,{name:"chart",id:"chart-label-placeholder"}),name:"chart"},o.a.createElement(C.a,{value:"bar"},"Bar Chart"),o.a.createElement(C.a,{value:"line"},"Line Chart"),o.a.createElement(C.a,{value:"pie"},"Pie Chart"))))}}]),t}(n.Component),H={labelStyle:{height:70,justifyContent:"center",display:"flex"}},R=a(238),z=a.n(R),G=a(66),Q=a.n(G),X=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).getToken=function(e,t){return Q.a.auth().signInWithEmailAndPassword(e,t).then(function(e){return Q.a.auth().currentUser.getIdToken().then(function(e){return console.log(e),e})})},a.handleChange=function(e){a.setState({domain:e.target.value},function(){a.props.getChangeup({domain:a.state.domain,token:a.state.token})})},a.state={dom:"",clicked:!1,token:""},a.addChart=a.addChart.bind(Object(p.a)(Object(p.a)(a))),a.handleChange.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getToken("aaliya@panalyt.com","Stay*211").then(function(t){e.setState({token:t})})}},{key:"addChart",value:function(){this.props.addChart()}},{key:"render",value:function(){var e=this,t=Y.labelStyle;return o.a.createElement("div",{style:{alignContent:"center"}},o.a.createElement(m.a,{style:t},o.a.createElement(y.a,{shrink:!0,htmlFor:"dom-label-placeholder",style:{paddingLeft:30,height:10}},"Domain Name"),o.a.createElement(z.a,{onChange:this.handleChange,onKeyPress:function(t){"Enter"===t.key&&e.addChart()}})))}}]),t}(n.Component),Y={labelStyle:{height:70,justifyContent:"center",display:"flex"}},J=a(88),K=a.n(J);Q.a.initializeApp({apiKey:"AIzaSyDr6DAoGxzCp2b2ICDMfuWgm8Wp80FGenY",authDomain:"panalyt-internal-dev.firebaseapp.com",databaseURL:"https://panalyt-internal-dev.firebaseio.com",projectId:"panalyt-internal-dev",storageBucket:"panalyt-internal-dev.appspot.com",messagingSenderId:"388343097026"});var V=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).setDomainName=function(e){var t=e.domain,n=e.token;a.setState({domain:t,token:n})},a.setChartType=function(e){a.setState({chart:e})},a.setOptions=function(e){a.setState({options:e})},a.setDp=function(e){a.setState({dp:e})},a.setPrOp=function(e){var t=e.pr,n=e.op;a.setState({pr:t,op:n})},a.addChart=function(){a.setState(function(e){return{clicked:e.clicked+1}})},a.state={chart:"",domain:"",dp:"",pr:"",op:"",clicked:0,token:"",options:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null," Dashboard Generator "),o.a.createElement("div",null,o.a.createElement("div",{className:"form"},o.a.createElement(X,{getChangeup:this.setDomainName,addChart:this.addChart}),this.state.clicked>0?o.a.createElement(U,{domainName:this.state.domain,token:this.state.token,setChartType:this.setChartType,addChart:this.addChart,getDomainName:this.setDomainName,setOptions:this.setOptions}):o.a.createElement("div",null),""!==this.state.chart?o.a.createElement(T,{options:this.state.options,chart:this.state.chart,setDp:this.setDp}):o.a.createElement("div",null),""!==this.state.dp?o.a.createElement(N,{options_pr:this.state.options,setPrOp:this.setPrOp}):o.a.createElement("div",null),""!==this.state.pr&&""!==this.state.op&&o.a.createElement("div",null,o.a.createElement(K.a,{style:$.buttonStyle,onClick:this.addChart}," Preview Chart "),o.a.createElement(K.a,{style:$.newStyle,onClick:this.resetForm}," Add New Chart "))),o.a.createElement("div",{className:"dashboard"},o.a.createElement(L,{newChart:this.onAddItem}))))}}]),t}(n.Component),$={labelStyle:{display:"flex",alignContent:"center",height:60},labelStyleLast:{display:"flex",alignContent:"center",height:90},buttonStyle:{padding:15,alignSelf:"end",borderColor:"#26A69A",backgroundColor:"#22958A",height:40,display:"flex"},newStyle:{padding:15,alignSelf:"end",marginTop:40,borderColor:"#26A69A",backgroundColor:"#22958A",height:40,flex:1}},q=V;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[239,2,1]]]);
//# sourceMappingURL=main.2cb22458.chunk.js.map