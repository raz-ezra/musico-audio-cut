import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

/*********** MAIN *************/

const wave = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(10px);
  }
`;

export const FlexColumnCenterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%
`;

export const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
`;

export const StyledLogo = styled.img`
    width: 100px;
`;

export const Headline = styled.div`
    font-weight: 600;
    font-size: 1.5rem;
    color: #9e73af;
    margin-top: 10px;
    font-family: PoppinsSemiBold;
`;

export const StyledBottomImage = styled.img<{animationDelay?: boolean}>`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    animation: ease infinite alternate;
    animation-name: ${wave};
    animation-duration: 5s;
    ${({animationDelay}) => animationDelay ? "animation-delay: 2.5s" : ""}
`;


export const InfoButton = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: rgb(211, 211, 211);
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: PoppinsBold;
  cursor: pointer;

  & div {
      position: absolute;
      top: 100%;
      right: 100%;
      border: 1px black solid;
      background-color: rgba(240,240,240,0.9);
      padding: 5px;
      width: 200px;
      opacity: 0;
      transition: opacity .5s ease;
      font-size: 12px;
      font-family: PoppinsLight;
      pointer-events: none;
  }

  &:hover div {
      opacity: 1;
  }
`;

/*********** UPLOADER *************/

export const StyledButton = styled.button`
    padding: 9px 15px;
    border: 0;
    color: white;
    text-decoration: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: #2b2ce7;
    font-family: PoppinsBold;
    font-size: 16px;
    margin-top: 15px;
`;

export const HiddenInput = styled.input`
    display: none;
`;