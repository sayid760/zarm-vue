(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{508:function(t,e,n){},509:function(t,e,n){},510:function(t,e,n){"use strict";var a=n(508);n.n(a).a},512:function(t,e,n){"use strict";var a={data:()=>({}),components:{},created(){},mounted(){},methods:{}},i=(n(510),n(6)),s=Object(i.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("div",{staticClass:"main-container"},[this._t("default")],2)])},[],!1,null,"4d605d3f",null);e.a=s.exports},513:function(t,e,n){"use strict";var a=n(509);n.n(a).a},515:function(t,e,n){"use strict";var a={props:{url:{type:String,default:""}},computed:{componentPath(){return`${window.CONFIG.pathname}demo.html#/${this.url}`}}},i=(n(513),n(6)),s=Object(i.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"simulator"},[e("iframe",{staticStyle:{width:"375px",height:"667px"},attrs:{src:this.componentPath,title:"simulator",frameBorder:"0"}})])},[],!1,null,"1196af06",null);e.a=s.exports},702:function(t,e,n){"use strict";n.r(e);var a=n(5),i=n(515),s={components:{Container:n(512).a,Simulator:i.a},data:()=>({path:null}),created(){const t=this.$store.state.version;this.path=this.$route.path.replace("/documents/",""),a.default.component("Demo",function(e,a){Promise.all([n.e(1),n.e(89)]).then(function(){var a=[n(634)(`./${t}/checkbox.md`)];e.apply(null,a)}.bind(this)).catch(n.oe)})}},r=n(6),o=Object(r.a)(s,function(){var t=this.$createElement,e=this._self._c||t;return e("Container",[e("Demo"),this._v(" "),e("Simulator",{attrs:{url:this.path}})],1)},[],!1,null,null,null);e.default=o.exports}}]);