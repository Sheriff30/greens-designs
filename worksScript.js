const categories = document.querySelectorAll(".category");
const galleries = document.querySelectorAll(".category-gallery");
const croosIcon = document.querySelector(".cross-icon");
const menubarIcon = document.querySelector(".menubar");
const menubarPage = document.querySelector(".menubarPage");

function handleCategoryClick(event) {
  const selectedCategory = event.target.dataset.category;

  // Remove 'hidden' class from the corresponding gallery
  galleries.forEach((gallery) => {
    if (gallery.classList.contains(selectedCategory)) {
      gallery.classList.remove("hidden");
    } else {
      gallery.classList.add("hidden");
    }
  });

  // Remove 'active-category' class from all categories and add it to the clicked one
  categories.forEach((category) => {
    category.classList.remove("active-category");
  });
  event.target.classList.add("active-category");
}

categories.forEach((category) => {
  category.addEventListener("click", handleCategoryClick);
});

// Menubar page

menubarIcon.addEventListener("click", function () {
  menubarPage.classList.add("showMenubarPage");
  document.body.classList.add("overFlowHidden");
});
croosIcon.addEventListener("click", function () {
  menubarPage.classList.remove("showMenubarPage");
  document.body.classList.remove("overFlowHidden");
});
