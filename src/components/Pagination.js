import styled from 'styled-components';

export const Pagination = ({ pokemonsPerPage, totalPokemons }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a href="!#">{number}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
