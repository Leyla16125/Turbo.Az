const carList = document.getElementById("car-list");
const btn = document.getElementById("btn");

let count = 8; 

function showCars() {
    let carsHTML = ""; 

    data.slice(0, count).map(item => {
        carsHTML += `
            <div class="bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg">
                <div class="relative">
                    <img class="w-full h-48 object-cover" src="${item.images[0]}" alt="${item.brand} ${item.model}">
                    <div class="absolute top-2 right-2 p-1 rounded-full shadow">
                        <i class="hearts fa-regular fa-heart fa-xl" style="color: #fff;"></i>
                    </div>
                </div>
                <div class="p-3">
                    <h3 class="text-lg font-bold">${item.price} ${item.currency}</h3>
                    <p class="text-gray-700">${item.brand} ${item.model}</p>
                    <p class="text-gray-500 text-sm">${item.year}, ${item.engine} L, ${item.odometer} ${item.odometerUnit}</p>
                    <p class="text-gray-400 text-xs">${item.city}, ${item.dates}</p>
                </div>
            </div>`;
    });

    carList.innerHTML = carsHTML;

    // likeFeature();
}

showCars();

function addmore() {
    if (count < data.length) {
        count += 8;
    }
    if (count > data.length) {
        count = data.length;
        btn.style.display = "none";
    }

    showCars(); 
}

// function likeFeature() {
//     let hearts = document.querySelectorAll(".hearts"); 

//     for (let i = 0; i < hearts.length; i++) {
//         hearts[i].onclick = function () {
//             this.classList.toggle("fa-regular");
//             this.classList.toggle("fa-solid");

//             this.style.color = this.classList.contains("fa-solid") ? "#b91c1c" : "#fff";
//         };
//     }
// }
