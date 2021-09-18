import React, { useEffect, useState } from 'react';
import ffbinaries from 'ffbinaries';
import path from 'path';

import Uploader from './Uploader';
import { 
    FlexColumnCenterWrapper, 
    Headline, 
    InfoButton, 
    LoadingWrapper, 
    StyledBottomImage, 
    StyledHeader, 
    StyledLogo 
} from './StyledComponents';

import logo from '../resources/musico_logo.svg';
import waveOrange from '../resources/wave-orange.svg';
import waveBlue from '../resources/wave-blue.svg';
import Loader from './Loader';
import os from 'os';


const Main = (): JSX.Element => {
    const [ffmpegPath, setFfmpegPath] = useState<string>(null);

    useEffect(() => {
        console.log("downloading ffmpeg");
        const homedir = require('os').homedir()
        const destination = path.join(homedir, '/.ffmpegBinaries');
        console.log(destination)
        ffbinaries.downloadBinaries('ffmpeg', {destination}, function (err, result) {
            if (err) {
                console.log(err);
            }
            setFfmpegPath(result[0].path + "/" + result[0].filename)
          });
    }, []);
    
    return (
        <FlexColumnCenterWrapper>
            {ffmpegPath ? (
                <>
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
                    <Uploader ffmpegPath={ffmpegPath} />
                    <StyledBottomImage src={waveOrange} animationDelay={true}/>
                    <StyledBottomImage src={waveBlue}/>
                </>
            ) : (
                <LoadingWrapper>
                    <Loader />
                    <div>
                        Downloading resources...
                    </div>
                </LoadingWrapper>
            )}
        </FlexColumnCenterWrapper>
    );
}

export default Main;