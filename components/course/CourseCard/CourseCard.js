import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { makeStyles } from "@material-ui/core/styles";
import { cardTitle } from "styles/jss/nextjs-material-kit.js";
import styled from "@emotion/styled";

const styles = {
  cardTitle,
};

export default function CourseCard({ course }) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <StyledCard>
      <CardBody>
        <h4 className={classes.cardTitle}>{course.title}</h4>
        <CourseNumberContainer>
          {course.numbers?.map((number, index) => (
            <CourseNumber key={index}>{number}</CourseNumber>
          ))}
        </CourseNumberContainer>
        <p>{course.description}</p>
        <CourseSemesterContainer>
          {course.semesters?.map((semester, index) => (
            <CourseSemester key={index}>{semester}</CourseSemester>
          ))}
        </CourseSemesterContainer>
      </CardBody>
    </StyledCard>
  );
}

const StyledCard = styled(Card)`
  height: 200px;
`;

const CourseNumberContainer = styled.div`
  display: flex;
  align-items: center;
  & > :not(:first-child) {
    margin-left: 8px;
  }
`;

const CourseNumber = styled.h6`
  color: #6c757d;
`;

const CourseSemesterContainer = styled.div`
  & > :not(:first-child) {
    margin-left: 24px;
  }
`;

const CourseSemester = styled.span`
  font-weight: 700;
  color: #4169e1;
`;
