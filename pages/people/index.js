import { makeStyles } from "@material-ui/core";
import styles from "styles/jss/nextjs-material-kit/pages/peoplePage.js";
import Header from "components/Header/Header.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import classNames from "classnames";
import PeopleCard from "components/people/PeopleCard/PeopleCard";

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
      <Parallax filter responsive image="/img/main-bg.jpeg"></Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer>
            {peoples.map((people) => (
              <GridItem>
                <PeopleCard people={people} />
              </GridItem>
            ))}
          </GridContainer>
        </div>
      </div>
    </>
  );
}
