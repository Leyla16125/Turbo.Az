const barsButton = document.getElementById("bars-button");
const barsMenu = document.getElementById("bars-menu");
const old = document.getElementById("old")
const all = document.getElementById("all")
const notold = document.getElementById("notold")
const yearElements = document.querySelectorAll(".year");
const marka = document.getElementById("marka")
const model = document.getElementById("model")
const city = document.getElementById("city")
const banType = document.getElementById ("banType")
const modelArr = Array.from(new Set (data.map (item => item.model))) 
const markaArr = Array.from(new Set (data.map (item => item.brand)))
const cityArr = Array.from(new Set (data.map (item => item.city))) 
const banTypeArr = Array.from(new Set (data.map (item => item.banType))) 






function toggleMenu() {
    document.getElementById("bars-menu").classList.toggle("hidden");
}

function red(id) {
    const buttons = document.querySelectorAll(".flex-1");
    buttons.forEach(button => {
        button.classList.remove("bg-[#b91c1c]", "text-white");
        button.classList.add("bg-white", "text-gray-600");
    });

    document.getElementById(id).classList.add("bg-[#b91c1c]", "text-white");
    document.getElementById(id).classList.remove("bg-white", "text-gray-600");
}

for (let i = 2025; i >= 1905; i--) {
    yearElements.forEach(year => {
        year.innerHTML += `<option>${i}</option>`;
    });
}


// const yeniMarka = []
// const yeniModel = []

// for(let i = 0; i < data.length; i++){
//     const item = data[i].brand
//     if( !yeniMarka.includes(item)){
//         yeniMarka.push(item)
//     } 
// }

// const yeniArr = data.map (  (item,i)=> {

// })

function handleSelect(){
    modelArr.map( item => {model.innerHTML += `<option>${item}</option>`})
    markaArr.map( item => {marka.innerHTML += `<option>${item}</option>`})
    cityArr.map( item => {city.innerHTML += `<option>${item}</option>`})
    banTypeArr.map( item => {banType.innerHTML += `<option>${item}</option>`})
}
handleSelect()