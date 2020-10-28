(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{321:function(e,t,n){e.exports=n(550)},326:function(e,t,n){},347:function(e,t){},349:function(e,t){},363:function(e,t){},365:function(e,t){},393:function(e,t){},395:function(e,t){},396:function(e,t){},402:function(e,t){},404:function(e,t){},422:function(e,t){},425:function(e,t){},441:function(e,t){},444:function(e,t){},550:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(33),r=n.n(i),s=(n(326),n(327),n(26)),l=n(312),c=n(311),u=n(51),d=n(303),h=n(8),g=n(676),m=(n(85),n(315)),p=(n(304),n(114),function(){return localStorage.getItem("token")}),f=(n(84),n(115)),b=n.n(f),w=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_SERVER_ADDRESS||"",y=function(){return{Authorization:p()?"Bearer ".concat(p()):"","Content-Type":"application/json"}},E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{headers:{}},n=t.headers,o=Object(m.a)(t,["headers"]);return fetch(e,Object(h.a)({method:"GET",headers:Object(h.a)(Object(h.a)({},y()),n)},o)).then(v)},v=function(e){if(401===e.status&&x({type:"DEFAULT_USER_TYPE",payload:null}),e.status>=400)throw e;return e.json()},k={snackbar:{message:"",id:""}},O=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):u.c)(Object(u.a)(d.a)),S={config:function(e,t){if(void 0===e&&(e=function(){var e=localStorage.getItem("addedActivities"),t=localStorage.getItem("wontDoActivities"),n=localStorage.getItem("completedActivities"),o=localStorage.getItem("materials"),a=localStorage.getItem("materialTypes"),i=localStorage.getItem("dashboardTabs");return{addedActivities:e?JSON.parse(e):{},wontDoActivities:t?JSON.parse(t):{},completedActivities:n?JSON.parse(n):{},materials:o?JSON.parse(o):{},materialTypes:a?JSON.parse(a):{},dashboardTabs:i?JSON.parse(i):[{ages:[],subjects:[],ordinal:0,touched:!1,uuid:Object(g.a)()}]}}()),"DEFAULT_CONFIG_TYPE"===t.type){if(t.payload.flush)return t.payload.data;var n=Object.keys(t.payload).reduce((function(e,n){return e[n]=t.payload[n],localStorage.setItem(n,JSON.stringify(t.payload[n])),e}),Object(h.a)({},e));return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{headers:{}};fetch(e,Object(h.a)(Object(h.a)({method:"PUT",headers:Object(h.a)(Object(h.a)({},y()),t.headers)},t),{},{body:JSON.stringify(t.body)})).then(v)}(w+"/users/config",{body:t.payload}),n}return e},user:function(e,t){return void 0===e&&(e=function(){var e=p();return e?b.a.decode(e):null}()),"DEFAULT_USER_TYPE"===t.type?(n=t.payload,localStorage.setItem("token",n),t.payload?b.a.decode(t.payload):t.payload):e;var n},global:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;return"DEFAULT_GLOBAL_TYPE"===t.type?Object.keys(t.payload).reduce((function(e,n){return e[n]=t.payload[n],e}),Object(h.a)({},e)):e},ui:function(e,t){if(void 0===e&&(e=function(){var e=localStorage.getItem("ui"),t={dashboard:{tab:0,isEditing:!0},addedActivities:{tab:0},credits:{count:0,hasNew:!1}};return e?Object(h.a)(Object(h.a)({},t),JSON.parse(e)):t}()),"DEFAULT_UI_TYPE"===t.type){var n=Object.keys(t.payload).reduce((function(e,n){return e[n]=t.payload[n],e}),Object(h.a)({},e));return localStorage.setItem("ui",JSON.stringify(n)),n}return e}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object.keys(S).reduce((function(n,o){return n[o]=S[o](e[o],t),n}),e)},T=Object(u.d)((function(e,t){return"RESET"===t.type?(localStorage.clear(),j(void 0,t)):j(e,t)}),O),x=T.dispatch,A=n(10),_=n(461),D=n(462),N=n(554),W=Object(N.a)({root:{padding:"2rem"},ul:{listStyleType:"none","&>li":{margin:"1rem"}}});function P(){var e=W();return a.a.createElement(_.a,{className:e.root,maxWidth:"sm"},a.a.createElement(D.a,{container:!0},a.a.createElement(D.a,{item:!0},a.a.createElement("ul",{className:e.ul},a.a.createElement("li",null,a.a.createElement("a",{target:"_blank",href:"https://diglit.ca"},"https://DigLit.ca")),a.a.createElement("li",null,a.a.createElement("a",{target:"_blank",href:"https://docs.google.com/document/d/e/2PACX-1vTiLAUSplZyEHfBHkTAHodQq8JEqhAZlfjEFb1OJYMJ7DUabO4pg-QYq9-_QnOHF5ctFxjmNoeV2RWW/pub"},"Board of Directors")),a.a.createElement("li",null,a.a.createElement("a",{target:"_blank",href:"https://docs.google.com/document/d/e/2PACX-1vTeuAiNRhDC9DMwoSuwyH1uXu086x4Bcq4vjrCMTbQL8G7Nj-JxmS5-AKJvyPdtY5IlueklBYNT6_3D/pub"},"Advisors"))))))}var q=n(23),L=n(464),I=n(466),z=n(672),J=n(65),C=n(308),H=n(467),M=n(465),R=n(551),F={software_developer:{date:"Oct 18, 2020",name:"Volunteer Software Developer",content:"# Volunteer Software Developer\n## About DigLit\n\nTechnology doesn't work for nonprofits. Technology requires access to capital that nonprofits do not have access to. In addition to this, many nonprofits have budgets that simply do not allow for technology upkeep.\n\nDigLit is a unique solution to this problem.  Our organization acts as the engineering branch of every nonprofit who seeks our help, regardless of their size. We build custom software solutions to strengthen nonprofits, but where other organizations release themselves of responsibility once the technology is built, we deploy and maintain the technology for its expected lifespan.\n\n## About the position\nWe\u2019re looking for a software developer who is capable of building robust applications in a team oriented environment. The ideal candidate is someone who is open to learning new technologies and best practices, and can champion new ways of building software.\n\n### Your responsibilities will include:\n* Writing well designed, testable, and efficient code\n* Working in an agile environment\n* Peer reviewing code to ensure quality contributions\n* Documenting changes and contributions to ensure a smooth release cycle\n\nThis position is fully remote. Our expectation of the role is that it will require no more than 5 hours of work a week, but this will probably fluctuate a little based on the stage of the project.\n\n### Essential qualifications for this role:\n* Experience working with APIs\n* Solid understanding of git and the various deployment levels of a git repo\n* Knowledge in Object Oriented and Functional Design\n* Knowledge of web and server technology\n* Experience with at least one modern JS framework, and various JS toolsets (ES6+, Webpack, Babel, Jest, Protractor)\n* Knowledge of accessibility practices\n\n### Nice-to-haves:\n* A history or strong desire to work with nonprofits\n* An academic understanding of software engineering\n* Excellent communication skills\n* Stays up to date with industry best practices\n\n## How to Apply\nPlease send your resume to recruit@diglit.ca with the exact subject line, \u201cSoftware Developer\u201d (no quotes)."},director_of_engineering:{date:"Oct 18, 2020",name:"Volunteer Director of Engineering",content:"# Volunteer Director of Engineering (Board Member)\n## About DigLit\n\nTechnology doesn't work for nonprofits. Technology requires access to capital that nonprofits do not have access to. In addition to this, many nonprofits have budgets that simply do not allow for technology upkeep.\n\nDigLit is a unique solution to this problem.  Our organization acts as the engineering branch of every nonprofit who seeks our help, regardless of their size. We build custom software solutions to strengthen nonprofits, but where other organizations release themselves of responsibility once the technology is built, we deploy and maintain the technology for its expected lifespan.\n\n## About the position\n\nWe are seeking a member of our board of directors who will oversee the engineering and product branches of our organization. Must have extensive experience working in the engineering or product departments of a tech based institution.\n\n### Your responsibilities will include:\n* Overseeing the engineering stream of our organization\n* Guiding product managers and developer managers\n* Hiring personnel and recruiting volunteers\n* Guiding the architectural research team\n* Be incharge of general tech strategy for our organization\n\nThis position is fully remote. Our expectation of the role is that it will require no more than 5 hours of work a week, but this will probably fluctuate a little based on the stage of the project.\n\n### Essential qualifications for this role:\n* Extensive experience working with product managers, developer managers, UX workers, and engineers\n* Solid understanding of foundational technologies for modern software development\n* Knowledge of front-end, backend, and dev-ops technologies\n* Knowledge of accessibility practices\n* Strong leadership skills\n\n## Nice-to-haves:\n* A history or strong desire to work with nonprofits\n* An academic understanding of software engineering\n* Excellent communication skills\n* Stays up to date with industry best practices\n\n## How to Apply\nPlease send your resume to recruit@diglit.ca with the exact subject line, \u201cDirector of Engineering (no quotes)."},software_manager:{date:"Oct 18, 2020",name:"Volunteer Software Manager",content:"# Volunteer Software Manager\n## About DigLit\n\nTechnology doesn't work for nonprofits. Technology requires access to capital that nonprofits do not have access to. In addition to this, many nonprofits have budgets that simply do not allow for technology upkeep.\n\nDigLit is a unique solution to this problem.  Our organization acts as the engineering branch of every nonprofit who seeks our help, regardless of their size. We build custom software solutions to strengthen nonprofits, but where other organizations release themselves of responsibility once the technology is built, we deploy and maintain the technology for its expected lifespan.\n\n## About the job\nWe\u2019re looking for a software manager who is capable of overseeing full stack development. The ideal candidate is a knowledgeable engineer who can adapt quickly and understand the delicate soft skills of managing and encouraging dev team members.\n\n### Your responsibilities will include:\n* Overseeing the the writing of well designed, testable, efficient code\n* Gathering specifications and requirements based on technical needs\n* Working in an agile environment\n* Enforcing good documentation habits\n* Peer reviewing code to ensure quality contributions\n* Manage release cycles.\n\nThis position is fully remote. Our expectation of the role is that it will require no more than 5 hours of work a week, but this will probably fluctuate a little based on the stage of the project.\n\n### Essential qualifications for this role:\n* Experience with API design\n* Worked in an environment with strong release practices\n* Knowledge in Object Oriented and Functional Design\n* A deep knowledge of web and server technology\n* Experience with at least one modern JS framework, and various JS toolsets (ES6+, Webpack, Babel, Jest, Protractor)\n* Some experience with accessible technology\n* Stays up to date with industry best practices\n\n### Nice-to-haves\n* A history or strong desire to work with nonprofits\n* An academic understanding of software engineering\n* Excellent communication skills\n\n## How to Apply\nPlease send your resume to recruit@diglit.ca with the exact subject line, \u201cSoftware Manager\u201d (no quotes)."},software_architect:{date:"Oct 4, 2020",name:"Volunteer Software Architectural Research Member",content:"# Volunteer Software Architectural Research Member\n\n## About DigLit\n\nTechnology doesn't work for nonprofits. Technology requires access to capital that nonprofits do not have access to. In addition to this, many nonprofits have budgets that simply do not allow for technology upkeep.\n\nDigLit is a unique solution to this problem.  Our organization acts as the engineering branch of every nonprofit who seeks our help, regardless of their size. We build custom software solutions to strengthen nonprofits, but where other organizations release themselves of responsibility once the technology is built, we deploy and maintain the technology for its expected lifespan.\n\n## About the job\n\nWe\u2019re looking for a software architect to join our research team, where you will design and help implement the engineering foundation of our organization. We have unique challenges that will require intellectual prowess in software engineering principles, and the basic psychology of early career software developers.\n\n### Your responsibilities will include:\n* Coordinating with the board of directors to create a software architecture that works within the constraints of the organization\n* Creating general design specs across front-end, backend, and devops technologies that DigLit will use for all future projects\n* Performing code reviews and managing team members in a remote environment\n* Direct code contributions to the system in the initial stages\n\nThis position is fully remote. Our expectation of the role is that it will require no more than 5 hours of work a week, but this will probably fluctuate a little based on the stage of the project.\n\n### Essential qualifications for this role:\n* Know and has expertise in a diverse set of modern languages\n* Has an understanding of the software workforce, and general trends in software technologies\n* Has an academic understanding of software engineering\n* Excellent communicator\n* Strong research skills\n\n### Nice-to-haves\n* A history or strong desire to work with nonprofits\n* Experience working in organizations with fast onboarding procedures\n\n## Compensation\nWe cannot offer compensation for this role. Our organization is composed entirely of volunteer contributors.\n\n## How to Apply\nPlease send your resume to recruit@diglit.ca with the exact subject line, \u201cSoftware Architect\u201d (no quotes). \n  "},product_manager:{date:"Oct 4, 2020",name:"Volunteer Product Manager",content:"# Volunteer Product Manager: NJT\n## About DigLit\nTechnology doesn't work for nonprofits. Technology requires access to capital that nonprofits do not have access to. In addition to this, many nonprofits have budgets that simply do not allow for technology upkeep.\n\nDigLit is a unique solution to this problem.  Our organization acts as the engineering branch of every nonprofit who seeks our help, regardless of their size. We build custom software solutions to strengthen nonprofits, but where other organizations release themselves of responsibility once the technology is built, we deploy and maintain the technology for its expected lifespan.\n\n## About the job\nWe\u2019re looking for a driven and intelligent Product Manager with a solid understanding of the processes involved in the software development life cycle. This person will manage the entire software lifecycle for our Not Just Tourists partnership, and help deliver a successful maiden project for our organization.\n\n### Your responsibilities will include\n* Orchestrating the requirement analysis and building out a comprehensive feature map of the entire application\n* Conducting user interviews where you see fit\n* Designing and testing prototypes with stakeholders\n* Having total product ownership\n* Writing user stories and organizing stories into epics for the development team\n\n### Essential Qualifications for the role\n* Understanding of relational and nosql databases\n* Experience working on or developing products\n* Excellent writing, communication, and organization skills\n* Familiarity with product-centric concepts\n* Familiarity with software engineering principles\n\n### Nice to haves\n* A history or strong desire to work with nonprofits\n* Experience working in organizations with fast onboarding procedures\n\n## Compensation\nWe cannot offer compensation for this role. Our organization is composed entirely of volunteer contributors.\n\n## How to Apply\nPlease send your resume to recruit@diglit.ca with the exact subject line, \u201cProduct Manager\u201d (no quotes)."}},B=Object(z.a)({root:{color:"#fff",backgroundImage:"url('https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",width:"100%",height:"100vh",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundAttachment:"scroll",backgroundSize:"cover",position:"relative"},titleWrapper:{position:"absolute",top:10,right:10},title:{display:"inline-block"},subtitle:{display:"inline-block",fontStyle:"italic"},signup:{backgroundColor:q.a.red.A100},signupWrapper:{width:"200px",margin:"2rem auto"},login:{backgroundColor:q.a.red.A100,position:"absolute",top:20,right:10,width:"150px"}}),U=Object(z.a)({root:{padding:"5rem",backgroundColor:q.a.grey[50]},title:{position:"absolute",top:10,left:10},boxes:{color:"#FFF",backgroundSize:"cover",height:"200px",width:"180px",display:"inline-block",margin:"1rem",borderRadius:"0.5rem"}}),Y=Object(z.a)({root:{backgroundImage:"url('https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80')",backgroundPosition:"center",backgroundSize:"cover",height:"400px",width:"100%"}}),K=Object(z.a)({root:{backgroundColor:q.a.red.A100}});function V(){var e=B(),t=U(),n=Y(),o=K(),i=a.a.createElement("div",{className:e.signupWrapper},a.a.createElement(C.HashLink,{to:"/#positions"},a.a.createElement(L.a,{fullWidth:!0,className:e.signup},"Open Positions")));return a.a.createElement(_.a,{disableGutters:!0},a.a.createElement(D.a,{className:e.root,container:!0,justify:"center",alignItems:"center"},a.a.createElement(D.a,{item:!0,xs:12},a.a.createElement(J.a,{align:"center",variant:"h2"},"Build technology. For good."),a.a.createElement(J.a,{align:"center",variant:"h6"},"A nonprofit that strengthens charities and nonprofits around the world through technology"),i),a.a.createElement("div",{className:e.titleWrapper},a.a.createElement(J.a,{variant:"h5",className:e.subtitle},"engineering@"),a.a.createElement(J.a,{variant:"h5",className:e.title},"DigLit"))),a.a.createElement(D.a,{container:!0,className:t.root,justify:"center",alignItems:"center"},a.a.createElement(D.a,{item:!0},a.a.createElement(J.a,{align:"center",variant:"h6"},"Problem Statement"),a.a.createElement(R.a,{m:"1rem 0"},a.a.createElement(M.a,null)),a.a.createElement(R.a,{maxWidth:"500px"},a.a.createElement(J.a,{variant:"body1"},"Technology doesn't work for nonprofits. Technology requires access to capital that nonprofits do not have access to. In addition to this, many nonprofits have budgets that simply do not allow for technology upkeep.")))),a.a.createElement(D.a,{container:!0,className:o.root,justify:"center",alignItems:"center"},a.a.createElement(D.a,{item:!0,md:6,sm:12},a.a.createElement(R.a,{p:"3rem"},a.a.createElement(J.a,{align:"right",variant:"h6"},"A DigLit Solution"),a.a.createElement(R.a,{m:"1rem 0"},a.a.createElement(M.a,null)),a.a.createElement(J.a,{variant:"body1"},"DigLit acts as the engineering branch of every nonprofit who seeks our help, regardless of their size. We build custom software solutions to strengthen nonprofits, but where other organizations release themselves of responsibility once the technology is built, we deploy and maintain the technology for its expected lifespan."))),a.a.createElement(D.a,{className:n.root,item:!0,md:6,sm:12})),a.a.createElement(D.a,{container:!0,className:t.root,justify:"center",alignItems:"center"},a.a.createElement(D.a,{item:!0},a.a.createElement(D.a,{item:!0},a.a.createElement(J.a,{align:"right",variant:"h6"},"How we choose nonprofits to help"),a.a.createElement(R.a,{m:"1rem 0"},a.a.createElement(M.a,null)),a.a.createElement(R.a,{maxWidth:"500px"},a.a.createElement(J.a,{variant:"body1"},"We evaluate nonprofits generally on two factors: The amount of people affected by potential technological changes, and the quality of that impact."),a.a.createElement(R.a,{m:"1rem"},a.a.createElement(M.a,null)),a.a.createElement(J.a,{variant:"body2"},"Our maiden project is with the Toronto chapter of the ",a.a.createElement("a",{href:"https://njt.net/",target:"_blank"},"Not Just Tourists")," nonprofit."))))),a.a.createElement(D.a,{id:"positions",container:!0,className:o.root,justify:"center",alignItems:"center"},a.a.createElement(D.a,{className:n.root,style:{backgroundImage:"url('https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')"},item:!0,md:6}),a.a.createElement(D.a,{item:!0,md:6},a.a.createElement(R.a,{maxWidth:"300px",p:"3rem",m:"0 auto"},a.a.createElement(J.a,{align:"center",variant:"h6"},"Open Positions"),a.a.createElement(R.a,{m:"1rem 0"},a.a.createElement(M.a,null)),a.a.createElement(I.a,null,Object.keys(F).map((function(e){var t=F[e];return a.a.createElement(s.Link,{key:e,to:"/positions/".concat(e)},a.a.createElement(H.a,{secondary:t.date},t.name))})))))))}var G=n(468),Q=n(469),X=Object(z.a)({root:{maxWidth:"700px",margin:"0 auto"}});function Z(){var e=X();return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement(G.a,{className:e.root},a.a.createElement(Q.a,null,a.a.createElement(J.a,{variant:"h6",component:"h1"},"Contact Us"),a.a.createElement(J.a,{variant:"body2"},"Please fill out the contact form below"),a.a.createElement("iframe",{style:{borderWidth:"0"},src:"https://docs.google.com/forms/d/e/1FAIpQLSfKEkFa7MYYrkq0vuUi_Ono1mPwPTYnmmGKqb_NZSS0MrTePQ/viewform?embedded=true",id:"googleiframe",width:"640",height:"677"},"Loading\u2026")))))}var $=n(470),ee=n(471),te=n(49),ne=Object(z.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{},logo:{height:"3.5rem"},titleLink:{flexGrow:1,textDecoration:"none",color:"inherit"},iconButtons:{color:te.a[700],textDecoration:"none"}}})),oe=function(){var e=ne();return a.a.createElement($.a,{position:"sticky",color:"inherit"},a.a.createElement(ee.a,null,a.a.createElement(s.Link,{className:e.titleLink,to:"/"},a.a.createElement(J.a,{variant:"h6",className:e.title},a.a.createElement("img",{alt:"DigLit Logo",src:"https://i.imgur.com/5Qy6jJt.png",className:e.logo})))))},ae=Object(N.a)({page:{paddingTop:"1rem",paddingBottom:"4rem",minHeight:"90vh"}});function ie(e){var t=ae();return a.a.createElement(a.a.Fragment,null,a.a.createElement(oe,null),a.a.createElement(_.a,{maxWidth:!1,className:t.page},e.children))}var re=n(309),se=n.n(re);function le(){var e=Object(A.m)().name;return a.a.createElement(se.a,{source:F[e].content})}function ce(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(A.d,{exact:!0,path:"/"},a.a.createElement(V,null)),a.a.createElement(A.d,{exact:!0,path:"/contact"},a.a.createElement(ie,null,a.a.createElement(Z,null))),a.a.createElement(A.d,{exact:!0,path:"/positions/:name"},a.a.createElement(ie,null,a.a.createElement(le,null))))}function ue(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(A.g,null,(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_ENGINEERING,a.a.createElement(ce,null))),a.a.createElement(P,null))}var de=n(673),he=n(310),ge=n(313),me=n(674),pe=Object(ge.a)({palette:{primary:{main:te.a[700]}}});var fe=function(){return a.a.createElement(we,{store:T},a.a.createElement(ue,null))},be=s.HashRouter;function we(e){var t=e.children,n=e.store;return a.a.createElement(l.a,{value:{fetcher:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return E.apply(void 0,[e].concat(n))}}},a.a.createElement(de.a,{utils:he.a},a.a.createElement(me.a,{theme:pe},a.a.createElement(c.a,{store:n},a.a.createElement("div",null,a.a.createElement(be,null,t))))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[321,1,2]]]);
//# sourceMappingURL=main.0c5c8132.chunk.js.map