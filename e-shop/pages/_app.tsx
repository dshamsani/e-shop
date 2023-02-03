import "../styles/globals.scss";
import { AppProps } from "next/app";
import { store as setupStore } from "../store/store";
import { Provider } from "react-redux";
import { saveState } from "../utils/browser-storage";
import { debounce } from "debounce";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo_client";
import { CookiesProvider } from "react-cookie";
import { appWithTranslation } from "next-i18next";
import { StyledEngineProvider } from "@mui/material/styles";

function MyApp({ Component, pageProps }: AppProps) {
  const store = setupStore();

  store.subscribe(
    debounce(() => {
      saveState(store.getState());
    }, 800)
  );

  return (
    <CookiesProvider>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <StyledEngineProvider injectFirst>
            <Component {...pageProps} />;
          </StyledEngineProvider>
        </Provider>
      </ApolloProvider>
    </CookiesProvider>
  );
}

export default appWithTranslation(MyApp);
