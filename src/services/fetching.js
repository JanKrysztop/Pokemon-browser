export const fetchPokemons = async () => {
  //1154 pokemnos in total
  const response = await fetch(
    'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1150'
  );
  if (response.status === 200) {
    const pokemons = await response.json();
    return pokemons;
  }

  throw new Error(response.status);
};
