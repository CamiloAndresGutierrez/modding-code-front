import react from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRouter } from 'next/router';

const BackButton = (props) => {
  const { ctaLink } = props;
  const router = useRouter();

  const redirect = (link) => {
    router.push(link);
  }

  return (
    <div onClick={() => redirect(ctaLink)} >
      <ArrowBackIosIcon/>
    </div>
  )
}

export default BackButton;
