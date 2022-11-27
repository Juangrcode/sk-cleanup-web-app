// React
import React from "react";
import { Provider } from "react-redux";

// Next
import { AppProps } from "next/app";
import Script from "next/script";

// Redux Store
import store from "@store/index";

// Components
// import Theme from '@routes/Theme';
import Auth from "@routes/Auth";
// import Loader from '@components/Loaders/Loader';

// Styles
import "@styles/styles.scss";
import "@styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-CK8TV2NCSX"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CK8TV2NCSX');
        `}
      </Script>
      {/* <Loader /> */}
      {/* <Theme setDark={undefined} darkMode={false}> */}
      <Auth>
        <Component {...pageProps} />
      </Auth>
      {/* </Theme> */}
    </Provider>
  );
};

export default MyApp;
