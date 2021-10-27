<template>
  <div>
    <el-row :gutter="12" v-for="item in list" :key="item">
      <el-col :span="8">
        <el-card shadow="always">
          {{item}}
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'studentYearlyReport',
  data() {
    return {
      list: [
        '你在2020年9月来到了这个平台',
        '你已学习 1000 小时了',
        '你已经向老师请教了 60 个问题',
        '高数这门课是你问题最多的课，看来高数给你带来了很多的困扰呢',
        '英语这门课是你问题最少的课，都已经全部掌握了么？',
        '你累计点击学习C语言课程最多次,看来对这么课很感兴趣呀',
        '你已经完成了 60 份作业啦',
        '你已经。。。',
        '真是勤学好问的好学生！',
      ],
      comment: '真是勤学好问的好学生！',
    };
  },
};
</script>

<style scoped>

</style>
