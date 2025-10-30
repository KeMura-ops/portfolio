export function scrollTriggerInit() {
  const target = document.querySelector(".scroll_down");
  const trigger = document.querySelector(".prod_txt");

  if (!target || !trigger) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        target.classList.add("-ready");
      }
    });
  }, {
    root: null,
    rootMargin: "0px 0px -25% 0px",
    threshold: 0
  });

  observer.observe(trigger);
}

export function caseSlideInit() {
  const swiper = new Swiper('.ch_swiper', {
    centeredSlides: true,
    slidesPerView: 1.2,
    loop: true,
    spaceBetween: 0,
    breakpoints: {
      801: {
        slidesPerView: 1.5,
        spaceBetween: 0
      }
    },
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
}

export function scrollUpInit() {
  ScrollTrigger.matchMedia({
    // SP
    "(max-width: 800px)": function () {
      document.querySelectorAll(".scroll_up").forEach((el, index) => {
        ScrollTrigger.create({
          trigger: el,
          id: index + 1,
          start: 'top 30%',
          toggleClass: { targets: el, className: "-ready" },
          once: true,
          // markers: true
        });
      });
    },
    // PC
    "(min-width: 801px)": function () {
      document.querySelectorAll(".scroll_up").forEach((el, index) => {
        ScrollTrigger.create({
          trigger: el,
          id: index + 1,
          start: 'top 60%',
          toggleClass: { targets: el, className: "-ready" },
          once: true,
          // markers: true
        });
      });
    }
  });
}