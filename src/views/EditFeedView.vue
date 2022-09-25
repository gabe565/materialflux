<template>
  <q-page padding class="q-px-xl">
    <div class="row justify-center">
      <div class="col col-lg-6">
        <h1 class="text-h4">{{ props.modelValue.title }}</h1>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col col-lg-6">
        <q-form @submit="submit">
          <q-select v-model="category" :options="categories" label="Category" />
          <q-input v-model="feed.title" label="Title" />
          <q-input v-model="feed.site_url" label="Site URL" />
          <q-input
            v-model="feed.feed_url"
            label="Feed URL *"
            :rules="[(val) => !!val || 'Field is required']"
          />
          <q-input v-model="feed.username" label="Feed Username" />
          <q-input
            v-model="feed.password"
            label="Feed Password"
            type="password"
          />
          <q-input
            v-model="feed.user_agent"
            label="Override Default User Agent"
          />
          <q-input v-model="feed.cookie" label="Set Cookies" />
          <q-input v-model="feed.scraper_rules" label="Scraper Rules">
            <template #append>
              <q-btn
                @click.stop
                href="https://miniflux.app/docs/rules.html#scraper-rules"
                target="_blank"
                :icon="fasCircleInfo"
                size="small"
                round
                flat
              />
            </template>
          </q-input>
          <q-input v-model="feed.rewrite_rules" label="Rewrite Rules">
            <template #append>
              <q-btn
                @click.stop
                href="https://miniflux.app/docs/rules.html#rewrite-rules"
                target="_blank"
                :icon="fasCircleInfo"
                size="small"
                round
                flat
              />
            </template>
          </q-input>
          <q-input v-model="feed.blocklist_rules" label="Block Rules">
            <template #append>
              <q-btn
                @click.stop
                href="https://miniflux.app/docs/rules.html#block-rules"
                target="_blank"
                :icon="fasCircleInfo"
                size="small"
                round
                flat
              />
            </template>
          </q-input>
          <q-input v-model="feed.keeplist_rules" label="Keep Rules">
            <template #append>
              <q-btn
                @click.stop
                href="https://miniflux.app/docs/rules.html#keep-rules"
                target="_blank"
                :icon="fasCircleInfo"
                size="small"
                round
                flat
              />
            </template>
          </q-input>
          <q-input v-model="feed.urlrewrite_rules" label="URL Rewrite Rules">
            <template #append>
              <q-btn
                @click.stop
                href="https://miniflux.app/docs/rules.html#rewriteurl-rules"
                target="_blank"
                :icon="fasCircleInfo"
                size="small"
                round
                flat
              />
            </template>
          </q-input>
          <q-checkbox v-model="feed.crawler" label="Fetch Original Content" />
          <q-checkbox
            v-model="feed.ignore_http_cache"
            label="Ignore HTTP Cache"
          />
          <q-checkbox
            v-model="feed.allow_self_signed_certificates"
            label="Allow self-signed or invalid certificates"
          />
          <q-checkbox
            v-model="feed.disabled"
            label="Do not refresh this feed"
          />
          <q-checkbox
            v-model="feed.hide_globally"
            label="Hide entries in global unread list"
          />

          <div class="flex flex-center q-py-lg">
            <q-btn
              label="Submit"
              type="submit"
              color="primary"
              :loading="loading"
            />
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { computed, defineProps, nextTick, ref, watchEffect } from "vue";
import { fasCircleInfo } from "@quasar/extras/fontawesome-v6";
import { useMinifluxStore } from "../stores/miniflux";
import { updateFeed } from "../miniflux/feeds";
import router from "../router";
import { useQuasar } from "quasar";

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({
      category: {},
    }),
  },
});

const feed = ref(null);
watchEffect(() => {
  feed.value = { ...props.modelValue };
});

const miniflux = useMinifluxStore();
const category = computed({
  get: () => {
    const { category } = feed.value;
    return { label: category.title, value: category.id };
  },
  set: (val) => {
    feed.value.category = miniflux.categories.find((e) => e.id === val.value);
  },
});
const categories = computed(() =>
  miniflux.categories.map((e) => ({ label: e.title, value: e.id }))
);

const $q = useQuasar();
const loading = ref(false);
const submit = async () => {
  loading.value = true;
  try {
    await updateFeed(feed.value);
    $q.notify({
      progress: true,
      type: "positive",
      message: `Updated ${feed.value.title}`,
    });
    await nextTick();
    await nextTick();
    await router.push({ name: "Feeds" });
  } catch (err) {
    $q.notify({
      progress: true,
      type: "negative",
      message: err.message,
    });
  } finally {
    loading.value = false;
  }
};
</script>
