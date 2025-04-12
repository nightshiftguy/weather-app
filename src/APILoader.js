export default function createAPILoader() {
  const API_KEY = "X4W8BFTX4LH6RCM39R47N54P5";
  async function getInfo(location = "Kraków") {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}&unitGroup=metric`,
      { mode: "cors" },
    );
    const weatherData = await response.json();
    return weatherData;
  }

  function selectInfo(data) {
    let selectedData = { currentConditions: {}, days: [] };

    data.days.forEach((day) => {
      selectedData.days.push({
        date: day.datetime,
        icon: day.icon,
        temperature: day.temp,
        windSpeed: day.windspeed,
      });
    });

    Object.assign(selectedData.currentConditions, {
      address: data.resolvedAddress,
      description: data.description,
      icon: data.currentConditions.icon,
      temperature: data.currentConditions.temp,
    });

    return selectedData;
  }

  function showInfo(info) {
    console.log(info);
  }
  return { getInfo, selectInfo, showInfo };
}
