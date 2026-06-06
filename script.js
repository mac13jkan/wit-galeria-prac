const works = [
  {
    title: "Cyberpunk Vehicle",
    author: "Jan Kowalski",
    category: "model",
    semester: "Semestr 3",
    image: "https://picsum.photos/800/600?random=1",
    description: "Model futurystycznego pojazdu przygotowany jako projekt semestralny z grafiki 3D."
  },
  {
    title: "Medieval Castle",
    author: "Anna Nowak",
    category: "render",
    semester: "Semestr 2",
    image: "https://picsum.photos/800/600?random=2",
    description: "Render sceny przedstawiającej zamek średniowieczny z oświetleniem atmosferycznym."
  },
  {
    title: "Sci-Fi Helmet",
    author: "Piotr Wiśniewski",
    category: "model",
    semester: "Semestr 3",
    image: "https://picsum.photos/800/600?random=3",
    description: "Projekt hełmu science fiction z detalami technicznymi i teksturami metalicznymi."
  },
  {
    title: "Fantasy Environment",
    author: "Maria Zielińska",
    category: "concept",
    semester: "Semestr 1",
    image: "https://picsum.photos/800/600?random=4",
    description: "Koncepcja środowiska fantasy przygotowana jako baza do dalszego modelowania 3D."
  },
  {
    title: "Modern Interior",
    author: "Kamil Wójcik",
    category: "render",
    semester: "Semestr 2",
    image: "https://picsum.photos/800/600?random=5",
    description: "Wizualizacja nowoczesnego wnętrza z naciskiem na kompozycję, materiały i światło."
  },
  {
    title: "Robot Character",
    author: "Julia Lewandowska",
    category: "model",
    semester: "Semestr 3",
    image: "https://picsum.photos/800/600?random=6",
    description: "Model postaci robota stworzony z wykorzystaniem prostych brył i detali mechanicznych."
  }
];

const galleryGrid = document.getElementById("galleryGrid");
const filterButtons = document.querySelectorAll(".filter-btn");

const modal = document.getElementById("workModal");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalAuthor = document.getElementById("modalAuthor");
const modalDescription = document.getElementById("modalDescription");

function renderWorks(filter = "all") {
  galleryGrid.innerHTML = "";

  const filteredWorks = filter === "all"
    ? works
    : works.filter(work => work.category === filter);

  filteredWorks.forEach(work => {
    const card = document.createElement("article");
    card.className = "work-card";

    card.innerHTML = `
      <img src="${work.image}" alt="${work.title}">
      <div class="work-card-content">
        <h3>${work.title}</h3>
        <p>${work.author}</p>
        <span class="badge">${work.semester}</span>
      </div>
    `;

    card.addEventListener("click", () => openModal(work));

    galleryGrid.appendChild(card);
  });
}

function openModal(work) {
  modalImage.src = work.image;
  modalImage.alt = work.title;
  modalTitle.textContent = work.title;
  modalAuthor.textContent = `Autor: ${work.author} | ${work.semester}`;
  modalDescription.textContent = work.description;

  modal.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    renderWorks(button.dataset.filter);
  });
});

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", event => {
  if (event.target === modal) {
    closeModal();
  }
});

renderWorks();
