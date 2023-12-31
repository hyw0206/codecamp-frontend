import styled from '@emotion/styled'

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 640px;
  border: 2px solid gray;
  display: flex;
  flex-direction: column;
  font-family: Noto Sans KR, sans-serif;
`
export const HeaderMenu = styled.div`
  margin: 42px 0 0 50px;
  display: flex;
  flex-direction: column;
`
export const SearchBar = styled.div`
  margin-right: 50px;
  width: 23px;
  height: 23px;
  background: #000000;
  align-self: flex-end;
`
export const SelfMenu = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const HeadingText = styled.h2`
  font-size: 40px;
`
export const ProfileImage = styled.div`
  margin: 0 20px 0 280px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: #000000;
`
export const ProfileName = styled.h3`
  margin-right: 6px;
  font-size: 24px;
`
export const RightArrow = styled.div`
  width: 17px;
  height: 17px;
  background: #000000;
`
export const NavMenu = styled.div`
  margin: 40px 0 60px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const NavItem = styled.div`
  margin-right: 50px;
  font-size: 30px;
  font-weight: 700;
  color: #CACACA;
`
export const SelectedNavItem = styled.div`
  margin-right: 50px;  
  font-size: 30px;
  font-weight: 700;
  color: #FF1B6D;
  text-decoration: underline;
  text-underline-position: under;
`
export const Line = styled.hr`
  width: 640px;
  border-collapse: collapse;
`
export const QuestionMenu = styled.div`
  margin: 25px 0 54px 50px;
  display: flex;
  flex-direction: column;
  div {
    &:last-child {
      margin-bottom: 0;
    }
  }
`
export const QuestionItem = styled.div`
  margin-bottom: 44px;
  display: flex;
  flex-direction: column;
`
export const QuestionNumber = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #ADADAD;
`
export const QuestionText = styled.div`
  margin-bottom: 5px;  
  font-size: 24px;
  font-weight: 400;
`
export const BottomMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`
export const BottomMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const BottomMenuIcon = styled.div`
  margin-bottom: 9px;
  width: 40px;
  height: 40px;
  background: #000000;
`
export const BottomMenuText = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #ADADAD;
`
