<template>
  <q-layout view="hHh LpR fFf">
    <app-bar
      @drawer:toggle="showNav = !showNav"
      :has-nav="miniflux.authenticated"
    />
    <navigation-drawer v-model="showNav" v-if="miniflux.authenticated" />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import AppBar from "./components/AppBar.vue";
import NavigationDrawer from "./components/NavigationDrawer.vue";
import { useMinifluxStore } from "./stores/miniflux";

const miniflux = useMinifluxStore();

const showNav = ref(false);
</script>
