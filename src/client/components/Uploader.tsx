import React, {useRef, ChangeEvent} from 'react';
import { HiddenInput, StyledButton } from './StyledComponents';
// import { ipcRenderer } from 'electron';

const Uploader = (): JSX.Element => {
    const inputRef = useRef(null);

    const handleCutFiles = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(target.files);
        // ipcRenderer.send('files:cutRequest', files);
        // files.forEach(file => {
        //     console.log(file);
        //     const mp3FilePath = file.name.replace(/\.aiff$|\.wav$|\.wave$/, ".mp3");
        //     const outPath = file.path.replace(file.name, mp3FilePath);
        // })
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
                onClick={() => inputRef.current.click()}
            >
                Select Files to Cut
            </StyledButton>
        </>
    );
}

export default Uploader;