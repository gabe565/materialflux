import { createApp } from "vue";
import { Quasar } from "quasar";
import { Notify } from "quasar";
import quasarIconSet from "quasar/icon-set/svg-fontawesome-v5";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// Import icon libraries
import "@quasar/extras/roboto-font/roboto-font.css";

// A few examples for animations from Animate.css:
// import @quasar/extras/animate/fadeIn.css
// import @quasar/extras/animate/fadeOut.css

// Import Quasar css
import "quasar/src/css/index.sass";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(Quasar, {
  plugins: { Notify },
  iconSet: quasarIconSet,
});
app.mount("#app");
