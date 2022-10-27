import { createRouter, createWebHistory } from 'vue-router';
import TodayPage from '@/views/Today';


const routes = [
  {
    path: "/",
    name: "today",
    component: TodayPage,
  },
  {
    path: "/tomorrow",
    name: "tomorrow",
    component: () => import("../views/Tomorrow"),
  },
  {
    path: "/week",
    name: "week",
    component: () => import("../views/Week"),
  },
  {
    path: "/month",
    name: "month",
    component: () => import("../views/Month"),
  },
  {
    path: "/year",
    name: "year",
    component: () => import("../views/Year"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
