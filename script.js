// ====== Abre e Fecha o menu =======
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle")

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

// ====== Fecha && || abre menu =======
const links = document.querySelectorAll("nav ul li a")

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

// ====== muda o header quando der scroll =======
function headerChange() {
  const header = document.querySelector("#header");
  const navHeight = header.offsetHeight;
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

// ====== Button to Top =======
function backToTop() {
  const backToTopButton = document.querySelector(".back-to-top");
  if (window.scrollY >= 666) {//hahahah!!!!
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}
window.addEventListener("scroll", function () {
  headerChange();
  backToTop();
  activeteMenuAtCurrentSection()
  
});

// ====== TESTEMONIALS =======
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
});

// ====== SCROLL REVEAL =======
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true
});
scrollReveal.reveal(
  `#home .image, #home .text, #about .image, #about .text, #services header, #services .card, #testimonials header, #testimonials .testimonials, #contact .text, #contact .links, footer .brand, footer .social`,
  { interval: 100 }
);
// ====== ACTIVE MENU AT SECTION =======
const sections = document.querySelectorAll('main section[id]')
function activeteMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for( const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight
           
        if(checkpointStart && checkpointEnd) {
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active')
        }else {
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active')
        }
        
    }
}
