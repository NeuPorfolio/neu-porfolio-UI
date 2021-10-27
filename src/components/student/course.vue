<template>
  <div class="flex flex_direction_column flex_justify_content_center">
    <div class="curese" v-for="(item,index) in courseList" :key="index+item">
      <div>
        <img :src="item.img">
      </div>
      <div>
        {{item.name}}
      </div>
      <div>{{item.teacher}}</div>
      <el-button type="primary">去学习</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'course',
  data() {
    return {
      courseList: [
        {
          img: 'https://img.xiaopiu.com/userImages/img745164a2fc63d8.png',
          name: '大学英语II',
          teacher: 'Wang',
          address: 'http://www.neumooc.com/',
        },
        {
          img: 'https://img.xiaopiu.com/userImages/img751164a30c03d8.jpg',
          name: '大学英语II',
          teacher: 'Liu',
          address: 'http://www.neumooc.com/',
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
@import "~assets/css/login/login-common.styl";
.curese{
  width 50%;
  margin-top 20px;
  border-bottom 2px black;
    div{
      float left
      margin-left 20px;
    }
    button {
      margin-top 60px
      float right
      bottom 0
    }
}
</style>
