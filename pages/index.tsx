import React from "react";
import Router from "next/router";
import styled from "@emotion/react";
import Header from "../components/Header/Header";
import HeaderLinks from "../components/Header/HeaderLinks";

const dashboardRoutes = [];

export default function Home({ ...rest }) {
  return (
    <div>
      <Header
        color="transparent"
        brand="NextJS Material Kit"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <div>hello</div>
    </div>
  );
}
