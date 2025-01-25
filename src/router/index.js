import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '@/views/index.vue';
import Order from '@/views/Order.vue';
import Loyalty from '@/views/loyalty.vue';
import Details from '@/views/food-detail.vue';
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/order",
    name: "Order",
    component: Order,
  },
  {
    path: "/loyalty-points",
    name: "Loyalty",
    component: Loyalty,
  },
  {
    path: "/order/details",
    name: "Details",
    component: Details,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
