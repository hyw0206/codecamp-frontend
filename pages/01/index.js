import { 
  Wrapper, HeaderMenu, SearchBar,
  SelfMenu, HeadingText, ProfileImage,
  ProfileName, RightArrow, NavMenu,
  NavItem, SelectedNavItem, Line,
  QuestionMenu, QuestionItem,
  QuestionNumber, QuestionText,
  BottomMenu, BottomMenuItem,
  BottomMenuIcon, BottomMenuText
} from '../../styles/style-01'
export default function Quiz1() {
  return (
    <Wrapper>
      <HeaderMenu>
        <SearchBar />
        <SelfMenu>
          <HeadingText>마이</HeadingText>
          <ProfileImage />
          <ProfileName>ㅇㅇㅇ</ProfileName>
          <RightArrow />
        </SelfMenu>
        <NavMenu>
          <NavItem>공지사항</NavItem>
          <NavItem>이벤트</NavItem>
          <SelectedNavItem>FAQ</SelectedNavItem>
          <NavItem>Q&A</NavItem>
        </NavMenu>
      </HeaderMenu>
      <Line />
      <QuestionMenu>
        <QuestionItem>
          <QuestionNumber>Q. 01</QuestionNumber>
          <QuestionText>리뷰 작성은 어떻게 하나요?</QuestionText>
        </QuestionItem>
        <QuestionItem>
          <QuestionNumber>Q. 02</QuestionNumber>
          <QuestionText>리뷰 수정/삭제는 어떻게 하나요?</QuestionText>
        </QuestionItem>
        <QuestionItem>
          <QuestionNumber>Q. 03</QuestionNumber>
          <QuestionText>아이디/비밀번호를 잊어버렸어요</QuestionText>
        </QuestionItem>
        <QuestionItem>
          <QuestionNumber>Q. 04</QuestionNumber>
          <QuestionText>회원탈퇴를 하고싶어요.</QuestionText>
        </QuestionItem>
        <QuestionItem>
          <QuestionNumber>Q. 05</QuestionNumber>
          <QuestionText>출발지 설정은 어떻게 하나요?</QuestionText>
        </QuestionItem>
        <QuestionItem>
          <QuestionNumber>Q. 06</QuestionNumber>
          <QuestionText>비밀번호를 변경하고 싶어요</QuestionText>
        </QuestionItem>
      </QuestionMenu>
      <Line />
      <BottomMenu>
        <BottomMenuItem>
          <BottomMenuIcon />
          <BottomMenuText>홈</BottomMenuText>
        </BottomMenuItem>
        <BottomMenuItem>
          <BottomMenuIcon />
          <BottomMenuText>잇츠로드</BottomMenuText>
        </BottomMenuItem>
        <BottomMenuItem>
          <BottomMenuIcon />
          <BottomMenuText>마이찜</BottomMenuText>
        </BottomMenuItem>
        <BottomMenuItem>
          <BottomMenuIcon />
          <BottomMenuText>마이</BottomMenuText>
        </BottomMenuItem>
      </BottomMenu>
    </Wrapper>
  )
}