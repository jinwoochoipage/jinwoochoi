import Parallax from "components/Parallax/Parallax.js";
import PeopleCard from "components/people/PeopleCard/PeopleCard";
import styled from "@emotion/styled";
import MainContainer from "../../components/common/MainContainer";
import { Jinwoo } from "../../public/img/people";

const peoples = [
  {
    name: "Jinwoo Choi",
    role: "Professor",
    image: Jinwoo,
    email: "jinwoochoi@khu.ac.kr",
    homepage: "https://sites.google.com/site/jchoivision",
    github: "https://github.com/jinwchoi",
  },
  {
    name: "Dongho Lee",
    role: "M.S. Student",
  },
  {
    name: "Jongmin Shin",
    role: "M.S. Student",
  },
  {
    name: "Gyeongho Bae",
    role: "Undergraduate Intern",
  },
  {
    name: "Hyogun Lee",
    role: "Undergraduate Intern",
  },
];

export default function PeoplePage() {
  return (
    <>
      <StyledParallax filter responsive image="/img/main-bg.jpeg" />
      <MainContainer>
        <PageTitle>People</PageTitle>
        <Container>
          {peoples.map((people, index) => (
            <PeopleCard key={index} people={people} />
          ))}
        </Container>
      </MainContainer>
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, auto));
  grid-gap: 24px;
`;

const PageTitle = styled.h1`
  font-size: 1.5625rem;
  line-height: 1.4em;
  color: #3b4858;
`;

const StyledParallax = styled(Parallax)`
  height: 300px !important;
`;
