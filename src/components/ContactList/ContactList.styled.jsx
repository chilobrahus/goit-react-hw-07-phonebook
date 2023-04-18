import styled from 'styled-components';

export const Table = styled.table`
  margin: 20px auto;
  width: 400px;
  & td {
    padding: 10px;
  }
  & td:first-child {
    font-weight: bold;
  }
  & button {
    padding: 5px 10px;
    background-color: #a8dc;
    border: 0px;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 200ms ease-in-out, background-color 200ms ease-in;
  }
  & button:hover {
    background-color: #4b9d;
    transform: scale(1.05);
  }
`;