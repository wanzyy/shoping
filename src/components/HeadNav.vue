<template>
  <div class="div">
    <ul class="box">
      <li class="box1" v-for="(item,index) in nav" :key="index">
        <a href="#">{{item}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HeadNav",
  data(){
    return{
      nav:['首页','礼品','美妆','女装','食品','酒水','图书','数码']
    }
  }
}
</script>

<style scoped>
.div{
  overflow: hidden;
  height: 45px;
}
.box{
  padding: 10px 0;
  white-space: nowrap;
  overflow-y:auto;
}

.box1{
  width: 20%;
  height: 30px;
  display: inline-block;
}
.box1 a{
  text-align: center;
  color:#fff;
  text-decoration: none;
}
</style>