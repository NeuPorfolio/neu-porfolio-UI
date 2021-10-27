import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    name: 'login',
    path: '/login',
    component: () => import(/* webpackChunkName: "loginindex" */ 'views/login/loginIndex'),
  },
  {
    name: 'register',
    path: '/register',
    component: () => import(/* webpackChunkName: "register" */ 'views/register/registerIndex'),
  },

  {
    name: 'complateinfo',
    path: '/complateinfo',
    component: () => import(/* webpackChunkName: "selectclass" */'views/register/selectclass'),
  },
  {
    path: '/student',
    component: () => import(/* webpackChunkName: "student" */ 'views/student/student'),
    children: [
      {
        name: 'index',
        path: 'index',
        component: () => import(/* webpackChunkName: "studentIndex" */ 'components/student/studentIndex'),
      },
      {
        name: 'course',
        path: 'course',
        component: () => import(/* webpackChunkName: "course" */ 'components/student/course'),
      },
      {
        name: 'question',
        path: 'question',
        component: () => import(/* webpackChunkName: "question" */ 'components/student/question'),
      },
      {
        name: 'homework',
        path: 'homework',
        component: () => import(/* webpackChunkName: "homework" */ 'components/student/homework'),
      },
      {
        name: 'studentYearlyReport',
        path: 'studentYearlyReport',
        component: () => import(/* webpackChunkName: "studentYearlyReport" */ 'components/student/studentYearlyReport'),
      },
    ],
  },
  {
    name: 'teacher',
    path: '/teacher',
    component: () => import(/* webpackChunkName: "teacher" */ 'views/teacher/teacher'),
    children: [
      {
        name: 'teacherIndex',
        path: 'index',
        component: () => import(/* webpackChunkName: "teacherIndex" */ 'components/teacher/teacherIndex'),
      },
      {
        name: 'managerClass',
        path: 'managerClass',
        component: () => import(/* webpackChunkName: "managerClass" */ 'components/teacher/managerClass'),
      },
      {
        name: 'issue',
        path: 'issue',
        component: () => import(/* webpackChunkName: "issue" */ 'components/teacher/issue'),
      },
      {
        name: 'mangerHomework',
        path: 'mangerHomework',
        component: () => import(/* webpackChunkName: "mangerHomework" */ 'components/teacher/mangerHomework'),
      },
      {
        name: 'teacherYearlyReport',
        path: 'teacherYearlyReport',
        component: () => import(/* webpackChunkName: "teacherYearlyReport" */ 'components/teacher/teacherYearlyReport'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import(/* webpackChunkName: "admin" */ 'views/admin/adminIndex'),
  },
  // {
  //   path: '/login',
  //   components:{
  //
  //   }
  // },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
