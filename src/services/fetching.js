export const fetchPokemons = async () => {
  const response = await fetch(
    'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10'
  );
  if (response.status == 200) {
    const pokemons = await response.json();
    return pokemons;
  }

  throw new Error(response.status);
};
