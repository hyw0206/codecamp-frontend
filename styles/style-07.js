import styled from '@emotion/styled'

export const ItemWrapper = styled.div`
  display: flex;
  width: 750px;
  padding: 10px;
  border-top: 1px solid gray;
  &:last-child {
    border-bottom: 1px solid gray;
  }
`

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
`

export const Number = styled.span`
  display: inline-block;
  width: 100px;
  text-align: center;
`

export const Title = styled.span`
  display: inline-block;
  width: 500px;
  text-align: center;
`
export const ItemTitle = styled.span`
  display: inline-block;
  width: 500px;
  text-align: left;
`
export const Date = styled.span`
  display: inline-block;
  width: 100px;
  text-align: center;
`