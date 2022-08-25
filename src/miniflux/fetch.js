import { useMinifluxStore } from "../stores/miniflux";

export const minifluxFetch = async (path, options) => {
  const miniflux = useMinifluxStore();

  const response = await fetch(`${miniflux.host}${path}`, {
    headers: {
      "X-Auth-Token": miniflux.token,
    },
    ...options,
  });

  let data;
  const contentType = response.headers.get("Content-Type");
  if (contentType && contentType.indexOf("application/json") !== -1) {
    data = await response.json();
    if (!response.ok) {
      throw new Error(data["error_message"]);
    }
  } else {
    data = await response.text();
    if (!response.ok) {
      throw new Error(data);
    }
  }

  return {
    data,
    response,
  };
};
