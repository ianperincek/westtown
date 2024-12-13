// JavaScript using IntersectionObserver
const cards = document.querySelectorAll(".masonry-layout__card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("masonry-layout__card--visible");
      } else {
        entry.target.classList.remove("masonry-layout__card--visible");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

cards.forEach((card) => observer.observe(card));

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".masonry-layout__card").forEach((card) => {
  //   gsap.fromTo(
  //     card,
  //     {
  //       opacity: 0,
  //       transform: "perspective(600px) rotateX(20deg) translateY(50px)",
  //     },
  //     {
  //       opacity: 1,
  //       transform: "perspective(600px) rotateX(0deg) translateY(0)",
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: card,
  //         start: "top 80%",
  //         toggleActions: "play none none reverse",
  //         once: true,
  //       },
  //     }
  //   );
});
