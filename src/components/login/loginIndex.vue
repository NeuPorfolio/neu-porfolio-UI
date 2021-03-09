<template>
<div>
  <form name="login" action="#" @submit.prevent="loginsubmit">
    <label for="name">用户名：</label>
    <input name="name" type="text" id="name" placeholder="请输入用户名" v-model="logindata.name">
    <label for="password">密码：</label>
    <input name="password" type="password" id="password" placeholder="请输入密码" v-model="logindata.password">
    <input type="submit" value="提交" >
  </form>
  <h2>{{logindata.name+"   "+logindata.password}}</h2>
  <button @click="$router.push('register')">点击注册</button>
</div>
</template>

<script>
export default {
  name: 'loginIndex',
  methods: {
    loginsubmit() {
      console.log(this.logindata.name + this.logindata.password);
      switch (this.logindata.name) {
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
      logindata: {
        name: null,
        password: null,
      },
    };
  },
};
</script>

<style scoped>

</style>
