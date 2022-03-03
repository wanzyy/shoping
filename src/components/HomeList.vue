<template>
  <div class="warpper">
    <h1>品牌制作商直供</h1>
    <a class="warpper-a" href="#">查看全部&gt;</a>
    <ul>
      <li>
        <a href="#">
          <img src="../assets/pd-001.png">
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../assets/pd-002.png">
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../assets/pd-003.png">
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../assets/pd-004.png">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeList",
  props:{
    fication:Array
  }
}
</script>

<style scoped>
.warpper{
  margin:10px;
  border-radius: 5px;
  border:1px solid #ccc;
  padding:20px 10px;
}
h1{
  font-size: 20px;
  display: inline-block;
}
.warpper-a{
  float: right;
  text-decoration: none;
  color: #ccc;
}
ul{
  list-style-type: none;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
ul li a{
  float: left;
}
ul li a img{
  width: 150px;
  height: 100px;
  float: left;
}
</style>