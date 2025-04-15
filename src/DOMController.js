import currentConditions from "./DOMElements/currentConditions";
import forecastTable from "./DOMElements/forecastTable";
import search from "./DOMElements/search";

export default function createDOMController(container) {
  const searchDiv = search();
  container.appendChild(searchDiv);

  const infoContainer = document.createElement("div");
  container.appendChild(infoContainer);

  function showLoading() {
    const loadingParagraph = document.createElement("p");
    loadingParagraph.textContent = "loading...";
    infoContainer.appendChild(loadingParagraph);
  }

  function showInfo(data) {
    infoContainer.textContent = "";
    if (!data) {
      const info = document.createElement("p");
      info.textContent = "No results found";
      infoContainer.appendChild(info);
    } else {
      const currentConditionsDiv = currentConditions(data.currentConditions);
      const forecastTableDiv = forecastTable(data.days);
      infoContainer.appendChild(currentConditionsDiv);
      infoContainer.appendChild(forecastTableDiv);
    }
  }
  return { showInfo, showLoading };
}
