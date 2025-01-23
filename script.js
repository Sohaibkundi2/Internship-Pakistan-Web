document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const toggle = document.querySelector('.nav-toggle');

    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        if (nav.classList.contains('active')) {
            gsap.fromTo('.nav-ist, .nav-last', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5 });
        }
    });
});



function loaderAnim() {
    document.addEventListener("DOMContentLoaded", function () {
      var tl = gsap.timeline();
      tl.to(".loader h1", {
        duration: .5,
        top: "35%",
        scale: 1.5,
        ease: "bounce.out",
      });
      tl.to(".loader h1", {
        duration: 1.5,
        top: "25%",
        scale: 1,
        ease: "bounce.in",
      });
      tl.to(".loader h1", {
        scale: 100,
        duration: .5,
        ease: "power2.out",
      });
      tl.to(".loader h1", {
        duration: .8,
        top: "-110%",
      });
      tl.to(".loader", {
        opacity: 0,
        display: "none",
      });
    });
  }

  loaderAnim();