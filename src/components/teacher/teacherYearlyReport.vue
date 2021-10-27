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
  name: 'teacherYearlyReport',
  data() {
    return {
      list: [
        '您在2020年9月来到了这个平台',
        '您已工作 1000 小时了',
        '您已经给学生们回答了 60 个问题',
        '19001班的www提问次数最多，真是一个勤学好问的学生！',
        '19001班是问题最多的班，看来这个班比较好问呢',
        '19002班是问题最少的班，是都掌握了还是学生们不喜欢问问题呢？',
        '19001班点击学习课程次数是最多的',
        '你已经批改了 60 份作业啦',
        '老师辛苦啦了！！',
      ],
    };
  },
};
</script>

<style scoped>

</style>
