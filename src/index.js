import "./styles.css";

const container = document.querySelector(".container");
import createAPILoader from "./APILoader";
import createDOMLoader from "./DOMLoader";
const DOMLoader = createDOMLoader(container);
const APILoader = createAPILoader();
container.addEventListener("search-location",(event)=>{
    console.log(event.location)
    APILoader.getInfo(event.detail).then(APILoader.selectInfo).then(DOMLoader.showInfo);
})


