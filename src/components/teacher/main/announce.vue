<template>
<div>
  <textarea v-model="text" placeholder="请在此输入公告"></textarea>
  <div class="btn flex flex_justify_content_center">
    <el-button  @click="submit" type="primary" style="padding: 7px 13px">发布</el-button>
  </div>
<!--  <h2>asdfffffffffff</h2>-->
</div>
</template>

<script>
export default {
  name: 'announce',
  data() {
    return {
      text: '',
    };
  },

  methods: {
    // todo 修改为网络提交
    submit() {
      console.log(this.text);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import "~assets/css/login/login-common.styl"

  textarea {
    width: 700px;
    height: 200px;
    margin-top 20px;
    margin-bottom 20px;
  }
    .bnt{
      height 80px
    }
</style>
