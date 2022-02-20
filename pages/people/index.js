import { makeStyles } from "@material-ui/core";
import styles from "styles/jss/nextjs-material-kit/pages/peoplePage.js";
import Header from "components/Header/Header.js";
import Parallax from "components/Parallax/Parallax.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import classNames from "classnames";
import PeopleCard from "components/people/PeopleCard/PeopleCard";
import styled from "styled-components";

const peoples = [
  {
    name: "Jinwoo Choi",
    role: "Professor",
    image: "",
    email: "jinwoochoi@khu.ac.kr",
    homepage: "https://sites.google.com/site/jchoivision",
    github: "https://github.com/jinwchoi",
  },
  {
    name: "Dongho Lee",
    role: "M.S. Student",
    image: "",
  },
  {
    name: "Jongmin Shin",
    role: "M.S. Student",
    image: "",
  },
  {
    name: "Gyeongho Bae",
    role: "Undergraduate Intern",
    image: "",
  },
  {
    name: "Hyogun Lee",
    role: "Undergraduate Intern",
    image: "",
  },
];

export default function PeoplePage() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <>
      <StyledParallax filter responsive image="/img/main-bg.jpeg" />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Container>
            {peoples.map((people) => (
              <PeopleCard people={people} />
            ))}
          </Container>
        </div>
      </div>
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, auto));
  grid-gap: 24px;
`;

const StyledParallax = styled(Parallax)`
  max-height: 300px;
`;
