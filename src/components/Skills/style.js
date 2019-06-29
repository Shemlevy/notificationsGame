import styled from "styled-components";

export const TextProgress = styled.div`
  font-family: MonumentExtended-Ultrabold;
  text-transform: uppercase;
  font-size: 14em;  
  line-height: .85em;
  text-align: left;
  cursor: default;
  user-select: none;
  -webkit-text-stroke: ${({color}) => `1px ${color}`};
  background: ${({progress, color}) => `-webkit-linear-gradient(0,${color} ${progress}%,#282c34 ${progress}%,#282c34 100%)`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;  
  &:first-child {
    font-size: 12.3em;  
  }
`;