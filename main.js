const hamIcon = document.getElementById("ham-icon");
const menu = document.getElementById("menu");

hamIcon.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
