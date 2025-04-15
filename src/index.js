import "./styles.css";

const container = document.querySelector(".container");
import createAPILoader from "./APILoader";
import createDOMLoader from "./DOMLoader";
const DOMLoader = createDOMLoader(container);
const APILoader = createAPILoader();
container.addEventListener("search-location",(event)=>{
    DOMLoader.showLoading();
    APILoader.getInfo(event.detail).then(APILoader.selectInfo).then(DOMLoader.showInfo);
})


