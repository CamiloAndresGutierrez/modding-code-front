import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRouter } from 'next/router';

const BackButton = () => {
  const { back } = useRouter();

  return (
    <div onClick={back} >
      <ArrowBackIosIcon/>
    </div>
  )
}

export default BackButton;
