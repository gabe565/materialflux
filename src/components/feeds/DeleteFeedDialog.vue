<template>
  <v-dialog v-model="show">
    <v-card title="Delete Feed?">
      <template #text>
        <v-card-text>
          Are you sure you want to delete
          <strong>{{ props.modelValue.title }}</strong
          >?
        </v-card-text>
      </template>
      <v-card-actions>
        <v-spacer />
        <v-btn prepend-icon="fa-solid fa-close" @click="show = false"
          >Cancel</v-btn
        >
        <v-btn prepend-icon="fa-solid fa-trash" color="red">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
});

const show = ref(false);
</script>
