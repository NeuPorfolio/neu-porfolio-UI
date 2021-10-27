<template>
<div style="overflow: hidden">
  <el-tabs class="tabBox" v-model="activeName">
    <el-tab-pane label="我的公告" name="myNotice">
      <notice :notice-list="noticeList"></notice>
    </el-tab-pane>
    <el-tab-pane label="发布公告" name="announce">
      <Announce></Announce>
    </el-tab-pane>
  </el-tabs>
</div>
</template>

<script>
import notice from '@/components/common/notice.vue';
import Announce from '@/components/teacher/main/announce.vue';

export default {
  name: 'teacherIndex',
  components: {
    Announce,
    notice,
  },
  data() {
    return {
      activeName: 'myNotice',
      noticeList: [
        {
          year: 2020,
          date: '7.8',
          content: '明天凯思考试，请老师们做好监考准备',
        },
        {
          year: 2020,
          date: '7.8',
          content: '明天凯思考试，请老师们做好监考准备',
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
