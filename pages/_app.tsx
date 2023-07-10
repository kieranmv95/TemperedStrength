import type { AppProps } from "next/app";
import Script from "next/script";
import { Provider } from "react-redux";
import { Open_Sans } from "next/font/google";
import { Header, Footer } from "@/components";
import store, { persistor } from "../redux/store";

import "@/styles/globals.css";
import { PersistGate } from "redux-persist/integration/react";

const font = Open_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KBJ19TPWHW"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-KBJ19TPWHW');
      `}
      </Script>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className={font.className}>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </div>
        </PersistGate>
      </Provider>
    </>
  );
}
