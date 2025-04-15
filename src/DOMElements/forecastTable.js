import forecastDay from "./forecastDay";

export default function forecastTable(daysInfo) {
  const container = document.createElement("div");

  for (let dayInfo of daysInfo) {
    const dayDiv = forecastDay(dayInfo);
    container.appendChild(dayDiv);
  }

  return container;
}
