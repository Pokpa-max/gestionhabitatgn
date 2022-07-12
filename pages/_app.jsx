import '../styles/globals.css'

import initAuth from "@/utils/firebase/initAuth";

initAuth();

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
