// create nextjs _app file content

import { AppProps } from "next/app";

import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => (
    <Component {...pageProps} />
);

export default App;
