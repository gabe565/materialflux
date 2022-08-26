<template>
  <q-page padding class="q-px-xl">
    <h1 class="text-h4">Settings</h1>
    <q-btn
      :href="`${miniflux.host}/settings`"
      target="_blank"
      :icon="fasGear"
      label="Open Miniflux settings"
    />
  </q-page>
</template>

<script setup>
import { fasGear } from "@quasar/extras/fontawesome-v6";
import { useMinifluxStore } from "../stores/miniflux";

const miniflux = useMinifluxStore();
</script>
