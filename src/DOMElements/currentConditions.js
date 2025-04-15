export default function currentConditions(currentConditionsInfo) {
  const container = document.createElement("div");
  container.setAttribute("class", "current-conditions");

  const left = document.createElement("div");
  left.setAttribute("class", "left");
  const addressParagraph = document.createElement("p");
  addressParagraph.textContent = currentConditionsInfo.address;
  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.textContent = currentConditionsInfo.description;
  left.appendChild(addressParagraph);
  left.appendChild(descriptionParagraph);

  const right = document.createElement("div");
  right.setAttribute("class", "right");
  const img = document.createElement("img");
  img.setAttribute("class", "weather-icon");
  import(`../icons/${currentConditionsInfo.icon}.svg`).then((module) => {
    img.setAttribute("src", module.default);
  });
  container.appendChild(img);
  const temperatureParagraph = document.createElement("p");
  temperatureParagraph.textContent = currentConditionsInfo.temperature;
  right.appendChild(img);
  right.appendChild(temperatureParagraph);

  container.appendChild(left);
  container.appendChild(right);

  return container;
}
