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
    interior: function () {
      setProjectContent(
        "interior",
        "interior",
        "interior1",
        "interior2",
        "interior3",
        "/assets/section1img.jpg",
        ["/assets/section1img.jpg", "/assets/section1img.jpg"]
      );
    },
    landscape: function () {
      setProjectContent(
        "Landscape",
        "landscape",
        "Landscape1",
        "Landscape2",
        "Landscape3",
        "/assets/section1img.jpg",
        [
          "/assets/section1img.jpg",
          "/assets/section1img.jpg",
          "/assets/section1img.jpg",
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
