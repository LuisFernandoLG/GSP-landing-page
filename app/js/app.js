import { setLazyLoad } from "./components/LazyLoad.js";
import { setLocationElement } from "./components/Location.js";
import {} from "./components/MenuButton.js";
import { setCounterAnimation } from "./components/ScholarshipCounter.js";

addEventListener("DOMContentLoaded", () => {
  setLazyLoad(true);
  setLocationElement(760);
  setCounterAnimation();
});

// What Device
//   small: 540px,
//   medium: 760px, This
//   large: 1024px,
//   xlarge: 1400px,
