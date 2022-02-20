import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import imagesStyles from "styles/jss/nextjs-material-kit/imagesStyles.js";

import { cardTitle } from "styles/jss/nextjs-material-kit.js";
import styled from "styled-components";

const styles = {
  ...imagesStyles,
  cardTitle,
};

export default function PublicationCard({ publication }) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <Card>
      <CardBody>
        <h4 className={classes.cardTitle}>{publication.title}</h4>
        <p>{publication.sub}</p>
        <MainAuthor>{publication.mainAuthor}</MainAuthor>
        {publication.authors?.map((author) => (
          <span>{`, ${author}`}</span>
        ))}
        <br />
        {publication.pdf && <PDFLink href={publication.pdf}>PDF</PDFLink>}
      </CardBody>
    </Card>
  );
}

const MainAuthor = styled.span`
  font-weight: bold;
`;

const PDFLink = styled.a`
  color: #4169e1;
  cursor: pointer;
`;
