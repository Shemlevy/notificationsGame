import styled from 'styled-components';

export const NotificationBox = styled.div`
  position: absolute;
  top: ${({top}) => top}px;
  left: ${({left}) => left}px;
  z-index: 1;
  cursor: pointer;
  user-select: none;
`;
