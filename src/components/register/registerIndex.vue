<template>
  <div>
    <h2>注册页面</h2>
  </div>
</template>

<script>
// todo 在baseInfo子组件点击下一步, 发送事件到父组件, 父组件执行函数,存入数据
export default {
  name: 'registerIndex',
  data() {
    return {
      baseInfo: {
        name: null,
        sex: null,
        mail: null,
        isstudent: true,

      },
    };
  },
};
</script>

<style scoped>

</style>
