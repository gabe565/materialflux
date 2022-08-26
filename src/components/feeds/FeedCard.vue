<template>
  <q-card>
    <q-card-section>
      <div class="row items-center no-wrap">
        <div class="col">
          <div class="text-h6 ellipsis">{{ props.modelValue.title }}</div>
          <a
            :href="props.modelValue.site_url"
            target="_blank"
            class="text-subtitle2 text-blue-grey-9 block ellipsis"
            >{{ props.modelValue.site_url }}</a
          >
        </div>
      </div>
    </q-card-section>

    <q-card-actions>
      <q-space />

      <q-btn
        @click="refresh(props.modelValue)"
        :loading="refreshing"
        :color="error ? 'red' : ''"
        :icon="fasRotate"
        size="small"
        round
        flat
      >
        <q-tooltip>Refresh</q-tooltip>
      </q-btn>

      <q-btn :icon="fasPencil" size="small" round flat>
        <q-tooltip>Edit</q-tooltip>
        <!--        <feed-dialog-->
        <!--          action="Edit"-->
        <!--          activator="parent"-->
        <!--          :model-value="props.modelValue"-->
        <!--        />-->
      </q-btn>

      <q-btn :icon="fasTrash" size="small" round flat>
        <q-tooltip>Delete</q-tooltip>
        <!--        <delete-feed-dialog-->
        <!--          :model-value="props.modelValue"-->
        <!--          activator="parent"-->
        <!--        />-->
      </q-btn>

      <q-btn :icon="fasCircleCheck" size="small" round flat>
        <q-tooltip>Mark all as read</q-tooltip>
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup>
import {
  fasRotate,
  fasPencil,
  fasTrash,
  fasCircleCheck,
} from "@quasar/extras/fontawesome-v6";
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
