import { clickSearchButton } from "../Listeners/clickSearchButton";
import { ID_INPUT_SEARCH_TEXT, ID_CONTAINER } from "../varaibles/const";

const MAIN = document.createElement("main");

const createInputElement = () => {
  const searchInput = document.createElement("input");
  searchInput.setAttribute("type", "text");
  searchInput.setAttribute("id", ID_INPUT_SEARCH_TEXT);
  searchInput.setAttribute("placeholder", "Enter movie name...");
  return searchInput;
};

const createButtonElement = () => {
  const searchButton = document.createElement("button");
  searchButton.setAttribute("class", "btn");
  searchButton.innerText = "Search movies";
  searchButton.addEventListener(
    "click",
    clickSearchButton.bind(null, ID_INPUT_SEARCH_TEXT, ID_CONTAINER)
  );
  return searchButton;
};

export const main = {
  create: () => {
    MAIN.appendChild(createInputElement());
    MAIN.appendChild(createButtonElement());
    return MAIN;
  }
};
