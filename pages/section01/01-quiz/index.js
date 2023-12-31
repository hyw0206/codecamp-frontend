import {
  Wrapper,
  SearchButton,
  MyMenu,
  MenuHeading,
  MyProfile,
  MyProfileImg,
  MyProfileName,
  RightArrow,
  Navigation,
  QuestionWrap,
  Question,
  QuestionNum,
  QuestionHeading,
  DownArrow,
  FooterNavigation,
  FooterNavigationItem,
  FooterNavigationText,
} from "../../../styles/01-quiz";

export default function QuizOnePage() {
  return (
    <Wrapper>
      <SearchButton></SearchButton>
      <MyMenu>
        <MenuHeading>마이</MenuHeading>
        <MyProfile>
          <MyProfileImg></MyProfileImg>
          <MyProfileName>허영욱</MyProfileName>
          <RightArrow></RightArrow>
        </MyProfile>
      </MyMenu>
      <Navigation>
        <span>공지사항</span>
        <span>이벤트</span>
        <span>FAQ</span>
        <span>Q&A</span>
      </Navigation>
      <QuestionWrap>
        <Question>
          <QuestionNum>Q. 01</QuestionNum>
          <QuestionHeading>
            <span>리뷰 작성은 어떻게 하나요?</span>
            <DownArrow></DownArrow>
          </QuestionHeading>
        </Question>
        <Question>
          <QuestionNum>Q. 02</QuestionNum>
          <QuestionHeading>
            <span>리뷰 수정/삭제는 어떻게 하나요?</span>
            <DownArrow></DownArrow>
          </QuestionHeading>
        </Question>
        <Question>
          <QuestionNum>Q. 03</QuestionNum>
          <QuestionHeading>
            <span>아이디/비밀번호를 잊어버렸어요.</span>
            <DownArrow></DownArrow>
          </QuestionHeading>
        </Question>
        <Question>
          <QuestionNum>Q. 04</QuestionNum>
          <QuestionHeading>
            <span>회원탈퇴를 하고싶어요.</span>
            <DownArrow></DownArrow>
          </QuestionHeading>
        </Question>
        <Question>
          <QuestionNum>Q. 05</QuestionNum>
          <QuestionHeading>
            <span>출발지 설정은 어떻게 하나요?</span>
            <DownArrow></DownArrow>
          </QuestionHeading>
        </Question>
        <Question>
          <QuestionNum>Q. 06</QuestionNum>
          <QuestionHeading>
            <span>비밀번호를 변경하고 싶어요.</span>
            <DownArrow></DownArrow>
          </QuestionHeading>
        </Question>
      </QuestionWrap>
      <FooterNavigation>
        <FooterNavigationItem>
          <div>로고</div>
          <FooterNavigationText>홈</FooterNavigationText>
        </FooterNavigationItem>
      </FooterNavigation>
    </Wrapper>
  );
}
