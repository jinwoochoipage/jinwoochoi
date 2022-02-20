import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { cardTitle } from "styles/jss/nextjs-material-kit.js";
import styled from "@emotion/styled";

const styles = {
  cardTitle,
};

export default function PeopleCard({ people }) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <StyledCard>
      <CardBody>
        <h4 className={classes.cardTitle}>{people.name}</h4>
        <p>{people.role}</p>
        <PeopleImage src={people.image} />
        <PeopleInfo>
          {people.homepage && (
            <PeopleIcon href={people?.homepage}>
              <img src={require("../PeopleCard/img/homepage.svg")} />
            </PeopleIcon>
          )}
          {people.email && (
            <PeopleIcon href={`mailto:${people?.email}`}>
              <img
                className="icon"
                src={require("../PeopleCard/img/email.svg")}
              />
            </PeopleIcon>
          )}
          {people.github && (
            <PeopleIcon href={people?.github}>
              <img
                className="icon"
                src={require("../PeopleCard/img/github.svg")}
              />
            </PeopleIcon>
          )}
        </PeopleInfo>
      </CardBody>
    </StyledCard>
  );
}

const StyledCard = styled(Card)`
  position: relative;
`;

const PeopleImage = styled.img`
  position: absolute;
  top: -24px;
  right: 24px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const PeopleInfo = styled.div`
  margin-top: 8px;
  width: inherit;
  display: flex;
  align-items: center;
`;

const PeopleIcon = styled.a`
  & > img {
    width: 24px;
    height: 24px;
  }
  :not(:first-child) {
    margin-left: 12px;
  }
`;
