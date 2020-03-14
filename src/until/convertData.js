import { Movie } from "../Model/Movie";
import { Recommendation } from "../Model";

export const convertData = {
  getListMovies: data =>
    data.map(
      movie =>
        new Movie(movie.id, movie.title, movie.overview, movie.poster_path)
    ),
  getMovieDetail: data =>
    new Movie(data.id, data.title, data.overview, data.poster_path, null),
  getRecommendationsMovie: data =>
    data.map(
      recommendation =>
        new Recommendation(recommendation.id, recommendation.title)
    )
};
