import React from "react";
import App from "next/app";
import Head from "next/head";
import "styles/scss/nextjs-material-kit.scss?v=1.2.0";
import Header from "../components/Header/Header";
import HeaderLinks from "../components/Header/HeaderLinks";
import Footer from "components/Footer/Footer.js";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps, ...rest } = this.props;

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Vision and Learning Lab</title>
        </Head>
        <Header
          color="transparent"
          brand="Vision and Learing Lab"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
        />
        <Component {...pageProps} />
        <Footer />
      </React.Fragment>
    );
  }
}
