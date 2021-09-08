import React from 'react';

import musicoLogo from '../resources/icon.png';
import { StyledLoader } from './StyledComponents';

const Loader = (): JSX.Element => {
    return (
        <StyledLoader>
            <div></div>
            <img src={musicoLogo}/>
        </StyledLoader>
    )
};

export default Loader;