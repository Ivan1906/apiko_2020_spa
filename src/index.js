import "./styles.css";
import { header } from "./templates/header";
import { main } from "./templates/main";
import { footer } from "./templates/footer";

function bootstrap() {
  const section = document.createElement("section");

  section.appendChild(header.create());
  section.appendChild(main.create());
  section.appendChild(footer.create());
  return section;
}

document.getElementById("app").appendChild(bootstrap());
