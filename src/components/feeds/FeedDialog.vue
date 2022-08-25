<template>
  <v-dialog v-model="show">
    <v-card :title="`${action} Feed`">
      <template #text>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="props.modelValue.title"
              label="Title"
            ></v-text-field>
          </v-form>
        </v-card-text>
      </template>
      <v-card-actions>
        <v-spacer />
        <v-btn prepend-icon="fa-solid fa-close" @click="show = false"
          >Cancel</v-btn
        >
        <v-btn prepend-icon="fa-solid fa-save" color="green">{{
          props.action
        }}</v-btn>
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
  action: {
    type: String,
    default: "",
  },
});

const show = ref(false);
</script>
