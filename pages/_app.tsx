import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
import "@/styles/globals.css";
import { Header, Footer } from "@/components";

const font = Open_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={font.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
