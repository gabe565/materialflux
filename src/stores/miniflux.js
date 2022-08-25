import { defineStore } from "pinia";
import router from "../router";
import { ref } from "vue";
import { getMe } from "../miniflux/me";

export const useMinifluxStore = defineStore(
  "miniflux",
  () => {
    const authenticated = ref(false);
    const host = ref("");
    const token = ref("");
    const me = ref({});

    const login = async () => {
      me.value = await getMe();
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
      login,
      logout,
    };
  },
  {
    persist: {
      paths: ["authenticated", "host", "token"],
      afterRestore: async (ctx) => {
        const { store } = ctx;
        if (store.authenticated) {
          await store.login();
        }
      },
    },
  }
);
