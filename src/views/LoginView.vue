<template>
  <q-page padding style="height: 1px">
    <div class="row justify-center full-height">
      <div class="col col-12 col-sm-7 col-md-4 self-center">
        <q-card>
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">Login</div>
          </q-card-section>

          <q-card-section>
            <q-form @submit.prevent="doLogin">
              <q-input
                name="host"
                label="Miniflux Server"
                type="text"
                variant="underlined"
                placeholder="https://"
                v-model="miniflux.host"
              >
                <template #prepend>
                  <q-icon :name="fasGlobe" />
                </template>
              </q-input>
              <q-input
                name="token"
                label="Token"
                :type="showToken ? 'text' : 'password'"
                variant="underlined"
                v-model="miniflux.token"
              >
                <template #prepend>
                  <q-icon :name="fasLock" />
                </template>
                <template #append>
                  <q-btn
                    :icon="showToken ? fasEyeSlash : fasEye"
                    @click="showToken = !showToken"
                    flat
                    round
                    size="small"
                  />
                </template>
              </q-input>

              <q-card-actions>
                <q-space />
                <q-btn color="primary" type="submit" :loading="loading"
                  >Login</q-btn
                >
              </q-card-actions>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import {
  fasGlobe,
  fasLock,
  fasEye,
  fasEyeSlash,
} from "@quasar/extras/fontawesome-v6";
import { ref } from "vue";
import { useMinifluxStore } from "../stores/miniflux";
import router from "../router";
import { useQuasar } from "quasar";

const miniflux = useMinifluxStore();

if (miniflux.authenticated) {
  router.replace({ name: "Unread", replace: true });
}

const showToken = ref(false);

const loading = ref(false);
const $q = useQuasar();
const doLogin = async () => {
  loading.value = true;
  try {
    await miniflux.login();
    await router.push({ name: "Unread" });
  } catch (e) {
    console.error(e);
    $q.notify({
      progress: true,
      type: "negative",
      message: e.message,
    });
  } finally {
    loading.value = false;
  }
};
</script>
