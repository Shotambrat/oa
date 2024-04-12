const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener('click', function(event) {
  event.stopPropagation(); // Предотвратить всплытие события
  toggleMenu();
});

function toggleMenu() {
  if (menu.classList.contains("-translate-x-full")) {
    menu.classList.remove("-translate-x-full");
    menu.classList.add("translate-x-0");
  } else {
    closeMenu();
  }
}

function closeMenu() {
  // Закрыть sidebar, добавив класс для скрытия или анимации
  menu.classList.remove("translate-x-0");
  menu.classList.add("-translate-x-full");
}

document.addEventListener('click', function(event) {
  const withinBoundaries = event.composedPath().includes(menu);

  if (!withinBoundaries) {
    closeMenu();
  }
});

//####Modal start #####

const modal = document.getElementById("modal");
// Исправлено на document.querySelector для правильного обращения к кнопке
const closeButton = document.querySelector("#close__button button");

// Функция для закрытия модального окна
function closeModal() {
  modal.classList.add("hidden");
}

// Функция для открытия модального окна
function openModal() {
  modal.classList.remove("hidden");
  modal.classList.add("flex"); // Убедитесь, что модальное окно отображается правильно
}

// Прослушиваем клик по кнопке и закрываем модальное окно
closeButton.addEventListener("click", closeModal);

const openModalButton = document.getElementById("openModalButton");
// Прослушиваем клик по кнопке и открываем модальное окно
openModalButton.addEventListener("click", openModal);

//####Modal end #####

//for form 
function submitForm() {
  const button = document.getElementById('submitBtn');
  button.textContent = 'Yuborilmoqda...'; // Изменение текста кнопки
  button.disabled = true; // Отключение кнопки на время отправки

  // Имитация отправки запроса
  setTimeout(() => {
    button.textContent = 'Yuborildi'; // Изменение текста кнопки после "отправки"
    setTimeout(() => {
      button.textContent = 'Men bilan bog\'lanish'; // Возвращение исходного текста кнопки
      button.disabled = false; // Включение кнопки
    }, 2000); // Время до возвращения исходного состояния кнопки
  }, 3000); // Время имитации отправки
}


// ####### Slider start #######

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  // Адаптивность
  breakpoints: {
      640: {
          slidesPerView: 1,
          spaceBetween: 30,
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 40,
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 50,
      },
  },
}); 

// ####### Slider end #######


// ScrollIntoView start


document.addEventListener('DOMContentLoaded', () => {
  const navbarLinks = document.querySelectorAll('nav a[href^="#"], sidebar a[href^="#"]');
  
  navbarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      let target = document.querySelector(this.getAttribute('href'));
      if(target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  const menuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('translate-x-0');
  });
});


// ScrollIntoView end

// sec Swiper start

var swiper2 = new Swiper(".mySecSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
      el: ".swiper-pagination-sec",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  // Адаптивность
  breakpoints: {
      640: {
          slidesPerView: 1,
          spaceBetween: 40,
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 40,
      },
      1024: {
          slidesPerView: 4,
          spaceBetween: 20,
      },
  },
}); 

// sec Swiper end


//3 Swiper start

function navigateSlider(direction) {
  const cards = document.querySelectorAll('.card');
  let activeIndex = -1;
  cards.forEach((card, index) => {
    if (card.classList.contains('active')) {
      activeIndex = index;
    }
  });

  if (direction === 'next') {
    const nextIndex = (activeIndex + 1) % cards.length;
    cards[activeIndex].classList.remove('active');
    cards[nextIndex].classList.add('active');
  } else if (direction === 'prev') {
    const prevIndex = (activeIndex - 1 + cards.length) % cards.length;
    cards[activeIndex].classList.remove('active');
    cards[prevIndex].classList.add('active');
  }
}

// 3 Swiper end