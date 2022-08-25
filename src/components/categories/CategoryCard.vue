<template>
  <v-card elevation="4" :title="props.modelValue.title">
    <template #subtitle>
      <v-card-subtitle> {{ props.feedCount }} feeds </v-card-subtitle>
    </template>
    <v-card-actions>
      <v-spacer />

      <v-btn icon size="small">
        <v-icon>fa-solid fa-file</v-icon>
        <v-tooltip location="bottom" activator="parent">
          <span>Articles</span>
        </v-tooltip>
      </v-btn>

      <v-btn icon size="small">
        <v-icon>fa-solid fa-square-rss</v-icon>
        <v-tooltip location="bottom" activator="parent">
          <span>Subscriptions</span>
        </v-tooltip>
      </v-btn>

      <v-btn icon size="small">
        <v-icon>fa-solid fa-pencil</v-icon>
        <v-tooltip location="bottom" activator="parent">
          <span>Edit</span>
        </v-tooltip>
      </v-btn>

      <v-btn icon size="small">
        <v-icon>fa-solid fa-circle-check</v-icon>
        <v-tooltip location="bottom" activator="parent">
          <span>Mark all as read</span>
        </v-tooltip>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
  feedCount: {
    type: Number,
    default: 0,
  },
});
</script>
