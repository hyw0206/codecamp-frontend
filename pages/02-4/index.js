import styled from "@emotion/styled";
import { useState } from "react"

export default function signupFormPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const ErrorInfo = styled.div`
    color: red;
  `
  const onClickCheckInfo = () => {
    if (!email.includes("@")) {
      setEmailError("이메일에 @를 포함시켜주세요.")
      setEmail("")
    } else {
      setEmailError("")
    }
    if (password != passwordCheck) {
      setPasswordError("비밀번호가 서로 다릅니다.")
      setPassword("")
      setPasswordCheck("")
    } else {
      setPasswordError("")
    }
  }
  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }
  const onChangePasswordCheck = (event) => {
    setPasswordCheck(event.target.value)
  }
  return (
    <>
      <label>이메일</label>
      <input type="text" onChange={onChangeEmail}/>
      <ErrorInfo>{emailError}</ErrorInfo>
      <label>비밀번호</label>
      <input type="password" onChange={onChangePassword}/>
      <label>비밀번호 확인</label>
      <input type="password" onChange={onChangePasswordCheck}/>
      <ErrorInfo>{passwordError}</ErrorInfo>
      <button onClick={onClickCheckInfo}>가입하기</button>
    </>
  )
}