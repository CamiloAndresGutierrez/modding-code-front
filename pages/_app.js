
import '../styles/globals.css';
import runMockServer from '../lib/mock';

function MyApp({ Component, pageProps }) {
  runMockServer();
  return <Component {...pageProps} />
}

export default MyApp
