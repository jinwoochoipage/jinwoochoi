/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import styles from "styles/jss/nextjs-material-kit/components/footerStyle.js";
import styled from "@emotion/styled";

const Title = styled.p`
  font-size: 15px;
  font-weight: 500;
`;

const Left = styled.div`
  line-height: 20px;
  text-align: left;
`;

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <Left>
            <Title>Vision and Learning Lab</Title>
            <p>
              324 Electronic Information College Building, Gwangju 61005, South
              Korea
              <br />
              Giheung-gu, Yongin-si, Gyeonggi-do, Rep. of Korea, 17104
            </p>
          </Left>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , made with{" "}
          <a
            href="https://www.creative-tim.com?ref=njsmk-footer"
            className={aClasses}
            target="_blank"
          >
            Creative Tim
          </a>{" "}
          Modified by Jinwoo Choi
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
