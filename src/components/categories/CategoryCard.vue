<template>
  <v-card elevation="4" :title="props.modelValue.title">
    <template #subtitle>
      <v-card-subtitle> {{ props.feedCount }} feeds </v-card-subtitle>
    </template>
    <v-card-actions>
      <v-spacer />

      <v-btn icon v-bind="props">
        <v-icon>mdi-file-document-multiple</v-icon>
        <v-tooltip location="bottom" activator="parent">
          <span>Articles</span>
        </v-tooltip>
      </v-btn>

      <v-btn icon v-bind="props">
        <v-icon>mdi-rss</v-icon>
        <v-tooltip location="bottom" activator="parent">
          <span>Subscriptions</span>
        </v-tooltip>
      </v-btn>

      <v-btn icon v-bind="props">
        <v-icon>mdi-pencil</v-icon>
        <v-tooltip location="bottom" activator="parent">
          <span>Edit</span>
        </v-tooltip>
      </v-btn>

      <v-btn icon v-bind="props">
        <v-icon>mdi-check-circle-outline</v-icon>
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
