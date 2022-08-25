<template>
  <v-container class="fill-height">
    <h1 class="text-h4">Settings</h1>
    <v-container fluid>
      <v-btn
        :href="`${miniflux.host}/settings`"
        target="_blank"
        prepend-icon="mdi-cog"
        size="large"
        rounded
        >Open Miniflux settings</v-btn
      >
    </v-container>
  </v-container>
</template>

<script setup>
import { useMinifluxStore } from "../stores/miniflux";

const miniflux = useMinifluxStore();
</script>
