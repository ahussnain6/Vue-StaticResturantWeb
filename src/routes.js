import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Cart from "./components/Cart.vue";
import Details from "./components/Details.vue";
const routes = [
  {
    name:"Home",
    path: "/",
    component: Home,
  },
  {
    name:"Cart",
    path: "/cart",
    component: Cart,
  },
  {
    name:"Details",
    path: "/details",
    component: Details,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
