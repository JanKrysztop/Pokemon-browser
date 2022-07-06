import styled from 'styled-components';

export const Pagination = ({
  pokemonsPerPage,
  totalPokemons,
  paginate,
  nextPage,
  previousPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <StyledArrows>
        <StyledLink onClick={() => previousPage()} href="!#">
          &#171; Previous Page
        </StyledLink>
        <StyledLink onClick={() => nextPage()} href="!#">
          Next Page &#187;
        </StyledLink>
      </StyledArrows>
      <StyledList>
        {pageNumbers.map((number) => (
          <StyledListItem key={number}>
            <StyledLink onClick={() => paginate(number)} href="!#">
              {number}
            </StyledLink>
          </StyledListItem>
        ))}
      </StyledList>
    </nav>
  );
};

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const StyledListItem = styled.li`
  margin: 0 5px;
  padding: 0 5px;
  display: flex;
  flex-wrap: wrap;
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-family: 'Pokemon Solid', sans-serif;
  color: #ffcb05;
  text-shadow: 3px 3px 0 #003a70, -1px -1px 0 #003a70, 1px -1px 0 #003a70,
    -1px 1px 0 #003a70, 1px 1px 0 #003a70;
  &:hover {
    color: #b28e03;
  }
  &:active {
    color: #b28e03;
  }
`;

const StyledArrows = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
