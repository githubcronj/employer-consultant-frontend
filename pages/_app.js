import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../store';
import Layout from 'Components/Layouts/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
