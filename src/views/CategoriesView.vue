<template>
  <v-container>
    <v-row class="py-5">
      <v-col class="flex-grow-1">
        <h1 class="text-h4">
          Categories
          <span v-if="categories.length > 0">({{ categories.length }})</span>
        </h1>
      </v-col>
      <v-col class="flex-grow-0">
        <v-btn prepend-icon="mdi-plus">Create Category</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-lazy
        tag="div"
        class="v-col v-col-4"
        v-for="category in categories"
        :key="category.id"
      >
        <category-card
          :model-value="category"
          :feed-count="feedCounts[category.id]"
        />
      </v-lazy>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getCategories } from "../miniflux/categories";
import CategoryCard from "../components/categories/CategoryCard.vue";
import { getFeeds } from "../miniflux/feeds";

const categories = ref([]);
const feedCounts = ref({});
onMounted(async () => {
  categories.value = await getCategories();
  const feeds = await getFeeds();
  for (const feed of feeds) {
    let count = feedCounts.value[feed.category.id] || 0;
    feedCounts.value[feed.category.id] = count + 1;
  }
});
</script>
