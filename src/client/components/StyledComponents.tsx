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
`;

export const LoadingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    
    & > div {
        font-size: 12px;
        margin-top: 10px;
    }
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

export const ResultWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #6697D8;
    font-family: PoppinsBold;
`;

export const FilesResult = styled.div<{isError?: boolean}>`
  margin-top: 10px;
  position: relative;
  cursor: pointer;
  font-size: 14px;
  font-family: PoppinsRegular;
  color: ${({isError}) => isError ? "#AD1457" : "#00838F"};

  & div {
      color: black;
      position: absolute;
      bottom: 50%;
      left: 50%;
      border: 1px black solid;
      background-color: rgba(240,240,240,0.9);
      padding-right: 10px;
      width: 250px;
      max-height: 200px;
      z-index: 5;
      opacity: 0;
      visibility: hidden;
      transition: opacity .5s ease;
      font-size: 12px;
      font-family: PoppinsLight;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      cursor: default;
  }

  &:hover div {
      opacity: 1;
      visibility: visible;
  }
`;


/*********** LOADER *************/

const timer = keyframes`
    0% {
        background: conic-gradient(transparent 0, white 0); 
    }
    1% {
        background: conic-gradient(transparent 1%, white 0); 
    }
    2% {
        background: conic-gradient(transparent 2%, white 0); 
    }
    3% {
        background: conic-gradient(transparent 3%, white 0); 
    }
    4% {
        background: conic-gradient(transparent 4%, white 0); 
    }
    5% {
        background: conic-gradient(transparent 5%, white 0); 
    }
    6% {
        background: conic-gradient(transparent 6%, white 0); 
    }
    7% {
        background: conic-gradient(transparent 7%, white 0); 
    }
    8% {
        background: conic-gradient(transparent 8%, white 0); 
    }
    9% {
        background: conic-gradient(transparent 9%, white 0); 
    }
    10% {
        background: conic-gradient(transparent 10%, white 0); 
    }
    11% {
        background: conic-gradient(transparent 11%, white 0); 
    }
    12% {
        background: conic-gradient(transparent 12%, white 0); 
    }
    13% {
        background: conic-gradient(transparent 13%, white 0); 
    }
    14% {
        background: conic-gradient(transparent 14%, white 0); 
    }
    15% {
        background: conic-gradient(transparent 15%, white 0); 
    }
    16% {
        background: conic-gradient(transparent 16%, white 0); 
    }
    17% {
        background: conic-gradient(transparent 17%, white 0); 
    }
    18% {
        background: conic-gradient(transparent 18%, white 0); 
    }
    19% {
        background: conic-gradient(transparent 19%, white 0); 
    }
    20% {
        background: conic-gradient(transparent 20%, white 0); 
    }
    21% {
        background: conic-gradient(transparent 21%, white 0); 
    }
    22% {
        background: conic-gradient(transparent 22%, white 0); 
    }
    23% {
        background: conic-gradient(transparent 23%, white 0); 
    }
    24% {
        background: conic-gradient(transparent 24%, white 0); 
    }
    25% {
        background: conic-gradient(transparent 25%, white 0); 
    }
    26% {
        background: conic-gradient(transparent 26%, white 0); 
    }
    27% {
        background: conic-gradient(transparent 27%, white 0); 
    }
    28% {
        background: conic-gradient(transparent 28%, white 0); 
    }
    29% {
        background: conic-gradient(transparent 29%, white 0); 
    }
    30% {
        background: conic-gradient(transparent 30%, white 0); 
    }
    31% {
        background: conic-gradient(transparent 31%, white 0); 
    }
    32% {
        background: conic-gradient(transparent 32%, white 0); 
    }
    33% {
        background: conic-gradient(transparent 33%, white 0); 
    }
    34% {
        background: conic-gradient(transparent 34%, white 0); 
    }
    35% {
        background: conic-gradient(transparent 35%, white 0); 
    }
    36% {
        background: conic-gradient(transparent 36%, white 0); 
    }
    37% {
        background: conic-gradient(transparent 37%, white 0); 
    }
    38% {
        background: conic-gradient(transparent 38%, white 0); 
    }
    39% {
        background: conic-gradient(transparent 39%, white 0); 
    }
    40% {
        background: conic-gradient(transparent 40%, white 0); 
    }
    41% {
        background: conic-gradient(transparent 41%, white 0); 
    }
    42% {
        background: conic-gradient(transparent 42%, white 0); 
    }
    43% {
        background: conic-gradient(transparent 43%, white 0); 
    }
    44% {
        background: conic-gradient(transparent 44%, white 0); 
    }
    45% {
        background: conic-gradient(transparent 45%, white 0); 
    }
    46% {
        background: conic-gradient(transparent 46%, white 0); 
    }
    47% {
        background: conic-gradient(transparent 47%, white 0); 
    }
    48% {
        background: conic-gradient(transparent 48%, white 0); 
    }
    49% {
        background: conic-gradient(transparent 49%, white 0); 
    }
    50% {
        background: conic-gradient(transparent 50%, white 0); 
    }
    51% {
        background: conic-gradient(transparent 51%, white 0); 
    }
    52% {
        background: conic-gradient(transparent 52%, white 0); 
    }
    53% {
        background: conic-gradient(transparent 53%, white 0); 
    }
    54% {
        background: conic-gradient(transparent 54%, white 0); 
    }
    55% {
        background: conic-gradient(transparent 55%, white 0); 
    }
    56% {
        background: conic-gradient(transparent 56%, white 0); 
    }
    57% {
        background: conic-gradient(transparent 57%, white 0); 
    }
    58% {
        background: conic-gradient(transparent 58%, white 0); 
    }
    59% {
        background: conic-gradient(transparent 59%, white 0); 
    }
    60% {
        background: conic-gradient(transparent 60%, white 0); 
    }
    61% {
        background: conic-gradient(transparent 61%, white 0); 
    }
    62% {
        background: conic-gradient(transparent 62%, white 0); 
    }
    63% {
        background: conic-gradient(transparent 63%, white 0); 
    }
    64% {
        background: conic-gradient(transparent 64%, white 0); 
    }
    65% {
        background: conic-gradient(transparent 65%, white 0); 
    }
    66% {
        background: conic-gradient(transparent 66%, white 0); 
    }
    67% {
        background: conic-gradient(transparent 67%, white 0); 
    }
    68% {
        background: conic-gradient(transparent 68%, white 0); 
    }
    69% {
        background: conic-gradient(transparent 69%, white 0); 
    }
    70% {
        background: conic-gradient(transparent 70%, white 0); 
    }
    71% {
        background: conic-gradient(transparent 71%, white 0); 
    }
    72% {
        background: conic-gradient(transparent 72%, white 0); 
    }
    73% {
        background: conic-gradient(transparent 73%, white 0); 
    }
    74% {
        background: conic-gradient(transparent 74%, white 0); 
    }
    75% {
        background: conic-gradient(transparent 75%, white 0); 
    }
    76% {
        background: conic-gradient(transparent 76%, white 0); 
    }
    77% {
        background: conic-gradient(transparent 77%, white 0); 
    }
    78% {
        background: conic-gradient(transparent 78%, white 0); 
    }
    79% {
        background: conic-gradient(transparent 79%, white 0); 
    }
    80% {
        background: conic-gradient(transparent 80%, white 0); 
    }
    81% {
        background: conic-gradient(transparent 81%, white 0); 
    }
    82% {
        background: conic-gradient(transparent 82%, white 0); 
    }
    83% {
        background: conic-gradient(transparent 83%, white 0); 
    }
    84% {
        background: conic-gradient(transparent 84%, white 0); 
    }
    85% {
        background: conic-gradient(transparent 85%, white 0); 
    }
    86% {
        background: conic-gradient(transparent 86%, white 0); 
    }
    87% {
        background: conic-gradient(transparent 87%, white 0); 
    }
    88% {
        background: conic-gradient(transparent 88%, white 0); 
    }
    89% {
        background: conic-gradient(transparent 89%, white 0); 
    }
    90% {
        background: conic-gradient(transparent 90%, white 0); 
    }
    91% {
        background: conic-gradient(transparent 91%, white 0); 
    }
    92% {
        background: conic-gradient(transparent 92%, white 0); 
    }
    93% {
        background: conic-gradient(transparent 93%, white 0); 
    }
    94% {
        background: conic-gradient(transparent 94%, white 0); 
    }
    95% {
        background: conic-gradient(transparent 95%, white 0); 
    }
    96% {
        background: conic-gradient(transparent 96%, white 0); 
    }
    97% {
        background: conic-gradient(transparent 97%, white 0); 
    }
    98% {
        background: conic-gradient(transparent 98%, white 0); 
    }
    99% {
        background: conic-gradient(transparent 99%, white 0); 
    }
    100% {
        background: conic-gradient(transparent 100%, white 0); 
    }
`;

export const StyledLoader = styled.div`
    --percentage: 0%;


    display: flex;
    margin-top: 20px;
    position: relative;

    & img {
        width: 80px;
        opacity: 0.5;
    }

    & div {
        position: absolute;
        inset: 0;
        animation: ${timer} 2s infinite linear;
        z-index: 10;
    }
`;