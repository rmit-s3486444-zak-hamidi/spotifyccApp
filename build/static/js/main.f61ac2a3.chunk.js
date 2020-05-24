(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(e,t,a){e.exports=a(249)},164:function(e,t,a){},249:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(40),o=a.n(s),c=(a(163),a(164),a(54)),l=a.n(c),i=a(69),u=a(19),m=a(20),d=a(23),p=a(21),h=a(24),f=a(260),g=a(261),E=a(262),v=(a(79),a(252)),w=a(258),b=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleLogOut=function(){var e=Object(i.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{v.a.signOut(),a.props.auth.setAuthStatus(!1),a.props.auth.setUser(null)}catch(n){console.log(n.message)}case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",{className:"navbar-item",href:"/"},r.a.createElement("img",{src:"spotify-logo.png",width:"112",height:"28",alt:"hexal logo"}))),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},this.props.auth.isAuthenticated&&this.props.auth.user&&r.a.createElement("p",null,"Hello ",this.props.auth.user.username),r.a.createElement("div",{className:"buttons"},!this.props.auth.isAuthenticated&&r.a.createElement("div",null,r.a.createElement("a",{href:"/register",className:"button is-primary"},r.a.createElement("strong",null,"Register")),r.a.createElement("a",{href:"/login",className:"button is-light"},"Log in")),this.props.auth.isAuthenticated&&r.a.createElement("div",null,r.a.createElement("a",{href:"/mapcontainer",className:"button is-light"},"Your Location"),r.a.createElement("a",{href:"/content",className:"button is-light"},"Content"),r.a.createElement("a",{href:"/artists",className:"button is-light"},"Search Artists"),r.a.createElement("a",{href:"/changepassword",className:"button is-light"},"Change Password"),r.a.createElement("a",{href:"/",onClick:this.handleLogOut,className:"button is-light"},r.a.createElement(w.a,{to:"/"},"Log out")))))))}}]),t}(n.Component);function y(){return r.a.createElement("section",{className:"hero is-primary"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("center",null,r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:"singers.jpg",alt:"singers"})))))}function N(){return r.a.createElement(n.Fragment,null,r.a.createElement(y,null),r.a.createElement("div",{className:"box cta"},r.a.createElement("p",{className:"has-text-centered"},"Welcome to our Spotify Application for Assignment 2, Cloud computing!")))}var k=a(22),O=a(10),j=a.n(O),C=a(25),S=a(28),I=a(11),A=a(12),P=a(14),_=a(13),L=a(15);var x=function(e){return e.formerrors&&(e.formerrors.blankfield||e.formerrors.passwordmatch)?r.a.createElement("div",{className:"error container help is-danger"},r.a.createElement("div",{className:"row justify-content-center"},e.formerrors.passwordmatch?"Password value does not match confirm password value":""),r.a.createElement("div",{className:"row justify-content-center help is-danger"},e.formerrors.blankfield?"All fields are required":"")):e.apierrors?r.a.createElement("div",{className:"error container help is-danger"},r.a.createElement("div",{className:"row justify-content-center"},e.apierrors)):e.formerrors&&e.formerrors.cognito?r.a.createElement("div",{className:"error container help is-danger"},r.a.createElement("div",{className:"row justify-content-center"},e.formerrors.cognito.message)):r.a.createElement("div",null)};var B=function(e,t){for(var a=document.getElementsByClassName("is-danger"),n=0;n<a.length;n++)a[n].classList.contains("error")||a[n].classList.remove("is-danger");return t.hasOwnProperty("username")&&""===t.username?(document.getElementById("username").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("firstname")&&""===t.firstname?(document.getElementById("firstname").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("lastname")&&""===t.lastname?(document.getElementById("lastname").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("email")&&""===t.email?(document.getElementById("email").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("verificationcode")&&""===t.verificationcode?(document.getElementById("verificationcode").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("password")&&""===t.password?(document.getElementById("password").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("oldpassword")&&""===t.oldpassword?(document.getElementById("oldpassword").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("newpassword")&&""===t.newpassword?(document.getElementById("newpassword").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("confirmpassword")&&""===t.confirmpassword?(document.getElementById("confirmpassword").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("password")&&t.hasOwnProperty("confirmpassword")&&t.password!==t.confirmpassword?(document.getElementById("password").classList.add("is-danger"),document.getElementById("confirmpassword").classList.add("is-danger"),{passwordmatch:!0}):t.hasOwnProperty("newpassword")&&t.hasOwnProperty("confirmpassword")&&t.newpassword!==t.confirmpassword?(document.getElementById("newpassword").classList.add("is-danger"),document.getElementById("confirmpassword").classList.add("is-danger"),{passwordmatch:!0}):void 0},M=a(137),T=function(e){console.log(e)},U=function(e){function t(){var e,a;Object(I.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(P.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",errors:{cognito:null,blankfield:!1}},a.clearErrorState=function(){a.setState({errors:{cognito:null,blankfield:!1}})},a.handleSubmit=function(){var e=Object(S.a)(j.a.mark(function e(t){var n,r,s;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.clearErrorState(),(n=B(t,a.state))&&a.setState({errors:Object(C.a)({},a.state.errors,n)}),e.prev=4,e.next=7,v.a.signIn(a.state.username,a.state.password);case 7:r=e.sent,console.log(r),a.props.auth.setAuthStatus(!0),a.props.auth.setUser(r),a.props.history.push("/content"),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(4),s=null,s=e.t0.message?e.t0:{message:e.t0},a.setState({errors:Object(C.a)({},a.state.errors,{cognito:s})});case 19:case"end":return e.stop()}},e,this,[[4,14]])}));return function(t){return e.apply(this,arguments)}}(),a.onInputChange=function(e){a.setState(Object(k.a)({},e.target.id,e.target.value)),document.getElementById(e.target.id).classList.remove("is-danger")},a}return Object(L.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section auth"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Log in"),r.a.createElement(x,{formerrors:this.state.errors}),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("input",{className:"input",type:"text",id:"username","aria-describedby":"usernameHelp",placeholder:"Enter username or email",value:this.state.username,onChange:this.onInputChange}))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",id:"password",placeholder:"Password",value:this.state.password,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement(M.GoogleLogin,{clientId:"769650212569-id2da33ifsdnf7ahuv11gvml7q4cnl23.apps.googleusercontent.com",render:function(e){return r.a.createElement("button",{onClick:e.onClick,disabled:e.disabled}," Google Login ")},buttonText:"Login",onSuccess:T,onFailure:T,cookiePolicy:"single_host_origin"}),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("a",{href:"/forgotpassword"},"Forgot password?"))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button is-success"},"Login"))))))}}]),t}(n.Component),H={position:"absolute",width:"100%",height:"100%"},D=function(e){function t(e){var a;Object(I.a)(this,t);var n=(a=Object(P.a)(this,Object(_.a)(t).call(this,e))).props.initialCenter,r=n.lat,s=n.lng;return a.state={currentLocation:{lat:r,lng:s}},a}return Object(L.a)(t,e),Object(A.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.google!==this.props.google&&this.loadMap(),t.currentLocation!==this.state.currentLocation&&this.recenterMap()}},{key:"recenterMap",value:function(){var e=this.map,t=this.state.currentLocation,a=this.props.google.maps;if(e){var n=new a.LatLng(t.lat,t.lng);e.panTo(n)}}},{key:"componentDidMount",value:function(){var e=this;this.props.centerAroundCurrentLocation&&navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(t){var a=t.coords;e.setState({currentLocation:{lat:a.latitude,lng:a.longitude}})}),this.loadMap()}},{key:"loadMap",value:function(){if(this.props&&this.props.google){var e=this.props.google.maps,t=this.refs.map,a=o.a.findDOMNode(t),n=this.props.zoom,r=this.state.currentLocation,s=r.lat,c=r.lng,l=new e.LatLng(s,c),i=Object.assign({},{center:l,zoom:n});this.map=new e.Map(a,i)}}},{key:"renderChildren",value:function(){var e=this,t=this.props.children;if(t)return r.a.Children.map(t,function(t){if(t)return r.a.cloneElement(t,{map:e.map,google:e.props.google,mapCenter:e.state.currentLocation})})}},{key:"render",value:function(){var e=Object.assign({},H);return r.a.createElement("div",null,r.a.createElement("div",{style:e,ref:"map"},"Map is loading... Please allow to use your current location"),this.renderChildren())}}]),t}(r.a.Component),W=D;D.defaultProps={zoom:14,initialCenter:{lat:-37.8047,lng:144.958},centerAroundCurrentLocation:!1,visible:!0};var R=a(73),G=function(e){function t(){var e,a;Object(I.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(P.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},a.onMarkerClick=function(e,t,n){return a.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})},a.onClose=function(e){a.state.showingInfoWindow&&a.setState({showingInfoWindow:!1,activeMarker:null})},a}return Object(L.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return r.a.createElement(W,{centerAroundCurrentLocation:!0,google:this.props.google},r.a.createElement(R.Marker,{onClick:this.onMarkerClick,name:"Your current location"}),r.a.createElement(R.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose},r.a.createElement("div",null,r.a.createElement("h4",null,this.state.selectedPlace.name))))}}]),t}(n.Component),z=Object(R.GoogleApiWrapper)({apiKey:"AIzaSyDljNBPx_w8A2hvpIZNM7bkujWt4HrH76I"})(G),q=a(148),Y=a(143),F=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e={name:"",followers:{total:""},images:[{url:""}],genres:[]};return e=null!==this.props.artist?this.props.artist:e,r.a.createElement("div",null,r.a.createElement("img",{alt:"Profile",className:"profile-img",src:e.images[0].url}),r.a.createElement("div",{className:"profile-info"},r.a.createElement("div",{className:"profile-name"},e.name),r.a.createElement("div",{className:"profile-followers"},e.followers.total," followers"),r.a.createElement("div",{className:"profile-genres"},e.genres.map(function(t,a){return t=t!==e.genres[e.genres.length-1]?" ".concat(t,","):" & ".concat(t),r.a.createElement("span",{key:a},t)}))))}}]),t}(n.Component),J=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={playingUrl:"",audio:null,playing:!1},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"playAudio",value:function(e){var t=new Audio(e);this.state.playing?this.state.playingUrl===e?(this.state.audio.pause(),this.setState({playing:!1})):(this.state.audio.pause(),t.play(),this.setState({playing:!0,playingUrl:e,audio:t})):(t.play(),this.setState({playing:!0,playingUrl:e,audio:t}))}},{key:"render",value:function(){var e=this,t=this.props.tracks;return r.a.createElement("div",{className:"tracks-display"},t.map(function(t,a){console.log("track",t);var n=t.album.images[0].url;return r.a.createElement("div",{key:a,className:"track",onClick:function(){return e.playAudio(t.preview_url)}},r.a.createElement("img",{src:n,className:"track-img",alt:"track"}),r.a.createElement("div",{className:"track-play"},r.a.createElement("div",{className:"track-play-inner"},e.state.playingUrl===t.preview_url?r.a.createElement("span",null,"\u25fc"):r.a.createElement("span",null,"\u25ba"))),r.a.createElement("p",{className:"track-text"},t.name))}))}}]),t}(n.Component),K=a(141),V=a(142),Z=a(138),$="https://xugxuuf867.execute-api.us-east-1.amazonaws.com/test/new-resource",Q=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={query:"",artist:null,accessToken:void 0,tracks:[],artist_data:null},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"getToken",value:function(){var e=this,t=fetch("https://cors-anywhere.herokuapp.com/"+$).then(function(e){return e.text()}).then(function(t){console.log(t);var a=JSON.parse(t),n=a.body,r=(n=JSON.parse(n)).done.json.access_token;console.log(a),console.log(r),e.setState({accessToken:r}),console.log(e.state.accessToken)}).catch(function(){return console.log("Can\u2019t access "+$+" response. Blocked by browser?")});console.log("GATEWAY_URL",t)}},{key:"search",value:function(){var e=this;console.log("this.state",this.state);var t="".concat("https://api.spotify.com/v1/search?","q=").concat(this.state.query,"&type=artist&limit=1");console.log("FETCH_URL",t);var a={method:"GET",headers:{Authorization:"Bearer "+this.state.accessToken},mode:"cors",cache:"default"};fetch(t,a).then(function(e){return e.json()}).then(function(a){if(a.hasOwnProperty("error"))console.log("Invalid token"),e.getToken();else{var n=a.artists.items[0];e.setState({artist:n}),t="".concat("https://api.spotify.com/v1/artists/").concat(n.id,"/top-tracks?country=AU&"),console.log(t),fetch(t,{method:"GET",headers:{Authorization:"Bearer "+e.state.accessToken},mode:"cors"}).then(function(e){return e.json()}).then(function(t){if(t.hasOwnProperty("error"))console.log({json:t}),e.getToken();else{var a=t.tracks;e.setState({tracks:a}),console.log("artist's top tracks:",t)}}),e.relatedArtists(n.id)}})}},{key:"relatedArtists",value:function(e){var t=this;console.log("this.state",this.state);var a="".concat("https://api.spotify.com/v1/artists/").concat(e,"/related-artists");console.log(a);var n={method:"GET",headers:{Authorization:"Bearer "+this.state.accessToken},mode:"cors",cache:"default"};fetch(a,n).then(function(e){return e.json()}).then(function(e){if(e.hasOwnProperty("error"))console.log("Invalid token"),t.getToken();else{var a=e.artists,n=[],r=[];n.push({id:t.state.query});for(var s=0;s<a.length;s++)n.push({id:a[s].name}),r.push({source:n[0].id,target:a[s].name});console.log(n),console.log(r);var o={nodes:n,links:r};t.setState({artist_data:o}),console.log(t.state.artist_data)}})}},{key:"componentDidMount",value:function(){try{this.getToken()}catch(e){console.log(e)}}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"section auth"},r.a.createElement("div",{className:"container"},r.a.createElement(q.a,{controlid:"formGroupEmail",onSubmit:function(e){e.preventDefault()}},r.a.createElement(K.a,null,r.a.createElement(Y.a,null,r.a.createElement(V.a,{type:"text",placeholder:"search for artists",value:this.state.query,onChange:function(t){e.setState({query:t.target.value})},onKeyPress:function(t){"Enter"===t.key?e.search():console.log("Press enter")},inputRef:function(t){e.input=t}})))),null!==this.state.artist?r.a.createElement("div",{className:"artist-output"},r.a.createElement(F,{artist:this.state.artist}),r.a.createElement("div",null,r.a.createElement(J,{tracks:this.state.tracks}))):r.a.createElement("div",null),null!==this.state.artist_data?r.a.createElement("div",{style:{height:.8*window.innerHeight,width:.5*window.innerHeight}},r.a.createElement("h1",null,"Recommended Artists"),r.a.createElement(Z.Graph,{id:"graph-id",data:this.state.artist_data,config:{nodeHighlightBehavior:!0,node:{color:"lightgreen",size:500,highlightStrokeColor:"blue"},link:{highlightColor:"lightblue"}},onClickLink:function(e,t){window.alert("Clicked link between ".concat(e," and ").concat(t))},onMouseOverNode:function(e){window.alert("Clicked node ".concat(e," "))}})):r.a.createElement("div",null)))}}]),t}(n.Component),X=a(61),ee=a(144),te=["user-top-read","user-read-currently-playing","user-read-playback-state"],ae=window.location.hash.substring(1).split("&").reduce(function(e,t){if(t){var a=t.split("=");e[a[0]]=decodeURIComponent(a[1])}return e},{});window.location.hash="";var ne=ae,re=function(e){var t={backgroundImage:"url(".concat(e.item.album.images[0].url,")")},a={width:100*e.progress_ms/e.item.duration_ms+"%"};return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"main-wrapper"},r.a.createElement("div",{className:"now-playing__img"},r.a.createElement("img",{src:e.item.album.images[0].url})),r.a.createElement("div",{className:"now-playing__side"},r.a.createElement("div",{className:"now-playing__name"},e.item.name),r.a.createElement("div",{className:"now-playing__artist"},e.item.artists[0].name),r.a.createElement("div",{className:"now-playing__status"},e.is_playing?"Playing":"Paused"),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress__bar",style:a}))),r.a.createElement("div",{className:"background",style:t})," "))},se=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).state={token:null,item:{album:{images:[{url:""}]},name:"",artists:[{name:""}],duration_ms:0},is_playing:"Paused",progress_ms:0},e.getCurrentlyPlaying=e.getCurrentlyPlaying.bind(Object(X.a)(Object(X.a)(e))),e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=ne.access_token;e&&(this.setState({token:e}),this.getCurrentlyPlaying(e))}},{key:"getCurrentlyPlaying",value:function(e){var t=this;ee.ajax({url:"https://api.spotify.com/v1/me/player",type:"GET",beforeSend:function(t){t.setRequestHeader("Authorization","Bearer "+e)},success:function(e){t.setState({item:e.item,is_playing:e.is_playing,progress_ms:e.progress_ms})}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Content"},r.a.createElement("header",{className:"App-header"},!this.state.token&&r.a.createElement("a",{className:"btn btn--loginApp-link",href:"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("e2fe1e358ca0443692c28620512bade8","&redirect_uri=").concat("https://spotifyccapp.com/content","&scope=").concat(te.join("%20"),"&response_type=token&show_dialog=true")},"Which song are you currently listening to?"),this.state.token&&r.a.createElement(re,{item:this.state.item,is_playing:this.state.is_playing,progress_ms:this.progress_ms})))}}]),t}(n.Component),oe=function(e){function t(){var e,a;Object(I.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(P.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",email:"",password:"",confirmpassword:"",errors:{cognito:null,blankfield:!1,passwordmatch:!1}},a.clearErrorState=function(){a.setState({errors:{cognito:null,blankfield:!1,passwordmatch:!1}})},a.handleSubmit=function(){var e=Object(S.a)(j.a.mark(function e(t){var n,r,s,o,c,l,i;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.clearErrorState(),(n=B(t,a.state))&&a.setState({errors:Object(C.a)({},a.state.errors,n)}),r=a.state,s=r.username,o=r.email,c=r.password,e.prev=5,e.next=8,v.a.signUp({username:s,password:c,attributes:{email:o}});case 8:l=e.sent,console.log(l),a.props.history.push("/welcome"),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(5),i=null,i=e.t0.message?e.t0:{message:e.t0},a.setState({errors:Object(C.a)({},a.state.errors,{cognito:i})});case 18:case"end":return e.stop()}},e,this,[[5,13]])}));return function(t){return e.apply(this,arguments)}}(),a.onInputChange=function(e){a.setState(Object(k.a)({},e.target.id,e.target.value)),document.getElementById(e.target.id).classList.remove("is-danger")},a}return Object(L.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section auth"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Register"),r.a.createElement(x,{formerrors:this.state.errors}),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("input",{className:"input",type:"text",id:"username","aria-describedby":"userNameHelp",placeholder:"Enter username",value:this.state.username,onChange:this.onInputChange}))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left has-icons-right"},r.a.createElement("input",{className:"input",type:"email",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email",value:this.state.email,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-envelope"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",id:"password",placeholder:"Password",value:this.state.password,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",id:"confirmpassword",placeholder:"Confirm password",value:this.state.confirmpassword,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button is-success"},"Register"))))))}}]),t}(n.Component),ce=function(e){function t(){var e,a;Object(I.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(P.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",errors:{cognito:null,blankfield:!1}},a.clearErrorState=function(){a.setState({errors:{cognito:null,blankfield:!1}})},a.forgotPasswordHandler=function(){var e=Object(S.a)(j.a.mark(function e(t){var n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.clearErrorState(),(n=B(t,a.state))&&a.setState({errors:Object(C.a)({},a.state.errors,n)}),e.prev=4,e.next=7,v.a.forgotPassword(a.state.email);case 7:a.props.history.push("/forgotpasswordverification"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[4,10]])}));return function(t){return e.apply(this,arguments)}}(),a.onInputChange=function(e){a.setState(Object(k.a)({},e.target.id,e.target.value)),document.getElementById(e.target.id).classList.remove("is-danger")},a}return Object(L.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section auth"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Forgot your password?"),r.a.createElement("p",null,"Please enter the email address and we will email you a code to change your password!"),r.a.createElement(x,{formerrors:this.state.errors}),r.a.createElement("form",{onSubmit:this.forgotPasswordHandler},r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left has-icons-right"},r.a.createElement("input",{type:"email",className:"input",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email",value:this.state.email,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-envelope"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button is-success"},"Submit"))))))}}]),t}(n.Component),le=function(e){function t(){var e,a;Object(I.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(P.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).state={verificationcode:"",email:"",newpassword:"",errors:{cognito:null,blankfield:!1}},a.clearErrorState=function(){a.setState({errors:{cognito:null,blankfield:!1}})},a.passwordVerificationHandler=function(){var e=Object(S.a)(j.a.mark(function e(t){var n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.clearErrorState(),(n=B(t,a.state))&&a.setState({errors:Object(C.a)({},a.state.errors,n)}),e.prev=4,e.next=7,v.a.forgotPasswordSubmit(a.state.email,a.state.verificationcode,a.state.newpassword);case 7:a.props.history.push("/changepasswordconfirmation"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[4,10]])}));return function(t){return e.apply(this,arguments)}}(),a.onInputChange=function(e){a.setState(Object(k.a)({},e.target.id,e.target.value)),document.getElementById(e.target.id).classList.remove("is-danger")},a}return Object(L.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section auth"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Set new password"),r.a.createElement("p",null,"Please enter the code, your email address and a new password below"),r.a.createElement(x,{formerrors:this.state.errors}),r.a.createElement("form",{onSubmit:this.passwordVerificationHandler},r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("input",{type:"text",className:"input",id:"verificationcode","aria-describedby":"verificationCodeHelp",placeholder:"Enter verification code",value:this.state.verificationcode,onChange:this.onInputChange}))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"email",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email",value:this.state.email,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-envelope"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{type:"password",className:"input",id:"newpassword",placeholder:"New password",value:this.state.newpassword,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button is-success"},"Change password"))))))}}]),t}(n.Component),ie=function(e){function t(){var e,a;Object(I.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(P.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).state={oldpassword:"",newpassword:"",confirmpassword:"",errors:{cognito:null,blankfield:!1,passwordmatch:!1}},a.clearErrorState=function(){a.setState({errors:{cognito:null,blankfield:!1,passwordmatch:!1}})},a.handleSubmit=function(){var e=Object(S.a)(j.a.mark(function e(t){var n,r;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.clearErrorState(),(n=B(t,a.state))&&a.setState({errors:Object(C.a)({},a.state.errors,n)}),e.prev=4,e.next=7,v.a.currentAuthenticatedUser();case 7:return r=e.sent,console.log(r),e.next=11,v.a.changePassword(r,a.state.oldpassword,a.state.newpassword);case 11:a.props.history.push("/changepasswordconfirmation"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.log(e.t0);case 17:case"end":return e.stop()}},e,this,[[4,14]])}));return function(t){return e.apply(this,arguments)}}(),a.onInputChange=function(e){a.setState(Object(k.a)({},e.target.id,e.target.value)),document.getElementById(e.target.id).classList.remove("is-danger")},a}return Object(L.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section auth"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Change Password"),r.a.createElement(x,{formerrors:this.state.errors}),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",id:"oldpassword",placeholder:"Old password",value:this.state.oldpassword,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",id:"newpassword",placeholder:"New password",value:this.state.newpassword,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",id:"confirmpassword",placeholder:"Confirm password",value:this.state.confirmpassword,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button is-success"},"Change password"))))))}}]),t}(n.Component),ue=function(e){function t(){return Object(I.a)(this,t),Object(P.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section auth"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Change Password"),r.a.createElement("p",null,"Your password has been updated!")))}}]),t}(n.Component);function me(){return r.a.createElement("section",{className:"section auth"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Welcome!"),r.a.createElement("p",null,"You have successfully register a new account"),r.a.createElement("p",null,"We have sent you an email to confirm your account"),r.a.createElement("p",null,"Please click on the link!")))}var de=a(145),pe=a(146);de.a.add(pe.a);var he=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isAuthenticated:!1,isAuthenticating:!0,user:null},a.setAuthStatus=function(e){a.setState({isAuthenticated:e})},a.setUser=function(e){a.setState({user:e})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.currentSession();case 3:return t=e.sent,this.setAuthStatus(!0),console.log(t),e.next=8,v.a.currentAuthenticatedUser();case 8:a=e.sent,this.setUser(a),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:this.setState({isAuthenticating:!1});case 16:case"end":return e.stop()}},e,this,[[0,12]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e={isAuthenticated:this.state.isAuthenticated,user:this.state.user,setAuthStatus:this.setAuthStatus,setUser:this.setUser};return!this.state.isAuthenticating&&r.a.createElement("div",{className:"App"},r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement(b,{auth:e}),r.a.createElement(g.a,null,r.a.createElement(E.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(N,Object.assign({},t,{auth:e}))}}),r.a.createElement(E.a,{exact:!0,path:"/login",render:function(t){return r.a.createElement(U,Object.assign({},t,{auth:e}))}}),r.a.createElement(E.a,{exact:!0,path:"/mapcontainer",render:function(t){return r.a.createElement(z,Object.assign({},t,{auth:e}))}}),r.a.createElement(E.a,{exact:!0,path:"/map",render:function(t){return r.a.createElement(W,Object.assign({},t,{auth:e}))}}),r.a.createElement(E.a,{exact:!0,path:"/content",render:function(t){return r.a.createElement(se,Object.assign({},t,{auth:e}))}}),r.a.createElement(E.a,{exact:!0,path:"/artists",render:function(t){return r.a.createElement(Q,Object.assign({},t,{auth:e}))}}),r.a.createElement(E.a,{exact:!0,path:"/register",render:function(t){return r.a.createElement(oe,Object.assign({},t,{auth:e}))}}),r.a.createElement(E.a,{exact:!0,path:"/forgotpassword",render:function(t){return r.a.createElement(ce,Object.assign({},t,{auth:e}))}}),r.a.createElement(E.a,{exact:!0,path:"/forgotpasswordverification",render:function(t){return r.a.createElement(le,Object.assign({},t,{auth:e}))}}),r.a.createElement(E.a,{exact:!0,path:"/changepassword",render:function(t){return r.a.createElement(ie,Object.assign({},t,{auth:e}))}}),r.a.createElement(E.a,{exact:!0,path:"/changepasswordconfirmation",render:function(t){return r.a.createElement(ue,Object.assign({},t,{auth:e}))}}),r.a.createElement(E.a,{exact:!0,path:"/welcome",render:function(t){return r.a.createElement(me,Object.assign({},t,{auth:e}))}})))))}}]),t}(n.Component),fe=a(32),ge=a(74);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));fe.default.configure({Auth:{mandatorySignId:!0,region:ge.cognito.REGION,userPoolId:ge.cognito.USER_POOL_ID,userPoolWebClientId:ge.cognito.APP_CLIENT_ID}}),o.a.render(r.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},74:function(e){e.exports={cognito:{REGION:"us-east-1",USER_POOL_ID:"us-east-1_IdpZy1YqH",APP_CLIENT_ID:"1l4nos97v2nnhjfgj3og0e8cvh"}}},79:function(e,t,a){}},[[158,1,2]]]);
//# sourceMappingURL=main.f61ac2a3.chunk.js.map