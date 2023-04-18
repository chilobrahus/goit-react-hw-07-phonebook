import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  & input {
    margin-left: 10px;
  }
  & .name {
    margin-left: 25px;
  }
  & button {
    padding: 5px 10px;
    background-color: #a8de;
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