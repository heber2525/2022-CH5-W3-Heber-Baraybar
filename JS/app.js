async function app() {
  fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => response.json())
    .then((json) => console.log(json));
}
document.addEventListener('DOMContentLoaded', app);
