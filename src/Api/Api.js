import { config } from "../config/config";

const fetchJSON = async url => {
  return await (await fetch(url)).json();
};

export const Api = {
  getListMovies: async search_text =>
    await fetchJSON(
      `${config.baseUrl}search/movie?api_key=${
        config.token
      }&query=${search_text}`
    ),
  getDetailMovieById: async id =>
    await fetchJSON(`${config.baseUrl}movie/${id}?api_key=${config.token}`),
  getRecommendationByMovieId: async id =>
    await fetchJSON(
      `${config.baseUrl}movie/${id}/recommendations?api_key=${config.token}`
    )
};
