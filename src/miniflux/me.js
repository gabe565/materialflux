import { minifluxFetch } from "./fetch";

export const getMe = async () => {
  const { data } = await minifluxFetch("/v1/me");
  return data;
};
