const works = [
  {
    title: "3D render (castle)",
    author: "Jan Kowalski",
    category: "render",
    semester: "Semestr 2",
    image: "images/work-1.jpg",
    description: "Render zamku fantasy przygotowany jako projekt semestralny z grafiki 3D."
  },
  {
    title: "3D render (modern interior)",
    author: "Anna Nowak",
    category: "render",
    semester: "Semestr 2",
    image: "images/work-2.webp",
    description: "Wizualizacja nowoczesnego wnętrza z naciskiem na światło, materiały i kompozycję."
  },
  {
    title: "3D cyberpunk vehicle",
    author: "Piotr Wiśniewski",
    category: "model",
    semester: "Semestr 3",
    image: "images/work-3.avif",
    description: "Model futurystycznego pojazdu w stylistyce cyberpunkowej."
  },
  {
    title: "SCI FI helmet",
    author: "Maria Zielińska",
    category: "model",
    semester: "Semestr 3",
    image: "images/work-4.jpg",
    description: "Projekt hełmu science fiction z detalami technicznymi i materiałami metalicznymi."
  },
  {
    title: "Robot character",
    author: "Kamil Wójcik",
    category: "model",
    semester: "Semestr 3",
    image: "images/work-5.jpg",
    description: "Model postaci robota wykonany z wykorzystaniem prostych brył i detali mechanicznych."
  },
  {
    title: "Fantasy environment",
    author: "Julia Lewandowska",
    category: "concept",
    semester: "Semestr 1",
    image: "images/work-6.jpg",
    description: "Koncepcja środowiska fantasy przygotowana jako baza do projektu 3D."
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
