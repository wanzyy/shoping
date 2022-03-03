<template>
  <div>
    <div class="head">
      <h2>低价秒杀</h2>
      <div id="time">
        <div class="time">
          <span>{{hour}}</span>:
          <span>{{minute}}</span>:
          <span>{{seconds}}</span>
        </div>
      </div>
      <a href="#">更多秒杀&gt&gt</a>
    </div>
    <div class="div">
      <ul class="box">
        <li class="box1"  v-for="item in times">
          <a><img :src="item.cover_url" :alt="item.title">
            <p>￥{{item.price}}</p></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeMain",
  data() {
    return {
      hour: "",
      minute: "",
      seconds: "",
      interval: "",
      countdownTime: 200
    }
  },
  props:{
    times:Array
  },
  mounted() {
    this.setTimer()
    this.setTimeData(this.countdownTime * 60 * 1000);
  },
  methods: {
    setTimeData(cm) {
      console.log(cm, '--cm');
      this.hour = Math.floor((cm / 1000 / 60 / 60) % 24);
      this.hour = this.hour.toString().length == 1 ? "0" + this.hour : this.hour;
      this.minute = Math.floor((cm / 1000 / 60) % 60);
      this.minute = this.minute.toString().length == 1 ? "0" + this.minute : this.minute;
      this.seconds = Math.floor((cm / 1000) % 60);
      this.seconds = this.seconds.toString().length == 1
          ? "0" + this.seconds
          : this.seconds;
    },
    setTimer() {
      let _this = this;
      this.interval = setInterval(function () {
        _this.payCountdown(_this.countdownTime * 60 * 1000);
        clearInterval(_this.interval);
      }, 1000);
    },
    payCountdown(cm) {
      let _this = this;

      if (cm >= 0 ) {
        this.hour = Math.floor((cm / 1000 / 60 / 60) % 24);
        this.hour =
            this.hour.toString().length == 1 ? "0" + this.hour : this.hour;
        this.minute = Math.floor((cm / 1000 / 60) % 60);
        this.minute =
            this.minute.toString().length == 1
                ? "0" + this.minute
                : this.minute;
        this.seconds = Math.floor((cm / 1000) % 60);
        this.seconds =
            this.seconds.toString().length == 1
                ? "0" + this.seconds
                : this.seconds;
        let _msThis = this;
        setTimeout(function () {
          cm -= 1000;
          _msThis.payCountdown(cm);
        }, 1000);
      }
    },
  }
}
</script>

<style scoped>
span{
  background-color: #fc6341;
  margin:0 5px;
}
.head{
  overflow: hidden;
  margin-top: 10px;
}
.head h2{
  float: left;
  font-size: 20px;
  margin: 0 5px;
}
.head #time{
  float: left;
  margin-left: 30px;
}
.head a{
  float: right;
  color: #fc6341;
  text-decoration: none;
  font-size: 16px;
  padding-right: 10px;
}
.div{
  overflow: hidden;
  height: 118px;
}
.box{
  padding: 10px 0;
  white-space: nowrap;
  overflow-y:auto;
}

.box1{
  width: 20%;
  height: 100px;
  background: #fff;
  display: inline-block;
}
.box1 a{
  text-align: center;
}
.box1 a p{
  color: #fc6341;
}
ul img{
  width: 60px;
  height:70px;
}
</style>