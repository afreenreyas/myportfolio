function openNav() {
  document.getElementById("mobileNav").classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function() {
const card = document.querySelector(".intro-card");
  if (card) {
    card.addEventListener("mouseover", function() {
      card.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
    });

    card.addEventListener("mouseout", function() {
      card.style.boxShadow = "none";
    });
  }

  const navTitle = document.querySelector(".nav-title");
  if (navTitle) {
    navTitle.addEventListener("mouseenter", () => {
      navTitle.style.opacity = "0.5";
    });
    navTitle.addEventListener("mouseleave", () => {
      navTitle.style.opacity = "1";
    });
  }

  let current = 1;
  const total = 10;

  const button = document.getElementById("changeBtn");
  const image = document.getElementById("cat1");

  if (button && image) {
    button.addEventListener("click", function() {
      current++;

      if (current > total) {
        current = 1;
      }

      image.src = "cats/img"+ current + ".png";
    });
  }

});