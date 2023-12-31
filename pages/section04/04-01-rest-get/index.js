import axios from "axios";
import { useState } from "react";

export default function RestGetPage() {
  function onClickAsync() {
    const result = axios.get("https://koreanjson.com/posts/1");
    console.log(result); // Promise
  }
  async function onClickSync() {
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result.data);
  }

  return (
    <div>
      <button onClick={onClickAsync}>REST-API 요청하기</button>
      <button onClick={onClickSync}>REST-API 요청하기</button>
    </div>
  );
}
