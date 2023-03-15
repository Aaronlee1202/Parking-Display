import { createRouter, createWebHashHistory } from "vue-router";
import PolesView from "../views/PolesView.vue";
import EventsView from "../views/EventsView.vue";
import DesignView from "../views/DesignView.vue";

const routes = [
  {
    path: "/",
    name: "PolesView",
    component: PolesView,
    props: (route) => ({ query: route.query.id }),
  },
  {
    path: "/designView",
    name: "DesignView",
    component: DesignView,
    props: (route) => ({ query: route.query.id }),
  },
  {
    path: "/events",
    name: "EventsView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    component: EventsView,
    props: (route) => ({ query: route.query.id }),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
