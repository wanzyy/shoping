<template>
  <header>
    <Header>
      <template v-slot:left>
        <span class="left iconfont icon-saoyisao"></span>
      </template>
      <template v-slot:seach>
        <span class="seach iconfont icon-search"></span>
      </template>
      <template v-slot:message>
        <span class="message iconfont icon-shouye"></span>
      </template>
    </Header>
    <HeadNav></HeadNav>
  </header>
  <HeaderSwiper :img="swiper"></HeaderSwiper>
  <div class="time">
    <TimeMain :times="good"></TimeMain>
  </div>
  <HomeList :fication="swiper">
      <template v-slot:ficationname  v-for="item in names">
        <a class="fiction" href="#">{{item}}</a>
      </template>
  </HomeList>
  <h1>专属推荐</h1>
  <HoneGood :list="good"></HoneGood>
</template>

<script>
import Header from "@/components/Header";
import {get} from '@/network/request'
import TimeMain from "@/components/TimeMain";
import HeaderSwiper from "@/components/HeadSwiper";
import HeadNav from "@/components/HeadNav";
import HomeList from "@/components/HomeList";
import HoneGood from "@/components/HoneGood";
export default {
  name: "Home",
  components: {HoneGood, HomeList, HeadNav, HeaderSwiper, TimeMain, Header},
  data(){
    return{
      good:[],
      swiper:[],
      names:['新品首发','新品首发','新品首发','新品首发','新品首发','新品首发','新品首发','新品首发']
    }
  },
  created() {
    get("goods")
        .then(res=>{
          this.good=res.data.goods.data;
        }).catch(err=>{
      console.log(err)
    });
    get("index")
        .then(res=>{
          this.swiper=res.data.slides;
        }).catch(err=>{
      console.log(err)
    });
  },
}
</script>

<style scoped>
@import "../assets/iconfont.css";
.left{
  float: left;
  margin: 10px 20px;
  color:#fff;
}
.seach{
  padding: 3px;
  float: left;
  margin: 0 10px;
}
.message{
  margin: 10px 20px;
  float: right;
  color:#fff;
}
header{
  text-align: center;
  margin: 0 auto;
  overflow: hidden;
  background-color: #fc6341;
}
.time{
  margin:10px;
}
.fiction{
  color:#000;
  text-decoration: none;
}
h1{
  text-align: center;
  font-size: 26px;
}
</style>