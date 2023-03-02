import { createRouter, createWebHashHistory } from "vue-router";
import PolesView from "../views/PolesView.vue";
import EventsView from "../views/EventsView.vue";

const routes = [
  {
    path: "/",
    name: "PolesView",
    component: PolesView,
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
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;