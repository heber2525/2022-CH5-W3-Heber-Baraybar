async function app() {
  let index = 0;
  let URL = `https://pokeapi.co/api/v2/pokemon/?offset=${index}&limit=25`;
  let data = await pokemonResult(URL);

  console.log(data);
  await pokemonList(data);

  async function pokemonResult() {
    const response = await fetch(URL);
    return response.json;
  }

  async function pokemonList(data) {
    let template = '';
    data.results.forEach((item) => {
      template += `
      <li><a href="${item.url}"> ${item.name}</a></li>`;
    });
    document.querySelector('.pokemon-list').innerHTML = template;
  }

  async function buttonBack() {
    console.log('Index = ' + index);
    index -= 25;
    URL = `https://pokeapi.co/api/v2/pokemon/?offset=${index}&limit=25`;
    let data = await pokemonResult(URL);
    pokemonList(data);
  }

  async function buttonNext() {
    console.log('Index = ' + index);
    index += 25;
    URL = `https://pokeapi.co/api/v2/pokemon/?offset=${index}&limit=25`;
    let data = await pokemonResult(URL);
    console.log(data);
    pokemonList(data);
  }

  document
    .querySelector('#button-previous')
    .addEventListener('click', buttonBack);
  document.querySelector('#button-next').addEventListener('click', buttonNext);
}
