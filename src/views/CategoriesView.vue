<template>
  <v-container>
    <v-row class="py-5">
      <v-col class="flex-grow-1">
        <h1 class="text-h4">
          Categories
          <span v-if="miniflux.categories.length > 0"
            >({{ miniflux.categories.length }})</span
          >
        </h1>
      </v-col>
      <v-col class="flex-grow-0">
        <v-btn prepend-icon="fa-solid fa-plus">Create Category</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="category in miniflux.categories"
        :key="category.id"
        cols="4"
      >
        <category-card
          :model-value="category"
          :feed-count="feedCounts[category.id]"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
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
