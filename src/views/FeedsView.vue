<template>
  <v-container>
    <v-row class="py-5">
      <v-col class="flex-grow-1">
        <h1 class="text-h4">
          Feeds
          <span v-if="feeds.length > 0">({{ feeds.length }})</span>
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
      <v-lazy
        tag="div"
        class="v-col v-col-4"
        v-for="feed in feeds"
        :key="feed.id"
      >
        <feed-card :model-value="feed" />
      </v-lazy>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getFeeds } from "../miniflux/feeds";
import FeedCard from "../components/feeds/FeedCard.vue";

const feeds = ref([]);
onMounted(async () => {
  feeds.value = await getFeeds();
});
</script>
