<template>
<div class="notice flex flex_align_items_center flex_justify_content_center flex_direction_column">
  <div style="margin-top: 20px" v-for="(item,index) in noticeList" :key="item+index" class="flex_direction_column flex_align_items_center flex_justify_content_center flex">
    <div class="time">
      <span>{{ item.year }}</span>-
      <span>{{ item.date }}</span>
    </div>
    <p>{{item.content}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'notice',
  props: {
    noticeList: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
@import "~assets/css/login/login-common.styl"
.notice{
  width 100%
  //margin-top 20px
  align-items center
  //justify-content center

    p{
      text-align center
    }
}
</style>
