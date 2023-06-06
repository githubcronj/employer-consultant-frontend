import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store";
import Layout from "Components/Layouts/Layout";
import Toast from "Components/Toast/toast";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps,session }) {
  
  return (
    <SessionProvider session={session}> 
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
          <Toast /> 
        </Layout>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
