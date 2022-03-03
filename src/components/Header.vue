<template>
  <div>
    <slot name="left"></slot>
    <form method="post" action="#">
      <slot name="seach"></slot>
      <input type="text"  name="title" value="慵懒风">
    </form>
    <slot name="message"></slot>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
div{
  overflow: hidden;
  text-align: center;
  margin-top: 10px;
}
input{
  border:none;
  outline: none;
  color: #888888;
}
form{
  border-radius:15px;
  border:1px solid #fff;
  float: left;
  padding: 5px;
  margin: 0 9px;
  background-color: white;
}
</style>