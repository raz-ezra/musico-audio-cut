import React, {useRef, ChangeEvent, useEffect, useState} from 'react';
import { FilesResult, HiddenInput, ResultWrapper, StyledButton } from './StyledComponents';

import {cutAudio, CutAudioResult} from './cutAudio';
import Loader from './Loader';

type UploaderProps = {
    ffmpegPath: string;
}

const Uploader = ({ffmpegPath}: UploaderProps): JSX.Element => {
    const inputRef = useRef(null);
    
    const [isCutting, setIsCutting] = useState<boolean>(false);
    const [cutAudioResult, setCutAudioResult] = useState<CutAudioResult>(null);

    

    const handleCutFiles = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(target.files);
        if (files.length > 0) {
            setIsCutting(true);
            cutAudio(files, ffmpegPath).then(result => {
                setIsCutting(false);
                setCutAudioResult(result);
                inputRef.current.value = "";
            });
        }
    };

    return (
        <>
            <HiddenInput 
                ref={inputRef}
                type="file"
                multiple={true}
                accept="mp3,aiff,wav"
                onChange={handleCutFiles}
            />
            <StyledButton
                onClick={() => {
                    setCutAudioResult(null);
                    inputRef.current.click()
                }}
                disabled={!ffmpegPath}
            >
                Select Files to Cut
            </StyledButton>
            {isCutting && <Loader />}
            {cutAudioResult && (
                <ResultWrapper>
                    Finished Cutting Audio!
                    {cutAudioResult.success.length > 0  && (
                        <FilesResult>
                            {`Hover to see cut ${cutAudioResult.success.length > 1 ? "files" : "file"} names`} 
                            <div>
                                <ul>
                                    {cutAudioResult.success.map(file => (<li key={file}>{file}</li>))}
                                </ul>
                            </div>
                        </FilesResult>
                    )}
                    {cutAudioResult.errors.length > 0 && (
                        <FilesResult isError={true}>
                            {`Hover to see ${cutAudioResult.errors.length > 1 ? "files" : "file"} errors`} 
                            <div>
                                <ul>
                                    {cutAudioResult.errors.map(file => (<li key={file}>{file}</li>))}
                                </ul>
                            </div>
                        </FilesResult>
                    )}
                </ResultWrapper>
            )}
            
        </>
    );
}

export default Uploader;