<template>
  <q-card>
    <q-card-section>
      <div class="row items-center no-wrap">
        <div class="col">
          <div class="text-h6">{{ props.modelValue.title }}</div>
          <div class="text-subtitle2">{{ props.feedCount }} feeds</div>
        </div>
      </div>
    </q-card-section>

    <q-card-actions>
      <q-space />

      <q-btn :icon="fasFile" size="small" round flat>
        <q-tooltip location="bottom">Articles</q-tooltip>
      </q-btn>

      <q-btn :icon="fasSquareRss" size="small" round flat>
        <q-tooltip location="bottom">Subscriptions</q-tooltip>
      </q-btn>

      <q-btn :icon="fasPencil" size="small" round flat>
        <q-tooltip location="bottom">Edit</q-tooltip>
      </q-btn>

      <q-btn :icon="fasCircleCheck" size="small" round flat>
        <q-tooltip location="bottom">Mark all as read</q-tooltip>
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup>
import {
  fasFile,
  fasSquareRss,
  fasPencil,
  fasCircleCheck,
} from "@quasar/extras/fontawesome-v6";
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
