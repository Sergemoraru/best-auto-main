import React from "react";
import Modal from "react-modal";
import "../styles/globals.css"; // Import your global styles

function MyApp({ Component, pageProps }) {
  // Set the app element for accessibility
  Modal.setAppElement("#__next"); // Use the __next ID as the root element

  return <Component {...pageProps} />;
}

export default MyApp;
