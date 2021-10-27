<template>
  <div style="overflow: hidden">
    <el-tabs class="tabBox" v-model="activeName">
      <el-tab-pane label="我的公告" name="myNotice">
        <notice :notice-list="noticeList"></notice>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

import notice from '@/components/common/notice.vue';

export default {
  name: 'studentIndex',
  components: {
    notice,
  },
  data() {
    return {
      activeName: 'myNotice',
      noticeList: [
        {
          year: 2020,
          date: '7.8',
          content: '明天凯思考试，请大家提前调试好设备，第一场的同学9：55进入腾讯会议。第二场同学，10：50进腾讯会议。',
        },
        {
          year: 2020,
          date: '7.8',
          content: '明天凯思考试，请大家提前调试好设备，第一场的同学9：55进入腾讯会议。第二场同学，10：50进腾讯会议。',
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>

.tabBox{
  float left
  //overflow hidden
  //position relative
  z-index 0
  //float left
  margin-left 20px
}
</style>
