import { Api } from "../Api/Api";
import { convertData } from "../until/convertData";
import { listMovies } from "../templates/components/ListMovies";
import { ERROR_SEARCH_MOVIE, ERROR_FETCH } from "../varaibles/const";

export const clickSearchButton = async function(
  idListenElement,
  idContainerElement
) {
  listMovies.setDefaulProperties();
  const el = document.getElementById(idListenElement);
  const container = document.getElementById(idContainerElement);
  container.innerHTML = "";

  let searchText = el.value;
  el.value = "";
  searchText = searchText ? searchText.trim() : null;
  if (searchText) {
    try {
      const response_json = await Api.getListMovies(searchText);
      listMovies.setMovies(convertData.getListMovies(response_json.results));
      container.appendChild(listMovies.getHtmlForMovies());
    } catch(error) {
      console.error(error);
      const textNode = document.createTextNode(ERROR_FETCH);
      container.append(textNode);
    }
  } else {
    const textNode = document.createTextNode(ERROR_SEARCH_MOVIE);
    container.append(textNode);
  }
};
