import{a as V,c as u}from"./chunk-CFKTTSPK.js";import{a as b,j as $}from"./chunk-J7M2XGZ7.js";import"./chunk-DAYDXSZV.js";import"./chunk-K7KRUR5J.js";import{$a as c,$b as B,Bb as g,Cb as d,Db as f,Eb as p,Fb as s,Gb as P,Hb as E,J as C,Nb as D,Ob as _,Xb as l,Zb as L,ab as T,ac as H,ba as h,d as n,dc as k,fc as I,ga as v,ja as F,lb as M,sa as w,sb as x,ta as y,tb as S,ub as O,wb as m}from"./chunk-T3MNLJDG.js";var j=(()=>{let t=class t{constructor(i){n(this,"http");n(this,"baseUrl");n(this,"apiKey");n(this,"language");n(this,"region");this.http=i,this.baseUrl="https://api.themoviedb.org/3/",this.apiKey=u.theMovieDBApi,this.language="en-US",this.region="VN"}getMovies(i,o){return this.http.get(`${this.baseUrl}movie/${i}?api_key=${this.apiKey}&page=${o}&language=${this.language}&region=${this.region}`)}};n(t,"\u0275fac",function(o){return new(o||t)(v(b))}),n(t,"\u0275prov",h({token:t,factory:t.\u0275fac,providedIn:"root"}));let e=t;return e})();var A=(()=>{let t=class t{constructor(i){n(this,"http");n(this,"baseUrl");n(this,"apiKey");n(this,"language");n(this,"region");this.http=i,this.baseUrl="https://api.themoviedb.org/3/",this.apiKey=u.theMovieDBApi,this.language="en-US",this.region="VN"}getTvShow(i,o){return this.http.get(`${this.baseUrl}tv/${i}?api_key=${this.apiKey}&page=${o}&language=${this.language}`)}};n(t,"\u0275fac",function(o){return new(o||t)(v(b))}),n(t,"\u0275prov",h({token:t,factory:t.\u0275fac,providedIn:"root"}));let e=t;return e})();var K=()=>[import("./chunk-FEL7K4JR.js").then(e=>e.PosterCardComponent),import("./chunk-EZALX4BU.js").then(e=>e.SwiperDirective),import("./chunk-IHAM7WR7.js").then(e=>e.MatTabGroup),import("./chunk-FTJENN7X.js").then(e=>e.SlicePipe),import("./chunk-IHAM7WR7.js").then(e=>e.MatTab)],R=()=>["/movies"];function X(e,t){if(e&1&&(p(0,"swiper-slide",10),P(1,"app-poster-card",11),s()),e&2){let r=t.$implicit;c(),m("model",r)("isMovie",!0)}}function W(e,t){if(e&1&&(p(0,"mat-tab",8)(1,"swiper-container",9),d(2,X,2,2,"swiper-slide",10,g),k(4,"slice"),s()()),e&2){let r=t.$implicit,i=_(2);m("label",r),c(),m("config",i.config),c(),f(I(4,2,i.moviesList(),0,15))}}function Y(e,t){e&1&&l(0," Empty list ")}function q(e,t){if(e&1){let r=E();p(0,"mat-tab-group",7),D("selectedTabChange",function(o){w(r);let a=_();return y(a.tabMovieChange(o))}),d(1,W,5,6,"mat-tab",8,g,!1,Y,1,0),s()}if(e&2){let r=_();c(),f(r.movieTabList)}}function J(e,t){if(e&1&&(p(0,"swiper-slide",10),P(1,"app-poster-card",11),s()),e&2){let r=t.$implicit;c(),m("model",r)("isMovie",!0)}}function Q(e,t){if(e&1&&(p(0,"mat-tab",8)(1,"swiper-container",9),d(2,J,2,2,"swiper-slide",10,g),k(4,"slice"),s()()),e&2){let r=t.$implicit,i=_(2);m("label",r),c(),m("config",i.config),c(),f(I(4,2,i.tvShowsList(),0,15))}}function Z(e,t){e&1&&l(0," Empty list ")}function ee(e,t){if(e&1){let r=E();p(0,"mat-tab-group",7),D("selectedTabChange",function(o){w(r);let a=_();return y(a.tabTvShowChange(o))}),d(1,Q,5,6,"mat-tab",8,g,!1,Z,1,0),s()}if(e&2){let r=_();c(),f(r.tvShowsTabList)}}var _e=(()=>{let t=class t{constructor(i,o){n(this,"moviesService");n(this,"onTv");n(this,"config",{watchSlidesProgress:!0,breakpoints:{992:{slidesPerView:6.3,spaceBetween:20,slidesOffsetBefore:0,slidesOffsetAfter:0},768:{slidesPerView:4.3,spaceBetween:15,slidesOffsetBefore:0,slidesOffsetAfter:0},576:{slidesPerView:3.3,spaceBetween:15,slidesOffsetBefore:0,slidesOffsetAfter:0},320:{slidesPerView:2.3,spaceBetween:10,slidesOffsetBefore:10,slidesOffsetAfter:10}}});n(this,"movieTabList",["Now playing","Upcoming","Popular"]);n(this,"moviesList",M([]));n(this,"selectedMovieTab",0);n(this,"tvShowsTabList",["Airing Today","Currently Airing","Popular"]);n(this,"tvShowsList",M([]));n(this,"selectedTvShowTab",0);this.moviesService=i,this.onTv=o}ngOnInit(){this.getMovies("now_playing",1),this.getTvShows("airing_today",1)}getMovies(i,o){this.moviesService.getMovies(i,o).pipe(C(1)).subscribe(a=>{this.moviesList.set(a.results)})}tabMovieChange({index:i}){console.log(i),this.selectedMovieTab=i;let a=["now_playing","upcoming","popular"][i];a&&this.getMovies(a,1)}getTvShows(i,o){this.onTv.getTvShow(i,o).pipe(C(1)).subscribe(a=>{this.tvShowsList.set(a.results)})}tabTvShowChange({index:i}){this.selectedTvShowTab=i;let a=["airing_today","on_the_air","popular"][i];a&&this.getTvShows(a,1)}log(){console.log("CD home component")}};n(t,"\u0275fac",function(o){return new(o||t)(T(j),T(A))}),n(t,"\u0275cmp",F({type:t,selectors:[["app-home"]],standalone:!0,features:[B],decls:22,vars:4,consts:[[1,"home-main-content"],[1,"container"],[1,"movies__container"],["title","Go to Movies",1,"movies__title"],[1,"colored-background-before",3,"routerLink"],[1,"shows__container"],["title","Go to TV Shows",1,"shows__title"],["mat-align-tabs","end",3,"selectedTabChange"],[3,"label"],["appSwiper","","pagination","true","scrollbar","false",3,"config"],["lazy","true"],[3,"model","isMovie"]],template:function(o,a){o&1&&(l(0),p(1,"section",0),l(2,"Welcome"),s(),p(3,"div",1)(4,"section",2)(5,"h2",3)(6,"a",4)(7,"mat-icon"),l(8,"movie"),s(),l(9," Movies "),s()(),x(10,q,4,1),S(11,10,K),O(),s(),p(13,"section",5)(14,"h2",6)(15,"a",4)(16,"mat-icon"),l(17,"tv_gen"),s(),l(18," TV Shows "),s()(),x(19,ee,4,1),S(20,19,K),O(),s()()),o&2&&(L("",a.log(),`
`),c(6),m("routerLink",H(3,R)),c(9),m("routerLink","/tv-shows"))},dependencies:[$,V],styles:[`.home-main-content[_ngcontent-%COMP%]{color:#fff;display:flex;justify-content:center;align-items:center;height:500px;background:linear-gradient(#342931cc,#1a214acc),url("./media/background-main-FTHRUFLC.webp") no-repeat bottom;background-size:cover;font-size:4rem}.movies__container[_ngcontent-%COMP%], .show__container[_ngcontent-%COMP%]{margin:2rem 0;min-height:465px;position:relative}.movies__title[_ngcontent-%COMP%], .show__title[_ngcontent-%COMP%]{position:absolute;margin:12px 0}.movies__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .show__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;text-decoration:none;position:relative;z-index:10}.movies__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before, .show__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{content:"";position:absolute;width:100%;height:2px;border-radius:4px;bottom:-8px;left:0;transform-origin:right;transform:scaleX(0);transition:transform .3s ease-in-out}.movies__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before, .show__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before{transform-origin:left;transform:scaleX(1)}.movies__title[_ngcontent-%COMP%]:hover, .show__title[_ngcontent-%COMP%]:hover{background-position:0 100%}.movies__title[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .show__title[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{margin-right:10px}  mat-tab-header .mat-mdc-tab:not(.mat-mdc-tab-disabled).mdc-tab--active .mdc-tab__text-label{color:#fff}  mat-tab-header .mat-mdc-tab-list{flex-grow:initial}  mat-tab-header .mat-mdc-tab-label-container{justify-content:flex-end}swiper-container[_ngcontent-%COMP%]{margin-top:30px}  .swiper-slide-visible:not(.swiper-slide-fully-visible){opacity:.6}  .swiper-slide-active{opacity:1!important}  .mat-mdc-tab-label-container{border-bottom-color:transparent!important}  .mat-mdc-tab-body-wrapper{min-height:415px}swiper-slide[_ngcontent-%COMP%]{padding-bottom:2rem}
/*# sourceMappingURL=home.component-3YFOIOX2.css.map */`],changeDetection:0}));let e=t;return e})();export{_e as HomeComponent};
//# sourceMappingURL=chunk-KSGS7CC7.js.map
