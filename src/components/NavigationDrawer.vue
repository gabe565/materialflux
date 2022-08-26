<template>
  <q-drawer show-if-above side="left" :width="200">
    <q-scroll-area class="fit">
      <q-list padding class="menu-list">
        <template v-for="page in pages" :key="page.value">
          <q-item
            :disable="!miniflux.authenticated"
            clickable
            v-ripple
            :to="page.to"
          >
            <q-item-section avatar>
              <q-icon :name="page.icon" />
            </q-item-section>

            <q-item-section>{{ page.title }}</q-item-section>
          </q-item>
        </template>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup>
import { useMinifluxStore } from "../stores/miniflux";

import {
  fasEnvelope,
  fasStar,
  fasClockRotateLeft,
  fasSquareRss,
  fasShapes,
  fasGear,
  fasArrowRightFromBracket,
} from "@quasar/extras/fontawesome-v6";

const pages = [
  {
    title: "Unread",
    to: "/unread",
    icon: fasEnvelope,
  },
  {
    title: "Starred",
    to: "/starred",
    icon: fasStar,
  },
  {
    title: "History",
    to: "/history",
    icon: fasClockRotateLeft,
  },
  {
    title: "Feeds",
    to: "/feeds",
    icon: fasSquareRss,
  },
  {
    title: "Categories",
    to: "/categories",
    icon: fasShapes,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: fasGear,
  },
  {
    title: "Logout",
    to: "/Logout",
    icon: fasArrowRightFromBracket,
  },
];

const miniflux = useMinifluxStore();
</script>

<style lang="scss">
.menu-list .q-item {
  border-radius: 0 32px 32px 0;
}
</style>
