(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,function(e,t,a){e.exports=a.p+"static/media/github-blue.40a21cda.svg"},,,,function(e,t,a){e.exports=a.p+"static/media/github-red.6e962817.svg"},function(e,t,a){e.exports=a.p+"static/media/linkedin-blue.ebf7f505.svg"},function(e,t,a){e.exports=a.p+"static/media/linkedin-red.da3043bd.svg"},function(e,t,a){e.exports=a.p+"static/media/close.b486f818.svg"},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){e.exports=a.p+"static/media/view.6869583b.svg"},function(e,t,a){e.exports=a.p+"static/media/fast.00929bbb.svg"},function(e,t,a){e.exports=a.p+"static/media/effort-2.cf441860.svg"},function(e,t,a){e.exports=a.p+"static/media/resourceful.9140463d.svg"},function(e,t,a){e.exports=a(29)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),l=a(4),n=a.n(l),r=(a(19),a(2));a(20),a(21);class o extends s.Component{render(){return i.a.createElement("nav",null,i.a.createElement("div",{className:"nav-container"},i.a.createElement("div",{className:"nav-items"},i.a.createElement("a",{href:"#home"},i.a.createElement("div",{className:"nav-item"},"Home")),i.a.createElement("a",{href:"#portfolio"},i.a.createElement("div",{className:"nav-item"},"Portfolio")),i.a.createElement("a",{href:"#why-me"},i.a.createElement("div",{className:"nav-item"},"About")))))}}a(22);class c extends s.Component{render(){let e=!1;return"exiting"===this.props.class&&(e=!0),i.a.createElement("div",null,i.a.createElement("img",{className:e?"hover":null,src:this.props.src}))}}var p=a(1),m=a.n(p),d=a(5),h=a.n(d),u=a(6),v=a.n(u),k=a(7),g=a.n(k);class E extends s.Component{constructor(...e){super(...e),this.state={github_hover:!1,linkedin_hover:!1},this.githubStateHandler=e=>{this.setState(()=>({github_hover:e}))},this.linkedinStateHandler=e=>{this.setState(()=>({linkedin_hover:e}))}}render(){let e,t;return e=this.state.github_hover?i.a.createElement(c,{class:"hover",src:h.a}):i.a.createElement(c,{src:m.a}),t=this.state.linkedin_hover?i.a.createElement(c,{class:"hover",src:g.a}):i.a.createElement(c,{src:v.a}),i.a.createElement("div",{className:"contact-links hflex center"},i.a.createElement("div",{className:"link"},i.a.createElement("a",{onMouseEnter:()=>this.githubStateHandler(!0),onMouseLeave:()=>this.githubStateHandler(!1),href:"https://github.com/alexNeep/"},e)),i.a.createElement("div",{className:"link"},i.a.createElement("a",{onMouseEnter:()=>this.linkedinStateHandler(!0),onMouseLeave:()=>this.linkedinStateHandler(!1),href:"https://www.linkedin.com/in/alex-neep/"},t)))}}a(23);class f extends s.Component{render(){return i.a.createElement("div",{className:"vflex hero-section",id:"home"},i.a.createElement("div",{className:"hero"},i.a.createElement("h1",{className:"red"},"Alex Neep"),i.a.createElement("h2",{className:"red"},"Junior Developer")),i.a.createElement(E,null))}}var b=a(8),y=a.n(b);class x extends s.Component{constructor(...e){super(...e),this.sendEvent=e=>{this.props.skillActivityHandler(this.props.skill.name)}}render(){return i.a.createElement("div",{value:this.props.skill.name,className:"skill",style:{backgroundColor:!0===this.props.skill.active?this.props.skill.color:"grey",color:this.props.skill.text},onClick:e=>this.sendEvent(e)},i.a.createElement("span",{className:"text"},this.props.skill.name),i.a.createElement("img",{value:this.props.skill.name,className:"close",src:y.a,alt:"Close icon"}))}}var N=x;class S extends s.Component{render(){return i.a.createElement("div",{className:"skills-container"},i.a.createElement("h1",null,"Portfolio"),this.props.skills.map(e=>i.a.createElement(N,{key:e.name,skill:e,skillActivityHandler:this.props.skillActivityHandler})))}}var H=a(9),w=a.n(H),C=a(10),M=a.n(C);class A extends s.Component{render(){return i.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer",style:{display:""===this.props.link?"none":"inline-block"}},i.a.createElement("button",{className:this.props.class},i.a.createElement("img",{className:"icon",src:this.props.icon,alt:this.props.alt}),i.a.createElement("span",{className:"text"},this.props.text)))}}a(24);class L extends s.Component{render(){return this.props.skills.length>0?i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"title"},this.props.project.title),i.a.createElement("div",{className:"image"},i.a.createElement("img",{src:w.a,alt:"portfolio snapshot"})),i.a.createElement("div",{className:"skills"},this.props.skills.filter(e=>this.props.project.skills.includes(e.name)).map(e=>i.a.createElement(N,{key:e.name,skill:e,skillActivityHandler:this.props.skillActivityHandler}))),i.a.createElement("div",{className:"description"},this.props.project.description),i.a.createElement("div",{className:"buttons"},i.a.createElement(A,{link:this.props.project.link,class:"demo-button",icon:M.a,alt:"eye icon",text:"View"}),i.a.createElement(A,{link:this.props.project.github,class:"github-button",icon:m.a,alt:"Github icon",text:"Github"}))):i.a.createElement("div",null)}}a(25);class j extends s.Component{constructor(...e){super(...e),this.sortedProjects=e=>e.sort((e,t)=>this.getActiveLength(t.skills)-this.getActiveLength(e.skills)),this.getActiveLength=e=>{let t=this.props.skills,a=[];t.forEach(e=>{e.active&&a.push(e)});let s=0;return a.forEach(t=>{e.includes(t.name)&&s++}),s}}render(){return i.a.createElement("div",{className:"portfolio-section dark-background",id:"portfolio"},i.a.createElement(S,{skills:this.props.skills,skillActivityHandler:this.props.skillActivityHandler}),i.a.createElement("div",{className:"portfolio-container"},this.sortedProjects(this.props.projects).map(e=>i.a.createElement(L,{key:e.id,project:e,skills:this.props.skills,skillActivityHandler:this.props.skillActivityHandler}))))}}a(26);class P extends s.Component{render(){return i.a.createElement("div",{className:"icon-card",onMouseEnter:()=>this.props.action(this.props.id),onMouseLeave:()=>this.props.action(-1)},i.a.createElement("div",{className:"title"},this.props.title),i.a.createElement("div",{className:"content content-slide-left"},i.a.createElement("img",{src:this.props.image,style:{display:this.props.opened?"none":"block"}}),i.a.createElement("div",{className:"description",style:!0,style:{display:this.props.opened?"block":"none"}},this.props.description)))}}var J=a(11),T=a.n(J),R=a(12),_=a.n(R),F=a(13),B=a.n(F);a(27);class I extends s.Component{constructor(...e){super(...e),this.state={skills:[{id:0,title:"Hardworking",description:"My infectious motivation has been key to LanguageMate's rapid growth over the last year",image:_.a,opened:!1},{id:1,title:"Quick Learner",description:"Over the past 12 months, I have enjoyed learning how to use complex languages and frameworks. I learned how to work with React, Flask, and Cloud Computing Software and have used them in production settings.",image:T.a,opened:!1},{id:2,title:"Resourceful",description:"Whilst growing LanguageMate, I had to independently learn many new skills, including languages such as Python, JavaScript, and PHP.",image:B.a,opened:!1}]},this.closeAllCards=()=>{let e=[...this.state.skills];e.forEach(e=>{e.opened=!1}),this.setState(()=>({skills:e}))},this.openedStateHandler=e=>{if(-1!==e){let t=[...this.state.skills],a=Object(r.a)({},t[e]);a.opened=!a.opened,t[e]=a,this.setState(()=>({skills:t}))}else console.log("hi"),this.closeAllCards()}}render(){return i.a.createElement("div",{className:"me-section",id:"why-me"},i.a.createElement("h2",{className:"dark-blue"},"Key Skills"),i.a.createElement("div",{className:"flex"},this.state.skills.map(e=>i.a.createElement(P,{id:e.id,key:e.id,title:e.title,image:e.image,description:e.description,opened:e.opened,action:this.openedStateHandler}))))}}s.Component;a(28);class D extends s.Component{render(){return i.a.createElement("div",null,i.a.createElement("div",{className:"center dark-background"},i.a.createElement("h1",{className:"light"},"I am avaliable for work"),i.a.createElement("h2",{className:"light"},"Let's get in touch"),i.a.createElement("div",{className:"light-background footer-container"},i.a.createElement(E,null))))}}class G extends s.Component{constructor(...e){super(...e),this.state={projects:[{id:1,title:"LanguageMate (2020)",description:"",image:"",link:"https://language-mate.com",github:"",skills:["JavaScript","React","test","HTML","CSS","Python","Google Cloud","SQL"]},{id:2,title:"TravelMate",description:"",image:"",link:"",github:"https://github.com/alexNeep/TravelMate",skills:["JavaScript","HTML","CSS","React"]},{id:3,title:"Portfolio Page",description:"",image:"",link:"",github:"https://github.com/alexNeep/portfolio",skills:["JavaScript","HTML","CSS","React"]},{id:4,title:"MyReads App",description:"",image:"",link:"",github:"https://github.com/alexNeep/TravelMate",skills:["JavaScript","HTML","React","CSS"]},{id:5,title:"LanguageMate (2019)",description:"",image:"",link:"https://web.language-mate.com/",github:"",skills:["PHP","HTML","SQL","CSS"]}],skills:[{key:0,name:"JavaScript",color:"#F5E600",active:!0},{key:1,name:"HTML",text:"white",color:"#FF290B",active:!0},{key:2,name:"CSS",text:"white",color:"#4B9D00",active:!0},{key:3,name:"React",text:"black",color:"#08E2EE",active:!0},{key:4,name:"Python",text:"white",color:"#0462BD",active:!0},{key:5,name:"SQL",text:"black",color:"#00DE4F",active:!0},{key:6,name:"Google Cloud",text:"white",color:"#4285F4",active:!0},{key:7,name:"PHP",text:"white",color:"#5367B6",active:!0}]},this.skillActivityHandler=e=>{let t=0;for(let i=0;i<this.state.skills.length;i++)if(this.state.skills[i].name===e){t=this.state.skills[i].key;break}let a=[...this.state.skills],s=Object(r.a)({},a[t]);s.active=!s.active,a[t]=s,this.setState(()=>({skills:a}))}}render(){return i.a.createElement("div",{className:"App"},i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),i.a.createElement("div",{className:"background-image"},i.a.createElement(o,null),i.a.createElement(f,null)),i.a.createElement("div",{className:"dark-background"},i.a.createElement(j,{skills:this.state.skills,projects:this.state.projects,skillActivityHandler:this.skillActivityHandler})),i.a.createElement(I,null),i.a.createElement(D,null))}}var Q=G;n.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Q,null)),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.019ccf86.chunk.js.map