import { useState } from "react";

export default function helloPage() {
  let onClickHello = () => {
    let target = document.getElementById('hello');
    target.innerText = '반갑습니다'
  }
  let onClickHelloState = () => {
    setText("반갑습니다")
  }
  const [text, setText] = useState("안녕하세요");
  return (
    <>
      <div id="hello" onClick={onClickHello}>안녕하세요</div>
      <div onClick={onClickHelloState}>{text}</div>
    </>
  )
}