import { Movie, Recommendation } from "../../Model/index";
import { config } from "../../config/config";
import {
  RECOMMENDATIONS_NOT_FOUND,
  LOADING,
  ID_RECOMMENDATIONS_BLOCK
} from "../../varaibles/const";

const isRecommendationClass = obj => {
  return obj instanceof Recommendation;
};

const isRecommendationArray = data => {
  return Array.isArray(data);
};

const createImage = url => {
  const img = document.createElement("img");
  if (url) {
    img.setAttribute("src", `${config.baseUrlImage}${url}`);
  } else {
    img.setAttribute("src", `${config.imageNotFound}`);
  }
  img.setAttribute("width", "200px");
  img.setAttribute("height", "300px");
  img.setAttribute("alt", "image");
  return img;
};

const createTitle = title => {
  const h1 = document.createElement("h1");
  h1.innerText = title;
  return h1;
};

const createDescription = description => {
  const paragraph = document.createElement("p");
  paragraph.innerText = description;
  return paragraph;
};

const commonCodeCreateRecommendationHtml = data => {
  if (data.length === 0) {
    return document.createTextNode(RECOMMENDATIONS_NOT_FOUND);
  } else if (data.length > 0) {
    const ul = document.createElement("ul");
    let li;
    data.forEach(recom => {
      li = document.createElement("li");
      li.innerText = recom.title;
      ul.appendChild(li);
    });
    return ul;
  }
};

const createRecommendations = recommendations => {
  const div = document.createElement("div");
  const recomBlock = document.createElement("div");
  recomBlock.setAttribute("id", ID_RECOMMENDATIONS_BLOCK);
  const h1 = document.createElement("h4");
  h1.innerText = "Recommendations";

  div.appendChild(h1);
  div.appendChild(recomBlock);

  if (recommendations === null) {
    recomBlock.appendChild(document.createTextNode(LOADING));
    return div;
  } else if (isRecommendationArray(recommendations)) {
    recomBlock.appendChild(commonCodeCreateRecommendationHtml(recommendations));
  } else {
    throw Error("Parameter 'recommendations' is wrong");
  }
};

const changeRecommendations = recommendations => {
  const recomBlock = document.getElementById(ID_RECOMMENDATIONS_BLOCK);
  recomBlock.innerHTML = "";

  if (Array.isArray(recommendations) && recommendations.length === 0) {
    recomBlock.appendChild(document.createTextNode(RECOMMENDATIONS_NOT_FOUND));
  } else if (Array.isArray(recommendations) && recommendations.length > 0) {
    const ul = document.createElement("ul");
    let li;
    recommendations.forEach(recom => {
      li = document.createElement("li");
      li.innerText = recom.title;
      ul.appendChild(li);
    });
    recomBlock.appendChild(ul);
  }
  return;
};

class DetailMovie {
  constructor() {
    this.movie = null;
    this.addElementInView = false;
  }

  setMovie(data) {
    if (data instanceof Movie) {
      this.movie = data;
      this.addedBasicPropertiesMovie = true;
    } else {
      throw Error("Incorrectly transmitted data");
    }
  }

  setDefaultProperties() {
    this.movie = null;
    this.addedBasicPropertiesMovie = false;
  }

  setRecommendationsForMovie(recommendations) {
    if (this.addedBasicPropertiesMovie) {
      if (Array.isArray(recommendations)) {
        if (recommendations.every(isRecommendationClass)) {
          this.movie.recommendations = recommendations;
          changeRecommendations(this.movie.recommendations);
          return;
        } else {
          this.movie.recommendations = null;
          throw Error("Array element (s) must be of type Recommendation");
        }
      } else {
        this.movie.recommendations = null;
        throw Error("Recommendations must be array!");
      }
    } else {
      throw Error("First, set the basic properties of the movie!");
    }
  }

  getHtmlForDetalMovie() {
    const div = document.createElement("div");
    div.appendChild(createImage(this.movie.img));
    div.appendChild(createTitle(this.movie.title));
    div.appendChild(createDescription(this.movie.description));
    div.appendChild(createRecommendations(this.movie.recommendations));
    return div;
  }
}

export const detailMovie = new DetailMovie();
