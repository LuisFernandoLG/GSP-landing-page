const $counter = document.querySelector(".scholarship-counter__title");
const count = 152;

const observer = new IntersectionObserver(async (entry) => {
  console.log(entry[0]);
  if (entry[0].isIntersecting) {
    incrementerTimer(10, 0);
  }
});

const incrementerTimer = (interval, initialCount) => {
  const timer = setInterval(() => {
    $counter.textContent = initialCount;
    initialCount++;

    if (initialCount > count) {
      clearInterval(timer);
      observer.unobserve($counter);
    }
  }, interval);
};

const setCounterAnimation = () => {
  observer.observe($counter);
};

export { setCounterAnimation };
