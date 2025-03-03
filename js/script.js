const barsButton = document.getElementById("bars-button");
const barsMenu = document.getElementById("bars-menu");
const old = document.getElementById("old")
const all = document.getElementById("all")
const notold = document.getElementById("notold")
const yearElements = document.querySelectorAll(".year");

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
document.querySelectorAll(".hearts").forEach(heart => {
    heart.onclick = function () {
        // `fa-regular` və `fa-solid` siniflərini dəyiş
        this.classList.toggle("fa-regular");
        this.classList.toggle("fa-solid");

        // Rəngi dəyişdir
        this.style.color = this.classList.contains("fa-solid") ? "#b91c1c" : "#fff";
    };
});
