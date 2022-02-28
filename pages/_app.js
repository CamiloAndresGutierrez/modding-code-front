import '../styles/globals.css';
import runMockServer from 'lib/mock';
import { Provider } from 'react-redux';
import { initStore } from 'lib/store/store';
import { fetchCategories } from 'lib/actions/categories';
import { Auth0Provider } from '@auth0/auth0-react';

function MyApp({ Component, pageProps }) {
  runMockServer();

  const store = initStore();
  store.dispatch(fetchCategories());

  return (
    <Auth0Provider
      domain={process.env.AUTH0_ISSUER_BASE_URL}
      clientId={process.env.AUTH0_CLIENT_ID}
      redirectUri={process.env.AUTH0_BASE_URL}
      audience={process.env.AUTH0_CLIENT_ID}
    >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Auth0Provider>
  );
}

export default MyApp;
