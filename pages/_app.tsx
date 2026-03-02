// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/NavBar";
import { LanguageProvider } from "@/context/LanguageContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Navbar />
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
