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
if (winscontent) {
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
}
// WORKS SECTION

const categories = document.querySelectorAll(".category");
const galleries = document.querySelectorAll(".category-gallery");

function handleCategoryClick(event) {
  const selectedCategory = event.target.dataset.category;

  galleries.forEach((gallery) => {
    if (gallery.classList.contains(selectedCategory)) {
      gallery.classList.remove("hidden");
    } else {
      gallery.classList.add("hidden");
    }
  });

  categories.forEach((category) => {
    category.classList.remove("active-category");
  });
  event.target.classList.add("active-category");
}

categories.forEach((category) => {
  category.addEventListener("click", handleCategoryClick);
});
