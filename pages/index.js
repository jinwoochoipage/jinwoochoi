import React from "react";
import classNames from "classnames";
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import HomeCard from "components/home/HomeCard/HomeCard.js";
import styles from "styles/jss/nextjs-material-kit/pages/landingPage.js";
import { makeStyles } from "@material-ui/core/styles";
import styled from "@emotion/styled";

const dashboardRoutes = [];

// TODO: ts-doc 형태에 맞게 주석 추가(카드 추가하는 방법)
const histories = [
  {
    title: "Jul. 2021: ",
    contents:
      "I launched KHU Vision and Learning Reading Group with Prof. Seong Tae Kim and Prof. Gyeong-Moon Park at KHU CS.",
  },
  {
    title: "Jul, 2021: ",
    contents: "Hyogun Lee is joining our lab as an undergraduate intern!",
  },
  {
    title: "Jun, 2021: ",
    contents:
      "Dongho Lee and Jongmin(Paul) Shin joined our lab as master students, and Gyeongho Bae joined our lab as an undergraduate intern!",
  },
];

const HomeCardWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export default function LandingPage({ ...rest }) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div>
      <Parallax filter responsive image="/img/main-bg.jpeg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>We Study Vision And Learning</h1>
              <h4>
                We read, code, discuss and write about computer vision and
                machine learning
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer>
            <HomeCardWrapper>
              {histories.map((history, index) => (
                <GridItem>
                  <HomeCard
                    key={index}
                    title={history.title}
                    contents={history.contents}
                    style={{ width: "40rem" }}
                  />
                </GridItem>
              ))}
            </HomeCardWrapper>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
