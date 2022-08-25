import { defineStore } from "pinia";
import router from "../router";
import { ref } from "vue";
import { getMe } from "../miniflux/me";
import { getFeeds } from "../miniflux/feeds";
import { getCategories } from "../miniflux/categories";

export const useMinifluxStore = defineStore(
  "miniflux",
  () => {
    const authenticated = ref(false);
    const host = ref("");
    const token = ref("");
    const me = ref({});
    const feeds = ref([]);
    const categories = ref([]);

    const refreshMe = async () => {
      me.value = await getMe();
    };

    const refreshFeeds = async () => {
      feeds.value = await getFeeds();
    };

    const refreshCategories = async () => {
      categories.value = await getCategories();
    };

    const refresh = () => {
      return Promise.all([refreshMe(), refreshFeeds(), refreshCategories()]);
    };

    const login = async () => {
      await refresh();
      authenticated.value = true;
    };

    const logout = async () => {
      token.value = "";
      me.value = {};
      authenticated.value = false;
      await router.push({ name: "Login" });
    };

    return {
      authenticated,
      host,
      token,
      me,
      feeds,
      categories,
      login,
      logout,
      refresh,
      refreshMe,
      refreshFeeds,
      refreshCategories,
    };
  },
  {
    persist: {
      paths: ["authenticated", "host", "token"],
      afterRestore: async (ctx) => {
        const { store } = ctx;
        if (store.authenticated) {
          await store.refresh();
        }
      },
    },
  }
);
