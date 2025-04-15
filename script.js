import { movies } from "./movies.js";

const ota = document.getElementById("ota");
const select = document.getElementById("select");
const input = document.getElementById("input");
const sortselect = document.getElementById("sort-select");

console.log(movies);

function ASD(malumot) {
    ota.innerHTML = "";
    malumot.map((kino) => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
            <img src="./img/1200x675mf.jpg.png" alt="">
            <div>
                <h1>${kino.title}</h1>
                <h2>${kino.score} ${kino.year} ${kino.duration} <br> ${kino.genre}</h2>
                <button class="btn">More info</button>
            </div>
        `;
        ota.appendChild(div);
    })
}

ASD(movies);

input.addEventListener("input", () => {
    const qidirish = movies.filter(p => p.title.toLowerCase().includes(input.value.toLowerCase()));
    ASD(qidirish);
});

select.addEventListener("change", () => {
    if (select.value == "All") {
        ASD(movies);
    } else {
        const b = movies.filter(p => p.genre.includes(select.value));
        ASD(b);
    }
});

sortselect.addEventListener("change", () => {
    const sorted = [...movies];
    if (sortselect.value == "A-Z") {
        sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else {
        sorted.sort((a, b) => b.title.localeCompare(a.title));
    }
    ASD(sorted);
})