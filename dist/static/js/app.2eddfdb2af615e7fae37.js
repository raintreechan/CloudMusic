webpackJsonp([0],[,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={currentPlayMusic:function(t,e){clearInterval(t.timerId),t.countSecond=0,t.countMinute=0,t.rangeValue=0,t.currentMusic=e,t.currentMusicMinute=Math.trunc(e.seconds/60),t.currentMusicSecond=e.seconds%60,t.playFunction=function(){t.second++,t.countSecond>59&&(t.countSecond=0,t.countMinute++),t.countMinute==t.currentMusicMinute&&t.countSecond==t.currentMusicSecond&&t.currentIndex++,t.countSecond++,t.countSecond=t.countSecond<10?"0"+t.countSecond:t.countSecond,t.rangeValue=+t.second/e.seconds*100},t.timerId=setInterval(t.playFunction,1e3)}}},,function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(3),a=i(s),c=n(125),o=i(c),r=n(87),u=i(r),l=n(97),d=i(l),f=n(91),p=i(f),v=n(82),m=i(v),_=n(100),h=i(_),g=n(96),M=i(g),C=n(93),b=i(C),y=n(84),x=i(y),I=n(101),A=i(I),L=n(98),w=i(L),k=n(85),E=i(k),R=n(99),F=i(R);a.default.use(o.default),e.default=new o.default({mode:"history",routes:[{path:"/",name:"discoverMusic",redirect:"selfRecommend",component:u.default,children:[{path:"selfRecommend",name:"selfRecommend",component:h.default},{path:"musicList",name:"musicList",component:M.default},{path:"hostStation",name:"hostStation",component:b.default},{path:"billboard",name:"billboard",component:x.default}]},{path:"/myMusic",name:"myMusic",component:d.default},{path:"/friends",name:"friends",redirect:"/status",component:p.default,children:[{path:"/status",name:"status",component:A.default},{path:"/nearby",name:"nearby",component:w.default}]},{path:"/account",name:"account",component:m.default},{path:"/detailMusicList",name:"detailMusicList",component:E.default},{path:"/playPage",name:"playPage",component:F.default}]})},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(3),a=i(s),c=n(127),o=i(c),r=n(53),u=i(r),l=n(52),d=i(l),f=n(51),p=i(f),v=n(10),m=i(v);a.default.use(o.default),e.default=new o.default.Store({state:u.default,mutations:d.default,actions:p.default,getters:m.default})},function(t,e){},function(t,e,n){function i(t){n(60)}var s=n(0)(n(35),n(110),i,"data-v-1c3b0be5",null);t.exports=s.exports},,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"mt-button",methods:{handleClick:function(t){this.$emit("click",t)}},props:{icon:String,disabled:Boolean,nativeType:String,plain:Boolean,type:{type:String,default:"default",validator:function(t){return["default","danger","primary"].indexOf(t)>-1}},size:{type:String,default:"normal",validator:function(t){return["small","normal","large"].indexOf(t)>-1}}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(81),a=i(s),c=n(92),o=i(c),r=n(94),u=i(r);e.default={name:"app",components:{BtmTabBar:a.default,HeaderBar:o.default,loading:u.default},computed:{tabActive:function(){return this.$store.state.tabActive},pageLoading:function(){return this.$store.state.pageLoading}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"BtmTabBar",computed:{tabActive:function(){return this.$store.state.tabActive}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"billboard"}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(89),a=i(s),c=n(2),o=n(80),r=i(o);e.default={components:{MtButton:r.default,dmlHeader:a.default,Popup:c.Popup},computed:{currentMusic:function(){return this.$store.state.currentMusics},musicListItem:function(){return this.$store.state.musicListItem},currentMusicList:function(){return this.$store.state.currentMusicList},filterMusicList:function(){var t=this;return this.currentMusicList.filter(function(e){return e.songname.indexOf(t.searchedMusic)>-1||e.singername.indexOf(t.searchedMusic)>-1})}},data:function(){return{popupVisible:!1,searchedMusic:"",isFavoriteBol:!1,currentItem:{}}},methods:{handleClick:function(t){this.currentItem=t,this.popupVisible=!0},getMusicInfo:function(t,e){this.$store.dispatch("getMusicInfo",{item:t,index:e})},favorite:function(t,e){if("LI"===e.currentTarget.tagName){var n=this;this.isFavoriteBol=!0,setTimeout(function(){n.isFavoriteBol=!1},1e3),this.$store.dispatch("favorite",t)}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"discoverMenu",computed:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(86),s=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={name:"discoverMusic",components:{discoverMenu:s.default}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{musicList:function(){return this.$store.state.playMusicLists},foundedMusicList:function(){var t=this;return this.musicList.filter(function(e){return e.songname.indexOf(t.searchWord)>-1||e.singername.indexOf(t.searchWord)>-1})}},data:function(){return{searchWord:""}},methods:{chooseMusic:function(t){return this.$store.dispatch("chooseMusic",t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{back:function(){return this.$router.go(-1)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={components:{}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(88),a=i(s),c=n(95),o=i(c),r=n(90),u=i(r),l=n(83),d=i(l);e.default={computed:{tabActive:function(){return this.$store.state.tabActive}},components:{dmHeader:a.default,mmHeader:o.default,friHeader:u.default,accoutHeader:d.default}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hostStation"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"musicList"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{favoriteMusic:function(){return this.$store.state.favoriteMusic}},methods:{goToFavoriteList:function(){return this.$store.dispatch("goToFavoriteList")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2);e.default={watch:{songid:{handler:function(t){t&&this.getLyrics(t)},dep:!0}},computed:{songid:function(){return this.$store.state.currentMusic.songid},currentMusic:function(){return this.$store.state.currentMusic},currentMusicMinute:function(){return this.$store.state.currentMusicMinute},currentMusicSecond:function(){return this.$store.state.currentMusicSecond},countMinute:function(){return this.$store.state.countMinute},countSecond:function(){return this.$store.state.countSecond},rangeValue:function(){return this.timeupdateEvent(),this.$store.state.rangeValue}},methods:{getLyrics:function(t){var e=this;this.ly="",this.$http.get("http://route.showapi.com/213-2?showapi_appid=28882&showapi_sign=de117735a0454184a7d5b4253e286842&musicid="+t).then(function(t){var n=t.data,i=n.showapi_res_body;e.ly=function(t){return t=t.replace(/&#58;/g,":"),t=t.replace(/&#46;/g,"."),t=t.replace(/&#32;/g," "),t=t.replace(/&#10;/g,"\n"),t=t.replace(/&#45;/g,"-")}(i.lyric);var s={zh:e.ly};e.lyricList=e.getLyricList(s)})},getLyricList:function(t){var e=/\[(\d{2}:\d{2})\.\d{2,}\](.*)/,n={},i=[],s=t.zh?t.zh.split("\n"):[],a=t.en?t.en.split("\n"):[];s.forEach(function(t){var i=t.match(e);if(i){var s=i[1],a=i[2]||"(music)";n[s]||(n[s]={}),n[s].zh=a}}),a.length?this.isEnSong=!0:this.isEnSong=!1,a.forEach(function(t){var i=t.match(e);if(i){var s=i[1],a=i[2]||"(music)";n[s]||(n[s]={}),n[s].en=a}});for(var c in n){var o=c.split(":"),r=60*parseInt(o[0])+parseInt(o[1]);i.length&&(i[i.length-1].endtime=r),i.push({time:r,zh:n[c].zh,en:n[c].en})}return i},timeupdateEvent:function(){var t=60*this.countMinute+parseInt(this.countSecond),e=this.$store.state.currentMusic.seconds,n=(this.isEnSong,32),i=this.lyricList,s=this.currentIndex,a=this.$refs.lyric;s<i.length-1&&t>=i[s+1].time&&(a.style.top=150-n*(s+1)+"px",this.currentTime=t,this.currentIndex=s+1),this.timeText=this.formatTime(t),this.durationText=this.formatTime(e)},formatTime:function(t){t=Math.floor(t);var e=Math.floor(t/60).toString();e=e.length<2?"0"+e:e;var n=(t-60*parseInt(e)).toString();return n=n.length<2?"0"+n:n,e+":"+n},favorite:function(t,e){if("LI"===e.currentTarget.tagName){var n=this;this.isFavoriteBol=!0,setTimeout(function(){n.isFavoriteBol=!1},1e3),this.$store.dispatch("favorite",t)}},back:function(){clearInterval(this.$store.state.timerId),this.init(),this.$router.go(-1)},playOrStop:function(){var t=document.querySelector("audio");this.rotateBol=!this.rotateBol,t.paused?(t.play(),this.$store.state.timerId=setInterval(this.$store.state.playFunction,1e3)):(t.pause(),clearInterval(this.$store.state.timerId))},preMusic:function(){clearInterval(this.$store.state.timerId),this.init(),this.$store.dispatch("preMusic")},nextMusic:function(){clearInterval(this.$store.state.timerId),this.init(),this.$store.dispatch("nextMusic")},init:function(){var t=this.$refs.lyric;this.$store.state.countSecond=0,this.$store.state.countMinute=0,this.$store.state.rangeValue=0,this.$store.state.second=0,this.$store.state.timerId=setInterval(this.$store.state.playFunction,1e3),this.currentIndex=-1,t.style.top="150px"},handleClick:function(){this.popupVisible=!0},changePlayPage:function(){this.pageBol=!this.pageBol,this.pageBol?(this.$refs.tape.style.display="block",this.$refs.lyricContainer.style.display="none"):(this.$refs.tape.style.display="none",this.$refs.lyricContainer.style.display="block")}},data:function(){return{rotateBol:!0,popupVisible:!1,isFavoriteBol:!1,currentLyrics:[],lyricList:[],currentIndex:-1,status:"play",timeText:"00:00",durationText:"",currentTime:"0",per:0,pageBol:!1}},components:{Range:i.Range,Popup:i.Popup}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),s=n(129),a=s.commendList;console.log(a);var c=[{img:"http://p4.music.126.net/I1zKnPl4g9snKbAA5zJi3Q==/18623527953173535.jpg"},{img:"http://p4.music.126.net/j_cH-yjz5tTLIDFmz4sSiQ==/18833534674063637.jpg"},{img:"http://p3.music.126.net/09hujI6_LSJD6DWK02qXwQ==/18964376555989719.jpg"},{img:"http://p3.music.126.net/tw17cN9NJfa5FmFDyS0A_g==/18624627464801294.jpg"},{img:"http://p4.music.126.net/x9KxmTxNEXHQJS9n-oWRLw==/18623527953173527.jpg"},{img:"http://p3.music.126.net/U3y3VH4_3cX8pXECLFsHjA==/18624627464801303.jpg"},{img:"http://p4.music.126.net/F7yr2uUq982rTIWlwvaThg==/18964376555989729.jpg"},{img:"http://p4.music.126.net/qADzamZDC3c5whBibC_rAQ==/18906102439712983.jpg"}];e.default={name:"selfRecommend",components:{Swipe:i.Swipe,SwipeItem:i.SwipeItem},data:function(){return{imgs:c,commendList:a.commendList}},computed:{commendLists:function(){for(var t=0;t<this.commendList.length;t++)+this.commendList[t].playcount>99999&&(this.commendList[t].playcount=this.commendList[t].playcount.slice(0,2)+"万");return this.commendList}},methods:{getMusicList:function(t,e){return this.$store.dispatch("getMusicList",{item:t,index:e})}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var s=n(3),a=i(s),c=n(15),o=i(c),r=n(12),u=i(r),l=n(13),d=i(l),f=n(2),p=i(f);n(14);var v=n(11),m=i(v);a.default.prototype.$http=m.default,a.default.use(p.default),u.default.beforeEach(function(t,e,n){d.default.state.tabActive=t.matched[0].name,n()}),a.default.config.productionTip=!1,new a.default({el:"#app",router:u.default,store:d.default,template:"<App/>",components:{App:o.default},created:function(){var t=this;this.$http.get("http://route.showapi.com/213-4?showapi_appid=28882&showapi_sign=de117735a0454184a7d5b4253e286842&topid=26").then(function(e){d.default.state.pageLoading=!1,t.$store.state.playMusicLists=e.data.showapi_res_body.pagebean.songlist})}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={getMusicList:function(t,e){(0,t.commit)("GET_MUSIC_LIST",{item:e.item,index:e.index})},getMusicInfo:function(t,e){(0,t.commit)("GET_MUSIC_INFO",{item:e.item,index:e.index})},preMusic:function(t){(0,t.commit)("PRE_MUSIC")},nextMusic:function(t){(0,t.commit)("NEXT_MUSIC")},chooseMusic:function(t,e){(0,t.commit)("CHOOSE_MUSIC",e)},favorite:function(t,e){(0,t.commit)("FAVORITE",e)},goToFavoriteList:function(t){(0,t.commit)("GO_TO_FAVORITE_LIST")}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(10),s=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={GET_MUSIC_LIST:function(t,e){var n=e.item,i=e.index;t.musicListItem=n,t.currentMusicList=t.playMusicLists.slice(30*i,30*i+31)},GET_MUSIC_INFO:function(t,e){var n=e.item,i=e.index;t.currentIndex=i,s.default.currentPlayMusic(t,n)},PRE_MUSIC:function(t){t.currentIndex--,t.currentIndex<0&&(t.currentIndex=0),t.currentMusic=t.currentMusicList[t.currentIndex]},NEXT_MUSIC:function(t){t.currentIndex++,t.currentIndex>=t.currentMusicList.length&&(t.currentIndex=t.currentMusicList.length-1),t.currentMusic=t.currentMusicList[t.currentIndex]},CHOOSE_MUSIC:function(t,e){s.default.currentPlayMusic(t,e)},FAVORITE:function(t,e){console.log(e),t.favoriteMusic.push(e)},GO_TO_FAVORITE_LIST:function(t){t.currentMusicList=t.favoriteMusic}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={tabActive:"discoverMusic",musicListItem:{},playMusicLists:[],currentMusicList:[],currentMusic:{},currentIndex:0,preMusic:{},nextMusic:{},currentMusicMinute:0,currentMusicSecond:0,countMinute:0,countSecond:0,rangeValue:0,timerId:"",playFunction:"",favoriteMusic:[],pageLoading:!0,second:0}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e){t.exports="data:image/gif;base64,R0lGODlhKAAoAIABANM6Mf///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI2QURFODRFRkZBRTExRTU4NTg0QTdFMUQ4QkI2MTI1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI2QURFODRGRkZBRTExRTU4NTg0QTdFMUQ4QkI2MTI1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjZBREU4NENGRkFFMTFFNTg1ODRBN0UxRDhCQjYxMjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjZBREU4NERGRkFFMTFFNTg1ODRBN0UxRDhCQjYxMjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQJCgABACwAAAAAKAAoAAACeIyPqcvtD6OctNoD8rUZ7Np9VChKZAmdqKOuTOsqcIzMtGHfuaxxfbRrBGu/UfExXCRxxwRsGdg9m0IqpgmVYq1KbnTrMXmnYeAYzCtf1em2E11lf+VkFpxIP+f37td93dfF9zboVwhIaHfItJjoiBd4IzlJWalQAAAh+QQJCgABACwAAAAAKAAoAAACfIyPqcvtD6OctNqLs94WeB55AAiJ5GOeTaoubJu8nBzQGm0zuYF/0l7zIYAxocvIQzqAvVHROVRGoYemgqm0PpfZLjX53YqnV2nVWw5j1ejxkQ1Pc+Nu8FxeD4bJea2uzRf4hidotwJ4RvenmEg42IfoaFioB2N5iZmZUAAAIfkECQoAAQAsAAAAACgAKAAAAn+Mj6nL7Q+jnLRaCPK1GezafVTIaRIJmhE6qpg7sY98wg692g3+egnNm9mAup6C6EslD8hL8zcsGp4I6sI6jS6PWu42EAR3od8wVlyWor1s8m1chV/l2fQ3bm/j33m3n3F2tvfHREdYp1d4p5iIePgYqBbZB2goKIKZqbnJ+VAAACH5BAUKAAEALAAAAAAoACgAAAJ8jI+py+0PIwRUWkbB3Sjz731bKFpkGZ1mJaktm8KX29CT/Ng57ug9XwPeNC/iSLjwBY1DEFKhxDwTLl/0UH1eDVkmlNf9eqng8thqFquX606aTT6/pfJ6OznH5u/cfQBtF8cnSOgWSDcYBmeYqOWniFiod4hSaXmJmWlRAAA7"},,function(t,e,n){function i(t){n(74)}var s=n(0)(n(34),n(124),i,null,null);t.exports=s.exports},function(t,e,n){function i(t){n(54)}var s=n(0)(n(36),n(102),i,"data-v-02b45a28",null);t.exports=s.exports},function(t,e,n){function i(t){n(66)}var s=n(0)(null,n(116),i,null,null);t.exports=s.exports},function(t,e,n){function i(t){n(61)}var s=n(0)(null,n(111),i,"data-v-2b14901c",null);t.exports=s.exports},function(t,e,n){function i(t){n(62)}var s=n(0)(n(37),n(112),i,null,null);t.exports=s.exports},function(t,e,n){function i(t){n(59)}var s=n(0)(n(38),n(109),i,"data-v-1be556e5",null);t.exports=s.exports},function(t,e,n){function i(t){n(71)}var s=n(0)(n(39),n(121),i,"data-v-cd7359b6",null);t.exports=s.exports},function(t,e,n){function i(t){n(55)}var s=n(0)(n(40),n(103),i,"data-v-0466094f",null);t.exports=s.exports},function(t,e,n){function i(t){n(67)}var s=n(0)(n(41),n(117),i,"data-v-5e040a96",null);t.exports=s.exports},function(t,e,n){function i(t){n(64)}var s=n(0)(n(42),n(114),i,"data-v-394b3c46",null);t.exports=s.exports},function(t,e,n){function i(t){n(73)}var s=n(0)(n(43),n(123),i,"data-v-e2fe0028",null);t.exports=s.exports},function(t,e,n){function i(t){n(58)}var s=n(0)(null,n(108),i,null,null);t.exports=s.exports},function(t,e,n){function i(t){n(68)}var s=n(0)(n(44),n(118),i,"data-v-72bed60a",null);t.exports=s.exports},function(t,e,n){function i(t){n(70)}var s=n(0)(n(45),n(120),i,null,null);t.exports=s.exports},function(t,e,n){function i(t){n(72)}var s=n(0)(null,n(122),i,"data-v-d95599e2",null);t.exports=s.exports},function(t,e,n){function i(t){n(69)}var s=n(0)(null,n(119),i,"data-v-7ec175c2",null);t.exports=s.exports},function(t,e,n){function i(t){n(56)}var s=n(0)(n(46),n(104),i,null,null);t.exports=s.exports},function(t,e,n){function i(t){n(57)}var s=n(0)(n(47),n(106),i,"data-v-0bf1572c",null);t.exports=s.exports},function(t,e,n){var i=n(0)(null,n(107),null,null,null);t.exports=i.exports},function(t,e,n){function i(t){n(63)}var s=n(0)(n(48),n(113),i,null,null);t.exports=s.exports},function(t,e,n){function i(t){n(65)}var s=n(0)(n(49),n(115),i,"data-v-47e62663",null);t.exports=s.exports},function(t,e,n){var i=n(0)(null,n(105),null,null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btm_tab_bar"},[n("ul",[n("router-link",{class:{active:"discoverMusic"==t.tabActive||"detailMusicList"==t.tabActive},attrs:{tag:"li",to:"/"}},[n("span",{staticClass:"iconfont icon-wangyiyunyinlezizhi-copy"}),t._v(" "),n("p",[t._v("发现音乐")])]),t._v(" "),n("router-link",{class:{active:"myMusic"==t.tabActive},attrs:{tag:"li",to:"/myMusic"}},[n("span",{staticClass:"iconfont icon-yinle"}),t._v(" "),n("p",[t._v("我的音乐")])]),t._v(" "),n("router-link",{class:{active:"friends"==t.tabActive},attrs:{tag:"li",to:"/friends"}},[n("span",{staticClass:"iconfont icon-pengyou"}),t._v(" "),n("p",[t._v("朋友")])]),t._v(" "),n("router-link",{class:{active:"account"==t.tabActive},attrs:{tag:"li",to:"/account"}},[n("span",{staticClass:"iconfont icon-zhanghao"}),t._v(" "),n("p",[t._v("账号")])])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"discover_music"},[n("discover-menu"),t._v(" "),n("router-view",{staticClass:"dis_music_view"})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"discover_music"},[t._v("\n  歌单\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"status"},[n("p",[t._v("动态")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my_music"},[n("ul",{staticClass:"item_nav"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("li",[n("span",{staticClass:"iconfont icon-wodeshoucang"}),t._v(" "),n("router-link",{staticClass:"underline_item",attrs:{to:"/detailMusicList"},nativeOn:{click:function(e){t.goToFavoriteList(e)}}},[n("span",{staticClass:"item_des"},[t._v("我的收藏")]),t._v(" "),n("span",[t._v(t._s(t.favoriteMusic.length))]),t._v(" "),n("span",{staticClass:"iconfont icon-arrow-right"})])],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("span",{staticClass:"iconfont icon-yinle"}),t._v(" "),n("div",{staticClass:"underline_item"},[n("span",{staticClass:"item_des"},[t._v("本地音乐")]),t._v(" "),n("span",[t._v("0")]),t._v(" "),n("span",{staticClass:"iconfont icon-arrow-right"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("span",{staticClass:"iconfont icon-zuijinbofang"}),t._v(" "),n("div",{staticClass:"underline_item"},[n("span",{staticClass:"item_des"},[t._v("最近播放")]),t._v(" "),n("span",[t._v("0")]),n("span",{staticClass:"iconfont icon-arrow-right"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("span",{staticClass:"iconfont icon-yuleyinlediantai"}),t._v(" "),n("div",{staticClass:"underline_item"},[n("span",{staticClass:"item_des"},[t._v("我的电台")]),t._v(" "),n("span",[t._v("0")]),n("span",{staticClass:"iconfont icon-arrow-right"})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"status"},[n("p",[t._v("附近")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"friends"},[n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detailMusicList"},[n("dml-header"),t._v(" "),n("div",{staticClass:"content"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchedMusic,expression:"searchedMusic"}],attrs:{type:"text",placeholder:"搜索歌单内歌曲"},domProps:{value:t.searchedMusic},on:{input:function(e){e.target.composing||(t.searchedMusic=e.target.value)}}}),t._v(" "),n("div",{staticClass:"content_banner"},[n("img",{attrs:{src:t.musicListItem.backgroundUrl,alt:"图片"}}),t._v(" "),n("div",{staticClass:"banner_right"},[n("p",[t._v(t._s(t.musicListItem.name))])])]),t._v(" "),t._m(0)]),t._v(" "),n("div",{staticClass:"play_list"},[n("div",{staticClass:"play_head"},[n("span",{staticClass:"iconfont icon-bofang"}),t._v(" "),n("div",{staticClass:"head_right"},[n("span",{staticClass:"play_all"},[t._v("播放全部")]),n("i",[t._v("(共"+t._s(t.currentMusicList.length)+"首)")]),t._v(" "),t._m(1)])]),t._v(" "),n("ul",{staticClass:"music_list"},t._l(t.filterMusicList,function(e,i){return n("li",{on:{click:function(n){t.getMusicInfo(e,i)}}},[n("span",{staticClass:"num"},[t._v(t._s(i+1))]),t._v(" "),n("div",{staticClass:"music_info"},[n("router-link",{staticClass:"music_info_l",attrs:{to:"/playPage"}},[n("h3",[t._v(t._s(e.songname))]),t._v(" "),n("p",[t._v(t._s(e.singername)+" - "+t._s(e.songname))])]),t._v(" "),n("div",{staticClass:"music_info_r"},[n("span",{staticClass:"iconfont icon-bofang1"}),t._v(" "),n("div",{staticClass:"detail_key",on:{click:function(n){t.handleClick(e)}}},[t._v(". . .")]),t._v(" "),n("mt-popup",{attrs:{position:"bottom"},model:{value:t.popupVisible,callback:function(e){t.popupVisible=e},expression:"popupVisible"}},[n("ul",[n("li",[n("span",{staticClass:"underline_item"},[t._v("歌曲：Nobody")])]),t._v(" "),n("li",[n("span",{staticClass:"iconfont icon-bofang"}),n("span",{staticClass:"underline_item"},[t._v("下一首播放")])]),t._v(" "),n("li",{class:{active:t.isFavoriteBol},on:{click:function(e){t.favorite(t.currentItem,e)}}},[n("span",{staticClass:"iconfont icon-unif056"}),n("span",{staticClass:"underline_item"},[t._v("\n                收藏到歌单")])]),t._v(" "),n("li",[n("span",{staticClass:"iconfont icon-xiazai"}),n("span",{staticClass:"underline_item"},[t._v("下载")])]),t._v(" "),n("li",[n("span",{staticClass:"iconfont icon-pinglun"}),n("span",{staticClass:"underline_item"},[t._v("评论")])]),t._v(" "),n("li",[n("span",{staticClass:"iconfont icon-zhuanfa"}),n("span",{staticClass:"underline_item"},[t._v("分享")])]),t._v(" "),n("li",[n("span",{staticClass:"iconfont icon-geshou"}),n("span",{staticClass:"underline_item"},[t._v("歌手:"+t._s(t.currentItem.singername)+"\n              ")])]),t._v(" "),n("li",[n("span",{staticClass:"iconfont icon-zhuanji"}),n("span",{staticClass:"underline_item"},[t._v("专辑")])])])])],1)],1)])}))])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content_nav"},[n("li",[n("span",{staticClass:"iconfont icon-unif056"}),t._v(" "),n("p",[t._v("23453")])]),t._v(" "),n("li",[n("span",{staticClass:"iconfont icon-pinglun"}),t._v(" "),n("p",[t._v("123")])]),t._v(" "),n("li",[n("span",{staticClass:"iconfont icon-zhuanfa"}),t._v(" "),n("p",[t._v("343")])]),t._v(" "),n("li",[n("span",{staticClass:"iconfont icon-xiazai"}),t._v(" "),n("p",[t._v("下载")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mul_select"},[n("span",{staticClass:"iconfont icon-duoxuan"}),t._v(" "),n("span",[t._v("多选")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header-bar"),t._v(" "),n("router-view",{staticClass:"router_view"}),t._v(" "),n("btm-tab-bar",{directives:[{name:"show",rawName:"v-show",value:"playPage"!=t.tabActive,expression:"tabActive!='playPage'"}]}),t._v(" "),n("loading",{directives:[{name:"show",rawName:"v-show",value:t.pageLoading,expression:"pageLoading"}]})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header_left"},[n("span",{staticClass:"more"}),t._v(" "),n("span",{staticClass:"acc"},[t._v("账号")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"discover_music"},[t._v("\n  排行榜\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"play_page"},[n("div",{staticClass:"header"},[n("span",{staticClass:"iconfont icon-iconjiantouleft",on:{click:function(e){t.back()}}}),t._v(" "),n("div",{staticClass:"mMusic"},[n("span",[t._v(t._s(t.currentMusic.songname))]),n("br"),t._v(" "),n("span",[t._v(t._s(t.currentMusic.singername))])]),t._v(" "),n("span",{staticClass:"iconfont icon-zhuanfa"})]),t._v(" "),n("div",{staticClass:"content",on:{click:t.changePlayPage}},[n("div",{ref:"tape",staticClass:"tape",class:{rotate:t.rotateBol,stopRotate:!t.rotateBol}},[n("img",{staticClass:"tape_bc",attrs:{src:"/static/img/tape.jpg",alt:"图片"}}),t._v(" "),n("img",{staticClass:"music_pic",attrs:{src:t.currentMusic.albumpic_big,alt:"图片"}})]),t._v(" "),n("div",{ref:"lyricContainer",staticClass:"lyric-container"},[n("ul",{ref:"lyric",staticClass:"lyric"},t._l(t.lyricList,function(e,i){return n("li",{class:{"active-lyric":i==t.currentIndex}},[t._v(t._s(e.zh))])}))]),t._v(" "),n("mt-range",{model:{value:t.rangeValue,callback:function(e){t.rangeValue=e},expression:"rangeValue"}},[n("div",{staticClass:"time_num",slot:"start"},[t._v(t._s(t.timeText))]),t._v(" "),n("div",{staticClass:"time_num",slot:"end"},[t._v(t._s(t.durationText))])])],1),t._v(" "),n("div",{staticClass:"footer"},[n("span",{staticClass:"iconfont icon-suiji"}),t._v(" "),n("span",{staticClass:"iconfont icon-shangyishou",on:{click:t.preMusic}}),t._v(" "),n("span",{staticClass:"iconfont icon-bofang",class:{"icon-bofang":!t.rotateBol,"icon-zanting":t.rotateBol},on:{click:function(e){t.playOrStop()}}}),t._v(" "),n("span",{staticClass:"iconfont icon-xiayishou",on:{click:t.nextMusic}}),t._v(" "),n("span",{staticClass:"iconfont icon-duoxuan",on:{click:t.handleClick}}),t._v(" "),n("mt-popup",{attrs:{position:"bottom"},model:{value:t.popupVisible,callback:function(e){t.popupVisible=e},expression:"popupVisible"}},[n("ul",[n("li",{class:{active:t.isFavoriteBol},on:{click:function(e){t.favorite(t.currentMusic,e)}}},[n("span",{staticClass:"iconfont icon-unif056"}),t._v(" "),n("span",{staticClass:"underline_item"},[t._v("收藏到歌单")])]),t._v(" "),n("li",[n("span",{staticClass:"iconfont icon-xiazai"}),n("span",{staticClass:"underline_item"},[t._v("下载")])]),t._v(" "),n("li",[n("span",{staticClass:"iconfont icon-pinglun"}),n("span",{staticClass:"underline_item"},[t._v("评论")])])])])],1),t._v(" "),n("audio",{attrs:{src:t.currentMusic.url,autoplay:"",timeupdate:t.timeupdateEvent}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("span",{staticClass:"iconfont icon-iconjiantouleft",on:{click:function(e){t.back()}}}),t._v(" "),n("span",{staticClass:"mMusic"},[t._v("歌单")]),t._v(" "),n("span",{staticClass:"iconfont icon-gaodiyin"})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"self_recommend"},[n("div",{staticClass:"swiper"},[n("mt-swipe",{attrs:{auto:4e3}},t._l(t.imgs,function(t){return n("mt-swipe-item",{key:t.img},[n("img",{attrs:{src:t.img,alt:"图片"}})])}))],1),t._v(" "),n("ul",{staticClass:"self_nav"},[n("li",{staticClass:"nav_wrap"},[n("router-link",{staticClass:"nav_item",attrs:{tag:"li",to:""}},[n("span",{staticClass:"iconfont icon-shouyinji01"}),t._v(" "),n("p",[t._v("私人FM")])])],1),t._v(" "),n("li",{staticClass:"nav_wrap"},[n("router-link",{staticClass:"nav_item",attrs:{tag:"li",to:""}},[n("span",{staticClass:"iconfont icon-calendar"}),t._v(" "),n("p",[t._v("每日歌曲推荐")])])],1),t._v(" "),n("li",{staticClass:"nav_wrap"},[n("router-link",{staticClass:"nav_item",attrs:{tag:"li",to:""}},[n("span",{staticClass:"iconfont icon-paihangbang"}),t._v(" "),n("p",[t._v("云音乐热歌榜")])])],1)]),t._v(" "),n("div",{staticClass:"recom_music_list"},[n("div",{staticClass:"header recom_header"},[n("router-link",{staticClass:"recom_nav",attrs:{to:"musicList"}},[t._v("推荐歌单")]),n("span",{staticClass:"iconfont icon-arrow-right"})],1),t._v(" "),n("ul",{staticClass:"recom_cont"},t._l(t.commendLists,function(e,i){return n("router-link",{key:e.name,attrs:{tag:"li",to:"/detailMusicList"},nativeOn:{click:function(n){t.getMusicList(e,i)}}},[n("img",{attrs:{src:e.backgroundUrl,alt:"图片"}}),t._v(" "),n("p",{staticClass:"rec_des"},[t._v(t._s(e.name))]),t._v(" "),n("span",{staticClass:"iconfont icon-shiliangzhinengduixiang1"},[t._v(t._s(e.playcount))])])}))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"discover_music"},[t._v("\n  账号\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header_left"},[n("span",{staticClass:"iconfont icon-huatong"}),t._v(" "),n("div",{staticClass:"search_frame"},[n("span",{staticClass:"iconfont icon-sou"}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchWord,expression:"searchWord"}],attrs:{type:"text",placeholder:"搜索音乐、歌词、电台"},domProps:{value:t.searchWord},on:{input:function(e){e.target.composing||(t.searchWord=e.target.value)}}})]),t._v(" "),n("transition",{attrs:{name:"bounce"}},[n("ul",{staticClass:"search_list",class:{ifShow:""===t.searchWord}},t._l(t.foundedMusicList,function(e){return n("router-link",{key:e.songname,staticClass:"detail_list",attrs:{to:"playPage",tag:"li"},nativeOn:{click:function(n){t.chooseMusic(e)}}},[t._v(t._s(e.songname)+"-"+t._s(e.singername))])}))])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:"detailMusicList"!=t.tabActive&&"playPage"!=t.tabActive,expression:"(tabActive!='detailMusicList')&&(tabActive!='playPage')"}],staticClass:"header"},[n("dm-header",{directives:[{name:"show",rawName:"v-show",value:"discoverMusic"==t.tabActive,expression:"tabActive=='discoverMusic'"}]}),t._v(" "),n("mm-header",{directives:[{name:"show",rawName:"v-show",value:"myMusic"==t.tabActive,expression:"tabActive=='myMusic'"}]}),t._v(" "),n("fri-header",{directives:[{name:"show",rawName:"v-show",value:"friends"==t.tabActive,expression:"tabActive=='friends'"}]}),t._v(" "),n("accout-header",{directives:[{name:"show",rawName:"v-show",value:"account"==t.tabActive,expression:"tabActive=='account'"}]}),t._v(" "),n("span",{staticClass:"iconfont icon-gaodiyin"})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header_left"},[n("span",{staticClass:"more"},[t._v("更多")]),t._v(" "),n("span",{staticClass:"mMusic"},[t._v("我的音乐")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"discover_music"},[t._v("\n  主播电台\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"discover_menu"},[n("router-link",{attrs:{tag:"li",to:"selfRecommend","active-class":"selected"}},[t._v("个性推荐")]),t._v(" "),n("router-link",{attrs:{tag:"li",to:"musicList","active-class":"selected"}},[t._v("歌单")]),t._v(" "),n("router-link",{attrs:{tag:"li",to:"hostStation","active-class":"selected"}},[t._v("主播电台")]),t._v(" "),n("router-link",{attrs:{tag:"li",to:"billboard","active-class":"selected"}},[t._v("排行榜")])],1)},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loading"},[i("img",{attrs:{src:n(78),alt:"图片"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header_left"},[n("span",{staticClass:"iconfont icon-addfriends"}),t._v(" "),n("div",{staticClass:"search_frame"},[n("div",{staticClass:"tab_zone"},[n("router-link",{attrs:{tag:"li",to:"status","active-class":"activeTab"}},[t._v("动态")]),t._v(" "),n("router-link",{attrs:{tag:"li",to:"nearby","active-class":"activeTab"}},[t._v("附近")])],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"mint-button",class:["mint-button--"+t.type,"mint-button--"+t.size,{"is-disabled":t.disabled,"is-plain":t.plain}],attrs:{type:t.nativeType,disabled:t.disabled},on:{click:t.handleClick}},[t.icon||t.$slots.icon?n("span",{staticClass:"mint-button-icon"},[t._t("icon",[t.icon?n("i",{staticClass:"mintui",class:"mintui-"+t.icon}):t._e()])],2):t._e(),t._v(" "),n("label",{staticClass:"mint-button-text"},[t._t("default")],2)])},staticRenderFns:[]}},,,,,function(t,e){t.exports.commendList={commendList:[{id:"396560343",name:"「钢琴史诗」这美妙与震撼足以让你彻底沦陷",copywrite:"根据你收藏的歌单《前奏直接秒杀的纯音乐》推荐",playcount:"4027609",backgroundUrl:"http://p4.music.126.net/Z3fUkt-wQJkgKMIjLL-4Cg==/528865119747098.jpg"},{id:"482653439",name:"成长吧，双笙！",copywrite:"根据你喜欢的单曲《故梦》推荐",playcount:"216336",backgroundUrl:"http://p4.music.126.net/RpF1WePchMgAcBn-WiaA3g==/18631224534329560.jpg"},{id:"41564652",name:"孤独症的自愈歌",copywrite:"根据你喜欢的单曲《高尚》推荐",playcount:"50978",backgroundUrl:"http://p4.music.126.net/XYX1GfDeeqB6pWZinUEi2w==/109951162865187513.jpg"},{id:"642847603",name:"『电音』℃ 泳池派对 夏日里的极致清凉",copywrite:"根据你喜欢的单曲《Nevada (Original Mix)》推荐",playcount:"1065804",backgroundUrl:"http://p4.music.126.net/hfERTD70EViOyEa0J-rgHQ==/18673005976966035.jpg"},{id:"703464130",name:"我们一起离开吧，远离尘埃。",copywrite:"编辑推荐：我不想拯救世界，我也拯救不了世界",playcount:"539929",backgroundUrl:"http://p3.music.126.net/NDs0aPsYLreaJUqNdqXdGA==/109951162910093162.jpg?param=200y200"},{id:"711845605",name:"华语丨同名异曲，耳目一新的听觉之旅",copywrite:"编辑推荐：异曲同名，别有一番滋味",playcount:"535826",backgroundUrl:"http://p1.music.126.net/gdHyecgFUV27nJ-_gxvfrg==/19097417462968474.jpg"},{id:"460217828",name:"「中国女说唱」暗香里袭人的刺",copywrite:"根据你喜欢的单曲《模棱两可》推荐",playcount:"802081",backgroundUrl:"http://p1.music.126.net/V0BH4wkKQdIvVNVxhBitdw==/109951162792729779.jpg"},{id:"450285333",name:"【十二月 花之物语】一花一世界 一曲一离殇",copywrite:"根据你喜欢的单曲《方圆寸地儿》推荐",playcount:"600220",backgroundUrl:"http://p1.music.126.net/cnuXyZD8wuYo2-2vfR1Kzg==/18670806951436203.jpg"},{id:"563656963",name:"中国风丨昆山玉碎凤凰叫(流行乐)",copywrite:"根据你喜欢的单曲《等》推荐",playcount:"1019893",backgroundUrl:"http://p1.music.126.net/foHgEcnNVGgqgVYZGwDAKw==/18686200115755007.jpg"}]}}],[50]);
//# sourceMappingURL=app.2eddfdb2af615e7fae37.js.map