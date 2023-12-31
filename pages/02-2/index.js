import { useState } from "react"

export default function countPage() {
  const onClickCountUp = () => {
    const cnt = Number(document.getElementById('count').innerText) + 1
    document.getElementById('count').innerText = cnt
  }
  const [count, setCount] = useState(0);
  const onClickCountUpState = () => {
    setCount(count + 1)
  }
  return (
    <>
      <div id="count">0</div>
      <button onClick={onClickCountUp}>카운트증가</button>
      <div>{count}</div>
      <button onClick={onClickCountUpState}>카운트증가</button>
    </>
  )
}