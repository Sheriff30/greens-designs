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
    citracc: function () {
      setProjectContent(
        "Commercial",
        "Citra's Community Center",
        "Citra's Community Center",
        "Citra's Community Center",
        "Citra's Community Center",
        "/projects-img/Commercial/CommunityCenter/main.jpg",
        [
          "/projects-img/Commercial/CommunityCenter/1_.jpg",
          "/projects-img/Commercial/CommunityCenter/2_.jpg",
          "/projects-img/Commercial/CommunityCenter/3_.jpg",
          "/projects-img/Commercial/CommunityCenter/4_.jpg",
          "/projects-img/Commercial/CommunityCenter/5_.jpg",
          "/projects-img/Commercial/CommunityCenter/6_.jpg",
          "/projects-img/Commercial/CommunityCenter/11_.jpg",
        ]
      );
    },
    inomjonschool: function () {
      setProjectContent(
        "Commercial",
        "Inomjon School",
        "Inomjon School",
        "Inomjon School",
        "Inomjon School",
        "/projects-img/Commercial/InomjonSchool/Main.jpg",
        [
          "/projects-img/Commercial/InomjonSchool/8.jpg",
          "/projects-img/Commercial/InomjonSchool/2.jpg",
          "/projects-img/Commercial/InomjonSchool/3.jpg",
          "/projects-img/Commercial/InomjonSchool/4.jpg",
          "/projects-img/Commercial/InomjonSchool/5.jpg",
          "/projects-img/Commercial/InomjonSchool/9.jpg",
          "/projects-img/Commercial/InomjonSchool/7.jpg",
          "/projects-img/Commercial/InomjonSchool/11.jpg",
          "/projects-img/Commercial/InomjonSchool/12.jpg",
          "/projects-img/Commercial/InomjonSchool/13.jpg",
          "/projects-img/Commercial/InomjonSchool/14.jpg",
          "/projects-img/Commercial/InomjonSchool/15.jpg",
        ]
      );
    },
    fashionschool: function () {
      setProjectContent(
        "Commercial",
        "Fashion School UK",
        "Fashion School UK",
        "Fashion School UK",
        "Fashion School UK",
        "/projects-img/Commercial/FashionSchoolUK/Main.jpg",
        [
          "/projects-img/Commercial/FashionSchoolUK/1.jpg",
          "/projects-img/Commercial/FashionSchoolUK/2.jpg",
          "/projects-img/Commercial/FashionSchoolUK/3.jpg",
          "/projects-img/Commercial/FashionSchoolUK/4.jpg",
          "/projects-img/Commercial/FashionSchoolUK/5.jpg",
          "/projects-img/Commercial/FashionSchoolUK/9.jpg",
          "/projects-img/Commercial/FashionSchoolUK/7.jpg",
        ]
      );
    },
    nursinghome: function () {
      setProjectContent(
        "Commercial",
        "Nursing Home",
        "Nursing Home",
        "Nursing Home",
        "Nursing Home",
        "/projects-img/Commercial/NursingHome/Main.jpg",
        [
          "/projects-img/Commercial/NursingHome/1.jpg",
          "/projects-img/Commercial/NursingHome/2.jpg",
          "/projects-img/Commercial/NursingHome/3.jpg",
          "/projects-img/Commercial/NursingHome/4.jpg",
        ]
      );
    },
    theinvestor: function () {
      setProjectContent(
        "Commercial",
        "The investor",
        "The investor",
        "The investor",
        "The investor",
        "/projects-img/Commercial/Theinvestor/Main.jpg",
        [
          "/projects-img/Commercial/Theinvestor/1.jpg",
          "/projects-img/Commercial/Theinvestor/10.jpg",
          "/projects-img/Commercial/Theinvestor/11.jpg",
          "/projects-img/Commercial/Theinvestor/12.jpg",
          "/projects-img/Commercial/Theinvestor/13.jpg",
          "/projects-img/Commercial/Theinvestor/2.jpg",
        ]
      );
    },
    theresort: function () {
      setProjectContent(
        "Commercial",
        "The Resort",
        "The Resort",
        "The Resort",
        "The Resort",
        "/projects-img/Commercial/TheResort/Main.jpg",
        [
          "/projects-img/Commercial/TheResort/1.jpg",
          "/projects-img/Commercial/TheResort/2.jpg",
          "/projects-img/Commercial/TheResort/3.jpg",
          "/projects-img/Commercial/TheResort/4.jpg",
          "/projects-img/Commercial/TheResort/5.jpg",
          "/projects-img/Commercial/TheResort/6.jpg",
        ]
      );
    },
    theinvestor: function () {
      setProjectContent(
        "Commercial",
        "The investor",
        "The investor",
        "The investor",
        "The investor",
        "/projects-img/Commercial/TheWoodCenterUK/Main.jpg",
        [
          "/projects-img/Commercial/TheWoodCenterUK/1.jpg",
          "/projects-img/Commercial/TheWoodCenterUK/10_.jpg",
          "/projects-img/Commercial/TheWoodCenterUK/11_.jpg",
          "/projects-img/Commercial/TheWoodCenterUK/12_.jpg",
          "/projects-img/Commercial/TheWoodCenterUK/13_.jpg",
          "/projects-img/Commercial/TheWoodCenterUK/5_.jpg",
        ]
      );
    },
    yogapalace: function () {
      setProjectContent(
        "Commercial",
        "Yoga Palace",
        "Yoga Palace",
        "Yoga Palace",
        "Yoga Palace",
        "/projects-img/Commercial/YogaPalace/Main.jpg",
        [
          "/projects-img/Commercial/YogaPalace/1.jpg",
          "/projects-img/Commercial/YogaPalace/2.jpg",
          "/projects-img/Commercial/YogaPalace/3.jpg",
          "/projects-img/Commercial/YogaPalace/4.jpg",
          "/projects-img/Commercial/YogaPalace/5.jpg",
          "/projects-img/Commercial/YogaPalace/6.jpg",
        ]
      );
    },
    ZYDhotel: function () {
      setProjectContent(
        "Commercial",
        "ZYD Hotel",
        "ZYD Hotel",
        "ZYD Hotel",
        "ZYD Hotel",
        "/projects-img/Commercial/ZYDHotel/Main.jpg",
        [
          "/projects-img/Commercial/ZYDHotel/1.jpg",
          "/projects-img/Commercial/ZYDHotel/2.jpg",
          "/projects-img/Commercial/ZYDHotel/3.jpg",
          "/projects-img/Commercial/ZYDHotel/4.jpg",
          "/projects-img/Commercial/ZYDHotel/5.jpg",
          "/projects-img/Commercial/ZYDHotel/6.jpg",
        ]
      );
    },
    bohemianapartment: function () {
      setProjectContent(
        "Interior",
        "Bohemian Apartment",
        "Bohemian Apartment",
        "Bohemian Apartment",
        "Bohemian Apartment",
        "/projects-img/Interior/BohemianApartment/1.jpg",
        [
          "/projects-img/Interior/BohemianApartment/2.jpg",
          "/projects-img/Interior/BohemianApartment/3.jpg",
          "/projects-img/Interior/BohemianApartment/4.jpg",
          "/projects-img/Interior/BohemianApartment/5.jpg",
          "/projects-img/Interior/BohemianApartment/6.jpg",
          "/projects-img/Interior/BohemianApartment/7.jpg",
        ]
      );
    },
    liors: function () {
      setProjectContent(
        "Interior",
        "Lior's",
        "Lior's",
        "Lior's",
        "Lior's",
        "/projects-img/Interior/Liors/1.jpg",
        [
          "/projects-img/Interior/Liors/2.jpg",
          "/projects-img/Interior/Liors/3.jpg",
          "/projects-img/Interior/Liors/4.jpg",
          "/projects-img/Interior/Liors/5.jpg",
        ]
      );
    },
    liors: function () {
      setProjectContent(
        "Interior",
        "Lior's",
        "Lior's",
        "Lior's",
        "Lior's",
        "/projects-img/Interior/liors/1.jpg",
        [
          "/projects-img/Interior/liors/2.jpg",
          "/projects-img/Interior/liors/3.jpg",
          "/projects-img/Interior/liors/4.jpg",
          "/projects-img/Interior/liors/5.jpg",
        ]
      );
    },
    ozosapartment: function () {
      setProjectContent(
        "Interior",
        "Ozos Apartment",
        "Ozos Apartment",
        "Ozos Apartment",
        "Ozos Apartment",
        "/projects-img/Interior/OzosApartment/1.jpg",
        [
          "/projects-img/Interior/OzosApartment/2.jpg",
          "/projects-img/Interior/OzosApartment/3.jpg",
          "/projects-img/Interior/OzosApartment/4.jpg",
          "/projects-img/Interior/OzosApartment/5.jpg",
          "/projects-img/Interior/OzosApartment/6.jpg",
        ]
      );
    },
    theboss: function () {
      setProjectContent(
        "Interior",
        "The Boss",
        "The Boss",
        "The Boss",
        "The Boss",
        "/projects-img/Interior/TheBoss/1.jpg",
        [
          "/projects-img/Interior/TheBoss/2.jpg",
          "/projects-img/Interior/TheBoss/3.jpg",
          "/projects-img/Interior/TheBoss/4.jpg",
          "/projects-img/Interior/TheBoss/5.jpg",
          "/projects-img/Interior/TheBoss/6.jpg",
          "/projects-img/Interior/TheBoss/7.jpg",
        ]
      );
    },
    thecanadians: function () {
      setProjectContent(
        "Interior",
        "The Canadians",
        "The Canadians",
        "The Canadians",
        "The Canadians",
        "/projects-img/Interior/TheCanadians/1.jpg",
        [
          "/projects-img/Interior/TheCanadians/2.jpg",
          "/projects-img/Interior/TheCanadians/3.jpg",
          "/projects-img/Interior/TheCanadians/4.jpg",
        ]
      );
    },
    theclassic: function () {
      setProjectContent(
        "Interior",
        "The Classic",
        "The Classic",
        "The Classic",
        "The Classic",
        "/projects-img/Interior/TheClassic/1.jpg",
        [
          "/projects-img/Interior/TheClassic/2.jpg",
          "/projects-img/Interior/TheClassic/3.jpg",
          "/projects-img/Interior/TheClassic/4.jpg",
          "/projects-img/Interior/TheClassic/5.jpg",
          "/projects-img/Interior/TheClassic/6.jpg",
        ]
      );
    },
    theehabs: function () {
      setProjectContent(
        "Interior",
        "The Ehabs",
        "The Ehabs",
        "The Ehabs",
        "The Ehabs",
        "/projects-img/Interior/TheEhabs/1.jpg",
        [
          "/projects-img/Interior/TheEhabs/2.jpg",
          "/projects-img/Interior/TheEhabs/3.jpg",
          "/projects-img/Interior/TheEhabs/4.jpg",
          "/projects-img/Interior/TheEhabs/5.jpg",
          "/projects-img/Interior/TheEhabs/7.jpg",
          "/projects-img/Interior/TheEhabs/8.jpg",
        ]
      );
    },
    witletstudio: function () {
      setProjectContent(
        "Interior",
        "Witlet Studio",
        "Witlet Studio",
        "Witlet Studio",
        "Witlet Studio",
        "/projects-img/Interior/WitletStudio/1.jpg",
        [
          "/projects-img/Interior/WitletStudio/2.jpg",
          "/projects-img/Interior/WitletStudio/3.jpg",
          "/projects-img/Interior/WitletStudio/4.jpg",
          "/projects-img/Interior/WitletStudio/5.jpg",
          "/projects-img/Interior/WitletStudio/7.jpg",
          "/projects-img/Interior/WitletStudio/8.jpg",
          "/projects-img/Interior/WitletStudio/9.jpg",
        ]
      );
    },
    arshad: function () {
      setProjectContent(
        "Landscape",
        "Arshad's",
        "Arshad's",
        "Arshad's",
        "Arshad's",
        "/projects-img/Landscape/Arshad_s/Main.jpg",
        [
          "/projects-img/Landscape/Arshad_s/2.jpg",
          "/projects-img/Landscape/Arshad_s/3.jpg",
          "/projects-img/Landscape/Arshad_s/4.jpg",
          "/projects-img/Landscape/Arshad_s/7.jpg",
          "/projects-img/Landscape/Arshad_s/8.jpg",
          "/projects-img/Landscape/Arshad_s/9.jpg",
        ]
      );
    },
    augustyard: function () {
      setProjectContent(
        "Landscape",
        "August's Yard",
        "August's Yard",
        "August's Yard",
        "August's Yard",
        "/projects-img/Landscape/August_sYard/Main.jpg",
        [
          "/projects-img/Landscape/August_sYard/1_.jpg",
          "/projects-img/Landscape/August_sYard/10_.jpg",
          "/projects-img/Landscape/August_sYard/12_.jpg",
          "/projects-img/Landscape/August_sYard/13.jpg",
          "/projects-img/Landscape/August_sYard/3.jpg",
          "/projects-img/Landscape/August_sYard/4_.jpg",
        ]
      );
    },
    chris: function () {
      setProjectContent(
        "Landscape",
        "Chris's",
        "Chris's",
        "Chris's",
        "Chris's",
        "/projects-img/Landscape/Chris_s/Main.jpg",
        [
          "/projects-img/Landscape/Chris_s/1_.jpg",
          "/projects-img/Landscape/Chris_s/12_.jpg",
          "/projects-img/Landscape/Chris_s/4_.jpg",
          "/projects-img/Landscape/Chris_s/16.jpg",
          "/projects-img/Landscape/Chris_s/17.jpg",
          "/projects-img/Landscape/Chris_s/3_.jpg",
        ]
      );
    },
    karim: function () {
      setProjectContent(
        "Landscape",
        "Karim's",
        "Karim's",
        "Karim's",
        "Karim's",
        "/projects-img/Landscape/Karim_s/Main.jpg",
        [
          "/projects-img/Landscape/Karim_s/1.jpg",
          "/projects-img/Landscape/Karim_s/2.jpg",
          "/projects-img/Landscape/Karim_s/3.jpg",
          "/projects-img/Landscape/Karim_s/4.jpg",
          "/projects-img/Landscape/Karim_s/5.jpg",
          "/projects-img/Landscape/Karim_s/6.jpg",
        ]
      );
    },
    sheikhahmad: function () {
      setProjectContent(
        "Landscape",
        "Sheikh Ahmad",
        "Sheikh Ahmad",
        "Sheikh Ahmad",
        "Sheikh Ahmad",
        "/projects-img/Landscape/SheikhAhmad/Main.jpg",
        [
          "/projects-img/Landscape/SheikhAhmad/1.jpg",
          "/projects-img/Landscape/SheikhAhmad/2.jpg",
          "/projects-img/Landscape/SheikhAhmad/3.jpg",
          "/projects-img/Landscape/SheikhAhmad/4.jpg",
          "/projects-img/Landscape/SheikhAhmad/5.jpg",
        ]
      );
    },
    sydney: function () {
      setProjectContent(
        "Landscape",
        "Sydney's",
        "Sydney's",
        "Sydney's",
        "Sydney's",
        "/projects-img/Landscape/Sydney_s/Main.jpg",
        [
          "/projects-img/Landscape/Sydney_s/1.jpg",
          "/projects-img/Landscape/Sydney_s/3.jpg",
          "/projects-img/Landscape/Sydney_s/4.jpg",
          "/projects-img/Landscape/Sydney_s/9.jpg",
        ]
      );
    },
    thesamuels: function () {
      setProjectContent(
        "Landscape",
        "The Samuels",
        "The Samuels",
        "The Samuels",
        "The Samuels",
        "/projects-img/Landscape/TheSamuels/Main.jpg",
        [
          "/projects-img/Landscape/TheSamuels/1PH.jpg",
          "/projects-img/Landscape/TheSamuels/2PH.jpg",
          "/projects-img/Landscape/TheSamuels/3PH.jpg",
          "/projects-img/Landscape/TheSamuels/4PH.jpg",
          "/projects-img/Landscape/TheSamuels/5PH.jpg",
          "/projects-img/Landscape/TheSamuels/6PH.jpg",
          "/projects-img/Landscape/TheSamuels/8.jpg",
        ]
      );
    },
    thesauna: function () {
      setProjectContent(
        "Landscape",
        "The Sauna",
        "The Sauna",
        "The Sauna",
        "The Sauna",
        "/projects-img/Landscape/TheSauna/Main.jpg",
        [
          "/projects-img/Landscape/TheSauna/2_.jpg",
          "/projects-img/Landscape/TheSauna/5_.jpg",
          "/projects-img/Landscape/TheSauna/7_.jpg",
        ]
      );
    },
    thetank: function () {
      setProjectContent(
        "Landscape",
        "The Tank",
        "The Tank",
        "The Tank",
        "The Tank",
        "/projects-img/Landscape/TheTank/Main.jpg",
        [
          "/projects-img/Landscape/TheTank/1.jpg",
          "/projects-img/Landscape/TheTank/2.jpg",
          "/projects-img/Landscape/TheTank/4.jpg",
          "/projects-img/Landscape/TheTank/10.jpg",
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
    // Set the data-src attribute instead of src
    img.setAttribute("data-src", imageUrl);
    img.classList.add("lazy"); // Add the lazy class
    projectElement.appendChild(img);
  });

  // Lazy loading implementation using IntersectionObserver
  if ("IntersectionObserver" in window) {
    const lazyImages = document.querySelectorAll(".lazy");

    let lazyImageObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src; // Load the image
          lazyImage.classList.remove("lazy"); // Remove the lazy class
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  }
}
