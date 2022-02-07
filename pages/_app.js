import '../styles/globals.css';
import runMockServer from '../lib/mock';
import { Provider } from 'react-redux';
import { initStore } from '../lib/store/store';
import { fetchCategories } from '../lib/actions/categories';

function MyApp({Component, pageProps}) {
  runMockServer();

  const store = initStore();
  store.dispatch(fetchCategories());

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    );
}

export default MyApp;
