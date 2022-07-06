import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { fetchPokemons } from './services/fetching';
import { Pokemon } from './components/Pokemon';
import { Pagination } from './components/Pagination';

export const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    fetchPokemons().then(setPokemons);
    setLoading(false);
  }, []);

  // Get current pokemons
  const lastPokemonIndex = currentPage * pokemonsPerPage;
  const firstPokemonIndex = lastPokemonIndex - pokemonsPerPage;
  const currentPokemon = pokemons?.results?.slice(
    firstPokemonIndex,
    lastPokemonIndex
  );

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => {
    if (currentPage < 116) {
      setCurrentPage(currentPage + 1);
    }
  };
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <StyledWrapper>
      <StyledHeader>Gotta Catch ' Em All</StyledHeader>
      <Pokemon pokemons={currentPokemon} loading={loading} />
      <Pagination
        pokemonsPerPage={pokemonsPerPage}
        totalPokemons={pokemons.results?.length}
        paginate={paginate}
        nextPage={nextPage}
        previousPage={previousPage}
        currentPage={currentPage}
      />
    </StyledWrapper>
  );
};
const StyledWrapper = styled.div`
  min-width: 430px;
  max-height: 100%;
  background-color: #3d7dca;
`;
const StyledHeader = styled.h1`
  margin: 0 50px;
  font-family: 'Pokemon Solid', sans-serif;
  font-size: 30px;
  color: #ffcb05;
  text-shadow: 3px 3px 0 #003a70, -1px -1px 0 #003a70, 1px -1px 0 #003a70,
    -1px 1px 0 #003a70, 1px 1px 0 #003a70;
`;
