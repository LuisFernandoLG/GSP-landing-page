const $lazyLoadElements = document.querySelectorAll(".lazy-load");

let options = {
  rootMargin: "50px 20px 75px 30px",
};

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("lazy-load-start");
    }
  });
}, options);

const setLazyLoad = (lazyLoad) => {
  if (lazyLoad) {
    $lazyLoadElements.forEach((e) => {
      observer.observe(e);
    });
  } else {
    $lazyLoadElements.forEach((e) => {
      console.log(e.classList.remove("lazy-load"));
    });
  }
};

export { setLazyLoad };
