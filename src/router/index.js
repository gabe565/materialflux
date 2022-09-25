import { createRouter, createWebHistory } from "vue-router";
import UnreadView from "../views/UnreadView.vue";
import LoginView from "../views/LoginView.vue";
import SettingsView from "../views/SettingsView.vue";
import StarredView from "../views/StarredView.vue";
import HistoryView from "../views/HistoryView.vue";
import FeedsView from "../views/FeedsView.vue";
import EditFeedView from "../views/EditFeedView.vue";
import CategoriesView from "../views/CategoriesView.vue";
import { useMinifluxStore } from "../stores/miniflux";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: { name: "Unread" },
    },
    {
      path: "/login",
      name: "Login",
      component: LoginView,
    },
    {
      path: "/unread",
      name: "Unread",
      component: UnreadView,
    },
    {
      path: "/starred",
      name: "Starred",
      component: StarredView,
    },
    {
      path: "/history",
      name: "History",
      component: HistoryView,
    },
    {
      path: "/feeds",
      name: "Feeds",
      component: FeedsView,
    },
    {
      path: "/feed/:id/edit",
      name: "Edit Feed",
      component: EditFeedView,
      props: ({ params }) => {
        const id = Number(params.id);
        const miniflux = useMinifluxStore();
        const feed = miniflux.feeds.find((e) => e.id === id);
        return { modelValue: feed };
      },
    },
    {
      path: "/categories",
      name: "Categories",
      component: CategoriesView,
    },
    {
      path: "/settings",
      name: "Settings",
      component: SettingsView,
    },
    {
      path: "/logout",
      name: "Logout",
      beforeEnter: async () => {
        const miniflux = useMinifluxStore();
        await miniflux.logout();
      },
    },
  ],
});

router.beforeEach(async (to) => {
  const miniflux = useMinifluxStore();
  if (!miniflux.authenticated && to.name !== "Login") {
    return { name: "Login" };
  }
});

export default router;
