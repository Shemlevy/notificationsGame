import styled from 'styled-components';

export const roundBorder = `
  box-shadow: 2px 2px 20px 5px #0000006b;
  border-radius: 5px; 
`;

export const Wrapper = styled.div`
  margin: 20px 200px;
`;

export const StartButton = styled.button`
  position: absolute;
  z-index: 1;
  border: none;
  font-size: 2em;
  padding: 10px 40px;
  font-family: GillSans-bold;
  cursor: pointer;
  background: #e9bb5f;
  color: #282c34;
  outline: none;
  margin: 430px -200px;
  ${roundBorder}
`;

