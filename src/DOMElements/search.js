export default function search(){
    const container = document.createElement("div");
    const label = document.createElement("label");
    label.setAttribute("for","location-search")
    label.textContent="Select location"

    const search = document.createElement("input");
    search.setAttribute("type","search")
    search.setAttribute("id","location-search")
    search.setAttribute("required","")

    const searchButton = document.createElement("button");
    searchButton.textContent="Search"
    searchButton.addEventListener("click",()=>{
        if(search.checkValidity()){
            const searchEvent = new CustomEvent("search-location", { detail: search.value, bubbles: true });
            searchButton.dispatchEvent(searchEvent);
        }
    })
    search.addEventListener("keyup",(event)=>{
        if(search.checkValidity() && event.key == "Enter"){
            const searchEvent = new CustomEvent("search-location", { detail: search.value, bubbles: true });
            searchButton.dispatchEvent(searchEvent);
        }
    })
    container.appendChild(label)
    container.appendChild(search)
    container.appendChild(searchButton)

    return container;
}