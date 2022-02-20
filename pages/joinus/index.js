import MainContainer from "../../components/common/MainContainer";
import styled from "@emotion/styled";
import Parallax from "components/Parallax/Parallax.js";

export default function JoinusPage() {
  return (
    <>
      <StyledParallax filter responsive image="/img/main-bg.jpeg" />
      <MainContainer>
        <PageTitle>About us</PageTitle>
        {/* 내용을 채워주세요 */}
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
