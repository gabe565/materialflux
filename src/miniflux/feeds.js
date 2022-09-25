import { minifluxFetch } from "./fetch";
import { useMinifluxStore } from "../stores/miniflux";

export const getFeeds = async () => {
  const { data } = await minifluxFetch("/v1/feeds");
  return data;
};

export const getFeedIcon = async (id) => {
  const { data } = await minifluxFetch(`/v1/feeds/${id}/icon`);
  return data;
};

export const refreshFeed = (id) => {
  return minifluxFetch(`/v1/feeds/${id}/refresh`, { method: "PUT" });
};

export const newSubscription = async (options) => {
  const { data } = await minifluxFetch(`/v1/feeds`, {
    ...options,
    method: "POST",
  });
  return data;
};

export const updateFeed = async (feed) => {
  feed.category_id = feed.category?.id;
  const { data } = await minifluxFetch(`/v1/feeds/${feed.id}`, {
    method: "PUT",
    body: JSON.stringify(feed),
  });
  const miniflux = useMinifluxStore();
  const i = miniflux.feeds.findIndex((e) => e.id === data.id);
  miniflux.feeds[i] = data;
  return data;
};
