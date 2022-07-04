import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { fetchPokemons } from './services/fetching';
export const App = () => {
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    fetchPokemons().then(setPokemons);
  }, []);
  console.log(pokemons);
  return (
    <div>
      {pokemons?.results?.map((pokemon) => (
        <StyledPokemon key={pokemon.name}>{pokemon.name}</StyledPokemon>
      ))}
    </div>
  );
};

const StyledPokemon = styled.p`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  border: 1px solid red;
`;
