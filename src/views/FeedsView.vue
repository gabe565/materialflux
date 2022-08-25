<template>
  <v-container>
    <v-row class="py-5">
      <v-col class="flex-grow-1">
        <h1 class="text-h4">
          Feeds
          <span v-if="miniflux.feeds.length > 0"
            >({{ miniflux.feeds.length }})</span
          >
        </h1>
      </v-col>
      <v-col class="flex-grow-0">
        <v-btn prepend-icon="fa-solid fa-plus">
          Add Subscription
          <!--          <feed-dialog action="Add" activator="parent" />-->
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="feed in miniflux.feeds" :key="feed.id" cols="4">
        <feed-card :model-value="feed" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import FeedCard from "../components/feeds/FeedCard.vue";
import { useMinifluxStore } from "../stores/miniflux";

const miniflux = useMinifluxStore();
</script>
