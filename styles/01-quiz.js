import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 640px;
  border: 1px solid #cacaca;
  margin: 0 auto;
  font-family: 'Noto Sans KR', 'sans-serif'
  background-color: white;
  display: flex;
  flex-direction: column;
`;
export const SearchButton = styled.div`
  width: 32px;
  height: 32px;
  margin: 80px 48px 40px 0;
  background: url("/search-interface-symbol.png") no-repeat;
  align-self: flex-end;
`;
export const MyMenu = styled.div`
  margin: 0 48px 40px 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const MenuHeading = styled.div`
  font-size: 40px;
  font-weight: 700;
`;
export const MyProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const MyProfileImg = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: gray;
`;
export const MyProfileName = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-left: 20px;
`;
export const RightArrow = styled.div`
  width: 28px;
  height: 28px;
  margin: 2px 2px 0 4px;
  background: url("/right-arrow.png") no-repeat;
  background-size: 24px 24px;
`;
export const Navigation = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #cacaca;
  display: flex;
  flex-direction: row;
  span {
    margin-left: 50px;
  }
`;
export const QuestionWrap = styled.div`
  margin-top: 58px;
  border: 1px solid #cacaca;
  border-left: none;
  border-right: none;
  display: flex;
  flex-direction: column;
  > div {
    &:first-child {
      margin-top: 25px;
    }
    &:last-child {
      margin-bottom: 54px;
    }
  }
`;
export const Question = styled.div`
  margin: 0 0 44px 50px;
  display: flex;
  flex-direction: column;
`;
export const QuestionNum = styled.div`
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 400;
  color: #adadad;
`;
export const QuestionHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  span {
    font-size: 24px;
    font-weight: 400px;
    color: #000000;
  }
`;
export const DownArrow = styled.div`
  width: 28px;
  height: 28px;
  margin-right: 72px;
  background: url("/down-arrow.png") no-repeat;
  background-size: 28px 28px;
`;
export const FooterNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const FooterNavigationItem = styled.div`
  margin: 14px 0 14px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div {
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
    background-size: 40px;
  }
`;
export const FooterNavigationText = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #adadad;
`;
