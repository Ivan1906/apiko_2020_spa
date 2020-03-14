import { TEXT_MOVIE } from "../varaibles/const";

export const header = {
  create: () => {
    const headerElement = document.createElement("header");
    const h1Element = document.createElement("h1");
    const textNode = document.createTextNode(TEXT_MOVIE);

    h1Element.appendChild(textNode);
    headerElement.appendChild(h1Element);
    return headerElement;
  }
};
