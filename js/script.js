const toggleTheme = document.getElementById('header__nav-theme');
const openBtn = document.getElementById('registerOpenModal');
const modal = document.getElementById('registerModal');
const closeModal = document.getElementById('modalCancel');
const submitModal = document.getElementById('modalSubmit');
const form = document.getElementById('registerForm');
const eye = document.getElementById('passwordEye');
const modalPassword = document.getElementById('modalPassword');
const clientsLogos = document.getElementById('clientsLogo');
const bigWindow = window.matchMedia("(min-width: 770px)");
const mediumWindow = window.matchMedia("(min-width: 480px) and (max-width: 769px)");
const smallWindow = window.matchMedia("(max-width: 479px)");
const carouselBtn = document.querySelector(".carousel--button");
const leftButtom =  document.querySelector(".carousel__button-left");
const rightButtom =  document.querySelector(".carousel__button-right");


let imageList = [{
    "id": 1,
    "url": "./img/Logo1.png"
  },
  {
    "id": 2,
    "url": "./img/Logo2.png"
  },
  {
    "id": 3,
    "url": "./img/Logo3.png"
  },
  {
    "id": 4,
    "url": "./img/Logo4.png"
  },
  {
    "id": 5,
    "url": "./img/Logo5.png"
  },
  {
    "id": 6,
    "url": "./img/Logo6.png"
  },
    {
    "id": 7,
    "url": "./img/Logo7.png"
  }

]

let startIndex = 0;
let visibleCount = 0;


eye.addEventListener('click', () => {
  if (!eye.classList.contains('active-Eye')){
      eye.classList.add('active-Eye')
      modalPassword.type = 'text';
  } else {
      eye.classList.remove('active-Eye')
      modalPassword.type = 'password';
    }
})

toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    toggleTheme.textContent = '☀️';
  } else {
    toggleTheme.textContent = '🌙';
  }
});


openBtn.addEventListener('click', () => {
    modal.classList.add('active');
});

closeModal.addEventListener('click', () => {
    form.reset();
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        form.reset();
    }
});


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const data = {
    user: formData.get('name'),
    surname: formData.get('surname'),
    email: formData.get('email'),
    password: formData.get('password')
  };

  console.log(data)
});

 
function renderLogos() {
  updateVisibleCount();        
  clientsLogos.innerHTML = "";

  if (visibleCount >= imageList.length) {
    carouselBtn.style.display = "none";
  } else {
    carouselBtn.style.display = "flex";
  }

  for (let i = 0; i < visibleCount; i++) {
    const index = (startIndex + i) % imageList.length;

    const li = document.createElement("li");
    const img = document.createElement("img");

    li.className = "u-logo";
    img.src = imageList[index].url;
    img.alt = "image";
    img.id = `image-${index + 1}`;

    li.appendChild(img);
    clientsLogos.appendChild(li);
  }
}


function updateVisibleCount() {
  if (bigWindow.matches) visibleCount = imageList.length;
  else if (mediumWindow.matches) visibleCount = 4;
  else visibleCount = 3;
}


function switchCarousel(direction) {
  updateVisibleCount();

  if (direction === "left") {
    startIndex = (startIndex - 1 + imageList.length) % imageList.length;
  } else {
    startIndex = (startIndex + 1) % imageList.length;
  }

  renderLogos();
}

document.addEventListener("DOMContentLoaded", () => {
  renderLogos();
});

bigWindow.addEventListener("change", renderLogos);
mediumWindow.addEventListener("change", renderLogos);
smallWindow.addEventListener("change", renderLogos);
leftButtom.addEventListener("click", () => switchCarousel("left"));
rightButtom.addEventListener("click", () => switchCarousel("right"));
