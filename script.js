const winscontent = document.querySelector(".wins-content");
const scrollerinner = document.querySelector(".scroller_inner");

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
