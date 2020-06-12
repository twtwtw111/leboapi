import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/user/Login.vue";

//用户路由
import Main from "../components/user/Main.vue";
import UserIndex from "../views/user/Index.vue";
import ParentView from "../views/user/ParentView.vue";
import AccountRecharge from "../views/user/account/recharge.vue";
Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/user",
    name: "用户",
    component: Main,
    redirect: '/user/index',
    children: [{
        path: "/user/index",
        name: "个人信息",
        component: UserIndex
      },
      {
        path: "/user/logout",
        name: "logout",
        redirect: '/user/index',
      },
      {
        path: "/user/account",
        name: "我的账户",
        component: ParentView,
        children: [{
          path: "/user/account/recharge",
          name: "账户充值",
          component: AccountRecharge,
        }]
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;