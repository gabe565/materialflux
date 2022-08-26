<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar>
      <template v-if="props.hasNav">
        <q-btn
          dense
          flat
          round
          :icon="fasBars"
          @click="$emit('drawer:toggle')"
          class="q-mr-sm"
        />
        <q-separator dark vertical inset class="q-mr-md" />
      </template>
      <q-avatar square>
        <img :src="logo" alt="Miniflux" />
      </q-avatar>
      <q-toolbar-title>Miniflux</q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { defineEmits } from "vue";
import logo from "../assets/miniflux.svg";

import { fasBars } from "@quasar/extras/fontawesome-v6";

const props = defineProps({
  hasNav: {
    type: Boolean,
    default: true,
  },
});

defineEmits(["drawer:toggle"]);
</script>
