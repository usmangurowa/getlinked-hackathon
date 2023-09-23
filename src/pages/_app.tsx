import { AppProps } from "next/app";
import "@/styles/globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = ({ Component, pageProps }: AppProps) => (
    <>
        <Component {...pageProps} />
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            toastStyle={{
                backgroundColor: "#150E28",
            }}
            progressClassName={"bg-gradient-to-r from-primary to-primary-dark"}
        />
    </>
);

export default App;
