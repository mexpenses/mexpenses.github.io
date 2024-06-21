import "../styles/globals.css";
import "../styles/carousel.css";
import {ContextProvider} from "../context";

function App({ Component, pageProps }) {
  return <ContextProvider>
    <Component {...pageProps} />
  </ContextProvider>;
}

export default App;
