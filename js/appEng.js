const navSlide = () => {
  const menubarsnav = document.querySelector(".menubarsnav");
  const nav = document.querySelector(".nav__links");
  const navLinks = document.querySelectorAll(".nav__links li");

  menubarsnav.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav__active");
    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    //MenuBars Animation
    menubarsnav.classList.toggle("toggle");
  });
};

navSlide();
