<template>
  <div>
    <headBar ></headBar>
    <!--    <router-view></router-view>-->
    <el-container>
      <el-aside>
        <!--      <el-row>-->
        <!--        <el-col :span="3">-->
        <el-menu
          :default-active="this.$router.path"
          class="el-menu-vertical-demo"
          router mode="vertical"
          @open="handleOpen"
          @close="handleClose"
          text-color="#787D82"
          active-text-color="#D43030">
          <el-menu-item v-for="(item,i) in menulist" :key="i" :index="item.name">
            <template slot="title">
              <i class="el-icon-s-platform"></i>
              <span>{{item.menuItem}}</span>
            </template>
          </el-menu-item>
        </el-menu>
        <!--        </el-col>-->
        <!--      </el-row>-->
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>

  </div>
</template>

<script>

import headBar from '@/components/common/Header.vue';

export default {
  name: 'student',
  components: {
    headBar,
  },
  data() {
    return {
      menulist: [
        { name: '/student/index', menuItem: '首页' },
        { name: '/student/course', menuItem: '课程' },
        { name: '/student/question', menuItem: '提问' },
        { name: '/student/homework', menuItem: '作业' },
        { name: '/student/studentYearlyReport', menuItem: '年度报告' },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>

</style>
