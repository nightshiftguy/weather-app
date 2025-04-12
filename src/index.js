import "./styles.css";
import createAPILoader from "./APILoader";

const APILoader = createAPILoader();
APILoader.getInfo().then(APILoader.selectInfo).then(APILoader.showInfo);
const container = document.querySelector(".container");
const text = document.createElement("p");
text.textContent = "Hello World!";
container.appendChild(text);
