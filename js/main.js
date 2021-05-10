const navbar = document.querySelector(".navigation-bar");

window.addEventListener("scroll", function () {
  const offset = window.pageYOffset;

  if (offset > 10) navbar.classList.add("scroll");
  else navbar.classList.remove("scroll");
});

const buttonup = document.querySelector(".button-up");

window.addEventListener("scroll", function () {
  const offset = window.pageYOffset;

  if (offset > 550) buttonup.classList.add("scroll");
  else buttonup.classList.remove("scroll");
});
