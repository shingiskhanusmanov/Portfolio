const navMenu = document.querySelector(".nav-menu");
const closeBtn = document.querySelector(".nav-close");
const toggleBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-link");
const navContact = document.querySelector(".nav-contact");

if (toggleBtn && navMenu) {
  toggleBtn.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (closeBtn && navMenu) {
  closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const linkAction = () => {
  if (navMenu) {
    // If the menu exists, hide it.
    navMenu.classList.remove("show-menu");
  }
};

navLinks.forEach((n) => {
  n.addEventListener("click", linkAction);
});

if (navContact) {
  navContact.addEventListener("click", linkAction);
}

// ================ HOME TEXT CIRCULAR ================
const homeText = document.getElementById("home__text");

if (homeText) {
  const letters = homeText.textContent.trim().split("");
  const angleStep = 360 / letters.length;

  homeText.textContent = "";

  letters.forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.transform = `rotate(${i * angleStep}deg)`;
    homeText.appendChild(span);
  });
}

//   =================== MAIN SECTION TEXT CHANGING =========================
const homeTyped = document.getElementById("home-typed");

if (typeof Typed !== "undefined") {
  // Typed - it is a library
  new Typed("#home-typed", {
    strings: ["Web Developer", "Frontend Developer", "UX/UI Designer"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
  });
} else if (homeTyped) {
  homeTyped.textContent = "Web Developer";
}

//   =============== CHANGE HEADER STYLE ===========================
const scrollHeader = () => {
  const header = document.getElementById("header");

  if (window.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
};
window.addEventListener("scroll", scrollHeader); // window - browser window
scrollHeader();

//  ============ SLIDER PAGINATION ==============
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".card-wrapper", {
    // loop: true,   // this part handles the infine loop over and over again
    spaceBetween: 25,
    speed: 600,
    allowTouchMove: true,
    grabCursor: true,
    clickable: true,

    pagination: {
      el: ".swiper-pagination", // this part is dots
      clickable: true,
      dynamicBullets: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});

// ====== MY SERVICES SECTION=====
const serviceHeader = document.querySelectorAll(".service-header");
const serviceItem = document.querySelectorAll(".service-item");

serviceHeader.forEach((button) => {
  button.addEventListener("click", function () {
    const currentCard = button.closest(".service-item");
    const isOpen = currentCard.classList.contains("service-open");

    serviceItem.forEach((card) => {
      card.classList.remove("service-open");
    });

    if (!isOpen) {
      currentCard.classList.add("service-open");
    }

    serviceHeader.forEach((btn) => {
      const open = btn
        .closest(".service-item")
        .classList.contains("service-open");
      btn.setAttribute("aria-expanded", open);
    });
  });
});
