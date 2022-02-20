import { makeStyles } from "@material-ui/core";
import styles from "styles/jss/nextjs-material-kit/pages/peoplePage.js";
import classNames from "classnames";

export default function MainContainer({ children }) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div className={classes.container}>{children}</div>
    </div>
  );
}
