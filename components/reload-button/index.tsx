import React from 'react';
import CachedIcon from '@mui/icons-material/Cached';

const ReloadButton = ({ callBack = () => {} }) => {
    return (
        <div onClick={() => callBack()}>
            <CachedIcon />
        </div>
    )
};

export default ReloadButton;