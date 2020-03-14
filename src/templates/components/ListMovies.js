import { Movie } from "../../Model/Movie";
import { clickMovieItem } from "../../Listeners/clickMovieItem";
import { ID_CONTAINER, NOT_FOUND_MOVIES } from "../../varaibles/const";

class ListMovies {
  constructor() {
    this.movies = null;
  }

  setDefaulProperties() {
    this.movies = null;
  }

  setMovies(data) {
    if (Array.isArray(data)) {
      if (data.length > 0) {
        this.movies = data;
      } else {
        this.movies = [];
      }
    } else {
      // ERROR!!!
      this.movies = null;
    }
  }

  getHtmlForMovies() {
    const ul = document.createElement("ul");
    let li;
    if (this.movies) {
      if (this.movies.length > 0) {
        this.movies.forEach(movie => {
          li = document.createElement("li");
          li.setAttribute("id", movie.id);
          li.addEventListener(
            "click",
            clickMovieItem.bind(null, movie.id, ID_CONTAINER)
          );
          li.innerText = movie.title;
          ul.appendChild(li);
        });
      } else {
        li = document.createElement("li");
        li.setAttribute("id", 0);
        li.innerText = NOT_FOUND_MOVIES;
        ul.appendChild(li);
      }
    }
    return ul;
  }
}

export const listMovies = new ListMovies();
