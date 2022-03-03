<template>
  <div>
    <ul>
      <li v-for="(item,index) in list" :key="item.index">
        <router-link to="/details">
          <img :src="item.cover_url"  v-if="index<8">
          <p  v-if="index<8">{{item.title}}</p>
          <div class="count">
            <span   v-if="index<8">销量：{{item.sales}} </span>
            <span   v-if="index<8">收藏：{{item.collects_count}} </span>
          </div>
          <a class="only" href="#"  v-if="index<8">￥{{item.price}}</a>
        </router-link>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: "HoneGood",
  props:{
    list:Array
  }
}
</script>

<style scoped>
ul{
  list-style-type: none;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
ul li{
  float: left;
  text-align: center;
  padding:5px 3px;
  width: 165px;
  margin: 15px 7px;
  border:1px solid #ccc
}
ul li img{
  width: 120px;
  height: 150px;
}
ul li a{
  text-decoration: none;
  float: left;
  color: black;
}
ul li .only span{
  color:#ffffff;
  margin-left: 60px;
  padding: 5px 9px;
  background-color: #cccccc;
  border-radius: 5px;
  border: 1px solid #cccccc;
}
.only{
  color: #fc6341;
  margin-left: 10px;
}
.count{
  margin: 5px 0;
  overflow: hidden;
}
.count span{
  margin:5px 10px;
  float: left;
}
</style>