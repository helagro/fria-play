(this["webpackJsonpfria-play"]=this["webpackJsonpfria-play"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={container:"PlayListComputerView_container__1HgG8",mainContent:"PlayListComputerView_mainContent__2E6Jo",infoPart:"PlayListComputerView_infoPart__3Cdxh",playlistCover:"PlayListComputerView_playlistCover__2nZp1",playlistInfo:"PlayListComputerView_playlistInfo__3yiQy",playlistTitle:"PlayListComputerView_playlistTitle__3TS9J",theCreatorsName:"PlayListComputerView_theCreatorsName__21C2P",songsLength:"PlayListComputerView_songsLength__G_5w0",more:"PlayListComputerView_more__2eHtk",songsPart:"PlayListComputerView_songsPart__2-Zsg",songList:"PlayListComputerView_songList___ykbl"}},,,,,function(e,t,n){e.exports={container:"SongInfo_container__1GBoa",photo:"SongInfo_photo__1XVpD",songText:"SongInfo_songText__1bOoE",textContainer:"SongInfo_textContainer__i19xk",title:"SongInfo_title__1AQnp",info:"SongInfo_info__1kc_U",more:"SongInfo_more__2u3wK"}},function(e,t,n){e.exports={container:"PlayAndSwitchSong_container__OBntd",btnContainer:"PlayAndSwitchSong_btnContainer__1ZXBH",playBtn:"PlayAndSwitchSong_playBtn__1FRx0"}},,,,,,function(e,t,n){e.exports={appBarBar:"MobileAppBar_appBarBar__WBfUs",iconTwo:"MobileAppBar_iconTwo__1RBNl",dropDown:"MobileAppBar_dropDown__3K-9u"}},function(e,t,n){e.exports={container:"MyNavBarPc_container__a2ddN",menuItem:"MyNavBarPc_menuItem__32dDt"}},function(e,t,n){},,,function(e,t,n){e.exports={container:"FullPlayControls_container__1DJ-z",SongInfo:"FullPlayControls_SongInfo__3K5Mf",PlayAndSwitchSong:"FullPlayControls_PlayAndSwitchSong__1pu2u"}},function(e,t,n){e.exports={expandableMobileAppBar:"ExpandableMobileAppBar_expandableMobileAppBar__1izWF",expandingArea:"ExpandableMobileAppBar_expandingArea__2VqHV",fakeShadow:"ExpandableMobileAppBar_fakeShadow__1cyfJ"}},,,,function(e,t,n){e.exports={containersContainer:"MyNavBar_containersContainer__2WkTe",container:"MyNavBar_container__3IIzy"}},function(e,t,n){e.exports={btnContainer:"PlaylistMobileView_btnContainer__31R-C",songList:"PlaylistMobileView_songList__1_rvS"}},function(e,t,n){e.exports={container:"PlayControlsPc_container__R4uUk",advancedControls:"PlayControlsPc_advancedControls__1NAYK"}},,,,,,function(e,t,n){e.exports={CoverPhotoImage:"CoverPhoto_CoverPhotoImage__FGIcU"}},function(e,t,n){e.exports={container:"SongList_container__UDJw1"}},function(e,t,n){e.exports={songList:"PlayerMobile_songList__2b4ez"}},function(e,t,n){e.exports={container:"PlaylistCover_container__3VQ4Z"}},function(e,t,n){e.exports={roundedButton:"RoundedTextAndImageButton_roundedButton__3A5fH"}},function(e,t,n){e.exports={container:"SongGrid_container__LN5Z5"}},,,,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t){},,,,,function(e,t,n){"use strict";n.r(t);var a,s=n(1),i=n.n(s),c=n(37),o=n.n(c),r=(n(50),n(10)),l=n(11),A=n(17),d=n(16),u=(n(51),n(44)),g=n(2),j=n(20),m=n.n(j),h=n(19),x=n(12);function b(){return null==a&&(a=new p),a}var p=function(){function e(){Object(r.a)(this,e),this.tiedListenerObjects=[],this.loadClient()}return Object(l.a)(e,[{key:"addListener",value:function(e,t){this.tiedListenerObjects.push({listener:e,ctx:t}),x.a.auth2&&this.callListeners("already setup")}},{key:"callListeners",value:function(e,t){var n,a=Object(h.a)(this.tiedListenerObjects);try{for(a.s();!(n=a.n()).done;){var s=n.value;s.listener({ctx:s.ctx,event:e,payload:t})}}catch(i){a.e(i)}finally{a.f()}}},{key:"signinListener",value:function(e){a.callListeners("sign in changed",{isSignedIn:e})}},{key:"loadClient",value:function(){x.a.load("client:auth2",this.initClient)}},{key:"initClient",value:function(){x.a.client.init({apiKey:"AIzaSyDtRE4dP3eitBDkT4S3RkO5Pp_ZA8CHFuo",clientId:"590519824924-eikjcarl4oun621q3c156krsofr62gbo.apps.googleusercontent.com",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],scope:"https://www.googleapis.com/auth/drive"}).then((function(){x.a.auth2.getAuthInstance().isSignedIn.listen(a.signinListener),a.callListeners("did init")}),(function(e){console.log(JSON.stringify(e,null,2))}))}},{key:"changeLoginStatus",value:function(){this.getIsLogin()?x.a.auth2.getAuthInstance().signOut():x.a.auth2.getAuthInstance().signIn()}},{key:"getIsLogin",value:function(){return x.a.auth2.getAuthInstance().isSignedIn.get()}},{key:"listMediaFiles",value:function(e,t){x.a.client.drive.files.list({fields:"nextPageToken, files(id, name)"}).then((function(n){var a=n.result.files;a&&a.length>0&&(a=a.filter((function(e){return e.name.endsWith(".mp3")})),e(a,t))}))}},{key:"componentDetached",value:function(e){a.removeComponentsListeners(e)}},{key:"removeComponentsListeners",value:function(e){a.tiedListenerObjects=a.tiedListenerObjects.filter((function(t){return t.ctx.constructor.name!==e.constructor.name}))}}]),e}(),f=n(0),O=function(e){Object(A.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={displayDropdown:!1,isLoggedIn:!1},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props;return Object(f.jsxs)("div",{className:m.a.appBarBar,style:t.style,children:[Object(f.jsx)("img",{src:t.iconOne,className:m.a.iconOne}),Object(f.jsx)("div",{}),Object(f.jsx)("img",{src:t.iconTwo,className:m.a.iconTwo,onClick:function(){e.setState({displayDropdown:!e.state.displayDropdown})}}),Object(f.jsx)("ul",{className:m.a.dropDown,style:{display:this.state.displayDropdown?"block":"none"},children:Object(f.jsx)("button",{onClick:function(){return b().changeLoginStatus()},children:this.state.isLoggedIn?"Log out":"Log in"})})]})}},{key:"componentDidMount",value:function(){this.driveInstance=b(),this.driveInstance.addListener(this.driveListener,this)}},{key:"componentWillUnmount",value:function(){this.driveInstance.componentDetached(this)}},{key:"driveListener",value:function(e){switch(e.event){case"already setup":case"did init":case"sign in changed":return e.ctx.signInCouldHaveChanged(e)}}},{key:"signInCouldHaveChanged",value:function(e){var t=e.ctx,n=e.payload?e.payload.isSignedIn:t.driveInstance.getIsLogin();t.setState({isLoggedIn:n})}}]),n}(i.a.Component),v=n.p+"static/media/ic-arrows-left.00be17a0.svg",y=n.p+"static/media/ic-actions-more-2.49a60517.svg",I=n(3),E=n.n(I),w=n(9),C="data:image/jpeg;base64,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",N=n(38),B=n.n(N);var D=function(e){return Object(f.jsx)("img",{src:e.image,className:[B.a.CoverPhotoImage,e.className].join(" ")})},M=n(13),S=n.n(M),Q=n.p+"static/media/ic-actions-more-2-dark.841170ef.svg";var L,k=function(e){return Object(f.jsxs)("div",{className:[S.a.container,e.className].join(" "),children:[Object(f.jsx)(D,{image:e.image,className:S.a.photo}),Object(f.jsxs)("div",{className:S.a.songText,children:[Object(f.jsx)("div",{className:S.a.textContainer,children:Object(f.jsx)("p",{className:S.a.title,children:e.title})}),Object(f.jsx)("div",{className:S.a.textContainer,children:Object(f.jsx)("p",{className:S.a.info,children:e.artist})})]}),Object(f.jsx)("img",{src:Q,alt:"more",className:S.a.more})]})},P=n(39),R=n.n(P);var V=function(){function e(){Object(r.a)(this,e),this.songs=[],this.albums=[],this.albumCoverSig=0,this.possibleArtists=["Bill Gates","Steve Jobs","Elon Musk","Jeff Bezos"],this.possibleAlbumNames=["Album 1","Album 2","Album 3","Album 4"]}return Object(l.a)(e,[{key:"hasSongs",value:function(){return 0!=this.songs.length}},{key:"addSongsFromFiles",value:function(){var e=Object(w.a)(E.a.mark((function e(t,n,a){var s,i,c,o,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=0,i=function(){--s<1&&a(n)},c=Object(h.a)(t);try{for(c.s();!(o=c.n()).done;)r=o.value,s++,this.addSong(r.name,r.id,i),console.log("sent")}catch(l){c.e(l)}finally{c.f()}case 4:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"addSong",value:function(){var e=Object(w.a)(E.a.mark((function e(t,n,a){var s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=this.getSongInfo(t),e.t0=this.songs,e.t1=t,e.t2=s.artist,e.t3=s.albumName,e.next=7,s.image;case 7:e.t4=e.sent,e.t5=n,e.t6={title:e.t1,artist:e.t2,album:e.t3,image:e.t4,key:e.t5},e.t0.push.call(e.t0,e.t6),a();case 12:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"removeAll",value:function(){this.songs=[],this.albums=[],this.albumCoverSig=0}},{key:"getSongInfo",value:function(e){var t=this.possibleArtists[Math.floor(Math.random()*this.possibleArtists.length)],n=this.possibleAlbumNames[Math.floor(Math.random()*this.possibleAlbumNames.length)];return{artist:t,albumName:n,image:this.getAlbumCover(t,n)}}},{key:"getAlbumCover",value:function(e,t){var n,a=Object(h.a)(this.albums);try{for(a.s();!(n=a.n()).done;){var s=n.value;if(s.artist===e&&s.albumName===t)return s.albumCover}}catch(c){a.e(c)}finally{a.f()}var i=this.generateAlbumCover();return this.albums.push({artist:e,albumName:t,albumCover:i}),i}},{key:"generateAlbumCover",value:function(){var e=this;return new Promise((function(t){e.albumCoverSig++;var n="https://source.unsplash.com/random/100x100?sig="+e.albumCoverSig,a=new XMLHttpRequest;a.onload=function(){if("image/jpeg"===this.getResponseHeader("content-type")){for(var e=a.responseText,n="",s=0;s<e.length;s++)n+=String.fromCharCode(255&e.charCodeAt(s));var i="data:image/jpeg;base64,"+btoa(n);t(i)}else t("invalid contet-type")},a.overrideMimeType("text/plain; charset=x-user-defined"),a.open("GET",n,!0),a.send();setTimeout((function(){return t("timed out")}),5e3)}))}}]),e}(),q=function(e){Object(A.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={songs:[]},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props;return console.log("rerendered",this.state.songs.length," ",this.state.songs),Object(f.jsx)("div",{className:[R.a.container,t.className].join(" "),style:t.style,children:this.state.songs.length>0?this.state.songs.map((function(e){var t=e.image,n=e.title,a=e.artist,s=e.key;return Object(f.jsx)(k,{image:t,title:n,artist:a},s)})):Object(f.jsx)("button",{onClick:function(){e.driveInstance.changeLoginStatus()},children:"Log in"})})}},{key:"componentDidMount",value:function(){this.songHandlerInstance=(null==L&&(L=new V),L),this.driveInstance=b(),this.driveInstance.addListener(this.driveListener,this)}},{key:"componentWillUnmount",value:function(){this.driveInstance.componentDetached(this)}},{key:"driveListener",value:function(e){switch(e.event){case"already setup":case"did init":case"sign in changed":return e.ctx.signInCouldHaveChanged(e)}}},{key:"signInCouldHaveChanged",value:function(e){var t=e.ctx;(e.payload?e.payload.isSignedIn:t.driveInstance.getIsLogin())?t.songHandlerInstance.hasSongs()?0===t.state.songs.length&&t.setState({songs:t.songHandlerInstance.songs}):t.driveInstance.listMediaFiles(t.listFileListener,t):(t.setState({songs:[]}),t.songHandlerInstance.removeAll())}},{key:"listFileListener",value:function(){var e=Object(w.a)(E.a.mark((function e(t,n){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.songHandlerInstance.addSongsFromFiles(t,n,n.allSongsAreAddedListener);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"allSongsAreAddedListener",value:function(e){e.setState({songs:e.songHandlerInstance.songs})}}]),n}(i.a.Component),G=n(30),z=n.n(G),Y=n.p+"static/media/house.635e6ddf.svg",H=n.p+"static/media/compass.199ffe0e.svg",Z=n.p+"static/media/image-library.8f3db733.svg";var K=function(){return Object(f.jsx)("div",{className:z.a.containersContainer,children:Object(f.jsxs)("div",{className:z.a.container,children:[Object(f.jsx)("img",{src:Y}),Object(f.jsx)("img",{src:H}),Object(f.jsx)("img",{src:Z})]})})},F=n(40),U=n.n(F),T=n(25),W=n.n(T),J=n(14),X=n.n(J),_=n.p+"static/media/logo23.22d95433.svg",$=n.p+"static/media/next-song.1a570ea4.svg",ee=n.p+"static/media/prev-song.28beeeb8.svg";var te=function(e){return Object(f.jsxs)("div",{className:[X.a.container,e.className].join(" "),style:e.style,children:[Object(f.jsx)("div",{className:X.a.btnContainer,children:Object(f.jsx)("img",{src:ee,alt:"Prev song",className:X.a.prevSong})}),Object(f.jsx)("div",{className:X.a.btnContainer,children:Object(f.jsx)("img",{src:_,alt:"Play button",className:X.a.playBtn})}),Object(f.jsx)("div",{className:X.a.btnContainer,children:Object(f.jsx)("img",{src:$,alt:"Next song",className:X.a.nextSong})})]})},ne=n.p+"static/media/best-of-me.d38f75f9.jpg";var ae=function(){return Object(f.jsxs)("div",{className:W.a.container,children:[Object(f.jsx)(k,{image:ne,title:"Frog",artist:"bucket",className:W.a.SongInfo}),Object(f.jsx)(te,{className:W.a.PlayAndSwitchSong})]})},se=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(O,{iconOne:v,iconTwo:y}),Object(f.jsx)(q,{className:U.a.songList}),Object(f.jsx)(ae,{}),Object(f.jsx)(K,{})]})},ie=n(23),ce=(n(54),n(55),n(26)),oe=n.n(ce),re=n(41),le=n.n(re);var Ae=function(e){var t=e.images;return Object(f.jsxs)("div",{className:[le.a.container,e.className].join(" "),style:e.style,children:[Object(f.jsx)(D,{image:t[0]}),Object(f.jsx)(D,{image:t[1]}),Object(f.jsx)(D,{image:t[2]}),Object(f.jsx)(D,{image:t[3]})]})};var de=function(e){var t=[C,C,C,C],n=Object(s.useState)(176),a=Object(ie.a)(n,2),i=a[0],c=a[1],o=176!==i&&i>3;return Object(s.useEffect)((function(){var e=function(e){var t=176-window.scrollY;c(t)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}})),Object(f.jsxs)("div",{className:oe.a.expandableMobileAppBar,children:[Object(f.jsx)(O,{iconOne:e.iconOne,iconTwo:e.iconTwo,style:{boxShadow:"3 3 5 1"}}),Object(f.jsxs)("div",{className:oe.a.expandingArea,children:[Object(f.jsx)("div",{className:oe.a.fakeShadow,style:{width:"".concat(i,"px"),display:"".concat(o?"initial":"none")}}),Object(f.jsx)(Ae,{images:t,style:{height:"".concat(i,"px"),width:"".concat(i,"px")}})]})]})},ue=n(42),ge=n.n(ue);var je=function(e){return Object(f.jsxs)("div",{className:ge.a.roundedButton,children:[Object(f.jsx)("img",{src:e.image}),Object(f.jsx)("p",{children:e.title})]})},me=n.p+"static/media/shuffle.81a84197.svg",he=n(31),xe=n.n(he);var be=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(de,{iconOne:v,iconTwo:y}),Object(f.jsx)("h1",{children:"Top 4"}),Object(f.jsxs)("div",{className:xe.a.btnContainer,children:[Object(f.jsx)(je,{title:"PLAY",image:_}),Object(f.jsx)(je,{title:"SHUFFLE",image:me})]}),Object(f.jsx)(q,{className:xe.a.songList}),Object(f.jsx)(K,{})]})},pe=n(21),fe=n.n(pe);var Oe=function(e){var t=e.fullWidth?"100%":"min-content",n=e.fullWidth?"0":"0 0 3em 3em";return Object(f.jsxs)("div",{className:fe.a.container,style:{width:t,borderRadius:n},children:[Object(f.jsxs)("div",{className:fe.a.menuItem,children:[Object(f.jsx)("img",{src:Y}),Object(f.jsx)("p",{children:"HOME"})]}),Object(f.jsxs)("div",{className:fe.a.menuItem,children:[Object(f.jsx)("img",{src:H}),Object(f.jsx)("p",{children:"DISCOVER"})]}),Object(f.jsxs)("div",{className:fe.a.menuItem,children:[Object(f.jsx)("img",{src:Z}),Object(f.jsx)("p",{children:"LIBRARY"})]})]})};n(43),n(22);var ve=n(8),ye=n.n(ve),Ie=n(32),Ee=n.n(Ie),we=n.p+"static/media/moveDown.0f9c8d04.svg",Ce=n.p+"static/media/ic-directions-round.fa6ce990.svg",Ne=n.p+"static/media/ic-media-volume.8faff252.svg";var Be=function(){return Object(f.jsxs)("div",{className:Ee.a.container,children:[Object(f.jsx)(k,{image:C,title:"Survival",artist:"eminem"}),Object(f.jsx)(te,{}),Object(f.jsxs)("div",{className:Ee.a.advancedControls,children:[Object(f.jsx)("img",{src:we,alt:"Move down"}),Object(f.jsx)("img",{src:me,alt:"Shuffle"}),Object(f.jsx)("img",{src:Ce,alt:"replay"}),Object(f.jsx)("img",{src:Ne,alt:"volume"})]})]})},De="data:image/jpeg;base64,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";var Me=function(){return Object(f.jsxs)("div",{className:ye.a.container,children:[Object(f.jsx)(Oe,{fullWidth:!0}),Object(f.jsxs)("div",{className:ye.a.mainContent,children:[Object(f.jsxs)("div",{className:ye.a.infoPart,children:[Object(f.jsx)(Ae,{images:[De,De,De,De],className:ye.a.playlistCover}),Object(f.jsxs)("div",{className:ye.a.playlistInfo,children:[Object(f.jsx)("p",{className:ye.a.playlistTitle,children:"Playlist Name"}),Object(f.jsx)("p",{className:ye.a.theCreatorsName,children:"Creator"}),Object(f.jsx)("p",{className:ye.a.songsLength,children:"4 SONGS"}),Object(f.jsx)("img",{src:Q,alt:"more",className:ye.a.more})]})]}),Object(f.jsx)("div",{className:ye.a.songsPart,children:Object(f.jsx)(q,{className:ye.a.songList})})]}),Object(f.jsx)(Be,{})]})};function Se(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var Qe=function(){var e=function(){var e=Object(s.useState)(Se()),t=Object(ie.a)(e,2),n=t[0],a=t[1];return Object(s.useEffect)((function(){function e(){a(Se())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}();e.height;return e.width<1200?be():Me()},Le=function(e){Object(A.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(u.a,{basename:"/fria-play/build",children:[Object(f.jsx)(g.a,{exact:!0,path:"/",component:Qe}),Object(f.jsx)(g.a,{exact:!0,path:"/player",component:se})]})}}]),n}(s.Component),ke=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};o.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(Le,{})}),document.getElementById("root")),ke()}],[[60,1,2]]]);
//# sourceMappingURL=main.604d12bc.chunk.js.map