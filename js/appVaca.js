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

// const search = () => {
//   const SearchBar = document.getElementById("search-item").value.toUpperCase();
//   const storeitems = document.getElementById("product-list");
//   const product = document.querySelectorAll("product");
//   const detail = product.getElementsByTagName("p-details");
//   const pname = detail.getElementsByTagName("h2");

//   for (var i = 0; i < pname.length; i++) {
//     let match = product[i].getElementsByTagName("h2")[0];

//     if (match) {
//       let textvalue = match.textContent || match.innerHTML;

//       if (textvalue.toUpperCase().indexOf(SearchBar) > -1) {
//         product[i].style.display = "";
//       } else {
//         product[i].style.display = "none";
//       }
//     }
//   }
// };
