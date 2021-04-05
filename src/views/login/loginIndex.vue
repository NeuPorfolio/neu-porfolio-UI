<template>
<div>
  <div class="backgroud"/>
  <div class="wrap box flex">
      <form  class="mainbox flex" name="login" action="#" @submit.prevent="()=>false" @keydown.enter.prevent="loginsubmit">
        <div class="tittle">{{title}}</div>
        <input name="email" type="text" id="email" placeholder="请输入常用手机号/邮箱" v-model="logindata.email">
        <input name="password" type="password" id="password" placeholder="请输入密码" v-model="logindata.password">
        <div class="message" v-if="loginVerify.isError">{{ loginVerify.message }}</div>
        <div class="flex forget">
          <button class="button_to_a" @click="$router.push('register')">点击注册</button>
          <button class="button_to_a" >忘记密码?</button>
        </div>
        <input type="submit" @click="loginsubmit" value="登录">
      </form>
  </div>
</div>
</template>

<script>
export default {
  name: 'loginIndex',
  methods: {
    // todo 登录判断及提交(网络)
    loginsubmit() {
      console.log(`提交：${this.logindata.email}${this.logindata.password}`);
      this.loginVerify = {
        isError: true,
        message: '密码错误！',
      };
      switch (this.logindata.email) {
        case 'student':
          this.$router.push('/student'); break;
        case 'teacher':
          this.$router.push('/teacher'); break;
        case 'admin':
          this.$router.push('/admin'); break;
        default:
      }
    },
  },
  data() {
    return {
      title: 'NeuPorfolio',
      logindata: {
        email: null,
        password: null,
      },
      loginVerify: {
        isError: false,
        message: '',
      },
    };
  },
};
</script>

<style scoped lang="stylus">
@import "~assets/css/login/login-common.styl"
.backgroud{
  position: absolute;
  height: 50%;
  width: 100%;
  background-color: rgba(0, 156, 179, 1);
  z-index: -1;
}
.wrap{
  position: absolute;
  width: 100%;
  height: 100%;
}
.box{
  justify-content: center;
  align-items: center;
}
.mainbox{
  background-color: white;
  flex-direction: column;
  padding: 90px 125px 100px 125px;
  border: 2px solid #ccc;
}
.tittle {
  position: relative;
  text-align: center;
  color: #009CB3;
  font-size: 25px;
  bottom: 20px;
}
.forget {
  justify-content: space-between;
}
.forget button[class=button_to_a]{
  color: #00b38a;
  font-size: 14px;
}
.mainbox input[type="text"]{
  padding: 8px 0;
  margin: 10px 0;
  width: 310px;
  font-size: 14px;
  color: rgba(166, 166, 166, 1);
  outline-style: none ;
  border-top-style: none;
  border-left-style: none;
  border-right-style: none;
  border-bottom-style: solid;
  border-bottom-color: #cccccc;
}
.mainbox input[type="password"] {
  @extend .mainbox input[type="text"];
  margin-bottom 0;
}
.mainbox input[type="submit"]{
  position: relative;
  top: 18px;
  padding: 15px 0;
  margin: 0;
  letter-spacing: 5px;
  /*width: 300px;*/
  background-color: rgba(0, 179, 138, 1);
  border: none;
  border-radius: 2px;
  color: rgba(255,255,255,1);
}
.message {
  color: red;
}
</style>
