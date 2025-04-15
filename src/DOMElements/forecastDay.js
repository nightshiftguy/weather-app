export default function forecastDay(dayInfo){
    const container = document.createElement('div');
    for(let info in dayInfo) {
        if(info==="icon"){
            import(`../icons/${dayInfo[info]}.svg`).then((module)=>{
                console.log(module)
            })
        }
        else{
            const infoParagraph = document.createElement("p");
            infoParagraph.textContent=dayInfo[info];
            container.appendChild(infoParagraph);
        }
    }

    return container;
}