export default function currentConditions(currentConditionsInfo) {
  const container = document.createElement("div");
  container.setAttribute("class", "current-conditions");

  const left = document.createElement("div");
  const addressParagraph = document.createElement("p");
  addressParagraph.textContent = currentConditionsInfo.address;
  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.textContent = currentConditionsInfo.description;
  left.appendChild(addressParagraph);
  left.appendChild(descriptionParagraph);

  const right = document.createElement("div");
  const iconParagraph = document.createElement("p");
  iconParagraph.textContent = currentConditionsInfo.icon;
  const temperatureParagraph = document.createElement("p");
  temperatureParagraph.textContent = currentConditionsInfo.temperature;
  right.appendChild(iconParagraph);
  right.appendChild(temperatureParagraph);

  container.appendChild(left);
  container.appendChild(right);

  return container;
}
