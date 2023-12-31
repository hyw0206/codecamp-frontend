import { useState } from "react"

export default function verifyCodePage () {
  
  let onClickChangeCode = () => {
    let code = ''
    for (let i = 0; i < 6; i++) {
      let randint = Math.floor(Math.random() * (10))
      code += String(randint)
    }
    document.getElementById('verify').innerText = code
  }
  const [code, setCode] = useState('000000');

  let onClickChangeCodeState = () => {
    let code = ''
    for (let i = 0; i < 6; i++) {
      let randint = Math.floor(Math.random() * (10))
      code += String(randint)
    }
    setCode(code)
  }
  return (
    <>
      <div id="verify">000000</div>
      <button onClick={onClickChangeCode}>인증번호전송</button>
      <div id="verify">{code}</div>
      <button onClick={onClickChangeCodeState}>인증번호전송</button>

    </>

  )
}