<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item>
        <template #prepend>
          <v-avatar rounded="0" start>
            <v-img :src="logo" responsive />
          </v-avatar>
        </template>

        <v-list-item-title>
          {{ miniflux.me?.username }}
        </v-list-item-title>
        <v-list-item-subtitle>
          <a :href="miniflux.host" target="_blank">{{ miniflux.host }}</a>
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list
      density="compact"
      nav
      :disabled="!miniflux.authenticated"
      :selected="[route.name]"
      @update:selected="updatePage"
    >
      <v-list-item v-for="item in pages" :key="item.value" v-bind="item" />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useMinifluxStore } from "../stores/miniflux";
import logo from "../assets/miniflux.svg";
import router from "../router";

const pages = [
  {
    title: "Unread",
    value: "Unread",
    "prepend-icon": "mdi-email",
  },
  {
    title: "Starred",
    value: "Starred",
    "prepend-icon": "mdi-star",
  },
  {
    title: "History",
    value: "History",
    "prepend-icon": "mdi-history",
  },
  {
    title: "Feeds",
    value: "Feeds",
    "prepend-icon": "mdi-rss",
  },
  {
    title: "Categories",
    value: "Categories",
    "prepend-icon": "mdi-shape",
  },
  {
    title: "Settings",
    value: "Settings",
    "prepend-icon": "mdi-cog",
  },
  {
    title: "Logout",
    value: "Logout",
    "prepend-icon": "mdi-logout",
  },
];

const miniflux = useMinifluxStore();

const route = useRoute();
const updatePage = async (event) => {
  if (event.length > 0) {
    await router.push({ name: event[0] });
  }
};
</script>
