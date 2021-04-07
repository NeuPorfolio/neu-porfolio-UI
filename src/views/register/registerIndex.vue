<template>
  <div class="backgroud wrap flex">
    <div class="box">
      <p>请填写基本信息</p>
      <div class="imgbox">
        <img src="https://img.xiaopiu.com/userImages/img328164da748e08.jpeg" alt="head">
      </div>
      <form  action="#" class="mainbox flex" @submit.prevent="()=>false" @keydown.enter.prevent="registersubmit()">
        <input-text type="text" name="nick" v-model="baseInfo.nick" placeholder="昵称" @blur="isLegalNick" ref="nick"></input-text>
        <input-text type="text" name="email" placeholder="邮箱" v-model="baseInfo.email" @blur="isLegalEmail" ref="email"></input-text>
        <input-text type="password" name="password1" placeholder="密码" v-model="passwords.password1" @blur="password1Verify" ref="password1"></input-text>
        <input-text type="password" name="password2" placeholder="重复密码" v-model="passwords.password2" @blur="password1Verify" ref="password2"></input-text>
        <input-radio v-model="baseInfo.sex" v-bind:options="['男', '女']"></input-radio>
        <input class="submitinput" type="submit" @click="registersubmit()" value="注册">
      </form>
    </div>
  </div>
</template>

<script>
// todo 在baseInfo子组件点击下一步, 发送事件到父组件, 父组件执行函数,存入数据
import inputText from 'components/register/inputText.vue';
import InputRadio from 'components/register/inputRadio.vue';

export default {
  name: 'registerIndex',
  components: {
    InputRadio,
    inputText,
  },
  data() {
    return {
      title: 'NeuPorfolio',
      baseInfo: {
        nick: null,
        sex: null,
        email: null,
        password: null,
      },
      // 名称是否合法
      passwords: {
        password1: null,
        password2: null,
      },
      // todo 服务器返回的验证信息
      registerVerify: {
        nick: {
          legalNick: true,
          nickMessage: '您的昵称已被使用',
        },
        mail: {
          legalMail: true,
          mailMessage: '您的邮箱格式不正确',
        },
      },
    };
  },
  methods: {
    // 验证昵称
    isLegalNick() {
      if (!this.baseInfo.nick) {
        this.$refs.nick.showAlert('昵称不能为空');
      } else {
        this.$refs.nick.hideAlert();
      }
    },
    // 验证邮箱
    isLegalEmail() {
      const reger = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{1,5})$/;
      if (!this.baseInfo.email) {
        this.$refs.email.showAlert('邮箱不能为空！');
      } else if (!reger.test(this.baseInfo.email)) {
        this.$refs.email.showAlert('非法的邮件地址！');
      } else {
        this.$refs.email.hideAlert();
      }
    },
    // 验证密码
    password1Verify() {
      if (!this.passwords.password1) {
        this.$refs.password1.showAlert('密码不能为空！');
      } else {
        this.$refs.password1.hideAlert();
      }
      if (this.passwords.password1 !== this.passwords.password2) {
        this.$refs.password2.showAlert('密码不一致！');
      } else {
        this.$refs.password2.hideAlert();
        this.baseInfo.password = this.passwords.password2;
      }
    },
    // todo 修改为网络提交及验证
    registersubmit() {
      if (this.baseInfo.nick && this.baseInfo.sex && this.baseInfo.email && this.baseInfo.password) {
        console.log('提交');
        console.log(this.baseInfo);
      } else {
        console.log('验证失败');
        console.log(this.baseInfo);
      }
    },
  },
};
</script>

<style scoped lang="stylus">
@import "~assets/css/login/login-common.styl"
.backgroud{
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0,179,138,1);
}
.wrap {
  justify-content: center;
  align-items: center;
}
.box {
  background-color white;
  padding 18px;
  border-radius 5px;
  box-shadow 3px;
}
.imgbox {
  width:58px;
  height:58px;
  overflow:hidden;
  border-radius:50% 50%;
  margin 20px auto;
  img {
    width:100%;
    height:auto;
  }
}

.mainbox{
  flex-direction: column;
  padding:0 20px 25px 25px;
  .emailinput{
  }
  .emailverify {
  }
  .radio{
    width 130px;
    background-color: rgba(246, 246, 246, 1);
    padding 8px;
    align-items center;
  }
  .submitinput {
       margin-top 40px;
       padding: 8px 0;
       letter-spacing: 5px;
       border: none;
       border-radius: 2px;
       color: rgba(255,255,255,1);
       background-color: rgba(0, 179, 138, 1);
     }
}

</style>
