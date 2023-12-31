import * as S from "../../../styles/style-07"

export default function Quiz() {

  return (
    <div>
      <S.ItemWrapper>
        <S.Checkbox type="checkbox" /> 
        <S.Number>번호</S.Number>
        <S.Title>제목</S.Title>
        <S.Date>작성일</S.Date>
      </S.ItemWrapper>
      <S.ItemWrapper>
        <S.Checkbox  type="checkbox" /> 
        <S.Number>1</S.Number>
        <S.ItemTitle>9월달 시스템 점검 안내입니다.</S.ItemTitle>
        <S.Date>2020.09.19</S.Date>
      </S.ItemWrapper>
      <S.ItemWrapper>
        <S.Checkbox  type="checkbox" /> 
        <S.Number>2</S.Number>
        <S.ItemTitle>안녕하세요! 공지사항 전달드립니다.</S.ItemTitle>
        <S.Date>2020.09.17</S.Date>
      </S.ItemWrapper>
      <S.ItemWrapper>
        <S.Checkbox  type="checkbox" /> 
        <S.Number>3</S.Number>
        <S.ItemTitle>개인정보 처리방침 변경 사전 안내</S.ItemTitle>
        <S.Date>2020.09.12</S.Date>
      </S.ItemWrapper>
      <S.ItemWrapper>
        <S.Checkbox  type="checkbox" /> 
        <S.Number>4</S.Number>
        <S.ItemTitle>iOS 10.0 이하 지원 중단 안내</S.ItemTitle>
        <S.Date>2020.08.10</S.Date>
      </S.ItemWrapper>
      <S.ItemWrapper>
        <S.Checkbox  type="checkbox" /> 
        <S.Number>5</S.Number>
        <S.ItemTitle>이용약관 변경 사전 안내</S.ItemTitle>
        <S.Date>2020.08.01</S.Date>
      </S.ItemWrapper>
      <S.ItemWrapper>
        <S.Checkbox  type="checkbox" /> 
        <S.Number>6</S.Number>
        <S.ItemTitle>개인정보 처리방침 변경 사전 안내</S.ItemTitle>
        <S.Date>2020.07.19</S.Date>
      </S.ItemWrapper>

    </div>
  )
}