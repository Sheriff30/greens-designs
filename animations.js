import { animate, inView, stagger } from "motion";

inView(".bg-green", ({ target }) => {
  animate(
    target.querySelector("span"),
    {
      translateY: [60, 0],
      opacity: [0, 1],
    },
    {
      duration: 1,
    }
  );
});

inView(".text-animation", ({ target }) => {
  animate(
    target.querySelector("span"),
    {
      translateY: [60, 0],
      opacity: [0, 1],
    },
    {
      duration: 1,
      delay: stagger(0.3),
    }
  );
});

let animationTriggered = false;

const section1Img = document.querySelector(".section1-img");

const options = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !animationTriggered) {
      animate(
        entry.target.querySelector("img"),
        {
          translateX: [-60, 0],
          opacity: [0, 1],
        },
        {
          duration: 2,
        }
      );
      // Set the flag to true to prevent further animations
      animationTriggered = true;
    }
  });
}, options);

observer.observe(section1Img);
