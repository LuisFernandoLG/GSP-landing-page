import { setLazyLoad } from "./components/LazyLoad.js";
import { setLocationElement } from "./components/Location.js";
import {} from "./components/MenuButton.js";

addEventListener("DOMContentLoaded", () => {
  setLazyLoad(true);
  setLocationElement(760);
});

// What Device
//   small: 540px,
//   medium: 760px, This
//   large: 1024px,
//   xlarge: 1400px,
