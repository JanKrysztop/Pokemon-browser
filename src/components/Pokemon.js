import styled from 'styled-components';

export const Pokemon = ({ pokemons, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul>
      {pokemons?.map((pokemon) => (
        <StyledPokemon key={pokemon.name}>{pokemon.name}</StyledPokemon>
      ))}
    </ul>
  );
};

const StyledPokemon = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-family: 'Pokemon Solid', sans-serif;
  color: #ffcb05;
  text-shadow: 3px 3px 0 #003a70, -1px -1px 0 #003a70, 1px -1px 0 #003a70,
    -1px 1px 0 #003a70, 1px 1px 0 #003a70;
`;
