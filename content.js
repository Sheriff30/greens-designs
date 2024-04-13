document.addEventListener("DOMContentLoaded", function () {
  const section1Project = document.querySelector(".section1-project");
  const category = document.querySelector(".category");
  const projectName = document.querySelector(".project-name");
  const scope1 = document.querySelector(".scope1");
  const scope2 = document.querySelector(".scope2");
  const scope3 = document.querySelector(".scope3");
  const loading = document.querySelector(".loading");

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
        "/projects-img/Achitecture/Beachbar/1.jpg",
        [
          "/projects-img/Achitecture/Beachbar/1.jpg",
          "/projects-img/Achitecture/Beachbar/2 PH.jpg",
          "/projects-img/Achitecture/Beachbar/5PH.jpg",
          "/projects-img/Achitecture/Beachbar/6PH.jpg",
          "/projects-img/Achitecture/Beachbar/923ee08fb5705c5cf56786a92a060531l-w1205048523xd-w1020_h770_q80.jpg",
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
        "/projects-img/Achitecture/BeachHouse/8.jpg",
        [
          "/projects-img/Achitecture/BeachHouse/7.jpg",
          "/projects-img/Achitecture/BeachHouse/Final.jpg",
        ]
      );
    },
    palace: function () {
      setProjectContent(
        "Architecture",
        "palace",
        "palace",
        "palace",
        "palace",
        "/projects-img/Achitecture/Palace/2_.jpg",
        [
          "/projects-img/Achitecture/Palace/4_.jpg",
          "/projects-img/Achitecture/Palace/5_.jpg",
          "/projects-img/Achitecture/Palace/6_.jpg",
        ]
      );
    },
    fashionhouse: function () {
      setProjectContent(
        "Architecture",
        "The Fashion House",
        "The Fashion House",
        "The Fashion House",
        "The Fashion House",
        "/projects-img/Achitecture/TheFashionHouse/1.jpg",
        [
          "/projects-img/Achitecture/TheFashionHouse/2.jpg",
          "/projects-img/Achitecture/TheFashionHouse/3.jpg",
          "/projects-img/Achitecture/TheFashionHouse/4.jpg",
          "/projects-img/Achitecture/TheFashionHouse/5.jpg",
          "/projects-img/Achitecture/TheFashionHouse/6.jpg",
          "/projects-img/Achitecture/TheFashionHouse/7.jpg",
          "/projects-img/Achitecture/TheFashionHouse/8.jpg",
          "/projects-img/Achitecture/TheFashionHouse/9.jpg",
        ]
      );
    },
    thehill: function () {
      setProjectContent(
        "Architecture",
        "The Hill",
        "The Hill",
        "The Hill",
        "The Hill",
        "/projects-img/Achitecture/TheHill/8.jpg",
        [
          "/projects-img/Achitecture/TheHill/Copy of 20.jpg",
          "/projects-img/Achitecture/TheHill/Copy of 22.jpg",
        ]
      );
    },
    thetower: function () {
      setProjectContent(
        "Architecture",
        "The Hill",
        "The Hill",
        "The Hill",
        "The Hill",
        "/projects-img/Achitecture/TheTower/1.jpg",
        [
          "/projects-img/Achitecture/TheTower/2.jpg",
          "/projects-img/Achitecture/TheTower/3.jpg",
          "/projects-img/Achitecture/TheTower/4.jpg",
        ]
      );
    },
    thetower: function () {
      setProjectContent(
        "Architecture",
        "The Hill",
        "The Hill",
        "The Hill",
        "The Hill",
        "/projects-img/Achitecture/TheTower/1.jpg",
        [
          "/projects-img/Achitecture/TheTower/2.jpg",
          "/projects-img/Achitecture/TheTower/3.jpg",
          "/projects-img/Achitecture/TheTower/4.jpg",
        ]
      );
    },
    theunique: function () {
      setProjectContent(
        "Architecture",
        "The Unique",
        "The Unique",
        "The Unique",
        "The Unique",
        "/projects-img/Achitecture/TheUnique/1.jpg",
        [
          "/projects-img/Achitecture/TheUnique/2.jpg",
          "/projects-img/Achitecture/TheUnique/3.jpg",
          "/projects-img/Achitecture/TheUnique/4.jpg",
        ]
      );
    },
    thewoodcenter: function () {
      setProjectContent(
        "Architecture",
        "The Wood Center",
        "The Wood Center",
        "The Wood Center",
        "The Wood Center",
        "/projects-img/Achitecture/TheWoodCenter/1_.jpg",
        [
          "/projects-img/Achitecture/TheWoodCenter/1_.jpg",
          "/projects-img/Achitecture/TheWoodCenter/3_.jpg",
          "/projects-img/Achitecture/TheWoodCenter/4_.jpg",
          "/projects-img/Achitecture/TheWoodCenter/5_.jpg",
          "/projects-img/Achitecture/TheWoodCenter/6_.jpg",
          "/projects-img/Achitecture/TheWoodCenter/7_.jpg",
          "/projects-img/Achitecture/TheWoodCenter/8_.jpg",
          "/projects-img/Achitecture/TheWoodCenter/9_.jpg",
          "/projects-img/Achitecture/TheWoodCenter/10_.jpg",
          "/projects-img/Achitecture/TheWoodCenter/11_.jpg",
          "/projects-img/Achitecture/TheWoodCenter/12_.jpg",
          "/projects-img/Achitecture/TheWoodCenter/13_.jpg",
          "/projects-img/Achitecture/TheWoodCenter/14_.jpg",
          "/projects-img/Achitecture/TheWoodCenter/15_.jpg",
        ]
      );
    },
    twin: function () {
      setProjectContent(
        "Architecture",
        "Tiwn",
        "Tiwn",
        "Tiwn",
        "Tiwn",
        "/projects-img/Achitecture/Twin/1_.jpg",
        [
          "/projects-img/Achitecture/Twin/1_.jpg",
          "/projects-img/Achitecture/Twin/2_.jpg",
          "/projects-img/Achitecture/Twin/3_.jpg",
        ]
      );
    },
    urban: function () {
      setProjectContent(
        "Architecture",
        "Urban",
        "Urban",
        "Urban",
        "Urban",
        "/projects-img/Achitecture/Urban/1.jpg",
        [
          "/projects-img/Achitecture/Urban/1.jpg",
          "/projects-img/Achitecture/Urban/2.jpg",
          "/projects-img/Achitecture/Urban/3.jpg",
          "/projects-img/Achitecture/Urban/4.jpg",
          "/projects-img/Achitecture/Urban/5.jpg",
          "/projects-img/Achitecture/Urban/6.jpg",
        ]
      );
    },
    vacationhouse: function () {
      setProjectContent(
        "Architecture",
        "Vacation House",
        "Vacation House",
        "Vacation House",
        "Vacation House",
        "/projects-img/Achitecture/VacationHouse/1.jpg",
        [
          "/projects-img/Achitecture/VacationHouse/2.jpg",
          "/projects-img/Achitecture/VacationHouse/3.jpg",
          "/projects-img/Achitecture/VacationHouse/4.jpg",
        ]
      );
    },
    // //////////////////////////////////
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
    // Show loading element
    loading.style.display = "flex";

    // Set project content
    category.innerText = categoryText;
    projectName.innerText = projectNameText;
    scope1.innerText = scope1Text;
    scope2.innerText = scope2Text;
    scope3.innerText = scope3Text;
    section1Project.style.backgroundImage = `linear-gradient(to right bottom, rgba(25, 42, 22, 0.8), rgba(25, 42, 22, 0.5)), url(${backgroundImageUrl})`;

    // Function to check if all images are loaded
    let imagesLoaded = 0;
    const totalImages = imageUrls.length;

    const checkImagesLoaded = () => {
      imagesLoaded++;
      if (imagesLoaded === totalImages) {
        // Hide loading element after all images are loaded
        loading.style.display = "none";
      }
    };

    // Add event listener to background image
    const backgroundImg = new Image();
    backgroundImg.onload = checkImagesLoaded;
    backgroundImg.src = backgroundImageUrl;

    // Add event listener to each image in imageUrls
    imageUrls.forEach((url) => {
      const img = new Image();
      img.onload = checkImagesLoaded;
      img.src = url;
    });

    // Add images to project
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
