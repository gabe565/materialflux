export { Quasar } from "quasar";
import { Dialog, Notify } from "quasar";

// Import icon libraries
import quasarIconSet from "quasar/icon-set/svg-fontawesome-v5";
import "@quasar/extras/roboto-font/roboto-font.css";

// A few examples for animations from Animate.css:
// import @quasar/extras/animate/fadeIn.css
// import @quasar/extras/animate/fadeOut.css

// Import Quasar css
import "quasar/src/css/index.sass";

export const QuasarOptions = {
  plugins: { Dialog, Notify },
  iconSet: quasarIconSet,
};
