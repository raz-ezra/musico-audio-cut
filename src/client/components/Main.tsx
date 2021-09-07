import React from 'react';
import Uploader from './Uploader';
import { 
    FlexColumnCenterWrapper, 
    Headline, 
    InfoButton, 
    StyledBottomImage, 
    StyledHeader, 
    StyledLogo 
} from './StyledComponents';

import logo from '../resources/musico_logo.svg';
import waveOrange from '../resources/wave-orange.svg';
import waveBlue from '../resources/wave-blue.svg';


const Main = (): JSX.Element => {
    return (
        <FlexColumnCenterWrapper>
            <InfoButton>
                ?
                <div>
                    This tool helps with cutting audio files exported from Sibelius using NotePerformer.
                </div>
            </InfoButton>
            <StyledHeader>
                <StyledLogo src={logo}/>
                <Headline>
                    Cut Audio Files
                </Headline>
            </StyledHeader>
            <Uploader />
            <StyledBottomImage src={waveOrange} animationDelay={true}/>
            <StyledBottomImage src={waveBlue}/>
        </FlexColumnCenterWrapper>
    );
}

export default Main;