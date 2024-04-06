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
const residentialCategory = document.querySelector(
  '[data-category="residential"]'
);

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
activeCategory(residentialCategory, "residentialCategory");

changeUrl(architectureCategory, "?type=architectureCategory");
changeUrl(landscapeCategory, "?type=landscapeCategory");
changeUrl(interiorCategory, "?type=interiorCategory");
changeUrl(commercialCategory, "?type=commercialCategory");
changeUrl(residentialCategory, "?type=residentialCategory");

//

let urlParams = new URLSearchParams(window.location.search);
let type = urlParams.get("type");

if (window.location.pathname === "/project.html" && !type) {
  window.location.replace("index.html");
}

// Function to check if a page exists
function checkPageExistence(url) {
  return fetch(url)
    .then((response) => {
      // If the response status is 200, page exists
      if (response.ok) {
        return true;
      } else if (response.status === 404) {
        return false;
      }
    })
    .catch((error) => {
      console.error("Error checking page existence:", error);
      return false;
    });
}

// Check if the requested page exists
checkPageExistence(window.location.href).then((pageExists) => {
  if (!pageExists) {
    // Redirect to the not-found.html page
    window.location.href = "not-found.html";
  }
});
