const searchInput = document.querySelector('#poke-input');
const searchBtn = document.querySelector('.btn-search');
const pokeContainer = document.querySelector('.poke-container');

const pokeCount = 10;

const initPokemon =async () =>{
    for (let i=0; i<=pokeCount; i++) {
    await getPokemon(i);
 }
};

const getPokemon = async (id)=>{
    let url = 'https://pokeapi.co/api/v2/pokemon/${id}'
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
};

initPokemon();