import styled from 'styled-components';
import sitting from '../images/sitting.svg';
import standing from '../images/standing.png';

export const Pokemon = ({ pokemons, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div style={{ display: 'flex', margin: '0 auto', width: '1100px' }}>
      <img src={standing} style={{ height: '500px', marginRight: '40px' }} />
      <ul>
        {pokemons?.map((pokemon) => (
          <StyledPokemon key={pokemon.name}>{pokemon.name}</StyledPokemon>
        ))}
      </ul>
    </div>
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
