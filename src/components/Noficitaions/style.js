import styled, { keyframes, css } from 'styled-components';

export const exitPoints = {
  topLeft: [-1000,-1000],
  bottomLeft: [1000,-1000],
  topRight: [-1000,1000],
  bottomRight: [1000,1000]
};

const slideOutKeyframes = location => keyframes`
 0% {
    transform: translateY(0) translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateY(${exitPoints[location][0]}px) translateX(${exitPoints[location][1]}px);
    opacity: 0;
  }
`;

const exitAnimation = css`
  animation: ${({ location }) => slideOutKeyframes(location)} 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
`;

export const NotificationBox = styled.div`
  position: absolute;
  top: ${({top}) => top}px;
  left: ${({left}) => left}px;
  z-index: 1;
  cursor: pointer;
  user-select: none;
  ${`.out-enter`} {
    opacity: 0;
  }
  ${`.out-leave`} {
    transform: translateY(-1000px) translateX(-1000px);
    opacity: 0;  }
`;
