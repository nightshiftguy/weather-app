export default function forecastDay(dayInfo){
    const container = document.createElement('div');
    for(let info in dayInfo) {
        const infoParagraph = document.createElement("p");
        infoParagraph.textContent=dayInfo[info];
        container.appendChild(infoParagraph);
    }

    return container;
}