(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22637d46"],{6726:function(t,i,s){},e436:function(t,i,s){"use strict";s.r(i);var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"PromoterRank"},[s("div",{staticClass:"redBg bg-color-red"},[s("div",{staticClass:"header"},[s("div",{staticClass:"nav acea-row row-center-wrapper"},t._l(t.navList,function(i,a){return s("div",{key:a,staticClass:"item",class:t.active===a?"font-color-red":"",on:{click:function(i){t.active=a}}},[t._v("\n          "+t._s(i)+"\n        ")])}),0),s("div",{staticClass:"rank acea-row row-bottom row-around"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.Two.uid,expression:"Two.uid"}],staticClass:"item"},[s("div",{staticClass:"pictrue"},[s("img",{attrs:{src:t.Two.avatar}})]),s("div",{staticClass:"name line1"},[t._v(t._s(t.Two.nickname))]),s("div",{staticClass:"num"},[t._v(t._s(t.Two.count)+"人")])]),t.One.uid?s("div",{staticClass:"item"},[s("div",{staticClass:"pictrue"},[s("img",{attrs:{src:t.One.avatar}})]),s("div",{staticClass:"name line1"},[t._v(t._s(t.One.nickname))]),s("div",{staticClass:"num"},[t._v(t._s(t.One.count)+"人")])]):t._e(),t.Three.uid?s("div",{staticClass:"item"},[s("div",{staticClass:"pictrue"},[s("img",{attrs:{src:t.Three.avatar}})]),s("div",{staticClass:"name line1"},[t._v(t._s(t.Three.nickname))]),s("div",{staticClass:"num"},[t._v(t._s(t.Three.count)+"人")])]):t._e()])])]),t.rankList.length?s("div",{staticClass:"list"},t._l(t.rankList,function(i,a){return s("div",{key:i.nickname,staticClass:"item acea-row row-between-wrapper"},[s("div",{staticClass:"num"},[t._v(t._s(a+4))]),s("div",{staticClass:"picTxt acea-row row-between-wrapper"},[s("div",{staticClass:"pictrue"},[s("img",{attrs:{src:i.avatar}})]),s("div",{staticClass:"text line1"},[t._v(t._s(i.nickname))])]),s("div",{staticClass:"people font-color-red"},[t._v(t._s(i.count)+"人")])])}),0):t._e()])},e=[],n=(s("7f7f"),s("c24f")),r="PromoterRank",c={name:r,props:{},data:function(){return{navList:["周榜","月榜"],active:0,page:1,limit:10,loading:!1,loadend:!1,rankList:[],One:{},Two:{},Three:{},type:"week"}},watch:{$route:function(t){t.name===r&&(this.loaded=!1,this.page=1,this.$set(this,"rankList",[]),this.getRankList())},active:function(t){this.type=t?"month":"week",this.page=1,this.loaded=!1,this.$set(this,"rankList",[]),this.getRankList()}},mounted:function(){var t=this;this.getRankList(),this.$scroll(this.$refs.container,function(){!t.loading&&t.getRankList()})},methods:{getRankList:function(){var t=this;Object(n["w"])({page:this.page,limit:this.limit,type:this.type}).then(function(i){var s=i.data;t.rankList.push.apply(t.rankList,s),1==t.page&&(t.One=t.rankList.shift()||{},t.Two=t.rankList.shift()||{},t.Three=t.rankList.shift()||{}),t.page++,t.loading=!1,t.loaded=s.length<t.limit,t.$set(t,"rankList",t.rankList)}).catch(function(){t.loading=!1})}}},o=c,l=(s("e57f"),s("2877")),d=Object(l["a"])(o,a,e,!1,null,"ba858c14",null);i["default"]=d.exports},e57f:function(t,i,s){"use strict";var a=s("6726"),e=s.n(a);e.a}}]);
//# sourceMappingURL=chunk-22637d46.81ef60d5.js.map