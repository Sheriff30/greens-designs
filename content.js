document.addEventListener("DOMContentLoaded", function () {
  const section1Project = document.querySelector(".section1-project");
  const category = document.querySelector(".category");
  const projectName = document.querySelector(".project-name");
  const scope1 = document.querySelector(".scope1");
  const scope2 = document.querySelector(".scope2");
  const scope3 = document.querySelector(".scope3");

  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get("type");

  const contentFunctions = {
    beachbar: function () {
      setProjectContent(
        "Architecture",
        "Beach bar",
        "Beach bar",
        "Beach bar",
        "Beach bar",
        "/projects-img/Beachbar/1.jpg",
        [
          "/projects-img/Beachbar/1.jpg",
          "/projects-img/Beachbar/2 PH.jpg",
          "/projects-img/Beachbar/5PH.jpg",
          "/projects-img/Beachbar/6PH.jpg",
          "/projects-img/Beachbar/923ee08fb5705c5cf56786a92a060531l-w1205048523xd-w1020_h770_q80.jpg",
        ]
      );
    },
    beachhouse: function () {
      setProjectContent(
        "Architecture",
        "Beach house",
        "Beach house",
        "Beach house",
        "Beach house",
        "/projects-img/BeachHouse/8.jpg",
        ["/projects-img/BeachHouse/7.jpg", "/projects-img/BeachHouse/Final.jpg"]
      );
    },
    palace: function () {
      setProjectContent(
        "Architecture",
        "palace",
        "palace",
        "palace",
        "palace",
        "/projects-img/Palace/2_.jpg",
        [
          "/projects-img/palace/4_.jpg",
          "/projects-img/palace/5_.jpg",
          "/projects-img/Palace/6_.jpg",
        ]
      );
    },
  };

  function setProjectContent(
    categoryText,
    projectNameText,
    scope1Text,
    scope2Text,
    scope3Text,
    backgroundImageUrl,
    imageUrls
  ) {
    category.innerText = categoryText;
    projectName.innerText = projectNameText;
    scope1.innerText = scope1Text;
    scope2.innerText = scope2Text;
    scope3.innerText = scope3Text;
    section1Project.style.backgroundImage = `linear-gradient(to right bottom, rgba(25, 42, 22, 0.8), rgba(25, 42, 22, 0.5)), url(${backgroundImageUrl})`;
    addImagesToProject(imageUrls);
  }

  if (type && contentFunctions[type]) {
    contentFunctions[type]();
  } else {
    if (type !== null) {
      window.location.pathname = "not-found.html";
    }
  }
});

function addImagesToProject(imageUrls) {
  const projectElement = document.querySelector(".section2-project");
  projectElement.innerHTML = "";
  imageUrls.forEach(function (imageUrl) {
    const img = document.createElement("img");
    img.src = imageUrl;
    projectElement.appendChild(img);
  });
}
