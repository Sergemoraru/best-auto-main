import React from "react";
import Modal from "react-modal";
import "../app/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../contexts/auth-provider"

function MyApp({ Component, pageProps }: AppProps) {
  
  Modal.setAppElement("#__next"); 

  return (
    <AuthProvider> 
      <Component {...pageProps} />;
    </AuthProvider>
  ); 
}

export default MyApp;
