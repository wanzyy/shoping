<template>
  <div id="carouselExampleControls" class="carousel slide banner" data-bs-ride="carousel">
    <div class="carousel-inner zxc">
      <div class="carousel-item" v-for="(time,i) in img" :key="time.id" :class="{active:i==0}">
        <img  :src="time.img_url" class="d-block w-100" :alt="time.title">
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HeadSwiper",
  data(){
    return{

    }
  },
  props:{
    img:Array
  }
}
</script>

<style scoped>
img{
  height: 161px;
}
</style>