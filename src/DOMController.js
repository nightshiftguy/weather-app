import currentConditions from "./DOMElements/currentConditions";
import forecastTable from "./DOMElements/forecastTable";
import search from "./DOMElements/search";

export default function createDOMController(container){
    const searchDiv = search();
    container.appendChild(searchDiv)
    const loadingParagraph = document.createElement("p");
    function showLoading(){
        loadingParagraph.textContent="loading...";
        container.appendChild(loadingParagraph); 
    }

    function showInfo(data){
        container.textContent=""
        const currentConditionsDiv = currentConditions(data.currentConditions);
        const forecastTableDiv = forecastTable(data.days);
        container.appendChild(currentConditionsDiv);
        container.appendChild(forecastTableDiv);
    }
    return {showInfo, showLoading};
}