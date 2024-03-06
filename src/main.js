import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchData } from "./js/pixabay-api";
import { renderMarkup } from "./js/render-functions";

const lightbox = new SimpleLightbox(".gallery-link", {
  captionsData: "alt",
  captionDelay: 250,
});

const form = document.querySelector("#searchForm");
const container = document.querySelector(".gallery");
let searchQuery = "";

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  container.innerHTML = "";

  searchQuery = form.elements.searchQuery.value.trim();

  fetchData(searchQuery).then(data => {
    const markup = renderMarkup(data);
    container.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
  })
    .catch((error) => console.error("Error fetching data:", error));
}
form.addEventListener('submit', handleSubmit)
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const searchQuery = form.elements.searchQuery.value.trim();

  if (searchQuery === '') {
    alert('Enter your request')
    container.innerHTML = ""
    return;
  }
};