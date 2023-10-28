import React from "react";
import Modal from "react-modal";
import "../app/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  
  Modal.setAppElement("#__next"); 

  return (
    <ClerkProvider {...pageProps} > 
      <Component {...pageProps} />;
    </ClerkProvider>
  ); 
}

export default MyApp;
