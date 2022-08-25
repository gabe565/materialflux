import { minifluxFetch } from "./fetch";

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
  const { data } = minifluxFetch(`/v1/feeds`, { ...options, method: "POST" });
  return data;
};
