const review = [
    {
        id: 1,
        name: "Maria Neusa",
        job: "Web Developer",
        img: "img/peo2.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod?"
    },
    {
        id: 2,
        name: "João Pedro",
        job: "Designer",
        img: "img/peo3.jpg",
        text: "Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua. Ut enin ad ninin venian, quis nostrun exercitationen ullan corporis suscipit laboriosan, nisi ut aliquid ex ea connodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillun dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt nollit anin id est laborun."
    },
    {
        id: 3,
        name: "Marcely Oliveira",
        job: "Web Developer",
        img: "img/peo4.jpg",
        text: "Et harum quidem rerum facilis est et expedita distinctio. "
    },
    {
        id: 4,
        name: "Maria Neusa",
        job: "Web Developer",
        img: "img/peo5.jpg",
        text: " Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae."
    }
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    showPerson();
});

function showPerson() {
    const item = review[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > review.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = review.length - 1;
    }
    showPerson();
});

randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * review.length);
    showPerson();
});
