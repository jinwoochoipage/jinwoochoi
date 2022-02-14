import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import imagesStyles from "styles/jss/nextjs-material-kit/imagesStyles.js";

import { cardTitle } from "styles/jss/nextjs-material-kit.js";

const styles = {
  ...imagesStyles,
  cardTitle,
};

export default function HomeCard({ title, contents, ...rest }) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <Card {...rest}>
      <CardBody>
        <h4 className={classes.cardTitle}>{title}</h4>
        <p>{contents}</p>
      </CardBody>
    </Card>
  );
}
