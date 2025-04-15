export default function forecastDay(dayInfo) {
  const container = document.createElement("div");
  for (let info in dayInfo) {
    if (info === "icon") {
      const img = document.createElement("img");
        img.setAttribute("class", "weather-icon");
        import(`../icons/${dayInfo[info]}.svg`).then((module) => {
        img.setAttribute("src", module.default);
    });
    container.appendChild(img);
    } else {
      const infoParagraph = document.createElement("p");
      infoParagraph.textContent = dayInfo[info];
      container.appendChild(infoParagraph);
    }
  }

  return container;
}
