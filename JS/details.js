async function getNameOfPokemon() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const nameOfPokemon = urlParams.get('name');
  console.log(nameOfPokemon);
  let detailOfPokemon = await getDetailOfPokemon();

  async function getDetailOfPokemon() {
    const url = `https://pokeapi.co/api/v2/pokemon/${nameOfPokemon}`;
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  }
  console.log(detailOfPokemon);
  let sprite = detailOfPokemon.sprites.front_shiny;
  console.log(sprite);
}
document.addEventListener('DOMContentLoaded', getNameOfPokemon);
