<template>
  <v-app>
    <navigation-drawer />
    <app-bar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import AppBar from "./components/AppBar.vue";
import NavigationDrawer from "./components/NavigationDrawer.vue";
</script>
