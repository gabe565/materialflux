import { minifluxFetch } from "./fetch";

export const getCategories = async () => {
  const { data } = await minifluxFetch("/v1/categories");
  return data;
};
