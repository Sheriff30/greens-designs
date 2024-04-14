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

// Active Cetegories from Home page

// Tabs in Works page
const architectureCategory = document.querySelector(
  '[data-category="architecture"]'
);
const commercialCategory = document.querySelector(
  '[data-category="commercial"]'
);
const interiorCategory = document.querySelector('[data-category="interior"]');
const landscapeCategory = document.querySelector('[data-category="landscape"]');
const residentialCategory = document.querySelector('[data-category="uniqe"]');

function activeCategory(category, url) {
  if (currentURL.includes(`${url}`)) {
    category?.click();
  }
}

function changeUrl(category, url) {
  category?.addEventListener("click", function (event) {
    event.preventDefault();
    history.pushState({}, "", url);
  });
}

const currentURL = window.location.href;

activeCategory(architectureCategory, "architectureCategory");
activeCategory(landscapeCategory, "landscapeCategory");
activeCategory(interiorCategory, "interiorCategory");
activeCategory(commercialCategory, "commercialCategory");
activeCategory(residentialCategory, "uniqeCategory");

changeUrl(architectureCategory, "?type=architectureCategory");
changeUrl(landscapeCategory, "?type=landscapeCategory");
changeUrl(interiorCategory, "?type=interiorCategory");
changeUrl(commercialCategory, "?type=commercialCategory");
changeUrl(residentialCategory, "?type=uniqeCategory");

//

let urlParams = new URLSearchParams(window.location.search);
let type = urlParams.get("type");

if (window.location.pathname === "/project.html" && !type) {
  window.location.replace("index.html");
}

// Hover Section 1

const archhighlight = document.querySelector(".arch-highlight");

// Add event listeners for mouse enter and mouse leave
archhighlight.addEventListener("mouseenter", function () {
  // Change text color on mouse enter
  document.querySelector(".section1-img img").src =
    "/projects-img/Achitecture/Urban/1.jpg";
});

archhighlight.addEventListener("mouseleave", function () {
  // Change text color back on mouse leave
  document.querySelector(".section1-img img").src =
    "/assets/Get Inspired images/img5.jpg";
});

// /////////////////////

const landhighlight = document.querySelector(".land-highlight");

// Add event listeners for mouse enter and mouse leave
landhighlight.addEventListener("mouseenter", function () {
  // Change text color on mouse enter
  document.querySelector(".section1-img img").src =
    "/projects-img/Landscape/SheikhAhmad/Main.jpg";
});

landhighlight.addEventListener("mouseleave", function () {
  // Change text color back on mouse leave
  document.querySelector(".section1-img img").src =
    "/assets/Get Inspired images/img5.jpg";
});

// // //////////////////
const inthighlight = document.querySelector(".int-highlight");

// Add event listeners for mouse enter and mouse leave
inthighlight.addEventListener("mouseenter", function () {
  // Change text color on mouse enter
  document.querySelector(".section1-img img").src =
    "/projects-img/Interior/BohemianApartment/1.jpg";
});

inthighlight.addEventListener("mouseleave", function () {
  // Change text color back on mouse leave
  document.querySelector(".section1-img img").src =
    "/assets/Get Inspired images/img5.jpg";
});
