<template>
  <v-card elevation="4" :title="props.modelValue.title">
    <template #subtitle>
      <v-card-subtitle>
        <a
          :href="props.modelValue.site_url"
          target="_blank"
          class="text-body-2 text-black"
        >
          {{ props.modelValue.site_url }}
        </a>
      </v-card-subtitle>
    </template>

    <v-card-actions>
      <v-spacer />

      <v-btn
        @click="refresh(props.modelValue)"
        :loading="refreshing"
        :color="error ? 'red' : ''"
        icon
        v-bind="props"
        size="small"
      >
        <v-icon>fa-solid fa-rotate</v-icon>
        <v-tooltip location="bottom" activator="parent">
          <span>Refresh</span>
        </v-tooltip>
      </v-btn>

      <v-btn icon v-bind="props" size="small">
        <v-icon>fa-solid fa-pencil</v-icon>
        <v-tooltip location="bottom" activator="parent">
          <span>Edit</span>
        </v-tooltip>
        <feed-dialog
          action="Edit"
          activator="parent"
          :model-value="props.modelValue"
        />
      </v-btn>

      <v-btn icon v-bind="props" size="small">
        <v-icon>fa-solid fa-trash</v-icon>
        <v-tooltip location="bottom" activator="parent">
          <span>Delete</span>
        </v-tooltip>
        <delete-feed-dialog
          :model-value="props.modelValue"
          activator="parent"
        />
      </v-btn>

      <v-btn icon v-bind="props" size="small">
        <v-icon>fa-solid fa-circle-check</v-icon>
        <v-tooltip location="bottom" activator="parent">
          <span>Mark all as read</span>
        </v-tooltip>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { defineProps, ref } from "vue";
import DeleteFeedDialog from "./DeleteFeedDialog.vue";
import FeedDialog from "./FeedDialog.vue";
import { refreshFeed } from "../../miniflux/feeds";

const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
});

const refreshing = ref(false);
const error = ref(null);
const refresh = async (feed) => {
  refreshing.value = true;
  try {
    await refreshFeed(feed.id);
  } catch (error) {
    console.error(error);
    error.value = error;
  } finally {
    refreshing.value = false;
    setTimeout(() => {
      error.value = null;
    }, 3000);
  }
};
</script>
