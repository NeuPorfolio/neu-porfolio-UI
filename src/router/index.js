import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/register',
    component: () => import(/* webpackChunkName: "register" */ 'components/register/registerIndex'),
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "loginindex" */ 'components/login/loginIndex'),
  },
  {
    path: '/student',
    component: () => import(/* webpackChunkName: "studentIndex" */ 'components/student/studentIndex'),
  },
  {
    path: '/teacher',
    component: () => import(/* webpackChunkName: "teacher" */ 'components/teacher/teacherIndex'),
  },
  {
    path: '/admin',
    component: () => import(/* webpackChunkName: "admin" */ 'components/admin/adminIndex'),
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
