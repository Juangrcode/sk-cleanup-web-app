// React
import React from "react";

import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Sans&family=Fira+Sans+Extra+Condensed:wght@900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Audiowide&family=Kalam:wght@700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            href="https://edysan.s3.amazonaws.com/statics/logos/icon-white-black.svg"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Passion+One:wght@400;700;900&display=swap"
            rel="stylesheet"
          />

          <meta charSet="utf-8" />
          {/* <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-CK8TV2NCSX"
          /> */}
          {/* 
          <script id="google-analytics" strategy="afterInteractive"></script> */}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CK8TV2NCSX');`,
            }}
          />
             */}
        </Head>
        <body className="my-body-class">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
