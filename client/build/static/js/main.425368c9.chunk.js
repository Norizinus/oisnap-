(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/3a.834d966c.png"},49:function(e,t,a){e.exports=a(77)},54:function(e,t,a){},55:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(44),o=a.n(s),c=(a(54),a(5)),l=a(4),i=a(7),u=a(6),m=a(8),p=(a(55),a(19)),d=a(9),h=a.n(d),g=a(12),f=Object(g.a)(),b=a(11),E=a(25),v=a.n(E),y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).logout=function(){h.a.get("/auth/logout").then((function(e){a.props.setUser(null)})).catch((function(e){return console.log(e)}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"navbar"},r.a.createElement(b.b,{className:"navbarHome",to:"/home"},r.a.createElement("img",{className:"logo",src:v.a,alt:"OiSnap-logo"})),r.a.createElement("button",null,r.a.createElement("i",{name:"user",className:"fas fa-user"})),this.props.dropdown&&!this.props.user&&r.a.createElement("div",{className:"dropdown"},r.a.createElement(b.b,{to:"/login"},"Login"),r.a.createElement(b.b,{to:"/signup"},"Signup")),this.props.dropdown&&this.props.user&&r.a.createElement("div",{className:"dropdown"},r.a.createElement(b.b,{to:"/profile"},"Profile"),r.a.createElement(b.b,{to:"/home",onClick:this.logout},"Logout"))))}}]),t}(n.Component),C=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"welcomePopup container-content"},r.a.createElement("img",{className:"logo",src:v.a}),r.a.createElement("p",null,"OiSnap is a social platform that allows users around Berlin to share their best tips of the moment based on location. Share a picutre of a couch up for grabs on the street, the line to Berghain or an awesome street artist \u2013 all snaps disappear after 24 hours."),r.a.createElement("button",{className:"button-visible"},r.a.createElement(b.b,{className:"link",to:"/home"},"Explore"))))},w=a(26),O=a(22),N=function(e,t){if(!e)return{};var a="",n=(new Date).getTime();t&&(n=new Date(t).getTime());var r=Date.now()-n;r<=0&&(r=1);var s=r/864e5*100;switch(e){case"promo":a="rgb(255, ".concat(s+50,", ").concat(s+50,")");break;case"happening":a="rgb(".concat(s+100,", ").concat(s+100,", ").concat(s+100,")");break;case"crowd":a="rgb(255, 255, ".concat(s,")");break;case"free":a="rgb(".concat(s,", ").concat(s+204,", ").concat(s,")");break;default:a="rgb(242, 242, 242)"}return a},j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={snap:null,message:null},a.getData=function(){var e=a.props.id;h.a.get("/snaps/".concat(e)).then((function(e){a.setState({snap:e.data})})).catch((function(e){a.setState({message:e})}))},a.getTime=function(e){var t=new Date,a=new Date(e.created_at),n=t.getTime()-a.getTime(),r=parseInt(n/36e5),s=parseInt(n/6e4);return r>1?r+" hours ":1===r?r+" hour ":1===s?s+" minute ":s+" minutes "},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){e.id!==this.props.id&&this.getData()}},{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state.snap;return e?r.a.createElement("div",{className:"preview"},r.a.createElement("div",{className:"snap-box"},r.a.createElement("div",{className:"preview-time-box",style:{backgroundColor:N(this.state.snap.category,this.state.snap.created_at)}},r.a.createElement("p",{className:"time"},"Created ",this.getTime(e)," ago")),r.a.createElement("div",{className:"container-content"},r.a.createElement("img",{className:"snap-img-preview",src:e.image,alt:e.title}),r.a.createElement("div",{className:"details-box"},r.a.createElement("h3",null,e.title),r.a.createElement(b.b,{className:"see-more",to:"/snaps/".concat(e._id)},"View more"))))):r.a.createElement("div",null,"LOADING")}}]),t}(n.Component),S="".concat("pk.eyJ1IjoibWlhbGF2IiwiYSI6ImNrNzR0OGliYjAzcjgzZnIxdTZpMzAwYzIifQ.E80O2HKIcXUCuAkk4vGSdg"),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={viewport:{latitude:52.520007,longitude:13.404954,zoom:12},popupInfo:null},a._onViewportChange=function(e){return a.setState({viewport:e})},a.getSnaps=function(){var e=[];return 0!==a.props.snapsData.length&&(e=a.props.snapsData.map((function(e){return{_id:e._id,latitude:e.location.lat,longitude:e.location.lng,category:e.category,creationDate:e.created_at}}))),e},a.renderPopup=function(e){a.setState({popupInfo:e})},a.closePopup=function(){a.setState({popupInfo:null})},a.closeWindows=function(){f.push("/home"),a.setState({popupInfo:null})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.viewport;return r.a.createElement(O.e,Object.assign({},t,{width:"100vw",height:"100vh",mapStyle:"mapbox://styles/mapbox/dark-v10",onViewportChange:this._onViewportChange,mapboxApiAccessToken:S,className:"mapContainer",onClick:this.closeWindows}),r.a.createElement("div",{className:"map-controls"},r.a.createElement("div",{className:"geolocation-button"},r.a.createElement(O.a,{className:"map-geolocateStyle",positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0,onViewportChange:function(t){e.setState({viewport:Object(w.a)({},t,{zoom:16})})}})),r.a.createElement("div",null,r.a.createElement(O.c,{showCompass:!1}))),this.getSnaps().map((function(t){return r.a.createElement(O.b,{key:t._id,latitude:t.latitude,longitude:t.longitude,snapImage:t.image,snapTitle:t.title,snapCreated:t.created_at},r.a.createElement("span",{style:{color:N(t.category,t.creationDate)}},r.a.createElement("i",{className:"fas fa-map-marker-alt",onClick:function(){return e.renderPopup(t)}})))})),null!==this.state.popupInfo?r.a.createElement(O.d,{anchor:"bottom-left",latitude:this.state.popupInfo.latitude,longitude:this.state.popupInfo.longitude,dynamicPosition:!0,closeButton:!1,closeOnClick:!0,style:{backgroundColor:"".concat(N(this.state.popupInfo.category,this.state.popupInfo.created_at))}},r.a.createElement("div",{onClick:this.closePopup},r.a.createElement(j,{id:this.state.popupInfo._id}))):null)}}]),t}(n.Component),D=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"toolbar"},r.a.createElement(b.b,{to:"/filter"},"Filter"),r.a.createElement(b.b,{to:"/add"},r.a.createElement("div",{className:"addSnap"},r.a.createElement("i",{className:"fas fa-camera"}))))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={search:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"search"},"Search location:"),r.a.createElement("input",{type:"text"}),r.a.createElement("button",null,"Go")))}}]),t}(n.Component),x=a(48),I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={filters:[]},a.handleChange=function(e){var t=a.state.filters.indexOf(e.target.value);-1===t?a.setState({filters:[].concat(Object(x.a)(a.state.filters),[e.target.value])}):(a.state.filters.splice(t,1),a.setState({filters:a.state.filters}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"goToMap",value:function(){f.push("/home")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"filters"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",id:"",name:"free",value:"free",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"free"}," FREE ")),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",id:"",name:"happening",value:"happening",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"happening"}," HAPPENING ")),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",id:"",name:"crowd",value:"crowd",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"crowd"}," CROWD ")),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",id:"",name:"promo",value:"promo",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"promo"}," PROMO "))),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.goToMap(),e.props.filterSnaps(e.state.filters)}},"GO")))}}]),t}(n.Component),_=a(1),F=a(16),L=a.n(F);L.a.setApiKey("AIzaSyBh2aAsK418Q4BEEbtSafeh353MvH-EjsQ");var P=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={page:1,category:null,message:"",location:"",title:"",description:"",loading:!1,image:null,address:""},a.goNext=function(e){a.state.category&&a.state.image?(e.target.classList.add("hidden"),document.getElementById("back-button").classList.remove("hidden"),a.setState({page:2,message:""})):a.setState({message:"Photo and category are required."})},a.componentDidMount=function(){a.props.user||a.props.history.push("/login"),navigator.geolocation.getCurrentPosition((function(e){var t={lat:e.coords.latitude,lng:e.coords.longitude};L.a.fromLatLng(t.lat,t.lng).then((function(e){a.setState({location:t,address:e.results[0].formatted_address})})).catch((function(e){return console.log(e)}))}))},a.goBack=function(e){e.target.classList.add("hidden"),document.getElementById("next-button").classList.remove("hidden"),a.setState({page:1})},a.assignCategory=function(e){var t=e.target.value,n=document.getElementsByClassName("category-button"),r=!0,s=!1,o=void 0;try{for(var c,l=n[Symbol.iterator]();!(r=(c=l.next()).done);r=!0){c.value.classList.remove("selected-button")}}catch(i){s=!0,o=i}finally{try{r||null==l.return||l.return()}finally{if(s)throw o}}e.target.classList.add("selected-button"),a.setState({category:t})},a.handleChange=function(e){a.setState(Object(_.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),""!==a.state.title&&a.state.location?L.a.fromAddress(a.state.address).then((function(e){h.a.post("/snaps/",{title:a.state.title,description:a.state.description,category:a.state.category,address:e.results[0].formatted_address,location:e.results[0].geometry.location,image:a.state.image}).then((function(e){a.props.refresh(),a.props.history.push("/snaps/".concat(e.data._id))})).catch((function(e){a.setState({message:"Something went wrong, please try again."})}))})).catch((function(e){return console.log(e)})):a.setState({message:"Please give your snap a title and location."})},a.uploadImage=function(e){var t=e.target.files,n=new FormData;n.append("file",t[0]),n.append("upload_preset","oisnap"),a.setState({loading:!0}),fetch("https://api.cloudinary.com/v1_1/oisnap/image/upload",{method:"POST",body:n}).then((function(e){return e.json()})).then((function(e){a.setState({image:e.secure_url,loading:!1})})).catch((function(e){console.log(e),a.setState({message:"Couldn't upload the photo, please try again."})}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navigation-items",style:{backgroundColor:N(this.state.category)}},r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{className:"navigation-button hidden",id:"back-button",onClick:this.goBack},"BACK"),r.a.createElement("button",{id:"next-button",className:"navigation-button",onClick:this.goNext},"NEXT")),r.a.createElement("p",{className:"step-count"},r.a.createElement("b",null," Step ",this.state.page," out of 2")," ")),1===this.state.page&&r.a.createElement("div",{className:"test"},r.a.createElement("div",{className:"container-content page photo-page"},r.a.createElement("input",{style:{display:"none"},type:"file",name:"file",placeholder:"Upload an image",onChange:this.uploadImage,ref:function(t){return e.fileInput=t}}),r.a.createElement("button",{className:"upload-image",onClick:function(){return e.fileInput.click()}},r.a.createElement("i",{className:"fas fa-camera"})),this.state.loading?r.a.createElement("h3",null,"Loading "):r.a.createElement("img",{className:"uploaded-img",src:this.state.image,alt:this.state.title}),r.a.createElement("button",{className:"button-visible category-button",onClick:this.assignCategory,value:"free"},"FREE"),r.a.createElement("button",{className:"button-visible category-button",onClick:this.assignCategory,value:"promo"},"PROMO"),r.a.createElement("button",{className:"button-visible category-button",onClick:this.assignCategory,value:"crowd"},"CROWD"),r.a.createElement("button",{className:"button-visible category-button",onClick:this.assignCategory,value:"happening"},"HAPPENING"),this.state.message&&r.a.createElement("p",{className:"error-message"},this.state.message))),2===this.state.page&&r.a.createElement("div",{className:"container-content"},r.a.createElement("div",{className:"page detail-page snap-form"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"title"},"Snap title *"),r.a.createElement("input",{type:"text",name:"title",id:"title",value:this.state.title,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"description"}," Short description"),r.a.createElement("input",{type:"text",name:"description",id:"description",value:this.state.description,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"address"}," Location "),r.a.createElement("input",{type:"text",name:"address",id:"address",value:this.state.address,onChange:this.handleChange}),r.a.createElement("button",{className:"button-visible submit-button",type:"submit"},"Add to")),this.state.snapError&&r.a.createElement("p",{className:"error-message"},this.state.snapError)))))}}]),t}(n.Component),T=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",message:""},a.handleChange=function(e){a.setState(Object(_.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),h.a.post("/auth/signup",{username:a.state.username,password:a.state.password}).then((function(e){a.props.setUser(e.data),a.props.history.push("/home")})).catch((function(e){a.setState({message:e.response.data.message})}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"detail-page"},r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{id:"username",name:"username",type:"text",autoComplete:"username",onChange:this.handleChange,value:this.state.username}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",onChange:this.handleChange,value:this.state.password}),this.state.message&&r.a.createElement("p",null,this.state.message),r.a.createElement("button",{type:"submit",onClick:this.handleSubmit},"Sign Up"))))}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",message:null},a.handleChange=function(e){a.setState(Object(_.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),h.a.post("/auth/login",{username:a.state.username,password:a.state.password}).then((function(e){a.props.setUser(e.data),a.props.history.push("/home")})).catch((function(e){a.setState({message:"Incorrect credentials, please try again"})}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"detail-page"},r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{id:"username",name:"username",type:"text",autoComplete:"username",onChange:this.handleChange,value:this.state.username}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",onChange:this.handleChange,value:this.state.password}),r.a.createElement("button",{type:"submit",onClick:this.handleSubmit},"Log in")),this.state.message?r.a.createElement("p",null,this.state.message):r.a.createElement("p",null)))}}]),t}(n.Component),B=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={snapData:[],score:null},a.getData=function(){h.a.get("/snaps?user=".concat(a.props.user._id)).then((function(e){console.log("response.score :",e.data.score),a.setState({snapData:e.data.snapList,score:e.data.score})})).catch((function(e){return console.log(e)}))},a.componentDidMount=function(){a.props.user||a.props.history.push("/login"),a.getData()},a.handleSubmit=function(e){e.preventDefault(),"edit"===e.target.getAttribute("name")?a.props.history.push("/snaps/".concat(e.target.parentNode.parentNode.parentNode.getAttribute("id"),"/edit")):"delete"===e.target.getAttribute("name")&&h.a.delete("/snaps/".concat(e.target.parentNode.parentNode.parentNode.getAttribute("id"))).then((function(e){console.log(e),a.props.refresh(),a.getData()})).catch((function(e){}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"user-info"},r.a.createElement("h3",null,this.props.user.username,"'s Profile"),r.a.createElement("p",null,"Snap score: ",r.a.createElement("i",null,this.state.score))),r.a.createElement("h4",null,"Your current snaps"),r.a.createElement("div",{className:"container-content"},r.a.createElement("div",{className:"user-snaps"},null===(e=this.state.snapData)||void 0===e?void 0:e.map((function(e){return r.a.createElement("div",{className:"user-snap",id:e._id,key:e._id},r.a.createElement("div",{className:"snap-info"},r.a.createElement("img",{className:"snap-img-preview",src:e.image,alt:e.title}),r.a.createElement(b.b,{to:"/snaps/".concat(e._id)},e.title)),r.a.createElement("div",{className:"snap-edit"},r.a.createElement("button",{onClick:t.handleSubmit},r.a.createElement("i",{name:"edit",className:"fas fa-pen"})),r.a.createElement("button",{onClick:t.handleSubmit},r.a.createElement("i",{name:"delete",className:"fas fa-trash-alt"}))))})),0===this.state.snapData.length&&r.a.createElement("p",null,"Nothing here yet... ",r.a.createElement("br",null)," Time to"," ",r.a.createElement(b.b,{to:"/add"},"post a snap!")," "))))}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={snap:null,message:null},a.handleSubmit=function(e){e.preventDefault(),"edit"===e.target.getAttribute("name")?a.props.history.push("/snaps/".concat(a.props.match.params.id,"/edit")):"delete"===e.target.getAttribute("name")&&h.a.delete("/snaps/".concat(a.props.match.params.id)).then((function(e){a.props.refresh(),a.props.history.push("/home")})).catch((function(e){console.log(e)}))},a.getTime=function(e){var t=new Date,a=new Date(e.created_at),n=t.getTime()-a.getTime(),r=parseInt(n/36e5),s=parseInt(n/6e4);return r>1?r+" hours ":1===r?r+" hour ":1===s?s+" minute ":s+" minutes "},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;h.a.get("/snaps/".concat(t)).then((function(t){e.setState({snap:t.data})})).catch((function(t){e.setState({message:t})}))}},{key:"render",value:function(){var e=this.state.snap;return e?(console.log(this.state.snap.category),console.log(N(this.state.snap)),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"time-box",style:{backgroundColor:N(this.state.snap.category,this.state.snap.created_at)}},r.a.createElement("p",null,"Created ",this.getTime(e)," ago")),r.a.createElement("div",{className:"container-content "},r.a.createElement("div",{className:"snap-box"},r.a.createElement("div",null,r.a.createElement("img",{className:"snap-img",src:e.image,alt:e.title})),r.a.createElement("div",{className:"details-box"},r.a.createElement("h2",null,e.title),""!==e.description&&r.a.createElement("p",null,e.description),this.props.user._id===e.user&&r.a.createElement("div",null,r.a.createElement("button",{onClick:this.handleSubmit},r.a.createElement("i",{name:"edit",className:"fas fa-pen"})),r.a.createElement("button",{onClick:this.handleSubmit},r.a.createElement("i",{name:"delete",className:"fas fa-trash-alt"})))))))):r.a.createElement("div",null,"LOADING")}}]),t}(n.Component),z=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Ironhack \xa9 Karo Mia Nora"))}}]),t}(n.Component);L.a.setApiKey("AIzaSyBh2aAsK418Q4BEEbtSafeh353MvH-EjsQ");var G=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:"",title:"",description:"",location:"",category:"",img:"",creationDate:"",address:""},a.handleChange=function(e){a.setState(Object(_.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),L.a.fromAddress(a.state.address).then((function(e){h.a.patch("/snaps/".concat(a.props.match.params.id),Object(w.a)({},a.state,{address:e.results[0].formatted_address,location:e.results[0].geometry.location})).then((function(e){a.props.refresh(),a.props.history.push("/snaps/".concat(a.props.match.params.id))})).catch((function(e){return console.log(e.message)}))})).catch((function(e){return console.log(e)}))},a.assignCategory=function(e){e.preventDefault(),a.setState({category:e.target.value})},a.updateLocation=function(e){e.preventDefault(),navigator.geolocation.getCurrentPosition((function(e){var t={lat:e.coords.latitude,lng:e.coords.longitude};L.a.fromLatLng(t.lat,t.lng).then((function(e){a.setState({location:t,address:e.results[0].formatted_address})})).catch((function(e){return console.log(e)}))}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("/snaps/".concat(this.props.match.params.id)).then((function(t){e.setState({user:t.data.user,title:t.data.title,description:t.data.description,category:t.data.category,img:t.data.image,creationDate:t.created_at,address:t.data.address,location:t.data.location})})).catch((function(t){e.setState({message:t})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},this.props.user._id==this.state.user?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container-header",style:{backgroundColor:"".concat(N(this.state.category,this.state.creationDate))}},r.a.createElement("h3",null,"Edit your Snap")),r.a.createElement("div",{className:"container-content"},r.a.createElement("img",{className:"snap-img",src:this.state.img,alt:this.state.title,style:{height:"40vh"}}),r.a.createElement("p",null,r.a.createElement("i",null,"You cannot edit the picture once it was posted.")),r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"title"},"Snap title"),r.a.createElement("input",{type:"text",name:"title",id:"title",value:this.state.title,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"description"}," Short description"),r.a.createElement("input",{type:"text",name:"description",id:"description",value:this.state.description,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"address"}," Location "),r.a.createElement("input",{type:"text",name:"address",id:"address",value:this.state.address,onChange:this.handleChange}),r.a.createElement("button",{onClick:this.updateLocation},"Update Location"),r.a.createElement("p",null,"Current Category: ",this.state.category),r.a.createElement("button",{onClick:this.assignCategory,value:"free"},"FREE"),r.a.createElement("button",{onClick:this.assignCategory,value:"promo"},"PROMO"),r.a.createElement("button",{onClick:this.assignCategory,value:"crowd"},"CROWD"),r.a.createElement("button",{onClick:this.assignCategory,value:"happening"},"HAPPENING"),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.handleSubmit},"Save Changes"))))):r.a.createElement("p",null,"You need to be the owner of the snap to edit it"))}}]),t}(n.Component),R=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:a.props.user,data:[],dropdown:!1},a.setDropdown=function(e){"user"===e.target.getAttribute("name")?a.setState({dropdown:!a.state.dropdown}):a.setState({dropdown:!1})},a.setUser=function(e){a.setState({user:e})},a.filterSnaps=function(e){var t=a.state.data.filter((function(t){var a=!0,n=!1,r=void 0;try{for(var s,o=e[Symbol.iterator]();!(a=(s=o.next()).done);a=!0){var c=s.value;if(t.category===c)return t}}catch(l){n=!0,r=l}finally{try{a||null==o.return||o.return()}finally{if(n)throw r}}}));a.setState({data:t})},a.getData=function(){h.a.get("/snaps").then((function(e){a.setState({data:e.data.snapList})})).catch((function(e){console.log(e)}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App",onClick:this.setDropdown},r.a.createElement(p.b,{history:f},r.a.createElement("div",{className:"map"},r.a.createElement(k,{snapsData:this.state.data})),r.a.createElement("div",{className:"body"},r.a.createElement(y,{user:this.state.user,setUser:this.setUser,dropdown:this.state.dropdown}),r.a.createElement("div",{className:"body-view"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/search",component:A}),r.a.createElement(p.a,{exact:!0,path:"/filter",render:function(t){return r.a.createElement(I,{filterSnaps:e.filterSnaps,history:t.history})}}),r.a.createElement(p.a,{exact:!0,path:"/add",render:function(t){return r.a.createElement(P,{user:e.state.user,refresh:e.getData,history:t.history,setDropdown:e.setDropdown})}}),r.a.createElement(p.a,{exact:!0,path:"/signup",render:function(t){return r.a.createElement(T,{setUser:e.setUser,history:t.history,setDropdown:e.setDropdown})}}),r.a.createElement(p.a,{exact:!0,path:"/login",render:function(t){return r.a.createElement(U,{setUser:e.setUser,history:t.history,setDropdown:e.setDropdown})}}),r.a.createElement(p.a,{exact:!0,path:"/profile",render:function(t){return r.a.createElement(B,{user:e.state.user,history:t.history,refresh:e.getData,setDropdown:e.setDropdown})}}),r.a.createElement(p.a,{exact:!0,path:"/snaps/:id/edit",render:function(t){return r.a.createElement(G,Object.assign({user:e.state.user},t,{refresh:e.getData,setDropdown:e.setDropdown}))}}),r.a.createElement(p.a,{path:"/snaps/:id",render:function(t){return r.a.createElement(M,Object.assign({},t,{user:e.state.user,refresh:e.getData,setDropdown:e.setDropdown}))}}),r.a.createElement(p.a,{path:"/snaps/:id/preview",render:function(t){return r.a.createElement(j,Object.assign({},t,{user:e.state.user}))}}),r.a.createElement(p.a,{exact:!0,path:"/",component:C}))),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:z}),r.a.createElement(D,{snapsdata:this.state.data})))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));L.a.setApiKey("AIzaSyBh2aAsK418Q4BEEbtSafeh353MvH-EjsQ"),h.a.get("/auth/loggedin").then((function(e){o.a.render(r.a.createElement(b.a,null,r.a.createElement(R,{user:e.data})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.425368c9.chunk.js.map