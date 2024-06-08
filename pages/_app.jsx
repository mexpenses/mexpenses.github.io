import "../styles/carousel.css";
import "../styles/tailwind.css";
import {ContextProvider} from "../context";

function App({ Component, pageProps }) {
  return <ContextProvider>
    <Component {...pageProps} />
  </ContextProvider>;
}

export default App;
