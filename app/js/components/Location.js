const $iframeMap = document.createElement("div");
const $linkMap = document.createElement("a");
const $mapIcon = document.createElement("img");
const $locationSection = document.querySelector(".location-content");

$iframeMap.innerHTML = `<iframe
class="location__map"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.6406078263717!2d-109.91542568556024!3d22.88973092702497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86af4afa7d35e0b1%3A0x4b25846f4e6b0f9d!2sGreen%20Scholarship%20Program!5e0!3m2!1sen!2smx!4v1627175666271!5m2!1sen!2smx"
allowfullscreen=""
loading="lazy"
></iframe>`;

$mapIcon.src = "./app/img/map.svg";
$mapIcon.alt = "map";

$linkMap.href = "https://goo.gl/maps/XND8aFUFd9XZqjbx5";
$linkMap.appendChild($mapIcon);
$linkMap.className = " location__link-map flex flex-jc-c";

export const setLocationElement = (size) => {
  $locationSection.innerHTML = "";
  if (document.body.clientWidth <= size) $locationSection.appendChild($linkMap);
  else $locationSection.appendChild($iframeMap);
};
