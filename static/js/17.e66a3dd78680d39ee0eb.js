(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{149:function(t,i,e){"use strict";e.r(i);var s=e(6),o=e(7),l=e(8),n={data:function(){return{visible1:!1,visible2:!1,visible3:!1,visible4:!1,isLoading:!1}},methods:{toastClose:function(t,i){console.log(t,i)}}},a=e(0),c=Object(a.a)(n,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("za-panel",[e("za-panel-header",{attrs:{title:"提示信息"}}),t._v(" "),e("za-panel-body",[e("za-cell",[e("za-button",{attrs:{slot:"description",size:"xs",theme:"error"},on:{click:function(i){t.visible1=!0}},slot:"description"},[t._v("开启")]),t._v("\n        错误提示\n      ")],1),t._v(" "),e("za-cell",[e("za-button",{attrs:{slot:"description",size:"xs",theme:"success"},on:{click:function(i){t.visible2=!0}},slot:"description"},[t._v("开启")]),t._v("\n        成功提示(close-on-click-modal)\n      ")],1),t._v(" "),e("za-cell",[e("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(i){t.visible3=!0}},slot:"description"},[t._v("开启")]),t._v("\n        指定关闭时间\n      ")],1)],1)],1),t._v(" "),e("za-panel",[e("za-panel-header",{attrs:{title:"加载中"}}),t._v(" "),e("za-panel-body",[e("za-cell",[e("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(i){t.visible4=!0}},slot:"description"},[t._v("开启")]),t._v("\n        Loading\n      ")],1)],1)],1),t._v(" "),e("za-toast",{attrs:{visible:t.visible1},on:{"update:visible":function(i){t.visible1=i},close:t.toastClose}},[t._v("默认3秒自动关闭")]),t._v(" "),e("za-toast",{attrs:{visible:t.visible2,"close-on-click-modal":!0},on:{"update:visible":function(i){t.visible2=i},close:t.toastClose}},[e("div",{staticClass:"box"},[e("za-icon",{staticClass:"box-icon",attrs:{type:"right-round-fill"}},[e("div",{staticClass:"box-text"},[t._v("预约成功")])])],1)]),t._v(" "),e("za-toast",{attrs:{visible:t.visible3,duration:1e4},on:{"update:visible":function(i){t.visible3=i},close:t.toastClose}},[t._v("指定10秒自动关闭")]),t._v(" "),e("za-loading",{attrs:{visible:t.visible4},on:{"update:visible":function(i){t.visible4=i}}})],1)},[],!1,null,null,null).exports,v=(e(53),{components:{Container:s.a,PageHeader:o.a,PageFooter:l.a,Demo:c}}),r=Object(a.a)(v,function(){var t=this.$createElement,i=this._self._c||t;return i("Container",{staticClass:"toast-page"},[i("PageHeader",{attrs:{title:"轻提示 Toast"}}),this._v(" "),i("Demo"),this._v(" "),i("PageFooter")],1)},[],!1,null,null,null);i.default=r.exports}}]);
//# sourceMappingURL=17.e66a3dd78680d39ee0eb.js.map