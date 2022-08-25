<template>
  <v-container fluid class="fill-height">
    <v-row justify="center" align-md="center" class="fill-height">
      <v-col cols="12" sm="8" lg="4">
        <v-card elevation="12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="doLogin">
              <v-text-field
                prepend-icon="mdi-web"
                name="host"
                label="Miniflux Server"
                type="text"
                variant="underlined"
                placeholder="https://"
                v-model="miniflux.host"
              />
              <v-text-field
                prepend-icon="mdi-lock"
                :append-icon="showToken ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showToken = !showToken"
                name="token"
                label="Token"
                :type="showToken ? 'text' : 'password'"
                variant="underlined"
                v-model="miniflux.token"
              />

              <v-expand-transition>
                <div v-show="error">
                  <v-alert
                    type="error"
                    closable
                    :model-value="true"
                    @update:model-value="error = null"
                  >
                    {{ error }}
                  </v-alert>
                </div>
              </v-expand-transition>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" type="submit" :loading="loading"
                  >Login</v-btn
                >
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, watch } from "vue";
import { useMinifluxStore } from "../stores/miniflux";
import router from "../router";

const miniflux = useMinifluxStore();

if (miniflux.authenticated) {
  router.replace({ name: "Unread", replace: true });
}

const showToken = ref(false);

const loading = ref(false);
const error = ref(null);
const doLogin = async () => {
  error.value = null;
  loading.value = true;
  try {
    await miniflux.login();
    await router.push({ name: "Unread" });
  } catch (e) {
    console.error(e);
    error.value = e;
  } finally {
    loading.value = false;
  }
};
</script>
