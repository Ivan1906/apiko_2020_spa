import { ID_CONTAINER } from "../varaibles/const";

export const footer = {
  create: () => {
    const divElement = document.createElement("div");
    divElement.setAttribute("id", ID_CONTAINER);
    return divElement;
  }
};
