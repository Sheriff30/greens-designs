const winscontent = document.querySelector(".wins-content");
const scrollerinner = document.querySelector(".scroller_inner");
const croosIcon = document.querySelector(".cross-icon");
const menubarIcon = document.querySelector(".menubar");
const menubarPage = document.querySelector(".menubarPage");

// Menubar page

menubarIcon.addEventListener("click", function () {
  menubarPage.classList.add("showMenubarPage");
  document.body.classList.add("overFlowHidden");
});
croosIcon.addEventListener("click", function () {
  menubarPage.classList.remove("showMenubarPage");
  document.body.classList.remove("overFlowHidden");
});

// Gallery Section
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  winscontent.setAttribute("data-animated", true);
  scrollerinnerContent = Array.from(scrollerinner.children);
  scrollerinnerContent.forEach((i) => {
    const duplicatedItem = i.cloneNode(true);
    duplicatedItem.setAttribute("aria-hidden", true);
    scrollerinner.appendChild(duplicatedItem);
  });
}
