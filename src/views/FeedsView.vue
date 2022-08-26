<template>
  <q-page padding class="q-px-xl">
    <div class="row">
      <div class="col">
        <h1 class="text-h4">
          Feeds
          <span v-if="miniflux.feeds.length > 0"
            >({{ miniflux.feeds.length }})</span
          >
        </h1>
      </div>
      <div class="col col-shrink self-center">
        <q-btn label="Add Subscription" :icon="fasPlus" />
      </div>
    </div>
    <div class="row q-col-gutter-lg">
      <div v-for="feed in miniflux.feeds" :key="feed.id" class="col col-4">
        <feed-card :model-value="feed" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { fasPlus } from "@quasar/extras/fontawesome-v6";
import FeedCard from "../components/feeds/FeedCard.vue";
import { useMinifluxStore } from "../stores/miniflux";

const miniflux = useMinifluxStore();
</script>
