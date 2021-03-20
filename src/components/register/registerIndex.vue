<template>
  <div class="backgroud">
    <h2>注册页面</h2>
    <button @click="$router.back()">返回</button>
  </div>
</template>

<script>
// todo 在baseInfo子组件点击下一步, 发送事件到父组件, 父组件执行函数,存入数据
export default {
  name: 'registerIndex',
  data() {
    return {
      baseInfo: {
        phone: null,
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
.backgroud{
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0,179,138,1);
}
</style>
