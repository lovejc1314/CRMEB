(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f45b"],{d8b3:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"quality-recommend"},[e("div",{staticClass:"slider-banner swiper"},[e("swiper",{staticClass:"swiper-wrapper",attrs:{options:t.RecommendSwiper}},t._l(t.imgUrls,function(t,s){return e("swiperSlide",{key:s,staticClass:"swiper-slide"},[e("img",{staticClass:"slide-image",attrs:{src:t.img}})])}),1),e("div",{staticClass:"swiper-pagination"})],1),t._m(0),e("Promotion-good",{attrs:{benefit:t.goodsList}})],1)},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"title acea-row row-center-wrapper"},[e("div",{staticClass:"line"}),e("div",{staticClass:"name"},[e("span",{staticClass:"iconfont icon-cuxiaoguanli"}),t._v("促销单品\n    ")]),e("div",{staticClass:"line"})])}],n=e("7212"),o=(e("e5d0"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.benefit.length>0?e("div",{staticClass:"promotionGood"},t._l(t.benefit,function(s,i){return e("router-link",{key:i,staticClass:"item acea-row row-between-wrapper",attrs:{to:{path:"/detail/"+s.id}}},[e("div",{staticClass:"pictrue"},[e("img",{staticClass:"image",attrs:{src:s.image}})]),e("div",{staticClass:"text"},[e("div",{staticClass:"name line1"},[t._v(t._s(s.store_name))]),e("div",{staticClass:"sp-money acea-row"},[e("div",{staticClass:"moneyCon"},[t._v("\n          促销价: ￥"),e("span",{staticClass:"num"},[t._v(t._s(s.price))])])]),e("div",{staticClass:"acea-row row-between-wrapper"},[e("div",{staticClass:"money"},[t._v("日常价：￥"+t._s(s.ot_price))]),e("div",[t._v("仅剩："+t._s(s.stock)+t._s(s.unit_name))])])])])}),1):t._e()}),r=[],c={name:"PromotionGood",props:{benefit:{type:Array,default:function(){return[]}}},data:function(){return{}}},l=c,d=e("2877"),p=Object(d["a"])(l,o,r,!1,null,null,null),m=p.exports,u=e("73f5"),w={name:"GoodsPromotion",components:{swiper:n["swiper"],swiperSlide:n["swiperSlide"],PromotionGood:m},props:{},data:function(){return{imgUrls:[],goodsList:[],RecommendSwiper:{pagination:{el:".swiper-pagination",clickable:!0},autoplay:{disableOnInteraction:!1,delay:2e3},loop:!0,speed:1e3,observer:!0,observeParents:!0}}},mounted:function(){this.getIndexGroomList()},methods:{getIndexGroomList:function(){var t=this;Object(u["e"])(4).then(function(s){t.imgUrls=s.data.banner,t.goodsList=s.data.list}).catch(function(t){this.$dialog.toast({mes:t.msg})})}}},v=w,f=Object(d["a"])(v,i,a,!1,null,null,null);s["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d21f45b.1f9ad535.js.map