const getHouses = async () => {
    const  url = "https://portiaportia.github.io/json/house-plans.json";

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
    console.log(error);
    }
};

const showHouse = async () => {
let houses = await getHouses();
let housesSection = document.getElementById("houses-section");

houses.forEach(house => {
    housesSection.append(getHouseItem(house));
});
};

const getHouseItem = house => {

    let head = document.createElement("head")
    head.classList.add("house-item");
    
    let section = document.createElement("section");
    section.classList.add("house-item");

    let h3 = document.createElement("h3");
    h3.innerText = house.name;
    section.appendChild(h3);

    let imgMain = document.createElement("img");
    imgMain.src = `https://portiaportia.github.io/json/images/house-plans/${house.main_image}`;
    section.appendChild(imgMain);

    let details = document.createElement("div");
    details.classList.add("details");

    let pSize = document.createElement("p");
    pSize.innerText = `Size: ${house.size} square ft`;
    details.appendChild(pSize);

    let pBedrooms = document.createElement("p");
    pBedrooms.innerText = `Bedrooms: ${house.bedrooms}`;
    details.appendChild(pBedrooms);

    let pBathrooms = document.createElement("p");
    pBathrooms.innerText = `Bathrooms: ${house.bathrooms}`;
    details.appendChild(pBathrooms);

    let pFeatures = document.createElement("p");
    pFeatures.innerText = `Features: ${house.features.join(" * ")}`;
    details.appendChild(pFeatures);

    let floorPlansContainer = document.createElement("div");
    floorPlansContainer.classList.add("floor-plans-container");

    house.floor_plans.forEach(floorPlan => {
        let floorPlanName = document.createElement("p");
        floorPlanName.innerText = floorPlan.name;
        
        let imgFloorPlan = document.createElement("img");
        imgFloorPlan.src = `https://portiaportia.github.io/json/images/house-plans/${floorPlan.image}`;
        floorPlansContainer.appendChild(imgFloorPlan);
    });

    section.appendChild(details);
    section.appendChild(floorPlansContainer);

    return section;
}

window.onload = () => showHouse();