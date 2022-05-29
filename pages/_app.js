import React from "react";
import { Layout } from "../Components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return(
  <div>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    
  </div>);
}

export default MyApp;
