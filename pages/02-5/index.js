import styled from "@emotion/styled";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ItsLordLoginPage() {
  const Wrapper = styled.div`
    width: 640px;
    height: 1138px;
    background-image: url("pizza.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.5);
    position: relative;
    margin: 0 auto;
  `
  
  const LogoWrapper = styled.div`
    width: 100px;
    height: 100px;
    top: 224px;
    left: 270px;
    position: absolute;
  `
  const locationStyle = {
    marginLeft: '20px',
  }
  const LocationFloor = styled.div`
    width: 72px;
    height: 24px;
    background-color: #D9D9D9;
    border-radius: 12px;
    position: absolute;
    left: 14px;
    bottom: 5px;
  `
  const Title = styled.div`
    position: absolute;
    left: 210px;
    top: 350px;
    font-weight: 700;
    font-size: 60px;
    color: white;
  `
  
 
  const DeleteInputValueButton = styled.button`
    position: absolute;
    right: 5px;
    top: 10px;
    width: 20px;
    height: 20px;
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
    border-radius: 10px;
    background: #D9D9D9;
  `
  const InputWrapperPassword = styled.div`
    position: relative;
    top: 690px;
    left: 50px;
    width: 540px;
  `
  const LoginButton = styled.button`
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
    position: absolute;
    left: 50px;
    bottom: 284px;
    width: 540px;
    height: 76px;
    background: #FF1B6D;
    opacity: 60%;
    border-radius: 38px;
    line-height: 76px;
    text-align: center;
    font-size: 26px;
    font-weight: 700;
    color: white;
  `
  const Input = styled.input`
position: absolute;
width: 540px;
height: 35px;
background-color: transparent;
border: none;
border-bottom: 1px solid #7D7D7D;
color: white;
font-size: 18px;
&::placeholder {
  color: white;
  font-size: 18px;
}
`
const InputWrapper = styled.div`
    position: relative;
    top: 580px;
    left: 50px;
    width: 540px;
  `
  const NavigationMenu = styled.div`
    position: absolute;
    left: 110px;
    bottom: 216px;
    width: 450px;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `
  const NavigationItem = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: white;
  `
  const NavigationLine = styled.hr`
    width: 0.1px;
    height: 21px;
    border: 1px solid white;
  `
  const KakaotalkLoginButton = styled.button`
    position: absolute;
    left: 50px;
    bottom: 82px;
    width: 540px;
    height: 76px;
    border-radius: 38px;
    border: 1px solid #FAE100;
    background: none;
    color: #FFE100;
    font-size: 26px;
    font-weight: 700;
  `
  const ErrorMessage = styled.div`
    color: #FF1B6D;
    font-size: 16px;
    font-weight: 700;
    position: absolute;
    top: 45px;
  `
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    if (!email.includes("@")) setEmailError("이메일 주소를 다시 확인해주세요.");
    else setEmailError("");
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    if (password.length > 8 && password.length <= 16) setPasswordError("")
    else setPasswordError("8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.")
  }
  const onClickLogin = () => {
    if (emailError == "" && passwordError == "") alert("가입 성공")
  }
  console.log("Rendering")
  return (
    <>
      <Wrapper>
        <LogoWrapper>
          <FontAwesomeIcon style={locationStyle} icon={faLocationPin} size="5x" />
          <LocationFloor />
        </LogoWrapper>
        <Title>ㅇㅇㅇㅇ</Title>
        <InputWrapper>
          <Input value={email} onChange={onChangeEmail} type="text" placeholder="example@email.com" />
          <DeleteInputValueButton>X</DeleteInputValueButton>
          <ErrorMessage>{emailError}</ErrorMessage>
        </InputWrapper>
        
        <InputWrapperPassword>
          <Input value={password} onChange={onChangePassword} type="password" placeholder="password"/>
          <DeleteInputValueButton>X</DeleteInputValueButton>
          <ErrorMessage>{passwordError}</ErrorMessage>
        </InputWrapperPassword>
        
        <LoginButton onClick={onClickLogin}>로그인</LoginButton>

        <NavigationMenu>
          <NavigationItem>이메일 찾기</NavigationItem>
          <NavigationLine />
          <NavigationItem>비밀번호 찾기</NavigationItem>
          <NavigationLine />
          <NavigationItem>회원가입</NavigationItem>
        </NavigationMenu>
        <KakaotalkLoginButton>카카오톡으로 로그인</KakaotalkLoginButton>
      </Wrapper>
      슉 슈슉
    </>
  )
}