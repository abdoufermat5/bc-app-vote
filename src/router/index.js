/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import Signin from "@/components/Signin";
import guest from "@/middleware/guest";
import store from "../store";
import auth from "@/middleware/auth";
import middlewarePipeline from "./middlewarePipeline";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      middleware: [auth]
    }
  },
  {
    path: "/login",
    name: "login",
    component: Signin,
    meta: {
      middleware: [guest]
    }
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }
  const middleware = to.meta.middleware;

  const context = {
    to,
    from,
    next,
    store
  };

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  });
});

export default router;
