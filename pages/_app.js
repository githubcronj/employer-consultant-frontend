import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../store';
import Layout from 'Components/Layouts/Layout';
import Toast from 'Components/Toast/toast';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <Toast /> 
      </Layout>
    </Provider>
  );
}

export default MyApp;
