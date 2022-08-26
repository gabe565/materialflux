<template>
  <q-page padding class="q-px-xl">
    <div class="row py-5">
      <div class="col">
        <h1 class="text-h4">
          Categories
          <span v-if="miniflux.categories.length > 0"
            >({{ miniflux.categories.length }})</span
          >
        </h1>
      </div>
      <div class="col col-shrink self-center">
        <q-btn label="Create Category" :icon="fasPlus" />
      </div>
    </div>
    <div class="row q-col-gutter-lg">
      <div
        class="col col-4"
        v-for="category in miniflux.categories"
        :key="category.id"
      >
        <category-card
          :model-value="category"
          :feed-count="feedCounts[category.id]"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { fasPlus } from "@quasar/extras/fontawesome-v6";
import { computed } from "vue";
import CategoryCard from "../components/categories/CategoryCard.vue";
import { useMinifluxStore } from "../stores/miniflux";

const miniflux = useMinifluxStore();

const feedCounts = computed(() => {
  const counts = {};
  for (const feed of miniflux.feeds) {
    let count = counts[feed.category.id] || 0;
    counts[feed.category.id] = count + 1;
  }
  return counts;
});
</script>
