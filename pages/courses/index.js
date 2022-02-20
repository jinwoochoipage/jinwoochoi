import MainContainer from "../../components/common/MainContainer";
import styled from "@emotion/styled";
import Parallax from "components/Parallax/Parallax.js";
import CourseCard from "../../components/course/CourseCard/CourseCard";

/**
 * @courses
 * {
 *  title: '' // string
 *  numbers: ['',''] // stringarray
 *  description: '' // string
 *  semesters: ['', ''] // string array
 * }
 */
const courses = [
  // {
  //   title: "Advanced Linear Algebra",
  //   numbers: ["EE1131", "AA1234"],
  //   description: "안녕하세요 안녕하세요 안녕하세요",
  //   semesters: ["2021 Fall", "2022 Spring"],
  // },
  {
    title: "Advanced Linear Algebra",
  },
  {
    title: "Object Oriented Programming",
  },
];

export default function CoursesPage() {
  return (
    <>
      <StyledParallax filter responsive image="/img/main-bg.jpeg" />
      <MainContainer>
        <PageTitle>Courses</PageTitle>
        <CardContainer>
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </CardContainer>
      </MainContainer>
    </>
  );
}

const PageTitle = styled.h1`
  font-size: 1.5625rem;
  line-height: 1.4em;
  color: #3b4858;
`;

const StyledParallax = styled(Parallax)`
  height: 300px !important;
`;

const CardContainer = styled.div`
  display: grid;
`;
