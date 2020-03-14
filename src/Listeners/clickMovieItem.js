import { Api } from "../Api/Api";
import { detailMovie } from "../templates/components/DetailMovie";
import { convertData } from "../until/convertData";
import { ERROR_FETCH } from "../varaibles/const";

export const clickMovieItem = async function(idMovie, idContainerElement) {
  const container = document.getElementById(idContainerElement);
  container.innerHTML = "";
  try {
    detailMovie.setDefaultProperties();
    let response_json = await Api.getDetailMovieById(idMovie);
    detailMovie.setMovie(convertData.getMovieDetail(response_json));
    container.appendChild(detailMovie.getHtmlForDetalMovie());
    setTimeout(async () => {
      response_json = await Api.getRecommendationByMovieId(idMovie);
      detailMovie.setRecommendationsForMovie(
        convertData.getRecommendationsMovie(response_json.results)
      );
    }, 1000);
  } catch (error) {
    const textNode = document.createTextNode(ERROR_FETCH);
    container.append(textNode);
    console.error(error);
  }
};
