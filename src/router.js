import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("./views/Home/index.vue"),
      children: [
        {
          path: "main",
          component: () => import("./views/Home/main.vue")
        },
        {
          path: "category",
          component: () => import("./views/Home/category.vue")
        },
        {
          path: "search",
          component: () => import("./views/Home/search.vue")
        },
        {
          path: "person",
          component: () => import("./views/Home/person.vue")
        },
        {
          //默认跳转到首页
          path: "",
          redirect: "/main"
        }
      ]
    },
    {
      path: "/city",
      component: () => import("./views/City/index.vue")
    },
    {
      path: "/subject",
      component: () => import("./views/Details/subject.vue")
    },
    {
      path: "/ticket",
      component: () => import("./views/Details/ticket.vue")
    },
    {
      path: "/venue",
      component: () => import("./views/Details/venue.vue")
    },
    {
      path: "/login",
      component: () => import("./views/User/login.vue")
    },
    {
      path: "/profile",
      component: () => import("./views/User/profile.vue")
    },
    {
      path: "/register",
      component: () => import("./views/User/register.vue")
    }
  ]
});
